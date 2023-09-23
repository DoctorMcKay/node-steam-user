/**
 * SteamUser example - DatabaseDownloader
 *
 * Logs onto Steam anonymously and downloads app data for Team Fortress 2 and Counter-Strike: Global Offensive.
 */

const SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory
const FS = require('fs');

let client = new SteamUser();
client.logOn(); // Log onto Steam anonymously

client.on('loggedOn', async (details) => {
	console.log('Logged onto Steam as ' + client.steamID.steam3());

	console.log('Requesting appinfo for TF2 and CS:GO...');
	let result = await client.getProductInfo([440, 730], [], true); // Passing true as the third argument automatically requests access tokens, which are required for some apps

	console.log('Got app info, writing to files');
	console.log(result);

	for (let appid in result.apps) {
		FS.writeFileSync(appid + '.json', JSON.stringify(result.apps[appid].appinfo, null, '\t'));
	}

	console.log('Logging off of Steam');
	client.logOff();
});
