/* eslint-disable */
// Auto-generated by generate-enums script on Fri Jun 30 2023 01:13:56 GMT-0400 (Eastern Daylight Time)

/**
 * @enum
 * @readonly
 */
const EServerType = {
	"CEconBase": -5,
	"CServer": -4,
	"Client": -3,
	"Util": -2,
	"Invalid": -1,
	"First": 0,
	"Shell": 0,
	"GM": 1,
	"BUM": 2, // removed
	"BUMOBOSOLETE": 2, // removed
	"AM": 3,
	"BS": 4,
	"VS": 5,
	"ATS": 6,
	"CM": 7,
	"FBS": 8,
	"FG": 9, // removed "renamed to BoxMonitor"
	"BoxMonitor": 9,
	"SS": 10,
	"DRMS": 11,
	"HubOBSOLETE": 12, // removed
	"Console": 13,
	"ASBOBSOLETE": 14, // removed
	"PICS": 14,
	"Client": 15, // removed
	"BootstrapOBSOLETE": 16, // removed
	"ContentStats": 16,
	"DP": 17,
	"WG": 18,
	"SM": 19,
	"SLC": 20,
	"UFS": 21,
	"Util": 23, // removed
	"DSS": 24, // removed "renamed to Community"
	"Community": 24,
	"P2PRelayOBSOLETE": 25, // removed
	"AppInformation": 26,
	"Spare": 27,
	"FTS": 28,
	"EPM": 29, // removed
	"EPMOBSOLETE": 29, // removed
	"SiteLicense": 29,
	"PS": 30,
	"IS": 31,
	"CCS": 32,
	"DFS": 33,
	"LBS": 34,
	"MDS": 35,
	"CS": 36,
	"GC": 37,
	"NS": 38,
	"OGS": 39,
	"WebAPI": 40,
	"UDS": 41,
	"MMS": 42,
	"GMS": 43,
	"KGS": 44,
	"UCM": 45,
	"RM": 46,
	"FS": 47,
	"Econ": 48,
	"Backpack": 49,
	"UGS": 50,
	"Store": 51, // removed "renamed to StoreFeature"
	"StoreFeature": 51,
	"MoneyStats": 52,
	"CRE": 53,
	"UMQ": 54,
	"Workshop": 55,
	"BRP": 56,
	"GCH": 57,
	"MPAS": 58,
	"Trade": 59,
	"Secrets": 60,
	"Logsink": 61,
	"Market": 62,
	"Quest": 63,
	"WDS": 64,
	"ACS": 65,
	"PNP": 66,
	"TaxForm": 67,
	"ExternalMonitor": 68,
	"Parental": 69,
	"PartnerUpload": 70,
	"Partner": 71,
	"ES": 72,
	"DepotWebContent": 73,
	"ExternalConfig": 74,
	"GameNotifications": 75,
	"MarketRepl": 76,
	"MarketSearch": 77,
	"Localization": 78,
	"Steam2Emulator": 79,
	"PublicTest": 80,
	"SolrMgr": 81,
	"BroadcastRelay": 82,
	"BroadcastDirectory": 83,
	"VideoManager": 84,
	"TradeOffer": 85,
	"BroadcastChat": 86,
	"Phone": 87,
	"AccountScore": 88,
	"Support": 89,
	"LogRequest": 90,
	"LogWorker": 91,
	"EmailDelivery": 92,
	"InventoryManagement": 93,
	"Auth": 94,
	"StoreCatalog": 95,
	"HLTVRelay": 96,
	"IDLS": 97,
	"Perf": 98,
	"ItemInventory": 99,
	"Watchdog": 100,
	"AccountHistory": 101,
	"Chat": 102,
	"Shader": 103,
	"AccountHardware": 104,
	"WebRTC": 105,
	"Giveaway": 106,
	"ChatRoom": 107,
	"VoiceChat": 108,
	"QMS": 109,
	"Trust": 110,
	"TimeMachine": 111,
	"VACDBMaster": 112,
	"ContentServerConfig": 113,
	"Minigame": 114,
	"MLTrain": 115,
	"VACTest": 116,
	"TaxService": 117,
	"MLInference": 118,
	"UGSAggregate": 119,
	"TURN": 120,
	"RemoteClient": 121,
	"BroadcastOrigin": 122,
	"BroadcastChannel": 123,
	"SteamAR": 124,
	"China": 125,
	"CrashDump": 126,

	// Value-to-name mapping for convenience
	"-5": "CEconBase",
	"-4": "CServer",
	"-3": "Client",
	"-2": "Util",
	"-1": "Invalid",
	"0": "Shell",
	"1": "GM",
	"2": "BUMOBOSOLETE",
	"3": "AM",
	"4": "BS",
	"5": "VS",
	"6": "ATS",
	"7": "CM",
	"8": "FBS",
	"9": "BoxMonitor",
	"10": "SS",
	"11": "DRMS",
	"12": "HubOBSOLETE",
	"13": "Console",
	"14": "PICS",
	"15": "Client",
	"16": "ContentStats",
	"17": "DP",
	"18": "WG",
	"19": "SM",
	"20": "SLC",
	"21": "UFS",
	"23": "Util",
	"24": "Community",
	"25": "P2PRelayOBSOLETE",
	"26": "AppInformation",
	"27": "Spare",
	"28": "FTS",
	"29": "SiteLicense",
	"30": "PS",
	"31": "IS",
	"32": "CCS",
	"33": "DFS",
	"34": "LBS",
	"35": "MDS",
	"36": "CS",
	"37": "GC",
	"38": "NS",
	"39": "OGS",
	"40": "WebAPI",
	"41": "UDS",
	"42": "MMS",
	"43": "GMS",
	"44": "KGS",
	"45": "UCM",
	"46": "RM",
	"47": "FS",
	"48": "Econ",
	"49": "Backpack",
	"50": "UGS",
	"51": "StoreFeature",
	"52": "MoneyStats",
	"53": "CRE",
	"54": "UMQ",
	"55": "Workshop",
	"56": "BRP",
	"57": "GCH",
	"58": "MPAS",
	"59": "Trade",
	"60": "Secrets",
	"61": "Logsink",
	"62": "Market",
	"63": "Quest",
	"64": "WDS",
	"65": "ACS",
	"66": "PNP",
	"67": "TaxForm",
	"68": "ExternalMonitor",
	"69": "Parental",
	"70": "PartnerUpload",
	"71": "Partner",
	"72": "ES",
	"73": "DepotWebContent",
	"74": "ExternalConfig",
	"75": "GameNotifications",
	"76": "MarketRepl",
	"77": "MarketSearch",
	"78": "Localization",
	"79": "Steam2Emulator",
	"80": "PublicTest",
	"81": "SolrMgr",
	"82": "BroadcastRelay",
	"83": "BroadcastDirectory",
	"84": "VideoManager",
	"85": "TradeOffer",
	"86": "BroadcastChat",
	"87": "Phone",
	"88": "AccountScore",
	"89": "Support",
	"90": "LogRequest",
	"91": "LogWorker",
	"92": "EmailDelivery",
	"93": "InventoryManagement",
	"94": "Auth",
	"95": "StoreCatalog",
	"96": "HLTVRelay",
	"97": "IDLS",
	"98": "Perf",
	"99": "ItemInventory",
	"100": "Watchdog",
	"101": "AccountHistory",
	"102": "Chat",
	"103": "Shader",
	"104": "AccountHardware",
	"105": "WebRTC",
	"106": "Giveaway",
	"107": "ChatRoom",
	"108": "VoiceChat",
	"109": "QMS",
	"110": "Trust",
	"111": "TimeMachine",
	"112": "VACDBMaster",
	"113": "ContentServerConfig",
	"114": "Minigame",
	"115": "MLTrain",
	"116": "VACTest",
	"117": "TaxService",
	"118": "MLInference",
	"119": "UGSAggregate",
	"120": "TURN",
	"121": "RemoteClient",
	"122": "BroadcastOrigin",
	"123": "BroadcastChannel",
	"124": "SteamAR",
	"125": "China",
	"126": "CrashDump",
};

module.exports = EServerType;
