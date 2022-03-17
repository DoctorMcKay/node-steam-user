const StdLib = require('@doctormckay/stdlib');

const EMsg = require('../enums/EMsg.js');

const SteamUserBase = require('./00-base.js');
const SteamUserPublishedFiles = require('./pubfiles.js');

class SteamUserSentry extends SteamUserPublishedFiles {
	/**
	 * @param {Buffer} sentry
	 */
	setSentry(sentry) {
		this._sentry = sentry;
	}

	/**
	 * @returns {string}
	 * @protected
	 */
	_getSentryFilename() {
		if (this.options.singleSentryfile) {
			return 'sentry.bin';
		} else {
			return `sentry.${this._logOnDetails.account_name}.bin`;
		}
	}
}

// Handlers

SteamUserBase.prototype._handlerManager.add(EMsg.ClientUpdateMachineAuth, async function(body, hdr, callback) {
	// TODO: Handle partial updates

	this.emit('debug', 'Got new sentry file');
	await this._saveFile(this._getSentryFilename(), body.bytes);
	this.emit('sentry', body.bytes);

	// Accept the sentry

	callback(EMsg.ClientUpdateMachineAuthResponse, {
		sha_file: StdLib.Hashing.sha1(body.bytes, 'buffer')
	});
});

module.exports = SteamUserSentry;
