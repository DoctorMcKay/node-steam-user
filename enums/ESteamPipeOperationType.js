/**
  * @enum ESteamPipeOperationType
  */
module.exports = {
	"Invalid": 0,
	"DecryptCPU": 1,
	"DiskRead": 2,
	"DiskWrite": 3,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "DecryptCPU",
	"2": "DiskRead",
	"3": "DiskWrite",
};
