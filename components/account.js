var SteamUser = require('../index.js');
var Helpers = require('./helpers.js');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');
var BinaryKVParser = require('binarykvparser');

/**
 * @param {string} accountName
 * @param {string} password
 * @param {string} email
 * @param {function} callback
 * @deprecated No longer works
 */
SteamUser.prototype.createAccount = function(accountName, password, email, callback) {
	throw new Error("Creating accounts through node-steam-user is no longer possible due to Steam changes.");
};

SteamUser.prototype.requestValidationEmail = function(callback) {
	var body = new ByteBuffer(1, ByteBuffer.LITTLE_ENDIAN);
	body.writeUint8(0);
	this._send(SteamUser.EMsg.ClientRequestValidationMail, body.flip(), function(response) {
		if (!callback) {
			return;
		}

		callback(response.readUint32());
	});
};

SteamUser.prototype.getSteamGuardDetails = function(callback) {
	this._sendUnified("Credentials.GetSteamGuardDetails#1", {}, false, function(body) {
		var canTrade = true;
		var hasHadTwoFactorForWeek = (body.is_twofactor_enabled && body.timestamp_twofactor_enabled && Math.floor(Date.now() / 1000) - body.timestamp_twofactor_enabled >= (60 * 60 * 24 * 7));

		if (!body.is_steamguard_enabled) {
			canTrade = false; // SG is not enabled
		} else if (!body.timestamp_steamguard_enabled || Math.floor(Date.now() / 1000) - body.timestamp_steamguard_enabled < (60 * 60 * 24 * 15)) {
			canTrade = false; // SG has not been enabled for 15 days
		} else if (
			!hasHadTwoFactorForWeek &&
			(
				!body.session_data || !body.session_data[0] || !body.session_data[0].timestamp_machine_steamguard_enabled ||
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
			body.is_twofactor_enabled && body.timestamp_twofactor_enabled ? new Date(body.timestamp_twofactor_enabled * 1000) : null,
			body.is_phone_verified || false
		);
	});
};

SteamUser.prototype.getCredentialChangeTimes = function(callback) {
	this._sendUnified("Credentials.GetCredentialChangeTimeDetails#1", {}, false, function(body) {
		callback(body.timestamp_last_password_change ? new Date(body.timestamp_last_password_change * 1000) : null,
			body.timestamp_last_password_reset ? new Date(body.timestamp_last_password_reset * 1000) : null,
			body.timestamp_last_email_change ? new Date(body.timestamp_last_email_change * 1000) : null);
	});
};

SteamUser.prototype.getAuthSecret = function(callback) {
	this._sendUnified("Credentials.GetAccountAuthSecret#1", {}, false, function(body) {
		callback(body.secret_id, body.secret.toBuffer());
	});
};

// Honestly not sure what this is for, but it works.
/*SteamUser.prototype.getStreamingEncryptionKey = function(callback) {
	this._send(SteamUser.EMsg.ClientUnlockStreaming, {}, function(body) {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		callback(null, body.encryption_key);
	});
};*/

/**
 * @param {string} currentPassword
 * @param {function} callback
 * @deprecated No longer works
 */
SteamUser.prototype.requestPasswordChangeEmail = function(currentPassword, callback) {
	var buf = new ByteBuffer(81 + 4); // a static 81 bytes for the password, and 4 for the int at the end
	buf.writeCString(currentPassword);

	for (var i = currentPassword.length + 1; i <= 81; i++) {
		buf.writeByte(0);
	}

	buf.writeUint32(1); // dunno, maybe what type of change we want?
	this._send(SteamUser.EMsg.ClientRequestChangeMail, buf.flip(), function(body) {
		if (!callback) {
			return;
		}

		callback(Helpers.eresultError(body.readUint32()));
	});
};

/**
 * @param {string} oldPassword
 * @param {string} newPassword
 * @param {string} code
 * @param {function} callback
 * @deprecated No longer works
 */
SteamUser.prototype.changePassword = function(oldPassword, newPassword, code, callback) {
	var buf = new ByteBuffer(1 + oldPassword.length + 1 + newPassword.length + 1 + code.length + 1, ByteBuffer.LITTLE_ENDIAN);
	buf.writeCString(""); // unknown
	buf.writeCString(oldPassword);
	buf.writeCString(newPassword);
	buf.writeCString(code);

	this._send(SteamUser.EMsg.ClientPasswordChange3, buf.flip(), function(body) {
		if (!callback) {
			return;
		}

		callback(Helpers.eresultError(body.readUint32()));
	});
};

SteamUser.prototype.changeEmail = function(options, callback) {
	this._send(SteamUser.EMsg.ClientEmailChange4, {
		"password": options.password,
		"email": options.newEmail || options.email,
		"code": options.code,
		"final": !!options.code,
		"newmethod": true,
		"twofactor_code": options.twoFactorCode,
		"sms_code": options.smsCode,
		"client_supports_sms": true // this appears to be ignored; it asks for an SMS code regardless of value
	}, function(body) {
		if (!callback) {
			return;
		}

		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		callback(null, !!body.requires_sms_code);
	});
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientAccountInfo] = function(body) {
	// Steam appears to send this twice on logon. Let's collapse it down to one event.
	var info = {
		"name": body.persona_name,
		"country": body.ip_country,
		"authedMachines": body.count_authed_computers,
		"flags": body.account_flags,
		"facebookID": body.facebook_id ? body.facebook_id.toString() : null,
		"facebookName": body.facebook_name
	};

	if (this.accountInfo) {
		// Check if everything is identical
		var anythingDifferent = false;
		for (var i in this.accountInfo) {
			if (this.accountInfo.hasOwnProperty(i) && info.hasOwnProperty(i) && this.accountInfo[i] != info[i]) {
				anythingDifferent = true;
				break;
			}
		}

		if (!anythingDifferent) {
			return;
		}
	}

	this.emit('accountInfo', info.name, info.country, info.authedMachines, info.flags, info.facebookID, info.facebookName);
	this.accountInfo = info;
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientEmailAddrInfo] = function(body) {
	this.emit('emailInfo', body.email_address, body.email_is_validated);
	this.emailInfo = {
		"address": body.email_address,
		"validated": body.email_is_validated
	};
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientIsLimitedAccount] = function(body) {
	this.emit('accountLimitations', body.bis_limited_account, body.bis_community_banned, body.bis_locked_account, body.bis_limited_account_allowed_to_invite_friends);
	this.limitations = {
		"limited": body.bis_limited_account,
		"communityBanned": body.bis_community_banned,
		"locked": body.bis_locked_account,
		"canInviteFriends": body.bis_limited_account_allowed_to_invite_friends
	};
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientVACBanStatus] = function(body) {
	var appids = [], ranges = [];

	var numBans = body.readUint32();

	var rangeStart, rangeEnd, j;
	for (var i = 0; i < numBans; i++) {
		rangeStart = body.readUint32();
		rangeEnd = body.readUint32();
		body.skip(4); // 4-byte unknown "0" value

		if (rangeEnd < rangeStart) {
			j = rangeEnd;
			rangeEnd = rangeStart;
			rangeStart = j;
		}

		ranges.push([rangeStart, rangeEnd]);

		for (j = rangeStart; j <= rangeEnd; j++) {
			appids.push(j);
		}
	}

	this.emit('vacBans', numBans, appids, ranges);

	this.vac = {
		"numBans": numBans,
		"appids": appids,
		"ranges": ranges
	};
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientWalletInfoUpdate] = function(body) {
	if (this.wallet && body.has_wallet == this.wallet.hasWallet && body.currency == this.wallet.currency && body.balance / 100 == this.wallet.balance) {
		return; // nothing changed
	}

	this.emit('wallet', body.has_wallet, body.currency, body.balance / 100);
	this.wallet = {
		"hasWallet": body.has_wallet,
		"currency": body.currency,
		"balance": body.balance / 100
	};
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientVanityURLChangedNotification] = function(body) {
	this.emit('vanityURL', body.vanity_url);
	this.vanityURL = body.vanity_url;
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientUpdateGuestPassesList] = function(body) {
	var eresult = body.readUint32();
	if (eresult != SteamUser.EResult.OK) {
		return;
	}

	var countToGive = body.readUint32();
	var countToRedeem = body.readUint32();

	for (var i = 0; i < countToGive; i++) {
		BinaryKVParser.parse(body); // throw it away, I don't think this should be possible
	}

	var gifts = [], gift, key;
	for (i = 0; i < countToRedeem; i++) {
		gift = BinaryKVParser.parse(body).MessageObject;

		for (key in gift) {
			if (!gift.hasOwnProperty(key)) {
				continue;
			}

			if (key == 'gid') {
				gift[key] = gift[key].toString();
			}

			if (key.match(/^Time/)) {
				gift[key] = gift[key] ? new Date(gift[key] * 1000) : null;
			}
		}

		gifts.push(gift);
	}

	if (this.gifts && this.gifts.length == gifts.length) {
		return; // nothing changed
	}

	this.emit('gifts', gifts);
	this.gifts = gifts;
};
