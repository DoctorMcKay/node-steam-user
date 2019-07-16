const Crypto = require('crypto');
const SteamCrypto = require('@doctormckay/steam-crypto');
const SteamID = require('steamid');

const SteamUser = require('../index.js');

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
	let sessionKey = SteamCrypto.generateSessionKey();
	let encryptedNonce = SteamCrypto.symmetricEncryptWithHmacIv(nonce, sessionKey.plain);

	let data = {
		"steamid": this.steamID.toString(),
		"sessionkey": sessionKey.encrypted,
		"encrypted_loginkey": encryptedNonce
	};

	let self = this;

	this._apiRequest("POST", "ISteamUserAuth", "AuthenticateUser", 1, data, (err, res) => {
		if (err) {
			this.emit('debug', 'Error in AuthenticateUser: ' + err.message);
			if (err.message == 'HTTP error 429') {
				this._webauthTimeout = 50000;
			}
			fail();
		} else if (!res.authenticateuser || (!res.authenticateuser.token && !res.authenticateuser.tokensecure)) {
			this.emit('debug', 'Error in AuthenticateUser: malformed response');
			fail();
		} else {
			// Generate a random sessionid (CSRF token)
			let sessionid = Crypto.randomBytes(12).toString('hex');
			let cookies = ['sessionid=' + sessionid];
			if (res.authenticateuser.token) {
				cookies.push('steamLogin=' + res.authenticateuser.token);
			}
			if (res.authenticateuser.tokensecure) {
				cookies.push('steamLoginSecure=' + res.authenticateuser.tokensecure);
			}

			this.emit('webSession', sessionid, cookies);
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

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientRequestWebAPIAuthenticateUserNonceResponse, function(body) {
	if (body.eresult != SteamUser.EResult.OK) {
		this.emit('debug', 'Got response ' + body.eresult + ' from ClientRequestWebAPIAuthenticateUserNonceResponse, retrying');
		setTimeout(this._webLogOn.bind(this), 500);
	} else {
		this._webAuthenticate(body.webapi_authenticate_user_nonce);
	}
});
