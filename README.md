# SteamUser
### A handler module for node-steam v1.0.0 and greater
[![npm version](https://img.shields.io/npm/v/steam-user.svg)](https://npmjs.com/package/steam-user)
[![npm downloads](https://img.shields.io/npm/dm/steam-user.svg)](https://npmjs.com/package/steam-user)
[![dependencies](https://img.shields.io/david/DoctorMcKay/node-steam-user.svg)](https://david-dm.org/DoctorMcKay/node-steam-user)
[![license](https://img.shields.io/npm/l/steam-user.svg)](https://github.com/DoctorMcKay/node-steam-user/blob/master/LICENSE)
[![paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=N36YVAT42CZ4G&item_name=node%2dsteam%2duser&currency_code=USD)

SteamUser is a handler module for [node-steam](https://github.com/seishun/node-steam) version 1.0.0 or greater.

It's designed to be a self-contained module which provides all the functionality expected of a Steam user client.

[Subscribe to release announcements](https://github.com/DoctorMcKay/node-steam-user/releases.atom)

# Static Properties

Static properties, or properties attached directly to `SteamUser`, are accessed on the root module and not on instantiated handler instances.

### Steam

The `node-steam` module installation used by `SteamUser`. You can use this in place of `require('steam')` if you'd like to avoid duplicate installations.

Example of using `EResult`:

```js
var SteamUser = require('steam-user');
var ok = SteamUser.Steam.EResult.OK;
```

### ECurrencyCode

An up-to-date enum of Steam's many currencies. [View here](https://github.com/DoctorMcKay/node-steam-user/blob/bde87d94bcafd870bd460694d036d1c88121da87/components/utility.js#L3-L37)

Example:

```js
var SteamUser = require('steam-user');
var usd = SteamUser.ECurrencyCode.USD;
```

# Static Methods

Static methods, or functions attached directly to `SteamUser`, are called on the root module and not on instantiated handler instances.

### formatCurrency(amount, currency)
- `amount` - The amount of the currency
- `currency` - The currency code value in the [`ECurrencyCode`](#ecurrencycode) enum

Formats a currency value and returns a string. For example:

```js
console.log(SteamUser.formatCurrency(12.34, SteamUser.ECurrencyCode.USD)); // $12.34
console.log(SteamUser.formatCurrency(12345, SteamUser.ECurrencyCode.JPY)); // ¥ 12345
console.log(SteamUser.formatCurrency(123.45, SteamUser.ECurrencyCode.EUR)); // 123,45€
```

### generateAuthCode(secret[, timeOffset])
- `secret` - A `Buffer` containing your shared secret
- `timeOffset` - The number of seconds by which your local clock is off from the Steam servers. Defaults to 0.

Generates a 5-digit alphanumeric Steam Guard code for use with two-factor mobile authentication.

# Options

There are a number of options which can control the behavior of the `SteamUser` object. They are:

### dataDirectory

Controls where the Steam server list and sentry files are written. If `null`, no data will be automatically stored.

Defaults to a platform-specific user data directory.

- On [OpenShift](https://www.openshift.com), this is `$OPENSHIFT_DATA_DIR/node-steamuser`
- On Windows, this is `%localappdata%\doctormckay\node-steamuser`
- On Mac, this is `~/Library/Application Support/node-steamuser`
- On Linux, this is `$XDG_DATA_HOME/node-steamuser`, or `~/.local/share/node-steamuser` if `$XDG_DATA_HOME` isn't defined or is empty

#### Custom Storage Engine

If you don't want to (or can't) save data to the disk, you can implement your own storage engine. To do this, simply add the following code:

```js
user.storage.on('save', function(filename, contents, callback) {
	// filename is the name of the file, as a string
	// contents is a Buffer containing the file's contents
	// callback is a function which you MUST call on completion or error, with a single error argument

	// For example:
	someStorageSystem.saveFile(filename, contents, function(err) {
		callback(err);
	});
});

user.storage.on('read', function(filename, callback) {
	// filename is the name of the file, as a string
	// callback is a function which you MUST call on completion or error, with an error argument and a Buffer argument

	// For example:
	someStorageSystem.readFile(filename, function(err, file) {
		if(err) {
			callback(err);
			return;
		}

		callback(null, file);
	});
});
```

In this manner, you can save data to a database, a cloud service, or anything else you choose.

### autoRelogin

A boolean which controls whether or not `SteamUser` will automatically reconnect to Steam if disconnected due to Steam going down.

Defaults to `true`.

### singleSentryfile

A boolean which controls whether or not `SteamUser` will use a single sentry file for all accounts.

If off, a file named `sentry.accountname.bin` will be saved for each account.
If on, a file named `sentry.bin` will be used for all accounts.

Defaults to `false`.

### promptSteamGuardCode

A boolean which controls whether or not `SteamUser` will automatically prompt for Steam Guard codes when necessary from `stdin`.

Defaults to `true`.

### createHandlers

**Deprecated as of v1.9.0 and will be removed in a future major version.**

A boolean which controls whether or not `SteamUser` will automatically construct instances of [`SteamFriends`](https://github.com/seishun/node-steam/tree/master/lib/handlers/friends) and [`SteamTrading`](https://github.com/seishun/node-steam/tree/master/lib/handlers/trading).

See the [`friends`](#friends) and [`trading`](#trading) properties.

Defaults to `true`.

### machineIdType

What kind of machine ID will SteamUser send to Steam when logging on? Should be a value from [`EMachineIDType`](https://github.com/DoctorMcKay/node-steam-user/blob/master/resources/EMachineIDType.js).

Added in 1.7.0.

Defaults to `AccountNameGenerated`.

# Properties

### client

The `SteamClient` which is being used to communicate with Steam.

### steamID

`null` if not connected, a [`SteamID`](https://www.npmjs.com/package/steamid) containing your SteamID otherwise.

### options

An object containing options for this `SteamUser`. **Read-only**, use `setOption` or `setOptions` to change an option.

### friends

**Deprecated as of v1.9.0 and will be removed in a future major version.**

If the [`createHandlers`](#createhandlers) option was `true` in the constructor, this will be an instance of [`SteamFriends`](https://github.com/seishun/node-steam/tree/master/lib/handlers/friends). Not defined otherwise.

### trading

**Deprecated as of v1.9.0 and will be removed in a future major version.**

If the [`createHandlers`](#createhandlers) option was `true` in the constructor, this will be an instance of [`SteamTrading`](https://github.com/seishun/node-steam/tree/master/lib/handlers/trading). Not defined otherwise.

### emailInfo

An object containing information about your account's email address. `null` until [`emailInfo`](#emailinfo-1) is emitted.

- `address` - Your email address
- `validated` - `true` if your email is validated, `false` if not

### limitations

An object containing information about your account's limitations. `null` until [`accountLimitations`](#accountlimitations) is emitted.

- `limited` - `true` if your account is [limited](https://support.steampowered.com/kb_article.php?ref=3330-IAGK-7663), `false` if not
- `communityBanned` - `true` if your account is banned from Steam Community, `false` if not
- `locked` - `true` if your account is [locked](https://support.steampowered.com/kb_article.php?ref=6416-FHVM-3982), `false` if not (accounts can also be locked by Support)
- `canInviteFriends` - `true` if your account can invite friends, `false` if not

### vac

An object containing information about your account's VAC bans. `null` until [`vacBans`](#vacbans) is emitted.

- `numBans` - How many bans are registered on your account
- `appids` - An array of AppIDs from which you're banned. Since each ban affects a range of AppIDs, some of the AppIDs in this array may not exist.

### wallet

An object containing information about your Steam Wallet. `null` until [`wallet`](#wallet-1) is emitted.

- `hasWallet` - `true` if your account has a Steam Wallet, `false` if not
- `currency` - The currency ID of your account's wallet (the enum of currencies is available as `SteamUser.ECurrencyCode`)
- `balance` - Your account's current wallet balance

### licenses

An array containing license data for the packages which your Steam account owns. `null` until [`licenses`](#licenses-1) is emitted.

### users

An object containing persona data about all Steam users we've encountered or requested data for. Key are 64-bit SteamIDs, values are identical to the objects received in the [`user`](#user) event.

### groups

An object containing information about all Steam groups we've encountered. Keys are 64-bit SteamIDs, values are identical to those received in the [`group`](#group) event.

### chats

An object containing information about all chat rooms we're in. Keys are 64-bit SteamIDs, values are objects with this structure:
- `name` - The name of the chat, or empty if it's a multi-user chat
- `private` - `true` if only group members can join, `false` if it's open to everyone
- `invisibleToFriends` - `true` if the chat is invisible to friends, `false` if visible (unsure what this means at this time)
- `officersOnlyChat` - `true` if only group officers can chat right now, `false` if everyone can
- `unjoinable` - `true` if the chat can't be joined, `false` if it can (note that this doesn't necessary mean **your** effective access)
- `members` - An object whose keys are 64-bit SteamIDs of users in this chat room, and whose values are objects with this structure:
	- `rank` - A value from `EClanRank`
	- `permissions` - A bitstring of values in `EChatPermission` for the user's permissions in this chat

### myFriends

An object whose keys are 64-bit SteamIDs, and whose values are values from the `EFriendRelationship` enum. Therefore, you can deduce your friends list from this object.

When we get unfriended, instead of setting the value to `EFriendRelationship.None`, the key is deleted from the object entirely.

### myGroups

An object whose keys are 64-bit SteamIDs, and whose values are from the `EFriendRelationship` enum. Therefore, you can deduce which groups you're in from this object.

When we leave a group, instead of setting the value to `EFriendRelationship.None`, the key is deleted from the object entirely.

### myFriendGroups

**v1.10.0 or later is required to use this property**

An object containing your friend groups (in the official client, these are called *tags*). Keys are numeric group IDs, and objects as follows:
- `name` - A `string` containing the name of the group.
- `members` - An array containing `SteamID` objects for the members of this friend group.

# Methods

### Constructor([client][, options])
- `client` - An optional `SteamClient` to use to connect to Steam. If not provided, one will be created automatically.
- `options` - An optional object containing zero or more [options](#options) to set for this `SteamUser`.

Constructs a new `SteamUser`. If you allow `SteamUser` to create its own `SteamClient`, then `SteamUser` will automatically save and reload the CM server list.

### setOption(option, value)
- `option` - The name of the option to set
- `value` - The value to set for this option

Changes the value of an [option](#options).

### setOptions(options)
- `options` - An object containing zero or more [options](#options).

### setSentry(sentry)
- `sentry` - A Buffer containing the binary sentry file, binary SHA1 hash, or `null` to unset the set sentry

If you aren't using `dataDirectory` or you just want to provide your own sentry file, you can do it using this method.

You should call this before calling `logOn`. When you log on, `SteamUser` will use this sentry file.

You can provide either an entire sentryfile (preferred), or a Buffer containing the binary SHA1 hash of your sentryfile (e.g. the output of the `sentry` event in node-steam 0.6.x).

### logOn([details])
- `details` - An object containing details for this logon
	- `accountName` - If logging into a user account, the account's name
	- `password` - If logging into an account without a login key, the account's password
	- `authCode` - If you have a Steam Guard email code, you can provide it here. You might not need to, see the [`steamGuard`](#steamguard) event. (Added in 1.9.0)
	- `twoFactorCode` - If you have a Steam Guard mobile two-factor authentication code, you can provide it here. You might not need to, see the [`steamGuard`](#steamguard) event. (Added in 1.9.0)
	- `loginKey` - If logging into an account with a login key, this is the account's login key
	- `rememberPassword` - `true` if you want to get a login key which can be used in lieu of a password for subsequent logins. `false` or omitted otherwise.
	- `logonID` - A number to identify this login. The official Steam client derives this from your machine's private IP (it's the `obfustucated_private_ip` field in `CMsgClientLogOn`). If you try to logon twice to the same account with the same `logonID`, the first session will be kicked with reason `Steam.EResult.LogonSessionReplaced`. Defaults to `0` if not specified.

Logs onto Steam. The `SteamClient` should **not** be connected. Omit the `details` object if you wish to login to an anonymous user account.

### logOff()

Logs you off of Steam and closes the connection.

### webLogOn()

`SteamUser` will automatically log onto steamcommunity.com when a successful connection to Steam is established (as an individual user), but you can call `webLogOn()` to create a new session if your old one expires or becomes invalid.

Listen for the [`webSession`](#websession) event to get your cookies.

### createAccount(accountName, password, email, question, answer, callback)
- `accountName` - The username of your new account
- `password` - The password for your new account
- `email` - The contact email for your new account
- `callback` - Called when the account is either created or an error occurs
	- `result` - A value from `Steam.EResult`.
		- `Steam.EResult.OK` if the account was created successfully
		- `Steam.EResult.DuplicateName` if there is already an account with that username
		- `Steam.EResult.IllegalPassword` if your password is too weak or otherwise bad
		- or something else on another error
	- `steamid` - If successful, this is a `SteamID` object containing the new account's SteamID

Creates a new individual user Steam account. You must be logged on either anonymously or as an existing individual user to use this.

### requestValidationEmail([callback])
- `callback` - Optional. Called when a response is available
	- `result` - A value from `Steam.EResult`. `Steam.EResult.OK` if the mail was sent successfully.

Requests Steam to send you a validation email to your registered email address.

### enableTwoFactor(callback)
- `callback` - Required. Called when the activation email has been sent.
	- `status` - A value from `EResult`
	- `secret` - A `Buffer` containing your shared secret
	- `revocationCode` - A `string` containing the code you'll need to disable two-factor authentication if you lose your secret

**v1.9.0 or later is required to use this method**

Starts the process to turn on TOTP for your account. You'll be sent an email with an activation code that you'll need to provide to `finalizeTwoFactor`.

### finalizeTwoFactor(secret, activationCode, callback)
- `secret` - A `Buffer` containing your shared secret
- `activationCode` - A `string` containing the activation code you got in your email
- `callback` - Required.
	- `err` - An `Error` object on failure, or `null` on success

**v1.9.0 or later is required to use this method**

Finishes the process of enabling TOTP two-factor authentication for your account. You can use `SteamUser.generateAuthCode` in the future when logging on to get a code.

**If TOTP two-factor authentication is enabled, a code will be required *on every login* unless a `loginKey` is used.**

### disableTwoFactor(options, callback)
- `options` - An object containing at least one of the following properties
	- `revocationCode` - If you have the revocation code (which starts with R) that you got when you enabled TOTP, you can provide it here
	- `secret` - If you have your secret, you can provide it here (as a `Buffer`)
	- `timeOffset` - If you're using your `secret` and you know the offset between your local clock and the Steam servers, you can provide it here
	- `deauthorizeAll` - If you want to deauthorize all other machines from Steam Guard, pass true here. Default false

**v1.9.0 or later is required to use this method**

Disables TOTP two-factor authentication for your account and switches you back to regular Steam Guard emails.

**Either** your revocation code **or** your secret is required to disable TOTP. You don't need to provide both.

If you've lost your secret but you have your revocation code, you can disable TOTP [from the support site](https://help.steampowered.com/#HelpWithLoginInfo?nav=authenticator).

### gamesPlayed(apps)
`apps` - An array, object, string, or number (see below)

Reports to Steam that you're playing or using zero or more games/apps. To exit all games/apps, use an empty array `[]`.

To play a single game by AppID, use a single integer (e.g. `440`)

To play a single non-Steam game by name, use a single string (e.g. `"Minecraft"`)

To play a single game by AppID and name (the client-provided name is what is given to the WebAPI and mobile app), use an object of this format:

```js
{
	"game_id": 440,
	"game_extra_info": "Team Fortress 2"
}
```

You can use multiple apps by providing an array of any mixture of the above formats.

### getPlayerCount(appid, callback)
- `appid` - The AppID of the app for which you'd like the current player/user count (use `0` to get current logged-in Steam user count)
- `callback` - Called when the requested data is available
	- `result` - A value from `Steam.EResult`
	- `players` - How many Steam users are currently playing/using the app

Requests a count of how many Steam users are currently playing/using an app.

### serverQuery(conditions, callback)
- `conditions` - A [filter string](https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Filter) or an object containing one or more of the following properties:
	- `app_id` - The AppID of the game for which you want servers
	- `geo_location_ip` - The IP address of the querying client, used for geolocation (in `x.x.x.x` format)
	- `region_code` - The [region code](https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Region_codes) where you want servers
	- `filter_text` - A [filter string](https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Filter)
	- `max_servers` - Maximum number of servers to return in this response (default and hard limit 5000)
- `callback` - Called when the response is available
	- `err` - If an error occurred, this is an `Error` object. Otherwise, it's `null`.
	- `servers` - An array of objects containing server data
		- `ip` - The server's IP in `x.x.x.x` format
		- `port` - The server's game port
		- `players` - How many authenticated players are on this server (the Steam server browser will use this value if the gameserver itself reports more players and doesn't report itself as full, to prevent inflated player counts)

Requests a list of game servers from the master server.

### getServerList(filter, limit, callback)
- `filter` - A master server [filter string](https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Filter)
- `limit` - How many servers should be returned, at maximum. Hard limit is 5000.
- `callback` - Called when the requested data is available
	- `servers` - An array of objects containing server data
		- `addr` - The server's IP address in `x.x.x.x:p` format
		- `gameport` - The port the server is running on for game clients
		- `specport` - The port the server is running on for spectator clients (`null` for none)
		- `steamid` - A [`SteamID`](https://www.npmjs.com/package/steamid) object containing the server's SteamID
		- `name` - The server's hostname
		- `appid` - The AppID of the game which the server is serving
		- `gamedir` - The directory of the game which the server is serving
		- `version` - The version of the game which the server is serving
		- `product` - The product name of the game which the server is serving
		- `region` - The [region code](https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Region_codes) for where the server is located
		- `players` - How many people are currently on this server
		- `max_players` - How many people can be on the server at once
		- `bots` - How many CPU players are currently on this server
		- `map` - The name of the map which the server is currently running
		- `secure` - `true` if the server is VAC-secure, `false` if not
		- `dedicated` - `true` if the server is dedicated, `false` if listen
		- `os` - `w` if the server is running on Windows, `l` for Linux
		- `gametype` - The server's tags, separated by commas

**Works when anonymous.** Requests a list gameservers from Steam matching a given filter, along with information about the server as Steam knows it.

### getServerSteamIDsByIP(ips, callback)
- `ips` - An array of IP addresses, in `x.x.x.x:p` format
- `callback` - Called when requested data is available
	- `servers` - An object whose keys are IP addresses in `x.x.x.x:p` format and values are [`SteamID`](https://www.npmjs.com/package/steamid) objects

**Works when anonymous.** Gets current SteamIDs for servers running on given addresses.

### getServerIPsBySteamID(steamids, callback)
- `steamids` - An array of [`SteamID`](https://www.npmjs.com/package/steamid) objects, or something which can parse into one (64-bit SteamID as string, Steam3 rendered format)
- `callback` - Called when requested data is available
	- `servers` - An object whose keys are 64-bit numeric SteamIDs and values are IP addresses in `x.x.x.x:p` format

**Works when anonymous.** Gets current IP addresses for servers with given SteamIDs.

### getProductChanges(sinceChangenumber, callback)
- `sinceChangenumber` - The changenumber of the last known changelist. You will get changes which have occurred since then and now. Use 1 to request all changes ever.
- `callback` - Called when data is available
	- `currentChangenumber` - The changenumber of the newest changelist
	- `apps` - An array of objects for apps which have changed. Each object has these properties:
		- `appid` - The AppID of the app
		- `change_number` - The changenumber of the latest changelist in which the app has changed
		- `needs_token` - `true` if you need an access token to get most details about this app, `null` if not
	- `packages` - An array of objects for packages which have changed. Each object has the same properties as the `apps` array, except `appid` is `packageid`.

**Works when anonymous.** Requests a list of all apps/packages which have changed since a given changenumber.

### getProductInfo(apps, packages, callback)
- `apps` - Either an array of AppIDs, or an array of objects containing `appid` and `access_token` properties
- `packages` - Either an array of PackageIDs, or an array of objects containing `packageid` and `access_token` properties
- `callback` - Called when requested data is available
	- `apps` - An object whose keys are AppIDs and whose values are objects
		- `changenumber` - The changenumber of the latest changelist in which this app changed
		- `missingToken` - `true` if you need to provide an access token to get more details about this app
		- `appinfo` - An object whose structure is identical to the output of `app_info_print` in the [Steam console](steam://nav/console)
	- `packages` - An object whose keys are PackageIDs and whose values are objects. Each object has the same properties as the `apps` array, except `appinfo` is `packageinfo`.
	- `unknownApps` - An array of input AppIDs which don't exist
	- `unknownPackages` - An array of input PackageIDs which don't exist

**Works when anonymous.** Requests details about one or more apps or packages.

### getProductAccessToken(apps, packages, callback)
- `apps` - An array of AppIDs
- `packages` - An array of PackageIDs
- `callback` - Called when requested data is available
	- `apps` - An object whose keys are AppIDs and whose values are access tokens
	- `packages` - An object whose keys are PackageIDs and whose values are access tokens
	- `appDeniedTokens` - An array of AppIDs for which Steam denied you an access token
	- `packageDeniedTokens` - An array of PackageIDs for which Steam denied you an access token

**Works when anonymous.** Requests access tokens for one or more apps or packages. These access tokens can be used with [`getProductInfo`](#productinfoapps-packages-callback).

Access tokens are global. That is, everyone who has access to an app receives the same token. Tokens do not seem to expire.

### setPersona(state[, name])
- `state` - A value from `EPersonaState`
- `name` - Optional. Your new profile name

**v1.9.0 or later is required to use this method**

Changes our online status, and optionally your profile name. You need to call this after you logon or else you'll show up as offline.

### addFriend(steamID)
- `steamID` - The SteamID of the user you want to add as a friend, as a `SteamID` object or a string that can parse into one

**v1.9.0 or later is required to use this method**

Sends a friend request to the user with the specified `SteamID`. If they've already sent you a friend request, accepts it.

### removeFriend(steamID)
- `steamID` - The SteamID of the user you want to remove from your friends list, as a `SteamID` object or a string that can parse into one

**v1.9.0 or later is required to use this method**

Removed a specified user from your friends list. Also ignores an outstanding friend request from this user.

### blockUser(steamID[, callback])
- `steamID` - The SteamID of the user you want to block, as a `SteamID` object or a string that can parse into one
- `callback` - Optional. Called when the request completes
	- `eresult` - A value from the `EResult` enum

**v1.9.0 or later is required to use this method**

Blocks all communication with a specified user.

### unblockUser(steamID[, callback])
- `steamID` - The SteamID of the user you want to unblock, as a `SteamID` object or a string that can parse into one
- `callback` - Optional. Called when the request completes
	- `eresult` - A value from the `EResult` enum

**v1.9.0 or later is required to use this method**

Unblocks all communication with a specified user.

### getPersonas(steamids[, callback])
- `steamids` - An array of `SteamID` objects or strings which can parse into `SteamID` objects
- `callback` - Optional. Called when the requested data is available.
	- `personas` - An object whose keys are 64-bit SteamIDs and whose values are objects identical to those received in the [`user`](#user) event

**v1.9.0 or later is required to use this method**

Requests persona data for one or more users from Steam. The response will arrive in the [`user`](#user) event, or in the callback if provided.

### getSteamLevels(steamids, callback)
- `steamids` - An array of `SteamID` objects or strings that can parse into `SteamID` objects
- `callback` - Called when the requested data is available.
	- `results` - An object whose keys are 64-bit SteamIDs (as strings) and whose values are Steam levels

**v1.9.0 or later is required to use this method**

Gets the Steam Level for one or more Steam users (who do not have to be on your friends list).

### trade(steamID)
- `steamID` - Either a `SteamID` object or a string which can parse into one

**v1.9.0 or later is required to use this method**

Send a trade request to the specified user. Listen for the [`tradeResponse`](#traderesponse) event for their response.

### cancelTradeRequest(steamID)
- `steamID` - Either a `SteamID` object or a string which can parse into one

**v1.9.0 or later is required to use this method**

Cancels your outstanding trade request to the specified user.

### chatMessage(recipient, message[, type])
- `recipient` - Either a `SteamID` object or a string which can parse into one for the recipient of your message
- `message` - The chat message that you're sending to them
- `type` - Optional. A value from `EChatEntryType`. Defaults to `ChatMsg`. This usually shouldn't be needed.

**v1.9.0 or later is required to use this method**

Sends a chat message to a friend or a chat room.

### chatTyping(recipient)
- `recipient` - Either a `SteamID` object or a string which can parse into one

**v1.9.0 or later is required to use this method**

Tells the `recipient` that you're typing a chat message.

### getChatHistory(steamID[, callback])
- `steamID` - Either a `SteamID` object or a string which can parse into one
- `callback` - Optional. Called when the requested data is available
	- `success` - An `EResult` value
	- `messages` - An array of message objects, each of which has the following properties:
		- `steamID` - The SteamID of the user who sent the message, either us or them (as a `SteamID` object)
		- `timestamp` - A `Date` object for when the message was sent
		- `message` - The message text
		- `unread` - `true` if this was a new offline message, `false` if it's just history

**v1.9.0 or later is required to use this method**

Requests our chat history with a user. The results will arrive either in the callback or in the [`chatHistory`](#chathistory) event.

### joinChat(steamID[, callback])
- `steamID` - The SteamID of the chat to join (as a `SteamID` object or a string which can parse into one)
- `callback` - Optional. Called when we either join or fail to join.
	- `result` - A value from `EResult`

**v1.9.0 or later is required to use this method**

Joins a chat room. To join a group chat, use the group's SteamID.

### leaveChat(steamID)
- `steamID` - The SteamID of the chat room to leave (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Leaves a chat room we're in.

### setChatPrivate(steamID)
- `steamID` - The SteamID of the chat room to lock (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Locks a chat room so that only group members and invited users can join.

### setChatPublic(steamID)
- `steamID` - The SteamID of the chat room to unlock (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Unlocks a chat room so anyone can join.

### setChatOfficersOnly(steamID)
- `steamID` - The SteamID of the chat room to set officers-only (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Sets a chat room so that only group officers can chat.

### unsetChatOfficersOnly(steamID)
- `steamID` - The SteamID of the chat room to unset officers-only (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Sets a chat room so that anyone can chat.

### kickFromChat(chatID, userID)
- `chatID` - The SteamID of the chat room to kick the user from (as a `SteamID` object or a string which can parse into one)
- `userID` - The SteamID of the user to kick from the room (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Kicks a user from a chat room.

### banFromChat(chatID, userID)
- `chatID` - The SteamID of the chat room to ban the user from (as a `SteamID` object or a string which can parse into one)
- `userID` - The SteamID of the user to ban from the room (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Bans a user from a chat room.

### unbanFromChat(chatID, userID)
- `chatID` - The SteamID of the chat room to unban the user from (as a `SteamID` object or a string which can parse into one)
- `userID` - The SteamID of the user to unban from the room (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Unbans a banned user from a chat room.

### inviteToChat(chatID, userID)
- `chatID` - The SteamID of the chat room to invite to (as a `SteamID` object or a string which can parse into one)
- `userID` - The SteamID of the user to invite to the room (as a `SteamID` object or a string which can parse into one)

**v1.9.0 or later is required to use this method**

Invites a user to a chat room.

### createChatRoom([convertUserID, ][inviteUserID, ][callback])
- `convertUserID` - If the user with the SteamID passed here has a chat window open with us, their window will be converted to the new chat room and they'll join it automatically. If they don't have a window open, they'll get an invite.
- `inviteUserID` - If specified, the user with the SteamID passed here will get invited to the new room automatically.
- `callback` - Optional. Called when the chat is created or a failure occurs.
	- `result` - A value from `EResult`
	- `chatID` - If successful, the SteamID of the newly-created room, as a `SteamID` object

**v1.9.0 or later is required to use this method**

Creates a new multi-user chat room.

# Events

## ID Events

Events marked as **ID events** are special. They all have a `SteamID` object as their first parameter. In addition to the event itself firing, a second event comprised of `eventName + "#" + steamID.getSteamID64()` is fired.

For example:

```js
// This will fire when we receive a chat message from ANY friend
user.on('friendMessage', function(steamID, message) {
	console.log("Friend message from " + steamID.getSteam3RenderedID() + ": " + message);
}

// This will fire when we receive a chat message from [U:1:46143802] / 76561198006409530 ONLY
user.on('friendMessage#76561198006409530', function(steamID, message) {
	console.log("Friend message from " + steamID.getSteam3RenderedID() + ": " + message);
}
```

### loggedOn
- `details` - An object containing various details about your account (see [`CMsgClientLogonResponse`](https://github.com/SteamRE/SteamKit/blob/SteamKit_1.6.3/Resources/Protobufs/steamclient/steammessages_clientserver.proto#L93-L116))

Emitted when you're successfully logged into Steam.

### steamGuard
- `domain` - If an email code is needed, the domain name of the address where the email was sent. `null` if an app code is needed.
- `callback` - Should be called when the code is available.
	- `code` - The Steam Guard auth code

If the `promptSteamGuardCode` option is disabled, this event will be emitted when Steam requests a Steam Guard code from us. You should collect the code from the user somehow and then call the `callback` with the code as the sole argument.

Example:

```js
user.on('steamGuard', function(domain, callback) {
	console.log("Steam Guard code needed from email ending in " + domain);
	var code = getCodeSomehow();
	callback(code);
});
```

### error
- `e` - An `Error` object

Emitted when an error occurs during logon. Also emitted if we're disconnected and `autoRelogin` is either disabled, or it's a fatal disconnect.

If this event isn't handled, the program will crash.

The `SteamUser` object's `steamID` property will still be defined when this is emitted. The `Error` object will have an `eresult` parameter which is a value from the [`EResult`](https://github.com/SteamRE/SteamKit/blob/SteamKit_1.6.3/Resources/SteamLanguage/eresult.steamd) enum.

### disconnected
- `eresult` - A value from the `Steam.EResult` enum

Emitted when we're disconnected from Steam for a non-fatal reason and `autoRelogin` is enabled. `SteamUser` will continually retry connection and will either emit `loggedOn` when logged back on, or `error` if a fatal logon error is experienced.

The `SteamUser` object's `steamID` property will still be defined when this is emitted.

### sentry
- `sentry` - A Buffer containing your new sentry file

Emitted when Steam sends us a new sentry file. By default, `SteamUser` will automatically save and reuse this sentry file for subsequent logins, but if you wish you may handle it yourself (see [`setSentry`](#setsentrysentry)).

### webSession
- `sessionID` - The value of the `sessionid` cookie
- `cookies` - An array of cookies, as `name=value` strings

Emitted when a steamcommunity.com web session is successfully negotiated. This will automatically be emitted on logon and in response to [`webLogOn`](#weblogon) calls.

Some libraries require you to provide your `sessionID`, others don't. If your library doesn't, you can safely ignore it.

### loginKey
- `key` - Your login key

If you enabled `rememberPassword` in [`logOn`](#logondetails), this will be emitted when Steam sends us a new login key. This key can be passed to [`logOn`](#logondetails) as `loginKey` in lieu of a password on subsequent logins.

At this time, I'm not sure if login keys expire, so to be safe you should record this somewhere (in a database, in a file, etc) and overwrite it every time the event is emitted.

### newItems
- `count` - How many new items you have (can be 0)

Emitted when Steam sends a notification of new items. You can reset the count to 0 by loading your inventory page (https://steamcommunity.com/my/inventory) while logged in.

### newComments
- `count` - How many total new comments you have (can be 0)
- `myItems` - How many of the total comments are on your content (workshop items, screenshots, your profile, etc.)
- `discussions` - How many of the total comments are posts in subscribed discussion threads

Emitted when Steam sends a notification of new comments.

### tradeOffers
- `count` - How many active received trade offers you have (can be 0)

Emitted when Steam sends a notification of new trade offers.

### offlineMessages
- `count` - How many unread offline chat messages you have
- `friends` - An array of SteamID strings for the users who have sent you unread offline chat messages

Emitted when Steam sends a notification of unread offline chat messages. This will always be emitted after logon, even if you have no messages.

### emailInfo
- `address` - Your account's email address
- `validated` - A boolean value for whether or not your email address is validated

Emitted on logon and when email info changes. The [`emailInfo`](#emailinfo) property will be updated after this event is emitted.

### accountLimitations
- `limited` - `true` if your account is [limited](https://support.steampowered.com/kb_article.php?ref=3330-IAGK-7663), `false` if not
- `communityBanned` - `true` if your account is banned from Steam Community, `false` if not
- `locked` - `true` if your account is [locked](https://support.steampowered.com/kb_article.php?ref=6416-FHVM-3982), `false` if not (accounts can also be locked by Support)
- `canInviteFriends` - `true` if your account can invite friends, `false` if not

Emitted on logon and probably when limitations change. The [`limitations`](#limitations) property will be updated after this event is emitted.

### vacBans
- `numBans` - How many bans your account has
- `appids` - The AppIDs from which you're banned. Since each ban affects a range of AppIDs, some of the AppIDs in this array may not exist.

Emitted on logon and probably when you get banned/unbanned. The [`vac`](#vac) property will be updated after this event is emitted.

### wallet
- `hasWallet` - `true` if your account has a Steam Wallet, `false` if not
- `currency` - The currency ID of your account's wallet (the enum of currencies is available as `SteamUser.ECurrencyCode`)
- `balance` - Your account's current wallet balance

Emitted on logon and when wallet balance changes. The [`wallet`](#wallet) property will be updated after this event is emitted.

### licenses
- `licenses` - An array of licenses

Contains the license data for the packages which your Steam account owns. To see license object structure, see [`CMsgClientLicenseList.License`](https://github.com/SteamRE/SteamKit/blob/SteamKit_1.6.3/Resources/Protobufs/steamclient/steammessages_clientserver.proto#L307-L320).

Emitted on logon and when licenses change. The [`licenses`](#licenses) property will be updated after this event is emitted.

This isn't emitted for anonymous accounts. However, all anonymous user accounts have a license for package 17906 automatically.

### tradeRequest
- `steamID` - The SteamID of the user who sent the request, as a `SteamID` object
- `respond` - A function which you should call to either accept or decline the request
	- `accept` - `true` to accept the request, `false` to decline it

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when someone sends us a trade request. Example usage:

```js
user.on('tradeRequest', function(steamID, respond) {
	console.log("Incoming trade request from " + name + " " + steamID.getSteam3RenderedID() + ", accepting");
	respond(true);
}
```

### tradeResponse
- `steamID` - The SteamID of the other user, as a `SteamID` object
- `response` - A value from the `EEconTradeResponse` enum
- `restrictions` - An object containing the following properties (of which any or all could be undefined)
	- `steamguardRequiredDays`
	- `newDeviceCooldownDays`
	- `defaultPasswordResetProbationDays`
	- `passwordResetProbationDays`
	- `defaultEmailChangeProbationDays`
	- `emailChangeProbationDays`

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when someone responds to our trade request. Also emitted with response `EEconTradeResponse.Cancel` when someone cancels their outstanding trade request to us.

### tradeStarted
- `steamID` - The SteamID of your trade partner, as a `SteamID` object

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a new trade session has started (either as a result of someone accepting a Steam trade request, an in-game (TF2) trade request, or something else).

The trade is now available at http://steamcommunity.com/trade/[SteamID], and can be automated with [`node-steam-trade`](https://github.com/seishun/node-steam-trade).

### user
- `sid` - A `SteamID` object for the user whose data we just received
- `user` - An object containing the user's persona data

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when Steam sends us persona information about a user. The [`users`](#users) property isn't yet updated when this is emitted, so you can compare to see what changed.

### group
- `sid` - A `SteamID` object for the group whose data we just received
- `group` - An object containing the group's data

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when Steam sends us information about a Steam group. The [`groups`](#groups) property isn't yet updated when this is emitted, so you can compare to see what changed.

### groupEvent
- `sid` - A `SteamID` object for the group who just posted/started an event
- `headline` - The name of the event
- `date` - A `Date` object for the event's start time
- `gid` - The event's GID (link to the event page at https://steamcommunity.com/gid/<SteamID>/event/<GID>)
- `gameID` - The AppID of the game which this event is associated with

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a group schedules a new event, or a new event starts.

### groupAnnouncement
- `sid` - A `SteamID` object for the group who just posted an announcement
- `headline` - The title of the announcement
- `gid` - The announcement's GID (link to the announcement page at https://steamcommunity.com/gid/<SteamID>/announcements/detail/<GID>)

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a group posts a new announcement.

### friendRelationship
- `sid` - A `SteamID` object for the user whose relationship with us just changed
- `relationship` - A value from `EFriendRelationship`

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when our relationship with a particular user changes. For example, `EFriendRelationship.RequestRecipient` means that we got invited as a friend, `EFriendRelationship.None` means that we got unfriended.

The [`myFriends`](#myfriends) property isn't yet updated when this is emitted, so you can compare to the old value to see what changed.

### groupRelationship
- `sid` - A `SteamID` object for the group whose relationship with us just changed
- `relationship` - A value from `EFriendRelationship`

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when our relationship with a particular Steam group changes.

The [`myGroups`](#mygroups) property isn't yet updated when this is emitted, so you can compare to the old value to see what changed.

### friendsList

**v1.9.0 or later is required to use this event**

Emitted when our friends list is downloaded from Steam after logon.

### groupList

**v1.9.0 or later is required to use this event**

Emitted when our group list is downloaded from Steam after logon.

### friendsGroupList
- `groups` - An object whose structure is identical to the [`myFriendGroups`](#myfriendgroups) property

**v1.10.0 or later is required to use this event**

Emitted when our friends group list is downloaded from Steam after logon (in the official client, these are called *tags*).

The `myFriendGroups` property will be updated **after** this event is emitted, so you can compare `groups` with the property to see what changed.

### friendOrChatMessage
- `senderID` - The message sender, as a `SteamID` object
- `message` - The message text
- `room` - The room to which the message was sent. This is the user's `SteamID` if it was a friend message

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when we receive either a friend message or a chat room message.

### friendMessage
- `senderID` - The message sender, as a `SteamID` object
- `message` - The message text

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when we receive a direct friend message (that is, not through a chat room).

### friendTyping
- `senderID` - The `SteamID` of the friend who's typing

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when Steam notifies us that one of our friends is typing a message to us.

### friendMessageEcho
- `recipientID` - The `SteamID` of the user who rececived this message
- `message` - The message text

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when Steam echos us a message that we sent to a friend on another login.

### friendTypingEcho
- `recipientID` - The `SteamID` of the user who we're typing to

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when Steam echos us a notification that we're typing to a friend on another login.

### chatMessage
- `room` - The `SteamID` of the chat room
- `chatter` - The `SteamID` of the message sender
- `message` - The message text

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when we receive a chat message from a chat room. This is a special ID event. Any of the following are acceptable:
- `chatMessage`
- `chatMessage#roomID`
- `chatMessage#senderID`
- `chatMessage#roomID#senderID`

### chatHistory
- `steamID` - The `SteamID` of the user with whom we got chat history
- `success` - An `EResult` value
- `messages` - An array of message objects

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

With the exception of the `steamID` argument, this is identical to the callback of `getChatHistory`.

### chatInvite
- `inviterID` - The `SteamID` of the user who invited us
- `chatID` - The `SteamID` of the chat that we were invited to
- `chatName` - The name of the chat we were invited to. Empty if it's a multi-user chat and not a group chat.

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when we're invited to join a chat room. This is a special ID event. Any of the following are acceptable:
- `chatInvite`
- `chatInvite#inviterID`
- `chatInvite#chatID`
- `chatInvite#inviterID#chatID`

### chatCreated
- `friendID` - The `SteamID` of the friend with whom we were creating this room
- `eresult` - An `EResult` value
- `chatID` - The `SteamID` of the newly-created chat, if successful

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

With the exception of the `friendID` argument, this event is identical to the callback of `createChatRoom`.

### chatEnter
- `chatID` - The `SteamID` of the chat room that we either entered or failed to enter
- `response` - A value from `EChatRoomEnterResponse`

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

With the exception of the `chatID` argument, this event is identical to the callback of `joinChat`.

### chatLeft
- `chatID` - The `SteamID` of the chat room that we left

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when we leave a chat room for any reason (we left, kicked, banned, etc).

### chatUserJoined
- `chatID` - The `SteamID` of the chat room that the user joined
- `userID` - The `SteamID` of the user who joined

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a user joins a chat room we're in.

### chatUserLeft
- `chatID` - The `SteamID` of the chat room that the user left
- `userID` - The `SteamID` of the user who left

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a user leaves a chat room we're in.

### chatUserDisconnected
- `chatID` - The `SteamID` of the chat room that the user disconnected from
- `userID` - The `SteamID` of the user who disconnected

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a user in a chat room we're in disconnects from Steam.

### chatUserKicked
- `chatID` - The `SteamID` of the chat room that the user was kicked from
- `userID` - The `SteamID` of the user who was kicked
- `actor` - The `SteamID` of the user who did the kicking

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a user is kicked from a chat room we're in.

### chatUserBanned
- `chatID` - The `SteamID` of the chat room that the user was banned from
- `userID` - The `SteamID` of the user who was banned
- `actor` - The `SteamID` of the user who did the banning

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a user is banned from a chat room we're in.

### chatUserSpeaking
- `chatID` - The `SteamID` of the chat room that the user is speaking in
- `userID` - The `SteamID` of the user who is speaking

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a user in a chat room we're in starts speaking over voice chat.

### chatUserDoneSpeaking
- `chatID` - The `SteamID` of the chat room that the user is done speaking in
- `userID` - The `SteamID` of the user who is done speaking

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a user in a chat room we're in stops speaking over voice chat.

### chatSetPublic
- `chatID` - The `SteamID` of the chat room that was unlocked
- `actor` - The `SteamID` of the user who unlocked it

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a chat room we're in is unlocked so that anyone can join.

### chatSetPrivate
- `chatID` - The `SteamID` of the chat room that was locked
- `actor` - The `SteamID` of the user who locked it

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a chat room we're in is locked so that only group members can join without an invite.

### chatSetOfficersOnly
- `chatID` - The `SteamID` of the chat room that was set officers-only
- `actor` - The `SteamID` of the user who set it officers-only

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a chat room we're in is set so that only group officers can chat.

### chatSetPrivate
- `chatID` - The `SteamID` of the chat room that was unset officers-only
- `actor` - The `SteamID` of the user who unset it officers-only

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when a chat room we're in is set so that everyone can chat.
