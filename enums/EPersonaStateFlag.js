/**
 * @enum EPersonaStateFlag
 */
module.exports = {
	"HasRichPresence": 1,
	"InJoinableGame": 2,
	"Golden": 4, // obsolete "no longer has any effect"
	"OnlineUsingWeb": 256, // obsolete "renamed to ClientTypeWeb"
	"ClientTypeWeb": 256,
	"OnlineUsingMobile": 512, // obsolete "renamed to ClientTypeMobile"
	"ClientTypeMobile": 512,
	"OnlineUsingBigPicture": 1024, // obsolete "renamed to ClientTypeTenfoot"
	"ClientTypeTenfoot": 1024,
	"OnlineUsingVR": 2048, // obsolete "renamed to ClientTypeVR"
	"ClientTypeVR": 2048,
	"LaunchTypeGamepad": 4096,

	// Value-to-name mapping for convenience
	"1": "HasRichPresence",
	"2": "InJoinableGame",
	"4": "Golden",
	"256": "ClientTypeWeb",
	"512": "ClientTypeMobile",
	"1024": "ClientTypeTenfoot",
	"2048": "ClientTypeVR",
	"4096": "LaunchTypeGamepad",
};
