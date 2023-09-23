/**
 * @enum EStorageBlockContentType
 * @readonly
 */
const EStorageBlockContentType = {
	Invalid: 0,
	Unknown: 1,
	FileSystem: 2,
	Crypto: 3,
	Raid: 4,

	// Value-to-name mapping for convenience
	0: 'Invalid',
	1: 'Unknown',
	2: 'FileSystem',
	3: 'Crypto',
	4: 'Raid',
};

module.exports = EStorageBlockContentType;
