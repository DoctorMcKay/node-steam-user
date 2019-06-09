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
