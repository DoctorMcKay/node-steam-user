var Steam = require('steam');
var SteamUser = require('../index.js');
var ByteBuffer = require('bytebuffer');

var Schema = require('./protobufs.js');

var protobufs = {};
protobufs[Steam.EMsg.ClientLogon] = Schema.CMsgClientLogon;
protobufs[Steam.EMsg.ClientLogOnResponse] = Schema.CMsgClientLogonResponse;
protobufs[Steam.EMsg.ClientLogOff] = Schema.CMsgClientLogOff;
protobufs[Steam.EMsg.ClientLoggedOff] = Schema.CMsgClientLoggedOff;
protobufs[Steam.EMsg.ClientUpdateMachineAuth] = Schema.CMsgClientUpdateMachineAuth;
protobufs[Steam.EMsg.ClientUpdateMachineAuthResponse] = Schema.CMsgClientUpdateMachineAuthResponse;
protobufs[Steam.EMsg.ClientNewLoginKey] = Schema.CMsgClientNewLoginKey;
protobufs[Steam.EMsg.ClientNewLoginKeyAccepted] = Schema.CMsgClientNewLoginKeyAccepted;
protobufs[Steam.EMsg.ClientRequestWebAPIAuthenticateUserNonce] = Schema.CMsgClientRequestWebAPIAuthenticateUserNonce;
protobufs[Steam.EMsg.ClientRequestWebAPIAuthenticateUserNonceResponse] = Schema.CMsgClientRequestWebAPIAuthenticateUserNonceResponse;
protobufs[Steam.EMsg.ClientItemAnnouncements] = Schema.CMsgClientItemAnnouncements;
protobufs[Steam.EMsg.ClientRequestItemAnnouncements] = Schema.CMsgClientRequestItemAnnouncements;
protobufs[Steam.EMsg.ClientCommentNotifications] = Schema.CMsgClientCommentNotifications;
protobufs[Steam.EMsg.ClientRequestCommentNotifications] = Schema.CMsgClientRequestCommentNotifications;
protobufs[Steam.EMsg.ClientUserNotifications] = Schema.CMsgClientUserNotifications;
protobufs[Steam.EMsg.ClientFSOfflineMessageNotification] = Schema.CMsgClientOfflineMessageNotification;
protobufs[Steam.EMsg.ClientFSRequestOfflineMessageCount] = Schema.CMsgClientRequestOfflineMessageCount;
protobufs[Steam.EMsg.ClientGamesPlayed] = Schema.CMsgClientGamesPlayed;
protobufs[Steam.EMsg.ClientEmailAddrInfo] = Schema.CMsgClientEmailAddrInfo;
protobufs[Steam.EMsg.ClientIsLimitedAccount] = Schema.CMsgClientIsLimitedAccount;
protobufs[Steam.EMsg.ClientWalletInfoUpdate] = Schema.CMsgClientWalletInfoUpdate;
protobufs[Steam.EMsg.ClientLicenseList] = Schema.CMsgClientLicenseList;
protobufs[Steam.EMsg.ClientServiceMethod] = Schema.CMsgClientServiceMethod;
protobufs[Steam.EMsg.ClientServiceMethodResponse] = Schema.CMsgClientServiceMethodResponse;
protobufs[Steam.EMsg.ClientGMSServerQuery] = Schema.CMsgClientGMSServerQuery;
protobufs[Steam.EMsg.GMSClientServerQueryResponse] = Schema.CMsgGMSClientServerQueryResponse;
protobufs[Steam.EMsg.ClientPICSChangesSinceRequest] = Schema.CMsgClientPICSChangesSinceRequest;
protobufs[Steam.EMsg.ClientPICSChangesSinceResponse] = Schema.CMsgClientPICSChangesSinceResponse;
protobufs[Steam.EMsg.ClientPICSProductInfoRequest] = Schema.CMsgClientPICSProductInfoRequest;
protobufs[Steam.EMsg.ClientPICSProductInfoResponse] = Schema.CMsgClientPICSProductInfoResponse;
protobufs[Steam.EMsg.ClientPICSAccessTokenRequest] = Schema.CMsgClientPICSAccessTokenRequest;
protobufs[Steam.EMsg.ClientPICSAccessTokenResponse] = Schema.CMsgClientPICSAccessTokenResponse;
protobufs[Steam.EMsg.ClientCreateAccountProto] = Schema.CMsgClientCreateAccount;
protobufs[Steam.EMsg.ClientCreateAccountProtoResponse] = Schema.CMsgClientCreateAccountResponse;
protobufs[Steam.EMsg.EconTrading_InitiateTradeRequest] = Schema.CMsgTrading_InitiateTradeRequest;
protobufs[Steam.EMsg.EconTrading_InitiateTradeResponse] = Schema.CMsgTrading_InitiateTradeResponse;
protobufs[Steam.EMsg.EconTrading_CancelTradeRequest] = Schema.CMsgTrading_CancelTradeRequest;
protobufs[Steam.EMsg.EconTrading_InitiateTradeProposed] = Schema.CMsgTrading_InitiateTradeRequest;
protobufs[Steam.EMsg.EconTrading_InitiateTradeResult] = Schema.CMsgTrading_InitiateTradeResponse;
protobufs[Steam.EMsg.EconTrading_StartSession] = Schema.CMsgTrading_StartSession;
protobufs[Steam.EMsg.ClientChangeStatus] = Schema.CMsgClientChangeStatus;
protobufs[Steam.EMsg.ClientAddFriend] = Schema.CMsgClientAddFriend;
protobufs[Steam.EMsg.ClientRemoveFriend] = Schema.CMsgClientRemoveFriend;
protobufs[Steam.EMsg.ClientFSGetFriendsSteamLevels] = Schema.CMsgClientFSGetFriendsSteamLevels;
protobufs[Steam.EMsg.ClientFSGetFriendsSteamLevelsResponse] = Schema.CMsgClientFSGetFriendsSteamLevelsResponse;
protobufs[Steam.EMsg.ClientPersonaState] = Schema.CMsgClientPersonaState;
protobufs[Steam.EMsg.ClientClanState] = Schema.CMsgClientClanState;
protobufs[Steam.EMsg.ClientFriendsList] = Schema.CMsgClientFriendsList;
protobufs[Steam.EMsg.ClientRequestFriendData] = Schema.CMsgClientRequestFriendData;
protobufs[Steam.EMsg.ClientFriendMsg] = Schema.CMsgClientFriendMsg;
protobufs[Steam.EMsg.ClientChatInvite] = Schema.CMsgClientChatInvite;
protobufs[Steam.EMsg.ClientFriendMsgIncoming] = Schema.CMsgClientFriendMsgIncoming;
protobufs[Steam.EMsg.ClientFriendMsgEchoToSender] = Schema.CMsgClientFriendMsgIncoming;
protobufs[Steam.EMsg.ClientFSGetFriendMessageHistory] = Schema.CMsgClientFSGetFriendMessageHistory;
protobufs[Steam.EMsg.ClientFSGetFriendMessageHistoryResponse] = Schema.CMsgClientFSGetFriendMessageHistoryResponse;
protobufs[Steam.EMsg.ClientFriendsGroupsList] = Schema.CMsgClientFriendsGroupsList;

// Unified protobufs
protobufs['GameServers.GetServerList#1_Request'] = Schema.CGameServers_GetServerList_Request;
protobufs['GameServers.GetServerList#1_Response'] = Schema.CGameServers_GetServerList_Response;
protobufs['GameServers.GetServerSteamIDsByIP#1_Request'] = Schema.CGameServers_GetServerSteamIDsByIP_Request;
protobufs['GameServers.GetServerSteamIDsByIP#1_Response'] = Schema.CGameServers_IPsWithSteamIDs_Response;
protobufs['GameServers.GetServerIPsBySteamID#1_Request'] = Schema.CGameServers_GetServerIPsBySteamID_Request;
protobufs['GameServers.GetServerIPsBySteamID#1_Response'] = Schema.CGameServers_IPsWithSteamIDs_Response;
protobufs['TwoFactor.AddAuthenticator#1_Request'] = Schema.CTwoFactor_AddAuthenticator_Request;
protobufs['TwoFactor.AddAuthenticator#1_Response'] = Schema.CTwoFactor_AddAuthenticator_Response;
protobufs['TwoFactor.FinalizeAddAuthenticator#1_Request'] = Schema.CTwoFactor_FinalizeAddAuthenticator_Request;
protobufs['TwoFactor.FinalizeAddAuthenticator#1_Response'] = Schema.CTwoFactor_FinalizeAddAuthenticator_Response;
protobufs['TwoFactor.SendEmail#1_Request'] = Schema.CTwoFactor_SendEmail_Request;
protobufs['TwoFactor.SendEmail#1_Response'] = Schema.CTwoFactor_SendEmail_Response;
protobufs['TwoFactor.RemoveAuthenticator#1_Request'] = Schema.CTwoFactor_RemoveAuthenticator_Request;
protobufs['TwoFactor.RemoveAuthenticator#1_Response'] = Schema.CTwoFactor_RemoveAuthenticator_Response;

ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.LITTLE_ENDIAN;

SteamUser.prototype._send = function(emsg, body, callback) {
	if((!this.steamID || !this.client.connected) && [Steam.EMsg.ChannelEncryptRequest, Steam.EMsg.ChannelEncryptResponse, Steam.EMsg.ChannelEncryptResult, Steam.EMsg.ClientLogon].indexOf(emsg) == -1) {
		// We're disconnected, drop it
		this.emit('debug', 'Dropping message ' + emsg + ' because we\'re not logged on.');
		return;
	}

	var header = {
		"msg": emsg
	};

	var Proto = protobufs[emsg];
	if(Proto) {
		header.proto = {};
		body = new Proto(body).toBuffer();
	} else if(ByteBuffer.isByteBuffer(body)) {
		body = body.toBuffer();
	}

	var cb = null;
	if(callback) {
		cb = function(header, body) {
			if(protobufs[header.msg]) {
				body = protobufs[header.msg].decode(body);
			} else {
				body = ByteBuffer.wrap(body);
			}

			callback(body);
		};
	}

	this.emit('debug', 'Sending message: ' + emsg);
	this.client.send(header, body, cb);
};

SteamUser.prototype._handleMessage = function(header, body, callback) {
	var msgName = header.msg;

	if(this.options.debug) {
		for(var i in Steam.EMsg) {
			if(Steam.EMsg.hasOwnProperty(i) && Steam.EMsg[i] == header.msg) {
				msgName = i;
				break;
			}
		}
	}

	if(!this._handlers[header.msg]) {
		this.emit('debug', 'Unhandled message: ' + msgName);
		return;
	}

	if(protobufs[header.msg]) {
		body = protobufs[header.msg].decode(body);
	} else {
		body = ByteBuffer.wrap(body);
	}

	this.emit('debug', 'Handled message: ' + msgName);

	var cb = null;
	if(callback) {
		cb = function(emsg, body) {
			var header = {"msg": emsg};

			if(protobufs[emsg]) {
				header.proto = {};
				body = new protobufs[emsg](body).toBuffer();
			}

			callback(header, body);
		}
	}

	this._handlers[header.msg].call(this, body, cb);
};

SteamUser.prototype._handlers = {};

// Unified messages

SteamUser.prototype._sendUnified = function(methodName, methodData, notification, callback) {
	var cb;
	if(callback && protobufs[methodName + '_Response']) {
		cb = function(body) {
			var Proto = protobufs[methodName + '_Response'];
			callback(Proto.decode(body.serialized_method_response));
		};
	}

	var Proto = protobufs[methodName + '_Request'];
	this._send(Steam.EMsg.ClientServiceMethod, {
		"method_name": methodName,
		"serialized_method": new Proto(methodData).toBuffer(),
		"is_notification": notification
	}, cb);
};
