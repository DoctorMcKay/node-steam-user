const SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory
const {writeFile} = require('fs/promises');

const collectCredentials = require('./lib/collect_credentials');

const client = new SteamUser({
	enablePicsCache: true,
});

client.on('loggedOn', () => {
	console.log('Logged on');
});

client.on('ownershipCached', async () => {
	// These keys in appdata indicate the presence of a legacy cd-key
	const LEGACY_CD_KEY_INDICATORS = [
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
	];

	let apps = client.getOwnedApps({
		excludeExpiring: false,
		excludeFree: false,
		excludeShared: false
	}).filter(appid => {
		// these keys should indicate presence of a legacy cd key
		return LEGACY_CD_KEY_INDICATORS.some((key) => Object.keys(client.picsCache?.apps[appid]?.appinfo?.extended || {})
			.map((k) => k.toLowerCase())
			.includes(key)
		);
	});

	console.log(`Requesting legacy cd keys for ${apps.length} owned apps...`);
	let keys = {};
	for (let appid of apps) {
		let appName = client.picsCache?.apps[appid]?.appinfo?.common?.name || appid;
		try {
			let {key} = await client.getLegacyGameKey(appid);
			keys[appid] = key;
			console.log(`Successfully retrieved key for "${appName}" (${appid})`);
		} catch (err) {
			console.log(`Failed to retrieve key for "${appName}" (${appid}): ${SteamUser.EResult[err.eresult] || err.eresult || err.message}`);
		}
	}

	await writeFile('legacy_keys.json', JSON.stringify(keys, null, '\t'));
	console.log('Done! Logging off...');
	client.logOff();
});

collectCredentials().then((credentials) => {
	credentials.logonID = Math.round(Date.now() / 1000); // To avoid getting kicked by LogonSessionReplaced
	client.logOn(credentials);
});
