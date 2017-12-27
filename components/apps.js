var SteamUser = require('../index.js');
var SteamID = require('steamid');
var VDF = require('vdf');
var BinaryKVParser = require('binarykvparser');

var Helpers = require('./helpers.js');

var PICSRequestType = {
	"User": 0,
	"Changelist": 1,
	"Licenses": 2,
	"PackageContents": 3,
	"AddToCache": 4
};

/**
 * Tell Steam that you're "playing" zero or more games.
 * @param {array} apps - Array of integers (AppIDs) or strings (non-Steam game names) for the games you're playing. Empty to play nothing.
 * @param {boolean} [force=false] If true, kick any other sessions logged into this account and playing games from Steam
 */
SteamUser.prototype.gamesPlayed = function(apps, force) {
	if (!(apps instanceof Array)) {
		apps = [apps];
	}

	var self = this;
	if (this._playingBlocked && force) {
		this.kickPlayingSession(doTheThing);
	} else {
		doTheThing();
	}

	function doTheThing() {
		self._send(SteamUser.EMsg.ClientGamesPlayed, apps.map(function(app) {
			if (typeof app === 'string') {
				return {
					"game_id": "15190414816125648896",
					"game_extra_info": app
				};
			}

			if (typeof app === 'object') {
				return app;
			}

			return {"game_id": app};
		}));
	}
};

/**
 * Kick any other session logged into your account which is playing a game from Steam.
 * @param {function} [callback] - Single err parameter
 */
SteamUser.prototype.kickPlayingSession = function(callback) {
	this._send(SteamUser.EMsg.ClientKickPlayingSession, {});
	this.once('playingState', function(blocked, playingApp) {
		if (!callback) {
			return;
		}

		if (blocked) {
			callback(new Error("Cannot kick other session"));
		} else {
			callback(null);
		}
	});
};

/**
 * Get count of people playing a Steam app. Use appid 0 to get number of people connected to Steam.
 * @param {int} appid
 * @param {function} callback - Args (eresult, player count)
 */
SteamUser.prototype.getPlayerCount = function(appid, callback) {
	this._send(SteamUser.EMsg.ClientGetNumberOfCurrentPlayersDP, {"appid": appid}, function(body) {
		callback(body.eresult, body.player_count);
	});
};

/**
 * Get a list of apps or packages which have changed since a particular changenumber.
 * @param {int} sinceChangenumber - Changenumber to get changes since. Use 0 to get the latest changenumber, but nothing else
 * @param {function} callback - Args (current changenumber, array of appids that changed, array of packageids that changed)
 */
SteamUser.prototype.getProductChanges = function(sinceChangenumber, callback) {
	this._send(SteamUser.EMsg.ClientPICSChangesSinceRequest, {
		"since_change_number": sinceChangenumber,
		"send_app_info_changes": true,
		"send_package_info_changes": true
	}, function(body) {
		callback(body.current_change_number, body.app_changes, body.package_changes);
	});
};

/**
 * Get info about some apps and/or packages from Steam.
 * @param {int[]|object[]} apps - Array of AppIDs. May be empty. May also contain objects with keys {appid, access_token}
 * @param {int[]|object[]} packages - Array of package IDs. May be empty. May also contain objects with keys {packageid, access_token}
 * @param {boolean} [inclTokens=false] - If true, automatically retrieve access tokens if needed
 * @param {function} callback - Args (array of app data, array of package data, array of appids that don't exist, array of packageids that don't exist)
 * @param {int} [requestType] - Don't touch
 */
SteamUser.prototype.getProductInfo = function(apps, packages, inclTokens, callback, requestType) {
	// Adds support for the previous syntax
	if (typeof inclTokens !== 'boolean' && typeof inclTokens === 'function') {
		requestType = callback;
		callback = inclTokens;
		inclTokens = false;
	}

	requestType = requestType || PICSRequestType.User;

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
		if (typeof app === 'object') {
			appids.push(app.appid);
			return app;
		} else {
			appids.push(app);
			return {"appid": app};
		}
	});

	packages = packages.map(function(pkg) {
		if (typeof pkg === 'object') {
			packageids.push(pkg.packageid);
			return pkg;
		} else {
			packageids.push(pkg);
			return {"packageid": pkg};
		}
	});

	var self = this;
	this._send(SteamUser.EMsg.ClientPICSProductInfoRequest, {
		"apps": apps,
		"packages": packages
	}, function(body) {
		// If we're using the PICS cache, then add the items in this response to it
		if (self.options.enablePicsCache) {
			var cache = self.picsCache;
			cache.apps = cache.apps || {};
			cache.packages = cache.packages || {};

			(body.apps || []).forEach(function(app) {
				var data = {
					"changenumber": app.change_number,
					"missingToken": !!app.missing_token,
					"appinfo": VDF.parse(app.buffer.toString('utf8')).appinfo
				};

				if ((!cache.apps[app.appid] && requestType == PICSRequestType.Changelist) || (cache.apps[app.appid] && cache.apps[app.appid].changenumber != data.changenumber)) {
					// Only emit the event if we previously didn't have the appinfo, or if the changenumber changed
					self.emit('appUpdate', app.appid, data);
				}

				cache.apps[app.appid] = data;

				app._parsedData = data;
			});

			(body.packages || []).forEach(function(pkg) {
				var data = {
					"changenumber": pkg.change_number,
					"missingToken": !!pkg.missing_token,
					"packageinfo": BinaryKVParser.parse(pkg.buffer)[pkg.packageid]
				};

				if ((!cache.packages[pkg.packageid] && requestType == PICSRequestType.Changelist) || (cache.packages[pkg.packageid] && cache.packages[pkg.packageid].changenumber != data.changenumber)) {
					self.emit('packageUpdate', pkg.packageid, data);
				}

				cache.packages[pkg.packageid] = data;

				pkg._parsedData = data;

				// Request info for all the apps in this package, if this request didn't originate from the license list
				if (requestType != PICSRequestType.Licenses) {
					var appids = (pkg.packageinfo || {}).appids || [];
					self.getProductInfo(appids, [], false, null, PICSRequestType.PackageContents);
				}
			});
		}

		if (!callback) {
			return;
		}

		(body.unknown_appids || []).forEach(function(appid) {
			response.unknownApps.push(appid);
			var index = appids.indexOf(appid);
			if (index != -1) {
				appids.splice(index, 1);
			}
		});

		(body.unknown_packageids || []).forEach(function(packageid) {
			response.unknownPackages.push(packageid);
			var index = packageids.indexOf(packageid);
			if (index != -1) {
				packageids.splice(index, 1);
			}
		});

		(body.apps || []).forEach(function(app) {
			response.apps[app.appid] = app._parsedData || {
				"changenumber": app.change_number,
				"missingToken": !!app.missing_token,
				"appinfo": VDF.parse(app.buffer.toString('utf8')).appinfo
			};

			var index = appids.indexOf(app.appid);
			if (index != -1) {
				appids.splice(index, 1);
			}
		});

		(body.packages || []).forEach(function(pkg) {
			response.packages[pkg.packageid] = pkg._parsedData || {
				"changenumber": pkg.change_number,
				"missingToken": !!pkg.missing_token,
				"packageinfo": BinaryKVParser.parse(pkg.buffer)[pkg.packageid]
			};

			var index = packageids.indexOf(pkg.packageid);
			if (index != -1) {
				packageids.splice(index, 1);
			}
		});

		if (appids.length === 0 && packageids.length === 0) {
			if (inclTokens) {
				var tokenlessAppids = [];
				var tokenlessPackages = [];

				for (var appid in response.apps) {
					if (response.apps[appid].missingToken) {
						tokenlessAppids.push(parseInt(appid, 10));
					}
				}

				for (var packageid in response.packages) {
					if (response.packages[packageid].missingToken) {
						tokenlessPackages.push(parseInt(packageid, 10));
					}
				}

				if (tokenlessAppids.length > 0 || tokenlessPackages.length > 0) {
					self.getProductAccessToken(tokenlessAppids, tokenlessPackages, function(appTokens, packageTokens) {
						var tokenApps = [];
						var tokenPackages = [];

						for (appid in appTokens) {
							tokenApps.push({appid: parseInt(appid, 10), access_token: appTokens[appid]})
						}

						for (packageid in packageTokens) {
							tokenPackages.push({appid: parseInt(packageid, 10), access_token: packageTokens[appid]})
						}

						self.getProductInfo(tokenApps, tokenPackages, false, function(apps, packages) {
							for (appid in apps) {
								response.apps[appid] = apps[appid];
								var index = response.unknownApps.indexOf(parseInt(appid, 10));
								if (index != -1) {
									response.unknownApps.splice(index, 1);
								}
							}

							for (packageid in packages) {
								response.packages[packageid] = packages[packageid];
								var index = response.unknownPackages.indexOf(parseInt(packageid, 10));
								if (index != -1) {
									response.unknownPackages.splice(index, 1);
								}
							}

							callback(response.apps, response.packages, response.unknownApps, response.unknownPackages);
						});
					});
				} else {
					callback(response.apps, response.packages, response.unknownApps, response.unknownPackages);
				}
			} else {
				callback(response.apps, response.packages, response.unknownApps, response.unknownPackages);
			}
		}
	});
};

/**
 * Get access tokens for some apps and/or packages
 * @param {int[]} apps - Array of appids
 * @param {int[]} packages - Array of packageids
 * @param {function} callback - First arg is an object of (appid => access token), second is the same for packages, third is array of appids for which tokens are denied, fourth is the same for packages
 */
SteamUser.prototype.getProductAccessToken = function(apps, packages, callback) {
	this._send(SteamUser.EMsg.ClientPICSAccessTokenRequest, {
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

/**
 * @private
 */
SteamUser.prototype._resetChangelistUpdateTimer = function() {
	this._clearChangelistUpdateTimer();

	if (this.options.enablePicsCache && this.options.changelistUpdateInterval) {
		this._changelistUpdateTimer = setTimeout(this._getChangelistUpdate.bind(this), this.options.changelistUpdateInterval);
	}
};

/**
 * @private
 */
SteamUser.prototype._clearChangelistUpdateTimer = function() {
	if (this._changelistUpdateTimer) {
		clearTimeout(this._changelistUpdateTimer);
		this._changelistUpdateTimer = null;
	}
};

/**
 * @private
 */
SteamUser.prototype._getChangelistUpdate = function() {
	this._clearChangelistUpdateTimer();

	if (!this.options.enablePicsCache || !this.options.changelistUpdateInterval) {
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
		if (timedOut) {
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

		if (ourApps.length + ourPackages.length === 0) {
			// We're done here

			if (currentChangenumber != cache.changenumber && cache.changenumber != 0) {
				self.emit('changelist', currentChangenumber, apps, packages);
			}

			cache.changenumber = currentChangenumber;
			self._resetChangelistUpdateTimer();
			clearTimeout(timeout);
			return;
		}

		// Get any access tokens we may need
		self.getProductAccessToken(ourApps, ourPackages, function(appTokens, packageTokens, appDeniedTokens, packageDeniedTokens) {
			if (timedOut) {
				return;
			}

			self.emit('changelist', currentChangenumber, apps, packages);

			cache.changenumber = currentChangenumber;
			self._resetChangelistUpdateTimer();
			clearTimeout(timeout);

			var index = -1;
			for (var appid in appTokens) {
				if (appTokens.hasOwnProperty(appid) && (index = ourApps.indexOf(parseInt(appid, 10))) != -1) {
					ourApps[index] = {"appid": parseInt(appid, 10), "access_token": appTokens[appid]};
				}
			}

			for (var packageid in packageTokens) {
				if (packageTokens.hasOwnProperty(packageid) && (index = ourPackages.indexOf(parseInt(packageid, 10))) != -1) {
					ourPackages[index] = {"packageid": parseInt(packageid, 10), "access_token": packageTokens[packageid]};
				}
			}

			self.getProductInfo(ourApps, ourPackages, false, null, PICSRequestType.Changelist);
		});
	});
};

/**
 * @param {int} appid
 * @private
 */
SteamUser.prototype._addAppToCache = function(appid) {
	if (!this.options.enablePicsCache) {
		return;
	}

	var apps = this.picsCache.apps || {};
	if (apps[appid]) {
		return;
	}

	this.getProductInfo([appid], [], false, null, PICSRequestType.AddToCache);
};

/**
 * @private
 */
SteamUser.prototype._getLicenseInfo = function() {
	if (!this.options.enablePicsCache) {
		return;
	}

	var packageids = this.getOwnedPackages();

	var self = this;
	this.getProductInfo([], packageids, false, function(apps, packages) {
		// Request info for all the apps in these packages
		var appids = [];

		for (var pkgid in packages) {
			if (!packages.hasOwnProperty(pkgid)) {
				continue;
			}

			((packages[pkgid].packageinfo || {}).appids || []).forEach(function(appid) {
				if (appids.indexOf(appid) == -1) {
					appids.push(appid);
				}
			});
		}

		self.getProductInfo(appids, [], false, function(apps, packages) {
			self.emit('appOwnershipCached');
		}, PICSRequestType.PackageContents);
	}, PICSRequestType.Licenses);
};

/**
 * Get list of appids this account owns. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @returns {int[]}
 */
SteamUser.prototype.getOwnedApps = function() {
	if (!this.options.enablePicsCache) {
		throw new Error("PICS cache is not enabled.");
	}

	if (!this.picsCache.packages) {
		throw new Error("No data in PICS package cache yet.");
	}

	var ownedPackages = this.getOwnedPackages();
	var appids = {};

	var self = this;
	ownedPackages.forEach(function(pkg) {
		if (!self.picsCache.packages[pkg]) {
			return;
		}

		pkg = self.picsCache.packages[pkg];
		if (!pkg.packageinfo) {
			return;
		}

		pkg = pkg.packageinfo;

		if (pkg.extended && pkg.extended.expirytime && pkg.extended.expirytime <= Math.floor(Date.now() / 1000)) {
			return; // This package has expired. Free weekend, usually
		}

		(pkg.appids || []).forEach(function(appid) {
			if (!appids[appid]) {
				appids[appid] = true;
			}
		});
	});

	appids = Object.keys(appids).map(appid => parseInt(appid, 10));
	appids.sort(sortNumeric);
	return appids;
};

/**
 * Check if this account owns an app. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @param {int} appid
 * @returns {boolean}
 */
SteamUser.prototype.ownsApp = function(appid) {
	return this.getOwnedApps().indexOf(parseInt(appid, 10)) != -1;
};

/**
 * Returns an array of depot IDs this account owns. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @returns {int[]}
 */
SteamUser.prototype.getOwnedDepots = function() {
	if (!this.options.enablePicsCache) {
		throw new Error("PICS cache is not enabled.");
	}

	if (!this.picsCache.packages) {
		throw new Error("No data in PICS package cache yet.");
	}

	var ownedPackages = this.getOwnedPackages();
	var depotids = {};

	var self = this;
	ownedPackages.forEach(function(pkg) {
		if (!self.picsCache.packages[pkg]) {
			return;
		}

		pkg = self.picsCache.packages[pkg];
		if (!pkg.packageinfo) {
			return;
		}

		pkg = pkg.packageinfo;

		if (pkg.extended && pkg.extended.expirytime && pkg.extended.expirytime <= Math.floor(Date.now() / 1000)) {
			return; // This package has expired. Free weekend, usually
		}

		(pkg.depotids || []).forEach(function(depotid) {
			if (!depotids[depotid]) {
				depotids[depotid] = true;
			}
		});
	});

	depotids = Object.keys(depotids).map(depotid => parseInt(depotid, 10));
	depotids.sort(sortNumeric);
	return depotids;
};

/**
 * Check if this account owns a depot. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @param {int} depotid
 * @returns {boolean}
 */
SteamUser.prototype.ownsDepot = function(depotid) {
	return this.getOwnedDepots().indexOf(parseInt(depotid, 10)) != -1;
};

/**
 * Returns an array of package IDs this account owns. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @returns {int[]}
 */
SteamUser.prototype.getOwnedPackages = function() {
	if (this.steamID.type != SteamID.Type.ANON_USER && !this.licenses) {
		throw new Error("We don't have our license list yet.");
	}

	var packages = this.steamID.type == SteamID.Type.ANON_USER ? [17906] : this.licenses.map(function(license) {
		return license.package_id;
	});

	packages.sort(sortNumeric);
	return packages;
};

/**
 * Check if this account owns a package. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @param {int|string} packageid
 * @returns {boolean}
 */
SteamUser.prototype.ownsPackage = function(packageid) {
	return this.getOwnedPackages().indexOf(parseInt(packageid, 10)) != -1;
};

function sortNumeric(a, b) {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	}

	return 0;
}

/**
 * Redeem a product code on this account.
 * @param {string} key
 * @param {function} callback - Args (eresult value, SteamUser.EPurchaseResult value, object of (packageid => package names)
 */
SteamUser.prototype.redeemKey = function(key, callback) {
	this._send(SteamUser.EMsg.ClientRegisterKey, {"key": key}, function(body) {
		if (typeof callback !== 'function') {
			return;
		}

		var packageList = {};

		var recipeDetails = BinaryKVParser.parse(body.purchase_receipt_info).MessageObject;
		if (recipeDetails.LineItemCount > 0) {
			recipeDetails.lineitems.forEach(function(pkg) {
				var packageID = pkg.PackageID || pkg.packageID || pkg.packageid;
				packageList[packageID] = pkg.ItemDescription;
			});
		}

		callback(body.eresult, body.purchase_result_details, packageList);
	});
};

/**
 * Request licenses for one or more free-on-demand apps.
 * @param {int[]} appIDs
 * @param {function} callback - Args (err, array of granted packageids, array of granted appids)
 */
SteamUser.prototype.requestFreeLicense = function(appIDs, callback) {
	if (!Array.isArray(appIDs)) {
		appIDs = [appIDs];
	}

	this._send(SteamUser.EMsg.ClientRequestFreeLicense, {"appids": appIDs}, function(body) {
		if (!callback) {
			return;
		}

		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		callback(null, body.granted_packageids, body.granted_appids);
	});
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientLicenseList] = function(body) {
	this.emit('licenses', body.licenses);
	this.licenses = body.licenses;

	// Request info for our licenses
	if (this.options.enablePicsCache) {
		this._getLicenseInfo();
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientPlayingSessionState] = function(body) {
	this._playingBlocked = body.playing_blocked;
	this.emit('playingState', body.playing_blocked, body.playing_app);
	this.playingState = {"blocked": body.playing_blocked, "appid": body.playing_app};
};
