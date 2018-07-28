const SteamID = require('steamid');

module.exports = SteamChatRoomClient;

function SteamChatRoomClient(user) {
	this.user = user;
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
		body.user_chat_group_state = processChatGroupState(body.user_chat_group_state);
		callback(null, body);
	});
};






/**
 * Process a chat room summary pair.
 * @param {object} summaryPair
 * @returns {object}
 */
function processChatRoomSummaryPair(summaryPair) {
	summaryPair.group_state = processChatGroupState(summaryPair.user_chat_group_state);
	summaryPair.group_summary = processChatGroupSummary(summaryPair.group_summary);
	delete summaryPair.user_chat_group_state;
	return summaryPair;
}

/**
 * Process a chat group state.
 * @param {object} groupState
 * @returns {object}
 */
function processChatGroupState(groupState) {
	groupState = preProcessObject(groupState);
	if (groupState.user_chat_room_state) {
		groupState.user_chat_room_state = groupState.user_chat_room_state.map(preProcessObject);
	}

	return groupState;
}

/**
 * Process a chat group summary.
 * @param {object} groupSummary
 * @returns {object}
 */
function processChatGroupSummary(groupSummary) {
	groupSummary = preProcessObject(groupSummary);
	if (groupSummary.chat_rooms) {
		groupSummary.chat_rooms = groupSummary.chat_rooms.map(preProcessObject);
	}
	if (groupSummary.role_actions) {
		groupSummary.role_actions = groupSummary.role_actions.map(preProcessObject);
	}
	if (groupSummary.top_members) {
		groupSummary.top_members = groupSummary.top_members.map(accountid => SteamID.fromIndividualAccountID(accountid));
	}

	return groupSummary;
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
		if (key.match(/^steamid_/) && typeof val === 'object' && val !== null) {
			obj[key] = new SteamID(val.toString());
		} else if (val !== null && typeof val === 'object' && val.constructor.name == 'Long') {
			obj[key] = val.toString();
		} else if (key.match(/^time_/)) {
			if (val === 0) {
				obj[key] = null;
			} else if (val !== null) {
				obj[key] = new Date(val * 1000);
			}
		} else if (key.match(/^accountid_/) && typeof val === 'number') {
			obj[key.replace('accountid_', 'steamid_')] = SteamID.fromIndividualAccountID(val);
			delete obj[key];
		}
	}

	return obj;
}
