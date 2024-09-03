const SteamUser = require('steam-user');
const fs = require('fs');

const credentials = {
	accountName: 'username', // your steam username
	password: 'password', // your steam password
};

const client = new SteamUser({
	enablePicsCache: true,
});

client.on('loggedOn', () => {
	console.log('Logged on');
});

client.on('ownershipCached', async () => {
	let apps = client.getOwnedApps({
		excludeExpiring: false,
		excludeFree: false,
		excludeShared: false
	}).filter(appid => {
		// these keys should indicate presence of a legacy cd key
		return [
			'hadthirdpartycdkey',
			'legacykeydisklocation',
			'legacykeyfromapp',
			'legacykeylinkedexternally',
			'legacykeyproofofpurchaseticket',
			'legacykeyregistrationmethod',
			'legacykeyregistrylocation',
			'showcdkeyinmenu',
			'showcdkeyonlaunch',
			'supportscdkeycopytoclipboard',
			'thirdpartycdkey',
		].some((key) => Object.keys((client.picsCache
			&& client.picsCache.apps[appid]
			&& client.picsCache.apps[appid].appinfo
			&& client.picsCache.apps[appid].appinfo.extended) || {}).map((k) => k.toLowerCase())
			.includes(key));
	});

	console.log(`Requesting legacy cd keys for ${apps.length} owned apps...`);
	let keys = {};
	for (let appid of apps) {
		try {
			let {key} = await client.getLegacyGameKey(appid);
			keys[appid] = key;
		} catch (err) {
			if (err.eresult !== SteamUser.EResult.Fail) { // usually just means no cd key present
				console.error(`App: ${appid}`, err);
			}
		}
	}
	fs.writeFileSync('legacy_keys.json', JSON.stringify(keys, null, 4));
	console.log('Done! Logging off...');
	client.logOff();
});

client.on('disconnected', () => process.exit(0));

credentials.logonID = Math.round(Date.now() / 1000); // To avoid getting kicked by LogonSessionReplaced
client.logOn(credentials);
