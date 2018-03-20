const SteamUser = require('../index.js');

SteamUser.prototype.getStoreTagNames = function(language, tagIDs, callback) {
	this._sendUnified("Store.GetLocalizedNameForTags#1", {"language": language, "tagids": tagIDs}, false, (body) => {
		if (body.tags.length == 0) {
			callback(new Error("Unable to get tag data; is your language correct?"));
			return;
		}

		let tags = {};
		body.tags.forEach((tag) => {
			tags[tag.tagid] = {"name": tag.name, "englishName": tag.english_name};
		});

		callback(null, tags);
	});
};
