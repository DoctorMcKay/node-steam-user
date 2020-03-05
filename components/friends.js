const ByteBuffer = require('bytebuffer');
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');
const SteamUser = require('../index.js');

let g_ProcessPersonaSemaphore = new StdLib.Concurrency.Semaphore();

/**
 * Set your persona online state and optionally name.
 * @param {EPersonaState} state - Your new online state
 * @param {string} [name] - Optional. Set a new profile name.
 */
SteamUser.prototype.setPersona = function(state, name) {
	this._send(SteamUser.EMsg.ClientChangeStatus, {
		"persona_state": state,
		"player_name": name
	});
};

/**
 * Set your current UI mode (displays next to your Steam online status in friends)
 * @param {EClientUIMode} mode - Your new UI mode
 */
SteamUser.prototype.setUIMode = function(mode) {
	this._send(SteamUser.EMsg.ClientCurrentUIMode, {"uimode": mode});
};

/**
 * Send (or accept) a friend invitiation.
 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to add, or a string which can parse into one.
 * @param {function} [callback] - Optional. Called with `err` and `name` parameters on completion.
 */
SteamUser.prototype.addFriend = function(steamID, callback) {
	return StdLib.Promises.callbackPromise(['personaName'], callback, true, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientAddFriend, {"steamid_to_add": Helpers.steamID(steamID).getSteamID64()}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			accept({
				"personaName": body.persona_name_added
			});
		});
	});
};

/**
 * Remove a friend from your friends list (or decline an invitiation)
 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to remove, or a string which can parse into one.
 */
SteamUser.prototype.removeFriend = function(steamID) {
	if (typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	this._send(SteamUser.EMsg.ClientRemoveFriend, {"friendid": steamID.getSteamID64()});
};

/**
 * Block all communication with a user.
 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to block, or a string which can parse into one.
 * @param {SteamUser~genericEResultCallback} [callback] - Optional. Called with an `err` parameter on completion.
 * @return {Promise}
 */
SteamUser.prototype.blockUser = function(steamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		if (typeof steamID === 'string') {
			steamID = new SteamID(steamID);
		}

		let buffer = ByteBuffer.allocate(17, ByteBuffer.LITTLE_ENDIAN);
		buffer.writeUint64(this.steamID.getSteamID64());
		buffer.writeUint64(steamID.getSteamID64());
		buffer.writeUint8(1);

		this._send(SteamUser.EMsg.ClientSetIgnoreFriend, buffer.flip(), (body) => {
			body.readUint64(); // unknown
			let err = Helpers.eresultError(body.readUint32());
			if (err) {
				return reject(err);
			} else {
				return accept();
			}
		});
	});
};

/**
 * Unblock all communication with a user.
 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to unblock, or a string which can parse into one.
 * @param {SteamUser~genericEResultCallback} [callback] - Optional. Called with an `err` parameter on completion.
 * @return {Promise}
 */
SteamUser.prototype.unblockUser = function(steamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		if (typeof steamID === 'string') {
			steamID = new SteamID(steamID);
		}

		let buffer = ByteBuffer.allocate(17, ByteBuffer.LITTLE_ENDIAN);
		buffer.writeUint64(this.steamID.getSteamID64());
		buffer.writeUint64(steamID.getSteamID64());
		buffer.writeUint8(0);

		this._send(SteamUser.EMsg.ClientSetIgnoreFriend, buffer.flip(), (body) => {
			body.readUint64(); // unknown
			let err = Helpers.eresultError(body.readUint32());
			if (err) {
				return reject(err);
			} else {
				return accept();
			}
		});
	});
};

/**
 * Create a new quick-invite link that can be used by any Steam user to directly add you as a friend.
 * @param {{inviteLimit?: int, inviteDuration?: int}} [options]
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.createQuickInviteLink = function(options, callback) {
	if (typeof options == 'function') {
		callback = options;
		options = {};
	}

	options = options || {};

	return StdLib.Promises.callbackPromise(null, callback, false, (resolve, reject) => {
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
			resolve({"token": body});
		})
	});
};

/**
 * Get a list of friend quick-invite links for your account.
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.listQuickInviteLinks = function(callback) {
	return StdLib.Promises.callbackPromise(null, callback, false, (resolve, reject) => {
		this._sendUnified("UserAccount.GetFriendInviteTokens#1", {}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}

			body.tokens.forEach((token) => processInviteToken(this.steamID, token));
			resolve(body);
		});
	});
};

function processInviteToken(userSteamId, token) {
	let friendCode = Helpers.createFriendCode(userSteamId);
	token.invite_link = `https://s.team/p/${friendCode}/${token.invite_token}`;
	token.time_created = token.time_created ? new Date(token.time_created * 1000) : null;
	token.invite_limit = token.invite_limit ? parseInt(token.invite_limit, 10) : null;
	token.invite_duration = token.invite_duration ? parseInt(token.invite_duration, 10) : null;
}

/**
 * Revoke an active quick-invite link.
 * @param {string} linkOrToken - Either the full link, or just the token from the link
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.revokeQuickInviteLink = function(linkOrToken, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		if (linkOrToken.includes('/')) {
			// It's a link
			let parts = linkOrToken.split('/');
			parts = parts.filter(part => !!part); // remove any trailing slash
			linkOrToken = parts[parts.length - 1];
		}

		this._sendUnified("UserAccount.RevokeFriendInviteToken#1", {
			"invite_token": linkOrToken
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}

			// No data
			resolve();
		});
	});
};

/**
 * Get the SteamID to whom a quick-invite link belongs.
 * @param {string} link
 * @returns {SteamID|null} - null if the link isn't well-formed
 */
SteamUser.prototype.getQuickInviteLinkSteamID = function(link) {
	let match = link.match(/^https?:\/\/s\.team\/p\/([^\/]+)\/([^\/]+)/);
	if (!match) {
		return null;
	}

	return Helpers.parseFriendCode(match[1]);
};

/**
 * Check whether a given quick-invite link is valid.
 * @param {string} link
 * @param {function} [callback]
 * @returns {Promise<{valid: boolean, steamid: SteamID, invite_duration?: int}>}
 */
SteamUser.prototype.checkQuickInviteLinkValidity = function(link, callback) {
	return StdLib.Promises.callbackPromise(null, callback, false, (resolve, reject) => {
		let match = link.match(/^https?:\/\/s\.team\/p\/([^\/]+)\/([^\/]+)/);
		if (!match) {
			return reject(new Error('Malformed quick-invite link'));
		}

		let steamID = Helpers.parseFriendCode(match[1]);
		let token = match[2];

		this._sendUnified("UserAccount.ViewFriendInviteToken#1", {
			"steamid": steamID.toString(),
			"invite_token": token
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
};

/**
 * Redeem a quick-invite link and add the sender to your friends list.
 * @param {string} link
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.redeemQuickInviteLink = function(link, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		let match = link.match(/^https?:\/\/s\.team\/p\/([^\/]+)\/([^\/]+)/);
		if (!match) {
			return reject(new Error('Malformed quick-invite link'));
		}

		let steamID = Helpers.parseFriendCode(match[1]);
		let token = match[2];

		this._sendUnified("UserAccount.RedeemFriendInviteToken#1", {
			"steamid": steamID.toString(),
			"invite_token": token
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}

			// No response data
			resolve();
		});
	});
};

/**
 * Requests information about one or more user profiles.
 * @param {(SteamID[]|string[])} steamids - An array of SteamID objects or strings which can parse into them.
 * @param {function} [callback] - Optional. Called with `err`, and an object whose keys are 64-bit SteamIDs as strings, and whose values are persona objects.
 * @return {Promise}
 */
SteamUser.prototype.getPersonas = function(steamids, callback) {
	return StdLib.Promises.callbackPromise(['personas'], callback, true, (accept, reject) => {
		const Flags = SteamUser.EClientPersonaStateFlag;
		let flags = Flags.PlayerName | Flags.QueryPort | Flags.SourceID | Flags.Presence |
			Flags.Metadata | Flags.LastSeen | Flags.ClanInfo | Flags.GameExtraInfo | Flags.GameDataBlob |
			Flags.ClanTag | Flags.Facebook;

		let ids = steamids.map((id) => {
			if (typeof id === 'string') {
				return (new SteamID(id)).getSteamID64();
			}

			return id.toString();
		});

		this._send(SteamUser.EMsg.ClientRequestFriendData, {
			"friends": ids,
			"persona_state_requested": flags
		});

		// Handle response
		let output = {};

		ids.forEach((id) => {
			this.once('user#' + id, receive);
		});

		function receive(sid, user) {
			let sid64 = sid.getSteamID64();
			output[sid64] = user;

			let index = ids.indexOf(sid64);
			if (index != -1) {
				ids.splice(index, 1);
			}

			if (ids.length === 0) {
				accept({"personas": output});
			}
		}
	});
};

/**
 * Gets the Steam Level of one or more Steam users.
 * @param {(SteamID[]|string[])} steamids - An array of SteamID objects, or strings which can parse into one.
 * @param {function} [callback] - Called on completion with `err`, and an object whose keys are 64-bit SteamIDs as strings, and whose values are Steam Level numbers.
 * @return {Promise}
 */
SteamUser.prototype.getSteamLevels = function(steamids, callback) {
	return StdLib.Promises.callbackPromise(['users'], callback, (accept, reject) => {
		let accountids = steamids.map((steamID) => {
			if (typeof steamID === 'string') {
				return (new SteamID(steamID)).accountid;
			} else {
				return steamID.accountid;
			}
		});

		this._send(SteamUser.EMsg.ClientFSGetFriendsSteamLevels, {"accountids": accountids}, (body) => {
			let output = {};

			let sid = new SteamID();
			sid.universe = SteamID.Universe.PUBLIC;
			sid.type = SteamID.Type.INDIVIDUAL;
			sid.instance = SteamID.Instance.DESKTOP;

			(body.friends || []).forEach((user) => {
				sid.accountid = user.accountid;
				output[sid.getSteamID64()] = user.level;
			});

			accept({"users": output});
		});
	});
};

/**
 * Get the level of your game badge (and also your Steam level).
 * @param {int} appid - AppID of game in question
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.getGameBadgeLevel = function(appid, callback) {
	return StdLib.Promises.callbackPromise(['steamLevel', 'regularBadgeLevel', 'foilBadgeLevel'], callback, (accept, reject) => {
		this._sendUnified("Player.GetGameBadgeLevels#1", {appid}, (body) => {
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

			accept({
				"playerLevel": body.player_level,
				"regularBadgeLevel": regular,
				"foilBadgeLevel": foil
			});
		});
	});
};

/**
 * Invites a user to a Steam group. Only send group invites in response to a user's request; sending automated group
 * invites is a violation of the Steam Subscriber Agreement and can get you banned.
 * @param {(SteamID|string)} userSteamID - The SteamID of the user you're inviting as a SteamID object, or a string that can parse into one
 * @param {(SteamID|string)} groupSteamID - The SteamID of the group you're inviting the user to as a SteamID object, or a string that can parse into one
 */
SteamUser.prototype.inviteToGroup = function(userSteamID, groupSteamID) {
	let buffer = ByteBuffer.allocate(17, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(Helpers.steamID(userSteamID).toString());
	buffer.writeUint64(Helpers.steamID(groupSteamID).toString());
	buffer.writeUint8(1); // unknown

	this._send(SteamUser.EMsg.ClientInviteUserToClan, buffer.flip());
};

/**
 * Respond to an incoming group invite.
 * @param {(SteamID|string)} groupSteamID - The group you were invited to, as a SteamID object or a string which can parse into one
 * @param {boolean} accept - true to join the group, false to ignore invitation
 */
SteamUser.prototype.respondToGroupInvite = function(groupSteamID, accept) {
	let buffer = ByteBuffer.allocate(9, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(Helpers.steamID(groupSteamID).toString());
	buffer.writeUint8(accept ? 1 : 0);

	this._send(SteamUser.EMsg.ClientAcknowledgeClanInvite, buffer.flip());
};

/**
 * Creates a friends group (or tag)
 * @param {string} groupName - The name to create the friends group with
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.createFriendsGroup = function(groupName, callback) {
	return StdLib.Promises.callbackPromise(['groupID'], callback, true, (accept, reject) => {
		this._send(SteamUser.EMsg.AMClientCreateFriendsGroup, {
			"groupname": groupName
		}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			this.myFriendGroups[body.groupid] = {
				name: groupName,
				members: []
			};

			return accept({"groupID": body.groupid});
		});
	});
};

/**
 * Deletes a friends group (or tag)
 * @param {int} groupID - The friends group id
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.deleteFriendsGroup = function(groupID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		this._send(SteamUser.EMsg.AMClientDeleteFriendsGroup, {
			"groupid": groupID
		}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			delete this.myFriendGroups[groupID];

			return accept();
		});
	});
};

/**
 * Rename a friends group (tag)
 * @param {int} groupID - The friends group id
 * @param {string} newName - The new name to update the friends group with
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.renameFriendsGroup = function(groupID, newName, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		this._send(SteamUser.EMsg.AMClientRenameFriendsGroup, {
			"groupid": groupID,
			"groupname": newName
		}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			this.myFriendGroups[groupID].name = newName;

			return accept();
		});
	});
};

/**
 * Add an user to friends group (tag)
 * @param {int} groupID - The friends group
 * @param {(SteamID|string)} userSteamID - The user to invite to the friends group with, as a SteamID object or a string which can parse into one
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.addFriendToGroup = function(groupID, userSteamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		let sid = Helpers.steamID(userSteamID);

		this._send(SteamUser.EMsg.AMClientAddFriendToGroup, {
			"groupid": groupID,
			"steamiduser": sid.getSteamID64()
		}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			this.myFriendGroups[groupID].members.push(sid);

			return accept();
		});
	});
};

/**
 * Remove an user to friends group (tag)
 * @param {int} groupID - The friends group
 * @param {(SteamID|string)} userSteamID - The user to remove from the friends group with, as a SteamID object or a string which can parse into one
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.removeFriendFromGroup = function(groupID, userSteamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		let sid = Helpers.steamID(userSteamID);

		this._send(SteamUser.EMsg.AMClientRemoveFriendFromGroup, {
			"groupid": groupID,
			"steamiduser": sid.getSteamID64()
		}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			let index = this.myFriendGroups[groupID].members.findIndex((element) => {
				return element.getSteamID64() === sid.getSteamID64();
			});

			if (index > -1) {
				this.myFriendGroups[groupID].members.splice(index, 1);
			}

			return accept();
		});
	});
};

/**
 * Get persona name history for one or more users.
 * @param {SteamID[]|string[]|SteamID|string} userSteamIDs - SteamIDs of users to request aliases for
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.getAliases = function(userSteamIDs, callback) {
	return StdLib.Promises.callbackPromise(['users'], callback, (accept, reject) => {
		if (!(userSteamIDs instanceof Array)) {
			userSteamIDs = [userSteamIDs];
		}

		userSteamIDs = userSteamIDs.map(Helpers.steamID).map((id) => {
			return {"steamid": id.getSteamID64()};
		});

		this._send(SteamUser.EMsg.ClientAMGetPersonaNameHistory, {
			"id_count": userSteamIDs.length,
			"Ids": userSteamIDs
		}, (body) => {
			let ids = {};
			body.responses = body.responses || [];
			for (let i = 0; i < body.responses.length; i++) {
				if (body.responses[i].eresult != SteamUser.EResult.OK) {
					return reject(Helpers.eresultError(body.responses[i].eresult));
				}

				ids[body.responses[i].steamid.toString()] = (body.responses[i].names || []).map((name) => {
					name.name_since = new Date(name.name_since * 1000);
					return name;
				});
			}

			return accept({"users": ids});
		});
	});
};

/**
 * Set a friend's private nickname.
 * @param {(SteamID|string)} steamID
 * @param {string} nickname
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.setNickname = function(steamID, nickname, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		steamID = Helpers.steamID(steamID);
		this._send(SteamUser.EMsg.AMClientSetPlayerNickname, {
			"steamid": steamID.toString(),
			"nickname": nickname
		}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				return reject(Helpers.eresultError(body.eresult));
			}

			// Worked!
			if (nickname.length == 0) {
				delete this.myNicknames[steamID.toString()];
			} else {
				this.myNicknames[steamID.toString()] = nickname;
			}

			return accept();
		});
	});
};

/**
 * Get the list of nicknames you've given to other users.
 * @param {function} [callback]
 * @return {Promise}
 */
SteamUser.prototype.getNicknames = function(callback) {
	return StdLib.Promises.callbackPromise(['nicknames'], callback, true, (accept, reject) => {
		this._sendUnified("Player.GetNicknameList#1", {}, (body) => {
			let nicks = {};
			body.nicknames.forEach(player => nicks[SteamID.fromIndividualAccountID(player.accountid).getSteamID64()] = player.nickname);

			accept({"nicknames": nicks});

			this.emit('nicknameList', nicks);
			this.myNicknames = nicks;
		});
	});
};

/**
 * Get the localization keys for rich presence for an app on Steam.
 * @param {int} appID - The app you want rich presence localizations for
 * @param {string} language - The full name of the language you want localizations for (e.g. "english" or "spanish")
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamUser.prototype.getAppRichPresenceLocalization = function(appID, language, callback) {
	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		this._sendUnified('Community.GetAppRichPresenceLocalization#1', {
			"appid": appID,
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
				this._richPresenceLocalization[appID] = {
					"timestamp": Date.now(),
					tokens
				};
			}

			return accept({tokens});
		});
	});
};

// Handlers

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientPersonaState, function(body) {
	body.friends.forEach((user) => {
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

		processUser(this, user).then((processedUser) => {
			/**
			 * Emitted when we receive persona info about a user.
			 * You can also listen for user#steamid64 to get info only for a specific user.
			 *
			 * @event SteamUser#user
			 * @param {SteamID} steamID - The SteamID of the user
			 * @param {Object} user - An object containing the user's persona info
			 */

			this._emitIdEvent('user', sid, processedUser);

			if (processedUser.gameid) {
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

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientClanState, function(body) {
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
	 * Emitted when we receive info about a Steam group.
	 * You can also listen for group#steamid64 to get info only for a specific group.
	 *
	 * @event SteamUser#group
	 * @param {SteamID} steamID - The SteamID of the group
	 * @param {Object} user - An object containing the group's info
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

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientFriendsList, function(body) {
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
			 * Emitted when a relationship with a Steam user changes. The relationship in myFriendsis updated after this is emitted.
			 *
			 * @event SteamUser#friendRelationship
			 * @param {SteamID} steamID - The SteamID of the group
			 * @param {EFriendRelationship} relationship - Your new relationship with the user
			 */

			// This isn't an initial download of the friends list, something changed
			this._emitIdEvent(key == 'myGroups' ? 'groupRelationship' : 'friendRelationship', sid, relationship.efriendrelationship);
		}

		if (relationship.efriendrelationship == SteamUser.EFriendRelationship.None) {
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
		let friends = Object.keys(this.myFriends).filter(steamID => this.myFriends[steamID] == SteamUser.EFriendRelationship.Friend);
		this.getPersonas(friends, () => {
			process.nextTick(() => {
				this.emit('friendPersonasLoaded');
			});
		});
	}
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientFriendsGroupsList, function(body) {
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

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientPlayerNicknameList, function(body) {
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

SteamUser.prototype._handlerManager.add('PlayerClient.NotifyFriendNicknameChanged#1', function(body) {
	let sid = SteamID.fromIndividualAccountID(body.accountid);
	this.emit('nickname', sid, body.nickname || null);
	if (!body.nickname) {
		// removal
		delete this.myNicknames[sid.getSteamID64()];
	} else {
		this.myNicknames[sid.getSteamID64()] = body.nickname;
	}
});

function processUser(steamUser, user) {
	return new Promise((accept) => {
		g_ProcessPersonaSemaphore.wait(async (release) => {
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
				if (hash === "0000000000000000000000000000000000000000") {
					hash = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
				}

				user.avatar_url_icon = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/" + hash.substring(0, 2) + "/" + hash;
				user.avatar_url_medium = user.avatar_url_icon + "_medium.jpg";
				user.avatar_url_full = user.avatar_url_icon + "_full.jpg";
				user.avatar_url_icon += ".jpg";
			}

			// only delete rich_presence_string if we have confirmation that the user isn't in-game
			if ((user.rich_presence && user.rich_presence.length == 0) || user.gameid === '0') {
				delete user.rich_presence_string;
				release();
				return accept(user);
			}

			if (!user.rich_presence) {
				// if we don't have rich_presence data right now, there's nothing to parse
				release();
				return accept(user);
			}

			let rpTokens = {};
			user.rich_presence.forEach((token) => {
				rpTokens[token.key] = token.value;
			});

			if (!rpTokens.steam_display) {
				// Nothing to do here
				release();
				return accept(user);
			}

			let localizationTokens;
			if (steamUser._richPresenceLocalization[user.gameid] && steamUser._richPresenceLocalization[user.gameid].timestamp > (Date.now() - (1000 * 60 * 60 * 24))) {
				// We already have localization
				localizationTokens = steamUser._richPresenceLocalization[user.gameid].tokens;
			} else {
				try {
					localizationTokens = (await steamUser.getAppRichPresenceLocalization(user.gameid, steamUser.options.language || "english")).tokens;
				} catch (ex) {
					// Oh well
					delete user.rich_presence_string;
					release();
					return accept(user);
				}
			}

			for (let i in rpTokens) {
				if (rpTokens.hasOwnProperty(i) && localizationTokens[rpTokens[i]]) {
					rpTokens[i] = localizationTokens[rpTokens[i]];
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
					if (localizationTokens[token]) {
						newRpString = newRpString.replace(new RegExp('{' + token + '}', 'gi'), localizationTokens[token]);
					}
				});

				if (newRpString == rpString) {
					break;
				} else {
					rpString = newRpString;
				}
			}

			user.rich_presence_string = rpString;
			release();
			return accept(user);
		});
	});
}
