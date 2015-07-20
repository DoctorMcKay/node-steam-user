var Steam = require('steam');
var SteamUser = require('../index.js');

SteamUser.prototype.gamesPlayed = function(apps) {
	if(!(apps instanceof Array)) {
		apps = [apps];
	}

	this._send(Steam.EMsg.ClientGamesPlayed, apps.map(function(app) {
		if(typeof app === 'string') {
			return {
				"game_id": "15190414816125648896",
				"game_extra_info": app
			};
		}

		if(typeof app === 'object') {
			return app;
		}

		return {"game_id": app};
	}));
};

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientLicenseList] = function(body) {
	this.emit('licenses', body.licenses);
	this.licenses = body.licenses;
};
