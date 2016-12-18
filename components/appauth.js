var SteamUser = require('../index.js');
var Helpers = require('./helpers.js');
var Schema = require('./protobufs.js');

/**
 * Request an encrypted appticket for a particular app. The app must be set up on the Steam backend for encrypted apptickets.
 * @param {int} appid - The Steam AppID of the app you want a ticket for
 * @param {Buffer} [userData] - If the app expects some "user data", provide it here
 * @param {function} callback - First argument is "err", second is the ticket as a Buffer (on success)
 */
SteamUser.prototype.getEncryptedAppTicket = function(appid, userData, callback) {
	if (typeof userData === 'function') {
		callback = userData;
		userData = new Buffer(0);
	}

	var self = this;
	this._send(SteamUser.EMsg.ClientRequestEncryptedAppTicket, {"app_id": appid, "userdata": userData}, function(body) {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		if (body.app_id != appid) {
			// Don't know if this can even happen
			callback(new Error("Steam did not send an appticket for the requested appid"));
			return;
		}

		if (!body.encrypted_app_ticket) {
			callback(new Error("No appticket in response"));
			return;
		}

		callback(null, (new Schema.EncryptedAppTicket(body.encrypted_app_ticket)).toBuffer());
	});
};
