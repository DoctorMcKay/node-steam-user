var Steam = require('steam');
var SteamUser = require('../index.js');

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientEmailAddrInfo] = function(body) {
	this.emit('emailInfo', body.email_address, body.email_is_validated);
};

SteamUser.prototype._handlers[Steam.EMsg.ClientIsLimitedAccount] = function(body) {
	this.emit('accountLimitations', body.bis_limited_account, body.bis_community_banned, body.bis_locked_account, body.b_is_limited_account_allowed_to_invite_friends);
};

SteamUser.prototype._handlers[Steam.EMsg.ClientWalletInfoUpdate] = function(body) {
	this.emit('wallet', body.has_wallet, body.currency, body.balance);
};
