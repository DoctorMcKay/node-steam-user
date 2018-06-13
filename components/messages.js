var SteamUser = require('../index.js');
var ByteBuffer = require('bytebuffer');

var Schema = require('./protobufs.js');

var protobufs = {};
protobufs[SteamUser.EMsg.ClientLogon] = Schema.CMsgClientLogon;
protobufs[SteamUser.EMsg.ClientLogOnResponse] = Schema.CMsgClientLogonResponse;
protobufs[SteamUser.EMsg.ClientLogOff] = Schema.CMsgClientLogOff;
protobufs[SteamUser.EMsg.ClientLoggedOff] = Schema.CMsgClientLoggedOff;
protobufs[SteamUser.EMsg.ClientUpdateMachineAuth] = Schema.CMsgClientUpdateMachineAuth;
protobufs[SteamUser.EMsg.ClientUpdateMachineAuthResponse] = Schema.CMsgClientUpdateMachineAuthResponse;
protobufs[SteamUser.EMsg.ClientNewLoginKey] = Schema.CMsgClientNewLoginKey;
protobufs[SteamUser.EMsg.ClientNewLoginKeyAccepted] = Schema.CMsgClientNewLoginKeyAccepted;
protobufs[SteamUser.EMsg.ClientRequestWebAPIAuthenticateUserNonce] = Schema.CMsgClientRequestWebAPIAuthenticateUserNonce;
protobufs[SteamUser.EMsg.ClientRequestWebAPIAuthenticateUserNonceResponse] = Schema.CMsgClientRequestWebAPIAuthenticateUserNonceResponse;
protobufs[SteamUser.EMsg.ClientCMList] = Schema.CMsgClientCMList;
protobufs[SteamUser.EMsg.ClientItemAnnouncements] = Schema.CMsgClientItemAnnouncements;
protobufs[SteamUser.EMsg.ClientRequestItemAnnouncements] = Schema.CMsgClientRequestItemAnnouncements;
protobufs[SteamUser.EMsg.ClientCommentNotifications] = Schema.CMsgClientCommentNotifications;
protobufs[SteamUser.EMsg.ClientRequestCommentNotifications] = Schema.CMsgClientRequestCommentNotifications;
protobufs[SteamUser.EMsg.ClientUserNotifications] = Schema.CMsgClientUserNotifications;
protobufs[SteamUser.EMsg.ClientFSOfflineMessageNotification] = Schema.CMsgClientOfflineMessageNotification;
protobufs[SteamUser.EMsg.ClientFSRequestOfflineMessageCount] = Schema.CMsgClientRequestOfflineMessageCount;
protobufs[SteamUser.EMsg.ClientGamesPlayed] = Schema.CMsgClientGamesPlayed;
protobufs[SteamUser.EMsg.ClientAccountInfo] = Schema.CMsgClientAccountInfo;
protobufs[SteamUser.EMsg.ClientEmailAddrInfo] = Schema.CMsgClientEmailAddrInfo;
protobufs[SteamUser.EMsg.ClientIsLimitedAccount] = Schema.CMsgClientIsLimitedAccount;
protobufs[SteamUser.EMsg.ClientWalletInfoUpdate] = Schema.CMsgClientWalletInfoUpdate;
protobufs[SteamUser.EMsg.ClientLicenseList] = Schema.CMsgClientLicenseList;
protobufs[SteamUser.EMsg.ClientServiceMethod] = Schema.CMsgClientServiceMethod;
protobufs[SteamUser.EMsg.ClientServiceMethodResponse] = Schema.CMsgClientServiceMethodResponse;
protobufs[SteamUser.EMsg.ClientGMSServerQuery] = Schema.CMsgClientGMSServerQuery;
protobufs[SteamUser.EMsg.GMSClientServerQueryResponse] = Schema.CMsgGMSClientServerQueryResponse;
protobufs[SteamUser.EMsg.ClientPICSChangesSinceRequest] = Schema.CMsgClientPICSChangesSinceRequest;
protobufs[SteamUser.EMsg.ClientPICSChangesSinceResponse] = Schema.CMsgClientPICSChangesSinceResponse;
protobufs[SteamUser.EMsg.ClientPICSProductInfoRequest] = Schema.CMsgClientPICSProductInfoRequest;
protobufs[SteamUser.EMsg.ClientPICSProductInfoResponse] = Schema.CMsgClientPICSProductInfoResponse;
protobufs[SteamUser.EMsg.ClientPICSAccessTokenRequest] = Schema.CMsgClientPICSAccessTokenRequest;
protobufs[SteamUser.EMsg.ClientPICSAccessTokenResponse] = Schema.CMsgClientPICSAccessTokenResponse;
protobufs[SteamUser.EMsg.EconTrading_InitiateTradeRequest] = Schema.CMsgTrading_InitiateTradeRequest;
protobufs[SteamUser.EMsg.EconTrading_InitiateTradeResponse] = Schema.CMsgTrading_InitiateTradeResponse;
protobufs[SteamUser.EMsg.EconTrading_CancelTradeRequest] = Schema.CMsgTrading_CancelTradeRequest;
protobufs[SteamUser.EMsg.EconTrading_InitiateTradeProposed] = Schema.CMsgTrading_InitiateTradeRequest;
protobufs[SteamUser.EMsg.EconTrading_InitiateTradeResult] = Schema.CMsgTrading_InitiateTradeResponse;
protobufs[SteamUser.EMsg.EconTrading_StartSession] = Schema.CMsgTrading_StartSession;
protobufs[SteamUser.EMsg.ClientChangeStatus] = Schema.CMsgClientChangeStatus;
protobufs[SteamUser.EMsg.ClientAddFriend] = Schema.CMsgClientAddFriend;
protobufs[SteamUser.EMsg.ClientAddFriendResponse] = Schema.CMsgClientAddFriendResponse;
protobufs[SteamUser.EMsg.ClientRemoveFriend] = Schema.CMsgClientRemoveFriend;
protobufs[SteamUser.EMsg.ClientFSGetFriendsSteamLevels] = Schema.CMsgClientFSGetFriendsSteamLevels;
protobufs[SteamUser.EMsg.ClientFSGetFriendsSteamLevelsResponse] = Schema.CMsgClientFSGetFriendsSteamLevelsResponse;
protobufs[SteamUser.EMsg.ClientPersonaState] = Schema.CMsgClientPersonaState;
protobufs[SteamUser.EMsg.ClientClanState] = Schema.CMsgClientClanState;
protobufs[SteamUser.EMsg.ClientFriendsList] = Schema.CMsgClientFriendsList;
protobufs[SteamUser.EMsg.ClientRequestFriendData] = Schema.CMsgClientRequestFriendData;
protobufs[SteamUser.EMsg.ClientFriendMsg] = Schema.CMsgClientFriendMsg;
protobufs[SteamUser.EMsg.ClientChatInvite] = Schema.CMsgClientChatInvite;
protobufs[SteamUser.EMsg.ClientFriendMsgIncoming] = Schema.CMsgClientFriendMsgIncoming;
protobufs[SteamUser.EMsg.ClientFriendMsgEchoToSender] = Schema.CMsgClientFriendMsgIncoming;
protobufs[SteamUser.EMsg.ClientFSGetFriendMessageHistory] = Schema.CMsgClientChatGetFriendMessageHistory;
protobufs[SteamUser.EMsg.ClientFSGetFriendMessageHistoryResponse] = Schema.CMsgClientChatGetFriendMessageHistoryResponse;
protobufs[SteamUser.EMsg.ClientFriendsGroupsList] = Schema.CMsgClientFriendsGroupsList;
protobufs[SteamUser.EMsg.AMClientCreateFriendsGroup] = Schema.CMsgClientCreateFriendsGroup;
protobufs[SteamUser.EMsg.AMClientCreateFriendsGroupResponse] = Schema.CMsgClientCreateFriendsGroupResponse;
protobufs[SteamUser.EMsg.AMClientDeleteFriendsGroup] = Schema.CMsgClientDeleteFriendsGroup;
protobufs[SteamUser.EMsg.AMClientDeleteFriendsGroupResponse] = Schema.CMsgClientDeleteFriendsGroupResponse;
protobufs[SteamUser.EMsg.AMClientRenameFriendsGroup] = Schema.CMsgClientManageFriendsGroup;
protobufs[SteamUser.EMsg.AMClientRenameFriendsGroupResponse] = Schema.CMsgClientManageFriendsGroupResponse;
protobufs[SteamUser.EMsg.AMClientAddFriendToGroup] = Schema.CMsgClientAddFriendToGroup;
protobufs[SteamUser.EMsg.AMClientAddFriendToGroupResponse] = Schema.CMsgClientAddFriendToGroupResponse;
protobufs[SteamUser.EMsg.AMClientRemoveFriendFromGroup] = Schema.CMsgClientRemoveFriendFromGroup;
protobufs[SteamUser.EMsg.AMClientRemoveFriendFromGroupResponse] = Schema.CMsgClientRemoveFriendFromGroupResponse;
protobufs[SteamUser.EMsg.ClientPlayerNicknameList] = Schema.CMsgClientPlayerNicknameList;
protobufs[SteamUser.EMsg.AMClientSetPlayerNickname] = Schema.CMsgClientSetPlayerNickname;
protobufs[SteamUser.EMsg.AMClientSetPlayerNicknameResponse] = Schema.CMsgClientSetPlayerNicknameResponse;
protobufs[SteamUser.EMsg.ClientRegisterKey] = Schema.CMsgClientRegisterKey;
protobufs[SteamUser.EMsg.ClientPurchaseResponse] = Schema.CMsgClientPurchaseResponse;
protobufs[SteamUser.EMsg.ClientRequestFreeLicense] = Schema.CMsgClientRequestFreeLicense;
protobufs[SteamUser.EMsg.ClientRequestFreeLicenseResponse] = Schema.CMsgClientRequestFreeLicenseResponse;
protobufs[SteamUser.EMsg.ClientGetNumberOfCurrentPlayersDP] = Schema.CMsgDPGetNumberOfCurrentPlayers;
protobufs[SteamUser.EMsg.ClientGetNumberOfCurrentPlayersDPResponse] = Schema.CMsgDPGetNumberOfCurrentPlayersResponse;
protobufs[SteamUser.EMsg.ClientGetAppOwnershipTicket] = Schema.CMsgClientGetAppOwnershipTicket;
protobufs[SteamUser.EMsg.ClientGetAppOwnershipTicketResponse] = Schema.CMsgClientGetAppOwnershipTicketResponse;
protobufs[SteamUser.EMsg.ClientGameConnectTokens] = Schema.CMsgClientGameConnectTokens;
protobufs[SteamUser.EMsg.ClientAuthList] = Schema.CMsgClientAuthList;
protobufs[SteamUser.EMsg.ClientAuthListAck] = Schema.CMsgClientAuthListAck;
protobufs[SteamUser.EMsg.ClientTicketAuthComplete] = Schema.CMsgClientTicketAuthComplete;
protobufs[SteamUser.EMsg.ClientRequestEncryptedAppTicket] = Schema.CMsgClientRequestEncryptedAppTicket;
protobufs[SteamUser.EMsg.ClientRequestEncryptedAppTicketResponse] = Schema.CMsgClientRequestEncryptedAppTicketResponse;
protobufs[SteamUser.EMsg.ClientCurrentUIMode] = Schema.CMsgClientUIMode;
protobufs[SteamUser.EMsg.ClientVanityURLChangedNotification] = Schema.CMsgClientVanityURLChangedNotification;
protobufs[SteamUser.EMsg.ClientAMGetPersonaNameHistory] = Schema.CMsgClientAMGetPersonaNameHistory;
protobufs[SteamUser.EMsg.ClientAMGetPersonaNameHistoryResponse] = Schema.CMsgClientAMGetPersonaNameHistoryResponse;
protobufs[SteamUser.EMsg.ClientUnlockStreaming] = Schema.CMsgAMUnlockStreaming;
protobufs[SteamUser.EMsg.ClientUnlockStreamingResponse] = Schema.CMsgAMUnlockStreamingResponse;
protobufs[SteamUser.EMsg.ClientEmailChange4] = Schema.CMsgClientEmailChange;
protobufs[SteamUser.EMsg.ClientEmailChangeResponse4] = Schema.CMsgClientEmailChangeResponse;
protobufs[SteamUser.EMsg.ClientServerList] = Schema.CMsgClientServerList;
protobufs[SteamUser.EMsg.ClientGetDepotDecryptionKey] = Schema.CMsgClientGetDepotDecryptionKey;
protobufs[SteamUser.EMsg.ClientGetDepotDecryptionKeyResponse] = Schema.CMsgClientGetDepotDecryptionKeyResponse;
protobufs[SteamUser.EMsg.ClientGetCDNAuthToken] = Schema.CMsgClientGetCDNAuthToken;
protobufs[SteamUser.EMsg.ClientGetCDNAuthTokenResponse] = Schema.CMsgClientGetCDNAuthTokenResponse;
protobufs[SteamUser.EMsg.ClientCheckAppBetaPassword] = Schema.CMsgClientCheckAppBetaPassword;
protobufs[SteamUser.EMsg.ClientCheckAppBetaPasswordResponse] = Schema.CMsgClientCheckAppBetaPasswordResponse;
protobufs[SteamUser.EMsg.ClientKickPlayingSession] = Schema.CMsgClientKickPlayingSession;
protobufs[SteamUser.EMsg.ClientPlayingSessionState] = Schema.CMsgClientPlayingSessionState;

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
protobufs['Credentials.GetSteamGuardDetails#1_Request'] = Schema.CCredentials_GetSteamGuardDetails_Request;
protobufs['Credentials.GetSteamGuardDetails#1_Response'] = Schema.CCredentials_GetSteamGuardDetails_Response;
protobufs['Credentials.GetAccountAuthSecret#1_Request'] = Schema.CCredentials_GetAccountAuthSecret_Request;
protobufs['Credentials.GetAccountAuthSecret#1_Response'] = Schema.CCredentials_GetAccountAuthSecret_Response;
protobufs['Credentials.GetCredentialChangeTimeDetails#1_Request'] = Schema.CCredentials_LastCredentialChangeTime_Request;
protobufs['Credentials.GetCredentialChangeTimeDetails#1_Response'] = Schema.CCredentials_LastCredentialChangeTime_Response;
protobufs['PublishedFile.GetDetails#1_Request'] = Schema.CPublishedFile_GetDetails_Request;
protobufs['PublishedFile.GetDetails#1_Response'] = Schema.CPublishedFile_GetDetails_Response;
protobufs['Player.GetGameBadgeLevels#1_Request'] = Schema.CPlayer_GetGameBadgeLevels_Request;
protobufs['Player.GetGameBadgeLevels#1_Response'] = Schema.CPlayer_GetGameBadgeLevels_Response;
protobufs['Player.GetNicknameList#1_Request'] = Schema.CPlayer_GetNicknameList_Request;
protobufs['Player.GetNicknameList#1_Response'] = Schema.CPlayer_GetNicknameList_Response;
protobufs['PlayerClient.NotifyFriendNicknameChanged#1'] = Schema.CPlayer_FriendNicknameChanged_Notification;
protobufs['Econ.GetAssetClassInfo#1_Request'] = Schema.CEcon_GetAssetClassInfo_Request;
protobufs['Econ.GetAssetClassInfo#1_Response'] = Schema.CEcon_GetAssetClassInfo_Response;
protobufs['Store.GetLocalizedNameForTags#1_Request'] = Schema.CStore_GetLocalizedNameForTags_Request;
protobufs['Store.GetLocalizedNameForTags#1_Response'] = Schema.CStore_GetLocalizedNameForTags_Response;
protobufs['Econ.GetTradeOfferAccessToken#1_Request'] = Schema.CEcon_GetTradeOfferAccessToken_Request;
protobufs['Econ.GetTradeOfferAccessToken#1_Response'] = Schema.CEcon_GetTradeOfferAccessToken_Response;

ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.LITTLE_ENDIAN;

SteamUser.prototype._send = function(emsg, body, callback) {
	if ((!this.steamID || !this.client.connected) && [SteamUser.EMsg.ChannelEncryptRequest, SteamUser.EMsg.ChannelEncryptResponse, SteamUser.EMsg.ChannelEncryptResult, SteamUser.EMsg.ClientLogon].indexOf(emsg) == -1) {
		// We're disconnected, drop it
		this.emit('debug', 'Dropping message ' + emsg + ' because we\'re not logged on.');
		return;
	}

	var header = {
		"msg": emsg
	};

	var Proto = protobufs[emsg];
	if (Proto) {
		header.proto = {};
		body = new Proto(body).toBuffer();
	} else if (ByteBuffer.isByteBuffer(body)) {
		body = body.toBuffer();
	}

	var cb = null;
	if (callback) {
		cb = function(header, body) {
			if (protobufs[header.msg]) {
				body = protobufs[header.msg].decode(body);
			} else {
				body = ByteBuffer.wrap(body);
			}

			callback(body);
		};
	}

	if (this.options.debug) {
		for (var i in SteamUser.EMsg) {
			if (SteamUser.EMsg.hasOwnProperty(i) && SteamUser.EMsg[i] == emsg) {
				emsg = i;
				break;
			}
		}
	}

	this.emit('debug', 'Sending message: ' + emsg);
	this.client.send(header, body, cb);
};

SteamUser.prototype._handleMessage = function(header, body, callback) {
	var msgName = header.msg;
	var handlerName = header.msg;

	if (this.options.debug) {
		for (var i in SteamUser.EMsg) {
			if (SteamUser.EMsg.hasOwnProperty(i) && SteamUser.EMsg[i] == header.msg) {
				msgName = i;
				break;
			}
		}
	}

	if (header.msg == SteamUser.EMsg.ServiceMethod) {
		if (header.proto && header.proto.target_job_name) {
			handlerName = msgName = header.proto.target_job_name;
		} else {
			this.emit('debug', 'Got ServiceMethod without target_job_name');
			return;
		}
	}

	if (header.msg != SteamUser.EMsg.ServiceMethod && header.proto && header.proto.target_job_name) {
		this.emit('debug', 'Got unknown target_job_name ' + header.proto.target_job_name + ' for msg ' + msgName);
	}

	if (!this._handlers[handlerName]) {
		if (header.msg != SteamUser.EMsg.Multi) {
			this.emit('debug', 'Unhandled message: ' + msgName);
		}

		return;
	}

	body = protobufs[handlerName] ? protobufs[handlerName].decode(body) : ByteBuffer.wrap(body);

	this.emit('debug', 'Handled message: ' + msgName);

	var cb = null;
	if (callback) {
		cb = function(emsg, body) {
			var header = {"msg": emsg};

			if (protobufs[emsg]) {
				header.proto = {};
				body = new protobufs[emsg](body).toBuffer();
			}

			callback(header, body);
		}
	}

	if (!this._handlers[handlerName]) {
		// last sanity check
		this.emit('debug', 'SANITY CHECK FAILED: No handler for ' + handlerName);
		return;
	}

	this._handlers[handlerName].call(this, body, cb);
};

SteamUser.prototype._handlers = {};

// Unified messages

SteamUser.prototype._sendUnified = function(methodName, methodData, notification, callback) {
	var cb;
	if (callback && protobufs[methodName + '_Response']) {
		cb = function(body) {
			var Proto = protobufs[methodName + '_Response'];
			callback(Proto.decode(body.serialized_method_response));
		};
	}

	var Proto = protobufs[methodName + '_Request'];
	this._send(SteamUser.EMsg.ClientServiceMethod, {
		"method_name": methodName,
		"serialized_method": new Proto(methodData).toBuffer(),
		"is_notification": notification
	}, cb);
};
