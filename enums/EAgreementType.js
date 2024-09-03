/**
 * @enum EAgreementType
 * @readonly
 */
const EAgreementType = {
	Invalid: -1,
	GlobalSSA: 0,
	ChinaSSA: 1,

	// Value-to-name mapping for convenience
	'-1': 'Invalid',
	0: 'GlobalSSA',
	1: 'ChinaSSA',
};

module.exports = EAgreementType;
