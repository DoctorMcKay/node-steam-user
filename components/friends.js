var SteamUser = require('../index.js');
var Steam = require('steam');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');

// name is optional
SteamUser.prototype.setPersona = function(state, name) {
	this._send(Steam.EMsg.ClientChangeStatus, {
		"persona_state": state,
		"player_name": name
	});
};

SteamUser.prototype.addFriend = function(steamID) {
	if(typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	this._send(Steam.EMsg.ClientAddFriend, {"steamid_to_add": steamID.getSteamID64()});
};

SteamUser.prototype.removeFriend = function(steamID) {
	if(typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	this._send(Steam.EMsg.ClientRemoveFriend, {"friendid": steamID.getSteamID64()});
};

SteamUser.prototype.blockUser = function(steamID, block, callback) {
	if(typeof steamID === 'string') {
		steamID = new SteamID(steamID);
	}

	var buffer = new ByteBuffer(17, ByteBuffer.LITTLE_ENDIAN);
	buffer.writeUint64(this.steamID.getSteamID64());
	buffer.writeUint64(steamID.getSteamID64());
	buffer.writeUint8(block ? 1 : 0);

	this._send(Steam.EMsg.ClientSetIgnoreFriend, buffer.flip(), function(body) {
		if(!callback) {
			return; // ignore
		}

		body.readUint64(); // unknown
		callback(body.readUint32());
	});
};

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

		if(!self.users[sid64]) {
			self.users[sid64] = user;
			processUser(self.users[sid64]);
		}

		self.emit('user', sid, user);
		self.emit('user#' + sid64, sid, user);

		for(var i in user) {
			if(user.hasOwnProperty(i)) {
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

	if(!this.groups[sid64]) {
		this.groups[sid64] = body;
	}

	this.emit('group', sid, body);
	this.emit('group#' + sid64, sid, body);

	for(var i in body) {
		if(body.hasOwnProperty(i)) {
			this.groups[sid64][i] = body[i];
		}
	}

	var self = this;
	(body.events || []).forEach(function(event) {
		if(!event.just_posted) {
			return;
		}

		self.emit('groupEvent', sid, event.headline, new Date(event.event_time * 1000), event.gid.toString(), event.game_id.toNumber());
		self.emit('groupEvent#' + sid64, sid, event.headline, new Date(event.event_time * 1000), event.gid.toString(), event.game_id.toNumber());
	});

	(body.announcements || []).forEach(function(announcement) {
		if(!announcement.just_posted) {
			return;
		}

		self.emit('groupAnnouncement', sid, announcement.headline, announcement.gid.toString());
		self.emit('groupAnnouncement#' + sid64, sid, announcement.headline, announcement.gid.toString());
	});
};

SteamUser.prototype._handlers[Steam.EMsg.ClientFriendsList] = function(body) {
	var self = this;
	(body.friends || []).forEach(function(relationship) {
		var sid = new SteamID(relationship.ulfriendid);
		var key = sid.type == SteamID.Type.CLAN ? 'myGroups' : 'myFriends';

		if(body.bincremental) {
			// This isn't an initial download of the friends list, something changed
			self.emit(key == 'myGroups' ? 'groupRelationship' : 'friendRelationship', sid, relationship.efriendrelationship);
		}

		if(relationship.efriendrelationship == Steam.EFriendRelationship.None) {
			delete self[key][sid.getSteamID64()];
		} else {
			self[key][sid.getSteamID64()] = relationship.efriendrelationship;
		}
	});

	if(!body.bincremental) {
		this.emit('friendsList');
		this.emit('groupList');
	}
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
