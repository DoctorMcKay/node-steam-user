/**
 * SteamUser example - TokenDumper
 *
 * Dumps all access tokens available to anonymous user accounts.
 */

var SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory

var client = new SteamUser();
client.logOn(); // Log onto Steam anonymously

client.on('loggedOn', function(details) {
	console.log("Logged onto Steam as " + client.steamID.getSteam3RenderedID());

	console.log("Requesting full list of appids and packageids from Steam");
	client.getProductChanges(1, function(currentChangenumber, apps, packages) {
		console.log("Got list of " + apps.length + " apps and " + packages.length + " packages, requesting tokens");

		apps = apps.map(function(app) {
			return app.appid;
		});

		packages = packages.map(function(pkg) {
			return pkg.packageid;
		});

		client.getProductAccessToken(apps, packages, function(appTokens, packageTokens, appDeniedTokens, packageDeniedTokens) {
			console.log("Tokens denied for " + appDeniedTokens.length + " apps and " + packageDeniedTokens.length + " packages");

			for(var appid in appTokens) {
				if(appTokens[appid].toString() != '0') {
					console.log("App " + appid + ": " + appTokens[appid].toString());
				}
			}

			for(var packageid in packageTokens) {
				if(packageTokens[packageid].toString() != '0') {
					console.log("Package " + packageid + ": " + packageTokens[packageid].toString());
				}
			}

			console.log("Logging off of Steam");
			client.logOff();
		});
	});
});