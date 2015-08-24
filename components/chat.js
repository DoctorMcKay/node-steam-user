var SteamUser = require('../index.js');
var Steam = require('steam');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');
var BinaryKVParser = require('binarykvparser');
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

/**
 * Requests chat history from Steam with a particular user. Also gets unread offline messages.
 * @param steamID SteamID The SteamID of the other user with whom you're requesting history
 * @param callback function An optional callback to be invoked when the response is received
 */
SteamUser.prototype.getChatHistory = function(steamID, callback) {
	steamID = Helpers.steamID(steamID);
	var sid64 = steamID.getSteamID64();

	this._send(Steam.EMsg.ClientFSGetFriendMessageHistory, {
		"steamid": sid64
	});

	if(callback) {
		this.once('chatHistory#' + sid64, function(steamID, success, messages) {
			callback(success, messages);
		});
	}
};

SteamUser.prototype.joinChat = function(steamID, callback) {
	var msg = new ByteBuffer(8, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	this._send(Steam.EMsg.ClientJoinChat, msg.flip());

	if(callback) {
		this.once('chatEnter#' + Helpers.steamID(steamID).getSteamID64(), function(chatID, result) {
			callback(result);
		});
	}
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

SteamUser.prototype.setChatPrivate = function(steamID) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(Steam.EChatAction.LockChat);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.setChatPublic = function(steamID) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(Steam.EChatAction.UnlockChat);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.setChatOfficersOnly = function(steamID, moderated) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(Steam.EChatAction.SetModerated);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.unsetChatOfficersOnly = function(steamID, moderated) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(Steam.EChatAction.SetUnmoderated);
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

SteamUser.prototype.banFromChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(chatID).getSteamID64()); // steamIdChat
	msg.writeUint64(userID.getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(Steam.EChatAction.Ban);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.unbanFromChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(chatID).getSteamID64()); // steamIdChat
	msg.writeUint64(userID.getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(Steam.EChatAction.UnBan);
	this._send(Steam.EMsg.ClientChatAction, msg.flip());
};

SteamUser.prototype.inviteToChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	this._send(Steam.EMsg.ClientChatInvite, {
		"steam_id_invited": userID.getSteamID64(),
		"steam_id_chat": toChatID(chatID).getSteamID64()
	});
};

/**
 * Creates a new multi-user chat room
 * @param convertUserID null|SteamID If the user with the SteamID passed here has a chat window open with us, their window will be converted to the new chat room and they'll join it automatically. If they don't have a window open, they'll get an invite.
 * @param inviteUserID null|SteamID If specified, the user with the SteamID passed here will get invited to the new room automatically.
 * @param callback function
 */
SteamUser.prototype.createChatRoom = function(convertUserID, inviteUserID, callback) {
	convertUserID = convertUserID || new SteamID();
	inviteUserID = inviteUserID || new SteamID();
	if(typeof isPrivate !== 'boolean') {
		isPrivate = true;
	}

	var msg = new ByteBuffer(53, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint32(Steam.EChatRoomType.MUC); // multi-user chat
	msg.writeUint64(0);
	msg.writeUint64(0);
	msg.writeUint32(Steam.EChatPermission.MemberDefault);
	msg.writeUint32(Steam.EChatPermission.MemberDefault);
	msg.writeUint32(Steam.EChatPermission.EveryoneDefault);
	msg.writeUint32(0);
	msg.writeUint8(Steam.EChatFlags.Locked);
	msg.writeUint64(Helpers.steamID(convertUserID).getSteamID64());
	msg.writeUint64(Helpers.steamID(inviteUserID).getSteamID64());
	this._send(Steam.EMsg.ClientCreateChat, msg.flip());

	if(callback) {
		this.once('chatCreated#' + convertUserID.getSteamID64(), function(convertedUserID, result, chatID) {
			callback(result, chatID);
		});
	}
};

// TODO: Figure out why the bot is showing as using voice

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

SteamUser.prototype._handlers[Steam.EMsg.ClientFSGetFriendMessageHistoryResponse] = function(body) {
	var universe = this.steamID.universe;
	(body.messages || []).forEach(function(message) {
		message.timestamp = new Date(message.timestamp * 1000);
		message.steamID = new SteamID('[U:' + universe + ':' + message.accountid + ']');
		delete message.accountid;
	});

	this._emitIdEvent('chatHistory', new SteamID(body.steamid.toString()), body.success, body.messages || []);
};

SteamUser.prototype._handlers[Steam.EMsg.ClientChatInvite] = function(body) {
	this.emit('chatInvite', fromChatID(body.steam_id_chat), body.chat_name, new SteamID(body.steam_id_patron.toString()));
};

SteamUser.prototype._handlers[Steam.EMsg.ClientCreateChatResponse] = function(body) {
	var eresult = body.readUint32();
	var chatID = new SteamID(body.readUint64().toString());
	body.skip(4);
	var friendID = new SteamID(body.readUint64().toString());

	if(eresult != Steam.EResult.OK) {
		this._emitIdEvent('chatCreated', friendID, eresult);
	} else {
		var self = this;
		this.joinChat(chatID, function(result) {
			self._emitIdEvent('chatCreated', friendID, result, chatID);
		});
	}
};

SteamUser.prototype._handlers[Steam.EMsg.ClientChatEnter] = function(body) {
	var chatID = fromChatID(body.readUint64());
	body.skip(28);
	var chatFlags = body.readUint8();
	var response = body.readUint32();
	var numMembers = body.readUint32();

	if(response == Steam.EChatRoomEnterResponse.Success) {
		var chatName = body.readCString();

		var sid64 = chatID.getSteamID64();
		this.chats[sid64] = {
			"name": chatName,
			"members": {}
		};

		decomposeChatFlags(this.chats[sid64], chatFlags);

		var member;

		for(var i = 0; i < numMembers; i++) {
			member = BinaryKVParser.parse(body).MessageObject;
			this.chats[sid64].members[member.steamid.toString()] = {
				"rank": member.Details,
				"permissions": member.permissions
			}
		}
	}

	this._emitIdEvent('chatEnter', chatID, response);
};

SteamUser.prototype._handlers[Steam.EMsg.ClientChatMemberInfo] = function(body) {
	var chatID = fromChatID(body.readUint64().toString());
	var infoType = body.readUint32();

	var target = null;
	var action = null;
	var actor = null;

	if(infoType == Steam.EChatInfoType.StateChange) {
		// A user's state changed
		target = new SteamID(body.readUint64().toString());
		action = body.readUint32();
		actor = new SteamID(body.readUint64().toString());
	}

	var sid64 = chatID.getSteamID64();

	if(!this.chats[sid64]) {
		// We're not in this chat
		return;
	}

	if(infoType == Steam.EChatInfoType.InfoUpdate || (action !== null && action & Steam.EChatMemberStateChange.Entered)) {
		// There's a user info here
		var userInfo = BinaryKVParser.parse(body).MessageObject;
		this.chats[sid64].members[userInfo.steamid.toString()] = {
			"rank": userInfo.Details,
			"permissions": userInfo.permissions
		};
	}

	if(target !== null && action !== null) {
		// Someone was affected, so emit the proper event
		var target64 = target.getSteamID64();

		if(action & Steam.EChatMemberStateChange.Entered) {
			this._emitIdEvent('chatUserJoined', chatID, target);;
		}

		if(action & Steam.EChatMemberStateChange.Left) {
			this._emitIdEvent('chatUserLeft', chatID, target);
			delete this.chats[sid64].members[target64];
		}

		if(action & Steam.EChatMemberStateChange.Disconnected) {
			this._emitIdEvent('chatUserDisconnected', chatID, target);
			delete this.chats[sid64].members[target64];
		}

		if(action & Steam.EChatMemberStateChange.Kicked) {
			this._emitIdEvent('chatUserKicked', chatID, target, actor);
			delete this.chats[sid64].members[target64];
		}

		if(action & Steam.EChatMemberStateChange.Banned) {
			this._emitIdEvent('chatUserBanned', chatID, target, actor);
			delete this.chats[sid64].members[target64];
		}

		if(action & Steam.EChatMemberStateChange.VoiceSpeaking) {
			this._emitIdEvent('chatUserSpeaking', chatID, target);
		}

		if(action & Steam.EChatMemberStateChange.VoiceDoneSpeaking) {
			this._emitIdEvent('chatUserDoneSpeaking', chatID, target);
		}
	}

	if(target !== null && target.getSteamID64() == this.steamID.getSteamID64() && action !== null && action < Steam.EChatMemberStateChange.VoiceSpeaking) {
		// We've left this room, delete it
		this._emitIdEvent('chatLeft', chatID);
		delete this.chats[sid64];
	}
};

SteamUser.prototype._handlers[Steam.EMsg.ClientChatRoomInfo] = function(body) {
	var chatID = fromChatID(body.readUint64());
	var infoType = body.readUint32();

	if(infoType != Steam.EChatInfoType.InfoUpdate) {
		return;
	}

	var flags = body.readUint32();
	var actor = new SteamID(body.readUint64().toString());

	var sid64 = chatID.getSteamID64();

	var wasPrivate = this.chats[sid64].private;
	var wasOfficersOnly = this.chats[sid64].officersOnlyChat;

	decomposeChatFlags(this.chats[sid64], flags);

	if(wasPrivate && !this.chats[sid64].private) {
		this._emitIdEvent('chatSetPublic', chatID, actor);
	} else if(!wasPrivate && this.chats[sid64].private) {
		this._emitIdEvent('chatSetPrivate', chatID, actor);
	}

	if(wasOfficersOnly && !this.chats[sid64].officersOnlyChat) {
		this._emitIdEvent('chatUnsetOfficersOnly', chatID, actor);
	} else if(!wasOfficersOnly && this.chats[sid64].officersOnlyChat) {
		this._emitIdEvent('chatSetOfficersOnly', chatID, actor);
	}
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

function decomposeChatFlags(chat, chatFlags) {
	chat.private = !!(chatFlags & Steam.EChatFlags.Locked);
	chat.invisibleToFriends = !!(chatFlags & Steam.EChatFlags.InvisibleToFriends);
	chat.officersOnlyChat = !!(chatFlags & Steam.EChatFlags.Moderated);
	chat.unjoinable = !!(chatFlags & Steam.EChatFlags.Unjoinable);
}
