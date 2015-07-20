var Steam = require('steam');
var SteamUser = require('../index.js');
var Crypto = require('crypto');
var SteamCrypto = require('steam-crypto');

SteamUser.prototype.webLogOn = function() {
	this._send(Steam.EMsg.ClientRequestWebAPIAuthenticateUserNonce, {});
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

	var self = this;
	var req = require('https').request(options, function(res) {
		if(res.statusCode != 200) {
			self.emit('debug', 'Error in AuthenticateUser: ' + res.statusCode);
			setTimeout(self.webLogOn.bind(self), 500);
			return;
		}

		res.on('data', function(data) {
			var response = JSON.parse(data);

			// Generate a random sessionid (CSRF token)
			var sessionid = Math.floor(Math.random() * 1000000000);
			self.emit('webSession', sessionid, [
				'sessionid=' + sessionid,
				'steamLogin=' + response.authenticateuser.token,
				'steamLoginSecure=' + response.authenticateuser.tokensecure
			]);
		});
	});

	req.on('error', function(err) {
		self.emit('debug', 'Error in AuthenticateUser: ' + err.message);
		setTimeout(self.webLogOn.bind(self), 500);
	});

	req.end(data);
};

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientRequestWebAPIAuthenticateUserNonceResponse] = function(body) {
	if(body.eresult != Steam.EResult.OK) {
		this.emit('debug', 'Got response ' + body.eresult + ' from ClientRequestWebAPIAuthenticateUserNonceResponse, retrying');
		setTimeout(this.webLogOn.bind(this), 500);
	} else {
		this._webAuthenticate(body.webapi_authenticate_user_nonce);
	}
};
