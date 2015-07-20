var Steam = require('steam');
var SteamUser = require('../index.js');
var SteamID = require('steamid');

SteamUser.prototype.serverQuery = function(conditions, callback) {
	if(typeof conditions === 'string') {
		conditions = {"filter_text": conditions};
	}

	if(conditions.geo_location_ip) {
		var parts = conditions.geo_location_ip.split('.');
		var buf = new Buffer(4);

		parts.forEach(function(octet, index) {
			buf.writeUInt8(octet, index);
		});

		conditions.geo_location_ip = buf.readUInt32(0);
	}

	this._send(Steam.EMsg.ClientGMSServerQuery, conditions, function(body) {
		if(body.error) {
			callback(new Error(body.error));
			return;
		}

		callback(null, (body.servers || []).map(function(server) {
			var buf = new Buffer(4);
			buf.writeUInt32BE(server.server_ip, 0);

			return {
				"ip": Array.prototype.join.call(buf, '.'),
				"port": server.server_port,
				"players": server.auth_players
			};
		}))
	});
};

SteamUser.prototype.getServerList = function(filter, limit, callback) {
	this._sendUnified("GameServers.GetServerList#1", {
		"filter": filter,
		"limit": limit
	}, false, function(body) {
		callback(body.servers.map(function(server) {
			server.steamid = new SteamID(server.steamid.toString());
			return server;
		}));
	});
};
