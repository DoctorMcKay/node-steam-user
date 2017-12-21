var SteamUser = require('../index.js');
var SteamID = require('steamid');
var ByteBuffer = require('bytebuffer');
var BinaryKVParser = require('binarykvparser');
var Helpers = require('./helpers.js');

/**
 * Sends a chat message to a user or a chat room.
 * @param {(SteamID|string)} recipient - The recipient user/chat, as a SteamID object or a string which can parse into one. To send to a group chat, use the group's (clan's) SteamID.
 * @param {string} message - The message to send.
 * @param {EChatEntryType} [type=ChatMsg] - Optional. The type of the message. Defaults to ChatMsg. Almost never needed.
 */
SteamUser.prototype.chatMessage = SteamUser.prototype.chatMsg = function(recipient, message, type) {
	recipient = Helpers.steamID(recipient);

	type = type || SteamUser.EChatEntryType.ChatMsg;

	if ([SteamID.Type.CLAN, SteamID.Type.CHAT].indexOf(recipient.type) != -1) {
		// It's a chat message
		var msg = new ByteBuffer(8 + 8 + 4 + Buffer.byteLength(message) + 1, ByteBuffer.LITTLE_ENDIAN);
		msg.writeUint64(this.steamID.getSteamID64()); // steamIdChatter
		msg.writeUint64(toChatID(recipient).getSteamID64()); // steamIdChatRoom
		msg.writeUint32(type); // chatMsgType
		msg.writeCString(message);
		this._send(SteamUser.EMsg.ClientChatMsg, msg.flip());
	} else {
		// It's a friend message
		var payload = new ByteBuffer(Buffer.byteLength(message) + 1, ByteBuffer.LITTLE_ENDIAN);
		payload.writeCString(message);

		this._send(SteamUser.EMsg.ClientFriendMsg, {
			"steamid": recipient.getSteamID64(),
			"message": payload.flip(),
			"chat_entry_type": type
		});
	}
};

/**
 * Tell another user that you're typing a message.
 * @param {SteamID|string} recipient - The recipient, as a SteamID object or a string which can parse into one.
 */
SteamUser.prototype.chatTyping = function(recipient) {
	this.chatMessage(recipient, "", SteamUser.EChatEntryType.Typing);
};

/**
 * Requests chat history from Steam with a particular user. Also gets unread offline messages.
 * @param {(SteamID|string)} steamID - The SteamID of the other user with whom you're requesting history (as a SteamID object or a string which can parse into one)
 * @param {SteamUser~getChatHistoryCallback} [callback] - An optional callback to be invoked when the response is received.
 */
SteamUser.prototype.getChatHistory = function(steamID, callback) {
	steamID = Helpers.steamID(steamID);
	var sid64 = steamID.getSteamID64();

	this._send(SteamUser.EMsg.ClientFSGetFriendMessageHistory, {
		"steamid": sid64
	});

	/**
	 * Simply binds a listener to the `chatHistory` event and removes the SteamID parameter.
	 * @callback SteamUser~getChatHistoryCallback
	 * @param {EResult} success - Was the request successful?
	 * @param {Object[]} messages - An array of message objects
	 * @param {SteamID} messages[].steamID - The SteamID of the user who sent the message (either you or the other user)
	 * @param {Date} messages[].timestamp - The time when the message was sent
	 * @param {string} messages[].message - The message that was sent
	 * @param {bool} messages[].unread - true if it was an unread offline message, false if just a history message
	 */
	if (callback) {
		this.once('chatHistory#' + sid64, function(steamID, success, messages) {
			callback(success, messages);
		});
	}
};

/**
 * Join a chat room. To join a group chat, use the group's (clan) SteamID.
 * @param {(SteamID|string)} steamID - The SteamID of the chat to join (as a SteamID object or a string which can parse into one)
 * @param {SteamUser~genericEResultCallback} [callback] - An optional callback to be invoked when the room is joined (or a failure occurs).
 */
SteamUser.prototype.joinChat = function(steamID, callback) {
	var msg = new ByteBuffer(9, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint8(0); // isVoiceSpeaker
	this._send(SteamUser.EMsg.ClientJoinChat, msg.flip());

	if (callback) {
		this.once('chatEnter#' + Helpers.steamID(steamID).getSteamID64(), function(chatID, result) {
			callback(result);
		});
	}
};

/**
 * Leave a chat room.
 * @param {(SteamID|string)} steamID - The SteamID of the chat room to leave (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.leaveChat = function(steamID) {
	var msg = new ByteBuffer(32, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint32(SteamUser.EChatInfoType.StateChange); // type
	msg.writeUint64(this.steamID.getSteamID64());
	msg.writeUint32(SteamUser.EChatMemberStateChange.Left);
	msg.writeUint64(this.steamID.getSteamID64());
	this._send(SteamUser.EMsg.ClientChatMemberInfo, msg.flip());

	steamID = Helpers.steamID(steamID);

	delete this.chats[steamID.getSteamID64()];
};

/**
 * Sets a chat room private (invitation required to join, unless a member of the group [if the chat is a Steam group chat])
 * @param {(SteamID|string)} steamID - The SteamID of the chat room to make private (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.setChatPrivate = function(steamID) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(SteamUser.EChatAction.LockChat);
	this._send(SteamUser.EMsg.ClientChatAction, msg.flip());
};

/**
 * Sets a chat room public (no invitation required to join)
 * @param {(SteamID|string)} steamID - The SteamID of the chat room to make public (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.setChatPublic = function(steamID) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(SteamUser.EChatAction.UnlockChat);
	this._send(SteamUser.EMsg.ClientChatAction, msg.flip());
};

/**
 * Sets a group chat room to officers-only chat mode.
 * @param {(SteamID|string)} steamID - The SteamID of the clan chat room to make officers-only (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.setChatOfficersOnly = function(steamID) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(SteamUser.EChatAction.SetModerated);
	this._send(SteamUser.EMsg.ClientChatAction, msg.flip());
};

/**
 * Sets a group chat room out of officers-only chat mode, so that everyone can chat.
 * @param {(SteamID|string)} steamID - The SteamID of the clan chat room to make open (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.unsetChatOfficersOnly = function(steamID) {
	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdChat
	msg.writeUint64(toChatID(steamID).getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(SteamUser.EChatAction.SetUnmoderated);
	this._send(SteamUser.EMsg.ClientChatAction, msg.flip());
};

/**
 * Kicks a user from a chat room.
 * @param {(SteamID|string)} chatID - The SteamID of the chat room to kick the user from (as a SteamID object or a string which can parse into one)
 * @param {(SteamID|string)} userID - The SteamID of the user to kick from the room (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.kickFromChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(chatID).getSteamID64()); // steamIdChat
	msg.writeUint64(userID.getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(SteamUser.EChatAction.Kick);
	this._send(SteamUser.EMsg.ClientChatAction, msg.flip());
};

/**
 * Bans a user from a chat room.
 * @param {(SteamID|string)} chatID - The SteamID of the chat room to ban the user from (as a SteamID object or a string which can parse into one)
 * @param {(SteamID|string)} userID - The SteamID of the user to ban from the room (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.banFromChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(chatID).getSteamID64()); // steamIdChat
	msg.writeUint64(userID.getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(SteamUser.EChatAction.Ban);
	this._send(SteamUser.EMsg.ClientChatAction, msg.flip());
};

/**
 * Unbans a user from a chat room.
 * @param {(SteamID|string)} chatID - The SteamID of the chat room to unban the user from (as a SteamID object or a string which can parse into one)
 * @param {(SteamID|string)} userID - The SteamID of the user to unban from the room (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.unbanFromChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	var msg = new ByteBuffer(20, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint64(toChatID(chatID).getSteamID64()); // steamIdChat
	msg.writeUint64(userID.getSteamID64()); // steamIdUserToActOn
	msg.writeUint32(SteamUser.EChatAction.UnBan);
	this._send(SteamUser.EMsg.ClientChatAction, msg.flip());
};

/**
 * Invites a user to a chat room.
 * @param {(SteamID|string)} chatID - The SteamID of the chat room to invite the user to (as a SteamID object or a string which can parse into one)
 * @param {(SteamID|string)} userID - The SteamID of the user to invite (as a SteamID object or a string which can parse into one)
 */
SteamUser.prototype.inviteToChat = function(chatID, userID) {
	userID = Helpers.steamID(userID);

	this._send(SteamUser.EMsg.ClientChatInvite, {
		"steam_id_invited": userID.getSteamID64(),
		"steam_id_chat": toChatID(chatID).getSteamID64()
	});
};

/**
 * Creates a new multi-user chat room
 * @param {null|SteamID|string} [convertUserID=null] - If the user with the SteamID passed here has a chat window open with us, their window will be converted to the new chat room and they'll join it automatically. If they don't have a window open, they'll get an invite.
 * @param {null|SteamID|string} [inviteUserID=null] - If specified, the user with the SteamID passed here will get invited to the new room automatically.
 * @param {SteamUser~createChatRoomCallback} [callback] - Called when the chat is created or a failure occurs.
 */
SteamUser.prototype.createChatRoom = function(convertUserID, inviteUserID, callback) {
	convertUserID = convertUserID || new SteamID();
	inviteUserID = inviteUserID || new SteamID();

	var msg = new ByteBuffer(53, ByteBuffer.LITTLE_ENDIAN);
	msg.writeUint32(SteamUser.EChatRoomType.MUC); // multi-user chat
	msg.writeUint64(0);
	msg.writeUint64(0);
	msg.writeUint32(SteamUser.EChatPermission.MemberDefault);
	msg.writeUint32(SteamUser.EChatPermission.MemberDefault);
	msg.writeUint32(SteamUser.EChatPermission.EveryoneDefault);
	msg.writeUint32(0);
	msg.writeUint8(SteamUser.EChatFlags.Locked);
	msg.writeUint64(Helpers.steamID(convertUserID).getSteamID64());
	msg.writeUint64(Helpers.steamID(inviteUserID).getSteamID64());
	this._send(SteamUser.EMsg.ClientCreateChat, msg.flip());

	/**
	 * Called when the room is created or a failure occurs. If successful, you will be in the room when this callback fires.
	 * @callback SteamUser~createChatRoomCallback
	 * @param {EResult} eresult - The result of the creation request
	 * @param {SteamID} [chatID] - The SteamID of the newly-created room, if successful
	 */
	if (callback) {
		this.once('chatCreated#' + convertUserID.getSteamID64(), function(convertedUserID, result, chatID) {
			callback(result, chatID);
		});
	}
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientFriendMsgIncoming] = function(body) {
	var senderID = new SteamID(body.steamid_from.toString());
	var message = body.message.toString('utf8').split('\u0000')[0];

	/**
	 * Emitted when we receive a new message from another user (not from a chat room).
	 * You can also listen for friendMessage#steamid64 to only get messages from a specific user.
	 *
	 * @event SteamUser#friendMessage
	 * @param {SteamID} senderID - The SteamID of the message author
	 * @param {string} message - The chat message itself
	 */

	/**
	 * Emitted when we receive a notification that another user is typing a message to us.
	 * You can also listen for friendTyping#steamid64 to only get notifications from a specific user.
	 *
	 * @event SteamUser#friendTyping
	 * @param {SteamID} steamID - The SteamID of the typing user
	 */

	switch (body.chat_entry_type) {
		case SteamUser.EChatEntryType.ChatMsg:
			this._emitIdEvent('friendMessage', senderID, message);
			this._emitIdEvent('friendOrChatMessage', senderID, message, senderID);
			break;

		case SteamUser.EChatEntryType.Typing:
			this._emitIdEvent('friendTyping', senderID);
			break;

		case SteamUser.EChatEntryType.LeftConversation:
			this._emitIdEvent('friendLeftConversation', senderID);
			break;
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientFriendMsgEchoToSender] = function(body) {
	var recipientID = new SteamID(body.steamid_from.toString());
	var message = body.message.toString('utf8').split('\u0000')[0];

	/**
	 * Emitted when we receive a message sent by us on another logon.
	 * You can also listen for friendMessageEcho#steamid64 to only get messages sent to a specific user.
	 *
	 * @event SteamUser#friendMessageEcho
	 * @param {SteamID} recipientID - The SteamID of the message recipient
	 * @param {string} message - The message text
	 */

	/**
	 * Emitted when we receive a notification that we're typing a message to someone else on another logon.
	 * You can also listen for friendTypingEcho#steamid64 to only get notifications sent to a specific user.
	 *
	 * @event SteamUser#friendTypingEcho
	 * @param {SteamID} recipientID - The SteamID of the notification recipient
	 */

	switch (body.chat_entry_type) {
		case SteamUser.EChatEntryType.ChatMsg:
			this._emitIdEvent('friendMessageEcho', recipientID, message);
			break;

		case SteamUser.EChatEntryType.Typing:
			this._emitIdEvent('friendTypingEcho', recipientID);
			break;
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientChatMsg] = function(body) {
	var chatter = new SteamID(body.readUint64().toString());
	var room = fromChatID(body.readUint64());
	var entryType = body.readUint32();
	var message = body.readCString();

	if (entryType != SteamUser.EChatEntryType.ChatMsg) {
		// Not sure what kind of chat entry types are possible for chat rooms...
		return;
	}

	/**
	 * Emitted when we receive a new chat message sent to a chat room.
	 * You can also listen for chatMessage#roomid64 to get only messages sent to a specific chat room.
	 * You can also listen for chatMessage#senderid64 to get only messages sent by a specific user.
	 * You can also listen for chatMessage#roomid64#senderid64 to get only messages sent to a specific chat room by a specific user.
	 *
	 * @event SteamUser#chatMessage
	 * @param {SteamID} room - The SteamID of the chat room
	 * @param {SteamID} chatter - The SteamID of the message sender
	 * @param {string} message - The chat message text
	 */

	this._emitIdEvent('friendOrChatMessage', chatter, message, room);
	this.emit('chatMessage', room, chatter, message);
	this.emit('chatMessage#' + room.getSteamID64(), room, chatter, message);
	this.emit('chatMessage#' + chatter.getSteamID64(), room, chatter, message);
	this.emit('chatMessage#' + room.getSteamID64() + '#' + chatter.getSteamID64(), room, chatter, message);
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientFSGetFriendMessageHistoryResponse] = function(body) {
	var universe = this.steamID.universe;
	(body.messages || []).forEach(function(message) {
		message.timestamp = new Date(message.timestamp * 1000);
		message.steamID = new SteamID('[U:' + universe + ':' + message.accountid + ']');
		delete message.accountid;
	});

	/**
	 * Emitted when we receive a response to a {getchatHistory} request
	 *
	 * @event SteamUser#chatHistory
	 * @param {SteamID} steamID - The SteamID of the user for whom we are getting history
	 * @param {EResult} success - Was the request successful?
	 * @param {Object[]} messages - An array of message objects
	 * @param {SteamID} messages[].steamID - The SteamID of the user who sent the message (either you or the other user)
	 * @param {Date} messages[].timestamp - The time when the message was sent
	 * @param {string} messages[].message - The message that was sent
	 * @param {bool} messages[].unread - true if it was an unread offline message, false if just a history message
	 */

	this._emitIdEvent('chatHistory', new SteamID(body.steamid.toString()), body.success, body.messages || []);
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientChatInvite] = function(body) {
	/**
	 * Emitted when we're invited to a chat room.
	 *
	 * @event SteamUser#chatInvite
	 * @param {SteamID} inviterID - The SteamID of the user who invited us to the room
	 * @param {SteamID} chatID - The SteamID of the chat room to which we were invited
	 * @param {string} chatName - The name of the chat room to which we were invited
	 */

	var inviterID = new SteamID(body.steam_id_patron.toString());
	var chatID = fromChatID(body.steam_id_chat);

	if (chatID.isLobby()) {
		this._emitIdEvent('lobbyInvite', inviterID, chatID);
	} else {
		this.emit('chatInvite', inviterID, chatID, body.chat_name);
		this.emit('chatInvite#' + inviterID.getSteamID64(), inviterID, chatID, body.chat_name);
		this.emit('chatInvite#' + chatID.getSteamID64(), inviterID, chatID, body.chat_name);
		this.emit('chatInvite#' + inviterID.getSteamID64() + '#' + chatID.getSteamID64(), inviterID, chatID, body.chat_name);
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientCreateChatResponse] = function(body) {
	var eresult = body.readUint32();
	var chatID = new SteamID(body.readUint64().toString());
	body.skip(4);
	var friendID = new SteamID(body.readUint64().toString());

	/**
	 * Emitted when a chat room is created (in response to a {createChatRoom} request)
	 * You can also listen for chatCreated#steamid64 to get only rooms created with a specific user.
	 *
	 * @event SteamUser#chatCreated
	 * @param {SteamID} friendID - The SteamID of the friend with whom we created a room
	 * @param {EResult} eresult - The result of the creation request
	 * @param {SteamID} [chatID] - The SteamID of the newly-created room, if successful
	 */

	if (eresult != SteamUser.EResult.OK) {
		this._emitIdEvent('chatCreated', friendID, eresult);
	} else {
		var self = this;
		this.joinChat(chatID, function(result) {
			self._emitIdEvent('chatCreated', friendID, result, chatID);
		});
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientChatEnter] = function(body) {
	var chatID = fromChatID(body.readUint64());
	body.skip(28);
	var chatFlags = body.readUint8();
	var response = body.readUint32();
	var numMembers = body.readUint32();

	if (response == SteamUser.EChatRoomEnterResponse.Success) {
		var chatName = body.readCString();

		var sid64 = chatID.getSteamID64();
		this.chats[sid64] = {
			"name": chatName,
			"members": {}
		};

		decomposeChatFlags(this.chats[sid64], chatFlags);

		var member;

		for (var i = 0; i < numMembers; i++) {
			member = BinaryKVParser.parse(body).MessageObject;
			this.chats[sid64].members[member.steamid.toString()] = {
				"rank": member.Details,
				"permissions": member.permissions
			};

			// Move on to the next chat member
			body.skip(BinaryKVParser.getByteLength(body));
		}
	}

	/**
	 * Emitted when we enter a chat room.
	 * You can also listen for chatEnter#steamid64 to get only events for a specific chat room.
	 *
	 * @event SteamUser#chatEnter
	 * @param {SteamID} chatID - The SteamID of the chat room we entered
	 * @param {EChatRoomEnterResponse} response - The result of the enter request
	 */

	this._emitIdEvent('chatEnter', chatID, response);
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientChatMemberInfo] = function(body) {
	var chatID = fromChatID(body.readUint64().toString());
	var infoType = body.readUint32();

	var target = null;
	var action = null;
	var actor = null;

	if (infoType == SteamUser.EChatInfoType.StateChange) {
		// A user's state changed
		target = new SteamID(body.readUint64().toString());
		action = body.readUint32();
		actor = new SteamID(body.readUint64().toString());
	}

	var sid64 = chatID.getSteamID64();

	if (!this.chats[sid64]) {
		// We're not in this chat
		return;
	}

	if (infoType == SteamUser.EChatInfoType.InfoUpdate || (action !== null && action & SteamUser.EChatMemberStateChange.Entered)) {
		// There's a user info here
		var userInfo = BinaryKVParser.parse(body).MessageObject;
		this.chats[sid64].members[userInfo.steamid.toString()] = {
			"rank": userInfo.Details,
			"permissions": userInfo.permissions
		};
	}

	if (target !== null && action !== null) {
		// Someone was affected, so emit the proper event
		var target64 = target.getSteamID64();

		if (action & SteamUser.EChatMemberStateChange.Entered) {
			this._emitIdEvent('chatUserJoined', chatID, target);
		}

		if (action & SteamUser.EChatMemberStateChange.Left) {
			this._emitIdEvent('chatUserLeft', chatID, target);
			delete this.chats[sid64].members[target64];
		}

		if (action & SteamUser.EChatMemberStateChange.Disconnected) {
			this._emitIdEvent('chatUserDisconnected', chatID, target);
			delete this.chats[sid64].members[target64];
		}

		if (action & SteamUser.EChatMemberStateChange.Kicked) {
			this._emitIdEvent('chatUserKicked', chatID, target, actor);
			delete this.chats[sid64].members[target64];
		}

		if (action & SteamUser.EChatMemberStateChange.Banned) {
			this._emitIdEvent('chatUserBanned', chatID, target, actor);
			delete this.chats[sid64].members[target64];
		}

		if (action & SteamUser.EChatMemberStateChange.VoiceSpeaking) {
			this._emitIdEvent('chatUserSpeaking', chatID, target);
		}

		if (action & SteamUser.EChatMemberStateChange.VoiceDoneSpeaking) {
			this._emitIdEvent('chatUserDoneSpeaking', chatID, target);
		}
	}

	if (target !== null && target.getSteamID64() == this.steamID.getSteamID64() && action !== null && action < SteamUser.EChatMemberStateChange.VoiceSpeaking) {
		// We've left this room, delete it
		this._emitIdEvent('chatLeft', chatID);
		delete this.chats[sid64];
	}
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientChatRoomInfo] = function(body) {
	var chatID = fromChatID(body.readUint64());
	var infoType = body.readUint32();

	if (infoType != SteamUser.EChatInfoType.InfoUpdate) {
		return;
	}

	var flags = body.readUint32();
	var actor = new SteamID(body.readUint64().toString());

	var sid64 = chatID.getSteamID64();

	var wasPrivate = this.chats[sid64].private;
	var wasOfficersOnly = this.chats[sid64].officersOnlyChat;

	decomposeChatFlags(this.chats[sid64], flags);

	if (wasPrivate && !this.chats[sid64].private) {
		this._emitIdEvent('chatSetPublic', chatID, actor);
	} else if (!wasPrivate && this.chats[sid64].private) {
		this._emitIdEvent('chatSetPrivate', chatID, actor);
	}

	if (wasOfficersOnly && !this.chats[sid64].officersOnlyChat) {
		this._emitIdEvent('chatUnsetOfficersOnly', chatID, actor);
	} else if (!wasOfficersOnly && this.chats[sid64].officersOnlyChat) {
		this._emitIdEvent('chatSetOfficersOnly', chatID, actor);
	}
};

// Private functions

/**
 * If steamID is a clan ID, converts to the appropriate chat ID. Otherwise, returns it untouched.
 * @param {SteamID} steamID
 * @returns SteamID
 */
function toChatID(steamID) {
	steamID = Helpers.steamID(steamID);

	if (steamID.type == SteamID.Type.CLAN) {
		steamID.type = SteamID.Type.CHAT;
		steamID.instance |= SteamID.ChatInstanceFlags.Clan;
	}

	return steamID;
}

/**
 * If steamID is a clan chat ID, converts to the appropriate clan ID. Otherwise, returns it untouched.
 * @param {SteamID} steamID
 * @returns SteamID
 */
function fromChatID(steamID) {
	steamID = Helpers.steamID(steamID);

	if (steamID.isGroupChat()) {
		steamID.type = SteamID.Type.CLAN;
		steamID.instance &= ~SteamID.ChatInstanceFlags.Clan;
	}

	return steamID;
}

/**
 * Converts chat flags into properties on a chat room object
 * @param {Object} chat
 * @param {number} chatFlags
 */
function decomposeChatFlags(chat, chatFlags) {
	chat.private = !!(chatFlags & SteamUser.EChatFlags.Locked);
	chat.invisibleToFriends = !!(chatFlags & SteamUser.EChatFlags.InvisibleToFriends);
	chat.officersOnlyChat = !!(chatFlags & SteamUser.EChatFlags.Moderated);
	chat.unjoinable = !!(chatFlags & SteamUser.EChatFlags.Unjoinable);
}
