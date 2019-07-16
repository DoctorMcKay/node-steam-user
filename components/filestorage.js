const SteamUser = require('../index.js');

/**
 * @param {string} filename
 * @param {Buffer|*} content
 * @return {Promise}
 * @private
 */
SteamUser.prototype._saveFile = async function(filename, content) {
	try {
		if (this.storage) {
			await this.storage.saveFile(filename, content);
		}
	} catch (ex) {
		this.emit('debug', `Error saving file ${filename}: ${ex.message}`);
	}
};

/**
 * @param {string} filename
 * @returns {Promise<Buffer|null>}
 * @private
 */
SteamUser.prototype._readFile = async function(filename) {
	let content = null;

	try {
		if (this.storage) {
			content = await this.storage.readFile(filename);
		}
	} catch (ex) {
		this.emit('debug', `Error reading file ${filename}: ${ex.message}`);
	}

	return content;
};

/**
 * @param {string[]} filenames
 * @returns {Promise<{filename: string, error?: Error, contents?: Buffer}[]>}
 * @private
 */
SteamUser.prototype._readFiles = async function(filenames) {
	if (!this.storage) {
		return filenames.map(filename => ({filename, "error": new Error('Storage system disabled')}));
	}

	// No need for a try/catch because readFiles can't reject
	return await this.storage.readFiles(filenames);
};
