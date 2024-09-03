const CurrencyData = require('../resources/CurrencyData.js');

const SteamUserMessages = require('./03-messages.js');

class SteamUserUtility extends SteamUserMessages {
	/**
	 * @param {number} amount
	 * @param {ECurrencyCode} currency
	 * @returns {string}
	 */
	static formatCurrency(amount, currency) {
		let amountString = amount.toFixed(2);

		if (!CurrencyData[currency]) {
			return amountString;
		}

		let data = CurrencyData[currency];

		if (data.whole) {
			amountString = amountString.replace('.00', '');
		}

		if (data.commas) {
			amountString = amountString.replace('.', ',');
		}

		return (data.prepend || '') + amountString + (data.append || '');
	}

	/**
	 * Same as emit() except the second argument (the first provided to the callback function) is a SteamID and will be appended to the event name with a hash.
	 * @protected
	 */
	_emitIdEvent() {
		this.emit.apply(this, arguments);
		arguments[0] += '#' + arguments[1].getSteamID64();
		this.emit.apply(this, arguments);
	}
}

module.exports = SteamUserUtility;
