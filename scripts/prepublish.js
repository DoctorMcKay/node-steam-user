// This file is run by npm prior to the package being published to the registry

// Update the CM list
require('http').get("http://api.steampowered.com/ISteamDirectory/GetCMList/v1/?format=json&cellid=50", function(res) {
	var data = '';
	res.on('data', function(chunk) {
		data += chunk;
	});

	res.on('end', function() {
		var json = JSON.parse(data);

		if (!json.response || json.response.result != 1) {
			throw new Error("Cannot get CM list");
		}

		var servers = json.response.serverlist.map(function (server) {
			var parts = server.split(':');
			return {
				"host": parts[0],
				"port": parseInt(parts[1], 10)
			};
		});

		require('fs').writeFileSync(__dirname + '/../resources/servers.json', JSON.stringify(servers, null, "\t"));
	});
});