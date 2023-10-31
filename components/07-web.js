const Crypto = require('crypto');
const SteamID = require('steamid');

const SteamUserWebAPI = require('./06-webapi.js');

class SteamUserWeb extends SteamUserWebAPI {
	/**
	 * Log onto steamcommunity.com. Emits {@link SteamUser#event:webSession} on success.
	 */
	webLogOn() {
		// Verify logged on
		if (!this.steamID) {
			throw new Error('Cannot log onto steamcommunity.com without first being connected to Steam network');
		}

		// Verify not anonymous user
		if (this.steamID.type != SteamID.Type.INDIVIDUAL) {
			throw new Error('Must not be anonymous user to use webLogOn (check to see you passed in valid credentials to logOn)');
		}

		if (!this._logOnDetails.access_token) {
			// This would only happen when logging on with a webLogonToken
			throw new Error('Cannot use webLogOn() without having a refresh token available');
		}

		// The client uses access tokens for its session cookie now. Even though we might already technically have an
		// access token available from your initial auth, the client always requests a new one, so let's mimic that behavior.

		let session = this._getLoginSession();
		session.refreshToken = this._logOnDetails.access_token;
		session.getWebCookies().then((cookies) => {
			if (!cookies.some(c => c.startsWith('sessionid='))) {
				let sessionId = Crypto.randomBytes(12).toString('hex');
				cookies.push(`sessionid=${sessionId}`);
			}

			// I don't know what this cookie is for or how important it is that it exist, but the Steam client uses it so let's include it
			if (!cookies.some(c => c.startsWith('clientsessionid='))) {
				let clientSessionId = Crypto.randomBytes(8).toString('hex');
				cookies.push(`clientsessionid=${clientSessionId}`);
			}

			let sessionId = cookies.find(c => c.startsWith('sessionid=')).substring(10);

			/**
			 * Emitted when a steamcommunity.com web session is negotiated
			 * @event SteamUser#webSession
			 * @param {string} sessionID
			 * @param {string[]} cookies
			 */

			this.emit('webSession', sessionId, cookies);
		});
	}
}

module.exports = SteamUserWeb;
