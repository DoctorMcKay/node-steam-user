const BinaryKVParser = require('binarykvparser');
const ByteBuffer = require('bytebuffer');
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');
const VDF = require('vdf');

const Helpers = require('./helpers.js');
const SteamUser = require('../index.js');

const PICSRequestType = {
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

	let self = this;
	if (this._playingBlocked && force) {
		this.kickPlayingSession(doTheThing);
	} else {
		doTheThing();
	}

	function doTheThing() {
		let processedApps = apps.map((app) => {
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
		});

		self._send(SteamUser.EMsg.ClientGamesPlayedWithDataBlob, {"games_played": processedApps});

		processedApps.forEach((app) => {
			if (app.game_id > Math.pow(2, 32)) {
				// It's a non-Steam game.
				return;
			}

			let appid = parseInt(app.game_id, 10);
			if (!self._playingAppIds.includes(appid)) {
				self.emit('appLaunched', appid);
			}
		});

		self._playingAppIds.forEach((appid) => {
			if (!processedApps.some(app => app.game_id == appid)) {
				self.emit('appQuit', appid);
			}
		});

		self._playingAppIds = processedApps.filter(app => app.game_id < Math.pow(2, 32)).map(app => parseInt(app.game_id, 10));
	}
};

/**
 * Kick any other session logged into your account which is playing a game from Steam.
 * @param {function} [callback] - Single err parameter
 * @return Promise
 */
SteamUser.prototype.kickPlayingSession = function(callback) {
	return StdLib.Promises.callbackPromise([], callback, true, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientKickPlayingSession, {});
		this.once('playingState', (blocked, playingApp) => {
			if (blocked) {
				reject(new Error("Cannot kick other session"));
			} else {
				accept();
			}
		});
	});
};

/**
 * Upload some rich presence data to Steam.
 * @param {int} appid
 * @param {{steam_display?, connect?}} richPresence
 */
SteamUser.prototype.uploadRichPresence = function(appid, richPresence) {
	 // Maybe someday in the future we'll have a proper binary KV encoder. For now, just do it by hand.
	let buf = new ByteBuffer(1024, ByteBuffer.LITTLE_ENDIAN);
	buf.writeByte(0);
	buf.writeCString('RP');
	for (let i in richPresence) {
		if (!richPresence.hasOwnProperty(i)) {
			continue;
		}

		buf.writeByte(1); // type string
		buf.writeCString(i);
		buf.writeCString(richPresence[i]);
	}
	buf.writeByte(8); // end
	buf.writeByte(8); // end again

	this._send({
		"msg": SteamUser.EMsg.ClientRichPresenceUpload,
		"proto": {
			"routing_appid": appid
		}
	}, {
		"rich_presence_kv": buf.flip().toBuffer()
	});
};

/**
 * Get count of people playing a Steam app. Use appid 0 to get number of people connected to Steam.
 * @param {int} appid
 * @param {function} [callback] - Args (eresult, player count)
 * @return Promise
 */
SteamUser.prototype.getPlayerCount = function(appid, callback) {
	return StdLib.Promises.callbackPromise(['playerCount'], callback, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientGetNumberOfCurrentPlayersDP, {"appid": appid}, (body) => {
			let err = Helpers.eresultError(body.eresult);
			if (err) {
				reject(err);
			} else {
				accept({"playerCount": body.player_count});
			}
		});
	});
};

/**
 * Get a list of apps or packages which have changed since a particular changenumber.
 * @param {int} sinceChangenumber - Changenumber to get changes since. Use 0 to get the latest changenumber, but nothing else
 * @param {function} [callback] - Args (current changenumber, array of appids that changed, array of packageids that changed)
 * @return Promise
 */
SteamUser.prototype.getProductChanges = function(sinceChangenumber, callback) {
	let args = ['currentChangeNumber', 'appChanges', 'packageChanges'];
	return StdLib.Promises.callbackPromise(args, callback, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientPICSChangesSinceRequest, {
			"since_change_number": sinceChangenumber,
			"send_app_info_changes": true,
			"send_package_info_changes": true
		}, (body) => {
			accept({
				"currentChangeNumber": body.current_change_number,
				"appChanges": body.app_changes,
				"packageChanges": body.package_changes
			});
		});
	});
};

/**
 * Get info about some apps and/or packages from Steam.
 * @param {int[]|object[]} apps - Array of AppIDs. May be empty. May also contain objects with keys {appid, access_token}
 * @param {int[]|object[]} packages - Array of package IDs. May be empty. May also contain objects with keys {packageid, access_token}
 * @param {boolean} [inclTokens=false] - If true, automatically retrieve access tokens if needed
 * @param {function} [callback] - Args (array of app data, array of package data, array of appids that don't exist, array of packageids that don't exist)
 * @param {int} [requestType] - Don't touch
 * @return Promise
 */
SteamUser.prototype.getProductInfo = function(apps, packages, inclTokens, callback, requestType) {
	// Adds support for the previous syntax
	if (typeof inclTokens !== 'boolean' && typeof inclTokens === 'function') {
		requestType = callback;
		callback = inclTokens;
		inclTokens = false;
	}

	return StdLib.Promises.callbackPromise(['apps', 'packages', 'unknownApps', 'unknownPackages'], callback, (accept, reject) => {
		requestType = requestType || PICSRequestType.User;

		// Steam can send us the full response in multiple responses, so we need to buffer them into one callback
		let appids = [];
		let packageids = [];
		let response = {
			"apps": {},
			"packages": {},
			"unknownApps": [],
			"unknownPackages": []
		};
		let callbackFired = false;

		apps = apps.map((app) => {
			if (typeof app === 'object') {
				appids.push(app.appid);
				return app;
			} else {
				appids.push(app);
				return {"appid": app};
			}
		});

		packages = packages.map((pkg) => {
			if (typeof pkg === 'object') {
				packageids.push(pkg.packageid);
				return pkg;
			} else {
				packageids.push(pkg);
				return {"packageid": pkg};
			}
		});

		this._send(SteamUser.EMsg.ClientPICSProductInfoRequest, {
			"apps": apps,
			"packages": packages
		}, (body) => {
			// If we're using the PICS cache, then add the items in this response to it
			if (this.options.enablePicsCache) {
				let cache = this.picsCache;
				cache.apps = cache.apps || {};
				cache.packages = cache.packages || {};

				(body.apps || []).forEach((app) => {
					let data = {
						"changenumber": app.change_number,
						"missingToken": !!app.missing_token,
						"appinfo": VDF.parse(app.buffer.toString('utf8')).appinfo
					};

					if ((!cache.apps[app.appid] && requestType == PICSRequestType.Changelist) || (cache.apps[app.appid] && cache.apps[app.appid].changenumber != data.changenumber)) {
						// Only emit the event if we previously didn't have the appinfo, or if the changenumber changed
						this.emit('appUpdate', app.appid, data);
					}

					cache.apps[app.appid] = data;

					app._parsedData = data;
				});

				(body.packages || []).forEach((pkg) => {
					let data = {
						"changenumber": pkg.change_number,
						"missingToken": !!pkg.missing_token,
						"packageinfo": BinaryKVParser.parse(pkg.buffer)[pkg.packageid]
					};

					if ((!cache.packages[pkg.packageid] && requestType == PICSRequestType.Changelist) || (cache.packages[pkg.packageid] && cache.packages[pkg.packageid].changenumber != data.changenumber)) {
						this.emit('packageUpdate', pkg.packageid, data);
					}

					cache.packages[pkg.packageid] = data;

					pkg._parsedData = data;

					// Request info for all the apps in this package, if this request didn't originate from the license list
					if (requestType != PICSRequestType.Licenses) {
						let appids = (pkg.packageinfo || {}).appids || [];
						this.getProductInfo(appids, [], false, null, PICSRequestType.PackageContents);
					}
				});
			}

			(body.unknown_appids || []).forEach((appid) => {
				response.unknownApps.push(appid);
				let index = appids.indexOf(appid);
				if (index != -1) {
					appids.splice(index, 1);
				}
			});

			(body.unknown_packageids || []).forEach((packageid) => {
				response.unknownPackages.push(packageid);
				let index = packageids.indexOf(packageid);
				if (index != -1) {
					packageids.splice(index, 1);
				}
			});

			(body.apps || []).forEach((app) => {
				response.apps[app.appid] = app._parsedData || {
					"changenumber": app.change_number,
					"missingToken": !!app.missing_token,
					"appinfo": VDF.parse(app.buffer.toString('utf8')).appinfo
				};

				let index = appids.indexOf(app.appid);
				if (index != -1) {
					appids.splice(index, 1);
				}
			});

			(body.packages || []).forEach((pkg) => {
				response.packages[pkg.packageid] = pkg._parsedData || {
					"changenumber": pkg.change_number,
					"missingToken": !!pkg.missing_token,
					"packageinfo": BinaryKVParser.parse(pkg.buffer)[pkg.packageid]
				};

				let index = packageids.indexOf(pkg.packageid);
				if (index != -1) {
					packageids.splice(index, 1);
				}
			});

			// appids and packageids contain the list of IDs that we're still waiting on data for
			if (appids.length === 0 && packageids.length === 0) {
				if (inclTokens) {
					let tokenlessAppids = [];
					let tokenlessPackages = [];

					for (let appid in response.apps) {
						if (response.apps[appid].missingToken) {
							tokenlessAppids.push(parseInt(appid, 10));
						}
					}

					for (let packageid in response.packages) {
						if (response.packages[packageid].missingToken) {
							tokenlessPackages.push(parseInt(packageid, 10));
						}
					}

					if (tokenlessAppids.length > 0 || tokenlessPackages.length > 0) {
						this.getProductAccessToken(tokenlessAppids, tokenlessPackages, (appTokens, packageTokens) => {
							let tokenApps = [];
							let tokenPackages = [];

							for (let appid in appTokens) {
								tokenApps.push({appid: parseInt(appid, 10), access_token: appTokens[appid]})
							}

							for (let packageid in packageTokens) {
								tokenPackages.push({appid: parseInt(packageid, 10), access_token: packageTokens[appid]})
							}

							this.getProductInfo(tokenApps, tokenPackages, false, (apps, packages) => {
								for (let appid in apps) {
									response.apps[appid] = apps[appid];
									let index = response.unknownApps.indexOf(parseInt(appid, 10));
									if (index != -1) {
										response.unknownApps.splice(index, 1);
									}
								}

								for (let packageid in packages) {
									response.packages[packageid] = packages[packageid];
									let index = response.unknownPackages.indexOf(parseInt(packageid, 10));
									if (index != -1) {
										response.unknownPackages.splice(index, 1);
									}
								}

								if (!callbackFired) {
									callbackFired = true;
									accept(response);
								}
							});
						});
					} else {
						// No tokenless apps or packages
						if (!callbackFired) {
							callbackFired = true;
							accept(response);
						}
					}
				} else {
					if (!callbackFired) {
						callbackFired = true;
						accept(response);
					}
				}
			}
		});
	});
};

/**
 * Get access tokens for some apps and/or packages
 * @param {int[]} apps - Array of appids
 * @param {int[]} packages - Array of packageids
 * @param {function} [callback] - First arg is an object of (appid => access token), second is the same for packages, third is array of appids for which tokens are denied, fourth is the same for packages
 * @return Promise
 */
SteamUser.prototype.getProductAccessToken = function(apps, packages, callback) {
	let args = ['appTokens', 'packageTokens', 'appDeniedTokens', 'packageDeniedTokens'];
	return StdLib.Promises.callbackPromise(args, callback, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientPICSAccessTokenRequest, {
			"packageids": packages,
			"appids": apps
		}, (body) => {
			let appTokens = {};
			let packageTokens = {};

			(body.app_access_tokens || []).forEach((app) => {
				appTokens[app.appid] = app.access_token;
			});

			(body.package_access_tokens || []).forEach((pkg) => {
				packageTokens[pkg.packageid] = pkg.access_token;
			});

			accept({
				appTokens,
				packageTokens,
				"appDeniedTokens": body.app_denied_tokens || [],
				"packageDeniedTokens": body.package_denied_tokens || []
			});
		});
	});
};

/**
 * @private
 */
SteamUser.prototype._resetChangelistUpdateTimer = function() {
	this._clearChangelistUpdateTimer();

	if (this.options.enablePicsCache && this.options.changelistUpdateInterval) {
		if (this.options.changelistUpdateInterval < 1000) {
			this._warn(`Option changelistUpdateInterval with value '${this.options.changelistUpdateInterval}' is below the required minimum of '1000'. Clamping to '1000'.`);
			this.options.changelistUpdateInterval = 1000;
		}

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

	// Set a local timeout if Steam doesn't respond
	let timedOut = false;
	let timeout = setTimeout(() => {
		timedOut = true;
		this._resetChangelistUpdateTimer();
	}, Math.max(Math.round(this.options.changelistUpdateInterval / 2), 30000));

	this.getProductChanges(this.picsCache.changenumber, (err, currentChangenumber, apps, packages) => {
		if (err || timedOut) {
			return;
		}

		let cache = this.picsCache;

		cache.apps = cache.apps || {};
		cache.packages = cache.packages || {};

		apps = apps.map(app => app.appid);
		packages = packages.map(pkg => pkg.packageid);

		let ourApps = apps.filter(appid => this.options.picsCacheAll || cache.apps[appid]);
		let ourPackages = packages.filter(pkgid => this.options.picsCacheAll || cache.packages[pkgid]);

		if (ourApps.length + ourPackages.length === 0) {
			// We're done here

			if (currentChangenumber != cache.changenumber && cache.changenumber != 0) {
				this.emit('changelist', currentChangenumber, apps, packages);
			}

			cache.changenumber = currentChangenumber;
			this._resetChangelistUpdateTimer();
			clearTimeout(timeout);
			return;
		}

		// Get any access tokens we may need
		this.getProductAccessToken(ourApps, ourPackages, (appTokens, packageTokens, appDeniedTokens, packageDeniedTokens) => {
			if (timedOut) {
				return;
			}

			this.emit('changelist', currentChangenumber, apps, packages);

			cache.changenumber = currentChangenumber;
			this._resetChangelistUpdateTimer();
			clearTimeout(timeout);

			let index = -1;
			for (let appid in appTokens) {
				if (appTokens.hasOwnProperty(appid) && (index = ourApps.indexOf(parseInt(appid, 10))) != -1) {
					ourApps[index] = {"appid": parseInt(appid, 10), "access_token": appTokens[appid]};
				}
			}

			for (let packageid in packageTokens) {
				if (packageTokens.hasOwnProperty(packageid) && (index = ourPackages.indexOf(parseInt(packageid, 10))) != -1) {
					ourPackages[index] = {"packageid": parseInt(packageid, 10), "access_token": packageTokens[packageid]};
				}
			}

			this.getProductInfo(ourApps, ourPackages, false, null, PICSRequestType.Changelist);
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

	let apps = this.picsCache.apps || {};
	if (apps[appid]) {
		return;
	}

	this.getProductInfo([appid], [], false, null, PICSRequestType.AddToCache);
};

/**
 * @private
 */
SteamUser.prototype._getLicenseInfo = function() {
	if (!this.options.enablePicsCache || !this.steamID) {
		return;
	}

	let packageids = this.getOwnedPackages();

	this.getProductInfo([], packageids, false, (apps, packages) => {
		// Request info for all the apps in these packages
		let appids = [];

		for (let pkgid in packages) {
			if (!packages.hasOwnProperty(pkgid)) {
				continue;
			}

			((packages[pkgid].packageinfo || {}).appids || []).forEach(function(appid) {
				if (appids.indexOf(appid) == -1) {
					appids.push(appid);
				}
			});
		}

		this.getProductInfo(appids, [], false, (apps, packages) => {
			this.emit('appOwnershipCached');
		}, PICSRequestType.PackageContents);
	}, PICSRequestType.Licenses);
};

/**
 * Get list of appids this account owns. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @param {boolean} [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
 * @returns {int[]}
 */
SteamUser.prototype.getOwnedApps = function(excludeSharedLicenses) {
	if (!this.options.enablePicsCache) {
		throw new Error("PICS cache is not enabled.");
	}

	if (!this.picsCache.packages) {
		throw new Error("No data in PICS package cache yet.");
	}

	let ownedPackages = this.getOwnedPackages(excludeSharedLicenses);
	let appids = {};

	ownedPackages.forEach((pkg) => {
		if (!this.picsCache.packages[pkg]) {
			return;
		}

		pkg = this.picsCache.packages[pkg];
		if (!pkg.packageinfo) {
			return;
		}

		pkg = pkg.packageinfo;

		if (pkg.extended && pkg.extended.expirytime && pkg.extended.expirytime <= Math.floor(Date.now() / 1000)) {
			return; // This package has expired. Free weekend, usually
		}

		(pkg.appids || []).forEach((appid) => {
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
 * @param {boolean} [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
 * @returns {boolean}
 */
SteamUser.prototype.ownsApp = function(appid, excludeSharedLicenses) {
	return this.getOwnedApps(excludeSharedLicenses).indexOf(parseInt(appid, 10)) != -1;
};

/**
 * Returns an array of depot IDs this account owns. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @param {boolean} [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
 * @returns {int[]}
 */
SteamUser.prototype.getOwnedDepots = function(excludeSharedLicenses) {
	if (!this.options.enablePicsCache) {
		throw new Error("PICS cache is not enabled.");
	}

	if (!this.picsCache.packages) {
		throw new Error("No data in PICS package cache yet.");
	}

	let ownedPackages = this.getOwnedPackages(excludeSharedLicenses);
	let depotids = {};

	ownedPackages.forEach((pkg) => {
		if (!this.picsCache.packages[pkg]) {
			return;
		}

		pkg = this.picsCache.packages[pkg];
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
 * @param {boolean} [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
 * @returns {boolean}
 */
SteamUser.prototype.ownsDepot = function(depotid, excludeSharedLicenses) {
	return this.getOwnedDepots(excludeSharedLicenses).indexOf(parseInt(depotid, 10)) != -1;
};

/**
 * Returns an array of package IDs this account owns. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @param {boolean} [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
 * @returns {int[]}
 */
SteamUser.prototype.getOwnedPackages = function(excludeSharedLicenses) {
	if (this.steamID.type != SteamID.Type.ANON_USER && !this.licenses) {
		throw new Error("We don't have our license list yet.");
	}

	if (this.steamID.type == SteamID.Type.ANON_USER) {
		return [17906];
	}

	// We're an individual user
	let packages = this.licenses;
	if (excludeSharedLicenses) {
		packages = packages.filter(license => license.owner_id == this.steamID.accountid);
	}
	packages = packages.map(license => license.package_id);
	packages.sort(sortNumeric);
	return packages;
};

/**
 * Check if this account owns a package. Only works if enablePicsCache option is enabled and appOwnershipCached event
 * has been emitted.
 * @param {int|string} packageid
 * @param {boolean} [excludeSharedLicenses=false] - Pass true to exclude licenses that we have through family sharing
 * @returns {boolean}
 */
SteamUser.prototype.ownsPackage = function(packageid, excludeSharedLicenses) {
	return this.getOwnedPackages(excludeSharedLicenses).indexOf(parseInt(packageid, 10)) != -1;
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
 * @param {function} [callback] - Args (eresult value, SteamUser.EPurchaseResult value, object of (packageid => package names)
 * @return Promise
 */
SteamUser.prototype.redeemKey = function(key, callback) {
	return StdLib.Promises.callbackPromise(['purchaseResultDetails', 'packageList'], callback, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientRegisterKey, {"key": key}, (body) => {
			let packageList = {};

			let receiptDetails = BinaryKVParser.parse(body.purchase_receipt_info).MessageObject;
			if (receiptDetails.LineItemCount > 0) {
				receiptDetails.lineitems.forEach((pkg) => {
					let packageID = pkg.PackageID || pkg.packageID || pkg.packageid;
					packageList[packageID] = pkg.ItemDescription;
				});
			}

			let err = Helpers.eresultError(body.eresult);
			if (err) {
				err.purchaseResultDetails = body.purchase_result_details;
				err.packageList = packageList;
				reject(err);
			} else {
				accept({
					"purchaseResultDetails": body.purchase_result_details,
					packageList
				});
			}
		});
	});
};

/**
 * Request licenses for one or more free-on-demand apps.
 * @param {int[]} appIDs
 * @param {function} [callback] - Args (err, array of granted packageids, array of granted appids)
 * @return Promise
 */
SteamUser.prototype.requestFreeLicense = function(appIDs, callback) {
	if (!Array.isArray(appIDs)) {
		appIDs = [appIDs];
	}

	return StdLib.Promises.callbackPromise(['grantedPackageIds', 'grantedAppIds'], callback, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientRequestFreeLicense, {"appids": appIDs}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				reject(Helpers.eresultError(body.eresult));
			} else {
				accept({
					"grantedPackageIds": body.granted_packageids,
					"grantedAppIds": body.granted_appids
				})
			}
		});
	});
};

// Handlers

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientLicenseList, function(body) {
	this.emit('licenses', body.licenses);
	this.licenses = body.licenses;

	// Request info for our licenses
	if (this.options.enablePicsCache) {
		this._getLicenseInfo();
	}
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientPlayingSessionState, function(body) {
	this._playingBlocked = body.playing_blocked;
	this.emit('playingState', body.playing_blocked, body.playing_app);
	this.playingState = {"blocked": body.playing_blocked, "appid": body.playing_app};
});
