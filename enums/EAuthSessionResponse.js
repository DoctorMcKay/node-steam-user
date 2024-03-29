/* eslint-disable */
// Auto-generated by generate-enums script on Thu Feb 24 2022 03:38:38 GMT-0500 (Eastern Standard Time)

/**
 * @enum
 * @readonly
 */
const EAuthSessionResponse = {
	"OK": 0,
	"UserNotConnectedToSteam": 1,
	"NoLicenseOrExpired": 2,
	"VACBanned": 3,
	"LoggedInElseWhere": 4,
	"VACCheckTimedOut": 5,
	"AuthTicketCanceled": 6,
	"AuthTicketInvalidAlreadyUsed": 7,
	"AuthTicketInvalid": 8,
	"PublisherIssuedBan": 9,

	// Value-to-name mapping for convenience
	"0": "OK",
	"1": "UserNotConnectedToSteam",
	"2": "NoLicenseOrExpired",
	"3": "VACBanned",
	"4": "LoggedInElseWhere",
	"5": "VACCheckTimedOut",
	"6": "AuthTicketCanceled",
	"7": "AuthTicketInvalidAlreadyUsed",
	"8": "AuthTicketInvalid",
	"9": "PublisherIssuedBan",
};

module.exports = EAuthSessionResponse;
