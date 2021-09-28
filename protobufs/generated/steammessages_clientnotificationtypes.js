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
     * EClientNotificationType enum.
     * @exports EClientNotificationType
     * @enum {string}
     * @property {number} k_EClientNotificationType_Invalid=0 k_EClientNotificationType_Invalid value
     * @property {number} k_EClientNotificationType_DownloadCompleted=1 k_EClientNotificationType_DownloadCompleted value
     * @property {number} k_EClientNotificationType_FriendInvite=2 k_EClientNotificationType_FriendInvite value
     * @property {number} k_EClientNotificationType_FriendInGame=3 k_EClientNotificationType_FriendInGame value
     * @property {number} k_EClientNotificationType_FriendOnline=4 k_EClientNotificationType_FriendOnline value
     * @property {number} k_EClientNotificationType_Achievement=5 k_EClientNotificationType_Achievement value
     * @property {number} k_EClientNotificationType_LowBattery=6 k_EClientNotificationType_LowBattery value
     * @property {number} k_EClientNotificationType_SystemUpdate=7 k_EClientNotificationType_SystemUpdate value
     * @property {number} k_EClientNotificationType_FriendMessage=8 k_EClientNotificationType_FriendMessage value
     * @property {number} k_EClientNotificationType_GroupChatMessage=9 k_EClientNotificationType_GroupChatMessage value
     */
    $root.EClientNotificationType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EClientNotificationType_Invalid"] = 0;
        values[valuesById[1] = "k_EClientNotificationType_DownloadCompleted"] = 1;
        values[valuesById[2] = "k_EClientNotificationType_FriendInvite"] = 2;
        values[valuesById[3] = "k_EClientNotificationType_FriendInGame"] = 3;
        values[valuesById[4] = "k_EClientNotificationType_FriendOnline"] = 4;
        values[valuesById[5] = "k_EClientNotificationType_Achievement"] = 5;
        values[valuesById[6] = "k_EClientNotificationType_LowBattery"] = 6;
        values[valuesById[7] = "k_EClientNotificationType_SystemUpdate"] = 7;
        values[valuesById[8] = "k_EClientNotificationType_FriendMessage"] = 8;
        values[valuesById[9] = "k_EClientNotificationType_GroupChatMessage"] = 9;
        return values;
    })();
    
    /**
     * ESystemUpdateNotificationType enum.
     * @exports ESystemUpdateNotificationType
     * @enum {string}
     * @property {number} k_ESystemUpdateNotificationType_Invalid=0 k_ESystemUpdateNotificationType_Invalid value
     * @property {number} k_ESystemUpdateNotificationType_Available=1 k_ESystemUpdateNotificationType_Available value
     * @property {number} k_ESystemUpdateNotificationType_NeedsRestart=2 k_ESystemUpdateNotificationType_NeedsRestart value
     */
    $root.ESystemUpdateNotificationType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ESystemUpdateNotificationType_Invalid"] = 0;
        values[valuesById[1] = "k_ESystemUpdateNotificationType_Available"] = 1;
        values[valuesById[2] = "k_ESystemUpdateNotificationType_NeedsRestart"] = 2;
        return values;
    })();
    
    $root.CClientNotificationDownloadCompleted = (function() {
    
        /**
         * Properties of a CClientNotificationDownloadCompleted.
         * @exports ICClientNotificationDownloadCompleted
         * @interface ICClientNotificationDownloadCompleted
         * @property {number|null} [appid] CClientNotificationDownloadCompleted appid
         */
    
        /**
         * Constructs a new CClientNotificationDownloadCompleted.
         * @exports CClientNotificationDownloadCompleted
         * @classdesc Represents a CClientNotificationDownloadCompleted.
         * @implements ICClientNotificationDownloadCompleted
         * @constructor
         * @param {ICClientNotificationDownloadCompleted=} [properties] Properties to set
         */
        function CClientNotificationDownloadCompleted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationDownloadCompleted appid.
         * @member {number} appid
         * @memberof CClientNotificationDownloadCompleted
         * @instance
         */
        CClientNotificationDownloadCompleted.prototype.appid = 0;
    
        /**
         * Creates a new CClientNotificationDownloadCompleted instance using the specified properties.
         * @function create
         * @memberof CClientNotificationDownloadCompleted
         * @static
         * @param {ICClientNotificationDownloadCompleted=} [properties] Properties to set
         * @returns {CClientNotificationDownloadCompleted} CClientNotificationDownloadCompleted instance
         */
        CClientNotificationDownloadCompleted.create = function create(properties) {
            return new CClientNotificationDownloadCompleted(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationDownloadCompleted message. Does not implicitly {@link CClientNotificationDownloadCompleted.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationDownloadCompleted
         * @static
         * @param {ICClientNotificationDownloadCompleted} message CClientNotificationDownloadCompleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationDownloadCompleted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationDownloadCompleted message, length delimited. Does not implicitly {@link CClientNotificationDownloadCompleted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationDownloadCompleted
         * @static
         * @param {ICClientNotificationDownloadCompleted} message CClientNotificationDownloadCompleted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationDownloadCompleted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationDownloadCompleted message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationDownloadCompleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationDownloadCompleted} CClientNotificationDownloadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationDownloadCompleted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationDownloadCompleted();
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
         * Decodes a CClientNotificationDownloadCompleted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationDownloadCompleted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationDownloadCompleted} CClientNotificationDownloadCompleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationDownloadCompleted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationDownloadCompleted message.
         * @function verify
         * @memberof CClientNotificationDownloadCompleted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationDownloadCompleted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientNotificationDownloadCompleted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationDownloadCompleted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationDownloadCompleted} CClientNotificationDownloadCompleted
         */
        CClientNotificationDownloadCompleted.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationDownloadCompleted)
                return object;
            var message = new $root.CClientNotificationDownloadCompleted();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientNotificationDownloadCompleted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationDownloadCompleted
         * @static
         * @param {CClientNotificationDownloadCompleted} message CClientNotificationDownloadCompleted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationDownloadCompleted.toObject = function toObject(message, options) {
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
         * Converts this CClientNotificationDownloadCompleted to JSON.
         * @function toJSON
         * @memberof CClientNotificationDownloadCompleted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationDownloadCompleted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationDownloadCompleted;
    })();
    
    $root.CClientNotificationFriendInvite = (function() {
    
        /**
         * Properties of a CClientNotificationFriendInvite.
         * @exports ICClientNotificationFriendInvite
         * @interface ICClientNotificationFriendInvite
         * @property {number|Long|null} [steamid] CClientNotificationFriendInvite steamid
         */
    
        /**
         * Constructs a new CClientNotificationFriendInvite.
         * @exports CClientNotificationFriendInvite
         * @classdesc Represents a CClientNotificationFriendInvite.
         * @implements ICClientNotificationFriendInvite
         * @constructor
         * @param {ICClientNotificationFriendInvite=} [properties] Properties to set
         */
        function CClientNotificationFriendInvite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationFriendInvite steamid.
         * @member {number|Long} steamid
         * @memberof CClientNotificationFriendInvite
         * @instance
         */
        CClientNotificationFriendInvite.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CClientNotificationFriendInvite instance using the specified properties.
         * @function create
         * @memberof CClientNotificationFriendInvite
         * @static
         * @param {ICClientNotificationFriendInvite=} [properties] Properties to set
         * @returns {CClientNotificationFriendInvite} CClientNotificationFriendInvite instance
         */
        CClientNotificationFriendInvite.create = function create(properties) {
            return new CClientNotificationFriendInvite(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationFriendInvite message. Does not implicitly {@link CClientNotificationFriendInvite.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationFriendInvite
         * @static
         * @param {ICClientNotificationFriendInvite} message CClientNotificationFriendInvite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationFriendInvite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationFriendInvite message, length delimited. Does not implicitly {@link CClientNotificationFriendInvite.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationFriendInvite
         * @static
         * @param {ICClientNotificationFriendInvite} message CClientNotificationFriendInvite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationFriendInvite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationFriendInvite message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationFriendInvite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationFriendInvite} CClientNotificationFriendInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationFriendInvite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationFriendInvite();
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
         * Decodes a CClientNotificationFriendInvite message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationFriendInvite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationFriendInvite} CClientNotificationFriendInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationFriendInvite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationFriendInvite message.
         * @function verify
         * @memberof CClientNotificationFriendInvite
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationFriendInvite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CClientNotificationFriendInvite message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationFriendInvite
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationFriendInvite} CClientNotificationFriendInvite
         */
        CClientNotificationFriendInvite.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationFriendInvite)
                return object;
            var message = new $root.CClientNotificationFriendInvite();
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
         * Creates a plain object from a CClientNotificationFriendInvite message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationFriendInvite
         * @static
         * @param {CClientNotificationFriendInvite} message CClientNotificationFriendInvite
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationFriendInvite.toObject = function toObject(message, options) {
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
         * Converts this CClientNotificationFriendInvite to JSON.
         * @function toJSON
         * @memberof CClientNotificationFriendInvite
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationFriendInvite.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationFriendInvite;
    })();
    
    $root.CClientNotificationFriendInGame = (function() {
    
        /**
         * Properties of a CClientNotificationFriendInGame.
         * @exports ICClientNotificationFriendInGame
         * @interface ICClientNotificationFriendInGame
         * @property {number|Long|null} [steamid] CClientNotificationFriendInGame steamid
         * @property {string|null} [game_name] CClientNotificationFriendInGame game_name
         */
    
        /**
         * Constructs a new CClientNotificationFriendInGame.
         * @exports CClientNotificationFriendInGame
         * @classdesc Represents a CClientNotificationFriendInGame.
         * @implements ICClientNotificationFriendInGame
         * @constructor
         * @param {ICClientNotificationFriendInGame=} [properties] Properties to set
         */
        function CClientNotificationFriendInGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationFriendInGame steamid.
         * @member {number|Long} steamid
         * @memberof CClientNotificationFriendInGame
         * @instance
         */
        CClientNotificationFriendInGame.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CClientNotificationFriendInGame game_name.
         * @member {string} game_name
         * @memberof CClientNotificationFriendInGame
         * @instance
         */
        CClientNotificationFriendInGame.prototype.game_name = "";
    
        /**
         * Creates a new CClientNotificationFriendInGame instance using the specified properties.
         * @function create
         * @memberof CClientNotificationFriendInGame
         * @static
         * @param {ICClientNotificationFriendInGame=} [properties] Properties to set
         * @returns {CClientNotificationFriendInGame} CClientNotificationFriendInGame instance
         */
        CClientNotificationFriendInGame.create = function create(properties) {
            return new CClientNotificationFriendInGame(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationFriendInGame message. Does not implicitly {@link CClientNotificationFriendInGame.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationFriendInGame
         * @static
         * @param {ICClientNotificationFriendInGame} message CClientNotificationFriendInGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationFriendInGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.game_name != null && message.hasOwnProperty("game_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.game_name);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationFriendInGame message, length delimited. Does not implicitly {@link CClientNotificationFriendInGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationFriendInGame
         * @static
         * @param {ICClientNotificationFriendInGame} message CClientNotificationFriendInGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationFriendInGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationFriendInGame message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationFriendInGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationFriendInGame} CClientNotificationFriendInGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationFriendInGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationFriendInGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.game_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientNotificationFriendInGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationFriendInGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationFriendInGame} CClientNotificationFriendInGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationFriendInGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationFriendInGame message.
         * @function verify
         * @memberof CClientNotificationFriendInGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationFriendInGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.game_name != null && message.hasOwnProperty("game_name"))
                if (!$util.isString(message.game_name))
                    return "game_name: string expected";
            return null;
        };
    
        /**
         * Creates a CClientNotificationFriendInGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationFriendInGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationFriendInGame} CClientNotificationFriendInGame
         */
        CClientNotificationFriendInGame.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationFriendInGame)
                return object;
            var message = new $root.CClientNotificationFriendInGame();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.game_name != null)
                message.game_name = String(object.game_name);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientNotificationFriendInGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationFriendInGame
         * @static
         * @param {CClientNotificationFriendInGame} message CClientNotificationFriendInGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationFriendInGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.game_name = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.game_name != null && message.hasOwnProperty("game_name"))
                object.game_name = message.game_name;
            return object;
        };
    
        /**
         * Converts this CClientNotificationFriendInGame to JSON.
         * @function toJSON
         * @memberof CClientNotificationFriendInGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationFriendInGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationFriendInGame;
    })();
    
    $root.CClientNotificationFriendOnline = (function() {
    
        /**
         * Properties of a CClientNotificationFriendOnline.
         * @exports ICClientNotificationFriendOnline
         * @interface ICClientNotificationFriendOnline
         * @property {number|Long|null} [steamid] CClientNotificationFriendOnline steamid
         */
    
        /**
         * Constructs a new CClientNotificationFriendOnline.
         * @exports CClientNotificationFriendOnline
         * @classdesc Represents a CClientNotificationFriendOnline.
         * @implements ICClientNotificationFriendOnline
         * @constructor
         * @param {ICClientNotificationFriendOnline=} [properties] Properties to set
         */
        function CClientNotificationFriendOnline(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationFriendOnline steamid.
         * @member {number|Long} steamid
         * @memberof CClientNotificationFriendOnline
         * @instance
         */
        CClientNotificationFriendOnline.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CClientNotificationFriendOnline instance using the specified properties.
         * @function create
         * @memberof CClientNotificationFriendOnline
         * @static
         * @param {ICClientNotificationFriendOnline=} [properties] Properties to set
         * @returns {CClientNotificationFriendOnline} CClientNotificationFriendOnline instance
         */
        CClientNotificationFriendOnline.create = function create(properties) {
            return new CClientNotificationFriendOnline(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationFriendOnline message. Does not implicitly {@link CClientNotificationFriendOnline.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationFriendOnline
         * @static
         * @param {ICClientNotificationFriendOnline} message CClientNotificationFriendOnline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationFriendOnline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationFriendOnline message, length delimited. Does not implicitly {@link CClientNotificationFriendOnline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationFriendOnline
         * @static
         * @param {ICClientNotificationFriendOnline} message CClientNotificationFriendOnline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationFriendOnline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationFriendOnline message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationFriendOnline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationFriendOnline} CClientNotificationFriendOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationFriendOnline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationFriendOnline();
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
         * Decodes a CClientNotificationFriendOnline message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationFriendOnline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationFriendOnline} CClientNotificationFriendOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationFriendOnline.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationFriendOnline message.
         * @function verify
         * @memberof CClientNotificationFriendOnline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationFriendOnline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CClientNotificationFriendOnline message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationFriendOnline
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationFriendOnline} CClientNotificationFriendOnline
         */
        CClientNotificationFriendOnline.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationFriendOnline)
                return object;
            var message = new $root.CClientNotificationFriendOnline();
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
         * Creates a plain object from a CClientNotificationFriendOnline message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationFriendOnline
         * @static
         * @param {CClientNotificationFriendOnline} message CClientNotificationFriendOnline
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationFriendOnline.toObject = function toObject(message, options) {
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
         * Converts this CClientNotificationFriendOnline to JSON.
         * @function toJSON
         * @memberof CClientNotificationFriendOnline
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationFriendOnline.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationFriendOnline;
    })();
    
    $root.CClientNotificationAchievement = (function() {
    
        /**
         * Properties of a CClientNotificationAchievement.
         * @exports ICClientNotificationAchievement
         * @interface ICClientNotificationAchievement
         * @property {string|null} [achievement_id] CClientNotificationAchievement achievement_id
         * @property {number|null} [appid] CClientNotificationAchievement appid
         * @property {string|null} [name] CClientNotificationAchievement name
         * @property {string|null} [description] CClientNotificationAchievement description
         * @property {string|null} [image_url] CClientNotificationAchievement image_url
         * @property {boolean|null} [achieved] CClientNotificationAchievement achieved
         * @property {number|null} [rtime_unlocked] CClientNotificationAchievement rtime_unlocked
         * @property {number|null} [min_progress] CClientNotificationAchievement min_progress
         * @property {number|null} [current_progress] CClientNotificationAchievement current_progress
         * @property {number|null} [max_progress] CClientNotificationAchievement max_progress
         * @property {number|null} [global_achieved_pct] CClientNotificationAchievement global_achieved_pct
         */
    
        /**
         * Constructs a new CClientNotificationAchievement.
         * @exports CClientNotificationAchievement
         * @classdesc Represents a CClientNotificationAchievement.
         * @implements ICClientNotificationAchievement
         * @constructor
         * @param {ICClientNotificationAchievement=} [properties] Properties to set
         */
        function CClientNotificationAchievement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationAchievement achievement_id.
         * @member {string} achievement_id
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.achievement_id = "";
    
        /**
         * CClientNotificationAchievement appid.
         * @member {number} appid
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.appid = 0;
    
        /**
         * CClientNotificationAchievement name.
         * @member {string} name
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.name = "";
    
        /**
         * CClientNotificationAchievement description.
         * @member {string} description
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.description = "";
    
        /**
         * CClientNotificationAchievement image_url.
         * @member {string} image_url
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.image_url = "";
    
        /**
         * CClientNotificationAchievement achieved.
         * @member {boolean} achieved
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.achieved = false;
    
        /**
         * CClientNotificationAchievement rtime_unlocked.
         * @member {number} rtime_unlocked
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.rtime_unlocked = 0;
    
        /**
         * CClientNotificationAchievement min_progress.
         * @member {number} min_progress
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.min_progress = 0;
    
        /**
         * CClientNotificationAchievement current_progress.
         * @member {number} current_progress
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.current_progress = 0;
    
        /**
         * CClientNotificationAchievement max_progress.
         * @member {number} max_progress
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.max_progress = 0;
    
        /**
         * CClientNotificationAchievement global_achieved_pct.
         * @member {number} global_achieved_pct
         * @memberof CClientNotificationAchievement
         * @instance
         */
        CClientNotificationAchievement.prototype.global_achieved_pct = 0;
    
        /**
         * Creates a new CClientNotificationAchievement instance using the specified properties.
         * @function create
         * @memberof CClientNotificationAchievement
         * @static
         * @param {ICClientNotificationAchievement=} [properties] Properties to set
         * @returns {CClientNotificationAchievement} CClientNotificationAchievement instance
         */
        CClientNotificationAchievement.create = function create(properties) {
            return new CClientNotificationAchievement(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationAchievement message. Does not implicitly {@link CClientNotificationAchievement.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationAchievement
         * @static
         * @param {ICClientNotificationAchievement} message CClientNotificationAchievement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationAchievement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.achievement_id != null && message.hasOwnProperty("achievement_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.achievement_id);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.image_url != null && message.hasOwnProperty("image_url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.image_url);
            if (message.achieved != null && message.hasOwnProperty("achieved"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.achieved);
            if (message.rtime_unlocked != null && message.hasOwnProperty("rtime_unlocked"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.rtime_unlocked);
            if (message.min_progress != null && message.hasOwnProperty("min_progress"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.min_progress);
            if (message.current_progress != null && message.hasOwnProperty("current_progress"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.current_progress);
            if (message.max_progress != null && message.hasOwnProperty("max_progress"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.max_progress);
            if (message.global_achieved_pct != null && message.hasOwnProperty("global_achieved_pct"))
                writer.uint32(/* id 11, wireType 5 =*/93).float(message.global_achieved_pct);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationAchievement message, length delimited. Does not implicitly {@link CClientNotificationAchievement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationAchievement
         * @static
         * @param {ICClientNotificationAchievement} message CClientNotificationAchievement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationAchievement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationAchievement message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationAchievement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationAchievement} CClientNotificationAchievement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationAchievement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationAchievement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.achievement_id = reader.string();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.image_url = reader.string();
                    break;
                case 6:
                    message.achieved = reader.bool();
                    break;
                case 7:
                    message.rtime_unlocked = reader.uint32();
                    break;
                case 8:
                    message.min_progress = reader.float();
                    break;
                case 9:
                    message.current_progress = reader.float();
                    break;
                case 10:
                    message.max_progress = reader.float();
                    break;
                case 11:
                    message.global_achieved_pct = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientNotificationAchievement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationAchievement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationAchievement} CClientNotificationAchievement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationAchievement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationAchievement message.
         * @function verify
         * @memberof CClientNotificationAchievement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationAchievement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.achievement_id != null && message.hasOwnProperty("achievement_id"))
                if (!$util.isString(message.achievement_id))
                    return "achievement_id: string expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.image_url != null && message.hasOwnProperty("image_url"))
                if (!$util.isString(message.image_url))
                    return "image_url: string expected";
            if (message.achieved != null && message.hasOwnProperty("achieved"))
                if (typeof message.achieved !== "boolean")
                    return "achieved: boolean expected";
            if (message.rtime_unlocked != null && message.hasOwnProperty("rtime_unlocked"))
                if (!$util.isInteger(message.rtime_unlocked))
                    return "rtime_unlocked: integer expected";
            if (message.min_progress != null && message.hasOwnProperty("min_progress"))
                if (typeof message.min_progress !== "number")
                    return "min_progress: number expected";
            if (message.current_progress != null && message.hasOwnProperty("current_progress"))
                if (typeof message.current_progress !== "number")
                    return "current_progress: number expected";
            if (message.max_progress != null && message.hasOwnProperty("max_progress"))
                if (typeof message.max_progress !== "number")
                    return "max_progress: number expected";
            if (message.global_achieved_pct != null && message.hasOwnProperty("global_achieved_pct"))
                if (typeof message.global_achieved_pct !== "number")
                    return "global_achieved_pct: number expected";
            return null;
        };
    
        /**
         * Creates a CClientNotificationAchievement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationAchievement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationAchievement} CClientNotificationAchievement
         */
        CClientNotificationAchievement.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationAchievement)
                return object;
            var message = new $root.CClientNotificationAchievement();
            if (object.achievement_id != null)
                message.achievement_id = String(object.achievement_id);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.image_url != null)
                message.image_url = String(object.image_url);
            if (object.achieved != null)
                message.achieved = Boolean(object.achieved);
            if (object.rtime_unlocked != null)
                message.rtime_unlocked = object.rtime_unlocked >>> 0;
            if (object.min_progress != null)
                message.min_progress = Number(object.min_progress);
            if (object.current_progress != null)
                message.current_progress = Number(object.current_progress);
            if (object.max_progress != null)
                message.max_progress = Number(object.max_progress);
            if (object.global_achieved_pct != null)
                message.global_achieved_pct = Number(object.global_achieved_pct);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientNotificationAchievement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationAchievement
         * @static
         * @param {CClientNotificationAchievement} message CClientNotificationAchievement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationAchievement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.achievement_id = "";
                object.appid = 0;
                object.name = "";
                object.description = "";
                object.image_url = "";
                object.achieved = false;
                object.rtime_unlocked = 0;
                object.min_progress = 0;
                object.current_progress = 0;
                object.max_progress = 0;
                object.global_achieved_pct = 0;
            }
            if (message.achievement_id != null && message.hasOwnProperty("achievement_id"))
                object.achievement_id = message.achievement_id;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.image_url != null && message.hasOwnProperty("image_url"))
                object.image_url = message.image_url;
            if (message.achieved != null && message.hasOwnProperty("achieved"))
                object.achieved = message.achieved;
            if (message.rtime_unlocked != null && message.hasOwnProperty("rtime_unlocked"))
                object.rtime_unlocked = message.rtime_unlocked;
            if (message.min_progress != null && message.hasOwnProperty("min_progress"))
                object.min_progress = options.json && !isFinite(message.min_progress) ? String(message.min_progress) : message.min_progress;
            if (message.current_progress != null && message.hasOwnProperty("current_progress"))
                object.current_progress = options.json && !isFinite(message.current_progress) ? String(message.current_progress) : message.current_progress;
            if (message.max_progress != null && message.hasOwnProperty("max_progress"))
                object.max_progress = options.json && !isFinite(message.max_progress) ? String(message.max_progress) : message.max_progress;
            if (message.global_achieved_pct != null && message.hasOwnProperty("global_achieved_pct"))
                object.global_achieved_pct = options.json && !isFinite(message.global_achieved_pct) ? String(message.global_achieved_pct) : message.global_achieved_pct;
            return object;
        };
    
        /**
         * Converts this CClientNotificationAchievement to JSON.
         * @function toJSON
         * @memberof CClientNotificationAchievement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationAchievement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationAchievement;
    })();
    
    $root.CClientNotificationLowBattery = (function() {
    
        /**
         * Properties of a CClientNotificationLowBattery.
         * @exports ICClientNotificationLowBattery
         * @interface ICClientNotificationLowBattery
         * @property {number|null} [pct_remaining] CClientNotificationLowBattery pct_remaining
         */
    
        /**
         * Constructs a new CClientNotificationLowBattery.
         * @exports CClientNotificationLowBattery
         * @classdesc Represents a CClientNotificationLowBattery.
         * @implements ICClientNotificationLowBattery
         * @constructor
         * @param {ICClientNotificationLowBattery=} [properties] Properties to set
         */
        function CClientNotificationLowBattery(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationLowBattery pct_remaining.
         * @member {number} pct_remaining
         * @memberof CClientNotificationLowBattery
         * @instance
         */
        CClientNotificationLowBattery.prototype.pct_remaining = 0;
    
        /**
         * Creates a new CClientNotificationLowBattery instance using the specified properties.
         * @function create
         * @memberof CClientNotificationLowBattery
         * @static
         * @param {ICClientNotificationLowBattery=} [properties] Properties to set
         * @returns {CClientNotificationLowBattery} CClientNotificationLowBattery instance
         */
        CClientNotificationLowBattery.create = function create(properties) {
            return new CClientNotificationLowBattery(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationLowBattery message. Does not implicitly {@link CClientNotificationLowBattery.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationLowBattery
         * @static
         * @param {ICClientNotificationLowBattery} message CClientNotificationLowBattery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationLowBattery.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pct_remaining != null && message.hasOwnProperty("pct_remaining"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.pct_remaining);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationLowBattery message, length delimited. Does not implicitly {@link CClientNotificationLowBattery.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationLowBattery
         * @static
         * @param {ICClientNotificationLowBattery} message CClientNotificationLowBattery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationLowBattery.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationLowBattery message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationLowBattery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationLowBattery} CClientNotificationLowBattery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationLowBattery.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationLowBattery();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pct_remaining = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientNotificationLowBattery message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationLowBattery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationLowBattery} CClientNotificationLowBattery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationLowBattery.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationLowBattery message.
         * @function verify
         * @memberof CClientNotificationLowBattery
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationLowBattery.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pct_remaining != null && message.hasOwnProperty("pct_remaining"))
                if (typeof message.pct_remaining !== "number")
                    return "pct_remaining: number expected";
            return null;
        };
    
        /**
         * Creates a CClientNotificationLowBattery message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationLowBattery
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationLowBattery} CClientNotificationLowBattery
         */
        CClientNotificationLowBattery.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationLowBattery)
                return object;
            var message = new $root.CClientNotificationLowBattery();
            if (object.pct_remaining != null)
                message.pct_remaining = Number(object.pct_remaining);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientNotificationLowBattery message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationLowBattery
         * @static
         * @param {CClientNotificationLowBattery} message CClientNotificationLowBattery
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationLowBattery.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pct_remaining = 0;
            if (message.pct_remaining != null && message.hasOwnProperty("pct_remaining"))
                object.pct_remaining = options.json && !isFinite(message.pct_remaining) ? String(message.pct_remaining) : message.pct_remaining;
            return object;
        };
    
        /**
         * Converts this CClientNotificationLowBattery to JSON.
         * @function toJSON
         * @memberof CClientNotificationLowBattery
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationLowBattery.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationLowBattery;
    })();
    
    $root.CClientNotificationSystemUpdate = (function() {
    
        /**
         * Properties of a CClientNotificationSystemUpdate.
         * @exports ICClientNotificationSystemUpdate
         * @interface ICClientNotificationSystemUpdate
         * @property {ESystemUpdateNotificationType|null} [type] CClientNotificationSystemUpdate type
         */
    
        /**
         * Constructs a new CClientNotificationSystemUpdate.
         * @exports CClientNotificationSystemUpdate
         * @classdesc Represents a CClientNotificationSystemUpdate.
         * @implements ICClientNotificationSystemUpdate
         * @constructor
         * @param {ICClientNotificationSystemUpdate=} [properties] Properties to set
         */
        function CClientNotificationSystemUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationSystemUpdate type.
         * @member {ESystemUpdateNotificationType} type
         * @memberof CClientNotificationSystemUpdate
         * @instance
         */
        CClientNotificationSystemUpdate.prototype.type = 0;
    
        /**
         * Creates a new CClientNotificationSystemUpdate instance using the specified properties.
         * @function create
         * @memberof CClientNotificationSystemUpdate
         * @static
         * @param {ICClientNotificationSystemUpdate=} [properties] Properties to set
         * @returns {CClientNotificationSystemUpdate} CClientNotificationSystemUpdate instance
         */
        CClientNotificationSystemUpdate.create = function create(properties) {
            return new CClientNotificationSystemUpdate(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationSystemUpdate message. Does not implicitly {@link CClientNotificationSystemUpdate.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationSystemUpdate
         * @static
         * @param {ICClientNotificationSystemUpdate} message CClientNotificationSystemUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationSystemUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationSystemUpdate message, length delimited. Does not implicitly {@link CClientNotificationSystemUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationSystemUpdate
         * @static
         * @param {ICClientNotificationSystemUpdate} message CClientNotificationSystemUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationSystemUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationSystemUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationSystemUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationSystemUpdate} CClientNotificationSystemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationSystemUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationSystemUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientNotificationSystemUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationSystemUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationSystemUpdate} CClientNotificationSystemUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationSystemUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationSystemUpdate message.
         * @function verify
         * @memberof CClientNotificationSystemUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationSystemUpdate.verify = function verify(message) {
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
            return null;
        };
    
        /**
         * Creates a CClientNotificationSystemUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationSystemUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationSystemUpdate} CClientNotificationSystemUpdate
         */
        CClientNotificationSystemUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationSystemUpdate)
                return object;
            var message = new $root.CClientNotificationSystemUpdate();
            switch (object.type) {
            case "k_ESystemUpdateNotificationType_Invalid":
            case 0:
                message.type = 0;
                break;
            case "k_ESystemUpdateNotificationType_Available":
            case 1:
                message.type = 1;
                break;
            case "k_ESystemUpdateNotificationType_NeedsRestart":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientNotificationSystemUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationSystemUpdate
         * @static
         * @param {CClientNotificationSystemUpdate} message CClientNotificationSystemUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationSystemUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "k_ESystemUpdateNotificationType_Invalid" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.ESystemUpdateNotificationType[message.type] : message.type;
            return object;
        };
    
        /**
         * Converts this CClientNotificationSystemUpdate to JSON.
         * @function toJSON
         * @memberof CClientNotificationSystemUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationSystemUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationSystemUpdate;
    })();
    
    $root.CClientNotificationFriendMessage = (function() {
    
        /**
         * Properties of a CClientNotificationFriendMessage.
         * @exports ICClientNotificationFriendMessage
         * @interface ICClientNotificationFriendMessage
         * @property {string|null} [tag] CClientNotificationFriendMessage tag
         * @property {string|null} [steamid] CClientNotificationFriendMessage steamid
         * @property {string|null} [title] CClientNotificationFriendMessage title
         * @property {string|null} [body] CClientNotificationFriendMessage body
         * @property {string|null} [icon] CClientNotificationFriendMessage icon
         * @property {number|null} [notificationid] CClientNotificationFriendMessage notificationid
         */
    
        /**
         * Constructs a new CClientNotificationFriendMessage.
         * @exports CClientNotificationFriendMessage
         * @classdesc Represents a CClientNotificationFriendMessage.
         * @implements ICClientNotificationFriendMessage
         * @constructor
         * @param {ICClientNotificationFriendMessage=} [properties] Properties to set
         */
        function CClientNotificationFriendMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationFriendMessage tag.
         * @member {string} tag
         * @memberof CClientNotificationFriendMessage
         * @instance
         */
        CClientNotificationFriendMessage.prototype.tag = "";
    
        /**
         * CClientNotificationFriendMessage steamid.
         * @member {string} steamid
         * @memberof CClientNotificationFriendMessage
         * @instance
         */
        CClientNotificationFriendMessage.prototype.steamid = "";
    
        /**
         * CClientNotificationFriendMessage title.
         * @member {string} title
         * @memberof CClientNotificationFriendMessage
         * @instance
         */
        CClientNotificationFriendMessage.prototype.title = "";
    
        /**
         * CClientNotificationFriendMessage body.
         * @member {string} body
         * @memberof CClientNotificationFriendMessage
         * @instance
         */
        CClientNotificationFriendMessage.prototype.body = "";
    
        /**
         * CClientNotificationFriendMessage icon.
         * @member {string} icon
         * @memberof CClientNotificationFriendMessage
         * @instance
         */
        CClientNotificationFriendMessage.prototype.icon = "";
    
        /**
         * CClientNotificationFriendMessage notificationid.
         * @member {number} notificationid
         * @memberof CClientNotificationFriendMessage
         * @instance
         */
        CClientNotificationFriendMessage.prototype.notificationid = 0;
    
        /**
         * Creates a new CClientNotificationFriendMessage instance using the specified properties.
         * @function create
         * @memberof CClientNotificationFriendMessage
         * @static
         * @param {ICClientNotificationFriendMessage=} [properties] Properties to set
         * @returns {CClientNotificationFriendMessage} CClientNotificationFriendMessage instance
         */
        CClientNotificationFriendMessage.create = function create(properties) {
            return new CClientNotificationFriendMessage(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationFriendMessage message. Does not implicitly {@link CClientNotificationFriendMessage.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationFriendMessage
         * @static
         * @param {ICClientNotificationFriendMessage} message CClientNotificationFriendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationFriendMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tag != null && message.hasOwnProperty("tag"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.steamid);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.body);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
            if (message.notificationid != null && message.hasOwnProperty("notificationid"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.notificationid);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationFriendMessage message, length delimited. Does not implicitly {@link CClientNotificationFriendMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationFriendMessage
         * @static
         * @param {ICClientNotificationFriendMessage} message CClientNotificationFriendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationFriendMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationFriendMessage message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationFriendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationFriendMessage} CClientNotificationFriendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationFriendMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationFriendMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tag = reader.string();
                    break;
                case 2:
                    message.steamid = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.body = reader.string();
                    break;
                case 5:
                    message.icon = reader.string();
                    break;
                case 6:
                    message.notificationid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientNotificationFriendMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationFriendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationFriendMessage} CClientNotificationFriendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationFriendMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationFriendMessage message.
         * @function verify
         * @memberof CClientNotificationFriendMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationFriendMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isString(message.steamid))
                    return "steamid: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.notificationid != null && message.hasOwnProperty("notificationid"))
                if (!$util.isInteger(message.notificationid))
                    return "notificationid: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientNotificationFriendMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationFriendMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationFriendMessage} CClientNotificationFriendMessage
         */
        CClientNotificationFriendMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationFriendMessage)
                return object;
            var message = new $root.CClientNotificationFriendMessage();
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.steamid != null)
                message.steamid = String(object.steamid);
            if (object.title != null)
                message.title = String(object.title);
            if (object.body != null)
                message.body = String(object.body);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.notificationid != null)
                message.notificationid = object.notificationid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientNotificationFriendMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationFriendMessage
         * @static
         * @param {CClientNotificationFriendMessage} message CClientNotificationFriendMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationFriendMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tag = "";
                object.steamid = "";
                object.title = "";
                object.body = "";
                object.icon = "";
                object.notificationid = 0;
            }
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                object.steamid = message.steamid;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.notificationid != null && message.hasOwnProperty("notificationid"))
                object.notificationid = message.notificationid;
            return object;
        };
    
        /**
         * Converts this CClientNotificationFriendMessage to JSON.
         * @function toJSON
         * @memberof CClientNotificationFriendMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationFriendMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationFriendMessage;
    })();
    
    $root.CClientNotificationGroupChatMessage = (function() {
    
        /**
         * Properties of a CClientNotificationGroupChatMessage.
         * @exports ICClientNotificationGroupChatMessage
         * @interface ICClientNotificationGroupChatMessage
         * @property {string|null} [tag] CClientNotificationGroupChatMessage tag
         * @property {string|null} [steamid_sender] CClientNotificationGroupChatMessage steamid_sender
         * @property {string|null} [chat_group_id] CClientNotificationGroupChatMessage chat_group_id
         * @property {string|null} [chat_id] CClientNotificationGroupChatMessage chat_id
         * @property {string|null} [title] CClientNotificationGroupChatMessage title
         * @property {string|null} [body] CClientNotificationGroupChatMessage body
         * @property {string|null} [rawbody] CClientNotificationGroupChatMessage rawbody
         * @property {string|null} [icon] CClientNotificationGroupChatMessage icon
         * @property {number|null} [notificationid] CClientNotificationGroupChatMessage notificationid
         */
    
        /**
         * Constructs a new CClientNotificationGroupChatMessage.
         * @exports CClientNotificationGroupChatMessage
         * @classdesc Represents a CClientNotificationGroupChatMessage.
         * @implements ICClientNotificationGroupChatMessage
         * @constructor
         * @param {ICClientNotificationGroupChatMessage=} [properties] Properties to set
         */
        function CClientNotificationGroupChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientNotificationGroupChatMessage tag.
         * @member {string} tag
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.tag = "";
    
        /**
         * CClientNotificationGroupChatMessage steamid_sender.
         * @member {string} steamid_sender
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.steamid_sender = "";
    
        /**
         * CClientNotificationGroupChatMessage chat_group_id.
         * @member {string} chat_group_id
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.chat_group_id = "";
    
        /**
         * CClientNotificationGroupChatMessage chat_id.
         * @member {string} chat_id
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.chat_id = "";
    
        /**
         * CClientNotificationGroupChatMessage title.
         * @member {string} title
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.title = "";
    
        /**
         * CClientNotificationGroupChatMessage body.
         * @member {string} body
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.body = "";
    
        /**
         * CClientNotificationGroupChatMessage rawbody.
         * @member {string} rawbody
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.rawbody = "";
    
        /**
         * CClientNotificationGroupChatMessage icon.
         * @member {string} icon
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.icon = "";
    
        /**
         * CClientNotificationGroupChatMessage notificationid.
         * @member {number} notificationid
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         */
        CClientNotificationGroupChatMessage.prototype.notificationid = 0;
    
        /**
         * Creates a new CClientNotificationGroupChatMessage instance using the specified properties.
         * @function create
         * @memberof CClientNotificationGroupChatMessage
         * @static
         * @param {ICClientNotificationGroupChatMessage=} [properties] Properties to set
         * @returns {CClientNotificationGroupChatMessage} CClientNotificationGroupChatMessage instance
         */
        CClientNotificationGroupChatMessage.create = function create(properties) {
            return new CClientNotificationGroupChatMessage(properties);
        };
    
        /**
         * Encodes the specified CClientNotificationGroupChatMessage message. Does not implicitly {@link CClientNotificationGroupChatMessage.verify|verify} messages.
         * @function encode
         * @memberof CClientNotificationGroupChatMessage
         * @static
         * @param {ICClientNotificationGroupChatMessage} message CClientNotificationGroupChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationGroupChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tag != null && message.hasOwnProperty("tag"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tag);
            if (message.steamid_sender != null && message.hasOwnProperty("steamid_sender"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.steamid_sender);
            if (message.chat_group_id != null && message.hasOwnProperty("chat_group_id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.chat_group_id);
            if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.chat_id);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.body);
            if (message.rawbody != null && message.hasOwnProperty("rawbody"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.rawbody);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.icon);
            if (message.notificationid != null && message.hasOwnProperty("notificationid"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.notificationid);
            return writer;
        };
    
        /**
         * Encodes the specified CClientNotificationGroupChatMessage message, length delimited. Does not implicitly {@link CClientNotificationGroupChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientNotificationGroupChatMessage
         * @static
         * @param {ICClientNotificationGroupChatMessage} message CClientNotificationGroupChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientNotificationGroupChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientNotificationGroupChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof CClientNotificationGroupChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientNotificationGroupChatMessage} CClientNotificationGroupChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationGroupChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientNotificationGroupChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tag = reader.string();
                    break;
                case 2:
                    message.steamid_sender = reader.string();
                    break;
                case 3:
                    message.chat_group_id = reader.string();
                    break;
                case 4:
                    message.chat_id = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.body = reader.string();
                    break;
                case 7:
                    message.rawbody = reader.string();
                    break;
                case 8:
                    message.icon = reader.string();
                    break;
                case 9:
                    message.notificationid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientNotificationGroupChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientNotificationGroupChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientNotificationGroupChatMessage} CClientNotificationGroupChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientNotificationGroupChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientNotificationGroupChatMessage message.
         * @function verify
         * @memberof CClientNotificationGroupChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientNotificationGroupChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.steamid_sender != null && message.hasOwnProperty("steamid_sender"))
                if (!$util.isString(message.steamid_sender))
                    return "steamid_sender: string expected";
            if (message.chat_group_id != null && message.hasOwnProperty("chat_group_id"))
                if (!$util.isString(message.chat_group_id))
                    return "chat_group_id: string expected";
            if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                if (!$util.isString(message.chat_id))
                    return "chat_id: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            if (message.rawbody != null && message.hasOwnProperty("rawbody"))
                if (!$util.isString(message.rawbody))
                    return "rawbody: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.notificationid != null && message.hasOwnProperty("notificationid"))
                if (!$util.isInteger(message.notificationid))
                    return "notificationid: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientNotificationGroupChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientNotificationGroupChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientNotificationGroupChatMessage} CClientNotificationGroupChatMessage
         */
        CClientNotificationGroupChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientNotificationGroupChatMessage)
                return object;
            var message = new $root.CClientNotificationGroupChatMessage();
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.steamid_sender != null)
                message.steamid_sender = String(object.steamid_sender);
            if (object.chat_group_id != null)
                message.chat_group_id = String(object.chat_group_id);
            if (object.chat_id != null)
                message.chat_id = String(object.chat_id);
            if (object.title != null)
                message.title = String(object.title);
            if (object.body != null)
                message.body = String(object.body);
            if (object.rawbody != null)
                message.rawbody = String(object.rawbody);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.notificationid != null)
                message.notificationid = object.notificationid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientNotificationGroupChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientNotificationGroupChatMessage
         * @static
         * @param {CClientNotificationGroupChatMessage} message CClientNotificationGroupChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientNotificationGroupChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tag = "";
                object.steamid_sender = "";
                object.chat_group_id = "";
                object.chat_id = "";
                object.title = "";
                object.body = "";
                object.rawbody = "";
                object.icon = "";
                object.notificationid = 0;
            }
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.steamid_sender != null && message.hasOwnProperty("steamid_sender"))
                object.steamid_sender = message.steamid_sender;
            if (message.chat_group_id != null && message.hasOwnProperty("chat_group_id"))
                object.chat_group_id = message.chat_group_id;
            if (message.chat_id != null && message.hasOwnProperty("chat_id"))
                object.chat_id = message.chat_id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.rawbody != null && message.hasOwnProperty("rawbody"))
                object.rawbody = message.rawbody;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.notificationid != null && message.hasOwnProperty("notificationid"))
                object.notificationid = message.notificationid;
            return object;
        };
    
        /**
         * Converts this CClientNotificationGroupChatMessage to JSON.
         * @function toJSON
         * @memberof CClientNotificationGroupChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientNotificationGroupChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientNotificationGroupChatMessage;
    })();

    return $root;
});
