const StdLib = require('@doctormckay/stdlib');
const Helpers = require('./helpers.js');
const SteamUser = require('../index.js');

/**
 * Get authorized devices.
 * @param {boolean} [includeCancelled=false] - If true, include cancelled devices
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.getOwnAuthorizedDevices = function(includeCancelled, callback) {
	if (typeof includeCancelled !== 'boolean'){
		includeCancelled = false;
	}

	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		this._sendUnified('DeviceAuth.GetOwnAuthorizedDevices#1', {
			'steamid': this.steamID.getSteamID64(),
			includeCancelled
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}
			resolve(body.devices);
		});
	});
};

/**
 * Authorize local device.
 * @param {string} deviceName
 */
SteamUser.prototype.authorizeLocalDevice = function(deviceName){
	if(!deviceName){
		throw new Error('The \'deviceName\' argument is required.');
	}

	this._send(SteamUser.EMsg.ClientAuthorizeLocalDeviceRequest, {
		device_description: deviceName,
		owner_account_id: this.steamID.accountid
	});
}

/**
 * Deauthorize local device.
 * @param {object} device
 */
SteamUser.prototype.deauthorizeDevice = function(device){
	if(!device){
		throw new Error('The \'device\' argument is required.');
	}

	this._send(SteamUser.EMsg.ClientDeauthorizeDeviceRequest, {
		deauthorization_account_id: this.steamID.accountid,
		deauthorization_device_token: device.authed_device_token
	});
}

/**
 * Use local device authorizations to allow the family share.
 * @param {SteamID|string} ownerSteamID
 * @param {object[]} devices
 * @param {object[]} authorization_accounts
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.useLocalDeviceAuthorizations = function(ownerSteamID, devices, authorization_accounts, callback){
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		if(!ownerSteamID){
			return reject(new Error('The \'ownerSteamID\' argument is required.'));
		}

		if (!Array.isArray(devices)) {
			return reject(new Error('The \'devices\' argument must be an array'));
		}

		if (!Array.isArray(authorization_accounts)) {
			return reject(new Error('The \'authorization_accounts\' argument must be an array'));
		}

		let device_tokens = [];
		devices.forEach((device) => {
			device_tokens.push({
				'owner_account_id': Helpers.steamID(ownerSteamID).accountid,
				'token_id': device.authed_device_token
			});
		})

		let authorization_account_id = [];
		authorization_accounts.forEach((auth_acc_id) => {
			authorization_account_id.push(Helpers.steamID(auth_acc_id).accountid)
		});

		this._send(SteamUser.EMsg.ClientUseLocalDeviceAuthorizations, {
			authorization_account_id,
			device_tokens
		});

		resolve();
	});
}

// Handlers

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientAuthorizeLocalDeviceResponse, function(body) {
	this.emit("authorizedLocalDevice", body);
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientDeauthorizeDevice, function(body) {
	this.emit("deauthorizedDevice", body);
});
