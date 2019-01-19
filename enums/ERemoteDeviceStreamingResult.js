/**
  * @enum ERemoteDeviceStreamingResult
  */
module.exports = {
	"Success": 0,
	"Unauthorized": 1,
	"ScreenLocked": 2,
	"Failed": 3,
	"Busy": 4,
	"InProgress": 5,
	"Canceled": 6,
	"DriversNotInstalled": 7,
	"Disabled": 8,
	"BroadcastingActive": 9,
	"VRActive": 10,
	"PINRequired": 11,

	// Value-to-name mapping for convenience
	"0": "Success",
	"1": "Unauthorized",
	"2": "ScreenLocked",
	"3": "Failed",
	"4": "Busy",
	"5": "InProgress",
	"6": "Canceled",
	"7": "DriversNotInstalled",
	"8": "Disabled",
	"9": "BroadcastingActive",
	"10": "VRActive",
	"11": "PINRequired",
};
