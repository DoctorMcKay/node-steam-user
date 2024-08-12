const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const SteamUserNotifications = require('./notifications.js');

class SteamUserPublishedFiles extends SteamUserNotifications {
	/**
	 * Get details for some UGC files.
	 * @param {int[]} ids
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	getPublishedFileDetails(ids, callback) {
		if (!(ids instanceof Array)) {
			ids = [ids];
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, ['files'], callback, (resolve, reject) => {
			this._sendUnified('PublishedFile.GetDetails#1', {
				publishedfileids: ids,
				includetags: true,
				includeadditionalpreviews: true,
				includechildren: true,
				includekvtags: true,
				includevotes: true,
				includeforsaledata: true,
				includemetadata: true,
				language: 0
			}, function(body) {
				let results = {};
				let invalidSid = SteamID.fromIndividualAccountID(0).getSteamID64();

				(body.publishedfiledetails || []).forEach((item) => {
					if (!item.publishedfileid) {
						return;
					}

					for (let i in item) {
						if (Object.hasOwnProperty.call(item, i) && item[i] && typeof item[i] === 'object' && item[i].constructor.name == 'Long') {
							item[i] = item[i].toString();
						}
					}

					if (typeof item.creator === 'string' && item.creator != invalidSid) {
						item.creator = new SteamID(item.creator);
					} else {
						item.creator = null;
					}

					if (typeof item.banner === 'string' && item.banner != invalidSid) {
						item.banner = new SteamID(item.banner);
					} else {
						item.banner = null;
					}

					if (typeof item.incompatible_actor === 'string' && item.incompatible_actor != invalidSid) {
						item.incompatible_actor = new SteamID(item.incompatible_actor);
					} else {
						item.incompatible_actor = null;
					}

					let tags = {};
					(item.kvtags || []).forEach(function(tag) {
						tags[tag.key] = tag.value;
					});

					item.kvtags = tags;

					results[item.publishedfileid] = item;
				});

				resolve({files: results});
			});
		});
	}
}

module.exports = SteamUserPublishedFiles;
