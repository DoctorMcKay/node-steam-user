const settings = {
    "credentials": { // change these to your own steam credentials
        "accountName": "username",
        "password":    "password",
    },
    "input": { // change country code to a proxy url from that country
        "??": [499950, 794690, 513150, 496840],
        "US": [237310, 212200, 11610, 216150, 212160, 212240, 239660, 844870, 905370, 714210, 747610, 1582620, 1384870, 215100],
        "TR": [280620, 258700, 306830, 261430, 1474700, 585030, 657860, 721310],
        "KR": [958260, 835570, 1287290, 895970, 1630280, 1825750],
        "SG": [1711430, 1837970],
        "CN": [1329410, 1499560, 1668940, 934430, 835500, 1480700, 1338820, 1700030, 1796230, 1876740],
        "JP": [1361350, 1219160, 1011810, 1223840, 1672740, 1175730, 1261240, 1629890, 1790310, 1850360],
        "AT|DE|IT|ES|UK": [558230, 1186390],
        "AR|BR|CL|CO|HN|MX|UY": [692130, 708550],
        "AU|NZ": [720090],
        "RU|BY|UA": [1185750],
    },
};

const SteamUser = require("steam-user");
const proxies = Object.keys(settings.input);
const doRequest = () => {
    if (proxies.length === 0) {
        console.log("Done");
        process.exit();
        return;
    }

    const proxy = proxies.shift();
    console.log(`\n\nUsing proxy: ${proxy}`);

    const client = new SteamUser({ "httpProxy": proxy });
    let done = false;
    client.once("loggedOn", (details) => {
        console.log(`Logged into Steam as ${client.steamID.getSteam3RenderedID()}`);
        console.log(`Our country reported by Steam: ${details.ip_country_code}`);

        const appids = settings.input[proxy];
        console.log(`Requesting free license for appids: ${appids.join(", ")}`);
        client.requestFreeLicense(appids, (error, pkgs = [], apps = []) => {
            console.log(`Result:\n - Error: ${error || "No"}\n - Granted subs: ${pkgs.join(", ")}\n - Granted apps: ${apps.join(", ")}`);
            client.logOff();
            if (!done) {
                done = true;
                doRequest();
            }
        });
    });
    client.once("error", (e) => {
        // Some error occurred during logon
        console.log(e);
        client.logOff();
        if (!done) {
            done = true;
            doRequest();
        }
    });
    client.logOn(settings.credentials);
};

doRequest();
