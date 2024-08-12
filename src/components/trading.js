const SteamID = require('steamid');

const EEconTradeResponse = require('../enums/EEconTradeResponse.js');
const EMsg = require('../enums/EMsg.js');

const SteamUserBase = require('./00-base.js');
const SteamUserStore = require('./store.js');

class SteamUserTrading extends SteamUserStore {
	/**
	 * Sends a trade request to another user.
	 * @param {SteamID|string} steamID
	 * @deprecated Trading has been removed from the Steam UI in favor of trade offers. This does still work between bots however.
	 */
	trade(steamID) {
		if (typeof steamID === 'string') {
			steamID = new SteamID(steamID);
		}

		this._send(EMsg.EconTrading_InitiateTradeRequest, {other_steamid: steamID.getSteamID64()});
	}

	/**
	 * Cancels an outstanding trade request we sent to another user.
	 * @param {SteamID|string} steamID
	 * @deprecated Trading has been removed from the Steam UI in favor of trade offers. This does still work between bots however.
	 */
	cancelTradeRequest(steamID) {
		if (typeof steamID === 'string') {
			steamID = new SteamID(steamID);
		}

		this._send(EMsg.EconTrading_CancelTradeRequest, {other_steamid: steamID.getSteamID64()});
	}
}

// Handlers

SteamUserBase.prototype._handlerManager.add(EMsg.EconTrading_InitiateTradeProposed, function(body) {
	this._emitIdEvent('tradeRequest', new SteamID(body.other_steamid.toString()), (accept) => {
		this._send(EMsg.EconTrading_InitiateTradeResponse, {
			trade_request_id: body.trade_request_id,
			response: accept ? EEconTradeResponse.Accepted : EEconTradeResponse.Declined
		});
	});
});

SteamUserBase.prototype._handlerManager.add(EMsg.EconTrading_InitiateTradeResult, function(body) {
	// Is trade ID meaningful here?
	this._emitIdEvent('tradeResponse', new SteamID(body.other_steamid.toString()), body.response, {
		steamguardRequiredDays: body.steamguard_required_days,
		newDeviceCooldownDays: body.new_device_cooldown_days,
		defaultPasswordResetProbationDays: body.default_password_reset_probation_days,
		passwordResetProbationDays: body.password_reset_probation_days,
		defaultEmailChangeProbationDays: body.default_email_change_probation_days,
		emailChangeProbationDays: body.email_change_probation_days
	});
});

SteamUserBase.prototype._handlerManager.add(EMsg.EconTrading_StartSession, function(body) {
	this._emitIdEvent('tradeStarted', new SteamID(body.other_steamid.toString()));
});

module.exports = SteamUserTrading;
