var SteamUser = require('../index.js');

SteamUser.prototype.enableTwoFactor = function(callback) {
	var self = this;

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
