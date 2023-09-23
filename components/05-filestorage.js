const SteamUserUtility = require('./04-utility.js');

class SteamUserFileStorage extends SteamUserUtility {
	/**
	 * @param {string} filename
	 * @param {Buffer|*} content
	 * @return {Promise}
	 * @protected
	 */
	async _saveFile(filename, content) {
		try {
			if (this.storage) {
				await this.storage.saveFile(filename, content);
			}
		} catch (ex) {
			this.emit('debug', `Error saving file ${filename}: ${ex.message}`);
		}
	}

	/**
	 * @param {string} filename
	 * @returns {Promise<Buffer|null>}
	 * @protected
	 */
	async _readFile(filename) {
		let content = null;

		try {
			if (this.storage) {
				content = await this.storage.readFile(filename);
			}
		} catch (ex) {
			this.emit('debug', `Error reading file ${filename}: ${ex.message}`);
		}

		return content;
	}

	/**
	 * @param {string[]} filenames
	 * @returns {Promise<{filename: string, error?: Error, contents?: Buffer}[]>}
	 * @protected
	 */
	async _readFiles(filenames) {
		if (!this.storage) {
			return filenames.map(filename => ({filename, error: new Error('Storage system disabled')}));
		}

		// No need for a try/catch because readFiles can't reject
		return await this.storage.readFiles(filenames);
	}
}

module.exports = SteamUserFileStorage;
