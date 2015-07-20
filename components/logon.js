var Steam = require('steam');
var SteamUser = require('../index.js');
var SteamID = require('steamid');
var fs = require('fs');

var Schema = require('./protobufs.js');

SteamUser.prototype.logOn = function(options) {
	if(this.client.connected || this.client.loggedOn) {
		throw new Error("Already connected or logged on, cannot log on again");
	}

	if(options !== true) {
		// We're not logging on with saved details
		options = options || {};

		this._logOnDetails = {
			"account_name": options.accountName,
			"password": options.password,
			"login_key": options.loginKey,
			"should_remember_password": !!options.rememberPassword,
			"protocol_version": 65575
		};
	}

	// Sentry file handling
	if(this._logOnDetails.account_name && fs.existsSync(this.options.dataDirectory + '/sentry.' + this._logOnDetails.account_name + '.bin')) {
		var hash = require('crypto').createHash('sha1');
		hash.update(fs.readFileSync(this.options.dataDirectory + '/sentry.' + this._logOnDetails.account_name + '.bin'));
		this._logOnDetails.sha_sentryfile = hash.digest();
	}

	var sid = new SteamID();
	sid.universe = SteamID.Universe.PUBLIC;
	sid.type = this._logOnDetails.account_name ? SteamID.Type.INDIVIDUAL : SteamID.Type.ANON_USER;
	sid.instance = this._logOnDetails.account_name ? SteamID.Instance.DESKTOP : SteamID.Instance.ALL;
	sid.accountid = 0;
	this.client.steamID = sid.getSteamID64();

	this.client.connect();

	this._onConnected = onConnected.bind(this);
	this.client.on('connected', this._onConnected);
};

function onConnected() {
	this._send(Steam.EMsg.ClientLogon, this._logOnDetails);
}

SteamUser.prototype.logOff = SteamUser.prototype.disconnect = function() {
	this.client.removeListener('connected', this._onConnected);
	this.client.disconnect();
};

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientLogOnResponse] = function(body) {
	switch(body.eresult) {
		case Steam.EResult.OK:
			this.steamID = new SteamID(body.client_supplied_steamid.toString());
			this.emit('loggedOn', body);
			break;

		case Steam.EResult.AccountLogonDenied:
		case Steam.EResult.AccountLoginDeniedNeedTwoFactor:
			var self = this;
			this.disconnect();

			var isEmailCode = body.eresult == Steam.EResult.AccountLogonDenied;
			this._steamGuardPrompt(isEmailCode ? body.email_domain : null, function(code) {
				self._logOnDetails[isEmailCode ? 'auth_code' : 'two_factor_code'] = code;
				self.logOn(true);
			});

			break;

		default:
			var result = body.eresult;

			for(var i in Steam.EResult) {
				if(Steam.EResult.hasOwnProperty(i) && Steam.EResult[i] == body.eresult) {
					result = i;
					break;
				}
			}

			var error = new Error(result);
			error.eresult = body.eresult;
			this.disconnect();
			this.emit('error', error);
	}
};

SteamUser.prototype._steamGuardPrompt = function(domain, callback) {
	if(this.options.promptSteamGuardCode) {
		var rl = require('readline').createInterface({
			"input": process.stdin,
			"output": process.stdout
		});

		rl.question('Steam Guard' + (!domain ? ' App' : '') + ' Code: ', function(code) {
			rl.close();
			callback(code);
		});
	} else {
		this.emit('steamGuard', domain, callback);
	}
};
