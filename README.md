# SteamUser
### A handler module for node-steam v1.0.0 and greater
[![npm version](https://img.shields.io/npm/v/steam-user.svg)](https://npmjs.com/package/steam-user)
[![npm downloads](https://img.shields.io/npm/dm/steam-user.svg)](https://npmjs.com/package/steam-user)
[![dependencies](https://img.shields.io/david/DoctorMcKay/node-steam-user.svg)](https://david-dm.org/DoctorMcKay/node-steam-user)
[![license](https://img.shields.io/npm/l/steam-user.svg)](https://github.com/DoctorMcKay/node-steam-user/blob/master/LICENSE)
[![paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=N36YVAT42CZ4G&item_name=node%2dsteam%2duser&currency_code=USD)

SteamUser is a handler module for [node-steam](https://github.com/seishun/node-steam) version 1.0.0 or greater.
It also works with [node-steam-client](https://github.com/DoctorMcKay/node-steam-client).

It's designed to be a self-contained module which provides all the functionality expected of a Steam user client.

[Subscribe to release announcements](https://github.com/DoctorMcKay/node-steam-user/releases.atom)

This reports anonymous usage statistics to the author. [See here](https://github.com/DoctorMcKay/node-stats-reporter) for more information.

**Have a question about the module or coding in general? *Do not create a GitHub issue.* GitHub issues are for feature requests and bug reports. Instead, post in the [dedicated forum](https://dev.doctormckay.com/forum/7-node-steam-user/). Such issues may be ignored!**

# Contents
- [Enums](#enums-)
- [Static Properties](#static-properties-)
- [Static Methods](#static-methods-)
- [Options](#options-)
- [Properties](#properties-)
- [Methods](#methods-)
- [Events](#events-)

# Enums [^](#contents)

There are a lot of enums used in Steam. They're all available directly from `SteamUser`. For example, access `EResult`
using `SteamUser.EResult`.

All enums can be viewed [on GitHub](https://github.com/DoctorMcKay/node-steam-user/tree/master/enums).

Additionally, for convenience, the name of an enum value is available from any enum at the key identified by the enum
value. For example, given an EResult of `88` you can translate it using `SteamUser.EResult[88]` which gives you
the string `TwoFactorCodeMismatch`.

# Static Properties [^](#contents)

Static properties, or properties attached directly to `SteamUser`, are accessed on the root module and not on instantiated handler instances.

### Steam

The `node-steam-client` module installation used by `SteamUser`. You can use this in place of `require('steam-client')`
if you'd like to avoid duplicate installations. As of v3.7.0, all enums are built into `SteamUser` so you probably won't
need to use this. Example of using `EResult`:

```js
var ok = SteamUser.EResult.OK;
```

# Static Methods [^](#contents)

Static methods, or functions attached directly to `SteamUser`, are called on the root module and not on instantiated handler instances.

### formatCurrency(amount, currency)
- `amount` - The amount of the currency
- `currency` - The currency code value in the [`ECurrencyCode`](#ecurrencycode) enum

Formats a currency value and returns a string. For example:

```js
console.log(SteamUser.formatCurrency(12.34, SteamUser.ECurrencyCode.USD)); // $12.34
console.log(SteamUser.formatCurrency(12345, SteamUser.ECurrencyCode.JPY)); // � 12345
console.log(SteamUser.formatCurrency(123.45, SteamUser.ECurrencyCode.EUR)); // 123,45�
```

### generateAuthCode(secret[, timeOffset])
- `secret` - A `Buffer`, hex string, or base64 string containing your shared secret
- `timeOffset` - The number of seconds by which your local clock is off from the Steam servers. Defaults to 0.

Generates a 5-digit alphanumeric Steam Guard code for use with two-factor mobile authentication.

**Deprecated and will be removed in a future release. Use [`steam-totp`](https://www.npmjs.com/package/steam-totp) instead.**

# Options [^](#contents)

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

### machineIdType

What kind of machine ID will SteamUser send to Steam when logging on? Should be a value from [`EMachineIDType`](https://github.com/DoctorMcKay/node-steam-user/blob/master/resources/EMachineIDType.js).

Added in 1.7.0.

Defaults to `AccountNameGenerated`.

### machineIdFormat

If you're using `machineIdType` `AccountGenerated`, this is the format it uses. This is an array of three strings, each of which will be hashed with SHA1 before being sent to Steam. `{account_name}` will be replaced with the current account name.

Added in 1.13.0.

Defaults to `["SteamUser Hash BB3 {account_name}", "SteamUser Hash FF2 {account_name}", "SteamUser Hash 3B3 {account_name}"]`.

### enablePicsCache

If enabled, then `node-steam-user` will internally cache data about all apps and packages that it knows about.
Currently, `node-steam-user` "knows about" an app/package if:

- Packages
    - You own it
    - You request info about it via `getProductInfo`
- Apps
    - It's in a known package
    - You request info about it via `getProductInfo`
    - A friend who is online plays the app
    - You request info about an online user who is playing it via `getPersonas`

This option is required in order to use several methods and events. This works when logging in anonymously.

Added in 3.3.0.

Defaults to `false`.

### picsCacheAll

If enabled, `enablePicsCache` is enabled, and `changelistUpdateInterval` is nonzero, then apps and packages which get
updated while your bot is running will also be added to the cache. Default behavior is to only cache apps and packages
that are "known" via the above criteria.

Added in 3.3.0.

Defaults to `false`.

### changelistUpdateInterval

If `enablePicsCache` is enabled, then `node-steam-user` will automatically request app/package changes (via
`getProductChanges`) for known apps and packages, and update the internal cache when they update. Set to `0` to disable.

Added in 3.3.0.

Defaults to `60000`.

### additionalHeaders

Set this to an object where keys are header names and values are header values, and those headers will be included
with all HTTP requests `node-steam-user` makes to the Steam WebAPI.

Added in 3.29.0.

Defaults to `{}`.

# Properties [^](#contents)

### client

The `SteamClient` which is being used to communicate with Steam.

### steamID

`null` if not connected, a [`SteamID`](https://www.npmjs.com/package/steamid) containing your SteamID otherwise.

### options

An object containing options for this `SteamUser`. **Read-only**, use `setOption` or `setOptions` to change an option.

### publicIP

**v1.12.0 or later is required to use this property**

Only defined if you're currently logged on. This is your public IP as reported by Steam, in "x.x.x.x" format.

### cellID

**v1.12.0 or later is required to use this property**

Only defined if you're currently logged on. This is your cell (region ID) on the Steam network.

### vanityURL

**v3.7.0 or later is required to use this property**

Only defined if you're currently logged on. This is your vanity URL (the part that goes after `/id/` in your profile
URL). Falsy if you don't have one.

### accountInfo

An object containing information about your account. `null` until [`accountInfo`](#accountinfo-1) is emitted.

- `name` - Your account's Steam (persona) name
- `country` - The character code from which you're logging in (via GeoIP), e.g. "US"
- `authedMachines` - How many machines are authorized to login to your account with Steam Guard
- `flags` - Your account's bitwise [flags](https://github.com/SteamRE/SteamKit/blob/b80cdf5249891d54c655e39262d8267c7b40b249/Resources/SteamLanguage/enums.steamd#L81-L113)
- `facebookID` - If your account is linked with Facebook, this is your Facebook account ID
- `facebookName` - If your account is linked with Facebook, this is your (real) name on Facebook

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

### gifts

An array containing gifts and guest passes you've received but haven't accepted (to your library or to your inventory) or declined.
`null` until [`gifts`](#gifts-1) is emitted. Each object in the array contains these properties:

- `gid` - The ID of this gift/guest pass, as a string (it's a 64-bit number)
- `packageid` - The ID of the package which this gift/guest pass will grant
- `TimeCreated` - A `Date` object for when this gift was purchased or guest pass was granted
- `TimeExpiration` - A `Date` object for when this guest pass will expire (if it's a gift, this will be Mon Jan 18 2038 22:14:07 GMT-0500 (Eastern Standard Time))
- `TimeSent` - A `Date` object for when this gift/guest pass was sent to you
- `TimeAcked` - Appears to be the same as `TimeSent`
- `TimeRedeemed` - Appears to always be `null`
- `RecipientAddress` - Appears to always be an empty string
- `SenderAddress` - Appears to always be an empty string
- `SenderName` - The Steam display name of the user who sent you this gift

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

This isn't populated after logon until [`friendsList`](#friendslist) is emitted.

### myGroups

An object whose keys are 64-bit SteamIDs, and whose values are from the `EClanRelationship` enum. Therefore, you can deduce which groups you're in from this object.

When we leave a group, instead of setting the value to `EClanRelationship.None`, the key is deleted from the object entirely.

This isn't populated after logon until [`groupList`](#grouplist) is emitted.

### myFriendGroups

**v1.10.0 or later is required to use this property**

An object containing your friend groups (in the official client, these are called *tags*). Keys are numeric group IDs, and objects as follows:
- `name` - A `string` containing the name of the group.
- `members` - An array containing `SteamID` objects for the members of this friend group.

### myNicknames

**v3.15.0 or later is required to use this property**

An object containing the nicknames you have assigned to other users. Keys are numeric 64-bit SteamIDs, properties are strings containing that user's nickname.

This is empty until [`nicknameList`](#nicknamelist) is emitted.

### picsCache

**v3.3.0 or later is required to use this property**

An object containing cached data about known apps and packages. Only useful if the `enablePicsCache` option is `true`.
- `changenumber` - The last known changenumber
- `apps` - An object whose keys are AppIDs and values are objects identical to those returned by `getProductInfo`
- `packages` - An object whose keys are PackageIDs and values are objects identical to those returned by `getProductInfo`

# Methods [^](#contents)

### Constructor([client][, options])
- `client` - An optional `SteamClient` to use to connect to Steam. If not provided, one will be created automatically.
- `options` - An optional object containing zero or more [options](#options-) to set for this `SteamUser`.

Constructs a new `SteamUser`. If you allow `SteamUser` to create its own `SteamClient`, then `SteamUser` will
automatically save and reload the CM server list.

### setOption(option, value)
- `option` - The name of the option to set
- `value` - The value to set for this option

Changes the value of an [option](#options-).

### setOptions(options)
- `options` - An object containing zero or more [options](#options-).

### setSentry(sentry)
- `sentry` - A Buffer containing the binary sentry file, binary SHA1 hash, or `null` to unset the set sentry

If you aren't using `dataDirectory` or you just want to provide your own sentry file, you can do it using this method.

You should call this before calling `logOn`. When you log on, `SteamUser` will use this sentry file.

You can provide either an entire sentryfile (preferred), or a Buffer containing the binary SHA1 hash of your sentryfile
(e.g. the output of the `sentry` event in node-steam 0.6.x).

### logOn([details])
- `details` - An object containing details for this logon
	- `accountName` - If logging into a user account, the account's name
	- `password` - If logging into an account without a login key, the account's password
	- `authCode` - If you have a Steam Guard email code, you can provide it here. You might not need to, see the [`steamGuard`](#steamguard) event. (Added in 1.9.0)
	- `twoFactorCode` - If you have a Steam Guard mobile two-factor authentication code, you can provide it here. You might not need to, see the [`steamGuard`](#steamguard) event. (Added in 1.9.0)
	- `loginKey` - If logging into an account with a login key, this is the account's login key
	- `rememberPassword` - `true` if you want to get a login key which can be used in lieu of a password for subsequent logins. `false` or omitted otherwise.
	- `logonID` - A number to identify this login. The official Steam client derives this from your machine's private IP (it's the `obfustucated_private_ip` field in `CMsgClientLogOn`). If you try to logon twice to the same account from the same public IP with the same `logonID`, the first session will be kicked with reason `SteamUser.EResult.LogonSessionReplaced`. Defaults to `0` if not specified.
	- `machineName` - A string containing the name of this machine that you want to report to Steam. This will be displayed on steamcommunity.com when you view your games list (when logged in).
	- `clientOS` - A [number](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EOSType.js) to identify your client OS. Auto-detected if you don't provide one.
	- `dontRememberMachine` - If you're providing an `authCode` but you don't want Steam to remember this sentryfile, pass `true` here.

**v3.11.0 or later is required to use `machineName` or `dontRememberMachine`.**

Logs onto Steam. The `CMClient`/`SteamClient` should **not** be already logged on, although as of v3.4.0 it can be
connected. Omit the `details` object if you wish to login to an anonymous user account.

### logOff()

Logs you off of Steam and closes the connection.

### relog()

**v3.18.0 or later is required to use this method**

Logs you off of Steam and then immediately back on. If you aren't logged into an anonymous account, then you **must**
set `rememberPassword` to `true` when logging on initially to use this. You also **must** wait for the
[`loginKey`](#loginkey) event to be emitted before you can use this. Attempts to call this method without both
criteria being met will result in an `Error` being thrown and nothing else will happen.

When used, `disconnected` and then `loggedOn` will be emitted in succession. This is essentially the same as using
`logOff()` and then calling `logOn()` immediately in the `disconnected` event callback.

### webLogOn()

`SteamUser` will automatically log onto steamcommunity.com when a successful connection to Steam is established (as an
individual user), but you can call `webLogOn()` to create a new session if your old one expires or becomes invalid.

Listen for the [`webSession`](#websession) event to get your cookies.

### createAccount(accountName, password, email, callback)

**This no longer works and is deprecated. It will be removed entirely in a future release.**

### requestValidationEmail([callback])
- `callback` - Optional. Called when a response is available
	- `result` - A value from `SteamUser.EResult`. `SteamUser.EResult.OK` if the mail was sent successfully.

Requests Steam to send you a validation email to your registered email address.

### enableTwoFactor(callback)
- `callback` - Required. Called when the activation email has been sent.
	- `response` - An object containing the response data

**v2.0.0 or later is required to use this method**

Starts the process to turn on TOTP for your account. You must have a phone number already linked with and verified on your account.

You'll be sent an SMS with an activation code that you'll need to provide to `finalizeTwoFactor`.

**You should save the entire `response` object somewhere secure.** You can use `JSON.stringify` on it safely.

Properties of note in the `response` object:
- `status` - A value from `EResult`. If this is not `OK` (1), then the request failed.
- `shared_secret` - This is your secret that's used for two-factor authentication.
- `revocation_code` - You will need this in the future to disable two-factor authentication.

### finalizeTwoFactor(secret, activationCode, callback)
- `secret` - A `Buffer` containing your shared secret
- `activationCode` - A `string` containing the activation code you got in your SMS
- `callback` - Required.
	- `err` - An `Error` object on failure, or `null` on success

**v2.0.0 or later is required to use this method**

Finishes the process of enabling TOTP two-factor authentication for your account. You can use [`steam-totp`](https://www.npmjs.com/package/steam-totp) in the future when logging on to get a code.

**If TOTP two-factor authentication is enabled, a code will be required *on every login* unless a `loginKey` is used.**

### disableTwoFactor(options, callback)

#### This method no longer works. Attempts to call it will result in an Error being thrown. [Use node-steamcommunity instead.](https://mckay.media/UnsG7)

### getSteamGuardDetails(callback)
- `callback` - A function to be called when the requested data is available
	- `enabled` - `true` if Steam Guard is enabled for your account, `false` if not
	- `enabledTime` - A `Date` object representing when Steam Guard was enabled for your account, or `null` if not available
	- `machineTime` - A `Date` object representing when your current machine was authorized with Steam Guard, or `null` if not available
	- `canTrade` - `true` if Steam Guard will allow you to trade, `false` if not. You may still be blocked by a trade ban or another trading limitation.
	- `twoFactorTime` - A `Date` object representing when the Steam Guard Mobile Authenticator was enabled for your account, or `null` if not enabled
	- `hasPhone` - `true` if your account has a linked phone, `false` if not

**v1.11.0 or later is required to use this method.
v1.12.0 or later is required to use `canTrade`.
v3.3.3 or later is required to use `twofactorTime`.
v3.5.0 or later is required to use `hasPhone`.**

Requests details about your account's Steam Guard status. This could be used to see if your account passes the Steam Guard trading requirements.

In order to trade, **all** of the following must be true:
- `enabled` must be `true` (account-level restriction)
- `enabledTime` must be at least 15 days ago (account-level restriction)
- ONE of `machineTime` OR `twoFactorTime` must be at least 7 days ago (sentryfile-level restriction)

### getCredentialChangeTimes(callback)
- `callback` - A function to be called when the requested data is available
    - `lastPasswordChange` - A `Date` object representing when your password was last changed, or `null` if never changed
    - `lastPasswordReset` - A `Date` object representing when your password was last *reset* via the "forgot your password" utility, or `null` if never reset
    - `lastEmailChange` - A `Date` object representing when your email address was last changed, or `null` if never changed

**v3.10.0 or later is required to use this method**

Gets when you last changed various account credentials.

### getAuthSecret(callback)
- `callback` - A function to be called when the requested data is available
    - `secretID` - A numeric ID assigned to your key by Steam
    - `key` - Your account's "auth secret", as a `Buffer`

**v3.10.0 or later is required to use this method**

Gets your account's auth secret, which is the pre-shared key used for in-home streaming.

### requestPasswordChangeEmail(currentPassword[, callback])
- `currentPassword` - Your account's current password, pre-change
- `callback` - Optional. Called when the request completes.
    - `err` - `null` on success, or an `Error` object on failure

**v3.13.0 or later is required to use this method**

**This no longer works and is deprecated. It will be removed entirely in a future release.**

Requests Steam to send you an email that contains a code you can supply to `changePassword` in order to change your
account's password. If you have a Mobile Authenticator enabled, this will return success but not actually do anything.
With 2FA, you should use a 2FA code instead of an email code.

### changePassword(oldPassword, newPassword, code[, callback])
- `oldPassword` - Your account's current (old) password
- `newPassword` - Your desired new password
- `code` - Either the code sent to your email from `requestPasswordChangeEmail` or your current Mobile Authenticator 2FA code (if you have 2FA on)
- `callback` - Optional. Called when the request completes.
    - `err` - `null` on success, or an `Error` object on failure

**v3.13.0 or later is required to use this method**

**This no longer works and is deprecated. It will be removed entirely in a future release.**

Changes your Steam account's password. This won't effect any trading restrictions.

### changeEmail(options[, callback])
- `options` - An object containing (some of) the following properties:
    - `password` - Required. Your account's current password.
    - `newEmail` - Required. The new email address you want to set on your account.
    - `code` - Optional (at first). The verification code sent to your new email (see below).
    - `twoFactorCode` - Optional (if you don't have 2FA enabled). If you do have 2FA (Mobile Authenticator) enabled, this is your current 2FA code (when confirming `code`).
    - `smsCode` - Optional (if Steam doesn't want it). See below.
- `callback` - Optional. Called when the request completes.
    - `err` - `null` on success, or an `Error` object on failure
    - `needsSmsCode` - `true` if Steam wants an SMS verification code (see below).

**v3.13.0 or later is required to use this method.**

Performs both steps in the two-step process that is changing your account's contact email. First, call this with only
your `password` and `newEmail`. This will cause Steam to send an email to your new email address containing a
verification code. Once you have that code, call this again with your `password`, `newEmail`, and `code`.

If you have a Mobile Authenticator (2FA) enabled on your account, then for the second request you will need to include
your current 2FA code as `twoFactorCode`. If you don't and `needsSmsCode` was `true` in the callback to the first request,
then Steam has sent a verification code in an SMS to your phone. In this case, you need to provide that code as `smsCode`
in the second request.

`needsSmsCode` may still be `true` in the callback to the second request. In this case, simply ignore it. If you received
no `err`, then your email was changed. The [`emailInfo`](#emailinfo-1) event will be emitted when your email changes.

**Changing your account's email will start a 5-day trading cooldown.**

### kickPlayingSession([callback])
- `callback` - Optional. A function to be called once Steam receives and responds to this request.
    - `err` - An `Error` object on failure, or `null` on success

**v3.21.0 or later is required to use this method**

If this account is being used to play a game on another logon session, calling this method will kick that other session
off of Steam entirely (it will get an `error` event if the other session is using node-steam-user).

### gamesPlayed(apps[, force])
- `apps` - An array, object, string, or number (see below)
- `force` - Optional, default `false`. If `true` and this account is playing a game elsewhere, calls `kickPlayingSession` first.

**v3.21.0 or later is required to use `force`**

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
	- `result` - A value from `SteamUser.EResult`
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
- `sinceChangenumber` - The changenumber of the last known changelist. You will get changes which have occurred since then and now. You won't get any info except the current changenumber if you request more than around 5,000 changenumbers in the past.
- `callback` - Called when data is available
	- `currentChangenumber` - The changenumber of the newest changelist
	- `apps` - An array of objects for apps which have changed. Each object has these properties:
		- `appid` - The AppID of the app
		- `change_number` - The changenumber of the latest changelist in which the app has changed
		- `needs_token` - `true` if you need an access token to get most details about this app, `null` if not
	- `packages` - An array of objects for packages which have changed. Each object has the same properties as the `apps` array, except `appid` is `packageid`.

**Works when anonymous.** Requests a list of all apps/packages which have changed since a given changenumber.

### getProductInfo(apps, packages[, inclTokens], callback)
- `apps` - Either an array of AppIDs, or an array of objects containing `appid` and `access_token` properties
- `packages` - Either an array of PackageIDs, or an array of objects containing `packageid` and `access_token` properties
- `inclTokens` - Optional boolean to automatically request product access tokens if they need them. The default value is false.
- `callback` - Called when requested data is available
	- `apps` - An object whose keys are AppIDs and whose values are objects
		- `changenumber` - The changenumber of the latest changelist in which this app changed
		- `missingToken` - `true` if you need to provide an access token to get more details about this app
		- `appinfo` - An object whose structure is identical to the output of `app_info_print` in the [Steam console](steam://nav/console)
	- `packages` - An object whose keys are PackageIDs and whose values are objects. Each object has the same properties as the `apps` array, except `appinfo` is `packageinfo`.
	- `unknownApps` - An array of input AppIDs which don't exist
	- `unknownPackages` - An array of input PackageIDs which don't exist

**Works when anonymous.** Requests details about one or more apps or packages.

If you have the PICS cache enabled and the risk of getting stale data is acceptable, you could check
[the PICS cache](#picscache) if you want instead of calling `getProductInfo`.

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

### getOwnedApps()

**v3.3.0 or later is required to use this method**

Returns an array of AppIDs which your account owns. This cannot be safely called until `appOwnershipCached` is emitted.

`enablePicsCache` must be `true` to use this method. Otherwise, an `Error` will be thrown.

### ownsApp(appid)
- `appid` - A numeric AppID

**v3.3.0 or later is required to use this method**

Returns `true` if your account owns the specified AppID, or `false` if not. This cannot be safely called until
`appOwnershipCached` is emitted.

`enablePicsCache` must be `true` to use this method. Otherwise, an `Error` will be thrown.

### getOwnedDepots()

**v3.3.0 or later is required to use this method**

Returns an array of depot IDs which your account owns. This cannot be safely called until `appOwnershipCached` is emitted.

`enablePicsCache` must be `true` to use this method. Otherwise, an `Error` will be thrown.

### ownsDepot(depotid)
- `depotid` - A numeric depot ID

**v3.3.0 or later is required to use this method**

Returns `true` if your account owns the specified depot, or `false` if not. This cannot be safely called until
`appOwnershipCached` is emitted.

`enablePicsCache` must be `true` to use this method. Otherwise, an `Error` will be thrown.

### getOwnedPackages()

**v3.3.0 or later is required to use this method**

Returns an array of package IDs which your account owns. If you logged in anonymously, this can be safely called
immediately following logon. Otherwise, this cannot be safely called until `licenses` is emitted.

### ownsPackage(packageid)
- `packageid` - A numeric package ID

**v3.3.0 or later is required to use this method**

Returns `true` if your account owns the specified package ID, or `false` if not. If you logged in anonymously, this can
be safely called immediately following logon. Otherwise, this cannot be safely called until `licenses` is emitted.

### getStoreTagNames(language, tagIDs, callback)
- `language` - The language you want tag names in, e.g. "english" or "spanish"
- `tagIDs` - An array of one or more tag IDs
- `callback` - A function to be called when the requested data is available
	- `err` - An `Error` object on failure, or `null` on success
	- `tags` - An object whose keys are tag IDs and values are objects with two properties: `name` and `englishName`

**v3.26.0 or later is required to use this method**

Retrieves localized names for specified store tag IDs. Tag IDs are available in the response to `getProductInfo`.  

### getPublishedFileDetails(ids, callback)
- `ids` - Either an integer, or an array of integers containing the IDs of the published file(s) you want details for
- `callback` - A function to be called when the request has completed
    - `err` - An `Error` object on failure, or `null` on success
    - `results` - An object whose keys are published file IDs, and values are object containing a ton of information

**v3.8.0 or later is required to use this method**

Gets details for one or more published files. Published files are anything with a URL like
`https://steamcommunity.com/sharedfiles/filedetails/?id=662626851` (where `id` is the published file ID).

The amount of data available in `results` is huge, so I can only suggest that you `console.log` it to see what's
available.

### setPersona(state[, name])
- `state` - A value from [`EPersonaState`](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EPersonaState.js)
- `name` - Optional. Your new profile name

**v1.9.0 or later is required to use this method**

Changes our online status, and optionally your profile name. You need to call this after you logon or else you'll show up as offline.
You won't receive any chat messages or persona data about your friends if you don't go online.

### setUIMode(mode)
- `mode` - A value from [`EClientUIMode`](https://github.com/DoctorMcKay/node-steam-user/blob/master/resources/EClientUIMode.js)

**v3.7.0 or later is required to use this method**

Sets your current UI mode, which displays as an icon next to your online status in Steam chat and the friends list.

### addFriend(steamID[, callback])
- `steamID` - The SteamID of the user you want to add as a friend, as a `SteamID` object or a string that can parse into one
- `callback` - Optional. Called when Steam responds to this request.
    - `err` - An `Error` object on failure, or `null` on success. If this is an `Error` object, it will have an `eresult` property.
    - `name` - If successful, the current persona name of the user you added.

**v1.9.0 or later is required to use this method. v3.10.0 or later is required to use `callback`.**

Sends a friend request to the user with the specified `SteamID`. If they've already sent you a friend request, accepts it.

If you provide a callback, the `message` of the `err` will be `DuplicateName` and the `eresult` will be `14` if we are
already friends with the requested user, or if we've sent them a friend request already that they haven't accepted or
ignored. `message` will be `Blocked` and `eresult` will be `40` if they've blocked us.

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

### getAliases(steamids, callback)
- `steamids` - An array of `SteamID` objects or strings that can parse into `SteamID` objects
- `callback` - Called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `results` - An object whose keys are 64-bit SteamIDs (as strings) and whose values are objects containing the following properties:
        - `name` - The new name adopted by the user, as a string
        - `name_since` - A `Date` object representing when the user adopted this name

**v3.10.0 or later is required to use this method**

Gets the last 10 persona names (including the current one) used by one or more Steam users (who do not have to be on your friends list).

### getNicknames([callback])
- `callback` - Optional. Called when the requested data is available
    - `err` - An `Error` object on failure, or `null` on success
    - `nicknames` - An object whose keys are 64-bit SteamIDs (as strings) and whose values are nicknames for the corresponding users (as strings)

**v3.23.0 or later is required to use this method**

Retrieves an up-to-date nickname list (see [`nicknameList`](#nicknamelist)) from Steam. The `nicknameList` event will be
emitted when the response to this request is received, immediately after the callback fires. If you provide no callback,
the `nicknameList` event is still emitted.

In theory, the nickname list in `myNicknames` will always be up-to-date since v3.23.0, but you may wish to use this if
you want to be doubly sure.

### setNickname(steamID, nickname[, callback])
- `steamID` - The SteamID of the user on whom you want to set a nickname, as a `SteamID` object or a string that can parse into one
- `nickname` - The user's new nickname, as a string. Empty string to remove.
- `callback` - Optional. Emitted when the request completes.
    - `err` - An `Error` object on failure or `null` on success.

**v3.15.0 or later is required to use this method**

Sets a nickname on a user. If one already exists, overwrites it. The `myNicknames` property will be updated just before
the callback fires, on success.

**Note:** It appears to be possible for Steam to report success when using this method, when in reality your nickname
wasn't saved on the server. You can detect this case by calling `getNicknames`.

### getGameBadgeLevel(appid, callback)
- `appid` - The AppID of the game you want to get your badge level for
- `callback` - Called when the requested data is available.
    - `err` - An `Error` object on failure, or `null` on success
    - `steamLevel` - Your own Steam level
    - `badgeLevel` - The level on your badge for this game (0 if you don't have one)
    - `foilBadgeLevel` - The level on your foil badge for this game (0 if you don't have one)

**v3.8.0 or later is required to use this method**

Gets your own Steam Level, and the level you have on a badge for a particular game.

### inviteToGroup(userSteamID, groupSteamID)
- `userSteamID` - The SteamID of the user you want to invite, as a `SteamID` object or a string which can parse into one
- `groupSteamID` - The SteamID of the group you want to invite the user to, as a `SteamID` object or a string which can parse into one

**v3.7.0 or later is required to use this method**

Invites a user to a Steam group.

**Warning:** Group invites can only be sent to users on your friends list. [Why is this?](https://support.steampowered.com/kb_article.php?ref=2092-QLZX-8453#answer)

### respondToGroupInvite(groupSteamID, accept)
- `groupSteamID` - The SteamID of the group you were invited to, as a `SteamID` object or a string which can parse into one
- `accept` - `true` to join the group, `false` to ignore the invitation

**v3.7.0 or later is required to use this method**

Joins a group you were invited to or ignores the invite.

### createFriendsGroup(groupName, callback)
- `groupName` - The name to create the friends group with
- `callback` - Called when requested data is available
	- `err` - An `Error` object on failure, or null on success
	- `groupID` - A reference group ID associated with the group

**v3.27.0 or later is required to use this method**

Creates a friends group (also known as a tag within the official Steam client)

### deleteFriendsGroup(groupID[, callback])
- `groupID` - The reference group ID associated with the group
- `callback` - Optional. Called when requested data is available
	- `err` An `Error` object on failure, or null on success

**v3.27.0 or later is required to use this method**

Deletes a friends group (also known as a tag within the official Steam client)

### renameFriendsGroup(groupID, newName[, callback])
- `groupID` - The reference group ID associated with the group
- `newName` - The new name to rename the group to
- `callback` - Optional. Called when requested data is available
	- `err` An `Error` object on failure, or null on success

**v3.27.0 or later is required to use this method**

Renames a friends group (also known as a tag within the official Steam client)

**Note**: The change does not seem to update within the official Steam client

### addFriendToGroup(groupID, userSteamID[, callback])
- `groupID` - The reference group ID associated with the group
- `userSteamID` - Either a `SteamID` object or a string which can parse into one
- `callback` - Optional. Called when requested data is available
	- `err` An `Error` object on failure, or null on success

**v3.27.0 or later is required to use this method**

Adds a friend to a friends group (also known as a tag within the official Steam client)

### removeFriendFromGroup(groupID, userSteamID[, callback])
- `groupID` - The reference group ID associated with the group
- `userSteamID` - Either a `SteamID` object or a string which can parse into one
- `callback` - Optional. Called when requested data is available
	- `err` An `Error` object on failure, or null on success

**v3.27.0 or later is required to use this method**

Removes a friend to a friends group (also known as a tag within the official Steam client)

### trade(steamID)
- `steamID` - Either a `SteamID` object or a string which can parse into one

**v1.9.0 or later is required to use this method**

Send a trade request to the specified user. Listen for the [`tradeResponse`](#traderesponse) event for their response.

### cancelTradeRequest(steamID)
- `steamID` - Either a `SteamID` object or a string which can parse into one

**v1.9.0 or later is required to use this method**

Cancels your outstanding trade request to the specified user.

### getAssetClassInfo(language, appid, classes, callback)
- `language` - A string containing the language code you want stuff translated in, e.g. "en" or "es" or "zh"
- `appid` - The AppID of the game which owns the items you're interested in
- `classes` - An array of objects, where each object has a `classid` property and optionally an `instanceid` property
- `callback` - Called when the requested data is available
	- `err` - An `Error` object on failure, or `null` on success
	- `descriptions` - An array of description objects

**v3.25.0 or later is required to use this method**

Retrieves asset description data from Steam. Works similarly to [the WebAPI method by the same name](https://lab.xpaw.me/steam_api_documentation.html#ISteamEconomy_GetAssetClassInfo_v1),
although at time of documentation no tags are returned.

### getTradeURL(callback)
- `callback` - Called when the requested data is available
	- `err` - An `Error` object on failure, or `null` on success
	- `details` - An object containing `token` and `url` properties

**v3.28.0 or later is required to use this method**

Gets your account's trade token and URL.

### changeTradeURL(callback)
- `callback` - Called when the requested data is available
	- `err` - An `Error` object on failure, or `null` on success
	- `details` - An object containing `token` and `url` properties

**v3.28.0 or later is required to use this method**

Asks the Steam server to generate a new trade token for your account, and returns the new token and URL.

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

Creates a new multi-user chat room

### redeemKey(key[, callback])
- `key` - Steam formatted game key
- `callback` - Optional. Called when request completes
	- `result` - An `EResult` value
	- `details` - A `SteamUser.EPurchaseResult` value
	- `packages` - An object whose keys are packageIDs and values are package names

**v3.2.0 or later is required to use this method**

Redeems a game code (CD key) on your account.

### requestFreeLicense(appIDs[, callback])
- `appIDs` - An array of AppIDs for which you want licenses
- `callback` - Optional. Called when request completes
    - `err` - An `Error` object on failure, or `null` on success
    - `grantedPackages` - An array of package IDs that were granted to your account as a result of this request
    - `grantedAppIDs` - An array of AppIDs that were granted to your account as a result of this request

**v3.18.0 or later is required to use this method**

Requests a free-on-demand license to be granted to your account.

Older free-to-play games are in the "Steam" package ([package ID 0](https://steamdb.info/sub/0/)). This package is
automatically granted to all accounts (but not anonymous ones). Games in this package do not need a license to be
explicitly requested.

All newer free-to-play games have "free-on-demand packages". These are packages that are not automatically granted to
all accounts, but will be granted upon request ("on demand"). This is so that the Steam client can show free-to-play
games you have previously added to your library when not installed. In order to "play" any free-to-play app that isn't
in sub 0, you need to request a license for it using this method.

If successful, calling this method will result in the [`licenses`](#licenses-1) event being emitted containing your new
license(s).

### getEncryptedAppTicket(appid[, userData], callback)
- `appid` - The Steam AppID of the app for which you want a ticket
- `userData` - If the app expects some "user data" (arbitrary data which will be encrypted into the ticket), provide it here. Otherwise, omit this argument or pass an empty Buffer.
- `callback` - Called when the request completes
    - `err` - If there was an error, this is an `Error` object. Otherwise, it's `null`.
    - `ticket` - If successful, this is your encrypted appticket as a Buffer. You should provide the entire contents of the Buffer to the recipient.

**v3.14.0 or later is required to use this method**

Requests an "encrypted app ticket" from Steam servers for a particular game. This can be used to prove your ownership of
an app and also your account identity to some publisher server, provided they're expecting an encrypted app ticket.
To use encrypted app tickets, publishers must set up an encryption key in the Steamworks backend. Therefore, this will
not work if encrypted tickets haven't been set up for the AppID you request a ticket for. You cannot decrypt an
encrypted app ticket, nor can you view anything it contains. It is for all intents and purposes an opaque blob of binary
data which only the developer/publisher of the game can do anything with.

# Events [^](#contents)

## ID Events

Events marked as **ID events** are special. They all have a `SteamID` object as their first parameter. In addition to the event itself firing, a second event comprised of `eventName + "#" + steamID.getSteamID64()` is fired.

For example:

```js
// This will fire when we receive a chat message from ANY friend
user.on('friendMessage', function(steamID, message) {
	console.log("Friend message from " + steamID.getSteam3RenderedID() + ": " + message);
});

// This will fire when we receive a chat message from [U:1:46143802] / 76561198006409530 ONLY
user.on('friendMessage#76561198006409530', function(steamID, message) {
	console.log("Friend message from " + steamID.getSteam3RenderedID() + ": " + message);
});
```

### loggedOn
- `details` - An object containing various details about your account (see [`CMsgClientLogonResponse`](https://github.com/SteamRE/SteamKit/blob/SteamKit_1.6.3/Resources/Protobufs/steamclient/steammessages_clientserver.proto#L93-L116))
- `parental` - An object containing your parental controls settings

**v3.5.0 or later is required to use `parental`.**

Emitted when you're successfully logged into Steam.

### steamGuard
- `domain` - If an email code is needed, the domain name of the address where the email was sent. `null` if an app code is needed.
- `callback` - Should be called when the code is available.
	- `code` - The Steam Guard auth code
- `lastCodeWrong` - `true` if you're using 2FA and the last code you provided was wrong, `false` otherwise

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
- `err` - An `Error` object

Emitted when an error occurs during logon. Also emitted if we're disconnected and `autoRelogin` is either disabled, or it's a fatal disconnect.

If this event isn't handled, the program will crash.

The `SteamUser` object's `steamID` property will still be defined when this is emitted. The `Error` object will have an `eresult` parameter which is a value from the [`EResult`](https://github.com/SteamRE/SteamKit/blob/SteamKit_1.6.3/Resources/SteamLanguage/eresult.steamd) enum.

### disconnected
- `eresult` - A value from the `SteamUser.EResult` enum
- `msg` - A string describing the reason for the disconnect, if available (might be undefined)

Emitted when we're disconnected from Steam for a non-fatal reason and `autoRelogin` is enabled. `SteamUser` will
continually retry connection and will either emit `loggedOn` when logged back on, or `error` if a fatal logon error is
experienced.

Also emitted in response to a logOff() call.

The `SteamUser` object's `steamID` property will still be defined when this is emitted.

The `eresult` value might be 0 (Invalid), which indicates that the disconnection was due to the connection being closed
directly, without Steam sending a LoggedOff message.

### sentry
- `sentry` - A Buffer containing your new sentry file

Emitted when Steam sends us a new sentry file. By default, `SteamUser` will automatically save and reuse this sentry file for subsequent logins, but if you wish you may handle it yourself (see [`setSentry`](#setsentrysentry)).

### webSession
- `sessionID` - The value of the `sessionid` cookie
- `cookies` - An array of cookies, as `name=value` strings

Emitted when a steamcommunity.com web session is successfully negotiated. This will automatically be emitted on logon and in response to [`webLogOn`](#weblogon) calls.

Some libraries require you to provide your `sessionID`, others don't. If your library doesn't, you can safely ignore it.

[Read more about how cookies work and interact with other modules.](https://dev.doctormckay.com/topic/365-cookies/#user-cookieusage)

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

Emitted when Steam sends a notification of new trade offers. This gets emitted shortly after logon iff it's nonzero, and
every time it changes thereafter (i.e. both when you receive a trade offer and when an active trade offer you received
gets accepted/canceled/declined).

### communityMessages
- `count` - How many unread community (moderator) messages you have (can be 0)

**v3.26.0 or later is required to use this event**

Emitted when Steam sends a notification of new community (moderator) messages. This gets emitted shortly after logon iff
it's nonzero, and every time it changes thereafter (i.e. both when you receive a community message and when a community
message gets read).

### offlineMessages
- `count` - How many unread offline chat messages you have
- `friends` - An array of SteamID strings for the users who have sent you unread offline chat messages

Emitted when Steam sends a notification of unread offline chat messages. This will always be emitted after logon, even if you have no messages.

### vanityURL
- `url` - Your new vanity URL

**v3.7.0 or later is required to use this event**

Emitted when your vanity URL changes. `url` is your new vanity URL. This event is emitted before the [`vanityURL`](#vanityurl)
property is updated, so you can compare to see what changed.

### accountInfo
- `name` - Your account's Steam (persona) name
- `country` - The character code from which you're logging in (via GeoIP), e.g. "US"
- `authedMachines` - How many machines are authorized to login to your account with Steam Guard
- `flags` - Your account's bitwise [flags](https://github.com/SteamRE/SteamKit/blob/b80cdf5249891d54c655e39262d8267c7b40b249/Resources/SteamLanguage/enums.steamd#L81-L113)
- `facebookID` - If your account is linked with Facebook, this is your Facebook account ID
- `facebookName` - If your account is linked with Facebook, this is your (real) name on Facebook

**v3.4.0 or later is required to use this event**

Emitted on logon and when account info changes. This event is emitted before the [`accountInfo`](#accountinfo) property is updated, so you can compare to see what changed.

### emailInfo
- `address` - Your account's email address
- `validated` - A boolean value for whether or not your email address is validated

Emitted on logon and when email info changes. The [`emailInfo`](#emailinfo) property will be updated after this event is emitted.

### accountLimitations
- `limited` - `true` if your account is [limited](https://support.steampowered.com/kb_article.php?ref=3330-IAGK-7663), `false` if not
- `communityBanned` - `true` if your account is banned from Steam Community, `false` if not
- `locked` - `true` if your account is [locked](https://support.steampowered.com/kb_article.php?ref=6416-FHVM-3982), `false` if not (accounts can also be locked by Support)
- `canInviteFriends` - `true` if your account can invite friends, `false` if not

Emitted on logon and when limitations change. The [`limitations`](#limitations) property will be updated after this event is emitted.

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

Contains the license data for the packages which your Steam account owns. To see license object structure, see
[`CMsgClientLicenseList.License`](https://github.com/SteamRE/SteamKit/blob/SteamKit_1.6.3/Resources/Protobufs/steamclient/steammessages_clientserver.proto#L307-L320).

Emitted on logon and when licenses change. The [`licenses`](#licenses) property will be updated after this event is
emitted.

This isn't emitted for anonymous accounts. However, all anonymous user accounts have a license for package 17906
automatically.

### gifts
- `gifts` - An array of gift objects

Emitted on logon and when you receive/accept/decline a gift or guest pass. The [`gifts`](#gifts) property will be
updated after this event is emitted.

Guest Passes (do they even still exist?) are gifts (actually, gifts are Guest Passes with a very long expiration date).
Consequently, both come through this event.

Each object in the array is an oustanding gift or guest pass that was sent to you that you haven't accepted/declined yet.
Only **outstanding** gifts show up here. Gifts that you stored in your inventory don't show up here.

The structure of the objects in the array is defined in the documentation for the [`gifts`](#gifts) property.

### appOwnershipCached

**v3.3.0 or later is required to use this event**

Emitted once we have all data required in order to determine app ownership. You can now safely call `getOwnedApps`,
`ownsApp`, `getOwnedDepots`, and `ownsDepot`.

This is only emitted if `enablePicsCache` is `true`.

### changelist
- `changenumber` - The changenumber of the changelist we just received
- `apps` - An array of AppIDs which changed since our last received changelist
- `packages` - An array of PackageIDs which changed since our last received changelist

**v3.3.0 or later is required to use this event**

Emitted when we receive a new changelist from Steam. The `picsCache` property is updated after this is emitted, so you
can get the previous changenumber via `picsCache.changenumber`.

This is only emitted if `enablePicsCache` is `true` and `changelistUpdateInterval` is nonzero.

### appUpdate
- `appid` - The AppID of the app which just changed
- `data` - An object identical to that received from `getProductInfo`

**v3.3.0 or later is required to use this event**

Emitted when an app that was already in our cache updates. The `picsCache` property is updated after this is emitted, so
you can get the previous app data via `picsCache.apps[appid]`.

This is only emitted if `enablePicsCache` is `true` and `changelistUpdateInterval` is nonzero.

### packageUpdate
- `packageid` - The PackageID of the package which just changed
- `data` - An object identical to that received from `getProductInfo`

**v3.3.0 or later is required to use this event**

Emitted when a package that was already in our cache updates. The `picsCache` property is updated after this is emitted,
so you can get the previous package data via `picsCache.packages[packageid]`.

This is only emitted if `enablePicsCache` is `true` and `changelistUpdateInterval` is nonzero.

### marketingMessages
- `timestamp` - A `Date` object containing the time when this batch of messages was published
- `messages` - An array of objects containing the following properties
    - `id` - The marketing message's 64-bit numeric ID, as a string
    - `url` - The URL where you can view this message
    - `flags` - A 32-bit integer containing the message's bitwise [flags](https://github.com/SteamRE/SteamKit/blob/b80cdf5249891d54c655e39262d8267c7b40b249/Resources/SteamLanguage/enums.steamd#L827-L836)

**v3.4.0 or later is required to use this event**

Emitted on logon, and when new marketing messages are published. Marketing messages are the popups that appear after
you exit a game if you have "Notify me about additions or changes to my games, new releases, and upcoming releases"
enabled in the Steam client.

### tradeRequest
- `steamID` - The SteamID of the user who sent the request, as a `SteamID` object
- `respond` - A function which you should call to either accept or decline the request
	- `accept` - `true` to accept the request, `false` to decline it

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when someone sends us a trade request. Example usage:

```js
user.on('tradeRequest', function(steamID, respond) {
	console.log("Incoming trade request from " + steamID.getSteam3RenderedID() + ", accepting");
	respond(true);
});
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

### playingState
- `blocked` - `true` if you're blocked from playing a game on this session (because a game is being played on this account using another logon session)
- `playingApp` - If `blocked`, this is the AppID of the game that is being played elsewhere

**v3.21.0 or later is required to use this event**

Emitted under these conditions:

- Right after logon, **only if** a game is being played on this account in another location (i.e. `blocked` is `true`)
- Whenever a game starts (or stops) being played on another session
- Whenever you start (or stop) playing a game on this session (via `gamesPlayed`)
    - In this case, `blocked` is `false` and `playingApp` is the AppID you're currently playing

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
- `relationship` - A value from `EClanRelationship`

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when our relationship with a particular Steam group changes.

The [`myGroups`](#mygroups) property isn't yet updated when this is emitted, so you can compare to the old value to see what changed.

### friendsList

**v1.9.0 or later is required to use this event**

Emitted when our friends list is downloaded from Steam after logon, and is now available in [`myFriends`](#myfriends).

### friendPersonasLoaded

**v3.22.0 or later is required to use this event**

Emitted when all personas have been loaded for our entire friends list, and they are all now available in
[`users`](#users).

### groupList

**v1.9.0 or later is required to use this event**

Emitted when our group list is downloaded from Steam after logon, and is now available in [`myGroups`](#mygroups).

### friendsGroupList
- `groups` - An object whose structure is identical to the [`myFriendGroups`](#myfriendgroups) property

**v1.10.0 or later is required to use this event**

Emitted when our friends group list is downloaded from Steam, which should be shortly after logon (automatically).

In the official client, friend groups are called *tags*.

The `myFriendGroups` property will be updated **after** this event is emitted, so you can compare `groups` with the property to see what changed.

### nicknameList

**v3.15.0 or later is required to use this event**

Emitted when we receive our full nickname list from Steam, which should be shortly after logon (automatically).
You can access it via the [`myNicknames`](#mynicknames) property.

### nickname
- `steamID` - The SteamID of the user whose nickname changed, as a `SteamID` object
- `newNickname` - The user's new nickname, or `null` if their existing nickname has been deleted

**v3.23.0 or later is required to use this event**

Emitted when a friend's nickname is changed somewhere else (that is, on the web or by another client sessions). This is
not emitted in response to a `setNickname` call.

This is emitted before the `myNicknames` property is updated, so you can compare with that object to see what it used to be.

### friendOrChatMessage
- `senderID` - The message sender, as a `SteamID` object
- `message` - The message text
- `room` - The room to which the message was sent. This is the user's `SteamID` if it was a friend message

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when we receive either a friend message or a chat room message, as long as we're [online](#setpersonastate-name).

### friendMessage
- `senderID` - The message sender, as a `SteamID` object
- `message` - The message text

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when we receive a direct friend message (that is, not through a chat room), as long as we're [online](#setpersonastate-name).

### friendTyping
- `senderID` - The `SteamID` of the friend who's typing

**v1.9.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when Steam notifies us that one of our friends is typing a message to us, as long as we're [online](#setpersonastate-name).

### friendLeftConversation
- `senderID` - The `SteamID` of the friend who closed our chat window

**v3.10.0 or later is required to use this event**

*This is an [ID event](#id-events).*

Emitted when Steam notifies us that one of our friends with whom we've been chatting has closed our chat window, as
long as we're [online](#setpersonastate-name).

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

Emitted when we receive a chat message from a chat room, as long as we're [online](#setpersonastate-name).
This is a special ID event. Any of the following are acceptable:
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

### lobbyInvite
- `inviterID` - The `SteamID` of the user who invited us to a Steam lobby
- `lobbyID` - The `SteamID` of the lobby we were invited to

**v3.9.0 or later is required to use this event**

* This is an [ID event](#id-events).*

Emitted when we're invited to a Steam lobby. The inviter should be currently playing the game associated with this
lobby, so you can get the AppID of the associated game from their user persona data.
