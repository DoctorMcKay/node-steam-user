const EventEmitter = require('events').EventEmitter;
const SteamID = require('steamid');
const Util = require('util');

Util.inherits(SteamChatRoomClient, EventEmitter);

module.exports = SteamChatRoomClient;

function SteamChatRoomClient(user) {
	this.user = user;

	this.user._handlers['ChatRoomClient.NotifyIncomingChatMessage#1'] = (body) => {
		body = preProcessObject(body);
		if (body.mentions) {
			body.mentions = processChatMentions(body.mentions);
		}

		this.emit('incomingChatMessage', body);
	};

	this.user._handlers['ChatRoomClient.NotifyChatMessageModified#1'] = (body) => {
		body = preProcessObject(body);
		this.emit('chatMessagesModified', body);
	};
}

/**
 * Get a list of the chat room groups you're in.
 * @param {function} callback
 */
SteamChatRoomClient.prototype.getGroups = function(callback) {
	this.user._sendUnified("ChatRoom.GetMyChatRoomGroups#1", {}, (body) => {
		body.chat_room_groups = body.chat_room_groups.map(processChatRoomSummaryPair);
		let groups = {};
		body.chat_room_groups.forEach((group) => {
			groups[group.group_summary.chat_group_id] = group;
		});

		body.chat_room_groups = groups;
		callback(null, body);
	});
};

/**
 * Get details from a chat group invite link.
 * @param {string} linkUrl
 * @param {function} callback
 */
SteamChatRoomClient.prototype.getInviteLinkInfo = function(linkUrl, callback) {
	let match = linkUrl.match(/^https?:\/\/s\.team\/chat\/([^\/]+)$/);
	if (!match) {
		callback(new Error("Malformed invite link"));
		return;
	}

	this.user._sendUnified("ChatRoom.GetInviteLinkInfo#1", {"invite_code": match[1]}, (body) => {
		body = preProcessObject(body);
		body.group_summary = processChatGroupSummary(body.group_summary);
		body.user_chat_group_state = preProcessObject(body.user_chat_group_state);
		callback(null, body);
	});
};

SteamChatRoomClient.prototype.joinGroup = function(groupId, inviteCode, callback) {
	this.user._sendUnified("ChatRoom.JoinChatRoomGroup#1", {"chat_group_id": groupId, "invite_code": inviteCode}, (body) => {
		body = preProcessObject(body);
		// TODO
	});
};

/**
 * Subscribe to notifications related to some list of chat room groups.
 * @param {int[]|string[]} groupIds
 * @param {function} [callback]
 */
SteamChatRoomClient.prototype.subscribeToGroups = function(groupIds, callback) {
	this.user._send(require('../index.js').EMsg.ClientCurrentUIMode, {"chat_mode": 2});
	this.user._sendUnified("ChatRoom.SetSessionActiveChatRoomGroups#1", {
		"chat_group_ids": groupIds,
		"chat_groups_data_requested": callback ? groupIds : []
	}, (body) => {
		if (!callback) {
			return;
		}

		// TODO
		callback(null, body);
	});
};

/**
 * Send a message to a chat room.
 * @param {int} groupId
 * @param {int} chatId
 * @param {string} message
 * @param {function} [callback]
 */
SteamChatRoomClient.prototype.sendMessage = function(groupId, chatId, message, callback) {
	this.user._sendUnified("ChatRoom.SendChatMessage#1", {
		"chat_group_id": groupId,
		"chat_id": chatId,
		"message": message
	}, (body) => {
		if (!callback) {
			return;
		}

		body = preProcessObject(body);
		callback(null, body);
	});
};

/**
 * Get message history for a chat (channel).
 * @param {int} groupId
 * @param {int} chatId
 * @param {{[maxCount], [lastTime], [lastOrdinal], [startTime], [startOrdinal]}} [options]
 * @param {function} callback
 */
SteamChatRoomClient.prototype.getChatMessageHistory = function(groupId, chatId, options, callback) {
	if (typeof options === 'function') {
		callback = options;
		options = {};
	}

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

		callback(null, body);
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
		if (key == 'ordinal' && val === null) {
			obj[key] = 0;
		} else if (key.match(/^steamid_/) && typeof val === 'object' && val !== null) {
			obj[key] = new SteamID(val.toString());
		} else if (val !== null && typeof val === 'object' && val.constructor.name == 'Long') {
			obj[key] = val.toString();
		} else if (key == 'timestamp' || key == 'server_timestamp' || key.match(/^time_/)) {
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
