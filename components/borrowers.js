const StdLib = require('@doctormckay/stdlib');
const Helpers = require('./helpers.js');
const SteamUser = require('../index.js');

/**
 * Add new borrowers.
 * @param {SteamID[]|string[]} borrowersSteamID
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.addAuthorizedBorrowers = function(borrowersSteamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		if (!Array.isArray(borrowersSteamID)) {
			return reject(new Error('The \'borrowersSteamID\' argument must be an array'));
		}

		this._sendUnified('DeviceAuth.AddAuthorizedBorrowers#1', {
			'steamid': this.steamID.getSteamID64(),
			'steamid_borrower': borrowersSteamID
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}
			resolve(body);
		});
	});
};

/**
 * Remove borrowers.
 * @param {SteamID[]|string[]} borrowersSteamID
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.removeAuthorizedBorrowers = function(borrowersSteamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		if (!Array.isArray(borrowersSteamID)) {
			return reject(new Error('The \'borrowersSteamID\' argument must be an array'));
		}
		
		this._sendUnified('DeviceAuth.RemoveAuthorizedBorrowers#1', {
			'steamid': this.steamID.getSteamID64(),
			'steamid_borrower': borrowersSteamID
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
};
