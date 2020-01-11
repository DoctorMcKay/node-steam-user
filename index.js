const AppDirectory = require('appdirectory');
const FileManager = require('file-manager');

const HandlerManager = require('./components/classes/HandlerManager.js');
const SteamChatRoomClient = require('./components/chatroom.js');

require('util').inherits(SteamUser, require('events').EventEmitter);

module.exports = SteamUser;

SteamUser.CurrencyData = require('./resources/CurrencyData.js');
SteamUser.EClientUIMode = require('./resources/EClientUIMode.js');
SteamUser.EConnectionProtocol = require('./resources/EConnectionProtocol.js');
SteamUser.EMachineIDType = require('./resources/EMachineIDType.js');
SteamUser.EPurchaseResult = require('./resources/EPurchaseResult.js');
SteamUser.EPrivacyState = require('./resources/EPrivacyState.js');

require('./resources/enums.js');
const DefaultOptions = require('./resources/default_options.js');

function SteamUser(options) {
	this.steamID = null;

	this.chat = new SteamChatRoomClient(this);

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
	this.playingState = {"blocked": false, "appid": 0};
	this._playingBlocked = false;
	this._playingAppIds = [];

	this._gcTokens = []; // game connect tokens
	this._connectTime = 0;
	this._connectionCount = 0;
	this._connectTimeout = 1000;
	this._authSeqMe = 0;
	this._authSeqThem = 0;
	this._hSteamPipe = Math.floor(Math.random() * 1000000) + 1;
	this._contentServers = [];
	this._contentServersTimestamp = 0;
	this._contentServerTokens = {};
	this._lastNotificationCounts = {};
	this._sessionID = 0;
	this._jobs = {};
	this._richPresenceLocalization = {};

	// App and package cache
	this._changelistUpdateTimer = null;
	this.picsCache = {
		"changenumber": 0,
		"apps": {},
		"packages": {}
	};

	this._sentry = null;

	this.options = options || {};

	for (let i in DefaultOptions) {
		if (!DefaultOptions.hasOwnProperty(i)) {
			continue;
		}

		if (typeof this.options[i] === 'undefined') {
			this.options[i] = DefaultOptions[i];
		}
	}

	this._checkOptionTypes();

	if (!this.options.dataDirectory && this.options.dataDirectory !== null) {
		if (process.env.OPENSHIFT_DATA_DIR) {
			this.options.dataDirectory = process.env.OPENSHIFT_DATA_DIR + "/node-steamuser";
		} else {
			this.options.dataDirectory = (new AppDirectory({
				"appName": "node-steamuser",
				"appAuthor": "doctormckay"
			})).userData();
		}
	}

	if (this.options.dataDirectory) {
		this.storage = new FileManager(this.options.dataDirectory);
	}

	if (this.options.webCompatibilityMode && this.options.protocol == SteamUser.EConnectionProtocol.TCP) {
		this._warn('webCompatibilityMode is enabled so connection protocol is being forced to WebSocket.');
	}
}

SteamUser.prototype.packageName = require('./package.json').name;
SteamUser.prototype.packageVersion = require('./package.json').version;

/**
 * Set a configuration option.
 * @param {string} option
 * @param {*} value
 */
SteamUser.prototype.setOption = function(option, value) {
	this._setOption(option, value);
	this._checkOptionTypes();
};

/**
 * Set one or more configuration options
 * @param {object} options
 */
SteamUser.prototype.setOptions = function(options) {
	for (let i in options) {
		this._setOption(i, options[i]);
	}

	this._checkOptionTypes();
};

/**
 * Actually commit an option change. This is a separate method since user-facing methods need to be able to call
 * _checkOptionTypes() but we also want to be able to change options internally without calling it.
 * @param {string} option
 * @param {*} value
 * @private
 */
SteamUser.prototype._setOption = function(option, value) {
	this.options[option] = value;

	// Handle anything that needs to happen when particular options update
	switch (option) {
		case 'dataDirectory':
			if (!this.storage) {
				this.storage = new FileManager(value);
			} else {
				this.storage.directory = value;
			}

			break;

		case 'enablePicsCache':
			this._resetChangelistUpdateTimer();
			this._getLicenseInfo();
			break;

		case 'changelistUpdateInterval':
			this._resetChangelistUpdateTimer();
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
	}
};

SteamUser.prototype._checkOptionTypes = function() {
	// We'll infer types from DefaultOptions, but stuff that's null (for example) needs to be defined explicitly
	let types = {
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
};

SteamUser.prototype._warn = function(msg) {
	process.stderr.write(`[steam-user] Warning: ${msg}\n`);
};

SteamUser.prototype._handlers = {};
SteamUser.prototype._handlerManager = new HandlerManager();

require('./components/connection.js');
require('./components/messages.js');
require('./components/filestorage.js');
require('./components/webapi.js');
require('./components/logon.js');
require('./components/sentry.js');
require('./components/web.js');
require('./components/notifications.js');
require('./components/apps.js');
require('./components/appauth.js');
require('./components/account.js');
require('./components/gameservers.js');
require('./components/utility.js');
require('./components/trading.js');
require('./components/friends.js');
require('./components/chat.js');
require('./components/twofactor.js');
require('./components/pubfiles.js');
require('./components/cdn.js');
require('./components/econ.js');
require('./components/store.js');
require('./components/gamecoordinator.js');

/**
 * Called when the request completes.
 * @callback SteamUser~genericEResultCallback
 * @param {Error|null} err - Error object on failure (with eresult property), null on success (represents EResult 1 - OK)
 */
