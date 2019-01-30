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
    
    $root.CInventory_GetInventory_Request = (function() {
    
        /**
         * Properties of a CInventory_GetInventory_Request.
         * @exports ICInventory_GetInventory_Request
         * @interface ICInventory_GetInventory_Request
         * @property {number|null} [appid] CInventory_GetInventory_Request appid
         * @property {number|Long|null} [steamid] CInventory_GetInventory_Request steamid
         */
    
        /**
         * Constructs a new CInventory_GetInventory_Request.
         * @exports CInventory_GetInventory_Request
         * @classdesc Represents a CInventory_GetInventory_Request.
         * @implements ICInventory_GetInventory_Request
         * @constructor
         * @param {ICInventory_GetInventory_Request=} [properties] Properties to set
         */
        function CInventory_GetInventory_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_GetInventory_Request appid.
         * @member {number} appid
         * @memberof CInventory_GetInventory_Request
         * @instance
         */
        CInventory_GetInventory_Request.prototype.appid = 0;
    
        /**
         * CInventory_GetInventory_Request steamid.
         * @member {number|Long} steamid
         * @memberof CInventory_GetInventory_Request
         * @instance
         */
        CInventory_GetInventory_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CInventory_GetInventory_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_GetInventory_Request
         * @static
         * @param {ICInventory_GetInventory_Request=} [properties] Properties to set
         * @returns {CInventory_GetInventory_Request} CInventory_GetInventory_Request instance
         */
        CInventory_GetInventory_Request.create = function create(properties) {
            return new CInventory_GetInventory_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_GetInventory_Request message. Does not implicitly {@link CInventory_GetInventory_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_GetInventory_Request
         * @static
         * @param {ICInventory_GetInventory_Request} message CInventory_GetInventory_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetInventory_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_GetInventory_Request message, length delimited. Does not implicitly {@link CInventory_GetInventory_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_GetInventory_Request
         * @static
         * @param {ICInventory_GetInventory_Request} message CInventory_GetInventory_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetInventory_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_GetInventory_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_GetInventory_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_GetInventory_Request} CInventory_GetInventory_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetInventory_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_GetInventory_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
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
         * Decodes a CInventory_GetInventory_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_GetInventory_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_GetInventory_Request} CInventory_GetInventory_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetInventory_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_GetInventory_Request message.
         * @function verify
         * @memberof CInventory_GetInventory_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_GetInventory_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CInventory_GetInventory_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_GetInventory_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_GetInventory_Request} CInventory_GetInventory_Request
         */
        CInventory_GetInventory_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_GetInventory_Request)
                return object;
            var message = new $root.CInventory_GetInventory_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
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
         * Creates a plain object from a CInventory_GetInventory_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_GetInventory_Request
         * @static
         * @param {CInventory_GetInventory_Request} message CInventory_GetInventory_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_GetInventory_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            return object;
        };
    
        /**
         * Converts this CInventory_GetInventory_Request to JSON.
         * @function toJSON
         * @memberof CInventory_GetInventory_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_GetInventory_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_GetInventory_Request;
    })();
    
    $root.CInventory_Response = (function() {
    
        /**
         * Properties of a CInventory_Response.
         * @exports ICInventory_Response
         * @interface ICInventory_Response
         * @property {string|null} [etag] CInventory_Response etag
         * @property {Array.<number|Long>|null} [removeditemids] CInventory_Response removeditemids
         * @property {string|null} [item_json] CInventory_Response item_json
         * @property {string|null} [itemdef_json] CInventory_Response itemdef_json
         * @property {Uint8Array|null} [ticket] CInventory_Response ticket
         * @property {boolean|null} [replayed] CInventory_Response replayed
         */
    
        /**
         * Constructs a new CInventory_Response.
         * @exports CInventory_Response
         * @classdesc Represents a CInventory_Response.
         * @implements ICInventory_Response
         * @constructor
         * @param {ICInventory_Response=} [properties] Properties to set
         */
        function CInventory_Response(properties) {
            this.removeditemids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_Response etag.
         * @member {string} etag
         * @memberof CInventory_Response
         * @instance
         */
        CInventory_Response.prototype.etag = "";
    
        /**
         * CInventory_Response removeditemids.
         * @member {Array.<number|Long>} removeditemids
         * @memberof CInventory_Response
         * @instance
         */
        CInventory_Response.prototype.removeditemids = $util.emptyArray;
    
        /**
         * CInventory_Response item_json.
         * @member {string} item_json
         * @memberof CInventory_Response
         * @instance
         */
        CInventory_Response.prototype.item_json = "";
    
        /**
         * CInventory_Response itemdef_json.
         * @member {string} itemdef_json
         * @memberof CInventory_Response
         * @instance
         */
        CInventory_Response.prototype.itemdef_json = "";
    
        /**
         * CInventory_Response ticket.
         * @member {Uint8Array} ticket
         * @memberof CInventory_Response
         * @instance
         */
        CInventory_Response.prototype.ticket = $util.newBuffer([]);
    
        /**
         * CInventory_Response replayed.
         * @member {boolean} replayed
         * @memberof CInventory_Response
         * @instance
         */
        CInventory_Response.prototype.replayed = false;
    
        /**
         * Creates a new CInventory_Response instance using the specified properties.
         * @function create
         * @memberof CInventory_Response
         * @static
         * @param {ICInventory_Response=} [properties] Properties to set
         * @returns {CInventory_Response} CInventory_Response instance
         */
        CInventory_Response.create = function create(properties) {
            return new CInventory_Response(properties);
        };
    
        /**
         * Encodes the specified CInventory_Response message. Does not implicitly {@link CInventory_Response.verify|verify} messages.
         * @function encode
         * @memberof CInventory_Response
         * @static
         * @param {ICInventory_Response} message CInventory_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.etag != null && message.hasOwnProperty("etag"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.etag);
            if (message.removeditemids != null && message.removeditemids.length)
                for (var i = 0; i < message.removeditemids.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.removeditemids[i]);
            if (message.item_json != null && message.hasOwnProperty("item_json"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.item_json);
            if (message.itemdef_json != null && message.hasOwnProperty("itemdef_json"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.itemdef_json);
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.ticket);
            if (message.replayed != null && message.hasOwnProperty("replayed"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.replayed);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_Response message, length delimited. Does not implicitly {@link CInventory_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_Response
         * @static
         * @param {ICInventory_Response} message CInventory_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_Response} CInventory_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.etag = reader.string();
                    break;
                case 2:
                    if (!(message.removeditemids && message.removeditemids.length))
                        message.removeditemids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.removeditemids.push(reader.uint64());
                    } else
                        message.removeditemids.push(reader.uint64());
                    break;
                case 3:
                    message.item_json = reader.string();
                    break;
                case 4:
                    message.itemdef_json = reader.string();
                    break;
                case 5:
                    message.ticket = reader.bytes();
                    break;
                case 6:
                    message.replayed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_Response} CInventory_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_Response message.
         * @function verify
         * @memberof CInventory_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.etag != null && message.hasOwnProperty("etag"))
                if (!$util.isString(message.etag))
                    return "etag: string expected";
            if (message.removeditemids != null && message.hasOwnProperty("removeditemids")) {
                if (!Array.isArray(message.removeditemids))
                    return "removeditemids: array expected";
                for (var i = 0; i < message.removeditemids.length; ++i)
                    if (!$util.isInteger(message.removeditemids[i]) && !(message.removeditemids[i] && $util.isInteger(message.removeditemids[i].low) && $util.isInteger(message.removeditemids[i].high)))
                        return "removeditemids: integer|Long[] expected";
            }
            if (message.item_json != null && message.hasOwnProperty("item_json"))
                if (!$util.isString(message.item_json))
                    return "item_json: string expected";
            if (message.itemdef_json != null && message.hasOwnProperty("itemdef_json"))
                if (!$util.isString(message.itemdef_json))
                    return "itemdef_json: string expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!(message.ticket && typeof message.ticket.length === "number" || $util.isString(message.ticket)))
                    return "ticket: buffer expected";
            if (message.replayed != null && message.hasOwnProperty("replayed"))
                if (typeof message.replayed !== "boolean")
                    return "replayed: boolean expected";
            return null;
        };
    
        /**
         * Creates a CInventory_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_Response} CInventory_Response
         */
        CInventory_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_Response)
                return object;
            var message = new $root.CInventory_Response();
            if (object.etag != null)
                message.etag = String(object.etag);
            if (object.removeditemids) {
                if (!Array.isArray(object.removeditemids))
                    throw TypeError(".CInventory_Response.removeditemids: array expected");
                message.removeditemids = [];
                for (var i = 0; i < object.removeditemids.length; ++i)
                    if ($util.Long)
                        (message.removeditemids[i] = $util.Long.fromValue(object.removeditemids[i])).unsigned = true;
                    else if (typeof object.removeditemids[i] === "string")
                        message.removeditemids[i] = parseInt(object.removeditemids[i], 10);
                    else if (typeof object.removeditemids[i] === "number")
                        message.removeditemids[i] = object.removeditemids[i];
                    else if (typeof object.removeditemids[i] === "object")
                        message.removeditemids[i] = new $util.LongBits(object.removeditemids[i].low >>> 0, object.removeditemids[i].high >>> 0).toNumber(true);
            }
            if (object.item_json != null)
                message.item_json = String(object.item_json);
            if (object.itemdef_json != null)
                message.itemdef_json = String(object.itemdef_json);
            if (object.ticket != null)
                if (typeof object.ticket === "string")
                    $util.base64.decode(object.ticket, message.ticket = $util.newBuffer($util.base64.length(object.ticket)), 0);
                else if (object.ticket.length)
                    message.ticket = object.ticket;
            if (object.replayed != null)
                message.replayed = Boolean(object.replayed);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_Response
         * @static
         * @param {CInventory_Response} message CInventory_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.removeditemids = [];
            if (options.defaults) {
                object.etag = "";
                object.item_json = "";
                object.itemdef_json = "";
                if (options.bytes === String)
                    object.ticket = "";
                else {
                    object.ticket = [];
                    if (options.bytes !== Array)
                        object.ticket = $util.newBuffer(object.ticket);
                }
                object.replayed = false;
            }
            if (message.etag != null && message.hasOwnProperty("etag"))
                object.etag = message.etag;
            if (message.removeditemids && message.removeditemids.length) {
                object.removeditemids = [];
                for (var j = 0; j < message.removeditemids.length; ++j)
                    if (typeof message.removeditemids[j] === "number")
                        object.removeditemids[j] = options.longs === String ? String(message.removeditemids[j]) : message.removeditemids[j];
                    else
                        object.removeditemids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.removeditemids[j]) : options.longs === Number ? new $util.LongBits(message.removeditemids[j].low >>> 0, message.removeditemids[j].high >>> 0).toNumber(true) : message.removeditemids[j];
            }
            if (message.item_json != null && message.hasOwnProperty("item_json"))
                object.item_json = message.item_json;
            if (message.itemdef_json != null && message.hasOwnProperty("itemdef_json"))
                object.itemdef_json = message.itemdef_json;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = options.bytes === String ? $util.base64.encode(message.ticket, 0, message.ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.ticket) : message.ticket;
            if (message.replayed != null && message.hasOwnProperty("replayed"))
                object.replayed = message.replayed;
            return object;
        };
    
        /**
         * Converts this CInventory_Response to JSON.
         * @function toJSON
         * @memberof CInventory_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_Response;
    })();
    
    $root.CInventory_ExchangeItem_Request = (function() {
    
        /**
         * Properties of a CInventory_ExchangeItem_Request.
         * @exports ICInventory_ExchangeItem_Request
         * @interface ICInventory_ExchangeItem_Request
         * @property {number|null} [appid] CInventory_ExchangeItem_Request appid
         * @property {number|Long|null} [steamid] CInventory_ExchangeItem_Request steamid
         * @property {Array.<number|Long>|null} [materialsitemid] CInventory_ExchangeItem_Request materialsitemid
         * @property {Array.<number>|null} [materialsquantity] CInventory_ExchangeItem_Request materialsquantity
         * @property {number|Long|null} [outputitemdefid] CInventory_ExchangeItem_Request outputitemdefid
         */
    
        /**
         * Constructs a new CInventory_ExchangeItem_Request.
         * @exports CInventory_ExchangeItem_Request
         * @classdesc Represents a CInventory_ExchangeItem_Request.
         * @implements ICInventory_ExchangeItem_Request
         * @constructor
         * @param {ICInventory_ExchangeItem_Request=} [properties] Properties to set
         */
        function CInventory_ExchangeItem_Request(properties) {
            this.materialsitemid = [];
            this.materialsquantity = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_ExchangeItem_Request appid.
         * @member {number} appid
         * @memberof CInventory_ExchangeItem_Request
         * @instance
         */
        CInventory_ExchangeItem_Request.prototype.appid = 0;
    
        /**
         * CInventory_ExchangeItem_Request steamid.
         * @member {number|Long} steamid
         * @memberof CInventory_ExchangeItem_Request
         * @instance
         */
        CInventory_ExchangeItem_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_ExchangeItem_Request materialsitemid.
         * @member {Array.<number|Long>} materialsitemid
         * @memberof CInventory_ExchangeItem_Request
         * @instance
         */
        CInventory_ExchangeItem_Request.prototype.materialsitemid = $util.emptyArray;
    
        /**
         * CInventory_ExchangeItem_Request materialsquantity.
         * @member {Array.<number>} materialsquantity
         * @memberof CInventory_ExchangeItem_Request
         * @instance
         */
        CInventory_ExchangeItem_Request.prototype.materialsquantity = $util.emptyArray;
    
        /**
         * CInventory_ExchangeItem_Request outputitemdefid.
         * @member {number|Long} outputitemdefid
         * @memberof CInventory_ExchangeItem_Request
         * @instance
         */
        CInventory_ExchangeItem_Request.prototype.outputitemdefid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CInventory_ExchangeItem_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_ExchangeItem_Request
         * @static
         * @param {ICInventory_ExchangeItem_Request=} [properties] Properties to set
         * @returns {CInventory_ExchangeItem_Request} CInventory_ExchangeItem_Request instance
         */
        CInventory_ExchangeItem_Request.create = function create(properties) {
            return new CInventory_ExchangeItem_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_ExchangeItem_Request message. Does not implicitly {@link CInventory_ExchangeItem_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_ExchangeItem_Request
         * @static
         * @param {ICInventory_ExchangeItem_Request} message CInventory_ExchangeItem_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_ExchangeItem_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.steamid);
            if (message.materialsitemid != null && message.materialsitemid.length)
                for (var i = 0; i < message.materialsitemid.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.materialsitemid[i]);
            if (message.materialsquantity != null && message.materialsquantity.length)
                for (var i = 0; i < message.materialsquantity.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.materialsquantity[i]);
            if (message.outputitemdefid != null && message.hasOwnProperty("outputitemdefid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.outputitemdefid);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_ExchangeItem_Request message, length delimited. Does not implicitly {@link CInventory_ExchangeItem_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_ExchangeItem_Request
         * @static
         * @param {ICInventory_ExchangeItem_Request} message CInventory_ExchangeItem_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_ExchangeItem_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_ExchangeItem_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_ExchangeItem_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_ExchangeItem_Request} CInventory_ExchangeItem_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_ExchangeItem_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_ExchangeItem_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.steamid = reader.uint64();
                    break;
                case 3:
                    if (!(message.materialsitemid && message.materialsitemid.length))
                        message.materialsitemid = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.materialsitemid.push(reader.uint64());
                    } else
                        message.materialsitemid.push(reader.uint64());
                    break;
                case 4:
                    if (!(message.materialsquantity && message.materialsquantity.length))
                        message.materialsquantity = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.materialsquantity.push(reader.uint32());
                    } else
                        message.materialsquantity.push(reader.uint32());
                    break;
                case 5:
                    message.outputitemdefid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_ExchangeItem_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_ExchangeItem_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_ExchangeItem_Request} CInventory_ExchangeItem_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_ExchangeItem_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_ExchangeItem_Request message.
         * @function verify
         * @memberof CInventory_ExchangeItem_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_ExchangeItem_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.materialsitemid != null && message.hasOwnProperty("materialsitemid")) {
                if (!Array.isArray(message.materialsitemid))
                    return "materialsitemid: array expected";
                for (var i = 0; i < message.materialsitemid.length; ++i)
                    if (!$util.isInteger(message.materialsitemid[i]) && !(message.materialsitemid[i] && $util.isInteger(message.materialsitemid[i].low) && $util.isInteger(message.materialsitemid[i].high)))
                        return "materialsitemid: integer|Long[] expected";
            }
            if (message.materialsquantity != null && message.hasOwnProperty("materialsquantity")) {
                if (!Array.isArray(message.materialsquantity))
                    return "materialsquantity: array expected";
                for (var i = 0; i < message.materialsquantity.length; ++i)
                    if (!$util.isInteger(message.materialsquantity[i]))
                        return "materialsquantity: integer[] expected";
            }
            if (message.outputitemdefid != null && message.hasOwnProperty("outputitemdefid"))
                if (!$util.isInteger(message.outputitemdefid) && !(message.outputitemdefid && $util.isInteger(message.outputitemdefid.low) && $util.isInteger(message.outputitemdefid.high)))
                    return "outputitemdefid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CInventory_ExchangeItem_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_ExchangeItem_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_ExchangeItem_Request} CInventory_ExchangeItem_Request
         */
        CInventory_ExchangeItem_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_ExchangeItem_Request)
                return object;
            var message = new $root.CInventory_ExchangeItem_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            if (object.materialsitemid) {
                if (!Array.isArray(object.materialsitemid))
                    throw TypeError(".CInventory_ExchangeItem_Request.materialsitemid: array expected");
                message.materialsitemid = [];
                for (var i = 0; i < object.materialsitemid.length; ++i)
                    if ($util.Long)
                        (message.materialsitemid[i] = $util.Long.fromValue(object.materialsitemid[i])).unsigned = true;
                    else if (typeof object.materialsitemid[i] === "string")
                        message.materialsitemid[i] = parseInt(object.materialsitemid[i], 10);
                    else if (typeof object.materialsitemid[i] === "number")
                        message.materialsitemid[i] = object.materialsitemid[i];
                    else if (typeof object.materialsitemid[i] === "object")
                        message.materialsitemid[i] = new $util.LongBits(object.materialsitemid[i].low >>> 0, object.materialsitemid[i].high >>> 0).toNumber(true);
            }
            if (object.materialsquantity) {
                if (!Array.isArray(object.materialsquantity))
                    throw TypeError(".CInventory_ExchangeItem_Request.materialsquantity: array expected");
                message.materialsquantity = [];
                for (var i = 0; i < object.materialsquantity.length; ++i)
                    message.materialsquantity[i] = object.materialsquantity[i] >>> 0;
            }
            if (object.outputitemdefid != null)
                if ($util.Long)
                    (message.outputitemdefid = $util.Long.fromValue(object.outputitemdefid)).unsigned = true;
                else if (typeof object.outputitemdefid === "string")
                    message.outputitemdefid = parseInt(object.outputitemdefid, 10);
                else if (typeof object.outputitemdefid === "number")
                    message.outputitemdefid = object.outputitemdefid;
                else if (typeof object.outputitemdefid === "object")
                    message.outputitemdefid = new $util.LongBits(object.outputitemdefid.low >>> 0, object.outputitemdefid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_ExchangeItem_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_ExchangeItem_Request
         * @static
         * @param {CInventory_ExchangeItem_Request} message CInventory_ExchangeItem_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_ExchangeItem_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.materialsitemid = [];
                object.materialsquantity = [];
            }
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.outputitemdefid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.outputitemdefid = options.longs === String ? "0" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            if (message.materialsitemid && message.materialsitemid.length) {
                object.materialsitemid = [];
                for (var j = 0; j < message.materialsitemid.length; ++j)
                    if (typeof message.materialsitemid[j] === "number")
                        object.materialsitemid[j] = options.longs === String ? String(message.materialsitemid[j]) : message.materialsitemid[j];
                    else
                        object.materialsitemid[j] = options.longs === String ? $util.Long.prototype.toString.call(message.materialsitemid[j]) : options.longs === Number ? new $util.LongBits(message.materialsitemid[j].low >>> 0, message.materialsitemid[j].high >>> 0).toNumber(true) : message.materialsitemid[j];
            }
            if (message.materialsquantity && message.materialsquantity.length) {
                object.materialsquantity = [];
                for (var j = 0; j < message.materialsquantity.length; ++j)
                    object.materialsquantity[j] = message.materialsquantity[j];
            }
            if (message.outputitemdefid != null && message.hasOwnProperty("outputitemdefid"))
                if (typeof message.outputitemdefid === "number")
                    object.outputitemdefid = options.longs === String ? String(message.outputitemdefid) : message.outputitemdefid;
                else
                    object.outputitemdefid = options.longs === String ? $util.Long.prototype.toString.call(message.outputitemdefid) : options.longs === Number ? new $util.LongBits(message.outputitemdefid.low >>> 0, message.outputitemdefid.high >>> 0).toNumber(true) : message.outputitemdefid;
            return object;
        };
    
        /**
         * Converts this CInventory_ExchangeItem_Request to JSON.
         * @function toJSON
         * @memberof CInventory_ExchangeItem_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_ExchangeItem_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_ExchangeItem_Request;
    })();
    
    $root.CInventory_GetEligiblePromoItemDefIDs_Request = (function() {
    
        /**
         * Properties of a CInventory_GetEligiblePromoItemDefIDs_Request.
         * @exports ICInventory_GetEligiblePromoItemDefIDs_Request
         * @interface ICInventory_GetEligiblePromoItemDefIDs_Request
         * @property {number|null} [appid] CInventory_GetEligiblePromoItemDefIDs_Request appid
         * @property {number|Long|null} [steamid] CInventory_GetEligiblePromoItemDefIDs_Request steamid
         */
    
        /**
         * Constructs a new CInventory_GetEligiblePromoItemDefIDs_Request.
         * @exports CInventory_GetEligiblePromoItemDefIDs_Request
         * @classdesc Represents a CInventory_GetEligiblePromoItemDefIDs_Request.
         * @implements ICInventory_GetEligiblePromoItemDefIDs_Request
         * @constructor
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Request=} [properties] Properties to set
         */
        function CInventory_GetEligiblePromoItemDefIDs_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_GetEligiblePromoItemDefIDs_Request appid.
         * @member {number} appid
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @instance
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.prototype.appid = 0;
    
        /**
         * CInventory_GetEligiblePromoItemDefIDs_Request steamid.
         * @member {number|Long} steamid
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @instance
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CInventory_GetEligiblePromoItemDefIDs_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @static
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Request=} [properties] Properties to set
         * @returns {CInventory_GetEligiblePromoItemDefIDs_Request} CInventory_GetEligiblePromoItemDefIDs_Request instance
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.create = function create(properties) {
            return new CInventory_GetEligiblePromoItemDefIDs_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_GetEligiblePromoItemDefIDs_Request message. Does not implicitly {@link CInventory_GetEligiblePromoItemDefIDs_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @static
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Request} message CInventory_GetEligiblePromoItemDefIDs_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_GetEligiblePromoItemDefIDs_Request message, length delimited. Does not implicitly {@link CInventory_GetEligiblePromoItemDefIDs_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @static
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Request} message CInventory_GetEligiblePromoItemDefIDs_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_GetEligiblePromoItemDefIDs_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_GetEligiblePromoItemDefIDs_Request} CInventory_GetEligiblePromoItemDefIDs_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_GetEligiblePromoItemDefIDs_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
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
         * Decodes a CInventory_GetEligiblePromoItemDefIDs_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_GetEligiblePromoItemDefIDs_Request} CInventory_GetEligiblePromoItemDefIDs_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_GetEligiblePromoItemDefIDs_Request message.
         * @function verify
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CInventory_GetEligiblePromoItemDefIDs_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_GetEligiblePromoItemDefIDs_Request} CInventory_GetEligiblePromoItemDefIDs_Request
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_GetEligiblePromoItemDefIDs_Request)
                return object;
            var message = new $root.CInventory_GetEligiblePromoItemDefIDs_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
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
         * Creates a plain object from a CInventory_GetEligiblePromoItemDefIDs_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @static
         * @param {CInventory_GetEligiblePromoItemDefIDs_Request} message CInventory_GetEligiblePromoItemDefIDs_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            return object;
        };
    
        /**
         * Converts this CInventory_GetEligiblePromoItemDefIDs_Request to JSON.
         * @function toJSON
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_GetEligiblePromoItemDefIDs_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_GetEligiblePromoItemDefIDs_Request;
    })();
    
    $root.CInventory_GetEligiblePromoItemDefIDs_Response = (function() {
    
        /**
         * Properties of a CInventory_GetEligiblePromoItemDefIDs_Response.
         * @exports ICInventory_GetEligiblePromoItemDefIDs_Response
         * @interface ICInventory_GetEligiblePromoItemDefIDs_Response
         * @property {Array.<number|Long>|null} [itemdefids] CInventory_GetEligiblePromoItemDefIDs_Response itemdefids
         */
    
        /**
         * Constructs a new CInventory_GetEligiblePromoItemDefIDs_Response.
         * @exports CInventory_GetEligiblePromoItemDefIDs_Response
         * @classdesc Represents a CInventory_GetEligiblePromoItemDefIDs_Response.
         * @implements ICInventory_GetEligiblePromoItemDefIDs_Response
         * @constructor
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Response=} [properties] Properties to set
         */
        function CInventory_GetEligiblePromoItemDefIDs_Response(properties) {
            this.itemdefids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_GetEligiblePromoItemDefIDs_Response itemdefids.
         * @member {Array.<number|Long>} itemdefids
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @instance
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.prototype.itemdefids = $util.emptyArray;
    
        /**
         * Creates a new CInventory_GetEligiblePromoItemDefIDs_Response instance using the specified properties.
         * @function create
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @static
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Response=} [properties] Properties to set
         * @returns {CInventory_GetEligiblePromoItemDefIDs_Response} CInventory_GetEligiblePromoItemDefIDs_Response instance
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.create = function create(properties) {
            return new CInventory_GetEligiblePromoItemDefIDs_Response(properties);
        };
    
        /**
         * Encodes the specified CInventory_GetEligiblePromoItemDefIDs_Response message. Does not implicitly {@link CInventory_GetEligiblePromoItemDefIDs_Response.verify|verify} messages.
         * @function encode
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @static
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Response} message CInventory_GetEligiblePromoItemDefIDs_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemdefids != null && message.itemdefids.length)
                for (var i = 0; i < message.itemdefids.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.itemdefids[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_GetEligiblePromoItemDefIDs_Response message, length delimited. Does not implicitly {@link CInventory_GetEligiblePromoItemDefIDs_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @static
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Response} message CInventory_GetEligiblePromoItemDefIDs_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_GetEligiblePromoItemDefIDs_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_GetEligiblePromoItemDefIDs_Response} CInventory_GetEligiblePromoItemDefIDs_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_GetEligiblePromoItemDefIDs_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.itemdefids && message.itemdefids.length))
                        message.itemdefids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.itemdefids.push(reader.uint64());
                    } else
                        message.itemdefids.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_GetEligiblePromoItemDefIDs_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_GetEligiblePromoItemDefIDs_Response} CInventory_GetEligiblePromoItemDefIDs_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_GetEligiblePromoItemDefIDs_Response message.
         * @function verify
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemdefids != null && message.hasOwnProperty("itemdefids")) {
                if (!Array.isArray(message.itemdefids))
                    return "itemdefids: array expected";
                for (var i = 0; i < message.itemdefids.length; ++i)
                    if (!$util.isInteger(message.itemdefids[i]) && !(message.itemdefids[i] && $util.isInteger(message.itemdefids[i].low) && $util.isInteger(message.itemdefids[i].high)))
                        return "itemdefids: integer|Long[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CInventory_GetEligiblePromoItemDefIDs_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_GetEligiblePromoItemDefIDs_Response} CInventory_GetEligiblePromoItemDefIDs_Response
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_GetEligiblePromoItemDefIDs_Response)
                return object;
            var message = new $root.CInventory_GetEligiblePromoItemDefIDs_Response();
            if (object.itemdefids) {
                if (!Array.isArray(object.itemdefids))
                    throw TypeError(".CInventory_GetEligiblePromoItemDefIDs_Response.itemdefids: array expected");
                message.itemdefids = [];
                for (var i = 0; i < object.itemdefids.length; ++i)
                    if ($util.Long)
                        (message.itemdefids[i] = $util.Long.fromValue(object.itemdefids[i])).unsigned = true;
                    else if (typeof object.itemdefids[i] === "string")
                        message.itemdefids[i] = parseInt(object.itemdefids[i], 10);
                    else if (typeof object.itemdefids[i] === "number")
                        message.itemdefids[i] = object.itemdefids[i];
                    else if (typeof object.itemdefids[i] === "object")
                        message.itemdefids[i] = new $util.LongBits(object.itemdefids[i].low >>> 0, object.itemdefids[i].high >>> 0).toNumber(true);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_GetEligiblePromoItemDefIDs_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @static
         * @param {CInventory_GetEligiblePromoItemDefIDs_Response} message CInventory_GetEligiblePromoItemDefIDs_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemdefids = [];
            if (message.itemdefids && message.itemdefids.length) {
                object.itemdefids = [];
                for (var j = 0; j < message.itemdefids.length; ++j)
                    if (typeof message.itemdefids[j] === "number")
                        object.itemdefids[j] = options.longs === String ? String(message.itemdefids[j]) : message.itemdefids[j];
                    else
                        object.itemdefids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.itemdefids[j]) : options.longs === Number ? new $util.LongBits(message.itemdefids[j].low >>> 0, message.itemdefids[j].high >>> 0).toNumber(true) : message.itemdefids[j];
            }
            return object;
        };
    
        /**
         * Converts this CInventory_GetEligiblePromoItemDefIDs_Response to JSON.
         * @function toJSON
         * @memberof CInventory_GetEligiblePromoItemDefIDs_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_GetEligiblePromoItemDefIDs_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_GetEligiblePromoItemDefIDs_Response;
    })();
    
    $root.CInventory_AddItem_Request = (function() {
    
        /**
         * Properties of a CInventory_AddItem_Request.
         * @exports ICInventory_AddItem_Request
         * @interface ICInventory_AddItem_Request
         * @property {number|null} [appid] CInventory_AddItem_Request appid
         * @property {Array.<number|Long>|null} [itemdefid] CInventory_AddItem_Request itemdefid
         * @property {Array.<string>|null} [itempropsjson] CInventory_AddItem_Request itempropsjson
         * @property {number|Long|null} [steamid] CInventory_AddItem_Request steamid
         * @property {boolean|null} [notify] CInventory_AddItem_Request notify
         * @property {number|Long|null} [requestid] CInventory_AddItem_Request requestid
         * @property {boolean|null} [trade_restriction] CInventory_AddItem_Request trade_restriction
         * @property {boolean|null} [is_purchase] CInventory_AddItem_Request is_purchase
         */
    
        /**
         * Constructs a new CInventory_AddItem_Request.
         * @exports CInventory_AddItem_Request
         * @classdesc Represents a CInventory_AddItem_Request.
         * @implements ICInventory_AddItem_Request
         * @constructor
         * @param {ICInventory_AddItem_Request=} [properties] Properties to set
         */
        function CInventory_AddItem_Request(properties) {
            this.itemdefid = [];
            this.itempropsjson = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_AddItem_Request appid.
         * @member {number} appid
         * @memberof CInventory_AddItem_Request
         * @instance
         */
        CInventory_AddItem_Request.prototype.appid = 0;
    
        /**
         * CInventory_AddItem_Request itemdefid.
         * @member {Array.<number|Long>} itemdefid
         * @memberof CInventory_AddItem_Request
         * @instance
         */
        CInventory_AddItem_Request.prototype.itemdefid = $util.emptyArray;
    
        /**
         * CInventory_AddItem_Request itempropsjson.
         * @member {Array.<string>} itempropsjson
         * @memberof CInventory_AddItem_Request
         * @instance
         */
        CInventory_AddItem_Request.prototype.itempropsjson = $util.emptyArray;
    
        /**
         * CInventory_AddItem_Request steamid.
         * @member {number|Long} steamid
         * @memberof CInventory_AddItem_Request
         * @instance
         */
        CInventory_AddItem_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_AddItem_Request notify.
         * @member {boolean} notify
         * @memberof CInventory_AddItem_Request
         * @instance
         */
        CInventory_AddItem_Request.prototype.notify = false;
    
        /**
         * CInventory_AddItem_Request requestid.
         * @member {number|Long} requestid
         * @memberof CInventory_AddItem_Request
         * @instance
         */
        CInventory_AddItem_Request.prototype.requestid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_AddItem_Request trade_restriction.
         * @member {boolean} trade_restriction
         * @memberof CInventory_AddItem_Request
         * @instance
         */
        CInventory_AddItem_Request.prototype.trade_restriction = false;
    
        /**
         * CInventory_AddItem_Request is_purchase.
         * @member {boolean} is_purchase
         * @memberof CInventory_AddItem_Request
         * @instance
         */
        CInventory_AddItem_Request.prototype.is_purchase = false;
    
        /**
         * Creates a new CInventory_AddItem_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_AddItem_Request
         * @static
         * @param {ICInventory_AddItem_Request=} [properties] Properties to set
         * @returns {CInventory_AddItem_Request} CInventory_AddItem_Request instance
         */
        CInventory_AddItem_Request.create = function create(properties) {
            return new CInventory_AddItem_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_AddItem_Request message. Does not implicitly {@link CInventory_AddItem_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_AddItem_Request
         * @static
         * @param {ICInventory_AddItem_Request} message CInventory_AddItem_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_AddItem_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.itemdefid != null && message.itemdefid.length)
                for (var i = 0; i < message.itemdefid.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.itemdefid[i]);
            if (message.itempropsjson != null && message.itempropsjson.length)
                for (var i = 0; i < message.itempropsjson.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.itempropsjson[i]);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.steamid);
            if (message.notify != null && message.hasOwnProperty("notify"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.notify);
            if (message.requestid != null && message.hasOwnProperty("requestid"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.requestid);
            if (message.trade_restriction != null && message.hasOwnProperty("trade_restriction"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.trade_restriction);
            if (message.is_purchase != null && message.hasOwnProperty("is_purchase"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.is_purchase);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_AddItem_Request message, length delimited. Does not implicitly {@link CInventory_AddItem_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_AddItem_Request
         * @static
         * @param {ICInventory_AddItem_Request} message CInventory_AddItem_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_AddItem_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_AddItem_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_AddItem_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_AddItem_Request} CInventory_AddItem_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_AddItem_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_AddItem_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    if (!(message.itemdefid && message.itemdefid.length))
                        message.itemdefid = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.itemdefid.push(reader.uint64());
                    } else
                        message.itemdefid.push(reader.uint64());
                    break;
                case 3:
                    if (!(message.itempropsjson && message.itempropsjson.length))
                        message.itempropsjson = [];
                    message.itempropsjson.push(reader.string());
                    break;
                case 4:
                    message.steamid = reader.uint64();
                    break;
                case 5:
                    message.notify = reader.bool();
                    break;
                case 6:
                    message.requestid = reader.uint64();
                    break;
                case 7:
                    message.trade_restriction = reader.bool();
                    break;
                case 8:
                    message.is_purchase = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_AddItem_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_AddItem_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_AddItem_Request} CInventory_AddItem_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_AddItem_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_AddItem_Request message.
         * @function verify
         * @memberof CInventory_AddItem_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_AddItem_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.itemdefid != null && message.hasOwnProperty("itemdefid")) {
                if (!Array.isArray(message.itemdefid))
                    return "itemdefid: array expected";
                for (var i = 0; i < message.itemdefid.length; ++i)
                    if (!$util.isInteger(message.itemdefid[i]) && !(message.itemdefid[i] && $util.isInteger(message.itemdefid[i].low) && $util.isInteger(message.itemdefid[i].high)))
                        return "itemdefid: integer|Long[] expected";
            }
            if (message.itempropsjson != null && message.hasOwnProperty("itempropsjson")) {
                if (!Array.isArray(message.itempropsjson))
                    return "itempropsjson: array expected";
                for (var i = 0; i < message.itempropsjson.length; ++i)
                    if (!$util.isString(message.itempropsjson[i]))
                        return "itempropsjson: string[] expected";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.notify != null && message.hasOwnProperty("notify"))
                if (typeof message.notify !== "boolean")
                    return "notify: boolean expected";
            if (message.requestid != null && message.hasOwnProperty("requestid"))
                if (!$util.isInteger(message.requestid) && !(message.requestid && $util.isInteger(message.requestid.low) && $util.isInteger(message.requestid.high)))
                    return "requestid: integer|Long expected";
            if (message.trade_restriction != null && message.hasOwnProperty("trade_restriction"))
                if (typeof message.trade_restriction !== "boolean")
                    return "trade_restriction: boolean expected";
            if (message.is_purchase != null && message.hasOwnProperty("is_purchase"))
                if (typeof message.is_purchase !== "boolean")
                    return "is_purchase: boolean expected";
            return null;
        };
    
        /**
         * Creates a CInventory_AddItem_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_AddItem_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_AddItem_Request} CInventory_AddItem_Request
         */
        CInventory_AddItem_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_AddItem_Request)
                return object;
            var message = new $root.CInventory_AddItem_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.itemdefid) {
                if (!Array.isArray(object.itemdefid))
                    throw TypeError(".CInventory_AddItem_Request.itemdefid: array expected");
                message.itemdefid = [];
                for (var i = 0; i < object.itemdefid.length; ++i)
                    if ($util.Long)
                        (message.itemdefid[i] = $util.Long.fromValue(object.itemdefid[i])).unsigned = true;
                    else if (typeof object.itemdefid[i] === "string")
                        message.itemdefid[i] = parseInt(object.itemdefid[i], 10);
                    else if (typeof object.itemdefid[i] === "number")
                        message.itemdefid[i] = object.itemdefid[i];
                    else if (typeof object.itemdefid[i] === "object")
                        message.itemdefid[i] = new $util.LongBits(object.itemdefid[i].low >>> 0, object.itemdefid[i].high >>> 0).toNumber(true);
            }
            if (object.itempropsjson) {
                if (!Array.isArray(object.itempropsjson))
                    throw TypeError(".CInventory_AddItem_Request.itempropsjson: array expected");
                message.itempropsjson = [];
                for (var i = 0; i < object.itempropsjson.length; ++i)
                    message.itempropsjson[i] = String(object.itempropsjson[i]);
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
            if (object.notify != null)
                message.notify = Boolean(object.notify);
            if (object.requestid != null)
                if ($util.Long)
                    (message.requestid = $util.Long.fromValue(object.requestid)).unsigned = true;
                else if (typeof object.requestid === "string")
                    message.requestid = parseInt(object.requestid, 10);
                else if (typeof object.requestid === "number")
                    message.requestid = object.requestid;
                else if (typeof object.requestid === "object")
                    message.requestid = new $util.LongBits(object.requestid.low >>> 0, object.requestid.high >>> 0).toNumber(true);
            if (object.trade_restriction != null)
                message.trade_restriction = Boolean(object.trade_restriction);
            if (object.is_purchase != null)
                message.is_purchase = Boolean(object.is_purchase);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_AddItem_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_AddItem_Request
         * @static
         * @param {CInventory_AddItem_Request} message CInventory_AddItem_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_AddItem_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.itemdefid = [];
                object.itempropsjson = [];
            }
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.notify = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.requestid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestid = options.longs === String ? "0" : 0;
                object.trade_restriction = false;
                object.is_purchase = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.itemdefid && message.itemdefid.length) {
                object.itemdefid = [];
                for (var j = 0; j < message.itemdefid.length; ++j)
                    if (typeof message.itemdefid[j] === "number")
                        object.itemdefid[j] = options.longs === String ? String(message.itemdefid[j]) : message.itemdefid[j];
                    else
                        object.itemdefid[j] = options.longs === String ? $util.Long.prototype.toString.call(message.itemdefid[j]) : options.longs === Number ? new $util.LongBits(message.itemdefid[j].low >>> 0, message.itemdefid[j].high >>> 0).toNumber(true) : message.itemdefid[j];
            }
            if (message.itempropsjson && message.itempropsjson.length) {
                object.itempropsjson = [];
                for (var j = 0; j < message.itempropsjson.length; ++j)
                    object.itempropsjson[j] = message.itempropsjson[j];
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            if (message.notify != null && message.hasOwnProperty("notify"))
                object.notify = message.notify;
            if (message.requestid != null && message.hasOwnProperty("requestid"))
                if (typeof message.requestid === "number")
                    object.requestid = options.longs === String ? String(message.requestid) : message.requestid;
                else
                    object.requestid = options.longs === String ? $util.Long.prototype.toString.call(message.requestid) : options.longs === Number ? new $util.LongBits(message.requestid.low >>> 0, message.requestid.high >>> 0).toNumber(true) : message.requestid;
            if (message.trade_restriction != null && message.hasOwnProperty("trade_restriction"))
                object.trade_restriction = message.trade_restriction;
            if (message.is_purchase != null && message.hasOwnProperty("is_purchase"))
                object.is_purchase = message.is_purchase;
            return object;
        };
    
        /**
         * Converts this CInventory_AddItem_Request to JSON.
         * @function toJSON
         * @memberof CInventory_AddItem_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_AddItem_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_AddItem_Request;
    })();
    
    $root.CInventory_ModifyItems_Request = (function() {
    
        /**
         * Properties of a CInventory_ModifyItems_Request.
         * @exports ICInventory_ModifyItems_Request
         * @interface ICInventory_ModifyItems_Request
         * @property {number|null} [appid] CInventory_ModifyItems_Request appid
         * @property {number|Long|null} [steamid] CInventory_ModifyItems_Request steamid
         * @property {Array.<CInventory_ModifyItems_Request.IItemPropertyUpdate>|null} [updates] CInventory_ModifyItems_Request updates
         * @property {number|null} [timestamp] CInventory_ModifyItems_Request timestamp
         */
    
        /**
         * Constructs a new CInventory_ModifyItems_Request.
         * @exports CInventory_ModifyItems_Request
         * @classdesc Represents a CInventory_ModifyItems_Request.
         * @implements ICInventory_ModifyItems_Request
         * @constructor
         * @param {ICInventory_ModifyItems_Request=} [properties] Properties to set
         */
        function CInventory_ModifyItems_Request(properties) {
            this.updates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_ModifyItems_Request appid.
         * @member {number} appid
         * @memberof CInventory_ModifyItems_Request
         * @instance
         */
        CInventory_ModifyItems_Request.prototype.appid = 0;
    
        /**
         * CInventory_ModifyItems_Request steamid.
         * @member {number|Long} steamid
         * @memberof CInventory_ModifyItems_Request
         * @instance
         */
        CInventory_ModifyItems_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_ModifyItems_Request updates.
         * @member {Array.<CInventory_ModifyItems_Request.IItemPropertyUpdate>} updates
         * @memberof CInventory_ModifyItems_Request
         * @instance
         */
        CInventory_ModifyItems_Request.prototype.updates = $util.emptyArray;
    
        /**
         * CInventory_ModifyItems_Request timestamp.
         * @member {number} timestamp
         * @memberof CInventory_ModifyItems_Request
         * @instance
         */
        CInventory_ModifyItems_Request.prototype.timestamp = 0;
    
        /**
         * Creates a new CInventory_ModifyItems_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_ModifyItems_Request
         * @static
         * @param {ICInventory_ModifyItems_Request=} [properties] Properties to set
         * @returns {CInventory_ModifyItems_Request} CInventory_ModifyItems_Request instance
         */
        CInventory_ModifyItems_Request.create = function create(properties) {
            return new CInventory_ModifyItems_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_ModifyItems_Request message. Does not implicitly {@link CInventory_ModifyItems_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_ModifyItems_Request
         * @static
         * @param {ICInventory_ModifyItems_Request} message CInventory_ModifyItems_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_ModifyItems_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.steamid);
            if (message.updates != null && message.updates.length)
                for (var i = 0; i < message.updates.length; ++i)
                    $root.CInventory_ModifyItems_Request.ItemPropertyUpdate.encode(message.updates[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.timestamp);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_ModifyItems_Request message, length delimited. Does not implicitly {@link CInventory_ModifyItems_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_ModifyItems_Request
         * @static
         * @param {ICInventory_ModifyItems_Request} message CInventory_ModifyItems_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_ModifyItems_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_ModifyItems_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_ModifyItems_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_ModifyItems_Request} CInventory_ModifyItems_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_ModifyItems_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_ModifyItems_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.steamid = reader.uint64();
                    break;
                case 3:
                    if (!(message.updates && message.updates.length))
                        message.updates = [];
                    message.updates.push($root.CInventory_ModifyItems_Request.ItemPropertyUpdate.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.timestamp = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_ModifyItems_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_ModifyItems_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_ModifyItems_Request} CInventory_ModifyItems_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_ModifyItems_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_ModifyItems_Request message.
         * @function verify
         * @memberof CInventory_ModifyItems_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_ModifyItems_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.updates != null && message.hasOwnProperty("updates")) {
                if (!Array.isArray(message.updates))
                    return "updates: array expected";
                for (var i = 0; i < message.updates.length; ++i) {
                    var error = $root.CInventory_ModifyItems_Request.ItemPropertyUpdate.verify(message.updates[i]);
                    if (error)
                        return "updates." + error;
                }
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            return null;
        };
    
        /**
         * Creates a CInventory_ModifyItems_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_ModifyItems_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_ModifyItems_Request} CInventory_ModifyItems_Request
         */
        CInventory_ModifyItems_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_ModifyItems_Request)
                return object;
            var message = new $root.CInventory_ModifyItems_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            if (object.updates) {
                if (!Array.isArray(object.updates))
                    throw TypeError(".CInventory_ModifyItems_Request.updates: array expected");
                message.updates = [];
                for (var i = 0; i < object.updates.length; ++i) {
                    if (typeof object.updates[i] !== "object")
                        throw TypeError(".CInventory_ModifyItems_Request.updates: object expected");
                    message.updates[i] = $root.CInventory_ModifyItems_Request.ItemPropertyUpdate.fromObject(object.updates[i]);
                }
            }
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_ModifyItems_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_ModifyItems_Request
         * @static
         * @param {CInventory_ModifyItems_Request} message CInventory_ModifyItems_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_ModifyItems_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.updates = [];
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.timestamp = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            if (message.updates && message.updates.length) {
                object.updates = [];
                for (var j = 0; j < message.updates.length; ++j)
                    object.updates[j] = $root.CInventory_ModifyItems_Request.ItemPropertyUpdate.toObject(message.updates[j], options);
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            return object;
        };
    
        /**
         * Converts this CInventory_ModifyItems_Request to JSON.
         * @function toJSON
         * @memberof CInventory_ModifyItems_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_ModifyItems_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CInventory_ModifyItems_Request.ItemPropertyUpdate = (function() {
    
            /**
             * Properties of an ItemPropertyUpdate.
             * @memberof CInventory_ModifyItems_Request
             * @interface IItemPropertyUpdate
             * @property {number|Long|null} [itemid] ItemPropertyUpdate itemid
             * @property {boolean|null} [remove_property] ItemPropertyUpdate remove_property
             * @property {string|null} [property_name] ItemPropertyUpdate property_name
             * @property {boolean|null} [property_value_bool] ItemPropertyUpdate property_value_bool
             * @property {number|Long|null} [property_value_int] ItemPropertyUpdate property_value_int
             * @property {string|null} [property_value_string] ItemPropertyUpdate property_value_string
             * @property {number|null} [property_value_float] ItemPropertyUpdate property_value_float
             */
    
            /**
             * Constructs a new ItemPropertyUpdate.
             * @memberof CInventory_ModifyItems_Request
             * @classdesc Represents an ItemPropertyUpdate.
             * @implements IItemPropertyUpdate
             * @constructor
             * @param {CInventory_ModifyItems_Request.IItemPropertyUpdate=} [properties] Properties to set
             */
            function ItemPropertyUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ItemPropertyUpdate itemid.
             * @member {number|Long} itemid
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @instance
             */
            ItemPropertyUpdate.prototype.itemid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * ItemPropertyUpdate remove_property.
             * @member {boolean} remove_property
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @instance
             */
            ItemPropertyUpdate.prototype.remove_property = false;
    
            /**
             * ItemPropertyUpdate property_name.
             * @member {string} property_name
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @instance
             */
            ItemPropertyUpdate.prototype.property_name = "";
    
            /**
             * ItemPropertyUpdate property_value_bool.
             * @member {boolean} property_value_bool
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @instance
             */
            ItemPropertyUpdate.prototype.property_value_bool = false;
    
            /**
             * ItemPropertyUpdate property_value_int.
             * @member {number|Long} property_value_int
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @instance
             */
            ItemPropertyUpdate.prototype.property_value_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * ItemPropertyUpdate property_value_string.
             * @member {string} property_value_string
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @instance
             */
            ItemPropertyUpdate.prototype.property_value_string = "";
    
            /**
             * ItemPropertyUpdate property_value_float.
             * @member {number} property_value_float
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @instance
             */
            ItemPropertyUpdate.prototype.property_value_float = 0;
    
            /**
             * Creates a new ItemPropertyUpdate instance using the specified properties.
             * @function create
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @static
             * @param {CInventory_ModifyItems_Request.IItemPropertyUpdate=} [properties] Properties to set
             * @returns {CInventory_ModifyItems_Request.ItemPropertyUpdate} ItemPropertyUpdate instance
             */
            ItemPropertyUpdate.create = function create(properties) {
                return new ItemPropertyUpdate(properties);
            };
    
            /**
             * Encodes the specified ItemPropertyUpdate message. Does not implicitly {@link CInventory_ModifyItems_Request.ItemPropertyUpdate.verify|verify} messages.
             * @function encode
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @static
             * @param {CInventory_ModifyItems_Request.IItemPropertyUpdate} message ItemPropertyUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ItemPropertyUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.itemid != null && message.hasOwnProperty("itemid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.itemid);
                if (message.remove_property != null && message.hasOwnProperty("remove_property"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.remove_property);
                if (message.property_name != null && message.hasOwnProperty("property_name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.property_name);
                if (message.property_value_bool != null && message.hasOwnProperty("property_value_bool"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.property_value_bool);
                if (message.property_value_int != null && message.hasOwnProperty("property_value_int"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.property_value_int);
                if (message.property_value_string != null && message.hasOwnProperty("property_value_string"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.property_value_string);
                if (message.property_value_float != null && message.hasOwnProperty("property_value_float"))
                    writer.uint32(/* id 7, wireType 5 =*/61).float(message.property_value_float);
                return writer;
            };
    
            /**
             * Encodes the specified ItemPropertyUpdate message, length delimited. Does not implicitly {@link CInventory_ModifyItems_Request.ItemPropertyUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @static
             * @param {CInventory_ModifyItems_Request.IItemPropertyUpdate} message ItemPropertyUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ItemPropertyUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ItemPropertyUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CInventory_ModifyItems_Request.ItemPropertyUpdate} ItemPropertyUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ItemPropertyUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_ModifyItems_Request.ItemPropertyUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.itemid = reader.uint64();
                        break;
                    case 2:
                        message.remove_property = reader.bool();
                        break;
                    case 3:
                        message.property_name = reader.string();
                        break;
                    case 4:
                        message.property_value_bool = reader.bool();
                        break;
                    case 5:
                        message.property_value_int = reader.int64();
                        break;
                    case 6:
                        message.property_value_string = reader.string();
                        break;
                    case 7:
                        message.property_value_float = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ItemPropertyUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CInventory_ModifyItems_Request.ItemPropertyUpdate} ItemPropertyUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ItemPropertyUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ItemPropertyUpdate message.
             * @function verify
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ItemPropertyUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.itemid != null && message.hasOwnProperty("itemid"))
                    if (!$util.isInteger(message.itemid) && !(message.itemid && $util.isInteger(message.itemid.low) && $util.isInteger(message.itemid.high)))
                        return "itemid: integer|Long expected";
                if (message.remove_property != null && message.hasOwnProperty("remove_property"))
                    if (typeof message.remove_property !== "boolean")
                        return "remove_property: boolean expected";
                if (message.property_name != null && message.hasOwnProperty("property_name"))
                    if (!$util.isString(message.property_name))
                        return "property_name: string expected";
                if (message.property_value_bool != null && message.hasOwnProperty("property_value_bool"))
                    if (typeof message.property_value_bool !== "boolean")
                        return "property_value_bool: boolean expected";
                if (message.property_value_int != null && message.hasOwnProperty("property_value_int"))
                    if (!$util.isInteger(message.property_value_int) && !(message.property_value_int && $util.isInteger(message.property_value_int.low) && $util.isInteger(message.property_value_int.high)))
                        return "property_value_int: integer|Long expected";
                if (message.property_value_string != null && message.hasOwnProperty("property_value_string"))
                    if (!$util.isString(message.property_value_string))
                        return "property_value_string: string expected";
                if (message.property_value_float != null && message.hasOwnProperty("property_value_float"))
                    if (typeof message.property_value_float !== "number")
                        return "property_value_float: number expected";
                return null;
            };
    
            /**
             * Creates an ItemPropertyUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CInventory_ModifyItems_Request.ItemPropertyUpdate} ItemPropertyUpdate
             */
            ItemPropertyUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.CInventory_ModifyItems_Request.ItemPropertyUpdate)
                    return object;
                var message = new $root.CInventory_ModifyItems_Request.ItemPropertyUpdate();
                if (object.itemid != null)
                    if ($util.Long)
                        (message.itemid = $util.Long.fromValue(object.itemid)).unsigned = true;
                    else if (typeof object.itemid === "string")
                        message.itemid = parseInt(object.itemid, 10);
                    else if (typeof object.itemid === "number")
                        message.itemid = object.itemid;
                    else if (typeof object.itemid === "object")
                        message.itemid = new $util.LongBits(object.itemid.low >>> 0, object.itemid.high >>> 0).toNumber(true);
                if (object.remove_property != null)
                    message.remove_property = Boolean(object.remove_property);
                if (object.property_name != null)
                    message.property_name = String(object.property_name);
                if (object.property_value_bool != null)
                    message.property_value_bool = Boolean(object.property_value_bool);
                if (object.property_value_int != null)
                    if ($util.Long)
                        (message.property_value_int = $util.Long.fromValue(object.property_value_int)).unsigned = false;
                    else if (typeof object.property_value_int === "string")
                        message.property_value_int = parseInt(object.property_value_int, 10);
                    else if (typeof object.property_value_int === "number")
                        message.property_value_int = object.property_value_int;
                    else if (typeof object.property_value_int === "object")
                        message.property_value_int = new $util.LongBits(object.property_value_int.low >>> 0, object.property_value_int.high >>> 0).toNumber();
                if (object.property_value_string != null)
                    message.property_value_string = String(object.property_value_string);
                if (object.property_value_float != null)
                    message.property_value_float = Number(object.property_value_float);
                return message;
            };
    
            /**
             * Creates a plain object from an ItemPropertyUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @static
             * @param {CInventory_ModifyItems_Request.ItemPropertyUpdate} message ItemPropertyUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ItemPropertyUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.itemid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.itemid = options.longs === String ? "0" : 0;
                    object.remove_property = false;
                    object.property_name = "";
                    object.property_value_bool = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.property_value_int = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.property_value_int = options.longs === String ? "0" : 0;
                    object.property_value_string = "";
                    object.property_value_float = 0;
                }
                if (message.itemid != null && message.hasOwnProperty("itemid"))
                    if (typeof message.itemid === "number")
                        object.itemid = options.longs === String ? String(message.itemid) : message.itemid;
                    else
                        object.itemid = options.longs === String ? $util.Long.prototype.toString.call(message.itemid) : options.longs === Number ? new $util.LongBits(message.itemid.low >>> 0, message.itemid.high >>> 0).toNumber(true) : message.itemid;
                if (message.remove_property != null && message.hasOwnProperty("remove_property"))
                    object.remove_property = message.remove_property;
                if (message.property_name != null && message.hasOwnProperty("property_name"))
                    object.property_name = message.property_name;
                if (message.property_value_bool != null && message.hasOwnProperty("property_value_bool"))
                    object.property_value_bool = message.property_value_bool;
                if (message.property_value_int != null && message.hasOwnProperty("property_value_int"))
                    if (typeof message.property_value_int === "number")
                        object.property_value_int = options.longs === String ? String(message.property_value_int) : message.property_value_int;
                    else
                        object.property_value_int = options.longs === String ? $util.Long.prototype.toString.call(message.property_value_int) : options.longs === Number ? new $util.LongBits(message.property_value_int.low >>> 0, message.property_value_int.high >>> 0).toNumber() : message.property_value_int;
                if (message.property_value_string != null && message.hasOwnProperty("property_value_string"))
                    object.property_value_string = message.property_value_string;
                if (message.property_value_float != null && message.hasOwnProperty("property_value_float"))
                    object.property_value_float = options.json && !isFinite(message.property_value_float) ? String(message.property_value_float) : message.property_value_float;
                return object;
            };
    
            /**
             * Converts this ItemPropertyUpdate to JSON.
             * @function toJSON
             * @memberof CInventory_ModifyItems_Request.ItemPropertyUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ItemPropertyUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ItemPropertyUpdate;
        })();
    
        return CInventory_ModifyItems_Request;
    })();
    
    $root.CInventory_ConsumePlaytime_Request = (function() {
    
        /**
         * Properties of a CInventory_ConsumePlaytime_Request.
         * @exports ICInventory_ConsumePlaytime_Request
         * @interface ICInventory_ConsumePlaytime_Request
         * @property {number|null} [appid] CInventory_ConsumePlaytime_Request appid
         * @property {number|Long|null} [itemdefid] CInventory_ConsumePlaytime_Request itemdefid
         */
    
        /**
         * Constructs a new CInventory_ConsumePlaytime_Request.
         * @exports CInventory_ConsumePlaytime_Request
         * @classdesc Represents a CInventory_ConsumePlaytime_Request.
         * @implements ICInventory_ConsumePlaytime_Request
         * @constructor
         * @param {ICInventory_ConsumePlaytime_Request=} [properties] Properties to set
         */
        function CInventory_ConsumePlaytime_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_ConsumePlaytime_Request appid.
         * @member {number} appid
         * @memberof CInventory_ConsumePlaytime_Request
         * @instance
         */
        CInventory_ConsumePlaytime_Request.prototype.appid = 0;
    
        /**
         * CInventory_ConsumePlaytime_Request itemdefid.
         * @member {number|Long} itemdefid
         * @memberof CInventory_ConsumePlaytime_Request
         * @instance
         */
        CInventory_ConsumePlaytime_Request.prototype.itemdefid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CInventory_ConsumePlaytime_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_ConsumePlaytime_Request
         * @static
         * @param {ICInventory_ConsumePlaytime_Request=} [properties] Properties to set
         * @returns {CInventory_ConsumePlaytime_Request} CInventory_ConsumePlaytime_Request instance
         */
        CInventory_ConsumePlaytime_Request.create = function create(properties) {
            return new CInventory_ConsumePlaytime_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_ConsumePlaytime_Request message. Does not implicitly {@link CInventory_ConsumePlaytime_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_ConsumePlaytime_Request
         * @static
         * @param {ICInventory_ConsumePlaytime_Request} message CInventory_ConsumePlaytime_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_ConsumePlaytime_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.itemdefid);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_ConsumePlaytime_Request message, length delimited. Does not implicitly {@link CInventory_ConsumePlaytime_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_ConsumePlaytime_Request
         * @static
         * @param {ICInventory_ConsumePlaytime_Request} message CInventory_ConsumePlaytime_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_ConsumePlaytime_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_ConsumePlaytime_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_ConsumePlaytime_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_ConsumePlaytime_Request} CInventory_ConsumePlaytime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_ConsumePlaytime_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_ConsumePlaytime_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.itemdefid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_ConsumePlaytime_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_ConsumePlaytime_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_ConsumePlaytime_Request} CInventory_ConsumePlaytime_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_ConsumePlaytime_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_ConsumePlaytime_Request message.
         * @function verify
         * @memberof CInventory_ConsumePlaytime_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_ConsumePlaytime_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                if (!$util.isInteger(message.itemdefid) && !(message.itemdefid && $util.isInteger(message.itemdefid.low) && $util.isInteger(message.itemdefid.high)))
                    return "itemdefid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CInventory_ConsumePlaytime_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_ConsumePlaytime_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_ConsumePlaytime_Request} CInventory_ConsumePlaytime_Request
         */
        CInventory_ConsumePlaytime_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_ConsumePlaytime_Request)
                return object;
            var message = new $root.CInventory_ConsumePlaytime_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.itemdefid != null)
                if ($util.Long)
                    (message.itemdefid = $util.Long.fromValue(object.itemdefid)).unsigned = true;
                else if (typeof object.itemdefid === "string")
                    message.itemdefid = parseInt(object.itemdefid, 10);
                else if (typeof object.itemdefid === "number")
                    message.itemdefid = object.itemdefid;
                else if (typeof object.itemdefid === "object")
                    message.itemdefid = new $util.LongBits(object.itemdefid.low >>> 0, object.itemdefid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_ConsumePlaytime_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_ConsumePlaytime_Request
         * @static
         * @param {CInventory_ConsumePlaytime_Request} message CInventory_ConsumePlaytime_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_ConsumePlaytime_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.itemdefid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.itemdefid = options.longs === String ? "0" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                if (typeof message.itemdefid === "number")
                    object.itemdefid = options.longs === String ? String(message.itemdefid) : message.itemdefid;
                else
                    object.itemdefid = options.longs === String ? $util.Long.prototype.toString.call(message.itemdefid) : options.longs === Number ? new $util.LongBits(message.itemdefid.low >>> 0, message.itemdefid.high >>> 0).toNumber(true) : message.itemdefid;
            return object;
        };
    
        /**
         * Converts this CInventory_ConsumePlaytime_Request to JSON.
         * @function toJSON
         * @memberof CInventory_ConsumePlaytime_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_ConsumePlaytime_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_ConsumePlaytime_Request;
    })();
    
    $root.CInventory_ConsumeItem_Request = (function() {
    
        /**
         * Properties of a CInventory_ConsumeItem_Request.
         * @exports ICInventory_ConsumeItem_Request
         * @interface ICInventory_ConsumeItem_Request
         * @property {number|null} [appid] CInventory_ConsumeItem_Request appid
         * @property {number|Long|null} [itemid] CInventory_ConsumeItem_Request itemid
         * @property {number|null} [quantity] CInventory_ConsumeItem_Request quantity
         * @property {string|null} [timestamp] CInventory_ConsumeItem_Request timestamp
         * @property {number|Long|null} [steamid] CInventory_ConsumeItem_Request steamid
         * @property {number|Long|null} [requestid] CInventory_ConsumeItem_Request requestid
         */
    
        /**
         * Constructs a new CInventory_ConsumeItem_Request.
         * @exports CInventory_ConsumeItem_Request
         * @classdesc Represents a CInventory_ConsumeItem_Request.
         * @implements ICInventory_ConsumeItem_Request
         * @constructor
         * @param {ICInventory_ConsumeItem_Request=} [properties] Properties to set
         */
        function CInventory_ConsumeItem_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_ConsumeItem_Request appid.
         * @member {number} appid
         * @memberof CInventory_ConsumeItem_Request
         * @instance
         */
        CInventory_ConsumeItem_Request.prototype.appid = 0;
    
        /**
         * CInventory_ConsumeItem_Request itemid.
         * @member {number|Long} itemid
         * @memberof CInventory_ConsumeItem_Request
         * @instance
         */
        CInventory_ConsumeItem_Request.prototype.itemid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_ConsumeItem_Request quantity.
         * @member {number} quantity
         * @memberof CInventory_ConsumeItem_Request
         * @instance
         */
        CInventory_ConsumeItem_Request.prototype.quantity = 0;
    
        /**
         * CInventory_ConsumeItem_Request timestamp.
         * @member {string} timestamp
         * @memberof CInventory_ConsumeItem_Request
         * @instance
         */
        CInventory_ConsumeItem_Request.prototype.timestamp = "";
    
        /**
         * CInventory_ConsumeItem_Request steamid.
         * @member {number|Long} steamid
         * @memberof CInventory_ConsumeItem_Request
         * @instance
         */
        CInventory_ConsumeItem_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_ConsumeItem_Request requestid.
         * @member {number|Long} requestid
         * @memberof CInventory_ConsumeItem_Request
         * @instance
         */
        CInventory_ConsumeItem_Request.prototype.requestid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CInventory_ConsumeItem_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_ConsumeItem_Request
         * @static
         * @param {ICInventory_ConsumeItem_Request=} [properties] Properties to set
         * @returns {CInventory_ConsumeItem_Request} CInventory_ConsumeItem_Request instance
         */
        CInventory_ConsumeItem_Request.create = function create(properties) {
            return new CInventory_ConsumeItem_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_ConsumeItem_Request message. Does not implicitly {@link CInventory_ConsumeItem_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_ConsumeItem_Request
         * @static
         * @param {ICInventory_ConsumeItem_Request} message CInventory_ConsumeItem_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_ConsumeItem_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.itemid != null && message.hasOwnProperty("itemid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.itemid);
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.quantity);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.timestamp);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.steamid);
            if (message.requestid != null && message.hasOwnProperty("requestid"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.requestid);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_ConsumeItem_Request message, length delimited. Does not implicitly {@link CInventory_ConsumeItem_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_ConsumeItem_Request
         * @static
         * @param {ICInventory_ConsumeItem_Request} message CInventory_ConsumeItem_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_ConsumeItem_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_ConsumeItem_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_ConsumeItem_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_ConsumeItem_Request} CInventory_ConsumeItem_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_ConsumeItem_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_ConsumeItem_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.itemid = reader.uint64();
                    break;
                case 3:
                    message.quantity = reader.uint32();
                    break;
                case 4:
                    message.timestamp = reader.string();
                    break;
                case 5:
                    message.steamid = reader.uint64();
                    break;
                case 6:
                    message.requestid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_ConsumeItem_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_ConsumeItem_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_ConsumeItem_Request} CInventory_ConsumeItem_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_ConsumeItem_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_ConsumeItem_Request message.
         * @function verify
         * @memberof CInventory_ConsumeItem_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_ConsumeItem_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.itemid != null && message.hasOwnProperty("itemid"))
                if (!$util.isInteger(message.itemid) && !(message.itemid && $util.isInteger(message.itemid.low) && $util.isInteger(message.itemid.high)))
                    return "itemid: integer|Long expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isString(message.timestamp))
                    return "timestamp: string expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.requestid != null && message.hasOwnProperty("requestid"))
                if (!$util.isInteger(message.requestid) && !(message.requestid && $util.isInteger(message.requestid.low) && $util.isInteger(message.requestid.high)))
                    return "requestid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CInventory_ConsumeItem_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_ConsumeItem_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_ConsumeItem_Request} CInventory_ConsumeItem_Request
         */
        CInventory_ConsumeItem_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_ConsumeItem_Request)
                return object;
            var message = new $root.CInventory_ConsumeItem_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.itemid != null)
                if ($util.Long)
                    (message.itemid = $util.Long.fromValue(object.itemid)).unsigned = true;
                else if (typeof object.itemid === "string")
                    message.itemid = parseInt(object.itemid, 10);
                else if (typeof object.itemid === "number")
                    message.itemid = object.itemid;
                else if (typeof object.itemid === "object")
                    message.itemid = new $util.LongBits(object.itemid.low >>> 0, object.itemid.high >>> 0).toNumber(true);
            if (object.quantity != null)
                message.quantity = object.quantity >>> 0;
            if (object.timestamp != null)
                message.timestamp = String(object.timestamp);
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            if (object.requestid != null)
                if ($util.Long)
                    (message.requestid = $util.Long.fromValue(object.requestid)).unsigned = true;
                else if (typeof object.requestid === "string")
                    message.requestid = parseInt(object.requestid, 10);
                else if (typeof object.requestid === "number")
                    message.requestid = object.requestid;
                else if (typeof object.requestid === "object")
                    message.requestid = new $util.LongBits(object.requestid.low >>> 0, object.requestid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_ConsumeItem_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_ConsumeItem_Request
         * @static
         * @param {CInventory_ConsumeItem_Request} message CInventory_ConsumeItem_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_ConsumeItem_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.itemid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.itemid = options.longs === String ? "0" : 0;
                object.quantity = 0;
                object.timestamp = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.requestid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.requestid = options.longs === String ? "0" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.itemid != null && message.hasOwnProperty("itemid"))
                if (typeof message.itemid === "number")
                    object.itemid = options.longs === String ? String(message.itemid) : message.itemid;
                else
                    object.itemid = options.longs === String ? $util.Long.prototype.toString.call(message.itemid) : options.longs === Number ? new $util.LongBits(message.itemid.low >>> 0, message.itemid.high >>> 0).toNumber(true) : message.itemid;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            if (message.requestid != null && message.hasOwnProperty("requestid"))
                if (typeof message.requestid === "number")
                    object.requestid = options.longs === String ? String(message.requestid) : message.requestid;
                else
                    object.requestid = options.longs === String ? $util.Long.prototype.toString.call(message.requestid) : options.longs === Number ? new $util.LongBits(message.requestid.low >>> 0, message.requestid.high >>> 0).toNumber(true) : message.requestid;
            return object;
        };
    
        /**
         * Converts this CInventory_ConsumeItem_Request to JSON.
         * @function toJSON
         * @memberof CInventory_ConsumeItem_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_ConsumeItem_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_ConsumeItem_Request;
    })();
    
    $root.CInventory_DevSetNextDrop_Request = (function() {
    
        /**
         * Properties of a CInventory_DevSetNextDrop_Request.
         * @exports ICInventory_DevSetNextDrop_Request
         * @interface ICInventory_DevSetNextDrop_Request
         * @property {number|null} [appid] CInventory_DevSetNextDrop_Request appid
         * @property {number|Long|null} [itemdefid] CInventory_DevSetNextDrop_Request itemdefid
         * @property {string|null} [droptime] CInventory_DevSetNextDrop_Request droptime
         */
    
        /**
         * Constructs a new CInventory_DevSetNextDrop_Request.
         * @exports CInventory_DevSetNextDrop_Request
         * @classdesc Represents a CInventory_DevSetNextDrop_Request.
         * @implements ICInventory_DevSetNextDrop_Request
         * @constructor
         * @param {ICInventory_DevSetNextDrop_Request=} [properties] Properties to set
         */
        function CInventory_DevSetNextDrop_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_DevSetNextDrop_Request appid.
         * @member {number} appid
         * @memberof CInventory_DevSetNextDrop_Request
         * @instance
         */
        CInventory_DevSetNextDrop_Request.prototype.appid = 0;
    
        /**
         * CInventory_DevSetNextDrop_Request itemdefid.
         * @member {number|Long} itemdefid
         * @memberof CInventory_DevSetNextDrop_Request
         * @instance
         */
        CInventory_DevSetNextDrop_Request.prototype.itemdefid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_DevSetNextDrop_Request droptime.
         * @member {string} droptime
         * @memberof CInventory_DevSetNextDrop_Request
         * @instance
         */
        CInventory_DevSetNextDrop_Request.prototype.droptime = "";
    
        /**
         * Creates a new CInventory_DevSetNextDrop_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_DevSetNextDrop_Request
         * @static
         * @param {ICInventory_DevSetNextDrop_Request=} [properties] Properties to set
         * @returns {CInventory_DevSetNextDrop_Request} CInventory_DevSetNextDrop_Request instance
         */
        CInventory_DevSetNextDrop_Request.create = function create(properties) {
            return new CInventory_DevSetNextDrop_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_DevSetNextDrop_Request message. Does not implicitly {@link CInventory_DevSetNextDrop_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_DevSetNextDrop_Request
         * @static
         * @param {ICInventory_DevSetNextDrop_Request} message CInventory_DevSetNextDrop_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_DevSetNextDrop_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.itemdefid);
            if (message.droptime != null && message.hasOwnProperty("droptime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.droptime);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_DevSetNextDrop_Request message, length delimited. Does not implicitly {@link CInventory_DevSetNextDrop_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_DevSetNextDrop_Request
         * @static
         * @param {ICInventory_DevSetNextDrop_Request} message CInventory_DevSetNextDrop_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_DevSetNextDrop_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_DevSetNextDrop_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_DevSetNextDrop_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_DevSetNextDrop_Request} CInventory_DevSetNextDrop_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_DevSetNextDrop_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_DevSetNextDrop_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.itemdefid = reader.uint64();
                    break;
                case 3:
                    message.droptime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_DevSetNextDrop_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_DevSetNextDrop_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_DevSetNextDrop_Request} CInventory_DevSetNextDrop_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_DevSetNextDrop_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_DevSetNextDrop_Request message.
         * @function verify
         * @memberof CInventory_DevSetNextDrop_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_DevSetNextDrop_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                if (!$util.isInteger(message.itemdefid) && !(message.itemdefid && $util.isInteger(message.itemdefid.low) && $util.isInteger(message.itemdefid.high)))
                    return "itemdefid: integer|Long expected";
            if (message.droptime != null && message.hasOwnProperty("droptime"))
                if (!$util.isString(message.droptime))
                    return "droptime: string expected";
            return null;
        };
    
        /**
         * Creates a CInventory_DevSetNextDrop_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_DevSetNextDrop_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_DevSetNextDrop_Request} CInventory_DevSetNextDrop_Request
         */
        CInventory_DevSetNextDrop_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_DevSetNextDrop_Request)
                return object;
            var message = new $root.CInventory_DevSetNextDrop_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.itemdefid != null)
                if ($util.Long)
                    (message.itemdefid = $util.Long.fromValue(object.itemdefid)).unsigned = true;
                else if (typeof object.itemdefid === "string")
                    message.itemdefid = parseInt(object.itemdefid, 10);
                else if (typeof object.itemdefid === "number")
                    message.itemdefid = object.itemdefid;
                else if (typeof object.itemdefid === "object")
                    message.itemdefid = new $util.LongBits(object.itemdefid.low >>> 0, object.itemdefid.high >>> 0).toNumber(true);
            if (object.droptime != null)
                message.droptime = String(object.droptime);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_DevSetNextDrop_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_DevSetNextDrop_Request
         * @static
         * @param {CInventory_DevSetNextDrop_Request} message CInventory_DevSetNextDrop_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_DevSetNextDrop_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.itemdefid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.itemdefid = options.longs === String ? "0" : 0;
                object.droptime = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                if (typeof message.itemdefid === "number")
                    object.itemdefid = options.longs === String ? String(message.itemdefid) : message.itemdefid;
                else
                    object.itemdefid = options.longs === String ? $util.Long.prototype.toString.call(message.itemdefid) : options.longs === Number ? new $util.LongBits(message.itemdefid.low >>> 0, message.itemdefid.high >>> 0).toNumber(true) : message.itemdefid;
            if (message.droptime != null && message.hasOwnProperty("droptime"))
                object.droptime = message.droptime;
            return object;
        };
    
        /**
         * Converts this CInventory_DevSetNextDrop_Request to JSON.
         * @function toJSON
         * @memberof CInventory_DevSetNextDrop_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_DevSetNextDrop_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_DevSetNextDrop_Request;
    })();
    
    $root.CInventory_SplitItemStack_Request = (function() {
    
        /**
         * Properties of a CInventory_SplitItemStack_Request.
         * @exports ICInventory_SplitItemStack_Request
         * @interface ICInventory_SplitItemStack_Request
         * @property {number|null} [appid] CInventory_SplitItemStack_Request appid
         * @property {number|Long|null} [itemid] CInventory_SplitItemStack_Request itemid
         * @property {number|null} [quantity] CInventory_SplitItemStack_Request quantity
         */
    
        /**
         * Constructs a new CInventory_SplitItemStack_Request.
         * @exports CInventory_SplitItemStack_Request
         * @classdesc Represents a CInventory_SplitItemStack_Request.
         * @implements ICInventory_SplitItemStack_Request
         * @constructor
         * @param {ICInventory_SplitItemStack_Request=} [properties] Properties to set
         */
        function CInventory_SplitItemStack_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_SplitItemStack_Request appid.
         * @member {number} appid
         * @memberof CInventory_SplitItemStack_Request
         * @instance
         */
        CInventory_SplitItemStack_Request.prototype.appid = 0;
    
        /**
         * CInventory_SplitItemStack_Request itemid.
         * @member {number|Long} itemid
         * @memberof CInventory_SplitItemStack_Request
         * @instance
         */
        CInventory_SplitItemStack_Request.prototype.itemid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_SplitItemStack_Request quantity.
         * @member {number} quantity
         * @memberof CInventory_SplitItemStack_Request
         * @instance
         */
        CInventory_SplitItemStack_Request.prototype.quantity = 0;
    
        /**
         * Creates a new CInventory_SplitItemStack_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_SplitItemStack_Request
         * @static
         * @param {ICInventory_SplitItemStack_Request=} [properties] Properties to set
         * @returns {CInventory_SplitItemStack_Request} CInventory_SplitItemStack_Request instance
         */
        CInventory_SplitItemStack_Request.create = function create(properties) {
            return new CInventory_SplitItemStack_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_SplitItemStack_Request message. Does not implicitly {@link CInventory_SplitItemStack_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_SplitItemStack_Request
         * @static
         * @param {ICInventory_SplitItemStack_Request} message CInventory_SplitItemStack_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_SplitItemStack_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.itemid != null && message.hasOwnProperty("itemid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.itemid);
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.quantity);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_SplitItemStack_Request message, length delimited. Does not implicitly {@link CInventory_SplitItemStack_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_SplitItemStack_Request
         * @static
         * @param {ICInventory_SplitItemStack_Request} message CInventory_SplitItemStack_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_SplitItemStack_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_SplitItemStack_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_SplitItemStack_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_SplitItemStack_Request} CInventory_SplitItemStack_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_SplitItemStack_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_SplitItemStack_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.itemid = reader.uint64();
                    break;
                case 3:
                    message.quantity = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_SplitItemStack_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_SplitItemStack_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_SplitItemStack_Request} CInventory_SplitItemStack_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_SplitItemStack_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_SplitItemStack_Request message.
         * @function verify
         * @memberof CInventory_SplitItemStack_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_SplitItemStack_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.itemid != null && message.hasOwnProperty("itemid"))
                if (!$util.isInteger(message.itemid) && !(message.itemid && $util.isInteger(message.itemid.low) && $util.isInteger(message.itemid.high)))
                    return "itemid: integer|Long expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            return null;
        };
    
        /**
         * Creates a CInventory_SplitItemStack_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_SplitItemStack_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_SplitItemStack_Request} CInventory_SplitItemStack_Request
         */
        CInventory_SplitItemStack_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_SplitItemStack_Request)
                return object;
            var message = new $root.CInventory_SplitItemStack_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.itemid != null)
                if ($util.Long)
                    (message.itemid = $util.Long.fromValue(object.itemid)).unsigned = true;
                else if (typeof object.itemid === "string")
                    message.itemid = parseInt(object.itemid, 10);
                else if (typeof object.itemid === "number")
                    message.itemid = object.itemid;
                else if (typeof object.itemid === "object")
                    message.itemid = new $util.LongBits(object.itemid.low >>> 0, object.itemid.high >>> 0).toNumber(true);
            if (object.quantity != null)
                message.quantity = object.quantity >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_SplitItemStack_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_SplitItemStack_Request
         * @static
         * @param {CInventory_SplitItemStack_Request} message CInventory_SplitItemStack_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_SplitItemStack_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.itemid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.itemid = options.longs === String ? "0" : 0;
                object.quantity = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.itemid != null && message.hasOwnProperty("itemid"))
                if (typeof message.itemid === "number")
                    object.itemid = options.longs === String ? String(message.itemid) : message.itemid;
                else
                    object.itemid = options.longs === String ? $util.Long.prototype.toString.call(message.itemid) : options.longs === Number ? new $util.LongBits(message.itemid.low >>> 0, message.itemid.high >>> 0).toNumber(true) : message.itemid;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            return object;
        };
    
        /**
         * Converts this CInventory_SplitItemStack_Request to JSON.
         * @function toJSON
         * @memberof CInventory_SplitItemStack_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_SplitItemStack_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_SplitItemStack_Request;
    })();
    
    $root.CInventory_CombineItemStacks_Request = (function() {
    
        /**
         * Properties of a CInventory_CombineItemStacks_Request.
         * @exports ICInventory_CombineItemStacks_Request
         * @interface ICInventory_CombineItemStacks_Request
         * @property {number|null} [appid] CInventory_CombineItemStacks_Request appid
         * @property {number|Long|null} [fromitemid] CInventory_CombineItemStacks_Request fromitemid
         * @property {number|Long|null} [destitemid] CInventory_CombineItemStacks_Request destitemid
         * @property {number|null} [quantity] CInventory_CombineItemStacks_Request quantity
         */
    
        /**
         * Constructs a new CInventory_CombineItemStacks_Request.
         * @exports CInventory_CombineItemStacks_Request
         * @classdesc Represents a CInventory_CombineItemStacks_Request.
         * @implements ICInventory_CombineItemStacks_Request
         * @constructor
         * @param {ICInventory_CombineItemStacks_Request=} [properties] Properties to set
         */
        function CInventory_CombineItemStacks_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_CombineItemStacks_Request appid.
         * @member {number} appid
         * @memberof CInventory_CombineItemStacks_Request
         * @instance
         */
        CInventory_CombineItemStacks_Request.prototype.appid = 0;
    
        /**
         * CInventory_CombineItemStacks_Request fromitemid.
         * @member {number|Long} fromitemid
         * @memberof CInventory_CombineItemStacks_Request
         * @instance
         */
        CInventory_CombineItemStacks_Request.prototype.fromitemid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_CombineItemStacks_Request destitemid.
         * @member {number|Long} destitemid
         * @memberof CInventory_CombineItemStacks_Request
         * @instance
         */
        CInventory_CombineItemStacks_Request.prototype.destitemid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_CombineItemStacks_Request quantity.
         * @member {number} quantity
         * @memberof CInventory_CombineItemStacks_Request
         * @instance
         */
        CInventory_CombineItemStacks_Request.prototype.quantity = 0;
    
        /**
         * Creates a new CInventory_CombineItemStacks_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_CombineItemStacks_Request
         * @static
         * @param {ICInventory_CombineItemStacks_Request=} [properties] Properties to set
         * @returns {CInventory_CombineItemStacks_Request} CInventory_CombineItemStacks_Request instance
         */
        CInventory_CombineItemStacks_Request.create = function create(properties) {
            return new CInventory_CombineItemStacks_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_CombineItemStacks_Request message. Does not implicitly {@link CInventory_CombineItemStacks_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_CombineItemStacks_Request
         * @static
         * @param {ICInventory_CombineItemStacks_Request} message CInventory_CombineItemStacks_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_CombineItemStacks_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.fromitemid != null && message.hasOwnProperty("fromitemid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.fromitemid);
            if (message.destitemid != null && message.hasOwnProperty("destitemid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.destitemid);
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.quantity);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_CombineItemStacks_Request message, length delimited. Does not implicitly {@link CInventory_CombineItemStacks_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_CombineItemStacks_Request
         * @static
         * @param {ICInventory_CombineItemStacks_Request} message CInventory_CombineItemStacks_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_CombineItemStacks_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_CombineItemStacks_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_CombineItemStacks_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_CombineItemStacks_Request} CInventory_CombineItemStacks_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_CombineItemStacks_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_CombineItemStacks_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.fromitemid = reader.uint64();
                    break;
                case 3:
                    message.destitemid = reader.uint64();
                    break;
                case 4:
                    message.quantity = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_CombineItemStacks_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_CombineItemStacks_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_CombineItemStacks_Request} CInventory_CombineItemStacks_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_CombineItemStacks_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_CombineItemStacks_Request message.
         * @function verify
         * @memberof CInventory_CombineItemStacks_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_CombineItemStacks_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.fromitemid != null && message.hasOwnProperty("fromitemid"))
                if (!$util.isInteger(message.fromitemid) && !(message.fromitemid && $util.isInteger(message.fromitemid.low) && $util.isInteger(message.fromitemid.high)))
                    return "fromitemid: integer|Long expected";
            if (message.destitemid != null && message.hasOwnProperty("destitemid"))
                if (!$util.isInteger(message.destitemid) && !(message.destitemid && $util.isInteger(message.destitemid.low) && $util.isInteger(message.destitemid.high)))
                    return "destitemid: integer|Long expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            return null;
        };
    
        /**
         * Creates a CInventory_CombineItemStacks_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_CombineItemStacks_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_CombineItemStacks_Request} CInventory_CombineItemStacks_Request
         */
        CInventory_CombineItemStacks_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_CombineItemStacks_Request)
                return object;
            var message = new $root.CInventory_CombineItemStacks_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.fromitemid != null)
                if ($util.Long)
                    (message.fromitemid = $util.Long.fromValue(object.fromitemid)).unsigned = true;
                else if (typeof object.fromitemid === "string")
                    message.fromitemid = parseInt(object.fromitemid, 10);
                else if (typeof object.fromitemid === "number")
                    message.fromitemid = object.fromitemid;
                else if (typeof object.fromitemid === "object")
                    message.fromitemid = new $util.LongBits(object.fromitemid.low >>> 0, object.fromitemid.high >>> 0).toNumber(true);
            if (object.destitemid != null)
                if ($util.Long)
                    (message.destitemid = $util.Long.fromValue(object.destitemid)).unsigned = true;
                else if (typeof object.destitemid === "string")
                    message.destitemid = parseInt(object.destitemid, 10);
                else if (typeof object.destitemid === "number")
                    message.destitemid = object.destitemid;
                else if (typeof object.destitemid === "object")
                    message.destitemid = new $util.LongBits(object.destitemid.low >>> 0, object.destitemid.high >>> 0).toNumber(true);
            if (object.quantity != null)
                message.quantity = object.quantity >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_CombineItemStacks_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_CombineItemStacks_Request
         * @static
         * @param {CInventory_CombineItemStacks_Request} message CInventory_CombineItemStacks_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_CombineItemStacks_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.fromitemid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fromitemid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.destitemid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.destitemid = options.longs === String ? "0" : 0;
                object.quantity = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.fromitemid != null && message.hasOwnProperty("fromitemid"))
                if (typeof message.fromitemid === "number")
                    object.fromitemid = options.longs === String ? String(message.fromitemid) : message.fromitemid;
                else
                    object.fromitemid = options.longs === String ? $util.Long.prototype.toString.call(message.fromitemid) : options.longs === Number ? new $util.LongBits(message.fromitemid.low >>> 0, message.fromitemid.high >>> 0).toNumber(true) : message.fromitemid;
            if (message.destitemid != null && message.hasOwnProperty("destitemid"))
                if (typeof message.destitemid === "number")
                    object.destitemid = options.longs === String ? String(message.destitemid) : message.destitemid;
                else
                    object.destitemid = options.longs === String ? $util.Long.prototype.toString.call(message.destitemid) : options.longs === Number ? new $util.LongBits(message.destitemid.low >>> 0, message.destitemid.high >>> 0).toNumber(true) : message.destitemid;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            return object;
        };
    
        /**
         * Converts this CInventory_CombineItemStacks_Request to JSON.
         * @function toJSON
         * @memberof CInventory_CombineItemStacks_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_CombineItemStacks_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_CombineItemStacks_Request;
    })();
    
    $root.CInventory_GetItemDefMeta_Request = (function() {
    
        /**
         * Properties of a CInventory_GetItemDefMeta_Request.
         * @exports ICInventory_GetItemDefMeta_Request
         * @interface ICInventory_GetItemDefMeta_Request
         * @property {number|null} [appid] CInventory_GetItemDefMeta_Request appid
         */
    
        /**
         * Constructs a new CInventory_GetItemDefMeta_Request.
         * @exports CInventory_GetItemDefMeta_Request
         * @classdesc Represents a CInventory_GetItemDefMeta_Request.
         * @implements ICInventory_GetItemDefMeta_Request
         * @constructor
         * @param {ICInventory_GetItemDefMeta_Request=} [properties] Properties to set
         */
        function CInventory_GetItemDefMeta_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_GetItemDefMeta_Request appid.
         * @member {number} appid
         * @memberof CInventory_GetItemDefMeta_Request
         * @instance
         */
        CInventory_GetItemDefMeta_Request.prototype.appid = 0;
    
        /**
         * Creates a new CInventory_GetItemDefMeta_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_GetItemDefMeta_Request
         * @static
         * @param {ICInventory_GetItemDefMeta_Request=} [properties] Properties to set
         * @returns {CInventory_GetItemDefMeta_Request} CInventory_GetItemDefMeta_Request instance
         */
        CInventory_GetItemDefMeta_Request.create = function create(properties) {
            return new CInventory_GetItemDefMeta_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_GetItemDefMeta_Request message. Does not implicitly {@link CInventory_GetItemDefMeta_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_GetItemDefMeta_Request
         * @static
         * @param {ICInventory_GetItemDefMeta_Request} message CInventory_GetItemDefMeta_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetItemDefMeta_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_GetItemDefMeta_Request message, length delimited. Does not implicitly {@link CInventory_GetItemDefMeta_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_GetItemDefMeta_Request
         * @static
         * @param {ICInventory_GetItemDefMeta_Request} message CInventory_GetItemDefMeta_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetItemDefMeta_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_GetItemDefMeta_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_GetItemDefMeta_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_GetItemDefMeta_Request} CInventory_GetItemDefMeta_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetItemDefMeta_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_GetItemDefMeta_Request();
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
         * Decodes a CInventory_GetItemDefMeta_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_GetItemDefMeta_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_GetItemDefMeta_Request} CInventory_GetItemDefMeta_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetItemDefMeta_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_GetItemDefMeta_Request message.
         * @function verify
         * @memberof CInventory_GetItemDefMeta_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_GetItemDefMeta_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CInventory_GetItemDefMeta_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_GetItemDefMeta_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_GetItemDefMeta_Request} CInventory_GetItemDefMeta_Request
         */
        CInventory_GetItemDefMeta_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_GetItemDefMeta_Request)
                return object;
            var message = new $root.CInventory_GetItemDefMeta_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_GetItemDefMeta_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_GetItemDefMeta_Request
         * @static
         * @param {CInventory_GetItemDefMeta_Request} message CInventory_GetItemDefMeta_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_GetItemDefMeta_Request.toObject = function toObject(message, options) {
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
         * Converts this CInventory_GetItemDefMeta_Request to JSON.
         * @function toJSON
         * @memberof CInventory_GetItemDefMeta_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_GetItemDefMeta_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_GetItemDefMeta_Request;
    })();
    
    $root.CInventory_GetItemDefMeta_Response = (function() {
    
        /**
         * Properties of a CInventory_GetItemDefMeta_Response.
         * @exports ICInventory_GetItemDefMeta_Response
         * @interface ICInventory_GetItemDefMeta_Response
         * @property {number|null} [modified] CInventory_GetItemDefMeta_Response modified
         * @property {string|null} [digest] CInventory_GetItemDefMeta_Response digest
         */
    
        /**
         * Constructs a new CInventory_GetItemDefMeta_Response.
         * @exports CInventory_GetItemDefMeta_Response
         * @classdesc Represents a CInventory_GetItemDefMeta_Response.
         * @implements ICInventory_GetItemDefMeta_Response
         * @constructor
         * @param {ICInventory_GetItemDefMeta_Response=} [properties] Properties to set
         */
        function CInventory_GetItemDefMeta_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_GetItemDefMeta_Response modified.
         * @member {number} modified
         * @memberof CInventory_GetItemDefMeta_Response
         * @instance
         */
        CInventory_GetItemDefMeta_Response.prototype.modified = 0;
    
        /**
         * CInventory_GetItemDefMeta_Response digest.
         * @member {string} digest
         * @memberof CInventory_GetItemDefMeta_Response
         * @instance
         */
        CInventory_GetItemDefMeta_Response.prototype.digest = "";
    
        /**
         * Creates a new CInventory_GetItemDefMeta_Response instance using the specified properties.
         * @function create
         * @memberof CInventory_GetItemDefMeta_Response
         * @static
         * @param {ICInventory_GetItemDefMeta_Response=} [properties] Properties to set
         * @returns {CInventory_GetItemDefMeta_Response} CInventory_GetItemDefMeta_Response instance
         */
        CInventory_GetItemDefMeta_Response.create = function create(properties) {
            return new CInventory_GetItemDefMeta_Response(properties);
        };
    
        /**
         * Encodes the specified CInventory_GetItemDefMeta_Response message. Does not implicitly {@link CInventory_GetItemDefMeta_Response.verify|verify} messages.
         * @function encode
         * @memberof CInventory_GetItemDefMeta_Response
         * @static
         * @param {ICInventory_GetItemDefMeta_Response} message CInventory_GetItemDefMeta_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetItemDefMeta_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.modified != null && message.hasOwnProperty("modified"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.modified);
            if (message.digest != null && message.hasOwnProperty("digest"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.digest);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_GetItemDefMeta_Response message, length delimited. Does not implicitly {@link CInventory_GetItemDefMeta_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_GetItemDefMeta_Response
         * @static
         * @param {ICInventory_GetItemDefMeta_Response} message CInventory_GetItemDefMeta_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetItemDefMeta_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_GetItemDefMeta_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_GetItemDefMeta_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_GetItemDefMeta_Response} CInventory_GetItemDefMeta_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetItemDefMeta_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_GetItemDefMeta_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.modified = reader.uint32();
                    break;
                case 2:
                    message.digest = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_GetItemDefMeta_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_GetItemDefMeta_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_GetItemDefMeta_Response} CInventory_GetItemDefMeta_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetItemDefMeta_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_GetItemDefMeta_Response message.
         * @function verify
         * @memberof CInventory_GetItemDefMeta_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_GetItemDefMeta_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.modified != null && message.hasOwnProperty("modified"))
                if (!$util.isInteger(message.modified))
                    return "modified: integer expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!$util.isString(message.digest))
                    return "digest: string expected";
            return null;
        };
    
        /**
         * Creates a CInventory_GetItemDefMeta_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_GetItemDefMeta_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_GetItemDefMeta_Response} CInventory_GetItemDefMeta_Response
         */
        CInventory_GetItemDefMeta_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_GetItemDefMeta_Response)
                return object;
            var message = new $root.CInventory_GetItemDefMeta_Response();
            if (object.modified != null)
                message.modified = object.modified >>> 0;
            if (object.digest != null)
                message.digest = String(object.digest);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_GetItemDefMeta_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_GetItemDefMeta_Response
         * @static
         * @param {CInventory_GetItemDefMeta_Response} message CInventory_GetItemDefMeta_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_GetItemDefMeta_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.modified = 0;
                object.digest = "";
            }
            if (message.modified != null && message.hasOwnProperty("modified"))
                object.modified = message.modified;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = message.digest;
            return object;
        };
    
        /**
         * Converts this CInventory_GetItemDefMeta_Response to JSON.
         * @function toJSON
         * @memberof CInventory_GetItemDefMeta_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_GetItemDefMeta_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_GetItemDefMeta_Response;
    })();
    
    $root.CInventory_GetUserPurchaseInfo_Request = (function() {
    
        /**
         * Properties of a CInventory_GetUserPurchaseInfo_Request.
         * @exports ICInventory_GetUserPurchaseInfo_Request
         * @interface ICInventory_GetUserPurchaseInfo_Request
         */
    
        /**
         * Constructs a new CInventory_GetUserPurchaseInfo_Request.
         * @exports CInventory_GetUserPurchaseInfo_Request
         * @classdesc Represents a CInventory_GetUserPurchaseInfo_Request.
         * @implements ICInventory_GetUserPurchaseInfo_Request
         * @constructor
         * @param {ICInventory_GetUserPurchaseInfo_Request=} [properties] Properties to set
         */
        function CInventory_GetUserPurchaseInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CInventory_GetUserPurchaseInfo_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @static
         * @param {ICInventory_GetUserPurchaseInfo_Request=} [properties] Properties to set
         * @returns {CInventory_GetUserPurchaseInfo_Request} CInventory_GetUserPurchaseInfo_Request instance
         */
        CInventory_GetUserPurchaseInfo_Request.create = function create(properties) {
            return new CInventory_GetUserPurchaseInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_GetUserPurchaseInfo_Request message. Does not implicitly {@link CInventory_GetUserPurchaseInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @static
         * @param {ICInventory_GetUserPurchaseInfo_Request} message CInventory_GetUserPurchaseInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetUserPurchaseInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_GetUserPurchaseInfo_Request message, length delimited. Does not implicitly {@link CInventory_GetUserPurchaseInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @static
         * @param {ICInventory_GetUserPurchaseInfo_Request} message CInventory_GetUserPurchaseInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetUserPurchaseInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_GetUserPurchaseInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_GetUserPurchaseInfo_Request} CInventory_GetUserPurchaseInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetUserPurchaseInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_GetUserPurchaseInfo_Request();
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
         * Decodes a CInventory_GetUserPurchaseInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_GetUserPurchaseInfo_Request} CInventory_GetUserPurchaseInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetUserPurchaseInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_GetUserPurchaseInfo_Request message.
         * @function verify
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_GetUserPurchaseInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CInventory_GetUserPurchaseInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_GetUserPurchaseInfo_Request} CInventory_GetUserPurchaseInfo_Request
         */
        CInventory_GetUserPurchaseInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_GetUserPurchaseInfo_Request)
                return object;
            return new $root.CInventory_GetUserPurchaseInfo_Request();
        };
    
        /**
         * Creates a plain object from a CInventory_GetUserPurchaseInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @static
         * @param {CInventory_GetUserPurchaseInfo_Request} message CInventory_GetUserPurchaseInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_GetUserPurchaseInfo_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CInventory_GetUserPurchaseInfo_Request to JSON.
         * @function toJSON
         * @memberof CInventory_GetUserPurchaseInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_GetUserPurchaseInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_GetUserPurchaseInfo_Request;
    })();
    
    $root.CInventory_GetUserPurchaseInfo_Response = (function() {
    
        /**
         * Properties of a CInventory_GetUserPurchaseInfo_Response.
         * @exports ICInventory_GetUserPurchaseInfo_Response
         * @interface ICInventory_GetUserPurchaseInfo_Response
         * @property {number|null} [ecurrency] CInventory_GetUserPurchaseInfo_Response ecurrency
         */
    
        /**
         * Constructs a new CInventory_GetUserPurchaseInfo_Response.
         * @exports CInventory_GetUserPurchaseInfo_Response
         * @classdesc Represents a CInventory_GetUserPurchaseInfo_Response.
         * @implements ICInventory_GetUserPurchaseInfo_Response
         * @constructor
         * @param {ICInventory_GetUserPurchaseInfo_Response=} [properties] Properties to set
         */
        function CInventory_GetUserPurchaseInfo_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_GetUserPurchaseInfo_Response ecurrency.
         * @member {number} ecurrency
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @instance
         */
        CInventory_GetUserPurchaseInfo_Response.prototype.ecurrency = 0;
    
        /**
         * Creates a new CInventory_GetUserPurchaseInfo_Response instance using the specified properties.
         * @function create
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @static
         * @param {ICInventory_GetUserPurchaseInfo_Response=} [properties] Properties to set
         * @returns {CInventory_GetUserPurchaseInfo_Response} CInventory_GetUserPurchaseInfo_Response instance
         */
        CInventory_GetUserPurchaseInfo_Response.create = function create(properties) {
            return new CInventory_GetUserPurchaseInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CInventory_GetUserPurchaseInfo_Response message. Does not implicitly {@link CInventory_GetUserPurchaseInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @static
         * @param {ICInventory_GetUserPurchaseInfo_Response} message CInventory_GetUserPurchaseInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetUserPurchaseInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ecurrency != null && message.hasOwnProperty("ecurrency"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ecurrency);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_GetUserPurchaseInfo_Response message, length delimited. Does not implicitly {@link CInventory_GetUserPurchaseInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @static
         * @param {ICInventory_GetUserPurchaseInfo_Response} message CInventory_GetUserPurchaseInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_GetUserPurchaseInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_GetUserPurchaseInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_GetUserPurchaseInfo_Response} CInventory_GetUserPurchaseInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetUserPurchaseInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_GetUserPurchaseInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ecurrency = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_GetUserPurchaseInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_GetUserPurchaseInfo_Response} CInventory_GetUserPurchaseInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_GetUserPurchaseInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_GetUserPurchaseInfo_Response message.
         * @function verify
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_GetUserPurchaseInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ecurrency != null && message.hasOwnProperty("ecurrency"))
                if (!$util.isInteger(message.ecurrency))
                    return "ecurrency: integer expected";
            return null;
        };
    
        /**
         * Creates a CInventory_GetUserPurchaseInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_GetUserPurchaseInfo_Response} CInventory_GetUserPurchaseInfo_Response
         */
        CInventory_GetUserPurchaseInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_GetUserPurchaseInfo_Response)
                return object;
            var message = new $root.CInventory_GetUserPurchaseInfo_Response();
            if (object.ecurrency != null)
                message.ecurrency = object.ecurrency | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_GetUserPurchaseInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @static
         * @param {CInventory_GetUserPurchaseInfo_Response} message CInventory_GetUserPurchaseInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_GetUserPurchaseInfo_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ecurrency = 0;
            if (message.ecurrency != null && message.hasOwnProperty("ecurrency"))
                object.ecurrency = message.ecurrency;
            return object;
        };
    
        /**
         * Converts this CInventory_GetUserPurchaseInfo_Response to JSON.
         * @function toJSON
         * @memberof CInventory_GetUserPurchaseInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_GetUserPurchaseInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_GetUserPurchaseInfo_Response;
    })();
    
    $root.CInventory_PurchaseInit_Request = (function() {
    
        /**
         * Properties of a CInventory_PurchaseInit_Request.
         * @exports ICInventory_PurchaseInit_Request
         * @interface ICInventory_PurchaseInit_Request
         * @property {number|null} [appid] CInventory_PurchaseInit_Request appid
         * @property {number|null} [language] CInventory_PurchaseInit_Request language
         * @property {Array.<CInventory_PurchaseInit_Request.ILineItem>|null} [line_items] CInventory_PurchaseInit_Request line_items
         */
    
        /**
         * Constructs a new CInventory_PurchaseInit_Request.
         * @exports CInventory_PurchaseInit_Request
         * @classdesc Represents a CInventory_PurchaseInit_Request.
         * @implements ICInventory_PurchaseInit_Request
         * @constructor
         * @param {ICInventory_PurchaseInit_Request=} [properties] Properties to set
         */
        function CInventory_PurchaseInit_Request(properties) {
            this.line_items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_PurchaseInit_Request appid.
         * @member {number} appid
         * @memberof CInventory_PurchaseInit_Request
         * @instance
         */
        CInventory_PurchaseInit_Request.prototype.appid = 0;
    
        /**
         * CInventory_PurchaseInit_Request language.
         * @member {number} language
         * @memberof CInventory_PurchaseInit_Request
         * @instance
         */
        CInventory_PurchaseInit_Request.prototype.language = 0;
    
        /**
         * CInventory_PurchaseInit_Request line_items.
         * @member {Array.<CInventory_PurchaseInit_Request.ILineItem>} line_items
         * @memberof CInventory_PurchaseInit_Request
         * @instance
         */
        CInventory_PurchaseInit_Request.prototype.line_items = $util.emptyArray;
    
        /**
         * Creates a new CInventory_PurchaseInit_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_PurchaseInit_Request
         * @static
         * @param {ICInventory_PurchaseInit_Request=} [properties] Properties to set
         * @returns {CInventory_PurchaseInit_Request} CInventory_PurchaseInit_Request instance
         */
        CInventory_PurchaseInit_Request.create = function create(properties) {
            return new CInventory_PurchaseInit_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_PurchaseInit_Request message. Does not implicitly {@link CInventory_PurchaseInit_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_PurchaseInit_Request
         * @static
         * @param {ICInventory_PurchaseInit_Request} message CInventory_PurchaseInit_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_PurchaseInit_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.language);
            if (message.line_items != null && message.line_items.length)
                for (var i = 0; i < message.line_items.length; ++i)
                    $root.CInventory_PurchaseInit_Request.LineItem.encode(message.line_items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_PurchaseInit_Request message, length delimited. Does not implicitly {@link CInventory_PurchaseInit_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_PurchaseInit_Request
         * @static
         * @param {ICInventory_PurchaseInit_Request} message CInventory_PurchaseInit_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_PurchaseInit_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_PurchaseInit_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_PurchaseInit_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_PurchaseInit_Request} CInventory_PurchaseInit_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_PurchaseInit_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_PurchaseInit_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.language = reader.int32();
                    break;
                case 3:
                    if (!(message.line_items && message.line_items.length))
                        message.line_items = [];
                    message.line_items.push($root.CInventory_PurchaseInit_Request.LineItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_PurchaseInit_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_PurchaseInit_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_PurchaseInit_Request} CInventory_PurchaseInit_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_PurchaseInit_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_PurchaseInit_Request message.
         * @function verify
         * @memberof CInventory_PurchaseInit_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_PurchaseInit_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isInteger(message.language))
                    return "language: integer expected";
            if (message.line_items != null && message.hasOwnProperty("line_items")) {
                if (!Array.isArray(message.line_items))
                    return "line_items: array expected";
                for (var i = 0; i < message.line_items.length; ++i) {
                    var error = $root.CInventory_PurchaseInit_Request.LineItem.verify(message.line_items[i]);
                    if (error)
                        return "line_items." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CInventory_PurchaseInit_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_PurchaseInit_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_PurchaseInit_Request} CInventory_PurchaseInit_Request
         */
        CInventory_PurchaseInit_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_PurchaseInit_Request)
                return object;
            var message = new $root.CInventory_PurchaseInit_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.language != null)
                message.language = object.language | 0;
            if (object.line_items) {
                if (!Array.isArray(object.line_items))
                    throw TypeError(".CInventory_PurchaseInit_Request.line_items: array expected");
                message.line_items = [];
                for (var i = 0; i < object.line_items.length; ++i) {
                    if (typeof object.line_items[i] !== "object")
                        throw TypeError(".CInventory_PurchaseInit_Request.line_items: object expected");
                    message.line_items[i] = $root.CInventory_PurchaseInit_Request.LineItem.fromObject(object.line_items[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_PurchaseInit_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_PurchaseInit_Request
         * @static
         * @param {CInventory_PurchaseInit_Request} message CInventory_PurchaseInit_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_PurchaseInit_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.line_items = [];
            if (options.defaults) {
                object.appid = 0;
                object.language = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.line_items && message.line_items.length) {
                object.line_items = [];
                for (var j = 0; j < message.line_items.length; ++j)
                    object.line_items[j] = $root.CInventory_PurchaseInit_Request.LineItem.toObject(message.line_items[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CInventory_PurchaseInit_Request to JSON.
         * @function toJSON
         * @memberof CInventory_PurchaseInit_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_PurchaseInit_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CInventory_PurchaseInit_Request.LineItem = (function() {
    
            /**
             * Properties of a LineItem.
             * @memberof CInventory_PurchaseInit_Request
             * @interface ILineItem
             * @property {number|Long|null} [itemdefid] LineItem itemdefid
             * @property {number|null} [quantity] LineItem quantity
             */
    
            /**
             * Constructs a new LineItem.
             * @memberof CInventory_PurchaseInit_Request
             * @classdesc Represents a LineItem.
             * @implements ILineItem
             * @constructor
             * @param {CInventory_PurchaseInit_Request.ILineItem=} [properties] Properties to set
             */
            function LineItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LineItem itemdefid.
             * @member {number|Long} itemdefid
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @instance
             */
            LineItem.prototype.itemdefid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * LineItem quantity.
             * @member {number} quantity
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @instance
             */
            LineItem.prototype.quantity = 0;
    
            /**
             * Creates a new LineItem instance using the specified properties.
             * @function create
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @static
             * @param {CInventory_PurchaseInit_Request.ILineItem=} [properties] Properties to set
             * @returns {CInventory_PurchaseInit_Request.LineItem} LineItem instance
             */
            LineItem.create = function create(properties) {
                return new LineItem(properties);
            };
    
            /**
             * Encodes the specified LineItem message. Does not implicitly {@link CInventory_PurchaseInit_Request.LineItem.verify|verify} messages.
             * @function encode
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @static
             * @param {CInventory_PurchaseInit_Request.ILineItem} message LineItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LineItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.itemdefid);
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.quantity);
                return writer;
            };
    
            /**
             * Encodes the specified LineItem message, length delimited. Does not implicitly {@link CInventory_PurchaseInit_Request.LineItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @static
             * @param {CInventory_PurchaseInit_Request.ILineItem} message LineItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LineItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LineItem message from the specified reader or buffer.
             * @function decode
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CInventory_PurchaseInit_Request.LineItem} LineItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LineItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_PurchaseInit_Request.LineItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.itemdefid = reader.uint64();
                        break;
                    case 2:
                        message.quantity = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LineItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CInventory_PurchaseInit_Request.LineItem} LineItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LineItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LineItem message.
             * @function verify
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LineItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                    if (!$util.isInteger(message.itemdefid) && !(message.itemdefid && $util.isInteger(message.itemdefid.low) && $util.isInteger(message.itemdefid.high)))
                        return "itemdefid: integer|Long expected";
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    if (!$util.isInteger(message.quantity))
                        return "quantity: integer expected";
                return null;
            };
    
            /**
             * Creates a LineItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CInventory_PurchaseInit_Request.LineItem} LineItem
             */
            LineItem.fromObject = function fromObject(object) {
                if (object instanceof $root.CInventory_PurchaseInit_Request.LineItem)
                    return object;
                var message = new $root.CInventory_PurchaseInit_Request.LineItem();
                if (object.itemdefid != null)
                    if ($util.Long)
                        (message.itemdefid = $util.Long.fromValue(object.itemdefid)).unsigned = true;
                    else if (typeof object.itemdefid === "string")
                        message.itemdefid = parseInt(object.itemdefid, 10);
                    else if (typeof object.itemdefid === "number")
                        message.itemdefid = object.itemdefid;
                    else if (typeof object.itemdefid === "object")
                        message.itemdefid = new $util.LongBits(object.itemdefid.low >>> 0, object.itemdefid.high >>> 0).toNumber(true);
                if (object.quantity != null)
                    message.quantity = object.quantity >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a LineItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @static
             * @param {CInventory_PurchaseInit_Request.LineItem} message LineItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LineItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.itemdefid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.itemdefid = options.longs === String ? "0" : 0;
                    object.quantity = 0;
                }
                if (message.itemdefid != null && message.hasOwnProperty("itemdefid"))
                    if (typeof message.itemdefid === "number")
                        object.itemdefid = options.longs === String ? String(message.itemdefid) : message.itemdefid;
                    else
                        object.itemdefid = options.longs === String ? $util.Long.prototype.toString.call(message.itemdefid) : options.longs === Number ? new $util.LongBits(message.itemdefid.low >>> 0, message.itemdefid.high >>> 0).toNumber(true) : message.itemdefid;
                if (message.quantity != null && message.hasOwnProperty("quantity"))
                    object.quantity = message.quantity;
                return object;
            };
    
            /**
             * Converts this LineItem to JSON.
             * @function toJSON
             * @memberof CInventory_PurchaseInit_Request.LineItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LineItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LineItem;
        })();
    
        return CInventory_PurchaseInit_Request;
    })();
    
    $root.CInventory_PurchaseInit_Response = (function() {
    
        /**
         * Properties of a CInventory_PurchaseInit_Response.
         * @exports ICInventory_PurchaseInit_Response
         * @interface ICInventory_PurchaseInit_Response
         * @property {number|Long|null} [orderid] CInventory_PurchaseInit_Response orderid
         * @property {number|Long|null} [transid] CInventory_PurchaseInit_Response transid
         */
    
        /**
         * Constructs a new CInventory_PurchaseInit_Response.
         * @exports CInventory_PurchaseInit_Response
         * @classdesc Represents a CInventory_PurchaseInit_Response.
         * @implements ICInventory_PurchaseInit_Response
         * @constructor
         * @param {ICInventory_PurchaseInit_Response=} [properties] Properties to set
         */
        function CInventory_PurchaseInit_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_PurchaseInit_Response orderid.
         * @member {number|Long} orderid
         * @memberof CInventory_PurchaseInit_Response
         * @instance
         */
        CInventory_PurchaseInit_Response.prototype.orderid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CInventory_PurchaseInit_Response transid.
         * @member {number|Long} transid
         * @memberof CInventory_PurchaseInit_Response
         * @instance
         */
        CInventory_PurchaseInit_Response.prototype.transid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CInventory_PurchaseInit_Response instance using the specified properties.
         * @function create
         * @memberof CInventory_PurchaseInit_Response
         * @static
         * @param {ICInventory_PurchaseInit_Response=} [properties] Properties to set
         * @returns {CInventory_PurchaseInit_Response} CInventory_PurchaseInit_Response instance
         */
        CInventory_PurchaseInit_Response.create = function create(properties) {
            return new CInventory_PurchaseInit_Response(properties);
        };
    
        /**
         * Encodes the specified CInventory_PurchaseInit_Response message. Does not implicitly {@link CInventory_PurchaseInit_Response.verify|verify} messages.
         * @function encode
         * @memberof CInventory_PurchaseInit_Response
         * @static
         * @param {ICInventory_PurchaseInit_Response} message CInventory_PurchaseInit_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_PurchaseInit_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orderid != null && message.hasOwnProperty("orderid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.orderid);
            if (message.transid != null && message.hasOwnProperty("transid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.transid);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_PurchaseInit_Response message, length delimited. Does not implicitly {@link CInventory_PurchaseInit_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_PurchaseInit_Response
         * @static
         * @param {ICInventory_PurchaseInit_Response} message CInventory_PurchaseInit_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_PurchaseInit_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_PurchaseInit_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_PurchaseInit_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_PurchaseInit_Response} CInventory_PurchaseInit_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_PurchaseInit_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_PurchaseInit_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.orderid = reader.uint64();
                    break;
                case 2:
                    message.transid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_PurchaseInit_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_PurchaseInit_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_PurchaseInit_Response} CInventory_PurchaseInit_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_PurchaseInit_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_PurchaseInit_Response message.
         * @function verify
         * @memberof CInventory_PurchaseInit_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_PurchaseInit_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orderid != null && message.hasOwnProperty("orderid"))
                if (!$util.isInteger(message.orderid) && !(message.orderid && $util.isInteger(message.orderid.low) && $util.isInteger(message.orderid.high)))
                    return "orderid: integer|Long expected";
            if (message.transid != null && message.hasOwnProperty("transid"))
                if (!$util.isInteger(message.transid) && !(message.transid && $util.isInteger(message.transid.low) && $util.isInteger(message.transid.high)))
                    return "transid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CInventory_PurchaseInit_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_PurchaseInit_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_PurchaseInit_Response} CInventory_PurchaseInit_Response
         */
        CInventory_PurchaseInit_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_PurchaseInit_Response)
                return object;
            var message = new $root.CInventory_PurchaseInit_Response();
            if (object.orderid != null)
                if ($util.Long)
                    (message.orderid = $util.Long.fromValue(object.orderid)).unsigned = true;
                else if (typeof object.orderid === "string")
                    message.orderid = parseInt(object.orderid, 10);
                else if (typeof object.orderid === "number")
                    message.orderid = object.orderid;
                else if (typeof object.orderid === "object")
                    message.orderid = new $util.LongBits(object.orderid.low >>> 0, object.orderid.high >>> 0).toNumber(true);
            if (object.transid != null)
                if ($util.Long)
                    (message.transid = $util.Long.fromValue(object.transid)).unsigned = true;
                else if (typeof object.transid === "string")
                    message.transid = parseInt(object.transid, 10);
                else if (typeof object.transid === "number")
                    message.transid = object.transid;
                else if (typeof object.transid === "object")
                    message.transid = new $util.LongBits(object.transid.low >>> 0, object.transid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_PurchaseInit_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_PurchaseInit_Response
         * @static
         * @param {CInventory_PurchaseInit_Response} message CInventory_PurchaseInit_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_PurchaseInit_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.orderid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orderid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.transid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.transid = options.longs === String ? "0" : 0;
            }
            if (message.orderid != null && message.hasOwnProperty("orderid"))
                if (typeof message.orderid === "number")
                    object.orderid = options.longs === String ? String(message.orderid) : message.orderid;
                else
                    object.orderid = options.longs === String ? $util.Long.prototype.toString.call(message.orderid) : options.longs === Number ? new $util.LongBits(message.orderid.low >>> 0, message.orderid.high >>> 0).toNumber(true) : message.orderid;
            if (message.transid != null && message.hasOwnProperty("transid"))
                if (typeof message.transid === "number")
                    object.transid = options.longs === String ? String(message.transid) : message.transid;
                else
                    object.transid = options.longs === String ? $util.Long.prototype.toString.call(message.transid) : options.longs === Number ? new $util.LongBits(message.transid.low >>> 0, message.transid.high >>> 0).toNumber(true) : message.transid;
            return object;
        };
    
        /**
         * Converts this CInventory_PurchaseInit_Response to JSON.
         * @function toJSON
         * @memberof CInventory_PurchaseInit_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_PurchaseInit_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_PurchaseInit_Response;
    })();
    
    $root.CInventory_PurchaseFinalize_Request = (function() {
    
        /**
         * Properties of a CInventory_PurchaseFinalize_Request.
         * @exports ICInventory_PurchaseFinalize_Request
         * @interface ICInventory_PurchaseFinalize_Request
         * @property {number|null} [appid] CInventory_PurchaseFinalize_Request appid
         * @property {number|null} [language] CInventory_PurchaseFinalize_Request language
         * @property {number|Long|null} [orderid] CInventory_PurchaseFinalize_Request orderid
         */
    
        /**
         * Constructs a new CInventory_PurchaseFinalize_Request.
         * @exports CInventory_PurchaseFinalize_Request
         * @classdesc Represents a CInventory_PurchaseFinalize_Request.
         * @implements ICInventory_PurchaseFinalize_Request
         * @constructor
         * @param {ICInventory_PurchaseFinalize_Request=} [properties] Properties to set
         */
        function CInventory_PurchaseFinalize_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventory_PurchaseFinalize_Request appid.
         * @member {number} appid
         * @memberof CInventory_PurchaseFinalize_Request
         * @instance
         */
        CInventory_PurchaseFinalize_Request.prototype.appid = 0;
    
        /**
         * CInventory_PurchaseFinalize_Request language.
         * @member {number} language
         * @memberof CInventory_PurchaseFinalize_Request
         * @instance
         */
        CInventory_PurchaseFinalize_Request.prototype.language = 0;
    
        /**
         * CInventory_PurchaseFinalize_Request orderid.
         * @member {number|Long} orderid
         * @memberof CInventory_PurchaseFinalize_Request
         * @instance
         */
        CInventory_PurchaseFinalize_Request.prototype.orderid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CInventory_PurchaseFinalize_Request instance using the specified properties.
         * @function create
         * @memberof CInventory_PurchaseFinalize_Request
         * @static
         * @param {ICInventory_PurchaseFinalize_Request=} [properties] Properties to set
         * @returns {CInventory_PurchaseFinalize_Request} CInventory_PurchaseFinalize_Request instance
         */
        CInventory_PurchaseFinalize_Request.create = function create(properties) {
            return new CInventory_PurchaseFinalize_Request(properties);
        };
    
        /**
         * Encodes the specified CInventory_PurchaseFinalize_Request message. Does not implicitly {@link CInventory_PurchaseFinalize_Request.verify|verify} messages.
         * @function encode
         * @memberof CInventory_PurchaseFinalize_Request
         * @static
         * @param {ICInventory_PurchaseFinalize_Request} message CInventory_PurchaseFinalize_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_PurchaseFinalize_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.language);
            if (message.orderid != null && message.hasOwnProperty("orderid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.orderid);
            return writer;
        };
    
        /**
         * Encodes the specified CInventory_PurchaseFinalize_Request message, length delimited. Does not implicitly {@link CInventory_PurchaseFinalize_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventory_PurchaseFinalize_Request
         * @static
         * @param {ICInventory_PurchaseFinalize_Request} message CInventory_PurchaseFinalize_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventory_PurchaseFinalize_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventory_PurchaseFinalize_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CInventory_PurchaseFinalize_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventory_PurchaseFinalize_Request} CInventory_PurchaseFinalize_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_PurchaseFinalize_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventory_PurchaseFinalize_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.language = reader.int32();
                    break;
                case 3:
                    message.orderid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventory_PurchaseFinalize_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventory_PurchaseFinalize_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventory_PurchaseFinalize_Request} CInventory_PurchaseFinalize_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventory_PurchaseFinalize_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventory_PurchaseFinalize_Request message.
         * @function verify
         * @memberof CInventory_PurchaseFinalize_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventory_PurchaseFinalize_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isInteger(message.language))
                    return "language: integer expected";
            if (message.orderid != null && message.hasOwnProperty("orderid"))
                if (!$util.isInteger(message.orderid) && !(message.orderid && $util.isInteger(message.orderid.low) && $util.isInteger(message.orderid.high)))
                    return "orderid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CInventory_PurchaseFinalize_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventory_PurchaseFinalize_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventory_PurchaseFinalize_Request} CInventory_PurchaseFinalize_Request
         */
        CInventory_PurchaseFinalize_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventory_PurchaseFinalize_Request)
                return object;
            var message = new $root.CInventory_PurchaseFinalize_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.language != null)
                message.language = object.language | 0;
            if (object.orderid != null)
                if ($util.Long)
                    (message.orderid = $util.Long.fromValue(object.orderid)).unsigned = true;
                else if (typeof object.orderid === "string")
                    message.orderid = parseInt(object.orderid, 10);
                else if (typeof object.orderid === "number")
                    message.orderid = object.orderid;
                else if (typeof object.orderid === "object")
                    message.orderid = new $util.LongBits(object.orderid.low >>> 0, object.orderid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CInventory_PurchaseFinalize_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventory_PurchaseFinalize_Request
         * @static
         * @param {CInventory_PurchaseFinalize_Request} message CInventory_PurchaseFinalize_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventory_PurchaseFinalize_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.language = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.orderid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orderid = options.longs === String ? "0" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.orderid != null && message.hasOwnProperty("orderid"))
                if (typeof message.orderid === "number")
                    object.orderid = options.longs === String ? String(message.orderid) : message.orderid;
                else
                    object.orderid = options.longs === String ? $util.Long.prototype.toString.call(message.orderid) : options.longs === Number ? new $util.LongBits(message.orderid.low >>> 0, message.orderid.high >>> 0).toNumber(true) : message.orderid;
            return object;
        };
    
        /**
         * Converts this CInventory_PurchaseFinalize_Request to JSON.
         * @function toJSON
         * @memberof CInventory_PurchaseFinalize_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventory_PurchaseFinalize_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventory_PurchaseFinalize_Request;
    })();
    
    $root.CInventoryClient_NewItems_Notification = (function() {
    
        /**
         * Properties of a CInventoryClient_NewItems_Notification.
         * @exports ICInventoryClient_NewItems_Notification
         * @interface ICInventoryClient_NewItems_Notification
         * @property {number|null} [appid] CInventoryClient_NewItems_Notification appid
         * @property {ICInventory_Response|null} [inventory_response] CInventoryClient_NewItems_Notification inventory_response
         */
    
        /**
         * Constructs a new CInventoryClient_NewItems_Notification.
         * @exports CInventoryClient_NewItems_Notification
         * @classdesc Represents a CInventoryClient_NewItems_Notification.
         * @implements ICInventoryClient_NewItems_Notification
         * @constructor
         * @param {ICInventoryClient_NewItems_Notification=} [properties] Properties to set
         */
        function CInventoryClient_NewItems_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CInventoryClient_NewItems_Notification appid.
         * @member {number} appid
         * @memberof CInventoryClient_NewItems_Notification
         * @instance
         */
        CInventoryClient_NewItems_Notification.prototype.appid = 0;
    
        /**
         * CInventoryClient_NewItems_Notification inventory_response.
         * @member {ICInventory_Response|null|undefined} inventory_response
         * @memberof CInventoryClient_NewItems_Notification
         * @instance
         */
        CInventoryClient_NewItems_Notification.prototype.inventory_response = null;
    
        /**
         * Creates a new CInventoryClient_NewItems_Notification instance using the specified properties.
         * @function create
         * @memberof CInventoryClient_NewItems_Notification
         * @static
         * @param {ICInventoryClient_NewItems_Notification=} [properties] Properties to set
         * @returns {CInventoryClient_NewItems_Notification} CInventoryClient_NewItems_Notification instance
         */
        CInventoryClient_NewItems_Notification.create = function create(properties) {
            return new CInventoryClient_NewItems_Notification(properties);
        };
    
        /**
         * Encodes the specified CInventoryClient_NewItems_Notification message. Does not implicitly {@link CInventoryClient_NewItems_Notification.verify|verify} messages.
         * @function encode
         * @memberof CInventoryClient_NewItems_Notification
         * @static
         * @param {ICInventoryClient_NewItems_Notification} message CInventoryClient_NewItems_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventoryClient_NewItems_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.inventory_response != null && message.hasOwnProperty("inventory_response"))
                $root.CInventory_Response.encode(message.inventory_response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CInventoryClient_NewItems_Notification message, length delimited. Does not implicitly {@link CInventoryClient_NewItems_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CInventoryClient_NewItems_Notification
         * @static
         * @param {ICInventoryClient_NewItems_Notification} message CInventoryClient_NewItems_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CInventoryClient_NewItems_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CInventoryClient_NewItems_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CInventoryClient_NewItems_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CInventoryClient_NewItems_Notification} CInventoryClient_NewItems_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventoryClient_NewItems_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CInventoryClient_NewItems_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.inventory_response = $root.CInventory_Response.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CInventoryClient_NewItems_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CInventoryClient_NewItems_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CInventoryClient_NewItems_Notification} CInventoryClient_NewItems_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CInventoryClient_NewItems_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CInventoryClient_NewItems_Notification message.
         * @function verify
         * @memberof CInventoryClient_NewItems_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CInventoryClient_NewItems_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.inventory_response != null && message.hasOwnProperty("inventory_response")) {
                var error = $root.CInventory_Response.verify(message.inventory_response);
                if (error)
                    return "inventory_response." + error;
            }
            return null;
        };
    
        /**
         * Creates a CInventoryClient_NewItems_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CInventoryClient_NewItems_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CInventoryClient_NewItems_Notification} CInventoryClient_NewItems_Notification
         */
        CInventoryClient_NewItems_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CInventoryClient_NewItems_Notification)
                return object;
            var message = new $root.CInventoryClient_NewItems_Notification();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.inventory_response != null) {
                if (typeof object.inventory_response !== "object")
                    throw TypeError(".CInventoryClient_NewItems_Notification.inventory_response: object expected");
                message.inventory_response = $root.CInventory_Response.fromObject(object.inventory_response);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CInventoryClient_NewItems_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CInventoryClient_NewItems_Notification
         * @static
         * @param {CInventoryClient_NewItems_Notification} message CInventoryClient_NewItems_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CInventoryClient_NewItems_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.inventory_response = null;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.inventory_response != null && message.hasOwnProperty("inventory_response"))
                object.inventory_response = $root.CInventory_Response.toObject(message.inventory_response, options);
            return object;
        };
    
        /**
         * Converts this CInventoryClient_NewItems_Notification to JSON.
         * @function toJSON
         * @memberof CInventoryClient_NewItems_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CInventoryClient_NewItems_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CInventoryClient_NewItems_Notification;
    })();
    
    $root.Inventory = (function() {
    
        /**
         * Constructs a new Inventory service.
         * @exports Inventory
         * @classdesc Represents an Inventory
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Inventory(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Inventory.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Inventory;
    
        /**
         * Creates new Inventory service using the specified rpc implementation.
         * @function create
         * @memberof Inventory
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Inventory} RPC service. Useful where requests and/or responses are streamed.
         */
        Inventory.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Inventory#getInventory}.
         * @memberof Inventory
         * @typedef GetInventoryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls GetInventory.
         * @function getInventory
         * @memberof Inventory
         * @instance
         * @param {ICInventory_GetInventory_Request} request CInventory_GetInventory_Request message or plain object
         * @param {Inventory.GetInventoryCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.getInventory = function getInventory(request, callback) {
            return this.rpcCall(getInventory, $root.CInventory_GetInventory_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "GetInventory" });
    
        /**
         * Calls GetInventory.
         * @function getInventory
         * @memberof Inventory
         * @instance
         * @param {ICInventory_GetInventory_Request} request CInventory_GetInventory_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#exchangeItem}.
         * @memberof Inventory
         * @typedef ExchangeItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls ExchangeItem.
         * @function exchangeItem
         * @memberof Inventory
         * @instance
         * @param {ICInventory_ExchangeItem_Request} request CInventory_ExchangeItem_Request message or plain object
         * @param {Inventory.ExchangeItemCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.exchangeItem = function exchangeItem(request, callback) {
            return this.rpcCall(exchangeItem, $root.CInventory_ExchangeItem_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "ExchangeItem" });
    
        /**
         * Calls ExchangeItem.
         * @function exchangeItem
         * @memberof Inventory
         * @instance
         * @param {ICInventory_ExchangeItem_Request} request CInventory_ExchangeItem_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#getEligiblePromoItemDefIDs}.
         * @memberof Inventory
         * @typedef GetEligiblePromoItemDefIDsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_GetEligiblePromoItemDefIDs_Response} [response] CInventory_GetEligiblePromoItemDefIDs_Response
         */
    
        /**
         * Calls GetEligiblePromoItemDefIDs.
         * @function getEligiblePromoItemDefIDs
         * @memberof Inventory
         * @instance
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Request} request CInventory_GetEligiblePromoItemDefIDs_Request message or plain object
         * @param {Inventory.GetEligiblePromoItemDefIDsCallback} callback Node-style callback called with the error, if any, and CInventory_GetEligiblePromoItemDefIDs_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.getEligiblePromoItemDefIDs = function getEligiblePromoItemDefIDs(request, callback) {
            return this.rpcCall(getEligiblePromoItemDefIDs, $root.CInventory_GetEligiblePromoItemDefIDs_Request, $root.CInventory_GetEligiblePromoItemDefIDs_Response, request, callback);
        }, "name", { value: "GetEligiblePromoItemDefIDs" });
    
        /**
         * Calls GetEligiblePromoItemDefIDs.
         * @function getEligiblePromoItemDefIDs
         * @memberof Inventory
         * @instance
         * @param {ICInventory_GetEligiblePromoItemDefIDs_Request} request CInventory_GetEligiblePromoItemDefIDs_Request message or plain object
         * @returns {Promise<CInventory_GetEligiblePromoItemDefIDs_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#addPromoItem}.
         * @memberof Inventory
         * @typedef AddPromoItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls AddPromoItem.
         * @function addPromoItem
         * @memberof Inventory
         * @instance
         * @param {ICInventory_AddItem_Request} request CInventory_AddItem_Request message or plain object
         * @param {Inventory.AddPromoItemCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.addPromoItem = function addPromoItem(request, callback) {
            return this.rpcCall(addPromoItem, $root.CInventory_AddItem_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "AddPromoItem" });
    
        /**
         * Calls AddPromoItem.
         * @function addPromoItem
         * @memberof Inventory
         * @instance
         * @param {ICInventory_AddItem_Request} request CInventory_AddItem_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#safeModifyItems}.
         * @memberof Inventory
         * @typedef SafeModifyItemsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls SafeModifyItems.
         * @function safeModifyItems
         * @memberof Inventory
         * @instance
         * @param {ICInventory_ModifyItems_Request} request CInventory_ModifyItems_Request message or plain object
         * @param {Inventory.SafeModifyItemsCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.safeModifyItems = function safeModifyItems(request, callback) {
            return this.rpcCall(safeModifyItems, $root.CInventory_ModifyItems_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "SafeModifyItems" });
    
        /**
         * Calls SafeModifyItems.
         * @function safeModifyItems
         * @memberof Inventory
         * @instance
         * @param {ICInventory_ModifyItems_Request} request CInventory_ModifyItems_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#consumePlaytime}.
         * @memberof Inventory
         * @typedef ConsumePlaytimeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls ConsumePlaytime.
         * @function consumePlaytime
         * @memberof Inventory
         * @instance
         * @param {ICInventory_ConsumePlaytime_Request} request CInventory_ConsumePlaytime_Request message or plain object
         * @param {Inventory.ConsumePlaytimeCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.consumePlaytime = function consumePlaytime(request, callback) {
            return this.rpcCall(consumePlaytime, $root.CInventory_ConsumePlaytime_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "ConsumePlaytime" });
    
        /**
         * Calls ConsumePlaytime.
         * @function consumePlaytime
         * @memberof Inventory
         * @instance
         * @param {ICInventory_ConsumePlaytime_Request} request CInventory_ConsumePlaytime_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#consumeItem}.
         * @memberof Inventory
         * @typedef ConsumeItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls ConsumeItem.
         * @function consumeItem
         * @memberof Inventory
         * @instance
         * @param {ICInventory_ConsumeItem_Request} request CInventory_ConsumeItem_Request message or plain object
         * @param {Inventory.ConsumeItemCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.consumeItem = function consumeItem(request, callback) {
            return this.rpcCall(consumeItem, $root.CInventory_ConsumeItem_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "ConsumeItem" });
    
        /**
         * Calls ConsumeItem.
         * @function consumeItem
         * @memberof Inventory
         * @instance
         * @param {ICInventory_ConsumeItem_Request} request CInventory_ConsumeItem_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#devGenerateItem}.
         * @memberof Inventory
         * @typedef DevGenerateItemCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls DevGenerateItem.
         * @function devGenerateItem
         * @memberof Inventory
         * @instance
         * @param {ICInventory_AddItem_Request} request CInventory_AddItem_Request message or plain object
         * @param {Inventory.DevGenerateItemCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.devGenerateItem = function devGenerateItem(request, callback) {
            return this.rpcCall(devGenerateItem, $root.CInventory_AddItem_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "DevGenerateItem" });
    
        /**
         * Calls DevGenerateItem.
         * @function devGenerateItem
         * @memberof Inventory
         * @instance
         * @param {ICInventory_AddItem_Request} request CInventory_AddItem_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#devSetNextDrop}.
         * @memberof Inventory
         * @typedef DevSetNextDropCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls DevSetNextDrop.
         * @function devSetNextDrop
         * @memberof Inventory
         * @instance
         * @param {ICInventory_DevSetNextDrop_Request} request CInventory_DevSetNextDrop_Request message or plain object
         * @param {Inventory.DevSetNextDropCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.devSetNextDrop = function devSetNextDrop(request, callback) {
            return this.rpcCall(devSetNextDrop, $root.CInventory_DevSetNextDrop_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "DevSetNextDrop" });
    
        /**
         * Calls DevSetNextDrop.
         * @function devSetNextDrop
         * @memberof Inventory
         * @instance
         * @param {ICInventory_DevSetNextDrop_Request} request CInventory_DevSetNextDrop_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#splitItemStack}.
         * @memberof Inventory
         * @typedef SplitItemStackCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls SplitItemStack.
         * @function splitItemStack
         * @memberof Inventory
         * @instance
         * @param {ICInventory_SplitItemStack_Request} request CInventory_SplitItemStack_Request message or plain object
         * @param {Inventory.SplitItemStackCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.splitItemStack = function splitItemStack(request, callback) {
            return this.rpcCall(splitItemStack, $root.CInventory_SplitItemStack_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "SplitItemStack" });
    
        /**
         * Calls SplitItemStack.
         * @function splitItemStack
         * @memberof Inventory
         * @instance
         * @param {ICInventory_SplitItemStack_Request} request CInventory_SplitItemStack_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#combineItemStacks}.
         * @memberof Inventory
         * @typedef CombineItemStacksCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls CombineItemStacks.
         * @function combineItemStacks
         * @memberof Inventory
         * @instance
         * @param {ICInventory_CombineItemStacks_Request} request CInventory_CombineItemStacks_Request message or plain object
         * @param {Inventory.CombineItemStacksCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.combineItemStacks = function combineItemStacks(request, callback) {
            return this.rpcCall(combineItemStacks, $root.CInventory_CombineItemStacks_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "CombineItemStacks" });
    
        /**
         * Calls CombineItemStacks.
         * @function combineItemStacks
         * @memberof Inventory
         * @instance
         * @param {ICInventory_CombineItemStacks_Request} request CInventory_CombineItemStacks_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#getItemDefMeta}.
         * @memberof Inventory
         * @typedef GetItemDefMetaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_GetItemDefMeta_Response} [response] CInventory_GetItemDefMeta_Response
         */
    
        /**
         * Calls GetItemDefMeta.
         * @function getItemDefMeta
         * @memberof Inventory
         * @instance
         * @param {ICInventory_GetItemDefMeta_Request} request CInventory_GetItemDefMeta_Request message or plain object
         * @param {Inventory.GetItemDefMetaCallback} callback Node-style callback called with the error, if any, and CInventory_GetItemDefMeta_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.getItemDefMeta = function getItemDefMeta(request, callback) {
            return this.rpcCall(getItemDefMeta, $root.CInventory_GetItemDefMeta_Request, $root.CInventory_GetItemDefMeta_Response, request, callback);
        }, "name", { value: "GetItemDefMeta" });
    
        /**
         * Calls GetItemDefMeta.
         * @function getItemDefMeta
         * @memberof Inventory
         * @instance
         * @param {ICInventory_GetItemDefMeta_Request} request CInventory_GetItemDefMeta_Request message or plain object
         * @returns {Promise<CInventory_GetItemDefMeta_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#getUserPurchaseInfo}.
         * @memberof Inventory
         * @typedef GetUserPurchaseInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_GetUserPurchaseInfo_Response} [response] CInventory_GetUserPurchaseInfo_Response
         */
    
        /**
         * Calls GetUserPurchaseInfo.
         * @function getUserPurchaseInfo
         * @memberof Inventory
         * @instance
         * @param {ICInventory_GetUserPurchaseInfo_Request} request CInventory_GetUserPurchaseInfo_Request message or plain object
         * @param {Inventory.GetUserPurchaseInfoCallback} callback Node-style callback called with the error, if any, and CInventory_GetUserPurchaseInfo_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.getUserPurchaseInfo = function getUserPurchaseInfo(request, callback) {
            return this.rpcCall(getUserPurchaseInfo, $root.CInventory_GetUserPurchaseInfo_Request, $root.CInventory_GetUserPurchaseInfo_Response, request, callback);
        }, "name", { value: "GetUserPurchaseInfo" });
    
        /**
         * Calls GetUserPurchaseInfo.
         * @function getUserPurchaseInfo
         * @memberof Inventory
         * @instance
         * @param {ICInventory_GetUserPurchaseInfo_Request} request CInventory_GetUserPurchaseInfo_Request message or plain object
         * @returns {Promise<CInventory_GetUserPurchaseInfo_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#purchaseInit}.
         * @memberof Inventory
         * @typedef PurchaseInitCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_PurchaseInit_Response} [response] CInventory_PurchaseInit_Response
         */
    
        /**
         * Calls PurchaseInit.
         * @function purchaseInit
         * @memberof Inventory
         * @instance
         * @param {ICInventory_PurchaseInit_Request} request CInventory_PurchaseInit_Request message or plain object
         * @param {Inventory.PurchaseInitCallback} callback Node-style callback called with the error, if any, and CInventory_PurchaseInit_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.purchaseInit = function purchaseInit(request, callback) {
            return this.rpcCall(purchaseInit, $root.CInventory_PurchaseInit_Request, $root.CInventory_PurchaseInit_Response, request, callback);
        }, "name", { value: "PurchaseInit" });
    
        /**
         * Calls PurchaseInit.
         * @function purchaseInit
         * @memberof Inventory
         * @instance
         * @param {ICInventory_PurchaseInit_Request} request CInventory_PurchaseInit_Request message or plain object
         * @returns {Promise<CInventory_PurchaseInit_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Inventory#purchaseFinalize}.
         * @memberof Inventory
         * @typedef PurchaseFinalizeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CInventory_Response} [response] CInventory_Response
         */
    
        /**
         * Calls PurchaseFinalize.
         * @function purchaseFinalize
         * @memberof Inventory
         * @instance
         * @param {ICInventory_PurchaseFinalize_Request} request CInventory_PurchaseFinalize_Request message or plain object
         * @param {Inventory.PurchaseFinalizeCallback} callback Node-style callback called with the error, if any, and CInventory_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Inventory.prototype.purchaseFinalize = function purchaseFinalize(request, callback) {
            return this.rpcCall(purchaseFinalize, $root.CInventory_PurchaseFinalize_Request, $root.CInventory_Response, request, callback);
        }, "name", { value: "PurchaseFinalize" });
    
        /**
         * Calls PurchaseFinalize.
         * @function purchaseFinalize
         * @memberof Inventory
         * @instance
         * @param {ICInventory_PurchaseFinalize_Request} request CInventory_PurchaseFinalize_Request message or plain object
         * @returns {Promise<CInventory_Response>} Promise
         * @variation 2
         */
    
        return Inventory;
    })();
    
    $root.InventoryClient = (function() {
    
        /**
         * Constructs a new InventoryClient service.
         * @exports InventoryClient
         * @classdesc Represents an InventoryClient
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function InventoryClient(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (InventoryClient.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = InventoryClient;
    
        /**
         * Creates new InventoryClient service using the specified rpc implementation.
         * @function create
         * @memberof InventoryClient
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {InventoryClient} RPC service. Useful where requests and/or responses are streamed.
         */
        InventoryClient.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link InventoryClient#notifyNewItems}.
         * @memberof InventoryClient
         * @typedef NotifyNewItemsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls NotifyNewItems.
         * @function notifyNewItems
         * @memberof InventoryClient
         * @instance
         * @param {ICInventoryClient_NewItems_Notification} request CInventoryClient_NewItems_Notification message or plain object
         * @param {InventoryClient.NotifyNewItemsCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(InventoryClient.prototype.notifyNewItems = function notifyNewItems(request, callback) {
            return this.rpcCall(notifyNewItems, $root.CInventoryClient_NewItems_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "NotifyNewItems" });
    
        /**
         * Calls NotifyNewItems.
         * @function notifyNewItems
         * @memberof InventoryClient
         * @instance
         * @param {ICInventoryClient_NewItems_Notification} request CInventoryClient_NewItems_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        return InventoryClient;
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
