// This file is run by npm prior to the package being published to the registry

// Update the CM list
download("https://api.steampowered.com/ISteamDirectory/GetCMList/v1/?format=json&cellid=0", function(data) {
	var json = JSON.parse(data);

	if (!json.response || json.response.result != 1) {
		throw new Error("Cannot get CM list");
	}

	var servers = json.response.serverlist.map(function(server) {
		var parts = server.split(':');
		return {
			"host": parts[0],
			"port": parseInt(parts[1], 10)
		};
	});

	console.log("Got list of " + servers.length + " CMs from WebAPI");
	require('fs').writeFileSync(__dirname + '/../resources/servers.json', JSON.stringify(servers, null, "\t"));
});


// Helper functions
function download(url, callback) {
	var reqData = require('url').parse(url);
	reqData.servername = reqData.hostname;
	reqData.headers = {"User-Agent": "node-steam-user data parser"};
	reqData.method = "GET";

	// This will crash if there's an error. But that's fine.
	require('https').request(reqData, function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk;
		});

		res.on('end', function() {
			callback(data);
		});
	}).end();
}
