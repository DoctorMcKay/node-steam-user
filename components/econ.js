const StdLib = require('@doctormckay/stdlib');

const SteamUser = require('../index.js');

const Helpers = require('./helpers.js');

/**
 * Get the list of currently-available content servers.
 * @param {string} language
 * @param {int} appid
 * @param {{classid: int, instanceid?: int}[]} classes
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.getAssetClassInfo = function(language, appid, classes, callback) {
	return StdLib.Promises.timeoutCallbackPromise(10000, ['descriptions'], callback, (resolve, reject) => {
		this._sendUnified("Econ.GetAssetClassInfo#1", {language, appid, classes}, (body) => {
			resolve({"descriptions": body.descriptions});
		});
	});
};

/**
 * Gets your account's trade URL.
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.getTradeURL = function(callback) {
	return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
		this._sendUnified("Econ.GetTradeOfferAccessToken#1", {}, (body) => {
			resolve({
				"token": body.trade_offer_access_token,
				"url": "https://steamcommunity.com/tradeoffer/new/?partner=" + this.steamID.accountid + "&token=" + body.trade_offer_access_token
			});
		});
	});
};

/**
 * Makes a new trade URL for your account.
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.changeTradeURL = function(callback) {
	return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
		this._sendUnified("Econ.GetTradeOfferAccessToken#1", {"generate_new_token": true}, (body) => {
			resolve({
				"token": body.trade_offer_access_token,
				"url": "https://steamcommunity.com/tradeoffer/new/?partner=" + this.steamID.accountid + "&token=" + body.trade_offer_access_token
			});
		});
	});
};

/**
 * Gets the list of emoticons your account can use.
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.getEmoticonList = function(callback) {
	return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
		this._sendUnified("Player.GetEmoticonList#1", {}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}

			let out = {};
			body.emoticons.forEach((emoticon) => {
				for (let i in emoticon) {
					if (i.match(/^time_/)) {
						emoticon[i] = emoticon[i] ? new Date(emoticon[i] * 1000) : null;
					} else if (i == 'use_count' && emoticon[i] === null) {
						emoticon[i] = 0;
					}
				}

				out[emoticon.name] = emoticon;
			});

			resolve({"emoticons": out});
		});
	});
};

/**
 * Retrieves a user's active profile background item.
 * @param {SteamID|string} steamID - Either a SteamID object or a string which can parse into one
 * @param {{language?: string}} [options]
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.getUserProfileBackground = function(steamID, options, callback) {
	if (typeof options == 'function') {
		callback = options;
		options = {};
	}

	options = options || {};

	return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, false, (resolve, reject) => {
		steamID = Helpers.steamID(steamID);

		this._sendUnified('Player.GetProfileBackground#1', {
			steamid: steamID.toString(),
			language: options.language || 'english'
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}

			if (typeof body.profile_background == 'undefined') {
				return reject(new Error('Malformed response'));
			}

			let background = body.profile_background;
			if (!background || !background.image_large) {
				return resolve(null); // no background
			}

			['image_large', 'image_small', 'movie_webm', 'movie_mp4'].forEach((key) => {
				if (background[key]) {
					background[key] = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/' + background[key];
				}
			});

			return resolve(background);
		});
	})
};

/**
 * Change your current profile background.
 * @param {number|string} backgroundAssetID
 * @param {function} [callback]
 */
SteamUser.prototype.setProfileBackground = function(backgroundAssetID, callback) {
	return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
		this._sendUnified('Player.SetProfileBackground#1', {communityitemid: backgroundAssetID}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}

			resolve();
		});
	});
};
