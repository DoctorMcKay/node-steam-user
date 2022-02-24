const AppDirectory = require('appdirectory');
const {EventEmitter} = require('events');
const FileManager = require('file-manager');

const HandlerManager = require('./components/classes/HandlerManager.js');
const SteamChatRoomClient = require('./components/chatroom.js');

const DefaultOptions = require('./resources/default_options.js');

/**
 * @param {object} options
 * @class SteamUser
 * @extends EventEmitter
 * @property {SteamID|null} steamID
 * @property {SteamChatRoomClient} chat
 * @property {object} options
 * @property {string|null} publicIP
 * @property {number|null} cellID
 * @property {string|null} vanityURL
 * @property {{name: string, country: string, authedMachines: number, flags: number, facebookID?: string, facebookName?: string}|null} accountInfo
 * @property {{address: string, validated: boolean}|null} emailInfo
 * @property {{limited: boolean, communityBanned: boolean, locked: boolean, canInviteFriends: boolean}|null} limitations
 * @property {{numBans: number, appids: number[]}|null} vac
 * @property {{hasWallet: boolean, currency: ECurrencyCode, balance: number}|null} wallet
 * @property {Proto_CMsgClientLicenseList_License[]|null} licenses
 * @property {{gid: string, packageid: string, TimeCreated: Date, TimeExpiration: Date, TimeSent: Date, TimeAcked: Date, TimeRedeemed: Date|null, RecipientAddress: string, SenderAddress: string, SenderName: string}[]|null} gifts
 * @property {Object<string, UserPersona>} users
 * @property {Object<string, GroupPersona>} groups
 * @property {Object<string, EFriendRelationship>|null} myFriends
 * @property {Object<string, EClanRelationship>|null} myGroups
 * @property {Object<string, {name: string, members: SteamID[]}>|null} myFriendGroups
 * @property {Object<string, string>|null} myNicknames
 * @property {{changenumber: number, apps: object, packages: object}} picsCache
 */
class SteamUser extends EventEmitter {
	constructor(options) {
		super();

		this.steamID = null;

		this.chat = new SteamChatRoomClient(this);

		this._initProperties();
		this._connectTimeout = 1000;
		this._initialized = false;
		this._multiCount = 0;

		// App and package cache
		this._changelistUpdateTimer = null;
		this.picsCache = {
			changenumber: 0,
			apps: {},
			packages: {}
		};

		this._sentry = null;

		this.options = {};

		for (let i in (options || {})) {
			this._setOption(i, options[i]);
		}

		for (let i in DefaultOptions) {
			if (typeof this.options[i] === 'undefined') {
				this._setOption(i, DefaultOptions[i]);
			}
		}

		this._checkOptionTypes();

		if (!this.options.dataDirectory && this.options.dataDirectory !== null) {
			if (process.env.OPENSHIFT_DATA_DIR) {
				this.options.dataDirectory = process.env.OPENSHIFT_DATA_DIR + '/node-steamuser';
			} else {
				this.options.dataDirectory = (new AppDirectory({
					appName: 'node-steamuser',
					appAuthor: 'doctormckay'
				})).userData();
			}
		}

		if (this.options.dataDirectory) {
			this.storage = new FileManager(this.options.dataDirectory);
		}

		this._initialized = true;
	}

	_initProperties() {
		// Account info
		this.limitations = null;
		this.vac = null;
		this.wallet = null;
		this.emailInfo = null;
		this.licenses = null;
		this.gifts = null;

		// Friends and users info
		this.users = {};
		this.groups = {};
		this.chats = {};
		this.myFriends = {};
		this.myGroups = {};
		this.myFriendGroups = {};
		this.myNicknames = {};
		this.steamServers = {};
		this.contentServersReady = false;
		this.playingState = {blocked: false, appid: 0};
		this._playingBlocked = false;
		this._playingAppIds = [];

		this._gcTokens = []; // game connect tokens
		this._connectTime = 0;
		this._connectionCount = 0;
		this._authSeqMe = 0;
		this._authSeqThem = 0;
		this._hSteamPipe = Math.floor(Math.random() * 1000000) + 1;
		this._contentServerCache = {};
		this._contentServerTokens = {};
		this._lastNotificationCounts = {};
		this._sessionID = 0;
		this._currentJobID = 0;
		this._currentGCJobID = 0;
		this._jobs = {};
		this._jobsGC = {};
		this._jobCleanupTimers = [];
		this._richPresenceLocalization = {};
		this._incomingMessageQueue = [];
		this._useMessageQueue = false; // we only use the message queue while we're processing a multi message
	}

	get packageName() {
		return require('./package.json').name;
	}

	get packageVersion() {
		return require('./package.json').version;
	}

	/**
	 * Set a configuration option.
	 * @param {string} option
	 * @param {*} value
	 */
	setOption(option, value) {
		this._setOption(option, value);
		this._checkOptionTypes();
	}

	/**
	 * Set one or more configuration options
	 * @param {object} options
	 */
	setOptions(options) {
		for (let i in options) {
			this._setOption(i, options[i]);
		}

		this._checkOptionTypes();
	}

	/**
	 * Actually commit an option change. This is a separate method since user-facing methods need to be able to call
	 * _checkOptionTypes() but we also want to be able to change options internally without calling it.
	 * @param {string} option
	 * @param {*} value
	 * @private
	 */
	_setOption(option, value) {
		this.options[option] = value;

		// Handle anything that needs to happen when particular options update
		switch (option) {
			case 'dataDirectory':
				if (this._initialized) {
					if (!this.storage) {
						this.storage = new FileManager(value);
					} else {
						this.storage.directory = value;
					}
				}

				break;

			case 'enablePicsCache':
				if (this._initialized) {
					this._resetChangelistUpdateTimer();
					this._getLicenseInfo();
				}

				break;

			case 'changelistUpdateInterval':
				if (this._initialized) {
					this._resetChangelistUpdateTimer();
				}

				break;

			case 'webCompatibilityMode':
			case 'protocol':
				if (
					(option == 'webCompatibilityMode' && value && this.options.protocol == SteamUser.EConnectionProtocol.TCP) ||
					(option == 'protocol' && value == SteamUser.EConnectionProtocol.TCP && this.options.webCompatibilityMode)
				) {
					this._warn('webCompatibilityMode is enabled so connection protocol is being forced to WebSocket');
				}
				break;

			case 'httpProxy':
				if (typeof this.options.httpProxy == 'string' && !this.options.httpProxy.includes('://')) {
					this.options.httpProxy = 'http://' + this.options.httpProxy;
				}
				break;
		}
	}

	/**
	 * Make sure that the types of all options are valid.
	 * @private
	 */
	_checkOptionTypes() {
		// We'll infer types from DefaultOptions, but stuff that's null (for example) needs to be defined explicitly
		let types = {
			httpProxy: 'string',
			localAddress: 'string',
			localPort: 'number',
			machineIdFormat: 'array'
		};

		for (let opt in DefaultOptions) {
			if (types[opt]) {
				// already specified
				continue;
			}

			types[opt] = typeof DefaultOptions[opt];
		}

		for (let opt in this.options) {
			if (!types[opt]) {
				// no type specified for this option, so bail
				continue;
			}

			let requiredType = types[opt];
			let providedType = typeof this.options[opt];
			if (providedType == 'object' && Array.isArray(this.options[opt])) {
				providedType = 'array';
			} else if (requiredType == 'number' && providedType == 'string' && !isNaN(this.options[opt])) {
				providedType = 'number';
				this.options[opt] = parseFloat(this.options[opt]);
			}

			if (this.options[opt] !== null && requiredType != providedType) {
				this._warn(`Incorrect type '${providedType}' provided for option ${opt}, '${requiredType}' expected. Resetting to default value ${DefaultOptions[opt]}`);
				this._setOption(opt, DefaultOptions[opt]);
			}
		}
	}

	/**
	 * Issue a warning
	 * @param msg
	 * @private
	 */
	_warn(msg) {
		process.emitWarning(msg, 'Warning', 'steam-user');
	}
}

// I don't think it's possible to do this via class syntax, so add these onto the prototype
SteamUser.prototype._handlers = {};
SteamUser.prototype._handlerManager = new HandlerManager();

// Add generated enums. No matter what I try, I can't find a way to make WebStorm figure out that the enums from enums.js
// are part of SteamUser, so auto-completion doesn't happen. This is ugly, but at least this way WebStorm understands
// that enums are static members of SteamUser.
// ----- BEGIN AUTO ENUMS -----
// Auto-generated by generate-enums script on Thu Feb 24 2022 04:14:05 GMT-0500 (Eastern Standard Time)
SteamUser.EAccountFlags = require('./enums/EAccountFlags.js');
SteamUser.EAccountType = require('./enums/EAccountType.js');
SteamUser.EActivationCodeClass = require('./enums/EActivationCodeClass.js');
SteamUser.EAgreementType = require('./enums/EAgreementType.js');
SteamUser.EAppAssociationType = require('./enums/EAppAssociationType.js');
SteamUser.EAppControllerSupportLevel = require('./enums/EAppControllerSupportLevel.js');
SteamUser.EAppInfoSection = require('./enums/EAppInfoSection.js');
SteamUser.EAppType = require('./enums/EAppType.js');
SteamUser.EAppUsageEvent = require('./enums/EAppUsageEvent.js');
SteamUser.EAudioFormat = require('./enums/EAudioFormat.js');
SteamUser.EAuthSessionGuardType = require('./enums/EAuthSessionGuardType.js');
SteamUser.EAuthSessionResponse = require('./enums/EAuthSessionResponse.js');
SteamUser.EAuthTokenPlatformType = require('./enums/EAuthTokenPlatformType.js');
SteamUser.EBanContentCheckResult = require('./enums/EBanContentCheckResult.js');
SteamUser.EBillingType = require('./enums/EBillingType.js');
SteamUser.EBluetoothDeviceType = require('./enums/EBluetoothDeviceType.js');
SteamUser.EBroadcastChatPermission = require('./enums/EBroadcastChatPermission.js');
SteamUser.EBroadcastWatchLocation = require('./enums/EBroadcastWatchLocation.js');
SteamUser.EChatAction = require('./enums/EChatAction.js');
SteamUser.EChatActionResult = require('./enums/EChatActionResult.js');
SteamUser.EChatEntryType = require('./enums/EChatEntryType.js');
SteamUser.EChatFlags = require('./enums/EChatFlags.js');
SteamUser.EChatInfoType = require('./enums/EChatInfoType.js');
SteamUser.EChatMemberStateChange = require('./enums/EChatMemberStateChange.js');
SteamUser.EChatPermission = require('./enums/EChatPermission.js');
SteamUser.EChatRoomEnterResponse = require('./enums/EChatRoomEnterResponse.js');
SteamUser.EChatRoomGroupAction = require('./enums/EChatRoomGroupAction.js');
SteamUser.EChatRoomGroupPermissions = require('./enums/EChatRoomGroupPermissions.js');
SteamUser.EChatRoomGroupRank = require('./enums/EChatRoomGroupRank.js');
SteamUser.EChatRoomGroupType = require('./enums/EChatRoomGroupType.js');
SteamUser.EChatRoomJoinState = require('./enums/EChatRoomJoinState.js');
SteamUser.EChatRoomMemberStateChange = require('./enums/EChatRoomMemberStateChange.js');
SteamUser.EChatRoomMessageReactionType = require('./enums/EChatRoomMessageReactionType.js');
SteamUser.EChatRoomNotificationLevel = require('./enums/EChatRoomNotificationLevel.js');
SteamUser.EChatRoomServerMessage = require('./enums/EChatRoomServerMessage.js');
SteamUser.EChatRoomServerMsg = require('./enums/EChatRoomServerMsg.js');
SteamUser.EChatRoomType = require('./enums/EChatRoomType.js');
SteamUser.EClanPermission = require('./enums/EClanPermission.js');
SteamUser.EClanRank = require('./enums/EClanRank.js');
SteamUser.EClanRelationship = require('./enums/EClanRelationship.js');
SteamUser.EClientNotificationType = require('./enums/EClientNotificationType.js');
SteamUser.EClientPersonaStateFlag = require('./enums/EClientPersonaStateFlag.js');
SteamUser.EClientStat = require('./enums/EClientStat.js');
SteamUser.EClientStatAggregateMethod = require('./enums/EClientStatAggregateMethod.js');
SteamUser.ECloudPendingRemoteOperation = require('./enums/ECloudPendingRemoteOperation.js');
SteamUser.ECloudStoragePersistState = require('./enums/ECloudStoragePersistState.js');
SteamUser.EContentCheckProvider = require('./enums/EContentCheckProvider.js');
SteamUser.EContentDeltaChunkDataLocation = require('./enums/EContentDeltaChunkDataLocation.js');
SteamUser.EContentDownloadSourceType = require('./enums/EContentDownloadSourceType.js');
SteamUser.EControllerElementType = require('./enums/EControllerElementType.js');
SteamUser.ECurrencyCode = require('./enums/ECurrencyCode.js');
SteamUser.EDRMBlobDownloadErrorDetail = require('./enums/EDRMBlobDownloadErrorDetail.js');
SteamUser.EDRMBlobDownloadType = require('./enums/EDRMBlobDownloadType.js');
SteamUser.EDenyReason = require('./enums/EDenyReason.js');
SteamUser.EDepotFileFlag = require('./enums/EDepotFileFlag.js');
SteamUser.EDisplayStatus = require('./enums/EDisplayStatus.js');
SteamUser.EEconTradeResponse = require('./enums/EEconTradeResponse.js');
SteamUser.EExternalAccountType = require('./enums/EExternalAccountType.js');
SteamUser.EFrameAccumulatedStat = require('./enums/EFrameAccumulatedStat.js');
SteamUser.EFriendFlags = require('./enums/EFriendFlags.js');
SteamUser.EFriendRelationship = require('./enums/EFriendRelationship.js');
SteamUser.EGameSearchAction = require('./enums/EGameSearchAction.js');
SteamUser.EGameSearchResult = require('./enums/EGameSearchResult.js');
SteamUser.EHIDDeviceDisconnectMethod = require('./enums/EHIDDeviceDisconnectMethod.js');
SteamUser.EHIDDeviceLocation = require('./enums/EHIDDeviceLocation.js');
SteamUser.EInputMode = require('./enums/EInputMode.js');
SteamUser.EInternalAccountType = require('./enums/EInternalAccountType.js');
SteamUser.EIntroducerRouting = require('./enums/EIntroducerRouting.js');
SteamUser.EJSRegisterMethodType = require('./enums/EJSRegisterMethodType.js');
SteamUser.EKeyEscrowUsage = require('./enums/EKeyEscrowUsage.js');
SteamUser.ELauncherType = require('./enums/ELauncherType.js');
SteamUser.ELeaderboardDataRequest = require('./enums/ELeaderboardDataRequest.js');
SteamUser.ELeaderboardDisplayType = require('./enums/ELeaderboardDisplayType.js');
SteamUser.ELeaderboardSortMethod = require('./enums/ELeaderboardSortMethod.js');
SteamUser.ELeaderboardUploadScoreMethod = require('./enums/ELeaderboardUploadScoreMethod.js');
SteamUser.ELicenseFlags = require('./enums/ELicenseFlags.js');
SteamUser.ELicenseType = require('./enums/ELicenseType.js');
SteamUser.ELobbyComparison = require('./enums/ELobbyComparison.js');
SteamUser.ELobbyFilterType = require('./enums/ELobbyFilterType.js');
SteamUser.ELobbyStatus = require('./enums/ELobbyStatus.js');
SteamUser.ELobbyType = require('./enums/ELobbyType.js');
SteamUser.ELogFileType = require('./enums/ELogFileType.js');
SteamUser.EMMSLobbyStatus = require('./enums/EMMSLobbyStatus.js');
SteamUser.EMarketingMessageFlags = require('./enums/EMarketingMessageFlags.js');
SteamUser.EMessageReactionType = require('./enums/EMessageReactionType.js');
SteamUser.EMouseMode = require('./enums/EMouseMode.js');
SteamUser.EMsg = require('./enums/EMsg.js');
SteamUser.EMsgClanAccountFlags = require('./enums/EMsgClanAccountFlags.js');
SteamUser.ENewsUpdateType = require('./enums/ENewsUpdateType.js');
SteamUser.ENotificationSetting = require('./enums/ENotificationSetting.js');
SteamUser.EOSType = require('./enums/EOSType.js');
SteamUser.EPackageStatus = require('./enums/EPackageStatus.js');
SteamUser.EPaymentMethod = require('./enums/EPaymentMethod.js');
SteamUser.EPersonaState = require('./enums/EPersonaState.js');
SteamUser.EPersonaStateFlag = require('./enums/EPersonaStateFlag.js');
SteamUser.EPlatformType = require('./enums/EPlatformType.js');
SteamUser.EProfileCustomizationStyle = require('./enums/EProfileCustomizationStyle.js');
SteamUser.EProfileCustomizationType = require('./enums/EProfileCustomizationType.js');
SteamUser.EProtoAppType = require('./enums/EProtoAppType.js');
SteamUser.EProtoClanEventType = require('./enums/EProtoClanEventType.js');
SteamUser.EProtoExecutionSite = require('./enums/EProtoExecutionSite.js');
SteamUser.EPublishedFileForSaleStatus = require('./enums/EPublishedFileForSaleStatus.js');
SteamUser.EPublishedFileInappropriateProvider = require('./enums/EPublishedFileInappropriateProvider.js');
SteamUser.EPublishedFileInappropriateResult = require('./enums/EPublishedFileInappropriateResult.js');
SteamUser.EPublishedFileQueryType = require('./enums/EPublishedFileQueryType.js');
SteamUser.EPublishedFileRevision = require('./enums/EPublishedFileRevision.js');
SteamUser.EPublishedFileStorageSystem = require('./enums/EPublishedFileStorageSystem.js');
SteamUser.EPublishedFileVisibility = require('./enums/EPublishedFileVisibility.js');
SteamUser.EPurchaseResultDetail = require('./enums/EPurchaseResultDetail.js');
SteamUser.ERegionCode = require('./enums/ERegionCode.js');
SteamUser.ERemoteClientBroadcastMsg = require('./enums/ERemoteClientBroadcastMsg.js');
SteamUser.ERemoteClientService = require('./enums/ERemoteClientService.js');
SteamUser.ERemoteDeviceAuthorizationResult = require('./enums/ERemoteDeviceAuthorizationResult.js');
SteamUser.ERemoteDeviceStreamingResult = require('./enums/ERemoteDeviceStreamingResult.js');
SteamUser.ERemoteStoragePlatform = require('./enums/ERemoteStoragePlatform.js');
SteamUser.EResult = require('./enums/EResult.js');
SteamUser.EServerFlags = require('./enums/EServerFlags.js');
SteamUser.EServerType = require('./enums/EServerType.js');
SteamUser.ESteamDatagramMsgID = require('./enums/ESteamDatagramMsgID.js');
SteamUser.ESteamNetworkingSocketsCipher = require('./enums/ESteamNetworkingSocketsCipher.js');
SteamUser.ESteamNetworkingUDPMsgID = require('./enums/ESteamNetworkingUDPMsgID.js');
SteamUser.ESteamPipeOperationType = require('./enums/ESteamPipeOperationType.js');
SteamUser.ESteamPipeWorkType = require('./enums/ESteamPipeWorkType.js');
SteamUser.ESteamReviewScore = require('./enums/ESteamReviewScore.js');
SteamUser.EStorageBlockContentType = require('./enums/EStorageBlockContentType.js');
SteamUser.EStorageBlockFileSystemType = require('./enums/EStorageBlockFileSystemType.js');
SteamUser.EStreamActivity = require('./enums/EStreamActivity.js');
SteamUser.EStreamAudioCodec = require('./enums/EStreamAudioCodec.js');
SteamUser.EStreamBitrate = require('./enums/EStreamBitrate.js');
SteamUser.EStreamChannel = require('./enums/EStreamChannel.js');
SteamUser.EStreamControlMessage = require('./enums/EStreamControlMessage.js');
SteamUser.EStreamDataMessage = require('./enums/EStreamDataMessage.js');
SteamUser.EStreamDeviceFormFactor = require('./enums/EStreamDeviceFormFactor.js');
SteamUser.EStreamDiscoveryMessage = require('./enums/EStreamDiscoveryMessage.js');
SteamUser.EStreamFrameEvent = require('./enums/EStreamFrameEvent.js');
SteamUser.EStreamFrameResult = require('./enums/EStreamFrameResult.js');
SteamUser.EStreamFramerateLimiter = require('./enums/EStreamFramerateLimiter.js');
SteamUser.EStreamHostPlayAudioPreference = require('./enums/EStreamHostPlayAudioPreference.js');
SteamUser.EStreamInterface = require('./enums/EStreamInterface.js');
SteamUser.EStreamMouseButton = require('./enums/EStreamMouseButton.js');
SteamUser.EStreamMouseWheelDirection = require('./enums/EStreamMouseWheelDirection.js');
SteamUser.EStreamP2PScope = require('./enums/EStreamP2PScope.js');
SteamUser.EStreamQualityPreference = require('./enums/EStreamQualityPreference.js');
SteamUser.EStreamStatsMessage = require('./enums/EStreamStatsMessage.js');
SteamUser.EStreamTransport = require('./enums/EStreamTransport.js');
SteamUser.EStreamVersion = require('./enums/EStreamVersion.js');
SteamUser.EStreamVideoCodec = require('./enums/EStreamVideoCodec.js');
SteamUser.EStreamingDataType = require('./enums/EStreamingDataType.js');
SteamUser.ESystemIMType = require('./enums/ESystemIMType.js');
SteamUser.ESystemUpdateNotificationType = require('./enums/ESystemUpdateNotificationType.js');
SteamUser.ETextFilterSetting = require('./enums/ETextFilterSetting.js');
SteamUser.ETradeOfferConfirmationMethod = require('./enums/ETradeOfferConfirmationMethod.js');
SteamUser.ETradeOfferState = require('./enums/ETradeOfferState.js');
SteamUser.EUCMFilePrivacyState = require('./enums/EUCMFilePrivacyState.js');
SteamUser.EUdpPacketType = require('./enums/EUdpPacketType.js');
SteamUser.EUniverse = require('./enums/EUniverse.js');
SteamUser.EUserReviewScorePreference = require('./enums/EUserReviewScorePreference.js');
SteamUser.EValveIndexComponent = require('./enums/EValveIndexComponent.js');
SteamUser.EVideoFormat = require('./enums/EVideoFormat.js');
SteamUser.EVoiceCallState = require('./enums/EVoiceCallState.js');
SteamUser.EWorkshopEnumerationType = require('./enums/EWorkshopEnumerationType.js');
SteamUser.EWorkshopFileAction = require('./enums/EWorkshopFileAction.js');
SteamUser.EWorkshopFileType = require('./enums/EWorkshopFileType.js');
SteamUser.E_STAR_GlyphWriteResult = require('./enums/E_STAR_GlyphWriteResult.js');
// ----- END AUTO ENUMS -----

// Tack on our extra enums
SteamUser.CurrencyData = require('./resources/CurrencyData.js');
SteamUser.EClientUIMode = require('./resources/EClientUIMode.js');
SteamUser.EConnectionProtocol = require('./resources/EConnectionProtocol.js');
SteamUser.EMachineIDType = require('./resources/EMachineIDType.js');
SteamUser.EPurchaseResult = require('./resources/EPurchaseResult.js');
SteamUser.EPrivacyState = require('./resources/EPrivacyState.js');

// Export the SteamUser class before we require components that demand it
module.exports = SteamUser;

// And finally, require all the components that add their own methods to the class' prototype
require('./components/connection.js');
require('./components/messages.js');
require('./components/filestorage.js');
require('./components/webapi.js');
require('./components/logon.js');
require('./components/sentry.js');
require('./components/web.js');
require('./components/notifications.js');
require('./components/apps.js');
require('./components/appauth.js');
require('./components/account.js');
require('./components/gameservers.js');
require('./components/utility.js');
require('./components/trading.js');
require('./components/friends.js');
require('./components/chat.js');
require('./components/twofactor.js');
require('./components/pubfiles.js');
require('./components/cdn.js');
require('./components/econ.js');
require('./components/store.js');
require('./components/gamecoordinator.js');
require('./components/familysharing.js');

/**
 * Called when the request completes.
 * @callback SteamUser~genericEResultCallback
 * @param {Error|null} err - Error object on failure (with eresult property), null on success (represents EResult 1 - OK)
 */
