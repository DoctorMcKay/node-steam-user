var Steam = require('steam');
var SteamID = require('steamid');
var AppDirectory = require('appdirectory');
var FileStorage = require('file-manager');
var fs = require('fs');

require('util').inherits(SteamUser, require('events').EventEmitter);

module.exports = SteamUser;

SteamUser.Steam = Steam;
SteamUser.ECurrencyCode = require('./resources/ECurrencyCode.js');
SteamUser.CurrencyData = require('./resources/CurrencyData.js');
SteamUser.EMachineIDType = require('./resources/EMachineIDType.js');

try {
	SteamUser.Steam.servers = require('./resources/servers.json');
} catch(e) {
	// It's okay if it isn't there
}

function SteamUser(client, options) {
	this.client = client ? client : new Steam.SteamClient();
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
		"createHandlers": true,
		"machineIdType": SteamUser.EMachineIDType.AccountNameGenerated,
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

	if(this.options.createHandlers) {
		this.friends = new Steam.SteamFriends(this.client);
		this.trading = new Steam.SteamTrading(this.client);
	}

	this.storage = new FileStorage(this.options.dataDirectory);

	this.client.on('message', this._handleMessage.bind(this));

	var self = this;
	this.client.on('error', function(e) {
		if(!self.steamID) {
			return; // We've already handled this
		}

		if(self.options.autoRelogin) {
			self.emit('disconnected', Steam.EResult.RemoteDisconnect);
			self.steamID = null;
			self.logOn(true);
		} else {
			e.eresult = Steam.EResult.RemoteDisconnect;
			self.emit('error', e);
			self.steamID = null;
		}
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
