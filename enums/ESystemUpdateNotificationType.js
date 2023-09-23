/**
 * @enum ESystemUpdateNotificationType
 * @readonly
 */
const ESystemUpdateNotificationType = {
	Invalid: 0,
	Available: 1,
	NeedsRestart: 2,

	// Value-to-name mapping for convenience
	0: 'Invalid',
	1: 'Available',
	2: 'NeedsRestart',
};

module.exports = ESystemUpdateNotificationType;
