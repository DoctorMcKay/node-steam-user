var Steam = require('steam');
var SteamUser = require('../index.js');

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientEmailAddrInfo] = function(body) {
	this.emit('emailInfo', body.email_address, body.email_is_validated);
};
