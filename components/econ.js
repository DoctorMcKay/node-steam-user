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
	return StdLib.Promises.callbackPromise(['descriptions'], callback, (accept, reject) => {
		this._sendUnified("Econ.GetAssetClassInfo#1", {language, appid, classes}, (body) => {
			accept({"descriptions": body.descriptions});
		});
	});
};

/**
 * Gets your account's trade URL.
 * @param {function} [callback]
 * @return Promise
 */
SteamUser.prototype.getTradeURL = function(callback) {
	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		this._sendUnified("Econ.GetTradeOfferAccessToken#1", {}, (body) => {
			accept({
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
	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		this._sendUnified("Econ.GetTradeOfferAccessToken#1", {"generate_new_token": true}, (body) => {
			accept({
				"token": body.trade_offer_access_token,
				"url": "https://steamcommunity.com/tradeoffer/new/?partner=" + this.steamID.accountid + "&token=" + body.trade_offer_access_token
			});
		});
	});
};
