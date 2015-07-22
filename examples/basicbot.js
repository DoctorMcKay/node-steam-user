/**
 * SteamUser example - BasicBot
 *
 * Simply logs into Steam using account credentials and launches Team Fortress 2
 * If you want to appear online, you'll need to use a Steam.SteamFriends handler
 */

var SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory
var client = new SteamUser();

client.logOn({
	"accountName": "username",
	"password": "password"
});

client.on('loggedOn', function(details) {
	console.log("Logged into Steam as " + client.steamID.getSteam3RenderedID());
	client.gamesPlayed(440);
});

client.on('error', function(e) {
	// Some error occurred during logon
	console.log(e);
});

client.on('webSession', function(sessionID, cookies) {
	console.log("Got web session");
	// Do something with these cookies if you wish
});

client.on('newItems', function(count) {
	console.log(count + " new items in our inventory");
});

client.on('emailInfo', function(address, validated) {
	console.log("Our email address is " + address + " and it's " + (validated ? "validated" : "not validated"));
});

client.on('wallet', function(hasWallet, currency, balance) {
	console.log("Our wallet balance is " + SteamUser.formatCurrency(balance, currency));
});
