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
     * EStreamChannel enum.
     * @exports EStreamChannel
     * @enum {string}
     * @property {number} k_EStreamChannelInvalid=-1 k_EStreamChannelInvalid value
     * @property {number} k_EStreamChannelDiscovery=0 k_EStreamChannelDiscovery value
     * @property {number} k_EStreamChannelControl=1 k_EStreamChannelControl value
     * @property {number} k_EStreamChannelStats=2 k_EStreamChannelStats value
     * @property {number} k_EStreamChannelDataChannelStart=3 k_EStreamChannelDataChannelStart value
     */
    $root.EStreamChannel = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-1] = "k_EStreamChannelInvalid"] = -1;
        values[valuesById[0] = "k_EStreamChannelDiscovery"] = 0;
        values[valuesById[1] = "k_EStreamChannelControl"] = 1;
        values[valuesById[2] = "k_EStreamChannelStats"] = 2;
        values[valuesById[3] = "k_EStreamChannelDataChannelStart"] = 3;
        return values;
    })();
    
    /**
     * EStreamDiscoveryMessage enum.
     * @exports EStreamDiscoveryMessage
     * @enum {string}
     * @property {number} k_EStreamDiscoveryPingRequest=1 k_EStreamDiscoveryPingRequest value
     * @property {number} k_EStreamDiscoveryPingResponse=2 k_EStreamDiscoveryPingResponse value
     */
    $root.EStreamDiscoveryMessage = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EStreamDiscoveryPingRequest"] = 1;
        values[valuesById[2] = "k_EStreamDiscoveryPingResponse"] = 2;
        return values;
    })();
    
    /**
     * EStreamControlMessage enum.
     * @exports EStreamControlMessage
     * @enum {string}
     * @property {number} k_EStreamControlAuthenticationRequest=1 k_EStreamControlAuthenticationRequest value
     * @property {number} k_EStreamControlAuthenticationResponse=2 k_EStreamControlAuthenticationResponse value
     * @property {number} k_EStreamControlNegotiationInit=3 k_EStreamControlNegotiationInit value
     * @property {number} k_EStreamControlNegotiationSetConfig=4 k_EStreamControlNegotiationSetConfig value
     * @property {number} k_EStreamControlNegotiationComplete=5 k_EStreamControlNegotiationComplete value
     * @property {number} k_EStreamControlClientHandshake=6 k_EStreamControlClientHandshake value
     * @property {number} k_EStreamControlServerHandshake=7 k_EStreamControlServerHandshake value
     * @property {number} k_EStreamControlStartNetworkTest=8 k_EStreamControlStartNetworkTest value
     * @property {number} k_EStreamControlKeepAlive=9 k_EStreamControlKeepAlive value
     * @property {number} k_EStreamControl_LAST_SETUP_MESSAGE=15 k_EStreamControl_LAST_SETUP_MESSAGE value
     * @property {number} k_EStreamControlStartAudioData=50 k_EStreamControlStartAudioData value
     * @property {number} k_EStreamControlStopAudioData=51 k_EStreamControlStopAudioData value
     * @property {number} k_EStreamControlStartVideoData=52 k_EStreamControlStartVideoData value
     * @property {number} k_EStreamControlStopVideoData=53 k_EStreamControlStopVideoData value
     * @property {number} k_EStreamControlInputMouseMotion=54 k_EStreamControlInputMouseMotion value
     * @property {number} k_EStreamControlInputMouseWheel=55 k_EStreamControlInputMouseWheel value
     * @property {number} k_EStreamControlInputMouseDown=56 k_EStreamControlInputMouseDown value
     * @property {number} k_EStreamControlInputMouseUp=57 k_EStreamControlInputMouseUp value
     * @property {number} k_EStreamControlInputKeyDown=58 k_EStreamControlInputKeyDown value
     * @property {number} k_EStreamControlInputKeyUp=59 k_EStreamControlInputKeyUp value
     * @property {number} k_EStreamControlInputGamepadAttached_OBSOLETE=60 k_EStreamControlInputGamepadAttached_OBSOLETE value
     * @property {number} k_EStreamControlInputGamepadEvent_OBSOLETE=61 k_EStreamControlInputGamepadEvent_OBSOLETE value
     * @property {number} k_EStreamControlInputGamepadDetached_OBSOLETE=62 k_EStreamControlInputGamepadDetached_OBSOLETE value
     * @property {number} k_EStreamControlShowCursor=63 k_EStreamControlShowCursor value
     * @property {number} k_EStreamControlHideCursor=64 k_EStreamControlHideCursor value
     * @property {number} k_EStreamControlSetCursor=65 k_EStreamControlSetCursor value
     * @property {number} k_EStreamControlGetCursorImage=66 k_EStreamControlGetCursorImage value
     * @property {number} k_EStreamControlSetCursorImage=67 k_EStreamControlSetCursorImage value
     * @property {number} k_EStreamControlDeleteCursor=68 k_EStreamControlDeleteCursor value
     * @property {number} k_EStreamControlSetTargetFramerate=69 k_EStreamControlSetTargetFramerate value
     * @property {number} k_EStreamControlInputLatencyTest=70 k_EStreamControlInputLatencyTest value
     * @property {number} k_EStreamControlGamepadRumble_OBSOLETE=71 k_EStreamControlGamepadRumble_OBSOLETE value
     * @property {number} k_EStreamControlOverlayEnabled=74 k_EStreamControlOverlayEnabled value
     * @property {number} k_EStreamControlInputControllerAttached_OBSOLETE=75 k_EStreamControlInputControllerAttached_OBSOLETE value
     * @property {number} k_EStreamControlInputControllerState_OBSOLETE=76 k_EStreamControlInputControllerState_OBSOLETE value
     * @property {number} k_EStreamControlTriggerHapticPulse_OBSOLETE=77 k_EStreamControlTriggerHapticPulse_OBSOLETE value
     * @property {number} k_EStreamControlInputControllerDetached_OBSOLETE=78 k_EStreamControlInputControllerDetached_OBSOLETE value
     * @property {number} k_EStreamControlVideoDecoderInfo=80 k_EStreamControlVideoDecoderInfo value
     * @property {number} k_EStreamControlSetTitle=81 k_EStreamControlSetTitle value
     * @property {number} k_EStreamControlSetIcon=82 k_EStreamControlSetIcon value
     * @property {number} k_EStreamControlQuitRequest=83 k_EStreamControlQuitRequest value
     * @property {number} k_EStreamControlSetQoS=87 k_EStreamControlSetQoS value
     * @property {number} k_EStreamControlInputControllerWirelessPresence_OBSOLETE=88 k_EStreamControlInputControllerWirelessPresence_OBSOLETE value
     * @property {number} k_EStreamControlSetGammaRamp=89 k_EStreamControlSetGammaRamp value
     * @property {number} k_EStreamControlVideoEncoderInfo=90 k_EStreamControlVideoEncoderInfo value
     * @property {number} k_EStreamControlInputControllerStateHID_OBSOLETE=93 k_EStreamControlInputControllerStateHID_OBSOLETE value
     * @property {number} k_EStreamControlSetTargetBitrate=94 k_EStreamControlSetTargetBitrate value
     * @property {number} k_EStreamControlSetControllerPairingEnabled_OBSOLETE=95 k_EStreamControlSetControllerPairingEnabled_OBSOLETE value
     * @property {number} k_EStreamControlSetControllerPairingResult_OBSOLETE=96 k_EStreamControlSetControllerPairingResult_OBSOLETE value
     * @property {number} k_EStreamControlTriggerControllerDisconnect_OBSOLETE=97 k_EStreamControlTriggerControllerDisconnect_OBSOLETE value
     * @property {number} k_EStreamControlSetActivity=98 k_EStreamControlSetActivity value
     * @property {number} k_EStreamControlSetStreamingClientConfig=99 k_EStreamControlSetStreamingClientConfig value
     * @property {number} k_EStreamControlSystemSuspend=100 k_EStreamControlSystemSuspend value
     * @property {number} k_EStreamControlSetControllerSettings_OBSOLETE=101 k_EStreamControlSetControllerSettings_OBSOLETE value
     * @property {number} k_EStreamControlVirtualHereRequest=102 k_EStreamControlVirtualHereRequest value
     * @property {number} k_EStreamControlVirtualHereReady=103 k_EStreamControlVirtualHereReady value
     * @property {number} k_EStreamControlVirtualHereShareDevice=104 k_EStreamControlVirtualHereShareDevice value
     * @property {number} k_EStreamControlSetSpectatorMode=105 k_EStreamControlSetSpectatorMode value
     * @property {number} k_EStreamControlRemoteHID=106 k_EStreamControlRemoteHID value
     * @property {number} k_EStreamControlStartMicrophoneData=107 k_EStreamControlStartMicrophoneData value
     * @property {number} k_EStreamControlStopMicrophoneData=108 k_EStreamControlStopMicrophoneData value
     * @property {number} k_EStreamControlInputText=109 k_EStreamControlInputText value
     * @property {number} k_EStreamControlTouchConfigActive=110 k_EStreamControlTouchConfigActive value
     * @property {number} k_EStreamControlGetTouchConfigData=111 k_EStreamControlGetTouchConfigData value
     * @property {number} k_EStreamControlSetTouchConfigData=112 k_EStreamControlSetTouchConfigData value
     * @property {number} k_EStreamControlSaveTouchConfigLayout=113 k_EStreamControlSaveTouchConfigLayout value
     * @property {number} k_EStreamControlTouchActionSetActive=114 k_EStreamControlTouchActionSetActive value
     * @property {number} k_EStreamControlGetTouchIconData=115 k_EStreamControlGetTouchIconData value
     * @property {number} k_EStreamControlSetTouchIconData=116 k_EStreamControlSetTouchIconData value
     * @property {number} k_EStreamControlInputTouchFingerDown=117 k_EStreamControlInputTouchFingerDown value
     * @property {number} k_EStreamControlInputTouchFingerMotion=118 k_EStreamControlInputTouchFingerMotion value
     * @property {number} k_EStreamControlInputTouchFingerUp=119 k_EStreamControlInputTouchFingerUp value
     * @property {number} k_EStreamControlSetCaptureSize=120 k_EStreamControlSetCaptureSize value
     * @property {number} k_EStreamControlSetFlashState=121 k_EStreamControlSetFlashState value
     */
    $root.EStreamControlMessage = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EStreamControlAuthenticationRequest"] = 1;
        values[valuesById[2] = "k_EStreamControlAuthenticationResponse"] = 2;
        values[valuesById[3] = "k_EStreamControlNegotiationInit"] = 3;
        values[valuesById[4] = "k_EStreamControlNegotiationSetConfig"] = 4;
        values[valuesById[5] = "k_EStreamControlNegotiationComplete"] = 5;
        values[valuesById[6] = "k_EStreamControlClientHandshake"] = 6;
        values[valuesById[7] = "k_EStreamControlServerHandshake"] = 7;
        values[valuesById[8] = "k_EStreamControlStartNetworkTest"] = 8;
        values[valuesById[9] = "k_EStreamControlKeepAlive"] = 9;
        values[valuesById[15] = "k_EStreamControl_LAST_SETUP_MESSAGE"] = 15;
        values[valuesById[50] = "k_EStreamControlStartAudioData"] = 50;
        values[valuesById[51] = "k_EStreamControlStopAudioData"] = 51;
        values[valuesById[52] = "k_EStreamControlStartVideoData"] = 52;
        values[valuesById[53] = "k_EStreamControlStopVideoData"] = 53;
        values[valuesById[54] = "k_EStreamControlInputMouseMotion"] = 54;
        values[valuesById[55] = "k_EStreamControlInputMouseWheel"] = 55;
        values[valuesById[56] = "k_EStreamControlInputMouseDown"] = 56;
        values[valuesById[57] = "k_EStreamControlInputMouseUp"] = 57;
        values[valuesById[58] = "k_EStreamControlInputKeyDown"] = 58;
        values[valuesById[59] = "k_EStreamControlInputKeyUp"] = 59;
        values[valuesById[60] = "k_EStreamControlInputGamepadAttached_OBSOLETE"] = 60;
        values[valuesById[61] = "k_EStreamControlInputGamepadEvent_OBSOLETE"] = 61;
        values[valuesById[62] = "k_EStreamControlInputGamepadDetached_OBSOLETE"] = 62;
        values[valuesById[63] = "k_EStreamControlShowCursor"] = 63;
        values[valuesById[64] = "k_EStreamControlHideCursor"] = 64;
        values[valuesById[65] = "k_EStreamControlSetCursor"] = 65;
        values[valuesById[66] = "k_EStreamControlGetCursorImage"] = 66;
        values[valuesById[67] = "k_EStreamControlSetCursorImage"] = 67;
        values[valuesById[68] = "k_EStreamControlDeleteCursor"] = 68;
        values[valuesById[69] = "k_EStreamControlSetTargetFramerate"] = 69;
        values[valuesById[70] = "k_EStreamControlInputLatencyTest"] = 70;
        values[valuesById[71] = "k_EStreamControlGamepadRumble_OBSOLETE"] = 71;
        values[valuesById[74] = "k_EStreamControlOverlayEnabled"] = 74;
        values[valuesById[75] = "k_EStreamControlInputControllerAttached_OBSOLETE"] = 75;
        values[valuesById[76] = "k_EStreamControlInputControllerState_OBSOLETE"] = 76;
        values[valuesById[77] = "k_EStreamControlTriggerHapticPulse_OBSOLETE"] = 77;
        values[valuesById[78] = "k_EStreamControlInputControllerDetached_OBSOLETE"] = 78;
        values[valuesById[80] = "k_EStreamControlVideoDecoderInfo"] = 80;
        values[valuesById[81] = "k_EStreamControlSetTitle"] = 81;
        values[valuesById[82] = "k_EStreamControlSetIcon"] = 82;
        values[valuesById[83] = "k_EStreamControlQuitRequest"] = 83;
        values[valuesById[87] = "k_EStreamControlSetQoS"] = 87;
        values[valuesById[88] = "k_EStreamControlInputControllerWirelessPresence_OBSOLETE"] = 88;
        values[valuesById[89] = "k_EStreamControlSetGammaRamp"] = 89;
        values[valuesById[90] = "k_EStreamControlVideoEncoderInfo"] = 90;
        values[valuesById[93] = "k_EStreamControlInputControllerStateHID_OBSOLETE"] = 93;
        values[valuesById[94] = "k_EStreamControlSetTargetBitrate"] = 94;
        values[valuesById[95] = "k_EStreamControlSetControllerPairingEnabled_OBSOLETE"] = 95;
        values[valuesById[96] = "k_EStreamControlSetControllerPairingResult_OBSOLETE"] = 96;
        values[valuesById[97] = "k_EStreamControlTriggerControllerDisconnect_OBSOLETE"] = 97;
        values[valuesById[98] = "k_EStreamControlSetActivity"] = 98;
        values[valuesById[99] = "k_EStreamControlSetStreamingClientConfig"] = 99;
        values[valuesById[100] = "k_EStreamControlSystemSuspend"] = 100;
        values[valuesById[101] = "k_EStreamControlSetControllerSettings_OBSOLETE"] = 101;
        values[valuesById[102] = "k_EStreamControlVirtualHereRequest"] = 102;
        values[valuesById[103] = "k_EStreamControlVirtualHereReady"] = 103;
        values[valuesById[104] = "k_EStreamControlVirtualHereShareDevice"] = 104;
        values[valuesById[105] = "k_EStreamControlSetSpectatorMode"] = 105;
        values[valuesById[106] = "k_EStreamControlRemoteHID"] = 106;
        values[valuesById[107] = "k_EStreamControlStartMicrophoneData"] = 107;
        values[valuesById[108] = "k_EStreamControlStopMicrophoneData"] = 108;
        values[valuesById[109] = "k_EStreamControlInputText"] = 109;
        values[valuesById[110] = "k_EStreamControlTouchConfigActive"] = 110;
        values[valuesById[111] = "k_EStreamControlGetTouchConfigData"] = 111;
        values[valuesById[112] = "k_EStreamControlSetTouchConfigData"] = 112;
        values[valuesById[113] = "k_EStreamControlSaveTouchConfigLayout"] = 113;
        values[valuesById[114] = "k_EStreamControlTouchActionSetActive"] = 114;
        values[valuesById[115] = "k_EStreamControlGetTouchIconData"] = 115;
        values[valuesById[116] = "k_EStreamControlSetTouchIconData"] = 116;
        values[valuesById[117] = "k_EStreamControlInputTouchFingerDown"] = 117;
        values[valuesById[118] = "k_EStreamControlInputTouchFingerMotion"] = 118;
        values[valuesById[119] = "k_EStreamControlInputTouchFingerUp"] = 119;
        values[valuesById[120] = "k_EStreamControlSetCaptureSize"] = 120;
        values[valuesById[121] = "k_EStreamControlSetFlashState"] = 121;
        return values;
    })();
    
    /**
     * EStreamVersion enum.
     * @exports EStreamVersion
     * @enum {string}
     * @property {number} k_EStreamVersionNone=0 k_EStreamVersionNone value
     * @property {number} k_EStreamVersionCurrent=1 k_EStreamVersionCurrent value
     */
    $root.EStreamVersion = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamVersionNone"] = 0;
        values[valuesById[1] = "k_EStreamVersionCurrent"] = 1;
        return values;
    })();
    
    /**
     * EStreamAudioCodec enum.
     * @exports EStreamAudioCodec
     * @enum {string}
     * @property {number} k_EStreamAudioCodecNone=0 k_EStreamAudioCodecNone value
     * @property {number} k_EStreamAudioCodecRaw=1 k_EStreamAudioCodecRaw value
     * @property {number} k_EStreamAudioCodecVorbis=2 k_EStreamAudioCodecVorbis value
     * @property {number} k_EStreamAudioCodecOpus=3 k_EStreamAudioCodecOpus value
     * @property {number} k_EStreamAudioCodecMP3=4 k_EStreamAudioCodecMP3 value
     * @property {number} k_EStreamAudioCodecAAC=5 k_EStreamAudioCodecAAC value
     */
    $root.EStreamAudioCodec = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamAudioCodecNone"] = 0;
        values[valuesById[1] = "k_EStreamAudioCodecRaw"] = 1;
        values[valuesById[2] = "k_EStreamAudioCodecVorbis"] = 2;
        values[valuesById[3] = "k_EStreamAudioCodecOpus"] = 3;
        values[valuesById[4] = "k_EStreamAudioCodecMP3"] = 4;
        values[valuesById[5] = "k_EStreamAudioCodecAAC"] = 5;
        return values;
    })();
    
    /**
     * EStreamVideoCodec enum.
     * @exports EStreamVideoCodec
     * @enum {string}
     * @property {number} k_EStreamVideoCodecNone=0 k_EStreamVideoCodecNone value
     * @property {number} k_EStreamVideoCodecRaw=1 k_EStreamVideoCodecRaw value
     * @property {number} k_EStreamVideoCodecVP8=2 k_EStreamVideoCodecVP8 value
     * @property {number} k_EStreamVideoCodecVP9=3 k_EStreamVideoCodecVP9 value
     * @property {number} k_EStreamVideoCodecH264=4 k_EStreamVideoCodecH264 value
     * @property {number} k_EStreamVideoCodecHEVC=5 k_EStreamVideoCodecHEVC value
     * @property {number} k_EStreamVideoCodecORBX1=6 k_EStreamVideoCodecORBX1 value
     * @property {number} k_EStreamVideoCodecORBX2=7 k_EStreamVideoCodecORBX2 value
     */
    $root.EStreamVideoCodec = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamVideoCodecNone"] = 0;
        values[valuesById[1] = "k_EStreamVideoCodecRaw"] = 1;
        values[valuesById[2] = "k_EStreamVideoCodecVP8"] = 2;
        values[valuesById[3] = "k_EStreamVideoCodecVP9"] = 3;
        values[valuesById[4] = "k_EStreamVideoCodecH264"] = 4;
        values[valuesById[5] = "k_EStreamVideoCodecHEVC"] = 5;
        values[valuesById[6] = "k_EStreamVideoCodecORBX1"] = 6;
        values[valuesById[7] = "k_EStreamVideoCodecORBX2"] = 7;
        return values;
    })();
    
    /**
     * EStreamQualityPreference enum.
     * @exports EStreamQualityPreference
     * @enum {string}
     * @property {number} k_EStreamQualityFast=1 k_EStreamQualityFast value
     * @property {number} k_EStreamQualityBalanced=2 k_EStreamQualityBalanced value
     * @property {number} k_EStreamQualityBeautiful=3 k_EStreamQualityBeautiful value
     */
    $root.EStreamQualityPreference = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EStreamQualityFast"] = 1;
        values[valuesById[2] = "k_EStreamQualityBalanced"] = 2;
        values[valuesById[3] = "k_EStreamQualityBeautiful"] = 3;
        return values;
    })();
    
    /**
     * EStreamBitrate enum.
     * @exports EStreamBitrate
     * @enum {string}
     * @property {number} k_EStreamBitrateAutodetect=-1 k_EStreamBitrateAutodetect value
     * @property {number} k_EStreamBitrateUnlimited=0 k_EStreamBitrateUnlimited value
     */
    $root.EStreamBitrate = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-1] = "k_EStreamBitrateAutodetect"] = -1;
        values[valuesById[0] = "k_EStreamBitrateUnlimited"] = 0;
        return values;
    })();
    
    /**
     * EStreamHostPlayAudioPreference enum.
     * @exports EStreamHostPlayAudioPreference
     * @enum {string}
     * @property {number} k_EStreamHostPlayAudioDefault=0 k_EStreamHostPlayAudioDefault value
     * @property {number} k_EStreamHostPlayAudioAlways=1 k_EStreamHostPlayAudioAlways value
     */
    $root.EStreamHostPlayAudioPreference = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamHostPlayAudioDefault"] = 0;
        values[valuesById[1] = "k_EStreamHostPlayAudioAlways"] = 1;
        return values;
    })();
    
    /**
     * EStreamingDataType enum.
     * @exports EStreamingDataType
     * @enum {string}
     * @property {number} k_EStreamingAudioData=0 k_EStreamingAudioData value
     * @property {number} k_EStreamingVideoData=1 k_EStreamingVideoData value
     * @property {number} k_EStreamingMicrophoneData=2 k_EStreamingMicrophoneData value
     */
    $root.EStreamingDataType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamingAudioData"] = 0;
        values[valuesById[1] = "k_EStreamingVideoData"] = 1;
        values[valuesById[2] = "k_EStreamingMicrophoneData"] = 2;
        return values;
    })();
    
    /**
     * EStreamMouseButton enum.
     * @exports EStreamMouseButton
     * @enum {string}
     * @property {number} k_EStreamMouseButtonLeft=1 k_EStreamMouseButtonLeft value
     * @property {number} k_EStreamMouseButtonRight=2 k_EStreamMouseButtonRight value
     * @property {number} k_EStreamMouseButtonMiddle=16 k_EStreamMouseButtonMiddle value
     * @property {number} k_EStreamMouseButtonX1=32 k_EStreamMouseButtonX1 value
     * @property {number} k_EStreamMouseButtonX2=64 k_EStreamMouseButtonX2 value
     * @property {number} k_EStreamMouseButtonUnknown=4096 k_EStreamMouseButtonUnknown value
     */
    $root.EStreamMouseButton = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EStreamMouseButtonLeft"] = 1;
        values[valuesById[2] = "k_EStreamMouseButtonRight"] = 2;
        values[valuesById[16] = "k_EStreamMouseButtonMiddle"] = 16;
        values[valuesById[32] = "k_EStreamMouseButtonX1"] = 32;
        values[valuesById[64] = "k_EStreamMouseButtonX2"] = 64;
        values[valuesById[4096] = "k_EStreamMouseButtonUnknown"] = 4096;
        return values;
    })();
    
    /**
     * EStreamMouseWheelDirection enum.
     * @exports EStreamMouseWheelDirection
     * @enum {string}
     * @property {number} k_EStreamMouseWheelUp=120 k_EStreamMouseWheelUp value
     * @property {number} k_EStreamMouseWheelDown=-120 k_EStreamMouseWheelDown value
     * @property {number} k_EStreamMouseWheelLeft=3 k_EStreamMouseWheelLeft value
     * @property {number} k_EStreamMouseWheelRight=4 k_EStreamMouseWheelRight value
     */
    $root.EStreamMouseWheelDirection = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[120] = "k_EStreamMouseWheelUp"] = 120;
        values[valuesById[-120] = "k_EStreamMouseWheelDown"] = -120;
        values[valuesById[3] = "k_EStreamMouseWheelLeft"] = 3;
        values[valuesById[4] = "k_EStreamMouseWheelRight"] = 4;
        return values;
    })();
    
    /**
     * EStreamGamepadInputType enum.
     * @exports EStreamGamepadInputType
     * @enum {string}
     * @property {number} k_EStreamGamepadInputInvalid=0 k_EStreamGamepadInputInvalid value
     * @property {number} k_EStreamGamepadInputDPadUp=1 k_EStreamGamepadInputDPadUp value
     * @property {number} k_EStreamGamepadInputDPadDown=2 k_EStreamGamepadInputDPadDown value
     * @property {number} k_EStreamGamepadInputDPadLeft=4 k_EStreamGamepadInputDPadLeft value
     * @property {number} k_EStreamGamepadInputDPadRight=8 k_EStreamGamepadInputDPadRight value
     * @property {number} k_EStreamGamepadInputStart=16 k_EStreamGamepadInputStart value
     * @property {number} k_EStreamGamepadInputBack=32 k_EStreamGamepadInputBack value
     * @property {number} k_EStreamGamepadInputLeftThumb=64 k_EStreamGamepadInputLeftThumb value
     * @property {number} k_EStreamGamepadInputRightThumb=128 k_EStreamGamepadInputRightThumb value
     * @property {number} k_EStreamGamepadInputLeftShoulder=256 k_EStreamGamepadInputLeftShoulder value
     * @property {number} k_EStreamGamepadInputRightShoulder=512 k_EStreamGamepadInputRightShoulder value
     * @property {number} k_EStreamGamepadInputGuide=1024 k_EStreamGamepadInputGuide value
     * @property {number} k_EStreamGamepadInputA=4096 k_EStreamGamepadInputA value
     * @property {number} k_EStreamGamepadInputB=8192 k_EStreamGamepadInputB value
     * @property {number} k_EStreamGamepadInputX=16384 k_EStreamGamepadInputX value
     * @property {number} k_EStreamGamepadInputY=32768 k_EStreamGamepadInputY value
     * @property {number} k_EStreamGamepadInputLeftThumbX=65536 k_EStreamGamepadInputLeftThumbX value
     * @property {number} k_EStreamGamepadInputLeftThumbY=131072 k_EStreamGamepadInputLeftThumbY value
     * @property {number} k_EStreamGamepadInputRightThumbX=262144 k_EStreamGamepadInputRightThumbX value
     * @property {number} k_EStreamGamepadInputRightThumbY=524288 k_EStreamGamepadInputRightThumbY value
     * @property {number} k_EStreamGamepadInputLeftTrigger=1048576 k_EStreamGamepadInputLeftTrigger value
     * @property {number} k_EStreamGamepadInputRightTrigger=2097152 k_EStreamGamepadInputRightTrigger value
     */
    $root.EStreamGamepadInputType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamGamepadInputInvalid"] = 0;
        values[valuesById[1] = "k_EStreamGamepadInputDPadUp"] = 1;
        values[valuesById[2] = "k_EStreamGamepadInputDPadDown"] = 2;
        values[valuesById[4] = "k_EStreamGamepadInputDPadLeft"] = 4;
        values[valuesById[8] = "k_EStreamGamepadInputDPadRight"] = 8;
        values[valuesById[16] = "k_EStreamGamepadInputStart"] = 16;
        values[valuesById[32] = "k_EStreamGamepadInputBack"] = 32;
        values[valuesById[64] = "k_EStreamGamepadInputLeftThumb"] = 64;
        values[valuesById[128] = "k_EStreamGamepadInputRightThumb"] = 128;
        values[valuesById[256] = "k_EStreamGamepadInputLeftShoulder"] = 256;
        values[valuesById[512] = "k_EStreamGamepadInputRightShoulder"] = 512;
        values[valuesById[1024] = "k_EStreamGamepadInputGuide"] = 1024;
        values[valuesById[4096] = "k_EStreamGamepadInputA"] = 4096;
        values[valuesById[8192] = "k_EStreamGamepadInputB"] = 8192;
        values[valuesById[16384] = "k_EStreamGamepadInputX"] = 16384;
        values[valuesById[32768] = "k_EStreamGamepadInputY"] = 32768;
        values[valuesById[65536] = "k_EStreamGamepadInputLeftThumbX"] = 65536;
        values[valuesById[131072] = "k_EStreamGamepadInputLeftThumbY"] = 131072;
        values[valuesById[262144] = "k_EStreamGamepadInputRightThumbX"] = 262144;
        values[valuesById[524288] = "k_EStreamGamepadInputRightThumbY"] = 524288;
        values[valuesById[1048576] = "k_EStreamGamepadInputLeftTrigger"] = 1048576;
        values[valuesById[2097152] = "k_EStreamGamepadInputRightTrigger"] = 2097152;
        return values;
    })();
    
    /**
     * EStreamFramerateLimiter enum.
     * @exports EStreamFramerateLimiter
     * @enum {string}
     * @property {number} k_EStreamFramerateSlowCapture=1 k_EStreamFramerateSlowCapture value
     * @property {number} k_EStreamFramerateSlowConvert=2 k_EStreamFramerateSlowConvert value
     * @property {number} k_EStreamFramerateSlowEncode=4 k_EStreamFramerateSlowEncode value
     * @property {number} k_EStreamFramerateSlowNetwork=8 k_EStreamFramerateSlowNetwork value
     * @property {number} k_EStreamFramerateSlowDecode=16 k_EStreamFramerateSlowDecode value
     * @property {number} k_EStreamFramerateSlowGame=32 k_EStreamFramerateSlowGame value
     * @property {number} k_EStreamFramerateSlowDisplay=64 k_EStreamFramerateSlowDisplay value
     */
    $root.EStreamFramerateLimiter = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EStreamFramerateSlowCapture"] = 1;
        values[valuesById[2] = "k_EStreamFramerateSlowConvert"] = 2;
        values[valuesById[4] = "k_EStreamFramerateSlowEncode"] = 4;
        values[valuesById[8] = "k_EStreamFramerateSlowNetwork"] = 8;
        values[valuesById[16] = "k_EStreamFramerateSlowDecode"] = 16;
        values[valuesById[32] = "k_EStreamFramerateSlowGame"] = 32;
        values[valuesById[64] = "k_EStreamFramerateSlowDisplay"] = 64;
        return values;
    })();
    
    /**
     * EStreamActivity enum.
     * @exports EStreamActivity
     * @enum {string}
     * @property {number} k_EStreamActivityIdle=1 k_EStreamActivityIdle value
     * @property {number} k_EStreamActivityGame=2 k_EStreamActivityGame value
     * @property {number} k_EStreamActivityDesktop=3 k_EStreamActivityDesktop value
     */
    $root.EStreamActivity = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EStreamActivityIdle"] = 1;
        values[valuesById[2] = "k_EStreamActivityGame"] = 2;
        values[valuesById[3] = "k_EStreamActivityDesktop"] = 3;
        return values;
    })();
    
    /**
     * EStreamDataMessage enum.
     * @exports EStreamDataMessage
     * @enum {string}
     * @property {number} k_EStreamDataPacket=1 k_EStreamDataPacket value
     * @property {number} k_EStreamDataLost=2 k_EStreamDataLost value
     */
    $root.EStreamDataMessage = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EStreamDataPacket"] = 1;
        values[valuesById[2] = "k_EStreamDataLost"] = 2;
        return values;
    })();
    
    /**
     * EAudioFormat enum.
     * @exports EAudioFormat
     * @enum {string}
     * @property {number} k_EAudioFormatNone=0 k_EAudioFormatNone value
     * @property {number} k_EAudioFormat16BitLittleEndian=1 k_EAudioFormat16BitLittleEndian value
     * @property {number} k_EAudioFormatFloat=2 k_EAudioFormatFloat value
     */
    $root.EAudioFormat = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EAudioFormatNone"] = 0;
        values[valuesById[1] = "k_EAudioFormat16BitLittleEndian"] = 1;
        values[valuesById[2] = "k_EAudioFormatFloat"] = 2;
        return values;
    })();
    
    /**
     * EVideoFormat enum.
     * @exports EVideoFormat
     * @enum {string}
     * @property {number} k_EVideoFormatNone=0 k_EVideoFormatNone value
     * @property {number} k_EVideoFormatYV12=1 k_EVideoFormatYV12 value
     * @property {number} k_EVideoFormatAccel=2 k_EVideoFormatAccel value
     */
    $root.EVideoFormat = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EVideoFormatNone"] = 0;
        values[valuesById[1] = "k_EVideoFormatYV12"] = 1;
        values[valuesById[2] = "k_EVideoFormatAccel"] = 2;
        return values;
    })();
    
    /**
     * EStreamStatsMessage enum.
     * @exports EStreamStatsMessage
     * @enum {string}
     * @property {number} k_EStreamStatsFrameEvents=1 k_EStreamStatsFrameEvents value
     * @property {number} k_EStreamStatsDebugDump=2 k_EStreamStatsDebugDump value
     * @property {number} k_EStreamStatsLogMessage=3 k_EStreamStatsLogMessage value
     * @property {number} k_EStreamStatsLogUploadBegin=4 k_EStreamStatsLogUploadBegin value
     * @property {number} k_EStreamStatsLogUploadData=5 k_EStreamStatsLogUploadData value
     * @property {number} k_EStreamStatsLogUploadComplete=6 k_EStreamStatsLogUploadComplete value
     */
    $root.EStreamStatsMessage = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EStreamStatsFrameEvents"] = 1;
        values[valuesById[2] = "k_EStreamStatsDebugDump"] = 2;
        values[valuesById[3] = "k_EStreamStatsLogMessage"] = 3;
        values[valuesById[4] = "k_EStreamStatsLogUploadBegin"] = 4;
        values[valuesById[5] = "k_EStreamStatsLogUploadData"] = 5;
        values[valuesById[6] = "k_EStreamStatsLogUploadComplete"] = 6;
        return values;
    })();
    
    /**
     * EStreamFrameEvent enum.
     * @exports EStreamFrameEvent
     * @enum {string}
     * @property {number} k_EStreamInputEventStart=0 k_EStreamInputEventStart value
     * @property {number} k_EStreamInputEventSend=1 k_EStreamInputEventSend value
     * @property {number} k_EStreamInputEventRecv=2 k_EStreamInputEventRecv value
     * @property {number} k_EStreamInputEventQueued=3 k_EStreamInputEventQueued value
     * @property {number} k_EStreamInputEventHandled=4 k_EStreamInputEventHandled value
     * @property {number} k_EStreamFrameEventStart=5 k_EStreamFrameEventStart value
     * @property {number} k_EStreamFrameEventCaptureBegin=6 k_EStreamFrameEventCaptureBegin value
     * @property {number} k_EStreamFrameEventCaptureEnd=7 k_EStreamFrameEventCaptureEnd value
     * @property {number} k_EStreamFrameEventConvertBegin=8 k_EStreamFrameEventConvertBegin value
     * @property {number} k_EStreamFrameEventConvertEnd=9 k_EStreamFrameEventConvertEnd value
     * @property {number} k_EStreamFrameEventEncodeBegin=10 k_EStreamFrameEventEncodeBegin value
     * @property {number} k_EStreamFrameEventEncodeEnd=11 k_EStreamFrameEventEncodeEnd value
     * @property {number} k_EStreamFrameEventSend=12 k_EStreamFrameEventSend value
     * @property {number} k_EStreamFrameEventRecv=13 k_EStreamFrameEventRecv value
     * @property {number} k_EStreamFrameEventDecodeBegin=14 k_EStreamFrameEventDecodeBegin value
     * @property {number} k_EStreamFrameEventDecodeEnd=15 k_EStreamFrameEventDecodeEnd value
     * @property {number} k_EStreamFrameEventUploadBegin=16 k_EStreamFrameEventUploadBegin value
     * @property {number} k_EStreamFrameEventUploadEnd=17 k_EStreamFrameEventUploadEnd value
     * @property {number} k_EStreamFrameEventComplete=18 k_EStreamFrameEventComplete value
     */
    $root.EStreamFrameEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamInputEventStart"] = 0;
        values[valuesById[1] = "k_EStreamInputEventSend"] = 1;
        values[valuesById[2] = "k_EStreamInputEventRecv"] = 2;
        values[valuesById[3] = "k_EStreamInputEventQueued"] = 3;
        values[valuesById[4] = "k_EStreamInputEventHandled"] = 4;
        values[valuesById[5] = "k_EStreamFrameEventStart"] = 5;
        values[valuesById[6] = "k_EStreamFrameEventCaptureBegin"] = 6;
        values[valuesById[7] = "k_EStreamFrameEventCaptureEnd"] = 7;
        values[valuesById[8] = "k_EStreamFrameEventConvertBegin"] = 8;
        values[valuesById[9] = "k_EStreamFrameEventConvertEnd"] = 9;
        values[valuesById[10] = "k_EStreamFrameEventEncodeBegin"] = 10;
        values[valuesById[11] = "k_EStreamFrameEventEncodeEnd"] = 11;
        values[valuesById[12] = "k_EStreamFrameEventSend"] = 12;
        values[valuesById[13] = "k_EStreamFrameEventRecv"] = 13;
        values[valuesById[14] = "k_EStreamFrameEventDecodeBegin"] = 14;
        values[valuesById[15] = "k_EStreamFrameEventDecodeEnd"] = 15;
        values[valuesById[16] = "k_EStreamFrameEventUploadBegin"] = 16;
        values[valuesById[17] = "k_EStreamFrameEventUploadEnd"] = 17;
        values[valuesById[18] = "k_EStreamFrameEventComplete"] = 18;
        return values;
    })();
    
    /**
     * EStreamFrameResult enum.
     * @exports EStreamFrameResult
     * @enum {string}
     * @property {number} k_EStreamFrameResultPending=0 k_EStreamFrameResultPending value
     * @property {number} k_EStreamFrameResultDisplayed=1 k_EStreamFrameResultDisplayed value
     * @property {number} k_EStreamFrameResultDroppedNetworkSlow=2 k_EStreamFrameResultDroppedNetworkSlow value
     * @property {number} k_EStreamFrameResultDroppedNetworkLost=3 k_EStreamFrameResultDroppedNetworkLost value
     * @property {number} k_EStreamFrameResultDroppedDecodeSlow=4 k_EStreamFrameResultDroppedDecodeSlow value
     * @property {number} k_EStreamFrameResultDroppedDecodeCorrupt=5 k_EStreamFrameResultDroppedDecodeCorrupt value
     * @property {number} k_EStreamFrameResultDroppedLate=6 k_EStreamFrameResultDroppedLate value
     * @property {number} k_EStreamFrameResultDroppedReset=7 k_EStreamFrameResultDroppedReset value
     */
    $root.EStreamFrameResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamFrameResultPending"] = 0;
        values[valuesById[1] = "k_EStreamFrameResultDisplayed"] = 1;
        values[valuesById[2] = "k_EStreamFrameResultDroppedNetworkSlow"] = 2;
        values[valuesById[3] = "k_EStreamFrameResultDroppedNetworkLost"] = 3;
        values[valuesById[4] = "k_EStreamFrameResultDroppedDecodeSlow"] = 4;
        values[valuesById[5] = "k_EStreamFrameResultDroppedDecodeCorrupt"] = 5;
        values[valuesById[6] = "k_EStreamFrameResultDroppedLate"] = 6;
        values[valuesById[7] = "k_EStreamFrameResultDroppedReset"] = 7;
        return values;
    })();
    
    /**
     * EFrameAccumulatedStat enum.
     * @exports EFrameAccumulatedStat
     * @enum {string}
     * @property {number} k_EFrameStatFPS=0 k_EFrameStatFPS value
     * @property {number} k_EFrameStatCaptureDurationMS=1 k_EFrameStatCaptureDurationMS value
     * @property {number} k_EFrameStatConvertDurationMS=2 k_EFrameStatConvertDurationMS value
     * @property {number} k_EFrameStatEncodeDurationMS=3 k_EFrameStatEncodeDurationMS value
     * @property {number} k_EFrameStatSteamDurationMS=4 k_EFrameStatSteamDurationMS value
     * @property {number} k_EFrameStatServerDurationMS=5 k_EFrameStatServerDurationMS value
     * @property {number} k_EFrameStatNetworkDurationMS=6 k_EFrameStatNetworkDurationMS value
     * @property {number} k_EFrameStatDecodeDurationMS=7 k_EFrameStatDecodeDurationMS value
     * @property {number} k_EFrameStatDisplayDurationMS=8 k_EFrameStatDisplayDurationMS value
     * @property {number} k_EFrameStatClientDurationMS=9 k_EFrameStatClientDurationMS value
     * @property {number} k_EFrameStatFrameDurationMS=10 k_EFrameStatFrameDurationMS value
     * @property {number} k_EFrameStatInputLatencyMS=11 k_EFrameStatInputLatencyMS value
     * @property {number} k_EFrameStatGameLatencyMS=12 k_EFrameStatGameLatencyMS value
     * @property {number} k_EFrameStatRoundTripLatencyMS=13 k_EFrameStatRoundTripLatencyMS value
     * @property {number} k_EFrameStatPingTimeMS=14 k_EFrameStatPingTimeMS value
     * @property {number} k_EFrameStatServerBitrateKbitPerSec=15 k_EFrameStatServerBitrateKbitPerSec value
     * @property {number} k_EFrameStatClientBitrateKbitPerSec=16 k_EFrameStatClientBitrateKbitPerSec value
     * @property {number} k_EFrameStatLinkBandwidthKbitPerSec=17 k_EFrameStatLinkBandwidthKbitPerSec value
     * @property {number} k_EFrameStatPacketLossPercentage=18 k_EFrameStatPacketLossPercentage value
     */
    $root.EFrameAccumulatedStat = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EFrameStatFPS"] = 0;
        values[valuesById[1] = "k_EFrameStatCaptureDurationMS"] = 1;
        values[valuesById[2] = "k_EFrameStatConvertDurationMS"] = 2;
        values[valuesById[3] = "k_EFrameStatEncodeDurationMS"] = 3;
        values[valuesById[4] = "k_EFrameStatSteamDurationMS"] = 4;
        values[valuesById[5] = "k_EFrameStatServerDurationMS"] = 5;
        values[valuesById[6] = "k_EFrameStatNetworkDurationMS"] = 6;
        values[valuesById[7] = "k_EFrameStatDecodeDurationMS"] = 7;
        values[valuesById[8] = "k_EFrameStatDisplayDurationMS"] = 8;
        values[valuesById[9] = "k_EFrameStatClientDurationMS"] = 9;
        values[valuesById[10] = "k_EFrameStatFrameDurationMS"] = 10;
        values[valuesById[11] = "k_EFrameStatInputLatencyMS"] = 11;
        values[valuesById[12] = "k_EFrameStatGameLatencyMS"] = 12;
        values[valuesById[13] = "k_EFrameStatRoundTripLatencyMS"] = 13;
        values[valuesById[14] = "k_EFrameStatPingTimeMS"] = 14;
        values[valuesById[15] = "k_EFrameStatServerBitrateKbitPerSec"] = 15;
        values[valuesById[16] = "k_EFrameStatClientBitrateKbitPerSec"] = 16;
        values[valuesById[17] = "k_EFrameStatLinkBandwidthKbitPerSec"] = 17;
        values[valuesById[18] = "k_EFrameStatPacketLossPercentage"] = 18;
        return values;
    })();
    
    /**
     * ELogFileType enum.
     * @exports ELogFileType
     * @enum {string}
     * @property {number} k_ELogFileSystemBoot=0 k_ELogFileSystemBoot value
     * @property {number} k_ELogFileSystemReset=1 k_ELogFileSystemReset value
     * @property {number} k_ELogFileSystemDebug=2 k_ELogFileSystemDebug value
     */
    $root.ELogFileType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ELogFileSystemBoot"] = 0;
        values[valuesById[1] = "k_ELogFileSystemReset"] = 1;
        values[valuesById[2] = "k_ELogFileSystemDebug"] = 2;
        return values;
    })();
    
    $root.CDiscoveryPingRequest = (function() {
    
        /**
         * Properties of a CDiscoveryPingRequest.
         * @exports ICDiscoveryPingRequest
         * @interface ICDiscoveryPingRequest
         * @property {number|null} [sequence] CDiscoveryPingRequest sequence
         * @property {number|null} [packet_size_requested] CDiscoveryPingRequest packet_size_requested
         */
    
        /**
         * Constructs a new CDiscoveryPingRequest.
         * @exports CDiscoveryPingRequest
         * @classdesc Represents a CDiscoveryPingRequest.
         * @implements ICDiscoveryPingRequest
         * @constructor
         * @param {ICDiscoveryPingRequest=} [properties] Properties to set
         */
        function CDiscoveryPingRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDiscoveryPingRequest sequence.
         * @member {number} sequence
         * @memberof CDiscoveryPingRequest
         * @instance
         */
        CDiscoveryPingRequest.prototype.sequence = 0;
    
        /**
         * CDiscoveryPingRequest packet_size_requested.
         * @member {number} packet_size_requested
         * @memberof CDiscoveryPingRequest
         * @instance
         */
        CDiscoveryPingRequest.prototype.packet_size_requested = 0;
    
        /**
         * Creates a new CDiscoveryPingRequest instance using the specified properties.
         * @function create
         * @memberof CDiscoveryPingRequest
         * @static
         * @param {ICDiscoveryPingRequest=} [properties] Properties to set
         * @returns {CDiscoveryPingRequest} CDiscoveryPingRequest instance
         */
        CDiscoveryPingRequest.create = function create(properties) {
            return new CDiscoveryPingRequest(properties);
        };
    
        /**
         * Encodes the specified CDiscoveryPingRequest message. Does not implicitly {@link CDiscoveryPingRequest.verify|verify} messages.
         * @function encode
         * @memberof CDiscoveryPingRequest
         * @static
         * @param {ICDiscoveryPingRequest} message CDiscoveryPingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDiscoveryPingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sequence);
            if (message.packet_size_requested != null && message.hasOwnProperty("packet_size_requested"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.packet_size_requested);
            return writer;
        };
    
        /**
         * Encodes the specified CDiscoveryPingRequest message, length delimited. Does not implicitly {@link CDiscoveryPingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDiscoveryPingRequest
         * @static
         * @param {ICDiscoveryPingRequest} message CDiscoveryPingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDiscoveryPingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDiscoveryPingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CDiscoveryPingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDiscoveryPingRequest} CDiscoveryPingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDiscoveryPingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDiscoveryPingRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint32();
                    break;
                case 2:
                    message.packet_size_requested = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CDiscoveryPingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDiscoveryPingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDiscoveryPingRequest} CDiscoveryPingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDiscoveryPingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDiscoveryPingRequest message.
         * @function verify
         * @memberof CDiscoveryPingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDiscoveryPingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (!$util.isInteger(message.sequence))
                    return "sequence: integer expected";
            if (message.packet_size_requested != null && message.hasOwnProperty("packet_size_requested"))
                if (!$util.isInteger(message.packet_size_requested))
                    return "packet_size_requested: integer expected";
            return null;
        };
    
        /**
         * Creates a CDiscoveryPingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDiscoveryPingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDiscoveryPingRequest} CDiscoveryPingRequest
         */
        CDiscoveryPingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CDiscoveryPingRequest)
                return object;
            var message = new $root.CDiscoveryPingRequest();
            if (object.sequence != null)
                message.sequence = object.sequence >>> 0;
            if (object.packet_size_requested != null)
                message.packet_size_requested = object.packet_size_requested >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CDiscoveryPingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDiscoveryPingRequest
         * @static
         * @param {CDiscoveryPingRequest} message CDiscoveryPingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDiscoveryPingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sequence = 0;
                object.packet_size_requested = 0;
            }
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                object.sequence = message.sequence;
            if (message.packet_size_requested != null && message.hasOwnProperty("packet_size_requested"))
                object.packet_size_requested = message.packet_size_requested;
            return object;
        };
    
        /**
         * Converts this CDiscoveryPingRequest to JSON.
         * @function toJSON
         * @memberof CDiscoveryPingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDiscoveryPingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CDiscoveryPingRequest;
    })();
    
    $root.CDiscoveryPingResponse = (function() {
    
        /**
         * Properties of a CDiscoveryPingResponse.
         * @exports ICDiscoveryPingResponse
         * @interface ICDiscoveryPingResponse
         * @property {number|null} [sequence] CDiscoveryPingResponse sequence
         * @property {number|null} [packet_size_received] CDiscoveryPingResponse packet_size_received
         */
    
        /**
         * Constructs a new CDiscoveryPingResponse.
         * @exports CDiscoveryPingResponse
         * @classdesc Represents a CDiscoveryPingResponse.
         * @implements ICDiscoveryPingResponse
         * @constructor
         * @param {ICDiscoveryPingResponse=} [properties] Properties to set
         */
        function CDiscoveryPingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDiscoveryPingResponse sequence.
         * @member {number} sequence
         * @memberof CDiscoveryPingResponse
         * @instance
         */
        CDiscoveryPingResponse.prototype.sequence = 0;
    
        /**
         * CDiscoveryPingResponse packet_size_received.
         * @member {number} packet_size_received
         * @memberof CDiscoveryPingResponse
         * @instance
         */
        CDiscoveryPingResponse.prototype.packet_size_received = 0;
    
        /**
         * Creates a new CDiscoveryPingResponse instance using the specified properties.
         * @function create
         * @memberof CDiscoveryPingResponse
         * @static
         * @param {ICDiscoveryPingResponse=} [properties] Properties to set
         * @returns {CDiscoveryPingResponse} CDiscoveryPingResponse instance
         */
        CDiscoveryPingResponse.create = function create(properties) {
            return new CDiscoveryPingResponse(properties);
        };
    
        /**
         * Encodes the specified CDiscoveryPingResponse message. Does not implicitly {@link CDiscoveryPingResponse.verify|verify} messages.
         * @function encode
         * @memberof CDiscoveryPingResponse
         * @static
         * @param {ICDiscoveryPingResponse} message CDiscoveryPingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDiscoveryPingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sequence);
            if (message.packet_size_received != null && message.hasOwnProperty("packet_size_received"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.packet_size_received);
            return writer;
        };
    
        /**
         * Encodes the specified CDiscoveryPingResponse message, length delimited. Does not implicitly {@link CDiscoveryPingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDiscoveryPingResponse
         * @static
         * @param {ICDiscoveryPingResponse} message CDiscoveryPingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDiscoveryPingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDiscoveryPingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CDiscoveryPingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDiscoveryPingResponse} CDiscoveryPingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDiscoveryPingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDiscoveryPingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint32();
                    break;
                case 2:
                    message.packet_size_received = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CDiscoveryPingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDiscoveryPingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDiscoveryPingResponse} CDiscoveryPingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDiscoveryPingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDiscoveryPingResponse message.
         * @function verify
         * @memberof CDiscoveryPingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDiscoveryPingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (!$util.isInteger(message.sequence))
                    return "sequence: integer expected";
            if (message.packet_size_received != null && message.hasOwnProperty("packet_size_received"))
                if (!$util.isInteger(message.packet_size_received))
                    return "packet_size_received: integer expected";
            return null;
        };
    
        /**
         * Creates a CDiscoveryPingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDiscoveryPingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDiscoveryPingResponse} CDiscoveryPingResponse
         */
        CDiscoveryPingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CDiscoveryPingResponse)
                return object;
            var message = new $root.CDiscoveryPingResponse();
            if (object.sequence != null)
                message.sequence = object.sequence >>> 0;
            if (object.packet_size_received != null)
                message.packet_size_received = object.packet_size_received >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CDiscoveryPingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDiscoveryPingResponse
         * @static
         * @param {CDiscoveryPingResponse} message CDiscoveryPingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDiscoveryPingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sequence = 0;
                object.packet_size_received = 0;
            }
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                object.sequence = message.sequence;
            if (message.packet_size_received != null && message.hasOwnProperty("packet_size_received"))
                object.packet_size_received = message.packet_size_received;
            return object;
        };
    
        /**
         * Converts this CDiscoveryPingResponse to JSON.
         * @function toJSON
         * @memberof CDiscoveryPingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDiscoveryPingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CDiscoveryPingResponse;
    })();
    
    $root.CStreamingClientHandshakeInfo = (function() {
    
        /**
         * Properties of a CStreamingClientHandshakeInfo.
         * @exports ICStreamingClientHandshakeInfo
         * @interface ICStreamingClientHandshakeInfo
         * @property {number|null} [network_test] CStreamingClientHandshakeInfo network_test
         */
    
        /**
         * Constructs a new CStreamingClientHandshakeInfo.
         * @exports CStreamingClientHandshakeInfo
         * @classdesc Represents a CStreamingClientHandshakeInfo.
         * @implements ICStreamingClientHandshakeInfo
         * @constructor
         * @param {ICStreamingClientHandshakeInfo=} [properties] Properties to set
         */
        function CStreamingClientHandshakeInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStreamingClientHandshakeInfo network_test.
         * @member {number} network_test
         * @memberof CStreamingClientHandshakeInfo
         * @instance
         */
        CStreamingClientHandshakeInfo.prototype.network_test = 0;
    
        /**
         * Creates a new CStreamingClientHandshakeInfo instance using the specified properties.
         * @function create
         * @memberof CStreamingClientHandshakeInfo
         * @static
         * @param {ICStreamingClientHandshakeInfo=} [properties] Properties to set
         * @returns {CStreamingClientHandshakeInfo} CStreamingClientHandshakeInfo instance
         */
        CStreamingClientHandshakeInfo.create = function create(properties) {
            return new CStreamingClientHandshakeInfo(properties);
        };
    
        /**
         * Encodes the specified CStreamingClientHandshakeInfo message. Does not implicitly {@link CStreamingClientHandshakeInfo.verify|verify} messages.
         * @function encode
         * @memberof CStreamingClientHandshakeInfo
         * @static
         * @param {ICStreamingClientHandshakeInfo} message CStreamingClientHandshakeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingClientHandshakeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.network_test != null && message.hasOwnProperty("network_test"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.network_test);
            return writer;
        };
    
        /**
         * Encodes the specified CStreamingClientHandshakeInfo message, length delimited. Does not implicitly {@link CStreamingClientHandshakeInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStreamingClientHandshakeInfo
         * @static
         * @param {ICStreamingClientHandshakeInfo} message CStreamingClientHandshakeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingClientHandshakeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStreamingClientHandshakeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CStreamingClientHandshakeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStreamingClientHandshakeInfo} CStreamingClientHandshakeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingClientHandshakeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStreamingClientHandshakeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.network_test = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStreamingClientHandshakeInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStreamingClientHandshakeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStreamingClientHandshakeInfo} CStreamingClientHandshakeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingClientHandshakeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStreamingClientHandshakeInfo message.
         * @function verify
         * @memberof CStreamingClientHandshakeInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStreamingClientHandshakeInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.network_test != null && message.hasOwnProperty("network_test"))
                if (!$util.isInteger(message.network_test))
                    return "network_test: integer expected";
            return null;
        };
    
        /**
         * Creates a CStreamingClientHandshakeInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStreamingClientHandshakeInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStreamingClientHandshakeInfo} CStreamingClientHandshakeInfo
         */
        CStreamingClientHandshakeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CStreamingClientHandshakeInfo)
                return object;
            var message = new $root.CStreamingClientHandshakeInfo();
            if (object.network_test != null)
                message.network_test = object.network_test | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CStreamingClientHandshakeInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStreamingClientHandshakeInfo
         * @static
         * @param {CStreamingClientHandshakeInfo} message CStreamingClientHandshakeInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStreamingClientHandshakeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.network_test = 0;
            if (message.network_test != null && message.hasOwnProperty("network_test"))
                object.network_test = message.network_test;
            return object;
        };
    
        /**
         * Converts this CStreamingClientHandshakeInfo to JSON.
         * @function toJSON
         * @memberof CStreamingClientHandshakeInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStreamingClientHandshakeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStreamingClientHandshakeInfo;
    })();
    
    $root.CClientHandshakeMsg = (function() {
    
        /**
         * Properties of a CClientHandshakeMsg.
         * @exports ICClientHandshakeMsg
         * @interface ICClientHandshakeMsg
         * @property {ICStreamingClientHandshakeInfo} info CClientHandshakeMsg info
         */
    
        /**
         * Constructs a new CClientHandshakeMsg.
         * @exports CClientHandshakeMsg
         * @classdesc Represents a CClientHandshakeMsg.
         * @implements ICClientHandshakeMsg
         * @constructor
         * @param {ICClientHandshakeMsg=} [properties] Properties to set
         */
        function CClientHandshakeMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientHandshakeMsg info.
         * @member {ICStreamingClientHandshakeInfo} info
         * @memberof CClientHandshakeMsg
         * @instance
         */
        CClientHandshakeMsg.prototype.info = null;
    
        /**
         * Creates a new CClientHandshakeMsg instance using the specified properties.
         * @function create
         * @memberof CClientHandshakeMsg
         * @static
         * @param {ICClientHandshakeMsg=} [properties] Properties to set
         * @returns {CClientHandshakeMsg} CClientHandshakeMsg instance
         */
        CClientHandshakeMsg.create = function create(properties) {
            return new CClientHandshakeMsg(properties);
        };
    
        /**
         * Encodes the specified CClientHandshakeMsg message. Does not implicitly {@link CClientHandshakeMsg.verify|verify} messages.
         * @function encode
         * @memberof CClientHandshakeMsg
         * @static
         * @param {ICClientHandshakeMsg} message CClientHandshakeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientHandshakeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.CStreamingClientHandshakeInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClientHandshakeMsg message, length delimited. Does not implicitly {@link CClientHandshakeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientHandshakeMsg
         * @static
         * @param {ICClientHandshakeMsg} message CClientHandshakeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientHandshakeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientHandshakeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CClientHandshakeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientHandshakeMsg} CClientHandshakeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientHandshakeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientHandshakeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = $root.CStreamingClientHandshakeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("info"))
                throw $util.ProtocolError("missing required 'info'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CClientHandshakeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientHandshakeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientHandshakeMsg} CClientHandshakeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientHandshakeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientHandshakeMsg message.
         * @function verify
         * @memberof CClientHandshakeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientHandshakeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.CStreamingClientHandshakeInfo.verify(message.info);
                if (error)
                    return "info." + error;
            }
            return null;
        };
    
        /**
         * Creates a CClientHandshakeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientHandshakeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientHandshakeMsg} CClientHandshakeMsg
         */
        CClientHandshakeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientHandshakeMsg)
                return object;
            var message = new $root.CClientHandshakeMsg();
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".CClientHandshakeMsg.info: object expected");
                message.info = $root.CStreamingClientHandshakeInfo.fromObject(object.info);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientHandshakeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientHandshakeMsg
         * @static
         * @param {CClientHandshakeMsg} message CClientHandshakeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientHandshakeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.info = null;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.CStreamingClientHandshakeInfo.toObject(message.info, options);
            return object;
        };
    
        /**
         * Converts this CClientHandshakeMsg to JSON.
         * @function toJSON
         * @memberof CClientHandshakeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientHandshakeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientHandshakeMsg;
    })();
    
    $root.CStreamingServerHandshakeInfo = (function() {
    
        /**
         * Properties of a CStreamingServerHandshakeInfo.
         * @exports ICStreamingServerHandshakeInfo
         * @interface ICStreamingServerHandshakeInfo
         * @property {number|null} [mtu] CStreamingServerHandshakeInfo mtu
         */
    
        /**
         * Constructs a new CStreamingServerHandshakeInfo.
         * @exports CStreamingServerHandshakeInfo
         * @classdesc Represents a CStreamingServerHandshakeInfo.
         * @implements ICStreamingServerHandshakeInfo
         * @constructor
         * @param {ICStreamingServerHandshakeInfo=} [properties] Properties to set
         */
        function CStreamingServerHandshakeInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStreamingServerHandshakeInfo mtu.
         * @member {number} mtu
         * @memberof CStreamingServerHandshakeInfo
         * @instance
         */
        CStreamingServerHandshakeInfo.prototype.mtu = 0;
    
        /**
         * Creates a new CStreamingServerHandshakeInfo instance using the specified properties.
         * @function create
         * @memberof CStreamingServerHandshakeInfo
         * @static
         * @param {ICStreamingServerHandshakeInfo=} [properties] Properties to set
         * @returns {CStreamingServerHandshakeInfo} CStreamingServerHandshakeInfo instance
         */
        CStreamingServerHandshakeInfo.create = function create(properties) {
            return new CStreamingServerHandshakeInfo(properties);
        };
    
        /**
         * Encodes the specified CStreamingServerHandshakeInfo message. Does not implicitly {@link CStreamingServerHandshakeInfo.verify|verify} messages.
         * @function encode
         * @memberof CStreamingServerHandshakeInfo
         * @static
         * @param {ICStreamingServerHandshakeInfo} message CStreamingServerHandshakeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingServerHandshakeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mtu != null && message.hasOwnProperty("mtu"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mtu);
            return writer;
        };
    
        /**
         * Encodes the specified CStreamingServerHandshakeInfo message, length delimited. Does not implicitly {@link CStreamingServerHandshakeInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStreamingServerHandshakeInfo
         * @static
         * @param {ICStreamingServerHandshakeInfo} message CStreamingServerHandshakeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingServerHandshakeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStreamingServerHandshakeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CStreamingServerHandshakeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStreamingServerHandshakeInfo} CStreamingServerHandshakeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingServerHandshakeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStreamingServerHandshakeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mtu = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStreamingServerHandshakeInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStreamingServerHandshakeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStreamingServerHandshakeInfo} CStreamingServerHandshakeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingServerHandshakeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStreamingServerHandshakeInfo message.
         * @function verify
         * @memberof CStreamingServerHandshakeInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStreamingServerHandshakeInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mtu != null && message.hasOwnProperty("mtu"))
                if (!$util.isInteger(message.mtu))
                    return "mtu: integer expected";
            return null;
        };
    
        /**
         * Creates a CStreamingServerHandshakeInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStreamingServerHandshakeInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStreamingServerHandshakeInfo} CStreamingServerHandshakeInfo
         */
        CStreamingServerHandshakeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CStreamingServerHandshakeInfo)
                return object;
            var message = new $root.CStreamingServerHandshakeInfo();
            if (object.mtu != null)
                message.mtu = object.mtu | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CStreamingServerHandshakeInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStreamingServerHandshakeInfo
         * @static
         * @param {CStreamingServerHandshakeInfo} message CStreamingServerHandshakeInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStreamingServerHandshakeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mtu = 0;
            if (message.mtu != null && message.hasOwnProperty("mtu"))
                object.mtu = message.mtu;
            return object;
        };
    
        /**
         * Converts this CStreamingServerHandshakeInfo to JSON.
         * @function toJSON
         * @memberof CStreamingServerHandshakeInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStreamingServerHandshakeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStreamingServerHandshakeInfo;
    })();
    
    $root.CServerHandshakeMsg = (function() {
    
        /**
         * Properties of a CServerHandshakeMsg.
         * @exports ICServerHandshakeMsg
         * @interface ICServerHandshakeMsg
         * @property {ICStreamingServerHandshakeInfo} info CServerHandshakeMsg info
         */
    
        /**
         * Constructs a new CServerHandshakeMsg.
         * @exports CServerHandshakeMsg
         * @classdesc Represents a CServerHandshakeMsg.
         * @implements ICServerHandshakeMsg
         * @constructor
         * @param {ICServerHandshakeMsg=} [properties] Properties to set
         */
        function CServerHandshakeMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CServerHandshakeMsg info.
         * @member {ICStreamingServerHandshakeInfo} info
         * @memberof CServerHandshakeMsg
         * @instance
         */
        CServerHandshakeMsg.prototype.info = null;
    
        /**
         * Creates a new CServerHandshakeMsg instance using the specified properties.
         * @function create
         * @memberof CServerHandshakeMsg
         * @static
         * @param {ICServerHandshakeMsg=} [properties] Properties to set
         * @returns {CServerHandshakeMsg} CServerHandshakeMsg instance
         */
        CServerHandshakeMsg.create = function create(properties) {
            return new CServerHandshakeMsg(properties);
        };
    
        /**
         * Encodes the specified CServerHandshakeMsg message. Does not implicitly {@link CServerHandshakeMsg.verify|verify} messages.
         * @function encode
         * @memberof CServerHandshakeMsg
         * @static
         * @param {ICServerHandshakeMsg} message CServerHandshakeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CServerHandshakeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.CStreamingServerHandshakeInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CServerHandshakeMsg message, length delimited. Does not implicitly {@link CServerHandshakeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CServerHandshakeMsg
         * @static
         * @param {ICServerHandshakeMsg} message CServerHandshakeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CServerHandshakeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CServerHandshakeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CServerHandshakeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CServerHandshakeMsg} CServerHandshakeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CServerHandshakeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CServerHandshakeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = $root.CStreamingServerHandshakeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("info"))
                throw $util.ProtocolError("missing required 'info'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CServerHandshakeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CServerHandshakeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CServerHandshakeMsg} CServerHandshakeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CServerHandshakeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CServerHandshakeMsg message.
         * @function verify
         * @memberof CServerHandshakeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CServerHandshakeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.CStreamingServerHandshakeInfo.verify(message.info);
                if (error)
                    return "info." + error;
            }
            return null;
        };
    
        /**
         * Creates a CServerHandshakeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CServerHandshakeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CServerHandshakeMsg} CServerHandshakeMsg
         */
        CServerHandshakeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CServerHandshakeMsg)
                return object;
            var message = new $root.CServerHandshakeMsg();
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".CServerHandshakeMsg.info: object expected");
                message.info = $root.CStreamingServerHandshakeInfo.fromObject(object.info);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CServerHandshakeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CServerHandshakeMsg
         * @static
         * @param {CServerHandshakeMsg} message CServerHandshakeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CServerHandshakeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.info = null;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.CStreamingServerHandshakeInfo.toObject(message.info, options);
            return object;
        };
    
        /**
         * Converts this CServerHandshakeMsg to JSON.
         * @function toJSON
         * @memberof CServerHandshakeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CServerHandshakeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CServerHandshakeMsg;
    })();
    
    $root.CAuthenticationRequestMsg = (function() {
    
        /**
         * Properties of a CAuthenticationRequestMsg.
         * @exports ICAuthenticationRequestMsg
         * @interface ICAuthenticationRequestMsg
         * @property {Uint8Array|null} [token] CAuthenticationRequestMsg token
         * @property {EStreamVersion|null} [version] CAuthenticationRequestMsg version
         */
    
        /**
         * Constructs a new CAuthenticationRequestMsg.
         * @exports CAuthenticationRequestMsg
         * @classdesc Represents a CAuthenticationRequestMsg.
         * @implements ICAuthenticationRequestMsg
         * @constructor
         * @param {ICAuthenticationRequestMsg=} [properties] Properties to set
         */
        function CAuthenticationRequestMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthenticationRequestMsg token.
         * @member {Uint8Array} token
         * @memberof CAuthenticationRequestMsg
         * @instance
         */
        CAuthenticationRequestMsg.prototype.token = $util.newBuffer([]);
    
        /**
         * CAuthenticationRequestMsg version.
         * @member {EStreamVersion} version
         * @memberof CAuthenticationRequestMsg
         * @instance
         */
        CAuthenticationRequestMsg.prototype.version = 0;
    
        /**
         * Creates a new CAuthenticationRequestMsg instance using the specified properties.
         * @function create
         * @memberof CAuthenticationRequestMsg
         * @static
         * @param {ICAuthenticationRequestMsg=} [properties] Properties to set
         * @returns {CAuthenticationRequestMsg} CAuthenticationRequestMsg instance
         */
        CAuthenticationRequestMsg.create = function create(properties) {
            return new CAuthenticationRequestMsg(properties);
        };
    
        /**
         * Encodes the specified CAuthenticationRequestMsg message. Does not implicitly {@link CAuthenticationRequestMsg.verify|verify} messages.
         * @function encode
         * @memberof CAuthenticationRequestMsg
         * @static
         * @param {ICAuthenticationRequestMsg} message CAuthenticationRequestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthenticationRequestMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.token);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.version);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthenticationRequestMsg message, length delimited. Does not implicitly {@link CAuthenticationRequestMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthenticationRequestMsg
         * @static
         * @param {ICAuthenticationRequestMsg} message CAuthenticationRequestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthenticationRequestMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthenticationRequestMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthenticationRequestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthenticationRequestMsg} CAuthenticationRequestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthenticationRequestMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthenticationRequestMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.bytes();
                    break;
                case 2:
                    message.version = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthenticationRequestMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthenticationRequestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthenticationRequestMsg} CAuthenticationRequestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthenticationRequestMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthenticationRequestMsg message.
         * @function verify
         * @memberof CAuthenticationRequestMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthenticationRequestMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                switch (message.version) {
                default:
                    return "version: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CAuthenticationRequestMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthenticationRequestMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthenticationRequestMsg} CAuthenticationRequestMsg
         */
        CAuthenticationRequestMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthenticationRequestMsg)
                return object;
            var message = new $root.CAuthenticationRequestMsg();
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            switch (object.version) {
            case "k_EStreamVersionNone":
            case 0:
                message.version = 0;
                break;
            case "k_EStreamVersionCurrent":
            case 1:
                message.version = 1;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthenticationRequestMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthenticationRequestMsg
         * @static
         * @param {CAuthenticationRequestMsg} message CAuthenticationRequestMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthenticationRequestMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
                object.version = options.enums === String ? "k_EStreamVersionNone" : 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = options.enums === String ? $root.EStreamVersion[message.version] : message.version;
            return object;
        };
    
        /**
         * Converts this CAuthenticationRequestMsg to JSON.
         * @function toJSON
         * @memberof CAuthenticationRequestMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthenticationRequestMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthenticationRequestMsg;
    })();
    
    $root.CAuthenticationResponseMsg = (function() {
    
        /**
         * Properties of a CAuthenticationResponseMsg.
         * @exports ICAuthenticationResponseMsg
         * @interface ICAuthenticationResponseMsg
         * @property {CAuthenticationResponseMsg.AuthenticationResult|null} [result] CAuthenticationResponseMsg result
         * @property {EStreamVersion|null} [version] CAuthenticationResponseMsg version
         */
    
        /**
         * Constructs a new CAuthenticationResponseMsg.
         * @exports CAuthenticationResponseMsg
         * @classdesc Represents a CAuthenticationResponseMsg.
         * @implements ICAuthenticationResponseMsg
         * @constructor
         * @param {ICAuthenticationResponseMsg=} [properties] Properties to set
         */
        function CAuthenticationResponseMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthenticationResponseMsg result.
         * @member {CAuthenticationResponseMsg.AuthenticationResult} result
         * @memberof CAuthenticationResponseMsg
         * @instance
         */
        CAuthenticationResponseMsg.prototype.result = 0;
    
        /**
         * CAuthenticationResponseMsg version.
         * @member {EStreamVersion} version
         * @memberof CAuthenticationResponseMsg
         * @instance
         */
        CAuthenticationResponseMsg.prototype.version = 0;
    
        /**
         * Creates a new CAuthenticationResponseMsg instance using the specified properties.
         * @function create
         * @memberof CAuthenticationResponseMsg
         * @static
         * @param {ICAuthenticationResponseMsg=} [properties] Properties to set
         * @returns {CAuthenticationResponseMsg} CAuthenticationResponseMsg instance
         */
        CAuthenticationResponseMsg.create = function create(properties) {
            return new CAuthenticationResponseMsg(properties);
        };
    
        /**
         * Encodes the specified CAuthenticationResponseMsg message. Does not implicitly {@link CAuthenticationResponseMsg.verify|verify} messages.
         * @function encode
         * @memberof CAuthenticationResponseMsg
         * @static
         * @param {ICAuthenticationResponseMsg} message CAuthenticationResponseMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthenticationResponseMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.version);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthenticationResponseMsg message, length delimited. Does not implicitly {@link CAuthenticationResponseMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthenticationResponseMsg
         * @static
         * @param {ICAuthenticationResponseMsg} message CAuthenticationResponseMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthenticationResponseMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthenticationResponseMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthenticationResponseMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthenticationResponseMsg} CAuthenticationResponseMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthenticationResponseMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthenticationResponseMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.version = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthenticationResponseMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthenticationResponseMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthenticationResponseMsg} CAuthenticationResponseMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthenticationResponseMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthenticationResponseMsg message.
         * @function verify
         * @memberof CAuthenticationResponseMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthenticationResponseMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.version != null && message.hasOwnProperty("version"))
                switch (message.version) {
                default:
                    return "version: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CAuthenticationResponseMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthenticationResponseMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthenticationResponseMsg} CAuthenticationResponseMsg
         */
        CAuthenticationResponseMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthenticationResponseMsg)
                return object;
            var message = new $root.CAuthenticationResponseMsg();
            switch (object.result) {
            case "SUCCEEDED":
            case 0:
                message.result = 0;
                break;
            case "FAILED":
            case 1:
                message.result = 1;
                break;
            }
            switch (object.version) {
            case "k_EStreamVersionNone":
            case 0:
                message.version = 0;
                break;
            case "k_EStreamVersionCurrent":
            case 1:
                message.version = 1;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthenticationResponseMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthenticationResponseMsg
         * @static
         * @param {CAuthenticationResponseMsg} message CAuthenticationResponseMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthenticationResponseMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "SUCCEEDED" : 0;
                object.version = options.enums === String ? "k_EStreamVersionNone" : 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.CAuthenticationResponseMsg.AuthenticationResult[message.result] : message.result;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = options.enums === String ? $root.EStreamVersion[message.version] : message.version;
            return object;
        };
    
        /**
         * Converts this CAuthenticationResponseMsg to JSON.
         * @function toJSON
         * @memberof CAuthenticationResponseMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthenticationResponseMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * AuthenticationResult enum.
         * @name CAuthenticationResponseMsg.AuthenticationResult
         * @enum {string}
         * @property {number} SUCCEEDED=0 SUCCEEDED value
         * @property {number} FAILED=1 FAILED value
         */
        CAuthenticationResponseMsg.AuthenticationResult = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCEEDED"] = 0;
            values[valuesById[1] = "FAILED"] = 1;
            return values;
        })();
    
        return CAuthenticationResponseMsg;
    })();
    
    $root.CKeepAliveMsg = (function() {
    
        /**
         * Properties of a CKeepAliveMsg.
         * @exports ICKeepAliveMsg
         * @interface ICKeepAliveMsg
         */
    
        /**
         * Constructs a new CKeepAliveMsg.
         * @exports CKeepAliveMsg
         * @classdesc Represents a CKeepAliveMsg.
         * @implements ICKeepAliveMsg
         * @constructor
         * @param {ICKeepAliveMsg=} [properties] Properties to set
         */
        function CKeepAliveMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CKeepAliveMsg instance using the specified properties.
         * @function create
         * @memberof CKeepAliveMsg
         * @static
         * @param {ICKeepAliveMsg=} [properties] Properties to set
         * @returns {CKeepAliveMsg} CKeepAliveMsg instance
         */
        CKeepAliveMsg.create = function create(properties) {
            return new CKeepAliveMsg(properties);
        };
    
        /**
         * Encodes the specified CKeepAliveMsg message. Does not implicitly {@link CKeepAliveMsg.verify|verify} messages.
         * @function encode
         * @memberof CKeepAliveMsg
         * @static
         * @param {ICKeepAliveMsg} message CKeepAliveMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKeepAliveMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CKeepAliveMsg message, length delimited. Does not implicitly {@link CKeepAliveMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CKeepAliveMsg
         * @static
         * @param {ICKeepAliveMsg} message CKeepAliveMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CKeepAliveMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CKeepAliveMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CKeepAliveMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CKeepAliveMsg} CKeepAliveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKeepAliveMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CKeepAliveMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CKeepAliveMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CKeepAliveMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CKeepAliveMsg} CKeepAliveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CKeepAliveMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CKeepAliveMsg message.
         * @function verify
         * @memberof CKeepAliveMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CKeepAliveMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CKeepAliveMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CKeepAliveMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CKeepAliveMsg} CKeepAliveMsg
         */
        CKeepAliveMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CKeepAliveMsg)
                return object;
            return new $root.CKeepAliveMsg();
        };
    
        /**
         * Creates a plain object from a CKeepAliveMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CKeepAliveMsg
         * @static
         * @param {CKeepAliveMsg} message CKeepAliveMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CKeepAliveMsg.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CKeepAliveMsg to JSON.
         * @function toJSON
         * @memberof CKeepAliveMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CKeepAliveMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CKeepAliveMsg;
    })();
    
    $root.CStartNetworkTestMsg = (function() {
    
        /**
         * Properties of a CStartNetworkTestMsg.
         * @exports ICStartNetworkTestMsg
         * @interface ICStartNetworkTestMsg
         * @property {number|null} [frames] CStartNetworkTestMsg frames
         * @property {number|null} [framerate] CStartNetworkTestMsg framerate
         * @property {number|null} [bitrate_kbps] CStartNetworkTestMsg bitrate_kbps
         * @property {number|null} [burst_bitrate_kbps] CStartNetworkTestMsg burst_bitrate_kbps
         * @property {boolean|null} [bandwidth_test] CStartNetworkTestMsg bandwidth_test
         */
    
        /**
         * Constructs a new CStartNetworkTestMsg.
         * @exports CStartNetworkTestMsg
         * @classdesc Represents a CStartNetworkTestMsg.
         * @implements ICStartNetworkTestMsg
         * @constructor
         * @param {ICStartNetworkTestMsg=} [properties] Properties to set
         */
        function CStartNetworkTestMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStartNetworkTestMsg frames.
         * @member {number} frames
         * @memberof CStartNetworkTestMsg
         * @instance
         */
        CStartNetworkTestMsg.prototype.frames = 0;
    
        /**
         * CStartNetworkTestMsg framerate.
         * @member {number} framerate
         * @memberof CStartNetworkTestMsg
         * @instance
         */
        CStartNetworkTestMsg.prototype.framerate = 0;
    
        /**
         * CStartNetworkTestMsg bitrate_kbps.
         * @member {number} bitrate_kbps
         * @memberof CStartNetworkTestMsg
         * @instance
         */
        CStartNetworkTestMsg.prototype.bitrate_kbps = 0;
    
        /**
         * CStartNetworkTestMsg burst_bitrate_kbps.
         * @member {number} burst_bitrate_kbps
         * @memberof CStartNetworkTestMsg
         * @instance
         */
        CStartNetworkTestMsg.prototype.burst_bitrate_kbps = 0;
    
        /**
         * CStartNetworkTestMsg bandwidth_test.
         * @member {boolean} bandwidth_test
         * @memberof CStartNetworkTestMsg
         * @instance
         */
        CStartNetworkTestMsg.prototype.bandwidth_test = false;
    
        /**
         * Creates a new CStartNetworkTestMsg instance using the specified properties.
         * @function create
         * @memberof CStartNetworkTestMsg
         * @static
         * @param {ICStartNetworkTestMsg=} [properties] Properties to set
         * @returns {CStartNetworkTestMsg} CStartNetworkTestMsg instance
         */
        CStartNetworkTestMsg.create = function create(properties) {
            return new CStartNetworkTestMsg(properties);
        };
    
        /**
         * Encodes the specified CStartNetworkTestMsg message. Does not implicitly {@link CStartNetworkTestMsg.verify|verify} messages.
         * @function encode
         * @memberof CStartNetworkTestMsg
         * @static
         * @param {ICStartNetworkTestMsg} message CStartNetworkTestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStartNetworkTestMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frames != null && message.hasOwnProperty("frames"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.frames);
            if (message.framerate != null && message.hasOwnProperty("framerate"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.framerate);
            if (message.bitrate_kbps != null && message.hasOwnProperty("bitrate_kbps"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bitrate_kbps);
            if (message.burst_bitrate_kbps != null && message.hasOwnProperty("burst_bitrate_kbps"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.burst_bitrate_kbps);
            if (message.bandwidth_test != null && message.hasOwnProperty("bandwidth_test"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.bandwidth_test);
            return writer;
        };
    
        /**
         * Encodes the specified CStartNetworkTestMsg message, length delimited. Does not implicitly {@link CStartNetworkTestMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStartNetworkTestMsg
         * @static
         * @param {ICStartNetworkTestMsg} message CStartNetworkTestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStartNetworkTestMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStartNetworkTestMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CStartNetworkTestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStartNetworkTestMsg} CStartNetworkTestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStartNetworkTestMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStartNetworkTestMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.frames = reader.uint32();
                    break;
                case 2:
                    message.framerate = reader.uint32();
                    break;
                case 3:
                    message.bitrate_kbps = reader.uint32();
                    break;
                case 4:
                    message.burst_bitrate_kbps = reader.uint32();
                    break;
                case 5:
                    message.bandwidth_test = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStartNetworkTestMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStartNetworkTestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStartNetworkTestMsg} CStartNetworkTestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStartNetworkTestMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStartNetworkTestMsg message.
         * @function verify
         * @memberof CStartNetworkTestMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStartNetworkTestMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frames != null && message.hasOwnProperty("frames"))
                if (!$util.isInteger(message.frames))
                    return "frames: integer expected";
            if (message.framerate != null && message.hasOwnProperty("framerate"))
                if (!$util.isInteger(message.framerate))
                    return "framerate: integer expected";
            if (message.bitrate_kbps != null && message.hasOwnProperty("bitrate_kbps"))
                if (!$util.isInteger(message.bitrate_kbps))
                    return "bitrate_kbps: integer expected";
            if (message.burst_bitrate_kbps != null && message.hasOwnProperty("burst_bitrate_kbps"))
                if (!$util.isInteger(message.burst_bitrate_kbps))
                    return "burst_bitrate_kbps: integer expected";
            if (message.bandwidth_test != null && message.hasOwnProperty("bandwidth_test"))
                if (typeof message.bandwidth_test !== "boolean")
                    return "bandwidth_test: boolean expected";
            return null;
        };
    
        /**
         * Creates a CStartNetworkTestMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStartNetworkTestMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStartNetworkTestMsg} CStartNetworkTestMsg
         */
        CStartNetworkTestMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CStartNetworkTestMsg)
                return object;
            var message = new $root.CStartNetworkTestMsg();
            if (object.frames != null)
                message.frames = object.frames >>> 0;
            if (object.framerate != null)
                message.framerate = object.framerate >>> 0;
            if (object.bitrate_kbps != null)
                message.bitrate_kbps = object.bitrate_kbps >>> 0;
            if (object.burst_bitrate_kbps != null)
                message.burst_bitrate_kbps = object.burst_bitrate_kbps >>> 0;
            if (object.bandwidth_test != null)
                message.bandwidth_test = Boolean(object.bandwidth_test);
            return message;
        };
    
        /**
         * Creates a plain object from a CStartNetworkTestMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStartNetworkTestMsg
         * @static
         * @param {CStartNetworkTestMsg} message CStartNetworkTestMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStartNetworkTestMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.frames = 0;
                object.framerate = 0;
                object.bitrate_kbps = 0;
                object.burst_bitrate_kbps = 0;
                object.bandwidth_test = false;
            }
            if (message.frames != null && message.hasOwnProperty("frames"))
                object.frames = message.frames;
            if (message.framerate != null && message.hasOwnProperty("framerate"))
                object.framerate = message.framerate;
            if (message.bitrate_kbps != null && message.hasOwnProperty("bitrate_kbps"))
                object.bitrate_kbps = message.bitrate_kbps;
            if (message.burst_bitrate_kbps != null && message.hasOwnProperty("burst_bitrate_kbps"))
                object.burst_bitrate_kbps = message.burst_bitrate_kbps;
            if (message.bandwidth_test != null && message.hasOwnProperty("bandwidth_test"))
                object.bandwidth_test = message.bandwidth_test;
            return object;
        };
    
        /**
         * Converts this CStartNetworkTestMsg to JSON.
         * @function toJSON
         * @memberof CStartNetworkTestMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStartNetworkTestMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStartNetworkTestMsg;
    })();
    
    $root.CStreamVideoMode = (function() {
    
        /**
         * Properties of a CStreamVideoMode.
         * @exports ICStreamVideoMode
         * @interface ICStreamVideoMode
         * @property {number} width CStreamVideoMode width
         * @property {number} height CStreamVideoMode height
         * @property {number|null} [refresh_rate] CStreamVideoMode refresh_rate
         * @property {number|null} [refresh_rate_numerator] CStreamVideoMode refresh_rate_numerator
         * @property {number|null} [refresh_rate_denominator] CStreamVideoMode refresh_rate_denominator
         */
    
        /**
         * Constructs a new CStreamVideoMode.
         * @exports CStreamVideoMode
         * @classdesc Represents a CStreamVideoMode.
         * @implements ICStreamVideoMode
         * @constructor
         * @param {ICStreamVideoMode=} [properties] Properties to set
         */
        function CStreamVideoMode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStreamVideoMode width.
         * @member {number} width
         * @memberof CStreamVideoMode
         * @instance
         */
        CStreamVideoMode.prototype.width = 0;
    
        /**
         * CStreamVideoMode height.
         * @member {number} height
         * @memberof CStreamVideoMode
         * @instance
         */
        CStreamVideoMode.prototype.height = 0;
    
        /**
         * CStreamVideoMode refresh_rate.
         * @member {number} refresh_rate
         * @memberof CStreamVideoMode
         * @instance
         */
        CStreamVideoMode.prototype.refresh_rate = 0;
    
        /**
         * CStreamVideoMode refresh_rate_numerator.
         * @member {number} refresh_rate_numerator
         * @memberof CStreamVideoMode
         * @instance
         */
        CStreamVideoMode.prototype.refresh_rate_numerator = 0;
    
        /**
         * CStreamVideoMode refresh_rate_denominator.
         * @member {number} refresh_rate_denominator
         * @memberof CStreamVideoMode
         * @instance
         */
        CStreamVideoMode.prototype.refresh_rate_denominator = 0;
    
        /**
         * Creates a new CStreamVideoMode instance using the specified properties.
         * @function create
         * @memberof CStreamVideoMode
         * @static
         * @param {ICStreamVideoMode=} [properties] Properties to set
         * @returns {CStreamVideoMode} CStreamVideoMode instance
         */
        CStreamVideoMode.create = function create(properties) {
            return new CStreamVideoMode(properties);
        };
    
        /**
         * Encodes the specified CStreamVideoMode message. Does not implicitly {@link CStreamVideoMode.verify|verify} messages.
         * @function encode
         * @memberof CStreamVideoMode
         * @static
         * @param {ICStreamVideoMode} message CStreamVideoMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamVideoMode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.width);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.height);
            if (message.refresh_rate != null && message.hasOwnProperty("refresh_rate"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.refresh_rate);
            if (message.refresh_rate_numerator != null && message.hasOwnProperty("refresh_rate_numerator"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.refresh_rate_numerator);
            if (message.refresh_rate_denominator != null && message.hasOwnProperty("refresh_rate_denominator"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.refresh_rate_denominator);
            return writer;
        };
    
        /**
         * Encodes the specified CStreamVideoMode message, length delimited. Does not implicitly {@link CStreamVideoMode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStreamVideoMode
         * @static
         * @param {ICStreamVideoMode} message CStreamVideoMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamVideoMode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStreamVideoMode message from the specified reader or buffer.
         * @function decode
         * @memberof CStreamVideoMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStreamVideoMode} CStreamVideoMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamVideoMode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStreamVideoMode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.width = reader.uint32();
                    break;
                case 2:
                    message.height = reader.uint32();
                    break;
                case 3:
                    message.refresh_rate = reader.uint32();
                    break;
                case 4:
                    message.refresh_rate_numerator = reader.uint32();
                    break;
                case 5:
                    message.refresh_rate_denominator = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("width"))
                throw $util.ProtocolError("missing required 'width'", { instance: message });
            if (!message.hasOwnProperty("height"))
                throw $util.ProtocolError("missing required 'height'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CStreamVideoMode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStreamVideoMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStreamVideoMode} CStreamVideoMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamVideoMode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStreamVideoMode message.
         * @function verify
         * @memberof CStreamVideoMode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStreamVideoMode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.width))
                return "width: integer expected";
            if (!$util.isInteger(message.height))
                return "height: integer expected";
            if (message.refresh_rate != null && message.hasOwnProperty("refresh_rate"))
                if (!$util.isInteger(message.refresh_rate))
                    return "refresh_rate: integer expected";
            if (message.refresh_rate_numerator != null && message.hasOwnProperty("refresh_rate_numerator"))
                if (!$util.isInteger(message.refresh_rate_numerator))
                    return "refresh_rate_numerator: integer expected";
            if (message.refresh_rate_denominator != null && message.hasOwnProperty("refresh_rate_denominator"))
                if (!$util.isInteger(message.refresh_rate_denominator))
                    return "refresh_rate_denominator: integer expected";
            return null;
        };
    
        /**
         * Creates a CStreamVideoMode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStreamVideoMode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStreamVideoMode} CStreamVideoMode
         */
        CStreamVideoMode.fromObject = function fromObject(object) {
            if (object instanceof $root.CStreamVideoMode)
                return object;
            var message = new $root.CStreamVideoMode();
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.refresh_rate != null)
                message.refresh_rate = object.refresh_rate >>> 0;
            if (object.refresh_rate_numerator != null)
                message.refresh_rate_numerator = object.refresh_rate_numerator >>> 0;
            if (object.refresh_rate_denominator != null)
                message.refresh_rate_denominator = object.refresh_rate_denominator >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CStreamVideoMode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStreamVideoMode
         * @static
         * @param {CStreamVideoMode} message CStreamVideoMode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStreamVideoMode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
                object.refresh_rate = 0;
                object.refresh_rate_numerator = 0;
                object.refresh_rate_denominator = 0;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.refresh_rate != null && message.hasOwnProperty("refresh_rate"))
                object.refresh_rate = message.refresh_rate;
            if (message.refresh_rate_numerator != null && message.hasOwnProperty("refresh_rate_numerator"))
                object.refresh_rate_numerator = message.refresh_rate_numerator;
            if (message.refresh_rate_denominator != null && message.hasOwnProperty("refresh_rate_denominator"))
                object.refresh_rate_denominator = message.refresh_rate_denominator;
            return object;
        };
    
        /**
         * Converts this CStreamVideoMode to JSON.
         * @function toJSON
         * @memberof CStreamVideoMode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStreamVideoMode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStreamVideoMode;
    })();
    
    $root.CStreamingClientCaps = (function() {
    
        /**
         * Properties of a CStreamingClientCaps.
         * @exports ICStreamingClientCaps
         * @interface ICStreamingClientCaps
         * @property {string|null} [system_info] CStreamingClientCaps system_info
         * @property {boolean|null} [system_can_suspend] CStreamingClientCaps system_can_suspend
         * @property {number|null} [maximum_decode_bitrate_kbps] CStreamingClientCaps maximum_decode_bitrate_kbps
         * @property {number|null} [maximum_burst_bitrate_kbps] CStreamingClientCaps maximum_burst_bitrate_kbps
         * @property {boolean|null} [supports_video_hevc] CStreamingClientCaps supports_video_hevc
         * @property {boolean|null} [disable_steam_store] CStreamingClientCaps disable_steam_store
         * @property {boolean|null} [disable_client_cursor] CStreamingClientCaps disable_client_cursor
         * @property {boolean|null} [disable_intel_hardware_encoding] CStreamingClientCaps disable_intel_hardware_encoding
         * @property {boolean|null} [disable_amd_hardware_encoding] CStreamingClientCaps disable_amd_hardware_encoding
         * @property {boolean|null} [disable_nvidia_hardware_encoding] CStreamingClientCaps disable_nvidia_hardware_encoding
         */
    
        /**
         * Constructs a new CStreamingClientCaps.
         * @exports CStreamingClientCaps
         * @classdesc Represents a CStreamingClientCaps.
         * @implements ICStreamingClientCaps
         * @constructor
         * @param {ICStreamingClientCaps=} [properties] Properties to set
         */
        function CStreamingClientCaps(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStreamingClientCaps system_info.
         * @member {string} system_info
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.system_info = "";
    
        /**
         * CStreamingClientCaps system_can_suspend.
         * @member {boolean} system_can_suspend
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.system_can_suspend = false;
    
        /**
         * CStreamingClientCaps maximum_decode_bitrate_kbps.
         * @member {number} maximum_decode_bitrate_kbps
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.maximum_decode_bitrate_kbps = 0;
    
        /**
         * CStreamingClientCaps maximum_burst_bitrate_kbps.
         * @member {number} maximum_burst_bitrate_kbps
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.maximum_burst_bitrate_kbps = 0;
    
        /**
         * CStreamingClientCaps supports_video_hevc.
         * @member {boolean} supports_video_hevc
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.supports_video_hevc = false;
    
        /**
         * CStreamingClientCaps disable_steam_store.
         * @member {boolean} disable_steam_store
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.disable_steam_store = false;
    
        /**
         * CStreamingClientCaps disable_client_cursor.
         * @member {boolean} disable_client_cursor
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.disable_client_cursor = false;
    
        /**
         * CStreamingClientCaps disable_intel_hardware_encoding.
         * @member {boolean} disable_intel_hardware_encoding
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.disable_intel_hardware_encoding = false;
    
        /**
         * CStreamingClientCaps disable_amd_hardware_encoding.
         * @member {boolean} disable_amd_hardware_encoding
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.disable_amd_hardware_encoding = false;
    
        /**
         * CStreamingClientCaps disable_nvidia_hardware_encoding.
         * @member {boolean} disable_nvidia_hardware_encoding
         * @memberof CStreamingClientCaps
         * @instance
         */
        CStreamingClientCaps.prototype.disable_nvidia_hardware_encoding = false;
    
        /**
         * Creates a new CStreamingClientCaps instance using the specified properties.
         * @function create
         * @memberof CStreamingClientCaps
         * @static
         * @param {ICStreamingClientCaps=} [properties] Properties to set
         * @returns {CStreamingClientCaps} CStreamingClientCaps instance
         */
        CStreamingClientCaps.create = function create(properties) {
            return new CStreamingClientCaps(properties);
        };
    
        /**
         * Encodes the specified CStreamingClientCaps message. Does not implicitly {@link CStreamingClientCaps.verify|verify} messages.
         * @function encode
         * @memberof CStreamingClientCaps
         * @static
         * @param {ICStreamingClientCaps} message CStreamingClientCaps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingClientCaps.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.system_info != null && message.hasOwnProperty("system_info"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.system_info);
            if (message.system_can_suspend != null && message.hasOwnProperty("system_can_suspend"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.system_can_suspend);
            if (message.maximum_decode_bitrate_kbps != null && message.hasOwnProperty("maximum_decode_bitrate_kbps"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maximum_decode_bitrate_kbps);
            if (message.maximum_burst_bitrate_kbps != null && message.hasOwnProperty("maximum_burst_bitrate_kbps"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maximum_burst_bitrate_kbps);
            if (message.supports_video_hevc != null && message.hasOwnProperty("supports_video_hevc"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.supports_video_hevc);
            if (message.disable_steam_store != null && message.hasOwnProperty("disable_steam_store"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.disable_steam_store);
            if (message.disable_client_cursor != null && message.hasOwnProperty("disable_client_cursor"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.disable_client_cursor);
            if (message.disable_intel_hardware_encoding != null && message.hasOwnProperty("disable_intel_hardware_encoding"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.disable_intel_hardware_encoding);
            if (message.disable_amd_hardware_encoding != null && message.hasOwnProperty("disable_amd_hardware_encoding"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.disable_amd_hardware_encoding);
            if (message.disable_nvidia_hardware_encoding != null && message.hasOwnProperty("disable_nvidia_hardware_encoding"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.disable_nvidia_hardware_encoding);
            return writer;
        };
    
        /**
         * Encodes the specified CStreamingClientCaps message, length delimited. Does not implicitly {@link CStreamingClientCaps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStreamingClientCaps
         * @static
         * @param {ICStreamingClientCaps} message CStreamingClientCaps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingClientCaps.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStreamingClientCaps message from the specified reader or buffer.
         * @function decode
         * @memberof CStreamingClientCaps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStreamingClientCaps} CStreamingClientCaps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingClientCaps.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStreamingClientCaps();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.system_info = reader.string();
                    break;
                case 2:
                    message.system_can_suspend = reader.bool();
                    break;
                case 3:
                    message.maximum_decode_bitrate_kbps = reader.int32();
                    break;
                case 4:
                    message.maximum_burst_bitrate_kbps = reader.int32();
                    break;
                case 5:
                    message.supports_video_hevc = reader.bool();
                    break;
                case 6:
                    message.disable_steam_store = reader.bool();
                    break;
                case 7:
                    message.disable_client_cursor = reader.bool();
                    break;
                case 8:
                    message.disable_intel_hardware_encoding = reader.bool();
                    break;
                case 9:
                    message.disable_amd_hardware_encoding = reader.bool();
                    break;
                case 10:
                    message.disable_nvidia_hardware_encoding = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStreamingClientCaps message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStreamingClientCaps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStreamingClientCaps} CStreamingClientCaps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingClientCaps.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStreamingClientCaps message.
         * @function verify
         * @memberof CStreamingClientCaps
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStreamingClientCaps.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.system_info != null && message.hasOwnProperty("system_info"))
                if (!$util.isString(message.system_info))
                    return "system_info: string expected";
            if (message.system_can_suspend != null && message.hasOwnProperty("system_can_suspend"))
                if (typeof message.system_can_suspend !== "boolean")
                    return "system_can_suspend: boolean expected";
            if (message.maximum_decode_bitrate_kbps != null && message.hasOwnProperty("maximum_decode_bitrate_kbps"))
                if (!$util.isInteger(message.maximum_decode_bitrate_kbps))
                    return "maximum_decode_bitrate_kbps: integer expected";
            if (message.maximum_burst_bitrate_kbps != null && message.hasOwnProperty("maximum_burst_bitrate_kbps"))
                if (!$util.isInteger(message.maximum_burst_bitrate_kbps))
                    return "maximum_burst_bitrate_kbps: integer expected";
            if (message.supports_video_hevc != null && message.hasOwnProperty("supports_video_hevc"))
                if (typeof message.supports_video_hevc !== "boolean")
                    return "supports_video_hevc: boolean expected";
            if (message.disable_steam_store != null && message.hasOwnProperty("disable_steam_store"))
                if (typeof message.disable_steam_store !== "boolean")
                    return "disable_steam_store: boolean expected";
            if (message.disable_client_cursor != null && message.hasOwnProperty("disable_client_cursor"))
                if (typeof message.disable_client_cursor !== "boolean")
                    return "disable_client_cursor: boolean expected";
            if (message.disable_intel_hardware_encoding != null && message.hasOwnProperty("disable_intel_hardware_encoding"))
                if (typeof message.disable_intel_hardware_encoding !== "boolean")
                    return "disable_intel_hardware_encoding: boolean expected";
            if (message.disable_amd_hardware_encoding != null && message.hasOwnProperty("disable_amd_hardware_encoding"))
                if (typeof message.disable_amd_hardware_encoding !== "boolean")
                    return "disable_amd_hardware_encoding: boolean expected";
            if (message.disable_nvidia_hardware_encoding != null && message.hasOwnProperty("disable_nvidia_hardware_encoding"))
                if (typeof message.disable_nvidia_hardware_encoding !== "boolean")
                    return "disable_nvidia_hardware_encoding: boolean expected";
            return null;
        };
    
        /**
         * Creates a CStreamingClientCaps message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStreamingClientCaps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStreamingClientCaps} CStreamingClientCaps
         */
        CStreamingClientCaps.fromObject = function fromObject(object) {
            if (object instanceof $root.CStreamingClientCaps)
                return object;
            var message = new $root.CStreamingClientCaps();
            if (object.system_info != null)
                message.system_info = String(object.system_info);
            if (object.system_can_suspend != null)
                message.system_can_suspend = Boolean(object.system_can_suspend);
            if (object.maximum_decode_bitrate_kbps != null)
                message.maximum_decode_bitrate_kbps = object.maximum_decode_bitrate_kbps | 0;
            if (object.maximum_burst_bitrate_kbps != null)
                message.maximum_burst_bitrate_kbps = object.maximum_burst_bitrate_kbps | 0;
            if (object.supports_video_hevc != null)
                message.supports_video_hevc = Boolean(object.supports_video_hevc);
            if (object.disable_steam_store != null)
                message.disable_steam_store = Boolean(object.disable_steam_store);
            if (object.disable_client_cursor != null)
                message.disable_client_cursor = Boolean(object.disable_client_cursor);
            if (object.disable_intel_hardware_encoding != null)
                message.disable_intel_hardware_encoding = Boolean(object.disable_intel_hardware_encoding);
            if (object.disable_amd_hardware_encoding != null)
                message.disable_amd_hardware_encoding = Boolean(object.disable_amd_hardware_encoding);
            if (object.disable_nvidia_hardware_encoding != null)
                message.disable_nvidia_hardware_encoding = Boolean(object.disable_nvidia_hardware_encoding);
            return message;
        };
    
        /**
         * Creates a plain object from a CStreamingClientCaps message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStreamingClientCaps
         * @static
         * @param {CStreamingClientCaps} message CStreamingClientCaps
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStreamingClientCaps.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.system_info = "";
                object.system_can_suspend = false;
                object.maximum_decode_bitrate_kbps = 0;
                object.maximum_burst_bitrate_kbps = 0;
                object.supports_video_hevc = false;
                object.disable_steam_store = false;
                object.disable_client_cursor = false;
                object.disable_intel_hardware_encoding = false;
                object.disable_amd_hardware_encoding = false;
                object.disable_nvidia_hardware_encoding = false;
            }
            if (message.system_info != null && message.hasOwnProperty("system_info"))
                object.system_info = message.system_info;
            if (message.system_can_suspend != null && message.hasOwnProperty("system_can_suspend"))
                object.system_can_suspend = message.system_can_suspend;
            if (message.maximum_decode_bitrate_kbps != null && message.hasOwnProperty("maximum_decode_bitrate_kbps"))
                object.maximum_decode_bitrate_kbps = message.maximum_decode_bitrate_kbps;
            if (message.maximum_burst_bitrate_kbps != null && message.hasOwnProperty("maximum_burst_bitrate_kbps"))
                object.maximum_burst_bitrate_kbps = message.maximum_burst_bitrate_kbps;
            if (message.supports_video_hevc != null && message.hasOwnProperty("supports_video_hevc"))
                object.supports_video_hevc = message.supports_video_hevc;
            if (message.disable_steam_store != null && message.hasOwnProperty("disable_steam_store"))
                object.disable_steam_store = message.disable_steam_store;
            if (message.disable_client_cursor != null && message.hasOwnProperty("disable_client_cursor"))
                object.disable_client_cursor = message.disable_client_cursor;
            if (message.disable_intel_hardware_encoding != null && message.hasOwnProperty("disable_intel_hardware_encoding"))
                object.disable_intel_hardware_encoding = message.disable_intel_hardware_encoding;
            if (message.disable_amd_hardware_encoding != null && message.hasOwnProperty("disable_amd_hardware_encoding"))
                object.disable_amd_hardware_encoding = message.disable_amd_hardware_encoding;
            if (message.disable_nvidia_hardware_encoding != null && message.hasOwnProperty("disable_nvidia_hardware_encoding"))
                object.disable_nvidia_hardware_encoding = message.disable_nvidia_hardware_encoding;
            return object;
        };
    
        /**
         * Converts this CStreamingClientCaps to JSON.
         * @function toJSON
         * @memberof CStreamingClientCaps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStreamingClientCaps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStreamingClientCaps;
    })();
    
    $root.CStreamingClientConfig = (function() {
    
        /**
         * Properties of a CStreamingClientConfig.
         * @exports ICStreamingClientConfig
         * @interface ICStreamingClientConfig
         * @property {EStreamQualityPreference|null} [quality] CStreamingClientConfig quality
         * @property {number|null} [maximum_resolution_x] CStreamingClientConfig maximum_resolution_x
         * @property {number|null} [maximum_resolution_y] CStreamingClientConfig maximum_resolution_y
         * @property {number|null} [maximum_framerate_numerator] CStreamingClientConfig maximum_framerate_numerator
         * @property {number|null} [maximum_framerate_denominator] CStreamingClientConfig maximum_framerate_denominator
         * @property {number|null} [maximum_bitrate_kbps] CStreamingClientConfig maximum_bitrate_kbps
         * @property {boolean|null} [enable_hardware_decoding] CStreamingClientConfig enable_hardware_decoding
         * @property {boolean|null} [enable_performance_overlay] CStreamingClientConfig enable_performance_overlay
         * @property {boolean|null} [enable_video_streaming] CStreamingClientConfig enable_video_streaming
         * @property {boolean|null} [enable_audio_streaming] CStreamingClientConfig enable_audio_streaming
         * @property {boolean|null} [enable_input_streaming] CStreamingClientConfig enable_input_streaming
         * @property {number|null} [audio_channels] CStreamingClientConfig audio_channels
         * @property {boolean|null} [enable_video_hevc] CStreamingClientConfig enable_video_hevc
         */
    
        /**
         * Constructs a new CStreamingClientConfig.
         * @exports CStreamingClientConfig
         * @classdesc Represents a CStreamingClientConfig.
         * @implements ICStreamingClientConfig
         * @constructor
         * @param {ICStreamingClientConfig=} [properties] Properties to set
         */
        function CStreamingClientConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStreamingClientConfig quality.
         * @member {EStreamQualityPreference} quality
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.quality = 2;
    
        /**
         * CStreamingClientConfig maximum_resolution_x.
         * @member {number} maximum_resolution_x
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.maximum_resolution_x = 0;
    
        /**
         * CStreamingClientConfig maximum_resolution_y.
         * @member {number} maximum_resolution_y
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.maximum_resolution_y = 0;
    
        /**
         * CStreamingClientConfig maximum_framerate_numerator.
         * @member {number} maximum_framerate_numerator
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.maximum_framerate_numerator = 0;
    
        /**
         * CStreamingClientConfig maximum_framerate_denominator.
         * @member {number} maximum_framerate_denominator
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.maximum_framerate_denominator = 0;
    
        /**
         * CStreamingClientConfig maximum_bitrate_kbps.
         * @member {number} maximum_bitrate_kbps
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.maximum_bitrate_kbps = -1;
    
        /**
         * CStreamingClientConfig enable_hardware_decoding.
         * @member {boolean} enable_hardware_decoding
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.enable_hardware_decoding = true;
    
        /**
         * CStreamingClientConfig enable_performance_overlay.
         * @member {boolean} enable_performance_overlay
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.enable_performance_overlay = false;
    
        /**
         * CStreamingClientConfig enable_video_streaming.
         * @member {boolean} enable_video_streaming
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.enable_video_streaming = true;
    
        /**
         * CStreamingClientConfig enable_audio_streaming.
         * @member {boolean} enable_audio_streaming
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.enable_audio_streaming = true;
    
        /**
         * CStreamingClientConfig enable_input_streaming.
         * @member {boolean} enable_input_streaming
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.enable_input_streaming = true;
    
        /**
         * CStreamingClientConfig audio_channels.
         * @member {number} audio_channels
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.audio_channels = 2;
    
        /**
         * CStreamingClientConfig enable_video_hevc.
         * @member {boolean} enable_video_hevc
         * @memberof CStreamingClientConfig
         * @instance
         */
        CStreamingClientConfig.prototype.enable_video_hevc = false;
    
        /**
         * Creates a new CStreamingClientConfig instance using the specified properties.
         * @function create
         * @memberof CStreamingClientConfig
         * @static
         * @param {ICStreamingClientConfig=} [properties] Properties to set
         * @returns {CStreamingClientConfig} CStreamingClientConfig instance
         */
        CStreamingClientConfig.create = function create(properties) {
            return new CStreamingClientConfig(properties);
        };
    
        /**
         * Encodes the specified CStreamingClientConfig message. Does not implicitly {@link CStreamingClientConfig.verify|verify} messages.
         * @function encode
         * @memberof CStreamingClientConfig
         * @static
         * @param {ICStreamingClientConfig} message CStreamingClientConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingClientConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.quality != null && message.hasOwnProperty("quality"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.quality);
            if (message.maximum_resolution_x != null && message.hasOwnProperty("maximum_resolution_x"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maximum_resolution_x);
            if (message.maximum_resolution_y != null && message.hasOwnProperty("maximum_resolution_y"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.maximum_resolution_y);
            if (message.maximum_framerate_numerator != null && message.hasOwnProperty("maximum_framerate_numerator"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maximum_framerate_numerator);
            if (message.maximum_framerate_denominator != null && message.hasOwnProperty("maximum_framerate_denominator"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.maximum_framerate_denominator);
            if (message.maximum_bitrate_kbps != null && message.hasOwnProperty("maximum_bitrate_kbps"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.maximum_bitrate_kbps);
            if (message.enable_hardware_decoding != null && message.hasOwnProperty("enable_hardware_decoding"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.enable_hardware_decoding);
            if (message.enable_performance_overlay != null && message.hasOwnProperty("enable_performance_overlay"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.enable_performance_overlay);
            if (message.enable_video_streaming != null && message.hasOwnProperty("enable_video_streaming"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.enable_video_streaming);
            if (message.enable_audio_streaming != null && message.hasOwnProperty("enable_audio_streaming"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.enable_audio_streaming);
            if (message.enable_input_streaming != null && message.hasOwnProperty("enable_input_streaming"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.enable_input_streaming);
            if (message.audio_channels != null && message.hasOwnProperty("audio_channels"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.audio_channels);
            if (message.enable_video_hevc != null && message.hasOwnProperty("enable_video_hevc"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.enable_video_hevc);
            return writer;
        };
    
        /**
         * Encodes the specified CStreamingClientConfig message, length delimited. Does not implicitly {@link CStreamingClientConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStreamingClientConfig
         * @static
         * @param {ICStreamingClientConfig} message CStreamingClientConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingClientConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStreamingClientConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CStreamingClientConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStreamingClientConfig} CStreamingClientConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingClientConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStreamingClientConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.quality = reader.int32();
                    break;
                case 2:
                    message.maximum_resolution_x = reader.uint32();
                    break;
                case 3:
                    message.maximum_resolution_y = reader.uint32();
                    break;
                case 4:
                    message.maximum_framerate_numerator = reader.uint32();
                    break;
                case 5:
                    message.maximum_framerate_denominator = reader.uint32();
                    break;
                case 6:
                    message.maximum_bitrate_kbps = reader.int32();
                    break;
                case 7:
                    message.enable_hardware_decoding = reader.bool();
                    break;
                case 8:
                    message.enable_performance_overlay = reader.bool();
                    break;
                case 9:
                    message.enable_video_streaming = reader.bool();
                    break;
                case 10:
                    message.enable_audio_streaming = reader.bool();
                    break;
                case 11:
                    message.enable_input_streaming = reader.bool();
                    break;
                case 12:
                    message.audio_channels = reader.int32();
                    break;
                case 13:
                    message.enable_video_hevc = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStreamingClientConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStreamingClientConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStreamingClientConfig} CStreamingClientConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingClientConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStreamingClientConfig message.
         * @function verify
         * @memberof CStreamingClientConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStreamingClientConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.quality != null && message.hasOwnProperty("quality"))
                switch (message.quality) {
                default:
                    return "quality: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.maximum_resolution_x != null && message.hasOwnProperty("maximum_resolution_x"))
                if (!$util.isInteger(message.maximum_resolution_x))
                    return "maximum_resolution_x: integer expected";
            if (message.maximum_resolution_y != null && message.hasOwnProperty("maximum_resolution_y"))
                if (!$util.isInteger(message.maximum_resolution_y))
                    return "maximum_resolution_y: integer expected";
            if (message.maximum_framerate_numerator != null && message.hasOwnProperty("maximum_framerate_numerator"))
                if (!$util.isInteger(message.maximum_framerate_numerator))
                    return "maximum_framerate_numerator: integer expected";
            if (message.maximum_framerate_denominator != null && message.hasOwnProperty("maximum_framerate_denominator"))
                if (!$util.isInteger(message.maximum_framerate_denominator))
                    return "maximum_framerate_denominator: integer expected";
            if (message.maximum_bitrate_kbps != null && message.hasOwnProperty("maximum_bitrate_kbps"))
                if (!$util.isInteger(message.maximum_bitrate_kbps))
                    return "maximum_bitrate_kbps: integer expected";
            if (message.enable_hardware_decoding != null && message.hasOwnProperty("enable_hardware_decoding"))
                if (typeof message.enable_hardware_decoding !== "boolean")
                    return "enable_hardware_decoding: boolean expected";
            if (message.enable_performance_overlay != null && message.hasOwnProperty("enable_performance_overlay"))
                if (typeof message.enable_performance_overlay !== "boolean")
                    return "enable_performance_overlay: boolean expected";
            if (message.enable_video_streaming != null && message.hasOwnProperty("enable_video_streaming"))
                if (typeof message.enable_video_streaming !== "boolean")
                    return "enable_video_streaming: boolean expected";
            if (message.enable_audio_streaming != null && message.hasOwnProperty("enable_audio_streaming"))
                if (typeof message.enable_audio_streaming !== "boolean")
                    return "enable_audio_streaming: boolean expected";
            if (message.enable_input_streaming != null && message.hasOwnProperty("enable_input_streaming"))
                if (typeof message.enable_input_streaming !== "boolean")
                    return "enable_input_streaming: boolean expected";
            if (message.audio_channels != null && message.hasOwnProperty("audio_channels"))
                if (!$util.isInteger(message.audio_channels))
                    return "audio_channels: integer expected";
            if (message.enable_video_hevc != null && message.hasOwnProperty("enable_video_hevc"))
                if (typeof message.enable_video_hevc !== "boolean")
                    return "enable_video_hevc: boolean expected";
            return null;
        };
    
        /**
         * Creates a CStreamingClientConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStreamingClientConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStreamingClientConfig} CStreamingClientConfig
         */
        CStreamingClientConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CStreamingClientConfig)
                return object;
            var message = new $root.CStreamingClientConfig();
            switch (object.quality) {
            case "k_EStreamQualityFast":
            case 1:
                message.quality = 1;
                break;
            case "k_EStreamQualityBalanced":
            case 2:
                message.quality = 2;
                break;
            case "k_EStreamQualityBeautiful":
            case 3:
                message.quality = 3;
                break;
            }
            if (object.maximum_resolution_x != null)
                message.maximum_resolution_x = object.maximum_resolution_x >>> 0;
            if (object.maximum_resolution_y != null)
                message.maximum_resolution_y = object.maximum_resolution_y >>> 0;
            if (object.maximum_framerate_numerator != null)
                message.maximum_framerate_numerator = object.maximum_framerate_numerator >>> 0;
            if (object.maximum_framerate_denominator != null)
                message.maximum_framerate_denominator = object.maximum_framerate_denominator >>> 0;
            if (object.maximum_bitrate_kbps != null)
                message.maximum_bitrate_kbps = object.maximum_bitrate_kbps | 0;
            if (object.enable_hardware_decoding != null)
                message.enable_hardware_decoding = Boolean(object.enable_hardware_decoding);
            if (object.enable_performance_overlay != null)
                message.enable_performance_overlay = Boolean(object.enable_performance_overlay);
            if (object.enable_video_streaming != null)
                message.enable_video_streaming = Boolean(object.enable_video_streaming);
            if (object.enable_audio_streaming != null)
                message.enable_audio_streaming = Boolean(object.enable_audio_streaming);
            if (object.enable_input_streaming != null)
                message.enable_input_streaming = Boolean(object.enable_input_streaming);
            if (object.audio_channels != null)
                message.audio_channels = object.audio_channels | 0;
            if (object.enable_video_hevc != null)
                message.enable_video_hevc = Boolean(object.enable_video_hevc);
            return message;
        };
    
        /**
         * Creates a plain object from a CStreamingClientConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStreamingClientConfig
         * @static
         * @param {CStreamingClientConfig} message CStreamingClientConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStreamingClientConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.quality = options.enums === String ? "k_EStreamQualityBalanced" : 2;
                object.maximum_resolution_x = 0;
                object.maximum_resolution_y = 0;
                object.maximum_framerate_numerator = 0;
                object.maximum_framerate_denominator = 0;
                object.maximum_bitrate_kbps = -1;
                object.enable_hardware_decoding = true;
                object.enable_performance_overlay = false;
                object.enable_video_streaming = true;
                object.enable_audio_streaming = true;
                object.enable_input_streaming = true;
                object.audio_channels = 2;
                object.enable_video_hevc = false;
            }
            if (message.quality != null && message.hasOwnProperty("quality"))
                object.quality = options.enums === String ? $root.EStreamQualityPreference[message.quality] : message.quality;
            if (message.maximum_resolution_x != null && message.hasOwnProperty("maximum_resolution_x"))
                object.maximum_resolution_x = message.maximum_resolution_x;
            if (message.maximum_resolution_y != null && message.hasOwnProperty("maximum_resolution_y"))
                object.maximum_resolution_y = message.maximum_resolution_y;
            if (message.maximum_framerate_numerator != null && message.hasOwnProperty("maximum_framerate_numerator"))
                object.maximum_framerate_numerator = message.maximum_framerate_numerator;
            if (message.maximum_framerate_denominator != null && message.hasOwnProperty("maximum_framerate_denominator"))
                object.maximum_framerate_denominator = message.maximum_framerate_denominator;
            if (message.maximum_bitrate_kbps != null && message.hasOwnProperty("maximum_bitrate_kbps"))
                object.maximum_bitrate_kbps = message.maximum_bitrate_kbps;
            if (message.enable_hardware_decoding != null && message.hasOwnProperty("enable_hardware_decoding"))
                object.enable_hardware_decoding = message.enable_hardware_decoding;
            if (message.enable_performance_overlay != null && message.hasOwnProperty("enable_performance_overlay"))
                object.enable_performance_overlay = message.enable_performance_overlay;
            if (message.enable_video_streaming != null && message.hasOwnProperty("enable_video_streaming"))
                object.enable_video_streaming = message.enable_video_streaming;
            if (message.enable_audio_streaming != null && message.hasOwnProperty("enable_audio_streaming"))
                object.enable_audio_streaming = message.enable_audio_streaming;
            if (message.enable_input_streaming != null && message.hasOwnProperty("enable_input_streaming"))
                object.enable_input_streaming = message.enable_input_streaming;
            if (message.audio_channels != null && message.hasOwnProperty("audio_channels"))
                object.audio_channels = message.audio_channels;
            if (message.enable_video_hevc != null && message.hasOwnProperty("enable_video_hevc"))
                object.enable_video_hevc = message.enable_video_hevc;
            return object;
        };
    
        /**
         * Converts this CStreamingClientConfig to JSON.
         * @function toJSON
         * @memberof CStreamingClientConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStreamingClientConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStreamingClientConfig;
    })();
    
    $root.CStreamingServerConfig = (function() {
    
        /**
         * Properties of a CStreamingServerConfig.
         * @exports ICStreamingServerConfig
         * @interface ICStreamingServerConfig
         * @property {boolean|null} [change_desktop_resolution] CStreamingServerConfig change_desktop_resolution
         * @property {boolean|null} [dynamically_adjust_resolution] CStreamingServerConfig dynamically_adjust_resolution
         * @property {boolean|null} [enable_capture_nvfbc] CStreamingServerConfig enable_capture_nvfbc
         * @property {boolean|null} [enable_hardware_encoding_nvidia] CStreamingServerConfig enable_hardware_encoding_nvidia
         * @property {boolean|null} [enable_hardware_encoding_amd] CStreamingServerConfig enable_hardware_encoding_amd
         * @property {boolean|null} [enable_hardware_encoding_intel] CStreamingServerConfig enable_hardware_encoding_intel
         * @property {number|null} [software_encoding_threads] CStreamingServerConfig software_encoding_threads
         * @property {boolean|null} [enable_traffic_priority] CStreamingServerConfig enable_traffic_priority
         * @property {EStreamHostPlayAudioPreference|null} [host_play_audio] CStreamingServerConfig host_play_audio
         */
    
        /**
         * Constructs a new CStreamingServerConfig.
         * @exports CStreamingServerConfig
         * @classdesc Represents a CStreamingServerConfig.
         * @implements ICStreamingServerConfig
         * @constructor
         * @param {ICStreamingServerConfig=} [properties] Properties to set
         */
        function CStreamingServerConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStreamingServerConfig change_desktop_resolution.
         * @member {boolean} change_desktop_resolution
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.change_desktop_resolution = false;
    
        /**
         * CStreamingServerConfig dynamically_adjust_resolution.
         * @member {boolean} dynamically_adjust_resolution
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.dynamically_adjust_resolution = false;
    
        /**
         * CStreamingServerConfig enable_capture_nvfbc.
         * @member {boolean} enable_capture_nvfbc
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.enable_capture_nvfbc = false;
    
        /**
         * CStreamingServerConfig enable_hardware_encoding_nvidia.
         * @member {boolean} enable_hardware_encoding_nvidia
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.enable_hardware_encoding_nvidia = false;
    
        /**
         * CStreamingServerConfig enable_hardware_encoding_amd.
         * @member {boolean} enable_hardware_encoding_amd
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.enable_hardware_encoding_amd = false;
    
        /**
         * CStreamingServerConfig enable_hardware_encoding_intel.
         * @member {boolean} enable_hardware_encoding_intel
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.enable_hardware_encoding_intel = false;
    
        /**
         * CStreamingServerConfig software_encoding_threads.
         * @member {number} software_encoding_threads
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.software_encoding_threads = 0;
    
        /**
         * CStreamingServerConfig enable_traffic_priority.
         * @member {boolean} enable_traffic_priority
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.enable_traffic_priority = false;
    
        /**
         * CStreamingServerConfig host_play_audio.
         * @member {EStreamHostPlayAudioPreference} host_play_audio
         * @memberof CStreamingServerConfig
         * @instance
         */
        CStreamingServerConfig.prototype.host_play_audio = 0;
    
        /**
         * Creates a new CStreamingServerConfig instance using the specified properties.
         * @function create
         * @memberof CStreamingServerConfig
         * @static
         * @param {ICStreamingServerConfig=} [properties] Properties to set
         * @returns {CStreamingServerConfig} CStreamingServerConfig instance
         */
        CStreamingServerConfig.create = function create(properties) {
            return new CStreamingServerConfig(properties);
        };
    
        /**
         * Encodes the specified CStreamingServerConfig message. Does not implicitly {@link CStreamingServerConfig.verify|verify} messages.
         * @function encode
         * @memberof CStreamingServerConfig
         * @static
         * @param {ICStreamingServerConfig} message CStreamingServerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingServerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.change_desktop_resolution != null && message.hasOwnProperty("change_desktop_resolution"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.change_desktop_resolution);
            if (message.dynamically_adjust_resolution != null && message.hasOwnProperty("dynamically_adjust_resolution"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.dynamically_adjust_resolution);
            if (message.enable_capture_nvfbc != null && message.hasOwnProperty("enable_capture_nvfbc"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enable_capture_nvfbc);
            if (message.enable_hardware_encoding_nvidia != null && message.hasOwnProperty("enable_hardware_encoding_nvidia"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enable_hardware_encoding_nvidia);
            if (message.enable_hardware_encoding_amd != null && message.hasOwnProperty("enable_hardware_encoding_amd"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.enable_hardware_encoding_amd);
            if (message.enable_hardware_encoding_intel != null && message.hasOwnProperty("enable_hardware_encoding_intel"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.enable_hardware_encoding_intel);
            if (message.software_encoding_threads != null && message.hasOwnProperty("software_encoding_threads"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.software_encoding_threads);
            if (message.enable_traffic_priority != null && message.hasOwnProperty("enable_traffic_priority"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.enable_traffic_priority);
            if (message.host_play_audio != null && message.hasOwnProperty("host_play_audio"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.host_play_audio);
            return writer;
        };
    
        /**
         * Encodes the specified CStreamingServerConfig message, length delimited. Does not implicitly {@link CStreamingServerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStreamingServerConfig
         * @static
         * @param {ICStreamingServerConfig} message CStreamingServerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingServerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStreamingServerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CStreamingServerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStreamingServerConfig} CStreamingServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingServerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStreamingServerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.change_desktop_resolution = reader.bool();
                    break;
                case 2:
                    message.dynamically_adjust_resolution = reader.bool();
                    break;
                case 3:
                    message.enable_capture_nvfbc = reader.bool();
                    break;
                case 4:
                    message.enable_hardware_encoding_nvidia = reader.bool();
                    break;
                case 5:
                    message.enable_hardware_encoding_amd = reader.bool();
                    break;
                case 6:
                    message.enable_hardware_encoding_intel = reader.bool();
                    break;
                case 7:
                    message.software_encoding_threads = reader.int32();
                    break;
                case 8:
                    message.enable_traffic_priority = reader.bool();
                    break;
                case 9:
                    message.host_play_audio = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStreamingServerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStreamingServerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStreamingServerConfig} CStreamingServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingServerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStreamingServerConfig message.
         * @function verify
         * @memberof CStreamingServerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStreamingServerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.change_desktop_resolution != null && message.hasOwnProperty("change_desktop_resolution"))
                if (typeof message.change_desktop_resolution !== "boolean")
                    return "change_desktop_resolution: boolean expected";
            if (message.dynamically_adjust_resolution != null && message.hasOwnProperty("dynamically_adjust_resolution"))
                if (typeof message.dynamically_adjust_resolution !== "boolean")
                    return "dynamically_adjust_resolution: boolean expected";
            if (message.enable_capture_nvfbc != null && message.hasOwnProperty("enable_capture_nvfbc"))
                if (typeof message.enable_capture_nvfbc !== "boolean")
                    return "enable_capture_nvfbc: boolean expected";
            if (message.enable_hardware_encoding_nvidia != null && message.hasOwnProperty("enable_hardware_encoding_nvidia"))
                if (typeof message.enable_hardware_encoding_nvidia !== "boolean")
                    return "enable_hardware_encoding_nvidia: boolean expected";
            if (message.enable_hardware_encoding_amd != null && message.hasOwnProperty("enable_hardware_encoding_amd"))
                if (typeof message.enable_hardware_encoding_amd !== "boolean")
                    return "enable_hardware_encoding_amd: boolean expected";
            if (message.enable_hardware_encoding_intel != null && message.hasOwnProperty("enable_hardware_encoding_intel"))
                if (typeof message.enable_hardware_encoding_intel !== "boolean")
                    return "enable_hardware_encoding_intel: boolean expected";
            if (message.software_encoding_threads != null && message.hasOwnProperty("software_encoding_threads"))
                if (!$util.isInteger(message.software_encoding_threads))
                    return "software_encoding_threads: integer expected";
            if (message.enable_traffic_priority != null && message.hasOwnProperty("enable_traffic_priority"))
                if (typeof message.enable_traffic_priority !== "boolean")
                    return "enable_traffic_priority: boolean expected";
            if (message.host_play_audio != null && message.hasOwnProperty("host_play_audio"))
                switch (message.host_play_audio) {
                default:
                    return "host_play_audio: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CStreamingServerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStreamingServerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStreamingServerConfig} CStreamingServerConfig
         */
        CStreamingServerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CStreamingServerConfig)
                return object;
            var message = new $root.CStreamingServerConfig();
            if (object.change_desktop_resolution != null)
                message.change_desktop_resolution = Boolean(object.change_desktop_resolution);
            if (object.dynamically_adjust_resolution != null)
                message.dynamically_adjust_resolution = Boolean(object.dynamically_adjust_resolution);
            if (object.enable_capture_nvfbc != null)
                message.enable_capture_nvfbc = Boolean(object.enable_capture_nvfbc);
            if (object.enable_hardware_encoding_nvidia != null)
                message.enable_hardware_encoding_nvidia = Boolean(object.enable_hardware_encoding_nvidia);
            if (object.enable_hardware_encoding_amd != null)
                message.enable_hardware_encoding_amd = Boolean(object.enable_hardware_encoding_amd);
            if (object.enable_hardware_encoding_intel != null)
                message.enable_hardware_encoding_intel = Boolean(object.enable_hardware_encoding_intel);
            if (object.software_encoding_threads != null)
                message.software_encoding_threads = object.software_encoding_threads | 0;
            if (object.enable_traffic_priority != null)
                message.enable_traffic_priority = Boolean(object.enable_traffic_priority);
            switch (object.host_play_audio) {
            case "k_EStreamHostPlayAudioDefault":
            case 0:
                message.host_play_audio = 0;
                break;
            case "k_EStreamHostPlayAudioAlways":
            case 1:
                message.host_play_audio = 1;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CStreamingServerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStreamingServerConfig
         * @static
         * @param {CStreamingServerConfig} message CStreamingServerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStreamingServerConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.change_desktop_resolution = false;
                object.dynamically_adjust_resolution = false;
                object.enable_capture_nvfbc = false;
                object.enable_hardware_encoding_nvidia = false;
                object.enable_hardware_encoding_amd = false;
                object.enable_hardware_encoding_intel = false;
                object.software_encoding_threads = 0;
                object.enable_traffic_priority = false;
                object.host_play_audio = options.enums === String ? "k_EStreamHostPlayAudioDefault" : 0;
            }
            if (message.change_desktop_resolution != null && message.hasOwnProperty("change_desktop_resolution"))
                object.change_desktop_resolution = message.change_desktop_resolution;
            if (message.dynamically_adjust_resolution != null && message.hasOwnProperty("dynamically_adjust_resolution"))
                object.dynamically_adjust_resolution = message.dynamically_adjust_resolution;
            if (message.enable_capture_nvfbc != null && message.hasOwnProperty("enable_capture_nvfbc"))
                object.enable_capture_nvfbc = message.enable_capture_nvfbc;
            if (message.enable_hardware_encoding_nvidia != null && message.hasOwnProperty("enable_hardware_encoding_nvidia"))
                object.enable_hardware_encoding_nvidia = message.enable_hardware_encoding_nvidia;
            if (message.enable_hardware_encoding_amd != null && message.hasOwnProperty("enable_hardware_encoding_amd"))
                object.enable_hardware_encoding_amd = message.enable_hardware_encoding_amd;
            if (message.enable_hardware_encoding_intel != null && message.hasOwnProperty("enable_hardware_encoding_intel"))
                object.enable_hardware_encoding_intel = message.enable_hardware_encoding_intel;
            if (message.software_encoding_threads != null && message.hasOwnProperty("software_encoding_threads"))
                object.software_encoding_threads = message.software_encoding_threads;
            if (message.enable_traffic_priority != null && message.hasOwnProperty("enable_traffic_priority"))
                object.enable_traffic_priority = message.enable_traffic_priority;
            if (message.host_play_audio != null && message.hasOwnProperty("host_play_audio"))
                object.host_play_audio = options.enums === String ? $root.EStreamHostPlayAudioPreference[message.host_play_audio] : message.host_play_audio;
            return object;
        };
    
        /**
         * Converts this CStreamingServerConfig to JSON.
         * @function toJSON
         * @memberof CStreamingServerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStreamingServerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStreamingServerConfig;
    })();
    
    $root.CNegotiatedConfig = (function() {
    
        /**
         * Properties of a CNegotiatedConfig.
         * @exports ICNegotiatedConfig
         * @interface ICNegotiatedConfig
         * @property {boolean|null} [reliable_data] CNegotiatedConfig reliable_data
         * @property {EStreamAudioCodec|null} [selected_audio_codec] CNegotiatedConfig selected_audio_codec
         * @property {EStreamVideoCodec|null} [selected_video_codec] CNegotiatedConfig selected_video_codec
         * @property {Array.<ICStreamVideoMode>|null} [available_video_modes] CNegotiatedConfig available_video_modes
         * @property {boolean|null} [enable_remote_hid] CNegotiatedConfig enable_remote_hid
         * @property {boolean|null} [enable_touch_input] CNegotiatedConfig enable_touch_input
         */
    
        /**
         * Constructs a new CNegotiatedConfig.
         * @exports CNegotiatedConfig
         * @classdesc Represents a CNegotiatedConfig.
         * @implements ICNegotiatedConfig
         * @constructor
         * @param {ICNegotiatedConfig=} [properties] Properties to set
         */
        function CNegotiatedConfig(properties) {
            this.available_video_modes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNegotiatedConfig reliable_data.
         * @member {boolean} reliable_data
         * @memberof CNegotiatedConfig
         * @instance
         */
        CNegotiatedConfig.prototype.reliable_data = false;
    
        /**
         * CNegotiatedConfig selected_audio_codec.
         * @member {EStreamAudioCodec} selected_audio_codec
         * @memberof CNegotiatedConfig
         * @instance
         */
        CNegotiatedConfig.prototype.selected_audio_codec = 0;
    
        /**
         * CNegotiatedConfig selected_video_codec.
         * @member {EStreamVideoCodec} selected_video_codec
         * @memberof CNegotiatedConfig
         * @instance
         */
        CNegotiatedConfig.prototype.selected_video_codec = 0;
    
        /**
         * CNegotiatedConfig available_video_modes.
         * @member {Array.<ICStreamVideoMode>} available_video_modes
         * @memberof CNegotiatedConfig
         * @instance
         */
        CNegotiatedConfig.prototype.available_video_modes = $util.emptyArray;
    
        /**
         * CNegotiatedConfig enable_remote_hid.
         * @member {boolean} enable_remote_hid
         * @memberof CNegotiatedConfig
         * @instance
         */
        CNegotiatedConfig.prototype.enable_remote_hid = false;
    
        /**
         * CNegotiatedConfig enable_touch_input.
         * @member {boolean} enable_touch_input
         * @memberof CNegotiatedConfig
         * @instance
         */
        CNegotiatedConfig.prototype.enable_touch_input = false;
    
        /**
         * Creates a new CNegotiatedConfig instance using the specified properties.
         * @function create
         * @memberof CNegotiatedConfig
         * @static
         * @param {ICNegotiatedConfig=} [properties] Properties to set
         * @returns {CNegotiatedConfig} CNegotiatedConfig instance
         */
        CNegotiatedConfig.create = function create(properties) {
            return new CNegotiatedConfig(properties);
        };
    
        /**
         * Encodes the specified CNegotiatedConfig message. Does not implicitly {@link CNegotiatedConfig.verify|verify} messages.
         * @function encode
         * @memberof CNegotiatedConfig
         * @static
         * @param {ICNegotiatedConfig} message CNegotiatedConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNegotiatedConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reliable_data != null && message.hasOwnProperty("reliable_data"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.reliable_data);
            if (message.selected_audio_codec != null && message.hasOwnProperty("selected_audio_codec"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.selected_audio_codec);
            if (message.selected_video_codec != null && message.hasOwnProperty("selected_video_codec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.selected_video_codec);
            if (message.available_video_modes != null && message.available_video_modes.length)
                for (var i = 0; i < message.available_video_modes.length; ++i)
                    $root.CStreamVideoMode.encode(message.available_video_modes[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.enable_remote_hid != null && message.hasOwnProperty("enable_remote_hid"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.enable_remote_hid);
            if (message.enable_touch_input != null && message.hasOwnProperty("enable_touch_input"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.enable_touch_input);
            return writer;
        };
    
        /**
         * Encodes the specified CNegotiatedConfig message, length delimited. Does not implicitly {@link CNegotiatedConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNegotiatedConfig
         * @static
         * @param {ICNegotiatedConfig} message CNegotiatedConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNegotiatedConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNegotiatedConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CNegotiatedConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNegotiatedConfig} CNegotiatedConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNegotiatedConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNegotiatedConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reliable_data = reader.bool();
                    break;
                case 2:
                    message.selected_audio_codec = reader.int32();
                    break;
                case 3:
                    message.selected_video_codec = reader.int32();
                    break;
                case 4:
                    if (!(message.available_video_modes && message.available_video_modes.length))
                        message.available_video_modes = [];
                    message.available_video_modes.push($root.CStreamVideoMode.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enable_remote_hid = reader.bool();
                    break;
                case 6:
                    message.enable_touch_input = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CNegotiatedConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNegotiatedConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNegotiatedConfig} CNegotiatedConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNegotiatedConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNegotiatedConfig message.
         * @function verify
         * @memberof CNegotiatedConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNegotiatedConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reliable_data != null && message.hasOwnProperty("reliable_data"))
                if (typeof message.reliable_data !== "boolean")
                    return "reliable_data: boolean expected";
            if (message.selected_audio_codec != null && message.hasOwnProperty("selected_audio_codec"))
                switch (message.selected_audio_codec) {
                default:
                    return "selected_audio_codec: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.selected_video_codec != null && message.hasOwnProperty("selected_video_codec"))
                switch (message.selected_video_codec) {
                default:
                    return "selected_video_codec: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.available_video_modes != null && message.hasOwnProperty("available_video_modes")) {
                if (!Array.isArray(message.available_video_modes))
                    return "available_video_modes: array expected";
                for (var i = 0; i < message.available_video_modes.length; ++i) {
                    var error = $root.CStreamVideoMode.verify(message.available_video_modes[i]);
                    if (error)
                        return "available_video_modes." + error;
                }
            }
            if (message.enable_remote_hid != null && message.hasOwnProperty("enable_remote_hid"))
                if (typeof message.enable_remote_hid !== "boolean")
                    return "enable_remote_hid: boolean expected";
            if (message.enable_touch_input != null && message.hasOwnProperty("enable_touch_input"))
                if (typeof message.enable_touch_input !== "boolean")
                    return "enable_touch_input: boolean expected";
            return null;
        };
    
        /**
         * Creates a CNegotiatedConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNegotiatedConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNegotiatedConfig} CNegotiatedConfig
         */
        CNegotiatedConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CNegotiatedConfig)
                return object;
            var message = new $root.CNegotiatedConfig();
            if (object.reliable_data != null)
                message.reliable_data = Boolean(object.reliable_data);
            switch (object.selected_audio_codec) {
            case "k_EStreamAudioCodecNone":
            case 0:
                message.selected_audio_codec = 0;
                break;
            case "k_EStreamAudioCodecRaw":
            case 1:
                message.selected_audio_codec = 1;
                break;
            case "k_EStreamAudioCodecVorbis":
            case 2:
                message.selected_audio_codec = 2;
                break;
            case "k_EStreamAudioCodecOpus":
            case 3:
                message.selected_audio_codec = 3;
                break;
            case "k_EStreamAudioCodecMP3":
            case 4:
                message.selected_audio_codec = 4;
                break;
            case "k_EStreamAudioCodecAAC":
            case 5:
                message.selected_audio_codec = 5;
                break;
            }
            switch (object.selected_video_codec) {
            case "k_EStreamVideoCodecNone":
            case 0:
                message.selected_video_codec = 0;
                break;
            case "k_EStreamVideoCodecRaw":
            case 1:
                message.selected_video_codec = 1;
                break;
            case "k_EStreamVideoCodecVP8":
            case 2:
                message.selected_video_codec = 2;
                break;
            case "k_EStreamVideoCodecVP9":
            case 3:
                message.selected_video_codec = 3;
                break;
            case "k_EStreamVideoCodecH264":
            case 4:
                message.selected_video_codec = 4;
                break;
            case "k_EStreamVideoCodecHEVC":
            case 5:
                message.selected_video_codec = 5;
                break;
            case "k_EStreamVideoCodecORBX1":
            case 6:
                message.selected_video_codec = 6;
                break;
            case "k_EStreamVideoCodecORBX2":
            case 7:
                message.selected_video_codec = 7;
                break;
            }
            if (object.available_video_modes) {
                if (!Array.isArray(object.available_video_modes))
                    throw TypeError(".CNegotiatedConfig.available_video_modes: array expected");
                message.available_video_modes = [];
                for (var i = 0; i < object.available_video_modes.length; ++i) {
                    if (typeof object.available_video_modes[i] !== "object")
                        throw TypeError(".CNegotiatedConfig.available_video_modes: object expected");
                    message.available_video_modes[i] = $root.CStreamVideoMode.fromObject(object.available_video_modes[i]);
                }
            }
            if (object.enable_remote_hid != null)
                message.enable_remote_hid = Boolean(object.enable_remote_hid);
            if (object.enable_touch_input != null)
                message.enable_touch_input = Boolean(object.enable_touch_input);
            return message;
        };
    
        /**
         * Creates a plain object from a CNegotiatedConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNegotiatedConfig
         * @static
         * @param {CNegotiatedConfig} message CNegotiatedConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNegotiatedConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.available_video_modes = [];
            if (options.defaults) {
                object.reliable_data = false;
                object.selected_audio_codec = options.enums === String ? "k_EStreamAudioCodecNone" : 0;
                object.selected_video_codec = options.enums === String ? "k_EStreamVideoCodecNone" : 0;
                object.enable_remote_hid = false;
                object.enable_touch_input = false;
            }
            if (message.reliable_data != null && message.hasOwnProperty("reliable_data"))
                object.reliable_data = message.reliable_data;
            if (message.selected_audio_codec != null && message.hasOwnProperty("selected_audio_codec"))
                object.selected_audio_codec = options.enums === String ? $root.EStreamAudioCodec[message.selected_audio_codec] : message.selected_audio_codec;
            if (message.selected_video_codec != null && message.hasOwnProperty("selected_video_codec"))
                object.selected_video_codec = options.enums === String ? $root.EStreamVideoCodec[message.selected_video_codec] : message.selected_video_codec;
            if (message.available_video_modes && message.available_video_modes.length) {
                object.available_video_modes = [];
                for (var j = 0; j < message.available_video_modes.length; ++j)
                    object.available_video_modes[j] = $root.CStreamVideoMode.toObject(message.available_video_modes[j], options);
            }
            if (message.enable_remote_hid != null && message.hasOwnProperty("enable_remote_hid"))
                object.enable_remote_hid = message.enable_remote_hid;
            if (message.enable_touch_input != null && message.hasOwnProperty("enable_touch_input"))
                object.enable_touch_input = message.enable_touch_input;
            return object;
        };
    
        /**
         * Converts this CNegotiatedConfig to JSON.
         * @function toJSON
         * @memberof CNegotiatedConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNegotiatedConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CNegotiatedConfig;
    })();
    
    $root.CNegotiationInitMsg = (function() {
    
        /**
         * Properties of a CNegotiationInitMsg.
         * @exports ICNegotiationInitMsg
         * @interface ICNegotiationInitMsg
         * @property {boolean|null} [reliable_data] CNegotiationInitMsg reliable_data
         * @property {Array.<EStreamAudioCodec>|null} [supported_audio_codecs] CNegotiationInitMsg supported_audio_codecs
         * @property {Array.<EStreamVideoCodec>|null} [supported_video_codecs] CNegotiationInitMsg supported_video_codecs
         * @property {boolean|null} [supports_remote_hid] CNegotiationInitMsg supports_remote_hid
         * @property {boolean|null} [supports_touch_input] CNegotiationInitMsg supports_touch_input
         */
    
        /**
         * Constructs a new CNegotiationInitMsg.
         * @exports CNegotiationInitMsg
         * @classdesc Represents a CNegotiationInitMsg.
         * @implements ICNegotiationInitMsg
         * @constructor
         * @param {ICNegotiationInitMsg=} [properties] Properties to set
         */
        function CNegotiationInitMsg(properties) {
            this.supported_audio_codecs = [];
            this.supported_video_codecs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNegotiationInitMsg reliable_data.
         * @member {boolean} reliable_data
         * @memberof CNegotiationInitMsg
         * @instance
         */
        CNegotiationInitMsg.prototype.reliable_data = false;
    
        /**
         * CNegotiationInitMsg supported_audio_codecs.
         * @member {Array.<EStreamAudioCodec>} supported_audio_codecs
         * @memberof CNegotiationInitMsg
         * @instance
         */
        CNegotiationInitMsg.prototype.supported_audio_codecs = $util.emptyArray;
    
        /**
         * CNegotiationInitMsg supported_video_codecs.
         * @member {Array.<EStreamVideoCodec>} supported_video_codecs
         * @memberof CNegotiationInitMsg
         * @instance
         */
        CNegotiationInitMsg.prototype.supported_video_codecs = $util.emptyArray;
    
        /**
         * CNegotiationInitMsg supports_remote_hid.
         * @member {boolean} supports_remote_hid
         * @memberof CNegotiationInitMsg
         * @instance
         */
        CNegotiationInitMsg.prototype.supports_remote_hid = false;
    
        /**
         * CNegotiationInitMsg supports_touch_input.
         * @member {boolean} supports_touch_input
         * @memberof CNegotiationInitMsg
         * @instance
         */
        CNegotiationInitMsg.prototype.supports_touch_input = false;
    
        /**
         * Creates a new CNegotiationInitMsg instance using the specified properties.
         * @function create
         * @memberof CNegotiationInitMsg
         * @static
         * @param {ICNegotiationInitMsg=} [properties] Properties to set
         * @returns {CNegotiationInitMsg} CNegotiationInitMsg instance
         */
        CNegotiationInitMsg.create = function create(properties) {
            return new CNegotiationInitMsg(properties);
        };
    
        /**
         * Encodes the specified CNegotiationInitMsg message. Does not implicitly {@link CNegotiationInitMsg.verify|verify} messages.
         * @function encode
         * @memberof CNegotiationInitMsg
         * @static
         * @param {ICNegotiationInitMsg} message CNegotiationInitMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNegotiationInitMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reliable_data != null && message.hasOwnProperty("reliable_data"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.reliable_data);
            if (message.supported_audio_codecs != null && message.supported_audio_codecs.length)
                for (var i = 0; i < message.supported_audio_codecs.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.supported_audio_codecs[i]);
            if (message.supported_video_codecs != null && message.supported_video_codecs.length)
                for (var i = 0; i < message.supported_video_codecs.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.supported_video_codecs[i]);
            if (message.supports_remote_hid != null && message.hasOwnProperty("supports_remote_hid"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.supports_remote_hid);
            if (message.supports_touch_input != null && message.hasOwnProperty("supports_touch_input"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.supports_touch_input);
            return writer;
        };
    
        /**
         * Encodes the specified CNegotiationInitMsg message, length delimited. Does not implicitly {@link CNegotiationInitMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNegotiationInitMsg
         * @static
         * @param {ICNegotiationInitMsg} message CNegotiationInitMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNegotiationInitMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNegotiationInitMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CNegotiationInitMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNegotiationInitMsg} CNegotiationInitMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNegotiationInitMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNegotiationInitMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reliable_data = reader.bool();
                    break;
                case 2:
                    if (!(message.supported_audio_codecs && message.supported_audio_codecs.length))
                        message.supported_audio_codecs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.supported_audio_codecs.push(reader.int32());
                    } else
                        message.supported_audio_codecs.push(reader.int32());
                    break;
                case 3:
                    if (!(message.supported_video_codecs && message.supported_video_codecs.length))
                        message.supported_video_codecs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.supported_video_codecs.push(reader.int32());
                    } else
                        message.supported_video_codecs.push(reader.int32());
                    break;
                case 4:
                    message.supports_remote_hid = reader.bool();
                    break;
                case 5:
                    message.supports_touch_input = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CNegotiationInitMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNegotiationInitMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNegotiationInitMsg} CNegotiationInitMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNegotiationInitMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNegotiationInitMsg message.
         * @function verify
         * @memberof CNegotiationInitMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNegotiationInitMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reliable_data != null && message.hasOwnProperty("reliable_data"))
                if (typeof message.reliable_data !== "boolean")
                    return "reliable_data: boolean expected";
            if (message.supported_audio_codecs != null && message.hasOwnProperty("supported_audio_codecs")) {
                if (!Array.isArray(message.supported_audio_codecs))
                    return "supported_audio_codecs: array expected";
                for (var i = 0; i < message.supported_audio_codecs.length; ++i)
                    switch (message.supported_audio_codecs[i]) {
                    default:
                        return "supported_audio_codecs: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
            }
            if (message.supported_video_codecs != null && message.hasOwnProperty("supported_video_codecs")) {
                if (!Array.isArray(message.supported_video_codecs))
                    return "supported_video_codecs: array expected";
                for (var i = 0; i < message.supported_video_codecs.length; ++i)
                    switch (message.supported_video_codecs[i]) {
                    default:
                        return "supported_video_codecs: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
            }
            if (message.supports_remote_hid != null && message.hasOwnProperty("supports_remote_hid"))
                if (typeof message.supports_remote_hid !== "boolean")
                    return "supports_remote_hid: boolean expected";
            if (message.supports_touch_input != null && message.hasOwnProperty("supports_touch_input"))
                if (typeof message.supports_touch_input !== "boolean")
                    return "supports_touch_input: boolean expected";
            return null;
        };
    
        /**
         * Creates a CNegotiationInitMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNegotiationInitMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNegotiationInitMsg} CNegotiationInitMsg
         */
        CNegotiationInitMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CNegotiationInitMsg)
                return object;
            var message = new $root.CNegotiationInitMsg();
            if (object.reliable_data != null)
                message.reliable_data = Boolean(object.reliable_data);
            if (object.supported_audio_codecs) {
                if (!Array.isArray(object.supported_audio_codecs))
                    throw TypeError(".CNegotiationInitMsg.supported_audio_codecs: array expected");
                message.supported_audio_codecs = [];
                for (var i = 0; i < object.supported_audio_codecs.length; ++i)
                    switch (object.supported_audio_codecs[i]) {
                    default:
                    case "k_EStreamAudioCodecNone":
                    case 0:
                        message.supported_audio_codecs[i] = 0;
                        break;
                    case "k_EStreamAudioCodecRaw":
                    case 1:
                        message.supported_audio_codecs[i] = 1;
                        break;
                    case "k_EStreamAudioCodecVorbis":
                    case 2:
                        message.supported_audio_codecs[i] = 2;
                        break;
                    case "k_EStreamAudioCodecOpus":
                    case 3:
                        message.supported_audio_codecs[i] = 3;
                        break;
                    case "k_EStreamAudioCodecMP3":
                    case 4:
                        message.supported_audio_codecs[i] = 4;
                        break;
                    case "k_EStreamAudioCodecAAC":
                    case 5:
                        message.supported_audio_codecs[i] = 5;
                        break;
                    }
            }
            if (object.supported_video_codecs) {
                if (!Array.isArray(object.supported_video_codecs))
                    throw TypeError(".CNegotiationInitMsg.supported_video_codecs: array expected");
                message.supported_video_codecs = [];
                for (var i = 0; i < object.supported_video_codecs.length; ++i)
                    switch (object.supported_video_codecs[i]) {
                    default:
                    case "k_EStreamVideoCodecNone":
                    case 0:
                        message.supported_video_codecs[i] = 0;
                        break;
                    case "k_EStreamVideoCodecRaw":
                    case 1:
                        message.supported_video_codecs[i] = 1;
                        break;
                    case "k_EStreamVideoCodecVP8":
                    case 2:
                        message.supported_video_codecs[i] = 2;
                        break;
                    case "k_EStreamVideoCodecVP9":
                    case 3:
                        message.supported_video_codecs[i] = 3;
                        break;
                    case "k_EStreamVideoCodecH264":
                    case 4:
                        message.supported_video_codecs[i] = 4;
                        break;
                    case "k_EStreamVideoCodecHEVC":
                    case 5:
                        message.supported_video_codecs[i] = 5;
                        break;
                    case "k_EStreamVideoCodecORBX1":
                    case 6:
                        message.supported_video_codecs[i] = 6;
                        break;
                    case "k_EStreamVideoCodecORBX2":
                    case 7:
                        message.supported_video_codecs[i] = 7;
                        break;
                    }
            }
            if (object.supports_remote_hid != null)
                message.supports_remote_hid = Boolean(object.supports_remote_hid);
            if (object.supports_touch_input != null)
                message.supports_touch_input = Boolean(object.supports_touch_input);
            return message;
        };
    
        /**
         * Creates a plain object from a CNegotiationInitMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNegotiationInitMsg
         * @static
         * @param {CNegotiationInitMsg} message CNegotiationInitMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNegotiationInitMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.supported_audio_codecs = [];
                object.supported_video_codecs = [];
            }
            if (options.defaults) {
                object.reliable_data = false;
                object.supports_remote_hid = false;
                object.supports_touch_input = false;
            }
            if (message.reliable_data != null && message.hasOwnProperty("reliable_data"))
                object.reliable_data = message.reliable_data;
            if (message.supported_audio_codecs && message.supported_audio_codecs.length) {
                object.supported_audio_codecs = [];
                for (var j = 0; j < message.supported_audio_codecs.length; ++j)
                    object.supported_audio_codecs[j] = options.enums === String ? $root.EStreamAudioCodec[message.supported_audio_codecs[j]] : message.supported_audio_codecs[j];
            }
            if (message.supported_video_codecs && message.supported_video_codecs.length) {
                object.supported_video_codecs = [];
                for (var j = 0; j < message.supported_video_codecs.length; ++j)
                    object.supported_video_codecs[j] = options.enums === String ? $root.EStreamVideoCodec[message.supported_video_codecs[j]] : message.supported_video_codecs[j];
            }
            if (message.supports_remote_hid != null && message.hasOwnProperty("supports_remote_hid"))
                object.supports_remote_hid = message.supports_remote_hid;
            if (message.supports_touch_input != null && message.hasOwnProperty("supports_touch_input"))
                object.supports_touch_input = message.supports_touch_input;
            return object;
        };
    
        /**
         * Converts this CNegotiationInitMsg to JSON.
         * @function toJSON
         * @memberof CNegotiationInitMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNegotiationInitMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CNegotiationInitMsg;
    })();
    
    $root.CNegotiationSetConfigMsg = (function() {
    
        /**
         * Properties of a CNegotiationSetConfigMsg.
         * @exports ICNegotiationSetConfigMsg
         * @interface ICNegotiationSetConfigMsg
         * @property {ICNegotiatedConfig} config CNegotiationSetConfigMsg config
         * @property {ICStreamingClientConfig|null} [streaming_client_config] CNegotiationSetConfigMsg streaming_client_config
         * @property {ICStreamingClientCaps|null} [streaming_client_caps] CNegotiationSetConfigMsg streaming_client_caps
         */
    
        /**
         * Constructs a new CNegotiationSetConfigMsg.
         * @exports CNegotiationSetConfigMsg
         * @classdesc Represents a CNegotiationSetConfigMsg.
         * @implements ICNegotiationSetConfigMsg
         * @constructor
         * @param {ICNegotiationSetConfigMsg=} [properties] Properties to set
         */
        function CNegotiationSetConfigMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CNegotiationSetConfigMsg config.
         * @member {ICNegotiatedConfig} config
         * @memberof CNegotiationSetConfigMsg
         * @instance
         */
        CNegotiationSetConfigMsg.prototype.config = null;
    
        /**
         * CNegotiationSetConfigMsg streaming_client_config.
         * @member {ICStreamingClientConfig|null|undefined} streaming_client_config
         * @memberof CNegotiationSetConfigMsg
         * @instance
         */
        CNegotiationSetConfigMsg.prototype.streaming_client_config = null;
    
        /**
         * CNegotiationSetConfigMsg streaming_client_caps.
         * @member {ICStreamingClientCaps|null|undefined} streaming_client_caps
         * @memberof CNegotiationSetConfigMsg
         * @instance
         */
        CNegotiationSetConfigMsg.prototype.streaming_client_caps = null;
    
        /**
         * Creates a new CNegotiationSetConfigMsg instance using the specified properties.
         * @function create
         * @memberof CNegotiationSetConfigMsg
         * @static
         * @param {ICNegotiationSetConfigMsg=} [properties] Properties to set
         * @returns {CNegotiationSetConfigMsg} CNegotiationSetConfigMsg instance
         */
        CNegotiationSetConfigMsg.create = function create(properties) {
            return new CNegotiationSetConfigMsg(properties);
        };
    
        /**
         * Encodes the specified CNegotiationSetConfigMsg message. Does not implicitly {@link CNegotiationSetConfigMsg.verify|verify} messages.
         * @function encode
         * @memberof CNegotiationSetConfigMsg
         * @static
         * @param {ICNegotiationSetConfigMsg} message CNegotiationSetConfigMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNegotiationSetConfigMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.CNegotiatedConfig.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.streaming_client_config != null && message.hasOwnProperty("streaming_client_config"))
                $root.CStreamingClientConfig.encode(message.streaming_client_config, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.streaming_client_caps != null && message.hasOwnProperty("streaming_client_caps"))
                $root.CStreamingClientCaps.encode(message.streaming_client_caps, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CNegotiationSetConfigMsg message, length delimited. Does not implicitly {@link CNegotiationSetConfigMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNegotiationSetConfigMsg
         * @static
         * @param {ICNegotiationSetConfigMsg} message CNegotiationSetConfigMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNegotiationSetConfigMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNegotiationSetConfigMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CNegotiationSetConfigMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNegotiationSetConfigMsg} CNegotiationSetConfigMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNegotiationSetConfigMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNegotiationSetConfigMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.config = $root.CNegotiatedConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.streaming_client_config = $root.CStreamingClientConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.streaming_client_caps = $root.CStreamingClientCaps.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("config"))
                throw $util.ProtocolError("missing required 'config'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CNegotiationSetConfigMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNegotiationSetConfigMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNegotiationSetConfigMsg} CNegotiationSetConfigMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNegotiationSetConfigMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNegotiationSetConfigMsg message.
         * @function verify
         * @memberof CNegotiationSetConfigMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNegotiationSetConfigMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.CNegotiatedConfig.verify(message.config);
                if (error)
                    return "config." + error;
            }
            if (message.streaming_client_config != null && message.hasOwnProperty("streaming_client_config")) {
                var error = $root.CStreamingClientConfig.verify(message.streaming_client_config);
                if (error)
                    return "streaming_client_config." + error;
            }
            if (message.streaming_client_caps != null && message.hasOwnProperty("streaming_client_caps")) {
                var error = $root.CStreamingClientCaps.verify(message.streaming_client_caps);
                if (error)
                    return "streaming_client_caps." + error;
            }
            return null;
        };
    
        /**
         * Creates a CNegotiationSetConfigMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNegotiationSetConfigMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNegotiationSetConfigMsg} CNegotiationSetConfigMsg
         */
        CNegotiationSetConfigMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CNegotiationSetConfigMsg)
                return object;
            var message = new $root.CNegotiationSetConfigMsg();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".CNegotiationSetConfigMsg.config: object expected");
                message.config = $root.CNegotiatedConfig.fromObject(object.config);
            }
            if (object.streaming_client_config != null) {
                if (typeof object.streaming_client_config !== "object")
                    throw TypeError(".CNegotiationSetConfigMsg.streaming_client_config: object expected");
                message.streaming_client_config = $root.CStreamingClientConfig.fromObject(object.streaming_client_config);
            }
            if (object.streaming_client_caps != null) {
                if (typeof object.streaming_client_caps !== "object")
                    throw TypeError(".CNegotiationSetConfigMsg.streaming_client_caps: object expected");
                message.streaming_client_caps = $root.CStreamingClientCaps.fromObject(object.streaming_client_caps);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CNegotiationSetConfigMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNegotiationSetConfigMsg
         * @static
         * @param {CNegotiationSetConfigMsg} message CNegotiationSetConfigMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNegotiationSetConfigMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.config = null;
                object.streaming_client_config = null;
                object.streaming_client_caps = null;
            }
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.CNegotiatedConfig.toObject(message.config, options);
            if (message.streaming_client_config != null && message.hasOwnProperty("streaming_client_config"))
                object.streaming_client_config = $root.CStreamingClientConfig.toObject(message.streaming_client_config, options);
            if (message.streaming_client_caps != null && message.hasOwnProperty("streaming_client_caps"))
                object.streaming_client_caps = $root.CStreamingClientCaps.toObject(message.streaming_client_caps, options);
            return object;
        };
    
        /**
         * Converts this CNegotiationSetConfigMsg to JSON.
         * @function toJSON
         * @memberof CNegotiationSetConfigMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNegotiationSetConfigMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CNegotiationSetConfigMsg;
    })();
    
    $root.CNegotiationCompleteMsg = (function() {
    
        /**
         * Properties of a CNegotiationCompleteMsg.
         * @exports ICNegotiationCompleteMsg
         * @interface ICNegotiationCompleteMsg
         */
    
        /**
         * Constructs a new CNegotiationCompleteMsg.
         * @exports CNegotiationCompleteMsg
         * @classdesc Represents a CNegotiationCompleteMsg.
         * @implements ICNegotiationCompleteMsg
         * @constructor
         * @param {ICNegotiationCompleteMsg=} [properties] Properties to set
         */
        function CNegotiationCompleteMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CNegotiationCompleteMsg instance using the specified properties.
         * @function create
         * @memberof CNegotiationCompleteMsg
         * @static
         * @param {ICNegotiationCompleteMsg=} [properties] Properties to set
         * @returns {CNegotiationCompleteMsg} CNegotiationCompleteMsg instance
         */
        CNegotiationCompleteMsg.create = function create(properties) {
            return new CNegotiationCompleteMsg(properties);
        };
    
        /**
         * Encodes the specified CNegotiationCompleteMsg message. Does not implicitly {@link CNegotiationCompleteMsg.verify|verify} messages.
         * @function encode
         * @memberof CNegotiationCompleteMsg
         * @static
         * @param {ICNegotiationCompleteMsg} message CNegotiationCompleteMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNegotiationCompleteMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CNegotiationCompleteMsg message, length delimited. Does not implicitly {@link CNegotiationCompleteMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CNegotiationCompleteMsg
         * @static
         * @param {ICNegotiationCompleteMsg} message CNegotiationCompleteMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CNegotiationCompleteMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CNegotiationCompleteMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CNegotiationCompleteMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CNegotiationCompleteMsg} CNegotiationCompleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNegotiationCompleteMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CNegotiationCompleteMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CNegotiationCompleteMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CNegotiationCompleteMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CNegotiationCompleteMsg} CNegotiationCompleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CNegotiationCompleteMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CNegotiationCompleteMsg message.
         * @function verify
         * @memberof CNegotiationCompleteMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CNegotiationCompleteMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CNegotiationCompleteMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CNegotiationCompleteMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CNegotiationCompleteMsg} CNegotiationCompleteMsg
         */
        CNegotiationCompleteMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CNegotiationCompleteMsg)
                return object;
            return new $root.CNegotiationCompleteMsg();
        };
    
        /**
         * Creates a plain object from a CNegotiationCompleteMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CNegotiationCompleteMsg
         * @static
         * @param {CNegotiationCompleteMsg} message CNegotiationCompleteMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CNegotiationCompleteMsg.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CNegotiationCompleteMsg to JSON.
         * @function toJSON
         * @memberof CNegotiationCompleteMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CNegotiationCompleteMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CNegotiationCompleteMsg;
    })();
    
    $root.CStartAudioDataMsg = (function() {
    
        /**
         * Properties of a CStartAudioDataMsg.
         * @exports ICStartAudioDataMsg
         * @interface ICStartAudioDataMsg
         * @property {number} channel CStartAudioDataMsg channel
         * @property {EStreamAudioCodec|null} [codec] CStartAudioDataMsg codec
         * @property {Uint8Array|null} [codec_data] CStartAudioDataMsg codec_data
         * @property {number|null} [frequency] CStartAudioDataMsg frequency
         * @property {number|null} [channels] CStartAudioDataMsg channels
         */
    
        /**
         * Constructs a new CStartAudioDataMsg.
         * @exports CStartAudioDataMsg
         * @classdesc Represents a CStartAudioDataMsg.
         * @implements ICStartAudioDataMsg
         * @constructor
         * @param {ICStartAudioDataMsg=} [properties] Properties to set
         */
        function CStartAudioDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStartAudioDataMsg channel.
         * @member {number} channel
         * @memberof CStartAudioDataMsg
         * @instance
         */
        CStartAudioDataMsg.prototype.channel = 0;
    
        /**
         * CStartAudioDataMsg codec.
         * @member {EStreamAudioCodec} codec
         * @memberof CStartAudioDataMsg
         * @instance
         */
        CStartAudioDataMsg.prototype.codec = 0;
    
        /**
         * CStartAudioDataMsg codec_data.
         * @member {Uint8Array} codec_data
         * @memberof CStartAudioDataMsg
         * @instance
         */
        CStartAudioDataMsg.prototype.codec_data = $util.newBuffer([]);
    
        /**
         * CStartAudioDataMsg frequency.
         * @member {number} frequency
         * @memberof CStartAudioDataMsg
         * @instance
         */
        CStartAudioDataMsg.prototype.frequency = 0;
    
        /**
         * CStartAudioDataMsg channels.
         * @member {number} channels
         * @memberof CStartAudioDataMsg
         * @instance
         */
        CStartAudioDataMsg.prototype.channels = 0;
    
        /**
         * Creates a new CStartAudioDataMsg instance using the specified properties.
         * @function create
         * @memberof CStartAudioDataMsg
         * @static
         * @param {ICStartAudioDataMsg=} [properties] Properties to set
         * @returns {CStartAudioDataMsg} CStartAudioDataMsg instance
         */
        CStartAudioDataMsg.create = function create(properties) {
            return new CStartAudioDataMsg(properties);
        };
    
        /**
         * Encodes the specified CStartAudioDataMsg message. Does not implicitly {@link CStartAudioDataMsg.verify|verify} messages.
         * @function encode
         * @memberof CStartAudioDataMsg
         * @static
         * @param {ICStartAudioDataMsg} message CStartAudioDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStartAudioDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.channel);
            if (message.codec != null && message.hasOwnProperty("codec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.codec);
            if (message.codec_data != null && message.hasOwnProperty("codec_data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.codec_data);
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.frequency);
            if (message.channels != null && message.hasOwnProperty("channels"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.channels);
            return writer;
        };
    
        /**
         * Encodes the specified CStartAudioDataMsg message, length delimited. Does not implicitly {@link CStartAudioDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStartAudioDataMsg
         * @static
         * @param {ICStartAudioDataMsg} message CStartAudioDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStartAudioDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStartAudioDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CStartAudioDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStartAudioDataMsg} CStartAudioDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStartAudioDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStartAudioDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.channel = reader.uint32();
                    break;
                case 3:
                    message.codec = reader.int32();
                    break;
                case 4:
                    message.codec_data = reader.bytes();
                    break;
                case 5:
                    message.frequency = reader.uint32();
                    break;
                case 6:
                    message.channels = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("channel"))
                throw $util.ProtocolError("missing required 'channel'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CStartAudioDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStartAudioDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStartAudioDataMsg} CStartAudioDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStartAudioDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStartAudioDataMsg message.
         * @function verify
         * @memberof CStartAudioDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStartAudioDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
            if (message.codec != null && message.hasOwnProperty("codec"))
                switch (message.codec) {
                default:
                    return "codec: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.codec_data != null && message.hasOwnProperty("codec_data"))
                if (!(message.codec_data && typeof message.codec_data.length === "number" || $util.isString(message.codec_data)))
                    return "codec_data: buffer expected";
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                if (!$util.isInteger(message.frequency))
                    return "frequency: integer expected";
            if (message.channels != null && message.hasOwnProperty("channels"))
                if (!$util.isInteger(message.channels))
                    return "channels: integer expected";
            return null;
        };
    
        /**
         * Creates a CStartAudioDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStartAudioDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStartAudioDataMsg} CStartAudioDataMsg
         */
        CStartAudioDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CStartAudioDataMsg)
                return object;
            var message = new $root.CStartAudioDataMsg();
            if (object.channel != null)
                message.channel = object.channel >>> 0;
            switch (object.codec) {
            case "k_EStreamAudioCodecNone":
            case 0:
                message.codec = 0;
                break;
            case "k_EStreamAudioCodecRaw":
            case 1:
                message.codec = 1;
                break;
            case "k_EStreamAudioCodecVorbis":
            case 2:
                message.codec = 2;
                break;
            case "k_EStreamAudioCodecOpus":
            case 3:
                message.codec = 3;
                break;
            case "k_EStreamAudioCodecMP3":
            case 4:
                message.codec = 4;
                break;
            case "k_EStreamAudioCodecAAC":
            case 5:
                message.codec = 5;
                break;
            }
            if (object.codec_data != null)
                if (typeof object.codec_data === "string")
                    $util.base64.decode(object.codec_data, message.codec_data = $util.newBuffer($util.base64.length(object.codec_data)), 0);
                else if (object.codec_data.length)
                    message.codec_data = object.codec_data;
            if (object.frequency != null)
                message.frequency = object.frequency >>> 0;
            if (object.channels != null)
                message.channels = object.channels >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CStartAudioDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStartAudioDataMsg
         * @static
         * @param {CStartAudioDataMsg} message CStartAudioDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStartAudioDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channel = 0;
                object.codec = options.enums === String ? "k_EStreamAudioCodecNone" : 0;
                if (options.bytes === String)
                    object.codec_data = "";
                else {
                    object.codec_data = [];
                    if (options.bytes !== Array)
                        object.codec_data = $util.newBuffer(object.codec_data);
                }
                object.frequency = 0;
                object.channels = 0;
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.codec != null && message.hasOwnProperty("codec"))
                object.codec = options.enums === String ? $root.EStreamAudioCodec[message.codec] : message.codec;
            if (message.codec_data != null && message.hasOwnProperty("codec_data"))
                object.codec_data = options.bytes === String ? $util.base64.encode(message.codec_data, 0, message.codec_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.codec_data) : message.codec_data;
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                object.frequency = message.frequency;
            if (message.channels != null && message.hasOwnProperty("channels"))
                object.channels = message.channels;
            return object;
        };
    
        /**
         * Converts this CStartAudioDataMsg to JSON.
         * @function toJSON
         * @memberof CStartAudioDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStartAudioDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStartAudioDataMsg;
    })();
    
    $root.CStopAudioDataMsg = (function() {
    
        /**
         * Properties of a CStopAudioDataMsg.
         * @exports ICStopAudioDataMsg
         * @interface ICStopAudioDataMsg
         */
    
        /**
         * Constructs a new CStopAudioDataMsg.
         * @exports CStopAudioDataMsg
         * @classdesc Represents a CStopAudioDataMsg.
         * @implements ICStopAudioDataMsg
         * @constructor
         * @param {ICStopAudioDataMsg=} [properties] Properties to set
         */
        function CStopAudioDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CStopAudioDataMsg instance using the specified properties.
         * @function create
         * @memberof CStopAudioDataMsg
         * @static
         * @param {ICStopAudioDataMsg=} [properties] Properties to set
         * @returns {CStopAudioDataMsg} CStopAudioDataMsg instance
         */
        CStopAudioDataMsg.create = function create(properties) {
            return new CStopAudioDataMsg(properties);
        };
    
        /**
         * Encodes the specified CStopAudioDataMsg message. Does not implicitly {@link CStopAudioDataMsg.verify|verify} messages.
         * @function encode
         * @memberof CStopAudioDataMsg
         * @static
         * @param {ICStopAudioDataMsg} message CStopAudioDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStopAudioDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CStopAudioDataMsg message, length delimited. Does not implicitly {@link CStopAudioDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStopAudioDataMsg
         * @static
         * @param {ICStopAudioDataMsg} message CStopAudioDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStopAudioDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStopAudioDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CStopAudioDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStopAudioDataMsg} CStopAudioDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStopAudioDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStopAudioDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStopAudioDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStopAudioDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStopAudioDataMsg} CStopAudioDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStopAudioDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStopAudioDataMsg message.
         * @function verify
         * @memberof CStopAudioDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStopAudioDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CStopAudioDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStopAudioDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStopAudioDataMsg} CStopAudioDataMsg
         */
        CStopAudioDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CStopAudioDataMsg)
                return object;
            return new $root.CStopAudioDataMsg();
        };
    
        /**
         * Creates a plain object from a CStopAudioDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStopAudioDataMsg
         * @static
         * @param {CStopAudioDataMsg} message CStopAudioDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStopAudioDataMsg.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CStopAudioDataMsg to JSON.
         * @function toJSON
         * @memberof CStopAudioDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStopAudioDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStopAudioDataMsg;
    })();
    
    $root.CStartVideoDataMsg = (function() {
    
        /**
         * Properties of a CStartVideoDataMsg.
         * @exports ICStartVideoDataMsg
         * @interface ICStartVideoDataMsg
         * @property {number} channel CStartVideoDataMsg channel
         * @property {EStreamVideoCodec|null} [codec] CStartVideoDataMsg codec
         * @property {Uint8Array|null} [codec_data] CStartVideoDataMsg codec_data
         * @property {number|null} [width] CStartVideoDataMsg width
         * @property {number|null} [height] CStartVideoDataMsg height
         */
    
        /**
         * Constructs a new CStartVideoDataMsg.
         * @exports CStartVideoDataMsg
         * @classdesc Represents a CStartVideoDataMsg.
         * @implements ICStartVideoDataMsg
         * @constructor
         * @param {ICStartVideoDataMsg=} [properties] Properties to set
         */
        function CStartVideoDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStartVideoDataMsg channel.
         * @member {number} channel
         * @memberof CStartVideoDataMsg
         * @instance
         */
        CStartVideoDataMsg.prototype.channel = 0;
    
        /**
         * CStartVideoDataMsg codec.
         * @member {EStreamVideoCodec} codec
         * @memberof CStartVideoDataMsg
         * @instance
         */
        CStartVideoDataMsg.prototype.codec = 0;
    
        /**
         * CStartVideoDataMsg codec_data.
         * @member {Uint8Array} codec_data
         * @memberof CStartVideoDataMsg
         * @instance
         */
        CStartVideoDataMsg.prototype.codec_data = $util.newBuffer([]);
    
        /**
         * CStartVideoDataMsg width.
         * @member {number} width
         * @memberof CStartVideoDataMsg
         * @instance
         */
        CStartVideoDataMsg.prototype.width = 0;
    
        /**
         * CStartVideoDataMsg height.
         * @member {number} height
         * @memberof CStartVideoDataMsg
         * @instance
         */
        CStartVideoDataMsg.prototype.height = 0;
    
        /**
         * Creates a new CStartVideoDataMsg instance using the specified properties.
         * @function create
         * @memberof CStartVideoDataMsg
         * @static
         * @param {ICStartVideoDataMsg=} [properties] Properties to set
         * @returns {CStartVideoDataMsg} CStartVideoDataMsg instance
         */
        CStartVideoDataMsg.create = function create(properties) {
            return new CStartVideoDataMsg(properties);
        };
    
        /**
         * Encodes the specified CStartVideoDataMsg message. Does not implicitly {@link CStartVideoDataMsg.verify|verify} messages.
         * @function encode
         * @memberof CStartVideoDataMsg
         * @static
         * @param {ICStartVideoDataMsg} message CStartVideoDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStartVideoDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.channel);
            if (message.codec != null && message.hasOwnProperty("codec"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.codec);
            if (message.codec_data != null && message.hasOwnProperty("codec_data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.codec_data);
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.height);
            return writer;
        };
    
        /**
         * Encodes the specified CStartVideoDataMsg message, length delimited. Does not implicitly {@link CStartVideoDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStartVideoDataMsg
         * @static
         * @param {ICStartVideoDataMsg} message CStartVideoDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStartVideoDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStartVideoDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CStartVideoDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStartVideoDataMsg} CStartVideoDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStartVideoDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStartVideoDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channel = reader.uint32();
                    break;
                case 2:
                    message.codec = reader.int32();
                    break;
                case 3:
                    message.codec_data = reader.bytes();
                    break;
                case 4:
                    message.width = reader.uint32();
                    break;
                case 5:
                    message.height = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("channel"))
                throw $util.ProtocolError("missing required 'channel'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CStartVideoDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStartVideoDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStartVideoDataMsg} CStartVideoDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStartVideoDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStartVideoDataMsg message.
         * @function verify
         * @memberof CStartVideoDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStartVideoDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
            if (message.codec != null && message.hasOwnProperty("codec"))
                switch (message.codec) {
                default:
                    return "codec: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.codec_data != null && message.hasOwnProperty("codec_data"))
                if (!(message.codec_data && typeof message.codec_data.length === "number" || $util.isString(message.codec_data)))
                    return "codec_data: buffer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };
    
        /**
         * Creates a CStartVideoDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStartVideoDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStartVideoDataMsg} CStartVideoDataMsg
         */
        CStartVideoDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CStartVideoDataMsg)
                return object;
            var message = new $root.CStartVideoDataMsg();
            if (object.channel != null)
                message.channel = object.channel >>> 0;
            switch (object.codec) {
            case "k_EStreamVideoCodecNone":
            case 0:
                message.codec = 0;
                break;
            case "k_EStreamVideoCodecRaw":
            case 1:
                message.codec = 1;
                break;
            case "k_EStreamVideoCodecVP8":
            case 2:
                message.codec = 2;
                break;
            case "k_EStreamVideoCodecVP9":
            case 3:
                message.codec = 3;
                break;
            case "k_EStreamVideoCodecH264":
            case 4:
                message.codec = 4;
                break;
            case "k_EStreamVideoCodecHEVC":
            case 5:
                message.codec = 5;
                break;
            case "k_EStreamVideoCodecORBX1":
            case 6:
                message.codec = 6;
                break;
            case "k_EStreamVideoCodecORBX2":
            case 7:
                message.codec = 7;
                break;
            }
            if (object.codec_data != null)
                if (typeof object.codec_data === "string")
                    $util.base64.decode(object.codec_data, message.codec_data = $util.newBuffer($util.base64.length(object.codec_data)), 0);
                else if (object.codec_data.length)
                    message.codec_data = object.codec_data;
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CStartVideoDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStartVideoDataMsg
         * @static
         * @param {CStartVideoDataMsg} message CStartVideoDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStartVideoDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channel = 0;
                object.codec = options.enums === String ? "k_EStreamVideoCodecNone" : 0;
                if (options.bytes === String)
                    object.codec_data = "";
                else {
                    object.codec_data = [];
                    if (options.bytes !== Array)
                        object.codec_data = $util.newBuffer(object.codec_data);
                }
                object.width = 0;
                object.height = 0;
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.codec != null && message.hasOwnProperty("codec"))
                object.codec = options.enums === String ? $root.EStreamVideoCodec[message.codec] : message.codec;
            if (message.codec_data != null && message.hasOwnProperty("codec_data"))
                object.codec_data = options.bytes === String ? $util.base64.encode(message.codec_data, 0, message.codec_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.codec_data) : message.codec_data;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };
    
        /**
         * Converts this CStartVideoDataMsg to JSON.
         * @function toJSON
         * @memberof CStartVideoDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStartVideoDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStartVideoDataMsg;
    })();
    
    $root.CStopVideoDataMsg = (function() {
    
        /**
         * Properties of a CStopVideoDataMsg.
         * @exports ICStopVideoDataMsg
         * @interface ICStopVideoDataMsg
         */
    
        /**
         * Constructs a new CStopVideoDataMsg.
         * @exports CStopVideoDataMsg
         * @classdesc Represents a CStopVideoDataMsg.
         * @implements ICStopVideoDataMsg
         * @constructor
         * @param {ICStopVideoDataMsg=} [properties] Properties to set
         */
        function CStopVideoDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CStopVideoDataMsg instance using the specified properties.
         * @function create
         * @memberof CStopVideoDataMsg
         * @static
         * @param {ICStopVideoDataMsg=} [properties] Properties to set
         * @returns {CStopVideoDataMsg} CStopVideoDataMsg instance
         */
        CStopVideoDataMsg.create = function create(properties) {
            return new CStopVideoDataMsg(properties);
        };
    
        /**
         * Encodes the specified CStopVideoDataMsg message. Does not implicitly {@link CStopVideoDataMsg.verify|verify} messages.
         * @function encode
         * @memberof CStopVideoDataMsg
         * @static
         * @param {ICStopVideoDataMsg} message CStopVideoDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStopVideoDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CStopVideoDataMsg message, length delimited. Does not implicitly {@link CStopVideoDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStopVideoDataMsg
         * @static
         * @param {ICStopVideoDataMsg} message CStopVideoDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStopVideoDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStopVideoDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CStopVideoDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStopVideoDataMsg} CStopVideoDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStopVideoDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStopVideoDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStopVideoDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStopVideoDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStopVideoDataMsg} CStopVideoDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStopVideoDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStopVideoDataMsg message.
         * @function verify
         * @memberof CStopVideoDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStopVideoDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CStopVideoDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStopVideoDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStopVideoDataMsg} CStopVideoDataMsg
         */
        CStopVideoDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CStopVideoDataMsg)
                return object;
            return new $root.CStopVideoDataMsg();
        };
    
        /**
         * Creates a plain object from a CStopVideoDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStopVideoDataMsg
         * @static
         * @param {CStopVideoDataMsg} message CStopVideoDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStopVideoDataMsg.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CStopVideoDataMsg to JSON.
         * @function toJSON
         * @memberof CStopVideoDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStopVideoDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStopVideoDataMsg;
    })();
    
    $root.CInputLatencyTestMsg = (function() {
    
        /**
         * Properties of a CInputLatencyTestMsg.
         * @exports ICInputLatencyTestMsg
         * @interface ICInputLatencyTestMsg
         * @property {number} input_mark CInputLatencyTestMsg input_mark
         * @property {number|null} [color] CInputLatencyTestMsg color
         */
    
        /**
         * Constructs a new CInputLatencyTestMsg.
         * @exports CInputLatencyTestMsg
         * @classdesc Represents a CInputLatencyTestMsg.
         * @implements ICInputLatencyTestMsg
         * @constructor
         * @param {ICInputLatencyTestMsg=} [properties] Properties to set
         */
        function CInputLatencyTestMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputLatencyTestMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputLatencyTestMsg
         * @instance
         */
        CInputLatencyTestMsg.prototype.input_mark = 0;
    
        /**
         * CInputLatencyTestMsg color.
         * @member {number} color
         * @memberof CInputLatencyTestMsg
         * @instance
         */
        CInputLatencyTestMsg.prototype.color = 0;
    
        /**
         * Creates a new CInputLatencyTestMsg instance using the specified properties.
         * @function create
         * @memberof CInputLatencyTestMsg
         * @static
         * @param {ICInputLatencyTestMsg=} [properties] Properties to set
         * @returns {CInputLatencyTestMsg} CInputLatencyTestMsg instance
         */
        CInputLatencyTestMsg.create = function create(properties) {
            return new CInputLatencyTestMsg(properties);
        };
    
        /**
         * Encodes the specified CInputLatencyTestMsg message. Does not implicitly {@link CInputLatencyTestMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputLatencyTestMsg
         * @static
         * @param {ICInputLatencyTestMsg} message CInputLatencyTestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputLatencyTestMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            if (message.color != null && message.hasOwnProperty("color"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.color);
            return writer;
        };
    
        /**
         * Encodes the specified CInputLatencyTestMsg message, length delimited. Does not implicitly {@link CInputLatencyTestMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputLatencyTestMsg
         * @static
         * @param {ICInputLatencyTestMsg} message CInputLatencyTestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputLatencyTestMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputLatencyTestMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputLatencyTestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputLatencyTestMsg} CInputLatencyTestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputLatencyTestMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputLatencyTestMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.color = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("input_mark"))
                throw $util.ProtocolError("missing required 'input_mark'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CInputLatencyTestMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputLatencyTestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputLatencyTestMsg} CInputLatencyTestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputLatencyTestMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputLatencyTestMsg message.
         * @function verify
         * @memberof CInputLatencyTestMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputLatencyTestMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.input_mark))
                return "input_mark: integer expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isInteger(message.color))
                    return "color: integer expected";
            return null;
        };
    
        /**
         * Creates a CInputLatencyTestMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputLatencyTestMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputLatencyTestMsg} CInputLatencyTestMsg
         */
        CInputLatencyTestMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputLatencyTestMsg)
                return object;
            var message = new $root.CInputLatencyTestMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.color != null)
                message.color = object.color >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInputLatencyTestMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputLatencyTestMsg
         * @static
         * @param {CInputLatencyTestMsg} message CInputLatencyTestMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputLatencyTestMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                object.color = 0;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            return object;
        };
    
        /**
         * Converts this CInputLatencyTestMsg to JSON.
         * @function toJSON
         * @memberof CInputLatencyTestMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputLatencyTestMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputLatencyTestMsg;
    })();
    
    $root.CInputTouchFingerDownMsg = (function() {
    
        /**
         * Properties of a CInputTouchFingerDownMsg.
         * @exports ICInputTouchFingerDownMsg
         * @interface ICInputTouchFingerDownMsg
         * @property {number|null} [input_mark] CInputTouchFingerDownMsg input_mark
         * @property {number|Long|null} [fingerid] CInputTouchFingerDownMsg fingerid
         * @property {number|null} [x_normalized] CInputTouchFingerDownMsg x_normalized
         * @property {number|null} [y_normalized] CInputTouchFingerDownMsg y_normalized
         */
    
        /**
         * Constructs a new CInputTouchFingerDownMsg.
         * @exports CInputTouchFingerDownMsg
         * @classdesc Represents a CInputTouchFingerDownMsg.
         * @implements ICInputTouchFingerDownMsg
         * @constructor
         * @param {ICInputTouchFingerDownMsg=} [properties] Properties to set
         */
        function CInputTouchFingerDownMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputTouchFingerDownMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputTouchFingerDownMsg
         * @instance
         */
        CInputTouchFingerDownMsg.prototype.input_mark = 0;
    
        /**
         * CInputTouchFingerDownMsg fingerid.
         * @member {number|Long} fingerid
         * @memberof CInputTouchFingerDownMsg
         * @instance
         */
        CInputTouchFingerDownMsg.prototype.fingerid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInputTouchFingerDownMsg x_normalized.
         * @member {number} x_normalized
         * @memberof CInputTouchFingerDownMsg
         * @instance
         */
        CInputTouchFingerDownMsg.prototype.x_normalized = 0;
    
        /**
         * CInputTouchFingerDownMsg y_normalized.
         * @member {number} y_normalized
         * @memberof CInputTouchFingerDownMsg
         * @instance
         */
        CInputTouchFingerDownMsg.prototype.y_normalized = 0;
    
        /**
         * Creates a new CInputTouchFingerDownMsg instance using the specified properties.
         * @function create
         * @memberof CInputTouchFingerDownMsg
         * @static
         * @param {ICInputTouchFingerDownMsg=} [properties] Properties to set
         * @returns {CInputTouchFingerDownMsg} CInputTouchFingerDownMsg instance
         */
        CInputTouchFingerDownMsg.create = function create(properties) {
            return new CInputTouchFingerDownMsg(properties);
        };
    
        /**
         * Encodes the specified CInputTouchFingerDownMsg message. Does not implicitly {@link CInputTouchFingerDownMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputTouchFingerDownMsg
         * @static
         * @param {ICInputTouchFingerDownMsg} message CInputTouchFingerDownMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputTouchFingerDownMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.fingerid);
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.x_normalized);
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.y_normalized);
            return writer;
        };
    
        /**
         * Encodes the specified CInputTouchFingerDownMsg message, length delimited. Does not implicitly {@link CInputTouchFingerDownMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputTouchFingerDownMsg
         * @static
         * @param {ICInputTouchFingerDownMsg} message CInputTouchFingerDownMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputTouchFingerDownMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputTouchFingerDownMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputTouchFingerDownMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputTouchFingerDownMsg} CInputTouchFingerDownMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputTouchFingerDownMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputTouchFingerDownMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.fingerid = reader.uint64();
                    break;
                case 3:
                    message.x_normalized = reader.float();
                    break;
                case 4:
                    message.y_normalized = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInputTouchFingerDownMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputTouchFingerDownMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputTouchFingerDownMsg} CInputTouchFingerDownMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputTouchFingerDownMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputTouchFingerDownMsg message.
         * @function verify
         * @memberof CInputTouchFingerDownMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputTouchFingerDownMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                if (!$util.isInteger(message.fingerid) && !(message.fingerid && $util.isInteger(message.fingerid.low) && $util.isInteger(message.fingerid.high)))
                    return "fingerid: integer|Long expected";
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                if (typeof message.x_normalized !== "number")
                    return "x_normalized: number expected";
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                if (typeof message.y_normalized !== "number")
                    return "y_normalized: number expected";
            return null;
        };
    
        /**
         * Creates a CInputTouchFingerDownMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputTouchFingerDownMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputTouchFingerDownMsg} CInputTouchFingerDownMsg
         */
        CInputTouchFingerDownMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputTouchFingerDownMsg)
                return object;
            var message = new $root.CInputTouchFingerDownMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.fingerid != null)
                if ($util.Long)
                    (message.fingerid = $util.Long.fromValue(object.fingerid)).unsigned = true;
                else if (typeof object.fingerid === "string")
                    message.fingerid = parseInt(object.fingerid, 10);
                else if (typeof object.fingerid === "number")
                    message.fingerid = object.fingerid;
                else if (typeof object.fingerid === "object")
                    message.fingerid = new $util.LongBits(object.fingerid.low >>> 0, object.fingerid.high >>> 0).toNumber(true);
            if (object.x_normalized != null)
                message.x_normalized = Number(object.x_normalized);
            if (object.y_normalized != null)
                message.y_normalized = Number(object.y_normalized);
            return message;
        };
    
        /**
         * Creates a plain object from a CInputTouchFingerDownMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputTouchFingerDownMsg
         * @static
         * @param {CInputTouchFingerDownMsg} message CInputTouchFingerDownMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputTouchFingerDownMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.fingerid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fingerid = options.longs === String ? "0" : 0;
                object.x_normalized = 0;
                object.y_normalized = 0;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                if (typeof message.fingerid === "number")
                    object.fingerid = options.longs === String ? String(message.fingerid) : message.fingerid;
                else
                    object.fingerid = options.longs === String ? $util.Long.prototype.toString.call(message.fingerid) : options.longs === Number ? new $util.LongBits(message.fingerid.low >>> 0, message.fingerid.high >>> 0).toNumber(true) : message.fingerid;
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                object.x_normalized = options.json && !isFinite(message.x_normalized) ? String(message.x_normalized) : message.x_normalized;
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                object.y_normalized = options.json && !isFinite(message.y_normalized) ? String(message.y_normalized) : message.y_normalized;
            return object;
        };
    
        /**
         * Converts this CInputTouchFingerDownMsg to JSON.
         * @function toJSON
         * @memberof CInputTouchFingerDownMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputTouchFingerDownMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputTouchFingerDownMsg;
    })();
    
    $root.CInputTouchFingerMotionMsg = (function() {
    
        /**
         * Properties of a CInputTouchFingerMotionMsg.
         * @exports ICInputTouchFingerMotionMsg
         * @interface ICInputTouchFingerMotionMsg
         * @property {number|null} [input_mark] CInputTouchFingerMotionMsg input_mark
         * @property {number|Long|null} [fingerid] CInputTouchFingerMotionMsg fingerid
         * @property {number|null} [x_normalized] CInputTouchFingerMotionMsg x_normalized
         * @property {number|null} [y_normalized] CInputTouchFingerMotionMsg y_normalized
         */
    
        /**
         * Constructs a new CInputTouchFingerMotionMsg.
         * @exports CInputTouchFingerMotionMsg
         * @classdesc Represents a CInputTouchFingerMotionMsg.
         * @implements ICInputTouchFingerMotionMsg
         * @constructor
         * @param {ICInputTouchFingerMotionMsg=} [properties] Properties to set
         */
        function CInputTouchFingerMotionMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputTouchFingerMotionMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputTouchFingerMotionMsg
         * @instance
         */
        CInputTouchFingerMotionMsg.prototype.input_mark = 0;
    
        /**
         * CInputTouchFingerMotionMsg fingerid.
         * @member {number|Long} fingerid
         * @memberof CInputTouchFingerMotionMsg
         * @instance
         */
        CInputTouchFingerMotionMsg.prototype.fingerid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInputTouchFingerMotionMsg x_normalized.
         * @member {number} x_normalized
         * @memberof CInputTouchFingerMotionMsg
         * @instance
         */
        CInputTouchFingerMotionMsg.prototype.x_normalized = 0;
    
        /**
         * CInputTouchFingerMotionMsg y_normalized.
         * @member {number} y_normalized
         * @memberof CInputTouchFingerMotionMsg
         * @instance
         */
        CInputTouchFingerMotionMsg.prototype.y_normalized = 0;
    
        /**
         * Creates a new CInputTouchFingerMotionMsg instance using the specified properties.
         * @function create
         * @memberof CInputTouchFingerMotionMsg
         * @static
         * @param {ICInputTouchFingerMotionMsg=} [properties] Properties to set
         * @returns {CInputTouchFingerMotionMsg} CInputTouchFingerMotionMsg instance
         */
        CInputTouchFingerMotionMsg.create = function create(properties) {
            return new CInputTouchFingerMotionMsg(properties);
        };
    
        /**
         * Encodes the specified CInputTouchFingerMotionMsg message. Does not implicitly {@link CInputTouchFingerMotionMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputTouchFingerMotionMsg
         * @static
         * @param {ICInputTouchFingerMotionMsg} message CInputTouchFingerMotionMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputTouchFingerMotionMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.fingerid);
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.x_normalized);
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.y_normalized);
            return writer;
        };
    
        /**
         * Encodes the specified CInputTouchFingerMotionMsg message, length delimited. Does not implicitly {@link CInputTouchFingerMotionMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputTouchFingerMotionMsg
         * @static
         * @param {ICInputTouchFingerMotionMsg} message CInputTouchFingerMotionMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputTouchFingerMotionMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputTouchFingerMotionMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputTouchFingerMotionMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputTouchFingerMotionMsg} CInputTouchFingerMotionMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputTouchFingerMotionMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputTouchFingerMotionMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.fingerid = reader.uint64();
                    break;
                case 3:
                    message.x_normalized = reader.float();
                    break;
                case 4:
                    message.y_normalized = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInputTouchFingerMotionMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputTouchFingerMotionMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputTouchFingerMotionMsg} CInputTouchFingerMotionMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputTouchFingerMotionMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputTouchFingerMotionMsg message.
         * @function verify
         * @memberof CInputTouchFingerMotionMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputTouchFingerMotionMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                if (!$util.isInteger(message.fingerid) && !(message.fingerid && $util.isInteger(message.fingerid.low) && $util.isInteger(message.fingerid.high)))
                    return "fingerid: integer|Long expected";
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                if (typeof message.x_normalized !== "number")
                    return "x_normalized: number expected";
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                if (typeof message.y_normalized !== "number")
                    return "y_normalized: number expected";
            return null;
        };
    
        /**
         * Creates a CInputTouchFingerMotionMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputTouchFingerMotionMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputTouchFingerMotionMsg} CInputTouchFingerMotionMsg
         */
        CInputTouchFingerMotionMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputTouchFingerMotionMsg)
                return object;
            var message = new $root.CInputTouchFingerMotionMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.fingerid != null)
                if ($util.Long)
                    (message.fingerid = $util.Long.fromValue(object.fingerid)).unsigned = true;
                else if (typeof object.fingerid === "string")
                    message.fingerid = parseInt(object.fingerid, 10);
                else if (typeof object.fingerid === "number")
                    message.fingerid = object.fingerid;
                else if (typeof object.fingerid === "object")
                    message.fingerid = new $util.LongBits(object.fingerid.low >>> 0, object.fingerid.high >>> 0).toNumber(true);
            if (object.x_normalized != null)
                message.x_normalized = Number(object.x_normalized);
            if (object.y_normalized != null)
                message.y_normalized = Number(object.y_normalized);
            return message;
        };
    
        /**
         * Creates a plain object from a CInputTouchFingerMotionMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputTouchFingerMotionMsg
         * @static
         * @param {CInputTouchFingerMotionMsg} message CInputTouchFingerMotionMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputTouchFingerMotionMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.fingerid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fingerid = options.longs === String ? "0" : 0;
                object.x_normalized = 0;
                object.y_normalized = 0;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                if (typeof message.fingerid === "number")
                    object.fingerid = options.longs === String ? String(message.fingerid) : message.fingerid;
                else
                    object.fingerid = options.longs === String ? $util.Long.prototype.toString.call(message.fingerid) : options.longs === Number ? new $util.LongBits(message.fingerid.low >>> 0, message.fingerid.high >>> 0).toNumber(true) : message.fingerid;
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                object.x_normalized = options.json && !isFinite(message.x_normalized) ? String(message.x_normalized) : message.x_normalized;
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                object.y_normalized = options.json && !isFinite(message.y_normalized) ? String(message.y_normalized) : message.y_normalized;
            return object;
        };
    
        /**
         * Converts this CInputTouchFingerMotionMsg to JSON.
         * @function toJSON
         * @memberof CInputTouchFingerMotionMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputTouchFingerMotionMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputTouchFingerMotionMsg;
    })();
    
    $root.CInputTouchFingerUpMsg = (function() {
    
        /**
         * Properties of a CInputTouchFingerUpMsg.
         * @exports ICInputTouchFingerUpMsg
         * @interface ICInputTouchFingerUpMsg
         * @property {number|null} [input_mark] CInputTouchFingerUpMsg input_mark
         * @property {number|Long|null} [fingerid] CInputTouchFingerUpMsg fingerid
         * @property {number|null} [x_normalized] CInputTouchFingerUpMsg x_normalized
         * @property {number|null} [y_normalized] CInputTouchFingerUpMsg y_normalized
         */
    
        /**
         * Constructs a new CInputTouchFingerUpMsg.
         * @exports CInputTouchFingerUpMsg
         * @classdesc Represents a CInputTouchFingerUpMsg.
         * @implements ICInputTouchFingerUpMsg
         * @constructor
         * @param {ICInputTouchFingerUpMsg=} [properties] Properties to set
         */
        function CInputTouchFingerUpMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputTouchFingerUpMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputTouchFingerUpMsg
         * @instance
         */
        CInputTouchFingerUpMsg.prototype.input_mark = 0;
    
        /**
         * CInputTouchFingerUpMsg fingerid.
         * @member {number|Long} fingerid
         * @memberof CInputTouchFingerUpMsg
         * @instance
         */
        CInputTouchFingerUpMsg.prototype.fingerid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInputTouchFingerUpMsg x_normalized.
         * @member {number} x_normalized
         * @memberof CInputTouchFingerUpMsg
         * @instance
         */
        CInputTouchFingerUpMsg.prototype.x_normalized = 0;
    
        /**
         * CInputTouchFingerUpMsg y_normalized.
         * @member {number} y_normalized
         * @memberof CInputTouchFingerUpMsg
         * @instance
         */
        CInputTouchFingerUpMsg.prototype.y_normalized = 0;
    
        /**
         * Creates a new CInputTouchFingerUpMsg instance using the specified properties.
         * @function create
         * @memberof CInputTouchFingerUpMsg
         * @static
         * @param {ICInputTouchFingerUpMsg=} [properties] Properties to set
         * @returns {CInputTouchFingerUpMsg} CInputTouchFingerUpMsg instance
         */
        CInputTouchFingerUpMsg.create = function create(properties) {
            return new CInputTouchFingerUpMsg(properties);
        };
    
        /**
         * Encodes the specified CInputTouchFingerUpMsg message. Does not implicitly {@link CInputTouchFingerUpMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputTouchFingerUpMsg
         * @static
         * @param {ICInputTouchFingerUpMsg} message CInputTouchFingerUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputTouchFingerUpMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.fingerid);
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.x_normalized);
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.y_normalized);
            return writer;
        };
    
        /**
         * Encodes the specified CInputTouchFingerUpMsg message, length delimited. Does not implicitly {@link CInputTouchFingerUpMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputTouchFingerUpMsg
         * @static
         * @param {ICInputTouchFingerUpMsg} message CInputTouchFingerUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputTouchFingerUpMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputTouchFingerUpMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputTouchFingerUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputTouchFingerUpMsg} CInputTouchFingerUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputTouchFingerUpMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputTouchFingerUpMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.fingerid = reader.uint64();
                    break;
                case 3:
                    message.x_normalized = reader.float();
                    break;
                case 4:
                    message.y_normalized = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInputTouchFingerUpMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputTouchFingerUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputTouchFingerUpMsg} CInputTouchFingerUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputTouchFingerUpMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputTouchFingerUpMsg message.
         * @function verify
         * @memberof CInputTouchFingerUpMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputTouchFingerUpMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                if (!$util.isInteger(message.fingerid) && !(message.fingerid && $util.isInteger(message.fingerid.low) && $util.isInteger(message.fingerid.high)))
                    return "fingerid: integer|Long expected";
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                if (typeof message.x_normalized !== "number")
                    return "x_normalized: number expected";
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                if (typeof message.y_normalized !== "number")
                    return "y_normalized: number expected";
            return null;
        };
    
        /**
         * Creates a CInputTouchFingerUpMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputTouchFingerUpMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputTouchFingerUpMsg} CInputTouchFingerUpMsg
         */
        CInputTouchFingerUpMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputTouchFingerUpMsg)
                return object;
            var message = new $root.CInputTouchFingerUpMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.fingerid != null)
                if ($util.Long)
                    (message.fingerid = $util.Long.fromValue(object.fingerid)).unsigned = true;
                else if (typeof object.fingerid === "string")
                    message.fingerid = parseInt(object.fingerid, 10);
                else if (typeof object.fingerid === "number")
                    message.fingerid = object.fingerid;
                else if (typeof object.fingerid === "object")
                    message.fingerid = new $util.LongBits(object.fingerid.low >>> 0, object.fingerid.high >>> 0).toNumber(true);
            if (object.x_normalized != null)
                message.x_normalized = Number(object.x_normalized);
            if (object.y_normalized != null)
                message.y_normalized = Number(object.y_normalized);
            return message;
        };
    
        /**
         * Creates a plain object from a CInputTouchFingerUpMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputTouchFingerUpMsg
         * @static
         * @param {CInputTouchFingerUpMsg} message CInputTouchFingerUpMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputTouchFingerUpMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.fingerid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fingerid = options.longs === String ? "0" : 0;
                object.x_normalized = 0;
                object.y_normalized = 0;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.fingerid != null && message.hasOwnProperty("fingerid"))
                if (typeof message.fingerid === "number")
                    object.fingerid = options.longs === String ? String(message.fingerid) : message.fingerid;
                else
                    object.fingerid = options.longs === String ? $util.Long.prototype.toString.call(message.fingerid) : options.longs === Number ? new $util.LongBits(message.fingerid.low >>> 0, message.fingerid.high >>> 0).toNumber(true) : message.fingerid;
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                object.x_normalized = options.json && !isFinite(message.x_normalized) ? String(message.x_normalized) : message.x_normalized;
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                object.y_normalized = options.json && !isFinite(message.y_normalized) ? String(message.y_normalized) : message.y_normalized;
            return object;
        };
    
        /**
         * Converts this CInputTouchFingerUpMsg to JSON.
         * @function toJSON
         * @memberof CInputTouchFingerUpMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputTouchFingerUpMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputTouchFingerUpMsg;
    })();
    
    $root.CInputMouseMotionMsg = (function() {
    
        /**
         * Properties of a CInputMouseMotionMsg.
         * @exports ICInputMouseMotionMsg
         * @interface ICInputMouseMotionMsg
         * @property {number|null} [input_mark] CInputMouseMotionMsg input_mark
         * @property {number|null} [x_normalized] CInputMouseMotionMsg x_normalized
         * @property {number|null} [y_normalized] CInputMouseMotionMsg y_normalized
         * @property {number|null} [dx] CInputMouseMotionMsg dx
         * @property {number|null} [dy] CInputMouseMotionMsg dy
         */
    
        /**
         * Constructs a new CInputMouseMotionMsg.
         * @exports CInputMouseMotionMsg
         * @classdesc Represents a CInputMouseMotionMsg.
         * @implements ICInputMouseMotionMsg
         * @constructor
         * @param {ICInputMouseMotionMsg=} [properties] Properties to set
         */
        function CInputMouseMotionMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputMouseMotionMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputMouseMotionMsg
         * @instance
         */
        CInputMouseMotionMsg.prototype.input_mark = 0;
    
        /**
         * CInputMouseMotionMsg x_normalized.
         * @member {number} x_normalized
         * @memberof CInputMouseMotionMsg
         * @instance
         */
        CInputMouseMotionMsg.prototype.x_normalized = 0;
    
        /**
         * CInputMouseMotionMsg y_normalized.
         * @member {number} y_normalized
         * @memberof CInputMouseMotionMsg
         * @instance
         */
        CInputMouseMotionMsg.prototype.y_normalized = 0;
    
        /**
         * CInputMouseMotionMsg dx.
         * @member {number} dx
         * @memberof CInputMouseMotionMsg
         * @instance
         */
        CInputMouseMotionMsg.prototype.dx = 0;
    
        /**
         * CInputMouseMotionMsg dy.
         * @member {number} dy
         * @memberof CInputMouseMotionMsg
         * @instance
         */
        CInputMouseMotionMsg.prototype.dy = 0;
    
        /**
         * Creates a new CInputMouseMotionMsg instance using the specified properties.
         * @function create
         * @memberof CInputMouseMotionMsg
         * @static
         * @param {ICInputMouseMotionMsg=} [properties] Properties to set
         * @returns {CInputMouseMotionMsg} CInputMouseMotionMsg instance
         */
        CInputMouseMotionMsg.create = function create(properties) {
            return new CInputMouseMotionMsg(properties);
        };
    
        /**
         * Encodes the specified CInputMouseMotionMsg message. Does not implicitly {@link CInputMouseMotionMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputMouseMotionMsg
         * @static
         * @param {ICInputMouseMotionMsg} message CInputMouseMotionMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputMouseMotionMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.x_normalized);
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.y_normalized);
            if (message.dx != null && message.hasOwnProperty("dx"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dx);
            if (message.dy != null && message.hasOwnProperty("dy"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dy);
            return writer;
        };
    
        /**
         * Encodes the specified CInputMouseMotionMsg message, length delimited. Does not implicitly {@link CInputMouseMotionMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputMouseMotionMsg
         * @static
         * @param {ICInputMouseMotionMsg} message CInputMouseMotionMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputMouseMotionMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputMouseMotionMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputMouseMotionMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputMouseMotionMsg} CInputMouseMotionMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputMouseMotionMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputMouseMotionMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.x_normalized = reader.float();
                    break;
                case 3:
                    message.y_normalized = reader.float();
                    break;
                case 4:
                    message.dx = reader.int32();
                    break;
                case 5:
                    message.dy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInputMouseMotionMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputMouseMotionMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputMouseMotionMsg} CInputMouseMotionMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputMouseMotionMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputMouseMotionMsg message.
         * @function verify
         * @memberof CInputMouseMotionMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputMouseMotionMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                if (typeof message.x_normalized !== "number")
                    return "x_normalized: number expected";
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                if (typeof message.y_normalized !== "number")
                    return "y_normalized: number expected";
            if (message.dx != null && message.hasOwnProperty("dx"))
                if (!$util.isInteger(message.dx))
                    return "dx: integer expected";
            if (message.dy != null && message.hasOwnProperty("dy"))
                if (!$util.isInteger(message.dy))
                    return "dy: integer expected";
            return null;
        };
    
        /**
         * Creates a CInputMouseMotionMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputMouseMotionMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputMouseMotionMsg} CInputMouseMotionMsg
         */
        CInputMouseMotionMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputMouseMotionMsg)
                return object;
            var message = new $root.CInputMouseMotionMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.x_normalized != null)
                message.x_normalized = Number(object.x_normalized);
            if (object.y_normalized != null)
                message.y_normalized = Number(object.y_normalized);
            if (object.dx != null)
                message.dx = object.dx | 0;
            if (object.dy != null)
                message.dy = object.dy | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInputMouseMotionMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputMouseMotionMsg
         * @static
         * @param {CInputMouseMotionMsg} message CInputMouseMotionMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputMouseMotionMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                object.x_normalized = 0;
                object.y_normalized = 0;
                object.dx = 0;
                object.dy = 0;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                object.x_normalized = options.json && !isFinite(message.x_normalized) ? String(message.x_normalized) : message.x_normalized;
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                object.y_normalized = options.json && !isFinite(message.y_normalized) ? String(message.y_normalized) : message.y_normalized;
            if (message.dx != null && message.hasOwnProperty("dx"))
                object.dx = message.dx;
            if (message.dy != null && message.hasOwnProperty("dy"))
                object.dy = message.dy;
            return object;
        };
    
        /**
         * Converts this CInputMouseMotionMsg to JSON.
         * @function toJSON
         * @memberof CInputMouseMotionMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputMouseMotionMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputMouseMotionMsg;
    })();
    
    $root.CInputMouseWheelMsg = (function() {
    
        /**
         * Properties of a CInputMouseWheelMsg.
         * @exports ICInputMouseWheelMsg
         * @interface ICInputMouseWheelMsg
         * @property {number|null} [input_mark] CInputMouseWheelMsg input_mark
         * @property {EStreamMouseWheelDirection} direction CInputMouseWheelMsg direction
         */
    
        /**
         * Constructs a new CInputMouseWheelMsg.
         * @exports CInputMouseWheelMsg
         * @classdesc Represents a CInputMouseWheelMsg.
         * @implements ICInputMouseWheelMsg
         * @constructor
         * @param {ICInputMouseWheelMsg=} [properties] Properties to set
         */
        function CInputMouseWheelMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputMouseWheelMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputMouseWheelMsg
         * @instance
         */
        CInputMouseWheelMsg.prototype.input_mark = 0;
    
        /**
         * CInputMouseWheelMsg direction.
         * @member {EStreamMouseWheelDirection} direction
         * @memberof CInputMouseWheelMsg
         * @instance
         */
        CInputMouseWheelMsg.prototype.direction = 120;
    
        /**
         * Creates a new CInputMouseWheelMsg instance using the specified properties.
         * @function create
         * @memberof CInputMouseWheelMsg
         * @static
         * @param {ICInputMouseWheelMsg=} [properties] Properties to set
         * @returns {CInputMouseWheelMsg} CInputMouseWheelMsg instance
         */
        CInputMouseWheelMsg.create = function create(properties) {
            return new CInputMouseWheelMsg(properties);
        };
    
        /**
         * Encodes the specified CInputMouseWheelMsg message. Does not implicitly {@link CInputMouseWheelMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputMouseWheelMsg
         * @static
         * @param {ICInputMouseWheelMsg} message CInputMouseWheelMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputMouseWheelMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.direction);
            return writer;
        };
    
        /**
         * Encodes the specified CInputMouseWheelMsg message, length delimited. Does not implicitly {@link CInputMouseWheelMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputMouseWheelMsg
         * @static
         * @param {ICInputMouseWheelMsg} message CInputMouseWheelMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputMouseWheelMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputMouseWheelMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputMouseWheelMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputMouseWheelMsg} CInputMouseWheelMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputMouseWheelMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputMouseWheelMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.direction = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("direction"))
                throw $util.ProtocolError("missing required 'direction'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CInputMouseWheelMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputMouseWheelMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputMouseWheelMsg} CInputMouseWheelMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputMouseWheelMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputMouseWheelMsg message.
         * @function verify
         * @memberof CInputMouseWheelMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputMouseWheelMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            switch (message.direction) {
            default:
                return "direction: enum value expected";
            case 120:
            case -120:
            case 3:
            case 4:
                break;
            }
            return null;
        };
    
        /**
         * Creates a CInputMouseWheelMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputMouseWheelMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputMouseWheelMsg} CInputMouseWheelMsg
         */
        CInputMouseWheelMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputMouseWheelMsg)
                return object;
            var message = new $root.CInputMouseWheelMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            switch (object.direction) {
            case "k_EStreamMouseWheelUp":
            case 120:
                message.direction = 120;
                break;
            case "k_EStreamMouseWheelDown":
            case -120:
                message.direction = -120;
                break;
            case "k_EStreamMouseWheelLeft":
            case 3:
                message.direction = 3;
                break;
            case "k_EStreamMouseWheelRight":
            case 4:
                message.direction = 4;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CInputMouseWheelMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputMouseWheelMsg
         * @static
         * @param {CInputMouseWheelMsg} message CInputMouseWheelMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputMouseWheelMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                object.direction = options.enums === String ? "k_EStreamMouseWheelUp" : 120;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.EStreamMouseWheelDirection[message.direction] : message.direction;
            return object;
        };
    
        /**
         * Converts this CInputMouseWheelMsg to JSON.
         * @function toJSON
         * @memberof CInputMouseWheelMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputMouseWheelMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputMouseWheelMsg;
    })();
    
    $root.CInputMouseDownMsg = (function() {
    
        /**
         * Properties of a CInputMouseDownMsg.
         * @exports ICInputMouseDownMsg
         * @interface ICInputMouseDownMsg
         * @property {number|null} [input_mark] CInputMouseDownMsg input_mark
         * @property {EStreamMouseButton} button CInputMouseDownMsg button
         */
    
        /**
         * Constructs a new CInputMouseDownMsg.
         * @exports CInputMouseDownMsg
         * @classdesc Represents a CInputMouseDownMsg.
         * @implements ICInputMouseDownMsg
         * @constructor
         * @param {ICInputMouseDownMsg=} [properties] Properties to set
         */
        function CInputMouseDownMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputMouseDownMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputMouseDownMsg
         * @instance
         */
        CInputMouseDownMsg.prototype.input_mark = 0;
    
        /**
         * CInputMouseDownMsg button.
         * @member {EStreamMouseButton} button
         * @memberof CInputMouseDownMsg
         * @instance
         */
        CInputMouseDownMsg.prototype.button = 1;
    
        /**
         * Creates a new CInputMouseDownMsg instance using the specified properties.
         * @function create
         * @memberof CInputMouseDownMsg
         * @static
         * @param {ICInputMouseDownMsg=} [properties] Properties to set
         * @returns {CInputMouseDownMsg} CInputMouseDownMsg instance
         */
        CInputMouseDownMsg.create = function create(properties) {
            return new CInputMouseDownMsg(properties);
        };
    
        /**
         * Encodes the specified CInputMouseDownMsg message. Does not implicitly {@link CInputMouseDownMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputMouseDownMsg
         * @static
         * @param {ICInputMouseDownMsg} message CInputMouseDownMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputMouseDownMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.button);
            return writer;
        };
    
        /**
         * Encodes the specified CInputMouseDownMsg message, length delimited. Does not implicitly {@link CInputMouseDownMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputMouseDownMsg
         * @static
         * @param {ICInputMouseDownMsg} message CInputMouseDownMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputMouseDownMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputMouseDownMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputMouseDownMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputMouseDownMsg} CInputMouseDownMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputMouseDownMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputMouseDownMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.button = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("button"))
                throw $util.ProtocolError("missing required 'button'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CInputMouseDownMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputMouseDownMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputMouseDownMsg} CInputMouseDownMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputMouseDownMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputMouseDownMsg message.
         * @function verify
         * @memberof CInputMouseDownMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputMouseDownMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            switch (message.button) {
            default:
                return "button: enum value expected";
            case 1:
            case 2:
            case 16:
            case 32:
            case 64:
            case 4096:
                break;
            }
            return null;
        };
    
        /**
         * Creates a CInputMouseDownMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputMouseDownMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputMouseDownMsg} CInputMouseDownMsg
         */
        CInputMouseDownMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputMouseDownMsg)
                return object;
            var message = new $root.CInputMouseDownMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            switch (object.button) {
            case "k_EStreamMouseButtonLeft":
            case 1:
                message.button = 1;
                break;
            case "k_EStreamMouseButtonRight":
            case 2:
                message.button = 2;
                break;
            case "k_EStreamMouseButtonMiddle":
            case 16:
                message.button = 16;
                break;
            case "k_EStreamMouseButtonX1":
            case 32:
                message.button = 32;
                break;
            case "k_EStreamMouseButtonX2":
            case 64:
                message.button = 64;
                break;
            case "k_EStreamMouseButtonUnknown":
            case 4096:
                message.button = 4096;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CInputMouseDownMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputMouseDownMsg
         * @static
         * @param {CInputMouseDownMsg} message CInputMouseDownMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputMouseDownMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                object.button = options.enums === String ? "k_EStreamMouseButtonLeft" : 1;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.button != null && message.hasOwnProperty("button"))
                object.button = options.enums === String ? $root.EStreamMouseButton[message.button] : message.button;
            return object;
        };
    
        /**
         * Converts this CInputMouseDownMsg to JSON.
         * @function toJSON
         * @memberof CInputMouseDownMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputMouseDownMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputMouseDownMsg;
    })();
    
    $root.CInputMouseUpMsg = (function() {
    
        /**
         * Properties of a CInputMouseUpMsg.
         * @exports ICInputMouseUpMsg
         * @interface ICInputMouseUpMsg
         * @property {number|null} [input_mark] CInputMouseUpMsg input_mark
         * @property {EStreamMouseButton} button CInputMouseUpMsg button
         */
    
        /**
         * Constructs a new CInputMouseUpMsg.
         * @exports CInputMouseUpMsg
         * @classdesc Represents a CInputMouseUpMsg.
         * @implements ICInputMouseUpMsg
         * @constructor
         * @param {ICInputMouseUpMsg=} [properties] Properties to set
         */
        function CInputMouseUpMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputMouseUpMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputMouseUpMsg
         * @instance
         */
        CInputMouseUpMsg.prototype.input_mark = 0;
    
        /**
         * CInputMouseUpMsg button.
         * @member {EStreamMouseButton} button
         * @memberof CInputMouseUpMsg
         * @instance
         */
        CInputMouseUpMsg.prototype.button = 1;
    
        /**
         * Creates a new CInputMouseUpMsg instance using the specified properties.
         * @function create
         * @memberof CInputMouseUpMsg
         * @static
         * @param {ICInputMouseUpMsg=} [properties] Properties to set
         * @returns {CInputMouseUpMsg} CInputMouseUpMsg instance
         */
        CInputMouseUpMsg.create = function create(properties) {
            return new CInputMouseUpMsg(properties);
        };
    
        /**
         * Encodes the specified CInputMouseUpMsg message. Does not implicitly {@link CInputMouseUpMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputMouseUpMsg
         * @static
         * @param {ICInputMouseUpMsg} message CInputMouseUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputMouseUpMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.button);
            return writer;
        };
    
        /**
         * Encodes the specified CInputMouseUpMsg message, length delimited. Does not implicitly {@link CInputMouseUpMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputMouseUpMsg
         * @static
         * @param {ICInputMouseUpMsg} message CInputMouseUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputMouseUpMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputMouseUpMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputMouseUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputMouseUpMsg} CInputMouseUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputMouseUpMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputMouseUpMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.button = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("button"))
                throw $util.ProtocolError("missing required 'button'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CInputMouseUpMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputMouseUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputMouseUpMsg} CInputMouseUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputMouseUpMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputMouseUpMsg message.
         * @function verify
         * @memberof CInputMouseUpMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputMouseUpMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            switch (message.button) {
            default:
                return "button: enum value expected";
            case 1:
            case 2:
            case 16:
            case 32:
            case 64:
            case 4096:
                break;
            }
            return null;
        };
    
        /**
         * Creates a CInputMouseUpMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputMouseUpMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputMouseUpMsg} CInputMouseUpMsg
         */
        CInputMouseUpMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputMouseUpMsg)
                return object;
            var message = new $root.CInputMouseUpMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            switch (object.button) {
            case "k_EStreamMouseButtonLeft":
            case 1:
                message.button = 1;
                break;
            case "k_EStreamMouseButtonRight":
            case 2:
                message.button = 2;
                break;
            case "k_EStreamMouseButtonMiddle":
            case 16:
                message.button = 16;
                break;
            case "k_EStreamMouseButtonX1":
            case 32:
                message.button = 32;
                break;
            case "k_EStreamMouseButtonX2":
            case 64:
                message.button = 64;
                break;
            case "k_EStreamMouseButtonUnknown":
            case 4096:
                message.button = 4096;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CInputMouseUpMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputMouseUpMsg
         * @static
         * @param {CInputMouseUpMsg} message CInputMouseUpMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputMouseUpMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                object.button = options.enums === String ? "k_EStreamMouseButtonLeft" : 1;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.button != null && message.hasOwnProperty("button"))
                object.button = options.enums === String ? $root.EStreamMouseButton[message.button] : message.button;
            return object;
        };
    
        /**
         * Converts this CInputMouseUpMsg to JSON.
         * @function toJSON
         * @memberof CInputMouseUpMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputMouseUpMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputMouseUpMsg;
    })();
    
    $root.CInputKeyDownMsg = (function() {
    
        /**
         * Properties of a CInputKeyDownMsg.
         * @exports ICInputKeyDownMsg
         * @interface ICInputKeyDownMsg
         * @property {number|null} [input_mark] CInputKeyDownMsg input_mark
         * @property {number} scancode CInputKeyDownMsg scancode
         */
    
        /**
         * Constructs a new CInputKeyDownMsg.
         * @exports CInputKeyDownMsg
         * @classdesc Represents a CInputKeyDownMsg.
         * @implements ICInputKeyDownMsg
         * @constructor
         * @param {ICInputKeyDownMsg=} [properties] Properties to set
         */
        function CInputKeyDownMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputKeyDownMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputKeyDownMsg
         * @instance
         */
        CInputKeyDownMsg.prototype.input_mark = 0;
    
        /**
         * CInputKeyDownMsg scancode.
         * @member {number} scancode
         * @memberof CInputKeyDownMsg
         * @instance
         */
        CInputKeyDownMsg.prototype.scancode = 0;
    
        /**
         * Creates a new CInputKeyDownMsg instance using the specified properties.
         * @function create
         * @memberof CInputKeyDownMsg
         * @static
         * @param {ICInputKeyDownMsg=} [properties] Properties to set
         * @returns {CInputKeyDownMsg} CInputKeyDownMsg instance
         */
        CInputKeyDownMsg.create = function create(properties) {
            return new CInputKeyDownMsg(properties);
        };
    
        /**
         * Encodes the specified CInputKeyDownMsg message. Does not implicitly {@link CInputKeyDownMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputKeyDownMsg
         * @static
         * @param {ICInputKeyDownMsg} message CInputKeyDownMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputKeyDownMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.scancode);
            return writer;
        };
    
        /**
         * Encodes the specified CInputKeyDownMsg message, length delimited. Does not implicitly {@link CInputKeyDownMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputKeyDownMsg
         * @static
         * @param {ICInputKeyDownMsg} message CInputKeyDownMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputKeyDownMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputKeyDownMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputKeyDownMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputKeyDownMsg} CInputKeyDownMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputKeyDownMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputKeyDownMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.scancode = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("scancode"))
                throw $util.ProtocolError("missing required 'scancode'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CInputKeyDownMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputKeyDownMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputKeyDownMsg} CInputKeyDownMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputKeyDownMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputKeyDownMsg message.
         * @function verify
         * @memberof CInputKeyDownMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputKeyDownMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            if (!$util.isInteger(message.scancode))
                return "scancode: integer expected";
            return null;
        };
    
        /**
         * Creates a CInputKeyDownMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputKeyDownMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputKeyDownMsg} CInputKeyDownMsg
         */
        CInputKeyDownMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputKeyDownMsg)
                return object;
            var message = new $root.CInputKeyDownMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.scancode != null)
                message.scancode = object.scancode >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInputKeyDownMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputKeyDownMsg
         * @static
         * @param {CInputKeyDownMsg} message CInputKeyDownMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputKeyDownMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                object.scancode = 0;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.scancode != null && message.hasOwnProperty("scancode"))
                object.scancode = message.scancode;
            return object;
        };
    
        /**
         * Converts this CInputKeyDownMsg to JSON.
         * @function toJSON
         * @memberof CInputKeyDownMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputKeyDownMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputKeyDownMsg;
    })();
    
    $root.CInputKeyUpMsg = (function() {
    
        /**
         * Properties of a CInputKeyUpMsg.
         * @exports ICInputKeyUpMsg
         * @interface ICInputKeyUpMsg
         * @property {number|null} [input_mark] CInputKeyUpMsg input_mark
         * @property {number} scancode CInputKeyUpMsg scancode
         */
    
        /**
         * Constructs a new CInputKeyUpMsg.
         * @exports CInputKeyUpMsg
         * @classdesc Represents a CInputKeyUpMsg.
         * @implements ICInputKeyUpMsg
         * @constructor
         * @param {ICInputKeyUpMsg=} [properties] Properties to set
         */
        function CInputKeyUpMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputKeyUpMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputKeyUpMsg
         * @instance
         */
        CInputKeyUpMsg.prototype.input_mark = 0;
    
        /**
         * CInputKeyUpMsg scancode.
         * @member {number} scancode
         * @memberof CInputKeyUpMsg
         * @instance
         */
        CInputKeyUpMsg.prototype.scancode = 0;
    
        /**
         * Creates a new CInputKeyUpMsg instance using the specified properties.
         * @function create
         * @memberof CInputKeyUpMsg
         * @static
         * @param {ICInputKeyUpMsg=} [properties] Properties to set
         * @returns {CInputKeyUpMsg} CInputKeyUpMsg instance
         */
        CInputKeyUpMsg.create = function create(properties) {
            return new CInputKeyUpMsg(properties);
        };
    
        /**
         * Encodes the specified CInputKeyUpMsg message. Does not implicitly {@link CInputKeyUpMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputKeyUpMsg
         * @static
         * @param {ICInputKeyUpMsg} message CInputKeyUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputKeyUpMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.scancode);
            return writer;
        };
    
        /**
         * Encodes the specified CInputKeyUpMsg message, length delimited. Does not implicitly {@link CInputKeyUpMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputKeyUpMsg
         * @static
         * @param {ICInputKeyUpMsg} message CInputKeyUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputKeyUpMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputKeyUpMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputKeyUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputKeyUpMsg} CInputKeyUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputKeyUpMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputKeyUpMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.scancode = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("scancode"))
                throw $util.ProtocolError("missing required 'scancode'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CInputKeyUpMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputKeyUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputKeyUpMsg} CInputKeyUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputKeyUpMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputKeyUpMsg message.
         * @function verify
         * @memberof CInputKeyUpMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputKeyUpMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            if (!$util.isInteger(message.scancode))
                return "scancode: integer expected";
            return null;
        };
    
        /**
         * Creates a CInputKeyUpMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputKeyUpMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputKeyUpMsg} CInputKeyUpMsg
         */
        CInputKeyUpMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputKeyUpMsg)
                return object;
            var message = new $root.CInputKeyUpMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.scancode != null)
                message.scancode = object.scancode >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInputKeyUpMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputKeyUpMsg
         * @static
         * @param {CInputKeyUpMsg} message CInputKeyUpMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputKeyUpMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                object.scancode = 0;
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.scancode != null && message.hasOwnProperty("scancode"))
                object.scancode = message.scancode;
            return object;
        };
    
        /**
         * Converts this CInputKeyUpMsg to JSON.
         * @function toJSON
         * @memberof CInputKeyUpMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputKeyUpMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputKeyUpMsg;
    })();
    
    $root.CInputTextMsg = (function() {
    
        /**
         * Properties of a CInputTextMsg.
         * @exports ICInputTextMsg
         * @interface ICInputTextMsg
         * @property {number|null} [input_mark] CInputTextMsg input_mark
         * @property {string} text_utf8 CInputTextMsg text_utf8
         */
    
        /**
         * Constructs a new CInputTextMsg.
         * @exports CInputTextMsg
         * @classdesc Represents a CInputTextMsg.
         * @implements ICInputTextMsg
         * @constructor
         * @param {ICInputTextMsg=} [properties] Properties to set
         */
        function CInputTextMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInputTextMsg input_mark.
         * @member {number} input_mark
         * @memberof CInputTextMsg
         * @instance
         */
        CInputTextMsg.prototype.input_mark = 0;
    
        /**
         * CInputTextMsg text_utf8.
         * @member {string} text_utf8
         * @memberof CInputTextMsg
         * @instance
         */
        CInputTextMsg.prototype.text_utf8 = "";
    
        /**
         * Creates a new CInputTextMsg instance using the specified properties.
         * @function create
         * @memberof CInputTextMsg
         * @static
         * @param {ICInputTextMsg=} [properties] Properties to set
         * @returns {CInputTextMsg} CInputTextMsg instance
         */
        CInputTextMsg.create = function create(properties) {
            return new CInputTextMsg(properties);
        };
    
        /**
         * Encodes the specified CInputTextMsg message. Does not implicitly {@link CInputTextMsg.verify|verify} messages.
         * @function encode
         * @memberof CInputTextMsg
         * @static
         * @param {ICInputTextMsg} message CInputTextMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputTextMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.input_mark);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.text_utf8);
            return writer;
        };
    
        /**
         * Encodes the specified CInputTextMsg message, length delimited. Does not implicitly {@link CInputTextMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInputTextMsg
         * @static
         * @param {ICInputTextMsg} message CInputTextMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInputTextMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInputTextMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CInputTextMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInputTextMsg} CInputTextMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputTextMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInputTextMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.input_mark = reader.uint32();
                    break;
                case 2:
                    message.text_utf8 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("text_utf8"))
                throw $util.ProtocolError("missing required 'text_utf8'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CInputTextMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInputTextMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInputTextMsg} CInputTextMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInputTextMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInputTextMsg message.
         * @function verify
         * @memberof CInputTextMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInputTextMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            if (!$util.isString(message.text_utf8))
                return "text_utf8: string expected";
            return null;
        };
    
        /**
         * Creates a CInputTextMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInputTextMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInputTextMsg} CInputTextMsg
         */
        CInputTextMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CInputTextMsg)
                return object;
            var message = new $root.CInputTextMsg();
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.text_utf8 != null)
                message.text_utf8 = String(object.text_utf8);
            return message;
        };
    
        /**
         * Creates a plain object from a CInputTextMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInputTextMsg
         * @static
         * @param {CInputTextMsg} message CInputTextMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInputTextMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.input_mark = 0;
                object.text_utf8 = "";
            }
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.text_utf8 != null && message.hasOwnProperty("text_utf8"))
                object.text_utf8 = message.text_utf8;
            return object;
        };
    
        /**
         * Converts this CInputTextMsg to JSON.
         * @function toJSON
         * @memberof CInputTextMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInputTextMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInputTextMsg;
    })();
    
    $root.CSetTitleMsg = (function() {
    
        /**
         * Properties of a CSetTitleMsg.
         * @exports ICSetTitleMsg
         * @interface ICSetTitleMsg
         * @property {string|null} [text] CSetTitleMsg text
         */
    
        /**
         * Constructs a new CSetTitleMsg.
         * @exports CSetTitleMsg
         * @classdesc Represents a CSetTitleMsg.
         * @implements ICSetTitleMsg
         * @constructor
         * @param {ICSetTitleMsg=} [properties] Properties to set
         */
        function CSetTitleMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetTitleMsg text.
         * @member {string} text
         * @memberof CSetTitleMsg
         * @instance
         */
        CSetTitleMsg.prototype.text = "";
    
        /**
         * Creates a new CSetTitleMsg instance using the specified properties.
         * @function create
         * @memberof CSetTitleMsg
         * @static
         * @param {ICSetTitleMsg=} [properties] Properties to set
         * @returns {CSetTitleMsg} CSetTitleMsg instance
         */
        CSetTitleMsg.create = function create(properties) {
            return new CSetTitleMsg(properties);
        };
    
        /**
         * Encodes the specified CSetTitleMsg message. Does not implicitly {@link CSetTitleMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetTitleMsg
         * @static
         * @param {ICSetTitleMsg} message CSetTitleMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTitleMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && message.hasOwnProperty("text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            return writer;
        };
    
        /**
         * Encodes the specified CSetTitleMsg message, length delimited. Does not implicitly {@link CSetTitleMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetTitleMsg
         * @static
         * @param {ICSetTitleMsg} message CSetTitleMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTitleMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetTitleMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetTitleMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetTitleMsg} CSetTitleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTitleMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetTitleMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetTitleMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetTitleMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetTitleMsg} CSetTitleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTitleMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetTitleMsg message.
         * @function verify
         * @memberof CSetTitleMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetTitleMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };
    
        /**
         * Creates a CSetTitleMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetTitleMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetTitleMsg} CSetTitleMsg
         */
        CSetTitleMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetTitleMsg)
                return object;
            var message = new $root.CSetTitleMsg();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };
    
        /**
         * Creates a plain object from a CSetTitleMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetTitleMsg
         * @static
         * @param {CSetTitleMsg} message CSetTitleMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetTitleMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };
    
        /**
         * Converts this CSetTitleMsg to JSON.
         * @function toJSON
         * @memberof CSetTitleMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetTitleMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetTitleMsg;
    })();
    
    $root.CSetCaptureSizeMsg = (function() {
    
        /**
         * Properties of a CSetCaptureSizeMsg.
         * @exports ICSetCaptureSizeMsg
         * @interface ICSetCaptureSizeMsg
         * @property {number|null} [width] CSetCaptureSizeMsg width
         * @property {number|null} [height] CSetCaptureSizeMsg height
         */
    
        /**
         * Constructs a new CSetCaptureSizeMsg.
         * @exports CSetCaptureSizeMsg
         * @classdesc Represents a CSetCaptureSizeMsg.
         * @implements ICSetCaptureSizeMsg
         * @constructor
         * @param {ICSetCaptureSizeMsg=} [properties] Properties to set
         */
        function CSetCaptureSizeMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetCaptureSizeMsg width.
         * @member {number} width
         * @memberof CSetCaptureSizeMsg
         * @instance
         */
        CSetCaptureSizeMsg.prototype.width = 0;
    
        /**
         * CSetCaptureSizeMsg height.
         * @member {number} height
         * @memberof CSetCaptureSizeMsg
         * @instance
         */
        CSetCaptureSizeMsg.prototype.height = 0;
    
        /**
         * Creates a new CSetCaptureSizeMsg instance using the specified properties.
         * @function create
         * @memberof CSetCaptureSizeMsg
         * @static
         * @param {ICSetCaptureSizeMsg=} [properties] Properties to set
         * @returns {CSetCaptureSizeMsg} CSetCaptureSizeMsg instance
         */
        CSetCaptureSizeMsg.create = function create(properties) {
            return new CSetCaptureSizeMsg(properties);
        };
    
        /**
         * Encodes the specified CSetCaptureSizeMsg message. Does not implicitly {@link CSetCaptureSizeMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetCaptureSizeMsg
         * @static
         * @param {ICSetCaptureSizeMsg} message CSetCaptureSizeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetCaptureSizeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
            return writer;
        };
    
        /**
         * Encodes the specified CSetCaptureSizeMsg message, length delimited. Does not implicitly {@link CSetCaptureSizeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetCaptureSizeMsg
         * @static
         * @param {ICSetCaptureSizeMsg} message CSetCaptureSizeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetCaptureSizeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetCaptureSizeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetCaptureSizeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetCaptureSizeMsg} CSetCaptureSizeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetCaptureSizeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetCaptureSizeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.width = reader.int32();
                    break;
                case 2:
                    message.height = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetCaptureSizeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetCaptureSizeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetCaptureSizeMsg} CSetCaptureSizeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetCaptureSizeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetCaptureSizeMsg message.
         * @function verify
         * @memberof CSetCaptureSizeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetCaptureSizeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };
    
        /**
         * Creates a CSetCaptureSizeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetCaptureSizeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetCaptureSizeMsg} CSetCaptureSizeMsg
         */
        CSetCaptureSizeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetCaptureSizeMsg)
                return object;
            var message = new $root.CSetCaptureSizeMsg();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetCaptureSizeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetCaptureSizeMsg
         * @static
         * @param {CSetCaptureSizeMsg} message CSetCaptureSizeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetCaptureSizeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };
    
        /**
         * Converts this CSetCaptureSizeMsg to JSON.
         * @function toJSON
         * @memberof CSetCaptureSizeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetCaptureSizeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetCaptureSizeMsg;
    })();
    
    $root.CSetIconMsg = (function() {
    
        /**
         * Properties of a CSetIconMsg.
         * @exports ICSetIconMsg
         * @interface ICSetIconMsg
         * @property {number|null} [width] CSetIconMsg width
         * @property {number|null} [height] CSetIconMsg height
         * @property {Uint8Array|null} [image] CSetIconMsg image
         */
    
        /**
         * Constructs a new CSetIconMsg.
         * @exports CSetIconMsg
         * @classdesc Represents a CSetIconMsg.
         * @implements ICSetIconMsg
         * @constructor
         * @param {ICSetIconMsg=} [properties] Properties to set
         */
        function CSetIconMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetIconMsg width.
         * @member {number} width
         * @memberof CSetIconMsg
         * @instance
         */
        CSetIconMsg.prototype.width = 0;
    
        /**
         * CSetIconMsg height.
         * @member {number} height
         * @memberof CSetIconMsg
         * @instance
         */
        CSetIconMsg.prototype.height = 0;
    
        /**
         * CSetIconMsg image.
         * @member {Uint8Array} image
         * @memberof CSetIconMsg
         * @instance
         */
        CSetIconMsg.prototype.image = $util.newBuffer([]);
    
        /**
         * Creates a new CSetIconMsg instance using the specified properties.
         * @function create
         * @memberof CSetIconMsg
         * @static
         * @param {ICSetIconMsg=} [properties] Properties to set
         * @returns {CSetIconMsg} CSetIconMsg instance
         */
        CSetIconMsg.create = function create(properties) {
            return new CSetIconMsg(properties);
        };
    
        /**
         * Encodes the specified CSetIconMsg message. Does not implicitly {@link CSetIconMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetIconMsg
         * @static
         * @param {ICSetIconMsg} message CSetIconMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetIconMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
            if (message.image != null && message.hasOwnProperty("image"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.image);
            return writer;
        };
    
        /**
         * Encodes the specified CSetIconMsg message, length delimited. Does not implicitly {@link CSetIconMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetIconMsg
         * @static
         * @param {ICSetIconMsg} message CSetIconMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetIconMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetIconMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetIconMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetIconMsg} CSetIconMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetIconMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetIconMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.width = reader.int32();
                    break;
                case 2:
                    message.height = reader.int32();
                    break;
                case 3:
                    message.image = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetIconMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetIconMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetIconMsg} CSetIconMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetIconMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetIconMsg message.
         * @function verify
         * @memberof CSetIconMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetIconMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!(message.image && typeof message.image.length === "number" || $util.isString(message.image)))
                    return "image: buffer expected";
            return null;
        };
    
        /**
         * Creates a CSetIconMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetIconMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetIconMsg} CSetIconMsg
         */
        CSetIconMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetIconMsg)
                return object;
            var message = new $root.CSetIconMsg();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.image != null)
                if (typeof object.image === "string")
                    $util.base64.decode(object.image, message.image = $util.newBuffer($util.base64.length(object.image)), 0);
                else if (object.image.length)
                    message.image = object.image;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetIconMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetIconMsg
         * @static
         * @param {CSetIconMsg} message CSetIconMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetIconMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
                if (options.bytes === String)
                    object.image = "";
                else {
                    object.image = [];
                    if (options.bytes !== Array)
                        object.image = $util.newBuffer(object.image);
                }
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = options.bytes === String ? $util.base64.encode(message.image, 0, message.image.length) : options.bytes === Array ? Array.prototype.slice.call(message.image) : message.image;
            return object;
        };
    
        /**
         * Converts this CSetIconMsg to JSON.
         * @function toJSON
         * @memberof CSetIconMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetIconMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetIconMsg;
    })();
    
    $root.CSetFlashStateMsg = (function() {
    
        /**
         * Properties of a CSetFlashStateMsg.
         * @exports ICSetFlashStateMsg
         * @interface ICSetFlashStateMsg
         * @property {number|null} [flags] CSetFlashStateMsg flags
         * @property {number|null} [count] CSetFlashStateMsg count
         * @property {number|null} [timeout_ms] CSetFlashStateMsg timeout_ms
         */
    
        /**
         * Constructs a new CSetFlashStateMsg.
         * @exports CSetFlashStateMsg
         * @classdesc Represents a CSetFlashStateMsg.
         * @implements ICSetFlashStateMsg
         * @constructor
         * @param {ICSetFlashStateMsg=} [properties] Properties to set
         */
        function CSetFlashStateMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetFlashStateMsg flags.
         * @member {number} flags
         * @memberof CSetFlashStateMsg
         * @instance
         */
        CSetFlashStateMsg.prototype.flags = 0;
    
        /**
         * CSetFlashStateMsg count.
         * @member {number} count
         * @memberof CSetFlashStateMsg
         * @instance
         */
        CSetFlashStateMsg.prototype.count = 0;
    
        /**
         * CSetFlashStateMsg timeout_ms.
         * @member {number} timeout_ms
         * @memberof CSetFlashStateMsg
         * @instance
         */
        CSetFlashStateMsg.prototype.timeout_ms = 0;
    
        /**
         * Creates a new CSetFlashStateMsg instance using the specified properties.
         * @function create
         * @memberof CSetFlashStateMsg
         * @static
         * @param {ICSetFlashStateMsg=} [properties] Properties to set
         * @returns {CSetFlashStateMsg} CSetFlashStateMsg instance
         */
        CSetFlashStateMsg.create = function create(properties) {
            return new CSetFlashStateMsg(properties);
        };
    
        /**
         * Encodes the specified CSetFlashStateMsg message. Does not implicitly {@link CSetFlashStateMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetFlashStateMsg
         * @static
         * @param {ICSetFlashStateMsg} message CSetFlashStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetFlashStateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.flags != null && message.hasOwnProperty("flags"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.flags);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            if (message.timeout_ms != null && message.hasOwnProperty("timeout_ms"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timeout_ms);
            return writer;
        };
    
        /**
         * Encodes the specified CSetFlashStateMsg message, length delimited. Does not implicitly {@link CSetFlashStateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetFlashStateMsg
         * @static
         * @param {ICSetFlashStateMsg} message CSetFlashStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetFlashStateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetFlashStateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetFlashStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetFlashStateMsg} CSetFlashStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetFlashStateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetFlashStateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.flags = reader.uint32();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                case 3:
                    message.timeout_ms = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetFlashStateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetFlashStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetFlashStateMsg} CSetFlashStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetFlashStateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetFlashStateMsg message.
         * @function verify
         * @memberof CSetFlashStateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetFlashStateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.timeout_ms != null && message.hasOwnProperty("timeout_ms"))
                if (!$util.isInteger(message.timeout_ms))
                    return "timeout_ms: integer expected";
            return null;
        };
    
        /**
         * Creates a CSetFlashStateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetFlashStateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetFlashStateMsg} CSetFlashStateMsg
         */
        CSetFlashStateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetFlashStateMsg)
                return object;
            var message = new $root.CSetFlashStateMsg();
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            if (object.timeout_ms != null)
                message.timeout_ms = object.timeout_ms >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetFlashStateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetFlashStateMsg
         * @static
         * @param {CSetFlashStateMsg} message CSetFlashStateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetFlashStateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.flags = 0;
                object.count = 0;
                object.timeout_ms = 0;
            }
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.timeout_ms != null && message.hasOwnProperty("timeout_ms"))
                object.timeout_ms = message.timeout_ms;
            return object;
        };
    
        /**
         * Converts this CSetFlashStateMsg to JSON.
         * @function toJSON
         * @memberof CSetFlashStateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetFlashStateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetFlashStateMsg;
    })();
    
    $root.CShowCursorMsg = (function() {
    
        /**
         * Properties of a CShowCursorMsg.
         * @exports ICShowCursorMsg
         * @interface ICShowCursorMsg
         * @property {number|null} [x_normalized] CShowCursorMsg x_normalized
         * @property {number|null} [y_normalized] CShowCursorMsg y_normalized
         */
    
        /**
         * Constructs a new CShowCursorMsg.
         * @exports CShowCursorMsg
         * @classdesc Represents a CShowCursorMsg.
         * @implements ICShowCursorMsg
         * @constructor
         * @param {ICShowCursorMsg=} [properties] Properties to set
         */
        function CShowCursorMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CShowCursorMsg x_normalized.
         * @member {number} x_normalized
         * @memberof CShowCursorMsg
         * @instance
         */
        CShowCursorMsg.prototype.x_normalized = 0;
    
        /**
         * CShowCursorMsg y_normalized.
         * @member {number} y_normalized
         * @memberof CShowCursorMsg
         * @instance
         */
        CShowCursorMsg.prototype.y_normalized = 0;
    
        /**
         * Creates a new CShowCursorMsg instance using the specified properties.
         * @function create
         * @memberof CShowCursorMsg
         * @static
         * @param {ICShowCursorMsg=} [properties] Properties to set
         * @returns {CShowCursorMsg} CShowCursorMsg instance
         */
        CShowCursorMsg.create = function create(properties) {
            return new CShowCursorMsg(properties);
        };
    
        /**
         * Encodes the specified CShowCursorMsg message. Does not implicitly {@link CShowCursorMsg.verify|verify} messages.
         * @function encode
         * @memberof CShowCursorMsg
         * @static
         * @param {ICShowCursorMsg} message CShowCursorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CShowCursorMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x_normalized);
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y_normalized);
            return writer;
        };
    
        /**
         * Encodes the specified CShowCursorMsg message, length delimited. Does not implicitly {@link CShowCursorMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CShowCursorMsg
         * @static
         * @param {ICShowCursorMsg} message CShowCursorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CShowCursorMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CShowCursorMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CShowCursorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CShowCursorMsg} CShowCursorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CShowCursorMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CShowCursorMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x_normalized = reader.float();
                    break;
                case 2:
                    message.y_normalized = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CShowCursorMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CShowCursorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CShowCursorMsg} CShowCursorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CShowCursorMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CShowCursorMsg message.
         * @function verify
         * @memberof CShowCursorMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CShowCursorMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                if (typeof message.x_normalized !== "number")
                    return "x_normalized: number expected";
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                if (typeof message.y_normalized !== "number")
                    return "y_normalized: number expected";
            return null;
        };
    
        /**
         * Creates a CShowCursorMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CShowCursorMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CShowCursorMsg} CShowCursorMsg
         */
        CShowCursorMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CShowCursorMsg)
                return object;
            var message = new $root.CShowCursorMsg();
            if (object.x_normalized != null)
                message.x_normalized = Number(object.x_normalized);
            if (object.y_normalized != null)
                message.y_normalized = Number(object.y_normalized);
            return message;
        };
    
        /**
         * Creates a plain object from a CShowCursorMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CShowCursorMsg
         * @static
         * @param {CShowCursorMsg} message CShowCursorMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CShowCursorMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x_normalized = 0;
                object.y_normalized = 0;
            }
            if (message.x_normalized != null && message.hasOwnProperty("x_normalized"))
                object.x_normalized = options.json && !isFinite(message.x_normalized) ? String(message.x_normalized) : message.x_normalized;
            if (message.y_normalized != null && message.hasOwnProperty("y_normalized"))
                object.y_normalized = options.json && !isFinite(message.y_normalized) ? String(message.y_normalized) : message.y_normalized;
            return object;
        };
    
        /**
         * Converts this CShowCursorMsg to JSON.
         * @function toJSON
         * @memberof CShowCursorMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CShowCursorMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CShowCursorMsg;
    })();
    
    $root.CHideCursorMsg = (function() {
    
        /**
         * Properties of a CHideCursorMsg.
         * @exports ICHideCursorMsg
         * @interface ICHideCursorMsg
         */
    
        /**
         * Constructs a new CHideCursorMsg.
         * @exports CHideCursorMsg
         * @classdesc Represents a CHideCursorMsg.
         * @implements ICHideCursorMsg
         * @constructor
         * @param {ICHideCursorMsg=} [properties] Properties to set
         */
        function CHideCursorMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CHideCursorMsg instance using the specified properties.
         * @function create
         * @memberof CHideCursorMsg
         * @static
         * @param {ICHideCursorMsg=} [properties] Properties to set
         * @returns {CHideCursorMsg} CHideCursorMsg instance
         */
        CHideCursorMsg.create = function create(properties) {
            return new CHideCursorMsg(properties);
        };
    
        /**
         * Encodes the specified CHideCursorMsg message. Does not implicitly {@link CHideCursorMsg.verify|verify} messages.
         * @function encode
         * @memberof CHideCursorMsg
         * @static
         * @param {ICHideCursorMsg} message CHideCursorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHideCursorMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CHideCursorMsg message, length delimited. Does not implicitly {@link CHideCursorMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CHideCursorMsg
         * @static
         * @param {ICHideCursorMsg} message CHideCursorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHideCursorMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CHideCursorMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CHideCursorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CHideCursorMsg} CHideCursorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHideCursorMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHideCursorMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CHideCursorMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CHideCursorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CHideCursorMsg} CHideCursorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHideCursorMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CHideCursorMsg message.
         * @function verify
         * @memberof CHideCursorMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CHideCursorMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CHideCursorMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CHideCursorMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CHideCursorMsg} CHideCursorMsg
         */
        CHideCursorMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CHideCursorMsg)
                return object;
            return new $root.CHideCursorMsg();
        };
    
        /**
         * Creates a plain object from a CHideCursorMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CHideCursorMsg
         * @static
         * @param {CHideCursorMsg} message CHideCursorMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CHideCursorMsg.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CHideCursorMsg to JSON.
         * @function toJSON
         * @memberof CHideCursorMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CHideCursorMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CHideCursorMsg;
    })();
    
    $root.CSetCursorMsg = (function() {
    
        /**
         * Properties of a CSetCursorMsg.
         * @exports ICSetCursorMsg
         * @interface ICSetCursorMsg
         * @property {number|Long} cursor_id CSetCursorMsg cursor_id
         */
    
        /**
         * Constructs a new CSetCursorMsg.
         * @exports CSetCursorMsg
         * @classdesc Represents a CSetCursorMsg.
         * @implements ICSetCursorMsg
         * @constructor
         * @param {ICSetCursorMsg=} [properties] Properties to set
         */
        function CSetCursorMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetCursorMsg cursor_id.
         * @member {number|Long} cursor_id
         * @memberof CSetCursorMsg
         * @instance
         */
        CSetCursorMsg.prototype.cursor_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CSetCursorMsg instance using the specified properties.
         * @function create
         * @memberof CSetCursorMsg
         * @static
         * @param {ICSetCursorMsg=} [properties] Properties to set
         * @returns {CSetCursorMsg} CSetCursorMsg instance
         */
        CSetCursorMsg.create = function create(properties) {
            return new CSetCursorMsg(properties);
        };
    
        /**
         * Encodes the specified CSetCursorMsg message. Does not implicitly {@link CSetCursorMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetCursorMsg
         * @static
         * @param {ICSetCursorMsg} message CSetCursorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetCursorMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.cursor_id);
            return writer;
        };
    
        /**
         * Encodes the specified CSetCursorMsg message, length delimited. Does not implicitly {@link CSetCursorMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetCursorMsg
         * @static
         * @param {ICSetCursorMsg} message CSetCursorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetCursorMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetCursorMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetCursorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetCursorMsg} CSetCursorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetCursorMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetCursorMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cursor_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cursor_id"))
                throw $util.ProtocolError("missing required 'cursor_id'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CSetCursorMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetCursorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetCursorMsg} CSetCursorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetCursorMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetCursorMsg message.
         * @function verify
         * @memberof CSetCursorMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetCursorMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.cursor_id) && !(message.cursor_id && $util.isInteger(message.cursor_id.low) && $util.isInteger(message.cursor_id.high)))
                return "cursor_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CSetCursorMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetCursorMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetCursorMsg} CSetCursorMsg
         */
        CSetCursorMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetCursorMsg)
                return object;
            var message = new $root.CSetCursorMsg();
            if (object.cursor_id != null)
                if ($util.Long)
                    (message.cursor_id = $util.Long.fromValue(object.cursor_id)).unsigned = true;
                else if (typeof object.cursor_id === "string")
                    message.cursor_id = parseInt(object.cursor_id, 10);
                else if (typeof object.cursor_id === "number")
                    message.cursor_id = object.cursor_id;
                else if (typeof object.cursor_id === "object")
                    message.cursor_id = new $util.LongBits(object.cursor_id.low >>> 0, object.cursor_id.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CSetCursorMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetCursorMsg
         * @static
         * @param {CSetCursorMsg} message CSetCursorMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetCursorMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cursor_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cursor_id = options.longs === String ? "0" : 0;
            if (message.cursor_id != null && message.hasOwnProperty("cursor_id"))
                if (typeof message.cursor_id === "number")
                    object.cursor_id = options.longs === String ? String(message.cursor_id) : message.cursor_id;
                else
                    object.cursor_id = options.longs === String ? $util.Long.prototype.toString.call(message.cursor_id) : options.longs === Number ? new $util.LongBits(message.cursor_id.low >>> 0, message.cursor_id.high >>> 0).toNumber(true) : message.cursor_id;
            return object;
        };
    
        /**
         * Converts this CSetCursorMsg to JSON.
         * @function toJSON
         * @memberof CSetCursorMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetCursorMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetCursorMsg;
    })();
    
    $root.CGetCursorImageMsg = (function() {
    
        /**
         * Properties of a CGetCursorImageMsg.
         * @exports ICGetCursorImageMsg
         * @interface ICGetCursorImageMsg
         * @property {number|Long} cursor_id CGetCursorImageMsg cursor_id
         */
    
        /**
         * Constructs a new CGetCursorImageMsg.
         * @exports CGetCursorImageMsg
         * @classdesc Represents a CGetCursorImageMsg.
         * @implements ICGetCursorImageMsg
         * @constructor
         * @param {ICGetCursorImageMsg=} [properties] Properties to set
         */
        function CGetCursorImageMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGetCursorImageMsg cursor_id.
         * @member {number|Long} cursor_id
         * @memberof CGetCursorImageMsg
         * @instance
         */
        CGetCursorImageMsg.prototype.cursor_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CGetCursorImageMsg instance using the specified properties.
         * @function create
         * @memberof CGetCursorImageMsg
         * @static
         * @param {ICGetCursorImageMsg=} [properties] Properties to set
         * @returns {CGetCursorImageMsg} CGetCursorImageMsg instance
         */
        CGetCursorImageMsg.create = function create(properties) {
            return new CGetCursorImageMsg(properties);
        };
    
        /**
         * Encodes the specified CGetCursorImageMsg message. Does not implicitly {@link CGetCursorImageMsg.verify|verify} messages.
         * @function encode
         * @memberof CGetCursorImageMsg
         * @static
         * @param {ICGetCursorImageMsg} message CGetCursorImageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetCursorImageMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.cursor_id);
            return writer;
        };
    
        /**
         * Encodes the specified CGetCursorImageMsg message, length delimited. Does not implicitly {@link CGetCursorImageMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGetCursorImageMsg
         * @static
         * @param {ICGetCursorImageMsg} message CGetCursorImageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetCursorImageMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGetCursorImageMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CGetCursorImageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGetCursorImageMsg} CGetCursorImageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetCursorImageMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGetCursorImageMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cursor_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cursor_id"))
                throw $util.ProtocolError("missing required 'cursor_id'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CGetCursorImageMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGetCursorImageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGetCursorImageMsg} CGetCursorImageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetCursorImageMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGetCursorImageMsg message.
         * @function verify
         * @memberof CGetCursorImageMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGetCursorImageMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.cursor_id) && !(message.cursor_id && $util.isInteger(message.cursor_id.low) && $util.isInteger(message.cursor_id.high)))
                return "cursor_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CGetCursorImageMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGetCursorImageMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGetCursorImageMsg} CGetCursorImageMsg
         */
        CGetCursorImageMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CGetCursorImageMsg)
                return object;
            var message = new $root.CGetCursorImageMsg();
            if (object.cursor_id != null)
                if ($util.Long)
                    (message.cursor_id = $util.Long.fromValue(object.cursor_id)).unsigned = true;
                else if (typeof object.cursor_id === "string")
                    message.cursor_id = parseInt(object.cursor_id, 10);
                else if (typeof object.cursor_id === "number")
                    message.cursor_id = object.cursor_id;
                else if (typeof object.cursor_id === "object")
                    message.cursor_id = new $util.LongBits(object.cursor_id.low >>> 0, object.cursor_id.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CGetCursorImageMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGetCursorImageMsg
         * @static
         * @param {CGetCursorImageMsg} message CGetCursorImageMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGetCursorImageMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cursor_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cursor_id = options.longs === String ? "0" : 0;
            if (message.cursor_id != null && message.hasOwnProperty("cursor_id"))
                if (typeof message.cursor_id === "number")
                    object.cursor_id = options.longs === String ? String(message.cursor_id) : message.cursor_id;
                else
                    object.cursor_id = options.longs === String ? $util.Long.prototype.toString.call(message.cursor_id) : options.longs === Number ? new $util.LongBits(message.cursor_id.low >>> 0, message.cursor_id.high >>> 0).toNumber(true) : message.cursor_id;
            return object;
        };
    
        /**
         * Converts this CGetCursorImageMsg to JSON.
         * @function toJSON
         * @memberof CGetCursorImageMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGetCursorImageMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGetCursorImageMsg;
    })();
    
    $root.CSetCursorImageMsg = (function() {
    
        /**
         * Properties of a CSetCursorImageMsg.
         * @exports ICSetCursorImageMsg
         * @interface ICSetCursorImageMsg
         * @property {number|Long} cursor_id CSetCursorImageMsg cursor_id
         * @property {number|null} [width] CSetCursorImageMsg width
         * @property {number|null} [height] CSetCursorImageMsg height
         * @property {number|null} [hot_x] CSetCursorImageMsg hot_x
         * @property {number|null} [hot_y] CSetCursorImageMsg hot_y
         * @property {Uint8Array|null} [image] CSetCursorImageMsg image
         */
    
        /**
         * Constructs a new CSetCursorImageMsg.
         * @exports CSetCursorImageMsg
         * @classdesc Represents a CSetCursorImageMsg.
         * @implements ICSetCursorImageMsg
         * @constructor
         * @param {ICSetCursorImageMsg=} [properties] Properties to set
         */
        function CSetCursorImageMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetCursorImageMsg cursor_id.
         * @member {number|Long} cursor_id
         * @memberof CSetCursorImageMsg
         * @instance
         */
        CSetCursorImageMsg.prototype.cursor_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CSetCursorImageMsg width.
         * @member {number} width
         * @memberof CSetCursorImageMsg
         * @instance
         */
        CSetCursorImageMsg.prototype.width = 0;
    
        /**
         * CSetCursorImageMsg height.
         * @member {number} height
         * @memberof CSetCursorImageMsg
         * @instance
         */
        CSetCursorImageMsg.prototype.height = 0;
    
        /**
         * CSetCursorImageMsg hot_x.
         * @member {number} hot_x
         * @memberof CSetCursorImageMsg
         * @instance
         */
        CSetCursorImageMsg.prototype.hot_x = 0;
    
        /**
         * CSetCursorImageMsg hot_y.
         * @member {number} hot_y
         * @memberof CSetCursorImageMsg
         * @instance
         */
        CSetCursorImageMsg.prototype.hot_y = 0;
    
        /**
         * CSetCursorImageMsg image.
         * @member {Uint8Array} image
         * @memberof CSetCursorImageMsg
         * @instance
         */
        CSetCursorImageMsg.prototype.image = $util.newBuffer([]);
    
        /**
         * Creates a new CSetCursorImageMsg instance using the specified properties.
         * @function create
         * @memberof CSetCursorImageMsg
         * @static
         * @param {ICSetCursorImageMsg=} [properties] Properties to set
         * @returns {CSetCursorImageMsg} CSetCursorImageMsg instance
         */
        CSetCursorImageMsg.create = function create(properties) {
            return new CSetCursorImageMsg(properties);
        };
    
        /**
         * Encodes the specified CSetCursorImageMsg message. Does not implicitly {@link CSetCursorImageMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetCursorImageMsg
         * @static
         * @param {ICSetCursorImageMsg} message CSetCursorImageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetCursorImageMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.cursor_id);
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.height);
            if (message.hot_x != null && message.hasOwnProperty("hot_x"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hot_x);
            if (message.hot_y != null && message.hasOwnProperty("hot_y"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hot_y);
            if (message.image != null && message.hasOwnProperty("image"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.image);
            return writer;
        };
    
        /**
         * Encodes the specified CSetCursorImageMsg message, length delimited. Does not implicitly {@link CSetCursorImageMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetCursorImageMsg
         * @static
         * @param {ICSetCursorImageMsg} message CSetCursorImageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetCursorImageMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetCursorImageMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetCursorImageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetCursorImageMsg} CSetCursorImageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetCursorImageMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetCursorImageMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cursor_id = reader.uint64();
                    break;
                case 2:
                    message.width = reader.int32();
                    break;
                case 3:
                    message.height = reader.int32();
                    break;
                case 4:
                    message.hot_x = reader.int32();
                    break;
                case 5:
                    message.hot_y = reader.int32();
                    break;
                case 6:
                    message.image = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cursor_id"))
                throw $util.ProtocolError("missing required 'cursor_id'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CSetCursorImageMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetCursorImageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetCursorImageMsg} CSetCursorImageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetCursorImageMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetCursorImageMsg message.
         * @function verify
         * @memberof CSetCursorImageMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetCursorImageMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.cursor_id) && !(message.cursor_id && $util.isInteger(message.cursor_id.low) && $util.isInteger(message.cursor_id.high)))
                return "cursor_id: integer|Long expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.hot_x != null && message.hasOwnProperty("hot_x"))
                if (!$util.isInteger(message.hot_x))
                    return "hot_x: integer expected";
            if (message.hot_y != null && message.hasOwnProperty("hot_y"))
                if (!$util.isInteger(message.hot_y))
                    return "hot_y: integer expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!(message.image && typeof message.image.length === "number" || $util.isString(message.image)))
                    return "image: buffer expected";
            return null;
        };
    
        /**
         * Creates a CSetCursorImageMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetCursorImageMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetCursorImageMsg} CSetCursorImageMsg
         */
        CSetCursorImageMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetCursorImageMsg)
                return object;
            var message = new $root.CSetCursorImageMsg();
            if (object.cursor_id != null)
                if ($util.Long)
                    (message.cursor_id = $util.Long.fromValue(object.cursor_id)).unsigned = true;
                else if (typeof object.cursor_id === "string")
                    message.cursor_id = parseInt(object.cursor_id, 10);
                else if (typeof object.cursor_id === "number")
                    message.cursor_id = object.cursor_id;
                else if (typeof object.cursor_id === "object")
                    message.cursor_id = new $util.LongBits(object.cursor_id.low >>> 0, object.cursor_id.high >>> 0).toNumber(true);
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.hot_x != null)
                message.hot_x = object.hot_x | 0;
            if (object.hot_y != null)
                message.hot_y = object.hot_y | 0;
            if (object.image != null)
                if (typeof object.image === "string")
                    $util.base64.decode(object.image, message.image = $util.newBuffer($util.base64.length(object.image)), 0);
                else if (object.image.length)
                    message.image = object.image;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetCursorImageMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetCursorImageMsg
         * @static
         * @param {CSetCursorImageMsg} message CSetCursorImageMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetCursorImageMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cursor_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cursor_id = options.longs === String ? "0" : 0;
                object.width = 0;
                object.height = 0;
                object.hot_x = 0;
                object.hot_y = 0;
                if (options.bytes === String)
                    object.image = "";
                else {
                    object.image = [];
                    if (options.bytes !== Array)
                        object.image = $util.newBuffer(object.image);
                }
            }
            if (message.cursor_id != null && message.hasOwnProperty("cursor_id"))
                if (typeof message.cursor_id === "number")
                    object.cursor_id = options.longs === String ? String(message.cursor_id) : message.cursor_id;
                else
                    object.cursor_id = options.longs === String ? $util.Long.prototype.toString.call(message.cursor_id) : options.longs === Number ? new $util.LongBits(message.cursor_id.low >>> 0, message.cursor_id.high >>> 0).toNumber(true) : message.cursor_id;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.hot_x != null && message.hasOwnProperty("hot_x"))
                object.hot_x = message.hot_x;
            if (message.hot_y != null && message.hasOwnProperty("hot_y"))
                object.hot_y = message.hot_y;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = options.bytes === String ? $util.base64.encode(message.image, 0, message.image.length) : options.bytes === Array ? Array.prototype.slice.call(message.image) : message.image;
            return object;
        };
    
        /**
         * Converts this CSetCursorImageMsg to JSON.
         * @function toJSON
         * @memberof CSetCursorImageMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetCursorImageMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetCursorImageMsg;
    })();
    
    $root.CVideoDecoderInfoMsg = (function() {
    
        /**
         * Properties of a CVideoDecoderInfoMsg.
         * @exports ICVideoDecoderInfoMsg
         * @interface ICVideoDecoderInfoMsg
         * @property {string|null} [info] CVideoDecoderInfoMsg info
         * @property {number|null} [threads] CVideoDecoderInfoMsg threads
         */
    
        /**
         * Constructs a new CVideoDecoderInfoMsg.
         * @exports CVideoDecoderInfoMsg
         * @classdesc Represents a CVideoDecoderInfoMsg.
         * @implements ICVideoDecoderInfoMsg
         * @constructor
         * @param {ICVideoDecoderInfoMsg=} [properties] Properties to set
         */
        function CVideoDecoderInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVideoDecoderInfoMsg info.
         * @member {string} info
         * @memberof CVideoDecoderInfoMsg
         * @instance
         */
        CVideoDecoderInfoMsg.prototype.info = "";
    
        /**
         * CVideoDecoderInfoMsg threads.
         * @member {number} threads
         * @memberof CVideoDecoderInfoMsg
         * @instance
         */
        CVideoDecoderInfoMsg.prototype.threads = 0;
    
        /**
         * Creates a new CVideoDecoderInfoMsg instance using the specified properties.
         * @function create
         * @memberof CVideoDecoderInfoMsg
         * @static
         * @param {ICVideoDecoderInfoMsg=} [properties] Properties to set
         * @returns {CVideoDecoderInfoMsg} CVideoDecoderInfoMsg instance
         */
        CVideoDecoderInfoMsg.create = function create(properties) {
            return new CVideoDecoderInfoMsg(properties);
        };
    
        /**
         * Encodes the specified CVideoDecoderInfoMsg message. Does not implicitly {@link CVideoDecoderInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof CVideoDecoderInfoMsg
         * @static
         * @param {ICVideoDecoderInfoMsg} message CVideoDecoderInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVideoDecoderInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && message.hasOwnProperty("info"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.info);
            if (message.threads != null && message.hasOwnProperty("threads"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.threads);
            return writer;
        };
    
        /**
         * Encodes the specified CVideoDecoderInfoMsg message, length delimited. Does not implicitly {@link CVideoDecoderInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVideoDecoderInfoMsg
         * @static
         * @param {ICVideoDecoderInfoMsg} message CVideoDecoderInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVideoDecoderInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVideoDecoderInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CVideoDecoderInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVideoDecoderInfoMsg} CVideoDecoderInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVideoDecoderInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVideoDecoderInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = reader.string();
                    break;
                case 2:
                    message.threads = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVideoDecoderInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVideoDecoderInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVideoDecoderInfoMsg} CVideoDecoderInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVideoDecoderInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVideoDecoderInfoMsg message.
         * @function verify
         * @memberof CVideoDecoderInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVideoDecoderInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            if (message.threads != null && message.hasOwnProperty("threads"))
                if (!$util.isInteger(message.threads))
                    return "threads: integer expected";
            return null;
        };
    
        /**
         * Creates a CVideoDecoderInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVideoDecoderInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVideoDecoderInfoMsg} CVideoDecoderInfoMsg
         */
        CVideoDecoderInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CVideoDecoderInfoMsg)
                return object;
            var message = new $root.CVideoDecoderInfoMsg();
            if (object.info != null)
                message.info = String(object.info);
            if (object.threads != null)
                message.threads = object.threads | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CVideoDecoderInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVideoDecoderInfoMsg
         * @static
         * @param {CVideoDecoderInfoMsg} message CVideoDecoderInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVideoDecoderInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.info = "";
                object.threads = 0;
            }
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            if (message.threads != null && message.hasOwnProperty("threads"))
                object.threads = message.threads;
            return object;
        };
    
        /**
         * Converts this CVideoDecoderInfoMsg to JSON.
         * @function toJSON
         * @memberof CVideoDecoderInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVideoDecoderInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVideoDecoderInfoMsg;
    })();
    
    $root.CVideoEncoderInfoMsg = (function() {
    
        /**
         * Properties of a CVideoEncoderInfoMsg.
         * @exports ICVideoEncoderInfoMsg
         * @interface ICVideoEncoderInfoMsg
         * @property {string|null} [info] CVideoEncoderInfoMsg info
         */
    
        /**
         * Constructs a new CVideoEncoderInfoMsg.
         * @exports CVideoEncoderInfoMsg
         * @classdesc Represents a CVideoEncoderInfoMsg.
         * @implements ICVideoEncoderInfoMsg
         * @constructor
         * @param {ICVideoEncoderInfoMsg=} [properties] Properties to set
         */
        function CVideoEncoderInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVideoEncoderInfoMsg info.
         * @member {string} info
         * @memberof CVideoEncoderInfoMsg
         * @instance
         */
        CVideoEncoderInfoMsg.prototype.info = "";
    
        /**
         * Creates a new CVideoEncoderInfoMsg instance using the specified properties.
         * @function create
         * @memberof CVideoEncoderInfoMsg
         * @static
         * @param {ICVideoEncoderInfoMsg=} [properties] Properties to set
         * @returns {CVideoEncoderInfoMsg} CVideoEncoderInfoMsg instance
         */
        CVideoEncoderInfoMsg.create = function create(properties) {
            return new CVideoEncoderInfoMsg(properties);
        };
    
        /**
         * Encodes the specified CVideoEncoderInfoMsg message. Does not implicitly {@link CVideoEncoderInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof CVideoEncoderInfoMsg
         * @static
         * @param {ICVideoEncoderInfoMsg} message CVideoEncoderInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVideoEncoderInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && message.hasOwnProperty("info"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.info);
            return writer;
        };
    
        /**
         * Encodes the specified CVideoEncoderInfoMsg message, length delimited. Does not implicitly {@link CVideoEncoderInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVideoEncoderInfoMsg
         * @static
         * @param {ICVideoEncoderInfoMsg} message CVideoEncoderInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVideoEncoderInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVideoEncoderInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CVideoEncoderInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVideoEncoderInfoMsg} CVideoEncoderInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVideoEncoderInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVideoEncoderInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVideoEncoderInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVideoEncoderInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVideoEncoderInfoMsg} CVideoEncoderInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVideoEncoderInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVideoEncoderInfoMsg message.
         * @function verify
         * @memberof CVideoEncoderInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVideoEncoderInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            return null;
        };
    
        /**
         * Creates a CVideoEncoderInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVideoEncoderInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVideoEncoderInfoMsg} CVideoEncoderInfoMsg
         */
        CVideoEncoderInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CVideoEncoderInfoMsg)
                return object;
            var message = new $root.CVideoEncoderInfoMsg();
            if (object.info != null)
                message.info = String(object.info);
            return message;
        };
    
        /**
         * Creates a plain object from a CVideoEncoderInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVideoEncoderInfoMsg
         * @static
         * @param {CVideoEncoderInfoMsg} message CVideoEncoderInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVideoEncoderInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.info = "";
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            return object;
        };
    
        /**
         * Converts this CVideoEncoderInfoMsg to JSON.
         * @function toJSON
         * @memberof CVideoEncoderInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVideoEncoderInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVideoEncoderInfoMsg;
    })();
    
    $root.CQuitRequest = (function() {
    
        /**
         * Properties of a CQuitRequest.
         * @exports ICQuitRequest
         * @interface ICQuitRequest
         */
    
        /**
         * Constructs a new CQuitRequest.
         * @exports CQuitRequest
         * @classdesc Represents a CQuitRequest.
         * @implements ICQuitRequest
         * @constructor
         * @param {ICQuitRequest=} [properties] Properties to set
         */
        function CQuitRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CQuitRequest instance using the specified properties.
         * @function create
         * @memberof CQuitRequest
         * @static
         * @param {ICQuitRequest=} [properties] Properties to set
         * @returns {CQuitRequest} CQuitRequest instance
         */
        CQuitRequest.create = function create(properties) {
            return new CQuitRequest(properties);
        };
    
        /**
         * Encodes the specified CQuitRequest message. Does not implicitly {@link CQuitRequest.verify|verify} messages.
         * @function encode
         * @memberof CQuitRequest
         * @static
         * @param {ICQuitRequest} message CQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CQuitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CQuitRequest message, length delimited. Does not implicitly {@link CQuitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CQuitRequest
         * @static
         * @param {ICQuitRequest} message CQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CQuitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CQuitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CQuitRequest} CQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CQuitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CQuitRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CQuitRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CQuitRequest} CQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CQuitRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CQuitRequest message.
         * @function verify
         * @memberof CQuitRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CQuitRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CQuitRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CQuitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CQuitRequest} CQuitRequest
         */
        CQuitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CQuitRequest)
                return object;
            return new $root.CQuitRequest();
        };
    
        /**
         * Creates a plain object from a CQuitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CQuitRequest
         * @static
         * @param {CQuitRequest} message CQuitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CQuitRequest.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CQuitRequest to JSON.
         * @function toJSON
         * @memberof CQuitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CQuitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CQuitRequest;
    })();
    
    $root.CDeleteCursorMsg = (function() {
    
        /**
         * Properties of a CDeleteCursorMsg.
         * @exports ICDeleteCursorMsg
         * @interface ICDeleteCursorMsg
         * @property {number|Long} cursor_id CDeleteCursorMsg cursor_id
         */
    
        /**
         * Constructs a new CDeleteCursorMsg.
         * @exports CDeleteCursorMsg
         * @classdesc Represents a CDeleteCursorMsg.
         * @implements ICDeleteCursorMsg
         * @constructor
         * @param {ICDeleteCursorMsg=} [properties] Properties to set
         */
        function CDeleteCursorMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDeleteCursorMsg cursor_id.
         * @member {number|Long} cursor_id
         * @memberof CDeleteCursorMsg
         * @instance
         */
        CDeleteCursorMsg.prototype.cursor_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CDeleteCursorMsg instance using the specified properties.
         * @function create
         * @memberof CDeleteCursorMsg
         * @static
         * @param {ICDeleteCursorMsg=} [properties] Properties to set
         * @returns {CDeleteCursorMsg} CDeleteCursorMsg instance
         */
        CDeleteCursorMsg.create = function create(properties) {
            return new CDeleteCursorMsg(properties);
        };
    
        /**
         * Encodes the specified CDeleteCursorMsg message. Does not implicitly {@link CDeleteCursorMsg.verify|verify} messages.
         * @function encode
         * @memberof CDeleteCursorMsg
         * @static
         * @param {ICDeleteCursorMsg} message CDeleteCursorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDeleteCursorMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.cursor_id);
            return writer;
        };
    
        /**
         * Encodes the specified CDeleteCursorMsg message, length delimited. Does not implicitly {@link CDeleteCursorMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDeleteCursorMsg
         * @static
         * @param {ICDeleteCursorMsg} message CDeleteCursorMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDeleteCursorMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDeleteCursorMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CDeleteCursorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDeleteCursorMsg} CDeleteCursorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDeleteCursorMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDeleteCursorMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cursor_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cursor_id"))
                throw $util.ProtocolError("missing required 'cursor_id'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CDeleteCursorMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDeleteCursorMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDeleteCursorMsg} CDeleteCursorMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDeleteCursorMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDeleteCursorMsg message.
         * @function verify
         * @memberof CDeleteCursorMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDeleteCursorMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.cursor_id) && !(message.cursor_id && $util.isInteger(message.cursor_id.low) && $util.isInteger(message.cursor_id.high)))
                return "cursor_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CDeleteCursorMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDeleteCursorMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDeleteCursorMsg} CDeleteCursorMsg
         */
        CDeleteCursorMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CDeleteCursorMsg)
                return object;
            var message = new $root.CDeleteCursorMsg();
            if (object.cursor_id != null)
                if ($util.Long)
                    (message.cursor_id = $util.Long.fromValue(object.cursor_id)).unsigned = true;
                else if (typeof object.cursor_id === "string")
                    message.cursor_id = parseInt(object.cursor_id, 10);
                else if (typeof object.cursor_id === "number")
                    message.cursor_id = object.cursor_id;
                else if (typeof object.cursor_id === "object")
                    message.cursor_id = new $util.LongBits(object.cursor_id.low >>> 0, object.cursor_id.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CDeleteCursorMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDeleteCursorMsg
         * @static
         * @param {CDeleteCursorMsg} message CDeleteCursorMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDeleteCursorMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cursor_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cursor_id = options.longs === String ? "0" : 0;
            if (message.cursor_id != null && message.hasOwnProperty("cursor_id"))
                if (typeof message.cursor_id === "number")
                    object.cursor_id = options.longs === String ? String(message.cursor_id) : message.cursor_id;
                else
                    object.cursor_id = options.longs === String ? $util.Long.prototype.toString.call(message.cursor_id) : options.longs === Number ? new $util.LongBits(message.cursor_id.low >>> 0, message.cursor_id.high >>> 0).toNumber(true) : message.cursor_id;
            return object;
        };
    
        /**
         * Converts this CDeleteCursorMsg to JSON.
         * @function toJSON
         * @memberof CDeleteCursorMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDeleteCursorMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CDeleteCursorMsg;
    })();
    
    $root.CSetStreamingClientConfig = (function() {
    
        /**
         * Properties of a CSetStreamingClientConfig.
         * @exports ICSetStreamingClientConfig
         * @interface ICSetStreamingClientConfig
         * @property {ICStreamingClientConfig} config CSetStreamingClientConfig config
         */
    
        /**
         * Constructs a new CSetStreamingClientConfig.
         * @exports CSetStreamingClientConfig
         * @classdesc Represents a CSetStreamingClientConfig.
         * @implements ICSetStreamingClientConfig
         * @constructor
         * @param {ICSetStreamingClientConfig=} [properties] Properties to set
         */
        function CSetStreamingClientConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetStreamingClientConfig config.
         * @member {ICStreamingClientConfig} config
         * @memberof CSetStreamingClientConfig
         * @instance
         */
        CSetStreamingClientConfig.prototype.config = null;
    
        /**
         * Creates a new CSetStreamingClientConfig instance using the specified properties.
         * @function create
         * @memberof CSetStreamingClientConfig
         * @static
         * @param {ICSetStreamingClientConfig=} [properties] Properties to set
         * @returns {CSetStreamingClientConfig} CSetStreamingClientConfig instance
         */
        CSetStreamingClientConfig.create = function create(properties) {
            return new CSetStreamingClientConfig(properties);
        };
    
        /**
         * Encodes the specified CSetStreamingClientConfig message. Does not implicitly {@link CSetStreamingClientConfig.verify|verify} messages.
         * @function encode
         * @memberof CSetStreamingClientConfig
         * @static
         * @param {ICSetStreamingClientConfig} message CSetStreamingClientConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetStreamingClientConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.CStreamingClientConfig.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CSetStreamingClientConfig message, length delimited. Does not implicitly {@link CSetStreamingClientConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetStreamingClientConfig
         * @static
         * @param {ICSetStreamingClientConfig} message CSetStreamingClientConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetStreamingClientConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetStreamingClientConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CSetStreamingClientConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetStreamingClientConfig} CSetStreamingClientConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetStreamingClientConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetStreamingClientConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.config = $root.CStreamingClientConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("config"))
                throw $util.ProtocolError("missing required 'config'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CSetStreamingClientConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetStreamingClientConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetStreamingClientConfig} CSetStreamingClientConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetStreamingClientConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetStreamingClientConfig message.
         * @function verify
         * @memberof CSetStreamingClientConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetStreamingClientConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.CStreamingClientConfig.verify(message.config);
                if (error)
                    return "config." + error;
            }
            return null;
        };
    
        /**
         * Creates a CSetStreamingClientConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetStreamingClientConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetStreamingClientConfig} CSetStreamingClientConfig
         */
        CSetStreamingClientConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetStreamingClientConfig)
                return object;
            var message = new $root.CSetStreamingClientConfig();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".CSetStreamingClientConfig.config: object expected");
                message.config = $root.CStreamingClientConfig.fromObject(object.config);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CSetStreamingClientConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetStreamingClientConfig
         * @static
         * @param {CSetStreamingClientConfig} message CSetStreamingClientConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetStreamingClientConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.config = null;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.CStreamingClientConfig.toObject(message.config, options);
            return object;
        };
    
        /**
         * Converts this CSetStreamingClientConfig to JSON.
         * @function toJSON
         * @memberof CSetStreamingClientConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetStreamingClientConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetStreamingClientConfig;
    })();
    
    $root.CSetQoSMsg = (function() {
    
        /**
         * Properties of a CSetQoSMsg.
         * @exports ICSetQoSMsg
         * @interface ICSetQoSMsg
         * @property {boolean} use_qos CSetQoSMsg use_qos
         */
    
        /**
         * Constructs a new CSetQoSMsg.
         * @exports CSetQoSMsg
         * @classdesc Represents a CSetQoSMsg.
         * @implements ICSetQoSMsg
         * @constructor
         * @param {ICSetQoSMsg=} [properties] Properties to set
         */
        function CSetQoSMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetQoSMsg use_qos.
         * @member {boolean} use_qos
         * @memberof CSetQoSMsg
         * @instance
         */
        CSetQoSMsg.prototype.use_qos = false;
    
        /**
         * Creates a new CSetQoSMsg instance using the specified properties.
         * @function create
         * @memberof CSetQoSMsg
         * @static
         * @param {ICSetQoSMsg=} [properties] Properties to set
         * @returns {CSetQoSMsg} CSetQoSMsg instance
         */
        CSetQoSMsg.create = function create(properties) {
            return new CSetQoSMsg(properties);
        };
    
        /**
         * Encodes the specified CSetQoSMsg message. Does not implicitly {@link CSetQoSMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetQoSMsg
         * @static
         * @param {ICSetQoSMsg} message CSetQoSMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetQoSMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.use_qos);
            return writer;
        };
    
        /**
         * Encodes the specified CSetQoSMsg message, length delimited. Does not implicitly {@link CSetQoSMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetQoSMsg
         * @static
         * @param {ICSetQoSMsg} message CSetQoSMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetQoSMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetQoSMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetQoSMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetQoSMsg} CSetQoSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetQoSMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetQoSMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.use_qos = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("use_qos"))
                throw $util.ProtocolError("missing required 'use_qos'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CSetQoSMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetQoSMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetQoSMsg} CSetQoSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetQoSMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetQoSMsg message.
         * @function verify
         * @memberof CSetQoSMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetQoSMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.use_qos !== "boolean")
                return "use_qos: boolean expected";
            return null;
        };
    
        /**
         * Creates a CSetQoSMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetQoSMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetQoSMsg} CSetQoSMsg
         */
        CSetQoSMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetQoSMsg)
                return object;
            var message = new $root.CSetQoSMsg();
            if (object.use_qos != null)
                message.use_qos = Boolean(object.use_qos);
            return message;
        };
    
        /**
         * Creates a plain object from a CSetQoSMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetQoSMsg
         * @static
         * @param {CSetQoSMsg} message CSetQoSMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetQoSMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.use_qos = false;
            if (message.use_qos != null && message.hasOwnProperty("use_qos"))
                object.use_qos = message.use_qos;
            return object;
        };
    
        /**
         * Converts this CSetQoSMsg to JSON.
         * @function toJSON
         * @memberof CSetQoSMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetQoSMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetQoSMsg;
    })();
    
    $root.CSetTargetFramerateMsg = (function() {
    
        /**
         * Properties of a CSetTargetFramerateMsg.
         * @exports ICSetTargetFramerateMsg
         * @interface ICSetTargetFramerateMsg
         * @property {number} framerate CSetTargetFramerateMsg framerate
         * @property {number|null} [reasons] CSetTargetFramerateMsg reasons
         * @property {number|null} [framerate_numerator] CSetTargetFramerateMsg framerate_numerator
         * @property {number|null} [framerate_denominator] CSetTargetFramerateMsg framerate_denominator
         */
    
        /**
         * Constructs a new CSetTargetFramerateMsg.
         * @exports CSetTargetFramerateMsg
         * @classdesc Represents a CSetTargetFramerateMsg.
         * @implements ICSetTargetFramerateMsg
         * @constructor
         * @param {ICSetTargetFramerateMsg=} [properties] Properties to set
         */
        function CSetTargetFramerateMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetTargetFramerateMsg framerate.
         * @member {number} framerate
         * @memberof CSetTargetFramerateMsg
         * @instance
         */
        CSetTargetFramerateMsg.prototype.framerate = 0;
    
        /**
         * CSetTargetFramerateMsg reasons.
         * @member {number} reasons
         * @memberof CSetTargetFramerateMsg
         * @instance
         */
        CSetTargetFramerateMsg.prototype.reasons = 0;
    
        /**
         * CSetTargetFramerateMsg framerate_numerator.
         * @member {number} framerate_numerator
         * @memberof CSetTargetFramerateMsg
         * @instance
         */
        CSetTargetFramerateMsg.prototype.framerate_numerator = 0;
    
        /**
         * CSetTargetFramerateMsg framerate_denominator.
         * @member {number} framerate_denominator
         * @memberof CSetTargetFramerateMsg
         * @instance
         */
        CSetTargetFramerateMsg.prototype.framerate_denominator = 0;
    
        /**
         * Creates a new CSetTargetFramerateMsg instance using the specified properties.
         * @function create
         * @memberof CSetTargetFramerateMsg
         * @static
         * @param {ICSetTargetFramerateMsg=} [properties] Properties to set
         * @returns {CSetTargetFramerateMsg} CSetTargetFramerateMsg instance
         */
        CSetTargetFramerateMsg.create = function create(properties) {
            return new CSetTargetFramerateMsg(properties);
        };
    
        /**
         * Encodes the specified CSetTargetFramerateMsg message. Does not implicitly {@link CSetTargetFramerateMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetTargetFramerateMsg
         * @static
         * @param {ICSetTargetFramerateMsg} message CSetTargetFramerateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTargetFramerateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.framerate);
            if (message.reasons != null && message.hasOwnProperty("reasons"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.reasons);
            if (message.framerate_numerator != null && message.hasOwnProperty("framerate_numerator"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.framerate_numerator);
            if (message.framerate_denominator != null && message.hasOwnProperty("framerate_denominator"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.framerate_denominator);
            return writer;
        };
    
        /**
         * Encodes the specified CSetTargetFramerateMsg message, length delimited. Does not implicitly {@link CSetTargetFramerateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetTargetFramerateMsg
         * @static
         * @param {ICSetTargetFramerateMsg} message CSetTargetFramerateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTargetFramerateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetTargetFramerateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetTargetFramerateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetTargetFramerateMsg} CSetTargetFramerateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTargetFramerateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetTargetFramerateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.framerate = reader.uint32();
                    break;
                case 2:
                    message.reasons = reader.uint32();
                    break;
                case 3:
                    message.framerate_numerator = reader.uint32();
                    break;
                case 4:
                    message.framerate_denominator = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("framerate"))
                throw $util.ProtocolError("missing required 'framerate'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CSetTargetFramerateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetTargetFramerateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetTargetFramerateMsg} CSetTargetFramerateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTargetFramerateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetTargetFramerateMsg message.
         * @function verify
         * @memberof CSetTargetFramerateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetTargetFramerateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.framerate))
                return "framerate: integer expected";
            if (message.reasons != null && message.hasOwnProperty("reasons"))
                if (!$util.isInteger(message.reasons))
                    return "reasons: integer expected";
            if (message.framerate_numerator != null && message.hasOwnProperty("framerate_numerator"))
                if (!$util.isInteger(message.framerate_numerator))
                    return "framerate_numerator: integer expected";
            if (message.framerate_denominator != null && message.hasOwnProperty("framerate_denominator"))
                if (!$util.isInteger(message.framerate_denominator))
                    return "framerate_denominator: integer expected";
            return null;
        };
    
        /**
         * Creates a CSetTargetFramerateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetTargetFramerateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetTargetFramerateMsg} CSetTargetFramerateMsg
         */
        CSetTargetFramerateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetTargetFramerateMsg)
                return object;
            var message = new $root.CSetTargetFramerateMsg();
            if (object.framerate != null)
                message.framerate = object.framerate >>> 0;
            if (object.reasons != null)
                message.reasons = object.reasons >>> 0;
            if (object.framerate_numerator != null)
                message.framerate_numerator = object.framerate_numerator >>> 0;
            if (object.framerate_denominator != null)
                message.framerate_denominator = object.framerate_denominator >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetTargetFramerateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetTargetFramerateMsg
         * @static
         * @param {CSetTargetFramerateMsg} message CSetTargetFramerateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetTargetFramerateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.framerate = 0;
                object.reasons = 0;
                object.framerate_numerator = 0;
                object.framerate_denominator = 0;
            }
            if (message.framerate != null && message.hasOwnProperty("framerate"))
                object.framerate = message.framerate;
            if (message.reasons != null && message.hasOwnProperty("reasons"))
                object.reasons = message.reasons;
            if (message.framerate_numerator != null && message.hasOwnProperty("framerate_numerator"))
                object.framerate_numerator = message.framerate_numerator;
            if (message.framerate_denominator != null && message.hasOwnProperty("framerate_denominator"))
                object.framerate_denominator = message.framerate_denominator;
            return object;
        };
    
        /**
         * Converts this CSetTargetFramerateMsg to JSON.
         * @function toJSON
         * @memberof CSetTargetFramerateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetTargetFramerateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetTargetFramerateMsg;
    })();
    
    $root.CSetTargetBitrateMsg = (function() {
    
        /**
         * Properties of a CSetTargetBitrateMsg.
         * @exports ICSetTargetBitrateMsg
         * @interface ICSetTargetBitrateMsg
         * @property {number} bitrate CSetTargetBitrateMsg bitrate
         */
    
        /**
         * Constructs a new CSetTargetBitrateMsg.
         * @exports CSetTargetBitrateMsg
         * @classdesc Represents a CSetTargetBitrateMsg.
         * @implements ICSetTargetBitrateMsg
         * @constructor
         * @param {ICSetTargetBitrateMsg=} [properties] Properties to set
         */
        function CSetTargetBitrateMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetTargetBitrateMsg bitrate.
         * @member {number} bitrate
         * @memberof CSetTargetBitrateMsg
         * @instance
         */
        CSetTargetBitrateMsg.prototype.bitrate = 0;
    
        /**
         * Creates a new CSetTargetBitrateMsg instance using the specified properties.
         * @function create
         * @memberof CSetTargetBitrateMsg
         * @static
         * @param {ICSetTargetBitrateMsg=} [properties] Properties to set
         * @returns {CSetTargetBitrateMsg} CSetTargetBitrateMsg instance
         */
        CSetTargetBitrateMsg.create = function create(properties) {
            return new CSetTargetBitrateMsg(properties);
        };
    
        /**
         * Encodes the specified CSetTargetBitrateMsg message. Does not implicitly {@link CSetTargetBitrateMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetTargetBitrateMsg
         * @static
         * @param {ICSetTargetBitrateMsg} message CSetTargetBitrateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTargetBitrateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bitrate);
            return writer;
        };
    
        /**
         * Encodes the specified CSetTargetBitrateMsg message, length delimited. Does not implicitly {@link CSetTargetBitrateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetTargetBitrateMsg
         * @static
         * @param {ICSetTargetBitrateMsg} message CSetTargetBitrateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTargetBitrateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetTargetBitrateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetTargetBitrateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetTargetBitrateMsg} CSetTargetBitrateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTargetBitrateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetTargetBitrateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bitrate = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("bitrate"))
                throw $util.ProtocolError("missing required 'bitrate'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CSetTargetBitrateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetTargetBitrateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetTargetBitrateMsg} CSetTargetBitrateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTargetBitrateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetTargetBitrateMsg message.
         * @function verify
         * @memberof CSetTargetBitrateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetTargetBitrateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.bitrate))
                return "bitrate: integer expected";
            return null;
        };
    
        /**
         * Creates a CSetTargetBitrateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetTargetBitrateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetTargetBitrateMsg} CSetTargetBitrateMsg
         */
        CSetTargetBitrateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetTargetBitrateMsg)
                return object;
            var message = new $root.CSetTargetBitrateMsg();
            if (object.bitrate != null)
                message.bitrate = object.bitrate | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetTargetBitrateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetTargetBitrateMsg
         * @static
         * @param {CSetTargetBitrateMsg} message CSetTargetBitrateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetTargetBitrateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.bitrate = 0;
            if (message.bitrate != null && message.hasOwnProperty("bitrate"))
                object.bitrate = message.bitrate;
            return object;
        };
    
        /**
         * Converts this CSetTargetBitrateMsg to JSON.
         * @function toJSON
         * @memberof CSetTargetBitrateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetTargetBitrateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetTargetBitrateMsg;
    })();
    
    $root.COverlayEnabledMsg = (function() {
    
        /**
         * Properties of a COverlayEnabledMsg.
         * @exports ICOverlayEnabledMsg
         * @interface ICOverlayEnabledMsg
         * @property {boolean} enabled COverlayEnabledMsg enabled
         */
    
        /**
         * Constructs a new COverlayEnabledMsg.
         * @exports COverlayEnabledMsg
         * @classdesc Represents a COverlayEnabledMsg.
         * @implements ICOverlayEnabledMsg
         * @constructor
         * @param {ICOverlayEnabledMsg=} [properties] Properties to set
         */
        function COverlayEnabledMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * COverlayEnabledMsg enabled.
         * @member {boolean} enabled
         * @memberof COverlayEnabledMsg
         * @instance
         */
        COverlayEnabledMsg.prototype.enabled = false;
    
        /**
         * Creates a new COverlayEnabledMsg instance using the specified properties.
         * @function create
         * @memberof COverlayEnabledMsg
         * @static
         * @param {ICOverlayEnabledMsg=} [properties] Properties to set
         * @returns {COverlayEnabledMsg} COverlayEnabledMsg instance
         */
        COverlayEnabledMsg.create = function create(properties) {
            return new COverlayEnabledMsg(properties);
        };
    
        /**
         * Encodes the specified COverlayEnabledMsg message. Does not implicitly {@link COverlayEnabledMsg.verify|verify} messages.
         * @function encode
         * @memberof COverlayEnabledMsg
         * @static
         * @param {ICOverlayEnabledMsg} message COverlayEnabledMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        COverlayEnabledMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
            return writer;
        };
    
        /**
         * Encodes the specified COverlayEnabledMsg message, length delimited. Does not implicitly {@link COverlayEnabledMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof COverlayEnabledMsg
         * @static
         * @param {ICOverlayEnabledMsg} message COverlayEnabledMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        COverlayEnabledMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a COverlayEnabledMsg message from the specified reader or buffer.
         * @function decode
         * @memberof COverlayEnabledMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {COverlayEnabledMsg} COverlayEnabledMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        COverlayEnabledMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.COverlayEnabledMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("enabled"))
                throw $util.ProtocolError("missing required 'enabled'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a COverlayEnabledMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof COverlayEnabledMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {COverlayEnabledMsg} COverlayEnabledMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        COverlayEnabledMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a COverlayEnabledMsg message.
         * @function verify
         * @memberof COverlayEnabledMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        COverlayEnabledMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.enabled !== "boolean")
                return "enabled: boolean expected";
            return null;
        };
    
        /**
         * Creates a COverlayEnabledMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof COverlayEnabledMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {COverlayEnabledMsg} COverlayEnabledMsg
         */
        COverlayEnabledMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.COverlayEnabledMsg)
                return object;
            var message = new $root.COverlayEnabledMsg();
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            return message;
        };
    
        /**
         * Creates a plain object from a COverlayEnabledMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof COverlayEnabledMsg
         * @static
         * @param {COverlayEnabledMsg} message COverlayEnabledMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        COverlayEnabledMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.enabled = false;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            return object;
        };
    
        /**
         * Converts this COverlayEnabledMsg to JSON.
         * @function toJSON
         * @memberof COverlayEnabledMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        COverlayEnabledMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return COverlayEnabledMsg;
    })();
    
    $root.CSetGammaRampMsg = (function() {
    
        /**
         * Properties of a CSetGammaRampMsg.
         * @exports ICSetGammaRampMsg
         * @interface ICSetGammaRampMsg
         * @property {Uint8Array|null} [gamma_ramp] CSetGammaRampMsg gamma_ramp
         */
    
        /**
         * Constructs a new CSetGammaRampMsg.
         * @exports CSetGammaRampMsg
         * @classdesc Represents a CSetGammaRampMsg.
         * @implements ICSetGammaRampMsg
         * @constructor
         * @param {ICSetGammaRampMsg=} [properties] Properties to set
         */
        function CSetGammaRampMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetGammaRampMsg gamma_ramp.
         * @member {Uint8Array} gamma_ramp
         * @memberof CSetGammaRampMsg
         * @instance
         */
        CSetGammaRampMsg.prototype.gamma_ramp = $util.newBuffer([]);
    
        /**
         * Creates a new CSetGammaRampMsg instance using the specified properties.
         * @function create
         * @memberof CSetGammaRampMsg
         * @static
         * @param {ICSetGammaRampMsg=} [properties] Properties to set
         * @returns {CSetGammaRampMsg} CSetGammaRampMsg instance
         */
        CSetGammaRampMsg.create = function create(properties) {
            return new CSetGammaRampMsg(properties);
        };
    
        /**
         * Encodes the specified CSetGammaRampMsg message. Does not implicitly {@link CSetGammaRampMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetGammaRampMsg
         * @static
         * @param {ICSetGammaRampMsg} message CSetGammaRampMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetGammaRampMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gamma_ramp != null && message.hasOwnProperty("gamma_ramp"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.gamma_ramp);
            return writer;
        };
    
        /**
         * Encodes the specified CSetGammaRampMsg message, length delimited. Does not implicitly {@link CSetGammaRampMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetGammaRampMsg
         * @static
         * @param {ICSetGammaRampMsg} message CSetGammaRampMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetGammaRampMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetGammaRampMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetGammaRampMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetGammaRampMsg} CSetGammaRampMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetGammaRampMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetGammaRampMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gamma_ramp = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetGammaRampMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetGammaRampMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetGammaRampMsg} CSetGammaRampMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetGammaRampMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetGammaRampMsg message.
         * @function verify
         * @memberof CSetGammaRampMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetGammaRampMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gamma_ramp != null && message.hasOwnProperty("gamma_ramp"))
                if (!(message.gamma_ramp && typeof message.gamma_ramp.length === "number" || $util.isString(message.gamma_ramp)))
                    return "gamma_ramp: buffer expected";
            return null;
        };
    
        /**
         * Creates a CSetGammaRampMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetGammaRampMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetGammaRampMsg} CSetGammaRampMsg
         */
        CSetGammaRampMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetGammaRampMsg)
                return object;
            var message = new $root.CSetGammaRampMsg();
            if (object.gamma_ramp != null)
                if (typeof object.gamma_ramp === "string")
                    $util.base64.decode(object.gamma_ramp, message.gamma_ramp = $util.newBuffer($util.base64.length(object.gamma_ramp)), 0);
                else if (object.gamma_ramp.length)
                    message.gamma_ramp = object.gamma_ramp;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetGammaRampMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetGammaRampMsg
         * @static
         * @param {CSetGammaRampMsg} message CSetGammaRampMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetGammaRampMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.gamma_ramp = "";
                else {
                    object.gamma_ramp = [];
                    if (options.bytes !== Array)
                        object.gamma_ramp = $util.newBuffer(object.gamma_ramp);
                }
            if (message.gamma_ramp != null && message.hasOwnProperty("gamma_ramp"))
                object.gamma_ramp = options.bytes === String ? $util.base64.encode(message.gamma_ramp, 0, message.gamma_ramp.length) : options.bytes === Array ? Array.prototype.slice.call(message.gamma_ramp) : message.gamma_ramp;
            return object;
        };
    
        /**
         * Converts this CSetGammaRampMsg to JSON.
         * @function toJSON
         * @memberof CSetGammaRampMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetGammaRampMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetGammaRampMsg;
    })();
    
    $root.CSetActivityMsg = (function() {
    
        /**
         * Properties of a CSetActivityMsg.
         * @exports ICSetActivityMsg
         * @interface ICSetActivityMsg
         * @property {EStreamActivity|null} [activity] CSetActivityMsg activity
         */
    
        /**
         * Constructs a new CSetActivityMsg.
         * @exports CSetActivityMsg
         * @classdesc Represents a CSetActivityMsg.
         * @implements ICSetActivityMsg
         * @constructor
         * @param {ICSetActivityMsg=} [properties] Properties to set
         */
        function CSetActivityMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetActivityMsg activity.
         * @member {EStreamActivity} activity
         * @memberof CSetActivityMsg
         * @instance
         */
        CSetActivityMsg.prototype.activity = 1;
    
        /**
         * Creates a new CSetActivityMsg instance using the specified properties.
         * @function create
         * @memberof CSetActivityMsg
         * @static
         * @param {ICSetActivityMsg=} [properties] Properties to set
         * @returns {CSetActivityMsg} CSetActivityMsg instance
         */
        CSetActivityMsg.create = function create(properties) {
            return new CSetActivityMsg(properties);
        };
    
        /**
         * Encodes the specified CSetActivityMsg message. Does not implicitly {@link CSetActivityMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetActivityMsg
         * @static
         * @param {ICSetActivityMsg} message CSetActivityMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetActivityMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.activity != null && message.hasOwnProperty("activity"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activity);
            return writer;
        };
    
        /**
         * Encodes the specified CSetActivityMsg message, length delimited. Does not implicitly {@link CSetActivityMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetActivityMsg
         * @static
         * @param {ICSetActivityMsg} message CSetActivityMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetActivityMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetActivityMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetActivityMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetActivityMsg} CSetActivityMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetActivityMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetActivityMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activity = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetActivityMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetActivityMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetActivityMsg} CSetActivityMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetActivityMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetActivityMsg message.
         * @function verify
         * @memberof CSetActivityMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetActivityMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.activity != null && message.hasOwnProperty("activity"))
                switch (message.activity) {
                default:
                    return "activity: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CSetActivityMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetActivityMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetActivityMsg} CSetActivityMsg
         */
        CSetActivityMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetActivityMsg)
                return object;
            var message = new $root.CSetActivityMsg();
            switch (object.activity) {
            case "k_EStreamActivityIdle":
            case 1:
                message.activity = 1;
                break;
            case "k_EStreamActivityGame":
            case 2:
                message.activity = 2;
                break;
            case "k_EStreamActivityDesktop":
            case 3:
                message.activity = 3;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CSetActivityMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetActivityMsg
         * @static
         * @param {CSetActivityMsg} message CSetActivityMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetActivityMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.activity = options.enums === String ? "k_EStreamActivityIdle" : 1;
            if (message.activity != null && message.hasOwnProperty("activity"))
                object.activity = options.enums === String ? $root.EStreamActivity[message.activity] : message.activity;
            return object;
        };
    
        /**
         * Converts this CSetActivityMsg to JSON.
         * @function toJSON
         * @memberof CSetActivityMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetActivityMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetActivityMsg;
    })();
    
    $root.CSystemSuspendMsg = (function() {
    
        /**
         * Properties of a CSystemSuspendMsg.
         * @exports ICSystemSuspendMsg
         * @interface ICSystemSuspendMsg
         */
    
        /**
         * Constructs a new CSystemSuspendMsg.
         * @exports CSystemSuspendMsg
         * @classdesc Represents a CSystemSuspendMsg.
         * @implements ICSystemSuspendMsg
         * @constructor
         * @param {ICSystemSuspendMsg=} [properties] Properties to set
         */
        function CSystemSuspendMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CSystemSuspendMsg instance using the specified properties.
         * @function create
         * @memberof CSystemSuspendMsg
         * @static
         * @param {ICSystemSuspendMsg=} [properties] Properties to set
         * @returns {CSystemSuspendMsg} CSystemSuspendMsg instance
         */
        CSystemSuspendMsg.create = function create(properties) {
            return new CSystemSuspendMsg(properties);
        };
    
        /**
         * Encodes the specified CSystemSuspendMsg message. Does not implicitly {@link CSystemSuspendMsg.verify|verify} messages.
         * @function encode
         * @memberof CSystemSuspendMsg
         * @static
         * @param {ICSystemSuspendMsg} message CSystemSuspendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSystemSuspendMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CSystemSuspendMsg message, length delimited. Does not implicitly {@link CSystemSuspendMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSystemSuspendMsg
         * @static
         * @param {ICSystemSuspendMsg} message CSystemSuspendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSystemSuspendMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSystemSuspendMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSystemSuspendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSystemSuspendMsg} CSystemSuspendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSystemSuspendMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSystemSuspendMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSystemSuspendMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSystemSuspendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSystemSuspendMsg} CSystemSuspendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSystemSuspendMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSystemSuspendMsg message.
         * @function verify
         * @memberof CSystemSuspendMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSystemSuspendMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CSystemSuspendMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSystemSuspendMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSystemSuspendMsg} CSystemSuspendMsg
         */
        CSystemSuspendMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSystemSuspendMsg)
                return object;
            return new $root.CSystemSuspendMsg();
        };
    
        /**
         * Creates a plain object from a CSystemSuspendMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSystemSuspendMsg
         * @static
         * @param {CSystemSuspendMsg} message CSystemSuspendMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSystemSuspendMsg.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CSystemSuspendMsg to JSON.
         * @function toJSON
         * @memberof CSystemSuspendMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSystemSuspendMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSystemSuspendMsg;
    })();
    
    $root.CVirtualHereRequestMsg = (function() {
    
        /**
         * Properties of a CVirtualHereRequestMsg.
         * @exports ICVirtualHereRequestMsg
         * @interface ICVirtualHereRequestMsg
         * @property {string|null} [hostname] CVirtualHereRequestMsg hostname
         */
    
        /**
         * Constructs a new CVirtualHereRequestMsg.
         * @exports CVirtualHereRequestMsg
         * @classdesc Represents a CVirtualHereRequestMsg.
         * @implements ICVirtualHereRequestMsg
         * @constructor
         * @param {ICVirtualHereRequestMsg=} [properties] Properties to set
         */
        function CVirtualHereRequestMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualHereRequestMsg hostname.
         * @member {string} hostname
         * @memberof CVirtualHereRequestMsg
         * @instance
         */
        CVirtualHereRequestMsg.prototype.hostname = "";
    
        /**
         * Creates a new CVirtualHereRequestMsg instance using the specified properties.
         * @function create
         * @memberof CVirtualHereRequestMsg
         * @static
         * @param {ICVirtualHereRequestMsg=} [properties] Properties to set
         * @returns {CVirtualHereRequestMsg} CVirtualHereRequestMsg instance
         */
        CVirtualHereRequestMsg.create = function create(properties) {
            return new CVirtualHereRequestMsg(properties);
        };
    
        /**
         * Encodes the specified CVirtualHereRequestMsg message. Does not implicitly {@link CVirtualHereRequestMsg.verify|verify} messages.
         * @function encode
         * @memberof CVirtualHereRequestMsg
         * @static
         * @param {ICVirtualHereRequestMsg} message CVirtualHereRequestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualHereRequestMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostname);
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualHereRequestMsg message, length delimited. Does not implicitly {@link CVirtualHereRequestMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualHereRequestMsg
         * @static
         * @param {ICVirtualHereRequestMsg} message CVirtualHereRequestMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualHereRequestMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualHereRequestMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualHereRequestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualHereRequestMsg} CVirtualHereRequestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualHereRequestMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualHereRequestMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hostname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualHereRequestMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualHereRequestMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualHereRequestMsg} CVirtualHereRequestMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualHereRequestMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualHereRequestMsg message.
         * @function verify
         * @memberof CVirtualHereRequestMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualHereRequestMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            return null;
        };
    
        /**
         * Creates a CVirtualHereRequestMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualHereRequestMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualHereRequestMsg} CVirtualHereRequestMsg
         */
        CVirtualHereRequestMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualHereRequestMsg)
                return object;
            var message = new $root.CVirtualHereRequestMsg();
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualHereRequestMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualHereRequestMsg
         * @static
         * @param {CVirtualHereRequestMsg} message CVirtualHereRequestMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualHereRequestMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.hostname = "";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            return object;
        };
    
        /**
         * Converts this CVirtualHereRequestMsg to JSON.
         * @function toJSON
         * @memberof CVirtualHereRequestMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualHereRequestMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVirtualHereRequestMsg;
    })();
    
    $root.CVirtualHereReadyMsg = (function() {
    
        /**
         * Properties of a CVirtualHereReadyMsg.
         * @exports ICVirtualHereReadyMsg
         * @interface ICVirtualHereReadyMsg
         * @property {number|null} [licensed_device_count] CVirtualHereReadyMsg licensed_device_count
         */
    
        /**
         * Constructs a new CVirtualHereReadyMsg.
         * @exports CVirtualHereReadyMsg
         * @classdesc Represents a CVirtualHereReadyMsg.
         * @implements ICVirtualHereReadyMsg
         * @constructor
         * @param {ICVirtualHereReadyMsg=} [properties] Properties to set
         */
        function CVirtualHereReadyMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualHereReadyMsg licensed_device_count.
         * @member {number} licensed_device_count
         * @memberof CVirtualHereReadyMsg
         * @instance
         */
        CVirtualHereReadyMsg.prototype.licensed_device_count = 0;
    
        /**
         * Creates a new CVirtualHereReadyMsg instance using the specified properties.
         * @function create
         * @memberof CVirtualHereReadyMsg
         * @static
         * @param {ICVirtualHereReadyMsg=} [properties] Properties to set
         * @returns {CVirtualHereReadyMsg} CVirtualHereReadyMsg instance
         */
        CVirtualHereReadyMsg.create = function create(properties) {
            return new CVirtualHereReadyMsg(properties);
        };
    
        /**
         * Encodes the specified CVirtualHereReadyMsg message. Does not implicitly {@link CVirtualHereReadyMsg.verify|verify} messages.
         * @function encode
         * @memberof CVirtualHereReadyMsg
         * @static
         * @param {ICVirtualHereReadyMsg} message CVirtualHereReadyMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualHereReadyMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.licensed_device_count != null && message.hasOwnProperty("licensed_device_count"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.licensed_device_count);
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualHereReadyMsg message, length delimited. Does not implicitly {@link CVirtualHereReadyMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualHereReadyMsg
         * @static
         * @param {ICVirtualHereReadyMsg} message CVirtualHereReadyMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualHereReadyMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualHereReadyMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualHereReadyMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualHereReadyMsg} CVirtualHereReadyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualHereReadyMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualHereReadyMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.licensed_device_count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualHereReadyMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualHereReadyMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualHereReadyMsg} CVirtualHereReadyMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualHereReadyMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualHereReadyMsg message.
         * @function verify
         * @memberof CVirtualHereReadyMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualHereReadyMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.licensed_device_count != null && message.hasOwnProperty("licensed_device_count"))
                if (!$util.isInteger(message.licensed_device_count))
                    return "licensed_device_count: integer expected";
            return null;
        };
    
        /**
         * Creates a CVirtualHereReadyMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualHereReadyMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualHereReadyMsg} CVirtualHereReadyMsg
         */
        CVirtualHereReadyMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualHereReadyMsg)
                return object;
            var message = new $root.CVirtualHereReadyMsg();
            if (object.licensed_device_count != null)
                message.licensed_device_count = object.licensed_device_count >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualHereReadyMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualHereReadyMsg
         * @static
         * @param {CVirtualHereReadyMsg} message CVirtualHereReadyMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualHereReadyMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.licensed_device_count = 0;
            if (message.licensed_device_count != null && message.hasOwnProperty("licensed_device_count"))
                object.licensed_device_count = message.licensed_device_count;
            return object;
        };
    
        /**
         * Converts this CVirtualHereReadyMsg to JSON.
         * @function toJSON
         * @memberof CVirtualHereReadyMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualHereReadyMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVirtualHereReadyMsg;
    })();
    
    $root.CVirtualHereShareDeviceMsg = (function() {
    
        /**
         * Properties of a CVirtualHereShareDeviceMsg.
         * @exports ICVirtualHereShareDeviceMsg
         * @interface ICVirtualHereShareDeviceMsg
         * @property {string|null} [device_address] CVirtualHereShareDeviceMsg device_address
         */
    
        /**
         * Constructs a new CVirtualHereShareDeviceMsg.
         * @exports CVirtualHereShareDeviceMsg
         * @classdesc Represents a CVirtualHereShareDeviceMsg.
         * @implements ICVirtualHereShareDeviceMsg
         * @constructor
         * @param {ICVirtualHereShareDeviceMsg=} [properties] Properties to set
         */
        function CVirtualHereShareDeviceMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualHereShareDeviceMsg device_address.
         * @member {string} device_address
         * @memberof CVirtualHereShareDeviceMsg
         * @instance
         */
        CVirtualHereShareDeviceMsg.prototype.device_address = "";
    
        /**
         * Creates a new CVirtualHereShareDeviceMsg instance using the specified properties.
         * @function create
         * @memberof CVirtualHereShareDeviceMsg
         * @static
         * @param {ICVirtualHereShareDeviceMsg=} [properties] Properties to set
         * @returns {CVirtualHereShareDeviceMsg} CVirtualHereShareDeviceMsg instance
         */
        CVirtualHereShareDeviceMsg.create = function create(properties) {
            return new CVirtualHereShareDeviceMsg(properties);
        };
    
        /**
         * Encodes the specified CVirtualHereShareDeviceMsg message. Does not implicitly {@link CVirtualHereShareDeviceMsg.verify|verify} messages.
         * @function encode
         * @memberof CVirtualHereShareDeviceMsg
         * @static
         * @param {ICVirtualHereShareDeviceMsg} message CVirtualHereShareDeviceMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualHereShareDeviceMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.device_address != null && message.hasOwnProperty("device_address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.device_address);
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualHereShareDeviceMsg message, length delimited. Does not implicitly {@link CVirtualHereShareDeviceMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualHereShareDeviceMsg
         * @static
         * @param {ICVirtualHereShareDeviceMsg} message CVirtualHereShareDeviceMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualHereShareDeviceMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualHereShareDeviceMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualHereShareDeviceMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualHereShareDeviceMsg} CVirtualHereShareDeviceMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualHereShareDeviceMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualHereShareDeviceMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.device_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualHereShareDeviceMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualHereShareDeviceMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualHereShareDeviceMsg} CVirtualHereShareDeviceMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualHereShareDeviceMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualHereShareDeviceMsg message.
         * @function verify
         * @memberof CVirtualHereShareDeviceMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualHereShareDeviceMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.device_address != null && message.hasOwnProperty("device_address"))
                if (!$util.isString(message.device_address))
                    return "device_address: string expected";
            return null;
        };
    
        /**
         * Creates a CVirtualHereShareDeviceMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualHereShareDeviceMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualHereShareDeviceMsg} CVirtualHereShareDeviceMsg
         */
        CVirtualHereShareDeviceMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualHereShareDeviceMsg)
                return object;
            var message = new $root.CVirtualHereShareDeviceMsg();
            if (object.device_address != null)
                message.device_address = String(object.device_address);
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualHereShareDeviceMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualHereShareDeviceMsg
         * @static
         * @param {CVirtualHereShareDeviceMsg} message CVirtualHereShareDeviceMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualHereShareDeviceMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.device_address = "";
            if (message.device_address != null && message.hasOwnProperty("device_address"))
                object.device_address = message.device_address;
            return object;
        };
    
        /**
         * Converts this CVirtualHereShareDeviceMsg to JSON.
         * @function toJSON
         * @memberof CVirtualHereShareDeviceMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualHereShareDeviceMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVirtualHereShareDeviceMsg;
    })();
    
    $root.CSetSpectatorModeMsg = (function() {
    
        /**
         * Properties of a CSetSpectatorModeMsg.
         * @exports ICSetSpectatorModeMsg
         * @interface ICSetSpectatorModeMsg
         * @property {boolean|null} [enabled] CSetSpectatorModeMsg enabled
         */
    
        /**
         * Constructs a new CSetSpectatorModeMsg.
         * @exports CSetSpectatorModeMsg
         * @classdesc Represents a CSetSpectatorModeMsg.
         * @implements ICSetSpectatorModeMsg
         * @constructor
         * @param {ICSetSpectatorModeMsg=} [properties] Properties to set
         */
        function CSetSpectatorModeMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetSpectatorModeMsg enabled.
         * @member {boolean} enabled
         * @memberof CSetSpectatorModeMsg
         * @instance
         */
        CSetSpectatorModeMsg.prototype.enabled = false;
    
        /**
         * Creates a new CSetSpectatorModeMsg instance using the specified properties.
         * @function create
         * @memberof CSetSpectatorModeMsg
         * @static
         * @param {ICSetSpectatorModeMsg=} [properties] Properties to set
         * @returns {CSetSpectatorModeMsg} CSetSpectatorModeMsg instance
         */
        CSetSpectatorModeMsg.create = function create(properties) {
            return new CSetSpectatorModeMsg(properties);
        };
    
        /**
         * Encodes the specified CSetSpectatorModeMsg message. Does not implicitly {@link CSetSpectatorModeMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetSpectatorModeMsg
         * @static
         * @param {ICSetSpectatorModeMsg} message CSetSpectatorModeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetSpectatorModeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
            return writer;
        };
    
        /**
         * Encodes the specified CSetSpectatorModeMsg message, length delimited. Does not implicitly {@link CSetSpectatorModeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetSpectatorModeMsg
         * @static
         * @param {ICSetSpectatorModeMsg} message CSetSpectatorModeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetSpectatorModeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetSpectatorModeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetSpectatorModeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetSpectatorModeMsg} CSetSpectatorModeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetSpectatorModeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetSpectatorModeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetSpectatorModeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetSpectatorModeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetSpectatorModeMsg} CSetSpectatorModeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetSpectatorModeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetSpectatorModeMsg message.
         * @function verify
         * @memberof CSetSpectatorModeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetSpectatorModeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            return null;
        };
    
        /**
         * Creates a CSetSpectatorModeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetSpectatorModeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetSpectatorModeMsg} CSetSpectatorModeMsg
         */
        CSetSpectatorModeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetSpectatorModeMsg)
                return object;
            var message = new $root.CSetSpectatorModeMsg();
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            return message;
        };
    
        /**
         * Creates a plain object from a CSetSpectatorModeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetSpectatorModeMsg
         * @static
         * @param {CSetSpectatorModeMsg} message CSetSpectatorModeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetSpectatorModeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.enabled = false;
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            return object;
        };
    
        /**
         * Converts this CSetSpectatorModeMsg to JSON.
         * @function toJSON
         * @memberof CSetSpectatorModeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetSpectatorModeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetSpectatorModeMsg;
    })();
    
    $root.CRemoteHIDMsg = (function() {
    
        /**
         * Properties of a CRemoteHIDMsg.
         * @exports ICRemoteHIDMsg
         * @interface ICRemoteHIDMsg
         * @property {Uint8Array|null} [data] CRemoteHIDMsg data
         */
    
        /**
         * Constructs a new CRemoteHIDMsg.
         * @exports CRemoteHIDMsg
         * @classdesc Represents a CRemoteHIDMsg.
         * @implements ICRemoteHIDMsg
         * @constructor
         * @param {ICRemoteHIDMsg=} [properties] Properties to set
         */
        function CRemoteHIDMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteHIDMsg data.
         * @member {Uint8Array} data
         * @memberof CRemoteHIDMsg
         * @instance
         */
        CRemoteHIDMsg.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteHIDMsg instance using the specified properties.
         * @function create
         * @memberof CRemoteHIDMsg
         * @static
         * @param {ICRemoteHIDMsg=} [properties] Properties to set
         * @returns {CRemoteHIDMsg} CRemoteHIDMsg instance
         */
        CRemoteHIDMsg.create = function create(properties) {
            return new CRemoteHIDMsg(properties);
        };
    
        /**
         * Encodes the specified CRemoteHIDMsg message. Does not implicitly {@link CRemoteHIDMsg.verify|verify} messages.
         * @function encode
         * @memberof CRemoteHIDMsg
         * @static
         * @param {ICRemoteHIDMsg} message CRemoteHIDMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteHIDMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteHIDMsg message, length delimited. Does not implicitly {@link CRemoteHIDMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteHIDMsg
         * @static
         * @param {ICRemoteHIDMsg} message CRemoteHIDMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteHIDMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteHIDMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteHIDMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteHIDMsg} CRemoteHIDMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteHIDMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteHIDMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteHIDMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteHIDMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteHIDMsg} CRemoteHIDMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteHIDMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteHIDMsg message.
         * @function verify
         * @memberof CRemoteHIDMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteHIDMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteHIDMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteHIDMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteHIDMsg} CRemoteHIDMsg
         */
        CRemoteHIDMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteHIDMsg)
                return object;
            var message = new $root.CRemoteHIDMsg();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteHIDMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteHIDMsg
         * @static
         * @param {CRemoteHIDMsg} message CRemoteHIDMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteHIDMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CRemoteHIDMsg to JSON.
         * @function toJSON
         * @memberof CRemoteHIDMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteHIDMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteHIDMsg;
    })();
    
    $root.CTouchConfigActiveMsg = (function() {
    
        /**
         * Properties of a CTouchConfigActiveMsg.
         * @exports ICTouchConfigActiveMsg
         * @interface ICTouchConfigActiveMsg
         * @property {number|null} [appid] CTouchConfigActiveMsg appid
         * @property {number|null} [revision] CTouchConfigActiveMsg revision
         */
    
        /**
         * Constructs a new CTouchConfigActiveMsg.
         * @exports CTouchConfigActiveMsg
         * @classdesc Represents a CTouchConfigActiveMsg.
         * @implements ICTouchConfigActiveMsg
         * @constructor
         * @param {ICTouchConfigActiveMsg=} [properties] Properties to set
         */
        function CTouchConfigActiveMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CTouchConfigActiveMsg appid.
         * @member {number} appid
         * @memberof CTouchConfigActiveMsg
         * @instance
         */
        CTouchConfigActiveMsg.prototype.appid = 0;
    
        /**
         * CTouchConfigActiveMsg revision.
         * @member {number} revision
         * @memberof CTouchConfigActiveMsg
         * @instance
         */
        CTouchConfigActiveMsg.prototype.revision = 0;
    
        /**
         * Creates a new CTouchConfigActiveMsg instance using the specified properties.
         * @function create
         * @memberof CTouchConfigActiveMsg
         * @static
         * @param {ICTouchConfigActiveMsg=} [properties] Properties to set
         * @returns {CTouchConfigActiveMsg} CTouchConfigActiveMsg instance
         */
        CTouchConfigActiveMsg.create = function create(properties) {
            return new CTouchConfigActiveMsg(properties);
        };
    
        /**
         * Encodes the specified CTouchConfigActiveMsg message. Does not implicitly {@link CTouchConfigActiveMsg.verify|verify} messages.
         * @function encode
         * @memberof CTouchConfigActiveMsg
         * @static
         * @param {ICTouchConfigActiveMsg} message CTouchConfigActiveMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CTouchConfigActiveMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.revision != null && message.hasOwnProperty("revision"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.revision);
            return writer;
        };
    
        /**
         * Encodes the specified CTouchConfigActiveMsg message, length delimited. Does not implicitly {@link CTouchConfigActiveMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CTouchConfigActiveMsg
         * @static
         * @param {ICTouchConfigActiveMsg} message CTouchConfigActiveMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CTouchConfigActiveMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CTouchConfigActiveMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CTouchConfigActiveMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CTouchConfigActiveMsg} CTouchConfigActiveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CTouchConfigActiveMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTouchConfigActiveMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.revision = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CTouchConfigActiveMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CTouchConfigActiveMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CTouchConfigActiveMsg} CTouchConfigActiveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CTouchConfigActiveMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CTouchConfigActiveMsg message.
         * @function verify
         * @memberof CTouchConfigActiveMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CTouchConfigActiveMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.revision != null && message.hasOwnProperty("revision"))
                if (!$util.isInteger(message.revision))
                    return "revision: integer expected";
            return null;
        };
    
        /**
         * Creates a CTouchConfigActiveMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CTouchConfigActiveMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CTouchConfigActiveMsg} CTouchConfigActiveMsg
         */
        CTouchConfigActiveMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CTouchConfigActiveMsg)
                return object;
            var message = new $root.CTouchConfigActiveMsg();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.revision != null)
                message.revision = object.revision >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CTouchConfigActiveMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CTouchConfigActiveMsg
         * @static
         * @param {CTouchConfigActiveMsg} message CTouchConfigActiveMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CTouchConfigActiveMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.revision = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.revision != null && message.hasOwnProperty("revision"))
                object.revision = message.revision;
            return object;
        };
    
        /**
         * Converts this CTouchConfigActiveMsg to JSON.
         * @function toJSON
         * @memberof CTouchConfigActiveMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CTouchConfigActiveMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CTouchConfigActiveMsg;
    })();
    
    $root.CGetTouchConfigDataMsg = (function() {
    
        /**
         * Properties of a CGetTouchConfigDataMsg.
         * @exports ICGetTouchConfigDataMsg
         * @interface ICGetTouchConfigDataMsg
         * @property {number|null} [appid] CGetTouchConfigDataMsg appid
         */
    
        /**
         * Constructs a new CGetTouchConfigDataMsg.
         * @exports CGetTouchConfigDataMsg
         * @classdesc Represents a CGetTouchConfigDataMsg.
         * @implements ICGetTouchConfigDataMsg
         * @constructor
         * @param {ICGetTouchConfigDataMsg=} [properties] Properties to set
         */
        function CGetTouchConfigDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGetTouchConfigDataMsg appid.
         * @member {number} appid
         * @memberof CGetTouchConfigDataMsg
         * @instance
         */
        CGetTouchConfigDataMsg.prototype.appid = 0;
    
        /**
         * Creates a new CGetTouchConfigDataMsg instance using the specified properties.
         * @function create
         * @memberof CGetTouchConfigDataMsg
         * @static
         * @param {ICGetTouchConfigDataMsg=} [properties] Properties to set
         * @returns {CGetTouchConfigDataMsg} CGetTouchConfigDataMsg instance
         */
        CGetTouchConfigDataMsg.create = function create(properties) {
            return new CGetTouchConfigDataMsg(properties);
        };
    
        /**
         * Encodes the specified CGetTouchConfigDataMsg message. Does not implicitly {@link CGetTouchConfigDataMsg.verify|verify} messages.
         * @function encode
         * @memberof CGetTouchConfigDataMsg
         * @static
         * @param {ICGetTouchConfigDataMsg} message CGetTouchConfigDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetTouchConfigDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CGetTouchConfigDataMsg message, length delimited. Does not implicitly {@link CGetTouchConfigDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGetTouchConfigDataMsg
         * @static
         * @param {ICGetTouchConfigDataMsg} message CGetTouchConfigDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetTouchConfigDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGetTouchConfigDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CGetTouchConfigDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGetTouchConfigDataMsg} CGetTouchConfigDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetTouchConfigDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGetTouchConfigDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGetTouchConfigDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGetTouchConfigDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGetTouchConfigDataMsg} CGetTouchConfigDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetTouchConfigDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGetTouchConfigDataMsg message.
         * @function verify
         * @memberof CGetTouchConfigDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGetTouchConfigDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CGetTouchConfigDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGetTouchConfigDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGetTouchConfigDataMsg} CGetTouchConfigDataMsg
         */
        CGetTouchConfigDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CGetTouchConfigDataMsg)
                return object;
            var message = new $root.CGetTouchConfigDataMsg();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CGetTouchConfigDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGetTouchConfigDataMsg
         * @static
         * @param {CGetTouchConfigDataMsg} message CGetTouchConfigDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGetTouchConfigDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.appid = 0;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CGetTouchConfigDataMsg to JSON.
         * @function toJSON
         * @memberof CGetTouchConfigDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGetTouchConfigDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGetTouchConfigDataMsg;
    })();
    
    $root.CSetTouchConfigDataMsg = (function() {
    
        /**
         * Properties of a CSetTouchConfigDataMsg.
         * @exports ICSetTouchConfigDataMsg
         * @interface ICSetTouchConfigDataMsg
         * @property {number|null} [appid] CSetTouchConfigDataMsg appid
         * @property {number|null} [revision] CSetTouchConfigDataMsg revision
         * @property {Uint8Array|null} [data] CSetTouchConfigDataMsg data
         * @property {Uint8Array|null} [layout] CSetTouchConfigDataMsg layout
         */
    
        /**
         * Constructs a new CSetTouchConfigDataMsg.
         * @exports CSetTouchConfigDataMsg
         * @classdesc Represents a CSetTouchConfigDataMsg.
         * @implements ICSetTouchConfigDataMsg
         * @constructor
         * @param {ICSetTouchConfigDataMsg=} [properties] Properties to set
         */
        function CSetTouchConfigDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetTouchConfigDataMsg appid.
         * @member {number} appid
         * @memberof CSetTouchConfigDataMsg
         * @instance
         */
        CSetTouchConfigDataMsg.prototype.appid = 0;
    
        /**
         * CSetTouchConfigDataMsg revision.
         * @member {number} revision
         * @memberof CSetTouchConfigDataMsg
         * @instance
         */
        CSetTouchConfigDataMsg.prototype.revision = 0;
    
        /**
         * CSetTouchConfigDataMsg data.
         * @member {Uint8Array} data
         * @memberof CSetTouchConfigDataMsg
         * @instance
         */
        CSetTouchConfigDataMsg.prototype.data = $util.newBuffer([]);
    
        /**
         * CSetTouchConfigDataMsg layout.
         * @member {Uint8Array} layout
         * @memberof CSetTouchConfigDataMsg
         * @instance
         */
        CSetTouchConfigDataMsg.prototype.layout = $util.newBuffer([]);
    
        /**
         * Creates a new CSetTouchConfigDataMsg instance using the specified properties.
         * @function create
         * @memberof CSetTouchConfigDataMsg
         * @static
         * @param {ICSetTouchConfigDataMsg=} [properties] Properties to set
         * @returns {CSetTouchConfigDataMsg} CSetTouchConfigDataMsg instance
         */
        CSetTouchConfigDataMsg.create = function create(properties) {
            return new CSetTouchConfigDataMsg(properties);
        };
    
        /**
         * Encodes the specified CSetTouchConfigDataMsg message. Does not implicitly {@link CSetTouchConfigDataMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetTouchConfigDataMsg
         * @static
         * @param {ICSetTouchConfigDataMsg} message CSetTouchConfigDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTouchConfigDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.revision != null && message.hasOwnProperty("revision"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.revision);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            if (message.layout != null && message.hasOwnProperty("layout"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.layout);
            return writer;
        };
    
        /**
         * Encodes the specified CSetTouchConfigDataMsg message, length delimited. Does not implicitly {@link CSetTouchConfigDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetTouchConfigDataMsg
         * @static
         * @param {ICSetTouchConfigDataMsg} message CSetTouchConfigDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTouchConfigDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetTouchConfigDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetTouchConfigDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetTouchConfigDataMsg} CSetTouchConfigDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTouchConfigDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetTouchConfigDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.revision = reader.uint32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.layout = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetTouchConfigDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetTouchConfigDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetTouchConfigDataMsg} CSetTouchConfigDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTouchConfigDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetTouchConfigDataMsg message.
         * @function verify
         * @memberof CSetTouchConfigDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetTouchConfigDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.revision != null && message.hasOwnProperty("revision"))
                if (!$util.isInteger(message.revision))
                    return "revision: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.layout != null && message.hasOwnProperty("layout"))
                if (!(message.layout && typeof message.layout.length === "number" || $util.isString(message.layout)))
                    return "layout: buffer expected";
            return null;
        };
    
        /**
         * Creates a CSetTouchConfigDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetTouchConfigDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetTouchConfigDataMsg} CSetTouchConfigDataMsg
         */
        CSetTouchConfigDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetTouchConfigDataMsg)
                return object;
            var message = new $root.CSetTouchConfigDataMsg();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.revision != null)
                message.revision = object.revision >>> 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.layout != null)
                if (typeof object.layout === "string")
                    $util.base64.decode(object.layout, message.layout = $util.newBuffer($util.base64.length(object.layout)), 0);
                else if (object.layout.length)
                    message.layout = object.layout;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetTouchConfigDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetTouchConfigDataMsg
         * @static
         * @param {CSetTouchConfigDataMsg} message CSetTouchConfigDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetTouchConfigDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.revision = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                if (options.bytes === String)
                    object.layout = "";
                else {
                    object.layout = [];
                    if (options.bytes !== Array)
                        object.layout = $util.newBuffer(object.layout);
                }
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.revision != null && message.hasOwnProperty("revision"))
                object.revision = message.revision;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.layout != null && message.hasOwnProperty("layout"))
                object.layout = options.bytes === String ? $util.base64.encode(message.layout, 0, message.layout.length) : options.bytes === Array ? Array.prototype.slice.call(message.layout) : message.layout;
            return object;
        };
    
        /**
         * Converts this CSetTouchConfigDataMsg to JSON.
         * @function toJSON
         * @memberof CSetTouchConfigDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetTouchConfigDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetTouchConfigDataMsg;
    })();
    
    $root.CSaveTouchConfigLayoutMsg = (function() {
    
        /**
         * Properties of a CSaveTouchConfigLayoutMsg.
         * @exports ICSaveTouchConfigLayoutMsg
         * @interface ICSaveTouchConfigLayoutMsg
         * @property {number|null} [appid] CSaveTouchConfigLayoutMsg appid
         * @property {Uint8Array|null} [layout] CSaveTouchConfigLayoutMsg layout
         */
    
        /**
         * Constructs a new CSaveTouchConfigLayoutMsg.
         * @exports CSaveTouchConfigLayoutMsg
         * @classdesc Represents a CSaveTouchConfigLayoutMsg.
         * @implements ICSaveTouchConfigLayoutMsg
         * @constructor
         * @param {ICSaveTouchConfigLayoutMsg=} [properties] Properties to set
         */
        function CSaveTouchConfigLayoutMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSaveTouchConfigLayoutMsg appid.
         * @member {number} appid
         * @memberof CSaveTouchConfigLayoutMsg
         * @instance
         */
        CSaveTouchConfigLayoutMsg.prototype.appid = 0;
    
        /**
         * CSaveTouchConfigLayoutMsg layout.
         * @member {Uint8Array} layout
         * @memberof CSaveTouchConfigLayoutMsg
         * @instance
         */
        CSaveTouchConfigLayoutMsg.prototype.layout = $util.newBuffer([]);
    
        /**
         * Creates a new CSaveTouchConfigLayoutMsg instance using the specified properties.
         * @function create
         * @memberof CSaveTouchConfigLayoutMsg
         * @static
         * @param {ICSaveTouchConfigLayoutMsg=} [properties] Properties to set
         * @returns {CSaveTouchConfigLayoutMsg} CSaveTouchConfigLayoutMsg instance
         */
        CSaveTouchConfigLayoutMsg.create = function create(properties) {
            return new CSaveTouchConfigLayoutMsg(properties);
        };
    
        /**
         * Encodes the specified CSaveTouchConfigLayoutMsg message. Does not implicitly {@link CSaveTouchConfigLayoutMsg.verify|verify} messages.
         * @function encode
         * @memberof CSaveTouchConfigLayoutMsg
         * @static
         * @param {ICSaveTouchConfigLayoutMsg} message CSaveTouchConfigLayoutMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSaveTouchConfigLayoutMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.layout != null && message.hasOwnProperty("layout"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.layout);
            return writer;
        };
    
        /**
         * Encodes the specified CSaveTouchConfigLayoutMsg message, length delimited. Does not implicitly {@link CSaveTouchConfigLayoutMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSaveTouchConfigLayoutMsg
         * @static
         * @param {ICSaveTouchConfigLayoutMsg} message CSaveTouchConfigLayoutMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSaveTouchConfigLayoutMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSaveTouchConfigLayoutMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSaveTouchConfigLayoutMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSaveTouchConfigLayoutMsg} CSaveTouchConfigLayoutMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSaveTouchConfigLayoutMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSaveTouchConfigLayoutMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 4:
                    message.layout = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSaveTouchConfigLayoutMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSaveTouchConfigLayoutMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSaveTouchConfigLayoutMsg} CSaveTouchConfigLayoutMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSaveTouchConfigLayoutMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSaveTouchConfigLayoutMsg message.
         * @function verify
         * @memberof CSaveTouchConfigLayoutMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSaveTouchConfigLayoutMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.layout != null && message.hasOwnProperty("layout"))
                if (!(message.layout && typeof message.layout.length === "number" || $util.isString(message.layout)))
                    return "layout: buffer expected";
            return null;
        };
    
        /**
         * Creates a CSaveTouchConfigLayoutMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSaveTouchConfigLayoutMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSaveTouchConfigLayoutMsg} CSaveTouchConfigLayoutMsg
         */
        CSaveTouchConfigLayoutMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSaveTouchConfigLayoutMsg)
                return object;
            var message = new $root.CSaveTouchConfigLayoutMsg();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.layout != null)
                if (typeof object.layout === "string")
                    $util.base64.decode(object.layout, message.layout = $util.newBuffer($util.base64.length(object.layout)), 0);
                else if (object.layout.length)
                    message.layout = object.layout;
            return message;
        };
    
        /**
         * Creates a plain object from a CSaveTouchConfigLayoutMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSaveTouchConfigLayoutMsg
         * @static
         * @param {CSaveTouchConfigLayoutMsg} message CSaveTouchConfigLayoutMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSaveTouchConfigLayoutMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if (options.bytes === String)
                    object.layout = "";
                else {
                    object.layout = [];
                    if (options.bytes !== Array)
                        object.layout = $util.newBuffer(object.layout);
                }
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.layout != null && message.hasOwnProperty("layout"))
                object.layout = options.bytes === String ? $util.base64.encode(message.layout, 0, message.layout.length) : options.bytes === Array ? Array.prototype.slice.call(message.layout) : message.layout;
            return object;
        };
    
        /**
         * Converts this CSaveTouchConfigLayoutMsg to JSON.
         * @function toJSON
         * @memberof CSaveTouchConfigLayoutMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSaveTouchConfigLayoutMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSaveTouchConfigLayoutMsg;
    })();
    
    $root.CTouchActionSetActiveMsg = (function() {
    
        /**
         * Properties of a CTouchActionSetActiveMsg.
         * @exports ICTouchActionSetActiveMsg
         * @interface ICTouchActionSetActiveMsg
         * @property {number|null} [appid] CTouchActionSetActiveMsg appid
         * @property {number|null} [actionset_id] CTouchActionSetActiveMsg actionset_id
         */
    
        /**
         * Constructs a new CTouchActionSetActiveMsg.
         * @exports CTouchActionSetActiveMsg
         * @classdesc Represents a CTouchActionSetActiveMsg.
         * @implements ICTouchActionSetActiveMsg
         * @constructor
         * @param {ICTouchActionSetActiveMsg=} [properties] Properties to set
         */
        function CTouchActionSetActiveMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CTouchActionSetActiveMsg appid.
         * @member {number} appid
         * @memberof CTouchActionSetActiveMsg
         * @instance
         */
        CTouchActionSetActiveMsg.prototype.appid = 0;
    
        /**
         * CTouchActionSetActiveMsg actionset_id.
         * @member {number} actionset_id
         * @memberof CTouchActionSetActiveMsg
         * @instance
         */
        CTouchActionSetActiveMsg.prototype.actionset_id = 0;
    
        /**
         * Creates a new CTouchActionSetActiveMsg instance using the specified properties.
         * @function create
         * @memberof CTouchActionSetActiveMsg
         * @static
         * @param {ICTouchActionSetActiveMsg=} [properties] Properties to set
         * @returns {CTouchActionSetActiveMsg} CTouchActionSetActiveMsg instance
         */
        CTouchActionSetActiveMsg.create = function create(properties) {
            return new CTouchActionSetActiveMsg(properties);
        };
    
        /**
         * Encodes the specified CTouchActionSetActiveMsg message. Does not implicitly {@link CTouchActionSetActiveMsg.verify|verify} messages.
         * @function encode
         * @memberof CTouchActionSetActiveMsg
         * @static
         * @param {ICTouchActionSetActiveMsg} message CTouchActionSetActiveMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CTouchActionSetActiveMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.actionset_id != null && message.hasOwnProperty("actionset_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.actionset_id);
            return writer;
        };
    
        /**
         * Encodes the specified CTouchActionSetActiveMsg message, length delimited. Does not implicitly {@link CTouchActionSetActiveMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CTouchActionSetActiveMsg
         * @static
         * @param {ICTouchActionSetActiveMsg} message CTouchActionSetActiveMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CTouchActionSetActiveMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CTouchActionSetActiveMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CTouchActionSetActiveMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CTouchActionSetActiveMsg} CTouchActionSetActiveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CTouchActionSetActiveMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTouchActionSetActiveMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.actionset_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CTouchActionSetActiveMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CTouchActionSetActiveMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CTouchActionSetActiveMsg} CTouchActionSetActiveMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CTouchActionSetActiveMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CTouchActionSetActiveMsg message.
         * @function verify
         * @memberof CTouchActionSetActiveMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CTouchActionSetActiveMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.actionset_id != null && message.hasOwnProperty("actionset_id"))
                if (!$util.isInteger(message.actionset_id))
                    return "actionset_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CTouchActionSetActiveMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CTouchActionSetActiveMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CTouchActionSetActiveMsg} CTouchActionSetActiveMsg
         */
        CTouchActionSetActiveMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CTouchActionSetActiveMsg)
                return object;
            var message = new $root.CTouchActionSetActiveMsg();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.actionset_id != null)
                message.actionset_id = object.actionset_id | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CTouchActionSetActiveMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CTouchActionSetActiveMsg
         * @static
         * @param {CTouchActionSetActiveMsg} message CTouchActionSetActiveMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CTouchActionSetActiveMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.actionset_id = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.actionset_id != null && message.hasOwnProperty("actionset_id"))
                object.actionset_id = message.actionset_id;
            return object;
        };
    
        /**
         * Converts this CTouchActionSetActiveMsg to JSON.
         * @function toJSON
         * @memberof CTouchActionSetActiveMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CTouchActionSetActiveMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CTouchActionSetActiveMsg;
    })();
    
    $root.CGetTouchIconDataMsg = (function() {
    
        /**
         * Properties of a CGetTouchIconDataMsg.
         * @exports ICGetTouchIconDataMsg
         * @interface ICGetTouchIconDataMsg
         * @property {number|null} [appid] CGetTouchIconDataMsg appid
         * @property {string|null} [icon] CGetTouchIconDataMsg icon
         */
    
        /**
         * Constructs a new CGetTouchIconDataMsg.
         * @exports CGetTouchIconDataMsg
         * @classdesc Represents a CGetTouchIconDataMsg.
         * @implements ICGetTouchIconDataMsg
         * @constructor
         * @param {ICGetTouchIconDataMsg=} [properties] Properties to set
         */
        function CGetTouchIconDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGetTouchIconDataMsg appid.
         * @member {number} appid
         * @memberof CGetTouchIconDataMsg
         * @instance
         */
        CGetTouchIconDataMsg.prototype.appid = 0;
    
        /**
         * CGetTouchIconDataMsg icon.
         * @member {string} icon
         * @memberof CGetTouchIconDataMsg
         * @instance
         */
        CGetTouchIconDataMsg.prototype.icon = "";
    
        /**
         * Creates a new CGetTouchIconDataMsg instance using the specified properties.
         * @function create
         * @memberof CGetTouchIconDataMsg
         * @static
         * @param {ICGetTouchIconDataMsg=} [properties] Properties to set
         * @returns {CGetTouchIconDataMsg} CGetTouchIconDataMsg instance
         */
        CGetTouchIconDataMsg.create = function create(properties) {
            return new CGetTouchIconDataMsg(properties);
        };
    
        /**
         * Encodes the specified CGetTouchIconDataMsg message. Does not implicitly {@link CGetTouchIconDataMsg.verify|verify} messages.
         * @function encode
         * @memberof CGetTouchIconDataMsg
         * @static
         * @param {ICGetTouchIconDataMsg} message CGetTouchIconDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetTouchIconDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.icon);
            return writer;
        };
    
        /**
         * Encodes the specified CGetTouchIconDataMsg message, length delimited. Does not implicitly {@link CGetTouchIconDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGetTouchIconDataMsg
         * @static
         * @param {ICGetTouchIconDataMsg} message CGetTouchIconDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGetTouchIconDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGetTouchIconDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CGetTouchIconDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGetTouchIconDataMsg} CGetTouchIconDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetTouchIconDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGetTouchIconDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.icon = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGetTouchIconDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGetTouchIconDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGetTouchIconDataMsg} CGetTouchIconDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGetTouchIconDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGetTouchIconDataMsg message.
         * @function verify
         * @memberof CGetTouchIconDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGetTouchIconDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            return null;
        };
    
        /**
         * Creates a CGetTouchIconDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGetTouchIconDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGetTouchIconDataMsg} CGetTouchIconDataMsg
         */
        CGetTouchIconDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CGetTouchIconDataMsg)
                return object;
            var message = new $root.CGetTouchIconDataMsg();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            return message;
        };
    
        /**
         * Creates a plain object from a CGetTouchIconDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGetTouchIconDataMsg
         * @static
         * @param {CGetTouchIconDataMsg} message CGetTouchIconDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGetTouchIconDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.icon = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            return object;
        };
    
        /**
         * Converts this CGetTouchIconDataMsg to JSON.
         * @function toJSON
         * @memberof CGetTouchIconDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGetTouchIconDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGetTouchIconDataMsg;
    })();
    
    $root.CSetTouchIconDataMsg = (function() {
    
        /**
         * Properties of a CSetTouchIconDataMsg.
         * @exports ICSetTouchIconDataMsg
         * @interface ICSetTouchIconDataMsg
         * @property {number|null} [appid] CSetTouchIconDataMsg appid
         * @property {string|null} [icon] CSetTouchIconDataMsg icon
         * @property {Uint8Array|null} [data] CSetTouchIconDataMsg data
         */
    
        /**
         * Constructs a new CSetTouchIconDataMsg.
         * @exports CSetTouchIconDataMsg
         * @classdesc Represents a CSetTouchIconDataMsg.
         * @implements ICSetTouchIconDataMsg
         * @constructor
         * @param {ICSetTouchIconDataMsg=} [properties] Properties to set
         */
        function CSetTouchIconDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CSetTouchIconDataMsg appid.
         * @member {number} appid
         * @memberof CSetTouchIconDataMsg
         * @instance
         */
        CSetTouchIconDataMsg.prototype.appid = 0;
    
        /**
         * CSetTouchIconDataMsg icon.
         * @member {string} icon
         * @memberof CSetTouchIconDataMsg
         * @instance
         */
        CSetTouchIconDataMsg.prototype.icon = "";
    
        /**
         * CSetTouchIconDataMsg data.
         * @member {Uint8Array} data
         * @memberof CSetTouchIconDataMsg
         * @instance
         */
        CSetTouchIconDataMsg.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CSetTouchIconDataMsg instance using the specified properties.
         * @function create
         * @memberof CSetTouchIconDataMsg
         * @static
         * @param {ICSetTouchIconDataMsg=} [properties] Properties to set
         * @returns {CSetTouchIconDataMsg} CSetTouchIconDataMsg instance
         */
        CSetTouchIconDataMsg.create = function create(properties) {
            return new CSetTouchIconDataMsg(properties);
        };
    
        /**
         * Encodes the specified CSetTouchIconDataMsg message. Does not implicitly {@link CSetTouchIconDataMsg.verify|verify} messages.
         * @function encode
         * @memberof CSetTouchIconDataMsg
         * @static
         * @param {ICSetTouchIconDataMsg} message CSetTouchIconDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTouchIconDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.icon);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CSetTouchIconDataMsg message, length delimited. Does not implicitly {@link CSetTouchIconDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CSetTouchIconDataMsg
         * @static
         * @param {ICSetTouchIconDataMsg} message CSetTouchIconDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSetTouchIconDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CSetTouchIconDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CSetTouchIconDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CSetTouchIconDataMsg} CSetTouchIconDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTouchIconDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CSetTouchIconDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.icon = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CSetTouchIconDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CSetTouchIconDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CSetTouchIconDataMsg} CSetTouchIconDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSetTouchIconDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CSetTouchIconDataMsg message.
         * @function verify
         * @memberof CSetTouchIconDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSetTouchIconDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CSetTouchIconDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CSetTouchIconDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CSetTouchIconDataMsg} CSetTouchIconDataMsg
         */
        CSetTouchIconDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CSetTouchIconDataMsg)
                return object;
            var message = new $root.CSetTouchIconDataMsg();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CSetTouchIconDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CSetTouchIconDataMsg
         * @static
         * @param {CSetTouchIconDataMsg} message CSetTouchIconDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSetTouchIconDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.icon = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CSetTouchIconDataMsg to JSON.
         * @function toJSON
         * @memberof CSetTouchIconDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSetTouchIconDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CSetTouchIconDataMsg;
    })();
    
    $root.CStreamDataLostMsg = (function() {
    
        /**
         * Properties of a CStreamDataLostMsg.
         * @exports ICStreamDataLostMsg
         * @interface ICStreamDataLostMsg
         * @property {Array.<number>|null} [packets] CStreamDataLostMsg packets
         */
    
        /**
         * Constructs a new CStreamDataLostMsg.
         * @exports CStreamDataLostMsg
         * @classdesc Represents a CStreamDataLostMsg.
         * @implements ICStreamDataLostMsg
         * @constructor
         * @param {ICStreamDataLostMsg=} [properties] Properties to set
         */
        function CStreamDataLostMsg(properties) {
            this.packets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStreamDataLostMsg packets.
         * @member {Array.<number>} packets
         * @memberof CStreamDataLostMsg
         * @instance
         */
        CStreamDataLostMsg.prototype.packets = $util.emptyArray;
    
        /**
         * Creates a new CStreamDataLostMsg instance using the specified properties.
         * @function create
         * @memberof CStreamDataLostMsg
         * @static
         * @param {ICStreamDataLostMsg=} [properties] Properties to set
         * @returns {CStreamDataLostMsg} CStreamDataLostMsg instance
         */
        CStreamDataLostMsg.create = function create(properties) {
            return new CStreamDataLostMsg(properties);
        };
    
        /**
         * Encodes the specified CStreamDataLostMsg message. Does not implicitly {@link CStreamDataLostMsg.verify|verify} messages.
         * @function encode
         * @memberof CStreamDataLostMsg
         * @static
         * @param {ICStreamDataLostMsg} message CStreamDataLostMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamDataLostMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.packets != null && message.packets.length)
                for (var i = 0; i < message.packets.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.packets[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CStreamDataLostMsg message, length delimited. Does not implicitly {@link CStreamDataLostMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStreamDataLostMsg
         * @static
         * @param {ICStreamDataLostMsg} message CStreamDataLostMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamDataLostMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStreamDataLostMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CStreamDataLostMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStreamDataLostMsg} CStreamDataLostMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamDataLostMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStreamDataLostMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.packets && message.packets.length))
                        message.packets = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.packets.push(reader.uint32());
                    } else
                        message.packets.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStreamDataLostMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStreamDataLostMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStreamDataLostMsg} CStreamDataLostMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamDataLostMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStreamDataLostMsg message.
         * @function verify
         * @memberof CStreamDataLostMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStreamDataLostMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.packets != null && message.hasOwnProperty("packets")) {
                if (!Array.isArray(message.packets))
                    return "packets: array expected";
                for (var i = 0; i < message.packets.length; ++i)
                    if (!$util.isInteger(message.packets[i]))
                        return "packets: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CStreamDataLostMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStreamDataLostMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStreamDataLostMsg} CStreamDataLostMsg
         */
        CStreamDataLostMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CStreamDataLostMsg)
                return object;
            var message = new $root.CStreamDataLostMsg();
            if (object.packets) {
                if (!Array.isArray(object.packets))
                    throw TypeError(".CStreamDataLostMsg.packets: array expected");
                message.packets = [];
                for (var i = 0; i < object.packets.length; ++i)
                    message.packets[i] = object.packets[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CStreamDataLostMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStreamDataLostMsg
         * @static
         * @param {CStreamDataLostMsg} message CStreamDataLostMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStreamDataLostMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.packets = [];
            if (message.packets && message.packets.length) {
                object.packets = [];
                for (var j = 0; j < message.packets.length; ++j)
                    object.packets[j] = message.packets[j];
            }
            return object;
        };
    
        /**
         * Converts this CStreamDataLostMsg to JSON.
         * @function toJSON
         * @memberof CStreamDataLostMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStreamDataLostMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStreamDataLostMsg;
    })();
    
    $root.CAudioFormat = (function() {
    
        /**
         * Properties of a CAudioFormat.
         * @exports ICAudioFormat
         * @interface ICAudioFormat
         * @property {EAudioFormat} format CAudioFormat format
         * @property {number|null} [frequency] CAudioFormat frequency
         * @property {number|null} [channels] CAudioFormat channels
         */
    
        /**
         * Constructs a new CAudioFormat.
         * @exports CAudioFormat
         * @classdesc Represents a CAudioFormat.
         * @implements ICAudioFormat
         * @constructor
         * @param {ICAudioFormat=} [properties] Properties to set
         */
        function CAudioFormat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAudioFormat format.
         * @member {EAudioFormat} format
         * @memberof CAudioFormat
         * @instance
         */
        CAudioFormat.prototype.format = 0;
    
        /**
         * CAudioFormat frequency.
         * @member {number} frequency
         * @memberof CAudioFormat
         * @instance
         */
        CAudioFormat.prototype.frequency = 0;
    
        /**
         * CAudioFormat channels.
         * @member {number} channels
         * @memberof CAudioFormat
         * @instance
         */
        CAudioFormat.prototype.channels = 0;
    
        /**
         * Creates a new CAudioFormat instance using the specified properties.
         * @function create
         * @memberof CAudioFormat
         * @static
         * @param {ICAudioFormat=} [properties] Properties to set
         * @returns {CAudioFormat} CAudioFormat instance
         */
        CAudioFormat.create = function create(properties) {
            return new CAudioFormat(properties);
        };
    
        /**
         * Encodes the specified CAudioFormat message. Does not implicitly {@link CAudioFormat.verify|verify} messages.
         * @function encode
         * @memberof CAudioFormat
         * @static
         * @param {ICAudioFormat} message CAudioFormat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAudioFormat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.format);
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.frequency);
            if (message.channels != null && message.hasOwnProperty("channels"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.channels);
            return writer;
        };
    
        /**
         * Encodes the specified CAudioFormat message, length delimited. Does not implicitly {@link CAudioFormat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAudioFormat
         * @static
         * @param {ICAudioFormat} message CAudioFormat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAudioFormat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAudioFormat message from the specified reader or buffer.
         * @function decode
         * @memberof CAudioFormat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAudioFormat} CAudioFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAudioFormat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAudioFormat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.format = reader.int32();
                    break;
                case 2:
                    message.frequency = reader.uint32();
                    break;
                case 3:
                    message.channels = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("format"))
                throw $util.ProtocolError("missing required 'format'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CAudioFormat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAudioFormat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAudioFormat} CAudioFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAudioFormat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAudioFormat message.
         * @function verify
         * @memberof CAudioFormat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAudioFormat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.format) {
            default:
                return "format: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                if (!$util.isInteger(message.frequency))
                    return "frequency: integer expected";
            if (message.channels != null && message.hasOwnProperty("channels"))
                if (!$util.isInteger(message.channels))
                    return "channels: integer expected";
            return null;
        };
    
        /**
         * Creates a CAudioFormat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAudioFormat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAudioFormat} CAudioFormat
         */
        CAudioFormat.fromObject = function fromObject(object) {
            if (object instanceof $root.CAudioFormat)
                return object;
            var message = new $root.CAudioFormat();
            switch (object.format) {
            case "k_EAudioFormatNone":
            case 0:
                message.format = 0;
                break;
            case "k_EAudioFormat16BitLittleEndian":
            case 1:
                message.format = 1;
                break;
            case "k_EAudioFormatFloat":
            case 2:
                message.format = 2;
                break;
            }
            if (object.frequency != null)
                message.frequency = object.frequency >>> 0;
            if (object.channels != null)
                message.channels = object.channels >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CAudioFormat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAudioFormat
         * @static
         * @param {CAudioFormat} message CAudioFormat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAudioFormat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.format = options.enums === String ? "k_EAudioFormatNone" : 0;
                object.frequency = 0;
                object.channels = 0;
            }
            if (message.format != null && message.hasOwnProperty("format"))
                object.format = options.enums === String ? $root.EAudioFormat[message.format] : message.format;
            if (message.frequency != null && message.hasOwnProperty("frequency"))
                object.frequency = message.frequency;
            if (message.channels != null && message.hasOwnProperty("channels"))
                object.channels = message.channels;
            return object;
        };
    
        /**
         * Converts this CAudioFormat to JSON.
         * @function toJSON
         * @memberof CAudioFormat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAudioFormat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAudioFormat;
    })();
    
    $root.CVideoFormat = (function() {
    
        /**
         * Properties of a CVideoFormat.
         * @exports ICVideoFormat
         * @interface ICVideoFormat
         * @property {EVideoFormat} format CVideoFormat format
         * @property {number|null} [width] CVideoFormat width
         * @property {number|null} [height] CVideoFormat height
         */
    
        /**
         * Constructs a new CVideoFormat.
         * @exports CVideoFormat
         * @classdesc Represents a CVideoFormat.
         * @implements ICVideoFormat
         * @constructor
         * @param {ICVideoFormat=} [properties] Properties to set
         */
        function CVideoFormat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVideoFormat format.
         * @member {EVideoFormat} format
         * @memberof CVideoFormat
         * @instance
         */
        CVideoFormat.prototype.format = 0;
    
        /**
         * CVideoFormat width.
         * @member {number} width
         * @memberof CVideoFormat
         * @instance
         */
        CVideoFormat.prototype.width = 0;
    
        /**
         * CVideoFormat height.
         * @member {number} height
         * @memberof CVideoFormat
         * @instance
         */
        CVideoFormat.prototype.height = 0;
    
        /**
         * Creates a new CVideoFormat instance using the specified properties.
         * @function create
         * @memberof CVideoFormat
         * @static
         * @param {ICVideoFormat=} [properties] Properties to set
         * @returns {CVideoFormat} CVideoFormat instance
         */
        CVideoFormat.create = function create(properties) {
            return new CVideoFormat(properties);
        };
    
        /**
         * Encodes the specified CVideoFormat message. Does not implicitly {@link CVideoFormat.verify|verify} messages.
         * @function encode
         * @memberof CVideoFormat
         * @static
         * @param {ICVideoFormat} message CVideoFormat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVideoFormat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.format);
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.height);
            return writer;
        };
    
        /**
         * Encodes the specified CVideoFormat message, length delimited. Does not implicitly {@link CVideoFormat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVideoFormat
         * @static
         * @param {ICVideoFormat} message CVideoFormat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVideoFormat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVideoFormat message from the specified reader or buffer.
         * @function decode
         * @memberof CVideoFormat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVideoFormat} CVideoFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVideoFormat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVideoFormat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.format = reader.int32();
                    break;
                case 2:
                    message.width = reader.uint32();
                    break;
                case 3:
                    message.height = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("format"))
                throw $util.ProtocolError("missing required 'format'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CVideoFormat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVideoFormat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVideoFormat} CVideoFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVideoFormat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVideoFormat message.
         * @function verify
         * @memberof CVideoFormat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVideoFormat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.format) {
            default:
                return "format: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            return null;
        };
    
        /**
         * Creates a CVideoFormat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVideoFormat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVideoFormat} CVideoFormat
         */
        CVideoFormat.fromObject = function fromObject(object) {
            if (object instanceof $root.CVideoFormat)
                return object;
            var message = new $root.CVideoFormat();
            switch (object.format) {
            case "k_EVideoFormatNone":
            case 0:
                message.format = 0;
                break;
            case "k_EVideoFormatYV12":
            case 1:
                message.format = 1;
                break;
            case "k_EVideoFormatAccel":
            case 2:
                message.format = 2;
                break;
            }
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CVideoFormat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVideoFormat
         * @static
         * @param {CVideoFormat} message CVideoFormat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVideoFormat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.format = options.enums === String ? "k_EVideoFormatNone" : 0;
                object.width = 0;
                object.height = 0;
            }
            if (message.format != null && message.hasOwnProperty("format"))
                object.format = options.enums === String ? $root.EVideoFormat[message.format] : message.format;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            return object;
        };
    
        /**
         * Converts this CVideoFormat to JSON.
         * @function toJSON
         * @memberof CVideoFormat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVideoFormat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVideoFormat;
    })();
    
    $root.CFrameEvent = (function() {
    
        /**
         * Properties of a CFrameEvent.
         * @exports ICFrameEvent
         * @interface ICFrameEvent
         * @property {EStreamFrameEvent} event_id CFrameEvent event_id
         * @property {number} timestamp CFrameEvent timestamp
         */
    
        /**
         * Constructs a new CFrameEvent.
         * @exports CFrameEvent
         * @classdesc Represents a CFrameEvent.
         * @implements ICFrameEvent
         * @constructor
         * @param {ICFrameEvent=} [properties] Properties to set
         */
        function CFrameEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CFrameEvent event_id.
         * @member {EStreamFrameEvent} event_id
         * @memberof CFrameEvent
         * @instance
         */
        CFrameEvent.prototype.event_id = 0;
    
        /**
         * CFrameEvent timestamp.
         * @member {number} timestamp
         * @memberof CFrameEvent
         * @instance
         */
        CFrameEvent.prototype.timestamp = 0;
    
        /**
         * Creates a new CFrameEvent instance using the specified properties.
         * @function create
         * @memberof CFrameEvent
         * @static
         * @param {ICFrameEvent=} [properties] Properties to set
         * @returns {CFrameEvent} CFrameEvent instance
         */
        CFrameEvent.create = function create(properties) {
            return new CFrameEvent(properties);
        };
    
        /**
         * Encodes the specified CFrameEvent message. Does not implicitly {@link CFrameEvent.verify|verify} messages.
         * @function encode
         * @memberof CFrameEvent
         * @static
         * @param {ICFrameEvent} message CFrameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CFrameEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.event_id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
            return writer;
        };
    
        /**
         * Encodes the specified CFrameEvent message, length delimited. Does not implicitly {@link CFrameEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CFrameEvent
         * @static
         * @param {ICFrameEvent} message CFrameEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CFrameEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CFrameEvent message from the specified reader or buffer.
         * @function decode
         * @memberof CFrameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CFrameEvent} CFrameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CFrameEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CFrameEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.event_id = reader.int32();
                    break;
                case 2:
                    message.timestamp = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("event_id"))
                throw $util.ProtocolError("missing required 'event_id'", { instance: message });
            if (!message.hasOwnProperty("timestamp"))
                throw $util.ProtocolError("missing required 'timestamp'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CFrameEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CFrameEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CFrameEvent} CFrameEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CFrameEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CFrameEvent message.
         * @function verify
         * @memberof CFrameEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CFrameEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.event_id) {
            default:
                return "event_id: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                break;
            }
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
            return null;
        };
    
        /**
         * Creates a CFrameEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CFrameEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CFrameEvent} CFrameEvent
         */
        CFrameEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.CFrameEvent)
                return object;
            var message = new $root.CFrameEvent();
            switch (object.event_id) {
            case "k_EStreamInputEventStart":
            case 0:
                message.event_id = 0;
                break;
            case "k_EStreamInputEventSend":
            case 1:
                message.event_id = 1;
                break;
            case "k_EStreamInputEventRecv":
            case 2:
                message.event_id = 2;
                break;
            case "k_EStreamInputEventQueued":
            case 3:
                message.event_id = 3;
                break;
            case "k_EStreamInputEventHandled":
            case 4:
                message.event_id = 4;
                break;
            case "k_EStreamFrameEventStart":
            case 5:
                message.event_id = 5;
                break;
            case "k_EStreamFrameEventCaptureBegin":
            case 6:
                message.event_id = 6;
                break;
            case "k_EStreamFrameEventCaptureEnd":
            case 7:
                message.event_id = 7;
                break;
            case "k_EStreamFrameEventConvertBegin":
            case 8:
                message.event_id = 8;
                break;
            case "k_EStreamFrameEventConvertEnd":
            case 9:
                message.event_id = 9;
                break;
            case "k_EStreamFrameEventEncodeBegin":
            case 10:
                message.event_id = 10;
                break;
            case "k_EStreamFrameEventEncodeEnd":
            case 11:
                message.event_id = 11;
                break;
            case "k_EStreamFrameEventSend":
            case 12:
                message.event_id = 12;
                break;
            case "k_EStreamFrameEventRecv":
            case 13:
                message.event_id = 13;
                break;
            case "k_EStreamFrameEventDecodeBegin":
            case 14:
                message.event_id = 14;
                break;
            case "k_EStreamFrameEventDecodeEnd":
            case 15:
                message.event_id = 15;
                break;
            case "k_EStreamFrameEventUploadBegin":
            case 16:
                message.event_id = 16;
                break;
            case "k_EStreamFrameEventUploadEnd":
            case 17:
                message.event_id = 17;
                break;
            case "k_EStreamFrameEventComplete":
            case 18:
                message.event_id = 18;
                break;
            }
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CFrameEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CFrameEvent
         * @static
         * @param {CFrameEvent} message CFrameEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CFrameEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event_id = options.enums === String ? "k_EStreamInputEventStart" : 0;
                object.timestamp = 0;
            }
            if (message.event_id != null && message.hasOwnProperty("event_id"))
                object.event_id = options.enums === String ? $root.EStreamFrameEvent[message.event_id] : message.event_id;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            return object;
        };
    
        /**
         * Converts this CFrameEvent to JSON.
         * @function toJSON
         * @memberof CFrameEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CFrameEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CFrameEvent;
    })();
    
    $root.CFrameStats = (function() {
    
        /**
         * Properties of a CFrameStats.
         * @exports ICFrameStats
         * @interface ICFrameStats
         * @property {number} frame_id CFrameStats frame_id
         * @property {number|null} [input_mark] CFrameStats input_mark
         * @property {Array.<ICFrameEvent>|null} [events] CFrameStats events
         * @property {EStreamFrameResult} result CFrameStats result
         * @property {number|null} [frame_start_delta] CFrameStats frame_start_delta
         * @property {number|null} [frame_display_delta] CFrameStats frame_display_delta
         * @property {number|null} [ping_time] CFrameStats ping_time
         * @property {number|null} [server_bitrate] CFrameStats server_bitrate
         * @property {number|null} [client_bitrate] CFrameStats client_bitrate
         * @property {number|null} [link_bandwidth] CFrameStats link_bandwidth
         * @property {number|null} [packet_loss] CFrameStats packet_loss
         * @property {number|null} [frame_size] CFrameStats frame_size
         */
    
        /**
         * Constructs a new CFrameStats.
         * @exports CFrameStats
         * @classdesc Represents a CFrameStats.
         * @implements ICFrameStats
         * @constructor
         * @param {ICFrameStats=} [properties] Properties to set
         */
        function CFrameStats(properties) {
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CFrameStats frame_id.
         * @member {number} frame_id
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.frame_id = 0;
    
        /**
         * CFrameStats input_mark.
         * @member {number} input_mark
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.input_mark = 0;
    
        /**
         * CFrameStats events.
         * @member {Array.<ICFrameEvent>} events
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.events = $util.emptyArray;
    
        /**
         * CFrameStats result.
         * @member {EStreamFrameResult} result
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.result = 0;
    
        /**
         * CFrameStats frame_start_delta.
         * @member {number} frame_start_delta
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.frame_start_delta = 0;
    
        /**
         * CFrameStats frame_display_delta.
         * @member {number} frame_display_delta
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.frame_display_delta = 0;
    
        /**
         * CFrameStats ping_time.
         * @member {number} ping_time
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.ping_time = 0;
    
        /**
         * CFrameStats server_bitrate.
         * @member {number} server_bitrate
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.server_bitrate = 0;
    
        /**
         * CFrameStats client_bitrate.
         * @member {number} client_bitrate
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.client_bitrate = 0;
    
        /**
         * CFrameStats link_bandwidth.
         * @member {number} link_bandwidth
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.link_bandwidth = 0;
    
        /**
         * CFrameStats packet_loss.
         * @member {number} packet_loss
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.packet_loss = 0;
    
        /**
         * CFrameStats frame_size.
         * @member {number} frame_size
         * @memberof CFrameStats
         * @instance
         */
        CFrameStats.prototype.frame_size = 0;
    
        /**
         * Creates a new CFrameStats instance using the specified properties.
         * @function create
         * @memberof CFrameStats
         * @static
         * @param {ICFrameStats=} [properties] Properties to set
         * @returns {CFrameStats} CFrameStats instance
         */
        CFrameStats.create = function create(properties) {
            return new CFrameStats(properties);
        };
    
        /**
         * Encodes the specified CFrameStats message. Does not implicitly {@link CFrameStats.verify|verify} messages.
         * @function encode
         * @memberof CFrameStats
         * @static
         * @param {ICFrameStats} message CFrameStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CFrameStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.frame_id);
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.input_mark);
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.CFrameEvent.encode(message.events[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.result);
            if (message.frame_start_delta != null && message.hasOwnProperty("frame_start_delta"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.frame_start_delta);
            if (message.frame_display_delta != null && message.hasOwnProperty("frame_display_delta"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.frame_display_delta);
            if (message.ping_time != null && message.hasOwnProperty("ping_time"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.ping_time);
            if (message.server_bitrate != null && message.hasOwnProperty("server_bitrate"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.server_bitrate);
            if (message.client_bitrate != null && message.hasOwnProperty("client_bitrate"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.client_bitrate);
            if (message.link_bandwidth != null && message.hasOwnProperty("link_bandwidth"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.link_bandwidth);
            if (message.packet_loss != null && message.hasOwnProperty("packet_loss"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.packet_loss);
            if (message.frame_size != null && message.hasOwnProperty("frame_size"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.frame_size);
            return writer;
        };
    
        /**
         * Encodes the specified CFrameStats message, length delimited. Does not implicitly {@link CFrameStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CFrameStats
         * @static
         * @param {ICFrameStats} message CFrameStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CFrameStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CFrameStats message from the specified reader or buffer.
         * @function decode
         * @memberof CFrameStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CFrameStats} CFrameStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CFrameStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CFrameStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.frame_id = reader.uint32();
                    break;
                case 2:
                    message.input_mark = reader.uint32();
                    break;
                case 3:
                    if (!(message.events && message.events.length))
                        message.events = [];
                    message.events.push($root.CFrameEvent.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.result = reader.int32();
                    break;
                case 5:
                    message.frame_start_delta = reader.float();
                    break;
                case 6:
                    message.frame_display_delta = reader.float();
                    break;
                case 7:
                    message.ping_time = reader.float();
                    break;
                case 8:
                    message.server_bitrate = reader.float();
                    break;
                case 9:
                    message.client_bitrate = reader.float();
                    break;
                case 10:
                    message.link_bandwidth = reader.float();
                    break;
                case 11:
                    message.packet_loss = reader.float();
                    break;
                case 12:
                    message.frame_size = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("frame_id"))
                throw $util.ProtocolError("missing required 'frame_id'", { instance: message });
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CFrameStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CFrameStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CFrameStats} CFrameStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CFrameStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CFrameStats message.
         * @function verify
         * @memberof CFrameStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CFrameStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.frame_id))
                return "frame_id: integer expected";
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                if (!$util.isInteger(message.input_mark))
                    return "input_mark: integer expected";
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.CFrameEvent.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            switch (message.result) {
            default:
                return "result: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
            if (message.frame_start_delta != null && message.hasOwnProperty("frame_start_delta"))
                if (typeof message.frame_start_delta !== "number")
                    return "frame_start_delta: number expected";
            if (message.frame_display_delta != null && message.hasOwnProperty("frame_display_delta"))
                if (typeof message.frame_display_delta !== "number")
                    return "frame_display_delta: number expected";
            if (message.ping_time != null && message.hasOwnProperty("ping_time"))
                if (typeof message.ping_time !== "number")
                    return "ping_time: number expected";
            if (message.server_bitrate != null && message.hasOwnProperty("server_bitrate"))
                if (typeof message.server_bitrate !== "number")
                    return "server_bitrate: number expected";
            if (message.client_bitrate != null && message.hasOwnProperty("client_bitrate"))
                if (typeof message.client_bitrate !== "number")
                    return "client_bitrate: number expected";
            if (message.link_bandwidth != null && message.hasOwnProperty("link_bandwidth"))
                if (typeof message.link_bandwidth !== "number")
                    return "link_bandwidth: number expected";
            if (message.packet_loss != null && message.hasOwnProperty("packet_loss"))
                if (typeof message.packet_loss !== "number")
                    return "packet_loss: number expected";
            if (message.frame_size != null && message.hasOwnProperty("frame_size"))
                if (!$util.isInteger(message.frame_size))
                    return "frame_size: integer expected";
            return null;
        };
    
        /**
         * Creates a CFrameStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CFrameStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CFrameStats} CFrameStats
         */
        CFrameStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CFrameStats)
                return object;
            var message = new $root.CFrameStats();
            if (object.frame_id != null)
                message.frame_id = object.frame_id >>> 0;
            if (object.input_mark != null)
                message.input_mark = object.input_mark >>> 0;
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".CFrameStats.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".CFrameStats.events: object expected");
                    message.events[i] = $root.CFrameEvent.fromObject(object.events[i]);
                }
            }
            switch (object.result) {
            case "k_EStreamFrameResultPending":
            case 0:
                message.result = 0;
                break;
            case "k_EStreamFrameResultDisplayed":
            case 1:
                message.result = 1;
                break;
            case "k_EStreamFrameResultDroppedNetworkSlow":
            case 2:
                message.result = 2;
                break;
            case "k_EStreamFrameResultDroppedNetworkLost":
            case 3:
                message.result = 3;
                break;
            case "k_EStreamFrameResultDroppedDecodeSlow":
            case 4:
                message.result = 4;
                break;
            case "k_EStreamFrameResultDroppedDecodeCorrupt":
            case 5:
                message.result = 5;
                break;
            case "k_EStreamFrameResultDroppedLate":
            case 6:
                message.result = 6;
                break;
            case "k_EStreamFrameResultDroppedReset":
            case 7:
                message.result = 7;
                break;
            }
            if (object.frame_start_delta != null)
                message.frame_start_delta = Number(object.frame_start_delta);
            if (object.frame_display_delta != null)
                message.frame_display_delta = Number(object.frame_display_delta);
            if (object.ping_time != null)
                message.ping_time = Number(object.ping_time);
            if (object.server_bitrate != null)
                message.server_bitrate = Number(object.server_bitrate);
            if (object.client_bitrate != null)
                message.client_bitrate = Number(object.client_bitrate);
            if (object.link_bandwidth != null)
                message.link_bandwidth = Number(object.link_bandwidth);
            if (object.packet_loss != null)
                message.packet_loss = Number(object.packet_loss);
            if (object.frame_size != null)
                message.frame_size = object.frame_size >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CFrameStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CFrameStats
         * @static
         * @param {CFrameStats} message CFrameStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CFrameStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (options.defaults) {
                object.frame_id = 0;
                object.input_mark = 0;
                object.result = options.enums === String ? "k_EStreamFrameResultPending" : 0;
                object.frame_start_delta = 0;
                object.frame_display_delta = 0;
                object.ping_time = 0;
                object.server_bitrate = 0;
                object.client_bitrate = 0;
                object.link_bandwidth = 0;
                object.packet_loss = 0;
                object.frame_size = 0;
            }
            if (message.frame_id != null && message.hasOwnProperty("frame_id"))
                object.frame_id = message.frame_id;
            if (message.input_mark != null && message.hasOwnProperty("input_mark"))
                object.input_mark = message.input_mark;
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.CFrameEvent.toObject(message.events[j], options);
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.EStreamFrameResult[message.result] : message.result;
            if (message.frame_start_delta != null && message.hasOwnProperty("frame_start_delta"))
                object.frame_start_delta = options.json && !isFinite(message.frame_start_delta) ? String(message.frame_start_delta) : message.frame_start_delta;
            if (message.frame_display_delta != null && message.hasOwnProperty("frame_display_delta"))
                object.frame_display_delta = options.json && !isFinite(message.frame_display_delta) ? String(message.frame_display_delta) : message.frame_display_delta;
            if (message.ping_time != null && message.hasOwnProperty("ping_time"))
                object.ping_time = options.json && !isFinite(message.ping_time) ? String(message.ping_time) : message.ping_time;
            if (message.server_bitrate != null && message.hasOwnProperty("server_bitrate"))
                object.server_bitrate = options.json && !isFinite(message.server_bitrate) ? String(message.server_bitrate) : message.server_bitrate;
            if (message.client_bitrate != null && message.hasOwnProperty("client_bitrate"))
                object.client_bitrate = options.json && !isFinite(message.client_bitrate) ? String(message.client_bitrate) : message.client_bitrate;
            if (message.link_bandwidth != null && message.hasOwnProperty("link_bandwidth"))
                object.link_bandwidth = options.json && !isFinite(message.link_bandwidth) ? String(message.link_bandwidth) : message.link_bandwidth;
            if (message.packet_loss != null && message.hasOwnProperty("packet_loss"))
                object.packet_loss = options.json && !isFinite(message.packet_loss) ? String(message.packet_loss) : message.packet_loss;
            if (message.frame_size != null && message.hasOwnProperty("frame_size"))
                object.frame_size = message.frame_size;
            return object;
        };
    
        /**
         * Converts this CFrameStats to JSON.
         * @function toJSON
         * @memberof CFrameStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CFrameStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CFrameStats;
    })();
    
    $root.CFrameStatAccumulatedValue = (function() {
    
        /**
         * Properties of a CFrameStatAccumulatedValue.
         * @exports ICFrameStatAccumulatedValue
         * @interface ICFrameStatAccumulatedValue
         * @property {EFrameAccumulatedStat} stat_type CFrameStatAccumulatedValue stat_type
         * @property {number} count CFrameStatAccumulatedValue count
         * @property {number} average CFrameStatAccumulatedValue average
         * @property {number|null} [stddev] CFrameStatAccumulatedValue stddev
         */
    
        /**
         * Constructs a new CFrameStatAccumulatedValue.
         * @exports CFrameStatAccumulatedValue
         * @classdesc Represents a CFrameStatAccumulatedValue.
         * @implements ICFrameStatAccumulatedValue
         * @constructor
         * @param {ICFrameStatAccumulatedValue=} [properties] Properties to set
         */
        function CFrameStatAccumulatedValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CFrameStatAccumulatedValue stat_type.
         * @member {EFrameAccumulatedStat} stat_type
         * @memberof CFrameStatAccumulatedValue
         * @instance
         */
        CFrameStatAccumulatedValue.prototype.stat_type = 0;
    
        /**
         * CFrameStatAccumulatedValue count.
         * @member {number} count
         * @memberof CFrameStatAccumulatedValue
         * @instance
         */
        CFrameStatAccumulatedValue.prototype.count = 0;
    
        /**
         * CFrameStatAccumulatedValue average.
         * @member {number} average
         * @memberof CFrameStatAccumulatedValue
         * @instance
         */
        CFrameStatAccumulatedValue.prototype.average = 0;
    
        /**
         * CFrameStatAccumulatedValue stddev.
         * @member {number} stddev
         * @memberof CFrameStatAccumulatedValue
         * @instance
         */
        CFrameStatAccumulatedValue.prototype.stddev = 0;
    
        /**
         * Creates a new CFrameStatAccumulatedValue instance using the specified properties.
         * @function create
         * @memberof CFrameStatAccumulatedValue
         * @static
         * @param {ICFrameStatAccumulatedValue=} [properties] Properties to set
         * @returns {CFrameStatAccumulatedValue} CFrameStatAccumulatedValue instance
         */
        CFrameStatAccumulatedValue.create = function create(properties) {
            return new CFrameStatAccumulatedValue(properties);
        };
    
        /**
         * Encodes the specified CFrameStatAccumulatedValue message. Does not implicitly {@link CFrameStatAccumulatedValue.verify|verify} messages.
         * @function encode
         * @memberof CFrameStatAccumulatedValue
         * @static
         * @param {ICFrameStatAccumulatedValue} message CFrameStatAccumulatedValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CFrameStatAccumulatedValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stat_type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.average);
            if (message.stddev != null && message.hasOwnProperty("stddev"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.stddev);
            return writer;
        };
    
        /**
         * Encodes the specified CFrameStatAccumulatedValue message, length delimited. Does not implicitly {@link CFrameStatAccumulatedValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CFrameStatAccumulatedValue
         * @static
         * @param {ICFrameStatAccumulatedValue} message CFrameStatAccumulatedValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CFrameStatAccumulatedValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CFrameStatAccumulatedValue message from the specified reader or buffer.
         * @function decode
         * @memberof CFrameStatAccumulatedValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CFrameStatAccumulatedValue} CFrameStatAccumulatedValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CFrameStatAccumulatedValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CFrameStatAccumulatedValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stat_type = reader.int32();
                    break;
                case 2:
                    message.count = reader.int32();
                    break;
                case 3:
                    message.average = reader.float();
                    break;
                case 4:
                    message.stddev = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("stat_type"))
                throw $util.ProtocolError("missing required 'stat_type'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            if (!message.hasOwnProperty("average"))
                throw $util.ProtocolError("missing required 'average'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CFrameStatAccumulatedValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CFrameStatAccumulatedValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CFrameStatAccumulatedValue} CFrameStatAccumulatedValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CFrameStatAccumulatedValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CFrameStatAccumulatedValue message.
         * @function verify
         * @memberof CFrameStatAccumulatedValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CFrameStatAccumulatedValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.stat_type) {
            default:
                return "stat_type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                break;
            }
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            if (typeof message.average !== "number")
                return "average: number expected";
            if (message.stddev != null && message.hasOwnProperty("stddev"))
                if (typeof message.stddev !== "number")
                    return "stddev: number expected";
            return null;
        };
    
        /**
         * Creates a CFrameStatAccumulatedValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CFrameStatAccumulatedValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CFrameStatAccumulatedValue} CFrameStatAccumulatedValue
         */
        CFrameStatAccumulatedValue.fromObject = function fromObject(object) {
            if (object instanceof $root.CFrameStatAccumulatedValue)
                return object;
            var message = new $root.CFrameStatAccumulatedValue();
            switch (object.stat_type) {
            case "k_EFrameStatFPS":
            case 0:
                message.stat_type = 0;
                break;
            case "k_EFrameStatCaptureDurationMS":
            case 1:
                message.stat_type = 1;
                break;
            case "k_EFrameStatConvertDurationMS":
            case 2:
                message.stat_type = 2;
                break;
            case "k_EFrameStatEncodeDurationMS":
            case 3:
                message.stat_type = 3;
                break;
            case "k_EFrameStatSteamDurationMS":
            case 4:
                message.stat_type = 4;
                break;
            case "k_EFrameStatServerDurationMS":
            case 5:
                message.stat_type = 5;
                break;
            case "k_EFrameStatNetworkDurationMS":
            case 6:
                message.stat_type = 6;
                break;
            case "k_EFrameStatDecodeDurationMS":
            case 7:
                message.stat_type = 7;
                break;
            case "k_EFrameStatDisplayDurationMS":
            case 8:
                message.stat_type = 8;
                break;
            case "k_EFrameStatClientDurationMS":
            case 9:
                message.stat_type = 9;
                break;
            case "k_EFrameStatFrameDurationMS":
            case 10:
                message.stat_type = 10;
                break;
            case "k_EFrameStatInputLatencyMS":
            case 11:
                message.stat_type = 11;
                break;
            case "k_EFrameStatGameLatencyMS":
            case 12:
                message.stat_type = 12;
                break;
            case "k_EFrameStatRoundTripLatencyMS":
            case 13:
                message.stat_type = 13;
                break;
            case "k_EFrameStatPingTimeMS":
            case 14:
                message.stat_type = 14;
                break;
            case "k_EFrameStatServerBitrateKbitPerSec":
            case 15:
                message.stat_type = 15;
                break;
            case "k_EFrameStatClientBitrateKbitPerSec":
            case 16:
                message.stat_type = 16;
                break;
            case "k_EFrameStatLinkBandwidthKbitPerSec":
            case 17:
                message.stat_type = 17;
                break;
            case "k_EFrameStatPacketLossPercentage":
            case 18:
                message.stat_type = 18;
                break;
            }
            if (object.count != null)
                message.count = object.count | 0;
            if (object.average != null)
                message.average = Number(object.average);
            if (object.stddev != null)
                message.stddev = Number(object.stddev);
            return message;
        };
    
        /**
         * Creates a plain object from a CFrameStatAccumulatedValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CFrameStatAccumulatedValue
         * @static
         * @param {CFrameStatAccumulatedValue} message CFrameStatAccumulatedValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CFrameStatAccumulatedValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.stat_type = options.enums === String ? "k_EFrameStatFPS" : 0;
                object.count = 0;
                object.average = 0;
                object.stddev = 0;
            }
            if (message.stat_type != null && message.hasOwnProperty("stat_type"))
                object.stat_type = options.enums === String ? $root.EFrameAccumulatedStat[message.stat_type] : message.stat_type;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.average != null && message.hasOwnProperty("average"))
                object.average = options.json && !isFinite(message.average) ? String(message.average) : message.average;
            if (message.stddev != null && message.hasOwnProperty("stddev"))
                object.stddev = options.json && !isFinite(message.stddev) ? String(message.stddev) : message.stddev;
            return object;
        };
    
        /**
         * Converts this CFrameStatAccumulatedValue to JSON.
         * @function toJSON
         * @memberof CFrameStatAccumulatedValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CFrameStatAccumulatedValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CFrameStatAccumulatedValue;
    })();
    
    $root.CFrameStatsListMsg = (function() {
    
        /**
         * Properties of a CFrameStatsListMsg.
         * @exports ICFrameStatsListMsg
         * @interface ICFrameStatsListMsg
         * @property {EStreamingDataType} data_type CFrameStatsListMsg data_type
         * @property {Array.<ICFrameStats>|null} [stats] CFrameStatsListMsg stats
         * @property {Array.<ICFrameStatAccumulatedValue>|null} [accumulated_stats] CFrameStatsListMsg accumulated_stats
         * @property {number} latest_frame_id CFrameStatsListMsg latest_frame_id
         */
    
        /**
         * Constructs a new CFrameStatsListMsg.
         * @exports CFrameStatsListMsg
         * @classdesc Represents a CFrameStatsListMsg.
         * @implements ICFrameStatsListMsg
         * @constructor
         * @param {ICFrameStatsListMsg=} [properties] Properties to set
         */
        function CFrameStatsListMsg(properties) {
            this.stats = [];
            this.accumulated_stats = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CFrameStatsListMsg data_type.
         * @member {EStreamingDataType} data_type
         * @memberof CFrameStatsListMsg
         * @instance
         */
        CFrameStatsListMsg.prototype.data_type = 0;
    
        /**
         * CFrameStatsListMsg stats.
         * @member {Array.<ICFrameStats>} stats
         * @memberof CFrameStatsListMsg
         * @instance
         */
        CFrameStatsListMsg.prototype.stats = $util.emptyArray;
    
        /**
         * CFrameStatsListMsg accumulated_stats.
         * @member {Array.<ICFrameStatAccumulatedValue>} accumulated_stats
         * @memberof CFrameStatsListMsg
         * @instance
         */
        CFrameStatsListMsg.prototype.accumulated_stats = $util.emptyArray;
    
        /**
         * CFrameStatsListMsg latest_frame_id.
         * @member {number} latest_frame_id
         * @memberof CFrameStatsListMsg
         * @instance
         */
        CFrameStatsListMsg.prototype.latest_frame_id = 0;
    
        /**
         * Creates a new CFrameStatsListMsg instance using the specified properties.
         * @function create
         * @memberof CFrameStatsListMsg
         * @static
         * @param {ICFrameStatsListMsg=} [properties] Properties to set
         * @returns {CFrameStatsListMsg} CFrameStatsListMsg instance
         */
        CFrameStatsListMsg.create = function create(properties) {
            return new CFrameStatsListMsg(properties);
        };
    
        /**
         * Encodes the specified CFrameStatsListMsg message. Does not implicitly {@link CFrameStatsListMsg.verify|verify} messages.
         * @function encode
         * @memberof CFrameStatsListMsg
         * @static
         * @param {ICFrameStatsListMsg} message CFrameStatsListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CFrameStatsListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.data_type);
            if (message.stats != null && message.stats.length)
                for (var i = 0; i < message.stats.length; ++i)
                    $root.CFrameStats.encode(message.stats[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.accumulated_stats != null && message.accumulated_stats.length)
                for (var i = 0; i < message.accumulated_stats.length; ++i)
                    $root.CFrameStatAccumulatedValue.encode(message.accumulated_stats[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.latest_frame_id);
            return writer;
        };
    
        /**
         * Encodes the specified CFrameStatsListMsg message, length delimited. Does not implicitly {@link CFrameStatsListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CFrameStatsListMsg
         * @static
         * @param {ICFrameStatsListMsg} message CFrameStatsListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CFrameStatsListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CFrameStatsListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CFrameStatsListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CFrameStatsListMsg} CFrameStatsListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CFrameStatsListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CFrameStatsListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data_type = reader.int32();
                    break;
                case 2:
                    if (!(message.stats && message.stats.length))
                        message.stats = [];
                    message.stats.push($root.CFrameStats.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.accumulated_stats && message.accumulated_stats.length))
                        message.accumulated_stats = [];
                    message.accumulated_stats.push($root.CFrameStatAccumulatedValue.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.latest_frame_id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("data_type"))
                throw $util.ProtocolError("missing required 'data_type'", { instance: message });
            if (!message.hasOwnProperty("latest_frame_id"))
                throw $util.ProtocolError("missing required 'latest_frame_id'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CFrameStatsListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CFrameStatsListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CFrameStatsListMsg} CFrameStatsListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CFrameStatsListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CFrameStatsListMsg message.
         * @function verify
         * @memberof CFrameStatsListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CFrameStatsListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.data_type) {
            default:
                return "data_type: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.stats != null && message.hasOwnProperty("stats")) {
                if (!Array.isArray(message.stats))
                    return "stats: array expected";
                for (var i = 0; i < message.stats.length; ++i) {
                    var error = $root.CFrameStats.verify(message.stats[i]);
                    if (error)
                        return "stats." + error;
                }
            }
            if (message.accumulated_stats != null && message.hasOwnProperty("accumulated_stats")) {
                if (!Array.isArray(message.accumulated_stats))
                    return "accumulated_stats: array expected";
                for (var i = 0; i < message.accumulated_stats.length; ++i) {
                    var error = $root.CFrameStatAccumulatedValue.verify(message.accumulated_stats[i]);
                    if (error)
                        return "accumulated_stats." + error;
                }
            }
            if (!$util.isInteger(message.latest_frame_id))
                return "latest_frame_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CFrameStatsListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CFrameStatsListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CFrameStatsListMsg} CFrameStatsListMsg
         */
        CFrameStatsListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CFrameStatsListMsg)
                return object;
            var message = new $root.CFrameStatsListMsg();
            switch (object.data_type) {
            case "k_EStreamingAudioData":
            case 0:
                message.data_type = 0;
                break;
            case "k_EStreamingVideoData":
            case 1:
                message.data_type = 1;
                break;
            case "k_EStreamingMicrophoneData":
            case 2:
                message.data_type = 2;
                break;
            }
            if (object.stats) {
                if (!Array.isArray(object.stats))
                    throw TypeError(".CFrameStatsListMsg.stats: array expected");
                message.stats = [];
                for (var i = 0; i < object.stats.length; ++i) {
                    if (typeof object.stats[i] !== "object")
                        throw TypeError(".CFrameStatsListMsg.stats: object expected");
                    message.stats[i] = $root.CFrameStats.fromObject(object.stats[i]);
                }
            }
            if (object.accumulated_stats) {
                if (!Array.isArray(object.accumulated_stats))
                    throw TypeError(".CFrameStatsListMsg.accumulated_stats: array expected");
                message.accumulated_stats = [];
                for (var i = 0; i < object.accumulated_stats.length; ++i) {
                    if (typeof object.accumulated_stats[i] !== "object")
                        throw TypeError(".CFrameStatsListMsg.accumulated_stats: object expected");
                    message.accumulated_stats[i] = $root.CFrameStatAccumulatedValue.fromObject(object.accumulated_stats[i]);
                }
            }
            if (object.latest_frame_id != null)
                message.latest_frame_id = object.latest_frame_id | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CFrameStatsListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CFrameStatsListMsg
         * @static
         * @param {CFrameStatsListMsg} message CFrameStatsListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CFrameStatsListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.stats = [];
                object.accumulated_stats = [];
            }
            if (options.defaults) {
                object.data_type = options.enums === String ? "k_EStreamingAudioData" : 0;
                object.latest_frame_id = 0;
            }
            if (message.data_type != null && message.hasOwnProperty("data_type"))
                object.data_type = options.enums === String ? $root.EStreamingDataType[message.data_type] : message.data_type;
            if (message.stats && message.stats.length) {
                object.stats = [];
                for (var j = 0; j < message.stats.length; ++j)
                    object.stats[j] = $root.CFrameStats.toObject(message.stats[j], options);
            }
            if (message.accumulated_stats && message.accumulated_stats.length) {
                object.accumulated_stats = [];
                for (var j = 0; j < message.accumulated_stats.length; ++j)
                    object.accumulated_stats[j] = $root.CFrameStatAccumulatedValue.toObject(message.accumulated_stats[j], options);
            }
            if (message.latest_frame_id != null && message.hasOwnProperty("latest_frame_id"))
                object.latest_frame_id = message.latest_frame_id;
            return object;
        };
    
        /**
         * Converts this CFrameStatsListMsg to JSON.
         * @function toJSON
         * @memberof CFrameStatsListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CFrameStatsListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CFrameStatsListMsg;
    })();
    
    $root.CStreamingSessionStats = (function() {
    
        /**
         * Properties of a CStreamingSessionStats.
         * @exports ICStreamingSessionStats
         * @interface ICStreamingSessionStats
         * @property {number|null} [frame_loss_percentage] CStreamingSessionStats frame_loss_percentage
         * @property {number|null} [average_network_time_ms] CStreamingSessionStats average_network_time_ms
         * @property {number|null} [stddev_network_time_ms] CStreamingSessionStats stddev_network_time_ms
         */
    
        /**
         * Constructs a new CStreamingSessionStats.
         * @exports CStreamingSessionStats
         * @classdesc Represents a CStreamingSessionStats.
         * @implements ICStreamingSessionStats
         * @constructor
         * @param {ICStreamingSessionStats=} [properties] Properties to set
         */
        function CStreamingSessionStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CStreamingSessionStats frame_loss_percentage.
         * @member {number} frame_loss_percentage
         * @memberof CStreamingSessionStats
         * @instance
         */
        CStreamingSessionStats.prototype.frame_loss_percentage = 0;
    
        /**
         * CStreamingSessionStats average_network_time_ms.
         * @member {number} average_network_time_ms
         * @memberof CStreamingSessionStats
         * @instance
         */
        CStreamingSessionStats.prototype.average_network_time_ms = 0;
    
        /**
         * CStreamingSessionStats stddev_network_time_ms.
         * @member {number} stddev_network_time_ms
         * @memberof CStreamingSessionStats
         * @instance
         */
        CStreamingSessionStats.prototype.stddev_network_time_ms = 0;
    
        /**
         * Creates a new CStreamingSessionStats instance using the specified properties.
         * @function create
         * @memberof CStreamingSessionStats
         * @static
         * @param {ICStreamingSessionStats=} [properties] Properties to set
         * @returns {CStreamingSessionStats} CStreamingSessionStats instance
         */
        CStreamingSessionStats.create = function create(properties) {
            return new CStreamingSessionStats(properties);
        };
    
        /**
         * Encodes the specified CStreamingSessionStats message. Does not implicitly {@link CStreamingSessionStats.verify|verify} messages.
         * @function encode
         * @memberof CStreamingSessionStats
         * @static
         * @param {ICStreamingSessionStats} message CStreamingSessionStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingSessionStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frame_loss_percentage != null && message.hasOwnProperty("frame_loss_percentage"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.frame_loss_percentage);
            if (message.average_network_time_ms != null && message.hasOwnProperty("average_network_time_ms"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.average_network_time_ms);
            if (message.stddev_network_time_ms != null && message.hasOwnProperty("stddev_network_time_ms"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.stddev_network_time_ms);
            return writer;
        };
    
        /**
         * Encodes the specified CStreamingSessionStats message, length delimited. Does not implicitly {@link CStreamingSessionStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CStreamingSessionStats
         * @static
         * @param {ICStreamingSessionStats} message CStreamingSessionStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CStreamingSessionStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CStreamingSessionStats message from the specified reader or buffer.
         * @function decode
         * @memberof CStreamingSessionStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CStreamingSessionStats} CStreamingSessionStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingSessionStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CStreamingSessionStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.frame_loss_percentage = reader.float();
                    break;
                case 2:
                    message.average_network_time_ms = reader.float();
                    break;
                case 3:
                    message.stddev_network_time_ms = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CStreamingSessionStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CStreamingSessionStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CStreamingSessionStats} CStreamingSessionStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CStreamingSessionStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CStreamingSessionStats message.
         * @function verify
         * @memberof CStreamingSessionStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CStreamingSessionStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frame_loss_percentage != null && message.hasOwnProperty("frame_loss_percentage"))
                if (typeof message.frame_loss_percentage !== "number")
                    return "frame_loss_percentage: number expected";
            if (message.average_network_time_ms != null && message.hasOwnProperty("average_network_time_ms"))
                if (typeof message.average_network_time_ms !== "number")
                    return "average_network_time_ms: number expected";
            if (message.stddev_network_time_ms != null && message.hasOwnProperty("stddev_network_time_ms"))
                if (typeof message.stddev_network_time_ms !== "number")
                    return "stddev_network_time_ms: number expected";
            return null;
        };
    
        /**
         * Creates a CStreamingSessionStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CStreamingSessionStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CStreamingSessionStats} CStreamingSessionStats
         */
        CStreamingSessionStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CStreamingSessionStats)
                return object;
            var message = new $root.CStreamingSessionStats();
            if (object.frame_loss_percentage != null)
                message.frame_loss_percentage = Number(object.frame_loss_percentage);
            if (object.average_network_time_ms != null)
                message.average_network_time_ms = Number(object.average_network_time_ms);
            if (object.stddev_network_time_ms != null)
                message.stddev_network_time_ms = Number(object.stddev_network_time_ms);
            return message;
        };
    
        /**
         * Creates a plain object from a CStreamingSessionStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CStreamingSessionStats
         * @static
         * @param {CStreamingSessionStats} message CStreamingSessionStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CStreamingSessionStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.frame_loss_percentage = 0;
                object.average_network_time_ms = 0;
                object.stddev_network_time_ms = 0;
            }
            if (message.frame_loss_percentage != null && message.hasOwnProperty("frame_loss_percentage"))
                object.frame_loss_percentage = options.json && !isFinite(message.frame_loss_percentage) ? String(message.frame_loss_percentage) : message.frame_loss_percentage;
            if (message.average_network_time_ms != null && message.hasOwnProperty("average_network_time_ms"))
                object.average_network_time_ms = options.json && !isFinite(message.average_network_time_ms) ? String(message.average_network_time_ms) : message.average_network_time_ms;
            if (message.stddev_network_time_ms != null && message.hasOwnProperty("stddev_network_time_ms"))
                object.stddev_network_time_ms = options.json && !isFinite(message.stddev_network_time_ms) ? String(message.stddev_network_time_ms) : message.stddev_network_time_ms;
            return object;
        };
    
        /**
         * Converts this CStreamingSessionStats to JSON.
         * @function toJSON
         * @memberof CStreamingSessionStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CStreamingSessionStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CStreamingSessionStats;
    })();
    
    $root.CDebugDumpMsg = (function() {
    
        /**
         * Properties of a CDebugDumpMsg.
         * @exports ICDebugDumpMsg
         * @interface ICDebugDumpMsg
         * @property {Uint8Array|null} [screenshot] CDebugDumpMsg screenshot
         */
    
        /**
         * Constructs a new CDebugDumpMsg.
         * @exports CDebugDumpMsg
         * @classdesc Represents a CDebugDumpMsg.
         * @implements ICDebugDumpMsg
         * @constructor
         * @param {ICDebugDumpMsg=} [properties] Properties to set
         */
        function CDebugDumpMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CDebugDumpMsg screenshot.
         * @member {Uint8Array} screenshot
         * @memberof CDebugDumpMsg
         * @instance
         */
        CDebugDumpMsg.prototype.screenshot = $util.newBuffer([]);
    
        /**
         * Creates a new CDebugDumpMsg instance using the specified properties.
         * @function create
         * @memberof CDebugDumpMsg
         * @static
         * @param {ICDebugDumpMsg=} [properties] Properties to set
         * @returns {CDebugDumpMsg} CDebugDumpMsg instance
         */
        CDebugDumpMsg.create = function create(properties) {
            return new CDebugDumpMsg(properties);
        };
    
        /**
         * Encodes the specified CDebugDumpMsg message. Does not implicitly {@link CDebugDumpMsg.verify|verify} messages.
         * @function encode
         * @memberof CDebugDumpMsg
         * @static
         * @param {ICDebugDumpMsg} message CDebugDumpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDebugDumpMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.screenshot != null && message.hasOwnProperty("screenshot"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.screenshot);
            return writer;
        };
    
        /**
         * Encodes the specified CDebugDumpMsg message, length delimited. Does not implicitly {@link CDebugDumpMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CDebugDumpMsg
         * @static
         * @param {ICDebugDumpMsg} message CDebugDumpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CDebugDumpMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CDebugDumpMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CDebugDumpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CDebugDumpMsg} CDebugDumpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDebugDumpMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CDebugDumpMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.screenshot = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CDebugDumpMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CDebugDumpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CDebugDumpMsg} CDebugDumpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CDebugDumpMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CDebugDumpMsg message.
         * @function verify
         * @memberof CDebugDumpMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CDebugDumpMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.screenshot != null && message.hasOwnProperty("screenshot"))
                if (!(message.screenshot && typeof message.screenshot.length === "number" || $util.isString(message.screenshot)))
                    return "screenshot: buffer expected";
            return null;
        };
    
        /**
         * Creates a CDebugDumpMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CDebugDumpMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CDebugDumpMsg} CDebugDumpMsg
         */
        CDebugDumpMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CDebugDumpMsg)
                return object;
            var message = new $root.CDebugDumpMsg();
            if (object.screenshot != null)
                if (typeof object.screenshot === "string")
                    $util.base64.decode(object.screenshot, message.screenshot = $util.newBuffer($util.base64.length(object.screenshot)), 0);
                else if (object.screenshot.length)
                    message.screenshot = object.screenshot;
            return message;
        };
    
        /**
         * Creates a plain object from a CDebugDumpMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CDebugDumpMsg
         * @static
         * @param {CDebugDumpMsg} message CDebugDumpMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CDebugDumpMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.screenshot = "";
                else {
                    object.screenshot = [];
                    if (options.bytes !== Array)
                        object.screenshot = $util.newBuffer(object.screenshot);
                }
            if (message.screenshot != null && message.hasOwnProperty("screenshot"))
                object.screenshot = options.bytes === String ? $util.base64.encode(message.screenshot, 0, message.screenshot.length) : options.bytes === Array ? Array.prototype.slice.call(message.screenshot) : message.screenshot;
            return object;
        };
    
        /**
         * Converts this CDebugDumpMsg to JSON.
         * @function toJSON
         * @memberof CDebugDumpMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CDebugDumpMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CDebugDumpMsg;
    })();
    
    $root.CLogMsg = (function() {
    
        /**
         * Properties of a CLogMsg.
         * @exports ICLogMsg
         * @interface ICLogMsg
         * @property {number|null} [type] CLogMsg type
         * @property {string|null} [message] CLogMsg message
         */
    
        /**
         * Constructs a new CLogMsg.
         * @exports CLogMsg
         * @classdesc Represents a CLogMsg.
         * @implements ICLogMsg
         * @constructor
         * @param {ICLogMsg=} [properties] Properties to set
         */
        function CLogMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CLogMsg type.
         * @member {number} type
         * @memberof CLogMsg
         * @instance
         */
        CLogMsg.prototype.type = 0;
    
        /**
         * CLogMsg message.
         * @member {string} message
         * @memberof CLogMsg
         * @instance
         */
        CLogMsg.prototype.message = "";
    
        /**
         * Creates a new CLogMsg instance using the specified properties.
         * @function create
         * @memberof CLogMsg
         * @static
         * @param {ICLogMsg=} [properties] Properties to set
         * @returns {CLogMsg} CLogMsg instance
         */
        CLogMsg.create = function create(properties) {
            return new CLogMsg(properties);
        };
    
        /**
         * Encodes the specified CLogMsg message. Does not implicitly {@link CLogMsg.verify|verify} messages.
         * @function encode
         * @memberof CLogMsg
         * @static
         * @param {ICLogMsg} message CLogMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified CLogMsg message, length delimited. Does not implicitly {@link CLogMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLogMsg
         * @static
         * @param {ICLogMsg} message CLogMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CLogMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CLogMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLogMsg} CLogMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLogMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CLogMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLogMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLogMsg} CLogMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CLogMsg message.
         * @function verify
         * @memberof CLogMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CLogMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a CLogMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLogMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLogMsg} CLogMsg
         */
        CLogMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CLogMsg)
                return object;
            var message = new $root.CLogMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a CLogMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLogMsg
         * @static
         * @param {CLogMsg} message CLogMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CLogMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.message = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this CLogMsg to JSON.
         * @function toJSON
         * @memberof CLogMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CLogMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CLogMsg;
    })();
    
    $root.CLogUploadMsg = (function() {
    
        /**
         * Properties of a CLogUploadMsg.
         * @exports ICLogUploadMsg
         * @interface ICLogUploadMsg
         * @property {ELogFileType|null} [type] CLogUploadMsg type
         * @property {Uint8Array|null} [data] CLogUploadMsg data
         */
    
        /**
         * Constructs a new CLogUploadMsg.
         * @exports CLogUploadMsg
         * @classdesc Represents a CLogUploadMsg.
         * @implements ICLogUploadMsg
         * @constructor
         * @param {ICLogUploadMsg=} [properties] Properties to set
         */
        function CLogUploadMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CLogUploadMsg type.
         * @member {ELogFileType} type
         * @memberof CLogUploadMsg
         * @instance
         */
        CLogUploadMsg.prototype.type = 0;
    
        /**
         * CLogUploadMsg data.
         * @member {Uint8Array} data
         * @memberof CLogUploadMsg
         * @instance
         */
        CLogUploadMsg.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new CLogUploadMsg instance using the specified properties.
         * @function create
         * @memberof CLogUploadMsg
         * @static
         * @param {ICLogUploadMsg=} [properties] Properties to set
         * @returns {CLogUploadMsg} CLogUploadMsg instance
         */
        CLogUploadMsg.create = function create(properties) {
            return new CLogUploadMsg(properties);
        };
    
        /**
         * Encodes the specified CLogUploadMsg message. Does not implicitly {@link CLogUploadMsg.verify|verify} messages.
         * @function encode
         * @memberof CLogUploadMsg
         * @static
         * @param {ICLogUploadMsg} message CLogUploadMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogUploadMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified CLogUploadMsg message, length delimited. Does not implicitly {@link CLogUploadMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLogUploadMsg
         * @static
         * @param {ICLogUploadMsg} message CLogUploadMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLogUploadMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CLogUploadMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CLogUploadMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLogUploadMsg} CLogUploadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogUploadMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLogUploadMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CLogUploadMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLogUploadMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLogUploadMsg} CLogUploadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLogUploadMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CLogUploadMsg message.
         * @function verify
         * @memberof CLogUploadMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CLogUploadMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a CLogUploadMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLogUploadMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLogUploadMsg} CLogUploadMsg
         */
        CLogUploadMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CLogUploadMsg)
                return object;
            var message = new $root.CLogUploadMsg();
            switch (object.type) {
            case "k_ELogFileSystemBoot":
            case 0:
                message.type = 0;
                break;
            case "k_ELogFileSystemReset":
            case 1:
                message.type = 1;
                break;
            case "k_ELogFileSystemDebug":
            case 2:
                message.type = 2;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a CLogUploadMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLogUploadMsg
         * @static
         * @param {CLogUploadMsg} message CLogUploadMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CLogUploadMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "k_ELogFileSystemBoot" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.ELogFileType[message.type] : message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this CLogUploadMsg to JSON.
         * @function toJSON
         * @memberof CLogUploadMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CLogUploadMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CLogUploadMsg;
    })();
    
    $root.CTransportSignalMsg = (function() {
    
        /**
         * Properties of a CTransportSignalMsg.
         * @exports ICTransportSignalMsg
         * @interface ICTransportSignalMsg
         * @property {CTransportSignalMsg.IWebRTCMessage|null} [webrtc] CTransportSignalMsg webrtc
         */
    
        /**
         * Constructs a new CTransportSignalMsg.
         * @exports CTransportSignalMsg
         * @classdesc Represents a CTransportSignalMsg.
         * @implements ICTransportSignalMsg
         * @constructor
         * @param {ICTransportSignalMsg=} [properties] Properties to set
         */
        function CTransportSignalMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CTransportSignalMsg webrtc.
         * @member {CTransportSignalMsg.IWebRTCMessage|null|undefined} webrtc
         * @memberof CTransportSignalMsg
         * @instance
         */
        CTransportSignalMsg.prototype.webrtc = null;
    
        /**
         * Creates a new CTransportSignalMsg instance using the specified properties.
         * @function create
         * @memberof CTransportSignalMsg
         * @static
         * @param {ICTransportSignalMsg=} [properties] Properties to set
         * @returns {CTransportSignalMsg} CTransportSignalMsg instance
         */
        CTransportSignalMsg.create = function create(properties) {
            return new CTransportSignalMsg(properties);
        };
    
        /**
         * Encodes the specified CTransportSignalMsg message. Does not implicitly {@link CTransportSignalMsg.verify|verify} messages.
         * @function encode
         * @memberof CTransportSignalMsg
         * @static
         * @param {ICTransportSignalMsg} message CTransportSignalMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CTransportSignalMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.webrtc != null && message.hasOwnProperty("webrtc"))
                $root.CTransportSignalMsg.WebRTCMessage.encode(message.webrtc, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CTransportSignalMsg message, length delimited. Does not implicitly {@link CTransportSignalMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CTransportSignalMsg
         * @static
         * @param {ICTransportSignalMsg} message CTransportSignalMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CTransportSignalMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CTransportSignalMsg message from the specified reader or buffer.
         * @function decode
         * @memberof CTransportSignalMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CTransportSignalMsg} CTransportSignalMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CTransportSignalMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTransportSignalMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.webrtc = $root.CTransportSignalMsg.WebRTCMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CTransportSignalMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CTransportSignalMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CTransportSignalMsg} CTransportSignalMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CTransportSignalMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CTransportSignalMsg message.
         * @function verify
         * @memberof CTransportSignalMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CTransportSignalMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.webrtc != null && message.hasOwnProperty("webrtc")) {
                var error = $root.CTransportSignalMsg.WebRTCMessage.verify(message.webrtc);
                if (error)
                    return "webrtc." + error;
            }
            return null;
        };
    
        /**
         * Creates a CTransportSignalMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CTransportSignalMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CTransportSignalMsg} CTransportSignalMsg
         */
        CTransportSignalMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.CTransportSignalMsg)
                return object;
            var message = new $root.CTransportSignalMsg();
            if (object.webrtc != null) {
                if (typeof object.webrtc !== "object")
                    throw TypeError(".CTransportSignalMsg.webrtc: object expected");
                message.webrtc = $root.CTransportSignalMsg.WebRTCMessage.fromObject(object.webrtc);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CTransportSignalMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CTransportSignalMsg
         * @static
         * @param {CTransportSignalMsg} message CTransportSignalMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CTransportSignalMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.webrtc = null;
            if (message.webrtc != null && message.hasOwnProperty("webrtc"))
                object.webrtc = $root.CTransportSignalMsg.WebRTCMessage.toObject(message.webrtc, options);
            return object;
        };
    
        /**
         * Converts this CTransportSignalMsg to JSON.
         * @function toJSON
         * @memberof CTransportSignalMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CTransportSignalMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CTransportSignalMsg.WebRTCMessage = (function() {
    
            /**
             * Properties of a WebRTCMessage.
             * @memberof CTransportSignalMsg
             * @interface IWebRTCMessage
             * @property {boolean|null} [greeting] WebRTCMessage greeting
             * @property {string|null} [offer] WebRTCMessage offer
             * @property {string|null} [answer] WebRTCMessage answer
             * @property {CTransportSignalMsg.WebRTCMessage.ICandidate|null} [candidate] WebRTCMessage candidate
             */
    
            /**
             * Constructs a new WebRTCMessage.
             * @memberof CTransportSignalMsg
             * @classdesc Represents a WebRTCMessage.
             * @implements IWebRTCMessage
             * @constructor
             * @param {CTransportSignalMsg.IWebRTCMessage=} [properties] Properties to set
             */
            function WebRTCMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * WebRTCMessage greeting.
             * @member {boolean} greeting
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @instance
             */
            WebRTCMessage.prototype.greeting = false;
    
            /**
             * WebRTCMessage offer.
             * @member {string} offer
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @instance
             */
            WebRTCMessage.prototype.offer = "";
    
            /**
             * WebRTCMessage answer.
             * @member {string} answer
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @instance
             */
            WebRTCMessage.prototype.answer = "";
    
            /**
             * WebRTCMessage candidate.
             * @member {CTransportSignalMsg.WebRTCMessage.ICandidate|null|undefined} candidate
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @instance
             */
            WebRTCMessage.prototype.candidate = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * WebRTCMessage msg.
             * @member {"greeting"|"offer"|"answer"|"candidate"|undefined} msg
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @instance
             */
            Object.defineProperty(WebRTCMessage.prototype, "msg", {
                get: $util.oneOfGetter($oneOfFields = ["greeting", "offer", "answer", "candidate"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new WebRTCMessage instance using the specified properties.
             * @function create
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @static
             * @param {CTransportSignalMsg.IWebRTCMessage=} [properties] Properties to set
             * @returns {CTransportSignalMsg.WebRTCMessage} WebRTCMessage instance
             */
            WebRTCMessage.create = function create(properties) {
                return new WebRTCMessage(properties);
            };
    
            /**
             * Encodes the specified WebRTCMessage message. Does not implicitly {@link CTransportSignalMsg.WebRTCMessage.verify|verify} messages.
             * @function encode
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @static
             * @param {CTransportSignalMsg.IWebRTCMessage} message WebRTCMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebRTCMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.greeting != null && message.hasOwnProperty("greeting"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.greeting);
                if (message.offer != null && message.hasOwnProperty("offer"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.offer);
                if (message.answer != null && message.hasOwnProperty("answer"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.answer);
                if (message.candidate != null && message.hasOwnProperty("candidate"))
                    $root.CTransportSignalMsg.WebRTCMessage.Candidate.encode(message.candidate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified WebRTCMessage message, length delimited. Does not implicitly {@link CTransportSignalMsg.WebRTCMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @static
             * @param {CTransportSignalMsg.IWebRTCMessage} message WebRTCMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebRTCMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a WebRTCMessage message from the specified reader or buffer.
             * @function decode
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CTransportSignalMsg.WebRTCMessage} WebRTCMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebRTCMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTransportSignalMsg.WebRTCMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.greeting = reader.bool();
                        break;
                    case 2:
                        message.offer = reader.string();
                        break;
                    case 3:
                        message.answer = reader.string();
                        break;
                    case 4:
                        message.candidate = $root.CTransportSignalMsg.WebRTCMessage.Candidate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a WebRTCMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CTransportSignalMsg.WebRTCMessage} WebRTCMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebRTCMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a WebRTCMessage message.
             * @function verify
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebRTCMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.greeting != null && message.hasOwnProperty("greeting")) {
                    properties.msg = 1;
                    if (typeof message.greeting !== "boolean")
                        return "greeting: boolean expected";
                }
                if (message.offer != null && message.hasOwnProperty("offer")) {
                    if (properties.msg === 1)
                        return "msg: multiple values";
                    properties.msg = 1;
                    if (!$util.isString(message.offer))
                        return "offer: string expected";
                }
                if (message.answer != null && message.hasOwnProperty("answer")) {
                    if (properties.msg === 1)
                        return "msg: multiple values";
                    properties.msg = 1;
                    if (!$util.isString(message.answer))
                        return "answer: string expected";
                }
                if (message.candidate != null && message.hasOwnProperty("candidate")) {
                    if (properties.msg === 1)
                        return "msg: multiple values";
                    properties.msg = 1;
                    {
                        var error = $root.CTransportSignalMsg.WebRTCMessage.Candidate.verify(message.candidate);
                        if (error)
                            return "candidate." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a WebRTCMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CTransportSignalMsg.WebRTCMessage} WebRTCMessage
             */
            WebRTCMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.CTransportSignalMsg.WebRTCMessage)
                    return object;
                var message = new $root.CTransportSignalMsg.WebRTCMessage();
                if (object.greeting != null)
                    message.greeting = Boolean(object.greeting);
                if (object.offer != null)
                    message.offer = String(object.offer);
                if (object.answer != null)
                    message.answer = String(object.answer);
                if (object.candidate != null) {
                    if (typeof object.candidate !== "object")
                        throw TypeError(".CTransportSignalMsg.WebRTCMessage.candidate: object expected");
                    message.candidate = $root.CTransportSignalMsg.WebRTCMessage.Candidate.fromObject(object.candidate);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a WebRTCMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @static
             * @param {CTransportSignalMsg.WebRTCMessage} message WebRTCMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebRTCMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.greeting != null && message.hasOwnProperty("greeting")) {
                    object.greeting = message.greeting;
                    if (options.oneofs)
                        object.msg = "greeting";
                }
                if (message.offer != null && message.hasOwnProperty("offer")) {
                    object.offer = message.offer;
                    if (options.oneofs)
                        object.msg = "offer";
                }
                if (message.answer != null && message.hasOwnProperty("answer")) {
                    object.answer = message.answer;
                    if (options.oneofs)
                        object.msg = "answer";
                }
                if (message.candidate != null && message.hasOwnProperty("candidate")) {
                    object.candidate = $root.CTransportSignalMsg.WebRTCMessage.Candidate.toObject(message.candidate, options);
                    if (options.oneofs)
                        object.msg = "candidate";
                }
                return object;
            };
    
            /**
             * Converts this WebRTCMessage to JSON.
             * @function toJSON
             * @memberof CTransportSignalMsg.WebRTCMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebRTCMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            WebRTCMessage.Candidate = (function() {
    
                /**
                 * Properties of a Candidate.
                 * @memberof CTransportSignalMsg.WebRTCMessage
                 * @interface ICandidate
                 * @property {string|null} [sdp_mid] Candidate sdp_mid
                 * @property {number|null} [sdp_mline_index] Candidate sdp_mline_index
                 * @property {string|null} [candidate] Candidate candidate
                 */
    
                /**
                 * Constructs a new Candidate.
                 * @memberof CTransportSignalMsg.WebRTCMessage
                 * @classdesc Represents a Candidate.
                 * @implements ICandidate
                 * @constructor
                 * @param {CTransportSignalMsg.WebRTCMessage.ICandidate=} [properties] Properties to set
                 */
                function Candidate(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Candidate sdp_mid.
                 * @member {string} sdp_mid
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @instance
                 */
                Candidate.prototype.sdp_mid = "";
    
                /**
                 * Candidate sdp_mline_index.
                 * @member {number} sdp_mline_index
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @instance
                 */
                Candidate.prototype.sdp_mline_index = 0;
    
                /**
                 * Candidate candidate.
                 * @member {string} candidate
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @instance
                 */
                Candidate.prototype.candidate = "";
    
                /**
                 * Creates a new Candidate instance using the specified properties.
                 * @function create
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @static
                 * @param {CTransportSignalMsg.WebRTCMessage.ICandidate=} [properties] Properties to set
                 * @returns {CTransportSignalMsg.WebRTCMessage.Candidate} Candidate instance
                 */
                Candidate.create = function create(properties) {
                    return new Candidate(properties);
                };
    
                /**
                 * Encodes the specified Candidate message. Does not implicitly {@link CTransportSignalMsg.WebRTCMessage.Candidate.verify|verify} messages.
                 * @function encode
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @static
                 * @param {CTransportSignalMsg.WebRTCMessage.ICandidate} message Candidate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Candidate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sdp_mid != null && message.hasOwnProperty("sdp_mid"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.sdp_mid);
                    if (message.sdp_mline_index != null && message.hasOwnProperty("sdp_mline_index"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sdp_mline_index);
                    if (message.candidate != null && message.hasOwnProperty("candidate"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.candidate);
                    return writer;
                };
    
                /**
                 * Encodes the specified Candidate message, length delimited. Does not implicitly {@link CTransportSignalMsg.WebRTCMessage.Candidate.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @static
                 * @param {CTransportSignalMsg.WebRTCMessage.ICandidate} message Candidate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Candidate.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Candidate message from the specified reader or buffer.
                 * @function decode
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CTransportSignalMsg.WebRTCMessage.Candidate} Candidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Candidate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTransportSignalMsg.WebRTCMessage.Candidate();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.sdp_mid = reader.string();
                            break;
                        case 2:
                            message.sdp_mline_index = reader.int32();
                            break;
                        case 3:
                            message.candidate = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Candidate message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CTransportSignalMsg.WebRTCMessage.Candidate} Candidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Candidate.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Candidate message.
                 * @function verify
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Candidate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sdp_mid != null && message.hasOwnProperty("sdp_mid"))
                        if (!$util.isString(message.sdp_mid))
                            return "sdp_mid: string expected";
                    if (message.sdp_mline_index != null && message.hasOwnProperty("sdp_mline_index"))
                        if (!$util.isInteger(message.sdp_mline_index))
                            return "sdp_mline_index: integer expected";
                    if (message.candidate != null && message.hasOwnProperty("candidate"))
                        if (!$util.isString(message.candidate))
                            return "candidate: string expected";
                    return null;
                };
    
                /**
                 * Creates a Candidate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CTransportSignalMsg.WebRTCMessage.Candidate} Candidate
                 */
                Candidate.fromObject = function fromObject(object) {
                    if (object instanceof $root.CTransportSignalMsg.WebRTCMessage.Candidate)
                        return object;
                    var message = new $root.CTransportSignalMsg.WebRTCMessage.Candidate();
                    if (object.sdp_mid != null)
                        message.sdp_mid = String(object.sdp_mid);
                    if (object.sdp_mline_index != null)
                        message.sdp_mline_index = object.sdp_mline_index | 0;
                    if (object.candidate != null)
                        message.candidate = String(object.candidate);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Candidate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @static
                 * @param {CTransportSignalMsg.WebRTCMessage.Candidate} message Candidate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Candidate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.sdp_mid = "";
                        object.sdp_mline_index = 0;
                        object.candidate = "";
                    }
                    if (message.sdp_mid != null && message.hasOwnProperty("sdp_mid"))
                        object.sdp_mid = message.sdp_mid;
                    if (message.sdp_mline_index != null && message.hasOwnProperty("sdp_mline_index"))
                        object.sdp_mline_index = message.sdp_mline_index;
                    if (message.candidate != null && message.hasOwnProperty("candidate"))
                        object.candidate = message.candidate;
                    return object;
                };
    
                /**
                 * Converts this Candidate to JSON.
                 * @function toJSON
                 * @memberof CTransportSignalMsg.WebRTCMessage.Candidate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Candidate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Candidate;
            })();
    
            return WebRTCMessage;
        })();
    
        return CTransportSignalMsg;
    })();

    return $root;
});
