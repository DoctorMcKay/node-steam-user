/**
 * @enum ELicenseFlags
 */
module.exports = {
	"None": 0,
	"Renew": 1,
	"RenewalFailed": 2,
	"Pending": 4,
	"Expired": 8,
	"CancelledByUser": 16,
	"CancelledByAdmin": 32,
	"LowViolenceContent": 64,
	"ImportedFromSteam2": 128,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "Renew",
	"2": "RenewalFailed",
	"4": "Pending",
	"8": "Expired",
	"16": "CancelledByUser",
	"32": "CancelledByAdmin",
	"64": "LowViolenceContent",
	"128": "ImportedFromSteam2",
};
