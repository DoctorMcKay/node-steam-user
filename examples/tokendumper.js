/**
 * SteamUser example - TokenDumper
 *
 * Dumps all access tokens available to anonymous user accounts.
 */

const SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory

let client = new SteamUser();
client.logOn(); // Log onto Steam anonymously

client.on('loggedOn', (details) => {
	console.log('Logged onto Steam as ' + client.steamID.getSteam3RenderedID());

	let idList = [];
	for (let i = 0; i < 1000000; i++) {
		idList.push(i);
	}

	// doing this for packages just hangs forever
	client.getProductAccessToken(idList, [], (appTokens, packageTokens, appDeniedTokens, packageDeniedTokens) => {
		console.log('Tokens denied for ' + appDeniedTokens.length + ' apps and ' + packageDeniedTokens.length + ' packages');

		for (let appid in appTokens) {
			if (Object.hasOwnProperty.call(appTokens, appid) && appTokens[appid].toString() != '0') {
				console.log('App ' + appid + ': ' + appTokens[appid].toString());
			}
		}

		for (let packageid in packageTokens) {
			if (Object.hasOwnProperty.call(packageTokens, packageid) && packageTokens[packageid].toString() != '0') {
				console.log('Package ' + packageid + ': ' + packageTokens[packageid].toString());
			}
		}

		console.log('Logging off of Steam');
		client.logOff();
	});
});
