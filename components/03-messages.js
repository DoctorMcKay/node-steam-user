const ByteBuffer = require('bytebuffer');
const SteamID = require('steamid');
const Zlib = require('zlib');

const SteamUserConnection = require('./02-connection.js');

const Schema = require('../protobufs/generated/_load.js');

const EMsg = require('../enums/EMsg.js');
const EResult = require('../enums/EResult.js');

// steam-session dependencies
const {LoginSession, EAuthTokenPlatformType} = require('steam-session');
const CMAuthTransport = require('./classes/CMAuthTransport');

const JOBID_NONE = '18446744073709551615';
const PROTO_MASK = 0x80000000;

const VERBOSE_EMSG_LIST = [
	EMsg.Multi,
	EMsg.ClientHeartBeat
];

// Values are names in Schema, so that descriptors are only parsed once a message needs them
const protobufs = {};
protobufs[EMsg.Multi] = 'CMsgMulti';
protobufs[EMsg.ClientHeartBeat] = 'CMsgClientHeartBeat';
protobufs[EMsg.ClientHello] = 'CMsgClientHello';
protobufs[EMsg.ClientLogon] = 'CMsgClientLogon';
protobufs[EMsg.ClientLogonGameServer] = 'CMsgClientLogon';
protobufs[EMsg.ClientLogOnResponse] = 'CMsgClientLogonResponse';
protobufs[EMsg.ClientLogOff] = 'CMsgClientLogOff';
protobufs[EMsg.ClientLoggedOff] = 'CMsgClientLoggedOff';
protobufs[EMsg.ClientUpdateMachineAuth] = 'CMsgClientUpdateMachineAuth';
protobufs[EMsg.ClientUpdateMachineAuthResponse] = 'CMsgClientUpdateMachineAuthResponse';
protobufs[EMsg.ClientNewLoginKey] = 'CMsgClientNewLoginKey';
protobufs[EMsg.ClientNewLoginKeyAccepted] = 'CMsgClientNewLoginKeyAccepted';
protobufs[EMsg.ClientRequestWebAPIAuthenticateUserNonce] = 'CMsgClientRequestWebAPIAuthenticateUserNonce';
protobufs[EMsg.ClientRequestWebAPIAuthenticateUserNonceResponse] = 'CMsgClientRequestWebAPIAuthenticateUserNonceResponse';
protobufs[EMsg.ClientCMList] = 'CMsgClientCMList';
protobufs[EMsg.ClientItemAnnouncements] = 'CMsgClientItemAnnouncements';
protobufs[EMsg.ClientRequestItemAnnouncements] = 'CMsgClientRequestItemAnnouncements';
protobufs[EMsg.ClientCommentNotifications] = 'CMsgClientCommentNotifications';
protobufs[EMsg.ClientRequestCommentNotifications] = 'CMsgClientRequestCommentNotifications';
protobufs[EMsg.ClientUserNotifications] = 'CMsgClientUserNotifications';
protobufs[EMsg.ClientFSOfflineMessageNotification] = 'CMsgClientOfflineMessageNotification';
protobufs[EMsg.ClientFSRequestOfflineMessageCount] = 'CMsgClientRequestOfflineMessageCount';
protobufs[EMsg.ClientGamesPlayed] = 'CMsgClientGamesPlayed';
protobufs[EMsg.ClientGamesPlayedWithDataBlob] = 'CMsgClientGamesPlayed';
protobufs[EMsg.ClientAccountInfo] = 'CMsgClientAccountInfo';
protobufs[EMsg.ClientEmailAddrInfo] = 'CMsgClientEmailAddrInfo';
protobufs[EMsg.ClientIsLimitedAccount] = 'CMsgClientIsLimitedAccount';
protobufs[EMsg.ClientWalletInfoUpdate] = 'CMsgClientWalletInfoUpdate';
protobufs[EMsg.ClientLicenseList] = 'CMsgClientLicenseList';
protobufs[EMsg.ClientServiceMethodLegacy] = 'CMsgClientServiceMethodLegacy';
protobufs[EMsg.ClientServiceMethodLegacyResponse] = 'CMsgClientServiceMethodLegacyResponse';
protobufs[EMsg.ClientGMSServerQuery] = 'CMsgClientGMSServerQuery';
protobufs[EMsg.GMSClientServerQueryResponse] = 'CMsgGMSClientServerQueryResponse';
protobufs[EMsg.ClientPICSChangesSinceRequest] = 'CMsgClientPICSChangesSinceRequest';
protobufs[EMsg.ClientPICSChangesSinceResponse] = 'CMsgClientPICSChangesSinceResponse';
protobufs[EMsg.ClientPICSProductInfoRequest] = 'CMsgClientPICSProductInfoRequest';
protobufs[EMsg.ClientPICSProductInfoResponse] = 'CMsgClientPICSProductInfoResponse';
protobufs[EMsg.ClientPICSAccessTokenRequest] = 'CMsgClientPICSAccessTokenRequest';
protobufs[EMsg.ClientPICSAccessTokenResponse] = 'CMsgClientPICSAccessTokenResponse';
protobufs[EMsg.EconTrading_InitiateTradeRequest] = 'CMsgTrading_InitiateTradeRequest';
protobufs[EMsg.EconTrading_InitiateTradeResponse] = 'CMsgTrading_InitiateTradeResponse';
protobufs[EMsg.EconTrading_CancelTradeRequest] = 'CMsgTrading_CancelTradeRequest';
protobufs[EMsg.EconTrading_InitiateTradeProposed] = 'CMsgTrading_InitiateTradeRequest';
protobufs[EMsg.EconTrading_InitiateTradeResult] = 'CMsgTrading_InitiateTradeResponse';
protobufs[EMsg.EconTrading_StartSession] = 'CMsgTrading_StartSession';
protobufs[EMsg.ClientChangeStatus] = 'CMsgClientChangeStatus';
protobufs[EMsg.ClientAddFriend] = 'CMsgClientAddFriend';
protobufs[EMsg.ClientAddFriendResponse] = 'CMsgClientAddFriendResponse';
protobufs[EMsg.ClientRemoveFriend] = 'CMsgClientRemoveFriend';
protobufs[EMsg.ClientFSGetFriendsSteamLevels] = 'CMsgClientFSGetFriendsSteamLevels';
protobufs[EMsg.ClientFSGetFriendsSteamLevelsResponse] = 'CMsgClientFSGetFriendsSteamLevelsResponse';
protobufs[EMsg.ClientPersonaState] = 'CMsgClientPersonaState';
protobufs[EMsg.ClientClanState] = 'CMsgClientClanState';
protobufs[EMsg.ClientFriendsList] = 'CMsgClientFriendsList';
protobufs[EMsg.ClientRequestFriendData] = 'CMsgClientRequestFriendData';
protobufs[EMsg.ClientFriendMsg] = 'CMsgClientFriendMsg';
protobufs[EMsg.ClientChatInvite] = 'CMsgClientChatInvite';
protobufs[EMsg.ClientFriendMsgIncoming] = 'CMsgClientFriendMsgIncoming';
protobufs[EMsg.ClientFriendMsgEchoToSender] = 'CMsgClientFriendMsgIncoming';
protobufs[EMsg.ClientFSGetFriendMessageHistory] = 'CMsgClientChatGetFriendMessageHistory';
protobufs[EMsg.ClientFSGetFriendMessageHistoryResponse] = 'CMsgClientChatGetFriendMessageHistoryResponse';
protobufs[EMsg.ClientFriendsGroupsList] = 'CMsgClientFriendsGroupsList';
protobufs[EMsg.AMClientCreateFriendsGroup] = 'CMsgClientCreateFriendsGroup';
protobufs[EMsg.AMClientCreateFriendsGroupResponse] = 'CMsgClientCreateFriendsGroupResponse';
protobufs[EMsg.AMClientDeleteFriendsGroup] = 'CMsgClientDeleteFriendsGroup';
protobufs[EMsg.AMClientDeleteFriendsGroupResponse] = 'CMsgClientDeleteFriendsGroupResponse';
protobufs[EMsg.AMClientRenameFriendsGroup] = 'CMsgClientManageFriendsGroup';
protobufs[EMsg.AMClientRenameFriendsGroupResponse] = 'CMsgClientManageFriendsGroupResponse';
protobufs[EMsg.AMClientAddFriendToGroup] = 'CMsgClientAddFriendToGroup';
protobufs[EMsg.AMClientAddFriendToGroupResponse] = 'CMsgClientAddFriendToGroupResponse';
protobufs[EMsg.AMClientRemoveFriendFromGroup] = 'CMsgClientRemoveFriendFromGroup';
protobufs[EMsg.AMClientRemoveFriendFromGroupResponse] = 'CMsgClientRemoveFriendFromGroupResponse';
protobufs[EMsg.ClientPlayerNicknameList] = 'CMsgClientPlayerNicknameList';
protobufs[EMsg.AMClientSetPlayerNickname] = 'CMsgClientSetPlayerNickname';
protobufs[EMsg.AMClientSetPlayerNicknameResponse] = 'CMsgClientSetPlayerNicknameResponse';
protobufs[EMsg.ClientRegisterKey] = 'CMsgClientRegisterKey';
protobufs[EMsg.ClientPurchaseResponse] = 'CMsgClientPurchaseResponse';
protobufs[EMsg.ClientRequestFreeLicense] = 'CMsgClientRequestFreeLicense';
protobufs[EMsg.ClientRequestFreeLicenseResponse] = 'CMsgClientRequestFreeLicenseResponse';
protobufs[EMsg.ClientGetNumberOfCurrentPlayersDP] = 'CMsgDPGetNumberOfCurrentPlayers';
protobufs[EMsg.ClientGetNumberOfCurrentPlayersDPResponse] = 'CMsgDPGetNumberOfCurrentPlayersResponse';
protobufs[EMsg.ClientGetAppOwnershipTicket] = 'CMsgClientGetAppOwnershipTicket';
protobufs[EMsg.ClientGetAppOwnershipTicketResponse] = 'CMsgClientGetAppOwnershipTicketResponse';
protobufs[EMsg.ClientGameConnectTokens] = 'CMsgClientGameConnectTokens';
protobufs[EMsg.ClientAuthList] = 'CMsgClientAuthList';
protobufs[EMsg.ClientAuthListAck] = 'CMsgClientAuthListAck';
protobufs[EMsg.ClientTicketAuthComplete] = 'CMsgClientTicketAuthComplete';
protobufs[EMsg.ClientRequestEncryptedAppTicket] = 'CMsgClientRequestEncryptedAppTicket';
protobufs[EMsg.ClientRequestEncryptedAppTicketResponse] = 'CMsgClientRequestEncryptedAppTicketResponse';
protobufs[EMsg.ClientCurrentUIMode] = 'CMsgClientUIMode';
protobufs[EMsg.ClientVanityURLChangedNotification] = 'CMsgClientVanityURLChangedNotification';
protobufs[EMsg.ClientAMGetPersonaNameHistory] = 'CMsgClientAMGetPersonaNameHistory';
protobufs[EMsg.ClientAMGetPersonaNameHistoryResponse] = 'CMsgClientAMGetPersonaNameHistoryResponse';
//protobufs[EMsg.ClientUnlockStreaming] = 'CMsgAMUnlockStreaming';
//protobufs[EMsg.ClientUnlockStreamingResponse] = 'CMsgAMUnlockStreamingResponse';
protobufs[EMsg.ClientGetDepotDecryptionKey] = 'CMsgClientGetDepotDecryptionKey';
protobufs[EMsg.ClientGetDepotDecryptionKeyResponse] = 'CMsgClientGetDepotDecryptionKeyResponse';
protobufs[EMsg.ClientGetCDNAuthToken] = 'CMsgClientGetCDNAuthToken';
protobufs[EMsg.ClientGetCDNAuthTokenResponse] = 'CMsgClientGetCDNAuthTokenResponse';
protobufs[EMsg.ClientCheckAppBetaPassword] = 'CMsgClientCheckAppBetaPassword';
protobufs[EMsg.ClientCheckAppBetaPasswordResponse] = 'CMsgClientCheckAppBetaPasswordResponse';
protobufs[EMsg.ClientKickPlayingSession] = 'CMsgClientKickPlayingSession';
protobufs[EMsg.ClientPlayingSessionState] = 'CMsgClientPlayingSessionState';
protobufs[EMsg.ClientToGC] = 'CMsgGCClient';
protobufs[EMsg.ClientFromGC] = 'CMsgGCClient';
protobufs[EMsg.ClientRichPresenceUpload] = 'CMsgClientRichPresenceUpload';
protobufs[EMsg.ClientRichPresenceRequest] = 'CMsgClientRichPresenceRequest';
protobufs[EMsg.ClientRichPresenceInfo] = 'CMsgClientRichPresenceInfo';
protobufs[EMsg.ClientGetEmoticonList] = 'CMsgClientGetEmoticonList';
protobufs[EMsg.ClientEmoticonList] = 'CMsgClientEmoticonList';
protobufs[EMsg.ClientGetAuthorizedDevicesResponse] = 'CMsgClientGetAuthorizedDevices';
protobufs[EMsg.ClientAuthorizeLocalDeviceRequest] = 'CMsgClientAuthorizeLocalDeviceRequest';
protobufs[EMsg.ClientAuthorizeLocalDeviceResponse] = 'CMsgClientAuthorizeLocalDevice';
protobufs[EMsg.ClientDeauthorizeDeviceRequest] = 'CMsgClientDeauthorizeDeviceRequest';
protobufs[EMsg.ClientDeauthorizeDevice] = 'CMsgClientDeauthorizeDevice';
protobufs[EMsg.ClientUseLocalDeviceAuthorizations] = 'CMsgClientUseLocalDeviceAuthorizations';

// Unified protobufs
protobufs['GameServers.GetServerList#1_Request'] = 'CGameServers_GetServerList_Request';
protobufs['GameServers.GetServerList#1_Response'] = 'CGameServers_GetServerList_Response';
protobufs['GameServers.GetServerSteamIDsByIP#1_Request'] = 'CGameServers_GetServerSteamIDsByIP_Request';
protobufs['GameServers.GetServerSteamIDsByIP#1_Response'] = 'CGameServers_IPsWithSteamIDs_Response';
protobufs['GameServers.GetServerIPsBySteamID#1_Request'] = 'CGameServers_GetServerIPsBySteamID_Request';
protobufs['GameServers.GetServerIPsBySteamID#1_Response'] = 'CGameServers_IPsWithSteamIDs_Response';
protobufs['TwoFactor.AddAuthenticator#1_Request'] = 'CTwoFactor_AddAuthenticator_Request';
protobufs['TwoFactor.AddAuthenticator#1_Response'] = 'CTwoFactor_AddAuthenticator_Response';
protobufs['TwoFactor.FinalizeAddAuthenticator#1_Request'] = 'CTwoFactor_FinalizeAddAuthenticator_Request';
protobufs['TwoFactor.FinalizeAddAuthenticator#1_Response'] = 'CTwoFactor_FinalizeAddAuthenticator_Response';
protobufs['TwoFactor.SendEmail#1_Request'] = 'CTwoFactor_SendEmail_Request';
protobufs['TwoFactor.SendEmail#1_Response'] = 'CTwoFactor_SendEmail_Response';
protobufs['TwoFactor.RemoveAuthenticator#1_Request'] = 'CTwoFactor_RemoveAuthenticator_Request';
protobufs['TwoFactor.RemoveAuthenticator#1_Response'] = 'CTwoFactor_RemoveAuthenticator_Response';
protobufs['Credentials.GetSteamGuardDetails#1_Request'] = 'CCredentials_GetSteamGuardDetails_Request';
protobufs['Credentials.GetSteamGuardDetails#1_Response'] = 'CCredentials_GetSteamGuardDetails_Response';
protobufs['Credentials.GetAccountAuthSecret#1_Request'] = 'CCredentials_GetAccountAuthSecret_Request';
protobufs['Credentials.GetAccountAuthSecret#1_Response'] = 'CCredentials_GetAccountAuthSecret_Response';
protobufs['Credentials.GetCredentialChangeTimeDetails#1_Request'] = 'CCredentials_LastCredentialChangeTime_Request';
protobufs['Credentials.GetCredentialChangeTimeDetails#1_Response'] = 'CCredentials_LastCredentialChangeTime_Response';
protobufs['PublishedFile.GetDetails#1_Request'] = 'CPublishedFile_GetDetails_Request';
protobufs['PublishedFile.GetDetails#1_Response'] = 'CPublishedFile_GetDetails_Response';
protobufs['Player.GetGameBadgeLevels#1_Request'] = 'CPlayer_GetGameBadgeLevels_Request';
protobufs['Player.GetGameBadgeLevels#1_Response'] = 'CPlayer_GetGameBadgeLevels_Response';
protobufs['Player.GetNicknameList#1_Request'] = 'CPlayer_GetNicknameList_Request';
protobufs['Player.GetNicknameList#1_Response'] = 'CPlayer_GetNicknameList_Response';
protobufs['Player.GetEmoticonList#1_Request'] = 'CPlayer_GetEmoticonList_Request';
protobufs['Player.GetEmoticonList#1_Response'] = 'CPlayer_GetEmoticonList_Response';
protobufs['Player.GetPrivacySettings#1_Request'] = 'CPlayer_GetPrivacySettings_Request';
protobufs['Player.GetPrivacySettings#1_Response'] = 'CPlayer_GetPrivacySettings_Response';
protobufs['Player.GetOwnedGames#1_Request'] = 'CPlayer_GetOwnedGames_Request';
protobufs['Player.GetOwnedGames#1_Response'] = 'CPlayer_GetOwnedGames_Response';
protobufs['Player.GetProfileItemsOwned#1_Request'] = 'CPlayer_GetProfileItemsOwned_Request';
protobufs['Player.GetProfileItemsOwned#1_Response'] = 'CPlayer_GetProfileItemsOwned_Response';
protobufs['Player.GetProfileItemsEquipped#1_Request'] = 'CPlayer_GetProfileItemsEquipped_Request';
protobufs['Player.GetProfileItemsEquipped#1_Response'] = 'CPlayer_GetProfileItemsEquipped_Response';
protobufs['Player.GetProfileBackground#1_Request'] = 'CPlayer_GetProfileBackground_Request';
protobufs['Player.GetProfileBackground#1_Response'] = 'CPlayer_GetProfileBackground_Response';
protobufs['Player.SetProfileBackground#1_Request'] = 'CPlayer_SetProfileBackground_Request';
protobufs['Player.SetProfileBackground#1_Response'] = 'CPlayer_SetProfileBackground_Response';
protobufs['PlayerClient.NotifyFriendNicknameChanged#1'] = 'CPlayer_FriendNicknameChanged_Notification';
protobufs['Econ.GetAssetClassInfo#1_Request'] = 'CEcon_GetAssetClassInfo_Request';
protobufs['Econ.GetAssetClassInfo#1_Response'] = 'CEcon_GetAssetClassInfo_Response';
protobufs['Store.GetLocalizedNameForTags#1_Request'] = 'CStore_GetLocalizedNameForTags_Request';
protobufs['Store.GetLocalizedNameForTags#1_Response'] = 'CStore_GetLocalizedNameForTags_Response';
protobufs['Econ.GetTradeOfferAccessToken#1_Request'] = 'CEcon_GetTradeOfferAccessToken_Request';
protobufs['Econ.GetTradeOfferAccessToken#1_Response'] = 'CEcon_GetTradeOfferAccessToken_Response';
protobufs['ChatRoom.CreateChatRoomGroup#1_Request'] = 'CChatRoom_CreateChatRoomGroup_Request';
protobufs['ChatRoom.CreateChatRoomGroup#1_Response'] = 'CChatRoom_CreateChatRoomGroup_Response';
protobufs['ChatRoom.SaveChatRoomGroup#1_Request'] = 'CChatRoom_SaveChatRoomGroup_Request';
protobufs['ChatRoom.SaveChatRoomGroup#1_Response'] = 'CChatRoom_SaveChatRoomGroup_Response';
protobufs['ChatRoom.RenameChatRoomGroup#1_Request'] = 'CChatRoom_RenameChatRoomGroup_Request';
protobufs['ChatRoom.RenameChatRoomGroup#1_Response'] = 'CChatRoom_RenameChatRoomGroup_Response';
protobufs['ChatRoom.SetChatRoomGroupTagline#1_Request'] = 'CChatRoom_SetChatRoomGroupTagline_Request';
protobufs['ChatRoom.SetChatRoomGroupTagline#1_Response'] = 'CChatRoom_SetChatRoomGroupTagline_Response';
protobufs['ChatRoom.SetChatRoomGroupAvatar#1_Request'] = 'CChatRoom_SetChatRoomGroupAvatar_Request';
protobufs['ChatRoom.SetChatRoomGroupAvatar#1_Response'] = 'CChatRoom_SetChatRoomGroupAvatar_Response';
protobufs['ChatRoom.MuteUserInGroup#1_Request'] = 'CChatRoom_MuteUser_Request';
protobufs['ChatRoom.MuteUserInGroup#1_Response'] = 'CChatRoom_MuteUser_Response';
protobufs['ChatRoom.KickUserFromGroup#1_Request'] = 'CChatRoom_KickUser_Request';
protobufs['ChatRoom.KickUserFromGroup#1_Response'] = 'CChatRoom_KickUser_Response';
protobufs['ChatRoom.SetUserBanState#1_Request'] = 'CChatRoom_SetUserBanState_Request';
protobufs['ChatRoom.SetUserBanState#1_Response'] = 'CChatRoom_SetUserBanState_Response';
protobufs['ChatRoom.RevokeInviteToGroup#1_Request'] = 'CChatRoom_RevokeInvite_Request';
protobufs['ChatRoom.RevokeInviteToGroup#1_Response'] = 'CChatRoom_RevokeInvite_Response';
protobufs['ChatRoom.CreateRole#1_Request'] = 'CChatRoom_CreateRole_Request';
protobufs['ChatRoom.CreateRole#1_Response'] = 'CChatRoom_CreateRole_Response';
protobufs['ChatRoom.GetRoles#1_Request'] = 'CChatRoom_GetRoles_Request';
protobufs['ChatRoom.GetRoles#1_Response'] = 'CChatRoom_GetRoles_Response';
protobufs['ChatRoom.RenameRole#1_Request'] = 'CChatRoom_RenameRole_Request';
protobufs['ChatRoom.RenameRole#1_Response'] = 'CChatRoom_RenameRole_Response';
protobufs['ChatRoom.ReorderRole#1_Request'] = 'CChatRoom_ReorderRole_Request';
protobufs['ChatRoom.ReorderRole#1_Response'] = 'CChatRoom_ReorderRole_Response';
protobufs['ChatRoom.DeleteRole#1_Request'] = 'CChatRoom_DeleteRole_Request';
protobufs['ChatRoom.DeleteRole#1_Response'] = 'CChatRoom_DeleteRole_Response';
protobufs['ChatRoom.GetRoleActions#1_Request'] = 'CChatRoom_GetRoleActions_Request';
protobufs['ChatRoom.GetRoleActions#1_Response'] = 'CChatRoom_GetRoleActions_Response';
protobufs['ChatRoom.ReplaceRoleActions#1_Request'] = 'CChatRoom_ReplaceRoleActions_Request';
protobufs['ChatRoom.ReplaceRoleActions#1_Response'] = 'CChatRoom_ReplaceRoleActions_Response';
protobufs['ChatRoom.AddRoleToUser#1_Request'] = 'CChatRoom_AddRoleToUser_Request';
protobufs['ChatRoom.AddRoleToUser#1_Response'] = 'CChatRoom_AddRoleToUser_Response';
protobufs['ChatRoom.GetRolesForUser#1_Request'] = 'CChatRoom_GetRolesForUser_Request';
protobufs['ChatRoom.GetRolesForUser#1_Response'] = 'CChatRoom_GetRolesForUser_Response';
protobufs['ChatRoom.DeleteRoleFromUser#1_Request'] = 'CChatRoom_DeleteRoleFromUser_Request';
protobufs['ChatRoom.DeleteRoleFromUser#1_Response'] = 'CChatRoom_DeleteRoleFromUser_Response';
protobufs['ChatRoom.JoinChatRoomGroup#1_Request'] = 'CChatRoom_JoinChatRoomGroup_Request';
protobufs['ChatRoom.JoinChatRoomGroup#1_Response'] = 'CChatRoom_JoinChatRoomGroup_Response';
protobufs['ChatRoom.InviteFriendToChatRoomGroup#1_Request'] = 'CChatRoom_InviteFriendToChatRoomGroup_Request';
protobufs['ChatRoom.InviteFriendToChatRoomGroup#1_Response'] = 'CChatRoom_InviteFriendToChatRoomGroup_Response';
protobufs['ChatRoom.LeaveChatRoomGroup#1_Request'] = 'CChatRoom_LeaveChatRoomGroup_Request';
protobufs['ChatRoom.LeaveChatRoomGroup#1_Response'] = 'CChatRoom_LeaveChatRoomGroup_Response';
protobufs['ChatRoom.CreateChatRoom#1_Request'] = 'CChatRoom_CreateChatRoom_Request';
protobufs['ChatRoom.CreateChatRoom#1_Response'] = 'CChatRoom_CreateChatRoom_Response';
protobufs['ChatRoom.DeleteChatRoom#1_Request'] = 'CChatRoom_DeleteChatRoom_Request';
protobufs['ChatRoom.DeleteChatRoom#1_Response'] = 'CChatRoom_DeleteChatRoom_Response';
protobufs['ChatRoom.RenameChatRoom#1_Request'] = 'CChatRoom_RenameChatRoom_Request';
protobufs['ChatRoom.RenameChatRoom#1_Response'] = 'CChatRoom_RenameChatRoom_Response';
protobufs['ChatRoom.SendChatMessage#1_Request'] = 'CChatRoom_SendChatMessage_Request';
protobufs['ChatRoom.SendChatMessage#1_Response'] = 'CChatRoom_SendChatMessage_Response';
protobufs['ChatRoom.JoinVoiceChat#1_Request'] = 'CChatRoom_JoinVoiceChat_Request';
protobufs['ChatRoom.JoinVoiceChat#1_Response'] = 'CChatRoom_JoinVoiceChat_Response';
protobufs['ChatRoom.LeaveVoiceChat#1_Request'] = 'CChatRoom_LeaveVoiceChat_Request';
protobufs['ChatRoom.LeaveVoiceChat#1_Response'] = 'CChatRoom_LeaveVoiceChat_Response';
protobufs['ChatRoom.GetMessageHistory#1_Request'] = 'CChatRoom_GetMessageHistory_Request';
protobufs['ChatRoom.GetMessageHistory#1_Response'] = 'CChatRoom_GetMessageHistory_Response';
protobufs['ChatRoom.GetMyChatRoomGroups#1_Request'] = 'CChatRoom_GetMyChatRoomGroups_Request';
protobufs['ChatRoom.GetMyChatRoomGroups#1_Response'] = 'CChatRoom_GetMyChatRoomGroups_Response';
protobufs['ChatRoom.GetChatRoomGroupState#1_Request'] = 'CChatRoom_GetChatRoomGroupState_Request';
protobufs['ChatRoom.GetChatRoomGroupState#1_Response'] = 'CChatRoom_GetChatRoomGroupState_Response';
protobufs['ChatRoom.GetChatRoomGroupSummary#1_Request'] = 'CChatRoom_GetChatRoomGroupSummary_Request';
protobufs['ChatRoom.GetChatRoomGroupSummary#1_Response'] = 'CChatRoom_GetChatRoomGroupSummary_Response';
protobufs['ChatRoom.AckChatMessage#1'] = 'CChatRoom_AckChatMessage_Notification';
protobufs['ChatRoom.CreateInviteLink#1_Request'] = 'CChatRoom_CreateInviteLink_Request';
protobufs['ChatRoom.CreateInviteLink#1_Response'] = 'CChatRoom_CreateInviteLink_Response';
protobufs['ChatRoom.GetInviteLinkInfo#1_Request'] = 'CChatRoom_GetInviteLinkInfo_Request';
protobufs['ChatRoom.GetInviteLinkInfo#1_Response'] = 'CChatRoom_GetInviteLinkInfo_Response';
protobufs['ChatRoom.GetInviteInfo#1_Request'] = 'CChatRoom_GetInviteInfo_Request';
protobufs['ChatRoom.GetInviteInfo#1_Response'] = 'CChatRoom_GetInviteInfo_Response';
protobufs['ChatRoom.GetInviteLinksForGroup#1_Request'] = 'CChatRoom_GetInviteLinksForGroup_Request';
protobufs['ChatRoom.GetInviteLinksForGroup#1_Response'] = 'CChatRoom_GetInviteLinksForGroup_Response';
protobufs['ChatRoom.GetBanList#1_Request'] = 'CChatRoom_GetBanList_Request';
protobufs['ChatRoom.GetBanList#1_Response'] = 'CChatRoom_GetBanList_Response';
protobufs['ChatRoom.GetInviteList#1_Request'] = 'CChatRoom_GetInviteList_Request';
protobufs['ChatRoom.GetInviteList#1_Response'] = 'CChatRoom_GetInviteList_Response';
protobufs['ChatRoom.DeleteInviteLink#1_Request'] = 'CChatRoom_DeleteInviteLink_Request';
protobufs['ChatRoom.DeleteInviteLink#1_Response'] = 'CChatRoom_DeleteInviteLink_Response';
protobufs['ChatRoom.SetSessionActiveChatRoomGroups#1_Request'] = 'CChatRoom_SetSessionActiveChatRoomGroups_Request';
protobufs['ChatRoom.SetSessionActiveChatRoomGroups#1_Response'] = 'CChatRoom_SetSessionActiveChatRoomGroups_Response';
protobufs['ChatRoom.SetUserChatGroupPreferences#1_Request'] = 'CChatRoom_SetUserChatGroupPreferences_Request';
protobufs['ChatRoom.SetUserChatGroupPreferences#1_Response'] = 'CChatRoom_SetUserChatGroupPreferences_Response';
protobufs['ChatRoom.DeleteChatMessages#1_Request'] = 'CChatRoom_DeleteChatMessages_Request';
protobufs['ChatRoom.DeleteChatMessages#1_Response'] = 'CChatRoom_DeleteChatMessages_Response';
protobufs['ChatRoomClient.NotifyIncomingChatMessage#1'] = 'CChatRoom_IncomingChatMessage_Notification';
protobufs['ChatRoomClient.NotifyChatMessageModified#1'] = 'CChatRoom_ChatMessageModified_Notification';
protobufs['ChatRoomClient.NotifyMemberStateChange#1'] = 'CChatRoom_MemberStateChange_Notification';
protobufs['ChatRoomClient.NotifyChatRoomHeaderStateChange#1'] = 'CChatRoom_ChatRoomHeaderState_Notification';
protobufs['ChatRoomClient.NotifyChatRoomGroupRoomsChange#1'] = 'CChatRoom_ChatRoomGroupRoomsChange_Notification';
protobufs['ChatRoomClient.NotifyShouldRejoinChatRoomVoiceChat#1'] = 'CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification';
protobufs['ChatRoomClient.NotifyChatGroupUserStateChanged#1'] = 'ChatRoomClient_NotifyChatGroupUserStateChanged_Notification';
protobufs['ChatRoomClient.NotifyAckChatMessageEcho#1'] = 'CChatRoom_AckChatMessage_Notification';
protobufs['ClanChatRooms.GetClanChatRoomInfo#1_Request'] = 'CClanChatRooms_GetClanChatRoomInfo_Request';
protobufs['ClanChatRooms.GetClanChatRoomInfo#1_Response'] = 'CClanChatRooms_GetClanChatRoomInfo_Response';
protobufs['FriendMessages.GetRecentMessages#1_Request'] = 'CFriendMessages_GetRecentMessages_Request';
protobufs['FriendMessages.GetRecentMessages#1_Response'] = 'CFriendMessages_GetRecentMessages_Response';
protobufs['FriendMessages.GetActiveMessageSessions#1_Request'] = 'CFriendsMessages_GetActiveMessageSessions_Request';
protobufs['FriendMessages.GetActiveMessageSessions#1_Response'] = 'CFriendsMessages_GetActiveMessageSessions_Response';
protobufs['FriendMessages.SendMessage#1_Request'] = 'CFriendMessages_SendMessage_Request';
protobufs['FriendMessages.SendMessage#1_Response'] = 'CFriendMessages_SendMessage_Response';
protobufs['FriendMessages.AckMessage#1'] = 'CFriendMessages_AckMessage_Notification';
protobufs['FriendMessages.IsInFriendsUIBeta#1_Request'] = 'CFriendMessages_IsInFriendsUIBeta_Request';
protobufs['FriendMessages.IsInFriendsUIBeta#1_Response'] = 'CFriendMessages_IsInFriendsUIBeta_Response';
protobufs['FriendMessagesClient.IncomingMessage#1'] = 'CFriendMessages_IncomingMessage_Notification';
protobufs['FriendMessagesClient.NotifyAckMessageEcho#1'] = 'CFriendMessages_AckMessage_Notification';
protobufs['Community.GetAppRichPresenceLocalization#1_Request'] = 'CCommunity_GetAppRichPresenceLocalization_Request';
protobufs['Community.GetAppRichPresenceLocalization#1_Response'] = 'CCommunity_GetAppRichPresenceLocalization_Response';
protobufs['UserAccount.CreateFriendInviteToken#1_Request'] = 'CUserAccount_CreateFriendInviteToken_Request';
protobufs['UserAccount.CreateFriendInviteToken#1_Response'] = 'CUserAccount_CreateFriendInviteToken_Response';
protobufs['UserAccount.GetFriendInviteTokens#1_Request'] = 'CUserAccount_GetFriendInviteTokens_Request';
protobufs['UserAccount.GetFriendInviteTokens#1_Response'] = 'CUserAccount_GetFriendInviteTokens_Response';
protobufs['UserAccount.ViewFriendInviteToken#1_Request'] = 'CUserAccount_ViewFriendInviteToken_Request';
protobufs['UserAccount.ViewFriendInviteToken#1_Response'] = 'CUserAccount_ViewFriendInviteToken_Response';
protobufs['UserAccount.RedeemFriendInviteToken#1_Request'] = 'CUserAccount_RedeemFriendInviteToken_Request';
protobufs['UserAccount.RedeemFriendInviteToken#1_Response'] = 'CUserAccount_RedeemFriendInviteToken_Response';
protobufs['UserAccount.RevokeFriendInviteToken#1_Request'] = 'CUserAccount_RevokeFriendInviteToken_Request';
protobufs['UserAccount.RevokeFriendInviteToken#1_Response'] = 'CUserAccount_RevokeFriendInviteToken_Response';
protobufs['DeviceAuth.GetOwnAuthorizedDevices#1_Request'] = 'CDeviceAuth_GetOwnAuthorizedDevices_Request';
protobufs['DeviceAuth.GetOwnAuthorizedDevices#1_Response'] = 'CDeviceAuth_GetOwnAuthorizedDevices_Response';
protobufs['DeviceAuth.AddAuthorizedBorrowers#1_Request'] = 'CDeviceAuth_AddAuthorizedBorrowers_Request';
protobufs['DeviceAuth.AddAuthorizedBorrowers#1_Response'] = 'CDeviceAuth_AddAuthorizedBorrowers_Response';
protobufs['DeviceAuth.RemoveAuthorizedBorrowers#1_Request'] = 'CDeviceAuth_RemoveAuthorizedBorrowers_Request';
protobufs['DeviceAuth.RemoveAuthorizedBorrowers#1_Response'] = 'CDeviceAuth_RemoveAuthorizedBorrowers_Response';
protobufs['DeviceAuth.GetAuthorizedBorrowers#1_Request'] = 'CDeviceAuth_GetAuthorizedBorrowers_Request';
protobufs['DeviceAuth.GetAuthorizedBorrowers#1_Response'] = 'CDeviceAuth_GetAuthorizedBorrowers_Response';
protobufs['ContentServerDirectory.GetManifestRequestCode#1_Request'] = 'CContentServerDirectory_GetManifestRequestCode_Request';
protobufs['ContentServerDirectory.GetManifestRequestCode#1_Response'] = 'CContentServerDirectory_GetManifestRequestCode_Response';
protobufs['SteamNotificationClient.NotificationsReceived#1'] = 'CSteamNotification_NotificationsReceived_Notification';
protobufs['SteamNotification.MarkNotificationsRead#1'] = 'CSteamNotification_MarkNotificationsRead_Notification';

// Make sure that every protobuf we used actually exists
let hadMissingProtobuf = false;
for (let i in protobufs) {
	if (Object.hasOwnProperty.call(Schema, protobufs[i])) {
		continue;
	}

	// The protobuf doesn't exist
	if (i.match(/^\d+$/)) {
		i = EMsg[i] || i;
	}

	console.error(`Protobuf for message ${i} does not exist!`);
	hadMissingProtobuf = true;
}

if (hadMissingProtobuf) {
	throw new Error('One or more protobuf schemas are missing');
}

class SteamUserMessages extends SteamUserConnection {
	/**
	 * Encode a protobuf.
	 * @param {object} proto - The protobuf class
	 * @param {object} data - The data to serialize
	 * @returns {Buffer}
	 * @protected
	 */
	static _encodeProto(proto, data) {
		return proto.encode(data).finish();
	}

	/**
	 * Decode a protobuf.
	 * @param {object} proto - The protobuf class
	 * @param {Buffer|ByteBuffer} encoded - The data to decode
	 * @returns {object}
	 * @protected
	 */
	static _decodeProto(proto, encoded) {
		if (ByteBuffer.isByteBuffer(encoded)) {
			encoded = encoded.toBuffer();
		}

		let decoded = proto.decode(encoded);
		let objNoDefaults = proto.toObject(decoded, {longs: String});
		let objWithDefaults = proto.toObject(decoded, {defaults: true, longs: String});
		return replaceDefaults(objNoDefaults, objWithDefaults);

		function replaceDefaults(noDefaults, withDefaults) {
			if (Array.isArray(withDefaults)) {
				return withDefaults.map((val, idx) => replaceDefaults(noDefaults[idx], val));
			}

			for (let i in withDefaults) {
				if (!Object.hasOwnProperty.call(withDefaults, i)) {
					continue;
				}

				if (withDefaults[i] && typeof withDefaults[i] === 'object' && !Buffer.isBuffer(withDefaults[i])) {
					// Covers both object and array cases, both of which will work
					// Won't replace empty arrays, but that's desired behavior
					withDefaults[i] = replaceDefaults(noDefaults[i], withDefaults[i]);
				} else if (typeof noDefaults[i] === 'undefined' && isReplaceableDefaultValue(withDefaults[i])) {
					withDefaults[i] = null;
				}
			}

			return withDefaults;
		}

		function isReplaceableDefaultValue(val) {
			if (Buffer.isBuffer(val) && val.length == 0) {
				// empty buffer is replaceable
				return true;
			}

			if (Array.isArray(val)) {
				// empty array is not replaceable (empty repeated fields)
				return false;
			}

			if (val === '0') {
				// Zero as a string is replaceable (64-bit integer)
				return true;
			}

			// Anything falsy is true
			return !val;
		}
	}

	/**
	 * @param {int|object} emsgOrHeader
	 * @param {object|Buffer|ByteBuffer} body
	 * @param {function} [callback]
	 * @protected
	 */
	_send(emsgOrHeader, body, callback) {
		// header fields: msg, proto, sourceJobID, targetJobID
		let header = typeof emsgOrHeader === 'object' ? emsgOrHeader : {msg: emsgOrHeader};
		let emsg = header.msg;

		let canWeSend = this.steamID ||
			(
				this._tempSteamID &&
				[EMsg.ChannelEncryptResponse, EMsg.ClientLogon, EMsg.ClientHello, EMsg.ServiceMethodCallFromClientNonAuthed].includes(emsg)
			);
		if (!canWeSend) {
			// We're disconnected, drop it
			this.emit('debug', 'Dropping outgoing message ' + emsg + ' because we\'re not logged on.');
			return;
		}

		const Proto = Schema[protobufs[emsg]];
		if (Proto) {
			header.proto = header.proto || {};
			body = SteamUserMessages._encodeProto(Proto, body);
		} else if (ByteBuffer.isByteBuffer(body)) {
			body = body.toBuffer();
		}

		let jobIdSource = null;
		if (callback) {
			jobIdSource = ++this._currentJobID;
			this._jobs.add(jobIdSource.toString(), callback);
		}

		let emsgName = EMsg[emsg] || emsg;
		if ([EMsg.ServiceMethodCallFromClient, EMsg.ServiceMethodCallFromClientNonAuthed].includes(emsg) && header.proto && header.proto.target_job_name) {
			emsgName = header.proto.target_job_name;
		}

		this.emit(VERBOSE_EMSG_LIST.includes(emsg) ? 'debug-verbose' : 'debug', 'Sending message: ' + emsgName);

		// Make the header
		let hdrBuf;
		if (header.msg == EMsg.ChannelEncryptResponse) {
			// since we're setting up the encrypted channel, we use this very minimal header
			hdrBuf = ByteBuffer.allocate(4 + 8 + 8, ByteBuffer.LITTLE_ENDIAN);
			hdrBuf.writeUint32(header.msg);
			hdrBuf.writeUint64(header.targetJobID || JOBID_NONE);
			hdrBuf.writeUint64(jobIdSource || header.sourceJobID || JOBID_NONE);
		} else if (header.proto) {
			// if we have a protobuf header, use that
			let shouldIncludeSessionId = ![EMsg.ClientHello, EMsg.ServiceMethodCallFromClientNonAuthed].includes(header.msg);
			header.proto.client_sessionid = shouldIncludeSessionId ? (this._sessionID || 0) : 0;
			header.proto.steamid = shouldIncludeSessionId ? (this.steamID || this._tempSteamID).getSteamID64() : '0';
			header.proto.jobid_source = jobIdSource || header.proto.jobid_source || header.sourceJobID || JOBID_NONE;
			header.proto.jobid_target = header.proto.jobid_target || header.targetJobID || JOBID_NONE;
			let hdrProtoBuf = SteamUserMessages._encodeProto(Schema.CMsgProtoBufHeader, header.proto);
			hdrBuf = ByteBuffer.allocate(4 + 4 + hdrProtoBuf.length, ByteBuffer.LITTLE_ENDIAN);
			hdrBuf.writeUint32(header.msg | PROTO_MASK);
			hdrBuf.writeUint32(hdrProtoBuf.length);
			hdrBuf.append(hdrProtoBuf);
		} else {
			// this is the standard non-protobuf extended header
			hdrBuf = ByteBuffer.allocate(4 + 1 + 2 + 8 + 8 + 1 + 8 + 4, ByteBuffer.LITTLE_ENDIAN);
			hdrBuf.writeUint32(header.msg);
			hdrBuf.writeByte(36);
			hdrBuf.writeUint16(2);
			hdrBuf.writeUint64(header.targetJobID || JOBID_NONE);
			hdrBuf.writeUint64(jobIdSource || header.sourceJobID || JOBID_NONE);
			hdrBuf.writeByte(239);
			hdrBuf.writeUint64((this.steamID || this._tempSteamID).getSteamID64());
			hdrBuf.writeUint32(this._sessionID || 0);
		}

		let outputBuffer = Buffer.concat([hdrBuf.flip().toBuffer(), body]);
		this.emit('debug-traffic-outgoing', outputBuffer, header.msg);
		this._connection.send(outputBuffer);
	}

	/**
	 * Handles a raw binary netmessage by parsing the header and routing it appropriately
	 * @param {Buffer|string} buffer
	 * @param {BaseConnection} [conn]
	 * @param {string} [multiId]
	 * @protected
	 */
	_handleNetMessage(buffer, conn, multiId) {
		if (conn && conn != this._connection) {
			let ghostConnId = conn.connectionType[0] + conn.connectionId;
			let expectedConnId = this._connection ? (this._connection.connectionType[0] + this._connection.connectionId) : 'NO CONNECTION';
			this.emit('debug', `Received net message from ghost connection ${ghostConnId} (expected ${expectedConnId})`);
			return;
		}

		if (this._useMessageQueue && !multiId) {
			// Multi sub-messages skip the queue because we need messages contained in a decoded multi to be processed first
			this._incomingMessageQueue.push(arguments);
			this.emit('debug', `Enqueued incoming message; queue size is now ${this._incomingMessageQueue.length}`);
			return;
		}

		if (buffer === '__CLOSE__') {
			// This is an enqueued connection closure
			this._handleConnectionClose(conn);
			return;
		}

		let buf = ByteBuffer.wrap(buffer, ByteBuffer.LITTLE_ENDIAN);

		let rawEMsg = buf.readUint32();
		let eMsg = rawEMsg & ~PROTO_MASK;
		let isProtobuf = !!(rawEMsg & PROTO_MASK);

		this.emit('debug-traffic-incoming', buffer, eMsg);

		let header = {msg: eMsg};
		if ([EMsg.ChannelEncryptRequest, EMsg.ChannelEncryptResult].includes(eMsg)) {
			// for encryption setup, we just have a very small header with two fields
			header.targetJobID = buf.readUint64().toString();
			header.sourceJobID = buf.readUint64().toString();
		} else if (isProtobuf) {
			// decode the protobuf header
			let headerLength = buf.readUint32();
			header.proto = SteamUserMessages._decodeProto(Schema.CMsgProtoBufHeader, buf.slice(buf.offset, buf.offset + headerLength));
			buf.skip(headerLength);

			header.targetJobID = header.proto.jobid_target && header.proto.jobid_target.toString();
			header.sourceJobID = header.proto.jobid_source && header.proto.jobid_source.toString();
			header.steamID = header.proto.steamid && header.proto.steamid.toString();
			header.sessionID = header.proto.client_sessionid;
		} else {
			// decode the extended header
			buf.skip(3); // 1 byte for header size (fixed at 36), 2 bytes for header version (fixed at 2)
			header.targetJobID = buf.readUint64().toString();
			header.sourceJobID = buf.readUint64().toString();
			buf.skip(1); // 1 byte for header canary (fixed at 239)
			header.steamID = buf.readUint64().toString();
			header.sessionID = buf.readUint32();
		}

		let sessionID = (header.proto && header.proto.client_sessionid) || header.sessionID;
		let steamID = (header.proto && header.proto.steamid) || header.steamID;
		let ourCurrentSteamID = this.steamID ? this.steamID.toString() : null;
		if (steamID && sessionID && (sessionID != this._sessionID || steamID.toString() != ourCurrentSteamID) && steamID != 0) {
			// TODO if we get a new sessionid, should we check if it matches a previously-closed session? probably not necessary...
			this._sessionID = sessionID;
			this.steamID = new SteamID(steamID.toString());
			delete this._tempSteamID;
		}

		this._handleMessage(header, buf.slice(), conn, multiId);
	}

	/**
	 * Handles and routes a parsed message
	 * @param {object} header
	 * @param {ByteBuffer} bodyBuf
	 * @param {BaseConnection} [conn]
	 * @param {string} [multiId]
	 * @protected
	 */
	_handleMessage(header, bodyBuf, conn, multiId) {
		// Is this a multi? If yes, short-circuit and just process it now.
		if (header.msg == EMsg.Multi) {
			this._processMulti(header, SteamUserMessages._decodeProto(Schema[protobufs[EMsg.Multi]], bodyBuf), conn);
			return;
		}

		let msgName = EMsg[header.msg] || header.msg;
		let handlerName = header.msg;

		let debugPrefix = multiId ? `[${multiId}] ` : (conn ? `[${conn.connectionType[0]}${conn.connectionId}] ` : '');

		let isServiceMethodMsg = [EMsg.ServiceMethod, EMsg.ServiceMethodResponse].includes(header.msg);
		if (isServiceMethodMsg) {
			if (header.proto && header.proto.target_job_name) {
				handlerName = msgName = header.proto.target_job_name;
				if (header.msg == EMsg.ServiceMethodResponse) {
					handlerName += '_Response';
					msgName += '_Response';
				}
			} else {
				this.emit('debug', debugPrefix + 'Got ' + (header.msg == EMsg.ServiceMethod ? 'ServiceMethod' : 'ServiceMethodResponse') + ' without target_job_name');
				return;
			}
		}

		if (!isServiceMethodMsg && header.proto && header.proto.target_job_name) {
			this.emit('debug', debugPrefix + 'Got unknown target_job_name ' + header.proto.target_job_name + ' for msg ' + msgName);
		}

		if (!this._handlerManager.hasHandler(handlerName) && this._jobs.get(header.targetJobID.toString()) === null) {
			this.emit(VERBOSE_EMSG_LIST.includes(header.msg) ? 'debug-verbose' : 'debug', debugPrefix + 'Unhandled message: ' + msgName);
			return;
		}

		let body = bodyBuf;
		if (protobufs[handlerName]) {
			body = SteamUserMessages._decodeProto(Schema[protobufs[handlerName]], bodyBuf);
		}

		let handledMessageDebugMsg = debugPrefix + 'Handled message: ' + msgName;
		if (header.msg == EMsg.ClientLogOnResponse) {
			handledMessageDebugMsg += ` (${EResult[body.eresult] || body.eresult})`;
		}
		this.emit(VERBOSE_EMSG_LIST.includes(header.msg) ? 'debug-verbose' : 'debug', handledMessageDebugMsg);

		let cb = null;
		if (header.sourceJobID != JOBID_NONE) {
			// this message expects a response. make a callback we can pass to the end-user.
			cb = (emsgOrHeader, body) => {
				// once invoked the callback should set the jobid_target
				let responseHeader = typeof emsgOrHeader === 'object' ? emsgOrHeader : {msg: emsgOrHeader};
				let emsg = responseHeader.msg;

				if (protobufs[emsg]) {
					responseHeader.proto = {jobid_target: header.sourceJobID};
				} else {
					responseHeader.targetJobID = header.sourceJobID;
				}

				this._send(responseHeader, body);
			};
		}

		let jobCallback = this._jobs.get(header.targetJobID.toString());
		if (jobCallback) {
			// this is a response to something, so invoke the appropriate callback
			jobCallback.call(this, body, header, cb);
		} else {
			this._handlerManager.emit(this, handlerName, body, header, cb);
		}
	}

	/**
	 * @param {object} header
	 * @param {object} body
	 * @param {object} conn
	 * @returns {Promise<void>}
	 * @protected
	 */
	async _processMulti(header, body, conn) {
		let multiId = conn.connectionType[0] + conn.connectionId + '#' + (++this._multiCount);
		this.emit('debug-verbose', `=== Processing ${body.size_unzipped ? 'gzipped multi msg' : 'multi msg'} ${multiId} (${body.message_body.length} bytes) ===`);

		let payload = body.message_body;

		// Enable the message queue while we're unzipping the message (or waiting until the next event loop cycle).
		// This prevents any messages from getting processed out of order.
		this._useMessageQueue = true;

		if (body.size_unzipped) {
			try {
				payload = await new Promise((resolve, reject) => {
					Zlib.gunzip(payload, (err, unzipped) => {
						if (err) {
							return reject(err);
						}

						resolve(unzipped);
					});
				});
			} catch (ex) {
				this.emit('error', ex);
				this._disconnect(true);
				return;
			}
		} else {
			// Await a setImmediate promise to guarantee that multi msg processing always takes at least one iteration of the event loop.
			// This avoids message queue processing shenanigans. Waiting until the next iteration of the event loop enables
			// _handleNetMessage at the end of this method to return immediately, which will thus exit the clear-queue loop
			// because the queue got re-enabled. Prevents the queue from being cleared in multiple places at once.
			await new Promise(resolve => setImmediate(resolve));
		}

		if (!this._connection || this._connection != conn) {
			this.emit('debug', `=== Bailing out on processing multi msg ${multiId} because our connection is ${!this._connection ? 'lost' : 'different'}! ===`);
			return;
		}

		while (payload.length && (this.steamID || this._tempSteamID)) {
			let subSize = payload.readUInt32LE(0);
			this._handleNetMessage(payload.slice(4, 4 + subSize), conn, multiId);
			payload = payload.slice(4 + subSize);
		}

		this.emit('debug-verbose', `=== Finished processing multi msg ${multiId}; now clearing queue of size ${this._incomingMessageQueue.length} ===`);

		// Go ahead and process anything in the queue now. First disable the message queue. We don't need to worry about
		// newly-received messages sneaking in ahead of the queue being cleared, since message processing is synchronous.
		// If we encounter another multi msg, the message queue will get re-enabled.
		this._useMessageQueue = false;

		// Continue to pop items from the message queue until it's empty, or it gets re-enabled. If the message queue gets
		// re-enabled, immediately stop popping items from it to avoid stuff getting out of order.
		while (this._incomingMessageQueue.length > 0 && !this._useMessageQueue) {
			this._handleNetMessage.apply(this, this._incomingMessageQueue.shift());
		}

		if (this._incomingMessageQueue.length > 0) {
			this.emit('debug-verbose', `[${multiId}] Message queue processing ended early with ${this._incomingMessageQueue.length} elements remaining`);
		}
	}

	/**
	 * Send a unified message.
	 * @param {string} methodName - In format Interface.Method#Version, e.g. Foo.DoThing#1
	 * @param {object} methodData
	 * @param {function} [callback]
	 * @protected
	 */
	_sendUnified(methodName, methodData, callback) {
		let Proto = Schema[protobufs[methodName + (callback ? '_Request' : '')]];
		let header = {
			msg: EMsg.ServiceMethodCallFromClient,
			proto: {
				target_job_name: methodName
			}
		};

		this._send(header, SteamUserMessages._encodeProto(Proto, methodData), callback);
	}

	_getLoginSession() {
		if (!this._loginSession) {
			let options = {
				transport: new CMAuthTransport(this),
				machineId: this._logOnDetails?.machine_id
			};

			let customMachineName = this._logOnDetails?.machine_name || '';
			if (customMachineName.length > 0) {
				options.machineFriendlyName = customMachineName;
			}

			this._loginSession = new LoginSession(EAuthTokenPlatformType.SteamClient, options);
		}

		return this._loginSession;
	}
}

module.exports = SteamUserMessages;
