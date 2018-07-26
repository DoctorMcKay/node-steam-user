var AdmZip = require('adm-zip');
var ByteBuffer = require('bytebuffer');
var crc32 = require('buffer-crc32');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var LZMA = require('lzma');
var SteamCrypto = require('@doctormckay/steam-crypto');
var SteamUser = require('../index.js');
var Helpers = require('./helpers.js');
var ContentManifest = require('./content_manifest.js');

const VZIP_HEADER = 0x5A56;
const VZIP_FOOTER = 0x767A;

/**
 * Get the list of currently-available content servers.
 * @param {function} callback
 */
SteamUser.prototype.getContentServers = function(callback) {
	if (this._contentServers.length > 0 && Date.now() - this._contentServers.timestamp < (1000 * 60 * 60)) {
		callback(null, JSON.parse(JSON.stringify(this._contentServers)));
		return;
	}

	var list = this.steamServers[SteamUser.EServerType.CS];

	if (!list || list.length == 0) {
		callback(new Error("Server list not yet available"));
		return;
	}

	// pick a random one
	var server = list[Math.floor(Math.random() * list.length)];
	download("http://" + Helpers.ipIntToString(server.server_ip) + ":" + server.server_port + "/serverlist/" + this.cellID + "/20/", "cs.steamcontent.com", (err, res) => {
		if (err) {
			callback(err);
			return;
		}

		if (res.type != 'complete') {
			return;
		}

		try {
			var parsed = require('vdf').parse(res.data.toString('utf8'));
		} catch (ex) {
			callback(new Error("Malformed response"));
			return;
		}

		if (!parsed || !parsed.serverlist || !parsed.serverlist[0]) {
			callback(new Error("Malformed response"));
			return;
		}

		parsed.serverlist.length = 0;
		for (var i in parsed.serverlist) {
			if (parsed.serverlist.hasOwnProperty(i) && i != 'length') {
				parsed.serverlist.length = parseInt(i, 10) + 1;
			}
		}

		this._contentServers = Array.prototype.slice.call(parsed.serverlist);
		callback(null, JSON.parse(JSON.stringify(this._contentServers)));
	});
};

/**
 * Request the decryption key for a particular depot.
 * @param {int} appID
 * @param {int} depotID
 * @param {function} callback
 */
SteamUser.prototype.getDepotDecryptionKey = function(appID, depotID, callback) {
	// Cached locally?

	appID = parseInt(appID, 10);
	depotID = parseInt(depotID, 10);

	this.storage.readFile("depot_key_" + appID + "_" + depotID + ".bin", (err, file) => {
		if (file && file.length > 4 && Math.floor(Date.now() / 1000) - file.readUInt32LE(0) < (60 * 60 * 24 * 14)) {
			callback(null, file.slice(4));
			return;
		}

		this._send(SteamUser.EMsg.ClientGetDepotDecryptionKey, {"depot_id": depotID, "app_id": appID}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				callback(Helpers.eresultError(body.eresult));
				return;
			}

			if (body.depot_id != depotID) {
				callback(new Error("Did not receive decryption key for correct depot"));
				return;
			}

			var key = body.depot_encryption_key.toBuffer();
			var file = Buffer.concat([new Buffer(4), key]);
			file.writeUInt32LE(Math.floor(Date.now() / 1000), 0);
			this.storage.writeFile("depot_key_" + appID + "_" + depotID + ".bin", file, () => {
				callback(null, body.depot_encryption_key.toBuffer());
			});
		});
	});
};

/**
 * Get an auth token for a particular CDN server.
 * @param {int} appID
 * @param {int} depotID
 * @param {string} hostname - The hostname of the CDN server for which we want a token
 * @param {function} callback
 */
SteamUser.prototype.getCDNAuthToken = function(appID, depotID, hostname, callback) {
	if (this._contentServerTokens[depotID + '_' + hostname] && this._contentServerTokens[depotID + '_' + hostname].expires - Date.now() > (1000 * 60 * 60)) {
		callback(null, this._contentServerTokens[depotID + '_' + hostname].token, this._contentServerTokens[depotID + '_' + hostname].expires);
		return;
	}

	this._send(SteamUser.EMsg.ClientGetCDNAuthToken, {"app_id": appID, "depot_id": depotID, "host_name": hostname}, (body) => {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		this._contentServerTokens[depotID + '_' + hostname] = {
			"token": body.token,
			"expires": new Date(body.expiration_time * 1000)
		};
		callback(null, body.token, new Date(body.expiration_time * 1000));
	});
};

/**
 * Download a depot content manifest.
 * @param {int} appID
 * @param {int} depotID
 * @param {string} manifestID
 * @param {function} callback
 */
SteamUser.prototype.getManifest = function(appID, depotID, manifestID, callback) {
	this.getRawManifest(appID, depotID, manifestID, (err, manifest) => {
		if (err) {
			callback(err);
			return;
		}

		try {
			manifest = ContentManifest.parse(manifest);
		} catch (ex) {
			callback(ex);
			return;
		}


		if (!manifest.filenames_encrypted) {
			callback(null, manifest);
			return;
		}

		this.getDepotDecryptionKey(appID, depotID, function(err, key) {
			if (err) {
				callback(err);
				return;
			}

			ContentManifest.decryptFilenames(manifest, key);
			callback(null, manifest);
		});
	});
};

/**
 * Download and decompress a manifest, but don't parse it into a JavaScript object.
 * @param {int} appID
 * @param {int} depotID
 * @param {string} manifestID
 * @param {function} callback
 */
SteamUser.prototype.getRawManifest = function(appID, depotID, manifestID, callback) {
	this.getContentServers((err, servers) => {
		if (err) {
			callback(err);
			return;
		}

		var server = servers[Math.floor(Math.random() * servers.length)];
		var urlBase = "http://" + server.Host;
		var vhost = server.vhost || server.Host;

		this.getCDNAuthToken(appID, depotID, vhost, (err, token, expires) => {
			if (err) {
				callback(err);
				return;
			}

			download(urlBase + "/depot/" + depotID + "/manifest/" + manifestID + "/5" + token, vhost, (err, res) => {
				if (err) {
					callback(err);
					return;
				}

				if (res.type != 'complete') {
					return;
				}

				unzip(res.data, callback);
			});
		});
	});
};

/**
 * Download a chunk from a content server.
 * @param {int} appID - The AppID to which this chunk belongs
 * @param {int} depotID - The depot ID to which this chunk belongs
 * @param {string} chunkSha1 - This chunk's SHA1 hash (aka its ID)
 * @param {object} [contentServer] - If not provided, one will be chosen randomly. Should be an object identical to those output by getContentServers
 * @param {function} callback - First argument is Error/null, second is a Buffer containing the chunk's data
 */
SteamUser.prototype.downloadChunk = function(appID, depotID, chunkSha1, contentServer, callback) {
	if (typeof contentServer === 'function') {
		callback = contentServer;
		contentServer = null;
	}

	chunkSha1 = chunkSha1.toLowerCase();

	if (!contentServer) {
		this.getContentServers((err, servers) => {
			if (err) {
				callback(err);
				return;
			}

			contentServer = servers[Math.floor(Math.random() * servers.length)];
			performDownload.call(this);
		});
	} else {
		performDownload.call(this);
	}

	function performDownload() {
		var urlBase = "http://" + contentServer.Host;
		var vhost = contentServer.vhost || contentServer.Host;

		this.getCDNAuthToken(appID, depotID, vhost, (err, token, expires) => {
			if (err) {
				callback(err);
				return;
			}

			this.getDepotDecryptionKey(appID, depotID, (err, key) => {
				if (err) {
					callback(err);
					return;
				}

				download(urlBase + "/depot/" + depotID + "/chunk/" + chunkSha1 + token, vhost, (err, res) => {
					if (err) {
						callback(err);
						return;
					}

					if (res.type != 'complete') {
						return;
					}

					unzip(SteamCrypto.symmetricDecrypt(res.data, key), (err, result) => {
						if (err) {
							callback(err);
							return;
						}

						// Verify the SHA1
						var hash = require('crypto').createHash('sha1');
						hash.update(result);
						if (hash.digest('hex') != chunkSha1) {
							callback(new Error("Checksum mismatch"));
							return;
						}

						callback(null, result);
					});
				});
			});
		});
	}
};

/**
 * Download a specific file from a depot.
 * @param {int} appID - The AppID which owns the file you want
 * @param {int} depotID - The depot ID which contains the file you want
 * @param {object} fileManifest - An object from the "files" array of a downloaded and parsed manifest
 * @param {string} [outputFilePath] - If provided, downloads the file to this location on the disk. If not, downloads the file into memory and sends it back in the callback.
 * @param {function} callback - (err, file) but file is only present if outputFilePath is not set
 * @returns {EventEmitter} An EventEmitter which receives `progress` events with arguments (bytesDownloaded, totalSize)
 */
SteamUser.prototype.downloadFile = function(appID, depotID, fileManifest, outputFilePath, callback) {
	if (typeof outputFilePath === 'function') {
		callback = outputFilePath;
		outputFilePath = null;
	}

	if (fileManifest.flags & SteamUser.EDepotFileFlag.Directory) {
		throw new Error("Attempted to download a directory " + fileManifest.filename);
	}

	var numWorkers = 4;

	fileManifest.size = parseInt(fileManifest.size, 10);
	var bytesDownloaded = 0;

	var availableServers;
	var servers = [];
	var serversInUse = [];
	var currentServerIdx = 0;
	var downloadBuffer;
	var outputFd;
	var killed = false;
	var outputEmitter = new EventEmitter();

	this.getContentServers((err, contentServers) => {
		if (err) {
			callback(err);
			return;
		}

		// Choose some content servers
		availableServers = contentServers;
		for (var i = 0; i < numWorkers; i++) {
			assignServer(i);
			serversInUse.push(false);
		}

		if (outputFilePath) {
			fs.open(outputFilePath, "w", (err, fd) => {
				if (err) {
					callback(err);
					return;
				}

				outputFd = fd;
				fs.truncate(outputFd, parseInt(fileManifest.size, 10), (err) => {
					if (err) {
						fs.closeSync(outputFd);
						callback(err);
						return;
					}

					beginDownload.call(this);
				});
			});
		} else {
			downloadBuffer = new Buffer(parseInt(fileManifest.size, 10));
			beginDownload.call(this);
		}
	});

	return outputEmitter;

	function beginDownload() {
		var self = this;
		var queue = require('async').queue(function dlChunk(chunk, cb) {
			var serverIdx;

			while (true) {
				// Find the next available download slot
				if (serversInUse[currentServerIdx]) {
					incrementCurrentServerIdx();
				} else {
					serverIdx = currentServerIdx;
					serversInUse[serverIdx] = true;
					break;
				}
			}

			self.downloadChunk(appID, depotID, chunk.sha, servers[serverIdx], (err, data) => {
				serversInUse[serverIdx] = false;

				if (killed) {
					return;
				}

				if (err) {
					// Error downloading chunk
					if ((chunk.retries && chunk.retries >= 5) || availableServers.length == 0) {
						// This chunk hasn't been retired the max times yet, and we have servers left.
						callback(err);
						queue.kill();
						killed = true;
					} else {
						chunk.retries = chunk.retries || 0;
						chunk.retries++;
						assignServer(serverIdx);
						dlChunk(chunk, cb);
					}

					return;
				}

				bytesDownloaded += data.length;
				outputEmitter.emit('progress', bytesDownloaded, fileManifest.size);

				// Chunk downloaded successfully
				if (outputFilePath) {
					fs.write(outputFd, data, 0, data.length, parseInt(chunk.offset, 10), (err) => {
						if (err) {
							callback(err);
							queue.kill();
							killed = true;
						} else {
							cb();
						}
					});
				} else {
					data.copy(downloadBuffer, parseInt(chunk.offset, 10));
					cb();
				}
			});
		}, numWorkers);

		fileManifest.chunks.forEach((chunk) => {
			queue.push(JSON.parse(JSON.stringify(chunk)));
		});

		queue.drain = () => {
			// Verify hash
			var hash;
			if (outputFilePath) {
				fs.close(outputFd, (err) => {
					if (err) {
						callback(err);
						return;
					}

					// File closed. Now re-open it so we can hash it!
					hash = require('crypto').createHash('sha1');
					fs.createReadStream(outputFilePath).pipe(hash);
					hash.on('readable', () => {
						if (!hash.read) {
							return; // already done
						}

						hash = hash.read();
						if (hash.toString('hex') != fileManifest.sha_content) {
							callback(new Error("File checksum mismatch"));
						} else {
							callback(null);
						}
					});
				});
			} else {
				hash = require('crypto').createHash('sha1');
				hash.update(downloadBuffer);
				if (hash.digest('hex') != fileManifest.sha_content) {
					callback(new Error("File checksum mismatch"));
					return;
				}

				callback(null, downloadBuffer);
			}
		};
	}

	function assignServer(idx) {
		servers[idx] = availableServers.splice(Math.floor(Math.random() * availableServers.length), 1)[0];
	}

	function incrementCurrentServerIdx() {
		if (++currentServerIdx >= servers.length) {
			currentServerIdx = 0;
		}
	}
};

/**
 * Request decryption keys for a beta branch of an app from its beta password.
 * @param {int} appID
 * @param {string} password
 * @param {function} callback - First arg is Error|null, second is an object mapping branch names to their decryption keys
 */
SteamUser.prototype.getAppBetaDecryptionKeys = function(appID, password, callback) {
	this._send(SteamUser.EMsg.ClientCheckAppBetaPassword, {"app_id": appID, "betapassword": password}, (body) => {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		var branches = {};
		(body.betapasswords || []).forEach((beta) => {
			branches[beta.betaname] = new Buffer(beta.betapassword, 'hex');
		});

		callback(null, branches);
	});
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientServerList] = function(body) {
	// It appears that each message of this type is for one server type.
	var servers = {};

	body.servers.forEach((server) => {
		servers[server.server_type] = servers[server.server_type] || [];
		servers[server.server_type].push(server);
	});

	for (var i in servers) {
		if (servers.hasOwnProperty(i)) {
			this.steamServers[i] = servers[i];
		}
	}

	if (!this.contentServersReady && this.steamServers[SteamUser.EServerType.CS]) {
		this.contentServersReady = true;
		this.emit('contentServersReady');
	}
};

// Private functions
function download(url, hostHeader, destinationFilename, callback) {
	if (typeof destinationFilename === 'function') {
		callback = destinationFilename;
		destinationFilename = null;
	}

	var options = require('url').parse(url);
	options.method = "GET";
	options.headers = {
		"Host": hostHeader,
		"Accept": "text/html,*/*;q=0.9",
		"Accept-Encoding": "gzip,identity,*;q=0",
		"Accept-Charset": "ISO-8859-1,utf-8,*;q=0.7",
		"User-Agent": "Valve/Steam HTTP Client 1.0"
	};

	var req = require('http').request(options, (res) => {
		if (res.statusCode != 200) {
			callback(new Error("HTTP error " + res.statusCode));
			return;
		}

		res.setEncoding('binary'); // apparently using null just doesn't work... thanks node
		var stream = res;

		if (res.headers['content-encoding'] && res.headers['content-encoding'] == 'gzip') {
			stream = require('zlib').createGunzip();
			stream.setEncoding('binary');
			res.pipe(stream);
		}

		var totalSizeBytes = parseInt(res.headers['content-length'] || 0, 10);
		var receivedBytes = 0;
		var dataBuffer = new Buffer(0);

		if (destinationFilename) {
			stream.pipe(require('fs').createWriteStream(destinationFilename));
		}

		stream.on('data', (chunk) => {
			if (typeof chunk === 'string') {
				chunk = new Buffer(chunk, 'binary');
			}

			receivedBytes += chunk.length;

			if (!destinationFilename) {
				dataBuffer = Buffer.concat([dataBuffer, chunk]);
			}

			callback(null, {"type": "progress", "receivedBytes": receivedBytes, "totalSizeBytes": totalSizeBytes});
		});

		stream.on('end', () => {
			callback(null, {"type": "complete", "data": dataBuffer});
		});
	});

	req.on('error', (err) => {
		callback(err);
	});

	req.end();
}

function unzip(data, callback) {
	// VZip or zip?
	if (data.readUInt16LE(0) == VZIP_HEADER) {
		// VZip
		data = ByteBuffer.wrap(data, ByteBuffer.LITTLE_ENDIAN);

		data.skip(2); // header
		if (String.fromCharCode(data.readByte()) != 'a') {
			callback(new Error("Expected VZip version 'a'"));
		}

		data.skip(4); // either a timestamp or a CRC; either way, forget it
		var properties = data.slice(data.offset, data.offset + 5).toBuffer();
		data.skip(5);

		var compressedData = data.slice(data.offset, data.limit - 10);
		data.skip(compressedData.remaining());

		var decompressedCrc = data.readUint32();
		var decompressedSize = data.readUint32();
		if (data.readUint16() != VZIP_FOOTER) {
			callback(new Error("Didn't see expected VZip footer"));
		}

		var uncompressedSizeBuffer = new Buffer(8);
		uncompressedSizeBuffer.writeUInt32LE(decompressedSize, 0);
		uncompressedSizeBuffer.writeUInt32LE(0, 4);

		LZMA.decompress(Buffer.concat([properties, uncompressedSizeBuffer, compressedData.toBuffer()]), (result, err) => {
			if (err) {
				callback(err);
				return;
			}

			result = new Buffer(result); // it's a byte array

			// Verify the result
			if (decompressedSize != result.length) {
				callback(new Error("Decompressed size was not valid"));
				return;
			}

			if (crc32.unsigned(result) != decompressedCrc) {
				callback(new Error("CRC check failed on decompressed data"));
				return;
			}

			callback(null, result);
		});
	} else {
		try {
			callback(null, (new AdmZip(data)).readFile('z'));
		} catch (ex) {
			callback(ex);
		}
	}
}
