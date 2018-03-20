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
