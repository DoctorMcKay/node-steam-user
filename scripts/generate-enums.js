const FS = require('fs');
const HTTPS = require('https');
const URL = require('url');

// Sometimes Valve prefixes an enum with "k_ESomePrefix_", sometimes they prefix with "k_ETheEnumName", and sometimes
// they prefix with "k_ENotTheEnumName" (without an underscore). This third case can't be handled automatically.
const ENUMS_WITH_DIFFERENT_PREFIXES_FROM_THEIR_NAMES = {
	"EFrameAccumulatedStat": "k_EFrameStat",
	"EHIDDeviceDisconnectMethod": "k_EDeviceDisconnectMethod",
	"EHIDDeviceLocation": "k_EDeviceLocation",
	"ELogFileType": "k_ELogFile",
	"EPublishedFileForSaleStatus": "k_PFFSS_",
	"ERemoteClientBroadcastMsg": "k_ERemoteDevice",
	"ERemoteDeviceAuthorizationResult": "k_ERemoteDeviceAuthorization",
	"ERemoteDeviceStreamingResult": "k_ERemoteDeviceStreaming",
	"EStreamControlMessage": "k_EStreamControl",
	"EStreamDataMessage": "k_EStream",
	"EStreamDiscoveryMessage": "k_EStreamDiscovery",
	"EStreamFrameEvent": "k_EStream",
	"EStreamFramerateLimiter": "k_EStreamFramerate",
	"EStreamGamepadInputType": "k_EStreamGamepadInput",
	"EStreamingDataType": "k_EStreaming",
	"EStreamMouseWheelDirection": "k_EStreamMouseWheel",
	"EStreamQualityPreference": "k_EStreamQuality",
	"EStreamStatsMessage": "k_EStreamStats"
};

// Generate enums
if (!FS.existsSync(__dirname + '/../enums')) {
	FS.mkdirSync(__dirname + '/../enums');
}

let g_EnumNames = [];

download("https://api.github.com/repos/SteamRE/SteamKit/contents/Resources/SteamLanguage", function(data) {
	let json = JSON.parse(data);
	if (!json.length) {
		throw new Error("Cannot get data from GitHub");
	}

	let remainingFiles = 0;
	json.forEach(function(file) {
		if (!file.name.match(/\.steamd$/)) {
			return;
		}

		remainingFiles++;
		// Get the download URL from the github API
		download(file.download_url, function(fileContents) {
			// This parser isn't terribly robust, but it works as long as SteamRE doesn't change their resource format
			let currentEnum = null;
			fileContents.split("\n").forEach(function(line) {
				// Go line-by-line
				line = line.trim(); // trim whitespace
				let idx = line.indexOf("//");
				if (idx != -1) {
					line = line.substring(0, idx).trim(); // remove line comments
				}

				let match;
				if (!currentEnum) {
					// We're not currently parsing any enum. Is this the opening of one?
					if ((match = line.match(/^enum (E[a-zA-Z0-9]+)(<[a-z]+>)?( flags)?/))) {
						// Okay, this is an enum assuming the next line is a bracket
						currentEnum = match[1];
					}
				} else if (typeof currentEnum === 'string') {
					if (line != "{") {
						throw new Error("Syntax error parsing " + file.name + ", bad token following " + currentEnum);
					} else {
						// Okay now we're *really* parsing this enum
						currentEnum = {
							"name": currentEnum,
							"values": [],
							"dynamicValues": []
						};
					}
				} else {
					if (line.match(/^};?$/)) {
						console.log("Generating " + currentEnum.name + ".js...");
						// We're done parsing this enum, let's go ahead and generate the file
						let file = "/**\n * @enum " + currentEnum.name + "\n */\nmodule.exports = {\n";

						currentEnum.values.forEach(function(val) {
							file += "\t\"" + val.name + "\": " + val.value + "," + (val.comment ? " // " + val.comment.trim() : "") + "\n";
						});

						file += "\n\t// Value-to-name mapping for convenience\n";

						// Put down the reverse, for simplicity in use
						currentEnum.values.forEach(function(val, idx) {
							if (!val.value.match(/^-?[0-9]+/)) {
								return; // it's dynamic
							}

							// Is this the last value in this enum with this value?
							if (currentEnum.values.some(function(val2, idx2) { return val2.value == val.value && idx2 > idx; })) {
								return;
							}

							file += "\t\"" + val.value + "\": \"" + val.name + "\",\n";
						});

						file += "};\n";

						if (currentEnum.dynamicValues.length > 0) {
							file += "\n";
							currentEnum.dynamicValues.forEach(function(val) {
								file += "module.exports." + val.name + " = " + val.value + ";" + (val.comment ? " // " + val.comment.trim() : "") + "\n";
							});
						}

						FS.writeFileSync(__dirname + '/../enums/' + currentEnum.name + '.js', file);
						g_EnumNames.push(currentEnum.name);
						currentEnum = null;
					} else if ((match = line.match(/^([A-Za-z0-9_]+) = ([^;]+);(.*)$/))) {
						let name = match[1];
						let value = match[2];
						let comment = match[3];

						if (value.match(/^0x[0-9A-Fa-f]+$/)) {
							value = parseInt(value.substring(2), 16).toString();
						}

						let isDynamic = false;

						let flags = value.split('|').map(function(flag) {
							flag = flag.trim();

							if (flag.match(/^-?[0-9]+$/)) {
								return flag;
							} else {
								isDynamic = true;
								return 'module.exports.' + flag;
							}
						});

						value = flags.join(' | ');

						(isDynamic ? currentEnum.dynamicValues : currentEnum.values).push({
							"name": name,
							"value": value,
							"comment": comment
						});
					}
				}
			});

			if (--remainingFiles == 0) {
				// All done
				console.log("Finished downloading and parsing enums");
				processProtobufEnums();
				g_EnumNames.sort();

				let loader = "// Auto-generated by generate-enums script on " + (new Date()).toString() + "\n\nconst SteamUser = require('../index.js');\n\n";
				loader += g_EnumNames.map(name => "SteamUser." + name + " = require('../enums/" + name + ".js');").join("\n") + "\n";
				FS.writeFileSync(__dirname + '/../resources/enums.js', loader);
			}
		});
	});

	// All done
});

function processProtobufEnums() {
	console.log("Processing protobuf enums...");

	const Schema = require('../protobufs/generated/_load.js');
	for (let enumName in Schema) {
		if (!Schema.hasOwnProperty(enumName)) {
			continue;
		}

		if (enumName[0] != 'E' || Schema[enumName].encode || Schema[enumName].create) {
			continue; // not an enum
		}

		console.log(`Generating ${enumName}.js...`);
		let thisEnum = Schema[enumName];
		let processed = [];
		for (let i in thisEnum) {
			if (!thisEnum.hasOwnProperty(i)) {
				continue;
			}

			let name = i.replace(/^k_E[^_]+_/, '').replace('k_' + enumName, '');
			if (ENUMS_WITH_DIFFERENT_PREFIXES_FROM_THEIR_NAMES[enumName]) {
				name = name.replace(ENUMS_WITH_DIFFERENT_PREFIXES_FROM_THEIR_NAMES[enumName], '');
			}
			processed.push({
				name,
				"value": thisEnum[i]
			});
		}

		processed.sort((a, b) => a.value < b.value ? -1 : 1);
		let enumFile = `/**\n  * @enum ${enumName}\n  */\nmodule.exports = {\n`;
		enumFile += processed.map(v => `\t"${v.name}": ${v.value},`).join("\n");
		enumFile += "\n\n\t// Value-to-name mapping for convenience\n";
		enumFile += processed.map(v => `\t"${v.value}": "${v.name}",`).join("\n");
		enumFile += "\n};\n";
		FS.writeFileSync(`${__dirname}/../enums/${enumName}.js`, enumFile);

		g_EnumNames.push(enumName);
	}

	console.log("Finished processing protobuf enums");
}

// Helper functions
function download(url, callback) {
	let reqData = URL.parse(url);
	reqData.servername = reqData.hostname;
	reqData.headers = {"User-Agent": "node-steam-user data parser"};
	reqData.method = "GET";

	// This will crash if there's an error. But that's fine.
	HTTPS.request(reqData, function(res) {
		let data = "";
		res.on('data', function(chunk) {
			data += chunk;
		});

		res.on('end', function() {
			callback(data);
		});
	}).end();
}
