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
    
    $root.CMsgClientHeartBeat = (function() {
    
        /**
         * Properties of a CMsgClientHeartBeat.
         * @exports ICMsgClientHeartBeat
         * @interface ICMsgClientHeartBeat
         */
    
        /**
         * Constructs a new CMsgClientHeartBeat.
         * @exports CMsgClientHeartBeat
         * @classdesc Represents a CMsgClientHeartBeat.
         * @implements ICMsgClientHeartBeat
         * @constructor
         * @param {ICMsgClientHeartBeat=} [properties] Properties to set
         */
        function CMsgClientHeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CMsgClientHeartBeat instance using the specified properties.
         * @function create
         * @memberof CMsgClientHeartBeat
         * @static
         * @param {ICMsgClientHeartBeat=} [properties] Properties to set
         * @returns {CMsgClientHeartBeat} CMsgClientHeartBeat instance
         */
        CMsgClientHeartBeat.create = function create(properties) {
            return new CMsgClientHeartBeat(properties);
        };
    
        /**
         * Encodes the specified CMsgClientHeartBeat message. Does not implicitly {@link CMsgClientHeartBeat.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientHeartBeat
         * @static
         * @param {ICMsgClientHeartBeat} message CMsgClientHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientHeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientHeartBeat message, length delimited. Does not implicitly {@link CMsgClientHeartBeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientHeartBeat
         * @static
         * @param {ICMsgClientHeartBeat} message CMsgClientHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientHeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientHeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientHeartBeat} CMsgClientHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientHeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientHeartBeat();
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
         * Decodes a CMsgClientHeartBeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientHeartBeat} CMsgClientHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientHeartBeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientHeartBeat message.
         * @function verify
         * @memberof CMsgClientHeartBeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientHeartBeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientHeartBeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientHeartBeat} CMsgClientHeartBeat
         */
        CMsgClientHeartBeat.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientHeartBeat)
                return object;
            return new $root.CMsgClientHeartBeat();
        };
    
        /**
         * Creates a plain object from a CMsgClientHeartBeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientHeartBeat
         * @static
         * @param {CMsgClientHeartBeat} message CMsgClientHeartBeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientHeartBeat.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CMsgClientHeartBeat to JSON.
         * @function toJSON
         * @memberof CMsgClientHeartBeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientHeartBeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientHeartBeat;
    })();
    
    $root.CMsgClientServerTimestampRequest = (function() {
    
        /**
         * Properties of a CMsgClientServerTimestampRequest.
         * @exports ICMsgClientServerTimestampRequest
         * @interface ICMsgClientServerTimestampRequest
         * @property {number|Long|null} [client_request_timestamp] CMsgClientServerTimestampRequest client_request_timestamp
         */
    
        /**
         * Constructs a new CMsgClientServerTimestampRequest.
         * @exports CMsgClientServerTimestampRequest
         * @classdesc Represents a CMsgClientServerTimestampRequest.
         * @implements ICMsgClientServerTimestampRequest
         * @constructor
         * @param {ICMsgClientServerTimestampRequest=} [properties] Properties to set
         */
        function CMsgClientServerTimestampRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientServerTimestampRequest client_request_timestamp.
         * @member {number|Long} client_request_timestamp
         * @memberof CMsgClientServerTimestampRequest
         * @instance
         */
        CMsgClientServerTimestampRequest.prototype.client_request_timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgClientServerTimestampRequest instance using the specified properties.
         * @function create
         * @memberof CMsgClientServerTimestampRequest
         * @static
         * @param {ICMsgClientServerTimestampRequest=} [properties] Properties to set
         * @returns {CMsgClientServerTimestampRequest} CMsgClientServerTimestampRequest instance
         */
        CMsgClientServerTimestampRequest.create = function create(properties) {
            return new CMsgClientServerTimestampRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgClientServerTimestampRequest message. Does not implicitly {@link CMsgClientServerTimestampRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientServerTimestampRequest
         * @static
         * @param {ICMsgClientServerTimestampRequest} message CMsgClientServerTimestampRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientServerTimestampRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_request_timestamp != null && message.hasOwnProperty("client_request_timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.client_request_timestamp);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientServerTimestampRequest message, length delimited. Does not implicitly {@link CMsgClientServerTimestampRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientServerTimestampRequest
         * @static
         * @param {ICMsgClientServerTimestampRequest} message CMsgClientServerTimestampRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientServerTimestampRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientServerTimestampRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientServerTimestampRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientServerTimestampRequest} CMsgClientServerTimestampRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientServerTimestampRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientServerTimestampRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_request_timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientServerTimestampRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientServerTimestampRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientServerTimestampRequest} CMsgClientServerTimestampRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientServerTimestampRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientServerTimestampRequest message.
         * @function verify
         * @memberof CMsgClientServerTimestampRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientServerTimestampRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_request_timestamp != null && message.hasOwnProperty("client_request_timestamp"))
                if (!$util.isInteger(message.client_request_timestamp) && !(message.client_request_timestamp && $util.isInteger(message.client_request_timestamp.low) && $util.isInteger(message.client_request_timestamp.high)))
                    return "client_request_timestamp: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientServerTimestampRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientServerTimestampRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientServerTimestampRequest} CMsgClientServerTimestampRequest
         */
        CMsgClientServerTimestampRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientServerTimestampRequest)
                return object;
            var message = new $root.CMsgClientServerTimestampRequest();
            if (object.client_request_timestamp != null)
                if ($util.Long)
                    (message.client_request_timestamp = $util.Long.fromValue(object.client_request_timestamp)).unsigned = true;
                else if (typeof object.client_request_timestamp === "string")
                    message.client_request_timestamp = parseInt(object.client_request_timestamp, 10);
                else if (typeof object.client_request_timestamp === "number")
                    message.client_request_timestamp = object.client_request_timestamp;
                else if (typeof object.client_request_timestamp === "object")
                    message.client_request_timestamp = new $util.LongBits(object.client_request_timestamp.low >>> 0, object.client_request_timestamp.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientServerTimestampRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientServerTimestampRequest
         * @static
         * @param {CMsgClientServerTimestampRequest} message CMsgClientServerTimestampRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientServerTimestampRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_request_timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_request_timestamp = options.longs === String ? "0" : 0;
            if (message.client_request_timestamp != null && message.hasOwnProperty("client_request_timestamp"))
                if (typeof message.client_request_timestamp === "number")
                    object.client_request_timestamp = options.longs === String ? String(message.client_request_timestamp) : message.client_request_timestamp;
                else
                    object.client_request_timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.client_request_timestamp) : options.longs === Number ? new $util.LongBits(message.client_request_timestamp.low >>> 0, message.client_request_timestamp.high >>> 0).toNumber(true) : message.client_request_timestamp;
            return object;
        };
    
        /**
         * Converts this CMsgClientServerTimestampRequest to JSON.
         * @function toJSON
         * @memberof CMsgClientServerTimestampRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientServerTimestampRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientServerTimestampRequest;
    })();
    
    $root.CMsgClientServerTimestampResponse = (function() {
    
        /**
         * Properties of a CMsgClientServerTimestampResponse.
         * @exports ICMsgClientServerTimestampResponse
         * @interface ICMsgClientServerTimestampResponse
         * @property {number|Long|null} [client_request_timestamp] CMsgClientServerTimestampResponse client_request_timestamp
         * @property {number|Long|null} [server_timestamp_ms] CMsgClientServerTimestampResponse server_timestamp_ms
         */
    
        /**
         * Constructs a new CMsgClientServerTimestampResponse.
         * @exports CMsgClientServerTimestampResponse
         * @classdesc Represents a CMsgClientServerTimestampResponse.
         * @implements ICMsgClientServerTimestampResponse
         * @constructor
         * @param {ICMsgClientServerTimestampResponse=} [properties] Properties to set
         */
        function CMsgClientServerTimestampResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientServerTimestampResponse client_request_timestamp.
         * @member {number|Long} client_request_timestamp
         * @memberof CMsgClientServerTimestampResponse
         * @instance
         */
        CMsgClientServerTimestampResponse.prototype.client_request_timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgClientServerTimestampResponse server_timestamp_ms.
         * @member {number|Long} server_timestamp_ms
         * @memberof CMsgClientServerTimestampResponse
         * @instance
         */
        CMsgClientServerTimestampResponse.prototype.server_timestamp_ms = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CMsgClientServerTimestampResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientServerTimestampResponse
         * @static
         * @param {ICMsgClientServerTimestampResponse=} [properties] Properties to set
         * @returns {CMsgClientServerTimestampResponse} CMsgClientServerTimestampResponse instance
         */
        CMsgClientServerTimestampResponse.create = function create(properties) {
            return new CMsgClientServerTimestampResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientServerTimestampResponse message. Does not implicitly {@link CMsgClientServerTimestampResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientServerTimestampResponse
         * @static
         * @param {ICMsgClientServerTimestampResponse} message CMsgClientServerTimestampResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientServerTimestampResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_request_timestamp != null && message.hasOwnProperty("client_request_timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.client_request_timestamp);
            if (message.server_timestamp_ms != null && message.hasOwnProperty("server_timestamp_ms"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.server_timestamp_ms);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientServerTimestampResponse message, length delimited. Does not implicitly {@link CMsgClientServerTimestampResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientServerTimestampResponse
         * @static
         * @param {ICMsgClientServerTimestampResponse} message CMsgClientServerTimestampResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientServerTimestampResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientServerTimestampResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientServerTimestampResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientServerTimestampResponse} CMsgClientServerTimestampResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientServerTimestampResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientServerTimestampResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_request_timestamp = reader.uint64();
                    break;
                case 2:
                    message.server_timestamp_ms = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientServerTimestampResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientServerTimestampResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientServerTimestampResponse} CMsgClientServerTimestampResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientServerTimestampResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientServerTimestampResponse message.
         * @function verify
         * @memberof CMsgClientServerTimestampResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientServerTimestampResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_request_timestamp != null && message.hasOwnProperty("client_request_timestamp"))
                if (!$util.isInteger(message.client_request_timestamp) && !(message.client_request_timestamp && $util.isInteger(message.client_request_timestamp.low) && $util.isInteger(message.client_request_timestamp.high)))
                    return "client_request_timestamp: integer|Long expected";
            if (message.server_timestamp_ms != null && message.hasOwnProperty("server_timestamp_ms"))
                if (!$util.isInteger(message.server_timestamp_ms) && !(message.server_timestamp_ms && $util.isInteger(message.server_timestamp_ms.low) && $util.isInteger(message.server_timestamp_ms.high)))
                    return "server_timestamp_ms: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientServerTimestampResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientServerTimestampResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientServerTimestampResponse} CMsgClientServerTimestampResponse
         */
        CMsgClientServerTimestampResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientServerTimestampResponse)
                return object;
            var message = new $root.CMsgClientServerTimestampResponse();
            if (object.client_request_timestamp != null)
                if ($util.Long)
                    (message.client_request_timestamp = $util.Long.fromValue(object.client_request_timestamp)).unsigned = true;
                else if (typeof object.client_request_timestamp === "string")
                    message.client_request_timestamp = parseInt(object.client_request_timestamp, 10);
                else if (typeof object.client_request_timestamp === "number")
                    message.client_request_timestamp = object.client_request_timestamp;
                else if (typeof object.client_request_timestamp === "object")
                    message.client_request_timestamp = new $util.LongBits(object.client_request_timestamp.low >>> 0, object.client_request_timestamp.high >>> 0).toNumber(true);
            if (object.server_timestamp_ms != null)
                if ($util.Long)
                    (message.server_timestamp_ms = $util.Long.fromValue(object.server_timestamp_ms)).unsigned = true;
                else if (typeof object.server_timestamp_ms === "string")
                    message.server_timestamp_ms = parseInt(object.server_timestamp_ms, 10);
                else if (typeof object.server_timestamp_ms === "number")
                    message.server_timestamp_ms = object.server_timestamp_ms;
                else if (typeof object.server_timestamp_ms === "object")
                    message.server_timestamp_ms = new $util.LongBits(object.server_timestamp_ms.low >>> 0, object.server_timestamp_ms.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientServerTimestampResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientServerTimestampResponse
         * @static
         * @param {CMsgClientServerTimestampResponse} message CMsgClientServerTimestampResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientServerTimestampResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_request_timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_request_timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.server_timestamp_ms = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.server_timestamp_ms = options.longs === String ? "0" : 0;
            }
            if (message.client_request_timestamp != null && message.hasOwnProperty("client_request_timestamp"))
                if (typeof message.client_request_timestamp === "number")
                    object.client_request_timestamp = options.longs === String ? String(message.client_request_timestamp) : message.client_request_timestamp;
                else
                    object.client_request_timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.client_request_timestamp) : options.longs === Number ? new $util.LongBits(message.client_request_timestamp.low >>> 0, message.client_request_timestamp.high >>> 0).toNumber(true) : message.client_request_timestamp;
            if (message.server_timestamp_ms != null && message.hasOwnProperty("server_timestamp_ms"))
                if (typeof message.server_timestamp_ms === "number")
                    object.server_timestamp_ms = options.longs === String ? String(message.server_timestamp_ms) : message.server_timestamp_ms;
                else
                    object.server_timestamp_ms = options.longs === String ? $util.Long.prototype.toString.call(message.server_timestamp_ms) : options.longs === Number ? new $util.LongBits(message.server_timestamp_ms.low >>> 0, message.server_timestamp_ms.high >>> 0).toNumber(true) : message.server_timestamp_ms;
            return object;
        };
    
        /**
         * Converts this CMsgClientServerTimestampResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientServerTimestampResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientServerTimestampResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientServerTimestampResponse;
    })();
    
    $root.CMsgClientSecret = (function() {
    
        /**
         * Properties of a CMsgClientSecret.
         * @exports ICMsgClientSecret
         * @interface ICMsgClientSecret
         * @property {number|null} [version] CMsgClientSecret version
         * @property {number|null} [appid] CMsgClientSecret appid
         * @property {number|null} [deviceid] CMsgClientSecret deviceid
         * @property {number|Long|null} [nonce] CMsgClientSecret nonce
         * @property {Uint8Array|null} [hmac] CMsgClientSecret hmac
         */
    
        /**
         * Constructs a new CMsgClientSecret.
         * @exports CMsgClientSecret
         * @classdesc Represents a CMsgClientSecret.
         * @implements ICMsgClientSecret
         * @constructor
         * @param {ICMsgClientSecret=} [properties] Properties to set
         */
        function CMsgClientSecret(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientSecret version.
         * @member {number} version
         * @memberof CMsgClientSecret
         * @instance
         */
        CMsgClientSecret.prototype.version = 0;
    
        /**
         * CMsgClientSecret appid.
         * @member {number} appid
         * @memberof CMsgClientSecret
         * @instance
         */
        CMsgClientSecret.prototype.appid = 0;
    
        /**
         * CMsgClientSecret deviceid.
         * @member {number} deviceid
         * @memberof CMsgClientSecret
         * @instance
         */
        CMsgClientSecret.prototype.deviceid = 0;
    
        /**
         * CMsgClientSecret nonce.
         * @member {number|Long} nonce
         * @memberof CMsgClientSecret
         * @instance
         */
        CMsgClientSecret.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientSecret hmac.
         * @member {Uint8Array} hmac
         * @memberof CMsgClientSecret
         * @instance
         */
        CMsgClientSecret.prototype.hmac = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgClientSecret instance using the specified properties.
         * @function create
         * @memberof CMsgClientSecret
         * @static
         * @param {ICMsgClientSecret=} [properties] Properties to set
         * @returns {CMsgClientSecret} CMsgClientSecret instance
         */
        CMsgClientSecret.create = function create(properties) {
            return new CMsgClientSecret(properties);
        };
    
        /**
         * Encodes the specified CMsgClientSecret message. Does not implicitly {@link CMsgClientSecret.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientSecret
         * @static
         * @param {ICMsgClientSecret} message CMsgClientSecret message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientSecret.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.version);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.deviceid != null && message.hasOwnProperty("deviceid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.deviceid);
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.nonce);
            if (message.hmac != null && message.hasOwnProperty("hmac"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.hmac);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientSecret message, length delimited. Does not implicitly {@link CMsgClientSecret.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientSecret
         * @static
         * @param {ICMsgClientSecret} message CMsgClientSecret message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientSecret.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientSecret message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientSecret
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientSecret} CMsgClientSecret
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientSecret.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientSecret();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.uint32();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.deviceid = reader.uint32();
                    break;
                case 4:
                    message.nonce = reader.fixed64();
                    break;
                case 5:
                    message.hmac = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientSecret message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientSecret
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientSecret} CMsgClientSecret
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientSecret.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientSecret message.
         * @function verify
         * @memberof CMsgClientSecret
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientSecret.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.deviceid != null && message.hasOwnProperty("deviceid"))
                if (!$util.isInteger(message.deviceid))
                    return "deviceid: integer expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                    return "nonce: integer|Long expected";
            if (message.hmac != null && message.hasOwnProperty("hmac"))
                if (!(message.hmac && typeof message.hmac.length === "number" || $util.isString(message.hmac)))
                    return "hmac: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientSecret message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientSecret
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientSecret} CMsgClientSecret
         */
        CMsgClientSecret.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientSecret)
                return object;
            var message = new $root.CMsgClientSecret();
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.deviceid != null)
                message.deviceid = object.deviceid >>> 0;
            if (object.nonce != null)
                if ($util.Long)
                    (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = false;
                else if (typeof object.nonce === "string")
                    message.nonce = parseInt(object.nonce, 10);
                else if (typeof object.nonce === "number")
                    message.nonce = object.nonce;
                else if (typeof object.nonce === "object")
                    message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber();
            if (object.hmac != null)
                if (typeof object.hmac === "string")
                    $util.base64.decode(object.hmac, message.hmac = $util.newBuffer($util.base64.length(object.hmac)), 0);
                else if (object.hmac.length)
                    message.hmac = object.hmac;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientSecret message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientSecret
         * @static
         * @param {CMsgClientSecret} message CMsgClientSecret
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientSecret.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                object.appid = 0;
                object.deviceid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nonce = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.hmac = "";
                else {
                    object.hmac = [];
                    if (options.bytes !== Array)
                        object.hmac = $util.newBuffer(object.hmac);
                }
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.deviceid != null && message.hasOwnProperty("deviceid"))
                object.deviceid = message.deviceid;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (typeof message.nonce === "number")
                    object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                else
                    object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber() : message.nonce;
            if (message.hmac != null && message.hasOwnProperty("hmac"))
                object.hmac = options.bytes === String ? $util.base64.encode(message.hmac, 0, message.hmac.length) : options.bytes === Array ? Array.prototype.slice.call(message.hmac) : message.hmac;
            return object;
        };
    
        /**
         * Converts this CMsgClientSecret to JSON.
         * @function toJSON
         * @memberof CMsgClientSecret
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientSecret.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientSecret;
    })();
    
    $root.CMsgClientLogon = (function() {
    
        /**
         * Properties of a CMsgClientLogon.
         * @exports ICMsgClientLogon
         * @interface ICMsgClientLogon
         * @property {number|null} [protocol_version] CMsgClientLogon protocol_version
         * @property {number|null} [deprecated_obfustucated_private_ip] CMsgClientLogon deprecated_obfustucated_private_ip
         * @property {number|null} [cell_id] CMsgClientLogon cell_id
         * @property {number|null} [last_session_id] CMsgClientLogon last_session_id
         * @property {number|null} [client_package_version] CMsgClientLogon client_package_version
         * @property {string|null} [client_language] CMsgClientLogon client_language
         * @property {number|null} [client_os_type] CMsgClientLogon client_os_type
         * @property {boolean|null} [should_remember_password] CMsgClientLogon should_remember_password
         * @property {string|null} [wine_version] CMsgClientLogon wine_version
         * @property {number|null} [ping_ms_from_cell_search] CMsgClientLogon ping_ms_from_cell_search
         * @property {ICMsgIPAddress|null} [obfuscated_private_ip] CMsgClientLogon obfuscated_private_ip
         * @property {number|null} [deprecated_public_ip] CMsgClientLogon deprecated_public_ip
         * @property {number|null} [qos_level] CMsgClientLogon qos_level
         * @property {number|Long|null} [client_supplied_steam_id] CMsgClientLogon client_supplied_steam_id
         * @property {ICMsgIPAddress|null} [public_ip] CMsgClientLogon public_ip
         * @property {Uint8Array|null} [machine_id] CMsgClientLogon machine_id
         * @property {number|null} [launcher_type] CMsgClientLogon launcher_type
         * @property {number|null} [ui_mode] CMsgClientLogon ui_mode
         * @property {number|null} [chat_mode] CMsgClientLogon chat_mode
         * @property {Uint8Array|null} [steam2_auth_ticket] CMsgClientLogon steam2_auth_ticket
         * @property {string|null} [email_address] CMsgClientLogon email_address
         * @property {number|null} [rtime32_account_creation] CMsgClientLogon rtime32_account_creation
         * @property {string|null} [account_name] CMsgClientLogon account_name
         * @property {string|null} [password] CMsgClientLogon password
         * @property {string|null} [game_server_token] CMsgClientLogon game_server_token
         * @property {string|null} [login_key] CMsgClientLogon login_key
         * @property {boolean|null} [was_converted_deprecated_msg] CMsgClientLogon was_converted_deprecated_msg
         * @property {string|null} [anon_user_target_account_name] CMsgClientLogon anon_user_target_account_name
         * @property {number|Long|null} [resolved_user_steam_id] CMsgClientLogon resolved_user_steam_id
         * @property {number|null} [eresult_sentryfile] CMsgClientLogon eresult_sentryfile
         * @property {Uint8Array|null} [sha_sentryfile] CMsgClientLogon sha_sentryfile
         * @property {string|null} [auth_code] CMsgClientLogon auth_code
         * @property {number|null} [otp_type] CMsgClientLogon otp_type
         * @property {number|null} [otp_value] CMsgClientLogon otp_value
         * @property {string|null} [otp_identifier] CMsgClientLogon otp_identifier
         * @property {boolean|null} [steam2_ticket_request] CMsgClientLogon steam2_ticket_request
         * @property {Uint8Array|null} [sony_psn_ticket] CMsgClientLogon sony_psn_ticket
         * @property {string|null} [sony_psn_service_id] CMsgClientLogon sony_psn_service_id
         * @property {boolean|null} [create_new_psn_linked_account_if_needed] CMsgClientLogon create_new_psn_linked_account_if_needed
         * @property {string|null} [sony_psn_name] CMsgClientLogon sony_psn_name
         * @property {number|null} [game_server_app_id] CMsgClientLogon game_server_app_id
         * @property {boolean|null} [steamguard_dont_remember_computer] CMsgClientLogon steamguard_dont_remember_computer
         * @property {string|null} [machine_name] CMsgClientLogon machine_name
         * @property {string|null} [machine_name_userchosen] CMsgClientLogon machine_name_userchosen
         * @property {string|null} [country_override] CMsgClientLogon country_override
         * @property {boolean|null} [is_steam_box] CMsgClientLogon is_steam_box
         * @property {number|Long|null} [client_instance_id] CMsgClientLogon client_instance_id
         * @property {string|null} [two_factor_code] CMsgClientLogon two_factor_code
         * @property {boolean|null} [supports_rate_limit_response] CMsgClientLogon supports_rate_limit_response
         * @property {string|null} [web_logon_nonce] CMsgClientLogon web_logon_nonce
         * @property {number|null} [priority_reason] CMsgClientLogon priority_reason
         * @property {ICMsgClientSecret|null} [embedded_client_secret] CMsgClientLogon embedded_client_secret
         */
    
        /**
         * Constructs a new CMsgClientLogon.
         * @exports CMsgClientLogon
         * @classdesc Represents a CMsgClientLogon.
         * @implements ICMsgClientLogon
         * @constructor
         * @param {ICMsgClientLogon=} [properties] Properties to set
         */
        function CMsgClientLogon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientLogon protocol_version.
         * @member {number} protocol_version
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.protocol_version = 0;
    
        /**
         * CMsgClientLogon deprecated_obfustucated_private_ip.
         * @member {number} deprecated_obfustucated_private_ip
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.deprecated_obfustucated_private_ip = 0;
    
        /**
         * CMsgClientLogon cell_id.
         * @member {number} cell_id
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.cell_id = 0;
    
        /**
         * CMsgClientLogon last_session_id.
         * @member {number} last_session_id
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.last_session_id = 0;
    
        /**
         * CMsgClientLogon client_package_version.
         * @member {number} client_package_version
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.client_package_version = 0;
    
        /**
         * CMsgClientLogon client_language.
         * @member {string} client_language
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.client_language = "";
    
        /**
         * CMsgClientLogon client_os_type.
         * @member {number} client_os_type
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.client_os_type = 0;
    
        /**
         * CMsgClientLogon should_remember_password.
         * @member {boolean} should_remember_password
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.should_remember_password = false;
    
        /**
         * CMsgClientLogon wine_version.
         * @member {string} wine_version
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.wine_version = "";
    
        /**
         * CMsgClientLogon ping_ms_from_cell_search.
         * @member {number} ping_ms_from_cell_search
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.ping_ms_from_cell_search = 0;
    
        /**
         * CMsgClientLogon obfuscated_private_ip.
         * @member {ICMsgIPAddress|null|undefined} obfuscated_private_ip
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.obfuscated_private_ip = null;
    
        /**
         * CMsgClientLogon deprecated_public_ip.
         * @member {number} deprecated_public_ip
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.deprecated_public_ip = 0;
    
        /**
         * CMsgClientLogon qos_level.
         * @member {number} qos_level
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.qos_level = 0;
    
        /**
         * CMsgClientLogon client_supplied_steam_id.
         * @member {number|Long} client_supplied_steam_id
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.client_supplied_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientLogon public_ip.
         * @member {ICMsgIPAddress|null|undefined} public_ip
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.public_ip = null;
    
        /**
         * CMsgClientLogon machine_id.
         * @member {Uint8Array} machine_id
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.machine_id = $util.newBuffer([]);
    
        /**
         * CMsgClientLogon launcher_type.
         * @member {number} launcher_type
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.launcher_type = 0;
    
        /**
         * CMsgClientLogon ui_mode.
         * @member {number} ui_mode
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.ui_mode = 0;
    
        /**
         * CMsgClientLogon chat_mode.
         * @member {number} chat_mode
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.chat_mode = 0;
    
        /**
         * CMsgClientLogon steam2_auth_ticket.
         * @member {Uint8Array} steam2_auth_ticket
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.steam2_auth_ticket = $util.newBuffer([]);
    
        /**
         * CMsgClientLogon email_address.
         * @member {string} email_address
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.email_address = "";
    
        /**
         * CMsgClientLogon rtime32_account_creation.
         * @member {number} rtime32_account_creation
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.rtime32_account_creation = 0;
    
        /**
         * CMsgClientLogon account_name.
         * @member {string} account_name
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.account_name = "";
    
        /**
         * CMsgClientLogon password.
         * @member {string} password
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.password = "";
    
        /**
         * CMsgClientLogon game_server_token.
         * @member {string} game_server_token
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.game_server_token = "";
    
        /**
         * CMsgClientLogon login_key.
         * @member {string} login_key
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.login_key = "";
    
        /**
         * CMsgClientLogon was_converted_deprecated_msg.
         * @member {boolean} was_converted_deprecated_msg
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.was_converted_deprecated_msg = false;
    
        /**
         * CMsgClientLogon anon_user_target_account_name.
         * @member {string} anon_user_target_account_name
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.anon_user_target_account_name = "";
    
        /**
         * CMsgClientLogon resolved_user_steam_id.
         * @member {number|Long} resolved_user_steam_id
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.resolved_user_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientLogon eresult_sentryfile.
         * @member {number} eresult_sentryfile
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.eresult_sentryfile = 0;
    
        /**
         * CMsgClientLogon sha_sentryfile.
         * @member {Uint8Array} sha_sentryfile
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.sha_sentryfile = $util.newBuffer([]);
    
        /**
         * CMsgClientLogon auth_code.
         * @member {string} auth_code
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.auth_code = "";
    
        /**
         * CMsgClientLogon otp_type.
         * @member {number} otp_type
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.otp_type = 0;
    
        /**
         * CMsgClientLogon otp_value.
         * @member {number} otp_value
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.otp_value = 0;
    
        /**
         * CMsgClientLogon otp_identifier.
         * @member {string} otp_identifier
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.otp_identifier = "";
    
        /**
         * CMsgClientLogon steam2_ticket_request.
         * @member {boolean} steam2_ticket_request
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.steam2_ticket_request = false;
    
        /**
         * CMsgClientLogon sony_psn_ticket.
         * @member {Uint8Array} sony_psn_ticket
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.sony_psn_ticket = $util.newBuffer([]);
    
        /**
         * CMsgClientLogon sony_psn_service_id.
         * @member {string} sony_psn_service_id
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.sony_psn_service_id = "";
    
        /**
         * CMsgClientLogon create_new_psn_linked_account_if_needed.
         * @member {boolean} create_new_psn_linked_account_if_needed
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.create_new_psn_linked_account_if_needed = false;
    
        /**
         * CMsgClientLogon sony_psn_name.
         * @member {string} sony_psn_name
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.sony_psn_name = "";
    
        /**
         * CMsgClientLogon game_server_app_id.
         * @member {number} game_server_app_id
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.game_server_app_id = 0;
    
        /**
         * CMsgClientLogon steamguard_dont_remember_computer.
         * @member {boolean} steamguard_dont_remember_computer
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.steamguard_dont_remember_computer = false;
    
        /**
         * CMsgClientLogon machine_name.
         * @member {string} machine_name
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.machine_name = "";
    
        /**
         * CMsgClientLogon machine_name_userchosen.
         * @member {string} machine_name_userchosen
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.machine_name_userchosen = "";
    
        /**
         * CMsgClientLogon country_override.
         * @member {string} country_override
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.country_override = "";
    
        /**
         * CMsgClientLogon is_steam_box.
         * @member {boolean} is_steam_box
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.is_steam_box = false;
    
        /**
         * CMsgClientLogon client_instance_id.
         * @member {number|Long} client_instance_id
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.client_instance_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgClientLogon two_factor_code.
         * @member {string} two_factor_code
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.two_factor_code = "";
    
        /**
         * CMsgClientLogon supports_rate_limit_response.
         * @member {boolean} supports_rate_limit_response
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.supports_rate_limit_response = false;
    
        /**
         * CMsgClientLogon web_logon_nonce.
         * @member {string} web_logon_nonce
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.web_logon_nonce = "";
    
        /**
         * CMsgClientLogon priority_reason.
         * @member {number} priority_reason
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.priority_reason = 0;
    
        /**
         * CMsgClientLogon embedded_client_secret.
         * @member {ICMsgClientSecret|null|undefined} embedded_client_secret
         * @memberof CMsgClientLogon
         * @instance
         */
        CMsgClientLogon.prototype.embedded_client_secret = null;
    
        /**
         * Creates a new CMsgClientLogon instance using the specified properties.
         * @function create
         * @memberof CMsgClientLogon
         * @static
         * @param {ICMsgClientLogon=} [properties] Properties to set
         * @returns {CMsgClientLogon} CMsgClientLogon instance
         */
        CMsgClientLogon.create = function create(properties) {
            return new CMsgClientLogon(properties);
        };
    
        /**
         * Encodes the specified CMsgClientLogon message. Does not implicitly {@link CMsgClientLogon.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientLogon
         * @static
         * @param {ICMsgClientLogon} message CMsgClientLogon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientLogon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.protocol_version);
            if (message.deprecated_obfustucated_private_ip != null && message.hasOwnProperty("deprecated_obfustucated_private_ip"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.deprecated_obfustucated_private_ip);
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.cell_id);
            if (message.last_session_id != null && message.hasOwnProperty("last_session_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.last_session_id);
            if (message.client_package_version != null && message.hasOwnProperty("client_package_version"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.client_package_version);
            if (message.client_language != null && message.hasOwnProperty("client_language"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.client_language);
            if (message.client_os_type != null && message.hasOwnProperty("client_os_type"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.client_os_type);
            if (message.should_remember_password != null && message.hasOwnProperty("should_remember_password"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.should_remember_password);
            if (message.wine_version != null && message.hasOwnProperty("wine_version"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.wine_version);
            if (message.ping_ms_from_cell_search != null && message.hasOwnProperty("ping_ms_from_cell_search"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.ping_ms_from_cell_search);
            if (message.obfuscated_private_ip != null && message.hasOwnProperty("obfuscated_private_ip"))
                $root.CMsgIPAddress.encode(message.obfuscated_private_ip, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.deprecated_public_ip != null && message.hasOwnProperty("deprecated_public_ip"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.deprecated_public_ip);
            if (message.qos_level != null && message.hasOwnProperty("qos_level"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.qos_level);
            if (message.client_supplied_steam_id != null && message.hasOwnProperty("client_supplied_steam_id"))
                writer.uint32(/* id 22, wireType 1 =*/177).fixed64(message.client_supplied_steam_id);
            if (message.public_ip != null && message.hasOwnProperty("public_ip"))
                $root.CMsgIPAddress.encode(message.public_ip, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.machine_id != null && message.hasOwnProperty("machine_id"))
                writer.uint32(/* id 30, wireType 2 =*/242).bytes(message.machine_id);
            if (message.launcher_type != null && message.hasOwnProperty("launcher_type"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.launcher_type);
            if (message.ui_mode != null && message.hasOwnProperty("ui_mode"))
                writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.ui_mode);
            if (message.chat_mode != null && message.hasOwnProperty("chat_mode"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.chat_mode);
            if (message.steam2_auth_ticket != null && message.hasOwnProperty("steam2_auth_ticket"))
                writer.uint32(/* id 41, wireType 2 =*/330).bytes(message.steam2_auth_ticket);
            if (message.email_address != null && message.hasOwnProperty("email_address"))
                writer.uint32(/* id 42, wireType 2 =*/338).string(message.email_address);
            if (message.rtime32_account_creation != null && message.hasOwnProperty("rtime32_account_creation"))
                writer.uint32(/* id 43, wireType 5 =*/349).fixed32(message.rtime32_account_creation);
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                writer.uint32(/* id 50, wireType 2 =*/402).string(message.account_name);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 51, wireType 2 =*/410).string(message.password);
            if (message.game_server_token != null && message.hasOwnProperty("game_server_token"))
                writer.uint32(/* id 52, wireType 2 =*/418).string(message.game_server_token);
            if (message.login_key != null && message.hasOwnProperty("login_key"))
                writer.uint32(/* id 60, wireType 2 =*/482).string(message.login_key);
            if (message.was_converted_deprecated_msg != null && message.hasOwnProperty("was_converted_deprecated_msg"))
                writer.uint32(/* id 70, wireType 0 =*/560).bool(message.was_converted_deprecated_msg);
            if (message.anon_user_target_account_name != null && message.hasOwnProperty("anon_user_target_account_name"))
                writer.uint32(/* id 80, wireType 2 =*/642).string(message.anon_user_target_account_name);
            if (message.resolved_user_steam_id != null && message.hasOwnProperty("resolved_user_steam_id"))
                writer.uint32(/* id 81, wireType 1 =*/649).fixed64(message.resolved_user_steam_id);
            if (message.eresult_sentryfile != null && message.hasOwnProperty("eresult_sentryfile"))
                writer.uint32(/* id 82, wireType 0 =*/656).int32(message.eresult_sentryfile);
            if (message.sha_sentryfile != null && message.hasOwnProperty("sha_sentryfile"))
                writer.uint32(/* id 83, wireType 2 =*/666).bytes(message.sha_sentryfile);
            if (message.auth_code != null && message.hasOwnProperty("auth_code"))
                writer.uint32(/* id 84, wireType 2 =*/674).string(message.auth_code);
            if (message.otp_type != null && message.hasOwnProperty("otp_type"))
                writer.uint32(/* id 85, wireType 0 =*/680).int32(message.otp_type);
            if (message.otp_value != null && message.hasOwnProperty("otp_value"))
                writer.uint32(/* id 86, wireType 0 =*/688).uint32(message.otp_value);
            if (message.otp_identifier != null && message.hasOwnProperty("otp_identifier"))
                writer.uint32(/* id 87, wireType 2 =*/698).string(message.otp_identifier);
            if (message.steam2_ticket_request != null && message.hasOwnProperty("steam2_ticket_request"))
                writer.uint32(/* id 88, wireType 0 =*/704).bool(message.steam2_ticket_request);
            if (message.sony_psn_ticket != null && message.hasOwnProperty("sony_psn_ticket"))
                writer.uint32(/* id 90, wireType 2 =*/722).bytes(message.sony_psn_ticket);
            if (message.sony_psn_service_id != null && message.hasOwnProperty("sony_psn_service_id"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.sony_psn_service_id);
            if (message.create_new_psn_linked_account_if_needed != null && message.hasOwnProperty("create_new_psn_linked_account_if_needed"))
                writer.uint32(/* id 92, wireType 0 =*/736).bool(message.create_new_psn_linked_account_if_needed);
            if (message.sony_psn_name != null && message.hasOwnProperty("sony_psn_name"))
                writer.uint32(/* id 93, wireType 2 =*/746).string(message.sony_psn_name);
            if (message.game_server_app_id != null && message.hasOwnProperty("game_server_app_id"))
                writer.uint32(/* id 94, wireType 0 =*/752).int32(message.game_server_app_id);
            if (message.steamguard_dont_remember_computer != null && message.hasOwnProperty("steamguard_dont_remember_computer"))
                writer.uint32(/* id 95, wireType 0 =*/760).bool(message.steamguard_dont_remember_computer);
            if (message.machine_name != null && message.hasOwnProperty("machine_name"))
                writer.uint32(/* id 96, wireType 2 =*/770).string(message.machine_name);
            if (message.machine_name_userchosen != null && message.hasOwnProperty("machine_name_userchosen"))
                writer.uint32(/* id 97, wireType 2 =*/778).string(message.machine_name_userchosen);
            if (message.country_override != null && message.hasOwnProperty("country_override"))
                writer.uint32(/* id 98, wireType 2 =*/786).string(message.country_override);
            if (message.is_steam_box != null && message.hasOwnProperty("is_steam_box"))
                writer.uint32(/* id 99, wireType 0 =*/792).bool(message.is_steam_box);
            if (message.client_instance_id != null && message.hasOwnProperty("client_instance_id"))
                writer.uint32(/* id 100, wireType 0 =*/800).uint64(message.client_instance_id);
            if (message.two_factor_code != null && message.hasOwnProperty("two_factor_code"))
                writer.uint32(/* id 101, wireType 2 =*/810).string(message.two_factor_code);
            if (message.supports_rate_limit_response != null && message.hasOwnProperty("supports_rate_limit_response"))
                writer.uint32(/* id 102, wireType 0 =*/816).bool(message.supports_rate_limit_response);
            if (message.web_logon_nonce != null && message.hasOwnProperty("web_logon_nonce"))
                writer.uint32(/* id 103, wireType 2 =*/826).string(message.web_logon_nonce);
            if (message.priority_reason != null && message.hasOwnProperty("priority_reason"))
                writer.uint32(/* id 104, wireType 0 =*/832).int32(message.priority_reason);
            if (message.embedded_client_secret != null && message.hasOwnProperty("embedded_client_secret"))
                $root.CMsgClientSecret.encode(message.embedded_client_secret, writer.uint32(/* id 105, wireType 2 =*/842).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientLogon message, length delimited. Does not implicitly {@link CMsgClientLogon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientLogon
         * @static
         * @param {ICMsgClientLogon} message CMsgClientLogon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientLogon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientLogon message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientLogon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientLogon} CMsgClientLogon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientLogon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientLogon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.protocol_version = reader.uint32();
                    break;
                case 2:
                    message.deprecated_obfustucated_private_ip = reader.uint32();
                    break;
                case 3:
                    message.cell_id = reader.uint32();
                    break;
                case 4:
                    message.last_session_id = reader.uint32();
                    break;
                case 5:
                    message.client_package_version = reader.uint32();
                    break;
                case 6:
                    message.client_language = reader.string();
                    break;
                case 7:
                    message.client_os_type = reader.uint32();
                    break;
                case 8:
                    message.should_remember_password = reader.bool();
                    break;
                case 9:
                    message.wine_version = reader.string();
                    break;
                case 10:
                    message.ping_ms_from_cell_search = reader.uint32();
                    break;
                case 11:
                    message.obfuscated_private_ip = $root.CMsgIPAddress.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.deprecated_public_ip = reader.uint32();
                    break;
                case 21:
                    message.qos_level = reader.uint32();
                    break;
                case 22:
                    message.client_supplied_steam_id = reader.fixed64();
                    break;
                case 23:
                    message.public_ip = $root.CMsgIPAddress.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.machine_id = reader.bytes();
                    break;
                case 31:
                    message.launcher_type = reader.uint32();
                    break;
                case 32:
                    message.ui_mode = reader.uint32();
                    break;
                case 33:
                    message.chat_mode = reader.uint32();
                    break;
                case 41:
                    message.steam2_auth_ticket = reader.bytes();
                    break;
                case 42:
                    message.email_address = reader.string();
                    break;
                case 43:
                    message.rtime32_account_creation = reader.fixed32();
                    break;
                case 50:
                    message.account_name = reader.string();
                    break;
                case 51:
                    message.password = reader.string();
                    break;
                case 52:
                    message.game_server_token = reader.string();
                    break;
                case 60:
                    message.login_key = reader.string();
                    break;
                case 70:
                    message.was_converted_deprecated_msg = reader.bool();
                    break;
                case 80:
                    message.anon_user_target_account_name = reader.string();
                    break;
                case 81:
                    message.resolved_user_steam_id = reader.fixed64();
                    break;
                case 82:
                    message.eresult_sentryfile = reader.int32();
                    break;
                case 83:
                    message.sha_sentryfile = reader.bytes();
                    break;
                case 84:
                    message.auth_code = reader.string();
                    break;
                case 85:
                    message.otp_type = reader.int32();
                    break;
                case 86:
                    message.otp_value = reader.uint32();
                    break;
                case 87:
                    message.otp_identifier = reader.string();
                    break;
                case 88:
                    message.steam2_ticket_request = reader.bool();
                    break;
                case 90:
                    message.sony_psn_ticket = reader.bytes();
                    break;
                case 91:
                    message.sony_psn_service_id = reader.string();
                    break;
                case 92:
                    message.create_new_psn_linked_account_if_needed = reader.bool();
                    break;
                case 93:
                    message.sony_psn_name = reader.string();
                    break;
                case 94:
                    message.game_server_app_id = reader.int32();
                    break;
                case 95:
                    message.steamguard_dont_remember_computer = reader.bool();
                    break;
                case 96:
                    message.machine_name = reader.string();
                    break;
                case 97:
                    message.machine_name_userchosen = reader.string();
                    break;
                case 98:
                    message.country_override = reader.string();
                    break;
                case 99:
                    message.is_steam_box = reader.bool();
                    break;
                case 100:
                    message.client_instance_id = reader.uint64();
                    break;
                case 101:
                    message.two_factor_code = reader.string();
                    break;
                case 102:
                    message.supports_rate_limit_response = reader.bool();
                    break;
                case 103:
                    message.web_logon_nonce = reader.string();
                    break;
                case 104:
                    message.priority_reason = reader.int32();
                    break;
                case 105:
                    message.embedded_client_secret = $root.CMsgClientSecret.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientLogon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientLogon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientLogon} CMsgClientLogon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientLogon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientLogon message.
         * @function verify
         * @memberof CMsgClientLogon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientLogon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                if (!$util.isInteger(message.protocol_version))
                    return "protocol_version: integer expected";
            if (message.deprecated_obfustucated_private_ip != null && message.hasOwnProperty("deprecated_obfustucated_private_ip"))
                if (!$util.isInteger(message.deprecated_obfustucated_private_ip))
                    return "deprecated_obfustucated_private_ip: integer expected";
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                if (!$util.isInteger(message.cell_id))
                    return "cell_id: integer expected";
            if (message.last_session_id != null && message.hasOwnProperty("last_session_id"))
                if (!$util.isInteger(message.last_session_id))
                    return "last_session_id: integer expected";
            if (message.client_package_version != null && message.hasOwnProperty("client_package_version"))
                if (!$util.isInteger(message.client_package_version))
                    return "client_package_version: integer expected";
            if (message.client_language != null && message.hasOwnProperty("client_language"))
                if (!$util.isString(message.client_language))
                    return "client_language: string expected";
            if (message.client_os_type != null && message.hasOwnProperty("client_os_type"))
                if (!$util.isInteger(message.client_os_type))
                    return "client_os_type: integer expected";
            if (message.should_remember_password != null && message.hasOwnProperty("should_remember_password"))
                if (typeof message.should_remember_password !== "boolean")
                    return "should_remember_password: boolean expected";
            if (message.wine_version != null && message.hasOwnProperty("wine_version"))
                if (!$util.isString(message.wine_version))
                    return "wine_version: string expected";
            if (message.ping_ms_from_cell_search != null && message.hasOwnProperty("ping_ms_from_cell_search"))
                if (!$util.isInteger(message.ping_ms_from_cell_search))
                    return "ping_ms_from_cell_search: integer expected";
            if (message.obfuscated_private_ip != null && message.hasOwnProperty("obfuscated_private_ip")) {
                var error = $root.CMsgIPAddress.verify(message.obfuscated_private_ip);
                if (error)
                    return "obfuscated_private_ip." + error;
            }
            if (message.deprecated_public_ip != null && message.hasOwnProperty("deprecated_public_ip"))
                if (!$util.isInteger(message.deprecated_public_ip))
                    return "deprecated_public_ip: integer expected";
            if (message.qos_level != null && message.hasOwnProperty("qos_level"))
                if (!$util.isInteger(message.qos_level))
                    return "qos_level: integer expected";
            if (message.client_supplied_steam_id != null && message.hasOwnProperty("client_supplied_steam_id"))
                if (!$util.isInteger(message.client_supplied_steam_id) && !(message.client_supplied_steam_id && $util.isInteger(message.client_supplied_steam_id.low) && $util.isInteger(message.client_supplied_steam_id.high)))
                    return "client_supplied_steam_id: integer|Long expected";
            if (message.public_ip != null && message.hasOwnProperty("public_ip")) {
                var error = $root.CMsgIPAddress.verify(message.public_ip);
                if (error)
                    return "public_ip." + error;
            }
            if (message.machine_id != null && message.hasOwnProperty("machine_id"))
                if (!(message.machine_id && typeof message.machine_id.length === "number" || $util.isString(message.machine_id)))
                    return "machine_id: buffer expected";
            if (message.launcher_type != null && message.hasOwnProperty("launcher_type"))
                if (!$util.isInteger(message.launcher_type))
                    return "launcher_type: integer expected";
            if (message.ui_mode != null && message.hasOwnProperty("ui_mode"))
                if (!$util.isInteger(message.ui_mode))
                    return "ui_mode: integer expected";
            if (message.chat_mode != null && message.hasOwnProperty("chat_mode"))
                if (!$util.isInteger(message.chat_mode))
                    return "chat_mode: integer expected";
            if (message.steam2_auth_ticket != null && message.hasOwnProperty("steam2_auth_ticket"))
                if (!(message.steam2_auth_ticket && typeof message.steam2_auth_ticket.length === "number" || $util.isString(message.steam2_auth_ticket)))
                    return "steam2_auth_ticket: buffer expected";
            if (message.email_address != null && message.hasOwnProperty("email_address"))
                if (!$util.isString(message.email_address))
                    return "email_address: string expected";
            if (message.rtime32_account_creation != null && message.hasOwnProperty("rtime32_account_creation"))
                if (!$util.isInteger(message.rtime32_account_creation))
                    return "rtime32_account_creation: integer expected";
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                if (!$util.isString(message.account_name))
                    return "account_name: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.game_server_token != null && message.hasOwnProperty("game_server_token"))
                if (!$util.isString(message.game_server_token))
                    return "game_server_token: string expected";
            if (message.login_key != null && message.hasOwnProperty("login_key"))
                if (!$util.isString(message.login_key))
                    return "login_key: string expected";
            if (message.was_converted_deprecated_msg != null && message.hasOwnProperty("was_converted_deprecated_msg"))
                if (typeof message.was_converted_deprecated_msg !== "boolean")
                    return "was_converted_deprecated_msg: boolean expected";
            if (message.anon_user_target_account_name != null && message.hasOwnProperty("anon_user_target_account_name"))
                if (!$util.isString(message.anon_user_target_account_name))
                    return "anon_user_target_account_name: string expected";
            if (message.resolved_user_steam_id != null && message.hasOwnProperty("resolved_user_steam_id"))
                if (!$util.isInteger(message.resolved_user_steam_id) && !(message.resolved_user_steam_id && $util.isInteger(message.resolved_user_steam_id.low) && $util.isInteger(message.resolved_user_steam_id.high)))
                    return "resolved_user_steam_id: integer|Long expected";
            if (message.eresult_sentryfile != null && message.hasOwnProperty("eresult_sentryfile"))
                if (!$util.isInteger(message.eresult_sentryfile))
                    return "eresult_sentryfile: integer expected";
            if (message.sha_sentryfile != null && message.hasOwnProperty("sha_sentryfile"))
                if (!(message.sha_sentryfile && typeof message.sha_sentryfile.length === "number" || $util.isString(message.sha_sentryfile)))
                    return "sha_sentryfile: buffer expected";
            if (message.auth_code != null && message.hasOwnProperty("auth_code"))
                if (!$util.isString(message.auth_code))
                    return "auth_code: string expected";
            if (message.otp_type != null && message.hasOwnProperty("otp_type"))
                if (!$util.isInteger(message.otp_type))
                    return "otp_type: integer expected";
            if (message.otp_value != null && message.hasOwnProperty("otp_value"))
                if (!$util.isInteger(message.otp_value))
                    return "otp_value: integer expected";
            if (message.otp_identifier != null && message.hasOwnProperty("otp_identifier"))
                if (!$util.isString(message.otp_identifier))
                    return "otp_identifier: string expected";
            if (message.steam2_ticket_request != null && message.hasOwnProperty("steam2_ticket_request"))
                if (typeof message.steam2_ticket_request !== "boolean")
                    return "steam2_ticket_request: boolean expected";
            if (message.sony_psn_ticket != null && message.hasOwnProperty("sony_psn_ticket"))
                if (!(message.sony_psn_ticket && typeof message.sony_psn_ticket.length === "number" || $util.isString(message.sony_psn_ticket)))
                    return "sony_psn_ticket: buffer expected";
            if (message.sony_psn_service_id != null && message.hasOwnProperty("sony_psn_service_id"))
                if (!$util.isString(message.sony_psn_service_id))
                    return "sony_psn_service_id: string expected";
            if (message.create_new_psn_linked_account_if_needed != null && message.hasOwnProperty("create_new_psn_linked_account_if_needed"))
                if (typeof message.create_new_psn_linked_account_if_needed !== "boolean")
                    return "create_new_psn_linked_account_if_needed: boolean expected";
            if (message.sony_psn_name != null && message.hasOwnProperty("sony_psn_name"))
                if (!$util.isString(message.sony_psn_name))
                    return "sony_psn_name: string expected";
            if (message.game_server_app_id != null && message.hasOwnProperty("game_server_app_id"))
                if (!$util.isInteger(message.game_server_app_id))
                    return "game_server_app_id: integer expected";
            if (message.steamguard_dont_remember_computer != null && message.hasOwnProperty("steamguard_dont_remember_computer"))
                if (typeof message.steamguard_dont_remember_computer !== "boolean")
                    return "steamguard_dont_remember_computer: boolean expected";
            if (message.machine_name != null && message.hasOwnProperty("machine_name"))
                if (!$util.isString(message.machine_name))
                    return "machine_name: string expected";
            if (message.machine_name_userchosen != null && message.hasOwnProperty("machine_name_userchosen"))
                if (!$util.isString(message.machine_name_userchosen))
                    return "machine_name_userchosen: string expected";
            if (message.country_override != null && message.hasOwnProperty("country_override"))
                if (!$util.isString(message.country_override))
                    return "country_override: string expected";
            if (message.is_steam_box != null && message.hasOwnProperty("is_steam_box"))
                if (typeof message.is_steam_box !== "boolean")
                    return "is_steam_box: boolean expected";
            if (message.client_instance_id != null && message.hasOwnProperty("client_instance_id"))
                if (!$util.isInteger(message.client_instance_id) && !(message.client_instance_id && $util.isInteger(message.client_instance_id.low) && $util.isInteger(message.client_instance_id.high)))
                    return "client_instance_id: integer|Long expected";
            if (message.two_factor_code != null && message.hasOwnProperty("two_factor_code"))
                if (!$util.isString(message.two_factor_code))
                    return "two_factor_code: string expected";
            if (message.supports_rate_limit_response != null && message.hasOwnProperty("supports_rate_limit_response"))
                if (typeof message.supports_rate_limit_response !== "boolean")
                    return "supports_rate_limit_response: boolean expected";
            if (message.web_logon_nonce != null && message.hasOwnProperty("web_logon_nonce"))
                if (!$util.isString(message.web_logon_nonce))
                    return "web_logon_nonce: string expected";
            if (message.priority_reason != null && message.hasOwnProperty("priority_reason"))
                if (!$util.isInteger(message.priority_reason))
                    return "priority_reason: integer expected";
            if (message.embedded_client_secret != null && message.hasOwnProperty("embedded_client_secret")) {
                var error = $root.CMsgClientSecret.verify(message.embedded_client_secret);
                if (error)
                    return "embedded_client_secret." + error;
            }
            return null;
        };
    
        /**
         * Creates a CMsgClientLogon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientLogon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientLogon} CMsgClientLogon
         */
        CMsgClientLogon.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientLogon)
                return object;
            var message = new $root.CMsgClientLogon();
            if (object.protocol_version != null)
                message.protocol_version = object.protocol_version >>> 0;
            if (object.deprecated_obfustucated_private_ip != null)
                message.deprecated_obfustucated_private_ip = object.deprecated_obfustucated_private_ip >>> 0;
            if (object.cell_id != null)
                message.cell_id = object.cell_id >>> 0;
            if (object.last_session_id != null)
                message.last_session_id = object.last_session_id >>> 0;
            if (object.client_package_version != null)
                message.client_package_version = object.client_package_version >>> 0;
            if (object.client_language != null)
                message.client_language = String(object.client_language);
            if (object.client_os_type != null)
                message.client_os_type = object.client_os_type >>> 0;
            if (object.should_remember_password != null)
                message.should_remember_password = Boolean(object.should_remember_password);
            if (object.wine_version != null)
                message.wine_version = String(object.wine_version);
            if (object.ping_ms_from_cell_search != null)
                message.ping_ms_from_cell_search = object.ping_ms_from_cell_search >>> 0;
            if (object.obfuscated_private_ip != null) {
                if (typeof object.obfuscated_private_ip !== "object")
                    throw TypeError(".CMsgClientLogon.obfuscated_private_ip: object expected");
                message.obfuscated_private_ip = $root.CMsgIPAddress.fromObject(object.obfuscated_private_ip);
            }
            if (object.deprecated_public_ip != null)
                message.deprecated_public_ip = object.deprecated_public_ip >>> 0;
            if (object.qos_level != null)
                message.qos_level = object.qos_level >>> 0;
            if (object.client_supplied_steam_id != null)
                if ($util.Long)
                    (message.client_supplied_steam_id = $util.Long.fromValue(object.client_supplied_steam_id)).unsigned = false;
                else if (typeof object.client_supplied_steam_id === "string")
                    message.client_supplied_steam_id = parseInt(object.client_supplied_steam_id, 10);
                else if (typeof object.client_supplied_steam_id === "number")
                    message.client_supplied_steam_id = object.client_supplied_steam_id;
                else if (typeof object.client_supplied_steam_id === "object")
                    message.client_supplied_steam_id = new $util.LongBits(object.client_supplied_steam_id.low >>> 0, object.client_supplied_steam_id.high >>> 0).toNumber();
            if (object.public_ip != null) {
                if (typeof object.public_ip !== "object")
                    throw TypeError(".CMsgClientLogon.public_ip: object expected");
                message.public_ip = $root.CMsgIPAddress.fromObject(object.public_ip);
            }
            if (object.machine_id != null)
                if (typeof object.machine_id === "string")
                    $util.base64.decode(object.machine_id, message.machine_id = $util.newBuffer($util.base64.length(object.machine_id)), 0);
                else if (object.machine_id.length)
                    message.machine_id = object.machine_id;
            if (object.launcher_type != null)
                message.launcher_type = object.launcher_type >>> 0;
            if (object.ui_mode != null)
                message.ui_mode = object.ui_mode >>> 0;
            if (object.chat_mode != null)
                message.chat_mode = object.chat_mode >>> 0;
            if (object.steam2_auth_ticket != null)
                if (typeof object.steam2_auth_ticket === "string")
                    $util.base64.decode(object.steam2_auth_ticket, message.steam2_auth_ticket = $util.newBuffer($util.base64.length(object.steam2_auth_ticket)), 0);
                else if (object.steam2_auth_ticket.length)
                    message.steam2_auth_ticket = object.steam2_auth_ticket;
            if (object.email_address != null)
                message.email_address = String(object.email_address);
            if (object.rtime32_account_creation != null)
                message.rtime32_account_creation = object.rtime32_account_creation >>> 0;
            if (object.account_name != null)
                message.account_name = String(object.account_name);
            if (object.password != null)
                message.password = String(object.password);
            if (object.game_server_token != null)
                message.game_server_token = String(object.game_server_token);
            if (object.login_key != null)
                message.login_key = String(object.login_key);
            if (object.was_converted_deprecated_msg != null)
                message.was_converted_deprecated_msg = Boolean(object.was_converted_deprecated_msg);
            if (object.anon_user_target_account_name != null)
                message.anon_user_target_account_name = String(object.anon_user_target_account_name);
            if (object.resolved_user_steam_id != null)
                if ($util.Long)
                    (message.resolved_user_steam_id = $util.Long.fromValue(object.resolved_user_steam_id)).unsigned = false;
                else if (typeof object.resolved_user_steam_id === "string")
                    message.resolved_user_steam_id = parseInt(object.resolved_user_steam_id, 10);
                else if (typeof object.resolved_user_steam_id === "number")
                    message.resolved_user_steam_id = object.resolved_user_steam_id;
                else if (typeof object.resolved_user_steam_id === "object")
                    message.resolved_user_steam_id = new $util.LongBits(object.resolved_user_steam_id.low >>> 0, object.resolved_user_steam_id.high >>> 0).toNumber();
            if (object.eresult_sentryfile != null)
                message.eresult_sentryfile = object.eresult_sentryfile | 0;
            if (object.sha_sentryfile != null)
                if (typeof object.sha_sentryfile === "string")
                    $util.base64.decode(object.sha_sentryfile, message.sha_sentryfile = $util.newBuffer($util.base64.length(object.sha_sentryfile)), 0);
                else if (object.sha_sentryfile.length)
                    message.sha_sentryfile = object.sha_sentryfile;
            if (object.auth_code != null)
                message.auth_code = String(object.auth_code);
            if (object.otp_type != null)
                message.otp_type = object.otp_type | 0;
            if (object.otp_value != null)
                message.otp_value = object.otp_value >>> 0;
            if (object.otp_identifier != null)
                message.otp_identifier = String(object.otp_identifier);
            if (object.steam2_ticket_request != null)
                message.steam2_ticket_request = Boolean(object.steam2_ticket_request);
            if (object.sony_psn_ticket != null)
                if (typeof object.sony_psn_ticket === "string")
                    $util.base64.decode(object.sony_psn_ticket, message.sony_psn_ticket = $util.newBuffer($util.base64.length(object.sony_psn_ticket)), 0);
                else if (object.sony_psn_ticket.length)
                    message.sony_psn_ticket = object.sony_psn_ticket;
            if (object.sony_psn_service_id != null)
                message.sony_psn_service_id = String(object.sony_psn_service_id);
            if (object.create_new_psn_linked_account_if_needed != null)
                message.create_new_psn_linked_account_if_needed = Boolean(object.create_new_psn_linked_account_if_needed);
            if (object.sony_psn_name != null)
                message.sony_psn_name = String(object.sony_psn_name);
            if (object.game_server_app_id != null)
                message.game_server_app_id = object.game_server_app_id | 0;
            if (object.steamguard_dont_remember_computer != null)
                message.steamguard_dont_remember_computer = Boolean(object.steamguard_dont_remember_computer);
            if (object.machine_name != null)
                message.machine_name = String(object.machine_name);
            if (object.machine_name_userchosen != null)
                message.machine_name_userchosen = String(object.machine_name_userchosen);
            if (object.country_override != null)
                message.country_override = String(object.country_override);
            if (object.is_steam_box != null)
                message.is_steam_box = Boolean(object.is_steam_box);
            if (object.client_instance_id != null)
                if ($util.Long)
                    (message.client_instance_id = $util.Long.fromValue(object.client_instance_id)).unsigned = true;
                else if (typeof object.client_instance_id === "string")
                    message.client_instance_id = parseInt(object.client_instance_id, 10);
                else if (typeof object.client_instance_id === "number")
                    message.client_instance_id = object.client_instance_id;
                else if (typeof object.client_instance_id === "object")
                    message.client_instance_id = new $util.LongBits(object.client_instance_id.low >>> 0, object.client_instance_id.high >>> 0).toNumber(true);
            if (object.two_factor_code != null)
                message.two_factor_code = String(object.two_factor_code);
            if (object.supports_rate_limit_response != null)
                message.supports_rate_limit_response = Boolean(object.supports_rate_limit_response);
            if (object.web_logon_nonce != null)
                message.web_logon_nonce = String(object.web_logon_nonce);
            if (object.priority_reason != null)
                message.priority_reason = object.priority_reason | 0;
            if (object.embedded_client_secret != null) {
                if (typeof object.embedded_client_secret !== "object")
                    throw TypeError(".CMsgClientLogon.embedded_client_secret: object expected");
                message.embedded_client_secret = $root.CMsgClientSecret.fromObject(object.embedded_client_secret);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientLogon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientLogon
         * @static
         * @param {CMsgClientLogon} message CMsgClientLogon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientLogon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.protocol_version = 0;
                object.deprecated_obfustucated_private_ip = 0;
                object.cell_id = 0;
                object.last_session_id = 0;
                object.client_package_version = 0;
                object.client_language = "";
                object.client_os_type = 0;
                object.should_remember_password = false;
                object.wine_version = "";
                object.ping_ms_from_cell_search = 0;
                object.obfuscated_private_ip = null;
                object.deprecated_public_ip = 0;
                object.qos_level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.client_supplied_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_supplied_steam_id = options.longs === String ? "0" : 0;
                object.public_ip = null;
                if (options.bytes === String)
                    object.machine_id = "";
                else {
                    object.machine_id = [];
                    if (options.bytes !== Array)
                        object.machine_id = $util.newBuffer(object.machine_id);
                }
                object.launcher_type = 0;
                object.ui_mode = 0;
                object.chat_mode = 0;
                if (options.bytes === String)
                    object.steam2_auth_ticket = "";
                else {
                    object.steam2_auth_ticket = [];
                    if (options.bytes !== Array)
                        object.steam2_auth_ticket = $util.newBuffer(object.steam2_auth_ticket);
                }
                object.email_address = "";
                object.rtime32_account_creation = 0;
                object.account_name = "";
                object.password = "";
                object.game_server_token = "";
                object.login_key = "";
                object.was_converted_deprecated_msg = false;
                object.anon_user_target_account_name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.resolved_user_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.resolved_user_steam_id = options.longs === String ? "0" : 0;
                object.eresult_sentryfile = 0;
                if (options.bytes === String)
                    object.sha_sentryfile = "";
                else {
                    object.sha_sentryfile = [];
                    if (options.bytes !== Array)
                        object.sha_sentryfile = $util.newBuffer(object.sha_sentryfile);
                }
                object.auth_code = "";
                object.otp_type = 0;
                object.otp_value = 0;
                object.otp_identifier = "";
                object.steam2_ticket_request = false;
                if (options.bytes === String)
                    object.sony_psn_ticket = "";
                else {
                    object.sony_psn_ticket = [];
                    if (options.bytes !== Array)
                        object.sony_psn_ticket = $util.newBuffer(object.sony_psn_ticket);
                }
                object.sony_psn_service_id = "";
                object.create_new_psn_linked_account_if_needed = false;
                object.sony_psn_name = "";
                object.game_server_app_id = 0;
                object.steamguard_dont_remember_computer = false;
                object.machine_name = "";
                object.machine_name_userchosen = "";
                object.country_override = "";
                object.is_steam_box = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_instance_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_instance_id = options.longs === String ? "0" : 0;
                object.two_factor_code = "";
                object.supports_rate_limit_response = false;
                object.web_logon_nonce = "";
                object.priority_reason = 0;
                object.embedded_client_secret = null;
            }
            if (message.protocol_version != null && message.hasOwnProperty("protocol_version"))
                object.protocol_version = message.protocol_version;
            if (message.deprecated_obfustucated_private_ip != null && message.hasOwnProperty("deprecated_obfustucated_private_ip"))
                object.deprecated_obfustucated_private_ip = message.deprecated_obfustucated_private_ip;
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                object.cell_id = message.cell_id;
            if (message.last_session_id != null && message.hasOwnProperty("last_session_id"))
                object.last_session_id = message.last_session_id;
            if (message.client_package_version != null && message.hasOwnProperty("client_package_version"))
                object.client_package_version = message.client_package_version;
            if (message.client_language != null && message.hasOwnProperty("client_language"))
                object.client_language = message.client_language;
            if (message.client_os_type != null && message.hasOwnProperty("client_os_type"))
                object.client_os_type = message.client_os_type;
            if (message.should_remember_password != null && message.hasOwnProperty("should_remember_password"))
                object.should_remember_password = message.should_remember_password;
            if (message.wine_version != null && message.hasOwnProperty("wine_version"))
                object.wine_version = message.wine_version;
            if (message.ping_ms_from_cell_search != null && message.hasOwnProperty("ping_ms_from_cell_search"))
                object.ping_ms_from_cell_search = message.ping_ms_from_cell_search;
            if (message.obfuscated_private_ip != null && message.hasOwnProperty("obfuscated_private_ip"))
                object.obfuscated_private_ip = $root.CMsgIPAddress.toObject(message.obfuscated_private_ip, options);
            if (message.deprecated_public_ip != null && message.hasOwnProperty("deprecated_public_ip"))
                object.deprecated_public_ip = message.deprecated_public_ip;
            if (message.qos_level != null && message.hasOwnProperty("qos_level"))
                object.qos_level = message.qos_level;
            if (message.client_supplied_steam_id != null && message.hasOwnProperty("client_supplied_steam_id"))
                if (typeof message.client_supplied_steam_id === "number")
                    object.client_supplied_steam_id = options.longs === String ? String(message.client_supplied_steam_id) : message.client_supplied_steam_id;
                else
                    object.client_supplied_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_supplied_steam_id) : options.longs === Number ? new $util.LongBits(message.client_supplied_steam_id.low >>> 0, message.client_supplied_steam_id.high >>> 0).toNumber() : message.client_supplied_steam_id;
            if (message.public_ip != null && message.hasOwnProperty("public_ip"))
                object.public_ip = $root.CMsgIPAddress.toObject(message.public_ip, options);
            if (message.machine_id != null && message.hasOwnProperty("machine_id"))
                object.machine_id = options.bytes === String ? $util.base64.encode(message.machine_id, 0, message.machine_id.length) : options.bytes === Array ? Array.prototype.slice.call(message.machine_id) : message.machine_id;
            if (message.launcher_type != null && message.hasOwnProperty("launcher_type"))
                object.launcher_type = message.launcher_type;
            if (message.ui_mode != null && message.hasOwnProperty("ui_mode"))
                object.ui_mode = message.ui_mode;
            if (message.chat_mode != null && message.hasOwnProperty("chat_mode"))
                object.chat_mode = message.chat_mode;
            if (message.steam2_auth_ticket != null && message.hasOwnProperty("steam2_auth_ticket"))
                object.steam2_auth_ticket = options.bytes === String ? $util.base64.encode(message.steam2_auth_ticket, 0, message.steam2_auth_ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.steam2_auth_ticket) : message.steam2_auth_ticket;
            if (message.email_address != null && message.hasOwnProperty("email_address"))
                object.email_address = message.email_address;
            if (message.rtime32_account_creation != null && message.hasOwnProperty("rtime32_account_creation"))
                object.rtime32_account_creation = message.rtime32_account_creation;
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                object.account_name = message.account_name;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.game_server_token != null && message.hasOwnProperty("game_server_token"))
                object.game_server_token = message.game_server_token;
            if (message.login_key != null && message.hasOwnProperty("login_key"))
                object.login_key = message.login_key;
            if (message.was_converted_deprecated_msg != null && message.hasOwnProperty("was_converted_deprecated_msg"))
                object.was_converted_deprecated_msg = message.was_converted_deprecated_msg;
            if (message.anon_user_target_account_name != null && message.hasOwnProperty("anon_user_target_account_name"))
                object.anon_user_target_account_name = message.anon_user_target_account_name;
            if (message.resolved_user_steam_id != null && message.hasOwnProperty("resolved_user_steam_id"))
                if (typeof message.resolved_user_steam_id === "number")
                    object.resolved_user_steam_id = options.longs === String ? String(message.resolved_user_steam_id) : message.resolved_user_steam_id;
                else
                    object.resolved_user_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.resolved_user_steam_id) : options.longs === Number ? new $util.LongBits(message.resolved_user_steam_id.low >>> 0, message.resolved_user_steam_id.high >>> 0).toNumber() : message.resolved_user_steam_id;
            if (message.eresult_sentryfile != null && message.hasOwnProperty("eresult_sentryfile"))
                object.eresult_sentryfile = message.eresult_sentryfile;
            if (message.sha_sentryfile != null && message.hasOwnProperty("sha_sentryfile"))
                object.sha_sentryfile = options.bytes === String ? $util.base64.encode(message.sha_sentryfile, 0, message.sha_sentryfile.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha_sentryfile) : message.sha_sentryfile;
            if (message.auth_code != null && message.hasOwnProperty("auth_code"))
                object.auth_code = message.auth_code;
            if (message.otp_type != null && message.hasOwnProperty("otp_type"))
                object.otp_type = message.otp_type;
            if (message.otp_value != null && message.hasOwnProperty("otp_value"))
                object.otp_value = message.otp_value;
            if (message.otp_identifier != null && message.hasOwnProperty("otp_identifier"))
                object.otp_identifier = message.otp_identifier;
            if (message.steam2_ticket_request != null && message.hasOwnProperty("steam2_ticket_request"))
                object.steam2_ticket_request = message.steam2_ticket_request;
            if (message.sony_psn_ticket != null && message.hasOwnProperty("sony_psn_ticket"))
                object.sony_psn_ticket = options.bytes === String ? $util.base64.encode(message.sony_psn_ticket, 0, message.sony_psn_ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.sony_psn_ticket) : message.sony_psn_ticket;
            if (message.sony_psn_service_id != null && message.hasOwnProperty("sony_psn_service_id"))
                object.sony_psn_service_id = message.sony_psn_service_id;
            if (message.create_new_psn_linked_account_if_needed != null && message.hasOwnProperty("create_new_psn_linked_account_if_needed"))
                object.create_new_psn_linked_account_if_needed = message.create_new_psn_linked_account_if_needed;
            if (message.sony_psn_name != null && message.hasOwnProperty("sony_psn_name"))
                object.sony_psn_name = message.sony_psn_name;
            if (message.game_server_app_id != null && message.hasOwnProperty("game_server_app_id"))
                object.game_server_app_id = message.game_server_app_id;
            if (message.steamguard_dont_remember_computer != null && message.hasOwnProperty("steamguard_dont_remember_computer"))
                object.steamguard_dont_remember_computer = message.steamguard_dont_remember_computer;
            if (message.machine_name != null && message.hasOwnProperty("machine_name"))
                object.machine_name = message.machine_name;
            if (message.machine_name_userchosen != null && message.hasOwnProperty("machine_name_userchosen"))
                object.machine_name_userchosen = message.machine_name_userchosen;
            if (message.country_override != null && message.hasOwnProperty("country_override"))
                object.country_override = message.country_override;
            if (message.is_steam_box != null && message.hasOwnProperty("is_steam_box"))
                object.is_steam_box = message.is_steam_box;
            if (message.client_instance_id != null && message.hasOwnProperty("client_instance_id"))
                if (typeof message.client_instance_id === "number")
                    object.client_instance_id = options.longs === String ? String(message.client_instance_id) : message.client_instance_id;
                else
                    object.client_instance_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_instance_id) : options.longs === Number ? new $util.LongBits(message.client_instance_id.low >>> 0, message.client_instance_id.high >>> 0).toNumber(true) : message.client_instance_id;
            if (message.two_factor_code != null && message.hasOwnProperty("two_factor_code"))
                object.two_factor_code = message.two_factor_code;
            if (message.supports_rate_limit_response != null && message.hasOwnProperty("supports_rate_limit_response"))
                object.supports_rate_limit_response = message.supports_rate_limit_response;
            if (message.web_logon_nonce != null && message.hasOwnProperty("web_logon_nonce"))
                object.web_logon_nonce = message.web_logon_nonce;
            if (message.priority_reason != null && message.hasOwnProperty("priority_reason"))
                object.priority_reason = message.priority_reason;
            if (message.embedded_client_secret != null && message.hasOwnProperty("embedded_client_secret"))
                object.embedded_client_secret = $root.CMsgClientSecret.toObject(message.embedded_client_secret, options);
            return object;
        };
    
        /**
         * Converts this CMsgClientLogon to JSON.
         * @function toJSON
         * @memberof CMsgClientLogon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientLogon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientLogon;
    })();
    
    $root.CMsgClientLogonResponse = (function() {
    
        /**
         * Properties of a CMsgClientLogonResponse.
         * @exports ICMsgClientLogonResponse
         * @interface ICMsgClientLogonResponse
         * @property {number|null} [eresult] CMsgClientLogonResponse eresult
         * @property {number|null} [out_of_game_heartbeat_seconds] CMsgClientLogonResponse out_of_game_heartbeat_seconds
         * @property {number|null} [in_game_heartbeat_seconds] CMsgClientLogonResponse in_game_heartbeat_seconds
         * @property {number|null} [deprecated_public_ip] CMsgClientLogonResponse deprecated_public_ip
         * @property {number|null} [rtime32_server_time] CMsgClientLogonResponse rtime32_server_time
         * @property {number|null} [account_flags] CMsgClientLogonResponse account_flags
         * @property {number|null} [cell_id] CMsgClientLogonResponse cell_id
         * @property {string|null} [email_domain] CMsgClientLogonResponse email_domain
         * @property {Uint8Array|null} [steam2_ticket] CMsgClientLogonResponse steam2_ticket
         * @property {number|null} [eresult_extended] CMsgClientLogonResponse eresult_extended
         * @property {string|null} [webapi_authenticate_user_nonce] CMsgClientLogonResponse webapi_authenticate_user_nonce
         * @property {number|null} [cell_id_ping_threshold] CMsgClientLogonResponse cell_id_ping_threshold
         * @property {boolean|null} [use_pics] CMsgClientLogonResponse use_pics
         * @property {string|null} [vanity_url] CMsgClientLogonResponse vanity_url
         * @property {ICMsgIPAddress|null} [public_ip] CMsgClientLogonResponse public_ip
         * @property {number|Long|null} [client_supplied_steamid] CMsgClientLogonResponse client_supplied_steamid
         * @property {string|null} [ip_country_code] CMsgClientLogonResponse ip_country_code
         * @property {Uint8Array|null} [parental_settings] CMsgClientLogonResponse parental_settings
         * @property {Uint8Array|null} [parental_setting_signature] CMsgClientLogonResponse parental_setting_signature
         * @property {number|null} [count_loginfailures_to_migrate] CMsgClientLogonResponse count_loginfailures_to_migrate
         * @property {number|null} [count_disconnects_to_migrate] CMsgClientLogonResponse count_disconnects_to_migrate
         * @property {number|null} [ogs_data_report_time_window] CMsgClientLogonResponse ogs_data_report_time_window
         * @property {number|Long|null} [client_instance_id] CMsgClientLogonResponse client_instance_id
         * @property {boolean|null} [force_client_update_check] CMsgClientLogonResponse force_client_update_check
         */
    
        /**
         * Constructs a new CMsgClientLogonResponse.
         * @exports CMsgClientLogonResponse
         * @classdesc Represents a CMsgClientLogonResponse.
         * @implements ICMsgClientLogonResponse
         * @constructor
         * @param {ICMsgClientLogonResponse=} [properties] Properties to set
         */
        function CMsgClientLogonResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientLogonResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.eresult = 2;
    
        /**
         * CMsgClientLogonResponse out_of_game_heartbeat_seconds.
         * @member {number} out_of_game_heartbeat_seconds
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.out_of_game_heartbeat_seconds = 0;
    
        /**
         * CMsgClientLogonResponse in_game_heartbeat_seconds.
         * @member {number} in_game_heartbeat_seconds
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.in_game_heartbeat_seconds = 0;
    
        /**
         * CMsgClientLogonResponse deprecated_public_ip.
         * @member {number} deprecated_public_ip
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.deprecated_public_ip = 0;
    
        /**
         * CMsgClientLogonResponse rtime32_server_time.
         * @member {number} rtime32_server_time
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.rtime32_server_time = 0;
    
        /**
         * CMsgClientLogonResponse account_flags.
         * @member {number} account_flags
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.account_flags = 0;
    
        /**
         * CMsgClientLogonResponse cell_id.
         * @member {number} cell_id
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.cell_id = 0;
    
        /**
         * CMsgClientLogonResponse email_domain.
         * @member {string} email_domain
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.email_domain = "";
    
        /**
         * CMsgClientLogonResponse steam2_ticket.
         * @member {Uint8Array} steam2_ticket
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.steam2_ticket = $util.newBuffer([]);
    
        /**
         * CMsgClientLogonResponse eresult_extended.
         * @member {number} eresult_extended
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.eresult_extended = 0;
    
        /**
         * CMsgClientLogonResponse webapi_authenticate_user_nonce.
         * @member {string} webapi_authenticate_user_nonce
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.webapi_authenticate_user_nonce = "";
    
        /**
         * CMsgClientLogonResponse cell_id_ping_threshold.
         * @member {number} cell_id_ping_threshold
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.cell_id_ping_threshold = 0;
    
        /**
         * CMsgClientLogonResponse use_pics.
         * @member {boolean} use_pics
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.use_pics = false;
    
        /**
         * CMsgClientLogonResponse vanity_url.
         * @member {string} vanity_url
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.vanity_url = "";
    
        /**
         * CMsgClientLogonResponse public_ip.
         * @member {ICMsgIPAddress|null|undefined} public_ip
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.public_ip = null;
    
        /**
         * CMsgClientLogonResponse client_supplied_steamid.
         * @member {number|Long} client_supplied_steamid
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.client_supplied_steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgClientLogonResponse ip_country_code.
         * @member {string} ip_country_code
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.ip_country_code = "";
    
        /**
         * CMsgClientLogonResponse parental_settings.
         * @member {Uint8Array} parental_settings
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.parental_settings = $util.newBuffer([]);
    
        /**
         * CMsgClientLogonResponse parental_setting_signature.
         * @member {Uint8Array} parental_setting_signature
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.parental_setting_signature = $util.newBuffer([]);
    
        /**
         * CMsgClientLogonResponse count_loginfailures_to_migrate.
         * @member {number} count_loginfailures_to_migrate
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.count_loginfailures_to_migrate = 0;
    
        /**
         * CMsgClientLogonResponse count_disconnects_to_migrate.
         * @member {number} count_disconnects_to_migrate
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.count_disconnects_to_migrate = 0;
    
        /**
         * CMsgClientLogonResponse ogs_data_report_time_window.
         * @member {number} ogs_data_report_time_window
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.ogs_data_report_time_window = 0;
    
        /**
         * CMsgClientLogonResponse client_instance_id.
         * @member {number|Long} client_instance_id
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.client_instance_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgClientLogonResponse force_client_update_check.
         * @member {boolean} force_client_update_check
         * @memberof CMsgClientLogonResponse
         * @instance
         */
        CMsgClientLogonResponse.prototype.force_client_update_check = false;
    
        /**
         * Creates a new CMsgClientLogonResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientLogonResponse
         * @static
         * @param {ICMsgClientLogonResponse=} [properties] Properties to set
         * @returns {CMsgClientLogonResponse} CMsgClientLogonResponse instance
         */
        CMsgClientLogonResponse.create = function create(properties) {
            return new CMsgClientLogonResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientLogonResponse message. Does not implicitly {@link CMsgClientLogonResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientLogonResponse
         * @static
         * @param {ICMsgClientLogonResponse} message CMsgClientLogonResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientLogonResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eresult);
            if (message.out_of_game_heartbeat_seconds != null && message.hasOwnProperty("out_of_game_heartbeat_seconds"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.out_of_game_heartbeat_seconds);
            if (message.in_game_heartbeat_seconds != null && message.hasOwnProperty("in_game_heartbeat_seconds"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.in_game_heartbeat_seconds);
            if (message.deprecated_public_ip != null && message.hasOwnProperty("deprecated_public_ip"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.deprecated_public_ip);
            if (message.rtime32_server_time != null && message.hasOwnProperty("rtime32_server_time"))
                writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.rtime32_server_time);
            if (message.account_flags != null && message.hasOwnProperty("account_flags"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.account_flags);
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.cell_id);
            if (message.email_domain != null && message.hasOwnProperty("email_domain"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.email_domain);
            if (message.steam2_ticket != null && message.hasOwnProperty("steam2_ticket"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.steam2_ticket);
            if (message.eresult_extended != null && message.hasOwnProperty("eresult_extended"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.eresult_extended);
            if (message.webapi_authenticate_user_nonce != null && message.hasOwnProperty("webapi_authenticate_user_nonce"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.webapi_authenticate_user_nonce);
            if (message.cell_id_ping_threshold != null && message.hasOwnProperty("cell_id_ping_threshold"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.cell_id_ping_threshold);
            if (message.use_pics != null && message.hasOwnProperty("use_pics"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.use_pics);
            if (message.vanity_url != null && message.hasOwnProperty("vanity_url"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.vanity_url);
            if (message.public_ip != null && message.hasOwnProperty("public_ip"))
                $root.CMsgIPAddress.encode(message.public_ip, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.client_supplied_steamid != null && message.hasOwnProperty("client_supplied_steamid"))
                writer.uint32(/* id 20, wireType 1 =*/161).fixed64(message.client_supplied_steamid);
            if (message.ip_country_code != null && message.hasOwnProperty("ip_country_code"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.ip_country_code);
            if (message.parental_settings != null && message.hasOwnProperty("parental_settings"))
                writer.uint32(/* id 22, wireType 2 =*/178).bytes(message.parental_settings);
            if (message.parental_setting_signature != null && message.hasOwnProperty("parental_setting_signature"))
                writer.uint32(/* id 23, wireType 2 =*/186).bytes(message.parental_setting_signature);
            if (message.count_loginfailures_to_migrate != null && message.hasOwnProperty("count_loginfailures_to_migrate"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.count_loginfailures_to_migrate);
            if (message.count_disconnects_to_migrate != null && message.hasOwnProperty("count_disconnects_to_migrate"))
                writer.uint32(/* id 25, wireType 0 =*/200).int32(message.count_disconnects_to_migrate);
            if (message.ogs_data_report_time_window != null && message.hasOwnProperty("ogs_data_report_time_window"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.ogs_data_report_time_window);
            if (message.client_instance_id != null && message.hasOwnProperty("client_instance_id"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint64(message.client_instance_id);
            if (message.force_client_update_check != null && message.hasOwnProperty("force_client_update_check"))
                writer.uint32(/* id 28, wireType 0 =*/224).bool(message.force_client_update_check);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientLogonResponse message, length delimited. Does not implicitly {@link CMsgClientLogonResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientLogonResponse
         * @static
         * @param {ICMsgClientLogonResponse} message CMsgClientLogonResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientLogonResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientLogonResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientLogonResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientLogonResponse} CMsgClientLogonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientLogonResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientLogonResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
                    break;
                case 2:
                    message.out_of_game_heartbeat_seconds = reader.int32();
                    break;
                case 3:
                    message.in_game_heartbeat_seconds = reader.int32();
                    break;
                case 4:
                    message.deprecated_public_ip = reader.uint32();
                    break;
                case 5:
                    message.rtime32_server_time = reader.fixed32();
                    break;
                case 6:
                    message.account_flags = reader.uint32();
                    break;
                case 7:
                    message.cell_id = reader.uint32();
                    break;
                case 8:
                    message.email_domain = reader.string();
                    break;
                case 9:
                    message.steam2_ticket = reader.bytes();
                    break;
                case 10:
                    message.eresult_extended = reader.int32();
                    break;
                case 11:
                    message.webapi_authenticate_user_nonce = reader.string();
                    break;
                case 12:
                    message.cell_id_ping_threshold = reader.uint32();
                    break;
                case 13:
                    message.use_pics = reader.bool();
                    break;
                case 14:
                    message.vanity_url = reader.string();
                    break;
                case 15:
                    message.public_ip = $root.CMsgIPAddress.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.client_supplied_steamid = reader.fixed64();
                    break;
                case 21:
                    message.ip_country_code = reader.string();
                    break;
                case 22:
                    message.parental_settings = reader.bytes();
                    break;
                case 23:
                    message.parental_setting_signature = reader.bytes();
                    break;
                case 24:
                    message.count_loginfailures_to_migrate = reader.int32();
                    break;
                case 25:
                    message.count_disconnects_to_migrate = reader.int32();
                    break;
                case 26:
                    message.ogs_data_report_time_window = reader.int32();
                    break;
                case 27:
                    message.client_instance_id = reader.uint64();
                    break;
                case 28:
                    message.force_client_update_check = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientLogonResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientLogonResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientLogonResponse} CMsgClientLogonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientLogonResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientLogonResponse message.
         * @function verify
         * @memberof CMsgClientLogonResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientLogonResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.out_of_game_heartbeat_seconds != null && message.hasOwnProperty("out_of_game_heartbeat_seconds"))
                if (!$util.isInteger(message.out_of_game_heartbeat_seconds))
                    return "out_of_game_heartbeat_seconds: integer expected";
            if (message.in_game_heartbeat_seconds != null && message.hasOwnProperty("in_game_heartbeat_seconds"))
                if (!$util.isInteger(message.in_game_heartbeat_seconds))
                    return "in_game_heartbeat_seconds: integer expected";
            if (message.deprecated_public_ip != null && message.hasOwnProperty("deprecated_public_ip"))
                if (!$util.isInteger(message.deprecated_public_ip))
                    return "deprecated_public_ip: integer expected";
            if (message.rtime32_server_time != null && message.hasOwnProperty("rtime32_server_time"))
                if (!$util.isInteger(message.rtime32_server_time))
                    return "rtime32_server_time: integer expected";
            if (message.account_flags != null && message.hasOwnProperty("account_flags"))
                if (!$util.isInteger(message.account_flags))
                    return "account_flags: integer expected";
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                if (!$util.isInteger(message.cell_id))
                    return "cell_id: integer expected";
            if (message.email_domain != null && message.hasOwnProperty("email_domain"))
                if (!$util.isString(message.email_domain))
                    return "email_domain: string expected";
            if (message.steam2_ticket != null && message.hasOwnProperty("steam2_ticket"))
                if (!(message.steam2_ticket && typeof message.steam2_ticket.length === "number" || $util.isString(message.steam2_ticket)))
                    return "steam2_ticket: buffer expected";
            if (message.eresult_extended != null && message.hasOwnProperty("eresult_extended"))
                if (!$util.isInteger(message.eresult_extended))
                    return "eresult_extended: integer expected";
            if (message.webapi_authenticate_user_nonce != null && message.hasOwnProperty("webapi_authenticate_user_nonce"))
                if (!$util.isString(message.webapi_authenticate_user_nonce))
                    return "webapi_authenticate_user_nonce: string expected";
            if (message.cell_id_ping_threshold != null && message.hasOwnProperty("cell_id_ping_threshold"))
                if (!$util.isInteger(message.cell_id_ping_threshold))
                    return "cell_id_ping_threshold: integer expected";
            if (message.use_pics != null && message.hasOwnProperty("use_pics"))
                if (typeof message.use_pics !== "boolean")
                    return "use_pics: boolean expected";
            if (message.vanity_url != null && message.hasOwnProperty("vanity_url"))
                if (!$util.isString(message.vanity_url))
                    return "vanity_url: string expected";
            if (message.public_ip != null && message.hasOwnProperty("public_ip")) {
                var error = $root.CMsgIPAddress.verify(message.public_ip);
                if (error)
                    return "public_ip." + error;
            }
            if (message.client_supplied_steamid != null && message.hasOwnProperty("client_supplied_steamid"))
                if (!$util.isInteger(message.client_supplied_steamid) && !(message.client_supplied_steamid && $util.isInteger(message.client_supplied_steamid.low) && $util.isInteger(message.client_supplied_steamid.high)))
                    return "client_supplied_steamid: integer|Long expected";
            if (message.ip_country_code != null && message.hasOwnProperty("ip_country_code"))
                if (!$util.isString(message.ip_country_code))
                    return "ip_country_code: string expected";
            if (message.parental_settings != null && message.hasOwnProperty("parental_settings"))
                if (!(message.parental_settings && typeof message.parental_settings.length === "number" || $util.isString(message.parental_settings)))
                    return "parental_settings: buffer expected";
            if (message.parental_setting_signature != null && message.hasOwnProperty("parental_setting_signature"))
                if (!(message.parental_setting_signature && typeof message.parental_setting_signature.length === "number" || $util.isString(message.parental_setting_signature)))
                    return "parental_setting_signature: buffer expected";
            if (message.count_loginfailures_to_migrate != null && message.hasOwnProperty("count_loginfailures_to_migrate"))
                if (!$util.isInteger(message.count_loginfailures_to_migrate))
                    return "count_loginfailures_to_migrate: integer expected";
            if (message.count_disconnects_to_migrate != null && message.hasOwnProperty("count_disconnects_to_migrate"))
                if (!$util.isInteger(message.count_disconnects_to_migrate))
                    return "count_disconnects_to_migrate: integer expected";
            if (message.ogs_data_report_time_window != null && message.hasOwnProperty("ogs_data_report_time_window"))
                if (!$util.isInteger(message.ogs_data_report_time_window))
                    return "ogs_data_report_time_window: integer expected";
            if (message.client_instance_id != null && message.hasOwnProperty("client_instance_id"))
                if (!$util.isInteger(message.client_instance_id) && !(message.client_instance_id && $util.isInteger(message.client_instance_id.low) && $util.isInteger(message.client_instance_id.high)))
                    return "client_instance_id: integer|Long expected";
            if (message.force_client_update_check != null && message.hasOwnProperty("force_client_update_check"))
                if (typeof message.force_client_update_check !== "boolean")
                    return "force_client_update_check: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientLogonResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientLogonResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientLogonResponse} CMsgClientLogonResponse
         */
        CMsgClientLogonResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientLogonResponse)
                return object;
            var message = new $root.CMsgClientLogonResponse();
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            if (object.out_of_game_heartbeat_seconds != null)
                message.out_of_game_heartbeat_seconds = object.out_of_game_heartbeat_seconds | 0;
            if (object.in_game_heartbeat_seconds != null)
                message.in_game_heartbeat_seconds = object.in_game_heartbeat_seconds | 0;
            if (object.deprecated_public_ip != null)
                message.deprecated_public_ip = object.deprecated_public_ip >>> 0;
            if (object.rtime32_server_time != null)
                message.rtime32_server_time = object.rtime32_server_time >>> 0;
            if (object.account_flags != null)
                message.account_flags = object.account_flags >>> 0;
            if (object.cell_id != null)
                message.cell_id = object.cell_id >>> 0;
            if (object.email_domain != null)
                message.email_domain = String(object.email_domain);
            if (object.steam2_ticket != null)
                if (typeof object.steam2_ticket === "string")
                    $util.base64.decode(object.steam2_ticket, message.steam2_ticket = $util.newBuffer($util.base64.length(object.steam2_ticket)), 0);
                else if (object.steam2_ticket.length)
                    message.steam2_ticket = object.steam2_ticket;
            if (object.eresult_extended != null)
                message.eresult_extended = object.eresult_extended | 0;
            if (object.webapi_authenticate_user_nonce != null)
                message.webapi_authenticate_user_nonce = String(object.webapi_authenticate_user_nonce);
            if (object.cell_id_ping_threshold != null)
                message.cell_id_ping_threshold = object.cell_id_ping_threshold >>> 0;
            if (object.use_pics != null)
                message.use_pics = Boolean(object.use_pics);
            if (object.vanity_url != null)
                message.vanity_url = String(object.vanity_url);
            if (object.public_ip != null) {
                if (typeof object.public_ip !== "object")
                    throw TypeError(".CMsgClientLogonResponse.public_ip: object expected");
                message.public_ip = $root.CMsgIPAddress.fromObject(object.public_ip);
            }
            if (object.client_supplied_steamid != null)
                if ($util.Long)
                    (message.client_supplied_steamid = $util.Long.fromValue(object.client_supplied_steamid)).unsigned = false;
                else if (typeof object.client_supplied_steamid === "string")
                    message.client_supplied_steamid = parseInt(object.client_supplied_steamid, 10);
                else if (typeof object.client_supplied_steamid === "number")
                    message.client_supplied_steamid = object.client_supplied_steamid;
                else if (typeof object.client_supplied_steamid === "object")
                    message.client_supplied_steamid = new $util.LongBits(object.client_supplied_steamid.low >>> 0, object.client_supplied_steamid.high >>> 0).toNumber();
            if (object.ip_country_code != null)
                message.ip_country_code = String(object.ip_country_code);
            if (object.parental_settings != null)
                if (typeof object.parental_settings === "string")
                    $util.base64.decode(object.parental_settings, message.parental_settings = $util.newBuffer($util.base64.length(object.parental_settings)), 0);
                else if (object.parental_settings.length)
                    message.parental_settings = object.parental_settings;
            if (object.parental_setting_signature != null)
                if (typeof object.parental_setting_signature === "string")
                    $util.base64.decode(object.parental_setting_signature, message.parental_setting_signature = $util.newBuffer($util.base64.length(object.parental_setting_signature)), 0);
                else if (object.parental_setting_signature.length)
                    message.parental_setting_signature = object.parental_setting_signature;
            if (object.count_loginfailures_to_migrate != null)
                message.count_loginfailures_to_migrate = object.count_loginfailures_to_migrate | 0;
            if (object.count_disconnects_to_migrate != null)
                message.count_disconnects_to_migrate = object.count_disconnects_to_migrate | 0;
            if (object.ogs_data_report_time_window != null)
                message.ogs_data_report_time_window = object.ogs_data_report_time_window | 0;
            if (object.client_instance_id != null)
                if ($util.Long)
                    (message.client_instance_id = $util.Long.fromValue(object.client_instance_id)).unsigned = true;
                else if (typeof object.client_instance_id === "string")
                    message.client_instance_id = parseInt(object.client_instance_id, 10);
                else if (typeof object.client_instance_id === "number")
                    message.client_instance_id = object.client_instance_id;
                else if (typeof object.client_instance_id === "object")
                    message.client_instance_id = new $util.LongBits(object.client_instance_id.low >>> 0, object.client_instance_id.high >>> 0).toNumber(true);
            if (object.force_client_update_check != null)
                message.force_client_update_check = Boolean(object.force_client_update_check);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientLogonResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientLogonResponse
         * @static
         * @param {CMsgClientLogonResponse} message CMsgClientLogonResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientLogonResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eresult = 2;
                object.out_of_game_heartbeat_seconds = 0;
                object.in_game_heartbeat_seconds = 0;
                object.deprecated_public_ip = 0;
                object.rtime32_server_time = 0;
                object.account_flags = 0;
                object.cell_id = 0;
                object.email_domain = "";
                if (options.bytes === String)
                    object.steam2_ticket = "";
                else {
                    object.steam2_ticket = [];
                    if (options.bytes !== Array)
                        object.steam2_ticket = $util.newBuffer(object.steam2_ticket);
                }
                object.eresult_extended = 0;
                object.webapi_authenticate_user_nonce = "";
                object.cell_id_ping_threshold = 0;
                object.use_pics = false;
                object.vanity_url = "";
                object.public_ip = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.client_supplied_steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_supplied_steamid = options.longs === String ? "0" : 0;
                object.ip_country_code = "";
                if (options.bytes === String)
                    object.parental_settings = "";
                else {
                    object.parental_settings = [];
                    if (options.bytes !== Array)
                        object.parental_settings = $util.newBuffer(object.parental_settings);
                }
                if (options.bytes === String)
                    object.parental_setting_signature = "";
                else {
                    object.parental_setting_signature = [];
                    if (options.bytes !== Array)
                        object.parental_setting_signature = $util.newBuffer(object.parental_setting_signature);
                }
                object.count_loginfailures_to_migrate = 0;
                object.count_disconnects_to_migrate = 0;
                object.ogs_data_report_time_window = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_instance_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_instance_id = options.longs === String ? "0" : 0;
                object.force_client_update_check = false;
            }
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.out_of_game_heartbeat_seconds != null && message.hasOwnProperty("out_of_game_heartbeat_seconds"))
                object.out_of_game_heartbeat_seconds = message.out_of_game_heartbeat_seconds;
            if (message.in_game_heartbeat_seconds != null && message.hasOwnProperty("in_game_heartbeat_seconds"))
                object.in_game_heartbeat_seconds = message.in_game_heartbeat_seconds;
            if (message.deprecated_public_ip != null && message.hasOwnProperty("deprecated_public_ip"))
                object.deprecated_public_ip = message.deprecated_public_ip;
            if (message.rtime32_server_time != null && message.hasOwnProperty("rtime32_server_time"))
                object.rtime32_server_time = message.rtime32_server_time;
            if (message.account_flags != null && message.hasOwnProperty("account_flags"))
                object.account_flags = message.account_flags;
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                object.cell_id = message.cell_id;
            if (message.email_domain != null && message.hasOwnProperty("email_domain"))
                object.email_domain = message.email_domain;
            if (message.steam2_ticket != null && message.hasOwnProperty("steam2_ticket"))
                object.steam2_ticket = options.bytes === String ? $util.base64.encode(message.steam2_ticket, 0, message.steam2_ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.steam2_ticket) : message.steam2_ticket;
            if (message.eresult_extended != null && message.hasOwnProperty("eresult_extended"))
                object.eresult_extended = message.eresult_extended;
            if (message.webapi_authenticate_user_nonce != null && message.hasOwnProperty("webapi_authenticate_user_nonce"))
                object.webapi_authenticate_user_nonce = message.webapi_authenticate_user_nonce;
            if (message.cell_id_ping_threshold != null && message.hasOwnProperty("cell_id_ping_threshold"))
                object.cell_id_ping_threshold = message.cell_id_ping_threshold;
            if (message.use_pics != null && message.hasOwnProperty("use_pics"))
                object.use_pics = message.use_pics;
            if (message.vanity_url != null && message.hasOwnProperty("vanity_url"))
                object.vanity_url = message.vanity_url;
            if (message.public_ip != null && message.hasOwnProperty("public_ip"))
                object.public_ip = $root.CMsgIPAddress.toObject(message.public_ip, options);
            if (message.client_supplied_steamid != null && message.hasOwnProperty("client_supplied_steamid"))
                if (typeof message.client_supplied_steamid === "number")
                    object.client_supplied_steamid = options.longs === String ? String(message.client_supplied_steamid) : message.client_supplied_steamid;
                else
                    object.client_supplied_steamid = options.longs === String ? $util.Long.prototype.toString.call(message.client_supplied_steamid) : options.longs === Number ? new $util.LongBits(message.client_supplied_steamid.low >>> 0, message.client_supplied_steamid.high >>> 0).toNumber() : message.client_supplied_steamid;
            if (message.ip_country_code != null && message.hasOwnProperty("ip_country_code"))
                object.ip_country_code = message.ip_country_code;
            if (message.parental_settings != null && message.hasOwnProperty("parental_settings"))
                object.parental_settings = options.bytes === String ? $util.base64.encode(message.parental_settings, 0, message.parental_settings.length) : options.bytes === Array ? Array.prototype.slice.call(message.parental_settings) : message.parental_settings;
            if (message.parental_setting_signature != null && message.hasOwnProperty("parental_setting_signature"))
                object.parental_setting_signature = options.bytes === String ? $util.base64.encode(message.parental_setting_signature, 0, message.parental_setting_signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.parental_setting_signature) : message.parental_setting_signature;
            if (message.count_loginfailures_to_migrate != null && message.hasOwnProperty("count_loginfailures_to_migrate"))
                object.count_loginfailures_to_migrate = message.count_loginfailures_to_migrate;
            if (message.count_disconnects_to_migrate != null && message.hasOwnProperty("count_disconnects_to_migrate"))
                object.count_disconnects_to_migrate = message.count_disconnects_to_migrate;
            if (message.ogs_data_report_time_window != null && message.hasOwnProperty("ogs_data_report_time_window"))
                object.ogs_data_report_time_window = message.ogs_data_report_time_window;
            if (message.client_instance_id != null && message.hasOwnProperty("client_instance_id"))
                if (typeof message.client_instance_id === "number")
                    object.client_instance_id = options.longs === String ? String(message.client_instance_id) : message.client_instance_id;
                else
                    object.client_instance_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_instance_id) : options.longs === Number ? new $util.LongBits(message.client_instance_id.low >>> 0, message.client_instance_id.high >>> 0).toNumber(true) : message.client_instance_id;
            if (message.force_client_update_check != null && message.hasOwnProperty("force_client_update_check"))
                object.force_client_update_check = message.force_client_update_check;
            return object;
        };
    
        /**
         * Converts this CMsgClientLogonResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientLogonResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientLogonResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientLogonResponse;
    })();
    
    $root.CMsgClientRequestWebAPIAuthenticateUserNonce = (function() {
    
        /**
         * Properties of a CMsgClientRequestWebAPIAuthenticateUserNonce.
         * @exports ICMsgClientRequestWebAPIAuthenticateUserNonce
         * @interface ICMsgClientRequestWebAPIAuthenticateUserNonce
         * @property {number|null} [token_type] CMsgClientRequestWebAPIAuthenticateUserNonce token_type
         */
    
        /**
         * Constructs a new CMsgClientRequestWebAPIAuthenticateUserNonce.
         * @exports CMsgClientRequestWebAPIAuthenticateUserNonce
         * @classdesc Represents a CMsgClientRequestWebAPIAuthenticateUserNonce.
         * @implements ICMsgClientRequestWebAPIAuthenticateUserNonce
         * @constructor
         * @param {ICMsgClientRequestWebAPIAuthenticateUserNonce=} [properties] Properties to set
         */
        function CMsgClientRequestWebAPIAuthenticateUserNonce(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientRequestWebAPIAuthenticateUserNonce token_type.
         * @member {number} token_type
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @instance
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.prototype.token_type = -1;
    
        /**
         * Creates a new CMsgClientRequestWebAPIAuthenticateUserNonce instance using the specified properties.
         * @function create
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @static
         * @param {ICMsgClientRequestWebAPIAuthenticateUserNonce=} [properties] Properties to set
         * @returns {CMsgClientRequestWebAPIAuthenticateUserNonce} CMsgClientRequestWebAPIAuthenticateUserNonce instance
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.create = function create(properties) {
            return new CMsgClientRequestWebAPIAuthenticateUserNonce(properties);
        };
    
        /**
         * Encodes the specified CMsgClientRequestWebAPIAuthenticateUserNonce message. Does not implicitly {@link CMsgClientRequestWebAPIAuthenticateUserNonce.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @static
         * @param {ICMsgClientRequestWebAPIAuthenticateUserNonce} message CMsgClientRequestWebAPIAuthenticateUserNonce message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token_type != null && message.hasOwnProperty("token_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.token_type);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientRequestWebAPIAuthenticateUserNonce message, length delimited. Does not implicitly {@link CMsgClientRequestWebAPIAuthenticateUserNonce.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @static
         * @param {ICMsgClientRequestWebAPIAuthenticateUserNonce} message CMsgClientRequestWebAPIAuthenticateUserNonce message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientRequestWebAPIAuthenticateUserNonce message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientRequestWebAPIAuthenticateUserNonce} CMsgClientRequestWebAPIAuthenticateUserNonce
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientRequestWebAPIAuthenticateUserNonce();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientRequestWebAPIAuthenticateUserNonce message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientRequestWebAPIAuthenticateUserNonce} CMsgClientRequestWebAPIAuthenticateUserNonce
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientRequestWebAPIAuthenticateUserNonce message.
         * @function verify
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token_type != null && message.hasOwnProperty("token_type"))
                if (!$util.isInteger(message.token_type))
                    return "token_type: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientRequestWebAPIAuthenticateUserNonce message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientRequestWebAPIAuthenticateUserNonce} CMsgClientRequestWebAPIAuthenticateUserNonce
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientRequestWebAPIAuthenticateUserNonce)
                return object;
            var message = new $root.CMsgClientRequestWebAPIAuthenticateUserNonce();
            if (object.token_type != null)
                message.token_type = object.token_type | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientRequestWebAPIAuthenticateUserNonce message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @static
         * @param {CMsgClientRequestWebAPIAuthenticateUserNonce} message CMsgClientRequestWebAPIAuthenticateUserNonce
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token_type = -1;
            if (message.token_type != null && message.hasOwnProperty("token_type"))
                object.token_type = message.token_type;
            return object;
        };
    
        /**
         * Converts this CMsgClientRequestWebAPIAuthenticateUserNonce to JSON.
         * @function toJSON
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonce
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientRequestWebAPIAuthenticateUserNonce.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientRequestWebAPIAuthenticateUserNonce;
    })();
    
    $root.CMsgClientRequestWebAPIAuthenticateUserNonceResponse = (function() {
    
        /**
         * Properties of a CMsgClientRequestWebAPIAuthenticateUserNonceResponse.
         * @exports ICMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @interface ICMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @property {number|null} [eresult] CMsgClientRequestWebAPIAuthenticateUserNonceResponse eresult
         * @property {string|null} [webapi_authenticate_user_nonce] CMsgClientRequestWebAPIAuthenticateUserNonceResponse webapi_authenticate_user_nonce
         * @property {number|null} [token_type] CMsgClientRequestWebAPIAuthenticateUserNonceResponse token_type
         */
    
        /**
         * Constructs a new CMsgClientRequestWebAPIAuthenticateUserNonceResponse.
         * @exports CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @classdesc Represents a CMsgClientRequestWebAPIAuthenticateUserNonceResponse.
         * @implements ICMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @constructor
         * @param {ICMsgClientRequestWebAPIAuthenticateUserNonceResponse=} [properties] Properties to set
         */
        function CMsgClientRequestWebAPIAuthenticateUserNonceResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientRequestWebAPIAuthenticateUserNonceResponse eresult.
         * @member {number} eresult
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @instance
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.prototype.eresult = 2;
    
        /**
         * CMsgClientRequestWebAPIAuthenticateUserNonceResponse webapi_authenticate_user_nonce.
         * @member {string} webapi_authenticate_user_nonce
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @instance
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.prototype.webapi_authenticate_user_nonce = "";
    
        /**
         * CMsgClientRequestWebAPIAuthenticateUserNonceResponse token_type.
         * @member {number} token_type
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @instance
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.prototype.token_type = -1;
    
        /**
         * Creates a new CMsgClientRequestWebAPIAuthenticateUserNonceResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @static
         * @param {ICMsgClientRequestWebAPIAuthenticateUserNonceResponse=} [properties] Properties to set
         * @returns {CMsgClientRequestWebAPIAuthenticateUserNonceResponse} CMsgClientRequestWebAPIAuthenticateUserNonceResponse instance
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.create = function create(properties) {
            return new CMsgClientRequestWebAPIAuthenticateUserNonceResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientRequestWebAPIAuthenticateUserNonceResponse message. Does not implicitly {@link CMsgClientRequestWebAPIAuthenticateUserNonceResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @static
         * @param {ICMsgClientRequestWebAPIAuthenticateUserNonceResponse} message CMsgClientRequestWebAPIAuthenticateUserNonceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eresult);
            if (message.token_type != null && message.hasOwnProperty("token_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.token_type);
            if (message.webapi_authenticate_user_nonce != null && message.hasOwnProperty("webapi_authenticate_user_nonce"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.webapi_authenticate_user_nonce);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientRequestWebAPIAuthenticateUserNonceResponse message, length delimited. Does not implicitly {@link CMsgClientRequestWebAPIAuthenticateUserNonceResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @static
         * @param {ICMsgClientRequestWebAPIAuthenticateUserNonceResponse} message CMsgClientRequestWebAPIAuthenticateUserNonceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientRequestWebAPIAuthenticateUserNonceResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientRequestWebAPIAuthenticateUserNonceResponse} CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientRequestWebAPIAuthenticateUserNonceResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
                    break;
                case 11:
                    message.webapi_authenticate_user_nonce = reader.string();
                    break;
                case 3:
                    message.token_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientRequestWebAPIAuthenticateUserNonceResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientRequestWebAPIAuthenticateUserNonceResponse} CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientRequestWebAPIAuthenticateUserNonceResponse message.
         * @function verify
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.webapi_authenticate_user_nonce != null && message.hasOwnProperty("webapi_authenticate_user_nonce"))
                if (!$util.isString(message.webapi_authenticate_user_nonce))
                    return "webapi_authenticate_user_nonce: string expected";
            if (message.token_type != null && message.hasOwnProperty("token_type"))
                if (!$util.isInteger(message.token_type))
                    return "token_type: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientRequestWebAPIAuthenticateUserNonceResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientRequestWebAPIAuthenticateUserNonceResponse} CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientRequestWebAPIAuthenticateUserNonceResponse)
                return object;
            var message = new $root.CMsgClientRequestWebAPIAuthenticateUserNonceResponse();
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            if (object.webapi_authenticate_user_nonce != null)
                message.webapi_authenticate_user_nonce = String(object.webapi_authenticate_user_nonce);
            if (object.token_type != null)
                message.token_type = object.token_type | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientRequestWebAPIAuthenticateUserNonceResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @static
         * @param {CMsgClientRequestWebAPIAuthenticateUserNonceResponse} message CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eresult = 2;
                object.token_type = -1;
                object.webapi_authenticate_user_nonce = "";
            }
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.token_type != null && message.hasOwnProperty("token_type"))
                object.token_type = message.token_type;
            if (message.webapi_authenticate_user_nonce != null && message.hasOwnProperty("webapi_authenticate_user_nonce"))
                object.webapi_authenticate_user_nonce = message.webapi_authenticate_user_nonce;
            return object;
        };
    
        /**
         * Converts this CMsgClientRequestWebAPIAuthenticateUserNonceResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientRequestWebAPIAuthenticateUserNonceResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientRequestWebAPIAuthenticateUserNonceResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientRequestWebAPIAuthenticateUserNonceResponse;
    })();
    
    $root.CMsgClientLogOff = (function() {
    
        /**
         * Properties of a CMsgClientLogOff.
         * @exports ICMsgClientLogOff
         * @interface ICMsgClientLogOff
         */
    
        /**
         * Constructs a new CMsgClientLogOff.
         * @exports CMsgClientLogOff
         * @classdesc Represents a CMsgClientLogOff.
         * @implements ICMsgClientLogOff
         * @constructor
         * @param {ICMsgClientLogOff=} [properties] Properties to set
         */
        function CMsgClientLogOff(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CMsgClientLogOff instance using the specified properties.
         * @function create
         * @memberof CMsgClientLogOff
         * @static
         * @param {ICMsgClientLogOff=} [properties] Properties to set
         * @returns {CMsgClientLogOff} CMsgClientLogOff instance
         */
        CMsgClientLogOff.create = function create(properties) {
            return new CMsgClientLogOff(properties);
        };
    
        /**
         * Encodes the specified CMsgClientLogOff message. Does not implicitly {@link CMsgClientLogOff.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientLogOff
         * @static
         * @param {ICMsgClientLogOff} message CMsgClientLogOff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientLogOff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientLogOff message, length delimited. Does not implicitly {@link CMsgClientLogOff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientLogOff
         * @static
         * @param {ICMsgClientLogOff} message CMsgClientLogOff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientLogOff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientLogOff message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientLogOff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientLogOff} CMsgClientLogOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientLogOff.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientLogOff();
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
         * Decodes a CMsgClientLogOff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientLogOff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientLogOff} CMsgClientLogOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientLogOff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientLogOff message.
         * @function verify
         * @memberof CMsgClientLogOff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientLogOff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientLogOff message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientLogOff
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientLogOff} CMsgClientLogOff
         */
        CMsgClientLogOff.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientLogOff)
                return object;
            return new $root.CMsgClientLogOff();
        };
    
        /**
         * Creates a plain object from a CMsgClientLogOff message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientLogOff
         * @static
         * @param {CMsgClientLogOff} message CMsgClientLogOff
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientLogOff.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CMsgClientLogOff to JSON.
         * @function toJSON
         * @memberof CMsgClientLogOff
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientLogOff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientLogOff;
    })();
    
    $root.CMsgClientLoggedOff = (function() {
    
        /**
         * Properties of a CMsgClientLoggedOff.
         * @exports ICMsgClientLoggedOff
         * @interface ICMsgClientLoggedOff
         * @property {number|null} [eresult] CMsgClientLoggedOff eresult
         */
    
        /**
         * Constructs a new CMsgClientLoggedOff.
         * @exports CMsgClientLoggedOff
         * @classdesc Represents a CMsgClientLoggedOff.
         * @implements ICMsgClientLoggedOff
         * @constructor
         * @param {ICMsgClientLoggedOff=} [properties] Properties to set
         */
        function CMsgClientLoggedOff(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientLoggedOff eresult.
         * @member {number} eresult
         * @memberof CMsgClientLoggedOff
         * @instance
         */
        CMsgClientLoggedOff.prototype.eresult = 2;
    
        /**
         * Creates a new CMsgClientLoggedOff instance using the specified properties.
         * @function create
         * @memberof CMsgClientLoggedOff
         * @static
         * @param {ICMsgClientLoggedOff=} [properties] Properties to set
         * @returns {CMsgClientLoggedOff} CMsgClientLoggedOff instance
         */
        CMsgClientLoggedOff.create = function create(properties) {
            return new CMsgClientLoggedOff(properties);
        };
    
        /**
         * Encodes the specified CMsgClientLoggedOff message. Does not implicitly {@link CMsgClientLoggedOff.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientLoggedOff
         * @static
         * @param {ICMsgClientLoggedOff} message CMsgClientLoggedOff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientLoggedOff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eresult);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientLoggedOff message, length delimited. Does not implicitly {@link CMsgClientLoggedOff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientLoggedOff
         * @static
         * @param {ICMsgClientLoggedOff} message CMsgClientLoggedOff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientLoggedOff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientLoggedOff message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientLoggedOff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientLoggedOff} CMsgClientLoggedOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientLoggedOff.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientLoggedOff();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eresult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientLoggedOff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientLoggedOff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientLoggedOff} CMsgClientLoggedOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientLoggedOff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientLoggedOff message.
         * @function verify
         * @memberof CMsgClientLoggedOff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientLoggedOff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientLoggedOff message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientLoggedOff
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientLoggedOff} CMsgClientLoggedOff
         */
        CMsgClientLoggedOff.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientLoggedOff)
                return object;
            var message = new $root.CMsgClientLoggedOff();
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientLoggedOff message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientLoggedOff
         * @static
         * @param {CMsgClientLoggedOff} message CMsgClientLoggedOff
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientLoggedOff.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.eresult = 2;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            return object;
        };
    
        /**
         * Converts this CMsgClientLoggedOff to JSON.
         * @function toJSON
         * @memberof CMsgClientLoggedOff
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientLoggedOff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientLoggedOff;
    })();
    
    $root.CMsgClientNewLoginKey = (function() {
    
        /**
         * Properties of a CMsgClientNewLoginKey.
         * @exports ICMsgClientNewLoginKey
         * @interface ICMsgClientNewLoginKey
         * @property {number|null} [unique_id] CMsgClientNewLoginKey unique_id
         * @property {string|null} [login_key] CMsgClientNewLoginKey login_key
         */
    
        /**
         * Constructs a new CMsgClientNewLoginKey.
         * @exports CMsgClientNewLoginKey
         * @classdesc Represents a CMsgClientNewLoginKey.
         * @implements ICMsgClientNewLoginKey
         * @constructor
         * @param {ICMsgClientNewLoginKey=} [properties] Properties to set
         */
        function CMsgClientNewLoginKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientNewLoginKey unique_id.
         * @member {number} unique_id
         * @memberof CMsgClientNewLoginKey
         * @instance
         */
        CMsgClientNewLoginKey.prototype.unique_id = 0;
    
        /**
         * CMsgClientNewLoginKey login_key.
         * @member {string} login_key
         * @memberof CMsgClientNewLoginKey
         * @instance
         */
        CMsgClientNewLoginKey.prototype.login_key = "";
    
        /**
         * Creates a new CMsgClientNewLoginKey instance using the specified properties.
         * @function create
         * @memberof CMsgClientNewLoginKey
         * @static
         * @param {ICMsgClientNewLoginKey=} [properties] Properties to set
         * @returns {CMsgClientNewLoginKey} CMsgClientNewLoginKey instance
         */
        CMsgClientNewLoginKey.create = function create(properties) {
            return new CMsgClientNewLoginKey(properties);
        };
    
        /**
         * Encodes the specified CMsgClientNewLoginKey message. Does not implicitly {@link CMsgClientNewLoginKey.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientNewLoginKey
         * @static
         * @param {ICMsgClientNewLoginKey} message CMsgClientNewLoginKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientNewLoginKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unique_id != null && message.hasOwnProperty("unique_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.unique_id);
            if (message.login_key != null && message.hasOwnProperty("login_key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.login_key);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientNewLoginKey message, length delimited. Does not implicitly {@link CMsgClientNewLoginKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientNewLoginKey
         * @static
         * @param {ICMsgClientNewLoginKey} message CMsgClientNewLoginKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientNewLoginKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientNewLoginKey message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientNewLoginKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientNewLoginKey} CMsgClientNewLoginKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientNewLoginKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientNewLoginKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.unique_id = reader.uint32();
                    break;
                case 2:
                    message.login_key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientNewLoginKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientNewLoginKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientNewLoginKey} CMsgClientNewLoginKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientNewLoginKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientNewLoginKey message.
         * @function verify
         * @memberof CMsgClientNewLoginKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientNewLoginKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.unique_id != null && message.hasOwnProperty("unique_id"))
                if (!$util.isInteger(message.unique_id))
                    return "unique_id: integer expected";
            if (message.login_key != null && message.hasOwnProperty("login_key"))
                if (!$util.isString(message.login_key))
                    return "login_key: string expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientNewLoginKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientNewLoginKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientNewLoginKey} CMsgClientNewLoginKey
         */
        CMsgClientNewLoginKey.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientNewLoginKey)
                return object;
            var message = new $root.CMsgClientNewLoginKey();
            if (object.unique_id != null)
                message.unique_id = object.unique_id >>> 0;
            if (object.login_key != null)
                message.login_key = String(object.login_key);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientNewLoginKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientNewLoginKey
         * @static
         * @param {CMsgClientNewLoginKey} message CMsgClientNewLoginKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientNewLoginKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.unique_id = 0;
                object.login_key = "";
            }
            if (message.unique_id != null && message.hasOwnProperty("unique_id"))
                object.unique_id = message.unique_id;
            if (message.login_key != null && message.hasOwnProperty("login_key"))
                object.login_key = message.login_key;
            return object;
        };
    
        /**
         * Converts this CMsgClientNewLoginKey to JSON.
         * @function toJSON
         * @memberof CMsgClientNewLoginKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientNewLoginKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientNewLoginKey;
    })();
    
    $root.CMsgClientNewLoginKeyAccepted = (function() {
    
        /**
         * Properties of a CMsgClientNewLoginKeyAccepted.
         * @exports ICMsgClientNewLoginKeyAccepted
         * @interface ICMsgClientNewLoginKeyAccepted
         * @property {number|null} [unique_id] CMsgClientNewLoginKeyAccepted unique_id
         */
    
        /**
         * Constructs a new CMsgClientNewLoginKeyAccepted.
         * @exports CMsgClientNewLoginKeyAccepted
         * @classdesc Represents a CMsgClientNewLoginKeyAccepted.
         * @implements ICMsgClientNewLoginKeyAccepted
         * @constructor
         * @param {ICMsgClientNewLoginKeyAccepted=} [properties] Properties to set
         */
        function CMsgClientNewLoginKeyAccepted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientNewLoginKeyAccepted unique_id.
         * @member {number} unique_id
         * @memberof CMsgClientNewLoginKeyAccepted
         * @instance
         */
        CMsgClientNewLoginKeyAccepted.prototype.unique_id = 0;
    
        /**
         * Creates a new CMsgClientNewLoginKeyAccepted instance using the specified properties.
         * @function create
         * @memberof CMsgClientNewLoginKeyAccepted
         * @static
         * @param {ICMsgClientNewLoginKeyAccepted=} [properties] Properties to set
         * @returns {CMsgClientNewLoginKeyAccepted} CMsgClientNewLoginKeyAccepted instance
         */
        CMsgClientNewLoginKeyAccepted.create = function create(properties) {
            return new CMsgClientNewLoginKeyAccepted(properties);
        };
    
        /**
         * Encodes the specified CMsgClientNewLoginKeyAccepted message. Does not implicitly {@link CMsgClientNewLoginKeyAccepted.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientNewLoginKeyAccepted
         * @static
         * @param {ICMsgClientNewLoginKeyAccepted} message CMsgClientNewLoginKeyAccepted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientNewLoginKeyAccepted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unique_id != null && message.hasOwnProperty("unique_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.unique_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientNewLoginKeyAccepted message, length delimited. Does not implicitly {@link CMsgClientNewLoginKeyAccepted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientNewLoginKeyAccepted
         * @static
         * @param {ICMsgClientNewLoginKeyAccepted} message CMsgClientNewLoginKeyAccepted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientNewLoginKeyAccepted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientNewLoginKeyAccepted message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientNewLoginKeyAccepted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientNewLoginKeyAccepted} CMsgClientNewLoginKeyAccepted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientNewLoginKeyAccepted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientNewLoginKeyAccepted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.unique_id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientNewLoginKeyAccepted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientNewLoginKeyAccepted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientNewLoginKeyAccepted} CMsgClientNewLoginKeyAccepted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientNewLoginKeyAccepted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientNewLoginKeyAccepted message.
         * @function verify
         * @memberof CMsgClientNewLoginKeyAccepted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientNewLoginKeyAccepted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.unique_id != null && message.hasOwnProperty("unique_id"))
                if (!$util.isInteger(message.unique_id))
                    return "unique_id: integer expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientNewLoginKeyAccepted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientNewLoginKeyAccepted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientNewLoginKeyAccepted} CMsgClientNewLoginKeyAccepted
         */
        CMsgClientNewLoginKeyAccepted.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientNewLoginKeyAccepted)
                return object;
            var message = new $root.CMsgClientNewLoginKeyAccepted();
            if (object.unique_id != null)
                message.unique_id = object.unique_id >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientNewLoginKeyAccepted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientNewLoginKeyAccepted
         * @static
         * @param {CMsgClientNewLoginKeyAccepted} message CMsgClientNewLoginKeyAccepted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientNewLoginKeyAccepted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.unique_id = 0;
            if (message.unique_id != null && message.hasOwnProperty("unique_id"))
                object.unique_id = message.unique_id;
            return object;
        };
    
        /**
         * Converts this CMsgClientNewLoginKeyAccepted to JSON.
         * @function toJSON
         * @memberof CMsgClientNewLoginKeyAccepted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientNewLoginKeyAccepted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientNewLoginKeyAccepted;
    })();
    
    $root.CMsgClientAccountInfo = (function() {
    
        /**
         * Properties of a CMsgClientAccountInfo.
         * @exports ICMsgClientAccountInfo
         * @interface ICMsgClientAccountInfo
         * @property {string|null} [persona_name] CMsgClientAccountInfo persona_name
         * @property {string|null} [ip_country] CMsgClientAccountInfo ip_country
         * @property {number|null} [count_authed_computers] CMsgClientAccountInfo count_authed_computers
         * @property {number|null} [account_flags] CMsgClientAccountInfo account_flags
         * @property {number|Long|null} [facebook_id] CMsgClientAccountInfo facebook_id
         * @property {string|null} [facebook_name] CMsgClientAccountInfo facebook_name
         * @property {boolean|null} [steamguard_notify_newmachines] CMsgClientAccountInfo steamguard_notify_newmachines
         * @property {string|null} [steamguard_machine_name_user_chosen] CMsgClientAccountInfo steamguard_machine_name_user_chosen
         * @property {boolean|null} [is_phone_verified] CMsgClientAccountInfo is_phone_verified
         * @property {number|null} [two_factor_state] CMsgClientAccountInfo two_factor_state
         * @property {boolean|null} [is_phone_identifying] CMsgClientAccountInfo is_phone_identifying
         * @property {boolean|null} [is_phone_needing_reverify] CMsgClientAccountInfo is_phone_needing_reverify
         */
    
        /**
         * Constructs a new CMsgClientAccountInfo.
         * @exports CMsgClientAccountInfo
         * @classdesc Represents a CMsgClientAccountInfo.
         * @implements ICMsgClientAccountInfo
         * @constructor
         * @param {ICMsgClientAccountInfo=} [properties] Properties to set
         */
        function CMsgClientAccountInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientAccountInfo persona_name.
         * @member {string} persona_name
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.persona_name = "";
    
        /**
         * CMsgClientAccountInfo ip_country.
         * @member {string} ip_country
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.ip_country = "";
    
        /**
         * CMsgClientAccountInfo count_authed_computers.
         * @member {number} count_authed_computers
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.count_authed_computers = 0;
    
        /**
         * CMsgClientAccountInfo account_flags.
         * @member {number} account_flags
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.account_flags = 0;
    
        /**
         * CMsgClientAccountInfo facebook_id.
         * @member {number|Long} facebook_id
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.facebook_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgClientAccountInfo facebook_name.
         * @member {string} facebook_name
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.facebook_name = "";
    
        /**
         * CMsgClientAccountInfo steamguard_notify_newmachines.
         * @member {boolean} steamguard_notify_newmachines
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.steamguard_notify_newmachines = false;
    
        /**
         * CMsgClientAccountInfo steamguard_machine_name_user_chosen.
         * @member {string} steamguard_machine_name_user_chosen
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.steamguard_machine_name_user_chosen = "";
    
        /**
         * CMsgClientAccountInfo is_phone_verified.
         * @member {boolean} is_phone_verified
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.is_phone_verified = false;
    
        /**
         * CMsgClientAccountInfo two_factor_state.
         * @member {number} two_factor_state
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.two_factor_state = 0;
    
        /**
         * CMsgClientAccountInfo is_phone_identifying.
         * @member {boolean} is_phone_identifying
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.is_phone_identifying = false;
    
        /**
         * CMsgClientAccountInfo is_phone_needing_reverify.
         * @member {boolean} is_phone_needing_reverify
         * @memberof CMsgClientAccountInfo
         * @instance
         */
        CMsgClientAccountInfo.prototype.is_phone_needing_reverify = false;
    
        /**
         * Creates a new CMsgClientAccountInfo instance using the specified properties.
         * @function create
         * @memberof CMsgClientAccountInfo
         * @static
         * @param {ICMsgClientAccountInfo=} [properties] Properties to set
         * @returns {CMsgClientAccountInfo} CMsgClientAccountInfo instance
         */
        CMsgClientAccountInfo.create = function create(properties) {
            return new CMsgClientAccountInfo(properties);
        };
    
        /**
         * Encodes the specified CMsgClientAccountInfo message. Does not implicitly {@link CMsgClientAccountInfo.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientAccountInfo
         * @static
         * @param {ICMsgClientAccountInfo} message CMsgClientAccountInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAccountInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.persona_name != null && message.hasOwnProperty("persona_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.persona_name);
            if (message.ip_country != null && message.hasOwnProperty("ip_country"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip_country);
            if (message.count_authed_computers != null && message.hasOwnProperty("count_authed_computers"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.count_authed_computers);
            if (message.account_flags != null && message.hasOwnProperty("account_flags"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.account_flags);
            if (message.facebook_id != null && message.hasOwnProperty("facebook_id"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.facebook_id);
            if (message.facebook_name != null && message.hasOwnProperty("facebook_name"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.facebook_name);
            if (message.steamguard_notify_newmachines != null && message.hasOwnProperty("steamguard_notify_newmachines"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.steamguard_notify_newmachines);
            if (message.steamguard_machine_name_user_chosen != null && message.hasOwnProperty("steamguard_machine_name_user_chosen"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.steamguard_machine_name_user_chosen);
            if (message.is_phone_verified != null && message.hasOwnProperty("is_phone_verified"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.is_phone_verified);
            if (message.two_factor_state != null && message.hasOwnProperty("two_factor_state"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.two_factor_state);
            if (message.is_phone_identifying != null && message.hasOwnProperty("is_phone_identifying"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.is_phone_identifying);
            if (message.is_phone_needing_reverify != null && message.hasOwnProperty("is_phone_needing_reverify"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.is_phone_needing_reverify);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientAccountInfo message, length delimited. Does not implicitly {@link CMsgClientAccountInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientAccountInfo
         * @static
         * @param {ICMsgClientAccountInfo} message CMsgClientAccountInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientAccountInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientAccountInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientAccountInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientAccountInfo} CMsgClientAccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAccountInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientAccountInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.persona_name = reader.string();
                    break;
                case 2:
                    message.ip_country = reader.string();
                    break;
                case 5:
                    message.count_authed_computers = reader.int32();
                    break;
                case 7:
                    message.account_flags = reader.uint32();
                    break;
                case 8:
                    message.facebook_id = reader.uint64();
                    break;
                case 9:
                    message.facebook_name = reader.string();
                    break;
                case 14:
                    message.steamguard_notify_newmachines = reader.bool();
                    break;
                case 15:
                    message.steamguard_machine_name_user_chosen = reader.string();
                    break;
                case 16:
                    message.is_phone_verified = reader.bool();
                    break;
                case 17:
                    message.two_factor_state = reader.uint32();
                    break;
                case 18:
                    message.is_phone_identifying = reader.bool();
                    break;
                case 19:
                    message.is_phone_needing_reverify = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientAccountInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientAccountInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientAccountInfo} CMsgClientAccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientAccountInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientAccountInfo message.
         * @function verify
         * @memberof CMsgClientAccountInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientAccountInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.persona_name != null && message.hasOwnProperty("persona_name"))
                if (!$util.isString(message.persona_name))
                    return "persona_name: string expected";
            if (message.ip_country != null && message.hasOwnProperty("ip_country"))
                if (!$util.isString(message.ip_country))
                    return "ip_country: string expected";
            if (message.count_authed_computers != null && message.hasOwnProperty("count_authed_computers"))
                if (!$util.isInteger(message.count_authed_computers))
                    return "count_authed_computers: integer expected";
            if (message.account_flags != null && message.hasOwnProperty("account_flags"))
                if (!$util.isInteger(message.account_flags))
                    return "account_flags: integer expected";
            if (message.facebook_id != null && message.hasOwnProperty("facebook_id"))
                if (!$util.isInteger(message.facebook_id) && !(message.facebook_id && $util.isInteger(message.facebook_id.low) && $util.isInteger(message.facebook_id.high)))
                    return "facebook_id: integer|Long expected";
            if (message.facebook_name != null && message.hasOwnProperty("facebook_name"))
                if (!$util.isString(message.facebook_name))
                    return "facebook_name: string expected";
            if (message.steamguard_notify_newmachines != null && message.hasOwnProperty("steamguard_notify_newmachines"))
                if (typeof message.steamguard_notify_newmachines !== "boolean")
                    return "steamguard_notify_newmachines: boolean expected";
            if (message.steamguard_machine_name_user_chosen != null && message.hasOwnProperty("steamguard_machine_name_user_chosen"))
                if (!$util.isString(message.steamguard_machine_name_user_chosen))
                    return "steamguard_machine_name_user_chosen: string expected";
            if (message.is_phone_verified != null && message.hasOwnProperty("is_phone_verified"))
                if (typeof message.is_phone_verified !== "boolean")
                    return "is_phone_verified: boolean expected";
            if (message.two_factor_state != null && message.hasOwnProperty("two_factor_state"))
                if (!$util.isInteger(message.two_factor_state))
                    return "two_factor_state: integer expected";
            if (message.is_phone_identifying != null && message.hasOwnProperty("is_phone_identifying"))
                if (typeof message.is_phone_identifying !== "boolean")
                    return "is_phone_identifying: boolean expected";
            if (message.is_phone_needing_reverify != null && message.hasOwnProperty("is_phone_needing_reverify"))
                if (typeof message.is_phone_needing_reverify !== "boolean")
                    return "is_phone_needing_reverify: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientAccountInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientAccountInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientAccountInfo} CMsgClientAccountInfo
         */
        CMsgClientAccountInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientAccountInfo)
                return object;
            var message = new $root.CMsgClientAccountInfo();
            if (object.persona_name != null)
                message.persona_name = String(object.persona_name);
            if (object.ip_country != null)
                message.ip_country = String(object.ip_country);
            if (object.count_authed_computers != null)
                message.count_authed_computers = object.count_authed_computers | 0;
            if (object.account_flags != null)
                message.account_flags = object.account_flags >>> 0;
            if (object.facebook_id != null)
                if ($util.Long)
                    (message.facebook_id = $util.Long.fromValue(object.facebook_id)).unsigned = true;
                else if (typeof object.facebook_id === "string")
                    message.facebook_id = parseInt(object.facebook_id, 10);
                else if (typeof object.facebook_id === "number")
                    message.facebook_id = object.facebook_id;
                else if (typeof object.facebook_id === "object")
                    message.facebook_id = new $util.LongBits(object.facebook_id.low >>> 0, object.facebook_id.high >>> 0).toNumber(true);
            if (object.facebook_name != null)
                message.facebook_name = String(object.facebook_name);
            if (object.steamguard_notify_newmachines != null)
                message.steamguard_notify_newmachines = Boolean(object.steamguard_notify_newmachines);
            if (object.steamguard_machine_name_user_chosen != null)
                message.steamguard_machine_name_user_chosen = String(object.steamguard_machine_name_user_chosen);
            if (object.is_phone_verified != null)
                message.is_phone_verified = Boolean(object.is_phone_verified);
            if (object.two_factor_state != null)
                message.two_factor_state = object.two_factor_state >>> 0;
            if (object.is_phone_identifying != null)
                message.is_phone_identifying = Boolean(object.is_phone_identifying);
            if (object.is_phone_needing_reverify != null)
                message.is_phone_needing_reverify = Boolean(object.is_phone_needing_reverify);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientAccountInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientAccountInfo
         * @static
         * @param {CMsgClientAccountInfo} message CMsgClientAccountInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientAccountInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.persona_name = "";
                object.ip_country = "";
                object.count_authed_computers = 0;
                object.account_flags = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.facebook_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.facebook_id = options.longs === String ? "0" : 0;
                object.facebook_name = "";
                object.steamguard_notify_newmachines = false;
                object.steamguard_machine_name_user_chosen = "";
                object.is_phone_verified = false;
                object.two_factor_state = 0;
                object.is_phone_identifying = false;
                object.is_phone_needing_reverify = false;
            }
            if (message.persona_name != null && message.hasOwnProperty("persona_name"))
                object.persona_name = message.persona_name;
            if (message.ip_country != null && message.hasOwnProperty("ip_country"))
                object.ip_country = message.ip_country;
            if (message.count_authed_computers != null && message.hasOwnProperty("count_authed_computers"))
                object.count_authed_computers = message.count_authed_computers;
            if (message.account_flags != null && message.hasOwnProperty("account_flags"))
                object.account_flags = message.account_flags;
            if (message.facebook_id != null && message.hasOwnProperty("facebook_id"))
                if (typeof message.facebook_id === "number")
                    object.facebook_id = options.longs === String ? String(message.facebook_id) : message.facebook_id;
                else
                    object.facebook_id = options.longs === String ? $util.Long.prototype.toString.call(message.facebook_id) : options.longs === Number ? new $util.LongBits(message.facebook_id.low >>> 0, message.facebook_id.high >>> 0).toNumber(true) : message.facebook_id;
            if (message.facebook_name != null && message.hasOwnProperty("facebook_name"))
                object.facebook_name = message.facebook_name;
            if (message.steamguard_notify_newmachines != null && message.hasOwnProperty("steamguard_notify_newmachines"))
                object.steamguard_notify_newmachines = message.steamguard_notify_newmachines;
            if (message.steamguard_machine_name_user_chosen != null && message.hasOwnProperty("steamguard_machine_name_user_chosen"))
                object.steamguard_machine_name_user_chosen = message.steamguard_machine_name_user_chosen;
            if (message.is_phone_verified != null && message.hasOwnProperty("is_phone_verified"))
                object.is_phone_verified = message.is_phone_verified;
            if (message.two_factor_state != null && message.hasOwnProperty("two_factor_state"))
                object.two_factor_state = message.two_factor_state;
            if (message.is_phone_identifying != null && message.hasOwnProperty("is_phone_identifying"))
                object.is_phone_identifying = message.is_phone_identifying;
            if (message.is_phone_needing_reverify != null && message.hasOwnProperty("is_phone_needing_reverify"))
                object.is_phone_needing_reverify = message.is_phone_needing_reverify;
            return object;
        };
    
        /**
         * Converts this CMsgClientAccountInfo to JSON.
         * @function toJSON
         * @memberof CMsgClientAccountInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientAccountInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientAccountInfo;
    })();
    
    $root.CMsgClientChallengeRequest = (function() {
    
        /**
         * Properties of a CMsgClientChallengeRequest.
         * @exports ICMsgClientChallengeRequest
         * @interface ICMsgClientChallengeRequest
         * @property {number|Long|null} [steamid] CMsgClientChallengeRequest steamid
         */
    
        /**
         * Constructs a new CMsgClientChallengeRequest.
         * @exports CMsgClientChallengeRequest
         * @classdesc Represents a CMsgClientChallengeRequest.
         * @implements ICMsgClientChallengeRequest
         * @constructor
         * @param {ICMsgClientChallengeRequest=} [properties] Properties to set
         */
        function CMsgClientChallengeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientChallengeRequest steamid.
         * @member {number|Long} steamid
         * @memberof CMsgClientChallengeRequest
         * @instance
         */
        CMsgClientChallengeRequest.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgClientChallengeRequest instance using the specified properties.
         * @function create
         * @memberof CMsgClientChallengeRequest
         * @static
         * @param {ICMsgClientChallengeRequest=} [properties] Properties to set
         * @returns {CMsgClientChallengeRequest} CMsgClientChallengeRequest instance
         */
        CMsgClientChallengeRequest.create = function create(properties) {
            return new CMsgClientChallengeRequest(properties);
        };
    
        /**
         * Encodes the specified CMsgClientChallengeRequest message. Does not implicitly {@link CMsgClientChallengeRequest.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientChallengeRequest
         * @static
         * @param {ICMsgClientChallengeRequest} message CMsgClientChallengeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientChallengeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientChallengeRequest message, length delimited. Does not implicitly {@link CMsgClientChallengeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientChallengeRequest
         * @static
         * @param {ICMsgClientChallengeRequest} message CMsgClientChallengeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientChallengeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientChallengeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientChallengeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientChallengeRequest} CMsgClientChallengeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientChallengeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientChallengeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientChallengeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientChallengeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientChallengeRequest} CMsgClientChallengeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientChallengeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientChallengeRequest message.
         * @function verify
         * @memberof CMsgClientChallengeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientChallengeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientChallengeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientChallengeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientChallengeRequest} CMsgClientChallengeRequest
         */
        CMsgClientChallengeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientChallengeRequest)
                return object;
            var message = new $root.CMsgClientChallengeRequest();
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
         * Creates a plain object from a CMsgClientChallengeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientChallengeRequest
         * @static
         * @param {CMsgClientChallengeRequest} message CMsgClientChallengeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientChallengeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CMsgClientChallengeRequest to JSON.
         * @function toJSON
         * @memberof CMsgClientChallengeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientChallengeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientChallengeRequest;
    })();
    
    $root.CMsgClientChallengeResponse = (function() {
    
        /**
         * Properties of a CMsgClientChallengeResponse.
         * @exports ICMsgClientChallengeResponse
         * @interface ICMsgClientChallengeResponse
         * @property {number|Long|null} [challenge] CMsgClientChallengeResponse challenge
         */
    
        /**
         * Constructs a new CMsgClientChallengeResponse.
         * @exports CMsgClientChallengeResponse
         * @classdesc Represents a CMsgClientChallengeResponse.
         * @implements ICMsgClientChallengeResponse
         * @constructor
         * @param {ICMsgClientChallengeResponse=} [properties] Properties to set
         */
        function CMsgClientChallengeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgClientChallengeResponse challenge.
         * @member {number|Long} challenge
         * @memberof CMsgClientChallengeResponse
         * @instance
         */
        CMsgClientChallengeResponse.prototype.challenge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgClientChallengeResponse instance using the specified properties.
         * @function create
         * @memberof CMsgClientChallengeResponse
         * @static
         * @param {ICMsgClientChallengeResponse=} [properties] Properties to set
         * @returns {CMsgClientChallengeResponse} CMsgClientChallengeResponse instance
         */
        CMsgClientChallengeResponse.create = function create(properties) {
            return new CMsgClientChallengeResponse(properties);
        };
    
        /**
         * Encodes the specified CMsgClientChallengeResponse message. Does not implicitly {@link CMsgClientChallengeResponse.verify|verify} messages.
         * @function encode
         * @memberof CMsgClientChallengeResponse
         * @static
         * @param {ICMsgClientChallengeResponse} message CMsgClientChallengeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientChallengeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.challenge);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgClientChallengeResponse message, length delimited. Does not implicitly {@link CMsgClientChallengeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgClientChallengeResponse
         * @static
         * @param {ICMsgClientChallengeResponse} message CMsgClientChallengeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgClientChallengeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgClientChallengeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgClientChallengeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgClientChallengeResponse} CMsgClientChallengeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientChallengeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgClientChallengeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.challenge = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgClientChallengeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgClientChallengeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgClientChallengeResponse} CMsgClientChallengeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgClientChallengeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgClientChallengeResponse message.
         * @function verify
         * @memberof CMsgClientChallengeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgClientChallengeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (!$util.isInteger(message.challenge) && !(message.challenge && $util.isInteger(message.challenge.low) && $util.isInteger(message.challenge.high)))
                    return "challenge: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgClientChallengeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgClientChallengeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgClientChallengeResponse} CMsgClientChallengeResponse
         */
        CMsgClientChallengeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgClientChallengeResponse)
                return object;
            var message = new $root.CMsgClientChallengeResponse();
            if (object.challenge != null)
                if ($util.Long)
                    (message.challenge = $util.Long.fromValue(object.challenge)).unsigned = false;
                else if (typeof object.challenge === "string")
                    message.challenge = parseInt(object.challenge, 10);
                else if (typeof object.challenge === "number")
                    message.challenge = object.challenge;
                else if (typeof object.challenge === "object")
                    message.challenge = new $util.LongBits(object.challenge.low >>> 0, object.challenge.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgClientChallengeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgClientChallengeResponse
         * @static
         * @param {CMsgClientChallengeResponse} message CMsgClientChallengeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgClientChallengeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.challenge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.challenge = options.longs === String ? "0" : 0;
            if (message.challenge != null && message.hasOwnProperty("challenge"))
                if (typeof message.challenge === "number")
                    object.challenge = options.longs === String ? String(message.challenge) : message.challenge;
                else
                    object.challenge = options.longs === String ? $util.Long.prototype.toString.call(message.challenge) : options.longs === Number ? new $util.LongBits(message.challenge.low >>> 0, message.challenge.high >>> 0).toNumber() : message.challenge;
            return object;
        };
    
        /**
         * Converts this CMsgClientChallengeResponse to JSON.
         * @function toJSON
         * @memberof CMsgClientChallengeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgClientChallengeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgClientChallengeResponse;
    })();
    
    /**
     * EProtoClanEventType enum.
     * @exports EProtoClanEventType
     * @enum {string}
     * @property {number} k_EClanOtherEvent=1 k_EClanOtherEvent value
     * @property {number} k_EClanGameEvent=2 k_EClanGameEvent value
     * @property {number} k_EClanPartyEvent=3 k_EClanPartyEvent value
     * @property {number} k_EClanMeetingEvent=4 k_EClanMeetingEvent value
     * @property {number} k_EClanSpecialCauseEvent=5 k_EClanSpecialCauseEvent value
     * @property {number} k_EClanMusicAndArtsEvent=6 k_EClanMusicAndArtsEvent value
     * @property {number} k_EClanSportsEvent=7 k_EClanSportsEvent value
     * @property {number} k_EClanTripEvent=8 k_EClanTripEvent value
     * @property {number} k_EClanChatEvent=9 k_EClanChatEvent value
     * @property {number} k_EClanGameReleaseEvent=10 k_EClanGameReleaseEvent value
     * @property {number} k_EClanBroadcastEvent=11 k_EClanBroadcastEvent value
     * @property {number} k_EClanSmallUpdateEvent=12 k_EClanSmallUpdateEvent value
     * @property {number} k_EClanPreAnnounceMajorUpdateEvent=13 k_EClanPreAnnounceMajorUpdateEvent value
     * @property {number} k_EClanMajorUpdateEvent=14 k_EClanMajorUpdateEvent value
     * @property {number} k_EClanDLCReleaseEvent=15 k_EClanDLCReleaseEvent value
     * @property {number} k_EClanFutureReleaseEvent=16 k_EClanFutureReleaseEvent value
     * @property {number} k_EClanESportTournamentStreamEvent=17 k_EClanESportTournamentStreamEvent value
     * @property {number} k_EClanDevStreamEvent=18 k_EClanDevStreamEvent value
     * @property {number} k_EClanFamousStreamEvent=19 k_EClanFamousStreamEvent value
     * @property {number} k_EClanGameSalesEvent=20 k_EClanGameSalesEvent value
     * @property {number} k_EClanGameItemSalesEvent=21 k_EClanGameItemSalesEvent value
     * @property {number} k_EClanInGameBonusXPEvent=22 k_EClanInGameBonusXPEvent value
     * @property {number} k_EClanInGameLootEvent=23 k_EClanInGameLootEvent value
     * @property {number} k_EClanInGamePerksEvent=24 k_EClanInGamePerksEvent value
     * @property {number} k_EClanInGameChallengeEvent=25 k_EClanInGameChallengeEvent value
     * @property {number} k_EClanInGameContestEvent=26 k_EClanInGameContestEvent value
     * @property {number} k_EClanIRLEvent=27 k_EClanIRLEvent value
     * @property {number} k_EClanNewsEvent=28 k_EClanNewsEvent value
     * @property {number} k_EClanBetaReleaseEvent=29 k_EClanBetaReleaseEvent value
     * @property {number} k_EClanInGameContentReleaseEvent=30 k_EClanInGameContentReleaseEvent value
     * @property {number} k_EClanFreeTrial=31 k_EClanFreeTrial value
     * @property {number} k_EClanSeasonRelease=32 k_EClanSeasonRelease value
     * @property {number} k_EClanSeasonUpdate=33 k_EClanSeasonUpdate value
     */
    $root.EProtoClanEventType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EClanOtherEvent"] = 1;
        values[valuesById[2] = "k_EClanGameEvent"] = 2;
        values[valuesById[3] = "k_EClanPartyEvent"] = 3;
        values[valuesById[4] = "k_EClanMeetingEvent"] = 4;
        values[valuesById[5] = "k_EClanSpecialCauseEvent"] = 5;
        values[valuesById[6] = "k_EClanMusicAndArtsEvent"] = 6;
        values[valuesById[7] = "k_EClanSportsEvent"] = 7;
        values[valuesById[8] = "k_EClanTripEvent"] = 8;
        values[valuesById[9] = "k_EClanChatEvent"] = 9;
        values[valuesById[10] = "k_EClanGameReleaseEvent"] = 10;
        values[valuesById[11] = "k_EClanBroadcastEvent"] = 11;
        values[valuesById[12] = "k_EClanSmallUpdateEvent"] = 12;
        values[valuesById[13] = "k_EClanPreAnnounceMajorUpdateEvent"] = 13;
        values[valuesById[14] = "k_EClanMajorUpdateEvent"] = 14;
        values[valuesById[15] = "k_EClanDLCReleaseEvent"] = 15;
        values[valuesById[16] = "k_EClanFutureReleaseEvent"] = 16;
        values[valuesById[17] = "k_EClanESportTournamentStreamEvent"] = 17;
        values[valuesById[18] = "k_EClanDevStreamEvent"] = 18;
        values[valuesById[19] = "k_EClanFamousStreamEvent"] = 19;
        values[valuesById[20] = "k_EClanGameSalesEvent"] = 20;
        values[valuesById[21] = "k_EClanGameItemSalesEvent"] = 21;
        values[valuesById[22] = "k_EClanInGameBonusXPEvent"] = 22;
        values[valuesById[23] = "k_EClanInGameLootEvent"] = 23;
        values[valuesById[24] = "k_EClanInGamePerksEvent"] = 24;
        values[valuesById[25] = "k_EClanInGameChallengeEvent"] = 25;
        values[valuesById[26] = "k_EClanInGameContestEvent"] = 26;
        values[valuesById[27] = "k_EClanIRLEvent"] = 27;
        values[valuesById[28] = "k_EClanNewsEvent"] = 28;
        values[valuesById[29] = "k_EClanBetaReleaseEvent"] = 29;
        values[valuesById[30] = "k_EClanInGameContentReleaseEvent"] = 30;
        values[valuesById[31] = "k_EClanFreeTrial"] = 31;
        values[valuesById[32] = "k_EClanSeasonRelease"] = 32;
        values[valuesById[33] = "k_EClanSeasonUpdate"] = 33;
        return values;
    })();
    
    $root.CMsgIPAddress = (function() {
    
        /**
         * Properties of a CMsgIPAddress.
         * @exports ICMsgIPAddress
         * @interface ICMsgIPAddress
         * @property {number|null} [v4] CMsgIPAddress v4
         * @property {Uint8Array|null} [v6] CMsgIPAddress v6
         */
    
        /**
         * Constructs a new CMsgIPAddress.
         * @exports CMsgIPAddress
         * @classdesc Represents a CMsgIPAddress.
         * @implements ICMsgIPAddress
         * @constructor
         * @param {ICMsgIPAddress=} [properties] Properties to set
         */
        function CMsgIPAddress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgIPAddress v4.
         * @member {number} v4
         * @memberof CMsgIPAddress
         * @instance
         */
        CMsgIPAddress.prototype.v4 = 0;
    
        /**
         * CMsgIPAddress v6.
         * @member {Uint8Array} v6
         * @memberof CMsgIPAddress
         * @instance
         */
        CMsgIPAddress.prototype.v6 = $util.newBuffer([]);
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * CMsgIPAddress ip.
         * @member {"v4"|"v6"|undefined} ip
         * @memberof CMsgIPAddress
         * @instance
         */
        Object.defineProperty(CMsgIPAddress.prototype, "ip", {
            get: $util.oneOfGetter($oneOfFields = ["v4", "v6"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new CMsgIPAddress instance using the specified properties.
         * @function create
         * @memberof CMsgIPAddress
         * @static
         * @param {ICMsgIPAddress=} [properties] Properties to set
         * @returns {CMsgIPAddress} CMsgIPAddress instance
         */
        CMsgIPAddress.create = function create(properties) {
            return new CMsgIPAddress(properties);
        };
    
        /**
         * Encodes the specified CMsgIPAddress message. Does not implicitly {@link CMsgIPAddress.verify|verify} messages.
         * @function encode
         * @memberof CMsgIPAddress
         * @static
         * @param {ICMsgIPAddress} message CMsgIPAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgIPAddress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.v4 != null && message.hasOwnProperty("v4"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.v4);
            if (message.v6 != null && message.hasOwnProperty("v6"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.v6);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgIPAddress message, length delimited. Does not implicitly {@link CMsgIPAddress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgIPAddress
         * @static
         * @param {ICMsgIPAddress} message CMsgIPAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgIPAddress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgIPAddress message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgIPAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgIPAddress} CMsgIPAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgIPAddress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgIPAddress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.v4 = reader.fixed32();
                    break;
                case 2:
                    message.v6 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgIPAddress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgIPAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgIPAddress} CMsgIPAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgIPAddress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgIPAddress message.
         * @function verify
         * @memberof CMsgIPAddress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgIPAddress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.v4 != null && message.hasOwnProperty("v4")) {
                properties.ip = 1;
                if (!$util.isInteger(message.v4))
                    return "v4: integer expected";
            }
            if (message.v6 != null && message.hasOwnProperty("v6")) {
                if (properties.ip === 1)
                    return "ip: multiple values";
                properties.ip = 1;
                if (!(message.v6 && typeof message.v6.length === "number" || $util.isString(message.v6)))
                    return "v6: buffer expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgIPAddress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgIPAddress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgIPAddress} CMsgIPAddress
         */
        CMsgIPAddress.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgIPAddress)
                return object;
            var message = new $root.CMsgIPAddress();
            if (object.v4 != null)
                message.v4 = object.v4 >>> 0;
            if (object.v6 != null)
                if (typeof object.v6 === "string")
                    $util.base64.decode(object.v6, message.v6 = $util.newBuffer($util.base64.length(object.v6)), 0);
                else if (object.v6.length)
                    message.v6 = object.v6;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgIPAddress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgIPAddress
         * @static
         * @param {CMsgIPAddress} message CMsgIPAddress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgIPAddress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.v4 != null && message.hasOwnProperty("v4")) {
                object.v4 = message.v4;
                if (options.oneofs)
                    object.ip = "v4";
            }
            if (message.v6 != null && message.hasOwnProperty("v6")) {
                object.v6 = options.bytes === String ? $util.base64.encode(message.v6, 0, message.v6.length) : options.bytes === Array ? Array.prototype.slice.call(message.v6) : message.v6;
                if (options.oneofs)
                    object.ip = "v6";
            }
            return object;
        };
    
        /**
         * Converts this CMsgIPAddress to JSON.
         * @function toJSON
         * @memberof CMsgIPAddress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgIPAddress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgIPAddress;
    })();
    
    $root.CMsgProtoBufHeader = (function() {
    
        /**
         * Properties of a CMsgProtoBufHeader.
         * @exports ICMsgProtoBufHeader
         * @interface ICMsgProtoBufHeader
         * @property {number|Long|null} [steamid] CMsgProtoBufHeader steamid
         * @property {number|null} [client_sessionid] CMsgProtoBufHeader client_sessionid
         * @property {number|null} [routing_appid] CMsgProtoBufHeader routing_appid
         * @property {number|Long|null} [jobid_source] CMsgProtoBufHeader jobid_source
         * @property {number|Long|null} [jobid_target] CMsgProtoBufHeader jobid_target
         * @property {string|null} [target_job_name] CMsgProtoBufHeader target_job_name
         * @property {number|null} [seq_num] CMsgProtoBufHeader seq_num
         * @property {number|null} [eresult] CMsgProtoBufHeader eresult
         * @property {string|null} [error_message] CMsgProtoBufHeader error_message
         * @property {number|null} [auth_account_flags] CMsgProtoBufHeader auth_account_flags
         * @property {number|null} [token_source] CMsgProtoBufHeader token_source
         * @property {boolean|null} [admin_spoofing_user] CMsgProtoBufHeader admin_spoofing_user
         * @property {number|null} [transport_error] CMsgProtoBufHeader transport_error
         * @property {number|Long|null} [messageid] CMsgProtoBufHeader messageid
         * @property {number|null} [publisher_group_id] CMsgProtoBufHeader publisher_group_id
         * @property {number|null} [sysid] CMsgProtoBufHeader sysid
         * @property {number|Long|null} [trace_tag] CMsgProtoBufHeader trace_tag
         * @property {number|null} [webapi_key_id] CMsgProtoBufHeader webapi_key_id
         * @property {boolean|null} [is_from_external_source] CMsgProtoBufHeader is_from_external_source
         * @property {Array.<number>|null} [forward_to_sysid] CMsgProtoBufHeader forward_to_sysid
         * @property {number|null} [cm_sysid] CMsgProtoBufHeader cm_sysid
         * @property {string|null} [wg_token] CMsgProtoBufHeader wg_token
         * @property {number|null} [ip] CMsgProtoBufHeader ip
         * @property {Uint8Array|null} [ip_v6] CMsgProtoBufHeader ip_v6
         */
    
        /**
         * Constructs a new CMsgProtoBufHeader.
         * @exports CMsgProtoBufHeader
         * @classdesc Represents a CMsgProtoBufHeader.
         * @implements ICMsgProtoBufHeader
         * @constructor
         * @param {ICMsgProtoBufHeader=} [properties] Properties to set
         */
        function CMsgProtoBufHeader(properties) {
            this.forward_to_sysid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgProtoBufHeader steamid.
         * @member {number|Long} steamid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgProtoBufHeader client_sessionid.
         * @member {number} client_sessionid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.client_sessionid = 0;
    
        /**
         * CMsgProtoBufHeader routing_appid.
         * @member {number} routing_appid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.routing_appid = 0;
    
        /**
         * CMsgProtoBufHeader jobid_source.
         * @member {number|Long} jobid_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.jobid_source = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;
    
        /**
         * CMsgProtoBufHeader jobid_target.
         * @member {number|Long} jobid_target
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.jobid_target = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;
    
        /**
         * CMsgProtoBufHeader target_job_name.
         * @member {string} target_job_name
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.target_job_name = "";
    
        /**
         * CMsgProtoBufHeader seq_num.
         * @member {number} seq_num
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.seq_num = 0;
    
        /**
         * CMsgProtoBufHeader eresult.
         * @member {number} eresult
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.eresult = 2;
    
        /**
         * CMsgProtoBufHeader error_message.
         * @member {string} error_message
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.error_message = "";
    
        /**
         * CMsgProtoBufHeader auth_account_flags.
         * @member {number} auth_account_flags
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.auth_account_flags = 0;
    
        /**
         * CMsgProtoBufHeader token_source.
         * @member {number} token_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.token_source = 0;
    
        /**
         * CMsgProtoBufHeader admin_spoofing_user.
         * @member {boolean} admin_spoofing_user
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.admin_spoofing_user = false;
    
        /**
         * CMsgProtoBufHeader transport_error.
         * @member {number} transport_error
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.transport_error = 1;
    
        /**
         * CMsgProtoBufHeader messageid.
         * @member {number|Long} messageid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.messageid = $util.Long ? $util.Long.fromBits(-1,-1,true) : 18446744073709552000;
    
        /**
         * CMsgProtoBufHeader publisher_group_id.
         * @member {number} publisher_group_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.publisher_group_id = 0;
    
        /**
         * CMsgProtoBufHeader sysid.
         * @member {number} sysid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.sysid = 0;
    
        /**
         * CMsgProtoBufHeader trace_tag.
         * @member {number|Long} trace_tag
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.trace_tag = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CMsgProtoBufHeader webapi_key_id.
         * @member {number} webapi_key_id
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.webapi_key_id = 0;
    
        /**
         * CMsgProtoBufHeader is_from_external_source.
         * @member {boolean} is_from_external_source
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.is_from_external_source = false;
    
        /**
         * CMsgProtoBufHeader forward_to_sysid.
         * @member {Array.<number>} forward_to_sysid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.forward_to_sysid = $util.emptyArray;
    
        /**
         * CMsgProtoBufHeader cm_sysid.
         * @member {number} cm_sysid
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.cm_sysid = 0;
    
        /**
         * CMsgProtoBufHeader wg_token.
         * @member {string} wg_token
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.wg_token = "";
    
        /**
         * CMsgProtoBufHeader ip.
         * @member {number} ip
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.ip = 0;
    
        /**
         * CMsgProtoBufHeader ip_v6.
         * @member {Uint8Array} ip_v6
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        CMsgProtoBufHeader.prototype.ip_v6 = $util.newBuffer([]);
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * CMsgProtoBufHeader ip_addr.
         * @member {"ip"|"ip_v6"|undefined} ip_addr
         * @memberof CMsgProtoBufHeader
         * @instance
         */
        Object.defineProperty(CMsgProtoBufHeader.prototype, "ip_addr", {
            get: $util.oneOfGetter($oneOfFields = ["ip", "ip_v6"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new CMsgProtoBufHeader instance using the specified properties.
         * @function create
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader=} [properties] Properties to set
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader instance
         */
        CMsgProtoBufHeader.create = function create(properties) {
            return new CMsgProtoBufHeader(properties);
        };
    
        /**
         * Encodes the specified CMsgProtoBufHeader message. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
         * @function encode
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.client_sessionid != null && message.hasOwnProperty("client_sessionid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.client_sessionid);
            if (message.routing_appid != null && message.hasOwnProperty("routing_appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.routing_appid);
            if (message.jobid_source != null && message.hasOwnProperty("jobid_source"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.jobid_source);
            if (message.jobid_target != null && message.hasOwnProperty("jobid_target"))
                writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.jobid_target);
            if (message.target_job_name != null && message.hasOwnProperty("target_job_name"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.target_job_name);
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.eresult);
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.error_message);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.ip);
            if (message.auth_account_flags != null && message.hasOwnProperty("auth_account_flags"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.auth_account_flags);
            if (message.transport_error != null && message.hasOwnProperty("transport_error"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.transport_error);
            if (message.messageid != null && message.hasOwnProperty("messageid"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.messageid);
            if (message.publisher_group_id != null && message.hasOwnProperty("publisher_group_id"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.publisher_group_id);
            if (message.sysid != null && message.hasOwnProperty("sysid"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.sysid);
            if (message.trace_tag != null && message.hasOwnProperty("trace_tag"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint64(message.trace_tag);
            if (message.token_source != null && message.hasOwnProperty("token_source"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.token_source);
            if (message.admin_spoofing_user != null && message.hasOwnProperty("admin_spoofing_user"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.admin_spoofing_user);
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.seq_num);
            if (message.webapi_key_id != null && message.hasOwnProperty("webapi_key_id"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.webapi_key_id);
            if (message.is_from_external_source != null && message.hasOwnProperty("is_from_external_source"))
                writer.uint32(/* id 26, wireType 0 =*/208).bool(message.is_from_external_source);
            if (message.forward_to_sysid != null && message.forward_to_sysid.length)
                for (var i = 0; i < message.forward_to_sysid.length; ++i)
                    writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.forward_to_sysid[i]);
            if (message.cm_sysid != null && message.hasOwnProperty("cm_sysid"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.cm_sysid);
            if (message.ip_v6 != null && message.hasOwnProperty("ip_v6"))
                writer.uint32(/* id 29, wireType 2 =*/234).bytes(message.ip_v6);
            if (message.wg_token != null && message.hasOwnProperty("wg_token"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.wg_token);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgProtoBufHeader message, length delimited. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {ICMsgProtoBufHeader} message CMsgProtoBufHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtoBufHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgProtoBufHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.client_sessionid = reader.int32();
                    break;
                case 3:
                    message.routing_appid = reader.uint32();
                    break;
                case 10:
                    message.jobid_source = reader.fixed64();
                    break;
                case 11:
                    message.jobid_target = reader.fixed64();
                    break;
                case 12:
                    message.target_job_name = reader.string();
                    break;
                case 24:
                    message.seq_num = reader.int32();
                    break;
                case 13:
                    message.eresult = reader.int32();
                    break;
                case 14:
                    message.error_message = reader.string();
                    break;
                case 16:
                    message.auth_account_flags = reader.uint32();
                    break;
                case 22:
                    message.token_source = reader.uint32();
                    break;
                case 23:
                    message.admin_spoofing_user = reader.bool();
                    break;
                case 17:
                    message.transport_error = reader.int32();
                    break;
                case 18:
                    message.messageid = reader.uint64();
                    break;
                case 19:
                    message.publisher_group_id = reader.uint32();
                    break;
                case 20:
                    message.sysid = reader.uint32();
                    break;
                case 21:
                    message.trace_tag = reader.uint64();
                    break;
                case 25:
                    message.webapi_key_id = reader.uint32();
                    break;
                case 26:
                    message.is_from_external_source = reader.bool();
                    break;
                case 27:
                    if (!(message.forward_to_sysid && message.forward_to_sysid.length))
                        message.forward_to_sysid = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.forward_to_sysid.push(reader.uint32());
                    } else
                        message.forward_to_sysid.push(reader.uint32());
                    break;
                case 28:
                    message.cm_sysid = reader.uint32();
                    break;
                case 30:
                    message.wg_token = reader.string();
                    break;
                case 15:
                    message.ip = reader.uint32();
                    break;
                case 29:
                    message.ip_v6 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgProtoBufHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtoBufHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgProtoBufHeader message.
         * @function verify
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgProtoBufHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.client_sessionid != null && message.hasOwnProperty("client_sessionid"))
                if (!$util.isInteger(message.client_sessionid))
                    return "client_sessionid: integer expected";
            if (message.routing_appid != null && message.hasOwnProperty("routing_appid"))
                if (!$util.isInteger(message.routing_appid))
                    return "routing_appid: integer expected";
            if (message.jobid_source != null && message.hasOwnProperty("jobid_source"))
                if (!$util.isInteger(message.jobid_source) && !(message.jobid_source && $util.isInteger(message.jobid_source.low) && $util.isInteger(message.jobid_source.high)))
                    return "jobid_source: integer|Long expected";
            if (message.jobid_target != null && message.hasOwnProperty("jobid_target"))
                if (!$util.isInteger(message.jobid_target) && !(message.jobid_target && $util.isInteger(message.jobid_target.low) && $util.isInteger(message.jobid_target.high)))
                    return "jobid_target: integer|Long expected";
            if (message.target_job_name != null && message.hasOwnProperty("target_job_name"))
                if (!$util.isString(message.target_job_name))
                    return "target_job_name: string expected";
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                if (!$util.isInteger(message.seq_num))
                    return "seq_num: integer expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                if (!$util.isString(message.error_message))
                    return "error_message: string expected";
            if (message.auth_account_flags != null && message.hasOwnProperty("auth_account_flags"))
                if (!$util.isInteger(message.auth_account_flags))
                    return "auth_account_flags: integer expected";
            if (message.token_source != null && message.hasOwnProperty("token_source"))
                if (!$util.isInteger(message.token_source))
                    return "token_source: integer expected";
            if (message.admin_spoofing_user != null && message.hasOwnProperty("admin_spoofing_user"))
                if (typeof message.admin_spoofing_user !== "boolean")
                    return "admin_spoofing_user: boolean expected";
            if (message.transport_error != null && message.hasOwnProperty("transport_error"))
                if (!$util.isInteger(message.transport_error))
                    return "transport_error: integer expected";
            if (message.messageid != null && message.hasOwnProperty("messageid"))
                if (!$util.isInteger(message.messageid) && !(message.messageid && $util.isInteger(message.messageid.low) && $util.isInteger(message.messageid.high)))
                    return "messageid: integer|Long expected";
            if (message.publisher_group_id != null && message.hasOwnProperty("publisher_group_id"))
                if (!$util.isInteger(message.publisher_group_id))
                    return "publisher_group_id: integer expected";
            if (message.sysid != null && message.hasOwnProperty("sysid"))
                if (!$util.isInteger(message.sysid))
                    return "sysid: integer expected";
            if (message.trace_tag != null && message.hasOwnProperty("trace_tag"))
                if (!$util.isInteger(message.trace_tag) && !(message.trace_tag && $util.isInteger(message.trace_tag.low) && $util.isInteger(message.trace_tag.high)))
                    return "trace_tag: integer|Long expected";
            if (message.webapi_key_id != null && message.hasOwnProperty("webapi_key_id"))
                if (!$util.isInteger(message.webapi_key_id))
                    return "webapi_key_id: integer expected";
            if (message.is_from_external_source != null && message.hasOwnProperty("is_from_external_source"))
                if (typeof message.is_from_external_source !== "boolean")
                    return "is_from_external_source: boolean expected";
            if (message.forward_to_sysid != null && message.hasOwnProperty("forward_to_sysid")) {
                if (!Array.isArray(message.forward_to_sysid))
                    return "forward_to_sysid: array expected";
                for (var i = 0; i < message.forward_to_sysid.length; ++i)
                    if (!$util.isInteger(message.forward_to_sysid[i]))
                        return "forward_to_sysid: integer[] expected";
            }
            if (message.cm_sysid != null && message.hasOwnProperty("cm_sysid"))
                if (!$util.isInteger(message.cm_sysid))
                    return "cm_sysid: integer expected";
            if (message.wg_token != null && message.hasOwnProperty("wg_token"))
                if (!$util.isString(message.wg_token))
                    return "wg_token: string expected";
            if (message.ip != null && message.hasOwnProperty("ip")) {
                properties.ip_addr = 1;
                if (!$util.isInteger(message.ip))
                    return "ip: integer expected";
            }
            if (message.ip_v6 != null && message.hasOwnProperty("ip_v6")) {
                if (properties.ip_addr === 1)
                    return "ip_addr: multiple values";
                properties.ip_addr = 1;
                if (!(message.ip_v6 && typeof message.ip_v6.length === "number" || $util.isString(message.ip_v6)))
                    return "ip_v6: buffer expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgProtoBufHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgProtoBufHeader} CMsgProtoBufHeader
         */
        CMsgProtoBufHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgProtoBufHeader)
                return object;
            var message = new $root.CMsgProtoBufHeader();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.client_sessionid != null)
                message.client_sessionid = object.client_sessionid | 0;
            if (object.routing_appid != null)
                message.routing_appid = object.routing_appid >>> 0;
            if (object.jobid_source != null)
                if ($util.Long)
                    (message.jobid_source = $util.Long.fromValue(object.jobid_source)).unsigned = false;
                else if (typeof object.jobid_source === "string")
                    message.jobid_source = parseInt(object.jobid_source, 10);
                else if (typeof object.jobid_source === "number")
                    message.jobid_source = object.jobid_source;
                else if (typeof object.jobid_source === "object")
                    message.jobid_source = new $util.LongBits(object.jobid_source.low >>> 0, object.jobid_source.high >>> 0).toNumber();
            if (object.jobid_target != null)
                if ($util.Long)
                    (message.jobid_target = $util.Long.fromValue(object.jobid_target)).unsigned = false;
                else if (typeof object.jobid_target === "string")
                    message.jobid_target = parseInt(object.jobid_target, 10);
                else if (typeof object.jobid_target === "number")
                    message.jobid_target = object.jobid_target;
                else if (typeof object.jobid_target === "object")
                    message.jobid_target = new $util.LongBits(object.jobid_target.low >>> 0, object.jobid_target.high >>> 0).toNumber();
            if (object.target_job_name != null)
                message.target_job_name = String(object.target_job_name);
            if (object.seq_num != null)
                message.seq_num = object.seq_num | 0;
            if (object.eresult != null)
                message.eresult = object.eresult | 0;
            if (object.error_message != null)
                message.error_message = String(object.error_message);
            if (object.auth_account_flags != null)
                message.auth_account_flags = object.auth_account_flags >>> 0;
            if (object.token_source != null)
                message.token_source = object.token_source >>> 0;
            if (object.admin_spoofing_user != null)
                message.admin_spoofing_user = Boolean(object.admin_spoofing_user);
            if (object.transport_error != null)
                message.transport_error = object.transport_error | 0;
            if (object.messageid != null)
                if ($util.Long)
                    (message.messageid = $util.Long.fromValue(object.messageid)).unsigned = true;
                else if (typeof object.messageid === "string")
                    message.messageid = parseInt(object.messageid, 10);
                else if (typeof object.messageid === "number")
                    message.messageid = object.messageid;
                else if (typeof object.messageid === "object")
                    message.messageid = new $util.LongBits(object.messageid.low >>> 0, object.messageid.high >>> 0).toNumber(true);
            if (object.publisher_group_id != null)
                message.publisher_group_id = object.publisher_group_id >>> 0;
            if (object.sysid != null)
                message.sysid = object.sysid >>> 0;
            if (object.trace_tag != null)
                if ($util.Long)
                    (message.trace_tag = $util.Long.fromValue(object.trace_tag)).unsigned = true;
                else if (typeof object.trace_tag === "string")
                    message.trace_tag = parseInt(object.trace_tag, 10);
                else if (typeof object.trace_tag === "number")
                    message.trace_tag = object.trace_tag;
                else if (typeof object.trace_tag === "object")
                    message.trace_tag = new $util.LongBits(object.trace_tag.low >>> 0, object.trace_tag.high >>> 0).toNumber(true);
            if (object.webapi_key_id != null)
                message.webapi_key_id = object.webapi_key_id >>> 0;
            if (object.is_from_external_source != null)
                message.is_from_external_source = Boolean(object.is_from_external_source);
            if (object.forward_to_sysid) {
                if (!Array.isArray(object.forward_to_sysid))
                    throw TypeError(".CMsgProtoBufHeader.forward_to_sysid: array expected");
                message.forward_to_sysid = [];
                for (var i = 0; i < object.forward_to_sysid.length; ++i)
                    message.forward_to_sysid[i] = object.forward_to_sysid[i] >>> 0;
            }
            if (object.cm_sysid != null)
                message.cm_sysid = object.cm_sysid >>> 0;
            if (object.wg_token != null)
                message.wg_token = String(object.wg_token);
            if (object.ip != null)
                message.ip = object.ip >>> 0;
            if (object.ip_v6 != null)
                if (typeof object.ip_v6 === "string")
                    $util.base64.decode(object.ip_v6, message.ip_v6 = $util.newBuffer($util.base64.length(object.ip_v6)), 0);
                else if (object.ip_v6.length)
                    message.ip_v6 = object.ip_v6;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgProtoBufHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgProtoBufHeader
         * @static
         * @param {CMsgProtoBufHeader} message CMsgProtoBufHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgProtoBufHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.forward_to_sysid = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.client_sessionid = 0;
                object.routing_appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(-1, 2147483647, false);
                    object.jobid_source = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.jobid_source = options.longs === String ? "9223372036854775807" : 9223372036854776000;
                if ($util.Long) {
                    var long = new $util.Long(-1, 2147483647, false);
                    object.jobid_target = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.jobid_target = options.longs === String ? "9223372036854775807" : 9223372036854776000;
                object.target_job_name = "";
                object.eresult = 2;
                object.error_message = "";
                object.auth_account_flags = 0;
                object.transport_error = 1;
                if ($util.Long) {
                    var long = new $util.Long(-1, -1, true);
                    object.messageid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.messageid = options.longs === String ? "18446744073709551615" : 18446744073709552000;
                object.publisher_group_id = 0;
                object.sysid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.trace_tag = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.trace_tag = options.longs === String ? "0" : 0;
                object.token_source = 0;
                object.admin_spoofing_user = false;
                object.seq_num = 0;
                object.webapi_key_id = 0;
                object.is_from_external_source = false;
                object.cm_sysid = 0;
                object.wg_token = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.client_sessionid != null && message.hasOwnProperty("client_sessionid"))
                object.client_sessionid = message.client_sessionid;
            if (message.routing_appid != null && message.hasOwnProperty("routing_appid"))
                object.routing_appid = message.routing_appid;
            if (message.jobid_source != null && message.hasOwnProperty("jobid_source"))
                if (typeof message.jobid_source === "number")
                    object.jobid_source = options.longs === String ? String(message.jobid_source) : message.jobid_source;
                else
                    object.jobid_source = options.longs === String ? $util.Long.prototype.toString.call(message.jobid_source) : options.longs === Number ? new $util.LongBits(message.jobid_source.low >>> 0, message.jobid_source.high >>> 0).toNumber() : message.jobid_source;
            if (message.jobid_target != null && message.hasOwnProperty("jobid_target"))
                if (typeof message.jobid_target === "number")
                    object.jobid_target = options.longs === String ? String(message.jobid_target) : message.jobid_target;
                else
                    object.jobid_target = options.longs === String ? $util.Long.prototype.toString.call(message.jobid_target) : options.longs === Number ? new $util.LongBits(message.jobid_target.low >>> 0, message.jobid_target.high >>> 0).toNumber() : message.jobid_target;
            if (message.target_job_name != null && message.hasOwnProperty("target_job_name"))
                object.target_job_name = message.target_job_name;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.error_message != null && message.hasOwnProperty("error_message"))
                object.error_message = message.error_message;
            if (message.ip != null && message.hasOwnProperty("ip")) {
                object.ip = message.ip;
                if (options.oneofs)
                    object.ip_addr = "ip";
            }
            if (message.auth_account_flags != null && message.hasOwnProperty("auth_account_flags"))
                object.auth_account_flags = message.auth_account_flags;
            if (message.transport_error != null && message.hasOwnProperty("transport_error"))
                object.transport_error = message.transport_error;
            if (message.messageid != null && message.hasOwnProperty("messageid"))
                if (typeof message.messageid === "number")
                    object.messageid = options.longs === String ? String(message.messageid) : message.messageid;
                else
                    object.messageid = options.longs === String ? $util.Long.prototype.toString.call(message.messageid) : options.longs === Number ? new $util.LongBits(message.messageid.low >>> 0, message.messageid.high >>> 0).toNumber(true) : message.messageid;
            if (message.publisher_group_id != null && message.hasOwnProperty("publisher_group_id"))
                object.publisher_group_id = message.publisher_group_id;
            if (message.sysid != null && message.hasOwnProperty("sysid"))
                object.sysid = message.sysid;
            if (message.trace_tag != null && message.hasOwnProperty("trace_tag"))
                if (typeof message.trace_tag === "number")
                    object.trace_tag = options.longs === String ? String(message.trace_tag) : message.trace_tag;
                else
                    object.trace_tag = options.longs === String ? $util.Long.prototype.toString.call(message.trace_tag) : options.longs === Number ? new $util.LongBits(message.trace_tag.low >>> 0, message.trace_tag.high >>> 0).toNumber(true) : message.trace_tag;
            if (message.token_source != null && message.hasOwnProperty("token_source"))
                object.token_source = message.token_source;
            if (message.admin_spoofing_user != null && message.hasOwnProperty("admin_spoofing_user"))
                object.admin_spoofing_user = message.admin_spoofing_user;
            if (message.seq_num != null && message.hasOwnProperty("seq_num"))
                object.seq_num = message.seq_num;
            if (message.webapi_key_id != null && message.hasOwnProperty("webapi_key_id"))
                object.webapi_key_id = message.webapi_key_id;
            if (message.is_from_external_source != null && message.hasOwnProperty("is_from_external_source"))
                object.is_from_external_source = message.is_from_external_source;
            if (message.forward_to_sysid && message.forward_to_sysid.length) {
                object.forward_to_sysid = [];
                for (var j = 0; j < message.forward_to_sysid.length; ++j)
                    object.forward_to_sysid[j] = message.forward_to_sysid[j];
            }
            if (message.cm_sysid != null && message.hasOwnProperty("cm_sysid"))
                object.cm_sysid = message.cm_sysid;
            if (message.ip_v6 != null && message.hasOwnProperty("ip_v6")) {
                object.ip_v6 = options.bytes === String ? $util.base64.encode(message.ip_v6, 0, message.ip_v6.length) : options.bytes === Array ? Array.prototype.slice.call(message.ip_v6) : message.ip_v6;
                if (options.oneofs)
                    object.ip_addr = "ip_v6";
            }
            if (message.wg_token != null && message.hasOwnProperty("wg_token"))
                object.wg_token = message.wg_token;
            return object;
        };
    
        /**
         * Converts this CMsgProtoBufHeader to JSON.
         * @function toJSON
         * @memberof CMsgProtoBufHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgProtoBufHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgProtoBufHeader;
    })();
    
    $root.CMsgMulti = (function() {
    
        /**
         * Properties of a CMsgMulti.
         * @exports ICMsgMulti
         * @interface ICMsgMulti
         * @property {number|null} [size_unzipped] CMsgMulti size_unzipped
         * @property {Uint8Array|null} [message_body] CMsgMulti message_body
         */
    
        /**
         * Constructs a new CMsgMulti.
         * @exports CMsgMulti
         * @classdesc Represents a CMsgMulti.
         * @implements ICMsgMulti
         * @constructor
         * @param {ICMsgMulti=} [properties] Properties to set
         */
        function CMsgMulti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgMulti size_unzipped.
         * @member {number} size_unzipped
         * @memberof CMsgMulti
         * @instance
         */
        CMsgMulti.prototype.size_unzipped = 0;
    
        /**
         * CMsgMulti message_body.
         * @member {Uint8Array} message_body
         * @memberof CMsgMulti
         * @instance
         */
        CMsgMulti.prototype.message_body = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgMulti instance using the specified properties.
         * @function create
         * @memberof CMsgMulti
         * @static
         * @param {ICMsgMulti=} [properties] Properties to set
         * @returns {CMsgMulti} CMsgMulti instance
         */
        CMsgMulti.create = function create(properties) {
            return new CMsgMulti(properties);
        };
    
        /**
         * Encodes the specified CMsgMulti message. Does not implicitly {@link CMsgMulti.verify|verify} messages.
         * @function encode
         * @memberof CMsgMulti
         * @static
         * @param {ICMsgMulti} message CMsgMulti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMulti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.size_unzipped != null && message.hasOwnProperty("size_unzipped"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.size_unzipped);
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.message_body);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgMulti message, length delimited. Does not implicitly {@link CMsgMulti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgMulti
         * @static
         * @param {ICMsgMulti} message CMsgMulti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgMulti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgMulti message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgMulti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgMulti} CMsgMulti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMulti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgMulti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.size_unzipped = reader.uint32();
                    break;
                case 2:
                    message.message_body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgMulti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgMulti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgMulti} CMsgMulti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgMulti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgMulti message.
         * @function verify
         * @memberof CMsgMulti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgMulti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.size_unzipped != null && message.hasOwnProperty("size_unzipped"))
                if (!$util.isInteger(message.size_unzipped))
                    return "size_unzipped: integer expected";
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                if (!(message.message_body && typeof message.message_body.length === "number" || $util.isString(message.message_body)))
                    return "message_body: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgMulti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgMulti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgMulti} CMsgMulti
         */
        CMsgMulti.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgMulti)
                return object;
            var message = new $root.CMsgMulti();
            if (object.size_unzipped != null)
                message.size_unzipped = object.size_unzipped >>> 0;
            if (object.message_body != null)
                if (typeof object.message_body === "string")
                    $util.base64.decode(object.message_body, message.message_body = $util.newBuffer($util.base64.length(object.message_body)), 0);
                else if (object.message_body.length)
                    message.message_body = object.message_body;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgMulti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgMulti
         * @static
         * @param {CMsgMulti} message CMsgMulti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgMulti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.size_unzipped = 0;
                if (options.bytes === String)
                    object.message_body = "";
                else {
                    object.message_body = [];
                    if (options.bytes !== Array)
                        object.message_body = $util.newBuffer(object.message_body);
                }
            }
            if (message.size_unzipped != null && message.hasOwnProperty("size_unzipped"))
                object.size_unzipped = message.size_unzipped;
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                object.message_body = options.bytes === String ? $util.base64.encode(message.message_body, 0, message.message_body.length) : options.bytes === Array ? Array.prototype.slice.call(message.message_body) : message.message_body;
            return object;
        };
    
        /**
         * Converts this CMsgMulti to JSON.
         * @function toJSON
         * @memberof CMsgMulti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgMulti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgMulti;
    })();
    
    $root.CMsgProtobufWrapped = (function() {
    
        /**
         * Properties of a CMsgProtobufWrapped.
         * @exports ICMsgProtobufWrapped
         * @interface ICMsgProtobufWrapped
         * @property {Uint8Array|null} [message_body] CMsgProtobufWrapped message_body
         */
    
        /**
         * Constructs a new CMsgProtobufWrapped.
         * @exports CMsgProtobufWrapped
         * @classdesc Represents a CMsgProtobufWrapped.
         * @implements ICMsgProtobufWrapped
         * @constructor
         * @param {ICMsgProtobufWrapped=} [properties] Properties to set
         */
        function CMsgProtobufWrapped(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgProtobufWrapped message_body.
         * @member {Uint8Array} message_body
         * @memberof CMsgProtobufWrapped
         * @instance
         */
        CMsgProtobufWrapped.prototype.message_body = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgProtobufWrapped instance using the specified properties.
         * @function create
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {ICMsgProtobufWrapped=} [properties] Properties to set
         * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped instance
         */
        CMsgProtobufWrapped.create = function create(properties) {
            return new CMsgProtobufWrapped(properties);
        };
    
        /**
         * Encodes the specified CMsgProtobufWrapped message. Does not implicitly {@link CMsgProtobufWrapped.verify|verify} messages.
         * @function encode
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {ICMsgProtobufWrapped} message CMsgProtobufWrapped message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtobufWrapped.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.message_body);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgProtobufWrapped message, length delimited. Does not implicitly {@link CMsgProtobufWrapped.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {ICMsgProtobufWrapped} message CMsgProtobufWrapped message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgProtobufWrapped.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgProtobufWrapped message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtobufWrapped.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgProtobufWrapped();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message_body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgProtobufWrapped message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgProtobufWrapped.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgProtobufWrapped message.
         * @function verify
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgProtobufWrapped.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                if (!(message.message_body && typeof message.message_body.length === "number" || $util.isString(message.message_body)))
                    return "message_body: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgProtobufWrapped message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgProtobufWrapped} CMsgProtobufWrapped
         */
        CMsgProtobufWrapped.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgProtobufWrapped)
                return object;
            var message = new $root.CMsgProtobufWrapped();
            if (object.message_body != null)
                if (typeof object.message_body === "string")
                    $util.base64.decode(object.message_body, message.message_body = $util.newBuffer($util.base64.length(object.message_body)), 0);
                else if (object.message_body.length)
                    message.message_body = object.message_body;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgProtobufWrapped message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgProtobufWrapped
         * @static
         * @param {CMsgProtobufWrapped} message CMsgProtobufWrapped
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgProtobufWrapped.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.message_body = "";
                else {
                    object.message_body = [];
                    if (options.bytes !== Array)
                        object.message_body = $util.newBuffer(object.message_body);
                }
            if (message.message_body != null && message.hasOwnProperty("message_body"))
                object.message_body = options.bytes === String ? $util.base64.encode(message.message_body, 0, message.message_body.length) : options.bytes === Array ? Array.prototype.slice.call(message.message_body) : message.message_body;
            return object;
        };
    
        /**
         * Converts this CMsgProtobufWrapped to JSON.
         * @function toJSON
         * @memberof CMsgProtobufWrapped
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgProtobufWrapped.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgProtobufWrapped;
    })();
    
    $root.CMsgAuthTicket = (function() {
    
        /**
         * Properties of a CMsgAuthTicket.
         * @exports ICMsgAuthTicket
         * @interface ICMsgAuthTicket
         * @property {number|null} [estate] CMsgAuthTicket estate
         * @property {number|null} [eresult] CMsgAuthTicket eresult
         * @property {number|Long|null} [steamid] CMsgAuthTicket steamid
         * @property {number|Long|null} [gameid] CMsgAuthTicket gameid
         * @property {number|null} [h_steam_pipe] CMsgAuthTicket h_steam_pipe
         * @property {number|null} [ticket_crc] CMsgAuthTicket ticket_crc
         * @property {Uint8Array|null} [ticket] CMsgAuthTicket ticket
         */
    
        /**
         * Constructs a new CMsgAuthTicket.
         * @exports CMsgAuthTicket
         * @classdesc Represents a CMsgAuthTicket.
         * @implements ICMsgAuthTicket
         * @constructor
         * @param {ICMsgAuthTicket=} [properties] Properties to set
         */
        function CMsgAuthTicket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAuthTicket estate.
         * @member {number} estate
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.estate = 0;
    
        /**
         * CMsgAuthTicket eresult.
         * @member {number} eresult
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.eresult = 2;
    
        /**
         * CMsgAuthTicket steamid.
         * @member {number|Long} steamid
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgAuthTicket gameid.
         * @member {number|Long} gameid
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.gameid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgAuthTicket h_steam_pipe.
         * @member {number} h_steam_pipe
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.h_steam_pipe = 0;
    
        /**
         * CMsgAuthTicket ticket_crc.
         * @member {number} ticket_crc
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.ticket_crc = 0;
    
        /**
         * CMsgAuthTicket ticket.
         * @member {Uint8Array} ticket
         * @memberof CMsgAuthTicket
         * @instance
         */
        CMsgAuthTicket.prototype.ticket = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgAuthTicket instance using the specified properties.
         * @function create
         * @memberof CMsgAuthTicket
         * @static
         * @param {ICMsgAuthTicket=} [properties] Properties to set
         * @returns {CMsgAuthTicket} CMsgAuthTicket instance
         */
        CMsgAuthTicket.create = function create(properties) {
            return new CMsgAuthTicket(properties);
        };
    
        /**
         * Encodes the specified CMsgAuthTicket message. Does not implicitly {@link CMsgAuthTicket.verify|verify} messages.
         * @function encode
         * @memberof CMsgAuthTicket
         * @static
         * @param {ICMsgAuthTicket} message CMsgAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAuthTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.estate != null && message.hasOwnProperty("estate"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.estate);
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.eresult);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid);
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.gameid);
            if (message.h_steam_pipe != null && message.hasOwnProperty("h_steam_pipe"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.h_steam_pipe);
            if (message.ticket_crc != null && message.hasOwnProperty("ticket_crc"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.ticket_crc);
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.ticket);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAuthTicket message, length delimited. Does not implicitly {@link CMsgAuthTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAuthTicket
         * @static
         * @param {ICMsgAuthTicket} message CMsgAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAuthTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAuthTicket message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAuthTicket} CMsgAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAuthTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAuthTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.estate = reader.uint32();
                    break;
                case 2:
                    message.eresult = reader.uint32();
                    break;
                case 3:
                    message.steamid = reader.fixed64();
                    break;
                case 4:
                    message.gameid = reader.fixed64();
                    break;
                case 5:
                    message.h_steam_pipe = reader.uint32();
                    break;
                case 6:
                    message.ticket_crc = reader.uint32();
                    break;
                case 7:
                    message.ticket = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAuthTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAuthTicket} CMsgAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAuthTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAuthTicket message.
         * @function verify
         * @memberof CMsgAuthTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAuthTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.estate != null && message.hasOwnProperty("estate"))
                if (!$util.isInteger(message.estate))
                    return "estate: integer expected";
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                if (!$util.isInteger(message.eresult))
                    return "eresult: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                if (!$util.isInteger(message.gameid) && !(message.gameid && $util.isInteger(message.gameid.low) && $util.isInteger(message.gameid.high)))
                    return "gameid: integer|Long expected";
            if (message.h_steam_pipe != null && message.hasOwnProperty("h_steam_pipe"))
                if (!$util.isInteger(message.h_steam_pipe))
                    return "h_steam_pipe: integer expected";
            if (message.ticket_crc != null && message.hasOwnProperty("ticket_crc"))
                if (!$util.isInteger(message.ticket_crc))
                    return "ticket_crc: integer expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!(message.ticket && typeof message.ticket.length === "number" || $util.isString(message.ticket)))
                    return "ticket: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgAuthTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAuthTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAuthTicket} CMsgAuthTicket
         */
        CMsgAuthTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAuthTicket)
                return object;
            var message = new $root.CMsgAuthTicket();
            if (object.estate != null)
                message.estate = object.estate >>> 0;
            if (object.eresult != null)
                message.eresult = object.eresult >>> 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.gameid != null)
                if ($util.Long)
                    (message.gameid = $util.Long.fromValue(object.gameid)).unsigned = false;
                else if (typeof object.gameid === "string")
                    message.gameid = parseInt(object.gameid, 10);
                else if (typeof object.gameid === "number")
                    message.gameid = object.gameid;
                else if (typeof object.gameid === "object")
                    message.gameid = new $util.LongBits(object.gameid.low >>> 0, object.gameid.high >>> 0).toNumber();
            if (object.h_steam_pipe != null)
                message.h_steam_pipe = object.h_steam_pipe >>> 0;
            if (object.ticket_crc != null)
                message.ticket_crc = object.ticket_crc >>> 0;
            if (object.ticket != null)
                if (typeof object.ticket === "string")
                    $util.base64.decode(object.ticket, message.ticket = $util.newBuffer($util.base64.length(object.ticket)), 0);
                else if (object.ticket.length)
                    message.ticket = object.ticket;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAuthTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAuthTicket
         * @static
         * @param {CMsgAuthTicket} message CMsgAuthTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAuthTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.estate = 0;
                object.eresult = 2;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gameid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameid = options.longs === String ? "0" : 0;
                object.h_steam_pipe = 0;
                object.ticket_crc = 0;
                if (options.bytes === String)
                    object.ticket = "";
                else {
                    object.ticket = [];
                    if (options.bytes !== Array)
                        object.ticket = $util.newBuffer(object.ticket);
                }
            }
            if (message.estate != null && message.hasOwnProperty("estate"))
                object.estate = message.estate;
            if (message.eresult != null && message.hasOwnProperty("eresult"))
                object.eresult = message.eresult;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                if (typeof message.gameid === "number")
                    object.gameid = options.longs === String ? String(message.gameid) : message.gameid;
                else
                    object.gameid = options.longs === String ? $util.Long.prototype.toString.call(message.gameid) : options.longs === Number ? new $util.LongBits(message.gameid.low >>> 0, message.gameid.high >>> 0).toNumber() : message.gameid;
            if (message.h_steam_pipe != null && message.hasOwnProperty("h_steam_pipe"))
                object.h_steam_pipe = message.h_steam_pipe;
            if (message.ticket_crc != null && message.hasOwnProperty("ticket_crc"))
                object.ticket_crc = message.ticket_crc;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = options.bytes === String ? $util.base64.encode(message.ticket, 0, message.ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.ticket) : message.ticket;
            return object;
        };
    
        /**
         * Converts this CMsgAuthTicket to JSON.
         * @function toJSON
         * @memberof CMsgAuthTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAuthTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAuthTicket;
    })();
    
    $root.CCDDBAppDetailCommon = (function() {
    
        /**
         * Properties of a CCDDBAppDetailCommon.
         * @exports ICCDDBAppDetailCommon
         * @interface ICCDDBAppDetailCommon
         * @property {number|null} [appid] CCDDBAppDetailCommon appid
         * @property {string|null} [name] CCDDBAppDetailCommon name
         * @property {string|null} [icon] CCDDBAppDetailCommon icon
         * @property {string|null} [logo] CCDDBAppDetailCommon logo
         * @property {string|null} [logo_small] CCDDBAppDetailCommon logo_small
         * @property {boolean|null} [tool] CCDDBAppDetailCommon tool
         * @property {boolean|null} [demo] CCDDBAppDetailCommon demo
         * @property {boolean|null} [media] CCDDBAppDetailCommon media
         * @property {boolean|null} [community_visible_stats] CCDDBAppDetailCommon community_visible_stats
         * @property {string|null} [friendly_name] CCDDBAppDetailCommon friendly_name
         * @property {string|null} [propagation] CCDDBAppDetailCommon propagation
         * @property {boolean|null} [has_adult_content] CCDDBAppDetailCommon has_adult_content
         */
    
        /**
         * Constructs a new CCDDBAppDetailCommon.
         * @exports CCDDBAppDetailCommon
         * @classdesc Represents a CCDDBAppDetailCommon.
         * @implements ICCDDBAppDetailCommon
         * @constructor
         * @param {ICCDDBAppDetailCommon=} [properties] Properties to set
         */
        function CCDDBAppDetailCommon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCDDBAppDetailCommon appid.
         * @member {number} appid
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.appid = 0;
    
        /**
         * CCDDBAppDetailCommon name.
         * @member {string} name
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.name = "";
    
        /**
         * CCDDBAppDetailCommon icon.
         * @member {string} icon
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.icon = "";
    
        /**
         * CCDDBAppDetailCommon logo.
         * @member {string} logo
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.logo = "";
    
        /**
         * CCDDBAppDetailCommon logo_small.
         * @member {string} logo_small
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.logo_small = "";
    
        /**
         * CCDDBAppDetailCommon tool.
         * @member {boolean} tool
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.tool = false;
    
        /**
         * CCDDBAppDetailCommon demo.
         * @member {boolean} demo
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.demo = false;
    
        /**
         * CCDDBAppDetailCommon media.
         * @member {boolean} media
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.media = false;
    
        /**
         * CCDDBAppDetailCommon community_visible_stats.
         * @member {boolean} community_visible_stats
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.community_visible_stats = false;
    
        /**
         * CCDDBAppDetailCommon friendly_name.
         * @member {string} friendly_name
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.friendly_name = "";
    
        /**
         * CCDDBAppDetailCommon propagation.
         * @member {string} propagation
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.propagation = "";
    
        /**
         * CCDDBAppDetailCommon has_adult_content.
         * @member {boolean} has_adult_content
         * @memberof CCDDBAppDetailCommon
         * @instance
         */
        CCDDBAppDetailCommon.prototype.has_adult_content = false;
    
        /**
         * Creates a new CCDDBAppDetailCommon instance using the specified properties.
         * @function create
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {ICCDDBAppDetailCommon=} [properties] Properties to set
         * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon instance
         */
        CCDDBAppDetailCommon.create = function create(properties) {
            return new CCDDBAppDetailCommon(properties);
        };
    
        /**
         * Encodes the specified CCDDBAppDetailCommon message. Does not implicitly {@link CCDDBAppDetailCommon.verify|verify} messages.
         * @function encode
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {ICCDDBAppDetailCommon} message CCDDBAppDetailCommon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCDDBAppDetailCommon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            if (message.logo != null && message.hasOwnProperty("logo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.logo);
            if (message.logo_small != null && message.hasOwnProperty("logo_small"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.logo_small);
            if (message.tool != null && message.hasOwnProperty("tool"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.tool);
            if (message.demo != null && message.hasOwnProperty("demo"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.demo);
            if (message.media != null && message.hasOwnProperty("media"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.media);
            if (message.community_visible_stats != null && message.hasOwnProperty("community_visible_stats"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.community_visible_stats);
            if (message.friendly_name != null && message.hasOwnProperty("friendly_name"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.friendly_name);
            if (message.propagation != null && message.hasOwnProperty("propagation"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.propagation);
            if (message.has_adult_content != null && message.hasOwnProperty("has_adult_content"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.has_adult_content);
            return writer;
        };
    
        /**
         * Encodes the specified CCDDBAppDetailCommon message, length delimited. Does not implicitly {@link CCDDBAppDetailCommon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {ICCDDBAppDetailCommon} message CCDDBAppDetailCommon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCDDBAppDetailCommon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCDDBAppDetailCommon message from the specified reader or buffer.
         * @function decode
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCDDBAppDetailCommon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCDDBAppDetailCommon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.icon = reader.string();
                    break;
                case 4:
                    message.logo = reader.string();
                    break;
                case 5:
                    message.logo_small = reader.string();
                    break;
                case 6:
                    message.tool = reader.bool();
                    break;
                case 7:
                    message.demo = reader.bool();
                    break;
                case 8:
                    message.media = reader.bool();
                    break;
                case 9:
                    message.community_visible_stats = reader.bool();
                    break;
                case 10:
                    message.friendly_name = reader.string();
                    break;
                case 11:
                    message.propagation = reader.string();
                    break;
                case 12:
                    message.has_adult_content = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCDDBAppDetailCommon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCDDBAppDetailCommon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCDDBAppDetailCommon message.
         * @function verify
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCDDBAppDetailCommon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.logo != null && message.hasOwnProperty("logo"))
                if (!$util.isString(message.logo))
                    return "logo: string expected";
            if (message.logo_small != null && message.hasOwnProperty("logo_small"))
                if (!$util.isString(message.logo_small))
                    return "logo_small: string expected";
            if (message.tool != null && message.hasOwnProperty("tool"))
                if (typeof message.tool !== "boolean")
                    return "tool: boolean expected";
            if (message.demo != null && message.hasOwnProperty("demo"))
                if (typeof message.demo !== "boolean")
                    return "demo: boolean expected";
            if (message.media != null && message.hasOwnProperty("media"))
                if (typeof message.media !== "boolean")
                    return "media: boolean expected";
            if (message.community_visible_stats != null && message.hasOwnProperty("community_visible_stats"))
                if (typeof message.community_visible_stats !== "boolean")
                    return "community_visible_stats: boolean expected";
            if (message.friendly_name != null && message.hasOwnProperty("friendly_name"))
                if (!$util.isString(message.friendly_name))
                    return "friendly_name: string expected";
            if (message.propagation != null && message.hasOwnProperty("propagation"))
                if (!$util.isString(message.propagation))
                    return "propagation: string expected";
            if (message.has_adult_content != null && message.hasOwnProperty("has_adult_content"))
                if (typeof message.has_adult_content !== "boolean")
                    return "has_adult_content: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCDDBAppDetailCommon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCDDBAppDetailCommon} CCDDBAppDetailCommon
         */
        CCDDBAppDetailCommon.fromObject = function fromObject(object) {
            if (object instanceof $root.CCDDBAppDetailCommon)
                return object;
            var message = new $root.CCDDBAppDetailCommon();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.logo != null)
                message.logo = String(object.logo);
            if (object.logo_small != null)
                message.logo_small = String(object.logo_small);
            if (object.tool != null)
                message.tool = Boolean(object.tool);
            if (object.demo != null)
                message.demo = Boolean(object.demo);
            if (object.media != null)
                message.media = Boolean(object.media);
            if (object.community_visible_stats != null)
                message.community_visible_stats = Boolean(object.community_visible_stats);
            if (object.friendly_name != null)
                message.friendly_name = String(object.friendly_name);
            if (object.propagation != null)
                message.propagation = String(object.propagation);
            if (object.has_adult_content != null)
                message.has_adult_content = Boolean(object.has_adult_content);
            return message;
        };
    
        /**
         * Creates a plain object from a CCDDBAppDetailCommon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCDDBAppDetailCommon
         * @static
         * @param {CCDDBAppDetailCommon} message CCDDBAppDetailCommon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCDDBAppDetailCommon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.name = "";
                object.icon = "";
                object.logo = "";
                object.logo_small = "";
                object.tool = false;
                object.demo = false;
                object.media = false;
                object.community_visible_stats = false;
                object.friendly_name = "";
                object.propagation = "";
                object.has_adult_content = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.logo != null && message.hasOwnProperty("logo"))
                object.logo = message.logo;
            if (message.logo_small != null && message.hasOwnProperty("logo_small"))
                object.logo_small = message.logo_small;
            if (message.tool != null && message.hasOwnProperty("tool"))
                object.tool = message.tool;
            if (message.demo != null && message.hasOwnProperty("demo"))
                object.demo = message.demo;
            if (message.media != null && message.hasOwnProperty("media"))
                object.media = message.media;
            if (message.community_visible_stats != null && message.hasOwnProperty("community_visible_stats"))
                object.community_visible_stats = message.community_visible_stats;
            if (message.friendly_name != null && message.hasOwnProperty("friendly_name"))
                object.friendly_name = message.friendly_name;
            if (message.propagation != null && message.hasOwnProperty("propagation"))
                object.propagation = message.propagation;
            if (message.has_adult_content != null && message.hasOwnProperty("has_adult_content"))
                object.has_adult_content = message.has_adult_content;
            return object;
        };
    
        /**
         * Converts this CCDDBAppDetailCommon to JSON.
         * @function toJSON
         * @memberof CCDDBAppDetailCommon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCDDBAppDetailCommon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCDDBAppDetailCommon;
    })();
    
    $root.CMsgAppRights = (function() {
    
        /**
         * Properties of a CMsgAppRights.
         * @exports ICMsgAppRights
         * @interface ICMsgAppRights
         * @property {boolean|null} [edit_info] CMsgAppRights edit_info
         * @property {boolean|null} [publish] CMsgAppRights publish
         * @property {boolean|null} [view_error_data] CMsgAppRights view_error_data
         * @property {boolean|null} [download] CMsgAppRights download
         * @property {boolean|null} [upload_cdkeys] CMsgAppRights upload_cdkeys
         * @property {boolean|null} [generate_cdkeys] CMsgAppRights generate_cdkeys
         * @property {boolean|null} [view_financials] CMsgAppRights view_financials
         * @property {boolean|null} [manage_ceg] CMsgAppRights manage_ceg
         * @property {boolean|null} [manage_signing] CMsgAppRights manage_signing
         * @property {boolean|null} [manage_cdkeys] CMsgAppRights manage_cdkeys
         * @property {boolean|null} [edit_marketing] CMsgAppRights edit_marketing
         * @property {boolean|null} [economy_support] CMsgAppRights economy_support
         * @property {boolean|null} [economy_support_supervisor] CMsgAppRights economy_support_supervisor
         * @property {boolean|null} [manage_pricing] CMsgAppRights manage_pricing
         * @property {boolean|null} [broadcast_live] CMsgAppRights broadcast_live
         */
    
        /**
         * Constructs a new CMsgAppRights.
         * @exports CMsgAppRights
         * @classdesc Represents a CMsgAppRights.
         * @implements ICMsgAppRights
         * @constructor
         * @param {ICMsgAppRights=} [properties] Properties to set
         */
        function CMsgAppRights(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgAppRights edit_info.
         * @member {boolean} edit_info
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.edit_info = false;
    
        /**
         * CMsgAppRights publish.
         * @member {boolean} publish
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.publish = false;
    
        /**
         * CMsgAppRights view_error_data.
         * @member {boolean} view_error_data
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.view_error_data = false;
    
        /**
         * CMsgAppRights download.
         * @member {boolean} download
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.download = false;
    
        /**
         * CMsgAppRights upload_cdkeys.
         * @member {boolean} upload_cdkeys
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.upload_cdkeys = false;
    
        /**
         * CMsgAppRights generate_cdkeys.
         * @member {boolean} generate_cdkeys
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.generate_cdkeys = false;
    
        /**
         * CMsgAppRights view_financials.
         * @member {boolean} view_financials
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.view_financials = false;
    
        /**
         * CMsgAppRights manage_ceg.
         * @member {boolean} manage_ceg
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.manage_ceg = false;
    
        /**
         * CMsgAppRights manage_signing.
         * @member {boolean} manage_signing
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.manage_signing = false;
    
        /**
         * CMsgAppRights manage_cdkeys.
         * @member {boolean} manage_cdkeys
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.manage_cdkeys = false;
    
        /**
         * CMsgAppRights edit_marketing.
         * @member {boolean} edit_marketing
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.edit_marketing = false;
    
        /**
         * CMsgAppRights economy_support.
         * @member {boolean} economy_support
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.economy_support = false;
    
        /**
         * CMsgAppRights economy_support_supervisor.
         * @member {boolean} economy_support_supervisor
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.economy_support_supervisor = false;
    
        /**
         * CMsgAppRights manage_pricing.
         * @member {boolean} manage_pricing
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.manage_pricing = false;
    
        /**
         * CMsgAppRights broadcast_live.
         * @member {boolean} broadcast_live
         * @memberof CMsgAppRights
         * @instance
         */
        CMsgAppRights.prototype.broadcast_live = false;
    
        /**
         * Creates a new CMsgAppRights instance using the specified properties.
         * @function create
         * @memberof CMsgAppRights
         * @static
         * @param {ICMsgAppRights=} [properties] Properties to set
         * @returns {CMsgAppRights} CMsgAppRights instance
         */
        CMsgAppRights.create = function create(properties) {
            return new CMsgAppRights(properties);
        };
    
        /**
         * Encodes the specified CMsgAppRights message. Does not implicitly {@link CMsgAppRights.verify|verify} messages.
         * @function encode
         * @memberof CMsgAppRights
         * @static
         * @param {ICMsgAppRights} message CMsgAppRights message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAppRights.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.edit_info != null && message.hasOwnProperty("edit_info"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.edit_info);
            if (message.publish != null && message.hasOwnProperty("publish"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.publish);
            if (message.view_error_data != null && message.hasOwnProperty("view_error_data"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.view_error_data);
            if (message.download != null && message.hasOwnProperty("download"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.download);
            if (message.upload_cdkeys != null && message.hasOwnProperty("upload_cdkeys"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.upload_cdkeys);
            if (message.generate_cdkeys != null && message.hasOwnProperty("generate_cdkeys"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.generate_cdkeys);
            if (message.view_financials != null && message.hasOwnProperty("view_financials"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.view_financials);
            if (message.manage_ceg != null && message.hasOwnProperty("manage_ceg"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.manage_ceg);
            if (message.manage_signing != null && message.hasOwnProperty("manage_signing"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.manage_signing);
            if (message.manage_cdkeys != null && message.hasOwnProperty("manage_cdkeys"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.manage_cdkeys);
            if (message.edit_marketing != null && message.hasOwnProperty("edit_marketing"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.edit_marketing);
            if (message.economy_support != null && message.hasOwnProperty("economy_support"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.economy_support);
            if (message.economy_support_supervisor != null && message.hasOwnProperty("economy_support_supervisor"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.economy_support_supervisor);
            if (message.manage_pricing != null && message.hasOwnProperty("manage_pricing"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.manage_pricing);
            if (message.broadcast_live != null && message.hasOwnProperty("broadcast_live"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.broadcast_live);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgAppRights message, length delimited. Does not implicitly {@link CMsgAppRights.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgAppRights
         * @static
         * @param {ICMsgAppRights} message CMsgAppRights message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgAppRights.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgAppRights message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgAppRights
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgAppRights} CMsgAppRights
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAppRights.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgAppRights();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.edit_info = reader.bool();
                    break;
                case 2:
                    message.publish = reader.bool();
                    break;
                case 3:
                    message.view_error_data = reader.bool();
                    break;
                case 4:
                    message.download = reader.bool();
                    break;
                case 5:
                    message.upload_cdkeys = reader.bool();
                    break;
                case 6:
                    message.generate_cdkeys = reader.bool();
                    break;
                case 7:
                    message.view_financials = reader.bool();
                    break;
                case 8:
                    message.manage_ceg = reader.bool();
                    break;
                case 9:
                    message.manage_signing = reader.bool();
                    break;
                case 10:
                    message.manage_cdkeys = reader.bool();
                    break;
                case 11:
                    message.edit_marketing = reader.bool();
                    break;
                case 12:
                    message.economy_support = reader.bool();
                    break;
                case 13:
                    message.economy_support_supervisor = reader.bool();
                    break;
                case 14:
                    message.manage_pricing = reader.bool();
                    break;
                case 15:
                    message.broadcast_live = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgAppRights message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgAppRights
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgAppRights} CMsgAppRights
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgAppRights.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgAppRights message.
         * @function verify
         * @memberof CMsgAppRights
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgAppRights.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.edit_info != null && message.hasOwnProperty("edit_info"))
                if (typeof message.edit_info !== "boolean")
                    return "edit_info: boolean expected";
            if (message.publish != null && message.hasOwnProperty("publish"))
                if (typeof message.publish !== "boolean")
                    return "publish: boolean expected";
            if (message.view_error_data != null && message.hasOwnProperty("view_error_data"))
                if (typeof message.view_error_data !== "boolean")
                    return "view_error_data: boolean expected";
            if (message.download != null && message.hasOwnProperty("download"))
                if (typeof message.download !== "boolean")
                    return "download: boolean expected";
            if (message.upload_cdkeys != null && message.hasOwnProperty("upload_cdkeys"))
                if (typeof message.upload_cdkeys !== "boolean")
                    return "upload_cdkeys: boolean expected";
            if (message.generate_cdkeys != null && message.hasOwnProperty("generate_cdkeys"))
                if (typeof message.generate_cdkeys !== "boolean")
                    return "generate_cdkeys: boolean expected";
            if (message.view_financials != null && message.hasOwnProperty("view_financials"))
                if (typeof message.view_financials !== "boolean")
                    return "view_financials: boolean expected";
            if (message.manage_ceg != null && message.hasOwnProperty("manage_ceg"))
                if (typeof message.manage_ceg !== "boolean")
                    return "manage_ceg: boolean expected";
            if (message.manage_signing != null && message.hasOwnProperty("manage_signing"))
                if (typeof message.manage_signing !== "boolean")
                    return "manage_signing: boolean expected";
            if (message.manage_cdkeys != null && message.hasOwnProperty("manage_cdkeys"))
                if (typeof message.manage_cdkeys !== "boolean")
                    return "manage_cdkeys: boolean expected";
            if (message.edit_marketing != null && message.hasOwnProperty("edit_marketing"))
                if (typeof message.edit_marketing !== "boolean")
                    return "edit_marketing: boolean expected";
            if (message.economy_support != null && message.hasOwnProperty("economy_support"))
                if (typeof message.economy_support !== "boolean")
                    return "economy_support: boolean expected";
            if (message.economy_support_supervisor != null && message.hasOwnProperty("economy_support_supervisor"))
                if (typeof message.economy_support_supervisor !== "boolean")
                    return "economy_support_supervisor: boolean expected";
            if (message.manage_pricing != null && message.hasOwnProperty("manage_pricing"))
                if (typeof message.manage_pricing !== "boolean")
                    return "manage_pricing: boolean expected";
            if (message.broadcast_live != null && message.hasOwnProperty("broadcast_live"))
                if (typeof message.broadcast_live !== "boolean")
                    return "broadcast_live: boolean expected";
            return null;
        };
    
        /**
         * Creates a CMsgAppRights message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgAppRights
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgAppRights} CMsgAppRights
         */
        CMsgAppRights.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgAppRights)
                return object;
            var message = new $root.CMsgAppRights();
            if (object.edit_info != null)
                message.edit_info = Boolean(object.edit_info);
            if (object.publish != null)
                message.publish = Boolean(object.publish);
            if (object.view_error_data != null)
                message.view_error_data = Boolean(object.view_error_data);
            if (object.download != null)
                message.download = Boolean(object.download);
            if (object.upload_cdkeys != null)
                message.upload_cdkeys = Boolean(object.upload_cdkeys);
            if (object.generate_cdkeys != null)
                message.generate_cdkeys = Boolean(object.generate_cdkeys);
            if (object.view_financials != null)
                message.view_financials = Boolean(object.view_financials);
            if (object.manage_ceg != null)
                message.manage_ceg = Boolean(object.manage_ceg);
            if (object.manage_signing != null)
                message.manage_signing = Boolean(object.manage_signing);
            if (object.manage_cdkeys != null)
                message.manage_cdkeys = Boolean(object.manage_cdkeys);
            if (object.edit_marketing != null)
                message.edit_marketing = Boolean(object.edit_marketing);
            if (object.economy_support != null)
                message.economy_support = Boolean(object.economy_support);
            if (object.economy_support_supervisor != null)
                message.economy_support_supervisor = Boolean(object.economy_support_supervisor);
            if (object.manage_pricing != null)
                message.manage_pricing = Boolean(object.manage_pricing);
            if (object.broadcast_live != null)
                message.broadcast_live = Boolean(object.broadcast_live);
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgAppRights message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgAppRights
         * @static
         * @param {CMsgAppRights} message CMsgAppRights
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgAppRights.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.edit_info = false;
                object.publish = false;
                object.view_error_data = false;
                object.download = false;
                object.upload_cdkeys = false;
                object.generate_cdkeys = false;
                object.view_financials = false;
                object.manage_ceg = false;
                object.manage_signing = false;
                object.manage_cdkeys = false;
                object.edit_marketing = false;
                object.economy_support = false;
                object.economy_support_supervisor = false;
                object.manage_pricing = false;
                object.broadcast_live = false;
            }
            if (message.edit_info != null && message.hasOwnProperty("edit_info"))
                object.edit_info = message.edit_info;
            if (message.publish != null && message.hasOwnProperty("publish"))
                object.publish = message.publish;
            if (message.view_error_data != null && message.hasOwnProperty("view_error_data"))
                object.view_error_data = message.view_error_data;
            if (message.download != null && message.hasOwnProperty("download"))
                object.download = message.download;
            if (message.upload_cdkeys != null && message.hasOwnProperty("upload_cdkeys"))
                object.upload_cdkeys = message.upload_cdkeys;
            if (message.generate_cdkeys != null && message.hasOwnProperty("generate_cdkeys"))
                object.generate_cdkeys = message.generate_cdkeys;
            if (message.view_financials != null && message.hasOwnProperty("view_financials"))
                object.view_financials = message.view_financials;
            if (message.manage_ceg != null && message.hasOwnProperty("manage_ceg"))
                object.manage_ceg = message.manage_ceg;
            if (message.manage_signing != null && message.hasOwnProperty("manage_signing"))
                object.manage_signing = message.manage_signing;
            if (message.manage_cdkeys != null && message.hasOwnProperty("manage_cdkeys"))
                object.manage_cdkeys = message.manage_cdkeys;
            if (message.edit_marketing != null && message.hasOwnProperty("edit_marketing"))
                object.edit_marketing = message.edit_marketing;
            if (message.economy_support != null && message.hasOwnProperty("economy_support"))
                object.economy_support = message.economy_support;
            if (message.economy_support_supervisor != null && message.hasOwnProperty("economy_support_supervisor"))
                object.economy_support_supervisor = message.economy_support_supervisor;
            if (message.manage_pricing != null && message.hasOwnProperty("manage_pricing"))
                object.manage_pricing = message.manage_pricing;
            if (message.broadcast_live != null && message.hasOwnProperty("broadcast_live"))
                object.broadcast_live = message.broadcast_live;
            return object;
        };
    
        /**
         * Converts this CMsgAppRights to JSON.
         * @function toJSON
         * @memberof CMsgAppRights
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgAppRights.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgAppRights;
    })();
    
    $root.CCuratorPreferences = (function() {
    
        /**
         * Properties of a CCuratorPreferences.
         * @exports ICCuratorPreferences
         * @interface ICCuratorPreferences
         * @property {number|null} [supported_languages] CCuratorPreferences supported_languages
         * @property {boolean|null} [platform_windows] CCuratorPreferences platform_windows
         * @property {boolean|null} [platform_mac] CCuratorPreferences platform_mac
         * @property {boolean|null} [platform_linux] CCuratorPreferences platform_linux
         * @property {boolean|null} [vr_content] CCuratorPreferences vr_content
         * @property {boolean|null} [adult_content_violence] CCuratorPreferences adult_content_violence
         * @property {boolean|null} [adult_content_sex] CCuratorPreferences adult_content_sex
         * @property {number|null} [timestamp_updated] CCuratorPreferences timestamp_updated
         * @property {Array.<number>|null} [tagids_curated] CCuratorPreferences tagids_curated
         * @property {Array.<number>|null} [tagids_filtered] CCuratorPreferences tagids_filtered
         * @property {string|null} [website_title] CCuratorPreferences website_title
         * @property {string|null} [website_url] CCuratorPreferences website_url
         * @property {string|null} [discussion_url] CCuratorPreferences discussion_url
         * @property {boolean|null} [show_broadcast] CCuratorPreferences show_broadcast
         */
    
        /**
         * Constructs a new CCuratorPreferences.
         * @exports CCuratorPreferences
         * @classdesc Represents a CCuratorPreferences.
         * @implements ICCuratorPreferences
         * @constructor
         * @param {ICCuratorPreferences=} [properties] Properties to set
         */
        function CCuratorPreferences(properties) {
            this.tagids_curated = [];
            this.tagids_filtered = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCuratorPreferences supported_languages.
         * @member {number} supported_languages
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.supported_languages = 0;
    
        /**
         * CCuratorPreferences platform_windows.
         * @member {boolean} platform_windows
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.platform_windows = false;
    
        /**
         * CCuratorPreferences platform_mac.
         * @member {boolean} platform_mac
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.platform_mac = false;
    
        /**
         * CCuratorPreferences platform_linux.
         * @member {boolean} platform_linux
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.platform_linux = false;
    
        /**
         * CCuratorPreferences vr_content.
         * @member {boolean} vr_content
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.vr_content = false;
    
        /**
         * CCuratorPreferences adult_content_violence.
         * @member {boolean} adult_content_violence
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.adult_content_violence = false;
    
        /**
         * CCuratorPreferences adult_content_sex.
         * @member {boolean} adult_content_sex
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.adult_content_sex = false;
    
        /**
         * CCuratorPreferences timestamp_updated.
         * @member {number} timestamp_updated
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.timestamp_updated = 0;
    
        /**
         * CCuratorPreferences tagids_curated.
         * @member {Array.<number>} tagids_curated
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.tagids_curated = $util.emptyArray;
    
        /**
         * CCuratorPreferences tagids_filtered.
         * @member {Array.<number>} tagids_filtered
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.tagids_filtered = $util.emptyArray;
    
        /**
         * CCuratorPreferences website_title.
         * @member {string} website_title
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.website_title = "";
    
        /**
         * CCuratorPreferences website_url.
         * @member {string} website_url
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.website_url = "";
    
        /**
         * CCuratorPreferences discussion_url.
         * @member {string} discussion_url
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.discussion_url = "";
    
        /**
         * CCuratorPreferences show_broadcast.
         * @member {boolean} show_broadcast
         * @memberof CCuratorPreferences
         * @instance
         */
        CCuratorPreferences.prototype.show_broadcast = false;
    
        /**
         * Creates a new CCuratorPreferences instance using the specified properties.
         * @function create
         * @memberof CCuratorPreferences
         * @static
         * @param {ICCuratorPreferences=} [properties] Properties to set
         * @returns {CCuratorPreferences} CCuratorPreferences instance
         */
        CCuratorPreferences.create = function create(properties) {
            return new CCuratorPreferences(properties);
        };
    
        /**
         * Encodes the specified CCuratorPreferences message. Does not implicitly {@link CCuratorPreferences.verify|verify} messages.
         * @function encode
         * @memberof CCuratorPreferences
         * @static
         * @param {ICCuratorPreferences} message CCuratorPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCuratorPreferences.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.supported_languages != null && message.hasOwnProperty("supported_languages"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.supported_languages);
            if (message.platform_windows != null && message.hasOwnProperty("platform_windows"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.platform_windows);
            if (message.platform_mac != null && message.hasOwnProperty("platform_mac"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.platform_mac);
            if (message.platform_linux != null && message.hasOwnProperty("platform_linux"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.platform_linux);
            if (message.vr_content != null && message.hasOwnProperty("vr_content"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.vr_content);
            if (message.adult_content_violence != null && message.hasOwnProperty("adult_content_violence"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.adult_content_violence);
            if (message.adult_content_sex != null && message.hasOwnProperty("adult_content_sex"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.adult_content_sex);
            if (message.timestamp_updated != null && message.hasOwnProperty("timestamp_updated"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.timestamp_updated);
            if (message.tagids_curated != null && message.tagids_curated.length)
                for (var i = 0; i < message.tagids_curated.length; ++i)
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.tagids_curated[i]);
            if (message.tagids_filtered != null && message.tagids_filtered.length)
                for (var i = 0; i < message.tagids_filtered.length; ++i)
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.tagids_filtered[i]);
            if (message.website_title != null && message.hasOwnProperty("website_title"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.website_title);
            if (message.website_url != null && message.hasOwnProperty("website_url"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.website_url);
            if (message.discussion_url != null && message.hasOwnProperty("discussion_url"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.discussion_url);
            if (message.show_broadcast != null && message.hasOwnProperty("show_broadcast"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.show_broadcast);
            return writer;
        };
    
        /**
         * Encodes the specified CCuratorPreferences message, length delimited. Does not implicitly {@link CCuratorPreferences.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCuratorPreferences
         * @static
         * @param {ICCuratorPreferences} message CCuratorPreferences message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCuratorPreferences.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCuratorPreferences message from the specified reader or buffer.
         * @function decode
         * @memberof CCuratorPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCuratorPreferences} CCuratorPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCuratorPreferences.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCuratorPreferences();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.supported_languages = reader.uint32();
                    break;
                case 2:
                    message.platform_windows = reader.bool();
                    break;
                case 3:
                    message.platform_mac = reader.bool();
                    break;
                case 4:
                    message.platform_linux = reader.bool();
                    break;
                case 5:
                    message.vr_content = reader.bool();
                    break;
                case 6:
                    message.adult_content_violence = reader.bool();
                    break;
                case 7:
                    message.adult_content_sex = reader.bool();
                    break;
                case 8:
                    message.timestamp_updated = reader.uint32();
                    break;
                case 9:
                    if (!(message.tagids_curated && message.tagids_curated.length))
                        message.tagids_curated = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tagids_curated.push(reader.uint32());
                    } else
                        message.tagids_curated.push(reader.uint32());
                    break;
                case 10:
                    if (!(message.tagids_filtered && message.tagids_filtered.length))
                        message.tagids_filtered = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tagids_filtered.push(reader.uint32());
                    } else
                        message.tagids_filtered.push(reader.uint32());
                    break;
                case 11:
                    message.website_title = reader.string();
                    break;
                case 12:
                    message.website_url = reader.string();
                    break;
                case 13:
                    message.discussion_url = reader.string();
                    break;
                case 14:
                    message.show_broadcast = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCuratorPreferences message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCuratorPreferences
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCuratorPreferences} CCuratorPreferences
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCuratorPreferences.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCuratorPreferences message.
         * @function verify
         * @memberof CCuratorPreferences
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCuratorPreferences.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.supported_languages != null && message.hasOwnProperty("supported_languages"))
                if (!$util.isInteger(message.supported_languages))
                    return "supported_languages: integer expected";
            if (message.platform_windows != null && message.hasOwnProperty("platform_windows"))
                if (typeof message.platform_windows !== "boolean")
                    return "platform_windows: boolean expected";
            if (message.platform_mac != null && message.hasOwnProperty("platform_mac"))
                if (typeof message.platform_mac !== "boolean")
                    return "platform_mac: boolean expected";
            if (message.platform_linux != null && message.hasOwnProperty("platform_linux"))
                if (typeof message.platform_linux !== "boolean")
                    return "platform_linux: boolean expected";
            if (message.vr_content != null && message.hasOwnProperty("vr_content"))
                if (typeof message.vr_content !== "boolean")
                    return "vr_content: boolean expected";
            if (message.adult_content_violence != null && message.hasOwnProperty("adult_content_violence"))
                if (typeof message.adult_content_violence !== "boolean")
                    return "adult_content_violence: boolean expected";
            if (message.adult_content_sex != null && message.hasOwnProperty("adult_content_sex"))
                if (typeof message.adult_content_sex !== "boolean")
                    return "adult_content_sex: boolean expected";
            if (message.timestamp_updated != null && message.hasOwnProperty("timestamp_updated"))
                if (!$util.isInteger(message.timestamp_updated))
                    return "timestamp_updated: integer expected";
            if (message.tagids_curated != null && message.hasOwnProperty("tagids_curated")) {
                if (!Array.isArray(message.tagids_curated))
                    return "tagids_curated: array expected";
                for (var i = 0; i < message.tagids_curated.length; ++i)
                    if (!$util.isInteger(message.tagids_curated[i]))
                        return "tagids_curated: integer[] expected";
            }
            if (message.tagids_filtered != null && message.hasOwnProperty("tagids_filtered")) {
                if (!Array.isArray(message.tagids_filtered))
                    return "tagids_filtered: array expected";
                for (var i = 0; i < message.tagids_filtered.length; ++i)
                    if (!$util.isInteger(message.tagids_filtered[i]))
                        return "tagids_filtered: integer[] expected";
            }
            if (message.website_title != null && message.hasOwnProperty("website_title"))
                if (!$util.isString(message.website_title))
                    return "website_title: string expected";
            if (message.website_url != null && message.hasOwnProperty("website_url"))
                if (!$util.isString(message.website_url))
                    return "website_url: string expected";
            if (message.discussion_url != null && message.hasOwnProperty("discussion_url"))
                if (!$util.isString(message.discussion_url))
                    return "discussion_url: string expected";
            if (message.show_broadcast != null && message.hasOwnProperty("show_broadcast"))
                if (typeof message.show_broadcast !== "boolean")
                    return "show_broadcast: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCuratorPreferences message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCuratorPreferences
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCuratorPreferences} CCuratorPreferences
         */
        CCuratorPreferences.fromObject = function fromObject(object) {
            if (object instanceof $root.CCuratorPreferences)
                return object;
            var message = new $root.CCuratorPreferences();
            if (object.supported_languages != null)
                message.supported_languages = object.supported_languages >>> 0;
            if (object.platform_windows != null)
                message.platform_windows = Boolean(object.platform_windows);
            if (object.platform_mac != null)
                message.platform_mac = Boolean(object.platform_mac);
            if (object.platform_linux != null)
                message.platform_linux = Boolean(object.platform_linux);
            if (object.vr_content != null)
                message.vr_content = Boolean(object.vr_content);
            if (object.adult_content_violence != null)
                message.adult_content_violence = Boolean(object.adult_content_violence);
            if (object.adult_content_sex != null)
                message.adult_content_sex = Boolean(object.adult_content_sex);
            if (object.timestamp_updated != null)
                message.timestamp_updated = object.timestamp_updated >>> 0;
            if (object.tagids_curated) {
                if (!Array.isArray(object.tagids_curated))
                    throw TypeError(".CCuratorPreferences.tagids_curated: array expected");
                message.tagids_curated = [];
                for (var i = 0; i < object.tagids_curated.length; ++i)
                    message.tagids_curated[i] = object.tagids_curated[i] >>> 0;
            }
            if (object.tagids_filtered) {
                if (!Array.isArray(object.tagids_filtered))
                    throw TypeError(".CCuratorPreferences.tagids_filtered: array expected");
                message.tagids_filtered = [];
                for (var i = 0; i < object.tagids_filtered.length; ++i)
                    message.tagids_filtered[i] = object.tagids_filtered[i] >>> 0;
            }
            if (object.website_title != null)
                message.website_title = String(object.website_title);
            if (object.website_url != null)
                message.website_url = String(object.website_url);
            if (object.discussion_url != null)
                message.discussion_url = String(object.discussion_url);
            if (object.show_broadcast != null)
                message.show_broadcast = Boolean(object.show_broadcast);
            return message;
        };
    
        /**
         * Creates a plain object from a CCuratorPreferences message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCuratorPreferences
         * @static
         * @param {CCuratorPreferences} message CCuratorPreferences
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCuratorPreferences.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.tagids_curated = [];
                object.tagids_filtered = [];
            }
            if (options.defaults) {
                object.supported_languages = 0;
                object.platform_windows = false;
                object.platform_mac = false;
                object.platform_linux = false;
                object.vr_content = false;
                object.adult_content_violence = false;
                object.adult_content_sex = false;
                object.timestamp_updated = 0;
                object.website_title = "";
                object.website_url = "";
                object.discussion_url = "";
                object.show_broadcast = false;
            }
            if (message.supported_languages != null && message.hasOwnProperty("supported_languages"))
                object.supported_languages = message.supported_languages;
            if (message.platform_windows != null && message.hasOwnProperty("platform_windows"))
                object.platform_windows = message.platform_windows;
            if (message.platform_mac != null && message.hasOwnProperty("platform_mac"))
                object.platform_mac = message.platform_mac;
            if (message.platform_linux != null && message.hasOwnProperty("platform_linux"))
                object.platform_linux = message.platform_linux;
            if (message.vr_content != null && message.hasOwnProperty("vr_content"))
                object.vr_content = message.vr_content;
            if (message.adult_content_violence != null && message.hasOwnProperty("adult_content_violence"))
                object.adult_content_violence = message.adult_content_violence;
            if (message.adult_content_sex != null && message.hasOwnProperty("adult_content_sex"))
                object.adult_content_sex = message.adult_content_sex;
            if (message.timestamp_updated != null && message.hasOwnProperty("timestamp_updated"))
                object.timestamp_updated = message.timestamp_updated;
            if (message.tagids_curated && message.tagids_curated.length) {
                object.tagids_curated = [];
                for (var j = 0; j < message.tagids_curated.length; ++j)
                    object.tagids_curated[j] = message.tagids_curated[j];
            }
            if (message.tagids_filtered && message.tagids_filtered.length) {
                object.tagids_filtered = [];
                for (var j = 0; j < message.tagids_filtered.length; ++j)
                    object.tagids_filtered[j] = message.tagids_filtered[j];
            }
            if (message.website_title != null && message.hasOwnProperty("website_title"))
                object.website_title = message.website_title;
            if (message.website_url != null && message.hasOwnProperty("website_url"))
                object.website_url = message.website_url;
            if (message.discussion_url != null && message.hasOwnProperty("discussion_url"))
                object.discussion_url = message.discussion_url;
            if (message.show_broadcast != null && message.hasOwnProperty("show_broadcast"))
                object.show_broadcast = message.show_broadcast;
            return object;
        };
    
        /**
         * Converts this CCuratorPreferences to JSON.
         * @function toJSON
         * @memberof CCuratorPreferences
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCuratorPreferences.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCuratorPreferences;
    })();
    
    $root.CLocalizationToken = (function() {
    
        /**
         * Properties of a CLocalizationToken.
         * @exports ICLocalizationToken
         * @interface ICLocalizationToken
         * @property {number|null} [language] CLocalizationToken language
         * @property {string|null} [localized_string] CLocalizationToken localized_string
         */
    
        /**
         * Constructs a new CLocalizationToken.
         * @exports CLocalizationToken
         * @classdesc Represents a CLocalizationToken.
         * @implements ICLocalizationToken
         * @constructor
         * @param {ICLocalizationToken=} [properties] Properties to set
         */
        function CLocalizationToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CLocalizationToken language.
         * @member {number} language
         * @memberof CLocalizationToken
         * @instance
         */
        CLocalizationToken.prototype.language = 0;
    
        /**
         * CLocalizationToken localized_string.
         * @member {string} localized_string
         * @memberof CLocalizationToken
         * @instance
         */
        CLocalizationToken.prototype.localized_string = "";
    
        /**
         * Creates a new CLocalizationToken instance using the specified properties.
         * @function create
         * @memberof CLocalizationToken
         * @static
         * @param {ICLocalizationToken=} [properties] Properties to set
         * @returns {CLocalizationToken} CLocalizationToken instance
         */
        CLocalizationToken.create = function create(properties) {
            return new CLocalizationToken(properties);
        };
    
        /**
         * Encodes the specified CLocalizationToken message. Does not implicitly {@link CLocalizationToken.verify|verify} messages.
         * @function encode
         * @memberof CLocalizationToken
         * @static
         * @param {ICLocalizationToken} message CLocalizationToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLocalizationToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.language);
            if (message.localized_string != null && message.hasOwnProperty("localized_string"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.localized_string);
            return writer;
        };
    
        /**
         * Encodes the specified CLocalizationToken message, length delimited. Does not implicitly {@link CLocalizationToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLocalizationToken
         * @static
         * @param {ICLocalizationToken} message CLocalizationToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CLocalizationToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CLocalizationToken message from the specified reader or buffer.
         * @function decode
         * @memberof CLocalizationToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLocalizationToken} CLocalizationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLocalizationToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLocalizationToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.language = reader.uint32();
                    break;
                case 2:
                    message.localized_string = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CLocalizationToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLocalizationToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLocalizationToken} CLocalizationToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CLocalizationToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CLocalizationToken message.
         * @function verify
         * @memberof CLocalizationToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CLocalizationToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isInteger(message.language))
                    return "language: integer expected";
            if (message.localized_string != null && message.hasOwnProperty("localized_string"))
                if (!$util.isString(message.localized_string))
                    return "localized_string: string expected";
            return null;
        };
    
        /**
         * Creates a CLocalizationToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLocalizationToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLocalizationToken} CLocalizationToken
         */
        CLocalizationToken.fromObject = function fromObject(object) {
            if (object instanceof $root.CLocalizationToken)
                return object;
            var message = new $root.CLocalizationToken();
            if (object.language != null)
                message.language = object.language >>> 0;
            if (object.localized_string != null)
                message.localized_string = String(object.localized_string);
            return message;
        };
    
        /**
         * Creates a plain object from a CLocalizationToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLocalizationToken
         * @static
         * @param {CLocalizationToken} message CLocalizationToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CLocalizationToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.language = 0;
                object.localized_string = "";
            }
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.localized_string != null && message.hasOwnProperty("localized_string"))
                object.localized_string = message.localized_string;
            return object;
        };
    
        /**
         * Converts this CLocalizationToken to JSON.
         * @function toJSON
         * @memberof CLocalizationToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CLocalizationToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CLocalizationToken;
    })();
    
    $root.CClanEventUserNewsTuple = (function() {
    
        /**
         * Properties of a CClanEventUserNewsTuple.
         * @exports ICClanEventUserNewsTuple
         * @interface ICClanEventUserNewsTuple
         * @property {number|null} [clanid] CClanEventUserNewsTuple clanid
         * @property {number|Long|null} [event_gid] CClanEventUserNewsTuple event_gid
         * @property {number|Long|null} [announcement_gid] CClanEventUserNewsTuple announcement_gid
         * @property {number|null} [rtime_start] CClanEventUserNewsTuple rtime_start
         * @property {number|null} [rtime_end] CClanEventUserNewsTuple rtime_end
         * @property {number|null} [priority_score] CClanEventUserNewsTuple priority_score
         * @property {number|null} [type] CClanEventUserNewsTuple type
         * @property {number|null} [clamp_range_slot] CClanEventUserNewsTuple clamp_range_slot
         * @property {number|null} [appid] CClanEventUserNewsTuple appid
         * @property {number|null} [rtime32_last_modified] CClanEventUserNewsTuple rtime32_last_modified
         */
    
        /**
         * Constructs a new CClanEventUserNewsTuple.
         * @exports CClanEventUserNewsTuple
         * @classdesc Represents a CClanEventUserNewsTuple.
         * @implements ICClanEventUserNewsTuple
         * @constructor
         * @param {ICClanEventUserNewsTuple=} [properties] Properties to set
         */
        function CClanEventUserNewsTuple(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClanEventUserNewsTuple clanid.
         * @member {number} clanid
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.clanid = 0;
    
        /**
         * CClanEventUserNewsTuple event_gid.
         * @member {number|Long} event_gid
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.event_gid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CClanEventUserNewsTuple announcement_gid.
         * @member {number|Long} announcement_gid
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.announcement_gid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CClanEventUserNewsTuple rtime_start.
         * @member {number} rtime_start
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.rtime_start = 0;
    
        /**
         * CClanEventUserNewsTuple rtime_end.
         * @member {number} rtime_end
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.rtime_end = 0;
    
        /**
         * CClanEventUserNewsTuple priority_score.
         * @member {number} priority_score
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.priority_score = 0;
    
        /**
         * CClanEventUserNewsTuple type.
         * @member {number} type
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.type = 0;
    
        /**
         * CClanEventUserNewsTuple clamp_range_slot.
         * @member {number} clamp_range_slot
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.clamp_range_slot = 0;
    
        /**
         * CClanEventUserNewsTuple appid.
         * @member {number} appid
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.appid = 0;
    
        /**
         * CClanEventUserNewsTuple rtime32_last_modified.
         * @member {number} rtime32_last_modified
         * @memberof CClanEventUserNewsTuple
         * @instance
         */
        CClanEventUserNewsTuple.prototype.rtime32_last_modified = 0;
    
        /**
         * Creates a new CClanEventUserNewsTuple instance using the specified properties.
         * @function create
         * @memberof CClanEventUserNewsTuple
         * @static
         * @param {ICClanEventUserNewsTuple=} [properties] Properties to set
         * @returns {CClanEventUserNewsTuple} CClanEventUserNewsTuple instance
         */
        CClanEventUserNewsTuple.create = function create(properties) {
            return new CClanEventUserNewsTuple(properties);
        };
    
        /**
         * Encodes the specified CClanEventUserNewsTuple message. Does not implicitly {@link CClanEventUserNewsTuple.verify|verify} messages.
         * @function encode
         * @memberof CClanEventUserNewsTuple
         * @static
         * @param {ICClanEventUserNewsTuple} message CClanEventUserNewsTuple message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClanEventUserNewsTuple.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clanid != null && message.hasOwnProperty("clanid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.clanid);
            if (message.event_gid != null && message.hasOwnProperty("event_gid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.event_gid);
            if (message.announcement_gid != null && message.hasOwnProperty("announcement_gid"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.announcement_gid);
            if (message.rtime_start != null && message.hasOwnProperty("rtime_start"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.rtime_start);
            if (message.rtime_end != null && message.hasOwnProperty("rtime_end"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.rtime_end);
            if (message.priority_score != null && message.hasOwnProperty("priority_score"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.priority_score);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.type);
            if (message.clamp_range_slot != null && message.hasOwnProperty("clamp_range_slot"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.clamp_range_slot);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.appid);
            if (message.rtime32_last_modified != null && message.hasOwnProperty("rtime32_last_modified"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.rtime32_last_modified);
            return writer;
        };
    
        /**
         * Encodes the specified CClanEventUserNewsTuple message, length delimited. Does not implicitly {@link CClanEventUserNewsTuple.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClanEventUserNewsTuple
         * @static
         * @param {ICClanEventUserNewsTuple} message CClanEventUserNewsTuple message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClanEventUserNewsTuple.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClanEventUserNewsTuple message from the specified reader or buffer.
         * @function decode
         * @memberof CClanEventUserNewsTuple
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClanEventUserNewsTuple} CClanEventUserNewsTuple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClanEventUserNewsTuple.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClanEventUserNewsTuple();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clanid = reader.uint32();
                    break;
                case 2:
                    message.event_gid = reader.fixed64();
                    break;
                case 3:
                    message.announcement_gid = reader.fixed64();
                    break;
                case 4:
                    message.rtime_start = reader.uint32();
                    break;
                case 5:
                    message.rtime_end = reader.uint32();
                    break;
                case 6:
                    message.priority_score = reader.uint32();
                    break;
                case 7:
                    message.type = reader.uint32();
                    break;
                case 8:
                    message.clamp_range_slot = reader.uint32();
                    break;
                case 9:
                    message.appid = reader.uint32();
                    break;
                case 10:
                    message.rtime32_last_modified = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClanEventUserNewsTuple message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClanEventUserNewsTuple
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClanEventUserNewsTuple} CClanEventUserNewsTuple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClanEventUserNewsTuple.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClanEventUserNewsTuple message.
         * @function verify
         * @memberof CClanEventUserNewsTuple
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClanEventUserNewsTuple.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clanid != null && message.hasOwnProperty("clanid"))
                if (!$util.isInteger(message.clanid))
                    return "clanid: integer expected";
            if (message.event_gid != null && message.hasOwnProperty("event_gid"))
                if (!$util.isInteger(message.event_gid) && !(message.event_gid && $util.isInteger(message.event_gid.low) && $util.isInteger(message.event_gid.high)))
                    return "event_gid: integer|Long expected";
            if (message.announcement_gid != null && message.hasOwnProperty("announcement_gid"))
                if (!$util.isInteger(message.announcement_gid) && !(message.announcement_gid && $util.isInteger(message.announcement_gid.low) && $util.isInteger(message.announcement_gid.high)))
                    return "announcement_gid: integer|Long expected";
            if (message.rtime_start != null && message.hasOwnProperty("rtime_start"))
                if (!$util.isInteger(message.rtime_start))
                    return "rtime_start: integer expected";
            if (message.rtime_end != null && message.hasOwnProperty("rtime_end"))
                if (!$util.isInteger(message.rtime_end))
                    return "rtime_end: integer expected";
            if (message.priority_score != null && message.hasOwnProperty("priority_score"))
                if (!$util.isInteger(message.priority_score))
                    return "priority_score: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.clamp_range_slot != null && message.hasOwnProperty("clamp_range_slot"))
                if (!$util.isInteger(message.clamp_range_slot))
                    return "clamp_range_slot: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.rtime32_last_modified != null && message.hasOwnProperty("rtime32_last_modified"))
                if (!$util.isInteger(message.rtime32_last_modified))
                    return "rtime32_last_modified: integer expected";
            return null;
        };
    
        /**
         * Creates a CClanEventUserNewsTuple message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClanEventUserNewsTuple
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClanEventUserNewsTuple} CClanEventUserNewsTuple
         */
        CClanEventUserNewsTuple.fromObject = function fromObject(object) {
            if (object instanceof $root.CClanEventUserNewsTuple)
                return object;
            var message = new $root.CClanEventUserNewsTuple();
            if (object.clanid != null)
                message.clanid = object.clanid >>> 0;
            if (object.event_gid != null)
                if ($util.Long)
                    (message.event_gid = $util.Long.fromValue(object.event_gid)).unsigned = false;
                else if (typeof object.event_gid === "string")
                    message.event_gid = parseInt(object.event_gid, 10);
                else if (typeof object.event_gid === "number")
                    message.event_gid = object.event_gid;
                else if (typeof object.event_gid === "object")
                    message.event_gid = new $util.LongBits(object.event_gid.low >>> 0, object.event_gid.high >>> 0).toNumber();
            if (object.announcement_gid != null)
                if ($util.Long)
                    (message.announcement_gid = $util.Long.fromValue(object.announcement_gid)).unsigned = false;
                else if (typeof object.announcement_gid === "string")
                    message.announcement_gid = parseInt(object.announcement_gid, 10);
                else if (typeof object.announcement_gid === "number")
                    message.announcement_gid = object.announcement_gid;
                else if (typeof object.announcement_gid === "object")
                    message.announcement_gid = new $util.LongBits(object.announcement_gid.low >>> 0, object.announcement_gid.high >>> 0).toNumber();
            if (object.rtime_start != null)
                message.rtime_start = object.rtime_start >>> 0;
            if (object.rtime_end != null)
                message.rtime_end = object.rtime_end >>> 0;
            if (object.priority_score != null)
                message.priority_score = object.priority_score >>> 0;
            if (object.type != null)
                message.type = object.type >>> 0;
            if (object.clamp_range_slot != null)
                message.clamp_range_slot = object.clamp_range_slot >>> 0;
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.rtime32_last_modified != null)
                message.rtime32_last_modified = object.rtime32_last_modified >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClanEventUserNewsTuple message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClanEventUserNewsTuple
         * @static
         * @param {CClanEventUserNewsTuple} message CClanEventUserNewsTuple
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClanEventUserNewsTuple.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.clanid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.event_gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.event_gid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.announcement_gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.announcement_gid = options.longs === String ? "0" : 0;
                object.rtime_start = 0;
                object.rtime_end = 0;
                object.priority_score = 0;
                object.type = 0;
                object.clamp_range_slot = 0;
                object.appid = 0;
                object.rtime32_last_modified = 0;
            }
            if (message.clanid != null && message.hasOwnProperty("clanid"))
                object.clanid = message.clanid;
            if (message.event_gid != null && message.hasOwnProperty("event_gid"))
                if (typeof message.event_gid === "number")
                    object.event_gid = options.longs === String ? String(message.event_gid) : message.event_gid;
                else
                    object.event_gid = options.longs === String ? $util.Long.prototype.toString.call(message.event_gid) : options.longs === Number ? new $util.LongBits(message.event_gid.low >>> 0, message.event_gid.high >>> 0).toNumber() : message.event_gid;
            if (message.announcement_gid != null && message.hasOwnProperty("announcement_gid"))
                if (typeof message.announcement_gid === "number")
                    object.announcement_gid = options.longs === String ? String(message.announcement_gid) : message.announcement_gid;
                else
                    object.announcement_gid = options.longs === String ? $util.Long.prototype.toString.call(message.announcement_gid) : options.longs === Number ? new $util.LongBits(message.announcement_gid.low >>> 0, message.announcement_gid.high >>> 0).toNumber() : message.announcement_gid;
            if (message.rtime_start != null && message.hasOwnProperty("rtime_start"))
                object.rtime_start = message.rtime_start;
            if (message.rtime_end != null && message.hasOwnProperty("rtime_end"))
                object.rtime_end = message.rtime_end;
            if (message.priority_score != null && message.hasOwnProperty("priority_score"))
                object.priority_score = message.priority_score;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.clamp_range_slot != null && message.hasOwnProperty("clamp_range_slot"))
                object.clamp_range_slot = message.clamp_range_slot;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.rtime32_last_modified != null && message.hasOwnProperty("rtime32_last_modified"))
                object.rtime32_last_modified = message.rtime32_last_modified;
            return object;
        };
    
        /**
         * Converts this CClanEventUserNewsTuple to JSON.
         * @function toJSON
         * @memberof CClanEventUserNewsTuple
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClanEventUserNewsTuple.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClanEventUserNewsTuple;
    })();
    
    $root.CClanMatchEventByRange = (function() {
    
        /**
         * Properties of a CClanMatchEventByRange.
         * @exports ICClanMatchEventByRange
         * @interface ICClanMatchEventByRange
         * @property {number|null} [rtime_before] CClanMatchEventByRange rtime_before
         * @property {number|null} [rtime_after] CClanMatchEventByRange rtime_after
         * @property {number|null} [qualified] CClanMatchEventByRange qualified
         * @property {Array.<ICClanEventUserNewsTuple>|null} [events] CClanMatchEventByRange events
         */
    
        /**
         * Constructs a new CClanMatchEventByRange.
         * @exports CClanMatchEventByRange
         * @classdesc Represents a CClanMatchEventByRange.
         * @implements ICClanMatchEventByRange
         * @constructor
         * @param {ICClanMatchEventByRange=} [properties] Properties to set
         */
        function CClanMatchEventByRange(properties) {
            this.events = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClanMatchEventByRange rtime_before.
         * @member {number} rtime_before
         * @memberof CClanMatchEventByRange
         * @instance
         */
        CClanMatchEventByRange.prototype.rtime_before = 0;
    
        /**
         * CClanMatchEventByRange rtime_after.
         * @member {number} rtime_after
         * @memberof CClanMatchEventByRange
         * @instance
         */
        CClanMatchEventByRange.prototype.rtime_after = 0;
    
        /**
         * CClanMatchEventByRange qualified.
         * @member {number} qualified
         * @memberof CClanMatchEventByRange
         * @instance
         */
        CClanMatchEventByRange.prototype.qualified = 0;
    
        /**
         * CClanMatchEventByRange events.
         * @member {Array.<ICClanEventUserNewsTuple>} events
         * @memberof CClanMatchEventByRange
         * @instance
         */
        CClanMatchEventByRange.prototype.events = $util.emptyArray;
    
        /**
         * Creates a new CClanMatchEventByRange instance using the specified properties.
         * @function create
         * @memberof CClanMatchEventByRange
         * @static
         * @param {ICClanMatchEventByRange=} [properties] Properties to set
         * @returns {CClanMatchEventByRange} CClanMatchEventByRange instance
         */
        CClanMatchEventByRange.create = function create(properties) {
            return new CClanMatchEventByRange(properties);
        };
    
        /**
         * Encodes the specified CClanMatchEventByRange message. Does not implicitly {@link CClanMatchEventByRange.verify|verify} messages.
         * @function encode
         * @memberof CClanMatchEventByRange
         * @static
         * @param {ICClanMatchEventByRange} message CClanMatchEventByRange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClanMatchEventByRange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rtime_before != null && message.hasOwnProperty("rtime_before"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rtime_before);
            if (message.rtime_after != null && message.hasOwnProperty("rtime_after"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.rtime_after);
            if (message.qualified != null && message.hasOwnProperty("qualified"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.qualified);
            if (message.events != null && message.events.length)
                for (var i = 0; i < message.events.length; ++i)
                    $root.CClanEventUserNewsTuple.encode(message.events[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClanMatchEventByRange message, length delimited. Does not implicitly {@link CClanMatchEventByRange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClanMatchEventByRange
         * @static
         * @param {ICClanMatchEventByRange} message CClanMatchEventByRange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClanMatchEventByRange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClanMatchEventByRange message from the specified reader or buffer.
         * @function decode
         * @memberof CClanMatchEventByRange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClanMatchEventByRange} CClanMatchEventByRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClanMatchEventByRange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClanMatchEventByRange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rtime_before = reader.uint32();
                    break;
                case 2:
                    message.rtime_after = reader.uint32();
                    break;
                case 3:
                    message.qualified = reader.uint32();
                    break;
                case 4:
                    if (!(message.events && message.events.length))
                        message.events = [];
                    message.events.push($root.CClanEventUserNewsTuple.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClanMatchEventByRange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClanMatchEventByRange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClanMatchEventByRange} CClanMatchEventByRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClanMatchEventByRange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClanMatchEventByRange message.
         * @function verify
         * @memberof CClanMatchEventByRange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClanMatchEventByRange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rtime_before != null && message.hasOwnProperty("rtime_before"))
                if (!$util.isInteger(message.rtime_before))
                    return "rtime_before: integer expected";
            if (message.rtime_after != null && message.hasOwnProperty("rtime_after"))
                if (!$util.isInteger(message.rtime_after))
                    return "rtime_after: integer expected";
            if (message.qualified != null && message.hasOwnProperty("qualified"))
                if (!$util.isInteger(message.qualified))
                    return "qualified: integer expected";
            if (message.events != null && message.hasOwnProperty("events")) {
                if (!Array.isArray(message.events))
                    return "events: array expected";
                for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.CClanEventUserNewsTuple.verify(message.events[i]);
                    if (error)
                        return "events." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CClanMatchEventByRange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClanMatchEventByRange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClanMatchEventByRange} CClanMatchEventByRange
         */
        CClanMatchEventByRange.fromObject = function fromObject(object) {
            if (object instanceof $root.CClanMatchEventByRange)
                return object;
            var message = new $root.CClanMatchEventByRange();
            if (object.rtime_before != null)
                message.rtime_before = object.rtime_before >>> 0;
            if (object.rtime_after != null)
                message.rtime_after = object.rtime_after >>> 0;
            if (object.qualified != null)
                message.qualified = object.qualified >>> 0;
            if (object.events) {
                if (!Array.isArray(object.events))
                    throw TypeError(".CClanMatchEventByRange.events: array expected");
                message.events = [];
                for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                        throw TypeError(".CClanMatchEventByRange.events: object expected");
                    message.events[i] = $root.CClanEventUserNewsTuple.fromObject(object.events[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClanMatchEventByRange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClanMatchEventByRange
         * @static
         * @param {CClanMatchEventByRange} message CClanMatchEventByRange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClanMatchEventByRange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.events = [];
            if (options.defaults) {
                object.rtime_before = 0;
                object.rtime_after = 0;
                object.qualified = 0;
            }
            if (message.rtime_before != null && message.hasOwnProperty("rtime_before"))
                object.rtime_before = message.rtime_before;
            if (message.rtime_after != null && message.hasOwnProperty("rtime_after"))
                object.rtime_after = message.rtime_after;
            if (message.qualified != null && message.hasOwnProperty("qualified"))
                object.qualified = message.qualified;
            if (message.events && message.events.length) {
                object.events = [];
                for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.CClanEventUserNewsTuple.toObject(message.events[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CClanMatchEventByRange to JSON.
         * @function toJSON
         * @memberof CClanMatchEventByRange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClanMatchEventByRange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClanMatchEventByRange;
    })();
    
    $root.CCommunity_ClanAnnouncementInfo = (function() {
    
        /**
         * Properties of a CCommunity_ClanAnnouncementInfo.
         * @exports ICCommunity_ClanAnnouncementInfo
         * @interface ICCommunity_ClanAnnouncementInfo
         * @property {number|Long|null} [gid] CCommunity_ClanAnnouncementInfo gid
         * @property {number|Long|null} [clanid] CCommunity_ClanAnnouncementInfo clanid
         * @property {number|Long|null} [posterid] CCommunity_ClanAnnouncementInfo posterid
         * @property {string|null} [headline] CCommunity_ClanAnnouncementInfo headline
         * @property {number|null} [posttime] CCommunity_ClanAnnouncementInfo posttime
         * @property {number|null} [updatetime] CCommunity_ClanAnnouncementInfo updatetime
         * @property {string|null} [body] CCommunity_ClanAnnouncementInfo body
         * @property {number|null} [commentcount] CCommunity_ClanAnnouncementInfo commentcount
         * @property {Array.<string>|null} [tags] CCommunity_ClanAnnouncementInfo tags
         * @property {number|null} [language] CCommunity_ClanAnnouncementInfo language
         * @property {boolean|null} [hidden] CCommunity_ClanAnnouncementInfo hidden
         * @property {number|Long|null} [forum_topic_id] CCommunity_ClanAnnouncementInfo forum_topic_id
         */
    
        /**
         * Constructs a new CCommunity_ClanAnnouncementInfo.
         * @exports CCommunity_ClanAnnouncementInfo
         * @classdesc Represents a CCommunity_ClanAnnouncementInfo.
         * @implements ICCommunity_ClanAnnouncementInfo
         * @constructor
         * @param {ICCommunity_ClanAnnouncementInfo=} [properties] Properties to set
         */
        function CCommunity_ClanAnnouncementInfo(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCommunity_ClanAnnouncementInfo gid.
         * @member {number|Long} gid
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.gid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCommunity_ClanAnnouncementInfo clanid.
         * @member {number|Long} clanid
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.clanid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCommunity_ClanAnnouncementInfo posterid.
         * @member {number|Long} posterid
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.posterid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCommunity_ClanAnnouncementInfo headline.
         * @member {string} headline
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.headline = "";
    
        /**
         * CCommunity_ClanAnnouncementInfo posttime.
         * @member {number} posttime
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.posttime = 0;
    
        /**
         * CCommunity_ClanAnnouncementInfo updatetime.
         * @member {number} updatetime
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.updatetime = 0;
    
        /**
         * CCommunity_ClanAnnouncementInfo body.
         * @member {string} body
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.body = "";
    
        /**
         * CCommunity_ClanAnnouncementInfo commentcount.
         * @member {number} commentcount
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.commentcount = 0;
    
        /**
         * CCommunity_ClanAnnouncementInfo tags.
         * @member {Array.<string>} tags
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.tags = $util.emptyArray;
    
        /**
         * CCommunity_ClanAnnouncementInfo language.
         * @member {number} language
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.language = 0;
    
        /**
         * CCommunity_ClanAnnouncementInfo hidden.
         * @member {boolean} hidden
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.hidden = false;
    
        /**
         * CCommunity_ClanAnnouncementInfo forum_topic_id.
         * @member {number|Long} forum_topic_id
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         */
        CCommunity_ClanAnnouncementInfo.prototype.forum_topic_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CCommunity_ClanAnnouncementInfo instance using the specified properties.
         * @function create
         * @memberof CCommunity_ClanAnnouncementInfo
         * @static
         * @param {ICCommunity_ClanAnnouncementInfo=} [properties] Properties to set
         * @returns {CCommunity_ClanAnnouncementInfo} CCommunity_ClanAnnouncementInfo instance
         */
        CCommunity_ClanAnnouncementInfo.create = function create(properties) {
            return new CCommunity_ClanAnnouncementInfo(properties);
        };
    
        /**
         * Encodes the specified CCommunity_ClanAnnouncementInfo message. Does not implicitly {@link CCommunity_ClanAnnouncementInfo.verify|verify} messages.
         * @function encode
         * @memberof CCommunity_ClanAnnouncementInfo
         * @static
         * @param {ICCommunity_ClanAnnouncementInfo} message CCommunity_ClanAnnouncementInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_ClanAnnouncementInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gid != null && message.hasOwnProperty("gid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.gid);
            if (message.clanid != null && message.hasOwnProperty("clanid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.clanid);
            if (message.posterid != null && message.hasOwnProperty("posterid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.posterid);
            if (message.headline != null && message.hasOwnProperty("headline"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.headline);
            if (message.posttime != null && message.hasOwnProperty("posttime"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.posttime);
            if (message.updatetime != null && message.hasOwnProperty("updatetime"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.updatetime);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
            if (message.commentcount != null && message.hasOwnProperty("commentcount"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.commentcount);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.tags[i]);
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.language);
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.hidden);
            if (message.forum_topic_id != null && message.hasOwnProperty("forum_topic_id"))
                writer.uint32(/* id 12, wireType 1 =*/97).fixed64(message.forum_topic_id);
            return writer;
        };
    
        /**
         * Encodes the specified CCommunity_ClanAnnouncementInfo message, length delimited. Does not implicitly {@link CCommunity_ClanAnnouncementInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCommunity_ClanAnnouncementInfo
         * @static
         * @param {ICCommunity_ClanAnnouncementInfo} message CCommunity_ClanAnnouncementInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCommunity_ClanAnnouncementInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCommunity_ClanAnnouncementInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CCommunity_ClanAnnouncementInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCommunity_ClanAnnouncementInfo} CCommunity_ClanAnnouncementInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_ClanAnnouncementInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCommunity_ClanAnnouncementInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gid = reader.uint64();
                    break;
                case 2:
                    message.clanid = reader.uint64();
                    break;
                case 3:
                    message.posterid = reader.uint64();
                    break;
                case 4:
                    message.headline = reader.string();
                    break;
                case 5:
                    message.posttime = reader.uint32();
                    break;
                case 6:
                    message.updatetime = reader.uint32();
                    break;
                case 7:
                    message.body = reader.string();
                    break;
                case 8:
                    message.commentcount = reader.int32();
                    break;
                case 9:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push(reader.string());
                    break;
                case 10:
                    message.language = reader.int32();
                    break;
                case 11:
                    message.hidden = reader.bool();
                    break;
                case 12:
                    message.forum_topic_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCommunity_ClanAnnouncementInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCommunity_ClanAnnouncementInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCommunity_ClanAnnouncementInfo} CCommunity_ClanAnnouncementInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCommunity_ClanAnnouncementInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCommunity_ClanAnnouncementInfo message.
         * @function verify
         * @memberof CCommunity_ClanAnnouncementInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCommunity_ClanAnnouncementInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (!$util.isInteger(message.gid) && !(message.gid && $util.isInteger(message.gid.low) && $util.isInteger(message.gid.high)))
                    return "gid: integer|Long expected";
            if (message.clanid != null && message.hasOwnProperty("clanid"))
                if (!$util.isInteger(message.clanid) && !(message.clanid && $util.isInteger(message.clanid.low) && $util.isInteger(message.clanid.high)))
                    return "clanid: integer|Long expected";
            if (message.posterid != null && message.hasOwnProperty("posterid"))
                if (!$util.isInteger(message.posterid) && !(message.posterid && $util.isInteger(message.posterid.low) && $util.isInteger(message.posterid.high)))
                    return "posterid: integer|Long expected";
            if (message.headline != null && message.hasOwnProperty("headline"))
                if (!$util.isString(message.headline))
                    return "headline: string expected";
            if (message.posttime != null && message.hasOwnProperty("posttime"))
                if (!$util.isInteger(message.posttime))
                    return "posttime: integer expected";
            if (message.updatetime != null && message.hasOwnProperty("updatetime"))
                if (!$util.isInteger(message.updatetime))
                    return "updatetime: integer expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            if (message.commentcount != null && message.hasOwnProperty("commentcount"))
                if (!$util.isInteger(message.commentcount))
                    return "commentcount: integer expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isInteger(message.language))
                    return "language: integer expected";
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                if (typeof message.hidden !== "boolean")
                    return "hidden: boolean expected";
            if (message.forum_topic_id != null && message.hasOwnProperty("forum_topic_id"))
                if (!$util.isInteger(message.forum_topic_id) && !(message.forum_topic_id && $util.isInteger(message.forum_topic_id.low) && $util.isInteger(message.forum_topic_id.high)))
                    return "forum_topic_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CCommunity_ClanAnnouncementInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCommunity_ClanAnnouncementInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCommunity_ClanAnnouncementInfo} CCommunity_ClanAnnouncementInfo
         */
        CCommunity_ClanAnnouncementInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CCommunity_ClanAnnouncementInfo)
                return object;
            var message = new $root.CCommunity_ClanAnnouncementInfo();
            if (object.gid != null)
                if ($util.Long)
                    (message.gid = $util.Long.fromValue(object.gid)).unsigned = true;
                else if (typeof object.gid === "string")
                    message.gid = parseInt(object.gid, 10);
                else if (typeof object.gid === "number")
                    message.gid = object.gid;
                else if (typeof object.gid === "object")
                    message.gid = new $util.LongBits(object.gid.low >>> 0, object.gid.high >>> 0).toNumber(true);
            if (object.clanid != null)
                if ($util.Long)
                    (message.clanid = $util.Long.fromValue(object.clanid)).unsigned = true;
                else if (typeof object.clanid === "string")
                    message.clanid = parseInt(object.clanid, 10);
                else if (typeof object.clanid === "number")
                    message.clanid = object.clanid;
                else if (typeof object.clanid === "object")
                    message.clanid = new $util.LongBits(object.clanid.low >>> 0, object.clanid.high >>> 0).toNumber(true);
            if (object.posterid != null)
                if ($util.Long)
                    (message.posterid = $util.Long.fromValue(object.posterid)).unsigned = true;
                else if (typeof object.posterid === "string")
                    message.posterid = parseInt(object.posterid, 10);
                else if (typeof object.posterid === "number")
                    message.posterid = object.posterid;
                else if (typeof object.posterid === "object")
                    message.posterid = new $util.LongBits(object.posterid.low >>> 0, object.posterid.high >>> 0).toNumber(true);
            if (object.headline != null)
                message.headline = String(object.headline);
            if (object.posttime != null)
                message.posttime = object.posttime >>> 0;
            if (object.updatetime != null)
                message.updatetime = object.updatetime >>> 0;
            if (object.body != null)
                message.body = String(object.body);
            if (object.commentcount != null)
                message.commentcount = object.commentcount | 0;
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".CCommunity_ClanAnnouncementInfo.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.language != null)
                message.language = object.language | 0;
            if (object.hidden != null)
                message.hidden = Boolean(object.hidden);
            if (object.forum_topic_id != null)
                if ($util.Long)
                    (message.forum_topic_id = $util.Long.fromValue(object.forum_topic_id)).unsigned = false;
                else if (typeof object.forum_topic_id === "string")
                    message.forum_topic_id = parseInt(object.forum_topic_id, 10);
                else if (typeof object.forum_topic_id === "number")
                    message.forum_topic_id = object.forum_topic_id;
                else if (typeof object.forum_topic_id === "object")
                    message.forum_topic_id = new $util.LongBits(object.forum_topic_id.low >>> 0, object.forum_topic_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CCommunity_ClanAnnouncementInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCommunity_ClanAnnouncementInfo
         * @static
         * @param {CCommunity_ClanAnnouncementInfo} message CCommunity_ClanAnnouncementInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCommunity_ClanAnnouncementInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.clanid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clanid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.posterid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.posterid = options.longs === String ? "0" : 0;
                object.headline = "";
                object.posttime = 0;
                object.updatetime = 0;
                object.body = "";
                object.commentcount = 0;
                object.language = 0;
                object.hidden = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.forum_topic_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.forum_topic_id = options.longs === String ? "0" : 0;
            }
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (typeof message.gid === "number")
                    object.gid = options.longs === String ? String(message.gid) : message.gid;
                else
                    object.gid = options.longs === String ? $util.Long.prototype.toString.call(message.gid) : options.longs === Number ? new $util.LongBits(message.gid.low >>> 0, message.gid.high >>> 0).toNumber(true) : message.gid;
            if (message.clanid != null && message.hasOwnProperty("clanid"))
                if (typeof message.clanid === "number")
                    object.clanid = options.longs === String ? String(message.clanid) : message.clanid;
                else
                    object.clanid = options.longs === String ? $util.Long.prototype.toString.call(message.clanid) : options.longs === Number ? new $util.LongBits(message.clanid.low >>> 0, message.clanid.high >>> 0).toNumber(true) : message.clanid;
            if (message.posterid != null && message.hasOwnProperty("posterid"))
                if (typeof message.posterid === "number")
                    object.posterid = options.longs === String ? String(message.posterid) : message.posterid;
                else
                    object.posterid = options.longs === String ? $util.Long.prototype.toString.call(message.posterid) : options.longs === Number ? new $util.LongBits(message.posterid.low >>> 0, message.posterid.high >>> 0).toNumber(true) : message.posterid;
            if (message.headline != null && message.hasOwnProperty("headline"))
                object.headline = message.headline;
            if (message.posttime != null && message.hasOwnProperty("posttime"))
                object.posttime = message.posttime;
            if (message.updatetime != null && message.hasOwnProperty("updatetime"))
                object.updatetime = message.updatetime;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.commentcount != null && message.hasOwnProperty("commentcount"))
                object.commentcount = message.commentcount;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                object.hidden = message.hidden;
            if (message.forum_topic_id != null && message.hasOwnProperty("forum_topic_id"))
                if (typeof message.forum_topic_id === "number")
                    object.forum_topic_id = options.longs === String ? String(message.forum_topic_id) : message.forum_topic_id;
                else
                    object.forum_topic_id = options.longs === String ? $util.Long.prototype.toString.call(message.forum_topic_id) : options.longs === Number ? new $util.LongBits(message.forum_topic_id.low >>> 0, message.forum_topic_id.high >>> 0).toNumber() : message.forum_topic_id;
            return object;
        };
    
        /**
         * Converts this CCommunity_ClanAnnouncementInfo to JSON.
         * @function toJSON
         * @memberof CCommunity_ClanAnnouncementInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCommunity_ClanAnnouncementInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCommunity_ClanAnnouncementInfo;
    })();
    
    $root.CClanEventData = (function() {
    
        /**
         * Properties of a CClanEventData.
         * @exports ICClanEventData
         * @interface ICClanEventData
         * @property {number|Long|null} [gid] CClanEventData gid
         * @property {number|Long|null} [clan_steamid] CClanEventData clan_steamid
         * @property {string|null} [event_name] CClanEventData event_name
         * @property {EProtoClanEventType|null} [event_type] CClanEventData event_type
         * @property {number|null} [appid] CClanEventData appid
         * @property {string|null} [server_address] CClanEventData server_address
         * @property {string|null} [server_password] CClanEventData server_password
         * @property {number|null} [rtime32_start_time] CClanEventData rtime32_start_time
         * @property {number|null} [rtime32_end_time] CClanEventData rtime32_end_time
         * @property {number|null} [comment_count] CClanEventData comment_count
         * @property {number|Long|null} [creator_steamid] CClanEventData creator_steamid
         * @property {number|Long|null} [last_update_steamid] CClanEventData last_update_steamid
         * @property {string|null} [event_notes] CClanEventData event_notes
         * @property {string|null} [jsondata] CClanEventData jsondata
         * @property {ICCommunity_ClanAnnouncementInfo|null} [announcement_body] CClanEventData announcement_body
         * @property {boolean|null} [published] CClanEventData published
         * @property {boolean|null} [hidden] CClanEventData hidden
         * @property {number|null} [rtime32_visibility_start] CClanEventData rtime32_visibility_start
         * @property {number|null} [rtime32_visibility_end] CClanEventData rtime32_visibility_end
         * @property {number|null} [broadcaster_accountid] CClanEventData broadcaster_accountid
         * @property {number|null} [follower_count] CClanEventData follower_count
         * @property {number|null} [ignore_count] CClanEventData ignore_count
         * @property {number|Long|null} [forum_topic_id] CClanEventData forum_topic_id
         * @property {number|null} [rtime32_last_modified] CClanEventData rtime32_last_modified
         */
    
        /**
         * Constructs a new CClanEventData.
         * @exports CClanEventData
         * @classdesc Represents a CClanEventData.
         * @implements ICClanEventData
         * @constructor
         * @param {ICClanEventData=} [properties] Properties to set
         */
        function CClanEventData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClanEventData gid.
         * @member {number|Long} gid
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.gid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CClanEventData clan_steamid.
         * @member {number|Long} clan_steamid
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.clan_steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CClanEventData event_name.
         * @member {string} event_name
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.event_name = "";
    
        /**
         * CClanEventData event_type.
         * @member {EProtoClanEventType} event_type
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.event_type = 1;
    
        /**
         * CClanEventData appid.
         * @member {number} appid
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.appid = 0;
    
        /**
         * CClanEventData server_address.
         * @member {string} server_address
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.server_address = "";
    
        /**
         * CClanEventData server_password.
         * @member {string} server_password
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.server_password = "";
    
        /**
         * CClanEventData rtime32_start_time.
         * @member {number} rtime32_start_time
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.rtime32_start_time = 0;
    
        /**
         * CClanEventData rtime32_end_time.
         * @member {number} rtime32_end_time
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.rtime32_end_time = 0;
    
        /**
         * CClanEventData comment_count.
         * @member {number} comment_count
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.comment_count = 0;
    
        /**
         * CClanEventData creator_steamid.
         * @member {number|Long} creator_steamid
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.creator_steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CClanEventData last_update_steamid.
         * @member {number|Long} last_update_steamid
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.last_update_steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CClanEventData event_notes.
         * @member {string} event_notes
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.event_notes = "";
    
        /**
         * CClanEventData jsondata.
         * @member {string} jsondata
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.jsondata = "";
    
        /**
         * CClanEventData announcement_body.
         * @member {ICCommunity_ClanAnnouncementInfo|null|undefined} announcement_body
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.announcement_body = null;
    
        /**
         * CClanEventData published.
         * @member {boolean} published
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.published = false;
    
        /**
         * CClanEventData hidden.
         * @member {boolean} hidden
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.hidden = false;
    
        /**
         * CClanEventData rtime32_visibility_start.
         * @member {number} rtime32_visibility_start
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.rtime32_visibility_start = 0;
    
        /**
         * CClanEventData rtime32_visibility_end.
         * @member {number} rtime32_visibility_end
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.rtime32_visibility_end = 0;
    
        /**
         * CClanEventData broadcaster_accountid.
         * @member {number} broadcaster_accountid
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.broadcaster_accountid = 0;
    
        /**
         * CClanEventData follower_count.
         * @member {number} follower_count
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.follower_count = 0;
    
        /**
         * CClanEventData ignore_count.
         * @member {number} ignore_count
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.ignore_count = 0;
    
        /**
         * CClanEventData forum_topic_id.
         * @member {number|Long} forum_topic_id
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.forum_topic_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CClanEventData rtime32_last_modified.
         * @member {number} rtime32_last_modified
         * @memberof CClanEventData
         * @instance
         */
        CClanEventData.prototype.rtime32_last_modified = 0;
    
        /**
         * Creates a new CClanEventData instance using the specified properties.
         * @function create
         * @memberof CClanEventData
         * @static
         * @param {ICClanEventData=} [properties] Properties to set
         * @returns {CClanEventData} CClanEventData instance
         */
        CClanEventData.create = function create(properties) {
            return new CClanEventData(properties);
        };
    
        /**
         * Encodes the specified CClanEventData message. Does not implicitly {@link CClanEventData.verify|verify} messages.
         * @function encode
         * @memberof CClanEventData
         * @static
         * @param {ICClanEventData} message CClanEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClanEventData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gid != null && message.hasOwnProperty("gid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.gid);
            if (message.clan_steamid != null && message.hasOwnProperty("clan_steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.clan_steamid);
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.event_name);
            if (message.event_type != null && message.hasOwnProperty("event_type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.event_type);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.appid);
            if (message.server_address != null && message.hasOwnProperty("server_address"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.server_address);
            if (message.server_password != null && message.hasOwnProperty("server_password"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.server_password);
            if (message.rtime32_start_time != null && message.hasOwnProperty("rtime32_start_time"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.rtime32_start_time);
            if (message.rtime32_end_time != null && message.hasOwnProperty("rtime32_end_time"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.rtime32_end_time);
            if (message.comment_count != null && message.hasOwnProperty("comment_count"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.comment_count);
            if (message.creator_steamid != null && message.hasOwnProperty("creator_steamid"))
                writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.creator_steamid);
            if (message.last_update_steamid != null && message.hasOwnProperty("last_update_steamid"))
                writer.uint32(/* id 12, wireType 1 =*/97).fixed64(message.last_update_steamid);
            if (message.event_notes != null && message.hasOwnProperty("event_notes"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.event_notes);
            if (message.jsondata != null && message.hasOwnProperty("jsondata"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.jsondata);
            if (message.announcement_body != null && message.hasOwnProperty("announcement_body"))
                $root.CCommunity_ClanAnnouncementInfo.encode(message.announcement_body, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.published != null && message.hasOwnProperty("published"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.published);
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.hidden);
            if (message.rtime32_visibility_start != null && message.hasOwnProperty("rtime32_visibility_start"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.rtime32_visibility_start);
            if (message.rtime32_visibility_end != null && message.hasOwnProperty("rtime32_visibility_end"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.rtime32_visibility_end);
            if (message.broadcaster_accountid != null && message.hasOwnProperty("broadcaster_accountid"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.broadcaster_accountid);
            if (message.follower_count != null && message.hasOwnProperty("follower_count"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.follower_count);
            if (message.ignore_count != null && message.hasOwnProperty("ignore_count"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.ignore_count);
            if (message.forum_topic_id != null && message.hasOwnProperty("forum_topic_id"))
                writer.uint32(/* id 23, wireType 1 =*/185).fixed64(message.forum_topic_id);
            if (message.rtime32_last_modified != null && message.hasOwnProperty("rtime32_last_modified"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.rtime32_last_modified);
            return writer;
        };
    
        /**
         * Encodes the specified CClanEventData message, length delimited. Does not implicitly {@link CClanEventData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClanEventData
         * @static
         * @param {ICClanEventData} message CClanEventData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClanEventData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClanEventData message from the specified reader or buffer.
         * @function decode
         * @memberof CClanEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClanEventData} CClanEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClanEventData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClanEventData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gid = reader.fixed64();
                    break;
                case 2:
                    message.clan_steamid = reader.fixed64();
                    break;
                case 3:
                    message.event_name = reader.string();
                    break;
                case 4:
                    message.event_type = reader.int32();
                    break;
                case 5:
                    message.appid = reader.uint32();
                    break;
                case 6:
                    message.server_address = reader.string();
                    break;
                case 7:
                    message.server_password = reader.string();
                    break;
                case 8:
                    message.rtime32_start_time = reader.uint32();
                    break;
                case 9:
                    message.rtime32_end_time = reader.uint32();
                    break;
                case 10:
                    message.comment_count = reader.int32();
                    break;
                case 11:
                    message.creator_steamid = reader.fixed64();
                    break;
                case 12:
                    message.last_update_steamid = reader.fixed64();
                    break;
                case 13:
                    message.event_notes = reader.string();
                    break;
                case 14:
                    message.jsondata = reader.string();
                    break;
                case 15:
                    message.announcement_body = $root.CCommunity_ClanAnnouncementInfo.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.published = reader.bool();
                    break;
                case 17:
                    message.hidden = reader.bool();
                    break;
                case 18:
                    message.rtime32_visibility_start = reader.uint32();
                    break;
                case 19:
                    message.rtime32_visibility_end = reader.uint32();
                    break;
                case 20:
                    message.broadcaster_accountid = reader.uint32();
                    break;
                case 21:
                    message.follower_count = reader.uint32();
                    break;
                case 22:
                    message.ignore_count = reader.uint32();
                    break;
                case 23:
                    message.forum_topic_id = reader.fixed64();
                    break;
                case 24:
                    message.rtime32_last_modified = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClanEventData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClanEventData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClanEventData} CClanEventData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClanEventData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClanEventData message.
         * @function verify
         * @memberof CClanEventData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClanEventData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (!$util.isInteger(message.gid) && !(message.gid && $util.isInteger(message.gid.low) && $util.isInteger(message.gid.high)))
                    return "gid: integer|Long expected";
            if (message.clan_steamid != null && message.hasOwnProperty("clan_steamid"))
                if (!$util.isInteger(message.clan_steamid) && !(message.clan_steamid && $util.isInteger(message.clan_steamid.low) && $util.isInteger(message.clan_steamid.high)))
                    return "clan_steamid: integer|Long expected";
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                if (!$util.isString(message.event_name))
                    return "event_name: string expected";
            if (message.event_type != null && message.hasOwnProperty("event_type"))
                switch (message.event_type) {
                default:
                    return "event_type: enum value expected";
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                    break;
                }
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.server_address != null && message.hasOwnProperty("server_address"))
                if (!$util.isString(message.server_address))
                    return "server_address: string expected";
            if (message.server_password != null && message.hasOwnProperty("server_password"))
                if (!$util.isString(message.server_password))
                    return "server_password: string expected";
            if (message.rtime32_start_time != null && message.hasOwnProperty("rtime32_start_time"))
                if (!$util.isInteger(message.rtime32_start_time))
                    return "rtime32_start_time: integer expected";
            if (message.rtime32_end_time != null && message.hasOwnProperty("rtime32_end_time"))
                if (!$util.isInteger(message.rtime32_end_time))
                    return "rtime32_end_time: integer expected";
            if (message.comment_count != null && message.hasOwnProperty("comment_count"))
                if (!$util.isInteger(message.comment_count))
                    return "comment_count: integer expected";
            if (message.creator_steamid != null && message.hasOwnProperty("creator_steamid"))
                if (!$util.isInteger(message.creator_steamid) && !(message.creator_steamid && $util.isInteger(message.creator_steamid.low) && $util.isInteger(message.creator_steamid.high)))
                    return "creator_steamid: integer|Long expected";
            if (message.last_update_steamid != null && message.hasOwnProperty("last_update_steamid"))
                if (!$util.isInteger(message.last_update_steamid) && !(message.last_update_steamid && $util.isInteger(message.last_update_steamid.low) && $util.isInteger(message.last_update_steamid.high)))
                    return "last_update_steamid: integer|Long expected";
            if (message.event_notes != null && message.hasOwnProperty("event_notes"))
                if (!$util.isString(message.event_notes))
                    return "event_notes: string expected";
            if (message.jsondata != null && message.hasOwnProperty("jsondata"))
                if (!$util.isString(message.jsondata))
                    return "jsondata: string expected";
            if (message.announcement_body != null && message.hasOwnProperty("announcement_body")) {
                var error = $root.CCommunity_ClanAnnouncementInfo.verify(message.announcement_body);
                if (error)
                    return "announcement_body." + error;
            }
            if (message.published != null && message.hasOwnProperty("published"))
                if (typeof message.published !== "boolean")
                    return "published: boolean expected";
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                if (typeof message.hidden !== "boolean")
                    return "hidden: boolean expected";
            if (message.rtime32_visibility_start != null && message.hasOwnProperty("rtime32_visibility_start"))
                if (!$util.isInteger(message.rtime32_visibility_start))
                    return "rtime32_visibility_start: integer expected";
            if (message.rtime32_visibility_end != null && message.hasOwnProperty("rtime32_visibility_end"))
                if (!$util.isInteger(message.rtime32_visibility_end))
                    return "rtime32_visibility_end: integer expected";
            if (message.broadcaster_accountid != null && message.hasOwnProperty("broadcaster_accountid"))
                if (!$util.isInteger(message.broadcaster_accountid))
                    return "broadcaster_accountid: integer expected";
            if (message.follower_count != null && message.hasOwnProperty("follower_count"))
                if (!$util.isInteger(message.follower_count))
                    return "follower_count: integer expected";
            if (message.ignore_count != null && message.hasOwnProperty("ignore_count"))
                if (!$util.isInteger(message.ignore_count))
                    return "ignore_count: integer expected";
            if (message.forum_topic_id != null && message.hasOwnProperty("forum_topic_id"))
                if (!$util.isInteger(message.forum_topic_id) && !(message.forum_topic_id && $util.isInteger(message.forum_topic_id.low) && $util.isInteger(message.forum_topic_id.high)))
                    return "forum_topic_id: integer|Long expected";
            if (message.rtime32_last_modified != null && message.hasOwnProperty("rtime32_last_modified"))
                if (!$util.isInteger(message.rtime32_last_modified))
                    return "rtime32_last_modified: integer expected";
            return null;
        };
    
        /**
         * Creates a CClanEventData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClanEventData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClanEventData} CClanEventData
         */
        CClanEventData.fromObject = function fromObject(object) {
            if (object instanceof $root.CClanEventData)
                return object;
            var message = new $root.CClanEventData();
            if (object.gid != null)
                if ($util.Long)
                    (message.gid = $util.Long.fromValue(object.gid)).unsigned = false;
                else if (typeof object.gid === "string")
                    message.gid = parseInt(object.gid, 10);
                else if (typeof object.gid === "number")
                    message.gid = object.gid;
                else if (typeof object.gid === "object")
                    message.gid = new $util.LongBits(object.gid.low >>> 0, object.gid.high >>> 0).toNumber();
            if (object.clan_steamid != null)
                if ($util.Long)
                    (message.clan_steamid = $util.Long.fromValue(object.clan_steamid)).unsigned = false;
                else if (typeof object.clan_steamid === "string")
                    message.clan_steamid = parseInt(object.clan_steamid, 10);
                else if (typeof object.clan_steamid === "number")
                    message.clan_steamid = object.clan_steamid;
                else if (typeof object.clan_steamid === "object")
                    message.clan_steamid = new $util.LongBits(object.clan_steamid.low >>> 0, object.clan_steamid.high >>> 0).toNumber();
            if (object.event_name != null)
                message.event_name = String(object.event_name);
            switch (object.event_type) {
            case "k_EClanOtherEvent":
            case 1:
                message.event_type = 1;
                break;
            case "k_EClanGameEvent":
            case 2:
                message.event_type = 2;
                break;
            case "k_EClanPartyEvent":
            case 3:
                message.event_type = 3;
                break;
            case "k_EClanMeetingEvent":
            case 4:
                message.event_type = 4;
                break;
            case "k_EClanSpecialCauseEvent":
            case 5:
                message.event_type = 5;
                break;
            case "k_EClanMusicAndArtsEvent":
            case 6:
                message.event_type = 6;
                break;
            case "k_EClanSportsEvent":
            case 7:
                message.event_type = 7;
                break;
            case "k_EClanTripEvent":
            case 8:
                message.event_type = 8;
                break;
            case "k_EClanChatEvent":
            case 9:
                message.event_type = 9;
                break;
            case "k_EClanGameReleaseEvent":
            case 10:
                message.event_type = 10;
                break;
            case "k_EClanBroadcastEvent":
            case 11:
                message.event_type = 11;
                break;
            case "k_EClanSmallUpdateEvent":
            case 12:
                message.event_type = 12;
                break;
            case "k_EClanPreAnnounceMajorUpdateEvent":
            case 13:
                message.event_type = 13;
                break;
            case "k_EClanMajorUpdateEvent":
            case 14:
                message.event_type = 14;
                break;
            case "k_EClanDLCReleaseEvent":
            case 15:
                message.event_type = 15;
                break;
            case "k_EClanFutureReleaseEvent":
            case 16:
                message.event_type = 16;
                break;
            case "k_EClanESportTournamentStreamEvent":
            case 17:
                message.event_type = 17;
                break;
            case "k_EClanDevStreamEvent":
            case 18:
                message.event_type = 18;
                break;
            case "k_EClanFamousStreamEvent":
            case 19:
                message.event_type = 19;
                break;
            case "k_EClanGameSalesEvent":
            case 20:
                message.event_type = 20;
                break;
            case "k_EClanGameItemSalesEvent":
            case 21:
                message.event_type = 21;
                break;
            case "k_EClanInGameBonusXPEvent":
            case 22:
                message.event_type = 22;
                break;
            case "k_EClanInGameLootEvent":
            case 23:
                message.event_type = 23;
                break;
            case "k_EClanInGamePerksEvent":
            case 24:
                message.event_type = 24;
                break;
            case "k_EClanInGameChallengeEvent":
            case 25:
                message.event_type = 25;
                break;
            case "k_EClanInGameContestEvent":
            case 26:
                message.event_type = 26;
                break;
            case "k_EClanIRLEvent":
            case 27:
                message.event_type = 27;
                break;
            case "k_EClanNewsEvent":
            case 28:
                message.event_type = 28;
                break;
            case "k_EClanBetaReleaseEvent":
            case 29:
                message.event_type = 29;
                break;
            case "k_EClanInGameContentReleaseEvent":
            case 30:
                message.event_type = 30;
                break;
            case "k_EClanFreeTrial":
            case 31:
                message.event_type = 31;
                break;
            case "k_EClanSeasonRelease":
            case 32:
                message.event_type = 32;
                break;
            case "k_EClanSeasonUpdate":
            case 33:
                message.event_type = 33;
                break;
            }
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.server_address != null)
                message.server_address = String(object.server_address);
            if (object.server_password != null)
                message.server_password = String(object.server_password);
            if (object.rtime32_start_time != null)
                message.rtime32_start_time = object.rtime32_start_time >>> 0;
            if (object.rtime32_end_time != null)
                message.rtime32_end_time = object.rtime32_end_time >>> 0;
            if (object.comment_count != null)
                message.comment_count = object.comment_count | 0;
            if (object.creator_steamid != null)
                if ($util.Long)
                    (message.creator_steamid = $util.Long.fromValue(object.creator_steamid)).unsigned = false;
                else if (typeof object.creator_steamid === "string")
                    message.creator_steamid = parseInt(object.creator_steamid, 10);
                else if (typeof object.creator_steamid === "number")
                    message.creator_steamid = object.creator_steamid;
                else if (typeof object.creator_steamid === "object")
                    message.creator_steamid = new $util.LongBits(object.creator_steamid.low >>> 0, object.creator_steamid.high >>> 0).toNumber();
            if (object.last_update_steamid != null)
                if ($util.Long)
                    (message.last_update_steamid = $util.Long.fromValue(object.last_update_steamid)).unsigned = false;
                else if (typeof object.last_update_steamid === "string")
                    message.last_update_steamid = parseInt(object.last_update_steamid, 10);
                else if (typeof object.last_update_steamid === "number")
                    message.last_update_steamid = object.last_update_steamid;
                else if (typeof object.last_update_steamid === "object")
                    message.last_update_steamid = new $util.LongBits(object.last_update_steamid.low >>> 0, object.last_update_steamid.high >>> 0).toNumber();
            if (object.event_notes != null)
                message.event_notes = String(object.event_notes);
            if (object.jsondata != null)
                message.jsondata = String(object.jsondata);
            if (object.announcement_body != null) {
                if (typeof object.announcement_body !== "object")
                    throw TypeError(".CClanEventData.announcement_body: object expected");
                message.announcement_body = $root.CCommunity_ClanAnnouncementInfo.fromObject(object.announcement_body);
            }
            if (object.published != null)
                message.published = Boolean(object.published);
            if (object.hidden != null)
                message.hidden = Boolean(object.hidden);
            if (object.rtime32_visibility_start != null)
                message.rtime32_visibility_start = object.rtime32_visibility_start >>> 0;
            if (object.rtime32_visibility_end != null)
                message.rtime32_visibility_end = object.rtime32_visibility_end >>> 0;
            if (object.broadcaster_accountid != null)
                message.broadcaster_accountid = object.broadcaster_accountid >>> 0;
            if (object.follower_count != null)
                message.follower_count = object.follower_count >>> 0;
            if (object.ignore_count != null)
                message.ignore_count = object.ignore_count >>> 0;
            if (object.forum_topic_id != null)
                if ($util.Long)
                    (message.forum_topic_id = $util.Long.fromValue(object.forum_topic_id)).unsigned = false;
                else if (typeof object.forum_topic_id === "string")
                    message.forum_topic_id = parseInt(object.forum_topic_id, 10);
                else if (typeof object.forum_topic_id === "number")
                    message.forum_topic_id = object.forum_topic_id;
                else if (typeof object.forum_topic_id === "object")
                    message.forum_topic_id = new $util.LongBits(object.forum_topic_id.low >>> 0, object.forum_topic_id.high >>> 0).toNumber();
            if (object.rtime32_last_modified != null)
                message.rtime32_last_modified = object.rtime32_last_modified >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClanEventData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClanEventData
         * @static
         * @param {CClanEventData} message CClanEventData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClanEventData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clan_steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clan_steamid = options.longs === String ? "0" : 0;
                object.event_name = "";
                object.event_type = options.enums === String ? "k_EClanOtherEvent" : 1;
                object.appid = 0;
                object.server_address = "";
                object.server_password = "";
                object.rtime32_start_time = 0;
                object.rtime32_end_time = 0;
                object.comment_count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.creator_steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.creator_steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.last_update_steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.last_update_steamid = options.longs === String ? "0" : 0;
                object.event_notes = "";
                object.jsondata = "";
                object.announcement_body = null;
                object.published = false;
                object.hidden = false;
                object.rtime32_visibility_start = 0;
                object.rtime32_visibility_end = 0;
                object.broadcaster_accountid = 0;
                object.follower_count = 0;
                object.ignore_count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.forum_topic_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.forum_topic_id = options.longs === String ? "0" : 0;
                object.rtime32_last_modified = 0;
            }
            if (message.gid != null && message.hasOwnProperty("gid"))
                if (typeof message.gid === "number")
                    object.gid = options.longs === String ? String(message.gid) : message.gid;
                else
                    object.gid = options.longs === String ? $util.Long.prototype.toString.call(message.gid) : options.longs === Number ? new $util.LongBits(message.gid.low >>> 0, message.gid.high >>> 0).toNumber() : message.gid;
            if (message.clan_steamid != null && message.hasOwnProperty("clan_steamid"))
                if (typeof message.clan_steamid === "number")
                    object.clan_steamid = options.longs === String ? String(message.clan_steamid) : message.clan_steamid;
                else
                    object.clan_steamid = options.longs === String ? $util.Long.prototype.toString.call(message.clan_steamid) : options.longs === Number ? new $util.LongBits(message.clan_steamid.low >>> 0, message.clan_steamid.high >>> 0).toNumber() : message.clan_steamid;
            if (message.event_name != null && message.hasOwnProperty("event_name"))
                object.event_name = message.event_name;
            if (message.event_type != null && message.hasOwnProperty("event_type"))
                object.event_type = options.enums === String ? $root.EProtoClanEventType[message.event_type] : message.event_type;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.server_address != null && message.hasOwnProperty("server_address"))
                object.server_address = message.server_address;
            if (message.server_password != null && message.hasOwnProperty("server_password"))
                object.server_password = message.server_password;
            if (message.rtime32_start_time != null && message.hasOwnProperty("rtime32_start_time"))
                object.rtime32_start_time = message.rtime32_start_time;
            if (message.rtime32_end_time != null && message.hasOwnProperty("rtime32_end_time"))
                object.rtime32_end_time = message.rtime32_end_time;
            if (message.comment_count != null && message.hasOwnProperty("comment_count"))
                object.comment_count = message.comment_count;
            if (message.creator_steamid != null && message.hasOwnProperty("creator_steamid"))
                if (typeof message.creator_steamid === "number")
                    object.creator_steamid = options.longs === String ? String(message.creator_steamid) : message.creator_steamid;
                else
                    object.creator_steamid = options.longs === String ? $util.Long.prototype.toString.call(message.creator_steamid) : options.longs === Number ? new $util.LongBits(message.creator_steamid.low >>> 0, message.creator_steamid.high >>> 0).toNumber() : message.creator_steamid;
            if (message.last_update_steamid != null && message.hasOwnProperty("last_update_steamid"))
                if (typeof message.last_update_steamid === "number")
                    object.last_update_steamid = options.longs === String ? String(message.last_update_steamid) : message.last_update_steamid;
                else
                    object.last_update_steamid = options.longs === String ? $util.Long.prototype.toString.call(message.last_update_steamid) : options.longs === Number ? new $util.LongBits(message.last_update_steamid.low >>> 0, message.last_update_steamid.high >>> 0).toNumber() : message.last_update_steamid;
            if (message.event_notes != null && message.hasOwnProperty("event_notes"))
                object.event_notes = message.event_notes;
            if (message.jsondata != null && message.hasOwnProperty("jsondata"))
                object.jsondata = message.jsondata;
            if (message.announcement_body != null && message.hasOwnProperty("announcement_body"))
                object.announcement_body = $root.CCommunity_ClanAnnouncementInfo.toObject(message.announcement_body, options);
            if (message.published != null && message.hasOwnProperty("published"))
                object.published = message.published;
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                object.hidden = message.hidden;
            if (message.rtime32_visibility_start != null && message.hasOwnProperty("rtime32_visibility_start"))
                object.rtime32_visibility_start = message.rtime32_visibility_start;
            if (message.rtime32_visibility_end != null && message.hasOwnProperty("rtime32_visibility_end"))
                object.rtime32_visibility_end = message.rtime32_visibility_end;
            if (message.broadcaster_accountid != null && message.hasOwnProperty("broadcaster_accountid"))
                object.broadcaster_accountid = message.broadcaster_accountid;
            if (message.follower_count != null && message.hasOwnProperty("follower_count"))
                object.follower_count = message.follower_count;
            if (message.ignore_count != null && message.hasOwnProperty("ignore_count"))
                object.ignore_count = message.ignore_count;
            if (message.forum_topic_id != null && message.hasOwnProperty("forum_topic_id"))
                if (typeof message.forum_topic_id === "number")
                    object.forum_topic_id = options.longs === String ? String(message.forum_topic_id) : message.forum_topic_id;
                else
                    object.forum_topic_id = options.longs === String ? $util.Long.prototype.toString.call(message.forum_topic_id) : options.longs === Number ? new $util.LongBits(message.forum_topic_id.low >>> 0, message.forum_topic_id.high >>> 0).toNumber() : message.forum_topic_id;
            if (message.rtime32_last_modified != null && message.hasOwnProperty("rtime32_last_modified"))
                object.rtime32_last_modified = message.rtime32_last_modified;
            return object;
        };
    
        /**
         * Converts this CClanEventData to JSON.
         * @function toJSON
         * @memberof CClanEventData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClanEventData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClanEventData;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [public_dependency] FileDescriptorProto public_dependency
                 * @property {Array.<number>|null} [weak_dependency] FileDescriptorProto weak_dependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [message_type] FileDescriptorProto message_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.public_dependency = [];
                    this.weak_dependency = [];
                    this.message_type = [];
                    this.enum_type = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto public_dependency.
                 * @member {Array.<number>} public_dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.public_dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weak_dependency.
                 * @member {Array.<number>} weak_dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto message_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} message_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.message_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto source_code_info.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} source_code_info
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.source_code_info = null;
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.message_type != null && message.message_type.length)
                        for (var i = 0; i < message.message_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.public_dependency != null && message.public_dependency.length)
                        for (var i = 0; i < message.public_dependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                    if (message.weak_dependency != null && message.weak_dependency.length)
                        for (var i = 0; i < message.weak_dependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.public_dependency && message.public_dependency.length))
                                message.public_dependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.public_dependency.push(reader.int32());
                            } else
                                message.public_dependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weak_dependency && message.weak_dependency.length))
                                message.weak_dependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weak_dependency.push(reader.int32());
                            } else
                                message.weak_dependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.message_type && message.message_type.length))
                                message.message_type = [];
                            message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.public_dependency != null && message.hasOwnProperty("public_dependency")) {
                        if (!Array.isArray(message.public_dependency))
                            return "public_dependency: array expected";
                        for (var i = 0; i < message.public_dependency.length; ++i)
                            if (!$util.isInteger(message.public_dependency[i]))
                                return "public_dependency: integer[] expected";
                    }
                    if (message.weak_dependency != null && message.hasOwnProperty("weak_dependency")) {
                        if (!Array.isArray(message.weak_dependency))
                            return "weak_dependency: array expected";
                        for (var i = 0; i < message.weak_dependency.length; ++i)
                            if (!$util.isInteger(message.weak_dependency[i]))
                                return "weak_dependency: integer[] expected";
                    }
                    if (message.message_type != null && message.hasOwnProperty("message_type")) {
                        if (!Array.isArray(message.message_type))
                            return "message_type: array expected";
                        for (var i = 0; i < message.message_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.message_type[i]);
                            if (error)
                                return "message_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.source_code_info);
                        if (error)
                            return "source_code_info." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.public_dependency) {
                        if (!Array.isArray(object.public_dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.public_dependency: array expected");
                        message.public_dependency = [];
                        for (var i = 0; i < object.public_dependency.length; ++i)
                            message.public_dependency[i] = object.public_dependency[i] | 0;
                    }
                    if (object.weak_dependency) {
                        if (!Array.isArray(object.weak_dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weak_dependency: array expected");
                        message.weak_dependency = [];
                        for (var i = 0; i < object.weak_dependency.length; ++i)
                            message.weak_dependency[i] = object.weak_dependency[i] | 0;
                    }
                    if (object.message_type) {
                        if (!Array.isArray(object.message_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.message_type: array expected");
                        message.message_type = [];
                        for (var i = 0; i < object.message_type.length; ++i) {
                            if (typeof object.message_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.message_type: object expected");
                            message.message_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.message_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.source_code_info != null) {
                        if (typeof object.source_code_info !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.source_code_info: object expected");
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.fromObject(object.source_code_info);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.message_type = [];
                        object.enum_type = [];
                        object.service = [];
                        object.extension = [];
                        object.public_dependency = [];
                        object.weak_dependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.source_code_info = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.message_type && message.message_type.length) {
                        object.message_type = [];
                        for (var j = 0; j < message.message_type.length; ++j)
                            object.message_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.message_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.source_code_info != null && message.hasOwnProperty("source_code_info"))
                        object.source_code_info = $root.google.protobuf.SourceCodeInfo.toObject(message.source_code_info, options);
                    if (message.public_dependency && message.public_dependency.length) {
                        object.public_dependency = [];
                        for (var j = 0; j < message.public_dependency.length; ++j)
                            object.public_dependency[j] = message.public_dependency[j];
                    }
                    if (message.weak_dependency && message.weak_dependency.length) {
                        object.weak_dependency = [];
                        for (var j = 0; j < message.weak_dependency.length; ++j)
                            object.weak_dependency[j] = message.weak_dependency[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nested_type] DescriptorProto nested_type
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extension_range] DescriptorProto extension_range
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneof_decl] DescriptorProto oneof_decl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nested_type = [];
                    this.enum_type = [];
                    this.extension_range = [];
                    this.oneof_decl = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nested_type.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nested_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nested_type = $util.emptyArray;
    
                /**
                 * DescriptorProto enum_type.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enum_type
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enum_type = $util.emptyArray;
    
                /**
                 * DescriptorProto extension_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extension_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension_range = $util.emptyArray;
    
                /**
                 * DescriptorProto oneof_decl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneof_decl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneof_decl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nested_type != null && message.nested_type.length)
                        for (var i = 0; i < message.nested_type.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enum_type != null && message.enum_type.length)
                        for (var i = 0; i < message.enum_type.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extension_range != null && message.extension_range.length)
                        for (var i = 0; i < message.extension_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneof_decl != null && message.oneof_decl.length)
                        for (var i = 0; i < message.oneof_decl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nested_type && message.nested_type.length))
                                message.nested_type = [];
                            message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enum_type && message.enum_type.length))
                                message.enum_type = [];
                            message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extension_range && message.extension_range.length))
                                message.extension_range = [];
                            message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneof_decl && message.oneof_decl.length))
                                message.oneof_decl = [];
                            message.oneof_decl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nested_type != null && message.hasOwnProperty("nested_type")) {
                        if (!Array.isArray(message.nested_type))
                            return "nested_type: array expected";
                        for (var i = 0; i < message.nested_type.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nested_type[i]);
                            if (error)
                                return "nested_type." + error;
                        }
                    }
                    if (message.enum_type != null && message.hasOwnProperty("enum_type")) {
                        if (!Array.isArray(message.enum_type))
                            return "enum_type: array expected";
                        for (var i = 0; i < message.enum_type.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enum_type[i]);
                            if (error)
                                return "enum_type." + error;
                        }
                    }
                    if (message.extension_range != null && message.hasOwnProperty("extension_range")) {
                        if (!Array.isArray(message.extension_range))
                            return "extension_range: array expected";
                        for (var i = 0; i < message.extension_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extension_range[i]);
                            if (error)
                                return "extension_range." + error;
                        }
                    }
                    if (message.oneof_decl != null && message.hasOwnProperty("oneof_decl")) {
                        if (!Array.isArray(message.oneof_decl))
                            return "oneof_decl: array expected";
                        for (var i = 0; i < message.oneof_decl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneof_decl[i]);
                            if (error)
                                return "oneof_decl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nested_type) {
                        if (!Array.isArray(object.nested_type))
                            throw TypeError(".google.protobuf.DescriptorProto.nested_type: array expected");
                        message.nested_type = [];
                        for (var i = 0; i < object.nested_type.length; ++i) {
                            if (typeof object.nested_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nested_type: object expected");
                            message.nested_type[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nested_type[i]);
                        }
                    }
                    if (object.enum_type) {
                        if (!Array.isArray(object.enum_type))
                            throw TypeError(".google.protobuf.DescriptorProto.enum_type: array expected");
                        message.enum_type = [];
                        for (var i = 0; i < object.enum_type.length; ++i) {
                            if (typeof object.enum_type[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enum_type: object expected");
                            message.enum_type[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enum_type[i]);
                        }
                    }
                    if (object.extension_range) {
                        if (!Array.isArray(object.extension_range))
                            throw TypeError(".google.protobuf.DescriptorProto.extension_range: array expected");
                        message.extension_range = [];
                        for (var i = 0; i < object.extension_range.length; ++i) {
                            if (typeof object.extension_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension_range: object expected");
                            message.extension_range[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extension_range[i]);
                        }
                    }
                    if (object.oneof_decl) {
                        if (!Array.isArray(object.oneof_decl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: array expected");
                        message.oneof_decl = [];
                        for (var i = 0; i < object.oneof_decl.length; ++i) {
                            if (typeof object.oneof_decl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneof_decl: object expected");
                            message.oneof_decl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneof_decl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nested_type = [];
                        object.enum_type = [];
                        object.extension_range = [];
                        object.extension = [];
                        object.oneof_decl = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nested_type && message.nested_type.length) {
                        object.nested_type = [];
                        for (var j = 0; j < message.nested_type.length; ++j)
                            object.nested_type[j] = $root.google.protobuf.DescriptorProto.toObject(message.nested_type[j], options);
                    }
                    if (message.enum_type && message.enum_type.length) {
                        object.enum_type = [];
                        for (var j = 0; j < message.enum_type.length; ++j)
                            object.enum_type[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enum_type[j], options);
                    }
                    if (message.extension_range && message.extension_range.length) {
                        object.extension_range = [];
                        for (var j = 0; j < message.extension_range.length; ++j)
                            object.extension_range[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extension_range[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneof_decl && message.oneof_decl.length) {
                        object.oneof_decl = [];
                        for (var j = 0; j < message.oneof_decl.length; ++j)
                            object.oneof_decl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneof_decl[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [type_name] FieldDescriptorProto type_name
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [default_value] FieldDescriptorProto default_value
                 * @property {number|null} [oneof_index] FieldDescriptorProto oneof_index
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto type_name.
                 * @member {string} type_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type_name = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto default_value.
                 * @member {string} default_value
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.default_value = "";
    
                /**
                 * FieldDescriptorProto oneof_index.
                 * @member {number} oneof_index
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneof_index = 0;
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && message.hasOwnProperty("label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.type_name = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.default_value = reader.string();
                            break;
                        case 9:
                            message.oneof_index = reader.int32();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
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
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        if (!$util.isString(message.type_name))
                            return "type_name: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        if (!$util.isString(message.default_value))
                            return "default_value: string expected";
                    if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                        if (!$util.isInteger(message.oneof_index))
                            return "oneof_index: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.type_name != null)
                        message.type_name = String(object.type_name);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.default_value != null)
                        message.default_value = String(object.default_value);
                    if (object.oneof_index != null)
                        message.oneof_index = object.oneof_index | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.type_name = "";
                        object.default_value = "";
                        object.options = null;
                        object.oneof_index = 0;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.type_name != null && message.hasOwnProperty("type_name"))
                        object.type_name = message.type_name;
                    if (message.default_value != null && message.hasOwnProperty("default_value"))
                        object.default_value = message.default_value;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneof_index != null && message.hasOwnProperty("oneof_index"))
                        object.oneof_index = message.oneof_index;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {string}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {string}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [input_type] MethodDescriptorProto input_type
                 * @property {string|null} [output_type] MethodDescriptorProto output_type
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto input_type.
                 * @member {string} input_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.input_type = "";
    
                /**
                 * MethodDescriptorProto output_type.
                 * @member {string} output_type
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.output_type = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.input_type = reader.string();
                            break;
                        case 3:
                            message.output_type = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        if (!$util.isString(message.input_type))
                            return "input_type: string expected";
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        if (!$util.isString(message.output_type))
                            return "output_type: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.input_type != null)
                        message.input_type = String(object.input_type);
                    if (object.output_type != null)
                        message.output_type = String(object.output_type);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.input_type = "";
                        object.output_type = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [java_package] FileOptions java_package
                 * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
                 * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
                 * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
                 * @property {boolean|null} [java_string_check_utf8] FileOptions java_string_check_utf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
                 * @property {string|null} [go_package] FileOptions go_package
                 * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
                 * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
                 * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
                 * @property {boolean|null} [".force_php_generation"] FileOptions .force_php_generation
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions java_package.
                 * @member {string} java_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_package = "";
    
                /**
                 * FileOptions java_outer_classname.
                 * @member {string} java_outer_classname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_outer_classname = "";
    
                /**
                 * FileOptions java_multiple_files.
                 * @member {boolean} java_multiple_files
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_multiple_files = false;
    
                /**
                 * FileOptions java_generate_equals_and_hash.
                 * @member {boolean} java_generate_equals_and_hash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generate_equals_and_hash = false;
    
                /**
                 * FileOptions java_string_check_utf8.
                 * @member {boolean} java_string_check_utf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_string_check_utf8 = false;
    
                /**
                 * FileOptions optimize_for.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimize_for = 1;
    
                /**
                 * FileOptions go_package.
                 * @member {string} go_package
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.go_package = "";
    
                /**
                 * FileOptions cc_generic_services.
                 * @member {boolean} cc_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_generic_services = false;
    
                /**
                 * FileOptions java_generic_services.
                 * @member {boolean} java_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.java_generic_services = false;
    
                /**
                 * FileOptions py_generic_services.
                 * @member {boolean} py_generic_services
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.py_generic_services = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * FileOptions .force_php_generation.
                 * @member {boolean} .force_php_generation
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype[".force_php_generation"] = false;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                    if (message.go_package != null && message.hasOwnProperty("go_package"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".force_php_generation"] != null && message.hasOwnProperty(".force_php_generation"))
                        writer.uint32(/* id 50000, wireType 0 =*/400000).bool(message[".force_php_generation"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.java_package = reader.string();
                            break;
                        case 8:
                            message.java_outer_classname = reader.string();
                            break;
                        case 10:
                            message.java_multiple_files = reader.bool();
                            break;
                        case 20:
                            message.java_generate_equals_and_hash = reader.bool();
                            break;
                        case 27:
                            message.java_string_check_utf8 = reader.bool();
                            break;
                        case 9:
                            message.optimize_for = reader.int32();
                            break;
                        case 11:
                            message.go_package = reader.string();
                            break;
                        case 16:
                            message.cc_generic_services = reader.bool();
                            break;
                        case 17:
                            message.java_generic_services = reader.bool();
                            break;
                        case 18:
                            message.py_generic_services = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".force_php_generation"] = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        if (!$util.isString(message.java_package))
                            return "java_package: string expected";
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        if (!$util.isString(message.java_outer_classname))
                            return "java_outer_classname: string expected";
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        if (typeof message.java_multiple_files !== "boolean")
                            return "java_multiple_files: boolean expected";
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        if (typeof message.java_generate_equals_and_hash !== "boolean")
                            return "java_generate_equals_and_hash: boolean expected";
                    if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                        if (typeof message.java_string_check_utf8 !== "boolean")
                            return "java_string_check_utf8: boolean expected";
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        switch (message.optimize_for) {
                        default:
                            return "optimize_for: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.go_package != null && message.hasOwnProperty("go_package"))
                        if (!$util.isString(message.go_package))
                            return "go_package: string expected";
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        if (typeof message.cc_generic_services !== "boolean")
                            return "cc_generic_services: boolean expected";
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        if (typeof message.java_generic_services !== "boolean")
                            return "java_generic_services: boolean expected";
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        if (typeof message.py_generic_services !== "boolean")
                            return "py_generic_services: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".force_php_generation"] != null && message.hasOwnProperty(".force_php_generation"))
                        if (typeof message[".force_php_generation"] !== "boolean")
                            return ".force_php_generation: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.java_package != null)
                        message.java_package = String(object.java_package);
                    if (object.java_outer_classname != null)
                        message.java_outer_classname = String(object.java_outer_classname);
                    if (object.java_multiple_files != null)
                        message.java_multiple_files = Boolean(object.java_multiple_files);
                    if (object.java_generate_equals_and_hash != null)
                        message.java_generate_equals_and_hash = Boolean(object.java_generate_equals_and_hash);
                    if (object.java_string_check_utf8 != null)
                        message.java_string_check_utf8 = Boolean(object.java_string_check_utf8);
                    switch (object.optimize_for) {
                    case "SPEED":
                    case 1:
                        message.optimize_for = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimize_for = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimize_for = 3;
                        break;
                    }
                    if (object.go_package != null)
                        message.go_package = String(object.go_package);
                    if (object.cc_generic_services != null)
                        message.cc_generic_services = Boolean(object.cc_generic_services);
                    if (object.java_generic_services != null)
                        message.java_generic_services = Boolean(object.java_generic_services);
                    if (object.py_generic_services != null)
                        message.py_generic_services = Boolean(object.py_generic_services);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".force_php_generation"] != null)
                        message[".force_php_generation"] = Boolean(object[".force_php_generation"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.java_package = "";
                        object.java_outer_classname = "";
                        object.optimize_for = options.enums === String ? "SPEED" : 1;
                        object.java_multiple_files = false;
                        object.go_package = "";
                        object.cc_generic_services = false;
                        object.java_generic_services = false;
                        object.py_generic_services = false;
                        object.java_generate_equals_and_hash = false;
                        object.deprecated = false;
                        object.java_string_check_utf8 = false;
                        object[".force_php_generation"] = false;
                    }
                    if (message.java_package != null && message.hasOwnProperty("java_package"))
                        object.java_package = message.java_package;
                    if (message.java_outer_classname != null && message.hasOwnProperty("java_outer_classname"))
                        object.java_outer_classname = message.java_outer_classname;
                    if (message.optimize_for != null && message.hasOwnProperty("optimize_for"))
                        object.optimize_for = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimize_for] : message.optimize_for;
                    if (message.java_multiple_files != null && message.hasOwnProperty("java_multiple_files"))
                        object.java_multiple_files = message.java_multiple_files;
                    if (message.go_package != null && message.hasOwnProperty("go_package"))
                        object.go_package = message.go_package;
                    if (message.cc_generic_services != null && message.hasOwnProperty("cc_generic_services"))
                        object.cc_generic_services = message.cc_generic_services;
                    if (message.java_generic_services != null && message.hasOwnProperty("java_generic_services"))
                        object.java_generic_services = message.java_generic_services;
                    if (message.py_generic_services != null && message.hasOwnProperty("py_generic_services"))
                        object.py_generic_services = message.py_generic_services;
                    if (message.java_generate_equals_and_hash != null && message.hasOwnProperty("java_generate_equals_and_hash"))
                        object.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.java_string_check_utf8 != null && message.hasOwnProperty("java_string_check_utf8"))
                        object.java_string_check_utf8 = message.java_string_check_utf8;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".force_php_generation"] != null && message.hasOwnProperty(".force_php_generation"))
                        object[".force_php_generation"] = message[".force_php_generation"];
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {string}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
                 * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
                 * @property {number|null} [".msgpool_soft_limit"] MessageOptions .msgpool_soft_limit
                 * @property {number|null} [".msgpool_hard_limit"] MessageOptions .msgpool_hard_limit
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions message_set_wire_format.
                 * @member {boolean} message_set_wire_format
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.message_set_wire_format = false;
    
                /**
                 * MessageOptions no_standard_descriptor_accessor.
                 * @member {boolean} no_standard_descriptor_accessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.no_standard_descriptor_accessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * MessageOptions .msgpool_soft_limit.
                 * @member {number} .msgpool_soft_limit
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype[".msgpool_soft_limit"] = 32;
    
                /**
                 * MessageOptions .msgpool_hard_limit.
                 * @member {number} .msgpool_hard_limit
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype[".msgpool_hard_limit"] = 384;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".msgpool_soft_limit"] != null && message.hasOwnProperty(".msgpool_soft_limit"))
                        writer.uint32(/* id 50000, wireType 0 =*/400000).int32(message[".msgpool_soft_limit"]);
                    if (message[".msgpool_hard_limit"] != null && message.hasOwnProperty(".msgpool_hard_limit"))
                        writer.uint32(/* id 50001, wireType 0 =*/400008).int32(message[".msgpool_hard_limit"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message_set_wire_format = reader.bool();
                            break;
                        case 2:
                            message.no_standard_descriptor_accessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".msgpool_soft_limit"] = reader.int32();
                            break;
                        case 50001:
                            message[".msgpool_hard_limit"] = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        if (typeof message.message_set_wire_format !== "boolean")
                            return "message_set_wire_format: boolean expected";
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        if (typeof message.no_standard_descriptor_accessor !== "boolean")
                            return "no_standard_descriptor_accessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".msgpool_soft_limit"] != null && message.hasOwnProperty(".msgpool_soft_limit"))
                        if (!$util.isInteger(message[".msgpool_soft_limit"]))
                            return ".msgpool_soft_limit: integer expected";
                    if (message[".msgpool_hard_limit"] != null && message.hasOwnProperty(".msgpool_hard_limit"))
                        if (!$util.isInteger(message[".msgpool_hard_limit"]))
                            return ".msgpool_hard_limit: integer expected";
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.message_set_wire_format != null)
                        message.message_set_wire_format = Boolean(object.message_set_wire_format);
                    if (object.no_standard_descriptor_accessor != null)
                        message.no_standard_descriptor_accessor = Boolean(object.no_standard_descriptor_accessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".msgpool_soft_limit"] != null)
                        message[".msgpool_soft_limit"] = object[".msgpool_soft_limit"] | 0;
                    if (object[".msgpool_hard_limit"] != null)
                        message[".msgpool_hard_limit"] = object[".msgpool_hard_limit"] | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.message_set_wire_format = false;
                        object.no_standard_descriptor_accessor = false;
                        object.deprecated = false;
                        object[".msgpool_soft_limit"] = 32;
                        object[".msgpool_hard_limit"] = 384;
                    }
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".msgpool_soft_limit"] != null && message.hasOwnProperty(".msgpool_soft_limit"))
                        object[".msgpool_soft_limit"] = message[".msgpool_soft_limit"];
                    if (message[".msgpool_hard_limit"] != null && message.hasOwnProperty(".msgpool_hard_limit"))
                        object[".msgpool_hard_limit"] = message[".msgpool_hard_limit"];
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {string|null} [experimental_map_key] FieldOptions experimental_map_key
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
                 * @property {boolean|null} [".php_output_always_number"] FieldOptions .php_output_always_number
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions experimental_map_key.
                 * @member {string} experimental_map_key
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.experimental_map_key = "";
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * FieldOptions .php_output_always_number.
                 * @member {boolean} .php_output_always_number
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".php_output_always_number"] = false;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.experimental_map_key);
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".php_output_always_number"] != null && message.hasOwnProperty(".php_output_always_number"))
                        writer.uint32(/* id 50020, wireType 0 =*/400160).bool(message[".php_output_always_number"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 9:
                            message.experimental_map_key = reader.string();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50020:
                            message[".php_output_always_number"] = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        if (!$util.isString(message.experimental_map_key))
                            return "experimental_map_key: string expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    if (message[".php_output_always_number"] != null && message.hasOwnProperty(".php_output_always_number"))
                        if (typeof message[".php_output_always_number"] !== "boolean")
                            return ".php_output_always_number: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.experimental_map_key != null)
                        message.experimental_map_key = String(object.experimental_map_key);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    if (object[".php_output_always_number"] != null)
                        message[".php_output_always_number"] = Boolean(object[".php_output_always_number"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.experimental_map_key = "";
                        object.weak = false;
                        object[".php_output_always_number"] = false;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        object.experimental_map_key = message.experimental_map_key;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".php_output_always_number"] != null && message.hasOwnProperty(".php_output_always_number"))
                        object[".php_output_always_number"] = message[".php_output_always_number"];
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {string}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allow_alias] EnumOptions allow_alias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allow_alias.
                 * @member {boolean} allow_alias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allow_alias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.allow_alias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                        if (typeof message.allow_alias !== "boolean")
                            return "allow_alias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allow_alias != null)
                        message.allow_alias = Boolean(object.allow_alias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults) {
                        object.allow_alias = false;
                        object.deprecated = false;
                    }
                    if (message.allow_alias != null && message.hasOwnProperty("allow_alias"))
                        object.allow_alias = message.allow_alias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpreted_option != null && message.hasOwnProperty("uninterpreted_option")) {
                        if (!Array.isArray(message.uninterpreted_option))
                            return "uninterpreted_option: array expected";
                        for (var i = 0; i < message.uninterpreted_option.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpreted_option[i]);
                            if (error)
                                return "uninterpreted_option." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifier_value] UninterpretedOption identifier_value
                 * @property {number|Long|null} [positive_int_value] UninterpretedOption positive_int_value
                 * @property {number|Long|null} [negative_int_value] UninterpretedOption negative_int_value
                 * @property {number|null} [double_value] UninterpretedOption double_value
                 * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
                 * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifier_value.
                 * @member {string} identifier_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifier_value = "";
    
                /**
                 * UninterpretedOption positive_int_value.
                 * @member {number|Long} positive_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negative_int_value.
                 * @member {number|Long} negative_int_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption double_value.
                 * @member {number} double_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.double_value = 0;
    
                /**
                 * UninterpretedOption string_value.
                 * @member {Uint8Array} string_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.string_value = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregate_value.
                 * @member {string} aggregate_value
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregate_value = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifier_value = reader.string();
                            break;
                        case 4:
                            message.positive_int_value = reader.uint64();
                            break;
                        case 5:
                            message.negative_int_value = reader.int64();
                            break;
                        case 6:
                            message.double_value = reader.double();
                            break;
                        case 7:
                            message.string_value = reader.bytes();
                            break;
                        case 8:
                            message.aggregate_value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        if (!$util.isString(message.identifier_value))
                            return "identifier_value: string expected";
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (!$util.isInteger(message.positive_int_value) && !(message.positive_int_value && $util.isInteger(message.positive_int_value.low) && $util.isInteger(message.positive_int_value.high)))
                            return "positive_int_value: integer|Long expected";
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (!$util.isInteger(message.negative_int_value) && !(message.negative_int_value && $util.isInteger(message.negative_int_value.low) && $util.isInteger(message.negative_int_value.high)))
                            return "negative_int_value: integer|Long expected";
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        if (typeof message.double_value !== "number")
                            return "double_value: number expected";
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        if (!(message.string_value && typeof message.string_value.length === "number" || $util.isString(message.string_value)))
                            return "string_value: buffer expected";
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        if (!$util.isString(message.aggregate_value))
                            return "aggregate_value: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifier_value != null)
                        message.identifier_value = String(object.identifier_value);
                    if (object.positive_int_value != null)
                        if ($util.Long)
                            (message.positive_int_value = $util.Long.fromValue(object.positive_int_value)).unsigned = true;
                        else if (typeof object.positive_int_value === "string")
                            message.positive_int_value = parseInt(object.positive_int_value, 10);
                        else if (typeof object.positive_int_value === "number")
                            message.positive_int_value = object.positive_int_value;
                        else if (typeof object.positive_int_value === "object")
                            message.positive_int_value = new $util.LongBits(object.positive_int_value.low >>> 0, object.positive_int_value.high >>> 0).toNumber(true);
                    if (object.negative_int_value != null)
                        if ($util.Long)
                            (message.negative_int_value = $util.Long.fromValue(object.negative_int_value)).unsigned = false;
                        else if (typeof object.negative_int_value === "string")
                            message.negative_int_value = parseInt(object.negative_int_value, 10);
                        else if (typeof object.negative_int_value === "number")
                            message.negative_int_value = object.negative_int_value;
                        else if (typeof object.negative_int_value === "object")
                            message.negative_int_value = new $util.LongBits(object.negative_int_value.low >>> 0, object.negative_int_value.high >>> 0).toNumber();
                    if (object.double_value != null)
                        message.double_value = Number(object.double_value);
                    if (object.string_value != null)
                        if (typeof object.string_value === "string")
                            $util.base64.decode(object.string_value, message.string_value = $util.newBuffer($util.base64.length(object.string_value)), 0);
                        else if (object.string_value.length)
                            message.string_value = object.string_value;
                    if (object.aggregate_value != null)
                        message.aggregate_value = String(object.aggregate_value);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifier_value = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positive_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positive_int_value = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negative_int_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negative_int_value = options.longs === String ? "0" : 0;
                        object.double_value = 0;
                        if (options.bytes === String)
                            object.string_value = "";
                        else {
                            object.string_value = [];
                            if (options.bytes !== Array)
                                object.string_value = $util.newBuffer(object.string_value);
                        }
                        object.aggregate_value = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifier_value != null && message.hasOwnProperty("identifier_value"))
                        object.identifier_value = message.identifier_value;
                    if (message.positive_int_value != null && message.hasOwnProperty("positive_int_value"))
                        if (typeof message.positive_int_value === "number")
                            object.positive_int_value = options.longs === String ? String(message.positive_int_value) : message.positive_int_value;
                        else
                            object.positive_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.positive_int_value) : options.longs === Number ? new $util.LongBits(message.positive_int_value.low >>> 0, message.positive_int_value.high >>> 0).toNumber(true) : message.positive_int_value;
                    if (message.negative_int_value != null && message.hasOwnProperty("negative_int_value"))
                        if (typeof message.negative_int_value === "number")
                            object.negative_int_value = options.longs === String ? String(message.negative_int_value) : message.negative_int_value;
                        else
                            object.negative_int_value = options.longs === String ? $util.Long.prototype.toString.call(message.negative_int_value) : options.longs === Number ? new $util.LongBits(message.negative_int_value.low >>> 0, message.negative_int_value.high >>> 0).toNumber() : message.negative_int_value;
                    if (message.double_value != null && message.hasOwnProperty("double_value"))
                        object.double_value = options.json && !isFinite(message.double_value) ? String(message.double_value) : message.double_value;
                    if (message.string_value != null && message.hasOwnProperty("string_value"))
                        object.string_value = options.bytes === String ? $util.base64.encode(message.string_value, 0, message.string_value.length) : options.bytes === Array ? Array.prototype.slice.call(message.string_value) : message.string_value;
                    if (message.aggregate_value != null && message.hasOwnProperty("aggregate_value"))
                        object.aggregate_value = message.aggregate_value;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} name_part NamePart name_part
                     * @property {boolean} is_extension NamePart is_extension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart name_part.
                     * @member {string} name_part
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.name_part = "";
    
                    /**
                     * NamePart is_extension.
                     * @member {boolean} is_extension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.is_extension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.name_part = reader.string();
                                break;
                            case 2:
                                message.is_extension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name_part"))
                            throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                        if (!message.hasOwnProperty("is_extension"))
                            throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.name_part))
                            return "name_part: string expected";
                        if (typeof message.is_extension !== "boolean")
                            return "is_extension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.name_part != null)
                            message.name_part = String(object.name_part);
                        if (object.is_extension != null)
                            message.is_extension = Boolean(object.is_extension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.name_part = "";
                            object.is_extension = false;
                        }
                        if (message.name_part != null && message.hasOwnProperty("name_part"))
                            object.name_part = message.name_part;
                        if (message.is_extension != null && message.hasOwnProperty("is_extension"))
                            object.is_extension = message.is_extension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leading_comments] Location leading_comments
                     * @property {string|null} [trailing_comments] Location trailing_comments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leading_comments.
                     * @member {string} leading_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leading_comments = "";
    
                    /**
                     * Location trailing_comments.
                     * @member {string} trailing_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailing_comments = "";
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                        if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leading_comments = reader.string();
                                break;
                            case 4:
                                message.trailing_comments = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                            if (!$util.isString(message.leading_comments))
                                return "leading_comments: string expected";
                        if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                            if (!$util.isString(message.trailing_comments))
                                return "trailing_comments: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leading_comments != null)
                            message.leading_comments = String(object.leading_comments);
                        if (object.trailing_comments != null)
                            message.trailing_comments = String(object.trailing_comments);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                        }
                        if (options.defaults) {
                            object.leading_comments = "";
                            object.trailing_comments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leading_comments != null && message.hasOwnProperty("leading_comments"))
                            object.leading_comments = message.leading_comments;
                        if (message.trailing_comments != null && message.hasOwnProperty("trailing_comments"))
                            object.trailing_comments = message.trailing_comments;
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
