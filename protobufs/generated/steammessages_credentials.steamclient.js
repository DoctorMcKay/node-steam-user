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
    
    $root.CCredentials_TestAvailablePassword_Request = (function() {
    
        /**
         * Properties of a CCredentials_TestAvailablePassword_Request.
         * @exports ICCredentials_TestAvailablePassword_Request
         * @interface ICCredentials_TestAvailablePassword_Request
         * @property {string|null} [password] CCredentials_TestAvailablePassword_Request password
         * @property {Uint8Array|null} [sha_digest_password] CCredentials_TestAvailablePassword_Request sha_digest_password
         * @property {string|null} [account_name] CCredentials_TestAvailablePassword_Request account_name
         */
    
        /**
         * Constructs a new CCredentials_TestAvailablePassword_Request.
         * @exports CCredentials_TestAvailablePassword_Request
         * @classdesc Represents a CCredentials_TestAvailablePassword_Request.
         * @implements ICCredentials_TestAvailablePassword_Request
         * @constructor
         * @param {ICCredentials_TestAvailablePassword_Request=} [properties] Properties to set
         */
        function CCredentials_TestAvailablePassword_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_TestAvailablePassword_Request password.
         * @member {string} password
         * @memberof CCredentials_TestAvailablePassword_Request
         * @instance
         */
        CCredentials_TestAvailablePassword_Request.prototype.password = "";
    
        /**
         * CCredentials_TestAvailablePassword_Request sha_digest_password.
         * @member {Uint8Array} sha_digest_password
         * @memberof CCredentials_TestAvailablePassword_Request
         * @instance
         */
        CCredentials_TestAvailablePassword_Request.prototype.sha_digest_password = $util.newBuffer([]);
    
        /**
         * CCredentials_TestAvailablePassword_Request account_name.
         * @member {string} account_name
         * @memberof CCredentials_TestAvailablePassword_Request
         * @instance
         */
        CCredentials_TestAvailablePassword_Request.prototype.account_name = "";
    
        /**
         * Creates a new CCredentials_TestAvailablePassword_Request instance using the specified properties.
         * @function create
         * @memberof CCredentials_TestAvailablePassword_Request
         * @static
         * @param {ICCredentials_TestAvailablePassword_Request=} [properties] Properties to set
         * @returns {CCredentials_TestAvailablePassword_Request} CCredentials_TestAvailablePassword_Request instance
         */
        CCredentials_TestAvailablePassword_Request.create = function create(properties) {
            return new CCredentials_TestAvailablePassword_Request(properties);
        };
    
        /**
         * Encodes the specified CCredentials_TestAvailablePassword_Request message. Does not implicitly {@link CCredentials_TestAvailablePassword_Request.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_TestAvailablePassword_Request
         * @static
         * @param {ICCredentials_TestAvailablePassword_Request} message CCredentials_TestAvailablePassword_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_TestAvailablePassword_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.password);
            if (message.sha_digest_password != null && message.hasOwnProperty("sha_digest_password"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.sha_digest_password);
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.account_name);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_TestAvailablePassword_Request message, length delimited. Does not implicitly {@link CCredentials_TestAvailablePassword_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_TestAvailablePassword_Request
         * @static
         * @param {ICCredentials_TestAvailablePassword_Request} message CCredentials_TestAvailablePassword_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_TestAvailablePassword_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_TestAvailablePassword_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_TestAvailablePassword_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_TestAvailablePassword_Request} CCredentials_TestAvailablePassword_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_TestAvailablePassword_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_TestAvailablePassword_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                case 2:
                    message.sha_digest_password = reader.bytes();
                    break;
                case 3:
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
         * Decodes a CCredentials_TestAvailablePassword_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_TestAvailablePassword_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_TestAvailablePassword_Request} CCredentials_TestAvailablePassword_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_TestAvailablePassword_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_TestAvailablePassword_Request message.
         * @function verify
         * @memberof CCredentials_TestAvailablePassword_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_TestAvailablePassword_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.sha_digest_password != null && message.hasOwnProperty("sha_digest_password"))
                if (!(message.sha_digest_password && typeof message.sha_digest_password.length === "number" || $util.isString(message.sha_digest_password)))
                    return "sha_digest_password: buffer expected";
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                if (!$util.isString(message.account_name))
                    return "account_name: string expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_TestAvailablePassword_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_TestAvailablePassword_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_TestAvailablePassword_Request} CCredentials_TestAvailablePassword_Request
         */
        CCredentials_TestAvailablePassword_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_TestAvailablePassword_Request)
                return object;
            var message = new $root.CCredentials_TestAvailablePassword_Request();
            if (object.password != null)
                message.password = String(object.password);
            if (object.sha_digest_password != null)
                if (typeof object.sha_digest_password === "string")
                    $util.base64.decode(object.sha_digest_password, message.sha_digest_password = $util.newBuffer($util.base64.length(object.sha_digest_password)), 0);
                else if (object.sha_digest_password.length)
                    message.sha_digest_password = object.sha_digest_password;
            if (object.account_name != null)
                message.account_name = String(object.account_name);
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_TestAvailablePassword_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_TestAvailablePassword_Request
         * @static
         * @param {CCredentials_TestAvailablePassword_Request} message CCredentials_TestAvailablePassword_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_TestAvailablePassword_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.password = "";
                if (options.bytes === String)
                    object.sha_digest_password = "";
                else {
                    object.sha_digest_password = [];
                    if (options.bytes !== Array)
                        object.sha_digest_password = $util.newBuffer(object.sha_digest_password);
                }
                object.account_name = "";
            }
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.sha_digest_password != null && message.hasOwnProperty("sha_digest_password"))
                object.sha_digest_password = options.bytes === String ? $util.base64.encode(message.sha_digest_password, 0, message.sha_digest_password.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha_digest_password) : message.sha_digest_password;
            if (message.account_name != null && message.hasOwnProperty("account_name"))
                object.account_name = message.account_name;
            return object;
        };
    
        /**
         * Converts this CCredentials_TestAvailablePassword_Request to JSON.
         * @function toJSON
         * @memberof CCredentials_TestAvailablePassword_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_TestAvailablePassword_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_TestAvailablePassword_Request;
    })();
    
    $root.CCredentials_TestAvailablePassword_Response = (function() {
    
        /**
         * Properties of a CCredentials_TestAvailablePassword_Response.
         * @exports ICCredentials_TestAvailablePassword_Response
         * @interface ICCredentials_TestAvailablePassword_Response
         * @property {boolean|null} [is_valid] CCredentials_TestAvailablePassword_Response is_valid
         */
    
        /**
         * Constructs a new CCredentials_TestAvailablePassword_Response.
         * @exports CCredentials_TestAvailablePassword_Response
         * @classdesc Represents a CCredentials_TestAvailablePassword_Response.
         * @implements ICCredentials_TestAvailablePassword_Response
         * @constructor
         * @param {ICCredentials_TestAvailablePassword_Response=} [properties] Properties to set
         */
        function CCredentials_TestAvailablePassword_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_TestAvailablePassword_Response is_valid.
         * @member {boolean} is_valid
         * @memberof CCredentials_TestAvailablePassword_Response
         * @instance
         */
        CCredentials_TestAvailablePassword_Response.prototype.is_valid = false;
    
        /**
         * Creates a new CCredentials_TestAvailablePassword_Response instance using the specified properties.
         * @function create
         * @memberof CCredentials_TestAvailablePassword_Response
         * @static
         * @param {ICCredentials_TestAvailablePassword_Response=} [properties] Properties to set
         * @returns {CCredentials_TestAvailablePassword_Response} CCredentials_TestAvailablePassword_Response instance
         */
        CCredentials_TestAvailablePassword_Response.create = function create(properties) {
            return new CCredentials_TestAvailablePassword_Response(properties);
        };
    
        /**
         * Encodes the specified CCredentials_TestAvailablePassword_Response message. Does not implicitly {@link CCredentials_TestAvailablePassword_Response.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_TestAvailablePassword_Response
         * @static
         * @param {ICCredentials_TestAvailablePassword_Response} message CCredentials_TestAvailablePassword_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_TestAvailablePassword_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.is_valid != null && message.hasOwnProperty("is_valid"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_valid);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_TestAvailablePassword_Response message, length delimited. Does not implicitly {@link CCredentials_TestAvailablePassword_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_TestAvailablePassword_Response
         * @static
         * @param {ICCredentials_TestAvailablePassword_Response} message CCredentials_TestAvailablePassword_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_TestAvailablePassword_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_TestAvailablePassword_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_TestAvailablePassword_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_TestAvailablePassword_Response} CCredentials_TestAvailablePassword_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_TestAvailablePassword_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_TestAvailablePassword_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    message.is_valid = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_TestAvailablePassword_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_TestAvailablePassword_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_TestAvailablePassword_Response} CCredentials_TestAvailablePassword_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_TestAvailablePassword_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_TestAvailablePassword_Response message.
         * @function verify
         * @memberof CCredentials_TestAvailablePassword_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_TestAvailablePassword_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.is_valid != null && message.hasOwnProperty("is_valid"))
                if (typeof message.is_valid !== "boolean")
                    return "is_valid: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_TestAvailablePassword_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_TestAvailablePassword_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_TestAvailablePassword_Response} CCredentials_TestAvailablePassword_Response
         */
        CCredentials_TestAvailablePassword_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_TestAvailablePassword_Response)
                return object;
            var message = new $root.CCredentials_TestAvailablePassword_Response();
            if (object.is_valid != null)
                message.is_valid = Boolean(object.is_valid);
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_TestAvailablePassword_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_TestAvailablePassword_Response
         * @static
         * @param {CCredentials_TestAvailablePassword_Response} message CCredentials_TestAvailablePassword_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_TestAvailablePassword_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.is_valid = false;
            if (message.is_valid != null && message.hasOwnProperty("is_valid"))
                object.is_valid = message.is_valid;
            return object;
        };
    
        /**
         * Converts this CCredentials_TestAvailablePassword_Response to JSON.
         * @function toJSON
         * @memberof CCredentials_TestAvailablePassword_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_TestAvailablePassword_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_TestAvailablePassword_Response;
    })();
    
    $root.CCredentials_GetSteamGuardDetails_Request = (function() {
    
        /**
         * Properties of a CCredentials_GetSteamGuardDetails_Request.
         * @exports ICCredentials_GetSteamGuardDetails_Request
         * @interface ICCredentials_GetSteamGuardDetails_Request
         * @property {boolean|null} [include_new_authentications] CCredentials_GetSteamGuardDetails_Request include_new_authentications
         * @property {string|null} [webcookie] CCredentials_GetSteamGuardDetails_Request webcookie
         * @property {number|null} [timestamp_minimum_wanted] CCredentials_GetSteamGuardDetails_Request timestamp_minimum_wanted
         * @property {number|null} [ipaddress] CCredentials_GetSteamGuardDetails_Request ipaddress
         */
    
        /**
         * Constructs a new CCredentials_GetSteamGuardDetails_Request.
         * @exports CCredentials_GetSteamGuardDetails_Request
         * @classdesc Represents a CCredentials_GetSteamGuardDetails_Request.
         * @implements ICCredentials_GetSteamGuardDetails_Request
         * @constructor
         * @param {ICCredentials_GetSteamGuardDetails_Request=} [properties] Properties to set
         */
        function CCredentials_GetSteamGuardDetails_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_GetSteamGuardDetails_Request include_new_authentications.
         * @member {boolean} include_new_authentications
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Request.prototype.include_new_authentications = true;
    
        /**
         * CCredentials_GetSteamGuardDetails_Request webcookie.
         * @member {string} webcookie
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Request.prototype.webcookie = "";
    
        /**
         * CCredentials_GetSteamGuardDetails_Request timestamp_minimum_wanted.
         * @member {number} timestamp_minimum_wanted
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Request.prototype.timestamp_minimum_wanted = 0;
    
        /**
         * CCredentials_GetSteamGuardDetails_Request ipaddress.
         * @member {number} ipaddress
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Request.prototype.ipaddress = 0;
    
        /**
         * Creates a new CCredentials_GetSteamGuardDetails_Request instance using the specified properties.
         * @function create
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @static
         * @param {ICCredentials_GetSteamGuardDetails_Request=} [properties] Properties to set
         * @returns {CCredentials_GetSteamGuardDetails_Request} CCredentials_GetSteamGuardDetails_Request instance
         */
        CCredentials_GetSteamGuardDetails_Request.create = function create(properties) {
            return new CCredentials_GetSteamGuardDetails_Request(properties);
        };
    
        /**
         * Encodes the specified CCredentials_GetSteamGuardDetails_Request message. Does not implicitly {@link CCredentials_GetSteamGuardDetails_Request.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @static
         * @param {ICCredentials_GetSteamGuardDetails_Request} message CCredentials_GetSteamGuardDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_GetSteamGuardDetails_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.include_new_authentications != null && message.hasOwnProperty("include_new_authentications"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.include_new_authentications);
            if (message.webcookie != null && message.hasOwnProperty("webcookie"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.webcookie);
            if (message.timestamp_minimum_wanted != null && message.hasOwnProperty("timestamp_minimum_wanted"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.timestamp_minimum_wanted);
            if (message.ipaddress != null && message.hasOwnProperty("ipaddress"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ipaddress);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_GetSteamGuardDetails_Request message, length delimited. Does not implicitly {@link CCredentials_GetSteamGuardDetails_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @static
         * @param {ICCredentials_GetSteamGuardDetails_Request} message CCredentials_GetSteamGuardDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_GetSteamGuardDetails_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_GetSteamGuardDetails_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_GetSteamGuardDetails_Request} CCredentials_GetSteamGuardDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_GetSteamGuardDetails_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_GetSteamGuardDetails_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.include_new_authentications = reader.bool();
                    break;
                case 2:
                    message.webcookie = reader.string();
                    break;
                case 3:
                    message.timestamp_minimum_wanted = reader.fixed32();
                    break;
                case 4:
                    message.ipaddress = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_GetSteamGuardDetails_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_GetSteamGuardDetails_Request} CCredentials_GetSteamGuardDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_GetSteamGuardDetails_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_GetSteamGuardDetails_Request message.
         * @function verify
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_GetSteamGuardDetails_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.include_new_authentications != null && message.hasOwnProperty("include_new_authentications"))
                if (typeof message.include_new_authentications !== "boolean")
                    return "include_new_authentications: boolean expected";
            if (message.webcookie != null && message.hasOwnProperty("webcookie"))
                if (!$util.isString(message.webcookie))
                    return "webcookie: string expected";
            if (message.timestamp_minimum_wanted != null && message.hasOwnProperty("timestamp_minimum_wanted"))
                if (!$util.isInteger(message.timestamp_minimum_wanted))
                    return "timestamp_minimum_wanted: integer expected";
            if (message.ipaddress != null && message.hasOwnProperty("ipaddress"))
                if (!$util.isInteger(message.ipaddress))
                    return "ipaddress: integer expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_GetSteamGuardDetails_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_GetSteamGuardDetails_Request} CCredentials_GetSteamGuardDetails_Request
         */
        CCredentials_GetSteamGuardDetails_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_GetSteamGuardDetails_Request)
                return object;
            var message = new $root.CCredentials_GetSteamGuardDetails_Request();
            if (object.include_new_authentications != null)
                message.include_new_authentications = Boolean(object.include_new_authentications);
            if (object.webcookie != null)
                message.webcookie = String(object.webcookie);
            if (object.timestamp_minimum_wanted != null)
                message.timestamp_minimum_wanted = object.timestamp_minimum_wanted >>> 0;
            if (object.ipaddress != null)
                message.ipaddress = object.ipaddress | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_GetSteamGuardDetails_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @static
         * @param {CCredentials_GetSteamGuardDetails_Request} message CCredentials_GetSteamGuardDetails_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_GetSteamGuardDetails_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.include_new_authentications = true;
                object.webcookie = "";
                object.timestamp_minimum_wanted = 0;
                object.ipaddress = 0;
            }
            if (message.include_new_authentications != null && message.hasOwnProperty("include_new_authentications"))
                object.include_new_authentications = message.include_new_authentications;
            if (message.webcookie != null && message.hasOwnProperty("webcookie"))
                object.webcookie = message.webcookie;
            if (message.timestamp_minimum_wanted != null && message.hasOwnProperty("timestamp_minimum_wanted"))
                object.timestamp_minimum_wanted = message.timestamp_minimum_wanted;
            if (message.ipaddress != null && message.hasOwnProperty("ipaddress"))
                object.ipaddress = message.ipaddress;
            return object;
        };
    
        /**
         * Converts this CCredentials_GetSteamGuardDetails_Request to JSON.
         * @function toJSON
         * @memberof CCredentials_GetSteamGuardDetails_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_GetSteamGuardDetails_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_GetSteamGuardDetails_Request;
    })();
    
    $root.CCredentials_GetSteamGuardDetails_Response = (function() {
    
        /**
         * Properties of a CCredentials_GetSteamGuardDetails_Response.
         * @exports ICCredentials_GetSteamGuardDetails_Response
         * @interface ICCredentials_GetSteamGuardDetails_Response
         * @property {boolean|null} [is_steamguard_enabled] CCredentials_GetSteamGuardDetails_Response is_steamguard_enabled
         * @property {number|null} [timestamp_steamguard_enabled] CCredentials_GetSteamGuardDetails_Response timestamp_steamguard_enabled
         * @property {Array.<CCredentials_GetSteamGuardDetails_Response.INewAuthentication>|null} [deprecated_newauthentication] CCredentials_GetSteamGuardDetails_Response deprecated_newauthentication
         * @property {string|null} [deprecated_machine_name_userchosen] CCredentials_GetSteamGuardDetails_Response deprecated_machine_name_userchosen
         * @property {number|null} [deprecated_timestamp_machine_steamguard_enabled] CCredentials_GetSteamGuardDetails_Response deprecated_timestamp_machine_steamguard_enabled
         * @property {boolean|null} [deprecated_authentication_exists_from_geoloc_before_mintime] CCredentials_GetSteamGuardDetails_Response deprecated_authentication_exists_from_geoloc_before_mintime
         * @property {number|Long|null} [deprecated_machine_id] CCredentials_GetSteamGuardDetails_Response deprecated_machine_id
         * @property {Array.<CCredentials_GetSteamGuardDetails_Response.ISessionData>|null} [session_data] CCredentials_GetSteamGuardDetails_Response session_data
         * @property {boolean|null} [is_twofactor_enabled] CCredentials_GetSteamGuardDetails_Response is_twofactor_enabled
         * @property {number|null} [timestamp_twofactor_enabled] CCredentials_GetSteamGuardDetails_Response timestamp_twofactor_enabled
         * @property {boolean|null} [is_phone_verified] CCredentials_GetSteamGuardDetails_Response is_phone_verified
         */
    
        /**
         * Constructs a new CCredentials_GetSteamGuardDetails_Response.
         * @exports CCredentials_GetSteamGuardDetails_Response
         * @classdesc Represents a CCredentials_GetSteamGuardDetails_Response.
         * @implements ICCredentials_GetSteamGuardDetails_Response
         * @constructor
         * @param {ICCredentials_GetSteamGuardDetails_Response=} [properties] Properties to set
         */
        function CCredentials_GetSteamGuardDetails_Response(properties) {
            this.deprecated_newauthentication = [];
            this.session_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_GetSteamGuardDetails_Response is_steamguard_enabled.
         * @member {boolean} is_steamguard_enabled
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.is_steamguard_enabled = false;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response timestamp_steamguard_enabled.
         * @member {number} timestamp_steamguard_enabled
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.timestamp_steamguard_enabled = 0;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response deprecated_newauthentication.
         * @member {Array.<CCredentials_GetSteamGuardDetails_Response.INewAuthentication>} deprecated_newauthentication
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.deprecated_newauthentication = $util.emptyArray;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response deprecated_machine_name_userchosen.
         * @member {string} deprecated_machine_name_userchosen
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.deprecated_machine_name_userchosen = "";
    
        /**
         * CCredentials_GetSteamGuardDetails_Response deprecated_timestamp_machine_steamguard_enabled.
         * @member {number} deprecated_timestamp_machine_steamguard_enabled
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.deprecated_timestamp_machine_steamguard_enabled = 0;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response deprecated_authentication_exists_from_geoloc_before_mintime.
         * @member {boolean} deprecated_authentication_exists_from_geoloc_before_mintime
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.deprecated_authentication_exists_from_geoloc_before_mintime = false;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response deprecated_machine_id.
         * @member {number|Long} deprecated_machine_id
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.deprecated_machine_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response session_data.
         * @member {Array.<CCredentials_GetSteamGuardDetails_Response.ISessionData>} session_data
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.session_data = $util.emptyArray;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response is_twofactor_enabled.
         * @member {boolean} is_twofactor_enabled
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.is_twofactor_enabled = false;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response timestamp_twofactor_enabled.
         * @member {number} timestamp_twofactor_enabled
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.timestamp_twofactor_enabled = 0;
    
        /**
         * CCredentials_GetSteamGuardDetails_Response is_phone_verified.
         * @member {boolean} is_phone_verified
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.is_phone_verified = false;
    
        /**
         * Creates a new CCredentials_GetSteamGuardDetails_Response instance using the specified properties.
         * @function create
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @static
         * @param {ICCredentials_GetSteamGuardDetails_Response=} [properties] Properties to set
         * @returns {CCredentials_GetSteamGuardDetails_Response} CCredentials_GetSteamGuardDetails_Response instance
         */
        CCredentials_GetSteamGuardDetails_Response.create = function create(properties) {
            return new CCredentials_GetSteamGuardDetails_Response(properties);
        };
    
        /**
         * Encodes the specified CCredentials_GetSteamGuardDetails_Response message. Does not implicitly {@link CCredentials_GetSteamGuardDetails_Response.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @static
         * @param {ICCredentials_GetSteamGuardDetails_Response} message CCredentials_GetSteamGuardDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_GetSteamGuardDetails_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.is_steamguard_enabled != null && message.hasOwnProperty("is_steamguard_enabled"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.is_steamguard_enabled);
            if (message.timestamp_steamguard_enabled != null && message.hasOwnProperty("timestamp_steamguard_enabled"))
                writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.timestamp_steamguard_enabled);
            if (message.deprecated_newauthentication != null && message.deprecated_newauthentication.length)
                for (var i = 0; i < message.deprecated_newauthentication.length; ++i)
                    $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.encode(message.deprecated_newauthentication[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.deprecated_machine_name_userchosen != null && message.hasOwnProperty("deprecated_machine_name_userchosen"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deprecated_machine_name_userchosen);
            if (message.deprecated_timestamp_machine_steamguard_enabled != null && message.hasOwnProperty("deprecated_timestamp_machine_steamguard_enabled"))
                writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.deprecated_timestamp_machine_steamguard_enabled);
            if (message.deprecated_authentication_exists_from_geoloc_before_mintime != null && message.hasOwnProperty("deprecated_authentication_exists_from_geoloc_before_mintime"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.deprecated_authentication_exists_from_geoloc_before_mintime);
            if (message.deprecated_machine_id != null && message.hasOwnProperty("deprecated_machine_id"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.deprecated_machine_id);
            if (message.session_data != null && message.session_data.length)
                for (var i = 0; i < message.session_data.length; ++i)
                    $root.CCredentials_GetSteamGuardDetails_Response.SessionData.encode(message.session_data[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.is_twofactor_enabled != null && message.hasOwnProperty("is_twofactor_enabled"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.is_twofactor_enabled);
            if (message.timestamp_twofactor_enabled != null && message.hasOwnProperty("timestamp_twofactor_enabled"))
                writer.uint32(/* id 10, wireType 5 =*/85).fixed32(message.timestamp_twofactor_enabled);
            if (message.is_phone_verified != null && message.hasOwnProperty("is_phone_verified"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.is_phone_verified);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_GetSteamGuardDetails_Response message, length delimited. Does not implicitly {@link CCredentials_GetSteamGuardDetails_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @static
         * @param {ICCredentials_GetSteamGuardDetails_Response} message CCredentials_GetSteamGuardDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_GetSteamGuardDetails_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_GetSteamGuardDetails_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_GetSteamGuardDetails_Response} CCredentials_GetSteamGuardDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_GetSteamGuardDetails_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_GetSteamGuardDetails_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.is_steamguard_enabled = reader.bool();
                    break;
                case 2:
                    message.timestamp_steamguard_enabled = reader.fixed32();
                    break;
                case 3:
                    if (!(message.deprecated_newauthentication && message.deprecated_newauthentication.length))
                        message.deprecated_newauthentication = [];
                    message.deprecated_newauthentication.push($root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.deprecated_machine_name_userchosen = reader.string();
                    break;
                case 5:
                    message.deprecated_timestamp_machine_steamguard_enabled = reader.fixed32();
                    break;
                case 6:
                    message.deprecated_authentication_exists_from_geoloc_before_mintime = reader.bool();
                    break;
                case 7:
                    message.deprecated_machine_id = reader.uint64();
                    break;
                case 8:
                    if (!(message.session_data && message.session_data.length))
                        message.session_data = [];
                    message.session_data.push($root.CCredentials_GetSteamGuardDetails_Response.SessionData.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.is_twofactor_enabled = reader.bool();
                    break;
                case 10:
                    message.timestamp_twofactor_enabled = reader.fixed32();
                    break;
                case 11:
                    message.is_phone_verified = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_GetSteamGuardDetails_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_GetSteamGuardDetails_Response} CCredentials_GetSteamGuardDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_GetSteamGuardDetails_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_GetSteamGuardDetails_Response message.
         * @function verify
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_GetSteamGuardDetails_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.is_steamguard_enabled != null && message.hasOwnProperty("is_steamguard_enabled"))
                if (typeof message.is_steamguard_enabled !== "boolean")
                    return "is_steamguard_enabled: boolean expected";
            if (message.timestamp_steamguard_enabled != null && message.hasOwnProperty("timestamp_steamguard_enabled"))
                if (!$util.isInteger(message.timestamp_steamguard_enabled))
                    return "timestamp_steamguard_enabled: integer expected";
            if (message.deprecated_newauthentication != null && message.hasOwnProperty("deprecated_newauthentication")) {
                if (!Array.isArray(message.deprecated_newauthentication))
                    return "deprecated_newauthentication: array expected";
                for (var i = 0; i < message.deprecated_newauthentication.length; ++i) {
                    var error = $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.verify(message.deprecated_newauthentication[i]);
                    if (error)
                        return "deprecated_newauthentication." + error;
                }
            }
            if (message.deprecated_machine_name_userchosen != null && message.hasOwnProperty("deprecated_machine_name_userchosen"))
                if (!$util.isString(message.deprecated_machine_name_userchosen))
                    return "deprecated_machine_name_userchosen: string expected";
            if (message.deprecated_timestamp_machine_steamguard_enabled != null && message.hasOwnProperty("deprecated_timestamp_machine_steamguard_enabled"))
                if (!$util.isInteger(message.deprecated_timestamp_machine_steamguard_enabled))
                    return "deprecated_timestamp_machine_steamguard_enabled: integer expected";
            if (message.deprecated_authentication_exists_from_geoloc_before_mintime != null && message.hasOwnProperty("deprecated_authentication_exists_from_geoloc_before_mintime"))
                if (typeof message.deprecated_authentication_exists_from_geoloc_before_mintime !== "boolean")
                    return "deprecated_authentication_exists_from_geoloc_before_mintime: boolean expected";
            if (message.deprecated_machine_id != null && message.hasOwnProperty("deprecated_machine_id"))
                if (!$util.isInteger(message.deprecated_machine_id) && !(message.deprecated_machine_id && $util.isInteger(message.deprecated_machine_id.low) && $util.isInteger(message.deprecated_machine_id.high)))
                    return "deprecated_machine_id: integer|Long expected";
            if (message.session_data != null && message.hasOwnProperty("session_data")) {
                if (!Array.isArray(message.session_data))
                    return "session_data: array expected";
                for (var i = 0; i < message.session_data.length; ++i) {
                    var error = $root.CCredentials_GetSteamGuardDetails_Response.SessionData.verify(message.session_data[i]);
                    if (error)
                        return "session_data." + error;
                }
            }
            if (message.is_twofactor_enabled != null && message.hasOwnProperty("is_twofactor_enabled"))
                if (typeof message.is_twofactor_enabled !== "boolean")
                    return "is_twofactor_enabled: boolean expected";
            if (message.timestamp_twofactor_enabled != null && message.hasOwnProperty("timestamp_twofactor_enabled"))
                if (!$util.isInteger(message.timestamp_twofactor_enabled))
                    return "timestamp_twofactor_enabled: integer expected";
            if (message.is_phone_verified != null && message.hasOwnProperty("is_phone_verified"))
                if (typeof message.is_phone_verified !== "boolean")
                    return "is_phone_verified: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_GetSteamGuardDetails_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_GetSteamGuardDetails_Response} CCredentials_GetSteamGuardDetails_Response
         */
        CCredentials_GetSteamGuardDetails_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_GetSteamGuardDetails_Response)
                return object;
            var message = new $root.CCredentials_GetSteamGuardDetails_Response();
            if (object.is_steamguard_enabled != null)
                message.is_steamguard_enabled = Boolean(object.is_steamguard_enabled);
            if (object.timestamp_steamguard_enabled != null)
                message.timestamp_steamguard_enabled = object.timestamp_steamguard_enabled >>> 0;
            if (object.deprecated_newauthentication) {
                if (!Array.isArray(object.deprecated_newauthentication))
                    throw TypeError(".CCredentials_GetSteamGuardDetails_Response.deprecated_newauthentication: array expected");
                message.deprecated_newauthentication = [];
                for (var i = 0; i < object.deprecated_newauthentication.length; ++i) {
                    if (typeof object.deprecated_newauthentication[i] !== "object")
                        throw TypeError(".CCredentials_GetSteamGuardDetails_Response.deprecated_newauthentication: object expected");
                    message.deprecated_newauthentication[i] = $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.fromObject(object.deprecated_newauthentication[i]);
                }
            }
            if (object.deprecated_machine_name_userchosen != null)
                message.deprecated_machine_name_userchosen = String(object.deprecated_machine_name_userchosen);
            if (object.deprecated_timestamp_machine_steamguard_enabled != null)
                message.deprecated_timestamp_machine_steamguard_enabled = object.deprecated_timestamp_machine_steamguard_enabled >>> 0;
            if (object.deprecated_authentication_exists_from_geoloc_before_mintime != null)
                message.deprecated_authentication_exists_from_geoloc_before_mintime = Boolean(object.deprecated_authentication_exists_from_geoloc_before_mintime);
            if (object.deprecated_machine_id != null)
                if ($util.Long)
                    (message.deprecated_machine_id = $util.Long.fromValue(object.deprecated_machine_id)).unsigned = true;
                else if (typeof object.deprecated_machine_id === "string")
                    message.deprecated_machine_id = parseInt(object.deprecated_machine_id, 10);
                else if (typeof object.deprecated_machine_id === "number")
                    message.deprecated_machine_id = object.deprecated_machine_id;
                else if (typeof object.deprecated_machine_id === "object")
                    message.deprecated_machine_id = new $util.LongBits(object.deprecated_machine_id.low >>> 0, object.deprecated_machine_id.high >>> 0).toNumber(true);
            if (object.session_data) {
                if (!Array.isArray(object.session_data))
                    throw TypeError(".CCredentials_GetSteamGuardDetails_Response.session_data: array expected");
                message.session_data = [];
                for (var i = 0; i < object.session_data.length; ++i) {
                    if (typeof object.session_data[i] !== "object")
                        throw TypeError(".CCredentials_GetSteamGuardDetails_Response.session_data: object expected");
                    message.session_data[i] = $root.CCredentials_GetSteamGuardDetails_Response.SessionData.fromObject(object.session_data[i]);
                }
            }
            if (object.is_twofactor_enabled != null)
                message.is_twofactor_enabled = Boolean(object.is_twofactor_enabled);
            if (object.timestamp_twofactor_enabled != null)
                message.timestamp_twofactor_enabled = object.timestamp_twofactor_enabled >>> 0;
            if (object.is_phone_verified != null)
                message.is_phone_verified = Boolean(object.is_phone_verified);
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_GetSteamGuardDetails_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @static
         * @param {CCredentials_GetSteamGuardDetails_Response} message CCredentials_GetSteamGuardDetails_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_GetSteamGuardDetails_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.deprecated_newauthentication = [];
                object.session_data = [];
            }
            if (options.defaults) {
                object.is_steamguard_enabled = false;
                object.timestamp_steamguard_enabled = 0;
                object.deprecated_machine_name_userchosen = "";
                object.deprecated_timestamp_machine_steamguard_enabled = 0;
                object.deprecated_authentication_exists_from_geoloc_before_mintime = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.deprecated_machine_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deprecated_machine_id = options.longs === String ? "0" : 0;
                object.is_twofactor_enabled = false;
                object.timestamp_twofactor_enabled = 0;
                object.is_phone_verified = false;
            }
            if (message.is_steamguard_enabled != null && message.hasOwnProperty("is_steamguard_enabled"))
                object.is_steamguard_enabled = message.is_steamguard_enabled;
            if (message.timestamp_steamguard_enabled != null && message.hasOwnProperty("timestamp_steamguard_enabled"))
                object.timestamp_steamguard_enabled = message.timestamp_steamguard_enabled;
            if (message.deprecated_newauthentication && message.deprecated_newauthentication.length) {
                object.deprecated_newauthentication = [];
                for (var j = 0; j < message.deprecated_newauthentication.length; ++j)
                    object.deprecated_newauthentication[j] = $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.toObject(message.deprecated_newauthentication[j], options);
            }
            if (message.deprecated_machine_name_userchosen != null && message.hasOwnProperty("deprecated_machine_name_userchosen"))
                object.deprecated_machine_name_userchosen = message.deprecated_machine_name_userchosen;
            if (message.deprecated_timestamp_machine_steamguard_enabled != null && message.hasOwnProperty("deprecated_timestamp_machine_steamguard_enabled"))
                object.deprecated_timestamp_machine_steamguard_enabled = message.deprecated_timestamp_machine_steamguard_enabled;
            if (message.deprecated_authentication_exists_from_geoloc_before_mintime != null && message.hasOwnProperty("deprecated_authentication_exists_from_geoloc_before_mintime"))
                object.deprecated_authentication_exists_from_geoloc_before_mintime = message.deprecated_authentication_exists_from_geoloc_before_mintime;
            if (message.deprecated_machine_id != null && message.hasOwnProperty("deprecated_machine_id"))
                if (typeof message.deprecated_machine_id === "number")
                    object.deprecated_machine_id = options.longs === String ? String(message.deprecated_machine_id) : message.deprecated_machine_id;
                else
                    object.deprecated_machine_id = options.longs === String ? $util.Long.prototype.toString.call(message.deprecated_machine_id) : options.longs === Number ? new $util.LongBits(message.deprecated_machine_id.low >>> 0, message.deprecated_machine_id.high >>> 0).toNumber(true) : message.deprecated_machine_id;
            if (message.session_data && message.session_data.length) {
                object.session_data = [];
                for (var j = 0; j < message.session_data.length; ++j)
                    object.session_data[j] = $root.CCredentials_GetSteamGuardDetails_Response.SessionData.toObject(message.session_data[j], options);
            }
            if (message.is_twofactor_enabled != null && message.hasOwnProperty("is_twofactor_enabled"))
                object.is_twofactor_enabled = message.is_twofactor_enabled;
            if (message.timestamp_twofactor_enabled != null && message.hasOwnProperty("timestamp_twofactor_enabled"))
                object.timestamp_twofactor_enabled = message.timestamp_twofactor_enabled;
            if (message.is_phone_verified != null && message.hasOwnProperty("is_phone_verified"))
                object.is_phone_verified = message.is_phone_verified;
            return object;
        };
    
        /**
         * Converts this CCredentials_GetSteamGuardDetails_Response to JSON.
         * @function toJSON
         * @memberof CCredentials_GetSteamGuardDetails_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_GetSteamGuardDetails_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CCredentials_GetSteamGuardDetails_Response.NewAuthentication = (function() {
    
            /**
             * Properties of a NewAuthentication.
             * @memberof CCredentials_GetSteamGuardDetails_Response
             * @interface INewAuthentication
             * @property {number|null} [timestamp_steamguard_enabled] NewAuthentication timestamp_steamguard_enabled
             * @property {boolean|null} [is_web_cookie] NewAuthentication is_web_cookie
             * @property {number|null} [ipaddress] NewAuthentication ipaddress
             * @property {string|null} [geoloc_info] NewAuthentication geoloc_info
             * @property {boolean|null} [is_remembered] NewAuthentication is_remembered
             * @property {string|null} [machine_name_user_supplied] NewAuthentication machine_name_user_supplied
             * @property {number|null} [status] NewAuthentication status
             */
    
            /**
             * Constructs a new NewAuthentication.
             * @memberof CCredentials_GetSteamGuardDetails_Response
             * @classdesc Represents a NewAuthentication.
             * @implements INewAuthentication
             * @constructor
             * @param {CCredentials_GetSteamGuardDetails_Response.INewAuthentication=} [properties] Properties to set
             */
            function NewAuthentication(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NewAuthentication timestamp_steamguard_enabled.
             * @member {number} timestamp_steamguard_enabled
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @instance
             */
            NewAuthentication.prototype.timestamp_steamguard_enabled = 0;
    
            /**
             * NewAuthentication is_web_cookie.
             * @member {boolean} is_web_cookie
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @instance
             */
            NewAuthentication.prototype.is_web_cookie = false;
    
            /**
             * NewAuthentication ipaddress.
             * @member {number} ipaddress
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @instance
             */
            NewAuthentication.prototype.ipaddress = 0;
    
            /**
             * NewAuthentication geoloc_info.
             * @member {string} geoloc_info
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @instance
             */
            NewAuthentication.prototype.geoloc_info = "";
    
            /**
             * NewAuthentication is_remembered.
             * @member {boolean} is_remembered
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @instance
             */
            NewAuthentication.prototype.is_remembered = false;
    
            /**
             * NewAuthentication machine_name_user_supplied.
             * @member {string} machine_name_user_supplied
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @instance
             */
            NewAuthentication.prototype.machine_name_user_supplied = "";
    
            /**
             * NewAuthentication status.
             * @member {number} status
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @instance
             */
            NewAuthentication.prototype.status = 0;
    
            /**
             * Creates a new NewAuthentication instance using the specified properties.
             * @function create
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @static
             * @param {CCredentials_GetSteamGuardDetails_Response.INewAuthentication=} [properties] Properties to set
             * @returns {CCredentials_GetSteamGuardDetails_Response.NewAuthentication} NewAuthentication instance
             */
            NewAuthentication.create = function create(properties) {
                return new NewAuthentication(properties);
            };
    
            /**
             * Encodes the specified NewAuthentication message. Does not implicitly {@link CCredentials_GetSteamGuardDetails_Response.NewAuthentication.verify|verify} messages.
             * @function encode
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @static
             * @param {CCredentials_GetSteamGuardDetails_Response.INewAuthentication} message NewAuthentication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewAuthentication.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp_steamguard_enabled != null && message.hasOwnProperty("timestamp_steamguard_enabled"))
                    writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.timestamp_steamguard_enabled);
                if (message.is_web_cookie != null && message.hasOwnProperty("is_web_cookie"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_web_cookie);
                if (message.ipaddress != null && message.hasOwnProperty("ipaddress"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ipaddress);
                if (message.geoloc_info != null && message.hasOwnProperty("geoloc_info"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.geoloc_info);
                if (message.is_remembered != null && message.hasOwnProperty("is_remembered"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_remembered);
                if (message.machine_name_user_supplied != null && message.hasOwnProperty("machine_name_user_supplied"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.machine_name_user_supplied);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
                return writer;
            };
    
            /**
             * Encodes the specified NewAuthentication message, length delimited. Does not implicitly {@link CCredentials_GetSteamGuardDetails_Response.NewAuthentication.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @static
             * @param {CCredentials_GetSteamGuardDetails_Response.INewAuthentication} message NewAuthentication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewAuthentication.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NewAuthentication message from the specified reader or buffer.
             * @function decode
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CCredentials_GetSteamGuardDetails_Response.NewAuthentication} NewAuthentication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewAuthentication.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.timestamp_steamguard_enabled = reader.fixed32();
                        break;
                    case 2:
                        message.is_web_cookie = reader.bool();
                        break;
                    case 3:
                        message.ipaddress = reader.int32();
                        break;
                    case 4:
                        message.geoloc_info = reader.string();
                        break;
                    case 5:
                        message.is_remembered = reader.bool();
                        break;
                    case 6:
                        message.machine_name_user_supplied = reader.string();
                        break;
                    case 7:
                        message.status = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NewAuthentication message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CCredentials_GetSteamGuardDetails_Response.NewAuthentication} NewAuthentication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewAuthentication.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NewAuthentication message.
             * @function verify
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NewAuthentication.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp_steamguard_enabled != null && message.hasOwnProperty("timestamp_steamguard_enabled"))
                    if (!$util.isInteger(message.timestamp_steamguard_enabled))
                        return "timestamp_steamguard_enabled: integer expected";
                if (message.is_web_cookie != null && message.hasOwnProperty("is_web_cookie"))
                    if (typeof message.is_web_cookie !== "boolean")
                        return "is_web_cookie: boolean expected";
                if (message.ipaddress != null && message.hasOwnProperty("ipaddress"))
                    if (!$util.isInteger(message.ipaddress))
                        return "ipaddress: integer expected";
                if (message.geoloc_info != null && message.hasOwnProperty("geoloc_info"))
                    if (!$util.isString(message.geoloc_info))
                        return "geoloc_info: string expected";
                if (message.is_remembered != null && message.hasOwnProperty("is_remembered"))
                    if (typeof message.is_remembered !== "boolean")
                        return "is_remembered: boolean expected";
                if (message.machine_name_user_supplied != null && message.hasOwnProperty("machine_name_user_supplied"))
                    if (!$util.isString(message.machine_name_user_supplied))
                        return "machine_name_user_supplied: string expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };
    
            /**
             * Creates a NewAuthentication message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CCredentials_GetSteamGuardDetails_Response.NewAuthentication} NewAuthentication
             */
            NewAuthentication.fromObject = function fromObject(object) {
                if (object instanceof $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication)
                    return object;
                var message = new $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication();
                if (object.timestamp_steamguard_enabled != null)
                    message.timestamp_steamguard_enabled = object.timestamp_steamguard_enabled >>> 0;
                if (object.is_web_cookie != null)
                    message.is_web_cookie = Boolean(object.is_web_cookie);
                if (object.ipaddress != null)
                    message.ipaddress = object.ipaddress | 0;
                if (object.geoloc_info != null)
                    message.geoloc_info = String(object.geoloc_info);
                if (object.is_remembered != null)
                    message.is_remembered = Boolean(object.is_remembered);
                if (object.machine_name_user_supplied != null)
                    message.machine_name_user_supplied = String(object.machine_name_user_supplied);
                if (object.status != null)
                    message.status = object.status | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a NewAuthentication message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @static
             * @param {CCredentials_GetSteamGuardDetails_Response.NewAuthentication} message NewAuthentication
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NewAuthentication.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.timestamp_steamguard_enabled = 0;
                    object.is_web_cookie = false;
                    object.ipaddress = 0;
                    object.geoloc_info = "";
                    object.is_remembered = false;
                    object.machine_name_user_supplied = "";
                    object.status = 0;
                }
                if (message.timestamp_steamguard_enabled != null && message.hasOwnProperty("timestamp_steamguard_enabled"))
                    object.timestamp_steamguard_enabled = message.timestamp_steamguard_enabled;
                if (message.is_web_cookie != null && message.hasOwnProperty("is_web_cookie"))
                    object.is_web_cookie = message.is_web_cookie;
                if (message.ipaddress != null && message.hasOwnProperty("ipaddress"))
                    object.ipaddress = message.ipaddress;
                if (message.geoloc_info != null && message.hasOwnProperty("geoloc_info"))
                    object.geoloc_info = message.geoloc_info;
                if (message.is_remembered != null && message.hasOwnProperty("is_remembered"))
                    object.is_remembered = message.is_remembered;
                if (message.machine_name_user_supplied != null && message.hasOwnProperty("machine_name_user_supplied"))
                    object.machine_name_user_supplied = message.machine_name_user_supplied;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                return object;
            };
    
            /**
             * Converts this NewAuthentication to JSON.
             * @function toJSON
             * @memberof CCredentials_GetSteamGuardDetails_Response.NewAuthentication
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NewAuthentication.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NewAuthentication;
        })();
    
        CCredentials_GetSteamGuardDetails_Response.SessionData = (function() {
    
            /**
             * Properties of a SessionData.
             * @memberof CCredentials_GetSteamGuardDetails_Response
             * @interface ISessionData
             * @property {number|Long|null} [machine_id] SessionData machine_id
             * @property {string|null} [machine_name_userchosen] SessionData machine_name_userchosen
             * @property {number|null} [timestamp_machine_steamguard_enabled] SessionData timestamp_machine_steamguard_enabled
             * @property {boolean|null} [authentication_exists_from_geoloc_before_mintime] SessionData authentication_exists_from_geoloc_before_mintime
             * @property {Array.<CCredentials_GetSteamGuardDetails_Response.INewAuthentication>|null} [newauthentication] SessionData newauthentication
             * @property {boolean|null} [authentication_exists_from_same_ip_before_mintime] SessionData authentication_exists_from_same_ip_before_mintime
             * @property {number|null} [public_ipv4] SessionData public_ipv4
             */
    
            /**
             * Constructs a new SessionData.
             * @memberof CCredentials_GetSteamGuardDetails_Response
             * @classdesc Represents a SessionData.
             * @implements ISessionData
             * @constructor
             * @param {CCredentials_GetSteamGuardDetails_Response.ISessionData=} [properties] Properties to set
             */
            function SessionData(properties) {
                this.newauthentication = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SessionData machine_id.
             * @member {number|Long} machine_id
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @instance
             */
            SessionData.prototype.machine_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * SessionData machine_name_userchosen.
             * @member {string} machine_name_userchosen
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @instance
             */
            SessionData.prototype.machine_name_userchosen = "";
    
            /**
             * SessionData timestamp_machine_steamguard_enabled.
             * @member {number} timestamp_machine_steamguard_enabled
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @instance
             */
            SessionData.prototype.timestamp_machine_steamguard_enabled = 0;
    
            /**
             * SessionData authentication_exists_from_geoloc_before_mintime.
             * @member {boolean} authentication_exists_from_geoloc_before_mintime
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @instance
             */
            SessionData.prototype.authentication_exists_from_geoloc_before_mintime = false;
    
            /**
             * SessionData newauthentication.
             * @member {Array.<CCredentials_GetSteamGuardDetails_Response.INewAuthentication>} newauthentication
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @instance
             */
            SessionData.prototype.newauthentication = $util.emptyArray;
    
            /**
             * SessionData authentication_exists_from_same_ip_before_mintime.
             * @member {boolean} authentication_exists_from_same_ip_before_mintime
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @instance
             */
            SessionData.prototype.authentication_exists_from_same_ip_before_mintime = false;
    
            /**
             * SessionData public_ipv4.
             * @member {number} public_ipv4
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @instance
             */
            SessionData.prototype.public_ipv4 = 0;
    
            /**
             * Creates a new SessionData instance using the specified properties.
             * @function create
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @static
             * @param {CCredentials_GetSteamGuardDetails_Response.ISessionData=} [properties] Properties to set
             * @returns {CCredentials_GetSteamGuardDetails_Response.SessionData} SessionData instance
             */
            SessionData.create = function create(properties) {
                return new SessionData(properties);
            };
    
            /**
             * Encodes the specified SessionData message. Does not implicitly {@link CCredentials_GetSteamGuardDetails_Response.SessionData.verify|verify} messages.
             * @function encode
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @static
             * @param {CCredentials_GetSteamGuardDetails_Response.ISessionData} message SessionData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.machine_id != null && message.hasOwnProperty("machine_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.machine_id);
                if (message.machine_name_userchosen != null && message.hasOwnProperty("machine_name_userchosen"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.machine_name_userchosen);
                if (message.timestamp_machine_steamguard_enabled != null && message.hasOwnProperty("timestamp_machine_steamguard_enabled"))
                    writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.timestamp_machine_steamguard_enabled);
                if (message.authentication_exists_from_geoloc_before_mintime != null && message.hasOwnProperty("authentication_exists_from_geoloc_before_mintime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.authentication_exists_from_geoloc_before_mintime);
                if (message.newauthentication != null && message.newauthentication.length)
                    for (var i = 0; i < message.newauthentication.length; ++i)
                        $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.encode(message.newauthentication[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.authentication_exists_from_same_ip_before_mintime != null && message.hasOwnProperty("authentication_exists_from_same_ip_before_mintime"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.authentication_exists_from_same_ip_before_mintime);
                if (message.public_ipv4 != null && message.hasOwnProperty("public_ipv4"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.public_ipv4);
                return writer;
            };
    
            /**
             * Encodes the specified SessionData message, length delimited. Does not implicitly {@link CCredentials_GetSteamGuardDetails_Response.SessionData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @static
             * @param {CCredentials_GetSteamGuardDetails_Response.ISessionData} message SessionData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SessionData message from the specified reader or buffer.
             * @function decode
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CCredentials_GetSteamGuardDetails_Response.SessionData} SessionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_GetSteamGuardDetails_Response.SessionData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.machine_id = reader.uint64();
                        break;
                    case 2:
                        message.machine_name_userchosen = reader.string();
                        break;
                    case 3:
                        message.timestamp_machine_steamguard_enabled = reader.fixed32();
                        break;
                    case 4:
                        message.authentication_exists_from_geoloc_before_mintime = reader.bool();
                        break;
                    case 5:
                        if (!(message.newauthentication && message.newauthentication.length))
                            message.newauthentication = [];
                        message.newauthentication.push($root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.authentication_exists_from_same_ip_before_mintime = reader.bool();
                        break;
                    case 7:
                        message.public_ipv4 = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SessionData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CCredentials_GetSteamGuardDetails_Response.SessionData} SessionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SessionData message.
             * @function verify
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.machine_id != null && message.hasOwnProperty("machine_id"))
                    if (!$util.isInteger(message.machine_id) && !(message.machine_id && $util.isInteger(message.machine_id.low) && $util.isInteger(message.machine_id.high)))
                        return "machine_id: integer|Long expected";
                if (message.machine_name_userchosen != null && message.hasOwnProperty("machine_name_userchosen"))
                    if (!$util.isString(message.machine_name_userchosen))
                        return "machine_name_userchosen: string expected";
                if (message.timestamp_machine_steamguard_enabled != null && message.hasOwnProperty("timestamp_machine_steamguard_enabled"))
                    if (!$util.isInteger(message.timestamp_machine_steamguard_enabled))
                        return "timestamp_machine_steamguard_enabled: integer expected";
                if (message.authentication_exists_from_geoloc_before_mintime != null && message.hasOwnProperty("authentication_exists_from_geoloc_before_mintime"))
                    if (typeof message.authentication_exists_from_geoloc_before_mintime !== "boolean")
                        return "authentication_exists_from_geoloc_before_mintime: boolean expected";
                if (message.newauthentication != null && message.hasOwnProperty("newauthentication")) {
                    if (!Array.isArray(message.newauthentication))
                        return "newauthentication: array expected";
                    for (var i = 0; i < message.newauthentication.length; ++i) {
                        var error = $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.verify(message.newauthentication[i]);
                        if (error)
                            return "newauthentication." + error;
                    }
                }
                if (message.authentication_exists_from_same_ip_before_mintime != null && message.hasOwnProperty("authentication_exists_from_same_ip_before_mintime"))
                    if (typeof message.authentication_exists_from_same_ip_before_mintime !== "boolean")
                        return "authentication_exists_from_same_ip_before_mintime: boolean expected";
                if (message.public_ipv4 != null && message.hasOwnProperty("public_ipv4"))
                    if (!$util.isInteger(message.public_ipv4))
                        return "public_ipv4: integer expected";
                return null;
            };
    
            /**
             * Creates a SessionData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CCredentials_GetSteamGuardDetails_Response.SessionData} SessionData
             */
            SessionData.fromObject = function fromObject(object) {
                if (object instanceof $root.CCredentials_GetSteamGuardDetails_Response.SessionData)
                    return object;
                var message = new $root.CCredentials_GetSteamGuardDetails_Response.SessionData();
                if (object.machine_id != null)
                    if ($util.Long)
                        (message.machine_id = $util.Long.fromValue(object.machine_id)).unsigned = true;
                    else if (typeof object.machine_id === "string")
                        message.machine_id = parseInt(object.machine_id, 10);
                    else if (typeof object.machine_id === "number")
                        message.machine_id = object.machine_id;
                    else if (typeof object.machine_id === "object")
                        message.machine_id = new $util.LongBits(object.machine_id.low >>> 0, object.machine_id.high >>> 0).toNumber(true);
                if (object.machine_name_userchosen != null)
                    message.machine_name_userchosen = String(object.machine_name_userchosen);
                if (object.timestamp_machine_steamguard_enabled != null)
                    message.timestamp_machine_steamguard_enabled = object.timestamp_machine_steamguard_enabled >>> 0;
                if (object.authentication_exists_from_geoloc_before_mintime != null)
                    message.authentication_exists_from_geoloc_before_mintime = Boolean(object.authentication_exists_from_geoloc_before_mintime);
                if (object.newauthentication) {
                    if (!Array.isArray(object.newauthentication))
                        throw TypeError(".CCredentials_GetSteamGuardDetails_Response.SessionData.newauthentication: array expected");
                    message.newauthentication = [];
                    for (var i = 0; i < object.newauthentication.length; ++i) {
                        if (typeof object.newauthentication[i] !== "object")
                            throw TypeError(".CCredentials_GetSteamGuardDetails_Response.SessionData.newauthentication: object expected");
                        message.newauthentication[i] = $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.fromObject(object.newauthentication[i]);
                    }
                }
                if (object.authentication_exists_from_same_ip_before_mintime != null)
                    message.authentication_exists_from_same_ip_before_mintime = Boolean(object.authentication_exists_from_same_ip_before_mintime);
                if (object.public_ipv4 != null)
                    message.public_ipv4 = object.public_ipv4 >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a SessionData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @static
             * @param {CCredentials_GetSteamGuardDetails_Response.SessionData} message SessionData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.newauthentication = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.machine_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.machine_id = options.longs === String ? "0" : 0;
                    object.machine_name_userchosen = "";
                    object.timestamp_machine_steamguard_enabled = 0;
                    object.authentication_exists_from_geoloc_before_mintime = false;
                    object.authentication_exists_from_same_ip_before_mintime = false;
                    object.public_ipv4 = 0;
                }
                if (message.machine_id != null && message.hasOwnProperty("machine_id"))
                    if (typeof message.machine_id === "number")
                        object.machine_id = options.longs === String ? String(message.machine_id) : message.machine_id;
                    else
                        object.machine_id = options.longs === String ? $util.Long.prototype.toString.call(message.machine_id) : options.longs === Number ? new $util.LongBits(message.machine_id.low >>> 0, message.machine_id.high >>> 0).toNumber(true) : message.machine_id;
                if (message.machine_name_userchosen != null && message.hasOwnProperty("machine_name_userchosen"))
                    object.machine_name_userchosen = message.machine_name_userchosen;
                if (message.timestamp_machine_steamguard_enabled != null && message.hasOwnProperty("timestamp_machine_steamguard_enabled"))
                    object.timestamp_machine_steamguard_enabled = message.timestamp_machine_steamguard_enabled;
                if (message.authentication_exists_from_geoloc_before_mintime != null && message.hasOwnProperty("authentication_exists_from_geoloc_before_mintime"))
                    object.authentication_exists_from_geoloc_before_mintime = message.authentication_exists_from_geoloc_before_mintime;
                if (message.newauthentication && message.newauthentication.length) {
                    object.newauthentication = [];
                    for (var j = 0; j < message.newauthentication.length; ++j)
                        object.newauthentication[j] = $root.CCredentials_GetSteamGuardDetails_Response.NewAuthentication.toObject(message.newauthentication[j], options);
                }
                if (message.authentication_exists_from_same_ip_before_mintime != null && message.hasOwnProperty("authentication_exists_from_same_ip_before_mintime"))
                    object.authentication_exists_from_same_ip_before_mintime = message.authentication_exists_from_same_ip_before_mintime;
                if (message.public_ipv4 != null && message.hasOwnProperty("public_ipv4"))
                    object.public_ipv4 = message.public_ipv4;
                return object;
            };
    
            /**
             * Converts this SessionData to JSON.
             * @function toJSON
             * @memberof CCredentials_GetSteamGuardDetails_Response.SessionData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SessionData;
        })();
    
        return CCredentials_GetSteamGuardDetails_Response;
    })();
    
    $root.CCredentials_NewMachineNotificationDialog_Request = (function() {
    
        /**
         * Properties of a CCredentials_NewMachineNotificationDialog_Request.
         * @exports ICCredentials_NewMachineNotificationDialog_Request
         * @interface ICCredentials_NewMachineNotificationDialog_Request
         * @property {boolean|null} [is_approved] CCredentials_NewMachineNotificationDialog_Request is_approved
         * @property {boolean|null} [is_wizard_complete] CCredentials_NewMachineNotificationDialog_Request is_wizard_complete
         */
    
        /**
         * Constructs a new CCredentials_NewMachineNotificationDialog_Request.
         * @exports CCredentials_NewMachineNotificationDialog_Request
         * @classdesc Represents a CCredentials_NewMachineNotificationDialog_Request.
         * @implements ICCredentials_NewMachineNotificationDialog_Request
         * @constructor
         * @param {ICCredentials_NewMachineNotificationDialog_Request=} [properties] Properties to set
         */
        function CCredentials_NewMachineNotificationDialog_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_NewMachineNotificationDialog_Request is_approved.
         * @member {boolean} is_approved
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @instance
         */
        CCredentials_NewMachineNotificationDialog_Request.prototype.is_approved = false;
    
        /**
         * CCredentials_NewMachineNotificationDialog_Request is_wizard_complete.
         * @member {boolean} is_wizard_complete
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @instance
         */
        CCredentials_NewMachineNotificationDialog_Request.prototype.is_wizard_complete = false;
    
        /**
         * Creates a new CCredentials_NewMachineNotificationDialog_Request instance using the specified properties.
         * @function create
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @static
         * @param {ICCredentials_NewMachineNotificationDialog_Request=} [properties] Properties to set
         * @returns {CCredentials_NewMachineNotificationDialog_Request} CCredentials_NewMachineNotificationDialog_Request instance
         */
        CCredentials_NewMachineNotificationDialog_Request.create = function create(properties) {
            return new CCredentials_NewMachineNotificationDialog_Request(properties);
        };
    
        /**
         * Encodes the specified CCredentials_NewMachineNotificationDialog_Request message. Does not implicitly {@link CCredentials_NewMachineNotificationDialog_Request.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @static
         * @param {ICCredentials_NewMachineNotificationDialog_Request} message CCredentials_NewMachineNotificationDialog_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_NewMachineNotificationDialog_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.is_approved != null && message.hasOwnProperty("is_approved"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.is_approved);
            if (message.is_wizard_complete != null && message.hasOwnProperty("is_wizard_complete"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_wizard_complete);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_NewMachineNotificationDialog_Request message, length delimited. Does not implicitly {@link CCredentials_NewMachineNotificationDialog_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @static
         * @param {ICCredentials_NewMachineNotificationDialog_Request} message CCredentials_NewMachineNotificationDialog_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_NewMachineNotificationDialog_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_NewMachineNotificationDialog_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_NewMachineNotificationDialog_Request} CCredentials_NewMachineNotificationDialog_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_NewMachineNotificationDialog_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_NewMachineNotificationDialog_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.is_approved = reader.bool();
                    break;
                case 2:
                    message.is_wizard_complete = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_NewMachineNotificationDialog_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_NewMachineNotificationDialog_Request} CCredentials_NewMachineNotificationDialog_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_NewMachineNotificationDialog_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_NewMachineNotificationDialog_Request message.
         * @function verify
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_NewMachineNotificationDialog_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.is_approved != null && message.hasOwnProperty("is_approved"))
                if (typeof message.is_approved !== "boolean")
                    return "is_approved: boolean expected";
            if (message.is_wizard_complete != null && message.hasOwnProperty("is_wizard_complete"))
                if (typeof message.is_wizard_complete !== "boolean")
                    return "is_wizard_complete: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_NewMachineNotificationDialog_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_NewMachineNotificationDialog_Request} CCredentials_NewMachineNotificationDialog_Request
         */
        CCredentials_NewMachineNotificationDialog_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_NewMachineNotificationDialog_Request)
                return object;
            var message = new $root.CCredentials_NewMachineNotificationDialog_Request();
            if (object.is_approved != null)
                message.is_approved = Boolean(object.is_approved);
            if (object.is_wizard_complete != null)
                message.is_wizard_complete = Boolean(object.is_wizard_complete);
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_NewMachineNotificationDialog_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @static
         * @param {CCredentials_NewMachineNotificationDialog_Request} message CCredentials_NewMachineNotificationDialog_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_NewMachineNotificationDialog_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.is_approved = false;
                object.is_wizard_complete = false;
            }
            if (message.is_approved != null && message.hasOwnProperty("is_approved"))
                object.is_approved = message.is_approved;
            if (message.is_wizard_complete != null && message.hasOwnProperty("is_wizard_complete"))
                object.is_wizard_complete = message.is_wizard_complete;
            return object;
        };
    
        /**
         * Converts this CCredentials_NewMachineNotificationDialog_Request to JSON.
         * @function toJSON
         * @memberof CCredentials_NewMachineNotificationDialog_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_NewMachineNotificationDialog_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_NewMachineNotificationDialog_Request;
    })();
    
    $root.CCredentials_NewMachineNotificationDialog_Response = (function() {
    
        /**
         * Properties of a CCredentials_NewMachineNotificationDialog_Response.
         * @exports ICCredentials_NewMachineNotificationDialog_Response
         * @interface ICCredentials_NewMachineNotificationDialog_Response
         */
    
        /**
         * Constructs a new CCredentials_NewMachineNotificationDialog_Response.
         * @exports CCredentials_NewMachineNotificationDialog_Response
         * @classdesc Represents a CCredentials_NewMachineNotificationDialog_Response.
         * @implements ICCredentials_NewMachineNotificationDialog_Response
         * @constructor
         * @param {ICCredentials_NewMachineNotificationDialog_Response=} [properties] Properties to set
         */
        function CCredentials_NewMachineNotificationDialog_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CCredentials_NewMachineNotificationDialog_Response instance using the specified properties.
         * @function create
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @static
         * @param {ICCredentials_NewMachineNotificationDialog_Response=} [properties] Properties to set
         * @returns {CCredentials_NewMachineNotificationDialog_Response} CCredentials_NewMachineNotificationDialog_Response instance
         */
        CCredentials_NewMachineNotificationDialog_Response.create = function create(properties) {
            return new CCredentials_NewMachineNotificationDialog_Response(properties);
        };
    
        /**
         * Encodes the specified CCredentials_NewMachineNotificationDialog_Response message. Does not implicitly {@link CCredentials_NewMachineNotificationDialog_Response.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @static
         * @param {ICCredentials_NewMachineNotificationDialog_Response} message CCredentials_NewMachineNotificationDialog_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_NewMachineNotificationDialog_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_NewMachineNotificationDialog_Response message, length delimited. Does not implicitly {@link CCredentials_NewMachineNotificationDialog_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @static
         * @param {ICCredentials_NewMachineNotificationDialog_Response} message CCredentials_NewMachineNotificationDialog_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_NewMachineNotificationDialog_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_NewMachineNotificationDialog_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_NewMachineNotificationDialog_Response} CCredentials_NewMachineNotificationDialog_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_NewMachineNotificationDialog_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_NewMachineNotificationDialog_Response();
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
         * Decodes a CCredentials_NewMachineNotificationDialog_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_NewMachineNotificationDialog_Response} CCredentials_NewMachineNotificationDialog_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_NewMachineNotificationDialog_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_NewMachineNotificationDialog_Response message.
         * @function verify
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_NewMachineNotificationDialog_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_NewMachineNotificationDialog_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_NewMachineNotificationDialog_Response} CCredentials_NewMachineNotificationDialog_Response
         */
        CCredentials_NewMachineNotificationDialog_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_NewMachineNotificationDialog_Response)
                return object;
            return new $root.CCredentials_NewMachineNotificationDialog_Response();
        };
    
        /**
         * Creates a plain object from a CCredentials_NewMachineNotificationDialog_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @static
         * @param {CCredentials_NewMachineNotificationDialog_Response} message CCredentials_NewMachineNotificationDialog_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_NewMachineNotificationDialog_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CCredentials_NewMachineNotificationDialog_Response to JSON.
         * @function toJSON
         * @memberof CCredentials_NewMachineNotificationDialog_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_NewMachineNotificationDialog_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_NewMachineNotificationDialog_Response;
    })();
    
    $root.CCredentials_ValidateEmailAddress_Request = (function() {
    
        /**
         * Properties of a CCredentials_ValidateEmailAddress_Request.
         * @exports ICCredentials_ValidateEmailAddress_Request
         * @interface ICCredentials_ValidateEmailAddress_Request
         * @property {string|null} [stoken] CCredentials_ValidateEmailAddress_Request stoken
         */
    
        /**
         * Constructs a new CCredentials_ValidateEmailAddress_Request.
         * @exports CCredentials_ValidateEmailAddress_Request
         * @classdesc Represents a CCredentials_ValidateEmailAddress_Request.
         * @implements ICCredentials_ValidateEmailAddress_Request
         * @constructor
         * @param {ICCredentials_ValidateEmailAddress_Request=} [properties] Properties to set
         */
        function CCredentials_ValidateEmailAddress_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_ValidateEmailAddress_Request stoken.
         * @member {string} stoken
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @instance
         */
        CCredentials_ValidateEmailAddress_Request.prototype.stoken = "";
    
        /**
         * Creates a new CCredentials_ValidateEmailAddress_Request instance using the specified properties.
         * @function create
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @static
         * @param {ICCredentials_ValidateEmailAddress_Request=} [properties] Properties to set
         * @returns {CCredentials_ValidateEmailAddress_Request} CCredentials_ValidateEmailAddress_Request instance
         */
        CCredentials_ValidateEmailAddress_Request.create = function create(properties) {
            return new CCredentials_ValidateEmailAddress_Request(properties);
        };
    
        /**
         * Encodes the specified CCredentials_ValidateEmailAddress_Request message. Does not implicitly {@link CCredentials_ValidateEmailAddress_Request.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @static
         * @param {ICCredentials_ValidateEmailAddress_Request} message CCredentials_ValidateEmailAddress_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_ValidateEmailAddress_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stoken != null && message.hasOwnProperty("stoken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stoken);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_ValidateEmailAddress_Request message, length delimited. Does not implicitly {@link CCredentials_ValidateEmailAddress_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @static
         * @param {ICCredentials_ValidateEmailAddress_Request} message CCredentials_ValidateEmailAddress_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_ValidateEmailAddress_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_ValidateEmailAddress_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_ValidateEmailAddress_Request} CCredentials_ValidateEmailAddress_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_ValidateEmailAddress_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_ValidateEmailAddress_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stoken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_ValidateEmailAddress_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_ValidateEmailAddress_Request} CCredentials_ValidateEmailAddress_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_ValidateEmailAddress_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_ValidateEmailAddress_Request message.
         * @function verify
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_ValidateEmailAddress_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stoken != null && message.hasOwnProperty("stoken"))
                if (!$util.isString(message.stoken))
                    return "stoken: string expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_ValidateEmailAddress_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_ValidateEmailAddress_Request} CCredentials_ValidateEmailAddress_Request
         */
        CCredentials_ValidateEmailAddress_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_ValidateEmailAddress_Request)
                return object;
            var message = new $root.CCredentials_ValidateEmailAddress_Request();
            if (object.stoken != null)
                message.stoken = String(object.stoken);
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_ValidateEmailAddress_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @static
         * @param {CCredentials_ValidateEmailAddress_Request} message CCredentials_ValidateEmailAddress_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_ValidateEmailAddress_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.stoken = "";
            if (message.stoken != null && message.hasOwnProperty("stoken"))
                object.stoken = message.stoken;
            return object;
        };
    
        /**
         * Converts this CCredentials_ValidateEmailAddress_Request to JSON.
         * @function toJSON
         * @memberof CCredentials_ValidateEmailAddress_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_ValidateEmailAddress_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_ValidateEmailAddress_Request;
    })();
    
    $root.CCredentials_ValidateEmailAddress_Response = (function() {
    
        /**
         * Properties of a CCredentials_ValidateEmailAddress_Response.
         * @exports ICCredentials_ValidateEmailAddress_Response
         * @interface ICCredentials_ValidateEmailAddress_Response
         * @property {boolean|null} [was_validated] CCredentials_ValidateEmailAddress_Response was_validated
         */
    
        /**
         * Constructs a new CCredentials_ValidateEmailAddress_Response.
         * @exports CCredentials_ValidateEmailAddress_Response
         * @classdesc Represents a CCredentials_ValidateEmailAddress_Response.
         * @implements ICCredentials_ValidateEmailAddress_Response
         * @constructor
         * @param {ICCredentials_ValidateEmailAddress_Response=} [properties] Properties to set
         */
        function CCredentials_ValidateEmailAddress_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_ValidateEmailAddress_Response was_validated.
         * @member {boolean} was_validated
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @instance
         */
        CCredentials_ValidateEmailAddress_Response.prototype.was_validated = false;
    
        /**
         * Creates a new CCredentials_ValidateEmailAddress_Response instance using the specified properties.
         * @function create
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @static
         * @param {ICCredentials_ValidateEmailAddress_Response=} [properties] Properties to set
         * @returns {CCredentials_ValidateEmailAddress_Response} CCredentials_ValidateEmailAddress_Response instance
         */
        CCredentials_ValidateEmailAddress_Response.create = function create(properties) {
            return new CCredentials_ValidateEmailAddress_Response(properties);
        };
    
        /**
         * Encodes the specified CCredentials_ValidateEmailAddress_Response message. Does not implicitly {@link CCredentials_ValidateEmailAddress_Response.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @static
         * @param {ICCredentials_ValidateEmailAddress_Response} message CCredentials_ValidateEmailAddress_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_ValidateEmailAddress_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.was_validated != null && message.hasOwnProperty("was_validated"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.was_validated);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_ValidateEmailAddress_Response message, length delimited. Does not implicitly {@link CCredentials_ValidateEmailAddress_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @static
         * @param {ICCredentials_ValidateEmailAddress_Response} message CCredentials_ValidateEmailAddress_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_ValidateEmailAddress_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_ValidateEmailAddress_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_ValidateEmailAddress_Response} CCredentials_ValidateEmailAddress_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_ValidateEmailAddress_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_ValidateEmailAddress_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.was_validated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_ValidateEmailAddress_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_ValidateEmailAddress_Response} CCredentials_ValidateEmailAddress_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_ValidateEmailAddress_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_ValidateEmailAddress_Response message.
         * @function verify
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_ValidateEmailAddress_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.was_validated != null && message.hasOwnProperty("was_validated"))
                if (typeof message.was_validated !== "boolean")
                    return "was_validated: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_ValidateEmailAddress_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_ValidateEmailAddress_Response} CCredentials_ValidateEmailAddress_Response
         */
        CCredentials_ValidateEmailAddress_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_ValidateEmailAddress_Response)
                return object;
            var message = new $root.CCredentials_ValidateEmailAddress_Response();
            if (object.was_validated != null)
                message.was_validated = Boolean(object.was_validated);
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_ValidateEmailAddress_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @static
         * @param {CCredentials_ValidateEmailAddress_Response} message CCredentials_ValidateEmailAddress_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_ValidateEmailAddress_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.was_validated = false;
            if (message.was_validated != null && message.hasOwnProperty("was_validated"))
                object.was_validated = message.was_validated;
            return object;
        };
    
        /**
         * Converts this CCredentials_ValidateEmailAddress_Response to JSON.
         * @function toJSON
         * @memberof CCredentials_ValidateEmailAddress_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_ValidateEmailAddress_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_ValidateEmailAddress_Response;
    })();
    
    $root.CCredentials_SteamGuardPhishingReport_Request = (function() {
    
        /**
         * Properties of a CCredentials_SteamGuardPhishingReport_Request.
         * @exports ICCredentials_SteamGuardPhishingReport_Request
         * @interface ICCredentials_SteamGuardPhishingReport_Request
         * @property {string|null} [param_string] CCredentials_SteamGuardPhishingReport_Request param_string
         * @property {number|null} [ipaddress_actual] CCredentials_SteamGuardPhishingReport_Request ipaddress_actual
         */
    
        /**
         * Constructs a new CCredentials_SteamGuardPhishingReport_Request.
         * @exports CCredentials_SteamGuardPhishingReport_Request
         * @classdesc Represents a CCredentials_SteamGuardPhishingReport_Request.
         * @implements ICCredentials_SteamGuardPhishingReport_Request
         * @constructor
         * @param {ICCredentials_SteamGuardPhishingReport_Request=} [properties] Properties to set
         */
        function CCredentials_SteamGuardPhishingReport_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_SteamGuardPhishingReport_Request param_string.
         * @member {string} param_string
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Request.prototype.param_string = "";
    
        /**
         * CCredentials_SteamGuardPhishingReport_Request ipaddress_actual.
         * @member {number} ipaddress_actual
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Request.prototype.ipaddress_actual = 0;
    
        /**
         * Creates a new CCredentials_SteamGuardPhishingReport_Request instance using the specified properties.
         * @function create
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @static
         * @param {ICCredentials_SteamGuardPhishingReport_Request=} [properties] Properties to set
         * @returns {CCredentials_SteamGuardPhishingReport_Request} CCredentials_SteamGuardPhishingReport_Request instance
         */
        CCredentials_SteamGuardPhishingReport_Request.create = function create(properties) {
            return new CCredentials_SteamGuardPhishingReport_Request(properties);
        };
    
        /**
         * Encodes the specified CCredentials_SteamGuardPhishingReport_Request message. Does not implicitly {@link CCredentials_SteamGuardPhishingReport_Request.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @static
         * @param {ICCredentials_SteamGuardPhishingReport_Request} message CCredentials_SteamGuardPhishingReport_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_SteamGuardPhishingReport_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.param_string != null && message.hasOwnProperty("param_string"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.param_string);
            if (message.ipaddress_actual != null && message.hasOwnProperty("ipaddress_actual"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ipaddress_actual);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_SteamGuardPhishingReport_Request message, length delimited. Does not implicitly {@link CCredentials_SteamGuardPhishingReport_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @static
         * @param {ICCredentials_SteamGuardPhishingReport_Request} message CCredentials_SteamGuardPhishingReport_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_SteamGuardPhishingReport_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_SteamGuardPhishingReport_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_SteamGuardPhishingReport_Request} CCredentials_SteamGuardPhishingReport_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_SteamGuardPhishingReport_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_SteamGuardPhishingReport_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.param_string = reader.string();
                    break;
                case 2:
                    message.ipaddress_actual = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_SteamGuardPhishingReport_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_SteamGuardPhishingReport_Request} CCredentials_SteamGuardPhishingReport_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_SteamGuardPhishingReport_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_SteamGuardPhishingReport_Request message.
         * @function verify
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_SteamGuardPhishingReport_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.param_string != null && message.hasOwnProperty("param_string"))
                if (!$util.isString(message.param_string))
                    return "param_string: string expected";
            if (message.ipaddress_actual != null && message.hasOwnProperty("ipaddress_actual"))
                if (!$util.isInteger(message.ipaddress_actual))
                    return "ipaddress_actual: integer expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_SteamGuardPhishingReport_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_SteamGuardPhishingReport_Request} CCredentials_SteamGuardPhishingReport_Request
         */
        CCredentials_SteamGuardPhishingReport_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_SteamGuardPhishingReport_Request)
                return object;
            var message = new $root.CCredentials_SteamGuardPhishingReport_Request();
            if (object.param_string != null)
                message.param_string = String(object.param_string);
            if (object.ipaddress_actual != null)
                message.ipaddress_actual = object.ipaddress_actual >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_SteamGuardPhishingReport_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @static
         * @param {CCredentials_SteamGuardPhishingReport_Request} message CCredentials_SteamGuardPhishingReport_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_SteamGuardPhishingReport_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.param_string = "";
                object.ipaddress_actual = 0;
            }
            if (message.param_string != null && message.hasOwnProperty("param_string"))
                object.param_string = message.param_string;
            if (message.ipaddress_actual != null && message.hasOwnProperty("ipaddress_actual"))
                object.ipaddress_actual = message.ipaddress_actual;
            return object;
        };
    
        /**
         * Converts this CCredentials_SteamGuardPhishingReport_Request to JSON.
         * @function toJSON
         * @memberof CCredentials_SteamGuardPhishingReport_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_SteamGuardPhishingReport_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_SteamGuardPhishingReport_Request;
    })();
    
    $root.CCredentials_SteamGuardPhishingReport_Response = (function() {
    
        /**
         * Properties of a CCredentials_SteamGuardPhishingReport_Response.
         * @exports ICCredentials_SteamGuardPhishingReport_Response
         * @interface ICCredentials_SteamGuardPhishingReport_Response
         * @property {number|null} [ipaddress_loginattempt] CCredentials_SteamGuardPhishingReport_Response ipaddress_loginattempt
         * @property {string|null} [countryname_loginattempt] CCredentials_SteamGuardPhishingReport_Response countryname_loginattempt
         * @property {string|null} [statename_loginattempt] CCredentials_SteamGuardPhishingReport_Response statename_loginattempt
         * @property {string|null} [cityname_loginattempt] CCredentials_SteamGuardPhishingReport_Response cityname_loginattempt
         * @property {number|null} [ipaddress_actual] CCredentials_SteamGuardPhishingReport_Response ipaddress_actual
         * @property {string|null} [countryname_actual] CCredentials_SteamGuardPhishingReport_Response countryname_actual
         * @property {string|null} [statename_actual] CCredentials_SteamGuardPhishingReport_Response statename_actual
         * @property {string|null} [cityname_actual] CCredentials_SteamGuardPhishingReport_Response cityname_actual
         * @property {string|null} [steamguard_code] CCredentials_SteamGuardPhishingReport_Response steamguard_code
         */
    
        /**
         * Constructs a new CCredentials_SteamGuardPhishingReport_Response.
         * @exports CCredentials_SteamGuardPhishingReport_Response
         * @classdesc Represents a CCredentials_SteamGuardPhishingReport_Response.
         * @implements ICCredentials_SteamGuardPhishingReport_Response
         * @constructor
         * @param {ICCredentials_SteamGuardPhishingReport_Response=} [properties] Properties to set
         */
        function CCredentials_SteamGuardPhishingReport_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response ipaddress_loginattempt.
         * @member {number} ipaddress_loginattempt
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.ipaddress_loginattempt = 0;
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response countryname_loginattempt.
         * @member {string} countryname_loginattempt
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.countryname_loginattempt = "";
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response statename_loginattempt.
         * @member {string} statename_loginattempt
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.statename_loginattempt = "";
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response cityname_loginattempt.
         * @member {string} cityname_loginattempt
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.cityname_loginattempt = "";
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response ipaddress_actual.
         * @member {number} ipaddress_actual
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.ipaddress_actual = 0;
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response countryname_actual.
         * @member {string} countryname_actual
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.countryname_actual = "";
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response statename_actual.
         * @member {string} statename_actual
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.statename_actual = "";
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response cityname_actual.
         * @member {string} cityname_actual
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.cityname_actual = "";
    
        /**
         * CCredentials_SteamGuardPhishingReport_Response steamguard_code.
         * @member {string} steamguard_code
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.steamguard_code = "";
    
        /**
         * Creates a new CCredentials_SteamGuardPhishingReport_Response instance using the specified properties.
         * @function create
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @static
         * @param {ICCredentials_SteamGuardPhishingReport_Response=} [properties] Properties to set
         * @returns {CCredentials_SteamGuardPhishingReport_Response} CCredentials_SteamGuardPhishingReport_Response instance
         */
        CCredentials_SteamGuardPhishingReport_Response.create = function create(properties) {
            return new CCredentials_SteamGuardPhishingReport_Response(properties);
        };
    
        /**
         * Encodes the specified CCredentials_SteamGuardPhishingReport_Response message. Does not implicitly {@link CCredentials_SteamGuardPhishingReport_Response.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @static
         * @param {ICCredentials_SteamGuardPhishingReport_Response} message CCredentials_SteamGuardPhishingReport_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_SteamGuardPhishingReport_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ipaddress_loginattempt != null && message.hasOwnProperty("ipaddress_loginattempt"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ipaddress_loginattempt);
            if (message.countryname_loginattempt != null && message.hasOwnProperty("countryname_loginattempt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.countryname_loginattempt);
            if (message.statename_loginattempt != null && message.hasOwnProperty("statename_loginattempt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.statename_loginattempt);
            if (message.cityname_loginattempt != null && message.hasOwnProperty("cityname_loginattempt"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.cityname_loginattempt);
            if (message.ipaddress_actual != null && message.hasOwnProperty("ipaddress_actual"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ipaddress_actual);
            if (message.countryname_actual != null && message.hasOwnProperty("countryname_actual"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.countryname_actual);
            if (message.statename_actual != null && message.hasOwnProperty("statename_actual"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.statename_actual);
            if (message.cityname_actual != null && message.hasOwnProperty("cityname_actual"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.cityname_actual);
            if (message.steamguard_code != null && message.hasOwnProperty("steamguard_code"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.steamguard_code);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_SteamGuardPhishingReport_Response message, length delimited. Does not implicitly {@link CCredentials_SteamGuardPhishingReport_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @static
         * @param {ICCredentials_SteamGuardPhishingReport_Response} message CCredentials_SteamGuardPhishingReport_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_SteamGuardPhishingReport_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_SteamGuardPhishingReport_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_SteamGuardPhishingReport_Response} CCredentials_SteamGuardPhishingReport_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_SteamGuardPhishingReport_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_SteamGuardPhishingReport_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ipaddress_loginattempt = reader.uint32();
                    break;
                case 2:
                    message.countryname_loginattempt = reader.string();
                    break;
                case 3:
                    message.statename_loginattempt = reader.string();
                    break;
                case 4:
                    message.cityname_loginattempt = reader.string();
                    break;
                case 5:
                    message.ipaddress_actual = reader.uint32();
                    break;
                case 6:
                    message.countryname_actual = reader.string();
                    break;
                case 7:
                    message.statename_actual = reader.string();
                    break;
                case 8:
                    message.cityname_actual = reader.string();
                    break;
                case 9:
                    message.steamguard_code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_SteamGuardPhishingReport_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_SteamGuardPhishingReport_Response} CCredentials_SteamGuardPhishingReport_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_SteamGuardPhishingReport_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_SteamGuardPhishingReport_Response message.
         * @function verify
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_SteamGuardPhishingReport_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ipaddress_loginattempt != null && message.hasOwnProperty("ipaddress_loginattempt"))
                if (!$util.isInteger(message.ipaddress_loginattempt))
                    return "ipaddress_loginattempt: integer expected";
            if (message.countryname_loginattempt != null && message.hasOwnProperty("countryname_loginattempt"))
                if (!$util.isString(message.countryname_loginattempt))
                    return "countryname_loginattempt: string expected";
            if (message.statename_loginattempt != null && message.hasOwnProperty("statename_loginattempt"))
                if (!$util.isString(message.statename_loginattempt))
                    return "statename_loginattempt: string expected";
            if (message.cityname_loginattempt != null && message.hasOwnProperty("cityname_loginattempt"))
                if (!$util.isString(message.cityname_loginattempt))
                    return "cityname_loginattempt: string expected";
            if (message.ipaddress_actual != null && message.hasOwnProperty("ipaddress_actual"))
                if (!$util.isInteger(message.ipaddress_actual))
                    return "ipaddress_actual: integer expected";
            if (message.countryname_actual != null && message.hasOwnProperty("countryname_actual"))
                if (!$util.isString(message.countryname_actual))
                    return "countryname_actual: string expected";
            if (message.statename_actual != null && message.hasOwnProperty("statename_actual"))
                if (!$util.isString(message.statename_actual))
                    return "statename_actual: string expected";
            if (message.cityname_actual != null && message.hasOwnProperty("cityname_actual"))
                if (!$util.isString(message.cityname_actual))
                    return "cityname_actual: string expected";
            if (message.steamguard_code != null && message.hasOwnProperty("steamguard_code"))
                if (!$util.isString(message.steamguard_code))
                    return "steamguard_code: string expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_SteamGuardPhishingReport_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_SteamGuardPhishingReport_Response} CCredentials_SteamGuardPhishingReport_Response
         */
        CCredentials_SteamGuardPhishingReport_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_SteamGuardPhishingReport_Response)
                return object;
            var message = new $root.CCredentials_SteamGuardPhishingReport_Response();
            if (object.ipaddress_loginattempt != null)
                message.ipaddress_loginattempt = object.ipaddress_loginattempt >>> 0;
            if (object.countryname_loginattempt != null)
                message.countryname_loginattempt = String(object.countryname_loginattempt);
            if (object.statename_loginattempt != null)
                message.statename_loginattempt = String(object.statename_loginattempt);
            if (object.cityname_loginattempt != null)
                message.cityname_loginattempt = String(object.cityname_loginattempt);
            if (object.ipaddress_actual != null)
                message.ipaddress_actual = object.ipaddress_actual >>> 0;
            if (object.countryname_actual != null)
                message.countryname_actual = String(object.countryname_actual);
            if (object.statename_actual != null)
                message.statename_actual = String(object.statename_actual);
            if (object.cityname_actual != null)
                message.cityname_actual = String(object.cityname_actual);
            if (object.steamguard_code != null)
                message.steamguard_code = String(object.steamguard_code);
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_SteamGuardPhishingReport_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @static
         * @param {CCredentials_SteamGuardPhishingReport_Response} message CCredentials_SteamGuardPhishingReport_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_SteamGuardPhishingReport_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ipaddress_loginattempt = 0;
                object.countryname_loginattempt = "";
                object.statename_loginattempt = "";
                object.cityname_loginattempt = "";
                object.ipaddress_actual = 0;
                object.countryname_actual = "";
                object.statename_actual = "";
                object.cityname_actual = "";
                object.steamguard_code = "";
            }
            if (message.ipaddress_loginattempt != null && message.hasOwnProperty("ipaddress_loginattempt"))
                object.ipaddress_loginattempt = message.ipaddress_loginattempt;
            if (message.countryname_loginattempt != null && message.hasOwnProperty("countryname_loginattempt"))
                object.countryname_loginattempt = message.countryname_loginattempt;
            if (message.statename_loginattempt != null && message.hasOwnProperty("statename_loginattempt"))
                object.statename_loginattempt = message.statename_loginattempt;
            if (message.cityname_loginattempt != null && message.hasOwnProperty("cityname_loginattempt"))
                object.cityname_loginattempt = message.cityname_loginattempt;
            if (message.ipaddress_actual != null && message.hasOwnProperty("ipaddress_actual"))
                object.ipaddress_actual = message.ipaddress_actual;
            if (message.countryname_actual != null && message.hasOwnProperty("countryname_actual"))
                object.countryname_actual = message.countryname_actual;
            if (message.statename_actual != null && message.hasOwnProperty("statename_actual"))
                object.statename_actual = message.statename_actual;
            if (message.cityname_actual != null && message.hasOwnProperty("cityname_actual"))
                object.cityname_actual = message.cityname_actual;
            if (message.steamguard_code != null && message.hasOwnProperty("steamguard_code"))
                object.steamguard_code = message.steamguard_code;
            return object;
        };
    
        /**
         * Converts this CCredentials_SteamGuardPhishingReport_Response to JSON.
         * @function toJSON
         * @memberof CCredentials_SteamGuardPhishingReport_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_SteamGuardPhishingReport_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_SteamGuardPhishingReport_Response;
    })();
    
    $root.CCredentials_LastCredentialChangeTime_Request = (function() {
    
        /**
         * Properties of a CCredentials_LastCredentialChangeTime_Request.
         * @exports ICCredentials_LastCredentialChangeTime_Request
         * @interface ICCredentials_LastCredentialChangeTime_Request
         */
    
        /**
         * Constructs a new CCredentials_LastCredentialChangeTime_Request.
         * @exports CCredentials_LastCredentialChangeTime_Request
         * @classdesc Represents a CCredentials_LastCredentialChangeTime_Request.
         * @implements ICCredentials_LastCredentialChangeTime_Request
         * @constructor
         * @param {ICCredentials_LastCredentialChangeTime_Request=} [properties] Properties to set
         */
        function CCredentials_LastCredentialChangeTime_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CCredentials_LastCredentialChangeTime_Request instance using the specified properties.
         * @function create
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @static
         * @param {ICCredentials_LastCredentialChangeTime_Request=} [properties] Properties to set
         * @returns {CCredentials_LastCredentialChangeTime_Request} CCredentials_LastCredentialChangeTime_Request instance
         */
        CCredentials_LastCredentialChangeTime_Request.create = function create(properties) {
            return new CCredentials_LastCredentialChangeTime_Request(properties);
        };
    
        /**
         * Encodes the specified CCredentials_LastCredentialChangeTime_Request message. Does not implicitly {@link CCredentials_LastCredentialChangeTime_Request.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @static
         * @param {ICCredentials_LastCredentialChangeTime_Request} message CCredentials_LastCredentialChangeTime_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_LastCredentialChangeTime_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_LastCredentialChangeTime_Request message, length delimited. Does not implicitly {@link CCredentials_LastCredentialChangeTime_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @static
         * @param {ICCredentials_LastCredentialChangeTime_Request} message CCredentials_LastCredentialChangeTime_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_LastCredentialChangeTime_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_LastCredentialChangeTime_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_LastCredentialChangeTime_Request} CCredentials_LastCredentialChangeTime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_LastCredentialChangeTime_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_LastCredentialChangeTime_Request();
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
         * Decodes a CCredentials_LastCredentialChangeTime_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_LastCredentialChangeTime_Request} CCredentials_LastCredentialChangeTime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_LastCredentialChangeTime_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_LastCredentialChangeTime_Request message.
         * @function verify
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_LastCredentialChangeTime_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_LastCredentialChangeTime_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_LastCredentialChangeTime_Request} CCredentials_LastCredentialChangeTime_Request
         */
        CCredentials_LastCredentialChangeTime_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_LastCredentialChangeTime_Request)
                return object;
            return new $root.CCredentials_LastCredentialChangeTime_Request();
        };
    
        /**
         * Creates a plain object from a CCredentials_LastCredentialChangeTime_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @static
         * @param {CCredentials_LastCredentialChangeTime_Request} message CCredentials_LastCredentialChangeTime_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_LastCredentialChangeTime_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CCredentials_LastCredentialChangeTime_Request to JSON.
         * @function toJSON
         * @memberof CCredentials_LastCredentialChangeTime_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_LastCredentialChangeTime_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_LastCredentialChangeTime_Request;
    })();
    
    $root.CCredentials_LastCredentialChangeTime_Response = (function() {
    
        /**
         * Properties of a CCredentials_LastCredentialChangeTime_Response.
         * @exports ICCredentials_LastCredentialChangeTime_Response
         * @interface ICCredentials_LastCredentialChangeTime_Response
         * @property {number|null} [timestamp_last_password_change] CCredentials_LastCredentialChangeTime_Response timestamp_last_password_change
         * @property {number|null} [timestamp_last_email_change] CCredentials_LastCredentialChangeTime_Response timestamp_last_email_change
         * @property {number|null} [timestamp_last_password_reset] CCredentials_LastCredentialChangeTime_Response timestamp_last_password_reset
         */
    
        /**
         * Constructs a new CCredentials_LastCredentialChangeTime_Response.
         * @exports CCredentials_LastCredentialChangeTime_Response
         * @classdesc Represents a CCredentials_LastCredentialChangeTime_Response.
         * @implements ICCredentials_LastCredentialChangeTime_Response
         * @constructor
         * @param {ICCredentials_LastCredentialChangeTime_Response=} [properties] Properties to set
         */
        function CCredentials_LastCredentialChangeTime_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_LastCredentialChangeTime_Response timestamp_last_password_change.
         * @member {number} timestamp_last_password_change
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @instance
         */
        CCredentials_LastCredentialChangeTime_Response.prototype.timestamp_last_password_change = 0;
    
        /**
         * CCredentials_LastCredentialChangeTime_Response timestamp_last_email_change.
         * @member {number} timestamp_last_email_change
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @instance
         */
        CCredentials_LastCredentialChangeTime_Response.prototype.timestamp_last_email_change = 0;
    
        /**
         * CCredentials_LastCredentialChangeTime_Response timestamp_last_password_reset.
         * @member {number} timestamp_last_password_reset
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @instance
         */
        CCredentials_LastCredentialChangeTime_Response.prototype.timestamp_last_password_reset = 0;
    
        /**
         * Creates a new CCredentials_LastCredentialChangeTime_Response instance using the specified properties.
         * @function create
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @static
         * @param {ICCredentials_LastCredentialChangeTime_Response=} [properties] Properties to set
         * @returns {CCredentials_LastCredentialChangeTime_Response} CCredentials_LastCredentialChangeTime_Response instance
         */
        CCredentials_LastCredentialChangeTime_Response.create = function create(properties) {
            return new CCredentials_LastCredentialChangeTime_Response(properties);
        };
    
        /**
         * Encodes the specified CCredentials_LastCredentialChangeTime_Response message. Does not implicitly {@link CCredentials_LastCredentialChangeTime_Response.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @static
         * @param {ICCredentials_LastCredentialChangeTime_Response} message CCredentials_LastCredentialChangeTime_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_LastCredentialChangeTime_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp_last_password_change != null && message.hasOwnProperty("timestamp_last_password_change"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.timestamp_last_password_change);
            if (message.timestamp_last_email_change != null && message.hasOwnProperty("timestamp_last_email_change"))
                writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.timestamp_last_email_change);
            if (message.timestamp_last_password_reset != null && message.hasOwnProperty("timestamp_last_password_reset"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.timestamp_last_password_reset);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_LastCredentialChangeTime_Response message, length delimited. Does not implicitly {@link CCredentials_LastCredentialChangeTime_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @static
         * @param {ICCredentials_LastCredentialChangeTime_Response} message CCredentials_LastCredentialChangeTime_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_LastCredentialChangeTime_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_LastCredentialChangeTime_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_LastCredentialChangeTime_Response} CCredentials_LastCredentialChangeTime_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_LastCredentialChangeTime_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_LastCredentialChangeTime_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp_last_password_change = reader.fixed32();
                    break;
                case 2:
                    message.timestamp_last_email_change = reader.fixed32();
                    break;
                case 3:
                    message.timestamp_last_password_reset = reader.fixed32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_LastCredentialChangeTime_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_LastCredentialChangeTime_Response} CCredentials_LastCredentialChangeTime_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_LastCredentialChangeTime_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_LastCredentialChangeTime_Response message.
         * @function verify
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_LastCredentialChangeTime_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp_last_password_change != null && message.hasOwnProperty("timestamp_last_password_change"))
                if (!$util.isInteger(message.timestamp_last_password_change))
                    return "timestamp_last_password_change: integer expected";
            if (message.timestamp_last_email_change != null && message.hasOwnProperty("timestamp_last_email_change"))
                if (!$util.isInteger(message.timestamp_last_email_change))
                    return "timestamp_last_email_change: integer expected";
            if (message.timestamp_last_password_reset != null && message.hasOwnProperty("timestamp_last_password_reset"))
                if (!$util.isInteger(message.timestamp_last_password_reset))
                    return "timestamp_last_password_reset: integer expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_LastCredentialChangeTime_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_LastCredentialChangeTime_Response} CCredentials_LastCredentialChangeTime_Response
         */
        CCredentials_LastCredentialChangeTime_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_LastCredentialChangeTime_Response)
                return object;
            var message = new $root.CCredentials_LastCredentialChangeTime_Response();
            if (object.timestamp_last_password_change != null)
                message.timestamp_last_password_change = object.timestamp_last_password_change >>> 0;
            if (object.timestamp_last_email_change != null)
                message.timestamp_last_email_change = object.timestamp_last_email_change >>> 0;
            if (object.timestamp_last_password_reset != null)
                message.timestamp_last_password_reset = object.timestamp_last_password_reset >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_LastCredentialChangeTime_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @static
         * @param {CCredentials_LastCredentialChangeTime_Response} message CCredentials_LastCredentialChangeTime_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_LastCredentialChangeTime_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timestamp_last_password_change = 0;
                object.timestamp_last_email_change = 0;
                object.timestamp_last_password_reset = 0;
            }
            if (message.timestamp_last_password_change != null && message.hasOwnProperty("timestamp_last_password_change"))
                object.timestamp_last_password_change = message.timestamp_last_password_change;
            if (message.timestamp_last_email_change != null && message.hasOwnProperty("timestamp_last_email_change"))
                object.timestamp_last_email_change = message.timestamp_last_email_change;
            if (message.timestamp_last_password_reset != null && message.hasOwnProperty("timestamp_last_password_reset"))
                object.timestamp_last_password_reset = message.timestamp_last_password_reset;
            return object;
        };
    
        /**
         * Converts this CCredentials_LastCredentialChangeTime_Response to JSON.
         * @function toJSON
         * @memberof CCredentials_LastCredentialChangeTime_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_LastCredentialChangeTime_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_LastCredentialChangeTime_Response;
    })();
    
    $root.CCredentials_GetAccountAuthSecret_Request = (function() {
    
        /**
         * Properties of a CCredentials_GetAccountAuthSecret_Request.
         * @exports ICCredentials_GetAccountAuthSecret_Request
         * @interface ICCredentials_GetAccountAuthSecret_Request
         */
    
        /**
         * Constructs a new CCredentials_GetAccountAuthSecret_Request.
         * @exports CCredentials_GetAccountAuthSecret_Request
         * @classdesc Represents a CCredentials_GetAccountAuthSecret_Request.
         * @implements ICCredentials_GetAccountAuthSecret_Request
         * @constructor
         * @param {ICCredentials_GetAccountAuthSecret_Request=} [properties] Properties to set
         */
        function CCredentials_GetAccountAuthSecret_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CCredentials_GetAccountAuthSecret_Request instance using the specified properties.
         * @function create
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @static
         * @param {ICCredentials_GetAccountAuthSecret_Request=} [properties] Properties to set
         * @returns {CCredentials_GetAccountAuthSecret_Request} CCredentials_GetAccountAuthSecret_Request instance
         */
        CCredentials_GetAccountAuthSecret_Request.create = function create(properties) {
            return new CCredentials_GetAccountAuthSecret_Request(properties);
        };
    
        /**
         * Encodes the specified CCredentials_GetAccountAuthSecret_Request message. Does not implicitly {@link CCredentials_GetAccountAuthSecret_Request.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @static
         * @param {ICCredentials_GetAccountAuthSecret_Request} message CCredentials_GetAccountAuthSecret_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_GetAccountAuthSecret_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_GetAccountAuthSecret_Request message, length delimited. Does not implicitly {@link CCredentials_GetAccountAuthSecret_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @static
         * @param {ICCredentials_GetAccountAuthSecret_Request} message CCredentials_GetAccountAuthSecret_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_GetAccountAuthSecret_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_GetAccountAuthSecret_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_GetAccountAuthSecret_Request} CCredentials_GetAccountAuthSecret_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_GetAccountAuthSecret_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_GetAccountAuthSecret_Request();
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
         * Decodes a CCredentials_GetAccountAuthSecret_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_GetAccountAuthSecret_Request} CCredentials_GetAccountAuthSecret_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_GetAccountAuthSecret_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_GetAccountAuthSecret_Request message.
         * @function verify
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_GetAccountAuthSecret_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_GetAccountAuthSecret_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_GetAccountAuthSecret_Request} CCredentials_GetAccountAuthSecret_Request
         */
        CCredentials_GetAccountAuthSecret_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_GetAccountAuthSecret_Request)
                return object;
            return new $root.CCredentials_GetAccountAuthSecret_Request();
        };
    
        /**
         * Creates a plain object from a CCredentials_GetAccountAuthSecret_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @static
         * @param {CCredentials_GetAccountAuthSecret_Request} message CCredentials_GetAccountAuthSecret_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_GetAccountAuthSecret_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CCredentials_GetAccountAuthSecret_Request to JSON.
         * @function toJSON
         * @memberof CCredentials_GetAccountAuthSecret_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_GetAccountAuthSecret_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_GetAccountAuthSecret_Request;
    })();
    
    $root.CCredentials_GetAccountAuthSecret_Response = (function() {
    
        /**
         * Properties of a CCredentials_GetAccountAuthSecret_Response.
         * @exports ICCredentials_GetAccountAuthSecret_Response
         * @interface ICCredentials_GetAccountAuthSecret_Response
         * @property {number|null} [secret_id] CCredentials_GetAccountAuthSecret_Response secret_id
         * @property {Uint8Array|null} [secret] CCredentials_GetAccountAuthSecret_Response secret
         */
    
        /**
         * Constructs a new CCredentials_GetAccountAuthSecret_Response.
         * @exports CCredentials_GetAccountAuthSecret_Response
         * @classdesc Represents a CCredentials_GetAccountAuthSecret_Response.
         * @implements ICCredentials_GetAccountAuthSecret_Response
         * @constructor
         * @param {ICCredentials_GetAccountAuthSecret_Response=} [properties] Properties to set
         */
        function CCredentials_GetAccountAuthSecret_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCredentials_GetAccountAuthSecret_Response secret_id.
         * @member {number} secret_id
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @instance
         */
        CCredentials_GetAccountAuthSecret_Response.prototype.secret_id = 0;
    
        /**
         * CCredentials_GetAccountAuthSecret_Response secret.
         * @member {Uint8Array} secret
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @instance
         */
        CCredentials_GetAccountAuthSecret_Response.prototype.secret = $util.newBuffer([]);
    
        /**
         * Creates a new CCredentials_GetAccountAuthSecret_Response instance using the specified properties.
         * @function create
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @static
         * @param {ICCredentials_GetAccountAuthSecret_Response=} [properties] Properties to set
         * @returns {CCredentials_GetAccountAuthSecret_Response} CCredentials_GetAccountAuthSecret_Response instance
         */
        CCredentials_GetAccountAuthSecret_Response.create = function create(properties) {
            return new CCredentials_GetAccountAuthSecret_Response(properties);
        };
    
        /**
         * Encodes the specified CCredentials_GetAccountAuthSecret_Response message. Does not implicitly {@link CCredentials_GetAccountAuthSecret_Response.verify|verify} messages.
         * @function encode
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @static
         * @param {ICCredentials_GetAccountAuthSecret_Response} message CCredentials_GetAccountAuthSecret_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_GetAccountAuthSecret_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.secret_id != null && message.hasOwnProperty("secret_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.secret_id);
            if (message.secret != null && message.hasOwnProperty("secret"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.secret);
            return writer;
        };
    
        /**
         * Encodes the specified CCredentials_GetAccountAuthSecret_Response message, length delimited. Does not implicitly {@link CCredentials_GetAccountAuthSecret_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @static
         * @param {ICCredentials_GetAccountAuthSecret_Response} message CCredentials_GetAccountAuthSecret_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCredentials_GetAccountAuthSecret_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCredentials_GetAccountAuthSecret_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCredentials_GetAccountAuthSecret_Response} CCredentials_GetAccountAuthSecret_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_GetAccountAuthSecret_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCredentials_GetAccountAuthSecret_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.secret_id = reader.int32();
                    break;
                case 2:
                    message.secret = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCredentials_GetAccountAuthSecret_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCredentials_GetAccountAuthSecret_Response} CCredentials_GetAccountAuthSecret_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCredentials_GetAccountAuthSecret_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCredentials_GetAccountAuthSecret_Response message.
         * @function verify
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCredentials_GetAccountAuthSecret_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.secret_id != null && message.hasOwnProperty("secret_id"))
                if (!$util.isInteger(message.secret_id))
                    return "secret_id: integer expected";
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!(message.secret && typeof message.secret.length === "number" || $util.isString(message.secret)))
                    return "secret: buffer expected";
            return null;
        };
    
        /**
         * Creates a CCredentials_GetAccountAuthSecret_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCredentials_GetAccountAuthSecret_Response} CCredentials_GetAccountAuthSecret_Response
         */
        CCredentials_GetAccountAuthSecret_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCredentials_GetAccountAuthSecret_Response)
                return object;
            var message = new $root.CCredentials_GetAccountAuthSecret_Response();
            if (object.secret_id != null)
                message.secret_id = object.secret_id | 0;
            if (object.secret != null)
                if (typeof object.secret === "string")
                    $util.base64.decode(object.secret, message.secret = $util.newBuffer($util.base64.length(object.secret)), 0);
                else if (object.secret.length)
                    message.secret = object.secret;
            return message;
        };
    
        /**
         * Creates a plain object from a CCredentials_GetAccountAuthSecret_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @static
         * @param {CCredentials_GetAccountAuthSecret_Response} message CCredentials_GetAccountAuthSecret_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCredentials_GetAccountAuthSecret_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.secret_id = 0;
                if (options.bytes === String)
                    object.secret = "";
                else {
                    object.secret = [];
                    if (options.bytes !== Array)
                        object.secret = $util.newBuffer(object.secret);
                }
            }
            if (message.secret_id != null && message.hasOwnProperty("secret_id"))
                object.secret_id = message.secret_id;
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = options.bytes === String ? $util.base64.encode(message.secret, 0, message.secret.length) : options.bytes === Array ? Array.prototype.slice.call(message.secret) : message.secret;
            return object;
        };
    
        /**
         * Converts this CCredentials_GetAccountAuthSecret_Response to JSON.
         * @function toJSON
         * @memberof CCredentials_GetAccountAuthSecret_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCredentials_GetAccountAuthSecret_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCredentials_GetAccountAuthSecret_Response;
    })();
    
    $root.Credentials = (function() {
    
        /**
         * Constructs a new Credentials service.
         * @exports Credentials
         * @classdesc Represents a Credentials
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Credentials(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Credentials.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Credentials;
    
        /**
         * Creates new Credentials service using the specified rpc implementation.
         * @function create
         * @memberof Credentials
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Credentials} RPC service. Useful where requests and/or responses are streamed.
         */
        Credentials.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Credentials#testAvailablePassword}.
         * @memberof Credentials
         * @typedef TestAvailablePasswordCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCredentials_TestAvailablePassword_Response} [response] CCredentials_TestAvailablePassword_Response
         */
    
        /**
         * Calls TestAvailablePassword.
         * @function testAvailablePassword
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_TestAvailablePassword_Request} request CCredentials_TestAvailablePassword_Request message or plain object
         * @param {Credentials.TestAvailablePasswordCallback} callback Node-style callback called with the error, if any, and CCredentials_TestAvailablePassword_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Credentials.prototype.testAvailablePassword = function testAvailablePassword(request, callback) {
            return this.rpcCall(testAvailablePassword, $root.CCredentials_TestAvailablePassword_Request, $root.CCredentials_TestAvailablePassword_Response, request, callback);
        }, "name", { value: "TestAvailablePassword" });
    
        /**
         * Calls TestAvailablePassword.
         * @function testAvailablePassword
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_TestAvailablePassword_Request} request CCredentials_TestAvailablePassword_Request message or plain object
         * @returns {Promise<CCredentials_TestAvailablePassword_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Credentials#getSteamGuardDetails}.
         * @memberof Credentials
         * @typedef GetSteamGuardDetailsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCredentials_GetSteamGuardDetails_Response} [response] CCredentials_GetSteamGuardDetails_Response
         */
    
        /**
         * Calls GetSteamGuardDetails.
         * @function getSteamGuardDetails
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_GetSteamGuardDetails_Request} request CCredentials_GetSteamGuardDetails_Request message or plain object
         * @param {Credentials.GetSteamGuardDetailsCallback} callback Node-style callback called with the error, if any, and CCredentials_GetSteamGuardDetails_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Credentials.prototype.getSteamGuardDetails = function getSteamGuardDetails(request, callback) {
            return this.rpcCall(getSteamGuardDetails, $root.CCredentials_GetSteamGuardDetails_Request, $root.CCredentials_GetSteamGuardDetails_Response, request, callback);
        }, "name", { value: "GetSteamGuardDetails" });
    
        /**
         * Calls GetSteamGuardDetails.
         * @function getSteamGuardDetails
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_GetSteamGuardDetails_Request} request CCredentials_GetSteamGuardDetails_Request message or plain object
         * @returns {Promise<CCredentials_GetSteamGuardDetails_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Credentials#newMachineNotificationDialogResult}.
         * @memberof Credentials
         * @typedef NewMachineNotificationDialogResultCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCredentials_NewMachineNotificationDialog_Response} [response] CCredentials_NewMachineNotificationDialog_Response
         */
    
        /**
         * Calls NewMachineNotificationDialogResult.
         * @function newMachineNotificationDialogResult
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_NewMachineNotificationDialog_Request} request CCredentials_NewMachineNotificationDialog_Request message or plain object
         * @param {Credentials.NewMachineNotificationDialogResultCallback} callback Node-style callback called with the error, if any, and CCredentials_NewMachineNotificationDialog_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Credentials.prototype.newMachineNotificationDialogResult = function newMachineNotificationDialogResult(request, callback) {
            return this.rpcCall(newMachineNotificationDialogResult, $root.CCredentials_NewMachineNotificationDialog_Request, $root.CCredentials_NewMachineNotificationDialog_Response, request, callback);
        }, "name", { value: "NewMachineNotificationDialogResult" });
    
        /**
         * Calls NewMachineNotificationDialogResult.
         * @function newMachineNotificationDialogResult
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_NewMachineNotificationDialog_Request} request CCredentials_NewMachineNotificationDialog_Request message or plain object
         * @returns {Promise<CCredentials_NewMachineNotificationDialog_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Credentials#validateEmailAddress}.
         * @memberof Credentials
         * @typedef ValidateEmailAddressCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCredentials_ValidateEmailAddress_Response} [response] CCredentials_ValidateEmailAddress_Response
         */
    
        /**
         * Calls ValidateEmailAddress.
         * @function validateEmailAddress
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_ValidateEmailAddress_Request} request CCredentials_ValidateEmailAddress_Request message or plain object
         * @param {Credentials.ValidateEmailAddressCallback} callback Node-style callback called with the error, if any, and CCredentials_ValidateEmailAddress_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Credentials.prototype.validateEmailAddress = function validateEmailAddress(request, callback) {
            return this.rpcCall(validateEmailAddress, $root.CCredentials_ValidateEmailAddress_Request, $root.CCredentials_ValidateEmailAddress_Response, request, callback);
        }, "name", { value: "ValidateEmailAddress" });
    
        /**
         * Calls ValidateEmailAddress.
         * @function validateEmailAddress
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_ValidateEmailAddress_Request} request CCredentials_ValidateEmailAddress_Request message or plain object
         * @returns {Promise<CCredentials_ValidateEmailAddress_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Credentials#steamGuardPhishingReport}.
         * @memberof Credentials
         * @typedef SteamGuardPhishingReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCredentials_SteamGuardPhishingReport_Response} [response] CCredentials_SteamGuardPhishingReport_Response
         */
    
        /**
         * Calls SteamGuardPhishingReport.
         * @function steamGuardPhishingReport
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_SteamGuardPhishingReport_Request} request CCredentials_SteamGuardPhishingReport_Request message or plain object
         * @param {Credentials.SteamGuardPhishingReportCallback} callback Node-style callback called with the error, if any, and CCredentials_SteamGuardPhishingReport_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Credentials.prototype.steamGuardPhishingReport = function steamGuardPhishingReport(request, callback) {
            return this.rpcCall(steamGuardPhishingReport, $root.CCredentials_SteamGuardPhishingReport_Request, $root.CCredentials_SteamGuardPhishingReport_Response, request, callback);
        }, "name", { value: "SteamGuardPhishingReport" });
    
        /**
         * Calls SteamGuardPhishingReport.
         * @function steamGuardPhishingReport
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_SteamGuardPhishingReport_Request} request CCredentials_SteamGuardPhishingReport_Request message or plain object
         * @returns {Promise<CCredentials_SteamGuardPhishingReport_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Credentials#getCredentialChangeTimeDetails}.
         * @memberof Credentials
         * @typedef GetCredentialChangeTimeDetailsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCredentials_LastCredentialChangeTime_Response} [response] CCredentials_LastCredentialChangeTime_Response
         */
    
        /**
         * Calls GetCredentialChangeTimeDetails.
         * @function getCredentialChangeTimeDetails
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_LastCredentialChangeTime_Request} request CCredentials_LastCredentialChangeTime_Request message or plain object
         * @param {Credentials.GetCredentialChangeTimeDetailsCallback} callback Node-style callback called with the error, if any, and CCredentials_LastCredentialChangeTime_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Credentials.prototype.getCredentialChangeTimeDetails = function getCredentialChangeTimeDetails(request, callback) {
            return this.rpcCall(getCredentialChangeTimeDetails, $root.CCredentials_LastCredentialChangeTime_Request, $root.CCredentials_LastCredentialChangeTime_Response, request, callback);
        }, "name", { value: "GetCredentialChangeTimeDetails" });
    
        /**
         * Calls GetCredentialChangeTimeDetails.
         * @function getCredentialChangeTimeDetails
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_LastCredentialChangeTime_Request} request CCredentials_LastCredentialChangeTime_Request message or plain object
         * @returns {Promise<CCredentials_LastCredentialChangeTime_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Credentials#getAccountAuthSecret}.
         * @memberof Credentials
         * @typedef GetAccountAuthSecretCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCredentials_GetAccountAuthSecret_Response} [response] CCredentials_GetAccountAuthSecret_Response
         */
    
        /**
         * Calls GetAccountAuthSecret.
         * @function getAccountAuthSecret
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_GetAccountAuthSecret_Request} request CCredentials_GetAccountAuthSecret_Request message or plain object
         * @param {Credentials.GetAccountAuthSecretCallback} callback Node-style callback called with the error, if any, and CCredentials_GetAccountAuthSecret_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Credentials.prototype.getAccountAuthSecret = function getAccountAuthSecret(request, callback) {
            return this.rpcCall(getAccountAuthSecret, $root.CCredentials_GetAccountAuthSecret_Request, $root.CCredentials_GetAccountAuthSecret_Response, request, callback);
        }, "name", { value: "GetAccountAuthSecret" });
    
        /**
         * Calls GetAccountAuthSecret.
         * @function getAccountAuthSecret
         * @memberof Credentials
         * @instance
         * @param {ICCredentials_GetAccountAuthSecret_Request} request CCredentials_GetAccountAuthSecret_Request message or plain object
         * @returns {Promise<CCredentials_GetAccountAuthSecret_Response>} Promise
         * @variation 2
         */
    
        return Credentials;
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
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.experimental_map_key);
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
                        object.experimental_map_key = "";
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
                    if (message.experimental_map_key != null && message.hasOwnProperty("experimental_map_key"))
                        object.experimental_map_key = message.experimental_map_key;
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
