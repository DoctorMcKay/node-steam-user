# SteamChatRoomClient

Available as a `chat` property on every `SteamUser` instance, `SteamChatRoomClient` is how you can interact
programmatically with "new Steam chat", including the new chat rooms.

Unlike most `SteamUser` methods and events, these are all only available from the `SteamChatRoomProperty` via the `chat`
property. For example:

```js
let user = new SteamUser();
// log on the user

user.chat.sendFriendMessage("[U:1:46143802]", "Hello, world!");
```

## Table of Contents

- [Concepts](#concepts)
	- [Ordinal](#ordinal)
	- [Chat Rooms vs. Chat Room Groups vs. Steam Groups](#chat-rooms-vs-chat-room-groups-vs-steam-groups)
- [Standard Objects](#standard-objects)
	- [Chat Room Group Summary](#chat-room-group-summary)
	- [Chat Room Group State](#chat-room-group-state)
	- [User Chat Room Group State](#user-chat-room-group-state)
	- [User Chat Room State](#user-chat-room-state)
	- [Chat Room Group Header State](#chat-room-group-header-state)
	- [Chat Room Member](#chat-room-member)
	- [Chat Room State](#chat-room-state)
	- [Chat Role](#chat-role)
	- [Chat Role Actions](#chat-role-actions)
	- [Incoming Friend Message](#incoming-friend-message)
	- [Incoming Chat Message](#incoming-chat-message)
	- [Chat Mentions](#chat-mentions)
	- [Server Message](#server-message)
- [Methods](#methods)
	- [getGroups(callback)](#getgroupscallback)
	- [getInviteLinkInfo(linkUrl, callback)](#getinvitelinkinfolinkurl-callback)
	- [getClanChatGroupInfo(clanSteamID, callback)](#getclanchatgroupinfoclansteamid-callback)
	- [joinGroup(groupId\[, inviteCode\], callback)](#joingroupgroupid-invitecode-callback)
	- [inviteUserToGroup(groupId, steamId\[, callback\])](#inviteusertogroupgroupid-steamid-callback)
	- [sendFriendMessage(steamId, message\[, options\]\[, callback\])](#sendfriendmessagesteamid-message-options-callback)
	- [sendFriendTyping(steamId\[, callback\])](#sendfriendtypingsteamid-callback)
	- [sendChatMessage(groupId, chatId, message\[, callback\])](#sendchatmessagegroupid-chatid-message-callback)
	- [deleteChatMessages(groupId, chatId, messages\[, callback\])](#deletechatmessagesgroupid-chatid-messages-callback)
	- [kickUserFromGroup(groupId, steamId\[, expireTime\]\[, callback\])](#kickuserfromgroupgroupid-steamid-expiretime-callback)
	- [getChatMessageHistory(groupId, chatId\[, options\], callback)](#getchatmessagehistorygroupid-chatid-options-callback)
- [Events](#events)
	- [friendMessage](#friendmessage)
	- [friendMessageEcho](#friendmessageecho)
	- [friendTyping](#friendtyping)
	- [friendTypingEcho](#friendtypingecho)
	- [friendLeftConversation](#friendleftconversation)
	- [friendLeftConversationEcho](#friendleftconversationecho)
	- [chatMessage](#chatmessage)
	- [chatMessagesModified](#chatmessagesmodified)

## Concepts

### Ordinal

Each message in new Steam chat has both a `timestamp` and an `ordinal`. The `timestamp` value should be self-explanatory,
but the `ordinal` value is a 0-indexed counter that increments if a user sends multiple messages within the same second.
This enables messages to be identified uniquely using only their timestamp and their ordinal.

### Chat Rooms vs. Chat Room Groups vs. Steam Groups

All three of the above are distinctly separate things in Steam.

- Chat Rooms - Internally, Steam calls chat channels "chat rooms". When you see the term "chat room", think "channel".
- Chat Room Groups - Think "Discord server". This is a "group chat" on your friends list. Chat room groups are owned by
one individual, and can have multiple text and voice channels.
- Steam Groups - Steam groups have pretty much nothing to do with chat room groups/chat rooms, except that there's a
button on a Steam group's overview page to join a chat room group which is linked to that Steam group. Internally though,
Steam groups and chat room groups are entirely separate things, linked only by
[getClanChatGroupInfo(clanSteamID, callback)](#getclanchatgroupinfoclansteamid-callback) and by the `clanid` property in
[Chat Room Group Header State](#chat-room-group-header-state).

## Standard Objects

"Standard objects" are objects that are reused across multiple methods and events in the `SteamChatRoomClient`.

### Chat Room Group Summary

- `chat_rooms` - An array of [Chat Room State](#chat-room-state) objects
- `top_members` - An array of `SteamID` objects representing the group's "top members"
- `chat_group_id` - The ID of this chat room group
- `chat_group_name` - The name of this chat room group
- `active_member_count` - An integer representing how many members are active
- `active_voice_member_count` - An integer representing how many members are active in voice
- `default_chat_id` - A string containing the numeric ID of the default chat room (channel) in this group
- `chat_group_tagline` - The group's tagline
- `appid` - If the chat group is linked to an app, this is its AppID. Otherwise, `null`.
- `steamid_owner` - A `SteamID` object representing the group's owner
- `watching_broadcast_steamid` - If the group is in a broadcast watch party, this is the `SteamID` of the broadcaster
- `chat_group_avatar_sha` - If the group has an avatar set, this is its SHA-1 hash, as a `Buffer`. If not, `null`.
- `chat_group_avatar_url` - If the group has an avatar set, this is the URL where you can download it. If not, `null`.

### Chat Room Group State

- `members` - An array of [Chat Room Member](#chat-room-member) objects
- `chat_rooms` - An array of [Chat Room State](#chat-room-state) objects
- `kicked` - An array of [Chat Room Member](#chat-room-member) objects for who got kicked
- `default_chat_id` - A string containing the numeric ID of the default chat room (channel) in this group
- `header_state` - A [Chat Room Group Header State](#chat-room-group-header-state) object

### User Chat Room Group State

- `chat_group_id` - A string containing the numeric ID of the chat room group in question
- `time_joined` - A `Date` object representing when you joined this group
- `user_chat_room_state` - An array of [User Chat Room State](#user-chat-room-state) objects
- `desktop_notification_level` - A value from [EChatRoomNotificationLevel](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatRoomNotificationLevel.js)
- `mobile_notification_level` - A value from [EChatRoomNotificationLevel](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatRoomNotificationLevel.js)
- `time_last_group_ack` - A `Date` object representing when you last acknowledged messages in this group. `null` if never.
- `unread_indicator_muted` - `true` if you have muted the unread indicator for this group

### User Chat Room State

- `chat_id` - A string containing the numeric ID of the chat room in question
- `time_joined` - A `Date` object representing when you joined this chat room
- `time_last_ack` - A `Date` object representing when you last acknowledged messages in this chat room. `null` if never.
- `desktop_notification_level` - A value from [EChatRoomNotificationLevel](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatRoomNotificationLevel.js)
- `mobile_notification_level` - A value from [EChatRoomNotificationLevel](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatRoomNotificationLevel.js)
- `time_last_mention` - A `Date` object representing when you were last mentioned in this chat room. `null` if never.
- `unread_indicator_muted` - `true` if you have muted the unread indicator for this room

### Chat Room Group Header State

- `chat_group_id` - The ID of this chat room group
- `chat_name` - The name of this group
- `clanid` - If this is a chat room group linked to a Steam group, this is the associated Steam group's `SteamID` object, or `null` if not linked to a group.
- `steamid_owner` - A `SteamID` object representing the owner of this chat room group
- `appid` - If the chat group is linked to an app, this is its AppID. Otherwise, `null`.
- `tagline` - The group's tagline
- `avatar_sha` - If the group has an avatar set, this is its SHA-1 hash, as a `Buffer`. If not, `null`.
- `avatar_url` - If the group has an avatar set, this is the URL where you can download it. If not, `null`.
- `default_role_id` - The ID of the default role applied to new members
- `roles` - An array of [Chat Role](#chat-role) objects
- `role_actions` - An array of [Chat Role Actions](#chat-role-actions) objects
- `watching_broadcast_steamid` - If the group is in a broadcast watch party, this is the `SteamID` of the broadcaster

### Chat Room Member

- `steamid` - The member's `SteamID`
- `state` - A value from [EChatRoomJoinState](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatRoomJoinState.js)
- `rank` - A value from [EChatRoomGroupRank](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatRoomGroupRank.js)
- `time_kick_expire` - A `Date` object of when this member's kick expires, or `null` if not kicked
- `role_ids` - An array of this member's applied role IDs

### Chat Room State

- `chat_id` - A string containing this chat room (channel)'s numeric ID
- `chat_name` - The name of this room (channel)
- `voice_allowed` - `true` if voice is allowed in this room
- `members_in_voice` - An array of `SteamID` objects for who's in this room's voice chat
- `time_last_message` - A `Date` object representing when the last message was sent to this room
- `sort_order` - An integer determining how this room is sorted within its chat group

### Chat Role

- `role_id` - A string containing this role's numeric ID
- `name` - The name of this role
- `ordinal` - An integer determining how this role is sorted within its chat group

### Chat Role Actions

- `role_id` - A string containing the associated role's numeric ID
- `can_create_rename_delete_channel` - Boolean
- `can_kick` - Boolean
- `can_ban` - Boolean
- `can_invite` - Boolean
- `can_change_tagline_avatar_name` - Boolean
- `can_chat` - Boolean
- `can_view_history` - Boolean
- `can_change_group_roles` - Boolean
- `can_change_user_roles` - Boolean
- `can_mention_all` - Boolean
- `can_set_watching_broadcast` - Boolean

### Incoming Friend Message

- `steamid_friend` - A `SteamID` object
- `chat_entry_type` - A value from [EChatEntryType](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatEntryType.js)
- `from_limited_account` - This is `true` if the message sender is a limited Steam account
- `message` - The message text
- `message_no_bbcode` - The message text without BBCode tags (if possible; may still contain BBCode for text that has no plaintext alternative, e.g. [flip])
- `server_timestamp` - A `Date` object for this message's timestamp
- `ordinal` - This message's ordinal
- `local_echo` - This is `true` if this is a message you sent on another client that is being "echoed" to another client instance
- `low_priority` - Boolean

### Incoming Chat Message

- `chat_group_id` - The ID of the chat room group this was sent to
- `chat_id` - The ID of the chat room (channel) this was sent to
- `steamid_sender` - A `SteamID` object
- `message` - The message text
- `message_no_bbcode` - The message text without BBCode tags (if possible; may still contain BBCode for text that has no plaintext alternative, e.g. [flip])
- `server_timestamp` - A `Date` object for this message's timestamp
- `ordinal` - This message's ordinal
- `mentions` - A [Chat Mentions](#chat-mentions) object, or `null`
- `server_message` - A [Server Message](#server-message) object, or `null`

### Chat Mentions

- `mention_all` - Boolean
- `mention_here` - Boolean
- `mention_steamids` - An array of `SteamID` objects

### Server Message

- `message` - A value from [EChatRoomServerMessage](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatRoomServerMessage.js)
- `string_param` - An optional string parameter
- `steamid_param` - An optional `SteamID` object

## Methods

### getGroups(callback)
- `callback` - Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success
	- `response` - The response object
		- `chat_room_groups` - An object where keys are numeric chat room group IDs and values are objects with these keys:
			- `group_summary` - A [Chat Room Group Summary](#chat-room-group-summary) object
			- `group_state` - A [Chat Room Group State](#chat-room-group-state) object

Returns a list of all chat room groups you are a member of.

### getInviteLinkInfo(linkUrl, callback)
- `linkUrl` - The full invite link URL for a group chat (e.g. `https://s.team/chat/abcdefg`)
- `callback` - Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success
	- `response` - The response object
		- `invite_code` - The invite code from the link
		- `steamid_sender` - A `SteamID` object containing the ID of the person who created the invite link
		- `time_expires` - A `Date` object containing the time when this invite link expires
		- `group_summary` - A [Chat Room Group Summary](#chat-room-group-summary) object
		- `time_kick_expire` - A `Date` object containing the time when your kick from this group will expire, or `null` if you aren't on a kick cooldown
		- `banned` - `true` if you are banned from this group

Gets details about a chat room group from an invite link. If the provided invite link is not valid, you will get an
`Error` with message `"Invalid invite link"`.

### getClanChatGroupInfo(clanSteamID, callback)
- `clanSteamID` - The group's `SteamID` or a string that can parse into one
- `callback` - Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success
	- `response` - The response object
		- `chat_group_summary` - A [Chat Room Group Summary](#chat-room-group-summary) object

Get details about a clan (Steam group)'s chat room group. The returned summary includes the group's chat room group ID,
which you can use with [joinGroup](#joingroupgroupid-invitecode-callback) to join that group chat. You do not need
an invite code to join a Steam group chat that you have access to.

### joinGroup(groupId[, inviteCode], callback)
- `groupId` - The chat group ID you want to join (`group_summary.chat_group_id` in `getInviteLinkInfo` response)
- `inviteCode` - The invite code you were provided to join this group. Not necessary if you're joining the chat room for a Steam group you have access to.
- `callback` - Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success
	- `response` - The response object
		- `state` - A [Chat Room Group State](#chat-room-group-state) object
		- `user_chat_state` - A [User Chat Room Group State](#user-chat-room-group-state) object

Requests to join a chat room group. If the provided group ID or invite code are not valid, you will get an `Error` with
message `"Invalid group ID or invite code"`.

### inviteUserToGroup(groupId, steamId[, callback])
- `groupId` - The chat group ID you want to invite a friend to
- `steamId` - Your friend's `SteamID` object, or a string that can parse into one
- `callback` - Optional. Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success

Invites a Steam friend to join a chat room group. You must have permission to do so.

Always returns success, even if you don't have permission to send this invite.

### sendFriendMessage(steamId, message[, options][, callback])
- `steamId` - The SteamID of your friend, as a `SteamID` object or a string that can parse into one
- `message` - The string message you want to send
- `options` - Optional. An object containing zero or more of these properties:
	- `chatEntryType` - A value from [EChatEntryType](https://github.com/DoctorMcKay/node-steam-user/blob/master/enums/EChatEntryType.js). Defaults to `ChatMsg`.
	- `containsBbCode` - `true` to allow the Steam server to parse /commands (default `true`)
- `callback` - Optional. Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success
	- `response` - The response object
		- `modified_message` - A string containing the message as it will be broadcast to the other user. If any /commands got parsed and turned into BBCode, you'll see that BBCode here.
		- `server_timestamp` - A `Date` object containing the timestamp the server gave to this message.
		- `ordinal` - This message's [ordinal](#ordinal)

Sends a chat message to a friend.

### sendFriendTyping(steamId[, callback])
- `steamId` - The SteamID of your friend, as a `SteamID` object or a string that can parse into one
- `callback` - Optional. Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success

Notifies a friend that you are typing a chat message to them.

### sendChatMessage(groupId, chatId, message[, callback])
- `groupId` - The ID of the chat room group you want to send this message to
- `chatId` - The ID of the chat room (channel) you want to send this message to
- `message` - Your actual message text
- `callback` - Optional. Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success
	- `response` - The response object
		- `modified_message` - A string containing the message as it will be broadcast to the other user. If any /commands got parsed and turned into BBCode, you'll see that BBCode here.
		- `server_timestamp` - A `Date` object containing the timestamp the server gave to this message.
		- `ordinal` - This message's [ordinal](#ordinal)

Sends a chat message to a chat channel.

### deleteChatMessages(groupId, chatId, messages[, callback])
- `groupId` - The ID of the chat room group you want to delete a message from
- `chatId` - The ID of the chat room (channel) you want to delete a message from
- `messages` - An array of objects with these properties:
	- `server_timestamp` - Either a `Date` or a numeric Unix timestamp (you may also name this property `timestamp`)
	- `ordinal` - The ordinal of the message you want to delete. May be omitted if 0.
- `callback` - Optional. Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success

Deletes some messages from a chat room, provided you have access. Note that the message sender gets no indication that
their message was deleted, but everyone else sees [MESSAGE DELETED].

Always returns success, even if you don't have permission to delete the messages in question or you provided bad timestamps/ordinals.

### kickUserFromGroup(groupId, steamId[, expireTime][, callback])
- `groupId` - The ID of the chat room group you want to kick someone from
- `steamId` - The `SteamID` object for the user you want to kick, or a string that can parse into one
- `expireTime` - A `Date` object or numeric Unix timestamp for when the user should be permitted to rejoin. Omit to allow them to rejoin immediately (provided they have an invite link)
- `callback` - Optional. Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success

Kicks a user from a chat room group, provided you have access to do so.

Always returns success, even if you don't have permission to kick the user in question. 

### getChatMessageHistory(groupId, chatId[, options], callback)
- `groupId` - The ID of the chat room group you want history in
- `chatId` - The ID of the chat room (channel) you want history in
- `options` - Optional. An object containing zero or more of these properties
	- `maxCount` - The maximum number of messages to return. Default 100.
	- `lastTime` - The latest timestamp you want messages for, as a `Date` object or Unix timestamp.
	- `lastOrdinal` - The last ordinal you want messages for.
	- `startTime` - The earliest timestamp you want messages for, as a `Date` object or Unix timestamp.
	- `startOrdinal` - The first ordinal you want messages for.
- `callback` - Called when the request completes
	- `err` - An `Error` object on failure, or `null` on success
	- `response` - The response object
		- `messages` - An array of objects with these properties
			- `sender` - A `SteamID` object
			- `server_timestamp` - A `Date` object for the message's timestamp
			- `ordinal` - The message's ordinal
			- `message` - The message text
			- `server_message` - An optional [Server Message](#server-message) object
			- `deleted` - Boolean indicating whether the message is deleted
		- `more_available` - Boolean

Retrieves chat message history from a chat room group.

## Events

### friendMessage
- `message` - An [Incoming Friend Message](#incoming-friend-message) object

Emitted when a friend sends you a direct message.

### friendMessageEcho
- `message` - An [Incoming Friend Message](#incoming-friend-message) object

Emitted when you send a direct message to a friend on another client instance.

### friendTyping
- `message` - An [Incoming Friend Message](#incoming-friend-message) object

Emitted when a friend is typing you a direct message.

### friendTypingEcho
- `message` - An [Incoming Friend Message](#incoming-friend-message) object

Emitted when you are typing a friend a direct message on another client instance.

**This has not been tested and may not be emitted.**

### friendLeftConversation
- `message` - An [Incoming Friend Message](#incoming-friend-message) object

Emitted when a friend has closed their direct chat window with you.

**This has not been tested and may not be emitted.**

### friendLeftConversationEcho
- `message` - An [Incoming Friend Message](#incoming-friend-message) object

Emitted when you close your direct chat window with a friend on another instance.

**This has not been tested and may not be emitted.**

### chatMessage
- `message` - An [Incoming Chat Message](#incoming-chat-message) object

Emitted when a message is sent to a chat room you're in.

### chatMessagesModified
- `details` - An object containing these properties
	- `chat_group_id` - The ID of the chat room group containing the modified messages
	- `chat_id` - The ID of the chat room (channel) containing the modified messages
	- `messages` - An array of objects containing these properties
		- `server_timestamp` - A `Date` object for the timestamp of the message in question
		- `ordinal` - The ordinal of the message in question
		- `deleted` - Boolean determining if the message was deleted

Emitted when chat messages are modified (deleted) in a chat room you're in.
