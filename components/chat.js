var SteamUser = require('../index.js');
var Steam = require('steam');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');
var Helpers = require('./helpers.js');

SteamUser.prototype.chatMessage = SteamUser.prototype.chatMsg = function(recipient, message, type) {
	recipient = Helpers.steamID(recipient);

	type = type || Steam.EChatEntryType.ChatMsg;

	if([SteamID.Type.CLAN, SteamID.Type.CHAT].indexOf(recipient.type) != -1) {
		// It's a chat message
		var msg = new ByteBuffer(8 + 8 + 4 + Buffer.byteLength(message) + 1, ByteBuffer.LITTLE_ENDIAN);
		msg.writeUint64(this.steamID.getSteamID64()); // steamIdChatter
		msg.writeUint64(toChatID(recipient).getSteamID64()); // steamIdChatRoom
		msg.writeUint32(type); // chatMsgType
		msg.writeCString(message);
		this._send(Steam.EMsg.ClientChatMsg, msg.flip());
	} else {
		// It's a friend message
		var payload = new ByteBuffer(Buffer.byteLength(message) + 1, ByteBuffer.LITTLE_ENDIAN);
		payload.writeCString(message);

		this._send(Steam.EMsg.ClientFriendMsg, {
			"steamid": recipient.getSteamID64(),
			"message": payload.flip(),
			"chat_entry_type": type
		});
	}
};

SteamUser.prototype.chatTyping = function(recipient) {
	this.chatMessage(recipient, "", Steam.EChatEntryType.Typing);
};

SteamUser.prototype.joinChat = function(steamID) {
	var msg = new ByteBuffer(8, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	this._send(Steam.EMsg.ClientJoinChat, msg.flip());
};

SteamUser.prototype.leaveChat = function(steamID) {
	var msg = new ByteBuffer(32, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint32(Steam.EChatInfoType.StateChange); // type
	msg.writeUint64(this.steamID.getSteamID64());
	msg.writeUint32(Steam.EChatMemberStateChange.Left);
	msg.writeUint64(this.steamID.getSteamID64());
	this._send(Steam.EMsg.ClientChatMemberInfo, msg.flip());

	steamID = Helpers.steamID(steamID);

	delete this.chats[steamID.getSteamID64()];
};

SteamUser.prototype.lockChat = function(steamID, lock) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(lock ? Steam.EChatAction.LockChat : Steam.EChatAction.UnlockChat);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.setChatModerated = function(steamID, moderated) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(moderated ? Steam.EChatAction.SetModerated : Steam.EChatAction.SetUnmoderated);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.kickFromChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(chatID).getSteamID64()); // steamIdChat
	msg.writeUint64(userID.getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(Steam.EChatAction.Kick);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.banFromChat = function(chatID, userID, ban) {
	userID = Helpers.steamID(userID);

	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(chatID).getSteamID64()); // steamIdChat
	msg.writeUint64(userID.getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(ban ? Steam.EChatAction.Ban : Steam.EChatAction.UnBan);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.inviteToChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	this._send(Steam.EMsg.ClientChatInvite, {
		"steam_id_invited": userID.getSteamID64(),
		"steam_id_chat": toChatID(chatID).getSteamID64()
	});
};

// TODO: Ability to create chats

// Handlers

SteamUser.prototype._handlers[Steam.EMsg.ClientFriendMsgIncoming] = function(body) {
	var senderID = new SteamID(body.steamid_from.toString());
	var message = body.message.readCString();

	switch(body.chat_entry_type) {
		case Steam.EChatEntryType.ChatMsg:
			this.emit('friendMessage', senderID, message);
			this.emit('friendMessage#' + senderID.getSteamID64(), senderID, message);
			break;

		case Steam.EChatEntryType.Typing:
			this.emit('friendTyping', senderID);
			this.emit('friendTyping#' + senderID.getSteamID64(), senderID);
			break;
	}
};

SteamUser.prototype._handlers[Steam.EMsg.ClientFriendMsgEchoToSender] = function(body) {
	var recipientID = new SteamID(body.steamid_from.toString());
	var message = body.message.readCString();

	switch(body.chat_entry_type) {
		case Steam.EChatEntryType.ChatMsg:
			this.emit('friendMessageEcho', recipientID, message);
			this.emit('friendMessageEcho#' + recipientID.getSteamID64(), recipientID, message);
			break;

		case Steam.EChatEntryType.Typing:
			this.emit('friendTypingEcho', recipientID);
			this.emit('friendTypingEcho#' + recipientID.getSteamID64(), recipientID);
			break;
	}
};

SteamUser.prototype._handlers[Steam.EMsg.ClientChatMsg] = function(body) {
	var chatter = new SteamID(body.readUint64().toString());
	var room = fromChatID(body.readUint64());
	var entryType = body.readUint32();
	var message = body.readCString();

	if(entryType != Steam.EChatEntryType.ChatMsg) {
		// Not sure what kind of chat entry types are possible for chat rooms...
		return;
	}

	this.emit('chatMessage', room, chatter, message);
	this.emit('chatMessage#' + room.getSteamID64(), room, chatter, message);
	this.emit('chatMessage#' + room.getSteamID64() + '#' + chatter.getSteamID64(), room, chatter, message);
};

SteamUser.prototype._handlers[Steam.EMsg.ClientChatInvite] = function(body) {
	this.emit('chatInvite', fromChatID(body.steam_id_chat), body.chat_name, new SteamID(body.steam_id_patron.toString()));
};

// Private functions

/**
 * If steamID is a clan ID, converts to the appropriate chat ID. Otherwise, returns it untouched.
 * @param SteamID steamID
 * @returns SteamID
 */
function toChatID(steamID) {
	steamID = Helpers.steamID(steamID);

	if(steamID.type == SteamID.Type.CLAN) {
		steamID.type = SteamID.Type.CHAT;
		steamID.instance |= SteamID.ChatInstanceFlags.Clan;
	}

	return steamID;
}

/**
 * If steamID is a clan chat ID, converts to the appropriate clan ID. Otherwise, returns it untouched.
 * @param SteamID steamID
 * @returns SteamID
 */
function fromChatID(steamID) {
	steamID = Helpers.steamID(steamID);

	if(steamID.type == SteamID.Type.CHAT && steamID.instance & SteamID.ChatInstanceFlags.Clan) {
		steamID.type = SteamID.Type.CLAN;
		steamID.instance &= ~SteamID.ChatInstanceFlags.Clan;
	}

	return steamID;
}
