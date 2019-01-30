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
    
    $root.ParentalApp = (function() {
    
        /**
         * Properties of a ParentalApp.
         * @exports IParentalApp
         * @interface IParentalApp
         * @property {number|null} [appid] ParentalApp appid
         * @property {boolean|null} [is_allowed] ParentalApp is_allowed
         */
    
        /**
         * Constructs a new ParentalApp.
         * @exports ParentalApp
         * @classdesc Represents a ParentalApp.
         * @implements IParentalApp
         * @constructor
         * @param {IParentalApp=} [properties] Properties to set
         */
        function ParentalApp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ParentalApp appid.
         * @member {number} appid
         * @memberof ParentalApp
         * @instance
         */
        ParentalApp.prototype.appid = 0;
    
        /**
         * ParentalApp is_allowed.
         * @member {boolean} is_allowed
         * @memberof ParentalApp
         * @instance
         */
        ParentalApp.prototype.is_allowed = false;
    
        /**
         * Creates a new ParentalApp instance using the specified properties.
         * @function create
         * @memberof ParentalApp
         * @static
         * @param {IParentalApp=} [properties] Properties to set
         * @returns {ParentalApp} ParentalApp instance
         */
        ParentalApp.create = function create(properties) {
            return new ParentalApp(properties);
        };
    
        /**
         * Encodes the specified ParentalApp message. Does not implicitly {@link ParentalApp.verify|verify} messages.
         * @function encode
         * @memberof ParentalApp
         * @static
         * @param {IParentalApp} message ParentalApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParentalApp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.is_allowed != null && message.hasOwnProperty("is_allowed"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_allowed);
            return writer;
        };
    
        /**
         * Encodes the specified ParentalApp message, length delimited. Does not implicitly {@link ParentalApp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ParentalApp
         * @static
         * @param {IParentalApp} message ParentalApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParentalApp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ParentalApp message from the specified reader or buffer.
         * @function decode
         * @memberof ParentalApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ParentalApp} ParentalApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParentalApp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ParentalApp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.is_allowed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ParentalApp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ParentalApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ParentalApp} ParentalApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParentalApp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ParentalApp message.
         * @function verify
         * @memberof ParentalApp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParentalApp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.is_allowed != null && message.hasOwnProperty("is_allowed"))
                if (typeof message.is_allowed !== "boolean")
                    return "is_allowed: boolean expected";
            return null;
        };
    
        /**
         * Creates a ParentalApp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ParentalApp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ParentalApp} ParentalApp
         */
        ParentalApp.fromObject = function fromObject(object) {
            if (object instanceof $root.ParentalApp)
                return object;
            var message = new $root.ParentalApp();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.is_allowed != null)
                message.is_allowed = Boolean(object.is_allowed);
            return message;
        };
    
        /**
         * Creates a plain object from a ParentalApp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ParentalApp
         * @static
         * @param {ParentalApp} message ParentalApp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParentalApp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.is_allowed = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.is_allowed != null && message.hasOwnProperty("is_allowed"))
                object.is_allowed = message.is_allowed;
            return object;
        };
    
        /**
         * Converts this ParentalApp to JSON.
         * @function toJSON
         * @memberof ParentalApp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParentalApp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ParentalApp;
    })();
    
    $root.ParentalSettings = (function() {
    
        /**
         * Properties of a ParentalSettings.
         * @exports IParentalSettings
         * @interface IParentalSettings
         * @property {number|Long|null} [steamid] ParentalSettings steamid
         * @property {number|null} [applist_base_id] ParentalSettings applist_base_id
         * @property {string|null} [applist_base_description] ParentalSettings applist_base_description
         * @property {Array.<IParentalApp>|null} [applist_base] ParentalSettings applist_base
         * @property {Array.<IParentalApp>|null} [applist_custom] ParentalSettings applist_custom
         * @property {number|null} [passwordhashtype] ParentalSettings passwordhashtype
         * @property {Uint8Array|null} [salt] ParentalSettings salt
         * @property {Uint8Array|null} [passwordhash] ParentalSettings passwordhash
         * @property {boolean|null} [is_enabled] ParentalSettings is_enabled
         * @property {number|null} [enabled_features] ParentalSettings enabled_features
         * @property {string|null} [recovery_email] ParentalSettings recovery_email
         */
    
        /**
         * Constructs a new ParentalSettings.
         * @exports ParentalSettings
         * @classdesc Represents a ParentalSettings.
         * @implements IParentalSettings
         * @constructor
         * @param {IParentalSettings=} [properties] Properties to set
         */
        function ParentalSettings(properties) {
            this.applist_base = [];
            this.applist_custom = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ParentalSettings steamid.
         * @member {number|Long} steamid
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * ParentalSettings applist_base_id.
         * @member {number} applist_base_id
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.applist_base_id = 0;
    
        /**
         * ParentalSettings applist_base_description.
         * @member {string} applist_base_description
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.applist_base_description = "";
    
        /**
         * ParentalSettings applist_base.
         * @member {Array.<IParentalApp>} applist_base
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.applist_base = $util.emptyArray;
    
        /**
         * ParentalSettings applist_custom.
         * @member {Array.<IParentalApp>} applist_custom
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.applist_custom = $util.emptyArray;
    
        /**
         * ParentalSettings passwordhashtype.
         * @member {number} passwordhashtype
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.passwordhashtype = 0;
    
        /**
         * ParentalSettings salt.
         * @member {Uint8Array} salt
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.salt = $util.newBuffer([]);
    
        /**
         * ParentalSettings passwordhash.
         * @member {Uint8Array} passwordhash
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.passwordhash = $util.newBuffer([]);
    
        /**
         * ParentalSettings is_enabled.
         * @member {boolean} is_enabled
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.is_enabled = false;
    
        /**
         * ParentalSettings enabled_features.
         * @member {number} enabled_features
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.enabled_features = 0;
    
        /**
         * ParentalSettings recovery_email.
         * @member {string} recovery_email
         * @memberof ParentalSettings
         * @instance
         */
        ParentalSettings.prototype.recovery_email = "";
    
        /**
         * Creates a new ParentalSettings instance using the specified properties.
         * @function create
         * @memberof ParentalSettings
         * @static
         * @param {IParentalSettings=} [properties] Properties to set
         * @returns {ParentalSettings} ParentalSettings instance
         */
        ParentalSettings.create = function create(properties) {
            return new ParentalSettings(properties);
        };
    
        /**
         * Encodes the specified ParentalSettings message. Does not implicitly {@link ParentalSettings.verify|verify} messages.
         * @function encode
         * @memberof ParentalSettings
         * @static
         * @param {IParentalSettings} message ParentalSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParentalSettings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.applist_base_id != null && message.hasOwnProperty("applist_base_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.applist_base_id);
            if (message.applist_base_description != null && message.hasOwnProperty("applist_base_description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.applist_base_description);
            if (message.applist_base != null && message.applist_base.length)
                for (var i = 0; i < message.applist_base.length; ++i)
                    $root.ParentalApp.encode(message.applist_base[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.applist_custom != null && message.applist_custom.length)
                for (var i = 0; i < message.applist_custom.length; ++i)
                    $root.ParentalApp.encode(message.applist_custom[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.passwordhashtype != null && message.hasOwnProperty("passwordhashtype"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.passwordhashtype);
            if (message.salt != null && message.hasOwnProperty("salt"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.salt);
            if (message.passwordhash != null && message.hasOwnProperty("passwordhash"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.passwordhash);
            if (message.is_enabled != null && message.hasOwnProperty("is_enabled"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.is_enabled);
            if (message.enabled_features != null && message.hasOwnProperty("enabled_features"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.enabled_features);
            if (message.recovery_email != null && message.hasOwnProperty("recovery_email"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.recovery_email);
            return writer;
        };
    
        /**
         * Encodes the specified ParentalSettings message, length delimited. Does not implicitly {@link ParentalSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ParentalSettings
         * @static
         * @param {IParentalSettings} message ParentalSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParentalSettings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ParentalSettings message from the specified reader or buffer.
         * @function decode
         * @memberof ParentalSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ParentalSettings} ParentalSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParentalSettings.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ParentalSettings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.applist_base_id = reader.uint32();
                    break;
                case 3:
                    message.applist_base_description = reader.string();
                    break;
                case 4:
                    if (!(message.applist_base && message.applist_base.length))
                        message.applist_base = [];
                    message.applist_base.push($root.ParentalApp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.applist_custom && message.applist_custom.length))
                        message.applist_custom = [];
                    message.applist_custom.push($root.ParentalApp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.passwordhashtype = reader.uint32();
                    break;
                case 7:
                    message.salt = reader.bytes();
                    break;
                case 8:
                    message.passwordhash = reader.bytes();
                    break;
                case 9:
                    message.is_enabled = reader.bool();
                    break;
                case 10:
                    message.enabled_features = reader.uint32();
                    break;
                case 11:
                    message.recovery_email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ParentalSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ParentalSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ParentalSettings} ParentalSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParentalSettings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ParentalSettings message.
         * @function verify
         * @memberof ParentalSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParentalSettings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.applist_base_id != null && message.hasOwnProperty("applist_base_id"))
                if (!$util.isInteger(message.applist_base_id))
                    return "applist_base_id: integer expected";
            if (message.applist_base_description != null && message.hasOwnProperty("applist_base_description"))
                if (!$util.isString(message.applist_base_description))
                    return "applist_base_description: string expected";
            if (message.applist_base != null && message.hasOwnProperty("applist_base")) {
                if (!Array.isArray(message.applist_base))
                    return "applist_base: array expected";
                for (var i = 0; i < message.applist_base.length; ++i) {
                    var error = $root.ParentalApp.verify(message.applist_base[i]);
                    if (error)
                        return "applist_base." + error;
                }
            }
            if (message.applist_custom != null && message.hasOwnProperty("applist_custom")) {
                if (!Array.isArray(message.applist_custom))
                    return "applist_custom: array expected";
                for (var i = 0; i < message.applist_custom.length; ++i) {
                    var error = $root.ParentalApp.verify(message.applist_custom[i]);
                    if (error)
                        return "applist_custom." + error;
                }
            }
            if (message.passwordhashtype != null && message.hasOwnProperty("passwordhashtype"))
                if (!$util.isInteger(message.passwordhashtype))
                    return "passwordhashtype: integer expected";
            if (message.salt != null && message.hasOwnProperty("salt"))
                if (!(message.salt && typeof message.salt.length === "number" || $util.isString(message.salt)))
                    return "salt: buffer expected";
            if (message.passwordhash != null && message.hasOwnProperty("passwordhash"))
                if (!(message.passwordhash && typeof message.passwordhash.length === "number" || $util.isString(message.passwordhash)))
                    return "passwordhash: buffer expected";
            if (message.is_enabled != null && message.hasOwnProperty("is_enabled"))
                if (typeof message.is_enabled !== "boolean")
                    return "is_enabled: boolean expected";
            if (message.enabled_features != null && message.hasOwnProperty("enabled_features"))
                if (!$util.isInteger(message.enabled_features))
                    return "enabled_features: integer expected";
            if (message.recovery_email != null && message.hasOwnProperty("recovery_email"))
                if (!$util.isString(message.recovery_email))
                    return "recovery_email: string expected";
            return null;
        };
    
        /**
         * Creates a ParentalSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ParentalSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ParentalSettings} ParentalSettings
         */
        ParentalSettings.fromObject = function fromObject(object) {
            if (object instanceof $root.ParentalSettings)
                return object;
            var message = new $root.ParentalSettings();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.applist_base_id != null)
                message.applist_base_id = object.applist_base_id >>> 0;
            if (object.applist_base_description != null)
                message.applist_base_description = String(object.applist_base_description);
            if (object.applist_base) {
                if (!Array.isArray(object.applist_base))
                    throw TypeError(".ParentalSettings.applist_base: array expected");
                message.applist_base = [];
                for (var i = 0; i < object.applist_base.length; ++i) {
                    if (typeof object.applist_base[i] !== "object")
                        throw TypeError(".ParentalSettings.applist_base: object expected");
                    message.applist_base[i] = $root.ParentalApp.fromObject(object.applist_base[i]);
                }
            }
            if (object.applist_custom) {
                if (!Array.isArray(object.applist_custom))
                    throw TypeError(".ParentalSettings.applist_custom: array expected");
                message.applist_custom = [];
                for (var i = 0; i < object.applist_custom.length; ++i) {
                    if (typeof object.applist_custom[i] !== "object")
                        throw TypeError(".ParentalSettings.applist_custom: object expected");
                    message.applist_custom[i] = $root.ParentalApp.fromObject(object.applist_custom[i]);
                }
            }
            if (object.passwordhashtype != null)
                message.passwordhashtype = object.passwordhashtype >>> 0;
            if (object.salt != null)
                if (typeof object.salt === "string")
                    $util.base64.decode(object.salt, message.salt = $util.newBuffer($util.base64.length(object.salt)), 0);
                else if (object.salt.length)
                    message.salt = object.salt;
            if (object.passwordhash != null)
                if (typeof object.passwordhash === "string")
                    $util.base64.decode(object.passwordhash, message.passwordhash = $util.newBuffer($util.base64.length(object.passwordhash)), 0);
                else if (object.passwordhash.length)
                    message.passwordhash = object.passwordhash;
            if (object.is_enabled != null)
                message.is_enabled = Boolean(object.is_enabled);
            if (object.enabled_features != null)
                message.enabled_features = object.enabled_features >>> 0;
            if (object.recovery_email != null)
                message.recovery_email = String(object.recovery_email);
            return message;
        };
    
        /**
         * Creates a plain object from a ParentalSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ParentalSettings
         * @static
         * @param {ParentalSettings} message ParentalSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParentalSettings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.applist_base = [];
                object.applist_custom = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.applist_base_id = 0;
                object.applist_base_description = "";
                object.passwordhashtype = 0;
                if (options.bytes === String)
                    object.salt = "";
                else {
                    object.salt = [];
                    if (options.bytes !== Array)
                        object.salt = $util.newBuffer(object.salt);
                }
                if (options.bytes === String)
                    object.passwordhash = "";
                else {
                    object.passwordhash = [];
                    if (options.bytes !== Array)
                        object.passwordhash = $util.newBuffer(object.passwordhash);
                }
                object.is_enabled = false;
                object.enabled_features = 0;
                object.recovery_email = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.applist_base_id != null && message.hasOwnProperty("applist_base_id"))
                object.applist_base_id = message.applist_base_id;
            if (message.applist_base_description != null && message.hasOwnProperty("applist_base_description"))
                object.applist_base_description = message.applist_base_description;
            if (message.applist_base && message.applist_base.length) {
                object.applist_base = [];
                for (var j = 0; j < message.applist_base.length; ++j)
                    object.applist_base[j] = $root.ParentalApp.toObject(message.applist_base[j], options);
            }
            if (message.applist_custom && message.applist_custom.length) {
                object.applist_custom = [];
                for (var j = 0; j < message.applist_custom.length; ++j)
                    object.applist_custom[j] = $root.ParentalApp.toObject(message.applist_custom[j], options);
            }
            if (message.passwordhashtype != null && message.hasOwnProperty("passwordhashtype"))
                object.passwordhashtype = message.passwordhashtype;
            if (message.salt != null && message.hasOwnProperty("salt"))
                object.salt = options.bytes === String ? $util.base64.encode(message.salt, 0, message.salt.length) : options.bytes === Array ? Array.prototype.slice.call(message.salt) : message.salt;
            if (message.passwordhash != null && message.hasOwnProperty("passwordhash"))
                object.passwordhash = options.bytes === String ? $util.base64.encode(message.passwordhash, 0, message.passwordhash.length) : options.bytes === Array ? Array.prototype.slice.call(message.passwordhash) : message.passwordhash;
            if (message.is_enabled != null && message.hasOwnProperty("is_enabled"))
                object.is_enabled = message.is_enabled;
            if (message.enabled_features != null && message.hasOwnProperty("enabled_features"))
                object.enabled_features = message.enabled_features;
            if (message.recovery_email != null && message.hasOwnProperty("recovery_email"))
                object.recovery_email = message.recovery_email;
            return object;
        };
    
        /**
         * Converts this ParentalSettings to JSON.
         * @function toJSON
         * @memberof ParentalSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParentalSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ParentalSettings;
    })();
    
    $root.CParental_EnableParentalSettings_Request = (function() {
    
        /**
         * Properties of a CParental_EnableParentalSettings_Request.
         * @exports ICParental_EnableParentalSettings_Request
         * @interface ICParental_EnableParentalSettings_Request
         * @property {string|null} [password] CParental_EnableParentalSettings_Request password
         * @property {IParentalSettings|null} [settings] CParental_EnableParentalSettings_Request settings
         * @property {string|null} [sessionid] CParental_EnableParentalSettings_Request sessionid
         * @property {number|null} [enablecode] CParental_EnableParentalSettings_Request enablecode
         * @property {number|Long|null} [steamid] CParental_EnableParentalSettings_Request steamid
         */
    
        /**
         * Constructs a new CParental_EnableParentalSettings_Request.
         * @exports CParental_EnableParentalSettings_Request
         * @classdesc Represents a CParental_EnableParentalSettings_Request.
         * @implements ICParental_EnableParentalSettings_Request
         * @constructor
         * @param {ICParental_EnableParentalSettings_Request=} [properties] Properties to set
         */
        function CParental_EnableParentalSettings_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_EnableParentalSettings_Request password.
         * @member {string} password
         * @memberof CParental_EnableParentalSettings_Request
         * @instance
         */
        CParental_EnableParentalSettings_Request.prototype.password = "";
    
        /**
         * CParental_EnableParentalSettings_Request settings.
         * @member {IParentalSettings|null|undefined} settings
         * @memberof CParental_EnableParentalSettings_Request
         * @instance
         */
        CParental_EnableParentalSettings_Request.prototype.settings = null;
    
        /**
         * CParental_EnableParentalSettings_Request sessionid.
         * @member {string} sessionid
         * @memberof CParental_EnableParentalSettings_Request
         * @instance
         */
        CParental_EnableParentalSettings_Request.prototype.sessionid = "";
    
        /**
         * CParental_EnableParentalSettings_Request enablecode.
         * @member {number} enablecode
         * @memberof CParental_EnableParentalSettings_Request
         * @instance
         */
        CParental_EnableParentalSettings_Request.prototype.enablecode = 0;
    
        /**
         * CParental_EnableParentalSettings_Request steamid.
         * @member {number|Long} steamid
         * @memberof CParental_EnableParentalSettings_Request
         * @instance
         */
        CParental_EnableParentalSettings_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CParental_EnableParentalSettings_Request instance using the specified properties.
         * @function create
         * @memberof CParental_EnableParentalSettings_Request
         * @static
         * @param {ICParental_EnableParentalSettings_Request=} [properties] Properties to set
         * @returns {CParental_EnableParentalSettings_Request} CParental_EnableParentalSettings_Request instance
         */
        CParental_EnableParentalSettings_Request.create = function create(properties) {
            return new CParental_EnableParentalSettings_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_EnableParentalSettings_Request message. Does not implicitly {@link CParental_EnableParentalSettings_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_EnableParentalSettings_Request
         * @static
         * @param {ICParental_EnableParentalSettings_Request} message CParental_EnableParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_EnableParentalSettings_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.password);
            if (message.settings != null && message.hasOwnProperty("settings"))
                $root.ParentalSettings.encode(message.settings, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sessionid);
            if (message.enablecode != null && message.hasOwnProperty("enablecode"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.enablecode);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_EnableParentalSettings_Request message, length delimited. Does not implicitly {@link CParental_EnableParentalSettings_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_EnableParentalSettings_Request
         * @static
         * @param {ICParental_EnableParentalSettings_Request} message CParental_EnableParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_EnableParentalSettings_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_EnableParentalSettings_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_EnableParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_EnableParentalSettings_Request} CParental_EnableParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_EnableParentalSettings_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_EnableParentalSettings_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                case 2:
                    message.settings = $root.ParentalSettings.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sessionid = reader.string();
                    break;
                case 4:
                    message.enablecode = reader.uint32();
                    break;
                case 10:
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
         * Decodes a CParental_EnableParentalSettings_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_EnableParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_EnableParentalSettings_Request} CParental_EnableParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_EnableParentalSettings_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_EnableParentalSettings_Request message.
         * @function verify
         * @memberof CParental_EnableParentalSettings_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_EnableParentalSettings_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.ParentalSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isString(message.sessionid))
                    return "sessionid: string expected";
            if (message.enablecode != null && message.hasOwnProperty("enablecode"))
                if (!$util.isInteger(message.enablecode))
                    return "enablecode: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CParental_EnableParentalSettings_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_EnableParentalSettings_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_EnableParentalSettings_Request} CParental_EnableParentalSettings_Request
         */
        CParental_EnableParentalSettings_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_EnableParentalSettings_Request)
                return object;
            var message = new $root.CParental_EnableParentalSettings_Request();
            if (object.password != null)
                message.password = String(object.password);
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".CParental_EnableParentalSettings_Request.settings: object expected");
                message.settings = $root.ParentalSettings.fromObject(object.settings);
            }
            if (object.sessionid != null)
                message.sessionid = String(object.sessionid);
            if (object.enablecode != null)
                message.enablecode = object.enablecode >>> 0;
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
         * Creates a plain object from a CParental_EnableParentalSettings_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_EnableParentalSettings_Request
         * @static
         * @param {CParental_EnableParentalSettings_Request} message CParental_EnableParentalSettings_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_EnableParentalSettings_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.password = "";
                object.settings = null;
                object.sessionid = "";
                object.enablecode = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.ParentalSettings.toObject(message.settings, options);
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                object.sessionid = message.sessionid;
            if (message.enablecode != null && message.hasOwnProperty("enablecode"))
                object.enablecode = message.enablecode;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CParental_EnableParentalSettings_Request to JSON.
         * @function toJSON
         * @memberof CParental_EnableParentalSettings_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_EnableParentalSettings_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_EnableParentalSettings_Request;
    })();
    
    $root.CParental_EnableParentalSettings_Response = (function() {
    
        /**
         * Properties of a CParental_EnableParentalSettings_Response.
         * @exports ICParental_EnableParentalSettings_Response
         * @interface ICParental_EnableParentalSettings_Response
         */
    
        /**
         * Constructs a new CParental_EnableParentalSettings_Response.
         * @exports CParental_EnableParentalSettings_Response
         * @classdesc Represents a CParental_EnableParentalSettings_Response.
         * @implements ICParental_EnableParentalSettings_Response
         * @constructor
         * @param {ICParental_EnableParentalSettings_Response=} [properties] Properties to set
         */
        function CParental_EnableParentalSettings_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CParental_EnableParentalSettings_Response instance using the specified properties.
         * @function create
         * @memberof CParental_EnableParentalSettings_Response
         * @static
         * @param {ICParental_EnableParentalSettings_Response=} [properties] Properties to set
         * @returns {CParental_EnableParentalSettings_Response} CParental_EnableParentalSettings_Response instance
         */
        CParental_EnableParentalSettings_Response.create = function create(properties) {
            return new CParental_EnableParentalSettings_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_EnableParentalSettings_Response message. Does not implicitly {@link CParental_EnableParentalSettings_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_EnableParentalSettings_Response
         * @static
         * @param {ICParental_EnableParentalSettings_Response} message CParental_EnableParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_EnableParentalSettings_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_EnableParentalSettings_Response message, length delimited. Does not implicitly {@link CParental_EnableParentalSettings_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_EnableParentalSettings_Response
         * @static
         * @param {ICParental_EnableParentalSettings_Response} message CParental_EnableParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_EnableParentalSettings_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_EnableParentalSettings_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_EnableParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_EnableParentalSettings_Response} CParental_EnableParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_EnableParentalSettings_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_EnableParentalSettings_Response();
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
         * Decodes a CParental_EnableParentalSettings_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_EnableParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_EnableParentalSettings_Response} CParental_EnableParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_EnableParentalSettings_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_EnableParentalSettings_Response message.
         * @function verify
         * @memberof CParental_EnableParentalSettings_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_EnableParentalSettings_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CParental_EnableParentalSettings_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_EnableParentalSettings_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_EnableParentalSettings_Response} CParental_EnableParentalSettings_Response
         */
        CParental_EnableParentalSettings_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_EnableParentalSettings_Response)
                return object;
            return new $root.CParental_EnableParentalSettings_Response();
        };
    
        /**
         * Creates a plain object from a CParental_EnableParentalSettings_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_EnableParentalSettings_Response
         * @static
         * @param {CParental_EnableParentalSettings_Response} message CParental_EnableParentalSettings_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_EnableParentalSettings_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CParental_EnableParentalSettings_Response to JSON.
         * @function toJSON
         * @memberof CParental_EnableParentalSettings_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_EnableParentalSettings_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_EnableParentalSettings_Response;
    })();
    
    $root.CParental_DisableParentalSettings_Request = (function() {
    
        /**
         * Properties of a CParental_DisableParentalSettings_Request.
         * @exports ICParental_DisableParentalSettings_Request
         * @interface ICParental_DisableParentalSettings_Request
         * @property {string|null} [password] CParental_DisableParentalSettings_Request password
         * @property {number|Long|null} [steamid] CParental_DisableParentalSettings_Request steamid
         */
    
        /**
         * Constructs a new CParental_DisableParentalSettings_Request.
         * @exports CParental_DisableParentalSettings_Request
         * @classdesc Represents a CParental_DisableParentalSettings_Request.
         * @implements ICParental_DisableParentalSettings_Request
         * @constructor
         * @param {ICParental_DisableParentalSettings_Request=} [properties] Properties to set
         */
        function CParental_DisableParentalSettings_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_DisableParentalSettings_Request password.
         * @member {string} password
         * @memberof CParental_DisableParentalSettings_Request
         * @instance
         */
        CParental_DisableParentalSettings_Request.prototype.password = "";
    
        /**
         * CParental_DisableParentalSettings_Request steamid.
         * @member {number|Long} steamid
         * @memberof CParental_DisableParentalSettings_Request
         * @instance
         */
        CParental_DisableParentalSettings_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CParental_DisableParentalSettings_Request instance using the specified properties.
         * @function create
         * @memberof CParental_DisableParentalSettings_Request
         * @static
         * @param {ICParental_DisableParentalSettings_Request=} [properties] Properties to set
         * @returns {CParental_DisableParentalSettings_Request} CParental_DisableParentalSettings_Request instance
         */
        CParental_DisableParentalSettings_Request.create = function create(properties) {
            return new CParental_DisableParentalSettings_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_DisableParentalSettings_Request message. Does not implicitly {@link CParental_DisableParentalSettings_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_DisableParentalSettings_Request
         * @static
         * @param {ICParental_DisableParentalSettings_Request} message CParental_DisableParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_DisableParentalSettings_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.password);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_DisableParentalSettings_Request message, length delimited. Does not implicitly {@link CParental_DisableParentalSettings_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_DisableParentalSettings_Request
         * @static
         * @param {ICParental_DisableParentalSettings_Request} message CParental_DisableParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_DisableParentalSettings_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_DisableParentalSettings_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_DisableParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_DisableParentalSettings_Request} CParental_DisableParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_DisableParentalSettings_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_DisableParentalSettings_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                case 10:
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
         * Decodes a CParental_DisableParentalSettings_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_DisableParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_DisableParentalSettings_Request} CParental_DisableParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_DisableParentalSettings_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_DisableParentalSettings_Request message.
         * @function verify
         * @memberof CParental_DisableParentalSettings_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_DisableParentalSettings_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CParental_DisableParentalSettings_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_DisableParentalSettings_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_DisableParentalSettings_Request} CParental_DisableParentalSettings_Request
         */
        CParental_DisableParentalSettings_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_DisableParentalSettings_Request)
                return object;
            var message = new $root.CParental_DisableParentalSettings_Request();
            if (object.password != null)
                message.password = String(object.password);
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
         * Creates a plain object from a CParental_DisableParentalSettings_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_DisableParentalSettings_Request
         * @static
         * @param {CParental_DisableParentalSettings_Request} message CParental_DisableParentalSettings_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_DisableParentalSettings_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.password = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CParental_DisableParentalSettings_Request to JSON.
         * @function toJSON
         * @memberof CParental_DisableParentalSettings_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_DisableParentalSettings_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_DisableParentalSettings_Request;
    })();
    
    $root.CParental_DisableParentalSettings_Response = (function() {
    
        /**
         * Properties of a CParental_DisableParentalSettings_Response.
         * @exports ICParental_DisableParentalSettings_Response
         * @interface ICParental_DisableParentalSettings_Response
         */
    
        /**
         * Constructs a new CParental_DisableParentalSettings_Response.
         * @exports CParental_DisableParentalSettings_Response
         * @classdesc Represents a CParental_DisableParentalSettings_Response.
         * @implements ICParental_DisableParentalSettings_Response
         * @constructor
         * @param {ICParental_DisableParentalSettings_Response=} [properties] Properties to set
         */
        function CParental_DisableParentalSettings_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CParental_DisableParentalSettings_Response instance using the specified properties.
         * @function create
         * @memberof CParental_DisableParentalSettings_Response
         * @static
         * @param {ICParental_DisableParentalSettings_Response=} [properties] Properties to set
         * @returns {CParental_DisableParentalSettings_Response} CParental_DisableParentalSettings_Response instance
         */
        CParental_DisableParentalSettings_Response.create = function create(properties) {
            return new CParental_DisableParentalSettings_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_DisableParentalSettings_Response message. Does not implicitly {@link CParental_DisableParentalSettings_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_DisableParentalSettings_Response
         * @static
         * @param {ICParental_DisableParentalSettings_Response} message CParental_DisableParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_DisableParentalSettings_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_DisableParentalSettings_Response message, length delimited. Does not implicitly {@link CParental_DisableParentalSettings_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_DisableParentalSettings_Response
         * @static
         * @param {ICParental_DisableParentalSettings_Response} message CParental_DisableParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_DisableParentalSettings_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_DisableParentalSettings_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_DisableParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_DisableParentalSettings_Response} CParental_DisableParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_DisableParentalSettings_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_DisableParentalSettings_Response();
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
         * Decodes a CParental_DisableParentalSettings_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_DisableParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_DisableParentalSettings_Response} CParental_DisableParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_DisableParentalSettings_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_DisableParentalSettings_Response message.
         * @function verify
         * @memberof CParental_DisableParentalSettings_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_DisableParentalSettings_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CParental_DisableParentalSettings_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_DisableParentalSettings_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_DisableParentalSettings_Response} CParental_DisableParentalSettings_Response
         */
        CParental_DisableParentalSettings_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_DisableParentalSettings_Response)
                return object;
            return new $root.CParental_DisableParentalSettings_Response();
        };
    
        /**
         * Creates a plain object from a CParental_DisableParentalSettings_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_DisableParentalSettings_Response
         * @static
         * @param {CParental_DisableParentalSettings_Response} message CParental_DisableParentalSettings_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_DisableParentalSettings_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CParental_DisableParentalSettings_Response to JSON.
         * @function toJSON
         * @memberof CParental_DisableParentalSettings_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_DisableParentalSettings_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_DisableParentalSettings_Response;
    })();
    
    $root.CParental_GetParentalSettings_Request = (function() {
    
        /**
         * Properties of a CParental_GetParentalSettings_Request.
         * @exports ICParental_GetParentalSettings_Request
         * @interface ICParental_GetParentalSettings_Request
         * @property {number|Long|null} [steamid] CParental_GetParentalSettings_Request steamid
         */
    
        /**
         * Constructs a new CParental_GetParentalSettings_Request.
         * @exports CParental_GetParentalSettings_Request
         * @classdesc Represents a CParental_GetParentalSettings_Request.
         * @implements ICParental_GetParentalSettings_Request
         * @constructor
         * @param {ICParental_GetParentalSettings_Request=} [properties] Properties to set
         */
        function CParental_GetParentalSettings_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_GetParentalSettings_Request steamid.
         * @member {number|Long} steamid
         * @memberof CParental_GetParentalSettings_Request
         * @instance
         */
        CParental_GetParentalSettings_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CParental_GetParentalSettings_Request instance using the specified properties.
         * @function create
         * @memberof CParental_GetParentalSettings_Request
         * @static
         * @param {ICParental_GetParentalSettings_Request=} [properties] Properties to set
         * @returns {CParental_GetParentalSettings_Request} CParental_GetParentalSettings_Request instance
         */
        CParental_GetParentalSettings_Request.create = function create(properties) {
            return new CParental_GetParentalSettings_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_GetParentalSettings_Request message. Does not implicitly {@link CParental_GetParentalSettings_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_GetParentalSettings_Request
         * @static
         * @param {ICParental_GetParentalSettings_Request} message CParental_GetParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_GetParentalSettings_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_GetParentalSettings_Request message, length delimited. Does not implicitly {@link CParental_GetParentalSettings_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_GetParentalSettings_Request
         * @static
         * @param {ICParental_GetParentalSettings_Request} message CParental_GetParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_GetParentalSettings_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_GetParentalSettings_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_GetParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_GetParentalSettings_Request} CParental_GetParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_GetParentalSettings_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_GetParentalSettings_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
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
         * Decodes a CParental_GetParentalSettings_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_GetParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_GetParentalSettings_Request} CParental_GetParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_GetParentalSettings_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_GetParentalSettings_Request message.
         * @function verify
         * @memberof CParental_GetParentalSettings_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_GetParentalSettings_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CParental_GetParentalSettings_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_GetParentalSettings_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_GetParentalSettings_Request} CParental_GetParentalSettings_Request
         */
        CParental_GetParentalSettings_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_GetParentalSettings_Request)
                return object;
            var message = new $root.CParental_GetParentalSettings_Request();
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
         * Creates a plain object from a CParental_GetParentalSettings_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_GetParentalSettings_Request
         * @static
         * @param {CParental_GetParentalSettings_Request} message CParental_GetParentalSettings_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_GetParentalSettings_Request.toObject = function toObject(message, options) {
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
         * Converts this CParental_GetParentalSettings_Request to JSON.
         * @function toJSON
         * @memberof CParental_GetParentalSettings_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_GetParentalSettings_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_GetParentalSettings_Request;
    })();
    
    $root.CParental_GetParentalSettings_Response = (function() {
    
        /**
         * Properties of a CParental_GetParentalSettings_Response.
         * @exports ICParental_GetParentalSettings_Response
         * @interface ICParental_GetParentalSettings_Response
         * @property {IParentalSettings|null} [settings] CParental_GetParentalSettings_Response settings
         */
    
        /**
         * Constructs a new CParental_GetParentalSettings_Response.
         * @exports CParental_GetParentalSettings_Response
         * @classdesc Represents a CParental_GetParentalSettings_Response.
         * @implements ICParental_GetParentalSettings_Response
         * @constructor
         * @param {ICParental_GetParentalSettings_Response=} [properties] Properties to set
         */
        function CParental_GetParentalSettings_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_GetParentalSettings_Response settings.
         * @member {IParentalSettings|null|undefined} settings
         * @memberof CParental_GetParentalSettings_Response
         * @instance
         */
        CParental_GetParentalSettings_Response.prototype.settings = null;
    
        /**
         * Creates a new CParental_GetParentalSettings_Response instance using the specified properties.
         * @function create
         * @memberof CParental_GetParentalSettings_Response
         * @static
         * @param {ICParental_GetParentalSettings_Response=} [properties] Properties to set
         * @returns {CParental_GetParentalSettings_Response} CParental_GetParentalSettings_Response instance
         */
        CParental_GetParentalSettings_Response.create = function create(properties) {
            return new CParental_GetParentalSettings_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_GetParentalSettings_Response message. Does not implicitly {@link CParental_GetParentalSettings_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_GetParentalSettings_Response
         * @static
         * @param {ICParental_GetParentalSettings_Response} message CParental_GetParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_GetParentalSettings_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.settings != null && message.hasOwnProperty("settings"))
                $root.ParentalSettings.encode(message.settings, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_GetParentalSettings_Response message, length delimited. Does not implicitly {@link CParental_GetParentalSettings_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_GetParentalSettings_Response
         * @static
         * @param {ICParental_GetParentalSettings_Response} message CParental_GetParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_GetParentalSettings_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_GetParentalSettings_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_GetParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_GetParentalSettings_Response} CParental_GetParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_GetParentalSettings_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_GetParentalSettings_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.settings = $root.ParentalSettings.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_GetParentalSettings_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_GetParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_GetParentalSettings_Response} CParental_GetParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_GetParentalSettings_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_GetParentalSettings_Response message.
         * @function verify
         * @memberof CParental_GetParentalSettings_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_GetParentalSettings_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.ParentalSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            return null;
        };
    
        /**
         * Creates a CParental_GetParentalSettings_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_GetParentalSettings_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_GetParentalSettings_Response} CParental_GetParentalSettings_Response
         */
        CParental_GetParentalSettings_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_GetParentalSettings_Response)
                return object;
            var message = new $root.CParental_GetParentalSettings_Response();
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".CParental_GetParentalSettings_Response.settings: object expected");
                message.settings = $root.ParentalSettings.fromObject(object.settings);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_GetParentalSettings_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_GetParentalSettings_Response
         * @static
         * @param {CParental_GetParentalSettings_Response} message CParental_GetParentalSettings_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_GetParentalSettings_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.settings = null;
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.ParentalSettings.toObject(message.settings, options);
            return object;
        };
    
        /**
         * Converts this CParental_GetParentalSettings_Response to JSON.
         * @function toJSON
         * @memberof CParental_GetParentalSettings_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_GetParentalSettings_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_GetParentalSettings_Response;
    })();
    
    $root.CParental_GetSignedParentalSettings_Request = (function() {
    
        /**
         * Properties of a CParental_GetSignedParentalSettings_Request.
         * @exports ICParental_GetSignedParentalSettings_Request
         * @interface ICParental_GetSignedParentalSettings_Request
         * @property {number|null} [priority] CParental_GetSignedParentalSettings_Request priority
         */
    
        /**
         * Constructs a new CParental_GetSignedParentalSettings_Request.
         * @exports CParental_GetSignedParentalSettings_Request
         * @classdesc Represents a CParental_GetSignedParentalSettings_Request.
         * @implements ICParental_GetSignedParentalSettings_Request
         * @constructor
         * @param {ICParental_GetSignedParentalSettings_Request=} [properties] Properties to set
         */
        function CParental_GetSignedParentalSettings_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_GetSignedParentalSettings_Request priority.
         * @member {number} priority
         * @memberof CParental_GetSignedParentalSettings_Request
         * @instance
         */
        CParental_GetSignedParentalSettings_Request.prototype.priority = 0;
    
        /**
         * Creates a new CParental_GetSignedParentalSettings_Request instance using the specified properties.
         * @function create
         * @memberof CParental_GetSignedParentalSettings_Request
         * @static
         * @param {ICParental_GetSignedParentalSettings_Request=} [properties] Properties to set
         * @returns {CParental_GetSignedParentalSettings_Request} CParental_GetSignedParentalSettings_Request instance
         */
        CParental_GetSignedParentalSettings_Request.create = function create(properties) {
            return new CParental_GetSignedParentalSettings_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_GetSignedParentalSettings_Request message. Does not implicitly {@link CParental_GetSignedParentalSettings_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_GetSignedParentalSettings_Request
         * @static
         * @param {ICParental_GetSignedParentalSettings_Request} message CParental_GetSignedParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_GetSignedParentalSettings_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.priority != null && message.hasOwnProperty("priority"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.priority);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_GetSignedParentalSettings_Request message, length delimited. Does not implicitly {@link CParental_GetSignedParentalSettings_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_GetSignedParentalSettings_Request
         * @static
         * @param {ICParental_GetSignedParentalSettings_Request} message CParental_GetSignedParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_GetSignedParentalSettings_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_GetSignedParentalSettings_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_GetSignedParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_GetSignedParentalSettings_Request} CParental_GetSignedParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_GetSignedParentalSettings_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_GetSignedParentalSettings_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.priority = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_GetSignedParentalSettings_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_GetSignedParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_GetSignedParentalSettings_Request} CParental_GetSignedParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_GetSignedParentalSettings_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_GetSignedParentalSettings_Request message.
         * @function verify
         * @memberof CParental_GetSignedParentalSettings_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_GetSignedParentalSettings_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.priority != null && message.hasOwnProperty("priority"))
                if (!$util.isInteger(message.priority))
                    return "priority: integer expected";
            return null;
        };
    
        /**
         * Creates a CParental_GetSignedParentalSettings_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_GetSignedParentalSettings_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_GetSignedParentalSettings_Request} CParental_GetSignedParentalSettings_Request
         */
        CParental_GetSignedParentalSettings_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_GetSignedParentalSettings_Request)
                return object;
            var message = new $root.CParental_GetSignedParentalSettings_Request();
            if (object.priority != null)
                message.priority = object.priority >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_GetSignedParentalSettings_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_GetSignedParentalSettings_Request
         * @static
         * @param {CParental_GetSignedParentalSettings_Request} message CParental_GetSignedParentalSettings_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_GetSignedParentalSettings_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.priority = 0;
            if (message.priority != null && message.hasOwnProperty("priority"))
                object.priority = message.priority;
            return object;
        };
    
        /**
         * Converts this CParental_GetSignedParentalSettings_Request to JSON.
         * @function toJSON
         * @memberof CParental_GetSignedParentalSettings_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_GetSignedParentalSettings_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_GetSignedParentalSettings_Request;
    })();
    
    $root.CParental_GetSignedParentalSettings_Response = (function() {
    
        /**
         * Properties of a CParental_GetSignedParentalSettings_Response.
         * @exports ICParental_GetSignedParentalSettings_Response
         * @interface ICParental_GetSignedParentalSettings_Response
         * @property {Uint8Array|null} [serialized_settings] CParental_GetSignedParentalSettings_Response serialized_settings
         * @property {Uint8Array|null} [signature] CParental_GetSignedParentalSettings_Response signature
         */
    
        /**
         * Constructs a new CParental_GetSignedParentalSettings_Response.
         * @exports CParental_GetSignedParentalSettings_Response
         * @classdesc Represents a CParental_GetSignedParentalSettings_Response.
         * @implements ICParental_GetSignedParentalSettings_Response
         * @constructor
         * @param {ICParental_GetSignedParentalSettings_Response=} [properties] Properties to set
         */
        function CParental_GetSignedParentalSettings_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_GetSignedParentalSettings_Response serialized_settings.
         * @member {Uint8Array} serialized_settings
         * @memberof CParental_GetSignedParentalSettings_Response
         * @instance
         */
        CParental_GetSignedParentalSettings_Response.prototype.serialized_settings = $util.newBuffer([]);
    
        /**
         * CParental_GetSignedParentalSettings_Response signature.
         * @member {Uint8Array} signature
         * @memberof CParental_GetSignedParentalSettings_Response
         * @instance
         */
        CParental_GetSignedParentalSettings_Response.prototype.signature = $util.newBuffer([]);
    
        /**
         * Creates a new CParental_GetSignedParentalSettings_Response instance using the specified properties.
         * @function create
         * @memberof CParental_GetSignedParentalSettings_Response
         * @static
         * @param {ICParental_GetSignedParentalSettings_Response=} [properties] Properties to set
         * @returns {CParental_GetSignedParentalSettings_Response} CParental_GetSignedParentalSettings_Response instance
         */
        CParental_GetSignedParentalSettings_Response.create = function create(properties) {
            return new CParental_GetSignedParentalSettings_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_GetSignedParentalSettings_Response message. Does not implicitly {@link CParental_GetSignedParentalSettings_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_GetSignedParentalSettings_Response
         * @static
         * @param {ICParental_GetSignedParentalSettings_Response} message CParental_GetSignedParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_GetSignedParentalSettings_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serialized_settings != null && message.hasOwnProperty("serialized_settings"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.serialized_settings);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_GetSignedParentalSettings_Response message, length delimited. Does not implicitly {@link CParental_GetSignedParentalSettings_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_GetSignedParentalSettings_Response
         * @static
         * @param {ICParental_GetSignedParentalSettings_Response} message CParental_GetSignedParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_GetSignedParentalSettings_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_GetSignedParentalSettings_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_GetSignedParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_GetSignedParentalSettings_Response} CParental_GetSignedParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_GetSignedParentalSettings_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_GetSignedParentalSettings_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serialized_settings = reader.bytes();
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
         * Decodes a CParental_GetSignedParentalSettings_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_GetSignedParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_GetSignedParentalSettings_Response} CParental_GetSignedParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_GetSignedParentalSettings_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_GetSignedParentalSettings_Response message.
         * @function verify
         * @memberof CParental_GetSignedParentalSettings_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_GetSignedParentalSettings_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serialized_settings != null && message.hasOwnProperty("serialized_settings"))
                if (!(message.serialized_settings && typeof message.serialized_settings.length === "number" || $util.isString(message.serialized_settings)))
                    return "serialized_settings: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a CParental_GetSignedParentalSettings_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_GetSignedParentalSettings_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_GetSignedParentalSettings_Response} CParental_GetSignedParentalSettings_Response
         */
        CParental_GetSignedParentalSettings_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_GetSignedParentalSettings_Response)
                return object;
            var message = new $root.CParental_GetSignedParentalSettings_Response();
            if (object.serialized_settings != null)
                if (typeof object.serialized_settings === "string")
                    $util.base64.decode(object.serialized_settings, message.serialized_settings = $util.newBuffer($util.base64.length(object.serialized_settings)), 0);
                else if (object.serialized_settings.length)
                    message.serialized_settings = object.serialized_settings;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_GetSignedParentalSettings_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_GetSignedParentalSettings_Response
         * @static
         * @param {CParental_GetSignedParentalSettings_Response} message CParental_GetSignedParentalSettings_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_GetSignedParentalSettings_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.serialized_settings = "";
                else {
                    object.serialized_settings = [];
                    if (options.bytes !== Array)
                        object.serialized_settings = $util.newBuffer(object.serialized_settings);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.serialized_settings != null && message.hasOwnProperty("serialized_settings"))
                object.serialized_settings = options.bytes === String ? $util.base64.encode(message.serialized_settings, 0, message.serialized_settings.length) : options.bytes === Array ? Array.prototype.slice.call(message.serialized_settings) : message.serialized_settings;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };
    
        /**
         * Converts this CParental_GetSignedParentalSettings_Response to JSON.
         * @function toJSON
         * @memberof CParental_GetSignedParentalSettings_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_GetSignedParentalSettings_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_GetSignedParentalSettings_Response;
    })();
    
    $root.CParental_SetParentalSettings_Request = (function() {
    
        /**
         * Properties of a CParental_SetParentalSettings_Request.
         * @exports ICParental_SetParentalSettings_Request
         * @interface ICParental_SetParentalSettings_Request
         * @property {string|null} [password] CParental_SetParentalSettings_Request password
         * @property {IParentalSettings|null} [settings] CParental_SetParentalSettings_Request settings
         * @property {string|null} [new_password] CParental_SetParentalSettings_Request new_password
         * @property {string|null} [sessionid] CParental_SetParentalSettings_Request sessionid
         * @property {number|Long|null} [steamid] CParental_SetParentalSettings_Request steamid
         */
    
        /**
         * Constructs a new CParental_SetParentalSettings_Request.
         * @exports CParental_SetParentalSettings_Request
         * @classdesc Represents a CParental_SetParentalSettings_Request.
         * @implements ICParental_SetParentalSettings_Request
         * @constructor
         * @param {ICParental_SetParentalSettings_Request=} [properties] Properties to set
         */
        function CParental_SetParentalSettings_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_SetParentalSettings_Request password.
         * @member {string} password
         * @memberof CParental_SetParentalSettings_Request
         * @instance
         */
        CParental_SetParentalSettings_Request.prototype.password = "";
    
        /**
         * CParental_SetParentalSettings_Request settings.
         * @member {IParentalSettings|null|undefined} settings
         * @memberof CParental_SetParentalSettings_Request
         * @instance
         */
        CParental_SetParentalSettings_Request.prototype.settings = null;
    
        /**
         * CParental_SetParentalSettings_Request new_password.
         * @member {string} new_password
         * @memberof CParental_SetParentalSettings_Request
         * @instance
         */
        CParental_SetParentalSettings_Request.prototype.new_password = "";
    
        /**
         * CParental_SetParentalSettings_Request sessionid.
         * @member {string} sessionid
         * @memberof CParental_SetParentalSettings_Request
         * @instance
         */
        CParental_SetParentalSettings_Request.prototype.sessionid = "";
    
        /**
         * CParental_SetParentalSettings_Request steamid.
         * @member {number|Long} steamid
         * @memberof CParental_SetParentalSettings_Request
         * @instance
         */
        CParental_SetParentalSettings_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CParental_SetParentalSettings_Request instance using the specified properties.
         * @function create
         * @memberof CParental_SetParentalSettings_Request
         * @static
         * @param {ICParental_SetParentalSettings_Request=} [properties] Properties to set
         * @returns {CParental_SetParentalSettings_Request} CParental_SetParentalSettings_Request instance
         */
        CParental_SetParentalSettings_Request.create = function create(properties) {
            return new CParental_SetParentalSettings_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_SetParentalSettings_Request message. Does not implicitly {@link CParental_SetParentalSettings_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_SetParentalSettings_Request
         * @static
         * @param {ICParental_SetParentalSettings_Request} message CParental_SetParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_SetParentalSettings_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.password);
            if (message.settings != null && message.hasOwnProperty("settings"))
                $root.ParentalSettings.encode(message.settings, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.new_password != null && message.hasOwnProperty("new_password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.new_password);
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sessionid);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_SetParentalSettings_Request message, length delimited. Does not implicitly {@link CParental_SetParentalSettings_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_SetParentalSettings_Request
         * @static
         * @param {ICParental_SetParentalSettings_Request} message CParental_SetParentalSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_SetParentalSettings_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_SetParentalSettings_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_SetParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_SetParentalSettings_Request} CParental_SetParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_SetParentalSettings_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_SetParentalSettings_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                case 2:
                    message.settings = $root.ParentalSettings.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.new_password = reader.string();
                    break;
                case 4:
                    message.sessionid = reader.string();
                    break;
                case 10:
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
         * Decodes a CParental_SetParentalSettings_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_SetParentalSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_SetParentalSettings_Request} CParental_SetParentalSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_SetParentalSettings_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_SetParentalSettings_Request message.
         * @function verify
         * @memberof CParental_SetParentalSettings_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_SetParentalSettings_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.ParentalSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            if (message.new_password != null && message.hasOwnProperty("new_password"))
                if (!$util.isString(message.new_password))
                    return "new_password: string expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isString(message.sessionid))
                    return "sessionid: string expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CParental_SetParentalSettings_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_SetParentalSettings_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_SetParentalSettings_Request} CParental_SetParentalSettings_Request
         */
        CParental_SetParentalSettings_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_SetParentalSettings_Request)
                return object;
            var message = new $root.CParental_SetParentalSettings_Request();
            if (object.password != null)
                message.password = String(object.password);
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".CParental_SetParentalSettings_Request.settings: object expected");
                message.settings = $root.ParentalSettings.fromObject(object.settings);
            }
            if (object.new_password != null)
                message.new_password = String(object.new_password);
            if (object.sessionid != null)
                message.sessionid = String(object.sessionid);
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
         * Creates a plain object from a CParental_SetParentalSettings_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_SetParentalSettings_Request
         * @static
         * @param {CParental_SetParentalSettings_Request} message CParental_SetParentalSettings_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_SetParentalSettings_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.password = "";
                object.settings = null;
                object.new_password = "";
                object.sessionid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.ParentalSettings.toObject(message.settings, options);
            if (message.new_password != null && message.hasOwnProperty("new_password"))
                object.new_password = message.new_password;
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                object.sessionid = message.sessionid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CParental_SetParentalSettings_Request to JSON.
         * @function toJSON
         * @memberof CParental_SetParentalSettings_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_SetParentalSettings_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_SetParentalSettings_Request;
    })();
    
    $root.CParental_SetParentalSettings_Response = (function() {
    
        /**
         * Properties of a CParental_SetParentalSettings_Response.
         * @exports ICParental_SetParentalSettings_Response
         * @interface ICParental_SetParentalSettings_Response
         */
    
        /**
         * Constructs a new CParental_SetParentalSettings_Response.
         * @exports CParental_SetParentalSettings_Response
         * @classdesc Represents a CParental_SetParentalSettings_Response.
         * @implements ICParental_SetParentalSettings_Response
         * @constructor
         * @param {ICParental_SetParentalSettings_Response=} [properties] Properties to set
         */
        function CParental_SetParentalSettings_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CParental_SetParentalSettings_Response instance using the specified properties.
         * @function create
         * @memberof CParental_SetParentalSettings_Response
         * @static
         * @param {ICParental_SetParentalSettings_Response=} [properties] Properties to set
         * @returns {CParental_SetParentalSettings_Response} CParental_SetParentalSettings_Response instance
         */
        CParental_SetParentalSettings_Response.create = function create(properties) {
            return new CParental_SetParentalSettings_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_SetParentalSettings_Response message. Does not implicitly {@link CParental_SetParentalSettings_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_SetParentalSettings_Response
         * @static
         * @param {ICParental_SetParentalSettings_Response} message CParental_SetParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_SetParentalSettings_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_SetParentalSettings_Response message, length delimited. Does not implicitly {@link CParental_SetParentalSettings_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_SetParentalSettings_Response
         * @static
         * @param {ICParental_SetParentalSettings_Response} message CParental_SetParentalSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_SetParentalSettings_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_SetParentalSettings_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_SetParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_SetParentalSettings_Response} CParental_SetParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_SetParentalSettings_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_SetParentalSettings_Response();
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
         * Decodes a CParental_SetParentalSettings_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_SetParentalSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_SetParentalSettings_Response} CParental_SetParentalSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_SetParentalSettings_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_SetParentalSettings_Response message.
         * @function verify
         * @memberof CParental_SetParentalSettings_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_SetParentalSettings_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CParental_SetParentalSettings_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_SetParentalSettings_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_SetParentalSettings_Response} CParental_SetParentalSettings_Response
         */
        CParental_SetParentalSettings_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_SetParentalSettings_Response)
                return object;
            return new $root.CParental_SetParentalSettings_Response();
        };
    
        /**
         * Creates a plain object from a CParental_SetParentalSettings_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_SetParentalSettings_Response
         * @static
         * @param {CParental_SetParentalSettings_Response} message CParental_SetParentalSettings_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_SetParentalSettings_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CParental_SetParentalSettings_Response to JSON.
         * @function toJSON
         * @memberof CParental_SetParentalSettings_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_SetParentalSettings_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_SetParentalSettings_Response;
    })();
    
    $root.CParental_ValidateToken_Request = (function() {
    
        /**
         * Properties of a CParental_ValidateToken_Request.
         * @exports ICParental_ValidateToken_Request
         * @interface ICParental_ValidateToken_Request
         * @property {string|null} [unlock_token] CParental_ValidateToken_Request unlock_token
         */
    
        /**
         * Constructs a new CParental_ValidateToken_Request.
         * @exports CParental_ValidateToken_Request
         * @classdesc Represents a CParental_ValidateToken_Request.
         * @implements ICParental_ValidateToken_Request
         * @constructor
         * @param {ICParental_ValidateToken_Request=} [properties] Properties to set
         */
        function CParental_ValidateToken_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_ValidateToken_Request unlock_token.
         * @member {string} unlock_token
         * @memberof CParental_ValidateToken_Request
         * @instance
         */
        CParental_ValidateToken_Request.prototype.unlock_token = "";
    
        /**
         * Creates a new CParental_ValidateToken_Request instance using the specified properties.
         * @function create
         * @memberof CParental_ValidateToken_Request
         * @static
         * @param {ICParental_ValidateToken_Request=} [properties] Properties to set
         * @returns {CParental_ValidateToken_Request} CParental_ValidateToken_Request instance
         */
        CParental_ValidateToken_Request.create = function create(properties) {
            return new CParental_ValidateToken_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_ValidateToken_Request message. Does not implicitly {@link CParental_ValidateToken_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_ValidateToken_Request
         * @static
         * @param {ICParental_ValidateToken_Request} message CParental_ValidateToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ValidateToken_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unlock_token != null && message.hasOwnProperty("unlock_token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.unlock_token);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_ValidateToken_Request message, length delimited. Does not implicitly {@link CParental_ValidateToken_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_ValidateToken_Request
         * @static
         * @param {ICParental_ValidateToken_Request} message CParental_ValidateToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ValidateToken_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_ValidateToken_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_ValidateToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_ValidateToken_Request} CParental_ValidateToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ValidateToken_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_ValidateToken_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.unlock_token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_ValidateToken_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_ValidateToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_ValidateToken_Request} CParental_ValidateToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ValidateToken_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_ValidateToken_Request message.
         * @function verify
         * @memberof CParental_ValidateToken_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_ValidateToken_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.unlock_token != null && message.hasOwnProperty("unlock_token"))
                if (!$util.isString(message.unlock_token))
                    return "unlock_token: string expected";
            return null;
        };
    
        /**
         * Creates a CParental_ValidateToken_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_ValidateToken_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_ValidateToken_Request} CParental_ValidateToken_Request
         */
        CParental_ValidateToken_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_ValidateToken_Request)
                return object;
            var message = new $root.CParental_ValidateToken_Request();
            if (object.unlock_token != null)
                message.unlock_token = String(object.unlock_token);
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_ValidateToken_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_ValidateToken_Request
         * @static
         * @param {CParental_ValidateToken_Request} message CParental_ValidateToken_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_ValidateToken_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.unlock_token = "";
            if (message.unlock_token != null && message.hasOwnProperty("unlock_token"))
                object.unlock_token = message.unlock_token;
            return object;
        };
    
        /**
         * Converts this CParental_ValidateToken_Request to JSON.
         * @function toJSON
         * @memberof CParental_ValidateToken_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_ValidateToken_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_ValidateToken_Request;
    })();
    
    $root.CParental_ValidateToken_Response = (function() {
    
        /**
         * Properties of a CParental_ValidateToken_Response.
         * @exports ICParental_ValidateToken_Response
         * @interface ICParental_ValidateToken_Response
         */
    
        /**
         * Constructs a new CParental_ValidateToken_Response.
         * @exports CParental_ValidateToken_Response
         * @classdesc Represents a CParental_ValidateToken_Response.
         * @implements ICParental_ValidateToken_Response
         * @constructor
         * @param {ICParental_ValidateToken_Response=} [properties] Properties to set
         */
        function CParental_ValidateToken_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CParental_ValidateToken_Response instance using the specified properties.
         * @function create
         * @memberof CParental_ValidateToken_Response
         * @static
         * @param {ICParental_ValidateToken_Response=} [properties] Properties to set
         * @returns {CParental_ValidateToken_Response} CParental_ValidateToken_Response instance
         */
        CParental_ValidateToken_Response.create = function create(properties) {
            return new CParental_ValidateToken_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_ValidateToken_Response message. Does not implicitly {@link CParental_ValidateToken_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_ValidateToken_Response
         * @static
         * @param {ICParental_ValidateToken_Response} message CParental_ValidateToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ValidateToken_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_ValidateToken_Response message, length delimited. Does not implicitly {@link CParental_ValidateToken_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_ValidateToken_Response
         * @static
         * @param {ICParental_ValidateToken_Response} message CParental_ValidateToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ValidateToken_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_ValidateToken_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_ValidateToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_ValidateToken_Response} CParental_ValidateToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ValidateToken_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_ValidateToken_Response();
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
         * Decodes a CParental_ValidateToken_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_ValidateToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_ValidateToken_Response} CParental_ValidateToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ValidateToken_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_ValidateToken_Response message.
         * @function verify
         * @memberof CParental_ValidateToken_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_ValidateToken_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CParental_ValidateToken_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_ValidateToken_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_ValidateToken_Response} CParental_ValidateToken_Response
         */
        CParental_ValidateToken_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_ValidateToken_Response)
                return object;
            return new $root.CParental_ValidateToken_Response();
        };
    
        /**
         * Creates a plain object from a CParental_ValidateToken_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_ValidateToken_Response
         * @static
         * @param {CParental_ValidateToken_Response} message CParental_ValidateToken_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_ValidateToken_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CParental_ValidateToken_Response to JSON.
         * @function toJSON
         * @memberof CParental_ValidateToken_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_ValidateToken_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_ValidateToken_Response;
    })();
    
    $root.CParental_ValidatePassword_Request = (function() {
    
        /**
         * Properties of a CParental_ValidatePassword_Request.
         * @exports ICParental_ValidatePassword_Request
         * @interface ICParental_ValidatePassword_Request
         * @property {string|null} [password] CParental_ValidatePassword_Request password
         * @property {string|null} [session] CParental_ValidatePassword_Request session
         * @property {boolean|null} [send_unlock_on_success] CParental_ValidatePassword_Request send_unlock_on_success
         */
    
        /**
         * Constructs a new CParental_ValidatePassword_Request.
         * @exports CParental_ValidatePassword_Request
         * @classdesc Represents a CParental_ValidatePassword_Request.
         * @implements ICParental_ValidatePassword_Request
         * @constructor
         * @param {ICParental_ValidatePassword_Request=} [properties] Properties to set
         */
        function CParental_ValidatePassword_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_ValidatePassword_Request password.
         * @member {string} password
         * @memberof CParental_ValidatePassword_Request
         * @instance
         */
        CParental_ValidatePassword_Request.prototype.password = "";
    
        /**
         * CParental_ValidatePassword_Request session.
         * @member {string} session
         * @memberof CParental_ValidatePassword_Request
         * @instance
         */
        CParental_ValidatePassword_Request.prototype.session = "";
    
        /**
         * CParental_ValidatePassword_Request send_unlock_on_success.
         * @member {boolean} send_unlock_on_success
         * @memberof CParental_ValidatePassword_Request
         * @instance
         */
        CParental_ValidatePassword_Request.prototype.send_unlock_on_success = false;
    
        /**
         * Creates a new CParental_ValidatePassword_Request instance using the specified properties.
         * @function create
         * @memberof CParental_ValidatePassword_Request
         * @static
         * @param {ICParental_ValidatePassword_Request=} [properties] Properties to set
         * @returns {CParental_ValidatePassword_Request} CParental_ValidatePassword_Request instance
         */
        CParental_ValidatePassword_Request.create = function create(properties) {
            return new CParental_ValidatePassword_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_ValidatePassword_Request message. Does not implicitly {@link CParental_ValidatePassword_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_ValidatePassword_Request
         * @static
         * @param {ICParental_ValidatePassword_Request} message CParental_ValidatePassword_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ValidatePassword_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.password);
            if (message.session != null && message.hasOwnProperty("session"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.session);
            if (message.send_unlock_on_success != null && message.hasOwnProperty("send_unlock_on_success"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.send_unlock_on_success);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_ValidatePassword_Request message, length delimited. Does not implicitly {@link CParental_ValidatePassword_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_ValidatePassword_Request
         * @static
         * @param {ICParental_ValidatePassword_Request} message CParental_ValidatePassword_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ValidatePassword_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_ValidatePassword_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_ValidatePassword_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_ValidatePassword_Request} CParental_ValidatePassword_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ValidatePassword_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_ValidatePassword_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                case 2:
                    message.session = reader.string();
                    break;
                case 3:
                    message.send_unlock_on_success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_ValidatePassword_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_ValidatePassword_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_ValidatePassword_Request} CParental_ValidatePassword_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ValidatePassword_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_ValidatePassword_Request message.
         * @function verify
         * @memberof CParental_ValidatePassword_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_ValidatePassword_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isString(message.session))
                    return "session: string expected";
            if (message.send_unlock_on_success != null && message.hasOwnProperty("send_unlock_on_success"))
                if (typeof message.send_unlock_on_success !== "boolean")
                    return "send_unlock_on_success: boolean expected";
            return null;
        };
    
        /**
         * Creates a CParental_ValidatePassword_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_ValidatePassword_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_ValidatePassword_Request} CParental_ValidatePassword_Request
         */
        CParental_ValidatePassword_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_ValidatePassword_Request)
                return object;
            var message = new $root.CParental_ValidatePassword_Request();
            if (object.password != null)
                message.password = String(object.password);
            if (object.session != null)
                message.session = String(object.session);
            if (object.send_unlock_on_success != null)
                message.send_unlock_on_success = Boolean(object.send_unlock_on_success);
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_ValidatePassword_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_ValidatePassword_Request
         * @static
         * @param {CParental_ValidatePassword_Request} message CParental_ValidatePassword_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_ValidatePassword_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.password = "";
                object.session = "";
                object.send_unlock_on_success = false;
            }
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            if (message.send_unlock_on_success != null && message.hasOwnProperty("send_unlock_on_success"))
                object.send_unlock_on_success = message.send_unlock_on_success;
            return object;
        };
    
        /**
         * Converts this CParental_ValidatePassword_Request to JSON.
         * @function toJSON
         * @memberof CParental_ValidatePassword_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_ValidatePassword_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_ValidatePassword_Request;
    })();
    
    $root.CParental_ValidatePassword_Response = (function() {
    
        /**
         * Properties of a CParental_ValidatePassword_Response.
         * @exports ICParental_ValidatePassword_Response
         * @interface ICParental_ValidatePassword_Response
         * @property {string|null} [token] CParental_ValidatePassword_Response token
         */
    
        /**
         * Constructs a new CParental_ValidatePassword_Response.
         * @exports CParental_ValidatePassword_Response
         * @classdesc Represents a CParental_ValidatePassword_Response.
         * @implements ICParental_ValidatePassword_Response
         * @constructor
         * @param {ICParental_ValidatePassword_Response=} [properties] Properties to set
         */
        function CParental_ValidatePassword_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_ValidatePassword_Response token.
         * @member {string} token
         * @memberof CParental_ValidatePassword_Response
         * @instance
         */
        CParental_ValidatePassword_Response.prototype.token = "";
    
        /**
         * Creates a new CParental_ValidatePassword_Response instance using the specified properties.
         * @function create
         * @memberof CParental_ValidatePassword_Response
         * @static
         * @param {ICParental_ValidatePassword_Response=} [properties] Properties to set
         * @returns {CParental_ValidatePassword_Response} CParental_ValidatePassword_Response instance
         */
        CParental_ValidatePassword_Response.create = function create(properties) {
            return new CParental_ValidatePassword_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_ValidatePassword_Response message. Does not implicitly {@link CParental_ValidatePassword_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_ValidatePassword_Response
         * @static
         * @param {ICParental_ValidatePassword_Response} message CParental_ValidatePassword_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ValidatePassword_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_ValidatePassword_Response message, length delimited. Does not implicitly {@link CParental_ValidatePassword_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_ValidatePassword_Response
         * @static
         * @param {ICParental_ValidatePassword_Response} message CParental_ValidatePassword_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ValidatePassword_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_ValidatePassword_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_ValidatePassword_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_ValidatePassword_Response} CParental_ValidatePassword_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ValidatePassword_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_ValidatePassword_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_ValidatePassword_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_ValidatePassword_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_ValidatePassword_Response} CParental_ValidatePassword_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ValidatePassword_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_ValidatePassword_Response message.
         * @function verify
         * @memberof CParental_ValidatePassword_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_ValidatePassword_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };
    
        /**
         * Creates a CParental_ValidatePassword_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_ValidatePassword_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_ValidatePassword_Response} CParental_ValidatePassword_Response
         */
        CParental_ValidatePassword_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_ValidatePassword_Response)
                return object;
            var message = new $root.CParental_ValidatePassword_Response();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_ValidatePassword_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_ValidatePassword_Response
         * @static
         * @param {CParental_ValidatePassword_Response} message CParental_ValidatePassword_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_ValidatePassword_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };
    
        /**
         * Converts this CParental_ValidatePassword_Response to JSON.
         * @function toJSON
         * @memberof CParental_ValidatePassword_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_ValidatePassword_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_ValidatePassword_Response;
    })();
    
    $root.CParental_LockClient_Request = (function() {
    
        /**
         * Properties of a CParental_LockClient_Request.
         * @exports ICParental_LockClient_Request
         * @interface ICParental_LockClient_Request
         * @property {string|null} [session] CParental_LockClient_Request session
         */
    
        /**
         * Constructs a new CParental_LockClient_Request.
         * @exports CParental_LockClient_Request
         * @classdesc Represents a CParental_LockClient_Request.
         * @implements ICParental_LockClient_Request
         * @constructor
         * @param {ICParental_LockClient_Request=} [properties] Properties to set
         */
        function CParental_LockClient_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_LockClient_Request session.
         * @member {string} session
         * @memberof CParental_LockClient_Request
         * @instance
         */
        CParental_LockClient_Request.prototype.session = "";
    
        /**
         * Creates a new CParental_LockClient_Request instance using the specified properties.
         * @function create
         * @memberof CParental_LockClient_Request
         * @static
         * @param {ICParental_LockClient_Request=} [properties] Properties to set
         * @returns {CParental_LockClient_Request} CParental_LockClient_Request instance
         */
        CParental_LockClient_Request.create = function create(properties) {
            return new CParental_LockClient_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_LockClient_Request message. Does not implicitly {@link CParental_LockClient_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_LockClient_Request
         * @static
         * @param {ICParental_LockClient_Request} message CParental_LockClient_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_LockClient_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session != null && message.hasOwnProperty("session"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.session);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_LockClient_Request message, length delimited. Does not implicitly {@link CParental_LockClient_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_LockClient_Request
         * @static
         * @param {ICParental_LockClient_Request} message CParental_LockClient_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_LockClient_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_LockClient_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_LockClient_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_LockClient_Request} CParental_LockClient_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_LockClient_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_LockClient_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_LockClient_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_LockClient_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_LockClient_Request} CParental_LockClient_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_LockClient_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_LockClient_Request message.
         * @function verify
         * @memberof CParental_LockClient_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_LockClient_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session != null && message.hasOwnProperty("session"))
                if (!$util.isString(message.session))
                    return "session: string expected";
            return null;
        };
    
        /**
         * Creates a CParental_LockClient_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_LockClient_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_LockClient_Request} CParental_LockClient_Request
         */
        CParental_LockClient_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_LockClient_Request)
                return object;
            var message = new $root.CParental_LockClient_Request();
            if (object.session != null)
                message.session = String(object.session);
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_LockClient_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_LockClient_Request
         * @static
         * @param {CParental_LockClient_Request} message CParental_LockClient_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_LockClient_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.session = "";
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = message.session;
            return object;
        };
    
        /**
         * Converts this CParental_LockClient_Request to JSON.
         * @function toJSON
         * @memberof CParental_LockClient_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_LockClient_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_LockClient_Request;
    })();
    
    $root.CParental_LockClient_Response = (function() {
    
        /**
         * Properties of a CParental_LockClient_Response.
         * @exports ICParental_LockClient_Response
         * @interface ICParental_LockClient_Response
         */
    
        /**
         * Constructs a new CParental_LockClient_Response.
         * @exports CParental_LockClient_Response
         * @classdesc Represents a CParental_LockClient_Response.
         * @implements ICParental_LockClient_Response
         * @constructor
         * @param {ICParental_LockClient_Response=} [properties] Properties to set
         */
        function CParental_LockClient_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CParental_LockClient_Response instance using the specified properties.
         * @function create
         * @memberof CParental_LockClient_Response
         * @static
         * @param {ICParental_LockClient_Response=} [properties] Properties to set
         * @returns {CParental_LockClient_Response} CParental_LockClient_Response instance
         */
        CParental_LockClient_Response.create = function create(properties) {
            return new CParental_LockClient_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_LockClient_Response message. Does not implicitly {@link CParental_LockClient_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_LockClient_Response
         * @static
         * @param {ICParental_LockClient_Response} message CParental_LockClient_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_LockClient_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_LockClient_Response message, length delimited. Does not implicitly {@link CParental_LockClient_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_LockClient_Response
         * @static
         * @param {ICParental_LockClient_Response} message CParental_LockClient_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_LockClient_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_LockClient_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_LockClient_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_LockClient_Response} CParental_LockClient_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_LockClient_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_LockClient_Response();
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
         * Decodes a CParental_LockClient_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_LockClient_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_LockClient_Response} CParental_LockClient_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_LockClient_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_LockClient_Response message.
         * @function verify
         * @memberof CParental_LockClient_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_LockClient_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CParental_LockClient_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_LockClient_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_LockClient_Response} CParental_LockClient_Response
         */
        CParental_LockClient_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_LockClient_Response)
                return object;
            return new $root.CParental_LockClient_Response();
        };
    
        /**
         * Creates a plain object from a CParental_LockClient_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_LockClient_Response
         * @static
         * @param {CParental_LockClient_Response} message CParental_LockClient_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_LockClient_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CParental_LockClient_Response to JSON.
         * @function toJSON
         * @memberof CParental_LockClient_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_LockClient_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_LockClient_Response;
    })();
    
    $root.CParental_RequestRecoveryCode_Request = (function() {
    
        /**
         * Properties of a CParental_RequestRecoveryCode_Request.
         * @exports ICParental_RequestRecoveryCode_Request
         * @interface ICParental_RequestRecoveryCode_Request
         */
    
        /**
         * Constructs a new CParental_RequestRecoveryCode_Request.
         * @exports CParental_RequestRecoveryCode_Request
         * @classdesc Represents a CParental_RequestRecoveryCode_Request.
         * @implements ICParental_RequestRecoveryCode_Request
         * @constructor
         * @param {ICParental_RequestRecoveryCode_Request=} [properties] Properties to set
         */
        function CParental_RequestRecoveryCode_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CParental_RequestRecoveryCode_Request instance using the specified properties.
         * @function create
         * @memberof CParental_RequestRecoveryCode_Request
         * @static
         * @param {ICParental_RequestRecoveryCode_Request=} [properties] Properties to set
         * @returns {CParental_RequestRecoveryCode_Request} CParental_RequestRecoveryCode_Request instance
         */
        CParental_RequestRecoveryCode_Request.create = function create(properties) {
            return new CParental_RequestRecoveryCode_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_RequestRecoveryCode_Request message. Does not implicitly {@link CParental_RequestRecoveryCode_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_RequestRecoveryCode_Request
         * @static
         * @param {ICParental_RequestRecoveryCode_Request} message CParental_RequestRecoveryCode_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_RequestRecoveryCode_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_RequestRecoveryCode_Request message, length delimited. Does not implicitly {@link CParental_RequestRecoveryCode_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_RequestRecoveryCode_Request
         * @static
         * @param {ICParental_RequestRecoveryCode_Request} message CParental_RequestRecoveryCode_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_RequestRecoveryCode_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_RequestRecoveryCode_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_RequestRecoveryCode_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_RequestRecoveryCode_Request} CParental_RequestRecoveryCode_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_RequestRecoveryCode_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_RequestRecoveryCode_Request();
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
         * Decodes a CParental_RequestRecoveryCode_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_RequestRecoveryCode_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_RequestRecoveryCode_Request} CParental_RequestRecoveryCode_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_RequestRecoveryCode_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_RequestRecoveryCode_Request message.
         * @function verify
         * @memberof CParental_RequestRecoveryCode_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_RequestRecoveryCode_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CParental_RequestRecoveryCode_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_RequestRecoveryCode_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_RequestRecoveryCode_Request} CParental_RequestRecoveryCode_Request
         */
        CParental_RequestRecoveryCode_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_RequestRecoveryCode_Request)
                return object;
            return new $root.CParental_RequestRecoveryCode_Request();
        };
    
        /**
         * Creates a plain object from a CParental_RequestRecoveryCode_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_RequestRecoveryCode_Request
         * @static
         * @param {CParental_RequestRecoveryCode_Request} message CParental_RequestRecoveryCode_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_RequestRecoveryCode_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CParental_RequestRecoveryCode_Request to JSON.
         * @function toJSON
         * @memberof CParental_RequestRecoveryCode_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_RequestRecoveryCode_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_RequestRecoveryCode_Request;
    })();
    
    $root.CParental_RequestRecoveryCode_Response = (function() {
    
        /**
         * Properties of a CParental_RequestRecoveryCode_Response.
         * @exports ICParental_RequestRecoveryCode_Response
         * @interface ICParental_RequestRecoveryCode_Response
         */
    
        /**
         * Constructs a new CParental_RequestRecoveryCode_Response.
         * @exports CParental_RequestRecoveryCode_Response
         * @classdesc Represents a CParental_RequestRecoveryCode_Response.
         * @implements ICParental_RequestRecoveryCode_Response
         * @constructor
         * @param {ICParental_RequestRecoveryCode_Response=} [properties] Properties to set
         */
        function CParental_RequestRecoveryCode_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CParental_RequestRecoveryCode_Response instance using the specified properties.
         * @function create
         * @memberof CParental_RequestRecoveryCode_Response
         * @static
         * @param {ICParental_RequestRecoveryCode_Response=} [properties] Properties to set
         * @returns {CParental_RequestRecoveryCode_Response} CParental_RequestRecoveryCode_Response instance
         */
        CParental_RequestRecoveryCode_Response.create = function create(properties) {
            return new CParental_RequestRecoveryCode_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_RequestRecoveryCode_Response message. Does not implicitly {@link CParental_RequestRecoveryCode_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_RequestRecoveryCode_Response
         * @static
         * @param {ICParental_RequestRecoveryCode_Response} message CParental_RequestRecoveryCode_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_RequestRecoveryCode_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_RequestRecoveryCode_Response message, length delimited. Does not implicitly {@link CParental_RequestRecoveryCode_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_RequestRecoveryCode_Response
         * @static
         * @param {ICParental_RequestRecoveryCode_Response} message CParental_RequestRecoveryCode_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_RequestRecoveryCode_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_RequestRecoveryCode_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_RequestRecoveryCode_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_RequestRecoveryCode_Response} CParental_RequestRecoveryCode_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_RequestRecoveryCode_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_RequestRecoveryCode_Response();
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
         * Decodes a CParental_RequestRecoveryCode_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_RequestRecoveryCode_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_RequestRecoveryCode_Response} CParental_RequestRecoveryCode_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_RequestRecoveryCode_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_RequestRecoveryCode_Response message.
         * @function verify
         * @memberof CParental_RequestRecoveryCode_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_RequestRecoveryCode_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CParental_RequestRecoveryCode_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_RequestRecoveryCode_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_RequestRecoveryCode_Response} CParental_RequestRecoveryCode_Response
         */
        CParental_RequestRecoveryCode_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_RequestRecoveryCode_Response)
                return object;
            return new $root.CParental_RequestRecoveryCode_Response();
        };
    
        /**
         * Creates a plain object from a CParental_RequestRecoveryCode_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_RequestRecoveryCode_Response
         * @static
         * @param {CParental_RequestRecoveryCode_Response} message CParental_RequestRecoveryCode_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_RequestRecoveryCode_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CParental_RequestRecoveryCode_Response to JSON.
         * @function toJSON
         * @memberof CParental_RequestRecoveryCode_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_RequestRecoveryCode_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_RequestRecoveryCode_Response;
    })();
    
    $root.CParental_DisableWithRecoveryCode_Request = (function() {
    
        /**
         * Properties of a CParental_DisableWithRecoveryCode_Request.
         * @exports ICParental_DisableWithRecoveryCode_Request
         * @interface ICParental_DisableWithRecoveryCode_Request
         * @property {number|null} [recovery_code] CParental_DisableWithRecoveryCode_Request recovery_code
         * @property {number|Long|null} [steamid] CParental_DisableWithRecoveryCode_Request steamid
         */
    
        /**
         * Constructs a new CParental_DisableWithRecoveryCode_Request.
         * @exports CParental_DisableWithRecoveryCode_Request
         * @classdesc Represents a CParental_DisableWithRecoveryCode_Request.
         * @implements ICParental_DisableWithRecoveryCode_Request
         * @constructor
         * @param {ICParental_DisableWithRecoveryCode_Request=} [properties] Properties to set
         */
        function CParental_DisableWithRecoveryCode_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_DisableWithRecoveryCode_Request recovery_code.
         * @member {number} recovery_code
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @instance
         */
        CParental_DisableWithRecoveryCode_Request.prototype.recovery_code = 0;
    
        /**
         * CParental_DisableWithRecoveryCode_Request steamid.
         * @member {number|Long} steamid
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @instance
         */
        CParental_DisableWithRecoveryCode_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CParental_DisableWithRecoveryCode_Request instance using the specified properties.
         * @function create
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @static
         * @param {ICParental_DisableWithRecoveryCode_Request=} [properties] Properties to set
         * @returns {CParental_DisableWithRecoveryCode_Request} CParental_DisableWithRecoveryCode_Request instance
         */
        CParental_DisableWithRecoveryCode_Request.create = function create(properties) {
            return new CParental_DisableWithRecoveryCode_Request(properties);
        };
    
        /**
         * Encodes the specified CParental_DisableWithRecoveryCode_Request message. Does not implicitly {@link CParental_DisableWithRecoveryCode_Request.verify|verify} messages.
         * @function encode
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @static
         * @param {ICParental_DisableWithRecoveryCode_Request} message CParental_DisableWithRecoveryCode_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_DisableWithRecoveryCode_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.recovery_code != null && message.hasOwnProperty("recovery_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.recovery_code);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_DisableWithRecoveryCode_Request message, length delimited. Does not implicitly {@link CParental_DisableWithRecoveryCode_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @static
         * @param {ICParental_DisableWithRecoveryCode_Request} message CParental_DisableWithRecoveryCode_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_DisableWithRecoveryCode_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_DisableWithRecoveryCode_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_DisableWithRecoveryCode_Request} CParental_DisableWithRecoveryCode_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_DisableWithRecoveryCode_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_DisableWithRecoveryCode_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.recovery_code = reader.uint32();
                    break;
                case 10:
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
         * Decodes a CParental_DisableWithRecoveryCode_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_DisableWithRecoveryCode_Request} CParental_DisableWithRecoveryCode_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_DisableWithRecoveryCode_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_DisableWithRecoveryCode_Request message.
         * @function verify
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_DisableWithRecoveryCode_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.recovery_code != null && message.hasOwnProperty("recovery_code"))
                if (!$util.isInteger(message.recovery_code))
                    return "recovery_code: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CParental_DisableWithRecoveryCode_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_DisableWithRecoveryCode_Request} CParental_DisableWithRecoveryCode_Request
         */
        CParental_DisableWithRecoveryCode_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_DisableWithRecoveryCode_Request)
                return object;
            var message = new $root.CParental_DisableWithRecoveryCode_Request();
            if (object.recovery_code != null)
                message.recovery_code = object.recovery_code >>> 0;
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
         * Creates a plain object from a CParental_DisableWithRecoveryCode_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @static
         * @param {CParental_DisableWithRecoveryCode_Request} message CParental_DisableWithRecoveryCode_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_DisableWithRecoveryCode_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.recovery_code = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.recovery_code != null && message.hasOwnProperty("recovery_code"))
                object.recovery_code = message.recovery_code;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CParental_DisableWithRecoveryCode_Request to JSON.
         * @function toJSON
         * @memberof CParental_DisableWithRecoveryCode_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_DisableWithRecoveryCode_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_DisableWithRecoveryCode_Request;
    })();
    
    $root.CParental_DisableWithRecoveryCode_Response = (function() {
    
        /**
         * Properties of a CParental_DisableWithRecoveryCode_Response.
         * @exports ICParental_DisableWithRecoveryCode_Response
         * @interface ICParental_DisableWithRecoveryCode_Response
         */
    
        /**
         * Constructs a new CParental_DisableWithRecoveryCode_Response.
         * @exports CParental_DisableWithRecoveryCode_Response
         * @classdesc Represents a CParental_DisableWithRecoveryCode_Response.
         * @implements ICParental_DisableWithRecoveryCode_Response
         * @constructor
         * @param {ICParental_DisableWithRecoveryCode_Response=} [properties] Properties to set
         */
        function CParental_DisableWithRecoveryCode_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CParental_DisableWithRecoveryCode_Response instance using the specified properties.
         * @function create
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @static
         * @param {ICParental_DisableWithRecoveryCode_Response=} [properties] Properties to set
         * @returns {CParental_DisableWithRecoveryCode_Response} CParental_DisableWithRecoveryCode_Response instance
         */
        CParental_DisableWithRecoveryCode_Response.create = function create(properties) {
            return new CParental_DisableWithRecoveryCode_Response(properties);
        };
    
        /**
         * Encodes the specified CParental_DisableWithRecoveryCode_Response message. Does not implicitly {@link CParental_DisableWithRecoveryCode_Response.verify|verify} messages.
         * @function encode
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @static
         * @param {ICParental_DisableWithRecoveryCode_Response} message CParental_DisableWithRecoveryCode_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_DisableWithRecoveryCode_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CParental_DisableWithRecoveryCode_Response message, length delimited. Does not implicitly {@link CParental_DisableWithRecoveryCode_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @static
         * @param {ICParental_DisableWithRecoveryCode_Response} message CParental_DisableWithRecoveryCode_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_DisableWithRecoveryCode_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_DisableWithRecoveryCode_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_DisableWithRecoveryCode_Response} CParental_DisableWithRecoveryCode_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_DisableWithRecoveryCode_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_DisableWithRecoveryCode_Response();
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
         * Decodes a CParental_DisableWithRecoveryCode_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_DisableWithRecoveryCode_Response} CParental_DisableWithRecoveryCode_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_DisableWithRecoveryCode_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_DisableWithRecoveryCode_Response message.
         * @function verify
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_DisableWithRecoveryCode_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CParental_DisableWithRecoveryCode_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_DisableWithRecoveryCode_Response} CParental_DisableWithRecoveryCode_Response
         */
        CParental_DisableWithRecoveryCode_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_DisableWithRecoveryCode_Response)
                return object;
            return new $root.CParental_DisableWithRecoveryCode_Response();
        };
    
        /**
         * Creates a plain object from a CParental_DisableWithRecoveryCode_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @static
         * @param {CParental_DisableWithRecoveryCode_Response} message CParental_DisableWithRecoveryCode_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_DisableWithRecoveryCode_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CParental_DisableWithRecoveryCode_Response to JSON.
         * @function toJSON
         * @memberof CParental_DisableWithRecoveryCode_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_DisableWithRecoveryCode_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_DisableWithRecoveryCode_Response;
    })();
    
    $root.CParental_ParentalSettingsChange_Notification = (function() {
    
        /**
         * Properties of a CParental_ParentalSettingsChange_Notification.
         * @exports ICParental_ParentalSettingsChange_Notification
         * @interface ICParental_ParentalSettingsChange_Notification
         * @property {Uint8Array|null} [serialized_settings] CParental_ParentalSettingsChange_Notification serialized_settings
         * @property {Uint8Array|null} [signature] CParental_ParentalSettingsChange_Notification signature
         * @property {string|null} [password] CParental_ParentalSettingsChange_Notification password
         * @property {string|null} [sessionid] CParental_ParentalSettingsChange_Notification sessionid
         */
    
        /**
         * Constructs a new CParental_ParentalSettingsChange_Notification.
         * @exports CParental_ParentalSettingsChange_Notification
         * @classdesc Represents a CParental_ParentalSettingsChange_Notification.
         * @implements ICParental_ParentalSettingsChange_Notification
         * @constructor
         * @param {ICParental_ParentalSettingsChange_Notification=} [properties] Properties to set
         */
        function CParental_ParentalSettingsChange_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_ParentalSettingsChange_Notification serialized_settings.
         * @member {Uint8Array} serialized_settings
         * @memberof CParental_ParentalSettingsChange_Notification
         * @instance
         */
        CParental_ParentalSettingsChange_Notification.prototype.serialized_settings = $util.newBuffer([]);
    
        /**
         * CParental_ParentalSettingsChange_Notification signature.
         * @member {Uint8Array} signature
         * @memberof CParental_ParentalSettingsChange_Notification
         * @instance
         */
        CParental_ParentalSettingsChange_Notification.prototype.signature = $util.newBuffer([]);
    
        /**
         * CParental_ParentalSettingsChange_Notification password.
         * @member {string} password
         * @memberof CParental_ParentalSettingsChange_Notification
         * @instance
         */
        CParental_ParentalSettingsChange_Notification.prototype.password = "";
    
        /**
         * CParental_ParentalSettingsChange_Notification sessionid.
         * @member {string} sessionid
         * @memberof CParental_ParentalSettingsChange_Notification
         * @instance
         */
        CParental_ParentalSettingsChange_Notification.prototype.sessionid = "";
    
        /**
         * Creates a new CParental_ParentalSettingsChange_Notification instance using the specified properties.
         * @function create
         * @memberof CParental_ParentalSettingsChange_Notification
         * @static
         * @param {ICParental_ParentalSettingsChange_Notification=} [properties] Properties to set
         * @returns {CParental_ParentalSettingsChange_Notification} CParental_ParentalSettingsChange_Notification instance
         */
        CParental_ParentalSettingsChange_Notification.create = function create(properties) {
            return new CParental_ParentalSettingsChange_Notification(properties);
        };
    
        /**
         * Encodes the specified CParental_ParentalSettingsChange_Notification message. Does not implicitly {@link CParental_ParentalSettingsChange_Notification.verify|verify} messages.
         * @function encode
         * @memberof CParental_ParentalSettingsChange_Notification
         * @static
         * @param {ICParental_ParentalSettingsChange_Notification} message CParental_ParentalSettingsChange_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ParentalSettingsChange_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serialized_settings != null && message.hasOwnProperty("serialized_settings"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.serialized_settings);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sessionid);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_ParentalSettingsChange_Notification message, length delimited. Does not implicitly {@link CParental_ParentalSettingsChange_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_ParentalSettingsChange_Notification
         * @static
         * @param {ICParental_ParentalSettingsChange_Notification} message CParental_ParentalSettingsChange_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ParentalSettingsChange_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_ParentalSettingsChange_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_ParentalSettingsChange_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_ParentalSettingsChange_Notification} CParental_ParentalSettingsChange_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ParentalSettingsChange_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_ParentalSettingsChange_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serialized_settings = reader.bytes();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                case 3:
                    message.password = reader.string();
                    break;
                case 4:
                    message.sessionid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_ParentalSettingsChange_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_ParentalSettingsChange_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_ParentalSettingsChange_Notification} CParental_ParentalSettingsChange_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ParentalSettingsChange_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_ParentalSettingsChange_Notification message.
         * @function verify
         * @memberof CParental_ParentalSettingsChange_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_ParentalSettingsChange_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serialized_settings != null && message.hasOwnProperty("serialized_settings"))
                if (!(message.serialized_settings && typeof message.serialized_settings.length === "number" || $util.isString(message.serialized_settings)))
                    return "serialized_settings: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isString(message.sessionid))
                    return "sessionid: string expected";
            return null;
        };
    
        /**
         * Creates a CParental_ParentalSettingsChange_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_ParentalSettingsChange_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_ParentalSettingsChange_Notification} CParental_ParentalSettingsChange_Notification
         */
        CParental_ParentalSettingsChange_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_ParentalSettingsChange_Notification)
                return object;
            var message = new $root.CParental_ParentalSettingsChange_Notification();
            if (object.serialized_settings != null)
                if (typeof object.serialized_settings === "string")
                    $util.base64.decode(object.serialized_settings, message.serialized_settings = $util.newBuffer($util.base64.length(object.serialized_settings)), 0);
                else if (object.serialized_settings.length)
                    message.serialized_settings = object.serialized_settings;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            if (object.password != null)
                message.password = String(object.password);
            if (object.sessionid != null)
                message.sessionid = String(object.sessionid);
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_ParentalSettingsChange_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_ParentalSettingsChange_Notification
         * @static
         * @param {CParental_ParentalSettingsChange_Notification} message CParental_ParentalSettingsChange_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_ParentalSettingsChange_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.serialized_settings = "";
                else {
                    object.serialized_settings = [];
                    if (options.bytes !== Array)
                        object.serialized_settings = $util.newBuffer(object.serialized_settings);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
                object.password = "";
                object.sessionid = "";
            }
            if (message.serialized_settings != null && message.hasOwnProperty("serialized_settings"))
                object.serialized_settings = options.bytes === String ? $util.base64.encode(message.serialized_settings, 0, message.serialized_settings.length) : options.bytes === Array ? Array.prototype.slice.call(message.serialized_settings) : message.serialized_settings;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                object.sessionid = message.sessionid;
            return object;
        };
    
        /**
         * Converts this CParental_ParentalSettingsChange_Notification to JSON.
         * @function toJSON
         * @memberof CParental_ParentalSettingsChange_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_ParentalSettingsChange_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_ParentalSettingsChange_Notification;
    })();
    
    $root.CParental_ParentalUnlock_Notification = (function() {
    
        /**
         * Properties of a CParental_ParentalUnlock_Notification.
         * @exports ICParental_ParentalUnlock_Notification
         * @interface ICParental_ParentalUnlock_Notification
         * @property {string|null} [password] CParental_ParentalUnlock_Notification password
         * @property {string|null} [sessionid] CParental_ParentalUnlock_Notification sessionid
         */
    
        /**
         * Constructs a new CParental_ParentalUnlock_Notification.
         * @exports CParental_ParentalUnlock_Notification
         * @classdesc Represents a CParental_ParentalUnlock_Notification.
         * @implements ICParental_ParentalUnlock_Notification
         * @constructor
         * @param {ICParental_ParentalUnlock_Notification=} [properties] Properties to set
         */
        function CParental_ParentalUnlock_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_ParentalUnlock_Notification password.
         * @member {string} password
         * @memberof CParental_ParentalUnlock_Notification
         * @instance
         */
        CParental_ParentalUnlock_Notification.prototype.password = "";
    
        /**
         * CParental_ParentalUnlock_Notification sessionid.
         * @member {string} sessionid
         * @memberof CParental_ParentalUnlock_Notification
         * @instance
         */
        CParental_ParentalUnlock_Notification.prototype.sessionid = "";
    
        /**
         * Creates a new CParental_ParentalUnlock_Notification instance using the specified properties.
         * @function create
         * @memberof CParental_ParentalUnlock_Notification
         * @static
         * @param {ICParental_ParentalUnlock_Notification=} [properties] Properties to set
         * @returns {CParental_ParentalUnlock_Notification} CParental_ParentalUnlock_Notification instance
         */
        CParental_ParentalUnlock_Notification.create = function create(properties) {
            return new CParental_ParentalUnlock_Notification(properties);
        };
    
        /**
         * Encodes the specified CParental_ParentalUnlock_Notification message. Does not implicitly {@link CParental_ParentalUnlock_Notification.verify|verify} messages.
         * @function encode
         * @memberof CParental_ParentalUnlock_Notification
         * @static
         * @param {ICParental_ParentalUnlock_Notification} message CParental_ParentalUnlock_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ParentalUnlock_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.password);
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionid);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_ParentalUnlock_Notification message, length delimited. Does not implicitly {@link CParental_ParentalUnlock_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_ParentalUnlock_Notification
         * @static
         * @param {ICParental_ParentalUnlock_Notification} message CParental_ParentalUnlock_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ParentalUnlock_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_ParentalUnlock_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_ParentalUnlock_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_ParentalUnlock_Notification} CParental_ParentalUnlock_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ParentalUnlock_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_ParentalUnlock_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.password = reader.string();
                    break;
                case 2:
                    message.sessionid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_ParentalUnlock_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_ParentalUnlock_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_ParentalUnlock_Notification} CParental_ParentalUnlock_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ParentalUnlock_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_ParentalUnlock_Notification message.
         * @function verify
         * @memberof CParental_ParentalUnlock_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_ParentalUnlock_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isString(message.sessionid))
                    return "sessionid: string expected";
            return null;
        };
    
        /**
         * Creates a CParental_ParentalUnlock_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_ParentalUnlock_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_ParentalUnlock_Notification} CParental_ParentalUnlock_Notification
         */
        CParental_ParentalUnlock_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_ParentalUnlock_Notification)
                return object;
            var message = new $root.CParental_ParentalUnlock_Notification();
            if (object.password != null)
                message.password = String(object.password);
            if (object.sessionid != null)
                message.sessionid = String(object.sessionid);
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_ParentalUnlock_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_ParentalUnlock_Notification
         * @static
         * @param {CParental_ParentalUnlock_Notification} message CParental_ParentalUnlock_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_ParentalUnlock_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.password = "";
                object.sessionid = "";
            }
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                object.sessionid = message.sessionid;
            return object;
        };
    
        /**
         * Converts this CParental_ParentalUnlock_Notification to JSON.
         * @function toJSON
         * @memberof CParental_ParentalUnlock_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_ParentalUnlock_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_ParentalUnlock_Notification;
    })();
    
    $root.CParental_ParentalLock_Notification = (function() {
    
        /**
         * Properties of a CParental_ParentalLock_Notification.
         * @exports ICParental_ParentalLock_Notification
         * @interface ICParental_ParentalLock_Notification
         * @property {string|null} [sessionid] CParental_ParentalLock_Notification sessionid
         */
    
        /**
         * Constructs a new CParental_ParentalLock_Notification.
         * @exports CParental_ParentalLock_Notification
         * @classdesc Represents a CParental_ParentalLock_Notification.
         * @implements ICParental_ParentalLock_Notification
         * @constructor
         * @param {ICParental_ParentalLock_Notification=} [properties] Properties to set
         */
        function CParental_ParentalLock_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CParental_ParentalLock_Notification sessionid.
         * @member {string} sessionid
         * @memberof CParental_ParentalLock_Notification
         * @instance
         */
        CParental_ParentalLock_Notification.prototype.sessionid = "";
    
        /**
         * Creates a new CParental_ParentalLock_Notification instance using the specified properties.
         * @function create
         * @memberof CParental_ParentalLock_Notification
         * @static
         * @param {ICParental_ParentalLock_Notification=} [properties] Properties to set
         * @returns {CParental_ParentalLock_Notification} CParental_ParentalLock_Notification instance
         */
        CParental_ParentalLock_Notification.create = function create(properties) {
            return new CParental_ParentalLock_Notification(properties);
        };
    
        /**
         * Encodes the specified CParental_ParentalLock_Notification message. Does not implicitly {@link CParental_ParentalLock_Notification.verify|verify} messages.
         * @function encode
         * @memberof CParental_ParentalLock_Notification
         * @static
         * @param {ICParental_ParentalLock_Notification} message CParental_ParentalLock_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ParentalLock_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionid);
            return writer;
        };
    
        /**
         * Encodes the specified CParental_ParentalLock_Notification message, length delimited. Does not implicitly {@link CParental_ParentalLock_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CParental_ParentalLock_Notification
         * @static
         * @param {ICParental_ParentalLock_Notification} message CParental_ParentalLock_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CParental_ParentalLock_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CParental_ParentalLock_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CParental_ParentalLock_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CParental_ParentalLock_Notification} CParental_ParentalLock_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ParentalLock_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CParental_ParentalLock_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CParental_ParentalLock_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CParental_ParentalLock_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CParental_ParentalLock_Notification} CParental_ParentalLock_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CParental_ParentalLock_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CParental_ParentalLock_Notification message.
         * @function verify
         * @memberof CParental_ParentalLock_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CParental_ParentalLock_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isString(message.sessionid))
                    return "sessionid: string expected";
            return null;
        };
    
        /**
         * Creates a CParental_ParentalLock_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CParental_ParentalLock_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CParental_ParentalLock_Notification} CParental_ParentalLock_Notification
         */
        CParental_ParentalLock_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CParental_ParentalLock_Notification)
                return object;
            var message = new $root.CParental_ParentalLock_Notification();
            if (object.sessionid != null)
                message.sessionid = String(object.sessionid);
            return message;
        };
    
        /**
         * Creates a plain object from a CParental_ParentalLock_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CParental_ParentalLock_Notification
         * @static
         * @param {CParental_ParentalLock_Notification} message CParental_ParentalLock_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CParental_ParentalLock_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.sessionid = "";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                object.sessionid = message.sessionid;
            return object;
        };
    
        /**
         * Converts this CParental_ParentalLock_Notification to JSON.
         * @function toJSON
         * @memberof CParental_ParentalLock_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CParental_ParentalLock_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CParental_ParentalLock_Notification;
    })();
    
    $root.Parental = (function() {
    
        /**
         * Constructs a new Parental service.
         * @exports Parental
         * @classdesc Represents a Parental
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Parental(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Parental.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Parental;
    
        /**
         * Creates new Parental service using the specified rpc implementation.
         * @function create
         * @memberof Parental
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Parental} RPC service. Useful where requests and/or responses are streamed.
         */
        Parental.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Parental#enableParentalSettings}.
         * @memberof Parental
         * @typedef EnableParentalSettingsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_EnableParentalSettings_Response} [response] CParental_EnableParentalSettings_Response
         */
    
        /**
         * Calls EnableParentalSettings.
         * @function enableParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_EnableParentalSettings_Request} request CParental_EnableParentalSettings_Request message or plain object
         * @param {Parental.EnableParentalSettingsCallback} callback Node-style callback called with the error, if any, and CParental_EnableParentalSettings_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.enableParentalSettings = function enableParentalSettings(request, callback) {
            return this.rpcCall(enableParentalSettings, $root.CParental_EnableParentalSettings_Request, $root.CParental_EnableParentalSettings_Response, request, callback);
        }, "name", { value: "EnableParentalSettings" });
    
        /**
         * Calls EnableParentalSettings.
         * @function enableParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_EnableParentalSettings_Request} request CParental_EnableParentalSettings_Request message or plain object
         * @returns {Promise<CParental_EnableParentalSettings_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#disableParentalSettings}.
         * @memberof Parental
         * @typedef DisableParentalSettingsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_DisableParentalSettings_Response} [response] CParental_DisableParentalSettings_Response
         */
    
        /**
         * Calls DisableParentalSettings.
         * @function disableParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_DisableParentalSettings_Request} request CParental_DisableParentalSettings_Request message or plain object
         * @param {Parental.DisableParentalSettingsCallback} callback Node-style callback called with the error, if any, and CParental_DisableParentalSettings_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.disableParentalSettings = function disableParentalSettings(request, callback) {
            return this.rpcCall(disableParentalSettings, $root.CParental_DisableParentalSettings_Request, $root.CParental_DisableParentalSettings_Response, request, callback);
        }, "name", { value: "DisableParentalSettings" });
    
        /**
         * Calls DisableParentalSettings.
         * @function disableParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_DisableParentalSettings_Request} request CParental_DisableParentalSettings_Request message or plain object
         * @returns {Promise<CParental_DisableParentalSettings_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#getParentalSettings}.
         * @memberof Parental
         * @typedef GetParentalSettingsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_GetParentalSettings_Response} [response] CParental_GetParentalSettings_Response
         */
    
        /**
         * Calls GetParentalSettings.
         * @function getParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_GetParentalSettings_Request} request CParental_GetParentalSettings_Request message or plain object
         * @param {Parental.GetParentalSettingsCallback} callback Node-style callback called with the error, if any, and CParental_GetParentalSettings_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.getParentalSettings = function getParentalSettings(request, callback) {
            return this.rpcCall(getParentalSettings, $root.CParental_GetParentalSettings_Request, $root.CParental_GetParentalSettings_Response, request, callback);
        }, "name", { value: "GetParentalSettings" });
    
        /**
         * Calls GetParentalSettings.
         * @function getParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_GetParentalSettings_Request} request CParental_GetParentalSettings_Request message or plain object
         * @returns {Promise<CParental_GetParentalSettings_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#getSignedParentalSettings}.
         * @memberof Parental
         * @typedef GetSignedParentalSettingsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_GetSignedParentalSettings_Response} [response] CParental_GetSignedParentalSettings_Response
         */
    
        /**
         * Calls GetSignedParentalSettings.
         * @function getSignedParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_GetSignedParentalSettings_Request} request CParental_GetSignedParentalSettings_Request message or plain object
         * @param {Parental.GetSignedParentalSettingsCallback} callback Node-style callback called with the error, if any, and CParental_GetSignedParentalSettings_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.getSignedParentalSettings = function getSignedParentalSettings(request, callback) {
            return this.rpcCall(getSignedParentalSettings, $root.CParental_GetSignedParentalSettings_Request, $root.CParental_GetSignedParentalSettings_Response, request, callback);
        }, "name", { value: "GetSignedParentalSettings" });
    
        /**
         * Calls GetSignedParentalSettings.
         * @function getSignedParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_GetSignedParentalSettings_Request} request CParental_GetSignedParentalSettings_Request message or plain object
         * @returns {Promise<CParental_GetSignedParentalSettings_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#setParentalSettings}.
         * @memberof Parental
         * @typedef SetParentalSettingsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_SetParentalSettings_Response} [response] CParental_SetParentalSettings_Response
         */
    
        /**
         * Calls SetParentalSettings.
         * @function setParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_SetParentalSettings_Request} request CParental_SetParentalSettings_Request message or plain object
         * @param {Parental.SetParentalSettingsCallback} callback Node-style callback called with the error, if any, and CParental_SetParentalSettings_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.setParentalSettings = function setParentalSettings(request, callback) {
            return this.rpcCall(setParentalSettings, $root.CParental_SetParentalSettings_Request, $root.CParental_SetParentalSettings_Response, request, callback);
        }, "name", { value: "SetParentalSettings" });
    
        /**
         * Calls SetParentalSettings.
         * @function setParentalSettings
         * @memberof Parental
         * @instance
         * @param {ICParental_SetParentalSettings_Request} request CParental_SetParentalSettings_Request message or plain object
         * @returns {Promise<CParental_SetParentalSettings_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#validateToken}.
         * @memberof Parental
         * @typedef ValidateTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_ValidateToken_Response} [response] CParental_ValidateToken_Response
         */
    
        /**
         * Calls ValidateToken.
         * @function validateToken
         * @memberof Parental
         * @instance
         * @param {ICParental_ValidateToken_Request} request CParental_ValidateToken_Request message or plain object
         * @param {Parental.ValidateTokenCallback} callback Node-style callback called with the error, if any, and CParental_ValidateToken_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.validateToken = function validateToken(request, callback) {
            return this.rpcCall(validateToken, $root.CParental_ValidateToken_Request, $root.CParental_ValidateToken_Response, request, callback);
        }, "name", { value: "ValidateToken" });
    
        /**
         * Calls ValidateToken.
         * @function validateToken
         * @memberof Parental
         * @instance
         * @param {ICParental_ValidateToken_Request} request CParental_ValidateToken_Request message or plain object
         * @returns {Promise<CParental_ValidateToken_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#validatePassword}.
         * @memberof Parental
         * @typedef ValidatePasswordCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_ValidatePassword_Response} [response] CParental_ValidatePassword_Response
         */
    
        /**
         * Calls ValidatePassword.
         * @function validatePassword
         * @memberof Parental
         * @instance
         * @param {ICParental_ValidatePassword_Request} request CParental_ValidatePassword_Request message or plain object
         * @param {Parental.ValidatePasswordCallback} callback Node-style callback called with the error, if any, and CParental_ValidatePassword_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.validatePassword = function validatePassword(request, callback) {
            return this.rpcCall(validatePassword, $root.CParental_ValidatePassword_Request, $root.CParental_ValidatePassword_Response, request, callback);
        }, "name", { value: "ValidatePassword" });
    
        /**
         * Calls ValidatePassword.
         * @function validatePassword
         * @memberof Parental
         * @instance
         * @param {ICParental_ValidatePassword_Request} request CParental_ValidatePassword_Request message or plain object
         * @returns {Promise<CParental_ValidatePassword_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#lockClient}.
         * @memberof Parental
         * @typedef LockClientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_LockClient_Response} [response] CParental_LockClient_Response
         */
    
        /**
         * Calls LockClient.
         * @function lockClient
         * @memberof Parental
         * @instance
         * @param {ICParental_LockClient_Request} request CParental_LockClient_Request message or plain object
         * @param {Parental.LockClientCallback} callback Node-style callback called with the error, if any, and CParental_LockClient_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.lockClient = function lockClient(request, callback) {
            return this.rpcCall(lockClient, $root.CParental_LockClient_Request, $root.CParental_LockClient_Response, request, callback);
        }, "name", { value: "LockClient" });
    
        /**
         * Calls LockClient.
         * @function lockClient
         * @memberof Parental
         * @instance
         * @param {ICParental_LockClient_Request} request CParental_LockClient_Request message or plain object
         * @returns {Promise<CParental_LockClient_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#requestRecoveryCode}.
         * @memberof Parental
         * @typedef RequestRecoveryCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_RequestRecoveryCode_Response} [response] CParental_RequestRecoveryCode_Response
         */
    
        /**
         * Calls RequestRecoveryCode.
         * @function requestRecoveryCode
         * @memberof Parental
         * @instance
         * @param {ICParental_RequestRecoveryCode_Request} request CParental_RequestRecoveryCode_Request message or plain object
         * @param {Parental.RequestRecoveryCodeCallback} callback Node-style callback called with the error, if any, and CParental_RequestRecoveryCode_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.requestRecoveryCode = function requestRecoveryCode(request, callback) {
            return this.rpcCall(requestRecoveryCode, $root.CParental_RequestRecoveryCode_Request, $root.CParental_RequestRecoveryCode_Response, request, callback);
        }, "name", { value: "RequestRecoveryCode" });
    
        /**
         * Calls RequestRecoveryCode.
         * @function requestRecoveryCode
         * @memberof Parental
         * @instance
         * @param {ICParental_RequestRecoveryCode_Request} request CParental_RequestRecoveryCode_Request message or plain object
         * @returns {Promise<CParental_RequestRecoveryCode_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Parental#disableWithRecoveryCode}.
         * @memberof Parental
         * @typedef DisableWithRecoveryCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CParental_DisableWithRecoveryCode_Response} [response] CParental_DisableWithRecoveryCode_Response
         */
    
        /**
         * Calls DisableWithRecoveryCode.
         * @function disableWithRecoveryCode
         * @memberof Parental
         * @instance
         * @param {ICParental_DisableWithRecoveryCode_Request} request CParental_DisableWithRecoveryCode_Request message or plain object
         * @param {Parental.DisableWithRecoveryCodeCallback} callback Node-style callback called with the error, if any, and CParental_DisableWithRecoveryCode_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Parental.prototype.disableWithRecoveryCode = function disableWithRecoveryCode(request, callback) {
            return this.rpcCall(disableWithRecoveryCode, $root.CParental_DisableWithRecoveryCode_Request, $root.CParental_DisableWithRecoveryCode_Response, request, callback);
        }, "name", { value: "DisableWithRecoveryCode" });
    
        /**
         * Calls DisableWithRecoveryCode.
         * @function disableWithRecoveryCode
         * @memberof Parental
         * @instance
         * @param {ICParental_DisableWithRecoveryCode_Request} request CParental_DisableWithRecoveryCode_Request message or plain object
         * @returns {Promise<CParental_DisableWithRecoveryCode_Response>} Promise
         * @variation 2
         */
    
        return Parental;
    })();
    
    $root.ParentalClient = (function() {
    
        /**
         * Constructs a new ParentalClient service.
         * @exports ParentalClient
         * @classdesc Represents a ParentalClient
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ParentalClient(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (ParentalClient.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ParentalClient;
    
        /**
         * Creates new ParentalClient service using the specified rpc implementation.
         * @function create
         * @memberof ParentalClient
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ParentalClient} RPC service. Useful where requests and/or responses are streamed.
         */
        ParentalClient.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link ParentalClient#notifySettingsChange}.
         * @memberof ParentalClient
         * @typedef NotifySettingsChangeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifySettingsChange.
         * @function notifySettingsChange
         * @memberof ParentalClient
         * @instance
         * @param {ICParental_ParentalSettingsChange_Notification} request CParental_ParentalSettingsChange_Notification message or plain object
         * @param {ParentalClient.NotifySettingsChangeCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ParentalClient.prototype.notifySettingsChange = function notifySettingsChange(request, callback) {
            return this.rpcCall(notifySettingsChange, $root.CParental_ParentalSettingsChange_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifySettingsChange" });
    
        /**
         * Calls NotifySettingsChange.
         * @function notifySettingsChange
         * @memberof ParentalClient
         * @instance
         * @param {ICParental_ParentalSettingsChange_Notification} request CParental_ParentalSettingsChange_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ParentalClient#notifyUnlock}.
         * @memberof ParentalClient
         * @typedef NotifyUnlockCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyUnlock.
         * @function notifyUnlock
         * @memberof ParentalClient
         * @instance
         * @param {ICParental_ParentalUnlock_Notification} request CParental_ParentalUnlock_Notification message or plain object
         * @param {ParentalClient.NotifyUnlockCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ParentalClient.prototype.notifyUnlock = function notifyUnlock(request, callback) {
            return this.rpcCall(notifyUnlock, $root.CParental_ParentalUnlock_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyUnlock" });
    
        /**
         * Calls NotifyUnlock.
         * @function notifyUnlock
         * @memberof ParentalClient
         * @instance
         * @param {ICParental_ParentalUnlock_Notification} request CParental_ParentalUnlock_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ParentalClient#notifyLock}.
         * @memberof ParentalClient
         * @typedef NotifyLockCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyLock.
         * @function notifyLock
         * @memberof ParentalClient
         * @instance
         * @param {ICParental_ParentalLock_Notification} request CParental_ParentalLock_Notification message or plain object
         * @param {ParentalClient.NotifyLockCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ParentalClient.prototype.notifyLock = function notifyLock(request, callback) {
            return this.rpcCall(notifyLock, $root.CParental_ParentalLock_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyLock" });
    
        /**
         * Calls NotifyLock.
         * @function notifyLock
         * @memberof ParentalClient
         * @instance
         * @param {ICParental_ParentalLock_Notification} request CParental_ParentalLock_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        return ParentalClient;
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
