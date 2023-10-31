const ByteBuffer = require('bytebuffer');
const Crypto = require('crypto');
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');
const Schema = require('../protobufs/generated/_load.js');
const TCPConnection = require('./connection_protocols/tcp.js');
const WebSocketConnection = require('./connection_protocols/websocket.js');

const EConnectionProtocol = require('../resources/EConnectionProtocol.js');
const EMachineIDType = require('../resources/EMachineIDType.js');
const EMsg = require('../enums/EMsg.js');
const EResult = require('../enums/EResult.js');

const {EAuthSessionGuardType} = require('steam-session');

const SteamUserBase = require('./00-base.js');
const SteamUserMachineAuth = require('./08-machineauth.js');

const PROTOCOL_VERSION = 65580;
const PRIVATE_IP_OBFUSCATION_MASK = 0xbaadf00d;

/**
 * @typedef LogOnDetails
 * @property {boolean} [anonymous=false]
 * @property {string} [refreshToken]
 * @property {string} [accountName]
 * @property {string} [password]
 * @property {string} [machineAuthToken]
 * @property {string} [webLogonToken]
 * @property {string|SteamID} [steamID]
 * @property {String} [authCode]
 * @property {string} [twoFactorCode]
 * @property {number} [logonID]
 * @property {string} [machineName]
 * @property {number} [clientOS]
 */

class SteamUserLogon extends SteamUserMachineAuth {
	/**
	 * @param {LogOnDetails} details
	 */
	logOn(details) {
		// Delay the actual logon by one tick, so if users call logOn from the error event they won't get a crash because
		// they appear to be already logged on (the steamID property is set to null only *after* the error event is emitted)
		process.nextTick(async () => {
			if (this.steamID) {
				throw new Error('Already logged on, cannot log on again');
			}

			this.steamID = null;
			this._initProperties();

			this._loggingOff = false;

			if (details !== true) {
				// We're not logging on with saved details
				details = details || {};

				let logonId = details.logonID;
				if (logonId) {
					let maxUint32 = Math.pow(2, 32) - 1;
					if (typeof logonId == 'string' && logonId.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)) {
						logonId = StdLib.IPv4.stringToInt(logonId) ^ PRIVATE_IP_OBFUSCATION_MASK;
					} else if (typeof logonId == 'number' && logonId > maxUint32) {
						this._warn(`logonID ${details.logonID} is greater than ${maxUint32} and has been truncated.`);
						logonId = maxUint32;
					}
				}

				let anonLogin = !details.accountName && !details.refreshToken;

				this._logOnDetails = {
					account_name: details.accountName,
					password: details.password,
					auth_code: details.authCode,
					two_factor_code: details.twoFactorCode,
					should_remember_password: !!details.refreshToken,
					obfuscated_private_ip: {v4: logonId || 0},
					protocol_version: PROTOCOL_VERSION,
					supports_rate_limit_response: !anonLogin,
					machine_name: !anonLogin ? (details.machineName || '') : '',
					ping_ms_from_cell_search: !anonLogin ? 4 + Math.floor(Math.random() * 30) : 0, // fake ping value
					client_language: !anonLogin ? 'english' : '',
					client_os_type: Number.isInteger(details.clientOS) ? details.clientOS : Helpers.getOsType(),
					anon_user_target_account_name: !anonLogin ? undefined : 'anonymous',
					ui_mode: undefined,
					chat_mode: 2, // enable new chat
					web_logon_nonce: details.webLogonToken && details.steamID ? details.webLogonToken : undefined,
					_steamid: details.steamID,
					_machineAuthToken: details.machineAuthToken
				};
			}

			if (this._logOnDetails.web_logon_nonce) {
				this._logOnDetails.client_os_type = 4294966596;
				this._logOnDetails.ui_mode = 4;
				delete this._logOnDetails.obfuscated_private_ip;
				delete this._logOnDetails.cell_id;
				delete this._logOnDetails.client_language;
				delete this._logOnDetails.should_remember_password;
				delete this._logOnDetails.ping_ms_from_cell_search;
				delete this._logOnDetails.machine_id;
				delete this._logOnDetails.password;
				delete this._logOnDetails.auth_code;
				delete this._logOnDetails.machine_name;
				delete this._logOnDetails.machine_name_userchosen;
				delete this._logOnDetails.two_factor_code;
				delete this._logOnDetails.supports_rate_limit_response;
			}

			if (details.refreshToken) {
				// If logging in with a refresh token, we need to make sure that no conflicting properties are set
				let disallowedProps = [
					'account_name',
					'password',
					'auth_code',
					'two_factor_code'
				];

				disallowedProps.forEach((prop) => {
					if (this._logOnDetails[prop]) {
						throw new Error(`Cannot specify ${prop} when logging in with a refresh token`);
					}
				});

				// A SteamID doesn't need to be provided since we can extract it from the JWT, but if one was provided,
				// make sure it matches the JWT.

				let decodedToken = Helpers.decodeJwt(details.refreshToken);
				let tokenSteamId = Helpers.steamID(decodedToken.sub);
				if (this._logOnDetails._steamid) {
					let providedSteamId = Helpers.steamID(this._logOnDetails._steamid);
					if (providedSteamId.getSteam3RenderedID() != tokenSteamId.getSteam3RenderedID()) {
						throw new Error(`Specified SteamID (${providedSteamId}) does not match refreshToken (${tokenSteamId})`);
					}
				}

				if (decodedToken.iss != 'steam') {
					// Only refresh tokens have iss=steam, and only refresh tokens are accepted by the CM
					let err = new Error('refreshToken is not a Steam refresh token');
					err.tokenIssuer = decodedToken.iss;
					throw err;
				}

				// Make sure this token has the correct audience
				if (!(decodedToken.aud || []).includes('client')) {
					let err = new Error('This refreshToken is not valid for logging in to the Steam client');
					err.tokenAudiences = decodedToken.aud || [];
					throw err;
				}

				this._logOnDetails._steamid = tokenSteamId;
				this._logOnDetails.access_token = details.refreshToken;

				this.emit('debug', `Provided refresh token has sub ${decodedToken.sub}, aud ${(decodedToken.aud || []).join(',')}`);

				// After we log on, we should attempt to renew this refresh token if requested
				if (this.options.renewRefreshTokens) {
					this._shouldAttemptRefreshTokenRenewal = true;
				}
			}

			let anonLogin = !this._logOnDetails.account_name && !this._logOnDetails.access_token;
			let explicitlyRequestedAnonLogin = details !== true && details.anonymous;
			if (explicitlyRequestedAnonLogin && !anonLogin) {
				this._warn('Anonymous logon was requested but account details were specified; logging into specified individual user account');
			}

			// Read the required files
			let filenames = [];

			if (!this._logOnDetails.cell_id) {
				// Some people might be redirecting their storage to a database and running across multiple servers in multiple regions
				// Let's account for this by saving cellid by a "machine ID" so different boxes will store different cellids
				filenames.push('cellid-' + Helpers.getInternalMachineID() + '.txt');
			}

			let machineID;

			if (!anonLogin) {
				if (!this._logOnDetails.machine_id && this.options.machineIdType == EMachineIDType.PersistentRandom) {
					filenames.push('machineid.bin');
				}
			}

			let files = await this._readFiles(filenames);

			files.forEach((file) => {
				if (file.filename.match(/^cellid/) && file.contents) {
					let cellID = parseInt(file.contents.toString('utf8'), 10);
					if (!isNaN(cellID)) {
						this._logOnDetails.cell_id = cellID;
					}
				}

				if (file.filename == 'machineid.bin' && file.contents) {
					machineID = file.contents;
				}
			});

			// Machine auth token (only necessary if logging on with account name and password)
			if (!anonLogin && !this._machineAuthToken && this._logOnDetails.account_name) {
				let tokenContent = this._logOnDetails._machineAuthToken || await this._readFile(this._getMachineAuthFilename());
				if (tokenContent) {
					this._machineAuthToken = tokenContent.toString('utf8').trim();
				}
			}

			delete this._logOnDetails._machineAuthToken;

			// Machine ID
			if (!anonLogin && !this._logOnDetails.machine_id) {
				this._logOnDetails.machine_id = this._getMachineID(machineID);
			}

			// Do the login
			if (this._logOnDetails._steamid) {
				this._tempSteamID = Helpers.steamID(this._logOnDetails._steamid);
			} else {
				let sid = new SteamID();
				sid.universe = SteamID.Universe.PUBLIC;
				sid.type = anonLogin ? SteamID.Type.ANON_USER : SteamID.Type.INDIVIDUAL;
				sid.instance = anonLogin ? SteamID.Instance.ALL : SteamID.Instance.DESKTOP;
				sid.accountid = 0;
				this._tempSteamID = sid;
			}

			if (anonLogin) {
				if (this._logOnDetails.password) {
					this._warn('Logging into anonymous Steam account but a password was specified... did you specify your accountName improperly?');
				} else if (details !== true && !explicitlyRequestedAnonLogin) {
					this._warn('Logging into anonymous Steam account. If you didn\'t expect this warning, make sure that you\'re properly passing your log on details to the logOn() method. To suppress this warning, pass {anonymous: true} to logOn().');
				}
			}

			this._doConnection();
		});
	}

	/**
	 * @private
	 */
	async _doConnection() {
		let thisProtocol = this.options.protocol;

		if (this.options.webCompatibilityMode) {
			if (thisProtocol == EConnectionProtocol.TCP) {
				this._warn('Forcing protocol to EConnectionProtocol.WebSocket because webCompatibilityMode is enabled');
			}

			this.emit('debug', 'Forcing protocol to EConnectionProtocol.WebSocket because webCompatibilityMode is enabled');
			thisProtocol = EConnectionProtocol.WebSocket;
		}

		if (this.options.socksProxy) {
			if (thisProtocol == EConnectionProtocol.TCP) {
				this._warn('Forcing protocol to EConnectionProtocol.WebSocket because a socksProxy is specified and SOCKS proxy support is incompatible with TCP');
			}

			this.emit('debug', 'Forcing protocol to EConnectionProtocol.WebSocket because a socksProxy is specified and SOCKS proxy support is incompatible with TCP');
			thisProtocol = EConnectionProtocol.WebSocket;
		}

		let getCmListQueryString = {
			format: 'vdf',
			cellid: '0'
		};

		if (this._logOnDetails.cell_id) {
			getCmListQueryString.cellid = this._logOnDetails.cell_id;
		}

		switch (thisProtocol) {
			case EConnectionProtocol.TCP:
				getCmListQueryString.cmtype = 'netfilter';
				break;

			case EConnectionProtocol.WebSocket:
				getCmListQueryString.cmtype = 'websockets';
				break;
		}

		let cmListResponse;
		try {
			cmListResponse = await this._apiRequest(
				'GET',
				'ISteamDirectory',
				'GetCMListForConnect',
				1,
				getCmListQueryString,
				300
			);
		} catch (ex) {
			this.emit('debug', `GetCMListForConnect error: ${ex.message}`);

			if (++this._getCmListAttempts >= 10) {
				this.emit('error', ex);
			} else {
				setTimeout(() => this._doConnection());
			}

			return;
		}

		if (!cmListResponse.response || !cmListResponse.response.serverlist || Object.keys(cmListResponse.response.serverlist).length == 0) {
			this.emit('error', new Error('No Steam servers available'));
			return;
		}

		let serverList = JSON.parse(JSON.stringify(cmListResponse.response.serverlist));
		serverList.length = Object.keys(serverList).length;

		serverList = Array.prototype.slice.call(serverList, 0)
			.filter(s => s.realm == 'steamglobal')
			.filter(s => ['netfilter', 'websockets'].includes(s.type));

		// Disqualify any CMs that we've blacklisted
		let dqServerList = serverList.filter(s => !this._ttlCache.get(`CM_DQ_${s.type}_${s.endpoint}`));
		if (dqServerList.length == 0) {
			// We've disqualified all potential servers. Reset our blacklist.
			let dqKeys = this._ttlCache.getKeys().filter(k => k.startsWith('CM_DQ_'));
			dqKeys.forEach(key => this._ttlCache.delete(key));
		} else {
			serverList = dqServerList;
		}

		serverList.sort((a, b) => a.wtd_load - b.wtd_load);

		// We now have a server list that's sorted by weighted load. Pick a random one from the first 5 options.
		serverList = serverList.slice(0, 5);
		let rand = Math.floor(Math.random() * serverList.length);
		let chosenServer = serverList[rand];
		this.emit('debug', `Randomly chose ${chosenServer.type} server ${chosenServer.endpoint} (load = ${chosenServer.load}, wtd_load = ${chosenServer.wtd_load})`);

		this._lastChosenCM = chosenServer;

		switch (chosenServer.type) {
			case 'netfilter':
				this._connection = new TCPConnection(this, chosenServer);
				break;

			case 'websockets':
				this._connection = new WebSocketConnection(this, chosenServer);
				break;

			default:
				throw new Error(`Unknown server type ${chosenServer.type}`);
		}
	}

	/**
	 * Send the actual ClientLogOn message.
	 * @private
	 */
	async _sendLogOn() {
		if (this._logOnDetails.account_name && this._logOnDetails.password) {
			this.emit('debug', 'Logging on with account name and password; fetching a new refresh token');
			let startTime = Date.now();
			let authSuccess = await this._performPasswordAuth();
			if (!authSuccess) {
				// We would have already emitted 'error' so let's just bail now
				return;
			} else {
				this.emit('debug', `Password auth succeeded in ${Date.now() - startTime} ms`);
			}
		}

		// Realistically, this should never need to elapse since at this point we have already established a successful connection
		// with the CM. But sometimes, Steam appears to never respond to the logon message. Valve.
		this._logonMsgTimeout = setTimeout(() => {
			this.emit('debug', 'Logon message timeout elapsed. Attempting relog.');
			this._disconnect(true);
			this._enqueueLogonAttempt();
		}, 5000);

		this._send(this._logOnDetails.game_server_token ? EMsg.ClientLogonGameServer : EMsg.ClientLogon, this._logOnDetails);
	}

	_performPasswordAuth() {
		return new Promise(async (resolve) => {
			this._send(EMsg.ClientHello, {protocol_version: PROTOCOL_VERSION});

			let session = this._getLoginSession();

			session.on('debug', (...args) => {
				this.emit('debug', '[steam-session] ' + args.map(arg => typeof arg == 'object' ? JSON.stringify(arg) : arg).join(' '));
			});

			session.on('authenticated', () => {
				this.emit('refreshToken', session.refreshToken);

				this._logOnDetails.access_token = session.refreshToken;
				this._logOnDetails.should_remember_password = true;
				this._logOnDetails._newAuthAccountName = this._logOnDetails.account_name;
				this._logOnDetails._steamid = session.steamID;
				delete this._logOnDetails.account_name;
				delete this._logOnDetails.password;
				delete this._logOnDetails.auth_code;
				delete this._logOnDetails.two_factor_code;
				this._tempSteamID = session.steamID;
				resolve(true);
			});

			session.on('error', async (err) => {
				// LoginSession only emits an `error` event if there's some problem with the actual interface used to
				// communicate with Steam. Errors for invalid credentials are handled elsewhere, so we only need to
				// emit ServiceUnavailable here since this should be a transient error.

				this.emit('debug', `steam-session error: ${err.message}`);
				await this._handleLogOnResponse({eresult: EResult.ServiceUnavailable});
				resolve(false);
			});

			session.on('timeout', async () => {
				this.emit('debug', 'steam-session timeout');
				await this._handleLogOnResponse({eresult: EResult.ServiceUnavailable});
				resolve(false);
			});

			session.on('steamGuardMachineToken', () => {
				this._handleNewMachineToken(session.steamGuardMachineToken);
			});

			let sessionStartResult = null;

			try {
				sessionStartResult = await session.startWithCredentials({
					accountName: this._logOnDetails.account_name,
					password: this._logOnDetails.password,
					steamGuardMachineToken: this._machineAuthToken,
					steamGuardCode: this._logOnDetails.two_factor_code || this._logOnDetails.auth_code
				});
			} catch (ex) {
				// I don't honestly think calling cancelLoginAttempt is ever necessary here, but there's no harm in doing it
				session.cancelLoginAttempt();

				this.emit('debug', 'steam-session startWithCredentials exception', ex);

				await this._handleLogOnResponse({eresult: ex.eresult || EResult.ServiceUnavailable});
				return resolve(false);
			}

			if (sessionStartResult.actionRequired) {
				// We need a code of some kind. Technically we could just wait for a device approval, but in the majority
				// of consumer use-cases, the app seemingly hanging while waiting for this isn't desirable.
				session.cancelLoginAttempt();

				// We need to synthesize a LogOnResponse eresult
				let logOnResponse = {};

				let wantsEmailCode = sessionStartResult.validActions.find(action => action.type == EAuthSessionGuardType.EmailCode);
				if (wantsEmailCode) {
					logOnResponse.eresult = EResult.AccountLogonDenied;
					logOnResponse.email_domain = wantsEmailCode.detail;
				} else {
					logOnResponse.eresult = this._logOnDetails.two_factor_code ? EResult.TwoFactorCodeMismatch : EResult.AccountLoginDeniedNeedTwoFactor;
				}

				await this._handleLogOnResponse(logOnResponse);
			}
		});
	}

	/**
	 * Enqueue another logon attempt.
	 * Used after we get ServiceUnavailable, TryAnotherCM, or a timeout waiting for ClientLogOnResponse.
	 * @private
	 */
	_enqueueLogonAttempt() {
		let timer = this._logonTimeoutDuration || 1000;
		this._logonTimeoutDuration = Math.min(timer * 2, 60000); // exponential backoff, max 1 minute
		this._logonTimeout = setTimeout(() => {
			this.logOn(true);
		}, timer);
	}

	/**
	 * Log off of Steam gracefully.
	 */
	logOff() {
		this._disconnect(false);
	}

	/**
	 * Disconnect from Steam
	 * @param {boolean} suppressLogoff - If true, just disconnect immediately without sending a logoff message.
	 * @private
	 */
	_disconnect(suppressLogoff) {
		this._clearChangelistUpdateTimer();
		this._incomingMessageQueue = []; // clear the incoming message queue. If we're disconnecting, we don't care about anything else in the queue.

		this.emit('debug', 'Disconnecting' + (suppressLogoff ? ' without sending logoff' : ''));

		if (this.steamID && !suppressLogoff) {
			this._loggingOff = true;
			this._send(EMsg.ClientLogOff, {});

			let timeout = setTimeout(() => {
				this.emit('disconnected', 0, 'Logged off');
				this._loggingOff = false;
				this._connection && this._connection.end(true);
				this.steamID = null;
				this._cleanupClosedConnection();
			}, 4000);

			this.once('disconnected', (eresult) => {
				clearTimeout(timeout);
				this.steamID = null;
				this._cleanupClosedConnection();
			});
		} else {
			this._connection && this._connection.end(true);
			this.steamID = null;
			this._cleanupClosedConnection();
		}
	}

	/**
	 * @param {Buffer} [localFile]
	 * @returns {null|Buffer}
	 * @private
	 */
	_getMachineID(localFile) {
		if (
			(
				!this._logOnDetails.account_name
				&& !this._logOnDetails._steamid
			)
			|| this.options.machineIdType == EMachineIDType.None
		) {
			// No machine IDs for anonymous logons
			return null;
		}

		// The user wants to use a random machine ID that's saved to dataDirectory
		if (this.options.machineIdType == EMachineIDType.PersistentRandom) {
			if (localFile) {
				return localFile;
			}

			let file = getRandomID();
			this._saveFile('machineid.bin', file);

			return file;
		}

		// The user wants to use a machine ID that's generated off the account name
		if (this.options.machineIdType == EMachineIDType.AccountNameGenerated) {
			return createMachineID(
				this.options.machineIdFormat[0].replace(/\{account_name\}/g, this._getAccountIdentifier()),
				this.options.machineIdFormat[1].replace(/\{account_name\}/g, this._getAccountIdentifier()),
				this.options.machineIdFormat[2].replace(/\{account_name\}/g, this._getAccountIdentifier())
			);
		}

		// Default to random
		return getRandomID();

		function getRandomID() {
			return createMachineID(Math.random().toString(), Math.random().toString(), Math.random().toString());
		}
	}

	_getAccountIdentifier() {
		return this._logOnDetails.account_name
			|| this._logOnDetails._newAuthAccountName
			|| this._logOnDetails._steamid.toString();
	}

	relog() {
		if (!this.steamID) {
			throw new Error('Cannot relog if not already connected');
		}

		let relogAvailable = (
			this.steamID.type == SteamID.Type.ANON_USER
			|| (
				this.steamID.type == SteamID.Type.INDIVIDUAL
				&& this._logOnDetails
				&& this._logOnDetails.access_token
			)
		);

		if (!relogAvailable) {
			throw new Error('To use relog(), you must log on using a refresh token or using your account name and password');
		}

		this._relogging = true;
		this.logOff();
	}

	/**
	 * @param {number} result
	 * @param {string} msg
	 * @private
	 */
	_handleLogOff(result, msg) {
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
		this.contentServersReady = false;

		this._initProperties();

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
				this._logonTimeout = setTimeout(() => {
					this.logOn(true);
				}, 1000);
			}

			this._loggingOff = false;
			this._relogging = false;
			this.steamID = null;
		}
	}

	/**
	 * @param {string} domain
	 * @param {boolean} lastCodeWrong
	 * @param {function} callback
	 * @private
	 */
	_steamGuardPrompt(domain, lastCodeWrong, callback) {
		if (this.listenerCount('steamGuard') == 0) {
			// No steamGuard listeners, so prompt for one from stdin

			let rl = require('readline').createInterface({
				input: process.stdin,
				output: process.stdout
			});

			rl.question('Steam Guard' + (!domain ? ' App' : '') + ' Code: ', function(code) {
				rl.close();
				callback(code);
			});
		} else {
			this.emit('steamGuard', domain, callback, lastCodeWrong);
		}
	}

	async _handleLogOnResponse(body) {
		this.emit('debug', `Handle logon response (${EResult[body.eresult]})`);

		clearTimeout(this._logonMsgTimeout);
		delete this._logonMsgTimeout;

		switch (body.eresult) {
			case EResult.OK:
				delete this._logonTimeoutDuration; // success, so reset reconnect timer

				this._logOnDetails.last_session_id = this._sessionID;
				this._logOnDetails.client_instance_id = body.client_instance_id;
				this._logOnDetails.cell_id = body.cell_id;
				delete this._logOnDetails.auth_code;
				delete this._logOnDetails.two_factor_code;
				this.logOnResult = body;

				this.publicIP = null;
				if (body.public_ip && body.public_ip.v4) {
					this.publicIP = StdLib.IPv4.intToString(body.public_ip.v4);
				}
				this.cellID = body.cell_id;
				this.vanityURL = body.vanity_url;
				this.contentServersReady = true;

				this._connectTime = Date.now();
				this._connectTimeout = 1000; // reset exponential connect backoff

				this._saveFile('cellid-' + Helpers.getInternalMachineID() + '.txt', body.cell_id);

				let parental = body.parental_settings ? SteamUserLogon._decodeProto(Schema.ParentalSettings, body.parental_settings) : null;
				if (parental && parental.salt && parental.passwordhash) {
					let sid = new SteamID();
					sid.universe = this.steamID.universe;
					sid.type = SteamID.Type.INDIVIDUAL;
					sid.instance = SteamID.Instance.DESKTOP;
					sid.accountid = parental.steamid.low;
					parental.steamid = sid;
				}

				if (!this.steamID && body.client_supplied_steamid) {
					// This should ordinarily not happen. this.steamID is supposed to be set in messages.js according to
					// the SteamID in the message header. But apparently, sometimes Steam doesn't set that SteamID
					// appropriately in the log on response message. ¯\_(ツ)_/¯
					this.steamID = new SteamID(body.client_supplied_steamid);
				}

				if (!this.steamID) {
					// This should never happen, but apparently sometimes it does
					this._disconnect(true);
					let err = new Error('BadResponse');
					err.eresult = EResult.BadResponse;
					this.emit('error', err);
					return;
				}

				this.emit('loggedOn', body, parental);
				this.emit('contentServersReady');

				this._getChangelistUpdate();

				if (this.steamID.type == SteamID.Type.INDIVIDUAL) {
					this._requestNotifications();

					if (this._logOnDetails.access_token) {
						// Even though we might have an access token available from password auth, the official client
						// doesn't actually use this access token and rather immediately refreshes it. So let's delete
						// our access token to match this behavior.
						this._getLoginSession().accessToken = null;

						if (this._shouldAttemptRefreshTokenRenewal) {
							delete this._shouldAttemptRefreshTokenRenewal;

							// Try to renew our refresh token. This will also handle the actual network request that
							// fetches our web session cookie, and our subsequent call to webLogOn() will then return
							// that cookie without making another request.
							let session = this._getLoginSession();
							session.refreshToken = this._logOnDetails.access_token;
							let renewed = await session.renewRefreshToken();
							this.emit('debug', `Attempted to renew refresh token, success = ${renewed}`);
							if (renewed) {
								this._logOnDetails.access_token = session.refreshToken;
								this.emit('refreshToken', session.refreshToken);
							}
						}

						// The new way of getting web cookies is to use a refresh token to get a fresh access token, which
						// is what's used as the cookie. Confusingly, access_token in CMsgClientLogOn is actually a refresh token.
						this.webLogOn();
					}
				} else if (this.steamID.type == SteamID.Type.ANON_USER) {
					this._getLicenseInfo();
				}

				this._heartbeatInterval = setInterval(() => {
					this._send(EMsg.ClientHeartBeat, {});
				}, body.heartbeat_seconds * 1000);

				break;

			case EResult.AccountLogonDenied:
			case EResult.AccountLoginDeniedNeedTwoFactor:
			case EResult.TwoFactorCodeMismatch:
				// server is up, so reset logon timer
				delete this._logonTimeoutDuration;

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
				this._enqueueLogonAttempt();
				break;

			default:
				// server is up, so reset logon timer
				delete this._logonTimeoutDuration;

				let error = new Error(EResult[body.eresult] || body.eresult);
				error.eresult = body.eresult;
				this._disconnect(true);
				this.emit('error', error);
		}
	}
}

// Handlers

SteamUserBase.prototype._handlerManager.add(EMsg.ClientLogOnResponse, function(body) {
	this._handleLogOnResponse(body);
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientLoggedOff, function(body) {
	let msg = body.eresult;
	for (let i in EResult) {
		if (Object.hasOwnProperty.call(EResult, i) && EResult[i] == body.eresult) {
			msg = i;
			break;
		}
	}

	this.emit('debug', 'Logged off: ' + msg);
	this._handleLogOff(body.eresult, msg);
});

// Private functions

function createMachineID(val_bb3, val_ff2, val_3b3) {
	// Machine IDs are binary KV objects with root key MessageObject and three hashes named BB3, FF2, and 3B3.
	// I don't feel like writing a proper BinaryKV serializer, so this will work fine.

	let buffer = ByteBuffer.allocate(155, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeByte(0); // 1 byte, total 1
	buffer.writeCString('MessageObject'); // 14 bytes, total 15

	buffer.writeByte(1); // 1 byte, total 16
	buffer.writeCString('BB3'); // 4 bytes, total 20
	buffer.writeCString(sha1(val_bb3)); // 41 bytes, total 61

	buffer.writeByte(1); // 1 byte, total 62
	buffer.writeCString('FF2'); // 4 bytes, total 66
	buffer.writeCString(sha1(val_ff2)); // 41 bytes, total 107

	buffer.writeByte(1); // 1 byte, total 108
	buffer.writeCString('3B3'); // 4 bytes, total 112
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

module.exports = SteamUserLogon;
