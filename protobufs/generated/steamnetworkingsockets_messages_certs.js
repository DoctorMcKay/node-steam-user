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
    
    $root.CMsgSteamNetworkingIdentity = (function() {
    
        /**
         * Properties of a CMsgSteamNetworkingIdentity.
         * @exports ICMsgSteamNetworkingIdentity
         * @interface ICMsgSteamNetworkingIdentity
         * @property {number|Long|null} [steam_id] CMsgSteamNetworkingIdentity steam_id
         * @property {string|null} [xbox_pairwise_id] CMsgSteamNetworkingIdentity xbox_pairwise_id
         * @property {Uint8Array|null} [generic_bytes] CMsgSteamNetworkingIdentity generic_bytes
         * @property {string|null} [generic_string] CMsgSteamNetworkingIdentity generic_string
         * @property {Uint8Array|null} [ipv6_and_port] CMsgSteamNetworkingIdentity ipv6_and_port
         */
    
        /**
         * Constructs a new CMsgSteamNetworkingIdentity.
         * @exports CMsgSteamNetworkingIdentity
         * @classdesc Represents a CMsgSteamNetworkingIdentity.
         * @implements ICMsgSteamNetworkingIdentity
         * @constructor
         * @param {ICMsgSteamNetworkingIdentity=} [properties] Properties to set
         */
        function CMsgSteamNetworkingIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamNetworkingIdentity steam_id.
         * @member {number|Long} steam_id
         * @memberof CMsgSteamNetworkingIdentity
         * @instance
         */
        CMsgSteamNetworkingIdentity.prototype.steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamNetworkingIdentity xbox_pairwise_id.
         * @member {string} xbox_pairwise_id
         * @memberof CMsgSteamNetworkingIdentity
         * @instance
         */
        CMsgSteamNetworkingIdentity.prototype.xbox_pairwise_id = "";
    
        /**
         * CMsgSteamNetworkingIdentity generic_bytes.
         * @member {Uint8Array} generic_bytes
         * @memberof CMsgSteamNetworkingIdentity
         * @instance
         */
        CMsgSteamNetworkingIdentity.prototype.generic_bytes = $util.newBuffer([]);
    
        /**
         * CMsgSteamNetworkingIdentity generic_string.
         * @member {string} generic_string
         * @memberof CMsgSteamNetworkingIdentity
         * @instance
         */
        CMsgSteamNetworkingIdentity.prototype.generic_string = "";
    
        /**
         * CMsgSteamNetworkingIdentity ipv6_and_port.
         * @member {Uint8Array} ipv6_and_port
         * @memberof CMsgSteamNetworkingIdentity
         * @instance
         */
        CMsgSteamNetworkingIdentity.prototype.ipv6_and_port = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamNetworkingIdentity instance using the specified properties.
         * @function create
         * @memberof CMsgSteamNetworkingIdentity
         * @static
         * @param {ICMsgSteamNetworkingIdentity=} [properties] Properties to set
         * @returns {CMsgSteamNetworkingIdentity} CMsgSteamNetworkingIdentity instance
         */
        CMsgSteamNetworkingIdentity.create = function create(properties) {
            return new CMsgSteamNetworkingIdentity(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamNetworkingIdentity message. Does not implicitly {@link CMsgSteamNetworkingIdentity.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamNetworkingIdentity
         * @static
         * @param {ICMsgSteamNetworkingIdentity} message CMsgSteamNetworkingIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingIdentity.encode = function encode(message, writer) {
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
         * Encodes the specified CMsgSteamNetworkingIdentity message, length delimited. Does not implicitly {@link CMsgSteamNetworkingIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamNetworkingIdentity
         * @static
         * @param {ICMsgSteamNetworkingIdentity} message CMsgSteamNetworkingIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamNetworkingIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamNetworkingIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamNetworkingIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamNetworkingIdentity} CMsgSteamNetworkingIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingIdentity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamNetworkingIdentity();
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
         * Decodes a CMsgSteamNetworkingIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamNetworkingIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamNetworkingIdentity} CMsgSteamNetworkingIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamNetworkingIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamNetworkingIdentity message.
         * @function verify
         * @memberof CMsgSteamNetworkingIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamNetworkingIdentity.verify = function verify(message) {
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
         * Creates a CMsgSteamNetworkingIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamNetworkingIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamNetworkingIdentity} CMsgSteamNetworkingIdentity
         */
        CMsgSteamNetworkingIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamNetworkingIdentity)
                return object;
            var message = new $root.CMsgSteamNetworkingIdentity();
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
         * Creates a plain object from a CMsgSteamNetworkingIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamNetworkingIdentity
         * @static
         * @param {CMsgSteamNetworkingIdentity} message CMsgSteamNetworkingIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamNetworkingIdentity.toObject = function toObject(message, options) {
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
         * Converts this CMsgSteamNetworkingIdentity to JSON.
         * @function toJSON
         * @memberof CMsgSteamNetworkingIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamNetworkingIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamNetworkingIdentity;
    })();
    
    $root.CMsgSteamDatagramCertificate = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCertificate.
         * @exports ICMsgSteamDatagramCertificate
         * @interface ICMsgSteamDatagramCertificate
         * @property {CMsgSteamDatagramCertificate.EKeyType|null} [key_type] CMsgSteamDatagramCertificate key_type
         * @property {Uint8Array|null} [key_data] CMsgSteamDatagramCertificate key_data
         * @property {number|Long|null} [steam_id] CMsgSteamDatagramCertificate steam_id
         * @property {Array.<number>|null} [gameserver_datacenter_ids] CMsgSteamDatagramCertificate gameserver_datacenter_ids
         * @property {number|null} [time_created] CMsgSteamDatagramCertificate time_created
         * @property {number|null} [time_expiry] CMsgSteamDatagramCertificate time_expiry
         * @property {number|null} [app_id] CMsgSteamDatagramCertificate app_id
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
         * CMsgSteamDatagramCertificate steam_id.
         * @member {number|Long} steam_id
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
         * CMsgSteamDatagramCertificate app_id.
         * @member {number} app_id
         * @memberof CMsgSteamDatagramCertificate
         * @instance
         */
        CMsgSteamDatagramCertificate.prototype.app_id = 0;
    
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
            if (message.steam_id != null && message.hasOwnProperty("steam_id"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.steam_id);
            if (message.gameserver_datacenter_ids != null && message.gameserver_datacenter_ids.length)
                for (var i = 0; i < message.gameserver_datacenter_ids.length; ++i)
                    writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.gameserver_datacenter_ids[i]);
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                writer.uint32(/* id 8, wireType 5 =*/69).fixed32(message.time_created);
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.time_expiry);
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.app_id);
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
                    message.steam_id = reader.fixed64();
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
                    message.app_id = reader.uint32();
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
            if (message.steam_id != null && message.hasOwnProperty("steam_id"))
                if (!$util.isInteger(message.steam_id) && !(message.steam_id && $util.isInteger(message.steam_id.low) && $util.isInteger(message.steam_id.high)))
                    return "steam_id: integer|Long expected";
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
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                if (!$util.isInteger(message.app_id))
                    return "app_id: integer expected";
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
            if (object.steam_id != null)
                if ($util.Long)
                    (message.steam_id = $util.Long.fromValue(object.steam_id)).unsigned = false;
                else if (typeof object.steam_id === "string")
                    message.steam_id = parseInt(object.steam_id, 10);
                else if (typeof object.steam_id === "number")
                    message.steam_id = object.steam_id;
                else if (typeof object.steam_id === "object")
                    message.steam_id = new $util.LongBits(object.steam_id.low >>> 0, object.steam_id.high >>> 0).toNumber();
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
            if (object.app_id != null)
                message.app_id = object.app_id >>> 0;
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
            if (options.arrays || options.defaults)
                object.gameserver_datacenter_ids = [];
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
                    object.steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steam_id = options.longs === String ? "0" : 0;
                object.time_created = 0;
                object.time_expiry = 0;
                object.app_id = 0;
            }
            if (message.key_type != null && message.hasOwnProperty("key_type"))
                object.key_type = options.enums === String ? $root.CMsgSteamDatagramCertificate.EKeyType[message.key_type] : message.key_type;
            if (message.key_data != null && message.hasOwnProperty("key_data"))
                object.key_data = options.bytes === String ? $util.base64.encode(message.key_data, 0, message.key_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.key_data) : message.key_data;
            if (message.steam_id != null && message.hasOwnProperty("steam_id"))
                if (typeof message.steam_id === "number")
                    object.steam_id = options.longs === String ? String(message.steam_id) : message.steam_id;
                else
                    object.steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.steam_id) : options.longs === Number ? new $util.LongBits(message.steam_id.low >>> 0, message.steam_id.high >>> 0).toNumber() : message.steam_id;
            if (message.gameserver_datacenter_ids && message.gameserver_datacenter_ids.length) {
                object.gameserver_datacenter_ids = [];
                for (var j = 0; j < message.gameserver_datacenter_ids.length; ++j)
                    object.gameserver_datacenter_ids[j] = message.gameserver_datacenter_ids[j];
            }
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                object.time_created = message.time_created;
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                object.time_expiry = message.time_expiry;
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                object.app_id = message.app_id;
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

    return $root;
});
