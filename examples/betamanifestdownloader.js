/**
 * This example shows how to download the manifest for a depot from a password-protected beta branch, provided you know
 * the beta's password.
 */

const APP_ID = 440;                        // The AppID of the app where you want to download a beta manifest
const DEPOT_ID = 441;                      // The ID of the depot whose manifest you want
const BRANCH_NAME = 'beta';                // The name of the password-protected beta branch
const BRANCH_PASSWORD = 'password';        // The password for the branch

const STEAM_ACCOUNT_NAME = 'user';         // Username for your Steam account
const STEAM_ACCOUNT_PASSWORD = 'password'; // Password for your Steam account
const STEAM_ACCOUNT_2FA_SECRET = '';       // Your shared_secret if you have mobile authentication enabled, or blank to prompt for a code from stdin

const SteamUser = require('../index.js'); // change to `require('steam-user')` if running outside of the examples directory
const SteamCrypto = require('@doctormckay/steam-crypto'); // you'll need to add this to your package.json
const SteamTotp = require('steam-totp');

let user = new SteamUser();
user.logOn({
	accountName: STEAM_ACCOUNT_NAME,
	password: STEAM_ACCOUNT_PASSWORD,
	twoFactorCode: STEAM_ACCOUNT_2FA_SECRET ? SteamTotp.generateAuthCode(STEAM_ACCOUNT_2FA_SECRET) : undefined
});

user.on('loggedOn', async () => {
	console.log(`Logged on to Steam as ${user.steamID.steam3()}`);

	// First we need to download product info for the app so we can find the encrypted manifest id for the depot we want.
	// This will probably crash if we don't have a token for the app and it's private to only owners.
	// Though we need to own it anyway to get the depot decryption key.
	let depots = (await user.getProductInfo([APP_ID], [], true)).apps[APP_ID].appinfo.depots;
	let branch = depots.branches[BRANCH_NAME];
	let encryptedManifest = depots[DEPOT_ID].encryptedmanifests[BRANCH_NAME];

	if (!branch || !encryptedManifest || !encryptedManifest.encrypted_gid_2) {
		throw new Error(`Invalid branch name or no encrypted manifest available for "${BRANCH_NAME}" in depot ${DEPOT_ID}`);
	}

	console.log(`Encrypted manifest ID is ${encryptedManifest.encrypted_gid_2}`);
	console.log(`Active build for branch ${BRANCH_NAME} is ${branch.buildid} (${branch.description})`);

	console.log('Checking beta password');
	let {keys} = await user.getAppBetaDecryptionKeys(APP_ID, BRANCH_PASSWORD);

	if (!keys[BRANCH_NAME]) {
		throw new Error(`Beta password incorrect for branch "${BRANCH_NAME}"`);
	}

	// Decrypt the encrypted manifest id using the key we retrieved from the backend using the beta password.
	// Back in the day, the beta password *was* the key, but not so anymore. If we had encrypted_gid, that would be
	// the manifest id encrypted using the beta password.
	let decryptedManifestId = SteamCrypto.symmetricDecryptECB(Buffer.from(encryptedManifest.encrypted_gid_2, 'hex'), keys[BRANCH_NAME]);
	decryptedManifestId = decryptedManifestId.readBigUInt64LE(0).toString();
	console.log(`Decrypted manifest ID is ${decryptedManifestId}`);

	// Now that we have the decrypted manifest id, we can download the manifest. getManifest will take care of retireving
	// the depot decryption key as well as the manifest request code. Retrieving the manifest request code is actually
	// the only reason we need to pass the branch name and password to getManifest,
	console.log('Downloading manifest');
	let manifest = await user.getManifest(APP_ID, DEPOT_ID, decryptedManifestId, BRANCH_NAME, BRANCH_PASSWORD);

	let filename = `manifest_${decryptedManifestId}.json`;
	require('fs').writeFileSync(filename, JSON.stringify(manifest, undefined, '\t'));
	console.log(`Manifest written to ${filename}`);

	user.logOff();
});
