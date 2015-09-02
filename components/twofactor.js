var SteamUser = require('../index.js');

/**
 * Start the process to enable TOTP two-factor authentication for your account
 * @param {function} callback - Called when an activation email has been sent. Params are status (an EResult), sharedSecret (a Buffer), and revocationCode (a string)
 */
SteamUser.prototype.enableTwoFactor = function(callback) {
	var self = this;

	// Create a random device ID hash
	var hash = require('crypto').createHash('sha1');
	hash.update(Math.random().toString());
	hash = hash.digest('hex');

	this._sendUnified("TwoFactor.AddAuthenticator#1", {
		"steamid": self.steamID.getSteamID64(),
		"authenticator_time": Math.floor(Date.now() / 1000),
		"authenticator_type": 1,
		"device_identifier": 'android:' + hash
	}, false, function (body) {
		self._sendUnified("TwoFactor.SendEmail#1", {
			"steamid": self.steamID.getSteamID64(),
			"email_type": 1,
			"include_activation_code": true
		}, false, function() {
			callback(body.status, body.shared_secret.toBuffer(), body.revocation_code);
		});
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
	finalize();

	function finalize() {
		var code = SteamUser.generateAuthCode(secret, diff);

		self._sendUnified("TwoFactor.FinalizeAddAuthenticator#1", {
			"steamid": self.steamID.getSteamID64(),
			"authenticator_code": code,
			"authenticator_time": Math.floor(Date.now() / 1000),
			"activation_code": activationCode
		}, false, function(body) {
			if(body.server_time) {
				diff = body.server_time.toNumber() - Math.floor(Date.now() / 1000);
			}

			if(body.status == 89) {
				callback(new Error("Invalid activation code"));
			} else if(!body.success) {
				callback(new Error("Error " + body.status));
			} else if(body.want_more) {
				attemptsLeft--;
				diff += 30;

				finalize();
			} else {
				callback(null);
			}
		});
	}
};

/**
 * Disable TOTP two-factor authentication and go back to regular Steam Guard emails. Either your secret or revocation code is required.
 * @param {object} options - Only one of revocationCode and secret are required
 * @param {string} [options.revocationCode] - If you want to remove with your revocation code, provide it here
 * @param {Buffer} [options.secret] - If you want to remove with your secret, provide it here
 * @param {number} [options.timeOffset=0] - If you know your local time offset relative to the Steam servers, provide it here. Default is 0
 * @param {bool} [options.deauthorizeAll=false] - If you want to deauthorize all other machines from Steam Guard, pass true here
 * @param {function} callback - Called with an Error|null argument and an EResult (I think) argument
 */
SteamUser.prototype.disableTwoFactor = function(options, callback) {
	var self = this;

	var offset = options.timeOffset || 0;
	remove();

	function remove() {
		var code;

		if(options.secret) {
			code = SteamUser.generateAuthCode(options.secret, offset);
		}

		self._sendUnified("TwoFactor.RemoveAuthenticator#1", {
			"steamid": self.steamID.getSteamID64(),
			"revocation_code": options.revocationCode,
			"authenticator_code": code,
			"authenticator_time": Math.floor(Date.now() / 1000) + (options.timeOffset || 0),
			"revocation_reason": 1,
			"steamguard_scheme": 1,
			"remove_all_steamguard_cookies": !!options.deauthorizeAll
		}, false, function(body) {
			if(options.secret && body.success && body.want_more) {
				offset += 30;
				remove();
			} else {
				callback(body.success && !body.want_more ? null : new Error("Cannot remove authenticator"), body.status);
			}
		});
	}
};
