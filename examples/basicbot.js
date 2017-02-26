/**
 * SteamUser example - BasicBot
 *
 * Simply logs into Steam using account credentials, goes online on friends, and launches Team Fortress 2
 */

var SteamUser = require('../index.js'); // Replace this with `require('steam-user');` if used outside of the module directory
var client = new SteamUser();

client.logOn({
	"accountName": "username",
	"password": "password"
});

client.on('loggedOn', function(details) {
	console.log("Logged into Steam as " + client.steamID.getSteam3RenderedID());
	client.setPersona(SteamUser.EPersonaState.Online);
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

client.on('accountLimitations', function(limited, communityBanned, locked, canInviteFriends) {
	var limitations = [];

	if (limited) {
		limitations.push('LIMITED');
	}

	if (communityBanned) {
		limitations.push('COMMUNITY BANNED');
	}

	if (locked) {
		limitations.push('LOCKED');
	}

	if (limitations.length === 0) {
		console.log("Our account has no limitations.");
	} else {
		console.log("Our account is " + limitations.join(', ') + ".");
	}

	if (canInviteFriends) {
		console.log("Our account can invite friends.");
	}
});

client.on('vacBans', function(numBans, appids) {
	console.log("We have " + numBans + " VAC ban" + (numBans == 1 ? '' : 's') + ".");
	if (appids.length > 0) {
		console.log("We are VAC banned from apps: " + appids.join(', '));
	}
});

client.on('licenses', function(licenses) {
	console.log("Our account owns " + licenses.length + " license" + (licenses.length == 1 ? '' : 's') + ".");
});
