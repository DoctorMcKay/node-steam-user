var Steam = require('steam');
var SteamUser = require('../index.js');
var SteamID = require('steamid');
var fs = require('fs');
var Crypto = require('crypto');
var ByteBuffer = require('bytebuffer');

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
			"obfustucated_private_ip": details.logonID || 0,
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
	} else {
		// Either we're logging on anonymously, or we just don't have a sentry.
		doLogin();
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
			// Get a machine ID
			if(details !== true) {
				self._getMachineID(function(id) {
					self._logOnDetails.machine_id = id;
					doLogin3();
				});
			} else {
				doLogin3();
			}

			function doLogin3() {
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

SteamUser.prototype._getMachineID = function(callback) {
	if(!this._logOnDetails.account_name || this.options.machineIdType == SteamUser.EMachineIDType.None) {
		// No machine IDs for anonymous logons
		callback(null);
		return;
	}

	// The user wants to use a random machine ID that's saved to dataDirectory
	if(this.options.machineIdType == SteamUser.EMachineIDType.PersistentRandom && this.options.dataDirectory) {
		var self = this;
		fs.readFile(this.options.dataDirectory + "/machineid.bin", function(err, id) {
			if(err) {
				id = getRandomID();
				fs.writeFile(self.options.dataDirectory + "/machineid.bin", id);
			}

			callback(id);
		});

		return;
	}

	// The user wants to use a machine ID that's generated off the account name
	if(this.options.machineIdType == SteamUser.EMachineIDType.AccountNameGenerated) {
		callback(createMachineID(
			"SteamUser Hash BB3 " + this._logOnDetails.account_name,
			"SteamUser Hash FF2 " + this._logOnDetails.account_name,
			"SteamUser Hash 3B3 " + this._logOnDetails.account_name
		));

		return;
	}

	// Default to random
	callback(getRandomID());

	function getRandomID() {
		return createMachineID(Math.random().toString(), Math.random().toString(), Math.random().toString());
	}
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
			this.disconnect(true);

			var isEmailCode = body.eresult == Steam.EResult.AccountLogonDenied;
			this._steamGuardPrompt(isEmailCode ? body.email_domain : null, function(code) {
				self._logOnDetails[isEmailCode ? 'auth_code' : 'two_factor_code'] = code;
				self.logOn(true);
			});

			break;

		case Steam.EResult.ServiceUnavailable:
		case Steam.EResult.TryAnotherCM:
			this.emit('debug', 'Log on response: ' + (body.eresult == Steam.EResult.ServiceUnavailable ? "ServiceUnavailable" : "TryAnotherCM"));
			this.disconnect(true);

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
			this.disconnect(true);
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

		var steamID = this.steamID;
		this.disconnect(true);

		this.steamID = steamID;
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

// Private functions

function createMachineID(val_bb3, val_ff2, val_3b3) {
	// Machine IDs are binary KV objects with root key MessageObject and three hashes named BB3, FF2, and 3B3.
	// I don't feel like writing a proper BinaryKV serializer, so this will work fine.

	var buffer = new ByteBuffer(155, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeByte(0); // 1 byte, total 1
	buffer.writeCString("MessageObject"); // 14 bytes, total 15

	buffer.writeByte(1); // 1 byte, total 16
	buffer.writeCString("BB3"); // 4 bytes, total 20
	buffer.writeCString(sha1(val_bb3)); // 41 bytes, total 61

	buffer.writeByte(1); // 1 byte, total 62
	buffer.writeCString("FF2"); // 4 bytes, total 66
	buffer.writeCString(sha1(val_ff2)); // 41 bytes, total 107

	buffer.writeByte(1); // 1 byte, total 108
	buffer.writeCString("3B3"); // 4 bytes, total 112
	buffer.writeCString(sha1(val_3b3)); // 41 bytes, total 153

	buffer.writeByte(8); // 1 byte, total 154
	buffer.writeByte(8); // 1 byte, total 155

	return buffer.flip().toBuffer();

	function sha1(input) {
		var hash = Crypto.createHash('sha1');
		hash.update(input, 'utf8');
		return hash.digest('hex');
	}
}
