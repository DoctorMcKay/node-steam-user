const Crypto = require('crypto');
const OS = require('os');
const SteamID = require('steamid');

const EOSType = require('../enums/EOSType.js');
const EResult = require('../enums/EResult.js');

/**
 * If the input isn't already a SteamID object, converts it into one and returns it
 * @param input
 * @returns {SteamID}
 */
exports.steamID = function(input) {
	if (typeof input !== 'string') {
		let keys = Object.keys(input);
		if (keys.indexOf('universe') != -1 && keys.indexOf('type') != -1 && keys.indexOf('instance') != -1 && keys.indexOf('accountid') != -1 && keys.indexOf('isValid') != -1) {
			return input; // Looks like it's already a SteamID
		}

		input = input.toString();
	}

	return new SteamID(input);
};

/**
 * Get an machine ID for internal use (not sent to Steam)
 * @returns {string}
 */
exports.getInternalMachineID = function() {
	// Build our machine ID off of hostname, memory, and CPU data
	let cpus = OS.cpus().map(function(cpu) {
		return cpu.model;
	});

	cpus.sort();

	let id = OS.hostname() + OS.totalmem() + cpus.join('');
	let hash = Crypto.createHash('md5');
	hash.update(id);
	return hash.digest('hex');
};

/**
 * Get an Error object for a particular EResult
 * @param {int} eresult
 * @returns {null|Error}
 */
exports.eresultError = function(eresult) {
	if (eresult == EResult.OK) {
		// no error
		return null;
	}

	let err = new Error(EResult[eresult] || ("Error " + eresult));
	err.eresult = eresult;
	return err;
};

/**
 * @return {EOSType}
 */
exports.getOsType = function() {
	switch (OS.platform()) {
		case 'darwin':
			let match = OS.release().match(/Darwin Kernel Version (\d+)\.(\d+)\.(\d+)/);
			if (!match) {
				return EOSType.MacOSUnknown;
			}

			if (match[1] == 10 && match[2] == 0 && match[3] == 0) {
				return EOSType.MacOS106; // Snow Leopard
			}

			if (match[1] == 11 && match[2] == 3) {
				return EOSType.MacOS107; // Lion
			}

			if (match[1] == 12 && match[2] == 2) {
				return EOSType.MacOS108; // Mountain Lion
			}

			if (match[1] == 13 && match[2] == 0) {
				return EOSType.MacOS109; // Mavericks
			}

			if (match[1] == 14 && match[2] == 0) {
				return EOSType.MacOS1010; // Yosemite
			}

			return EOSType.MacOSUnknown;

		case 'win32':
			// http://prajwaldesai.com/windows-operating-system-version-numbers/
			let verParts = OS.release().split('.');
			if (verParts.length < 3) {
				return EOSType.WinUnknown;
			}

			if (verParts[0] == 3) {
				return EOSType.Win311; // yeah right
			}

			if (verParts[0] == 4 && parseInt(verParts[1], 10) <= 3) {
				return EOSType.Win95;
			}

			if (verParts[0] == 4 && verParts[1] == 10) {
				return EOSType.Win98;
			}

			if (verParts[0] == 4 && verParts[1] == 90) {
				return EOSType.WinME;
			}

			if (verParts[0] == 5 && verParts[1] == "00" && verParts[2] == 1515) {
				return EOSType.WinNT;
			}

			if (verParts[0] == 5 && parseInt(verParts[1], 10) < 1) {
				return EOSType.Win200;
			}

			if (verParts[0] == 5 && verParts[1] == 1) {
				return EOSType.WinXP;
			}

			if (verParts[0] == 5 && verParts[1] == 2) {
				return EOSType.Win2003;
			}

			if (verParts[0] == 6 && verParts[1] == 0 && verParts[2] == 6001) {
				return EOSType.Win2008;
			}

			if (verParts[0] == 6 && verParts[1] == 0) {
				return EOSType.WinVista;
			}

			if (verParts[0] == 6 && verParts[1] == 1) {
				return EOSType.Win7;
			}

			if (verParts[0] == 6 && verParts[1] == 2) {
				return EOSType.Win8;
			}

			if (verParts[0] == 6 && verParts[1] == 3) {
				return EOSType.Win81;
			}

			if (verParts[0] == 10) {
				return EOSType.Win10;
			}

			return EOSType.WinUnknown;

		default:
			return EOSType.LinuxUnknown;
	}
};

exports.fixVdfArray = function(arr) {
	arr.length = Object.keys(arr).length;
	return Array.prototype.slice.call(arr);
};
