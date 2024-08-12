const BinaryKVParser = require('binarykvparser');
const StdLib = require('@doctormckay/stdlib');

const Helpers = require('./helpers.js');

const EMsg = require('../enums/EMsg.js');
const EResult = require('../enums/EResult.js');

const SteamUserBase = require('./00-base.js');
const SteamUserLogon = require('./09-logon.js');

class SteamUserAccount extends SteamUserLogon {
	requestValidationEmail(callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			let body = Buffer.alloc(1, 0x0); // pre-fills with 0x0
			this._send(EMsg.ClientRequestValidationMail, body, (response) => {
				let err = Helpers.eresultError(response.readUint32());
				err ? reject(err) : resolve();
			});
		});
	}

	getSteamGuardDetails(callback) {
		let callbackArgs = [
			'isSteamGuardEnabled',
			'timestampSteamGuardEnabled',
			'timestampMachineSteamGuardEnabled',
			'canTrade',
			'timestampTwoFactorEnabled',
			'isPhoneVerified'
		];

		return StdLib.Promises.timeoutCallbackPromise(10000, callbackArgs, callback, (resolve, reject) => {
			this._sendUnified('Credentials.GetSteamGuardDetails#1', {}, (body) => {
				let res = {};

				res.canTrade = true;
				let hasHadTwoFactorForWeek = (body.is_twofactor_enabled && body.timestamp_twofactor_enabled && Math.floor(Date.now() / 1000) - body.timestamp_twofactor_enabled >= (60 * 60 * 24 * 7));

				if (!body.is_steamguard_enabled) {
					res.canTrade = false; // SG is not enabled
				} else if (!body.timestamp_steamguard_enabled || Math.floor(Date.now() / 1000) - body.timestamp_steamguard_enabled < (60 * 60 * 24 * 15)) {
					res.canTrade = false; // SG has not been enabled for 15 days
				} else if (
					!hasHadTwoFactorForWeek &&
					(
						!body.session_data || !body.session_data[0] || !body.session_data[0].timestamp_machine_steamguard_enabled ||
						Math.floor(Date.now() / 1000) - body.session_data[0].timestamp_machine_steamguard_enabled < (60 * 60 * 24 * 7)
					)
				) {
					res.canTrade = false; // Haven't had 2FA for 7 days, and this machine's auth is less than 7 days old
				}

				res.isSteamGuardEnabled = !!body.is_steamguard_enabled;
				res.timestampSteamGuardEnabled = body.timestamp_steamguard_enabled ? new Date(body.timestamp_steamguard_enabled * 1000) : null;
				res.timestampMachineSteamGuardEnabled = body.session_data && body.session_data[0] && body.session_data[0].timestamp_machine_steamguard_enabled ? new Date(body.session_data[0].timestamp_machine_steamguard_enabled * 1000) : null;
				res.isTwoFactorEnabled = !!body.is_twofactor_enabled;
				res.timestampTwoFactorEnabled = body.timestamp_twofactor_enabled ? new Date(body.timestamp_twofactor_enabled * 1000) : null;
				res.isPhoneVerified = !!body.is_phone_verified;

				resolve(res);
			});
		});
	}

	getCredentialChangeTimes(callback) {
		let callbackArgs = [
			'timestampLastPasswordChange',
			'timestampLastPasswordReset',
			'timestampLastEmailChange'
		];

		return StdLib.Promises.timeoutCallbackPromise(10000, callbackArgs, callback, (resolve, reject) => {
			this._sendUnified('Credentials.GetCredentialChangeTimeDetails#1', {}, (body) => {
				resolve({
					timestampLastPasswordChange: body.timestamp_last_password_change ? new Date(body.timestamp_last_password_change * 1000) : null,
					timestampLastPasswordReset: body.timestamp_last_password_reset ? new Date(body.timestamp_last_password_reset * 1000) : null,
					timestampLastEmailChange: body.timestamp_last_email_change ? new Date(body.timestamp_last_email_change * 1000) : null
				});
			});
		});
	}

	getAuthSecret(callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['secretID', 'key'], callback, (resolve, reject) => {
			this._sendUnified('Credentials.GetAccountAuthSecret#1', {}, (body) => {
				resolve({
					secretID: body.secret_id,
					key: body.secret
				});
			});
		});
	}

	/**
	 * Get your account's profile privacy settings.
	 * @param {function} [callback]
	 * @returns {Promise<{privacy_state: int, privacy_state_inventory: int, privacy_state_gifts: int, privacy_state_ownedgames: int, privacy_state_playtime: int, privacy_state_friendslist: int}>}
	 */
	getPrivacySettings(callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			this._sendUnified('Player.GetPrivacySettings#1', {}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				resolve(body.privacy_settings);
			});
		});
	}

	// Honestly not sure what this is for, but it works.
	/*getStreamingEncryptionKey(callback) {
		this._send(EMsg.ClientUnlockStreaming, {}, function(body) {
			if (body.eresult != EResult.OK) {
				callback(Helpers.eresultError(body.eresult));
				return;
			}

			callback(null, body.encryption_key);
		});
	}*/
}

SteamUserBase.prototype._handlerManager.add(EMsg.ClientAccountInfo, function(body) {
	// Steam appears to send this twice on logon. Let's collapse it down to one event.
	let info = {
		name: body.persona_name,
		country: body.ip_country,
		authedMachines: body.count_authed_computers,
		flags: body.account_flags,
		facebookID: body.facebook_id ? body.facebook_id.toString() : null,
		facebookName: body.facebook_name
	};

	if (this.accountInfo) {
		// Check if everything is identical
		let anythingDifferent = false;
		for (let i in this.accountInfo) {
			if (Object.hasOwnProperty.call(this.accountInfo, i) && Object.hasOwnProperty.call(info, i) && this.accountInfo[i] != info[i]) {
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
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientEmailAddrInfo, function(body) {
	this.emit('emailInfo', body.email_address, body.email_is_validated);
	this.emailInfo = {
		address: body.email_address,
		validated: body.email_is_validated
	};
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientIsLimitedAccount, function(body) {
	this.emit('accountLimitations', body.bis_limited_account, body.bis_community_banned, body.bis_locked_account, body.bis_limited_account_allowed_to_invite_friends);
	this.limitations = {
		limited: body.bis_limited_account,
		communityBanned: body.bis_community_banned,
		locked: body.bis_locked_account,
		canInviteFriends: body.bis_limited_account_allowed_to_invite_friends
	};
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientVACBanStatus, function(body) {
	let appids = [], ranges = [];

	let numBans = body.readUint32();

	let rangeStart, rangeEnd, j;
	for (let i = 0; i < numBans; i++) {
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

	this.vac = {numBans, appids, ranges};
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientWalletInfoUpdate, function(body) {
	if (this.wallet && body.has_wallet == this.wallet.hasWallet && body.currency == this.wallet.currency && body.balance / 100 == this.wallet.balance) {
		return; // nothing changed
	}

	this.emit('wallet', body.has_wallet, body.currency, body.balance / 100);
	this.wallet = {
		hasWallet: body.has_wallet,
		currency: body.currency,
		balance: body.balance / 100
	};
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientVanityURLChangedNotification, function(body) {
	this.emit('vanityURL', body.vanity_url);
	this.vanityURL = body.vanity_url;
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientUpdateGuestPassesList, function(body) {
	let eresult = body.readUint32();
	if (eresult != EResult.OK) {
		return;
	}

	let countToGive = body.readUint32();
	let countToRedeem = body.readUint32();

	for (let i = 0; i < countToGive; i++) {
		BinaryKVParser.parse(body); // throw it away, I don't think this should be possible
	}

	let gifts = [], gift, key;
	for (let i = 0; i < countToRedeem; i++) {
		gift = BinaryKVParser.parse(body).MessageObject;

		for (key in gift) {
			if (!Object.hasOwnProperty.call(gift, key)) {
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
});

module.exports = SteamUserAccount;
