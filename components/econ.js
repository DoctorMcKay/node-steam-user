const SteamUser = require('../index.js');

const Helpers = require('./helpers.js');

/**
 * Get the list of currently-available content servers.
 * @param {string} language
 * @param {int} appid
 * @param {{classid: int, instanceid?: int}[]} classes
 * @param {function} callback
 */
SteamUser.prototype.getAssetClassInfo = function(language, appid, classes, callback) {
	this._sendUnified("Econ.GetAssetClassInfo#1", {language, appid, classes}, false, (body) => {
		callback(null, Helpers.stringifyLongs(body.descriptions));
	});
};

/**
 * Gets your account's trade URL.
 * @param {function} callback
 */
SteamUser.prototype.getTradeURL = function(callback) {
	this._sendUnified("Econ.GetTradeOfferAccessToken#1", {}, false, (body) => {
		callback(null, {
			"token": body.trade_offer_access_token,
			"url": "https://steamcommunity.com/tradeoffer/new/?partner=" + this.steamID.accountid + "&token=" + body.trade_offer_access_token
		});
	});
};

/**
 * Makes a new trade URL for your account.
 * @param {function} callback
 */
SteamUser.prototype.changeTradeURL = function(callback) {
	this._sendUnified("Econ.GetTradeOfferAccessToken#1", {"generate_new_token": true}, false, (body) => {
		callback(null, {
			"token": body.trade_offer_access_token,
			"url": "https://steamcommunity.com/tradeoffer/new/?partner=" + this.steamID.accountid + "&token=" + body.trade_offer_access_token
		});
	});
};
