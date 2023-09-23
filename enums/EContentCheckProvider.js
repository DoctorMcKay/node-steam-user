/**
 * @enum EContentCheckProvider
 * @readonly
 */
const EContentCheckProvider = {
	Invalid: 0,
	Google: 1,
	Amazon: 2,
	Local: 3,

	// Value-to-name mapping for convenience
	0: 'Invalid',
	1: 'Google',
	2: 'Amazon',
	3: 'Local',
};

module.exports = EContentCheckProvider;
