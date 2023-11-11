const StdLib = require('@doctormckay/stdlib');
const SteamTotp = require('steam-totp');

const SteamUserTrading = require('./trading.js');

class SteamUserTwoFactor extends SteamUserTrading {
	/**
	 * Start the process to enable TOTP two-factor authentication for your account
	 * @param {function} [callback] - Called when an activation SMS has been sent.
	 * @return {Promise}
	 */
	enableTwoFactor(callback) {
		return StdLib.Promises.timeoutCallbackPromise(15000, null, callback, (resolve, reject) => {
			this._sendUnified('TwoFactor.AddAuthenticator#1', {
				steamid: this.steamID.getSteamID64(),
				authenticator_type: 1,
				device_identifier: SteamTotp.getDeviceID(this.steamID),
				sms_phone_id: '1',
				version: 2
			}, (body) => {
				body.server_time = typeof body.server_time === 'string' ? parseInt(body.server_time, 10) : (body.server_time || null);
				body.shared_secret = body.shared_secret ? body.shared_secret.toString('base64') : null;
				body.identity_secret = body.identity_secret ? body.identity_secret.toString('base64') : null;
				body.secret_1 = body.secret_1 ? body.secret_1.toString('base64') : null;

				// Delete all the null keys
				for (let i in body) {
					if (Object.hasOwnProperty.call(body, i) && body[i] === null) {
						delete body[i];
					}
				}

				resolve(body);
			});
		});
	}

	/**
	 * Finalize the process of enabling TOTP two-factor authentication
	 * @param {Buffer} secret - Your shared secret
	 * @param {string} activationCode - The activation code you got in your email
	 * @param {function} [callback] - Called with a single Error argument, or null on success
	 * @return {Promise}
	 */
	finalizeTwoFactor(secret, activationCode, callback) {
		let attemptsLeft = 30;
		let diff = 0;

		let self = this;
		return StdLib.Promises.timeoutCallbackPromise(15000, null, callback, (resolve, reject) => {
			SteamTotp.getTimeOffset((err, offset, latency) => {
				if (err) {
					return reject(err);
				}

				diff = offset;
				finalize();
			});

			function finalize() {
				let code = SteamTotp.generateAuthCode(secret, diff);

				self._sendUnified('TwoFactor.FinalizeAddAuthenticator#1', {
					steamid: self.steamID.getSteamID64(),
					authenticator_code: code,
					authenticator_time: Math.floor(Date.now() / 1000),
					activation_code: activationCode
				}, (body) => {
					if (body.server_time) {
						diff = parseInt(body.server_time, 10) - Math.floor(Date.now() / 1000);
					}

					if (body.status == 89) {
						return reject(new Error('Invalid activation code'));
					} else if (!body.success) {
						return reject(new Error('Error ' + body.status));
					} else if (body.want_more) {
						attemptsLeft--;
						diff += 30;

						if (attemptsLeft <= 0) {
							return reject(new Error('Failed to finalize adding authenticator after 30 attempts'));
						}

						finalize();
					} else {
						resolve();
					}
				});
			}
		});
	}
}

module.exports = SteamUserTwoFactor;
