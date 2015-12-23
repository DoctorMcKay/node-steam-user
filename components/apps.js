var Steam = require('steam-client');
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

	var self = this;
	this._send(Steam.EMsg.ClientPICSProductInfoRequest, {
		"apps": apps,
		"packages": packages
	}, function(body) {
		// If we're using the PICS cache, then add the items in this response to it
		if(self.options.enablePicsCache) {
			var cache = self.picsCache;
			cache.apps = cache.apps || {};
			cache.packages = cache.packages || {};

			(body.apps || []).forEach(function(app) {
				var data = {
					"changenumber": app.change_number,
					"missingToken": !!app.missing_token,
					"appinfo": VDF.parse(app.buffer.toString('utf8')).appinfo
				};

				if(!cache.apps[app.appid] || cache.apps[app.appid].changenumber != data.changenumber) {
					// Only emit the event if we previously didn't have the appinfo, or if the changenumber changed
					self.emit('appUpdate', app.appid, data);
				}

				cache.apps[app.appid] = data;
			});

			(body.packages || []).forEach(function(pkg) {
				var data = {
					"changenumber": pkg.change_number,
					"missingToken": !!pkg.missing_token,
					"packageinfo": BinaryKVParser.parse(pkg.buffer)[pkg.packageid]
				};

				if(!cache.packages[pkg.packageid] || cache.packages[pkg.packageid].changenumber != data.changenumber) {
					self.emit('packageUpdate', pkg.packageid, data);
				}

				cache.packages[pkg.packageid] = data;
			});
		}

		if(!callback) {
			return;
		}

		(body.unknown_appids || []).forEach(function(appid) {
			response.unknownApps.push(appid);
			var index = appids.indexOf(appid);
			if(index != -1) {
				appids.splice(index, 1);
			}
		});

		(body.unknown_packageids || []).forEach(function(packageid) {
			response.unknownPackages.push(packageid);
			var index = packageids.indexOf(packageid);
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

SteamUser.prototype._resetChangelistUpdateTimer = function() {
	this._clearChangelistUpdateTimer();

	if(this.options.enablePicsCache && this.options.changelistUpdateInterval) {
		this._changelistUpdateTimer = setTimeout(this._getChangelistUpdate.bind(this), this.options.changelistUpdateInterval);
	}
};

SteamUser.prototype._clearChangelistUpdateTimer = function() {
	if(this._changelistUpdateTimer) {
		clearTimeout(this._changelistUpdateTimer);
		this._changelistUpdateTimer = null;
	}
};

SteamUser.prototype._getChangelistUpdate = function() {
	this._clearChangelistUpdateTimer();

	if(!this.options.enablePicsCache || !this.options.changelistUpdateInterval) {
		return;
	}

	var self = this;

	// Set a local timeout if Steam doesn't respond
	var timedOut = false;
	var timeout = setTimeout(function() {
		timedOut = true;
		self._resetChangelistUpdateTimer();
	}, Math.max(Math.round(this.options.changelistUpdateInterval / 2), 30000));

	this.getProductChanges(this.picsCache.changenumber, function(currentChangenumber, apps, packages) {
		if(timedOut) {
			return;
		}

		var cache = self.picsCache;

		cache.apps = cache.apps || {};
		cache.packages = cache.packages || {};

		apps = apps.map(function(app) {
			return app.appid;
		});

		packages = packages.map(function(pkg) {
			return pkg.packageid;
		});

		var ourApps = apps.filter(function(appid) {
			return (self.options.picsCacheAll || !!cache.apps[appid]);
		});

		var ourPackages = packages.filter(function(pkgid) {
			return (self.options.picsCacheAll || !!cache.packages[pkgid]);
		});

		if(ourApps.length + ourPackages.length === 0) {
			// We're done here

			if(currentChangenumber != cache.changenumber && cache.changenumber != 0) {
				self.emit('changelist', currentChangenumber, apps, packages);
			}

			cache.changenumber = currentChangenumber;
			self._resetChangelistUpdateTimer();
			clearTimeout(timeout);
			return;
		}

		// Get any access tokens we may need
		self.getProductAccessToken(ourApps, ourPackages, function(appTokens, packageTokens, appDeniedTokens, packageDeniedTokens) {
			if(timedOut) {
				return;
			}

			self.emit('changelist', currentChangenumber, apps, packages);

			cache.changenumber = currentChangenumber;
			self._resetChangelistUpdateTimer();
			clearTimeout(timeout);

			var index = -1;
			for(var appid in appTokens) {
				if(appTokens.hasOwnProperty(appid) && (index = ourApps.indexOf(parseInt(appid, 10))) != -1) {
					ourApps[index] = {"appid": parseInt(appid, 10), "access_token": appTokens[appid]};
				}
			}

			for(var packageid in packageTokens) {
				if(packageTokens.hasOwnProperty(packageid) && (index = ourPackages.indexOf(parseInt(packageid, 10))) != -1) {
					ourPackages[index] = {"packageid": parseInt(packageid, 10), "access_token": packageTokens[packageid]};
				}
			}

			self.getProductInfo(ourApps, ourPackages);
		});
	});
};

SteamUser.prototype.redeemKey = function(key, callback) {
	this._send(Steam.EMsg.ClientRegisterKey, {"key": key}, function(body) {
		if(typeof callback !== 'function') {
			return;
		}

		var packageList = {};

		var recipeDetails = BinaryKVParser.parse(body.purchase_receipt_info).MessageObject;
		if(recipeDetails.LineItemCount > 0) {
			recipeDetails.lineitems.forEach(function(pkg) {
				packageList[pkg.PackageID] = pkg.ItemDescription;
			});
		}

		callback(body.eresult, body.purchase_result_details, packageList);
	});
};

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientLicenseList] = function(body) {
	this.emit('licenses', body.licenses);
	this.licenses = body.licenses;
};
