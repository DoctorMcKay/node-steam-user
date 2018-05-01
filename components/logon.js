var Steam = require('steam-client');
var SteamUser = require('../index.js');
var SteamID = require('steamid');
var Helpers = require('./helpers.js');
var Schema = require('./protobufs.js');
var Crypto = require('crypto');
var ByteBuffer = require('bytebuffer');

SteamUser.prototype.logOn = function(details) {
	if (this.client.loggedOn) {
		throw new Error("Already logged on, cannot log on again");
	}

	this.steamID = null;
	this.limitations = null;
	this.wallet = null;
	this.emailInfo = null;
	this.licenses = null;

	this._loggingOff = false;

	this.users = {};
	this.groups = {};
	this.chats = {};
	this.myFriends = {};
	this.myGroups = {};

	if (details !== true) {
		// We're not logging on with saved details
		details = details || {};

		this._logOnDetails = {
			"account_name": details.accountName,
			"password": details.password,
			"login_key": details.loginKey,
			"auth_code": details.authCode,
			"two_factor_code": details.twoFactorCode,
			"should_remember_password": !!details.rememberPassword,
			"obfustucated_private_ip": details.logonID || 0,
			"protocol_version": 65575, // don't get rid of this, node-steam needs it.
			"supports_rate_limit_response": !!details.accountName,
			"machine_name": details.accountName ? (details.machineName || "") : "",
			"ping_ms_from_cell_search": details.accountName ? 4 + Math.floor(Math.random() * 30) : 0, // fake ping value
			"client_language": details.accountName ? "english" : "",
			"client_os_type": Number.isInteger(details.clientOS) ? details.clientOS : Helpers.getOsType(),
			"anon_user_target_account_name": details.accountName ? "" : "anonymous",
			"steamguard_dont_remember_computer": !!(details.accountName && details.authCode && details.dontRememberMachine)
		};
	}

	var anonLogin = !this._logOnDetails.account_name;

	// Read the required files
	var filenames = [];

	if (!Steam['__SteamUserServersSet__']) {
		filenames.push('servers.json');
	}

	if (!this._logOnDetails.cell_id) {
		// Some people might be redirecting their storage to a database and running across multiple servers in multiple regions
		// Let's account for this by saving cellid by a "machine ID" so different boxes will store different cellids
		filenames.push('cellid-' + Helpers.getInternalMachineID() + '.txt');
	}

	var sentry = this._sentry;
	var machineID;

	if (!anonLogin) {
		if (!this._logOnDetails.sha_sentryfile && !sentry) {
			filenames.push(this.options.singleSentryfile ? 'sentry.bin' : 'sentry.' + this._logOnDetails.account_name + '.bin');
		}

		if (!this._logOnDetails.machine_id && this.options.machineIdType == SteamUser.EMachineIDType.PersistentRandom) {
			filenames.push('machineid.bin');
		}
	}

	var self = this;

	if (this.storage) {
		this.storage.readFiles(filenames, readFileCallback);
	} else {
		readFileCallback(null, []);
	}

	function readFileCallback(err, files) {
		files = files || [];

		files.forEach(function(file) {
			if (file.filename == 'servers.json' && file.contents) {
				try {
					Steam.servers = JSON.parse(file.contents.toString('utf8'));
					Steam['__SteamUserServersSet__'] = true;
				} catch (e) {
					// don't care
				}
			}

			if (file.filename.match(/^cellid/) && file.contents) {
				var cellID = parseInt(file.contents.toString('utf8'), 10);
				if (!isNaN(cellID)) {
					self._logOnDetails.cell_id = cellID;
				}
			}

			if (file.filename.match(/^sentry/) && file.contents) {
				sentry = file.contents;
			}

			if (file.filename == 'machineid.bin' && file.contents) {
				machineID = file.contents;
			}
		});

		if (Steam['__SteamUserServersSet__']) {
			gotCMList();
		} else {
			// Get the CM list from the API
			self.emit('debug', "Getting CM list from WebAPI");
			self._apiRequest("GET", "ISteamDirectory", "GetCMList", 1, {"cellid": self._logOnDetails.cell_id || 0}, function(err, res) {
				if (err || !res.response || res.response.result != 1 || !res.response.serverlist) {
					gotCMList(); // just fallback to the built-in list
				} else {
					res.response.serverlist.length = Object.keys(res.response.serverlist).length;
					Steam.servers = Array.prototype.slice.call(res.response.serverlist).map(function(server) {
						var parts = server.split(':');
						return {"host": parts[0], "port": parts[1]};
					});

					Steam['__SteamUserServersSet__'] = true;
					gotCMList();
				}
			});
		}

		function gotCMList() {
			// Sentry file
			if (!self._logOnDetails.sha_sentryfile) {
				if (sentry && sentry.length > 20) {
					// Hash the sentry
					var hash = Crypto.createHash('sha1');
					hash.update(sentry);
					sentry = hash.digest();
				}

				self._logOnDetails.sha_sentryfile = sentry;
				self._logOnDetails.eresult_sentryfile = sentry ? 1 : 0;
			}

			if (self._logOnDetails.sha_sentryfile && self._logOnDetails.sha_sentryfile.toString('hex') == 'aa57132157ac337ba2936099e22236062aafafdd') {
				throw new Error("You're trying to log on with a decoy sentry file. You're probably looking for the sentry file that's hidden.");
			}

			// Machine ID
			if (!anonLogin && !self._logOnDetails.machine_id) {
				self._logOnDetails.machine_id = self._getMachineID(machineID);
			}

			// Do the login
			var sid = new SteamID();
			sid.universe = SteamID.Universe.PUBLIC;
			sid.type = anonLogin ? SteamID.Type.ANON_USER : SteamID.Type.INDIVIDUAL;
			sid.instance = anonLogin ? SteamID.Instance.ALL : SteamID.Instance.DESKTOP;
			sid.accountid = 0;
			self.client.steamID = sid.getSteamID64();

			if (self.client.connected) {
				onConnected.call(self);
			} else {
				self.client.connect();

				self._onConnected = onConnected.bind(self);
				self.client.once('connected', self._onConnected);
			}
		}
	}
};

function onConnected() {
	if (this.client.constructor.name === 'CMClient') {
		// We need to use this since CMClient defines the protocol version itself
		this.client.logOn(this._logOnDetails);
	} else {
		this._send(SteamUser.EMsg.ClientLogon, this._logOnDetails);
	}
}

SteamUser.prototype.logOff = SteamUser.prototype.disconnect = function(suppressLogoff) {
	if (typeof this._onConnected === 'function') {
		this.client.removeListener('connected', this._onConnected);
	}

	this._clearChangelistUpdateTimer();

	if (this.client.connected && !suppressLogoff) {
		this._loggingOff = true;
		this._send(SteamUser.EMsg.ClientLogOff, {});

		var self = this;
		var timeout = setTimeout(function() {
			self.emit('disconnected', 0, "Logged off");
			self._loggingOff = false;
			self.client.disconnect();
		}, 4000);

		this.once('disconnected', function(eresult) {
			clearTimeout(timeout);
		});
	} else {
		this.client.disconnect();
	}
};

SteamUser.prototype._getMachineID = function(localFile) {
	if (!this._logOnDetails.account_name || this.options.machineIdType == SteamUser.EMachineIDType.None) {
		// No machine IDs for anonymous logons
		return null;
	}

	// The user wants to use a random machine ID that's saved to dataDirectory
	if (this.options.machineIdType == SteamUser.EMachineIDType.PersistentRandom) {
		if (localFile) {
			return localFile;
		}

		var file = getRandomID();

		if (this.storage) {
			this.storage.writeFile('machineid.bin', file);
		}

		return file;
	}

	// The user wants to use a machine ID that's generated off the account name
	if (this.options.machineIdType == SteamUser.EMachineIDType.AccountNameGenerated) {
		return createMachineID(
			this.options.machineIdFormat[0].replace(/\{account_name\}/g, this._logOnDetails.account_name),
			this.options.machineIdFormat[1].replace(/\{account_name\}/g, this._logOnDetails.account_name),
			this.options.machineIdFormat[2].replace(/\{account_name\}/g, this._logOnDetails.account_name)
		);
	}

	// Default to random
	return getRandomID();

	function getRandomID() {
		return createMachineID(Math.random().toString(), Math.random().toString(), Math.random().toString());
	}
};

SteamUser.prototype.relog = function() {
	if (this.steamID.type == SteamID.Type.INDIVIDUAL && (!this._logOnDetails || !this._logOnDetails.should_remember_password || !this._logOnDetails.login_key)) {
		throw new Error("To use relog(), you must specify rememberPassword=true when logging on and wait for loginKey to be emitted");
	}

	this._relogging = true;
	this.logOff();
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientLogOnResponse] = function(body) {
	var self = this;
	switch (body.eresult) {
		case SteamUser.EResult.OK:
			delete this._logonTimeout; // success, so reset reconnect timer

			this.steamID = new SteamID(body.client_supplied_steamid.toString());

			this._logOnDetails.last_session_id = this.client._sessionID;
			this._logOnDetails.client_instance_id = body.client_instance_id;
			this._logOnDetails.cell_id = body.cell_id;
			this.logOnResult = body;

			this.publicIP = Helpers.ipIntToString(body.public_ip);
			this.cellID = body.cell_id;
			this.vanityURL = body.vanity_url;

			this._connectTime = Date.now();
			this._connectionCount = 0;
			this._gcTokens = [];
			this._contentServerTokens = {};

			if (this._logOnDetails.login_key) {
				// Steam doesn't send a new loginkey all the time if you're using a persistent one (remember password). Let's manually emit it on a timer to handle any edge cases.
				this._loginKeyTimer = setTimeout(() => {
					this.emit('loginKey', this._logOnDetails.login_key);
				}, 5000);
			}

			if (this.storage) {
				this.storage.saveFile('cellid-' + Helpers.getInternalMachineID() + '.txt', body.cell_id);
			}

			var parental = body.parental_settings ? Schema.ParentalSettings.decode(body.parental_settings) : null;
			if (parental && parental.salt && parental.passwordhash) {
				parental.salt = parental.salt.toBuffer();
				parental.passwordhash = parental.passwordhash.toBuffer();

				var sid = new SteamID();
				sid.universe = this.steamID.universe;
				sid.type = SteamID.Type.INDIVIDUAL;
				sid.instance = SteamID.Instance.DESKTOP;
				sid.accountid = parental.steamid.low;
				parental.steamid = sid;
			}

			this.emit('loggedOn', body, parental);

			this._getChangelistUpdate();

			if (this.steamID.type == SteamID.Type.INDIVIDUAL) {
				this._requestNotifications();

				if (body.webapi_authenticate_user_nonce) {
					this._webAuthenticate(body.webapi_authenticate_user_nonce);
				}
			} else if (this.steamID.type == SteamID.Type.ANON_USER) {
				this._getLicenseInfo();
			}

			break;

		case SteamUser.EResult.AccountLogonDenied:
		case SteamUser.EResult.AccountLoginDeniedNeedTwoFactor:
		case SteamUser.EResult.TwoFactorCodeMismatch:
			// server is up, so reset logon timer
			delete this._logonTimeout;

			this.disconnect(true);

			var isEmailCode = body.eresult == SteamUser.EResult.AccountLogonDenied;
			var lastCodeWrong = body.eresult == SteamUser.EResult.TwoFactorCodeMismatch;

			this._steamGuardPrompt(isEmailCode ? body.email_domain : null, lastCodeWrong, function(code) {
				self._logOnDetails[isEmailCode ? 'auth_code' : 'two_factor_code'] = code;
				self.logOn(true);
			});

			break;

		case SteamUser.EResult.Fail:
		case SteamUser.EResult.ServiceUnavailable:
		case SteamUser.EResult.TryAnotherCM:
			this.emit('debug', 'Log on response: ' + SteamUser.EResult[body.eresult]);
			this.disconnect(true);

			var timer = this._logonTimeout || 1000;
			this._logonTimeout = Math.min(timer * 2, 60000); // exponential backoff, max 1 minute

			setTimeout(function() {
				self.logOn(true);
			}, timer);

			break;

		default:
			// server is up, so reset logon timer
			delete this._logonTimeout;

			var error = new Error(SteamUser.EResult[body.eresult] || body.eresult);
			error.eresult = body.eresult;
			this.disconnect(true);
			this.emit('error', error);
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientLoggedOff] = function(body) {
	var msg = body.eresult;
	for (var i in SteamUser.EResult) {
		if (SteamUser.EResult.hasOwnProperty(i) && SteamUser.EResult[i] == body.eresult) {
			msg = i;
			break;
		}
	}

	this.emit('debug', 'Logged off: ' + msg);
	this._handleLogOff(body.eresult, msg);
};

SteamUser.prototype._handleLogOff = function(result, msg) {
	var fatal = true;

	if (this.options.autoRelogin && [0, SteamUser.EResult.Fail, SteamUser.EResult.NoConnection, SteamUser.EResult.ServiceUnavailable, SteamUser.EResult.TryAnotherCM].indexOf(result) != -1) {
		fatal = false;
	}

	delete this.publicIP;
	delete this.cellID;

	this._gcTokens = [];
	this._connectionCount = 0;
	this._connectTime = 0;

	this._clearChangelistUpdateTimer();

	if (!this._relogging && fatal && !this._loggingOff) {
		var e = new Error(msg);
		e.eresult = result;

		var steamID = this.steamID;
		this.disconnect(true);

		this.steamID = steamID;
		this.emit('error', e);
		this.steamID = null;
	} else {
		// Only emit "disconnected" if we were previously logged on
		if (this.steamID) {
			this.emit('disconnected', result, msg);
		}

		this.disconnect(true);

		if (!this._loggingOff || this._relogging) {
			var self = this;
			setTimeout(function() {
				self.logOn(true);
			}, 1000);
		}

		this._loggingOff = false;
		this._relogging = false;
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientNewLoginKey] = function(body) {
	if (this.steamID.type == SteamID.Type.INDIVIDUAL) {
		delete this._logOnDetails.password;
		this._logOnDetails.login_key = body.login_key;

		if (this._loginKeyTimer) {
			clearTimeout(this._loginKeyTimer);
		}

		if (this._logOnDetails.should_remember_password) {
			this.emit('loginKey', body.login_key);
		}

		// Accept the key
		this._send(SteamUser.EMsg.ClientNewLoginKeyAccepted, {"unique_id": body.unique_id});
	}
};

SteamUser.prototype._steamGuardPrompt = function(domain, lastCodeWrong, callback) {
	if (this.options.promptSteamGuardCode) {
		var rl = require('readline').createInterface({
			"input": process.stdin,
			"output": process.stdout
		});

		rl.question('Steam Guard' + (!domain ? ' App' : '') + ' Code: ', function(code) {
			rl.close();
			callback(code);
		});
	} else {
		this.emit('steamGuard', domain, callback, lastCodeWrong);
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientCMList] = function(body) {
	this.emit('debug', "Got list of " + (body.cm_websocket_addresses || []).length + " WebSocket CMs, with percentage to use at " +
		(body.percent_default_to_websocket || 0) + "%");
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
