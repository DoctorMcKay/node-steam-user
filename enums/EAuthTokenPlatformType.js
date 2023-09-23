/**
 * @enum EAuthTokenPlatformType
 * @readonly
 */
const EAuthTokenPlatformType = {
	Unknown: 0,
	SteamClient: 1,
	WebBrowser: 2,
	MobileApp: 3,

	// Value-to-name mapping for convenience
	0: 'Unknown',
	1: 'SteamClient',
	2: 'WebBrowser',
	3: 'MobileApp',
};

module.exports = EAuthTokenPlatformType;
