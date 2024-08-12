const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');

const EMsg = require('../enums/EMsg.js');

const SteamUserEcon = require('./econ.js');

class SteamUserFamilySharing extends SteamUserEcon {
	/**
	 * Add new borrowers.
	 * @param {SteamID[]|string[]|SteamID|string} borrowersSteamID
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	addAuthorizedBorrowers(borrowersSteamID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(5000, null, callback, true, (resolve, reject) => {
			if (!Array.isArray(borrowersSteamID)) {
				borrowersSteamID = [borrowersSteamID];
			}

			this._sendUnified('DeviceAuth.AddAuthorizedBorrowers#1', {
				steamid: this.steamID.getSteamID64(),
				steamid_borrower: borrowersSteamID.map(sid => Helpers.steamID(sid).getSteamID64())
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				return err ? reject(err) : resolve();
			});
		});
	}

	/**
	 * Remove borrowers.
	 * @param {SteamID[]|string[]} borrowersSteamID
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	removeAuthorizedBorrowers(borrowersSteamID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(5000, null, callback, true, (resolve, reject) => {
			if (!Array.isArray(borrowersSteamID)) {
				return reject(new Error('The \'borrowersSteamID\' argument must be an array'));
			}

			this._sendUnified('DeviceAuth.RemoveAuthorizedBorrowers#1', {
				steamid: this.steamID.getSteamID64(),
				steamid_borrower: borrowersSteamID.map(sid => Helpers.steamID(sid).getSteamID64())
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				return err ? reject(err) : resolve();
			});
		});
	}

	/**
	 * Retrieve a list of Steam accounts authorized to borrow your library.
	 * @param {{includeCanceled?: boolean, includePending?: boolean}} [options]
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getAuthorizedBorrowers(options, callback) {
		return StdLib.Promises.timeoutCallbackPromise(5000, null, callback, (resolve, reject) => {
			if (typeof options == 'function') {
				callback = options;
			}

			options = options || {};

			this._sendUnified('DeviceAuth.GetAuthorizedBorrowers#1', {
				steamid: this.steamID.getSteamID64(),
				include_canceled: options.includeCanceled || false,
				include_pending: options.includePending || false
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				return err ? reject(err) : resolve({
					borrowers: body.borrowers.map((borrower) => {
						return {
							steamid: new SteamID(borrower.steamid),
							isPending: borrower.is_pending,
							isCanceled: borrower.is_canceled,
							timeCreated: new Date(borrower.time_created * 1000)
						};
					})
				});
			});
		});
	}

	/**
	 * Get a list of devices we have authorized.
	 * @param {{includeCanceled?: boolean}} [options]
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getAuthorizedSharingDevices(options, callback) {
		if (typeof options == 'function') {
			callback = options;
			options = {};
		}

		options = options || {};

		return StdLib.Promises.timeoutCallbackPromise(5000, null, callback, (resolve, reject) => {
			this._sendUnified('DeviceAuth.GetOwnAuthorizedDevices#1', {
				steamid: this.steamID.getSteamID64(),
				includeCancelled: !!options.includeCanceled
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				return err ? reject(err) : resolve({
					devices: body.devices.map((device) => {
						return {
							deviceToken: device.auth_device_token,
							deviceName: device.device_name,
							isPending: device.is_pending,
							isCanceled: device.is_canceled,
							isLimited: device.is_limited,
							lastTimeUsed: device.last_time_used ? new Date(device.last_time_used * 1000) : null,
							lastBorrower: device.last_borrower_id && device.last_borrower_id != '76561197960265728' ? new SteamID(device.last_borrower_id) : null,
							lastAppPlayed: device.last_app_played || null
						};
					})
				});
			});
		});
	}

	/**
	 * Authorize local device for library sharing.
	 * @param {string} deviceName
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	authorizeLocalSharingDevice(deviceName, callback) {
		return StdLib.Promises.timeoutCallbackPromise(5000, null, callback, true, (resolve, reject) => {
			if (!deviceName) {
				return reject(new Error('The \'deviceName\' argument is required.'));
			}

			this._send(EMsg.ClientAuthorizeLocalDeviceRequest, {
				device_description: deviceName,
				owner_account_id: this.steamID.accountid
			}, (body) => {
				let err = Helpers.eresultError(body.eresult);
				return err ? reject(err) : resolve({deviceToken: body.authed_device_token});
			});
		});
	}

	/**
	 * Deauthorize a device from family sharing.
	 * @param {string|{deviceToken: string}} deviceToken
	 * @param {function} [callback]
	 */
	deauthorizeSharingDevice(deviceToken, callback) {
		return StdLib.Promises.timeoutCallbackPromise(5000, null, callback, true, (resolve, reject) => {
			if (typeof deviceToken == 'object' && typeof deviceToken.deviceToken == 'string') {
				deviceToken = deviceToken.deviceToken;
			}

			if (typeof deviceToken != 'string') {
				return reject(new Error('The \'deviceToken\' parameter is required.'));
			}

			this._send(EMsg.ClientDeauthorizeDeviceRequest, {
				deauthorization_account_id: this.steamID.accountid,
				deauthorization_device_token: deviceToken
			}, (body) => {
				let err = Helpers.eresultError(body.eresult);
				return err ? reject(err) : resolve();
			});
		});
	}

	/**
	 * Use local device authorizations to allow usage of shared licenses.
	 * If successful, `licenses` will be emitted with the newly-acquired licenses.
	 * @param {SteamID|string} ownerSteamID
	 * @param {string|{deviceToken: string}} deviceToken
	 */
	activateSharingAuthorization(ownerSteamID, deviceToken) {
		if (!ownerSteamID) {
			throw new Error('The \'ownerSteamID\' argument is required.');
		}

		if (typeof deviceToken == 'object' && typeof deviceToken.deviceToken == 'string') {
			deviceToken = deviceToken.deviceToken;
		}

		if (typeof deviceToken != 'string') {
			throw new Error('The \'deviceToken\' argument is required.');
		}

		ownerSteamID = Helpers.steamID(ownerSteamID);

		this._send(EMsg.ClientUseLocalDeviceAuthorizations, {
			authorization_account_id: [ownerSteamID.accountid],
			device_tokens: [{owner_account_id: ownerSteamID.accountid, token_id: deviceToken}]
		});
	}

	/**
	 * Deactivate family sharing authorizations. Removes shared licenses.
	 */
	deactivateSharingAuthorization() {
		this._send(EMsg.ClientUseLocalDeviceAuthorizations, {
			authorization_account_id: [],
			device_tokens: []
		});
	}
}

module.exports = SteamUserFamilySharing;
