var SteamUser = require('../index.js');

SteamUser.formatCurrency = function(amount, currency) {
	amount = amount.toFixed(2);

	if(!SteamUser.CurrencyData[currency]) {
		return amount;
	}

	var data = SteamUser.CurrencyData[currency];

	if(data.whole) {
		amount = amount.replace('.00', '');
	}

	if(data.commas) {
		amount = amount.replace('.', ',');
	}

	return (data.prepend || '') + amount + (data.append || '');
};
