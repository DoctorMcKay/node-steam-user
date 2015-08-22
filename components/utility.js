var SteamUser = require('../index.js');

SteamUser.ECurrencyCode = {
	"Invalid": 0,
	"USD": 1,
	"GBP": 2,
	"EUR": 3,
	"CHF": 4,
	"RUB": 5,
	"PLN": 6,
	"BRL": 7,
	"JPY": 8,
	"NOK": 9,
	"IDR": 10,
	"MYR": 11,
	"PHP": 12,
	"SGD": 13,
	"THB": 14,
	"VND": 15,
	"KRW": 16,
	"TRY": 17,
	"UAH": 18,
	"MXN": 19,
	"CAD": 20,
	"AUD": 21,
	"NZD": 22,
	"CNY": 23,
	"INR": 24,
	"CLP": 25,
	"PEN": 26,
	"COP": 27,
	"ZAR": 28,
	"HKD": 29,
	"TWD": 30,
	"SAR": 31,
	"AED": 32
};

SteamUser.CurrencyData = {};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.USD] = {"prepend": "$"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.GBP] = {"prepend": "£"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.EUR] = {"append": "€", "commas": true};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.CHF] = {"append": " CHF"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.RUB] = {"append": " p??.", "commas": true, "whole": true};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.PLN] = {"append": " PLN"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.BRL] = {"append": " R$", "commas": true};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.JPY] = {"prepend": "¥ ", "whole": true};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.NOK] = {"append": " kr", "commas": true};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.IDR] = {"prepend": "Rp "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.MYR] = {"prepend": "RM "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.PHP] = {"prepend": "? "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.SGD] = {"prepend": "S$ "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.THB] = {"prepend": "? "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.VND] = {"append": " VND"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.KRW] = {"prepend": "?", "whole": true};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.TRY] = {"append": " TRY"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.UAH] = {"append": " UAH"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.MXN] = {"prepend": "Mex$ "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.CAD] = {"prepend": "CDN$ "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.AUD] = {"prepend": "A$ "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.NZD] = {"prepend": "NZ$ "};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.CNY] = {"append": " CNY"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.INR] = {"append": " INR"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.CLP] = {"append": " CLP"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.PEN] = {"append": " PEN"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.COP] = {"append": " COP"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.ZAR] = {"append": " ZAR"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.HKD] = {"append": " HKD"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.TWD] = {"append": " TWD"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.SAR] = {"append": " SAR"};
SteamUser.CurrencyData[SteamUser.ECurrencyCode.AED] = {"append": " AED"};

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

/**
 * Same as emit() except the second argument (the first provided to the callback function) is a SteamID and will be appended to the event name with a hash.
 * @private
 */
SteamUser.prototype._emitIdEvent = function() {
	this.emit.apply(this, arguments);
	arguments[0] += '#' + arguments[1].getSteamID64();
	this.emit.apply(this, arguments);
};
