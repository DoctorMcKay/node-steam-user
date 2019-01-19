/**
  * @enum EHIDDeviceDisconnectMethod
  */
module.exports = {
	"Unknown": 0,
	"Bluetooth": 1,
	"FeatureReport": 2,
	"OutputReport": 3,

	// Value-to-name mapping for convenience
	"0": "Unknown",
	"1": "Bluetooth",
	"2": "FeatureReport",
	"3": "OutputReport",
};
