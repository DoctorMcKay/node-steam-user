const Crypto = require('crypto');
const SteamCrypto = require('@doctormckay/steam-crypto');
const SteamID = require('steamid');

const EMsg = require('../enums/EMsg.js');
const EResult = require('../enums/EResult.js');

const SteamUserBase = require('./00-base.js');
const SteamUserWebAPI = require('./06-webapi.js');

class SteamUserWeb extends SteamUserWebAPI {
	/**
	 * Log onto steamcommunity.com. Emits {@link SteamUser#event:webSession} on success.
	 */
	webLogOn() {
		// Verify logged on
		if (!this.steamID) {
			throw new Error("Cannot log onto steamcommunity.com without first being connected to Steam network");
		}

		// Verify not anonymous user
		if (this.steamID.type != SteamID.Type.INDIVIDUAL) {
			throw new Error('Must not be anonymous user to use webLogOn (check to see you passed in valid credentials to logOn)')
		}

		this._send(EMsg.ClientRequestWebAPIAuthenticateUserNonce, {});
	}

	_webLogOn() {
		// Identical to webLogOn, except silently fails if not logged on
		if (!this.steamID || this.steamID.type != SteamID.Type.INDIVIDUAL) {
			return;
		}

		this.webLogOn();
	}

	async _webAuthenticate(nonce) {
		// Encrypt the nonce. I don't know if the client uses HMAC IV here, but there's no harm in it...
		let sessionKey = SteamCrypto.generateSessionKey();
		let encryptedNonce = SteamCrypto.symmetricEncryptWithHmacIv(nonce, sessionKey.plain);

		let data = {
			steamid: this.steamID.toString(),
			sessionkey: sessionKey.encrypted,
			encrypted_loginkey: encryptedNonce
		};

		let sessionid, cookies;

		try {
			let res = await this._apiRequest('POST', 'ISteamUserAuth', 'AuthenticateUser', 1, data);
			if (!res.authenticateuser || (!res.authenticateuser.token && !res.authenticateuser.tokensecure)) {
				throw new Error('Malformed response');
			}

			// Generate a random sessionid (CSRF token)
			sessionid = Crypto.randomBytes(12).toString('hex');
			cookies = ['sessionid=' + sessionid];
			if (res.authenticateuser.token) {
				cookies.push('steamLogin=' + res.authenticateuser.token);
			}
			if (res.authenticateuser.tokensecure) {
				cookies.push('steamLoginSecure=' + res.authenticateuser.tokensecure);
			}
		} catch (ex) {
			this.emit('debug', 'Webauth failed: ' + ex.message);

			if (ex.message == 'HTTP error 429') {
				// We got rate-limited
				this._webauthTimeout = 50000;
			}

			if (this._webauthTimeout) {
				this._webauthTimeout = Math.min(this._webauthTimeout * 2, 50000);
			} else {
				this._webauthTimeout = 1000;
			}

			setTimeout(this._webLogOn.bind(this), this._webauthTimeout);
			return;
		}

		/**
		 * Emitted when a steamcommunity.com web session is negotiated
		 * @event SteamUser#webSession
		 * @param {string} sessionID
		 * @param {string[]} cookies
		 */

		this.emit('webSession', sessionid, cookies);
	}
}

// Handlers

SteamUserBase.prototype._handlerManager.add(EMsg.ClientRequestWebAPIAuthenticateUserNonceResponse, function(body) {
	if (body.eresult != EResult.OK) {
		this.emit('debug', 'Got response ' + body.eresult + ' from ClientRequestWebAPIAuthenticateUserNonceResponse, retrying');
		setTimeout(this._webLogOn.bind(this), 500);
	} else {
		this._webAuthenticate(body.webapi_authenticate_user_nonce);
	}
});

module.exports = SteamUserWeb;
