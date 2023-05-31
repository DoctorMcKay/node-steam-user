const BinaryKVParser = require('binarykvparser');
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');
const VDF = require('simple-vdf');

const Helpers = require('./helpers.js');

const EBillingType = require('../enums/EBillingType.js');
const ELicenseFlags = require('../enums/ELicenseFlags.js');
const EMsg = require('../enums/EMsg.js');
const EResult = require('../enums/EResult.js');

const SteamUserBase = require('./00-base.js');
const SteamUserAppAuth = require('./appauth.js');

// This package is implicitly owned by anonymous users. They don't receive a license list, and should instead just
// automatically assume that they own package 17906 (and no others, including 0).
// https://steamdb.info/sub/17906/
const ANONYMOUS_DEDICATED_SERVER_COMP = 17906;

const PICSRequestType = {
	User: 0,
	Changelist: 1,
	Licenses: 2,
	PackageContents: 3,
	AddToCache: 4
};

/**
 * @typedef PackageFilter
 * @type {object}
 * @property {boolean} [excludeFree=false]
 * @property {boolean} [excludeShared=false]
 * @property {boolean} [excludeExpiring=false]
 */

/**
 * @callback PackageFilterFunction
 * @property {Proto_CMsgClientLicenseList_License} packageDetails
 * @property {number} [idx]
 * @property {Proto_CMsgClientLicenseList_License[]} [allPackages]
 * @returns {boolean}
 */

class SteamUserApps extends SteamUserAppAuth {
	/**
	 * Tell Steam that you're "playing" zero or more games.
	 * @param {array} apps - Array of integers (AppIDs) or strings (non-Steam game names) for the games you're playing. Empty to play nothing.
	 * @param {boolean} [force=false] If true, kick any other sessions logged into this account and playing games from Steam
	 */
	gamesPlayed(apps, force) {
		if (!(apps instanceof Array)) {
			apps = [apps];
		}

		let execute = async () => {
			if (this._playingBlocked && force) {
				await this.kickPlayingSession();
			}

			let processedApps = apps.map((app) => {
				if (typeof app == 'string') {
					app = {game_id: '15190414816125648896', game_extra_info: app};
				} else if (typeof app != 'object') {
					app = {game_id: app};
				}

				if (typeof app.game_ip_address == 'number') {
					app.game_ip_address = {v4: app.game_ip_address};
				}

				return app;
			});

			this._send(EMsg.ClientGamesPlayedWithDataBlob, {games_played: processedApps});

			processedApps.forEach((app) => {
				if (app.game_id > Math.pow(2, 32)) {
					// It's a non-Steam game.
					return;
				}

				let appid = parseInt(app.game_id, 10);
				if (!this._playingAppIds.includes(appid)) {
					this.emit('appLaunched', appid);
				}
			});

			this._playingAppIds.forEach((appid) => {
				if (!processedApps.some(app => app.game_id == appid)) {
					this.emit('appQuit', appid);
				}
			});

			this._playingAppIds = processedApps.filter(app => app.game_id < Math.pow(2, 32)).map(app => parseInt(app.game_id, 10));
		};

		execute().catch(() => {
		});
	}

	/**
	 * Kick any other session logged into your account which is playing a game from Steam.
	 * @param {function} [callback]
	 * @returns {Promise<{playingApp: number}>}
	 */
	kickPlayingSession(callback) {
		return StdLib.Promises.callbackPromise([], callback, true, (resolve, reject) => {
			this._send(EMsg.ClientKickPlayingSession, {});
			Helpers.onceTimeout(10000, this, 'playingState', (err, blocked, playingApp) => {
				if (err) {
					return reject(err);
				} else if (blocked) {
					return reject(new Error('Cannot kick other session'));
				} else {
					return resolve({playingApp});
				}
			});
		});
	}

	/**
	 * Get count of people playing a Steam app. Use appid 0 to get number of people connected to Steam.
	 * @param {int} appid
	 * @param {function} [callback]
	 * @returns {Promise<{playerCount: number}>}
	 */
	getPlayerCount(appid, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['playerCount'], callback, (resolve, reject) => {
			this._send(EMsg.ClientGetNumberOfCurrentPlayersDP, {appid}, (body) => {
				let err = Helpers.eresultError(body.eresult);
				if (err) {
					reject(err);
				} else {
					resolve({playerCount: body.player_count});
				}
			});
		});
	}

	/**
	 * Get a list of apps or packages which have changed since a particular changenumber.
	 * @param {int} sinceChangenumber - Changenumber to get changes since. Use 0 to get the latest changenumber, but nothing else
	 * @param {function} [callback]
	 * @returns {Promise<{currentChangeNumber: number, appChanges: number[], packageChanges: number[]}>}
	 */
	getProductChanges(sinceChangenumber, callback) {
		let args = ['currentChangeNumber', 'appChanges', 'packageChanges'];
		return StdLib.Promises.timeoutCallbackPromise(10000, args, callback, (resolve, reject) => {
			this._send(EMsg.ClientPICSChangesSinceRequest, {
				since_change_number: sinceChangenumber,
				send_app_info_changes: true,
				send_package_info_changes: true
			}, (body) => {
				resolve({
					currentChangeNumber: body.current_change_number,
					appChanges: body.app_changes,
					packageChanges: body.package_changes
				});
			});
		});
	}

	/**
	 * Get info about some apps and/or packages from Steam.
	 * @param {int[]|object[]} apps - Array of AppIDs. May be empty. May also contain objects with keys {appid, access_token}
	 * @param {int[]|object[]} packages - Array of package IDs. May be empty. May also contain objects with keys {packageid, access_token}
	 * @param {boolean} [inclTokens=false] - If true, automatically retrieve access tokens if needed
	 * @param {function} [callback]
	 * @param {int} [requestType] - Don't touch
	 * @returns {Promise<{apps: Object<string, {changenumber: number, missingToken: boolean, appinfo: object}>, packages: Object<string, {changenumber: number, missingToken: boolean, packageinfo: object}>, unknownApps: number[], unknownPackages: number[]}>}
	 */
	getProductInfo(apps, packages, inclTokens, callback, requestType) {
		// Adds support for the previous syntax
		if (typeof inclTokens !== 'boolean' && typeof inclTokens === 'function') {
			requestType = callback;
			callback = inclTokens;
			inclTokens = false;
		}

		// This one actually can take a while, so allow it to go as long as 60 minutes
		return StdLib.Promises.timeoutCallbackPromise(3600000, ['apps', 'packages', 'unknownApps', 'unknownPackages'], callback, (resolve, reject) => {
			requestType = requestType || PICSRequestType.User;

			// Steam can send us the full response in multiple responses, so we need to buffer them into one callback
			let appids = [];
			let packageids = [];
			let response = {
				apps: {},
				packages: {},
				unknownApps: [],
				unknownPackages: []
			};

			apps = apps.map((app) => {
				if (typeof app === 'object') {
					appids.push(app.appid);
					return app;
				} else {
					appids.push(app);
					return {appid: app};
				}
			});

			packages = packages.map((pkg) => {
				if (typeof pkg === 'object') {
					packageids.push(pkg.packageid);
					return pkg;
				} else {
					packageids.push(pkg);
					return {packageid: pkg};
				}
			});

			if (inclTokens) {
				packages.filter(pkg => !pkg.access_token).forEach((pkg) => {
					// Check if we have a license for this package which includes a token
					let license = (this.licenses || []).find(lic => lic.package_id == pkg.packageid && lic.access_token != 0);
					if (license) {
						this.emit('debug', `Using token "${license.access_token}" from license for package ${pkg.packageid}`);
						pkg.access_token = license.access_token;
					}
				});
			}

			this._send(EMsg.ClientPICSProductInfoRequest, {apps, packages}, async (body) => {
				// If we're using the PICS cache, then add the items in this response to it
				if (this.options.enablePicsCache) {
					let cache = this.picsCache;
					cache.apps = cache.apps || {};
					cache.packages = cache.packages || {};

					(body.apps || []).forEach((app) => {
						let appInfoVdf = app.buffer.toString('utf8');
						// It seems that Steam appends a NUL byte. Unsure if this is universal or not, but to make sure
						// that things work regardless of whether there's a NUL byte at the end, just remove it if it's there.
						appInfoVdf = appInfoVdf.replace(/\0$/, '');

						let data = {
							changenumber: app.change_number,
							missingToken: !!app.missing_token,
							appinfo: VDF.parse(appInfoVdf).appinfo
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
							changenumber: pkg.change_number,
							missingToken: !!pkg.missing_token,
							packageinfo: pkg.buffer ? BinaryKVParser.parse(pkg.buffer)[pkg.packageid] : null
						};

						if ((!cache.packages[pkg.packageid] && requestType == PICSRequestType.Changelist) || (cache.packages[pkg.packageid] && cache.packages[pkg.packageid].changenumber != data.changenumber)) {
							this.emit('packageUpdate', pkg.packageid, data);
						}

						cache.packages[pkg.packageid] = data;

						pkg._parsedData = data;

						// Request info for all the apps in this package, if this request didn't originate from the license list
						if (requestType != PICSRequestType.Licenses) {
							let appids = (pkg.packageinfo || {}).appids || [];
							this.getProductInfo(appids, [], false, null, PICSRequestType.PackageContents).catch(() => {});
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
					// _parsedData will be populated if we have the PICS cache enabled.
					// If we don't, we need to parse the data here.

					let appInfoVdf = app.buffer.toString('utf8');
					// It seems that Steam appends a NUL byte. Unsure if this is universal or not, but to make sure
					// that things work regardless of whether there's a NUL byte at the end, just remove it if it's there.
					appInfoVdf = appInfoVdf.replace(/\0$/, '');

					response.apps[app.appid] = app._parsedData || {
						changenumber: app.change_number,
						missingToken: !!app.missing_token,
						appinfo: VDF.parse(appInfoVdf).appinfo
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
						"packageinfo": pkg.buffer ? BinaryKVParser.parse(pkg.buffer)[pkg.packageid] : null
					};

					let index = packageids.indexOf(pkg.packageid);
					if (index != -1) {
						packageids.splice(index, 1);
					}
				});

				// appids and packageids contain the list of IDs that we're still waiting on data for
				if (appids.length === 0 && packageids.length === 0) {
					if (!inclTokens) {
						return resolve(response);
					}

					// We want tokens
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

					if (tokenlessAppids.length == 0 && tokenlessPackages.length == 0) {
						// No tokens needed
						return resolve(response);
					}

					try {
						let {
							appTokens,
							packageTokens
						} = await this.getProductAccessToken(tokenlessAppids, tokenlessPackages);
						let tokenApps = [];
						let tokenPackages = [];

						for (let appid in appTokens) {
							tokenApps.push({appid: parseInt(appid, 10), access_token: appTokens[appid]})
						}

						for (let packageid in packageTokens) {
							tokenPackages.push({
								packageid: parseInt(packageid, 10),
								access_token: packageTokens[packageid]
							})
						}

						// Now we have the tokens. Request the data.
						let {apps, packages} = await this.getProductInfo(tokenApps, tokenPackages, false);
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

						resolve(response);
					} catch (ex) {
						return reject(ex);
					}
				}
			});
		});
	}

	/**
	 * Get access tokens for some apps and/or packages
	 * @param {int[]} apps - Array of appids
	 * @param {int[]} packages - Array of packageids
	 * @param {function} [callback] - First arg is an object of (appid => access token), second is the same for packages, third is array of appids for which tokens are denied, fourth is the same for packages
	 * @returns {Promise<{appTokens: Object<string, string>, packageTokens: Object<string, string>, appDeniedTokens: number[], packageDeniedTokens: number[]}>}
	 */
	getProductAccessToken(apps, packages, callback) {
		let args = ['appTokens', 'packageTokens', 'appDeniedTokens', 'packageDeniedTokens'];
		return StdLib.Promises.timeoutCallbackPromise(10000, args, callback, (resolve, reject) => {
			this._send(EMsg.ClientPICSAccessTokenRequest, {
				packageids: packages,
				appids: apps
			}, (body) => {
				let appTokens = {};
				let packageTokens = {};

				(body.app_access_tokens || []).forEach((app) => {
					appTokens[app.appid] = app.access_token;
				});

				(body.package_access_tokens || []).forEach((pkg) => {
					packageTokens[pkg.packageid] = pkg.access_token;
				});

				resolve({
					appTokens,
					packageTokens,
					appDeniedTokens: body.app_denied_tokens || [],
					packageDeniedTokens: body.package_denied_tokens || []
				});
			});
		});
	}

	/**
	 * @protected
	 */
	_resetChangelistUpdateTimer() {
		this._clearChangelistUpdateTimer();

		if (this.options.enablePicsCache && this.options.changelistUpdateInterval) {
			if (this.options.changelistUpdateInterval < 1000) {
				this._warn(`Option changelistUpdateInterval with value '${this.options.changelistUpdateInterval}' is below the required minimum of '1000'. Clamping to '1000'.`);
				this.options.changelistUpdateInterval = 1000;
			}

			this._changelistUpdateTimer = setTimeout(this._getChangelistUpdate.bind(this), this.options.changelistUpdateInterval);
		}
	}

	/**
	 * @protected
	 */
	_clearChangelistUpdateTimer() {
		if (this._changelistUpdateTimer) {
			clearTimeout(this._changelistUpdateTimer);
			this._changelistUpdateTimer = null;
		}
	}

	/**
	 * @protected
	 */
	async _getChangelistUpdate() {
		this._clearChangelistUpdateTimer();

		if (!this.options.enablePicsCache || !this.options.changelistUpdateInterval) {
			return;
		}

		let result = null;
		try {
			result = await this.getProductChanges(this.picsCache.changenumber);
		} catch (ex) {
			this.emit('debug', `Error getting changelist update: ${ex.message}`);
			this._resetChangelistUpdateTimer();
			return;
		}

		let cache = this.picsCache;
		let {appChanges, packageChanges, currentChangeNumber} = result;

		cache.apps = cache.apps || {};
		cache.packages = cache.packages || {};

		appChanges = appChanges.map(app => app.appid);
		packageChanges = packageChanges.map(pkg => pkg.packageid);

		let ourApps = appChanges.filter(appid => this.options.picsCacheAll || cache.apps[appid]);
		let ourPackages = packageChanges.filter(pkgid => this.options.picsCacheAll || cache.packages[pkgid]);

		if (ourApps.length + ourPackages.length === 0) {
			// We're done here

			if (currentChangeNumber != cache.changenumber && cache.changenumber != 0) {
				this.emit('changelist', currentChangeNumber, appChanges, packageChanges);
			}

			cache.changenumber = currentChangeNumber;
			this._resetChangelistUpdateTimer();
			return;
		}

		try {
			// Get any access tokens we may need
			result = await this.getProductAccessToken(ourApps, ourPackages);
		} catch (ex) {
			this.emit('debug', `Error getting tokens for changelist: ${ex.message}`);
			this._resetChangelistUpdateTimer();
			return;
		}

		this.emit('changelist', currentChangeNumber, appChanges, packageChanges);

		let {appTokens, packageTokens} = result;
		cache.changenumber = currentChangeNumber;
		this._resetChangelistUpdateTimer();

		let index = -1;
		for (let appid in appTokens) {
			if (appTokens.hasOwnProperty(appid) && (index = ourApps.indexOf(parseInt(appid, 10))) != -1) {
				ourApps[index] = {appid: parseInt(appid, 10), access_token: appTokens[appid]};
			}
		}

		for (let packageid in packageTokens) {
			if (packageTokens.hasOwnProperty(packageid) && (index = ourPackages.indexOf(parseInt(packageid, 10))) != -1) {
				ourPackages[index] = {packageid: parseInt(packageid, 10), access_token: packageTokens[packageid]};
			}
		}

		// Add a no-op catch in case there's some kind of error
		this.getProductInfo(ourApps, ourPackages, false, null, PICSRequestType.Changelist).catch(() => {
		});
	}

	/**
	 * @param {int} appid
	 * @protected
	 */
	_addAppToCache(appid) {
		if (!this.options.enablePicsCache || appid == 0) {
			return;
		}

		let apps = this.picsCache.apps || {};
		if (apps[appid]) {
			return;
		}

		this.getProductInfo([appid], [], false, null, PICSRequestType.AddToCache).catch(() => {
		});
	}

	/**
	 * Throws error if enablePicsCache option is not enabled or ownershipCached event has not been emitted.
	 * @protected
	 */
	_ensurePicsCache() {
		if (!this.options.enablePicsCache) {
			throw new Error("PICS cache is not enabled.");
		}

		if (!this.picsCache.ownershipModified) {
			throw new Error("No data in PICS package cache yet.");
		}
	}

	/**
	 * @protected
	 */
	async _getLicenseInfo() {
		if (!this.options.enablePicsCache || !this.steamID) {
			return;
		}

		// Get all owned license id's
		let packageids = this.steamID.type == SteamID.Type.ANON_USER
			? [ANONYMOUS_DEDICATED_SERVER_COMP]
			: this.licenses.map(license => license.package_id);
		let result;

		try {
			result = await this.getProductInfo([], packageids, true, undefined, PICSRequestType.Licenses);
		} catch (ex) {
			this.emit('debug', `Error retrieving package info for licenses: ${ex.message}`);
			return;
		}

		let {packages} = result;
		// Request info for all the apps in these packages
		let appids = [];

		for (let pkgid in packages) {
			((packages[pkgid].packageinfo || {}).appids || []).filter(appid => !appids.includes(appid)).forEach(appid => appids.push(appid));
		}

		try {
			await this.getProductInfo(appids, [], true, undefined, PICSRequestType.PackageContents);
			this.picsCache.ownershipModified = Date.now();

			/**
			 * @event SteamUser#appOwnershipCached
			 * @deprecated Use {@link SteamUser#event:ownershipCached} instead
			 */

			/**
			 * Emitted when ownership status of packages and apps is loaded and cached.
			 * @event SteamUser#ownershipCached
			 */

			this.emit('appOwnershipCached'); // legacy event name
			this.emit('ownershipCached');
		} catch (ex) {
			this.emit('debug', `Error retrieving app info for licenses: ${ex.message}`);
		}
	}

	/**
	 * Get list of appids this account owns. Only works if enablePicsCache option is enabled and ownershipCached event
	 * has been emitted.
	 * @param {PackageFilter|PackageFilterFunction} filter - Options for what counts for ownership, or a custom filter function
	 * @returns {number[]}
	 */
	getOwnedApps(filter) {
		this._ensurePicsCache();

		let ownedPackages = this.getOwnedPackages(filter);
		let appids = {};

		ownedPackages.forEach((pkg) => {
			if (!this.picsCache.packages[pkg]) {
				this._warn(`Failed to get owned apps for package ${pkg}`);
				return;
			}

			pkg = this.picsCache.packages[pkg];
			if (!pkg.packageinfo) {
				this._warn(`Failed to get owned apps for package ${pkg}`);
				return;
			}

			pkg = pkg.packageinfo;
			(pkg.appids || []).forEach((appid) => {
				if (!appids[appid]) {
					appids[appid] = true;
				}
			});
		});

		appids = Object.keys(appids).map(appid => parseInt(appid, 10));
		appids.sort(sortNumeric);
		return appids;
	}

	/**
	 * Check if this account owns an app. Only works if enablePicsCache option is enabled and ownershipCached event
	 * has been emitted.
	 * @param {int} appid
	 * @param {PackageFilter|PackageFilterFunction} filter - Options for what counts for ownership, or a custom filter function
	 * @returns {boolean}
	 */
	ownsApp(appid, filter) {
		return this.getOwnedApps(filter).indexOf(parseInt(appid, 10)) != -1;
	}

	/**
	 * Returns an array of depot IDs this account owns. Only works if enablePicsCache option is enabled and ownershipCached event
	 * has been emitted.
	 * @param {PackageFilter|PackageFilterFunction} filter - Options for what counts for ownership, or a custom filter function
	 * @returns {number[]}
	 */
	getOwnedDepots(filter) {
		this._ensurePicsCache();

		let ownedPackages = this.getOwnedPackages(filter);
		let depotids = {};

		ownedPackages.forEach((pkg) => {
			if (!this.picsCache.packages[pkg]) {
				this._warn(`Failed to get owned depots for package ${pkg}`);
				return;
			}

			pkg = this.picsCache.packages[pkg];
			if (!pkg.packageinfo) {
				this._warn(`Failed to get owned depots for package ${pkg}`);
				return;
			}

			pkg = pkg.packageinfo;
			(pkg.depotids || []).forEach(function(depotid) {
				if (!depotids[depotid]) {
					depotids[depotid] = true;
				}
			});
		});

		depotids = Object.keys(depotids).map(depotid => parseInt(depotid, 10));
		depotids.sort(sortNumeric);
		return depotids;
	}

	/**
	 * Check if this account owns a depot. Only works if enablePicsCache option is enabled and ownershipCached event
	 * has been emitted.
	 * @param {int} depotid
	 * @param {PackageFilter|PackageFilterFunction} filter - Options for what counts for ownership, or a custom filter function
	 * @returns {boolean}
	 */
	ownsDepot(depotid, filter) {
		return this.getOwnedDepots(filter).indexOf(parseInt(depotid, 10)) != -1;
	}

	/**
	 * Returns an array of licenses this account owns.
	 * @returns {Proto_CMsgClientLicenseList_License[]}
	 * @protected
	 */
	_getOwnedLicenses() {
		if (this.steamID.type == SteamID.Type.ANON_USER) {
			throw new Error('Anonymous user accounts cannot own licenses');
		}

		if (!this.licenses) {
			throw new Error('We don\'t have our license list yet.');
		}

		return this.licenses;
	}

	/**
	 * Returns an array of package IDs this account owns (different from owned licenses). The filter only
	 * works, if enablePicsCache option is enabled and ownershipCached event has been emitted.
	 * @param {PackageFilter|PackageFilterFunction} filter - Options for what counts for ownership, or a custom filter function
	 * @returns {number[]}
	 */
	getOwnedPackages(filter) {
		// We're anonymous
		if (this.steamID.type == SteamID.Type.ANON_USER) {
			return [ANONYMOUS_DEDICATED_SERVER_COMP];
		}

		// We're an individual user
		let packages = this._getOwnedLicenses();

		// If passed filter argument is empty, and global ownership filter is set, use it
		if (!filter && this.options.ownershipFilter) {
			filter = this.options.ownershipFilter;
		}

		// Support for the old syntax and behavior (<= v4.22.0)
		if (!filter) {
			// Slight deviation of old behavior: don't return expired licenses
			return this._returnPackages(packages);
		}
		// If filter options is a boolean, we asssume it's excludeSharedLicenses
		if (typeof filter === 'boolean') {
			filter = {excludeShared: filter};
		}

		// New behavior from this point on
		// Handle filter options
		if (typeof filter === 'object') {
			const defaults = {
				excludeFree: false, // By default, include free licenses (FreeOnDemand, NoCost, etc.)
				excludeShared: false, // By default, include shared licenses
				excludeExpiring: false // By default, include licenses that are going to expire in the future (free weekends)
			};

			if (typeof this.options.ownershipFilter === 'object') {
				filter = Object.assign(defaults, this.options.ownershipFilter, filter);
			} else {
				filter = Object.assign(defaults, filter);
			}

			// No PICS cache needed: {F=0,S=1,E=0}, {F=0,S=0,E=0}
			if (!filter.excludeFree && !filter.excludeExpiring) {
				if (filter.excludeShared) {
					packages = packages.filter(license => license.owner_id == this.steamID.accountid);
				}
				return this._returnPackages(packages);
			}
		}

		// From this point, we need PICS cache to be enabled
		this._ensurePicsCache();

		// Determine the filter function
		let packageFilter = null;
		if (typeof filter === 'function') {
			packageFilter = filter;
		} else if (typeof filter === 'object') {
			// Possible options: {F=1,S=1,E=1}, {F=1,S=0,E=1}, {F=0,S=1,E=1}, {F=0,S=0,E=1}, {F=1,S=1,E=0}, {F=1,S=0,E=0}

			const freeLicenseBillingTypes = [
				EBillingType.NoCost,
				EBillingType.GuestPass,
				EBillingType.FreeOnDemand,
				EBillingType.FreeCommercialLicense
			];

			packageFilter = (license) => {

				// If expired, filter it out, regardless of the filter options
				// Assumes: license expired flag <=> package expirytime passed
				if (license.flags & ELicenseFlags.Expired) {
					return false;
				}

				// If exclude shared licenses
				if (filter.excludeShared && license.owner_id !== this.steamID.accountid) {
					return false;
				}

				let id = license.package_id;
				if (!this.picsCache.packages[id] || !this.picsCache.packages[id].packageinfo) {
					this._warn(`Failed to filter package ${id} (no PICS cache info available)`);
					return false;
				}

				let pkg = this.picsCache.packages[id].packageinfo;

				// If exclude all free (sub 0 is covered by NoCost)
				if (filter.excludeFree && freeLicenseBillingTypes.includes(pkg.billingtype)) {
					return false;
				}

				// If exclude all expiring licenses (not free promotions, which are yours to keep permanently)
				// noinspection RedundantIfStatementJS
				if (
					filter.excludeExpiring &&
					(
						pkg.billingtype == EBillingType.GuestPass ||
						(pkg.extended && pkg.extended.expirytime && !pkg.extended.freepromotion)
					)
				) {
					// return false, since this license is temporary (but not expired, as expired has been filtered out already)
					return false;
				}

				return true;
			}
		}

		if (packageFilter === null) {
			this._warn('Somehow neither a function, or a filter object, is provided for the ownership filter function');
		}

		return this._returnPackages(packages, packageFilter);
	}

	/**
	 * Note: The reason why ELicenseFlags.Expired licenses are not filtered out from the beginning of getOwnedPackages(),
	 * 		 is so people who provide a filter function as argument can choose to keep them included.
	 * @param {Proto_CMsgClientLicenseList_License[]} packages - this.licenses
	 * @param {PackageFilterFunction} packageFilter - A filter function
	 * @protected
	 */
	_returnPackages(packages, packageFilter) {
		// If no packageFilter is provided, only keep non-expired licenses
		packageFilter = packageFilter || (license => !(license.flags & ELicenseFlags.Expired));
		packages = packages.filter(packageFilter);
		let packageIds = packages.map(license => license.package_id);
		packageIds.sort(sortNumeric);
		return packageIds;
	}

	/**
	 * Check if this account owns a package. Only works if enablePicsCache option is enabled and ownershipCached event
	 * has been emitted.
	 * @param {int|string} packageid
	 * @param {PackageFilter|PackageFilterFunction} filter - Options for what counts for ownership, or a custom filter function
	 * @returns {boolean}
	 */
	ownsPackage(packageid, filter) {
		return this.getOwnedPackages(filter).indexOf(parseInt(packageid, 10)) != -1;
	}

	/**
	 * Redeem a product code on this account.
	 * @param {string} key
	 * @param {function} [callback] - Args (eresult value, SteamUser.EPurchaseResult value, object of (packageid => package names)
	 * @returns {Promise<{purchaseResultDetails: EPurchaseResult, packageList: Object<string, string>}>}
	 */
	redeemKey(key, callback) {
		return StdLib.Promises.timeoutCallbackPromise(90000, ['purchaseResultDetails', 'packageList'], callback, (resolve, reject) => {
			this._send(EMsg.ClientRegisterKey, {"key": key}, (body) => {
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
					resolve({
						purchaseResultDetails: body.purchase_result_details,
						packageList
					});
				}
			});
		});
	}

	/**
	 * Request licenses for one or more free-on-demand apps.
	 * @param {int[]} appIDs
	 * @param {function} [callback] - Args (err, array of granted packageids, array of granted appids)
	 * @returns {Promise<{grantedPackageIds: number[], grantedAppIds: number[]}>}
	 */
	requestFreeLicense(appIDs, callback) {
		if (!Array.isArray(appIDs)) {
			appIDs = [appIDs];
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, ['grantedPackageIds', 'grantedAppIds'], callback, (resolve, reject) => {
			this._send(EMsg.ClientRequestFreeLicense, {appids: appIDs}, (body) => {
				if (body.eresult != EResult.OK) {
					reject(Helpers.eresultError(body.eresult));
				} else {
					resolve({
						grantedPackageIds: body.granted_packageids,
						grantedAppIds: body.granted_appids
					})
				}
			});
		});
	}

	/**
	 * Gets your legacy CD key for a game in your library which uses CD keys
	 * @param {number} appid
	 * @param {function} [callback]
	 * @returns {Promise<{key: string}>}
	 */
	getLegacyGameKey(appid, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			let request = Buffer.alloc(4);
			request.writeUInt32LE(appid);
			this._send(EMsg.ClientGetLegacyGameKey, request, (body) => {
				let responseAppId = body.readUint32();
				if (responseAppId != appid) {
					// Is this even possible?
					return reject(new Error(`Received response for wrong appid ${responseAppId}`));
				}

				let eresult = body.readUint32();
				let err = Helpers.eresultError(eresult);
				if (err) {
					return reject(err);
				}

				let keyLength = body.readUint32();
				if (keyLength == 0) {
					// Unsure if this is possible
					return reject(new Error('No key returned'));
				}

				let key = body.readCString();
				if (key.length != keyLength - 1) {
					// keyLength includes the null terminator
					return reject(new Error(`Incorrect key length: expected ${keyLength - 1} but got ${key.length}`));
				}

				return resolve({key});
			});
		});
	}
}

SteamUserBase.prototype._handlerManager.add(EMsg.ClientLicenseList, function(body) {
	this.emit('licenses', body.licenses);
	this.licenses = body.licenses;

	// Request info for our licenses
	if (this.options.enablePicsCache) {
		this._getLicenseInfo();
	}
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientPlayingSessionState, function(body) {
	this._playingBlocked = body.playing_blocked;
	this.emit('playingState', body.playing_blocked, body.playing_app);
	this.playingState = {blocked: body.playing_blocked, appid: body.playing_app};
});

function sortNumeric(a, b) {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	}

	return 0;
}

module.exports = SteamUserApps;
