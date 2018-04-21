var SteamUser = require('../index.js');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');
var Helpers = require('./helpers.js');

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
	this._send(SteamUser.EMsg.ClientAddFriend, {"steamid_to_add": Helpers.steamID(steamID).getSteamID64()}, function(body) {
		if (!callback) {
			return;
		}

		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		callback(null, body.persona_name_added);
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
 * @param {function} [callback] - Optional. Called with an `eresult` parameter on completion.
 */
SteamUser.prototype.blockUser = function(steamID, callback) {
	if (typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	var buffer = new ByteBuffer(17, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(this.steamID.getSteamID64());
	buffer.writeUint64(steamID.getSteamID64());
	buffer.writeUint8(1);

	this._send(SteamUser.EMsg.ClientSetIgnoreFriend, buffer.flip(), function(body) {
		if (!callback) {
			return; // ignore
		}

		body.readUint64(); // unknown
		callback(body.readUint32());
	});
};

/**
 * Unblock all communication with a user.
 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to unblock, or a string which can parse into one.
 * @param {function} [callback] - Optional. Called with an `eresult` parameter on completion.
 */
SteamUser.prototype.unblockUser = function(steamID, callback) {
	if (typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	var buffer = new ByteBuffer(17, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(this.steamID.getSteamID64());
	buffer.writeUint64(steamID.getSteamID64());
	buffer.writeUint8(0);

	this._send(SteamUser.EMsg.ClientSetIgnoreFriend, buffer.flip(), function(body) {
		if (!callback) {
			return; // ignore
		}

		body.readUint64(); // unknown
		callback(body.readUint32());
	});
};

/**
 * Requests information about one or more user profiles.
 * @param {(SteamID[]|string[])} steamids - An array of SteamID objects or strings which can parse into them.
 * @param {function} [callback] - Optional. Called with an object whose keys are 64-bit SteamIDs as strings, and whose values are persona objects.
 */
SteamUser.prototype.getPersonas = function(steamids, callback) {
	var Flags = SteamUser.EClientPersonaStateFlag;
	var flags = Flags.Status | Flags.PlayerName | Flags.QueryPort | Flags.SourceID | Flags.Presence |
		Flags.Metadata | Flags.LastSeen | Flags.ClanInfo | Flags.GameExtraInfo | Flags.GameDataBlob |
		Flags.ClanTag | Flags.Facebook;

	var ids = steamids.map(function(id) {
		if (typeof id === 'string') {
			return (new SteamID(id)).getSteamID64();
		}

		return id.toString();
	});

	this._send(SteamUser.EMsg.ClientRequestFriendData, {
		"friends": ids,
		"persona_state_requested": flags
	});

	if (callback) {
		var output = {};

		var self = this;
		ids.forEach(function(id) {
			self.once('user#' + id, receive);
		});

		function receive(sid, user) {
			var sid64 = sid.getSteamID64();
			output[sid64] = user;

			var index = ids.indexOf(sid64);
			if (index != -1) {
				ids.splice(index, 1);
			}

			if (ids.length === 0) {
				callback(output);
			}
		}
	}
};

/**
 * Gets the Steam Level of one or more Steam users.
 * @param {(SteamID[]|string[])} steamids - An array of SteamID objects, or strings which can parse into one.
 * @param {function} callback - Called on completion with an object whose keys are 64-bit SteamIDs as strings, and whose values are Steam Level numbers.
 */
SteamUser.prototype.getSteamLevels = function(steamids, callback) {
	var accountids = steamids.map(function(steamID) {
		if (typeof steamID === 'string') {
			return (new SteamID(steamID)).accountid;
		} else {
			return steamID.accountid;
		}
	});

	this._send(SteamUser.EMsg.ClientFSGetFriendsSteamLevels, {"accountids": accountids}, function(body) {
		var output = {};

		var sid = new SteamID();
		sid.universe = SteamID.Universe.PUBLIC;
		sid.type = SteamID.Type.INDIVIDUAL;
		sid.instance = SteamID.Instance.DESKTOP;

		(body.friends || []).forEach(function(user) {
			sid.accountid = user.accountid;
			output[sid.getSteamID64()] = user.level;
		});

		callback(output);
	});
};

SteamUser.prototype.getGameBadgeLevel = function(appid, callback) {
	this._sendUnified("Player.GetGameBadgeLevels#1", {"appid": appid}, false, function(body) {
		var regular = 0;
		var foil = 0;

		(body.badges || []).forEach(function(badge) {
			if (badge.series != 1) {
				return;
			}

			if (badge.border_color == 0) {
				regular = badge.level;
			} else if (badge.border_color == 1) {
				foil = badge.level;
			}
		});

		callback(null, body.player_level, regular, foil);
	});
};

/**
 * Invites a user to a Steam group. Only send group invites in response to a user's request; sending automated group
 * invites is a violation of the Steam Subscriber Agreement and can get you banned.
 * @param {(SteamID|string)} userSteamID - The SteamID of the user you're inviting as a SteamID object, or a string that can parse into one
 * @param {(SteamID|string)} groupSteamID - The SteamID of the group you're inviting the user to as a SteamID object, or a string that can parse into one
 */
SteamUser.prototype.inviteToGroup = function(userSteamID, groupSteamID) {
	var buffer = new ByteBuffer(17, ByteBuffer.LITTLE_ENDIAN);
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
	var buffer = new ByteBuffer(9, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(Helpers.steamID(groupSteamID).toString());
	buffer.writeUint8(accept ? 1 : 0);

	this._send(SteamUser.EMsg.ClientAcknowledgeClanInvite, buffer.flip());
};

/**
 * Creates a friends group (or tag)
 * @param {string} groupName - The name to create the friends group with
 * @param {function} callback 
 */
SteamUser.prototype.createFriendsGroup = function (groupName, callback) {
	this._send(SteamUser.EMsg.AMClientCreateFriendsGroup, {
		"groupname": groupName
	}, (body) => {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		this.myFriendGroups[body.groupid] = {
			name: groupName,
			members: []
		};

		callback(null, body.groupid);
	});
};

/**
 * Deletes a friends group (or tag)
 * @param {int} groupID - The friends group id
 * @param {function} callback 
 */
SteamUser.prototype.deleteFriendsGroup = function (groupID, callback) {
	this._send(SteamUser.EMsg.AMClientDeleteFriendsGroup, {
		"groupid": groupID
	}, (body) => {
		if (body.eresult != SteamUser.EResult.OK) {
			if (callback) {
				callback(Helpers.eresultError(body.eresult));
			}

			return;
		}

		delete this.myFriendGroups[groupID];

		if (callback) {
			callback(null);
		}
	});
};

/**
 * Rename a friends group (tag)
 * @param {int} groupID - The friends group id 
 * @param {string} newName - The new name to update the friends group with
 */
SteamUser.prototype.renameFriendsGroup = function (groupID, newName, callback) {
	this._send(SteamUser.EMsg.AMClientRenameFriendsGroup, {
		"groupid": groupID,
		"groupname": newName
	}, (body) => {
		if (body.eresult != SteamUser.EResult.OK) {
			if (callback) {
				callback(Helpers.eresultError(body.eresult));
			}

			return;
		}

		this.myFriendGroups[groupID].name = newName;

		if (callback) {
			callback(null);
		}
	});
};

/**
 * Add an user to friends group (tag)
 * @param {int} groupID - The friends group
 * @param {(SteamID|string)} userSteamID - The user to invite to the friends group with, as a SteamID object or a string which can parse into one
 */
SteamUser.prototype.addFriendToGroup = function (groupID, userSteamID, callback) {
	var sid = Helpers.steamID(userSteamID);

	this._send(SteamUser.EMsg.AMClientAddFriendToGroup, {
		"groupid": groupID,
		"steamiduser": sid.getSteamID64()
	}, (body) => {
		if (body.eresult != SteamUser.EResult.OK) {
			if (callback) {
				callback(Helpers.eresultError(body.eresult));
			}

			return;
		}

		this.myFriendGroups[groupID].members.push(sid);

		if (callback) {
			callback(null);
		}
	});
};

/**
 * Remove an user to friends group (tag)
 * @param {int} groupID - The friends group
 * @param {(SteamID|string)} userSteamID - The user to remove from the friends group with, as a SteamID object or a string which can parse into one
 */
SteamUser.prototype.removeFriendFromGroup = function (groupID, userSteamID, callback) {
	var sid = Helpers.steamID(userSteamID);
	
	this._send(SteamUser.EMsg.AMClientRemoveFriendFromGroup, {
		"groupid": groupID,
		"steamiduser": sid.getSteamID64()
	}, (body) => {
		if (body.eresult != SteamUser.EResult.OK) {
			if (callback) {
				callback(Helpers.eresultError(body.eresult));
			}

			return;
		}

		var index = this.myFriendGroups[groupID].members.findIndex((element) => {
			return element.getSteamID64() === sid.getSteamID64();
		});

		if (index > -1) {
			this.myFriendGroups[groupID].members.splice(index, 1);
		}

		if (callback) {
			callback(null);
		}
	});
}

/**
 * Get persona name history for one or more users.
 * @param {{SteamID[]|string[]|SteamID|string}} userSteamIDs - SteamIDs of users to request aliases for
 * @param {function} callback
 */
SteamUser.prototype.getAliases = function(userSteamIDs, callback) {
	if (!(userSteamIDs instanceof Array)) {
		userSteamIDs = [userSteamIDs];
	}

	userSteamIDs = userSteamIDs.map(Helpers.steamID).map(function(id) {
		return {"steamid": id.getSteamID64()};
	});

	this._send(SteamUser.EMsg.ClientAMGetPersonaNameHistory, {
		"id_count": userSteamIDs.length,
		"Ids": userSteamIDs
	}, function(body) {
		var ids = {};
		body.responses = body.responses || [];
		for (var i = 0; i < body.responses.length; i++) {
			if (body.responses[i].eresult != SteamUser.EResult.OK) {
				callback(Helpers.eresultError(body.responses[i].eresult));
				return;
			}

			ids[body.responses[i].steamid.toString()] = (body.responses[i].names || []).map(function(name) {
				name.name_since = new Date(name.name_since * 1000);
				return name;
			});
		}

		callback(null, ids);
	});
};

SteamUser.prototype.setNickname = function(steamID, nickname, callback) {
	steamID = Helpers.steamID(steamID);
	var self = this;
	this._send(SteamUser.EMsg.AMClientSetPlayerNickname, {
		"steamid": steamID.toString(),
		"nickname": nickname
	}, function(body) {
		if (body.eresult != SteamUser.EResult.OK) {
			if (callback) {
				callback(Helpers.eresultError(body.eresult));
			}

			return;
		}

		// Worked!
		if (nickname.length == 0) {
			delete self.myNicknames[steamID.toString()];
		} else {
			self.myNicknames[steamID.toString()] = nickname;
		}

		if (callback) {
			callback(null);
		}
	});
};

SteamUser.prototype.getNicknames = function(callback) {
	this._sendUnified("Player.GetNicknameList#1", {}, false, (body) => {
		var nicks = {};
		body.nicknames.forEach(player => nicks[SteamID.fromIndividualAccountID(player.accountid).getSteamID64()] = player.nickname);

		if (callback) {
			callback(null, nicks);
		}

		this.emit('nicknameList', nicks);
		this.myNicknames = nicks;
	});
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientPersonaState] = function(body) {
	var self = this;
	body.friends.forEach(function(user) {
		var sid = new SteamID(user.friendid.toString());
		var sid64 = sid.getSteamID64();
		delete user.friendid;

		var i;
		if (!self.users[sid64]) {
			self.users[sid64] = user;
			processUser(self.users[sid64]);
		} else {
			// Replace unknown data in the received object with already-known data
			for (i in self.users[sid64]) {
				if (self.users[sid64].hasOwnProperty(i) && user.hasOwnProperty(i) && user[i] === null) {
					user[i] = self.users[sid64][i];
				}
			}
		}

		processUser(user);

		/**
		 * Emitted when we receive persona info about a user.
		 * You can also listen for user#steamid64 to get info only for a specific user.
		 *
		 * @event SteamUser#user
		 * @param {SteamID} steamID - The SteamID of the user
		 * @param {Object} user - An object containing the user's persona info
		 */

		self._emitIdEvent('user', sid, user);

		if (user.gameid) {
			self._addAppToCache(user.gameid);
		}

		for (i in user) {
			if (user.hasOwnProperty(i) && user[i] !== null) {
				self.users[sid][i] = user[i];
			}
		}
	});
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientClanState] = function(body) {
	var sid = new SteamID(body.steamid_clan.toString());
	var sid64 = sid.getSteamID64();
	delete body.steamid_clan;

	var i;
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

	var self = this;
	(body.events || []).forEach(function(event) {
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

		self._emitIdEvent('groupEvent', sid, event.headline, new Date(event.event_time * 1000), event.gid.toString(), event.game_id.toNumber());
	});

	(body.announcements || []).forEach(function(announcement) {
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

		self._emitIdEvent('groupAnnouncement', sid, announcement.headline, announcement.gid.toString());
	});
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientFriendsList] = function(body) {
	var self = this;
	(body.friends || []).forEach(function(relationship) {
		var sid = new SteamID(relationship.ulfriendid.toString());
		var key = sid.type == SteamID.Type.CLAN ? 'myGroups' : 'myFriends';

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
			self._emitIdEvent(key == 'myGroups' ? 'groupRelationship' : 'friendRelationship', sid, relationship.efriendrelationship);
		}

		if (relationship.efriendrelationship == SteamUser.EFriendRelationship.None) {
			delete self[key][sid.getSteamID64()];
		} else {
			self[key][sid.getSteamID64()] = relationship.efriendrelationship;
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
		var friends = Object.keys(this.myFriends).filter(function(steamID) { return self.myFriends[steamID] == SteamUser.EFriendRelationship.Friend; });
		self.getPersonas(friends, function() {
			process.nextTick(function() {
				self.emit('friendPersonasLoaded');
			});
		});
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientFriendsGroupsList] = function(body) {
	var groupList = {};

	body.friendGroups.forEach(function(group) {
		groupList[group.nGroupID] = {
			"name": group.strGroupName,
			"members": []
		};
	});

	body.memberships.forEach(function(friend) {
		var sid = new SteamID(friend.ulSteamID.toString());

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
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientPlayerNicknameList] = function(body) {
	var myNicknames = JSON.parse(JSON.stringify(this.myNicknames)); // clone

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
};

SteamUser.prototype._handlers['PlayerClient.NotifyFriendNicknameChanged#1'] = function(body) {
	var sid = SteamID.fromIndividualAccountID(body.accountid);
	this.emit('nickname', sid, body.nickname || null);
	if (!body.nickname) {
		// removal
		delete this.myNicknames[sid.getSteamID64()];
	} else {
		this.myNicknames[sid.getSteamID64()] = body.nickname;
	}
};

function processUser(user) {
	if (typeof user.gameid === 'object' && user.gameid !== null) {
		user.gameid = user.gameid.toNumber();
	}

	if (typeof user.last_logoff === 'number') {
		user.last_logoff = new Date(user.last_logoff * 1000);
	}

	if (typeof user.last_logon === 'number') {
		user.last_logon = new Date(user.last_logon * 1000);
	}

	if (typeof user.avatar_hash === 'object' && (Buffer.isBuffer(user.avatar_hash) || ByteBuffer.isByteBuffer(user.avatar_hash))) {
		var hash = user.avatar_hash.toString('hex');

		// handle default avatar
		if (hash === "0000000000000000000000000000000000000000") {
			hash = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
		}

		user.avatar_url_icon = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/" + hash.substring(0, 2) + "/" + hash;
		user.avatar_url_medium = user.avatar_url_icon + "_medium.jpg";
		user.avatar_url_full = user.avatar_url_icon + "_full.jpg";
		user.avatar_url_icon += ".jpg";
	}
}
