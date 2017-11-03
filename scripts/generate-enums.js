const FS = require('fs');
const HTTPS = require('https');
const URL = require('url');

// Generate enums
if (!FS.existsSync(__dirname + '/../enums')) {
	FS.mkdirSync(__dirname + '/../enums');
}

var g_EnumNames = [];

download("https://api.github.com/repos/SteamRE/SteamKit/contents/Resources/SteamLanguage", function(data) {
	var json = JSON.parse(data);
	if (!json.length) {
		throw new Error("Cannot get data from GitHub");
	}

	var remainingFiles = 0;
	json.forEach(function(file) {
		if (!file.name.match(/\.steamd$/)) {
			return;
		}

		remainingFiles++;
		// Get the download URL from the github API
		download(file.download_url, function(fileContents) {
			// This parser isn't terribly robust, but it works as long as SteamRE doesn't change their resource format
			var currentEnum = null;
			fileContents.split("\n").forEach(function(line) {
				// Go line-by-line
				line = line.trim(); // trim whitespace
				var idx = line.indexOf("//");
				if (idx != -1) {
					line = line.substring(0, idx).trim(); // remove line comments
				}

				var match;
				if (!currentEnum) {
					// We're not currently parsing any enum. Is this the opening of one?
					if (match = line.match(/^enum (E[a-zA-Z0-9]+)(<[a-z]+>)?( flags)?/)) {
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
						var file = "/**\n * @enum " + currentEnum.name + "\n */\nmodule.exports = {\n";

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
					} else if (match = line.match(/^([A-Za-z0-9_]+) = ([^;]+);(.*)$/)) {
						var name = match[1];
						var value = match[2];
						var comment = match[3];

						if (value.match(/^0x[0-9A-Fa-f]+$/)) {
							value = parseInt(value.substring(2), 16).toString();
						}

						var isDynamic = false;

						var flags = value.split('|').map(function(flag) {
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
				g_EnumNames.sort();

				var loader = "// Auto-generated by generate-enums script on " + (new Date()).toString() + "\n\nconst SteamUser = require('../index.js');\n\n";
				loader += g_EnumNames.map(name => "SteamUser." + name + " = require('../enums/" + name + ".js');").join("\n") + "\n";
				FS.writeFileSync(__dirname + '/../resources/enums.js', loader);
			}
		});
	});

	// All done
});

// Helper functions
function download(url, callback) {
	var reqData = URL.parse(url);
	reqData.servername = reqData.hostname;
	reqData.headers = {"User-Agent": "node-steam-user data parser"};
	reqData.method = "GET";

	// This will crash if there's an error. But that's fine.
	HTTPS.request(reqData, function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk;
		});

		res.on('end', function() {
			callback(data);
		});
	}).end();
}
