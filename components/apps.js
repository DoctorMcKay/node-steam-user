var Steam = require('steam');
var SteamUser = require('../index.js');
var ByteBuffer = require('bytebuffer');
var VDF = require('vdf');
var BinaryKVParser = require('binarykvparser');

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

SteamUser.prototype.getPlayerCount = function(appid, callback) {
	var buffer = new ByteBuffer(8, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(appid).flip();

	this._send(Steam.EMsg.ClientGetNumberOfCurrentPlayers, buffer, function(body) {
		callback(body.readUint32(), body.readUint32());
	});
};

SteamUser.prototype.getProductChanges = function(sinceChangenumber, callback) {
	this._send(Steam.EMsg.ClientPICSChangesSinceRequest, {
		"since_change_number": sinceChangenumber,
		"send_app_info_changes": true,
		"send_package_info_changes": true
	}, function(body) {
		callback(body.current_change_number, body.app_changes, body.package_changes);
	});
};

SteamUser.prototype.getProductInfo = function(apps, packages, callback) {
	// Steam can send us the full response in multiple responses, so we need to buffer them into one callback
	var appids = [];
	var packageids = [];
	var response = {
		"apps": {},
		"packages": {},
		"unknownApps": [],
		"unknownPackages": []
	};

	apps = apps.map(function(app) {
		if(typeof app === 'object') {
			appids.push(app.appid);
			return app;
		} else {
			appids.push(app);
			return {"appid": app};
		}
	});

	packages = packages.map(function(pkg) {
		if(typeof pkg === 'object') {
			packageids.push(pkg.packageid);
			return pkg;
		} else {
			packageids.push(pkg);
			return {"packageid": pkg};
		}
	});

	this._send(Steam.EMsg.ClientPICSProductInfoRequest, {
		"apps": apps,
		"packages": packages
	}, function(body) {
		(body.unknown_appids || []).forEach(function(appid) {
			response.unknownApps.push(appid);
			var index = appids.indexOf(appid);
			if(index != -1) {
				appids.splice(index, 1);
			}
		});

		(body.unknown_packageids || []).forEach(function(packageid) {
			response.unknownPackages.push(appid);
			var index = packageids.indexOf(appid);
			if(index != -1) {
				packageids.splice(index, 1);
			}
		});

		(body.apps || []).forEach(function(app) {
			response.apps[app.appid] = {
				"changenumber": app.change_number,
				"missingToken": !!app.missing_token,
				"appinfo": VDF.parse(app.buffer.toString('utf8')).appinfo
			};

			var index = appids.indexOf(app.appid);
			if(index != -1) {
				appids.splice(index, 1);
			}
		});

		(body.packages || []).forEach(function(pkg) {
			response.packages[pkg.packageid] = {
				"changenumber": pkg.change_number,
				"missingToken": !!pkg.missing_token,
				"packageinfo": BinaryKVParser.parse(pkg.buffer)[pkg.packageid]
			};

			var index = packageids.indexOf(pkg.packageid);
			if(index != -1) {
				packageids.splice(index, 1);
			}
		});

		if(appids.length === 0 && packageids.length === 0) {
			callback(response.apps, response.packages, response.unknownApps, response.unknownPackages);
		}
	});
};

SteamUser.prototype.getProductAccessToken = function(apps, packages, callback) {
	this._send(Steam.EMsg.ClientPICSAccessTokenRequest, {
		"packageids": packages,
		"appids": apps
	}, function(body) {
		var appTokens = {};
		var packageTokens = {};

		(body.app_access_tokens || []).forEach(function(app) {
			appTokens[app.appid] = app.access_token;
		});

		(body.package_access_tokens || []).forEach(function(pkg) {
			packageTokens[pkg.packageid] = pkg.access_token;
		});

		callback(appTokens, packageTokens, body.app_denied_tokens || [], body.package_denied_tokens || []);
	});
};

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientLicenseList] = function(body) {
	this.emit('licenses', body.licenses);
	this.licenses = body.licenses;
};
