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
     * ESteamNetworkingUDPMsgID enum.
     * @exports ESteamNetworkingUDPMsgID
     * @enum {string}
     * @property {number} k_ESteamNetworkingUDPMsg_ChallengeRequest=32 k_ESteamNetworkingUDPMsg_ChallengeRequest value
     * @property {number} k_ESteamNetworkingUDPMsg_ChallengeReply=33 k_ESteamNetworkingUDPMsg_ChallengeReply value
     * @property {number} k_ESteamNetworkingUDPMsg_ConnectRequest=34 k_ESteamNetworkingUDPMsg_ConnectRequest value
     * @property {number} k_ESteamNetworkingUDPMsg_ConnectOK=35 k_ESteamNetworkingUDPMsg_ConnectOK value
     * @property {number} k_ESteamNetworkingUDPMsg_ConnectionClosed=36 k_ESteamNetworkingUDPMsg_ConnectionClosed value
     * @property {number} k_ESteamNetworkingUDPMsg_NoConnection=37 k_ESteamNetworkingUDPMsg_NoConnection value
     */
    $root.ESteamNetworkingUDPMsgID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[32] = "k_ESteamNetworkingUDPMsg_ChallengeRequest"] = 32;
        values[valuesById[33] = "k_ESteamNetworkingUDPMsg_ChallengeReply"] = 33;
        values[valuesById[34] = "k_ESteamNetworkingUDPMsg_ConnectRequest"] = 34;
        values[valuesById[35] = "k_ESteamNetworkingUDPMsg_ConnectOK"] = 35;
        values[valuesById[36] = "k_ESteamNetworkingUDPMsg_ConnectionClosed"] = 36;
        values[valuesById[37] = "k_ESteamNetworkingUDPMsg_NoConnection"] = 37;
        return values;
    })();
    
    $root.CMsgSteamSockets_UDP_ChallengeRequest = (function() {
    
        /**
         * Properties of a CMsgSteamSockets_UDP_ChallengeRequest.
         * @exports ICMsgSteamSockets_UDP_ChallengeRequest
         * @interface ICMsgSteamSockets_UDP_ChallengeRequest
         * @property {number|null} [connection_id] CMsgSteamSockets_UDP_ChallengeRequest connection_id
         * @property {number|Long|null} [my_timestamp] CMsgSteamSockets_UDP_ChallengeRequest my_timestamp
         * @property {number|null} [protocol_version] CMsgSteamSockets_UDP_ChallengeRequest protocol_version
         */
    
        /**
         * Constructs a new CMsgSteamSockets_UDP_ChallengeRequest.
         * @exports CMsgSteamSockets_UDP_ChallengeRequest
         * @classdesc Represents a CMsgSteamSockets_UDP_ChallengeRequest.
         * @implements ICMsgSteamSockets_UDP_ChallengeRequest
         * @constructor
         * @param {ICMsgSteamSockets_UDP_ChallengeRequest=} [properties] Properties to set
         */
        function CMsgSteamSockets_UDP_ChallengeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamSockets_UDP_ChallengeRequest connection_id.
         * @member {number} connection_id
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ChallengeRequest.prototype.connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_ChallengeRequest my_timestamp.
         * @member {number|Long} my_timestamp
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ChallengeRequest.prototype.my_timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamSockets_UDP_ChallengeRequest protocol_version.
         * @member {number} protocol_version
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ChallengeRequest.prototype.protocol_version = 0;
    
        /**
         * Creates a new CMsgSteamSockets_UDP_ChallengeRequest instance using the specified properties.
         * @function create
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @static
         * @param {ICMsgSteamSockets_UDP_ChallengeRequest=} [properties] Properties to set
         * @returns {CMsgSteamSockets_UDP_ChallengeRequest} CMsgSteamSockets_UDP_ChallengeRequest instance
         */
        CMsgSteamSockets_UDP_ChallengeRequest.create = function create(properties) {
            return new CMsgSteamSockets_UDP_ChallengeRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ChallengeRequest message. Does not implicitly {@link CMsgSteamSockets_UDP_ChallengeRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @static
         * @param {ICMsgSteamSockets_UDP_ChallengeRequest} message CMsgSteamSockets_UDP_ChallengeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ChallengeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connection_id != null && message.hasOwnProperty("connection_id"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.connection_id);
            if (message.my_timestamp != null && message.hasOwnProperty("my_timestamp"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.my_timestamp);
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.protocol_version);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ChallengeRequest message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ChallengeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @static
         * @param {ICMsgSteamSockets_UDP_ChallengeRequest} message CMsgSteamSockets_UDP_ChallengeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ChallengeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ChallengeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamSockets_UDP_ChallengeRequest} CMsgSteamSockets_UDP_ChallengeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ChallengeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamSockets_UDP_ChallengeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.fixed32();
                    break;
                case 3:
                    message.my_timestamp = reader.fixed64();
                    break;
                case 4:
                    message.protocol_version = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ChallengeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamSockets_UDP_ChallengeRequest} CMsgSteamSockets_UDP_ChallengeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ChallengeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamSockets_UDP_ChallengeRequest message.
         * @function verify
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamSockets_UDP_ChallengeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connection_id != null && message.hasOwnProperty("connection_id"))
                if (!$util.isInteger(message.connection_id))
                    return "connection_id: integer expected";
            if (message.my_timestamp != null && message.hasOwnProperty("my_timestamp"))
                if (!$util.isInteger(message.my_timestamp) && !(message.my_timestamp && $util.isInteger(message.my_timestamp.low) && $util.isInteger(message.my_timestamp.high)))
                    return "my_timestamp: integer|Long expected";
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                if (!$util.isInteger(message.protocol_version))
                    return "protocol_version: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamSockets_UDP_ChallengeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamSockets_UDP_ChallengeRequest} CMsgSteamSockets_UDP_ChallengeRequest
         */
        CMsgSteamSockets_UDP_ChallengeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamSockets_UDP_ChallengeRequest)
                return object;
            var message = new $root.CMsgSteamSockets_UDP_ChallengeRequest();
            if (object.connection_id != null)
                message.connection_id = object.connection_id >>> 0;
            if (object.my_timestamp != null)
                if ($util.Long)
                    (message.my_timestamp = $util.Long.fromValue(object.my_timestamp)).unsigned = false;
                else if (typeof object.my_timestamp === "string")
                    message.my_timestamp = parseInt(object.my_timestamp, 10);
                else if (typeof object.my_timestamp === "number")
                    message.my_timestamp = object.my_timestamp;
                else if (typeof object.my_timestamp === "object")
                    message.my_timestamp = new $util.LongBits(object.my_timestamp.low >>> 0, object.my_timestamp.high >>> 0).toNumber();
            if (object.protocol_version != null)
                message.protocol_version = object.protocol_version >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamSockets_UDP_ChallengeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @static
         * @param {CMsgSteamSockets_UDP_ChallengeRequest} message CMsgSteamSockets_UDP_ChallengeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamSockets_UDP_ChallengeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.connection_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.my_timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.my_timestamp = options.longs === String ? "0" : 0;
                object.protocol_version = 0;
            }
            if (message.connection_id != null && message.hasOwnProperty("connection_id"))
                object.connection_id = message.connection_id;
            if (message.my_timestamp != null && message.hasOwnProperty("my_timestamp"))
                if (typeof message.my_timestamp === "number")
                    object.my_timestamp = options.longs === String ? String(message.my_timestamp) : message.my_timestamp;
                else
                    object.my_timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.my_timestamp) : options.longs === Number ? new $util.LongBits(message.my_timestamp.low >>> 0, message.my_timestamp.high >>> 0).toNumber() : message.my_timestamp;
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                object.protocol_version = message.protocol_version;
            return object;
        };
    
        /**
         * Converts this CMsgSteamSockets_UDP_ChallengeRequest to JSON.
         * @function toJSON
         * @memberof CMsgSteamSockets_UDP_ChallengeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamSockets_UDP_ChallengeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamSockets_UDP_ChallengeRequest;
    })();
    
    $root.CMsgSteamSockets_UDP_ChallengeReply = (function() {
    
        /**
         * Properties of a CMsgSteamSockets_UDP_ChallengeReply.
         * @exports ICMsgSteamSockets_UDP_ChallengeReply
         * @interface ICMsgSteamSockets_UDP_ChallengeReply
         * @property {number|null} [connection_id] CMsgSteamSockets_UDP_ChallengeReply connection_id
         * @property {number|Long|null} [challenge] CMsgSteamSockets_UDP_ChallengeReply challenge
         * @property {number|Long|null} [your_timestamp] CMsgSteamSockets_UDP_ChallengeReply your_timestamp
         * @property {number|null} [protocol_version] CMsgSteamSockets_UDP_ChallengeReply protocol_version
         */
    
        /**
         * Constructs a new CMsgSteamSockets_UDP_ChallengeReply.
         * @exports CMsgSteamSockets_UDP_ChallengeReply
         * @classdesc Represents a CMsgSteamSockets_UDP_ChallengeReply.
         * @implements ICMsgSteamSockets_UDP_ChallengeReply
         * @constructor
         * @param {ICMsgSteamSockets_UDP_ChallengeReply=} [properties] Properties to set
         */
        function CMsgSteamSockets_UDP_ChallengeReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamSockets_UDP_ChallengeReply connection_id.
         * @member {number} connection_id
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @instance
         */
        CMsgSteamSockets_UDP_ChallengeReply.prototype.connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_ChallengeReply challenge.
         * @member {number|Long} challenge
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @instance
         */
        CMsgSteamSockets_UDP_ChallengeReply.prototype.challenge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamSockets_UDP_ChallengeReply your_timestamp.
         * @member {number|Long} your_timestamp
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @instance
         */
        CMsgSteamSockets_UDP_ChallengeReply.prototype.your_timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamSockets_UDP_ChallengeReply protocol_version.
         * @member {number} protocol_version
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @instance
         */
        CMsgSteamSockets_UDP_ChallengeReply.prototype.protocol_version = 0;
    
        /**
         * Creates a new CMsgSteamSockets_UDP_ChallengeReply instance using the specified properties.
         * @function create
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @static
         * @param {ICMsgSteamSockets_UDP_ChallengeReply=} [properties] Properties to set
         * @returns {CMsgSteamSockets_UDP_ChallengeReply} CMsgSteamSockets_UDP_ChallengeReply instance
         */
        CMsgSteamSockets_UDP_ChallengeReply.create = function create(properties) {
            return new CMsgSteamSockets_UDP_ChallengeReply(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ChallengeReply message. Does not implicitly {@link CMsgSteamSockets_UDP_ChallengeReply.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @static
         * @param {ICMsgSteamSockets_UDP_ChallengeReply} message CMsgSteamSockets_UDP_ChallengeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ChallengeReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connection_id != null && message.hasOwnProperty("connection_id"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.connection_id);
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.challenge);
            if (message.your_timestamp != null && message.hasOwnProperty("your_timestamp"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.your_timestamp);
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.protocol_version);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ChallengeReply message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ChallengeReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @static
         * @param {ICMsgSteamSockets_UDP_ChallengeReply} message CMsgSteamSockets_UDP_ChallengeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ChallengeReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ChallengeReply message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamSockets_UDP_ChallengeReply} CMsgSteamSockets_UDP_ChallengeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ChallengeReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamSockets_UDP_ChallengeReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.fixed32();
                    break;
                case 2:
                    message.challenge = reader.fixed64();
                    break;
                case 3:
                    message.your_timestamp = reader.fixed64();
                    break;
                case 4:
                    message.protocol_version = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ChallengeReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamSockets_UDP_ChallengeReply} CMsgSteamSockets_UDP_ChallengeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ChallengeReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamSockets_UDP_ChallengeReply message.
         * @function verify
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamSockets_UDP_ChallengeReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connection_id != null && message.hasOwnProperty("connection_id"))
                if (!$util.isInteger(message.connection_id))
                    return "connection_id: integer expected";
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (!$util.isInteger(message.challenge) && !(message.challenge && $util.isInteger(message.challenge.low) && $util.isInteger(message.challenge.high)))
                    return "challenge: integer|Long expected";
            if (message.your_timestamp != null && message.hasOwnProperty("your_timestamp"))
                if (!$util.isInteger(message.your_timestamp) && !(message.your_timestamp && $util.isInteger(message.your_timestamp.low) && $util.isInteger(message.your_timestamp.high)))
                    return "your_timestamp: integer|Long expected";
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                if (!$util.isInteger(message.protocol_version))
                    return "protocol_version: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamSockets_UDP_ChallengeReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamSockets_UDP_ChallengeReply} CMsgSteamSockets_UDP_ChallengeReply
         */
        CMsgSteamSockets_UDP_ChallengeReply.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamSockets_UDP_ChallengeReply)
                return object;
            var message = new $root.CMsgSteamSockets_UDP_ChallengeReply();
            if (object.connection_id != null)
                message.connection_id = object.connection_id >>> 0;
            if (object.challenge != null)
                if ($util.Long)
                    (message.challenge = $util.Long.fromValue(object.challenge)).unsigned = false;
                else if (typeof object.challenge === "string")
                    message.challenge = parseInt(object.challenge, 10);
                else if (typeof object.challenge === "number")
                    message.challenge = object.challenge;
                else if (typeof object.challenge === "object")
                    message.challenge = new $util.LongBits(object.challenge.low >>> 0, object.challenge.high >>> 0).toNumber();
            if (object.your_timestamp != null)
                if ($util.Long)
                    (message.your_timestamp = $util.Long.fromValue(object.your_timestamp)).unsigned = false;
                else if (typeof object.your_timestamp === "string")
                    message.your_timestamp = parseInt(object.your_timestamp, 10);
                else if (typeof object.your_timestamp === "number")
                    message.your_timestamp = object.your_timestamp;
                else if (typeof object.your_timestamp === "object")
                    message.your_timestamp = new $util.LongBits(object.your_timestamp.low >>> 0, object.your_timestamp.high >>> 0).toNumber();
            if (object.protocol_version != null)
                message.protocol_version = object.protocol_version >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamSockets_UDP_ChallengeReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @static
         * @param {CMsgSteamSockets_UDP_ChallengeReply} message CMsgSteamSockets_UDP_ChallengeReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamSockets_UDP_ChallengeReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.connection_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.challenge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.challenge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.your_timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.your_timestamp = options.longs === String ? "0" : 0;
                object.protocol_version = 0;
            }
            if (message.connection_id != null && message.hasOwnProperty("connection_id"))
                object.connection_id = message.connection_id;
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (typeof message.challenge === "number")
                    object.challenge = options.longs === String ? String(message.challenge) : message.challenge;
                else
                    object.challenge = options.longs === String ? $util.Long.prototype.toString.call(message.challenge) : options.longs === Number ? new $util.LongBits(message.challenge.low >>> 0, message.challenge.high >>> 0).toNumber() : message.challenge;
            if (message.your_timestamp != null && message.hasOwnProperty("your_timestamp"))
                if (typeof message.your_timestamp === "number")
                    object.your_timestamp = options.longs === String ? String(message.your_timestamp) : message.your_timestamp;
                else
                    object.your_timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.your_timestamp) : options.longs === Number ? new $util.LongBits(message.your_timestamp.low >>> 0, message.your_timestamp.high >>> 0).toNumber() : message.your_timestamp;
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                object.protocol_version = message.protocol_version;
            return object;
        };
    
        /**
         * Converts this CMsgSteamSockets_UDP_ChallengeReply to JSON.
         * @function toJSON
         * @memberof CMsgSteamSockets_UDP_ChallengeReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamSockets_UDP_ChallengeReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamSockets_UDP_ChallengeReply;
    })();
    
    $root.CMsgSteamSockets_UDP_ConnectRequest = (function() {
    
        /**
         * Properties of a CMsgSteamSockets_UDP_ConnectRequest.
         * @exports ICMsgSteamSockets_UDP_ConnectRequest
         * @interface ICMsgSteamSockets_UDP_ConnectRequest
         * @property {number|null} [client_connection_id] CMsgSteamSockets_UDP_ConnectRequest client_connection_id
         * @property {number|Long|null} [challenge] CMsgSteamSockets_UDP_ConnectRequest challenge
         * @property {number|Long|null} [my_timestamp] CMsgSteamSockets_UDP_ConnectRequest my_timestamp
         * @property {number|null} [ping_est_ms] CMsgSteamSockets_UDP_ConnectRequest ping_est_ms
         * @property {ICMsgSteamDatagramSessionCryptInfoSigned|null} [crypt] CMsgSteamSockets_UDP_ConnectRequest crypt
         * @property {ICMsgSteamDatagramCertificateSigned|null} [cert] CMsgSteamSockets_UDP_ConnectRequest cert
         * @property {number|null} [legacy_protocol_version] CMsgSteamSockets_UDP_ConnectRequest legacy_protocol_version
         * @property {string|null} [identity_string] CMsgSteamSockets_UDP_ConnectRequest identity_string
         * @property {number|Long|null} [legacy_client_steam_id] CMsgSteamSockets_UDP_ConnectRequest legacy_client_steam_id
         * @property {ICMsgSteamNetworkingIdentityLegacyBinary|null} [legacy_identity_binary] CMsgSteamSockets_UDP_ConnectRequest legacy_identity_binary
         */
    
        /**
         * Constructs a new CMsgSteamSockets_UDP_ConnectRequest.
         * @exports CMsgSteamSockets_UDP_ConnectRequest
         * @classdesc Represents a CMsgSteamSockets_UDP_ConnectRequest.
         * @implements ICMsgSteamSockets_UDP_ConnectRequest
         * @constructor
         * @param {ICMsgSteamSockets_UDP_ConnectRequest=} [properties] Properties to set
         */
        function CMsgSteamSockets_UDP_ConnectRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest client_connection_id.
         * @member {number} client_connection_id
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.client_connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest challenge.
         * @member {number|Long} challenge
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.challenge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest my_timestamp.
         * @member {number|Long} my_timestamp
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.my_timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest ping_est_ms.
         * @member {number} ping_est_ms
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.ping_est_ms = 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest crypt.
         * @member {ICMsgSteamDatagramSessionCryptInfoSigned|null|undefined} crypt
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.crypt = null;
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest cert.
         * @member {ICMsgSteamDatagramCertificateSigned|null|undefined} cert
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.cert = null;
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest legacy_protocol_version.
         * @member {number} legacy_protocol_version
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.legacy_protocol_version = 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest identity_string.
         * @member {string} identity_string
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.identity_string = "";
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest legacy_client_steam_id.
         * @member {number|Long} legacy_client_steam_id
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.legacy_client_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectRequest legacy_identity_binary.
         * @member {ICMsgSteamNetworkingIdentityLegacyBinary|null|undefined} legacy_identity_binary
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.legacy_identity_binary = null;
    
        /**
         * Creates a new CMsgSteamSockets_UDP_ConnectRequest instance using the specified properties.
         * @function create
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectRequest=} [properties] Properties to set
         * @returns {CMsgSteamSockets_UDP_ConnectRequest} CMsgSteamSockets_UDP_ConnectRequest instance
         */
        CMsgSteamSockets_UDP_ConnectRequest.create = function create(properties) {
            return new CMsgSteamSockets_UDP_ConnectRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ConnectRequest message. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectRequest} message CMsgSteamSockets_UDP_ConnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ConnectRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_connection_id != null && message.hasOwnProperty("client_connection_id"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.client_connection_id);
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.challenge);
            if (message.legacy_client_steam_id != null && message.hasOwnProperty("legacy_client_steam_id"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.legacy_client_steam_id);
            if (message.cert != null && message.hasOwnProperty("cert"))
                $root.CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.my_timestamp != null && message.hasOwnProperty("my_timestamp"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.my_timestamp);
            if (message.ping_est_ms != null && message.hasOwnProperty("ping_est_ms"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.ping_est_ms);
            if (message.crypt != null && message.hasOwnProperty("crypt"))
                $root.CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.legacy_protocol_version != null && message.hasOwnProperty("legacy_protocol_version"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.legacy_protocol_version);
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                $root.CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacy_identity_binary, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.identity_string);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ConnectRequest message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectRequest} message CMsgSteamSockets_UDP_ConnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ConnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ConnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamSockets_UDP_ConnectRequest} CMsgSteamSockets_UDP_ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ConnectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamSockets_UDP_ConnectRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_connection_id = reader.fixed32();
                    break;
                case 2:
                    message.challenge = reader.fixed64();
                    break;
                case 5:
                    message.my_timestamp = reader.fixed64();
                    break;
                case 6:
                    message.ping_est_ms = reader.uint32();
                    break;
                case 7:
                    message.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.cert = $root.CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.legacy_protocol_version = reader.uint32();
                    break;
                case 10:
                    message.identity_string = reader.string();
                    break;
                case 3:
                    message.legacy_client_steam_id = reader.fixed64();
                    break;
                case 9:
                    message.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ConnectRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamSockets_UDP_ConnectRequest} CMsgSteamSockets_UDP_ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ConnectRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamSockets_UDP_ConnectRequest message.
         * @function verify
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamSockets_UDP_ConnectRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_connection_id != null && message.hasOwnProperty("client_connection_id"))
                if (!$util.isInteger(message.client_connection_id))
                    return "client_connection_id: integer expected";
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (!$util.isInteger(message.challenge) && !(message.challenge && $util.isInteger(message.challenge.low) && $util.isInteger(message.challenge.high)))
                    return "challenge: integer|Long expected";
            if (message.my_timestamp != null && message.hasOwnProperty("my_timestamp"))
                if (!$util.isInteger(message.my_timestamp) && !(message.my_timestamp && $util.isInteger(message.my_timestamp.low) && $util.isInteger(message.my_timestamp.high)))
                    return "my_timestamp: integer|Long expected";
            if (message.ping_est_ms != null && message.hasOwnProperty("ping_est_ms"))
                if (!$util.isInteger(message.ping_est_ms))
                    return "ping_est_ms: integer expected";
            if (message.crypt != null && message.hasOwnProperty("crypt")) {
                var error = $root.CMsgSteamDatagramSessionCryptInfoSigned.verify(message.crypt);
                if (error)
                    return "crypt." + error;
            }
            if (message.cert != null && message.hasOwnProperty("cert")) {
                var error = $root.CMsgSteamDatagramCertificateSigned.verify(message.cert);
                if (error)
                    return "cert." + error;
            }
            if (message.legacy_protocol_version != null && message.hasOwnProperty("legacy_protocol_version"))
                if (!$util.isInteger(message.legacy_protocol_version))
                    return "legacy_protocol_version: integer expected";
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                if (!$util.isString(message.identity_string))
                    return "identity_string: string expected";
            if (message.legacy_client_steam_id != null && message.hasOwnProperty("legacy_client_steam_id"))
                if (!$util.isInteger(message.legacy_client_steam_id) && !(message.legacy_client_steam_id && $util.isInteger(message.legacy_client_steam_id.low) && $util.isInteger(message.legacy_client_steam_id.high)))
                    return "legacy_client_steam_id: integer|Long expected";
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary")) {
                var error = $root.CMsgSteamNetworkingIdentityLegacyBinary.verify(message.legacy_identity_binary);
                if (error)
                    return "legacy_identity_binary." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamSockets_UDP_ConnectRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamSockets_UDP_ConnectRequest} CMsgSteamSockets_UDP_ConnectRequest
         */
        CMsgSteamSockets_UDP_ConnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamSockets_UDP_ConnectRequest)
                return object;
            var message = new $root.CMsgSteamSockets_UDP_ConnectRequest();
            if (object.client_connection_id != null)
                message.client_connection_id = object.client_connection_id >>> 0;
            if (object.challenge != null)
                if ($util.Long)
                    (message.challenge = $util.Long.fromValue(object.challenge)).unsigned = false;
                else if (typeof object.challenge === "string")
                    message.challenge = parseInt(object.challenge, 10);
                else if (typeof object.challenge === "number")
                    message.challenge = object.challenge;
                else if (typeof object.challenge === "object")
                    message.challenge = new $util.LongBits(object.challenge.low >>> 0, object.challenge.high >>> 0).toNumber();
            if (object.my_timestamp != null)
                if ($util.Long)
                    (message.my_timestamp = $util.Long.fromValue(object.my_timestamp)).unsigned = false;
                else if (typeof object.my_timestamp === "string")
                    message.my_timestamp = parseInt(object.my_timestamp, 10);
                else if (typeof object.my_timestamp === "number")
                    message.my_timestamp = object.my_timestamp;
                else if (typeof object.my_timestamp === "object")
                    message.my_timestamp = new $util.LongBits(object.my_timestamp.low >>> 0, object.my_timestamp.high >>> 0).toNumber();
            if (object.ping_est_ms != null)
                message.ping_est_ms = object.ping_est_ms >>> 0;
            if (object.crypt != null) {
                if (typeof object.crypt !== "object")
                    throw TypeError(".CMsgSteamSockets_UDP_ConnectRequest.crypt: object expected");
                message.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.fromObject(object.crypt);
            }
            if (object.cert != null) {
                if (typeof object.cert !== "object")
                    throw TypeError(".CMsgSteamSockets_UDP_ConnectRequest.cert: object expected");
                message.cert = $root.CMsgSteamDatagramCertificateSigned.fromObject(object.cert);
            }
            if (object.legacy_protocol_version != null)
                message.legacy_protocol_version = object.legacy_protocol_version >>> 0;
            if (object.identity_string != null)
                message.identity_string = String(object.identity_string);
            if (object.legacy_client_steam_id != null)
                if ($util.Long)
                    (message.legacy_client_steam_id = $util.Long.fromValue(object.legacy_client_steam_id)).unsigned = false;
                else if (typeof object.legacy_client_steam_id === "string")
                    message.legacy_client_steam_id = parseInt(object.legacy_client_steam_id, 10);
                else if (typeof object.legacy_client_steam_id === "number")
                    message.legacy_client_steam_id = object.legacy_client_steam_id;
                else if (typeof object.legacy_client_steam_id === "object")
                    message.legacy_client_steam_id = new $util.LongBits(object.legacy_client_steam_id.low >>> 0, object.legacy_client_steam_id.high >>> 0).toNumber();
            if (object.legacy_identity_binary != null) {
                if (typeof object.legacy_identity_binary !== "object")
                    throw TypeError(".CMsgSteamSockets_UDP_ConnectRequest.legacy_identity_binary: object expected");
                message.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.fromObject(object.legacy_identity_binary);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamSockets_UDP_ConnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @static
         * @param {CMsgSteamSockets_UDP_ConnectRequest} message CMsgSteamSockets_UDP_ConnectRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamSockets_UDP_ConnectRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.client_connection_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.challenge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.challenge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacy_client_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacy_client_steam_id = options.longs === String ? "0" : 0;
                object.cert = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.my_timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.my_timestamp = options.longs === String ? "0" : 0;
                object.ping_est_ms = 0;
                object.crypt = null;
                object.legacy_protocol_version = 0;
                object.legacy_identity_binary = null;
                object.identity_string = "";
            }
            if (message.client_connection_id != null && message.hasOwnProperty("client_connection_id"))
                object.client_connection_id = message.client_connection_id;
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (typeof message.challenge === "number")
                    object.challenge = options.longs === String ? String(message.challenge) : message.challenge;
                else
                    object.challenge = options.longs === String ? $util.Long.prototype.toString.call(message.challenge) : options.longs === Number ? new $util.LongBits(message.challenge.low >>> 0, message.challenge.high >>> 0).toNumber() : message.challenge;
            if (message.legacy_client_steam_id != null && message.hasOwnProperty("legacy_client_steam_id"))
                if (typeof message.legacy_client_steam_id === "number")
                    object.legacy_client_steam_id = options.longs === String ? String(message.legacy_client_steam_id) : message.legacy_client_steam_id;
                else
                    object.legacy_client_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.legacy_client_steam_id) : options.longs === Number ? new $util.LongBits(message.legacy_client_steam_id.low >>> 0, message.legacy_client_steam_id.high >>> 0).toNumber() : message.legacy_client_steam_id;
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = $root.CMsgSteamDatagramCertificateSigned.toObject(message.cert, options);
            if (message.my_timestamp != null && message.hasOwnProperty("my_timestamp"))
                if (typeof message.my_timestamp === "number")
                    object.my_timestamp = options.longs === String ? String(message.my_timestamp) : message.my_timestamp;
                else
                    object.my_timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.my_timestamp) : options.longs === Number ? new $util.LongBits(message.my_timestamp.low >>> 0, message.my_timestamp.high >>> 0).toNumber() : message.my_timestamp;
            if (message.ping_est_ms != null && message.hasOwnProperty("ping_est_ms"))
                object.ping_est_ms = message.ping_est_ms;
            if (message.crypt != null && message.hasOwnProperty("crypt"))
                object.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.toObject(message.crypt, options);
            if (message.legacy_protocol_version != null && message.hasOwnProperty("legacy_protocol_version"))
                object.legacy_protocol_version = message.legacy_protocol_version;
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                object.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.toObject(message.legacy_identity_binary, options);
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                object.identity_string = message.identity_string;
            return object;
        };
    
        /**
         * Converts this CMsgSteamSockets_UDP_ConnectRequest to JSON.
         * @function toJSON
         * @memberof CMsgSteamSockets_UDP_ConnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamSockets_UDP_ConnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamSockets_UDP_ConnectRequest;
    })();
    
    $root.CMsgSteamSockets_UDP_ConnectOK = (function() {
    
        /**
         * Properties of a CMsgSteamSockets_UDP_ConnectOK.
         * @exports ICMsgSteamSockets_UDP_ConnectOK
         * @interface ICMsgSteamSockets_UDP_ConnectOK
         * @property {number|null} [client_connection_id] CMsgSteamSockets_UDP_ConnectOK client_connection_id
         * @property {number|null} [server_connection_id] CMsgSteamSockets_UDP_ConnectOK server_connection_id
         * @property {number|Long|null} [your_timestamp] CMsgSteamSockets_UDP_ConnectOK your_timestamp
         * @property {number|null} [delay_time_usec] CMsgSteamSockets_UDP_ConnectOK delay_time_usec
         * @property {ICMsgSteamDatagramSessionCryptInfoSigned|null} [crypt] CMsgSteamSockets_UDP_ConnectOK crypt
         * @property {ICMsgSteamDatagramCertificateSigned|null} [cert] CMsgSteamSockets_UDP_ConnectOK cert
         * @property {string|null} [identity_string] CMsgSteamSockets_UDP_ConnectOK identity_string
         * @property {number|Long|null} [legacy_server_steam_id] CMsgSteamSockets_UDP_ConnectOK legacy_server_steam_id
         * @property {ICMsgSteamNetworkingIdentityLegacyBinary|null} [legacy_identity_binary] CMsgSteamSockets_UDP_ConnectOK legacy_identity_binary
         */
    
        /**
         * Constructs a new CMsgSteamSockets_UDP_ConnectOK.
         * @exports CMsgSteamSockets_UDP_ConnectOK
         * @classdesc Represents a CMsgSteamSockets_UDP_ConnectOK.
         * @implements ICMsgSteamSockets_UDP_ConnectOK
         * @constructor
         * @param {ICMsgSteamSockets_UDP_ConnectOK=} [properties] Properties to set
         */
        function CMsgSteamSockets_UDP_ConnectOK(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK client_connection_id.
         * @member {number} client_connection_id
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.client_connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK server_connection_id.
         * @member {number} server_connection_id
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.server_connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK your_timestamp.
         * @member {number|Long} your_timestamp
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.your_timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK delay_time_usec.
         * @member {number} delay_time_usec
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.delay_time_usec = 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK crypt.
         * @member {ICMsgSteamDatagramSessionCryptInfoSigned|null|undefined} crypt
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.crypt = null;
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK cert.
         * @member {ICMsgSteamDatagramCertificateSigned|null|undefined} cert
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.cert = null;
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK identity_string.
         * @member {string} identity_string
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.identity_string = "";
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK legacy_server_steam_id.
         * @member {number|Long} legacy_server_steam_id
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.legacy_server_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectOK legacy_identity_binary.
         * @member {ICMsgSteamNetworkingIdentityLegacyBinary|null|undefined} legacy_identity_binary
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.legacy_identity_binary = null;
    
        /**
         * Creates a new CMsgSteamSockets_UDP_ConnectOK instance using the specified properties.
         * @function create
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectOK=} [properties] Properties to set
         * @returns {CMsgSteamSockets_UDP_ConnectOK} CMsgSteamSockets_UDP_ConnectOK instance
         */
        CMsgSteamSockets_UDP_ConnectOK.create = function create(properties) {
            return new CMsgSteamSockets_UDP_ConnectOK(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ConnectOK message. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectOK.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectOK} message CMsgSteamSockets_UDP_ConnectOK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ConnectOK.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_connection_id != null && message.hasOwnProperty("client_connection_id"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.client_connection_id);
            if (message.legacy_server_steam_id != null && message.hasOwnProperty("legacy_server_steam_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.legacy_server_steam_id);
            if (message.your_timestamp != null && message.hasOwnProperty("your_timestamp"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.your_timestamp);
            if (message.delay_time_usec != null && message.hasOwnProperty("delay_time_usec"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.delay_time_usec);
            if (message.server_connection_id != null && message.hasOwnProperty("server_connection_id"))
                writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.server_connection_id);
            if (message.crypt != null && message.hasOwnProperty("crypt"))
                $root.CMsgSteamDatagramSessionCryptInfoSigned.encode(message.crypt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.cert != null && message.hasOwnProperty("cert"))
                $root.CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                $root.CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacy_identity_binary, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.identity_string);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ConnectOK message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectOK.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectOK} message CMsgSteamSockets_UDP_ConnectOK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ConnectOK.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ConnectOK message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamSockets_UDP_ConnectOK} CMsgSteamSockets_UDP_ConnectOK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ConnectOK.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamSockets_UDP_ConnectOK();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_connection_id = reader.fixed32();
                    break;
                case 5:
                    message.server_connection_id = reader.fixed32();
                    break;
                case 3:
                    message.your_timestamp = reader.fixed64();
                    break;
                case 4:
                    message.delay_time_usec = reader.uint32();
                    break;
                case 7:
                    message.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.cert = $root.CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.identity_string = reader.string();
                    break;
                case 2:
                    message.legacy_server_steam_id = reader.fixed64();
                    break;
                case 10:
                    message.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ConnectOK message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamSockets_UDP_ConnectOK} CMsgSteamSockets_UDP_ConnectOK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ConnectOK.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamSockets_UDP_ConnectOK message.
         * @function verify
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamSockets_UDP_ConnectOK.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_connection_id != null && message.hasOwnProperty("client_connection_id"))
                if (!$util.isInteger(message.client_connection_id))
                    return "client_connection_id: integer expected";
            if (message.server_connection_id != null && message.hasOwnProperty("server_connection_id"))
                if (!$util.isInteger(message.server_connection_id))
                    return "server_connection_id: integer expected";
            if (message.your_timestamp != null && message.hasOwnProperty("your_timestamp"))
                if (!$util.isInteger(message.your_timestamp) && !(message.your_timestamp && $util.isInteger(message.your_timestamp.low) && $util.isInteger(message.your_timestamp.high)))
                    return "your_timestamp: integer|Long expected";
            if (message.delay_time_usec != null && message.hasOwnProperty("delay_time_usec"))
                if (!$util.isInteger(message.delay_time_usec))
                    return "delay_time_usec: integer expected";
            if (message.crypt != null && message.hasOwnProperty("crypt")) {
                var error = $root.CMsgSteamDatagramSessionCryptInfoSigned.verify(message.crypt);
                if (error)
                    return "crypt." + error;
            }
            if (message.cert != null && message.hasOwnProperty("cert")) {
                var error = $root.CMsgSteamDatagramCertificateSigned.verify(message.cert);
                if (error)
                    return "cert." + error;
            }
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                if (!$util.isString(message.identity_string))
                    return "identity_string: string expected";
            if (message.legacy_server_steam_id != null && message.hasOwnProperty("legacy_server_steam_id"))
                if (!$util.isInteger(message.legacy_server_steam_id) && !(message.legacy_server_steam_id && $util.isInteger(message.legacy_server_steam_id.low) && $util.isInteger(message.legacy_server_steam_id.high)))
                    return "legacy_server_steam_id: integer|Long expected";
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary")) {
                var error = $root.CMsgSteamNetworkingIdentityLegacyBinary.verify(message.legacy_identity_binary);
                if (error)
                    return "legacy_identity_binary." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamSockets_UDP_ConnectOK message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamSockets_UDP_ConnectOK} CMsgSteamSockets_UDP_ConnectOK
         */
        CMsgSteamSockets_UDP_ConnectOK.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamSockets_UDP_ConnectOK)
                return object;
            var message = new $root.CMsgSteamSockets_UDP_ConnectOK();
            if (object.client_connection_id != null)
                message.client_connection_id = object.client_connection_id >>> 0;
            if (object.server_connection_id != null)
                message.server_connection_id = object.server_connection_id >>> 0;
            if (object.your_timestamp != null)
                if ($util.Long)
                    (message.your_timestamp = $util.Long.fromValue(object.your_timestamp)).unsigned = false;
                else if (typeof object.your_timestamp === "string")
                    message.your_timestamp = parseInt(object.your_timestamp, 10);
                else if (typeof object.your_timestamp === "number")
                    message.your_timestamp = object.your_timestamp;
                else if (typeof object.your_timestamp === "object")
                    message.your_timestamp = new $util.LongBits(object.your_timestamp.low >>> 0, object.your_timestamp.high >>> 0).toNumber();
            if (object.delay_time_usec != null)
                message.delay_time_usec = object.delay_time_usec >>> 0;
            if (object.crypt != null) {
                if (typeof object.crypt !== "object")
                    throw TypeError(".CMsgSteamSockets_UDP_ConnectOK.crypt: object expected");
                message.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.fromObject(object.crypt);
            }
            if (object.cert != null) {
                if (typeof object.cert !== "object")
                    throw TypeError(".CMsgSteamSockets_UDP_ConnectOK.cert: object expected");
                message.cert = $root.CMsgSteamDatagramCertificateSigned.fromObject(object.cert);
            }
            if (object.identity_string != null)
                message.identity_string = String(object.identity_string);
            if (object.legacy_server_steam_id != null)
                if ($util.Long)
                    (message.legacy_server_steam_id = $util.Long.fromValue(object.legacy_server_steam_id)).unsigned = false;
                else if (typeof object.legacy_server_steam_id === "string")
                    message.legacy_server_steam_id = parseInt(object.legacy_server_steam_id, 10);
                else if (typeof object.legacy_server_steam_id === "number")
                    message.legacy_server_steam_id = object.legacy_server_steam_id;
                else if (typeof object.legacy_server_steam_id === "object")
                    message.legacy_server_steam_id = new $util.LongBits(object.legacy_server_steam_id.low >>> 0, object.legacy_server_steam_id.high >>> 0).toNumber();
            if (object.legacy_identity_binary != null) {
                if (typeof object.legacy_identity_binary !== "object")
                    throw TypeError(".CMsgSteamSockets_UDP_ConnectOK.legacy_identity_binary: object expected");
                message.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.fromObject(object.legacy_identity_binary);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamSockets_UDP_ConnectOK message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @static
         * @param {CMsgSteamSockets_UDP_ConnectOK} message CMsgSteamSockets_UDP_ConnectOK
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamSockets_UDP_ConnectOK.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.client_connection_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacy_server_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacy_server_steam_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.your_timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.your_timestamp = options.longs === String ? "0" : 0;
                object.delay_time_usec = 0;
                object.server_connection_id = 0;
                object.crypt = null;
                object.cert = null;
                object.legacy_identity_binary = null;
                object.identity_string = "";
            }
            if (message.client_connection_id != null && message.hasOwnProperty("client_connection_id"))
                object.client_connection_id = message.client_connection_id;
            if (message.legacy_server_steam_id != null && message.hasOwnProperty("legacy_server_steam_id"))
                if (typeof message.legacy_server_steam_id === "number")
                    object.legacy_server_steam_id = options.longs === String ? String(message.legacy_server_steam_id) : message.legacy_server_steam_id;
                else
                    object.legacy_server_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.legacy_server_steam_id) : options.longs === Number ? new $util.LongBits(message.legacy_server_steam_id.low >>> 0, message.legacy_server_steam_id.high >>> 0).toNumber() : message.legacy_server_steam_id;
            if (message.your_timestamp != null && message.hasOwnProperty("your_timestamp"))
                if (typeof message.your_timestamp === "number")
                    object.your_timestamp = options.longs === String ? String(message.your_timestamp) : message.your_timestamp;
                else
                    object.your_timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.your_timestamp) : options.longs === Number ? new $util.LongBits(message.your_timestamp.low >>> 0, message.your_timestamp.high >>> 0).toNumber() : message.your_timestamp;
            if (message.delay_time_usec != null && message.hasOwnProperty("delay_time_usec"))
                object.delay_time_usec = message.delay_time_usec;
            if (message.server_connection_id != null && message.hasOwnProperty("server_connection_id"))
                object.server_connection_id = message.server_connection_id;
            if (message.crypt != null && message.hasOwnProperty("crypt"))
                object.crypt = $root.CMsgSteamDatagramSessionCryptInfoSigned.toObject(message.crypt, options);
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = $root.CMsgSteamDatagramCertificateSigned.toObject(message.cert, options);
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                object.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.toObject(message.legacy_identity_binary, options);
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                object.identity_string = message.identity_string;
            return object;
        };
    
        /**
         * Converts this CMsgSteamSockets_UDP_ConnectOK to JSON.
         * @function toJSON
         * @memberof CMsgSteamSockets_UDP_ConnectOK
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamSockets_UDP_ConnectOK.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamSockets_UDP_ConnectOK;
    })();
    
    $root.CMsgSteamSockets_UDP_ConnectionClosed = (function() {
    
        /**
         * Properties of a CMsgSteamSockets_UDP_ConnectionClosed.
         * @exports ICMsgSteamSockets_UDP_ConnectionClosed
         * @interface ICMsgSteamSockets_UDP_ConnectionClosed
         * @property {number|null} [to_connection_id] CMsgSteamSockets_UDP_ConnectionClosed to_connection_id
         * @property {number|null} [from_connection_id] CMsgSteamSockets_UDP_ConnectionClosed from_connection_id
         * @property {string|null} [debug] CMsgSteamSockets_UDP_ConnectionClosed debug
         * @property {number|null} [reason_code] CMsgSteamSockets_UDP_ConnectionClosed reason_code
         */
    
        /**
         * Constructs a new CMsgSteamSockets_UDP_ConnectionClosed.
         * @exports CMsgSteamSockets_UDP_ConnectionClosed
         * @classdesc Represents a CMsgSteamSockets_UDP_ConnectionClosed.
         * @implements ICMsgSteamSockets_UDP_ConnectionClosed
         * @constructor
         * @param {ICMsgSteamSockets_UDP_ConnectionClosed=} [properties] Properties to set
         */
        function CMsgSteamSockets_UDP_ConnectionClosed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamSockets_UDP_ConnectionClosed to_connection_id.
         * @member {number} to_connection_id
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectionClosed.prototype.to_connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectionClosed from_connection_id.
         * @member {number} from_connection_id
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectionClosed.prototype.from_connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_ConnectionClosed debug.
         * @member {string} debug
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectionClosed.prototype.debug = "";
    
        /**
         * CMsgSteamSockets_UDP_ConnectionClosed reason_code.
         * @member {number} reason_code
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @instance
         */
        CMsgSteamSockets_UDP_ConnectionClosed.prototype.reason_code = 0;
    
        /**
         * Creates a new CMsgSteamSockets_UDP_ConnectionClosed instance using the specified properties.
         * @function create
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectionClosed=} [properties] Properties to set
         * @returns {CMsgSteamSockets_UDP_ConnectionClosed} CMsgSteamSockets_UDP_ConnectionClosed instance
         */
        CMsgSteamSockets_UDP_ConnectionClosed.create = function create(properties) {
            return new CMsgSteamSockets_UDP_ConnectionClosed(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ConnectionClosed message. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectionClosed.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectionClosed} message CMsgSteamSockets_UDP_ConnectionClosed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ConnectionClosed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.debug != null && message.hasOwnProperty("debug"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.debug);
            if (message.reason_code != null && message.hasOwnProperty("reason_code"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.reason_code);
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.to_connection_id);
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.from_connection_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_ConnectionClosed message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_ConnectionClosed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @static
         * @param {ICMsgSteamSockets_UDP_ConnectionClosed} message CMsgSteamSockets_UDP_ConnectionClosed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_ConnectionClosed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ConnectionClosed message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamSockets_UDP_ConnectionClosed} CMsgSteamSockets_UDP_ConnectionClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ConnectionClosed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamSockets_UDP_ConnectionClosed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4:
                    message.to_connection_id = reader.fixed32();
                    break;
                case 5:
                    message.from_connection_id = reader.fixed32();
                    break;
                case 2:
                    message.debug = reader.string();
                    break;
                case 3:
                    message.reason_code = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_ConnectionClosed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamSockets_UDP_ConnectionClosed} CMsgSteamSockets_UDP_ConnectionClosed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_ConnectionClosed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamSockets_UDP_ConnectionClosed message.
         * @function verify
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamSockets_UDP_ConnectionClosed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                if (!$util.isInteger(message.to_connection_id))
                    return "to_connection_id: integer expected";
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                if (!$util.isInteger(message.from_connection_id))
                    return "from_connection_id: integer expected";
            if (message.debug != null && message.hasOwnProperty("debug"))
                if (!$util.isString(message.debug))
                    return "debug: string expected";
            if (message.reason_code != null && message.hasOwnProperty("reason_code"))
                if (!$util.isInteger(message.reason_code))
                    return "reason_code: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamSockets_UDP_ConnectionClosed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamSockets_UDP_ConnectionClosed} CMsgSteamSockets_UDP_ConnectionClosed
         */
        CMsgSteamSockets_UDP_ConnectionClosed.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamSockets_UDP_ConnectionClosed)
                return object;
            var message = new $root.CMsgSteamSockets_UDP_ConnectionClosed();
            if (object.to_connection_id != null)
                message.to_connection_id = object.to_connection_id >>> 0;
            if (object.from_connection_id != null)
                message.from_connection_id = object.from_connection_id >>> 0;
            if (object.debug != null)
                message.debug = String(object.debug);
            if (object.reason_code != null)
                message.reason_code = object.reason_code >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamSockets_UDP_ConnectionClosed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @static
         * @param {CMsgSteamSockets_UDP_ConnectionClosed} message CMsgSteamSockets_UDP_ConnectionClosed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamSockets_UDP_ConnectionClosed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.debug = "";
                object.reason_code = 0;
                object.to_connection_id = 0;
                object.from_connection_id = 0;
            }
            if (message.debug != null && message.hasOwnProperty("debug"))
                object.debug = message.debug;
            if (message.reason_code != null && message.hasOwnProperty("reason_code"))
                object.reason_code = message.reason_code;
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                object.to_connection_id = message.to_connection_id;
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                object.from_connection_id = message.from_connection_id;
            return object;
        };
    
        /**
         * Converts this CMsgSteamSockets_UDP_ConnectionClosed to JSON.
         * @function toJSON
         * @memberof CMsgSteamSockets_UDP_ConnectionClosed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamSockets_UDP_ConnectionClosed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamSockets_UDP_ConnectionClosed;
    })();
    
    $root.CMsgSteamSockets_UDP_NoConnection = (function() {
    
        /**
         * Properties of a CMsgSteamSockets_UDP_NoConnection.
         * @exports ICMsgSteamSockets_UDP_NoConnection
         * @interface ICMsgSteamSockets_UDP_NoConnection
         * @property {number|null} [from_connection_id] CMsgSteamSockets_UDP_NoConnection from_connection_id
         * @property {number|null} [to_connection_id] CMsgSteamSockets_UDP_NoConnection to_connection_id
         */
    
        /**
         * Constructs a new CMsgSteamSockets_UDP_NoConnection.
         * @exports CMsgSteamSockets_UDP_NoConnection
         * @classdesc Represents a CMsgSteamSockets_UDP_NoConnection.
         * @implements ICMsgSteamSockets_UDP_NoConnection
         * @constructor
         * @param {ICMsgSteamSockets_UDP_NoConnection=} [properties] Properties to set
         */
        function CMsgSteamSockets_UDP_NoConnection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamSockets_UDP_NoConnection from_connection_id.
         * @member {number} from_connection_id
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @instance
         */
        CMsgSteamSockets_UDP_NoConnection.prototype.from_connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_NoConnection to_connection_id.
         * @member {number} to_connection_id
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @instance
         */
        CMsgSteamSockets_UDP_NoConnection.prototype.to_connection_id = 0;
    
        /**
         * Creates a new CMsgSteamSockets_UDP_NoConnection instance using the specified properties.
         * @function create
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @static
         * @param {ICMsgSteamSockets_UDP_NoConnection=} [properties] Properties to set
         * @returns {CMsgSteamSockets_UDP_NoConnection} CMsgSteamSockets_UDP_NoConnection instance
         */
        CMsgSteamSockets_UDP_NoConnection.create = function create(properties) {
            return new CMsgSteamSockets_UDP_NoConnection(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_NoConnection message. Does not implicitly {@link CMsgSteamSockets_UDP_NoConnection.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @static
         * @param {ICMsgSteamSockets_UDP_NoConnection} message CMsgSteamSockets_UDP_NoConnection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_NoConnection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.from_connection_id);
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.to_connection_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_NoConnection message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_NoConnection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @static
         * @param {ICMsgSteamSockets_UDP_NoConnection} message CMsgSteamSockets_UDP_NoConnection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_NoConnection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_NoConnection message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamSockets_UDP_NoConnection} CMsgSteamSockets_UDP_NoConnection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_NoConnection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamSockets_UDP_NoConnection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.from_connection_id = reader.fixed32();
                    break;
                case 3:
                    message.to_connection_id = reader.fixed32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_NoConnection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamSockets_UDP_NoConnection} CMsgSteamSockets_UDP_NoConnection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_NoConnection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamSockets_UDP_NoConnection message.
         * @function verify
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamSockets_UDP_NoConnection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                if (!$util.isInteger(message.from_connection_id))
                    return "from_connection_id: integer expected";
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                if (!$util.isInteger(message.to_connection_id))
                    return "to_connection_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamSockets_UDP_NoConnection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamSockets_UDP_NoConnection} CMsgSteamSockets_UDP_NoConnection
         */
        CMsgSteamSockets_UDP_NoConnection.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamSockets_UDP_NoConnection)
                return object;
            var message = new $root.CMsgSteamSockets_UDP_NoConnection();
            if (object.from_connection_id != null)
                message.from_connection_id = object.from_connection_id >>> 0;
            if (object.to_connection_id != null)
                message.to_connection_id = object.to_connection_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamSockets_UDP_NoConnection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @static
         * @param {CMsgSteamSockets_UDP_NoConnection} message CMsgSteamSockets_UDP_NoConnection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamSockets_UDP_NoConnection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.from_connection_id = 0;
                object.to_connection_id = 0;
            }
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                object.from_connection_id = message.from_connection_id;
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                object.to_connection_id = message.to_connection_id;
            return object;
        };
    
        /**
         * Converts this CMsgSteamSockets_UDP_NoConnection to JSON.
         * @function toJSON
         * @memberof CMsgSteamSockets_UDP_NoConnection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamSockets_UDP_NoConnection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamSockets_UDP_NoConnection;
    })();
    
    $root.CMsgSteamSockets_UDP_Stats = (function() {
    
        /**
         * Properties of a CMsgSteamSockets_UDP_Stats.
         * @exports ICMsgSteamSockets_UDP_Stats
         * @interface ICMsgSteamSockets_UDP_Stats
         * @property {ICMsgSteamDatagramConnectionQuality|null} [stats] CMsgSteamSockets_UDP_Stats stats
         * @property {number|null} [flags] CMsgSteamSockets_UDP_Stats flags
         * @property {number|null} [to_connection_id] CMsgSteamSockets_UDP_Stats to_connection_id
         * @property {number|null} [from_connection_id] CMsgSteamSockets_UDP_Stats from_connection_id
         * @property {number|null} [seq_num] CMsgSteamSockets_UDP_Stats seq_num
         */
    
        /**
         * Constructs a new CMsgSteamSockets_UDP_Stats.
         * @exports CMsgSteamSockets_UDP_Stats
         * @classdesc Represents a CMsgSteamSockets_UDP_Stats.
         * @implements ICMsgSteamSockets_UDP_Stats
         * @constructor
         * @param {ICMsgSteamSockets_UDP_Stats=} [properties] Properties to set
         */
        function CMsgSteamSockets_UDP_Stats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamSockets_UDP_Stats stats.
         * @member {ICMsgSteamDatagramConnectionQuality|null|undefined} stats
         * @memberof CMsgSteamSockets_UDP_Stats
         * @instance
         */
        CMsgSteamSockets_UDP_Stats.prototype.stats = null;
    
        /**
         * CMsgSteamSockets_UDP_Stats flags.
         * @member {number} flags
         * @memberof CMsgSteamSockets_UDP_Stats
         * @instance
         */
        CMsgSteamSockets_UDP_Stats.prototype.flags = 0;
    
        /**
         * CMsgSteamSockets_UDP_Stats to_connection_id.
         * @member {number} to_connection_id
         * @memberof CMsgSteamSockets_UDP_Stats
         * @instance
         */
        CMsgSteamSockets_UDP_Stats.prototype.to_connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_Stats from_connection_id.
         * @member {number} from_connection_id
         * @memberof CMsgSteamSockets_UDP_Stats
         * @instance
         */
        CMsgSteamSockets_UDP_Stats.prototype.from_connection_id = 0;
    
        /**
         * CMsgSteamSockets_UDP_Stats seq_num.
         * @member {number} seq_num
         * @memberof CMsgSteamSockets_UDP_Stats
         * @instance
         */
        CMsgSteamSockets_UDP_Stats.prototype.seq_num = 0;
    
        /**
         * Creates a new CMsgSteamSockets_UDP_Stats instance using the specified properties.
         * @function create
         * @memberof CMsgSteamSockets_UDP_Stats
         * @static
         * @param {ICMsgSteamSockets_UDP_Stats=} [properties] Properties to set
         * @returns {CMsgSteamSockets_UDP_Stats} CMsgSteamSockets_UDP_Stats instance
         */
        CMsgSteamSockets_UDP_Stats.create = function create(properties) {
            return new CMsgSteamSockets_UDP_Stats(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_Stats message. Does not implicitly {@link CMsgSteamSockets_UDP_Stats.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamSockets_UDP_Stats
         * @static
         * @param {ICMsgSteamSockets_UDP_Stats} message CMsgSteamSockets_UDP_Stats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_Stats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stats != null && message.hasOwnProperty("stats"))
                $root.CMsgSteamDatagramConnectionQuality.encode(message.stats, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.flags != null && message.hasOwnProperty("flags"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.flags);
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.seq_num);
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.to_connection_id);
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                writer.uint32(/* id 10, wireType 5 =*/85).fixed32(message.from_connection_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamSockets_UDP_Stats message, length delimited. Does not implicitly {@link CMsgSteamSockets_UDP_Stats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamSockets_UDP_Stats
         * @static
         * @param {ICMsgSteamSockets_UDP_Stats} message CMsgSteamSockets_UDP_Stats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamSockets_UDP_Stats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_Stats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamSockets_UDP_Stats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamSockets_UDP_Stats} CMsgSteamSockets_UDP_Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_Stats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamSockets_UDP_Stats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stats = $root.CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flags = reader.uint32();
                    break;
                case 9:
                    message.to_connection_id = reader.fixed32();
                    break;
                case 10:
                    message.from_connection_id = reader.fixed32();
                    break;
                case 4:
                    message.seq_num = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamSockets_UDP_Stats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamSockets_UDP_Stats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamSockets_UDP_Stats} CMsgSteamSockets_UDP_Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamSockets_UDP_Stats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamSockets_UDP_Stats message.
         * @function verify
         * @memberof CMsgSteamSockets_UDP_Stats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamSockets_UDP_Stats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stats != null && message.hasOwnProperty("stats")) {
                var error = $root.CMsgSteamDatagramConnectionQuality.verify(message.stats);
                if (error)
                    return "stats." + error;
            }
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                if (!$util.isInteger(message.to_connection_id))
                    return "to_connection_id: integer expected";
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                if (!$util.isInteger(message.from_connection_id))
                    return "from_connection_id: integer expected";
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                if (!$util.isInteger(message.seq_num))
                    return "seq_num: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamSockets_UDP_Stats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamSockets_UDP_Stats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamSockets_UDP_Stats} CMsgSteamSockets_UDP_Stats
         */
        CMsgSteamSockets_UDP_Stats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamSockets_UDP_Stats)
                return object;
            var message = new $root.CMsgSteamSockets_UDP_Stats();
            if (object.stats != null) {
                if (typeof object.stats !== "object")
                    throw TypeError(".CMsgSteamSockets_UDP_Stats.stats: object expected");
                message.stats = $root.CMsgSteamDatagramConnectionQuality.fromObject(object.stats);
            }
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            if (object.to_connection_id != null)
                message.to_connection_id = object.to_connection_id >>> 0;
            if (object.from_connection_id != null)
                message.from_connection_id = object.from_connection_id >>> 0;
            if (object.seq_num != null)
                message.seq_num = object.seq_num >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamSockets_UDP_Stats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamSockets_UDP_Stats
         * @static
         * @param {CMsgSteamSockets_UDP_Stats} message CMsgSteamSockets_UDP_Stats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamSockets_UDP_Stats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.stats = null;
                object.flags = 0;
                object.seq_num = 0;
                object.to_connection_id = 0;
                object.from_connection_id = 0;
            }
            if (message.stats != null && message.hasOwnProperty("stats"))
                object.stats = $root.CMsgSteamDatagramConnectionQuality.toObject(message.stats, options);
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                object.seq_num = message.seq_num;
            if (message.to_connection_id != null && message.hasOwnProperty("to_connection_id"))
                object.to_connection_id = message.to_connection_id;
            if (message.from_connection_id != null && message.hasOwnProperty("from_connection_id"))
                object.from_connection_id = message.from_connection_id;
            return object;
        };
    
        /**
         * Converts this CMsgSteamSockets_UDP_Stats to JSON.
         * @function toJSON
         * @memberof CMsgSteamSockets_UDP_Stats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamSockets_UDP_Stats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Flags enum.
         * @name CMsgSteamSockets_UDP_Stats.Flags
         * @enum {string}
         * @property {number} ACK_REQUEST_E2E=2 ACK_REQUEST_E2E value
         * @property {number} ACK_REQUEST_IMMEDIATE=4 ACK_REQUEST_IMMEDIATE value
         */
        CMsgSteamSockets_UDP_Stats.Flags = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2] = "ACK_REQUEST_E2E"] = 2;
            values[valuesById[4] = "ACK_REQUEST_IMMEDIATE"] = 4;
            return values;
        })();
    
        return CMsgSteamSockets_UDP_Stats;
    })();
    
    $root.CMsgSteamNetworkingIdentityLegacyBinary = (function() {
    
        /**
         * Properties of a CMsgSteamNetworkingIdentityLegacyBinary.
         * @exports ICMsgSteamNetworkingIdentityLegacyBinary
         * @interface ICMsgSteamNetworkingIdentityLegacyBinary
         * @property {number|Long|null} [steam_id] CMsgSteamNetworkingIdentityLegacyBinary steam_id
         * @property {string|null} [xbox_pairwise_id] CMsgSteamNetworkingIdentityLegacyBinary xbox_pairwise_id
         * @property {Uint8Array|null} [generic_bytes] CMsgSteamNetworkingIdentityLegacyBinary generic_bytes
         * @property {string|null} [generic_string] CMsgSteamNetworkingIdentityLegacyBinary generic_string
         * @property {Uint8Array|null} [ipv6_and_port] CMsgSteamNetworkingIdentityLegacyBinary ipv6_and_port
         */
    
        /**
         * Constructs a new CMsgSteamNetworkingIdentityLegacyBinary.
         * @exports CMsgSteamNetworkingIdentityLegacyBinary
         * @classdesc Represents a CMsgSteamNetworkingIdentityLegacyBinary.
         * @implements ICMsgSteamNetworkingIdentityLegacyBinary
         * @constructor
         * @param {ICMsgSteamNetworkingIdentityLegacyBinary=} [properties] Properties to set
         */
        function CMsgSteamNetworkingIdentityLegacyBinary(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary steam_id.
         * @member {number|Long} steam_id
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary xbox_pairwise_id.
         * @member {string} xbox_pairwise_id
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.xbox_pairwise_id = "";
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary generic_bytes.
         * @member {Uint8Array} generic_bytes
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.generic_bytes = $util.newBuffer([]);
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary generic_string.
         * @member {string} generic_string
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.generic_string = "";
    
        /**
         * CMsgSteamNetworkingIdentityLegacyBinary ipv6_and_port.
         * @member {Uint8Array} ipv6_and_port
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.ipv6_and_port = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamNetworkingIdentityLegacyBinary instance using the specified properties.
         * @function create
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {ICMsgSteamNetworkingIdentityLegacyBinary=} [properties] Properties to set
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary instance
         */
        CMsgSteamNetworkingIdentityLegacyBinary.create = function create(properties) {
            return new CMsgSteamNetworkingIdentityLegacyBinary(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingIdentityLegacyBinary message. Does not implicitly {@link CMsgSteamNetworkingIdentityLegacyBinary.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {ICMsgSteamNetworkingIdentityLegacyBinary} message CMsgSteamNetworkingIdentityLegacyBinary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingIdentityLegacyBinary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.generic_bytes != null && message.hasOwnProperty("generic_bytes"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.generic_bytes);
            if (message.generic_string != null && message.hasOwnProperty("generic_string"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.generic_string);
            if (message.ipv6_and_port != null && message.hasOwnProperty("ipv6_and_port"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ipv6_and_port);
            if (message.steam_id != null && message.hasOwnProperty("steam_id"))
                writer.uint32(/* id 16, wireType 1 =*/129).fixed64(message.steam_id);
            if (message.xbox_pairwise_id != null && message.hasOwnProperty("xbox_pairwise_id"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.xbox_pairwise_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingIdentityLegacyBinary message, length delimited. Does not implicitly {@link CMsgSteamNetworkingIdentityLegacyBinary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {ICMsgSteamNetworkingIdentityLegacyBinary} message CMsgSteamNetworkingIdentityLegacyBinary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingIdentityLegacyBinary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamNetworkingIdentityLegacyBinary message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingIdentityLegacyBinary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingIdentityLegacyBinary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 16:
                    message.steam_id = reader.fixed64();
                    break;
                case 17:
                    message.xbox_pairwise_id = reader.string();
                    break;
                case 2:
                    message.generic_bytes = reader.bytes();
                    break;
                case 3:
                    message.generic_string = reader.string();
                    break;
                case 4:
                    message.ipv6_and_port = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamNetworkingIdentityLegacyBinary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingIdentityLegacyBinary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamNetworkingIdentityLegacyBinary message.
         * @function verify
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamNetworkingIdentityLegacyBinary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steam_id != null && message.hasOwnProperty("steam_id"))
                if (!$util.isInteger(message.steam_id) && !(message.steam_id && $util.isInteger(message.steam_id.low) && $util.isInteger(message.steam_id.high)))
                    return "steam_id: integer|Long expected";
            if (message.xbox_pairwise_id != null && message.hasOwnProperty("xbox_pairwise_id"))
                if (!$util.isString(message.xbox_pairwise_id))
                    return "xbox_pairwise_id: string expected";
            if (message.generic_bytes != null && message.hasOwnProperty("generic_bytes"))
                if (!(message.generic_bytes && typeof message.generic_bytes.length === "number" || $util.isString(message.generic_bytes)))
                    return "generic_bytes: buffer expected";
            if (message.generic_string != null && message.hasOwnProperty("generic_string"))
                if (!$util.isString(message.generic_string))
                    return "generic_string: string expected";
            if (message.ipv6_and_port != null && message.hasOwnProperty("ipv6_and_port"))
                if (!(message.ipv6_and_port && typeof message.ipv6_and_port.length === "number" || $util.isString(message.ipv6_and_port)))
                    return "ipv6_and_port: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamNetworkingIdentityLegacyBinary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamNetworkingIdentityLegacyBinary} CMsgSteamNetworkingIdentityLegacyBinary
         */
        CMsgSteamNetworkingIdentityLegacyBinary.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamNetworkingIdentityLegacyBinary)
                return object;
            var message = new $root.CMsgSteamNetworkingIdentityLegacyBinary();
            if (object.steam_id != null)
                if ($util.Long)
                    (message.steam_id = $util.Long.fromValue(object.steam_id)).unsigned = false;
                else if (typeof object.steam_id === "string")
                    message.steam_id = parseInt(object.steam_id, 10);
                else if (typeof object.steam_id === "number")
                    message.steam_id = object.steam_id;
                else if (typeof object.steam_id === "object")
                    message.steam_id = new $util.LongBits(object.steam_id.low >>> 0, object.steam_id.high >>> 0).toNumber();
            if (object.xbox_pairwise_id != null)
                message.xbox_pairwise_id = String(object.xbox_pairwise_id);
            if (object.generic_bytes != null)
                if (typeof object.generic_bytes === "string")
                    $util.base64.decode(object.generic_bytes, message.generic_bytes = $util.newBuffer($util.base64.length(object.generic_bytes)), 0);
                else if (object.generic_bytes.length)
                    message.generic_bytes = object.generic_bytes;
            if (object.generic_string != null)
                message.generic_string = String(object.generic_string);
            if (object.ipv6_and_port != null)
                if (typeof object.ipv6_and_port === "string")
                    $util.base64.decode(object.ipv6_and_port, message.ipv6_and_port = $util.newBuffer($util.base64.length(object.ipv6_and_port)), 0);
                else if (object.ipv6_and_port.length)
                    message.ipv6_and_port = object.ipv6_and_port;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamNetworkingIdentityLegacyBinary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @static
         * @param {CMsgSteamNetworkingIdentityLegacyBinary} message CMsgSteamNetworkingIdentityLegacyBinary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamNetworkingIdentityLegacyBinary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.generic_bytes = "";
                else {
                    object.generic_bytes = [];
                    if (options.bytes !== Array)
                        object.generic_bytes = $util.newBuffer(object.generic_bytes);
                }
                object.generic_string = "";
                if (options.bytes === String)
                    object.ipv6_and_port = "";
                else {
                    object.ipv6_and_port = [];
                    if (options.bytes !== Array)
                        object.ipv6_and_port = $util.newBuffer(object.ipv6_and_port);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steam_id = options.longs === String ? "0" : 0;
                object.xbox_pairwise_id = "";
            }
            if (message.generic_bytes != null && message.hasOwnProperty("generic_bytes"))
                object.generic_bytes = options.bytes === String ? $util.base64.encode(message.generic_bytes, 0, message.generic_bytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.generic_bytes) : message.generic_bytes;
            if (message.generic_string != null && message.hasOwnProperty("generic_string"))
                object.generic_string = message.generic_string;
            if (message.ipv6_and_port != null && message.hasOwnProperty("ipv6_and_port"))
                object.ipv6_and_port = options.bytes === String ? $util.base64.encode(message.ipv6_and_port, 0, message.ipv6_and_port.length) : options.bytes === Array ? Array.prototype.slice.call(message.ipv6_and_port) : message.ipv6_and_port;
            if (message.steam_id != null && message.hasOwnProperty("steam_id"))
                if (typeof message.steam_id === "number")
                    object.steam_id = options.longs === String ? String(message.steam_id) : message.steam_id;
                else
                    object.steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.steam_id) : options.longs === Number ? new $util.LongBits(message.steam_id.low >>> 0, message.steam_id.high >>> 0).toNumber() : message.steam_id;
            if (message.xbox_pairwise_id != null && message.hasOwnProperty("xbox_pairwise_id"))
                object.xbox_pairwise_id = message.xbox_pairwise_id;
            return object;
        };
    
        /**
         * Converts this CMsgSteamNetworkingIdentityLegacyBinary to JSON.
         * @function toJSON
         * @memberof CMsgSteamNetworkingIdentityLegacyBinary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamNetworkingIdentityLegacyBinary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamNetworkingIdentityLegacyBinary;
    })();
    
    $root.CMsgSteamDatagramCertificate = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificate.
         * @exports ICMsgSteamDatagramCertificate
         * @interface ICMsgSteamDatagramCertificate
         * @property {CMsgSteamDatagramCertificate.EKeyType|null} [key_type] CMsgSteamDatagramCertificate key_type
         * @property {Uint8Array|null} [key_data] CMsgSteamDatagramCertificate key_data
         * @property {number|Long|null} [legacy_steam_id] CMsgSteamDatagramCertificate legacy_steam_id
         * @property {ICMsgSteamNetworkingIdentityLegacyBinary|null} [legacy_identity_binary] CMsgSteamDatagramCertificate legacy_identity_binary
         * @property {string|null} [identity_string] CMsgSteamDatagramCertificate identity_string
         * @property {Array.<number>|null} [gameserver_datacenter_ids] CMsgSteamDatagramCertificate gameserver_datacenter_ids
         * @property {number|null} [time_created] CMsgSteamDatagramCertificate time_created
         * @property {number|null} [time_expiry] CMsgSteamDatagramCertificate time_expiry
         * @property {Array.<number>|null} [app_ids] CMsgSteamDatagramCertificate app_ids
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificate.
         * @exports CMsgSteamDatagramCertificate
         * @classdesc Represents a CMsgSteamDatagramCertificate.
         * @implements ICMsgSteamDatagramCertificate
         * @constructor
         * @param {ICMsgSteamDatagramCertificate=} [properties] Properties to set
         */
        function CMsgSteamDatagramCertificate(properties) {
            this.gameserver_datacenter_ids = [];
            this.app_ids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramCertificate key_type.
         * @member {CMsgSteamDatagramCertificate.EKeyType} key_type
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.key_type = 0;
    
        /**
         * CMsgSteamDatagramCertificate key_data.
         * @member {Uint8Array} key_data
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.key_data = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCertificate legacy_steam_id.
         * @member {number|Long} legacy_steam_id
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.legacy_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramCertificate legacy_identity_binary.
         * @member {ICMsgSteamNetworkingIdentityLegacyBinary|null|undefined} legacy_identity_binary
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.legacy_identity_binary = null;
    
        /**
         * CMsgSteamDatagramCertificate identity_string.
         * @member {string} identity_string
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.identity_string = "";
    
        /**
         * CMsgSteamDatagramCertificate gameserver_datacenter_ids.
         * @member {Array.<number>} gameserver_datacenter_ids
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.gameserver_datacenter_ids = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramCertificate time_created.
         * @member {number} time_created
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.time_created = 0;
    
        /**
         * CMsgSteamDatagramCertificate time_expiry.
         * @member {number} time_expiry
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.time_expiry = 0;
    
        /**
         * CMsgSteamDatagramCertificate app_ids.
         * @member {Array.<number>} app_ids
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.app_ids = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramCertificate instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {ICMsgSteamDatagramCertificate=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate instance
         */
        CMsgSteamDatagramCertificate.create = function create(properties) {
            return new CMsgSteamDatagramCertificate(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificate message. Does not implicitly {@link CMsgSteamDatagramCertificate.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {ICMsgSteamDatagramCertificate} message CMsgSteamDatagramCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key_type);
            if (message.key_data != null && message.hasOwnProperty("key_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key_data);
            if (message.legacy_steam_id != null && message.hasOwnProperty("legacy_steam_id"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.legacy_steam_id);
            if (message.gameserver_datacenter_ids != null && message.gameserver_datacenter_ids.length)
                for (var i = 0; i < message.gameserver_datacenter_ids.length; ++i)
                    writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.gameserver_datacenter_ids[i]);
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.time_created);
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.time_expiry);
            if (message.app_ids != null && message.app_ids.length)
                for (var i = 0; i < message.app_ids.length; ++i)
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.app_ids[i]);
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                $root.CMsgSteamNetworkingIdentityLegacyBinary.encode(message.legacy_identity_binary, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.identity_string);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificate message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {ICMsgSteamDatagramCertificate} message CMsgSteamDatagramCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificate message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramCertificate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key_type = reader.int32();
                    break;
                case 2:
                    message.key_data = reader.bytes();
                    break;
                case 4:
                    message.legacy_steam_id = reader.fixed64();
                    break;
                case 11:
                    message.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.identity_string = reader.string();
                    break;
                case 5:
                    if (!(message.gameserver_datacenter_ids && message.gameserver_datacenter_ids.length))
                        message.gameserver_datacenter_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.gameserver_datacenter_ids.push(reader.fixed32());
                    } else
                        message.gameserver_datacenter_ids.push(reader.fixed32());
                    break;
                case 8:
                    message.time_created = reader.fixed32();
                    break;
                case 9:
                    message.time_expiry = reader.fixed32();
                    break;
                case 10:
                    if (!(message.app_ids && message.app_ids.length))
                        message.app_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.app_ids.push(reader.uint32());
                    } else
                        message.app_ids.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificate message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                switch (message.key_type) {
                default:
                    return "key_type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.key_data != null && message.hasOwnProperty("key_data"))
                if (!(message.key_data && typeof message.key_data.length === "number" || $util.isString(message.key_data)))
                    return "key_data: buffer expected";
            if (message.legacy_steam_id != null && message.hasOwnProperty("legacy_steam_id"))
                if (!$util.isInteger(message.legacy_steam_id) && !(message.legacy_steam_id && $util.isInteger(message.legacy_steam_id.low) && $util.isInteger(message.legacy_steam_id.high)))
                    return "legacy_steam_id: integer|Long expected";
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary")) {
                var error = $root.CMsgSteamNetworkingIdentityLegacyBinary.verify(message.legacy_identity_binary);
                if (error)
                    return "legacy_identity_binary." + error;
            }
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                if (!$util.isString(message.identity_string))
                    return "identity_string: string expected";
            if (message.gameserver_datacenter_ids != null && message.hasOwnProperty("gameserver_datacenter_ids")) {
                if (!Array.isArray(message.gameserver_datacenter_ids))
                    return "gameserver_datacenter_ids: array expected";
                for (var i = 0; i < message.gameserver_datacenter_ids.length; ++i)
                    if (!$util.isInteger(message.gameserver_datacenter_ids[i]))
                        return "gameserver_datacenter_ids: integer[] expected";
            }
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                if (!$util.isInteger(message.time_created))
                    return "time_created: integer expected";
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                if (!$util.isInteger(message.time_expiry))
                    return "time_expiry: integer expected";
            if (message.app_ids != null && message.hasOwnProperty("app_ids")) {
                if (!Array.isArray(message.app_ids))
                    return "app_ids: array expected";
                for (var i = 0; i < message.app_ids.length; ++i)
                    if (!$util.isInteger(message.app_ids[i]))
                        return "app_ids: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificate} CMsgSteamDatagramCertificate
         */
        CMsgSteamDatagramCertificate.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramCertificate)
                return object;
            var message = new $root.CMsgSteamDatagramCertificate();
            switch (object.key_type) {
            case "INVALID":
            case 0:
                message.key_type = 0;
                break;
            case "ED25519":
            case 1:
                message.key_type = 1;
                break;
            }
            if (object.key_data != null)
                if (typeof object.key_data === "string")
                    $util.base64.decode(object.key_data, message.key_data = $util.newBuffer($util.base64.length(object.key_data)), 0);
                else if (object.key_data.length)
                    message.key_data = object.key_data;
            if (object.legacy_steam_id != null)
                if ($util.Long)
                    (message.legacy_steam_id = $util.Long.fromValue(object.legacy_steam_id)).unsigned = false;
                else if (typeof object.legacy_steam_id === "string")
                    message.legacy_steam_id = parseInt(object.legacy_steam_id, 10);
                else if (typeof object.legacy_steam_id === "number")
                    message.legacy_steam_id = object.legacy_steam_id;
                else if (typeof object.legacy_steam_id === "object")
                    message.legacy_steam_id = new $util.LongBits(object.legacy_steam_id.low >>> 0, object.legacy_steam_id.high >>> 0).toNumber();
            if (object.legacy_identity_binary != null) {
                if (typeof object.legacy_identity_binary !== "object")
                    throw TypeError(".CMsgSteamDatagramCertificate.legacy_identity_binary: object expected");
                message.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.fromObject(object.legacy_identity_binary);
            }
            if (object.identity_string != null)
                message.identity_string = String(object.identity_string);
            if (object.gameserver_datacenter_ids) {
                if (!Array.isArray(object.gameserver_datacenter_ids))
                    throw TypeError(".CMsgSteamDatagramCertificate.gameserver_datacenter_ids: array expected");
                message.gameserver_datacenter_ids = [];
                for (var i = 0; i < object.gameserver_datacenter_ids.length; ++i)
                    message.gameserver_datacenter_ids[i] = object.gameserver_datacenter_ids[i] >>> 0;
            }
            if (object.time_created != null)
                message.time_created = object.time_created >>> 0;
            if (object.time_expiry != null)
                message.time_expiry = object.time_expiry >>> 0;
            if (object.app_ids) {
                if (!Array.isArray(object.app_ids))
                    throw TypeError(".CMsgSteamDatagramCertificate.app_ids: array expected");
                message.app_ids = [];
                for (var i = 0; i < object.app_ids.length; ++i)
                    message.app_ids[i] = object.app_ids[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificate
         * @static
         * @param {CMsgSteamDatagramCertificate} message CMsgSteamDatagramCertificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.gameserver_datacenter_ids = [];
                object.app_ids = [];
            }
            if (options.defaults) {
                object.key_type = options.enums === String ? "INVALID" : 0;
                if (options.bytes === String)
                    object.key_data = "";
                else {
                    object.key_data = [];
                    if (options.bytes !== Array)
                        object.key_data = $util.newBuffer(object.key_data);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacy_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacy_steam_id = options.longs === String ? "0" : 0;
                object.time_created = 0;
                object.time_expiry = 0;
                object.legacy_identity_binary = null;
                object.identity_string = "";
            }
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                object.key_type = options.enums === String ? $root.CMsgSteamDatagramCertificate.EKeyType[message.key_type] : message.key_type;
            if (message.key_data != null && message.hasOwnProperty("key_data"))
                object.key_data = options.bytes === String ? $util.base64.encode(message.key_data, 0, message.key_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.key_data) : message.key_data;
            if (message.legacy_steam_id != null && message.hasOwnProperty("legacy_steam_id"))
                if (typeof message.legacy_steam_id === "number")
                    object.legacy_steam_id = options.longs === String ? String(message.legacy_steam_id) : message.legacy_steam_id;
                else
                    object.legacy_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.legacy_steam_id) : options.longs === Number ? new $util.LongBits(message.legacy_steam_id.low >>> 0, message.legacy_steam_id.high >>> 0).toNumber() : message.legacy_steam_id;
            if (message.gameserver_datacenter_ids && message.gameserver_datacenter_ids.length) {
                object.gameserver_datacenter_ids = [];
                for (var j = 0; j < message.gameserver_datacenter_ids.length; ++j)
                    object.gameserver_datacenter_ids[j] = message.gameserver_datacenter_ids[j];
            }
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                object.time_created = message.time_created;
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                object.time_expiry = message.time_expiry;
            if (message.app_ids && message.app_ids.length) {
                object.app_ids = [];
                for (var j = 0; j < message.app_ids.length; ++j)
                    object.app_ids[j] = message.app_ids[j];
            }
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                object.legacy_identity_binary = $root.CMsgSteamNetworkingIdentityLegacyBinary.toObject(message.legacy_identity_binary, options);
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                object.identity_string = message.identity_string;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificate to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EKeyType enum.
         * @name CMsgSteamDatagramCertificate.EKeyType
         * @enum {string}
         * @property {number} INVALID=0 INVALID value
         * @property {number} ED25519=1 ED25519 value
         */
        CMsgSteamDatagramCertificate.EKeyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "ED25519"] = 1;
            return values;
        })();
    
        return CMsgSteamDatagramCertificate;
    })();
    
    $root.CMsgSteamDatagramCertificateSigned = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificateSigned.
         * @exports ICMsgSteamDatagramCertificateSigned
         * @interface ICMsgSteamDatagramCertificateSigned
         * @property {Uint8Array|null} [cert] CMsgSteamDatagramCertificateSigned cert
         * @property {number|Long|null} [ca_key_id] CMsgSteamDatagramCertificateSigned ca_key_id
         * @property {Uint8Array|null} [ca_signature] CMsgSteamDatagramCertificateSigned ca_signature
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificateSigned.
         * @exports CMsgSteamDatagramCertificateSigned
         * @classdesc Represents a CMsgSteamDatagramCertificateSigned.
         * @implements ICMsgSteamDatagramCertificateSigned
         * @constructor
         * @param {ICMsgSteamDatagramCertificateSigned=} [properties] Properties to set
         */
        function CMsgSteamDatagramCertificateSigned(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramCertificateSigned cert.
         * @member {Uint8Array} cert
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.cert = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCertificateSigned ca_key_id.
         * @member {number|Long} ca_key_id
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.ca_key_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramCertificateSigned ca_signature.
         * @member {Uint8Array} ca_signature
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         */
        CMsgSteamDatagramCertificateSigned.prototype.ca_signature = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramCertificateSigned instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {ICMsgSteamDatagramCertificateSigned=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned instance
         */
        CMsgSteamDatagramCertificateSigned.create = function create(properties) {
            return new CMsgSteamDatagramCertificateSigned(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateSigned message. Does not implicitly {@link CMsgSteamDatagramCertificateSigned.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {ICMsgSteamDatagramCertificateSigned} message CMsgSteamDatagramCertificateSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateSigned.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cert != null && message.hasOwnProperty("cert"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.cert);
            if (message.ca_key_id != null && message.hasOwnProperty("ca_key_id"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.ca_key_id);
            if (message.ca_signature != null && message.hasOwnProperty("ca_signature"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.ca_signature);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateSigned message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificateSigned.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {ICMsgSteamDatagramCertificateSigned} message CMsgSteamDatagramCertificateSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateSigned.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateSigned message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateSigned.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramCertificateSigned();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4:
                    message.cert = reader.bytes();
                    break;
                case 5:
                    message.ca_key_id = reader.fixed64();
                    break;
                case 6:
                    message.ca_signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateSigned message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateSigned.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificateSigned message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificateSigned.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cert != null && message.hasOwnProperty("cert"))
                if (!(message.cert && typeof message.cert.length === "number" || $util.isString(message.cert)))
                    return "cert: buffer expected";
            if (message.ca_key_id != null && message.hasOwnProperty("ca_key_id"))
                if (!$util.isInteger(message.ca_key_id) && !(message.ca_key_id && $util.isInteger(message.ca_key_id.low) && $util.isInteger(message.ca_key_id.high)))
                    return "ca_key_id: integer|Long expected";
            if (message.ca_signature != null && message.hasOwnProperty("ca_signature"))
                if (!(message.ca_signature && typeof message.ca_signature.length === "number" || $util.isString(message.ca_signature)))
                    return "ca_signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificateSigned message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificateSigned} CMsgSteamDatagramCertificateSigned
         */
        CMsgSteamDatagramCertificateSigned.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramCertificateSigned)
                return object;
            var message = new $root.CMsgSteamDatagramCertificateSigned();
            if (object.cert != null)
                if (typeof object.cert === "string")
                    $util.base64.decode(object.cert, message.cert = $util.newBuffer($util.base64.length(object.cert)), 0);
                else if (object.cert.length)
                    message.cert = object.cert;
            if (object.ca_key_id != null)
                if ($util.Long)
                    (message.ca_key_id = $util.Long.fromValue(object.ca_key_id)).unsigned = false;
                else if (typeof object.ca_key_id === "string")
                    message.ca_key_id = parseInt(object.ca_key_id, 10);
                else if (typeof object.ca_key_id === "number")
                    message.ca_key_id = object.ca_key_id;
                else if (typeof object.ca_key_id === "object")
                    message.ca_key_id = new $util.LongBits(object.ca_key_id.low >>> 0, object.ca_key_id.high >>> 0).toNumber();
            if (object.ca_signature != null)
                if (typeof object.ca_signature === "string")
                    $util.base64.decode(object.ca_signature, message.ca_signature = $util.newBuffer($util.base64.length(object.ca_signature)), 0);
                else if (object.ca_signature.length)
                    message.ca_signature = object.ca_signature;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificateSigned message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificateSigned
         * @static
         * @param {CMsgSteamDatagramCertificateSigned} message CMsgSteamDatagramCertificateSigned
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificateSigned.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.cert = "";
                else {
                    object.cert = [];
                    if (options.bytes !== Array)
                        object.cert = $util.newBuffer(object.cert);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ca_key_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ca_key_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.ca_signature = "";
                else {
                    object.ca_signature = [];
                    if (options.bytes !== Array)
                        object.ca_signature = $util.newBuffer(object.ca_signature);
                }
            }
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = options.bytes === String ? $util.base64.encode(message.cert, 0, message.cert.length) : options.bytes === Array ? Array.prototype.slice.call(message.cert) : message.cert;
            if (message.ca_key_id != null && message.hasOwnProperty("ca_key_id"))
                if (typeof message.ca_key_id === "number")
                    object.ca_key_id = options.longs === String ? String(message.ca_key_id) : message.ca_key_id;
                else
                    object.ca_key_id = options.longs === String ? $util.Long.prototype.toString.call(message.ca_key_id) : options.longs === Number ? new $util.LongBits(message.ca_key_id.low >>> 0, message.ca_key_id.high >>> 0).toNumber() : message.ca_key_id;
            if (message.ca_signature != null && message.hasOwnProperty("ca_signature"))
                object.ca_signature = options.bytes === String ? $util.base64.encode(message.ca_signature, 0, message.ca_signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.ca_signature) : message.ca_signature;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificateSigned to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificateSigned
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificateSigned.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramCertificateSigned;
    })();
    
    $root.CMsgSteamDatagramCertificateRequest = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificateRequest.
         * @exports ICMsgSteamDatagramCertificateRequest
         * @interface ICMsgSteamDatagramCertificateRequest
         * @property {ICMsgSteamDatagramCertificate|null} [cert] CMsgSteamDatagramCertificateRequest cert
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCertificateRequest.
         * @exports CMsgSteamDatagramCertificateRequest
         * @classdesc Represents a CMsgSteamDatagramCertificateRequest.
         * @implements ICMsgSteamDatagramCertificateRequest
         * @constructor
         * @param {ICMsgSteamDatagramCertificateRequest=} [properties] Properties to set
         */
        function CMsgSteamDatagramCertificateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramCertificateRequest cert.
         * @member {ICMsgSteamDatagramCertificate|null|undefined} cert
         * @memberof CMsgSteamDatagramCertificateRequest
         * @instance
         */
        CMsgSteamDatagramCertificateRequest.prototype.cert = null;
    
        /**
         * Creates a new CMsgSteamDatagramCertificateRequest instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {ICMsgSteamDatagramCertificateRequest=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest instance
         */
        CMsgSteamDatagramCertificateRequest.create = function create(properties) {
            return new CMsgSteamDatagramCertificateRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateRequest message. Does not implicitly {@link CMsgSteamDatagramCertificateRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {ICMsgSteamDatagramCertificateRequest} message CMsgSteamDatagramCertificateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cert != null && message.hasOwnProperty("cert"))
                $root.CMsgSteamDatagramCertificate.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCertificateRequest message, length delimited. Does not implicitly {@link CMsgSteamDatagramCertificateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {ICMsgSteamDatagramCertificateRequest} message CMsgSteamDatagramCertificateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCertificateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramCertificateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cert = $root.CMsgSteamDatagramCertificate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCertificateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCertificateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCertificateRequest message.
         * @function verify
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCertificateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cert != null && message.hasOwnProperty("cert")) {
                var error = $root.CMsgSteamDatagramCertificate.verify(message.cert);
                if (error)
                    return "cert." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCertificateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCertificateRequest} CMsgSteamDatagramCertificateRequest
         */
        CMsgSteamDatagramCertificateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramCertificateRequest)
                return object;
            var message = new $root.CMsgSteamDatagramCertificateRequest();
            if (object.cert != null) {
                if (typeof object.cert !== "object")
                    throw TypeError(".CMsgSteamDatagramCertificateRequest.cert: object expected");
                message.cert = $root.CMsgSteamDatagramCertificate.fromObject(object.cert);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCertificateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCertificateRequest
         * @static
         * @param {CMsgSteamDatagramCertificateRequest} message CMsgSteamDatagramCertificateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCertificateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cert = null;
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = $root.CMsgSteamDatagramCertificate.toObject(message.cert, options);
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCertificateRequest to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCertificateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCertificateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramCertificateRequest;
    })();
    
    $root.CMsgSteamDatagramSessionCryptInfo = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramSessionCryptInfo.
         * @exports ICMsgSteamDatagramSessionCryptInfo
         * @interface ICMsgSteamDatagramSessionCryptInfo
         * @property {CMsgSteamDatagramSessionCryptInfo.EKeyType|null} [key_type] CMsgSteamDatagramSessionCryptInfo key_type
         * @property {Uint8Array|null} [key_data] CMsgSteamDatagramSessionCryptInfo key_data
         * @property {number|Long|null} [nonce] CMsgSteamDatagramSessionCryptInfo nonce
         * @property {number|null} [protocol_version] CMsgSteamDatagramSessionCryptInfo protocol_version
         */
    
        /**
         * Constructs a new CMsgSteamDatagramSessionCryptInfo.
         * @exports CMsgSteamDatagramSessionCryptInfo
         * @classdesc Represents a CMsgSteamDatagramSessionCryptInfo.
         * @implements ICMsgSteamDatagramSessionCryptInfo
         * @constructor
         * @param {ICMsgSteamDatagramSessionCryptInfo=} [properties] Properties to set
         */
        function CMsgSteamDatagramSessionCryptInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramSessionCryptInfo key_type.
         * @member {CMsgSteamDatagramSessionCryptInfo.EKeyType} key_type
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.key_type = 0;
    
        /**
         * CMsgSteamDatagramSessionCryptInfo key_data.
         * @member {Uint8Array} key_data
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.key_data = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSessionCryptInfo nonce.
         * @member {number|Long} nonce
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramSessionCryptInfo protocol_version.
         * @member {number} protocol_version
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.protocol_version = 0;
    
        /**
         * Creates a new CMsgSteamDatagramSessionCryptInfo instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfo=} [properties] Properties to set
         * @returns {CMsgSteamDatagramSessionCryptInfo} CMsgSteamDatagramSessionCryptInfo instance
         */
        CMsgSteamDatagramSessionCryptInfo.create = function create(properties) {
            return new CMsgSteamDatagramSessionCryptInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSessionCryptInfo message. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfo} message CMsgSteamDatagramSessionCryptInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSessionCryptInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key_type);
            if (message.key_data != null && message.hasOwnProperty("key_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key_data);
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.nonce);
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.protocol_version);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSessionCryptInfo message, length delimited. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfo} message CMsgSteamDatagramSessionCryptInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSessionCryptInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramSessionCryptInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramSessionCryptInfo} CMsgSteamDatagramSessionCryptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSessionCryptInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramSessionCryptInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key_type = reader.int32();
                    break;
                case 2:
                    message.key_data = reader.bytes();
                    break;
                case 3:
                    message.nonce = reader.fixed64();
                    break;
                case 4:
                    message.protocol_version = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramSessionCryptInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramSessionCryptInfo} CMsgSteamDatagramSessionCryptInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSessionCryptInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramSessionCryptInfo message.
         * @function verify
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramSessionCryptInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                switch (message.key_type) {
                default:
                    return "key_type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.key_data != null && message.hasOwnProperty("key_data"))
                if (!(message.key_data && typeof message.key_data.length === "number" || $util.isString(message.key_data)))
                    return "key_data: buffer expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                    return "nonce: integer|Long expected";
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                if (!$util.isInteger(message.protocol_version))
                    return "protocol_version: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramSessionCryptInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramSessionCryptInfo} CMsgSteamDatagramSessionCryptInfo
         */
        CMsgSteamDatagramSessionCryptInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramSessionCryptInfo)
                return object;
            var message = new $root.CMsgSteamDatagramSessionCryptInfo();
            switch (object.key_type) {
            case "INVALID":
            case 0:
                message.key_type = 0;
                break;
            case "CURVE25519":
            case 1:
                message.key_type = 1;
                break;
            }
            if (object.key_data != null)
                if (typeof object.key_data === "string")
                    $util.base64.decode(object.key_data, message.key_data = $util.newBuffer($util.base64.length(object.key_data)), 0);
                else if (object.key_data.length)
                    message.key_data = object.key_data;
            if (object.nonce != null)
                if ($util.Long)
                    (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = false;
                else if (typeof object.nonce === "string")
                    message.nonce = parseInt(object.nonce, 10);
                else if (typeof object.nonce === "number")
                    message.nonce = object.nonce;
                else if (typeof object.nonce === "object")
                    message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber();
            if (object.protocol_version != null)
                message.protocol_version = object.protocol_version >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramSessionCryptInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @static
         * @param {CMsgSteamDatagramSessionCryptInfo} message CMsgSteamDatagramSessionCryptInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramSessionCryptInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key_type = options.enums === String ? "INVALID" : 0;
                if (options.bytes === String)
                    object.key_data = "";
                else {
                    object.key_data = [];
                    if (options.bytes !== Array)
                        object.key_data = $util.newBuffer(object.key_data);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nonce = options.longs === String ? "0" : 0;
                object.protocol_version = 0;
            }
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                object.key_type = options.enums === String ? $root.CMsgSteamDatagramSessionCryptInfo.EKeyType[message.key_type] : message.key_type;
            if (message.key_data != null && message.hasOwnProperty("key_data"))
                object.key_data = options.bytes === String ? $util.base64.encode(message.key_data, 0, message.key_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.key_data) : message.key_data;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (typeof message.nonce === "number")
                    object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                else
                    object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber() : message.nonce;
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                object.protocol_version = message.protocol_version;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramSessionCryptInfo to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramSessionCryptInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramSessionCryptInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * EKeyType enum.
         * @name CMsgSteamDatagramSessionCryptInfo.EKeyType
         * @enum {string}
         * @property {number} INVALID=0 INVALID value
         * @property {number} CURVE25519=1 CURVE25519 value
         */
        CMsgSteamDatagramSessionCryptInfo.EKeyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "CURVE25519"] = 1;
            return values;
        })();
    
        return CMsgSteamDatagramSessionCryptInfo;
    })();
    
    $root.CMsgSteamDatagramSessionCryptInfoSigned = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramSessionCryptInfoSigned.
         * @exports ICMsgSteamDatagramSessionCryptInfoSigned
         * @interface ICMsgSteamDatagramSessionCryptInfoSigned
         * @property {Uint8Array|null} [info] CMsgSteamDatagramSessionCryptInfoSigned info
         * @property {Uint8Array|null} [signature] CMsgSteamDatagramSessionCryptInfoSigned signature
         */
    
        /**
         * Constructs a new CMsgSteamDatagramSessionCryptInfoSigned.
         * @exports CMsgSteamDatagramSessionCryptInfoSigned
         * @classdesc Represents a CMsgSteamDatagramSessionCryptInfoSigned.
         * @implements ICMsgSteamDatagramSessionCryptInfoSigned
         * @constructor
         * @param {ICMsgSteamDatagramSessionCryptInfoSigned=} [properties] Properties to set
         */
        function CMsgSteamDatagramSessionCryptInfoSigned(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramSessionCryptInfoSigned info.
         * @member {Uint8Array} info
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfoSigned.prototype.info = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSessionCryptInfoSigned signature.
         * @member {Uint8Array} signature
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @instance
         */
        CMsgSteamDatagramSessionCryptInfoSigned.prototype.signature = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramSessionCryptInfoSigned instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfoSigned=} [properties] Properties to set
         * @returns {CMsgSteamDatagramSessionCryptInfoSigned} CMsgSteamDatagramSessionCryptInfoSigned instance
         */
        CMsgSteamDatagramSessionCryptInfoSigned.create = function create(properties) {
            return new CMsgSteamDatagramSessionCryptInfoSigned(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSessionCryptInfoSigned message. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfoSigned.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfoSigned} message CMsgSteamDatagramSessionCryptInfoSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSessionCryptInfoSigned.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && message.hasOwnProperty("info"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.info);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSessionCryptInfoSigned message, length delimited. Does not implicitly {@link CMsgSteamDatagramSessionCryptInfoSigned.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {ICMsgSteamDatagramSessionCryptInfoSigned} message CMsgSteamDatagramSessionCryptInfoSigned message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSessionCryptInfoSigned.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramSessionCryptInfoSigned message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramSessionCryptInfoSigned} CMsgSteamDatagramSessionCryptInfoSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSessionCryptInfoSigned.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramSessionCryptInfoSigned();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = reader.bytes();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramSessionCryptInfoSigned message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramSessionCryptInfoSigned} CMsgSteamDatagramSessionCryptInfoSigned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSessionCryptInfoSigned.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramSessionCryptInfoSigned message.
         * @function verify
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramSessionCryptInfoSigned.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!(message.info && typeof message.info.length === "number" || $util.isString(message.info)))
                    return "info: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramSessionCryptInfoSigned message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramSessionCryptInfoSigned} CMsgSteamDatagramSessionCryptInfoSigned
         */
        CMsgSteamDatagramSessionCryptInfoSigned.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramSessionCryptInfoSigned)
                return object;
            var message = new $root.CMsgSteamDatagramSessionCryptInfoSigned();
            if (object.info != null)
                if (typeof object.info === "string")
                    $util.base64.decode(object.info, message.info = $util.newBuffer($util.base64.length(object.info)), 0);
                else if (object.info.length)
                    message.info = object.info;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramSessionCryptInfoSigned message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @static
         * @param {CMsgSteamDatagramSessionCryptInfoSigned} message CMsgSteamDatagramSessionCryptInfoSigned
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramSessionCryptInfoSigned.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.info = "";
                else {
                    object.info = [];
                    if (options.bytes !== Array)
                        object.info = $util.newBuffer(object.info);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = options.bytes === String ? $util.base64.encode(message.info, 0, message.info.length) : options.bytes === Array ? Array.prototype.slice.call(message.info) : message.info;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramSessionCryptInfoSigned to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramSessionCryptInfoSigned
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramSessionCryptInfoSigned.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramSessionCryptInfoSigned;
    })();
    
    $root.CMsgSteamDatagramDiagnostic = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramDiagnostic.
         * @exports ICMsgSteamDatagramDiagnostic
         * @interface ICMsgSteamDatagramDiagnostic
         * @property {number|null} [severity] CMsgSteamDatagramDiagnostic severity
         * @property {string|null} [text] CMsgSteamDatagramDiagnostic text
         */
    
        /**
         * Constructs a new CMsgSteamDatagramDiagnostic.
         * @exports CMsgSteamDatagramDiagnostic
         * @classdesc Represents a CMsgSteamDatagramDiagnostic.
         * @implements ICMsgSteamDatagramDiagnostic
         * @constructor
         * @param {ICMsgSteamDatagramDiagnostic=} [properties] Properties to set
         */
        function CMsgSteamDatagramDiagnostic(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramDiagnostic severity.
         * @member {number} severity
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         */
        CMsgSteamDatagramDiagnostic.prototype.severity = 0;
    
        /**
         * CMsgSteamDatagramDiagnostic text.
         * @member {string} text
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         */
        CMsgSteamDatagramDiagnostic.prototype.text = "";
    
        /**
         * Creates a new CMsgSteamDatagramDiagnostic instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic=} [properties] Properties to set
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic instance
         */
        CMsgSteamDatagramDiagnostic.create = function create(properties) {
            return new CMsgSteamDatagramDiagnostic(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramDiagnostic message. Does not implicitly {@link CMsgSteamDatagramDiagnostic.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramDiagnostic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.severity != null && message.hasOwnProperty("severity"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.severity);
            if (message.text != null && message.hasOwnProperty("text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramDiagnostic message, length delimited. Does not implicitly {@link CMsgSteamDatagramDiagnostic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {ICMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramDiagnostic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramDiagnostic message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramDiagnostic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramDiagnostic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.severity = reader.uint32();
                    break;
                case 2:
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
         * Decodes a CMsgSteamDatagramDiagnostic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramDiagnostic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramDiagnostic message.
         * @function verify
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramDiagnostic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.severity != null && message.hasOwnProperty("severity"))
                if (!$util.isInteger(message.severity))
                    return "severity: integer expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramDiagnostic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramDiagnostic} CMsgSteamDatagramDiagnostic
         */
        CMsgSteamDatagramDiagnostic.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramDiagnostic)
                return object;
            var message = new $root.CMsgSteamDatagramDiagnostic();
            if (object.severity != null)
                message.severity = object.severity >>> 0;
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramDiagnostic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramDiagnostic
         * @static
         * @param {CMsgSteamDatagramDiagnostic} message CMsgSteamDatagramDiagnostic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramDiagnostic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.severity = 0;
                object.text = "";
            }
            if (message.severity != null && message.hasOwnProperty("severity"))
                object.severity = message.severity;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramDiagnostic to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramDiagnostic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramDiagnostic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramDiagnostic;
    })();
    
    $root.CMsgSteamDatagramLinkInstantaneousStats = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramLinkInstantaneousStats.
         * @exports ICMsgSteamDatagramLinkInstantaneousStats
         * @interface ICMsgSteamDatagramLinkInstantaneousStats
         * @property {number|null} [out_packets_per_sec_x10] CMsgSteamDatagramLinkInstantaneousStats out_packets_per_sec_x10
         * @property {number|null} [out_bytes_per_sec] CMsgSteamDatagramLinkInstantaneousStats out_bytes_per_sec
         * @property {number|null} [in_packets_per_sec_x10] CMsgSteamDatagramLinkInstantaneousStats in_packets_per_sec_x10
         * @property {number|null} [in_bytes_per_sec] CMsgSteamDatagramLinkInstantaneousStats in_bytes_per_sec
         * @property {number|null} [ping_ms] CMsgSteamDatagramLinkInstantaneousStats ping_ms
         * @property {number|null} [packets_dropped_pct] CMsgSteamDatagramLinkInstantaneousStats packets_dropped_pct
         * @property {number|null} [packets_weird_sequence_pct] CMsgSteamDatagramLinkInstantaneousStats packets_weird_sequence_pct
         * @property {number|null} [peak_jitter_usec] CMsgSteamDatagramLinkInstantaneousStats peak_jitter_usec
         */
    
        /**
         * Constructs a new CMsgSteamDatagramLinkInstantaneousStats.
         * @exports CMsgSteamDatagramLinkInstantaneousStats
         * @classdesc Represents a CMsgSteamDatagramLinkInstantaneousStats.
         * @implements ICMsgSteamDatagramLinkInstantaneousStats
         * @constructor
         * @param {ICMsgSteamDatagramLinkInstantaneousStats=} [properties] Properties to set
         */
        function CMsgSteamDatagramLinkInstantaneousStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats out_packets_per_sec_x10.
         * @member {number} out_packets_per_sec_x10
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.out_packets_per_sec_x10 = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats out_bytes_per_sec.
         * @member {number} out_bytes_per_sec
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.out_bytes_per_sec = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats in_packets_per_sec_x10.
         * @member {number} in_packets_per_sec_x10
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.in_packets_per_sec_x10 = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats in_bytes_per_sec.
         * @member {number} in_bytes_per_sec
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.in_bytes_per_sec = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats ping_ms.
         * @member {number} ping_ms
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.ping_ms = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats packets_dropped_pct.
         * @member {number} packets_dropped_pct
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.packets_dropped_pct = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats packets_weird_sequence_pct.
         * @member {number} packets_weird_sequence_pct
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.packets_weird_sequence_pct = 0;
    
        /**
         * CMsgSteamDatagramLinkInstantaneousStats peak_jitter_usec.
         * @member {number} peak_jitter_usec
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.peak_jitter_usec = 0;
    
        /**
         * Creates a new CMsgSteamDatagramLinkInstantaneousStats instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats=} [properties] Properties to set
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats instance
         */
        CMsgSteamDatagramLinkInstantaneousStats.create = function create(properties) {
            return new CMsgSteamDatagramLinkInstantaneousStats(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkInstantaneousStats message. Does not implicitly {@link CMsgSteamDatagramLinkInstantaneousStats.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkInstantaneousStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.out_packets_per_sec_x10 != null && message.hasOwnProperty("out_packets_per_sec_x10"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.out_packets_per_sec_x10);
            if (message.out_bytes_per_sec != null && message.hasOwnProperty("out_bytes_per_sec"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.out_bytes_per_sec);
            if (message.in_packets_per_sec_x10 != null && message.hasOwnProperty("in_packets_per_sec_x10"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.in_packets_per_sec_x10);
            if (message.in_bytes_per_sec != null && message.hasOwnProperty("in_bytes_per_sec"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.in_bytes_per_sec);
            if (message.ping_ms != null && message.hasOwnProperty("ping_ms"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ping_ms);
            if (message.packets_dropped_pct != null && message.hasOwnProperty("packets_dropped_pct"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.packets_dropped_pct);
            if (message.packets_weird_sequence_pct != null && message.hasOwnProperty("packets_weird_sequence_pct"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.packets_weird_sequence_pct);
            if (message.peak_jitter_usec != null && message.hasOwnProperty("peak_jitter_usec"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.peak_jitter_usec);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkInstantaneousStats message, length delimited. Does not implicitly {@link CMsgSteamDatagramLinkInstantaneousStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {ICMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkInstantaneousStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkInstantaneousStats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkInstantaneousStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramLinkInstantaneousStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.out_packets_per_sec_x10 = reader.uint32();
                    break;
                case 2:
                    message.out_bytes_per_sec = reader.uint32();
                    break;
                case 3:
                    message.in_packets_per_sec_x10 = reader.uint32();
                    break;
                case 4:
                    message.in_bytes_per_sec = reader.uint32();
                    break;
                case 5:
                    message.ping_ms = reader.uint32();
                    break;
                case 6:
                    message.packets_dropped_pct = reader.uint32();
                    break;
                case 7:
                    message.packets_weird_sequence_pct = reader.uint32();
                    break;
                case 8:
                    message.peak_jitter_usec = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkInstantaneousStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkInstantaneousStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramLinkInstantaneousStats message.
         * @function verify
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramLinkInstantaneousStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.out_packets_per_sec_x10 != null && message.hasOwnProperty("out_packets_per_sec_x10"))
                if (!$util.isInteger(message.out_packets_per_sec_x10))
                    return "out_packets_per_sec_x10: integer expected";
            if (message.out_bytes_per_sec != null && message.hasOwnProperty("out_bytes_per_sec"))
                if (!$util.isInteger(message.out_bytes_per_sec))
                    return "out_bytes_per_sec: integer expected";
            if (message.in_packets_per_sec_x10 != null && message.hasOwnProperty("in_packets_per_sec_x10"))
                if (!$util.isInteger(message.in_packets_per_sec_x10))
                    return "in_packets_per_sec_x10: integer expected";
            if (message.in_bytes_per_sec != null && message.hasOwnProperty("in_bytes_per_sec"))
                if (!$util.isInteger(message.in_bytes_per_sec))
                    return "in_bytes_per_sec: integer expected";
            if (message.ping_ms != null && message.hasOwnProperty("ping_ms"))
                if (!$util.isInteger(message.ping_ms))
                    return "ping_ms: integer expected";
            if (message.packets_dropped_pct != null && message.hasOwnProperty("packets_dropped_pct"))
                if (!$util.isInteger(message.packets_dropped_pct))
                    return "packets_dropped_pct: integer expected";
            if (message.packets_weird_sequence_pct != null && message.hasOwnProperty("packets_weird_sequence_pct"))
                if (!$util.isInteger(message.packets_weird_sequence_pct))
                    return "packets_weird_sequence_pct: integer expected";
            if (message.peak_jitter_usec != null && message.hasOwnProperty("peak_jitter_usec"))
                if (!$util.isInteger(message.peak_jitter_usec))
                    return "peak_jitter_usec: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramLinkInstantaneousStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramLinkInstantaneousStats} CMsgSteamDatagramLinkInstantaneousStats
         */
        CMsgSteamDatagramLinkInstantaneousStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramLinkInstantaneousStats)
                return object;
            var message = new $root.CMsgSteamDatagramLinkInstantaneousStats();
            if (object.out_packets_per_sec_x10 != null)
                message.out_packets_per_sec_x10 = object.out_packets_per_sec_x10 >>> 0;
            if (object.out_bytes_per_sec != null)
                message.out_bytes_per_sec = object.out_bytes_per_sec >>> 0;
            if (object.in_packets_per_sec_x10 != null)
                message.in_packets_per_sec_x10 = object.in_packets_per_sec_x10 >>> 0;
            if (object.in_bytes_per_sec != null)
                message.in_bytes_per_sec = object.in_bytes_per_sec >>> 0;
            if (object.ping_ms != null)
                message.ping_ms = object.ping_ms >>> 0;
            if (object.packets_dropped_pct != null)
                message.packets_dropped_pct = object.packets_dropped_pct >>> 0;
            if (object.packets_weird_sequence_pct != null)
                message.packets_weird_sequence_pct = object.packets_weird_sequence_pct >>> 0;
            if (object.peak_jitter_usec != null)
                message.peak_jitter_usec = object.peak_jitter_usec >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramLinkInstantaneousStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @static
         * @param {CMsgSteamDatagramLinkInstantaneousStats} message CMsgSteamDatagramLinkInstantaneousStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramLinkInstantaneousStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.out_packets_per_sec_x10 = 0;
                object.out_bytes_per_sec = 0;
                object.in_packets_per_sec_x10 = 0;
                object.in_bytes_per_sec = 0;
                object.ping_ms = 0;
                object.packets_dropped_pct = 0;
                object.packets_weird_sequence_pct = 0;
                object.peak_jitter_usec = 0;
            }
            if (message.out_packets_per_sec_x10 != null && message.hasOwnProperty("out_packets_per_sec_x10"))
                object.out_packets_per_sec_x10 = message.out_packets_per_sec_x10;
            if (message.out_bytes_per_sec != null && message.hasOwnProperty("out_bytes_per_sec"))
                object.out_bytes_per_sec = message.out_bytes_per_sec;
            if (message.in_packets_per_sec_x10 != null && message.hasOwnProperty("in_packets_per_sec_x10"))
                object.in_packets_per_sec_x10 = message.in_packets_per_sec_x10;
            if (message.in_bytes_per_sec != null && message.hasOwnProperty("in_bytes_per_sec"))
                object.in_bytes_per_sec = message.in_bytes_per_sec;
            if (message.ping_ms != null && message.hasOwnProperty("ping_ms"))
                object.ping_ms = message.ping_ms;
            if (message.packets_dropped_pct != null && message.hasOwnProperty("packets_dropped_pct"))
                object.packets_dropped_pct = message.packets_dropped_pct;
            if (message.packets_weird_sequence_pct != null && message.hasOwnProperty("packets_weird_sequence_pct"))
                object.packets_weird_sequence_pct = message.packets_weird_sequence_pct;
            if (message.peak_jitter_usec != null && message.hasOwnProperty("peak_jitter_usec"))
                object.peak_jitter_usec = message.peak_jitter_usec;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramLinkInstantaneousStats to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramLinkInstantaneousStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramLinkInstantaneousStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramLinkInstantaneousStats;
    })();
    
    $root.CMsgSteamDatagramLinkLifetimeStats = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramLinkLifetimeStats.
         * @exports ICMsgSteamDatagramLinkLifetimeStats
         * @interface ICMsgSteamDatagramLinkLifetimeStats
         * @property {number|Long|null} [packets_sent] CMsgSteamDatagramLinkLifetimeStats packets_sent
         * @property {number|Long|null} [kb_sent] CMsgSteamDatagramLinkLifetimeStats kb_sent
         * @property {number|Long|null} [packets_recv] CMsgSteamDatagramLinkLifetimeStats packets_recv
         * @property {number|Long|null} [kb_recv] CMsgSteamDatagramLinkLifetimeStats kb_recv
         * @property {number|Long|null} [packets_recv_sequenced] CMsgSteamDatagramLinkLifetimeStats packets_recv_sequenced
         * @property {number|Long|null} [packets_recv_dropped] CMsgSteamDatagramLinkLifetimeStats packets_recv_dropped
         * @property {number|Long|null} [packets_recv_out_of_order] CMsgSteamDatagramLinkLifetimeStats packets_recv_out_of_order
         * @property {number|Long|null} [packets_recv_duplicate] CMsgSteamDatagramLinkLifetimeStats packets_recv_duplicate
         * @property {number|Long|null} [packets_recv_lurch] CMsgSteamDatagramLinkLifetimeStats packets_recv_lurch
         * @property {number|null} [quality_histogram_100] CMsgSteamDatagramLinkLifetimeStats quality_histogram_100
         * @property {number|null} [quality_histogram_99] CMsgSteamDatagramLinkLifetimeStats quality_histogram_99
         * @property {number|null} [quality_histogram_97] CMsgSteamDatagramLinkLifetimeStats quality_histogram_97
         * @property {number|null} [quality_histogram_95] CMsgSteamDatagramLinkLifetimeStats quality_histogram_95
         * @property {number|null} [quality_histogram_90] CMsgSteamDatagramLinkLifetimeStats quality_histogram_90
         * @property {number|null} [quality_histogram_75] CMsgSteamDatagramLinkLifetimeStats quality_histogram_75
         * @property {number|null} [quality_histogram_50] CMsgSteamDatagramLinkLifetimeStats quality_histogram_50
         * @property {number|null} [quality_histogram_1] CMsgSteamDatagramLinkLifetimeStats quality_histogram_1
         * @property {number|null} [quality_histogram_dead] CMsgSteamDatagramLinkLifetimeStats quality_histogram_dead
         * @property {number|null} [quality_ntile_2nd] CMsgSteamDatagramLinkLifetimeStats quality_ntile_2nd
         * @property {number|null} [quality_ntile_5th] CMsgSteamDatagramLinkLifetimeStats quality_ntile_5th
         * @property {number|null} [quality_ntile_25th] CMsgSteamDatagramLinkLifetimeStats quality_ntile_25th
         * @property {number|null} [quality_ntile_50th] CMsgSteamDatagramLinkLifetimeStats quality_ntile_50th
         * @property {number|null} [ping_histogram_25] CMsgSteamDatagramLinkLifetimeStats ping_histogram_25
         * @property {number|null} [ping_histogram_50] CMsgSteamDatagramLinkLifetimeStats ping_histogram_50
         * @property {number|null} [ping_histogram_75] CMsgSteamDatagramLinkLifetimeStats ping_histogram_75
         * @property {number|null} [ping_histogram_100] CMsgSteamDatagramLinkLifetimeStats ping_histogram_100
         * @property {number|null} [ping_histogram_125] CMsgSteamDatagramLinkLifetimeStats ping_histogram_125
         * @property {number|null} [ping_histogram_150] CMsgSteamDatagramLinkLifetimeStats ping_histogram_150
         * @property {number|null} [ping_histogram_200] CMsgSteamDatagramLinkLifetimeStats ping_histogram_200
         * @property {number|null} [ping_histogram_300] CMsgSteamDatagramLinkLifetimeStats ping_histogram_300
         * @property {number|null} [ping_histogram_max] CMsgSteamDatagramLinkLifetimeStats ping_histogram_max
         * @property {number|null} [ping_ntile_5th] CMsgSteamDatagramLinkLifetimeStats ping_ntile_5th
         * @property {number|null} [ping_ntile_50th] CMsgSteamDatagramLinkLifetimeStats ping_ntile_50th
         * @property {number|null} [ping_ntile_75th] CMsgSteamDatagramLinkLifetimeStats ping_ntile_75th
         * @property {number|null} [ping_ntile_95th] CMsgSteamDatagramLinkLifetimeStats ping_ntile_95th
         * @property {number|null} [ping_ntile_98th] CMsgSteamDatagramLinkLifetimeStats ping_ntile_98th
         * @property {number|null} [jitter_histogram_negligible] CMsgSteamDatagramLinkLifetimeStats jitter_histogram_negligible
         * @property {number|null} [jitter_histogram_1] CMsgSteamDatagramLinkLifetimeStats jitter_histogram_1
         * @property {number|null} [jitter_histogram_2] CMsgSteamDatagramLinkLifetimeStats jitter_histogram_2
         * @property {number|null} [jitter_histogram_5] CMsgSteamDatagramLinkLifetimeStats jitter_histogram_5
         * @property {number|null} [jitter_histogram_10] CMsgSteamDatagramLinkLifetimeStats jitter_histogram_10
         * @property {number|null} [jitter_histogram_20] CMsgSteamDatagramLinkLifetimeStats jitter_histogram_20
         * @property {number|null} [txspeed_max] CMsgSteamDatagramLinkLifetimeStats txspeed_max
         * @property {number|null} [txspeed_histogram_16] CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_16
         * @property {number|null} [txspeed_histogram_32] CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_32
         * @property {number|null} [txspeed_histogram_64] CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_64
         * @property {number|null} [txspeed_histogram_128] CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_128
         * @property {number|null} [txspeed_histogram_256] CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_256
         * @property {number|null} [txspeed_histogram_512] CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_512
         * @property {number|null} [txspeed_histogram_1024] CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_1024
         * @property {number|null} [txspeed_histogram_max] CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_max
         * @property {number|null} [txspeed_ntile_5th] CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_5th
         * @property {number|null} [txspeed_ntile_50th] CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_50th
         * @property {number|null} [txspeed_ntile_75th] CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_75th
         * @property {number|null} [txspeed_ntile_95th] CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_95th
         * @property {number|null} [txspeed_ntile_98th] CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_98th
         * @property {number|null} [rxspeed_max] CMsgSteamDatagramLinkLifetimeStats rxspeed_max
         * @property {number|null} [rxspeed_histogram_16] CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_16
         * @property {number|null} [rxspeed_histogram_32] CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_32
         * @property {number|null} [rxspeed_histogram_64] CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_64
         * @property {number|null} [rxspeed_histogram_128] CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_128
         * @property {number|null} [rxspeed_histogram_256] CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_256
         * @property {number|null} [rxspeed_histogram_512] CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_512
         * @property {number|null} [rxspeed_histogram_1024] CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_1024
         * @property {number|null} [rxspeed_histogram_max] CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_max
         * @property {number|null} [rxspeed_ntile_5th] CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_5th
         * @property {number|null} [rxspeed_ntile_50th] CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_50th
         * @property {number|null} [rxspeed_ntile_75th] CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_75th
         * @property {number|null} [rxspeed_ntile_95th] CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_95th
         * @property {number|null} [rxspeed_ntile_98th] CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_98th
         */
    
        /**
         * Constructs a new CMsgSteamDatagramLinkLifetimeStats.
         * @exports CMsgSteamDatagramLinkLifetimeStats
         * @classdesc Represents a CMsgSteamDatagramLinkLifetimeStats.
         * @implements ICMsgSteamDatagramLinkLifetimeStats
         * @constructor
         * @param {ICMsgSteamDatagramLinkLifetimeStats=} [properties] Properties to set
         */
        function CMsgSteamDatagramLinkLifetimeStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_sent.
         * @member {number|Long} packets_sent
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_sent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats kb_sent.
         * @member {number|Long} kb_sent
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.kb_sent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv.
         * @member {number|Long} packets_recv
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats kb_recv.
         * @member {number|Long} kb_recv
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.kb_recv = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_sequenced.
         * @member {number|Long} packets_recv_sequenced
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_sequenced = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_dropped.
         * @member {number|Long} packets_recv_dropped
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_dropped = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_out_of_order.
         * @member {number|Long} packets_recv_out_of_order
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_out_of_order = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_duplicate.
         * @member {number|Long} packets_recv_duplicate
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_duplicate = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats packets_recv_lurch.
         * @member {number|Long} packets_recv_lurch
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.packets_recv_lurch = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_100.
         * @member {number} quality_histogram_100
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_100 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_99.
         * @member {number} quality_histogram_99
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_99 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_97.
         * @member {number} quality_histogram_97
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_97 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_95.
         * @member {number} quality_histogram_95
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_95 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_90.
         * @member {number} quality_histogram_90
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_90 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_75.
         * @member {number} quality_histogram_75
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_75 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_50.
         * @member {number} quality_histogram_50
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_50 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_1.
         * @member {number} quality_histogram_1
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_1 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_histogram_dead.
         * @member {number} quality_histogram_dead
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_histogram_dead = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_ntile_2nd.
         * @member {number} quality_ntile_2nd
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_ntile_2nd = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_ntile_5th.
         * @member {number} quality_ntile_5th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_ntile_5th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_ntile_25th.
         * @member {number} quality_ntile_25th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_ntile_25th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats quality_ntile_50th.
         * @member {number} quality_ntile_50th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.quality_ntile_50th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_25.
         * @member {number} ping_histogram_25
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_25 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_50.
         * @member {number} ping_histogram_50
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_50 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_75.
         * @member {number} ping_histogram_75
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_75 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_100.
         * @member {number} ping_histogram_100
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_100 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_125.
         * @member {number} ping_histogram_125
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_125 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_150.
         * @member {number} ping_histogram_150
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_150 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_200.
         * @member {number} ping_histogram_200
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_200 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_300.
         * @member {number} ping_histogram_300
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_300 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_histogram_max.
         * @member {number} ping_histogram_max
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_histogram_max = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_ntile_5th.
         * @member {number} ping_ntile_5th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_ntile_5th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_ntile_50th.
         * @member {number} ping_ntile_50th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_ntile_50th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_ntile_75th.
         * @member {number} ping_ntile_75th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_ntile_75th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_ntile_95th.
         * @member {number} ping_ntile_95th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_ntile_95th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats ping_ntile_98th.
         * @member {number} ping_ntile_98th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.ping_ntile_98th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitter_histogram_negligible.
         * @member {number} jitter_histogram_negligible
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitter_histogram_negligible = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitter_histogram_1.
         * @member {number} jitter_histogram_1
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitter_histogram_1 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitter_histogram_2.
         * @member {number} jitter_histogram_2
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitter_histogram_2 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitter_histogram_5.
         * @member {number} jitter_histogram_5
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitter_histogram_5 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitter_histogram_10.
         * @member {number} jitter_histogram_10
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitter_histogram_10 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats jitter_histogram_20.
         * @member {number} jitter_histogram_20
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.jitter_histogram_20 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_max.
         * @member {number} txspeed_max
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_max = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_16.
         * @member {number} txspeed_histogram_16
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_histogram_16 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_32.
         * @member {number} txspeed_histogram_32
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_histogram_32 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_64.
         * @member {number} txspeed_histogram_64
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_histogram_64 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_128.
         * @member {number} txspeed_histogram_128
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_histogram_128 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_256.
         * @member {number} txspeed_histogram_256
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_histogram_256 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_512.
         * @member {number} txspeed_histogram_512
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_histogram_512 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_1024.
         * @member {number} txspeed_histogram_1024
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_histogram_1024 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_histogram_max.
         * @member {number} txspeed_histogram_max
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_histogram_max = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_5th.
         * @member {number} txspeed_ntile_5th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_ntile_5th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_50th.
         * @member {number} txspeed_ntile_50th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_ntile_50th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_75th.
         * @member {number} txspeed_ntile_75th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_ntile_75th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_95th.
         * @member {number} txspeed_ntile_95th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_ntile_95th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats txspeed_ntile_98th.
         * @member {number} txspeed_ntile_98th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.txspeed_ntile_98th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_max.
         * @member {number} rxspeed_max
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_max = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_16.
         * @member {number} rxspeed_histogram_16
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_histogram_16 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_32.
         * @member {number} rxspeed_histogram_32
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_histogram_32 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_64.
         * @member {number} rxspeed_histogram_64
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_histogram_64 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_128.
         * @member {number} rxspeed_histogram_128
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_histogram_128 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_256.
         * @member {number} rxspeed_histogram_256
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_histogram_256 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_512.
         * @member {number} rxspeed_histogram_512
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_histogram_512 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_1024.
         * @member {number} rxspeed_histogram_1024
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_histogram_1024 = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_histogram_max.
         * @member {number} rxspeed_histogram_max
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_histogram_max = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_5th.
         * @member {number} rxspeed_ntile_5th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_ntile_5th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_50th.
         * @member {number} rxspeed_ntile_50th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_ntile_50th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_75th.
         * @member {number} rxspeed_ntile_75th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_ntile_75th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_95th.
         * @member {number} rxspeed_ntile_95th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_ntile_95th = 0;
    
        /**
         * CMsgSteamDatagramLinkLifetimeStats rxspeed_ntile_98th.
         * @member {number} rxspeed_ntile_98th
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.rxspeed_ntile_98th = 0;
    
        /**
         * Creates a new CMsgSteamDatagramLinkLifetimeStats instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats=} [properties] Properties to set
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats instance
         */
        CMsgSteamDatagramLinkLifetimeStats.create = function create(properties) {
            return new CMsgSteamDatagramLinkLifetimeStats(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkLifetimeStats message. Does not implicitly {@link CMsgSteamDatagramLinkLifetimeStats.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkLifetimeStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.packets_sent != null && message.hasOwnProperty("packets_sent"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.packets_sent);
            if (message.kb_sent != null && message.hasOwnProperty("kb_sent"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.kb_sent);
            if (message.packets_recv != null && message.hasOwnProperty("packets_recv"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.packets_recv);
            if (message.kb_recv != null && message.hasOwnProperty("kb_recv"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.kb_recv);
            if (message.packets_recv_sequenced != null && message.hasOwnProperty("packets_recv_sequenced"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.packets_recv_sequenced);
            if (message.packets_recv_dropped != null && message.hasOwnProperty("packets_recv_dropped"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.packets_recv_dropped);
            if (message.packets_recv_out_of_order != null && message.hasOwnProperty("packets_recv_out_of_order"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.packets_recv_out_of_order);
            if (message.packets_recv_duplicate != null && message.hasOwnProperty("packets_recv_duplicate"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.packets_recv_duplicate);
            if (message.packets_recv_lurch != null && message.hasOwnProperty("packets_recv_lurch"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.packets_recv_lurch);
            if (message.quality_histogram_100 != null && message.hasOwnProperty("quality_histogram_100"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.quality_histogram_100);
            if (message.quality_histogram_99 != null && message.hasOwnProperty("quality_histogram_99"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.quality_histogram_99);
            if (message.quality_histogram_97 != null && message.hasOwnProperty("quality_histogram_97"))
                writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.quality_histogram_97);
            if (message.quality_histogram_95 != null && message.hasOwnProperty("quality_histogram_95"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.quality_histogram_95);
            if (message.quality_histogram_90 != null && message.hasOwnProperty("quality_histogram_90"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.quality_histogram_90);
            if (message.quality_histogram_75 != null && message.hasOwnProperty("quality_histogram_75"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.quality_histogram_75);
            if (message.quality_histogram_50 != null && message.hasOwnProperty("quality_histogram_50"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.quality_histogram_50);
            if (message.quality_histogram_1 != null && message.hasOwnProperty("quality_histogram_1"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.quality_histogram_1);
            if (message.quality_histogram_dead != null && message.hasOwnProperty("quality_histogram_dead"))
                writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.quality_histogram_dead);
            if (message.quality_ntile_2nd != null && message.hasOwnProperty("quality_ntile_2nd"))
                writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.quality_ntile_2nd);
            if (message.quality_ntile_5th != null && message.hasOwnProperty("quality_ntile_5th"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.quality_ntile_5th);
            if (message.quality_ntile_25th != null && message.hasOwnProperty("quality_ntile_25th"))
                writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.quality_ntile_25th);
            if (message.quality_ntile_50th != null && message.hasOwnProperty("quality_ntile_50th"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.quality_ntile_50th);
            if (message.ping_histogram_25 != null && message.hasOwnProperty("ping_histogram_25"))
                writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.ping_histogram_25);
            if (message.ping_histogram_50 != null && message.hasOwnProperty("ping_histogram_50"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.ping_histogram_50);
            if (message.ping_histogram_75 != null && message.hasOwnProperty("ping_histogram_75"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.ping_histogram_75);
            if (message.ping_histogram_100 != null && message.hasOwnProperty("ping_histogram_100"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.ping_histogram_100);
            if (message.ping_histogram_125 != null && message.hasOwnProperty("ping_histogram_125"))
                writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.ping_histogram_125);
            if (message.ping_histogram_150 != null && message.hasOwnProperty("ping_histogram_150"))
                writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.ping_histogram_150);
            if (message.ping_histogram_200 != null && message.hasOwnProperty("ping_histogram_200"))
                writer.uint32(/* id 47, wireType 0 =*/376).uint32(message.ping_histogram_200);
            if (message.ping_histogram_300 != null && message.hasOwnProperty("ping_histogram_300"))
                writer.uint32(/* id 48, wireType 0 =*/384).uint32(message.ping_histogram_300);
            if (message.ping_histogram_max != null && message.hasOwnProperty("ping_histogram_max"))
                writer.uint32(/* id 49, wireType 0 =*/392).uint32(message.ping_histogram_max);
            if (message.ping_ntile_5th != null && message.hasOwnProperty("ping_ntile_5th"))
                writer.uint32(/* id 50, wireType 0 =*/400).uint32(message.ping_ntile_5th);
            if (message.ping_ntile_50th != null && message.hasOwnProperty("ping_ntile_50th"))
                writer.uint32(/* id 51, wireType 0 =*/408).uint32(message.ping_ntile_50th);
            if (message.ping_ntile_75th != null && message.hasOwnProperty("ping_ntile_75th"))
                writer.uint32(/* id 52, wireType 0 =*/416).uint32(message.ping_ntile_75th);
            if (message.ping_ntile_95th != null && message.hasOwnProperty("ping_ntile_95th"))
                writer.uint32(/* id 53, wireType 0 =*/424).uint32(message.ping_ntile_95th);
            if (message.ping_ntile_98th != null && message.hasOwnProperty("ping_ntile_98th"))
                writer.uint32(/* id 54, wireType 0 =*/432).uint32(message.ping_ntile_98th);
            if (message.jitter_histogram_negligible != null && message.hasOwnProperty("jitter_histogram_negligible"))
                writer.uint32(/* id 61, wireType 0 =*/488).uint32(message.jitter_histogram_negligible);
            if (message.jitter_histogram_1 != null && message.hasOwnProperty("jitter_histogram_1"))
                writer.uint32(/* id 62, wireType 0 =*/496).uint32(message.jitter_histogram_1);
            if (message.jitter_histogram_2 != null && message.hasOwnProperty("jitter_histogram_2"))
                writer.uint32(/* id 63, wireType 0 =*/504).uint32(message.jitter_histogram_2);
            if (message.jitter_histogram_5 != null && message.hasOwnProperty("jitter_histogram_5"))
                writer.uint32(/* id 64, wireType 0 =*/512).uint32(message.jitter_histogram_5);
            if (message.jitter_histogram_10 != null && message.hasOwnProperty("jitter_histogram_10"))
                writer.uint32(/* id 65, wireType 0 =*/520).uint32(message.jitter_histogram_10);
            if (message.jitter_histogram_20 != null && message.hasOwnProperty("jitter_histogram_20"))
                writer.uint32(/* id 66, wireType 0 =*/528).uint32(message.jitter_histogram_20);
            if (message.txspeed_max != null && message.hasOwnProperty("txspeed_max"))
                writer.uint32(/* id 67, wireType 0 =*/536).uint32(message.txspeed_max);
            if (message.txspeed_histogram_16 != null && message.hasOwnProperty("txspeed_histogram_16"))
                writer.uint32(/* id 68, wireType 0 =*/544).uint32(message.txspeed_histogram_16);
            if (message.txspeed_histogram_32 != null && message.hasOwnProperty("txspeed_histogram_32"))
                writer.uint32(/* id 69, wireType 0 =*/552).uint32(message.txspeed_histogram_32);
            if (message.txspeed_histogram_64 != null && message.hasOwnProperty("txspeed_histogram_64"))
                writer.uint32(/* id 70, wireType 0 =*/560).uint32(message.txspeed_histogram_64);
            if (message.txspeed_histogram_128 != null && message.hasOwnProperty("txspeed_histogram_128"))
                writer.uint32(/* id 71, wireType 0 =*/568).uint32(message.txspeed_histogram_128);
            if (message.txspeed_histogram_256 != null && message.hasOwnProperty("txspeed_histogram_256"))
                writer.uint32(/* id 72, wireType 0 =*/576).uint32(message.txspeed_histogram_256);
            if (message.txspeed_histogram_512 != null && message.hasOwnProperty("txspeed_histogram_512"))
                writer.uint32(/* id 73, wireType 0 =*/584).uint32(message.txspeed_histogram_512);
            if (message.txspeed_histogram_1024 != null && message.hasOwnProperty("txspeed_histogram_1024"))
                writer.uint32(/* id 74, wireType 0 =*/592).uint32(message.txspeed_histogram_1024);
            if (message.txspeed_histogram_max != null && message.hasOwnProperty("txspeed_histogram_max"))
                writer.uint32(/* id 75, wireType 0 =*/600).uint32(message.txspeed_histogram_max);
            if (message.txspeed_ntile_5th != null && message.hasOwnProperty("txspeed_ntile_5th"))
                writer.uint32(/* id 76, wireType 0 =*/608).uint32(message.txspeed_ntile_5th);
            if (message.txspeed_ntile_50th != null && message.hasOwnProperty("txspeed_ntile_50th"))
                writer.uint32(/* id 77, wireType 0 =*/616).uint32(message.txspeed_ntile_50th);
            if (message.txspeed_ntile_75th != null && message.hasOwnProperty("txspeed_ntile_75th"))
                writer.uint32(/* id 78, wireType 0 =*/624).uint32(message.txspeed_ntile_75th);
            if (message.txspeed_ntile_95th != null && message.hasOwnProperty("txspeed_ntile_95th"))
                writer.uint32(/* id 79, wireType 0 =*/632).uint32(message.txspeed_ntile_95th);
            if (message.txspeed_ntile_98th != null && message.hasOwnProperty("txspeed_ntile_98th"))
                writer.uint32(/* id 80, wireType 0 =*/640).uint32(message.txspeed_ntile_98th);
            if (message.rxspeed_max != null && message.hasOwnProperty("rxspeed_max"))
                writer.uint32(/* id 81, wireType 0 =*/648).uint32(message.rxspeed_max);
            if (message.rxspeed_histogram_16 != null && message.hasOwnProperty("rxspeed_histogram_16"))
                writer.uint32(/* id 82, wireType 0 =*/656).uint32(message.rxspeed_histogram_16);
            if (message.rxspeed_histogram_32 != null && message.hasOwnProperty("rxspeed_histogram_32"))
                writer.uint32(/* id 83, wireType 0 =*/664).uint32(message.rxspeed_histogram_32);
            if (message.rxspeed_histogram_64 != null && message.hasOwnProperty("rxspeed_histogram_64"))
                writer.uint32(/* id 84, wireType 0 =*/672).uint32(message.rxspeed_histogram_64);
            if (message.rxspeed_histogram_128 != null && message.hasOwnProperty("rxspeed_histogram_128"))
                writer.uint32(/* id 85, wireType 0 =*/680).uint32(message.rxspeed_histogram_128);
            if (message.rxspeed_histogram_256 != null && message.hasOwnProperty("rxspeed_histogram_256"))
                writer.uint32(/* id 86, wireType 0 =*/688).uint32(message.rxspeed_histogram_256);
            if (message.rxspeed_histogram_512 != null && message.hasOwnProperty("rxspeed_histogram_512"))
                writer.uint32(/* id 87, wireType 0 =*/696).uint32(message.rxspeed_histogram_512);
            if (message.rxspeed_histogram_1024 != null && message.hasOwnProperty("rxspeed_histogram_1024"))
                writer.uint32(/* id 88, wireType 0 =*/704).uint32(message.rxspeed_histogram_1024);
            if (message.rxspeed_histogram_max != null && message.hasOwnProperty("rxspeed_histogram_max"))
                writer.uint32(/* id 89, wireType 0 =*/712).uint32(message.rxspeed_histogram_max);
            if (message.rxspeed_ntile_5th != null && message.hasOwnProperty("rxspeed_ntile_5th"))
                writer.uint32(/* id 90, wireType 0 =*/720).uint32(message.rxspeed_ntile_5th);
            if (message.rxspeed_ntile_50th != null && message.hasOwnProperty("rxspeed_ntile_50th"))
                writer.uint32(/* id 91, wireType 0 =*/728).uint32(message.rxspeed_ntile_50th);
            if (message.rxspeed_ntile_75th != null && message.hasOwnProperty("rxspeed_ntile_75th"))
                writer.uint32(/* id 92, wireType 0 =*/736).uint32(message.rxspeed_ntile_75th);
            if (message.rxspeed_ntile_95th != null && message.hasOwnProperty("rxspeed_ntile_95th"))
                writer.uint32(/* id 93, wireType 0 =*/744).uint32(message.rxspeed_ntile_95th);
            if (message.rxspeed_ntile_98th != null && message.hasOwnProperty("rxspeed_ntile_98th"))
                writer.uint32(/* id 94, wireType 0 =*/752).uint32(message.rxspeed_ntile_98th);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramLinkLifetimeStats message, length delimited. Does not implicitly {@link CMsgSteamDatagramLinkLifetimeStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {ICMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramLinkLifetimeStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkLifetimeStats message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkLifetimeStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramLinkLifetimeStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    message.packets_sent = reader.uint64();
                    break;
                case 4:
                    message.kb_sent = reader.uint64();
                    break;
                case 5:
                    message.packets_recv = reader.uint64();
                    break;
                case 6:
                    message.kb_recv = reader.uint64();
                    break;
                case 7:
                    message.packets_recv_sequenced = reader.uint64();
                    break;
                case 8:
                    message.packets_recv_dropped = reader.uint64();
                    break;
                case 9:
                    message.packets_recv_out_of_order = reader.uint64();
                    break;
                case 10:
                    message.packets_recv_duplicate = reader.uint64();
                    break;
                case 11:
                    message.packets_recv_lurch = reader.uint64();
                    break;
                case 21:
                    message.quality_histogram_100 = reader.uint32();
                    break;
                case 22:
                    message.quality_histogram_99 = reader.uint32();
                    break;
                case 23:
                    message.quality_histogram_97 = reader.uint32();
                    break;
                case 24:
                    message.quality_histogram_95 = reader.uint32();
                    break;
                case 25:
                    message.quality_histogram_90 = reader.uint32();
                    break;
                case 26:
                    message.quality_histogram_75 = reader.uint32();
                    break;
                case 27:
                    message.quality_histogram_50 = reader.uint32();
                    break;
                case 28:
                    message.quality_histogram_1 = reader.uint32();
                    break;
                case 29:
                    message.quality_histogram_dead = reader.uint32();
                    break;
                case 30:
                    message.quality_ntile_2nd = reader.uint32();
                    break;
                case 31:
                    message.quality_ntile_5th = reader.uint32();
                    break;
                case 32:
                    message.quality_ntile_25th = reader.uint32();
                    break;
                case 33:
                    message.quality_ntile_50th = reader.uint32();
                    break;
                case 41:
                    message.ping_histogram_25 = reader.uint32();
                    break;
                case 42:
                    message.ping_histogram_50 = reader.uint32();
                    break;
                case 43:
                    message.ping_histogram_75 = reader.uint32();
                    break;
                case 44:
                    message.ping_histogram_100 = reader.uint32();
                    break;
                case 45:
                    message.ping_histogram_125 = reader.uint32();
                    break;
                case 46:
                    message.ping_histogram_150 = reader.uint32();
                    break;
                case 47:
                    message.ping_histogram_200 = reader.uint32();
                    break;
                case 48:
                    message.ping_histogram_300 = reader.uint32();
                    break;
                case 49:
                    message.ping_histogram_max = reader.uint32();
                    break;
                case 50:
                    message.ping_ntile_5th = reader.uint32();
                    break;
                case 51:
                    message.ping_ntile_50th = reader.uint32();
                    break;
                case 52:
                    message.ping_ntile_75th = reader.uint32();
                    break;
                case 53:
                    message.ping_ntile_95th = reader.uint32();
                    break;
                case 54:
                    message.ping_ntile_98th = reader.uint32();
                    break;
                case 61:
                    message.jitter_histogram_negligible = reader.uint32();
                    break;
                case 62:
                    message.jitter_histogram_1 = reader.uint32();
                    break;
                case 63:
                    message.jitter_histogram_2 = reader.uint32();
                    break;
                case 64:
                    message.jitter_histogram_5 = reader.uint32();
                    break;
                case 65:
                    message.jitter_histogram_10 = reader.uint32();
                    break;
                case 66:
                    message.jitter_histogram_20 = reader.uint32();
                    break;
                case 67:
                    message.txspeed_max = reader.uint32();
                    break;
                case 68:
                    message.txspeed_histogram_16 = reader.uint32();
                    break;
                case 69:
                    message.txspeed_histogram_32 = reader.uint32();
                    break;
                case 70:
                    message.txspeed_histogram_64 = reader.uint32();
                    break;
                case 71:
                    message.txspeed_histogram_128 = reader.uint32();
                    break;
                case 72:
                    message.txspeed_histogram_256 = reader.uint32();
                    break;
                case 73:
                    message.txspeed_histogram_512 = reader.uint32();
                    break;
                case 74:
                    message.txspeed_histogram_1024 = reader.uint32();
                    break;
                case 75:
                    message.txspeed_histogram_max = reader.uint32();
                    break;
                case 76:
                    message.txspeed_ntile_5th = reader.uint32();
                    break;
                case 77:
                    message.txspeed_ntile_50th = reader.uint32();
                    break;
                case 78:
                    message.txspeed_ntile_75th = reader.uint32();
                    break;
                case 79:
                    message.txspeed_ntile_95th = reader.uint32();
                    break;
                case 80:
                    message.txspeed_ntile_98th = reader.uint32();
                    break;
                case 81:
                    message.rxspeed_max = reader.uint32();
                    break;
                case 82:
                    message.rxspeed_histogram_16 = reader.uint32();
                    break;
                case 83:
                    message.rxspeed_histogram_32 = reader.uint32();
                    break;
                case 84:
                    message.rxspeed_histogram_64 = reader.uint32();
                    break;
                case 85:
                    message.rxspeed_histogram_128 = reader.uint32();
                    break;
                case 86:
                    message.rxspeed_histogram_256 = reader.uint32();
                    break;
                case 87:
                    message.rxspeed_histogram_512 = reader.uint32();
                    break;
                case 88:
                    message.rxspeed_histogram_1024 = reader.uint32();
                    break;
                case 89:
                    message.rxspeed_histogram_max = reader.uint32();
                    break;
                case 90:
                    message.rxspeed_ntile_5th = reader.uint32();
                    break;
                case 91:
                    message.rxspeed_ntile_50th = reader.uint32();
                    break;
                case 92:
                    message.rxspeed_ntile_75th = reader.uint32();
                    break;
                case 93:
                    message.rxspeed_ntile_95th = reader.uint32();
                    break;
                case 94:
                    message.rxspeed_ntile_98th = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramLinkLifetimeStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramLinkLifetimeStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramLinkLifetimeStats message.
         * @function verify
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramLinkLifetimeStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.packets_sent != null && message.hasOwnProperty("packets_sent"))
                if (!$util.isInteger(message.packets_sent) && !(message.packets_sent && $util.isInteger(message.packets_sent.low) && $util.isInteger(message.packets_sent.high)))
                    return "packets_sent: integer|Long expected";
            if (message.kb_sent != null && message.hasOwnProperty("kb_sent"))
                if (!$util.isInteger(message.kb_sent) && !(message.kb_sent && $util.isInteger(message.kb_sent.low) && $util.isInteger(message.kb_sent.high)))
                    return "kb_sent: integer|Long expected";
            if (message.packets_recv != null && message.hasOwnProperty("packets_recv"))
                if (!$util.isInteger(message.packets_recv) && !(message.packets_recv && $util.isInteger(message.packets_recv.low) && $util.isInteger(message.packets_recv.high)))
                    return "packets_recv: integer|Long expected";
            if (message.kb_recv != null && message.hasOwnProperty("kb_recv"))
                if (!$util.isInteger(message.kb_recv) && !(message.kb_recv && $util.isInteger(message.kb_recv.low) && $util.isInteger(message.kb_recv.high)))
                    return "kb_recv: integer|Long expected";
            if (message.packets_recv_sequenced != null && message.hasOwnProperty("packets_recv_sequenced"))
                if (!$util.isInteger(message.packets_recv_sequenced) && !(message.packets_recv_sequenced && $util.isInteger(message.packets_recv_sequenced.low) && $util.isInteger(message.packets_recv_sequenced.high)))
                    return "packets_recv_sequenced: integer|Long expected";
            if (message.packets_recv_dropped != null && message.hasOwnProperty("packets_recv_dropped"))
                if (!$util.isInteger(message.packets_recv_dropped) && !(message.packets_recv_dropped && $util.isInteger(message.packets_recv_dropped.low) && $util.isInteger(message.packets_recv_dropped.high)))
                    return "packets_recv_dropped: integer|Long expected";
            if (message.packets_recv_out_of_order != null && message.hasOwnProperty("packets_recv_out_of_order"))
                if (!$util.isInteger(message.packets_recv_out_of_order) && !(message.packets_recv_out_of_order && $util.isInteger(message.packets_recv_out_of_order.low) && $util.isInteger(message.packets_recv_out_of_order.high)))
                    return "packets_recv_out_of_order: integer|Long expected";
            if (message.packets_recv_duplicate != null && message.hasOwnProperty("packets_recv_duplicate"))
                if (!$util.isInteger(message.packets_recv_duplicate) && !(message.packets_recv_duplicate && $util.isInteger(message.packets_recv_duplicate.low) && $util.isInteger(message.packets_recv_duplicate.high)))
                    return "packets_recv_duplicate: integer|Long expected";
            if (message.packets_recv_lurch != null && message.hasOwnProperty("packets_recv_lurch"))
                if (!$util.isInteger(message.packets_recv_lurch) && !(message.packets_recv_lurch && $util.isInteger(message.packets_recv_lurch.low) && $util.isInteger(message.packets_recv_lurch.high)))
                    return "packets_recv_lurch: integer|Long expected";
            if (message.quality_histogram_100 != null && message.hasOwnProperty("quality_histogram_100"))
                if (!$util.isInteger(message.quality_histogram_100))
                    return "quality_histogram_100: integer expected";
            if (message.quality_histogram_99 != null && message.hasOwnProperty("quality_histogram_99"))
                if (!$util.isInteger(message.quality_histogram_99))
                    return "quality_histogram_99: integer expected";
            if (message.quality_histogram_97 != null && message.hasOwnProperty("quality_histogram_97"))
                if (!$util.isInteger(message.quality_histogram_97))
                    return "quality_histogram_97: integer expected";
            if (message.quality_histogram_95 != null && message.hasOwnProperty("quality_histogram_95"))
                if (!$util.isInteger(message.quality_histogram_95))
                    return "quality_histogram_95: integer expected";
            if (message.quality_histogram_90 != null && message.hasOwnProperty("quality_histogram_90"))
                if (!$util.isInteger(message.quality_histogram_90))
                    return "quality_histogram_90: integer expected";
            if (message.quality_histogram_75 != null && message.hasOwnProperty("quality_histogram_75"))
                if (!$util.isInteger(message.quality_histogram_75))
                    return "quality_histogram_75: integer expected";
            if (message.quality_histogram_50 != null && message.hasOwnProperty("quality_histogram_50"))
                if (!$util.isInteger(message.quality_histogram_50))
                    return "quality_histogram_50: integer expected";
            if (message.quality_histogram_1 != null && message.hasOwnProperty("quality_histogram_1"))
                if (!$util.isInteger(message.quality_histogram_1))
                    return "quality_histogram_1: integer expected";
            if (message.quality_histogram_dead != null && message.hasOwnProperty("quality_histogram_dead"))
                if (!$util.isInteger(message.quality_histogram_dead))
                    return "quality_histogram_dead: integer expected";
            if (message.quality_ntile_2nd != null && message.hasOwnProperty("quality_ntile_2nd"))
                if (!$util.isInteger(message.quality_ntile_2nd))
                    return "quality_ntile_2nd: integer expected";
            if (message.quality_ntile_5th != null && message.hasOwnProperty("quality_ntile_5th"))
                if (!$util.isInteger(message.quality_ntile_5th))
                    return "quality_ntile_5th: integer expected";
            if (message.quality_ntile_25th != null && message.hasOwnProperty("quality_ntile_25th"))
                if (!$util.isInteger(message.quality_ntile_25th))
                    return "quality_ntile_25th: integer expected";
            if (message.quality_ntile_50th != null && message.hasOwnProperty("quality_ntile_50th"))
                if (!$util.isInteger(message.quality_ntile_50th))
                    return "quality_ntile_50th: integer expected";
            if (message.ping_histogram_25 != null && message.hasOwnProperty("ping_histogram_25"))
                if (!$util.isInteger(message.ping_histogram_25))
                    return "ping_histogram_25: integer expected";
            if (message.ping_histogram_50 != null && message.hasOwnProperty("ping_histogram_50"))
                if (!$util.isInteger(message.ping_histogram_50))
                    return "ping_histogram_50: integer expected";
            if (message.ping_histogram_75 != null && message.hasOwnProperty("ping_histogram_75"))
                if (!$util.isInteger(message.ping_histogram_75))
                    return "ping_histogram_75: integer expected";
            if (message.ping_histogram_100 != null && message.hasOwnProperty("ping_histogram_100"))
                if (!$util.isInteger(message.ping_histogram_100))
                    return "ping_histogram_100: integer expected";
            if (message.ping_histogram_125 != null && message.hasOwnProperty("ping_histogram_125"))
                if (!$util.isInteger(message.ping_histogram_125))
                    return "ping_histogram_125: integer expected";
            if (message.ping_histogram_150 != null && message.hasOwnProperty("ping_histogram_150"))
                if (!$util.isInteger(message.ping_histogram_150))
                    return "ping_histogram_150: integer expected";
            if (message.ping_histogram_200 != null && message.hasOwnProperty("ping_histogram_200"))
                if (!$util.isInteger(message.ping_histogram_200))
                    return "ping_histogram_200: integer expected";
            if (message.ping_histogram_300 != null && message.hasOwnProperty("ping_histogram_300"))
                if (!$util.isInteger(message.ping_histogram_300))
                    return "ping_histogram_300: integer expected";
            if (message.ping_histogram_max != null && message.hasOwnProperty("ping_histogram_max"))
                if (!$util.isInteger(message.ping_histogram_max))
                    return "ping_histogram_max: integer expected";
            if (message.ping_ntile_5th != null && message.hasOwnProperty("ping_ntile_5th"))
                if (!$util.isInteger(message.ping_ntile_5th))
                    return "ping_ntile_5th: integer expected";
            if (message.ping_ntile_50th != null && message.hasOwnProperty("ping_ntile_50th"))
                if (!$util.isInteger(message.ping_ntile_50th))
                    return "ping_ntile_50th: integer expected";
            if (message.ping_ntile_75th != null && message.hasOwnProperty("ping_ntile_75th"))
                if (!$util.isInteger(message.ping_ntile_75th))
                    return "ping_ntile_75th: integer expected";
            if (message.ping_ntile_95th != null && message.hasOwnProperty("ping_ntile_95th"))
                if (!$util.isInteger(message.ping_ntile_95th))
                    return "ping_ntile_95th: integer expected";
            if (message.ping_ntile_98th != null && message.hasOwnProperty("ping_ntile_98th"))
                if (!$util.isInteger(message.ping_ntile_98th))
                    return "ping_ntile_98th: integer expected";
            if (message.jitter_histogram_negligible != null && message.hasOwnProperty("jitter_histogram_negligible"))
                if (!$util.isInteger(message.jitter_histogram_negligible))
                    return "jitter_histogram_negligible: integer expected";
            if (message.jitter_histogram_1 != null && message.hasOwnProperty("jitter_histogram_1"))
                if (!$util.isInteger(message.jitter_histogram_1))
                    return "jitter_histogram_1: integer expected";
            if (message.jitter_histogram_2 != null && message.hasOwnProperty("jitter_histogram_2"))
                if (!$util.isInteger(message.jitter_histogram_2))
                    return "jitter_histogram_2: integer expected";
            if (message.jitter_histogram_5 != null && message.hasOwnProperty("jitter_histogram_5"))
                if (!$util.isInteger(message.jitter_histogram_5))
                    return "jitter_histogram_5: integer expected";
            if (message.jitter_histogram_10 != null && message.hasOwnProperty("jitter_histogram_10"))
                if (!$util.isInteger(message.jitter_histogram_10))
                    return "jitter_histogram_10: integer expected";
            if (message.jitter_histogram_20 != null && message.hasOwnProperty("jitter_histogram_20"))
                if (!$util.isInteger(message.jitter_histogram_20))
                    return "jitter_histogram_20: integer expected";
            if (message.txspeed_max != null && message.hasOwnProperty("txspeed_max"))
                if (!$util.isInteger(message.txspeed_max))
                    return "txspeed_max: integer expected";
            if (message.txspeed_histogram_16 != null && message.hasOwnProperty("txspeed_histogram_16"))
                if (!$util.isInteger(message.txspeed_histogram_16))
                    return "txspeed_histogram_16: integer expected";
            if (message.txspeed_histogram_32 != null && message.hasOwnProperty("txspeed_histogram_32"))
                if (!$util.isInteger(message.txspeed_histogram_32))
                    return "txspeed_histogram_32: integer expected";
            if (message.txspeed_histogram_64 != null && message.hasOwnProperty("txspeed_histogram_64"))
                if (!$util.isInteger(message.txspeed_histogram_64))
                    return "txspeed_histogram_64: integer expected";
            if (message.txspeed_histogram_128 != null && message.hasOwnProperty("txspeed_histogram_128"))
                if (!$util.isInteger(message.txspeed_histogram_128))
                    return "txspeed_histogram_128: integer expected";
            if (message.txspeed_histogram_256 != null && message.hasOwnProperty("txspeed_histogram_256"))
                if (!$util.isInteger(message.txspeed_histogram_256))
                    return "txspeed_histogram_256: integer expected";
            if (message.txspeed_histogram_512 != null && message.hasOwnProperty("txspeed_histogram_512"))
                if (!$util.isInteger(message.txspeed_histogram_512))
                    return "txspeed_histogram_512: integer expected";
            if (message.txspeed_histogram_1024 != null && message.hasOwnProperty("txspeed_histogram_1024"))
                if (!$util.isInteger(message.txspeed_histogram_1024))
                    return "txspeed_histogram_1024: integer expected";
            if (message.txspeed_histogram_max != null && message.hasOwnProperty("txspeed_histogram_max"))
                if (!$util.isInteger(message.txspeed_histogram_max))
                    return "txspeed_histogram_max: integer expected";
            if (message.txspeed_ntile_5th != null && message.hasOwnProperty("txspeed_ntile_5th"))
                if (!$util.isInteger(message.txspeed_ntile_5th))
                    return "txspeed_ntile_5th: integer expected";
            if (message.txspeed_ntile_50th != null && message.hasOwnProperty("txspeed_ntile_50th"))
                if (!$util.isInteger(message.txspeed_ntile_50th))
                    return "txspeed_ntile_50th: integer expected";
            if (message.txspeed_ntile_75th != null && message.hasOwnProperty("txspeed_ntile_75th"))
                if (!$util.isInteger(message.txspeed_ntile_75th))
                    return "txspeed_ntile_75th: integer expected";
            if (message.txspeed_ntile_95th != null && message.hasOwnProperty("txspeed_ntile_95th"))
                if (!$util.isInteger(message.txspeed_ntile_95th))
                    return "txspeed_ntile_95th: integer expected";
            if (message.txspeed_ntile_98th != null && message.hasOwnProperty("txspeed_ntile_98th"))
                if (!$util.isInteger(message.txspeed_ntile_98th))
                    return "txspeed_ntile_98th: integer expected";
            if (message.rxspeed_max != null && message.hasOwnProperty("rxspeed_max"))
                if (!$util.isInteger(message.rxspeed_max))
                    return "rxspeed_max: integer expected";
            if (message.rxspeed_histogram_16 != null && message.hasOwnProperty("rxspeed_histogram_16"))
                if (!$util.isInteger(message.rxspeed_histogram_16))
                    return "rxspeed_histogram_16: integer expected";
            if (message.rxspeed_histogram_32 != null && message.hasOwnProperty("rxspeed_histogram_32"))
                if (!$util.isInteger(message.rxspeed_histogram_32))
                    return "rxspeed_histogram_32: integer expected";
            if (message.rxspeed_histogram_64 != null && message.hasOwnProperty("rxspeed_histogram_64"))
                if (!$util.isInteger(message.rxspeed_histogram_64))
                    return "rxspeed_histogram_64: integer expected";
            if (message.rxspeed_histogram_128 != null && message.hasOwnProperty("rxspeed_histogram_128"))
                if (!$util.isInteger(message.rxspeed_histogram_128))
                    return "rxspeed_histogram_128: integer expected";
            if (message.rxspeed_histogram_256 != null && message.hasOwnProperty("rxspeed_histogram_256"))
                if (!$util.isInteger(message.rxspeed_histogram_256))
                    return "rxspeed_histogram_256: integer expected";
            if (message.rxspeed_histogram_512 != null && message.hasOwnProperty("rxspeed_histogram_512"))
                if (!$util.isInteger(message.rxspeed_histogram_512))
                    return "rxspeed_histogram_512: integer expected";
            if (message.rxspeed_histogram_1024 != null && message.hasOwnProperty("rxspeed_histogram_1024"))
                if (!$util.isInteger(message.rxspeed_histogram_1024))
                    return "rxspeed_histogram_1024: integer expected";
            if (message.rxspeed_histogram_max != null && message.hasOwnProperty("rxspeed_histogram_max"))
                if (!$util.isInteger(message.rxspeed_histogram_max))
                    return "rxspeed_histogram_max: integer expected";
            if (message.rxspeed_ntile_5th != null && message.hasOwnProperty("rxspeed_ntile_5th"))
                if (!$util.isInteger(message.rxspeed_ntile_5th))
                    return "rxspeed_ntile_5th: integer expected";
            if (message.rxspeed_ntile_50th != null && message.hasOwnProperty("rxspeed_ntile_50th"))
                if (!$util.isInteger(message.rxspeed_ntile_50th))
                    return "rxspeed_ntile_50th: integer expected";
            if (message.rxspeed_ntile_75th != null && message.hasOwnProperty("rxspeed_ntile_75th"))
                if (!$util.isInteger(message.rxspeed_ntile_75th))
                    return "rxspeed_ntile_75th: integer expected";
            if (message.rxspeed_ntile_95th != null && message.hasOwnProperty("rxspeed_ntile_95th"))
                if (!$util.isInteger(message.rxspeed_ntile_95th))
                    return "rxspeed_ntile_95th: integer expected";
            if (message.rxspeed_ntile_98th != null && message.hasOwnProperty("rxspeed_ntile_98th"))
                if (!$util.isInteger(message.rxspeed_ntile_98th))
                    return "rxspeed_ntile_98th: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramLinkLifetimeStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramLinkLifetimeStats} CMsgSteamDatagramLinkLifetimeStats
         */
        CMsgSteamDatagramLinkLifetimeStats.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramLinkLifetimeStats)
                return object;
            var message = new $root.CMsgSteamDatagramLinkLifetimeStats();
            if (object.packets_sent != null)
                if ($util.Long)
                    (message.packets_sent = $util.Long.fromValue(object.packets_sent)).unsigned = true;
                else if (typeof object.packets_sent === "string")
                    message.packets_sent = parseInt(object.packets_sent, 10);
                else if (typeof object.packets_sent === "number")
                    message.packets_sent = object.packets_sent;
                else if (typeof object.packets_sent === "object")
                    message.packets_sent = new $util.LongBits(object.packets_sent.low >>> 0, object.packets_sent.high >>> 0).toNumber(true);
            if (object.kb_sent != null)
                if ($util.Long)
                    (message.kb_sent = $util.Long.fromValue(object.kb_sent)).unsigned = true;
                else if (typeof object.kb_sent === "string")
                    message.kb_sent = parseInt(object.kb_sent, 10);
                else if (typeof object.kb_sent === "number")
                    message.kb_sent = object.kb_sent;
                else if (typeof object.kb_sent === "object")
                    message.kb_sent = new $util.LongBits(object.kb_sent.low >>> 0, object.kb_sent.high >>> 0).toNumber(true);
            if (object.packets_recv != null)
                if ($util.Long)
                    (message.packets_recv = $util.Long.fromValue(object.packets_recv)).unsigned = true;
                else if (typeof object.packets_recv === "string")
                    message.packets_recv = parseInt(object.packets_recv, 10);
                else if (typeof object.packets_recv === "number")
                    message.packets_recv = object.packets_recv;
                else if (typeof object.packets_recv === "object")
                    message.packets_recv = new $util.LongBits(object.packets_recv.low >>> 0, object.packets_recv.high >>> 0).toNumber(true);
            if (object.kb_recv != null)
                if ($util.Long)
                    (message.kb_recv = $util.Long.fromValue(object.kb_recv)).unsigned = true;
                else if (typeof object.kb_recv === "string")
                    message.kb_recv = parseInt(object.kb_recv, 10);
                else if (typeof object.kb_recv === "number")
                    message.kb_recv = object.kb_recv;
                else if (typeof object.kb_recv === "object")
                    message.kb_recv = new $util.LongBits(object.kb_recv.low >>> 0, object.kb_recv.high >>> 0).toNumber(true);
            if (object.packets_recv_sequenced != null)
                if ($util.Long)
                    (message.packets_recv_sequenced = $util.Long.fromValue(object.packets_recv_sequenced)).unsigned = true;
                else if (typeof object.packets_recv_sequenced === "string")
                    message.packets_recv_sequenced = parseInt(object.packets_recv_sequenced, 10);
                else if (typeof object.packets_recv_sequenced === "number")
                    message.packets_recv_sequenced = object.packets_recv_sequenced;
                else if (typeof object.packets_recv_sequenced === "object")
                    message.packets_recv_sequenced = new $util.LongBits(object.packets_recv_sequenced.low >>> 0, object.packets_recv_sequenced.high >>> 0).toNumber(true);
            if (object.packets_recv_dropped != null)
                if ($util.Long)
                    (message.packets_recv_dropped = $util.Long.fromValue(object.packets_recv_dropped)).unsigned = true;
                else if (typeof object.packets_recv_dropped === "string")
                    message.packets_recv_dropped = parseInt(object.packets_recv_dropped, 10);
                else if (typeof object.packets_recv_dropped === "number")
                    message.packets_recv_dropped = object.packets_recv_dropped;
                else if (typeof object.packets_recv_dropped === "object")
                    message.packets_recv_dropped = new $util.LongBits(object.packets_recv_dropped.low >>> 0, object.packets_recv_dropped.high >>> 0).toNumber(true);
            if (object.packets_recv_out_of_order != null)
                if ($util.Long)
                    (message.packets_recv_out_of_order = $util.Long.fromValue(object.packets_recv_out_of_order)).unsigned = true;
                else if (typeof object.packets_recv_out_of_order === "string")
                    message.packets_recv_out_of_order = parseInt(object.packets_recv_out_of_order, 10);
                else if (typeof object.packets_recv_out_of_order === "number")
                    message.packets_recv_out_of_order = object.packets_recv_out_of_order;
                else if (typeof object.packets_recv_out_of_order === "object")
                    message.packets_recv_out_of_order = new $util.LongBits(object.packets_recv_out_of_order.low >>> 0, object.packets_recv_out_of_order.high >>> 0).toNumber(true);
            if (object.packets_recv_duplicate != null)
                if ($util.Long)
                    (message.packets_recv_duplicate = $util.Long.fromValue(object.packets_recv_duplicate)).unsigned = true;
                else if (typeof object.packets_recv_duplicate === "string")
                    message.packets_recv_duplicate = parseInt(object.packets_recv_duplicate, 10);
                else if (typeof object.packets_recv_duplicate === "number")
                    message.packets_recv_duplicate = object.packets_recv_duplicate;
                else if (typeof object.packets_recv_duplicate === "object")
                    message.packets_recv_duplicate = new $util.LongBits(object.packets_recv_duplicate.low >>> 0, object.packets_recv_duplicate.high >>> 0).toNumber(true);
            if (object.packets_recv_lurch != null)
                if ($util.Long)
                    (message.packets_recv_lurch = $util.Long.fromValue(object.packets_recv_lurch)).unsigned = true;
                else if (typeof object.packets_recv_lurch === "string")
                    message.packets_recv_lurch = parseInt(object.packets_recv_lurch, 10);
                else if (typeof object.packets_recv_lurch === "number")
                    message.packets_recv_lurch = object.packets_recv_lurch;
                else if (typeof object.packets_recv_lurch === "object")
                    message.packets_recv_lurch = new $util.LongBits(object.packets_recv_lurch.low >>> 0, object.packets_recv_lurch.high >>> 0).toNumber(true);
            if (object.quality_histogram_100 != null)
                message.quality_histogram_100 = object.quality_histogram_100 >>> 0;
            if (object.quality_histogram_99 != null)
                message.quality_histogram_99 = object.quality_histogram_99 >>> 0;
            if (object.quality_histogram_97 != null)
                message.quality_histogram_97 = object.quality_histogram_97 >>> 0;
            if (object.quality_histogram_95 != null)
                message.quality_histogram_95 = object.quality_histogram_95 >>> 0;
            if (object.quality_histogram_90 != null)
                message.quality_histogram_90 = object.quality_histogram_90 >>> 0;
            if (object.quality_histogram_75 != null)
                message.quality_histogram_75 = object.quality_histogram_75 >>> 0;
            if (object.quality_histogram_50 != null)
                message.quality_histogram_50 = object.quality_histogram_50 >>> 0;
            if (object.quality_histogram_1 != null)
                message.quality_histogram_1 = object.quality_histogram_1 >>> 0;
            if (object.quality_histogram_dead != null)
                message.quality_histogram_dead = object.quality_histogram_dead >>> 0;
            if (object.quality_ntile_2nd != null)
                message.quality_ntile_2nd = object.quality_ntile_2nd >>> 0;
            if (object.quality_ntile_5th != null)
                message.quality_ntile_5th = object.quality_ntile_5th >>> 0;
            if (object.quality_ntile_25th != null)
                message.quality_ntile_25th = object.quality_ntile_25th >>> 0;
            if (object.quality_ntile_50th != null)
                message.quality_ntile_50th = object.quality_ntile_50th >>> 0;
            if (object.ping_histogram_25 != null)
                message.ping_histogram_25 = object.ping_histogram_25 >>> 0;
            if (object.ping_histogram_50 != null)
                message.ping_histogram_50 = object.ping_histogram_50 >>> 0;
            if (object.ping_histogram_75 != null)
                message.ping_histogram_75 = object.ping_histogram_75 >>> 0;
            if (object.ping_histogram_100 != null)
                message.ping_histogram_100 = object.ping_histogram_100 >>> 0;
            if (object.ping_histogram_125 != null)
                message.ping_histogram_125 = object.ping_histogram_125 >>> 0;
            if (object.ping_histogram_150 != null)
                message.ping_histogram_150 = object.ping_histogram_150 >>> 0;
            if (object.ping_histogram_200 != null)
                message.ping_histogram_200 = object.ping_histogram_200 >>> 0;
            if (object.ping_histogram_300 != null)
                message.ping_histogram_300 = object.ping_histogram_300 >>> 0;
            if (object.ping_histogram_max != null)
                message.ping_histogram_max = object.ping_histogram_max >>> 0;
            if (object.ping_ntile_5th != null)
                message.ping_ntile_5th = object.ping_ntile_5th >>> 0;
            if (object.ping_ntile_50th != null)
                message.ping_ntile_50th = object.ping_ntile_50th >>> 0;
            if (object.ping_ntile_75th != null)
                message.ping_ntile_75th = object.ping_ntile_75th >>> 0;
            if (object.ping_ntile_95th != null)
                message.ping_ntile_95th = object.ping_ntile_95th >>> 0;
            if (object.ping_ntile_98th != null)
                message.ping_ntile_98th = object.ping_ntile_98th >>> 0;
            if (object.jitter_histogram_negligible != null)
                message.jitter_histogram_negligible = object.jitter_histogram_negligible >>> 0;
            if (object.jitter_histogram_1 != null)
                message.jitter_histogram_1 = object.jitter_histogram_1 >>> 0;
            if (object.jitter_histogram_2 != null)
                message.jitter_histogram_2 = object.jitter_histogram_2 >>> 0;
            if (object.jitter_histogram_5 != null)
                message.jitter_histogram_5 = object.jitter_histogram_5 >>> 0;
            if (object.jitter_histogram_10 != null)
                message.jitter_histogram_10 = object.jitter_histogram_10 >>> 0;
            if (object.jitter_histogram_20 != null)
                message.jitter_histogram_20 = object.jitter_histogram_20 >>> 0;
            if (object.txspeed_max != null)
                message.txspeed_max = object.txspeed_max >>> 0;
            if (object.txspeed_histogram_16 != null)
                message.txspeed_histogram_16 = object.txspeed_histogram_16 >>> 0;
            if (object.txspeed_histogram_32 != null)
                message.txspeed_histogram_32 = object.txspeed_histogram_32 >>> 0;
            if (object.txspeed_histogram_64 != null)
                message.txspeed_histogram_64 = object.txspeed_histogram_64 >>> 0;
            if (object.txspeed_histogram_128 != null)
                message.txspeed_histogram_128 = object.txspeed_histogram_128 >>> 0;
            if (object.txspeed_histogram_256 != null)
                message.txspeed_histogram_256 = object.txspeed_histogram_256 >>> 0;
            if (object.txspeed_histogram_512 != null)
                message.txspeed_histogram_512 = object.txspeed_histogram_512 >>> 0;
            if (object.txspeed_histogram_1024 != null)
                message.txspeed_histogram_1024 = object.txspeed_histogram_1024 >>> 0;
            if (object.txspeed_histogram_max != null)
                message.txspeed_histogram_max = object.txspeed_histogram_max >>> 0;
            if (object.txspeed_ntile_5th != null)
                message.txspeed_ntile_5th = object.txspeed_ntile_5th >>> 0;
            if (object.txspeed_ntile_50th != null)
                message.txspeed_ntile_50th = object.txspeed_ntile_50th >>> 0;
            if (object.txspeed_ntile_75th != null)
                message.txspeed_ntile_75th = object.txspeed_ntile_75th >>> 0;
            if (object.txspeed_ntile_95th != null)
                message.txspeed_ntile_95th = object.txspeed_ntile_95th >>> 0;
            if (object.txspeed_ntile_98th != null)
                message.txspeed_ntile_98th = object.txspeed_ntile_98th >>> 0;
            if (object.rxspeed_max != null)
                message.rxspeed_max = object.rxspeed_max >>> 0;
            if (object.rxspeed_histogram_16 != null)
                message.rxspeed_histogram_16 = object.rxspeed_histogram_16 >>> 0;
            if (object.rxspeed_histogram_32 != null)
                message.rxspeed_histogram_32 = object.rxspeed_histogram_32 >>> 0;
            if (object.rxspeed_histogram_64 != null)
                message.rxspeed_histogram_64 = object.rxspeed_histogram_64 >>> 0;
            if (object.rxspeed_histogram_128 != null)
                message.rxspeed_histogram_128 = object.rxspeed_histogram_128 >>> 0;
            if (object.rxspeed_histogram_256 != null)
                message.rxspeed_histogram_256 = object.rxspeed_histogram_256 >>> 0;
            if (object.rxspeed_histogram_512 != null)
                message.rxspeed_histogram_512 = object.rxspeed_histogram_512 >>> 0;
            if (object.rxspeed_histogram_1024 != null)
                message.rxspeed_histogram_1024 = object.rxspeed_histogram_1024 >>> 0;
            if (object.rxspeed_histogram_max != null)
                message.rxspeed_histogram_max = object.rxspeed_histogram_max >>> 0;
            if (object.rxspeed_ntile_5th != null)
                message.rxspeed_ntile_5th = object.rxspeed_ntile_5th >>> 0;
            if (object.rxspeed_ntile_50th != null)
                message.rxspeed_ntile_50th = object.rxspeed_ntile_50th >>> 0;
            if (object.rxspeed_ntile_75th != null)
                message.rxspeed_ntile_75th = object.rxspeed_ntile_75th >>> 0;
            if (object.rxspeed_ntile_95th != null)
                message.rxspeed_ntile_95th = object.rxspeed_ntile_95th >>> 0;
            if (object.rxspeed_ntile_98th != null)
                message.rxspeed_ntile_98th = object.rxspeed_ntile_98th >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramLinkLifetimeStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @static
         * @param {CMsgSteamDatagramLinkLifetimeStats} message CMsgSteamDatagramLinkLifetimeStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramLinkLifetimeStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_sent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_sent = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.kb_sent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.kb_sent = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.kb_recv = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.kb_recv = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_sequenced = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_sequenced = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_dropped = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_dropped = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_out_of_order = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_out_of_order = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_duplicate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_duplicate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.packets_recv_lurch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.packets_recv_lurch = options.longs === String ? "0" : 0;
                object.quality_histogram_100 = 0;
                object.quality_histogram_99 = 0;
                object.quality_histogram_97 = 0;
                object.quality_histogram_95 = 0;
                object.quality_histogram_90 = 0;
                object.quality_histogram_75 = 0;
                object.quality_histogram_50 = 0;
                object.quality_histogram_1 = 0;
                object.quality_histogram_dead = 0;
                object.quality_ntile_2nd = 0;
                object.quality_ntile_5th = 0;
                object.quality_ntile_25th = 0;
                object.quality_ntile_50th = 0;
                object.ping_histogram_25 = 0;
                object.ping_histogram_50 = 0;
                object.ping_histogram_75 = 0;
                object.ping_histogram_100 = 0;
                object.ping_histogram_125 = 0;
                object.ping_histogram_150 = 0;
                object.ping_histogram_200 = 0;
                object.ping_histogram_300 = 0;
                object.ping_histogram_max = 0;
                object.ping_ntile_5th = 0;
                object.ping_ntile_50th = 0;
                object.ping_ntile_75th = 0;
                object.ping_ntile_95th = 0;
                object.ping_ntile_98th = 0;
                object.jitter_histogram_negligible = 0;
                object.jitter_histogram_1 = 0;
                object.jitter_histogram_2 = 0;
                object.jitter_histogram_5 = 0;
                object.jitter_histogram_10 = 0;
                object.jitter_histogram_20 = 0;
                object.txspeed_max = 0;
                object.txspeed_histogram_16 = 0;
                object.txspeed_histogram_32 = 0;
                object.txspeed_histogram_64 = 0;
                object.txspeed_histogram_128 = 0;
                object.txspeed_histogram_256 = 0;
                object.txspeed_histogram_512 = 0;
                object.txspeed_histogram_1024 = 0;
                object.txspeed_histogram_max = 0;
                object.txspeed_ntile_5th = 0;
                object.txspeed_ntile_50th = 0;
                object.txspeed_ntile_75th = 0;
                object.txspeed_ntile_95th = 0;
                object.txspeed_ntile_98th = 0;
                object.rxspeed_max = 0;
                object.rxspeed_histogram_16 = 0;
                object.rxspeed_histogram_32 = 0;
                object.rxspeed_histogram_64 = 0;
                object.rxspeed_histogram_128 = 0;
                object.rxspeed_histogram_256 = 0;
                object.rxspeed_histogram_512 = 0;
                object.rxspeed_histogram_1024 = 0;
                object.rxspeed_histogram_max = 0;
                object.rxspeed_ntile_5th = 0;
                object.rxspeed_ntile_50th = 0;
                object.rxspeed_ntile_75th = 0;
                object.rxspeed_ntile_95th = 0;
                object.rxspeed_ntile_98th = 0;
            }
            if (message.packets_sent != null && message.hasOwnProperty("packets_sent"))
                if (typeof message.packets_sent === "number")
                    object.packets_sent = options.longs === String ? String(message.packets_sent) : message.packets_sent;
                else
                    object.packets_sent = options.longs === String ? $util.Long.prototype.toString.call(message.packets_sent) : options.longs === Number ? new $util.LongBits(message.packets_sent.low >>> 0, message.packets_sent.high >>> 0).toNumber(true) : message.packets_sent;
            if (message.kb_sent != null && message.hasOwnProperty("kb_sent"))
                if (typeof message.kb_sent === "number")
                    object.kb_sent = options.longs === String ? String(message.kb_sent) : message.kb_sent;
                else
                    object.kb_sent = options.longs === String ? $util.Long.prototype.toString.call(message.kb_sent) : options.longs === Number ? new $util.LongBits(message.kb_sent.low >>> 0, message.kb_sent.high >>> 0).toNumber(true) : message.kb_sent;
            if (message.packets_recv != null && message.hasOwnProperty("packets_recv"))
                if (typeof message.packets_recv === "number")
                    object.packets_recv = options.longs === String ? String(message.packets_recv) : message.packets_recv;
                else
                    object.packets_recv = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv) : options.longs === Number ? new $util.LongBits(message.packets_recv.low >>> 0, message.packets_recv.high >>> 0).toNumber(true) : message.packets_recv;
            if (message.kb_recv != null && message.hasOwnProperty("kb_recv"))
                if (typeof message.kb_recv === "number")
                    object.kb_recv = options.longs === String ? String(message.kb_recv) : message.kb_recv;
                else
                    object.kb_recv = options.longs === String ? $util.Long.prototype.toString.call(message.kb_recv) : options.longs === Number ? new $util.LongBits(message.kb_recv.low >>> 0, message.kb_recv.high >>> 0).toNumber(true) : message.kb_recv;
            if (message.packets_recv_sequenced != null && message.hasOwnProperty("packets_recv_sequenced"))
                if (typeof message.packets_recv_sequenced === "number")
                    object.packets_recv_sequenced = options.longs === String ? String(message.packets_recv_sequenced) : message.packets_recv_sequenced;
                else
                    object.packets_recv_sequenced = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_sequenced) : options.longs === Number ? new $util.LongBits(message.packets_recv_sequenced.low >>> 0, message.packets_recv_sequenced.high >>> 0).toNumber(true) : message.packets_recv_sequenced;
            if (message.packets_recv_dropped != null && message.hasOwnProperty("packets_recv_dropped"))
                if (typeof message.packets_recv_dropped === "number")
                    object.packets_recv_dropped = options.longs === String ? String(message.packets_recv_dropped) : message.packets_recv_dropped;
                else
                    object.packets_recv_dropped = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_dropped) : options.longs === Number ? new $util.LongBits(message.packets_recv_dropped.low >>> 0, message.packets_recv_dropped.high >>> 0).toNumber(true) : message.packets_recv_dropped;
            if (message.packets_recv_out_of_order != null && message.hasOwnProperty("packets_recv_out_of_order"))
                if (typeof message.packets_recv_out_of_order === "number")
                    object.packets_recv_out_of_order = options.longs === String ? String(message.packets_recv_out_of_order) : message.packets_recv_out_of_order;
                else
                    object.packets_recv_out_of_order = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_out_of_order) : options.longs === Number ? new $util.LongBits(message.packets_recv_out_of_order.low >>> 0, message.packets_recv_out_of_order.high >>> 0).toNumber(true) : message.packets_recv_out_of_order;
            if (message.packets_recv_duplicate != null && message.hasOwnProperty("packets_recv_duplicate"))
                if (typeof message.packets_recv_duplicate === "number")
                    object.packets_recv_duplicate = options.longs === String ? String(message.packets_recv_duplicate) : message.packets_recv_duplicate;
                else
                    object.packets_recv_duplicate = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_duplicate) : options.longs === Number ? new $util.LongBits(message.packets_recv_duplicate.low >>> 0, message.packets_recv_duplicate.high >>> 0).toNumber(true) : message.packets_recv_duplicate;
            if (message.packets_recv_lurch != null && message.hasOwnProperty("packets_recv_lurch"))
                if (typeof message.packets_recv_lurch === "number")
                    object.packets_recv_lurch = options.longs === String ? String(message.packets_recv_lurch) : message.packets_recv_lurch;
                else
                    object.packets_recv_lurch = options.longs === String ? $util.Long.prototype.toString.call(message.packets_recv_lurch) : options.longs === Number ? new $util.LongBits(message.packets_recv_lurch.low >>> 0, message.packets_recv_lurch.high >>> 0).toNumber(true) : message.packets_recv_lurch;
            if (message.quality_histogram_100 != null && message.hasOwnProperty("quality_histogram_100"))
                object.quality_histogram_100 = message.quality_histogram_100;
            if (message.quality_histogram_99 != null && message.hasOwnProperty("quality_histogram_99"))
                object.quality_histogram_99 = message.quality_histogram_99;
            if (message.quality_histogram_97 != null && message.hasOwnProperty("quality_histogram_97"))
                object.quality_histogram_97 = message.quality_histogram_97;
            if (message.quality_histogram_95 != null && message.hasOwnProperty("quality_histogram_95"))
                object.quality_histogram_95 = message.quality_histogram_95;
            if (message.quality_histogram_90 != null && message.hasOwnProperty("quality_histogram_90"))
                object.quality_histogram_90 = message.quality_histogram_90;
            if (message.quality_histogram_75 != null && message.hasOwnProperty("quality_histogram_75"))
                object.quality_histogram_75 = message.quality_histogram_75;
            if (message.quality_histogram_50 != null && message.hasOwnProperty("quality_histogram_50"))
                object.quality_histogram_50 = message.quality_histogram_50;
            if (message.quality_histogram_1 != null && message.hasOwnProperty("quality_histogram_1"))
                object.quality_histogram_1 = message.quality_histogram_1;
            if (message.quality_histogram_dead != null && message.hasOwnProperty("quality_histogram_dead"))
                object.quality_histogram_dead = message.quality_histogram_dead;
            if (message.quality_ntile_2nd != null && message.hasOwnProperty("quality_ntile_2nd"))
                object.quality_ntile_2nd = message.quality_ntile_2nd;
            if (message.quality_ntile_5th != null && message.hasOwnProperty("quality_ntile_5th"))
                object.quality_ntile_5th = message.quality_ntile_5th;
            if (message.quality_ntile_25th != null && message.hasOwnProperty("quality_ntile_25th"))
                object.quality_ntile_25th = message.quality_ntile_25th;
            if (message.quality_ntile_50th != null && message.hasOwnProperty("quality_ntile_50th"))
                object.quality_ntile_50th = message.quality_ntile_50th;
            if (message.ping_histogram_25 != null && message.hasOwnProperty("ping_histogram_25"))
                object.ping_histogram_25 = message.ping_histogram_25;
            if (message.ping_histogram_50 != null && message.hasOwnProperty("ping_histogram_50"))
                object.ping_histogram_50 = message.ping_histogram_50;
            if (message.ping_histogram_75 != null && message.hasOwnProperty("ping_histogram_75"))
                object.ping_histogram_75 = message.ping_histogram_75;
            if (message.ping_histogram_100 != null && message.hasOwnProperty("ping_histogram_100"))
                object.ping_histogram_100 = message.ping_histogram_100;
            if (message.ping_histogram_125 != null && message.hasOwnProperty("ping_histogram_125"))
                object.ping_histogram_125 = message.ping_histogram_125;
            if (message.ping_histogram_150 != null && message.hasOwnProperty("ping_histogram_150"))
                object.ping_histogram_150 = message.ping_histogram_150;
            if (message.ping_histogram_200 != null && message.hasOwnProperty("ping_histogram_200"))
                object.ping_histogram_200 = message.ping_histogram_200;
            if (message.ping_histogram_300 != null && message.hasOwnProperty("ping_histogram_300"))
                object.ping_histogram_300 = message.ping_histogram_300;
            if (message.ping_histogram_max != null && message.hasOwnProperty("ping_histogram_max"))
                object.ping_histogram_max = message.ping_histogram_max;
            if (message.ping_ntile_5th != null && message.hasOwnProperty("ping_ntile_5th"))
                object.ping_ntile_5th = message.ping_ntile_5th;
            if (message.ping_ntile_50th != null && message.hasOwnProperty("ping_ntile_50th"))
                object.ping_ntile_50th = message.ping_ntile_50th;
            if (message.ping_ntile_75th != null && message.hasOwnProperty("ping_ntile_75th"))
                object.ping_ntile_75th = message.ping_ntile_75th;
            if (message.ping_ntile_95th != null && message.hasOwnProperty("ping_ntile_95th"))
                object.ping_ntile_95th = message.ping_ntile_95th;
            if (message.ping_ntile_98th != null && message.hasOwnProperty("ping_ntile_98th"))
                object.ping_ntile_98th = message.ping_ntile_98th;
            if (message.jitter_histogram_negligible != null && message.hasOwnProperty("jitter_histogram_negligible"))
                object.jitter_histogram_negligible = message.jitter_histogram_negligible;
            if (message.jitter_histogram_1 != null && message.hasOwnProperty("jitter_histogram_1"))
                object.jitter_histogram_1 = message.jitter_histogram_1;
            if (message.jitter_histogram_2 != null && message.hasOwnProperty("jitter_histogram_2"))
                object.jitter_histogram_2 = message.jitter_histogram_2;
            if (message.jitter_histogram_5 != null && message.hasOwnProperty("jitter_histogram_5"))
                object.jitter_histogram_5 = message.jitter_histogram_5;
            if (message.jitter_histogram_10 != null && message.hasOwnProperty("jitter_histogram_10"))
                object.jitter_histogram_10 = message.jitter_histogram_10;
            if (message.jitter_histogram_20 != null && message.hasOwnProperty("jitter_histogram_20"))
                object.jitter_histogram_20 = message.jitter_histogram_20;
            if (message.txspeed_max != null && message.hasOwnProperty("txspeed_max"))
                object.txspeed_max = message.txspeed_max;
            if (message.txspeed_histogram_16 != null && message.hasOwnProperty("txspeed_histogram_16"))
                object.txspeed_histogram_16 = message.txspeed_histogram_16;
            if (message.txspeed_histogram_32 != null && message.hasOwnProperty("txspeed_histogram_32"))
                object.txspeed_histogram_32 = message.txspeed_histogram_32;
            if (message.txspeed_histogram_64 != null && message.hasOwnProperty("txspeed_histogram_64"))
                object.txspeed_histogram_64 = message.txspeed_histogram_64;
            if (message.txspeed_histogram_128 != null && message.hasOwnProperty("txspeed_histogram_128"))
                object.txspeed_histogram_128 = message.txspeed_histogram_128;
            if (message.txspeed_histogram_256 != null && message.hasOwnProperty("txspeed_histogram_256"))
                object.txspeed_histogram_256 = message.txspeed_histogram_256;
            if (message.txspeed_histogram_512 != null && message.hasOwnProperty("txspeed_histogram_512"))
                object.txspeed_histogram_512 = message.txspeed_histogram_512;
            if (message.txspeed_histogram_1024 != null && message.hasOwnProperty("txspeed_histogram_1024"))
                object.txspeed_histogram_1024 = message.txspeed_histogram_1024;
            if (message.txspeed_histogram_max != null && message.hasOwnProperty("txspeed_histogram_max"))
                object.txspeed_histogram_max = message.txspeed_histogram_max;
            if (message.txspeed_ntile_5th != null && message.hasOwnProperty("txspeed_ntile_5th"))
                object.txspeed_ntile_5th = message.txspeed_ntile_5th;
            if (message.txspeed_ntile_50th != null && message.hasOwnProperty("txspeed_ntile_50th"))
                object.txspeed_ntile_50th = message.txspeed_ntile_50th;
            if (message.txspeed_ntile_75th != null && message.hasOwnProperty("txspeed_ntile_75th"))
                object.txspeed_ntile_75th = message.txspeed_ntile_75th;
            if (message.txspeed_ntile_95th != null && message.hasOwnProperty("txspeed_ntile_95th"))
                object.txspeed_ntile_95th = message.txspeed_ntile_95th;
            if (message.txspeed_ntile_98th != null && message.hasOwnProperty("txspeed_ntile_98th"))
                object.txspeed_ntile_98th = message.txspeed_ntile_98th;
            if (message.rxspeed_max != null && message.hasOwnProperty("rxspeed_max"))
                object.rxspeed_max = message.rxspeed_max;
            if (message.rxspeed_histogram_16 != null && message.hasOwnProperty("rxspeed_histogram_16"))
                object.rxspeed_histogram_16 = message.rxspeed_histogram_16;
            if (message.rxspeed_histogram_32 != null && message.hasOwnProperty("rxspeed_histogram_32"))
                object.rxspeed_histogram_32 = message.rxspeed_histogram_32;
            if (message.rxspeed_histogram_64 != null && message.hasOwnProperty("rxspeed_histogram_64"))
                object.rxspeed_histogram_64 = message.rxspeed_histogram_64;
            if (message.rxspeed_histogram_128 != null && message.hasOwnProperty("rxspeed_histogram_128"))
                object.rxspeed_histogram_128 = message.rxspeed_histogram_128;
            if (message.rxspeed_histogram_256 != null && message.hasOwnProperty("rxspeed_histogram_256"))
                object.rxspeed_histogram_256 = message.rxspeed_histogram_256;
            if (message.rxspeed_histogram_512 != null && message.hasOwnProperty("rxspeed_histogram_512"))
                object.rxspeed_histogram_512 = message.rxspeed_histogram_512;
            if (message.rxspeed_histogram_1024 != null && message.hasOwnProperty("rxspeed_histogram_1024"))
                object.rxspeed_histogram_1024 = message.rxspeed_histogram_1024;
            if (message.rxspeed_histogram_max != null && message.hasOwnProperty("rxspeed_histogram_max"))
                object.rxspeed_histogram_max = message.rxspeed_histogram_max;
            if (message.rxspeed_ntile_5th != null && message.hasOwnProperty("rxspeed_ntile_5th"))
                object.rxspeed_ntile_5th = message.rxspeed_ntile_5th;
            if (message.rxspeed_ntile_50th != null && message.hasOwnProperty("rxspeed_ntile_50th"))
                object.rxspeed_ntile_50th = message.rxspeed_ntile_50th;
            if (message.rxspeed_ntile_75th != null && message.hasOwnProperty("rxspeed_ntile_75th"))
                object.rxspeed_ntile_75th = message.rxspeed_ntile_75th;
            if (message.rxspeed_ntile_95th != null && message.hasOwnProperty("rxspeed_ntile_95th"))
                object.rxspeed_ntile_95th = message.rxspeed_ntile_95th;
            if (message.rxspeed_ntile_98th != null && message.hasOwnProperty("rxspeed_ntile_98th"))
                object.rxspeed_ntile_98th = message.rxspeed_ntile_98th;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramLinkLifetimeStats to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramLinkLifetimeStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramLinkLifetimeStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramLinkLifetimeStats;
    })();
    
    $root.CMsgSteamDatagramConnectionQuality = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramConnectionQuality.
         * @exports ICMsgSteamDatagramConnectionQuality
         * @interface ICMsgSteamDatagramConnectionQuality
         * @property {ICMsgSteamDatagramLinkInstantaneousStats|null} [instantaneous] CMsgSteamDatagramConnectionQuality instantaneous
         * @property {ICMsgSteamDatagramLinkLifetimeStats|null} [lifetime] CMsgSteamDatagramConnectionQuality lifetime
         */
    
        /**
         * Constructs a new CMsgSteamDatagramConnectionQuality.
         * @exports CMsgSteamDatagramConnectionQuality
         * @classdesc Represents a CMsgSteamDatagramConnectionQuality.
         * @implements ICMsgSteamDatagramConnectionQuality
         * @constructor
         * @param {ICMsgSteamDatagramConnectionQuality=} [properties] Properties to set
         */
        function CMsgSteamDatagramConnectionQuality(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramConnectionQuality instantaneous.
         * @member {ICMsgSteamDatagramLinkInstantaneousStats|null|undefined} instantaneous
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         */
        CMsgSteamDatagramConnectionQuality.prototype.instantaneous = null;
    
        /**
         * CMsgSteamDatagramConnectionQuality lifetime.
         * @member {ICMsgSteamDatagramLinkLifetimeStats|null|undefined} lifetime
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         */
        CMsgSteamDatagramConnectionQuality.prototype.lifetime = null;
    
        /**
         * Creates a new CMsgSteamDatagramConnectionQuality instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality=} [properties] Properties to set
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality instance
         */
        CMsgSteamDatagramConnectionQuality.create = function create(properties) {
            return new CMsgSteamDatagramConnectionQuality(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionQuality message. Does not implicitly {@link CMsgSteamDatagramConnectionQuality.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionQuality.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instantaneous != null && message.hasOwnProperty("instantaneous"))
                $root.CMsgSteamDatagramLinkInstantaneousStats.encode(message.instantaneous, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lifetime != null && message.hasOwnProperty("lifetime"))
                $root.CMsgSteamDatagramLinkLifetimeStats.encode(message.lifetime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramConnectionQuality message, length delimited. Does not implicitly {@link CMsgSteamDatagramConnectionQuality.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {ICMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramConnectionQuality.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionQuality message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionQuality.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramConnectionQuality();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramConnectionQuality message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramConnectionQuality.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramConnectionQuality message.
         * @function verify
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramConnectionQuality.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instantaneous != null && message.hasOwnProperty("instantaneous")) {
                var error = $root.CMsgSteamDatagramLinkInstantaneousStats.verify(message.instantaneous);
                if (error)
                    return "instantaneous." + error;
            }
            if (message.lifetime != null && message.hasOwnProperty("lifetime")) {
                var error = $root.CMsgSteamDatagramLinkLifetimeStats.verify(message.lifetime);
                if (error)
                    return "lifetime." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramConnectionQuality message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramConnectionQuality} CMsgSteamDatagramConnectionQuality
         */
        CMsgSteamDatagramConnectionQuality.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramConnectionQuality)
                return object;
            var message = new $root.CMsgSteamDatagramConnectionQuality();
            if (object.instantaneous != null) {
                if (typeof object.instantaneous !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionQuality.instantaneous: object expected");
                message.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.fromObject(object.instantaneous);
            }
            if (object.lifetime != null) {
                if (typeof object.lifetime !== "object")
                    throw TypeError(".CMsgSteamDatagramConnectionQuality.lifetime: object expected");
                message.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.fromObject(object.lifetime);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramConnectionQuality message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramConnectionQuality
         * @static
         * @param {CMsgSteamDatagramConnectionQuality} message CMsgSteamDatagramConnectionQuality
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramConnectionQuality.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.instantaneous = null;
                object.lifetime = null;
            }
            if (message.instantaneous != null && message.hasOwnProperty("instantaneous"))
                object.instantaneous = $root.CMsgSteamDatagramLinkInstantaneousStats.toObject(message.instantaneous, options);
            if (message.lifetime != null && message.hasOwnProperty("lifetime"))
                object.lifetime = $root.CMsgSteamDatagramLinkLifetimeStats.toObject(message.lifetime, options);
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramConnectionQuality to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramConnectionQuality
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramConnectionQuality.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramConnectionQuality;
    })();

    return $root;
});
