var Steam = require('steam-client');
var AppDirectory = require('appdirectory');
var FileStorage = require('file-manager');

require('util').inherits(SteamUser, require('events').EventEmitter);

module.exports = SteamUser;

SteamUser.Steam = Steam;
SteamUser.ECurrencyCode = require('./resources/ECurrencyCode.js');
SteamUser.CurrencyData = require('./resources/CurrencyData.js');
SteamUser.EMachineIDType = require('./resources/EMachineIDType.js');
SteamUser.EPurchaseResult = require('./resources/EPurchaseResult.js');

try {
	SteamUser.Steam.servers = require('./resources/servers.json');
} catch(e) {
	// It's okay if it isn't there
}

function SteamUser(client, options) {
	if(client && client.constructor.name !== 'SteamClient' && client.constructor.name !== 'CMClient') {
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

	// Friends and users info
	this.users = {};
	this.groups = {};
	this.chats = {};
	this.myFriends = {};
	this.myGroups = {};
	this.myFriendGroups = {};

	// App and package cache
	this._changelistUpdateTimer = null;
	this.picsCache = {
		"changenumber": 0,
		"apps": {},
		"packages": {}
	};

	this._sentry = null;

	var appdir = new AppDirectory({
		"appName": "node-steamuser",
		"appAuthor": "doctormckay"
	});

	this.options = options || {};

	var defaultOptions = {
		"dataDirectory": process.env.OPENSHIFT_DATA_DIR ? process.env.OPENSHIFT_DATA_DIR + "/node-steamuser" : appdir.userData(),
		"autoRelogin": true,
		"singleSentryfile": false,
		"promptSteamGuardCode": true,
		"machineIdType": SteamUser.EMachineIDType.AccountNameGenerated,
		"machineIdFormat": ["SteamUser Hash BB3 {account_name}", "SteamUser Hash FF2 {account_name}", "SteamUser Hash 3B3 {account_name}"],
		"enablePicsCache": false,
		"picsCacheAll": false,
		"changelistUpdateInterval": 60000,
		"debug": false
	};

	for(var i in defaultOptions) {
		if(!defaultOptions.hasOwnProperty(i)) {
			continue;
		}

		if(typeof this.options[i] === 'undefined') {
			this.options[i] = defaultOptions[i];
		}
	}

	this.storage = new FileStorage(this.options.dataDirectory);

	this.client.on('message', this._handleMessage.bind(this));

	var self = this;
	this.client.on('error', function(e) {
		if(!self.steamID) {
			return; // We've already handled this
		}

		self._handleLogOff(e.eresult || 0, e.message);
	});

	this.client.on('servers', function(servers) {
		self.storage.writeFile('servers.json', JSON.stringify(servers, null, "\t"));
		if(!client) {
			// It's an internal client, so we know that our Steam has an up-to-date server list
			Steam['__SteamUserServersSet__'] = true;
		}
	});
}

SteamUser.prototype.setOption = function(option, value) {
	this.options[option] = value;

	// Handle anything that needs to happen when particular options update
	switch(option) {
		case 'dataDirectory':
			this.storage.directory = value;
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
	for(var i in options) {
		if(!options.hasOwnProperty(i)) {
			continue;
		}

		this.setOption(i, options[i]);
	}
};

require('./components/messages.js');
require('./components/logon.js');
require('./components/sentry.js');
require('./components/web.js');
require('./components/notifications.js');
require('./components/apps.js');
require('./components/account.js');
require('./components/gameservers.js');
require('./components/utility.js');
require('./components/trading.js');
require('./components/friends.js');
require('./components/chat.js');
require('./components/twofactor.js');

/**
 * Called when the request completes.
 * @callback SteamUser~genericEResultCallback
 * @param {EResult} eresult - The result of the operation
 */
