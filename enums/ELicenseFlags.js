/* eslint-disable */
// Auto-generated by generate-enums script on Mon Sep 02 2024 23:48:07 GMT-0400 (Eastern Daylight Time)

/**
 * @enum
 * @readonly
 */
const ELicenseFlags = {
	"None": 0,
	"Renew": 1,
	"RenewalFailed": 2,
	"Pending": 4,
	"Expired": 8,
	"CancelledByUser": 16,
	"CancelledByAdmin": 32,
	"LowViolenceContent": 64,
	"ImportedFromSteam2": 128,
	"ForceRunRestriction": 256,
	"RegionRestrictionExpired": 512,
	"CancelledByFriendlyFraudLock": 1024,
	"NotActivated": 2048,
	"PendingRefund": 8192,
	"Borrowed": 16384,
	"ReleaseStateOverride": 32768,
	"CancelledByPartner": 262144,
	"NonPermanent": 524288,
	"PreferredOwner": 1048576,

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
	"256": "ForceRunRestriction",
	"512": "RegionRestrictionExpired",
	"1024": "CancelledByFriendlyFraudLock",
	"2048": "NotActivated",
	"8192": "PendingRefund",
	"16384": "Borrowed",
	"32768": "ReleaseStateOverride",
	"262144": "CancelledByPartner",
	"524288": "NonPermanent",
	"1048576": "PreferredOwner",
};

module.exports = ELicenseFlags;
