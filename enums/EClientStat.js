/**
 * @enum EClientStat
 */
module.exports = {
	"P2PConnectionsUDP": 0,
	"P2PConnectionsRelay": 1,
	"P2PGameConnections": 2,
	"P2PVoiceConnections": 3,
	"BytesDownloaded": 4,
	"Max": 5,

	// Value-to-name mapping for convenience
	"0": "P2PConnectionsUDP",
	"1": "P2PConnectionsRelay",
	"2": "P2PGameConnections",
	"3": "P2PVoiceConnections",
	"4": "BytesDownloaded",
	"5": "Max",
};
