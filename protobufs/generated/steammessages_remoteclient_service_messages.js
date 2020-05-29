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
    
    $root.CRemoteClient_CreateSession_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_CreateSession_Request.
         * @exports ICRemoteClient_CreateSession_Request
         * @interface ICRemoteClient_CreateSession_Request
         */
    
        /**
         * Constructs a new CRemoteClient_CreateSession_Request.
         * @exports CRemoteClient_CreateSession_Request
         * @classdesc Represents a CRemoteClient_CreateSession_Request.
         * @implements ICRemoteClient_CreateSession_Request
         * @constructor
         * @param {ICRemoteClient_CreateSession_Request=} [properties] Properties to set
         */
        function CRemoteClient_CreateSession_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CRemoteClient_CreateSession_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {ICRemoteClient_CreateSession_Request=} [properties] Properties to set
         * @returns {CRemoteClient_CreateSession_Request} CRemoteClient_CreateSession_Request instance
         */
        CRemoteClient_CreateSession_Request.create = function create(properties) {
            return new CRemoteClient_CreateSession_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_CreateSession_Request message. Does not implicitly {@link CRemoteClient_CreateSession_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {ICRemoteClient_CreateSession_Request} message CRemoteClient_CreateSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CreateSession_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_CreateSession_Request message, length delimited. Does not implicitly {@link CRemoteClient_CreateSession_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {ICRemoteClient_CreateSession_Request} message CRemoteClient_CreateSession_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CreateSession_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_CreateSession_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_CreateSession_Request} CRemoteClient_CreateSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CreateSession_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_CreateSession_Request();
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
         * Decodes a CRemoteClient_CreateSession_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_CreateSession_Request} CRemoteClient_CreateSession_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CreateSession_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_CreateSession_Request message.
         * @function verify
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_CreateSession_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_CreateSession_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_CreateSession_Request} CRemoteClient_CreateSession_Request
         */
        CRemoteClient_CreateSession_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_CreateSession_Request)
                return object;
            return new $root.CRemoteClient_CreateSession_Request();
        };
    
        /**
         * Creates a plain object from a CRemoteClient_CreateSession_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_CreateSession_Request
         * @static
         * @param {CRemoteClient_CreateSession_Request} message CRemoteClient_CreateSession_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_CreateSession_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CRemoteClient_CreateSession_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_CreateSession_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_CreateSession_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_CreateSession_Request;
    })();
    
    $root.CRemoteClient_CreateSession_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_CreateSession_Response.
         * @exports ICRemoteClient_CreateSession_Response
         * @interface ICRemoteClient_CreateSession_Response
         * @property {number|Long|null} [session_id] CRemoteClient_CreateSession_Response session_id
         * @property {number|null} [euniverse] CRemoteClient_CreateSession_Response euniverse
         */
    
        /**
         * Constructs a new CRemoteClient_CreateSession_Response.
         * @exports CRemoteClient_CreateSession_Response
         * @classdesc Represents a CRemoteClient_CreateSession_Response.
         * @implements ICRemoteClient_CreateSession_Response
         * @constructor
         * @param {ICRemoteClient_CreateSession_Response=} [properties] Properties to set
         */
        function CRemoteClient_CreateSession_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_CreateSession_Response session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_CreateSession_Response
         * @instance
         */
        CRemoteClient_CreateSession_Response.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_CreateSession_Response euniverse.
         * @member {number} euniverse
         * @memberof CRemoteClient_CreateSession_Response
         * @instance
         */
        CRemoteClient_CreateSession_Response.prototype.euniverse = 0;
    
        /**
         * Creates a new CRemoteClient_CreateSession_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {ICRemoteClient_CreateSession_Response=} [properties] Properties to set
         * @returns {CRemoteClient_CreateSession_Response} CRemoteClient_CreateSession_Response instance
         */
        CRemoteClient_CreateSession_Response.create = function create(properties) {
            return new CRemoteClient_CreateSession_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_CreateSession_Response message. Does not implicitly {@link CRemoteClient_CreateSession_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {ICRemoteClient_CreateSession_Response} message CRemoteClient_CreateSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CreateSession_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.euniverse != null && message.hasOwnProperty("euniverse"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.euniverse);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_CreateSession_Response message, length delimited. Does not implicitly {@link CRemoteClient_CreateSession_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {ICRemoteClient_CreateSession_Response} message CRemoteClient_CreateSession_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CreateSession_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_CreateSession_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_CreateSession_Response} CRemoteClient_CreateSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CreateSession_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_CreateSession_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.euniverse = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_CreateSession_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_CreateSession_Response} CRemoteClient_CreateSession_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CreateSession_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_CreateSession_Response message.
         * @function verify
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_CreateSession_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.euniverse != null && message.hasOwnProperty("euniverse"))
                if (!$util.isInteger(message.euniverse))
                    return "euniverse: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_CreateSession_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_CreateSession_Response} CRemoteClient_CreateSession_Response
         */
        CRemoteClient_CreateSession_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_CreateSession_Response)
                return object;
            var message = new $root.CRemoteClient_CreateSession_Response();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.euniverse != null)
                message.euniverse = object.euniverse | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_CreateSession_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_CreateSession_Response
         * @static
         * @param {CRemoteClient_CreateSession_Response} message CRemoteClient_CreateSession_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_CreateSession_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                object.euniverse = 0;
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.euniverse != null && message.hasOwnProperty("euniverse"))
                object.euniverse = message.euniverse;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_CreateSession_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_CreateSession_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_CreateSession_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_CreateSession_Response;
    })();
    
    $root.CRemoteClient_StartPairing_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_StartPairing_Request.
         * @exports ICRemoteClient_StartPairing_Request
         * @interface ICRemoteClient_StartPairing_Request
         * @property {number|Long|null} [session_id] CRemoteClient_StartPairing_Request session_id
         */
    
        /**
         * Constructs a new CRemoteClient_StartPairing_Request.
         * @exports CRemoteClient_StartPairing_Request
         * @classdesc Represents a CRemoteClient_StartPairing_Request.
         * @implements ICRemoteClient_StartPairing_Request
         * @constructor
         * @param {ICRemoteClient_StartPairing_Request=} [properties] Properties to set
         */
        function CRemoteClient_StartPairing_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_StartPairing_Request session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_StartPairing_Request
         * @instance
         */
        CRemoteClient_StartPairing_Request.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_StartPairing_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {ICRemoteClient_StartPairing_Request=} [properties] Properties to set
         * @returns {CRemoteClient_StartPairing_Request} CRemoteClient_StartPairing_Request instance
         */
        CRemoteClient_StartPairing_Request.create = function create(properties) {
            return new CRemoteClient_StartPairing_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_StartPairing_Request message. Does not implicitly {@link CRemoteClient_StartPairing_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {ICRemoteClient_StartPairing_Request} message CRemoteClient_StartPairing_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_StartPairing_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_StartPairing_Request message, length delimited. Does not implicitly {@link CRemoteClient_StartPairing_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {ICRemoteClient_StartPairing_Request} message CRemoteClient_StartPairing_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_StartPairing_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_StartPairing_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_StartPairing_Request} CRemoteClient_StartPairing_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_StartPairing_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_StartPairing_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_StartPairing_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_StartPairing_Request} CRemoteClient_StartPairing_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_StartPairing_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_StartPairing_Request message.
         * @function verify
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_StartPairing_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_StartPairing_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_StartPairing_Request} CRemoteClient_StartPairing_Request
         */
        CRemoteClient_StartPairing_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_StartPairing_Request)
                return object;
            var message = new $root.CRemoteClient_StartPairing_Request();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_StartPairing_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_StartPairing_Request
         * @static
         * @param {CRemoteClient_StartPairing_Request} message CRemoteClient_StartPairing_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_StartPairing_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_StartPairing_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_StartPairing_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_StartPairing_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_StartPairing_Request;
    })();
    
    $root.CRemoteClient_StartPairing_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_StartPairing_Response.
         * @exports ICRemoteClient_StartPairing_Response
         * @interface ICRemoteClient_StartPairing_Response
         * @property {number|null} [pin] CRemoteClient_StartPairing_Response pin
         */
    
        /**
         * Constructs a new CRemoteClient_StartPairing_Response.
         * @exports CRemoteClient_StartPairing_Response
         * @classdesc Represents a CRemoteClient_StartPairing_Response.
         * @implements ICRemoteClient_StartPairing_Response
         * @constructor
         * @param {ICRemoteClient_StartPairing_Response=} [properties] Properties to set
         */
        function CRemoteClient_StartPairing_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_StartPairing_Response pin.
         * @member {number} pin
         * @memberof CRemoteClient_StartPairing_Response
         * @instance
         */
        CRemoteClient_StartPairing_Response.prototype.pin = 0;
    
        /**
         * Creates a new CRemoteClient_StartPairing_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {ICRemoteClient_StartPairing_Response=} [properties] Properties to set
         * @returns {CRemoteClient_StartPairing_Response} CRemoteClient_StartPairing_Response instance
         */
        CRemoteClient_StartPairing_Response.create = function create(properties) {
            return new CRemoteClient_StartPairing_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_StartPairing_Response message. Does not implicitly {@link CRemoteClient_StartPairing_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {ICRemoteClient_StartPairing_Response} message CRemoteClient_StartPairing_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_StartPairing_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pin != null && message.hasOwnProperty("pin"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pin);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_StartPairing_Response message, length delimited. Does not implicitly {@link CRemoteClient_StartPairing_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {ICRemoteClient_StartPairing_Response} message CRemoteClient_StartPairing_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_StartPairing_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_StartPairing_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_StartPairing_Response} CRemoteClient_StartPairing_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_StartPairing_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_StartPairing_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pin = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_StartPairing_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_StartPairing_Response} CRemoteClient_StartPairing_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_StartPairing_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_StartPairing_Response message.
         * @function verify
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_StartPairing_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pin != null && message.hasOwnProperty("pin"))
                if (!$util.isInteger(message.pin))
                    return "pin: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_StartPairing_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_StartPairing_Response} CRemoteClient_StartPairing_Response
         */
        CRemoteClient_StartPairing_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_StartPairing_Response)
                return object;
            var message = new $root.CRemoteClient_StartPairing_Response();
            if (object.pin != null)
                message.pin = object.pin >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_StartPairing_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_StartPairing_Response
         * @static
         * @param {CRemoteClient_StartPairing_Response} message CRemoteClient_StartPairing_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_StartPairing_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pin = 0;
            if (message.pin != null && message.hasOwnProperty("pin"))
                object.pin = message.pin;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_StartPairing_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_StartPairing_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_StartPairing_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_StartPairing_Response;
    })();
    
    $root.CRemoteClient_SetPairingInfo_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_SetPairingInfo_Request.
         * @exports ICRemoteClient_SetPairingInfo_Request
         * @interface ICRemoteClient_SetPairingInfo_Request
         * @property {number|Long|null} [session_id] CRemoteClient_SetPairingInfo_Request session_id
         * @property {number|Long|null} [device_id] CRemoteClient_SetPairingInfo_Request device_id
         * @property {Uint8Array|null} [request] CRemoteClient_SetPairingInfo_Request request
         */
    
        /**
         * Constructs a new CRemoteClient_SetPairingInfo_Request.
         * @exports CRemoteClient_SetPairingInfo_Request
         * @classdesc Represents a CRemoteClient_SetPairingInfo_Request.
         * @implements ICRemoteClient_SetPairingInfo_Request
         * @constructor
         * @param {ICRemoteClient_SetPairingInfo_Request=} [properties] Properties to set
         */
        function CRemoteClient_SetPairingInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_SetPairingInfo_Request session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @instance
         */
        CRemoteClient_SetPairingInfo_Request.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SetPairingInfo_Request device_id.
         * @member {number|Long} device_id
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @instance
         */
        CRemoteClient_SetPairingInfo_Request.prototype.device_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SetPairingInfo_Request request.
         * @member {Uint8Array} request
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @instance
         */
        CRemoteClient_SetPairingInfo_Request.prototype.request = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_SetPairingInfo_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Request=} [properties] Properties to set
         * @returns {CRemoteClient_SetPairingInfo_Request} CRemoteClient_SetPairingInfo_Request instance
         */
        CRemoteClient_SetPairingInfo_Request.create = function create(properties) {
            return new CRemoteClient_SetPairingInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_SetPairingInfo_Request message. Does not implicitly {@link CRemoteClient_SetPairingInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Request} message CRemoteClient_SetPairingInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SetPairingInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.device_id);
            if (message.request != null && message.hasOwnProperty("request"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.request);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_SetPairingInfo_Request message, length delimited. Does not implicitly {@link CRemoteClient_SetPairingInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Request} message CRemoteClient_SetPairingInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SetPairingInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_SetPairingInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_SetPairingInfo_Request} CRemoteClient_SetPairingInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SetPairingInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_SetPairingInfo_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.device_id = reader.fixed64();
                    break;
                case 3:
                    message.request = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_SetPairingInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_SetPairingInfo_Request} CRemoteClient_SetPairingInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SetPairingInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_SetPairingInfo_Request message.
         * @function verify
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_SetPairingInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isInteger(message.device_id) && !(message.device_id && $util.isInteger(message.device_id.low) && $util.isInteger(message.device_id.high)))
                    return "device_id: integer|Long expected";
            if (message.request != null && message.hasOwnProperty("request"))
                if (!(message.request && typeof message.request.length === "number" || $util.isString(message.request)))
                    return "request: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_SetPairingInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_SetPairingInfo_Request} CRemoteClient_SetPairingInfo_Request
         */
        CRemoteClient_SetPairingInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_SetPairingInfo_Request)
                return object;
            var message = new $root.CRemoteClient_SetPairingInfo_Request();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.device_id != null)
                if ($util.Long)
                    (message.device_id = $util.Long.fromValue(object.device_id)).unsigned = false;
                else if (typeof object.device_id === "string")
                    message.device_id = parseInt(object.device_id, 10);
                else if (typeof object.device_id === "number")
                    message.device_id = object.device_id;
                else if (typeof object.device_id === "object")
                    message.device_id = new $util.LongBits(object.device_id.low >>> 0, object.device_id.high >>> 0).toNumber();
            if (object.request != null)
                if (typeof object.request === "string")
                    $util.base64.decode(object.request, message.request = $util.newBuffer($util.base64.length(object.request)), 0);
                else if (object.request.length)
                    message.request = object.request;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_SetPairingInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @static
         * @param {CRemoteClient_SetPairingInfo_Request} message CRemoteClient_SetPairingInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_SetPairingInfo_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.device_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.device_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.request = "";
                else {
                    object.request = [];
                    if (options.bytes !== Array)
                        object.request = $util.newBuffer(object.request);
                }
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (typeof message.device_id === "number")
                    object.device_id = options.longs === String ? String(message.device_id) : message.device_id;
                else
                    object.device_id = options.longs === String ? $util.Long.prototype.toString.call(message.device_id) : options.longs === Number ? new $util.LongBits(message.device_id.low >>> 0, message.device_id.high >>> 0).toNumber() : message.device_id;
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = options.bytes === String ? $util.base64.encode(message.request, 0, message.request.length) : options.bytes === Array ? Array.prototype.slice.call(message.request) : message.request;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_SetPairingInfo_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_SetPairingInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_SetPairingInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_SetPairingInfo_Request;
    })();
    
    $root.CRemoteClient_SetPairingInfo_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_SetPairingInfo_Response.
         * @exports ICRemoteClient_SetPairingInfo_Response
         * @interface ICRemoteClient_SetPairingInfo_Response
         */
    
        /**
         * Constructs a new CRemoteClient_SetPairingInfo_Response.
         * @exports CRemoteClient_SetPairingInfo_Response
         * @classdesc Represents a CRemoteClient_SetPairingInfo_Response.
         * @implements ICRemoteClient_SetPairingInfo_Response
         * @constructor
         * @param {ICRemoteClient_SetPairingInfo_Response=} [properties] Properties to set
         */
        function CRemoteClient_SetPairingInfo_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CRemoteClient_SetPairingInfo_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Response=} [properties] Properties to set
         * @returns {CRemoteClient_SetPairingInfo_Response} CRemoteClient_SetPairingInfo_Response instance
         */
        CRemoteClient_SetPairingInfo_Response.create = function create(properties) {
            return new CRemoteClient_SetPairingInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_SetPairingInfo_Response message. Does not implicitly {@link CRemoteClient_SetPairingInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Response} message CRemoteClient_SetPairingInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SetPairingInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_SetPairingInfo_Response message, length delimited. Does not implicitly {@link CRemoteClient_SetPairingInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_SetPairingInfo_Response} message CRemoteClient_SetPairingInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SetPairingInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_SetPairingInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_SetPairingInfo_Response} CRemoteClient_SetPairingInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SetPairingInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_SetPairingInfo_Response();
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
         * Decodes a CRemoteClient_SetPairingInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_SetPairingInfo_Response} CRemoteClient_SetPairingInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SetPairingInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_SetPairingInfo_Response message.
         * @function verify
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_SetPairingInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_SetPairingInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_SetPairingInfo_Response} CRemoteClient_SetPairingInfo_Response
         */
        CRemoteClient_SetPairingInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_SetPairingInfo_Response)
                return object;
            return new $root.CRemoteClient_SetPairingInfo_Response();
        };
    
        /**
         * Creates a plain object from a CRemoteClient_SetPairingInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @static
         * @param {CRemoteClient_SetPairingInfo_Response} message CRemoteClient_SetPairingInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_SetPairingInfo_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CRemoteClient_SetPairingInfo_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_SetPairingInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_SetPairingInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_SetPairingInfo_Response;
    })();
    
    $root.CRemoteClient_GetPairingInfo_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_GetPairingInfo_Request.
         * @exports ICRemoteClient_GetPairingInfo_Request
         * @interface ICRemoteClient_GetPairingInfo_Request
         * @property {number|null} [pin] CRemoteClient_GetPairingInfo_Request pin
         */
    
        /**
         * Constructs a new CRemoteClient_GetPairingInfo_Request.
         * @exports CRemoteClient_GetPairingInfo_Request
         * @classdesc Represents a CRemoteClient_GetPairingInfo_Request.
         * @implements ICRemoteClient_GetPairingInfo_Request
         * @constructor
         * @param {ICRemoteClient_GetPairingInfo_Request=} [properties] Properties to set
         */
        function CRemoteClient_GetPairingInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_GetPairingInfo_Request pin.
         * @member {number} pin
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @instance
         */
        CRemoteClient_GetPairingInfo_Request.prototype.pin = 0;
    
        /**
         * Creates a new CRemoteClient_GetPairingInfo_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Request=} [properties] Properties to set
         * @returns {CRemoteClient_GetPairingInfo_Request} CRemoteClient_GetPairingInfo_Request instance
         */
        CRemoteClient_GetPairingInfo_Request.create = function create(properties) {
            return new CRemoteClient_GetPairingInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_GetPairingInfo_Request message. Does not implicitly {@link CRemoteClient_GetPairingInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Request} message CRemoteClient_GetPairingInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetPairingInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pin != null && message.hasOwnProperty("pin"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pin);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_GetPairingInfo_Request message, length delimited. Does not implicitly {@link CRemoteClient_GetPairingInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Request} message CRemoteClient_GetPairingInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetPairingInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_GetPairingInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_GetPairingInfo_Request} CRemoteClient_GetPairingInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetPairingInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_GetPairingInfo_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pin = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_GetPairingInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_GetPairingInfo_Request} CRemoteClient_GetPairingInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetPairingInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_GetPairingInfo_Request message.
         * @function verify
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_GetPairingInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pin != null && message.hasOwnProperty("pin"))
                if (!$util.isInteger(message.pin))
                    return "pin: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_GetPairingInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_GetPairingInfo_Request} CRemoteClient_GetPairingInfo_Request
         */
        CRemoteClient_GetPairingInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_GetPairingInfo_Request)
                return object;
            var message = new $root.CRemoteClient_GetPairingInfo_Request();
            if (object.pin != null)
                message.pin = object.pin >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_GetPairingInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @static
         * @param {CRemoteClient_GetPairingInfo_Request} message CRemoteClient_GetPairingInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_GetPairingInfo_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.pin = 0;
            if (message.pin != null && message.hasOwnProperty("pin"))
                object.pin = message.pin;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_GetPairingInfo_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_GetPairingInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_GetPairingInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_GetPairingInfo_Request;
    })();
    
    $root.CRemoteClient_GetPairingInfo_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_GetPairingInfo_Response.
         * @exports ICRemoteClient_GetPairingInfo_Response
         * @interface ICRemoteClient_GetPairingInfo_Response
         * @property {number|Long|null} [session_id] CRemoteClient_GetPairingInfo_Response session_id
         * @property {number|Long|null} [device_id] CRemoteClient_GetPairingInfo_Response device_id
         * @property {Uint8Array|null} [request] CRemoteClient_GetPairingInfo_Response request
         */
    
        /**
         * Constructs a new CRemoteClient_GetPairingInfo_Response.
         * @exports CRemoteClient_GetPairingInfo_Response
         * @classdesc Represents a CRemoteClient_GetPairingInfo_Response.
         * @implements ICRemoteClient_GetPairingInfo_Response
         * @constructor
         * @param {ICRemoteClient_GetPairingInfo_Response=} [properties] Properties to set
         */
        function CRemoteClient_GetPairingInfo_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_GetPairingInfo_Response session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @instance
         */
        CRemoteClient_GetPairingInfo_Response.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_GetPairingInfo_Response device_id.
         * @member {number|Long} device_id
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @instance
         */
        CRemoteClient_GetPairingInfo_Response.prototype.device_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_GetPairingInfo_Response request.
         * @member {Uint8Array} request
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @instance
         */
        CRemoteClient_GetPairingInfo_Response.prototype.request = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_GetPairingInfo_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Response=} [properties] Properties to set
         * @returns {CRemoteClient_GetPairingInfo_Response} CRemoteClient_GetPairingInfo_Response instance
         */
        CRemoteClient_GetPairingInfo_Response.create = function create(properties) {
            return new CRemoteClient_GetPairingInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_GetPairingInfo_Response message. Does not implicitly {@link CRemoteClient_GetPairingInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Response} message CRemoteClient_GetPairingInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetPairingInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.device_id);
            if (message.request != null && message.hasOwnProperty("request"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.request);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_GetPairingInfo_Response message, length delimited. Does not implicitly {@link CRemoteClient_GetPairingInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {ICRemoteClient_GetPairingInfo_Response} message CRemoteClient_GetPairingInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetPairingInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_GetPairingInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_GetPairingInfo_Response} CRemoteClient_GetPairingInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetPairingInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_GetPairingInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.device_id = reader.fixed64();
                    break;
                case 3:
                    message.request = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_GetPairingInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_GetPairingInfo_Response} CRemoteClient_GetPairingInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetPairingInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_GetPairingInfo_Response message.
         * @function verify
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_GetPairingInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isInteger(message.device_id) && !(message.device_id && $util.isInteger(message.device_id.low) && $util.isInteger(message.device_id.high)))
                    return "device_id: integer|Long expected";
            if (message.request != null && message.hasOwnProperty("request"))
                if (!(message.request && typeof message.request.length === "number" || $util.isString(message.request)))
                    return "request: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_GetPairingInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_GetPairingInfo_Response} CRemoteClient_GetPairingInfo_Response
         */
        CRemoteClient_GetPairingInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_GetPairingInfo_Response)
                return object;
            var message = new $root.CRemoteClient_GetPairingInfo_Response();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.device_id != null)
                if ($util.Long)
                    (message.device_id = $util.Long.fromValue(object.device_id)).unsigned = false;
                else if (typeof object.device_id === "string")
                    message.device_id = parseInt(object.device_id, 10);
                else if (typeof object.device_id === "number")
                    message.device_id = object.device_id;
                else if (typeof object.device_id === "object")
                    message.device_id = new $util.LongBits(object.device_id.low >>> 0, object.device_id.high >>> 0).toNumber();
            if (object.request != null)
                if (typeof object.request === "string")
                    $util.base64.decode(object.request, message.request = $util.newBuffer($util.base64.length(object.request)), 0);
                else if (object.request.length)
                    message.request = object.request;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_GetPairingInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @static
         * @param {CRemoteClient_GetPairingInfo_Response} message CRemoteClient_GetPairingInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_GetPairingInfo_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.device_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.device_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.request = "";
                else {
                    object.request = [];
                    if (options.bytes !== Array)
                        object.request = $util.newBuffer(object.request);
                }
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (typeof message.device_id === "number")
                    object.device_id = options.longs === String ? String(message.device_id) : message.device_id;
                else
                    object.device_id = options.longs === String ? $util.Long.prototype.toString.call(message.device_id) : options.longs === Number ? new $util.LongBits(message.device_id.low >>> 0, message.device_id.high >>> 0).toNumber() : message.device_id;
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = options.bytes === String ? $util.base64.encode(message.request, 0, message.request.length) : options.bytes === Array ? Array.prototype.slice.call(message.request) : message.request;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_GetPairingInfo_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_GetPairingInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_GetPairingInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_GetPairingInfo_Response;
    })();
    
    $root.CRemoteClient_CancelPairing_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_CancelPairing_Request.
         * @exports ICRemoteClient_CancelPairing_Request
         * @interface ICRemoteClient_CancelPairing_Request
         * @property {number|Long|null} [session_id] CRemoteClient_CancelPairing_Request session_id
         */
    
        /**
         * Constructs a new CRemoteClient_CancelPairing_Request.
         * @exports CRemoteClient_CancelPairing_Request
         * @classdesc Represents a CRemoteClient_CancelPairing_Request.
         * @implements ICRemoteClient_CancelPairing_Request
         * @constructor
         * @param {ICRemoteClient_CancelPairing_Request=} [properties] Properties to set
         */
        function CRemoteClient_CancelPairing_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_CancelPairing_Request session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_CancelPairing_Request
         * @instance
         */
        CRemoteClient_CancelPairing_Request.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_CancelPairing_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {ICRemoteClient_CancelPairing_Request=} [properties] Properties to set
         * @returns {CRemoteClient_CancelPairing_Request} CRemoteClient_CancelPairing_Request instance
         */
        CRemoteClient_CancelPairing_Request.create = function create(properties) {
            return new CRemoteClient_CancelPairing_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_CancelPairing_Request message. Does not implicitly {@link CRemoteClient_CancelPairing_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {ICRemoteClient_CancelPairing_Request} message CRemoteClient_CancelPairing_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CancelPairing_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_CancelPairing_Request message, length delimited. Does not implicitly {@link CRemoteClient_CancelPairing_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {ICRemoteClient_CancelPairing_Request} message CRemoteClient_CancelPairing_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CancelPairing_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_CancelPairing_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_CancelPairing_Request} CRemoteClient_CancelPairing_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CancelPairing_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_CancelPairing_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_CancelPairing_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_CancelPairing_Request} CRemoteClient_CancelPairing_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CancelPairing_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_CancelPairing_Request message.
         * @function verify
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_CancelPairing_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_CancelPairing_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_CancelPairing_Request} CRemoteClient_CancelPairing_Request
         */
        CRemoteClient_CancelPairing_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_CancelPairing_Request)
                return object;
            var message = new $root.CRemoteClient_CancelPairing_Request();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_CancelPairing_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_CancelPairing_Request
         * @static
         * @param {CRemoteClient_CancelPairing_Request} message CRemoteClient_CancelPairing_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_CancelPairing_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_CancelPairing_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_CancelPairing_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_CancelPairing_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_CancelPairing_Request;
    })();
    
    $root.CRemoteClient_CancelPairing_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_CancelPairing_Response.
         * @exports ICRemoteClient_CancelPairing_Response
         * @interface ICRemoteClient_CancelPairing_Response
         */
    
        /**
         * Constructs a new CRemoteClient_CancelPairing_Response.
         * @exports CRemoteClient_CancelPairing_Response
         * @classdesc Represents a CRemoteClient_CancelPairing_Response.
         * @implements ICRemoteClient_CancelPairing_Response
         * @constructor
         * @param {ICRemoteClient_CancelPairing_Response=} [properties] Properties to set
         */
        function CRemoteClient_CancelPairing_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CRemoteClient_CancelPairing_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {ICRemoteClient_CancelPairing_Response=} [properties] Properties to set
         * @returns {CRemoteClient_CancelPairing_Response} CRemoteClient_CancelPairing_Response instance
         */
        CRemoteClient_CancelPairing_Response.create = function create(properties) {
            return new CRemoteClient_CancelPairing_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_CancelPairing_Response message. Does not implicitly {@link CRemoteClient_CancelPairing_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {ICRemoteClient_CancelPairing_Response} message CRemoteClient_CancelPairing_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CancelPairing_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_CancelPairing_Response message, length delimited. Does not implicitly {@link CRemoteClient_CancelPairing_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {ICRemoteClient_CancelPairing_Response} message CRemoteClient_CancelPairing_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_CancelPairing_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_CancelPairing_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_CancelPairing_Response} CRemoteClient_CancelPairing_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CancelPairing_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_CancelPairing_Response();
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
         * Decodes a CRemoteClient_CancelPairing_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_CancelPairing_Response} CRemoteClient_CancelPairing_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_CancelPairing_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_CancelPairing_Response message.
         * @function verify
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_CancelPairing_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_CancelPairing_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_CancelPairing_Response} CRemoteClient_CancelPairing_Response
         */
        CRemoteClient_CancelPairing_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_CancelPairing_Response)
                return object;
            return new $root.CRemoteClient_CancelPairing_Response();
        };
    
        /**
         * Creates a plain object from a CRemoteClient_CancelPairing_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_CancelPairing_Response
         * @static
         * @param {CRemoteClient_CancelPairing_Response} message CRemoteClient_CancelPairing_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_CancelPairing_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CRemoteClient_CancelPairing_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_CancelPairing_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_CancelPairing_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_CancelPairing_Response;
    })();
    
    $root.CRemoteClient_RegisterStatusUpdate_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_RegisterStatusUpdate_Notification.
         * @exports ICRemoteClient_RegisterStatusUpdate_Notification
         * @interface ICRemoteClient_RegisterStatusUpdate_Notification
         * @property {number|Long|null} [session_id] CRemoteClient_RegisterStatusUpdate_Notification session_id
         * @property {number|Long|null} [steamid] CRemoteClient_RegisterStatusUpdate_Notification steamid
         * @property {number|Long|null} [device_id] CRemoteClient_RegisterStatusUpdate_Notification device_id
         */
    
        /**
         * Constructs a new CRemoteClient_RegisterStatusUpdate_Notification.
         * @exports CRemoteClient_RegisterStatusUpdate_Notification
         * @classdesc Represents a CRemoteClient_RegisterStatusUpdate_Notification.
         * @implements ICRemoteClient_RegisterStatusUpdate_Notification
         * @constructor
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification=} [properties] Properties to set
         */
        function CRemoteClient_RegisterStatusUpdate_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_RegisterStatusUpdate_Notification session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_RegisterStatusUpdate_Notification.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_RegisterStatusUpdate_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_RegisterStatusUpdate_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_RegisterStatusUpdate_Notification device_id.
         * @member {number|Long} device_id
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_RegisterStatusUpdate_Notification.prototype.device_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_RegisterStatusUpdate_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_RegisterStatusUpdate_Notification} CRemoteClient_RegisterStatusUpdate_Notification instance
         */
        CRemoteClient_RegisterStatusUpdate_Notification.create = function create(properties) {
            return new CRemoteClient_RegisterStatusUpdate_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_RegisterStatusUpdate_Notification message. Does not implicitly {@link CRemoteClient_RegisterStatusUpdate_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification} message CRemoteClient_RegisterStatusUpdate_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_RegisterStatusUpdate_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.device_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_RegisterStatusUpdate_Notification message, length delimited. Does not implicitly {@link CRemoteClient_RegisterStatusUpdate_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_RegisterStatusUpdate_Notification} message CRemoteClient_RegisterStatusUpdate_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_RegisterStatusUpdate_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_RegisterStatusUpdate_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_RegisterStatusUpdate_Notification} CRemoteClient_RegisterStatusUpdate_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_RegisterStatusUpdate_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_RegisterStatusUpdate_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.steamid = reader.fixed64();
                    break;
                case 3:
                    message.device_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_RegisterStatusUpdate_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_RegisterStatusUpdate_Notification} CRemoteClient_RegisterStatusUpdate_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_RegisterStatusUpdate_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_RegisterStatusUpdate_Notification message.
         * @function verify
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_RegisterStatusUpdate_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isInteger(message.device_id) && !(message.device_id && $util.isInteger(message.device_id.low) && $util.isInteger(message.device_id.high)))
                    return "device_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_RegisterStatusUpdate_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_RegisterStatusUpdate_Notification} CRemoteClient_RegisterStatusUpdate_Notification
         */
        CRemoteClient_RegisterStatusUpdate_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_RegisterStatusUpdate_Notification)
                return object;
            var message = new $root.CRemoteClient_RegisterStatusUpdate_Notification();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.device_id != null)
                if ($util.Long)
                    (message.device_id = $util.Long.fromValue(object.device_id)).unsigned = false;
                else if (typeof object.device_id === "string")
                    message.device_id = parseInt(object.device_id, 10);
                else if (typeof object.device_id === "number")
                    message.device_id = object.device_id;
                else if (typeof object.device_id === "object")
                    message.device_id = new $util.LongBits(object.device_id.low >>> 0, object.device_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_RegisterStatusUpdate_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @static
         * @param {CRemoteClient_RegisterStatusUpdate_Notification} message CRemoteClient_RegisterStatusUpdate_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_RegisterStatusUpdate_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.device_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.device_id = options.longs === String ? "0" : 0;
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (typeof message.device_id === "number")
                    object.device_id = options.longs === String ? String(message.device_id) : message.device_id;
                else
                    object.device_id = options.longs === String ? $util.Long.prototype.toString.call(message.device_id) : options.longs === Number ? new $util.LongBits(message.device_id.low >>> 0, message.device_id.high >>> 0).toNumber() : message.device_id;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_RegisterStatusUpdate_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_RegisterStatusUpdate_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_RegisterStatusUpdate_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_RegisterStatusUpdate_Notification;
    })();
    
    $root.CRemoteClient_UnregisterStatusUpdate_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_UnregisterStatusUpdate_Notification.
         * @exports ICRemoteClient_UnregisterStatusUpdate_Notification
         * @interface ICRemoteClient_UnregisterStatusUpdate_Notification
         * @property {number|Long|null} [session_id] CRemoteClient_UnregisterStatusUpdate_Notification session_id
         * @property {number|Long|null} [steamid] CRemoteClient_UnregisterStatusUpdate_Notification steamid
         */
    
        /**
         * Constructs a new CRemoteClient_UnregisterStatusUpdate_Notification.
         * @exports CRemoteClient_UnregisterStatusUpdate_Notification
         * @classdesc Represents a CRemoteClient_UnregisterStatusUpdate_Notification.
         * @implements ICRemoteClient_UnregisterStatusUpdate_Notification
         * @constructor
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification=} [properties] Properties to set
         */
        function CRemoteClient_UnregisterStatusUpdate_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_UnregisterStatusUpdate_Notification session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_UnregisterStatusUpdate_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @instance
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_UnregisterStatusUpdate_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_UnregisterStatusUpdate_Notification} CRemoteClient_UnregisterStatusUpdate_Notification instance
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.create = function create(properties) {
            return new CRemoteClient_UnregisterStatusUpdate_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_UnregisterStatusUpdate_Notification message. Does not implicitly {@link CRemoteClient_UnregisterStatusUpdate_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification} message CRemoteClient_UnregisterStatusUpdate_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_UnregisterStatusUpdate_Notification message, length delimited. Does not implicitly {@link CRemoteClient_UnregisterStatusUpdate_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {ICRemoteClient_UnregisterStatusUpdate_Notification} message CRemoteClient_UnregisterStatusUpdate_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_UnregisterStatusUpdate_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_UnregisterStatusUpdate_Notification} CRemoteClient_UnregisterStatusUpdate_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_UnregisterStatusUpdate_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
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
         * Decodes a CRemoteClient_UnregisterStatusUpdate_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_UnregisterStatusUpdate_Notification} CRemoteClient_UnregisterStatusUpdate_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_UnregisterStatusUpdate_Notification message.
         * @function verify
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_UnregisterStatusUpdate_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_UnregisterStatusUpdate_Notification} CRemoteClient_UnregisterStatusUpdate_Notification
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_UnregisterStatusUpdate_Notification)
                return object;
            var message = new $root.CRemoteClient_UnregisterStatusUpdate_Notification();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
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
         * Creates a plain object from a CRemoteClient_UnregisterStatusUpdate_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @static
         * @param {CRemoteClient_UnregisterStatusUpdate_Notification} message CRemoteClient_UnregisterStatusUpdate_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_UnregisterStatusUpdate_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_UnregisterStatusUpdate_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_UnregisterStatusUpdate_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_UnregisterStatusUpdate_Notification;
    })();
    
    $root.CRemoteClient_Online_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_Online_Notification.
         * @exports ICRemoteClient_Online_Notification
         * @interface ICRemoteClient_Online_Notification
         * @property {number|Long|null} [steamid] CRemoteClient_Online_Notification steamid
         */
    
        /**
         * Constructs a new CRemoteClient_Online_Notification.
         * @exports CRemoteClient_Online_Notification
         * @classdesc Represents a CRemoteClient_Online_Notification.
         * @implements ICRemoteClient_Online_Notification
         * @constructor
         * @param {ICRemoteClient_Online_Notification=} [properties] Properties to set
         */
        function CRemoteClient_Online_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_Online_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_Online_Notification
         * @instance
         */
        CRemoteClient_Online_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_Online_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {ICRemoteClient_Online_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_Online_Notification} CRemoteClient_Online_Notification instance
         */
        CRemoteClient_Online_Notification.create = function create(properties) {
            return new CRemoteClient_Online_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_Online_Notification message. Does not implicitly {@link CRemoteClient_Online_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {ICRemoteClient_Online_Notification} message CRemoteClient_Online_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_Online_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_Online_Notification message, length delimited. Does not implicitly {@link CRemoteClient_Online_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {ICRemoteClient_Online_Notification} message CRemoteClient_Online_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_Online_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_Online_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_Online_Notification} CRemoteClient_Online_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_Online_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_Online_Notification();
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
         * Decodes a CRemoteClient_Online_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_Online_Notification} CRemoteClient_Online_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_Online_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_Online_Notification message.
         * @function verify
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_Online_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_Online_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_Online_Notification} CRemoteClient_Online_Notification
         */
        CRemoteClient_Online_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_Online_Notification)
                return object;
            var message = new $root.CRemoteClient_Online_Notification();
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
         * Creates a plain object from a CRemoteClient_Online_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_Online_Notification
         * @static
         * @param {CRemoteClient_Online_Notification} message CRemoteClient_Online_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_Online_Notification.toObject = function toObject(message, options) {
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
         * Converts this CRemoteClient_Online_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_Online_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_Online_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_Online_Notification;
    })();
    
    $root.CRemoteClient_RemotePacket_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_RemotePacket_Notification.
         * @exports ICRemoteClient_RemotePacket_Notification
         * @interface ICRemoteClient_RemotePacket_Notification
         * @property {number|Long|null} [session_id] CRemoteClient_RemotePacket_Notification session_id
         * @property {number|Long|null} [steamid] CRemoteClient_RemotePacket_Notification steamid
         * @property {Uint8Array|null} [payload] CRemoteClient_RemotePacket_Notification payload
         */
    
        /**
         * Constructs a new CRemoteClient_RemotePacket_Notification.
         * @exports CRemoteClient_RemotePacket_Notification
         * @classdesc Represents a CRemoteClient_RemotePacket_Notification.
         * @implements ICRemoteClient_RemotePacket_Notification
         * @constructor
         * @param {ICRemoteClient_RemotePacket_Notification=} [properties] Properties to set
         */
        function CRemoteClient_RemotePacket_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_RemotePacket_Notification session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_RemotePacket_Notification
         * @instance
         */
        CRemoteClient_RemotePacket_Notification.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_RemotePacket_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_RemotePacket_Notification
         * @instance
         */
        CRemoteClient_RemotePacket_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_RemotePacket_Notification payload.
         * @member {Uint8Array} payload
         * @memberof CRemoteClient_RemotePacket_Notification
         * @instance
         */
        CRemoteClient_RemotePacket_Notification.prototype.payload = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_RemotePacket_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {ICRemoteClient_RemotePacket_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_RemotePacket_Notification} CRemoteClient_RemotePacket_Notification instance
         */
        CRemoteClient_RemotePacket_Notification.create = function create(properties) {
            return new CRemoteClient_RemotePacket_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_RemotePacket_Notification message. Does not implicitly {@link CRemoteClient_RemotePacket_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {ICRemoteClient_RemotePacket_Notification} message CRemoteClient_RemotePacket_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_RemotePacket_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.payload);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_RemotePacket_Notification message, length delimited. Does not implicitly {@link CRemoteClient_RemotePacket_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {ICRemoteClient_RemotePacket_Notification} message CRemoteClient_RemotePacket_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_RemotePacket_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_RemotePacket_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_RemotePacket_Notification} CRemoteClient_RemotePacket_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_RemotePacket_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_RemotePacket_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.steamid = reader.fixed64();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_RemotePacket_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_RemotePacket_Notification} CRemoteClient_RemotePacket_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_RemotePacket_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_RemotePacket_Notification message.
         * @function verify
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_RemotePacket_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_RemotePacket_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_RemotePacket_Notification} CRemoteClient_RemotePacket_Notification
         */
        CRemoteClient_RemotePacket_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_RemotePacket_Notification)
                return object;
            var message = new $root.CRemoteClient_RemotePacket_Notification();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_RemotePacket_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_RemotePacket_Notification
         * @static
         * @param {CRemoteClient_RemotePacket_Notification} message CRemoteClient_RemotePacket_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_RemotePacket_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_RemotePacket_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_RemotePacket_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_RemotePacket_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_RemotePacket_Notification;
    })();
    
    $root.CRemoteClient_ReplyPacket_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_ReplyPacket_Notification.
         * @exports ICRemoteClient_ReplyPacket_Notification
         * @interface ICRemoteClient_ReplyPacket_Notification
         * @property {number|Long|null} [session_id] CRemoteClient_ReplyPacket_Notification session_id
         * @property {Uint8Array|null} [payload] CRemoteClient_ReplyPacket_Notification payload
         */
    
        /**
         * Constructs a new CRemoteClient_ReplyPacket_Notification.
         * @exports CRemoteClient_ReplyPacket_Notification
         * @classdesc Represents a CRemoteClient_ReplyPacket_Notification.
         * @implements ICRemoteClient_ReplyPacket_Notification
         * @constructor
         * @param {ICRemoteClient_ReplyPacket_Notification=} [properties] Properties to set
         */
        function CRemoteClient_ReplyPacket_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_ReplyPacket_Notification session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @instance
         */
        CRemoteClient_ReplyPacket_Notification.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_ReplyPacket_Notification payload.
         * @member {Uint8Array} payload
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @instance
         */
        CRemoteClient_ReplyPacket_Notification.prototype.payload = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_ReplyPacket_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {ICRemoteClient_ReplyPacket_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_ReplyPacket_Notification} CRemoteClient_ReplyPacket_Notification instance
         */
        CRemoteClient_ReplyPacket_Notification.create = function create(properties) {
            return new CRemoteClient_ReplyPacket_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_ReplyPacket_Notification message. Does not implicitly {@link CRemoteClient_ReplyPacket_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {ICRemoteClient_ReplyPacket_Notification} message CRemoteClient_ReplyPacket_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_ReplyPacket_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_ReplyPacket_Notification message, length delimited. Does not implicitly {@link CRemoteClient_ReplyPacket_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {ICRemoteClient_ReplyPacket_Notification} message CRemoteClient_ReplyPacket_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_ReplyPacket_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_ReplyPacket_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_ReplyPacket_Notification} CRemoteClient_ReplyPacket_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_ReplyPacket_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_ReplyPacket_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_ReplyPacket_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_ReplyPacket_Notification} CRemoteClient_ReplyPacket_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_ReplyPacket_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_ReplyPacket_Notification message.
         * @function verify
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_ReplyPacket_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_ReplyPacket_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_ReplyPacket_Notification} CRemoteClient_ReplyPacket_Notification
         */
        CRemoteClient_ReplyPacket_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_ReplyPacket_Notification)
                return object;
            var message = new $root.CRemoteClient_ReplyPacket_Notification();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_ReplyPacket_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @static
         * @param {CRemoteClient_ReplyPacket_Notification} message CRemoteClient_ReplyPacket_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_ReplyPacket_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_ReplyPacket_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_ReplyPacket_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_ReplyPacket_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_ReplyPacket_Notification;
    })();
    
    $root.CRemoteClient_GetReplies_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_GetReplies_Request.
         * @exports ICRemoteClient_GetReplies_Request
         * @interface ICRemoteClient_GetReplies_Request
         * @property {number|Long|null} [session_id] CRemoteClient_GetReplies_Request session_id
         */
    
        /**
         * Constructs a new CRemoteClient_GetReplies_Request.
         * @exports CRemoteClient_GetReplies_Request
         * @classdesc Represents a CRemoteClient_GetReplies_Request.
         * @implements ICRemoteClient_GetReplies_Request
         * @constructor
         * @param {ICRemoteClient_GetReplies_Request=} [properties] Properties to set
         */
        function CRemoteClient_GetReplies_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_GetReplies_Request session_id.
         * @member {number|Long} session_id
         * @memberof CRemoteClient_GetReplies_Request
         * @instance
         */
        CRemoteClient_GetReplies_Request.prototype.session_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemoteClient_GetReplies_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {ICRemoteClient_GetReplies_Request=} [properties] Properties to set
         * @returns {CRemoteClient_GetReplies_Request} CRemoteClient_GetReplies_Request instance
         */
        CRemoteClient_GetReplies_Request.create = function create(properties) {
            return new CRemoteClient_GetReplies_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_GetReplies_Request message. Does not implicitly {@link CRemoteClient_GetReplies_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {ICRemoteClient_GetReplies_Request} message CRemoteClient_GetReplies_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetReplies_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.session_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_GetReplies_Request message, length delimited. Does not implicitly {@link CRemoteClient_GetReplies_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {ICRemoteClient_GetReplies_Request} message CRemoteClient_GetReplies_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetReplies_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_GetReplies_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_GetReplies_Request} CRemoteClient_GetReplies_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetReplies_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_GetReplies_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_GetReplies_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_GetReplies_Request} CRemoteClient_GetReplies_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetReplies_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_GetReplies_Request message.
         * @function verify
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_GetReplies_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id) && !(message.session_id && $util.isInteger(message.session_id.low) && $util.isInteger(message.session_id.high)))
                    return "session_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_GetReplies_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_GetReplies_Request} CRemoteClient_GetReplies_Request
         */
        CRemoteClient_GetReplies_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_GetReplies_Request)
                return object;
            var message = new $root.CRemoteClient_GetReplies_Request();
            if (object.session_id != null)
                if ($util.Long)
                    (message.session_id = $util.Long.fromValue(object.session_id)).unsigned = false;
                else if (typeof object.session_id === "string")
                    message.session_id = parseInt(object.session_id, 10);
                else if (typeof object.session_id === "number")
                    message.session_id = object.session_id;
                else if (typeof object.session_id === "object")
                    message.session_id = new $util.LongBits(object.session_id.low >>> 0, object.session_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_GetReplies_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_GetReplies_Request
         * @static
         * @param {CRemoteClient_GetReplies_Request} message CRemoteClient_GetReplies_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_GetReplies_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.session_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.session_id = options.longs === String ? "0" : 0;
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (typeof message.session_id === "number")
                    object.session_id = options.longs === String ? String(message.session_id) : message.session_id;
                else
                    object.session_id = options.longs === String ? $util.Long.prototype.toString.call(message.session_id) : options.longs === Number ? new $util.LongBits(message.session_id.low >>> 0, message.session_id.high >>> 0).toNumber() : message.session_id;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_GetReplies_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_GetReplies_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_GetReplies_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_GetReplies_Request;
    })();
    
    $root.CRemoteClient_GetReplies_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_GetReplies_Response.
         * @exports ICRemoteClient_GetReplies_Response
         * @interface ICRemoteClient_GetReplies_Response
         * @property {Array.<Uint8Array>|null} [payload] CRemoteClient_GetReplies_Response payload
         */
    
        /**
         * Constructs a new CRemoteClient_GetReplies_Response.
         * @exports CRemoteClient_GetReplies_Response
         * @classdesc Represents a CRemoteClient_GetReplies_Response.
         * @implements ICRemoteClient_GetReplies_Response
         * @constructor
         * @param {ICRemoteClient_GetReplies_Response=} [properties] Properties to set
         */
        function CRemoteClient_GetReplies_Response(properties) {
            this.payload = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_GetReplies_Response payload.
         * @member {Array.<Uint8Array>} payload
         * @memberof CRemoteClient_GetReplies_Response
         * @instance
         */
        CRemoteClient_GetReplies_Response.prototype.payload = $util.emptyArray;
    
        /**
         * Creates a new CRemoteClient_GetReplies_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {ICRemoteClient_GetReplies_Response=} [properties] Properties to set
         * @returns {CRemoteClient_GetReplies_Response} CRemoteClient_GetReplies_Response instance
         */
        CRemoteClient_GetReplies_Response.create = function create(properties) {
            return new CRemoteClient_GetReplies_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_GetReplies_Response message. Does not implicitly {@link CRemoteClient_GetReplies_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {ICRemoteClient_GetReplies_Response} message CRemoteClient_GetReplies_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetReplies_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payload != null && message.payload.length)
                for (var i = 0; i < message.payload.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.payload[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_GetReplies_Response message, length delimited. Does not implicitly {@link CRemoteClient_GetReplies_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {ICRemoteClient_GetReplies_Response} message CRemoteClient_GetReplies_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_GetReplies_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_GetReplies_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_GetReplies_Response} CRemoteClient_GetReplies_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetReplies_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_GetReplies_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.payload && message.payload.length))
                        message.payload = [];
                    message.payload.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_GetReplies_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_GetReplies_Response} CRemoteClient_GetReplies_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_GetReplies_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_GetReplies_Response message.
         * @function verify
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_GetReplies_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payload != null && message.hasOwnProperty("payload")) {
                if (!Array.isArray(message.payload))
                    return "payload: array expected";
                for (var i = 0; i < message.payload.length; ++i)
                    if (!(message.payload[i] && typeof message.payload[i].length === "number" || $util.isString(message.payload[i])))
                        return "payload: buffer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CRemoteClient_GetReplies_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_GetReplies_Response} CRemoteClient_GetReplies_Response
         */
        CRemoteClient_GetReplies_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_GetReplies_Response)
                return object;
            var message = new $root.CRemoteClient_GetReplies_Response();
            if (object.payload) {
                if (!Array.isArray(object.payload))
                    throw TypeError(".CRemoteClient_GetReplies_Response.payload: array expected");
                message.payload = [];
                for (var i = 0; i < object.payload.length; ++i)
                    if (typeof object.payload[i] === "string")
                        $util.base64.decode(object.payload[i], message.payload[i] = $util.newBuffer($util.base64.length(object.payload[i])), 0);
                    else if (object.payload[i].length)
                        message.payload[i] = object.payload[i];
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_GetReplies_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_GetReplies_Response
         * @static
         * @param {CRemoteClient_GetReplies_Response} message CRemoteClient_GetReplies_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_GetReplies_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.payload = [];
            if (message.payload && message.payload.length) {
                object.payload = [];
                for (var j = 0; j < message.payload.length; ++j)
                    object.payload[j] = options.bytes === String ? $util.base64.encode(message.payload[j], 0, message.payload[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.payload[j]) : message.payload[j];
            }
            return object;
        };
    
        /**
         * Converts this CRemoteClient_GetReplies_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_GetReplies_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_GetReplies_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_GetReplies_Response;
    })();
    
    $root.CRemoteClient_AllocateTURNServer_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateTURNServer_Request.
         * @exports ICRemoteClient_AllocateTURNServer_Request
         * @interface ICRemoteClient_AllocateTURNServer_Request
         * @property {number|null} [cellid] CRemoteClient_AllocateTURNServer_Request cellid
         * @property {string|null} [credentials] CRemoteClient_AllocateTURNServer_Request credentials
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateTURNServer_Request.
         * @exports CRemoteClient_AllocateTURNServer_Request
         * @classdesc Represents a CRemoteClient_AllocateTURNServer_Request.
         * @implements ICRemoteClient_AllocateTURNServer_Request
         * @constructor
         * @param {ICRemoteClient_AllocateTURNServer_Request=} [properties] Properties to set
         */
        function CRemoteClient_AllocateTURNServer_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateTURNServer_Request cellid.
         * @member {number} cellid
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @instance
         */
        CRemoteClient_AllocateTURNServer_Request.prototype.cellid = 0;
    
        /**
         * CRemoteClient_AllocateTURNServer_Request credentials.
         * @member {string} credentials
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @instance
         */
        CRemoteClient_AllocateTURNServer_Request.prototype.credentials = "";
    
        /**
         * Creates a new CRemoteClient_AllocateTURNServer_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Request=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateTURNServer_Request} CRemoteClient_AllocateTURNServer_Request instance
         */
        CRemoteClient_AllocateTURNServer_Request.create = function create(properties) {
            return new CRemoteClient_AllocateTURNServer_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateTURNServer_Request message. Does not implicitly {@link CRemoteClient_AllocateTURNServer_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Request} message CRemoteClient_AllocateTURNServer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateTURNServer_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cellid);
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.credentials);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateTURNServer_Request message, length delimited. Does not implicitly {@link CRemoteClient_AllocateTURNServer_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Request} message CRemoteClient_AllocateTURNServer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateTURNServer_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateTURNServer_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateTURNServer_Request} CRemoteClient_AllocateTURNServer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateTURNServer_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateTURNServer_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cellid = reader.uint32();
                    break;
                case 2:
                    message.credentials = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateTURNServer_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateTURNServer_Request} CRemoteClient_AllocateTURNServer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateTURNServer_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateTURNServer_Request message.
         * @function verify
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateTURNServer_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                if (!$util.isInteger(message.cellid))
                    return "cellid: integer expected";
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                if (!$util.isString(message.credentials))
                    return "credentials: string expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateTURNServer_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateTURNServer_Request} CRemoteClient_AllocateTURNServer_Request
         */
        CRemoteClient_AllocateTURNServer_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateTURNServer_Request)
                return object;
            var message = new $root.CRemoteClient_AllocateTURNServer_Request();
            if (object.cellid != null)
                message.cellid = object.cellid >>> 0;
            if (object.credentials != null)
                message.credentials = String(object.credentials);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateTURNServer_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @static
         * @param {CRemoteClient_AllocateTURNServer_Request} message CRemoteClient_AllocateTURNServer_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateTURNServer_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cellid = 0;
                object.credentials = "";
            }
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                object.cellid = message.cellid;
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                object.credentials = message.credentials;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateTURNServer_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateTURNServer_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateTURNServer_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateTURNServer_Request;
    })();
    
    $root.CRemoteClient_AllocateTURNServer_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateTURNServer_Response.
         * @exports ICRemoteClient_AllocateTURNServer_Response
         * @interface ICRemoteClient_AllocateTURNServer_Response
         * @property {string|null} [turn_server] CRemoteClient_AllocateTURNServer_Response turn_server
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateTURNServer_Response.
         * @exports CRemoteClient_AllocateTURNServer_Response
         * @classdesc Represents a CRemoteClient_AllocateTURNServer_Response.
         * @implements ICRemoteClient_AllocateTURNServer_Response
         * @constructor
         * @param {ICRemoteClient_AllocateTURNServer_Response=} [properties] Properties to set
         */
        function CRemoteClient_AllocateTURNServer_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateTURNServer_Response turn_server.
         * @member {string} turn_server
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @instance
         */
        CRemoteClient_AllocateTURNServer_Response.prototype.turn_server = "";
    
        /**
         * Creates a new CRemoteClient_AllocateTURNServer_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Response=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateTURNServer_Response} CRemoteClient_AllocateTURNServer_Response instance
         */
        CRemoteClient_AllocateTURNServer_Response.create = function create(properties) {
            return new CRemoteClient_AllocateTURNServer_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateTURNServer_Response message. Does not implicitly {@link CRemoteClient_AllocateTURNServer_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Response} message CRemoteClient_AllocateTURNServer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateTURNServer_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.turn_server != null && message.hasOwnProperty("turn_server"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.turn_server);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateTURNServer_Response message, length delimited. Does not implicitly {@link CRemoteClient_AllocateTURNServer_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {ICRemoteClient_AllocateTURNServer_Response} message CRemoteClient_AllocateTURNServer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateTURNServer_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateTURNServer_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateTURNServer_Response} CRemoteClient_AllocateTURNServer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateTURNServer_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateTURNServer_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.turn_server = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateTURNServer_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateTURNServer_Response} CRemoteClient_AllocateTURNServer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateTURNServer_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateTURNServer_Response message.
         * @function verify
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateTURNServer_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.turn_server != null && message.hasOwnProperty("turn_server"))
                if (!$util.isString(message.turn_server))
                    return "turn_server: string expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateTURNServer_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateTURNServer_Response} CRemoteClient_AllocateTURNServer_Response
         */
        CRemoteClient_AllocateTURNServer_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateTURNServer_Response)
                return object;
            var message = new $root.CRemoteClient_AllocateTURNServer_Response();
            if (object.turn_server != null)
                message.turn_server = String(object.turn_server);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateTURNServer_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @static
         * @param {CRemoteClient_AllocateTURNServer_Response} message CRemoteClient_AllocateTURNServer_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateTURNServer_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.turn_server = "";
            if (message.turn_server != null && message.hasOwnProperty("turn_server"))
                object.turn_server = message.turn_server;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateTURNServer_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateTURNServer_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateTURNServer_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateTURNServer_Response;
    })();
    
    $root.CRemoteClient_AllocateRelayServer_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateRelayServer_Request.
         * @exports ICRemoteClient_AllocateRelayServer_Request
         * @interface ICRemoteClient_AllocateRelayServer_Request
         * @property {number|null} [cellid] CRemoteClient_AllocateRelayServer_Request cellid
         * @property {string|null} [credentials] CRemoteClient_AllocateRelayServer_Request credentials
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateRelayServer_Request.
         * @exports CRemoteClient_AllocateRelayServer_Request
         * @classdesc Represents a CRemoteClient_AllocateRelayServer_Request.
         * @implements ICRemoteClient_AllocateRelayServer_Request
         * @constructor
         * @param {ICRemoteClient_AllocateRelayServer_Request=} [properties] Properties to set
         */
        function CRemoteClient_AllocateRelayServer_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateRelayServer_Request cellid.
         * @member {number} cellid
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @instance
         */
        CRemoteClient_AllocateRelayServer_Request.prototype.cellid = 0;
    
        /**
         * CRemoteClient_AllocateRelayServer_Request credentials.
         * @member {string} credentials
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @instance
         */
        CRemoteClient_AllocateRelayServer_Request.prototype.credentials = "";
    
        /**
         * Creates a new CRemoteClient_AllocateRelayServer_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Request=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateRelayServer_Request} CRemoteClient_AllocateRelayServer_Request instance
         */
        CRemoteClient_AllocateRelayServer_Request.create = function create(properties) {
            return new CRemoteClient_AllocateRelayServer_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateRelayServer_Request message. Does not implicitly {@link CRemoteClient_AllocateRelayServer_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Request} message CRemoteClient_AllocateRelayServer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateRelayServer_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cellid);
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.credentials);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateRelayServer_Request message, length delimited. Does not implicitly {@link CRemoteClient_AllocateRelayServer_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Request} message CRemoteClient_AllocateRelayServer_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateRelayServer_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateRelayServer_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateRelayServer_Request} CRemoteClient_AllocateRelayServer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateRelayServer_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateRelayServer_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cellid = reader.uint32();
                    break;
                case 2:
                    message.credentials = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateRelayServer_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateRelayServer_Request} CRemoteClient_AllocateRelayServer_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateRelayServer_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateRelayServer_Request message.
         * @function verify
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateRelayServer_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                if (!$util.isInteger(message.cellid))
                    return "cellid: integer expected";
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                if (!$util.isString(message.credentials))
                    return "credentials: string expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateRelayServer_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateRelayServer_Request} CRemoteClient_AllocateRelayServer_Request
         */
        CRemoteClient_AllocateRelayServer_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateRelayServer_Request)
                return object;
            var message = new $root.CRemoteClient_AllocateRelayServer_Request();
            if (object.cellid != null)
                message.cellid = object.cellid >>> 0;
            if (object.credentials != null)
                message.credentials = String(object.credentials);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateRelayServer_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @static
         * @param {CRemoteClient_AllocateRelayServer_Request} message CRemoteClient_AllocateRelayServer_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateRelayServer_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cellid = 0;
                object.credentials = "";
            }
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                object.cellid = message.cellid;
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                object.credentials = message.credentials;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateRelayServer_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateRelayServer_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateRelayServer_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateRelayServer_Request;
    })();
    
    $root.CRemoteClient_AllocateRelayServer_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateRelayServer_Response.
         * @exports ICRemoteClient_AllocateRelayServer_Response
         * @interface ICRemoteClient_AllocateRelayServer_Response
         * @property {string|null} [relay_server] CRemoteClient_AllocateRelayServer_Response relay_server
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateRelayServer_Response.
         * @exports CRemoteClient_AllocateRelayServer_Response
         * @classdesc Represents a CRemoteClient_AllocateRelayServer_Response.
         * @implements ICRemoteClient_AllocateRelayServer_Response
         * @constructor
         * @param {ICRemoteClient_AllocateRelayServer_Response=} [properties] Properties to set
         */
        function CRemoteClient_AllocateRelayServer_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateRelayServer_Response relay_server.
         * @member {string} relay_server
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @instance
         */
        CRemoteClient_AllocateRelayServer_Response.prototype.relay_server = "";
    
        /**
         * Creates a new CRemoteClient_AllocateRelayServer_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Response=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateRelayServer_Response} CRemoteClient_AllocateRelayServer_Response instance
         */
        CRemoteClient_AllocateRelayServer_Response.create = function create(properties) {
            return new CRemoteClient_AllocateRelayServer_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateRelayServer_Response message. Does not implicitly {@link CRemoteClient_AllocateRelayServer_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Response} message CRemoteClient_AllocateRelayServer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateRelayServer_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.relay_server != null && message.hasOwnProperty("relay_server"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.relay_server);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateRelayServer_Response message, length delimited. Does not implicitly {@link CRemoteClient_AllocateRelayServer_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {ICRemoteClient_AllocateRelayServer_Response} message CRemoteClient_AllocateRelayServer_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateRelayServer_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateRelayServer_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateRelayServer_Response} CRemoteClient_AllocateRelayServer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateRelayServer_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateRelayServer_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.relay_server = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_AllocateRelayServer_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateRelayServer_Response} CRemoteClient_AllocateRelayServer_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateRelayServer_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateRelayServer_Response message.
         * @function verify
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateRelayServer_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.relay_server != null && message.hasOwnProperty("relay_server"))
                if (!$util.isString(message.relay_server))
                    return "relay_server: string expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateRelayServer_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateRelayServer_Response} CRemoteClient_AllocateRelayServer_Response
         */
        CRemoteClient_AllocateRelayServer_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateRelayServer_Response)
                return object;
            var message = new $root.CRemoteClient_AllocateRelayServer_Response();
            if (object.relay_server != null)
                message.relay_server = String(object.relay_server);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateRelayServer_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @static
         * @param {CRemoteClient_AllocateRelayServer_Response} message CRemoteClient_AllocateRelayServer_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateRelayServer_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.relay_server = "";
            if (message.relay_server != null && message.hasOwnProperty("relay_server"))
                object.relay_server = message.relay_server;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_AllocateRelayServer_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateRelayServer_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateRelayServer_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateRelayServer_Response;
    })();
    
    $root.CRemoteClient_AllocateSDR_Request = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateSDR_Request.
         * @exports ICRemoteClient_AllocateSDR_Request
         * @interface ICRemoteClient_AllocateSDR_Request
         * @property {number|null} [appid] CRemoteClient_AllocateSDR_Request appid
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateSDR_Request.
         * @exports CRemoteClient_AllocateSDR_Request
         * @classdesc Represents a CRemoteClient_AllocateSDR_Request.
         * @implements ICRemoteClient_AllocateSDR_Request
         * @constructor
         * @param {ICRemoteClient_AllocateSDR_Request=} [properties] Properties to set
         */
        function CRemoteClient_AllocateSDR_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_AllocateSDR_Request appid.
         * @member {number} appid
         * @memberof CRemoteClient_AllocateSDR_Request
         * @instance
         */
        CRemoteClient_AllocateSDR_Request.prototype.appid = 0;
    
        /**
         * Creates a new CRemoteClient_AllocateSDR_Request instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {ICRemoteClient_AllocateSDR_Request=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateSDR_Request} CRemoteClient_AllocateSDR_Request instance
         */
        CRemoteClient_AllocateSDR_Request.create = function create(properties) {
            return new CRemoteClient_AllocateSDR_Request(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateSDR_Request message. Does not implicitly {@link CRemoteClient_AllocateSDR_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {ICRemoteClient_AllocateSDR_Request} message CRemoteClient_AllocateSDR_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateSDR_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateSDR_Request message, length delimited. Does not implicitly {@link CRemoteClient_AllocateSDR_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {ICRemoteClient_AllocateSDR_Request} message CRemoteClient_AllocateSDR_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateSDR_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateSDR_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateSDR_Request} CRemoteClient_AllocateSDR_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateSDR_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateSDR_Request();
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
         * Decodes a CRemoteClient_AllocateSDR_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateSDR_Request} CRemoteClient_AllocateSDR_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateSDR_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateSDR_Request message.
         * @function verify
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateSDR_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateSDR_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateSDR_Request} CRemoteClient_AllocateSDR_Request
         */
        CRemoteClient_AllocateSDR_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateSDR_Request)
                return object;
            var message = new $root.CRemoteClient_AllocateSDR_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateSDR_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateSDR_Request
         * @static
         * @param {CRemoteClient_AllocateSDR_Request} message CRemoteClient_AllocateSDR_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateSDR_Request.toObject = function toObject(message, options) {
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
         * Converts this CRemoteClient_AllocateSDR_Request to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateSDR_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateSDR_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateSDR_Request;
    })();
    
    $root.CRemoteClient_AllocateSDR_Response = (function() {
    
        /**
         * Properties of a CRemoteClient_AllocateSDR_Response.
         * @exports ICRemoteClient_AllocateSDR_Response
         * @interface ICRemoteClient_AllocateSDR_Response
         */
    
        /**
         * Constructs a new CRemoteClient_AllocateSDR_Response.
         * @exports CRemoteClient_AllocateSDR_Response
         * @classdesc Represents a CRemoteClient_AllocateSDR_Response.
         * @implements ICRemoteClient_AllocateSDR_Response
         * @constructor
         * @param {ICRemoteClient_AllocateSDR_Response=} [properties] Properties to set
         */
        function CRemoteClient_AllocateSDR_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CRemoteClient_AllocateSDR_Response instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {ICRemoteClient_AllocateSDR_Response=} [properties] Properties to set
         * @returns {CRemoteClient_AllocateSDR_Response} CRemoteClient_AllocateSDR_Response instance
         */
        CRemoteClient_AllocateSDR_Response.create = function create(properties) {
            return new CRemoteClient_AllocateSDR_Response(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateSDR_Response message. Does not implicitly {@link CRemoteClient_AllocateSDR_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {ICRemoteClient_AllocateSDR_Response} message CRemoteClient_AllocateSDR_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateSDR_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_AllocateSDR_Response message, length delimited. Does not implicitly {@link CRemoteClient_AllocateSDR_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {ICRemoteClient_AllocateSDR_Response} message CRemoteClient_AllocateSDR_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_AllocateSDR_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_AllocateSDR_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_AllocateSDR_Response} CRemoteClient_AllocateSDR_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateSDR_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_AllocateSDR_Response();
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
         * Decodes a CRemoteClient_AllocateSDR_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_AllocateSDR_Response} CRemoteClient_AllocateSDR_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_AllocateSDR_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_AllocateSDR_Response message.
         * @function verify
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_AllocateSDR_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_AllocateSDR_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_AllocateSDR_Response} CRemoteClient_AllocateSDR_Response
         */
        CRemoteClient_AllocateSDR_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_AllocateSDR_Response)
                return object;
            return new $root.CRemoteClient_AllocateSDR_Response();
        };
    
        /**
         * Creates a plain object from a CRemoteClient_AllocateSDR_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_AllocateSDR_Response
         * @static
         * @param {CRemoteClient_AllocateSDR_Response} message CRemoteClient_AllocateSDR_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_AllocateSDR_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CRemoteClient_AllocateSDR_Response to JSON.
         * @function toJSON
         * @memberof CRemoteClient_AllocateSDR_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_AllocateSDR_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_AllocateSDR_Response;
    })();
    
    $root.CRemoteClient_SteamBroadcast_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_SteamBroadcast_Notification.
         * @exports ICRemoteClient_SteamBroadcast_Notification
         * @interface ICRemoteClient_SteamBroadcast_Notification
         * @property {number|Long|null} [steamid] CRemoteClient_SteamBroadcast_Notification steamid
         * @property {number|Long|null} [clientid] CRemoteClient_SteamBroadcast_Notification clientid
         * @property {Uint8Array|null} [payload] CRemoteClient_SteamBroadcast_Notification payload
         */
    
        /**
         * Constructs a new CRemoteClient_SteamBroadcast_Notification.
         * @exports CRemoteClient_SteamBroadcast_Notification
         * @classdesc Represents a CRemoteClient_SteamBroadcast_Notification.
         * @implements ICRemoteClient_SteamBroadcast_Notification
         * @constructor
         * @param {ICRemoteClient_SteamBroadcast_Notification=} [properties] Properties to set
         */
        function CRemoteClient_SteamBroadcast_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_SteamBroadcast_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @instance
         */
        CRemoteClient_SteamBroadcast_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamBroadcast_Notification clientid.
         * @member {number|Long} clientid
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @instance
         */
        CRemoteClient_SteamBroadcast_Notification.prototype.clientid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamBroadcast_Notification payload.
         * @member {Uint8Array} payload
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @instance
         */
        CRemoteClient_SteamBroadcast_Notification.prototype.payload = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_SteamBroadcast_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {ICRemoteClient_SteamBroadcast_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_SteamBroadcast_Notification} CRemoteClient_SteamBroadcast_Notification instance
         */
        CRemoteClient_SteamBroadcast_Notification.create = function create(properties) {
            return new CRemoteClient_SteamBroadcast_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_SteamBroadcast_Notification message. Does not implicitly {@link CRemoteClient_SteamBroadcast_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {ICRemoteClient_SteamBroadcast_Notification} message CRemoteClient_SteamBroadcast_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SteamBroadcast_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.clientid != null && message.hasOwnProperty("clientid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.clientid);
            if (message.payload != null && message.hasOwnProperty("payload"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_SteamBroadcast_Notification message, length delimited. Does not implicitly {@link CRemoteClient_SteamBroadcast_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {ICRemoteClient_SteamBroadcast_Notification} message CRemoteClient_SteamBroadcast_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SteamBroadcast_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_SteamBroadcast_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_SteamBroadcast_Notification} CRemoteClient_SteamBroadcast_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SteamBroadcast_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_SteamBroadcast_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.clientid = reader.fixed64();
                    break;
                case 3:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_SteamBroadcast_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_SteamBroadcast_Notification} CRemoteClient_SteamBroadcast_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SteamBroadcast_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_SteamBroadcast_Notification message.
         * @function verify
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_SteamBroadcast_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.clientid != null && message.hasOwnProperty("clientid"))
                if (!$util.isInteger(message.clientid) && !(message.clientid && $util.isInteger(message.clientid.low) && $util.isInteger(message.clientid.high)))
                    return "clientid: integer|Long expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_SteamBroadcast_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_SteamBroadcast_Notification} CRemoteClient_SteamBroadcast_Notification
         */
        CRemoteClient_SteamBroadcast_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_SteamBroadcast_Notification)
                return object;
            var message = new $root.CRemoteClient_SteamBroadcast_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.clientid != null)
                if ($util.Long)
                    (message.clientid = $util.Long.fromValue(object.clientid)).unsigned = false;
                else if (typeof object.clientid === "string")
                    message.clientid = parseInt(object.clientid, 10);
                else if (typeof object.clientid === "number")
                    message.clientid = object.clientid;
                else if (typeof object.clientid === "object")
                    message.clientid = new $util.LongBits(object.clientid.low >>> 0, object.clientid.high >>> 0).toNumber();
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length)
                    message.payload = object.payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_SteamBroadcast_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @static
         * @param {CRemoteClient_SteamBroadcast_Notification} message CRemoteClient_SteamBroadcast_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_SteamBroadcast_Notification.toObject = function toObject(message, options) {
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
                    var long = new $util.Long(0, 0, false);
                    object.clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientid = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.clientid != null && message.hasOwnProperty("clientid"))
                if (typeof message.clientid === "number")
                    object.clientid = options.longs === String ? String(message.clientid) : message.clientid;
                else
                    object.clientid = options.longs === String ? $util.Long.prototype.toString.call(message.clientid) : options.longs === Number ? new $util.LongBits(message.clientid.low >>> 0, message.clientid.high >>> 0).toNumber() : message.clientid;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_SteamBroadcast_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_SteamBroadcast_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_SteamBroadcast_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_SteamBroadcast_Notification;
    })();
    
    $root.CRemoteClient_SteamToSteam_Notification = (function() {
    
        /**
         * Properties of a CRemoteClient_SteamToSteam_Notification.
         * @exports ICRemoteClient_SteamToSteam_Notification
         * @interface ICRemoteClient_SteamToSteam_Notification
         * @property {number|Long|null} [steamid] CRemoteClient_SteamToSteam_Notification steamid
         * @property {number|Long|null} [src_clientid] CRemoteClient_SteamToSteam_Notification src_clientid
         * @property {number|Long|null} [dst_clientid] CRemoteClient_SteamToSteam_Notification dst_clientid
         * @property {number|null} [secretid] CRemoteClient_SteamToSteam_Notification secretid
         * @property {Uint8Array|null} [encrypted_payload] CRemoteClient_SteamToSteam_Notification encrypted_payload
         */
    
        /**
         * Constructs a new CRemoteClient_SteamToSteam_Notification.
         * @exports CRemoteClient_SteamToSteam_Notification
         * @classdesc Represents a CRemoteClient_SteamToSteam_Notification.
         * @implements ICRemoteClient_SteamToSteam_Notification
         * @constructor
         * @param {ICRemoteClient_SteamToSteam_Notification=} [properties] Properties to set
         */
        function CRemoteClient_SteamToSteam_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemoteClient_SteamToSteam_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamToSteam_Notification src_clientid.
         * @member {number|Long} src_clientid
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.src_clientid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamToSteam_Notification dst_clientid.
         * @member {number|Long} dst_clientid
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.dst_clientid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemoteClient_SteamToSteam_Notification secretid.
         * @member {number} secretid
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.secretid = 0;
    
        /**
         * CRemoteClient_SteamToSteam_Notification encrypted_payload.
         * @member {Uint8Array} encrypted_payload
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         */
        CRemoteClient_SteamToSteam_Notification.prototype.encrypted_payload = $util.newBuffer([]);
    
        /**
         * Creates a new CRemoteClient_SteamToSteam_Notification instance using the specified properties.
         * @function create
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {ICRemoteClient_SteamToSteam_Notification=} [properties] Properties to set
         * @returns {CRemoteClient_SteamToSteam_Notification} CRemoteClient_SteamToSteam_Notification instance
         */
        CRemoteClient_SteamToSteam_Notification.create = function create(properties) {
            return new CRemoteClient_SteamToSteam_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemoteClient_SteamToSteam_Notification message. Does not implicitly {@link CRemoteClient_SteamToSteam_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {ICRemoteClient_SteamToSteam_Notification} message CRemoteClient_SteamToSteam_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SteamToSteam_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.src_clientid != null && message.hasOwnProperty("src_clientid"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.src_clientid);
            if (message.dst_clientid != null && message.hasOwnProperty("dst_clientid"))
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.dst_clientid);
            if (message.secretid != null && message.hasOwnProperty("secretid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.secretid);
            if (message.encrypted_payload != null && message.hasOwnProperty("encrypted_payload"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.encrypted_payload);
            return writer;
        };
    
        /**
         * Encodes the specified CRemoteClient_SteamToSteam_Notification message, length delimited. Does not implicitly {@link CRemoteClient_SteamToSteam_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {ICRemoteClient_SteamToSteam_Notification} message CRemoteClient_SteamToSteam_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemoteClient_SteamToSteam_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemoteClient_SteamToSteam_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemoteClient_SteamToSteam_Notification} CRemoteClient_SteamToSteam_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SteamToSteam_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoteClient_SteamToSteam_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.src_clientid = reader.fixed64();
                    break;
                case 3:
                    message.dst_clientid = reader.fixed64();
                    break;
                case 4:
                    message.secretid = reader.uint32();
                    break;
                case 5:
                    message.encrypted_payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemoteClient_SteamToSteam_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemoteClient_SteamToSteam_Notification} CRemoteClient_SteamToSteam_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemoteClient_SteamToSteam_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemoteClient_SteamToSteam_Notification message.
         * @function verify
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemoteClient_SteamToSteam_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.src_clientid != null && message.hasOwnProperty("src_clientid"))
                if (!$util.isInteger(message.src_clientid) && !(message.src_clientid && $util.isInteger(message.src_clientid.low) && $util.isInteger(message.src_clientid.high)))
                    return "src_clientid: integer|Long expected";
            if (message.dst_clientid != null && message.hasOwnProperty("dst_clientid"))
                if (!$util.isInteger(message.dst_clientid) && !(message.dst_clientid && $util.isInteger(message.dst_clientid.low) && $util.isInteger(message.dst_clientid.high)))
                    return "dst_clientid: integer|Long expected";
            if (message.secretid != null && message.hasOwnProperty("secretid"))
                if (!$util.isInteger(message.secretid))
                    return "secretid: integer expected";
            if (message.encrypted_payload != null && message.hasOwnProperty("encrypted_payload"))
                if (!(message.encrypted_payload && typeof message.encrypted_payload.length === "number" || $util.isString(message.encrypted_payload)))
                    return "encrypted_payload: buffer expected";
            return null;
        };
    
        /**
         * Creates a CRemoteClient_SteamToSteam_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemoteClient_SteamToSteam_Notification} CRemoteClient_SteamToSteam_Notification
         */
        CRemoteClient_SteamToSteam_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemoteClient_SteamToSteam_Notification)
                return object;
            var message = new $root.CRemoteClient_SteamToSteam_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.src_clientid != null)
                if ($util.Long)
                    (message.src_clientid = $util.Long.fromValue(object.src_clientid)).unsigned = false;
                else if (typeof object.src_clientid === "string")
                    message.src_clientid = parseInt(object.src_clientid, 10);
                else if (typeof object.src_clientid === "number")
                    message.src_clientid = object.src_clientid;
                else if (typeof object.src_clientid === "object")
                    message.src_clientid = new $util.LongBits(object.src_clientid.low >>> 0, object.src_clientid.high >>> 0).toNumber();
            if (object.dst_clientid != null)
                if ($util.Long)
                    (message.dst_clientid = $util.Long.fromValue(object.dst_clientid)).unsigned = false;
                else if (typeof object.dst_clientid === "string")
                    message.dst_clientid = parseInt(object.dst_clientid, 10);
                else if (typeof object.dst_clientid === "number")
                    message.dst_clientid = object.dst_clientid;
                else if (typeof object.dst_clientid === "object")
                    message.dst_clientid = new $util.LongBits(object.dst_clientid.low >>> 0, object.dst_clientid.high >>> 0).toNumber();
            if (object.secretid != null)
                message.secretid = object.secretid >>> 0;
            if (object.encrypted_payload != null)
                if (typeof object.encrypted_payload === "string")
                    $util.base64.decode(object.encrypted_payload, message.encrypted_payload = $util.newBuffer($util.base64.length(object.encrypted_payload)), 0);
                else if (object.encrypted_payload.length)
                    message.encrypted_payload = object.encrypted_payload;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemoteClient_SteamToSteam_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @static
         * @param {CRemoteClient_SteamToSteam_Notification} message CRemoteClient_SteamToSteam_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemoteClient_SteamToSteam_Notification.toObject = function toObject(message, options) {
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
                    var long = new $util.Long(0, 0, false);
                    object.src_clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.src_clientid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dst_clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dst_clientid = options.longs === String ? "0" : 0;
                object.secretid = 0;
                if (options.bytes === String)
                    object.encrypted_payload = "";
                else {
                    object.encrypted_payload = [];
                    if (options.bytes !== Array)
                        object.encrypted_payload = $util.newBuffer(object.encrypted_payload);
                }
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.src_clientid != null && message.hasOwnProperty("src_clientid"))
                if (typeof message.src_clientid === "number")
                    object.src_clientid = options.longs === String ? String(message.src_clientid) : message.src_clientid;
                else
                    object.src_clientid = options.longs === String ? $util.Long.prototype.toString.call(message.src_clientid) : options.longs === Number ? new $util.LongBits(message.src_clientid.low >>> 0, message.src_clientid.high >>> 0).toNumber() : message.src_clientid;
            if (message.dst_clientid != null && message.hasOwnProperty("dst_clientid"))
                if (typeof message.dst_clientid === "number")
                    object.dst_clientid = options.longs === String ? String(message.dst_clientid) : message.dst_clientid;
                else
                    object.dst_clientid = options.longs === String ? $util.Long.prototype.toString.call(message.dst_clientid) : options.longs === Number ? new $util.LongBits(message.dst_clientid.low >>> 0, message.dst_clientid.high >>> 0).toNumber() : message.dst_clientid;
            if (message.secretid != null && message.hasOwnProperty("secretid"))
                object.secretid = message.secretid;
            if (message.encrypted_payload != null && message.hasOwnProperty("encrypted_payload"))
                object.encrypted_payload = options.bytes === String ? $util.base64.encode(message.encrypted_payload, 0, message.encrypted_payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.encrypted_payload) : message.encrypted_payload;
            return object;
        };
    
        /**
         * Converts this CRemoteClient_SteamToSteam_Notification to JSON.
         * @function toJSON
         * @memberof CRemoteClient_SteamToSteam_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemoteClient_SteamToSteam_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemoteClient_SteamToSteam_Notification;
    })();
    
    $root.CRemotePlay_SessionStarted_Request = (function() {
    
        /**
         * Properties of a CRemotePlay_SessionStarted_Request.
         * @exports ICRemotePlay_SessionStarted_Request
         * @interface ICRemotePlay_SessionStarted_Request
         * @property {number|null} [host_account_id] CRemotePlay_SessionStarted_Request host_account_id
         * @property {number|null} [client_account_id] CRemotePlay_SessionStarted_Request client_account_id
         * @property {number|null} [appid] CRemotePlay_SessionStarted_Request appid
         * @property {number|null} [device_form_factor] CRemotePlay_SessionStarted_Request device_form_factor
         */
    
        /**
         * Constructs a new CRemotePlay_SessionStarted_Request.
         * @exports CRemotePlay_SessionStarted_Request
         * @classdesc Represents a CRemotePlay_SessionStarted_Request.
         * @implements ICRemotePlay_SessionStarted_Request
         * @constructor
         * @param {ICRemotePlay_SessionStarted_Request=} [properties] Properties to set
         */
        function CRemotePlay_SessionStarted_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemotePlay_SessionStarted_Request host_account_id.
         * @member {number} host_account_id
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         */
        CRemotePlay_SessionStarted_Request.prototype.host_account_id = 0;
    
        /**
         * CRemotePlay_SessionStarted_Request client_account_id.
         * @member {number} client_account_id
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         */
        CRemotePlay_SessionStarted_Request.prototype.client_account_id = 0;
    
        /**
         * CRemotePlay_SessionStarted_Request appid.
         * @member {number} appid
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         */
        CRemotePlay_SessionStarted_Request.prototype.appid = 0;
    
        /**
         * CRemotePlay_SessionStarted_Request device_form_factor.
         * @member {number} device_form_factor
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         */
        CRemotePlay_SessionStarted_Request.prototype.device_form_factor = 0;
    
        /**
         * Creates a new CRemotePlay_SessionStarted_Request instance using the specified properties.
         * @function create
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {ICRemotePlay_SessionStarted_Request=} [properties] Properties to set
         * @returns {CRemotePlay_SessionStarted_Request} CRemotePlay_SessionStarted_Request instance
         */
        CRemotePlay_SessionStarted_Request.create = function create(properties) {
            return new CRemotePlay_SessionStarted_Request(properties);
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStarted_Request message. Does not implicitly {@link CRemotePlay_SessionStarted_Request.verify|verify} messages.
         * @function encode
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {ICRemotePlay_SessionStarted_Request} message CRemotePlay_SessionStarted_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStarted_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.host_account_id != null && message.hasOwnProperty("host_account_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.host_account_id);
            if (message.client_account_id != null && message.hasOwnProperty("client_account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.client_account_id);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.appid);
            if (message.device_form_factor != null && message.hasOwnProperty("device_form_factor"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.device_form_factor);
            return writer;
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStarted_Request message, length delimited. Does not implicitly {@link CRemotePlay_SessionStarted_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {ICRemotePlay_SessionStarted_Request} message CRemotePlay_SessionStarted_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStarted_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemotePlay_SessionStarted_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemotePlay_SessionStarted_Request} CRemotePlay_SessionStarted_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStarted_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlay_SessionStarted_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.host_account_id = reader.uint32();
                    break;
                case 2:
                    message.client_account_id = reader.uint32();
                    break;
                case 3:
                    message.appid = reader.uint32();
                    break;
                case 4:
                    message.device_form_factor = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemotePlay_SessionStarted_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemotePlay_SessionStarted_Request} CRemotePlay_SessionStarted_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStarted_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemotePlay_SessionStarted_Request message.
         * @function verify
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemotePlay_SessionStarted_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.host_account_id != null && message.hasOwnProperty("host_account_id"))
                if (!$util.isInteger(message.host_account_id))
                    return "host_account_id: integer expected";
            if (message.client_account_id != null && message.hasOwnProperty("client_account_id"))
                if (!$util.isInteger(message.client_account_id))
                    return "client_account_id: integer expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.device_form_factor != null && message.hasOwnProperty("device_form_factor"))
                if (!$util.isInteger(message.device_form_factor))
                    return "device_form_factor: integer expected";
            return null;
        };
    
        /**
         * Creates a CRemotePlay_SessionStarted_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemotePlay_SessionStarted_Request} CRemotePlay_SessionStarted_Request
         */
        CRemotePlay_SessionStarted_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemotePlay_SessionStarted_Request)
                return object;
            var message = new $root.CRemotePlay_SessionStarted_Request();
            if (object.host_account_id != null)
                message.host_account_id = object.host_account_id >>> 0;
            if (object.client_account_id != null)
                message.client_account_id = object.client_account_id >>> 0;
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.device_form_factor != null)
                message.device_form_factor = object.device_form_factor | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CRemotePlay_SessionStarted_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemotePlay_SessionStarted_Request
         * @static
         * @param {CRemotePlay_SessionStarted_Request} message CRemotePlay_SessionStarted_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemotePlay_SessionStarted_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.host_account_id = 0;
                object.client_account_id = 0;
                object.appid = 0;
                object.device_form_factor = 0;
            }
            if (message.host_account_id != null && message.hasOwnProperty("host_account_id"))
                object.host_account_id = message.host_account_id;
            if (message.client_account_id != null && message.hasOwnProperty("client_account_id"))
                object.client_account_id = message.client_account_id;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.device_form_factor != null && message.hasOwnProperty("device_form_factor"))
                object.device_form_factor = message.device_form_factor;
            return object;
        };
    
        /**
         * Converts this CRemotePlay_SessionStarted_Request to JSON.
         * @function toJSON
         * @memberof CRemotePlay_SessionStarted_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemotePlay_SessionStarted_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemotePlay_SessionStarted_Request;
    })();
    
    $root.CRemotePlay_SessionStarted_Response = (function() {
    
        /**
         * Properties of a CRemotePlay_SessionStarted_Response.
         * @exports ICRemotePlay_SessionStarted_Response
         * @interface ICRemotePlay_SessionStarted_Response
         * @property {number|Long|null} [record_id] CRemotePlay_SessionStarted_Response record_id
         */
    
        /**
         * Constructs a new CRemotePlay_SessionStarted_Response.
         * @exports CRemotePlay_SessionStarted_Response
         * @classdesc Represents a CRemotePlay_SessionStarted_Response.
         * @implements ICRemotePlay_SessionStarted_Response
         * @constructor
         * @param {ICRemotePlay_SessionStarted_Response=} [properties] Properties to set
         */
        function CRemotePlay_SessionStarted_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemotePlay_SessionStarted_Response record_id.
         * @member {number|Long} record_id
         * @memberof CRemotePlay_SessionStarted_Response
         * @instance
         */
        CRemotePlay_SessionStarted_Response.prototype.record_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Creates a new CRemotePlay_SessionStarted_Response instance using the specified properties.
         * @function create
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {ICRemotePlay_SessionStarted_Response=} [properties] Properties to set
         * @returns {CRemotePlay_SessionStarted_Response} CRemotePlay_SessionStarted_Response instance
         */
        CRemotePlay_SessionStarted_Response.create = function create(properties) {
            return new CRemotePlay_SessionStarted_Response(properties);
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStarted_Response message. Does not implicitly {@link CRemotePlay_SessionStarted_Response.verify|verify} messages.
         * @function encode
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {ICRemotePlay_SessionStarted_Response} message CRemotePlay_SessionStarted_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStarted_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.record_id);
            return writer;
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStarted_Response message, length delimited. Does not implicitly {@link CRemotePlay_SessionStarted_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {ICRemotePlay_SessionStarted_Response} message CRemotePlay_SessionStarted_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStarted_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemotePlay_SessionStarted_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemotePlay_SessionStarted_Response} CRemotePlay_SessionStarted_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStarted_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlay_SessionStarted_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.record_id = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemotePlay_SessionStarted_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemotePlay_SessionStarted_Response} CRemotePlay_SessionStarted_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStarted_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemotePlay_SessionStarted_Response message.
         * @function verify
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemotePlay_SessionStarted_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                if (!$util.isInteger(message.record_id) && !(message.record_id && $util.isInteger(message.record_id.low) && $util.isInteger(message.record_id.high)))
                    return "record_id: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CRemotePlay_SessionStarted_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemotePlay_SessionStarted_Response} CRemotePlay_SessionStarted_Response
         */
        CRemotePlay_SessionStarted_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemotePlay_SessionStarted_Response)
                return object;
            var message = new $root.CRemotePlay_SessionStarted_Response();
            if (object.record_id != null)
                if ($util.Long)
                    (message.record_id = $util.Long.fromValue(object.record_id)).unsigned = false;
                else if (typeof object.record_id === "string")
                    message.record_id = parseInt(object.record_id, 10);
                else if (typeof object.record_id === "number")
                    message.record_id = object.record_id;
                else if (typeof object.record_id === "object")
                    message.record_id = new $util.LongBits(object.record_id.low >>> 0, object.record_id.high >>> 0).toNumber();
            return message;
        };
    
        /**
         * Creates a plain object from a CRemotePlay_SessionStarted_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemotePlay_SessionStarted_Response
         * @static
         * @param {CRemotePlay_SessionStarted_Response} message CRemotePlay_SessionStarted_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemotePlay_SessionStarted_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.record_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.record_id = options.longs === String ? "0" : 0;
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                if (typeof message.record_id === "number")
                    object.record_id = options.longs === String ? String(message.record_id) : message.record_id;
                else
                    object.record_id = options.longs === String ? $util.Long.prototype.toString.call(message.record_id) : options.longs === Number ? new $util.LongBits(message.record_id.low >>> 0, message.record_id.high >>> 0).toNumber() : message.record_id;
            return object;
        };
    
        /**
         * Converts this CRemotePlay_SessionStarted_Response to JSON.
         * @function toJSON
         * @memberof CRemotePlay_SessionStarted_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemotePlay_SessionStarted_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemotePlay_SessionStarted_Response;
    })();
    
    $root.CRemotePlay_SessionStopped_Notification = (function() {
    
        /**
         * Properties of a CRemotePlay_SessionStopped_Notification.
         * @exports ICRemotePlay_SessionStopped_Notification
         * @interface ICRemotePlay_SessionStopped_Notification
         * @property {number|Long|null} [record_id] CRemotePlay_SessionStopped_Notification record_id
         * @property {boolean|null} [used_x264] CRemotePlay_SessionStopped_Notification used_x264
         * @property {boolean|null} [used_h264] CRemotePlay_SessionStopped_Notification used_h264
         * @property {boolean|null} [used_hevc] CRemotePlay_SessionStopped_Notification used_hevc
         */
    
        /**
         * Constructs a new CRemotePlay_SessionStopped_Notification.
         * @exports CRemotePlay_SessionStopped_Notification
         * @classdesc Represents a CRemotePlay_SessionStopped_Notification.
         * @implements ICRemotePlay_SessionStopped_Notification
         * @constructor
         * @param {ICRemotePlay_SessionStopped_Notification=} [properties] Properties to set
         */
        function CRemotePlay_SessionStopped_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemotePlay_SessionStopped_Notification record_id.
         * @member {number|Long} record_id
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         */
        CRemotePlay_SessionStopped_Notification.prototype.record_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemotePlay_SessionStopped_Notification used_x264.
         * @member {boolean} used_x264
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         */
        CRemotePlay_SessionStopped_Notification.prototype.used_x264 = false;
    
        /**
         * CRemotePlay_SessionStopped_Notification used_h264.
         * @member {boolean} used_h264
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         */
        CRemotePlay_SessionStopped_Notification.prototype.used_h264 = false;
    
        /**
         * CRemotePlay_SessionStopped_Notification used_hevc.
         * @member {boolean} used_hevc
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         */
        CRemotePlay_SessionStopped_Notification.prototype.used_hevc = false;
    
        /**
         * Creates a new CRemotePlay_SessionStopped_Notification instance using the specified properties.
         * @function create
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {ICRemotePlay_SessionStopped_Notification=} [properties] Properties to set
         * @returns {CRemotePlay_SessionStopped_Notification} CRemotePlay_SessionStopped_Notification instance
         */
        CRemotePlay_SessionStopped_Notification.create = function create(properties) {
            return new CRemotePlay_SessionStopped_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStopped_Notification message. Does not implicitly {@link CRemotePlay_SessionStopped_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {ICRemotePlay_SessionStopped_Notification} message CRemotePlay_SessionStopped_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStopped_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.record_id);
            if (message.used_x264 != null && message.hasOwnProperty("used_x264"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.used_x264);
            if (message.used_h264 != null && message.hasOwnProperty("used_h264"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.used_h264);
            if (message.used_hevc != null && message.hasOwnProperty("used_hevc"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.used_hevc);
            return writer;
        };
    
        /**
         * Encodes the specified CRemotePlay_SessionStopped_Notification message, length delimited. Does not implicitly {@link CRemotePlay_SessionStopped_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {ICRemotePlay_SessionStopped_Notification} message CRemotePlay_SessionStopped_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlay_SessionStopped_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemotePlay_SessionStopped_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemotePlay_SessionStopped_Notification} CRemotePlay_SessionStopped_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStopped_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlay_SessionStopped_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.record_id = reader.fixed64();
                    break;
                case 2:
                    message.used_x264 = reader.bool();
                    break;
                case 3:
                    message.used_h264 = reader.bool();
                    break;
                case 4:
                    message.used_hevc = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemotePlay_SessionStopped_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemotePlay_SessionStopped_Notification} CRemotePlay_SessionStopped_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlay_SessionStopped_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemotePlay_SessionStopped_Notification message.
         * @function verify
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemotePlay_SessionStopped_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                if (!$util.isInteger(message.record_id) && !(message.record_id && $util.isInteger(message.record_id.low) && $util.isInteger(message.record_id.high)))
                    return "record_id: integer|Long expected";
            if (message.used_x264 != null && message.hasOwnProperty("used_x264"))
                if (typeof message.used_x264 !== "boolean")
                    return "used_x264: boolean expected";
            if (message.used_h264 != null && message.hasOwnProperty("used_h264"))
                if (typeof message.used_h264 !== "boolean")
                    return "used_h264: boolean expected";
            if (message.used_hevc != null && message.hasOwnProperty("used_hevc"))
                if (typeof message.used_hevc !== "boolean")
                    return "used_hevc: boolean expected";
            return null;
        };
    
        /**
         * Creates a CRemotePlay_SessionStopped_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemotePlay_SessionStopped_Notification} CRemotePlay_SessionStopped_Notification
         */
        CRemotePlay_SessionStopped_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemotePlay_SessionStopped_Notification)
                return object;
            var message = new $root.CRemotePlay_SessionStopped_Notification();
            if (object.record_id != null)
                if ($util.Long)
                    (message.record_id = $util.Long.fromValue(object.record_id)).unsigned = false;
                else if (typeof object.record_id === "string")
                    message.record_id = parseInt(object.record_id, 10);
                else if (typeof object.record_id === "number")
                    message.record_id = object.record_id;
                else if (typeof object.record_id === "object")
                    message.record_id = new $util.LongBits(object.record_id.low >>> 0, object.record_id.high >>> 0).toNumber();
            if (object.used_x264 != null)
                message.used_x264 = Boolean(object.used_x264);
            if (object.used_h264 != null)
                message.used_h264 = Boolean(object.used_h264);
            if (object.used_hevc != null)
                message.used_hevc = Boolean(object.used_hevc);
            return message;
        };
    
        /**
         * Creates a plain object from a CRemotePlay_SessionStopped_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemotePlay_SessionStopped_Notification
         * @static
         * @param {CRemotePlay_SessionStopped_Notification} message CRemotePlay_SessionStopped_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemotePlay_SessionStopped_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.record_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.record_id = options.longs === String ? "0" : 0;
                object.used_x264 = false;
                object.used_h264 = false;
                object.used_hevc = false;
            }
            if (message.record_id != null && message.hasOwnProperty("record_id"))
                if (typeof message.record_id === "number")
                    object.record_id = options.longs === String ? String(message.record_id) : message.record_id;
                else
                    object.record_id = options.longs === String ? $util.Long.prototype.toString.call(message.record_id) : options.longs === Number ? new $util.LongBits(message.record_id.low >>> 0, message.record_id.high >>> 0).toNumber() : message.record_id;
            if (message.used_x264 != null && message.hasOwnProperty("used_x264"))
                object.used_x264 = message.used_x264;
            if (message.used_h264 != null && message.hasOwnProperty("used_h264"))
                object.used_h264 = message.used_h264;
            if (message.used_hevc != null && message.hasOwnProperty("used_hevc"))
                object.used_hevc = message.used_hevc;
            return object;
        };
    
        /**
         * Converts this CRemotePlay_SessionStopped_Notification to JSON.
         * @function toJSON
         * @memberof CRemotePlay_SessionStopped_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemotePlay_SessionStopped_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CRemotePlay_SessionStopped_Notification;
    })();
    
    $root.CRemotePlayTogether_Notification = (function() {
    
        /**
         * Properties of a CRemotePlayTogether_Notification.
         * @exports ICRemotePlayTogether_Notification
         * @interface ICRemotePlayTogether_Notification
         * @property {number|Long|null} [steamid] CRemotePlayTogether_Notification steamid
         * @property {CRemotePlayTogether_Notification.IGroupUpdated|null} [group_updated] CRemotePlayTogether_Notification group_updated
         */
    
        /**
         * Constructs a new CRemotePlayTogether_Notification.
         * @exports CRemotePlayTogether_Notification
         * @classdesc Represents a CRemotePlayTogether_Notification.
         * @implements ICRemotePlayTogether_Notification
         * @constructor
         * @param {ICRemotePlayTogether_Notification=} [properties] Properties to set
         */
        function CRemotePlayTogether_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CRemotePlayTogether_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CRemotePlayTogether_Notification
         * @instance
         */
        CRemotePlayTogether_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CRemotePlayTogether_Notification group_updated.
         * @member {CRemotePlayTogether_Notification.IGroupUpdated|null|undefined} group_updated
         * @memberof CRemotePlayTogether_Notification
         * @instance
         */
        CRemotePlayTogether_Notification.prototype.group_updated = null;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * CRemotePlayTogether_Notification Message.
         * @member {"group_updated"|undefined} Message
         * @memberof CRemotePlayTogether_Notification
         * @instance
         */
        Object.defineProperty(CRemotePlayTogether_Notification.prototype, "Message", {
            get: $util.oneOfGetter($oneOfFields = ["group_updated"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new CRemotePlayTogether_Notification instance using the specified properties.
         * @function create
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {ICRemotePlayTogether_Notification=} [properties] Properties to set
         * @returns {CRemotePlayTogether_Notification} CRemotePlayTogether_Notification instance
         */
        CRemotePlayTogether_Notification.create = function create(properties) {
            return new CRemotePlayTogether_Notification(properties);
        };
    
        /**
         * Encodes the specified CRemotePlayTogether_Notification message. Does not implicitly {@link CRemotePlayTogether_Notification.verify|verify} messages.
         * @function encode
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {ICRemotePlayTogether_Notification} message CRemotePlayTogether_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlayTogether_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.group_updated != null && message.hasOwnProperty("group_updated"))
                $root.CRemotePlayTogether_Notification.GroupUpdated.encode(message.group_updated, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CRemotePlayTogether_Notification message, length delimited. Does not implicitly {@link CRemotePlayTogether_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {ICRemotePlayTogether_Notification} message CRemotePlayTogether_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CRemotePlayTogether_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CRemotePlayTogether_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CRemotePlayTogether_Notification} CRemotePlayTogether_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlayTogether_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlayTogether_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.group_updated = $root.CRemotePlayTogether_Notification.GroupUpdated.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CRemotePlayTogether_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CRemotePlayTogether_Notification} CRemotePlayTogether_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CRemotePlayTogether_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CRemotePlayTogether_Notification message.
         * @function verify
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CRemotePlayTogether_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.group_updated != null && message.hasOwnProperty("group_updated")) {
                properties.Message = 1;
                {
                    var error = $root.CRemotePlayTogether_Notification.GroupUpdated.verify(message.group_updated);
                    if (error)
                        return "group_updated." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CRemotePlayTogether_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CRemotePlayTogether_Notification} CRemotePlayTogether_Notification
         */
        CRemotePlayTogether_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CRemotePlayTogether_Notification)
                return object;
            var message = new $root.CRemotePlayTogether_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.group_updated != null) {
                if (typeof object.group_updated !== "object")
                    throw TypeError(".CRemotePlayTogether_Notification.group_updated: object expected");
                message.group_updated = $root.CRemotePlayTogether_Notification.GroupUpdated.fromObject(object.group_updated);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CRemotePlayTogether_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CRemotePlayTogether_Notification
         * @static
         * @param {CRemotePlayTogether_Notification} message CRemotePlayTogether_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CRemotePlayTogether_Notification.toObject = function toObject(message, options) {
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
            if (message.group_updated != null && message.hasOwnProperty("group_updated")) {
                object.group_updated = $root.CRemotePlayTogether_Notification.GroupUpdated.toObject(message.group_updated, options);
                if (options.oneofs)
                    object.Message = "group_updated";
            }
            return object;
        };
    
        /**
         * Converts this CRemotePlayTogether_Notification to JSON.
         * @function toJSON
         * @memberof CRemotePlayTogether_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CRemotePlayTogether_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CRemotePlayTogether_Notification.ControllerSlots = (function() {
    
            /**
             * Properties of a ControllerSlots.
             * @memberof CRemotePlayTogether_Notification
             * @interface IControllerSlots
             * @property {number|null} [slotid] ControllerSlots slotid
             * @property {number|Long|null} [steamid] ControllerSlots steamid
             */
    
            /**
             * Constructs a new ControllerSlots.
             * @memberof CRemotePlayTogether_Notification
             * @classdesc Represents a ControllerSlots.
             * @implements IControllerSlots
             * @constructor
             * @param {CRemotePlayTogether_Notification.IControllerSlots=} [properties] Properties to set
             */
            function ControllerSlots(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ControllerSlots slotid.
             * @member {number} slotid
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @instance
             */
            ControllerSlots.prototype.slotid = 0;
    
            /**
             * ControllerSlots steamid.
             * @member {number|Long} steamid
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @instance
             */
            ControllerSlots.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new ControllerSlots instance using the specified properties.
             * @function create
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {CRemotePlayTogether_Notification.IControllerSlots=} [properties] Properties to set
             * @returns {CRemotePlayTogether_Notification.ControllerSlots} ControllerSlots instance
             */
            ControllerSlots.create = function create(properties) {
                return new ControllerSlots(properties);
            };
    
            /**
             * Encodes the specified ControllerSlots message. Does not implicitly {@link CRemotePlayTogether_Notification.ControllerSlots.verify|verify} messages.
             * @function encode
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {CRemotePlayTogether_Notification.IControllerSlots} message ControllerSlots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ControllerSlots.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.slotid != null && message.hasOwnProperty("slotid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.slotid);
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.steamid);
                return writer;
            };
    
            /**
             * Encodes the specified ControllerSlots message, length delimited. Does not implicitly {@link CRemotePlayTogether_Notification.ControllerSlots.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {CRemotePlayTogether_Notification.IControllerSlots} message ControllerSlots message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ControllerSlots.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ControllerSlots message from the specified reader or buffer.
             * @function decode
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CRemotePlayTogether_Notification.ControllerSlots} ControllerSlots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ControllerSlots.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlayTogether_Notification.ControllerSlots();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.slotid = reader.uint32();
                        break;
                    case 2:
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
             * Decodes a ControllerSlots message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CRemotePlayTogether_Notification.ControllerSlots} ControllerSlots
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ControllerSlots.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ControllerSlots message.
             * @function verify
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ControllerSlots.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.slotid != null && message.hasOwnProperty("slotid"))
                    if (!$util.isInteger(message.slotid))
                        return "slotid: integer expected";
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                        return "steamid: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a ControllerSlots message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CRemotePlayTogether_Notification.ControllerSlots} ControllerSlots
             */
            ControllerSlots.fromObject = function fromObject(object) {
                if (object instanceof $root.CRemotePlayTogether_Notification.ControllerSlots)
                    return object;
                var message = new $root.CRemotePlayTogether_Notification.ControllerSlots();
                if (object.slotid != null)
                    message.slotid = object.slotid >>> 0;
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
             * Creates a plain object from a ControllerSlots message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @static
             * @param {CRemotePlayTogether_Notification.ControllerSlots} message ControllerSlots
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ControllerSlots.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.slotid = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.steamid = options.longs === String ? "0" : 0;
                }
                if (message.slotid != null && message.hasOwnProperty("slotid"))
                    object.slotid = message.slotid;
                if (message.steamid != null && message.hasOwnProperty("steamid"))
                    if (typeof message.steamid === "number")
                        object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                    else
                        object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
                return object;
            };
    
            /**
             * Converts this ControllerSlots to JSON.
             * @function toJSON
             * @memberof CRemotePlayTogether_Notification.ControllerSlots
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ControllerSlots.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ControllerSlots;
        })();
    
        CRemotePlayTogether_Notification.GroupUpdated = (function() {
    
            /**
             * Properties of a GroupUpdated.
             * @memberof CRemotePlayTogether_Notification
             * @interface IGroupUpdated
             * @property {number|Long|null} [host_steamid] GroupUpdated host_steamid
             * @property {number|Long|null} [host_clientid] GroupUpdated host_clientid
             * @property {Array.<number|Long>|null} [players] GroupUpdated players
             * @property {number|Long|null} [host_gameid] GroupUpdated host_gameid
             * @property {Array.<CRemotePlayTogether_Notification.IControllerSlots>|null} [controller_slots] GroupUpdated controller_slots
             */
    
            /**
             * Constructs a new GroupUpdated.
             * @memberof CRemotePlayTogether_Notification
             * @classdesc Represents a GroupUpdated.
             * @implements IGroupUpdated
             * @constructor
             * @param {CRemotePlayTogether_Notification.IGroupUpdated=} [properties] Properties to set
             */
            function GroupUpdated(properties) {
                this.players = [];
                this.controller_slots = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GroupUpdated host_steamid.
             * @member {number|Long} host_steamid
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.host_steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * GroupUpdated host_clientid.
             * @member {number|Long} host_clientid
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.host_clientid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * GroupUpdated players.
             * @member {Array.<number|Long>} players
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.players = $util.emptyArray;
    
            /**
             * GroupUpdated host_gameid.
             * @member {number|Long} host_gameid
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.host_gameid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * GroupUpdated controller_slots.
             * @member {Array.<CRemotePlayTogether_Notification.IControllerSlots>} controller_slots
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             */
            GroupUpdated.prototype.controller_slots = $util.emptyArray;
    
            /**
             * Creates a new GroupUpdated instance using the specified properties.
             * @function create
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {CRemotePlayTogether_Notification.IGroupUpdated=} [properties] Properties to set
             * @returns {CRemotePlayTogether_Notification.GroupUpdated} GroupUpdated instance
             */
            GroupUpdated.create = function create(properties) {
                return new GroupUpdated(properties);
            };
    
            /**
             * Encodes the specified GroupUpdated message. Does not implicitly {@link CRemotePlayTogether_Notification.GroupUpdated.verify|verify} messages.
             * @function encode
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {CRemotePlayTogether_Notification.IGroupUpdated} message GroupUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.host_steamid != null && message.hasOwnProperty("host_steamid"))
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.host_steamid);
                if (message.host_clientid != null && message.hasOwnProperty("host_clientid"))
                    writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.host_clientid);
                if (message.players != null && message.players.length)
                    for (var i = 0; i < message.players.length; ++i)
                        writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.players[i]);
                if (message.host_gameid != null && message.hasOwnProperty("host_gameid"))
                    writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.host_gameid);
                if (message.controller_slots != null && message.controller_slots.length)
                    for (var i = 0; i < message.controller_slots.length; ++i)
                        $root.CRemotePlayTogether_Notification.ControllerSlots.encode(message.controller_slots[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GroupUpdated message, length delimited. Does not implicitly {@link CRemotePlayTogether_Notification.GroupUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {CRemotePlayTogether_Notification.IGroupUpdated} message GroupUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GroupUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CRemotePlayTogether_Notification.GroupUpdated} GroupUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemotePlayTogether_Notification.GroupUpdated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.host_steamid = reader.fixed64();
                        break;
                    case 2:
                        message.host_clientid = reader.fixed64();
                        break;
                    case 3:
                        if (!(message.players && message.players.length))
                            message.players = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.players.push(reader.fixed64());
                        } else
                            message.players.push(reader.fixed64());
                        break;
                    case 4:
                        message.host_gameid = reader.fixed64();
                        break;
                    case 5:
                        if (!(message.controller_slots && message.controller_slots.length))
                            message.controller_slots = [];
                        message.controller_slots.push($root.CRemotePlayTogether_Notification.ControllerSlots.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GroupUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CRemotePlayTogether_Notification.GroupUpdated} GroupUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GroupUpdated message.
             * @function verify
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.host_steamid != null && message.hasOwnProperty("host_steamid"))
                    if (!$util.isInteger(message.host_steamid) && !(message.host_steamid && $util.isInteger(message.host_steamid.low) && $util.isInteger(message.host_steamid.high)))
                        return "host_steamid: integer|Long expected";
                if (message.host_clientid != null && message.hasOwnProperty("host_clientid"))
                    if (!$util.isInteger(message.host_clientid) && !(message.host_clientid && $util.isInteger(message.host_clientid.low) && $util.isInteger(message.host_clientid.high)))
                        return "host_clientid: integer|Long expected";
                if (message.players != null && message.hasOwnProperty("players")) {
                    if (!Array.isArray(message.players))
                        return "players: array expected";
                    for (var i = 0; i < message.players.length; ++i)
                        if (!$util.isInteger(message.players[i]) && !(message.players[i] && $util.isInteger(message.players[i].low) && $util.isInteger(message.players[i].high)))
                            return "players: integer|Long[] expected";
                }
                if (message.host_gameid != null && message.hasOwnProperty("host_gameid"))
                    if (!$util.isInteger(message.host_gameid) && !(message.host_gameid && $util.isInteger(message.host_gameid.low) && $util.isInteger(message.host_gameid.high)))
                        return "host_gameid: integer|Long expected";
                if (message.controller_slots != null && message.hasOwnProperty("controller_slots")) {
                    if (!Array.isArray(message.controller_slots))
                        return "controller_slots: array expected";
                    for (var i = 0; i < message.controller_slots.length; ++i) {
                        var error = $root.CRemotePlayTogether_Notification.ControllerSlots.verify(message.controller_slots[i]);
                        if (error)
                            return "controller_slots." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a GroupUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CRemotePlayTogether_Notification.GroupUpdated} GroupUpdated
             */
            GroupUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.CRemotePlayTogether_Notification.GroupUpdated)
                    return object;
                var message = new $root.CRemotePlayTogether_Notification.GroupUpdated();
                if (object.host_steamid != null)
                    if ($util.Long)
                        (message.host_steamid = $util.Long.fromValue(object.host_steamid)).unsigned = false;
                    else if (typeof object.host_steamid === "string")
                        message.host_steamid = parseInt(object.host_steamid, 10);
                    else if (typeof object.host_steamid === "number")
                        message.host_steamid = object.host_steamid;
                    else if (typeof object.host_steamid === "object")
                        message.host_steamid = new $util.LongBits(object.host_steamid.low >>> 0, object.host_steamid.high >>> 0).toNumber();
                if (object.host_clientid != null)
                    if ($util.Long)
                        (message.host_clientid = $util.Long.fromValue(object.host_clientid)).unsigned = false;
                    else if (typeof object.host_clientid === "string")
                        message.host_clientid = parseInt(object.host_clientid, 10);
                    else if (typeof object.host_clientid === "number")
                        message.host_clientid = object.host_clientid;
                    else if (typeof object.host_clientid === "object")
                        message.host_clientid = new $util.LongBits(object.host_clientid.low >>> 0, object.host_clientid.high >>> 0).toNumber();
                if (object.players) {
                    if (!Array.isArray(object.players))
                        throw TypeError(".CRemotePlayTogether_Notification.GroupUpdated.players: array expected");
                    message.players = [];
                    for (var i = 0; i < object.players.length; ++i)
                        if ($util.Long)
                            (message.players[i] = $util.Long.fromValue(object.players[i])).unsigned = false;
                        else if (typeof object.players[i] === "string")
                            message.players[i] = parseInt(object.players[i], 10);
                        else if (typeof object.players[i] === "number")
                            message.players[i] = object.players[i];
                        else if (typeof object.players[i] === "object")
                            message.players[i] = new $util.LongBits(object.players[i].low >>> 0, object.players[i].high >>> 0).toNumber();
                }
                if (object.host_gameid != null)
                    if ($util.Long)
                        (message.host_gameid = $util.Long.fromValue(object.host_gameid)).unsigned = false;
                    else if (typeof object.host_gameid === "string")
                        message.host_gameid = parseInt(object.host_gameid, 10);
                    else if (typeof object.host_gameid === "number")
                        message.host_gameid = object.host_gameid;
                    else if (typeof object.host_gameid === "object")
                        message.host_gameid = new $util.LongBits(object.host_gameid.low >>> 0, object.host_gameid.high >>> 0).toNumber();
                if (object.controller_slots) {
                    if (!Array.isArray(object.controller_slots))
                        throw TypeError(".CRemotePlayTogether_Notification.GroupUpdated.controller_slots: array expected");
                    message.controller_slots = [];
                    for (var i = 0; i < object.controller_slots.length; ++i) {
                        if (typeof object.controller_slots[i] !== "object")
                            throw TypeError(".CRemotePlayTogether_Notification.GroupUpdated.controller_slots: object expected");
                        message.controller_slots[i] = $root.CRemotePlayTogether_Notification.ControllerSlots.fromObject(object.controller_slots[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GroupUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @static
             * @param {CRemotePlayTogether_Notification.GroupUpdated} message GroupUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.players = [];
                    object.controller_slots = [];
                }
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.host_steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.host_steamid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.host_clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.host_clientid = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.host_gameid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.host_gameid = options.longs === String ? "0" : 0;
                }
                if (message.host_steamid != null && message.hasOwnProperty("host_steamid"))
                    if (typeof message.host_steamid === "number")
                        object.host_steamid = options.longs === String ? String(message.host_steamid) : message.host_steamid;
                    else
                        object.host_steamid = options.longs === String ? $util.Long.prototype.toString.call(message.host_steamid) : options.longs === Number ? new $util.LongBits(message.host_steamid.low >>> 0, message.host_steamid.high >>> 0).toNumber() : message.host_steamid;
                if (message.host_clientid != null && message.hasOwnProperty("host_clientid"))
                    if (typeof message.host_clientid === "number")
                        object.host_clientid = options.longs === String ? String(message.host_clientid) : message.host_clientid;
                    else
                        object.host_clientid = options.longs === String ? $util.Long.prototype.toString.call(message.host_clientid) : options.longs === Number ? new $util.LongBits(message.host_clientid.low >>> 0, message.host_clientid.high >>> 0).toNumber() : message.host_clientid;
                if (message.players && message.players.length) {
                    object.players = [];
                    for (var j = 0; j < message.players.length; ++j)
                        if (typeof message.players[j] === "number")
                            object.players[j] = options.longs === String ? String(message.players[j]) : message.players[j];
                        else
                            object.players[j] = options.longs === String ? $util.Long.prototype.toString.call(message.players[j]) : options.longs === Number ? new $util.LongBits(message.players[j].low >>> 0, message.players[j].high >>> 0).toNumber() : message.players[j];
                }
                if (message.host_gameid != null && message.hasOwnProperty("host_gameid"))
                    if (typeof message.host_gameid === "number")
                        object.host_gameid = options.longs === String ? String(message.host_gameid) : message.host_gameid;
                    else
                        object.host_gameid = options.longs === String ? $util.Long.prototype.toString.call(message.host_gameid) : options.longs === Number ? new $util.LongBits(message.host_gameid.low >>> 0, message.host_gameid.high >>> 0).toNumber() : message.host_gameid;
                if (message.controller_slots && message.controller_slots.length) {
                    object.controller_slots = [];
                    for (var j = 0; j < message.controller_slots.length; ++j)
                        object.controller_slots[j] = $root.CRemotePlayTogether_Notification.ControllerSlots.toObject(message.controller_slots[j], options);
                }
                return object;
            };
    
            /**
             * Converts this GroupUpdated to JSON.
             * @function toJSON
             * @memberof CRemotePlayTogether_Notification.GroupUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GroupUpdated;
        })();
    
        return CRemotePlayTogether_Notification;
    })();

    return $root;
});
