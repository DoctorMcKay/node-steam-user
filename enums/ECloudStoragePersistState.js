/**
 * @enum ECloudStoragePersistState
 * @readonly
 */
const ECloudStoragePersistState = {
	Persisted: 0,
	Forgotten: 1,
	Deleted: 2,

	// Value-to-name mapping for convenience
	0: 'Persisted',
	1: 'Forgotten',
	2: 'Deleted',
};

module.exports = ECloudStoragePersistState;
