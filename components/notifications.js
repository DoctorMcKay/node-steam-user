const SteamID = require('steamid');

const EMsg = require('../enums/EMsg.js');

const SteamUserBase = require('./00-base.js');
const SteamUserGameServers = require('./gameservers.js');

const NOTIFICATION_TYPES = {
	1: 'tradeOffers',
	3: 'communityMessages'
};

class SteamUserNotifications extends SteamUserGameServers {
	/**
	 * Mark some notifications as read by ID
	 * @param {(string|number)[]} notificationIds - IDs of notifications to mark as read
	 */
	markNotificationsRead(notificationIds) {
		this._sendUnified('SteamNotification.MarkNotificationsRead#1', {
			notification_ids: notificationIds
		});
	}

	/**
	 * Mark all notifications as read
	 */
	markAllNotificationsRead() {
		this._sendUnified('SteamNotification.MarkNotificationsRead#1', {
			mark_all_read: true
		});
	}

	/**
	 * @protected
	 */
	_requestNotifications() {
		this._send(EMsg.ClientRequestItemAnnouncements, {});
		this._send(EMsg.ClientRequestCommentNotifications, {});
		this._send(EMsg.ClientFSRequestOfflineMessageCount, {});
	}
}

// Handlers

SteamUserBase.prototype._handlerManager.add(EMsg.ClientItemAnnouncements, function(body) {
	this.emit('newItems', body.count_new_items);
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientCommentNotifications, function(body) {
	this.emit('newComments', body.count_new_comments, body.count_new_comments_owner, body.count_new_comments_subscriptions);
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientUserNotifications, function(body) {
	// convert the notifications array into an object for easy reference
	let notifications = {};
	(body.notifications || []).forEach((notif) => {
		notifications[notif.user_notification_type] = notif.count;
	});

	for (let type in NOTIFICATION_TYPES) {
		if (!Object.hasOwnProperty.call(NOTIFICATION_TYPES, type)) {
			continue;
		}

		let name = NOTIFICATION_TYPES[type];
		let count = notifications[type] || 0; // Steam omits an entry entirely to represent 0
		delete notifications[type]; // we already dealt with this so delete it (in order to detect unknowns)

		// if we never emitted this type before and it's 0, suppress
		if (typeof this._lastNotificationCounts[name] === 'undefined' && count == 0) {
			this._lastNotificationCounts[name] = 0;
			continue;
		}

		// it's either nonzero or we emitted it before. if we last saw an identical value, suppress
		if (count == this._lastNotificationCounts[name]) {
			// steam's steaming and sending dupes. suppress.
			continue;
		}

		// something changed omg
		this._lastNotificationCounts[name] = count;
		this.emit(name, count);
	}

	// any unknowns?
	let unknowns = Object.keys(notifications);
	if (unknowns.length > 0) {
		this.emit('debug', '!! Unknown notification types: ' + unknowns.join(', '));
	}
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientFSOfflineMessageNotification, function(body) {
	this.emit('offlineMessages', body.offline_messages, (body.friends_with_offline_messages || []).map((accountid) => {
		let sid = new SteamID();
		sid.universe = this.steamID.universe;
		sid.type = SteamID.Type.INDIVIDUAL;
		sid.instance = SteamID.Instance.DESKTOP;
		sid.accountid = accountid;
		return sid.toString();
	}));
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientMarketingMessageUpdate2, function(body) {
	let time = body.readUint32();
	let count = body.readUint32();

	let messages = [];

	for (let i = 0; i < count; i++) {
		body.readUint32(); // Length of this submessage

		messages.push({
			id: body.readUint64().toString(),
			url: body.readCString(),
			flags: body.readUint32()
		});
	}

	this.emit('marketingMessages', new Date(time * 1000), messages);
});

SteamUserBase.prototype._handlerManager.add('SteamNotificationClient.NotificationsReceived#1', function(body) {
	/** @var {Proto_SteamNotificationData[]} notifications */
	let notifications = body.notifications;
	if (notifications.length == 0) {
		// This is observed to happen when you open the notification dropdown in web while everything is already viewed
		return;
	}

	let mappedNotifications = notifications.map((notif) => {
		let bodyData = null;
		try {
			bodyData = JSON.parse(notif.body_data);
		} catch (ex) {
			// don't care
		}

		return {
			id: notif.notification_id,
			type: notif.notification_type,
			targets: notif.notification_targets,
			body: bodyData,
			read: notif.read,
			timestamp: notif.timestamp ? new Date(notif.timestamp * 1000) : null,
			hidden: notif.hidden,
			expiry: notif.expiry ? new Date(notif.expiry * 1000) : null,
			viewed: notif.viewed ? new Date(notif.viewed * 1000) : null
		};
	});

	this.emit('notificationsReceived', {notifications: mappedNotifications});
});

module.exports = SteamUserNotifications;
