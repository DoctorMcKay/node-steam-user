/**
 * @enum EPersonaStateFlag
 */
module.exports = {
	"HasRichPresence": 1,
	"InJoinableGame": 2,
	"OnlineUsingWeb": 256,
	"OnlineUsingMobile": 512,
	"OnlineUsingBigPicture": 1024,
	"OnlineUsingVR": 2048,

	// Value-to-name mapping for convenience
	"1": "HasRichPresence",
	"2": "InJoinableGame",
	"256": "OnlineUsingWeb",
	"512": "OnlineUsingMobile",
	"1024": "OnlineUsingBigPicture",
	"2048": "OnlineUsingVR",
};
