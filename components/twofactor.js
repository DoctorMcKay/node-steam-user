const SteamTotp = require('steam-totp');

const Helpers = require('./helpers.js');
const SteamUser = require('../index.js');

/**
 * Start the process to enable TOTP two-factor authentication for your account
 * @param {function} callback - Called when an activation email has been sent. Params are status (an EResult), sharedSecret (a Buffer), and revocationCode (a string)
 */
SteamUser.prototype.enableTwoFactor = function(callback) {
	this._sendUnified("TwoFactor.AddAuthenticator#1", {
		"steamid": this.steamID.getSteamID64(),
		"authenticator_time": Math.floor(Date.now() / 1000),
		"authenticator_type": 1,
		"device_identifier": SteamTotp.getDeviceID(this.steamID),
		"sms_phone_id": "1"
	}, (body) => {
		body.server_time = typeof body.server_time === 'string' ? parseInt(body.server_time, 10) : (body.server_time || null);
		body.shared_secret = body.shared_secret ? body.shared_secret.toString('base64') : null;
		body.identity_secret = body.identity_secret ? body.identity_secret.toString('base64') : null;
		body.secret_1 = body.secret_1 ? body.secret_1.toString('base64') : null;

		// Delete all the null keys
		for (let i in body) {
			if (body.hasOwnProperty(i) && body[i] === null) {
				delete body[i];
			}
		}

		callback(Helpers.eresultError(body.status), body);
	});
};

/**
 * Finalize the process of enabling TOTP two-factor authentication
 * @param {Buffer} secret - Your shared secret
 * @param {string} activationCode - The activation code you got in your email
 * @param {function} callback - Called with a single Error argument, or null on success
 */
SteamUser.prototype.finalizeTwoFactor = function(secret, activationCode, callback) {
	var attemptsLeft = 30;
	var diff = 0;

	var self = this;
	SteamTotp.getTimeOffset(function(err, offset, latency) {
		if (err) {
			callback(err);
			return;
		}

		diff = offset;
		finalize();
	});

	function finalize() {
		var code = SteamTotp.generateAuthCode(secret, diff);

		self._sendUnified("TwoFactor.FinalizeAddAuthenticator#1", {
			"steamid": self.steamID.getSteamID64(),
			"authenticator_code": code,
			"authenticator_time": Math.floor(Date.now() / 1000),
			"activation_code": activationCode
		}, function(body) {
			if (body.server_time) {
				diff = body.server_time.toNumber() - Math.floor(Date.now() / 1000);
			}

			if (body.status == 89) {
				callback(new Error("Invalid activation code"));
			} else if (!body.success) {
				callback(new Error("Error " + body.status));
			} else if (body.want_more) {
				attemptsLeft--;
				diff += 30;

				finalize();
			} else {
				callback(null);
			}
		});
	}
};
