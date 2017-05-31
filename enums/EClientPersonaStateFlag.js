/**
 * @enum EClientPersonaStateFlag
 */
module.exports = {
	"Status": 1,
	"PlayerName": 2,
	"QueryPort": 4,
	"SourceID": 8,
	"Presence": 16,
	"Metadata": 32, // removed
	"LastSeen": 64,
	"ClanInfo": 128,
	"GameExtraInfo": 256,
	"GameDataBlob": 512,
	"ClanTag": 1024,
	"Facebook": 2048,

	// Value-to-name mapping for convenience
	"1": "Status",
	"2": "PlayerName",
	"4": "QueryPort",
	"8": "SourceID",
	"16": "Presence",
	"32": "Metadata",
	"64": "LastSeen",
	"128": "ClanInfo",
	"256": "GameExtraInfo",
	"512": "GameDataBlob",
	"1024": "ClanTag",
	"2048": "Facebook",
};
