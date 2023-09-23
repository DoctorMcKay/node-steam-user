/**
 * @enum EPublishedFileStorageSystem
 * @readonly
 */
const EPublishedFileStorageSystem = {
	Invalid: 0,
	LegacyCloud: 1,
	Depot: 2,
	UGCCloud: 3,

	// Value-to-name mapping for convenience
	0: 'Invalid',
	1: 'LegacyCloud',
	2: 'Depot',
	3: 'UGCCloud',
};

module.exports = EPublishedFileStorageSystem;
