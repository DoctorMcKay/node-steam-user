/**
 * SteamUser example - LicensesDumper
 *
 * Simply logs into Steam using account credentials and dumps your Steam licenses to file as JSON
 */

const fs = require('fs');
const SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory
const client = new SteamUser();

client.logOn({
	accountName: 'username',
	password: 'password'
});

client.on('loggedOn', function() {
	console.log('Logged into Steam as ' + client.steamID.getSteam3RenderedID());
});

client.on('licenses', function(licenses) {
	console.log('Our account owns ' + licenses.length + ' license' + (licenses.length == 1 ? '' : 's') + '.');
	fs.writeFile('licenses.json', JSON.stringify(licenses, null, 4), 'utf8', function(error) {
		console.log(error || 'Successfully dumped our steam licenses to licenses.json');
	});

	client.logOff();
});
