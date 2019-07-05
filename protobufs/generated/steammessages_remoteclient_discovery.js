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
     * ERemoteClientBroadcastMsg enum.
     * @exports ERemoteClientBroadcastMsg
     * @enum {string}
     * @property {number} k_ERemoteClientBroadcastMsgDiscovery=0 k_ERemoteClientBroadcastMsgDiscovery value
     * @property {number} k_ERemoteClientBroadcastMsgStatus=1 k_ERemoteClientBroadcastMsgStatus value
     * @property {number} k_ERemoteClientBroadcastMsgOffline=2 k_ERemoteClientBroadcastMsgOffline value
     * @property {number} k_ERemoteDeviceAuthorizationRequest=3 k_ERemoteDeviceAuthorizationRequest value
     * @property {number} k_ERemoteDeviceAuthorizationResponse=4 k_ERemoteDeviceAuthorizationResponse value
     * @property {number} k_ERemoteDeviceStreamingRequest=5 k_ERemoteDeviceStreamingRequest value
     * @property {number} k_ERemoteDeviceStreamingResponse=6 k_ERemoteDeviceStreamingResponse value
     * @property {number} k_ERemoteDeviceProofRequest=7 k_ERemoteDeviceProofRequest value
     * @property {number} k_ERemoteDeviceProofResponse=8 k_ERemoteDeviceProofResponse value
     * @property {number} k_ERemoteDeviceAuthorizationCancelRequest=9 k_ERemoteDeviceAuthorizationCancelRequest value
     * @property {number} k_ERemoteDeviceStreamingCancelRequest=10 k_ERemoteDeviceStreamingCancelRequest value
     * @property {number} k_ERemoteClientBroadcastMsgClientIDDeconflict=11 k_ERemoteClientBroadcastMsgClientIDDeconflict value
     * @property {number} k_ERemoteDeviceStreamTransportSignal=12 k_ERemoteDeviceStreamTransportSignal value
     */
    $root.ERemoteClientBroadcastMsg = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ERemoteClientBroadcastMsgDiscovery"] = 0;
        values[valuesById[1] = "k_ERemoteClientBroadcastMsgStatus"] = 1;
        values[valuesById[2] = "k_ERemoteClientBroadcastMsgOffline"] = 2;
        values[valuesById[3] = "k_ERemoteDeviceAuthorizationRequest"] = 3;
        values[valuesById[4] = "k_ERemoteDeviceAuthorizationResponse"] = 4;
        values[valuesById[5] = "k_ERemoteDeviceStreamingRequest"] = 5;
        values[valuesById[6] = "k_ERemoteDeviceStreamingResponse"] = 6;
        values[valuesById[7] = "k_ERemoteDeviceProofRequest"] = 7;
        values[valuesById[8] = "k_ERemoteDeviceProofResponse"] = 8;
        values[valuesById[9] = "k_ERemoteDeviceAuthorizationCancelRequest"] = 9;
        values[valuesById[10] = "k_ERemoteDeviceStreamingCancelRequest"] = 10;
        values[valuesById[11] = "k_ERemoteClientBroadcastMsgClientIDDeconflict"] = 11;
        values[valuesById[12] = "k_ERemoteDeviceStreamTransportSignal"] = 12;
        return values;
    })();
    
    /**
     * ERemoteClientService enum.
     * @exports ERemoteClientService
     * @enum {string}
     * @property {number} k_ERemoteClientServiceNone=0 k_ERemoteClientServiceNone value
     * @property {number} k_ERemoteClientServiceRemoteControl=1 k_ERemoteClientServiceRemoteControl value
     * @property {number} k_ERemoteClientServiceGameStreaming=2 k_ERemoteClientServiceGameStreaming value
     * @property {number} k_ERemoteClientServiceSiteLicense=4 k_ERemoteClientServiceSiteLicense value
     * @property {number} k_ERemoteClientServiceContentCache=8 k_ERemoteClientServiceContentCache value
     */
    $root.ERemoteClientService = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ERemoteClientServiceNone"] = 0;
        values[valuesById[1] = "k_ERemoteClientServiceRemoteControl"] = 1;
        values[valuesById[2] = "k_ERemoteClientServiceGameStreaming"] = 2;
        values[valuesById[4] = "k_ERemoteClientServiceSiteLicense"] = 4;
        values[valuesById[8] = "k_ERemoteClientServiceContentCache"] = 8;
        return values;
    })();
    
    /**
     * ERemoteDeviceAuthorizationResult enum.
     * @exports ERemoteDeviceAuthorizationResult
     * @enum {string}
     * @property {number} k_ERemoteDeviceAuthorizationSuccess=0 k_ERemoteDeviceAuthorizationSuccess value
     * @property {number} k_ERemoteDeviceAuthorizationDenied=1 k_ERemoteDeviceAuthorizationDenied value
     * @property {number} k_ERemoteDeviceAuthorizationNotLoggedIn=2 k_ERemoteDeviceAuthorizationNotLoggedIn value
     * @property {number} k_ERemoteDeviceAuthorizationOffline=3 k_ERemoteDeviceAuthorizationOffline value
     * @property {number} k_ERemoteDeviceAuthorizationBusy=4 k_ERemoteDeviceAuthorizationBusy value
     * @property {number} k_ERemoteDeviceAuthorizationInProgress=5 k_ERemoteDeviceAuthorizationInProgress value
     * @property {number} k_ERemoteDeviceAuthorizationTimedOut=6 k_ERemoteDeviceAuthorizationTimedOut value
     * @property {number} k_ERemoteDeviceAuthorizationFailed=7 k_ERemoteDeviceAuthorizationFailed value
     * @property {number} k_ERemoteDeviceAuthorizationCanceled=8 k_ERemoteDeviceAuthorizationCanceled value
     */
    $root.ERemoteDeviceAuthorizationResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ERemoteDeviceAuthorizationSuccess"] = 0;
        values[valuesById[1] = "k_ERemoteDeviceAuthorizationDenied"] = 1;
        values[valuesById[2] = "k_ERemoteDeviceAuthorizationNotLoggedIn"] = 2;
        values[valuesById[3] = "k_ERemoteDeviceAuthorizationOffline"] = 3;
        values[valuesById[4] = "k_ERemoteDeviceAuthorizationBusy"] = 4;
        values[valuesById[5] = "k_ERemoteDeviceAuthorizationInProgress"] = 5;
        values[valuesById[6] = "k_ERemoteDeviceAuthorizationTimedOut"] = 6;
        values[valuesById[7] = "k_ERemoteDeviceAuthorizationFailed"] = 7;
        values[valuesById[8] = "k_ERemoteDeviceAuthorizationCanceled"] = 8;
        return values;
    })();
    
    /**
     * EStreamTransport enum.
     * @exports EStreamTransport
     * @enum {string}
     * @property {number} k_EStreamTransportNone=0 k_EStreamTransportNone value
     * @property {number} k_EStreamTransportUDP=1 k_EStreamTransportUDP value
     * @property {number} k_EStreamTransportUDPRelay=2 k_EStreamTransportUDPRelay value
     * @property {number} k_EStreamTransportWebRTC=3 k_EStreamTransportWebRTC value
     */
    $root.EStreamTransport = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EStreamTransportNone"] = 0;
        values[valuesById[1] = "k_EStreamTransportUDP"] = 1;
        values[valuesById[2] = "k_EStreamTransportUDPRelay"] = 2;
        values[valuesById[3] = "k_EStreamTransportWebRTC"] = 3;
        return values;
    })();
    
    /**
     * ERemoteDeviceStreamingResult enum.
     * @exports ERemoteDeviceStreamingResult
     * @enum {string}
     * @property {number} k_ERemoteDeviceStreamingSuccess=0 k_ERemoteDeviceStreamingSuccess value
     * @property {number} k_ERemoteDeviceStreamingUnauthorized=1 k_ERemoteDeviceStreamingUnauthorized value
     * @property {number} k_ERemoteDeviceStreamingScreenLocked=2 k_ERemoteDeviceStreamingScreenLocked value
     * @property {number} k_ERemoteDeviceStreamingFailed=3 k_ERemoteDeviceStreamingFailed value
     * @property {number} k_ERemoteDeviceStreamingBusy=4 k_ERemoteDeviceStreamingBusy value
     * @property {number} k_ERemoteDeviceStreamingInProgress=5 k_ERemoteDeviceStreamingInProgress value
     * @property {number} k_ERemoteDeviceStreamingCanceled=6 k_ERemoteDeviceStreamingCanceled value
     * @property {number} k_ERemoteDeviceStreamingDriversNotInstalled=7 k_ERemoteDeviceStreamingDriversNotInstalled value
     * @property {number} k_ERemoteDeviceStreamingDisabled=8 k_ERemoteDeviceStreamingDisabled value
     * @property {number} k_ERemoteDeviceStreamingBroadcastingActive=9 k_ERemoteDeviceStreamingBroadcastingActive value
     * @property {number} k_ERemoteDeviceStreamingVRActive=10 k_ERemoteDeviceStreamingVRActive value
     * @property {number} k_ERemoteDeviceStreamingPINRequired=11 k_ERemoteDeviceStreamingPINRequired value
     * @property {number} k_ERemoteDeviceStreamingTransportUnavailable=12 k_ERemoteDeviceStreamingTransportUnavailable value
     */
    $root.ERemoteDeviceStreamingResult = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ERemoteDeviceStreamingSuccess"] = 0;
        values[valuesById[1] = "k_ERemoteDeviceStreamingUnauthorized"] = 1;
        values[valuesById[2] = "k_ERemoteDeviceStreamingScreenLocked"] = 2;
        values[valuesById[3] = "k_ERemoteDeviceStreamingFailed"] = 3;
        values[valuesById[4] = "k_ERemoteDeviceStreamingBusy"] = 4;
        values[valuesById[5] = "k_ERemoteDeviceStreamingInProgress"] = 5;
        values[valuesById[6] = "k_ERemoteDeviceStreamingCanceled"] = 6;
        values[valuesById[7] = "k_ERemoteDeviceStreamingDriversNotInstalled"] = 7;
        values[valuesById[8] = "k_ERemoteDeviceStreamingDisabled"] = 8;
        values[valuesById[9] = "k_ERemoteDeviceStreamingBroadcastingActive"] = 9;
        values[valuesById[10] = "k_ERemoteDeviceStreamingVRActive"] = 10;
        values[valuesById[11] = "k_ERemoteDeviceStreamingPINRequired"] = 11;
        values[valuesById[12] = "k_ERemoteDeviceStreamingTransportUnavailable"] = 12;
        return values;
    })();
    
    $root.CMsgRemoteClientBroadcastHeader = (function() {
    
        /**
         * Properties of a CMsgRemoteClientBroadcastHeader.
         * @exports ICMsgRemoteClientBroadcastHeader
         * @interface ICMsgRemoteClientBroadcastHeader
         * @property {number|Long|null} [client_id] CMsgRemoteClientBroadcastHeader client_id
         * @property {ERemoteClientBroadcastMsg|null} [msg_type] CMsgRemoteClientBroadcastHeader msg_type
         * @property {number|Long|null} [instance_id] CMsgRemoteClientBroadcastHeader instance_id
         * @property {number|Long|null} [device_id] CMsgRemoteClientBroadcastHeader device_id
         * @property {Uint8Array|null} [device_token] CMsgRemoteClientBroadcastHeader device_token
         */
    
        /**
         * Constructs a new CMsgRemoteClientBroadcastHeader.
         * @exports CMsgRemoteClientBroadcastHeader
         * @classdesc Represents a CMsgRemoteClientBroadcastHeader.
         * @implements ICMsgRemoteClientBroadcastHeader
         * @constructor
         * @param {ICMsgRemoteClientBroadcastHeader=} [properties] Properties to set
         */
        function CMsgRemoteClientBroadcastHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteClientBroadcastHeader client_id.
         * @member {number|Long} client_id
         * @memberof CMsgRemoteClientBroadcastHeader
         * @instance
         */
        CMsgRemoteClientBroadcastHeader.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgRemoteClientBroadcastHeader msg_type.
         * @member {ERemoteClientBroadcastMsg} msg_type
         * @memberof CMsgRemoteClientBroadcastHeader
         * @instance
         */
        CMsgRemoteClientBroadcastHeader.prototype.msg_type = 0;
    
        /**
         * CMsgRemoteClientBroadcastHeader instance_id.
         * @member {number|Long} instance_id
         * @memberof CMsgRemoteClientBroadcastHeader
         * @instance
         */
        CMsgRemoteClientBroadcastHeader.prototype.instance_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgRemoteClientBroadcastHeader device_id.
         * @member {number|Long} device_id
         * @memberof CMsgRemoteClientBroadcastHeader
         * @instance
         */
        CMsgRemoteClientBroadcastHeader.prototype.device_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgRemoteClientBroadcastHeader device_token.
         * @member {Uint8Array} device_token
         * @memberof CMsgRemoteClientBroadcastHeader
         * @instance
         */
        CMsgRemoteClientBroadcastHeader.prototype.device_token = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgRemoteClientBroadcastHeader instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteClientBroadcastHeader
         * @static
         * @param {ICMsgRemoteClientBroadcastHeader=} [properties] Properties to set
         * @returns {CMsgRemoteClientBroadcastHeader} CMsgRemoteClientBroadcastHeader instance
         */
        CMsgRemoteClientBroadcastHeader.create = function create(properties) {
            return new CMsgRemoteClientBroadcastHeader(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteClientBroadcastHeader message. Does not implicitly {@link CMsgRemoteClientBroadcastHeader.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteClientBroadcastHeader
         * @static
         * @param {ICMsgRemoteClientBroadcastHeader} message CMsgRemoteClientBroadcastHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteClientBroadcastHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.client_id);
            if (message.msg_type != null && message.hasOwnProperty("msg_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.msg_type);
            if (message.instance_id != null && message.hasOwnProperty("instance_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.instance_id);
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.device_id);
            if (message.device_token != null && message.hasOwnProperty("device_token"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.device_token);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteClientBroadcastHeader message, length delimited. Does not implicitly {@link CMsgRemoteClientBroadcastHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteClientBroadcastHeader
         * @static
         * @param {ICMsgRemoteClientBroadcastHeader} message CMsgRemoteClientBroadcastHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteClientBroadcastHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteClientBroadcastHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteClientBroadcastHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteClientBroadcastHeader} CMsgRemoteClientBroadcastHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteClientBroadcastHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteClientBroadcastHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.uint64();
                    break;
                case 2:
                    message.msg_type = reader.int32();
                    break;
                case 3:
                    message.instance_id = reader.uint64();
                    break;
                case 4:
                    message.device_id = reader.uint64();
                    break;
                case 5:
                    message.device_token = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteClientBroadcastHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteClientBroadcastHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteClientBroadcastHeader} CMsgRemoteClientBroadcastHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteClientBroadcastHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteClientBroadcastHeader message.
         * @function verify
         * @memberof CMsgRemoteClientBroadcastHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteClientBroadcastHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (!$util.isInteger(message.client_id) && !(message.client_id && $util.isInteger(message.client_id.low) && $util.isInteger(message.client_id.high)))
                    return "client_id: integer|Long expected";
            if (message.msg_type != null && message.hasOwnProperty("msg_type"))
                switch (message.msg_type) {
                default:
                    return "msg_type: enum value expected";
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
                    break;
                }
            if (message.instance_id != null && message.hasOwnProperty("instance_id"))
                if (!$util.isInteger(message.instance_id) && !(message.instance_id && $util.isInteger(message.instance_id.low) && $util.isInteger(message.instance_id.high)))
                    return "instance_id: integer|Long expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isInteger(message.device_id) && !(message.device_id && $util.isInteger(message.device_id.low) && $util.isInteger(message.device_id.high)))
                    return "device_id: integer|Long expected";
            if (message.device_token != null && message.hasOwnProperty("device_token"))
                if (!(message.device_token && typeof message.device_token.length === "number" || $util.isString(message.device_token)))
                    return "device_token: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteClientBroadcastHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteClientBroadcastHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteClientBroadcastHeader} CMsgRemoteClientBroadcastHeader
         */
        CMsgRemoteClientBroadcastHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteClientBroadcastHeader)
                return object;
            var message = new $root.CMsgRemoteClientBroadcastHeader();
            if (object.client_id != null)
                if ($util.Long)
                    (message.client_id = $util.Long.fromValue(object.client_id)).unsigned = true;
                else if (typeof object.client_id === "string")
                    message.client_id = parseInt(object.client_id, 10);
                else if (typeof object.client_id === "number")
                    message.client_id = object.client_id;
                else if (typeof object.client_id === "object")
                    message.client_id = new $util.LongBits(object.client_id.low >>> 0, object.client_id.high >>> 0).toNumber(true);
            switch (object.msg_type) {
            case "k_ERemoteClientBroadcastMsgDiscovery":
            case 0:
                message.msg_type = 0;
                break;
            case "k_ERemoteClientBroadcastMsgStatus":
            case 1:
                message.msg_type = 1;
                break;
            case "k_ERemoteClientBroadcastMsgOffline":
            case 2:
                message.msg_type = 2;
                break;
            case "k_ERemoteDeviceAuthorizationRequest":
            case 3:
                message.msg_type = 3;
                break;
            case "k_ERemoteDeviceAuthorizationResponse":
            case 4:
                message.msg_type = 4;
                break;
            case "k_ERemoteDeviceStreamingRequest":
            case 5:
                message.msg_type = 5;
                break;
            case "k_ERemoteDeviceStreamingResponse":
            case 6:
                message.msg_type = 6;
                break;
            case "k_ERemoteDeviceProofRequest":
            case 7:
                message.msg_type = 7;
                break;
            case "k_ERemoteDeviceProofResponse":
            case 8:
                message.msg_type = 8;
                break;
            case "k_ERemoteDeviceAuthorizationCancelRequest":
            case 9:
                message.msg_type = 9;
                break;
            case "k_ERemoteDeviceStreamingCancelRequest":
            case 10:
                message.msg_type = 10;
                break;
            case "k_ERemoteClientBroadcastMsgClientIDDeconflict":
            case 11:
                message.msg_type = 11;
                break;
            case "k_ERemoteDeviceStreamTransportSignal":
            case 12:
                message.msg_type = 12;
                break;
            }
            if (object.instance_id != null)
                if ($util.Long)
                    (message.instance_id = $util.Long.fromValue(object.instance_id)).unsigned = true;
                else if (typeof object.instance_id === "string")
                    message.instance_id = parseInt(object.instance_id, 10);
                else if (typeof object.instance_id === "number")
                    message.instance_id = object.instance_id;
                else if (typeof object.instance_id === "object")
                    message.instance_id = new $util.LongBits(object.instance_id.low >>> 0, object.instance_id.high >>> 0).toNumber(true);
            if (object.device_id != null)
                if ($util.Long)
                    (message.device_id = $util.Long.fromValue(object.device_id)).unsigned = true;
                else if (typeof object.device_id === "string")
                    message.device_id = parseInt(object.device_id, 10);
                else if (typeof object.device_id === "number")
                    message.device_id = object.device_id;
                else if (typeof object.device_id === "object")
                    message.device_id = new $util.LongBits(object.device_id.low >>> 0, object.device_id.high >>> 0).toNumber(true);
            if (object.device_token != null)
                if (typeof object.device_token === "string")
                    $util.base64.decode(object.device_token, message.device_token = $util.newBuffer($util.base64.length(object.device_token)), 0);
                else if (object.device_token.length)
                    message.device_token = object.device_token;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteClientBroadcastHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteClientBroadcastHeader
         * @static
         * @param {CMsgRemoteClientBroadcastHeader} message CMsgRemoteClientBroadcastHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteClientBroadcastHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_id = options.longs === String ? "0" : 0;
                object.msg_type = options.enums === String ? "k_ERemoteClientBroadcastMsgDiscovery" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.instance_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instance_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.device_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.device_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.device_token = "";
                else {
                    object.device_token = [];
                    if (options.bytes !== Array)
                        object.device_token = $util.newBuffer(object.device_token);
                }
            }
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (typeof message.client_id === "number")
                    object.client_id = options.longs === String ? String(message.client_id) : message.client_id;
                else
                    object.client_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_id) : options.longs === Number ? new $util.LongBits(message.client_id.low >>> 0, message.client_id.high >>> 0).toNumber(true) : message.client_id;
            if (message.msg_type != null && message.hasOwnProperty("msg_type"))
                object.msg_type = options.enums === String ? $root.ERemoteClientBroadcastMsg[message.msg_type] : message.msg_type;
            if (message.instance_id != null && message.hasOwnProperty("instance_id"))
                if (typeof message.instance_id === "number")
                    object.instance_id = options.longs === String ? String(message.instance_id) : message.instance_id;
                else
                    object.instance_id = options.longs === String ? $util.Long.prototype.toString.call(message.instance_id) : options.longs === Number ? new $util.LongBits(message.instance_id.low >>> 0, message.instance_id.high >>> 0).toNumber(true) : message.instance_id;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (typeof message.device_id === "number")
                    object.device_id = options.longs === String ? String(message.device_id) : message.device_id;
                else
                    object.device_id = options.longs === String ? $util.Long.prototype.toString.call(message.device_id) : options.longs === Number ? new $util.LongBits(message.device_id.low >>> 0, message.device_id.high >>> 0).toNumber(true) : message.device_id;
            if (message.device_token != null && message.hasOwnProperty("device_token"))
                object.device_token = options.bytes === String ? $util.base64.encode(message.device_token, 0, message.device_token.length) : options.bytes === Array ? Array.prototype.slice.call(message.device_token) : message.device_token;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteClientBroadcastHeader to JSON.
         * @function toJSON
         * @memberof CMsgRemoteClientBroadcastHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteClientBroadcastHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteClientBroadcastHeader;
    })();
    
    $root.CMsgRemoteClientBroadcastStatus = (function() {
    
        /**
         * Properties of a CMsgRemoteClientBroadcastStatus.
         * @exports ICMsgRemoteClientBroadcastStatus
         * @interface ICMsgRemoteClientBroadcastStatus
         * @property {number|null} [version] CMsgRemoteClientBroadcastStatus version
         * @property {number|null} [min_version] CMsgRemoteClientBroadcastStatus min_version
         * @property {number|null} [connect_port] CMsgRemoteClientBroadcastStatus connect_port
         * @property {string|null} [hostname] CMsgRemoteClientBroadcastStatus hostname
         * @property {number|null} [enabled_services] CMsgRemoteClientBroadcastStatus enabled_services
         * @property {number|null} [ostype] CMsgRemoteClientBroadcastStatus ostype
         * @property {boolean|null} [is64bit] CMsgRemoteClientBroadcastStatus is64bit
         * @property {Array.<CMsgRemoteClientBroadcastStatus.IUser>|null} [users] CMsgRemoteClientBroadcastStatus users
         * @property {number|null} [euniverse] CMsgRemoteClientBroadcastStatus euniverse
         * @property {number|null} [timestamp] CMsgRemoteClientBroadcastStatus timestamp
         * @property {boolean|null} [screen_locked] CMsgRemoteClientBroadcastStatus screen_locked
         * @property {boolean|null} [games_running] CMsgRemoteClientBroadcastStatus games_running
         * @property {Array.<string>|null} [mac_addresses] CMsgRemoteClientBroadcastStatus mac_addresses
         * @property {number|null} [download_lan_peer_group] CMsgRemoteClientBroadcastStatus download_lan_peer_group
         * @property {boolean|null} [broadcasting_active] CMsgRemoteClientBroadcastStatus broadcasting_active
         * @property {boolean|null} [vr_active] CMsgRemoteClientBroadcastStatus vr_active
         * @property {number|null} [content_cache_port] CMsgRemoteClientBroadcastStatus content_cache_port
         * @property {Array.<string>|null} [ip_addresses] CMsgRemoteClientBroadcastStatus ip_addresses
         * @property {string|null} [public_ip_address] CMsgRemoteClientBroadcastStatus public_ip_address
         */
    
        /**
         * Constructs a new CMsgRemoteClientBroadcastStatus.
         * @exports CMsgRemoteClientBroadcastStatus
         * @classdesc Represents a CMsgRemoteClientBroadcastStatus.
         * @implements ICMsgRemoteClientBroadcastStatus
         * @constructor
         * @param {ICMsgRemoteClientBroadcastStatus=} [properties] Properties to set
         */
        function CMsgRemoteClientBroadcastStatus(properties) {
            this.users = [];
            this.mac_addresses = [];
            this.ip_addresses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteClientBroadcastStatus version.
         * @member {number} version
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.version = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus min_version.
         * @member {number} min_version
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.min_version = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus connect_port.
         * @member {number} connect_port
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.connect_port = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus hostname.
         * @member {string} hostname
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.hostname = "";
    
        /**
         * CMsgRemoteClientBroadcastStatus enabled_services.
         * @member {number} enabled_services
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.enabled_services = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus ostype.
         * @member {number} ostype
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.ostype = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus is64bit.
         * @member {boolean} is64bit
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.is64bit = false;
    
        /**
         * CMsgRemoteClientBroadcastStatus users.
         * @member {Array.<CMsgRemoteClientBroadcastStatus.IUser>} users
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.users = $util.emptyArray;
    
        /**
         * CMsgRemoteClientBroadcastStatus euniverse.
         * @member {number} euniverse
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.euniverse = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus timestamp.
         * @member {number} timestamp
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.timestamp = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus screen_locked.
         * @member {boolean} screen_locked
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.screen_locked = false;
    
        /**
         * CMsgRemoteClientBroadcastStatus games_running.
         * @member {boolean} games_running
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.games_running = false;
    
        /**
         * CMsgRemoteClientBroadcastStatus mac_addresses.
         * @member {Array.<string>} mac_addresses
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.mac_addresses = $util.emptyArray;
    
        /**
         * CMsgRemoteClientBroadcastStatus download_lan_peer_group.
         * @member {number} download_lan_peer_group
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.download_lan_peer_group = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus broadcasting_active.
         * @member {boolean} broadcasting_active
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.broadcasting_active = false;
    
        /**
         * CMsgRemoteClientBroadcastStatus vr_active.
         * @member {boolean} vr_active
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.vr_active = false;
    
        /**
         * CMsgRemoteClientBroadcastStatus content_cache_port.
         * @member {number} content_cache_port
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.content_cache_port = 0;
    
        /**
         * CMsgRemoteClientBroadcastStatus ip_addresses.
         * @member {Array.<string>} ip_addresses
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.ip_addresses = $util.emptyArray;
    
        /**
         * CMsgRemoteClientBroadcastStatus public_ip_address.
         * @member {string} public_ip_address
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         */
        CMsgRemoteClientBroadcastStatus.prototype.public_ip_address = "";
    
        /**
         * Creates a new CMsgRemoteClientBroadcastStatus instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteClientBroadcastStatus
         * @static
         * @param {ICMsgRemoteClientBroadcastStatus=} [properties] Properties to set
         * @returns {CMsgRemoteClientBroadcastStatus} CMsgRemoteClientBroadcastStatus instance
         */
        CMsgRemoteClientBroadcastStatus.create = function create(properties) {
            return new CMsgRemoteClientBroadcastStatus(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteClientBroadcastStatus message. Does not implicitly {@link CMsgRemoteClientBroadcastStatus.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteClientBroadcastStatus
         * @static
         * @param {ICMsgRemoteClientBroadcastStatus} message CMsgRemoteClientBroadcastStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteClientBroadcastStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.min_version != null && message.hasOwnProperty("min_version"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.min_version);
            if (message.connect_port != null && message.hasOwnProperty("connect_port"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.connect_port);
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.hostname);
            if (message.enabled_services != null && message.hasOwnProperty("enabled_services"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.enabled_services);
            if (message.ostype != null && message.hasOwnProperty("ostype"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ostype);
            if (message.is64bit != null && message.hasOwnProperty("is64bit"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.is64bit);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.CMsgRemoteClientBroadcastStatus.User.encode(message.users[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.euniverse != null && message.hasOwnProperty("euniverse"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.euniverse);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.timestamp);
            if (message.screen_locked != null && message.hasOwnProperty("screen_locked"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.screen_locked);
            if (message.games_running != null && message.hasOwnProperty("games_running"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.games_running);
            if (message.mac_addresses != null && message.mac_addresses.length)
                for (var i = 0; i < message.mac_addresses.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.mac_addresses[i]);
            if (message.download_lan_peer_group != null && message.hasOwnProperty("download_lan_peer_group"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.download_lan_peer_group);
            if (message.broadcasting_active != null && message.hasOwnProperty("broadcasting_active"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.broadcasting_active);
            if (message.vr_active != null && message.hasOwnProperty("vr_active"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.vr_active);
            if (message.content_cache_port != null && message.hasOwnProperty("content_cache_port"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.content_cache_port);
            if (message.ip_addresses != null && message.ip_addresses.length)
                for (var i = 0; i < message.ip_addresses.length; ++i)
                    writer.uint32(/* id 20, wireType 2 =*/162).string(message.ip_addresses[i]);
            if (message.public_ip_address != null && message.hasOwnProperty("public_ip_address"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.public_ip_address);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteClientBroadcastStatus message, length delimited. Does not implicitly {@link CMsgRemoteClientBroadcastStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteClientBroadcastStatus
         * @static
         * @param {ICMsgRemoteClientBroadcastStatus} message CMsgRemoteClientBroadcastStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteClientBroadcastStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteClientBroadcastStatus message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteClientBroadcastStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteClientBroadcastStatus} CMsgRemoteClientBroadcastStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteClientBroadcastStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteClientBroadcastStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 2:
                    message.min_version = reader.int32();
                    break;
                case 3:
                    message.connect_port = reader.uint32();
                    break;
                case 4:
                    message.hostname = reader.string();
                    break;
                case 6:
                    message.enabled_services = reader.uint32();
                    break;
                case 7:
                    message.ostype = reader.int32();
                    break;
                case 8:
                    message.is64bit = reader.bool();
                    break;
                case 9:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.CMsgRemoteClientBroadcastStatus.User.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.euniverse = reader.int32();
                    break;
                case 12:
                    message.timestamp = reader.uint32();
                    break;
                case 13:
                    message.screen_locked = reader.bool();
                    break;
                case 14:
                    message.games_running = reader.bool();
                    break;
                case 15:
                    if (!(message.mac_addresses && message.mac_addresses.length))
                        message.mac_addresses = [];
                    message.mac_addresses.push(reader.string());
                    break;
                case 16:
                    message.download_lan_peer_group = reader.uint32();
                    break;
                case 17:
                    message.broadcasting_active = reader.bool();
                    break;
                case 18:
                    message.vr_active = reader.bool();
                    break;
                case 19:
                    message.content_cache_port = reader.uint32();
                    break;
                case 20:
                    if (!(message.ip_addresses && message.ip_addresses.length))
                        message.ip_addresses = [];
                    message.ip_addresses.push(reader.string());
                    break;
                case 21:
                    message.public_ip_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteClientBroadcastStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteClientBroadcastStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteClientBroadcastStatus} CMsgRemoteClientBroadcastStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteClientBroadcastStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteClientBroadcastStatus message.
         * @function verify
         * @memberof CMsgRemoteClientBroadcastStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteClientBroadcastStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.min_version != null && message.hasOwnProperty("min_version"))
                if (!$util.isInteger(message.min_version))
                    return "min_version: integer expected";
            if (message.connect_port != null && message.hasOwnProperty("connect_port"))
                if (!$util.isInteger(message.connect_port))
                    return "connect_port: integer expected";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            if (message.enabled_services != null && message.hasOwnProperty("enabled_services"))
                if (!$util.isInteger(message.enabled_services))
                    return "enabled_services: integer expected";
            if (message.ostype != null && message.hasOwnProperty("ostype"))
                if (!$util.isInteger(message.ostype))
                    return "ostype: integer expected";
            if (message.is64bit != null && message.hasOwnProperty("is64bit"))
                if (typeof message.is64bit !== "boolean")
                    return "is64bit: boolean expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.CMsgRemoteClientBroadcastStatus.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.euniverse != null && message.hasOwnProperty("euniverse"))
                if (!$util.isInteger(message.euniverse))
                    return "euniverse: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.screen_locked != null && message.hasOwnProperty("screen_locked"))
                if (typeof message.screen_locked !== "boolean")
                    return "screen_locked: boolean expected";
            if (message.games_running != null && message.hasOwnProperty("games_running"))
                if (typeof message.games_running !== "boolean")
                    return "games_running: boolean expected";
            if (message.mac_addresses != null && message.hasOwnProperty("mac_addresses")) {
                if (!Array.isArray(message.mac_addresses))
                    return "mac_addresses: array expected";
                for (var i = 0; i < message.mac_addresses.length; ++i)
                    if (!$util.isString(message.mac_addresses[i]))
                        return "mac_addresses: string[] expected";
            }
            if (message.download_lan_peer_group != null && message.hasOwnProperty("download_lan_peer_group"))
                if (!$util.isInteger(message.download_lan_peer_group))
                    return "download_lan_peer_group: integer expected";
            if (message.broadcasting_active != null && message.hasOwnProperty("broadcasting_active"))
                if (typeof message.broadcasting_active !== "boolean")
                    return "broadcasting_active: boolean expected";
            if (message.vr_active != null && message.hasOwnProperty("vr_active"))
                if (typeof message.vr_active !== "boolean")
                    return "vr_active: boolean expected";
            if (message.content_cache_port != null && message.hasOwnProperty("content_cache_port"))
                if (!$util.isInteger(message.content_cache_port))
                    return "content_cache_port: integer expected";
            if (message.ip_addresses != null && message.hasOwnProperty("ip_addresses")) {
                if (!Array.isArray(message.ip_addresses))
                    return "ip_addresses: array expected";
                for (var i = 0; i < message.ip_addresses.length; ++i)
                    if (!$util.isString(message.ip_addresses[i]))
                        return "ip_addresses: string[] expected";
            }
            if (message.public_ip_address != null && message.hasOwnProperty("public_ip_address"))
                if (!$util.isString(message.public_ip_address))
                    return "public_ip_address: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteClientBroadcastStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteClientBroadcastStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteClientBroadcastStatus} CMsgRemoteClientBroadcastStatus
         */
        CMsgRemoteClientBroadcastStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteClientBroadcastStatus)
                return object;
            var message = new $root.CMsgRemoteClientBroadcastStatus();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.min_version != null)
                message.min_version = object.min_version | 0;
            if (object.connect_port != null)
                message.connect_port = object.connect_port >>> 0;
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.enabled_services != null)
                message.enabled_services = object.enabled_services >>> 0;
            if (object.ostype != null)
                message.ostype = object.ostype | 0;
            if (object.is64bit != null)
                message.is64bit = Boolean(object.is64bit);
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".CMsgRemoteClientBroadcastStatus.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".CMsgRemoteClientBroadcastStatus.users: object expected");
                    message.users[i] = $root.CMsgRemoteClientBroadcastStatus.User.fromObject(object.users[i]);
                }
            }
            if (object.euniverse != null)
                message.euniverse = object.euniverse | 0;
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.screen_locked != null)
                message.screen_locked = Boolean(object.screen_locked);
            if (object.games_running != null)
                message.games_running = Boolean(object.games_running);
            if (object.mac_addresses) {
                if (!Array.isArray(object.mac_addresses))
                    throw TypeError(".CMsgRemoteClientBroadcastStatus.mac_addresses: array expected");
                message.mac_addresses = [];
                for (var i = 0; i < object.mac_addresses.length; ++i)
                    message.mac_addresses[i] = String(object.mac_addresses[i]);
            }
            if (object.download_lan_peer_group != null)
                message.download_lan_peer_group = object.download_lan_peer_group >>> 0;
            if (object.broadcasting_active != null)
                message.broadcasting_active = Boolean(object.broadcasting_active);
            if (object.vr_active != null)
                message.vr_active = Boolean(object.vr_active);
            if (object.content_cache_port != null)
                message.content_cache_port = object.content_cache_port >>> 0;
            if (object.ip_addresses) {
                if (!Array.isArray(object.ip_addresses))
                    throw TypeError(".CMsgRemoteClientBroadcastStatus.ip_addresses: array expected");
                message.ip_addresses = [];
                for (var i = 0; i < object.ip_addresses.length; ++i)
                    message.ip_addresses[i] = String(object.ip_addresses[i]);
            }
            if (object.public_ip_address != null)
                message.public_ip_address = String(object.public_ip_address);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteClientBroadcastStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteClientBroadcastStatus
         * @static
         * @param {CMsgRemoteClientBroadcastStatus} message CMsgRemoteClientBroadcastStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteClientBroadcastStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.users = [];
                object.mac_addresses = [];
                object.ip_addresses = [];
            }
            if (options.defaults) {
                object.version = 0;
                object.min_version = 0;
                object.connect_port = 0;
                object.hostname = "";
                object.enabled_services = 0;
                object.ostype = 0;
                object.is64bit = false;
                object.euniverse = 0;
                object.timestamp = 0;
                object.screen_locked = false;
                object.games_running = false;
                object.download_lan_peer_group = 0;
                object.broadcasting_active = false;
                object.vr_active = false;
                object.content_cache_port = 0;
                object.public_ip_address = "";
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.min_version != null && message.hasOwnProperty("min_version"))
                object.min_version = message.min_version;
            if (message.connect_port != null && message.hasOwnProperty("connect_port"))
                object.connect_port = message.connect_port;
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            if (message.enabled_services != null && message.hasOwnProperty("enabled_services"))
                object.enabled_services = message.enabled_services;
            if (message.ostype != null && message.hasOwnProperty("ostype"))
                object.ostype = message.ostype;
            if (message.is64bit != null && message.hasOwnProperty("is64bit"))
                object.is64bit = message.is64bit;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.CMsgRemoteClientBroadcastStatus.User.toObject(message.users[j], options);
            }
            if (message.euniverse != null && message.hasOwnProperty("euniverse"))
                object.euniverse = message.euniverse;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.screen_locked != null && message.hasOwnProperty("screen_locked"))
                object.screen_locked = message.screen_locked;
            if (message.games_running != null && message.hasOwnProperty("games_running"))
                object.games_running = message.games_running;
            if (message.mac_addresses && message.mac_addresses.length) {
                object.mac_addresses = [];
                for (var j = 0; j < message.mac_addresses.length; ++j)
                    object.mac_addresses[j] = message.mac_addresses[j];
            }
            if (message.download_lan_peer_group != null && message.hasOwnProperty("download_lan_peer_group"))
                object.download_lan_peer_group = message.download_lan_peer_group;
            if (message.broadcasting_active != null && message.hasOwnProperty("broadcasting_active"))
                object.broadcasting_active = message.broadcasting_active;
            if (message.vr_active != null && message.hasOwnProperty("vr_active"))
                object.vr_active = message.vr_active;
            if (message.content_cache_port != null && message.hasOwnProperty("content_cache_port"))
                object.content_cache_port = message.content_cache_port;
            if (message.ip_addresses && message.ip_addresses.length) {
                object.ip_addresses = [];
                for (var j = 0; j < message.ip_addresses.length; ++j)
                    object.ip_addresses[j] = message.ip_addresses[j];
            }
            if (message.public_ip_address != null && message.hasOwnProperty("public_ip_address"))
                object.public_ip_address = message.public_ip_address;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteClientBroadcastStatus to JSON.
         * @function toJSON
         * @memberof CMsgRemoteClientBroadcastStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteClientBroadcastStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgRemoteClientBroadcastStatus.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof CMsgRemoteClientBroadcastStatus
             * @interface IUser
             * @property {number|Long|null} [steamid] User steamid
             * @property {number|null} [auth_key_id] User auth_key_id
             */
    
            /**
             * Constructs a new User.
             * @memberof CMsgRemoteClientBroadcastStatus
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {CMsgRemoteClientBroadcastStatus.IUser=} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User steamid.
             * @member {number|Long} steamid
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @instance
             */
            User.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * User auth_key_id.
             * @member {number} auth_key_id
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @instance
             */
            User.prototype.auth_key_id = 0;
    
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @static
             * @param {CMsgRemoteClientBroadcastStatus.IUser=} [properties] Properties to set
             * @returns {CMsgRemoteClientBroadcastStatus.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message. Does not implicitly {@link CMsgRemoteClientBroadcastStatus.User.verify|verify} messages.
             * @function encode
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @static
             * @param {CMsgRemoteClientBroadcastStatus.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
                if (message.auth_key_id != null && message.hasOwnProperty("auth_key_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.auth_key_id);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link CMsgRemoteClientBroadcastStatus.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @static
             * @param {CMsgRemoteClientBroadcastStatus.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgRemoteClientBroadcastStatus.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteClientBroadcastStatus.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.steamid = reader.fixed64();
                        break;
                    case 2:
                        message.auth_key_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgRemoteClientBroadcastStatus.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                if (message.auth_key_id != null && message.hasOwnProperty("auth_key_id"))
                    if (!$util.isInteger(message.auth_key_id))
                        return "auth_key_id: integer expected";
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgRemoteClientBroadcastStatus.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgRemoteClientBroadcastStatus.User)
                    return object;
                var message = new $root.CMsgRemoteClientBroadcastStatus.User();
                if (object.steamid != null)
                    if ($util.Long)
                        (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                    else if (typeof object.steamid === "string")
                        message.steamid = parseInt(object.steamid, 10);
                    else if (typeof object.steamid === "number")
                        message.steamid = object.steamid;
                    else if (typeof object.steamid === "object")
                        message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
                if (object.auth_key_id != null)
                    message.auth_key_id = object.auth_key_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @static
             * @param {CMsgRemoteClientBroadcastStatus.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                    object.auth_key_id = 0;
                }
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                if (message.auth_key_id != null && message.hasOwnProperty("auth_key_id"))
                    object.auth_key_id = message.auth_key_id;
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof CMsgRemoteClientBroadcastStatus.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return User;
        })();
    
        return CMsgRemoteClientBroadcastStatus;
    })();
    
    $root.CMsgRemoteClientBroadcastDiscovery = (function() {
    
        /**
         * Properties of a CMsgRemoteClientBroadcastDiscovery.
         * @exports ICMsgRemoteClientBroadcastDiscovery
         * @interface ICMsgRemoteClientBroadcastDiscovery
         * @property {number|null} [seq_num] CMsgRemoteClientBroadcastDiscovery seq_num
         * @property {Array.<number|Long>|null} [client_ids] CMsgRemoteClientBroadcastDiscovery client_ids
         */
    
        /**
         * Constructs a new CMsgRemoteClientBroadcastDiscovery.
         * @exports CMsgRemoteClientBroadcastDiscovery
         * @classdesc Represents a CMsgRemoteClientBroadcastDiscovery.
         * @implements ICMsgRemoteClientBroadcastDiscovery
         * @constructor
         * @param {ICMsgRemoteClientBroadcastDiscovery=} [properties] Properties to set
         */
        function CMsgRemoteClientBroadcastDiscovery(properties) {
            this.client_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteClientBroadcastDiscovery seq_num.
         * @member {number} seq_num
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @instance
         */
        CMsgRemoteClientBroadcastDiscovery.prototype.seq_num = 0;
    
        /**
         * CMsgRemoteClientBroadcastDiscovery client_ids.
         * @member {Array.<number|Long>} client_ids
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @instance
         */
        CMsgRemoteClientBroadcastDiscovery.prototype.client_ids = $util.emptyArray;
    
        /**
         * Creates a new CMsgRemoteClientBroadcastDiscovery instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @static
         * @param {ICMsgRemoteClientBroadcastDiscovery=} [properties] Properties to set
         * @returns {CMsgRemoteClientBroadcastDiscovery} CMsgRemoteClientBroadcastDiscovery instance
         */
        CMsgRemoteClientBroadcastDiscovery.create = function create(properties) {
            return new CMsgRemoteClientBroadcastDiscovery(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteClientBroadcastDiscovery message. Does not implicitly {@link CMsgRemoteClientBroadcastDiscovery.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @static
         * @param {ICMsgRemoteClientBroadcastDiscovery} message CMsgRemoteClientBroadcastDiscovery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteClientBroadcastDiscovery.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.seq_num);
            if (message.client_ids != null && message.client_ids.length)
                for (var i = 0; i < message.client_ids.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.client_ids[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteClientBroadcastDiscovery message, length delimited. Does not implicitly {@link CMsgRemoteClientBroadcastDiscovery.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @static
         * @param {ICMsgRemoteClientBroadcastDiscovery} message CMsgRemoteClientBroadcastDiscovery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteClientBroadcastDiscovery.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteClientBroadcastDiscovery message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteClientBroadcastDiscovery} CMsgRemoteClientBroadcastDiscovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteClientBroadcastDiscovery.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteClientBroadcastDiscovery();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seq_num = reader.uint32();
                    break;
                case 2:
                    if (!(message.client_ids && message.client_ids.length))
                        message.client_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.client_ids.push(reader.uint64());
                    } else
                        message.client_ids.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteClientBroadcastDiscovery message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteClientBroadcastDiscovery} CMsgRemoteClientBroadcastDiscovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteClientBroadcastDiscovery.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteClientBroadcastDiscovery message.
         * @function verify
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteClientBroadcastDiscovery.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                if (!$util.isInteger(message.seq_num))
                    return "seq_num: integer expected";
            if (message.client_ids != null && message.hasOwnProperty("client_ids")) {
                if (!Array.isArray(message.client_ids))
                    return "client_ids: array expected";
                for (var i = 0; i < message.client_ids.length; ++i)
                    if (!$util.isInteger(message.client_ids[i]) && !(message.client_ids[i] && $util.isInteger(message.client_ids[i].low) && $util.isInteger(message.client_ids[i].high)))
                        return "client_ids: integer|Long[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgRemoteClientBroadcastDiscovery message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteClientBroadcastDiscovery} CMsgRemoteClientBroadcastDiscovery
         */
        CMsgRemoteClientBroadcastDiscovery.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteClientBroadcastDiscovery)
                return object;
            var message = new $root.CMsgRemoteClientBroadcastDiscovery();
            if (object.seq_num != null)
                message.seq_num = object.seq_num >>> 0;
            if (object.client_ids) {
                if (!Array.isArray(object.client_ids))
                    throw TypeError(".CMsgRemoteClientBroadcastDiscovery.client_ids: array expected");
                message.client_ids = [];
                for (var i = 0; i < object.client_ids.length; ++i)
                    if ($util.Long)
                        (message.client_ids[i] = $util.Long.fromValue(object.client_ids[i])).unsigned = true;
                    else if (typeof object.client_ids[i] === "string")
                        message.client_ids[i] = parseInt(object.client_ids[i], 10);
                    else if (typeof object.client_ids[i] === "number")
                        message.client_ids[i] = object.client_ids[i];
                    else if (typeof object.client_ids[i] === "object")
                        message.client_ids[i] = new $util.LongBits(object.client_ids[i].low >>> 0, object.client_ids[i].high >>> 0).toNumber(true);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteClientBroadcastDiscovery message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @static
         * @param {CMsgRemoteClientBroadcastDiscovery} message CMsgRemoteClientBroadcastDiscovery
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteClientBroadcastDiscovery.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.client_ids = [];
            if (options.defaults)
                object.seq_num = 0;
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                object.seq_num = message.seq_num;
            if (message.client_ids && message.client_ids.length) {
                object.client_ids = [];
                for (var j = 0; j < message.client_ids.length; ++j)
                    if (typeof message.client_ids[j] === "number")
                        object.client_ids[j] = options.longs === String ? String(message.client_ids[j]) : message.client_ids[j];
                    else
                        object.client_ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.client_ids[j]) : options.longs === Number ? new $util.LongBits(message.client_ids[j].low >>> 0, message.client_ids[j].high >>> 0).toNumber(true) : message.client_ids[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgRemoteClientBroadcastDiscovery to JSON.
         * @function toJSON
         * @memberof CMsgRemoteClientBroadcastDiscovery
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteClientBroadcastDiscovery.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteClientBroadcastDiscovery;
    })();
    
    $root.CMsgRemoteClientBroadcastClientIDDeconflict = (function() {
    
        /**
         * Properties of a CMsgRemoteClientBroadcastClientIDDeconflict.
         * @exports ICMsgRemoteClientBroadcastClientIDDeconflict
         * @interface ICMsgRemoteClientBroadcastClientIDDeconflict
         * @property {Array.<number|Long>|null} [client_ids] CMsgRemoteClientBroadcastClientIDDeconflict client_ids
         */
    
        /**
         * Constructs a new CMsgRemoteClientBroadcastClientIDDeconflict.
         * @exports CMsgRemoteClientBroadcastClientIDDeconflict
         * @classdesc Represents a CMsgRemoteClientBroadcastClientIDDeconflict.
         * @implements ICMsgRemoteClientBroadcastClientIDDeconflict
         * @constructor
         * @param {ICMsgRemoteClientBroadcastClientIDDeconflict=} [properties] Properties to set
         */
        function CMsgRemoteClientBroadcastClientIDDeconflict(properties) {
            this.client_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteClientBroadcastClientIDDeconflict client_ids.
         * @member {Array.<number|Long>} client_ids
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @instance
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.prototype.client_ids = $util.emptyArray;
    
        /**
         * Creates a new CMsgRemoteClientBroadcastClientIDDeconflict instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @static
         * @param {ICMsgRemoteClientBroadcastClientIDDeconflict=} [properties] Properties to set
         * @returns {CMsgRemoteClientBroadcastClientIDDeconflict} CMsgRemoteClientBroadcastClientIDDeconflict instance
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.create = function create(properties) {
            return new CMsgRemoteClientBroadcastClientIDDeconflict(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteClientBroadcastClientIDDeconflict message. Does not implicitly {@link CMsgRemoteClientBroadcastClientIDDeconflict.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @static
         * @param {ICMsgRemoteClientBroadcastClientIDDeconflict} message CMsgRemoteClientBroadcastClientIDDeconflict message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_ids != null && message.client_ids.length)
                for (var i = 0; i < message.client_ids.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.client_ids[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteClientBroadcastClientIDDeconflict message, length delimited. Does not implicitly {@link CMsgRemoteClientBroadcastClientIDDeconflict.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @static
         * @param {ICMsgRemoteClientBroadcastClientIDDeconflict} message CMsgRemoteClientBroadcastClientIDDeconflict message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteClientBroadcastClientIDDeconflict message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteClientBroadcastClientIDDeconflict} CMsgRemoteClientBroadcastClientIDDeconflict
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteClientBroadcastClientIDDeconflict();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.client_ids && message.client_ids.length))
                        message.client_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.client_ids.push(reader.uint64());
                    } else
                        message.client_ids.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteClientBroadcastClientIDDeconflict message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteClientBroadcastClientIDDeconflict} CMsgRemoteClientBroadcastClientIDDeconflict
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteClientBroadcastClientIDDeconflict message.
         * @function verify
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_ids != null && message.hasOwnProperty("client_ids")) {
                if (!Array.isArray(message.client_ids))
                    return "client_ids: array expected";
                for (var i = 0; i < message.client_ids.length; ++i)
                    if (!$util.isInteger(message.client_ids[i]) && !(message.client_ids[i] && $util.isInteger(message.client_ids[i].low) && $util.isInteger(message.client_ids[i].high)))
                        return "client_ids: integer|Long[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgRemoteClientBroadcastClientIDDeconflict message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteClientBroadcastClientIDDeconflict} CMsgRemoteClientBroadcastClientIDDeconflict
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteClientBroadcastClientIDDeconflict)
                return object;
            var message = new $root.CMsgRemoteClientBroadcastClientIDDeconflict();
            if (object.client_ids) {
                if (!Array.isArray(object.client_ids))
                    throw TypeError(".CMsgRemoteClientBroadcastClientIDDeconflict.client_ids: array expected");
                message.client_ids = [];
                for (var i = 0; i < object.client_ids.length; ++i)
                    if ($util.Long)
                        (message.client_ids[i] = $util.Long.fromValue(object.client_ids[i])).unsigned = true;
                    else if (typeof object.client_ids[i] === "string")
                        message.client_ids[i] = parseInt(object.client_ids[i], 10);
                    else if (typeof object.client_ids[i] === "number")
                        message.client_ids[i] = object.client_ids[i];
                    else if (typeof object.client_ids[i] === "object")
                        message.client_ids[i] = new $util.LongBits(object.client_ids[i].low >>> 0, object.client_ids[i].high >>> 0).toNumber(true);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteClientBroadcastClientIDDeconflict message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @static
         * @param {CMsgRemoteClientBroadcastClientIDDeconflict} message CMsgRemoteClientBroadcastClientIDDeconflict
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.client_ids = [];
            if (message.client_ids && message.client_ids.length) {
                object.client_ids = [];
                for (var j = 0; j < message.client_ids.length; ++j)
                    if (typeof message.client_ids[j] === "number")
                        object.client_ids[j] = options.longs === String ? String(message.client_ids[j]) : message.client_ids[j];
                    else
                        object.client_ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.client_ids[j]) : options.longs === Number ? new $util.LongBits(message.client_ids[j].low >>> 0, message.client_ids[j].high >>> 0).toNumber(true) : message.client_ids[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgRemoteClientBroadcastClientIDDeconflict to JSON.
         * @function toJSON
         * @memberof CMsgRemoteClientBroadcastClientIDDeconflict
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteClientBroadcastClientIDDeconflict.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteClientBroadcastClientIDDeconflict;
    })();
    
    $root.CMsgRemoteDeviceAuthorizationRequest = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceAuthorizationRequest.
         * @exports ICMsgRemoteDeviceAuthorizationRequest
         * @interface ICMsgRemoteDeviceAuthorizationRequest
         * @property {Uint8Array} device_token CMsgRemoteDeviceAuthorizationRequest device_token
         * @property {string|null} [device_name] CMsgRemoteDeviceAuthorizationRequest device_name
         * @property {Uint8Array} encrypted_request CMsgRemoteDeviceAuthorizationRequest encrypted_request
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceAuthorizationRequest.
         * @exports CMsgRemoteDeviceAuthorizationRequest
         * @classdesc Represents a CMsgRemoteDeviceAuthorizationRequest.
         * @implements ICMsgRemoteDeviceAuthorizationRequest
         * @constructor
         * @param {ICMsgRemoteDeviceAuthorizationRequest=} [properties] Properties to set
         */
        function CMsgRemoteDeviceAuthorizationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteDeviceAuthorizationRequest device_token.
         * @member {Uint8Array} device_token
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @instance
         */
        CMsgRemoteDeviceAuthorizationRequest.prototype.device_token = $util.newBuffer([]);
    
        /**
         * CMsgRemoteDeviceAuthorizationRequest device_name.
         * @member {string} device_name
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @instance
         */
        CMsgRemoteDeviceAuthorizationRequest.prototype.device_name = "";
    
        /**
         * CMsgRemoteDeviceAuthorizationRequest encrypted_request.
         * @member {Uint8Array} encrypted_request
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @instance
         */
        CMsgRemoteDeviceAuthorizationRequest.prototype.encrypted_request = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgRemoteDeviceAuthorizationRequest instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationRequest=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceAuthorizationRequest} CMsgRemoteDeviceAuthorizationRequest instance
         */
        CMsgRemoteDeviceAuthorizationRequest.create = function create(properties) {
            return new CMsgRemoteDeviceAuthorizationRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceAuthorizationRequest message. Does not implicitly {@link CMsgRemoteDeviceAuthorizationRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationRequest} message CMsgRemoteDeviceAuthorizationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceAuthorizationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.device_token);
            if (message.device_name != null && message.hasOwnProperty("device_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.device_name);
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.encrypted_request);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceAuthorizationRequest message, length delimited. Does not implicitly {@link CMsgRemoteDeviceAuthorizationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationRequest} message CMsgRemoteDeviceAuthorizationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceAuthorizationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceAuthorizationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceAuthorizationRequest} CMsgRemoteDeviceAuthorizationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceAuthorizationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceAuthorizationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.device_token = reader.bytes();
                    break;
                case 2:
                    message.device_name = reader.string();
                    break;
                case 3:
                    message.encrypted_request = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("device_token"))
                throw $util.ProtocolError("missing required 'device_token'", { instance: message });
            if (!message.hasOwnProperty("encrypted_request"))
                throw $util.ProtocolError("missing required 'encrypted_request'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteDeviceAuthorizationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceAuthorizationRequest} CMsgRemoteDeviceAuthorizationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceAuthorizationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceAuthorizationRequest message.
         * @function verify
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceAuthorizationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.device_token && typeof message.device_token.length === "number" || $util.isString(message.device_token)))
                return "device_token: buffer expected";
            if (message.device_name != null && message.hasOwnProperty("device_name"))
                if (!$util.isString(message.device_name))
                    return "device_name: string expected";
            if (!(message.encrypted_request && typeof message.encrypted_request.length === "number" || $util.isString(message.encrypted_request)))
                return "encrypted_request: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceAuthorizationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceAuthorizationRequest} CMsgRemoteDeviceAuthorizationRequest
         */
        CMsgRemoteDeviceAuthorizationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceAuthorizationRequest)
                return object;
            var message = new $root.CMsgRemoteDeviceAuthorizationRequest();
            if (object.device_token != null)
                if (typeof object.device_token === "string")
                    $util.base64.decode(object.device_token, message.device_token = $util.newBuffer($util.base64.length(object.device_token)), 0);
                else if (object.device_token.length)
                    message.device_token = object.device_token;
            if (object.device_name != null)
                message.device_name = String(object.device_name);
            if (object.encrypted_request != null)
                if (typeof object.encrypted_request === "string")
                    $util.base64.decode(object.encrypted_request, message.encrypted_request = $util.newBuffer($util.base64.length(object.encrypted_request)), 0);
                else if (object.encrypted_request.length)
                    message.encrypted_request = object.encrypted_request;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceAuthorizationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @static
         * @param {CMsgRemoteDeviceAuthorizationRequest} message CMsgRemoteDeviceAuthorizationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceAuthorizationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.device_token = "";
                else {
                    object.device_token = [];
                    if (options.bytes !== Array)
                        object.device_token = $util.newBuffer(object.device_token);
                }
                object.device_name = "";
                if (options.bytes === String)
                    object.encrypted_request = "";
                else {
                    object.encrypted_request = [];
                    if (options.bytes !== Array)
                        object.encrypted_request = $util.newBuffer(object.encrypted_request);
                }
            }
            if (message.device_token != null && message.hasOwnProperty("device_token"))
                object.device_token = options.bytes === String ? $util.base64.encode(message.device_token, 0, message.device_token.length) : options.bytes === Array ? Array.prototype.slice.call(message.device_token) : message.device_token;
            if (message.device_name != null && message.hasOwnProperty("device_name"))
                object.device_name = message.device_name;
            if (message.encrypted_request != null && message.hasOwnProperty("encrypted_request"))
                object.encrypted_request = options.bytes === String ? $util.base64.encode(message.encrypted_request, 0, message.encrypted_request.length) : options.bytes === Array ? Array.prototype.slice.call(message.encrypted_request) : message.encrypted_request;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteDeviceAuthorizationRequest to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceAuthorizationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceAuthorizationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket = (function() {
    
            /**
             * Properties of a CKeyEscrow_Ticket.
             * @memberof CMsgRemoteDeviceAuthorizationRequest
             * @interface ICKeyEscrow_Ticket
             * @property {Uint8Array|null} [password] CKeyEscrow_Ticket password
             * @property {number|Long|null} [identifier] CKeyEscrow_Ticket identifier
             * @property {Uint8Array|null} [payload] CKeyEscrow_Ticket payload
             * @property {number|null} [timestamp] CKeyEscrow_Ticket timestamp
             * @property {CMsgRemoteDeviceAuthorizationRequest.EKeyEscrowUsage|null} [usage] CKeyEscrow_Ticket usage
             * @property {string|null} [device_name] CKeyEscrow_Ticket device_name
             * @property {string|null} [device_model] CKeyEscrow_Ticket device_model
             * @property {string|null} [device_serial] CKeyEscrow_Ticket device_serial
             * @property {number|null} [device_provisioning_id] CKeyEscrow_Ticket device_provisioning_id
             */
    
            /**
             * Constructs a new CKeyEscrow_Ticket.
             * @memberof CMsgRemoteDeviceAuthorizationRequest
             * @classdesc Represents a CKeyEscrow_Ticket.
             * @implements ICKeyEscrow_Ticket
             * @constructor
             * @param {CMsgRemoteDeviceAuthorizationRequest.ICKeyEscrow_Ticket=} [properties] Properties to set
             */
            function CKeyEscrow_Ticket(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CKeyEscrow_Ticket password.
             * @member {Uint8Array} password
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.password = $util.newBuffer([]);
    
            /**
             * CKeyEscrow_Ticket identifier.
             * @member {number|Long} identifier
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.identifier = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CKeyEscrow_Ticket payload.
             * @member {Uint8Array} payload
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.payload = $util.newBuffer([]);
    
            /**
             * CKeyEscrow_Ticket timestamp.
             * @member {number} timestamp
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.timestamp = 0;
    
            /**
             * CKeyEscrow_Ticket usage.
             * @member {CMsgRemoteDeviceAuthorizationRequest.EKeyEscrowUsage} usage
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.usage = 0;
    
            /**
             * CKeyEscrow_Ticket device_name.
             * @member {string} device_name
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.device_name = "";
    
            /**
             * CKeyEscrow_Ticket device_model.
             * @member {string} device_model
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.device_model = "";
    
            /**
             * CKeyEscrow_Ticket device_serial.
             * @member {string} device_serial
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.device_serial = "";
    
            /**
             * CKeyEscrow_Ticket device_provisioning_id.
             * @member {number} device_provisioning_id
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             */
            CKeyEscrow_Ticket.prototype.device_provisioning_id = 0;
    
            /**
             * Creates a new CKeyEscrow_Ticket instance using the specified properties.
             * @function create
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @static
             * @param {CMsgRemoteDeviceAuthorizationRequest.ICKeyEscrow_Ticket=} [properties] Properties to set
             * @returns {CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket} CKeyEscrow_Ticket instance
             */
            CKeyEscrow_Ticket.create = function create(properties) {
                return new CKeyEscrow_Ticket(properties);
            };
    
            /**
             * Encodes the specified CKeyEscrow_Ticket message. Does not implicitly {@link CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket.verify|verify} messages.
             * @function encode
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @static
             * @param {CMsgRemoteDeviceAuthorizationRequest.ICKeyEscrow_Ticket} message CKeyEscrow_Ticket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CKeyEscrow_Ticket.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.password != null && message.hasOwnProperty("password"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.password);
                if (message.identifier != null && message.hasOwnProperty("identifier"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.identifier);
                if (message.payload != null && message.hasOwnProperty("payload"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.timestamp);
                if (message.usage != null && message.hasOwnProperty("usage"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.usage);
                if (message.device_name != null && message.hasOwnProperty("device_name"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.device_name);
                if (message.device_model != null && message.hasOwnProperty("device_model"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.device_model);
                if (message.device_serial != null && message.hasOwnProperty("device_serial"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.device_serial);
                if (message.device_provisioning_id != null && message.hasOwnProperty("device_provisioning_id"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.device_provisioning_id);
                return writer;
            };
    
            /**
             * Encodes the specified CKeyEscrow_Ticket message, length delimited. Does not implicitly {@link CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @static
             * @param {CMsgRemoteDeviceAuthorizationRequest.ICKeyEscrow_Ticket} message CKeyEscrow_Ticket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CKeyEscrow_Ticket.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CKeyEscrow_Ticket message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket} CKeyEscrow_Ticket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CKeyEscrow_Ticket.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.password = reader.bytes();
                        break;
                    case 2:
                        message.identifier = reader.uint64();
                        break;
                    case 3:
                        message.payload = reader.bytes();
                        break;
                    case 4:
                        message.timestamp = reader.uint32();
                        break;
                    case 5:
                        message.usage = reader.int32();
                        break;
                    case 6:
                        message.device_name = reader.string();
                        break;
                    case 7:
                        message.device_model = reader.string();
                        break;
                    case 8:
                        message.device_serial = reader.string();
                        break;
                    case 9:
                        message.device_provisioning_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CKeyEscrow_Ticket message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket} CKeyEscrow_Ticket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CKeyEscrow_Ticket.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CKeyEscrow_Ticket message.
             * @function verify
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CKeyEscrow_Ticket.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!(message.password && typeof message.password.length === "number" || $util.isString(message.password)))
                        return "password: buffer expected";
                if (message.identifier != null && message.hasOwnProperty("identifier"))
                    if (!$util.isInteger(message.identifier) && !(message.identifier && $util.isInteger(message.identifier.low) && $util.isInteger(message.identifier.high)))
                        return "identifier: integer|Long expected";
                if (message.payload != null && message.hasOwnProperty("payload"))
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp))
                        return "timestamp: integer expected";
                if (message.usage != null && message.hasOwnProperty("usage"))
                    switch (message.usage) {
                    default:
                        return "usage: enum value expected";
                    case 0:
                        break;
                    }
                if (message.device_name != null && message.hasOwnProperty("device_name"))
                    if (!$util.isString(message.device_name))
                        return "device_name: string expected";
                if (message.device_model != null && message.hasOwnProperty("device_model"))
                    if (!$util.isString(message.device_model))
                        return "device_model: string expected";
                if (message.device_serial != null && message.hasOwnProperty("device_serial"))
                    if (!$util.isString(message.device_serial))
                        return "device_serial: string expected";
                if (message.device_provisioning_id != null && message.hasOwnProperty("device_provisioning_id"))
                    if (!$util.isInteger(message.device_provisioning_id))
                        return "device_provisioning_id: integer expected";
                return null;
            };
    
            /**
             * Creates a CKeyEscrow_Ticket message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket} CKeyEscrow_Ticket
             */
            CKeyEscrow_Ticket.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket)
                    return object;
                var message = new $root.CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket();
                if (object.password != null)
                    if (typeof object.password === "string")
                        $util.base64.decode(object.password, message.password = $util.newBuffer($util.base64.length(object.password)), 0);
                    else if (object.password.length)
                        message.password = object.password;
                if (object.identifier != null)
                    if ($util.Long)
                        (message.identifier = $util.Long.fromValue(object.identifier)).unsigned = true;
                    else if (typeof object.identifier === "string")
                        message.identifier = parseInt(object.identifier, 10);
                    else if (typeof object.identifier === "number")
                        message.identifier = object.identifier;
                    else if (typeof object.identifier === "object")
                        message.identifier = new $util.LongBits(object.identifier.low >>> 0, object.identifier.high >>> 0).toNumber(true);
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length)
                        message.payload = object.payload;
                if (object.timestamp != null)
                    message.timestamp = object.timestamp >>> 0;
                switch (object.usage) {
                case "k_EKeyEscrowUsageStreamingDevice":
                case 0:
                    message.usage = 0;
                    break;
                }
                if (object.device_name != null)
                    message.device_name = String(object.device_name);
                if (object.device_model != null)
                    message.device_model = String(object.device_model);
                if (object.device_serial != null)
                    message.device_serial = String(object.device_serial);
                if (object.device_provisioning_id != null)
                    message.device_provisioning_id = object.device_provisioning_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a CKeyEscrow_Ticket message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @static
             * @param {CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket} message CKeyEscrow_Ticket
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CKeyEscrow_Ticket.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.password = "";
                    else {
                        object.password = [];
                        if (options.bytes !== Array)
                            object.password = $util.newBuffer(object.password);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.identifier = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.identifier = options.longs === String ? "0" : 0;
                    if (options.bytes === String)
                        object.payload = "";
                    else {
                        object.payload = [];
                        if (options.bytes !== Array)
                            object.payload = $util.newBuffer(object.payload);
                    }
                    object.timestamp = 0;
                    object.usage = options.enums === String ? "k_EKeyEscrowUsageStreamingDevice" : 0;
                    object.device_name = "";
                    object.device_model = "";
                    object.device_serial = "";
                    object.device_provisioning_id = 0;
                }
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = options.bytes === String ? $util.base64.encode(message.password, 0, message.password.length) : options.bytes === Array ? Array.prototype.slice.call(message.password) : message.password;
                if (message.identifier != null && message.hasOwnProperty("identifier"))
                    if (typeof message.identifier === "number")
                        object.identifier = options.longs === String ? String(message.identifier) : message.identifier;
                    else
                        object.identifier = options.longs === String ? $util.Long.prototype.toString.call(message.identifier) : options.longs === Number ? new $util.LongBits(message.identifier.low >>> 0, message.identifier.high >>> 0).toNumber(true) : message.identifier;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                if (message.usage != null && message.hasOwnProperty("usage"))
                    object.usage = options.enums === String ? $root.CMsgRemoteDeviceAuthorizationRequest.EKeyEscrowUsage[message.usage] : message.usage;
                if (message.device_name != null && message.hasOwnProperty("device_name"))
                    object.device_name = message.device_name;
                if (message.device_model != null && message.hasOwnProperty("device_model"))
                    object.device_model = message.device_model;
                if (message.device_serial != null && message.hasOwnProperty("device_serial"))
                    object.device_serial = message.device_serial;
                if (message.device_provisioning_id != null && message.hasOwnProperty("device_provisioning_id"))
                    object.device_provisioning_id = message.device_provisioning_id;
                return object;
            };
    
            /**
             * Converts this CKeyEscrow_Ticket to JSON.
             * @function toJSON
             * @memberof CMsgRemoteDeviceAuthorizationRequest.CKeyEscrow_Ticket
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CKeyEscrow_Ticket.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CKeyEscrow_Ticket;
        })();
    
        /**
         * EKeyEscrowUsage enum.
         * @name CMsgRemoteDeviceAuthorizationRequest.EKeyEscrowUsage
         * @enum {string}
         * @property {number} k_EKeyEscrowUsageStreamingDevice=0 k_EKeyEscrowUsageStreamingDevice value
         */
        CMsgRemoteDeviceAuthorizationRequest.EKeyEscrowUsage = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "k_EKeyEscrowUsageStreamingDevice"] = 0;
            return values;
        })();
    
        return CMsgRemoteDeviceAuthorizationRequest;
    })();
    
    $root.CMsgRemoteDeviceAuthorizationCancelRequest = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceAuthorizationCancelRequest.
         * @exports ICMsgRemoteDeviceAuthorizationCancelRequest
         * @interface ICMsgRemoteDeviceAuthorizationCancelRequest
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceAuthorizationCancelRequest.
         * @exports CMsgRemoteDeviceAuthorizationCancelRequest
         * @classdesc Represents a CMsgRemoteDeviceAuthorizationCancelRequest.
         * @implements ICMsgRemoteDeviceAuthorizationCancelRequest
         * @constructor
         * @param {ICMsgRemoteDeviceAuthorizationCancelRequest=} [properties] Properties to set
         */
        function CMsgRemoteDeviceAuthorizationCancelRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CMsgRemoteDeviceAuthorizationCancelRequest instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationCancelRequest=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceAuthorizationCancelRequest} CMsgRemoteDeviceAuthorizationCancelRequest instance
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.create = function create(properties) {
            return new CMsgRemoteDeviceAuthorizationCancelRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceAuthorizationCancelRequest message. Does not implicitly {@link CMsgRemoteDeviceAuthorizationCancelRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationCancelRequest} message CMsgRemoteDeviceAuthorizationCancelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceAuthorizationCancelRequest message, length delimited. Does not implicitly {@link CMsgRemoteDeviceAuthorizationCancelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationCancelRequest} message CMsgRemoteDeviceAuthorizationCancelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceAuthorizationCancelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceAuthorizationCancelRequest} CMsgRemoteDeviceAuthorizationCancelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceAuthorizationCancelRequest();
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
         * Decodes a CMsgRemoteDeviceAuthorizationCancelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceAuthorizationCancelRequest} CMsgRemoteDeviceAuthorizationCancelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceAuthorizationCancelRequest message.
         * @function verify
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceAuthorizationCancelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceAuthorizationCancelRequest} CMsgRemoteDeviceAuthorizationCancelRequest
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceAuthorizationCancelRequest)
                return object;
            return new $root.CMsgRemoteDeviceAuthorizationCancelRequest();
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceAuthorizationCancelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @static
         * @param {CMsgRemoteDeviceAuthorizationCancelRequest} message CMsgRemoteDeviceAuthorizationCancelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CMsgRemoteDeviceAuthorizationCancelRequest to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceAuthorizationCancelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceAuthorizationCancelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteDeviceAuthorizationCancelRequest;
    })();
    
    $root.CMsgRemoteDeviceAuthorizationResponse = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceAuthorizationResponse.
         * @exports ICMsgRemoteDeviceAuthorizationResponse
         * @interface ICMsgRemoteDeviceAuthorizationResponse
         * @property {ERemoteDeviceAuthorizationResult} result CMsgRemoteDeviceAuthorizationResponse result
         * @property {number|Long|null} [steamid] CMsgRemoteDeviceAuthorizationResponse steamid
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceAuthorizationResponse.
         * @exports CMsgRemoteDeviceAuthorizationResponse
         * @classdesc Represents a CMsgRemoteDeviceAuthorizationResponse.
         * @implements ICMsgRemoteDeviceAuthorizationResponse
         * @constructor
         * @param {ICMsgRemoteDeviceAuthorizationResponse=} [properties] Properties to set
         */
        function CMsgRemoteDeviceAuthorizationResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteDeviceAuthorizationResponse result.
         * @member {ERemoteDeviceAuthorizationResult} result
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @instance
         */
        CMsgRemoteDeviceAuthorizationResponse.prototype.result = 0;
    
        /**
         * CMsgRemoteDeviceAuthorizationResponse steamid.
         * @member {number|Long} steamid
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @instance
         */
        CMsgRemoteDeviceAuthorizationResponse.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgRemoteDeviceAuthorizationResponse instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationResponse=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceAuthorizationResponse} CMsgRemoteDeviceAuthorizationResponse instance
         */
        CMsgRemoteDeviceAuthorizationResponse.create = function create(properties) {
            return new CMsgRemoteDeviceAuthorizationResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceAuthorizationResponse message. Does not implicitly {@link CMsgRemoteDeviceAuthorizationResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationResponse} message CMsgRemoteDeviceAuthorizationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceAuthorizationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceAuthorizationResponse message, length delimited. Does not implicitly {@link CMsgRemoteDeviceAuthorizationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @static
         * @param {ICMsgRemoteDeviceAuthorizationResponse} message CMsgRemoteDeviceAuthorizationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceAuthorizationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceAuthorizationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceAuthorizationResponse} CMsgRemoteDeviceAuthorizationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceAuthorizationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceAuthorizationResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteDeviceAuthorizationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceAuthorizationResponse} CMsgRemoteDeviceAuthorizationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceAuthorizationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceAuthorizationResponse message.
         * @function verify
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceAuthorizationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
            case 8:
                break;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceAuthorizationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceAuthorizationResponse} CMsgRemoteDeviceAuthorizationResponse
         */
        CMsgRemoteDeviceAuthorizationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceAuthorizationResponse)
                return object;
            var message = new $root.CMsgRemoteDeviceAuthorizationResponse();
            switch (object.result) {
            case "k_ERemoteDeviceAuthorizationSuccess":
            case 0:
                message.result = 0;
                break;
            case "k_ERemoteDeviceAuthorizationDenied":
            case 1:
                message.result = 1;
                break;
            case "k_ERemoteDeviceAuthorizationNotLoggedIn":
            case 2:
                message.result = 2;
                break;
            case "k_ERemoteDeviceAuthorizationOffline":
            case 3:
                message.result = 3;
                break;
            case "k_ERemoteDeviceAuthorizationBusy":
            case 4:
                message.result = 4;
                break;
            case "k_ERemoteDeviceAuthorizationInProgress":
            case 5:
                message.result = 5;
                break;
            case "k_ERemoteDeviceAuthorizationTimedOut":
            case 6:
                message.result = 6;
                break;
            case "k_ERemoteDeviceAuthorizationFailed":
            case 7:
                message.result = 7;
                break;
            case "k_ERemoteDeviceAuthorizationCanceled":
            case 8:
                message.result = 8;
                break;
            }
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceAuthorizationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @static
         * @param {CMsgRemoteDeviceAuthorizationResponse} message CMsgRemoteDeviceAuthorizationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceAuthorizationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = options.enums === String ? "k_ERemoteDeviceAuthorizationSuccess" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.ERemoteDeviceAuthorizationResult[message.result] : message.result;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteDeviceAuthorizationResponse to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceAuthorizationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceAuthorizationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteDeviceAuthorizationResponse;
    })();
    
    $root.CMsgRemoteDeviceStreamingRequest = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceStreamingRequest.
         * @exports ICMsgRemoteDeviceStreamingRequest
         * @interface ICMsgRemoteDeviceStreamingRequest
         * @property {number} request_id CMsgRemoteDeviceStreamingRequest request_id
         * @property {number|null} [maximum_resolution_x] CMsgRemoteDeviceStreamingRequest maximum_resolution_x
         * @property {number|null} [maximum_resolution_y] CMsgRemoteDeviceStreamingRequest maximum_resolution_y
         * @property {number|null} [audio_channel_count] CMsgRemoteDeviceStreamingRequest audio_channel_count
         * @property {string|null} [device_version] CMsgRemoteDeviceStreamingRequest device_version
         * @property {boolean|null} [stream_desktop] CMsgRemoteDeviceStreamingRequest stream_desktop
         * @property {Uint8Array|null} [device_token] CMsgRemoteDeviceStreamingRequest device_token
         * @property {Uint8Array|null} [pin] CMsgRemoteDeviceStreamingRequest pin
         * @property {boolean|null} [enable_video_streaming] CMsgRemoteDeviceStreamingRequest enable_video_streaming
         * @property {boolean|null} [enable_audio_streaming] CMsgRemoteDeviceStreamingRequest enable_audio_streaming
         * @property {boolean|null} [enable_input_streaming] CMsgRemoteDeviceStreamingRequest enable_input_streaming
         * @property {boolean|null} [network_test] CMsgRemoteDeviceStreamingRequest network_test
         * @property {number|Long|null} [client_id] CMsgRemoteDeviceStreamingRequest client_id
         * @property {Array.<EStreamTransport>|null} [supported_transport] CMsgRemoteDeviceStreamingRequest supported_transport
         * @property {boolean|null} [restricted] CMsgRemoteDeviceStreamingRequest restricted
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceStreamingRequest.
         * @exports CMsgRemoteDeviceStreamingRequest
         * @classdesc Represents a CMsgRemoteDeviceStreamingRequest.
         * @implements ICMsgRemoteDeviceStreamingRequest
         * @constructor
         * @param {ICMsgRemoteDeviceStreamingRequest=} [properties] Properties to set
         */
        function CMsgRemoteDeviceStreamingRequest(properties) {
            this.supported_transport = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteDeviceStreamingRequest request_id.
         * @member {number} request_id
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.request_id = 0;
    
        /**
         * CMsgRemoteDeviceStreamingRequest maximum_resolution_x.
         * @member {number} maximum_resolution_x
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.maximum_resolution_x = 0;
    
        /**
         * CMsgRemoteDeviceStreamingRequest maximum_resolution_y.
         * @member {number} maximum_resolution_y
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.maximum_resolution_y = 0;
    
        /**
         * CMsgRemoteDeviceStreamingRequest audio_channel_count.
         * @member {number} audio_channel_count
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.audio_channel_count = 2;
    
        /**
         * CMsgRemoteDeviceStreamingRequest device_version.
         * @member {string} device_version
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.device_version = "";
    
        /**
         * CMsgRemoteDeviceStreamingRequest stream_desktop.
         * @member {boolean} stream_desktop
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.stream_desktop = false;
    
        /**
         * CMsgRemoteDeviceStreamingRequest device_token.
         * @member {Uint8Array} device_token
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.device_token = $util.newBuffer([]);
    
        /**
         * CMsgRemoteDeviceStreamingRequest pin.
         * @member {Uint8Array} pin
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.pin = $util.newBuffer([]);
    
        /**
         * CMsgRemoteDeviceStreamingRequest enable_video_streaming.
         * @member {boolean} enable_video_streaming
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.enable_video_streaming = true;
    
        /**
         * CMsgRemoteDeviceStreamingRequest enable_audio_streaming.
         * @member {boolean} enable_audio_streaming
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.enable_audio_streaming = true;
    
        /**
         * CMsgRemoteDeviceStreamingRequest enable_input_streaming.
         * @member {boolean} enable_input_streaming
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.enable_input_streaming = true;
    
        /**
         * CMsgRemoteDeviceStreamingRequest network_test.
         * @member {boolean} network_test
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.network_test = false;
    
        /**
         * CMsgRemoteDeviceStreamingRequest client_id.
         * @member {number|Long} client_id
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgRemoteDeviceStreamingRequest supported_transport.
         * @member {Array.<EStreamTransport>} supported_transport
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.supported_transport = $util.emptyArray;
    
        /**
         * CMsgRemoteDeviceStreamingRequest restricted.
         * @member {boolean} restricted
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingRequest.prototype.restricted = false;
    
        /**
         * Creates a new CMsgRemoteDeviceStreamingRequest instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @static
         * @param {ICMsgRemoteDeviceStreamingRequest=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceStreamingRequest} CMsgRemoteDeviceStreamingRequest instance
         */
        CMsgRemoteDeviceStreamingRequest.create = function create(properties) {
            return new CMsgRemoteDeviceStreamingRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceStreamingRequest message. Does not implicitly {@link CMsgRemoteDeviceStreamingRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @static
         * @param {ICMsgRemoteDeviceStreamingRequest} message CMsgRemoteDeviceStreamingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceStreamingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.request_id);
            if (message.maximum_resolution_x != null && message.hasOwnProperty("maximum_resolution_x"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maximum_resolution_x);
            if (message.maximum_resolution_y != null && message.hasOwnProperty("maximum_resolution_y"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maximum_resolution_y);
            if (message.audio_channel_count != null && message.hasOwnProperty("audio_channel_count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.audio_channel_count);
            if (message.device_version != null && message.hasOwnProperty("device_version"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.device_version);
            if (message.stream_desktop != null && message.hasOwnProperty("stream_desktop"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.stream_desktop);
            if (message.device_token != null && message.hasOwnProperty("device_token"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.device_token);
            if (message.pin != null && message.hasOwnProperty("pin"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.pin);
            if (message.enable_video_streaming != null && message.hasOwnProperty("enable_video_streaming"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.enable_video_streaming);
            if (message.enable_audio_streaming != null && message.hasOwnProperty("enable_audio_streaming"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.enable_audio_streaming);
            if (message.enable_input_streaming != null && message.hasOwnProperty("enable_input_streaming"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.enable_input_streaming);
            if (message.network_test != null && message.hasOwnProperty("network_test"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.network_test);
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.client_id);
            if (message.supported_transport != null && message.supported_transport.length)
                for (var i = 0; i < message.supported_transport.length; ++i)
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.supported_transport[i]);
            if (message.restricted != null && message.hasOwnProperty("restricted"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.restricted);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceStreamingRequest message, length delimited. Does not implicitly {@link CMsgRemoteDeviceStreamingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @static
         * @param {ICMsgRemoteDeviceStreamingRequest} message CMsgRemoteDeviceStreamingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceStreamingRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceStreamingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceStreamingRequest} CMsgRemoteDeviceStreamingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceStreamingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceStreamingRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.request_id = reader.uint32();
                    break;
                case 2:
                    message.maximum_resolution_x = reader.int32();
                    break;
                case 3:
                    message.maximum_resolution_y = reader.int32();
                    break;
                case 4:
                    message.audio_channel_count = reader.int32();
                    break;
                case 5:
                    message.device_version = reader.string();
                    break;
                case 6:
                    message.stream_desktop = reader.bool();
                    break;
                case 7:
                    message.device_token = reader.bytes();
                    break;
                case 8:
                    message.pin = reader.bytes();
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
                    message.network_test = reader.bool();
                    break;
                case 13:
                    message.client_id = reader.uint64();
                    break;
                case 14:
                    if (!(message.supported_transport && message.supported_transport.length))
                        message.supported_transport = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.supported_transport.push(reader.int32());
                    } else
                        message.supported_transport.push(reader.int32());
                    break;
                case 15:
                    message.restricted = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("request_id"))
                throw $util.ProtocolError("missing required 'request_id'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteDeviceStreamingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceStreamingRequest} CMsgRemoteDeviceStreamingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceStreamingRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceStreamingRequest message.
         * @function verify
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceStreamingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.request_id))
                return "request_id: integer expected";
            if (message.maximum_resolution_x != null && message.hasOwnProperty("maximum_resolution_x"))
                if (!$util.isInteger(message.maximum_resolution_x))
                    return "maximum_resolution_x: integer expected";
            if (message.maximum_resolution_y != null && message.hasOwnProperty("maximum_resolution_y"))
                if (!$util.isInteger(message.maximum_resolution_y))
                    return "maximum_resolution_y: integer expected";
            if (message.audio_channel_count != null && message.hasOwnProperty("audio_channel_count"))
                if (!$util.isInteger(message.audio_channel_count))
                    return "audio_channel_count: integer expected";
            if (message.device_version != null && message.hasOwnProperty("device_version"))
                if (!$util.isString(message.device_version))
                    return "device_version: string expected";
            if (message.stream_desktop != null && message.hasOwnProperty("stream_desktop"))
                if (typeof message.stream_desktop !== "boolean")
                    return "stream_desktop: boolean expected";
            if (message.device_token != null && message.hasOwnProperty("device_token"))
                if (!(message.device_token && typeof message.device_token.length === "number" || $util.isString(message.device_token)))
                    return "device_token: buffer expected";
            if (message.pin != null && message.hasOwnProperty("pin"))
                if (!(message.pin && typeof message.pin.length === "number" || $util.isString(message.pin)))
                    return "pin: buffer expected";
            if (message.enable_video_streaming != null && message.hasOwnProperty("enable_video_streaming"))
                if (typeof message.enable_video_streaming !== "boolean")
                    return "enable_video_streaming: boolean expected";
            if (message.enable_audio_streaming != null && message.hasOwnProperty("enable_audio_streaming"))
                if (typeof message.enable_audio_streaming !== "boolean")
                    return "enable_audio_streaming: boolean expected";
            if (message.enable_input_streaming != null && message.hasOwnProperty("enable_input_streaming"))
                if (typeof message.enable_input_streaming !== "boolean")
                    return "enable_input_streaming: boolean expected";
            if (message.network_test != null && message.hasOwnProperty("network_test"))
                if (typeof message.network_test !== "boolean")
                    return "network_test: boolean expected";
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (!$util.isInteger(message.client_id) && !(message.client_id && $util.isInteger(message.client_id.low) && $util.isInteger(message.client_id.high)))
                    return "client_id: integer|Long expected";
            if (message.supported_transport != null && message.hasOwnProperty("supported_transport")) {
                if (!Array.isArray(message.supported_transport))
                    return "supported_transport: array expected";
                for (var i = 0; i < message.supported_transport.length; ++i)
                    switch (message.supported_transport[i]) {
                    default:
                        return "supported_transport: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
            }
            if (message.restricted != null && message.hasOwnProperty("restricted"))
                if (typeof message.restricted !== "boolean")
                    return "restricted: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceStreamingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceStreamingRequest} CMsgRemoteDeviceStreamingRequest
         */
        CMsgRemoteDeviceStreamingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceStreamingRequest)
                return object;
            var message = new $root.CMsgRemoteDeviceStreamingRequest();
            if (object.request_id != null)
                message.request_id = object.request_id >>> 0;
            if (object.maximum_resolution_x != null)
                message.maximum_resolution_x = object.maximum_resolution_x | 0;
            if (object.maximum_resolution_y != null)
                message.maximum_resolution_y = object.maximum_resolution_y | 0;
            if (object.audio_channel_count != null)
                message.audio_channel_count = object.audio_channel_count | 0;
            if (object.device_version != null)
                message.device_version = String(object.device_version);
            if (object.stream_desktop != null)
                message.stream_desktop = Boolean(object.stream_desktop);
            if (object.device_token != null)
                if (typeof object.device_token === "string")
                    $util.base64.decode(object.device_token, message.device_token = $util.newBuffer($util.base64.length(object.device_token)), 0);
                else if (object.device_token.length)
                    message.device_token = object.device_token;
            if (object.pin != null)
                if (typeof object.pin === "string")
                    $util.base64.decode(object.pin, message.pin = $util.newBuffer($util.base64.length(object.pin)), 0);
                else if (object.pin.length)
                    message.pin = object.pin;
            if (object.enable_video_streaming != null)
                message.enable_video_streaming = Boolean(object.enable_video_streaming);
            if (object.enable_audio_streaming != null)
                message.enable_audio_streaming = Boolean(object.enable_audio_streaming);
            if (object.enable_input_streaming != null)
                message.enable_input_streaming = Boolean(object.enable_input_streaming);
            if (object.network_test != null)
                message.network_test = Boolean(object.network_test);
            if (object.client_id != null)
                if ($util.Long)
                    (message.client_id = $util.Long.fromValue(object.client_id)).unsigned = true;
                else if (typeof object.client_id === "string")
                    message.client_id = parseInt(object.client_id, 10);
                else if (typeof object.client_id === "number")
                    message.client_id = object.client_id;
                else if (typeof object.client_id === "object")
                    message.client_id = new $util.LongBits(object.client_id.low >>> 0, object.client_id.high >>> 0).toNumber(true);
            if (object.supported_transport) {
                if (!Array.isArray(object.supported_transport))
                    throw TypeError(".CMsgRemoteDeviceStreamingRequest.supported_transport: array expected");
                message.supported_transport = [];
                for (var i = 0; i < object.supported_transport.length; ++i)
                    switch (object.supported_transport[i]) {
                    default:
                    case "k_EStreamTransportNone":
                    case 0:
                        message.supported_transport[i] = 0;
                        break;
                    case "k_EStreamTransportUDP":
                    case 1:
                        message.supported_transport[i] = 1;
                        break;
                    case "k_EStreamTransportUDPRelay":
                    case 2:
                        message.supported_transport[i] = 2;
                        break;
                    case "k_EStreamTransportWebRTC":
                    case 3:
                        message.supported_transport[i] = 3;
                        break;
                    }
            }
            if (object.restricted != null)
                message.restricted = Boolean(object.restricted);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceStreamingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @static
         * @param {CMsgRemoteDeviceStreamingRequest} message CMsgRemoteDeviceStreamingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceStreamingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.supported_transport = [];
            if (options.defaults) {
                object.request_id = 0;
                object.maximum_resolution_x = 0;
                object.maximum_resolution_y = 0;
                object.audio_channel_count = 2;
                object.device_version = "";
                object.stream_desktop = false;
                if (options.bytes === String)
                    object.device_token = "";
                else {
                    object.device_token = [];
                    if (options.bytes !== Array)
                        object.device_token = $util.newBuffer(object.device_token);
                }
                if (options.bytes === String)
                    object.pin = "";
                else {
                    object.pin = [];
                    if (options.bytes !== Array)
                        object.pin = $util.newBuffer(object.pin);
                }
                object.enable_video_streaming = true;
                object.enable_audio_streaming = true;
                object.enable_input_streaming = true;
                object.network_test = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_id = options.longs === String ? "0" : 0;
                object.restricted = false;
            }
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = message.request_id;
            if (message.maximum_resolution_x != null && message.hasOwnProperty("maximum_resolution_x"))
                object.maximum_resolution_x = message.maximum_resolution_x;
            if (message.maximum_resolution_y != null && message.hasOwnProperty("maximum_resolution_y"))
                object.maximum_resolution_y = message.maximum_resolution_y;
            if (message.audio_channel_count != null && message.hasOwnProperty("audio_channel_count"))
                object.audio_channel_count = message.audio_channel_count;
            if (message.device_version != null && message.hasOwnProperty("device_version"))
                object.device_version = message.device_version;
            if (message.stream_desktop != null && message.hasOwnProperty("stream_desktop"))
                object.stream_desktop = message.stream_desktop;
            if (message.device_token != null && message.hasOwnProperty("device_token"))
                object.device_token = options.bytes === String ? $util.base64.encode(message.device_token, 0, message.device_token.length) : options.bytes === Array ? Array.prototype.slice.call(message.device_token) : message.device_token;
            if (message.pin != null && message.hasOwnProperty("pin"))
                object.pin = options.bytes === String ? $util.base64.encode(message.pin, 0, message.pin.length) : options.bytes === Array ? Array.prototype.slice.call(message.pin) : message.pin;
            if (message.enable_video_streaming != null && message.hasOwnProperty("enable_video_streaming"))
                object.enable_video_streaming = message.enable_video_streaming;
            if (message.enable_audio_streaming != null && message.hasOwnProperty("enable_audio_streaming"))
                object.enable_audio_streaming = message.enable_audio_streaming;
            if (message.enable_input_streaming != null && message.hasOwnProperty("enable_input_streaming"))
                object.enable_input_streaming = message.enable_input_streaming;
            if (message.network_test != null && message.hasOwnProperty("network_test"))
                object.network_test = message.network_test;
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (typeof message.client_id === "number")
                    object.client_id = options.longs === String ? String(message.client_id) : message.client_id;
                else
                    object.client_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_id) : options.longs === Number ? new $util.LongBits(message.client_id.low >>> 0, message.client_id.high >>> 0).toNumber(true) : message.client_id;
            if (message.supported_transport && message.supported_transport.length) {
                object.supported_transport = [];
                for (var j = 0; j < message.supported_transport.length; ++j)
                    object.supported_transport[j] = options.enums === String ? $root.EStreamTransport[message.supported_transport[j]] : message.supported_transport[j];
            }
            if (message.restricted != null && message.hasOwnProperty("restricted"))
                object.restricted = message.restricted;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteDeviceStreamingRequest to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceStreamingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceStreamingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteDeviceStreamingRequest;
    })();
    
    $root.CMsgRemoteDeviceStreamingCancelRequest = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceStreamingCancelRequest.
         * @exports ICMsgRemoteDeviceStreamingCancelRequest
         * @interface ICMsgRemoteDeviceStreamingCancelRequest
         * @property {number} request_id CMsgRemoteDeviceStreamingCancelRequest request_id
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceStreamingCancelRequest.
         * @exports CMsgRemoteDeviceStreamingCancelRequest
         * @classdesc Represents a CMsgRemoteDeviceStreamingCancelRequest.
         * @implements ICMsgRemoteDeviceStreamingCancelRequest
         * @constructor
         * @param {ICMsgRemoteDeviceStreamingCancelRequest=} [properties] Properties to set
         */
        function CMsgRemoteDeviceStreamingCancelRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteDeviceStreamingCancelRequest request_id.
         * @member {number} request_id
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @instance
         */
        CMsgRemoteDeviceStreamingCancelRequest.prototype.request_id = 0;
    
        /**
         * Creates a new CMsgRemoteDeviceStreamingCancelRequest instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @static
         * @param {ICMsgRemoteDeviceStreamingCancelRequest=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceStreamingCancelRequest} CMsgRemoteDeviceStreamingCancelRequest instance
         */
        CMsgRemoteDeviceStreamingCancelRequest.create = function create(properties) {
            return new CMsgRemoteDeviceStreamingCancelRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceStreamingCancelRequest message. Does not implicitly {@link CMsgRemoteDeviceStreamingCancelRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @static
         * @param {ICMsgRemoteDeviceStreamingCancelRequest} message CMsgRemoteDeviceStreamingCancelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceStreamingCancelRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.request_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceStreamingCancelRequest message, length delimited. Does not implicitly {@link CMsgRemoteDeviceStreamingCancelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @static
         * @param {ICMsgRemoteDeviceStreamingCancelRequest} message CMsgRemoteDeviceStreamingCancelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceStreamingCancelRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceStreamingCancelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceStreamingCancelRequest} CMsgRemoteDeviceStreamingCancelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceStreamingCancelRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceStreamingCancelRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.request_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("request_id"))
                throw $util.ProtocolError("missing required 'request_id'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteDeviceStreamingCancelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceStreamingCancelRequest} CMsgRemoteDeviceStreamingCancelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceStreamingCancelRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceStreamingCancelRequest message.
         * @function verify
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceStreamingCancelRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.request_id))
                return "request_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceStreamingCancelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceStreamingCancelRequest} CMsgRemoteDeviceStreamingCancelRequest
         */
        CMsgRemoteDeviceStreamingCancelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceStreamingCancelRequest)
                return object;
            var message = new $root.CMsgRemoteDeviceStreamingCancelRequest();
            if (object.request_id != null)
                message.request_id = object.request_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceStreamingCancelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @static
         * @param {CMsgRemoteDeviceStreamingCancelRequest} message CMsgRemoteDeviceStreamingCancelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceStreamingCancelRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.request_id = 0;
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = message.request_id;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteDeviceStreamingCancelRequest to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceStreamingCancelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceStreamingCancelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteDeviceStreamingCancelRequest;
    })();
    
    $root.CMsgRemoteDeviceStreamingResponse = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceStreamingResponse.
         * @exports ICMsgRemoteDeviceStreamingResponse
         * @interface ICMsgRemoteDeviceStreamingResponse
         * @property {number} request_id CMsgRemoteDeviceStreamingResponse request_id
         * @property {ERemoteDeviceStreamingResult} result CMsgRemoteDeviceStreamingResponse result
         * @property {number|null} [port] CMsgRemoteDeviceStreamingResponse port
         * @property {Uint8Array|null} [encrypted_session_key] CMsgRemoteDeviceStreamingResponse encrypted_session_key
         * @property {EStreamTransport|null} [transport] CMsgRemoteDeviceStreamingResponse transport
         * @property {string|null} [relay_server] CMsgRemoteDeviceStreamingResponse relay_server
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceStreamingResponse.
         * @exports CMsgRemoteDeviceStreamingResponse
         * @classdesc Represents a CMsgRemoteDeviceStreamingResponse.
         * @implements ICMsgRemoteDeviceStreamingResponse
         * @constructor
         * @param {ICMsgRemoteDeviceStreamingResponse=} [properties] Properties to set
         */
        function CMsgRemoteDeviceStreamingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteDeviceStreamingResponse request_id.
         * @member {number} request_id
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @instance
         */
        CMsgRemoteDeviceStreamingResponse.prototype.request_id = 0;
    
        /**
         * CMsgRemoteDeviceStreamingResponse result.
         * @member {ERemoteDeviceStreamingResult} result
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @instance
         */
        CMsgRemoteDeviceStreamingResponse.prototype.result = 0;
    
        /**
         * CMsgRemoteDeviceStreamingResponse port.
         * @member {number} port
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @instance
         */
        CMsgRemoteDeviceStreamingResponse.prototype.port = 0;
    
        /**
         * CMsgRemoteDeviceStreamingResponse encrypted_session_key.
         * @member {Uint8Array} encrypted_session_key
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @instance
         */
        CMsgRemoteDeviceStreamingResponse.prototype.encrypted_session_key = $util.newBuffer([]);
    
        /**
         * CMsgRemoteDeviceStreamingResponse transport.
         * @member {EStreamTransport} transport
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @instance
         */
        CMsgRemoteDeviceStreamingResponse.prototype.transport = 1;
    
        /**
         * CMsgRemoteDeviceStreamingResponse relay_server.
         * @member {string} relay_server
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @instance
         */
        CMsgRemoteDeviceStreamingResponse.prototype.relay_server = "";
    
        /**
         * Creates a new CMsgRemoteDeviceStreamingResponse instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @static
         * @param {ICMsgRemoteDeviceStreamingResponse=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceStreamingResponse} CMsgRemoteDeviceStreamingResponse instance
         */
        CMsgRemoteDeviceStreamingResponse.create = function create(properties) {
            return new CMsgRemoteDeviceStreamingResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceStreamingResponse message. Does not implicitly {@link CMsgRemoteDeviceStreamingResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @static
         * @param {ICMsgRemoteDeviceStreamingResponse} message CMsgRemoteDeviceStreamingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceStreamingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.request_id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.port);
            if (message.encrypted_session_key != null && message.hasOwnProperty("encrypted_session_key"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.encrypted_session_key);
            if (message.transport != null && message.hasOwnProperty("transport"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.transport);
            if (message.relay_server != null && message.hasOwnProperty("relay_server"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.relay_server);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceStreamingResponse message, length delimited. Does not implicitly {@link CMsgRemoteDeviceStreamingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @static
         * @param {ICMsgRemoteDeviceStreamingResponse} message CMsgRemoteDeviceStreamingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceStreamingResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceStreamingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceStreamingResponse} CMsgRemoteDeviceStreamingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceStreamingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceStreamingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.request_id = reader.uint32();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.port = reader.uint32();
                    break;
                case 4:
                    message.encrypted_session_key = reader.bytes();
                    break;
                case 6:
                    message.transport = reader.int32();
                    break;
                case 7:
                    message.relay_server = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("request_id"))
                throw $util.ProtocolError("missing required 'request_id'", { instance: message });
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteDeviceStreamingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceStreamingResponse} CMsgRemoteDeviceStreamingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceStreamingResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceStreamingResponse message.
         * @function verify
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceStreamingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.request_id))
                return "request_id: integer expected";
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
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                break;
            }
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.encrypted_session_key != null && message.hasOwnProperty("encrypted_session_key"))
                if (!(message.encrypted_session_key && typeof message.encrypted_session_key.length === "number" || $util.isString(message.encrypted_session_key)))
                    return "encrypted_session_key: buffer expected";
            if (message.transport != null && message.hasOwnProperty("transport"))
                switch (message.transport) {
                default:
                    return "transport: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.relay_server != null && message.hasOwnProperty("relay_server"))
                if (!$util.isString(message.relay_server))
                    return "relay_server: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceStreamingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceStreamingResponse} CMsgRemoteDeviceStreamingResponse
         */
        CMsgRemoteDeviceStreamingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceStreamingResponse)
                return object;
            var message = new $root.CMsgRemoteDeviceStreamingResponse();
            if (object.request_id != null)
                message.request_id = object.request_id >>> 0;
            switch (object.result) {
            case "k_ERemoteDeviceStreamingSuccess":
            case 0:
                message.result = 0;
                break;
            case "k_ERemoteDeviceStreamingUnauthorized":
            case 1:
                message.result = 1;
                break;
            case "k_ERemoteDeviceStreamingScreenLocked":
            case 2:
                message.result = 2;
                break;
            case "k_ERemoteDeviceStreamingFailed":
            case 3:
                message.result = 3;
                break;
            case "k_ERemoteDeviceStreamingBusy":
            case 4:
                message.result = 4;
                break;
            case "k_ERemoteDeviceStreamingInProgress":
            case 5:
                message.result = 5;
                break;
            case "k_ERemoteDeviceStreamingCanceled":
            case 6:
                message.result = 6;
                break;
            case "k_ERemoteDeviceStreamingDriversNotInstalled":
            case 7:
                message.result = 7;
                break;
            case "k_ERemoteDeviceStreamingDisabled":
            case 8:
                message.result = 8;
                break;
            case "k_ERemoteDeviceStreamingBroadcastingActive":
            case 9:
                message.result = 9;
                break;
            case "k_ERemoteDeviceStreamingVRActive":
            case 10:
                message.result = 10;
                break;
            case "k_ERemoteDeviceStreamingPINRequired":
            case 11:
                message.result = 11;
                break;
            case "k_ERemoteDeviceStreamingTransportUnavailable":
            case 12:
                message.result = 12;
                break;
            }
            if (object.port != null)
                message.port = object.port >>> 0;
            if (object.encrypted_session_key != null)
                if (typeof object.encrypted_session_key === "string")
                    $util.base64.decode(object.encrypted_session_key, message.encrypted_session_key = $util.newBuffer($util.base64.length(object.encrypted_session_key)), 0);
                else if (object.encrypted_session_key.length)
                    message.encrypted_session_key = object.encrypted_session_key;
            switch (object.transport) {
            case "k_EStreamTransportNone":
            case 0:
                message.transport = 0;
                break;
            case "k_EStreamTransportUDP":
            case 1:
                message.transport = 1;
                break;
            case "k_EStreamTransportUDPRelay":
            case 2:
                message.transport = 2;
                break;
            case "k_EStreamTransportWebRTC":
            case 3:
                message.transport = 3;
                break;
            }
            if (object.relay_server != null)
                message.relay_server = String(object.relay_server);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceStreamingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @static
         * @param {CMsgRemoteDeviceStreamingResponse} message CMsgRemoteDeviceStreamingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceStreamingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.request_id = 0;
                object.result = options.enums === String ? "k_ERemoteDeviceStreamingSuccess" : 0;
                object.port = 0;
                if (options.bytes === String)
                    object.encrypted_session_key = "";
                else {
                    object.encrypted_session_key = [];
                    if (options.bytes !== Array)
                        object.encrypted_session_key = $util.newBuffer(object.encrypted_session_key);
                }
                object.transport = options.enums === String ? "k_EStreamTransportUDP" : 1;
                object.relay_server = "";
            }
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = message.request_id;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.ERemoteDeviceStreamingResult[message.result] : message.result;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.encrypted_session_key != null && message.hasOwnProperty("encrypted_session_key"))
                object.encrypted_session_key = options.bytes === String ? $util.base64.encode(message.encrypted_session_key, 0, message.encrypted_session_key.length) : options.bytes === Array ? Array.prototype.slice.call(message.encrypted_session_key) : message.encrypted_session_key;
            if (message.transport != null && message.hasOwnProperty("transport"))
                object.transport = options.enums === String ? $root.EStreamTransport[message.transport] : message.transport;
            if (message.relay_server != null && message.hasOwnProperty("relay_server"))
                object.relay_server = message.relay_server;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteDeviceStreamingResponse to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceStreamingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceStreamingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteDeviceStreamingResponse;
    })();
    
    $root.CMsgRemoteDeviceProofRequest = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceProofRequest.
         * @exports ICMsgRemoteDeviceProofRequest
         * @interface ICMsgRemoteDeviceProofRequest
         * @property {Uint8Array} challenge CMsgRemoteDeviceProofRequest challenge
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceProofRequest.
         * @exports CMsgRemoteDeviceProofRequest
         * @classdesc Represents a CMsgRemoteDeviceProofRequest.
         * @implements ICMsgRemoteDeviceProofRequest
         * @constructor
         * @param {ICMsgRemoteDeviceProofRequest=} [properties] Properties to set
         */
        function CMsgRemoteDeviceProofRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteDeviceProofRequest challenge.
         * @member {Uint8Array} challenge
         * @memberof CMsgRemoteDeviceProofRequest
         * @instance
         */
        CMsgRemoteDeviceProofRequest.prototype.challenge = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgRemoteDeviceProofRequest instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceProofRequest
         * @static
         * @param {ICMsgRemoteDeviceProofRequest=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceProofRequest} CMsgRemoteDeviceProofRequest instance
         */
        CMsgRemoteDeviceProofRequest.create = function create(properties) {
            return new CMsgRemoteDeviceProofRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceProofRequest message. Does not implicitly {@link CMsgRemoteDeviceProofRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceProofRequest
         * @static
         * @param {ICMsgRemoteDeviceProofRequest} message CMsgRemoteDeviceProofRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceProofRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.challenge);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceProofRequest message, length delimited. Does not implicitly {@link CMsgRemoteDeviceProofRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceProofRequest
         * @static
         * @param {ICMsgRemoteDeviceProofRequest} message CMsgRemoteDeviceProofRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceProofRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceProofRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceProofRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceProofRequest} CMsgRemoteDeviceProofRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceProofRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceProofRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.challenge = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("challenge"))
                throw $util.ProtocolError("missing required 'challenge'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteDeviceProofRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceProofRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceProofRequest} CMsgRemoteDeviceProofRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceProofRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceProofRequest message.
         * @function verify
         * @memberof CMsgRemoteDeviceProofRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceProofRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.challenge && typeof message.challenge.length === "number" || $util.isString(message.challenge)))
                return "challenge: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceProofRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceProofRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceProofRequest} CMsgRemoteDeviceProofRequest
         */
        CMsgRemoteDeviceProofRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceProofRequest)
                return object;
            var message = new $root.CMsgRemoteDeviceProofRequest();
            if (object.challenge != null)
                if (typeof object.challenge === "string")
                    $util.base64.decode(object.challenge, message.challenge = $util.newBuffer($util.base64.length(object.challenge)), 0);
                else if (object.challenge.length)
                    message.challenge = object.challenge;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceProofRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceProofRequest
         * @static
         * @param {CMsgRemoteDeviceProofRequest} message CMsgRemoteDeviceProofRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceProofRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.challenge = "";
                else {
                    object.challenge = [];
                    if (options.bytes !== Array)
                        object.challenge = $util.newBuffer(object.challenge);
                }
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                object.challenge = options.bytes === String ? $util.base64.encode(message.challenge, 0, message.challenge.length) : options.bytes === Array ? Array.prototype.slice.call(message.challenge) : message.challenge;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteDeviceProofRequest to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceProofRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceProofRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteDeviceProofRequest;
    })();
    
    $root.CMsgRemoteDeviceProofResponse = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceProofResponse.
         * @exports ICMsgRemoteDeviceProofResponse
         * @interface ICMsgRemoteDeviceProofResponse
         * @property {Uint8Array} response CMsgRemoteDeviceProofResponse response
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceProofResponse.
         * @exports CMsgRemoteDeviceProofResponse
         * @classdesc Represents a CMsgRemoteDeviceProofResponse.
         * @implements ICMsgRemoteDeviceProofResponse
         * @constructor
         * @param {ICMsgRemoteDeviceProofResponse=} [properties] Properties to set
         */
        function CMsgRemoteDeviceProofResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteDeviceProofResponse response.
         * @member {Uint8Array} response
         * @memberof CMsgRemoteDeviceProofResponse
         * @instance
         */
        CMsgRemoteDeviceProofResponse.prototype.response = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgRemoteDeviceProofResponse instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceProofResponse
         * @static
         * @param {ICMsgRemoteDeviceProofResponse=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceProofResponse} CMsgRemoteDeviceProofResponse instance
         */
        CMsgRemoteDeviceProofResponse.create = function create(properties) {
            return new CMsgRemoteDeviceProofResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceProofResponse message. Does not implicitly {@link CMsgRemoteDeviceProofResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceProofResponse
         * @static
         * @param {ICMsgRemoteDeviceProofResponse} message CMsgRemoteDeviceProofResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceProofResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.response);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceProofResponse message, length delimited. Does not implicitly {@link CMsgRemoteDeviceProofResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceProofResponse
         * @static
         * @param {ICMsgRemoteDeviceProofResponse} message CMsgRemoteDeviceProofResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceProofResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceProofResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceProofResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceProofResponse} CMsgRemoteDeviceProofResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceProofResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceProofResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.response = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("response"))
                throw $util.ProtocolError("missing required 'response'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteDeviceProofResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceProofResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceProofResponse} CMsgRemoteDeviceProofResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceProofResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceProofResponse message.
         * @function verify
         * @memberof CMsgRemoteDeviceProofResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceProofResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.response && typeof message.response.length === "number" || $util.isString(message.response)))
                return "response: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceProofResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceProofResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceProofResponse} CMsgRemoteDeviceProofResponse
         */
        CMsgRemoteDeviceProofResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceProofResponse)
                return object;
            var message = new $root.CMsgRemoteDeviceProofResponse();
            if (object.response != null)
                if (typeof object.response === "string")
                    $util.base64.decode(object.response, message.response = $util.newBuffer($util.base64.length(object.response)), 0);
                else if (object.response.length)
                    message.response = object.response;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceProofResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceProofResponse
         * @static
         * @param {CMsgRemoteDeviceProofResponse} message CMsgRemoteDeviceProofResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceProofResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.response = "";
                else {
                    object.response = [];
                    if (options.bytes !== Array)
                        object.response = $util.newBuffer(object.response);
                }
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = options.bytes === String ? $util.base64.encode(message.response, 0, message.response.length) : options.bytes === Array ? Array.prototype.slice.call(message.response) : message.response;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteDeviceProofResponse to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceProofResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceProofResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteDeviceProofResponse;
    })();
    
    $root.CMsgRemoteDeviceStreamTransportSignal = (function() {
    
        /**
         * Properties of a CMsgRemoteDeviceStreamTransportSignal.
         * @exports ICMsgRemoteDeviceStreamTransportSignal
         * @interface ICMsgRemoteDeviceStreamTransportSignal
         * @property {Uint8Array|null} [token] CMsgRemoteDeviceStreamTransportSignal token
         * @property {Uint8Array|null} [payload] CMsgRemoteDeviceStreamTransportSignal payload
         */
    
        /**
         * Constructs a new CMsgRemoteDeviceStreamTransportSignal.
         * @exports CMsgRemoteDeviceStreamTransportSignal
         * @classdesc Represents a CMsgRemoteDeviceStreamTransportSignal.
         * @implements ICMsgRemoteDeviceStreamTransportSignal
         * @constructor
         * @param {ICMsgRemoteDeviceStreamTransportSignal=} [properties] Properties to set
         */
        function CMsgRemoteDeviceStreamTransportSignal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgRemoteDeviceStreamTransportSignal token.
         * @member {Uint8Array} token
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @instance
         */
        CMsgRemoteDeviceStreamTransportSignal.prototype.token = $util.newBuffer([]);
    
        /**
         * CMsgRemoteDeviceStreamTransportSignal payload.
         * @member {Uint8Array} payload
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @instance
         */
        CMsgRemoteDeviceStreamTransportSignal.prototype.payload = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgRemoteDeviceStreamTransportSignal instance using the specified properties.
         * @function create
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @static
         * @param {ICMsgRemoteDeviceStreamTransportSignal=} [properties] Properties to set
         * @returns {CMsgRemoteDeviceStreamTransportSignal} CMsgRemoteDeviceStreamTransportSignal instance
         */
        CMsgRemoteDeviceStreamTransportSignal.create = function create(properties) {
            return new CMsgRemoteDeviceStreamTransportSignal(properties);
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceStreamTransportSignal message. Does not implicitly {@link CMsgRemoteDeviceStreamTransportSignal.verify|verify} messages.
         * @function encode
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @static
         * @param {ICMsgRemoteDeviceStreamTransportSignal} message CMsgRemoteDeviceStreamTransportSignal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceStreamTransportSignal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.token);
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgRemoteDeviceStreamTransportSignal message, length delimited. Does not implicitly {@link CMsgRemoteDeviceStreamTransportSignal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @static
         * @param {ICMsgRemoteDeviceStreamTransportSignal} message CMsgRemoteDeviceStreamTransportSignal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgRemoteDeviceStreamTransportSignal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgRemoteDeviceStreamTransportSignal message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgRemoteDeviceStreamTransportSignal} CMsgRemoteDeviceStreamTransportSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceStreamTransportSignal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgRemoteDeviceStreamTransportSignal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.bytes();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgRemoteDeviceStreamTransportSignal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgRemoteDeviceStreamTransportSignal} CMsgRemoteDeviceStreamTransportSignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgRemoteDeviceStreamTransportSignal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgRemoteDeviceStreamTransportSignal message.
         * @function verify
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgRemoteDeviceStreamTransportSignal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgRemoteDeviceStreamTransportSignal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgRemoteDeviceStreamTransportSignal} CMsgRemoteDeviceStreamTransportSignal
         */
        CMsgRemoteDeviceStreamTransportSignal.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgRemoteDeviceStreamTransportSignal)
                return object;
            var message = new $root.CMsgRemoteDeviceStreamTransportSignal();
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length)
                    message.token = object.token;
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgRemoteDeviceStreamTransportSignal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @static
         * @param {CMsgRemoteDeviceStreamTransportSignal} message CMsgRemoteDeviceStreamTransportSignal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgRemoteDeviceStreamTransportSignal.toObject = function toObject(message, options) {
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
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };
    
        /**
         * Converts this CMsgRemoteDeviceStreamTransportSignal to JSON.
         * @function toJSON
         * @memberof CMsgRemoteDeviceStreamTransportSignal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgRemoteDeviceStreamTransportSignal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgRemoteDeviceStreamTransportSignal;
    })();

    return $root;
});
