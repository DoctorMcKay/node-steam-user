// This file is run by npm prior to the package being published to the registry

// Update the CM list
download('https://api.steampowered.com/ISteamDirectory/GetCMList/v1/?format=json&cellid=0', function(data) {
	let json = JSON.parse(data);

	if (!json.response || json.response.result != 1) {
		throw new Error('Cannot get CM list');
	}

	let servers = {
		tcp_servers: json.response.serverlist,
		websocket_servers: json.response.serverlist_websockets,
		time: Date.now()
	};

	console.log('Got list of ' + servers.tcp_servers.length + ' TCP CMs and ' + servers.websocket_servers.length + ' WebSocket CMs from WebAPI');
	require('fs').writeFileSync(__dirname + '/../resources/servers.json', JSON.stringify(servers, null, '\t'));
});


// Helper functions
function download(url, callback) {
	let reqData = require('url').parse(url);
	reqData.servername = reqData.hostname;
	reqData.headers = {'User-Agent': 'node-steam-user data parser'};
	reqData.method = 'GET';

	// This will crash if there's an error. But that's fine.
	require('https').request(reqData, function(res) {
		let data = '';
		res.on('data', function(chunk) {
			data += chunk;
		});

		res.on('end', function() {
			callback(data);
		});
	}).end();
}
