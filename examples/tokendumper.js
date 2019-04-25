/**
 * SteamUser example - TokenDumper
 *
 * Dumps access tokens for all apps available to anonymous user accounts.
 */

const SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory
const FS = require('fs');

const client = new SteamUser();
client.logOn(); // Log onto Steam anonymously

client.on('loggedOn', () => {
	console.log("Logged onto Steam as " + client.steamID.steam3());

	const chunksize = 10000; // seems best chunk size
	const idList = [];
	for (const i = chunksize; i < 1000000; i += chunksize) {
		const idSubList = [];
		for (const j = i - chunksize; j < i; j++) {
			idSubList.push(j);
		}
		idList.push(idSubList);
	}

	// doing this for all appids or packages just hangs forever
	const tokenList = {};

	const getTokens = () => {
		const idSubList = idList.shift();
		client.getProductAccessToken(idSubList, [], (appTokens, packageTokens, appDeniedTokens) => {
			console.log("Tokens denied for " + appDeniedTokens.length + " apps of range " + idSubList[0] + "-" + idSubList[idSubList.length - 1]);

			for (const appid in appTokens) {
				if (appTokens.hasOwnProperty(appid) && appTokens[appid].toString() !== "0") {
					console.log("App " + appid + ": " + appTokens[appid].toString());
					tokenList[appid] = appTokens[appid].toString();
				}
			}

			if (idList.length > 0) {
				getTokens();
			} else {
				FS.writeFileSync('tokens.json', JSON.stringify(tokenList, null, 4), "utf8");
				console.log("Logging off of Steam");
				client.logOff();
			}
		});
	};

	getTokens(); // Recusive function
});
