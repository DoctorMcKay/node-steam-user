# Concepts

### Ordinal

Each message in new Steam chat has both a `timestamp` and an `ordinal`. The `timestamp` value should be self-explanatory,
but the `ordinal` value is a 0-indexed counter that increments if a user sends multiple messages within the same second.
This enables messages to be identified uniquely using only their timestamp and their ordinal.

# Standard Objects

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

# Methods

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

### getChatMessageHistory(gropuId, chatId[, options][, callback])

TODO

# Events

TODO
