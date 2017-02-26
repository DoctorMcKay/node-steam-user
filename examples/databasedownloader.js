/**
 * SteamUser example - DatabaseDownloader
 *
 * Logs onto Steam anonymously and downloads app data for Team Fortress 2 and Counter-Strike: Global Offensive.
 */

var SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory
var fs = require('fs');

var client = new SteamUser();
client.logOn(); // Log onto Steam anonymously

client.on('loggedOn', function(details) {
	console.log("Logged onto Steam as " + client.steamID.getSteam3RenderedID());

	console.log("Requesting appinfo for TF2 and CS:GO...");
	client.getProductInfo([440, 730], [], function(apps, packages, unknownApps, unknownPackages) {
		console.log("Got app info, writing to files");

		for (var appid in apps) {
			fs.writeFileSync(appid + '.json', JSON.stringify(apps[appid].appinfo, null, "\t"));
		}

		console.log("Logging off of Steam");
		client.logOff();
	});
});