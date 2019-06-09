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
    
    $root.CAccountHardware_RegisterSteamController_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_RegisterSteamController_Request.
         * @exports ICAccountHardware_RegisterSteamController_Request
         * @interface ICAccountHardware_RegisterSteamController_Request
         * @property {string|null} [serial_number] CAccountHardware_RegisterSteamController_Request serial_number
         * @property {string|null} [controller_code] CAccountHardware_RegisterSteamController_Request controller_code
         */
    
        /**
         * Constructs a new CAccountHardware_RegisterSteamController_Request.
         * @exports CAccountHardware_RegisterSteamController_Request
         * @classdesc Represents a CAccountHardware_RegisterSteamController_Request.
         * @implements ICAccountHardware_RegisterSteamController_Request
         * @constructor
         * @param {ICAccountHardware_RegisterSteamController_Request=} [properties] Properties to set
         */
        function CAccountHardware_RegisterSteamController_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_RegisterSteamController_Request serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @instance
         */
        CAccountHardware_RegisterSteamController_Request.prototype.serial_number = "";
    
        /**
         * CAccountHardware_RegisterSteamController_Request controller_code.
         * @member {string} controller_code
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @instance
         */
        CAccountHardware_RegisterSteamController_Request.prototype.controller_code = "";
    
        /**
         * Creates a new CAccountHardware_RegisterSteamController_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @static
         * @param {ICAccountHardware_RegisterSteamController_Request=} [properties] Properties to set
         * @returns {CAccountHardware_RegisterSteamController_Request} CAccountHardware_RegisterSteamController_Request instance
         */
        CAccountHardware_RegisterSteamController_Request.create = function create(properties) {
            return new CAccountHardware_RegisterSteamController_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_RegisterSteamController_Request message. Does not implicitly {@link CAccountHardware_RegisterSteamController_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @static
         * @param {ICAccountHardware_RegisterSteamController_Request} message CAccountHardware_RegisterSteamController_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_RegisterSteamController_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serial_number);
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.controller_code);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_RegisterSteamController_Request message, length delimited. Does not implicitly {@link CAccountHardware_RegisterSteamController_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @static
         * @param {ICAccountHardware_RegisterSteamController_Request} message CAccountHardware_RegisterSteamController_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_RegisterSteamController_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_RegisterSteamController_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_RegisterSteamController_Request} CAccountHardware_RegisterSteamController_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_RegisterSteamController_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_RegisterSteamController_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serial_number = reader.string();
                    break;
                case 2:
                    message.controller_code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_RegisterSteamController_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_RegisterSteamController_Request} CAccountHardware_RegisterSteamController_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_RegisterSteamController_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_RegisterSteamController_Request message.
         * @function verify
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_RegisterSteamController_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                if (!$util.isString(message.controller_code))
                    return "controller_code: string expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_RegisterSteamController_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_RegisterSteamController_Request} CAccountHardware_RegisterSteamController_Request
         */
        CAccountHardware_RegisterSteamController_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_RegisterSteamController_Request)
                return object;
            var message = new $root.CAccountHardware_RegisterSteamController_Request();
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.controller_code != null)
                message.controller_code = String(object.controller_code);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_RegisterSteamController_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @static
         * @param {CAccountHardware_RegisterSteamController_Request} message CAccountHardware_RegisterSteamController_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_RegisterSteamController_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serial_number = "";
                object.controller_code = "";
            }
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                object.controller_code = message.controller_code;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_RegisterSteamController_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_RegisterSteamController_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_RegisterSteamController_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_RegisterSteamController_Request;
    })();
    
    $root.CAccountHardware_RegisterSteamController_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_RegisterSteamController_Response.
         * @exports ICAccountHardware_RegisterSteamController_Response
         * @interface ICAccountHardware_RegisterSteamController_Response
         */
    
        /**
         * Constructs a new CAccountHardware_RegisterSteamController_Response.
         * @exports CAccountHardware_RegisterSteamController_Response
         * @classdesc Represents a CAccountHardware_RegisterSteamController_Response.
         * @implements ICAccountHardware_RegisterSteamController_Response
         * @constructor
         * @param {ICAccountHardware_RegisterSteamController_Response=} [properties] Properties to set
         */
        function CAccountHardware_RegisterSteamController_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CAccountHardware_RegisterSteamController_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @static
         * @param {ICAccountHardware_RegisterSteamController_Response=} [properties] Properties to set
         * @returns {CAccountHardware_RegisterSteamController_Response} CAccountHardware_RegisterSteamController_Response instance
         */
        CAccountHardware_RegisterSteamController_Response.create = function create(properties) {
            return new CAccountHardware_RegisterSteamController_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_RegisterSteamController_Response message. Does not implicitly {@link CAccountHardware_RegisterSteamController_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @static
         * @param {ICAccountHardware_RegisterSteamController_Response} message CAccountHardware_RegisterSteamController_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_RegisterSteamController_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_RegisterSteamController_Response message, length delimited. Does not implicitly {@link CAccountHardware_RegisterSteamController_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @static
         * @param {ICAccountHardware_RegisterSteamController_Response} message CAccountHardware_RegisterSteamController_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_RegisterSteamController_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_RegisterSteamController_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_RegisterSteamController_Response} CAccountHardware_RegisterSteamController_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_RegisterSteamController_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_RegisterSteamController_Response();
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
         * Decodes a CAccountHardware_RegisterSteamController_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_RegisterSteamController_Response} CAccountHardware_RegisterSteamController_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_RegisterSteamController_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_RegisterSteamController_Response message.
         * @function verify
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_RegisterSteamController_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_RegisterSteamController_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_RegisterSteamController_Response} CAccountHardware_RegisterSteamController_Response
         */
        CAccountHardware_RegisterSteamController_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_RegisterSteamController_Response)
                return object;
            return new $root.CAccountHardware_RegisterSteamController_Response();
        };
    
        /**
         * Creates a plain object from a CAccountHardware_RegisterSteamController_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @static
         * @param {CAccountHardware_RegisterSteamController_Response} message CAccountHardware_RegisterSteamController_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_RegisterSteamController_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CAccountHardware_RegisterSteamController_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_RegisterSteamController_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_RegisterSteamController_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_RegisterSteamController_Response;
    })();
    
    $root.CAccountHardware_CompleteSteamControllerRegistration_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_CompleteSteamControllerRegistration_Request.
         * @exports ICAccountHardware_CompleteSteamControllerRegistration_Request
         * @interface ICAccountHardware_CompleteSteamControllerRegistration_Request
         * @property {string|null} [serial_number] CAccountHardware_CompleteSteamControllerRegistration_Request serial_number
         * @property {string|null} [controller_code] CAccountHardware_CompleteSteamControllerRegistration_Request controller_code
         */
    
        /**
         * Constructs a new CAccountHardware_CompleteSteamControllerRegistration_Request.
         * @exports CAccountHardware_CompleteSteamControllerRegistration_Request
         * @classdesc Represents a CAccountHardware_CompleteSteamControllerRegistration_Request.
         * @implements ICAccountHardware_CompleteSteamControllerRegistration_Request
         * @constructor
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Request=} [properties] Properties to set
         */
        function CAccountHardware_CompleteSteamControllerRegistration_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_CompleteSteamControllerRegistration_Request serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @instance
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.prototype.serial_number = "";
    
        /**
         * CAccountHardware_CompleteSteamControllerRegistration_Request controller_code.
         * @member {string} controller_code
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @instance
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.prototype.controller_code = "";
    
        /**
         * Creates a new CAccountHardware_CompleteSteamControllerRegistration_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @static
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Request=} [properties] Properties to set
         * @returns {CAccountHardware_CompleteSteamControllerRegistration_Request} CAccountHardware_CompleteSteamControllerRegistration_Request instance
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.create = function create(properties) {
            return new CAccountHardware_CompleteSteamControllerRegistration_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_CompleteSteamControllerRegistration_Request message. Does not implicitly {@link CAccountHardware_CompleteSteamControllerRegistration_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @static
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Request} message CAccountHardware_CompleteSteamControllerRegistration_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serial_number);
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.controller_code);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_CompleteSteamControllerRegistration_Request message, length delimited. Does not implicitly {@link CAccountHardware_CompleteSteamControllerRegistration_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @static
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Request} message CAccountHardware_CompleteSteamControllerRegistration_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_CompleteSteamControllerRegistration_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_CompleteSteamControllerRegistration_Request} CAccountHardware_CompleteSteamControllerRegistration_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_CompleteSteamControllerRegistration_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serial_number = reader.string();
                    break;
                case 2:
                    message.controller_code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_CompleteSteamControllerRegistration_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_CompleteSteamControllerRegistration_Request} CAccountHardware_CompleteSteamControllerRegistration_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_CompleteSteamControllerRegistration_Request message.
         * @function verify
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                if (!$util.isString(message.controller_code))
                    return "controller_code: string expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_CompleteSteamControllerRegistration_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_CompleteSteamControllerRegistration_Request} CAccountHardware_CompleteSteamControllerRegistration_Request
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_CompleteSteamControllerRegistration_Request)
                return object;
            var message = new $root.CAccountHardware_CompleteSteamControllerRegistration_Request();
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.controller_code != null)
                message.controller_code = String(object.controller_code);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_CompleteSteamControllerRegistration_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @static
         * @param {CAccountHardware_CompleteSteamControllerRegistration_Request} message CAccountHardware_CompleteSteamControllerRegistration_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serial_number = "";
                object.controller_code = "";
            }
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                object.controller_code = message.controller_code;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_CompleteSteamControllerRegistration_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_CompleteSteamControllerRegistration_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_CompleteSteamControllerRegistration_Request;
    })();
    
    $root.CAccountHardware_CompleteSteamControllerRegistration_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_CompleteSteamControllerRegistration_Response.
         * @exports ICAccountHardware_CompleteSteamControllerRegistration_Response
         * @interface ICAccountHardware_CompleteSteamControllerRegistration_Response
         */
    
        /**
         * Constructs a new CAccountHardware_CompleteSteamControllerRegistration_Response.
         * @exports CAccountHardware_CompleteSteamControllerRegistration_Response
         * @classdesc Represents a CAccountHardware_CompleteSteamControllerRegistration_Response.
         * @implements ICAccountHardware_CompleteSteamControllerRegistration_Response
         * @constructor
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Response=} [properties] Properties to set
         */
        function CAccountHardware_CompleteSteamControllerRegistration_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CAccountHardware_CompleteSteamControllerRegistration_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @static
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Response=} [properties] Properties to set
         * @returns {CAccountHardware_CompleteSteamControllerRegistration_Response} CAccountHardware_CompleteSteamControllerRegistration_Response instance
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.create = function create(properties) {
            return new CAccountHardware_CompleteSteamControllerRegistration_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_CompleteSteamControllerRegistration_Response message. Does not implicitly {@link CAccountHardware_CompleteSteamControllerRegistration_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @static
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Response} message CAccountHardware_CompleteSteamControllerRegistration_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_CompleteSteamControllerRegistration_Response message, length delimited. Does not implicitly {@link CAccountHardware_CompleteSteamControllerRegistration_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @static
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Response} message CAccountHardware_CompleteSteamControllerRegistration_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_CompleteSteamControllerRegistration_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_CompleteSteamControllerRegistration_Response} CAccountHardware_CompleteSteamControllerRegistration_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_CompleteSteamControllerRegistration_Response();
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
         * Decodes a CAccountHardware_CompleteSteamControllerRegistration_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_CompleteSteamControllerRegistration_Response} CAccountHardware_CompleteSteamControllerRegistration_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_CompleteSteamControllerRegistration_Response message.
         * @function verify
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_CompleteSteamControllerRegistration_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_CompleteSteamControllerRegistration_Response} CAccountHardware_CompleteSteamControllerRegistration_Response
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_CompleteSteamControllerRegistration_Response)
                return object;
            return new $root.CAccountHardware_CompleteSteamControllerRegistration_Response();
        };
    
        /**
         * Creates a plain object from a CAccountHardware_CompleteSteamControllerRegistration_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @static
         * @param {CAccountHardware_CompleteSteamControllerRegistration_Response} message CAccountHardware_CompleteSteamControllerRegistration_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CAccountHardware_CompleteSteamControllerRegistration_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_CompleteSteamControllerRegistration_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_CompleteSteamControllerRegistration_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_CompleteSteamControllerRegistration_Response;
    })();
    
    $root.CAccountHardware_QueryAccountsRegisteredToSerial_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_QueryAccountsRegisteredToSerial_Request.
         * @exports ICAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @interface ICAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @property {string|null} [serial_number] CAccountHardware_QueryAccountsRegisteredToSerial_Request serial_number
         * @property {string|null} [controller_code] CAccountHardware_QueryAccountsRegisteredToSerial_Request controller_code
         */
    
        /**
         * Constructs a new CAccountHardware_QueryAccountsRegisteredToSerial_Request.
         * @exports CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @classdesc Represents a CAccountHardware_QueryAccountsRegisteredToSerial_Request.
         * @implements ICAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @constructor
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Request=} [properties] Properties to set
         */
        function CAccountHardware_QueryAccountsRegisteredToSerial_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_QueryAccountsRegisteredToSerial_Request serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @instance
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.prototype.serial_number = "";
    
        /**
         * CAccountHardware_QueryAccountsRegisteredToSerial_Request controller_code.
         * @member {string} controller_code
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @instance
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.prototype.controller_code = "";
    
        /**
         * Creates a new CAccountHardware_QueryAccountsRegisteredToSerial_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Request=} [properties] Properties to set
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Request} CAccountHardware_QueryAccountsRegisteredToSerial_Request instance
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.create = function create(properties) {
            return new CAccountHardware_QueryAccountsRegisteredToSerial_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_QueryAccountsRegisteredToSerial_Request message. Does not implicitly {@link CAccountHardware_QueryAccountsRegisteredToSerial_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Request} message CAccountHardware_QueryAccountsRegisteredToSerial_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serial_number);
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.controller_code);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_QueryAccountsRegisteredToSerial_Request message, length delimited. Does not implicitly {@link CAccountHardware_QueryAccountsRegisteredToSerial_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Request} message CAccountHardware_QueryAccountsRegisteredToSerial_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_QueryAccountsRegisteredToSerial_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Request} CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_QueryAccountsRegisteredToSerial_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serial_number = reader.string();
                    break;
                case 2:
                    message.controller_code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_QueryAccountsRegisteredToSerial_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Request} CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_QueryAccountsRegisteredToSerial_Request message.
         * @function verify
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                if (!$util.isString(message.controller_code))
                    return "controller_code: string expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_QueryAccountsRegisteredToSerial_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Request} CAccountHardware_QueryAccountsRegisteredToSerial_Request
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_QueryAccountsRegisteredToSerial_Request)
                return object;
            var message = new $root.CAccountHardware_QueryAccountsRegisteredToSerial_Request();
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.controller_code != null)
                message.controller_code = String(object.controller_code);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_QueryAccountsRegisteredToSerial_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @static
         * @param {CAccountHardware_QueryAccountsRegisteredToSerial_Request} message CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serial_number = "";
                object.controller_code = "";
            }
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                object.controller_code = message.controller_code;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_QueryAccountsRegisteredToSerial_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_QueryAccountsRegisteredToSerial_Request;
    })();
    
    $root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts = (function() {
    
        /**
         * Properties of a CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.
         * @exports ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @interface ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @property {number|null} [accountid] CAccountHardware_QueryAccountsRegisteredToSerial_Accounts accountid
         * @property {boolean|null} [registration_complete] CAccountHardware_QueryAccountsRegisteredToSerial_Accounts registration_complete
         */
    
        /**
         * Constructs a new CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.
         * @exports CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @classdesc Represents a CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.
         * @implements ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @constructor
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts=} [properties] Properties to set
         */
        function CAccountHardware_QueryAccountsRegisteredToSerial_Accounts(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_QueryAccountsRegisteredToSerial_Accounts accountid.
         * @member {number} accountid
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @instance
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.prototype.accountid = 0;
    
        /**
         * CAccountHardware_QueryAccountsRegisteredToSerial_Accounts registration_complete.
         * @member {boolean} registration_complete
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @instance
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.prototype.registration_complete = false;
    
        /**
         * Creates a new CAccountHardware_QueryAccountsRegisteredToSerial_Accounts instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts=} [properties] Properties to set
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Accounts} CAccountHardware_QueryAccountsRegisteredToSerial_Accounts instance
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.create = function create(properties) {
            return new CAccountHardware_QueryAccountsRegisteredToSerial_Accounts(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message. Does not implicitly {@link CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts} message CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.accountid);
            if (message.registration_complete != null && message.hasOwnProperty("registration_complete"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.registration_complete);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message, length delimited. Does not implicitly {@link CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts} message CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Accounts} CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.uint32();
                    break;
                case 2:
                    message.registration_complete = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Accounts} CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message.
         * @function verify
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.registration_complete != null && message.hasOwnProperty("registration_complete"))
                if (typeof message.registration_complete !== "boolean")
                    return "registration_complete: boolean expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Accounts} CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts)
                return object;
            var message = new $root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts();
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            if (object.registration_complete != null)
                message.registration_complete = Boolean(object.registration_complete);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_QueryAccountsRegisteredToSerial_Accounts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @static
         * @param {CAccountHardware_QueryAccountsRegisteredToSerial_Accounts} message CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accountid = 0;
                object.registration_complete = false;
            }
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            if (message.registration_complete != null && message.hasOwnProperty("registration_complete"))
                object.registration_complete = message.registration_complete;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_QueryAccountsRegisteredToSerial_Accounts to JSON.
         * @function toJSON
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Accounts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_QueryAccountsRegisteredToSerial_Accounts;
    })();
    
    $root.CAccountHardware_QueryAccountsRegisteredToSerial_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_QueryAccountsRegisteredToSerial_Response.
         * @exports ICAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @interface ICAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @property {Array.<ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts>|null} [accounts] CAccountHardware_QueryAccountsRegisteredToSerial_Response accounts
         */
    
        /**
         * Constructs a new CAccountHardware_QueryAccountsRegisteredToSerial_Response.
         * @exports CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @classdesc Represents a CAccountHardware_QueryAccountsRegisteredToSerial_Response.
         * @implements ICAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @constructor
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Response=} [properties] Properties to set
         */
        function CAccountHardware_QueryAccountsRegisteredToSerial_Response(properties) {
            this.accounts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_QueryAccountsRegisteredToSerial_Response accounts.
         * @member {Array.<ICAccountHardware_QueryAccountsRegisteredToSerial_Accounts>} accounts
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @instance
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.prototype.accounts = $util.emptyArray;
    
        /**
         * Creates a new CAccountHardware_QueryAccountsRegisteredToSerial_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Response=} [properties] Properties to set
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Response} CAccountHardware_QueryAccountsRegisteredToSerial_Response instance
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.create = function create(properties) {
            return new CAccountHardware_QueryAccountsRegisteredToSerial_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_QueryAccountsRegisteredToSerial_Response message. Does not implicitly {@link CAccountHardware_QueryAccountsRegisteredToSerial_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Response} message CAccountHardware_QueryAccountsRegisteredToSerial_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accounts != null && message.accounts.length)
                for (var i = 0; i < message.accounts.length; ++i)
                    $root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.encode(message.accounts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_QueryAccountsRegisteredToSerial_Response message, length delimited. Does not implicitly {@link CAccountHardware_QueryAccountsRegisteredToSerial_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @static
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Response} message CAccountHardware_QueryAccountsRegisteredToSerial_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_QueryAccountsRegisteredToSerial_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Response} CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_QueryAccountsRegisteredToSerial_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.accounts && message.accounts.length))
                        message.accounts = [];
                    message.accounts.push($root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_QueryAccountsRegisteredToSerial_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Response} CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_QueryAccountsRegisteredToSerial_Response message.
         * @function verify
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accounts != null && message.hasOwnProperty("accounts")) {
                if (!Array.isArray(message.accounts))
                    return "accounts: array expected";
                for (var i = 0; i < message.accounts.length; ++i) {
                    var error = $root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.verify(message.accounts[i]);
                    if (error)
                        return "accounts." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CAccountHardware_QueryAccountsRegisteredToSerial_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_QueryAccountsRegisteredToSerial_Response} CAccountHardware_QueryAccountsRegisteredToSerial_Response
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_QueryAccountsRegisteredToSerial_Response)
                return object;
            var message = new $root.CAccountHardware_QueryAccountsRegisteredToSerial_Response();
            if (object.accounts) {
                if (!Array.isArray(object.accounts))
                    throw TypeError(".CAccountHardware_QueryAccountsRegisteredToSerial_Response.accounts: array expected");
                message.accounts = [];
                for (var i = 0; i < object.accounts.length; ++i) {
                    if (typeof object.accounts[i] !== "object")
                        throw TypeError(".CAccountHardware_QueryAccountsRegisteredToSerial_Response.accounts: object expected");
                    message.accounts[i] = $root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.fromObject(object.accounts[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_QueryAccountsRegisteredToSerial_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @static
         * @param {CAccountHardware_QueryAccountsRegisteredToSerial_Response} message CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.accounts = [];
            if (message.accounts && message.accounts.length) {
                object.accounts = [];
                for (var j = 0; j < message.accounts.length; ++j)
                    object.accounts[j] = $root.CAccountHardware_QueryAccountsRegisteredToSerial_Accounts.toObject(message.accounts[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CAccountHardware_QueryAccountsRegisteredToSerial_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_QueryAccountsRegisteredToSerial_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_QueryAccountsRegisteredToSerial_Response;
    })();
    
    $root.CAccountHardware_SteamControllerSetConfig_ControllerConfig = (function() {
    
        /**
         * Properties of a CAccountHardware_SteamControllerSetConfig_ControllerConfig.
         * @exports ICAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @interface ICAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @property {string|null} [appidorname] CAccountHardware_SteamControllerSetConfig_ControllerConfig appidorname
         * @property {number|Long|null} [publishedfileid] CAccountHardware_SteamControllerSetConfig_ControllerConfig publishedfileid
         * @property {string|null} [templatename] CAccountHardware_SteamControllerSetConfig_ControllerConfig templatename
         */
    
        /**
         * Constructs a new CAccountHardware_SteamControllerSetConfig_ControllerConfig.
         * @exports CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @classdesc Represents a CAccountHardware_SteamControllerSetConfig_ControllerConfig.
         * @implements ICAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @constructor
         * @param {ICAccountHardware_SteamControllerSetConfig_ControllerConfig=} [properties] Properties to set
         */
        function CAccountHardware_SteamControllerSetConfig_ControllerConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_SteamControllerSetConfig_ControllerConfig appidorname.
         * @member {string} appidorname
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.prototype.appidorname = "";
    
        /**
         * CAccountHardware_SteamControllerSetConfig_ControllerConfig publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAccountHardware_SteamControllerSetConfig_ControllerConfig templatename.
         * @member {string} templatename
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.prototype.templatename = "";
    
        /**
         * Creates a new CAccountHardware_SteamControllerSetConfig_ControllerConfig instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_ControllerConfig=} [properties] Properties to set
         * @returns {CAccountHardware_SteamControllerSetConfig_ControllerConfig} CAccountHardware_SteamControllerSetConfig_ControllerConfig instance
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.create = function create(properties) {
            return new CAccountHardware_SteamControllerSetConfig_ControllerConfig(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerSetConfig_ControllerConfig message. Does not implicitly {@link CAccountHardware_SteamControllerSetConfig_ControllerConfig.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_ControllerConfig} message CAccountHardware_SteamControllerSetConfig_ControllerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appidorname);
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.publishedfileid);
            if (message.templatename != null && message.hasOwnProperty("templatename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.templatename);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerSetConfig_ControllerConfig message, length delimited. Does not implicitly {@link CAccountHardware_SteamControllerSetConfig_ControllerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_ControllerConfig} message CAccountHardware_SteamControllerSetConfig_ControllerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerSetConfig_ControllerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_SteamControllerSetConfig_ControllerConfig} CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_SteamControllerSetConfig_ControllerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appidorname = reader.string();
                    break;
                case 2:
                    message.publishedfileid = reader.uint64();
                    break;
                case 3:
                    message.templatename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerSetConfig_ControllerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_SteamControllerSetConfig_ControllerConfig} CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_SteamControllerSetConfig_ControllerConfig message.
         * @function verify
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                if (!$util.isString(message.appidorname))
                    return "appidorname: string expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.templatename != null && message.hasOwnProperty("templatename"))
                if (!$util.isString(message.templatename))
                    return "templatename: string expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_SteamControllerSetConfig_ControllerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_SteamControllerSetConfig_ControllerConfig} CAccountHardware_SteamControllerSetConfig_ControllerConfig
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_SteamControllerSetConfig_ControllerConfig)
                return object;
            var message = new $root.CAccountHardware_SteamControllerSetConfig_ControllerConfig();
            if (object.appidorname != null)
                message.appidorname = String(object.appidorname);
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.templatename != null)
                message.templatename = String(object.templatename);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_SteamControllerSetConfig_ControllerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @static
         * @param {CAccountHardware_SteamControllerSetConfig_ControllerConfig} message CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appidorname = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.templatename = "";
            }
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                object.appidorname = message.appidorname;
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.templatename != null && message.hasOwnProperty("templatename"))
                object.templatename = message.templatename;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_SteamControllerSetConfig_ControllerConfig to JSON.
         * @function toJSON
         * @memberof CAccountHardware_SteamControllerSetConfig_ControllerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_SteamControllerSetConfig_ControllerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_SteamControllerSetConfig_ControllerConfig;
    })();
    
    $root.CAccountHardware_SteamControllerSetConfig_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_SteamControllerSetConfig_Request.
         * @exports ICAccountHardware_SteamControllerSetConfig_Request
         * @interface ICAccountHardware_SteamControllerSetConfig_Request
         * @property {string|null} [serial_number] CAccountHardware_SteamControllerSetConfig_Request serial_number
         * @property {string|null} [controller_code] CAccountHardware_SteamControllerSetConfig_Request controller_code
         * @property {number|null} [accountid] CAccountHardware_SteamControllerSetConfig_Request accountid
         * @property {Array.<ICAccountHardware_SteamControllerSetConfig_ControllerConfig>|null} [configurations] CAccountHardware_SteamControllerSetConfig_Request configurations
         * @property {number|null} [controller_type] CAccountHardware_SteamControllerSetConfig_Request controller_type
         * @property {boolean|null} [only_for_this_serial] CAccountHardware_SteamControllerSetConfig_Request only_for_this_serial
         */
    
        /**
         * Constructs a new CAccountHardware_SteamControllerSetConfig_Request.
         * @exports CAccountHardware_SteamControllerSetConfig_Request
         * @classdesc Represents a CAccountHardware_SteamControllerSetConfig_Request.
         * @implements ICAccountHardware_SteamControllerSetConfig_Request
         * @constructor
         * @param {ICAccountHardware_SteamControllerSetConfig_Request=} [properties] Properties to set
         */
        function CAccountHardware_SteamControllerSetConfig_Request(properties) {
            this.configurations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_SteamControllerSetConfig_Request serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_Request.prototype.serial_number = "";
    
        /**
         * CAccountHardware_SteamControllerSetConfig_Request controller_code.
         * @member {string} controller_code
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_Request.prototype.controller_code = "";
    
        /**
         * CAccountHardware_SteamControllerSetConfig_Request accountid.
         * @member {number} accountid
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_Request.prototype.accountid = 0;
    
        /**
         * CAccountHardware_SteamControllerSetConfig_Request configurations.
         * @member {Array.<ICAccountHardware_SteamControllerSetConfig_ControllerConfig>} configurations
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_Request.prototype.configurations = $util.emptyArray;
    
        /**
         * CAccountHardware_SteamControllerSetConfig_Request controller_type.
         * @member {number} controller_type
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_Request.prototype.controller_type = 2;
    
        /**
         * CAccountHardware_SteamControllerSetConfig_Request only_for_this_serial.
         * @member {boolean} only_for_this_serial
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerSetConfig_Request.prototype.only_for_this_serial = false;
    
        /**
         * Creates a new CAccountHardware_SteamControllerSetConfig_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_Request=} [properties] Properties to set
         * @returns {CAccountHardware_SteamControllerSetConfig_Request} CAccountHardware_SteamControllerSetConfig_Request instance
         */
        CAccountHardware_SteamControllerSetConfig_Request.create = function create(properties) {
            return new CAccountHardware_SteamControllerSetConfig_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerSetConfig_Request message. Does not implicitly {@link CAccountHardware_SteamControllerSetConfig_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_Request} message CAccountHardware_SteamControllerSetConfig_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerSetConfig_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serial_number);
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.controller_code);
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.accountid);
            if (message.configurations != null && message.configurations.length)
                for (var i = 0; i < message.configurations.length; ++i)
                    $root.CAccountHardware_SteamControllerSetConfig_ControllerConfig.encode(message.configurations[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.controller_type != null && message.hasOwnProperty("controller_type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.controller_type);
            if (message.only_for_this_serial != null && message.hasOwnProperty("only_for_this_serial"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.only_for_this_serial);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerSetConfig_Request message, length delimited. Does not implicitly {@link CAccountHardware_SteamControllerSetConfig_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_Request} message CAccountHardware_SteamControllerSetConfig_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerSetConfig_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerSetConfig_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_SteamControllerSetConfig_Request} CAccountHardware_SteamControllerSetConfig_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerSetConfig_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_SteamControllerSetConfig_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serial_number = reader.string();
                    break;
                case 2:
                    message.controller_code = reader.string();
                    break;
                case 3:
                    message.accountid = reader.uint32();
                    break;
                case 4:
                    if (!(message.configurations && message.configurations.length))
                        message.configurations = [];
                    message.configurations.push($root.CAccountHardware_SteamControllerSetConfig_ControllerConfig.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.controller_type = reader.int32();
                    break;
                case 6:
                    message.only_for_this_serial = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerSetConfig_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_SteamControllerSetConfig_Request} CAccountHardware_SteamControllerSetConfig_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerSetConfig_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_SteamControllerSetConfig_Request message.
         * @function verify
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_SteamControllerSetConfig_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                if (!$util.isString(message.controller_code))
                    return "controller_code: string expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.configurations != null && message.hasOwnProperty("configurations")) {
                if (!Array.isArray(message.configurations))
                    return "configurations: array expected";
                for (var i = 0; i < message.configurations.length; ++i) {
                    var error = $root.CAccountHardware_SteamControllerSetConfig_ControllerConfig.verify(message.configurations[i]);
                    if (error)
                        return "configurations." + error;
                }
            }
            if (message.controller_type != null && message.hasOwnProperty("controller_type"))
                if (!$util.isInteger(message.controller_type))
                    return "controller_type: integer expected";
            if (message.only_for_this_serial != null && message.hasOwnProperty("only_for_this_serial"))
                if (typeof message.only_for_this_serial !== "boolean")
                    return "only_for_this_serial: boolean expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_SteamControllerSetConfig_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_SteamControllerSetConfig_Request} CAccountHardware_SteamControllerSetConfig_Request
         */
        CAccountHardware_SteamControllerSetConfig_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_SteamControllerSetConfig_Request)
                return object;
            var message = new $root.CAccountHardware_SteamControllerSetConfig_Request();
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.controller_code != null)
                message.controller_code = String(object.controller_code);
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            if (object.configurations) {
                if (!Array.isArray(object.configurations))
                    throw TypeError(".CAccountHardware_SteamControllerSetConfig_Request.configurations: array expected");
                message.configurations = [];
                for (var i = 0; i < object.configurations.length; ++i) {
                    if (typeof object.configurations[i] !== "object")
                        throw TypeError(".CAccountHardware_SteamControllerSetConfig_Request.configurations: object expected");
                    message.configurations[i] = $root.CAccountHardware_SteamControllerSetConfig_ControllerConfig.fromObject(object.configurations[i]);
                }
            }
            if (object.controller_type != null)
                message.controller_type = object.controller_type | 0;
            if (object.only_for_this_serial != null)
                message.only_for_this_serial = Boolean(object.only_for_this_serial);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_SteamControllerSetConfig_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @static
         * @param {CAccountHardware_SteamControllerSetConfig_Request} message CAccountHardware_SteamControllerSetConfig_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_SteamControllerSetConfig_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.configurations = [];
            if (options.defaults) {
                object.serial_number = "";
                object.controller_code = "";
                object.accountid = 0;
                object.controller_type = 2;
                object.only_for_this_serial = false;
            }
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                object.controller_code = message.controller_code;
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            if (message.configurations && message.configurations.length) {
                object.configurations = [];
                for (var j = 0; j < message.configurations.length; ++j)
                    object.configurations[j] = $root.CAccountHardware_SteamControllerSetConfig_ControllerConfig.toObject(message.configurations[j], options);
            }
            if (message.controller_type != null && message.hasOwnProperty("controller_type"))
                object.controller_type = message.controller_type;
            if (message.only_for_this_serial != null && message.hasOwnProperty("only_for_this_serial"))
                object.only_for_this_serial = message.only_for_this_serial;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_SteamControllerSetConfig_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_SteamControllerSetConfig_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_SteamControllerSetConfig_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_SteamControllerSetConfig_Request;
    })();
    
    $root.CAccountHardware_SteamControllerSetConfig_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_SteamControllerSetConfig_Response.
         * @exports ICAccountHardware_SteamControllerSetConfig_Response
         * @interface ICAccountHardware_SteamControllerSetConfig_Response
         */
    
        /**
         * Constructs a new CAccountHardware_SteamControllerSetConfig_Response.
         * @exports CAccountHardware_SteamControllerSetConfig_Response
         * @classdesc Represents a CAccountHardware_SteamControllerSetConfig_Response.
         * @implements ICAccountHardware_SteamControllerSetConfig_Response
         * @constructor
         * @param {ICAccountHardware_SteamControllerSetConfig_Response=} [properties] Properties to set
         */
        function CAccountHardware_SteamControllerSetConfig_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CAccountHardware_SteamControllerSetConfig_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_Response=} [properties] Properties to set
         * @returns {CAccountHardware_SteamControllerSetConfig_Response} CAccountHardware_SteamControllerSetConfig_Response instance
         */
        CAccountHardware_SteamControllerSetConfig_Response.create = function create(properties) {
            return new CAccountHardware_SteamControllerSetConfig_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerSetConfig_Response message. Does not implicitly {@link CAccountHardware_SteamControllerSetConfig_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_Response} message CAccountHardware_SteamControllerSetConfig_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerSetConfig_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerSetConfig_Response message, length delimited. Does not implicitly {@link CAccountHardware_SteamControllerSetConfig_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @static
         * @param {ICAccountHardware_SteamControllerSetConfig_Response} message CAccountHardware_SteamControllerSetConfig_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerSetConfig_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerSetConfig_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_SteamControllerSetConfig_Response} CAccountHardware_SteamControllerSetConfig_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerSetConfig_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_SteamControllerSetConfig_Response();
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
         * Decodes a CAccountHardware_SteamControllerSetConfig_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_SteamControllerSetConfig_Response} CAccountHardware_SteamControllerSetConfig_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerSetConfig_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_SteamControllerSetConfig_Response message.
         * @function verify
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_SteamControllerSetConfig_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_SteamControllerSetConfig_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_SteamControllerSetConfig_Response} CAccountHardware_SteamControllerSetConfig_Response
         */
        CAccountHardware_SteamControllerSetConfig_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_SteamControllerSetConfig_Response)
                return object;
            return new $root.CAccountHardware_SteamControllerSetConfig_Response();
        };
    
        /**
         * Creates a plain object from a CAccountHardware_SteamControllerSetConfig_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @static
         * @param {CAccountHardware_SteamControllerSetConfig_Response} message CAccountHardware_SteamControllerSetConfig_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_SteamControllerSetConfig_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CAccountHardware_SteamControllerSetConfig_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_SteamControllerSetConfig_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_SteamControllerSetConfig_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_SteamControllerSetConfig_Response;
    })();
    
    $root.CAccountHardware_SteamControllerGetConfig_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_SteamControllerGetConfig_Request.
         * @exports ICAccountHardware_SteamControllerGetConfig_Request
         * @interface ICAccountHardware_SteamControllerGetConfig_Request
         * @property {string|null} [serial_number] CAccountHardware_SteamControllerGetConfig_Request serial_number
         * @property {string|null} [controller_code] CAccountHardware_SteamControllerGetConfig_Request controller_code
         * @property {number|null} [accountid] CAccountHardware_SteamControllerGetConfig_Request accountid
         * @property {string|null} [appidorname] CAccountHardware_SteamControllerGetConfig_Request appidorname
         * @property {number|null} [controller_type] CAccountHardware_SteamControllerGetConfig_Request controller_type
         * @property {boolean|null} [only_for_this_serial] CAccountHardware_SteamControllerGetConfig_Request only_for_this_serial
         */
    
        /**
         * Constructs a new CAccountHardware_SteamControllerGetConfig_Request.
         * @exports CAccountHardware_SteamControllerGetConfig_Request
         * @classdesc Represents a CAccountHardware_SteamControllerGetConfig_Request.
         * @implements ICAccountHardware_SteamControllerGetConfig_Request
         * @constructor
         * @param {ICAccountHardware_SteamControllerGetConfig_Request=} [properties] Properties to set
         */
        function CAccountHardware_SteamControllerGetConfig_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_SteamControllerGetConfig_Request serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_Request.prototype.serial_number = "";
    
        /**
         * CAccountHardware_SteamControllerGetConfig_Request controller_code.
         * @member {string} controller_code
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_Request.prototype.controller_code = "";
    
        /**
         * CAccountHardware_SteamControllerGetConfig_Request accountid.
         * @member {number} accountid
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_Request.prototype.accountid = 0;
    
        /**
         * CAccountHardware_SteamControllerGetConfig_Request appidorname.
         * @member {string} appidorname
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_Request.prototype.appidorname = "";
    
        /**
         * CAccountHardware_SteamControllerGetConfig_Request controller_type.
         * @member {number} controller_type
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_Request.prototype.controller_type = 2;
    
        /**
         * CAccountHardware_SteamControllerGetConfig_Request only_for_this_serial.
         * @member {boolean} only_for_this_serial
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_Request.prototype.only_for_this_serial = false;
    
        /**
         * Creates a new CAccountHardware_SteamControllerGetConfig_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_Request=} [properties] Properties to set
         * @returns {CAccountHardware_SteamControllerGetConfig_Request} CAccountHardware_SteamControllerGetConfig_Request instance
         */
        CAccountHardware_SteamControllerGetConfig_Request.create = function create(properties) {
            return new CAccountHardware_SteamControllerGetConfig_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerGetConfig_Request message. Does not implicitly {@link CAccountHardware_SteamControllerGetConfig_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_Request} message CAccountHardware_SteamControllerGetConfig_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerGetConfig_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serial_number);
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.controller_code);
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.accountid);
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.appidorname);
            if (message.controller_type != null && message.hasOwnProperty("controller_type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.controller_type);
            if (message.only_for_this_serial != null && message.hasOwnProperty("only_for_this_serial"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.only_for_this_serial);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerGetConfig_Request message, length delimited. Does not implicitly {@link CAccountHardware_SteamControllerGetConfig_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_Request} message CAccountHardware_SteamControllerGetConfig_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerGetConfig_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerGetConfig_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_SteamControllerGetConfig_Request} CAccountHardware_SteamControllerGetConfig_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerGetConfig_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_SteamControllerGetConfig_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serial_number = reader.string();
                    break;
                case 2:
                    message.controller_code = reader.string();
                    break;
                case 3:
                    message.accountid = reader.uint32();
                    break;
                case 4:
                    message.appidorname = reader.string();
                    break;
                case 5:
                    message.controller_type = reader.int32();
                    break;
                case 6:
                    message.only_for_this_serial = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerGetConfig_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_SteamControllerGetConfig_Request} CAccountHardware_SteamControllerGetConfig_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerGetConfig_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_SteamControllerGetConfig_Request message.
         * @function verify
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_SteamControllerGetConfig_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                if (!$util.isString(message.controller_code))
                    return "controller_code: string expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                if (!$util.isString(message.appidorname))
                    return "appidorname: string expected";
            if (message.controller_type != null && message.hasOwnProperty("controller_type"))
                if (!$util.isInteger(message.controller_type))
                    return "controller_type: integer expected";
            if (message.only_for_this_serial != null && message.hasOwnProperty("only_for_this_serial"))
                if (typeof message.only_for_this_serial !== "boolean")
                    return "only_for_this_serial: boolean expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_SteamControllerGetConfig_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_SteamControllerGetConfig_Request} CAccountHardware_SteamControllerGetConfig_Request
         */
        CAccountHardware_SteamControllerGetConfig_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_SteamControllerGetConfig_Request)
                return object;
            var message = new $root.CAccountHardware_SteamControllerGetConfig_Request();
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.controller_code != null)
                message.controller_code = String(object.controller_code);
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            if (object.appidorname != null)
                message.appidorname = String(object.appidorname);
            if (object.controller_type != null)
                message.controller_type = object.controller_type | 0;
            if (object.only_for_this_serial != null)
                message.only_for_this_serial = Boolean(object.only_for_this_serial);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_SteamControllerGetConfig_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @static
         * @param {CAccountHardware_SteamControllerGetConfig_Request} message CAccountHardware_SteamControllerGetConfig_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_SteamControllerGetConfig_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serial_number = "";
                object.controller_code = "";
                object.accountid = 0;
                object.appidorname = "";
                object.controller_type = 2;
                object.only_for_this_serial = false;
            }
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                object.controller_code = message.controller_code;
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                object.appidorname = message.appidorname;
            if (message.controller_type != null && message.hasOwnProperty("controller_type"))
                object.controller_type = message.controller_type;
            if (message.only_for_this_serial != null && message.hasOwnProperty("only_for_this_serial"))
                object.only_for_this_serial = message.only_for_this_serial;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_SteamControllerGetConfig_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_SteamControllerGetConfig_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_SteamControllerGetConfig_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_SteamControllerGetConfig_Request;
    })();
    
    $root.CAccountHardware_SteamControllerGetConfig_ControllerConfig = (function() {
    
        /**
         * Properties of a CAccountHardware_SteamControllerGetConfig_ControllerConfig.
         * @exports ICAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @interface ICAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @property {string|null} [appidorname] CAccountHardware_SteamControllerGetConfig_ControllerConfig appidorname
         * @property {number|Long|null} [publishedfileid] CAccountHardware_SteamControllerGetConfig_ControllerConfig publishedfileid
         * @property {string|null} [templatename] CAccountHardware_SteamControllerGetConfig_ControllerConfig templatename
         * @property {string|null} [serial_number] CAccountHardware_SteamControllerGetConfig_ControllerConfig serial_number
         */
    
        /**
         * Constructs a new CAccountHardware_SteamControllerGetConfig_ControllerConfig.
         * @exports CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @classdesc Represents a CAccountHardware_SteamControllerGetConfig_ControllerConfig.
         * @implements ICAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @constructor
         * @param {ICAccountHardware_SteamControllerGetConfig_ControllerConfig=} [properties] Properties to set
         */
        function CAccountHardware_SteamControllerGetConfig_ControllerConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_SteamControllerGetConfig_ControllerConfig appidorname.
         * @member {string} appidorname
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.prototype.appidorname = "";
    
        /**
         * CAccountHardware_SteamControllerGetConfig_ControllerConfig publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAccountHardware_SteamControllerGetConfig_ControllerConfig templatename.
         * @member {string} templatename
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.prototype.templatename = "";
    
        /**
         * CAccountHardware_SteamControllerGetConfig_ControllerConfig serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.prototype.serial_number = "";
    
        /**
         * Creates a new CAccountHardware_SteamControllerGetConfig_ControllerConfig instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_ControllerConfig=} [properties] Properties to set
         * @returns {CAccountHardware_SteamControllerGetConfig_ControllerConfig} CAccountHardware_SteamControllerGetConfig_ControllerConfig instance
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.create = function create(properties) {
            return new CAccountHardware_SteamControllerGetConfig_ControllerConfig(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerGetConfig_ControllerConfig message. Does not implicitly {@link CAccountHardware_SteamControllerGetConfig_ControllerConfig.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_ControllerConfig} message CAccountHardware_SteamControllerGetConfig_ControllerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appidorname);
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.publishedfileid);
            if (message.templatename != null && message.hasOwnProperty("templatename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.templatename);
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.serial_number);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerGetConfig_ControllerConfig message, length delimited. Does not implicitly {@link CAccountHardware_SteamControllerGetConfig_ControllerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_ControllerConfig} message CAccountHardware_SteamControllerGetConfig_ControllerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerGetConfig_ControllerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_SteamControllerGetConfig_ControllerConfig} CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_SteamControllerGetConfig_ControllerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appidorname = reader.string();
                    break;
                case 2:
                    message.publishedfileid = reader.uint64();
                    break;
                case 3:
                    message.templatename = reader.string();
                    break;
                case 4:
                    message.serial_number = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerGetConfig_ControllerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_SteamControllerGetConfig_ControllerConfig} CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_SteamControllerGetConfig_ControllerConfig message.
         * @function verify
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                if (!$util.isString(message.appidorname))
                    return "appidorname: string expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.templatename != null && message.hasOwnProperty("templatename"))
                if (!$util.isString(message.templatename))
                    return "templatename: string expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_SteamControllerGetConfig_ControllerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_SteamControllerGetConfig_ControllerConfig} CAccountHardware_SteamControllerGetConfig_ControllerConfig
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_SteamControllerGetConfig_ControllerConfig)
                return object;
            var message = new $root.CAccountHardware_SteamControllerGetConfig_ControllerConfig();
            if (object.appidorname != null)
                message.appidorname = String(object.appidorname);
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.templatename != null)
                message.templatename = String(object.templatename);
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_SteamControllerGetConfig_ControllerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @static
         * @param {CAccountHardware_SteamControllerGetConfig_ControllerConfig} message CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appidorname = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.templatename = "";
                object.serial_number = "";
            }
            if (message.appidorname != null && message.hasOwnProperty("appidorname"))
                object.appidorname = message.appidorname;
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.templatename != null && message.hasOwnProperty("templatename"))
                object.templatename = message.templatename;
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_SteamControllerGetConfig_ControllerConfig to JSON.
         * @function toJSON
         * @memberof CAccountHardware_SteamControllerGetConfig_ControllerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_SteamControllerGetConfig_ControllerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_SteamControllerGetConfig_ControllerConfig;
    })();
    
    $root.CAccountHardware_SteamControllerGetConfig_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_SteamControllerGetConfig_Response.
         * @exports ICAccountHardware_SteamControllerGetConfig_Response
         * @interface ICAccountHardware_SteamControllerGetConfig_Response
         * @property {Array.<ICAccountHardware_SteamControllerGetConfig_ControllerConfig>|null} [configurations] CAccountHardware_SteamControllerGetConfig_Response configurations
         */
    
        /**
         * Constructs a new CAccountHardware_SteamControllerGetConfig_Response.
         * @exports CAccountHardware_SteamControllerGetConfig_Response
         * @classdesc Represents a CAccountHardware_SteamControllerGetConfig_Response.
         * @implements ICAccountHardware_SteamControllerGetConfig_Response
         * @constructor
         * @param {ICAccountHardware_SteamControllerGetConfig_Response=} [properties] Properties to set
         */
        function CAccountHardware_SteamControllerGetConfig_Response(properties) {
            this.configurations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_SteamControllerGetConfig_Response configurations.
         * @member {Array.<ICAccountHardware_SteamControllerGetConfig_ControllerConfig>} configurations
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @instance
         */
        CAccountHardware_SteamControllerGetConfig_Response.prototype.configurations = $util.emptyArray;
    
        /**
         * Creates a new CAccountHardware_SteamControllerGetConfig_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_Response=} [properties] Properties to set
         * @returns {CAccountHardware_SteamControllerGetConfig_Response} CAccountHardware_SteamControllerGetConfig_Response instance
         */
        CAccountHardware_SteamControllerGetConfig_Response.create = function create(properties) {
            return new CAccountHardware_SteamControllerGetConfig_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerGetConfig_Response message. Does not implicitly {@link CAccountHardware_SteamControllerGetConfig_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_Response} message CAccountHardware_SteamControllerGetConfig_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerGetConfig_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.configurations != null && message.configurations.length)
                for (var i = 0; i < message.configurations.length; ++i)
                    $root.CAccountHardware_SteamControllerGetConfig_ControllerConfig.encode(message.configurations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_SteamControllerGetConfig_Response message, length delimited. Does not implicitly {@link CAccountHardware_SteamControllerGetConfig_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @static
         * @param {ICAccountHardware_SteamControllerGetConfig_Response} message CAccountHardware_SteamControllerGetConfig_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SteamControllerGetConfig_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerGetConfig_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_SteamControllerGetConfig_Response} CAccountHardware_SteamControllerGetConfig_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerGetConfig_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_SteamControllerGetConfig_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.configurations && message.configurations.length))
                        message.configurations = [];
                    message.configurations.push($root.CAccountHardware_SteamControllerGetConfig_ControllerConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_SteamControllerGetConfig_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_SteamControllerGetConfig_Response} CAccountHardware_SteamControllerGetConfig_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SteamControllerGetConfig_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_SteamControllerGetConfig_Response message.
         * @function verify
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_SteamControllerGetConfig_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.configurations != null && message.hasOwnProperty("configurations")) {
                if (!Array.isArray(message.configurations))
                    return "configurations: array expected";
                for (var i = 0; i < message.configurations.length; ++i) {
                    var error = $root.CAccountHardware_SteamControllerGetConfig_ControllerConfig.verify(message.configurations[i]);
                    if (error)
                        return "configurations." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CAccountHardware_SteamControllerGetConfig_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_SteamControllerGetConfig_Response} CAccountHardware_SteamControllerGetConfig_Response
         */
        CAccountHardware_SteamControllerGetConfig_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_SteamControllerGetConfig_Response)
                return object;
            var message = new $root.CAccountHardware_SteamControllerGetConfig_Response();
            if (object.configurations) {
                if (!Array.isArray(object.configurations))
                    throw TypeError(".CAccountHardware_SteamControllerGetConfig_Response.configurations: array expected");
                message.configurations = [];
                for (var i = 0; i < object.configurations.length; ++i) {
                    if (typeof object.configurations[i] !== "object")
                        throw TypeError(".CAccountHardware_SteamControllerGetConfig_Response.configurations: object expected");
                    message.configurations[i] = $root.CAccountHardware_SteamControllerGetConfig_ControllerConfig.fromObject(object.configurations[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_SteamControllerGetConfig_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @static
         * @param {CAccountHardware_SteamControllerGetConfig_Response} message CAccountHardware_SteamControllerGetConfig_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_SteamControllerGetConfig_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.configurations = [];
            if (message.configurations && message.configurations.length) {
                object.configurations = [];
                for (var j = 0; j < message.configurations.length; ++j)
                    object.configurations[j] = $root.CAccountHardware_SteamControllerGetConfig_ControllerConfig.toObject(message.configurations[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CAccountHardware_SteamControllerGetConfig_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_SteamControllerGetConfig_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_SteamControllerGetConfig_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_SteamControllerGetConfig_Response;
    })();
    
    $root.CAccountHardware_DeRegisterSteamController_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_DeRegisterSteamController_Request.
         * @exports ICAccountHardware_DeRegisterSteamController_Request
         * @interface ICAccountHardware_DeRegisterSteamController_Request
         * @property {string|null} [serial_number] CAccountHardware_DeRegisterSteamController_Request serial_number
         * @property {string|null} [controller_code] CAccountHardware_DeRegisterSteamController_Request controller_code
         * @property {number|null} [accountid] CAccountHardware_DeRegisterSteamController_Request accountid
         */
    
        /**
         * Constructs a new CAccountHardware_DeRegisterSteamController_Request.
         * @exports CAccountHardware_DeRegisterSteamController_Request
         * @classdesc Represents a CAccountHardware_DeRegisterSteamController_Request.
         * @implements ICAccountHardware_DeRegisterSteamController_Request
         * @constructor
         * @param {ICAccountHardware_DeRegisterSteamController_Request=} [properties] Properties to set
         */
        function CAccountHardware_DeRegisterSteamController_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_DeRegisterSteamController_Request serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @instance
         */
        CAccountHardware_DeRegisterSteamController_Request.prototype.serial_number = "";
    
        /**
         * CAccountHardware_DeRegisterSteamController_Request controller_code.
         * @member {string} controller_code
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @instance
         */
        CAccountHardware_DeRegisterSteamController_Request.prototype.controller_code = "";
    
        /**
         * CAccountHardware_DeRegisterSteamController_Request accountid.
         * @member {number} accountid
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @instance
         */
        CAccountHardware_DeRegisterSteamController_Request.prototype.accountid = 0;
    
        /**
         * Creates a new CAccountHardware_DeRegisterSteamController_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @static
         * @param {ICAccountHardware_DeRegisterSteamController_Request=} [properties] Properties to set
         * @returns {CAccountHardware_DeRegisterSteamController_Request} CAccountHardware_DeRegisterSteamController_Request instance
         */
        CAccountHardware_DeRegisterSteamController_Request.create = function create(properties) {
            return new CAccountHardware_DeRegisterSteamController_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_DeRegisterSteamController_Request message. Does not implicitly {@link CAccountHardware_DeRegisterSteamController_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @static
         * @param {ICAccountHardware_DeRegisterSteamController_Request} message CAccountHardware_DeRegisterSteamController_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_DeRegisterSteamController_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serial_number);
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.controller_code);
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.accountid);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_DeRegisterSteamController_Request message, length delimited. Does not implicitly {@link CAccountHardware_DeRegisterSteamController_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @static
         * @param {ICAccountHardware_DeRegisterSteamController_Request} message CAccountHardware_DeRegisterSteamController_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_DeRegisterSteamController_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_DeRegisterSteamController_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_DeRegisterSteamController_Request} CAccountHardware_DeRegisterSteamController_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_DeRegisterSteamController_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_DeRegisterSteamController_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serial_number = reader.string();
                    break;
                case 2:
                    message.controller_code = reader.string();
                    break;
                case 3:
                    message.accountid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_DeRegisterSteamController_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_DeRegisterSteamController_Request} CAccountHardware_DeRegisterSteamController_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_DeRegisterSteamController_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_DeRegisterSteamController_Request message.
         * @function verify
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_DeRegisterSteamController_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                if (!$util.isString(message.controller_code))
                    return "controller_code: string expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_DeRegisterSteamController_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_DeRegisterSteamController_Request} CAccountHardware_DeRegisterSteamController_Request
         */
        CAccountHardware_DeRegisterSteamController_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_DeRegisterSteamController_Request)
                return object;
            var message = new $root.CAccountHardware_DeRegisterSteamController_Request();
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.controller_code != null)
                message.controller_code = String(object.controller_code);
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_DeRegisterSteamController_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @static
         * @param {CAccountHardware_DeRegisterSteamController_Request} message CAccountHardware_DeRegisterSteamController_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_DeRegisterSteamController_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serial_number = "";
                object.controller_code = "";
                object.accountid = 0;
            }
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.controller_code != null && message.hasOwnProperty("controller_code"))
                object.controller_code = message.controller_code;
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_DeRegisterSteamController_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_DeRegisterSteamController_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_DeRegisterSteamController_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_DeRegisterSteamController_Request;
    })();
    
    $root.CAccountHardware_DeRegisterSteamController_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_DeRegisterSteamController_Response.
         * @exports ICAccountHardware_DeRegisterSteamController_Response
         * @interface ICAccountHardware_DeRegisterSteamController_Response
         */
    
        /**
         * Constructs a new CAccountHardware_DeRegisterSteamController_Response.
         * @exports CAccountHardware_DeRegisterSteamController_Response
         * @classdesc Represents a CAccountHardware_DeRegisterSteamController_Response.
         * @implements ICAccountHardware_DeRegisterSteamController_Response
         * @constructor
         * @param {ICAccountHardware_DeRegisterSteamController_Response=} [properties] Properties to set
         */
        function CAccountHardware_DeRegisterSteamController_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CAccountHardware_DeRegisterSteamController_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @static
         * @param {ICAccountHardware_DeRegisterSteamController_Response=} [properties] Properties to set
         * @returns {CAccountHardware_DeRegisterSteamController_Response} CAccountHardware_DeRegisterSteamController_Response instance
         */
        CAccountHardware_DeRegisterSteamController_Response.create = function create(properties) {
            return new CAccountHardware_DeRegisterSteamController_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_DeRegisterSteamController_Response message. Does not implicitly {@link CAccountHardware_DeRegisterSteamController_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @static
         * @param {ICAccountHardware_DeRegisterSteamController_Response} message CAccountHardware_DeRegisterSteamController_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_DeRegisterSteamController_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_DeRegisterSteamController_Response message, length delimited. Does not implicitly {@link CAccountHardware_DeRegisterSteamController_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @static
         * @param {ICAccountHardware_DeRegisterSteamController_Response} message CAccountHardware_DeRegisterSteamController_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_DeRegisterSteamController_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_DeRegisterSteamController_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_DeRegisterSteamController_Response} CAccountHardware_DeRegisterSteamController_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_DeRegisterSteamController_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_DeRegisterSteamController_Response();
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
         * Decodes a CAccountHardware_DeRegisterSteamController_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_DeRegisterSteamController_Response} CAccountHardware_DeRegisterSteamController_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_DeRegisterSteamController_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_DeRegisterSteamController_Response message.
         * @function verify
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_DeRegisterSteamController_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_DeRegisterSteamController_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_DeRegisterSteamController_Response} CAccountHardware_DeRegisterSteamController_Response
         */
        CAccountHardware_DeRegisterSteamController_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_DeRegisterSteamController_Response)
                return object;
            return new $root.CAccountHardware_DeRegisterSteamController_Response();
        };
    
        /**
         * Creates a plain object from a CAccountHardware_DeRegisterSteamController_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @static
         * @param {CAccountHardware_DeRegisterSteamController_Response} message CAccountHardware_DeRegisterSteamController_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_DeRegisterSteamController_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CAccountHardware_DeRegisterSteamController_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_DeRegisterSteamController_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_DeRegisterSteamController_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_DeRegisterSteamController_Response;
    })();
    
    $root.CAccountHardware_SetPersonalizationFile_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_SetPersonalizationFile_Request.
         * @exports ICAccountHardware_SetPersonalizationFile_Request
         * @interface ICAccountHardware_SetPersonalizationFile_Request
         * @property {string|null} [serial_number] CAccountHardware_SetPersonalizationFile_Request serial_number
         * @property {number|Long|null} [publishedfileid] CAccountHardware_SetPersonalizationFile_Request publishedfileid
         * @property {number|null} [accountid] CAccountHardware_SetPersonalizationFile_Request accountid
         */
    
        /**
         * Constructs a new CAccountHardware_SetPersonalizationFile_Request.
         * @exports CAccountHardware_SetPersonalizationFile_Request
         * @classdesc Represents a CAccountHardware_SetPersonalizationFile_Request.
         * @implements ICAccountHardware_SetPersonalizationFile_Request
         * @constructor
         * @param {ICAccountHardware_SetPersonalizationFile_Request=} [properties] Properties to set
         */
        function CAccountHardware_SetPersonalizationFile_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_SetPersonalizationFile_Request serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @instance
         */
        CAccountHardware_SetPersonalizationFile_Request.prototype.serial_number = "";
    
        /**
         * CAccountHardware_SetPersonalizationFile_Request publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @instance
         */
        CAccountHardware_SetPersonalizationFile_Request.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAccountHardware_SetPersonalizationFile_Request accountid.
         * @member {number} accountid
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @instance
         */
        CAccountHardware_SetPersonalizationFile_Request.prototype.accountid = 0;
    
        /**
         * Creates a new CAccountHardware_SetPersonalizationFile_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @static
         * @param {ICAccountHardware_SetPersonalizationFile_Request=} [properties] Properties to set
         * @returns {CAccountHardware_SetPersonalizationFile_Request} CAccountHardware_SetPersonalizationFile_Request instance
         */
        CAccountHardware_SetPersonalizationFile_Request.create = function create(properties) {
            return new CAccountHardware_SetPersonalizationFile_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_SetPersonalizationFile_Request message. Does not implicitly {@link CAccountHardware_SetPersonalizationFile_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @static
         * @param {ICAccountHardware_SetPersonalizationFile_Request} message CAccountHardware_SetPersonalizationFile_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SetPersonalizationFile_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serial_number);
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.publishedfileid);
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.accountid);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_SetPersonalizationFile_Request message, length delimited. Does not implicitly {@link CAccountHardware_SetPersonalizationFile_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @static
         * @param {ICAccountHardware_SetPersonalizationFile_Request} message CAccountHardware_SetPersonalizationFile_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SetPersonalizationFile_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_SetPersonalizationFile_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_SetPersonalizationFile_Request} CAccountHardware_SetPersonalizationFile_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SetPersonalizationFile_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_SetPersonalizationFile_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serial_number = reader.string();
                    break;
                case 2:
                    message.publishedfileid = reader.uint64();
                    break;
                case 3:
                    message.accountid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_SetPersonalizationFile_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_SetPersonalizationFile_Request} CAccountHardware_SetPersonalizationFile_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SetPersonalizationFile_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_SetPersonalizationFile_Request message.
         * @function verify
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_SetPersonalizationFile_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_SetPersonalizationFile_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_SetPersonalizationFile_Request} CAccountHardware_SetPersonalizationFile_Request
         */
        CAccountHardware_SetPersonalizationFile_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_SetPersonalizationFile_Request)
                return object;
            var message = new $root.CAccountHardware_SetPersonalizationFile_Request();
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_SetPersonalizationFile_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @static
         * @param {CAccountHardware_SetPersonalizationFile_Request} message CAccountHardware_SetPersonalizationFile_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_SetPersonalizationFile_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serial_number = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
                object.accountid = 0;
            }
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_SetPersonalizationFile_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_SetPersonalizationFile_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_SetPersonalizationFile_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_SetPersonalizationFile_Request;
    })();
    
    $root.CAccountHardware_SetPersonalizationFile_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_SetPersonalizationFile_Response.
         * @exports ICAccountHardware_SetPersonalizationFile_Response
         * @interface ICAccountHardware_SetPersonalizationFile_Response
         */
    
        /**
         * Constructs a new CAccountHardware_SetPersonalizationFile_Response.
         * @exports CAccountHardware_SetPersonalizationFile_Response
         * @classdesc Represents a CAccountHardware_SetPersonalizationFile_Response.
         * @implements ICAccountHardware_SetPersonalizationFile_Response
         * @constructor
         * @param {ICAccountHardware_SetPersonalizationFile_Response=} [properties] Properties to set
         */
        function CAccountHardware_SetPersonalizationFile_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CAccountHardware_SetPersonalizationFile_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @static
         * @param {ICAccountHardware_SetPersonalizationFile_Response=} [properties] Properties to set
         * @returns {CAccountHardware_SetPersonalizationFile_Response} CAccountHardware_SetPersonalizationFile_Response instance
         */
        CAccountHardware_SetPersonalizationFile_Response.create = function create(properties) {
            return new CAccountHardware_SetPersonalizationFile_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_SetPersonalizationFile_Response message. Does not implicitly {@link CAccountHardware_SetPersonalizationFile_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @static
         * @param {ICAccountHardware_SetPersonalizationFile_Response} message CAccountHardware_SetPersonalizationFile_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SetPersonalizationFile_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_SetPersonalizationFile_Response message, length delimited. Does not implicitly {@link CAccountHardware_SetPersonalizationFile_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @static
         * @param {ICAccountHardware_SetPersonalizationFile_Response} message CAccountHardware_SetPersonalizationFile_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_SetPersonalizationFile_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_SetPersonalizationFile_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_SetPersonalizationFile_Response} CAccountHardware_SetPersonalizationFile_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SetPersonalizationFile_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_SetPersonalizationFile_Response();
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
         * Decodes a CAccountHardware_SetPersonalizationFile_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_SetPersonalizationFile_Response} CAccountHardware_SetPersonalizationFile_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_SetPersonalizationFile_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_SetPersonalizationFile_Response message.
         * @function verify
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_SetPersonalizationFile_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_SetPersonalizationFile_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_SetPersonalizationFile_Response} CAccountHardware_SetPersonalizationFile_Response
         */
        CAccountHardware_SetPersonalizationFile_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_SetPersonalizationFile_Response)
                return object;
            return new $root.CAccountHardware_SetPersonalizationFile_Response();
        };
    
        /**
         * Creates a plain object from a CAccountHardware_SetPersonalizationFile_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @static
         * @param {CAccountHardware_SetPersonalizationFile_Response} message CAccountHardware_SetPersonalizationFile_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_SetPersonalizationFile_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CAccountHardware_SetPersonalizationFile_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_SetPersonalizationFile_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_SetPersonalizationFile_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_SetPersonalizationFile_Response;
    })();
    
    $root.CAccountHardware_GetPersonalizationFile_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_GetPersonalizationFile_Request.
         * @exports ICAccountHardware_GetPersonalizationFile_Request
         * @interface ICAccountHardware_GetPersonalizationFile_Request
         * @property {string|null} [serial_number] CAccountHardware_GetPersonalizationFile_Request serial_number
         * @property {number|null} [accountid] CAccountHardware_GetPersonalizationFile_Request accountid
         */
    
        /**
         * Constructs a new CAccountHardware_GetPersonalizationFile_Request.
         * @exports CAccountHardware_GetPersonalizationFile_Request
         * @classdesc Represents a CAccountHardware_GetPersonalizationFile_Request.
         * @implements ICAccountHardware_GetPersonalizationFile_Request
         * @constructor
         * @param {ICAccountHardware_GetPersonalizationFile_Request=} [properties] Properties to set
         */
        function CAccountHardware_GetPersonalizationFile_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_GetPersonalizationFile_Request serial_number.
         * @member {string} serial_number
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @instance
         */
        CAccountHardware_GetPersonalizationFile_Request.prototype.serial_number = "";
    
        /**
         * CAccountHardware_GetPersonalizationFile_Request accountid.
         * @member {number} accountid
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @instance
         */
        CAccountHardware_GetPersonalizationFile_Request.prototype.accountid = 0;
    
        /**
         * Creates a new CAccountHardware_GetPersonalizationFile_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @static
         * @param {ICAccountHardware_GetPersonalizationFile_Request=} [properties] Properties to set
         * @returns {CAccountHardware_GetPersonalizationFile_Request} CAccountHardware_GetPersonalizationFile_Request instance
         */
        CAccountHardware_GetPersonalizationFile_Request.create = function create(properties) {
            return new CAccountHardware_GetPersonalizationFile_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_GetPersonalizationFile_Request message. Does not implicitly {@link CAccountHardware_GetPersonalizationFile_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @static
         * @param {ICAccountHardware_GetPersonalizationFile_Request} message CAccountHardware_GetPersonalizationFile_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_GetPersonalizationFile_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serial_number);
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.accountid);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_GetPersonalizationFile_Request message, length delimited. Does not implicitly {@link CAccountHardware_GetPersonalizationFile_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @static
         * @param {ICAccountHardware_GetPersonalizationFile_Request} message CAccountHardware_GetPersonalizationFile_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_GetPersonalizationFile_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_GetPersonalizationFile_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_GetPersonalizationFile_Request} CAccountHardware_GetPersonalizationFile_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_GetPersonalizationFile_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_GetPersonalizationFile_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serial_number = reader.string();
                    break;
                case 2:
                    message.accountid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_GetPersonalizationFile_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_GetPersonalizationFile_Request} CAccountHardware_GetPersonalizationFile_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_GetPersonalizationFile_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_GetPersonalizationFile_Request message.
         * @function verify
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_GetPersonalizationFile_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_GetPersonalizationFile_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_GetPersonalizationFile_Request} CAccountHardware_GetPersonalizationFile_Request
         */
        CAccountHardware_GetPersonalizationFile_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_GetPersonalizationFile_Request)
                return object;
            var message = new $root.CAccountHardware_GetPersonalizationFile_Request();
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.accountid != null)
                message.accountid = object.accountid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_GetPersonalizationFile_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @static
         * @param {CAccountHardware_GetPersonalizationFile_Request} message CAccountHardware_GetPersonalizationFile_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_GetPersonalizationFile_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serial_number = "";
                object.accountid = 0;
            }
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                object.accountid = message.accountid;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_GetPersonalizationFile_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_GetPersonalizationFile_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_GetPersonalizationFile_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_GetPersonalizationFile_Request;
    })();
    
    $root.CAccountHardware_GetPersonalizationFile_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_GetPersonalizationFile_Response.
         * @exports ICAccountHardware_GetPersonalizationFile_Response
         * @interface ICAccountHardware_GetPersonalizationFile_Response
         * @property {number|Long|null} [publishedfileid] CAccountHardware_GetPersonalizationFile_Response publishedfileid
         */
    
        /**
         * Constructs a new CAccountHardware_GetPersonalizationFile_Response.
         * @exports CAccountHardware_GetPersonalizationFile_Response
         * @classdesc Represents a CAccountHardware_GetPersonalizationFile_Response.
         * @implements ICAccountHardware_GetPersonalizationFile_Response
         * @constructor
         * @param {ICAccountHardware_GetPersonalizationFile_Response=} [properties] Properties to set
         */
        function CAccountHardware_GetPersonalizationFile_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_GetPersonalizationFile_Response publishedfileid.
         * @member {number|Long} publishedfileid
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @instance
         */
        CAccountHardware_GetPersonalizationFile_Response.prototype.publishedfileid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CAccountHardware_GetPersonalizationFile_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @static
         * @param {ICAccountHardware_GetPersonalizationFile_Response=} [properties] Properties to set
         * @returns {CAccountHardware_GetPersonalizationFile_Response} CAccountHardware_GetPersonalizationFile_Response instance
         */
        CAccountHardware_GetPersonalizationFile_Response.create = function create(properties) {
            return new CAccountHardware_GetPersonalizationFile_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_GetPersonalizationFile_Response message. Does not implicitly {@link CAccountHardware_GetPersonalizationFile_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @static
         * @param {ICAccountHardware_GetPersonalizationFile_Response} message CAccountHardware_GetPersonalizationFile_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_GetPersonalizationFile_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.publishedfileid);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_GetPersonalizationFile_Response message, length delimited. Does not implicitly {@link CAccountHardware_GetPersonalizationFile_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @static
         * @param {ICAccountHardware_GetPersonalizationFile_Response} message CAccountHardware_GetPersonalizationFile_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_GetPersonalizationFile_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_GetPersonalizationFile_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_GetPersonalizationFile_Response} CAccountHardware_GetPersonalizationFile_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_GetPersonalizationFile_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_GetPersonalizationFile_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publishedfileid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_GetPersonalizationFile_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_GetPersonalizationFile_Response} CAccountHardware_GetPersonalizationFile_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_GetPersonalizationFile_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_GetPersonalizationFile_Response message.
         * @function verify
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_GetPersonalizationFile_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (!$util.isInteger(message.publishedfileid) && !(message.publishedfileid && $util.isInteger(message.publishedfileid.low) && $util.isInteger(message.publishedfileid.high)))
                    return "publishedfileid: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CAccountHardware_GetPersonalizationFile_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_GetPersonalizationFile_Response} CAccountHardware_GetPersonalizationFile_Response
         */
        CAccountHardware_GetPersonalizationFile_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_GetPersonalizationFile_Response)
                return object;
            var message = new $root.CAccountHardware_GetPersonalizationFile_Response();
            if (object.publishedfileid != null)
                if ($util.Long)
                    (message.publishedfileid = $util.Long.fromValue(object.publishedfileid)).unsigned = true;
                else if (typeof object.publishedfileid === "string")
                    message.publishedfileid = parseInt(object.publishedfileid, 10);
                else if (typeof object.publishedfileid === "number")
                    message.publishedfileid = object.publishedfileid;
                else if (typeof object.publishedfileid === "object")
                    message.publishedfileid = new $util.LongBits(object.publishedfileid.low >>> 0, object.publishedfileid.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_GetPersonalizationFile_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @static
         * @param {CAccountHardware_GetPersonalizationFile_Response} message CAccountHardware_GetPersonalizationFile_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_GetPersonalizationFile_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.publishedfileid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.publishedfileid = options.longs === String ? "0" : 0;
            if (message.publishedfileid != null && message.hasOwnProperty("publishedfileid"))
                if (typeof message.publishedfileid === "number")
                    object.publishedfileid = options.longs === String ? String(message.publishedfileid) : message.publishedfileid;
                else
                    object.publishedfileid = options.longs === String ? $util.Long.prototype.toString.call(message.publishedfileid) : options.longs === Number ? new $util.LongBits(message.publishedfileid.low >>> 0, message.publishedfileid.high >>> 0).toNumber(true) : message.publishedfileid;
            return object;
        };
    
        /**
         * Converts this CAccountHardware_GetPersonalizationFile_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_GetPersonalizationFile_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_GetPersonalizationFile_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountHardware_GetPersonalizationFile_Response;
    })();
    
    $root.CAccountHardware_VRCompatibilityCheck_Request = (function() {
    
        /**
         * Properties of a CAccountHardware_VRCompatibilityCheck_Request.
         * @exports ICAccountHardware_VRCompatibilityCheck_Request
         * @interface ICAccountHardware_VRCompatibilityCheck_Request
         * @property {string|null} [product_name] CAccountHardware_VRCompatibilityCheck_Request product_name
         * @property {Array.<CAccountHardware_VRCompatibilityCheck_Request.IPair>|null} [values] CAccountHardware_VRCompatibilityCheck_Request values
         */
    
        /**
         * Constructs a new CAccountHardware_VRCompatibilityCheck_Request.
         * @exports CAccountHardware_VRCompatibilityCheck_Request
         * @classdesc Represents a CAccountHardware_VRCompatibilityCheck_Request.
         * @implements ICAccountHardware_VRCompatibilityCheck_Request
         * @constructor
         * @param {ICAccountHardware_VRCompatibilityCheck_Request=} [properties] Properties to set
         */
        function CAccountHardware_VRCompatibilityCheck_Request(properties) {
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_VRCompatibilityCheck_Request product_name.
         * @member {string} product_name
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @instance
         */
        CAccountHardware_VRCompatibilityCheck_Request.prototype.product_name = "";
    
        /**
         * CAccountHardware_VRCompatibilityCheck_Request values.
         * @member {Array.<CAccountHardware_VRCompatibilityCheck_Request.IPair>} values
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @instance
         */
        CAccountHardware_VRCompatibilityCheck_Request.prototype.values = $util.emptyArray;
    
        /**
         * Creates a new CAccountHardware_VRCompatibilityCheck_Request instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @static
         * @param {ICAccountHardware_VRCompatibilityCheck_Request=} [properties] Properties to set
         * @returns {CAccountHardware_VRCompatibilityCheck_Request} CAccountHardware_VRCompatibilityCheck_Request instance
         */
        CAccountHardware_VRCompatibilityCheck_Request.create = function create(properties) {
            return new CAccountHardware_VRCompatibilityCheck_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_VRCompatibilityCheck_Request message. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @static
         * @param {ICAccountHardware_VRCompatibilityCheck_Request} message CAccountHardware_VRCompatibilityCheck_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_VRCompatibilityCheck_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.product_name != null && message.hasOwnProperty("product_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.product_name);
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    $root.CAccountHardware_VRCompatibilityCheck_Request.Pair.encode(message.values[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_VRCompatibilityCheck_Request message, length delimited. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @static
         * @param {ICAccountHardware_VRCompatibilityCheck_Request} message CAccountHardware_VRCompatibilityCheck_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_VRCompatibilityCheck_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_VRCompatibilityCheck_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_VRCompatibilityCheck_Request} CAccountHardware_VRCompatibilityCheck_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_VRCompatibilityCheck_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_VRCompatibilityCheck_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.product_name = reader.string();
                    break;
                case 2:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    message.values.push($root.CAccountHardware_VRCompatibilityCheck_Request.Pair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_VRCompatibilityCheck_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_VRCompatibilityCheck_Request} CAccountHardware_VRCompatibilityCheck_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_VRCompatibilityCheck_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_VRCompatibilityCheck_Request message.
         * @function verify
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_VRCompatibilityCheck_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.product_name != null && message.hasOwnProperty("product_name"))
                if (!$util.isString(message.product_name))
                    return "product_name: string expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i) {
                    var error = $root.CAccountHardware_VRCompatibilityCheck_Request.Pair.verify(message.values[i]);
                    if (error)
                        return "values." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CAccountHardware_VRCompatibilityCheck_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_VRCompatibilityCheck_Request} CAccountHardware_VRCompatibilityCheck_Request
         */
        CAccountHardware_VRCompatibilityCheck_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_VRCompatibilityCheck_Request)
                return object;
            var message = new $root.CAccountHardware_VRCompatibilityCheck_Request();
            if (object.product_name != null)
                message.product_name = String(object.product_name);
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".CAccountHardware_VRCompatibilityCheck_Request.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i) {
                    if (typeof object.values[i] !== "object")
                        throw TypeError(".CAccountHardware_VRCompatibilityCheck_Request.values: object expected");
                    message.values[i] = $root.CAccountHardware_VRCompatibilityCheck_Request.Pair.fromObject(object.values[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_VRCompatibilityCheck_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @static
         * @param {CAccountHardware_VRCompatibilityCheck_Request} message CAccountHardware_VRCompatibilityCheck_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_VRCompatibilityCheck_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (options.defaults)
                object.product_name = "";
            if (message.product_name != null && message.hasOwnProperty("product_name"))
                object.product_name = message.product_name;
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = $root.CAccountHardware_VRCompatibilityCheck_Request.Pair.toObject(message.values[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CAccountHardware_VRCompatibilityCheck_Request to JSON.
         * @function toJSON
         * @memberof CAccountHardware_VRCompatibilityCheck_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_VRCompatibilityCheck_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CAccountHardware_VRCompatibilityCheck_Request.Pair = (function() {
    
            /**
             * Properties of a Pair.
             * @memberof CAccountHardware_VRCompatibilityCheck_Request
             * @interface IPair
             * @property {string|null} [key] Pair key
             * @property {string|null} [value] Pair value
             */
    
            /**
             * Constructs a new Pair.
             * @memberof CAccountHardware_VRCompatibilityCheck_Request
             * @classdesc Represents a Pair.
             * @implements IPair
             * @constructor
             * @param {CAccountHardware_VRCompatibilityCheck_Request.IPair=} [properties] Properties to set
             */
            function Pair(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Pair key.
             * @member {string} key
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @instance
             */
            Pair.prototype.key = "";
    
            /**
             * Pair value.
             * @member {string} value
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @instance
             */
            Pair.prototype.value = "";
    
            /**
             * Creates a new Pair instance using the specified properties.
             * @function create
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Request.IPair=} [properties] Properties to set
             * @returns {CAccountHardware_VRCompatibilityCheck_Request.Pair} Pair instance
             */
            Pair.create = function create(properties) {
                return new Pair(properties);
            };
    
            /**
             * Encodes the specified Pair message. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Request.Pair.verify|verify} messages.
             * @function encode
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Request.IPair} message Pair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pair.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified Pair message, length delimited. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Request.Pair.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Request.IPair} message Pair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pair.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Pair message from the specified reader or buffer.
             * @function decode
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CAccountHardware_VRCompatibilityCheck_Request.Pair} Pair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pair.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_VRCompatibilityCheck_Request.Pair();
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
             * Decodes a Pair message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CAccountHardware_VRCompatibilityCheck_Request.Pair} Pair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pair.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Pair message.
             * @function verify
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pair.verify = function verify(message) {
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
             * Creates a Pair message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CAccountHardware_VRCompatibilityCheck_Request.Pair} Pair
             */
            Pair.fromObject = function fromObject(object) {
                if (object instanceof $root.CAccountHardware_VRCompatibilityCheck_Request.Pair)
                    return object;
                var message = new $root.CAccountHardware_VRCompatibilityCheck_Request.Pair();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a Pair message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Request.Pair} message Pair
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pair.toObject = function toObject(message, options) {
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
             * Converts this Pair to JSON.
             * @function toJSON
             * @memberof CAccountHardware_VRCompatibilityCheck_Request.Pair
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pair.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Pair;
        })();
    
        return CAccountHardware_VRCompatibilityCheck_Request;
    })();
    
    $root.CAccountHardware_VRCompatibilityCheck_Response = (function() {
    
        /**
         * Properties of a CAccountHardware_VRCompatibilityCheck_Response.
         * @exports ICAccountHardware_VRCompatibilityCheck_Response
         * @interface ICAccountHardware_VRCompatibilityCheck_Response
         * @property {Array.<CAccountHardware_VRCompatibilityCheck_Response.IPair>|null} [values] CAccountHardware_VRCompatibilityCheck_Response values
         * @property {Array.<CAccountHardware_VRCompatibilityCheck_Response.IComponentDisplay>|null} [components] CAccountHardware_VRCompatibilityCheck_Response components
         */
    
        /**
         * Constructs a new CAccountHardware_VRCompatibilityCheck_Response.
         * @exports CAccountHardware_VRCompatibilityCheck_Response
         * @classdesc Represents a CAccountHardware_VRCompatibilityCheck_Response.
         * @implements ICAccountHardware_VRCompatibilityCheck_Response
         * @constructor
         * @param {ICAccountHardware_VRCompatibilityCheck_Response=} [properties] Properties to set
         */
        function CAccountHardware_VRCompatibilityCheck_Response(properties) {
            this.values = [];
            this.components = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountHardware_VRCompatibilityCheck_Response values.
         * @member {Array.<CAccountHardware_VRCompatibilityCheck_Response.IPair>} values
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @instance
         */
        CAccountHardware_VRCompatibilityCheck_Response.prototype.values = $util.emptyArray;
    
        /**
         * CAccountHardware_VRCompatibilityCheck_Response components.
         * @member {Array.<CAccountHardware_VRCompatibilityCheck_Response.IComponentDisplay>} components
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @instance
         */
        CAccountHardware_VRCompatibilityCheck_Response.prototype.components = $util.emptyArray;
    
        /**
         * Creates a new CAccountHardware_VRCompatibilityCheck_Response instance using the specified properties.
         * @function create
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @static
         * @param {ICAccountHardware_VRCompatibilityCheck_Response=} [properties] Properties to set
         * @returns {CAccountHardware_VRCompatibilityCheck_Response} CAccountHardware_VRCompatibilityCheck_Response instance
         */
        CAccountHardware_VRCompatibilityCheck_Response.create = function create(properties) {
            return new CAccountHardware_VRCompatibilityCheck_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountHardware_VRCompatibilityCheck_Response message. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @static
         * @param {ICAccountHardware_VRCompatibilityCheck_Response} message CAccountHardware_VRCompatibilityCheck_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_VRCompatibilityCheck_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    $root.CAccountHardware_VRCompatibilityCheck_Response.Pair.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.components != null && message.components.length)
                for (var i = 0; i < message.components.length; ++i)
                    $root.CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay.encode(message.components[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountHardware_VRCompatibilityCheck_Response message, length delimited. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @static
         * @param {ICAccountHardware_VRCompatibilityCheck_Response} message CAccountHardware_VRCompatibilityCheck_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountHardware_VRCompatibilityCheck_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountHardware_VRCompatibilityCheck_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountHardware_VRCompatibilityCheck_Response} CAccountHardware_VRCompatibilityCheck_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_VRCompatibilityCheck_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_VRCompatibilityCheck_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    message.values.push($root.CAccountHardware_VRCompatibilityCheck_Response.Pair.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.components && message.components.length))
                        message.components = [];
                    message.components.push($root.CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountHardware_VRCompatibilityCheck_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountHardware_VRCompatibilityCheck_Response} CAccountHardware_VRCompatibilityCheck_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountHardware_VRCompatibilityCheck_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountHardware_VRCompatibilityCheck_Response message.
         * @function verify
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountHardware_VRCompatibilityCheck_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i) {
                    var error = $root.CAccountHardware_VRCompatibilityCheck_Response.Pair.verify(message.values[i]);
                    if (error)
                        return "values." + error;
                }
            }
            if (message.components != null && message.hasOwnProperty("components")) {
                if (!Array.isArray(message.components))
                    return "components: array expected";
                for (var i = 0; i < message.components.length; ++i) {
                    var error = $root.CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay.verify(message.components[i]);
                    if (error)
                        return "components." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CAccountHardware_VRCompatibilityCheck_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountHardware_VRCompatibilityCheck_Response} CAccountHardware_VRCompatibilityCheck_Response
         */
        CAccountHardware_VRCompatibilityCheck_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountHardware_VRCompatibilityCheck_Response)
                return object;
            var message = new $root.CAccountHardware_VRCompatibilityCheck_Response();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".CAccountHardware_VRCompatibilityCheck_Response.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i) {
                    if (typeof object.values[i] !== "object")
                        throw TypeError(".CAccountHardware_VRCompatibilityCheck_Response.values: object expected");
                    message.values[i] = $root.CAccountHardware_VRCompatibilityCheck_Response.Pair.fromObject(object.values[i]);
                }
            }
            if (object.components) {
                if (!Array.isArray(object.components))
                    throw TypeError(".CAccountHardware_VRCompatibilityCheck_Response.components: array expected");
                message.components = [];
                for (var i = 0; i < object.components.length; ++i) {
                    if (typeof object.components[i] !== "object")
                        throw TypeError(".CAccountHardware_VRCompatibilityCheck_Response.components: object expected");
                    message.components[i] = $root.CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay.fromObject(object.components[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountHardware_VRCompatibilityCheck_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @static
         * @param {CAccountHardware_VRCompatibilityCheck_Response} message CAccountHardware_VRCompatibilityCheck_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountHardware_VRCompatibilityCheck_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.values = [];
                object.components = [];
            }
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = $root.CAccountHardware_VRCompatibilityCheck_Response.Pair.toObject(message.values[j], options);
            }
            if (message.components && message.components.length) {
                object.components = [];
                for (var j = 0; j < message.components.length; ++j)
                    object.components[j] = $root.CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay.toObject(message.components[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CAccountHardware_VRCompatibilityCheck_Response to JSON.
         * @function toJSON
         * @memberof CAccountHardware_VRCompatibilityCheck_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountHardware_VRCompatibilityCheck_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CAccountHardware_VRCompatibilityCheck_Response.Pair = (function() {
    
            /**
             * Properties of a Pair.
             * @memberof CAccountHardware_VRCompatibilityCheck_Response
             * @interface IPair
             * @property {string|null} [key] Pair key
             * @property {string|null} [value] Pair value
             */
    
            /**
             * Constructs a new Pair.
             * @memberof CAccountHardware_VRCompatibilityCheck_Response
             * @classdesc Represents a Pair.
             * @implements IPair
             * @constructor
             * @param {CAccountHardware_VRCompatibilityCheck_Response.IPair=} [properties] Properties to set
             */
            function Pair(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Pair key.
             * @member {string} key
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @instance
             */
            Pair.prototype.key = "";
    
            /**
             * Pair value.
             * @member {string} value
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @instance
             */
            Pair.prototype.value = "";
    
            /**
             * Creates a new Pair instance using the specified properties.
             * @function create
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Response.IPair=} [properties] Properties to set
             * @returns {CAccountHardware_VRCompatibilityCheck_Response.Pair} Pair instance
             */
            Pair.create = function create(properties) {
                return new Pair(properties);
            };
    
            /**
             * Encodes the specified Pair message. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Response.Pair.verify|verify} messages.
             * @function encode
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Response.IPair} message Pair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pair.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified Pair message, length delimited. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Response.Pair.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Response.IPair} message Pair message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pair.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Pair message from the specified reader or buffer.
             * @function decode
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CAccountHardware_VRCompatibilityCheck_Response.Pair} Pair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pair.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_VRCompatibilityCheck_Response.Pair();
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
             * Decodes a Pair message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CAccountHardware_VRCompatibilityCheck_Response.Pair} Pair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pair.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Pair message.
             * @function verify
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pair.verify = function verify(message) {
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
             * Creates a Pair message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CAccountHardware_VRCompatibilityCheck_Response.Pair} Pair
             */
            Pair.fromObject = function fromObject(object) {
                if (object instanceof $root.CAccountHardware_VRCompatibilityCheck_Response.Pair)
                    return object;
                var message = new $root.CAccountHardware_VRCompatibilityCheck_Response.Pair();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a Pair message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Response.Pair} message Pair
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pair.toObject = function toObject(message, options) {
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
             * Converts this Pair to JSON.
             * @function toJSON
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.Pair
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pair.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Pair;
        })();
    
        CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay = (function() {
    
            /**
             * Properties of a ComponentDisplay.
             * @memberof CAccountHardware_VRCompatibilityCheck_Response
             * @interface IComponentDisplay
             * @property {string|null} [name] ComponentDisplay name
             * @property {string|null} [image] ComponentDisplay image
             * @property {string|null} [value] ComponentDisplay value
             */
    
            /**
             * Constructs a new ComponentDisplay.
             * @memberof CAccountHardware_VRCompatibilityCheck_Response
             * @classdesc Represents a ComponentDisplay.
             * @implements IComponentDisplay
             * @constructor
             * @param {CAccountHardware_VRCompatibilityCheck_Response.IComponentDisplay=} [properties] Properties to set
             */
            function ComponentDisplay(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ComponentDisplay name.
             * @member {string} name
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @instance
             */
            ComponentDisplay.prototype.name = "";
    
            /**
             * ComponentDisplay image.
             * @member {string} image
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @instance
             */
            ComponentDisplay.prototype.image = "";
    
            /**
             * ComponentDisplay value.
             * @member {string} value
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @instance
             */
            ComponentDisplay.prototype.value = "";
    
            /**
             * Creates a new ComponentDisplay instance using the specified properties.
             * @function create
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Response.IComponentDisplay=} [properties] Properties to set
             * @returns {CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay} ComponentDisplay instance
             */
            ComponentDisplay.create = function create(properties) {
                return new ComponentDisplay(properties);
            };
    
            /**
             * Encodes the specified ComponentDisplay message. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay.verify|verify} messages.
             * @function encode
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Response.IComponentDisplay} message ComponentDisplay message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComponentDisplay.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.image != null && message.hasOwnProperty("image"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.image);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified ComponentDisplay message, length delimited. Does not implicitly {@link CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Response.IComponentDisplay} message ComponentDisplay message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComponentDisplay.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ComponentDisplay message from the specified reader or buffer.
             * @function decode
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay} ComponentDisplay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComponentDisplay.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.image = reader.string();
                        break;
                    case 3:
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
             * Decodes a ComponentDisplay message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay} ComponentDisplay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComponentDisplay.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ComponentDisplay message.
             * @function verify
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ComponentDisplay.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.image != null && message.hasOwnProperty("image"))
                    if (!$util.isString(message.image))
                        return "image: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
    
            /**
             * Creates a ComponentDisplay message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay} ComponentDisplay
             */
            ComponentDisplay.fromObject = function fromObject(object) {
                if (object instanceof $root.CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay)
                    return object;
                var message = new $root.CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.image != null)
                    message.image = String(object.image);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a ComponentDisplay message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @static
             * @param {CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay} message ComponentDisplay
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ComponentDisplay.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.image = "";
                    object.value = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = message.image;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this ComponentDisplay to JSON.
             * @function toJSON
             * @memberof CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ComponentDisplay.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ComponentDisplay;
        })();
    
        return CAccountHardware_VRCompatibilityCheck_Response;
    })();
    
    $root.AccountHardware = (function() {
    
        /**
         * Constructs a new AccountHardware service.
         * @exports AccountHardware
         * @classdesc Represents an AccountHardware
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AccountHardware(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (AccountHardware.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccountHardware;
    
        /**
         * Creates new AccountHardware service using the specified rpc implementation.
         * @function create
         * @memberof AccountHardware
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AccountHardware} RPC service. Useful where requests and/or responses are streamed.
         */
        AccountHardware.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link AccountHardware#registerSteamController}.
         * @memberof AccountHardware
         * @typedef RegisterSteamControllerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_RegisterSteamController_Response} [response] CAccountHardware_RegisterSteamController_Response
         */
    
        /**
         * Calls RegisterSteamController.
         * @function registerSteamController
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_RegisterSteamController_Request} request CAccountHardware_RegisterSteamController_Request message or plain object
         * @param {AccountHardware.RegisterSteamControllerCallback} callback Node-style callback called with the error, if any, and CAccountHardware_RegisterSteamController_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.registerSteamController = function registerSteamController(request, callback) {
            return this.rpcCall(registerSteamController, $root.CAccountHardware_RegisterSteamController_Request, $root.CAccountHardware_RegisterSteamController_Response, request, callback);
        }, "name", { value: "RegisterSteamController" });
    
        /**
         * Calls RegisterSteamController.
         * @function registerSteamController
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_RegisterSteamController_Request} request CAccountHardware_RegisterSteamController_Request message or plain object
         * @returns {Promise<CAccountHardware_RegisterSteamController_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link AccountHardware#completeSteamControllerRegistration}.
         * @memberof AccountHardware
         * @typedef CompleteSteamControllerRegistrationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_CompleteSteamControllerRegistration_Response} [response] CAccountHardware_CompleteSteamControllerRegistration_Response
         */
    
        /**
         * Calls CompleteSteamControllerRegistration.
         * @function completeSteamControllerRegistration
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Request} request CAccountHardware_CompleteSteamControllerRegistration_Request message or plain object
         * @param {AccountHardware.CompleteSteamControllerRegistrationCallback} callback Node-style callback called with the error, if any, and CAccountHardware_CompleteSteamControllerRegistration_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.completeSteamControllerRegistration = function completeSteamControllerRegistration(request, callback) {
            return this.rpcCall(completeSteamControllerRegistration, $root.CAccountHardware_CompleteSteamControllerRegistration_Request, $root.CAccountHardware_CompleteSteamControllerRegistration_Response, request, callback);
        }, "name", { value: "CompleteSteamControllerRegistration" });
    
        /**
         * Calls CompleteSteamControllerRegistration.
         * @function completeSteamControllerRegistration
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_CompleteSteamControllerRegistration_Request} request CAccountHardware_CompleteSteamControllerRegistration_Request message or plain object
         * @returns {Promise<CAccountHardware_CompleteSteamControllerRegistration_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link AccountHardware#queryAccountsRegisteredToController}.
         * @memberof AccountHardware
         * @typedef QueryAccountsRegisteredToControllerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_QueryAccountsRegisteredToSerial_Response} [response] CAccountHardware_QueryAccountsRegisteredToSerial_Response
         */
    
        /**
         * Calls QueryAccountsRegisteredToController.
         * @function queryAccountsRegisteredToController
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Request} request CAccountHardware_QueryAccountsRegisteredToSerial_Request message or plain object
         * @param {AccountHardware.QueryAccountsRegisteredToControllerCallback} callback Node-style callback called with the error, if any, and CAccountHardware_QueryAccountsRegisteredToSerial_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.queryAccountsRegisteredToController = function queryAccountsRegisteredToController(request, callback) {
            return this.rpcCall(queryAccountsRegisteredToController, $root.CAccountHardware_QueryAccountsRegisteredToSerial_Request, $root.CAccountHardware_QueryAccountsRegisteredToSerial_Response, request, callback);
        }, "name", { value: "QueryAccountsRegisteredToController" });
    
        /**
         * Calls QueryAccountsRegisteredToController.
         * @function queryAccountsRegisteredToController
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_QueryAccountsRegisteredToSerial_Request} request CAccountHardware_QueryAccountsRegisteredToSerial_Request message or plain object
         * @returns {Promise<CAccountHardware_QueryAccountsRegisteredToSerial_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link AccountHardware#setDesiredControllerConfigForApp}.
         * @memberof AccountHardware
         * @typedef SetDesiredControllerConfigForAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_SteamControllerSetConfig_Response} [response] CAccountHardware_SteamControllerSetConfig_Response
         */
    
        /**
         * Calls SetDesiredControllerConfigForApp.
         * @function setDesiredControllerConfigForApp
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_SteamControllerSetConfig_Request} request CAccountHardware_SteamControllerSetConfig_Request message or plain object
         * @param {AccountHardware.SetDesiredControllerConfigForAppCallback} callback Node-style callback called with the error, if any, and CAccountHardware_SteamControllerSetConfig_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.setDesiredControllerConfigForApp = function setDesiredControllerConfigForApp(request, callback) {
            return this.rpcCall(setDesiredControllerConfigForApp, $root.CAccountHardware_SteamControllerSetConfig_Request, $root.CAccountHardware_SteamControllerSetConfig_Response, request, callback);
        }, "name", { value: "SetDesiredControllerConfigForApp" });
    
        /**
         * Calls SetDesiredControllerConfigForApp.
         * @function setDesiredControllerConfigForApp
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_SteamControllerSetConfig_Request} request CAccountHardware_SteamControllerSetConfig_Request message or plain object
         * @returns {Promise<CAccountHardware_SteamControllerSetConfig_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link AccountHardware#getDesiredControllerConfigForApp}.
         * @memberof AccountHardware
         * @typedef GetDesiredControllerConfigForAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_SteamControllerGetConfig_Response} [response] CAccountHardware_SteamControllerGetConfig_Response
         */
    
        /**
         * Calls GetDesiredControllerConfigForApp.
         * @function getDesiredControllerConfigForApp
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_SteamControllerGetConfig_Request} request CAccountHardware_SteamControllerGetConfig_Request message or plain object
         * @param {AccountHardware.GetDesiredControllerConfigForAppCallback} callback Node-style callback called with the error, if any, and CAccountHardware_SteamControllerGetConfig_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.getDesiredControllerConfigForApp = function getDesiredControllerConfigForApp(request, callback) {
            return this.rpcCall(getDesiredControllerConfigForApp, $root.CAccountHardware_SteamControllerGetConfig_Request, $root.CAccountHardware_SteamControllerGetConfig_Response, request, callback);
        }, "name", { value: "GetDesiredControllerConfigForApp" });
    
        /**
         * Calls GetDesiredControllerConfigForApp.
         * @function getDesiredControllerConfigForApp
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_SteamControllerGetConfig_Request} request CAccountHardware_SteamControllerGetConfig_Request message or plain object
         * @returns {Promise<CAccountHardware_SteamControllerGetConfig_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link AccountHardware#deRegisterSteamController}.
         * @memberof AccountHardware
         * @typedef DeRegisterSteamControllerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_DeRegisterSteamController_Response} [response] CAccountHardware_DeRegisterSteamController_Response
         */
    
        /**
         * Calls DeRegisterSteamController.
         * @function deRegisterSteamController
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_DeRegisterSteamController_Request} request CAccountHardware_DeRegisterSteamController_Request message or plain object
         * @param {AccountHardware.DeRegisterSteamControllerCallback} callback Node-style callback called with the error, if any, and CAccountHardware_DeRegisterSteamController_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.deRegisterSteamController = function deRegisterSteamController(request, callback) {
            return this.rpcCall(deRegisterSteamController, $root.CAccountHardware_DeRegisterSteamController_Request, $root.CAccountHardware_DeRegisterSteamController_Response, request, callback);
        }, "name", { value: "DeRegisterSteamController" });
    
        /**
         * Calls DeRegisterSteamController.
         * @function deRegisterSteamController
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_DeRegisterSteamController_Request} request CAccountHardware_DeRegisterSteamController_Request message or plain object
         * @returns {Promise<CAccountHardware_DeRegisterSteamController_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link AccountHardware#setControllerPersonalizationFile}.
         * @memberof AccountHardware
         * @typedef SetControllerPersonalizationFileCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_SetPersonalizationFile_Response} [response] CAccountHardware_SetPersonalizationFile_Response
         */
    
        /**
         * Calls SetControllerPersonalizationFile.
         * @function setControllerPersonalizationFile
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_SetPersonalizationFile_Request} request CAccountHardware_SetPersonalizationFile_Request message or plain object
         * @param {AccountHardware.SetControllerPersonalizationFileCallback} callback Node-style callback called with the error, if any, and CAccountHardware_SetPersonalizationFile_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.setControllerPersonalizationFile = function setControllerPersonalizationFile(request, callback) {
            return this.rpcCall(setControllerPersonalizationFile, $root.CAccountHardware_SetPersonalizationFile_Request, $root.CAccountHardware_SetPersonalizationFile_Response, request, callback);
        }, "name", { value: "SetControllerPersonalizationFile" });
    
        /**
         * Calls SetControllerPersonalizationFile.
         * @function setControllerPersonalizationFile
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_SetPersonalizationFile_Request} request CAccountHardware_SetPersonalizationFile_Request message or plain object
         * @returns {Promise<CAccountHardware_SetPersonalizationFile_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link AccountHardware#getControllerPersonalizationFile}.
         * @memberof AccountHardware
         * @typedef GetControllerPersonalizationFileCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_GetPersonalizationFile_Response} [response] CAccountHardware_GetPersonalizationFile_Response
         */
    
        /**
         * Calls GetControllerPersonalizationFile.
         * @function getControllerPersonalizationFile
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_GetPersonalizationFile_Request} request CAccountHardware_GetPersonalizationFile_Request message or plain object
         * @param {AccountHardware.GetControllerPersonalizationFileCallback} callback Node-style callback called with the error, if any, and CAccountHardware_GetPersonalizationFile_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.getControllerPersonalizationFile = function getControllerPersonalizationFile(request, callback) {
            return this.rpcCall(getControllerPersonalizationFile, $root.CAccountHardware_GetPersonalizationFile_Request, $root.CAccountHardware_GetPersonalizationFile_Response, request, callback);
        }, "name", { value: "GetControllerPersonalizationFile" });
    
        /**
         * Calls GetControllerPersonalizationFile.
         * @function getControllerPersonalizationFile
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_GetPersonalizationFile_Request} request CAccountHardware_GetPersonalizationFile_Request message or plain object
         * @returns {Promise<CAccountHardware_GetPersonalizationFile_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link AccountHardware#vRCompatibilityCheck}.
         * @memberof AccountHardware
         * @typedef VRCompatibilityCheckCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountHardware_VRCompatibilityCheck_Response} [response] CAccountHardware_VRCompatibilityCheck_Response
         */
    
        /**
         * Calls VRCompatibilityCheck.
         * @function vRCompatibilityCheck
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_VRCompatibilityCheck_Request} request CAccountHardware_VRCompatibilityCheck_Request message or plain object
         * @param {AccountHardware.VRCompatibilityCheckCallback} callback Node-style callback called with the error, if any, and CAccountHardware_VRCompatibilityCheck_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountHardware.prototype.vRCompatibilityCheck = function vRCompatibilityCheck(request, callback) {
            return this.rpcCall(vRCompatibilityCheck, $root.CAccountHardware_VRCompatibilityCheck_Request, $root.CAccountHardware_VRCompatibilityCheck_Response, request, callback);
        }, "name", { value: "VRCompatibilityCheck" });
    
        /**
         * Calls VRCompatibilityCheck.
         * @function vRCompatibilityCheck
         * @memberof AccountHardware
         * @instance
         * @param {ICAccountHardware_VRCompatibilityCheck_Request} request CAccountHardware_VRCompatibilityCheck_Request message or plain object
         * @returns {Promise<CAccountHardware_VRCompatibilityCheck_Response>} Promise
         * @variation 2
         */
    
        return AccountHardware;
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
