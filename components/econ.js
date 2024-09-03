const StdLib = require('@doctormckay/stdlib');

const Helpers = require('./helpers.js');

const SteamUserChat = require('./chat.js');

class SteamUserEcon extends SteamUserChat {
	/**
	 * Get the list of currently-available content servers.
	 * @param {string} language
	 * @param {int} appid
	 * @param {{classid: int, instanceid?: int}[]} classes
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getAssetClassInfo(language, appid, classes, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['descriptions'], callback, (resolve, reject) => {
			this._sendUnified('Econ.GetAssetClassInfo#1', {language, appid, classes}, (body) => {
				resolve({descriptions: body.descriptions});
			});
		});
	}

	/**
	 * Gets your account's trade URL.
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getTradeURL(callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			this._sendUnified('Econ.GetTradeOfferAccessToken#1', {}, (body) => {
				resolve({
					token: body.trade_offer_access_token,
					url: 'https://steamcommunity.com/tradeoffer/new/?partner=' + this.steamID.accountid + '&token=' + body.trade_offer_access_token
				});
			});
		});
	}

	/**
	 * Makes a new trade URL for your account.
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	changeTradeURL(callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			this._sendUnified('Econ.GetTradeOfferAccessToken#1', {generate_new_token: true}, (body) => {
				resolve({
					token: body.trade_offer_access_token,
					url: 'https://steamcommunity.com/tradeoffer/new/?partner=' + this.steamID.accountid + '&token=' + body.trade_offer_access_token
				});
			});
		});
	}

	/**
	 * Gets the list of emoticons your account can use.
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getEmoticonList(callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			this._sendUnified('Player.GetEmoticonList#1', {}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				let emoticons = {};
				body.emoticons.forEach((emoticon) => {
					for (let i in emoticon) {
						if (i.match(/^time_/)) {
							emoticon[i] = emoticon[i] ? new Date(emoticon[i] * 1000) : null;
						} else if (i == 'use_count' && emoticon[i] === null) {
							emoticon[i] = 0;
						}
					}

					emoticons[emoticon.name] = emoticon;
				});

				resolve({emoticons});
			});
		});
	}

	/**
	 * Get a listing of profile items you own.
	 * @param {{language?: string}} [options]
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getOwnedProfileItems(options, callback) {
		if (typeof options == 'function') {
			callback = options;
			options = {};
		}

		options = options || {};

		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, false, (resolve, reject) => {
			this._sendUnified('Player.GetProfileItemsOwned#1', {language: options.language || 'english'}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				for (let i in body) {
					if (Array.isArray(body[i])) {
						body[i] = body[i].map(processProfileItem);
					}
				}

				resolve(body);
			});
		});
	}

	/**
	 * Get a user's equipped profile items.
	 * @param {SteamID|string} steamID - Either a SteamID object or a string that can parse into one
	 * @param {{language?: string}} [options]
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getEquippedProfileItems(steamID, options, callback) {
		if (typeof options == 'function') {
			callback = options;
			options = {};
		}

		options = options || {};

		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, false, (resolve, reject) => {
			steamID = Helpers.steamID(steamID);

			this._sendUnified('Player.GetProfileItemsEquipped#1', {
				steamid: steamID.toString(),
				language: options.language || 'english'
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				for (let i in body) {
					body[i] = processProfileItem(body[i]);
				}

				resolve(body);
			});
		});
	}

	/**
	 * Change your current profile background.
	 * @param {number|string} backgroundAssetID
	 * @param {function} [callback]
	 */
	setProfileBackground(backgroundAssetID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			this._sendUnified('Player.SetProfileBackground#1', {communityitemid: backgroundAssetID}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				resolve();
			});
		});
	}
}

function processProfileItem(item) {
	if (!Object.keys(item).some(k => item[k] !== null)) {
		return null;
	}

	['image_large', 'image_small', 'movie_webm', 'movie_mp4'].forEach((key) => {
		if (item[key]) {
			item[key] = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/' + item[key];
		}
	});
	return item;
}

module.exports = SteamUserEcon;
