const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const SteamUser = require('../index.js');

SteamUser.prototype.serverQuery = function(conditions, callback) {
	if (typeof conditions === 'string') {
		conditions = {"filter_text": conditions};
	}

	if (conditions.geo_location_ip) {
		conditions.geo_location_ip = StdLib.IPv4.stringToInt(conditions.geo_location_ip);
	}

	this._send(SteamUser.EMsg.ClientGMSServerQuery, conditions, function(body) {
		if (body.error) {
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
	}, function(body) {
		callback(null, body.servers.map(function(server) {
			try {
				server.steamid = new SteamID(server.steamid.toString());
			} catch(e) {

			}
			return server;
		}));
	});
};

SteamUser.prototype.getServerSteamIDsByIP = function(ips, callback) {
	this._sendUnified("GameServers.GetServerSteamIDsByIP#1", {
		"server_ips": ips
	}, function(body) {
		var servers = {};

		(body.servers || []).forEach(function(server) {
			servers[server.addr] = new SteamID(server.steamid.toString());
		});

		callback(null, servers);
	});
};

SteamUser.prototype.getServerIPsBySteamID = function(steamids, callback) {
	steamids = steamids.map(function(id) {
		if (typeof id === 'object') {
			return id.toString();
		}

		return new SteamID(id).getSteamID64();
	});

	this._sendUnified("GameServers.GetServerIPsBySteamID#1", {
		"server_steamids": steamids
	}, function(body) {
		var servers = {};

		(body.servers || []).forEach(function(server) {
			servers[server.steamid.toString()] = server.addr;
		});

		callback(null, servers);
	});
};
