var AdmZip = require('adm-zip');
var SteamUser = require('../index.js');
var Helpers = require('./helpers.js');
var ContentManifest = require('./content_manifest.js');

/**
 * Get the list of currently-available content servers.
 * @param {function} callback
 */
SteamUser.prototype.getContentServers = function(callback) {
	if (this._contentServers.length > 0 && Date.now() - this._contentServers.timestamp < (1000 * 60 * 60)) {
		callback(null, this._contentServers);
		return;
	}

	var list = this.steamServers[SteamUser.EServerType.CS];

	if (!list || list.length == 0) {
		callback(new Error("Server list not yet available"));
		return;
	}

	// pick a random one
	var server = list[Math.floor(Math.random() * list.length)];
	var self = this;
	download("http://" + Helpers.ipIntToString(server.server_ip) + ":" + server.server_port + "/serverlist/" + this.cellID + "/20/", "cs.steamcontent.com", function(err, res) {
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

		self._contentServers = Array.prototype.slice.call(parsed.serverlist);
		callback(null, self._contentServers);
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
	var self = this;

	this.storage.readFile("depot_key_" + appID + "_" + depotID + ".bin", function(err, file) {
		if (file && Math.floor(Date.now() / 1000) - file.readUInt32LE(0) < (60 * 60 * 24 * 14)) {
			callback(null, file.slice(4));
			return;
		}

		self._send(SteamUser.EMsg.ClientGetDepotDecryptionKey, {"depot_id": depotID, "app_id": appID}, function(body) {
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
			self.storage.writeFile("depot_key_" + appID + "_" + depotID + ".bin", file);

			callback(null, body.depot_encryption_key.toBuffer());
		});
	});
};

/**
 * Get an auth token for a particular CDN server.
 * @param {int} appID
 * @param {string} hostname - The hostname of the CDN server for which we want a token
 * @param {function} callback
 */
SteamUser.prototype.getCDNAuthToken = function(appID, hostname, callback) {
	if (this._contentServerTokens[appID + '_' + hostname] && Date.now() - this._contentServerTokens[appID + '_' + hostname].expires > (60 * 60)) {
		callback(null, this._contentServerTokens[appID + '_' + hostname].token, this._contentServerTokens[appID + '_' + hostname].expires);
		return;
	}

	var self = this;
	this._send(SteamUser.EMsg.ClientGetCDNAuthToken, {"app_id": appID, "host_name": hostname}, function(body) {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		self._contentServerTokens[appID + '_' + hostname] = {"token": body.token, "expires": new Date(body.expiration_time * 1000)};
		callback(null, body.token, new Date(body.expiration_time * 1000));
	});
};

SteamUser.prototype.getManifest = function(appID, depotID, manifestID, callback) {
	this.getRawManifest(appID, depotID, manifestID, function(err, manifest) {
		if (err) {
			callback(err);
			return;
		}

		try {
			callback(null, ContentManifest.parse(manifest));
		} catch (ex) {
			callback(ex);
		}
	});
};

SteamUser.prototype.getRawManifest = function(appID, depotID, manifestID, callback) {
	var self = this;
	this.getContentServers(function(err, servers) {
		if (err) {
			callback(err);
			return;
		}

		var server = servers[Math.floor(Math.random() * servers.length)];
		var urlBase = "http://" + server.Host;
		var vhost = server.vhost || server.Host;

		self.getCDNAuthToken(appID, vhost, function(err, token, expires) {
			if (err) {
				callback(err);
				return;
			}

			download(urlBase + "/depot/" + depotID + "/manifest/" + manifestID + "/5" + token, vhost, function(err, res) {
				if (err) {
					callback(err);
					return;
				}

				if (res.type != 'complete') {
					return;
				}

				callback(null, (new AdmZip(res.data)).readFile('z'));
			});
		});
	});
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientServerList] = function(body) {
	// It appears that each message of this type is for one server type.
	var servers = {};

	body.servers.forEach(function(server) {
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

	var req = require('http').request(options, function(res) {
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

		stream.on('data', function(chunk) {
			if (typeof chunk === 'string') {
				chunk = new Buffer(chunk, 'binary');
			}

			receivedBytes += chunk.length;

			if (!destinationFilename) {
				dataBuffer = Buffer.concat([dataBuffer, chunk]);
			}

			callback(null, {"type": "progress", "receivedBytes": receivedBytes, "totalSizeBytes": totalSizeBytes});
		});

		stream.on('end', function() {
			callback(null, {"type": "complete", "data": dataBuffer});
		});
	});

	req.on('error', function(err) {
		callback(err);
	});

	req.end();
}
