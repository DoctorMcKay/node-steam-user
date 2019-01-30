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
    
    $root.CGameNotifications_Variable = (function() {
    
        /**
         * Properties of a CGameNotifications_Variable.
         * @exports ICGameNotifications_Variable
         * @interface ICGameNotifications_Variable
         * @property {string|null} [key] CGameNotifications_Variable key
         * @property {string|null} [value] CGameNotifications_Variable value
         */
    
        /**
         * Constructs a new CGameNotifications_Variable.
         * @exports CGameNotifications_Variable
         * @classdesc Represents a CGameNotifications_Variable.
         * @implements ICGameNotifications_Variable
         * @constructor
         * @param {ICGameNotifications_Variable=} [properties] Properties to set
         */
        function CGameNotifications_Variable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_Variable key.
         * @member {string} key
         * @memberof CGameNotifications_Variable
         * @instance
         */
        CGameNotifications_Variable.prototype.key = "";
    
        /**
         * CGameNotifications_Variable value.
         * @member {string} value
         * @memberof CGameNotifications_Variable
         * @instance
         */
        CGameNotifications_Variable.prototype.value = "";
    
        /**
         * Creates a new CGameNotifications_Variable instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_Variable
         * @static
         * @param {ICGameNotifications_Variable=} [properties] Properties to set
         * @returns {CGameNotifications_Variable} CGameNotifications_Variable instance
         */
        CGameNotifications_Variable.create = function create(properties) {
            return new CGameNotifications_Variable(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_Variable message. Does not implicitly {@link CGameNotifications_Variable.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_Variable
         * @static
         * @param {ICGameNotifications_Variable} message CGameNotifications_Variable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_Variable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_Variable message, length delimited. Does not implicitly {@link CGameNotifications_Variable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_Variable
         * @static
         * @param {ICGameNotifications_Variable} message CGameNotifications_Variable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_Variable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_Variable message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_Variable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_Variable} CGameNotifications_Variable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_Variable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_Variable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_Variable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_Variable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_Variable} CGameNotifications_Variable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_Variable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_Variable message.
         * @function verify
         * @memberof CGameNotifications_Variable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_Variable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_Variable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_Variable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_Variable} CGameNotifications_Variable
         */
        CGameNotifications_Variable.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_Variable)
                return object;
            var message = new $root.CGameNotifications_Variable();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_Variable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_Variable
         * @static
         * @param {CGameNotifications_Variable} message CGameNotifications_Variable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_Variable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_Variable to JSON.
         * @function toJSON
         * @memberof CGameNotifications_Variable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_Variable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_Variable;
    })();
    
    $root.CGameNotifications_LocalizedText = (function() {
    
        /**
         * Properties of a CGameNotifications_LocalizedText.
         * @exports ICGameNotifications_LocalizedText
         * @interface ICGameNotifications_LocalizedText
         * @property {string|null} [token] CGameNotifications_LocalizedText token
         * @property {Array.<ICGameNotifications_Variable>|null} [variables] CGameNotifications_LocalizedText variables
         * @property {string|null} [rendered_text] CGameNotifications_LocalizedText rendered_text
         */
    
        /**
         * Constructs a new CGameNotifications_LocalizedText.
         * @exports CGameNotifications_LocalizedText
         * @classdesc Represents a CGameNotifications_LocalizedText.
         * @implements ICGameNotifications_LocalizedText
         * @constructor
         * @param {ICGameNotifications_LocalizedText=} [properties] Properties to set
         */
        function CGameNotifications_LocalizedText(properties) {
            this.variables = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_LocalizedText token.
         * @member {string} token
         * @memberof CGameNotifications_LocalizedText
         * @instance
         */
        CGameNotifications_LocalizedText.prototype.token = "";
    
        /**
         * CGameNotifications_LocalizedText variables.
         * @member {Array.<ICGameNotifications_Variable>} variables
         * @memberof CGameNotifications_LocalizedText
         * @instance
         */
        CGameNotifications_LocalizedText.prototype.variables = $util.emptyArray;
    
        /**
         * CGameNotifications_LocalizedText rendered_text.
         * @member {string} rendered_text
         * @memberof CGameNotifications_LocalizedText
         * @instance
         */
        CGameNotifications_LocalizedText.prototype.rendered_text = "";
    
        /**
         * Creates a new CGameNotifications_LocalizedText instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_LocalizedText
         * @static
         * @param {ICGameNotifications_LocalizedText=} [properties] Properties to set
         * @returns {CGameNotifications_LocalizedText} CGameNotifications_LocalizedText instance
         */
        CGameNotifications_LocalizedText.create = function create(properties) {
            return new CGameNotifications_LocalizedText(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_LocalizedText message. Does not implicitly {@link CGameNotifications_LocalizedText.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_LocalizedText
         * @static
         * @param {ICGameNotifications_LocalizedText} message CGameNotifications_LocalizedText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_LocalizedText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.variables != null && message.variables.length)
                for (var i = 0; i < message.variables.length; ++i)
                    $root.CGameNotifications_Variable.encode(message.variables[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.rendered_text != null && message.hasOwnProperty("rendered_text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rendered_text);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_LocalizedText message, length delimited. Does not implicitly {@link CGameNotifications_LocalizedText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_LocalizedText
         * @static
         * @param {ICGameNotifications_LocalizedText} message CGameNotifications_LocalizedText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_LocalizedText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_LocalizedText message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_LocalizedText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_LocalizedText} CGameNotifications_LocalizedText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_LocalizedText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_LocalizedText();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    if (!(message.variables && message.variables.length))
                        message.variables = [];
                    message.variables.push($root.CGameNotifications_Variable.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.rendered_text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_LocalizedText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_LocalizedText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_LocalizedText} CGameNotifications_LocalizedText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_LocalizedText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_LocalizedText message.
         * @function verify
         * @memberof CGameNotifications_LocalizedText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_LocalizedText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.variables != null && message.hasOwnProperty("variables")) {
                if (!Array.isArray(message.variables))
                    return "variables: array expected";
                for (var i = 0; i < message.variables.length; ++i) {
                    var error = $root.CGameNotifications_Variable.verify(message.variables[i]);
                    if (error)
                        return "variables." + error;
                }
            }
            if (message.rendered_text != null && message.hasOwnProperty("rendered_text"))
                if (!$util.isString(message.rendered_text))
                    return "rendered_text: string expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_LocalizedText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_LocalizedText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_LocalizedText} CGameNotifications_LocalizedText
         */
        CGameNotifications_LocalizedText.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_LocalizedText)
                return object;
            var message = new $root.CGameNotifications_LocalizedText();
            if (object.token != null)
                message.token = String(object.token);
            if (object.variables) {
                if (!Array.isArray(object.variables))
                    throw TypeError(".CGameNotifications_LocalizedText.variables: array expected");
                message.variables = [];
                for (var i = 0; i < object.variables.length; ++i) {
                    if (typeof object.variables[i] !== "object")
                        throw TypeError(".CGameNotifications_LocalizedText.variables: object expected");
                    message.variables[i] = $root.CGameNotifications_Variable.fromObject(object.variables[i]);
                }
            }
            if (object.rendered_text != null)
                message.rendered_text = String(object.rendered_text);
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_LocalizedText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_LocalizedText
         * @static
         * @param {CGameNotifications_LocalizedText} message CGameNotifications_LocalizedText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_LocalizedText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.variables = [];
            if (options.defaults) {
                object.token = "";
                object.rendered_text = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.variables && message.variables.length) {
                object.variables = [];
                for (var j = 0; j < message.variables.length; ++j)
                    object.variables[j] = $root.CGameNotifications_Variable.toObject(message.variables[j], options);
            }
            if (message.rendered_text != null && message.hasOwnProperty("rendered_text"))
                object.rendered_text = message.rendered_text;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_LocalizedText to JSON.
         * @function toJSON
         * @memberof CGameNotifications_LocalizedText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_LocalizedText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_LocalizedText;
    })();
    
    $root.CGameNotifications_UserStatus = (function() {
    
        /**
         * Properties of a CGameNotifications_UserStatus.
         * @exports ICGameNotifications_UserStatus
         * @interface ICGameNotifications_UserStatus
         * @property {number|Long|null} [steamid] CGameNotifications_UserStatus steamid
         * @property {string|null} [state] CGameNotifications_UserStatus state
         * @property {ICGameNotifications_LocalizedText|null} [title] CGameNotifications_UserStatus title
         * @property {ICGameNotifications_LocalizedText|null} [message] CGameNotifications_UserStatus message
         */
    
        /**
         * Constructs a new CGameNotifications_UserStatus.
         * @exports CGameNotifications_UserStatus
         * @classdesc Represents a CGameNotifications_UserStatus.
         * @implements ICGameNotifications_UserStatus
         * @constructor
         * @param {ICGameNotifications_UserStatus=} [properties] Properties to set
         */
        function CGameNotifications_UserStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_UserStatus steamid.
         * @member {number|Long} steamid
         * @memberof CGameNotifications_UserStatus
         * @instance
         */
        CGameNotifications_UserStatus.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CGameNotifications_UserStatus state.
         * @member {string} state
         * @memberof CGameNotifications_UserStatus
         * @instance
         */
        CGameNotifications_UserStatus.prototype.state = "";
    
        /**
         * CGameNotifications_UserStatus title.
         * @member {ICGameNotifications_LocalizedText|null|undefined} title
         * @memberof CGameNotifications_UserStatus
         * @instance
         */
        CGameNotifications_UserStatus.prototype.title = null;
    
        /**
         * CGameNotifications_UserStatus message.
         * @member {ICGameNotifications_LocalizedText|null|undefined} message
         * @memberof CGameNotifications_UserStatus
         * @instance
         */
        CGameNotifications_UserStatus.prototype.message = null;
    
        /**
         * Creates a new CGameNotifications_UserStatus instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_UserStatus
         * @static
         * @param {ICGameNotifications_UserStatus=} [properties] Properties to set
         * @returns {CGameNotifications_UserStatus} CGameNotifications_UserStatus instance
         */
        CGameNotifications_UserStatus.create = function create(properties) {
            return new CGameNotifications_UserStatus(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_UserStatus message. Does not implicitly {@link CGameNotifications_UserStatus.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_UserStatus
         * @static
         * @param {ICGameNotifications_UserStatus} message CGameNotifications_UserStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UserStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.state);
            if (message.title != null && message.hasOwnProperty("title"))
                $root.CGameNotifications_LocalizedText.encode(message.title, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.message != null && message.hasOwnProperty("message"))
                $root.CGameNotifications_LocalizedText.encode(message.message, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_UserStatus message, length delimited. Does not implicitly {@link CGameNotifications_UserStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_UserStatus
         * @static
         * @param {ICGameNotifications_UserStatus} message CGameNotifications_UserStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UserStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_UserStatus message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_UserStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_UserStatus} CGameNotifications_UserStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UserStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_UserStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.state = reader.string();
                    break;
                case 3:
                    message.title = $root.CGameNotifications_LocalizedText.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.message = $root.CGameNotifications_LocalizedText.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_UserStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_UserStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_UserStatus} CGameNotifications_UserStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UserStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_UserStatus message.
         * @function verify
         * @memberof CGameNotifications_UserStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_UserStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                var error = $root.CGameNotifications_LocalizedText.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.CGameNotifications_LocalizedText.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };
    
        /**
         * Creates a CGameNotifications_UserStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_UserStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_UserStatus} CGameNotifications_UserStatus
         */
        CGameNotifications_UserStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_UserStatus)
                return object;
            var message = new $root.CGameNotifications_UserStatus();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.state != null)
                message.state = String(object.state);
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".CGameNotifications_UserStatus.title: object expected");
                message.title = $root.CGameNotifications_LocalizedText.fromObject(object.title);
            }
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".CGameNotifications_UserStatus.message: object expected");
                message.message = $root.CGameNotifications_LocalizedText.fromObject(object.message);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_UserStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_UserStatus
         * @static
         * @param {CGameNotifications_UserStatus} message CGameNotifications_UserStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_UserStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.state = "";
                object.title = null;
                object.message = null;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.CGameNotifications_LocalizedText.toObject(message.title, options);
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.CGameNotifications_LocalizedText.toObject(message.message, options);
            return object;
        };
    
        /**
         * Converts this CGameNotifications_UserStatus to JSON.
         * @function toJSON
         * @memberof CGameNotifications_UserStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_UserStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_UserStatus;
    })();
    
    $root.CGameNotifications_CreateSession_Request = (function() {
    
        /**
         * Properties of a CGameNotifications_CreateSession_Request.
         * @exports ICGameNotifications_CreateSession_Request
         * @interface ICGameNotifications_CreateSession_Request
         * @property {number|null} [appid] CGameNotifications_CreateSession_Request appid
         * @property {number|Long|null} [context] CGameNotifications_CreateSession_Request context
         * @property {ICGameNotifications_LocalizedText|null} [title] CGameNotifications_CreateSession_Request title
         * @property {Array.<ICGameNotifications_UserStatus>|null} [users] CGameNotifications_CreateSession_Request users
         * @property {number|Long|null} [steamid] CGameNotifications_CreateSession_Request steamid
         */
    
        /**
         * Constructs a new CGameNotifications_CreateSession_Request.
         * @exports CGameNotifications_CreateSession_Request
         * @classdesc Represents a CGameNotifications_CreateSession_Request.
         * @implements ICGameNotifications_CreateSession_Request
         * @constructor
         * @param {ICGameNotifications_CreateSession_Request=} [properties] Properties to set
         */
        function CGameNotifications_CreateSession_Request(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_CreateSession_Request appid.
         * @member {number} appid
         * @memberof CGameNotifications_CreateSession_Request
         * @instance
         */
        CGameNotifications_CreateSession_Request.prototype.appid = 0;
    
        /**
         * CGameNotifications_CreateSession_Request context.
         * @member {number|Long} context
         * @memberof CGameNotifications_CreateSession_Request
         * @instance
         */
        CGameNotifications_CreateSession_Request.prototype.context = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CGameNotifications_CreateSession_Request title.
         * @member {ICGameNotifications_LocalizedText|null|undefined} title
         * @memberof CGameNotifications_CreateSession_Request
         * @instance
         */
        CGameNotifications_CreateSession_Request.prototype.title = null;
    
        /**
         * CGameNotifications_CreateSession_Request users.
         * @member {Array.<ICGameNotifications_UserStatus>} users
         * @memberof CGameNotifications_CreateSession_Request
         * @instance
         */
        CGameNotifications_CreateSession_Request.prototype.users = $util.emptyArray;
    
        /**
         * CGameNotifications_CreateSession_Request steamid.
         * @member {number|Long} steamid
         * @memberof CGameNotifications_CreateSession_Request
         * @instance
         */
        CGameNotifications_CreateSession_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CGameNotifications_CreateSession_Request instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_CreateSession_Request
         * @static
         * @param {ICGameNotifications_CreateSession_Request=} [properties] Properties to set
         * @returns {CGameNotifications_CreateSession_Request} CGameNotifications_CreateSession_Request instance
         */
        CGameNotifications_CreateSession_Request.create = function create(properties) {
            return new CGameNotifications_CreateSession_Request(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_CreateSession_Request message. Does not implicitly {@link CGameNotifications_CreateSession_Request.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_CreateSession_Request
         * @static
         * @param {ICGameNotifications_CreateSession_Request} message CGameNotifications_CreateSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_CreateSession_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.context != null && message.hasOwnProperty("context"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.context);
            if (message.title != null && message.hasOwnProperty("title"))
                $root.CGameNotifications_LocalizedText.encode(message.title, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.CGameNotifications_UserStatus.encode(message.users[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_CreateSession_Request message, length delimited. Does not implicitly {@link CGameNotifications_CreateSession_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_CreateSession_Request
         * @static
         * @param {ICGameNotifications_CreateSession_Request} message CGameNotifications_CreateSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_CreateSession_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_CreateSession_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_CreateSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_CreateSession_Request} CGameNotifications_CreateSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_CreateSession_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_CreateSession_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.context = reader.uint64();
                    break;
                case 3:
                    message.title = $root.CGameNotifications_LocalizedText.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.CGameNotifications_UserStatus.decode(reader, reader.uint32()));
                    break;
                case 5:
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
         * Decodes a CGameNotifications_CreateSession_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_CreateSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_CreateSession_Request} CGameNotifications_CreateSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_CreateSession_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_CreateSession_Request message.
         * @function verify
         * @memberof CGameNotifications_CreateSession_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_CreateSession_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isInteger(message.context) && !(message.context && $util.isInteger(message.context.low) && $util.isInteger(message.context.high)))
                    return "context: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                var error = $root.CGameNotifications_LocalizedText.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.CGameNotifications_UserStatus.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_CreateSession_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_CreateSession_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_CreateSession_Request} CGameNotifications_CreateSession_Request
         */
        CGameNotifications_CreateSession_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_CreateSession_Request)
                return object;
            var message = new $root.CGameNotifications_CreateSession_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.context != null)
                if ($util.Long)
                    (message.context = $util.Long.fromValue(object.context)).unsigned = true;
                else if (typeof object.context === "string")
                    message.context = parseInt(object.context, 10);
                else if (typeof object.context === "number")
                    message.context = object.context;
                else if (typeof object.context === "object")
                    message.context = new $util.LongBits(object.context.low >>> 0, object.context.high >>> 0).toNumber(true);
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".CGameNotifications_CreateSession_Request.title: object expected");
                message.title = $root.CGameNotifications_LocalizedText.fromObject(object.title);
            }
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".CGameNotifications_CreateSession_Request.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".CGameNotifications_CreateSession_Request.users: object expected");
                    message.users[i] = $root.CGameNotifications_UserStatus.fromObject(object.users[i]);
                }
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
         * Creates a plain object from a CGameNotifications_CreateSession_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_CreateSession_Request
         * @static
         * @param {CGameNotifications_CreateSession_Request} message CGameNotifications_CreateSession_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_CreateSession_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.context = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.context = options.longs === String ? "0" : 0;
                object.title = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.context != null && message.hasOwnProperty("context"))
                if (typeof message.context === "number")
                    object.context = options.longs === String ? String(message.context) : message.context;
                else
                    object.context = options.longs === String ? $util.Long.prototype.toString.call(message.context) : options.longs === Number ? new $util.LongBits(message.context.low >>> 0, message.context.high >>> 0).toNumber(true) : message.context;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.CGameNotifications_LocalizedText.toObject(message.title, options);
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.CGameNotifications_UserStatus.toObject(message.users[j], options);
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_CreateSession_Request to JSON.
         * @function toJSON
         * @memberof CGameNotifications_CreateSession_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_CreateSession_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_CreateSession_Request;
    })();
    
    $root.CGameNotifications_CreateSession_Response = (function() {
    
        /**
         * Properties of a CGameNotifications_CreateSession_Response.
         * @exports ICGameNotifications_CreateSession_Response
         * @interface ICGameNotifications_CreateSession_Response
         * @property {number|Long|null} [sessionid] CGameNotifications_CreateSession_Response sessionid
         */
    
        /**
         * Constructs a new CGameNotifications_CreateSession_Response.
         * @exports CGameNotifications_CreateSession_Response
         * @classdesc Represents a CGameNotifications_CreateSession_Response.
         * @implements ICGameNotifications_CreateSession_Response
         * @constructor
         * @param {ICGameNotifications_CreateSession_Response=} [properties] Properties to set
         */
        function CGameNotifications_CreateSession_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_CreateSession_Response sessionid.
         * @member {number|Long} sessionid
         * @memberof CGameNotifications_CreateSession_Response
         * @instance
         */
        CGameNotifications_CreateSession_Response.prototype.sessionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CGameNotifications_CreateSession_Response instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_CreateSession_Response
         * @static
         * @param {ICGameNotifications_CreateSession_Response=} [properties] Properties to set
         * @returns {CGameNotifications_CreateSession_Response} CGameNotifications_CreateSession_Response instance
         */
        CGameNotifications_CreateSession_Response.create = function create(properties) {
            return new CGameNotifications_CreateSession_Response(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_CreateSession_Response message. Does not implicitly {@link CGameNotifications_CreateSession_Response.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_CreateSession_Response
         * @static
         * @param {ICGameNotifications_CreateSession_Response} message CGameNotifications_CreateSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_CreateSession_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sessionid);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_CreateSession_Response message, length delimited. Does not implicitly {@link CGameNotifications_CreateSession_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_CreateSession_Response
         * @static
         * @param {ICGameNotifications_CreateSession_Response} message CGameNotifications_CreateSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_CreateSession_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_CreateSession_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_CreateSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_CreateSession_Response} CGameNotifications_CreateSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_CreateSession_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_CreateSession_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_CreateSession_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_CreateSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_CreateSession_Response} CGameNotifications_CreateSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_CreateSession_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_CreateSession_Response message.
         * @function verify
         * @memberof CGameNotifications_CreateSession_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_CreateSession_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isInteger(message.sessionid) && !(message.sessionid && $util.isInteger(message.sessionid.low) && $util.isInteger(message.sessionid.high)))
                    return "sessionid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_CreateSession_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_CreateSession_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_CreateSession_Response} CGameNotifications_CreateSession_Response
         */
        CGameNotifications_CreateSession_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_CreateSession_Response)
                return object;
            var message = new $root.CGameNotifications_CreateSession_Response();
            if (object.sessionid != null)
                if ($util.Long)
                    (message.sessionid = $util.Long.fromValue(object.sessionid)).unsigned = true;
                else if (typeof object.sessionid === "string")
                    message.sessionid = parseInt(object.sessionid, 10);
                else if (typeof object.sessionid === "number")
                    message.sessionid = object.sessionid;
                else if (typeof object.sessionid === "object")
                    message.sessionid = new $util.LongBits(object.sessionid.low >>> 0, object.sessionid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_CreateSession_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_CreateSession_Response
         * @static
         * @param {CGameNotifications_CreateSession_Response} message CGameNotifications_CreateSession_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_CreateSession_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sessionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionid = options.longs === String ? "0" : 0;
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (typeof message.sessionid === "number")
                    object.sessionid = options.longs === String ? String(message.sessionid) : message.sessionid;
                else
                    object.sessionid = options.longs === String ? $util.Long.prototype.toString.call(message.sessionid) : options.longs === Number ? new $util.LongBits(message.sessionid.low >>> 0, message.sessionid.high >>> 0).toNumber(true) : message.sessionid;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_CreateSession_Response to JSON.
         * @function toJSON
         * @memberof CGameNotifications_CreateSession_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_CreateSession_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_CreateSession_Response;
    })();
    
    $root.CGameNotifications_DeleteSession_Request = (function() {
    
        /**
         * Properties of a CGameNotifications_DeleteSession_Request.
         * @exports ICGameNotifications_DeleteSession_Request
         * @interface ICGameNotifications_DeleteSession_Request
         * @property {number|Long|null} [sessionid] CGameNotifications_DeleteSession_Request sessionid
         * @property {number|null} [appid] CGameNotifications_DeleteSession_Request appid
         * @property {number|Long|null} [steamid] CGameNotifications_DeleteSession_Request steamid
         */
    
        /**
         * Constructs a new CGameNotifications_DeleteSession_Request.
         * @exports CGameNotifications_DeleteSession_Request
         * @classdesc Represents a CGameNotifications_DeleteSession_Request.
         * @implements ICGameNotifications_DeleteSession_Request
         * @constructor
         * @param {ICGameNotifications_DeleteSession_Request=} [properties] Properties to set
         */
        function CGameNotifications_DeleteSession_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_DeleteSession_Request sessionid.
         * @member {number|Long} sessionid
         * @memberof CGameNotifications_DeleteSession_Request
         * @instance
         */
        CGameNotifications_DeleteSession_Request.prototype.sessionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CGameNotifications_DeleteSession_Request appid.
         * @member {number} appid
         * @memberof CGameNotifications_DeleteSession_Request
         * @instance
         */
        CGameNotifications_DeleteSession_Request.prototype.appid = 0;
    
        /**
         * CGameNotifications_DeleteSession_Request steamid.
         * @member {number|Long} steamid
         * @memberof CGameNotifications_DeleteSession_Request
         * @instance
         */
        CGameNotifications_DeleteSession_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CGameNotifications_DeleteSession_Request instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_DeleteSession_Request
         * @static
         * @param {ICGameNotifications_DeleteSession_Request=} [properties] Properties to set
         * @returns {CGameNotifications_DeleteSession_Request} CGameNotifications_DeleteSession_Request instance
         */
        CGameNotifications_DeleteSession_Request.create = function create(properties) {
            return new CGameNotifications_DeleteSession_Request(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_DeleteSession_Request message. Does not implicitly {@link CGameNotifications_DeleteSession_Request.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_DeleteSession_Request
         * @static
         * @param {ICGameNotifications_DeleteSession_Request} message CGameNotifications_DeleteSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_DeleteSession_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sessionid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_DeleteSession_Request message, length delimited. Does not implicitly {@link CGameNotifications_DeleteSession_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_DeleteSession_Request
         * @static
         * @param {ICGameNotifications_DeleteSession_Request} message CGameNotifications_DeleteSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_DeleteSession_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_DeleteSession_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_DeleteSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_DeleteSession_Request} CGameNotifications_DeleteSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_DeleteSession_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_DeleteSession_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionid = reader.uint64();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
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
         * Decodes a CGameNotifications_DeleteSession_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_DeleteSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_DeleteSession_Request} CGameNotifications_DeleteSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_DeleteSession_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_DeleteSession_Request message.
         * @function verify
         * @memberof CGameNotifications_DeleteSession_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_DeleteSession_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isInteger(message.sessionid) && !(message.sessionid && $util.isInteger(message.sessionid.low) && $util.isInteger(message.sessionid.high)))
                    return "sessionid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_DeleteSession_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_DeleteSession_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_DeleteSession_Request} CGameNotifications_DeleteSession_Request
         */
        CGameNotifications_DeleteSession_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_DeleteSession_Request)
                return object;
            var message = new $root.CGameNotifications_DeleteSession_Request();
            if (object.sessionid != null)
                if ($util.Long)
                    (message.sessionid = $util.Long.fromValue(object.sessionid)).unsigned = true;
                else if (typeof object.sessionid === "string")
                    message.sessionid = parseInt(object.sessionid, 10);
                else if (typeof object.sessionid === "number")
                    message.sessionid = object.sessionid;
                else if (typeof object.sessionid === "object")
                    message.sessionid = new $util.LongBits(object.sessionid.low >>> 0, object.sessionid.high >>> 0).toNumber(true);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
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
         * Creates a plain object from a CGameNotifications_DeleteSession_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_DeleteSession_Request
         * @static
         * @param {CGameNotifications_DeleteSession_Request} message CGameNotifications_DeleteSession_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_DeleteSession_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sessionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionid = options.longs === String ? "0" : 0;
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (typeof message.sessionid === "number")
                    object.sessionid = options.longs === String ? String(message.sessionid) : message.sessionid;
                else
                    object.sessionid = options.longs === String ? $util.Long.prototype.toString.call(message.sessionid) : options.longs === Number ? new $util.LongBits(message.sessionid.low >>> 0, message.sessionid.high >>> 0).toNumber(true) : message.sessionid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_DeleteSession_Request to JSON.
         * @function toJSON
         * @memberof CGameNotifications_DeleteSession_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_DeleteSession_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_DeleteSession_Request;
    })();
    
    $root.CGameNotifications_DeleteSession_Response = (function() {
    
        /**
         * Properties of a CGameNotifications_DeleteSession_Response.
         * @exports ICGameNotifications_DeleteSession_Response
         * @interface ICGameNotifications_DeleteSession_Response
         */
    
        /**
         * Constructs a new CGameNotifications_DeleteSession_Response.
         * @exports CGameNotifications_DeleteSession_Response
         * @classdesc Represents a CGameNotifications_DeleteSession_Response.
         * @implements ICGameNotifications_DeleteSession_Response
         * @constructor
         * @param {ICGameNotifications_DeleteSession_Response=} [properties] Properties to set
         */
        function CGameNotifications_DeleteSession_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CGameNotifications_DeleteSession_Response instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_DeleteSession_Response
         * @static
         * @param {ICGameNotifications_DeleteSession_Response=} [properties] Properties to set
         * @returns {CGameNotifications_DeleteSession_Response} CGameNotifications_DeleteSession_Response instance
         */
        CGameNotifications_DeleteSession_Response.create = function create(properties) {
            return new CGameNotifications_DeleteSession_Response(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_DeleteSession_Response message. Does not implicitly {@link CGameNotifications_DeleteSession_Response.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_DeleteSession_Response
         * @static
         * @param {ICGameNotifications_DeleteSession_Response} message CGameNotifications_DeleteSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_DeleteSession_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_DeleteSession_Response message, length delimited. Does not implicitly {@link CGameNotifications_DeleteSession_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_DeleteSession_Response
         * @static
         * @param {ICGameNotifications_DeleteSession_Response} message CGameNotifications_DeleteSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_DeleteSession_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_DeleteSession_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_DeleteSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_DeleteSession_Response} CGameNotifications_DeleteSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_DeleteSession_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_DeleteSession_Response();
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
         * Decodes a CGameNotifications_DeleteSession_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_DeleteSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_DeleteSession_Response} CGameNotifications_DeleteSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_DeleteSession_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_DeleteSession_Response message.
         * @function verify
         * @memberof CGameNotifications_DeleteSession_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_DeleteSession_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_DeleteSession_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_DeleteSession_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_DeleteSession_Response} CGameNotifications_DeleteSession_Response
         */
        CGameNotifications_DeleteSession_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_DeleteSession_Response)
                return object;
            return new $root.CGameNotifications_DeleteSession_Response();
        };
    
        /**
         * Creates a plain object from a CGameNotifications_DeleteSession_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_DeleteSession_Response
         * @static
         * @param {CGameNotifications_DeleteSession_Response} message CGameNotifications_DeleteSession_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_DeleteSession_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CGameNotifications_DeleteSession_Response to JSON.
         * @function toJSON
         * @memberof CGameNotifications_DeleteSession_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_DeleteSession_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_DeleteSession_Response;
    })();
    
    $root.CGameNotifications_UpdateSession_Request = (function() {
    
        /**
         * Properties of a CGameNotifications_UpdateSession_Request.
         * @exports ICGameNotifications_UpdateSession_Request
         * @interface ICGameNotifications_UpdateSession_Request
         * @property {number|Long|null} [sessionid] CGameNotifications_UpdateSession_Request sessionid
         * @property {number|null} [appid] CGameNotifications_UpdateSession_Request appid
         * @property {ICGameNotifications_LocalizedText|null} [title] CGameNotifications_UpdateSession_Request title
         * @property {Array.<ICGameNotifications_UserStatus>|null} [users] CGameNotifications_UpdateSession_Request users
         * @property {number|Long|null} [steamid] CGameNotifications_UpdateSession_Request steamid
         */
    
        /**
         * Constructs a new CGameNotifications_UpdateSession_Request.
         * @exports CGameNotifications_UpdateSession_Request
         * @classdesc Represents a CGameNotifications_UpdateSession_Request.
         * @implements ICGameNotifications_UpdateSession_Request
         * @constructor
         * @param {ICGameNotifications_UpdateSession_Request=} [properties] Properties to set
         */
        function CGameNotifications_UpdateSession_Request(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_UpdateSession_Request sessionid.
         * @member {number|Long} sessionid
         * @memberof CGameNotifications_UpdateSession_Request
         * @instance
         */
        CGameNotifications_UpdateSession_Request.prototype.sessionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CGameNotifications_UpdateSession_Request appid.
         * @member {number} appid
         * @memberof CGameNotifications_UpdateSession_Request
         * @instance
         */
        CGameNotifications_UpdateSession_Request.prototype.appid = 0;
    
        /**
         * CGameNotifications_UpdateSession_Request title.
         * @member {ICGameNotifications_LocalizedText|null|undefined} title
         * @memberof CGameNotifications_UpdateSession_Request
         * @instance
         */
        CGameNotifications_UpdateSession_Request.prototype.title = null;
    
        /**
         * CGameNotifications_UpdateSession_Request users.
         * @member {Array.<ICGameNotifications_UserStatus>} users
         * @memberof CGameNotifications_UpdateSession_Request
         * @instance
         */
        CGameNotifications_UpdateSession_Request.prototype.users = $util.emptyArray;
    
        /**
         * CGameNotifications_UpdateSession_Request steamid.
         * @member {number|Long} steamid
         * @memberof CGameNotifications_UpdateSession_Request
         * @instance
         */
        CGameNotifications_UpdateSession_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CGameNotifications_UpdateSession_Request instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_UpdateSession_Request
         * @static
         * @param {ICGameNotifications_UpdateSession_Request=} [properties] Properties to set
         * @returns {CGameNotifications_UpdateSession_Request} CGameNotifications_UpdateSession_Request instance
         */
        CGameNotifications_UpdateSession_Request.create = function create(properties) {
            return new CGameNotifications_UpdateSession_Request(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_UpdateSession_Request message. Does not implicitly {@link CGameNotifications_UpdateSession_Request.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_UpdateSession_Request
         * @static
         * @param {ICGameNotifications_UpdateSession_Request} message CGameNotifications_UpdateSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UpdateSession_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sessionid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.title != null && message.hasOwnProperty("title"))
                $root.CGameNotifications_LocalizedText.encode(message.title, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.CGameNotifications_UserStatus.encode(message.users[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 6, wireType 1 =*/49).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_UpdateSession_Request message, length delimited. Does not implicitly {@link CGameNotifications_UpdateSession_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_UpdateSession_Request
         * @static
         * @param {ICGameNotifications_UpdateSession_Request} message CGameNotifications_UpdateSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UpdateSession_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_UpdateSession_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_UpdateSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_UpdateSession_Request} CGameNotifications_UpdateSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UpdateSession_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_UpdateSession_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionid = reader.uint64();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.title = $root.CGameNotifications_LocalizedText.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.CGameNotifications_UserStatus.decode(reader, reader.uint32()));
                    break;
                case 6:
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
         * Decodes a CGameNotifications_UpdateSession_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_UpdateSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_UpdateSession_Request} CGameNotifications_UpdateSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UpdateSession_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_UpdateSession_Request message.
         * @function verify
         * @memberof CGameNotifications_UpdateSession_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_UpdateSession_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isInteger(message.sessionid) && !(message.sessionid && $util.isInteger(message.sessionid.low) && $util.isInteger(message.sessionid.high)))
                    return "sessionid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                var error = $root.CGameNotifications_LocalizedText.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.CGameNotifications_UserStatus.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_UpdateSession_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_UpdateSession_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_UpdateSession_Request} CGameNotifications_UpdateSession_Request
         */
        CGameNotifications_UpdateSession_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_UpdateSession_Request)
                return object;
            var message = new $root.CGameNotifications_UpdateSession_Request();
            if (object.sessionid != null)
                if ($util.Long)
                    (message.sessionid = $util.Long.fromValue(object.sessionid)).unsigned = true;
                else if (typeof object.sessionid === "string")
                    message.sessionid = parseInt(object.sessionid, 10);
                else if (typeof object.sessionid === "number")
                    message.sessionid = object.sessionid;
                else if (typeof object.sessionid === "object")
                    message.sessionid = new $util.LongBits(object.sessionid.low >>> 0, object.sessionid.high >>> 0).toNumber(true);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".CGameNotifications_UpdateSession_Request.title: object expected");
                message.title = $root.CGameNotifications_LocalizedText.fromObject(object.title);
            }
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".CGameNotifications_UpdateSession_Request.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".CGameNotifications_UpdateSession_Request.users: object expected");
                    message.users[i] = $root.CGameNotifications_UserStatus.fromObject(object.users[i]);
                }
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
         * Creates a plain object from a CGameNotifications_UpdateSession_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_UpdateSession_Request
         * @static
         * @param {CGameNotifications_UpdateSession_Request} message CGameNotifications_UpdateSession_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_UpdateSession_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sessionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionid = options.longs === String ? "0" : 0;
                object.appid = 0;
                object.title = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (typeof message.sessionid === "number")
                    object.sessionid = options.longs === String ? String(message.sessionid) : message.sessionid;
                else
                    object.sessionid = options.longs === String ? $util.Long.prototype.toString.call(message.sessionid) : options.longs === Number ? new $util.LongBits(message.sessionid.low >>> 0, message.sessionid.high >>> 0).toNumber(true) : message.sessionid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.CGameNotifications_LocalizedText.toObject(message.title, options);
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.CGameNotifications_UserStatus.toObject(message.users[j], options);
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_UpdateSession_Request to JSON.
         * @function toJSON
         * @memberof CGameNotifications_UpdateSession_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_UpdateSession_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_UpdateSession_Request;
    })();
    
    $root.CGameNotifications_UpdateSession_Response = (function() {
    
        /**
         * Properties of a CGameNotifications_UpdateSession_Response.
         * @exports ICGameNotifications_UpdateSession_Response
         * @interface ICGameNotifications_UpdateSession_Response
         */
    
        /**
         * Constructs a new CGameNotifications_UpdateSession_Response.
         * @exports CGameNotifications_UpdateSession_Response
         * @classdesc Represents a CGameNotifications_UpdateSession_Response.
         * @implements ICGameNotifications_UpdateSession_Response
         * @constructor
         * @param {ICGameNotifications_UpdateSession_Response=} [properties] Properties to set
         */
        function CGameNotifications_UpdateSession_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CGameNotifications_UpdateSession_Response instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_UpdateSession_Response
         * @static
         * @param {ICGameNotifications_UpdateSession_Response=} [properties] Properties to set
         * @returns {CGameNotifications_UpdateSession_Response} CGameNotifications_UpdateSession_Response instance
         */
        CGameNotifications_UpdateSession_Response.create = function create(properties) {
            return new CGameNotifications_UpdateSession_Response(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_UpdateSession_Response message. Does not implicitly {@link CGameNotifications_UpdateSession_Response.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_UpdateSession_Response
         * @static
         * @param {ICGameNotifications_UpdateSession_Response} message CGameNotifications_UpdateSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UpdateSession_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_UpdateSession_Response message, length delimited. Does not implicitly {@link CGameNotifications_UpdateSession_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_UpdateSession_Response
         * @static
         * @param {ICGameNotifications_UpdateSession_Response} message CGameNotifications_UpdateSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UpdateSession_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_UpdateSession_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_UpdateSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_UpdateSession_Response} CGameNotifications_UpdateSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UpdateSession_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_UpdateSession_Response();
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
         * Decodes a CGameNotifications_UpdateSession_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_UpdateSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_UpdateSession_Response} CGameNotifications_UpdateSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UpdateSession_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_UpdateSession_Response message.
         * @function verify
         * @memberof CGameNotifications_UpdateSession_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_UpdateSession_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_UpdateSession_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_UpdateSession_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_UpdateSession_Response} CGameNotifications_UpdateSession_Response
         */
        CGameNotifications_UpdateSession_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_UpdateSession_Response)
                return object;
            return new $root.CGameNotifications_UpdateSession_Response();
        };
    
        /**
         * Creates a plain object from a CGameNotifications_UpdateSession_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_UpdateSession_Response
         * @static
         * @param {CGameNotifications_UpdateSession_Response} message CGameNotifications_UpdateSession_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_UpdateSession_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CGameNotifications_UpdateSession_Response to JSON.
         * @function toJSON
         * @memberof CGameNotifications_UpdateSession_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_UpdateSession_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_UpdateSession_Response;
    })();
    
    $root.CGameNotifications_EnumerateSessions_Request = (function() {
    
        /**
         * Properties of a CGameNotifications_EnumerateSessions_Request.
         * @exports ICGameNotifications_EnumerateSessions_Request
         * @interface ICGameNotifications_EnumerateSessions_Request
         * @property {number|null} [appid] CGameNotifications_EnumerateSessions_Request appid
         * @property {boolean|null} [include_all_user_messages] CGameNotifications_EnumerateSessions_Request include_all_user_messages
         * @property {boolean|null} [include_auth_user_message] CGameNotifications_EnumerateSessions_Request include_auth_user_message
         * @property {string|null} [language] CGameNotifications_EnumerateSessions_Request language
         */
    
        /**
         * Constructs a new CGameNotifications_EnumerateSessions_Request.
         * @exports CGameNotifications_EnumerateSessions_Request
         * @classdesc Represents a CGameNotifications_EnumerateSessions_Request.
         * @implements ICGameNotifications_EnumerateSessions_Request
         * @constructor
         * @param {ICGameNotifications_EnumerateSessions_Request=} [properties] Properties to set
         */
        function CGameNotifications_EnumerateSessions_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_EnumerateSessions_Request appid.
         * @member {number} appid
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @instance
         */
        CGameNotifications_EnumerateSessions_Request.prototype.appid = 0;
    
        /**
         * CGameNotifications_EnumerateSessions_Request include_all_user_messages.
         * @member {boolean} include_all_user_messages
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @instance
         */
        CGameNotifications_EnumerateSessions_Request.prototype.include_all_user_messages = false;
    
        /**
         * CGameNotifications_EnumerateSessions_Request include_auth_user_message.
         * @member {boolean} include_auth_user_message
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @instance
         */
        CGameNotifications_EnumerateSessions_Request.prototype.include_auth_user_message = false;
    
        /**
         * CGameNotifications_EnumerateSessions_Request language.
         * @member {string} language
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @instance
         */
        CGameNotifications_EnumerateSessions_Request.prototype.language = "";
    
        /**
         * Creates a new CGameNotifications_EnumerateSessions_Request instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @static
         * @param {ICGameNotifications_EnumerateSessions_Request=} [properties] Properties to set
         * @returns {CGameNotifications_EnumerateSessions_Request} CGameNotifications_EnumerateSessions_Request instance
         */
        CGameNotifications_EnumerateSessions_Request.create = function create(properties) {
            return new CGameNotifications_EnumerateSessions_Request(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_EnumerateSessions_Request message. Does not implicitly {@link CGameNotifications_EnumerateSessions_Request.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @static
         * @param {ICGameNotifications_EnumerateSessions_Request} message CGameNotifications_EnumerateSessions_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_EnumerateSessions_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.include_all_user_messages != null && message.hasOwnProperty("include_all_user_messages"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.include_all_user_messages);
            if (message.include_auth_user_message != null && message.hasOwnProperty("include_auth_user_message"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.include_auth_user_message);
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.language);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_EnumerateSessions_Request message, length delimited. Does not implicitly {@link CGameNotifications_EnumerateSessions_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @static
         * @param {ICGameNotifications_EnumerateSessions_Request} message CGameNotifications_EnumerateSessions_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_EnumerateSessions_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_EnumerateSessions_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_EnumerateSessions_Request} CGameNotifications_EnumerateSessions_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_EnumerateSessions_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_EnumerateSessions_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.include_all_user_messages = reader.bool();
                    break;
                case 4:
                    message.include_auth_user_message = reader.bool();
                    break;
                case 5:
                    message.language = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_EnumerateSessions_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_EnumerateSessions_Request} CGameNotifications_EnumerateSessions_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_EnumerateSessions_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_EnumerateSessions_Request message.
         * @function verify
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_EnumerateSessions_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.include_all_user_messages != null && message.hasOwnProperty("include_all_user_messages"))
                if (typeof message.include_all_user_messages !== "boolean")
                    return "include_all_user_messages: boolean expected";
            if (message.include_auth_user_message != null && message.hasOwnProperty("include_auth_user_message"))
                if (typeof message.include_auth_user_message !== "boolean")
                    return "include_auth_user_message: boolean expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_EnumerateSessions_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_EnumerateSessions_Request} CGameNotifications_EnumerateSessions_Request
         */
        CGameNotifications_EnumerateSessions_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_EnumerateSessions_Request)
                return object;
            var message = new $root.CGameNotifications_EnumerateSessions_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.include_all_user_messages != null)
                message.include_all_user_messages = Boolean(object.include_all_user_messages);
            if (object.include_auth_user_message != null)
                message.include_auth_user_message = Boolean(object.include_auth_user_message);
            if (object.language != null)
                message.language = String(object.language);
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_EnumerateSessions_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @static
         * @param {CGameNotifications_EnumerateSessions_Request} message CGameNotifications_EnumerateSessions_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_EnumerateSessions_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.include_all_user_messages = false;
                object.include_auth_user_message = false;
                object.language = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.include_all_user_messages != null && message.hasOwnProperty("include_all_user_messages"))
                object.include_all_user_messages = message.include_all_user_messages;
            if (message.include_auth_user_message != null && message.hasOwnProperty("include_auth_user_message"))
                object.include_auth_user_message = message.include_auth_user_message;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_EnumerateSessions_Request to JSON.
         * @function toJSON
         * @memberof CGameNotifications_EnumerateSessions_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_EnumerateSessions_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_EnumerateSessions_Request;
    })();
    
    $root.CGameNotifications_Session = (function() {
    
        /**
         * Properties of a CGameNotifications_Session.
         * @exports ICGameNotifications_Session
         * @interface ICGameNotifications_Session
         * @property {number|Long|null} [sessionid] CGameNotifications_Session sessionid
         * @property {number|Long|null} [appid] CGameNotifications_Session appid
         * @property {number|Long|null} [context] CGameNotifications_Session context
         * @property {ICGameNotifications_LocalizedText|null} [title] CGameNotifications_Session title
         * @property {number|null} [time_created] CGameNotifications_Session time_created
         * @property {number|null} [time_updated] CGameNotifications_Session time_updated
         * @property {Array.<ICGameNotifications_UserStatus>|null} [user_status] CGameNotifications_Session user_status
         */
    
        /**
         * Constructs a new CGameNotifications_Session.
         * @exports CGameNotifications_Session
         * @classdesc Represents a CGameNotifications_Session.
         * @implements ICGameNotifications_Session
         * @constructor
         * @param {ICGameNotifications_Session=} [properties] Properties to set
         */
        function CGameNotifications_Session(properties) {
            this.user_status = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_Session sessionid.
         * @member {number|Long} sessionid
         * @memberof CGameNotifications_Session
         * @instance
         */
        CGameNotifications_Session.prototype.sessionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CGameNotifications_Session appid.
         * @member {number|Long} appid
         * @memberof CGameNotifications_Session
         * @instance
         */
        CGameNotifications_Session.prototype.appid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CGameNotifications_Session context.
         * @member {number|Long} context
         * @memberof CGameNotifications_Session
         * @instance
         */
        CGameNotifications_Session.prototype.context = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CGameNotifications_Session title.
         * @member {ICGameNotifications_LocalizedText|null|undefined} title
         * @memberof CGameNotifications_Session
         * @instance
         */
        CGameNotifications_Session.prototype.title = null;
    
        /**
         * CGameNotifications_Session time_created.
         * @member {number} time_created
         * @memberof CGameNotifications_Session
         * @instance
         */
        CGameNotifications_Session.prototype.time_created = 0;
    
        /**
         * CGameNotifications_Session time_updated.
         * @member {number} time_updated
         * @memberof CGameNotifications_Session
         * @instance
         */
        CGameNotifications_Session.prototype.time_updated = 0;
    
        /**
         * CGameNotifications_Session user_status.
         * @member {Array.<ICGameNotifications_UserStatus>} user_status
         * @memberof CGameNotifications_Session
         * @instance
         */
        CGameNotifications_Session.prototype.user_status = $util.emptyArray;
    
        /**
         * Creates a new CGameNotifications_Session instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_Session
         * @static
         * @param {ICGameNotifications_Session=} [properties] Properties to set
         * @returns {CGameNotifications_Session} CGameNotifications_Session instance
         */
        CGameNotifications_Session.create = function create(properties) {
            return new CGameNotifications_Session(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_Session message. Does not implicitly {@link CGameNotifications_Session.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_Session
         * @static
         * @param {ICGameNotifications_Session} message CGameNotifications_Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_Session.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sessionid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.appid);
            if (message.context != null && message.hasOwnProperty("context"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.context);
            if (message.title != null && message.hasOwnProperty("title"))
                $root.CGameNotifications_LocalizedText.encode(message.title, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.time_created);
            if (message.time_updated != null && message.hasOwnProperty("time_updated"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.time_updated);
            if (message.user_status != null && message.user_status.length)
                for (var i = 0; i < message.user_status.length; ++i)
                    $root.CGameNotifications_UserStatus.encode(message.user_status[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_Session message, length delimited. Does not implicitly {@link CGameNotifications_Session.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_Session
         * @static
         * @param {ICGameNotifications_Session} message CGameNotifications_Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_Session.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_Session message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_Session} CGameNotifications_Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_Session.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_Session();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionid = reader.uint64();
                    break;
                case 2:
                    message.appid = reader.uint64();
                    break;
                case 3:
                    message.context = reader.uint64();
                    break;
                case 4:
                    message.title = $root.CGameNotifications_LocalizedText.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.time_created = reader.uint32();
                    break;
                case 6:
                    message.time_updated = reader.uint32();
                    break;
                case 7:
                    if (!(message.user_status && message.user_status.length))
                        message.user_status = [];
                    message.user_status.push($root.CGameNotifications_UserStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_Session message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_Session} CGameNotifications_Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_Session.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_Session message.
         * @function verify
         * @memberof CGameNotifications_Session
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_Session.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isInteger(message.sessionid) && !(message.sessionid && $util.isInteger(message.sessionid.low) && $util.isInteger(message.sessionid.high)))
                    return "sessionid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid) && !(message.appid && $util.isInteger(message.appid.low) && $util.isInteger(message.appid.high)))
                    return "appid: integer|Long expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isInteger(message.context) && !(message.context && $util.isInteger(message.context.low) && $util.isInteger(message.context.high)))
                    return "context: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                var error = $root.CGameNotifications_LocalizedText.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                if (!$util.isInteger(message.time_created))
                    return "time_created: integer expected";
            if (message.time_updated != null && message.hasOwnProperty("time_updated"))
                if (!$util.isInteger(message.time_updated))
                    return "time_updated: integer expected";
            if (message.user_status != null && message.hasOwnProperty("user_status")) {
                if (!Array.isArray(message.user_status))
                    return "user_status: array expected";
                for (var i = 0; i < message.user_status.length; ++i) {
                    var error = $root.CGameNotifications_UserStatus.verify(message.user_status[i]);
                    if (error)
                        return "user_status." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CGameNotifications_Session message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_Session
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_Session} CGameNotifications_Session
         */
        CGameNotifications_Session.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_Session)
                return object;
            var message = new $root.CGameNotifications_Session();
            if (object.sessionid != null)
                if ($util.Long)
                    (message.sessionid = $util.Long.fromValue(object.sessionid)).unsigned = true;
                else if (typeof object.sessionid === "string")
                    message.sessionid = parseInt(object.sessionid, 10);
                else if (typeof object.sessionid === "number")
                    message.sessionid = object.sessionid;
                else if (typeof object.sessionid === "object")
                    message.sessionid = new $util.LongBits(object.sessionid.low >>> 0, object.sessionid.high >>> 0).toNumber(true);
            if (object.appid != null)
                if ($util.Long)
                    (message.appid = $util.Long.fromValue(object.appid)).unsigned = true;
                else if (typeof object.appid === "string")
                    message.appid = parseInt(object.appid, 10);
                else if (typeof object.appid === "number")
                    message.appid = object.appid;
                else if (typeof object.appid === "object")
                    message.appid = new $util.LongBits(object.appid.low >>> 0, object.appid.high >>> 0).toNumber(true);
            if (object.context != null)
                if ($util.Long)
                    (message.context = $util.Long.fromValue(object.context)).unsigned = true;
                else if (typeof object.context === "string")
                    message.context = parseInt(object.context, 10);
                else if (typeof object.context === "number")
                    message.context = object.context;
                else if (typeof object.context === "object")
                    message.context = new $util.LongBits(object.context.low >>> 0, object.context.high >>> 0).toNumber(true);
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".CGameNotifications_Session.title: object expected");
                message.title = $root.CGameNotifications_LocalizedText.fromObject(object.title);
            }
            if (object.time_created != null)
                message.time_created = object.time_created >>> 0;
            if (object.time_updated != null)
                message.time_updated = object.time_updated >>> 0;
            if (object.user_status) {
                if (!Array.isArray(object.user_status))
                    throw TypeError(".CGameNotifications_Session.user_status: array expected");
                message.user_status = [];
                for (var i = 0; i < object.user_status.length; ++i) {
                    if (typeof object.user_status[i] !== "object")
                        throw TypeError(".CGameNotifications_Session.user_status: object expected");
                    message.user_status[i] = $root.CGameNotifications_UserStatus.fromObject(object.user_status[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_Session message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_Session
         * @static
         * @param {CGameNotifications_Session} message CGameNotifications_Session
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_Session.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.user_status = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sessionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.appid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.appid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.context = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.context = options.longs === String ? "0" : 0;
                object.title = null;
                object.time_created = 0;
                object.time_updated = 0;
            }
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (typeof message.sessionid === "number")
                    object.sessionid = options.longs === String ? String(message.sessionid) : message.sessionid;
                else
                    object.sessionid = options.longs === String ? $util.Long.prototype.toString.call(message.sessionid) : options.longs === Number ? new $util.LongBits(message.sessionid.low >>> 0, message.sessionid.high >>> 0).toNumber(true) : message.sessionid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (typeof message.appid === "number")
                    object.appid = options.longs === String ? String(message.appid) : message.appid;
                else
                    object.appid = options.longs === String ? $util.Long.prototype.toString.call(message.appid) : options.longs === Number ? new $util.LongBits(message.appid.low >>> 0, message.appid.high >>> 0).toNumber(true) : message.appid;
            if (message.context != null && message.hasOwnProperty("context"))
                if (typeof message.context === "number")
                    object.context = options.longs === String ? String(message.context) : message.context;
                else
                    object.context = options.longs === String ? $util.Long.prototype.toString.call(message.context) : options.longs === Number ? new $util.LongBits(message.context.low >>> 0, message.context.high >>> 0).toNumber(true) : message.context;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.CGameNotifications_LocalizedText.toObject(message.title, options);
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                object.time_created = message.time_created;
            if (message.time_updated != null && message.hasOwnProperty("time_updated"))
                object.time_updated = message.time_updated;
            if (message.user_status && message.user_status.length) {
                object.user_status = [];
                for (var j = 0; j < message.user_status.length; ++j)
                    object.user_status[j] = $root.CGameNotifications_UserStatus.toObject(message.user_status[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CGameNotifications_Session to JSON.
         * @function toJSON
         * @memberof CGameNotifications_Session
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_Session.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_Session;
    })();
    
    $root.CGameNotifications_EnumerateSessions_Response = (function() {
    
        /**
         * Properties of a CGameNotifications_EnumerateSessions_Response.
         * @exports ICGameNotifications_EnumerateSessions_Response
         * @interface ICGameNotifications_EnumerateSessions_Response
         * @property {Array.<ICGameNotifications_Session>|null} [sessions] CGameNotifications_EnumerateSessions_Response sessions
         */
    
        /**
         * Constructs a new CGameNotifications_EnumerateSessions_Response.
         * @exports CGameNotifications_EnumerateSessions_Response
         * @classdesc Represents a CGameNotifications_EnumerateSessions_Response.
         * @implements ICGameNotifications_EnumerateSessions_Response
         * @constructor
         * @param {ICGameNotifications_EnumerateSessions_Response=} [properties] Properties to set
         */
        function CGameNotifications_EnumerateSessions_Response(properties) {
            this.sessions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_EnumerateSessions_Response sessions.
         * @member {Array.<ICGameNotifications_Session>} sessions
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @instance
         */
        CGameNotifications_EnumerateSessions_Response.prototype.sessions = $util.emptyArray;
    
        /**
         * Creates a new CGameNotifications_EnumerateSessions_Response instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @static
         * @param {ICGameNotifications_EnumerateSessions_Response=} [properties] Properties to set
         * @returns {CGameNotifications_EnumerateSessions_Response} CGameNotifications_EnumerateSessions_Response instance
         */
        CGameNotifications_EnumerateSessions_Response.create = function create(properties) {
            return new CGameNotifications_EnumerateSessions_Response(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_EnumerateSessions_Response message. Does not implicitly {@link CGameNotifications_EnumerateSessions_Response.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @static
         * @param {ICGameNotifications_EnumerateSessions_Response} message CGameNotifications_EnumerateSessions_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_EnumerateSessions_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessions != null && message.sessions.length)
                for (var i = 0; i < message.sessions.length; ++i)
                    $root.CGameNotifications_Session.encode(message.sessions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_EnumerateSessions_Response message, length delimited. Does not implicitly {@link CGameNotifications_EnumerateSessions_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @static
         * @param {ICGameNotifications_EnumerateSessions_Response} message CGameNotifications_EnumerateSessions_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_EnumerateSessions_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_EnumerateSessions_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_EnumerateSessions_Response} CGameNotifications_EnumerateSessions_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_EnumerateSessions_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_EnumerateSessions_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.sessions && message.sessions.length))
                        message.sessions = [];
                    message.sessions.push($root.CGameNotifications_Session.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_EnumerateSessions_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_EnumerateSessions_Response} CGameNotifications_EnumerateSessions_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_EnumerateSessions_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_EnumerateSessions_Response message.
         * @function verify
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_EnumerateSessions_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessions != null && message.hasOwnProperty("sessions")) {
                if (!Array.isArray(message.sessions))
                    return "sessions: array expected";
                for (var i = 0; i < message.sessions.length; ++i) {
                    var error = $root.CGameNotifications_Session.verify(message.sessions[i]);
                    if (error)
                        return "sessions." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CGameNotifications_EnumerateSessions_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_EnumerateSessions_Response} CGameNotifications_EnumerateSessions_Response
         */
        CGameNotifications_EnumerateSessions_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_EnumerateSessions_Response)
                return object;
            var message = new $root.CGameNotifications_EnumerateSessions_Response();
            if (object.sessions) {
                if (!Array.isArray(object.sessions))
                    throw TypeError(".CGameNotifications_EnumerateSessions_Response.sessions: array expected");
                message.sessions = [];
                for (var i = 0; i < object.sessions.length; ++i) {
                    if (typeof object.sessions[i] !== "object")
                        throw TypeError(".CGameNotifications_EnumerateSessions_Response.sessions: object expected");
                    message.sessions[i] = $root.CGameNotifications_Session.fromObject(object.sessions[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_EnumerateSessions_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @static
         * @param {CGameNotifications_EnumerateSessions_Response} message CGameNotifications_EnumerateSessions_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_EnumerateSessions_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sessions = [];
            if (message.sessions && message.sessions.length) {
                object.sessions = [];
                for (var j = 0; j < message.sessions.length; ++j)
                    object.sessions[j] = $root.CGameNotifications_Session.toObject(message.sessions[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CGameNotifications_EnumerateSessions_Response to JSON.
         * @function toJSON
         * @memberof CGameNotifications_EnumerateSessions_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_EnumerateSessions_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_EnumerateSessions_Response;
    })();
    
    $root.CGameNotifications_GetSessionDetails_Request = (function() {
    
        /**
         * Properties of a CGameNotifications_GetSessionDetails_Request.
         * @exports ICGameNotifications_GetSessionDetails_Request
         * @interface ICGameNotifications_GetSessionDetails_Request
         * @property {Array.<CGameNotifications_GetSessionDetails_Request.IRequestedSession>|null} [sessions] CGameNotifications_GetSessionDetails_Request sessions
         * @property {number|null} [appid] CGameNotifications_GetSessionDetails_Request appid
         * @property {string|null} [language] CGameNotifications_GetSessionDetails_Request language
         */
    
        /**
         * Constructs a new CGameNotifications_GetSessionDetails_Request.
         * @exports CGameNotifications_GetSessionDetails_Request
         * @classdesc Represents a CGameNotifications_GetSessionDetails_Request.
         * @implements ICGameNotifications_GetSessionDetails_Request
         * @constructor
         * @param {ICGameNotifications_GetSessionDetails_Request=} [properties] Properties to set
         */
        function CGameNotifications_GetSessionDetails_Request(properties) {
            this.sessions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_GetSessionDetails_Request sessions.
         * @member {Array.<CGameNotifications_GetSessionDetails_Request.IRequestedSession>} sessions
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @instance
         */
        CGameNotifications_GetSessionDetails_Request.prototype.sessions = $util.emptyArray;
    
        /**
         * CGameNotifications_GetSessionDetails_Request appid.
         * @member {number} appid
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @instance
         */
        CGameNotifications_GetSessionDetails_Request.prototype.appid = 0;
    
        /**
         * CGameNotifications_GetSessionDetails_Request language.
         * @member {string} language
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @instance
         */
        CGameNotifications_GetSessionDetails_Request.prototype.language = "";
    
        /**
         * Creates a new CGameNotifications_GetSessionDetails_Request instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @static
         * @param {ICGameNotifications_GetSessionDetails_Request=} [properties] Properties to set
         * @returns {CGameNotifications_GetSessionDetails_Request} CGameNotifications_GetSessionDetails_Request instance
         */
        CGameNotifications_GetSessionDetails_Request.create = function create(properties) {
            return new CGameNotifications_GetSessionDetails_Request(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_GetSessionDetails_Request message. Does not implicitly {@link CGameNotifications_GetSessionDetails_Request.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @static
         * @param {ICGameNotifications_GetSessionDetails_Request} message CGameNotifications_GetSessionDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_GetSessionDetails_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessions != null && message.sessions.length)
                for (var i = 0; i < message.sessions.length; ++i)
                    $root.CGameNotifications_GetSessionDetails_Request.RequestedSession.encode(message.sessions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.language);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_GetSessionDetails_Request message, length delimited. Does not implicitly {@link CGameNotifications_GetSessionDetails_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @static
         * @param {ICGameNotifications_GetSessionDetails_Request} message CGameNotifications_GetSessionDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_GetSessionDetails_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_GetSessionDetails_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_GetSessionDetails_Request} CGameNotifications_GetSessionDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_GetSessionDetails_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_GetSessionDetails_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.sessions && message.sessions.length))
                        message.sessions = [];
                    message.sessions.push($root.CGameNotifications_GetSessionDetails_Request.RequestedSession.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.language = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_GetSessionDetails_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_GetSessionDetails_Request} CGameNotifications_GetSessionDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_GetSessionDetails_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_GetSessionDetails_Request message.
         * @function verify
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_GetSessionDetails_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessions != null && message.hasOwnProperty("sessions")) {
                if (!Array.isArray(message.sessions))
                    return "sessions: array expected";
                for (var i = 0; i < message.sessions.length; ++i) {
                    var error = $root.CGameNotifications_GetSessionDetails_Request.RequestedSession.verify(message.sessions[i]);
                    if (error)
                        return "sessions." + error;
                }
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_GetSessionDetails_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_GetSessionDetails_Request} CGameNotifications_GetSessionDetails_Request
         */
        CGameNotifications_GetSessionDetails_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_GetSessionDetails_Request)
                return object;
            var message = new $root.CGameNotifications_GetSessionDetails_Request();
            if (object.sessions) {
                if (!Array.isArray(object.sessions))
                    throw TypeError(".CGameNotifications_GetSessionDetails_Request.sessions: array expected");
                message.sessions = [];
                for (var i = 0; i < object.sessions.length; ++i) {
                    if (typeof object.sessions[i] !== "object")
                        throw TypeError(".CGameNotifications_GetSessionDetails_Request.sessions: object expected");
                    message.sessions[i] = $root.CGameNotifications_GetSessionDetails_Request.RequestedSession.fromObject(object.sessions[i]);
                }
            }
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.language != null)
                message.language = String(object.language);
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_GetSessionDetails_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @static
         * @param {CGameNotifications_GetSessionDetails_Request} message CGameNotifications_GetSessionDetails_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_GetSessionDetails_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sessions = [];
            if (options.defaults) {
                object.appid = 0;
                object.language = "";
            }
            if (message.sessions && message.sessions.length) {
                object.sessions = [];
                for (var j = 0; j < message.sessions.length; ++j)
                    object.sessions[j] = $root.CGameNotifications_GetSessionDetails_Request.RequestedSession.toObject(message.sessions[j], options);
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_GetSessionDetails_Request to JSON.
         * @function toJSON
         * @memberof CGameNotifications_GetSessionDetails_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_GetSessionDetails_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CGameNotifications_GetSessionDetails_Request.RequestedSession = (function() {
    
            /**
             * Properties of a RequestedSession.
             * @memberof CGameNotifications_GetSessionDetails_Request
             * @interface IRequestedSession
             * @property {number|Long|null} [sessionid] RequestedSession sessionid
             * @property {boolean|null} [include_auth_user_message] RequestedSession include_auth_user_message
             */
    
            /**
             * Constructs a new RequestedSession.
             * @memberof CGameNotifications_GetSessionDetails_Request
             * @classdesc Represents a RequestedSession.
             * @implements IRequestedSession
             * @constructor
             * @param {CGameNotifications_GetSessionDetails_Request.IRequestedSession=} [properties] Properties to set
             */
            function RequestedSession(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestedSession sessionid.
             * @member {number|Long} sessionid
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @instance
             */
            RequestedSession.prototype.sessionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * RequestedSession include_auth_user_message.
             * @member {boolean} include_auth_user_message
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @instance
             */
            RequestedSession.prototype.include_auth_user_message = false;
    
            /**
             * Creates a new RequestedSession instance using the specified properties.
             * @function create
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @static
             * @param {CGameNotifications_GetSessionDetails_Request.IRequestedSession=} [properties] Properties to set
             * @returns {CGameNotifications_GetSessionDetails_Request.RequestedSession} RequestedSession instance
             */
            RequestedSession.create = function create(properties) {
                return new RequestedSession(properties);
            };
    
            /**
             * Encodes the specified RequestedSession message. Does not implicitly {@link CGameNotifications_GetSessionDetails_Request.RequestedSession.verify|verify} messages.
             * @function encode
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @static
             * @param {CGameNotifications_GetSessionDetails_Request.IRequestedSession} message RequestedSession message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestedSession.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sessionid);
                if (message.include_auth_user_message != null && message.hasOwnProperty("include_auth_user_message"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.include_auth_user_message);
                return writer;
            };
    
            /**
             * Encodes the specified RequestedSession message, length delimited. Does not implicitly {@link CGameNotifications_GetSessionDetails_Request.RequestedSession.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @static
             * @param {CGameNotifications_GetSessionDetails_Request.IRequestedSession} message RequestedSession message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestedSession.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestedSession message from the specified reader or buffer.
             * @function decode
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CGameNotifications_GetSessionDetails_Request.RequestedSession} RequestedSession
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestedSession.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_GetSessionDetails_Request.RequestedSession();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sessionid = reader.uint64();
                        break;
                    case 3:
                        message.include_auth_user_message = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestedSession message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CGameNotifications_GetSessionDetails_Request.RequestedSession} RequestedSession
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestedSession.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestedSession message.
             * @function verify
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestedSession.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                    if (!$util.isInteger(message.sessionid) && !(message.sessionid && $util.isInteger(message.sessionid.low) && $util.isInteger(message.sessionid.high)))
                        return "sessionid: integer|Long expected";
                if (message.include_auth_user_message != null && message.hasOwnProperty("include_auth_user_message"))
                    if (typeof message.include_auth_user_message !== "boolean")
                        return "include_auth_user_message: boolean expected";
                return null;
            };
    
            /**
             * Creates a RequestedSession message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CGameNotifications_GetSessionDetails_Request.RequestedSession} RequestedSession
             */
            RequestedSession.fromObject = function fromObject(object) {
                if (object instanceof $root.CGameNotifications_GetSessionDetails_Request.RequestedSession)
                    return object;
                var message = new $root.CGameNotifications_GetSessionDetails_Request.RequestedSession();
                if (object.sessionid != null)
                    if ($util.Long)
                        (message.sessionid = $util.Long.fromValue(object.sessionid)).unsigned = true;
                    else if (typeof object.sessionid === "string")
                        message.sessionid = parseInt(object.sessionid, 10);
                    else if (typeof object.sessionid === "number")
                        message.sessionid = object.sessionid;
                    else if (typeof object.sessionid === "object")
                        message.sessionid = new $util.LongBits(object.sessionid.low >>> 0, object.sessionid.high >>> 0).toNumber(true);
                if (object.include_auth_user_message != null)
                    message.include_auth_user_message = Boolean(object.include_auth_user_message);
                return message;
            };
    
            /**
             * Creates a plain object from a RequestedSession message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @static
             * @param {CGameNotifications_GetSessionDetails_Request.RequestedSession} message RequestedSession
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestedSession.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.sessionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sessionid = options.longs === String ? "0" : 0;
                    object.include_auth_user_message = false;
                }
                if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                    if (typeof message.sessionid === "number")
                        object.sessionid = options.longs === String ? String(message.sessionid) : message.sessionid;
                    else
                        object.sessionid = options.longs === String ? $util.Long.prototype.toString.call(message.sessionid) : options.longs === Number ? new $util.LongBits(message.sessionid.low >>> 0, message.sessionid.high >>> 0).toNumber(true) : message.sessionid;
                if (message.include_auth_user_message != null && message.hasOwnProperty("include_auth_user_message"))
                    object.include_auth_user_message = message.include_auth_user_message;
                return object;
            };
    
            /**
             * Converts this RequestedSession to JSON.
             * @function toJSON
             * @memberof CGameNotifications_GetSessionDetails_Request.RequestedSession
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestedSession.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestedSession;
        })();
    
        return CGameNotifications_GetSessionDetails_Request;
    })();
    
    $root.CGameNotifications_GetSessionDetails_Response = (function() {
    
        /**
         * Properties of a CGameNotifications_GetSessionDetails_Response.
         * @exports ICGameNotifications_GetSessionDetails_Response
         * @interface ICGameNotifications_GetSessionDetails_Response
         * @property {Array.<ICGameNotifications_Session>|null} [sessions] CGameNotifications_GetSessionDetails_Response sessions
         */
    
        /**
         * Constructs a new CGameNotifications_GetSessionDetails_Response.
         * @exports CGameNotifications_GetSessionDetails_Response
         * @classdesc Represents a CGameNotifications_GetSessionDetails_Response.
         * @implements ICGameNotifications_GetSessionDetails_Response
         * @constructor
         * @param {ICGameNotifications_GetSessionDetails_Response=} [properties] Properties to set
         */
        function CGameNotifications_GetSessionDetails_Response(properties) {
            this.sessions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_GetSessionDetails_Response sessions.
         * @member {Array.<ICGameNotifications_Session>} sessions
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @instance
         */
        CGameNotifications_GetSessionDetails_Response.prototype.sessions = $util.emptyArray;
    
        /**
         * Creates a new CGameNotifications_GetSessionDetails_Response instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @static
         * @param {ICGameNotifications_GetSessionDetails_Response=} [properties] Properties to set
         * @returns {CGameNotifications_GetSessionDetails_Response} CGameNotifications_GetSessionDetails_Response instance
         */
        CGameNotifications_GetSessionDetails_Response.create = function create(properties) {
            return new CGameNotifications_GetSessionDetails_Response(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_GetSessionDetails_Response message. Does not implicitly {@link CGameNotifications_GetSessionDetails_Response.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @static
         * @param {ICGameNotifications_GetSessionDetails_Response} message CGameNotifications_GetSessionDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_GetSessionDetails_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessions != null && message.sessions.length)
                for (var i = 0; i < message.sessions.length; ++i)
                    $root.CGameNotifications_Session.encode(message.sessions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_GetSessionDetails_Response message, length delimited. Does not implicitly {@link CGameNotifications_GetSessionDetails_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @static
         * @param {ICGameNotifications_GetSessionDetails_Response} message CGameNotifications_GetSessionDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_GetSessionDetails_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_GetSessionDetails_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_GetSessionDetails_Response} CGameNotifications_GetSessionDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_GetSessionDetails_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_GetSessionDetails_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.sessions && message.sessions.length))
                        message.sessions = [];
                    message.sessions.push($root.CGameNotifications_Session.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_GetSessionDetails_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_GetSessionDetails_Response} CGameNotifications_GetSessionDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_GetSessionDetails_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_GetSessionDetails_Response message.
         * @function verify
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_GetSessionDetails_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessions != null && message.hasOwnProperty("sessions")) {
                if (!Array.isArray(message.sessions))
                    return "sessions: array expected";
                for (var i = 0; i < message.sessions.length; ++i) {
                    var error = $root.CGameNotifications_Session.verify(message.sessions[i]);
                    if (error)
                        return "sessions." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CGameNotifications_GetSessionDetails_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_GetSessionDetails_Response} CGameNotifications_GetSessionDetails_Response
         */
        CGameNotifications_GetSessionDetails_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_GetSessionDetails_Response)
                return object;
            var message = new $root.CGameNotifications_GetSessionDetails_Response();
            if (object.sessions) {
                if (!Array.isArray(object.sessions))
                    throw TypeError(".CGameNotifications_GetSessionDetails_Response.sessions: array expected");
                message.sessions = [];
                for (var i = 0; i < object.sessions.length; ++i) {
                    if (typeof object.sessions[i] !== "object")
                        throw TypeError(".CGameNotifications_GetSessionDetails_Response.sessions: object expected");
                    message.sessions[i] = $root.CGameNotifications_Session.fromObject(object.sessions[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_GetSessionDetails_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @static
         * @param {CGameNotifications_GetSessionDetails_Response} message CGameNotifications_GetSessionDetails_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_GetSessionDetails_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sessions = [];
            if (message.sessions && message.sessions.length) {
                object.sessions = [];
                for (var j = 0; j < message.sessions.length; ++j)
                    object.sessions[j] = $root.CGameNotifications_Session.toObject(message.sessions[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CGameNotifications_GetSessionDetails_Response to JSON.
         * @function toJSON
         * @memberof CGameNotifications_GetSessionDetails_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_GetSessionDetails_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_GetSessionDetails_Response;
    })();
    
    $root.GameNotificationSettings = (function() {
    
        /**
         * Properties of a GameNotificationSettings.
         * @exports IGameNotificationSettings
         * @interface IGameNotificationSettings
         * @property {number|null} [appid] GameNotificationSettings appid
         * @property {boolean|null} [allow_notifications] GameNotificationSettings allow_notifications
         */
    
        /**
         * Constructs a new GameNotificationSettings.
         * @exports GameNotificationSettings
         * @classdesc Represents a GameNotificationSettings.
         * @implements IGameNotificationSettings
         * @constructor
         * @param {IGameNotificationSettings=} [properties] Properties to set
         */
        function GameNotificationSettings(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * GameNotificationSettings appid.
         * @member {number} appid
         * @memberof GameNotificationSettings
         * @instance
         */
        GameNotificationSettings.prototype.appid = 0;
    
        /**
         * GameNotificationSettings allow_notifications.
         * @member {boolean} allow_notifications
         * @memberof GameNotificationSettings
         * @instance
         */
        GameNotificationSettings.prototype.allow_notifications = false;
    
        /**
         * Creates a new GameNotificationSettings instance using the specified properties.
         * @function create
         * @memberof GameNotificationSettings
         * @static
         * @param {IGameNotificationSettings=} [properties] Properties to set
         * @returns {GameNotificationSettings} GameNotificationSettings instance
         */
        GameNotificationSettings.create = function create(properties) {
            return new GameNotificationSettings(properties);
        };
    
        /**
         * Encodes the specified GameNotificationSettings message. Does not implicitly {@link GameNotificationSettings.verify|verify} messages.
         * @function encode
         * @memberof GameNotificationSettings
         * @static
         * @param {IGameNotificationSettings} message GameNotificationSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameNotificationSettings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.allow_notifications != null && message.hasOwnProperty("allow_notifications"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_notifications);
            return writer;
        };
    
        /**
         * Encodes the specified GameNotificationSettings message, length delimited. Does not implicitly {@link GameNotificationSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameNotificationSettings
         * @static
         * @param {IGameNotificationSettings} message GameNotificationSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameNotificationSettings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a GameNotificationSettings message from the specified reader or buffer.
         * @function decode
         * @memberof GameNotificationSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameNotificationSettings} GameNotificationSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameNotificationSettings.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameNotificationSettings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.allow_notifications = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a GameNotificationSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameNotificationSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameNotificationSettings} GameNotificationSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameNotificationSettings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a GameNotificationSettings message.
         * @function verify
         * @memberof GameNotificationSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameNotificationSettings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.allow_notifications != null && message.hasOwnProperty("allow_notifications"))
                if (typeof message.allow_notifications !== "boolean")
                    return "allow_notifications: boolean expected";
            return null;
        };
    
        /**
         * Creates a GameNotificationSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameNotificationSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameNotificationSettings} GameNotificationSettings
         */
        GameNotificationSettings.fromObject = function fromObject(object) {
            if (object instanceof $root.GameNotificationSettings)
                return object;
            var message = new $root.GameNotificationSettings();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.allow_notifications != null)
                message.allow_notifications = Boolean(object.allow_notifications);
            return message;
        };
    
        /**
         * Creates a plain object from a GameNotificationSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameNotificationSettings
         * @static
         * @param {GameNotificationSettings} message GameNotificationSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameNotificationSettings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.allow_notifications = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.allow_notifications != null && message.hasOwnProperty("allow_notifications"))
                object.allow_notifications = message.allow_notifications;
            return object;
        };
    
        /**
         * Converts this GameNotificationSettings to JSON.
         * @function toJSON
         * @memberof GameNotificationSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameNotificationSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return GameNotificationSettings;
    })();
    
    $root.CGameNotifications_UpdateNotificationSettings_Request = (function() {
    
        /**
         * Properties of a CGameNotifications_UpdateNotificationSettings_Request.
         * @exports ICGameNotifications_UpdateNotificationSettings_Request
         * @interface ICGameNotifications_UpdateNotificationSettings_Request
         * @property {Array.<IGameNotificationSettings>|null} [game_notification_settings] CGameNotifications_UpdateNotificationSettings_Request game_notification_settings
         */
    
        /**
         * Constructs a new CGameNotifications_UpdateNotificationSettings_Request.
         * @exports CGameNotifications_UpdateNotificationSettings_Request
         * @classdesc Represents a CGameNotifications_UpdateNotificationSettings_Request.
         * @implements ICGameNotifications_UpdateNotificationSettings_Request
         * @constructor
         * @param {ICGameNotifications_UpdateNotificationSettings_Request=} [properties] Properties to set
         */
        function CGameNotifications_UpdateNotificationSettings_Request(properties) {
            this.game_notification_settings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_UpdateNotificationSettings_Request game_notification_settings.
         * @member {Array.<IGameNotificationSettings>} game_notification_settings
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @instance
         */
        CGameNotifications_UpdateNotificationSettings_Request.prototype.game_notification_settings = $util.emptyArray;
    
        /**
         * Creates a new CGameNotifications_UpdateNotificationSettings_Request instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @static
         * @param {ICGameNotifications_UpdateNotificationSettings_Request=} [properties] Properties to set
         * @returns {CGameNotifications_UpdateNotificationSettings_Request} CGameNotifications_UpdateNotificationSettings_Request instance
         */
        CGameNotifications_UpdateNotificationSettings_Request.create = function create(properties) {
            return new CGameNotifications_UpdateNotificationSettings_Request(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_UpdateNotificationSettings_Request message. Does not implicitly {@link CGameNotifications_UpdateNotificationSettings_Request.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @static
         * @param {ICGameNotifications_UpdateNotificationSettings_Request} message CGameNotifications_UpdateNotificationSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UpdateNotificationSettings_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game_notification_settings != null && message.game_notification_settings.length)
                for (var i = 0; i < message.game_notification_settings.length; ++i)
                    $root.GameNotificationSettings.encode(message.game_notification_settings[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_UpdateNotificationSettings_Request message, length delimited. Does not implicitly {@link CGameNotifications_UpdateNotificationSettings_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @static
         * @param {ICGameNotifications_UpdateNotificationSettings_Request} message CGameNotifications_UpdateNotificationSettings_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UpdateNotificationSettings_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_UpdateNotificationSettings_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_UpdateNotificationSettings_Request} CGameNotifications_UpdateNotificationSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UpdateNotificationSettings_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_UpdateNotificationSettings_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.game_notification_settings && message.game_notification_settings.length))
                        message.game_notification_settings = [];
                    message.game_notification_settings.push($root.GameNotificationSettings.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_UpdateNotificationSettings_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_UpdateNotificationSettings_Request} CGameNotifications_UpdateNotificationSettings_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UpdateNotificationSettings_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_UpdateNotificationSettings_Request message.
         * @function verify
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_UpdateNotificationSettings_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.game_notification_settings != null && message.hasOwnProperty("game_notification_settings")) {
                if (!Array.isArray(message.game_notification_settings))
                    return "game_notification_settings: array expected";
                for (var i = 0; i < message.game_notification_settings.length; ++i) {
                    var error = $root.GameNotificationSettings.verify(message.game_notification_settings[i]);
                    if (error)
                        return "game_notification_settings." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CGameNotifications_UpdateNotificationSettings_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_UpdateNotificationSettings_Request} CGameNotifications_UpdateNotificationSettings_Request
         */
        CGameNotifications_UpdateNotificationSettings_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_UpdateNotificationSettings_Request)
                return object;
            var message = new $root.CGameNotifications_UpdateNotificationSettings_Request();
            if (object.game_notification_settings) {
                if (!Array.isArray(object.game_notification_settings))
                    throw TypeError(".CGameNotifications_UpdateNotificationSettings_Request.game_notification_settings: array expected");
                message.game_notification_settings = [];
                for (var i = 0; i < object.game_notification_settings.length; ++i) {
                    if (typeof object.game_notification_settings[i] !== "object")
                        throw TypeError(".CGameNotifications_UpdateNotificationSettings_Request.game_notification_settings: object expected");
                    message.game_notification_settings[i] = $root.GameNotificationSettings.fromObject(object.game_notification_settings[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_UpdateNotificationSettings_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @static
         * @param {CGameNotifications_UpdateNotificationSettings_Request} message CGameNotifications_UpdateNotificationSettings_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_UpdateNotificationSettings_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.game_notification_settings = [];
            if (message.game_notification_settings && message.game_notification_settings.length) {
                object.game_notification_settings = [];
                for (var j = 0; j < message.game_notification_settings.length; ++j)
                    object.game_notification_settings[j] = $root.GameNotificationSettings.toObject(message.game_notification_settings[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CGameNotifications_UpdateNotificationSettings_Request to JSON.
         * @function toJSON
         * @memberof CGameNotifications_UpdateNotificationSettings_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_UpdateNotificationSettings_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_UpdateNotificationSettings_Request;
    })();
    
    $root.CGameNotifications_UpdateNotificationSettings_Response = (function() {
    
        /**
         * Properties of a CGameNotifications_UpdateNotificationSettings_Response.
         * @exports ICGameNotifications_UpdateNotificationSettings_Response
         * @interface ICGameNotifications_UpdateNotificationSettings_Response
         */
    
        /**
         * Constructs a new CGameNotifications_UpdateNotificationSettings_Response.
         * @exports CGameNotifications_UpdateNotificationSettings_Response
         * @classdesc Represents a CGameNotifications_UpdateNotificationSettings_Response.
         * @implements ICGameNotifications_UpdateNotificationSettings_Response
         * @constructor
         * @param {ICGameNotifications_UpdateNotificationSettings_Response=} [properties] Properties to set
         */
        function CGameNotifications_UpdateNotificationSettings_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CGameNotifications_UpdateNotificationSettings_Response instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @static
         * @param {ICGameNotifications_UpdateNotificationSettings_Response=} [properties] Properties to set
         * @returns {CGameNotifications_UpdateNotificationSettings_Response} CGameNotifications_UpdateNotificationSettings_Response instance
         */
        CGameNotifications_UpdateNotificationSettings_Response.create = function create(properties) {
            return new CGameNotifications_UpdateNotificationSettings_Response(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_UpdateNotificationSettings_Response message. Does not implicitly {@link CGameNotifications_UpdateNotificationSettings_Response.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @static
         * @param {ICGameNotifications_UpdateNotificationSettings_Response} message CGameNotifications_UpdateNotificationSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UpdateNotificationSettings_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_UpdateNotificationSettings_Response message, length delimited. Does not implicitly {@link CGameNotifications_UpdateNotificationSettings_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @static
         * @param {ICGameNotifications_UpdateNotificationSettings_Response} message CGameNotifications_UpdateNotificationSettings_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_UpdateNotificationSettings_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_UpdateNotificationSettings_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_UpdateNotificationSettings_Response} CGameNotifications_UpdateNotificationSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UpdateNotificationSettings_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_UpdateNotificationSettings_Response();
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
         * Decodes a CGameNotifications_UpdateNotificationSettings_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_UpdateNotificationSettings_Response} CGameNotifications_UpdateNotificationSettings_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_UpdateNotificationSettings_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_UpdateNotificationSettings_Response message.
         * @function verify
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_UpdateNotificationSettings_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_UpdateNotificationSettings_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_UpdateNotificationSettings_Response} CGameNotifications_UpdateNotificationSettings_Response
         */
        CGameNotifications_UpdateNotificationSettings_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_UpdateNotificationSettings_Response)
                return object;
            return new $root.CGameNotifications_UpdateNotificationSettings_Response();
        };
    
        /**
         * Creates a plain object from a CGameNotifications_UpdateNotificationSettings_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @static
         * @param {CGameNotifications_UpdateNotificationSettings_Response} message CGameNotifications_UpdateNotificationSettings_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_UpdateNotificationSettings_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CGameNotifications_UpdateNotificationSettings_Response to JSON.
         * @function toJSON
         * @memberof CGameNotifications_UpdateNotificationSettings_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_UpdateNotificationSettings_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_UpdateNotificationSettings_Response;
    })();
    
    $root.CGameNotifications_OnNotificationsRequested_Notification = (function() {
    
        /**
         * Properties of a CGameNotifications_OnNotificationsRequested_Notification.
         * @exports ICGameNotifications_OnNotificationsRequested_Notification
         * @interface ICGameNotifications_OnNotificationsRequested_Notification
         * @property {number|Long|null} [steamid] CGameNotifications_OnNotificationsRequested_Notification steamid
         * @property {number|null} [appid] CGameNotifications_OnNotificationsRequested_Notification appid
         */
    
        /**
         * Constructs a new CGameNotifications_OnNotificationsRequested_Notification.
         * @exports CGameNotifications_OnNotificationsRequested_Notification
         * @classdesc Represents a CGameNotifications_OnNotificationsRequested_Notification.
         * @implements ICGameNotifications_OnNotificationsRequested_Notification
         * @constructor
         * @param {ICGameNotifications_OnNotificationsRequested_Notification=} [properties] Properties to set
         */
        function CGameNotifications_OnNotificationsRequested_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_OnNotificationsRequested_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @instance
         */
        CGameNotifications_OnNotificationsRequested_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CGameNotifications_OnNotificationsRequested_Notification appid.
         * @member {number} appid
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @instance
         */
        CGameNotifications_OnNotificationsRequested_Notification.prototype.appid = 0;
    
        /**
         * Creates a new CGameNotifications_OnNotificationsRequested_Notification instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @static
         * @param {ICGameNotifications_OnNotificationsRequested_Notification=} [properties] Properties to set
         * @returns {CGameNotifications_OnNotificationsRequested_Notification} CGameNotifications_OnNotificationsRequested_Notification instance
         */
        CGameNotifications_OnNotificationsRequested_Notification.create = function create(properties) {
            return new CGameNotifications_OnNotificationsRequested_Notification(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_OnNotificationsRequested_Notification message. Does not implicitly {@link CGameNotifications_OnNotificationsRequested_Notification.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @static
         * @param {ICGameNotifications_OnNotificationsRequested_Notification} message CGameNotifications_OnNotificationsRequested_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_OnNotificationsRequested_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_OnNotificationsRequested_Notification message, length delimited. Does not implicitly {@link CGameNotifications_OnNotificationsRequested_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @static
         * @param {ICGameNotifications_OnNotificationsRequested_Notification} message CGameNotifications_OnNotificationsRequested_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_OnNotificationsRequested_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_OnNotificationsRequested_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_OnNotificationsRequested_Notification} CGameNotifications_OnNotificationsRequested_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_OnNotificationsRequested_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_OnNotificationsRequested_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
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
         * Decodes a CGameNotifications_OnNotificationsRequested_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_OnNotificationsRequested_Notification} CGameNotifications_OnNotificationsRequested_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_OnNotificationsRequested_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_OnNotificationsRequested_Notification message.
         * @function verify
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_OnNotificationsRequested_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_OnNotificationsRequested_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_OnNotificationsRequested_Notification} CGameNotifications_OnNotificationsRequested_Notification
         */
        CGameNotifications_OnNotificationsRequested_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_OnNotificationsRequested_Notification)
                return object;
            var message = new $root.CGameNotifications_OnNotificationsRequested_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_OnNotificationsRequested_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @static
         * @param {CGameNotifications_OnNotificationsRequested_Notification} message CGameNotifications_OnNotificationsRequested_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_OnNotificationsRequested_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.appid = 0;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_OnNotificationsRequested_Notification to JSON.
         * @function toJSON
         * @memberof CGameNotifications_OnNotificationsRequested_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_OnNotificationsRequested_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_OnNotificationsRequested_Notification;
    })();
    
    $root.CGameNotifications_OnUserStatusChanged_Notification = (function() {
    
        /**
         * Properties of a CGameNotifications_OnUserStatusChanged_Notification.
         * @exports ICGameNotifications_OnUserStatusChanged_Notification
         * @interface ICGameNotifications_OnUserStatusChanged_Notification
         * @property {number|Long|null} [steamid] CGameNotifications_OnUserStatusChanged_Notification steamid
         * @property {number|Long|null} [sessionid] CGameNotifications_OnUserStatusChanged_Notification sessionid
         * @property {number|null} [appid] CGameNotifications_OnUserStatusChanged_Notification appid
         * @property {ICGameNotifications_UserStatus|null} [status] CGameNotifications_OnUserStatusChanged_Notification status
         * @property {boolean|null} [removed] CGameNotifications_OnUserStatusChanged_Notification removed
         */
    
        /**
         * Constructs a new CGameNotifications_OnUserStatusChanged_Notification.
         * @exports CGameNotifications_OnUserStatusChanged_Notification
         * @classdesc Represents a CGameNotifications_OnUserStatusChanged_Notification.
         * @implements ICGameNotifications_OnUserStatusChanged_Notification
         * @constructor
         * @param {ICGameNotifications_OnUserStatusChanged_Notification=} [properties] Properties to set
         */
        function CGameNotifications_OnUserStatusChanged_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CGameNotifications_OnUserStatusChanged_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @instance
         */
        CGameNotifications_OnUserStatusChanged_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CGameNotifications_OnUserStatusChanged_Notification sessionid.
         * @member {number|Long} sessionid
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @instance
         */
        CGameNotifications_OnUserStatusChanged_Notification.prototype.sessionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CGameNotifications_OnUserStatusChanged_Notification appid.
         * @member {number} appid
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @instance
         */
        CGameNotifications_OnUserStatusChanged_Notification.prototype.appid = 0;
    
        /**
         * CGameNotifications_OnUserStatusChanged_Notification status.
         * @member {ICGameNotifications_UserStatus|null|undefined} status
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @instance
         */
        CGameNotifications_OnUserStatusChanged_Notification.prototype.status = null;
    
        /**
         * CGameNotifications_OnUserStatusChanged_Notification removed.
         * @member {boolean} removed
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @instance
         */
        CGameNotifications_OnUserStatusChanged_Notification.prototype.removed = false;
    
        /**
         * Creates a new CGameNotifications_OnUserStatusChanged_Notification instance using the specified properties.
         * @function create
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @static
         * @param {ICGameNotifications_OnUserStatusChanged_Notification=} [properties] Properties to set
         * @returns {CGameNotifications_OnUserStatusChanged_Notification} CGameNotifications_OnUserStatusChanged_Notification instance
         */
        CGameNotifications_OnUserStatusChanged_Notification.create = function create(properties) {
            return new CGameNotifications_OnUserStatusChanged_Notification(properties);
        };
    
        /**
         * Encodes the specified CGameNotifications_OnUserStatusChanged_Notification message. Does not implicitly {@link CGameNotifications_OnUserStatusChanged_Notification.verify|verify} messages.
         * @function encode
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @static
         * @param {ICGameNotifications_OnUserStatusChanged_Notification} message CGameNotifications_OnUserStatusChanged_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_OnUserStatusChanged_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.sessionid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.appid);
            if (message.status != null && message.hasOwnProperty("status"))
                $root.CGameNotifications_UserStatus.encode(message.status, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.removed != null && message.hasOwnProperty("removed"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.removed);
            return writer;
        };
    
        /**
         * Encodes the specified CGameNotifications_OnUserStatusChanged_Notification message, length delimited. Does not implicitly {@link CGameNotifications_OnUserStatusChanged_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @static
         * @param {ICGameNotifications_OnUserStatusChanged_Notification} message CGameNotifications_OnUserStatusChanged_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGameNotifications_OnUserStatusChanged_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CGameNotifications_OnUserStatusChanged_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CGameNotifications_OnUserStatusChanged_Notification} CGameNotifications_OnUserStatusChanged_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_OnUserStatusChanged_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CGameNotifications_OnUserStatusChanged_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.sessionid = reader.uint64();
                    break;
                case 3:
                    message.appid = reader.uint32();
                    break;
                case 4:
                    message.status = $root.CGameNotifications_UserStatus.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.removed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CGameNotifications_OnUserStatusChanged_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CGameNotifications_OnUserStatusChanged_Notification} CGameNotifications_OnUserStatusChanged_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGameNotifications_OnUserStatusChanged_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CGameNotifications_OnUserStatusChanged_Notification message.
         * @function verify
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGameNotifications_OnUserStatusChanged_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (!$util.isInteger(message.sessionid) && !(message.sessionid && $util.isInteger(message.sessionid.low) && $util.isInteger(message.sessionid.high)))
                    return "sessionid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                var error = $root.CGameNotifications_UserStatus.verify(message.status);
                if (error)
                    return "status." + error;
            }
            if (message.removed != null && message.hasOwnProperty("removed"))
                if (typeof message.removed !== "boolean")
                    return "removed: boolean expected";
            return null;
        };
    
        /**
         * Creates a CGameNotifications_OnUserStatusChanged_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CGameNotifications_OnUserStatusChanged_Notification} CGameNotifications_OnUserStatusChanged_Notification
         */
        CGameNotifications_OnUserStatusChanged_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CGameNotifications_OnUserStatusChanged_Notification)
                return object;
            var message = new $root.CGameNotifications_OnUserStatusChanged_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.sessionid != null)
                if ($util.Long)
                    (message.sessionid = $util.Long.fromValue(object.sessionid)).unsigned = true;
                else if (typeof object.sessionid === "string")
                    message.sessionid = parseInt(object.sessionid, 10);
                else if (typeof object.sessionid === "number")
                    message.sessionid = object.sessionid;
                else if (typeof object.sessionid === "object")
                    message.sessionid = new $util.LongBits(object.sessionid.low >>> 0, object.sessionid.high >>> 0).toNumber(true);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.status != null) {
                if (typeof object.status !== "object")
                    throw TypeError(".CGameNotifications_OnUserStatusChanged_Notification.status: object expected");
                message.status = $root.CGameNotifications_UserStatus.fromObject(object.status);
            }
            if (object.removed != null)
                message.removed = Boolean(object.removed);
            return message;
        };
    
        /**
         * Creates a plain object from a CGameNotifications_OnUserStatusChanged_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @static
         * @param {CGameNotifications_OnUserStatusChanged_Notification} message CGameNotifications_OnUserStatusChanged_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGameNotifications_OnUserStatusChanged_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sessionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionid = options.longs === String ? "0" : 0;
                object.appid = 0;
                object.status = null;
                object.removed = false;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.sessionid != null && message.hasOwnProperty("sessionid"))
                if (typeof message.sessionid === "number")
                    object.sessionid = options.longs === String ? String(message.sessionid) : message.sessionid;
                else
                    object.sessionid = options.longs === String ? $util.Long.prototype.toString.call(message.sessionid) : options.longs === Number ? new $util.LongBits(message.sessionid.low >>> 0, message.sessionid.high >>> 0).toNumber(true) : message.sessionid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = $root.CGameNotifications_UserStatus.toObject(message.status, options);
            if (message.removed != null && message.hasOwnProperty("removed"))
                object.removed = message.removed;
            return object;
        };
    
        /**
         * Converts this CGameNotifications_OnUserStatusChanged_Notification to JSON.
         * @function toJSON
         * @memberof CGameNotifications_OnUserStatusChanged_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGameNotifications_OnUserStatusChanged_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CGameNotifications_OnUserStatusChanged_Notification;
    })();
    
    $root.GameNotifications = (function() {
    
        /**
         * Constructs a new GameNotifications service.
         * @exports GameNotifications
         * @classdesc Represents a GameNotifications
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GameNotifications(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (GameNotifications.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GameNotifications;
    
        /**
         * Creates new GameNotifications service using the specified rpc implementation.
         * @function create
         * @memberof GameNotifications
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {GameNotifications} RPC service. Useful where requests and/or responses are streamed.
         */
        GameNotifications.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link GameNotifications#userCreateSession}.
         * @memberof GameNotifications
         * @typedef UserCreateSessionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CGameNotifications_CreateSession_Response} [response] CGameNotifications_CreateSession_Response
         */
    
        /**
         * Calls UserCreateSession.
         * @function userCreateSession
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_CreateSession_Request} request CGameNotifications_CreateSession_Request message or plain object
         * @param {GameNotifications.UserCreateSessionCallback} callback Node-style callback called with the error, if any, and CGameNotifications_CreateSession_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameNotifications.prototype.userCreateSession = function userCreateSession(request, callback) {
            return this.rpcCall(userCreateSession, $root.CGameNotifications_CreateSession_Request, $root.CGameNotifications_CreateSession_Response, request, callback);
        }, "name", { value: "UserCreateSession" });
    
        /**
         * Calls UserCreateSession.
         * @function userCreateSession
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_CreateSession_Request} request CGameNotifications_CreateSession_Request message or plain object
         * @returns {Promise<CGameNotifications_CreateSession_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link GameNotifications#userDeleteSession}.
         * @memberof GameNotifications
         * @typedef UserDeleteSessionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CGameNotifications_DeleteSession_Response} [response] CGameNotifications_DeleteSession_Response
         */
    
        /**
         * Calls UserDeleteSession.
         * @function userDeleteSession
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_DeleteSession_Request} request CGameNotifications_DeleteSession_Request message or plain object
         * @param {GameNotifications.UserDeleteSessionCallback} callback Node-style callback called with the error, if any, and CGameNotifications_DeleteSession_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameNotifications.prototype.userDeleteSession = function userDeleteSession(request, callback) {
            return this.rpcCall(userDeleteSession, $root.CGameNotifications_DeleteSession_Request, $root.CGameNotifications_DeleteSession_Response, request, callback);
        }, "name", { value: "UserDeleteSession" });
    
        /**
         * Calls UserDeleteSession.
         * @function userDeleteSession
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_DeleteSession_Request} request CGameNotifications_DeleteSession_Request message or plain object
         * @returns {Promise<CGameNotifications_DeleteSession_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link GameNotifications#userUpdateSession}.
         * @memberof GameNotifications
         * @typedef UserUpdateSessionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CGameNotifications_UpdateSession_Response} [response] CGameNotifications_UpdateSession_Response
         */
    
        /**
         * Calls UserUpdateSession.
         * @function userUpdateSession
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_UpdateSession_Request} request CGameNotifications_UpdateSession_Request message or plain object
         * @param {GameNotifications.UserUpdateSessionCallback} callback Node-style callback called with the error, if any, and CGameNotifications_UpdateSession_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameNotifications.prototype.userUpdateSession = function userUpdateSession(request, callback) {
            return this.rpcCall(userUpdateSession, $root.CGameNotifications_UpdateSession_Request, $root.CGameNotifications_UpdateSession_Response, request, callback);
        }, "name", { value: "UserUpdateSession" });
    
        /**
         * Calls UserUpdateSession.
         * @function userUpdateSession
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_UpdateSession_Request} request CGameNotifications_UpdateSession_Request message or plain object
         * @returns {Promise<CGameNotifications_UpdateSession_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link GameNotifications#enumerateSessions}.
         * @memberof GameNotifications
         * @typedef EnumerateSessionsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CGameNotifications_EnumerateSessions_Response} [response] CGameNotifications_EnumerateSessions_Response
         */
    
        /**
         * Calls EnumerateSessions.
         * @function enumerateSessions
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_EnumerateSessions_Request} request CGameNotifications_EnumerateSessions_Request message or plain object
         * @param {GameNotifications.EnumerateSessionsCallback} callback Node-style callback called with the error, if any, and CGameNotifications_EnumerateSessions_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameNotifications.prototype.enumerateSessions = function enumerateSessions(request, callback) {
            return this.rpcCall(enumerateSessions, $root.CGameNotifications_EnumerateSessions_Request, $root.CGameNotifications_EnumerateSessions_Response, request, callback);
        }, "name", { value: "EnumerateSessions" });
    
        /**
         * Calls EnumerateSessions.
         * @function enumerateSessions
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_EnumerateSessions_Request} request CGameNotifications_EnumerateSessions_Request message or plain object
         * @returns {Promise<CGameNotifications_EnumerateSessions_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link GameNotifications#getSessionDetails}.
         * @memberof GameNotifications
         * @typedef GetSessionDetailsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CGameNotifications_GetSessionDetails_Response} [response] CGameNotifications_GetSessionDetails_Response
         */
    
        /**
         * Calls GetSessionDetails.
         * @function getSessionDetails
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_GetSessionDetails_Request} request CGameNotifications_GetSessionDetails_Request message or plain object
         * @param {GameNotifications.GetSessionDetailsCallback} callback Node-style callback called with the error, if any, and CGameNotifications_GetSessionDetails_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameNotifications.prototype.getSessionDetails = function getSessionDetails(request, callback) {
            return this.rpcCall(getSessionDetails, $root.CGameNotifications_GetSessionDetails_Request, $root.CGameNotifications_GetSessionDetails_Response, request, callback);
        }, "name", { value: "GetSessionDetails" });
    
        /**
         * Calls GetSessionDetails.
         * @function getSessionDetails
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_GetSessionDetails_Request} request CGameNotifications_GetSessionDetails_Request message or plain object
         * @returns {Promise<CGameNotifications_GetSessionDetails_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link GameNotifications#updateNotificationSettings}.
         * @memberof GameNotifications
         * @typedef UpdateNotificationSettingsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CGameNotifications_UpdateNotificationSettings_Response} [response] CGameNotifications_UpdateNotificationSettings_Response
         */
    
        /**
         * Calls UpdateNotificationSettings.
         * @function updateNotificationSettings
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_UpdateNotificationSettings_Request} request CGameNotifications_UpdateNotificationSettings_Request message or plain object
         * @param {GameNotifications.UpdateNotificationSettingsCallback} callback Node-style callback called with the error, if any, and CGameNotifications_UpdateNotificationSettings_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameNotifications.prototype.updateNotificationSettings = function updateNotificationSettings(request, callback) {
            return this.rpcCall(updateNotificationSettings, $root.CGameNotifications_UpdateNotificationSettings_Request, $root.CGameNotifications_UpdateNotificationSettings_Response, request, callback);
        }, "name", { value: "UpdateNotificationSettings" });
    
        /**
         * Calls UpdateNotificationSettings.
         * @function updateNotificationSettings
         * @memberof GameNotifications
         * @instance
         * @param {ICGameNotifications_UpdateNotificationSettings_Request} request CGameNotifications_UpdateNotificationSettings_Request message or plain object
         * @returns {Promise<CGameNotifications_UpdateNotificationSettings_Response>} Promise
         * @variation 2
         */
    
        return GameNotifications;
    })();
    
    $root.GameNotificationsClient = (function() {
    
        /**
         * Constructs a new GameNotificationsClient service.
         * @exports GameNotificationsClient
         * @classdesc Represents a GameNotificationsClient
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GameNotificationsClient(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (GameNotificationsClient.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GameNotificationsClient;
    
        /**
         * Creates new GameNotificationsClient service using the specified rpc implementation.
         * @function create
         * @memberof GameNotificationsClient
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {GameNotificationsClient} RPC service. Useful where requests and/or responses are streamed.
         */
        GameNotificationsClient.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link GameNotificationsClient#onNotificationsRequested}.
         * @memberof GameNotificationsClient
         * @typedef OnNotificationsRequestedCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls OnNotificationsRequested.
         * @function onNotificationsRequested
         * @memberof GameNotificationsClient
         * @instance
         * @param {ICGameNotifications_OnNotificationsRequested_Notification} request CGameNotifications_OnNotificationsRequested_Notification message or plain object
         * @param {GameNotificationsClient.OnNotificationsRequestedCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameNotificationsClient.prototype.onNotificationsRequested = function onNotificationsRequested(request, callback) {
            return this.rpcCall(onNotificationsRequested, $root.CGameNotifications_OnNotificationsRequested_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "OnNotificationsRequested" });
    
        /**
         * Calls OnNotificationsRequested.
         * @function onNotificationsRequested
         * @memberof GameNotificationsClient
         * @instance
         * @param {ICGameNotifications_OnNotificationsRequested_Notification} request CGameNotifications_OnNotificationsRequested_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link GameNotificationsClient#onUserStatusChanged}.
         * @memberof GameNotificationsClient
         * @typedef OnUserStatusChangedCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls OnUserStatusChanged.
         * @function onUserStatusChanged
         * @memberof GameNotificationsClient
         * @instance
         * @param {ICGameNotifications_OnUserStatusChanged_Notification} request CGameNotifications_OnUserStatusChanged_Notification message or plain object
         * @param {GameNotificationsClient.OnUserStatusChangedCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GameNotificationsClient.prototype.onUserStatusChanged = function onUserStatusChanged(request, callback) {
            return this.rpcCall(onUserStatusChanged, $root.CGameNotifications_OnUserStatusChanged_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "OnUserStatusChanged" });
    
        /**
         * Calls OnUserStatusChanged.
         * @function onUserStatusChanged
         * @memberof GameNotificationsClient
         * @instance
         * @param {ICGameNotifications_OnUserStatusChanged_Notification} request CGameNotifications_OnUserStatusChanged_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        return GameNotificationsClient;
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
