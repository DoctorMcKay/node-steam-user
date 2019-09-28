const AdmZip = require('adm-zip');
const ByteBuffer = require('bytebuffer');
const FS = require('fs');
const LZMA = require('lzma');
const StdLib = require('@doctormckay/stdlib');
const SteamCrypto = require('@doctormckay/steam-crypto');
const VDF = require('vdf');

const Helpers = require('./helpers.js');
const ContentManifest = require('./content_manifest.js');
const SteamUser = require('../index.js');

const VZIP_HEADER = 0x5A56;
const VZIP_FOOTER = 0x767A;

/**
 * Get the list of currently-available content servers.
 * @param {function} [callback]
 * @return Promise
 */
SteamUser.prototype.getContentServers = function(callback) {
	return StdLib.Promises.callbackPromise(['servers'], callback, (resolve, reject) => {
		if (this._contentServers.length > 0 && Date.now() - this._contentServersTimestamp < (1000 * 60 * 60)) {
			return resolve({"servers": JSON.parse(JSON.stringify(this._contentServers))});
		}

		this._apiRequest("GET", "IContentServerDirectoryService", "GetServersForSteamPipe", 1, {"cell_id": this.cellID || 0}, (err, res) => {
			if (err) {
				return reject(err);
			}

			if (!res || !res.response || !res.response.servers) {
				return reject(new Error("Malformed response"));
			}

			let servers = [];

			for (let serverKey in res.response.servers) {
				let server = res.response.servers[serverKey];
				if (server.type == "CDN" || server.type == "SteamCache") {
					servers.push(server);
				}
			}

			if (servers.length == 0) {
				return reject(new Error("No content servers available"));
			}

			servers = servers.map((srv) => {
				return {
					"type": srv.type,
					"sourceid": srv.source_id,
					"cell": srv.cell_id,
					"load": srv.load,
					"preferred_server": srv.preferred_server,
					"weightedload": srv.weighted_load,
					"NumEntriesInClientList": srv.num_entries_in_client_list,
					"Host": srv.host,
					"vhost": srv.vhost,
					"https_support": srv.https_support,
					"usetokenauth": "1"
				};
			});

			this._contentServers = servers;
			this._contentServersTimestamp = Date.now();
			// Return a copy of the array, not the original
			return resolve({"servers": JSON.parse(JSON.stringify(servers))});
		});
	});
};

/**
 * Request the decryption key for a particular depot.
 * @param {int} appID
 * @param {int} depotID
 * @param {function} [callback]
 * @return Promise
 */
SteamUser.prototype.getDepotDecryptionKey = function(appID, depotID, callback) {
	// Cached locally?

	appID = parseInt(appID, 10);
	depotID = parseInt(depotID, 10);

	return StdLib.Promises.callbackPromise(['key'], callback, async (accept, reject) => {
		let filename = `depot_key_${appID}_${depotID}.bin`;
		let file = await this._readFile(filename);
		if (file && file.length > 4 && Math.floor(Date.now() / 1000) - file.readUInt32LE(0) < (60 * 60 * 24 * 14)) {
			return accept({"key": file.slice(4)});
		}

		this._send(SteamUser.EMsg.ClientGetDepotDecryptionKey, {"depot_id": depotID, "app_id": appID}, async (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			if (body.depot_id != depotID) {
				return reject(new Error("Did not receive decryption key for correct depot"));
			}

			let key = body.depot_encryption_key;
			file = Buffer.concat([Buffer.alloc(4), key]);
			file.writeUInt32LE(Math.floor(Date.now() / 1000), 0);

			await this._saveFile(filename, file);
			return accept({key});
		});
	});
};

/**
 * Get an auth token for a particular CDN server.
 * @param {int} appID
 * @param {int} depotID
 * @param {string} hostname - The hostname of the CDN server for which we want a token
 * @param {function} [callback]
 * @return Promise
 */
SteamUser.prototype.getCDNAuthToken = function(appID, depotID, hostname, callback) {
	return StdLib.Promises.callbackPromise(['token', 'expires'], callback, (accept, reject) => {
		if (this._contentServerTokens[depotID + '_' + hostname] && this._contentServerTokens[depotID + '_' + hostname].expires - Date.now() > (1000 * 60 * 60)) {
			return accept(this._contentServerTokens[depotID + '_' + hostname]);
		}

		this._send(SteamUser.EMsg.ClientGetCDNAuthToken, {
			"app_id": appID,
			"depot_id": depotID,
			"host_name": hostname
		}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			return accept(this._contentServerTokens[depotID + '_' + hostname] = {
				"token": body.token,
				"expires": new Date(body.expiration_time * 1000)
			});
		});
	});
};

/**
 * Download a depot content manifest.
 * @param {int} appID
 * @param {int} depotID
 * @param {string} manifestID
 * @param {function} [callback]
 * @return Promise
 */
SteamUser.prototype.getManifest = function(appID, depotID, manifestID, callback) {
	return StdLib.Promises.callbackPromise(['manifest'], callback, (accept, reject) => {
		this.getRawManifest(appID, depotID, manifestID, (err, manifest) => {
			if (err) {
				return reject(err);
			}

			try {
				manifest = ContentManifest.parse(manifest);
			} catch (ex) {
				return reject(ex);
			}


			if (!manifest.filenames_encrypted) {
				return accept({manifest});
			}

			this.getDepotDecryptionKey(appID, depotID, (err, key) => {
				if (err) {
					return reject(err);
				}

				ContentManifest.decryptFilenames(manifest, key);
				return accept({manifest});
			});
		});
	});
};

/**
 * Download and decompress a manifest, but don't parse it into a JavaScript object.
 * @param {int} appID
 * @param {int} depotID
 * @param {string} manifestID
 * @param {function} [callback]
 */
SteamUser.prototype.getRawManifest = function(appID, depotID, manifestID, callback) {
	return StdLib.Promises.callbackPromise(['manifest'], callback, (accept, reject) => {
		this.getContentServers((err, servers) => {
			if (err) {
				return reject(err);
			}

			let server = servers[Math.floor(Math.random() * servers.length)];
			let urlBase = "http://" + server.Host;
			let vhost = server.vhost || server.Host;

			this.getCDNAuthToken(appID, depotID, vhost, (err, token, expires) => {
				if (err) {
					return reject(err);
				}

				download(urlBase + "/depot/" + depotID + "/manifest/" + manifestID + "/5" + token, vhost, (err, res) => {
					if (err) {
						return reject(err);
					}

					if (res.type != 'complete') {
						return;
					}

					unzip(res.data, (err, manifest) => {
						if (err) {
							return reject(err);
						} else {
							return accept({manifest});
						}
					});
				});
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
 * @param {function} [callback] - First argument is Error/null, second is a Buffer containing the chunk's data
 * @return Promise
 */
SteamUser.prototype.downloadChunk = function(appID, depotID, chunkSha1, contentServer, callback) {
	if (typeof contentServer === 'function') {
		callback = contentServer;
		contentServer = null;
	}

	chunkSha1 = chunkSha1.toLowerCase();

	return StdLib.Promises.callbackPromise(['chunk'], callback, (accept, reject) => {
		if (!contentServer) {
			this.getContentServers((err, servers) => {
				if (err) {
					return reject(err);
				}

				contentServer = servers[Math.floor(Math.random() * servers.length)];
				performDownload.call(this);
			});
		} else {
			performDownload.call(this);
		}

		function performDownload() {
			let urlBase = "http://" + contentServer.Host;
			let vhost = contentServer.vhost || contentServer.Host;

			this.getCDNAuthToken(appID, depotID, vhost, (err, token, expires) => {
				if (err) {
					return reject(err);
				}

				this.getDepotDecryptionKey(appID, depotID, (err, key) => {
					if (err) {
						return reject(err);
					}

					download(urlBase + "/depot/" + depotID + "/chunk/" + chunkSha1 + token, vhost, (err, res) => {
						if (err) {
							return reject(err);
						}

						if (res.type != 'complete') {
							return;
						}

						unzip(SteamCrypto.symmetricDecrypt(res.data, key), (err, result) => {
							if (err) {
								return reject(err);
							}

							// Verify the SHA1
							if (StdLib.Hashing.sha1(result) != chunkSha1) {
								return reject(new Error("Checksum mismatch"));
							}

							return accept({"chunk": result});
						});
					});
				});
			});
		}
	});
};

/**
 * Download a specific file from a depot.
 * @param {int} appID - The AppID which owns the file you want
 * @param {int} depotID - The depot ID which contains the file you want
 * @param {object} fileManifest - An object from the "files" array of a downloaded and parsed manifest
 * @param {string} [outputFilePath] - If provided, downloads the file to this location on the disk. If not, downloads the file into memory and sends it back in the callback.
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.downloadFile = function(appID, depotID, fileManifest, outputFilePath, callback) {
	if (typeof outputFilePath === 'function') {
		callback = outputFilePath;
		outputFilePath = null;
	}

	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		if (fileManifest.flags & SteamUser.EDepotFileFlag.Directory) {
			return reject(new Error("Attempted to download a directory " + fileManifest.filename));
		}

		let numWorkers = 4;

		fileManifest.size = parseInt(fileManifest.size, 10);
		let bytesDownloaded = 0;

		let availableServers;
		let servers = [];
		let serversInUse = [];
		let currentServerIdx = 0;
		let downloadBuffer;
		let outputFd;
		let killed = false;

		this.getContentServers((err, contentServers) => {
			if (err) {
				return reject(err);
			}

			// Choose some content servers
			availableServers = contentServers;
			for (let i = 0; i < numWorkers; i++) {
				assignServer(i);
				serversInUse.push(false);
			}

			if (outputFilePath) {
				FS.open(outputFilePath, "w", (err, fd) => {
					if (err) {
						return reject(err);
					}

					outputFd = fd;
					FS.ftruncate(outputFd, parseInt(fileManifest.size, 10), (err) => {
						if (err) {
							FS.closeSync(outputFd);
							return reject(err);
						}

						beginDownload.call(this);
					});
				});
			} else {
				downloadBuffer = Buffer.alloc(parseInt(fileManifest.size, 10));
				beginDownload.call(this);
			}
		});

		function beginDownload() {
			let self = this;
			let queue = new StdLib.DataStructures.AsyncQueue(function dlChunk(chunk, cb) {
				let serverIdx;

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
							reject(err);
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
					if (typeof callback === 'function') {
						callback(null, {
							"type": "progress",
							bytesDownloaded,
							"totalSizeBytes": fileManifest.size
						});
					}

					// Chunk downloaded successfully
					if (outputFilePath) {
						FS.write(outputFd, data, 0, data.length, parseInt(chunk.offset, 10), (err) => {
							if (err) {
								reject(err);
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
				let hash;
				if (outputFilePath) {
					FS.close(outputFd, (err) => {
						if (err) {
							return reject(err);
						}

						// File closed. Now re-open it so we can hash it!
						hash = require('crypto').createHash('sha1');
						FS.createReadStream(outputFilePath).pipe(hash);
						hash.on('readable', () => {
							if (!hash.read) {
								return; // already done
							}

							hash = hash.read();
							if (hash.toString('hex') != fileManifest.sha_content) {
								return reject(new Error("File checksum mismatch"));
							} else {
								accept({
									"type": "complete"
								});
							}
						});
					});
				} else {
					hash = require('crypto').createHash('sha1');
					hash.update(downloadBuffer);
					if (hash.digest('hex') != fileManifest.sha_content) {
						return reject(new Error("File checksum mismatch"));
					}

					return accept({
						"type": "complete",
						"file": downloadBuffer
					});
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
	});
};

/**
 * Request decryption keys for a beta branch of an app from its beta password.
 * @param {int} appID
 * @param {string} password
 * @param {function} [callback] - First arg is Error|null, second is an object mapping branch names to their decryption keys
 * @return Promise
 */
SteamUser.prototype.getAppBetaDecryptionKeys = function(appID, password, callback) {
	return StdLib.Promises.callbackPromise(['keys'], callback, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientCheckAppBetaPassword, {"app_id": appID, "betapassword": password}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			let branches = {};
			(body.betapasswords || []).forEach((beta) => {
				branches[beta.betaname] = new Buffer(beta.betapassword, 'hex');
			});

			return accept({"keys": branches});
		});
	});
};

// Private functions
function download(url, hostHeader, destinationFilename, callback) {
	if (typeof destinationFilename === 'function') {
		callback = destinationFilename;
		destinationFilename = null;
	}

	let options = require('url').parse(url);
	options.method = "GET";
	options.headers = {
		"Host": hostHeader,
		"Accept": "text/html,*/*;q=0.9",
		"Accept-Encoding": "gzip,identity,*;q=0",
		"Accept-Charset": "ISO-8859-1,utf-8,*;q=0.7",
		"User-Agent": "Valve/Steam HTTP Client 1.0"
	};

	let req = require('http').request(options, (res) => {
		if (res.statusCode != 200) {
			callback(new Error("HTTP error " + res.statusCode));
			return;
		}

		res.setEncoding('binary'); // apparently using null just doesn't work... thanks node
		let stream = res;

		if (res.headers['content-encoding'] && res.headers['content-encoding'] == 'gzip') {
			stream = require('zlib').createGunzip();
			stream.setEncoding('binary');
			res.pipe(stream);
		}

		let totalSizeBytes = parseInt(res.headers['content-length'] || 0, 10);
		let receivedBytes = 0;
		let dataBuffer = new Buffer(0);

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
		let properties = data.slice(data.offset, data.offset + 5).toBuffer();
		data.skip(5);

		let compressedData = data.slice(data.offset, data.limit - 10);
		data.skip(compressedData.remaining());

		let decompressedCrc = data.readUint32();
		let decompressedSize = data.readUint32();
		if (data.readUint16() != VZIP_FOOTER) {
			callback(new Error("Didn't see expected VZip footer"));
		}

		let uncompressedSizeBuffer = new Buffer(8);
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

			if (StdLib.Hashing.crc32(result) != decompressedCrc) {
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
