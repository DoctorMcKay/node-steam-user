module.exports = {
	"Private": 2,
	"FriendsOnly": 4,
	"Public": 8,

	// Value-to-name mapping for convenience
	"2": "Private",
	"4": "FriendsOnly",
	"8": "Public",
};

module.exports.Invalid = module.exports.-1;
module.exports.All = module.exports.Public | module.exports.FriendsOnly | module.exports.Private;
