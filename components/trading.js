var SteamUser = require('../index.js');
var SteamID = require('steamid');

SteamUser.prototype.trade = function(steamID) {
	if (typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	this._send(SteamUser.EMsg.EconTrading_InitiateTradeRequest, {"other_steamid": steamID.getSteamID64()});
};

SteamUser.prototype.cancelTradeRequest = function(steamID) {
	if (typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	this._send(SteamUser.EMsg.EconTrading_CancelTradeRequest, {"other_steamid": steamID.getSteamID64()});
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.EconTrading_InitiateTradeProposed] = function(body) {
	var self = this;
	this._emitIdEvent('tradeRequest', new SteamID(body.other_steamid.toString()), function(accept) {
		self._send(SteamUser.EMsg.EconTrading_InitiateTradeResponse, {
			"trade_request_id": body.trade_request_id,
			"response": accept ? SteamUser.EEconTradeResponse.Accepted : SteamUser.EEconTradeResponse.Declined
		});
	});
};

SteamUser.prototype._handlers[SteamUser.EMsg.EconTrading_InitiateTradeResult] = function(body) {
	// Is trade ID meaningful here?
	this._emitIdEvent('tradeResponse', new SteamID(body.other_steamid.toString()), body.response, {
		"steamguardRequiredDays": body.steamguard_required_days,
		"newDeviceCooldownDays": body.new_device_cooldown_days,
		"defaultPasswordResetProbationDays": body.default_password_reset_probation_days,
		"passwordResetProbationDays": body.password_reset_probation_days,
		"defaultEmailChangeProbationDays": body.default_email_change_probation_days,
		"emailChangeProbationDays": body.email_change_probation_days
	});
};

SteamUser.prototype._handlers[SteamUser.EMsg.EconTrading_StartSession] = function(body) {
	this._emitIdEvent('tradeStarted', new SteamID(body.other_steamid.toString()));
};
