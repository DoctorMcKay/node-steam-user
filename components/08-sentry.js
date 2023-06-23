const StdLib = require('@doctormckay/stdlib');

const EMsg = require('../enums/EMsg.js');

const SteamUserBase = require('./00-base.js');
const SteamUserWeb = require('./07-web.js');

class SteamUserSentry extends SteamUserWeb {
	/**
	 * @param {Buffer} sentry
	 */
	setSentry(sentry) {
		this._sentry = sentry;
	}

	async _getSentryFileContent() {
		let files = await this._readFiles(this._getSentryFilenames());
		let firstFile = files.find(f => f.contents);
		return firstFile ? firstFile.contents : null;
	}

	_getSentryFilenames() {
		if (this.options.singleSentryfile) {
			return ['sentry.bin'];
		} else {
			return [
				// prefer the steamid-named sentry file if we have it
				`sentry.${this._logOnDetails._steamid}.bin`,
				`sentry.${this._logOnDetails.account_name || this._logOnDetails._newAuthAccountName}.bin`
			];
		}
	}
}

// Handlers

SteamUserBase.prototype._handlerManager.add(EMsg.ClientUpdateMachineAuth, async function(body, hdr, callback) {
	// TODO: Handle partial updates

	this.emit('debug', 'Got new sentry file');
	await Promise.all(this._getSentryFilenames().map(filename => this._saveFile(filename, body.bytes)));
	this.emit('sentry', body.bytes);

	// Accept the sentry

	callback(EMsg.ClientUpdateMachineAuthResponse, {
		sha_file: StdLib.Hashing.sha1(body.bytes, 'buffer')
	});
});

module.exports = SteamUserSentry;
