/* eslint-disable */
// Auto-generated by generate-enums script on Thu Feb 24 2022 03:38:38 GMT-0500 (Eastern Standard Time)

/**
 * @enum
 * @readonly
 */
const EStreamFramerateLimiter = {
	"SlowCapture": 1,
	"SlowConvert": 2,
	"SlowEncode": 4,
	"SlowNetwork": 8,
	"SlowDecode": 16,
	"SlowGame": 32,
	"SlowDisplay": 64,

	// Value-to-name mapping for convenience
	"1": "SlowCapture",
	"2": "SlowConvert",
	"4": "SlowEncode",
	"8": "SlowNetwork",
	"16": "SlowDecode",
	"32": "SlowGame",
	"64": "SlowDisplay",
};

module.exports = EStreamFramerateLimiter;
