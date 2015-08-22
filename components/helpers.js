var SteamID = require('steamid');

/**
 * If the input isn't already a SteamID object, converts it into one and returns it
 * @param input
 * @returns SteamID
 */
exports.steamID = function(input) {
	if(typeof input !== 'string') {
		var keys = Object.keys(input);
		if (keys.indexOf('universe') != -1 && keys.indexOf('type') != -1 && keys.indexOf('instance') != -1 && keys.indexOf('accountid') != -1 && keys.indexOf('isValid') != -1) {
			return input; // Looks like it's already a SteamID
		}

		input = input.toString();
	}

	return new SteamID(input);
};
