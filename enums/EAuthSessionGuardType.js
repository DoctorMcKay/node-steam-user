/**
 * @enum EAuthSessionGuardType
 * @readonly
 */
const EAuthSessionGuardType = {
	"Unknown": 0,
	"None": 1,
	"EmailCode": 2,
	"DeviceCode": 3,
	"DeviceConfirmation": 4,
	"EmailConfirmation": 5,

	// Value-to-name mapping for convenience
	"0": "Unknown",
	"1": "None",
	"2": "EmailCode",
	"3": "DeviceCode",
	"4": "DeviceConfirmation",
	"5": "EmailConfirmation",
};

module.exports = EAuthSessionGuardType;
