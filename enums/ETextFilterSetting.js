/**
 * @enum ETextFilterSetting
 * @readonly
 */
const ETextFilterSetting = {
	SteamLabOptedOut: 0,
	Enabled: 1,
	EnabledAllowProfanity: 2,
	Disabled: 3,

	// Value-to-name mapping for convenience
	0: 'SteamLabOptedOut',
	1: 'Enabled',
	2: 'EnabledAllowProfanity',
	3: 'Disabled',
};

module.exports = ETextFilterSetting;
