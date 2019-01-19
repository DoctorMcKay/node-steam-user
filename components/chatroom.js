const EventEmitter = require('events').EventEmitter;
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');
const Util = require('util');

const Helpers = require('./helpers.js');

Util.inherits(SteamChatRoomClient, EventEmitter);

module.exports = SteamChatRoomClient;

function SteamChatRoomClient(user) {
	this.user = user;

	this.user._handlerManager.add('FriendMessagesClient.IncomingMessage#1', function(body) {
		body = preProcessObject(body);
		body.local_echo = body.local_echo || false; // coerce null to false
		body.from_limited_account = body.from_limited_account || false;
		body.low_priority = body.low_priority || false;
		body.ordinal = body.ordinal || 0;
		body.server_timestamp = body.rtime32_server_timestamp;
		body.message_no_bbcode = body.message_no_bbcode || body.message;
		delete body.rtime32_server_timestamp;

		const EChatEntryType = require('../index.js').EChatEntryType;
		let eventName = "";
		switch (body.chat_entry_type) {
			case EChatEntryType.ChatMsg:
				eventName = 'friendMessage';
				break;

			case EChatEntryType.Typing:
				eventName = 'friendTyping';
				break;

			case EChatEntryType.LeftConversation:
				eventName = 'friendLeftConversation';
				break;

			default:
				this.emit('debug', 'Got unknown chat entry type ' + body.chat_entry_type + ' from ' + body.steamid_friend);
		}

		if (body.local_echo) {
			eventName += 'Echo';
		}

		this.chat.emit(eventName, body);

		// backwards compatibility
		this._emitIdEvent(eventName, body.steamid_friend, body.message_no_bbcode);
		if (body.chat_entry_type == EChatEntryType.ChatMsg) {
			this._emitIdEvent('friendOrChatMessage', body.steamid_friend, body.message_no_bbcode, body.steamid_friend);
		}
	});

	this.user._handlerManager.add('ChatRoomClient.NotifyIncomingChatMessage#1', function(body) {
		body = preProcessObject(body);
		body.ordinal = body.ordinal || 0;
		body.message_no_bbcode = body.message_no_bbcode || body.message;

		if (body.mentions) {
			body.mentions = processChatMentions(body.mentions);
		}

		this.chat.emit('chatMessage', body);
	});

	this.user._handlerManager.add('ChatRoomClient.NotifyChatMessageModified#1', function(body) {
		body = preProcessObject(body);
		body.messages = body.messages.map((msg) => {
			msg.ordinal = msg.ordinal || 0;
			return msg;
		});

		this.chat.emit('chatMessagesModified', body);
	});
}

/**
 * Get a list of the chat room groups you're in.
 * @param {function} [callback]
 * @return Promise
 */
SteamChatRoomClient.prototype.getGroups = function(callback) {
	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		this.user._sendUnified("ChatRoom.GetMyChatRoomGroups#1", {}, (body) => {
			body.chat_room_groups = body.chat_room_groups.map(processChatRoomSummaryPair);
			let groups = {};
			body.chat_room_groups.forEach((group) => {
				groups[group.group_summary.chat_group_id] = group;
			});

			body.chat_room_groups = groups;
			accept(body);
		});
	});
};

/**
 * Get details from a chat group invite link.
 * @param {string} linkUrl
 * @param {function} [callback]
 * @return Promise
 */
SteamChatRoomClient.prototype.getInviteLinkInfo = function(linkUrl, callback) {
	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		let match = linkUrl.match(/^https?:\/\/s\.team\/chat\/([^\/]+)$/);
		if (!match) {
			return reject(new Error("Invalid invite link"));
		}

		this.user._sendUnified("ChatRoom.GetInviteLinkInfo#1", {"invite_code": match[1]}, (body) => {
			if (!body || (!body.steamid_sender && !body.chat_id && !body.group_summary)) {
				return reject(new Error("Invalid invite link"));
			}

			body = preProcessObject(body);
			body.group_summary = processChatGroupSummary(body.group_summary, true);
			body.user_chat_group_state = processChatGroupState(body.user_chat_group_state, true);
			body.banned = !!body.banned;
			body.invite_code = match[1];
			accept(body);
		});
	});
};

/**
 * Get the chat room group info for a clan (Steam group). Allows you to join a group chat.
 * @param {SteamID|string} clanSteamID - The group's SteamID or a string that can parse into one
 * @param {function} [callback]
 * @return {Promise}
 */
SteamChatRoomClient.prototype.getClanChatGroupInfo = function(clanSteamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		clanSteamID = Helpers.steamID(clanSteamID);
		if (clanSteamID.type != SteamID.Type.CLAN) {
			return reject(new Error("SteamID is not for a clan"));
		}

		// just set these to what they should be
		clanSteamID.universe = SteamID.Universe.PUBLIC;
		clanSteamID.instance = SteamID.Instance.ALL;

		this.user._sendUnified("ClanChatRooms.GetClanChatRoomInfo#1", {
			"steamid": clanSteamID.toString(),
			"autocreate": true
		}, (body) => {
			if (!body.chat_group_summary) {
				return reject(new Error("Invalid clan ID"));
			}

			body.chat_group_summary = processChatGroupSummary(body.chat_group_summary);
			accept(body);
		});
	});
};

/**
 * Join a chat room group.
 * @param {int|string} groupId - The group's ID
 * @param {string} [inviteCode] - An invite code to join this chat. Not necessary for public Steam groups.
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamChatRoomClient.prototype.joinGroup = function(groupId, inviteCode, callback) {
	if (typeof inviteCode === 'function') {
		callback = inviteCode;
		inviteCode = undefined;
	}

	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		this.user._sendUnified("ChatRoom.JoinChatRoomGroup#1", {
			"chat_group_id": groupId,
			"invite_code": inviteCode
		}, (body) => {
			if (!body.state && !body.user_chat_state) {
				return reject(new Error("Invalid group ID or invite code"));
			}

			body = preProcessObject(body);
			body.state = processChatGroupState(body.state, true);
			body.user_chat_state = processUserChatGroupState(body.user_chat_state, true);
			accept(body);
		});
	});
};

/**
 * Invite a friend to a chat room group.
 * @param {int} groupId
 * @param {SteamID|string} steamId
 * @param {function} [callback]
 * @returns {Promise}
 */
SteamChatRoomClient.prototype.inviteUserToGroup = function(groupId, steamId, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		return this.user._sendUnified("ChatRoom.InviteFriendToChatRoomGroup#1", {
			"chat_group_id": groupId,
			"steamid": Helpers.steamID(steamId).toString()
		}, (body) => {
			accept();
		});
	});
};

/**
 * Send a direct chat message to a friend.
 * @param {SteamID|string} steamId
 * @param {string} message
 * @param {{[chatEntryType], [containsBbCode]}} [options]
 * @param {function} [callback]
 * @return Promise
 */
SteamChatRoomClient.prototype.sendFriendMessage = function(steamId, message, options, callback) {
	const EChatEntryType = require('../index.js').EChatEntryType;

	if (typeof options === 'function') {
		callback = options;
		options = {};
	} else if (!options) {
		options = {};
	}

	if (!options.chatEntryType) {
		options.chatEntryType = EChatEntryType.ChatMsg;
	}

	if (options.chatEntryType && typeof options.containsBbCode === 'undefined') {
		options.containsBbCode = true;
	}

	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		this.user._sendUnified("FriendMessages.SendMessage#1", {
			"steamid": Helpers.steamID(steamId).toString(),
			"chat_entry_type": options.chatEntryType,
			"message": message,
			"contains_bbcode": options.containsBbCode
		}, (body) => {
			body = preProcessObject(body);
			body.ordinal = body.ordinal || 0;
			body.modified_message = body.modified_message || message;
			accept(body);
		});
	});
};

/**
 * Inform a friend that you're typing a message to them.
 * @param {SteamID|string} steamId
 * @param {function} [callback]
 * @return Promise
 */
SteamChatRoomClient.prototype.sendFriendTyping = function(steamId, callback) {
	const EChatEntryType = require('../index.js').EChatEntryType;
	return this.sendFriendMessage(steamId, "", {"chatEntryType": EChatEntryType.Typing}, callback);
};

/**
 * Send a message to a chat room.
 * @param {int|string} groupId
 * @param {int|string} chatId
 * @param {string} message
 * @param {function} [callback]
 * @return Promise
 */
SteamChatRoomClient.prototype.sendChatMessage = function(groupId, chatId, message, callback) {
	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		this.user._sendUnified("ChatRoom.SendChatMessage#1", {
			"chat_group_id": groupId,
			"chat_id": chatId,
			"message": message
		}, (body) => {
			body = preProcessObject(body);
			body.ordinal = body.ordinal || 0;
			body.modified_message = body.modified_message || message;
			accept(body);
		});
	});
};

/**
 * Get message history for a chat (channel).
 * @param {int|string} groupId
 * @param {int|string} chatId
 * @param {{[maxCount], [lastTime], [lastOrdinal], [startTime], [startOrdinal]}} [options]
 * @param {function} [callback]
 * @return Promise
 */
SteamChatRoomClient.prototype.getChatMessageHistory = function(groupId, chatId, options, callback) {
	if (typeof options === 'function') {
		callback = options;
		options = {};
	}

	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		let max_count = options.maxCount || 100;
		let last_time = options.lastTime;
		let last_ordinal = options.lastOrdinal;
		let start_time = options.startTime;
		let start_ordinal = options.startOrdinal;

		if (last_time instanceof Date) {
			last_time = Math.floor(last_time.getTime() / 1000);
		}

		if (start_time instanceof Date) {
			start_time = Math.floor(start_time.getTime() / 1000);
		}

		this.user._sendUnified("ChatRoom.GetMessageHistory#1", {
			"chat_group_id": groupId,
			"chat_id": chatId,
			last_time,
			last_ordinal,
			start_time,
			start_ordinal,
			max_count
		}, (body) => {
			body = preProcessObject(body);
			if (body.messages) {
				body.messages = processChatMessageHistory(body.messages);
			}

			accept(body);
		});
	});
};

/**
 * Delete one or more messages from a chat channel.
 * @param {int|string} groupId
 * @param {int|string} chatId
 * @param {{server_timestamp, ordinal}[]} messages
 * @param {function} [callback]
 * @return {Promise}
 */
SteamChatRoomClient.prototype.deleteChatMessages = function(groupId, chatId, messages, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		if (!Array.isArray(messages)) {
			return reject(new Error('The \'messages\' argument must be an array'));
		}

		for (let i = 0; i < messages.length; i++) {
			if (!messages[i] || typeof messages[i] !== 'object' || (!messages[i].server_timestamp && !messages[i].timestamp)) {
				return reject(new Error('The \'messages\' argument is malformed: must be an array of objects with properties {(server_timestamp|timestamp), ordinal}'));
			}
		}

		messages = messages.map((msg) => {
			let out = {};

			msg.ordinal = msg.ordinal || 0;
			if (msg.timestamp && !msg.server_timestamp) {
				msg.server_timestamp = msg.timestamp;
			}

			out.server_timestamp = convertDateToUnix(msg.server_timestamp);

			if (msg.ordinal) {
				out.ordinal = msg.ordinal;
			}

			return out;
		});

		this.user._sendUnified("ChatRoom.DeleteChatMessages#1", {
			"chat_group_id": groupId,
			"chat_id": chatId,
			"messages": messages
		}, (body) => {
			accept();
		});
	});
};

/**
 * Kick a user from a chat room group.
 * @param {int|string} groupId
 * @param {SteamID|string} steamId
 * @param {Date|int} [expireTime] - Time when they should be allowed to join again. Omit for immediate.
 * @param {function} [callback]
 * @return {Promise}
 */
SteamChatRoomClient.prototype.kickUserFromGroup = function(groupId, steamId, expireTime, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
		this.user._sendUnified("ChatRoom.KickUserFromGroup#1", {
			"chat_group_id": groupId,
			"steamid": Helpers.steamID(steamId).toString(),
			"expiration": expireTime ? convertDateToUnix(expireTime) : Math.floor(Date.now() / 1000)
		}, (body) => {
			accept();
		});
	});
};






/**
 * Process a chat room summary pair.
 * @param {object} summaryPair
 * @param {boolean} [preProcessed=false]
 * @returns {object}
 */
function processChatRoomSummaryPair(summaryPair, preProcessed) {
	if (!preProcessed) {
		summaryPair = preProcessObject(summaryPair);
	}

	summaryPair.group_state = processChatGroupState(summaryPair.user_chat_group_state, true);
	summaryPair.group_summary = processChatGroupSummary(summaryPair.group_summary, true);
	delete summaryPair.user_chat_group_state;
	return summaryPair;
}

/**
 * Process a chat group summary.
 * @param {object} groupSummary
 * @param {boolean} [preProcessed=false]
 * @returns {object}
 */
function processChatGroupSummary(groupSummary, preProcessed) {
	if (!preProcessed) {
		groupSummary = preProcessObject(groupSummary);
	}

	if (groupSummary.top_members) {
		groupSummary.top_members = groupSummary.top_members.map(accountid => SteamID.fromIndividualAccountID(accountid));
	}

	return groupSummary;
}

function processChatGroupState(state, preProcessed) {
	if (!preProcessed) {
		state = preProcessObject(state);
	}

	state.chat_rooms = state.chat_rooms.map(processChatRoomState, true);
	return state;
}

function processUserChatGroupState(state, preProcessed) {
	if (!preProcessed) {
		state = preProcessObject(state);
	}

	state.user_chat_room_state = processUserChatRoomState(state.user_chat_room_state, true);
	state.unread_indicator_muted = !!state.unread_indicator_muted;
	return state;
}

function processUserChatRoomState(state, preProcessed) {
	if (!preProcessed) {
		state = preProcessObject(state);
	}

	state.unread_indicator_muted = !!state.unread_indicator_muted;
	return state;
}

function processChatRoomState(state, preProcessed) {
	if (!preProcessed) {
		state = preProcessObject(state);
	}

	state.voice_allowed = !!state.voice_allowed;
	state.members_in_voice = state.members_in_voice.map(m => SteamID.fromIndividualAccountID(m));
	return state;
}

function processChatMentions(mentions) {
	if (mentions.mention_accountids) {
		mentions.mention_steamids = mentions.mention_accountids.map(acctid => SteamID.fromIndividualAccountID(acctid));
		delete mentions.mention_accountids;
	}

	return mentions;
}

function processChatMessageHistory(messages) {
	return messages.map((msg) => {
		msg.sender = SteamID.fromIndividualAccountID(msg.sender);
		return msg;
	});
}

/**
 * Pre-process a generic chat object.
 * @param {object} obj
 * @returns {object}
 */
function preProcessObject(obj) {
	for (let key in obj) {
		if (!obj.hasOwnProperty(key)) {
			continue;
		}

		let val = obj[key];
		if (key.match(/^steamid_/) && typeof val === 'string' && val != '0') {
			obj[key] = new SteamID(val.toString());
		} else if (key == 'timestamp' || key.match(/^time_/) || key.match(/_timestamp$/)) {
			if (val === 0) {
				obj[key] = null;
			} else if (val !== null) {
				obj[key] = new Date(val * 1000);
			}
		} else if (key == 'clanid' && typeof val === 'number') {
			let id = new SteamID();
			id.universe = SteamID.Universe.PUBLIC;
			id.type = SteamID.Type.CLAN;
			id.instance = SteamID.Instance.ALL;
			id.accountid = val;
			obj[key] = id;
		} else if ((key == 'accountid' || key.match(/^accountid_/) || key.match(/_accountid$/)) && typeof val === 'number') {
			let newKey = key == 'accountid' ? 'steamid' : key.replace('accountid_', 'steamid_').replace('_accountid', '_steamid');
			obj[newKey] = val === 0 ? null : SteamID.fromIndividualAccountID(val);
			delete obj[key];
		} else if (key.includes('avatar_sha')) {
			let url = null;
			if (obj[key] && obj[key].length) {
				url = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/chaticons/";
				url += obj[key][0].toString(16) + '/';
				url += obj[key][1].toString(16) + '/';
				url += obj[key][2].toString(16) + '/';
				url += obj[key].toString('hex') + '_256.jpg';
			}

			obj[key.replace('avatar_sha', 'avatar_url')] = url;
		} else if (key.match(/^can_/) && obj[key] === null) {
			obj[key] = false;
		} else if (isDataObject(val)) {
			obj[key] = preProcessObject(val);
		} else if (Array.isArray(val) && val.every(isDataObject)) {
			obj[key] = val.map(preProcessObject);
		}
	}

	return obj;
}

function isDataObject(val) {
	return val !== null && typeof val === 'object' && (val.constructor.name == 'Object' || val.constructor.name == '');
}

function convertDateToUnix(date) {
	if (date instanceof Date) {
		return Math.floor(date.getTime() / 1000);
	} else if (typeof date !== 'numeric') {
		throw new Error('Timestamp must be a Date object or a numeric Unix timestamp');
	} else if (date > 1420088400000) {
		return Math.floor(date / 1000);
	} else {
		return date;
	}
}
