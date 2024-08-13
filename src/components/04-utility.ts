import CurrencyData from '../resources/CurrencyData';

import ECurrencyCode from '../enums/ECurrencyCode';

import SteamUserMessages from './03-messages';

abstract class SteamUserUtility extends SteamUserMessages {
	/**
	 * @param {number} amount
	 * @param {ECurrencyCode} currency
	 * @returns {string}
	 */
	static formatCurrency(amount: number, currency: ECurrencyCode): string {
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
	_emitIdEvent(...args: any[]): void {
		// @ts-ignore
		this.emit(...args);
		args[0] += '#' + args[1].getSteamID64();
		// @ts-ignore
		this.emit(...args);
	}
}

export default SteamUserUtility;
