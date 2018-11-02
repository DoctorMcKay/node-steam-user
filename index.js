require('@doctormckay/stats-reporter').setup(require('./package.json'));

var Steam = require('steam-client');
var AppDirectory = require('appdirectory');
var FileStorage = require('file-manager');

require('util').inherits(SteamUser, require('events').EventEmitter);

module.exports = SteamUser;

SteamUser.Steam = Steam;
SteamUser.CurrencyData = require('./resources/CurrencyData.js');
SteamUser.EMachineIDType = require('./resources/EMachineIDType.js');
SteamUser.EPurchaseResult = require('./resources/EPurchaseResult.js');
SteamUser.EClientUIMode = require('./resources/EClientUIMode.js');

require('./resources/enums.js');

try {
	SteamUser.Steam.servers = require('./resources/servers.json');
} catch (e) {
	// It's okay if it isn't there
}

function SteamUser(client, options) {
	if (client && client.constructor.name !== 'SteamClient' && client.constructor.name !== 'CMClient') {
		options = client;
		client = null;
	}

	this.client = client ? client : new Steam.CMClient();
	this.steamID = null;

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

	this._gcTokens = []; // game connect tokens
	this._connectTime = 0;
	this._connectionCount = 0;
	this._authSeqMe = 0;
	this._authSeqThem = 0;
	this._hSteamPipe = Math.floor(Math.random() * 1000000) + 1;
	this._contentServers = [];
	this._contentServerTokens = {};
	this._lastNotificationCounts = {};

	// App and package cache
	this._changelistUpdateTimer = null;
	this.picsCache = {
		"changenumber": 0,
		"apps": {},
		"packages": {}
	};

	this._sentry = null;

	this.options = options || {};

	var defaultOptions = {
		"autoRelogin": true,
		"singleSentryfile": false,
		"promptSteamGuardCode": true,
		"machineIdType": SteamUser.EMachineIDType.AccountNameGenerated,
		"machineIdFormat": ["SteamUser Hash BB3 {account_name}", "SteamUser Hash FF2 {account_name}", "SteamUser Hash 3B3 {account_name}"],
		"enablePicsCache": false,
		"picsCacheAll": false,
		"changelistUpdateInterval": 60000,
		"saveAppTickets": true,
		"debug": false,
		"additionalHeaders": {},
	};

	for (var i in defaultOptions) {
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

	this.client.on('message', this._handleMessage.bind(this));

	var self = this;
	this.client.on('error', function(e) {
		if (!self.steamID && e.eresult != SteamUser.EResult.ConnectFailed) {
			return; // We've already handled this
		}

		self._handleLogOff(e.eresult || SteamUser.EResult.NoConnection, e.message || "NoConnection");
	});

	this.client.on('servers', function(servers) {
		if (self.storage) {
			self.storage.writeFile('servers.json', JSON.stringify(servers, null, "\t"));
		}

		if (!client) {
			// It's an internal client, so we know that our Steam has an up-to-date server list
			Steam['__SteamUserServersSet__'] = true;
		}
	});
}

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
	for (var i in options) {
		if (!options.hasOwnProperty(i)) {
			continue;
		}

		this.setOption(i, options[i]);
	}
};

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

/**
 * Called when the request completes.
 * @callback SteamUser~genericEResultCallback
 * @param {EResult} eresult - The result of the operation
 */
