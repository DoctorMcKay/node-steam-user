require('@doctormckay/stats-reporter').setup(require('./package.json'));

const AppDirectory = require('appdirectory');
const FileStorage = require('file-manager');

const HandlerManager = require('./components/classes/HandlerManager.js');
const SteamChatRoomClient = require('./components/chatroom.js');

require('util').inherits(SteamUser, require('events').EventEmitter);

module.exports = SteamUser;

SteamUser.CurrencyData = require('./resources/CurrencyData.js');
SteamUser.EClientUIMode = require('./resources/EClientUIMode.js');
SteamUser.EConnectionProtocol = require('./resources/EConnectionProtocol.js');
SteamUser.EMachineIDType = require('./resources/EMachineIDType.js');
SteamUser.EPurchaseResult = require('./resources/EPurchaseResult.js');

require('./resources/enums.js');

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

	let defaultOptions = {
		"protocol": SteamUser.EConnectionProtocol.Auto,
		"httpProxy": null,
		"localAddress": null,
		"localPort": null,
		"autoRelogin": true,
		"singleSentryfile": false,
		"machineIdType": SteamUser.EMachineIDType.AccountNameGenerated,
		"machineIdFormat": ["SteamUser Hash BB3 {account_name}", "SteamUser Hash FF2 {account_name}", "SteamUser Hash 3B3 {account_name}"],
		"enablePicsCache": false,
		"picsCacheAll": false,
		"changelistUpdateInterval": 60000,
		"saveAppTickets": true,
		"additionalHeaders": {},
		"language": "english"
	};

	for (let i in defaultOptions) {
		if (!defaultOptions.hasOwnProperty(i)) {
			continue;
		}

		if (typeof this.options[i] === 'undefined') {
			this.options[i] = defaultOptions[i];
		}
	}

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
		this.storage = new FileStorage(this.options.dataDirectory);
	}
}

SteamUser.prototype.packageName = require('./package.json').name;
SteamUser.prototype.packageVersion = require('./package.json').version;

SteamUser.prototype.setOption = function(option, value) {
	this.options[option] = value;

	// Handle anything that needs to happen when particular options update
	switch (option) {
		case 'dataDirectory':
			if (!this.storage) {
				this.storage = new FileStorage(value);
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
	}
};

SteamUser.prototype.setOptions = function(options) {
	for (let i in options) {
		if (!options.hasOwnProperty(i)) {
			continue;
		}

		this.setOption(i, options[i]);
	}
};

SteamUser.prototype._handlers = {};
SteamUser.prototype._handlerManager = new HandlerManager();

require('./components/connection.js');
require('./components/messages.js');
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
