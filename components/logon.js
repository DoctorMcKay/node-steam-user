const ByteBuffer = require('bytebuffer');
const Crypto = require('crypto');
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');
const Messages = require('./messages.js');
const Schema = require('../protobufs/generated/_load.js');
const SteamUser = require('../index.js');
const TCPConnection = require('./connection_protocols/tcp.js');
const WebSocketConnection = require('./connection_protocols/websocket.js');

const EResult = SteamUser.EResult;

const PROTOCOL_VERSION = 65580;

SteamUser.prototype.logOn = function(details) {
	// Delay the actual logon by one tick, so if users call logOn from the error event they won't get a crash because
	// they appear to be already logged on (the steamID property is set to null only *after* the error event is emitted)
	process.nextTick(() => {
		if (this.steamID) {
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
				"protocol_version": PROTOCOL_VERSION,
				"supports_rate_limit_response": !!details.accountName,
				"machine_name": details.accountName ? (details.machineName || "") : "",
				"ping_ms_from_cell_search": details.accountName ? 4 + Math.floor(Math.random() * 30) : 0, // fake ping value
				"client_language": details.accountName ? "english" : "",
				"client_os_type": Number.isInteger(details.clientOS) ? details.clientOS : Helpers.getOsType(),
				"anon_user_target_account_name": details.accountName ? "" : "anonymous",
				"steamguard_dont_remember_computer": !!(details.accountName && details.authCode && details.dontRememberMachine),
				"ui_mode": undefined,
				"chat_mode": 2, // enable new chat
				"web_logon_nonce": details.webLogonToken && details.steamID ? details.webLogonToken : undefined,
				"_steamid": details.steamID
			};
		}

		if (this._logOnDetails.web_logon_nonce) {
			this._logOnDetails.client_os_type = 4294966596;
			this._logOnDetails.ui_mode = 4;
			delete this._logOnDetails.obfustucated_private_ip;
			delete this._logOnDetails.cell_id;
			delete this._logOnDetails.client_language;
			delete this._logOnDetails.should_remember_password;
			delete this._logOnDetails.ping_ms_from_cell_search;
			delete this._logOnDetails.machine_id;
			delete this._logOnDetails.password;
			delete this._logOnDetails.login_key;
			delete this._logOnDetails.sha_sentryfile;
			delete this._logOnDetails.auth_code;
			delete this._logOnDetails.steamguard_dont_remember_computer;
			delete this._logOnDetails.machine_name;
			delete this._logOnDetails.machine_name_userchosen;
			delete this._logOnDetails.two_factor_code;
			delete this._logOnDetails.supports_rate_limit_response;
		}

		let anonLogin = !this._logOnDetails.account_name;

		// Read the required files
		let filenames = [];

		if (!this._cmList) {
			filenames.push('cm_list.json');
		}

		if (!this._logOnDetails.cell_id) {
			// Some people might be redirecting their storage to a database and running across multiple servers in multiple regions
			// Let's account for this by saving cellid by a "machine ID" so different boxes will store different cellids
			filenames.push('cellid-' + Helpers.getInternalMachineID() + '.txt');
		}

		let sentry = this._sentry;
		let machineID;

		if (!anonLogin) {
			if (!this._logOnDetails.sha_sentryfile && !sentry) {
				filenames.push(this.options.singleSentryfile ? 'sentry.bin' : 'sentry.' + this._logOnDetails.account_name + '.bin');
			}

			if (!this._logOnDetails.machine_id && this.options.machineIdType == SteamUser.EMachineIDType.PersistentRandom) {
				filenames.push('machineid.bin');
			}
		}

		let self = this;

		if (this.storage) {
			this.storage.readFiles(filenames, readFileCallback);
		} else {
			readFileCallback(null, []);
		}

		function readFileCallback(err, files) {
			files = files || [];

			files.forEach(function(file) {
				if (file.filename == 'cm_list.json' && file.contents) {
					try {
						self._cmList = JSON.parse(file.contents.toString('utf8'));
					} catch (e) {
						// don't care
					}
				}

				if (file.filename.match(/^cellid/) && file.contents) {
					let cellID = parseInt(file.contents.toString('utf8'), 10);
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

			if (self._cmList && (!self._cmList.time || Date.now() - self._cmList.time < (1000 * 60 * 60 * 24 * 7))) {
				// proceed if we have a CM list already and it's less than 7 days old
				gotCMList();
			} else {
				// Get the CM list from the API
				self.emit('debug', "Getting CM list from WebAPI");
				self._apiRequest("GET", "ISteamDirectory", "GetCMList", 1, {"cellid": self._logOnDetails.cell_id || 0}, function(err, res) {
					if (err || !res.response || res.response.result != 1 || !res.response.serverlist) {
						gotCMList(); // just fallback to the built-in list
					} else {
						self._cmList = {
							"tcp_servers": Helpers.fixVdfArray(res.response.serverlist),
							"websocket_servers": Helpers.fixVdfArray(res.response.serverlist_websockets),
							"time": Date.now()
						};

						self._saveCMList();
						gotCMList();
					}
				});
			}

			function gotCMList() {
				if (!self._cmList) {
					// Get built-in list as a last resort
					self._cmList = require('../resources/servers.json');
				}

				// Sentry file
				if (!self._logOnDetails.sha_sentryfile) {
					if (sentry && sentry.length > 20) {
						// Hash the sentry
						let hash = Crypto.createHash('sha1');
						hash.update(sentry);
						sentry = hash.digest();
					}

					self._logOnDetails.sha_sentryfile = sentry;
					self._logOnDetails.eresult_sentryfile = sentry ? 1 : 0;
				}

				// Machine ID
				if (!anonLogin && !self._logOnDetails.machine_id) {
					self._logOnDetails.machine_id = self._getMachineID(machineID);
				}

				// Do the login
				if (self._logOnDetails._steamid) {
					let sid = self._logOnDetails._steamid;
					if (typeof sid == 'string') {
						sid = new SteamID(sid);
					}

					self._tempSteamID = sid;
				} else {
					let sid = new SteamID();
					sid.universe = SteamID.Universe.PUBLIC;
					sid.type = anonLogin ? SteamID.Type.ANON_USER : SteamID.Type.INDIVIDUAL;
					sid.instance = anonLogin ? SteamID.Instance.ALL : SteamID.Instance.DESKTOP;
					sid.accountid = 0;
					self._tempSteamID = sid;
				}

				if (anonLogin && self._logOnDetails.password) {
					process.stderr.write("[steam-user] Warning: Logging into anonymous Steam account but a password was specified... did you specify your accountName improperly?\n");
				}

				self._doConnection();
			}
		}
	});
};

SteamUser.prototype._doConnection = function() {
	let thisProtocol = this.options.protocol;

	if (thisProtocol == SteamUser.EConnectionProtocol.Auto) {
		if (this._cmList.auto_pct_websocket) {
			let roll = Math.floor(Math.random() * 100);
			thisProtocol = roll <= this._cmList.auto_pct_websocket ? SteamUser.EConnectionProtocol.WebSocket : SteamUser.EConnectionProtocol.TCP;
			this.emit('debug', 'Using ' + (thisProtocol == SteamUser.EConnectionProtocol.WebSocket ? 'WebSocket' : 'TCP') + '; we rolled ' + roll + ' and percent to use WS is ' + this._cmList.auto_pct_websocket);
		} else {
			thisProtocol = SteamUser.EConnectionProtocol.TCP;
		}
	}

	switch (thisProtocol) {
		case SteamUser.EConnectionProtocol.TCP:
			this._connection = new TCPConnection(this);
			break;

		case SteamUser.EConnectionProtocol.WebSocket:
			this._connection = new WebSocketConnection(this);
			break;

		default:
			throw new Error("Unknown connection protocol: " + this.options.protocol);
	}
};

/**
 * Log off of Steam gracefully.
 */
SteamUser.prototype.logOff = function() {
	this._disconnect(false);
};

/**
 * Disconnect from Steam
 * @param {boolean} suppressLogoff - If true, just disconnect immediately without sending a logoff message.
 * @private
 */
SteamUser.prototype._disconnect = function(suppressLogoff) {
	this._clearChangelistUpdateTimer();

	if (this.steamID && !suppressLogoff) {
		this._loggingOff = true;
		this._send(SteamUser.EMsg.ClientLogOff, {});

		let timeout = setTimeout(() => {
			this.emit('disconnected', 0, "Logged off");
			this._loggingOff = false;
			this._connection && this._connection.end(true);
			this.steamID = null;
		}, 4000);

		this.once('disconnected', (eresult) => {
			clearTimeout(timeout);
			this.steamID = null;
		});
	} else {
		this._connection && this._connection.end(true);
		this.steamID = null;
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

		let file = getRandomID();

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

SteamUser.prototype._saveCMList = function() {
	if (!this._cmList || !this.storage) {
		return;
	}

	this.storage.writeFile('cm_list.json', JSON.stringify(this._cmList, null, "\t"));
};

SteamUser.prototype.relog = function() {
	if (this.steamID.type == SteamID.Type.INDIVIDUAL && (!this._logOnDetails || !this._logOnDetails.should_remember_password || !this._logOnDetails.login_key)) {
		throw new Error("To use relog(), you must specify rememberPassword=true when logging on and wait for loginKey to be emitted");
	}

	this._relogging = true;
	this.logOff();
};

// Handlers

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientLogOnResponse, function(body) {
	switch (body.eresult) {
		case EResult.OK:
			delete this._logonTimeout; // success, so reset reconnect timer

			this._logOnDetails.last_session_id = this._sessionID;
			this._logOnDetails.client_instance_id = body.client_instance_id;
			this._logOnDetails.cell_id = body.cell_id;
			delete this._logOnDetails.auth_code;
			delete this._logOnDetails.two_factor_code;
			this.logOnResult = body;

			this.publicIP = StdLib.IPv4.intToString(body.public_ip);
			this.cellID = body.cell_id;
			this.vanityURL = body.vanity_url;

			this._connectTime = Date.now();
			this._connectionCount = 0;
			this._connectTimeout = 1000;
			this._gcTokens = [];
			this._contentServerTokens = {};
			this._currentJobID = 0;
			this._currentGCJobID = 0;
			this._jobs = {};
			this._jobsGC = {};

			if (this._logOnDetails.login_key) {
				// Steam doesn't send a new loginkey all the time if you're using a persistent one (remember password). Let's manually emit it on a timer to handle any edge cases.
				this._loginKeyTimer = setTimeout(() => {
					this.emit('loginKey', this._logOnDetails.login_key);
				}, 5000);
			}

			if (this.storage) {
				this.storage.saveFile('cellid-' + Helpers.getInternalMachineID() + '.txt', body.cell_id);
			}

			let parental = body.parental_settings ? Messages.decodeProto(Schema.ParentalSettings, body.parental_settings) : null;
			if (parental && parental.salt && parental.passwordhash) {
				let sid = new SteamID();
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

			this._heartbeatInterval = setInterval(() => {
				this._send(SteamUser.EMsg.ClientHeartBeat, {});
			}, body.out_of_game_heartbeat_seconds * 1000);

			break;

		case EResult.AccountLogonDenied:
		case EResult.AccountLoginDeniedNeedTwoFactor:
		case EResult.TwoFactorCodeMismatch:
			// server is up, so reset logon timer
			delete this._logonTimeout;

			this._disconnect(true);

			let isEmailCode = body.eresult == EResult.AccountLogonDenied;
			let lastCodeWrong = body.eresult == EResult.TwoFactorCodeMismatch;

			this._steamGuardPrompt(isEmailCode ? body.email_domain : null, lastCodeWrong, (code) => {
				this._logOnDetails[isEmailCode ? 'auth_code' : 'two_factor_code'] = code;
				this.logOn(true);
			});

			break;

		case EResult.Fail:
		case EResult.ServiceUnavailable:
		case EResult.TryAnotherCM:
			this.emit('debug', 'Log on response: ' + EResult[body.eresult]);
			this._disconnect(true);

			let timer = this._logonTimeout || 1000;
			this._logonTimeout = Math.min(timer * 2, 60000); // exponential backoff, max 1 minute

			setTimeout(() => {
				this.logOn(true);
			}, timer);

			break;

		default:
			// server is up, so reset logon timer
			delete this._logonTimeout;

			let error = new Error(EResult[body.eresult] || body.eresult);
			error.eresult = body.eresult;
			this._disconnect(true);
			this.emit('error', error);
	}
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientLoggedOff, function(body) {
	let msg = body.eresult;
	for (let i in EResult) {
		if (EResult.hasOwnProperty(i) && EResult[i] == body.eresult) {
			msg = i;
			break;
		}
	}

	this.emit('debug', 'Logged off: ' + msg);
	this._handleLogOff(body.eresult, msg);
});

SteamUser.prototype._handleLogOff = function(result, msg) {
	let fatal = true;

	let nonFatalLogOffResults = [
		0,
		EResult.Fail,
		EResult.NoConnection,
		EResult.ServiceUnavailable,
		EResult.TryAnotherCM
	];

	if (this.options.autoRelogin && nonFatalLogOffResults.includes(result)) {
		fatal = false;
	}

	delete this.publicIP;
	delete this.cellID;

	this._gcTokens = [];
	this._connectionCount = 0;
	this._connectTime = 0;

	this._clearChangelistUpdateTimer();
	clearInterval(this._heartbeatInterval);

	if (!this._relogging && fatal && !this._loggingOff) {
		let e = new Error(msg);
		e.eresult = result;

		let steamID = this.steamID;
		this._disconnect(true);

		this.steamID = steamID;
		this.emit('error', e);
		this.steamID = null;
	} else {
		// Only emit "disconnected" if we were previously logged on
		if (this.steamID) {
			this.emit('disconnected', result, msg);
		}

		this._disconnect(true);

		// if we're manually relogging, or we got disconnected because steam went down, enqueue a reconnect
		if (!this._loggingOff || this._relogging) {
			setTimeout(() => {
				this.logOn(true);
			}, 1000);
		}

		this._loggingOff = false;
		this._relogging = false;
		this.steamID = null;
	}
};

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientNewLoginKey, function(body) {
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
});

SteamUser.prototype._steamGuardPrompt = function(domain, lastCodeWrong, callback) {
	if (this.listenerCount('steamGuard') == 0) {
		// No steamGuard listeners, so prompt for one from stdin

		let rl = require('readline').createInterface({
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

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientCMList, function(body) {
	this.emit('debug', "Got list of " + (body.cm_websocket_addresses || []).length + " WebSocket CMs, with percentage to use at " +
		(body.percent_default_to_websocket || 0) + "%");

	this._cmList = {
		"tcp_servers": (body.cm_addresses || []).map((addr, idx) => StdLib.IPv4.intToString(addr) + ':' + body.cm_ports[idx]),
		"websocket_servers": body.cm_websocket_addresses || [],
		"auto_pct_websocket": body.percent_default_to_websocket,
		"time": Date.now()
	};

	this._saveCMList();
});

// Private functions

function createMachineID(val_bb3, val_ff2, val_3b3) {
	// Machine IDs are binary KV objects with root key MessageObject and three hashes named BB3, FF2, and 3B3.
	// I don't feel like writing a proper BinaryKV serializer, so this will work fine.

	let buffer = ByteBuffer.allocate(155, ByteBuffer.LITTLE_ENDIAN);
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
		let hash = Crypto.createHash('sha1');
		hash.update(input, 'utf8');
		return hash.digest('hex');
	}
}
