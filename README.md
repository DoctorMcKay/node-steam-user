# SteamUser
### A handler module for node-steam v1.0.0 and greater

SteamUser is a handler module for [node-steam](https://github.com/seishun/node-steam) version 1.0.0 or greater.

It's designed to be a self-contained module which provides all the functionality expected of a Steam user client.

**This is currently a work in progress and is incomplete.**

# Options

There are a number of options which can control the behavior of the `SteamUser` object. They are:

- `dataDirectory` - Controls where the Steam server list and sentry files are written. Defaults to a platform-specific user data directory.
	- On Windows, this is %localappdata%\doctormckay\node-steamuser
	- On Linux, this is ~/.local/share/node-steamuser
- `autoRelogin` - A boolean which controls whether or not `SteamUser` will automatically reconnect to Steam if disconnected for any reason (except an explicit logoff). Defaults to `true`.
- `singleSentryfile` - A boolean which controls whether or not `SteamUser` will use a single sentry file for all accounts. If off, a file named `sentry.accountname.bin` will be saved for each account. If on, a file named `sentry.bin` will be used for all accounts. Defaults to `false`.
- `promptSteamGuardCode` - A boolean which controls whether or not `SteamUser` will automatically prompt for Steam Guard codes when necessary from `stdin`.

# Properties

### client

The `SteamClient` which is being used to communicate with Steam.

### steamID

`null` if not connected, a [`SteamID`](https://www.npmjs.com/package/steamid) containing your SteamID otherwise.

### options

An object containing options for this `SteamUser`. **Read-only**, use `setOption` or `setOptions` to change an option.

# Methods

### Constructor([client][, options])
- `client` - An optional `SteamClient` to use to connect to Steam. If not provided, one will be created automatically.
- `options` - An optional object containing zero or more [options](#options) to set for this `SteamUser`.

Constructs a new `SteamUser`.

### setOption(option, value)
- `option` - The name of the option to set
- `value` - The value to set for this option

Changes the value of an [option](#options).

### setOptions(options)
- `options` - An object containing zero or more [options](#options).

### logOn([details])
- `details` - An object containing details for this logon
	- `accountName` - If logging into a user account, the account's name
	- `password` - If logging into an account without a login key, the account's password
	- `loginKey` - If logging into an account with a login key, this is the account's login key
	- `rememberPassword` - `true` if you want to get a login key which can be used in lieu of a password for subsequent logins. `false` or omitted otherwise.

Logs onto Steam. Omit the `details` object if you wish to login to an anonymous user account.

### logOff()

Logs you off of Steam and closes the connection.

# Events

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

Emitted when an error occurs during logon. If this event isn't handled, the program will crash.

The `Error` object will have an `eresult` parameter which is a value from the [`EResult`](https://github.com/SteamRE/SteamKit/blob/SteamKit_1.6.3/Resources/SteamLanguage/eresult.steamd) enum.
