/**
 * @enum EClientNotificationType
 * @readonly
 */
const EClientNotificationType = {
	"Invalid": 0,
	"DownloadCompleted": 1,
	"FriendInvite": 2,
	"FriendInGame": 3,
	"FriendOnline": 4,
	"Achievement": 5,
	"LowBattery": 6,
	"SystemUpdate": 7,
	"FriendMessage": 8,
	"GroupChatMessage": 9,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "DownloadCompleted",
	"2": "FriendInvite",
	"3": "FriendInGame",
	"4": "FriendOnline",
	"5": "Achievement",
	"6": "LowBattery",
	"7": "SystemUpdate",
	"8": "FriendMessage",
	"9": "GroupChatMessage",
};

module.exports = EClientNotificationType;
