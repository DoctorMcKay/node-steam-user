const StdLib = require('@doctormckay/stdlib');

const SteamUser = require('../index.js');

SteamUser.prototype.setSentry = function(sentry) {
	this._sentry = sentry;
};

SteamUser.prototype._getSentryFilename = function() {
	if (this.options.singleSentryfile) {
		return 'sentry.bin';
	} else {
		return 'sentry.' + this._logOnDetails.account_name + '.bin';
	}
};

// Handlers

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientUpdateMachineAuth, async function(body, hdr, callback) {
	// TODO: Handle partial updates

	this.emit('debug', 'Got new sentry file');
	await this._saveFile(this._getSentryFilename(), body.bytes);
	this.emit('sentry', body.bytes);

	// Accept the sentry

	callback(SteamUser.EMsg.ClientUpdateMachineAuthResponse, {
		"sha_file": StdLib.Hashing.sha1(body.bytes, 'buffer')
	});
});
