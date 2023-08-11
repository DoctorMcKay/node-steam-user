const FileManager = require('file-manager');
const StdLib = require('@doctormckay/stdlib');

const SteamChatRoomClient = require('./components/chatroom.js');

const DefaultOptions = require('./resources/default_options.js');
const Package = require('./package.json');

const SteamUserTwoFactor = require('./components/twofactor.js');
const SteamUserBase = require('./components/00-base.js');

/**
 * @class SteamUser
 * @extends EventEmitter
 * @property {SteamID|null} steamID
 * @property {SteamChatRoomClient} chat
 * @property {OptionsObject} options
 * @property {string|null} publicIP
 * @property {number|null} cellID
 * @property {string|null} vanityURL
 * @property {{name: string, country: string, authedMachines: number, flags: number, facebookID?: string, facebookName?: string}|null} accountInfo
 * @property {{address: string, validated: boolean}|null} emailInfo
 * @property {{limited: boolean, communityBanned: boolean, locked: boolean, canInviteFriends: boolean}|null} limitations
 * @property {{numBans: number, appids: number[]}|null} vac
 * @property {{hasWallet: boolean, currency: ECurrencyCode, balance: number}|null} wallet
 * @property {Proto_CMsgClientLicenseList_License[]|null} licenses
 * @property {{gid: string, packageid: string, TimeCreated: Date, TimeExpiration: Date, TimeSent: Date, TimeAcked: Date, TimeRedeemed: Date|null, RecipientAddress: string, SenderAddress: string, SenderName: string}[]|null} gifts
 * @property {Object<string, UserPersona>} users
 * @property {Object<string, GroupPersona>} groups
 * @property {Object<string, EFriendRelationship>|null} myFriends
 * @property {Object<string, EClanRelationship>|null} myGroups
 * @property {Object<string, {name: string, members: SteamID[]}>|null} myFriendGroups
 * @property {Object<string, string>|null} myNicknames
 * @property {{changenumber: number, apps: object, packages: object}} picsCache
 */
class SteamUser extends SteamUserTwoFactor {
	/**
	 * @param {OptionsObject} [options={}]
	 */
	constructor(options) {
		super();

		this.steamID = null;

		this.chat = new SteamChatRoomClient(this);

		this._initProperties();
		this._connectTimeout = 1000;
		this._initialized = false;
		this._multiCount = 0;

		// App and package cache
		this._changelistUpdateTimer = null;
		this.picsCache = {
			changenumber: 0,
			apps: {},
			packages: {}
		};

		this.options = {};

		for (let i in (options || {})) {
			this._setOption(i, options[i]);
		}

		for (let i in DefaultOptions) {
			if (typeof this.options[i] === 'undefined') {
				this._setOption(i, DefaultOptions[i]);
			}
		}

		this._checkOptionTypes();

		if (!this.options.dataDirectory && this.options.dataDirectory !== null) {
			if (process.env.OPENSHIFT_DATA_DIR) {
				this.options.dataDirectory = process.env.OPENSHIFT_DATA_DIR + '/node-steamuser';
			} else {
				this.options.dataDirectory = StdLib.OS.appDataDirectory({
					appName: 'node-steamuser',
					appAuthor: 'doctormckay'
				});
			}
		}

		if (this.options.dataDirectory) {
			this.storage = new FileManager(this.options.dataDirectory);
		}

		this._initialized = true;
	}

	_initProperties() {
		// Account info
		this.limitations = null;
		this.vac = null;
		this.wallet = null;
		this.emailInfo = null;
		this.licenses = null;
		this.gifts = null;

		// Friends and users info
		this.users = {};
		this.groups = {};
		this.chats = {};
		this.myFriends = {};
		this.myGroups = {};
		this.myFriendGroups = {};
		this.myNicknames = {};
		this.steamServers = {};
		this.contentServersReady = false;
		this.playingState = {blocked: false, appid: 0};
		this._playingBlocked = false;
		this._playingAppIds = [];

		this._gcTokens = []; // game connect tokens
		this._activeAuthTickets = [];
		this._connectTime = 0;
		this._connectionCount = 0;
		this._authSeqMe = 0;
		this._authSeqThem = 0;
		this._hSteamPipe = Math.floor(Math.random() * 1000000) + 1;
		this._contentServerCache = {};
		this._contentServerTokens = {};
		this._lastNotificationCounts = {};
		this._sessionID = 0;
		this._currentJobID = 0;
		this._currentGCJobID = 0;
		this._jobs = {};
		this._jobsGC = {};
		this._jobCleanupTimers = [];
		this._richPresenceLocalization = {};
		this._incomingMessageQueue = [];
		this._useMessageQueue = false; // we only use the message queue while we're processing a multi message

		delete this._machineAuthToken;
		delete this._shouldAttemptRefreshTokenRenewal;
		delete this._loginSession;
	}

	get packageName() {
		return Package.name;
	}

	get packageVersion() {
		return Package.version;
	}

	/**
	 * Set a configuration option.
	 * @param {string} option
	 * @param {*} value
	 */
	setOption(option, value) {
		this._setOption(option, value);
		this._checkOptionTypes();
	}

	/**
	 * Set one or more configuration options
	 * @param {OptionsObject} options
	 */
	setOptions(options) {
		for (let i in options) {
			this._setOption(i, options[i]);
		}

		this._checkOptionTypes();
	}

	/**
	 * Actually commit an option change. This is a separate method since user-facing methods need to be able to call
	 * _checkOptionTypes() but we also want to be able to change options internally without calling it.
	 * @param {string} option
	 * @param {*} value
	 * @private
	 */
	_setOption(option, value) {
		this.options[option] = value;

		// Handle anything that needs to happen when particular options update
		switch (option) {
			case 'dataDirectory':
				if (this._initialized) {
					if (!this.storage) {
						this.storage = new FileManager(value);
					} else {
						this.storage.directory = value;
					}
				}

				break;

			case 'enablePicsCache':
				if (this._initialized) {
					this._resetChangelistUpdateTimer();
					this._getLicenseInfo();
				}

				break;

			case 'changelistUpdateInterval':
				if (this._initialized) {
					this._resetChangelistUpdateTimer();
				}

				break;

			case 'webCompatibilityMode':
			case 'protocol':
				if (
					(option == 'webCompatibilityMode' && value && this.options.protocol == SteamUser.EConnectionProtocol.TCP) ||
					(option == 'protocol' && value == SteamUser.EConnectionProtocol.TCP && this.options.webCompatibilityMode)
				) {
					this._warn('webCompatibilityMode is enabled so connection protocol is being forced to WebSocket');
				}
				break;

			case 'httpProxy':
				if (typeof this.options.httpProxy == 'string' && !this.options.httpProxy.includes('://')) {
					this.options.httpProxy = 'http://' + this.options.httpProxy;
				}
				break;
		}
	}

	/**
	 * Make sure that the types of all options are valid.
	 * @private
	 */
	_checkOptionTypes() {
		// We'll infer types from DefaultOptions, but stuff that's null (for example) needs to be defined explicitly
		let types = {
			socksProxy: 'string',
			httpProxy: 'string',
			localAddress: 'string',
			localPort: 'number',
			machineIdFormat: 'array'
		};

		for (let opt in DefaultOptions) {
			if (types[opt]) {
				// already specified
				continue;
			}

			types[opt] = typeof DefaultOptions[opt];
		}

		for (let opt in this.options) {
			if (!types[opt]) {
				// no type specified for this option, so bail
				continue;
			}

			let requiredType = types[opt];
			let providedType = typeof this.options[opt];
			if (providedType == 'object' && Array.isArray(this.options[opt])) {
				providedType = 'array';
			} else if (requiredType == 'number' && providedType == 'string' && !isNaN(this.options[opt])) {
				providedType = 'number';
				this.options[opt] = parseFloat(this.options[opt]);
			}

			if (this.options[opt] !== null && requiredType != providedType) {
				this._warn(`Incorrect type '${providedType}' provided for option ${opt}, '${requiredType}' expected. Resetting to default value ${DefaultOptions[opt]}`);
				this._setOption(opt, DefaultOptions[opt]);
			}
		}
	}

	/**
	 * Issue a warning
	 * @param msg
	 * @private
	 */
	_warn(msg) {
		process.emitWarning(msg, 'Warning', 'steam-user');
	}
}

// Just in case any legacy code is directly accessing these (even though they shouldn't be since they're underscore-prefixed),
// let's add references to them directly to this prototype.
SteamUser.prototype._handlerManager = SteamUserBase.prototype._handlerManager;
// Also add legacy handler object for HandlerManager to look at
SteamUser.prototype._handlers = {};

// Tack on our extra enums
SteamUser.CurrencyData = require('./resources/CurrencyData.js');
SteamUser.EClientUIMode = require('./resources/EClientUIMode.js');
SteamUser.EConnectionProtocol = require('./resources/EConnectionProtocol.js');
SteamUser.EMachineIDType = require('./resources/EMachineIDType.js');
SteamUser.EPurchaseResult = require('./resources/EPurchaseResult.js');
SteamUser.EPrivacyState = require('./resources/EPrivacyState.js');

// Export the SteamUser class before we require components that demand it
module.exports = SteamUser;

/**
 * Called when the request completes.
 * @callback SteamUser~genericEResultCallback
 * @param {Error|null} err - Error object on failure (with eresult property), null on success (represents EResult 1 - OK)
 */
