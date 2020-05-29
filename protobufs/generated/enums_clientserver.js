/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * EMsg enum.
     * @exports EMsg
     * @enum {string}
     * @property {number} k_EMsgInvalid=0 k_EMsgInvalid value
     * @property {number} k_EMsgMulti=1 k_EMsgMulti value
     * @property {number} k_EMsgProtobufWrapped=2 k_EMsgProtobufWrapped value
     * @property {number} k_EMsgBaseGeneral=100 k_EMsgBaseGeneral value
     * @property {number} k_EMsgGenericReply=100 k_EMsgGenericReply value
     * @property {number} k_EMsgDestJobFailed=113 k_EMsgDestJobFailed value
     * @property {number} k_EMsgAlert=115 k_EMsgAlert value
     * @property {number} k_EMsgSCIDRequest=120 k_EMsgSCIDRequest value
     * @property {number} k_EMsgSCIDResponse=121 k_EMsgSCIDResponse value
     * @property {number} k_EMsgJobHeartbeat=123 k_EMsgJobHeartbeat value
     * @property {number} k_EMsgHubConnect=124 k_EMsgHubConnect value
     * @property {number} k_EMsgSubscribe=126 k_EMsgSubscribe value
     * @property {number} k_EMRouteMessage=127 k_EMRouteMessage value
     * @property {number} k_EMsgWGRequest=130 k_EMsgWGRequest value
     * @property {number} k_EMsgWGResponse=131 k_EMsgWGResponse value
     * @property {number} k_EMsgKeepAlive=132 k_EMsgKeepAlive value
     * @property {number} k_EMsgWebAPIJobRequest=133 k_EMsgWebAPIJobRequest value
     * @property {number} k_EMsgWebAPIJobResponse=134 k_EMsgWebAPIJobResponse value
     * @property {number} k_EMsgClientSessionStart=135 k_EMsgClientSessionStart value
     * @property {number} k_EMsgClientSessionEnd=136 k_EMsgClientSessionEnd value
     * @property {number} k_EMsgClientSessionUpdate=137 k_EMsgClientSessionUpdate value
     * @property {number} k_EMsgStatsDeprecated=138 k_EMsgStatsDeprecated value
     * @property {number} k_EMsgPing=139 k_EMsgPing value
     * @property {number} k_EMsgPingResponse=140 k_EMsgPingResponse value
     * @property {number} k_EMsgStats=141 k_EMsgStats value
     * @property {number} k_EMsgRequestFullStatsBlock=142 k_EMsgRequestFullStatsBlock value
     * @property {number} k_EMsgLoadDBOCacheItem=143 k_EMsgLoadDBOCacheItem value
     * @property {number} k_EMsgLoadDBOCacheItemResponse=144 k_EMsgLoadDBOCacheItemResponse value
     * @property {number} k_EMsgInvalidateDBOCacheItems=145 k_EMsgInvalidateDBOCacheItems value
     * @property {number} k_EMsgServiceMethod=146 k_EMsgServiceMethod value
     * @property {number} k_EMsgServiceMethodResponse=147 k_EMsgServiceMethodResponse value
     * @property {number} k_EMsgClientPackageVersions=148 k_EMsgClientPackageVersions value
     * @property {number} k_EMsgTimestampRequest=149 k_EMsgTimestampRequest value
     * @property {number} k_EMsgTimestampResponse=150 k_EMsgTimestampResponse value
     * @property {number} k_EMsgServiceMethodCallFromClient=151 k_EMsgServiceMethodCallFromClient value
     * @property {number} k_EMsgServiceMethodSendToClient=152 k_EMsgServiceMethodSendToClient value
     * @property {number} k_EMsgBaseShell=200 k_EMsgBaseShell value
     * @property {number} k_EMsgAssignSysID=200 k_EMsgAssignSysID value
     * @property {number} k_EMsgExit=201 k_EMsgExit value
     * @property {number} k_EMsgDirRequest=202 k_EMsgDirRequest value
     * @property {number} k_EMsgDirResponse=203 k_EMsgDirResponse value
     * @property {number} k_EMsgZipRequest=204 k_EMsgZipRequest value
     * @property {number} k_EMsgZipResponse=205 k_EMsgZipResponse value
     * @property {number} k_EMsgUpdateRecordResponse=215 k_EMsgUpdateRecordResponse value
     * @property {number} k_EMsgUpdateCreditCardRequest=221 k_EMsgUpdateCreditCardRequest value
     * @property {number} k_EMsgUpdateUserBanResponse=225 k_EMsgUpdateUserBanResponse value
     * @property {number} k_EMsgPrepareToExit=226 k_EMsgPrepareToExit value
     * @property {number} k_EMsgContentDescriptionUpdate=227 k_EMsgContentDescriptionUpdate value
     * @property {number} k_EMsgTestResetServer=228 k_EMsgTestResetServer value
     * @property {number} k_EMsgUniverseChanged=229 k_EMsgUniverseChanged value
     * @property {number} k_EMsgShellConfigInfoUpdate=230 k_EMsgShellConfigInfoUpdate value
     * @property {number} k_EMsgRequestWindowsEventLogEntries=233 k_EMsgRequestWindowsEventLogEntries value
     * @property {number} k_EMsgProvideWindowsEventLogEntries=234 k_EMsgProvideWindowsEventLogEntries value
     * @property {number} k_EMsgShellSearchLogs=235 k_EMsgShellSearchLogs value
     * @property {number} k_EMsgShellSearchLogsResponse=236 k_EMsgShellSearchLogsResponse value
     * @property {number} k_EMsgShellCheckWindowsUpdates=237 k_EMsgShellCheckWindowsUpdates value
     * @property {number} k_EMsgShellCheckWindowsUpdatesResponse=238 k_EMsgShellCheckWindowsUpdatesResponse value
     * @property {number} k_EMsgTestFlushDelayedSQL=240 k_EMsgTestFlushDelayedSQL value
     * @property {number} k_EMsgTestFlushDelayedSQLResponse=241 k_EMsgTestFlushDelayedSQLResponse value
     * @property {number} k_EMsgEnsureExecuteScheduledTask_TEST=242 k_EMsgEnsureExecuteScheduledTask_TEST value
     * @property {number} k_EMsgEnsureExecuteScheduledTaskResponse_TEST=243 k_EMsgEnsureExecuteScheduledTaskResponse_TEST value
     * @property {number} k_EMsgUpdateScheduledTaskEnableState_TEST=244 k_EMsgUpdateScheduledTaskEnableState_TEST value
     * @property {number} k_EMsgUpdateScheduledTaskEnableStateResponse_TEST=245 k_EMsgUpdateScheduledTaskEnableStateResponse_TEST value
     * @property {number} k_EMsgContentDescriptionDeltaUpdate=246 k_EMsgContentDescriptionDeltaUpdate value
     * @property {number} k_EMsgBaseGM=300 k_EMsgBaseGM value
     * @property {number} k_EMsgHeartbeat=300 k_EMsgHeartbeat value
     * @property {number} k_EMsgShellFailed=301 k_EMsgShellFailed value
     * @property {number} k_EMsgExitShells=307 k_EMsgExitShells value
     * @property {number} k_EMsgExitShell=308 k_EMsgExitShell value
     * @property {number} k_EMsgGracefulExitShell=309 k_EMsgGracefulExitShell value
     * @property {number} k_EMsgLicenseProcessingComplete=316 k_EMsgLicenseProcessingComplete value
     * @property {number} k_EMsgSetTestFlag=317 k_EMsgSetTestFlag value
     * @property {number} k_EMsgQueuedEmailsComplete=318 k_EMsgQueuedEmailsComplete value
     * @property {number} k_EMsgGMReportPHPError=319 k_EMsgGMReportPHPError value
     * @property {number} k_EMsgGMDRMSync=320 k_EMsgGMDRMSync value
     * @property {number} k_EMsgPhysicalBoxInventory=321 k_EMsgPhysicalBoxInventory value
     * @property {number} k_EMsgUpdateConfigFile=322 k_EMsgUpdateConfigFile value
     * @property {number} k_EMsgTestInitDB=323 k_EMsgTestInitDB value
     * @property {number} k_EMsgGMWriteConfigToSQL=324 k_EMsgGMWriteConfigToSQL value
     * @property {number} k_EMsgGMLoadActivationCodes=325 k_EMsgGMLoadActivationCodes value
     * @property {number} k_EMsgGMQueueForFBS=326 k_EMsgGMQueueForFBS value
     * @property {number} k_EMsgGMSchemaConversionResults=327 k_EMsgGMSchemaConversionResults value
     * @property {number} k_EMsgGMWriteShellFailureToSQL=329 k_EMsgGMWriteShellFailureToSQL value
     * @property {number} k_EMsgGMWriteStatsToSOS=330 k_EMsgGMWriteStatsToSOS value
     * @property {number} k_EMsgGMGetServiceMethodRouting=331 k_EMsgGMGetServiceMethodRouting value
     * @property {number} k_EMsgGMGetServiceMethodRoutingResponse=332 k_EMsgGMGetServiceMethodRoutingResponse value
     * @property {number} k_EMsgGMTestNextBuildSchemaConversion=334 k_EMsgGMTestNextBuildSchemaConversion value
     * @property {number} k_EMsgGMTestNextBuildSchemaConversionResponse=335 k_EMsgGMTestNextBuildSchemaConversionResponse value
     * @property {number} k_EMsgExpectShellRestart=336 k_EMsgExpectShellRestart value
     * @property {number} k_EMsgHotFixProgress=337 k_EMsgHotFixProgress value
     * @property {number} k_EMsgBaseAIS=400 k_EMsgBaseAIS value
     * @property {number} k_EMsgAISRequestContentDescription=402 k_EMsgAISRequestContentDescription value
     * @property {number} k_EMsgAISUpdateAppInfo=403 k_EMsgAISUpdateAppInfo value
     * @property {number} k_EMsgAISGetPackageChangeNumber=405 k_EMsgAISGetPackageChangeNumber value
     * @property {number} k_EMsgAISGetPackageChangeNumberResponse=406 k_EMsgAISGetPackageChangeNumberResponse value
     * @property {number} k_EMsgAIGetAppGCFlags=423 k_EMsgAIGetAppGCFlags value
     * @property {number} k_EMsgAIGetAppGCFlagsResponse=424 k_EMsgAIGetAppGCFlagsResponse value
     * @property {number} k_EMsgAIGetAppList=425 k_EMsgAIGetAppList value
     * @property {number} k_EMsgAIGetAppListResponse=426 k_EMsgAIGetAppListResponse value
     * @property {number} k_EMsgAISGetCouponDefinition=429 k_EMsgAISGetCouponDefinition value
     * @property {number} k_EMsgAISGetCouponDefinitionResponse=430 k_EMsgAISGetCouponDefinitionResponse value
     * @property {number} k_EMsgAISUpdateSlaveContentDescription=431 k_EMsgAISUpdateSlaveContentDescription value
     * @property {number} k_EMsgAISUpdateSlaveContentDescriptionResponse=432 k_EMsgAISUpdateSlaveContentDescriptionResponse value
     * @property {number} k_EMsgAISTestEnableGC=433 k_EMsgAISTestEnableGC value
     * @property {number} k_EMsgBaseAM=500 k_EMsgBaseAM value
     * @property {number} k_EMsgAMUpdateUserBanRequest=504 k_EMsgAMUpdateUserBanRequest value
     * @property {number} k_EMsgAMAddLicense=505 k_EMsgAMAddLicense value
     * @property {number} k_EMsgAMSendSystemIMToUser=508 k_EMsgAMSendSystemIMToUser value
     * @property {number} k_EMsgAMExtendLicense=509 k_EMsgAMExtendLicense value
     * @property {number} k_EMsgAMAddMinutesToLicense=510 k_EMsgAMAddMinutesToLicense value
     * @property {number} k_EMsgAMCancelLicense=511 k_EMsgAMCancelLicense value
     * @property {number} k_EMsgAMInitPurchase=512 k_EMsgAMInitPurchase value
     * @property {number} k_EMsgAMPurchaseResponse=513 k_EMsgAMPurchaseResponse value
     * @property {number} k_EMsgAMGetFinalPrice=514 k_EMsgAMGetFinalPrice value
     * @property {number} k_EMsgAMGetFinalPriceResponse=515 k_EMsgAMGetFinalPriceResponse value
     * @property {number} k_EMsgAMGetLegacyGameKey=516 k_EMsgAMGetLegacyGameKey value
     * @property {number} k_EMsgAMGetLegacyGameKeyResponse=517 k_EMsgAMGetLegacyGameKeyResponse value
     * @property {number} k_EMsgAMFindHungTransactions=518 k_EMsgAMFindHungTransactions value
     * @property {number} k_EMsgAMSetAccountTrustedRequest=519 k_EMsgAMSetAccountTrustedRequest value
     * @property {number} k_EMsgAMCancelPurchase=522 k_EMsgAMCancelPurchase value
     * @property {number} k_EMsgAMNewChallenge=523 k_EMsgAMNewChallenge value
     * @property {number} k_EMsgAMLoadOEMTickets=524 k_EMsgAMLoadOEMTickets value
     * @property {number} k_EMsgAMFixPendingPurchase=525 k_EMsgAMFixPendingPurchase value
     * @property {number} k_EMsgAMFixPendingPurchaseResponse=526 k_EMsgAMFixPendingPurchaseResponse value
     * @property {number} k_EMsgAMIsUserBanned=527 k_EMsgAMIsUserBanned value
     * @property {number} k_EMsgAMRegisterKey=528 k_EMsgAMRegisterKey value
     * @property {number} k_EMsgAMLoadActivationCodes=529 k_EMsgAMLoadActivationCodes value
     * @property {number} k_EMsgAMLoadActivationCodesResponse=530 k_EMsgAMLoadActivationCodesResponse value
     * @property {number} k_EMsgAMLookupKeyResponse=531 k_EMsgAMLookupKeyResponse value
     * @property {number} k_EMsgAMLookupKey=532 k_EMsgAMLookupKey value
     * @property {number} k_EMsgAMChatCleanup=533 k_EMsgAMChatCleanup value
     * @property {number} k_EMsgAMClanCleanup=534 k_EMsgAMClanCleanup value
     * @property {number} k_EMsgAMFixPendingRefund=535 k_EMsgAMFixPendingRefund value
     * @property {number} k_EMsgAMReverseChargeback=536 k_EMsgAMReverseChargeback value
     * @property {number} k_EMsgAMReverseChargebackResponse=537 k_EMsgAMReverseChargebackResponse value
     * @property {number} k_EMsgAMClanCleanupList=538 k_EMsgAMClanCleanupList value
     * @property {number} k_EMsgAMGetLicenses=539 k_EMsgAMGetLicenses value
     * @property {number} k_EMsgAMGetLicensesResponse=540 k_EMsgAMGetLicensesResponse value
     * @property {number} k_EMsgAMSendCartRepurchase=541 k_EMsgAMSendCartRepurchase value
     * @property {number} k_EMsgAMSendCartRepurchaseResponse=542 k_EMsgAMSendCartRepurchaseResponse value
     * @property {number} k_EMsgAllowUserToPlayQuery=550 k_EMsgAllowUserToPlayQuery value
     * @property {number} k_EMsgAllowUserToPlayResponse=551 k_EMsgAllowUserToPlayResponse value
     * @property {number} k_EMsgAMVerfiyUser=552 k_EMsgAMVerfiyUser value
     * @property {number} k_EMsgAMClientNotPlaying=553 k_EMsgAMClientNotPlaying value
     * @property {number} k_EMsgAMClientRequestFriendship=554 k_EMsgAMClientRequestFriendship value
     * @property {number} k_EMsgAMRelayPublishStatus=555 k_EMsgAMRelayPublishStatus value
     * @property {number} k_EMsgAMInitPurchaseResponse=560 k_EMsgAMInitPurchaseResponse value
     * @property {number} k_EMsgAMRevokePurchaseResponse=561 k_EMsgAMRevokePurchaseResponse value
     * @property {number} k_EMsgAMRefreshGuestPasses=563 k_EMsgAMRefreshGuestPasses value
     * @property {number} k_EMsgAMGrantGuestPasses=566 k_EMsgAMGrantGuestPasses value
     * @property {number} k_EMsgAMClanDataUpdated=567 k_EMsgAMClanDataUpdated value
     * @property {number} k_EMsgAMReloadAccount=568 k_EMsgAMReloadAccount value
     * @property {number} k_EMsgAMClientChatMsgRelay=569 k_EMsgAMClientChatMsgRelay value
     * @property {number} k_EMsgAMChatMulti=570 k_EMsgAMChatMulti value
     * @property {number} k_EMsgAMClientChatInviteRelay=571 k_EMsgAMClientChatInviteRelay value
     * @property {number} k_EMsgAMChatInvite=572 k_EMsgAMChatInvite value
     * @property {number} k_EMsgAMClientJoinChatRelay=573 k_EMsgAMClientJoinChatRelay value
     * @property {number} k_EMsgAMClientChatMemberInfoRelay=574 k_EMsgAMClientChatMemberInfoRelay value
     * @property {number} k_EMsgAMPublishChatMemberInfo=575 k_EMsgAMPublishChatMemberInfo value
     * @property {number} k_EMsgAMClientAcceptFriendInvite=576 k_EMsgAMClientAcceptFriendInvite value
     * @property {number} k_EMsgAMChatEnter=577 k_EMsgAMChatEnter value
     * @property {number} k_EMsgAMClientPublishRemovalFromSource=578 k_EMsgAMClientPublishRemovalFromSource value
     * @property {number} k_EMsgAMChatActionResult=579 k_EMsgAMChatActionResult value
     * @property {number} k_EMsgAMFindAccounts=580 k_EMsgAMFindAccounts value
     * @property {number} k_EMsgAMFindAccountsResponse=581 k_EMsgAMFindAccountsResponse value
     * @property {number} k_EMsgAMRequestAccountData=582 k_EMsgAMRequestAccountData value
     * @property {number} k_EMsgAMRequestAccountDataResponse=583 k_EMsgAMRequestAccountDataResponse value
     * @property {number} k_EMsgAMSetAccountFlags=584 k_EMsgAMSetAccountFlags value
     * @property {number} k_EMsgAMCreateClan=586 k_EMsgAMCreateClan value
     * @property {number} k_EMsgAMCreateClanResponse=587 k_EMsgAMCreateClanResponse value
     * @property {number} k_EMsgAMGetClanDetails=588 k_EMsgAMGetClanDetails value
     * @property {number} k_EMsgAMGetClanDetailsResponse=589 k_EMsgAMGetClanDetailsResponse value
     * @property {number} k_EMsgAMSetPersonaName=590 k_EMsgAMSetPersonaName value
     * @property {number} k_EMsgAMSetAvatar=591 k_EMsgAMSetAvatar value
     * @property {number} k_EMsgAMAuthenticateUser=592 k_EMsgAMAuthenticateUser value
     * @property {number} k_EMsgAMAuthenticateUserResponse=593 k_EMsgAMAuthenticateUserResponse value
     * @property {number} k_EMsgAMP2PIntroducerMessage=596 k_EMsgAMP2PIntroducerMessage value
     * @property {number} k_EMsgClientChatAction=597 k_EMsgClientChatAction value
     * @property {number} k_EMsgAMClientChatActionRelay=598 k_EMsgAMClientChatActionRelay value
     * @property {number} k_EMsgBaseVS=600 k_EMsgBaseVS value
     * @property {number} k_EMsgReqChallenge=600 k_EMsgReqChallenge value
     * @property {number} k_EMsgVACResponse=601 k_EMsgVACResponse value
     * @property {number} k_EMsgReqChallengeTest=602 k_EMsgReqChallengeTest value
     * @property {number} k_EMsgVSMarkCheat=604 k_EMsgVSMarkCheat value
     * @property {number} k_EMsgVSAddCheat=605 k_EMsgVSAddCheat value
     * @property {number} k_EMsgVSPurgeCodeModDB=606 k_EMsgVSPurgeCodeModDB value
     * @property {number} k_EMsgVSGetChallengeResults=607 k_EMsgVSGetChallengeResults value
     * @property {number} k_EMsgVSChallengeResultText=608 k_EMsgVSChallengeResultText value
     * @property {number} k_EMsgVSReportLingerer=609 k_EMsgVSReportLingerer value
     * @property {number} k_EMsgVSRequestManagedChallenge=610 k_EMsgVSRequestManagedChallenge value
     * @property {number} k_EMsgVSLoadDBFinished=611 k_EMsgVSLoadDBFinished value
     * @property {number} k_EMsgBaseDRMS=625 k_EMsgBaseDRMS value
     * @property {number} k_EMsgDRMBuildBlobRequest=628 k_EMsgDRMBuildBlobRequest value
     * @property {number} k_EMsgDRMBuildBlobResponse=629 k_EMsgDRMBuildBlobResponse value
     * @property {number} k_EMsgDRMResolveGuidRequest=630 k_EMsgDRMResolveGuidRequest value
     * @property {number} k_EMsgDRMResolveGuidResponse=631 k_EMsgDRMResolveGuidResponse value
     * @property {number} k_EMsgDRMVariabilityReport=633 k_EMsgDRMVariabilityReport value
     * @property {number} k_EMsgDRMVariabilityReportResponse=634 k_EMsgDRMVariabilityReportResponse value
     * @property {number} k_EMsgDRMStabilityReport=635 k_EMsgDRMStabilityReport value
     * @property {number} k_EMsgDRMStabilityReportResponse=636 k_EMsgDRMStabilityReportResponse value
     * @property {number} k_EMsgDRMDetailsReportRequest=637 k_EMsgDRMDetailsReportRequest value
     * @property {number} k_EMsgDRMDetailsReportResponse=638 k_EMsgDRMDetailsReportResponse value
     * @property {number} k_EMsgDRMProcessFile=639 k_EMsgDRMProcessFile value
     * @property {number} k_EMsgDRMAdminUpdate=640 k_EMsgDRMAdminUpdate value
     * @property {number} k_EMsgDRMAdminUpdateResponse=641 k_EMsgDRMAdminUpdateResponse value
     * @property {number} k_EMsgDRMSync=642 k_EMsgDRMSync value
     * @property {number} k_EMsgDRMSyncResponse=643 k_EMsgDRMSyncResponse value
     * @property {number} k_EMsgDRMProcessFileResponse=644 k_EMsgDRMProcessFileResponse value
     * @property {number} k_EMsgDRMEmptyGuidCache=645 k_EMsgDRMEmptyGuidCache value
     * @property {number} k_EMsgDRMEmptyGuidCacheResponse=646 k_EMsgDRMEmptyGuidCacheResponse value
     * @property {number} k_EMsgBaseCS=650 k_EMsgBaseCS value
     * @property {number} k_EMsgBaseClient=700 k_EMsgBaseClient value
     * @property {number} k_EMsgClientLogOn_Deprecated=701 k_EMsgClientLogOn_Deprecated value
     * @property {number} k_EMsgClientAnonLogOn_Deprecated=702 k_EMsgClientAnonLogOn_Deprecated value
     * @property {number} k_EMsgClientHeartBeat=703 k_EMsgClientHeartBeat value
     * @property {number} k_EMsgClientVACResponse=704 k_EMsgClientVACResponse value
     * @property {number} k_EMsgClientGamesPlayed_obsolete=705 k_EMsgClientGamesPlayed_obsolete value
     * @property {number} k_EMsgClientLogOff=706 k_EMsgClientLogOff value
     * @property {number} k_EMsgClientNoUDPConnectivity=707 k_EMsgClientNoUDPConnectivity value
     * @property {number} k_EMsgClientConnectionStats=710 k_EMsgClientConnectionStats value
     * @property {number} k_EMsgClientPingResponse=712 k_EMsgClientPingResponse value
     * @property {number} k_EMsgClientRemoveFriend=714 k_EMsgClientRemoveFriend value
     * @property {number} k_EMsgClientGamesPlayedNoDataBlob=715 k_EMsgClientGamesPlayedNoDataBlob value
     * @property {number} k_EMsgClientChangeStatus=716 k_EMsgClientChangeStatus value
     * @property {number} k_EMsgClientVacStatusResponse=717 k_EMsgClientVacStatusResponse value
     * @property {number} k_EMsgClientFriendMsg=718 k_EMsgClientFriendMsg value
     * @property {number} k_EMsgClientGameConnect_obsolete=719 k_EMsgClientGameConnect_obsolete value
     * @property {number} k_EMsgClientGamesPlayed2_obsolete=720 k_EMsgClientGamesPlayed2_obsolete value
     * @property {number} k_EMsgClientGameEnded_obsolete=721 k_EMsgClientGameEnded_obsolete value
     * @property {number} k_EMsgClientSystemIM=726 k_EMsgClientSystemIM value
     * @property {number} k_EMsgClientSystemIMAck=727 k_EMsgClientSystemIMAck value
     * @property {number} k_EMsgClientGetLicenses=728 k_EMsgClientGetLicenses value
     * @property {number} k_EMsgClientGetLegacyGameKey=730 k_EMsgClientGetLegacyGameKey value
     * @property {number} k_EMsgClientContentServerLogOn_Deprecated=731 k_EMsgClientContentServerLogOn_Deprecated value
     * @property {number} k_EMsgClientAckVACBan2=732 k_EMsgClientAckVACBan2 value
     * @property {number} k_EMsgClientGetPurchaseReceipts=736 k_EMsgClientGetPurchaseReceipts value
     * @property {number} k_EMsgClientGamesPlayed3_obsolete=738 k_EMsgClientGamesPlayed3_obsolete value
     * @property {number} k_EMsgClientAckGuestPass=740 k_EMsgClientAckGuestPass value
     * @property {number} k_EMsgClientRedeemGuestPass=741 k_EMsgClientRedeemGuestPass value
     * @property {number} k_EMsgClientGamesPlayed=742 k_EMsgClientGamesPlayed value
     * @property {number} k_EMsgClientRegisterKey=743 k_EMsgClientRegisterKey value
     * @property {number} k_EMsgClientInviteUserToClan=744 k_EMsgClientInviteUserToClan value
     * @property {number} k_EMsgClientAcknowledgeClanInvite=745 k_EMsgClientAcknowledgeClanInvite value
     * @property {number} k_EMsgClientPurchaseWithMachineID=746 k_EMsgClientPurchaseWithMachineID value
     * @property {number} k_EMsgClientAppUsageEvent=747 k_EMsgClientAppUsageEvent value
     * @property {number} k_EMsgClientLogOnResponse=751 k_EMsgClientLogOnResponse value
     * @property {number} k_EMsgClientSetHeartbeatRate=755 k_EMsgClientSetHeartbeatRate value
     * @property {number} k_EMsgClientNotLoggedOnDeprecated=756 k_EMsgClientNotLoggedOnDeprecated value
     * @property {number} k_EMsgClientLoggedOff=757 k_EMsgClientLoggedOff value
     * @property {number} k_EMsgGSApprove=758 k_EMsgGSApprove value
     * @property {number} k_EMsgGSDeny=759 k_EMsgGSDeny value
     * @property {number} k_EMsgGSKick=760 k_EMsgGSKick value
     * @property {number} k_EMsgClientCreateAcctResponse=761 k_EMsgClientCreateAcctResponse value
     * @property {number} k_EMsgClientPurchaseResponse=763 k_EMsgClientPurchaseResponse value
     * @property {number} k_EMsgClientPing=764 k_EMsgClientPing value
     * @property {number} k_EMsgClientNOP=765 k_EMsgClientNOP value
     * @property {number} k_EMsgClientPersonaState=766 k_EMsgClientPersonaState value
     * @property {number} k_EMsgClientFriendsList=767 k_EMsgClientFriendsList value
     * @property {number} k_EMsgClientAccountInfo=768 k_EMsgClientAccountInfo value
     * @property {number} k_EMsgClientNewsUpdate=771 k_EMsgClientNewsUpdate value
     * @property {number} k_EMsgClientGameConnectDeny=773 k_EMsgClientGameConnectDeny value
     * @property {number} k_EMsgGSStatusReply=774 k_EMsgGSStatusReply value
     * @property {number} k_EMsgClientGameConnectTokens=779 k_EMsgClientGameConnectTokens value
     * @property {number} k_EMsgClientLicenseList=780 k_EMsgClientLicenseList value
     * @property {number} k_EMsgClientVACBanStatus=782 k_EMsgClientVACBanStatus value
     * @property {number} k_EMsgClientCMList=783 k_EMsgClientCMList value
     * @property {number} k_EMsgClientEncryptPct=784 k_EMsgClientEncryptPct value
     * @property {number} k_EMsgClientGetLegacyGameKeyResponse=785 k_EMsgClientGetLegacyGameKeyResponse value
     * @property {number} k_EMsgClientAddFriend=791 k_EMsgClientAddFriend value
     * @property {number} k_EMsgClientAddFriendResponse=792 k_EMsgClientAddFriendResponse value
     * @property {number} k_EMsgClientAckGuestPassResponse=796 k_EMsgClientAckGuestPassResponse value
     * @property {number} k_EMsgClientRedeemGuestPassResponse=797 k_EMsgClientRedeemGuestPassResponse value
     * @property {number} k_EMsgClientUpdateGuestPassesList=798 k_EMsgClientUpdateGuestPassesList value
     * @property {number} k_EMsgClientChatMsg=799 k_EMsgClientChatMsg value
     * @property {number} k_EMsgClientChatInvite=800 k_EMsgClientChatInvite value
     * @property {number} k_EMsgClientJoinChat=801 k_EMsgClientJoinChat value
     * @property {number} k_EMsgClientChatMemberInfo=802 k_EMsgClientChatMemberInfo value
     * @property {number} k_EMsgClientLogOnWithCredentials_Deprecated=803 k_EMsgClientLogOnWithCredentials_Deprecated value
     * @property {number} k_EMsgClientPasswordChangeResponse=805 k_EMsgClientPasswordChangeResponse value
     * @property {number} k_EMsgClientChatEnter=807 k_EMsgClientChatEnter value
     * @property {number} k_EMsgClientFriendRemovedFromSource=808 k_EMsgClientFriendRemovedFromSource value
     * @property {number} k_EMsgClientCreateChat=809 k_EMsgClientCreateChat value
     * @property {number} k_EMsgClientCreateChatResponse=810 k_EMsgClientCreateChatResponse value
     * @property {number} k_EMsgClientP2PIntroducerMessage=813 k_EMsgClientP2PIntroducerMessage value
     * @property {number} k_EMsgClientChatActionResult=814 k_EMsgClientChatActionResult value
     * @property {number} k_EMsgClientRequestFriendData=815 k_EMsgClientRequestFriendData value
     * @property {number} k_EMsgClientGetUserStats=818 k_EMsgClientGetUserStats value
     * @property {number} k_EMsgClientGetUserStatsResponse=819 k_EMsgClientGetUserStatsResponse value
     * @property {number} k_EMsgClientStoreUserStats=820 k_EMsgClientStoreUserStats value
     * @property {number} k_EMsgClientStoreUserStatsResponse=821 k_EMsgClientStoreUserStatsResponse value
     * @property {number} k_EMsgClientClanState=822 k_EMsgClientClanState value
     * @property {number} k_EMsgClientServiceModule=830 k_EMsgClientServiceModule value
     * @property {number} k_EMsgClientServiceCall=831 k_EMsgClientServiceCall value
     * @property {number} k_EMsgClientServiceCallResponse=832 k_EMsgClientServiceCallResponse value
     * @property {number} k_EMsgClientNatTraversalStatEvent=839 k_EMsgClientNatTraversalStatEvent value
     * @property {number} k_EMsgClientSteamUsageEvent=842 k_EMsgClientSteamUsageEvent value
     * @property {number} k_EMsgClientCheckPassword=845 k_EMsgClientCheckPassword value
     * @property {number} k_EMsgClientResetPassword=846 k_EMsgClientResetPassword value
     * @property {number} k_EMsgClientCheckPasswordResponse=848 k_EMsgClientCheckPasswordResponse value
     * @property {number} k_EMsgClientResetPasswordResponse=849 k_EMsgClientResetPasswordResponse value
     * @property {number} k_EMsgClientSessionToken=850 k_EMsgClientSessionToken value
     * @property {number} k_EMsgClientDRMProblemReport=851 k_EMsgClientDRMProblemReport value
     * @property {number} k_EMsgClientSetIgnoreFriend=855 k_EMsgClientSetIgnoreFriend value
     * @property {number} k_EMsgClientSetIgnoreFriendResponse=856 k_EMsgClientSetIgnoreFriendResponse value
     * @property {number} k_EMsgClientGetAppOwnershipTicket=857 k_EMsgClientGetAppOwnershipTicket value
     * @property {number} k_EMsgClientGetAppOwnershipTicketResponse=858 k_EMsgClientGetAppOwnershipTicketResponse value
     * @property {number} k_EMsgClientGetLobbyListResponse=860 k_EMsgClientGetLobbyListResponse value
     * @property {number} k_EMsgClientServerList=880 k_EMsgClientServerList value
     * @property {number} k_EMsgClientDRMBlobRequest=896 k_EMsgClientDRMBlobRequest value
     * @property {number} k_EMsgClientDRMBlobResponse=897 k_EMsgClientDRMBlobResponse value
     * @property {number} k_EMsgBaseGameServer=900 k_EMsgBaseGameServer value
     * @property {number} k_EMsgGSDisconnectNotice=901 k_EMsgGSDisconnectNotice value
     * @property {number} k_EMsgGSStatus=903 k_EMsgGSStatus value
     * @property {number} k_EMsgGSUserPlaying=905 k_EMsgGSUserPlaying value
     * @property {number} k_EMsgGSStatus2=906 k_EMsgGSStatus2 value
     * @property {number} k_EMsgGSStatusUpdate_Unused=907 k_EMsgGSStatusUpdate_Unused value
     * @property {number} k_EMsgGSServerType=908 k_EMsgGSServerType value
     * @property {number} k_EMsgGSPlayerList=909 k_EMsgGSPlayerList value
     * @property {number} k_EMsgGSGetUserAchievementStatus=910 k_EMsgGSGetUserAchievementStatus value
     * @property {number} k_EMsgGSGetUserAchievementStatusResponse=911 k_EMsgGSGetUserAchievementStatusResponse value
     * @property {number} k_EMsgGSGetPlayStats=918 k_EMsgGSGetPlayStats value
     * @property {number} k_EMsgGSGetPlayStatsResponse=919 k_EMsgGSGetPlayStatsResponse value
     * @property {number} k_EMsgGSGetUserGroupStatus=920 k_EMsgGSGetUserGroupStatus value
     * @property {number} k_EMsgAMGetUserGroupStatus=921 k_EMsgAMGetUserGroupStatus value
     * @property {number} k_EMsgAMGetUserGroupStatusResponse=922 k_EMsgAMGetUserGroupStatusResponse value
     * @property {number} k_EMsgGSGetUserGroupStatusResponse=923 k_EMsgGSGetUserGroupStatusResponse value
     * @property {number} k_EMsgGSGetReputation=936 k_EMsgGSGetReputation value
     * @property {number} k_EMsgGSGetReputationResponse=937 k_EMsgGSGetReputationResponse value
     * @property {number} k_EMsgGSAssociateWithClan=938 k_EMsgGSAssociateWithClan value
     * @property {number} k_EMsgGSAssociateWithClanResponse=939 k_EMsgGSAssociateWithClanResponse value
     * @property {number} k_EMsgGSComputeNewPlayerCompatibility=940 k_EMsgGSComputeNewPlayerCompatibility value
     * @property {number} k_EMsgGSComputeNewPlayerCompatibilityResponse=941 k_EMsgGSComputeNewPlayerCompatibilityResponse value
     * @property {number} k_EMsgBaseAdmin=1000 k_EMsgBaseAdmin value
     * @property {number} k_EMsgAdminCmd=1000 k_EMsgAdminCmd value
     * @property {number} k_EMsgAdminCmdResponse=1004 k_EMsgAdminCmdResponse value
     * @property {number} k_EMsgAdminLogListenRequest=1005 k_EMsgAdminLogListenRequest value
     * @property {number} k_EMsgAdminLogEvent=1006 k_EMsgAdminLogEvent value
     * @property {number} k_EMsgUniverseData=1010 k_EMsgUniverseData value
     * @property {number} k_EMsgAdminSpew=1019 k_EMsgAdminSpew value
     * @property {number} k_EMsgAdminConsoleTitle=1020 k_EMsgAdminConsoleTitle value
     * @property {number} k_EMsgAdminGCSpew=1023 k_EMsgAdminGCSpew value
     * @property {number} k_EMsgAdminGCCommand=1024 k_EMsgAdminGCCommand value
     * @property {number} k_EMsgAdminGCGetCommandList=1025 k_EMsgAdminGCGetCommandList value
     * @property {number} k_EMsgAdminGCGetCommandListResponse=1026 k_EMsgAdminGCGetCommandListResponse value
     * @property {number} k_EMsgFBSConnectionData=1027 k_EMsgFBSConnectionData value
     * @property {number} k_EMsgAdminMsgSpew=1028 k_EMsgAdminMsgSpew value
     * @property {number} k_EMsgBaseFBS=1100 k_EMsgBaseFBS value
     * @property {number} k_EMsgFBSReqVersion=1100 k_EMsgFBSReqVersion value
     * @property {number} k_EMsgFBSVersionInfo=1101 k_EMsgFBSVersionInfo value
     * @property {number} k_EMsgFBSForceRefresh=1102 k_EMsgFBSForceRefresh value
     * @property {number} k_EMsgFBSForceBounce=1103 k_EMsgFBSForceBounce value
     * @property {number} k_EMsgFBSDeployPackage=1104 k_EMsgFBSDeployPackage value
     * @property {number} k_EMsgFBSDeployResponse=1105 k_EMsgFBSDeployResponse value
     * @property {number} k_EMsgFBSUpdateBootstrapper=1106 k_EMsgFBSUpdateBootstrapper value
     * @property {number} k_EMsgFBSSetState=1107 k_EMsgFBSSetState value
     * @property {number} k_EMsgFBSApplyOSUpdates=1108 k_EMsgFBSApplyOSUpdates value
     * @property {number} k_EMsgFBSRunCMDScript=1109 k_EMsgFBSRunCMDScript value
     * @property {number} k_EMsgFBSRebootBox=1110 k_EMsgFBSRebootBox value
     * @property {number} k_EMsgFBSSetBigBrotherMode=1111 k_EMsgFBSSetBigBrotherMode value
     * @property {number} k_EMsgFBSMinidumpServer=1112 k_EMsgFBSMinidumpServer value
     * @property {number} k_EMsgFBSDeployHotFixPackage=1114 k_EMsgFBSDeployHotFixPackage value
     * @property {number} k_EMsgFBSDeployHotFixResponse=1115 k_EMsgFBSDeployHotFixResponse value
     * @property {number} k_EMsgFBSDownloadHotFix=1116 k_EMsgFBSDownloadHotFix value
     * @property {number} k_EMsgFBSDownloadHotFixResponse=1117 k_EMsgFBSDownloadHotFixResponse value
     * @property {number} k_EMsgFBSUpdateTargetConfigFile=1118 k_EMsgFBSUpdateTargetConfigFile value
     * @property {number} k_EMsgFBSApplyAccountCred=1119 k_EMsgFBSApplyAccountCred value
     * @property {number} k_EMsgFBSApplyAccountCredResponse=1120 k_EMsgFBSApplyAccountCredResponse value
     * @property {number} k_EMsgFBSSetShellCount=1121 k_EMsgFBSSetShellCount value
     * @property {number} k_EMsgFBSTerminateShell=1122 k_EMsgFBSTerminateShell value
     * @property {number} k_EMsgFBSQueryGMForRequest=1123 k_EMsgFBSQueryGMForRequest value
     * @property {number} k_EMsgFBSQueryGMResponse=1124 k_EMsgFBSQueryGMResponse value
     * @property {number} k_EMsgFBSTerminateZombies=1125 k_EMsgFBSTerminateZombies value
     * @property {number} k_EMsgFBSInfoFromBootstrapper=1126 k_EMsgFBSInfoFromBootstrapper value
     * @property {number} k_EMsgFBSRebootBoxResponse=1127 k_EMsgFBSRebootBoxResponse value
     * @property {number} k_EMsgFBSBootstrapperPackageRequest=1128 k_EMsgFBSBootstrapperPackageRequest value
     * @property {number} k_EMsgFBSBootstrapperPackageResponse=1129 k_EMsgFBSBootstrapperPackageResponse value
     * @property {number} k_EMsgFBSBootstrapperGetPackageChunk=1130 k_EMsgFBSBootstrapperGetPackageChunk value
     * @property {number} k_EMsgFBSBootstrapperGetPackageChunkResponse=1131 k_EMsgFBSBootstrapperGetPackageChunkResponse value
     * @property {number} k_EMsgFBSBootstrapperPackageTransferProgress=1132 k_EMsgFBSBootstrapperPackageTransferProgress value
     * @property {number} k_EMsgFBSRestartBootstrapper=1133 k_EMsgFBSRestartBootstrapper value
     * @property {number} k_EMsgFBSPauseFrozenDumps=1134 k_EMsgFBSPauseFrozenDumps value
     * @property {number} k_EMsgBaseFileXfer=1200 k_EMsgBaseFileXfer value
     * @property {number} k_EMsgFileXferRequest=1200 k_EMsgFileXferRequest value
     * @property {number} k_EMsgFileXferResponse=1201 k_EMsgFileXferResponse value
     * @property {number} k_EMsgFileXferData=1202 k_EMsgFileXferData value
     * @property {number} k_EMsgFileXferEnd=1203 k_EMsgFileXferEnd value
     * @property {number} k_EMsgFileXferDataAck=1204 k_EMsgFileXferDataAck value
     * @property {number} k_EMsgBaseChannelAuth=1300 k_EMsgBaseChannelAuth value
     * @property {number} k_EMsgChannelAuthChallenge=1300 k_EMsgChannelAuthChallenge value
     * @property {number} k_EMsgChannelAuthResponse=1301 k_EMsgChannelAuthResponse value
     * @property {number} k_EMsgChannelAuthResult=1302 k_EMsgChannelAuthResult value
     * @property {number} k_EMsgChannelEncryptRequest=1303 k_EMsgChannelEncryptRequest value
     * @property {number} k_EMsgChannelEncryptResponse=1304 k_EMsgChannelEncryptResponse value
     * @property {number} k_EMsgChannelEncryptResult=1305 k_EMsgChannelEncryptResult value
     * @property {number} k_EMsgBaseBS=1400 k_EMsgBaseBS value
     * @property {number} k_EMsgBSPurchaseStart=1401 k_EMsgBSPurchaseStart value
     * @property {number} k_EMsgBSPurchaseResponse=1402 k_EMsgBSPurchaseResponse value
     * @property {number} k_EMsgBSAuthenticateCCTrans=1403 k_EMsgBSAuthenticateCCTrans value
     * @property {number} k_EMsgBSAuthenticateCCTransResponse=1404 k_EMsgBSAuthenticateCCTransResponse value
     * @property {number} k_EMsgBSSettleComplete=1406 k_EMsgBSSettleComplete value
     * @property {number} k_EMsgBSInitPayPalTxn=1408 k_EMsgBSInitPayPalTxn value
     * @property {number} k_EMsgBSInitPayPalTxnResponse=1409 k_EMsgBSInitPayPalTxnResponse value
     * @property {number} k_EMsgBSGetPayPalUserInfo=1410 k_EMsgBSGetPayPalUserInfo value
     * @property {number} k_EMsgBSGetPayPalUserInfoResponse=1411 k_EMsgBSGetPayPalUserInfoResponse value
     * @property {number} k_EMsgBSPaymentInstrBan=1417 k_EMsgBSPaymentInstrBan value
     * @property {number} k_EMsgBSPaymentInstrBanResponse=1418 k_EMsgBSPaymentInstrBanResponse value
     * @property {number} k_EMsgBSInitGCBankXferTxn=1421 k_EMsgBSInitGCBankXferTxn value
     * @property {number} k_EMsgBSInitGCBankXferTxnResponse=1422 k_EMsgBSInitGCBankXferTxnResponse value
     * @property {number} k_EMsgBSCommitGCTxn=1425 k_EMsgBSCommitGCTxn value
     * @property {number} k_EMsgBSQueryTransactionStatus=1426 k_EMsgBSQueryTransactionStatus value
     * @property {number} k_EMsgBSQueryTransactionStatusResponse=1427 k_EMsgBSQueryTransactionStatusResponse value
     * @property {number} k_EMsgBSQueryPaymentInstUsage=1431 k_EMsgBSQueryPaymentInstUsage value
     * @property {number} k_EMsgBSQueryPaymentInstResponse=1432 k_EMsgBSQueryPaymentInstResponse value
     * @property {number} k_EMsgBSQueryTxnExtendedInfo=1433 k_EMsgBSQueryTxnExtendedInfo value
     * @property {number} k_EMsgBSQueryTxnExtendedInfoResponse=1434 k_EMsgBSQueryTxnExtendedInfoResponse value
     * @property {number} k_EMsgBSUpdateConversionRates=1435 k_EMsgBSUpdateConversionRates value
     * @property {number} k_EMsgBSPurchaseRunFraudChecks=1437 k_EMsgBSPurchaseRunFraudChecks value
     * @property {number} k_EMsgBSPurchaseRunFraudChecksResponse=1438 k_EMsgBSPurchaseRunFraudChecksResponse value
     * @property {number} k_EMsgBSQueryBankInformation=1440 k_EMsgBSQueryBankInformation value
     * @property {number} k_EMsgBSQueryBankInformationResponse=1441 k_EMsgBSQueryBankInformationResponse value
     * @property {number} k_EMsgBSValidateXsollaSignature=1445 k_EMsgBSValidateXsollaSignature value
     * @property {number} k_EMsgBSValidateXsollaSignatureResponse=1446 k_EMsgBSValidateXsollaSignatureResponse value
     * @property {number} k_EMsgBSQiwiWalletInvoice=1448 k_EMsgBSQiwiWalletInvoice value
     * @property {number} k_EMsgBSQiwiWalletInvoiceResponse=1449 k_EMsgBSQiwiWalletInvoiceResponse value
     * @property {number} k_EMsgBSUpdateInventoryFromProPack=1450 k_EMsgBSUpdateInventoryFromProPack value
     * @property {number} k_EMsgBSUpdateInventoryFromProPackResponse=1451 k_EMsgBSUpdateInventoryFromProPackResponse value
     * @property {number} k_EMsgBSSendShippingRequest=1452 k_EMsgBSSendShippingRequest value
     * @property {number} k_EMsgBSSendShippingRequestResponse=1453 k_EMsgBSSendShippingRequestResponse value
     * @property {number} k_EMsgBSGetProPackOrderStatus=1454 k_EMsgBSGetProPackOrderStatus value
     * @property {number} k_EMsgBSGetProPackOrderStatusResponse=1455 k_EMsgBSGetProPackOrderStatusResponse value
     * @property {number} k_EMsgBSCheckJobRunning=1456 k_EMsgBSCheckJobRunning value
     * @property {number} k_EMsgBSCheckJobRunningResponse=1457 k_EMsgBSCheckJobRunningResponse value
     * @property {number} k_EMsgBSResetPackagePurchaseRateLimit=1458 k_EMsgBSResetPackagePurchaseRateLimit value
     * @property {number} k_EMsgBSResetPackagePurchaseRateLimitResponse=1459 k_EMsgBSResetPackagePurchaseRateLimitResponse value
     * @property {number} k_EMsgBSUpdatePaymentData=1460 k_EMsgBSUpdatePaymentData value
     * @property {number} k_EMsgBSUpdatePaymentDataResponse=1461 k_EMsgBSUpdatePaymentDataResponse value
     * @property {number} k_EMsgBSGetBillingAddress=1462 k_EMsgBSGetBillingAddress value
     * @property {number} k_EMsgBSGetBillingAddressResponse=1463 k_EMsgBSGetBillingAddressResponse value
     * @property {number} k_EMsgBSGetCreditCardInfo=1464 k_EMsgBSGetCreditCardInfo value
     * @property {number} k_EMsgBSGetCreditCardInfoResponse=1465 k_EMsgBSGetCreditCardInfoResponse value
     * @property {number} k_EMsgBSRemoveExpiredPaymentData=1468 k_EMsgBSRemoveExpiredPaymentData value
     * @property {number} k_EMsgBSRemoveExpiredPaymentDataResponse=1469 k_EMsgBSRemoveExpiredPaymentDataResponse value
     * @property {number} k_EMsgBSConvertToCurrentKeys=1470 k_EMsgBSConvertToCurrentKeys value
     * @property {number} k_EMsgBSConvertToCurrentKeysResponse=1471 k_EMsgBSConvertToCurrentKeysResponse value
     * @property {number} k_EMsgBSInitPurchase=1472 k_EMsgBSInitPurchase value
     * @property {number} k_EMsgBSInitPurchaseResponse=1473 k_EMsgBSInitPurchaseResponse value
     * @property {number} k_EMsgBSCompletePurchase=1474 k_EMsgBSCompletePurchase value
     * @property {number} k_EMsgBSCompletePurchaseResponse=1475 k_EMsgBSCompletePurchaseResponse value
     * @property {number} k_EMsgBSPruneCardUsageStats=1476 k_EMsgBSPruneCardUsageStats value
     * @property {number} k_EMsgBSPruneCardUsageStatsResponse=1477 k_EMsgBSPruneCardUsageStatsResponse value
     * @property {number} k_EMsgBSStoreBankInformation=1478 k_EMsgBSStoreBankInformation value
     * @property {number} k_EMsgBSStoreBankInformationResponse=1479 k_EMsgBSStoreBankInformationResponse value
     * @property {number} k_EMsgBSVerifyPOSAKey=1480 k_EMsgBSVerifyPOSAKey value
     * @property {number} k_EMsgBSVerifyPOSAKeyResponse=1481 k_EMsgBSVerifyPOSAKeyResponse value
     * @property {number} k_EMsgBSReverseRedeemPOSAKey=1482 k_EMsgBSReverseRedeemPOSAKey value
     * @property {number} k_EMsgBSReverseRedeemPOSAKeyResponse=1483 k_EMsgBSReverseRedeemPOSAKeyResponse value
     * @property {number} k_EMsgBSQueryFindCreditCard=1484 k_EMsgBSQueryFindCreditCard value
     * @property {number} k_EMsgBSQueryFindCreditCardResponse=1485 k_EMsgBSQueryFindCreditCardResponse value
     * @property {number} k_EMsgBSStatusInquiryPOSAKey=1486 k_EMsgBSStatusInquiryPOSAKey value
     * @property {number} k_EMsgBSStatusInquiryPOSAKeyResponse=1487 k_EMsgBSStatusInquiryPOSAKeyResponse value
     * @property {number} k_EMsgBSBoaCompraConfirmProductDelivery=1494 k_EMsgBSBoaCompraConfirmProductDelivery value
     * @property {number} k_EMsgBSBoaCompraConfirmProductDeliveryResponse=1495 k_EMsgBSBoaCompraConfirmProductDeliveryResponse value
     * @property {number} k_EMsgBSGenerateBoaCompraMD5=1496 k_EMsgBSGenerateBoaCompraMD5 value
     * @property {number} k_EMsgBSGenerateBoaCompraMD5Response=1497 k_EMsgBSGenerateBoaCompraMD5Response value
     * @property {number} k_EMsgBSCommitWPTxn=1498 k_EMsgBSCommitWPTxn value
     * @property {number} k_EMsgBSCommitAdyenTxn=1499 k_EMsgBSCommitAdyenTxn value
     * @property {number} k_EMsgBaseATS=1500 k_EMsgBaseATS value
     * @property {number} k_EMsgATSStartStressTest=1501 k_EMsgATSStartStressTest value
     * @property {number} k_EMsgATSStopStressTest=1502 k_EMsgATSStopStressTest value
     * @property {number} k_EMsgATSRunFailServerTest=1503 k_EMsgATSRunFailServerTest value
     * @property {number} k_EMsgATSUFSPerfTestTask=1504 k_EMsgATSUFSPerfTestTask value
     * @property {number} k_EMsgATSUFSPerfTestResponse=1505 k_EMsgATSUFSPerfTestResponse value
     * @property {number} k_EMsgATSCycleTCM=1506 k_EMsgATSCycleTCM value
     * @property {number} k_EMsgATSInitDRMSStressTest=1507 k_EMsgATSInitDRMSStressTest value
     * @property {number} k_EMsgATSCallTest=1508 k_EMsgATSCallTest value
     * @property {number} k_EMsgATSCallTestReply=1509 k_EMsgATSCallTestReply value
     * @property {number} k_EMsgATSStartExternalStress=1510 k_EMsgATSStartExternalStress value
     * @property {number} k_EMsgATSExternalStressJobStart=1511 k_EMsgATSExternalStressJobStart value
     * @property {number} k_EMsgATSExternalStressJobQueued=1512 k_EMsgATSExternalStressJobQueued value
     * @property {number} k_EMsgATSExternalStressJobRunning=1513 k_EMsgATSExternalStressJobRunning value
     * @property {number} k_EMsgATSExternalStressJobStopped=1514 k_EMsgATSExternalStressJobStopped value
     * @property {number} k_EMsgATSExternalStressJobStopAll=1515 k_EMsgATSExternalStressJobStopAll value
     * @property {number} k_EMsgATSExternalStressActionResult=1516 k_EMsgATSExternalStressActionResult value
     * @property {number} k_EMsgATSStarted=1517 k_EMsgATSStarted value
     * @property {number} k_EMsgATSCSPerfTestTask=1518 k_EMsgATSCSPerfTestTask value
     * @property {number} k_EMsgATSCSPerfTestResponse=1519 k_EMsgATSCSPerfTestResponse value
     * @property {number} k_EMsgBaseDP=1600 k_EMsgBaseDP value
     * @property {number} k_EMsgDPSetPublishingState=1601 k_EMsgDPSetPublishingState value
     * @property {number} k_EMsgDPUniquePlayersStat=1603 k_EMsgDPUniquePlayersStat value
     * @property {number} k_EMsgDPStreamingUniquePlayersStat=1604 k_EMsgDPStreamingUniquePlayersStat value
     * @property {number} k_EMsgDPBlockingStats=1607 k_EMsgDPBlockingStats value
     * @property {number} k_EMsgDPNatTraversalStats=1608 k_EMsgDPNatTraversalStats value
     * @property {number} k_EMsgDPCloudStats=1612 k_EMsgDPCloudStats value
     * @property {number} k_EMsgDPGetPlayerCount=1615 k_EMsgDPGetPlayerCount value
     * @property {number} k_EMsgDPGetPlayerCountResponse=1616 k_EMsgDPGetPlayerCountResponse value
     * @property {number} k_EMsgDPGameServersPlayersStats=1617 k_EMsgDPGameServersPlayersStats value
     * @property {number} k_EMsgClientDPCheckSpecialSurvey=1620 k_EMsgClientDPCheckSpecialSurvey value
     * @property {number} k_EMsgClientDPCheckSpecialSurveyResponse=1621 k_EMsgClientDPCheckSpecialSurveyResponse value
     * @property {number} k_EMsgClientDPSendSpecialSurveyResponse=1622 k_EMsgClientDPSendSpecialSurveyResponse value
     * @property {number} k_EMsgClientDPSendSpecialSurveyResponseReply=1623 k_EMsgClientDPSendSpecialSurveyResponseReply value
     * @property {number} k_EMsgDPStoreSaleStatistics=1624 k_EMsgDPStoreSaleStatistics value
     * @property {number} k_EMsgClientDPUpdateAppJobReport=1625 k_EMsgClientDPUpdateAppJobReport value
     * @property {number} k_EMsgClientDPUnsignedInstallScript=1627 k_EMsgClientDPUnsignedInstallScript value
     * @property {number} k_EMsgDPPartnerMicroTxns=1628 k_EMsgDPPartnerMicroTxns value
     * @property {number} k_EMsgDPPartnerMicroTxnsResponse=1629 k_EMsgDPPartnerMicroTxnsResponse value
     * @property {number} k_EMsgClientDPContentStatsReport=1630 k_EMsgClientDPContentStatsReport value
     * @property {number} k_EMsgDPVRUniquePlayersStat=1631 k_EMsgDPVRUniquePlayersStat value
     * @property {number} k_EMsgBaseCM=1700 k_EMsgBaseCM value
     * @property {number} k_EMsgCMSetAllowState=1701 k_EMsgCMSetAllowState value
     * @property {number} k_EMsgCMSpewAllowState=1702 k_EMsgCMSpewAllowState value
     * @property {number} k_EMsgCMSessionRejected=1703 k_EMsgCMSessionRejected value
     * @property {number} k_EMsgCMSetSecrets=1704 k_EMsgCMSetSecrets value
     * @property {number} k_EMsgCMGetSecrets=1705 k_EMsgCMGetSecrets value
     * @property {number} k_EMsgBaseGC=2200 k_EMsgBaseGC value
     * @property {number} k_EMsgGCCmdRevive=2203 k_EMsgGCCmdRevive value
     * @property {number} k_EMsgGCCmdDown=2206 k_EMsgGCCmdDown value
     * @property {number} k_EMsgGCCmdDeploy=2207 k_EMsgGCCmdDeploy value
     * @property {number} k_EMsgGCCmdDeployResponse=2208 k_EMsgGCCmdDeployResponse value
     * @property {number} k_EMsgGCCmdSwitch=2209 k_EMsgGCCmdSwitch value
     * @property {number} k_EMsgAMRefreshSessions=2210 k_EMsgAMRefreshSessions value
     * @property {number} k_EMsgGCAchievementAwarded=2212 k_EMsgGCAchievementAwarded value
     * @property {number} k_EMsgGCSystemMessage=2213 k_EMsgGCSystemMessage value
     * @property {number} k_EMsgGCCmdStatus=2216 k_EMsgGCCmdStatus value
     * @property {number} k_EMsgGCRegisterWebInterfaces_Deprecated=2217 k_EMsgGCRegisterWebInterfaces_Deprecated value
     * @property {number} k_EMsgGCGetAccountDetails_DEPRECATED=2218 k_EMsgGCGetAccountDetails_DEPRECATED value
     * @property {number} k_EMsgGCInterAppMessage=2219 k_EMsgGCInterAppMessage value
     * @property {number} k_EMsgGCGetEmailTemplate=2220 k_EMsgGCGetEmailTemplate value
     * @property {number} k_EMsgGCGetEmailTemplateResponse=2221 k_EMsgGCGetEmailTemplateResponse value
     * @property {number} k_EMsgGCHRelay=2222 k_EMsgGCHRelay value
     * @property {number} k_EMsgGCHRelayToClient=2223 k_EMsgGCHRelayToClient value
     * @property {number} k_EMsgGCHUpdateSession=2224 k_EMsgGCHUpdateSession value
     * @property {number} k_EMsgGCHRequestUpdateSession=2225 k_EMsgGCHRequestUpdateSession value
     * @property {number} k_EMsgGCHRequestStatus=2226 k_EMsgGCHRequestStatus value
     * @property {number} k_EMsgGCHRequestStatusResponse=2227 k_EMsgGCHRequestStatusResponse value
     * @property {number} k_EMsgGCHAccountVacStatusChange=2228 k_EMsgGCHAccountVacStatusChange value
     * @property {number} k_EMsgGCHSpawnGC=2229 k_EMsgGCHSpawnGC value
     * @property {number} k_EMsgGCHSpawnGCResponse=2230 k_EMsgGCHSpawnGCResponse value
     * @property {number} k_EMsgGCHKillGC=2231 k_EMsgGCHKillGC value
     * @property {number} k_EMsgGCHKillGCResponse=2232 k_EMsgGCHKillGCResponse value
     * @property {number} k_EMsgGCHAccountTradeBanStatusChange=2233 k_EMsgGCHAccountTradeBanStatusChange value
     * @property {number} k_EMsgGCHAccountLockStatusChange=2234 k_EMsgGCHAccountLockStatusChange value
     * @property {number} k_EMsgGCHVacVerificationChange=2235 k_EMsgGCHVacVerificationChange value
     * @property {number} k_EMsgGCHAccountPhoneNumberChange=2236 k_EMsgGCHAccountPhoneNumberChange value
     * @property {number} k_EMsgGCHAccountTwoFactorChange=2237 k_EMsgGCHAccountTwoFactorChange value
     * @property {number} k_EMsgGCHInviteUserToLobby=2238 k_EMsgGCHInviteUserToLobby value
     * @property {number} k_EMsgBaseP2P=2500 k_EMsgBaseP2P value
     * @property {number} k_EMsgP2PIntroducerMessage=2502 k_EMsgP2PIntroducerMessage value
     * @property {number} k_EMsgBaseSM=2900 k_EMsgBaseSM value
     * @property {number} k_EMsgSMExpensiveReport=2902 k_EMsgSMExpensiveReport value
     * @property {number} k_EMsgSMHourlyReport=2903 k_EMsgSMHourlyReport value
     * @property {number} k_EMsgSMPartitionRenames=2905 k_EMsgSMPartitionRenames value
     * @property {number} k_EMsgSMMonitorSpace=2906 k_EMsgSMMonitorSpace value
     * @property {number} k_EMsgSMTestNextBuildSchemaConversion=2907 k_EMsgSMTestNextBuildSchemaConversion value
     * @property {number} k_EMsgSMTestNextBuildSchemaConversionResponse=2908 k_EMsgSMTestNextBuildSchemaConversionResponse value
     * @property {number} k_EMsgBaseTest=3000 k_EMsgBaseTest value
     * @property {number} k_EMsgFailServer=3000 k_EMsgFailServer value
     * @property {number} k_EMsgJobHeartbeatTest=3001 k_EMsgJobHeartbeatTest value
     * @property {number} k_EMsgJobHeartbeatTestResponse=3002 k_EMsgJobHeartbeatTestResponse value
     * @property {number} k_EMsgBaseFTSRange=3100 k_EMsgBaseFTSRange value
     * @property {number} k_EMsgBaseCCSRange=3150 k_EMsgBaseCCSRange value
     * @property {number} k_EMsgCCSDeleteAllCommentsByAuthor=3161 k_EMsgCCSDeleteAllCommentsByAuthor value
     * @property {number} k_EMsgCCSDeleteAllCommentsByAuthorResponse=3162 k_EMsgCCSDeleteAllCommentsByAuthorResponse value
     * @property {number} k_EMsgBaseLBSRange=3200 k_EMsgBaseLBSRange value
     * @property {number} k_EMsgLBSSetScore=3201 k_EMsgLBSSetScore value
     * @property {number} k_EMsgLBSSetScoreResponse=3202 k_EMsgLBSSetScoreResponse value
     * @property {number} k_EMsgLBSFindOrCreateLB=3203 k_EMsgLBSFindOrCreateLB value
     * @property {number} k_EMsgLBSFindOrCreateLBResponse=3204 k_EMsgLBSFindOrCreateLBResponse value
     * @property {number} k_EMsgLBSGetLBEntries=3205 k_EMsgLBSGetLBEntries value
     * @property {number} k_EMsgLBSGetLBEntriesResponse=3206 k_EMsgLBSGetLBEntriesResponse value
     * @property {number} k_EMsgLBSGetLBList=3207 k_EMsgLBSGetLBList value
     * @property {number} k_EMsgLBSGetLBListResponse=3208 k_EMsgLBSGetLBListResponse value
     * @property {number} k_EMsgLBSSetLBDetails=3209 k_EMsgLBSSetLBDetails value
     * @property {number} k_EMsgLBSDeleteLB=3210 k_EMsgLBSDeleteLB value
     * @property {number} k_EMsgLBSDeleteLBEntry=3211 k_EMsgLBSDeleteLBEntry value
     * @property {number} k_EMsgLBSResetLB=3212 k_EMsgLBSResetLB value
     * @property {number} k_EMsgLBSResetLBResponse=3213 k_EMsgLBSResetLBResponse value
     * @property {number} k_EMsgLBSDeleteLBResponse=3214 k_EMsgLBSDeleteLBResponse value
     * @property {number} k_EMsgBaseOGS=3400 k_EMsgBaseOGS value
     * @property {number} k_EMsgOGSBeginSession=3401 k_EMsgOGSBeginSession value
     * @property {number} k_EMsgOGSBeginSessionResponse=3402 k_EMsgOGSBeginSessionResponse value
     * @property {number} k_EMsgOGSEndSession=3403 k_EMsgOGSEndSession value
     * @property {number} k_EMsgOGSEndSessionResponse=3404 k_EMsgOGSEndSessionResponse value
     * @property {number} k_EMsgOGSWriteAppSessionRow=3406 k_EMsgOGSWriteAppSessionRow value
     * @property {number} k_EMsgBaseBRP=3600 k_EMsgBaseBRP value
     * @property {number} k_EMsgBRPPostTransactionTax=3629 k_EMsgBRPPostTransactionTax value
     * @property {number} k_EMsgBRPPostTransactionTaxResponse=3630 k_EMsgBRPPostTransactionTaxResponse value
     * @property {number} k_EMsgBaseAMRange2=4000 k_EMsgBaseAMRange2 value
     * @property {number} k_EMsgAMCreateChat=4001 k_EMsgAMCreateChat value
     * @property {number} k_EMsgAMCreateChatResponse=4002 k_EMsgAMCreateChatResponse value
     * @property {number} k_EMsgAMSetProfileURL=4005 k_EMsgAMSetProfileURL value
     * @property {number} k_EMsgAMGetAccountEmailAddress=4006 k_EMsgAMGetAccountEmailAddress value
     * @property {number} k_EMsgAMGetAccountEmailAddressResponse=4007 k_EMsgAMGetAccountEmailAddressResponse value
     * @property {number} k_EMsgAMRequestClanData=4008 k_EMsgAMRequestClanData value
     * @property {number} k_EMsgAMRouteToClients=4009 k_EMsgAMRouteToClients value
     * @property {number} k_EMsgAMLeaveClan=4010 k_EMsgAMLeaveClan value
     * @property {number} k_EMsgAMClanPermissions=4011 k_EMsgAMClanPermissions value
     * @property {number} k_EMsgAMClanPermissionsResponse=4012 k_EMsgAMClanPermissionsResponse value
     * @property {number} k_EMsgAMCreateClanEventDummyForRateLimiting=4013 k_EMsgAMCreateClanEventDummyForRateLimiting value
     * @property {number} k_EMsgAMUpdateClanEventDummyForRateLimiting=4015 k_EMsgAMUpdateClanEventDummyForRateLimiting value
     * @property {number} k_EMsgAMSetClanPermissionSettings=4021 k_EMsgAMSetClanPermissionSettings value
     * @property {number} k_EMsgAMSetClanPermissionSettingsResponse=4022 k_EMsgAMSetClanPermissionSettingsResponse value
     * @property {number} k_EMsgAMGetClanPermissionSettings=4023 k_EMsgAMGetClanPermissionSettings value
     * @property {number} k_EMsgAMGetClanPermissionSettingsResponse=4024 k_EMsgAMGetClanPermissionSettingsResponse value
     * @property {number} k_EMsgAMPublishChatRoomInfo=4025 k_EMsgAMPublishChatRoomInfo value
     * @property {number} k_EMsgClientChatRoomInfo=4026 k_EMsgClientChatRoomInfo value
     * @property {number} k_EMsgAMGetClanHistory=4039 k_EMsgAMGetClanHistory value
     * @property {number} k_EMsgAMGetClanHistoryResponse=4040 k_EMsgAMGetClanHistoryResponse value
     * @property {number} k_EMsgAMGetClanPermissionBits=4041 k_EMsgAMGetClanPermissionBits value
     * @property {number} k_EMsgAMGetClanPermissionBitsResponse=4042 k_EMsgAMGetClanPermissionBitsResponse value
     * @property {number} k_EMsgAMSetClanPermissionBits=4043 k_EMsgAMSetClanPermissionBits value
     * @property {number} k_EMsgAMSetClanPermissionBitsResponse=4044 k_EMsgAMSetClanPermissionBitsResponse value
     * @property {number} k_EMsgAMSessionInfoRequest=4045 k_EMsgAMSessionInfoRequest value
     * @property {number} k_EMsgAMSessionInfoResponse=4046 k_EMsgAMSessionInfoResponse value
     * @property {number} k_EMsgAMValidateWGToken=4047 k_EMsgAMValidateWGToken value
     * @property {number} k_EMsgAMGetClanRank=4050 k_EMsgAMGetClanRank value
     * @property {number} k_EMsgAMGetClanRankResponse=4051 k_EMsgAMGetClanRankResponse value
     * @property {number} k_EMsgAMSetClanRank=4052 k_EMsgAMSetClanRank value
     * @property {number} k_EMsgAMSetClanRankResponse=4053 k_EMsgAMSetClanRankResponse value
     * @property {number} k_EMsgAMGetClanPOTW=4054 k_EMsgAMGetClanPOTW value
     * @property {number} k_EMsgAMGetClanPOTWResponse=4055 k_EMsgAMGetClanPOTWResponse value
     * @property {number} k_EMsgAMSetClanPOTW=4056 k_EMsgAMSetClanPOTW value
     * @property {number} k_EMsgAMSetClanPOTWResponse=4057 k_EMsgAMSetClanPOTWResponse value
     * @property {number} k_EMsgAMDumpUser=4059 k_EMsgAMDumpUser value
     * @property {number} k_EMsgAMKickUserFromClan=4060 k_EMsgAMKickUserFromClan value
     * @property {number} k_EMsgAMAddFounderToClan=4061 k_EMsgAMAddFounderToClan value
     * @property {number} k_EMsgAMValidateWGTokenResponse=4062 k_EMsgAMValidateWGTokenResponse value
     * @property {number} k_EMsgAMSetAccountDetails=4064 k_EMsgAMSetAccountDetails value
     * @property {number} k_EMsgAMGetChatBanList=4065 k_EMsgAMGetChatBanList value
     * @property {number} k_EMsgAMGetChatBanListResponse=4066 k_EMsgAMGetChatBanListResponse value
     * @property {number} k_EMsgAMUnBanFromChat=4067 k_EMsgAMUnBanFromChat value
     * @property {number} k_EMsgAMSetClanDetails=4068 k_EMsgAMSetClanDetails value
     * @property {number} k_EMsgAMGetAccountLinks=4069 k_EMsgAMGetAccountLinks value
     * @property {number} k_EMsgAMGetAccountLinksResponse=4070 k_EMsgAMGetAccountLinksResponse value
     * @property {number} k_EMsgAMSetAccountLinks=4071 k_EMsgAMSetAccountLinks value
     * @property {number} k_EMsgAMSetAccountLinksResponse=4072 k_EMsgAMSetAccountLinksResponse value
     * @property {number} k_EMsgUGSGetUserGameStats=4073 k_EMsgUGSGetUserGameStats value
     * @property {number} k_EMsgUGSGetUserGameStatsResponse=4074 k_EMsgUGSGetUserGameStatsResponse value
     * @property {number} k_EMsgAMCheckClanMembership=4075 k_EMsgAMCheckClanMembership value
     * @property {number} k_EMsgAMGetClanMembers=4076 k_EMsgAMGetClanMembers value
     * @property {number} k_EMsgAMGetClanMembersResponse=4077 k_EMsgAMGetClanMembersResponse value
     * @property {number} k_EMsgAMNotifyChatOfClanChange=4079 k_EMsgAMNotifyChatOfClanChange value
     * @property {number} k_EMsgAMResubmitPurchase=4080 k_EMsgAMResubmitPurchase value
     * @property {number} k_EMsgAMAddFriend=4081 k_EMsgAMAddFriend value
     * @property {number} k_EMsgAMAddFriendResponse=4082 k_EMsgAMAddFriendResponse value
     * @property {number} k_EMsgAMRemoveFriend=4083 k_EMsgAMRemoveFriend value
     * @property {number} k_EMsgAMDumpClan=4084 k_EMsgAMDumpClan value
     * @property {number} k_EMsgAMChangeClanOwner=4085 k_EMsgAMChangeClanOwner value
     * @property {number} k_EMsgAMCancelEasyCollect=4086 k_EMsgAMCancelEasyCollect value
     * @property {number} k_EMsgAMCancelEasyCollectResponse=4087 k_EMsgAMCancelEasyCollectResponse value
     * @property {number} k_EMsgAMClansInCommon=4090 k_EMsgAMClansInCommon value
     * @property {number} k_EMsgAMClansInCommonResponse=4091 k_EMsgAMClansInCommonResponse value
     * @property {number} k_EMsgAMIsValidAccountID=4092 k_EMsgAMIsValidAccountID value
     * @property {number} k_EMsgAMWipeFriendsList=4095 k_EMsgAMWipeFriendsList value
     * @property {number} k_EMsgAMSetIgnored=4096 k_EMsgAMSetIgnored value
     * @property {number} k_EMsgAMClansInCommonCountResponse=4097 k_EMsgAMClansInCommonCountResponse value
     * @property {number} k_EMsgAMFriendsList=4098 k_EMsgAMFriendsList value
     * @property {number} k_EMsgAMFriendsListResponse=4099 k_EMsgAMFriendsListResponse value
     * @property {number} k_EMsgAMFriendsInCommon=4100 k_EMsgAMFriendsInCommon value
     * @property {number} k_EMsgAMFriendsInCommonResponse=4101 k_EMsgAMFriendsInCommonResponse value
     * @property {number} k_EMsgAMFriendsInCommonCountResponse=4102 k_EMsgAMFriendsInCommonCountResponse value
     * @property {number} k_EMsgAMClansInCommonCount=4103 k_EMsgAMClansInCommonCount value
     * @property {number} k_EMsgAMChallengeVerdict=4104 k_EMsgAMChallengeVerdict value
     * @property {number} k_EMsgAMChallengeNotification=4105 k_EMsgAMChallengeNotification value
     * @property {number} k_EMsgAMFindGSByIP=4106 k_EMsgAMFindGSByIP value
     * @property {number} k_EMsgAMFoundGSByIP=4107 k_EMsgAMFoundGSByIP value
     * @property {number} k_EMsgAMGiftRevoked=4108 k_EMsgAMGiftRevoked value
     * @property {number} k_EMsgAMUserClanList=4110 k_EMsgAMUserClanList value
     * @property {number} k_EMsgAMUserClanListResponse=4111 k_EMsgAMUserClanListResponse value
     * @property {number} k_EMsgAMGetAccountDetails2=4112 k_EMsgAMGetAccountDetails2 value
     * @property {number} k_EMsgAMGetAccountDetailsResponse2=4113 k_EMsgAMGetAccountDetailsResponse2 value
     * @property {number} k_EMsgAMSetCommunityProfileSettings=4114 k_EMsgAMSetCommunityProfileSettings value
     * @property {number} k_EMsgAMSetCommunityProfileSettingsResponse=4115 k_EMsgAMSetCommunityProfileSettingsResponse value
     * @property {number} k_EMsgAMGetCommunityPrivacyState=4116 k_EMsgAMGetCommunityPrivacyState value
     * @property {number} k_EMsgAMGetCommunityPrivacyStateResponse=4117 k_EMsgAMGetCommunityPrivacyStateResponse value
     * @property {number} k_EMsgAMCheckClanInviteRateLimiting=4118 k_EMsgAMCheckClanInviteRateLimiting value
     * @property {number} k_EMsgUGSGetUserAchievementStatus=4119 k_EMsgUGSGetUserAchievementStatus value
     * @property {number} k_EMsgAMGetIgnored=4120 k_EMsgAMGetIgnored value
     * @property {number} k_EMsgAMGetIgnoredResponse=4121 k_EMsgAMGetIgnoredResponse value
     * @property {number} k_EMsgAMSetIgnoredResponse=4122 k_EMsgAMSetIgnoredResponse value
     * @property {number} k_EMsgAMSetFriendRelationshipNone=4123 k_EMsgAMSetFriendRelationshipNone value
     * @property {number} k_EMsgAMGetFriendRelationship=4124 k_EMsgAMGetFriendRelationship value
     * @property {number} k_EMsgAMGetFriendRelationshipResponse=4125 k_EMsgAMGetFriendRelationshipResponse value
     * @property {number} k_EMsgAMServiceModulesCache=4126 k_EMsgAMServiceModulesCache value
     * @property {number} k_EMsgAMServiceModulesCall=4127 k_EMsgAMServiceModulesCall value
     * @property {number} k_EMsgAMServiceModulesCallResponse=4128 k_EMsgAMServiceModulesCallResponse value
     * @property {number} k_EMsgCommunityAddFriendNews=4140 k_EMsgCommunityAddFriendNews value
     * @property {number} k_EMsgAMFindClanUser=4143 k_EMsgAMFindClanUser value
     * @property {number} k_EMsgAMFindClanUserResponse=4144 k_EMsgAMFindClanUserResponse value
     * @property {number} k_EMsgAMBanFromChat=4145 k_EMsgAMBanFromChat value
     * @property {number} k_EMsgAMGetUserNewsSubscriptions=4147 k_EMsgAMGetUserNewsSubscriptions value
     * @property {number} k_EMsgAMGetUserNewsSubscriptionsResponse=4148 k_EMsgAMGetUserNewsSubscriptionsResponse value
     * @property {number} k_EMsgAMSetUserNewsSubscriptions=4149 k_EMsgAMSetUserNewsSubscriptions value
     * @property {number} k_EMsgAMSendQueuedEmails=4152 k_EMsgAMSendQueuedEmails value
     * @property {number} k_EMsgAMSetLicenseFlags=4153 k_EMsgAMSetLicenseFlags value
     * @property {number} k_EMsgCommunityDeleteUserNews=4155 k_EMsgCommunityDeleteUserNews value
     * @property {number} k_EMsgAMAllowUserFilesRequest=4156 k_EMsgAMAllowUserFilesRequest value
     * @property {number} k_EMsgAMAllowUserFilesResponse=4157 k_EMsgAMAllowUserFilesResponse value
     * @property {number} k_EMsgAMGetAccountStatus=4158 k_EMsgAMGetAccountStatus value
     * @property {number} k_EMsgAMGetAccountStatusResponse=4159 k_EMsgAMGetAccountStatusResponse value
     * @property {number} k_EMsgAMEditBanReason=4160 k_EMsgAMEditBanReason value
     * @property {number} k_EMsgAMCheckClanMembershipResponse=4161 k_EMsgAMCheckClanMembershipResponse value
     * @property {number} k_EMsgAMProbeClanMembershipList=4162 k_EMsgAMProbeClanMembershipList value
     * @property {number} k_EMsgAMProbeClanMembershipListResponse=4163 k_EMsgAMProbeClanMembershipListResponse value
     * @property {number} k_EMsgUGSGetUserAchievementStatusResponse=4164 k_EMsgUGSGetUserAchievementStatusResponse value
     * @property {number} k_EMsgAMGetFriendsLobbies=4165 k_EMsgAMGetFriendsLobbies value
     * @property {number} k_EMsgAMGetFriendsLobbiesResponse=4166 k_EMsgAMGetFriendsLobbiesResponse value
     * @property {number} k_EMsgAMGetUserFriendNewsResponse=4172 k_EMsgAMGetUserFriendNewsResponse value
     * @property {number} k_EMsgCommunityGetUserFriendNews=4173 k_EMsgCommunityGetUserFriendNews value
     * @property {number} k_EMsgAMGetUserClansNewsResponse=4174 k_EMsgAMGetUserClansNewsResponse value
     * @property {number} k_EMsgAMGetUserClansNews=4175 k_EMsgAMGetUserClansNews value
     * @property {number} k_EMsgAMGetPreviousCBAccount=4184 k_EMsgAMGetPreviousCBAccount value
     * @property {number} k_EMsgAMGetPreviousCBAccountResponse=4185 k_EMsgAMGetPreviousCBAccountResponse value
     * @property {number} k_EMsgAMGetUserLicenseHistory=4190 k_EMsgAMGetUserLicenseHistory value
     * @property {number} k_EMsgAMGetUserLicenseHistoryResponse=4191 k_EMsgAMGetUserLicenseHistoryResponse value
     * @property {number} k_EMsgAMSupportChangePassword=4194 k_EMsgAMSupportChangePassword value
     * @property {number} k_EMsgAMSupportChangeEmail=4195 k_EMsgAMSupportChangeEmail value
     * @property {number} k_EMsgAMResetUserVerificationGSByIP=4197 k_EMsgAMResetUserVerificationGSByIP value
     * @property {number} k_EMsgAMUpdateGSPlayStats=4198 k_EMsgAMUpdateGSPlayStats value
     * @property {number} k_EMsgAMSupportEnableOrDisable=4199 k_EMsgAMSupportEnableOrDisable value
     * @property {number} k_EMsgAMGetPurchaseStatus=4206 k_EMsgAMGetPurchaseStatus value
     * @property {number} k_EMsgAMSupportIsAccountEnabled=4209 k_EMsgAMSupportIsAccountEnabled value
     * @property {number} k_EMsgAMSupportIsAccountEnabledResponse=4210 k_EMsgAMSupportIsAccountEnabledResponse value
     * @property {number} k_EMsgUGSGetUserStats=4211 k_EMsgUGSGetUserStats value
     * @property {number} k_EMsgAMSupportKickSession=4212 k_EMsgAMSupportKickSession value
     * @property {number} k_EMsgAMGSSearch=4213 k_EMsgAMGSSearch value
     * @property {number} k_EMsgMarketingMessageUpdate=4216 k_EMsgMarketingMessageUpdate value
     * @property {number} k_EMsgChatServerRouteFriendMsg=4219 k_EMsgChatServerRouteFriendMsg value
     * @property {number} k_EMsgAMTicketAuthRequestOrResponse=4220 k_EMsgAMTicketAuthRequestOrResponse value
     * @property {number} k_EMsgAMVerifyDepotManagementRights=4222 k_EMsgAMVerifyDepotManagementRights value
     * @property {number} k_EMsgAMVerifyDepotManagementRightsResponse=4223 k_EMsgAMVerifyDepotManagementRightsResponse value
     * @property {number} k_EMsgAMAddFreeLicense=4224 k_EMsgAMAddFreeLicense value
     * @property {number} k_EMsgAMValidateEmailLink=4231 k_EMsgAMValidateEmailLink value
     * @property {number} k_EMsgAMValidateEmailLinkResponse=4232 k_EMsgAMValidateEmailLinkResponse value
     * @property {number} k_EMsgUGSStoreUserStats=4236 k_EMsgUGSStoreUserStats value
     * @property {number} k_EMsgAMDeleteStoredCard=4241 k_EMsgAMDeleteStoredCard value
     * @property {number} k_EMsgAMRevokeLegacyGameKeys=4242 k_EMsgAMRevokeLegacyGameKeys value
     * @property {number} k_EMsgAMGetWalletDetails=4244 k_EMsgAMGetWalletDetails value
     * @property {number} k_EMsgAMGetWalletDetailsResponse=4245 k_EMsgAMGetWalletDetailsResponse value
     * @property {number} k_EMsgAMDeleteStoredPaymentInfo=4246 k_EMsgAMDeleteStoredPaymentInfo value
     * @property {number} k_EMsgAMGetStoredPaymentSummary=4247 k_EMsgAMGetStoredPaymentSummary value
     * @property {number} k_EMsgAMGetStoredPaymentSummaryResponse=4248 k_EMsgAMGetStoredPaymentSummaryResponse value
     * @property {number} k_EMsgAMGetWalletConversionRate=4249 k_EMsgAMGetWalletConversionRate value
     * @property {number} k_EMsgAMGetWalletConversionRateResponse=4250 k_EMsgAMGetWalletConversionRateResponse value
     * @property {number} k_EMsgAMConvertWallet=4251 k_EMsgAMConvertWallet value
     * @property {number} k_EMsgAMConvertWalletResponse=4252 k_EMsgAMConvertWalletResponse value
     * @property {number} k_EMsgAMSetPreApproval=4255 k_EMsgAMSetPreApproval value
     * @property {number} k_EMsgAMSetPreApprovalResponse=4256 k_EMsgAMSetPreApprovalResponse value
     * @property {number} k_EMsgAMCreateRefund=4258 k_EMsgAMCreateRefund value
     * @property {number} k_EMsgAMCreateChargeback=4260 k_EMsgAMCreateChargeback value
     * @property {number} k_EMsgAMCreateDispute=4262 k_EMsgAMCreateDispute value
     * @property {number} k_EMsgAMClearDispute=4264 k_EMsgAMClearDispute value
     * @property {number} k_EMsgAMCreateFinancialAdjustment=4265 k_EMsgAMCreateFinancialAdjustment value
     * @property {number} k_EMsgAMPlayerNicknameList=4266 k_EMsgAMPlayerNicknameList value
     * @property {number} k_EMsgAMPlayerNicknameListResponse=4267 k_EMsgAMPlayerNicknameListResponse value
     * @property {number} k_EMsgAMSetDRMTestConfig=4268 k_EMsgAMSetDRMTestConfig value
     * @property {number} k_EMsgAMGetUserCurrentGameInfo=4269 k_EMsgAMGetUserCurrentGameInfo value
     * @property {number} k_EMsgAMGetUserCurrentGameInfoResponse=4270 k_EMsgAMGetUserCurrentGameInfoResponse value
     * @property {number} k_EMsgAMGetGSPlayerList=4271 k_EMsgAMGetGSPlayerList value
     * @property {number} k_EMsgAMGetGSPlayerListResponse=4272 k_EMsgAMGetGSPlayerListResponse value
     * @property {number} k_EMsgAMGetSteamIDForMicroTxn=4278 k_EMsgAMGetSteamIDForMicroTxn value
     * @property {number} k_EMsgAMGetSteamIDForMicroTxnResponse=4279 k_EMsgAMGetSteamIDForMicroTxnResponse value
     * @property {number} k_EMsgAMSetPartnerMember=4280 k_EMsgAMSetPartnerMember value
     * @property {number} k_EMsgAMRemovePublisherUser=4281 k_EMsgAMRemovePublisherUser value
     * @property {number} k_EMsgAMGetUserLicenseList=4282 k_EMsgAMGetUserLicenseList value
     * @property {number} k_EMsgAMGetUserLicenseListResponse=4283 k_EMsgAMGetUserLicenseListResponse value
     * @property {number} k_EMsgAMReloadGameGroupPolicy=4284 k_EMsgAMReloadGameGroupPolicy value
     * @property {number} k_EMsgAMAddFreeLicenseResponse=4285 k_EMsgAMAddFreeLicenseResponse value
     * @property {number} k_EMsgAMVACStatusUpdate=4286 k_EMsgAMVACStatusUpdate value
     * @property {number} k_EMsgAMGetAccountDetails=4287 k_EMsgAMGetAccountDetails value
     * @property {number} k_EMsgAMGetAccountDetailsResponse=4288 k_EMsgAMGetAccountDetailsResponse value
     * @property {number} k_EMsgAMGetPlayerLinkDetails=4289 k_EMsgAMGetPlayerLinkDetails value
     * @property {number} k_EMsgAMGetPlayerLinkDetailsResponse=4290 k_EMsgAMGetPlayerLinkDetailsResponse value
     * @property {number} k_EMsgAMGetAccountFlagsForWGSpoofing=4294 k_EMsgAMGetAccountFlagsForWGSpoofing value
     * @property {number} k_EMsgAMGetAccountFlagsForWGSpoofingResponse=4295 k_EMsgAMGetAccountFlagsForWGSpoofingResponse value
     * @property {number} k_EMsgAMGetClanOfficers=4298 k_EMsgAMGetClanOfficers value
     * @property {number} k_EMsgAMGetClanOfficersResponse=4299 k_EMsgAMGetClanOfficersResponse value
     * @property {number} k_EMsgAMNameChange=4300 k_EMsgAMNameChange value
     * @property {number} k_EMsgAMGetNameHistory=4301 k_EMsgAMGetNameHistory value
     * @property {number} k_EMsgAMGetNameHistoryResponse=4302 k_EMsgAMGetNameHistoryResponse value
     * @property {number} k_EMsgAMUpdateProviderStatus=4305 k_EMsgAMUpdateProviderStatus value
     * @property {number} k_EMsgAMSupportRemoveAccountSecurity=4307 k_EMsgAMSupportRemoveAccountSecurity value
     * @property {number} k_EMsgAMIsAccountInCaptchaGracePeriod=4308 k_EMsgAMIsAccountInCaptchaGracePeriod value
     * @property {number} k_EMsgAMIsAccountInCaptchaGracePeriodResponse=4309 k_EMsgAMIsAccountInCaptchaGracePeriodResponse value
     * @property {number} k_EMsgAMAccountPS3Unlink=4310 k_EMsgAMAccountPS3Unlink value
     * @property {number} k_EMsgAMAccountPS3UnlinkResponse=4311 k_EMsgAMAccountPS3UnlinkResponse value
     * @property {number} k_EMsgUGSStoreUserStatsResponse=4312 k_EMsgUGSStoreUserStatsResponse value
     * @property {number} k_EMsgAMGetAccountPSNInfo=4313 k_EMsgAMGetAccountPSNInfo value
     * @property {number} k_EMsgAMGetAccountPSNInfoResponse=4314 k_EMsgAMGetAccountPSNInfoResponse value
     * @property {number} k_EMsgAMAuthenticatedPlayerList=4315 k_EMsgAMAuthenticatedPlayerList value
     * @property {number} k_EMsgAMGetUserGifts=4316 k_EMsgAMGetUserGifts value
     * @property {number} k_EMsgAMGetUserGiftsResponse=4317 k_EMsgAMGetUserGiftsResponse value
     * @property {number} k_EMsgAMTransferLockedGifts=4320 k_EMsgAMTransferLockedGifts value
     * @property {number} k_EMsgAMTransferLockedGiftsResponse=4321 k_EMsgAMTransferLockedGiftsResponse value
     * @property {number} k_EMsgAMPlayerHostedOnGameServer=4322 k_EMsgAMPlayerHostedOnGameServer value
     * @property {number} k_EMsgAMGetAccountBanInfo=4323 k_EMsgAMGetAccountBanInfo value
     * @property {number} k_EMsgAMGetAccountBanInfoResponse=4324 k_EMsgAMGetAccountBanInfoResponse value
     * @property {number} k_EMsgAMRecordBanEnforcement=4325 k_EMsgAMRecordBanEnforcement value
     * @property {number} k_EMsgAMRollbackGiftTransfer=4326 k_EMsgAMRollbackGiftTransfer value
     * @property {number} k_EMsgAMRollbackGiftTransferResponse=4327 k_EMsgAMRollbackGiftTransferResponse value
     * @property {number} k_EMsgAMHandlePendingTransaction=4328 k_EMsgAMHandlePendingTransaction value
     * @property {number} k_EMsgAMRequestClanDetails=4329 k_EMsgAMRequestClanDetails value
     * @property {number} k_EMsgAMDeleteStoredPaypalAgreement=4330 k_EMsgAMDeleteStoredPaypalAgreement value
     * @property {number} k_EMsgAMGameServerUpdate=4331 k_EMsgAMGameServerUpdate value
     * @property {number} k_EMsgAMGameServerRemove=4332 k_EMsgAMGameServerRemove value
     * @property {number} k_EMsgAMGetPaypalAgreements=4333 k_EMsgAMGetPaypalAgreements value
     * @property {number} k_EMsgAMGetPaypalAgreementsResponse=4334 k_EMsgAMGetPaypalAgreementsResponse value
     * @property {number} k_EMsgAMGameServerPlayerCompatibilityCheck=4335 k_EMsgAMGameServerPlayerCompatibilityCheck value
     * @property {number} k_EMsgAMGameServerPlayerCompatibilityCheckResponse=4336 k_EMsgAMGameServerPlayerCompatibilityCheckResponse value
     * @property {number} k_EMsgAMRenewLicense=4337 k_EMsgAMRenewLicense value
     * @property {number} k_EMsgAMGetAccountCommunityBanInfo=4338 k_EMsgAMGetAccountCommunityBanInfo value
     * @property {number} k_EMsgAMGetAccountCommunityBanInfoResponse=4339 k_EMsgAMGetAccountCommunityBanInfoResponse value
     * @property {number} k_EMsgAMGameServerAccountChangePassword=4340 k_EMsgAMGameServerAccountChangePassword value
     * @property {number} k_EMsgAMGameServerAccountDeleteAccount=4341 k_EMsgAMGameServerAccountDeleteAccount value
     * @property {number} k_EMsgAMRenewAgreement=4342 k_EMsgAMRenewAgreement value
     * @property {number} k_EMsgAMXsollaPayment=4344 k_EMsgAMXsollaPayment value
     * @property {number} k_EMsgAMXsollaPaymentResponse=4345 k_EMsgAMXsollaPaymentResponse value
     * @property {number} k_EMsgAMAcctAllowedToPurchase=4346 k_EMsgAMAcctAllowedToPurchase value
     * @property {number} k_EMsgAMAcctAllowedToPurchaseResponse=4347 k_EMsgAMAcctAllowedToPurchaseResponse value
     * @property {number} k_EMsgAMSwapKioskDeposit=4348 k_EMsgAMSwapKioskDeposit value
     * @property {number} k_EMsgAMSwapKioskDepositResponse=4349 k_EMsgAMSwapKioskDepositResponse value
     * @property {number} k_EMsgAMSetUserGiftUnowned=4350 k_EMsgAMSetUserGiftUnowned value
     * @property {number} k_EMsgAMSetUserGiftUnownedResponse=4351 k_EMsgAMSetUserGiftUnownedResponse value
     * @property {number} k_EMsgAMClaimUnownedUserGift=4352 k_EMsgAMClaimUnownedUserGift value
     * @property {number} k_EMsgAMClaimUnownedUserGiftResponse=4353 k_EMsgAMClaimUnownedUserGiftResponse value
     * @property {number} k_EMsgAMSetClanName=4354 k_EMsgAMSetClanName value
     * @property {number} k_EMsgAMSetClanNameResponse=4355 k_EMsgAMSetClanNameResponse value
     * @property {number} k_EMsgAMGrantCoupon=4356 k_EMsgAMGrantCoupon value
     * @property {number} k_EMsgAMGrantCouponResponse=4357 k_EMsgAMGrantCouponResponse value
     * @property {number} k_EMsgAMIsPackageRestrictedInUserCountry=4358 k_EMsgAMIsPackageRestrictedInUserCountry value
     * @property {number} k_EMsgAMIsPackageRestrictedInUserCountryResponse=4359 k_EMsgAMIsPackageRestrictedInUserCountryResponse value
     * @property {number} k_EMsgAMHandlePendingTransactionResponse=4360 k_EMsgAMHandlePendingTransactionResponse value
     * @property {number} k_EMsgAMGrantGuestPasses2=4361 k_EMsgAMGrantGuestPasses2 value
     * @property {number} k_EMsgAMGrantGuestPasses2Response=4362 k_EMsgAMGrantGuestPasses2Response value
     * @property {number} k_EMsgAMGetPlayerBanDetails=4365 k_EMsgAMGetPlayerBanDetails value
     * @property {number} k_EMsgAMGetPlayerBanDetailsResponse=4366 k_EMsgAMGetPlayerBanDetailsResponse value
     * @property {number} k_EMsgAMFinalizePurchase=4367 k_EMsgAMFinalizePurchase value
     * @property {number} k_EMsgAMFinalizePurchaseResponse=4368 k_EMsgAMFinalizePurchaseResponse value
     * @property {number} k_EMsgAMPersonaChangeResponse=4372 k_EMsgAMPersonaChangeResponse value
     * @property {number} k_EMsgAMGetClanDetailsForForumCreation=4373 k_EMsgAMGetClanDetailsForForumCreation value
     * @property {number} k_EMsgAMGetClanDetailsForForumCreationResponse=4374 k_EMsgAMGetClanDetailsForForumCreationResponse value
     * @property {number} k_EMsgAMGetPendingNotificationCount=4375 k_EMsgAMGetPendingNotificationCount value
     * @property {number} k_EMsgAMGetPendingNotificationCountResponse=4376 k_EMsgAMGetPendingNotificationCountResponse value
     * @property {number} k_EMsgAMPasswordHashUpgrade=4377 k_EMsgAMPasswordHashUpgrade value
     * @property {number} k_EMsgAMBoaCompraPayment=4380 k_EMsgAMBoaCompraPayment value
     * @property {number} k_EMsgAMBoaCompraPaymentResponse=4381 k_EMsgAMBoaCompraPaymentResponse value
     * @property {number} k_EMsgAMCompleteExternalPurchase=4383 k_EMsgAMCompleteExternalPurchase value
     * @property {number} k_EMsgAMCompleteExternalPurchaseResponse=4384 k_EMsgAMCompleteExternalPurchaseResponse value
     * @property {number} k_EMsgAMResolveNegativeWalletCredits=4385 k_EMsgAMResolveNegativeWalletCredits value
     * @property {number} k_EMsgAMResolveNegativeWalletCreditsResponse=4386 k_EMsgAMResolveNegativeWalletCreditsResponse value
     * @property {number} k_EMsgAMPlayerGetClanBasicDetails=4389 k_EMsgAMPlayerGetClanBasicDetails value
     * @property {number} k_EMsgAMPlayerGetClanBasicDetailsResponse=4390 k_EMsgAMPlayerGetClanBasicDetailsResponse value
     * @property {number} k_EMsgAMMOLPayment=4391 k_EMsgAMMOLPayment value
     * @property {number} k_EMsgAMMOLPaymentResponse=4392 k_EMsgAMMOLPaymentResponse value
     * @property {number} k_EMsgGetUserIPCountry=4393 k_EMsgGetUserIPCountry value
     * @property {number} k_EMsgGetUserIPCountryResponse=4394 k_EMsgGetUserIPCountryResponse value
     * @property {number} k_EMsgNotificationOfSuspiciousActivity=4395 k_EMsgNotificationOfSuspiciousActivity value
     * @property {number} k_EMsgAMDegicaPayment=4396 k_EMsgAMDegicaPayment value
     * @property {number} k_EMsgAMDegicaPaymentResponse=4397 k_EMsgAMDegicaPaymentResponse value
     * @property {number} k_EMsgAMEClubPayment=4398 k_EMsgAMEClubPayment value
     * @property {number} k_EMsgAMEClubPaymentResponse=4399 k_EMsgAMEClubPaymentResponse value
     * @property {number} k_EMsgAMPayPalPaymentsHubPayment=4400 k_EMsgAMPayPalPaymentsHubPayment value
     * @property {number} k_EMsgAMPayPalPaymentsHubPaymentResponse=4401 k_EMsgAMPayPalPaymentsHubPaymentResponse value
     * @property {number} k_EMsgAMTwoFactorRecoverAuthenticatorRequest=4402 k_EMsgAMTwoFactorRecoverAuthenticatorRequest value
     * @property {number} k_EMsgAMTwoFactorRecoverAuthenticatorResponse=4403 k_EMsgAMTwoFactorRecoverAuthenticatorResponse value
     * @property {number} k_EMsgAMSmart2PayPayment=4404 k_EMsgAMSmart2PayPayment value
     * @property {number} k_EMsgAMSmart2PayPaymentResponse=4405 k_EMsgAMSmart2PayPaymentResponse value
     * @property {number} k_EMsgAMValidatePasswordResetCodeAndSendSmsRequest=4406 k_EMsgAMValidatePasswordResetCodeAndSendSmsRequest value
     * @property {number} k_EMsgAMValidatePasswordResetCodeAndSendSmsResponse=4407 k_EMsgAMValidatePasswordResetCodeAndSendSmsResponse value
     * @property {number} k_EMsgAMGetAccountResetDetailsRequest=4408 k_EMsgAMGetAccountResetDetailsRequest value
     * @property {number} k_EMsgAMGetAccountResetDetailsResponse=4409 k_EMsgAMGetAccountResetDetailsResponse value
     * @property {number} k_EMsgAMBitPayPayment=4410 k_EMsgAMBitPayPayment value
     * @property {number} k_EMsgAMBitPayPaymentResponse=4411 k_EMsgAMBitPayPaymentResponse value
     * @property {number} k_EMsgAMSendAccountInfoUpdate=4412 k_EMsgAMSendAccountInfoUpdate value
     * @property {number} k_EMsgAMSendScheduledGift=4413 k_EMsgAMSendScheduledGift value
     * @property {number} k_EMsgAMNodwinPayment=4414 k_EMsgAMNodwinPayment value
     * @property {number} k_EMsgAMNodwinPaymentResponse=4415 k_EMsgAMNodwinPaymentResponse value
     * @property {number} k_EMsgAMResolveWalletRevoke=4416 k_EMsgAMResolveWalletRevoke value
     * @property {number} k_EMsgAMResolveWalletReverseRevoke=4417 k_EMsgAMResolveWalletReverseRevoke value
     * @property {number} k_EMsgAMFundedPayment=4418 k_EMsgAMFundedPayment value
     * @property {number} k_EMsgAMFundedPaymentResponse=4419 k_EMsgAMFundedPaymentResponse value
     * @property {number} k_EMsgAMRequestPersonaUpdateForChatServer=4420 k_EMsgAMRequestPersonaUpdateForChatServer value
     * @property {number} k_EMsgAMPerfectWorldPayment=4421 k_EMsgAMPerfectWorldPayment value
     * @property {number} k_EMsgAMPerfectWorldPaymentResponse=4422 k_EMsgAMPerfectWorldPaymentResponse value
     * @property {number} k_EMsgBasePSRange=5000 k_EMsgBasePSRange value
     * @property {number} k_EMsgPSCreateShoppingCart=5001 k_EMsgPSCreateShoppingCart value
     * @property {number} k_EMsgPSCreateShoppingCartResponse=5002 k_EMsgPSCreateShoppingCartResponse value
     * @property {number} k_EMsgPSIsValidShoppingCart=5003 k_EMsgPSIsValidShoppingCart value
     * @property {number} k_EMsgPSIsValidShoppingCartResponse=5004 k_EMsgPSIsValidShoppingCartResponse value
     * @property {number} k_EMsgPSAddPackageToShoppingCart=5005 k_EMsgPSAddPackageToShoppingCart value
     * @property {number} k_EMsgPSAddPackageToShoppingCartResponse=5006 k_EMsgPSAddPackageToShoppingCartResponse value
     * @property {number} k_EMsgPSRemoveLineItemFromShoppingCart=5007 k_EMsgPSRemoveLineItemFromShoppingCart value
     * @property {number} k_EMsgPSRemoveLineItemFromShoppingCartResponse=5008 k_EMsgPSRemoveLineItemFromShoppingCartResponse value
     * @property {number} k_EMsgPSGetShoppingCartContents=5009 k_EMsgPSGetShoppingCartContents value
     * @property {number} k_EMsgPSGetShoppingCartContentsResponse=5010 k_EMsgPSGetShoppingCartContentsResponse value
     * @property {number} k_EMsgPSAddWalletCreditToShoppingCart=5011 k_EMsgPSAddWalletCreditToShoppingCart value
     * @property {number} k_EMsgPSAddWalletCreditToShoppingCartResponse=5012 k_EMsgPSAddWalletCreditToShoppingCartResponse value
     * @property {number} k_EMsgBaseUFSRange=5200 k_EMsgBaseUFSRange value
     * @property {number} k_EMsgClientUFSUploadFileRequest=5202 k_EMsgClientUFSUploadFileRequest value
     * @property {number} k_EMsgClientUFSUploadFileResponse=5203 k_EMsgClientUFSUploadFileResponse value
     * @property {number} k_EMsgClientUFSUploadFileChunk=5204 k_EMsgClientUFSUploadFileChunk value
     * @property {number} k_EMsgClientUFSUploadFileFinished=5205 k_EMsgClientUFSUploadFileFinished value
     * @property {number} k_EMsgClientUFSGetFileListForApp=5206 k_EMsgClientUFSGetFileListForApp value
     * @property {number} k_EMsgClientUFSGetFileListForAppResponse=5207 k_EMsgClientUFSGetFileListForAppResponse value
     * @property {number} k_EMsgClientUFSDownloadRequest=5210 k_EMsgClientUFSDownloadRequest value
     * @property {number} k_EMsgClientUFSDownloadResponse=5211 k_EMsgClientUFSDownloadResponse value
     * @property {number} k_EMsgClientUFSDownloadChunk=5212 k_EMsgClientUFSDownloadChunk value
     * @property {number} k_EMsgClientUFSLoginRequest=5213 k_EMsgClientUFSLoginRequest value
     * @property {number} k_EMsgClientUFSLoginResponse=5214 k_EMsgClientUFSLoginResponse value
     * @property {number} k_EMsgUFSReloadPartitionInfo=5215 k_EMsgUFSReloadPartitionInfo value
     * @property {number} k_EMsgClientUFSTransferHeartbeat=5216 k_EMsgClientUFSTransferHeartbeat value
     * @property {number} k_EMsgUFSSynchronizeFile=5217 k_EMsgUFSSynchronizeFile value
     * @property {number} k_EMsgUFSSynchronizeFileResponse=5218 k_EMsgUFSSynchronizeFileResponse value
     * @property {number} k_EMsgClientUFSDeleteFileRequest=5219 k_EMsgClientUFSDeleteFileRequest value
     * @property {number} k_EMsgClientUFSDeleteFileResponse=5220 k_EMsgClientUFSDeleteFileResponse value
     * @property {number} k_EMsgClientUFSGetUGCDetails=5226 k_EMsgClientUFSGetUGCDetails value
     * @property {number} k_EMsgClientUFSGetUGCDetailsResponse=5227 k_EMsgClientUFSGetUGCDetailsResponse value
     * @property {number} k_EMsgUFSUpdateFileFlags=5228 k_EMsgUFSUpdateFileFlags value
     * @property {number} k_EMsgUFSUpdateFileFlagsResponse=5229 k_EMsgUFSUpdateFileFlagsResponse value
     * @property {number} k_EMsgClientUFSGetSingleFileInfo=5230 k_EMsgClientUFSGetSingleFileInfo value
     * @property {number} k_EMsgClientUFSGetSingleFileInfoResponse=5231 k_EMsgClientUFSGetSingleFileInfoResponse value
     * @property {number} k_EMsgClientUFSShareFile=5232 k_EMsgClientUFSShareFile value
     * @property {number} k_EMsgClientUFSShareFileResponse=5233 k_EMsgClientUFSShareFileResponse value
     * @property {number} k_EMsgUFSReloadAccount=5234 k_EMsgUFSReloadAccount value
     * @property {number} k_EMsgUFSReloadAccountResponse=5235 k_EMsgUFSReloadAccountResponse value
     * @property {number} k_EMsgUFSUpdateRecordBatched=5236 k_EMsgUFSUpdateRecordBatched value
     * @property {number} k_EMsgUFSUpdateRecordBatchedResponse=5237 k_EMsgUFSUpdateRecordBatchedResponse value
     * @property {number} k_EMsgUFSMigrateFile=5238 k_EMsgUFSMigrateFile value
     * @property {number} k_EMsgUFSMigrateFileResponse=5239 k_EMsgUFSMigrateFileResponse value
     * @property {number} k_EMsgUFSGetUGCURLs=5240 k_EMsgUFSGetUGCURLs value
     * @property {number} k_EMsgUFSGetUGCURLsResponse=5241 k_EMsgUFSGetUGCURLsResponse value
     * @property {number} k_EMsgUFSHttpUploadFileFinishRequest=5242 k_EMsgUFSHttpUploadFileFinishRequest value
     * @property {number} k_EMsgUFSHttpUploadFileFinishResponse=5243 k_EMsgUFSHttpUploadFileFinishResponse value
     * @property {number} k_EMsgUFSDownloadStartRequest=5244 k_EMsgUFSDownloadStartRequest value
     * @property {number} k_EMsgUFSDownloadStartResponse=5245 k_EMsgUFSDownloadStartResponse value
     * @property {number} k_EMsgUFSDownloadChunkRequest=5246 k_EMsgUFSDownloadChunkRequest value
     * @property {number} k_EMsgUFSDownloadChunkResponse=5247 k_EMsgUFSDownloadChunkResponse value
     * @property {number} k_EMsgUFSDownloadFinishRequest=5248 k_EMsgUFSDownloadFinishRequest value
     * @property {number} k_EMsgUFSDownloadFinishResponse=5249 k_EMsgUFSDownloadFinishResponse value
     * @property {number} k_EMsgUFSFlushURLCache=5250 k_EMsgUFSFlushURLCache value
     * @property {number} k_EMsgClientUFSUploadCommit=5251 k_EMsgClientUFSUploadCommit value
     * @property {number} k_EMsgClientUFSUploadCommitResponse=5252 k_EMsgClientUFSUploadCommitResponse value
     * @property {number} k_EMsgUFSMigrateFileAppID=5253 k_EMsgUFSMigrateFileAppID value
     * @property {number} k_EMsgUFSMigrateFileAppIDResponse=5254 k_EMsgUFSMigrateFileAppIDResponse value
     * @property {number} k_EMsgBaseClient2=5400 k_EMsgBaseClient2 value
     * @property {number} k_EMsgClientRequestForgottenPasswordEmail=5401 k_EMsgClientRequestForgottenPasswordEmail value
     * @property {number} k_EMsgClientRequestForgottenPasswordEmailResponse=5402 k_EMsgClientRequestForgottenPasswordEmailResponse value
     * @property {number} k_EMsgClientCreateAccountResponse=5403 k_EMsgClientCreateAccountResponse value
     * @property {number} k_EMsgClientResetForgottenPassword=5404 k_EMsgClientResetForgottenPassword value
     * @property {number} k_EMsgClientResetForgottenPasswordResponse=5405 k_EMsgClientResetForgottenPasswordResponse value
     * @property {number} k_EMsgClientInformOfResetForgottenPassword=5407 k_EMsgClientInformOfResetForgottenPassword value
     * @property {number} k_EMsgClientInformOfResetForgottenPasswordResponse=5408 k_EMsgClientInformOfResetForgottenPasswordResponse value
     * @property {number} k_EMsgClientAnonUserLogOn_Deprecated=5409 k_EMsgClientAnonUserLogOn_Deprecated value
     * @property {number} k_EMsgClientGamesPlayedWithDataBlob=5410 k_EMsgClientGamesPlayedWithDataBlob value
     * @property {number} k_EMsgClientUpdateUserGameInfo=5411 k_EMsgClientUpdateUserGameInfo value
     * @property {number} k_EMsgClientFileToDownload=5412 k_EMsgClientFileToDownload value
     * @property {number} k_EMsgClientFileToDownloadResponse=5413 k_EMsgClientFileToDownloadResponse value
     * @property {number} k_EMsgClientLBSSetScore=5414 k_EMsgClientLBSSetScore value
     * @property {number} k_EMsgClientLBSSetScoreResponse=5415 k_EMsgClientLBSSetScoreResponse value
     * @property {number} k_EMsgClientLBSFindOrCreateLB=5416 k_EMsgClientLBSFindOrCreateLB value
     * @property {number} k_EMsgClientLBSFindOrCreateLBResponse=5417 k_EMsgClientLBSFindOrCreateLBResponse value
     * @property {number} k_EMsgClientLBSGetLBEntries=5418 k_EMsgClientLBSGetLBEntries value
     * @property {number} k_EMsgClientLBSGetLBEntriesResponse=5419 k_EMsgClientLBSGetLBEntriesResponse value
     * @property {number} k_EMsgClientChatDeclined=5426 k_EMsgClientChatDeclined value
     * @property {number} k_EMsgClientFriendMsgIncoming=5427 k_EMsgClientFriendMsgIncoming value
     * @property {number} k_EMsgClientAuthList_Deprecated=5428 k_EMsgClientAuthList_Deprecated value
     * @property {number} k_EMsgClientTicketAuthComplete=5429 k_EMsgClientTicketAuthComplete value
     * @property {number} k_EMsgClientIsLimitedAccount=5430 k_EMsgClientIsLimitedAccount value
     * @property {number} k_EMsgClientRequestAuthList=5431 k_EMsgClientRequestAuthList value
     * @property {number} k_EMsgClientAuthList=5432 k_EMsgClientAuthList value
     * @property {number} k_EMsgClientStat=5433 k_EMsgClientStat value
     * @property {number} k_EMsgClientP2PConnectionInfo=5434 k_EMsgClientP2PConnectionInfo value
     * @property {number} k_EMsgClientP2PConnectionFailInfo=5435 k_EMsgClientP2PConnectionFailInfo value
     * @property {number} k_EMsgClientGetDepotDecryptionKey=5438 k_EMsgClientGetDepotDecryptionKey value
     * @property {number} k_EMsgClientGetDepotDecryptionKeyResponse=5439 k_EMsgClientGetDepotDecryptionKeyResponse value
     * @property {number} k_EMsgGSPerformHardwareSurvey=5440 k_EMsgGSPerformHardwareSurvey value
     * @property {number} k_EMsgClientEnableTestLicense=5443 k_EMsgClientEnableTestLicense value
     * @property {number} k_EMsgClientEnableTestLicenseResponse=5444 k_EMsgClientEnableTestLicenseResponse value
     * @property {number} k_EMsgClientDisableTestLicense=5445 k_EMsgClientDisableTestLicense value
     * @property {number} k_EMsgClientDisableTestLicenseResponse=5446 k_EMsgClientDisableTestLicenseResponse value
     * @property {number} k_EMsgClientRequestValidationMail=5448 k_EMsgClientRequestValidationMail value
     * @property {number} k_EMsgClientRequestValidationMailResponse=5449 k_EMsgClientRequestValidationMailResponse value
     * @property {number} k_EMsgClientCheckAppBetaPassword=5450 k_EMsgClientCheckAppBetaPassword value
     * @property {number} k_EMsgClientCheckAppBetaPasswordResponse=5451 k_EMsgClientCheckAppBetaPasswordResponse value
     * @property {number} k_EMsgClientToGC=5452 k_EMsgClientToGC value
     * @property {number} k_EMsgClientFromGC=5453 k_EMsgClientFromGC value
     * @property {number} k_EMsgClientRequestChangeMail=5454 k_EMsgClientRequestChangeMail value
     * @property {number} k_EMsgClientRequestChangeMailResponse=5455 k_EMsgClientRequestChangeMailResponse value
     * @property {number} k_EMsgClientEmailAddrInfo=5456 k_EMsgClientEmailAddrInfo value
     * @property {number} k_EMsgClientPasswordChange3=5457 k_EMsgClientPasswordChange3 value
     * @property {number} k_EMsgClientEmailChange3=5458 k_EMsgClientEmailChange3 value
     * @property {number} k_EMsgClientPersonalQAChange3=5459 k_EMsgClientPersonalQAChange3 value
     * @property {number} k_EMsgClientResetForgottenPassword3=5460 k_EMsgClientResetForgottenPassword3 value
     * @property {number} k_EMsgClientRequestForgottenPasswordEmail3=5461 k_EMsgClientRequestForgottenPasswordEmail3 value
     * @property {number} k_EMsgClientNewLoginKey=5463 k_EMsgClientNewLoginKey value
     * @property {number} k_EMsgClientNewLoginKeyAccepted=5464 k_EMsgClientNewLoginKeyAccepted value
     * @property {number} k_EMsgClientLogOnWithHash_Deprecated=5465 k_EMsgClientLogOnWithHash_Deprecated value
     * @property {number} k_EMsgClientStoreUserStats2=5466 k_EMsgClientStoreUserStats2 value
     * @property {number} k_EMsgClientStatsUpdated=5467 k_EMsgClientStatsUpdated value
     * @property {number} k_EMsgClientActivateOEMLicense=5468 k_EMsgClientActivateOEMLicense value
     * @property {number} k_EMsgClientRegisterOEMMachine=5469 k_EMsgClientRegisterOEMMachine value
     * @property {number} k_EMsgClientRegisterOEMMachineResponse=5470 k_EMsgClientRegisterOEMMachineResponse value
     * @property {number} k_EMsgClientRequestedClientStats=5480 k_EMsgClientRequestedClientStats value
     * @property {number} k_EMsgClientStat2Int32=5481 k_EMsgClientStat2Int32 value
     * @property {number} k_EMsgClientStat2=5482 k_EMsgClientStat2 value
     * @property {number} k_EMsgClientVerifyPassword=5483 k_EMsgClientVerifyPassword value
     * @property {number} k_EMsgClientVerifyPasswordResponse=5484 k_EMsgClientVerifyPasswordResponse value
     * @property {number} k_EMsgClientDRMDownloadRequest=5485 k_EMsgClientDRMDownloadRequest value
     * @property {number} k_EMsgClientDRMDownloadResponse=5486 k_EMsgClientDRMDownloadResponse value
     * @property {number} k_EMsgClientDRMFinalResult=5487 k_EMsgClientDRMFinalResult value
     * @property {number} k_EMsgClientGetFriendsWhoPlayGame=5488 k_EMsgClientGetFriendsWhoPlayGame value
     * @property {number} k_EMsgClientGetFriendsWhoPlayGameResponse=5489 k_EMsgClientGetFriendsWhoPlayGameResponse value
     * @property {number} k_EMsgClientOGSBeginSession=5490 k_EMsgClientOGSBeginSession value
     * @property {number} k_EMsgClientOGSBeginSessionResponse=5491 k_EMsgClientOGSBeginSessionResponse value
     * @property {number} k_EMsgClientOGSEndSession=5492 k_EMsgClientOGSEndSession value
     * @property {number} k_EMsgClientOGSEndSessionResponse=5493 k_EMsgClientOGSEndSessionResponse value
     * @property {number} k_EMsgClientOGSWriteRow=5494 k_EMsgClientOGSWriteRow value
     * @property {number} k_EMsgClientDRMTest=5495 k_EMsgClientDRMTest value
     * @property {number} k_EMsgClientDRMTestResult=5496 k_EMsgClientDRMTestResult value
     * @property {number} k_EMsgClientServerUnavailable=5500 k_EMsgClientServerUnavailable value
     * @property {number} k_EMsgClientServersAvailable=5501 k_EMsgClientServersAvailable value
     * @property {number} k_EMsgClientRegisterAuthTicketWithCM=5502 k_EMsgClientRegisterAuthTicketWithCM value
     * @property {number} k_EMsgClientGCMsgFailed=5503 k_EMsgClientGCMsgFailed value
     * @property {number} k_EMsgClientMicroTxnAuthRequest=5504 k_EMsgClientMicroTxnAuthRequest value
     * @property {number} k_EMsgClientMicroTxnAuthorize=5505 k_EMsgClientMicroTxnAuthorize value
     * @property {number} k_EMsgClientMicroTxnAuthorizeResponse=5506 k_EMsgClientMicroTxnAuthorizeResponse value
     * @property {number} k_EMsgClientAppMinutesPlayedData=5507 k_EMsgClientAppMinutesPlayedData value
     * @property {number} k_EMsgClientGetMicroTxnInfo=5508 k_EMsgClientGetMicroTxnInfo value
     * @property {number} k_EMsgClientGetMicroTxnInfoResponse=5509 k_EMsgClientGetMicroTxnInfoResponse value
     * @property {number} k_EMsgClientMarketingMessageUpdate2=5510 k_EMsgClientMarketingMessageUpdate2 value
     * @property {number} k_EMsgClientDeregisterWithServer=5511 k_EMsgClientDeregisterWithServer value
     * @property {number} k_EMsgClientSubscribeToPersonaFeed=5512 k_EMsgClientSubscribeToPersonaFeed value
     * @property {number} k_EMsgClientLogon=5514 k_EMsgClientLogon value
     * @property {number} k_EMsgClientGetClientDetails=5515 k_EMsgClientGetClientDetails value
     * @property {number} k_EMsgClientGetClientDetailsResponse=5516 k_EMsgClientGetClientDetailsResponse value
     * @property {number} k_EMsgClientReportOverlayDetourFailure=5517 k_EMsgClientReportOverlayDetourFailure value
     * @property {number} k_EMsgClientGetClientAppList=5518 k_EMsgClientGetClientAppList value
     * @property {number} k_EMsgClientGetClientAppListResponse=5519 k_EMsgClientGetClientAppListResponse value
     * @property {number} k_EMsgClientInstallClientApp=5520 k_EMsgClientInstallClientApp value
     * @property {number} k_EMsgClientInstallClientAppResponse=5521 k_EMsgClientInstallClientAppResponse value
     * @property {number} k_EMsgClientUninstallClientApp=5522 k_EMsgClientUninstallClientApp value
     * @property {number} k_EMsgClientUninstallClientAppResponse=5523 k_EMsgClientUninstallClientAppResponse value
     * @property {number} k_EMsgClientSetClientAppUpdateState=5524 k_EMsgClientSetClientAppUpdateState value
     * @property {number} k_EMsgClientSetClientAppUpdateStateResponse=5525 k_EMsgClientSetClientAppUpdateStateResponse value
     * @property {number} k_EMsgClientRequestEncryptedAppTicket=5526 k_EMsgClientRequestEncryptedAppTicket value
     * @property {number} k_EMsgClientRequestEncryptedAppTicketResponse=5527 k_EMsgClientRequestEncryptedAppTicketResponse value
     * @property {number} k_EMsgClientWalletInfoUpdate=5528 k_EMsgClientWalletInfoUpdate value
     * @property {number} k_EMsgClientLBSSetUGC=5529 k_EMsgClientLBSSetUGC value
     * @property {number} k_EMsgClientLBSSetUGCResponse=5530 k_EMsgClientLBSSetUGCResponse value
     * @property {number} k_EMsgClientAMGetClanOfficers=5531 k_EMsgClientAMGetClanOfficers value
     * @property {number} k_EMsgClientAMGetClanOfficersResponse=5532 k_EMsgClientAMGetClanOfficersResponse value
     * @property {number} k_EMsgClientFriendProfileInfo=5535 k_EMsgClientFriendProfileInfo value
     * @property {number} k_EMsgClientFriendProfileInfoResponse=5536 k_EMsgClientFriendProfileInfoResponse value
     * @property {number} k_EMsgClientUpdateMachineAuth=5537 k_EMsgClientUpdateMachineAuth value
     * @property {number} k_EMsgClientUpdateMachineAuthResponse=5538 k_EMsgClientUpdateMachineAuthResponse value
     * @property {number} k_EMsgClientReadMachineAuth=5539 k_EMsgClientReadMachineAuth value
     * @property {number} k_EMsgClientReadMachineAuthResponse=5540 k_EMsgClientReadMachineAuthResponse value
     * @property {number} k_EMsgClientRequestMachineAuth=5541 k_EMsgClientRequestMachineAuth value
     * @property {number} k_EMsgClientRequestMachineAuthResponse=5542 k_EMsgClientRequestMachineAuthResponse value
     * @property {number} k_EMsgClientScreenshotsChanged=5543 k_EMsgClientScreenshotsChanged value
     * @property {number} k_EMsgClientGetCDNAuthToken=5546 k_EMsgClientGetCDNAuthToken value
     * @property {number} k_EMsgClientGetCDNAuthTokenResponse=5547 k_EMsgClientGetCDNAuthTokenResponse value
     * @property {number} k_EMsgClientDownloadRateStatistics=5548 k_EMsgClientDownloadRateStatistics value
     * @property {number} k_EMsgClientRequestAccountData=5549 k_EMsgClientRequestAccountData value
     * @property {number} k_EMsgClientRequestAccountDataResponse=5550 k_EMsgClientRequestAccountDataResponse value
     * @property {number} k_EMsgClientResetForgottenPassword4=5551 k_EMsgClientResetForgottenPassword4 value
     * @property {number} k_EMsgClientHideFriend=5552 k_EMsgClientHideFriend value
     * @property {number} k_EMsgClientFriendsGroupsList=5553 k_EMsgClientFriendsGroupsList value
     * @property {number} k_EMsgClientGetClanActivityCounts=5554 k_EMsgClientGetClanActivityCounts value
     * @property {number} k_EMsgClientGetClanActivityCountsResponse=5555 k_EMsgClientGetClanActivityCountsResponse value
     * @property {number} k_EMsgClientOGSReportString=5556 k_EMsgClientOGSReportString value
     * @property {number} k_EMsgClientOGSReportBug=5557 k_EMsgClientOGSReportBug value
     * @property {number} k_EMsgClientSentLogs=5558 k_EMsgClientSentLogs value
     * @property {number} k_EMsgClientLogonGameServer=5559 k_EMsgClientLogonGameServer value
     * @property {number} k_EMsgAMClientCreateFriendsGroup=5560 k_EMsgAMClientCreateFriendsGroup value
     * @property {number} k_EMsgAMClientCreateFriendsGroupResponse=5561 k_EMsgAMClientCreateFriendsGroupResponse value
     * @property {number} k_EMsgAMClientDeleteFriendsGroup=5562 k_EMsgAMClientDeleteFriendsGroup value
     * @property {number} k_EMsgAMClientDeleteFriendsGroupResponse=5563 k_EMsgAMClientDeleteFriendsGroupResponse value
     * @property {number} k_EMsgAMClientManageFriendsGroup=5564 k_EMsgAMClientManageFriendsGroup value
     * @property {number} k_EMsgAMClientManageFriendsGroupResponse=5565 k_EMsgAMClientManageFriendsGroupResponse value
     * @property {number} k_EMsgAMClientAddFriendToGroup=5566 k_EMsgAMClientAddFriendToGroup value
     * @property {number} k_EMsgAMClientAddFriendToGroupResponse=5567 k_EMsgAMClientAddFriendToGroupResponse value
     * @property {number} k_EMsgAMClientRemoveFriendFromGroup=5568 k_EMsgAMClientRemoveFriendFromGroup value
     * @property {number} k_EMsgAMClientRemoveFriendFromGroupResponse=5569 k_EMsgAMClientRemoveFriendFromGroupResponse value
     * @property {number} k_EMsgClientAMGetPersonaNameHistory=5570 k_EMsgClientAMGetPersonaNameHistory value
     * @property {number} k_EMsgClientAMGetPersonaNameHistoryResponse=5571 k_EMsgClientAMGetPersonaNameHistoryResponse value
     * @property {number} k_EMsgClientRequestFreeLicense=5572 k_EMsgClientRequestFreeLicense value
     * @property {number} k_EMsgClientRequestFreeLicenseResponse=5573 k_EMsgClientRequestFreeLicenseResponse value
     * @property {number} k_EMsgClientDRMDownloadRequestWithCrashData=5574 k_EMsgClientDRMDownloadRequestWithCrashData value
     * @property {number} k_EMsgClientAuthListAck=5575 k_EMsgClientAuthListAck value
     * @property {number} k_EMsgClientItemAnnouncements=5576 k_EMsgClientItemAnnouncements value
     * @property {number} k_EMsgClientRequestItemAnnouncements=5577 k_EMsgClientRequestItemAnnouncements value
     * @property {number} k_EMsgClientFriendMsgEchoToSender=5578 k_EMsgClientFriendMsgEchoToSender value
     * @property {number} k_EMsgClientOGSGameServerPingSample=5581 k_EMsgClientOGSGameServerPingSample value
     * @property {number} k_EMsgClientCommentNotifications=5582 k_EMsgClientCommentNotifications value
     * @property {number} k_EMsgClientRequestCommentNotifications=5583 k_EMsgClientRequestCommentNotifications value
     * @property {number} k_EMsgClientPersonaChangeResponse=5584 k_EMsgClientPersonaChangeResponse value
     * @property {number} k_EMsgClientRequestWebAPIAuthenticateUserNonce=5585 k_EMsgClientRequestWebAPIAuthenticateUserNonce value
     * @property {number} k_EMsgClientRequestWebAPIAuthenticateUserNonceResponse=5586 k_EMsgClientRequestWebAPIAuthenticateUserNonceResponse value
     * @property {number} k_EMsgClientPlayerNicknameList=5587 k_EMsgClientPlayerNicknameList value
     * @property {number} k_EMsgAMClientSetPlayerNickname=5588 k_EMsgAMClientSetPlayerNickname value
     * @property {number} k_EMsgAMClientSetPlayerNicknameResponse=5589 k_EMsgAMClientSetPlayerNicknameResponse value
     * @property {number} k_EMsgClientGetNumberOfCurrentPlayersDP=5592 k_EMsgClientGetNumberOfCurrentPlayersDP value
     * @property {number} k_EMsgClientGetNumberOfCurrentPlayersDPResponse=5593 k_EMsgClientGetNumberOfCurrentPlayersDPResponse value
     * @property {number} k_EMsgClientServiceMethodLegacy=5594 k_EMsgClientServiceMethodLegacy value
     * @property {number} k_EMsgClientServiceMethodLegacyResponse=5595 k_EMsgClientServiceMethodLegacyResponse value
     * @property {number} k_EMsgClientFriendUserStatusPublished=5596 k_EMsgClientFriendUserStatusPublished value
     * @property {number} k_EMsgClientCurrentUIMode=5597 k_EMsgClientCurrentUIMode value
     * @property {number} k_EMsgClientVanityURLChangedNotification=5598 k_EMsgClientVanityURLChangedNotification value
     * @property {number} k_EMsgClientUserNotifications=5599 k_EMsgClientUserNotifications value
     * @property {number} k_EMsgBaseDFS=5600 k_EMsgBaseDFS value
     * @property {number} k_EMsgDFSGetFile=5601 k_EMsgDFSGetFile value
     * @property {number} k_EMsgDFSInstallLocalFile=5602 k_EMsgDFSInstallLocalFile value
     * @property {number} k_EMsgDFSConnection=5603 k_EMsgDFSConnection value
     * @property {number} k_EMsgDFSConnectionReply=5604 k_EMsgDFSConnectionReply value
     * @property {number} k_EMsgClientDFSAuthenticateRequest=5605 k_EMsgClientDFSAuthenticateRequest value
     * @property {number} k_EMsgClientDFSAuthenticateResponse=5606 k_EMsgClientDFSAuthenticateResponse value
     * @property {number} k_EMsgClientDFSEndSession=5607 k_EMsgClientDFSEndSession value
     * @property {number} k_EMsgDFSPurgeFile=5608 k_EMsgDFSPurgeFile value
     * @property {number} k_EMsgDFSRouteFile=5609 k_EMsgDFSRouteFile value
     * @property {number} k_EMsgDFSGetFileFromServer=5610 k_EMsgDFSGetFileFromServer value
     * @property {number} k_EMsgDFSAcceptedResponse=5611 k_EMsgDFSAcceptedResponse value
     * @property {number} k_EMsgDFSRequestPingback=5612 k_EMsgDFSRequestPingback value
     * @property {number} k_EMsgDFSRecvTransmitFile=5613 k_EMsgDFSRecvTransmitFile value
     * @property {number} k_EMsgDFSSendTransmitFile=5614 k_EMsgDFSSendTransmitFile value
     * @property {number} k_EMsgDFSRequestPingback2=5615 k_EMsgDFSRequestPingback2 value
     * @property {number} k_EMsgDFSResponsePingback2=5616 k_EMsgDFSResponsePingback2 value
     * @property {number} k_EMsgClientDFSDownloadStatus=5617 k_EMsgClientDFSDownloadStatus value
     * @property {number} k_EMsgDFSStartTransfer=5618 k_EMsgDFSStartTransfer value
     * @property {number} k_EMsgDFSTransferComplete=5619 k_EMsgDFSTransferComplete value
     * @property {number} k_EMsgDFSRouteFileResponse=5620 k_EMsgDFSRouteFileResponse value
     * @property {number} k_EMsgClientNetworkingCertRequest=5621 k_EMsgClientNetworkingCertRequest value
     * @property {number} k_EMsgClientNetworkingCertRequestResponse=5622 k_EMsgClientNetworkingCertRequestResponse value
     * @property {number} k_EMsgClientChallengeRequest=5623 k_EMsgClientChallengeRequest value
     * @property {number} k_EMsgClientChallengeResponse=5624 k_EMsgClientChallengeResponse value
     * @property {number} k_EMsgBadgeCraftedNotification=5625 k_EMsgBadgeCraftedNotification value
     * @property {number} k_EMsgClientNetworkingMobileCertRequest=5626 k_EMsgClientNetworkingMobileCertRequest value
     * @property {number} k_EMsgClientNetworkingMobileCertRequestResponse=5627 k_EMsgClientNetworkingMobileCertRequestResponse value
     * @property {number} k_EMsgBaseMDS=5800 k_EMsgBaseMDS value
     * @property {number} k_EMsgAMToMDSGetDepotDecryptionKey=5812 k_EMsgAMToMDSGetDepotDecryptionKey value
     * @property {number} k_EMsgMDSToAMGetDepotDecryptionKeyResponse=5813 k_EMsgMDSToAMGetDepotDecryptionKeyResponse value
     * @property {number} k_EMsgMDSContentServerConfigRequest=5827 k_EMsgMDSContentServerConfigRequest value
     * @property {number} k_EMsgMDSContentServerConfig=5828 k_EMsgMDSContentServerConfig value
     * @property {number} k_EMsgMDSGetDepotManifest=5829 k_EMsgMDSGetDepotManifest value
     * @property {number} k_EMsgMDSGetDepotManifestResponse=5830 k_EMsgMDSGetDepotManifestResponse value
     * @property {number} k_EMsgMDSGetDepotManifestChunk=5831 k_EMsgMDSGetDepotManifestChunk value
     * @property {number} k_EMsgMDSGetDepotChunk=5832 k_EMsgMDSGetDepotChunk value
     * @property {number} k_EMsgMDSGetDepotChunkResponse=5833 k_EMsgMDSGetDepotChunkResponse value
     * @property {number} k_EMsgMDSGetDepotChunkChunk=5834 k_EMsgMDSGetDepotChunkChunk value
     * @property {number} k_EMsgMDSToCSFlushChunk=5844 k_EMsgMDSToCSFlushChunk value
     * @property {number} k_EMsgMDSMigrateChunk=5847 k_EMsgMDSMigrateChunk value
     * @property {number} k_EMsgMDSMigrateChunkResponse=5848 k_EMsgMDSMigrateChunkResponse value
     * @property {number} k_EMsgMDSToCSFlushManifest=5849 k_EMsgMDSToCSFlushManifest value
     * @property {number} k_EMsgCSBase=6200 k_EMsgCSBase value
     * @property {number} k_EMsgCSPing=6201 k_EMsgCSPing value
     * @property {number} k_EMsgCSPingResponse=6202 k_EMsgCSPingResponse value
     * @property {number} k_EMsgGMSBase=6400 k_EMsgGMSBase value
     * @property {number} k_EMsgGMSGameServerReplicate=6401 k_EMsgGMSGameServerReplicate value
     * @property {number} k_EMsgClientGMSServerQuery=6403 k_EMsgClientGMSServerQuery value
     * @property {number} k_EMsgGMSClientServerQueryResponse=6404 k_EMsgGMSClientServerQueryResponse value
     * @property {number} k_EMsgAMGMSGameServerUpdate=6405 k_EMsgAMGMSGameServerUpdate value
     * @property {number} k_EMsgAMGMSGameServerRemove=6406 k_EMsgAMGMSGameServerRemove value
     * @property {number} k_EMsgGameServerOutOfDate=6407 k_EMsgGameServerOutOfDate value
     * @property {number} k_EMsgDeviceAuthorizationBase=6500 k_EMsgDeviceAuthorizationBase value
     * @property {number} k_EMsgClientAuthorizeLocalDeviceRequest=6501 k_EMsgClientAuthorizeLocalDeviceRequest value
     * @property {number} k_EMsgClientAuthorizeLocalDeviceResponse=6502 k_EMsgClientAuthorizeLocalDeviceResponse value
     * @property {number} k_EMsgClientDeauthorizeDeviceRequest=6503 k_EMsgClientDeauthorizeDeviceRequest value
     * @property {number} k_EMsgClientDeauthorizeDevice=6504 k_EMsgClientDeauthorizeDevice value
     * @property {number} k_EMsgClientUseLocalDeviceAuthorizations=6505 k_EMsgClientUseLocalDeviceAuthorizations value
     * @property {number} k_EMsgClientGetAuthorizedDevices=6506 k_EMsgClientGetAuthorizedDevices value
     * @property {number} k_EMsgClientGetAuthorizedDevicesResponse=6507 k_EMsgClientGetAuthorizedDevicesResponse value
     * @property {number} k_EMsgAMNotifySessionDeviceAuthorized=6508 k_EMsgAMNotifySessionDeviceAuthorized value
     * @property {number} k_EMsgClientAuthorizeLocalDeviceNotification=6509 k_EMsgClientAuthorizeLocalDeviceNotification value
     * @property {number} k_EMsgMMSBase=6600 k_EMsgMMSBase value
     * @property {number} k_EMsgClientMMSCreateLobby=6601 k_EMsgClientMMSCreateLobby value
     * @property {number} k_EMsgClientMMSCreateLobbyResponse=6602 k_EMsgClientMMSCreateLobbyResponse value
     * @property {number} k_EMsgClientMMSJoinLobby=6603 k_EMsgClientMMSJoinLobby value
     * @property {number} k_EMsgClientMMSJoinLobbyResponse=6604 k_EMsgClientMMSJoinLobbyResponse value
     * @property {number} k_EMsgClientMMSLeaveLobby=6605 k_EMsgClientMMSLeaveLobby value
     * @property {number} k_EMsgClientMMSLeaveLobbyResponse=6606 k_EMsgClientMMSLeaveLobbyResponse value
     * @property {number} k_EMsgClientMMSGetLobbyList=6607 k_EMsgClientMMSGetLobbyList value
     * @property {number} k_EMsgClientMMSGetLobbyListResponse=6608 k_EMsgClientMMSGetLobbyListResponse value
     * @property {number} k_EMsgClientMMSSetLobbyData=6609 k_EMsgClientMMSSetLobbyData value
     * @property {number} k_EMsgClientMMSSetLobbyDataResponse=6610 k_EMsgClientMMSSetLobbyDataResponse value
     * @property {number} k_EMsgClientMMSGetLobbyData=6611 k_EMsgClientMMSGetLobbyData value
     * @property {number} k_EMsgClientMMSLobbyData=6612 k_EMsgClientMMSLobbyData value
     * @property {number} k_EMsgClientMMSSendLobbyChatMsg=6613 k_EMsgClientMMSSendLobbyChatMsg value
     * @property {number} k_EMsgClientMMSLobbyChatMsg=6614 k_EMsgClientMMSLobbyChatMsg value
     * @property {number} k_EMsgClientMMSSetLobbyOwner=6615 k_EMsgClientMMSSetLobbyOwner value
     * @property {number} k_EMsgClientMMSSetLobbyOwnerResponse=6616 k_EMsgClientMMSSetLobbyOwnerResponse value
     * @property {number} k_EMsgClientMMSSetLobbyGameServer=6617 k_EMsgClientMMSSetLobbyGameServer value
     * @property {number} k_EMsgClientMMSLobbyGameServerSet=6618 k_EMsgClientMMSLobbyGameServerSet value
     * @property {number} k_EMsgClientMMSUserJoinedLobby=6619 k_EMsgClientMMSUserJoinedLobby value
     * @property {number} k_EMsgClientMMSUserLeftLobby=6620 k_EMsgClientMMSUserLeftLobby value
     * @property {number} k_EMsgClientMMSInviteToLobby=6621 k_EMsgClientMMSInviteToLobby value
     * @property {number} k_EMsgClientMMSFlushFrenemyListCache=6622 k_EMsgClientMMSFlushFrenemyListCache value
     * @property {number} k_EMsgClientMMSFlushFrenemyListCacheResponse=6623 k_EMsgClientMMSFlushFrenemyListCacheResponse value
     * @property {number} k_EMsgClientMMSSetLobbyLinked=6624 k_EMsgClientMMSSetLobbyLinked value
     * @property {number} k_EMsgClientMMSSetRatelimitPolicyOnClient=6625 k_EMsgClientMMSSetRatelimitPolicyOnClient value
     * @property {number} k_EMsgClientMMSGetLobbyStatus=6626 k_EMsgClientMMSGetLobbyStatus value
     * @property {number} k_EMsgClientMMSGetLobbyStatusResponse=6627 k_EMsgClientMMSGetLobbyStatusResponse value
     * @property {number} k_EMsgMMSGetLobbyList=6628 k_EMsgMMSGetLobbyList value
     * @property {number} k_EMsgMMSGetLobbyListResponse=6629 k_EMsgMMSGetLobbyListResponse value
     * @property {number} k_EMsgNonStdMsgBase=6800 k_EMsgNonStdMsgBase value
     * @property {number} k_EMsgNonStdMsgMemcached=6801 k_EMsgNonStdMsgMemcached value
     * @property {number} k_EMsgNonStdMsgHTTPServer=6802 k_EMsgNonStdMsgHTTPServer value
     * @property {number} k_EMsgNonStdMsgHTTPClient=6803 k_EMsgNonStdMsgHTTPClient value
     * @property {number} k_EMsgNonStdMsgWGResponse=6804 k_EMsgNonStdMsgWGResponse value
     * @property {number} k_EMsgNonStdMsgPHPSimulator=6805 k_EMsgNonStdMsgPHPSimulator value
     * @property {number} k_EMsgNonStdMsgChase=6806 k_EMsgNonStdMsgChase value
     * @property {number} k_EMsgNonStdMsgDFSTransfer=6807 k_EMsgNonStdMsgDFSTransfer value
     * @property {number} k_EMsgNonStdMsgTests=6808 k_EMsgNonStdMsgTests value
     * @property {number} k_EMsgNonStdMsgUMQpipeAAPL=6809 k_EMsgNonStdMsgUMQpipeAAPL value
     * @property {number} k_EMSgNonStdMsgSyslog=6810 k_EMSgNonStdMsgSyslog value
     * @property {number} k_EMsgNonStdMsgLogsink=6811 k_EMsgNonStdMsgLogsink value
     * @property {number} k_EMsgNonStdMsgSteam2Emulator=6812 k_EMsgNonStdMsgSteam2Emulator value
     * @property {number} k_EMsgNonStdMsgRTMPServer=6813 k_EMsgNonStdMsgRTMPServer value
     * @property {number} k_EMsgNonStdMsgWebSocket=6814 k_EMsgNonStdMsgWebSocket value
     * @property {number} k_EMsgNonStdMsgRedis=6815 k_EMsgNonStdMsgRedis value
     * @property {number} k_EMsgUDSBase=7000 k_EMsgUDSBase value
     * @property {number} k_EMsgClientUDSP2PSessionStarted=7001 k_EMsgClientUDSP2PSessionStarted value
     * @property {number} k_EMsgClientUDSP2PSessionEnded=7002 k_EMsgClientUDSP2PSessionEnded value
     * @property {number} k_EMsgUDSRenderUserAuth=7003 k_EMsgUDSRenderUserAuth value
     * @property {number} k_EMsgUDSRenderUserAuthResponse=7004 k_EMsgUDSRenderUserAuthResponse value
     * @property {number} k_EMsgClientInviteToGame=7005 k_EMsgClientInviteToGame value
     * @property {number} k_EMsgUDSHasSession=7006 k_EMsgUDSHasSession value
     * @property {number} k_EMsgUDSHasSessionResponse=7007 k_EMsgUDSHasSessionResponse value
     * @property {number} k_EMsgMPASBase=7100 k_EMsgMPASBase value
     * @property {number} k_EMsgMPASVacBanReset=7101 k_EMsgMPASVacBanReset value
     * @property {number} k_EMsgKGSBase=7200 k_EMsgKGSBase value
     * @property {number} k_EMsgUCMBase=7300 k_EMsgUCMBase value
     * @property {number} k_EMsgClientUCMAddScreenshot=7301 k_EMsgClientUCMAddScreenshot value
     * @property {number} k_EMsgClientUCMAddScreenshotResponse=7302 k_EMsgClientUCMAddScreenshotResponse value
     * @property {number} k_EMsgUCMResetCommunityContent=7307 k_EMsgUCMResetCommunityContent value
     * @property {number} k_EMsgUCMResetCommunityContentResponse=7308 k_EMsgUCMResetCommunityContentResponse value
     * @property {number} k_EMsgClientUCMDeleteScreenshot=7309 k_EMsgClientUCMDeleteScreenshot value
     * @property {number} k_EMsgClientUCMDeleteScreenshotResponse=7310 k_EMsgClientUCMDeleteScreenshotResponse value
     * @property {number} k_EMsgClientUCMPublishFile=7311 k_EMsgClientUCMPublishFile value
     * @property {number} k_EMsgClientUCMPublishFileResponse=7312 k_EMsgClientUCMPublishFileResponse value
     * @property {number} k_EMsgClientUCMDeletePublishedFile=7315 k_EMsgClientUCMDeletePublishedFile value
     * @property {number} k_EMsgClientUCMDeletePublishedFileResponse=7316 k_EMsgClientUCMDeletePublishedFileResponse value
     * @property {number} k_EMsgClientUCMEnumerateUserPublishedFiles=7317 k_EMsgClientUCMEnumerateUserPublishedFiles value
     * @property {number} k_EMsgClientUCMEnumerateUserPublishedFilesResponse=7318 k_EMsgClientUCMEnumerateUserPublishedFilesResponse value
     * @property {number} k_EMsgClientUCMEnumerateUserSubscribedFiles=7321 k_EMsgClientUCMEnumerateUserSubscribedFiles value
     * @property {number} k_EMsgClientUCMEnumerateUserSubscribedFilesResponse=7322 k_EMsgClientUCMEnumerateUserSubscribedFilesResponse value
     * @property {number} k_EMsgClientUCMUpdatePublishedFile=7325 k_EMsgClientUCMUpdatePublishedFile value
     * @property {number} k_EMsgClientUCMUpdatePublishedFileResponse=7326 k_EMsgClientUCMUpdatePublishedFileResponse value
     * @property {number} k_EMsgUCMUpdatePublishedFile=7327 k_EMsgUCMUpdatePublishedFile value
     * @property {number} k_EMsgUCMUpdatePublishedFileResponse=7328 k_EMsgUCMUpdatePublishedFileResponse value
     * @property {number} k_EMsgUCMDeletePublishedFile=7329 k_EMsgUCMDeletePublishedFile value
     * @property {number} k_EMsgUCMDeletePublishedFileResponse=7330 k_EMsgUCMDeletePublishedFileResponse value
     * @property {number} k_EMsgUCMUpdatePublishedFileStat=7331 k_EMsgUCMUpdatePublishedFileStat value
     * @property {number} k_EMsgUCMReloadPublishedFile=7337 k_EMsgUCMReloadPublishedFile value
     * @property {number} k_EMsgUCMReloadUserFileListCaches=7338 k_EMsgUCMReloadUserFileListCaches value
     * @property {number} k_EMsgUCMPublishedFileReported=7339 k_EMsgUCMPublishedFileReported value
     * @property {number} k_EMsgUCMPublishedFilePreviewAdd=7341 k_EMsgUCMPublishedFilePreviewAdd value
     * @property {number} k_EMsgUCMPublishedFilePreviewAddResponse=7342 k_EMsgUCMPublishedFilePreviewAddResponse value
     * @property {number} k_EMsgUCMPublishedFilePreviewRemove=7343 k_EMsgUCMPublishedFilePreviewRemove value
     * @property {number} k_EMsgUCMPublishedFilePreviewRemoveResponse=7344 k_EMsgUCMPublishedFilePreviewRemoveResponse value
     * @property {number} k_EMsgUCMPublishedFileSubscribed=7349 k_EMsgUCMPublishedFileSubscribed value
     * @property {number} k_EMsgUCMPublishedFileUnsubscribed=7350 k_EMsgUCMPublishedFileUnsubscribed value
     * @property {number} k_EMsgUCMPublishFile=7351 k_EMsgUCMPublishFile value
     * @property {number} k_EMsgUCMPublishFileResponse=7352 k_EMsgUCMPublishFileResponse value
     * @property {number} k_EMsgUCMPublishedFileChildAdd=7353 k_EMsgUCMPublishedFileChildAdd value
     * @property {number} k_EMsgUCMPublishedFileChildAddResponse=7354 k_EMsgUCMPublishedFileChildAddResponse value
     * @property {number} k_EMsgUCMPublishedFileChildRemove=7355 k_EMsgUCMPublishedFileChildRemove value
     * @property {number} k_EMsgUCMPublishedFileChildRemoveResponse=7356 k_EMsgUCMPublishedFileChildRemoveResponse value
     * @property {number} k_EMsgUCMPublishedFileParentChanged=7359 k_EMsgUCMPublishedFileParentChanged value
     * @property {number} k_EMsgClientUCMGetPublishedFilesForUser=7360 k_EMsgClientUCMGetPublishedFilesForUser value
     * @property {number} k_EMsgClientUCMGetPublishedFilesForUserResponse=7361 k_EMsgClientUCMGetPublishedFilesForUserResponse value
     * @property {number} k_EMsgClientUCMSetUserPublishedFileAction=7364 k_EMsgClientUCMSetUserPublishedFileAction value
     * @property {number} k_EMsgClientUCMSetUserPublishedFileActionResponse=7365 k_EMsgClientUCMSetUserPublishedFileActionResponse value
     * @property {number} k_EMsgClientUCMEnumeratePublishedFilesByUserAction=7366 k_EMsgClientUCMEnumeratePublishedFilesByUserAction value
     * @property {number} k_EMsgClientUCMEnumeratePublishedFilesByUserActionResponse=7367 k_EMsgClientUCMEnumeratePublishedFilesByUserActionResponse value
     * @property {number} k_EMsgUCMGetUserSubscribedFiles=7369 k_EMsgUCMGetUserSubscribedFiles value
     * @property {number} k_EMsgUCMGetUserSubscribedFilesResponse=7370 k_EMsgUCMGetUserSubscribedFilesResponse value
     * @property {number} k_EMsgUCMFixStatsPublishedFile=7371 k_EMsgUCMFixStatsPublishedFile value
     * @property {number} k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdates=7378 k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdates value
     * @property {number} k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse=7379 k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse value
     * @property {number} k_EMsgUCMPublishedFileContentUpdated=7380 k_EMsgUCMPublishedFileContentUpdated value
     * @property {number} k_EMsgClientUCMPublishedFileUpdated=7381 k_EMsgClientUCMPublishedFileUpdated value
     * @property {number} k_EMsgClientWorkshopItemChangesRequest=7382 k_EMsgClientWorkshopItemChangesRequest value
     * @property {number} k_EMsgClientWorkshopItemChangesResponse=7383 k_EMsgClientWorkshopItemChangesResponse value
     * @property {number} k_EMsgClientWorkshopItemInfoRequest=7384 k_EMsgClientWorkshopItemInfoRequest value
     * @property {number} k_EMsgClientWorkshopItemInfoResponse=7385 k_EMsgClientWorkshopItemInfoResponse value
     * @property {number} k_EMsgFSBase=7500 k_EMsgFSBase value
     * @property {number} k_EMsgClientRichPresenceUpload=7501 k_EMsgClientRichPresenceUpload value
     * @property {number} k_EMsgClientRichPresenceRequest=7502 k_EMsgClientRichPresenceRequest value
     * @property {number} k_EMsgClientRichPresenceInfo=7503 k_EMsgClientRichPresenceInfo value
     * @property {number} k_EMsgFSRichPresenceRequest=7504 k_EMsgFSRichPresenceRequest value
     * @property {number} k_EMsgFSRichPresenceResponse=7505 k_EMsgFSRichPresenceResponse value
     * @property {number} k_EMsgFSComputeFrenematrix=7506 k_EMsgFSComputeFrenematrix value
     * @property {number} k_EMsgFSComputeFrenematrixResponse=7507 k_EMsgFSComputeFrenematrixResponse value
     * @property {number} k_EMsgFSPlayStatusNotification=7508 k_EMsgFSPlayStatusNotification value
     * @property {number} k_EMsgFSAddOrRemoveFollower=7510 k_EMsgFSAddOrRemoveFollower value
     * @property {number} k_EMsgFSAddOrRemoveFollowerResponse=7511 k_EMsgFSAddOrRemoveFollowerResponse value
     * @property {number} k_EMsgFSUpdateFollowingList=7512 k_EMsgFSUpdateFollowingList value
     * @property {number} k_EMsgFSCommentNotification=7513 k_EMsgFSCommentNotification value
     * @property {number} k_EMsgFSCommentNotificationViewed=7514 k_EMsgFSCommentNotificationViewed value
     * @property {number} k_EMsgClientFSGetFollowerCount=7515 k_EMsgClientFSGetFollowerCount value
     * @property {number} k_EMsgClientFSGetFollowerCountResponse=7516 k_EMsgClientFSGetFollowerCountResponse value
     * @property {number} k_EMsgClientFSGetIsFollowing=7517 k_EMsgClientFSGetIsFollowing value
     * @property {number} k_EMsgClientFSGetIsFollowingResponse=7518 k_EMsgClientFSGetIsFollowingResponse value
     * @property {number} k_EMsgClientFSEnumerateFollowingList=7519 k_EMsgClientFSEnumerateFollowingList value
     * @property {number} k_EMsgClientFSEnumerateFollowingListResponse=7520 k_EMsgClientFSEnumerateFollowingListResponse value
     * @property {number} k_EMsgFSGetPendingNotificationCount=7521 k_EMsgFSGetPendingNotificationCount value
     * @property {number} k_EMsgFSGetPendingNotificationCountResponse=7522 k_EMsgFSGetPendingNotificationCountResponse value
     * @property {number} k_EMsgClientChatOfflineMessageNotification=7523 k_EMsgClientChatOfflineMessageNotification value
     * @property {number} k_EMsgClientChatRequestOfflineMessageCount=7524 k_EMsgClientChatRequestOfflineMessageCount value
     * @property {number} k_EMsgClientChatGetFriendMessageHistory=7525 k_EMsgClientChatGetFriendMessageHistory value
     * @property {number} k_EMsgClientChatGetFriendMessageHistoryResponse=7526 k_EMsgClientChatGetFriendMessageHistoryResponse value
     * @property {number} k_EMsgClientChatGetFriendMessageHistoryForOfflineMessages=7527 k_EMsgClientChatGetFriendMessageHistoryForOfflineMessages value
     * @property {number} k_EMsgClientFSGetFriendsSteamLevels=7528 k_EMsgClientFSGetFriendsSteamLevels value
     * @property {number} k_EMsgClientFSGetFriendsSteamLevelsResponse=7529 k_EMsgClientFSGetFriendsSteamLevelsResponse value
     * @property {number} k_EMsgAMRequestFriendData=7530 k_EMsgAMRequestFriendData value
     * @property {number} k_EMsgDRMRange2=7600 k_EMsgDRMRange2 value
     * @property {number} k_EMsgCEGVersionSetEnableDisableRequest=7600 k_EMsgCEGVersionSetEnableDisableRequest value
     * @property {number} k_EMsgCEGVersionSetEnableDisableResponse=7601 k_EMsgCEGVersionSetEnableDisableResponse value
     * @property {number} k_EMsgCEGPropStatusDRMSRequest=7602 k_EMsgCEGPropStatusDRMSRequest value
     * @property {number} k_EMsgCEGPropStatusDRMSResponse=7603 k_EMsgCEGPropStatusDRMSResponse value
     * @property {number} k_EMsgCEGWhackFailureReportRequest=7604 k_EMsgCEGWhackFailureReportRequest value
     * @property {number} k_EMsgCEGWhackFailureReportResponse=7605 k_EMsgCEGWhackFailureReportResponse value
     * @property {number} k_EMsgDRMSFetchVersionSet=7606 k_EMsgDRMSFetchVersionSet value
     * @property {number} k_EMsgDRMSFetchVersionSetResponse=7607 k_EMsgDRMSFetchVersionSetResponse value
     * @property {number} k_EMsgEconBase=7700 k_EMsgEconBase value
     * @property {number} k_EMsgEconTrading_InitiateTradeRequest=7701 k_EMsgEconTrading_InitiateTradeRequest value
     * @property {number} k_EMsgEconTrading_InitiateTradeProposed=7702 k_EMsgEconTrading_InitiateTradeProposed value
     * @property {number} k_EMsgEconTrading_InitiateTradeResponse=7703 k_EMsgEconTrading_InitiateTradeResponse value
     * @property {number} k_EMsgEconTrading_InitiateTradeResult=7704 k_EMsgEconTrading_InitiateTradeResult value
     * @property {number} k_EMsgEconTrading_StartSession=7705 k_EMsgEconTrading_StartSession value
     * @property {number} k_EMsgEconTrading_CancelTradeRequest=7706 k_EMsgEconTrading_CancelTradeRequest value
     * @property {number} k_EMsgEconFlushInventoryCache=7707 k_EMsgEconFlushInventoryCache value
     * @property {number} k_EMsgEconFlushInventoryCacheResponse=7708 k_EMsgEconFlushInventoryCacheResponse value
     * @property {number} k_EMsgEconCDKeyProcessTransaction=7711 k_EMsgEconCDKeyProcessTransaction value
     * @property {number} k_EMsgEconCDKeyProcessTransactionResponse=7712 k_EMsgEconCDKeyProcessTransactionResponse value
     * @property {number} k_EMsgEconGetErrorLogs=7713 k_EMsgEconGetErrorLogs value
     * @property {number} k_EMsgEconGetErrorLogsResponse=7714 k_EMsgEconGetErrorLogsResponse value
     * @property {number} k_EMsgRMRange=7800 k_EMsgRMRange value
     * @property {number} k_EMsgRMTestVerisignOTP=7800 k_EMsgRMTestVerisignOTP value
     * @property {number} k_EMsgRMTestVerisignOTPResponse=7801 k_EMsgRMTestVerisignOTPResponse value
     * @property {number} k_EMsgRMDeleteMemcachedKeys=7803 k_EMsgRMDeleteMemcachedKeys value
     * @property {number} k_EMsgRMRemoteInvoke=7804 k_EMsgRMRemoteInvoke value
     * @property {number} k_EMsgBadLoginIPList=7805 k_EMsgBadLoginIPList value
     * @property {number} k_EMsgRMMsgTraceAddTrigger=7806 k_EMsgRMMsgTraceAddTrigger value
     * @property {number} k_EMsgRMMsgTraceRemoveTrigger=7807 k_EMsgRMMsgTraceRemoveTrigger value
     * @property {number} k_EMsgRMMsgTraceEvent=7808 k_EMsgRMMsgTraceEvent value
     * @property {number} k_EMsgUGSBase=7900 k_EMsgUGSBase value
     * @property {number} k_EMsgUGSUpdateGlobalStats=7900 k_EMsgUGSUpdateGlobalStats value
     * @property {number} k_EMsgClientUGSGetGlobalStats=7901 k_EMsgClientUGSGetGlobalStats value
     * @property {number} k_EMsgClientUGSGetGlobalStatsResponse=7902 k_EMsgClientUGSGetGlobalStatsResponse value
     * @property {number} k_EMsgStoreBase=8000 k_EMsgStoreBase value
     * @property {number} k_EMsgUMQBase=8100 k_EMsgUMQBase value
     * @property {number} k_EMsgUMQLogonRequest=8100 k_EMsgUMQLogonRequest value
     * @property {number} k_EMsgUMQLogonResponse=8101 k_EMsgUMQLogonResponse value
     * @property {number} k_EMsgUMQLogoffRequest=8102 k_EMsgUMQLogoffRequest value
     * @property {number} k_EMsgUMQLogoffResponse=8103 k_EMsgUMQLogoffResponse value
     * @property {number} k_EMsgUMQSendChatMessage=8104 k_EMsgUMQSendChatMessage value
     * @property {number} k_EMsgUMQIncomingChatMessage=8105 k_EMsgUMQIncomingChatMessage value
     * @property {number} k_EMsgUMQPoll=8106 k_EMsgUMQPoll value
     * @property {number} k_EMsgUMQPollResults=8107 k_EMsgUMQPollResults value
     * @property {number} k_EMsgUMQ2AM_ClientMsgBatch=8108 k_EMsgUMQ2AM_ClientMsgBatch value
     * @property {number} k_EMsgWorkshopBase=8200 k_EMsgWorkshopBase value
     * @property {number} k_EMsgWebAPIBase=8300 k_EMsgWebAPIBase value
     * @property {number} k_EMsgWebAPIValidateOAuth2Token=8300 k_EMsgWebAPIValidateOAuth2Token value
     * @property {number} k_EMsgWebAPIValidateOAuth2TokenResponse=8301 k_EMsgWebAPIValidateOAuth2TokenResponse value
     * @property {number} k_EMsgWebAPIRegisterGCInterfaces=8303 k_EMsgWebAPIRegisterGCInterfaces value
     * @property {number} k_EMsgWebAPIInvalidateOAuthClientCache=8304 k_EMsgWebAPIInvalidateOAuthClientCache value
     * @property {number} k_EMsgWebAPIInvalidateOAuthTokenCache=8305 k_EMsgWebAPIInvalidateOAuthTokenCache value
     * @property {number} k_EMsgWebAPISetSecrets=8306 k_EMsgWebAPISetSecrets value
     * @property {number} k_EMsgBackpackBase=8400 k_EMsgBackpackBase value
     * @property {number} k_EMsgBackpackAddToCurrency=8401 k_EMsgBackpackAddToCurrency value
     * @property {number} k_EMsgBackpackAddToCurrencyResponse=8402 k_EMsgBackpackAddToCurrencyResponse value
     * @property {number} k_EMsgCREBase=8500 k_EMsgCREBase value
     * @property {number} k_EMsgCREItemVoteSummary=8503 k_EMsgCREItemVoteSummary value
     * @property {number} k_EMsgCREItemVoteSummaryResponse=8504 k_EMsgCREItemVoteSummaryResponse value
     * @property {number} k_EMsgCREUpdateUserPublishedItemVote=8507 k_EMsgCREUpdateUserPublishedItemVote value
     * @property {number} k_EMsgCREUpdateUserPublishedItemVoteResponse=8508 k_EMsgCREUpdateUserPublishedItemVoteResponse value
     * @property {number} k_EMsgCREGetUserPublishedItemVoteDetails=8509 k_EMsgCREGetUserPublishedItemVoteDetails value
     * @property {number} k_EMsgCREGetUserPublishedItemVoteDetailsResponse=8510 k_EMsgCREGetUserPublishedItemVoteDetailsResponse value
     * @property {number} k_EMsgCREPublishedFileVoteAdded=8513 k_EMsgCREPublishedFileVoteAdded value
     * @property {number} k_EMsgSecretsBase=8600 k_EMsgSecretsBase value
     * @property {number} k_EMsgSecretsRequestCredentialPair=8600 k_EMsgSecretsRequestCredentialPair value
     * @property {number} k_EMsgSecretsCredentialPairResponse=8601 k_EMsgSecretsCredentialPairResponse value
     * @property {number} k_EMsgBoxMonitorBase=8700 k_EMsgBoxMonitorBase value
     * @property {number} k_EMsgBoxMonitorReportRequest=8700 k_EMsgBoxMonitorReportRequest value
     * @property {number} k_EMsgBoxMonitorReportResponse=8701 k_EMsgBoxMonitorReportResponse value
     * @property {number} k_EMsgLogsinkBase=8800 k_EMsgLogsinkBase value
     * @property {number} k_EMsgLogsinkWriteReport=8800 k_EMsgLogsinkWriteReport value
     * @property {number} k_EMsgPICSBase=8900 k_EMsgPICSBase value
     * @property {number} k_EMsgClientPICSChangesSinceRequest=8901 k_EMsgClientPICSChangesSinceRequest value
     * @property {number} k_EMsgClientPICSChangesSinceResponse=8902 k_EMsgClientPICSChangesSinceResponse value
     * @property {number} k_EMsgClientPICSProductInfoRequest=8903 k_EMsgClientPICSProductInfoRequest value
     * @property {number} k_EMsgClientPICSProductInfoResponse=8904 k_EMsgClientPICSProductInfoResponse value
     * @property {number} k_EMsgClientPICSAccessTokenRequest=8905 k_EMsgClientPICSAccessTokenRequest value
     * @property {number} k_EMsgClientPICSAccessTokenResponse=8906 k_EMsgClientPICSAccessTokenResponse value
     * @property {number} k_EMsgWorkerProcess=9000 k_EMsgWorkerProcess value
     * @property {number} k_EMsgWorkerProcessPingRequest=9000 k_EMsgWorkerProcessPingRequest value
     * @property {number} k_EMsgWorkerProcessPingResponse=9001 k_EMsgWorkerProcessPingResponse value
     * @property {number} k_EMsgWorkerProcessShutdown=9002 k_EMsgWorkerProcessShutdown value
     * @property {number} k_EMsgDRMWorkerProcess=9100 k_EMsgDRMWorkerProcess value
     * @property {number} k_EMsgDRMWorkerProcessDRMAndSign=9100 k_EMsgDRMWorkerProcessDRMAndSign value
     * @property {number} k_EMsgDRMWorkerProcessDRMAndSignResponse=9101 k_EMsgDRMWorkerProcessDRMAndSignResponse value
     * @property {number} k_EMsgDRMWorkerProcessSteamworksInfoRequest=9102 k_EMsgDRMWorkerProcessSteamworksInfoRequest value
     * @property {number} k_EMsgDRMWorkerProcessSteamworksInfoResponse=9103 k_EMsgDRMWorkerProcessSteamworksInfoResponse value
     * @property {number} k_EMsgDRMWorkerProcessInstallDRMDLLRequest=9104 k_EMsgDRMWorkerProcessInstallDRMDLLRequest value
     * @property {number} k_EMsgDRMWorkerProcessInstallDRMDLLResponse=9105 k_EMsgDRMWorkerProcessInstallDRMDLLResponse value
     * @property {number} k_EMsgDRMWorkerProcessSecretIdStringRequest=9106 k_EMsgDRMWorkerProcessSecretIdStringRequest value
     * @property {number} k_EMsgDRMWorkerProcessSecretIdStringResponse=9107 k_EMsgDRMWorkerProcessSecretIdStringResponse value
     * @property {number} k_EMsgDRMWorkerProcessInstallProcessedFilesRequest=9110 k_EMsgDRMWorkerProcessInstallProcessedFilesRequest value
     * @property {number} k_EMsgDRMWorkerProcessInstallProcessedFilesResponse=9111 k_EMsgDRMWorkerProcessInstallProcessedFilesResponse value
     * @property {number} k_EMsgDRMWorkerProcessExamineBlobRequest=9112 k_EMsgDRMWorkerProcessExamineBlobRequest value
     * @property {number} k_EMsgDRMWorkerProcessExamineBlobResponse=9113 k_EMsgDRMWorkerProcessExamineBlobResponse value
     * @property {number} k_EMsgDRMWorkerProcessDescribeSecretRequest=9114 k_EMsgDRMWorkerProcessDescribeSecretRequest value
     * @property {number} k_EMsgDRMWorkerProcessDescribeSecretResponse=9115 k_EMsgDRMWorkerProcessDescribeSecretResponse value
     * @property {number} k_EMsgDRMWorkerProcessBackfillOriginalRequest=9116 k_EMsgDRMWorkerProcessBackfillOriginalRequest value
     * @property {number} k_EMsgDRMWorkerProcessBackfillOriginalResponse=9117 k_EMsgDRMWorkerProcessBackfillOriginalResponse value
     * @property {number} k_EMsgDRMWorkerProcessValidateDRMDLLRequest=9118 k_EMsgDRMWorkerProcessValidateDRMDLLRequest value
     * @property {number} k_EMsgDRMWorkerProcessValidateDRMDLLResponse=9119 k_EMsgDRMWorkerProcessValidateDRMDLLResponse value
     * @property {number} k_EMsgDRMWorkerProcessValidateFileRequest=9120 k_EMsgDRMWorkerProcessValidateFileRequest value
     * @property {number} k_EMsgDRMWorkerProcessValidateFileResponse=9121 k_EMsgDRMWorkerProcessValidateFileResponse value
     * @property {number} k_EMsgDRMWorkerProcessSplitAndInstallRequest=9122 k_EMsgDRMWorkerProcessSplitAndInstallRequest value
     * @property {number} k_EMsgDRMWorkerProcessSplitAndInstallResponse=9123 k_EMsgDRMWorkerProcessSplitAndInstallResponse value
     * @property {number} k_EMsgDRMWorkerProcessGetBlobRequest=9124 k_EMsgDRMWorkerProcessGetBlobRequest value
     * @property {number} k_EMsgDRMWorkerProcessGetBlobResponse=9125 k_EMsgDRMWorkerProcessGetBlobResponse value
     * @property {number} k_EMsgDRMWorkerProcessEvaluateCrashRequest=9126 k_EMsgDRMWorkerProcessEvaluateCrashRequest value
     * @property {number} k_EMsgDRMWorkerProcessEvaluateCrashResponse=9127 k_EMsgDRMWorkerProcessEvaluateCrashResponse value
     * @property {number} k_EMsgDRMWorkerProcessAnalyzeFileRequest=9128 k_EMsgDRMWorkerProcessAnalyzeFileRequest value
     * @property {number} k_EMsgDRMWorkerProcessAnalyzeFileResponse=9129 k_EMsgDRMWorkerProcessAnalyzeFileResponse value
     * @property {number} k_EMsgDRMWorkerProcessUnpackBlobRequest=9130 k_EMsgDRMWorkerProcessUnpackBlobRequest value
     * @property {number} k_EMsgDRMWorkerProcessUnpackBlobResponse=9131 k_EMsgDRMWorkerProcessUnpackBlobResponse value
     * @property {number} k_EMsgDRMWorkerProcessInstallAllRequest=9132 k_EMsgDRMWorkerProcessInstallAllRequest value
     * @property {number} k_EMsgDRMWorkerProcessInstallAllResponse=9133 k_EMsgDRMWorkerProcessInstallAllResponse value
     * @property {number} k_EMsgTestWorkerProcess=9200 k_EMsgTestWorkerProcess value
     * @property {number} k_EMsgTestWorkerProcessLoadUnloadModuleRequest=9200 k_EMsgTestWorkerProcessLoadUnloadModuleRequest value
     * @property {number} k_EMsgTestWorkerProcessLoadUnloadModuleResponse=9201 k_EMsgTestWorkerProcessLoadUnloadModuleResponse value
     * @property {number} k_EMsgTestWorkerProcessServiceModuleCallRequest=9202 k_EMsgTestWorkerProcessServiceModuleCallRequest value
     * @property {number} k_EMsgTestWorkerProcessServiceModuleCallResponse=9203 k_EMsgTestWorkerProcessServiceModuleCallResponse value
     * @property {number} k_EMsgQuestServerBase=9300 k_EMsgQuestServerBase value
     * @property {number} k_EMsgClientGetEmoticonList=9330 k_EMsgClientGetEmoticonList value
     * @property {number} k_EMsgClientEmoticonList=9331 k_EMsgClientEmoticonList value
     * @property {number} k_EMsgSLCBase=9400 k_EMsgSLCBase value
     * @property {number} k_EMsgSLCUserSessionStatus=9400 k_EMsgSLCUserSessionStatus value
     * @property {number} k_EMsgSLCRequestUserSessionStatus=9401 k_EMsgSLCRequestUserSessionStatus value
     * @property {number} k_EMsgSLCSharedLicensesLockStatus=9402 k_EMsgSLCSharedLicensesLockStatus value
     * @property {number} k_EMsgClientSharedLibraryLockStatus=9405 k_EMsgClientSharedLibraryLockStatus value
     * @property {number} k_EMsgClientSharedLibraryStopPlaying=9406 k_EMsgClientSharedLibraryStopPlaying value
     * @property {number} k_EMsgSLCOwnerLibraryChanged=9407 k_EMsgSLCOwnerLibraryChanged value
     * @property {number} k_EMsgSLCSharedLibraryChanged=9408 k_EMsgSLCSharedLibraryChanged value
     * @property {number} k_EMsgRemoteClientBase=9500 k_EMsgRemoteClientBase value
     * @property {number} k_EMsgRemoteClientAuth_OBSOLETE=9500 k_EMsgRemoteClientAuth_OBSOLETE value
     * @property {number} k_EMsgRemoteClientAuthResponse_OBSOLETE=9501 k_EMsgRemoteClientAuthResponse_OBSOLETE value
     * @property {number} k_EMsgRemoteClientAppStatus=9502 k_EMsgRemoteClientAppStatus value
     * @property {number} k_EMsgRemoteClientStartStream=9503 k_EMsgRemoteClientStartStream value
     * @property {number} k_EMsgRemoteClientStartStreamResponse=9504 k_EMsgRemoteClientStartStreamResponse value
     * @property {number} k_EMsgRemoteClientPing=9505 k_EMsgRemoteClientPing value
     * @property {number} k_EMsgRemoteClientPingResponse=9506 k_EMsgRemoteClientPingResponse value
     * @property {number} k_EMsgClientUnlockStreaming=9507 k_EMsgClientUnlockStreaming value
     * @property {number} k_EMsgClientUnlockStreamingResponse=9508 k_EMsgClientUnlockStreamingResponse value
     * @property {number} k_EMsgRemoteClientAcceptEULA=9509 k_EMsgRemoteClientAcceptEULA value
     * @property {number} k_EMsgRemoteClientGetControllerConfig=9510 k_EMsgRemoteClientGetControllerConfig value
     * @property {number} k_EMsgRemoteClientGetControllerConfigResponse=9511 k_EMsgRemoteClientGetControllerConfigResponse value
     * @property {number} k_EMsgRemoteClientStreamingEnabled=9512 k_EMsgRemoteClientStreamingEnabled value
     * @property {number} k_EMsgClientUnlockHEVC=9513 k_EMsgClientUnlockHEVC value
     * @property {number} k_EMsgClientUnlockHEVCResponse=9514 k_EMsgClientUnlockHEVCResponse value
     * @property {number} k_EMsgRemoteClientStatusRequest=9515 k_EMsgRemoteClientStatusRequest value
     * @property {number} k_EMsgRemoteClientStatusResponse=9516 k_EMsgRemoteClientStatusResponse value
     * @property {number} k_EMsgClientConcurrentSessionsBase=9600 k_EMsgClientConcurrentSessionsBase value
     * @property {number} k_EMsgClientPlayingSessionState=9600 k_EMsgClientPlayingSessionState value
     * @property {number} k_EMsgClientKickPlayingSession=9601 k_EMsgClientKickPlayingSession value
     * @property {number} k_EMsgClientBroadcastBase=9700 k_EMsgClientBroadcastBase value
     * @property {number} k_EMsgClientBroadcastInit=9700 k_EMsgClientBroadcastInit value
     * @property {number} k_EMsgClientBroadcastFrames=9701 k_EMsgClientBroadcastFrames value
     * @property {number} k_EMsgClientBroadcastDisconnect=9702 k_EMsgClientBroadcastDisconnect value
     * @property {number} k_EMsgClientBroadcastScreenshot=9703 k_EMsgClientBroadcastScreenshot value
     * @property {number} k_EMsgClientBroadcastUploadConfig=9704 k_EMsgClientBroadcastUploadConfig value
     * @property {number} k_EMsgBaseClient3=9800 k_EMsgBaseClient3 value
     * @property {number} k_EMsgClientVoiceCallPreAuthorize=9800 k_EMsgClientVoiceCallPreAuthorize value
     * @property {number} k_EMsgClientVoiceCallPreAuthorizeResponse=9801 k_EMsgClientVoiceCallPreAuthorizeResponse value
     * @property {number} k_EMsgClientServerTimestampRequest=9802 k_EMsgClientServerTimestampRequest value
     * @property {number} k_EMsgClientServerTimestampResponse=9803 k_EMsgClientServerTimestampResponse value
     * @property {number} k_EMsgClientLANP2PBase=9900 k_EMsgClientLANP2PBase value
     * @property {number} k_EMsgClientLANP2PRequestChunk=9900 k_EMsgClientLANP2PRequestChunk value
     * @property {number} k_EMsgClientLANP2PRequestChunkResponse=9901 k_EMsgClientLANP2PRequestChunkResponse value
     * @property {number} k_EMsgClientLANP2PMax=9999 k_EMsgClientLANP2PMax value
     * @property {number} k_EMsgBaseWatchdogServer=10000 k_EMsgBaseWatchdogServer value
     * @property {number} k_EMsgNotifyWatchdog=10000 k_EMsgNotifyWatchdog value
     * @property {number} k_EMsgClientSiteLicenseBase=10100 k_EMsgClientSiteLicenseBase value
     * @property {number} k_EMsgClientSiteLicenseSiteInfoNotification=10100 k_EMsgClientSiteLicenseSiteInfoNotification value
     * @property {number} k_EMsgClientSiteLicenseCheckout=10101 k_EMsgClientSiteLicenseCheckout value
     * @property {number} k_EMsgClientSiteLicenseCheckoutResponse=10102 k_EMsgClientSiteLicenseCheckoutResponse value
     * @property {number} k_EMsgClientSiteLicenseGetAvailableSeats=10103 k_EMsgClientSiteLicenseGetAvailableSeats value
     * @property {number} k_EMsgClientSiteLicenseGetAvailableSeatsResponse=10104 k_EMsgClientSiteLicenseGetAvailableSeatsResponse value
     * @property {number} k_EMsgClientSiteLicenseGetContentCacheInfo=10105 k_EMsgClientSiteLicenseGetContentCacheInfo value
     * @property {number} k_EMsgClientSiteLicenseGetContentCacheInfoResponse=10106 k_EMsgClientSiteLicenseGetContentCacheInfoResponse value
     * @property {number} k_EMsgBaseChatServer=12000 k_EMsgBaseChatServer value
     * @property {number} k_EMsgChatServerGetPendingNotificationCount=12000 k_EMsgChatServerGetPendingNotificationCount value
     * @property {number} k_EMsgChatServerGetPendingNotificationCountResponse=12001 k_EMsgChatServerGetPendingNotificationCountResponse value
     * @property {number} k_EMsgBaseSecretServer=12100 k_EMsgBaseSecretServer value
     * @property {number} k_EMsgServerSecretChanged=12100 k_EMsgServerSecretChanged value
     */
    $root.EMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EMsgInvalid"] = 0;
        values[valuesById[1] = "k_EMsgMulti"] = 1;
        values[valuesById[2] = "k_EMsgProtobufWrapped"] = 2;
        values[valuesById[100] = "k_EMsgBaseGeneral"] = 100;
        values["k_EMsgGenericReply"] = 100;
        values[valuesById[113] = "k_EMsgDestJobFailed"] = 113;
        values[valuesById[115] = "k_EMsgAlert"] = 115;
        values[valuesById[120] = "k_EMsgSCIDRequest"] = 120;
        values[valuesById[121] = "k_EMsgSCIDResponse"] = 121;
        values[valuesById[123] = "k_EMsgJobHeartbeat"] = 123;
        values[valuesById[124] = "k_EMsgHubConnect"] = 124;
        values[valuesById[126] = "k_EMsgSubscribe"] = 126;
        values[valuesById[127] = "k_EMRouteMessage"] = 127;
        values[valuesById[130] = "k_EMsgWGRequest"] = 130;
        values[valuesById[131] = "k_EMsgWGResponse"] = 131;
        values[valuesById[132] = "k_EMsgKeepAlive"] = 132;
        values[valuesById[133] = "k_EMsgWebAPIJobRequest"] = 133;
        values[valuesById[134] = "k_EMsgWebAPIJobResponse"] = 134;
        values[valuesById[135] = "k_EMsgClientSessionStart"] = 135;
        values[valuesById[136] = "k_EMsgClientSessionEnd"] = 136;
        values[valuesById[137] = "k_EMsgClientSessionUpdate"] = 137;
        values[valuesById[138] = "k_EMsgStatsDeprecated"] = 138;
        values[valuesById[139] = "k_EMsgPing"] = 139;
        values[valuesById[140] = "k_EMsgPingResponse"] = 140;
        values[valuesById[141] = "k_EMsgStats"] = 141;
        values[valuesById[142] = "k_EMsgRequestFullStatsBlock"] = 142;
        values[valuesById[143] = "k_EMsgLoadDBOCacheItem"] = 143;
        values[valuesById[144] = "k_EMsgLoadDBOCacheItemResponse"] = 144;
        values[valuesById[145] = "k_EMsgInvalidateDBOCacheItems"] = 145;
        values[valuesById[146] = "k_EMsgServiceMethod"] = 146;
        values[valuesById[147] = "k_EMsgServiceMethodResponse"] = 147;
        values[valuesById[148] = "k_EMsgClientPackageVersions"] = 148;
        values[valuesById[149] = "k_EMsgTimestampRequest"] = 149;
        values[valuesById[150] = "k_EMsgTimestampResponse"] = 150;
        values[valuesById[151] = "k_EMsgServiceMethodCallFromClient"] = 151;
        values[valuesById[152] = "k_EMsgServiceMethodSendToClient"] = 152;
        values[valuesById[200] = "k_EMsgBaseShell"] = 200;
        values["k_EMsgAssignSysID"] = 200;
        values[valuesById[201] = "k_EMsgExit"] = 201;
        values[valuesById[202] = "k_EMsgDirRequest"] = 202;
        values[valuesById[203] = "k_EMsgDirResponse"] = 203;
        values[valuesById[204] = "k_EMsgZipRequest"] = 204;
        values[valuesById[205] = "k_EMsgZipResponse"] = 205;
        values[valuesById[215] = "k_EMsgUpdateRecordResponse"] = 215;
        values[valuesById[221] = "k_EMsgUpdateCreditCardRequest"] = 221;
        values[valuesById[225] = "k_EMsgUpdateUserBanResponse"] = 225;
        values[valuesById[226] = "k_EMsgPrepareToExit"] = 226;
        values[valuesById[227] = "k_EMsgContentDescriptionUpdate"] = 227;
        values[valuesById[228] = "k_EMsgTestResetServer"] = 228;
        values[valuesById[229] = "k_EMsgUniverseChanged"] = 229;
        values[valuesById[230] = "k_EMsgShellConfigInfoUpdate"] = 230;
        values[valuesById[233] = "k_EMsgRequestWindowsEventLogEntries"] = 233;
        values[valuesById[234] = "k_EMsgProvideWindowsEventLogEntries"] = 234;
        values[valuesById[235] = "k_EMsgShellSearchLogs"] = 235;
        values[valuesById[236] = "k_EMsgShellSearchLogsResponse"] = 236;
        values[valuesById[237] = "k_EMsgShellCheckWindowsUpdates"] = 237;
        values[valuesById[238] = "k_EMsgShellCheckWindowsUpdatesResponse"] = 238;
        values[valuesById[240] = "k_EMsgTestFlushDelayedSQL"] = 240;
        values[valuesById[241] = "k_EMsgTestFlushDelayedSQLResponse"] = 241;
        values[valuesById[242] = "k_EMsgEnsureExecuteScheduledTask_TEST"] = 242;
        values[valuesById[243] = "k_EMsgEnsureExecuteScheduledTaskResponse_TEST"] = 243;
        values[valuesById[244] = "k_EMsgUpdateScheduledTaskEnableState_TEST"] = 244;
        values[valuesById[245] = "k_EMsgUpdateScheduledTaskEnableStateResponse_TEST"] = 245;
        values[valuesById[246] = "k_EMsgContentDescriptionDeltaUpdate"] = 246;
        values[valuesById[300] = "k_EMsgBaseGM"] = 300;
        values["k_EMsgHeartbeat"] = 300;
        values[valuesById[301] = "k_EMsgShellFailed"] = 301;
        values[valuesById[307] = "k_EMsgExitShells"] = 307;
        values[valuesById[308] = "k_EMsgExitShell"] = 308;
        values[valuesById[309] = "k_EMsgGracefulExitShell"] = 309;
        values[valuesById[316] = "k_EMsgLicenseProcessingComplete"] = 316;
        values[valuesById[317] = "k_EMsgSetTestFlag"] = 317;
        values[valuesById[318] = "k_EMsgQueuedEmailsComplete"] = 318;
        values[valuesById[319] = "k_EMsgGMReportPHPError"] = 319;
        values[valuesById[320] = "k_EMsgGMDRMSync"] = 320;
        values[valuesById[321] = "k_EMsgPhysicalBoxInventory"] = 321;
        values[valuesById[322] = "k_EMsgUpdateConfigFile"] = 322;
        values[valuesById[323] = "k_EMsgTestInitDB"] = 323;
        values[valuesById[324] = "k_EMsgGMWriteConfigToSQL"] = 324;
        values[valuesById[325] = "k_EMsgGMLoadActivationCodes"] = 325;
        values[valuesById[326] = "k_EMsgGMQueueForFBS"] = 326;
        values[valuesById[327] = "k_EMsgGMSchemaConversionResults"] = 327;
        values[valuesById[329] = "k_EMsgGMWriteShellFailureToSQL"] = 329;
        values[valuesById[330] = "k_EMsgGMWriteStatsToSOS"] = 330;
        values[valuesById[331] = "k_EMsgGMGetServiceMethodRouting"] = 331;
        values[valuesById[332] = "k_EMsgGMGetServiceMethodRoutingResponse"] = 332;
        values[valuesById[334] = "k_EMsgGMTestNextBuildSchemaConversion"] = 334;
        values[valuesById[335] = "k_EMsgGMTestNextBuildSchemaConversionResponse"] = 335;
        values[valuesById[336] = "k_EMsgExpectShellRestart"] = 336;
        values[valuesById[337] = "k_EMsgHotFixProgress"] = 337;
        values[valuesById[400] = "k_EMsgBaseAIS"] = 400;
        values[valuesById[402] = "k_EMsgAISRequestContentDescription"] = 402;
        values[valuesById[403] = "k_EMsgAISUpdateAppInfo"] = 403;
        values[valuesById[405] = "k_EMsgAISGetPackageChangeNumber"] = 405;
        values[valuesById[406] = "k_EMsgAISGetPackageChangeNumberResponse"] = 406;
        values[valuesById[423] = "k_EMsgAIGetAppGCFlags"] = 423;
        values[valuesById[424] = "k_EMsgAIGetAppGCFlagsResponse"] = 424;
        values[valuesById[425] = "k_EMsgAIGetAppList"] = 425;
        values[valuesById[426] = "k_EMsgAIGetAppListResponse"] = 426;
        values[valuesById[429] = "k_EMsgAISGetCouponDefinition"] = 429;
        values[valuesById[430] = "k_EMsgAISGetCouponDefinitionResponse"] = 430;
        values[valuesById[431] = "k_EMsgAISUpdateSlaveContentDescription"] = 431;
        values[valuesById[432] = "k_EMsgAISUpdateSlaveContentDescriptionResponse"] = 432;
        values[valuesById[433] = "k_EMsgAISTestEnableGC"] = 433;
        values[valuesById[500] = "k_EMsgBaseAM"] = 500;
        values[valuesById[504] = "k_EMsgAMUpdateUserBanRequest"] = 504;
        values[valuesById[505] = "k_EMsgAMAddLicense"] = 505;
        values[valuesById[508] = "k_EMsgAMSendSystemIMToUser"] = 508;
        values[valuesById[509] = "k_EMsgAMExtendLicense"] = 509;
        values[valuesById[510] = "k_EMsgAMAddMinutesToLicense"] = 510;
        values[valuesById[511] = "k_EMsgAMCancelLicense"] = 511;
        values[valuesById[512] = "k_EMsgAMInitPurchase"] = 512;
        values[valuesById[513] = "k_EMsgAMPurchaseResponse"] = 513;
        values[valuesById[514] = "k_EMsgAMGetFinalPrice"] = 514;
        values[valuesById[515] = "k_EMsgAMGetFinalPriceResponse"] = 515;
        values[valuesById[516] = "k_EMsgAMGetLegacyGameKey"] = 516;
        values[valuesById[517] = "k_EMsgAMGetLegacyGameKeyResponse"] = 517;
        values[valuesById[518] = "k_EMsgAMFindHungTransactions"] = 518;
        values[valuesById[519] = "k_EMsgAMSetAccountTrustedRequest"] = 519;
        values[valuesById[522] = "k_EMsgAMCancelPurchase"] = 522;
        values[valuesById[523] = "k_EMsgAMNewChallenge"] = 523;
        values[valuesById[524] = "k_EMsgAMLoadOEMTickets"] = 524;
        values[valuesById[525] = "k_EMsgAMFixPendingPurchase"] = 525;
        values[valuesById[526] = "k_EMsgAMFixPendingPurchaseResponse"] = 526;
        values[valuesById[527] = "k_EMsgAMIsUserBanned"] = 527;
        values[valuesById[528] = "k_EMsgAMRegisterKey"] = 528;
        values[valuesById[529] = "k_EMsgAMLoadActivationCodes"] = 529;
        values[valuesById[530] = "k_EMsgAMLoadActivationCodesResponse"] = 530;
        values[valuesById[531] = "k_EMsgAMLookupKeyResponse"] = 531;
        values[valuesById[532] = "k_EMsgAMLookupKey"] = 532;
        values[valuesById[533] = "k_EMsgAMChatCleanup"] = 533;
        values[valuesById[534] = "k_EMsgAMClanCleanup"] = 534;
        values[valuesById[535] = "k_EMsgAMFixPendingRefund"] = 535;
        values[valuesById[536] = "k_EMsgAMReverseChargeback"] = 536;
        values[valuesById[537] = "k_EMsgAMReverseChargebackResponse"] = 537;
        values[valuesById[538] = "k_EMsgAMClanCleanupList"] = 538;
        values[valuesById[539] = "k_EMsgAMGetLicenses"] = 539;
        values[valuesById[540] = "k_EMsgAMGetLicensesResponse"] = 540;
        values[valuesById[541] = "k_EMsgAMSendCartRepurchase"] = 541;
        values[valuesById[542] = "k_EMsgAMSendCartRepurchaseResponse"] = 542;
        values[valuesById[550] = "k_EMsgAllowUserToPlayQuery"] = 550;
        values[valuesById[551] = "k_EMsgAllowUserToPlayResponse"] = 551;
        values[valuesById[552] = "k_EMsgAMVerfiyUser"] = 552;
        values[valuesById[553] = "k_EMsgAMClientNotPlaying"] = 553;
        values[valuesById[554] = "k_EMsgAMClientRequestFriendship"] = 554;
        values[valuesById[555] = "k_EMsgAMRelayPublishStatus"] = 555;
        values[valuesById[560] = "k_EMsgAMInitPurchaseResponse"] = 560;
        values[valuesById[561] = "k_EMsgAMRevokePurchaseResponse"] = 561;
        values[valuesById[563] = "k_EMsgAMRefreshGuestPasses"] = 563;
        values[valuesById[566] = "k_EMsgAMGrantGuestPasses"] = 566;
        values[valuesById[567] = "k_EMsgAMClanDataUpdated"] = 567;
        values[valuesById[568] = "k_EMsgAMReloadAccount"] = 568;
        values[valuesById[569] = "k_EMsgAMClientChatMsgRelay"] = 569;
        values[valuesById[570] = "k_EMsgAMChatMulti"] = 570;
        values[valuesById[571] = "k_EMsgAMClientChatInviteRelay"] = 571;
        values[valuesById[572] = "k_EMsgAMChatInvite"] = 572;
        values[valuesById[573] = "k_EMsgAMClientJoinChatRelay"] = 573;
        values[valuesById[574] = "k_EMsgAMClientChatMemberInfoRelay"] = 574;
        values[valuesById[575] = "k_EMsgAMPublishChatMemberInfo"] = 575;
        values[valuesById[576] = "k_EMsgAMClientAcceptFriendInvite"] = 576;
        values[valuesById[577] = "k_EMsgAMChatEnter"] = 577;
        values[valuesById[578] = "k_EMsgAMClientPublishRemovalFromSource"] = 578;
        values[valuesById[579] = "k_EMsgAMChatActionResult"] = 579;
        values[valuesById[580] = "k_EMsgAMFindAccounts"] = 580;
        values[valuesById[581] = "k_EMsgAMFindAccountsResponse"] = 581;
        values[valuesById[582] = "k_EMsgAMRequestAccountData"] = 582;
        values[valuesById[583] = "k_EMsgAMRequestAccountDataResponse"] = 583;
        values[valuesById[584] = "k_EMsgAMSetAccountFlags"] = 584;
        values[valuesById[586] = "k_EMsgAMCreateClan"] = 586;
        values[valuesById[587] = "k_EMsgAMCreateClanResponse"] = 587;
        values[valuesById[588] = "k_EMsgAMGetClanDetails"] = 588;
        values[valuesById[589] = "k_EMsgAMGetClanDetailsResponse"] = 589;
        values[valuesById[590] = "k_EMsgAMSetPersonaName"] = 590;
        values[valuesById[591] = "k_EMsgAMSetAvatar"] = 591;
        values[valuesById[592] = "k_EMsgAMAuthenticateUser"] = 592;
        values[valuesById[593] = "k_EMsgAMAuthenticateUserResponse"] = 593;
        values[valuesById[596] = "k_EMsgAMP2PIntroducerMessage"] = 596;
        values[valuesById[597] = "k_EMsgClientChatAction"] = 597;
        values[valuesById[598] = "k_EMsgAMClientChatActionRelay"] = 598;
        values[valuesById[600] = "k_EMsgBaseVS"] = 600;
        values["k_EMsgReqChallenge"] = 600;
        values[valuesById[601] = "k_EMsgVACResponse"] = 601;
        values[valuesById[602] = "k_EMsgReqChallengeTest"] = 602;
        values[valuesById[604] = "k_EMsgVSMarkCheat"] = 604;
        values[valuesById[605] = "k_EMsgVSAddCheat"] = 605;
        values[valuesById[606] = "k_EMsgVSPurgeCodeModDB"] = 606;
        values[valuesById[607] = "k_EMsgVSGetChallengeResults"] = 607;
        values[valuesById[608] = "k_EMsgVSChallengeResultText"] = 608;
        values[valuesById[609] = "k_EMsgVSReportLingerer"] = 609;
        values[valuesById[610] = "k_EMsgVSRequestManagedChallenge"] = 610;
        values[valuesById[611] = "k_EMsgVSLoadDBFinished"] = 611;
        values[valuesById[625] = "k_EMsgBaseDRMS"] = 625;
        values[valuesById[628] = "k_EMsgDRMBuildBlobRequest"] = 628;
        values[valuesById[629] = "k_EMsgDRMBuildBlobResponse"] = 629;
        values[valuesById[630] = "k_EMsgDRMResolveGuidRequest"] = 630;
        values[valuesById[631] = "k_EMsgDRMResolveGuidResponse"] = 631;
        values[valuesById[633] = "k_EMsgDRMVariabilityReport"] = 633;
        values[valuesById[634] = "k_EMsgDRMVariabilityReportResponse"] = 634;
        values[valuesById[635] = "k_EMsgDRMStabilityReport"] = 635;
        values[valuesById[636] = "k_EMsgDRMStabilityReportResponse"] = 636;
        values[valuesById[637] = "k_EMsgDRMDetailsReportRequest"] = 637;
        values[valuesById[638] = "k_EMsgDRMDetailsReportResponse"] = 638;
        values[valuesById[639] = "k_EMsgDRMProcessFile"] = 639;
        values[valuesById[640] = "k_EMsgDRMAdminUpdate"] = 640;
        values[valuesById[641] = "k_EMsgDRMAdminUpdateResponse"] = 641;
        values[valuesById[642] = "k_EMsgDRMSync"] = 642;
        values[valuesById[643] = "k_EMsgDRMSyncResponse"] = 643;
        values[valuesById[644] = "k_EMsgDRMProcessFileResponse"] = 644;
        values[valuesById[645] = "k_EMsgDRMEmptyGuidCache"] = 645;
        values[valuesById[646] = "k_EMsgDRMEmptyGuidCacheResponse"] = 646;
        values[valuesById[650] = "k_EMsgBaseCS"] = 650;
        values[valuesById[700] = "k_EMsgBaseClient"] = 700;
        values[valuesById[701] = "k_EMsgClientLogOn_Deprecated"] = 701;
        values[valuesById[702] = "k_EMsgClientAnonLogOn_Deprecated"] = 702;
        values[valuesById[703] = "k_EMsgClientHeartBeat"] = 703;
        values[valuesById[704] = "k_EMsgClientVACResponse"] = 704;
        values[valuesById[705] = "k_EMsgClientGamesPlayed_obsolete"] = 705;
        values[valuesById[706] = "k_EMsgClientLogOff"] = 706;
        values[valuesById[707] = "k_EMsgClientNoUDPConnectivity"] = 707;
        values[valuesById[710] = "k_EMsgClientConnectionStats"] = 710;
        values[valuesById[712] = "k_EMsgClientPingResponse"] = 712;
        values[valuesById[714] = "k_EMsgClientRemoveFriend"] = 714;
        values[valuesById[715] = "k_EMsgClientGamesPlayedNoDataBlob"] = 715;
        values[valuesById[716] = "k_EMsgClientChangeStatus"] = 716;
        values[valuesById[717] = "k_EMsgClientVacStatusResponse"] = 717;
        values[valuesById[718] = "k_EMsgClientFriendMsg"] = 718;
        values[valuesById[719] = "k_EMsgClientGameConnect_obsolete"] = 719;
        values[valuesById[720] = "k_EMsgClientGamesPlayed2_obsolete"] = 720;
        values[valuesById[721] = "k_EMsgClientGameEnded_obsolete"] = 721;
        values[valuesById[726] = "k_EMsgClientSystemIM"] = 726;
        values[valuesById[727] = "k_EMsgClientSystemIMAck"] = 727;
        values[valuesById[728] = "k_EMsgClientGetLicenses"] = 728;
        values[valuesById[730] = "k_EMsgClientGetLegacyGameKey"] = 730;
        values[valuesById[731] = "k_EMsgClientContentServerLogOn_Deprecated"] = 731;
        values[valuesById[732] = "k_EMsgClientAckVACBan2"] = 732;
        values[valuesById[736] = "k_EMsgClientGetPurchaseReceipts"] = 736;
        values[valuesById[738] = "k_EMsgClientGamesPlayed3_obsolete"] = 738;
        values[valuesById[740] = "k_EMsgClientAckGuestPass"] = 740;
        values[valuesById[741] = "k_EMsgClientRedeemGuestPass"] = 741;
        values[valuesById[742] = "k_EMsgClientGamesPlayed"] = 742;
        values[valuesById[743] = "k_EMsgClientRegisterKey"] = 743;
        values[valuesById[744] = "k_EMsgClientInviteUserToClan"] = 744;
        values[valuesById[745] = "k_EMsgClientAcknowledgeClanInvite"] = 745;
        values[valuesById[746] = "k_EMsgClientPurchaseWithMachineID"] = 746;
        values[valuesById[747] = "k_EMsgClientAppUsageEvent"] = 747;
        values[valuesById[751] = "k_EMsgClientLogOnResponse"] = 751;
        values[valuesById[755] = "k_EMsgClientSetHeartbeatRate"] = 755;
        values[valuesById[756] = "k_EMsgClientNotLoggedOnDeprecated"] = 756;
        values[valuesById[757] = "k_EMsgClientLoggedOff"] = 757;
        values[valuesById[758] = "k_EMsgGSApprove"] = 758;
        values[valuesById[759] = "k_EMsgGSDeny"] = 759;
        values[valuesById[760] = "k_EMsgGSKick"] = 760;
        values[valuesById[761] = "k_EMsgClientCreateAcctResponse"] = 761;
        values[valuesById[763] = "k_EMsgClientPurchaseResponse"] = 763;
        values[valuesById[764] = "k_EMsgClientPing"] = 764;
        values[valuesById[765] = "k_EMsgClientNOP"] = 765;
        values[valuesById[766] = "k_EMsgClientPersonaState"] = 766;
        values[valuesById[767] = "k_EMsgClientFriendsList"] = 767;
        values[valuesById[768] = "k_EMsgClientAccountInfo"] = 768;
        values[valuesById[771] = "k_EMsgClientNewsUpdate"] = 771;
        values[valuesById[773] = "k_EMsgClientGameConnectDeny"] = 773;
        values[valuesById[774] = "k_EMsgGSStatusReply"] = 774;
        values[valuesById[779] = "k_EMsgClientGameConnectTokens"] = 779;
        values[valuesById[780] = "k_EMsgClientLicenseList"] = 780;
        values[valuesById[782] = "k_EMsgClientVACBanStatus"] = 782;
        values[valuesById[783] = "k_EMsgClientCMList"] = 783;
        values[valuesById[784] = "k_EMsgClientEncryptPct"] = 784;
        values[valuesById[785] = "k_EMsgClientGetLegacyGameKeyResponse"] = 785;
        values[valuesById[791] = "k_EMsgClientAddFriend"] = 791;
        values[valuesById[792] = "k_EMsgClientAddFriendResponse"] = 792;
        values[valuesById[796] = "k_EMsgClientAckGuestPassResponse"] = 796;
        values[valuesById[797] = "k_EMsgClientRedeemGuestPassResponse"] = 797;
        values[valuesById[798] = "k_EMsgClientUpdateGuestPassesList"] = 798;
        values[valuesById[799] = "k_EMsgClientChatMsg"] = 799;
        values[valuesById[800] = "k_EMsgClientChatInvite"] = 800;
        values[valuesById[801] = "k_EMsgClientJoinChat"] = 801;
        values[valuesById[802] = "k_EMsgClientChatMemberInfo"] = 802;
        values[valuesById[803] = "k_EMsgClientLogOnWithCredentials_Deprecated"] = 803;
        values[valuesById[805] = "k_EMsgClientPasswordChangeResponse"] = 805;
        values[valuesById[807] = "k_EMsgClientChatEnter"] = 807;
        values[valuesById[808] = "k_EMsgClientFriendRemovedFromSource"] = 808;
        values[valuesById[809] = "k_EMsgClientCreateChat"] = 809;
        values[valuesById[810] = "k_EMsgClientCreateChatResponse"] = 810;
        values[valuesById[813] = "k_EMsgClientP2PIntroducerMessage"] = 813;
        values[valuesById[814] = "k_EMsgClientChatActionResult"] = 814;
        values[valuesById[815] = "k_EMsgClientRequestFriendData"] = 815;
        values[valuesById[818] = "k_EMsgClientGetUserStats"] = 818;
        values[valuesById[819] = "k_EMsgClientGetUserStatsResponse"] = 819;
        values[valuesById[820] = "k_EMsgClientStoreUserStats"] = 820;
        values[valuesById[821] = "k_EMsgClientStoreUserStatsResponse"] = 821;
        values[valuesById[822] = "k_EMsgClientClanState"] = 822;
        values[valuesById[830] = "k_EMsgClientServiceModule"] = 830;
        values[valuesById[831] = "k_EMsgClientServiceCall"] = 831;
        values[valuesById[832] = "k_EMsgClientServiceCallResponse"] = 832;
        values[valuesById[839] = "k_EMsgClientNatTraversalStatEvent"] = 839;
        values[valuesById[842] = "k_EMsgClientSteamUsageEvent"] = 842;
        values[valuesById[845] = "k_EMsgClientCheckPassword"] = 845;
        values[valuesById[846] = "k_EMsgClientResetPassword"] = 846;
        values[valuesById[848] = "k_EMsgClientCheckPasswordResponse"] = 848;
        values[valuesById[849] = "k_EMsgClientResetPasswordResponse"] = 849;
        values[valuesById[850] = "k_EMsgClientSessionToken"] = 850;
        values[valuesById[851] = "k_EMsgClientDRMProblemReport"] = 851;
        values[valuesById[855] = "k_EMsgClientSetIgnoreFriend"] = 855;
        values[valuesById[856] = "k_EMsgClientSetIgnoreFriendResponse"] = 856;
        values[valuesById[857] = "k_EMsgClientGetAppOwnershipTicket"] = 857;
        values[valuesById[858] = "k_EMsgClientGetAppOwnershipTicketResponse"] = 858;
        values[valuesById[860] = "k_EMsgClientGetLobbyListResponse"] = 860;
        values[valuesById[880] = "k_EMsgClientServerList"] = 880;
        values[valuesById[896] = "k_EMsgClientDRMBlobRequest"] = 896;
        values[valuesById[897] = "k_EMsgClientDRMBlobResponse"] = 897;
        values[valuesById[900] = "k_EMsgBaseGameServer"] = 900;
        values[valuesById[901] = "k_EMsgGSDisconnectNotice"] = 901;
        values[valuesById[903] = "k_EMsgGSStatus"] = 903;
        values[valuesById[905] = "k_EMsgGSUserPlaying"] = 905;
        values[valuesById[906] = "k_EMsgGSStatus2"] = 906;
        values[valuesById[907] = "k_EMsgGSStatusUpdate_Unused"] = 907;
        values[valuesById[908] = "k_EMsgGSServerType"] = 908;
        values[valuesById[909] = "k_EMsgGSPlayerList"] = 909;
        values[valuesById[910] = "k_EMsgGSGetUserAchievementStatus"] = 910;
        values[valuesById[911] = "k_EMsgGSGetUserAchievementStatusResponse"] = 911;
        values[valuesById[918] = "k_EMsgGSGetPlayStats"] = 918;
        values[valuesById[919] = "k_EMsgGSGetPlayStatsResponse"] = 919;
        values[valuesById[920] = "k_EMsgGSGetUserGroupStatus"] = 920;
        values[valuesById[921] = "k_EMsgAMGetUserGroupStatus"] = 921;
        values[valuesById[922] = "k_EMsgAMGetUserGroupStatusResponse"] = 922;
        values[valuesById[923] = "k_EMsgGSGetUserGroupStatusResponse"] = 923;
        values[valuesById[936] = "k_EMsgGSGetReputation"] = 936;
        values[valuesById[937] = "k_EMsgGSGetReputationResponse"] = 937;
        values[valuesById[938] = "k_EMsgGSAssociateWithClan"] = 938;
        values[valuesById[939] = "k_EMsgGSAssociateWithClanResponse"] = 939;
        values[valuesById[940] = "k_EMsgGSComputeNewPlayerCompatibility"] = 940;
        values[valuesById[941] = "k_EMsgGSComputeNewPlayerCompatibilityResponse"] = 941;
        values[valuesById[1000] = "k_EMsgBaseAdmin"] = 1000;
        values["k_EMsgAdminCmd"] = 1000;
        values[valuesById[1004] = "k_EMsgAdminCmdResponse"] = 1004;
        values[valuesById[1005] = "k_EMsgAdminLogListenRequest"] = 1005;
        values[valuesById[1006] = "k_EMsgAdminLogEvent"] = 1006;
        values[valuesById[1010] = "k_EMsgUniverseData"] = 1010;
        values[valuesById[1019] = "k_EMsgAdminSpew"] = 1019;
        values[valuesById[1020] = "k_EMsgAdminConsoleTitle"] = 1020;
        values[valuesById[1023] = "k_EMsgAdminGCSpew"] = 1023;
        values[valuesById[1024] = "k_EMsgAdminGCCommand"] = 1024;
        values[valuesById[1025] = "k_EMsgAdminGCGetCommandList"] = 1025;
        values[valuesById[1026] = "k_EMsgAdminGCGetCommandListResponse"] = 1026;
        values[valuesById[1027] = "k_EMsgFBSConnectionData"] = 1027;
        values[valuesById[1028] = "k_EMsgAdminMsgSpew"] = 1028;
        values[valuesById[1100] = "k_EMsgBaseFBS"] = 1100;
        values["k_EMsgFBSReqVersion"] = 1100;
        values[valuesById[1101] = "k_EMsgFBSVersionInfo"] = 1101;
        values[valuesById[1102] = "k_EMsgFBSForceRefresh"] = 1102;
        values[valuesById[1103] = "k_EMsgFBSForceBounce"] = 1103;
        values[valuesById[1104] = "k_EMsgFBSDeployPackage"] = 1104;
        values[valuesById[1105] = "k_EMsgFBSDeployResponse"] = 1105;
        values[valuesById[1106] = "k_EMsgFBSUpdateBootstrapper"] = 1106;
        values[valuesById[1107] = "k_EMsgFBSSetState"] = 1107;
        values[valuesById[1108] = "k_EMsgFBSApplyOSUpdates"] = 1108;
        values[valuesById[1109] = "k_EMsgFBSRunCMDScript"] = 1109;
        values[valuesById[1110] = "k_EMsgFBSRebootBox"] = 1110;
        values[valuesById[1111] = "k_EMsgFBSSetBigBrotherMode"] = 1111;
        values[valuesById[1112] = "k_EMsgFBSMinidumpServer"] = 1112;
        values[valuesById[1114] = "k_EMsgFBSDeployHotFixPackage"] = 1114;
        values[valuesById[1115] = "k_EMsgFBSDeployHotFixResponse"] = 1115;
        values[valuesById[1116] = "k_EMsgFBSDownloadHotFix"] = 1116;
        values[valuesById[1117] = "k_EMsgFBSDownloadHotFixResponse"] = 1117;
        values[valuesById[1118] = "k_EMsgFBSUpdateTargetConfigFile"] = 1118;
        values[valuesById[1119] = "k_EMsgFBSApplyAccountCred"] = 1119;
        values[valuesById[1120] = "k_EMsgFBSApplyAccountCredResponse"] = 1120;
        values[valuesById[1121] = "k_EMsgFBSSetShellCount"] = 1121;
        values[valuesById[1122] = "k_EMsgFBSTerminateShell"] = 1122;
        values[valuesById[1123] = "k_EMsgFBSQueryGMForRequest"] = 1123;
        values[valuesById[1124] = "k_EMsgFBSQueryGMResponse"] = 1124;
        values[valuesById[1125] = "k_EMsgFBSTerminateZombies"] = 1125;
        values[valuesById[1126] = "k_EMsgFBSInfoFromBootstrapper"] = 1126;
        values[valuesById[1127] = "k_EMsgFBSRebootBoxResponse"] = 1127;
        values[valuesById[1128] = "k_EMsgFBSBootstrapperPackageRequest"] = 1128;
        values[valuesById[1129] = "k_EMsgFBSBootstrapperPackageResponse"] = 1129;
        values[valuesById[1130] = "k_EMsgFBSBootstrapperGetPackageChunk"] = 1130;
        values[valuesById[1131] = "k_EMsgFBSBootstrapperGetPackageChunkResponse"] = 1131;
        values[valuesById[1132] = "k_EMsgFBSBootstrapperPackageTransferProgress"] = 1132;
        values[valuesById[1133] = "k_EMsgFBSRestartBootstrapper"] = 1133;
        values[valuesById[1134] = "k_EMsgFBSPauseFrozenDumps"] = 1134;
        values[valuesById[1200] = "k_EMsgBaseFileXfer"] = 1200;
        values["k_EMsgFileXferRequest"] = 1200;
        values[valuesById[1201] = "k_EMsgFileXferResponse"] = 1201;
        values[valuesById[1202] = "k_EMsgFileXferData"] = 1202;
        values[valuesById[1203] = "k_EMsgFileXferEnd"] = 1203;
        values[valuesById[1204] = "k_EMsgFileXferDataAck"] = 1204;
        values[valuesById[1300] = "k_EMsgBaseChannelAuth"] = 1300;
        values["k_EMsgChannelAuthChallenge"] = 1300;
        values[valuesById[1301] = "k_EMsgChannelAuthResponse"] = 1301;
        values[valuesById[1302] = "k_EMsgChannelAuthResult"] = 1302;
        values[valuesById[1303] = "k_EMsgChannelEncryptRequest"] = 1303;
        values[valuesById[1304] = "k_EMsgChannelEncryptResponse"] = 1304;
        values[valuesById[1305] = "k_EMsgChannelEncryptResult"] = 1305;
        values[valuesById[1400] = "k_EMsgBaseBS"] = 1400;
        values[valuesById[1401] = "k_EMsgBSPurchaseStart"] = 1401;
        values[valuesById[1402] = "k_EMsgBSPurchaseResponse"] = 1402;
        values[valuesById[1403] = "k_EMsgBSAuthenticateCCTrans"] = 1403;
        values[valuesById[1404] = "k_EMsgBSAuthenticateCCTransResponse"] = 1404;
        values[valuesById[1406] = "k_EMsgBSSettleComplete"] = 1406;
        values[valuesById[1408] = "k_EMsgBSInitPayPalTxn"] = 1408;
        values[valuesById[1409] = "k_EMsgBSInitPayPalTxnResponse"] = 1409;
        values[valuesById[1410] = "k_EMsgBSGetPayPalUserInfo"] = 1410;
        values[valuesById[1411] = "k_EMsgBSGetPayPalUserInfoResponse"] = 1411;
        values[valuesById[1417] = "k_EMsgBSPaymentInstrBan"] = 1417;
        values[valuesById[1418] = "k_EMsgBSPaymentInstrBanResponse"] = 1418;
        values[valuesById[1421] = "k_EMsgBSInitGCBankXferTxn"] = 1421;
        values[valuesById[1422] = "k_EMsgBSInitGCBankXferTxnResponse"] = 1422;
        values[valuesById[1425] = "k_EMsgBSCommitGCTxn"] = 1425;
        values[valuesById[1426] = "k_EMsgBSQueryTransactionStatus"] = 1426;
        values[valuesById[1427] = "k_EMsgBSQueryTransactionStatusResponse"] = 1427;
        values[valuesById[1431] = "k_EMsgBSQueryPaymentInstUsage"] = 1431;
        values[valuesById[1432] = "k_EMsgBSQueryPaymentInstResponse"] = 1432;
        values[valuesById[1433] = "k_EMsgBSQueryTxnExtendedInfo"] = 1433;
        values[valuesById[1434] = "k_EMsgBSQueryTxnExtendedInfoResponse"] = 1434;
        values[valuesById[1435] = "k_EMsgBSUpdateConversionRates"] = 1435;
        values[valuesById[1437] = "k_EMsgBSPurchaseRunFraudChecks"] = 1437;
        values[valuesById[1438] = "k_EMsgBSPurchaseRunFraudChecksResponse"] = 1438;
        values[valuesById[1440] = "k_EMsgBSQueryBankInformation"] = 1440;
        values[valuesById[1441] = "k_EMsgBSQueryBankInformationResponse"] = 1441;
        values[valuesById[1445] = "k_EMsgBSValidateXsollaSignature"] = 1445;
        values[valuesById[1446] = "k_EMsgBSValidateXsollaSignatureResponse"] = 1446;
        values[valuesById[1448] = "k_EMsgBSQiwiWalletInvoice"] = 1448;
        values[valuesById[1449] = "k_EMsgBSQiwiWalletInvoiceResponse"] = 1449;
        values[valuesById[1450] = "k_EMsgBSUpdateInventoryFromProPack"] = 1450;
        values[valuesById[1451] = "k_EMsgBSUpdateInventoryFromProPackResponse"] = 1451;
        values[valuesById[1452] = "k_EMsgBSSendShippingRequest"] = 1452;
        values[valuesById[1453] = "k_EMsgBSSendShippingRequestResponse"] = 1453;
        values[valuesById[1454] = "k_EMsgBSGetProPackOrderStatus"] = 1454;
        values[valuesById[1455] = "k_EMsgBSGetProPackOrderStatusResponse"] = 1455;
        values[valuesById[1456] = "k_EMsgBSCheckJobRunning"] = 1456;
        values[valuesById[1457] = "k_EMsgBSCheckJobRunningResponse"] = 1457;
        values[valuesById[1458] = "k_EMsgBSResetPackagePurchaseRateLimit"] = 1458;
        values[valuesById[1459] = "k_EMsgBSResetPackagePurchaseRateLimitResponse"] = 1459;
        values[valuesById[1460] = "k_EMsgBSUpdatePaymentData"] = 1460;
        values[valuesById[1461] = "k_EMsgBSUpdatePaymentDataResponse"] = 1461;
        values[valuesById[1462] = "k_EMsgBSGetBillingAddress"] = 1462;
        values[valuesById[1463] = "k_EMsgBSGetBillingAddressResponse"] = 1463;
        values[valuesById[1464] = "k_EMsgBSGetCreditCardInfo"] = 1464;
        values[valuesById[1465] = "k_EMsgBSGetCreditCardInfoResponse"] = 1465;
        values[valuesById[1468] = "k_EMsgBSRemoveExpiredPaymentData"] = 1468;
        values[valuesById[1469] = "k_EMsgBSRemoveExpiredPaymentDataResponse"] = 1469;
        values[valuesById[1470] = "k_EMsgBSConvertToCurrentKeys"] = 1470;
        values[valuesById[1471] = "k_EMsgBSConvertToCurrentKeysResponse"] = 1471;
        values[valuesById[1472] = "k_EMsgBSInitPurchase"] = 1472;
        values[valuesById[1473] = "k_EMsgBSInitPurchaseResponse"] = 1473;
        values[valuesById[1474] = "k_EMsgBSCompletePurchase"] = 1474;
        values[valuesById[1475] = "k_EMsgBSCompletePurchaseResponse"] = 1475;
        values[valuesById[1476] = "k_EMsgBSPruneCardUsageStats"] = 1476;
        values[valuesById[1477] = "k_EMsgBSPruneCardUsageStatsResponse"] = 1477;
        values[valuesById[1478] = "k_EMsgBSStoreBankInformation"] = 1478;
        values[valuesById[1479] = "k_EMsgBSStoreBankInformationResponse"] = 1479;
        values[valuesById[1480] = "k_EMsgBSVerifyPOSAKey"] = 1480;
        values[valuesById[1481] = "k_EMsgBSVerifyPOSAKeyResponse"] = 1481;
        values[valuesById[1482] = "k_EMsgBSReverseRedeemPOSAKey"] = 1482;
        values[valuesById[1483] = "k_EMsgBSReverseRedeemPOSAKeyResponse"] = 1483;
        values[valuesById[1484] = "k_EMsgBSQueryFindCreditCard"] = 1484;
        values[valuesById[1485] = "k_EMsgBSQueryFindCreditCardResponse"] = 1485;
        values[valuesById[1486] = "k_EMsgBSStatusInquiryPOSAKey"] = 1486;
        values[valuesById[1487] = "k_EMsgBSStatusInquiryPOSAKeyResponse"] = 1487;
        values[valuesById[1494] = "k_EMsgBSBoaCompraConfirmProductDelivery"] = 1494;
        values[valuesById[1495] = "k_EMsgBSBoaCompraConfirmProductDeliveryResponse"] = 1495;
        values[valuesById[1496] = "k_EMsgBSGenerateBoaCompraMD5"] = 1496;
        values[valuesById[1497] = "k_EMsgBSGenerateBoaCompraMD5Response"] = 1497;
        values[valuesById[1498] = "k_EMsgBSCommitWPTxn"] = 1498;
        values[valuesById[1499] = "k_EMsgBSCommitAdyenTxn"] = 1499;
        values[valuesById[1500] = "k_EMsgBaseATS"] = 1500;
        values[valuesById[1501] = "k_EMsgATSStartStressTest"] = 1501;
        values[valuesById[1502] = "k_EMsgATSStopStressTest"] = 1502;
        values[valuesById[1503] = "k_EMsgATSRunFailServerTest"] = 1503;
        values[valuesById[1504] = "k_EMsgATSUFSPerfTestTask"] = 1504;
        values[valuesById[1505] = "k_EMsgATSUFSPerfTestResponse"] = 1505;
        values[valuesById[1506] = "k_EMsgATSCycleTCM"] = 1506;
        values[valuesById[1507] = "k_EMsgATSInitDRMSStressTest"] = 1507;
        values[valuesById[1508] = "k_EMsgATSCallTest"] = 1508;
        values[valuesById[1509] = "k_EMsgATSCallTestReply"] = 1509;
        values[valuesById[1510] = "k_EMsgATSStartExternalStress"] = 1510;
        values[valuesById[1511] = "k_EMsgATSExternalStressJobStart"] = 1511;
        values[valuesById[1512] = "k_EMsgATSExternalStressJobQueued"] = 1512;
        values[valuesById[1513] = "k_EMsgATSExternalStressJobRunning"] = 1513;
        values[valuesById[1514] = "k_EMsgATSExternalStressJobStopped"] = 1514;
        values[valuesById[1515] = "k_EMsgATSExternalStressJobStopAll"] = 1515;
        values[valuesById[1516] = "k_EMsgATSExternalStressActionResult"] = 1516;
        values[valuesById[1517] = "k_EMsgATSStarted"] = 1517;
        values[valuesById[1518] = "k_EMsgATSCSPerfTestTask"] = 1518;
        values[valuesById[1519] = "k_EMsgATSCSPerfTestResponse"] = 1519;
        values[valuesById[1600] = "k_EMsgBaseDP"] = 1600;
        values[valuesById[1601] = "k_EMsgDPSetPublishingState"] = 1601;
        values[valuesById[1603] = "k_EMsgDPUniquePlayersStat"] = 1603;
        values[valuesById[1604] = "k_EMsgDPStreamingUniquePlayersStat"] = 1604;
        values[valuesById[1607] = "k_EMsgDPBlockingStats"] = 1607;
        values[valuesById[1608] = "k_EMsgDPNatTraversalStats"] = 1608;
        values[valuesById[1612] = "k_EMsgDPCloudStats"] = 1612;
        values[valuesById[1615] = "k_EMsgDPGetPlayerCount"] = 1615;
        values[valuesById[1616] = "k_EMsgDPGetPlayerCountResponse"] = 1616;
        values[valuesById[1617] = "k_EMsgDPGameServersPlayersStats"] = 1617;
        values[valuesById[1620] = "k_EMsgClientDPCheckSpecialSurvey"] = 1620;
        values[valuesById[1621] = "k_EMsgClientDPCheckSpecialSurveyResponse"] = 1621;
        values[valuesById[1622] = "k_EMsgClientDPSendSpecialSurveyResponse"] = 1622;
        values[valuesById[1623] = "k_EMsgClientDPSendSpecialSurveyResponseReply"] = 1623;
        values[valuesById[1624] = "k_EMsgDPStoreSaleStatistics"] = 1624;
        values[valuesById[1625] = "k_EMsgClientDPUpdateAppJobReport"] = 1625;
        values[valuesById[1627] = "k_EMsgClientDPUnsignedInstallScript"] = 1627;
        values[valuesById[1628] = "k_EMsgDPPartnerMicroTxns"] = 1628;
        values[valuesById[1629] = "k_EMsgDPPartnerMicroTxnsResponse"] = 1629;
        values[valuesById[1630] = "k_EMsgClientDPContentStatsReport"] = 1630;
        values[valuesById[1631] = "k_EMsgDPVRUniquePlayersStat"] = 1631;
        values[valuesById[1700] = "k_EMsgBaseCM"] = 1700;
        values[valuesById[1701] = "k_EMsgCMSetAllowState"] = 1701;
        values[valuesById[1702] = "k_EMsgCMSpewAllowState"] = 1702;
        values[valuesById[1703] = "k_EMsgCMSessionRejected"] = 1703;
        values[valuesById[1704] = "k_EMsgCMSetSecrets"] = 1704;
        values[valuesById[1705] = "k_EMsgCMGetSecrets"] = 1705;
        values[valuesById[2200] = "k_EMsgBaseGC"] = 2200;
        values[valuesById[2203] = "k_EMsgGCCmdRevive"] = 2203;
        values[valuesById[2206] = "k_EMsgGCCmdDown"] = 2206;
        values[valuesById[2207] = "k_EMsgGCCmdDeploy"] = 2207;
        values[valuesById[2208] = "k_EMsgGCCmdDeployResponse"] = 2208;
        values[valuesById[2209] = "k_EMsgGCCmdSwitch"] = 2209;
        values[valuesById[2210] = "k_EMsgAMRefreshSessions"] = 2210;
        values[valuesById[2212] = "k_EMsgGCAchievementAwarded"] = 2212;
        values[valuesById[2213] = "k_EMsgGCSystemMessage"] = 2213;
        values[valuesById[2216] = "k_EMsgGCCmdStatus"] = 2216;
        values[valuesById[2217] = "k_EMsgGCRegisterWebInterfaces_Deprecated"] = 2217;
        values[valuesById[2218] = "k_EMsgGCGetAccountDetails_DEPRECATED"] = 2218;
        values[valuesById[2219] = "k_EMsgGCInterAppMessage"] = 2219;
        values[valuesById[2220] = "k_EMsgGCGetEmailTemplate"] = 2220;
        values[valuesById[2221] = "k_EMsgGCGetEmailTemplateResponse"] = 2221;
        values[valuesById[2222] = "k_EMsgGCHRelay"] = 2222;
        values[valuesById[2223] = "k_EMsgGCHRelayToClient"] = 2223;
        values[valuesById[2224] = "k_EMsgGCHUpdateSession"] = 2224;
        values[valuesById[2225] = "k_EMsgGCHRequestUpdateSession"] = 2225;
        values[valuesById[2226] = "k_EMsgGCHRequestStatus"] = 2226;
        values[valuesById[2227] = "k_EMsgGCHRequestStatusResponse"] = 2227;
        values[valuesById[2228] = "k_EMsgGCHAccountVacStatusChange"] = 2228;
        values[valuesById[2229] = "k_EMsgGCHSpawnGC"] = 2229;
        values[valuesById[2230] = "k_EMsgGCHSpawnGCResponse"] = 2230;
        values[valuesById[2231] = "k_EMsgGCHKillGC"] = 2231;
        values[valuesById[2232] = "k_EMsgGCHKillGCResponse"] = 2232;
        values[valuesById[2233] = "k_EMsgGCHAccountTradeBanStatusChange"] = 2233;
        values[valuesById[2234] = "k_EMsgGCHAccountLockStatusChange"] = 2234;
        values[valuesById[2235] = "k_EMsgGCHVacVerificationChange"] = 2235;
        values[valuesById[2236] = "k_EMsgGCHAccountPhoneNumberChange"] = 2236;
        values[valuesById[2237] = "k_EMsgGCHAccountTwoFactorChange"] = 2237;
        values[valuesById[2238] = "k_EMsgGCHInviteUserToLobby"] = 2238;
        values[valuesById[2500] = "k_EMsgBaseP2P"] = 2500;
        values[valuesById[2502] = "k_EMsgP2PIntroducerMessage"] = 2502;
        values[valuesById[2900] = "k_EMsgBaseSM"] = 2900;
        values[valuesById[2902] = "k_EMsgSMExpensiveReport"] = 2902;
        values[valuesById[2903] = "k_EMsgSMHourlyReport"] = 2903;
        values[valuesById[2905] = "k_EMsgSMPartitionRenames"] = 2905;
        values[valuesById[2906] = "k_EMsgSMMonitorSpace"] = 2906;
        values[valuesById[2907] = "k_EMsgSMTestNextBuildSchemaConversion"] = 2907;
        values[valuesById[2908] = "k_EMsgSMTestNextBuildSchemaConversionResponse"] = 2908;
        values[valuesById[3000] = "k_EMsgBaseTest"] = 3000;
        values["k_EMsgFailServer"] = 3000;
        values[valuesById[3001] = "k_EMsgJobHeartbeatTest"] = 3001;
        values[valuesById[3002] = "k_EMsgJobHeartbeatTestResponse"] = 3002;
        values[valuesById[3100] = "k_EMsgBaseFTSRange"] = 3100;
        values[valuesById[3150] = "k_EMsgBaseCCSRange"] = 3150;
        values[valuesById[3161] = "k_EMsgCCSDeleteAllCommentsByAuthor"] = 3161;
        values[valuesById[3162] = "k_EMsgCCSDeleteAllCommentsByAuthorResponse"] = 3162;
        values[valuesById[3200] = "k_EMsgBaseLBSRange"] = 3200;
        values[valuesById[3201] = "k_EMsgLBSSetScore"] = 3201;
        values[valuesById[3202] = "k_EMsgLBSSetScoreResponse"] = 3202;
        values[valuesById[3203] = "k_EMsgLBSFindOrCreateLB"] = 3203;
        values[valuesById[3204] = "k_EMsgLBSFindOrCreateLBResponse"] = 3204;
        values[valuesById[3205] = "k_EMsgLBSGetLBEntries"] = 3205;
        values[valuesById[3206] = "k_EMsgLBSGetLBEntriesResponse"] = 3206;
        values[valuesById[3207] = "k_EMsgLBSGetLBList"] = 3207;
        values[valuesById[3208] = "k_EMsgLBSGetLBListResponse"] = 3208;
        values[valuesById[3209] = "k_EMsgLBSSetLBDetails"] = 3209;
        values[valuesById[3210] = "k_EMsgLBSDeleteLB"] = 3210;
        values[valuesById[3211] = "k_EMsgLBSDeleteLBEntry"] = 3211;
        values[valuesById[3212] = "k_EMsgLBSResetLB"] = 3212;
        values[valuesById[3213] = "k_EMsgLBSResetLBResponse"] = 3213;
        values[valuesById[3214] = "k_EMsgLBSDeleteLBResponse"] = 3214;
        values[valuesById[3400] = "k_EMsgBaseOGS"] = 3400;
        values[valuesById[3401] = "k_EMsgOGSBeginSession"] = 3401;
        values[valuesById[3402] = "k_EMsgOGSBeginSessionResponse"] = 3402;
        values[valuesById[3403] = "k_EMsgOGSEndSession"] = 3403;
        values[valuesById[3404] = "k_EMsgOGSEndSessionResponse"] = 3404;
        values[valuesById[3406] = "k_EMsgOGSWriteAppSessionRow"] = 3406;
        values[valuesById[3600] = "k_EMsgBaseBRP"] = 3600;
        values[valuesById[3629] = "k_EMsgBRPPostTransactionTax"] = 3629;
        values[valuesById[3630] = "k_EMsgBRPPostTransactionTaxResponse"] = 3630;
        values[valuesById[4000] = "k_EMsgBaseAMRange2"] = 4000;
        values[valuesById[4001] = "k_EMsgAMCreateChat"] = 4001;
        values[valuesById[4002] = "k_EMsgAMCreateChatResponse"] = 4002;
        values[valuesById[4005] = "k_EMsgAMSetProfileURL"] = 4005;
        values[valuesById[4006] = "k_EMsgAMGetAccountEmailAddress"] = 4006;
        values[valuesById[4007] = "k_EMsgAMGetAccountEmailAddressResponse"] = 4007;
        values[valuesById[4008] = "k_EMsgAMRequestClanData"] = 4008;
        values[valuesById[4009] = "k_EMsgAMRouteToClients"] = 4009;
        values[valuesById[4010] = "k_EMsgAMLeaveClan"] = 4010;
        values[valuesById[4011] = "k_EMsgAMClanPermissions"] = 4011;
        values[valuesById[4012] = "k_EMsgAMClanPermissionsResponse"] = 4012;
        values[valuesById[4013] = "k_EMsgAMCreateClanEventDummyForRateLimiting"] = 4013;
        values[valuesById[4015] = "k_EMsgAMUpdateClanEventDummyForRateLimiting"] = 4015;
        values[valuesById[4021] = "k_EMsgAMSetClanPermissionSettings"] = 4021;
        values[valuesById[4022] = "k_EMsgAMSetClanPermissionSettingsResponse"] = 4022;
        values[valuesById[4023] = "k_EMsgAMGetClanPermissionSettings"] = 4023;
        values[valuesById[4024] = "k_EMsgAMGetClanPermissionSettingsResponse"] = 4024;
        values[valuesById[4025] = "k_EMsgAMPublishChatRoomInfo"] = 4025;
        values[valuesById[4026] = "k_EMsgClientChatRoomInfo"] = 4026;
        values[valuesById[4039] = "k_EMsgAMGetClanHistory"] = 4039;
        values[valuesById[4040] = "k_EMsgAMGetClanHistoryResponse"] = 4040;
        values[valuesById[4041] = "k_EMsgAMGetClanPermissionBits"] = 4041;
        values[valuesById[4042] = "k_EMsgAMGetClanPermissionBitsResponse"] = 4042;
        values[valuesById[4043] = "k_EMsgAMSetClanPermissionBits"] = 4043;
        values[valuesById[4044] = "k_EMsgAMSetClanPermissionBitsResponse"] = 4044;
        values[valuesById[4045] = "k_EMsgAMSessionInfoRequest"] = 4045;
        values[valuesById[4046] = "k_EMsgAMSessionInfoResponse"] = 4046;
        values[valuesById[4047] = "k_EMsgAMValidateWGToken"] = 4047;
        values[valuesById[4050] = "k_EMsgAMGetClanRank"] = 4050;
        values[valuesById[4051] = "k_EMsgAMGetClanRankResponse"] = 4051;
        values[valuesById[4052] = "k_EMsgAMSetClanRank"] = 4052;
        values[valuesById[4053] = "k_EMsgAMSetClanRankResponse"] = 4053;
        values[valuesById[4054] = "k_EMsgAMGetClanPOTW"] = 4054;
        values[valuesById[4055] = "k_EMsgAMGetClanPOTWResponse"] = 4055;
        values[valuesById[4056] = "k_EMsgAMSetClanPOTW"] = 4056;
        values[valuesById[4057] = "k_EMsgAMSetClanPOTWResponse"] = 4057;
        values[valuesById[4059] = "k_EMsgAMDumpUser"] = 4059;
        values[valuesById[4060] = "k_EMsgAMKickUserFromClan"] = 4060;
        values[valuesById[4061] = "k_EMsgAMAddFounderToClan"] = 4061;
        values[valuesById[4062] = "k_EMsgAMValidateWGTokenResponse"] = 4062;
        values[valuesById[4064] = "k_EMsgAMSetAccountDetails"] = 4064;
        values[valuesById[4065] = "k_EMsgAMGetChatBanList"] = 4065;
        values[valuesById[4066] = "k_EMsgAMGetChatBanListResponse"] = 4066;
        values[valuesById[4067] = "k_EMsgAMUnBanFromChat"] = 4067;
        values[valuesById[4068] = "k_EMsgAMSetClanDetails"] = 4068;
        values[valuesById[4069] = "k_EMsgAMGetAccountLinks"] = 4069;
        values[valuesById[4070] = "k_EMsgAMGetAccountLinksResponse"] = 4070;
        values[valuesById[4071] = "k_EMsgAMSetAccountLinks"] = 4071;
        values[valuesById[4072] = "k_EMsgAMSetAccountLinksResponse"] = 4072;
        values[valuesById[4073] = "k_EMsgUGSGetUserGameStats"] = 4073;
        values[valuesById[4074] = "k_EMsgUGSGetUserGameStatsResponse"] = 4074;
        values[valuesById[4075] = "k_EMsgAMCheckClanMembership"] = 4075;
        values[valuesById[4076] = "k_EMsgAMGetClanMembers"] = 4076;
        values[valuesById[4077] = "k_EMsgAMGetClanMembersResponse"] = 4077;
        values[valuesById[4079] = "k_EMsgAMNotifyChatOfClanChange"] = 4079;
        values[valuesById[4080] = "k_EMsgAMResubmitPurchase"] = 4080;
        values[valuesById[4081] = "k_EMsgAMAddFriend"] = 4081;
        values[valuesById[4082] = "k_EMsgAMAddFriendResponse"] = 4082;
        values[valuesById[4083] = "k_EMsgAMRemoveFriend"] = 4083;
        values[valuesById[4084] = "k_EMsgAMDumpClan"] = 4084;
        values[valuesById[4085] = "k_EMsgAMChangeClanOwner"] = 4085;
        values[valuesById[4086] = "k_EMsgAMCancelEasyCollect"] = 4086;
        values[valuesById[4087] = "k_EMsgAMCancelEasyCollectResponse"] = 4087;
        values[valuesById[4090] = "k_EMsgAMClansInCommon"] = 4090;
        values[valuesById[4091] = "k_EMsgAMClansInCommonResponse"] = 4091;
        values[valuesById[4092] = "k_EMsgAMIsValidAccountID"] = 4092;
        values[valuesById[4095] = "k_EMsgAMWipeFriendsList"] = 4095;
        values[valuesById[4096] = "k_EMsgAMSetIgnored"] = 4096;
        values[valuesById[4097] = "k_EMsgAMClansInCommonCountResponse"] = 4097;
        values[valuesById[4098] = "k_EMsgAMFriendsList"] = 4098;
        values[valuesById[4099] = "k_EMsgAMFriendsListResponse"] = 4099;
        values[valuesById[4100] = "k_EMsgAMFriendsInCommon"] = 4100;
        values[valuesById[4101] = "k_EMsgAMFriendsInCommonResponse"] = 4101;
        values[valuesById[4102] = "k_EMsgAMFriendsInCommonCountResponse"] = 4102;
        values[valuesById[4103] = "k_EMsgAMClansInCommonCount"] = 4103;
        values[valuesById[4104] = "k_EMsgAMChallengeVerdict"] = 4104;
        values[valuesById[4105] = "k_EMsgAMChallengeNotification"] = 4105;
        values[valuesById[4106] = "k_EMsgAMFindGSByIP"] = 4106;
        values[valuesById[4107] = "k_EMsgAMFoundGSByIP"] = 4107;
        values[valuesById[4108] = "k_EMsgAMGiftRevoked"] = 4108;
        values[valuesById[4110] = "k_EMsgAMUserClanList"] = 4110;
        values[valuesById[4111] = "k_EMsgAMUserClanListResponse"] = 4111;
        values[valuesById[4112] = "k_EMsgAMGetAccountDetails2"] = 4112;
        values[valuesById[4113] = "k_EMsgAMGetAccountDetailsResponse2"] = 4113;
        values[valuesById[4114] = "k_EMsgAMSetCommunityProfileSettings"] = 4114;
        values[valuesById[4115] = "k_EMsgAMSetCommunityProfileSettingsResponse"] = 4115;
        values[valuesById[4116] = "k_EMsgAMGetCommunityPrivacyState"] = 4116;
        values[valuesById[4117] = "k_EMsgAMGetCommunityPrivacyStateResponse"] = 4117;
        values[valuesById[4118] = "k_EMsgAMCheckClanInviteRateLimiting"] = 4118;
        values[valuesById[4119] = "k_EMsgUGSGetUserAchievementStatus"] = 4119;
        values[valuesById[4120] = "k_EMsgAMGetIgnored"] = 4120;
        values[valuesById[4121] = "k_EMsgAMGetIgnoredResponse"] = 4121;
        values[valuesById[4122] = "k_EMsgAMSetIgnoredResponse"] = 4122;
        values[valuesById[4123] = "k_EMsgAMSetFriendRelationshipNone"] = 4123;
        values[valuesById[4124] = "k_EMsgAMGetFriendRelationship"] = 4124;
        values[valuesById[4125] = "k_EMsgAMGetFriendRelationshipResponse"] = 4125;
        values[valuesById[4126] = "k_EMsgAMServiceModulesCache"] = 4126;
        values[valuesById[4127] = "k_EMsgAMServiceModulesCall"] = 4127;
        values[valuesById[4128] = "k_EMsgAMServiceModulesCallResponse"] = 4128;
        values[valuesById[4140] = "k_EMsgCommunityAddFriendNews"] = 4140;
        values[valuesById[4143] = "k_EMsgAMFindClanUser"] = 4143;
        values[valuesById[4144] = "k_EMsgAMFindClanUserResponse"] = 4144;
        values[valuesById[4145] = "k_EMsgAMBanFromChat"] = 4145;
        values[valuesById[4147] = "k_EMsgAMGetUserNewsSubscriptions"] = 4147;
        values[valuesById[4148] = "k_EMsgAMGetUserNewsSubscriptionsResponse"] = 4148;
        values[valuesById[4149] = "k_EMsgAMSetUserNewsSubscriptions"] = 4149;
        values[valuesById[4152] = "k_EMsgAMSendQueuedEmails"] = 4152;
        values[valuesById[4153] = "k_EMsgAMSetLicenseFlags"] = 4153;
        values[valuesById[4155] = "k_EMsgCommunityDeleteUserNews"] = 4155;
        values[valuesById[4156] = "k_EMsgAMAllowUserFilesRequest"] = 4156;
        values[valuesById[4157] = "k_EMsgAMAllowUserFilesResponse"] = 4157;
        values[valuesById[4158] = "k_EMsgAMGetAccountStatus"] = 4158;
        values[valuesById[4159] = "k_EMsgAMGetAccountStatusResponse"] = 4159;
        values[valuesById[4160] = "k_EMsgAMEditBanReason"] = 4160;
        values[valuesById[4161] = "k_EMsgAMCheckClanMembershipResponse"] = 4161;
        values[valuesById[4162] = "k_EMsgAMProbeClanMembershipList"] = 4162;
        values[valuesById[4163] = "k_EMsgAMProbeClanMembershipListResponse"] = 4163;
        values[valuesById[4164] = "k_EMsgUGSGetUserAchievementStatusResponse"] = 4164;
        values[valuesById[4165] = "k_EMsgAMGetFriendsLobbies"] = 4165;
        values[valuesById[4166] = "k_EMsgAMGetFriendsLobbiesResponse"] = 4166;
        values[valuesById[4172] = "k_EMsgAMGetUserFriendNewsResponse"] = 4172;
        values[valuesById[4173] = "k_EMsgCommunityGetUserFriendNews"] = 4173;
        values[valuesById[4174] = "k_EMsgAMGetUserClansNewsResponse"] = 4174;
        values[valuesById[4175] = "k_EMsgAMGetUserClansNews"] = 4175;
        values[valuesById[4184] = "k_EMsgAMGetPreviousCBAccount"] = 4184;
        values[valuesById[4185] = "k_EMsgAMGetPreviousCBAccountResponse"] = 4185;
        values[valuesById[4190] = "k_EMsgAMGetUserLicenseHistory"] = 4190;
        values[valuesById[4191] = "k_EMsgAMGetUserLicenseHistoryResponse"] = 4191;
        values[valuesById[4194] = "k_EMsgAMSupportChangePassword"] = 4194;
        values[valuesById[4195] = "k_EMsgAMSupportChangeEmail"] = 4195;
        values[valuesById[4197] = "k_EMsgAMResetUserVerificationGSByIP"] = 4197;
        values[valuesById[4198] = "k_EMsgAMUpdateGSPlayStats"] = 4198;
        values[valuesById[4199] = "k_EMsgAMSupportEnableOrDisable"] = 4199;
        values[valuesById[4206] = "k_EMsgAMGetPurchaseStatus"] = 4206;
        values[valuesById[4209] = "k_EMsgAMSupportIsAccountEnabled"] = 4209;
        values[valuesById[4210] = "k_EMsgAMSupportIsAccountEnabledResponse"] = 4210;
        values[valuesById[4211] = "k_EMsgUGSGetUserStats"] = 4211;
        values[valuesById[4212] = "k_EMsgAMSupportKickSession"] = 4212;
        values[valuesById[4213] = "k_EMsgAMGSSearch"] = 4213;
        values[valuesById[4216] = "k_EMsgMarketingMessageUpdate"] = 4216;
        values[valuesById[4219] = "k_EMsgChatServerRouteFriendMsg"] = 4219;
        values[valuesById[4220] = "k_EMsgAMTicketAuthRequestOrResponse"] = 4220;
        values[valuesById[4222] = "k_EMsgAMVerifyDepotManagementRights"] = 4222;
        values[valuesById[4223] = "k_EMsgAMVerifyDepotManagementRightsResponse"] = 4223;
        values[valuesById[4224] = "k_EMsgAMAddFreeLicense"] = 4224;
        values[valuesById[4231] = "k_EMsgAMValidateEmailLink"] = 4231;
        values[valuesById[4232] = "k_EMsgAMValidateEmailLinkResponse"] = 4232;
        values[valuesById[4236] = "k_EMsgUGSStoreUserStats"] = 4236;
        values[valuesById[4241] = "k_EMsgAMDeleteStoredCard"] = 4241;
        values[valuesById[4242] = "k_EMsgAMRevokeLegacyGameKeys"] = 4242;
        values[valuesById[4244] = "k_EMsgAMGetWalletDetails"] = 4244;
        values[valuesById[4245] = "k_EMsgAMGetWalletDetailsResponse"] = 4245;
        values[valuesById[4246] = "k_EMsgAMDeleteStoredPaymentInfo"] = 4246;
        values[valuesById[4247] = "k_EMsgAMGetStoredPaymentSummary"] = 4247;
        values[valuesById[4248] = "k_EMsgAMGetStoredPaymentSummaryResponse"] = 4248;
        values[valuesById[4249] = "k_EMsgAMGetWalletConversionRate"] = 4249;
        values[valuesById[4250] = "k_EMsgAMGetWalletConversionRateResponse"] = 4250;
        values[valuesById[4251] = "k_EMsgAMConvertWallet"] = 4251;
        values[valuesById[4252] = "k_EMsgAMConvertWalletResponse"] = 4252;
        values[valuesById[4255] = "k_EMsgAMSetPreApproval"] = 4255;
        values[valuesById[4256] = "k_EMsgAMSetPreApprovalResponse"] = 4256;
        values[valuesById[4258] = "k_EMsgAMCreateRefund"] = 4258;
        values[valuesById[4260] = "k_EMsgAMCreateChargeback"] = 4260;
        values[valuesById[4262] = "k_EMsgAMCreateDispute"] = 4262;
        values[valuesById[4264] = "k_EMsgAMClearDispute"] = 4264;
        values[valuesById[4265] = "k_EMsgAMCreateFinancialAdjustment"] = 4265;
        values[valuesById[4266] = "k_EMsgAMPlayerNicknameList"] = 4266;
        values[valuesById[4267] = "k_EMsgAMPlayerNicknameListResponse"] = 4267;
        values[valuesById[4268] = "k_EMsgAMSetDRMTestConfig"] = 4268;
        values[valuesById[4269] = "k_EMsgAMGetUserCurrentGameInfo"] = 4269;
        values[valuesById[4270] = "k_EMsgAMGetUserCurrentGameInfoResponse"] = 4270;
        values[valuesById[4271] = "k_EMsgAMGetGSPlayerList"] = 4271;
        values[valuesById[4272] = "k_EMsgAMGetGSPlayerListResponse"] = 4272;
        values[valuesById[4278] = "k_EMsgAMGetSteamIDForMicroTxn"] = 4278;
        values[valuesById[4279] = "k_EMsgAMGetSteamIDForMicroTxnResponse"] = 4279;
        values[valuesById[4280] = "k_EMsgAMSetPartnerMember"] = 4280;
        values[valuesById[4281] = "k_EMsgAMRemovePublisherUser"] = 4281;
        values[valuesById[4282] = "k_EMsgAMGetUserLicenseList"] = 4282;
        values[valuesById[4283] = "k_EMsgAMGetUserLicenseListResponse"] = 4283;
        values[valuesById[4284] = "k_EMsgAMReloadGameGroupPolicy"] = 4284;
        values[valuesById[4285] = "k_EMsgAMAddFreeLicenseResponse"] = 4285;
        values[valuesById[4286] = "k_EMsgAMVACStatusUpdate"] = 4286;
        values[valuesById[4287] = "k_EMsgAMGetAccountDetails"] = 4287;
        values[valuesById[4288] = "k_EMsgAMGetAccountDetailsResponse"] = 4288;
        values[valuesById[4289] = "k_EMsgAMGetPlayerLinkDetails"] = 4289;
        values[valuesById[4290] = "k_EMsgAMGetPlayerLinkDetailsResponse"] = 4290;
        values[valuesById[4294] = "k_EMsgAMGetAccountFlagsForWGSpoofing"] = 4294;
        values[valuesById[4295] = "k_EMsgAMGetAccountFlagsForWGSpoofingResponse"] = 4295;
        values[valuesById[4298] = "k_EMsgAMGetClanOfficers"] = 4298;
        values[valuesById[4299] = "k_EMsgAMGetClanOfficersResponse"] = 4299;
        values[valuesById[4300] = "k_EMsgAMNameChange"] = 4300;
        values[valuesById[4301] = "k_EMsgAMGetNameHistory"] = 4301;
        values[valuesById[4302] = "k_EMsgAMGetNameHistoryResponse"] = 4302;
        values[valuesById[4305] = "k_EMsgAMUpdateProviderStatus"] = 4305;
        values[valuesById[4307] = "k_EMsgAMSupportRemoveAccountSecurity"] = 4307;
        values[valuesById[4308] = "k_EMsgAMIsAccountInCaptchaGracePeriod"] = 4308;
        values[valuesById[4309] = "k_EMsgAMIsAccountInCaptchaGracePeriodResponse"] = 4309;
        values[valuesById[4310] = "k_EMsgAMAccountPS3Unlink"] = 4310;
        values[valuesById[4311] = "k_EMsgAMAccountPS3UnlinkResponse"] = 4311;
        values[valuesById[4312] = "k_EMsgUGSStoreUserStatsResponse"] = 4312;
        values[valuesById[4313] = "k_EMsgAMGetAccountPSNInfo"] = 4313;
        values[valuesById[4314] = "k_EMsgAMGetAccountPSNInfoResponse"] = 4314;
        values[valuesById[4315] = "k_EMsgAMAuthenticatedPlayerList"] = 4315;
        values[valuesById[4316] = "k_EMsgAMGetUserGifts"] = 4316;
        values[valuesById[4317] = "k_EMsgAMGetUserGiftsResponse"] = 4317;
        values[valuesById[4320] = "k_EMsgAMTransferLockedGifts"] = 4320;
        values[valuesById[4321] = "k_EMsgAMTransferLockedGiftsResponse"] = 4321;
        values[valuesById[4322] = "k_EMsgAMPlayerHostedOnGameServer"] = 4322;
        values[valuesById[4323] = "k_EMsgAMGetAccountBanInfo"] = 4323;
        values[valuesById[4324] = "k_EMsgAMGetAccountBanInfoResponse"] = 4324;
        values[valuesById[4325] = "k_EMsgAMRecordBanEnforcement"] = 4325;
        values[valuesById[4326] = "k_EMsgAMRollbackGiftTransfer"] = 4326;
        values[valuesById[4327] = "k_EMsgAMRollbackGiftTransferResponse"] = 4327;
        values[valuesById[4328] = "k_EMsgAMHandlePendingTransaction"] = 4328;
        values[valuesById[4329] = "k_EMsgAMRequestClanDetails"] = 4329;
        values[valuesById[4330] = "k_EMsgAMDeleteStoredPaypalAgreement"] = 4330;
        values[valuesById[4331] = "k_EMsgAMGameServerUpdate"] = 4331;
        values[valuesById[4332] = "k_EMsgAMGameServerRemove"] = 4332;
        values[valuesById[4333] = "k_EMsgAMGetPaypalAgreements"] = 4333;
        values[valuesById[4334] = "k_EMsgAMGetPaypalAgreementsResponse"] = 4334;
        values[valuesById[4335] = "k_EMsgAMGameServerPlayerCompatibilityCheck"] = 4335;
        values[valuesById[4336] = "k_EMsgAMGameServerPlayerCompatibilityCheckResponse"] = 4336;
        values[valuesById[4337] = "k_EMsgAMRenewLicense"] = 4337;
        values[valuesById[4338] = "k_EMsgAMGetAccountCommunityBanInfo"] = 4338;
        values[valuesById[4339] = "k_EMsgAMGetAccountCommunityBanInfoResponse"] = 4339;
        values[valuesById[4340] = "k_EMsgAMGameServerAccountChangePassword"] = 4340;
        values[valuesById[4341] = "k_EMsgAMGameServerAccountDeleteAccount"] = 4341;
        values[valuesById[4342] = "k_EMsgAMRenewAgreement"] = 4342;
        values[valuesById[4344] = "k_EMsgAMXsollaPayment"] = 4344;
        values[valuesById[4345] = "k_EMsgAMXsollaPaymentResponse"] = 4345;
        values[valuesById[4346] = "k_EMsgAMAcctAllowedToPurchase"] = 4346;
        values[valuesById[4347] = "k_EMsgAMAcctAllowedToPurchaseResponse"] = 4347;
        values[valuesById[4348] = "k_EMsgAMSwapKioskDeposit"] = 4348;
        values[valuesById[4349] = "k_EMsgAMSwapKioskDepositResponse"] = 4349;
        values[valuesById[4350] = "k_EMsgAMSetUserGiftUnowned"] = 4350;
        values[valuesById[4351] = "k_EMsgAMSetUserGiftUnownedResponse"] = 4351;
        values[valuesById[4352] = "k_EMsgAMClaimUnownedUserGift"] = 4352;
        values[valuesById[4353] = "k_EMsgAMClaimUnownedUserGiftResponse"] = 4353;
        values[valuesById[4354] = "k_EMsgAMSetClanName"] = 4354;
        values[valuesById[4355] = "k_EMsgAMSetClanNameResponse"] = 4355;
        values[valuesById[4356] = "k_EMsgAMGrantCoupon"] = 4356;
        values[valuesById[4357] = "k_EMsgAMGrantCouponResponse"] = 4357;
        values[valuesById[4358] = "k_EMsgAMIsPackageRestrictedInUserCountry"] = 4358;
        values[valuesById[4359] = "k_EMsgAMIsPackageRestrictedInUserCountryResponse"] = 4359;
        values[valuesById[4360] = "k_EMsgAMHandlePendingTransactionResponse"] = 4360;
        values[valuesById[4361] = "k_EMsgAMGrantGuestPasses2"] = 4361;
        values[valuesById[4362] = "k_EMsgAMGrantGuestPasses2Response"] = 4362;
        values[valuesById[4365] = "k_EMsgAMGetPlayerBanDetails"] = 4365;
        values[valuesById[4366] = "k_EMsgAMGetPlayerBanDetailsResponse"] = 4366;
        values[valuesById[4367] = "k_EMsgAMFinalizePurchase"] = 4367;
        values[valuesById[4368] = "k_EMsgAMFinalizePurchaseResponse"] = 4368;
        values[valuesById[4372] = "k_EMsgAMPersonaChangeResponse"] = 4372;
        values[valuesById[4373] = "k_EMsgAMGetClanDetailsForForumCreation"] = 4373;
        values[valuesById[4374] = "k_EMsgAMGetClanDetailsForForumCreationResponse"] = 4374;
        values[valuesById[4375] = "k_EMsgAMGetPendingNotificationCount"] = 4375;
        values[valuesById[4376] = "k_EMsgAMGetPendingNotificationCountResponse"] = 4376;
        values[valuesById[4377] = "k_EMsgAMPasswordHashUpgrade"] = 4377;
        values[valuesById[4380] = "k_EMsgAMBoaCompraPayment"] = 4380;
        values[valuesById[4381] = "k_EMsgAMBoaCompraPaymentResponse"] = 4381;
        values[valuesById[4383] = "k_EMsgAMCompleteExternalPurchase"] = 4383;
        values[valuesById[4384] = "k_EMsgAMCompleteExternalPurchaseResponse"] = 4384;
        values[valuesById[4385] = "k_EMsgAMResolveNegativeWalletCredits"] = 4385;
        values[valuesById[4386] = "k_EMsgAMResolveNegativeWalletCreditsResponse"] = 4386;
        values[valuesById[4389] = "k_EMsgAMPlayerGetClanBasicDetails"] = 4389;
        values[valuesById[4390] = "k_EMsgAMPlayerGetClanBasicDetailsResponse"] = 4390;
        values[valuesById[4391] = "k_EMsgAMMOLPayment"] = 4391;
        values[valuesById[4392] = "k_EMsgAMMOLPaymentResponse"] = 4392;
        values[valuesById[4393] = "k_EMsgGetUserIPCountry"] = 4393;
        values[valuesById[4394] = "k_EMsgGetUserIPCountryResponse"] = 4394;
        values[valuesById[4395] = "k_EMsgNotificationOfSuspiciousActivity"] = 4395;
        values[valuesById[4396] = "k_EMsgAMDegicaPayment"] = 4396;
        values[valuesById[4397] = "k_EMsgAMDegicaPaymentResponse"] = 4397;
        values[valuesById[4398] = "k_EMsgAMEClubPayment"] = 4398;
        values[valuesById[4399] = "k_EMsgAMEClubPaymentResponse"] = 4399;
        values[valuesById[4400] = "k_EMsgAMPayPalPaymentsHubPayment"] = 4400;
        values[valuesById[4401] = "k_EMsgAMPayPalPaymentsHubPaymentResponse"] = 4401;
        values[valuesById[4402] = "k_EMsgAMTwoFactorRecoverAuthenticatorRequest"] = 4402;
        values[valuesById[4403] = "k_EMsgAMTwoFactorRecoverAuthenticatorResponse"] = 4403;
        values[valuesById[4404] = "k_EMsgAMSmart2PayPayment"] = 4404;
        values[valuesById[4405] = "k_EMsgAMSmart2PayPaymentResponse"] = 4405;
        values[valuesById[4406] = "k_EMsgAMValidatePasswordResetCodeAndSendSmsRequest"] = 4406;
        values[valuesById[4407] = "k_EMsgAMValidatePasswordResetCodeAndSendSmsResponse"] = 4407;
        values[valuesById[4408] = "k_EMsgAMGetAccountResetDetailsRequest"] = 4408;
        values[valuesById[4409] = "k_EMsgAMGetAccountResetDetailsResponse"] = 4409;
        values[valuesById[4410] = "k_EMsgAMBitPayPayment"] = 4410;
        values[valuesById[4411] = "k_EMsgAMBitPayPaymentResponse"] = 4411;
        values[valuesById[4412] = "k_EMsgAMSendAccountInfoUpdate"] = 4412;
        values[valuesById[4413] = "k_EMsgAMSendScheduledGift"] = 4413;
        values[valuesById[4414] = "k_EMsgAMNodwinPayment"] = 4414;
        values[valuesById[4415] = "k_EMsgAMNodwinPaymentResponse"] = 4415;
        values[valuesById[4416] = "k_EMsgAMResolveWalletRevoke"] = 4416;
        values[valuesById[4417] = "k_EMsgAMResolveWalletReverseRevoke"] = 4417;
        values[valuesById[4418] = "k_EMsgAMFundedPayment"] = 4418;
        values[valuesById[4419] = "k_EMsgAMFundedPaymentResponse"] = 4419;
        values[valuesById[4420] = "k_EMsgAMRequestPersonaUpdateForChatServer"] = 4420;
        values[valuesById[4421] = "k_EMsgAMPerfectWorldPayment"] = 4421;
        values[valuesById[4422] = "k_EMsgAMPerfectWorldPaymentResponse"] = 4422;
        values[valuesById[5000] = "k_EMsgBasePSRange"] = 5000;
        values[valuesById[5001] = "k_EMsgPSCreateShoppingCart"] = 5001;
        values[valuesById[5002] = "k_EMsgPSCreateShoppingCartResponse"] = 5002;
        values[valuesById[5003] = "k_EMsgPSIsValidShoppingCart"] = 5003;
        values[valuesById[5004] = "k_EMsgPSIsValidShoppingCartResponse"] = 5004;
        values[valuesById[5005] = "k_EMsgPSAddPackageToShoppingCart"] = 5005;
        values[valuesById[5006] = "k_EMsgPSAddPackageToShoppingCartResponse"] = 5006;
        values[valuesById[5007] = "k_EMsgPSRemoveLineItemFromShoppingCart"] = 5007;
        values[valuesById[5008] = "k_EMsgPSRemoveLineItemFromShoppingCartResponse"] = 5008;
        values[valuesById[5009] = "k_EMsgPSGetShoppingCartContents"] = 5009;
        values[valuesById[5010] = "k_EMsgPSGetShoppingCartContentsResponse"] = 5010;
        values[valuesById[5011] = "k_EMsgPSAddWalletCreditToShoppingCart"] = 5011;
        values[valuesById[5012] = "k_EMsgPSAddWalletCreditToShoppingCartResponse"] = 5012;
        values[valuesById[5200] = "k_EMsgBaseUFSRange"] = 5200;
        values[valuesById[5202] = "k_EMsgClientUFSUploadFileRequest"] = 5202;
        values[valuesById[5203] = "k_EMsgClientUFSUploadFileResponse"] = 5203;
        values[valuesById[5204] = "k_EMsgClientUFSUploadFileChunk"] = 5204;
        values[valuesById[5205] = "k_EMsgClientUFSUploadFileFinished"] = 5205;
        values[valuesById[5206] = "k_EMsgClientUFSGetFileListForApp"] = 5206;
        values[valuesById[5207] = "k_EMsgClientUFSGetFileListForAppResponse"] = 5207;
        values[valuesById[5210] = "k_EMsgClientUFSDownloadRequest"] = 5210;
        values[valuesById[5211] = "k_EMsgClientUFSDownloadResponse"] = 5211;
        values[valuesById[5212] = "k_EMsgClientUFSDownloadChunk"] = 5212;
        values[valuesById[5213] = "k_EMsgClientUFSLoginRequest"] = 5213;
        values[valuesById[5214] = "k_EMsgClientUFSLoginResponse"] = 5214;
        values[valuesById[5215] = "k_EMsgUFSReloadPartitionInfo"] = 5215;
        values[valuesById[5216] = "k_EMsgClientUFSTransferHeartbeat"] = 5216;
        values[valuesById[5217] = "k_EMsgUFSSynchronizeFile"] = 5217;
        values[valuesById[5218] = "k_EMsgUFSSynchronizeFileResponse"] = 5218;
        values[valuesById[5219] = "k_EMsgClientUFSDeleteFileRequest"] = 5219;
        values[valuesById[5220] = "k_EMsgClientUFSDeleteFileResponse"] = 5220;
        values[valuesById[5226] = "k_EMsgClientUFSGetUGCDetails"] = 5226;
        values[valuesById[5227] = "k_EMsgClientUFSGetUGCDetailsResponse"] = 5227;
        values[valuesById[5228] = "k_EMsgUFSUpdateFileFlags"] = 5228;
        values[valuesById[5229] = "k_EMsgUFSUpdateFileFlagsResponse"] = 5229;
        values[valuesById[5230] = "k_EMsgClientUFSGetSingleFileInfo"] = 5230;
        values[valuesById[5231] = "k_EMsgClientUFSGetSingleFileInfoResponse"] = 5231;
        values[valuesById[5232] = "k_EMsgClientUFSShareFile"] = 5232;
        values[valuesById[5233] = "k_EMsgClientUFSShareFileResponse"] = 5233;
        values[valuesById[5234] = "k_EMsgUFSReloadAccount"] = 5234;
        values[valuesById[5235] = "k_EMsgUFSReloadAccountResponse"] = 5235;
        values[valuesById[5236] = "k_EMsgUFSUpdateRecordBatched"] = 5236;
        values[valuesById[5237] = "k_EMsgUFSUpdateRecordBatchedResponse"] = 5237;
        values[valuesById[5238] = "k_EMsgUFSMigrateFile"] = 5238;
        values[valuesById[5239] = "k_EMsgUFSMigrateFileResponse"] = 5239;
        values[valuesById[5240] = "k_EMsgUFSGetUGCURLs"] = 5240;
        values[valuesById[5241] = "k_EMsgUFSGetUGCURLsResponse"] = 5241;
        values[valuesById[5242] = "k_EMsgUFSHttpUploadFileFinishRequest"] = 5242;
        values[valuesById[5243] = "k_EMsgUFSHttpUploadFileFinishResponse"] = 5243;
        values[valuesById[5244] = "k_EMsgUFSDownloadStartRequest"] = 5244;
        values[valuesById[5245] = "k_EMsgUFSDownloadStartResponse"] = 5245;
        values[valuesById[5246] = "k_EMsgUFSDownloadChunkRequest"] = 5246;
        values[valuesById[5247] = "k_EMsgUFSDownloadChunkResponse"] = 5247;
        values[valuesById[5248] = "k_EMsgUFSDownloadFinishRequest"] = 5248;
        values[valuesById[5249] = "k_EMsgUFSDownloadFinishResponse"] = 5249;
        values[valuesById[5250] = "k_EMsgUFSFlushURLCache"] = 5250;
        values[valuesById[5251] = "k_EMsgClientUFSUploadCommit"] = 5251;
        values[valuesById[5252] = "k_EMsgClientUFSUploadCommitResponse"] = 5252;
        values[valuesById[5253] = "k_EMsgUFSMigrateFileAppID"] = 5253;
        values[valuesById[5254] = "k_EMsgUFSMigrateFileAppIDResponse"] = 5254;
        values[valuesById[5400] = "k_EMsgBaseClient2"] = 5400;
        values[valuesById[5401] = "k_EMsgClientRequestForgottenPasswordEmail"] = 5401;
        values[valuesById[5402] = "k_EMsgClientRequestForgottenPasswordEmailResponse"] = 5402;
        values[valuesById[5403] = "k_EMsgClientCreateAccountResponse"] = 5403;
        values[valuesById[5404] = "k_EMsgClientResetForgottenPassword"] = 5404;
        values[valuesById[5405] = "k_EMsgClientResetForgottenPasswordResponse"] = 5405;
        values[valuesById[5407] = "k_EMsgClientInformOfResetForgottenPassword"] = 5407;
        values[valuesById[5408] = "k_EMsgClientInformOfResetForgottenPasswordResponse"] = 5408;
        values[valuesById[5409] = "k_EMsgClientAnonUserLogOn_Deprecated"] = 5409;
        values[valuesById[5410] = "k_EMsgClientGamesPlayedWithDataBlob"] = 5410;
        values[valuesById[5411] = "k_EMsgClientUpdateUserGameInfo"] = 5411;
        values[valuesById[5412] = "k_EMsgClientFileToDownload"] = 5412;
        values[valuesById[5413] = "k_EMsgClientFileToDownloadResponse"] = 5413;
        values[valuesById[5414] = "k_EMsgClientLBSSetScore"] = 5414;
        values[valuesById[5415] = "k_EMsgClientLBSSetScoreResponse"] = 5415;
        values[valuesById[5416] = "k_EMsgClientLBSFindOrCreateLB"] = 5416;
        values[valuesById[5417] = "k_EMsgClientLBSFindOrCreateLBResponse"] = 5417;
        values[valuesById[5418] = "k_EMsgClientLBSGetLBEntries"] = 5418;
        values[valuesById[5419] = "k_EMsgClientLBSGetLBEntriesResponse"] = 5419;
        values[valuesById[5426] = "k_EMsgClientChatDeclined"] = 5426;
        values[valuesById[5427] = "k_EMsgClientFriendMsgIncoming"] = 5427;
        values[valuesById[5428] = "k_EMsgClientAuthList_Deprecated"] = 5428;
        values[valuesById[5429] = "k_EMsgClientTicketAuthComplete"] = 5429;
        values[valuesById[5430] = "k_EMsgClientIsLimitedAccount"] = 5430;
        values[valuesById[5431] = "k_EMsgClientRequestAuthList"] = 5431;
        values[valuesById[5432] = "k_EMsgClientAuthList"] = 5432;
        values[valuesById[5433] = "k_EMsgClientStat"] = 5433;
        values[valuesById[5434] = "k_EMsgClientP2PConnectionInfo"] = 5434;
        values[valuesById[5435] = "k_EMsgClientP2PConnectionFailInfo"] = 5435;
        values[valuesById[5438] = "k_EMsgClientGetDepotDecryptionKey"] = 5438;
        values[valuesById[5439] = "k_EMsgClientGetDepotDecryptionKeyResponse"] = 5439;
        values[valuesById[5440] = "k_EMsgGSPerformHardwareSurvey"] = 5440;
        values[valuesById[5443] = "k_EMsgClientEnableTestLicense"] = 5443;
        values[valuesById[5444] = "k_EMsgClientEnableTestLicenseResponse"] = 5444;
        values[valuesById[5445] = "k_EMsgClientDisableTestLicense"] = 5445;
        values[valuesById[5446] = "k_EMsgClientDisableTestLicenseResponse"] = 5446;
        values[valuesById[5448] = "k_EMsgClientRequestValidationMail"] = 5448;
        values[valuesById[5449] = "k_EMsgClientRequestValidationMailResponse"] = 5449;
        values[valuesById[5450] = "k_EMsgClientCheckAppBetaPassword"] = 5450;
        values[valuesById[5451] = "k_EMsgClientCheckAppBetaPasswordResponse"] = 5451;
        values[valuesById[5452] = "k_EMsgClientToGC"] = 5452;
        values[valuesById[5453] = "k_EMsgClientFromGC"] = 5453;
        values[valuesById[5454] = "k_EMsgClientRequestChangeMail"] = 5454;
        values[valuesById[5455] = "k_EMsgClientRequestChangeMailResponse"] = 5455;
        values[valuesById[5456] = "k_EMsgClientEmailAddrInfo"] = 5456;
        values[valuesById[5457] = "k_EMsgClientPasswordChange3"] = 5457;
        values[valuesById[5458] = "k_EMsgClientEmailChange3"] = 5458;
        values[valuesById[5459] = "k_EMsgClientPersonalQAChange3"] = 5459;
        values[valuesById[5460] = "k_EMsgClientResetForgottenPassword3"] = 5460;
        values[valuesById[5461] = "k_EMsgClientRequestForgottenPasswordEmail3"] = 5461;
        values[valuesById[5463] = "k_EMsgClientNewLoginKey"] = 5463;
        values[valuesById[5464] = "k_EMsgClientNewLoginKeyAccepted"] = 5464;
        values[valuesById[5465] = "k_EMsgClientLogOnWithHash_Deprecated"] = 5465;
        values[valuesById[5466] = "k_EMsgClientStoreUserStats2"] = 5466;
        values[valuesById[5467] = "k_EMsgClientStatsUpdated"] = 5467;
        values[valuesById[5468] = "k_EMsgClientActivateOEMLicense"] = 5468;
        values[valuesById[5469] = "k_EMsgClientRegisterOEMMachine"] = 5469;
        values[valuesById[5470] = "k_EMsgClientRegisterOEMMachineResponse"] = 5470;
        values[valuesById[5480] = "k_EMsgClientRequestedClientStats"] = 5480;
        values[valuesById[5481] = "k_EMsgClientStat2Int32"] = 5481;
        values[valuesById[5482] = "k_EMsgClientStat2"] = 5482;
        values[valuesById[5483] = "k_EMsgClientVerifyPassword"] = 5483;
        values[valuesById[5484] = "k_EMsgClientVerifyPasswordResponse"] = 5484;
        values[valuesById[5485] = "k_EMsgClientDRMDownloadRequest"] = 5485;
        values[valuesById[5486] = "k_EMsgClientDRMDownloadResponse"] = 5486;
        values[valuesById[5487] = "k_EMsgClientDRMFinalResult"] = 5487;
        values[valuesById[5488] = "k_EMsgClientGetFriendsWhoPlayGame"] = 5488;
        values[valuesById[5489] = "k_EMsgClientGetFriendsWhoPlayGameResponse"] = 5489;
        values[valuesById[5490] = "k_EMsgClientOGSBeginSession"] = 5490;
        values[valuesById[5491] = "k_EMsgClientOGSBeginSessionResponse"] = 5491;
        values[valuesById[5492] = "k_EMsgClientOGSEndSession"] = 5492;
        values[valuesById[5493] = "k_EMsgClientOGSEndSessionResponse"] = 5493;
        values[valuesById[5494] = "k_EMsgClientOGSWriteRow"] = 5494;
        values[valuesById[5495] = "k_EMsgClientDRMTest"] = 5495;
        values[valuesById[5496] = "k_EMsgClientDRMTestResult"] = 5496;
        values[valuesById[5500] = "k_EMsgClientServerUnavailable"] = 5500;
        values[valuesById[5501] = "k_EMsgClientServersAvailable"] = 5501;
        values[valuesById[5502] = "k_EMsgClientRegisterAuthTicketWithCM"] = 5502;
        values[valuesById[5503] = "k_EMsgClientGCMsgFailed"] = 5503;
        values[valuesById[5504] = "k_EMsgClientMicroTxnAuthRequest"] = 5504;
        values[valuesById[5505] = "k_EMsgClientMicroTxnAuthorize"] = 5505;
        values[valuesById[5506] = "k_EMsgClientMicroTxnAuthorizeResponse"] = 5506;
        values[valuesById[5507] = "k_EMsgClientAppMinutesPlayedData"] = 5507;
        values[valuesById[5508] = "k_EMsgClientGetMicroTxnInfo"] = 5508;
        values[valuesById[5509] = "k_EMsgClientGetMicroTxnInfoResponse"] = 5509;
        values[valuesById[5510] = "k_EMsgClientMarketingMessageUpdate2"] = 5510;
        values[valuesById[5511] = "k_EMsgClientDeregisterWithServer"] = 5511;
        values[valuesById[5512] = "k_EMsgClientSubscribeToPersonaFeed"] = 5512;
        values[valuesById[5514] = "k_EMsgClientLogon"] = 5514;
        values[valuesById[5515] = "k_EMsgClientGetClientDetails"] = 5515;
        values[valuesById[5516] = "k_EMsgClientGetClientDetailsResponse"] = 5516;
        values[valuesById[5517] = "k_EMsgClientReportOverlayDetourFailure"] = 5517;
        values[valuesById[5518] = "k_EMsgClientGetClientAppList"] = 5518;
        values[valuesById[5519] = "k_EMsgClientGetClientAppListResponse"] = 5519;
        values[valuesById[5520] = "k_EMsgClientInstallClientApp"] = 5520;
        values[valuesById[5521] = "k_EMsgClientInstallClientAppResponse"] = 5521;
        values[valuesById[5522] = "k_EMsgClientUninstallClientApp"] = 5522;
        values[valuesById[5523] = "k_EMsgClientUninstallClientAppResponse"] = 5523;
        values[valuesById[5524] = "k_EMsgClientSetClientAppUpdateState"] = 5524;
        values[valuesById[5525] = "k_EMsgClientSetClientAppUpdateStateResponse"] = 5525;
        values[valuesById[5526] = "k_EMsgClientRequestEncryptedAppTicket"] = 5526;
        values[valuesById[5527] = "k_EMsgClientRequestEncryptedAppTicketResponse"] = 5527;
        values[valuesById[5528] = "k_EMsgClientWalletInfoUpdate"] = 5528;
        values[valuesById[5529] = "k_EMsgClientLBSSetUGC"] = 5529;
        values[valuesById[5530] = "k_EMsgClientLBSSetUGCResponse"] = 5530;
        values[valuesById[5531] = "k_EMsgClientAMGetClanOfficers"] = 5531;
        values[valuesById[5532] = "k_EMsgClientAMGetClanOfficersResponse"] = 5532;
        values[valuesById[5535] = "k_EMsgClientFriendProfileInfo"] = 5535;
        values[valuesById[5536] = "k_EMsgClientFriendProfileInfoResponse"] = 5536;
        values[valuesById[5537] = "k_EMsgClientUpdateMachineAuth"] = 5537;
        values[valuesById[5538] = "k_EMsgClientUpdateMachineAuthResponse"] = 5538;
        values[valuesById[5539] = "k_EMsgClientReadMachineAuth"] = 5539;
        values[valuesById[5540] = "k_EMsgClientReadMachineAuthResponse"] = 5540;
        values[valuesById[5541] = "k_EMsgClientRequestMachineAuth"] = 5541;
        values[valuesById[5542] = "k_EMsgClientRequestMachineAuthResponse"] = 5542;
        values[valuesById[5543] = "k_EMsgClientScreenshotsChanged"] = 5543;
        values[valuesById[5546] = "k_EMsgClientGetCDNAuthToken"] = 5546;
        values[valuesById[5547] = "k_EMsgClientGetCDNAuthTokenResponse"] = 5547;
        values[valuesById[5548] = "k_EMsgClientDownloadRateStatistics"] = 5548;
        values[valuesById[5549] = "k_EMsgClientRequestAccountData"] = 5549;
        values[valuesById[5550] = "k_EMsgClientRequestAccountDataResponse"] = 5550;
        values[valuesById[5551] = "k_EMsgClientResetForgottenPassword4"] = 5551;
        values[valuesById[5552] = "k_EMsgClientHideFriend"] = 5552;
        values[valuesById[5553] = "k_EMsgClientFriendsGroupsList"] = 5553;
        values[valuesById[5554] = "k_EMsgClientGetClanActivityCounts"] = 5554;
        values[valuesById[5555] = "k_EMsgClientGetClanActivityCountsResponse"] = 5555;
        values[valuesById[5556] = "k_EMsgClientOGSReportString"] = 5556;
        values[valuesById[5557] = "k_EMsgClientOGSReportBug"] = 5557;
        values[valuesById[5558] = "k_EMsgClientSentLogs"] = 5558;
        values[valuesById[5559] = "k_EMsgClientLogonGameServer"] = 5559;
        values[valuesById[5560] = "k_EMsgAMClientCreateFriendsGroup"] = 5560;
        values[valuesById[5561] = "k_EMsgAMClientCreateFriendsGroupResponse"] = 5561;
        values[valuesById[5562] = "k_EMsgAMClientDeleteFriendsGroup"] = 5562;
        values[valuesById[5563] = "k_EMsgAMClientDeleteFriendsGroupResponse"] = 5563;
        values[valuesById[5564] = "k_EMsgAMClientManageFriendsGroup"] = 5564;
        values[valuesById[5565] = "k_EMsgAMClientManageFriendsGroupResponse"] = 5565;
        values[valuesById[5566] = "k_EMsgAMClientAddFriendToGroup"] = 5566;
        values[valuesById[5567] = "k_EMsgAMClientAddFriendToGroupResponse"] = 5567;
        values[valuesById[5568] = "k_EMsgAMClientRemoveFriendFromGroup"] = 5568;
        values[valuesById[5569] = "k_EMsgAMClientRemoveFriendFromGroupResponse"] = 5569;
        values[valuesById[5570] = "k_EMsgClientAMGetPersonaNameHistory"] = 5570;
        values[valuesById[5571] = "k_EMsgClientAMGetPersonaNameHistoryResponse"] = 5571;
        values[valuesById[5572] = "k_EMsgClientRequestFreeLicense"] = 5572;
        values[valuesById[5573] = "k_EMsgClientRequestFreeLicenseResponse"] = 5573;
        values[valuesById[5574] = "k_EMsgClientDRMDownloadRequestWithCrashData"] = 5574;
        values[valuesById[5575] = "k_EMsgClientAuthListAck"] = 5575;
        values[valuesById[5576] = "k_EMsgClientItemAnnouncements"] = 5576;
        values[valuesById[5577] = "k_EMsgClientRequestItemAnnouncements"] = 5577;
        values[valuesById[5578] = "k_EMsgClientFriendMsgEchoToSender"] = 5578;
        values[valuesById[5581] = "k_EMsgClientOGSGameServerPingSample"] = 5581;
        values[valuesById[5582] = "k_EMsgClientCommentNotifications"] = 5582;
        values[valuesById[5583] = "k_EMsgClientRequestCommentNotifications"] = 5583;
        values[valuesById[5584] = "k_EMsgClientPersonaChangeResponse"] = 5584;
        values[valuesById[5585] = "k_EMsgClientRequestWebAPIAuthenticateUserNonce"] = 5585;
        values[valuesById[5586] = "k_EMsgClientRequestWebAPIAuthenticateUserNonceResponse"] = 5586;
        values[valuesById[5587] = "k_EMsgClientPlayerNicknameList"] = 5587;
        values[valuesById[5588] = "k_EMsgAMClientSetPlayerNickname"] = 5588;
        values[valuesById[5589] = "k_EMsgAMClientSetPlayerNicknameResponse"] = 5589;
        values[valuesById[5592] = "k_EMsgClientGetNumberOfCurrentPlayersDP"] = 5592;
        values[valuesById[5593] = "k_EMsgClientGetNumberOfCurrentPlayersDPResponse"] = 5593;
        values[valuesById[5594] = "k_EMsgClientServiceMethodLegacy"] = 5594;
        values[valuesById[5595] = "k_EMsgClientServiceMethodLegacyResponse"] = 5595;
        values[valuesById[5596] = "k_EMsgClientFriendUserStatusPublished"] = 5596;
        values[valuesById[5597] = "k_EMsgClientCurrentUIMode"] = 5597;
        values[valuesById[5598] = "k_EMsgClientVanityURLChangedNotification"] = 5598;
        values[valuesById[5599] = "k_EMsgClientUserNotifications"] = 5599;
        values[valuesById[5600] = "k_EMsgBaseDFS"] = 5600;
        values[valuesById[5601] = "k_EMsgDFSGetFile"] = 5601;
        values[valuesById[5602] = "k_EMsgDFSInstallLocalFile"] = 5602;
        values[valuesById[5603] = "k_EMsgDFSConnection"] = 5603;
        values[valuesById[5604] = "k_EMsgDFSConnectionReply"] = 5604;
        values[valuesById[5605] = "k_EMsgClientDFSAuthenticateRequest"] = 5605;
        values[valuesById[5606] = "k_EMsgClientDFSAuthenticateResponse"] = 5606;
        values[valuesById[5607] = "k_EMsgClientDFSEndSession"] = 5607;
        values[valuesById[5608] = "k_EMsgDFSPurgeFile"] = 5608;
        values[valuesById[5609] = "k_EMsgDFSRouteFile"] = 5609;
        values[valuesById[5610] = "k_EMsgDFSGetFileFromServer"] = 5610;
        values[valuesById[5611] = "k_EMsgDFSAcceptedResponse"] = 5611;
        values[valuesById[5612] = "k_EMsgDFSRequestPingback"] = 5612;
        values[valuesById[5613] = "k_EMsgDFSRecvTransmitFile"] = 5613;
        values[valuesById[5614] = "k_EMsgDFSSendTransmitFile"] = 5614;
        values[valuesById[5615] = "k_EMsgDFSRequestPingback2"] = 5615;
        values[valuesById[5616] = "k_EMsgDFSResponsePingback2"] = 5616;
        values[valuesById[5617] = "k_EMsgClientDFSDownloadStatus"] = 5617;
        values[valuesById[5618] = "k_EMsgDFSStartTransfer"] = 5618;
        values[valuesById[5619] = "k_EMsgDFSTransferComplete"] = 5619;
        values[valuesById[5620] = "k_EMsgDFSRouteFileResponse"] = 5620;
        values[valuesById[5621] = "k_EMsgClientNetworkingCertRequest"] = 5621;
        values[valuesById[5622] = "k_EMsgClientNetworkingCertRequestResponse"] = 5622;
        values[valuesById[5623] = "k_EMsgClientChallengeRequest"] = 5623;
        values[valuesById[5624] = "k_EMsgClientChallengeResponse"] = 5624;
        values[valuesById[5625] = "k_EMsgBadgeCraftedNotification"] = 5625;
        values[valuesById[5626] = "k_EMsgClientNetworkingMobileCertRequest"] = 5626;
        values[valuesById[5627] = "k_EMsgClientNetworkingMobileCertRequestResponse"] = 5627;
        values[valuesById[5800] = "k_EMsgBaseMDS"] = 5800;
        values[valuesById[5812] = "k_EMsgAMToMDSGetDepotDecryptionKey"] = 5812;
        values[valuesById[5813] = "k_EMsgMDSToAMGetDepotDecryptionKeyResponse"] = 5813;
        values[valuesById[5827] = "k_EMsgMDSContentServerConfigRequest"] = 5827;
        values[valuesById[5828] = "k_EMsgMDSContentServerConfig"] = 5828;
        values[valuesById[5829] = "k_EMsgMDSGetDepotManifest"] = 5829;
        values[valuesById[5830] = "k_EMsgMDSGetDepotManifestResponse"] = 5830;
        values[valuesById[5831] = "k_EMsgMDSGetDepotManifestChunk"] = 5831;
        values[valuesById[5832] = "k_EMsgMDSGetDepotChunk"] = 5832;
        values[valuesById[5833] = "k_EMsgMDSGetDepotChunkResponse"] = 5833;
        values[valuesById[5834] = "k_EMsgMDSGetDepotChunkChunk"] = 5834;
        values[valuesById[5844] = "k_EMsgMDSToCSFlushChunk"] = 5844;
        values[valuesById[5847] = "k_EMsgMDSMigrateChunk"] = 5847;
        values[valuesById[5848] = "k_EMsgMDSMigrateChunkResponse"] = 5848;
        values[valuesById[5849] = "k_EMsgMDSToCSFlushManifest"] = 5849;
        values[valuesById[6200] = "k_EMsgCSBase"] = 6200;
        values[valuesById[6201] = "k_EMsgCSPing"] = 6201;
        values[valuesById[6202] = "k_EMsgCSPingResponse"] = 6202;
        values[valuesById[6400] = "k_EMsgGMSBase"] = 6400;
        values[valuesById[6401] = "k_EMsgGMSGameServerReplicate"] = 6401;
        values[valuesById[6403] = "k_EMsgClientGMSServerQuery"] = 6403;
        values[valuesById[6404] = "k_EMsgGMSClientServerQueryResponse"] = 6404;
        values[valuesById[6405] = "k_EMsgAMGMSGameServerUpdate"] = 6405;
        values[valuesById[6406] = "k_EMsgAMGMSGameServerRemove"] = 6406;
        values[valuesById[6407] = "k_EMsgGameServerOutOfDate"] = 6407;
        values[valuesById[6500] = "k_EMsgDeviceAuthorizationBase"] = 6500;
        values[valuesById[6501] = "k_EMsgClientAuthorizeLocalDeviceRequest"] = 6501;
        values[valuesById[6502] = "k_EMsgClientAuthorizeLocalDeviceResponse"] = 6502;
        values[valuesById[6503] = "k_EMsgClientDeauthorizeDeviceRequest"] = 6503;
        values[valuesById[6504] = "k_EMsgClientDeauthorizeDevice"] = 6504;
        values[valuesById[6505] = "k_EMsgClientUseLocalDeviceAuthorizations"] = 6505;
        values[valuesById[6506] = "k_EMsgClientGetAuthorizedDevices"] = 6506;
        values[valuesById[6507] = "k_EMsgClientGetAuthorizedDevicesResponse"] = 6507;
        values[valuesById[6508] = "k_EMsgAMNotifySessionDeviceAuthorized"] = 6508;
        values[valuesById[6509] = "k_EMsgClientAuthorizeLocalDeviceNotification"] = 6509;
        values[valuesById[6600] = "k_EMsgMMSBase"] = 6600;
        values[valuesById[6601] = "k_EMsgClientMMSCreateLobby"] = 6601;
        values[valuesById[6602] = "k_EMsgClientMMSCreateLobbyResponse"] = 6602;
        values[valuesById[6603] = "k_EMsgClientMMSJoinLobby"] = 6603;
        values[valuesById[6604] = "k_EMsgClientMMSJoinLobbyResponse"] = 6604;
        values[valuesById[6605] = "k_EMsgClientMMSLeaveLobby"] = 6605;
        values[valuesById[6606] = "k_EMsgClientMMSLeaveLobbyResponse"] = 6606;
        values[valuesById[6607] = "k_EMsgClientMMSGetLobbyList"] = 6607;
        values[valuesById[6608] = "k_EMsgClientMMSGetLobbyListResponse"] = 6608;
        values[valuesById[6609] = "k_EMsgClientMMSSetLobbyData"] = 6609;
        values[valuesById[6610] = "k_EMsgClientMMSSetLobbyDataResponse"] = 6610;
        values[valuesById[6611] = "k_EMsgClientMMSGetLobbyData"] = 6611;
        values[valuesById[6612] = "k_EMsgClientMMSLobbyData"] = 6612;
        values[valuesById[6613] = "k_EMsgClientMMSSendLobbyChatMsg"] = 6613;
        values[valuesById[6614] = "k_EMsgClientMMSLobbyChatMsg"] = 6614;
        values[valuesById[6615] = "k_EMsgClientMMSSetLobbyOwner"] = 6615;
        values[valuesById[6616] = "k_EMsgClientMMSSetLobbyOwnerResponse"] = 6616;
        values[valuesById[6617] = "k_EMsgClientMMSSetLobbyGameServer"] = 6617;
        values[valuesById[6618] = "k_EMsgClientMMSLobbyGameServerSet"] = 6618;
        values[valuesById[6619] = "k_EMsgClientMMSUserJoinedLobby"] = 6619;
        values[valuesById[6620] = "k_EMsgClientMMSUserLeftLobby"] = 6620;
        values[valuesById[6621] = "k_EMsgClientMMSInviteToLobby"] = 6621;
        values[valuesById[6622] = "k_EMsgClientMMSFlushFrenemyListCache"] = 6622;
        values[valuesById[6623] = "k_EMsgClientMMSFlushFrenemyListCacheResponse"] = 6623;
        values[valuesById[6624] = "k_EMsgClientMMSSetLobbyLinked"] = 6624;
        values[valuesById[6625] = "k_EMsgClientMMSSetRatelimitPolicyOnClient"] = 6625;
        values[valuesById[6626] = "k_EMsgClientMMSGetLobbyStatus"] = 6626;
        values[valuesById[6627] = "k_EMsgClientMMSGetLobbyStatusResponse"] = 6627;
        values[valuesById[6628] = "k_EMsgMMSGetLobbyList"] = 6628;
        values[valuesById[6629] = "k_EMsgMMSGetLobbyListResponse"] = 6629;
        values[valuesById[6800] = "k_EMsgNonStdMsgBase"] = 6800;
        values[valuesById[6801] = "k_EMsgNonStdMsgMemcached"] = 6801;
        values[valuesById[6802] = "k_EMsgNonStdMsgHTTPServer"] = 6802;
        values[valuesById[6803] = "k_EMsgNonStdMsgHTTPClient"] = 6803;
        values[valuesById[6804] = "k_EMsgNonStdMsgWGResponse"] = 6804;
        values[valuesById[6805] = "k_EMsgNonStdMsgPHPSimulator"] = 6805;
        values[valuesById[6806] = "k_EMsgNonStdMsgChase"] = 6806;
        values[valuesById[6807] = "k_EMsgNonStdMsgDFSTransfer"] = 6807;
        values[valuesById[6808] = "k_EMsgNonStdMsgTests"] = 6808;
        values[valuesById[6809] = "k_EMsgNonStdMsgUMQpipeAAPL"] = 6809;
        values[valuesById[6810] = "k_EMSgNonStdMsgSyslog"] = 6810;
        values[valuesById[6811] = "k_EMsgNonStdMsgLogsink"] = 6811;
        values[valuesById[6812] = "k_EMsgNonStdMsgSteam2Emulator"] = 6812;
        values[valuesById[6813] = "k_EMsgNonStdMsgRTMPServer"] = 6813;
        values[valuesById[6814] = "k_EMsgNonStdMsgWebSocket"] = 6814;
        values[valuesById[6815] = "k_EMsgNonStdMsgRedis"] = 6815;
        values[valuesById[7000] = "k_EMsgUDSBase"] = 7000;
        values[valuesById[7001] = "k_EMsgClientUDSP2PSessionStarted"] = 7001;
        values[valuesById[7002] = "k_EMsgClientUDSP2PSessionEnded"] = 7002;
        values[valuesById[7003] = "k_EMsgUDSRenderUserAuth"] = 7003;
        values[valuesById[7004] = "k_EMsgUDSRenderUserAuthResponse"] = 7004;
        values[valuesById[7005] = "k_EMsgClientInviteToGame"] = 7005;
        values[valuesById[7006] = "k_EMsgUDSHasSession"] = 7006;
        values[valuesById[7007] = "k_EMsgUDSHasSessionResponse"] = 7007;
        values[valuesById[7100] = "k_EMsgMPASBase"] = 7100;
        values[valuesById[7101] = "k_EMsgMPASVacBanReset"] = 7101;
        values[valuesById[7200] = "k_EMsgKGSBase"] = 7200;
        values[valuesById[7300] = "k_EMsgUCMBase"] = 7300;
        values[valuesById[7301] = "k_EMsgClientUCMAddScreenshot"] = 7301;
        values[valuesById[7302] = "k_EMsgClientUCMAddScreenshotResponse"] = 7302;
        values[valuesById[7307] = "k_EMsgUCMResetCommunityContent"] = 7307;
        values[valuesById[7308] = "k_EMsgUCMResetCommunityContentResponse"] = 7308;
        values[valuesById[7309] = "k_EMsgClientUCMDeleteScreenshot"] = 7309;
        values[valuesById[7310] = "k_EMsgClientUCMDeleteScreenshotResponse"] = 7310;
        values[valuesById[7311] = "k_EMsgClientUCMPublishFile"] = 7311;
        values[valuesById[7312] = "k_EMsgClientUCMPublishFileResponse"] = 7312;
        values[valuesById[7315] = "k_EMsgClientUCMDeletePublishedFile"] = 7315;
        values[valuesById[7316] = "k_EMsgClientUCMDeletePublishedFileResponse"] = 7316;
        values[valuesById[7317] = "k_EMsgClientUCMEnumerateUserPublishedFiles"] = 7317;
        values[valuesById[7318] = "k_EMsgClientUCMEnumerateUserPublishedFilesResponse"] = 7318;
        values[valuesById[7321] = "k_EMsgClientUCMEnumerateUserSubscribedFiles"] = 7321;
        values[valuesById[7322] = "k_EMsgClientUCMEnumerateUserSubscribedFilesResponse"] = 7322;
        values[valuesById[7325] = "k_EMsgClientUCMUpdatePublishedFile"] = 7325;
        values[valuesById[7326] = "k_EMsgClientUCMUpdatePublishedFileResponse"] = 7326;
        values[valuesById[7327] = "k_EMsgUCMUpdatePublishedFile"] = 7327;
        values[valuesById[7328] = "k_EMsgUCMUpdatePublishedFileResponse"] = 7328;
        values[valuesById[7329] = "k_EMsgUCMDeletePublishedFile"] = 7329;
        values[valuesById[7330] = "k_EMsgUCMDeletePublishedFileResponse"] = 7330;
        values[valuesById[7331] = "k_EMsgUCMUpdatePublishedFileStat"] = 7331;
        values[valuesById[7337] = "k_EMsgUCMReloadPublishedFile"] = 7337;
        values[valuesById[7338] = "k_EMsgUCMReloadUserFileListCaches"] = 7338;
        values[valuesById[7339] = "k_EMsgUCMPublishedFileReported"] = 7339;
        values[valuesById[7341] = "k_EMsgUCMPublishedFilePreviewAdd"] = 7341;
        values[valuesById[7342] = "k_EMsgUCMPublishedFilePreviewAddResponse"] = 7342;
        values[valuesById[7343] = "k_EMsgUCMPublishedFilePreviewRemove"] = 7343;
        values[valuesById[7344] = "k_EMsgUCMPublishedFilePreviewRemoveResponse"] = 7344;
        values[valuesById[7349] = "k_EMsgUCMPublishedFileSubscribed"] = 7349;
        values[valuesById[7350] = "k_EMsgUCMPublishedFileUnsubscribed"] = 7350;
        values[valuesById[7351] = "k_EMsgUCMPublishFile"] = 7351;
        values[valuesById[7352] = "k_EMsgUCMPublishFileResponse"] = 7352;
        values[valuesById[7353] = "k_EMsgUCMPublishedFileChildAdd"] = 7353;
        values[valuesById[7354] = "k_EMsgUCMPublishedFileChildAddResponse"] = 7354;
        values[valuesById[7355] = "k_EMsgUCMPublishedFileChildRemove"] = 7355;
        values[valuesById[7356] = "k_EMsgUCMPublishedFileChildRemoveResponse"] = 7356;
        values[valuesById[7359] = "k_EMsgUCMPublishedFileParentChanged"] = 7359;
        values[valuesById[7360] = "k_EMsgClientUCMGetPublishedFilesForUser"] = 7360;
        values[valuesById[7361] = "k_EMsgClientUCMGetPublishedFilesForUserResponse"] = 7361;
        values[valuesById[7364] = "k_EMsgClientUCMSetUserPublishedFileAction"] = 7364;
        values[valuesById[7365] = "k_EMsgClientUCMSetUserPublishedFileActionResponse"] = 7365;
        values[valuesById[7366] = "k_EMsgClientUCMEnumeratePublishedFilesByUserAction"] = 7366;
        values[valuesById[7367] = "k_EMsgClientUCMEnumeratePublishedFilesByUserActionResponse"] = 7367;
        values[valuesById[7369] = "k_EMsgUCMGetUserSubscribedFiles"] = 7369;
        values[valuesById[7370] = "k_EMsgUCMGetUserSubscribedFilesResponse"] = 7370;
        values[valuesById[7371] = "k_EMsgUCMFixStatsPublishedFile"] = 7371;
        values[valuesById[7378] = "k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdates"] = 7378;
        values[valuesById[7379] = "k_EMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse"] = 7379;
        values[valuesById[7380] = "k_EMsgUCMPublishedFileContentUpdated"] = 7380;
        values[valuesById[7381] = "k_EMsgClientUCMPublishedFileUpdated"] = 7381;
        values[valuesById[7382] = "k_EMsgClientWorkshopItemChangesRequest"] = 7382;
        values[valuesById[7383] = "k_EMsgClientWorkshopItemChangesResponse"] = 7383;
        values[valuesById[7384] = "k_EMsgClientWorkshopItemInfoRequest"] = 7384;
        values[valuesById[7385] = "k_EMsgClientWorkshopItemInfoResponse"] = 7385;
        values[valuesById[7500] = "k_EMsgFSBase"] = 7500;
        values[valuesById[7501] = "k_EMsgClientRichPresenceUpload"] = 7501;
        values[valuesById[7502] = "k_EMsgClientRichPresenceRequest"] = 7502;
        values[valuesById[7503] = "k_EMsgClientRichPresenceInfo"] = 7503;
        values[valuesById[7504] = "k_EMsgFSRichPresenceRequest"] = 7504;
        values[valuesById[7505] = "k_EMsgFSRichPresenceResponse"] = 7505;
        values[valuesById[7506] = "k_EMsgFSComputeFrenematrix"] = 7506;
        values[valuesById[7507] = "k_EMsgFSComputeFrenematrixResponse"] = 7507;
        values[valuesById[7508] = "k_EMsgFSPlayStatusNotification"] = 7508;
        values[valuesById[7510] = "k_EMsgFSAddOrRemoveFollower"] = 7510;
        values[valuesById[7511] = "k_EMsgFSAddOrRemoveFollowerResponse"] = 7511;
        values[valuesById[7512] = "k_EMsgFSUpdateFollowingList"] = 7512;
        values[valuesById[7513] = "k_EMsgFSCommentNotification"] = 7513;
        values[valuesById[7514] = "k_EMsgFSCommentNotificationViewed"] = 7514;
        values[valuesById[7515] = "k_EMsgClientFSGetFollowerCount"] = 7515;
        values[valuesById[7516] = "k_EMsgClientFSGetFollowerCountResponse"] = 7516;
        values[valuesById[7517] = "k_EMsgClientFSGetIsFollowing"] = 7517;
        values[valuesById[7518] = "k_EMsgClientFSGetIsFollowingResponse"] = 7518;
        values[valuesById[7519] = "k_EMsgClientFSEnumerateFollowingList"] = 7519;
        values[valuesById[7520] = "k_EMsgClientFSEnumerateFollowingListResponse"] = 7520;
        values[valuesById[7521] = "k_EMsgFSGetPendingNotificationCount"] = 7521;
        values[valuesById[7522] = "k_EMsgFSGetPendingNotificationCountResponse"] = 7522;
        values[valuesById[7523] = "k_EMsgClientChatOfflineMessageNotification"] = 7523;
        values[valuesById[7524] = "k_EMsgClientChatRequestOfflineMessageCount"] = 7524;
        values[valuesById[7525] = "k_EMsgClientChatGetFriendMessageHistory"] = 7525;
        values[valuesById[7526] = "k_EMsgClientChatGetFriendMessageHistoryResponse"] = 7526;
        values[valuesById[7527] = "k_EMsgClientChatGetFriendMessageHistoryForOfflineMessages"] = 7527;
        values[valuesById[7528] = "k_EMsgClientFSGetFriendsSteamLevels"] = 7528;
        values[valuesById[7529] = "k_EMsgClientFSGetFriendsSteamLevelsResponse"] = 7529;
        values[valuesById[7530] = "k_EMsgAMRequestFriendData"] = 7530;
        values[valuesById[7600] = "k_EMsgDRMRange2"] = 7600;
        values["k_EMsgCEGVersionSetEnableDisableRequest"] = 7600;
        values[valuesById[7601] = "k_EMsgCEGVersionSetEnableDisableResponse"] = 7601;
        values[valuesById[7602] = "k_EMsgCEGPropStatusDRMSRequest"] = 7602;
        values[valuesById[7603] = "k_EMsgCEGPropStatusDRMSResponse"] = 7603;
        values[valuesById[7604] = "k_EMsgCEGWhackFailureReportRequest"] = 7604;
        values[valuesById[7605] = "k_EMsgCEGWhackFailureReportResponse"] = 7605;
        values[valuesById[7606] = "k_EMsgDRMSFetchVersionSet"] = 7606;
        values[valuesById[7607] = "k_EMsgDRMSFetchVersionSetResponse"] = 7607;
        values[valuesById[7700] = "k_EMsgEconBase"] = 7700;
        values[valuesById[7701] = "k_EMsgEconTrading_InitiateTradeRequest"] = 7701;
        values[valuesById[7702] = "k_EMsgEconTrading_InitiateTradeProposed"] = 7702;
        values[valuesById[7703] = "k_EMsgEconTrading_InitiateTradeResponse"] = 7703;
        values[valuesById[7704] = "k_EMsgEconTrading_InitiateTradeResult"] = 7704;
        values[valuesById[7705] = "k_EMsgEconTrading_StartSession"] = 7705;
        values[valuesById[7706] = "k_EMsgEconTrading_CancelTradeRequest"] = 7706;
        values[valuesById[7707] = "k_EMsgEconFlushInventoryCache"] = 7707;
        values[valuesById[7708] = "k_EMsgEconFlushInventoryCacheResponse"] = 7708;
        values[valuesById[7711] = "k_EMsgEconCDKeyProcessTransaction"] = 7711;
        values[valuesById[7712] = "k_EMsgEconCDKeyProcessTransactionResponse"] = 7712;
        values[valuesById[7713] = "k_EMsgEconGetErrorLogs"] = 7713;
        values[valuesById[7714] = "k_EMsgEconGetErrorLogsResponse"] = 7714;
        values[valuesById[7800] = "k_EMsgRMRange"] = 7800;
        values["k_EMsgRMTestVerisignOTP"] = 7800;
        values[valuesById[7801] = "k_EMsgRMTestVerisignOTPResponse"] = 7801;
        values[valuesById[7803] = "k_EMsgRMDeleteMemcachedKeys"] = 7803;
        values[valuesById[7804] = "k_EMsgRMRemoteInvoke"] = 7804;
        values[valuesById[7805] = "k_EMsgBadLoginIPList"] = 7805;
        values[valuesById[7806] = "k_EMsgRMMsgTraceAddTrigger"] = 7806;
        values[valuesById[7807] = "k_EMsgRMMsgTraceRemoveTrigger"] = 7807;
        values[valuesById[7808] = "k_EMsgRMMsgTraceEvent"] = 7808;
        values[valuesById[7900] = "k_EMsgUGSBase"] = 7900;
        values["k_EMsgUGSUpdateGlobalStats"] = 7900;
        values[valuesById[7901] = "k_EMsgClientUGSGetGlobalStats"] = 7901;
        values[valuesById[7902] = "k_EMsgClientUGSGetGlobalStatsResponse"] = 7902;
        values[valuesById[8000] = "k_EMsgStoreBase"] = 8000;
        values[valuesById[8100] = "k_EMsgUMQBase"] = 8100;
        values["k_EMsgUMQLogonRequest"] = 8100;
        values[valuesById[8101] = "k_EMsgUMQLogonResponse"] = 8101;
        values[valuesById[8102] = "k_EMsgUMQLogoffRequest"] = 8102;
        values[valuesById[8103] = "k_EMsgUMQLogoffResponse"] = 8103;
        values[valuesById[8104] = "k_EMsgUMQSendChatMessage"] = 8104;
        values[valuesById[8105] = "k_EMsgUMQIncomingChatMessage"] = 8105;
        values[valuesById[8106] = "k_EMsgUMQPoll"] = 8106;
        values[valuesById[8107] = "k_EMsgUMQPollResults"] = 8107;
        values[valuesById[8108] = "k_EMsgUMQ2AM_ClientMsgBatch"] = 8108;
        values[valuesById[8200] = "k_EMsgWorkshopBase"] = 8200;
        values[valuesById[8300] = "k_EMsgWebAPIBase"] = 8300;
        values["k_EMsgWebAPIValidateOAuth2Token"] = 8300;
        values[valuesById[8301] = "k_EMsgWebAPIValidateOAuth2TokenResponse"] = 8301;
        values[valuesById[8303] = "k_EMsgWebAPIRegisterGCInterfaces"] = 8303;
        values[valuesById[8304] = "k_EMsgWebAPIInvalidateOAuthClientCache"] = 8304;
        values[valuesById[8305] = "k_EMsgWebAPIInvalidateOAuthTokenCache"] = 8305;
        values[valuesById[8306] = "k_EMsgWebAPISetSecrets"] = 8306;
        values[valuesById[8400] = "k_EMsgBackpackBase"] = 8400;
        values[valuesById[8401] = "k_EMsgBackpackAddToCurrency"] = 8401;
        values[valuesById[8402] = "k_EMsgBackpackAddToCurrencyResponse"] = 8402;
        values[valuesById[8500] = "k_EMsgCREBase"] = 8500;
        values[valuesById[8503] = "k_EMsgCREItemVoteSummary"] = 8503;
        values[valuesById[8504] = "k_EMsgCREItemVoteSummaryResponse"] = 8504;
        values[valuesById[8507] = "k_EMsgCREUpdateUserPublishedItemVote"] = 8507;
        values[valuesById[8508] = "k_EMsgCREUpdateUserPublishedItemVoteResponse"] = 8508;
        values[valuesById[8509] = "k_EMsgCREGetUserPublishedItemVoteDetails"] = 8509;
        values[valuesById[8510] = "k_EMsgCREGetUserPublishedItemVoteDetailsResponse"] = 8510;
        values[valuesById[8513] = "k_EMsgCREPublishedFileVoteAdded"] = 8513;
        values[valuesById[8600] = "k_EMsgSecretsBase"] = 8600;
        values["k_EMsgSecretsRequestCredentialPair"] = 8600;
        values[valuesById[8601] = "k_EMsgSecretsCredentialPairResponse"] = 8601;
        values[valuesById[8700] = "k_EMsgBoxMonitorBase"] = 8700;
        values["k_EMsgBoxMonitorReportRequest"] = 8700;
        values[valuesById[8701] = "k_EMsgBoxMonitorReportResponse"] = 8701;
        values[valuesById[8800] = "k_EMsgLogsinkBase"] = 8800;
        values["k_EMsgLogsinkWriteReport"] = 8800;
        values[valuesById[8900] = "k_EMsgPICSBase"] = 8900;
        values[valuesById[8901] = "k_EMsgClientPICSChangesSinceRequest"] = 8901;
        values[valuesById[8902] = "k_EMsgClientPICSChangesSinceResponse"] = 8902;
        values[valuesById[8903] = "k_EMsgClientPICSProductInfoRequest"] = 8903;
        values[valuesById[8904] = "k_EMsgClientPICSProductInfoResponse"] = 8904;
        values[valuesById[8905] = "k_EMsgClientPICSAccessTokenRequest"] = 8905;
        values[valuesById[8906] = "k_EMsgClientPICSAccessTokenResponse"] = 8906;
        values[valuesById[9000] = "k_EMsgWorkerProcess"] = 9000;
        values["k_EMsgWorkerProcessPingRequest"] = 9000;
        values[valuesById[9001] = "k_EMsgWorkerProcessPingResponse"] = 9001;
        values[valuesById[9002] = "k_EMsgWorkerProcessShutdown"] = 9002;
        values[valuesById[9100] = "k_EMsgDRMWorkerProcess"] = 9100;
        values["k_EMsgDRMWorkerProcessDRMAndSign"] = 9100;
        values[valuesById[9101] = "k_EMsgDRMWorkerProcessDRMAndSignResponse"] = 9101;
        values[valuesById[9102] = "k_EMsgDRMWorkerProcessSteamworksInfoRequest"] = 9102;
        values[valuesById[9103] = "k_EMsgDRMWorkerProcessSteamworksInfoResponse"] = 9103;
        values[valuesById[9104] = "k_EMsgDRMWorkerProcessInstallDRMDLLRequest"] = 9104;
        values[valuesById[9105] = "k_EMsgDRMWorkerProcessInstallDRMDLLResponse"] = 9105;
        values[valuesById[9106] = "k_EMsgDRMWorkerProcessSecretIdStringRequest"] = 9106;
        values[valuesById[9107] = "k_EMsgDRMWorkerProcessSecretIdStringResponse"] = 9107;
        values[valuesById[9110] = "k_EMsgDRMWorkerProcessInstallProcessedFilesRequest"] = 9110;
        values[valuesById[9111] = "k_EMsgDRMWorkerProcessInstallProcessedFilesResponse"] = 9111;
        values[valuesById[9112] = "k_EMsgDRMWorkerProcessExamineBlobRequest"] = 9112;
        values[valuesById[9113] = "k_EMsgDRMWorkerProcessExamineBlobResponse"] = 9113;
        values[valuesById[9114] = "k_EMsgDRMWorkerProcessDescribeSecretRequest"] = 9114;
        values[valuesById[9115] = "k_EMsgDRMWorkerProcessDescribeSecretResponse"] = 9115;
        values[valuesById[9116] = "k_EMsgDRMWorkerProcessBackfillOriginalRequest"] = 9116;
        values[valuesById[9117] = "k_EMsgDRMWorkerProcessBackfillOriginalResponse"] = 9117;
        values[valuesById[9118] = "k_EMsgDRMWorkerProcessValidateDRMDLLRequest"] = 9118;
        values[valuesById[9119] = "k_EMsgDRMWorkerProcessValidateDRMDLLResponse"] = 9119;
        values[valuesById[9120] = "k_EMsgDRMWorkerProcessValidateFileRequest"] = 9120;
        values[valuesById[9121] = "k_EMsgDRMWorkerProcessValidateFileResponse"] = 9121;
        values[valuesById[9122] = "k_EMsgDRMWorkerProcessSplitAndInstallRequest"] = 9122;
        values[valuesById[9123] = "k_EMsgDRMWorkerProcessSplitAndInstallResponse"] = 9123;
        values[valuesById[9124] = "k_EMsgDRMWorkerProcessGetBlobRequest"] = 9124;
        values[valuesById[9125] = "k_EMsgDRMWorkerProcessGetBlobResponse"] = 9125;
        values[valuesById[9126] = "k_EMsgDRMWorkerProcessEvaluateCrashRequest"] = 9126;
        values[valuesById[9127] = "k_EMsgDRMWorkerProcessEvaluateCrashResponse"] = 9127;
        values[valuesById[9128] = "k_EMsgDRMWorkerProcessAnalyzeFileRequest"] = 9128;
        values[valuesById[9129] = "k_EMsgDRMWorkerProcessAnalyzeFileResponse"] = 9129;
        values[valuesById[9130] = "k_EMsgDRMWorkerProcessUnpackBlobRequest"] = 9130;
        values[valuesById[9131] = "k_EMsgDRMWorkerProcessUnpackBlobResponse"] = 9131;
        values[valuesById[9132] = "k_EMsgDRMWorkerProcessInstallAllRequest"] = 9132;
        values[valuesById[9133] = "k_EMsgDRMWorkerProcessInstallAllResponse"] = 9133;
        values[valuesById[9200] = "k_EMsgTestWorkerProcess"] = 9200;
        values["k_EMsgTestWorkerProcessLoadUnloadModuleRequest"] = 9200;
        values[valuesById[9201] = "k_EMsgTestWorkerProcessLoadUnloadModuleResponse"] = 9201;
        values[valuesById[9202] = "k_EMsgTestWorkerProcessServiceModuleCallRequest"] = 9202;
        values[valuesById[9203] = "k_EMsgTestWorkerProcessServiceModuleCallResponse"] = 9203;
        values[valuesById[9300] = "k_EMsgQuestServerBase"] = 9300;
        values[valuesById[9330] = "k_EMsgClientGetEmoticonList"] = 9330;
        values[valuesById[9331] = "k_EMsgClientEmoticonList"] = 9331;
        values[valuesById[9400] = "k_EMsgSLCBase"] = 9400;
        values["k_EMsgSLCUserSessionStatus"] = 9400;
        values[valuesById[9401] = "k_EMsgSLCRequestUserSessionStatus"] = 9401;
        values[valuesById[9402] = "k_EMsgSLCSharedLicensesLockStatus"] = 9402;
        values[valuesById[9405] = "k_EMsgClientSharedLibraryLockStatus"] = 9405;
        values[valuesById[9406] = "k_EMsgClientSharedLibraryStopPlaying"] = 9406;
        values[valuesById[9407] = "k_EMsgSLCOwnerLibraryChanged"] = 9407;
        values[valuesById[9408] = "k_EMsgSLCSharedLibraryChanged"] = 9408;
        values[valuesById[9500] = "k_EMsgRemoteClientBase"] = 9500;
        values["k_EMsgRemoteClientAuth_OBSOLETE"] = 9500;
        values[valuesById[9501] = "k_EMsgRemoteClientAuthResponse_OBSOLETE"] = 9501;
        values[valuesById[9502] = "k_EMsgRemoteClientAppStatus"] = 9502;
        values[valuesById[9503] = "k_EMsgRemoteClientStartStream"] = 9503;
        values[valuesById[9504] = "k_EMsgRemoteClientStartStreamResponse"] = 9504;
        values[valuesById[9505] = "k_EMsgRemoteClientPing"] = 9505;
        values[valuesById[9506] = "k_EMsgRemoteClientPingResponse"] = 9506;
        values[valuesById[9507] = "k_EMsgClientUnlockStreaming"] = 9507;
        values[valuesById[9508] = "k_EMsgClientUnlockStreamingResponse"] = 9508;
        values[valuesById[9509] = "k_EMsgRemoteClientAcceptEULA"] = 9509;
        values[valuesById[9510] = "k_EMsgRemoteClientGetControllerConfig"] = 9510;
        values[valuesById[9511] = "k_EMsgRemoteClientGetControllerConfigResponse"] = 9511;
        values[valuesById[9512] = "k_EMsgRemoteClientStreamingEnabled"] = 9512;
        values[valuesById[9513] = "k_EMsgClientUnlockHEVC"] = 9513;
        values[valuesById[9514] = "k_EMsgClientUnlockHEVCResponse"] = 9514;
        values[valuesById[9515] = "k_EMsgRemoteClientStatusRequest"] = 9515;
        values[valuesById[9516] = "k_EMsgRemoteClientStatusResponse"] = 9516;
        values[valuesById[9600] = "k_EMsgClientConcurrentSessionsBase"] = 9600;
        values["k_EMsgClientPlayingSessionState"] = 9600;
        values[valuesById[9601] = "k_EMsgClientKickPlayingSession"] = 9601;
        values[valuesById[9700] = "k_EMsgClientBroadcastBase"] = 9700;
        values["k_EMsgClientBroadcastInit"] = 9700;
        values[valuesById[9701] = "k_EMsgClientBroadcastFrames"] = 9701;
        values[valuesById[9702] = "k_EMsgClientBroadcastDisconnect"] = 9702;
        values[valuesById[9703] = "k_EMsgClientBroadcastScreenshot"] = 9703;
        values[valuesById[9704] = "k_EMsgClientBroadcastUploadConfig"] = 9704;
        values[valuesById[9800] = "k_EMsgBaseClient3"] = 9800;
        values["k_EMsgClientVoiceCallPreAuthorize"] = 9800;
        values[valuesById[9801] = "k_EMsgClientVoiceCallPreAuthorizeResponse"] = 9801;
        values[valuesById[9802] = "k_EMsgClientServerTimestampRequest"] = 9802;
        values[valuesById[9803] = "k_EMsgClientServerTimestampResponse"] = 9803;
        values[valuesById[9900] = "k_EMsgClientLANP2PBase"] = 9900;
        values["k_EMsgClientLANP2PRequestChunk"] = 9900;
        values[valuesById[9901] = "k_EMsgClientLANP2PRequestChunkResponse"] = 9901;
        values[valuesById[9999] = "k_EMsgClientLANP2PMax"] = 9999;
        values[valuesById[10000] = "k_EMsgBaseWatchdogServer"] = 10000;
        values["k_EMsgNotifyWatchdog"] = 10000;
        values[valuesById[10100] = "k_EMsgClientSiteLicenseBase"] = 10100;
        values["k_EMsgClientSiteLicenseSiteInfoNotification"] = 10100;
        values[valuesById[10101] = "k_EMsgClientSiteLicenseCheckout"] = 10101;
        values[valuesById[10102] = "k_EMsgClientSiteLicenseCheckoutResponse"] = 10102;
        values[valuesById[10103] = "k_EMsgClientSiteLicenseGetAvailableSeats"] = 10103;
        values[valuesById[10104] = "k_EMsgClientSiteLicenseGetAvailableSeatsResponse"] = 10104;
        values[valuesById[10105] = "k_EMsgClientSiteLicenseGetContentCacheInfo"] = 10105;
        values[valuesById[10106] = "k_EMsgClientSiteLicenseGetContentCacheInfoResponse"] = 10106;
        values[valuesById[12000] = "k_EMsgBaseChatServer"] = 12000;
        values["k_EMsgChatServerGetPendingNotificationCount"] = 12000;
        values[valuesById[12001] = "k_EMsgChatServerGetPendingNotificationCountResponse"] = 12001;
        values[valuesById[12100] = "k_EMsgBaseSecretServer"] = 12100;
        values["k_EMsgServerSecretChanged"] = 12100;
        return values;
    })();
    
    /**
     * EClientPersonaStateFlag enum.
     * @exports EClientPersonaStateFlag
     * @enum {string}
     * @property {number} k_EClientPersonaStateFlagStatus=1 k_EClientPersonaStateFlagStatus value
     * @property {number} k_EClientPersonaStateFlagPlayerName=2 k_EClientPersonaStateFlagPlayerName value
     * @property {number} k_EClientPersonaStateFlagQueryPort=4 k_EClientPersonaStateFlagQueryPort value
     * @property {number} k_EClientPersonaStateFlagSourceID=8 k_EClientPersonaStateFlagSourceID value
     * @property {number} k_EClientPersonaStateFlagPresence=16 k_EClientPersonaStateFlagPresence value
     * @property {number} k_EClientPersonaStateFlagLastSeen=64 k_EClientPersonaStateFlagLastSeen value
     * @property {number} k_EClientPersonaStateFlagUserClanRank=128 k_EClientPersonaStateFlagUserClanRank value
     * @property {number} k_EClientPersonaStateGameExtraInfo=256 k_EClientPersonaStateGameExtraInfo value
     * @property {number} k_EClientPersonaStateGameDataBlob=512 k_EClientPersonaStateGameDataBlob value
     * @property {number} k_EClientPersonaStateFlagClanData=1024 k_EClientPersonaStateFlagClanData value
     * @property {number} k_EClientPersonaStateFlagFacebook=2048 k_EClientPersonaStateFlagFacebook value
     * @property {number} k_EClientPersonaStateFlagRichPresence=4096 k_EClientPersonaStateFlagRichPresence value
     * @property {number} k_EClientPersonaStateFlagBroadcast=8192 k_EClientPersonaStateFlagBroadcast value
     * @property {number} k_EClientPersonaStateFlagWatching=16384 k_EClientPersonaStateFlagWatching value
     */
    $root.EClientPersonaStateFlag = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EClientPersonaStateFlagStatus"] = 1;
        values[valuesById[2] = "k_EClientPersonaStateFlagPlayerName"] = 2;
        values[valuesById[4] = "k_EClientPersonaStateFlagQueryPort"] = 4;
        values[valuesById[8] = "k_EClientPersonaStateFlagSourceID"] = 8;
        values[valuesById[16] = "k_EClientPersonaStateFlagPresence"] = 16;
        values[valuesById[64] = "k_EClientPersonaStateFlagLastSeen"] = 64;
        values[valuesById[128] = "k_EClientPersonaStateFlagUserClanRank"] = 128;
        values[valuesById[256] = "k_EClientPersonaStateGameExtraInfo"] = 256;
        values[valuesById[512] = "k_EClientPersonaStateGameDataBlob"] = 512;
        values[valuesById[1024] = "k_EClientPersonaStateFlagClanData"] = 1024;
        values[valuesById[2048] = "k_EClientPersonaStateFlagFacebook"] = 2048;
        values[valuesById[4096] = "k_EClientPersonaStateFlagRichPresence"] = 4096;
        values[valuesById[8192] = "k_EClientPersonaStateFlagBroadcast"] = 8192;
        values[valuesById[16384] = "k_EClientPersonaStateFlagWatching"] = 16384;
        return values;
    })();
    
    /**
     * EMsgClanAccountFlags enum.
     * @exports EMsgClanAccountFlags
     * @enum {string}
     * @property {number} k_EMsgClanAccountFlagPublic=1 k_EMsgClanAccountFlagPublic value
     * @property {number} k_EMsgClanAccountFlagLarge=2 k_EMsgClanAccountFlagLarge value
     * @property {number} k_EMsgClanAccountFlagLocked=4 k_EMsgClanAccountFlagLocked value
     * @property {number} k_EMsgClanAccountFlagDisabled=8 k_EMsgClanAccountFlagDisabled value
     * @property {number} k_EMsgClanAccountFlagOGG=16 k_EMsgClanAccountFlagOGG value
     */
    $root.EMsgClanAccountFlags = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EMsgClanAccountFlagPublic"] = 1;
        values[valuesById[2] = "k_EMsgClanAccountFlagLarge"] = 2;
        values[valuesById[4] = "k_EMsgClanAccountFlagLocked"] = 4;
        values[valuesById[8] = "k_EMsgClanAccountFlagDisabled"] = 8;
        values[valuesById[16] = "k_EMsgClanAccountFlagOGG"] = 16;
        return values;
    })();
    
    /**
     * ESteamReviewScore enum.
     * @exports ESteamReviewScore
     * @enum {string}
     * @property {number} k_ESteamReviewScore_OverwhelminglyPositive=9 k_ESteamReviewScore_OverwhelminglyPositive value
     * @property {number} k_ESteamReviewScore_VeryPositive=8 k_ESteamReviewScore_VeryPositive value
     * @property {number} k_ESteamReviewScore_Positive=7 k_ESteamReviewScore_Positive value
     * @property {number} k_ESteamReviewScore_MostlyPositive=6 k_ESteamReviewScore_MostlyPositive value
     * @property {number} k_ESteamReviewScore_Mixed=5 k_ESteamReviewScore_Mixed value
     * @property {number} k_ESteamReviewScore_MostlyNegative=4 k_ESteamReviewScore_MostlyNegative value
     * @property {number} k_ESteamReviewScore_Negative=3 k_ESteamReviewScore_Negative value
     * @property {number} k_ESteamReviewScore_VeryNegative=2 k_ESteamReviewScore_VeryNegative value
     * @property {number} k_ESteamReviewScore_OverwhelminglyNegative=1 k_ESteamReviewScore_OverwhelminglyNegative value
     * @property {number} k_ESteamReviewScore_None=0 k_ESteamReviewScore_None value
     */
    $root.ESteamReviewScore = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[9] = "k_ESteamReviewScore_OverwhelminglyPositive"] = 9;
        values[valuesById[8] = "k_ESteamReviewScore_VeryPositive"] = 8;
        values[valuesById[7] = "k_ESteamReviewScore_Positive"] = 7;
        values[valuesById[6] = "k_ESteamReviewScore_MostlyPositive"] = 6;
        values[valuesById[5] = "k_ESteamReviewScore_Mixed"] = 5;
        values[valuesById[4] = "k_ESteamReviewScore_MostlyNegative"] = 4;
        values[valuesById[3] = "k_ESteamReviewScore_Negative"] = 3;
        values[valuesById[2] = "k_ESteamReviewScore_VeryNegative"] = 2;
        values[valuesById[1] = "k_ESteamReviewScore_OverwhelminglyNegative"] = 1;
        values[valuesById[0] = "k_ESteamReviewScore_None"] = 0;
        return values;
    })();

    return $root;
});
