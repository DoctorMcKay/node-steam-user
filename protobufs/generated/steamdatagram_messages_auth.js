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
    
    $root.CMsgSteamDatagramRelayAuthTicket = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramRelayAuthTicket.
         * @exports ICMsgSteamDatagramRelayAuthTicket
         * @interface ICMsgSteamDatagramRelayAuthTicket
         * @property {number|null} [time_expiry] CMsgSteamDatagramRelayAuthTicket time_expiry
         * @property {Uint8Array|null} [authorized_client_identity] CMsgSteamDatagramRelayAuthTicket authorized_client_identity
         * @property {Uint8Array|null} [gameserver_identity] CMsgSteamDatagramRelayAuthTicket gameserver_identity
         * @property {number|null} [authorized_public_ip] CMsgSteamDatagramRelayAuthTicket authorized_public_ip
         * @property {Uint8Array|null} [gameserver_address] CMsgSteamDatagramRelayAuthTicket gameserver_address
         * @property {number|null} [app_id] CMsgSteamDatagramRelayAuthTicket app_id
         * @property {number|null} [virtual_port] CMsgSteamDatagramRelayAuthTicket virtual_port
         * @property {Array.<CMsgSteamDatagramRelayAuthTicket.IExtraField>|null} [extra_fields] CMsgSteamDatagramRelayAuthTicket extra_fields
         * @property {number|Long|null} [legacy_authorized_steam_id] CMsgSteamDatagramRelayAuthTicket legacy_authorized_steam_id
         * @property {number|Long|null} [legacy_gameserver_steam_id] CMsgSteamDatagramRelayAuthTicket legacy_gameserver_steam_id
         * @property {number|Long|null} [legacy_gameserver_net_id] CMsgSteamDatagramRelayAuthTicket legacy_gameserver_net_id
         * @property {number|null} [legacy_gameserver_pop_id] CMsgSteamDatagramRelayAuthTicket legacy_gameserver_pop_id
         * @property {Uint8Array|null} [DELETED_signature] CMsgSteamDatagramRelayAuthTicket DELETED_signature
         */
    
        /**
         * Constructs a new CMsgSteamDatagramRelayAuthTicket.
         * @exports CMsgSteamDatagramRelayAuthTicket
         * @classdesc Represents a CMsgSteamDatagramRelayAuthTicket.
         * @implements ICMsgSteamDatagramRelayAuthTicket
         * @constructor
         * @param {ICMsgSteamDatagramRelayAuthTicket=} [properties] Properties to set
         */
        function CMsgSteamDatagramRelayAuthTicket(properties) {
            this.extra_fields = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramRelayAuthTicket time_expiry.
         * @member {number} time_expiry
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.time_expiry = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket authorized_client_identity.
         * @member {Uint8Array} authorized_client_identity
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.authorized_client_identity = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramRelayAuthTicket gameserver_identity.
         * @member {Uint8Array} gameserver_identity
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.gameserver_identity = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramRelayAuthTicket authorized_public_ip.
         * @member {number} authorized_public_ip
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.authorized_public_ip = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket gameserver_address.
         * @member {Uint8Array} gameserver_address
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.gameserver_address = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramRelayAuthTicket app_id.
         * @member {number} app_id
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.app_id = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket virtual_port.
         * @member {number} virtual_port
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.virtual_port = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket extra_fields.
         * @member {Array.<CMsgSteamDatagramRelayAuthTicket.IExtraField>} extra_fields
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.extra_fields = $util.emptyArray;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacy_authorized_steam_id.
         * @member {number|Long} legacy_authorized_steam_id
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacy_authorized_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacy_gameserver_steam_id.
         * @member {number|Long} legacy_gameserver_steam_id
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacy_gameserver_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacy_gameserver_net_id.
         * @member {number|Long} legacy_gameserver_net_id
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacy_gameserver_net_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacy_gameserver_pop_id.
         * @member {number} legacy_gameserver_pop_id
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacy_gameserver_pop_id = 0;
    
        /**
         * CMsgSteamDatagramRelayAuthTicket DELETED_signature.
         * @member {Uint8Array} DELETED_signature
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.DELETED_signature = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramRelayAuthTicket instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramRelayAuthTicket=} [properties] Properties to set
         * @returns {CMsgSteamDatagramRelayAuthTicket} CMsgSteamDatagramRelayAuthTicket instance
         */
        CMsgSteamDatagramRelayAuthTicket.create = function create(properties) {
            return new CMsgSteamDatagramRelayAuthTicket(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramRelayAuthTicket message. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramRelayAuthTicket} message CMsgSteamDatagramRelayAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramRelayAuthTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.time_expiry);
            if (message.legacy_authorized_steam_id != null && message.hasOwnProperty("legacy_authorized_steam_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.legacy_authorized_steam_id);
            if (message.authorized_public_ip != null && message.hasOwnProperty("authorized_public_ip"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.authorized_public_ip);
            if (message.legacy_gameserver_steam_id != null && message.hasOwnProperty("legacy_gameserver_steam_id"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.legacy_gameserver_steam_id);
            if (message.legacy_gameserver_net_id != null && message.hasOwnProperty("legacy_gameserver_net_id"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.legacy_gameserver_net_id);
            if (message.DELETED_signature != null && message.hasOwnProperty("DELETED_signature"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.DELETED_signature);
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.app_id);
            if (message.extra_fields != null && message.extra_fields.length)
                for (var i = 0; i < message.extra_fields.length; ++i)
                    $root.CMsgSteamDatagramRelayAuthTicket.ExtraField.encode(message.extra_fields[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.legacy_gameserver_pop_id != null && message.hasOwnProperty("legacy_gameserver_pop_id"))
                writer.uint32(/* id 9, wireType 5 =*/77).fixed32(message.legacy_gameserver_pop_id);
            if (message.virtual_port != null && message.hasOwnProperty("virtual_port"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.virtual_port);
            if (message.gameserver_address != null && message.hasOwnProperty("gameserver_address"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.gameserver_address);
            if (message.authorized_client_identity != null && message.hasOwnProperty("authorized_client_identity"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.authorized_client_identity);
            if (message.gameserver_identity != null && message.hasOwnProperty("gameserver_identity"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.gameserver_identity);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramRelayAuthTicket message, length delimited. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramRelayAuthTicket} message CMsgSteamDatagramRelayAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramRelayAuthTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramRelayAuthTicket message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramRelayAuthTicket} CMsgSteamDatagramRelayAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramRelayAuthTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramRelayAuthTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time_expiry = reader.fixed32();
                    break;
                case 12:
                    message.authorized_client_identity = reader.bytes();
                    break;
                case 13:
                    message.gameserver_identity = reader.bytes();
                    break;
                case 3:
                    message.authorized_public_ip = reader.fixed32();
                    break;
                case 11:
                    message.gameserver_address = reader.bytes();
                    break;
                case 7:
                    message.app_id = reader.uint32();
                    break;
                case 10:
                    message.virtual_port = reader.uint32();
                    break;
                case 8:
                    if (!(message.extra_fields && message.extra_fields.length))
                        message.extra_fields = [];
                    message.extra_fields.push($root.CMsgSteamDatagramRelayAuthTicket.ExtraField.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.legacy_authorized_steam_id = reader.fixed64();
                    break;
                case 4:
                    message.legacy_gameserver_steam_id = reader.fixed64();
                    break;
                case 5:
                    message.legacy_gameserver_net_id = reader.fixed64();
                    break;
                case 9:
                    message.legacy_gameserver_pop_id = reader.fixed32();
                    break;
                case 6:
                    message.DELETED_signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramRelayAuthTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramRelayAuthTicket} CMsgSteamDatagramRelayAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramRelayAuthTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramRelayAuthTicket message.
         * @function verify
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramRelayAuthTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                if (!$util.isInteger(message.time_expiry))
                    return "time_expiry: integer expected";
            if (message.authorized_client_identity != null && message.hasOwnProperty("authorized_client_identity"))
                if (!(message.authorized_client_identity && typeof message.authorized_client_identity.length === "number" || $util.isString(message.authorized_client_identity)))
                    return "authorized_client_identity: buffer expected";
            if (message.gameserver_identity != null && message.hasOwnProperty("gameserver_identity"))
                if (!(message.gameserver_identity && typeof message.gameserver_identity.length === "number" || $util.isString(message.gameserver_identity)))
                    return "gameserver_identity: buffer expected";
            if (message.authorized_public_ip != null && message.hasOwnProperty("authorized_public_ip"))
                if (!$util.isInteger(message.authorized_public_ip))
                    return "authorized_public_ip: integer expected";
            if (message.gameserver_address != null && message.hasOwnProperty("gameserver_address"))
                if (!(message.gameserver_address && typeof message.gameserver_address.length === "number" || $util.isString(message.gameserver_address)))
                    return "gameserver_address: buffer expected";
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                if (!$util.isInteger(message.app_id))
                    return "app_id: integer expected";
            if (message.virtual_port != null && message.hasOwnProperty("virtual_port"))
                if (!$util.isInteger(message.virtual_port))
                    return "virtual_port: integer expected";
            if (message.extra_fields != null && message.hasOwnProperty("extra_fields")) {
                if (!Array.isArray(message.extra_fields))
                    return "extra_fields: array expected";
                for (var i = 0; i < message.extra_fields.length; ++i) {
                    var error = $root.CMsgSteamDatagramRelayAuthTicket.ExtraField.verify(message.extra_fields[i]);
                    if (error)
                        return "extra_fields." + error;
                }
            }
            if (message.legacy_authorized_steam_id != null && message.hasOwnProperty("legacy_authorized_steam_id"))
                if (!$util.isInteger(message.legacy_authorized_steam_id) && !(message.legacy_authorized_steam_id && $util.isInteger(message.legacy_authorized_steam_id.low) && $util.isInteger(message.legacy_authorized_steam_id.high)))
                    return "legacy_authorized_steam_id: integer|Long expected";
            if (message.legacy_gameserver_steam_id != null && message.hasOwnProperty("legacy_gameserver_steam_id"))
                if (!$util.isInteger(message.legacy_gameserver_steam_id) && !(message.legacy_gameserver_steam_id && $util.isInteger(message.legacy_gameserver_steam_id.low) && $util.isInteger(message.legacy_gameserver_steam_id.high)))
                    return "legacy_gameserver_steam_id: integer|Long expected";
            if (message.legacy_gameserver_net_id != null && message.hasOwnProperty("legacy_gameserver_net_id"))
                if (!$util.isInteger(message.legacy_gameserver_net_id) && !(message.legacy_gameserver_net_id && $util.isInteger(message.legacy_gameserver_net_id.low) && $util.isInteger(message.legacy_gameserver_net_id.high)))
                    return "legacy_gameserver_net_id: integer|Long expected";
            if (message.legacy_gameserver_pop_id != null && message.hasOwnProperty("legacy_gameserver_pop_id"))
                if (!$util.isInteger(message.legacy_gameserver_pop_id))
                    return "legacy_gameserver_pop_id: integer expected";
            if (message.DELETED_signature != null && message.hasOwnProperty("DELETED_signature"))
                if (!(message.DELETED_signature && typeof message.DELETED_signature.length === "number" || $util.isString(message.DELETED_signature)))
                    return "DELETED_signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramRelayAuthTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramRelayAuthTicket} CMsgSteamDatagramRelayAuthTicket
         */
        CMsgSteamDatagramRelayAuthTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramRelayAuthTicket)
                return object;
            var message = new $root.CMsgSteamDatagramRelayAuthTicket();
            if (object.time_expiry != null)
                message.time_expiry = object.time_expiry >>> 0;
            if (object.authorized_client_identity != null)
                if (typeof object.authorized_client_identity === "string")
                    $util.base64.decode(object.authorized_client_identity, message.authorized_client_identity = $util.newBuffer($util.base64.length(object.authorized_client_identity)), 0);
                else if (object.authorized_client_identity.length)
                    message.authorized_client_identity = object.authorized_client_identity;
            if (object.gameserver_identity != null)
                if (typeof object.gameserver_identity === "string")
                    $util.base64.decode(object.gameserver_identity, message.gameserver_identity = $util.newBuffer($util.base64.length(object.gameserver_identity)), 0);
                else if (object.gameserver_identity.length)
                    message.gameserver_identity = object.gameserver_identity;
            if (object.authorized_public_ip != null)
                message.authorized_public_ip = object.authorized_public_ip >>> 0;
            if (object.gameserver_address != null)
                if (typeof object.gameserver_address === "string")
                    $util.base64.decode(object.gameserver_address, message.gameserver_address = $util.newBuffer($util.base64.length(object.gameserver_address)), 0);
                else if (object.gameserver_address.length)
                    message.gameserver_address = object.gameserver_address;
            if (object.app_id != null)
                message.app_id = object.app_id >>> 0;
            if (object.virtual_port != null)
                message.virtual_port = object.virtual_port >>> 0;
            if (object.extra_fields) {
                if (!Array.isArray(object.extra_fields))
                    throw TypeError(".CMsgSteamDatagramRelayAuthTicket.extra_fields: array expected");
                message.extra_fields = [];
                for (var i = 0; i < object.extra_fields.length; ++i) {
                    if (typeof object.extra_fields[i] !== "object")
                        throw TypeError(".CMsgSteamDatagramRelayAuthTicket.extra_fields: object expected");
                    message.extra_fields[i] = $root.CMsgSteamDatagramRelayAuthTicket.ExtraField.fromObject(object.extra_fields[i]);
                }
            }
            if (object.legacy_authorized_steam_id != null)
                if ($util.Long)
                    (message.legacy_authorized_steam_id = $util.Long.fromValue(object.legacy_authorized_steam_id)).unsigned = false;
                else if (typeof object.legacy_authorized_steam_id === "string")
                    message.legacy_authorized_steam_id = parseInt(object.legacy_authorized_steam_id, 10);
                else if (typeof object.legacy_authorized_steam_id === "number")
                    message.legacy_authorized_steam_id = object.legacy_authorized_steam_id;
                else if (typeof object.legacy_authorized_steam_id === "object")
                    message.legacy_authorized_steam_id = new $util.LongBits(object.legacy_authorized_steam_id.low >>> 0, object.legacy_authorized_steam_id.high >>> 0).toNumber();
            if (object.legacy_gameserver_steam_id != null)
                if ($util.Long)
                    (message.legacy_gameserver_steam_id = $util.Long.fromValue(object.legacy_gameserver_steam_id)).unsigned = false;
                else if (typeof object.legacy_gameserver_steam_id === "string")
                    message.legacy_gameserver_steam_id = parseInt(object.legacy_gameserver_steam_id, 10);
                else if (typeof object.legacy_gameserver_steam_id === "number")
                    message.legacy_gameserver_steam_id = object.legacy_gameserver_steam_id;
                else if (typeof object.legacy_gameserver_steam_id === "object")
                    message.legacy_gameserver_steam_id = new $util.LongBits(object.legacy_gameserver_steam_id.low >>> 0, object.legacy_gameserver_steam_id.high >>> 0).toNumber();
            if (object.legacy_gameserver_net_id != null)
                if ($util.Long)
                    (message.legacy_gameserver_net_id = $util.Long.fromValue(object.legacy_gameserver_net_id)).unsigned = false;
                else if (typeof object.legacy_gameserver_net_id === "string")
                    message.legacy_gameserver_net_id = parseInt(object.legacy_gameserver_net_id, 10);
                else if (typeof object.legacy_gameserver_net_id === "number")
                    message.legacy_gameserver_net_id = object.legacy_gameserver_net_id;
                else if (typeof object.legacy_gameserver_net_id === "object")
                    message.legacy_gameserver_net_id = new $util.LongBits(object.legacy_gameserver_net_id.low >>> 0, object.legacy_gameserver_net_id.high >>> 0).toNumber();
            if (object.legacy_gameserver_pop_id != null)
                message.legacy_gameserver_pop_id = object.legacy_gameserver_pop_id >>> 0;
            if (object.DELETED_signature != null)
                if (typeof object.DELETED_signature === "string")
                    $util.base64.decode(object.DELETED_signature, message.DELETED_signature = $util.newBuffer($util.base64.length(object.DELETED_signature)), 0);
                else if (object.DELETED_signature.length)
                    message.DELETED_signature = object.DELETED_signature;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramRelayAuthTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @static
         * @param {CMsgSteamDatagramRelayAuthTicket} message CMsgSteamDatagramRelayAuthTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramRelayAuthTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.extra_fields = [];
            if (options.defaults) {
                object.time_expiry = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacy_authorized_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacy_authorized_steam_id = options.longs === String ? "0" : 0;
                object.authorized_public_ip = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacy_gameserver_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacy_gameserver_steam_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.legacy_gameserver_net_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.legacy_gameserver_net_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.DELETED_signature = "";
                else {
                    object.DELETED_signature = [];
                    if (options.bytes !== Array)
                        object.DELETED_signature = $util.newBuffer(object.DELETED_signature);
                }
                object.app_id = 0;
                object.legacy_gameserver_pop_id = 0;
                object.virtual_port = 0;
                if (options.bytes === String)
                    object.gameserver_address = "";
                else {
                    object.gameserver_address = [];
                    if (options.bytes !== Array)
                        object.gameserver_address = $util.newBuffer(object.gameserver_address);
                }
                if (options.bytes === String)
                    object.authorized_client_identity = "";
                else {
                    object.authorized_client_identity = [];
                    if (options.bytes !== Array)
                        object.authorized_client_identity = $util.newBuffer(object.authorized_client_identity);
                }
                if (options.bytes === String)
                    object.gameserver_identity = "";
                else {
                    object.gameserver_identity = [];
                    if (options.bytes !== Array)
                        object.gameserver_identity = $util.newBuffer(object.gameserver_identity);
                }
            }
            if (message.time_expiry != null && message.hasOwnProperty("time_expiry"))
                object.time_expiry = message.time_expiry;
            if (message.legacy_authorized_steam_id != null && message.hasOwnProperty("legacy_authorized_steam_id"))
                if (typeof message.legacy_authorized_steam_id === "number")
                    object.legacy_authorized_steam_id = options.longs === String ? String(message.legacy_authorized_steam_id) : message.legacy_authorized_steam_id;
                else
                    object.legacy_authorized_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.legacy_authorized_steam_id) : options.longs === Number ? new $util.LongBits(message.legacy_authorized_steam_id.low >>> 0, message.legacy_authorized_steam_id.high >>> 0).toNumber() : message.legacy_authorized_steam_id;
            if (message.authorized_public_ip != null && message.hasOwnProperty("authorized_public_ip"))
                object.authorized_public_ip = message.authorized_public_ip;
            if (message.legacy_gameserver_steam_id != null && message.hasOwnProperty("legacy_gameserver_steam_id"))
                if (typeof message.legacy_gameserver_steam_id === "number")
                    object.legacy_gameserver_steam_id = options.longs === String ? String(message.legacy_gameserver_steam_id) : message.legacy_gameserver_steam_id;
                else
                    object.legacy_gameserver_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.legacy_gameserver_steam_id) : options.longs === Number ? new $util.LongBits(message.legacy_gameserver_steam_id.low >>> 0, message.legacy_gameserver_steam_id.high >>> 0).toNumber() : message.legacy_gameserver_steam_id;
            if (message.legacy_gameserver_net_id != null && message.hasOwnProperty("legacy_gameserver_net_id"))
                if (typeof message.legacy_gameserver_net_id === "number")
                    object.legacy_gameserver_net_id = options.longs === String ? String(message.legacy_gameserver_net_id) : message.legacy_gameserver_net_id;
                else
                    object.legacy_gameserver_net_id = options.longs === String ? $util.Long.prototype.toString.call(message.legacy_gameserver_net_id) : options.longs === Number ? new $util.LongBits(message.legacy_gameserver_net_id.low >>> 0, message.legacy_gameserver_net_id.high >>> 0).toNumber() : message.legacy_gameserver_net_id;
            if (message.DELETED_signature != null && message.hasOwnProperty("DELETED_signature"))
                object.DELETED_signature = options.bytes === String ? $util.base64.encode(message.DELETED_signature, 0, message.DELETED_signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.DELETED_signature) : message.DELETED_signature;
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                object.app_id = message.app_id;
            if (message.extra_fields && message.extra_fields.length) {
                object.extra_fields = [];
                for (var j = 0; j < message.extra_fields.length; ++j)
                    object.extra_fields[j] = $root.CMsgSteamDatagramRelayAuthTicket.ExtraField.toObject(message.extra_fields[j], options);
            }
            if (message.legacy_gameserver_pop_id != null && message.hasOwnProperty("legacy_gameserver_pop_id"))
                object.legacy_gameserver_pop_id = message.legacy_gameserver_pop_id;
            if (message.virtual_port != null && message.hasOwnProperty("virtual_port"))
                object.virtual_port = message.virtual_port;
            if (message.gameserver_address != null && message.hasOwnProperty("gameserver_address"))
                object.gameserver_address = options.bytes === String ? $util.base64.encode(message.gameserver_address, 0, message.gameserver_address.length) : options.bytes === Array ? Array.prototype.slice.call(message.gameserver_address) : message.gameserver_address;
            if (message.authorized_client_identity != null && message.hasOwnProperty("authorized_client_identity"))
                object.authorized_client_identity = options.bytes === String ? $util.base64.encode(message.authorized_client_identity, 0, message.authorized_client_identity.length) : options.bytes === Array ? Array.prototype.slice.call(message.authorized_client_identity) : message.authorized_client_identity;
            if (message.gameserver_identity != null && message.hasOwnProperty("gameserver_identity"))
                object.gameserver_identity = options.bytes === String ? $util.base64.encode(message.gameserver_identity, 0, message.gameserver_identity.length) : options.bytes === Array ? Array.prototype.slice.call(message.gameserver_identity) : message.gameserver_identity;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramRelayAuthTicket to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CMsgSteamDatagramRelayAuthTicket.ExtraField = (function() {
    
            /**
             * Properties of an ExtraField.
             * @memberof CMsgSteamDatagramRelayAuthTicket
             * @interface IExtraField
             * @property {string|null} [name] ExtraField name
             * @property {string|null} [string_value] ExtraField string_value
             * @property {number|Long|null} [int64_value] ExtraField int64_value
             * @property {number|Long|null} [fixed64_value] ExtraField fixed64_value
             */
    
            /**
             * Constructs a new ExtraField.
             * @memberof CMsgSteamDatagramRelayAuthTicket
             * @classdesc Represents an ExtraField.
             * @implements IExtraField
             * @constructor
             * @param {CMsgSteamDatagramRelayAuthTicket.IExtraField=} [properties] Properties to set
             */
            function ExtraField(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExtraField name.
             * @member {string} name
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.name = "";
    
            /**
             * ExtraField string_value.
             * @member {string} string_value
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.string_value = "";
    
            /**
             * ExtraField int64_value.
             * @member {number|Long} int64_value
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.int64_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ExtraField fixed64_value.
             * @member {number|Long} fixed64_value
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             */
            ExtraField.prototype.fixed64_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new ExtraField instance using the specified properties.
             * @function create
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramRelayAuthTicket.IExtraField=} [properties] Properties to set
             * @returns {CMsgSteamDatagramRelayAuthTicket.ExtraField} ExtraField instance
             */
            ExtraField.create = function create(properties) {
                return new ExtraField(properties);
            };
    
            /**
             * Encodes the specified ExtraField message. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.ExtraField.verify|verify} messages.
             * @function encode
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramRelayAuthTicket.IExtraField} message ExtraField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraField.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.string_value);
                if (message.int64_value != null && message.hasOwnProperty("int64_value"))
                    writer.uint32(/* id 3, wireType 0 =*/24).sint64(message.int64_value);
                if (message.fixed64_value != null && message.hasOwnProperty("fixed64_value"))
                    writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.fixed64_value);
                return writer;
            };
    
            /**
             * Encodes the specified ExtraField message, length delimited. Does not implicitly {@link CMsgSteamDatagramRelayAuthTicket.ExtraField.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramRelayAuthTicket.IExtraField} message ExtraField message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraField.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ExtraField message from the specified reader or buffer.
             * @function decode
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CMsgSteamDatagramRelayAuthTicket.ExtraField} ExtraField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraField.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramRelayAuthTicket.ExtraField();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.string_value = reader.string();
                        break;
                    case 3:
                        message.int64_value = reader.sint64();
                        break;
                    case 5:
                        message.fixed64_value = reader.fixed64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ExtraField message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CMsgSteamDatagramRelayAuthTicket.ExtraField} ExtraField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraField.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ExtraField message.
             * @function verify
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtraField.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    if (!$util.isString(message.string_value))
                        return "string_value: string expected";
                if (message.int64_value != null && message.hasOwnProperty("int64_value"))
                    if (!$util.isInteger(message.int64_value) && !(message.int64_value && $util.isInteger(message.int64_value.low) && $util.isInteger(message.int64_value.high)))
                        return "int64_value: integer|Long expected";
                if (message.fixed64_value != null && message.hasOwnProperty("fixed64_value"))
                    if (!$util.isInteger(message.fixed64_value) && !(message.fixed64_value && $util.isInteger(message.fixed64_value.low) && $util.isInteger(message.fixed64_value.high)))
                        return "fixed64_value: integer|Long expected";
                return null;
            };
    
            /**
             * Creates an ExtraField message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CMsgSteamDatagramRelayAuthTicket.ExtraField} ExtraField
             */
            ExtraField.fromObject = function fromObject(object) {
                if (object instanceof $root.CMsgSteamDatagramRelayAuthTicket.ExtraField)
                    return object;
                var message = new $root.CMsgSteamDatagramRelayAuthTicket.ExtraField();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.string_value != null)
                    message.string_value = String(object.string_value);
                if (object.int64_value != null)
                    if ($util.Long)
                        (message.int64_value = $util.Long.fromValue(object.int64_value)).unsigned = false;
                    else if (typeof object.int64_value === "string")
                        message.int64_value = parseInt(object.int64_value, 10);
                    else if (typeof object.int64_value === "number")
                        message.int64_value = object.int64_value;
                    else if (typeof object.int64_value === "object")
                        message.int64_value = new $util.LongBits(object.int64_value.low >>> 0, object.int64_value.high >>> 0).toNumber();
                if (object.fixed64_value != null)
                    if ($util.Long)
                        (message.fixed64_value = $util.Long.fromValue(object.fixed64_value)).unsigned = false;
                    else if (typeof object.fixed64_value === "string")
                        message.fixed64_value = parseInt(object.fixed64_value, 10);
                    else if (typeof object.fixed64_value === "number")
                        message.fixed64_value = object.fixed64_value;
                    else if (typeof object.fixed64_value === "object")
                        message.fixed64_value = new $util.LongBits(object.fixed64_value.low >>> 0, object.fixed64_value.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from an ExtraField message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @static
             * @param {CMsgSteamDatagramRelayAuthTicket.ExtraField} message ExtraField
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtraField.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.string_value = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.int64_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.int64_value = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.fixed64_value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.fixed64_value = options.longs === String ? "0" : 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.string_value != null && message.hasOwnProperty("string_value"))
                    object.string_value = message.string_value;
                if (message.int64_value != null && message.hasOwnProperty("int64_value"))
                    if (typeof message.int64_value === "number")
                        object.int64_value = options.longs === String ? String(message.int64_value) : message.int64_value;
                    else
                        object.int64_value = options.longs === String ? $util.Long.prototype.toString.call(message.int64_value) : options.longs === Number ? new $util.LongBits(message.int64_value.low >>> 0, message.int64_value.high >>> 0).toNumber() : message.int64_value;
                if (message.fixed64_value != null && message.hasOwnProperty("fixed64_value"))
                    if (typeof message.fixed64_value === "number")
                        object.fixed64_value = options.longs === String ? String(message.fixed64_value) : message.fixed64_value;
                    else
                        object.fixed64_value = options.longs === String ? $util.Long.prototype.toString.call(message.fixed64_value) : options.longs === Number ? new $util.LongBits(message.fixed64_value.low >>> 0, message.fixed64_value.high >>> 0).toNumber() : message.fixed64_value;
                return object;
            };
    
            /**
             * Converts this ExtraField to JSON.
             * @function toJSON
             * @memberof CMsgSteamDatagramRelayAuthTicket.ExtraField
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtraField.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ExtraField;
        })();
    
        return CMsgSteamDatagramRelayAuthTicket;
    })();
    
    $root.CMsgSteamDatagramSignedRelayAuthTicket = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramSignedRelayAuthTicket.
         * @exports ICMsgSteamDatagramSignedRelayAuthTicket
         * @interface ICMsgSteamDatagramSignedRelayAuthTicket
         * @property {number|Long|null} [reserved_do_not_use] CMsgSteamDatagramSignedRelayAuthTicket reserved_do_not_use
         * @property {number|Long|null} [key_id] CMsgSteamDatagramSignedRelayAuthTicket key_id
         * @property {Uint8Array|null} [ticket] CMsgSteamDatagramSignedRelayAuthTicket ticket
         * @property {Uint8Array|null} [signature] CMsgSteamDatagramSignedRelayAuthTicket signature
         */
    
        /**
         * Constructs a new CMsgSteamDatagramSignedRelayAuthTicket.
         * @exports CMsgSteamDatagramSignedRelayAuthTicket
         * @classdesc Represents a CMsgSteamDatagramSignedRelayAuthTicket.
         * @implements ICMsgSteamDatagramSignedRelayAuthTicket
         * @constructor
         * @param {ICMsgSteamDatagramSignedRelayAuthTicket=} [properties] Properties to set
         */
        function CMsgSteamDatagramSignedRelayAuthTicket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket reserved_do_not_use.
         * @member {number|Long} reserved_do_not_use
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.reserved_do_not_use = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket key_id.
         * @member {number|Long} key_id
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.key_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket ticket.
         * @member {Uint8Array} ticket
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.ticket = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSignedRelayAuthTicket signature.
         * @member {Uint8Array} signature
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.signature = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramSignedRelayAuthTicket instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramSignedRelayAuthTicket=} [properties] Properties to set
         * @returns {CMsgSteamDatagramSignedRelayAuthTicket} CMsgSteamDatagramSignedRelayAuthTicket instance
         */
        CMsgSteamDatagramSignedRelayAuthTicket.create = function create(properties) {
            return new CMsgSteamDatagramSignedRelayAuthTicket(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSignedRelayAuthTicket message. Does not implicitly {@link CMsgSteamDatagramSignedRelayAuthTicket.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramSignedRelayAuthTicket} message CMsgSteamDatagramSignedRelayAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSignedRelayAuthTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reserved_do_not_use != null && message.hasOwnProperty("reserved_do_not_use"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.reserved_do_not_use);
            if (message.key_id != null && message.hasOwnProperty("key_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.key_id);
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ticket);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSignedRelayAuthTicket message, length delimited. Does not implicitly {@link CMsgSteamDatagramSignedRelayAuthTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {ICMsgSteamDatagramSignedRelayAuthTicket} message CMsgSteamDatagramSignedRelayAuthTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSignedRelayAuthTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramSignedRelayAuthTicket message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramSignedRelayAuthTicket} CMsgSteamDatagramSignedRelayAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSignedRelayAuthTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramSignedRelayAuthTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reserved_do_not_use = reader.fixed64();
                    break;
                case 2:
                    message.key_id = reader.fixed64();
                    break;
                case 3:
                    message.ticket = reader.bytes();
                    break;
                case 4:
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
         * Decodes a CMsgSteamDatagramSignedRelayAuthTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramSignedRelayAuthTicket} CMsgSteamDatagramSignedRelayAuthTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSignedRelayAuthTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramSignedRelayAuthTicket message.
         * @function verify
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramSignedRelayAuthTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reserved_do_not_use != null && message.hasOwnProperty("reserved_do_not_use"))
                if (!$util.isInteger(message.reserved_do_not_use) && !(message.reserved_do_not_use && $util.isInteger(message.reserved_do_not_use.low) && $util.isInteger(message.reserved_do_not_use.high)))
                    return "reserved_do_not_use: integer|Long expected";
            if (message.key_id != null && message.hasOwnProperty("key_id"))
                if (!$util.isInteger(message.key_id) && !(message.key_id && $util.isInteger(message.key_id.low) && $util.isInteger(message.key_id.high)))
                    return "key_id: integer|Long expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!(message.ticket && typeof message.ticket.length === "number" || $util.isString(message.ticket)))
                    return "ticket: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramSignedRelayAuthTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramSignedRelayAuthTicket} CMsgSteamDatagramSignedRelayAuthTicket
         */
        CMsgSteamDatagramSignedRelayAuthTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramSignedRelayAuthTicket)
                return object;
            var message = new $root.CMsgSteamDatagramSignedRelayAuthTicket();
            if (object.reserved_do_not_use != null)
                if ($util.Long)
                    (message.reserved_do_not_use = $util.Long.fromValue(object.reserved_do_not_use)).unsigned = false;
                else if (typeof object.reserved_do_not_use === "string")
                    message.reserved_do_not_use = parseInt(object.reserved_do_not_use, 10);
                else if (typeof object.reserved_do_not_use === "number")
                    message.reserved_do_not_use = object.reserved_do_not_use;
                else if (typeof object.reserved_do_not_use === "object")
                    message.reserved_do_not_use = new $util.LongBits(object.reserved_do_not_use.low >>> 0, object.reserved_do_not_use.high >>> 0).toNumber();
            if (object.key_id != null)
                if ($util.Long)
                    (message.key_id = $util.Long.fromValue(object.key_id)).unsigned = false;
                else if (typeof object.key_id === "string")
                    message.key_id = parseInt(object.key_id, 10);
                else if (typeof object.key_id === "number")
                    message.key_id = object.key_id;
                else if (typeof object.key_id === "object")
                    message.key_id = new $util.LongBits(object.key_id.low >>> 0, object.key_id.high >>> 0).toNumber();
            if (object.ticket != null)
                if (typeof object.ticket === "string")
                    $util.base64.decode(object.ticket, message.ticket = $util.newBuffer($util.base64.length(object.ticket)), 0);
                else if (object.ticket.length)
                    message.ticket = object.ticket;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramSignedRelayAuthTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @static
         * @param {CMsgSteamDatagramSignedRelayAuthTicket} message CMsgSteamDatagramSignedRelayAuthTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramSignedRelayAuthTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reserved_do_not_use = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reserved_do_not_use = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.key_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.key_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.ticket = "";
                else {
                    object.ticket = [];
                    if (options.bytes !== Array)
                        object.ticket = $util.newBuffer(object.ticket);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.reserved_do_not_use != null && message.hasOwnProperty("reserved_do_not_use"))
                if (typeof message.reserved_do_not_use === "number")
                    object.reserved_do_not_use = options.longs === String ? String(message.reserved_do_not_use) : message.reserved_do_not_use;
                else
                    object.reserved_do_not_use = options.longs === String ? $util.Long.prototype.toString.call(message.reserved_do_not_use) : options.longs === Number ? new $util.LongBits(message.reserved_do_not_use.low >>> 0, message.reserved_do_not_use.high >>> 0).toNumber() : message.reserved_do_not_use;
            if (message.key_id != null && message.hasOwnProperty("key_id"))
                if (typeof message.key_id === "number")
                    object.key_id = options.longs === String ? String(message.key_id) : message.key_id;
                else
                    object.key_id = options.longs === String ? $util.Long.prototype.toString.call(message.key_id) : options.longs === Number ? new $util.LongBits(message.key_id.low >>> 0, message.key_id.high >>> 0).toNumber() : message.key_id;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = options.bytes === String ? $util.base64.encode(message.ticket, 0, message.ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.ticket) : message.ticket;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramSignedRelayAuthTicket to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramSignedRelayAuthTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramSignedRelayAuthTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramSignedRelayAuthTicket;
    })();
    
    $root.CMsgSteamDatagramCachedCredentialsForApp = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramCachedCredentialsForApp.
         * @exports ICMsgSteamDatagramCachedCredentialsForApp
         * @interface ICMsgSteamDatagramCachedCredentialsForApp
         * @property {Uint8Array|null} [private_key] CMsgSteamDatagramCachedCredentialsForApp private_key
         * @property {Uint8Array|null} [cert] CMsgSteamDatagramCachedCredentialsForApp cert
         * @property {Array.<Uint8Array>|null} [relay_tickets] CMsgSteamDatagramCachedCredentialsForApp relay_tickets
         */
    
        /**
         * Constructs a new CMsgSteamDatagramCachedCredentialsForApp.
         * @exports CMsgSteamDatagramCachedCredentialsForApp
         * @classdesc Represents a CMsgSteamDatagramCachedCredentialsForApp.
         * @implements ICMsgSteamDatagramCachedCredentialsForApp
         * @constructor
         * @param {ICMsgSteamDatagramCachedCredentialsForApp=} [properties] Properties to set
         */
        function CMsgSteamDatagramCachedCredentialsForApp(properties) {
            this.relay_tickets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramCachedCredentialsForApp private_key.
         * @member {Uint8Array} private_key
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @instance
         */
        CMsgSteamDatagramCachedCredentialsForApp.prototype.private_key = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCachedCredentialsForApp cert.
         * @member {Uint8Array} cert
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @instance
         */
        CMsgSteamDatagramCachedCredentialsForApp.prototype.cert = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramCachedCredentialsForApp relay_tickets.
         * @member {Array.<Uint8Array>} relay_tickets
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @instance
         */
        CMsgSteamDatagramCachedCredentialsForApp.prototype.relay_tickets = $util.emptyArray;
    
        /**
         * Creates a new CMsgSteamDatagramCachedCredentialsForApp instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {ICMsgSteamDatagramCachedCredentialsForApp=} [properties] Properties to set
         * @returns {CMsgSteamDatagramCachedCredentialsForApp} CMsgSteamDatagramCachedCredentialsForApp instance
         */
        CMsgSteamDatagramCachedCredentialsForApp.create = function create(properties) {
            return new CMsgSteamDatagramCachedCredentialsForApp(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCachedCredentialsForApp message. Does not implicitly {@link CMsgSteamDatagramCachedCredentialsForApp.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {ICMsgSteamDatagramCachedCredentialsForApp} message CMsgSteamDatagramCachedCredentialsForApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCachedCredentialsForApp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.private_key != null && message.hasOwnProperty("private_key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.private_key);
            if (message.cert != null && message.hasOwnProperty("cert"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cert);
            if (message.relay_tickets != null && message.relay_tickets.length)
                for (var i = 0; i < message.relay_tickets.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.relay_tickets[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramCachedCredentialsForApp message, length delimited. Does not implicitly {@link CMsgSteamDatagramCachedCredentialsForApp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {ICMsgSteamDatagramCachedCredentialsForApp} message CMsgSteamDatagramCachedCredentialsForApp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramCachedCredentialsForApp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramCachedCredentialsForApp message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramCachedCredentialsForApp} CMsgSteamDatagramCachedCredentialsForApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCachedCredentialsForApp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramCachedCredentialsForApp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.private_key = reader.bytes();
                    break;
                case 2:
                    message.cert = reader.bytes();
                    break;
                case 3:
                    if (!(message.relay_tickets && message.relay_tickets.length))
                        message.relay_tickets = [];
                    message.relay_tickets.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramCachedCredentialsForApp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramCachedCredentialsForApp} CMsgSteamDatagramCachedCredentialsForApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramCachedCredentialsForApp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramCachedCredentialsForApp message.
         * @function verify
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramCachedCredentialsForApp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.private_key != null && message.hasOwnProperty("private_key"))
                if (!(message.private_key && typeof message.private_key.length === "number" || $util.isString(message.private_key)))
                    return "private_key: buffer expected";
            if (message.cert != null && message.hasOwnProperty("cert"))
                if (!(message.cert && typeof message.cert.length === "number" || $util.isString(message.cert)))
                    return "cert: buffer expected";
            if (message.relay_tickets != null && message.hasOwnProperty("relay_tickets")) {
                if (!Array.isArray(message.relay_tickets))
                    return "relay_tickets: array expected";
                for (var i = 0; i < message.relay_tickets.length; ++i)
                    if (!(message.relay_tickets[i] && typeof message.relay_tickets[i].length === "number" || $util.isString(message.relay_tickets[i])))
                        return "relay_tickets: buffer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramCachedCredentialsForApp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramCachedCredentialsForApp} CMsgSteamDatagramCachedCredentialsForApp
         */
        CMsgSteamDatagramCachedCredentialsForApp.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramCachedCredentialsForApp)
                return object;
            var message = new $root.CMsgSteamDatagramCachedCredentialsForApp();
            if (object.private_key != null)
                if (typeof object.private_key === "string")
                    $util.base64.decode(object.private_key, message.private_key = $util.newBuffer($util.base64.length(object.private_key)), 0);
                else if (object.private_key.length)
                    message.private_key = object.private_key;
            if (object.cert != null)
                if (typeof object.cert === "string")
                    $util.base64.decode(object.cert, message.cert = $util.newBuffer($util.base64.length(object.cert)), 0);
                else if (object.cert.length)
                    message.cert = object.cert;
            if (object.relay_tickets) {
                if (!Array.isArray(object.relay_tickets))
                    throw TypeError(".CMsgSteamDatagramCachedCredentialsForApp.relay_tickets: array expected");
                message.relay_tickets = [];
                for (var i = 0; i < object.relay_tickets.length; ++i)
                    if (typeof object.relay_tickets[i] === "string")
                        $util.base64.decode(object.relay_tickets[i], message.relay_tickets[i] = $util.newBuffer($util.base64.length(object.relay_tickets[i])), 0);
                    else if (object.relay_tickets[i].length)
                        message.relay_tickets[i] = object.relay_tickets[i];
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramCachedCredentialsForApp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @static
         * @param {CMsgSteamDatagramCachedCredentialsForApp} message CMsgSteamDatagramCachedCredentialsForApp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramCachedCredentialsForApp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.relay_tickets = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.private_key = "";
                else {
                    object.private_key = [];
                    if (options.bytes !== Array)
                        object.private_key = $util.newBuffer(object.private_key);
                }
                if (options.bytes === String)
                    object.cert = "";
                else {
                    object.cert = [];
                    if (options.bytes !== Array)
                        object.cert = $util.newBuffer(object.cert);
                }
            }
            if (message.private_key != null && message.hasOwnProperty("private_key"))
                object.private_key = options.bytes === String ? $util.base64.encode(message.private_key, 0, message.private_key.length) : options.bytes === Array ? Array.prototype.slice.call(message.private_key) : message.private_key;
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = options.bytes === String ? $util.base64.encode(message.cert, 0, message.cert.length) : options.bytes === Array ? Array.prototype.slice.call(message.cert) : message.cert;
            if (message.relay_tickets && message.relay_tickets.length) {
                object.relay_tickets = [];
                for (var j = 0; j < message.relay_tickets.length; ++j)
                    object.relay_tickets[j] = options.bytes === String ? $util.base64.encode(message.relay_tickets[j], 0, message.relay_tickets[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.relay_tickets[j]) : message.relay_tickets[j];
            }
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramCachedCredentialsForApp to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramCachedCredentialsForApp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramCachedCredentialsForApp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramCachedCredentialsForApp;
    })();

    return $root;
});
