const BinaryKVParser = require('binarykvparser');
const ByteBuffer = require('bytebuffer');
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');

const EClientPersonaStateFlag = require('../enums/EClientPersonaStateFlag.js');
const EFriendRelationship = require('../enums/EFriendRelationship.js');
const EMsg = require('../enums/EMsg.js');
const EResult = require('../enums/EResult.js');

const SteamUserBase = require('./00-base.js');
const SteamUserFamilySharing = require('./familysharing.js');

let g_ProcessPersonaSemaphore = new StdLib.Concurrency.Semaphore();

/**
 * @typedef {object} UserPersona
 * @property {EPersonaState} persona_state
 * @property {number|null} game_played_app_id
 * @property {number|null} game_server_ip
 * @property {number|null} game_server_port
 * @property {number} persona_state_flags
 * @property {number} online_session_instances
 * @property {boolean} persona_set_by_user
 * @property {string} player_name
 * @property {number|null} query_port
 * @property {number} steamid_source
 * @property {Buffer} avatar_hash
 * @property {string} avatar_url_icon
 * @property {string} avatar_url_medium
 * @property {string} avatar_url_full
 * @property {Date} last_logoff
 * @property {Date} last_logon
 * @property {Date} last_seen_online
 * @property {EClanRank} clank_rank
 * @property {string|null} game_name
 * @property {number|null} gameid
 * @property {Buffer} game_data_blob
 * @property {Proto_CMsgClientPersonaState_Friend_ClanData} clan_data
 * @property {string} clan_tag
 * @property {Proto_CMsgClientPersonaState_Friend_KV} rich_presence
 * @property {string} [rich_presence_string]
 * @property {number|null} broadcast_id
 * @property {number|null} game_lobby_id
 * @property {number|null} watching_broadcast_accountid
 * @property {number|null} watching_broadcast_appid
 * @property {number|null} watching_broadcast_viewers
 * @property {string|null} watching_broadcast_title
 * @property {boolean} is_community_banned
 * @property {boolean} player_name_pending_review
 * @property {boolean} avatar_pending_review
 */

class SteamUserFriends extends SteamUserFamilySharing {
	/**
	 * Set your persona online state and optionally name.
	 * @memberOf SteamUser
	 * @param {EPersonaState} state - Your new online state
	 * @param {string} [name] - Optional. Set a new profile name.
	 */
	setPersona(state, name) {
		this._send(EMsg.ClientChangeStatus, {
			persona_state: state,
			player_name: name
		});
	}

	/**
	 * Set your current UI mode (displays next to your Steam online status in friends)
	 * @param {EClientUIMode} mode - Your new UI mode
	 */
	setUIMode(mode) {
		this._send(EMsg.ClientCurrentUIMode, {uimode: mode});
	}

	/**
	 * Send (or accept) a friend invitiation.
	 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to add, or a string which can parse into one.
	 * @param {function} [callback] - Optional. Called with `err` and `name` parameters on completion.
	 */
	addFriend(steamID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['personaName'], callback, true, (resolve, reject) => {
			this._send(EMsg.ClientAddFriend, {steamid_to_add: Helpers.steamID(steamID).getSteamID64()}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				resolve({
					personaName: body.persona_name_added
				});
			});
		});
	}

	/**
	 * Remove a friend from your friends list (or decline an invitiation)
	 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to remove, or a string which can parse into one.
	 */
	removeFriend(steamID) {
		if (typeof steamID === 'string') {
			steamID = new SteamID(steamID);
		}

		this._send(EMsg.ClientRemoveFriend, {friendid: steamID.getSteamID64()});
	}

	/**
	 * Block all communication with a user.
	 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to block, or a string which can parse into one.
	 * @param {SteamUser~genericEResultCallback} [callback] - Optional. Called with an `err` parameter on completion.
	 * @return {Promise}
	 */
	blockUser(steamID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			if (typeof steamID === 'string') {
				steamID = new SteamID(steamID);
			}

			let buffer = ByteBuffer.allocate(17, ByteBuffer.LITTLE_ENDIAN);
			buffer.writeUint64(this.steamID.getSteamID64());
			buffer.writeUint64(steamID.getSteamID64());
			buffer.writeUint8(1);

			this._send(EMsg.ClientSetIgnoreFriend, buffer.flip(), (body) => {
				body.readUint64(); // unknown
				let err = Helpers.eresultError(body.readUint32());
				return err ? reject(err) : resolve();
			});
		});
	}

	/**
	 * Unblock all communication with a user.
	 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to unblock, or a string which can parse into one.
	 * @param {SteamUser~genericEResultCallback} [callback] - Optional. Called with an `err` parameter on completion.
	 * @return {Promise}
	 */
	unblockUser(steamID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			if (typeof steamID === 'string') {
				steamID = new SteamID(steamID);
			}

			let buffer = ByteBuffer.allocate(17, ByteBuffer.LITTLE_ENDIAN);
			buffer.writeUint64(this.steamID.getSteamID64());
			buffer.writeUint64(steamID.getSteamID64());
			buffer.writeUint8(0);

			this._send(EMsg.ClientSetIgnoreFriend, buffer.flip(), (body) => {
				body.readUint64(); // unknown
				let err = Helpers.eresultError(body.readUint32());
				return err ? reject(err) : resolve();
			});
		});
	}

	/**
	 * Create a new quick-invite link that can be used by any Steam user to directly add you as a friend.
	 * @param {{inviteLimit?: int, inviteDuration?: int}} [options]
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	createQuickInviteLink(options, callback) {
		if (typeof options == 'function') {
			callback = options;
			options = {};
		}

		options = options || {};

		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, false, (resolve, reject) => {
			this._sendUnified('UserAccount.CreateFriendInviteToken#1', {
				// Accept both camelCase and snake_case for backwards compatibility
				invite_limit: options.inviteLimit || options.invite_limit || 1,
				invite_duration: options.inviteDuration || options.invite_duration || null
				// there's also invite_note, but this doesn't appear to be used anywhere so we don't support it
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				processInviteToken(this.steamID, body);
				resolve({token: body});
			})
		});
	}

	/**
	 * Get a list of friend quick-invite links for your account.
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	listQuickInviteLinks(callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, false, (resolve, reject) => {
			this._sendUnified("UserAccount.GetFriendInviteTokens#1", {}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				body.tokens.forEach((token) => processInviteToken(this.steamID, token));
				resolve(body);
			});
		});
	}

	/**
	 * Revoke an active quick-invite link.
	 * @param {string} linkOrToken - Either the full link, or just the token from the link
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	revokeQuickInviteLink(linkOrToken, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			if (linkOrToken.includes('/')) {
				// It's a link
				let parts = linkOrToken.split('/');
				parts = parts.filter(part => !!part); // remove any trailing slash
				linkOrToken = parts[parts.length - 1];
			}

			this._sendUnified("UserAccount.RevokeFriendInviteToken#1", {
				invite_token: linkOrToken
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				// No data
				resolve();
			});
		});
	}

	/**
	 * Get the SteamID to whom a quick-invite link belongs.
	 * @param {string} link
	 * @returns {SteamID|null} - null if the link isn't well-formed
	 */
	getQuickInviteLinkSteamID(link) {
		let match = link.match(/^https?:\/\/s\.team\/p\/([^\/]+)\/([^\/]+)/);
		if (!match) {
			return null;
		}

		return Helpers.parseFriendCode(match[1]);
	}

	/**
	 * Check whether a given quick-invite link is valid.
	 * @param {string} link
	 * @param {function} [callback]
	 * @returns {Promise<{valid: boolean, steamid: SteamID, invite_duration?: int}>}
	 */
	checkQuickInviteLinkValidity(link, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, false, (resolve, reject) => {
			let match = link.match(/^https?:\/\/s\.team\/p\/([^\/]+)\/([^\/]+)/);
			if (!match) {
				return reject(new Error('Malformed quick-invite link'));
			}

			let steamID = Helpers.parseFriendCode(match[1]);
			let token = match[2];

			this._sendUnified('UserAccount.ViewFriendInviteToken#1', {
				steamid: steamID.toString(),
				invite_token: token
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				body.steamid = Helpers.steamID(body.steamid);
				body.invite_duration = body.invite_duration ? parseInt(body.invite_duration, 10) : null;
				resolve(body);
			})
		});
	}

	/**
	 * Redeem a quick-invite link and add the sender to your friends list.
	 * @param {string} link
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	redeemQuickInviteLink(link, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			let match = link.match(/^https?:\/\/s\.team\/p\/([^\/]+)\/([^\/]+)/);
			if (!match) {
				return reject(new Error('Malformed quick-invite link'));
			}

			let steamID = Helpers.parseFriendCode(match[1]);
			let token = match[2];

			this._sendUnified('UserAccount.RedeemFriendInviteToken#1', {
				steamid: steamID.toString(),
				invite_token: token
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				// No response data
				resolve();
			});
		});
	}

	/**
	 * Requests information about one or more user profiles.
	 * @param {(SteamID[]|string[])} steamids - An array of SteamID objects or strings which can parse into them.
	 * @param {function} [callback] - Optional. Called with `err`, and an object whose keys are 64-bit SteamIDs as strings, and whose values are persona objects.
	 * @return {Promise}
	 */
	getPersonas(steamids, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['personas'], callback, true, (resolve, reject) => {
			const Flags = EClientPersonaStateFlag;
			let flags = Flags.Status | Flags.PlayerName | Flags.QueryPort | Flags.SourceID | Flags.Presence |
				Flags.Metadata | Flags.LastSeen | Flags.UserClanRank | Flags.GameExtraInfo | Flags.GameDataBlob |
				Flags.ClanData | Flags.Facebook | Flags.RichPresence | Flags.Broadcast | Flags.Watching;

			let ids = steamids.map((id) => {
				if (typeof id === 'string') {
					return (new SteamID(id)).getSteamID64();
				}

				return id.toString();
			});

			this._send(EMsg.ClientRequestFriendData, {
				friends: ids,
				persona_state_requested: flags
			});

			// Handle response
			let output = {};

			ids.forEach((id) => {
				Helpers.onceTimeout(10000, this, 'user#' + id, receive);
			});

			function receive(err, sid, user) {
				if (err) {
					return reject(err);
				}

				let sid64 = sid.getSteamID64();
				output[sid64] = user;

				let index = ids.indexOf(sid64);
				if (index != -1) {
					ids.splice(index, 1);
				}

				if (ids.length === 0) {
					resolve({personas: output});
				}
			}
		});
	}

	/**
	 * Gets the Steam Level of one or more Steam users.
	 * @param {(SteamID[]|string[])} steamids - An array of SteamID objects, or strings which can parse into one.
	 * @param {function} [callback] - Called on completion with `err`, and an object whose keys are 64-bit SteamIDs as strings, and whose values are Steam Level numbers.
	 * @return {Promise}
	 */
	getSteamLevels(steamids, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['users'], callback, (resolve, reject) => {
			let accountids = steamids.map((steamID) => {
				if (typeof steamID === 'string') {
					return (new SteamID(steamID)).accountid;
				} else {
					return steamID.accountid;
				}
			});

			this._send(EMsg.ClientFSGetFriendsSteamLevels, {accountids}, (body) => {
				let output = {};

				let sid = new SteamID();
				sid.universe = SteamID.Universe.PUBLIC;
				sid.type = SteamID.Type.INDIVIDUAL;
				sid.instance = SteamID.Instance.DESKTOP;

				(body.friends || []).forEach((user) => {
					sid.accountid = user.accountid;
					output[sid.getSteamID64()] = user.level;
				});

				resolve({users: output});
			});
		});
	}

	/**
	 * Get the level of your game badge (and also your Steam level).
	 * @param {int} appid - AppID of game in question
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getGameBadgeLevel(appid, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['steamLevel', 'regularBadgeLevel', 'foilBadgeLevel'], callback, (resolve, reject) => {
			this._sendUnified('Player.GetGameBadgeLevels#1', {appid}, (body) => {
				let regular = 0;
				let foil = 0;

				(body.badges || []).forEach((badge) => {
					if (badge.series != 1) {
						return;
					}

					if (badge.border_color == 0) {
						regular = badge.level;
					} else if (badge.border_color == 1) {
						foil = badge.level;
					}
				});

				resolve({
					// these two level properties exist because we were using playerLevel while the docs said steamLevel
					steamLevel: body.player_level,
					playerLevel: body.player_level,
					regularBadgeLevel: regular,
					foilBadgeLevel: foil
				});
			});
		});
	}

	/**
	 * Invites a user to a Steam group. Only send group invites in response to a user's request; sending automated group
	 * invites is a violation of the Steam Subscriber Agreement and can get you banned.
	 * @param {(SteamID|string)} userSteamID - The SteamID of the user you're inviting as a SteamID object, or a string that can parse into one
	 * @param {(SteamID|string)} groupSteamID - The SteamID of the group you're inviting the user to as a SteamID object, or a string that can parse into one
	 */
	inviteToGroup(userSteamID, groupSteamID) {
		let buffer = ByteBuffer.allocate(17, ByteBuffer.LITTLE_ENDIAN);
		buffer.writeUint64(Helpers.steamID(userSteamID).toString());
		buffer.writeUint64(Helpers.steamID(groupSteamID).toString());
		buffer.writeUint8(1); // unknown

		this._send(EMsg.ClientInviteUserToClan, buffer.flip());
	}

	/**
	 * Respond to an incoming group invite.
	 * @param {(SteamID|string)} groupSteamID - The group you were invited to, as a SteamID object or a string which can parse into one
	 * @param {boolean} accept - true to join the group, false to ignore invitation
	 */
	respondToGroupInvite(groupSteamID, accept) {
		let buffer = ByteBuffer.allocate(9, ByteBuffer.LITTLE_ENDIAN);
		buffer.writeUint64(Helpers.steamID(groupSteamID).toString());
		buffer.writeUint8(accept ? 1 : 0);

		this._send(EMsg.ClientAcknowledgeClanInvite, buffer.flip());
	}

	/**
	 * Creates a friends group (or tag)
	 * @param {string} groupName - The name to create the friends group with
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	createFriendsGroup(groupName, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['groupID'], callback, true, (resolve, reject) => {
			this._send(EMsg.AMClientCreateFriendsGroup, {
				groupname: groupName
			}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				this.myFriendGroups[body.groupid] = {
					name: groupName,
					members: []
				};

				return resolve({groupID: body.groupid});
			});
		});
	}

	/**
	 * Deletes a friends group (or tag)
	 * @param {int} groupID - The friends group id
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	deleteFriendsGroup(groupID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			this._send(EMsg.AMClientDeleteFriendsGroup, {
				groupid: groupID
			}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				delete this.myFriendGroups[groupID];

				return resolve();
			});
		});
	}

	/**
	 * Rename a friends group (tag)
	 * @param {int} groupID - The friends group id
	 * @param {string} newName - The new name to update the friends group with
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	renameFriendsGroup(groupID, newName, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			this._send(EMsg.AMClientRenameFriendsGroup, {
				groupid: groupID,
				groupname: newName
			}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				this.myFriendGroups[groupID].name = newName;

				return resolve();
			});
		});
	}

	/**
	 * Add an user to friends group (tag)
	 * @param {int} groupID - The friends group
	 * @param {(SteamID|string)} userSteamID - The user to invite to the friends group with, as a SteamID object or a string which can parse into one
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	addFriendToGroup(groupID, userSteamID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			let sid = Helpers.steamID(userSteamID);

			this._send(EMsg.AMClientAddFriendToGroup, {
				groupid: groupID,
				steamiduser: sid.getSteamID64()
			}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				this.myFriendGroups[groupID].members.push(sid);

				return resolve();
			});
		});
	}

	/**
	 * Remove an user to friends group (tag)
	 * @param {int} groupID - The friends group
	 * @param {(SteamID|string)} userSteamID - The user to remove from the friends group with, as a SteamID object or a string which can parse into one
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	removeFriendFromGroup(groupID, userSteamID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			let sid = Helpers.steamID(userSteamID);

			this._send(EMsg.AMClientRemoveFriendFromGroup, {
				groupid: groupID,
				steamiduser: sid.getSteamID64()
			}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				let index = this.myFriendGroups[groupID].members.findIndex((element) => {
					return element.getSteamID64() === sid.getSteamID64();
				});

				if (index > -1) {
					this.myFriendGroups[groupID].members.splice(index, 1);
				}

				return resolve();
			});
		});
	}

	/**
	 * Get persona name history for one or more users.
	 * @param {SteamID[]|string[]|SteamID|string} userSteamIDs - SteamIDs of users to request aliases for
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	getAliases(userSteamIDs, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['users'], callback, (resolve, reject) => {
			if (!(userSteamIDs instanceof Array)) {
				userSteamIDs = [userSteamIDs];
			}

			userSteamIDs = userSteamIDs.map(Helpers.steamID).map((id) => {
				return {steamid: id.getSteamID64()};
			});

			this._send(EMsg.ClientAMGetPersonaNameHistory, {
				id_count: userSteamIDs.length,
				Ids: userSteamIDs
			}, (body) => {
				let ids = {};
				body.responses = body.responses || [];
				for (let i = 0; i < body.responses.length; i++) {
					if (body.responses[i].eresult != EResult.OK) {
						return reject(Helpers.eresultError(body.responses[i].eresult));
					}

					ids[body.responses[i].steamid.toString()] = (body.responses[i].names || []).map((name) => {
						name.name_since = new Date(name.name_since * 1000);
						return name;
					});
				}

				return resolve({users: ids});
			});
		});
	}

	/**
	 * Set a friend's private nickname.
	 * @param {(SteamID|string)} steamID
	 * @param {string} nickname
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	setNickname(steamID, nickname, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, (resolve, reject) => {
			steamID = Helpers.steamID(steamID);
			this._send(EMsg.AMClientSetPlayerNickname, {
				steamid: steamID.toString(),
				nickname
			}, (body) => {
				if (body.eresult != EResult.OK) {
					return reject(Helpers.eresultError(body.eresult));
				}

				// Worked!
				if (nickname.length == 0) {
					delete this.myNicknames[steamID.toString()];
				} else {
					this.myNicknames[steamID.toString()] = nickname;
				}

				return resolve();
			});
		});
	}

	/**
	 * Get the list of nicknames you've given to other users.
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	getNicknames(callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['nicknames'], callback, true, (resolve, reject) => {
			this._sendUnified('Player.GetNicknameList#1', {}, (body) => {
				let nicks = {};
				body.nicknames.forEach(player => nicks[SteamID.fromIndividualAccountID(player.accountid).getSteamID64()] = player.nickname);

				resolve({nicknames: nicks});

				this.emit('nicknameList', nicks);
				this.myNicknames = nicks;
			});
		});
	}

	/**
	 * Get the localization keys for rich presence for an app on Steam.
	 * @param {int} appID - The app you want rich presence localizations for
	 * @param {string} [language] - The full name of the language you want localizations for (e.g. "english" or "spanish"); defaults to language passed to constructor
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getAppRichPresenceLocalization(appID, language, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			let cacheKey = `${appID}_${language}`;
			let cache = this._richPresenceLocalization[cacheKey];
			if (cache && Date.now() - cache.timestamp < (1000 * 60 * 60)) {
				// Cache for 1 hour
				return resolve({tokens: cache.tokens});
			}

			if (typeof language == 'function') {
				callback = language;
				language = null;
			}

			language = language || this.options.language || 'english';

			this._sendUnified('Community.GetAppRichPresenceLocalization#1', {
				appid: appID,
				language
			}, (body) => {
				if (body.appid != appID) {
					return reject(new Error('Did not get localizations for requested app ' + appID + ' (' + body.appID + ')'));
				}

				let tokens = {};
				let foundLanguage = false;
				body.token_lists.forEach((list) => {
					if (list.language == language) {
						foundLanguage = true;
						list.tokens.forEach((token) => {
							tokens[token.name] = token.value;
						});
					}
				});

				if (!foundLanguage) {
					return reject(new Error('Did not get localizations for requested language ' + language));
				}

				if (Object.keys(tokens).length > 0) {
					this._richPresenceLocalization[cacheKey] = {
						timestamp: Date.now(),
						tokens
					};
				}

				return resolve({tokens});
			});
		});
	}

	/**
	 * Upload some rich presence data to Steam.
	 * @param {int} appid
	 * @param {{steam_display?, connect?}} richPresence
	 */
	uploadRichPresence(appid, richPresence) {
		// Maybe someday in the future we'll have a proper binary KV encoder. For now, just do it by hand.
		let buf = new ByteBuffer(1024, ByteBuffer.LITTLE_ENDIAN);
		buf.writeByte(0);
		buf.writeCString('RP');
		for (let i in richPresence) {
			if (!richPresence.hasOwnProperty(i)) {
				continue;
			}

			buf.writeByte(1); // type string
			buf.writeCString(i);
			buf.writeCString(richPresence[i]);
		}
		buf.writeByte(8); // end
		buf.writeByte(8); // end again

		this._send({
			// Header
			msg: EMsg.ClientRichPresenceUpload,
			proto: {routing_appid: appid}
		}, {
			// Request
			rich_presence_kv: buf.flip().toBuffer()
		});
	}

	/**
	 * Request rich presence data of one or more users for an appid.
	 * @param {int} appid - The appid to get rich presence data for
	 * @param {SteamID[]|string[]|SteamID|string} steamIDs - SteamIDs of users to request rich presence data for
	 * @param {string} [language] - Language to get localized strings in. Defaults to language passed to constructor.
	 * @param {function} [callback] - Called or resolved with 'users' property with each key being a SteamID and value being the rich presence response if received
	 * @return Promise
	 */
	requestRichPresence(appid, steamIDs, language, callback) {
		if (!Array.isArray(steamIDs)) {
			steamIDs = [steamIDs];
		}

		if (typeof language == 'function') {
			callback = language;
			language = null;
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			this._send({
				// Header
				msg: EMsg.ClientRichPresenceRequest,
				proto: {routing_appid: appid},
			}, {
				// Request
				steamid_request: steamIDs.map(sid => Helpers.steamID(sid).getSteamID64())
			}, async (body) => {
				// Response
				let response = {};
				body.rich_presence = body.rich_presence || [];
				for (let rp of body.rich_presence) {
					let kv = rp.rich_presence_kv;
					if (!kv || !rp.steamid_user) {
						continue;
					}

					try {
						let kvObj = BinaryKVParser.parse(kv); // This will throw in the event of there being no RP data (e.g. user not in game)
						if (kvObj && kvObj.RP) {
							response[rp.steamid_user] = {
								richPresence: kvObj.RP,
								localizedString: null,
							};
							// Do this separately as it will reject if it cannot localize
							response[rp.steamid_user].localizedString = await this._getRPLocalizedString(appid, kvObj.RP, language);
						}
					} catch (e) {
						// don't care, there's nothing here
					}
				}

				resolve({users: response});
			});
		});
	}

	/**
	 * Get the list of a user's owned apps.
	 * @param {SteamID|string} steamID - Either a SteamID object or a string that can parse into one
	 * @param {{includePlayedFreeGames?: boolean, filterAppids?: number[], includeFreeSub?: boolean}} [options]
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getUserOwnedApps(steamID, options, callback) {
		if (typeof options == 'function') {
			callback = options;
			options = {};
		}

		options = options || {};

		return new StdLib.Promises.timeoutCallbackPromise(10000, null, callback, false, (resolve, reject) => {
			steamID = Helpers.steamID(steamID);
			this._sendUnified('Player.GetOwnedGames#1', {
				steamid: steamID.toString(),
				include_appinfo: true,
				include_played_free_games: options.includePlayedFreeGames || false,
				appids_filter: options.filterAppids || undefined,
				include_free_sub: options.includeFreeSub || false
			}, (body, hdr) => {
				let err = Helpers.eresultError(hdr.proto);
				if (err) {
					return reject(err);
				}

				let response = {
					app_count: body.game_count,
					apps: body.games.map((app) => {
						if (app.img_icon_url) {
							app.img_icon_url = `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${app.appid}/${app.img_icon_url}.jpg`;
						}

						if (app.img_logo_url) {
							app.img_logo_url = `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${app.appid}/${app.img_logo_url}.jpg`;
						}

						return app;
					})
				};

				resolve(response);
			});
		});
	}

	/**
	 * Get a list of friends that play a specific app.
	 * @param {int} appID
	 * @param {function} [callback]
	 * @returns {Promise}
	 */
	getFriendsThatPlay(appID, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, (resolve, reject) => {
			let buf = ByteBuffer.allocate(8, ByteBuffer.LITTLE_ENDIAN);
			buf.writeUint64(appID);
			this._send(EMsg.ClientGetFriendsWhoPlayGame, buf.flip(), (body) => {
				let eresult = body.readUint32();
				let err = Helpers.eresultError(eresult);
				if (err) {
					return reject(err);
				}

				let steamIds = [];
				let responseAppid = body.readUint64().toString();
				let countFriends = body.readUint32().toString();

				if (responseAppid != appID) {
					return reject(new Error('AppID in response does not match request'));
				}

				for (let i = 0; i < countFriends; i++) {
					steamIds.push(new SteamID(body.readUint64().toString()));
				}

				return resolve({friends: steamIds});
			});
		});
	}

	/**
	 *
	 * @param {number} appid
	 * @param {object} tokens
	 * @param {string} [language]
	 * @returns {Promise}
	 * @protected
	 */
	_getRPLocalizedString(appid, tokens, language) {
		return new Promise(async (resolve, reject) => {
			if (!tokens.steam_display) {
				// Nothing to do here
				return reject();
			}

			let localizationTokens;
			try {
				localizationTokens = (await this.getAppRichPresenceLocalization(appid, language || this.options.language)).tokens;
				// Normalize all localization tokens to lowercase
				for (let i in localizationTokens) {
					localizationTokens[i.toLowerCase()] = localizationTokens[i];
				}
			} catch (ex) {
				// Oh well
				return reject(ex);
			}

			let rpTokens = JSON.parse(JSON.stringify(tokens)); // So we don't modify the original objects
			for (let i in rpTokens) {
				if (rpTokens.hasOwnProperty(i) && localizationTokens[rpTokens[i].toLowerCase()]) {
					rpTokens[i] = localizationTokens[rpTokens[i].toLowerCase()];
				}
			}

			let rpString = rpTokens.steam_display;
			while (true) {
				let newRpString = rpString;
				for (let i in rpTokens) {
					if (rpTokens.hasOwnProperty(i)) {
						newRpString = newRpString.replace(new RegExp('%' + i + '%', 'gi'), rpTokens[i]);
					}
				}

				(newRpString.match(/{#[^}]+}/g) || []).forEach((token) => {
					token = token.substring(1, token.length - 1);
					if (localizationTokens[token.toLowerCase()]) {
						newRpString = newRpString.replace(new RegExp('{' + token + '}', 'gi'), localizationTokens[token.toLowerCase()]);
					}
				});

				if (newRpString == rpString) {
					break;
				} else {
					rpString = newRpString;
				}
			}
			return resolve(rpString);
		});
	}

	/**
	 * @param {object} user
	 * @returns {Promise<UserPersona>}
	 * @protected
	 */
	_processUserPersona(user) {
		return new Promise((resolve) => {
			g_ProcessPersonaSemaphore.wait(async (release) => {
				try {
					if (typeof user.last_logoff === 'number') {
						user.last_logoff = new Date(user.last_logoff * 1000);
					}

					if (typeof user.last_logon === 'number') {
						user.last_logon = new Date(user.last_logon * 1000);
					}

					if (typeof user.last_seen_online === 'number') {
						user.last_seen_online = new Date(user.last_seen_online * 1000);
					}

					if (typeof user.avatar_hash === 'object' && (Buffer.isBuffer(user.avatar_hash) || ByteBuffer.isByteBuffer(user.avatar_hash))) {
						let hash = user.avatar_hash.toString('hex');

						// handle default avatar
						if (hash === '0000000000000000000000000000000000000000') {
							hash = 'fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb';
						}

						user.avatar_url_icon = `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/${hash.substring(0, 2)}/${hash}`;
						user.avatar_url_medium = `${user.avatar_url_icon}_medium.jpg`;
						user.avatar_url_full = `${user.avatar_url_icon}_full.jpg`;
						user.avatar_url_icon += '.jpg';
					}

					// only delete rich_presence_string if we have confirmation that the user isn't in-game
					if ((user.rich_presence && user.rich_presence.length == 0) || user.gameid === '0') {
						delete user.rich_presence_string;
						return resolve(user);
					}

					if (!user.rich_presence) {
						// if we don't have rich_presence data right now, there's nothing to parse
						return resolve(user);
					}

					let rpTokens = {};
					user.rich_presence.forEach((token) => {
						rpTokens[token.key] = token.value;
					});

					if (!rpTokens.steam_display) {
						// Nothing to do here
						return resolve(user);
					}

					try {
						user.rich_presence_string = await this._getRPLocalizedString(user.gameid, rpTokens);
					} catch (ex) {
						delete user.rich_presence_string;
					}

					return resolve(user);
				} finally {
					// always release the lock
					release();
				}
			});
		});
	}
}

function processInviteToken(userSteamId, token) {
	let friendCode = Helpers.createFriendCode(userSteamId);
	token.invite_link = `https://s.team/p/${friendCode}/${token.invite_token}`;
	token.time_created = token.time_created ? new Date(token.time_created * 1000) : null;
	token.invite_limit = token.invite_limit ? parseInt(token.invite_limit, 10) : null;
	token.invite_duration = token.invite_duration ? parseInt(token.invite_duration, 10) : null;
}

// Handlers

SteamUserBase.prototype._handlerManager.add(EMsg.ClientPersonaState, function(body) {
	body.friends.forEach((u) => {
		/**
		 * @type {Proto_CMsgClientPersonaState_Friend}
		 */
		let user = u;

		let sid = new SteamID(user.friendid.toString());
		let sid64 = sid.getSteamID64();
		delete user.friendid;

		if (!this.users[sid64]) {
			this.users[sid64] = {};
		} else {
			// Replace unknown data in the received object with already-known data
			for (let i in this.users[sid64]) {
				if (this.users[sid64].hasOwnProperty(i) && user.hasOwnProperty(i) && user[i] === null) {
					user[i] = this.users[sid64][i];
				}
			}
		}

		this._processUserPersona(user).then((processedUser) => {
			if (!this.users[sid64]) {
				// We must have logged off or disconnected between then and now
				return;
			}

			/**
			 * Emitted when we receive persona info about a user.
			 * You can also listen for user#steamid64 to get info only for a specific user.
			 *
			 * @event SteamUser#user
			 * @param {SteamID} steamID - The SteamID of the user
			 * @param {UserPersona} user - An object containing the user's persona info
			 */

			this._emitIdEvent('user', sid, processedUser);

			if (processedUser.gameid && processedUser.gameid != 0) {
				this._addAppToCache(processedUser.gameid);
			}

			for (let i in processedUser) {
				if (processedUser.hasOwnProperty(i) && processedUser[i] !== null) {
					this.users[sid64][i] = processedUser[i];
				}
			}
		});
	});
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientClanState, function(body) {
	let sid = new SteamID(body.steamid_clan.toString());
	let sid64 = sid.getSteamID64();
	delete body.steamid_clan;

	let i;
	if (!this.groups[sid64]) {
		this.groups[sid64] = body;
	} else {
		// Replace unknown data in the received object with already-known data
		for (i in this.groups[sid64]) {
			if (this.groups[sid64].hasOwnProperty(i) && body.hasOwnProperty(i) && body[i] === null) {
				body[i] = this.groups[sid64][i];
			}
		}
	}

	/**
	 * @typedef {object} GroupPersona
	 * @property {number} clan_account_flags
	 * @property {{clan_name: string, sha_avatar: Buffer}} name_info
	 * @property {{members: number, online: number, chatting: number, in_game: number, chat_room_members: number}} user_counts
	 * @property {{gid: string, event_time: number, headline: string, game_id: string, just_posted: boolean}[]} events
	 * @property {{gid: string, event_time: number, headline: string, game_id: string, just_posted: boolean}[]} announcements
	 * @property {boolean} chat_room_private
	 */

	/**
	 * Emitted when we receive info about a Steam group.
	 * You can also listen for group#steamid64 to get info only for a specific group.
	 *
	 * @event SteamUser#group
	 * @param {SteamID} steamID - The SteamID of the group
	 * @param {GroupPersona} group - An object containing the group's info
	 */

	this._emitIdEvent('group', sid, body);

	for (i in body) {
		if (body.hasOwnProperty(i) && body[i] !== null) {
			this.groups[sid64][i] = body[i];
		}
	}

	(body.events || []).forEach((event) => {
		if (!event.just_posted) {
			return;
		}

		/**
		 * Emitted when a new event is posted to a Steam group.
		 * You can also listen for groupEvent#steamid64 to get events only for a specific group.
		 *
		 * @event SteamUser#groupEvent
		 * @param {SteamID} steamID - The SteamID of the group
		 * @param {string} headline - The title of the event
		 * @param {Date} timestamp - The time when the event will start
		 * @param {string} gid - The event's GID
		 * @param {number} gameID - If this is an event for a game, this is the game's appid
		 */

		this._emitIdEvent('groupEvent', sid, event.headline, new Date(event.event_time * 1000), event.gid, event.game_id);
	});

	(body.announcements || []).forEach((announcement) => {
		if (!announcement.just_posted) {
			return;
		}

		/**
		 * Emitted when a new announcement is posted to a Steam group.
		 * You can also listen for groupAnnouncement#steamid64 to get announcements only for a specific group.
		 *
		 * @event SteamUser#groupAnnouncement
		 * @param {SteamID} steamID - The SteamID of the group
		 * @param {string} headline - The title of the announcement
		 * @param {string} gid - The announcement's GID
		 */

		this._emitIdEvent('groupAnnouncement', sid, announcement.headline, announcement.gid.toString());
	});
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientFriendsList, function(body) {
	(body.friends || []).forEach((relationship) => {
		let sid = new SteamID(relationship.ulfriendid.toString());
		let key = sid.type == SteamID.Type.CLAN ? 'myGroups' : 'myFriends';

		if (body.bincremental) {
			/**
			 * Emitted when a relationship with a Steam group changes. The relationship in myGroups is updated after this is emitted.
			 *
			 * @event SteamUser#groupRelationship
			 * @param {SteamID} steamID - The SteamID of the group
			 * @param {EFriendRelationship} relationship - Your new relationship with the group
			 */

			/**
			 * Emitted when a relationship with a Steam user changes. The relationship in myFriends is updated after this is emitted.
			 *
			 * @event SteamUser#friendRelationship
			 * @param {SteamID} steamID - The SteamID of the group
			 * @param {EFriendRelationship} relationship - Your new relationship with the user
			 */

			// This isn't an initial download of the friends list; something changed

			let previousRelationship = this[key][sid.getSteamID64()];
			if (typeof previousRelationship == 'undefined') {
				previousRelationship = EFriendRelationship.None;
			}

			if (relationship.efriendrelationship != previousRelationship) {
				this._emitIdEvent(
					key == 'myGroups' ? 'groupRelationship' : 'friendRelationship',
					sid,
					relationship.efriendrelationship,
					previousRelationship
				);
			}
		}

		// EFriendRelationship.None and EClanRelationship.None are both 0.
		if (relationship.efriendrelationship == EFriendRelationship.None) {
			delete this[key][sid.getSteamID64()];
		} else {
			this[key][sid.getSteamID64()] = relationship.efriendrelationship;
		}
	});

	if (!body.bincremental) {
		/**
		 * Emitted when our entire friends list is loaded.
		 *
		 * @event SteamUser#friendsList
		 */

		/**
		 * Emitted when our entire group list is loaded.
		 *
		 * @event SteamUser#groupList
		 */

		this.emit('friendsList');
		this.emit('groupList');

		// Request persona info for all our friends
		let friends = Object.keys(this.myFriends).filter(steamID => this.myFriends[steamID] == EFriendRelationship.Friend);
		this.getPersonas(friends, () => {
			process.nextTick(() => {
				this.emit('friendPersonasLoaded');
			});
		});
	}
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientFriendsGroupsList, function(body) {
	let groupList = {};

	body.friendGroups.forEach(function(group) {
		groupList[group.nGroupID] = {
			"name": group.strGroupName,
			"members": []
		};
	});

	body.memberships.forEach(function(friend) {
		let sid = new SteamID(friend.ulSteamID.toString());

		groupList[friend.nGroupID].members.push(sid);

		if (body.bincremental) {
			// For now it doesn't really fire, so can't really check on how to do remove / add stuff with an emit.
		}
	});

	if (!body.bincremental) {
		/**
		 * Emitted when our entire friends group list is loaded.
		 *
		 * @event SteamUser#friendsGroupList
		 */

		this.emit('friendsGroupList', groupList);
	}

	this.myFriendGroups = groupList;
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientPlayerNicknameList, function(body) {
	let myNicknames = JSON.parse(JSON.stringify(this.myNicknames)); // clone

	body.nicknames.forEach(function(user) {
		if (body.removal) {
			delete myNicknames[user.steamid];
		} else {
			myNicknames[user.steamid] = user.nickname;
		}
	});

	if (!body.incremental) {
		this.emit('nicknameList', myNicknames);
	}

	this.myNicknames = myNicknames;
});

SteamUserBase.prototype._handlerManager.add('PlayerClient.NotifyFriendNicknameChanged#1', function(body) {
	let sid = SteamID.fromIndividualAccountID(body.accountid);
	this.emit('nickname', sid, body.nickname || null);
	if (!body.nickname) {
		// removal
		delete this.myNicknames[sid.getSteamID64()];
	} else {
		this.myNicknames[sid.getSteamID64()] = body.nickname;
	}
});

module.exports = SteamUserFriends;
