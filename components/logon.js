var Steam = require('steam');
var SteamUser = require('../index.js');
var SteamID = require('steamid');

var Schema = require('./protobufs.js');

SteamUser.prototype.logOn = function(options) {
	if(this.client.connected || this.client.loggedOn) {
		throw new Error("Already connected or logged on, cannot log on again");
	}

	options = options || {};

	this._logOnDetails = {
		"account_name": options.accountName,
		"password": options.password,
		"login_key": options.loginKey,
		"should_remember_password": !!options.rememberPassword,
		"protocol_version": 65575
	};

	var sid = new SteamID();
	sid.universe = SteamID.Universe.PUBLIC;
	sid.type = options.accountName ? SteamID.Type.INDIVIDUAL : SteamID.Type.ANON_USER;
	sid.instance = options.accountName ? SteamID.Instance.DESKTOP : SteamID.Instance.ALL;
	sid.accountid = 0;
	this.client.steamID = sid.getSteamID64();

	this.client.connect();

	var self = this;
	this.client.on('connected', function() {
		self._send(Steam.EMsg.ClientLogon, self._logOnDetails);
	});
};

SteamUser.prototype._handlers[Steam.EMsg.ClientLogOnResponse] = function(body) {
	switch(body.eresult) {
		case Steam.EResult.OK:
			this.emit('loggedOn', body);
			break;

		case Steam.EResult.AccountLogonDenied:
		case Steam.EResult.AccountLoginDeniedNeedTwoFactor:
			var self = this;
			this.client.disconnect();
			this.emit('steamGuard', body.eresult == Steam.EResult.AccountLogonDenied ? body.email_domain : null, function(code) {
				self._logOnDetails[body.eresult == Steam.EResult.AccountLogonDenied ? 'auth_code' : 'two_factor_code'] = code;
				self.logOn(self._logOnDetails);
			});

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
			this.client.disconnect();
			this.emit('error', error);
	}
};
