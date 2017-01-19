var SteamUser = require('../index.js');
var Helpers = require('./helpers.js');

/**
 * Request the decryption key for a particular depot.
 * @param {int} appID
 * @param {int} depotID
 * @param {function} callback
 */
SteamUser.prototype.getDepotDecryptionKey = function(appID, depotID, callback) {
	this._send(SteamUser.EMsg.ClientGetDepotDecryptionKey, {"depot_id": depotID, "app_id": appID}, function(body) {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		if (body.depot_id != depotID) {
			callback(new Error("Did not receive decryption key for correct depot"));
			return;
		}

		callback(null, body.depot_encryption_key.toBuffer());
	});
};

/**
 * Get an auth token for a particular CDN server.
 * @param {int} appID
 * @param {string} hostname - The hostname of the CDN server for which we want a token
 * @param {function} callback
 */
SteamUser.prototype.getCDNAuthToken = function(appID, hostname, callback) {
	this._send(SteamUser.EMsg.ClientGetCDNAuthToken, {"app_id": appID, "host_name": hostname}, function(body) {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		callback(null, body.token, new Date(body.expiration_time * 1000));
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
};

download("http://valve805.steamcontent.com/serverlist/50/20/", "cs.steamcontent.com", function(err, msg) {
	console.log(msg);
});

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

		res.setEncoding(null); // apparently this just doesn't work... thanks node
		var stream = res;

		if (res.headers['content-encoding'] && res.headers['content-encoding'] == 'gzip') {
			stream = require('zlib').createGunzip();
			stream.setEncoding(null);
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
				chunk = new Buffer(chunk, 'utf8');
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
