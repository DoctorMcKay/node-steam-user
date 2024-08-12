/* eslint-disable */
// Auto-generated by generate-enums script on Mon Aug 12 2024 18:45:19 GMT-0400 (Eastern Daylight Time)

enum EStreamControlMessage {
	AuthenticationRequest = 1,
	AuthenticationResponse = 2,
	NegotiationInit = 3,
	NegotiationSetConfig = 4,
	NegotiationComplete = 5,
	ClientHandshake = 6,
	ServerHandshake = 7,
	StartNetworkTest = 8,
	KeepAlive = 9,
	LAST_SETUP_MESSAGE = 15,
	StartAudioData = 50,
	StopAudioData = 51,
	StartVideoData = 52,
	StopVideoData = 53,
	InputMouseMotion = 54,
	InputMouseWheel = 55,
	InputMouseDown = 56,
	InputMouseUp = 57,
	InputKeyDown = 58,
	InputKeyUp = 59,
	OBSOLETE = 60,
	OBSOLETE = 61,
	OBSOLETE = 62,
	ShowCursor = 63,
	HideCursor = 64,
	SetCursor = 65,
	GetCursorImage = 66,
	SetCursorImage = 67,
	DeleteCursor = 68,
	SetTargetFramerate = 69,
	InputLatencyTest = 70,
	OBSOLETE = 71,
	OverlayEnabled = 74,
	OBSOLETE = 75,
	OBSOLETE = 76,
	OBSOLETE = 77,
	OBSOLETE = 78,
	VideoDecoderInfo = 80,
	SetTitle = 81,
	SetIcon = 82,
	QuitRequest = 83,
	SetQoS = 87,
	OBSOLETE = 88,
	SetGammaRamp = 89,
	VideoEncoderInfo = 90,
	OBSOLETE = 93,
	SetTargetBitrate = 94,
	OBSOLETE = 95,
	OBSOLETE = 96,
	OBSOLETE = 97,
	SetActivity = 98,
	SetStreamingClientConfig = 99,
	SystemSuspend = 100,
	OBSOLETE = 101,
	VirtualHereRequest = 102,
	VirtualHereReady = 103,
	VirtualHereShareDevice = 104,
	SetSpectatorMode = 105,
	RemoteHID = 106,
	StartMicrophoneData = 107,
	StopMicrophoneData = 108,
	InputText = 109,
	TouchConfigActive = 110,
	GetTouchConfigData = 111,
	SetTouchConfigData = 112,
	SaveTouchConfigLayout = 113,
	TouchActionSetActive = 114,
	GetTouchIconData = 115,
	SetTouchIconData = 116,
	InputTouchFingerDown = 117,
	InputTouchFingerMotion = 118,
	InputTouchFingerUp = 119,
	SetCaptureSize = 120,
	SetFlashState = 121,
	Pause = 122,
	Resume = 123,
	EnableHighResCapture = 124,
	DisableHighResCapture = 125,
	ToggleMagnification = 126,
	SetCapslock = 127,
	SetKeymap = 128,
	StopRequest = 129,
	TouchActionSetLayerAdded = 130,
	TouchActionSetLayerRemoved = 131,
	RemotePlayTogetherGroupUpdate = 132,
	SetInputTemporarilyDisabled = 133,
	SetQualityOverride = 134,
	SetBitrateOverride = 135,
	ShowOnScreenKeyboard = 136,
	ControllerConfigMsg = 137,
	ControllerPersonalizationUpdate = 138,
	EnableNeptuneData = 139,
	DisableNeptuneData = 140,
	StartNeptuneData = 141,
	StopNeptuneData = 142,
}

export default EStreamControlMessage;
