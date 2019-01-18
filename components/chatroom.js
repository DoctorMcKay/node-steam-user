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
		if (body.mentions) {
			body.mentions = processChatMentions(body.mentions);
		}

		this.chat.emit('chatMessage', body);
	});

	this.user._handlerManager.add('ChatRoomClient.NotifyChatMessageModified#1', function(body) {
		body = preProcessObject(body);
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
			return reject(new Error("Malformed invite link"));
		}

		this.user._sendUnified("ChatRoom.GetInviteLinkInfo#1", {"invite_code": match[1]}, (body) => {
			body = preProcessObject(body);
			body.group_summary = processChatGroupSummary(body.group_summary);
			body.user_chat_group_state = preProcessObject(body.user_chat_group_state);
			accept(body);
		});
	});
};

SteamChatRoomClient.prototype.joinGroup = function(groupId, inviteCode, callback) {
	return StdLib.Promises.callbackPromise(null, callback, (accept, reject) => {
		this.user._sendUnified("ChatRoom.JoinChatRoomGroup#1", {
			"chat_group_id": groupId,
			"invite_code": inviteCode
		}, (body) => {
			body = preProcessObject(body);
			// TODO
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
 * @param {int} groupId
 * @param {int} chatId
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
			accept(body);
		});
	});
};

/**
 * Get message history for a chat (channel).
 * @param {int} groupId
 * @param {int} chatId
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
 * Process a chat room summary pair.
 * @param {object} summaryPair
 * @returns {object}
 */
function processChatRoomSummaryPair(summaryPair) {
	summaryPair.group_state = preProcessObject(summaryPair.user_chat_group_state);
	summaryPair.group_summary = preProcessObject(summaryPair.group_summary);
	delete summaryPair.user_chat_group_state;
	return summaryPair;
}

/**
 * Process a chat group summary.
 * @param {object} groupSummary
 * @returns {object}
 */
function processChatGroupSummary(groupSummary) {
	groupSummary = preProcessObject(groupSummary);
	if (groupSummary.top_members) {
		groupSummary.top_members = groupSummary.top_members.map(accountid => SteamID.fromIndividualAccountID(accountid));
	}

	return groupSummary;
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
		} else if (key.match(/^accountid_/) && typeof val === 'number') {
			obj[key.replace('accountid_', 'steamid_')] = val === 0 ? null : SteamID.fromIndividualAccountID(val);
			delete obj[key];
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
