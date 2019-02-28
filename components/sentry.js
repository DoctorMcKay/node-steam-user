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

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientUpdateMachineAuth, function(body, hdr, callback) {
	// TODO: Handle partial updates
	if (this.storage) {
		this.storage.writeFile(this._getSentryFilename(), body.bytes);
	}

	this.emit('sentry', body.bytes);

	// Accept the sentry

	callback(SteamUser.EMsg.ClientUpdateMachineAuthResponse, {
		"sha_file": StdLib.Hashing.sha1(body.bytes, 'buffer')
	});
});
