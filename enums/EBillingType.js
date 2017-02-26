/**
 * @enum EBillingType
 */
module.exports = {
	"NoCost": 0,
	"BillOnceOnly": 1,
	"BillMonthly": 2,
	"ProofOfPrepurchaseOnly": 3,
	"GuestPass": 4,
	"HardwarePromo": 5,
	"Gift": 6,
	"AutoGrant": 7,
	"OEMTicket": 8,
	"RecurringOption": 9,
	"BillOnceOrCDKey": 10,
	"Repurchaseable": 11,
	"FreeOnDemand": 12,
	"Rental": 13,
	"NumBillingTypes": 14,

	// Value-to-name mapping for convenience
	"0": "NoCost",
	"1": "BillOnceOnly",
	"2": "BillMonthly",
	"3": "ProofOfPrepurchaseOnly",
	"4": "GuestPass",
	"5": "HardwarePromo",
	"6": "Gift",
	"7": "AutoGrant",
	"8": "OEMTicket",
	"9": "RecurringOption",
	"10": "BillOnceOrCDKey",
	"11": "Repurchaseable",
	"12": "FreeOnDemand",
	"13": "Rental",
	"14": "NumBillingTypes",
};
