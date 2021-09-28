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
     * EAuthTokenPlatformType enum.
     * @exports EAuthTokenPlatformType
     * @enum {string}
     * @property {number} k_EAuthTokenPlatformType_Unknown=0 k_EAuthTokenPlatformType_Unknown value
     * @property {number} k_EAuthTokenPlatformType_SteamClient=1 k_EAuthTokenPlatformType_SteamClient value
     * @property {number} k_EAuthTokenPlatformType_WebBrowser=2 k_EAuthTokenPlatformType_WebBrowser value
     * @property {number} k_EAuthTokenPlatformType_MobileApp=3 k_EAuthTokenPlatformType_MobileApp value
     */
    $root.EAuthTokenPlatformType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EAuthTokenPlatformType_Unknown"] = 0;
        values[valuesById[1] = "k_EAuthTokenPlatformType_SteamClient"] = 1;
        values[valuesById[2] = "k_EAuthTokenPlatformType_WebBrowser"] = 2;
        values[valuesById[3] = "k_EAuthTokenPlatformType_MobileApp"] = 3;
        return values;
    })();
    
    /**
     * EAuthSessionGuardType enum.
     * @exports EAuthSessionGuardType
     * @enum {string}
     * @property {number} k_EAuthSessionGuardType_Unknown=0 k_EAuthSessionGuardType_Unknown value
     * @property {number} k_EAuthSessionGuardType_None=1 k_EAuthSessionGuardType_None value
     * @property {number} k_EAuthSessionGuardType_EmailCode=2 k_EAuthSessionGuardType_EmailCode value
     * @property {number} k_EAuthSessionGuardType_DeviceCode=3 k_EAuthSessionGuardType_DeviceCode value
     * @property {number} k_EAuthSessionGuardType_DeviceConfirmation=4 k_EAuthSessionGuardType_DeviceConfirmation value
     * @property {number} k_EAuthSessionGuardType_EmailConfirmation=5 k_EAuthSessionGuardType_EmailConfirmation value
     */
    $root.EAuthSessionGuardType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EAuthSessionGuardType_Unknown"] = 0;
        values[valuesById[1] = "k_EAuthSessionGuardType_None"] = 1;
        values[valuesById[2] = "k_EAuthSessionGuardType_EmailCode"] = 2;
        values[valuesById[3] = "k_EAuthSessionGuardType_DeviceCode"] = 3;
        values[valuesById[4] = "k_EAuthSessionGuardType_DeviceConfirmation"] = 4;
        values[valuesById[5] = "k_EAuthSessionGuardType_EmailConfirmation"] = 5;
        return values;
    })();
    
    $root.CAuthentication_GetPasswordRSAPublicKey_Request = (function() {
    
        /**
         * Properties of a CAuthentication_GetPasswordRSAPublicKey_Request.
         * @exports ICAuthentication_GetPasswordRSAPublicKey_Request
         * @interface ICAuthentication_GetPasswordRSAPublicKey_Request
         * @property {string|null} [account_name] CAuthentication_GetPasswordRSAPublicKey_Request account_name
         */
    
        /**
         * Constructs a new CAuthentication_GetPasswordRSAPublicKey_Request.
         * @exports CAuthentication_GetPasswordRSAPublicKey_Request
         * @classdesc Represents a CAuthentication_GetPasswordRSAPublicKey_Request.
         * @implements ICAuthentication_GetPasswordRSAPublicKey_Request
         * @constructor
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Request=} [properties] Properties to set
         */
        function CAuthentication_GetPasswordRSAPublicKey_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_GetPasswordRSAPublicKey_Request account_name.
         * @member {string} account_name
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @instance
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.prototype.account_name = "";
    
        /**
         * Creates a new CAuthentication_GetPasswordRSAPublicKey_Request instance using the specified properties.
         * @function create
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @static
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Request=} [properties] Properties to set
         * @returns {CAuthentication_GetPasswordRSAPublicKey_Request} CAuthentication_GetPasswordRSAPublicKey_Request instance
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.create = function create(properties) {
            return new CAuthentication_GetPasswordRSAPublicKey_Request(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_GetPasswordRSAPublicKey_Request message. Does not implicitly {@link CAuthentication_GetPasswordRSAPublicKey_Request.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @static
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Request} message CAuthentication_GetPasswordRSAPublicKey_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account_name);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_GetPasswordRSAPublicKey_Request message, length delimited. Does not implicitly {@link CAuthentication_GetPasswordRSAPublicKey_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @static
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Request} message CAuthentication_GetPasswordRSAPublicKey_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_GetPasswordRSAPublicKey_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_GetPasswordRSAPublicKey_Request} CAuthentication_GetPasswordRSAPublicKey_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_GetPasswordRSAPublicKey_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_GetPasswordRSAPublicKey_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_GetPasswordRSAPublicKey_Request} CAuthentication_GetPasswordRSAPublicKey_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_GetPasswordRSAPublicKey_Request message.
         * @function verify
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                if (!$util.isString(message.account_name))
                    return "account_name: string expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_GetPasswordRSAPublicKey_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_GetPasswordRSAPublicKey_Request} CAuthentication_GetPasswordRSAPublicKey_Request
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_GetPasswordRSAPublicKey_Request)
                return object;
            var message = new $root.CAuthentication_GetPasswordRSAPublicKey_Request();
            if (object.account_name != null)
                message.account_name = String(object.account_name);
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_GetPasswordRSAPublicKey_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @static
         * @param {CAuthentication_GetPasswordRSAPublicKey_Request} message CAuthentication_GetPasswordRSAPublicKey_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.account_name = "";
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                object.account_name = message.account_name;
            return object;
        };
    
        /**
         * Converts this CAuthentication_GetPasswordRSAPublicKey_Request to JSON.
         * @function toJSON
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_GetPasswordRSAPublicKey_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_GetPasswordRSAPublicKey_Request;
    })();
    
    $root.CAuthentication_GetPasswordRSAPublicKey_Response = (function() {
    
        /**
         * Properties of a CAuthentication_GetPasswordRSAPublicKey_Response.
         * @exports ICAuthentication_GetPasswordRSAPublicKey_Response
         * @interface ICAuthentication_GetPasswordRSAPublicKey_Response
         * @property {string|null} [publickey_mod] CAuthentication_GetPasswordRSAPublicKey_Response publickey_mod
         * @property {string|null} [publickey_exp] CAuthentication_GetPasswordRSAPublicKey_Response publickey_exp
         * @property {number|Long|null} [timestamp] CAuthentication_GetPasswordRSAPublicKey_Response timestamp
         */
    
        /**
         * Constructs a new CAuthentication_GetPasswordRSAPublicKey_Response.
         * @exports CAuthentication_GetPasswordRSAPublicKey_Response
         * @classdesc Represents a CAuthentication_GetPasswordRSAPublicKey_Response.
         * @implements ICAuthentication_GetPasswordRSAPublicKey_Response
         * @constructor
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Response=} [properties] Properties to set
         */
        function CAuthentication_GetPasswordRSAPublicKey_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_GetPasswordRSAPublicKey_Response publickey_mod.
         * @member {string} publickey_mod
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @instance
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.prototype.publickey_mod = "";
    
        /**
         * CAuthentication_GetPasswordRSAPublicKey_Response publickey_exp.
         * @member {string} publickey_exp
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @instance
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.prototype.publickey_exp = "";
    
        /**
         * CAuthentication_GetPasswordRSAPublicKey_Response timestamp.
         * @member {number|Long} timestamp
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @instance
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CAuthentication_GetPasswordRSAPublicKey_Response instance using the specified properties.
         * @function create
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @static
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Response=} [properties] Properties to set
         * @returns {CAuthentication_GetPasswordRSAPublicKey_Response} CAuthentication_GetPasswordRSAPublicKey_Response instance
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.create = function create(properties) {
            return new CAuthentication_GetPasswordRSAPublicKey_Response(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_GetPasswordRSAPublicKey_Response message. Does not implicitly {@link CAuthentication_GetPasswordRSAPublicKey_Response.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @static
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Response} message CAuthentication_GetPasswordRSAPublicKey_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publickey_mod != null && message.hasOwnProperty("publickey_mod"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.publickey_mod);
            if (message.publickey_exp != null && message.hasOwnProperty("publickey_exp"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.publickey_exp);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timestamp);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_GetPasswordRSAPublicKey_Response message, length delimited. Does not implicitly {@link CAuthentication_GetPasswordRSAPublicKey_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @static
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Response} message CAuthentication_GetPasswordRSAPublicKey_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_GetPasswordRSAPublicKey_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_GetPasswordRSAPublicKey_Response} CAuthentication_GetPasswordRSAPublicKey_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_GetPasswordRSAPublicKey_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publickey_mod = reader.string();
                    break;
                case 2:
                    message.publickey_exp = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_GetPasswordRSAPublicKey_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_GetPasswordRSAPublicKey_Response} CAuthentication_GetPasswordRSAPublicKey_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_GetPasswordRSAPublicKey_Response message.
         * @function verify
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publickey_mod != null && message.hasOwnProperty("publickey_mod"))
                if (!$util.isString(message.publickey_mod))
                    return "publickey_mod: string expected";
            if (message.publickey_exp != null && message.hasOwnProperty("publickey_exp"))
                if (!$util.isString(message.publickey_exp))
                    return "publickey_exp: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_GetPasswordRSAPublicKey_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_GetPasswordRSAPublicKey_Response} CAuthentication_GetPasswordRSAPublicKey_Response
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_GetPasswordRSAPublicKey_Response)
                return object;
            var message = new $root.CAuthentication_GetPasswordRSAPublicKey_Response();
            if (object.publickey_mod != null)
                message.publickey_mod = String(object.publickey_mod);
            if (object.publickey_exp != null)
                message.publickey_exp = String(object.publickey_exp);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_GetPasswordRSAPublicKey_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @static
         * @param {CAuthentication_GetPasswordRSAPublicKey_Response} message CAuthentication_GetPasswordRSAPublicKey_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.publickey_mod = "";
                object.publickey_exp = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.publickey_mod != null && message.hasOwnProperty("publickey_mod"))
                object.publickey_mod = message.publickey_mod;
            if (message.publickey_exp != null && message.hasOwnProperty("publickey_exp"))
                object.publickey_exp = message.publickey_exp;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            return object;
        };
    
        /**
         * Converts this CAuthentication_GetPasswordRSAPublicKey_Response to JSON.
         * @function toJSON
         * @memberof CAuthentication_GetPasswordRSAPublicKey_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_GetPasswordRSAPublicKey_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_GetPasswordRSAPublicKey_Response;
    })();
    
    $root.CAuthentication_BeginAuthSessionViaQR_Request = (function() {
    
        /**
         * Properties of a CAuthentication_BeginAuthSessionViaQR_Request.
         * @exports ICAuthentication_BeginAuthSessionViaQR_Request
         * @interface ICAuthentication_BeginAuthSessionViaQR_Request
         * @property {string|null} [device_friendly_name] CAuthentication_BeginAuthSessionViaQR_Request device_friendly_name
         * @property {EAuthTokenPlatformType|null} [platform_type] CAuthentication_BeginAuthSessionViaQR_Request platform_type
         */
    
        /**
         * Constructs a new CAuthentication_BeginAuthSessionViaQR_Request.
         * @exports CAuthentication_BeginAuthSessionViaQR_Request
         * @classdesc Represents a CAuthentication_BeginAuthSessionViaQR_Request.
         * @implements ICAuthentication_BeginAuthSessionViaQR_Request
         * @constructor
         * @param {ICAuthentication_BeginAuthSessionViaQR_Request=} [properties] Properties to set
         */
        function CAuthentication_BeginAuthSessionViaQR_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_BeginAuthSessionViaQR_Request device_friendly_name.
         * @member {string} device_friendly_name
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @instance
         */
        CAuthentication_BeginAuthSessionViaQR_Request.prototype.device_friendly_name = "";
    
        /**
         * CAuthentication_BeginAuthSessionViaQR_Request platform_type.
         * @member {EAuthTokenPlatformType} platform_type
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @instance
         */
        CAuthentication_BeginAuthSessionViaQR_Request.prototype.platform_type = 0;
    
        /**
         * Creates a new CAuthentication_BeginAuthSessionViaQR_Request instance using the specified properties.
         * @function create
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaQR_Request=} [properties] Properties to set
         * @returns {CAuthentication_BeginAuthSessionViaQR_Request} CAuthentication_BeginAuthSessionViaQR_Request instance
         */
        CAuthentication_BeginAuthSessionViaQR_Request.create = function create(properties) {
            return new CAuthentication_BeginAuthSessionViaQR_Request(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_BeginAuthSessionViaQR_Request message. Does not implicitly {@link CAuthentication_BeginAuthSessionViaQR_Request.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaQR_Request} message CAuthentication_BeginAuthSessionViaQR_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_BeginAuthSessionViaQR_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.device_friendly_name);
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.platform_type);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_BeginAuthSessionViaQR_Request message, length delimited. Does not implicitly {@link CAuthentication_BeginAuthSessionViaQR_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaQR_Request} message CAuthentication_BeginAuthSessionViaQR_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_BeginAuthSessionViaQR_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_BeginAuthSessionViaQR_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_BeginAuthSessionViaQR_Request} CAuthentication_BeginAuthSessionViaQR_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_BeginAuthSessionViaQR_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_BeginAuthSessionViaQR_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.device_friendly_name = reader.string();
                    break;
                case 2:
                    message.platform_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_BeginAuthSessionViaQR_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_BeginAuthSessionViaQR_Request} CAuthentication_BeginAuthSessionViaQR_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_BeginAuthSessionViaQR_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_BeginAuthSessionViaQR_Request message.
         * @function verify
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_BeginAuthSessionViaQR_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                if (!$util.isString(message.device_friendly_name))
                    return "device_friendly_name: string expected";
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                switch (message.platform_type) {
                default:
                    return "platform_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CAuthentication_BeginAuthSessionViaQR_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_BeginAuthSessionViaQR_Request} CAuthentication_BeginAuthSessionViaQR_Request
         */
        CAuthentication_BeginAuthSessionViaQR_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_BeginAuthSessionViaQR_Request)
                return object;
            var message = new $root.CAuthentication_BeginAuthSessionViaQR_Request();
            if (object.device_friendly_name != null)
                message.device_friendly_name = String(object.device_friendly_name);
            switch (object.platform_type) {
            case "k_EAuthTokenPlatformType_Unknown":
            case 0:
                message.platform_type = 0;
                break;
            case "k_EAuthTokenPlatformType_SteamClient":
            case 1:
                message.platform_type = 1;
                break;
            case "k_EAuthTokenPlatformType_WebBrowser":
            case 2:
                message.platform_type = 2;
                break;
            case "k_EAuthTokenPlatformType_MobileApp":
            case 3:
                message.platform_type = 3;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_BeginAuthSessionViaQR_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @static
         * @param {CAuthentication_BeginAuthSessionViaQR_Request} message CAuthentication_BeginAuthSessionViaQR_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_BeginAuthSessionViaQR_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.device_friendly_name = "";
                object.platform_type = options.enums === String ? "k_EAuthTokenPlatformType_Unknown" : 0;
            }
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                object.device_friendly_name = message.device_friendly_name;
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                object.platform_type = options.enums === String ? $root.EAuthTokenPlatformType[message.platform_type] : message.platform_type;
            return object;
        };
    
        /**
         * Converts this CAuthentication_BeginAuthSessionViaQR_Request to JSON.
         * @function toJSON
         * @memberof CAuthentication_BeginAuthSessionViaQR_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_BeginAuthSessionViaQR_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_BeginAuthSessionViaQR_Request;
    })();
    
    $root.CAuthentication_AllowedConfirmation = (function() {
    
        /**
         * Properties of a CAuthentication_AllowedConfirmation.
         * @exports ICAuthentication_AllowedConfirmation
         * @interface ICAuthentication_AllowedConfirmation
         * @property {EAuthSessionGuardType|null} [confirmation_type] CAuthentication_AllowedConfirmation confirmation_type
         * @property {string|null} [associated_message] CAuthentication_AllowedConfirmation associated_message
         */
    
        /**
         * Constructs a new CAuthentication_AllowedConfirmation.
         * @exports CAuthentication_AllowedConfirmation
         * @classdesc Represents a CAuthentication_AllowedConfirmation.
         * @implements ICAuthentication_AllowedConfirmation
         * @constructor
         * @param {ICAuthentication_AllowedConfirmation=} [properties] Properties to set
         */
        function CAuthentication_AllowedConfirmation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_AllowedConfirmation confirmation_type.
         * @member {EAuthSessionGuardType} confirmation_type
         * @memberof CAuthentication_AllowedConfirmation
         * @instance
         */
        CAuthentication_AllowedConfirmation.prototype.confirmation_type = 0;
    
        /**
         * CAuthentication_AllowedConfirmation associated_message.
         * @member {string} associated_message
         * @memberof CAuthentication_AllowedConfirmation
         * @instance
         */
        CAuthentication_AllowedConfirmation.prototype.associated_message = "";
    
        /**
         * Creates a new CAuthentication_AllowedConfirmation instance using the specified properties.
         * @function create
         * @memberof CAuthentication_AllowedConfirmation
         * @static
         * @param {ICAuthentication_AllowedConfirmation=} [properties] Properties to set
         * @returns {CAuthentication_AllowedConfirmation} CAuthentication_AllowedConfirmation instance
         */
        CAuthentication_AllowedConfirmation.create = function create(properties) {
            return new CAuthentication_AllowedConfirmation(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_AllowedConfirmation message. Does not implicitly {@link CAuthentication_AllowedConfirmation.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_AllowedConfirmation
         * @static
         * @param {ICAuthentication_AllowedConfirmation} message CAuthentication_AllowedConfirmation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_AllowedConfirmation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.confirmation_type != null && message.hasOwnProperty("confirmation_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.confirmation_type);
            if (message.associated_message != null && message.hasOwnProperty("associated_message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.associated_message);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_AllowedConfirmation message, length delimited. Does not implicitly {@link CAuthentication_AllowedConfirmation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_AllowedConfirmation
         * @static
         * @param {ICAuthentication_AllowedConfirmation} message CAuthentication_AllowedConfirmation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_AllowedConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_AllowedConfirmation message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_AllowedConfirmation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_AllowedConfirmation} CAuthentication_AllowedConfirmation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_AllowedConfirmation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_AllowedConfirmation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.confirmation_type = reader.int32();
                    break;
                case 2:
                    message.associated_message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_AllowedConfirmation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_AllowedConfirmation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_AllowedConfirmation} CAuthentication_AllowedConfirmation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_AllowedConfirmation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_AllowedConfirmation message.
         * @function verify
         * @memberof CAuthentication_AllowedConfirmation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_AllowedConfirmation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.confirmation_type != null && message.hasOwnProperty("confirmation_type"))
                switch (message.confirmation_type) {
                default:
                    return "confirmation_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.associated_message != null && message.hasOwnProperty("associated_message"))
                if (!$util.isString(message.associated_message))
                    return "associated_message: string expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_AllowedConfirmation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_AllowedConfirmation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_AllowedConfirmation} CAuthentication_AllowedConfirmation
         */
        CAuthentication_AllowedConfirmation.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_AllowedConfirmation)
                return object;
            var message = new $root.CAuthentication_AllowedConfirmation();
            switch (object.confirmation_type) {
            case "k_EAuthSessionGuardType_Unknown":
            case 0:
                message.confirmation_type = 0;
                break;
            case "k_EAuthSessionGuardType_None":
            case 1:
                message.confirmation_type = 1;
                break;
            case "k_EAuthSessionGuardType_EmailCode":
            case 2:
                message.confirmation_type = 2;
                break;
            case "k_EAuthSessionGuardType_DeviceCode":
            case 3:
                message.confirmation_type = 3;
                break;
            case "k_EAuthSessionGuardType_DeviceConfirmation":
            case 4:
                message.confirmation_type = 4;
                break;
            case "k_EAuthSessionGuardType_EmailConfirmation":
            case 5:
                message.confirmation_type = 5;
                break;
            }
            if (object.associated_message != null)
                message.associated_message = String(object.associated_message);
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_AllowedConfirmation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_AllowedConfirmation
         * @static
         * @param {CAuthentication_AllowedConfirmation} message CAuthentication_AllowedConfirmation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_AllowedConfirmation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.confirmation_type = options.enums === String ? "k_EAuthSessionGuardType_Unknown" : 0;
                object.associated_message = "";
            }
            if (message.confirmation_type != null && message.hasOwnProperty("confirmation_type"))
                object.confirmation_type = options.enums === String ? $root.EAuthSessionGuardType[message.confirmation_type] : message.confirmation_type;
            if (message.associated_message != null && message.hasOwnProperty("associated_message"))
                object.associated_message = message.associated_message;
            return object;
        };
    
        /**
         * Converts this CAuthentication_AllowedConfirmation to JSON.
         * @function toJSON
         * @memberof CAuthentication_AllowedConfirmation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_AllowedConfirmation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_AllowedConfirmation;
    })();
    
    $root.CAuthentication_BeginAuthSessionViaQR_Response = (function() {
    
        /**
         * Properties of a CAuthentication_BeginAuthSessionViaQR_Response.
         * @exports ICAuthentication_BeginAuthSessionViaQR_Response
         * @interface ICAuthentication_BeginAuthSessionViaQR_Response
         * @property {number|Long|null} [client_id] CAuthentication_BeginAuthSessionViaQR_Response client_id
         * @property {string|null} [challenge_url] CAuthentication_BeginAuthSessionViaQR_Response challenge_url
         * @property {Uint8Array|null} [request_id] CAuthentication_BeginAuthSessionViaQR_Response request_id
         * @property {number|null} [interval] CAuthentication_BeginAuthSessionViaQR_Response interval
         * @property {Array.<ICAuthentication_AllowedConfirmation>|null} [allowed_confirmations] CAuthentication_BeginAuthSessionViaQR_Response allowed_confirmations
         * @property {number|null} [version] CAuthentication_BeginAuthSessionViaQR_Response version
         */
    
        /**
         * Constructs a new CAuthentication_BeginAuthSessionViaQR_Response.
         * @exports CAuthentication_BeginAuthSessionViaQR_Response
         * @classdesc Represents a CAuthentication_BeginAuthSessionViaQR_Response.
         * @implements ICAuthentication_BeginAuthSessionViaQR_Response
         * @constructor
         * @param {ICAuthentication_BeginAuthSessionViaQR_Response=} [properties] Properties to set
         */
        function CAuthentication_BeginAuthSessionViaQR_Response(properties) {
            this.allowed_confirmations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_BeginAuthSessionViaQR_Response client_id.
         * @member {number|Long} client_id
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaQR_Response.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAuthentication_BeginAuthSessionViaQR_Response challenge_url.
         * @member {string} challenge_url
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaQR_Response.prototype.challenge_url = "";
    
        /**
         * CAuthentication_BeginAuthSessionViaQR_Response request_id.
         * @member {Uint8Array} request_id
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaQR_Response.prototype.request_id = $util.newBuffer([]);
    
        /**
         * CAuthentication_BeginAuthSessionViaQR_Response interval.
         * @member {number} interval
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaQR_Response.prototype.interval = 0;
    
        /**
         * CAuthentication_BeginAuthSessionViaQR_Response allowed_confirmations.
         * @member {Array.<ICAuthentication_AllowedConfirmation>} allowed_confirmations
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaQR_Response.prototype.allowed_confirmations = $util.emptyArray;
    
        /**
         * CAuthentication_BeginAuthSessionViaQR_Response version.
         * @member {number} version
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaQR_Response.prototype.version = 0;
    
        /**
         * Creates a new CAuthentication_BeginAuthSessionViaQR_Response instance using the specified properties.
         * @function create
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaQR_Response=} [properties] Properties to set
         * @returns {CAuthentication_BeginAuthSessionViaQR_Response} CAuthentication_BeginAuthSessionViaQR_Response instance
         */
        CAuthentication_BeginAuthSessionViaQR_Response.create = function create(properties) {
            return new CAuthentication_BeginAuthSessionViaQR_Response(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_BeginAuthSessionViaQR_Response message. Does not implicitly {@link CAuthentication_BeginAuthSessionViaQR_Response.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaQR_Response} message CAuthentication_BeginAuthSessionViaQR_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_BeginAuthSessionViaQR_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.client_id);
            if (message.challenge_url != null && message.hasOwnProperty("challenge_url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.challenge_url);
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.request_id);
            if (message.interval != null && message.hasOwnProperty("interval"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.interval);
            if (message.allowed_confirmations != null && message.allowed_confirmations.length)
                for (var i = 0; i < message.allowed_confirmations.length; ++i)
                    $root.CAuthentication_AllowedConfirmation.encode(message.allowed_confirmations[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.version);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_BeginAuthSessionViaQR_Response message, length delimited. Does not implicitly {@link CAuthentication_BeginAuthSessionViaQR_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaQR_Response} message CAuthentication_BeginAuthSessionViaQR_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_BeginAuthSessionViaQR_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_BeginAuthSessionViaQR_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_BeginAuthSessionViaQR_Response} CAuthentication_BeginAuthSessionViaQR_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_BeginAuthSessionViaQR_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_BeginAuthSessionViaQR_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.uint64();
                    break;
                case 2:
                    message.challenge_url = reader.string();
                    break;
                case 3:
                    message.request_id = reader.bytes();
                    break;
                case 4:
                    message.interval = reader.float();
                    break;
                case 5:
                    if (!(message.allowed_confirmations && message.allowed_confirmations.length))
                        message.allowed_confirmations = [];
                    message.allowed_confirmations.push($root.CAuthentication_AllowedConfirmation.decode(reader, reader.uint32()));
                    break;
                case 6:
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
         * Decodes a CAuthentication_BeginAuthSessionViaQR_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_BeginAuthSessionViaQR_Response} CAuthentication_BeginAuthSessionViaQR_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_BeginAuthSessionViaQR_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_BeginAuthSessionViaQR_Response message.
         * @function verify
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_BeginAuthSessionViaQR_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (!$util.isInteger(message.client_id) && !(message.client_id && $util.isInteger(message.client_id.low) && $util.isInteger(message.client_id.high)))
                    return "client_id: integer|Long expected";
            if (message.challenge_url != null && message.hasOwnProperty("challenge_url"))
                if (!$util.isString(message.challenge_url))
                    return "challenge_url: string expected";
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                if (!(message.request_id && typeof message.request_id.length === "number" || $util.isString(message.request_id)))
                    return "request_id: buffer expected";
            if (message.interval != null && message.hasOwnProperty("interval"))
                if (typeof message.interval !== "number")
                    return "interval: number expected";
            if (message.allowed_confirmations != null && message.hasOwnProperty("allowed_confirmations")) {
                if (!Array.isArray(message.allowed_confirmations))
                    return "allowed_confirmations: array expected";
                for (var i = 0; i < message.allowed_confirmations.length; ++i) {
                    var error = $root.CAuthentication_AllowedConfirmation.verify(message.allowed_confirmations[i]);
                    if (error)
                        return "allowed_confirmations." + error;
                }
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_BeginAuthSessionViaQR_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_BeginAuthSessionViaQR_Response} CAuthentication_BeginAuthSessionViaQR_Response
         */
        CAuthentication_BeginAuthSessionViaQR_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_BeginAuthSessionViaQR_Response)
                return object;
            var message = new $root.CAuthentication_BeginAuthSessionViaQR_Response();
            if (object.client_id != null)
                if ($util.Long)
                    (message.client_id = $util.Long.fromValue(object.client_id)).unsigned = true;
                else if (typeof object.client_id === "string")
                    message.client_id = parseInt(object.client_id, 10);
                else if (typeof object.client_id === "number")
                    message.client_id = object.client_id;
                else if (typeof object.client_id === "object")
                    message.client_id = new $util.LongBits(object.client_id.low >>> 0, object.client_id.high >>> 0).toNumber(true);
            if (object.challenge_url != null)
                message.challenge_url = String(object.challenge_url);
            if (object.request_id != null)
                if (typeof object.request_id === "string")
                    $util.base64.decode(object.request_id, message.request_id = $util.newBuffer($util.base64.length(object.request_id)), 0);
                else if (object.request_id.length)
                    message.request_id = object.request_id;
            if (object.interval != null)
                message.interval = Number(object.interval);
            if (object.allowed_confirmations) {
                if (!Array.isArray(object.allowed_confirmations))
                    throw TypeError(".CAuthentication_BeginAuthSessionViaQR_Response.allowed_confirmations: array expected");
                message.allowed_confirmations = [];
                for (var i = 0; i < object.allowed_confirmations.length; ++i) {
                    if (typeof object.allowed_confirmations[i] !== "object")
                        throw TypeError(".CAuthentication_BeginAuthSessionViaQR_Response.allowed_confirmations: object expected");
                    message.allowed_confirmations[i] = $root.CAuthentication_AllowedConfirmation.fromObject(object.allowed_confirmations[i]);
                }
            }
            if (object.version != null)
                message.version = object.version | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_BeginAuthSessionViaQR_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @static
         * @param {CAuthentication_BeginAuthSessionViaQR_Response} message CAuthentication_BeginAuthSessionViaQR_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_BeginAuthSessionViaQR_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.allowed_confirmations = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_id = options.longs === String ? "0" : 0;
                object.challenge_url = "";
                if (options.bytes === String)
                    object.request_id = "";
                else {
                    object.request_id = [];
                    if (options.bytes !== Array)
                        object.request_id = $util.newBuffer(object.request_id);
                }
                object.interval = 0;
                object.version = 0;
            }
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (typeof message.client_id === "number")
                    object.client_id = options.longs === String ? String(message.client_id) : message.client_id;
                else
                    object.client_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_id) : options.longs === Number ? new $util.LongBits(message.client_id.low >>> 0, message.client_id.high >>> 0).toNumber(true) : message.client_id;
            if (message.challenge_url != null && message.hasOwnProperty("challenge_url"))
                object.challenge_url = message.challenge_url;
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = options.bytes === String ? $util.base64.encode(message.request_id, 0, message.request_id.length) : options.bytes === Array ? Array.prototype.slice.call(message.request_id) : message.request_id;
            if (message.interval != null && message.hasOwnProperty("interval"))
                object.interval = options.json && !isFinite(message.interval) ? String(message.interval) : message.interval;
            if (message.allowed_confirmations && message.allowed_confirmations.length) {
                object.allowed_confirmations = [];
                for (var j = 0; j < message.allowed_confirmations.length; ++j)
                    object.allowed_confirmations[j] = $root.CAuthentication_AllowedConfirmation.toObject(message.allowed_confirmations[j], options);
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };
    
        /**
         * Converts this CAuthentication_BeginAuthSessionViaQR_Response to JSON.
         * @function toJSON
         * @memberof CAuthentication_BeginAuthSessionViaQR_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_BeginAuthSessionViaQR_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_BeginAuthSessionViaQR_Response;
    })();
    
    $root.CAuthentication_BeginAuthSessionViaCredentials_Request = (function() {
    
        /**
         * Properties of a CAuthentication_BeginAuthSessionViaCredentials_Request.
         * @exports ICAuthentication_BeginAuthSessionViaCredentials_Request
         * @interface ICAuthentication_BeginAuthSessionViaCredentials_Request
         * @property {string|null} [device_friendly_name] CAuthentication_BeginAuthSessionViaCredentials_Request device_friendly_name
         * @property {string|null} [account_name] CAuthentication_BeginAuthSessionViaCredentials_Request account_name
         * @property {string|null} [encrypted_password] CAuthentication_BeginAuthSessionViaCredentials_Request encrypted_password
         * @property {number|Long|null} [encryption_timestamp] CAuthentication_BeginAuthSessionViaCredentials_Request encryption_timestamp
         * @property {boolean|null} [remember_login] CAuthentication_BeginAuthSessionViaCredentials_Request remember_login
         * @property {EAuthTokenPlatformType|null} [platform_type] CAuthentication_BeginAuthSessionViaCredentials_Request platform_type
         */
    
        /**
         * Constructs a new CAuthentication_BeginAuthSessionViaCredentials_Request.
         * @exports CAuthentication_BeginAuthSessionViaCredentials_Request
         * @classdesc Represents a CAuthentication_BeginAuthSessionViaCredentials_Request.
         * @implements ICAuthentication_BeginAuthSessionViaCredentials_Request
         * @constructor
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Request=} [properties] Properties to set
         */
        function CAuthentication_BeginAuthSessionViaCredentials_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Request device_friendly_name.
         * @member {string} device_friendly_name
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.prototype.device_friendly_name = "";
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Request account_name.
         * @member {string} account_name
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.prototype.account_name = "";
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Request encrypted_password.
         * @member {string} encrypted_password
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.prototype.encrypted_password = "";
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Request encryption_timestamp.
         * @member {number|Long} encryption_timestamp
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.prototype.encryption_timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Request remember_login.
         * @member {boolean} remember_login
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.prototype.remember_login = false;
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Request platform_type.
         * @member {EAuthTokenPlatformType} platform_type
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.prototype.platform_type = 0;
    
        /**
         * Creates a new CAuthentication_BeginAuthSessionViaCredentials_Request instance using the specified properties.
         * @function create
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Request=} [properties] Properties to set
         * @returns {CAuthentication_BeginAuthSessionViaCredentials_Request} CAuthentication_BeginAuthSessionViaCredentials_Request instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.create = function create(properties) {
            return new CAuthentication_BeginAuthSessionViaCredentials_Request(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_BeginAuthSessionViaCredentials_Request message. Does not implicitly {@link CAuthentication_BeginAuthSessionViaCredentials_Request.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Request} message CAuthentication_BeginAuthSessionViaCredentials_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.device_friendly_name);
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account_name);
            if (message.encrypted_password != null && message.hasOwnProperty("encrypted_password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.encrypted_password);
            if (message.encryption_timestamp != null && message.hasOwnProperty("encryption_timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.encryption_timestamp);
            if (message.remember_login != null && message.hasOwnProperty("remember_login"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.remember_login);
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.platform_type);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_BeginAuthSessionViaCredentials_Request message, length delimited. Does not implicitly {@link CAuthentication_BeginAuthSessionViaCredentials_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Request} message CAuthentication_BeginAuthSessionViaCredentials_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_BeginAuthSessionViaCredentials_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_BeginAuthSessionViaCredentials_Request} CAuthentication_BeginAuthSessionViaCredentials_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_BeginAuthSessionViaCredentials_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.device_friendly_name = reader.string();
                    break;
                case 2:
                    message.account_name = reader.string();
                    break;
                case 3:
                    message.encrypted_password = reader.string();
                    break;
                case 4:
                    message.encryption_timestamp = reader.uint64();
                    break;
                case 5:
                    message.remember_login = reader.bool();
                    break;
                case 6:
                    message.platform_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_BeginAuthSessionViaCredentials_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_BeginAuthSessionViaCredentials_Request} CAuthentication_BeginAuthSessionViaCredentials_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_BeginAuthSessionViaCredentials_Request message.
         * @function verify
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                if (!$util.isString(message.device_friendly_name))
                    return "device_friendly_name: string expected";
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                if (!$util.isString(message.account_name))
                    return "account_name: string expected";
            if (message.encrypted_password != null && message.hasOwnProperty("encrypted_password"))
                if (!$util.isString(message.encrypted_password))
                    return "encrypted_password: string expected";
            if (message.encryption_timestamp != null && message.hasOwnProperty("encryption_timestamp"))
                if (!$util.isInteger(message.encryption_timestamp) && !(message.encryption_timestamp && $util.isInteger(message.encryption_timestamp.low) && $util.isInteger(message.encryption_timestamp.high)))
                    return "encryption_timestamp: integer|Long expected";
            if (message.remember_login != null && message.hasOwnProperty("remember_login"))
                if (typeof message.remember_login !== "boolean")
                    return "remember_login: boolean expected";
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                switch (message.platform_type) {
                default:
                    return "platform_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CAuthentication_BeginAuthSessionViaCredentials_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_BeginAuthSessionViaCredentials_Request} CAuthentication_BeginAuthSessionViaCredentials_Request
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_BeginAuthSessionViaCredentials_Request)
                return object;
            var message = new $root.CAuthentication_BeginAuthSessionViaCredentials_Request();
            if (object.device_friendly_name != null)
                message.device_friendly_name = String(object.device_friendly_name);
            if (object.account_name != null)
                message.account_name = String(object.account_name);
            if (object.encrypted_password != null)
                message.encrypted_password = String(object.encrypted_password);
            if (object.encryption_timestamp != null)
                if ($util.Long)
                    (message.encryption_timestamp = $util.Long.fromValue(object.encryption_timestamp)).unsigned = true;
                else if (typeof object.encryption_timestamp === "string")
                    message.encryption_timestamp = parseInt(object.encryption_timestamp, 10);
                else if (typeof object.encryption_timestamp === "number")
                    message.encryption_timestamp = object.encryption_timestamp;
                else if (typeof object.encryption_timestamp === "object")
                    message.encryption_timestamp = new $util.LongBits(object.encryption_timestamp.low >>> 0, object.encryption_timestamp.high >>> 0).toNumber(true);
            if (object.remember_login != null)
                message.remember_login = Boolean(object.remember_login);
            switch (object.platform_type) {
            case "k_EAuthTokenPlatformType_Unknown":
            case 0:
                message.platform_type = 0;
                break;
            case "k_EAuthTokenPlatformType_SteamClient":
            case 1:
                message.platform_type = 1;
                break;
            case "k_EAuthTokenPlatformType_WebBrowser":
            case 2:
                message.platform_type = 2;
                break;
            case "k_EAuthTokenPlatformType_MobileApp":
            case 3:
                message.platform_type = 3;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_BeginAuthSessionViaCredentials_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @static
         * @param {CAuthentication_BeginAuthSessionViaCredentials_Request} message CAuthentication_BeginAuthSessionViaCredentials_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.device_friendly_name = "";
                object.account_name = "";
                object.encrypted_password = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.encryption_timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.encryption_timestamp = options.longs === String ? "0" : 0;
                object.remember_login = false;
                object.platform_type = options.enums === String ? "k_EAuthTokenPlatformType_Unknown" : 0;
            }
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                object.device_friendly_name = message.device_friendly_name;
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                object.account_name = message.account_name;
            if (message.encrypted_password != null && message.hasOwnProperty("encrypted_password"))
                object.encrypted_password = message.encrypted_password;
            if (message.encryption_timestamp != null && message.hasOwnProperty("encryption_timestamp"))
                if (typeof message.encryption_timestamp === "number")
                    object.encryption_timestamp = options.longs === String ? String(message.encryption_timestamp) : message.encryption_timestamp;
                else
                    object.encryption_timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.encryption_timestamp) : options.longs === Number ? new $util.LongBits(message.encryption_timestamp.low >>> 0, message.encryption_timestamp.high >>> 0).toNumber(true) : message.encryption_timestamp;
            if (message.remember_login != null && message.hasOwnProperty("remember_login"))
                object.remember_login = message.remember_login;
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                object.platform_type = options.enums === String ? $root.EAuthTokenPlatformType[message.platform_type] : message.platform_type;
            return object;
        };
    
        /**
         * Converts this CAuthentication_BeginAuthSessionViaCredentials_Request to JSON.
         * @function toJSON
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_BeginAuthSessionViaCredentials_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_BeginAuthSessionViaCredentials_Request;
    })();
    
    $root.CAuthentication_BeginAuthSessionViaCredentials_Response = (function() {
    
        /**
         * Properties of a CAuthentication_BeginAuthSessionViaCredentials_Response.
         * @exports ICAuthentication_BeginAuthSessionViaCredentials_Response
         * @interface ICAuthentication_BeginAuthSessionViaCredentials_Response
         * @property {number|Long|null} [client_id] CAuthentication_BeginAuthSessionViaCredentials_Response client_id
         * @property {Uint8Array|null} [request_id] CAuthentication_BeginAuthSessionViaCredentials_Response request_id
         * @property {number|null} [interval] CAuthentication_BeginAuthSessionViaCredentials_Response interval
         * @property {Array.<ICAuthentication_AllowedConfirmation>|null} [allowed_confirmations] CAuthentication_BeginAuthSessionViaCredentials_Response allowed_confirmations
         * @property {number|Long|null} [steamid] CAuthentication_BeginAuthSessionViaCredentials_Response steamid
         */
    
        /**
         * Constructs a new CAuthentication_BeginAuthSessionViaCredentials_Response.
         * @exports CAuthentication_BeginAuthSessionViaCredentials_Response
         * @classdesc Represents a CAuthentication_BeginAuthSessionViaCredentials_Response.
         * @implements ICAuthentication_BeginAuthSessionViaCredentials_Response
         * @constructor
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Response=} [properties] Properties to set
         */
        function CAuthentication_BeginAuthSessionViaCredentials_Response(properties) {
            this.allowed_confirmations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Response client_id.
         * @member {number|Long} client_id
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Response request_id.
         * @member {Uint8Array} request_id
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.prototype.request_id = $util.newBuffer([]);
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Response interval.
         * @member {number} interval
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.prototype.interval = 0;
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Response allowed_confirmations.
         * @member {Array.<ICAuthentication_AllowedConfirmation>} allowed_confirmations
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.prototype.allowed_confirmations = $util.emptyArray;
    
        /**
         * CAuthentication_BeginAuthSessionViaCredentials_Response steamid.
         * @member {number|Long} steamid
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CAuthentication_BeginAuthSessionViaCredentials_Response instance using the specified properties.
         * @function create
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Response=} [properties] Properties to set
         * @returns {CAuthentication_BeginAuthSessionViaCredentials_Response} CAuthentication_BeginAuthSessionViaCredentials_Response instance
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.create = function create(properties) {
            return new CAuthentication_BeginAuthSessionViaCredentials_Response(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_BeginAuthSessionViaCredentials_Response message. Does not implicitly {@link CAuthentication_BeginAuthSessionViaCredentials_Response.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Response} message CAuthentication_BeginAuthSessionViaCredentials_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.client_id);
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.request_id);
            if (message.interval != null && message.hasOwnProperty("interval"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.interval);
            if (message.allowed_confirmations != null && message.allowed_confirmations.length)
                for (var i = 0; i < message.allowed_confirmations.length; ++i)
                    $root.CAuthentication_AllowedConfirmation.encode(message.allowed_confirmations[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_BeginAuthSessionViaCredentials_Response message, length delimited. Does not implicitly {@link CAuthentication_BeginAuthSessionViaCredentials_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @static
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Response} message CAuthentication_BeginAuthSessionViaCredentials_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_BeginAuthSessionViaCredentials_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_BeginAuthSessionViaCredentials_Response} CAuthentication_BeginAuthSessionViaCredentials_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_BeginAuthSessionViaCredentials_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.uint64();
                    break;
                case 2:
                    message.request_id = reader.bytes();
                    break;
                case 3:
                    message.interval = reader.float();
                    break;
                case 4:
                    if (!(message.allowed_confirmations && message.allowed_confirmations.length))
                        message.allowed_confirmations = [];
                    message.allowed_confirmations.push($root.CAuthentication_AllowedConfirmation.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.steamid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_BeginAuthSessionViaCredentials_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_BeginAuthSessionViaCredentials_Response} CAuthentication_BeginAuthSessionViaCredentials_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_BeginAuthSessionViaCredentials_Response message.
         * @function verify
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (!$util.isInteger(message.client_id) && !(message.client_id && $util.isInteger(message.client_id.low) && $util.isInteger(message.client_id.high)))
                    return "client_id: integer|Long expected";
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                if (!(message.request_id && typeof message.request_id.length === "number" || $util.isString(message.request_id)))
                    return "request_id: buffer expected";
            if (message.interval != null && message.hasOwnProperty("interval"))
                if (typeof message.interval !== "number")
                    return "interval: number expected";
            if (message.allowed_confirmations != null && message.hasOwnProperty("allowed_confirmations")) {
                if (!Array.isArray(message.allowed_confirmations))
                    return "allowed_confirmations: array expected";
                for (var i = 0; i < message.allowed_confirmations.length; ++i) {
                    var error = $root.CAuthentication_AllowedConfirmation.verify(message.allowed_confirmations[i]);
                    if (error)
                        return "allowed_confirmations." + error;
                }
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_BeginAuthSessionViaCredentials_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_BeginAuthSessionViaCredentials_Response} CAuthentication_BeginAuthSessionViaCredentials_Response
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_BeginAuthSessionViaCredentials_Response)
                return object;
            var message = new $root.CAuthentication_BeginAuthSessionViaCredentials_Response();
            if (object.client_id != null)
                if ($util.Long)
                    (message.client_id = $util.Long.fromValue(object.client_id)).unsigned = true;
                else if (typeof object.client_id === "string")
                    message.client_id = parseInt(object.client_id, 10);
                else if (typeof object.client_id === "number")
                    message.client_id = object.client_id;
                else if (typeof object.client_id === "object")
                    message.client_id = new $util.LongBits(object.client_id.low >>> 0, object.client_id.high >>> 0).toNumber(true);
            if (object.request_id != null)
                if (typeof object.request_id === "string")
                    $util.base64.decode(object.request_id, message.request_id = $util.newBuffer($util.base64.length(object.request_id)), 0);
                else if (object.request_id.length)
                    message.request_id = object.request_id;
            if (object.interval != null)
                message.interval = Number(object.interval);
            if (object.allowed_confirmations) {
                if (!Array.isArray(object.allowed_confirmations))
                    throw TypeError(".CAuthentication_BeginAuthSessionViaCredentials_Response.allowed_confirmations: array expected");
                message.allowed_confirmations = [];
                for (var i = 0; i < object.allowed_confirmations.length; ++i) {
                    if (typeof object.allowed_confirmations[i] !== "object")
                        throw TypeError(".CAuthentication_BeginAuthSessionViaCredentials_Response.allowed_confirmations: object expected");
                    message.allowed_confirmations[i] = $root.CAuthentication_AllowedConfirmation.fromObject(object.allowed_confirmations[i]);
                }
            }
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_BeginAuthSessionViaCredentials_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @static
         * @param {CAuthentication_BeginAuthSessionViaCredentials_Response} message CAuthentication_BeginAuthSessionViaCredentials_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.allowed_confirmations = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.request_id = "";
                else {
                    object.request_id = [];
                    if (options.bytes !== Array)
                        object.request_id = $util.newBuffer(object.request_id);
                }
                object.interval = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (typeof message.client_id === "number")
                    object.client_id = options.longs === String ? String(message.client_id) : message.client_id;
                else
                    object.client_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_id) : options.longs === Number ? new $util.LongBits(message.client_id.low >>> 0, message.client_id.high >>> 0).toNumber(true) : message.client_id;
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = options.bytes === String ? $util.base64.encode(message.request_id, 0, message.request_id.length) : options.bytes === Array ? Array.prototype.slice.call(message.request_id) : message.request_id;
            if (message.interval != null && message.hasOwnProperty("interval"))
                object.interval = options.json && !isFinite(message.interval) ? String(message.interval) : message.interval;
            if (message.allowed_confirmations && message.allowed_confirmations.length) {
                object.allowed_confirmations = [];
                for (var j = 0; j < message.allowed_confirmations.length; ++j)
                    object.allowed_confirmations[j] = $root.CAuthentication_AllowedConfirmation.toObject(message.allowed_confirmations[j], options);
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            return object;
        };
    
        /**
         * Converts this CAuthentication_BeginAuthSessionViaCredentials_Response to JSON.
         * @function toJSON
         * @memberof CAuthentication_BeginAuthSessionViaCredentials_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_BeginAuthSessionViaCredentials_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_BeginAuthSessionViaCredentials_Response;
    })();
    
    $root.CAuthentication_PollAuthSessionStatus_Request = (function() {
    
        /**
         * Properties of a CAuthentication_PollAuthSessionStatus_Request.
         * @exports ICAuthentication_PollAuthSessionStatus_Request
         * @interface ICAuthentication_PollAuthSessionStatus_Request
         * @property {number|Long|null} [client_id] CAuthentication_PollAuthSessionStatus_Request client_id
         * @property {Uint8Array|null} [request_id] CAuthentication_PollAuthSessionStatus_Request request_id
         */
    
        /**
         * Constructs a new CAuthentication_PollAuthSessionStatus_Request.
         * @exports CAuthentication_PollAuthSessionStatus_Request
         * @classdesc Represents a CAuthentication_PollAuthSessionStatus_Request.
         * @implements ICAuthentication_PollAuthSessionStatus_Request
         * @constructor
         * @param {ICAuthentication_PollAuthSessionStatus_Request=} [properties] Properties to set
         */
        function CAuthentication_PollAuthSessionStatus_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_PollAuthSessionStatus_Request client_id.
         * @member {number|Long} client_id
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @instance
         */
        CAuthentication_PollAuthSessionStatus_Request.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAuthentication_PollAuthSessionStatus_Request request_id.
         * @member {Uint8Array} request_id
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @instance
         */
        CAuthentication_PollAuthSessionStatus_Request.prototype.request_id = $util.newBuffer([]);
    
        /**
         * Creates a new CAuthentication_PollAuthSessionStatus_Request instance using the specified properties.
         * @function create
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @static
         * @param {ICAuthentication_PollAuthSessionStatus_Request=} [properties] Properties to set
         * @returns {CAuthentication_PollAuthSessionStatus_Request} CAuthentication_PollAuthSessionStatus_Request instance
         */
        CAuthentication_PollAuthSessionStatus_Request.create = function create(properties) {
            return new CAuthentication_PollAuthSessionStatus_Request(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_PollAuthSessionStatus_Request message. Does not implicitly {@link CAuthentication_PollAuthSessionStatus_Request.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @static
         * @param {ICAuthentication_PollAuthSessionStatus_Request} message CAuthentication_PollAuthSessionStatus_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_PollAuthSessionStatus_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.client_id);
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.request_id);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_PollAuthSessionStatus_Request message, length delimited. Does not implicitly {@link CAuthentication_PollAuthSessionStatus_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @static
         * @param {ICAuthentication_PollAuthSessionStatus_Request} message CAuthentication_PollAuthSessionStatus_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_PollAuthSessionStatus_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_PollAuthSessionStatus_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_PollAuthSessionStatus_Request} CAuthentication_PollAuthSessionStatus_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_PollAuthSessionStatus_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_PollAuthSessionStatus_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.uint64();
                    break;
                case 2:
                    message.request_id = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_PollAuthSessionStatus_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_PollAuthSessionStatus_Request} CAuthentication_PollAuthSessionStatus_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_PollAuthSessionStatus_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_PollAuthSessionStatus_Request message.
         * @function verify
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_PollAuthSessionStatus_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (!$util.isInteger(message.client_id) && !(message.client_id && $util.isInteger(message.client_id.low) && $util.isInteger(message.client_id.high)))
                    return "client_id: integer|Long expected";
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                if (!(message.request_id && typeof message.request_id.length === "number" || $util.isString(message.request_id)))
                    return "request_id: buffer expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_PollAuthSessionStatus_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_PollAuthSessionStatus_Request} CAuthentication_PollAuthSessionStatus_Request
         */
        CAuthentication_PollAuthSessionStatus_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_PollAuthSessionStatus_Request)
                return object;
            var message = new $root.CAuthentication_PollAuthSessionStatus_Request();
            if (object.client_id != null)
                if ($util.Long)
                    (message.client_id = $util.Long.fromValue(object.client_id)).unsigned = true;
                else if (typeof object.client_id === "string")
                    message.client_id = parseInt(object.client_id, 10);
                else if (typeof object.client_id === "number")
                    message.client_id = object.client_id;
                else if (typeof object.client_id === "object")
                    message.client_id = new $util.LongBits(object.client_id.low >>> 0, object.client_id.high >>> 0).toNumber(true);
            if (object.request_id != null)
                if (typeof object.request_id === "string")
                    $util.base64.decode(object.request_id, message.request_id = $util.newBuffer($util.base64.length(object.request_id)), 0);
                else if (object.request_id.length)
                    message.request_id = object.request_id;
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_PollAuthSessionStatus_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @static
         * @param {CAuthentication_PollAuthSessionStatus_Request} message CAuthentication_PollAuthSessionStatus_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_PollAuthSessionStatus_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.request_id = "";
                else {
                    object.request_id = [];
                    if (options.bytes !== Array)
                        object.request_id = $util.newBuffer(object.request_id);
                }
            }
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (typeof message.client_id === "number")
                    object.client_id = options.longs === String ? String(message.client_id) : message.client_id;
                else
                    object.client_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_id) : options.longs === Number ? new $util.LongBits(message.client_id.low >>> 0, message.client_id.high >>> 0).toNumber(true) : message.client_id;
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = options.bytes === String ? $util.base64.encode(message.request_id, 0, message.request_id.length) : options.bytes === Array ? Array.prototype.slice.call(message.request_id) : message.request_id;
            return object;
        };
    
        /**
         * Converts this CAuthentication_PollAuthSessionStatus_Request to JSON.
         * @function toJSON
         * @memberof CAuthentication_PollAuthSessionStatus_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_PollAuthSessionStatus_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_PollAuthSessionStatus_Request;
    })();
    
    $root.CAuthentication_PollAuthSessionStatus_Response = (function() {
    
        /**
         * Properties of a CAuthentication_PollAuthSessionStatus_Response.
         * @exports ICAuthentication_PollAuthSessionStatus_Response
         * @interface ICAuthentication_PollAuthSessionStatus_Response
         * @property {number|Long|null} [new_client_id] CAuthentication_PollAuthSessionStatus_Response new_client_id
         * @property {string|null} [new_challenge_url] CAuthentication_PollAuthSessionStatus_Response new_challenge_url
         * @property {string|null} [refresh_token] CAuthentication_PollAuthSessionStatus_Response refresh_token
         * @property {string|null} [access_token] CAuthentication_PollAuthSessionStatus_Response access_token
         */
    
        /**
         * Constructs a new CAuthentication_PollAuthSessionStatus_Response.
         * @exports CAuthentication_PollAuthSessionStatus_Response
         * @classdesc Represents a CAuthentication_PollAuthSessionStatus_Response.
         * @implements ICAuthentication_PollAuthSessionStatus_Response
         * @constructor
         * @param {ICAuthentication_PollAuthSessionStatus_Response=} [properties] Properties to set
         */
        function CAuthentication_PollAuthSessionStatus_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_PollAuthSessionStatus_Response new_client_id.
         * @member {number|Long} new_client_id
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @instance
         */
        CAuthentication_PollAuthSessionStatus_Response.prototype.new_client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAuthentication_PollAuthSessionStatus_Response new_challenge_url.
         * @member {string} new_challenge_url
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @instance
         */
        CAuthentication_PollAuthSessionStatus_Response.prototype.new_challenge_url = "";
    
        /**
         * CAuthentication_PollAuthSessionStatus_Response refresh_token.
         * @member {string} refresh_token
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @instance
         */
        CAuthentication_PollAuthSessionStatus_Response.prototype.refresh_token = "";
    
        /**
         * CAuthentication_PollAuthSessionStatus_Response access_token.
         * @member {string} access_token
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @instance
         */
        CAuthentication_PollAuthSessionStatus_Response.prototype.access_token = "";
    
        /**
         * Creates a new CAuthentication_PollAuthSessionStatus_Response instance using the specified properties.
         * @function create
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @static
         * @param {ICAuthentication_PollAuthSessionStatus_Response=} [properties] Properties to set
         * @returns {CAuthentication_PollAuthSessionStatus_Response} CAuthentication_PollAuthSessionStatus_Response instance
         */
        CAuthentication_PollAuthSessionStatus_Response.create = function create(properties) {
            return new CAuthentication_PollAuthSessionStatus_Response(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_PollAuthSessionStatus_Response message. Does not implicitly {@link CAuthentication_PollAuthSessionStatus_Response.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @static
         * @param {ICAuthentication_PollAuthSessionStatus_Response} message CAuthentication_PollAuthSessionStatus_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_PollAuthSessionStatus_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.new_client_id != null && message.hasOwnProperty("new_client_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.new_client_id);
            if (message.new_challenge_url != null && message.hasOwnProperty("new_challenge_url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.new_challenge_url);
            if (message.refresh_token != null && message.hasOwnProperty("refresh_token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.refresh_token);
            if (message.access_token != null && message.hasOwnProperty("access_token"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.access_token);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_PollAuthSessionStatus_Response message, length delimited. Does not implicitly {@link CAuthentication_PollAuthSessionStatus_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @static
         * @param {ICAuthentication_PollAuthSessionStatus_Response} message CAuthentication_PollAuthSessionStatus_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_PollAuthSessionStatus_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_PollAuthSessionStatus_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_PollAuthSessionStatus_Response} CAuthentication_PollAuthSessionStatus_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_PollAuthSessionStatus_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_PollAuthSessionStatus_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.new_client_id = reader.uint64();
                    break;
                case 2:
                    message.new_challenge_url = reader.string();
                    break;
                case 3:
                    message.refresh_token = reader.string();
                    break;
                case 4:
                    message.access_token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_PollAuthSessionStatus_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_PollAuthSessionStatus_Response} CAuthentication_PollAuthSessionStatus_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_PollAuthSessionStatus_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_PollAuthSessionStatus_Response message.
         * @function verify
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_PollAuthSessionStatus_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.new_client_id != null && message.hasOwnProperty("new_client_id"))
                if (!$util.isInteger(message.new_client_id) && !(message.new_client_id && $util.isInteger(message.new_client_id.low) && $util.isInteger(message.new_client_id.high)))
                    return "new_client_id: integer|Long expected";
            if (message.new_challenge_url != null && message.hasOwnProperty("new_challenge_url"))
                if (!$util.isString(message.new_challenge_url))
                    return "new_challenge_url: string expected";
            if (message.refresh_token != null && message.hasOwnProperty("refresh_token"))
                if (!$util.isString(message.refresh_token))
                    return "refresh_token: string expected";
            if (message.access_token != null && message.hasOwnProperty("access_token"))
                if (!$util.isString(message.access_token))
                    return "access_token: string expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_PollAuthSessionStatus_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_PollAuthSessionStatus_Response} CAuthentication_PollAuthSessionStatus_Response
         */
        CAuthentication_PollAuthSessionStatus_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_PollAuthSessionStatus_Response)
                return object;
            var message = new $root.CAuthentication_PollAuthSessionStatus_Response();
            if (object.new_client_id != null)
                if ($util.Long)
                    (message.new_client_id = $util.Long.fromValue(object.new_client_id)).unsigned = true;
                else if (typeof object.new_client_id === "string")
                    message.new_client_id = parseInt(object.new_client_id, 10);
                else if (typeof object.new_client_id === "number")
                    message.new_client_id = object.new_client_id;
                else if (typeof object.new_client_id === "object")
                    message.new_client_id = new $util.LongBits(object.new_client_id.low >>> 0, object.new_client_id.high >>> 0).toNumber(true);
            if (object.new_challenge_url != null)
                message.new_challenge_url = String(object.new_challenge_url);
            if (object.refresh_token != null)
                message.refresh_token = String(object.refresh_token);
            if (object.access_token != null)
                message.access_token = String(object.access_token);
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_PollAuthSessionStatus_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @static
         * @param {CAuthentication_PollAuthSessionStatus_Response} message CAuthentication_PollAuthSessionStatus_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_PollAuthSessionStatus_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.new_client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.new_client_id = options.longs === String ? "0" : 0;
                object.new_challenge_url = "";
                object.refresh_token = "";
                object.access_token = "";
            }
            if (message.new_client_id != null && message.hasOwnProperty("new_client_id"))
                if (typeof message.new_client_id === "number")
                    object.new_client_id = options.longs === String ? String(message.new_client_id) : message.new_client_id;
                else
                    object.new_client_id = options.longs === String ? $util.Long.prototype.toString.call(message.new_client_id) : options.longs === Number ? new $util.LongBits(message.new_client_id.low >>> 0, message.new_client_id.high >>> 0).toNumber(true) : message.new_client_id;
            if (message.new_challenge_url != null && message.hasOwnProperty("new_challenge_url"))
                object.new_challenge_url = message.new_challenge_url;
            if (message.refresh_token != null && message.hasOwnProperty("refresh_token"))
                object.refresh_token = message.refresh_token;
            if (message.access_token != null && message.hasOwnProperty("access_token"))
                object.access_token = message.access_token;
            return object;
        };
    
        /**
         * Converts this CAuthentication_PollAuthSessionStatus_Response to JSON.
         * @function toJSON
         * @memberof CAuthentication_PollAuthSessionStatus_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_PollAuthSessionStatus_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_PollAuthSessionStatus_Response;
    })();
    
    $root.CAuthentication_GetAuthSessionInfo_Request = (function() {
    
        /**
         * Properties of a CAuthentication_GetAuthSessionInfo_Request.
         * @exports ICAuthentication_GetAuthSessionInfo_Request
         * @interface ICAuthentication_GetAuthSessionInfo_Request
         * @property {number|Long|null} [client_id] CAuthentication_GetAuthSessionInfo_Request client_id
         */
    
        /**
         * Constructs a new CAuthentication_GetAuthSessionInfo_Request.
         * @exports CAuthentication_GetAuthSessionInfo_Request
         * @classdesc Represents a CAuthentication_GetAuthSessionInfo_Request.
         * @implements ICAuthentication_GetAuthSessionInfo_Request
         * @constructor
         * @param {ICAuthentication_GetAuthSessionInfo_Request=} [properties] Properties to set
         */
        function CAuthentication_GetAuthSessionInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_GetAuthSessionInfo_Request client_id.
         * @member {number|Long} client_id
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @instance
         */
        CAuthentication_GetAuthSessionInfo_Request.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CAuthentication_GetAuthSessionInfo_Request instance using the specified properties.
         * @function create
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @static
         * @param {ICAuthentication_GetAuthSessionInfo_Request=} [properties] Properties to set
         * @returns {CAuthentication_GetAuthSessionInfo_Request} CAuthentication_GetAuthSessionInfo_Request instance
         */
        CAuthentication_GetAuthSessionInfo_Request.create = function create(properties) {
            return new CAuthentication_GetAuthSessionInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_GetAuthSessionInfo_Request message. Does not implicitly {@link CAuthentication_GetAuthSessionInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @static
         * @param {ICAuthentication_GetAuthSessionInfo_Request} message CAuthentication_GetAuthSessionInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_GetAuthSessionInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.client_id);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_GetAuthSessionInfo_Request message, length delimited. Does not implicitly {@link CAuthentication_GetAuthSessionInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @static
         * @param {ICAuthentication_GetAuthSessionInfo_Request} message CAuthentication_GetAuthSessionInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_GetAuthSessionInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_GetAuthSessionInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_GetAuthSessionInfo_Request} CAuthentication_GetAuthSessionInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_GetAuthSessionInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_GetAuthSessionInfo_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_GetAuthSessionInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_GetAuthSessionInfo_Request} CAuthentication_GetAuthSessionInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_GetAuthSessionInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_GetAuthSessionInfo_Request message.
         * @function verify
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_GetAuthSessionInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (!$util.isInteger(message.client_id) && !(message.client_id && $util.isInteger(message.client_id.low) && $util.isInteger(message.client_id.high)))
                    return "client_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_GetAuthSessionInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_GetAuthSessionInfo_Request} CAuthentication_GetAuthSessionInfo_Request
         */
        CAuthentication_GetAuthSessionInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_GetAuthSessionInfo_Request)
                return object;
            var message = new $root.CAuthentication_GetAuthSessionInfo_Request();
            if (object.client_id != null)
                if ($util.Long)
                    (message.client_id = $util.Long.fromValue(object.client_id)).unsigned = true;
                else if (typeof object.client_id === "string")
                    message.client_id = parseInt(object.client_id, 10);
                else if (typeof object.client_id === "number")
                    message.client_id = object.client_id;
                else if (typeof object.client_id === "object")
                    message.client_id = new $util.LongBits(object.client_id.low >>> 0, object.client_id.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_GetAuthSessionInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @static
         * @param {CAuthentication_GetAuthSessionInfo_Request} message CAuthentication_GetAuthSessionInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_GetAuthSessionInfo_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_id = options.longs === String ? "0" : 0;
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (typeof message.client_id === "number")
                    object.client_id = options.longs === String ? String(message.client_id) : message.client_id;
                else
                    object.client_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_id) : options.longs === Number ? new $util.LongBits(message.client_id.low >>> 0, message.client_id.high >>> 0).toNumber(true) : message.client_id;
            return object;
        };
    
        /**
         * Converts this CAuthentication_GetAuthSessionInfo_Request to JSON.
         * @function toJSON
         * @memberof CAuthentication_GetAuthSessionInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_GetAuthSessionInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_GetAuthSessionInfo_Request;
    })();
    
    $root.CAuthentication_GetAuthSessionInfo_Response = (function() {
    
        /**
         * Properties of a CAuthentication_GetAuthSessionInfo_Response.
         * @exports ICAuthentication_GetAuthSessionInfo_Response
         * @interface ICAuthentication_GetAuthSessionInfo_Response
         * @property {string|null} [ip] CAuthentication_GetAuthSessionInfo_Response ip
         * @property {string|null} [geoloc] CAuthentication_GetAuthSessionInfo_Response geoloc
         * @property {string|null} [city] CAuthentication_GetAuthSessionInfo_Response city
         * @property {string|null} [state] CAuthentication_GetAuthSessionInfo_Response state
         * @property {string|null} [country] CAuthentication_GetAuthSessionInfo_Response country
         * @property {EAuthTokenPlatformType|null} [platform_type] CAuthentication_GetAuthSessionInfo_Response platform_type
         * @property {string|null} [device_friendly_name] CAuthentication_GetAuthSessionInfo_Response device_friendly_name
         */
    
        /**
         * Constructs a new CAuthentication_GetAuthSessionInfo_Response.
         * @exports CAuthentication_GetAuthSessionInfo_Response
         * @classdesc Represents a CAuthentication_GetAuthSessionInfo_Response.
         * @implements ICAuthentication_GetAuthSessionInfo_Response
         * @constructor
         * @param {ICAuthentication_GetAuthSessionInfo_Response=} [properties] Properties to set
         */
        function CAuthentication_GetAuthSessionInfo_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_GetAuthSessionInfo_Response ip.
         * @member {string} ip
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @instance
         */
        CAuthentication_GetAuthSessionInfo_Response.prototype.ip = "";
    
        /**
         * CAuthentication_GetAuthSessionInfo_Response geoloc.
         * @member {string} geoloc
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @instance
         */
        CAuthentication_GetAuthSessionInfo_Response.prototype.geoloc = "";
    
        /**
         * CAuthentication_GetAuthSessionInfo_Response city.
         * @member {string} city
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @instance
         */
        CAuthentication_GetAuthSessionInfo_Response.prototype.city = "";
    
        /**
         * CAuthentication_GetAuthSessionInfo_Response state.
         * @member {string} state
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @instance
         */
        CAuthentication_GetAuthSessionInfo_Response.prototype.state = "";
    
        /**
         * CAuthentication_GetAuthSessionInfo_Response country.
         * @member {string} country
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @instance
         */
        CAuthentication_GetAuthSessionInfo_Response.prototype.country = "";
    
        /**
         * CAuthentication_GetAuthSessionInfo_Response platform_type.
         * @member {EAuthTokenPlatformType} platform_type
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @instance
         */
        CAuthentication_GetAuthSessionInfo_Response.prototype.platform_type = 0;
    
        /**
         * CAuthentication_GetAuthSessionInfo_Response device_friendly_name.
         * @member {string} device_friendly_name
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @instance
         */
        CAuthentication_GetAuthSessionInfo_Response.prototype.device_friendly_name = "";
    
        /**
         * Creates a new CAuthentication_GetAuthSessionInfo_Response instance using the specified properties.
         * @function create
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @static
         * @param {ICAuthentication_GetAuthSessionInfo_Response=} [properties] Properties to set
         * @returns {CAuthentication_GetAuthSessionInfo_Response} CAuthentication_GetAuthSessionInfo_Response instance
         */
        CAuthentication_GetAuthSessionInfo_Response.create = function create(properties) {
            return new CAuthentication_GetAuthSessionInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_GetAuthSessionInfo_Response message. Does not implicitly {@link CAuthentication_GetAuthSessionInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @static
         * @param {ICAuthentication_GetAuthSessionInfo_Response} message CAuthentication_GetAuthSessionInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_GetAuthSessionInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.geoloc != null && message.hasOwnProperty("geoloc"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.geoloc);
            if (message.city != null && message.hasOwnProperty("city"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.city);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.state);
            if (message.country != null && message.hasOwnProperty("country"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.country);
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.platform_type);
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.device_friendly_name);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_GetAuthSessionInfo_Response message, length delimited. Does not implicitly {@link CAuthentication_GetAuthSessionInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @static
         * @param {ICAuthentication_GetAuthSessionInfo_Response} message CAuthentication_GetAuthSessionInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_GetAuthSessionInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_GetAuthSessionInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_GetAuthSessionInfo_Response} CAuthentication_GetAuthSessionInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_GetAuthSessionInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_GetAuthSessionInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.geoloc = reader.string();
                    break;
                case 3:
                    message.city = reader.string();
                    break;
                case 4:
                    message.state = reader.string();
                    break;
                case 5:
                    message.country = reader.string();
                    break;
                case 6:
                    message.platform_type = reader.int32();
                    break;
                case 7:
                    message.device_friendly_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_GetAuthSessionInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_GetAuthSessionInfo_Response} CAuthentication_GetAuthSessionInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_GetAuthSessionInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_GetAuthSessionInfo_Response message.
         * @function verify
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_GetAuthSessionInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.geoloc != null && message.hasOwnProperty("geoloc"))
                if (!$util.isString(message.geoloc))
                    return "geoloc: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                switch (message.platform_type) {
                default:
                    return "platform_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                if (!$util.isString(message.device_friendly_name))
                    return "device_friendly_name: string expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_GetAuthSessionInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_GetAuthSessionInfo_Response} CAuthentication_GetAuthSessionInfo_Response
         */
        CAuthentication_GetAuthSessionInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_GetAuthSessionInfo_Response)
                return object;
            var message = new $root.CAuthentication_GetAuthSessionInfo_Response();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.geoloc != null)
                message.geoloc = String(object.geoloc);
            if (object.city != null)
                message.city = String(object.city);
            if (object.state != null)
                message.state = String(object.state);
            if (object.country != null)
                message.country = String(object.country);
            switch (object.platform_type) {
            case "k_EAuthTokenPlatformType_Unknown":
            case 0:
                message.platform_type = 0;
                break;
            case "k_EAuthTokenPlatformType_SteamClient":
            case 1:
                message.platform_type = 1;
                break;
            case "k_EAuthTokenPlatformType_WebBrowser":
            case 2:
                message.platform_type = 2;
                break;
            case "k_EAuthTokenPlatformType_MobileApp":
            case 3:
                message.platform_type = 3;
                break;
            }
            if (object.device_friendly_name != null)
                message.device_friendly_name = String(object.device_friendly_name);
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_GetAuthSessionInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @static
         * @param {CAuthentication_GetAuthSessionInfo_Response} message CAuthentication_GetAuthSessionInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_GetAuthSessionInfo_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.geoloc = "";
                object.city = "";
                object.state = "";
                object.country = "";
                object.platform_type = options.enums === String ? "k_EAuthTokenPlatformType_Unknown" : 0;
                object.device_friendly_name = "";
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.geoloc != null && message.hasOwnProperty("geoloc"))
                object.geoloc = message.geoloc;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                object.platform_type = options.enums === String ? $root.EAuthTokenPlatformType[message.platform_type] : message.platform_type;
            if (message.device_friendly_name != null && message.hasOwnProperty("device_friendly_name"))
                object.device_friendly_name = message.device_friendly_name;
            return object;
        };
    
        /**
         * Converts this CAuthentication_GetAuthSessionInfo_Response to JSON.
         * @function toJSON
         * @memberof CAuthentication_GetAuthSessionInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_GetAuthSessionInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_GetAuthSessionInfo_Response;
    })();
    
    $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request = (function() {
    
        /**
         * Properties of a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.
         * @exports ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @interface ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @property {number|null} [version] CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request version
         * @property {number|Long|null} [client_id] CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request client_id
         * @property {number|Long|null} [steamid] CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request steamid
         * @property {Uint8Array|null} [signature] CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request signature
         * @property {boolean|null} [confirm] CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request confirm
         */
    
        /**
         * Constructs a new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.
         * @exports CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @classdesc Represents a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.
         * @implements ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @constructor
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request=} [properties] Properties to set
         */
        function CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request version.
         * @member {number} version
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.prototype.version = 0;
    
        /**
         * CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request client_id.
         * @member {number|Long} client_id
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request steamid.
         * @member {number|Long} steamid
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request signature.
         * @member {Uint8Array} signature
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.prototype.signature = $util.newBuffer([]);
    
        /**
         * CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request confirm.
         * @member {boolean} confirm
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.prototype.confirm = false;
    
        /**
         * Creates a new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request instance using the specified properties.
         * @function create
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request=} [properties] Properties to set
         * @returns {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request instance
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.create = function create(properties) {
            return new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.client_id);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
            if (message.confirm != null && message.hasOwnProperty("confirm"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.confirm);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message, length delimited. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 2:
                    message.client_id = reader.uint64();
                    break;
                case 3:
                    message.steamid = reader.fixed64();
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                case 5:
                    message.confirm = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message.
         * @function verify
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (!$util.isInteger(message.client_id) && !(message.client_id && $util.isInteger(message.client_id.low) && $util.isInteger(message.client_id.high)))
                    return "client_id: integer|Long expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            if (message.confirm != null && message.hasOwnProperty("confirm"))
                if (typeof message.confirm !== "boolean")
                    return "confirm: boolean expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request)
                return object;
            var message = new $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.client_id != null)
                if ($util.Long)
                    (message.client_id = $util.Long.fromValue(object.client_id)).unsigned = true;
                else if (typeof object.client_id === "string")
                    message.client_id = parseInt(object.client_id, 10);
                else if (typeof object.client_id === "number")
                    message.client_id = object.client_id;
                else if (typeof object.client_id === "object")
                    message.client_id = new $util.LongBits(object.client_id.low >>> 0, object.client_id.high >>> 0).toNumber(true);
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            if (object.confirm != null)
                message.confirm = Boolean(object.confirm);
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @static
         * @param {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
                object.confirm = false;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (typeof message.client_id === "number")
                    object.client_id = options.longs === String ? String(message.client_id) : message.client_id;
                else
                    object.client_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_id) : options.longs === Number ? new $util.LongBits(message.client_id.low >>> 0, message.client_id.high >>> 0).toNumber(true) : message.client_id;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            if (message.confirm != null && message.hasOwnProperty("confirm"))
                object.confirm = message.confirm;
            return object;
        };
    
        /**
         * Converts this CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request to JSON.
         * @function toJSON
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request;
    })();
    
    $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response = (function() {
    
        /**
         * Properties of a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.
         * @exports ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @interface ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         */
    
        /**
         * Constructs a new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.
         * @exports CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @classdesc Represents a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.
         * @implements ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @constructor
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response=} [properties] Properties to set
         */
        function CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response instance using the specified properties.
         * @function create
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response=} [properties] Properties to set
         * @returns {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response} CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response instance
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.create = function create(properties) {
            return new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response} message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message, length delimited. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response} message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response} CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response();
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
         * Decodes a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response} CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message.
         * @function verify
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response} CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response)
                return object;
            return new $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response();
        };
    
        /**
         * Creates a plain object from a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @static
         * @param {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response} message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response to JSON.
         * @function toJSON
         * @memberof CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response;
    })();
    
    $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request = (function() {
    
        /**
         * Properties of a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.
         * @exports ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @interface ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @property {number|Long|null} [client_id] CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request client_id
         * @property {number|Long|null} [steamid] CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request steamid
         * @property {string|null} [code] CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request code
         * @property {EAuthSessionGuardType|null} [code_type] CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request code_type
         */
    
        /**
         * Constructs a new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.
         * @exports CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @classdesc Represents a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.
         * @implements ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @constructor
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request=} [properties] Properties to set
         */
        function CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request client_id.
         * @member {number|Long} client_id
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.prototype.client_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request steamid.
         * @member {number|Long} steamid
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request code.
         * @member {string} code
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.prototype.code = "";
    
        /**
         * CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request code_type.
         * @member {EAuthSessionGuardType} code_type
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @instance
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.prototype.code_type = 0;
    
        /**
         * Creates a new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request instance using the specified properties.
         * @function create
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request=} [properties] Properties to set
         * @returns {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request instance
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.create = function create(properties) {
            return new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.client_id);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.code);
            if (message.code_type != null && message.hasOwnProperty("code_type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.code_type);
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message, length delimited. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.uint64();
                    break;
                case 2:
                    message.steamid = reader.fixed64();
                    break;
                case 3:
                    message.code = reader.string();
                    break;
                case 4:
                    message.code_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message.
         * @function verify
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (!$util.isInteger(message.client_id) && !(message.client_id && $util.isInteger(message.client_id.low) && $util.isInteger(message.client_id.high)))
                    return "client_id: integer|Long expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.code_type != null && message.hasOwnProperty("code_type"))
                switch (message.code_type) {
                default:
                    return "code_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request)
                return object;
            var message = new $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request();
            if (object.client_id != null)
                if ($util.Long)
                    (message.client_id = $util.Long.fromValue(object.client_id)).unsigned = true;
                else if (typeof object.client_id === "string")
                    message.client_id = parseInt(object.client_id, 10);
                else if (typeof object.client_id === "number")
                    message.client_id = object.client_id;
                else if (typeof object.client_id === "object")
                    message.client_id = new $util.LongBits(object.client_id.low >>> 0, object.client_id.high >>> 0).toNumber(true);
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.code != null)
                message.code = String(object.code);
            switch (object.code_type) {
            case "k_EAuthSessionGuardType_Unknown":
            case 0:
                message.code_type = 0;
                break;
            case "k_EAuthSessionGuardType_None":
            case 1:
                message.code_type = 1;
                break;
            case "k_EAuthSessionGuardType_EmailCode":
            case 2:
                message.code_type = 2;
                break;
            case "k_EAuthSessionGuardType_DeviceCode":
            case 3:
                message.code_type = 3;
                break;
            case "k_EAuthSessionGuardType_DeviceConfirmation":
            case 4:
                message.code_type = 4;
                break;
            case "k_EAuthSessionGuardType_EmailConfirmation":
            case 5:
                message.code_type = 5;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @static
         * @param {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.client_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.client_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.code = "";
                object.code_type = options.enums === String ? "k_EAuthSessionGuardType_Unknown" : 0;
            }
            if (message.client_id != null && message.hasOwnProperty("client_id"))
                if (typeof message.client_id === "number")
                    object.client_id = options.longs === String ? String(message.client_id) : message.client_id;
                else
                    object.client_id = options.longs === String ? $util.Long.prototype.toString.call(message.client_id) : options.longs === Number ? new $util.LongBits(message.client_id.low >>> 0, message.client_id.high >>> 0).toNumber(true) : message.client_id;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.code_type != null && message.hasOwnProperty("code_type"))
                object.code_type = options.enums === String ? $root.EAuthSessionGuardType[message.code_type] : message.code_type;
            return object;
        };
    
        /**
         * Converts this CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request to JSON.
         * @function toJSON
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request;
    })();
    
    $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response = (function() {
    
        /**
         * Properties of a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.
         * @exports ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @interface ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         */
    
        /**
         * Constructs a new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.
         * @exports CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @classdesc Represents a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.
         * @implements ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @constructor
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response=} [properties] Properties to set
         */
        function CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response instance using the specified properties.
         * @function create
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response=} [properties] Properties to set
         * @returns {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response} CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response instance
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.create = function create(properties) {
            return new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response(properties);
        };
    
        /**
         * Encodes the specified CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.verify|verify} messages.
         * @function encode
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response} message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message, length delimited. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @static
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response} message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response} CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response();
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
         * Decodes a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response} CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message.
         * @function verify
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response} CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response)
                return object;
            return new $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response();
        };
    
        /**
         * Creates a plain object from a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @static
         * @param {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response} message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response to JSON.
         * @function toJSON
         * @memberof CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response;
    })();
    
    $root.CCloudGaming_CreateNonce_Request = (function() {
    
        /**
         * Properties of a CCloudGaming_CreateNonce_Request.
         * @exports ICCloudGaming_CreateNonce_Request
         * @interface ICCloudGaming_CreateNonce_Request
         * @property {string|null} [platform] CCloudGaming_CreateNonce_Request platform
         * @property {number|null} [appid] CCloudGaming_CreateNonce_Request appid
         */
    
        /**
         * Constructs a new CCloudGaming_CreateNonce_Request.
         * @exports CCloudGaming_CreateNonce_Request
         * @classdesc Represents a CCloudGaming_CreateNonce_Request.
         * @implements ICCloudGaming_CreateNonce_Request
         * @constructor
         * @param {ICCloudGaming_CreateNonce_Request=} [properties] Properties to set
         */
        function CCloudGaming_CreateNonce_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloudGaming_CreateNonce_Request platform.
         * @member {string} platform
         * @memberof CCloudGaming_CreateNonce_Request
         * @instance
         */
        CCloudGaming_CreateNonce_Request.prototype.platform = "";
    
        /**
         * CCloudGaming_CreateNonce_Request appid.
         * @member {number} appid
         * @memberof CCloudGaming_CreateNonce_Request
         * @instance
         */
        CCloudGaming_CreateNonce_Request.prototype.appid = 0;
    
        /**
         * Creates a new CCloudGaming_CreateNonce_Request instance using the specified properties.
         * @function create
         * @memberof CCloudGaming_CreateNonce_Request
         * @static
         * @param {ICCloudGaming_CreateNonce_Request=} [properties] Properties to set
         * @returns {CCloudGaming_CreateNonce_Request} CCloudGaming_CreateNonce_Request instance
         */
        CCloudGaming_CreateNonce_Request.create = function create(properties) {
            return new CCloudGaming_CreateNonce_Request(properties);
        };
    
        /**
         * Encodes the specified CCloudGaming_CreateNonce_Request message. Does not implicitly {@link CCloudGaming_CreateNonce_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloudGaming_CreateNonce_Request
         * @static
         * @param {ICCloudGaming_CreateNonce_Request} message CCloudGaming_CreateNonce_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_CreateNonce_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platform != null && message.hasOwnProperty("platform"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.platform);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CCloudGaming_CreateNonce_Request message, length delimited. Does not implicitly {@link CCloudGaming_CreateNonce_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloudGaming_CreateNonce_Request
         * @static
         * @param {ICCloudGaming_CreateNonce_Request} message CCloudGaming_CreateNonce_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_CreateNonce_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloudGaming_CreateNonce_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloudGaming_CreateNonce_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloudGaming_CreateNonce_Request} CCloudGaming_CreateNonce_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_CreateNonce_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloudGaming_CreateNonce_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platform = reader.string();
                    break;
                case 2:
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
         * Decodes a CCloudGaming_CreateNonce_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloudGaming_CreateNonce_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloudGaming_CreateNonce_Request} CCloudGaming_CreateNonce_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_CreateNonce_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloudGaming_CreateNonce_Request message.
         * @function verify
         * @memberof CCloudGaming_CreateNonce_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloudGaming_CreateNonce_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isString(message.platform))
                    return "platform: string expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloudGaming_CreateNonce_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloudGaming_CreateNonce_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloudGaming_CreateNonce_Request} CCloudGaming_CreateNonce_Request
         */
        CCloudGaming_CreateNonce_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloudGaming_CreateNonce_Request)
                return object;
            var message = new $root.CCloudGaming_CreateNonce_Request();
            if (object.platform != null)
                message.platform = String(object.platform);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloudGaming_CreateNonce_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloudGaming_CreateNonce_Request
         * @static
         * @param {CCloudGaming_CreateNonce_Request} message CCloudGaming_CreateNonce_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloudGaming_CreateNonce_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platform = "";
                object.appid = 0;
            }
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CCloudGaming_CreateNonce_Request to JSON.
         * @function toJSON
         * @memberof CCloudGaming_CreateNonce_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloudGaming_CreateNonce_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloudGaming_CreateNonce_Request;
    })();
    
    $root.CCloudGaming_CreateNonce_Response = (function() {
    
        /**
         * Properties of a CCloudGaming_CreateNonce_Response.
         * @exports ICCloudGaming_CreateNonce_Response
         * @interface ICCloudGaming_CreateNonce_Response
         * @property {string|null} [nonce] CCloudGaming_CreateNonce_Response nonce
         * @property {number|null} [expiry] CCloudGaming_CreateNonce_Response expiry
         */
    
        /**
         * Constructs a new CCloudGaming_CreateNonce_Response.
         * @exports CCloudGaming_CreateNonce_Response
         * @classdesc Represents a CCloudGaming_CreateNonce_Response.
         * @implements ICCloudGaming_CreateNonce_Response
         * @constructor
         * @param {ICCloudGaming_CreateNonce_Response=} [properties] Properties to set
         */
        function CCloudGaming_CreateNonce_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloudGaming_CreateNonce_Response nonce.
         * @member {string} nonce
         * @memberof CCloudGaming_CreateNonce_Response
         * @instance
         */
        CCloudGaming_CreateNonce_Response.prototype.nonce = "";
    
        /**
         * CCloudGaming_CreateNonce_Response expiry.
         * @member {number} expiry
         * @memberof CCloudGaming_CreateNonce_Response
         * @instance
         */
        CCloudGaming_CreateNonce_Response.prototype.expiry = 0;
    
        /**
         * Creates a new CCloudGaming_CreateNonce_Response instance using the specified properties.
         * @function create
         * @memberof CCloudGaming_CreateNonce_Response
         * @static
         * @param {ICCloudGaming_CreateNonce_Response=} [properties] Properties to set
         * @returns {CCloudGaming_CreateNonce_Response} CCloudGaming_CreateNonce_Response instance
         */
        CCloudGaming_CreateNonce_Response.create = function create(properties) {
            return new CCloudGaming_CreateNonce_Response(properties);
        };
    
        /**
         * Encodes the specified CCloudGaming_CreateNonce_Response message. Does not implicitly {@link CCloudGaming_CreateNonce_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloudGaming_CreateNonce_Response
         * @static
         * @param {ICCloudGaming_CreateNonce_Response} message CCloudGaming_CreateNonce_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_CreateNonce_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nonce);
            if (message.expiry != null && message.hasOwnProperty("expiry"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.expiry);
            return writer;
        };
    
        /**
         * Encodes the specified CCloudGaming_CreateNonce_Response message, length delimited. Does not implicitly {@link CCloudGaming_CreateNonce_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloudGaming_CreateNonce_Response
         * @static
         * @param {ICCloudGaming_CreateNonce_Response} message CCloudGaming_CreateNonce_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_CreateNonce_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloudGaming_CreateNonce_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloudGaming_CreateNonce_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloudGaming_CreateNonce_Response} CCloudGaming_CreateNonce_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_CreateNonce_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloudGaming_CreateNonce_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.string();
                    break;
                case 2:
                    message.expiry = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloudGaming_CreateNonce_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloudGaming_CreateNonce_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloudGaming_CreateNonce_Response} CCloudGaming_CreateNonce_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_CreateNonce_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloudGaming_CreateNonce_Response message.
         * @function verify
         * @memberof CCloudGaming_CreateNonce_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloudGaming_CreateNonce_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isString(message.nonce))
                    return "nonce: string expected";
            if (message.expiry != null && message.hasOwnProperty("expiry"))
                if (!$util.isInteger(message.expiry))
                    return "expiry: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloudGaming_CreateNonce_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloudGaming_CreateNonce_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloudGaming_CreateNonce_Response} CCloudGaming_CreateNonce_Response
         */
        CCloudGaming_CreateNonce_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloudGaming_CreateNonce_Response)
                return object;
            var message = new $root.CCloudGaming_CreateNonce_Response();
            if (object.nonce != null)
                message.nonce = String(object.nonce);
            if (object.expiry != null)
                message.expiry = object.expiry >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloudGaming_CreateNonce_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloudGaming_CreateNonce_Response
         * @static
         * @param {CCloudGaming_CreateNonce_Response} message CCloudGaming_CreateNonce_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloudGaming_CreateNonce_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nonce = "";
                object.expiry = 0;
            }
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            if (message.expiry != null && message.hasOwnProperty("expiry"))
                object.expiry = message.expiry;
            return object;
        };
    
        /**
         * Converts this CCloudGaming_CreateNonce_Response to JSON.
         * @function toJSON
         * @memberof CCloudGaming_CreateNonce_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloudGaming_CreateNonce_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloudGaming_CreateNonce_Response;
    })();
    
    $root.CCloudGaming_GetTimeRemaining_Request = (function() {
    
        /**
         * Properties of a CCloudGaming_GetTimeRemaining_Request.
         * @exports ICCloudGaming_GetTimeRemaining_Request
         * @interface ICCloudGaming_GetTimeRemaining_Request
         * @property {string|null} [platform] CCloudGaming_GetTimeRemaining_Request platform
         * @property {Array.<number>|null} [appid_list] CCloudGaming_GetTimeRemaining_Request appid_list
         */
    
        /**
         * Constructs a new CCloudGaming_GetTimeRemaining_Request.
         * @exports CCloudGaming_GetTimeRemaining_Request
         * @classdesc Represents a CCloudGaming_GetTimeRemaining_Request.
         * @implements ICCloudGaming_GetTimeRemaining_Request
         * @constructor
         * @param {ICCloudGaming_GetTimeRemaining_Request=} [properties] Properties to set
         */
        function CCloudGaming_GetTimeRemaining_Request(properties) {
            this.appid_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloudGaming_GetTimeRemaining_Request platform.
         * @member {string} platform
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @instance
         */
        CCloudGaming_GetTimeRemaining_Request.prototype.platform = "";
    
        /**
         * CCloudGaming_GetTimeRemaining_Request appid_list.
         * @member {Array.<number>} appid_list
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @instance
         */
        CCloudGaming_GetTimeRemaining_Request.prototype.appid_list = $util.emptyArray;
    
        /**
         * Creates a new CCloudGaming_GetTimeRemaining_Request instance using the specified properties.
         * @function create
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @static
         * @param {ICCloudGaming_GetTimeRemaining_Request=} [properties] Properties to set
         * @returns {CCloudGaming_GetTimeRemaining_Request} CCloudGaming_GetTimeRemaining_Request instance
         */
        CCloudGaming_GetTimeRemaining_Request.create = function create(properties) {
            return new CCloudGaming_GetTimeRemaining_Request(properties);
        };
    
        /**
         * Encodes the specified CCloudGaming_GetTimeRemaining_Request message. Does not implicitly {@link CCloudGaming_GetTimeRemaining_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @static
         * @param {ICCloudGaming_GetTimeRemaining_Request} message CCloudGaming_GetTimeRemaining_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_GetTimeRemaining_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platform != null && message.hasOwnProperty("platform"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.platform);
            if (message.appid_list != null && message.appid_list.length)
                for (var i = 0; i < message.appid_list.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid_list[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CCloudGaming_GetTimeRemaining_Request message, length delimited. Does not implicitly {@link CCloudGaming_GetTimeRemaining_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @static
         * @param {ICCloudGaming_GetTimeRemaining_Request} message CCloudGaming_GetTimeRemaining_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_GetTimeRemaining_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloudGaming_GetTimeRemaining_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloudGaming_GetTimeRemaining_Request} CCloudGaming_GetTimeRemaining_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_GetTimeRemaining_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloudGaming_GetTimeRemaining_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platform = reader.string();
                    break;
                case 2:
                    if (!(message.appid_list && message.appid_list.length))
                        message.appid_list = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.appid_list.push(reader.uint32());
                    } else
                        message.appid_list.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloudGaming_GetTimeRemaining_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloudGaming_GetTimeRemaining_Request} CCloudGaming_GetTimeRemaining_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_GetTimeRemaining_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloudGaming_GetTimeRemaining_Request message.
         * @function verify
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloudGaming_GetTimeRemaining_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isString(message.platform))
                    return "platform: string expected";
            if (message.appid_list != null && message.hasOwnProperty("appid_list")) {
                if (!Array.isArray(message.appid_list))
                    return "appid_list: array expected";
                for (var i = 0; i < message.appid_list.length; ++i)
                    if (!$util.isInteger(message.appid_list[i]))
                        return "appid_list: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CCloudGaming_GetTimeRemaining_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloudGaming_GetTimeRemaining_Request} CCloudGaming_GetTimeRemaining_Request
         */
        CCloudGaming_GetTimeRemaining_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloudGaming_GetTimeRemaining_Request)
                return object;
            var message = new $root.CCloudGaming_GetTimeRemaining_Request();
            if (object.platform != null)
                message.platform = String(object.platform);
            if (object.appid_list) {
                if (!Array.isArray(object.appid_list))
                    throw TypeError(".CCloudGaming_GetTimeRemaining_Request.appid_list: array expected");
                message.appid_list = [];
                for (var i = 0; i < object.appid_list.length; ++i)
                    message.appid_list[i] = object.appid_list[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CCloudGaming_GetTimeRemaining_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @static
         * @param {CCloudGaming_GetTimeRemaining_Request} message CCloudGaming_GetTimeRemaining_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloudGaming_GetTimeRemaining_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.appid_list = [];
            if (options.defaults)
                object.platform = "";
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.appid_list && message.appid_list.length) {
                object.appid_list = [];
                for (var j = 0; j < message.appid_list.length; ++j)
                    object.appid_list[j] = message.appid_list[j];
            }
            return object;
        };
    
        /**
         * Converts this CCloudGaming_GetTimeRemaining_Request to JSON.
         * @function toJSON
         * @memberof CCloudGaming_GetTimeRemaining_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloudGaming_GetTimeRemaining_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloudGaming_GetTimeRemaining_Request;
    })();
    
    $root.CCloudGaming_TimeRemaining = (function() {
    
        /**
         * Properties of a CCloudGaming_TimeRemaining.
         * @exports ICCloudGaming_TimeRemaining
         * @interface ICCloudGaming_TimeRemaining
         * @property {number|null} [appid] CCloudGaming_TimeRemaining appid
         * @property {number|null} [minutes_remaining] CCloudGaming_TimeRemaining minutes_remaining
         */
    
        /**
         * Constructs a new CCloudGaming_TimeRemaining.
         * @exports CCloudGaming_TimeRemaining
         * @classdesc Represents a CCloudGaming_TimeRemaining.
         * @implements ICCloudGaming_TimeRemaining
         * @constructor
         * @param {ICCloudGaming_TimeRemaining=} [properties] Properties to set
         */
        function CCloudGaming_TimeRemaining(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloudGaming_TimeRemaining appid.
         * @member {number} appid
         * @memberof CCloudGaming_TimeRemaining
         * @instance
         */
        CCloudGaming_TimeRemaining.prototype.appid = 0;
    
        /**
         * CCloudGaming_TimeRemaining minutes_remaining.
         * @member {number} minutes_remaining
         * @memberof CCloudGaming_TimeRemaining
         * @instance
         */
        CCloudGaming_TimeRemaining.prototype.minutes_remaining = 0;
    
        /**
         * Creates a new CCloudGaming_TimeRemaining instance using the specified properties.
         * @function create
         * @memberof CCloudGaming_TimeRemaining
         * @static
         * @param {ICCloudGaming_TimeRemaining=} [properties] Properties to set
         * @returns {CCloudGaming_TimeRemaining} CCloudGaming_TimeRemaining instance
         */
        CCloudGaming_TimeRemaining.create = function create(properties) {
            return new CCloudGaming_TimeRemaining(properties);
        };
    
        /**
         * Encodes the specified CCloudGaming_TimeRemaining message. Does not implicitly {@link CCloudGaming_TimeRemaining.verify|verify} messages.
         * @function encode
         * @memberof CCloudGaming_TimeRemaining
         * @static
         * @param {ICCloudGaming_TimeRemaining} message CCloudGaming_TimeRemaining message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_TimeRemaining.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.minutes_remaining != null && message.hasOwnProperty("minutes_remaining"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minutes_remaining);
            return writer;
        };
    
        /**
         * Encodes the specified CCloudGaming_TimeRemaining message, length delimited. Does not implicitly {@link CCloudGaming_TimeRemaining.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloudGaming_TimeRemaining
         * @static
         * @param {ICCloudGaming_TimeRemaining} message CCloudGaming_TimeRemaining message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_TimeRemaining.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloudGaming_TimeRemaining message from the specified reader or buffer.
         * @function decode
         * @memberof CCloudGaming_TimeRemaining
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloudGaming_TimeRemaining} CCloudGaming_TimeRemaining
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_TimeRemaining.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloudGaming_TimeRemaining();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.minutes_remaining = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloudGaming_TimeRemaining message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloudGaming_TimeRemaining
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloudGaming_TimeRemaining} CCloudGaming_TimeRemaining
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_TimeRemaining.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloudGaming_TimeRemaining message.
         * @function verify
         * @memberof CCloudGaming_TimeRemaining
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloudGaming_TimeRemaining.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.minutes_remaining != null && message.hasOwnProperty("minutes_remaining"))
                if (!$util.isInteger(message.minutes_remaining))
                    return "minutes_remaining: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloudGaming_TimeRemaining message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloudGaming_TimeRemaining
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloudGaming_TimeRemaining} CCloudGaming_TimeRemaining
         */
        CCloudGaming_TimeRemaining.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloudGaming_TimeRemaining)
                return object;
            var message = new $root.CCloudGaming_TimeRemaining();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.minutes_remaining != null)
                message.minutes_remaining = object.minutes_remaining >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloudGaming_TimeRemaining message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloudGaming_TimeRemaining
         * @static
         * @param {CCloudGaming_TimeRemaining} message CCloudGaming_TimeRemaining
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloudGaming_TimeRemaining.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.minutes_remaining = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.minutes_remaining != null && message.hasOwnProperty("minutes_remaining"))
                object.minutes_remaining = message.minutes_remaining;
            return object;
        };
    
        /**
         * Converts this CCloudGaming_TimeRemaining to JSON.
         * @function toJSON
         * @memberof CCloudGaming_TimeRemaining
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloudGaming_TimeRemaining.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloudGaming_TimeRemaining;
    })();
    
    $root.CCloudGaming_GetTimeRemaining_Response = (function() {
    
        /**
         * Properties of a CCloudGaming_GetTimeRemaining_Response.
         * @exports ICCloudGaming_GetTimeRemaining_Response
         * @interface ICCloudGaming_GetTimeRemaining_Response
         * @property {Array.<ICCloudGaming_TimeRemaining>|null} [entries] CCloudGaming_GetTimeRemaining_Response entries
         */
    
        /**
         * Constructs a new CCloudGaming_GetTimeRemaining_Response.
         * @exports CCloudGaming_GetTimeRemaining_Response
         * @classdesc Represents a CCloudGaming_GetTimeRemaining_Response.
         * @implements ICCloudGaming_GetTimeRemaining_Response
         * @constructor
         * @param {ICCloudGaming_GetTimeRemaining_Response=} [properties] Properties to set
         */
        function CCloudGaming_GetTimeRemaining_Response(properties) {
            this.entries = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloudGaming_GetTimeRemaining_Response entries.
         * @member {Array.<ICCloudGaming_TimeRemaining>} entries
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @instance
         */
        CCloudGaming_GetTimeRemaining_Response.prototype.entries = $util.emptyArray;
    
        /**
         * Creates a new CCloudGaming_GetTimeRemaining_Response instance using the specified properties.
         * @function create
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @static
         * @param {ICCloudGaming_GetTimeRemaining_Response=} [properties] Properties to set
         * @returns {CCloudGaming_GetTimeRemaining_Response} CCloudGaming_GetTimeRemaining_Response instance
         */
        CCloudGaming_GetTimeRemaining_Response.create = function create(properties) {
            return new CCloudGaming_GetTimeRemaining_Response(properties);
        };
    
        /**
         * Encodes the specified CCloudGaming_GetTimeRemaining_Response message. Does not implicitly {@link CCloudGaming_GetTimeRemaining_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @static
         * @param {ICCloudGaming_GetTimeRemaining_Response} message CCloudGaming_GetTimeRemaining_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_GetTimeRemaining_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entries != null && message.entries.length)
                for (var i = 0; i < message.entries.length; ++i)
                    $root.CCloudGaming_TimeRemaining.encode(message.entries[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CCloudGaming_GetTimeRemaining_Response message, length delimited. Does not implicitly {@link CCloudGaming_GetTimeRemaining_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @static
         * @param {ICCloudGaming_GetTimeRemaining_Response} message CCloudGaming_GetTimeRemaining_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloudGaming_GetTimeRemaining_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloudGaming_GetTimeRemaining_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloudGaming_GetTimeRemaining_Response} CCloudGaming_GetTimeRemaining_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_GetTimeRemaining_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloudGaming_GetTimeRemaining_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.entries && message.entries.length))
                        message.entries = [];
                    message.entries.push($root.CCloudGaming_TimeRemaining.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloudGaming_GetTimeRemaining_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloudGaming_GetTimeRemaining_Response} CCloudGaming_GetTimeRemaining_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloudGaming_GetTimeRemaining_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloudGaming_GetTimeRemaining_Response message.
         * @function verify
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloudGaming_GetTimeRemaining_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entries != null && message.hasOwnProperty("entries")) {
                if (!Array.isArray(message.entries))
                    return "entries: array expected";
                for (var i = 0; i < message.entries.length; ++i) {
                    var error = $root.CCloudGaming_TimeRemaining.verify(message.entries[i]);
                    if (error)
                        return "entries." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CCloudGaming_GetTimeRemaining_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloudGaming_GetTimeRemaining_Response} CCloudGaming_GetTimeRemaining_Response
         */
        CCloudGaming_GetTimeRemaining_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloudGaming_GetTimeRemaining_Response)
                return object;
            var message = new $root.CCloudGaming_GetTimeRemaining_Response();
            if (object.entries) {
                if (!Array.isArray(object.entries))
                    throw TypeError(".CCloudGaming_GetTimeRemaining_Response.entries: array expected");
                message.entries = [];
                for (var i = 0; i < object.entries.length; ++i) {
                    if (typeof object.entries[i] !== "object")
                        throw TypeError(".CCloudGaming_GetTimeRemaining_Response.entries: object expected");
                    message.entries[i] = $root.CCloudGaming_TimeRemaining.fromObject(object.entries[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CCloudGaming_GetTimeRemaining_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @static
         * @param {CCloudGaming_GetTimeRemaining_Response} message CCloudGaming_GetTimeRemaining_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloudGaming_GetTimeRemaining_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.entries = [];
            if (message.entries && message.entries.length) {
                object.entries = [];
                for (var j = 0; j < message.entries.length; ++j)
                    object.entries[j] = $root.CCloudGaming_TimeRemaining.toObject(message.entries[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CCloudGaming_GetTimeRemaining_Response to JSON.
         * @function toJSON
         * @memberof CCloudGaming_GetTimeRemaining_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloudGaming_GetTimeRemaining_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloudGaming_GetTimeRemaining_Response;
    })();
    
    $root.Authentication = (function() {
    
        /**
         * Constructs a new Authentication service.
         * @exports Authentication
         * @classdesc Represents an Authentication
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Authentication(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Authentication.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Authentication;
    
        /**
         * Creates new Authentication service using the specified rpc implementation.
         * @function create
         * @memberof Authentication
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Authentication} RPC service. Useful where requests and/or responses are streamed.
         */
        Authentication.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Authentication#getPasswordRSAPublicKey}.
         * @memberof Authentication
         * @typedef GetPasswordRSAPublicKeyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAuthentication_GetPasswordRSAPublicKey_Response} [response] CAuthentication_GetPasswordRSAPublicKey_Response
         */
    
        /**
         * Calls GetPasswordRSAPublicKey.
         * @function getPasswordRSAPublicKey
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Request} request CAuthentication_GetPasswordRSAPublicKey_Request message or plain object
         * @param {Authentication.GetPasswordRSAPublicKeyCallback} callback Node-style callback called with the error, if any, and CAuthentication_GetPasswordRSAPublicKey_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Authentication.prototype.getPasswordRSAPublicKey = function getPasswordRSAPublicKey(request, callback) {
            return this.rpcCall(getPasswordRSAPublicKey, $root.CAuthentication_GetPasswordRSAPublicKey_Request, $root.CAuthentication_GetPasswordRSAPublicKey_Response, request, callback);
        }, "name", { value: "GetPasswordRSAPublicKey" });
    
        /**
         * Calls GetPasswordRSAPublicKey.
         * @function getPasswordRSAPublicKey
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_GetPasswordRSAPublicKey_Request} request CAuthentication_GetPasswordRSAPublicKey_Request message or plain object
         * @returns {Promise<CAuthentication_GetPasswordRSAPublicKey_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Authentication#beginAuthSessionViaQR}.
         * @memberof Authentication
         * @typedef BeginAuthSessionViaQRCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAuthentication_BeginAuthSessionViaQR_Response} [response] CAuthentication_BeginAuthSessionViaQR_Response
         */
    
        /**
         * Calls BeginAuthSessionViaQR.
         * @function beginAuthSessionViaQR
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_BeginAuthSessionViaQR_Request} request CAuthentication_BeginAuthSessionViaQR_Request message or plain object
         * @param {Authentication.BeginAuthSessionViaQRCallback} callback Node-style callback called with the error, if any, and CAuthentication_BeginAuthSessionViaQR_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Authentication.prototype.beginAuthSessionViaQR = function beginAuthSessionViaQR(request, callback) {
            return this.rpcCall(beginAuthSessionViaQR, $root.CAuthentication_BeginAuthSessionViaQR_Request, $root.CAuthentication_BeginAuthSessionViaQR_Response, request, callback);
        }, "name", { value: "BeginAuthSessionViaQR" });
    
        /**
         * Calls BeginAuthSessionViaQR.
         * @function beginAuthSessionViaQR
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_BeginAuthSessionViaQR_Request} request CAuthentication_BeginAuthSessionViaQR_Request message or plain object
         * @returns {Promise<CAuthentication_BeginAuthSessionViaQR_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Authentication#beginAuthSessionViaCredentials}.
         * @memberof Authentication
         * @typedef BeginAuthSessionViaCredentialsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAuthentication_BeginAuthSessionViaCredentials_Response} [response] CAuthentication_BeginAuthSessionViaCredentials_Response
         */
    
        /**
         * Calls BeginAuthSessionViaCredentials.
         * @function beginAuthSessionViaCredentials
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Request} request CAuthentication_BeginAuthSessionViaCredentials_Request message or plain object
         * @param {Authentication.BeginAuthSessionViaCredentialsCallback} callback Node-style callback called with the error, if any, and CAuthentication_BeginAuthSessionViaCredentials_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Authentication.prototype.beginAuthSessionViaCredentials = function beginAuthSessionViaCredentials(request, callback) {
            return this.rpcCall(beginAuthSessionViaCredentials, $root.CAuthentication_BeginAuthSessionViaCredentials_Request, $root.CAuthentication_BeginAuthSessionViaCredentials_Response, request, callback);
        }, "name", { value: "BeginAuthSessionViaCredentials" });
    
        /**
         * Calls BeginAuthSessionViaCredentials.
         * @function beginAuthSessionViaCredentials
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_BeginAuthSessionViaCredentials_Request} request CAuthentication_BeginAuthSessionViaCredentials_Request message or plain object
         * @returns {Promise<CAuthentication_BeginAuthSessionViaCredentials_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Authentication#pollAuthSessionStatus}.
         * @memberof Authentication
         * @typedef PollAuthSessionStatusCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAuthentication_PollAuthSessionStatus_Response} [response] CAuthentication_PollAuthSessionStatus_Response
         */
    
        /**
         * Calls PollAuthSessionStatus.
         * @function pollAuthSessionStatus
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_PollAuthSessionStatus_Request} request CAuthentication_PollAuthSessionStatus_Request message or plain object
         * @param {Authentication.PollAuthSessionStatusCallback} callback Node-style callback called with the error, if any, and CAuthentication_PollAuthSessionStatus_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Authentication.prototype.pollAuthSessionStatus = function pollAuthSessionStatus(request, callback) {
            return this.rpcCall(pollAuthSessionStatus, $root.CAuthentication_PollAuthSessionStatus_Request, $root.CAuthentication_PollAuthSessionStatus_Response, request, callback);
        }, "name", { value: "PollAuthSessionStatus" });
    
        /**
         * Calls PollAuthSessionStatus.
         * @function pollAuthSessionStatus
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_PollAuthSessionStatus_Request} request CAuthentication_PollAuthSessionStatus_Request message or plain object
         * @returns {Promise<CAuthentication_PollAuthSessionStatus_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Authentication#getAuthSessionInfo}.
         * @memberof Authentication
         * @typedef GetAuthSessionInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAuthentication_GetAuthSessionInfo_Response} [response] CAuthentication_GetAuthSessionInfo_Response
         */
    
        /**
         * Calls GetAuthSessionInfo.
         * @function getAuthSessionInfo
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_GetAuthSessionInfo_Request} request CAuthentication_GetAuthSessionInfo_Request message or plain object
         * @param {Authentication.GetAuthSessionInfoCallback} callback Node-style callback called with the error, if any, and CAuthentication_GetAuthSessionInfo_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Authentication.prototype.getAuthSessionInfo = function getAuthSessionInfo(request, callback) {
            return this.rpcCall(getAuthSessionInfo, $root.CAuthentication_GetAuthSessionInfo_Request, $root.CAuthentication_GetAuthSessionInfo_Response, request, callback);
        }, "name", { value: "GetAuthSessionInfo" });
    
        /**
         * Calls GetAuthSessionInfo.
         * @function getAuthSessionInfo
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_GetAuthSessionInfo_Request} request CAuthentication_GetAuthSessionInfo_Request message or plain object
         * @returns {Promise<CAuthentication_GetAuthSessionInfo_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Authentication#updateAuthSessionWithMobileConfirmation}.
         * @memberof Authentication
         * @typedef UpdateAuthSessionWithMobileConfirmationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response} [response] CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         */
    
        /**
         * Calls UpdateAuthSessionWithMobileConfirmation.
         * @function updateAuthSessionWithMobileConfirmation
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} request CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message or plain object
         * @param {Authentication.UpdateAuthSessionWithMobileConfirmationCallback} callback Node-style callback called with the error, if any, and CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Authentication.prototype.updateAuthSessionWithMobileConfirmation = function updateAuthSessionWithMobileConfirmation(request, callback) {
            return this.rpcCall(updateAuthSessionWithMobileConfirmation, $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request, $root.CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response, request, callback);
        }, "name", { value: "UpdateAuthSessionWithMobileConfirmation" });
    
        /**
         * Calls UpdateAuthSessionWithMobileConfirmation.
         * @function updateAuthSessionWithMobileConfirmation
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request} request CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message or plain object
         * @returns {Promise<CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Authentication#updateAuthSessionWithSteamGuardCode}.
         * @memberof Authentication
         * @typedef UpdateAuthSessionWithSteamGuardCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response} [response] CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         */
    
        /**
         * Calls UpdateAuthSessionWithSteamGuardCode.
         * @function updateAuthSessionWithSteamGuardCode
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} request CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message or plain object
         * @param {Authentication.UpdateAuthSessionWithSteamGuardCodeCallback} callback Node-style callback called with the error, if any, and CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Authentication.prototype.updateAuthSessionWithSteamGuardCode = function updateAuthSessionWithSteamGuardCode(request, callback) {
            return this.rpcCall(updateAuthSessionWithSteamGuardCode, $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request, $root.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response, request, callback);
        }, "name", { value: "UpdateAuthSessionWithSteamGuardCode" });
    
        /**
         * Calls UpdateAuthSessionWithSteamGuardCode.
         * @function updateAuthSessionWithSteamGuardCode
         * @memberof Authentication
         * @instance
         * @param {ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request} request CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message or plain object
         * @returns {Promise<CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response>} Promise
         * @variation 2
         */
    
        return Authentication;
    })();
    
    $root.CloudGaming = (function() {
    
        /**
         * Constructs a new CloudGaming service.
         * @exports CloudGaming
         * @classdesc Represents a CloudGaming
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CloudGaming(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (CloudGaming.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CloudGaming;
    
        /**
         * Creates new CloudGaming service using the specified rpc implementation.
         * @function create
         * @memberof CloudGaming
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CloudGaming} RPC service. Useful where requests and/or responses are streamed.
         */
        CloudGaming.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link CloudGaming#createNonce}.
         * @memberof CloudGaming
         * @typedef CreateNonceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloudGaming_CreateNonce_Response} [response] CCloudGaming_CreateNonce_Response
         */
    
        /**
         * Calls CreateNonce.
         * @function createNonce
         * @memberof CloudGaming
         * @instance
         * @param {ICCloudGaming_CreateNonce_Request} request CCloudGaming_CreateNonce_Request message or plain object
         * @param {CloudGaming.CreateNonceCallback} callback Node-style callback called with the error, if any, and CCloudGaming_CreateNonce_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CloudGaming.prototype.createNonce = function createNonce(request, callback) {
            return this.rpcCall(createNonce, $root.CCloudGaming_CreateNonce_Request, $root.CCloudGaming_CreateNonce_Response, request, callback);
        }, "name", { value: "CreateNonce" });
    
        /**
         * Calls CreateNonce.
         * @function createNonce
         * @memberof CloudGaming
         * @instance
         * @param {ICCloudGaming_CreateNonce_Request} request CCloudGaming_CreateNonce_Request message or plain object
         * @returns {Promise<CCloudGaming_CreateNonce_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link CloudGaming#getTimeRemaining}.
         * @memberof CloudGaming
         * @typedef GetTimeRemainingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloudGaming_GetTimeRemaining_Response} [response] CCloudGaming_GetTimeRemaining_Response
         */
    
        /**
         * Calls GetTimeRemaining.
         * @function getTimeRemaining
         * @memberof CloudGaming
         * @instance
         * @param {ICCloudGaming_GetTimeRemaining_Request} request CCloudGaming_GetTimeRemaining_Request message or plain object
         * @param {CloudGaming.GetTimeRemainingCallback} callback Node-style callback called with the error, if any, and CCloudGaming_GetTimeRemaining_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CloudGaming.prototype.getTimeRemaining = function getTimeRemaining(request, callback) {
            return this.rpcCall(getTimeRemaining, $root.CCloudGaming_GetTimeRemaining_Request, $root.CCloudGaming_GetTimeRemaining_Response, request, callback);
        }, "name", { value: "GetTimeRemaining" });
    
        /**
         * Calls GetTimeRemaining.
         * @function getTimeRemaining
         * @memberof CloudGaming
         * @instance
         * @param {ICCloudGaming_GetTimeRemaining_Request} request CCloudGaming_GetTimeRemaining_Request message or plain object
         * @returns {Promise<CCloudGaming_GetTimeRemaining_Response>} Promise
         * @variation 2
         */
    
        return CloudGaming;
    })();
    
    /**
     * EProtoExecutionSite enum.
     * @exports EProtoExecutionSite
     * @enum {string}
     * @property {number} k_EProtoExecutionSiteUnknown=0 k_EProtoExecutionSiteUnknown value
     * @property {number} k_EProtoExecutionSiteSteamClient=2 k_EProtoExecutionSiteSteamClient value
     */
    $root.EProtoExecutionSite = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EProtoExecutionSiteUnknown"] = 0;
        values[valuesById[2] = "k_EProtoExecutionSiteSteamClient"] = 2;
        return values;
    })();
    
    $root.NoResponse = (function() {
    
        /**
         * Properties of a NoResponse.
         * @exports INoResponse
         * @interface INoResponse
         */
    
        /**
         * Constructs a new NoResponse.
         * @exports NoResponse
         * @classdesc Represents a NoResponse.
         * @implements INoResponse
         * @constructor
         * @param {INoResponse=} [properties] Properties to set
         */
        function NoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new NoResponse instance using the specified properties.
         * @function create
         * @memberof NoResponse
         * @static
         * @param {INoResponse=} [properties] Properties to set
         * @returns {NoResponse} NoResponse instance
         */
        NoResponse.create = function create(properties) {
            return new NoResponse(properties);
        };
    
        /**
         * Encodes the specified NoResponse message. Does not implicitly {@link NoResponse.verify|verify} messages.
         * @function encode
         * @memberof NoResponse
         * @static
         * @param {INoResponse} message NoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified NoResponse message, length delimited. Does not implicitly {@link NoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NoResponse
         * @static
         * @param {INoResponse} message NoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof NoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NoResponse} NoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NoResponse();
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
         * Decodes a NoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NoResponse} NoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NoResponse message.
         * @function verify
         * @memberof NoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a NoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NoResponse} NoResponse
         */
        NoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.NoResponse)
                return object;
            return new $root.NoResponse();
        };
    
        /**
         * Creates a plain object from a NoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NoResponse
         * @static
         * @param {NoResponse} message NoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoResponse.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this NoResponse to JSON.
         * @function toJSON
         * @memberof NoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NoResponse;
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
                 * @property {string|null} [syntax] FileDescriptorProto syntax
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
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
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
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
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
                        case 12:
                            message.syntax = reader.string();
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
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
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
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
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
                        object.syntax = "";
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
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
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
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reserved_range] DescriptorProto reserved_range
                 * @property {Array.<string>|null} [reserved_name] DescriptorProto reserved_name
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
                    this.reserved_range = [];
                    this.reserved_name = [];
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
                 * DescriptorProto reserved_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reserved_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reserved_range = $util.emptyArray;
    
                /**
                 * DescriptorProto reserved_name.
                 * @member {Array.<string>} reserved_name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reserved_name = $util.emptyArray;
    
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
                    if (message.reserved_range != null && message.reserved_range.length)
                        for (var i = 0; i < message.reserved_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reserved_name != null && message.reserved_name.length)
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
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
                        case 9:
                            if (!(message.reserved_range && message.reserved_range.length))
                                message.reserved_range = [];
                            message.reserved_range.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reserved_name && message.reserved_name.length))
                                message.reserved_name = [];
                            message.reserved_name.push(reader.string());
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
                    if (message.reserved_range != null && message.hasOwnProperty("reserved_range")) {
                        if (!Array.isArray(message.reserved_range))
                            return "reserved_range: array expected";
                        for (var i = 0; i < message.reserved_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reserved_range[i]);
                            if (error)
                                return "reserved_range." + error;
                        }
                    }
                    if (message.reserved_name != null && message.hasOwnProperty("reserved_name")) {
                        if (!Array.isArray(message.reserved_name))
                            return "reserved_name: array expected";
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            if (!$util.isString(message.reserved_name[i]))
                                return "reserved_name: string[] expected";
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
                    if (object.reserved_range) {
                        if (!Array.isArray(object.reserved_range))
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_range: array expected");
                        message.reserved_range = [];
                        for (var i = 0; i < object.reserved_range.length; ++i) {
                            if (typeof object.reserved_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reserved_range: object expected");
                            message.reserved_range[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reserved_range[i]);
                        }
                    }
                    if (object.reserved_name) {
                        if (!Array.isArray(object.reserved_name))
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_name: array expected");
                        message.reserved_name = [];
                        for (var i = 0; i < object.reserved_name.length; ++i)
                            message.reserved_name[i] = String(object.reserved_name[i]);
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
                        object.reserved_range = [];
                        object.reserved_name = [];
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
                    if (message.reserved_range && message.reserved_range.length) {
                        object.reserved_range = [];
                        for (var j = 0; j < message.reserved_range.length; ++j)
                            object.reserved_range[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reserved_range[j], options);
                    }
                    if (message.reserved_name && message.reserved_name.length) {
                        object.reserved_name = [];
                        for (var j = 0; j < message.reserved_name.length; ++j)
                            object.reserved_name[j] = message.reserved_name[j];
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
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
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
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
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
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
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
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReservedRange;
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
                 * @property {string|null} [json_name] FieldDescriptorProto json_name
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
                 * FieldDescriptorProto json_name.
                 * @member {string} json_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.json_name = "";
    
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
                    if (message.json_name != null && message.hasOwnProperty("json_name"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
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
                        case 10:
                            message.json_name = reader.string();
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
                    if (message.json_name != null && message.hasOwnProperty("json_name"))
                        if (!$util.isString(message.json_name))
                            return "json_name: string expected";
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
                    if (object.json_name != null)
                        message.json_name = String(object.json_name);
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
                        object.json_name = "";
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
                    if (message.json_name != null && message.hasOwnProperty("json_name"))
                        object.json_name = message.json_name;
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
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
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
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
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
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        case 2:
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
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
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
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
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
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
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
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
                 * @property {boolean|null} [client_streaming] MethodDescriptorProto client_streaming
                 * @property {boolean|null} [server_streaming] MethodDescriptorProto server_streaming
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
                 * MethodDescriptorProto client_streaming.
                 * @member {boolean} client_streaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.client_streaming = false;
    
                /**
                 * MethodDescriptorProto server_streaming.
                 * @member {boolean} server_streaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.server_streaming = false;
    
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
                    if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                    if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
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
                        case 5:
                            message.client_streaming = reader.bool();
                            break;
                        case 6:
                            message.server_streaming = reader.bool();
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
                    if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                        if (typeof message.client_streaming !== "boolean")
                            return "client_streaming: boolean expected";
                    if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                        if (typeof message.server_streaming !== "boolean")
                            return "server_streaming: boolean expected";
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
                    if (object.client_streaming != null)
                        message.client_streaming = Boolean(object.client_streaming);
                    if (object.server_streaming != null)
                        message.server_streaming = Boolean(object.server_streaming);
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
                        object.client_streaming = false;
                        object.server_streaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                        object.client_streaming = message.client_streaming;
                    if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                        object.server_streaming = message.server_streaming;
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
                 * @property {boolean|null} [cc_enable_arenas] FileOptions cc_enable_arenas
                 * @property {string|null} [objc_class_prefix] FileOptions objc_class_prefix
                 * @property {string|null} [csharp_namespace] FileOptions csharp_namespace
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
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
                 * FileOptions cc_enable_arenas.
                 * @member {boolean} cc_enable_arenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_enable_arenas = false;
    
                /**
                 * FileOptions objc_class_prefix.
                 * @member {string} objc_class_prefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objc_class_prefix = "";
    
                /**
                 * FileOptions csharp_namespace.
                 * @member {string} csharp_namespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharp_namespace = "";
    
                /**
                 * FileOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpreted_option = $util.emptyArray;
    
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
                    if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                    if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                    if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
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
                        case 31:
                            message.cc_enable_arenas = reader.bool();
                            break;
                        case 36:
                            message.objc_class_prefix = reader.string();
                            break;
                        case 37:
                            message.csharp_namespace = reader.string();
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
                    if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                        if (typeof message.cc_enable_arenas !== "boolean")
                            return "cc_enable_arenas: boolean expected";
                    if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                        if (!$util.isString(message.objc_class_prefix))
                            return "objc_class_prefix: string expected";
                    if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                        if (!$util.isString(message.csharp_namespace))
                            return "csharp_namespace: string expected";
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
                    if (object.cc_enable_arenas != null)
                        message.cc_enable_arenas = Boolean(object.cc_enable_arenas);
                    if (object.objc_class_prefix != null)
                        message.objc_class_prefix = String(object.objc_class_prefix);
                    if (object.csharp_namespace != null)
                        message.csharp_namespace = String(object.csharp_namespace);
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
                        object.cc_enable_arenas = false;
                        object.objc_class_prefix = "";
                        object.csharp_namespace = "";
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
                    if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                        object.cc_enable_arenas = message.cc_enable_arenas;
                    if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                        object.objc_class_prefix = message.objc_class_prefix;
                    if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                        object.csharp_namespace = message.csharp_namespace;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
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
                 * @property {boolean|null} [map_entry] MessageOptions map_entry
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
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
                 * MessageOptions map_entry.
                 * @member {boolean} map_entry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.map_entry = false;
    
                /**
                 * MessageOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpreted_option = $util.emptyArray;
    
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
                    if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
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
                        case 7:
                            message.map_entry = reader.bool();
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
                    if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                        if (typeof message.map_entry !== "boolean")
                            return "map_entry: boolean expected";
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
                    if (object.map_entry != null)
                        message.map_entry = Boolean(object.map_entry);
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
                        object.map_entry = false;
                    }
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                        object.map_entry = message.map_entry;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
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
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
                 * @property {string|null} [".description"] FieldOptions .description
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
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
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
                 * FieldOptions .description.
                 * @member {string} .description
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".description"] = "";
    
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
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".description"]);
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
                        case 6:
                            message.jstype = reader.int32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                                message.uninterpreted_option = [];
                            message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 50000:
                            message[".description"] = reader.string();
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
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
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
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        if (!$util.isString(message[".description"]))
                            return ".description: string expected";
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
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
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
                    if (object[".description"] != null)
                        message[".description"] = String(object[".description"]);
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
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                        object[".description"] = "";
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".description"] != null && message.hasOwnProperty(".description"))
                        object[".description"] = message[".description"];
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
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {string}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] OneofOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
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
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
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
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allow_alias] EnumOptions allow_alias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
                 * @property {string|null} [".enum_description"] EnumOptions .enum_description
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
                 * EnumOptions .enum_description.
                 * @member {string} .enum_description
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype[".enum_description"] = "";
    
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
                    if (message[".enum_description"] != null && message.hasOwnProperty(".enum_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".enum_description"]);
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
                        case 50000:
                            message[".enum_description"] = reader.string();
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
                    if (message[".enum_description"] != null && message.hasOwnProperty(".enum_description"))
                        if (!$util.isString(message[".enum_description"]))
                            return ".enum_description: string expected";
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
                    if (object[".enum_description"] != null)
                        message[".enum_description"] = String(object[".enum_description"]);
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
                        object[".enum_description"] = "";
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
                    if (message[".enum_description"] != null && message.hasOwnProperty(".enum_description"))
                        object[".enum_description"] = message[".enum_description"];
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
                 * @property {string|null} [".enum_value_description"] EnumValueOptions .enum_value_description
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
                 * EnumValueOptions .enum_value_description.
                 * @member {string} .enum_value_description
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype[".enum_value_description"] = "";
    
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
                    if (message[".enum_value_description"] != null && message.hasOwnProperty(".enum_value_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".enum_value_description"]);
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
                        case 50000:
                            message[".enum_value_description"] = reader.string();
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
                    if (message[".enum_value_description"] != null && message.hasOwnProperty(".enum_value_description"))
                        if (!$util.isString(message[".enum_value_description"]))
                            return ".enum_value_description: string expected";
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
                    if (object[".enum_value_description"] != null)
                        message[".enum_value_description"] = String(object[".enum_value_description"]);
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
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".enum_value_description"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".enum_value_description"] != null && message.hasOwnProperty(".enum_value_description"))
                        object[".enum_value_description"] = message[".enum_value_description"];
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
                 * @property {string|null} [".service_description"] ServiceOptions .service_description
                 * @property {EProtoExecutionSite|null} [".service_execution_site"] ServiceOptions .service_execution_site
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
                 * ServiceOptions .service_description.
                 * @member {string} .service_description
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".service_description"] = "";
    
                /**
                 * ServiceOptions .service_execution_site.
                 * @member {EProtoExecutionSite} .service_execution_site
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".service_execution_site"] = 0;
    
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
                    if (message[".service_description"] != null && message.hasOwnProperty(".service_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".service_description"]);
                    if (message[".service_execution_site"] != null && message.hasOwnProperty(".service_execution_site"))
                        writer.uint32(/* id 50008, wireType 0 =*/400064).int32(message[".service_execution_site"]);
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
                        case 50000:
                            message[".service_description"] = reader.string();
                            break;
                        case 50008:
                            message[".service_execution_site"] = reader.int32();
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
                    if (message[".service_description"] != null && message.hasOwnProperty(".service_description"))
                        if (!$util.isString(message[".service_description"]))
                            return ".service_description: string expected";
                    if (message[".service_execution_site"] != null && message.hasOwnProperty(".service_execution_site"))
                        switch (message[".service_execution_site"]) {
                        default:
                            return ".service_execution_site: enum value expected";
                        case 0:
                        case 2:
                            break;
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
                    if (object[".service_description"] != null)
                        message[".service_description"] = String(object[".service_description"]);
                    switch (object[".service_execution_site"]) {
                    case "k_EProtoExecutionSiteUnknown":
                    case 0:
                        message[".service_execution_site"] = 0;
                        break;
                    case "k_EProtoExecutionSiteSteamClient":
                    case 2:
                        message[".service_execution_site"] = 2;
                        break;
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
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".service_description"] = "";
                        object[".service_execution_site"] = options.enums === String ? "k_EProtoExecutionSiteUnknown" : 0;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".service_description"] != null && message.hasOwnProperty(".service_description"))
                        object[".service_description"] = message[".service_description"];
                    if (message[".service_execution_site"] != null && message.hasOwnProperty(".service_execution_site"))
                        object[".service_execution_site"] = options.enums === String ? $root.EProtoExecutionSite[message[".service_execution_site"]] : message[".service_execution_site"];
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
                 * @property {string|null} [".method_description"] MethodOptions .method_description
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
                 * MethodOptions .method_description.
                 * @member {string} .method_description
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".method_description"] = "";
    
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
                    if (message[".method_description"] != null && message.hasOwnProperty(".method_description"))
                        writer.uint32(/* id 50000, wireType 2 =*/400002).string(message[".method_description"]);
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
                        case 50000:
                            message[".method_description"] = reader.string();
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
                    if (message[".method_description"] != null && message.hasOwnProperty(".method_description"))
                        if (!$util.isString(message[".method_description"]))
                            return ".method_description: string expected";
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
                    if (object[".method_description"] != null)
                        message[".method_description"] = String(object[".method_description"]);
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
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".method_description"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    if (message[".method_description"] != null && message.hasOwnProperty(".method_description"))
                        object[".method_description"] = message[".method_description"];
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
                     * @property {Array.<string>|null} [leading_detached_comments] Location leading_detached_comments
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
                        this.leading_detached_comments = [];
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
                     * Location leading_detached_comments.
                     * @member {Array.<string>} leading_detached_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leading_detached_comments = $util.emptyArray;
    
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
                        if (message.leading_detached_comments != null && message.leading_detached_comments.length)
                            for (var i = 0; i < message.leading_detached_comments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
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
                            case 6:
                                if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                    message.leading_detached_comments = [];
                                message.leading_detached_comments.push(reader.string());
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
                        if (message.leading_detached_comments != null && message.hasOwnProperty("leading_detached_comments")) {
                            if (!Array.isArray(message.leading_detached_comments))
                                return "leading_detached_comments: array expected";
                            for (var i = 0; i < message.leading_detached_comments.length; ++i)
                                if (!$util.isString(message.leading_detached_comments[i]))
                                    return "leading_detached_comments: string[] expected";
                        }
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
                        if (object.leading_detached_comments) {
                            if (!Array.isArray(object.leading_detached_comments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leading_detached_comments: array expected");
                            message.leading_detached_comments = [];
                            for (var i = 0; i < object.leading_detached_comments.length; ++i)
                                message.leading_detached_comments[i] = String(object.leading_detached_comments[i]);
                        }
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
                            object.leading_detached_comments = [];
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
                        if (message.leading_detached_comments && message.leading_detached_comments.length) {
                            object.leading_detached_comments = [];
                            for (var j = 0; j < message.leading_detached_comments.length; ++j)
                                object.leading_detached_comments[j] = message.leading_detached_comments[j];
                        }
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
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [source_file] Annotation source_file
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation source_file.
                     * @member {string} source_file
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.source_file = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.source_file != null && message.hasOwnProperty("source_file"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
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
                                message.source_file = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
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
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.source_file != null && message.hasOwnProperty("source_file"))
                            if (!$util.isString(message.source_file))
                                return "source_file: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.source_file != null)
                            message.source_file = String(object.source_file);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.source_file = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.source_file != null && message.hasOwnProperty("source_file"))
                            object.source_file = message.source_file;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
