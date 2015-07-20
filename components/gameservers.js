var SteamUser = require('../index.js');
var SteamID = require('steamid');

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
