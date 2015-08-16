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
