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
         * @property {string|null} [authorized_client_identity_string] CMsgSteamDatagramRelayAuthTicket authorized_client_identity_string
         * @property {string|null} [gameserver_identity_string] CMsgSteamDatagramRelayAuthTicket gameserver_identity_string
         * @property {number|null} [authorized_public_ip] CMsgSteamDatagramRelayAuthTicket authorized_public_ip
         * @property {Uint8Array|null} [gameserver_address] CMsgSteamDatagramRelayAuthTicket gameserver_address
         * @property {number|null} [app_id] CMsgSteamDatagramRelayAuthTicket app_id
         * @property {number|null} [virtual_port] CMsgSteamDatagramRelayAuthTicket virtual_port
         * @property {Array.<CMsgSteamDatagramRelayAuthTicket.IExtraField>|null} [extra_fields] CMsgSteamDatagramRelayAuthTicket extra_fields
         * @property {number|Long|null} [legacy_authorized_steam_id] CMsgSteamDatagramRelayAuthTicket legacy_authorized_steam_id
         * @property {number|Long|null} [legacy_gameserver_steam_id] CMsgSteamDatagramRelayAuthTicket legacy_gameserver_steam_id
         * @property {number|Long|null} [legacy_gameserver_net_id] CMsgSteamDatagramRelayAuthTicket legacy_gameserver_net_id
         * @property {number|null} [legacy_gameserver_pop_id] CMsgSteamDatagramRelayAuthTicket legacy_gameserver_pop_id
         * @property {Uint8Array|null} [legacy_authorized_client_identity_binary] CMsgSteamDatagramRelayAuthTicket legacy_authorized_client_identity_binary
         * @property {Uint8Array|null} [legacy_gameserver_identity_binary] CMsgSteamDatagramRelayAuthTicket legacy_gameserver_identity_binary
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
         * CMsgSteamDatagramRelayAuthTicket authorized_client_identity_string.
         * @member {string} authorized_client_identity_string
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.authorized_client_identity_string = "";
    
        /**
         * CMsgSteamDatagramRelayAuthTicket gameserver_identity_string.
         * @member {string} gameserver_identity_string
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.gameserver_identity_string = "";
    
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
         * CMsgSteamDatagramRelayAuthTicket legacy_authorized_client_identity_binary.
         * @member {Uint8Array} legacy_authorized_client_identity_binary
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacy_authorized_client_identity_binary = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramRelayAuthTicket legacy_gameserver_identity_binary.
         * @member {Uint8Array} legacy_gameserver_identity_binary
         * @memberof CMsgSteamDatagramRelayAuthTicket
         * @instance
         */
        CMsgSteamDatagramRelayAuthTicket.prototype.legacy_gameserver_identity_binary = $util.newBuffer([]);
    
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
            if (message.legacy_authorized_client_identity_binary != null && message.hasOwnProperty("legacy_authorized_client_identity_binary"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.legacy_authorized_client_identity_binary);
            if (message.legacy_gameserver_identity_binary != null && message.hasOwnProperty("legacy_gameserver_identity_binary"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.legacy_gameserver_identity_binary);
            if (message.authorized_client_identity_string != null && message.hasOwnProperty("authorized_client_identity_string"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.authorized_client_identity_string);
            if (message.gameserver_identity_string != null && message.hasOwnProperty("gameserver_identity_string"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.gameserver_identity_string);
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
                case 14:
                    message.authorized_client_identity_string = reader.string();
                    break;
                case 15:
                    message.gameserver_identity_string = reader.string();
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
                case 12:
                    message.legacy_authorized_client_identity_binary = reader.bytes();
                    break;
                case 13:
                    message.legacy_gameserver_identity_binary = reader.bytes();
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
            if (message.authorized_client_identity_string != null && message.hasOwnProperty("authorized_client_identity_string"))
                if (!$util.isString(message.authorized_client_identity_string))
                    return "authorized_client_identity_string: string expected";
            if (message.gameserver_identity_string != null && message.hasOwnProperty("gameserver_identity_string"))
                if (!$util.isString(message.gameserver_identity_string))
                    return "gameserver_identity_string: string expected";
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
            if (message.legacy_authorized_client_identity_binary != null && message.hasOwnProperty("legacy_authorized_client_identity_binary"))
                if (!(message.legacy_authorized_client_identity_binary && typeof message.legacy_authorized_client_identity_binary.length === "number" || $util.isString(message.legacy_authorized_client_identity_binary)))
                    return "legacy_authorized_client_identity_binary: buffer expected";
            if (message.legacy_gameserver_identity_binary != null && message.hasOwnProperty("legacy_gameserver_identity_binary"))
                if (!(message.legacy_gameserver_identity_binary && typeof message.legacy_gameserver_identity_binary.length === "number" || $util.isString(message.legacy_gameserver_identity_binary)))
                    return "legacy_gameserver_identity_binary: buffer expected";
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
            if (object.authorized_client_identity_string != null)
                message.authorized_client_identity_string = String(object.authorized_client_identity_string);
            if (object.gameserver_identity_string != null)
                message.gameserver_identity_string = String(object.gameserver_identity_string);
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
            if (object.legacy_authorized_client_identity_binary != null)
                if (typeof object.legacy_authorized_client_identity_binary === "string")
                    $util.base64.decode(object.legacy_authorized_client_identity_binary, message.legacy_authorized_client_identity_binary = $util.newBuffer($util.base64.length(object.legacy_authorized_client_identity_binary)), 0);
                else if (object.legacy_authorized_client_identity_binary.length)
                    message.legacy_authorized_client_identity_binary = object.legacy_authorized_client_identity_binary;
            if (object.legacy_gameserver_identity_binary != null)
                if (typeof object.legacy_gameserver_identity_binary === "string")
                    $util.base64.decode(object.legacy_gameserver_identity_binary, message.legacy_gameserver_identity_binary = $util.newBuffer($util.base64.length(object.legacy_gameserver_identity_binary)), 0);
                else if (object.legacy_gameserver_identity_binary.length)
                    message.legacy_gameserver_identity_binary = object.legacy_gameserver_identity_binary;
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
                    object.legacy_authorized_client_identity_binary = "";
                else {
                    object.legacy_authorized_client_identity_binary = [];
                    if (options.bytes !== Array)
                        object.legacy_authorized_client_identity_binary = $util.newBuffer(object.legacy_authorized_client_identity_binary);
                }
                if (options.bytes === String)
                    object.legacy_gameserver_identity_binary = "";
                else {
                    object.legacy_gameserver_identity_binary = [];
                    if (options.bytes !== Array)
                        object.legacy_gameserver_identity_binary = $util.newBuffer(object.legacy_gameserver_identity_binary);
                }
                object.authorized_client_identity_string = "";
                object.gameserver_identity_string = "";
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
            if (message.legacy_authorized_client_identity_binary != null && message.hasOwnProperty("legacy_authorized_client_identity_binary"))
                object.legacy_authorized_client_identity_binary = options.bytes === String ? $util.base64.encode(message.legacy_authorized_client_identity_binary, 0, message.legacy_authorized_client_identity_binary.length) : options.bytes === Array ? Array.prototype.slice.call(message.legacy_authorized_client_identity_binary) : message.legacy_authorized_client_identity_binary;
            if (message.legacy_gameserver_identity_binary != null && message.hasOwnProperty("legacy_gameserver_identity_binary"))
                object.legacy_gameserver_identity_binary = options.bytes === String ? $util.base64.encode(message.legacy_gameserver_identity_binary, 0, message.legacy_gameserver_identity_binary.length) : options.bytes === Array ? Array.prototype.slice.call(message.legacy_gameserver_identity_binary) : message.legacy_gameserver_identity_binary;
            if (message.authorized_client_identity_string != null && message.hasOwnProperty("authorized_client_identity_string"))
                object.authorized_client_identity_string = message.authorized_client_identity_string;
            if (message.gameserver_identity_string != null && message.hasOwnProperty("gameserver_identity_string"))
                object.gameserver_identity_string = message.gameserver_identity_string;
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
    
    $root.CMsgSteamDatagramGameCoordinatorServerLogin = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramGameCoordinatorServerLogin.
         * @exports ICMsgSteamDatagramGameCoordinatorServerLogin
         * @interface ICMsgSteamDatagramGameCoordinatorServerLogin
         * @property {number|null} [time_generated] CMsgSteamDatagramGameCoordinatorServerLogin time_generated
         * @property {number|null} [appid] CMsgSteamDatagramGameCoordinatorServerLogin appid
         * @property {Uint8Array|null} [routing] CMsgSteamDatagramGameCoordinatorServerLogin routing
         * @property {Uint8Array|null} [appdata] CMsgSteamDatagramGameCoordinatorServerLogin appdata
         * @property {Uint8Array|null} [legacy_identity_binary] CMsgSteamDatagramGameCoordinatorServerLogin legacy_identity_binary
         * @property {string|null} [identity_string] CMsgSteamDatagramGameCoordinatorServerLogin identity_string
         * @property {number|Long|null} [dummy_steam_id] CMsgSteamDatagramGameCoordinatorServerLogin dummy_steam_id
         */
    
        /**
         * Constructs a new CMsgSteamDatagramGameCoordinatorServerLogin.
         * @exports CMsgSteamDatagramGameCoordinatorServerLogin
         * @classdesc Represents a CMsgSteamDatagramGameCoordinatorServerLogin.
         * @implements ICMsgSteamDatagramGameCoordinatorServerLogin
         * @constructor
         * @param {ICMsgSteamDatagramGameCoordinatorServerLogin=} [properties] Properties to set
         */
        function CMsgSteamDatagramGameCoordinatorServerLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin time_generated.
         * @member {number} time_generated
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.time_generated = 0;
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin appid.
         * @member {number} appid
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.appid = 0;
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin routing.
         * @member {Uint8Array} routing
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.routing = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin appdata.
         * @member {Uint8Array} appdata
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.appdata = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin legacy_identity_binary.
         * @member {Uint8Array} legacy_identity_binary
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.legacy_identity_binary = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin identity_string.
         * @member {string} identity_string
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.identity_string = "";
    
        /**
         * CMsgSteamDatagramGameCoordinatorServerLogin dummy_steam_id.
         * @member {number|Long} dummy_steam_id
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.dummy_steam_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgSteamDatagramGameCoordinatorServerLogin instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramGameCoordinatorServerLogin=} [properties] Properties to set
         * @returns {CMsgSteamDatagramGameCoordinatorServerLogin} CMsgSteamDatagramGameCoordinatorServerLogin instance
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.create = function create(properties) {
            return new CMsgSteamDatagramGameCoordinatorServerLogin(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameCoordinatorServerLogin message. Does not implicitly {@link CMsgSteamDatagramGameCoordinatorServerLogin.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramGameCoordinatorServerLogin} message CMsgSteamDatagramGameCoordinatorServerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time_generated != null && message.hasOwnProperty("time_generated"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.time_generated);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.routing != null && message.hasOwnProperty("routing"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.routing);
            if (message.appdata != null && message.hasOwnProperty("appdata"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.appdata);
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.legacy_identity_binary);
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.identity_string);
            if (message.dummy_steam_id != null && message.hasOwnProperty("dummy_steam_id"))
                writer.uint32(/* id 99, wireType 1 =*/793).fixed64(message.dummy_steam_id);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramGameCoordinatorServerLogin message, length delimited. Does not implicitly {@link CMsgSteamDatagramGameCoordinatorServerLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramGameCoordinatorServerLogin} message CMsgSteamDatagramGameCoordinatorServerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameCoordinatorServerLogin message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramGameCoordinatorServerLogin} CMsgSteamDatagramGameCoordinatorServerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramGameCoordinatorServerLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time_generated = reader.uint32();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.routing = reader.bytes();
                    break;
                case 4:
                    message.appdata = reader.bytes();
                    break;
                case 5:
                    message.legacy_identity_binary = reader.bytes();
                    break;
                case 6:
                    message.identity_string = reader.string();
                    break;
                case 99:
                    message.dummy_steam_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramGameCoordinatorServerLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramGameCoordinatorServerLogin} CMsgSteamDatagramGameCoordinatorServerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramGameCoordinatorServerLogin message.
         * @function verify
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time_generated != null && message.hasOwnProperty("time_generated"))
                if (!$util.isInteger(message.time_generated))
                    return "time_generated: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.routing != null && message.hasOwnProperty("routing"))
                if (!(message.routing && typeof message.routing.length === "number" || $util.isString(message.routing)))
                    return "routing: buffer expected";
            if (message.appdata != null && message.hasOwnProperty("appdata"))
                if (!(message.appdata && typeof message.appdata.length === "number" || $util.isString(message.appdata)))
                    return "appdata: buffer expected";
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                if (!(message.legacy_identity_binary && typeof message.legacy_identity_binary.length === "number" || $util.isString(message.legacy_identity_binary)))
                    return "legacy_identity_binary: buffer expected";
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                if (!$util.isString(message.identity_string))
                    return "identity_string: string expected";
            if (message.dummy_steam_id != null && message.hasOwnProperty("dummy_steam_id"))
                if (!$util.isInteger(message.dummy_steam_id) && !(message.dummy_steam_id && $util.isInteger(message.dummy_steam_id.low) && $util.isInteger(message.dummy_steam_id.high)))
                    return "dummy_steam_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramGameCoordinatorServerLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramGameCoordinatorServerLogin} CMsgSteamDatagramGameCoordinatorServerLogin
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramGameCoordinatorServerLogin)
                return object;
            var message = new $root.CMsgSteamDatagramGameCoordinatorServerLogin();
            if (object.time_generated != null)
                message.time_generated = object.time_generated >>> 0;
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.routing != null)
                if (typeof object.routing === "string")
                    $util.base64.decode(object.routing, message.routing = $util.newBuffer($util.base64.length(object.routing)), 0);
                else if (object.routing.length)
                    message.routing = object.routing;
            if (object.appdata != null)
                if (typeof object.appdata === "string")
                    $util.base64.decode(object.appdata, message.appdata = $util.newBuffer($util.base64.length(object.appdata)), 0);
                else if (object.appdata.length)
                    message.appdata = object.appdata;
            if (object.legacy_identity_binary != null)
                if (typeof object.legacy_identity_binary === "string")
                    $util.base64.decode(object.legacy_identity_binary, message.legacy_identity_binary = $util.newBuffer($util.base64.length(object.legacy_identity_binary)), 0);
                else if (object.legacy_identity_binary.length)
                    message.legacy_identity_binary = object.legacy_identity_binary;
            if (object.identity_string != null)
                message.identity_string = String(object.identity_string);
            if (object.dummy_steam_id != null)
                if ($util.Long)
                    (message.dummy_steam_id = $util.Long.fromValue(object.dummy_steam_id)).unsigned = false;
                else if (typeof object.dummy_steam_id === "string")
                    message.dummy_steam_id = parseInt(object.dummy_steam_id, 10);
                else if (typeof object.dummy_steam_id === "number")
                    message.dummy_steam_id = object.dummy_steam_id;
                else if (typeof object.dummy_steam_id === "object")
                    message.dummy_steam_id = new $util.LongBits(object.dummy_steam_id.low >>> 0, object.dummy_steam_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramGameCoordinatorServerLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @static
         * @param {CMsgSteamDatagramGameCoordinatorServerLogin} message CMsgSteamDatagramGameCoordinatorServerLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.time_generated = 0;
                object.appid = 0;
                if (options.bytes === String)
                    object.routing = "";
                else {
                    object.routing = [];
                    if (options.bytes !== Array)
                        object.routing = $util.newBuffer(object.routing);
                }
                if (options.bytes === String)
                    object.appdata = "";
                else {
                    object.appdata = [];
                    if (options.bytes !== Array)
                        object.appdata = $util.newBuffer(object.appdata);
                }
                if (options.bytes === String)
                    object.legacy_identity_binary = "";
                else {
                    object.legacy_identity_binary = [];
                    if (options.bytes !== Array)
                        object.legacy_identity_binary = $util.newBuffer(object.legacy_identity_binary);
                }
                object.identity_string = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dummy_steam_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dummy_steam_id = options.longs === String ? "0" : 0;
            }
            if (message.time_generated != null && message.hasOwnProperty("time_generated"))
                object.time_generated = message.time_generated;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.routing != null && message.hasOwnProperty("routing"))
                object.routing = options.bytes === String ? $util.base64.encode(message.routing, 0, message.routing.length) : options.bytes === Array ? Array.prototype.slice.call(message.routing) : message.routing;
            if (message.appdata != null && message.hasOwnProperty("appdata"))
                object.appdata = options.bytes === String ? $util.base64.encode(message.appdata, 0, message.appdata.length) : options.bytes === Array ? Array.prototype.slice.call(message.appdata) : message.appdata;
            if (message.legacy_identity_binary != null && message.hasOwnProperty("legacy_identity_binary"))
                object.legacy_identity_binary = options.bytes === String ? $util.base64.encode(message.legacy_identity_binary, 0, message.legacy_identity_binary.length) : options.bytes === Array ? Array.prototype.slice.call(message.legacy_identity_binary) : message.legacy_identity_binary;
            if (message.identity_string != null && message.hasOwnProperty("identity_string"))
                object.identity_string = message.identity_string;
            if (message.dummy_steam_id != null && message.hasOwnProperty("dummy_steam_id"))
                if (typeof message.dummy_steam_id === "number")
                    object.dummy_steam_id = options.longs === String ? String(message.dummy_steam_id) : message.dummy_steam_id;
                else
                    object.dummy_steam_id = options.longs === String ? $util.Long.prototype.toString.call(message.dummy_steam_id) : options.longs === Number ? new $util.LongBits(message.dummy_steam_id.low >>> 0, message.dummy_steam_id.high >>> 0).toNumber() : message.dummy_steam_id;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramGameCoordinatorServerLogin to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramGameCoordinatorServerLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramGameCoordinatorServerLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramGameCoordinatorServerLogin;
    })();
    
    $root.CMsgSteamDatagramSignedGameCoordinatorServerLogin = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramSignedGameCoordinatorServerLogin.
         * @exports ICMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @interface ICMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @property {ICMsgSteamDatagramCertificateSigned|null} [cert] CMsgSteamDatagramSignedGameCoordinatorServerLogin cert
         * @property {Uint8Array|null} [login] CMsgSteamDatagramSignedGameCoordinatorServerLogin login
         * @property {Uint8Array|null} [signature] CMsgSteamDatagramSignedGameCoordinatorServerLogin signature
         */
    
        /**
         * Constructs a new CMsgSteamDatagramSignedGameCoordinatorServerLogin.
         * @exports CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @classdesc Represents a CMsgSteamDatagramSignedGameCoordinatorServerLogin.
         * @implements ICMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @constructor
         * @param {ICMsgSteamDatagramSignedGameCoordinatorServerLogin=} [properties] Properties to set
         */
        function CMsgSteamDatagramSignedGameCoordinatorServerLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramSignedGameCoordinatorServerLogin cert.
         * @member {ICMsgSteamDatagramCertificateSigned|null|undefined} cert
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.prototype.cert = null;
    
        /**
         * CMsgSteamDatagramSignedGameCoordinatorServerLogin login.
         * @member {Uint8Array} login
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.prototype.login = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramSignedGameCoordinatorServerLogin signature.
         * @member {Uint8Array} signature
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @instance
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.prototype.signature = $util.newBuffer([]);
    
        /**
         * Creates a new CMsgSteamDatagramSignedGameCoordinatorServerLogin instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramSignedGameCoordinatorServerLogin=} [properties] Properties to set
         * @returns {CMsgSteamDatagramSignedGameCoordinatorServerLogin} CMsgSteamDatagramSignedGameCoordinatorServerLogin instance
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.create = function create(properties) {
            return new CMsgSteamDatagramSignedGameCoordinatorServerLogin(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSignedGameCoordinatorServerLogin message. Does not implicitly {@link CMsgSteamDatagramSignedGameCoordinatorServerLogin.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramSignedGameCoordinatorServerLogin} message CMsgSteamDatagramSignedGameCoordinatorServerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cert != null && message.hasOwnProperty("cert"))
                $root.CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.login != null && message.hasOwnProperty("login"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.login);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramSignedGameCoordinatorServerLogin message, length delimited. Does not implicitly {@link CMsgSteamDatagramSignedGameCoordinatorServerLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {ICMsgSteamDatagramSignedGameCoordinatorServerLogin} message CMsgSteamDatagramSignedGameCoordinatorServerLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramSignedGameCoordinatorServerLogin} CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramSignedGameCoordinatorServerLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cert = $root.CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.login = reader.bytes();
                    break;
                case 3:
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
         * Decodes a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramSignedGameCoordinatorServerLogin} CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramSignedGameCoordinatorServerLogin message.
         * @function verify
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cert != null && message.hasOwnProperty("cert")) {
                var error = $root.CMsgSteamDatagramCertificateSigned.verify(message.cert);
                if (error)
                    return "cert." + error;
            }
            if (message.login != null && message.hasOwnProperty("login"))
                if (!(message.login && typeof message.login.length === "number" || $util.isString(message.login)))
                    return "login: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramSignedGameCoordinatorServerLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramSignedGameCoordinatorServerLogin} CMsgSteamDatagramSignedGameCoordinatorServerLogin
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramSignedGameCoordinatorServerLogin)
                return object;
            var message = new $root.CMsgSteamDatagramSignedGameCoordinatorServerLogin();
            if (object.cert != null) {
                if (typeof object.cert !== "object")
                    throw TypeError(".CMsgSteamDatagramSignedGameCoordinatorServerLogin.cert: object expected");
                message.cert = $root.CMsgSteamDatagramCertificateSigned.fromObject(object.cert);
            }
            if (object.login != null)
                if (typeof object.login === "string")
                    $util.base64.decode(object.login, message.login = $util.newBuffer($util.base64.length(object.login)), 0);
                else if (object.login.length)
                    message.login = object.login;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramSignedGameCoordinatorServerLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @static
         * @param {CMsgSteamDatagramSignedGameCoordinatorServerLogin} message CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cert = null;
                if (options.bytes === String)
                    object.login = "";
                else {
                    object.login = [];
                    if (options.bytes !== Array)
                        object.login = $util.newBuffer(object.login);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.cert != null && message.hasOwnProperty("cert"))
                object.cert = $root.CMsgSteamDatagramCertificateSigned.toObject(message.cert, options);
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = options.bytes === String ? $util.base64.encode(message.login, 0, message.login.length) : options.bytes === Array ? Array.prototype.slice.call(message.login) : message.login;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramSignedGameCoordinatorServerLogin to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramSignedGameCoordinatorServerLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramSignedGameCoordinatorServerLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramSignedGameCoordinatorServerLogin;
    })();
    
    $root.CMsgSteamDatagramHostedServerAddressPlaintext = (function() {
    
        /**
         * Properties of a CMsgSteamDatagramHostedServerAddressPlaintext.
         * @exports ICMsgSteamDatagramHostedServerAddressPlaintext
         * @interface ICMsgSteamDatagramHostedServerAddressPlaintext
         * @property {number|null} [ipv4] CMsgSteamDatagramHostedServerAddressPlaintext ipv4
         * @property {Uint8Array|null} [ipv6] CMsgSteamDatagramHostedServerAddressPlaintext ipv6
         * @property {number|null} [port] CMsgSteamDatagramHostedServerAddressPlaintext port
         * @property {number|Long|null} [routing_secret] CMsgSteamDatagramHostedServerAddressPlaintext routing_secret
         */
    
        /**
         * Constructs a new CMsgSteamDatagramHostedServerAddressPlaintext.
         * @exports CMsgSteamDatagramHostedServerAddressPlaintext
         * @classdesc Represents a CMsgSteamDatagramHostedServerAddressPlaintext.
         * @implements ICMsgSteamDatagramHostedServerAddressPlaintext
         * @constructor
         * @param {ICMsgSteamDatagramHostedServerAddressPlaintext=} [properties] Properties to set
         */
        function CMsgSteamDatagramHostedServerAddressPlaintext(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext ipv4.
         * @member {number} ipv4
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.ipv4 = 0;
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext ipv6.
         * @member {Uint8Array} ipv6
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.ipv6 = $util.newBuffer([]);
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext port.
         * @member {number} port
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.port = 0;
    
        /**
         * CMsgSteamDatagramHostedServerAddressPlaintext routing_secret.
         * @member {number|Long} routing_secret
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.routing_secret = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CMsgSteamDatagramHostedServerAddressPlaintext instance using the specified properties.
         * @function create
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {ICMsgSteamDatagramHostedServerAddressPlaintext=} [properties] Properties to set
         * @returns {CMsgSteamDatagramHostedServerAddressPlaintext} CMsgSteamDatagramHostedServerAddressPlaintext instance
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.create = function create(properties) {
            return new CMsgSteamDatagramHostedServerAddressPlaintext(properties);
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramHostedServerAddressPlaintext message. Does not implicitly {@link CMsgSteamDatagramHostedServerAddressPlaintext.verify|verify} messages.
         * @function encode
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {ICMsgSteamDatagramHostedServerAddressPlaintext} message CMsgSteamDatagramHostedServerAddressPlaintext message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.ipv4);
            if (message.ipv6 != null && message.hasOwnProperty("ipv6"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ipv6);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.port);
            if (message.routing_secret != null && message.hasOwnProperty("routing_secret"))
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.routing_secret);
            return writer;
        };
    
        /**
         * Encodes the specified CMsgSteamDatagramHostedServerAddressPlaintext message, length delimited. Does not implicitly {@link CMsgSteamDatagramHostedServerAddressPlaintext.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {ICMsgSteamDatagramHostedServerAddressPlaintext} message CMsgSteamDatagramHostedServerAddressPlaintext message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CMsgSteamDatagramHostedServerAddressPlaintext message from the specified reader or buffer.
         * @function decode
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CMsgSteamDatagramHostedServerAddressPlaintext} CMsgSteamDatagramHostedServerAddressPlaintext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CMsgSteamDatagramHostedServerAddressPlaintext();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ipv4 = reader.fixed32();
                    break;
                case 2:
                    message.ipv6 = reader.bytes();
                    break;
                case 3:
                    message.port = reader.uint32();
                    break;
                case 4:
                    message.routing_secret = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CMsgSteamDatagramHostedServerAddressPlaintext message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CMsgSteamDatagramHostedServerAddressPlaintext} CMsgSteamDatagramHostedServerAddressPlaintext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CMsgSteamDatagramHostedServerAddressPlaintext message.
         * @function verify
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                if (!$util.isInteger(message.ipv4))
                    return "ipv4: integer expected";
            if (message.ipv6 != null && message.hasOwnProperty("ipv6"))
                if (!(message.ipv6 && typeof message.ipv6.length === "number" || $util.isString(message.ipv6)))
                    return "ipv6: buffer expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.routing_secret != null && message.hasOwnProperty("routing_secret"))
                if (!$util.isInteger(message.routing_secret) && !(message.routing_secret && $util.isInteger(message.routing_secret.low) && $util.isInteger(message.routing_secret.high)))
                    return "routing_secret: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CMsgSteamDatagramHostedServerAddressPlaintext message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CMsgSteamDatagramHostedServerAddressPlaintext} CMsgSteamDatagramHostedServerAddressPlaintext
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.fromObject = function fromObject(object) {
            if (object instanceof $root.CMsgSteamDatagramHostedServerAddressPlaintext)
                return object;
            var message = new $root.CMsgSteamDatagramHostedServerAddressPlaintext();
            if (object.ipv4 != null)
                message.ipv4 = object.ipv4 >>> 0;
            if (object.ipv6 != null)
                if (typeof object.ipv6 === "string")
                    $util.base64.decode(object.ipv6, message.ipv6 = $util.newBuffer($util.base64.length(object.ipv6)), 0);
                else if (object.ipv6.length)
                    message.ipv6 = object.ipv6;
            if (object.port != null)
                message.port = object.port >>> 0;
            if (object.routing_secret != null)
                if ($util.Long)
                    (message.routing_secret = $util.Long.fromValue(object.routing_secret)).unsigned = false;
                else if (typeof object.routing_secret === "string")
                    message.routing_secret = parseInt(object.routing_secret, 10);
                else if (typeof object.routing_secret === "number")
                    message.routing_secret = object.routing_secret;
                else if (typeof object.routing_secret === "object")
                    message.routing_secret = new $util.LongBits(object.routing_secret.low >>> 0, object.routing_secret.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CMsgSteamDatagramHostedServerAddressPlaintext message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @static
         * @param {CMsgSteamDatagramHostedServerAddressPlaintext} message CMsgSteamDatagramHostedServerAddressPlaintext
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ipv4 = 0;
                if (options.bytes === String)
                    object.ipv6 = "";
                else {
                    object.ipv6 = [];
                    if (options.bytes !== Array)
                        object.ipv6 = $util.newBuffer(object.ipv6);
                }
                object.port = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.routing_secret = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.routing_secret = options.longs === String ? "0" : 0;
            }
            if (message.ipv4 != null && message.hasOwnProperty("ipv4"))
                object.ipv4 = message.ipv4;
            if (message.ipv6 != null && message.hasOwnProperty("ipv6"))
                object.ipv6 = options.bytes === String ? $util.base64.encode(message.ipv6, 0, message.ipv6.length) : options.bytes === Array ? Array.prototype.slice.call(message.ipv6) : message.ipv6;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.routing_secret != null && message.hasOwnProperty("routing_secret"))
                if (typeof message.routing_secret === "number")
                    object.routing_secret = options.longs === String ? String(message.routing_secret) : message.routing_secret;
                else
                    object.routing_secret = options.longs === String ? $util.Long.prototype.toString.call(message.routing_secret) : options.longs === Number ? new $util.LongBits(message.routing_secret.low >>> 0, message.routing_secret.high >>> 0).toNumber() : message.routing_secret;
            return object;
        };
    
        /**
         * Converts this CMsgSteamDatagramHostedServerAddressPlaintext to JSON.
         * @function toJSON
         * @memberof CMsgSteamDatagramHostedServerAddressPlaintext
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMsgSteamDatagramHostedServerAddressPlaintext.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CMsgSteamDatagramHostedServerAddressPlaintext;
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

    return $root;
});
