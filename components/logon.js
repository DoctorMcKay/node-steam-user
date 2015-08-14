var Steam = require('steam');
var SteamUser = require('../index.js');
var SteamID = require('steamid');
var fs = require('fs');
var Crypto = require('crypto');

SteamUser.prototype.logOn = function(details) {
	if(this.client.connected || this.client.loggedOn) {
		throw new Error("Already connected or logged on, cannot log on again");
	}

	this.steamID = null;
	this.limitations = null;
	this.wallet = null;
	this.emailInfo = null;
	this.licenses = null;

	if(details !== true) {
		// We're not logging on with saved details
		details = details || {};

		this._logOnDetails = {
			"account_name": details.accountName,
			"password": details.password,
			"login_key": details.loginKey,
			"should_remember_password": !!details.rememberPassword,
			"protocol_version": 65575
		};
	}

	var self = this;

	// Sentry file handling
	var hash;
	if(this._logOnDetails.account_name && this._sentry && this._sentry.length > 20) {
		// It's a full sentryfile
		hash = Crypto.createHash('sha1');
		hash.update(this._sentry);
		this._logOnDetails.sha_sentryfile = hash.digest();
		doLogin();
	} else if(this._logOnDetails.account_name && this._sentry) {
		// It's a hash of a sentryfile
		this._logOnDetails.sha_sentryfile = this._sentry;
		doLogin();
	} else if(this._logOnDetails.account_name && this.options.dataDirectory) {
		var sentryFilename = this._getSentryFilename();
		fs.readFile(sentryFilename, function(err, file) {
			if(err) {
				// Guess the file doesn't exist
				doLogin();
				return;
			}

			hash = Crypto.createHash('sha1');
			hash.update(file);
			self._logOnDetails.sha_sentryfile = hash.digest();
			doLogin();
		});
	}

	function doLogin() {
		if(self._logOnDetails.sha_sentryfile && self._logOnDetails.sha_sentryfile.toString('hex') == 'aa57132157ac337ba2936099e22236062aafafdd') {
			throw new Error("You're trying to log on with a decoy sentry file. You're probably looking for the sentry file that's hidden.");
		}

		// See if we have a servers list
		if(self.options.dataDirectory) {
			fs.readFile(self.options.dataDirectory + '/servers.json', function(err, file) {
				if(!err) {
					try {
						Steam.servers = JSON.parse(file);
					} catch(e) {
						// We don't care
					}
				}

				doLogin2();
			});
		} else {
			doLogin2();
		}

		function doLogin2() {
			var sid = new SteamID();
			sid.universe = SteamID.Universe.PUBLIC;
			sid.type = self._logOnDetails.account_name ? SteamID.Type.INDIVIDUAL : SteamID.Type.ANON_USER;
			sid.instance = self._logOnDetails.account_name ? SteamID.Instance.DESKTOP : SteamID.Instance.ALL;
			sid.accountid = 0;
			self.client.steamID = sid.getSteamID64();

			self.client.connect();

			self._onConnected = onConnected.bind(self);
			self.client.once('connected', self._onConnected);
		}
	}
};

function onConnected() {
	this._send(Steam.EMsg.ClientLogon, this._logOnDetails);
}

SteamUser.prototype.logOff = SteamUser.prototype.disconnect = function(suppressLogoff) {
	if(!this.client.connected) {
		throw new Error("Cannot disconnect from Steam as we're currently not connected.");
	}

	if(!suppressLogoff) {
		this._send(Steam.EMsg.ClientLogOff, {});
	}

	this.steamID = null;
	this.client.removeListener('connected', this._onConnected);
	this.client.disconnect();
};

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientLogOnResponse] = function(body) {
	var self = this;
	switch(body.eresult) {
		case Steam.EResult.OK:
			this.steamID = new SteamID(body.client_supplied_steamid.toString());

			this._logOnDetails.last_session_id = this.client._sessionID;
			this._logOnDetails.client_instance_id = body.client_instance_id;

			this.emit('loggedOn', body);

			if(this.steamID.type == SteamID.Type.INDIVIDUAL) {
				this._requestNotifications();

				if(body.webapi_authenticate_user_nonce) {
					this._webAuthenticate(body.webapi_authenticate_user_nonce);
				}
			}

			break;

		case Steam.EResult.AccountLogonDenied:
		case Steam.EResult.AccountLoginDeniedNeedTwoFactor:
			this.disconnect();

			var isEmailCode = body.eresult == Steam.EResult.AccountLogonDenied;
			this._steamGuardPrompt(isEmailCode ? body.email_domain : null, function(code) {
				self._logOnDetails[isEmailCode ? 'auth_code' : 'two_factor_code'] = code;
				self.logOn(true);
			});

			break;

		case Steam.EResult.ServiceUnavailable:
		case Steam.EResult.TryAnotherCM:
			this.emit('debug', 'Log on response: ' + (body.eresult == Steam.EResult.ServiceUnavailable ? "ServiceUnavailable" : "TryAnotherCM"));
			this.disconnect();

			setTimeout(function() {
				self.logOn(true);
			}, 1000);

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

SteamUser.prototype._handlers[Steam.EMsg.ClientLoggedOff] = function(body) {
	var msg = body.eresult;
	for(var i in Steam.EResult) {
		if(Steam.EResult.hasOwnProperty(i) && Steam.EResult[i] == body.eresult) {
			msg = i;
			break;
		}
	}

	this.emit('debug', 'Logged off: ' + msg);

	var fatal = true;

	if(this.options.autoRelogin && [Steam.EResult.Fail, Steam.EResult.ServiceUnavailable, Steam.EResult.TryAnotherCM].indexOf(body.eresult) != -1) {
		fatal = false;
	}

	if(fatal) {
		var e = new Error(msg);
		e.eresult = body.eresult;
		this.emit('error', e);
		this.steamID = null;
	} else {
		this.emit('disconnected', body.eresult);
		this.disconnect(true);
		this.logOn(true);
	}
};

SteamUser.prototype._handlers[Steam.EMsg.ClientNewLoginKey] = function(body) {
	if(this.steamID.type == SteamID.Type.INDIVIDUAL) {
		delete this._logOnDetails.password;
		this._logOnDetails.login_key = body.login_key;

		if(this._logOnDetails.should_remember_password) {
			this.emit('loginKey', body.login_key);
		}
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
