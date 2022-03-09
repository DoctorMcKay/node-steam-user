const SteamUser = require("steam-user");
const fs = require("fs");

const client = new SteamUser({
    enablePicsCache: true,
});

client.on("loggedOn", () => {
    console.log("Logged on");
});

client.on("ownershipCached", async () => {
    let apps = client.getOwnedApps({
        excludeExpiring: false,
        excludeFree: false,
        excludeShared: false
    }).filter(appid => {
        // these keys should indicate presence of a legacy cd key
        return [
            "hadthirdpartycdkey",
            "legacykeydisklocation",
            "legacykeyfromapp",
            "legacykeylinkedexternally",
            "legacykeyproofofpurchaseticket",
            "legacykeyregistrationmethod",
            "legacykeyregistrylocation",
            "showcdkeyinmenu",
            "showcdkeyonlaunch",
            "supportscdkeycopytoclipboard",
            "thirdpartycdkey",
        ].some(key =>
            Object.keys(client.picsCache?.apps[appid]?.appinfo?.extended || {}).map(k => k.toLowerCase()).includes(key)
        );
    });


    console.log("Requesting legacy cd keys for " + apps.length + " owned apps...");
    let keys = {};
    for (let appid of apps) {
        let { key } = await client.getLegacyGameKey(appid).catch(err => {
            if (err.eresult !== 2) { // usually just means no cd key present
                console.error(`App: ${appid}`, err);
            }
            return {};
        });
        if (key) {
            keys[appid] = key;
        }
    }
    fs.writeFileSync("legacy_keys.json", JSON.stringify(keys, null, 4));
    console.log("Done! Logging off...");
    client.logOff();
});

client.on("disconnected", () => process.exit(0));

client.logOn({
    accountName: "username", // your steam username
    password: "password", // your steam password
    logonID: Math.round(Date.now() / 1000)
});