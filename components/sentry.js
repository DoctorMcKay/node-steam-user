var Steam = require('steam');
var SteamUser = require('../index.js');
var fs = require('fs');

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientUpdateMachineAuth] = function(body, callback) {
	// TODO: Handle partial updates
	fs.writeFile(exports.getSentryFilename(), body.bytes.toBuffer());

	// Accept the sentry
	var hash = require('crypto').createHash('sha1');
	hash.update(body.bytes.toBuffer());

	callback(Steam.EMsg.ClientUpdateMachineAuthResponse, {
		"sha_file": hash.digest()
	});
};

exports.getSentryFilename = function() {
	if(this.options.singleSentryfile) {
		return this.options.dataDirectory + '/sentry.bin';
	} else {
		return this.options.dataDirectory + '/sentry.' + this._logOnDetails.account_name + '.bin';
	}
};
