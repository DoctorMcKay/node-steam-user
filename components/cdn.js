const AdmZip = require('adm-zip');
const ByteBuffer = require('bytebuffer');
const FS = require('fs');
const LZMA = require('lzma');
const StdLib = require('@doctormckay/stdlib');
const SteamCrypto = require('@doctormckay/steam-crypto');

const Helpers = require('./helpers.js');
const ContentManifest = require('./content_manifest.js');

const EDepotFileFlag = require('../enums/EDepotFileFlag.js');
const EMsg = require('../enums/EMsg.js');
const EResult = require('../enums/EResult.js');

const SteamUserApps = require('./apps.js');

const VZIP_HEADER = 0x5A56;
const VZIP_FOOTER = 0x767A;

class SteamUserCDN extends SteamUserApps {
	/**
	 * Get the list of currently-available content servers.
	 * @param {int} [appid] - If you know the appid you want to download, pass it here as some content servers only provide content for specific games
	 * @param {function} [callback]
	 * @return Promise
	 */
	getContentServers(appid, callback) {
		if (typeof appid == 'function') {
			callback = appid;
			appid = null;
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, ['servers'], callback, async (resolve, reject) => {
			let res;
			if (this._contentServerCache && this._contentServerCache.timestamp && Date.now() - this._contentServerCache.timestamp < (1000 * 60 * 60)) {
				// Cache for 1 hour
				res = this._contentServerCache.response;
			} else {
				res = await this._apiRequest('GET', 'IContentServerDirectoryService', 'GetServersForSteamPipe', 1, {cell_id: this.cellID || 0});
			}

			if (!res || !res.response || !res.response.servers) {
				return reject(new Error('Malformed response'));
			}

			this._contentServerCache = {
				timestamp: Date.now(),
				response: res
			};

			let servers = [];

			for (let serverKey in res.response.servers) {
				let server = res.response.servers[serverKey];
				if (server.allowed_app_ids && appid && !server.allowed_app_ids.includes(appid)) {
					continue;
				}

				if (server.type == 'CDN' || server.type == 'SteamCache') {
					servers.push(server);
				}
			}

			if (servers.length == 0) {
				return reject(new Error('No content servers available'));
			}

			servers = servers.map((srv) => {
				let processedSrv = {
					type: srv.type,
					sourceid: srv.source_id,
					cell: srv.cell_id,
					load: srv.load,
					preferred_server: srv.preferred_server,
					weightedload: srv.weighted_load,
					NumEntriesInClientList: srv.num_entries_in_client_list,
					Host: srv.host,
					vhost: srv.vhost,
					https_support: srv.https_support,
					//usetokenauth: '1'
				};

				if (srv.allowed_app_ids) {
					processedSrv.allowed_app_ids = srv.allowed_app_ids;
				}

				return processedSrv;
			});

			if (servers.length == 0) {
				delete this._contentServerCache;
				return reject(new Error('No servers found'));
			}

			// Return a copy of the array, not the original
			return resolve({servers: JSON.parse(JSON.stringify(servers))});
		});
	}

	/**
	 * Request the decryption key for a particular depot.
	 * @param {int} appID
	 * @param {int} depotID
	 * @param {function} [callback]
	 * @return Promise
	 */
	getDepotDecryptionKey(appID, depotID, callback) {
		appID = parseInt(appID, 10);
		depotID = parseInt(depotID, 10);

		return StdLib.Promises.timeoutCallbackPromise(10000, ['key'], callback, async (resolve, reject) => {
			// Check if it's cached locally
			let filename = `depot_key_${appID}_${depotID}.bin`;
			let file = await this._readFile(filename);
			if (file && file.length > 4 && Math.floor(Date.now() / 1000) - file.readUInt32LE(0) < (60 * 60 * 24 * 14)) {
				return resolve({key: file.slice(4)});
			}

			this._send(EMsg.ClientGetDepotDecryptionKey, {
				depot_id: depotID,
				app_id: appID
			}, async (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				if (body.depot_id != depotID) {
					return reject(new Error('Did not receive decryption key for correct depot'));
				}

				let key = body.depot_encryption_key;
				file = Buffer.concat([Buffer.alloc(4), key]);
				file.writeUInt32LE(Math.floor(Date.now() / 1000), 0);

				await this._saveFile(filename, file);
				return resolve({key});
			});
		});
	}

	/**
	 * Get an auth token for a particular CDN server.
	 * @param {int} appID
	 * @param {int} depotID
	 * @param {string} hostname - The hostname of the CDN server for which we want a token
	 * @param {function} [callback]
	 * @return Promise
	 */
	getCDNAuthToken(appID, depotID, hostname, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['token', 'expires'], callback, (resolve, reject) => {
			if (this._contentServerTokens[depotID + '_' + hostname] && this._contentServerTokens[depotID + '_' + hostname].expires - Date.now() > (1000 * 60 * 60)) {
				return resolve(this._contentServerTokens[depotID + '_' + hostname]);
			}

			this._send(EMsg.ClientGetCDNAuthToken, {
				app_id: appID,
				depot_id: depotID,
				host_name: hostname
			}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				return resolve(this._contentServerTokens[depotID + '_' + hostname] = {
					token: body.token,
					expires: new Date(body.expiration_time * 1000)
				});
			});
		});
	}

	/**
	 * Download a depot content manifest.
	 * @param {int} appID
	 * @param {int} depotID
	 * @param {string} manifestID
	 * @param {string} branchName - Now mandatory. Use 'public' for a the public build (i.e. not a beta)
	 * @param {string} [branchPassword]
	 * @param {function} [callback]
	 * @return Promise
	 */
	getManifest(appID, depotID, manifestID, branchName, branchPassword, callback) {
		if (typeof manifestID == 'object' && typeof manifestID.gid == 'string') {
			// At some point, Valve changed the format of appinfo.
			// Previously, appinfo.depots[depotId].manifests.public would get you the public manifest ID.
			// Now, you need to access it with appinfo.depots[depotId].manifests.public.gid.
			// Here's a shim to keep consumers working properly if they expect the old format.
			manifestID = manifestID.gid;
			this._warn(`appinfo format has changed: you now need to use appinfo.depots[${depotID}].manifests.${branchName || 'public'}.gid to access the manifest ID. steam-user is fixing up your input, but you should update your code to retrieve the manifest ID from its new location in the appinfo structure.`);
		}

		if (typeof branchName == 'function') {
			callback = branchName;
			branchName = null;
		}

		if (typeof branchPassword == 'function') {
			callback = branchPassword;
			branchPassword = null;
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, ['manifest'], callback, async (resolve, reject) => {
			let manifest = ContentManifest.parse((await this.getRawManifest(appID, depotID, manifestID, branchName, branchPassword)).manifest);

			if (!manifest.filenames_encrypted) {
				return resolve({manifest});
			}

			ContentManifest.decryptFilenames(manifest, (await this.getDepotDecryptionKey(appID, depotID)).key);
			return resolve({manifest});
		});
	}

	/**
	 * Download and decompress a manifest, but don't parse it into a JavaScript object.
	 * @param {int} appID
	 * @param {int} depotID
	 * @param {string} manifestID
	 * @param {string} branchName - Now mandatory. Use 'public' for a the public build (i.e. not a beta)
	 * @param {string} [branchPassword]
	 * @param {function} [callback]
	 */
	getRawManifest(appID, depotID, manifestID, branchName, branchPassword, callback) {
		if (typeof branchName == 'function') {
			callback = branchName;
			branchName = null;
		}

		if (typeof branchPassword == 'function') {
			callback = branchPassword;
			branchPassword = null;
		}

		return StdLib.Promises.callbackPromise(['manifest'], callback, async (resolve, reject) => {
			let {servers} = await this.getContentServers(appID);
			let server = servers[Math.floor(Math.random() * servers.length)];
			let urlBase = (server.https_support == 'mandatory' ? 'https://' : 'http://') + server.Host;
			let vhost = server.vhost || server.Host;

			let token = '';
			if (server.usetokenauth == 1) {
				// Only request a CDN auth token if this server wants one.
				// I'm not sure that any servers use token auth anymore, but in case there's one out there that does,
				// we should still try.
				token = (await this.getCDNAuthToken(appID, depotID, vhost)).token;
			}

			if (!branchName) {
				this._warn(`No branch name was specified for app ${appID}, depot ${depotID}. Assuming "public".`);
				branchName = 'public';
			}

			let {requestCode} = await this.getManifestRequestCode(appID, depotID, manifestID, branchName, branchPassword);
			let manifestRequestCode = `/${requestCode}`;

			let manifestUrl = `${urlBase}/depot/${depotID}/manifest/${manifestID}/5${manifestRequestCode}${token}`;
			this.emit('debug', `Downloading manifest from ${manifestUrl} (${vhost})`);
			download(manifestUrl, vhost, async (err, res) => {
				if (err) {
					return reject(err);
				}

				if (res.type != 'complete') {
					return;
				}

				try {
					let manifest = await unzip(res.data);
					return resolve({manifest});
				} catch (ex) {
					return reject(ex);
				}
			});
		});
	}

	/**
	 * Gets a manifest request code
	 * @param {int} appID
	 * @param {int} depotID
	 * @param {string} manifestID
	 * @param {string} branchName
	 * @param {string} [branchPassword]
	 * @param {function} [callback]
	 */
	getManifestRequestCode(appID, depotID, manifestID, branchName, branchPassword, callback) {
		if (typeof branchPassword == 'function') {
			callback = branchPassword;
			branchPassword = null;
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			this._sendUnified('ContentServerDirectory.GetManifestRequestCode#1', {
				app_id: appID,
				depot_id: depotID,
				manifest_id: manifestID,
				app_branch: branchName,
				branch_password_hash: branchPassword ? StdLib.Hashing.sha1(branchPassword) : undefined
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				resolve({requestCode: body.manifest_request_code});
			});
		});
	}

	/**
	 * Download a chunk from a content server.
	 * @param {int} appID - The AppID to which this chunk belongs
	 * @param {int} depotID - The depot ID to which this chunk belongs
	 * @param {string} chunkSha1 - This chunk's SHA1 hash (aka its ID)
	 * @param {object} [contentServer] - If not provided, one will be chosen randomly. Should be an object identical to those output by getContentServers
	 * @param {function} [callback] - First argument is Error/null, second is a Buffer containing the chunk's data
	 * @return Promise
	 */
	downloadChunk(appID, depotID, chunkSha1, contentServer, callback) {
		if (typeof contentServer === 'function') {
			callback = contentServer;
			contentServer = null;
		}

		chunkSha1 = chunkSha1.toLowerCase();

		return StdLib.Promises.callbackPromise(['chunk'], callback, async (resolve, reject) => {
			if (!contentServer) {
				let {servers} = await this.getContentServers(appID);
				contentServer = servers[Math.floor(Math.random() * servers.length)];
			}

			let urlBase = (contentServer.https_support == 'mandatory' ? 'https://' : 'http://') + contentServer.Host;
			let vhost = contentServer.vhost || contentServer.Host;
			let {key} = await this.getDepotDecryptionKey(appID, depotID);

			let token = '';
			if (contentServer.usetokenauth == 1) {
				token = (await this.getCDNAuthToken(appID, depotID, vhost)).token;
			}

			download(`${urlBase}/depot/${depotID}/chunk/${chunkSha1}${token}`, vhost, async (err, res) => {
				if (err) {
					return reject(err);
				}

				if (res.type != 'complete') {
					return;
				}

				try {
					let result = await unzip(SteamCrypto.symmetricDecrypt(res.data, key));
					if (StdLib.Hashing.sha1(result) != chunkSha1) {
						return reject(new Error('Checksum mismatch'));
					}
					return resolve({chunk: result});
				} catch (ex) {
					return reject(ex);
				}
			});
		});
	}

	/**
	 * Download a specific file from a depot.
	 * @param {int} appID - The AppID which owns the file you want
	 * @param {int} depotID - The depot ID which contains the file you want
	 * @param {object} fileManifest - An object from the "files" array of a downloaded and parsed manifest
	 * @param {string} [outputFilePath] - If provided, downloads the file to this location on the disk. If not, downloads the file into memory and sends it back in the callback.
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	downloadFile(appID, depotID, fileManifest, outputFilePath, callback) {
		if (typeof outputFilePath === 'function') {
			callback = outputFilePath;
			outputFilePath = null;
		}

		return StdLib.Promises.callbackPromise(null, callback, async (resolve, reject) => {
			if (fileManifest.flags & EDepotFileFlag.Directory) {
				return reject(new Error(`Attempted to download a directory ${fileManifest.filename}`));
			}

			let numWorkers = 4;

			fileManifest.size = parseInt(fileManifest.size, 10);
			let bytesDownloaded = 0;

			let {servers: availableServers} = await this.getContentServers(appID);
			let servers = [];
			let serversInUse = [];
			let currentServerIdx = 0;
			let downloadBuffer;
			let outputFd;
			let killed = false;

			// Choose some content servers
			for (let i = 0; i < numWorkers; i++) {
				assignServer(i);
				serversInUse.push(false);
			}

			if (outputFilePath) {
				await new Promise((resolve, reject) => {
					FS.open(outputFilePath, 'w', (err, fd) => {
						if (err) {
							return reject(err);
						}

						outputFd = fd;
						FS.ftruncate(outputFd, parseInt(fileManifest.size, 10), (err) => {
							if (err) {
								FS.closeSync(outputFd);
								return reject(err);
							}

							return resolve();
						});
					});
				});
			} else {
				downloadBuffer = Buffer.alloc(parseInt(fileManifest.size, 10));
			}

			let self = this;
			let queue = new StdLib.DataStructures.AsyncQueue(function dlChunk(chunk, cb) {
				let serverIdx;

				// eslint-disable-next-line
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
							type: 'progress',
							bytesDownloaded,
							totalSizeBytes: fileManifest.size
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
								return reject(new Error('File checksum mismatch'));
							} else {
								resolve({
									type: 'complete'
								});
							}
						});
					});
				} else {
					if (StdLib.Hashing.sha1(downloadBuffer) != fileManifest.sha_content) {
						return reject(new Error('File checksum mismatch'));
					}

					return resolve({
						type: 'complete',
						file: downloadBuffer
					});
				}
			};

			function assignServer(idx) {
				servers[idx] = availableServers.splice(Math.floor(Math.random() * availableServers.length), 1)[0];
			}

			function incrementCurrentServerIdx() {
				if (++currentServerIdx >= servers.length) {
					currentServerIdx = 0;
				}
			}
		});
	}

	/**
	 * Request decryption keys for a beta branch of an app from its beta password.
	 * @param {int} appID
	 * @param {string} password
	 * @param {function} [callback] - First arg is Error|null, second is an object mapping branch names to their decryption keys
	 * @return Promise
	 */
	getAppBetaDecryptionKeys(appID, password, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['keys'], callback, (resolve, reject) => {
			this._send(EMsg.ClientCheckAppBetaPassword, {
				app_id: appID,
				betapassword: password
			}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				let branches = {};
				(body.betapasswords || []).forEach((beta) => {
					branches[beta.betaname] = Buffer.from(beta.betapassword, 'hex');
				});

				return resolve({keys: branches});
			});
		});
	}
}

// Private functions
function download(url, hostHeader, destinationFilename, callback) {
	if (typeof destinationFilename === 'function') {
		callback = destinationFilename;
		destinationFilename = null;
	}

	let options = require('url').parse(url);
	options.method = 'GET';
	options.headers = {
		Host: hostHeader,
		Accept: 'text/html,*/*;q=0.9',
		'Accept-Encoding': 'gzip,identity,*;q=0',
		'Accept-Charset': 'ISO-8859-1,utf-8,*;q=0.7',
		'User-Agent': 'Valve/Steam HTTP Client 1.0'
	};

	let module = options.protocol.replace(':', '');
	let req = require(module).request(options, (res) => {
		if (res.statusCode != 200) {
			callback(new Error('HTTP error ' + res.statusCode));
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
		let dataBuffer = Buffer.alloc(0);

		if (destinationFilename) {
			stream.pipe(require('fs').createWriteStream(destinationFilename));
		}

		stream.on('data', (chunk) => {
			if (typeof chunk === 'string') {
				chunk = Buffer.from(chunk, 'binary');
			}

			receivedBytes += chunk.length;

			if (!destinationFilename) {
				dataBuffer = Buffer.concat([dataBuffer, chunk]);
			}

			callback(null, {type: 'progress', receivedBytes: receivedBytes, totalSizeBytes: totalSizeBytes});
		});

		stream.on('end', () => {
			callback(null, {type: 'complete', data: dataBuffer});
		});
	});

	req.on('error', (err) => {
		callback(err);
	});

	req.end();
}

function unzip(data) {
	return new Promise((resolve, reject) => {
		// VZip or zip?
		if (data.readUInt16LE(0) != VZIP_HEADER) {
			// Standard zip
			let unzip = new AdmZip(data);
			return resolve(unzip.readFile(unzip.getEntries()[0]));
		} else {
			// VZip
			data = ByteBuffer.wrap(data, ByteBuffer.LITTLE_ENDIAN);

			data.skip(2); // header
			if (String.fromCharCode(data.readByte()) != 'a') {
				return reject(new Error('Expected VZip version \'a\''));
			}

			data.skip(4); // either a timestamp or a CRC; either way, forget it
			let properties = data.slice(data.offset, data.offset + 5).toBuffer();
			data.skip(5);

			let compressedData = data.slice(data.offset, data.limit - 10);
			data.skip(compressedData.remaining());

			let decompressedCrc = data.readUint32();
			let decompressedSize = data.readUint32();
			if (data.readUint16() != VZIP_FOOTER) {
				return reject(new Error('Didn\'t see expected VZip footer'));
			}

			let uncompressedSizeBuffer = Buffer.alloc(8);
			uncompressedSizeBuffer.writeUInt32LE(decompressedSize, 0);
			uncompressedSizeBuffer.writeUInt32LE(0, 4);

			LZMA.decompress(Buffer.concat([properties, uncompressedSizeBuffer, compressedData.toBuffer()]), (result, err) => {
				if (err) {
					return reject(err);
				}

				result = Buffer.from(result); // it's a byte array

				// Verify the result
				if (decompressedSize != result.length) {
					return reject(new Error('Decompressed size was not valid'));
				}

				if (StdLib.Hashing.crc32(result) != decompressedCrc) {
					return reject(new Error('CRC check failed on decompressed data'));
				}

				return resolve(result);
			});
		}
	});
}

module.exports = SteamUserCDN;
