var SteamUser = require('../index.js');
var Steam = require('steam');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');

/**
 * Set your persona online state and optionally name.
 * @param {EPersonaState} state - Your new online state
 * @param {string} [name] - Optional. Set a new profile name.
 */
SteamUser.prototype.setPersona = function(state, name) {
	this._send(Steam.EMsg.ClientChangeStatus, {
		"persona_state": state,
		"player_name": name
	});
};

/**
 * Send (or accept) a friend invitiation.
 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to add, or a string which can parse into one.
 */
SteamUser.prototype.addFriend = function(steamID) {
	if(typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	this._send(Steam.EMsg.ClientAddFriend, {"steamid_to_add": steamID.getSteamID64()});
};

/**
 * Remove a friend from your friends list (or decline an invitiation)
 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to remove, or a string which can parse into one.
 */
SteamUser.prototype.removeFriend = function(steamID) {
	if(typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	this._send(Steam.EMsg.ClientRemoveFriend, {"friendid": steamID.getSteamID64()});
};

/**
 * Block all communication with a user.
 * @param {(SteamID|string)} steamID - Either a SteamID object of the user to block, or a string which can parse into one.
 * @param {function} [callback] - Optional. Called with an `eresult` parameter on completion.
 */
SteamUser.prototype.blockUser = function(steamID, callback) {
	if(typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	var buffer = new ByteBuffer(17, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(this.steamID.getSteamID64());
	buffer.writeUint64(steamID.getSteamID64());
	buffer.writeUint8(1);

	this._send(Steam.EMsg.ClientSetIgnoreFriend, buffer.flip(), function(body) {
		if(!callback) {
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
	if(typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	var buffer = new ByteBuffer(17, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(this.steamID.getSteamID64());
	buffer.writeUint64(steamID.getSteamID64());
	buffer.writeUint8(0);

	this._send(Steam.EMsg.ClientSetIgnoreFriend, buffer.flip(), function(body) {
		if(!callback) {
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
	var Flags = Steam.EClientPersonaStateFlag;
	var flags = Flags.Status|Flags.PlayerName|Flags.QueryPort|Flags.SourceID|Flags.Presence|
		Flags.Metadata|Flags.LastSeen|Flags.ClanInfo|Flags.GameExtraInfo|Flags.GameDataBlob|
		Flags.ClanTag|Flags.Facebook;

	var ids = steamids.map(function(id) {
		if(typeof id === 'string') {
			return (new SteamID(id)).getSteamID64();
		}

		return id.toString();
	});

	this._send(Steam.EMsg.ClientRequestFriendData, {
		"friends": ids,
		"persona_state_requested": flags
	});

	if(callback) {
		var output = {};

		var self = this;
		ids.forEach(function(id) {
			self.once('user#' + id, receive);
		});

		function receive(sid, user) {
			var sid64 = sid.getSteamID64();
			output[sid64] = user;

			var index = ids.indexOf(sid64);
			if(index != -1) {
				ids.splice(index, 1);
			}

			if(ids.length === 0) {
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
		if(typeof steamID === 'string') {
			return (new SteamID(steamID)).accountid;
		} else {
			return steamID.accountid;
		}
	});

	this._send(Steam.EMsg.ClientFSGetFriendsSteamLevels, {"accountids": accountids}, function(body) {
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

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientPersonaState] = function(body) {
	var self = this;
	body.friends.forEach(function(user) {
		var sid = new SteamID(user.friendid.toString());
		var sid64 = sid.getSteamID64();
		delete user.friendid;

		var i;
		if(!self.users[sid64]) {
			self.users[sid64] = user;
			processUser(self.users[sid64]);
		} else {
			// Replace unknown data in the received object with already-known data
			for(i in self.users[sid64]) {
				if(self.users[sid64].hasOwnProperty(i) && user.hasOwnProperty(i) && user[i] === null) {
					user[i] = self.users[sid64][i];
				}
			}
		}

		/**
		 * Emitted when we receive persona info about a user.
		 * You can also listen for user#steamid64 to get info only for a specific user.
		 *
		 * @event SteamUser#user
		 * @param {SteamID} steamID - The SteamID of the user
		 * @param {Object} user - An object containing the user's persona info
		 */

		self._emitIdEvent('user', sid, user);;

		for(i in user) {
			if(user.hasOwnProperty(i) && user[i] !== null) {
				self.users[sid][i] = user[i];
			}
		}

		processUser(user);
	});
};

SteamUser.prototype._handlers[Steam.EMsg.ClientClanState] = function(body) {
	var sid = new SteamID(body.steamid_clan.toString());
	var sid64 = sid.getSteamID64();
	delete body.steamid_clan;

	var i;
	if(!this.groups[sid64]) {
		this.groups[sid64] = body;
	} else {
		// Replace unknown data in the received object with already-known data
		for(i in this.groups[sid64]) {
			if(this.groups[sid64].hasOwnProperty(i) && body.hasOwnProperty(i) && body[i] === null) {
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

	for(i in body) {
		if(body.hasOwnProperty(i) && body[i] !== null) {
			this.groups[sid64][i] = body[i];
		}
	}

	var self = this;
	(body.events || []).forEach(function(event) {
		if(!event.just_posted) {
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
		if(!announcement.just_posted) {
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

SteamUser.prototype._handlers[Steam.EMsg.ClientFriendsList] = function(body) {
	var self = this;
	(body.friends || []).forEach(function(relationship) {
		var sid = new SteamID(relationship.ulfriendid.toString());
		var key = sid.type == SteamID.Type.CLAN ? 'myGroups' : 'myFriends';

		if(body.bincremental) {
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

		if(relationship.efriendrelationship == Steam.EFriendRelationship.None) {
			delete self[key][sid.getSteamID64()];
		} else {
			self[key][sid.getSteamID64()] = relationship.efriendrelationship;
		}
	});

	if(!body.bincremental) {
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
	}
};

SteamUser.prototype._handlers[Steam.EMsg.ClientFriendsGroupsList] = function(body) {
	var groupList = {};

	body.friendGroups.forEach(function (group) {
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

function processUser(user) {
	if(typeof user.gameid === 'object' && user.gameid !== null) {
		user.gameid = user.gameid.toNumber();
	}

	if(typeof user.last_logoff === 'number') {
		user.last_logoff = new Date(user.last_logoff * 1000);
	}

	if(typeof user.last_logon === 'number') {
		user.last_logon = new Date(user.last_logon * 1000);
	}
}
