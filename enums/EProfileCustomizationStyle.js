/**
 * @enum EProfileCustomizationStyle
 * @readonly
 */
const EProfileCustomizationStyle = {
	Default: 0,
	Selected: 1,
	Rarest: 2,
	MostRecent: 3,
	Random: 4,
	HighestRated: 5,

	// Value-to-name mapping for convenience
	0: 'Default',
	1: 'Selected',
	2: 'Rarest',
	3: 'MostRecent',
	4: 'Random',
	5: 'HighestRated',
};

module.exports = EProfileCustomizationStyle;
