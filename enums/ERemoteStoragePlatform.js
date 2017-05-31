/**
 * @enum ERemoteStoragePlatform
 */
module.exports = {
	"None": 0,
	"Windows": 1,
	"OSX": 2,
	"PS3": 4,
	"Linux": 8,
	"Reserved1": 8, // removed
	"Reserved2": 16,
	"All": -1,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "Windows",
	"2": "OSX",
	"4": "PS3",
	"8": "Reserved1",
	"16": "Reserved2",
	"-1": "All",
};
