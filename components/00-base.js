const {EventEmitter} = require('events');

const HandlerManager = require('./classes/HandlerManager.js');

/**
 * @typedef ExponentialBackoff
 * @property {NodeJS.Timeout} timeout
 * @property {number} lastTimeout
 */

/**
 * I admit, this is a pretty unorthodox pattern, but this is the only way I've found to define a class across multiple
 * files while also making sure that IDE intellisense can figure out which methods belong to the final class.
 *
 * Inheritance follows filenames sorted alphabetically with numbers first.
 */
class SteamUserBase extends EventEmitter {
	/** @var {{[name: string]: ExponentialBackoff}} */
	_exponentialBackoffs = {};

	/**
	 * @protected
	 */
	_resetAllExponentialBackoffs() {
		for (let i in this._exponentialBackoffs) {
			this._resetExponentialBackoff(i);
		}
	}

	/**
	 * @param {string} backoffName
	 * @protected
	 */
	_resetExponentialBackoff(backoffName) {
		if (this._exponentialBackoffs[backoffName]) {
			this.emit('debug-verbose', `[EBO] Resetting exponential backoff "${backoffName}"`);
			clearTimeout(this._exponentialBackoffs[backoffName].timeout);
			delete this._exponentialBackoffs[backoffName];
		}
	}

	/**
	 * @param {string} backoffName
	 * @param {number} minimumTimeout
	 * @param {number} maximumTimeout
	 * @return Promise<void>
	 * @protected
	 */
	_exponentialBackoff(backoffName, minimumTimeout, maximumTimeout) {
		return new Promise((resolve) => {
			let timeout = this._exponentialBackoffs[backoffName]?.lastTimeout ?? 0;
			this._resetExponentialBackoff(backoffName); // cancel any outstanding backoffs of this name

			timeout *= 2;
			timeout = Math.max(timeout, minimumTimeout);
			timeout = Math.min(timeout, maximumTimeout);

			this.emit('debug-verbose', `[EBO] Queueing exponential backoff "${backoffName}" with timeout ${timeout}`);
			this._exponentialBackoffs[backoffName] = {
				lastTimeout: timeout,
				timeout: setTimeout(resolve, timeout)
			};
		});
	}
}

SteamUserBase.prototype._handlerManager = new HandlerManager();

module.exports = SteamUserBase;
