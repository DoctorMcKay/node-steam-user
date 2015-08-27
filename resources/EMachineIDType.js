/**
 * What type of machine ID SteamUser will use to logon to Steam with.
 * @readonly
 * @enum {number}
 * @since 1.7.0
 */
module.exports = {
	/** No machine ID will be provided to Steam */
	"None": 1,

	/** A randomly-generated machine ID will be created on each logon */
	"AlwaysRandom": 2,

	/** A machine ID will be generated from your account's username */
	"AccountNameGenerated": 3,

	/** A random machine ID will be generated and saved to the {dataDirectory}, and will be used for future logons */
	"PersistentRandom": 4
};
