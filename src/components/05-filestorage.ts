import SteamUserUtility from './04-utility';
import {Stringifiable} from '../types/FileManager';

abstract class SteamUserFileStorage extends SteamUserUtility {
	/**
	 * @param {string} filename
	 * @param {Buffer|*} content
	 * @return {Promise}
	 * @protected
	 */
	async _saveFile(filename: string, content: Buffer|Stringifiable): Promise<any> {
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
	async _readFile(filename: string): Promise<Buffer|null> {
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
	async _readFiles(filenames: string[]): Promise<{filename: string, error?: Error, contents?: Buffer}[]> {
		if (!this.storage) {
			return filenames.map(filename => ({filename, error: new Error('Storage system disabled')}));
		}

		// No need for a try/catch because readFiles can't reject
		return await this.storage.readFiles(filenames);
	}
}

export default SteamUserFileStorage;
