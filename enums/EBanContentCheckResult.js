/**
 * @enum EBanContentCheckResult
 * @readonly
 */
const EBanContentCheckResult = {
	NotScanned: 0,
	Reset: 1,
	NeedsChecking: 2,
	VeryUnlikely: 5,
	Unlikely: 30,
	Possible: 50,
	Likely: 75,
	VeryLikely: 100,

	// Value-to-name mapping for convenience
	0: 'NotScanned',
	1: 'Reset',
	2: 'NeedsChecking',
	5: 'VeryUnlikely',
	30: 'Unlikely',
	50: 'Possible',
	75: 'Likely',
	100: 'VeryLikely',
};

module.exports = EBanContentCheckResult;
