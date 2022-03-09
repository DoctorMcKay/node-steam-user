/**
 * SteamUser example - Legacy CD Keys Dumper
 *
 * Simply logs into Steam using account credentials and dumps the CD keys of all your owned apps to file as JSON
 */

const SteamUser = require("steam-user");
const fs = require("fs");

const client = new SteamUser({
    enablePicsCache: true,
});

client.on("loggedOn", () => {
    console.log("Logged on!");
});

client.on("ownershipCached", async () => {
    let apps = client.getOwnedApps({
        excludeExpiring: false,
        excludeFree: false,
        excludeShared: false
    });

    
    console.log("Requesting legacy cd keys for " + apps.length + " owned apps...");
    let keys = {};
    await Promise.all(apps.map(appid => client.getLegacyGameKey(appid).then(({key}) => keys[appid] = key).catch(() => {})));
    fs.writeFileSync("legacy_cd_keys.json", JSON.stringify(keys, null, 4));
    console.log("Done! Logging off...");
    client.logOff();
});

client.logOn({
    accountName: "username", // change this to your steam username
    password: "password", // change this to your steam password
    logonID: Math.round(Date.now() / 1000)
});