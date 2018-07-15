/**
 * SteamUser example - TokenDumper
 *
 * Dumps access tokens for all apps available to anonymous user accounts.
 */

const SteamUser = require("steam-user");
const fs = require("fs");

const client = new SteamUser();
client.logOn(); // Log onto Steam anonymously

client.on("loggedOn", () => {
    console.log("Logged onto Steam as " + client.steamID.getSteam3RenderedID());

    const chunksize = 10000; // seems best chunk size
    const idList = [];
    for (let i = chunksize; i < 1000000; i += chunksize) {
        const idSubList = [];
        for (let j = i - chunksize; j < i; j++) {
            idSubList.push(j);
        }
        idList.push(idSubList);
    }

    // doing this for all appids or packages just hangs forever
    let tokenList = {};
    getTokens();

    function getTokens() {
        const idSubList = idList.shift();
        client.getProductAccessToken(idSubList, [], (appTokens, packageTokens, appDeniedTokens) => {
            console.log("Tokens denied for " + appDeniedTokens.length + " apps of range " + idSubList[0] + "-" + idSubList[idSubList.length - 1]);

            for (let appid in appTokens) {
                if (appTokens.hasOwnProperty(appid) && appTokens[appid].toString() !== "0") {
                    console.log("App " + appid + ": " + appTokens[appid].toString());
                    tokenList[appid] = appTokens[appid].toString();
                }
            }

            if (idList.length > 0) {
                getTokens();
            } else {
                fs.writeFileSync("tokens.json", JSON.stringify(tokenList, null, 4), "utf8");
                console.log("Logging off of Steam");
                client.logOff();
            }
        });
    }
});
