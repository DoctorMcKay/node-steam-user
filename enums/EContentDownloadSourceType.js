/**
 * @enum EContentDownloadSourceType
 */
module.exports = {
	"Invalid": 0,
	"CS": 1,
	"CDN": 2,
	"LCS": 3,
	"ProxyCache": 4,
	"LANPeer": 5,
	"Max": 5,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "CS",
	"2": "CDN",
	"3": "LCS",
	"4": "ProxyCache",
	"5": "Max",
};
