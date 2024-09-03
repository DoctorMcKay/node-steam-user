/**
 * @enum EStorageBlockFileSystemType
 * @readonly
 */
const EStorageBlockFileSystemType = {
	Invalid: 0,
	Unknown: 1,
	VFat: 2,
	Ext4: 3,

	// Value-to-name mapping for convenience
	0: 'Invalid',
	1: 'Unknown',
	2: 'VFat',
	3: 'Ext4',
};

module.exports = EStorageBlockFileSystemType;
