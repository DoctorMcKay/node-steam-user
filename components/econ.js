const StdLib = require('@doctormckay/stdlib');

const SteamUser = require('../index.js');

const Helpers = require('./helpers.js');

/**
 * Get the list of currently-available content servers.
 * @param {string} language
 * @param {int} appid
 * @param {{classid: int, instanceid?: int}[]} classes
 * @param {function} [callback]
 * @return Promise
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
 * @return Promise
 */
SteamUser.prototype.getTradeURL = function(callback) {
	return StdLib.Promises.timeoutCallbackPromise(null, callback, (resolve, reject) => {
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
 * @return Promise
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
