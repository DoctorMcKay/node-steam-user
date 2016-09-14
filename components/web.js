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
	var sessionKey = SteamCrypto.generateSessionKey();

	// Encrypt the nonce
	var iv = Crypto.randomBytes(16);
	var aesIv = Crypto.createCipheriv('aes-256-ecb', sessionKey.plain, '');
	aesIv.setAutoPadding(false);
	aesIv.end(iv);

	var cipher = Crypto.createCipheriv('aes-256-cbc', sessionKey.plain, iv);
	cipher.end(nonce);
	var encryptedNonce = Buffer.concat([aesIv.read(), cipher.read()]);

	var data = "steamid=" + this.steamID.toString() +
		"&sessionkey=" + sessionKey.encrypted.toString('hex').replace(/../g, '%$&') +
		"&encrypted_loginkey=" + encryptedNonce.toString('hex').replace(/../g, '%$&');

	var options = {
		"hostname": "api.steampowered.com",
		"path": "/ISteamUserAuth/AuthenticateUser/v1/",
		"method": "POST",
		"headers": {
			"Content-Type": "application/x-www-form-urlencoded",
			"Content-Length": data.length
		}
	};

	if (this.client.localAddress || this.client._localAddress) {
		options.localAddress = this.client.localAddress || this.client._localAddress;
	}

	var self = this;
	var req = require('https').request(options, function(res) {
		if (res.statusCode != 200) {
			self.emit('debug', 'Error in AuthenticateUser: ' + res.statusCode);
			fail();
			return;
		}

		res.on('data', function(data) {
			try {
				var response = JSON.parse(data);
			} catch (ex) {
				fail();
				return;
			}

			delete self._webauthTimeout;

			// Generate a random sessionid (CSRF token)
			var sessionid = require('crypto').randomBytes(12).toString('hex');
			self.emit('webSession', sessionid, [
				'sessionid=' + sessionid,
				'steamLogin=' + response.authenticateuser.token,
				'steamLoginSecure=' + response.authenticateuser.tokensecure
			]);
		});
	});

	req.on('error', function(err) {
		self.emit('debug', 'Error in AuthenticateUser: ' + err.message);
		fail();
	});

	req.end(data);

	function fail() {
		if (self._webauthTimeout) {
			self._webauthTimeout = Math.min(self._webauthTimeout * 2, 30000);
		} else {
			self._webauthTimeout = 1000;
		}

		setTimeout(self._webLogOn.bind(self), self._webauthTimeout);
	}
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientRequestWebAPIAuthenticateUserNonceResponse] = function(body) {
	if(body.eresult != SteamUser.EResult.OK) {
		this.emit('debug', 'Got response ' + body.eresult + ' from ClientRequestWebAPIAuthenticateUserNonceResponse, retrying');
		setTimeout(this._webLogOn.bind(this), 500);
	} else {
		this._webAuthenticate(body.webapi_authenticate_user_nonce);
	}
};
