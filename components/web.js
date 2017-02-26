var SteamUser = require('../index.js');
var SteamID = require('steamid');
var Crypto = require('crypto');
var SteamCrypto = require('@doctormckay/steam-crypto');

SteamUser.prototype.webLogOn = function() {
	// Verify logged on
	if (!this.steamID) {
		throw new Error("Cannot log onto steamcommunity.com without first being connected to Steam network");
	}

	// Verify not anonymous user
	if (this.steamID.type != SteamID.Type.INDIVIDUAL) {
		throw new Error('Must not be anonymous user to use webLogOn (check to see you passed in valid credentials to logOn)')
	}

	this._send(SteamUser.EMsg.ClientRequestWebAPIAuthenticateUserNonce, {});
};

SteamUser.prototype._webLogOn = function() {
	// Identical to webLogOn, except silently fails if not logged on
	if (!this.steamID || this.steamID.type != SteamID.Type.INDIVIDUAL) {
		return;
	}

	this.webLogOn();
};

SteamUser.prototype._webAuthenticate = function(nonce) {
	// Encrypt the nonce. I don't know if the client uses HMAC IV here, but there's no harm in it...
	var sessionKey = SteamCrypto.generateSessionKey();
	var encryptedNonce = SteamCrypto.symmetricEncryptWithHmacIv(nonce, sessionKey.plain);

	var data = {
		"steamid": this.steamID.toString(),
		"sessionkey": sessionKey.encrypted,
		"encrypted_loginkey": encryptedNonce
	};

	var self = this;

	this._apiRequest("POST", "ISteamUserAuth", "AuthenticateUser", 1, data, function(err, res) {
		if (err) {
			self.emit('debug', 'Error in AuthenticateUser: ' + err.message);
			fail();
		} else if (!res.authenticateuser || !res.authenticateuser.token || !res.authenticateuser.tokensecure) {
			self.emit('debug', 'Error in AuthenticateUser: malformed response');
			fail();
		} else {
			// Generate a random sessionid (CSRF token)
			var sessionid = Crypto.randomBytes(12).toString('hex');
			self.emit('webSession', sessionid, [
				'sessionid=' + sessionid,
				'steamLogin=' + res.authenticateuser.token,
				'steamLoginSecure=' + res.authenticateuser.tokensecure
			]);
		}
	});

	function fail() {
		if (self._webauthTimeout) {
			self._webauthTimeout = Math.min(self._webauthTimeout * 2, 50000);
		} else {
			self._webauthTimeout = 1000;
		}

		setTimeout(self._webLogOn.bind(self), self._webauthTimeout);
	}
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientRequestWebAPIAuthenticateUserNonceResponse] = function(body) {
	if (body.eresult != SteamUser.EResult.OK) {
		this.emit('debug', 'Got response ' + body.eresult + ' from ClientRequestWebAPIAuthenticateUserNonceResponse, retrying');
		setTimeout(this._webLogOn.bind(this), 500);
	} else {
		this._webAuthenticate(body.webapi_authenticate_user_nonce);
	}
};
