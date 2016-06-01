/**
 * @enum EFriendRelationship
 */
module.exports = {
	"None": 0,
	"Blocked": 1,
	"RequestRecipient": 2,
	"Friend": 3,
	"RequestInitiator": 4,
	"Ignored": 5,
	"IgnoredFriend": 6,
	"SuggestedFriend": 7,
	"Max": 8,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "Blocked",
	"2": "RequestRecipient",
	"3": "Friend",
	"4": "RequestInitiator",
	"5": "Ignored",
	"6": "IgnoredFriend",
	"7": "SuggestedFriend",
	"8": "Max",
};
