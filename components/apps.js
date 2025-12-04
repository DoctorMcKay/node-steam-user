const BinaryKVParser = require('binarykvparser');
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');
const VDF = require('kvparser');

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
					app = { game_id: '15190414816125648896', game_extra_info: app };
				} else if (typeof app != 'object') {
					app = { game_id: app };
				}

				if (typeof app.game_ip_address == 'number') {
					app.game_ip_address = { v4: app.game_ip_address };
				}

				return app;
			});

			this._send(EMsg.ClientGamesPlayedWithDataBlob, { games_played: processedApps });

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
					return resolve({ playingApp });
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
			this._send(EMsg.ClientGetNumberOfCurrentPlayersDP, { appid }, (body) => {
				let err = Helpers.eresultError(body.eresult);
				if (err) {
					reject(err);
				} else {
					resolve({ playerCount: body.player_count });
				}
			});
		});
	}

	/**
	 * Get a list of apps or packages which have changed since a particular changenumber.
	 * @param {int} sinceChangenumber - Changenumber to get changes since. Use 0 to get the latest changenumber, but nothing else
	 * @param {function} [callback]
	 * @returns {Promise<{currentChangeNumber: number, appChanges: object[], packageChanges: object[]}>}
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
	 * @param {apps: Object<string, {changenumber: number, missingToken: boolean, appinfo: object}>, packages: Object<string, {changenumber: number, missingToken: boolean, packageinfo: object}>} - Response from getProductInfo
	 * @returns {Promise}
	 * @protected
	 */
	_saveProductInfo({ apps, packages }) {
		if (!this.options.savePicsCache) {
			return Promise.resolve([]);
		}

		let toSave = {};

		for (let appid in apps) {
			// We want to avoid saving apps that are missing a token
			// Public only apps are weird...
			if (apps[appid].missingToken && !apps[appid].appinfo.public_only) {
				continue;
			}
			let filename = `app_info_${appid}.json`;
			let contents = JSON.stringify(apps[appid]);
			toSave[filename] = contents;
		}

		for (let packageid in packages) {
			if (packages[packageid].missingToken) {
				continue;
			}
			let filename = `package_info_${packageid}.json`;
			let contents = JSON.stringify(packages[packageid]);
			toSave[filename] = contents;
		}

		return this._saveFiles(toSave);
	}

	/**
	 * Get cached product info.
	 * @param {object[]} apps - Array of apps {appid, access_token}
	 * @param {object[]} packages - Array of packages {packageid, access_token}
	 * @returns {Promise<{apps: Object<string, {changenumber: number, missingToken: boolean, appinfo: object}>, packages: Object<string, {changenumber: number, missingToken: boolean, packageinfo: object}>, notCachedApps: number[], notCachedPackages: number[]}>}
	 * @protected
	 */
	async _getCachedProductInfo(apps, packages) {
		let response = {
			apps: {},
			packages: {},
			notCachedApps: [],
			notCachedPackages: []
		};

		// With pics cache disabled, we cannot assure pics cache is up to date.
		if (!this.options.enablePicsCache) {
			return response;
		}

		// From this point, we can assume pics cache is up to date (via changelist updates).
		for (let { appid } of apps) {
			if (this.picsCache.apps[appid]) {
				response.apps[appid] = this.picsCache.apps[appid];
			} else {
				response.notCachedApps.push(appid);
			}
		}
		for (let { packageid } of packages) {
			if (this.picsCache.packages[packageid]) {
				response.packages[packageid] = this.picsCache.packages[packageid];
			} else {
				response.notCachedPackages.push(packageid);
			}
		}

		// If everything was already in memory cache, we're done.
		if (response.notCachedApps.length === 0 && response.notCachedPackages.length === 0) {
			return response;
		}

		// If pics cache is not being saved to disk, we're done.
		if (!this.options.savePicsCache) {
			return response;
		}

		// Otherwise, we try loading the missing apps & packages from disk.
		let appids = response.notCachedApps;
		let packageids = response.notCachedPackages;
		response.notCachedApps = [];
		response.notCachedPackages = [];

		let appFiles = {};
		let packageFiles = {};
		for (let appid of appids) {
			let filename = `app_info_${appid}.json`;
			appFiles[filename] = appid;
		}
		for (let packageid of packageids) {
			let filename = `package_info_${packageid}.json`;
			packageFiles[filename] = packageid;
		}
		let files = await this._readFiles(Object.keys(appFiles).concat(Object.keys(packageFiles)));

		for (let { filename, error, contents } of files) {
			if (Buffer.isBuffer(contents)) {
				contents = contents.toString('utf8');
			}
			let appid = appFiles[filename];
			let packageid = packageFiles[filename];

			if (appid !== undefined) {
				if (error || !contents) {
					response.notCachedApps.push(appid);
				} else {
					// Save to memory cache
					this.picsCache.apps[appid] = JSON.parse(contents);
					response.apps[appid] = this.picsCache.apps[appid];
				}
			} else if (packageid !== undefined) { // Remember, package ID can be 0
				if (error || !contents) {
					response.notCachedPackages.push(packageid);
				} else {
					this.picsCache.packages[packageid] = JSON.parse(contents);
					response.packages[packageid] = this.picsCache.packages[packageid];
				}
			} else {
				this.emit('debug', `Error retrieving origins of file ${filename}`);
			}
		}

		return response;
	}

	/**
	 * Get info about some apps and/or packages from Steam.
	 * @param {int[]|object[]} apps - Array of AppIDs. May be empty. May also contain objects with keys {appid, access_token}
	 * @param {int[]|object[]} packages - Array of package IDs. May be empty. May also contain objects with keys {packageid, access_token}
	 * @param {boolean} inclTokens - If true, automatically retrieve access tokens if needed
	 * @param {function} callback
	 * @param {int} [requestType] - Don't touch
	 * @returns {Promise<{apps: Object<string, {changenumber: number, missingToken: boolean, appinfo: object}>, packages: Object<string, {changenumber: number, missingToken: boolean, packageinfo: object}>, unknownApps: number[], unknownPackages: number[]}>}
	 * @protected
	 */
	_getProductInfo(apps, packages, inclTokens, callback, requestType = PICSRequestType.User) {
		// Steam can send us the full response in multiple responses, so we need to buffer them into one callback
		return StdLib.Promises.timeoutCallbackPromise(7200000, ['apps', 'packages', 'unknownApps', 'unknownPackages'], callback, async (resolve, reject) => {
			let appids = [];
			let packageids = [];
			let response = {
				apps: {},
				packages: {},
				unknownApps: [],
				unknownPackages: []
			};
			let cached = {
				apps: {},
				packages: {},
				notCachedApps: [],
				notCachedPackages: []
			};
			let shaList = {
				apps: {},
				packages: {}
			};

			// Preprocess input: apps and packages
			let _apps = [];
			for (let app of apps) {
				let appid = parseInt(typeof app === 'object' ? app.appid : app, 10);
				// Ensure uniqueness to prevent nasty bugs
				if (appids.includes(appid)) {
					continue;
				}
				if (typeof app === 'object') {
					app.appid = appid;
					appids.push(app.appid);
				} else {
					appids.push(appid);
					app = { appid };
				}
				_apps.push(app);
			}
			apps = _apps;

			let _packages = [];
			for (let pkg of packages) {
				let packageid = parseInt(typeof pkg === 'object' ? pkg.packageid : pkg, 10);
				// Ensure uniqueness to prevent nasty bugs
				if (packageids.includes(packageid)) {
					continue;
				}
				if (typeof pkg === 'object') {
					pkg.packageid = packageid;
					packageids.push(pkg.packageid);
				} else {
					packageids.push(packageid);
					pkg = { packageid };
				}
				if (inclTokens && !pkg.access_token) {
					// Check if we have a license for this package which includes a token
					let license = (this.licenses || []).find(lic => lic.package_id == pkg.packageid && lic.access_token != 0);
					if (license) {
						this.emit('debug', `Using token "${license.access_token}" from license for package ${pkg.packageid}`);
						pkg.access_token = license.access_token;
					}
				}
				_packages.push(pkg);
			}
			packages = _packages;

			// If we have no apps or packages, we're done
			if (appids.length === 0 && packageids.length === 0) {
				resolve(response);
				return;
			}

			// Function to handle response of ClientPICSProductInfoRequest (may be called multiple times)
			let onResponse = async (body) => {
				// If we're using the PICS cache, then add the items in this response to it
				if (this.options.enablePicsCache) {
					let cache = this.picsCache;
					cache.apps = cache.apps || {};
					cache.packages = cache.packages || {};

					(body.apps || []).forEach((app) => {
						let appinfo = null;
						if (app.buffer) {
							let appInfoVdf = app.buffer.toString('utf8');
							// It seems that Steam appends a NUL byte. Unsure if this is universal or not, but to make sure
							// that things work regardless of whether there's a NUL byte at the end, just remove it if it's there.
							appInfoVdf = appInfoVdf.replace(/\0$/, '');
							appinfo = VDF.parse(appInfoVdf).appinfo;
						}

						let data = {
							sha: app.sha ? app.sha.toString('hex') : null,
							changenumber: app.change_number,
							missingToken: !!app.missing_token,
							appinfo
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
							sha: pkg.sha ? pkg.sha.toString('hex') : null,
							changenumber: pkg.change_number,
							missingToken: !!pkg.missing_token,
							packageinfo: pkg.buffer ? BinaryKVParser.parse(pkg.buffer)[pkg.packageid] : null
						};

						if ((!cache.packages[pkg.packageid] && requestType == PICSRequestType.Changelist) || (cache.packages[pkg.packageid] && cache.packages[pkg.packageid].changenumber != data.changenumber)) {
							this.emit('packageUpdate', pkg.packageid, data);
						}

						cache.packages[pkg.packageid] = data;
						pkg._parsedData = data;

						// Request info for all the apps in this package, if this request didn't originate from the license list, because then we'll first process all packages before requesting all package contents
						if (requestType != PICSRequestType.Licenses) {
							let appids = (pkg.packageinfo || {}).appids || [];
							this.getProductInfo(appids, [], false, null, PICSRequestType.PackageContents).catch(() => { });
						}
					});
				}

				(body.apps || []).forEach((app) => {
					// _parsedData will be populated if we have the PICS cache enabled.
					// If we don't, we need to parse the data here.

					let appInfoVdf = app.buffer.toString('utf8');
					// It seems that Steam appends a NUL byte. Unsure if this is universal or not, but to make sure
					// that things work regardless of whether there's a NUL byte at the end, just remove it if it's there.
					appInfoVdf = appInfoVdf.replace(/\0$/, '');

					response.apps[app.appid] = app._parsedData || {
						"sha": app.sha ? app.sha.toString('hex') : null,
						"changenumber": app.change_number,
						"missingToken": !!app.missing_token,
						"appinfo": VDF.parse(appInfoVdf).appinfo
					};

					let index = appids.indexOf(app.appid);
					if (index != -1) {
						appids.splice(index, 1);
					}
				});

				(body.packages || []).forEach((pkg) => {
					response.packages[pkg.packageid] = pkg._parsedData || {
						"sha": pkg.sha ? pkg.sha.toString('hex') : null,
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
					this._saveProductInfo(response);
					let combined = {
						apps: Object.assign(cached.apps, response.apps),
						packages: Object.assign(cached.packages, response.packages),
						unknownApps: response.unknownApps,
						unknownPackages: response.unknownPackages
					}
					return resolve(combined);
				}
			};

			// If we don't use PICS cache or require fresh product info for changelist request, then just perform a normal request
			if (!this.options.enablePicsCache || requestType == PICSRequestType.Changelist) {
				return this._send(EMsg.ClientPICSProductInfoRequest, { apps, packages }, onResponse);
			}

			cached = await this._getCachedProductInfo(apps, packages);
			// Note: This callback can be called multiple times
			this._send(EMsg.ClientPICSProductInfoRequest, { apps, packages, meta_data_only: true }, async (body) => {
				(body.apps || []).forEach((app) => {
					shaList.apps[app.appid] = app.sha ? app.sha.toString('hex') : null;
				});

				(body.packages || []).forEach((pkg) => {
					shaList.packages[pkg.packageid] = pkg.sha ? pkg.sha.toString('hex') : null;
				});

				response.unknownApps = response.unknownApps.concat(body.unknown_appids || []);
				response.unknownPackages = response.unknownPackages.concat(body.unknown_packageids || []);

				let appTotal = Object.keys(shaList.apps).length + response.unknownApps.length;
				let packageTotal = Object.keys(shaList.packages).length + response.unknownPackages.length;

				// If our collected totals match the (unique) total we requested
				if (appTotal === appids.length && packageTotal === packageids.length) {
					// Filter out any apps & packages we already have cached and do not need to be refreshed
					apps = apps.filter((app) => !response.unknownApps.includes(app.appid) && (cached.apps[app.appid] || {}).sha !== shaList.apps[app.appid]);
					packages = packages.filter((pkg) => !response.unknownPackages.includes(pkg.packageid) && (cached.packages[pkg.packageid] || {}).sha !== shaList.packages[pkg.packageid]);
					// console.log(
					// 	"requestType:", requestType,
					// 	"app request:",	appids.length,
					// 	"pkg request:",	packageids.length,
					// 	"app unknown:",	response.unknownApps.length,
					// 	"pkg unknown:",	response.unknownPackages.length,
					// 	"app cache:", 	Object.keys(cached.apps).length,
					// 	"pkg cache:", 	Object.keys(cached.packages).length,
					// 	"app to refresh:",	apps.length,
					// 	"pkg to refresh:",	packages.length,
					// );

					// If we have nothing to refresh / no stale data (e.g. all of them were unknown)
					if (apps.length === 0 && packages.length === 0) {
						this._saveProductInfo(response);
						let combined = {
							apps: Object.assign(cached.apps, response.apps),
							packages: Object.assign(cached.packages, response.packages),
							unknownApps: response.unknownApps,
							unknownPackages: response.unknownPackages
						}
						return resolve(combined);
					}

					// We want tokens
					if (inclTokens) {
						let _appids = apps.map(app => app.appid);
						let _packageids = packages.map(pkg => pkg.packageid);
						let tokenlessAppids = body.apps.filter(app => _appids.includes(app.appid) && !!app.missing_token).map(app => app.appid);
						let tokenlessPackages = body.packages.filter(pkg => _packageids.includes(pkg.packageid) && !!pkg.missing_token).map(pkg => pkg.packageid);
						if (tokenlessAppids.length > 0 || tokenlessPackages.length > 0) {
							try {
								let {
									appTokens,
									packageTokens
								} = await this.getProductAccessToken(tokenlessAppids, tokenlessPackages);
								let tokenApps = {};
								let tokenPackages = {};

								for (let appid in appTokens) {
									tokenApps[appid] = {
										appid: parseInt(appid, 10),
										access_token: appTokens[appid]
									};
								}

								for (let packageid in packageTokens) {
									tokenPackages[packageid] = {
										packageid: parseInt(packageid, 10),
										access_token: packageTokens[packageid]
									};
								}

								// Replace products to request with included tokens
								apps = apps.filter(app => !appTokens[app.appid]).concat(Object.values(tokenApps));
								packages = packages.filter(pkg => !tokenPackages[pkg.packageid]).concat(Object.values(tokenPackages));
							} catch (ex) {
								return reject(ex);
							}
						}
					}

					appids = apps.map(app => app.appid);
					packageids = packages.map(pkg => pkg.packageid);

					// Request the apps & packages we need to refresh
					this._send(EMsg.ClientPICSProductInfoRequest, { apps, packages }, onResponse);
				}
			});
		});
	}

	/**
	 * Get info about some apps and/or packages from Steam, but first split it into chunks
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

		// Add support for optional callback
		if (!requestType && typeof callback !== 'function') {
			requestType = callback;
			callback = undefined;
		}

		requestType = requestType || PICSRequestType.User;

		// This one actually can take a while, so allow it to go as long as 120 minutes
		return StdLib.Promises.timeoutCallbackPromise(7200000, ['apps', 'packages', 'unknownApps', 'unknownPackages'], callback, async (resolve, reject) => {
			try {
				let response = {
					apps: {},
					packages: {},
					unknownApps: [],
					unknownPackages: []
				};
				// Split apps + packages into chunks of 2000
				let chunkSize = 2000;
				for (let i = 0; i < packages.length; i += chunkSize) {
					let packagesChunk = packages.slice(i, i + chunkSize);
					// Do not include callback in the request, it will be called multiple times
					let result = await this._getProductInfo([], packagesChunk, inclTokens, null, requestType);
					response = {
						apps: Object.assign(response.apps, result.apps),
						packages: Object.assign(response.packages, result.packages),
						unknownApps: response.unknownApps.concat(result.unknownApps),
						unknownPackages: response.unknownPackages.concat(result.unknownPackages)
					}
				}
				for (let i = 0; i < apps.length; i += chunkSize) {
					let appsChunk = apps.slice(i, i + chunkSize);
					let result = await this._getProductInfo(appsChunk, [], inclTokens, null, requestType);
					response = {
						apps: Object.assign(response.apps, result.apps),
						packages: Object.assign(response.packages, result.packages),
						unknownApps: response.unknownApps.concat(result.unknownApps),
						unknownPackages: response.unknownPackages.concat(result.unknownPackages)
					}
				}
				resolve(response);
			} catch (ex) {
				return reject(ex);
			}
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

		// First wait for ownership cache to be loaded, so we can calculate ourApps & ourPackages correctly.
		if (!this.picsCache.ownershipModified) {
			this._resetChangelistUpdateTimer();
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
		let { appChanges, packageChanges, currentChangeNumber } = result;

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
			if (this.options.savePicsCache) {
				this._saveFile('changenumber.txt', currentChangeNumber);
			}
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

		let { appTokens, packageTokens } = result;
		cache.changenumber = currentChangeNumber;
		if (this.options.savePicsCache) {
			this._saveFile('changenumber.txt', currentChangeNumber);
		}
		this._resetChangelistUpdateTimer();

		let index = -1;
		for (let appid in appTokens) {
			if (Object.hasOwnProperty.call(appTokens, appid) && (index = ourApps.indexOf(parseInt(appid, 10))) != -1) {
				ourApps[index] = {appid: parseInt(appid, 10), access_token: appTokens[appid]};
			}
		}

		for (let packageid in packageTokens) {
			if (Object.hasOwnProperty.call(packageTokens, packageid) && (index = ourPackages.indexOf(parseInt(packageid, 10))) != -1) {
				ourPackages[index] = {packageid: parseInt(packageid, 10), access_token: packageTokens[packageid]};
			}
		}

		// Add a no-op catch in case there's some kind of error
		let { packages } = await this.getProductInfo(ourApps, ourPackages, false, null, PICSRequestType.Changelist).catch(() => {
		});

		// Request info for all the apps in these packages
		let appids = [];

		for (let pkgid in packages) {
			((packages[pkgid].packageinfo || {}).appids || []).filter(appid => !appids.includes(appid)).forEach(appid => appids.push(appid));
		}

		try {
			// Request type is changelist, because we need to refresh their pics cache
			await this.getProductInfo(appids, [], true, undefined, PICSRequestType.Changelist);
		} catch (ex) {
			this.emit('debug', `Error retrieving product info of changed apps: ${ex.message}`);
		}
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

		this.getProductInfo([appid], [], true, null, PICSRequestType.AddToCache).catch(() => {
		});
	}

	/**
	 * Throws error if enablePicsCache option is not enabled or ownershipCached event has not been emitted.
	 * @protected
	 */
	_ensurePicsCache() {
		if (!this.options.enablePicsCache) {
			throw new Error('PICS cache is not enabled.');
		}

		if (!this.picsCache.ownershipModified) {
			throw new Error('No data in PICS package cache yet.');
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

		let { packages } = result;
		// Request info for all the apps in these packages, and only after all packages have been processed
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
			let pkgid = pkg;
			if (!this.picsCache.packages[pkgid]) {
				this._warn(`Failed to get owned apps for package ${pkgid}: not in cache`);
				return;
			}

			pkg = this.picsCache.packages[pkgid];
			if (!pkg.packageinfo) {
				this._warn(`Failed to get owned apps for package ${pkgid}: no package info`);
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
			let pkgid = pkg;
			if (!this.picsCache.packages[pkgid]) {
				this._warn(`Failed to get owned depots for package ${pkgid}: not in cache`);
				return;
			}

			pkg = this.picsCache.packages[pkgid];
			if (!pkg.packageinfo) {
				this._warn(`Failed to get owned depots for package ${pkgid}: no package info`);
				return;
			}

			pkg = pkg.packageinfo;
			(pkg.depotids || []).forEach(function (depotid) {
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
			filter = { excludeShared: filter };
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
			};
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
			this._send(EMsg.ClientRegisterKey, {key: key}, (body) => {
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
			this._send(EMsg.ClientRequestFreeLicense, { appids: appIDs }, (body) => {
				if (body.eresult != EResult.OK) {
					reject(Helpers.eresultError(body.eresult));
				} else {
					resolve({
						grantedPackageIds: body.granted_packageids,
						grantedAppIds: body.granted_appids
					});
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

				return resolve({ key });
			});
		});
	}
}

SteamUserBase.prototype._handlerManager.add(EMsg.ClientLicenseList, function (body) {
	this.emit('licenses', body.licenses);
	this.licenses = body.licenses;

	// Request info for our licenses
	this._getLicenseInfo();
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientPlayingSessionState, function (body) {
	this._playingBlocked = body.playing_blocked;
	this.emit('playingState', body.playing_blocked, body.playing_app);
	this.playingState = { blocked: body.playing_blocked, appid: body.playing_app };
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
