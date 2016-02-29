var Steam = require('steam-client');
var SteamUser = require('../index.js');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');

SteamUser.prototype.createAccount = function(accountName, password, email, callback) {
	if(typeof callback === 'string' && typeof arguments[5] === 'function') {
		// Support people providing questions/answers from back when that was a thing
		callback = arguments[5];
	}
	
	this._send(Steam.EMsg.ClientCreateAccountProto, {
		"account_name": accountName,
		"password": password,
		"email": email,
		"launcher": 0
	}, function(body) {
		callback(body.eresult, body.steamid ? new SteamID(body.steamid.toString()) : null);
	});
};

SteamUser.prototype.requestValidationEmail = function(callback) {
	var body = new ByteBuffer(1, ByteBuffer.LITTLE_ENDIAN);
	body.writeUint8(0);
	this._send(Steam.EMsg.ClientRequestValidationMail, body, function(response) {
		if(!callback) {
			return;
		}

		callback(response.readUint32());
	});
};

SteamUser.prototype.getSteamGuardDetails = function(callback) {
	this._sendUnified("Credentials.GetSteamGuardDetails#1", {}, false, function(body) {
		var canTrade = true;
		var twofactor7days = (body.is_twofactor_enabled && body.timestamp_twofactor_enabled && Math.floor(Date.now() / 1000) - body.timestamp_twofactor_enabled >= (60 * 60 * 24 * 7));

		if(!body.is_steamguard_enabled) {
			canTrade = false; // SG is not enabled
		} else if(!body.timestamp_steamguard_enabled || Math.floor(Date.now() / 1000) - body.timestamp_steamguard_enabled < (60 * 60 * 24 * 15)) {
			canTrade = false; // SG has not been enabled for 7 days
		} else if(
			!twofactor7days &&
			(
				!body.session_data ||
				!body.session_data[0] ||
				!body.session_data[0].timestamp_machine_steamguard_enabled ||
				Math.floor(Date.now() / 1000) - body.session_data[0].timestamp_machine_steamguard_enabled < (60 * 60 * 24 * 7)
			)
		) {
			canTrade = false; // Haven't had 2FA for 7 days, and this machine's auth is less than 7 days old
		}

		callback(
			!!body.is_steamguard_enabled,
			body.timestamp_steamguard_enabled ? new Date(body.timestamp_steamguard_enabled * 1000) : null,
			body.session_data && body.session_data[0] && body.session_data[0].timestamp_machine_steamguard_enabled ? new Date(body.session_data[0].timestamp_machine_steamguard_enabled * 1000) : null,
			canTrade,
			body.is_twofactor_enabled && body.timestamp_twofactor_enabled ? new Date(body.timestamp_twofactor_enabled * 1000) : null
		);
	});
};

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientEmailAddrInfo] = function(body) {
	this.emit('emailInfo', body.email_address, body.email_is_validated);
	this.emailInfo = {
		"address": body.email_address,
		"validated": body.email_is_validated
	};
};

SteamUser.prototype._handlers[Steam.EMsg.ClientIsLimitedAccount] = function(body) {
	this.emit('accountLimitations', body.bis_limited_account, body.bis_community_banned, body.bis_locked_account, body.bis_limited_account_allowed_to_invite_friends);
	this.limitations = {
		"limited": body.bis_limited_account,
		"communityBanned": body.bis_community_banned,
		"locked": body.bis_locked_account,
		"canInviteFriends": body.bis_limited_account_allowed_to_invite_friends
	};
};

SteamUser.prototype._handlers[Steam.EMsg.ClientVACBanStatus] = function(body) {
	var appids = [];
	
	var numBans = body.readUint32();
	
	var rangeStart, rangeEnd, j;
	for(var i = 0; i < numBans; i++) {
		rangeStart = body.readUint32();
		rangeEnd = body.readUint32();
		
		if(rangeEnd < rangeStart) {
			j = rangeEnd;
			rangeEnd = rangeStart;
			rangeStart = j;
		}
		
		for(j = rangeStart; j <= rangeEnd; j++) {
			appids.push(j);
		}
	}
	
	this.emit('vacBans', numBans, appids);
	
	this.vac = {
		"numBans": numBans,
		"appids": appids
	};
};

SteamUser.prototype._handlers[Steam.EMsg.ClientWalletInfoUpdate] = function(body) {
	this.emit('wallet', body.has_wallet, body.currency, body.balance / 100);
	this.wallet = {
		"hasWallet": body.has_wallet,
		"currency": body.currency,
		"balance": body.balance / 100
	};
};
