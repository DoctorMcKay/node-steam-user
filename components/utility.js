const SteamUser = require('../index.js');

SteamUser.formatCurrency = function(amount, currency) {
	amount = amount.toFixed(2);

	if (!SteamUser.CurrencyData[currency]) {
		return amount;
	}

	let data = SteamUser.CurrencyData[currency];

	if (data.whole) {
		amount = amount.replace('.00', '');
	}

	if (data.commas) {
		amount = amount.replace('.', ',');
	}

	return (data.prepend || '') + amount + (data.append || '');
};

/**
 * Same as emit() except the second argument (the first provided to the callback function) is a SteamID and will be appended to the event name with a hash.
 * @private
 */
SteamUser.prototype._emitIdEvent = function() {
	this.emit.apply(this, arguments);
	arguments[0] += '#' + arguments[1].getSteamID64();
	this.emit.apply(this, arguments);
};
