const StdLib = require('@doctormckay/stdlib');

const SteamUser = require('../index.js');

/**
 * Get the localized names for given store tags.
 * @param {string} language - The full name of the language you're interested in, e.g. "english" or "spanish"
 * @param {int[]} tagIDs - The IDs of the tags you're interested in
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.getStoreTagNames = function(language, tagIDs, callback) {
	return StdLib.Promises.callbackPromise(['tags'], callback, (accept, reject) => {
		this._sendUnified("Store.GetLocalizedNameForTags#1", {"language": language, "tagids": tagIDs}, (body) => {
			if (body.tags.length == 0) {
				return reject(new Error("Unable to get tag data; is your language correct?"));
			}

			let tags = {};
			body.tags.forEach((tag) => {
				tags[tag.tagid] = {"name": tag.name, "englishName": tag.english_name};
			});

			accept({tags});
		});
	});
};
