var SteamID = require('steamid');
var Crypto = require('crypto');

/**
 * If the input isn't already a SteamID object, converts it into one and returns it
 * @param input
 * @returns {SteamID}
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

/**
 * Convert an IP in integer notation to dotted-decimal notation
 * @param {int} input
 * @returns {string}
 */
exports.ipIntToString = function(input) {
	return ((input >> 24) & 0xFF) + "." + ((input >> 16) & 0xFF) + "." + ((input >> 8) & 0xFF) + "." + (input & 0xFF);
};

/**
 * Convert an IP in dotted-decimal notation to integer notation
 * @param {string} input
 * @returns {int}
 */
exports.ipStringToInt = function(input) {
	var parts = input.split('.');
	return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
};

/**
 * Get an machine ID for internal use (not sent to Steam)
 * @returns {string}
 */
exports.getInternalMachineID = function() {
	// Build our machine ID off of hostname, memory, and CPU data
	var os = require('os');
	var cpus = os.cpus().map(function(cpu) {
		return cpu.model;
	});

	cpus.sort();

	var id = os.hostname() + os.totalmem() + cpus.join('');
	var hash = Crypto.createHash('md5');
	hash.update(id);
	return hash.digest('hex');
};

/**
 * Get an Error object for a particular EResult
 * @param {int} eresult
 * @returns {null|Error}
 */
exports.eresultError = function(eresult) {
	if (eresult == SteamUser.EResult.OK) {
		// no error
		return null;
	}

	var err = new Error("Error " + eresult);
	for (var i in SteamUser.EResult) {
		if (SteamUser.EResult.hasOwnProperty(i) && SteamUser.EResult[i] == eresult) {
			err.message = i;
		}
	}

	err.eresult = eresult;
	return err;
};
