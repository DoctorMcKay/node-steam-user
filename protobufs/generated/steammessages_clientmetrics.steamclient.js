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
     * ESteamPipeWorkType enum.
     * @exports ESteamPipeWorkType
     * @enum {string}
     * @property {number} k_ESteamPipeClientWorkType_Invalid=0 k_ESteamPipeClientWorkType_Invalid value
     * @property {number} k_ESteamPipeClientWorkType_StageFromChunkStores=1 k_ESteamPipeClientWorkType_StageFromChunkStores value
     */
    $root.ESteamPipeWorkType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ESteamPipeClientWorkType_Invalid"] = 0;
        values[valuesById[1] = "k_ESteamPipeClientWorkType_StageFromChunkStores"] = 1;
        return values;
    })();
    
    /**
     * ESteamPipeOperationType enum.
     * @exports ESteamPipeOperationType
     * @enum {string}
     * @property {number} k_ESteamPipeOperationType_Invalid=0 k_ESteamPipeOperationType_Invalid value
     * @property {number} k_ESteamPipeOperationType_DecryptCPU=1 k_ESteamPipeOperationType_DecryptCPU value
     * @property {number} k_ESteamPipeOperationType_DiskRead=2 k_ESteamPipeOperationType_DiskRead value
     * @property {number} k_ESteamPipeOperationType_DiskWrite=3 k_ESteamPipeOperationType_DiskWrite value
     */
    $root.ESteamPipeOperationType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_ESteamPipeOperationType_Invalid"] = 0;
        values[valuesById[1] = "k_ESteamPipeOperationType_DecryptCPU"] = 1;
        values[valuesById[2] = "k_ESteamPipeOperationType_DiskRead"] = 2;
        values[valuesById[3] = "k_ESteamPipeOperationType_DiskWrite"] = 3;
        return values;
    })();
    
    $root.CClientMetrics_AppInterfaceCreation = (function() {
    
        /**
         * Properties of a CClientMetrics_AppInterfaceCreation.
         * @exports ICClientMetrics_AppInterfaceCreation
         * @interface ICClientMetrics_AppInterfaceCreation
         * @property {string|null} [raw_version] CClientMetrics_AppInterfaceCreation raw_version
         * @property {string|null} [requested_interface_type] CClientMetrics_AppInterfaceCreation requested_interface_type
         */
    
        /**
         * Constructs a new CClientMetrics_AppInterfaceCreation.
         * @exports CClientMetrics_AppInterfaceCreation
         * @classdesc Represents a CClientMetrics_AppInterfaceCreation.
         * @implements ICClientMetrics_AppInterfaceCreation
         * @constructor
         * @param {ICClientMetrics_AppInterfaceCreation=} [properties] Properties to set
         */
        function CClientMetrics_AppInterfaceCreation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_AppInterfaceCreation raw_version.
         * @member {string} raw_version
         * @memberof CClientMetrics_AppInterfaceCreation
         * @instance
         */
        CClientMetrics_AppInterfaceCreation.prototype.raw_version = "";
    
        /**
         * CClientMetrics_AppInterfaceCreation requested_interface_type.
         * @member {string} requested_interface_type
         * @memberof CClientMetrics_AppInterfaceCreation
         * @instance
         */
        CClientMetrics_AppInterfaceCreation.prototype.requested_interface_type = "";
    
        /**
         * Creates a new CClientMetrics_AppInterfaceCreation instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_AppInterfaceCreation
         * @static
         * @param {ICClientMetrics_AppInterfaceCreation=} [properties] Properties to set
         * @returns {CClientMetrics_AppInterfaceCreation} CClientMetrics_AppInterfaceCreation instance
         */
        CClientMetrics_AppInterfaceCreation.create = function create(properties) {
            return new CClientMetrics_AppInterfaceCreation(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_AppInterfaceCreation message. Does not implicitly {@link CClientMetrics_AppInterfaceCreation.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_AppInterfaceCreation
         * @static
         * @param {ICClientMetrics_AppInterfaceCreation} message CClientMetrics_AppInterfaceCreation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_AppInterfaceCreation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.raw_version != null && message.hasOwnProperty("raw_version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.raw_version);
            if (message.requested_interface_type != null && message.hasOwnProperty("requested_interface_type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.requested_interface_type);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_AppInterfaceCreation message, length delimited. Does not implicitly {@link CClientMetrics_AppInterfaceCreation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_AppInterfaceCreation
         * @static
         * @param {ICClientMetrics_AppInterfaceCreation} message CClientMetrics_AppInterfaceCreation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_AppInterfaceCreation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_AppInterfaceCreation message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_AppInterfaceCreation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_AppInterfaceCreation} CClientMetrics_AppInterfaceCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_AppInterfaceCreation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_AppInterfaceCreation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.raw_version = reader.string();
                    break;
                case 2:
                    message.requested_interface_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_AppInterfaceCreation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_AppInterfaceCreation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_AppInterfaceCreation} CClientMetrics_AppInterfaceCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_AppInterfaceCreation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_AppInterfaceCreation message.
         * @function verify
         * @memberof CClientMetrics_AppInterfaceCreation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_AppInterfaceCreation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.raw_version != null && message.hasOwnProperty("raw_version"))
                if (!$util.isString(message.raw_version))
                    return "raw_version: string expected";
            if (message.requested_interface_type != null && message.hasOwnProperty("requested_interface_type"))
                if (!$util.isString(message.requested_interface_type))
                    return "requested_interface_type: string expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_AppInterfaceCreation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_AppInterfaceCreation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_AppInterfaceCreation} CClientMetrics_AppInterfaceCreation
         */
        CClientMetrics_AppInterfaceCreation.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_AppInterfaceCreation)
                return object;
            var message = new $root.CClientMetrics_AppInterfaceCreation();
            if (object.raw_version != null)
                message.raw_version = String(object.raw_version);
            if (object.requested_interface_type != null)
                message.requested_interface_type = String(object.requested_interface_type);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_AppInterfaceCreation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_AppInterfaceCreation
         * @static
         * @param {CClientMetrics_AppInterfaceCreation} message CClientMetrics_AppInterfaceCreation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_AppInterfaceCreation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.raw_version = "";
                object.requested_interface_type = "";
            }
            if (message.raw_version != null && message.hasOwnProperty("raw_version"))
                object.raw_version = message.raw_version;
            if (message.requested_interface_type != null && message.hasOwnProperty("requested_interface_type"))
                object.requested_interface_type = message.requested_interface_type;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_AppInterfaceCreation to JSON.
         * @function toJSON
         * @memberof CClientMetrics_AppInterfaceCreation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_AppInterfaceCreation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_AppInterfaceCreation;
    })();
    
    $root.CClientMetrics_AppInterfaceMethodCounts = (function() {
    
        /**
         * Properties of a CClientMetrics_AppInterfaceMethodCounts.
         * @exports ICClientMetrics_AppInterfaceMethodCounts
         * @interface ICClientMetrics_AppInterfaceMethodCounts
         * @property {string|null} [interface_name] CClientMetrics_AppInterfaceMethodCounts interface_name
         * @property {string|null} [method_name] CClientMetrics_AppInterfaceMethodCounts method_name
         * @property {number|null} [call_count] CClientMetrics_AppInterfaceMethodCounts call_count
         */
    
        /**
         * Constructs a new CClientMetrics_AppInterfaceMethodCounts.
         * @exports CClientMetrics_AppInterfaceMethodCounts
         * @classdesc Represents a CClientMetrics_AppInterfaceMethodCounts.
         * @implements ICClientMetrics_AppInterfaceMethodCounts
         * @constructor
         * @param {ICClientMetrics_AppInterfaceMethodCounts=} [properties] Properties to set
         */
        function CClientMetrics_AppInterfaceMethodCounts(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_AppInterfaceMethodCounts interface_name.
         * @member {string} interface_name
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @instance
         */
        CClientMetrics_AppInterfaceMethodCounts.prototype.interface_name = "";
    
        /**
         * CClientMetrics_AppInterfaceMethodCounts method_name.
         * @member {string} method_name
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @instance
         */
        CClientMetrics_AppInterfaceMethodCounts.prototype.method_name = "";
    
        /**
         * CClientMetrics_AppInterfaceMethodCounts call_count.
         * @member {number} call_count
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @instance
         */
        CClientMetrics_AppInterfaceMethodCounts.prototype.call_count = 0;
    
        /**
         * Creates a new CClientMetrics_AppInterfaceMethodCounts instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @static
         * @param {ICClientMetrics_AppInterfaceMethodCounts=} [properties] Properties to set
         * @returns {CClientMetrics_AppInterfaceMethodCounts} CClientMetrics_AppInterfaceMethodCounts instance
         */
        CClientMetrics_AppInterfaceMethodCounts.create = function create(properties) {
            return new CClientMetrics_AppInterfaceMethodCounts(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_AppInterfaceMethodCounts message. Does not implicitly {@link CClientMetrics_AppInterfaceMethodCounts.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @static
         * @param {ICClientMetrics_AppInterfaceMethodCounts} message CClientMetrics_AppInterfaceMethodCounts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_AppInterfaceMethodCounts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.interface_name != null && message.hasOwnProperty("interface_name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.interface_name);
            if (message.method_name != null && message.hasOwnProperty("method_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.method_name);
            if (message.call_count != null && message.hasOwnProperty("call_count"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.call_count);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_AppInterfaceMethodCounts message, length delimited. Does not implicitly {@link CClientMetrics_AppInterfaceMethodCounts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @static
         * @param {ICClientMetrics_AppInterfaceMethodCounts} message CClientMetrics_AppInterfaceMethodCounts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_AppInterfaceMethodCounts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_AppInterfaceMethodCounts message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_AppInterfaceMethodCounts} CClientMetrics_AppInterfaceMethodCounts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_AppInterfaceMethodCounts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_AppInterfaceMethodCounts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.interface_name = reader.string();
                    break;
                case 2:
                    message.method_name = reader.string();
                    break;
                case 3:
                    message.call_count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_AppInterfaceMethodCounts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_AppInterfaceMethodCounts} CClientMetrics_AppInterfaceMethodCounts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_AppInterfaceMethodCounts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_AppInterfaceMethodCounts message.
         * @function verify
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_AppInterfaceMethodCounts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.interface_name != null && message.hasOwnProperty("interface_name"))
                if (!$util.isString(message.interface_name))
                    return "interface_name: string expected";
            if (message.method_name != null && message.hasOwnProperty("method_name"))
                if (!$util.isString(message.method_name))
                    return "method_name: string expected";
            if (message.call_count != null && message.hasOwnProperty("call_count"))
                if (!$util.isInteger(message.call_count))
                    return "call_count: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_AppInterfaceMethodCounts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_AppInterfaceMethodCounts} CClientMetrics_AppInterfaceMethodCounts
         */
        CClientMetrics_AppInterfaceMethodCounts.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_AppInterfaceMethodCounts)
                return object;
            var message = new $root.CClientMetrics_AppInterfaceMethodCounts();
            if (object.interface_name != null)
                message.interface_name = String(object.interface_name);
            if (object.method_name != null)
                message.method_name = String(object.method_name);
            if (object.call_count != null)
                message.call_count = object.call_count >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_AppInterfaceMethodCounts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @static
         * @param {CClientMetrics_AppInterfaceMethodCounts} message CClientMetrics_AppInterfaceMethodCounts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_AppInterfaceMethodCounts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.interface_name = "";
                object.method_name = "";
                object.call_count = 0;
            }
            if (message.interface_name != null && message.hasOwnProperty("interface_name"))
                object.interface_name = message.interface_name;
            if (message.method_name != null && message.hasOwnProperty("method_name"))
                object.method_name = message.method_name;
            if (message.call_count != null && message.hasOwnProperty("call_count"))
                object.call_count = message.call_count;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_AppInterfaceMethodCounts to JSON.
         * @function toJSON
         * @memberof CClientMetrics_AppInterfaceMethodCounts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_AppInterfaceMethodCounts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_AppInterfaceMethodCounts;
    })();
    
    $root.CClientMetrics_AppInterfaceStats_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_AppInterfaceStats_Notification.
         * @exports ICClientMetrics_AppInterfaceStats_Notification
         * @interface ICClientMetrics_AppInterfaceStats_Notification
         * @property {number|Long|null} [game_id] CClientMetrics_AppInterfaceStats_Notification game_id
         * @property {Array.<ICClientMetrics_AppInterfaceCreation>|null} [interfaces_created] CClientMetrics_AppInterfaceStats_Notification interfaces_created
         * @property {Array.<ICClientMetrics_AppInterfaceMethodCounts>|null} [methods_called] CClientMetrics_AppInterfaceStats_Notification methods_called
         * @property {number|null} [session_length_seconds] CClientMetrics_AppInterfaceStats_Notification session_length_seconds
         */
    
        /**
         * Constructs a new CClientMetrics_AppInterfaceStats_Notification.
         * @exports CClientMetrics_AppInterfaceStats_Notification
         * @classdesc Represents a CClientMetrics_AppInterfaceStats_Notification.
         * @implements ICClientMetrics_AppInterfaceStats_Notification
         * @constructor
         * @param {ICClientMetrics_AppInterfaceStats_Notification=} [properties] Properties to set
         */
        function CClientMetrics_AppInterfaceStats_Notification(properties) {
            this.interfaces_created = [];
            this.methods_called = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_AppInterfaceStats_Notification game_id.
         * @member {number|Long} game_id
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @instance
         */
        CClientMetrics_AppInterfaceStats_Notification.prototype.game_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_AppInterfaceStats_Notification interfaces_created.
         * @member {Array.<ICClientMetrics_AppInterfaceCreation>} interfaces_created
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @instance
         */
        CClientMetrics_AppInterfaceStats_Notification.prototype.interfaces_created = $util.emptyArray;
    
        /**
         * CClientMetrics_AppInterfaceStats_Notification methods_called.
         * @member {Array.<ICClientMetrics_AppInterfaceMethodCounts>} methods_called
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @instance
         */
        CClientMetrics_AppInterfaceStats_Notification.prototype.methods_called = $util.emptyArray;
    
        /**
         * CClientMetrics_AppInterfaceStats_Notification session_length_seconds.
         * @member {number} session_length_seconds
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @instance
         */
        CClientMetrics_AppInterfaceStats_Notification.prototype.session_length_seconds = 0;
    
        /**
         * Creates a new CClientMetrics_AppInterfaceStats_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @static
         * @param {ICClientMetrics_AppInterfaceStats_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_AppInterfaceStats_Notification} CClientMetrics_AppInterfaceStats_Notification instance
         */
        CClientMetrics_AppInterfaceStats_Notification.create = function create(properties) {
            return new CClientMetrics_AppInterfaceStats_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_AppInterfaceStats_Notification message. Does not implicitly {@link CClientMetrics_AppInterfaceStats_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @static
         * @param {ICClientMetrics_AppInterfaceStats_Notification} message CClientMetrics_AppInterfaceStats_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_AppInterfaceStats_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.game_id);
            if (message.interfaces_created != null && message.interfaces_created.length)
                for (var i = 0; i < message.interfaces_created.length; ++i)
                    $root.CClientMetrics_AppInterfaceCreation.encode(message.interfaces_created[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.methods_called != null && message.methods_called.length)
                for (var i = 0; i < message.methods_called.length; ++i)
                    $root.CClientMetrics_AppInterfaceMethodCounts.encode(message.methods_called[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.session_length_seconds != null && message.hasOwnProperty("session_length_seconds"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.session_length_seconds);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_AppInterfaceStats_Notification message, length delimited. Does not implicitly {@link CClientMetrics_AppInterfaceStats_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @static
         * @param {ICClientMetrics_AppInterfaceStats_Notification} message CClientMetrics_AppInterfaceStats_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_AppInterfaceStats_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_AppInterfaceStats_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_AppInterfaceStats_Notification} CClientMetrics_AppInterfaceStats_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_AppInterfaceStats_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_AppInterfaceStats_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.game_id = reader.uint64();
                    break;
                case 2:
                    if (!(message.interfaces_created && message.interfaces_created.length))
                        message.interfaces_created = [];
                    message.interfaces_created.push($root.CClientMetrics_AppInterfaceCreation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.methods_called && message.methods_called.length))
                        message.methods_called = [];
                    message.methods_called.push($root.CClientMetrics_AppInterfaceMethodCounts.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.session_length_seconds = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_AppInterfaceStats_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_AppInterfaceStats_Notification} CClientMetrics_AppInterfaceStats_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_AppInterfaceStats_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_AppInterfaceStats_Notification message.
         * @function verify
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_AppInterfaceStats_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                if (!$util.isInteger(message.game_id) && !(message.game_id && $util.isInteger(message.game_id.low) && $util.isInteger(message.game_id.high)))
                    return "game_id: integer|Long expected";
            if (message.interfaces_created != null && message.hasOwnProperty("interfaces_created")) {
                if (!Array.isArray(message.interfaces_created))
                    return "interfaces_created: array expected";
                for (var i = 0; i < message.interfaces_created.length; ++i) {
                    var error = $root.CClientMetrics_AppInterfaceCreation.verify(message.interfaces_created[i]);
                    if (error)
                        return "interfaces_created." + error;
                }
            }
            if (message.methods_called != null && message.hasOwnProperty("methods_called")) {
                if (!Array.isArray(message.methods_called))
                    return "methods_called: array expected";
                for (var i = 0; i < message.methods_called.length; ++i) {
                    var error = $root.CClientMetrics_AppInterfaceMethodCounts.verify(message.methods_called[i]);
                    if (error)
                        return "methods_called." + error;
                }
            }
            if (message.session_length_seconds != null && message.hasOwnProperty("session_length_seconds"))
                if (!$util.isInteger(message.session_length_seconds))
                    return "session_length_seconds: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_AppInterfaceStats_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_AppInterfaceStats_Notification} CClientMetrics_AppInterfaceStats_Notification
         */
        CClientMetrics_AppInterfaceStats_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_AppInterfaceStats_Notification)
                return object;
            var message = new $root.CClientMetrics_AppInterfaceStats_Notification();
            if (object.game_id != null)
                if ($util.Long)
                    (message.game_id = $util.Long.fromValue(object.game_id)).unsigned = true;
                else if (typeof object.game_id === "string")
                    message.game_id = parseInt(object.game_id, 10);
                else if (typeof object.game_id === "number")
                    message.game_id = object.game_id;
                else if (typeof object.game_id === "object")
                    message.game_id = new $util.LongBits(object.game_id.low >>> 0, object.game_id.high >>> 0).toNumber(true);
            if (object.interfaces_created) {
                if (!Array.isArray(object.interfaces_created))
                    throw TypeError(".CClientMetrics_AppInterfaceStats_Notification.interfaces_created: array expected");
                message.interfaces_created = [];
                for (var i = 0; i < object.interfaces_created.length; ++i) {
                    if (typeof object.interfaces_created[i] !== "object")
                        throw TypeError(".CClientMetrics_AppInterfaceStats_Notification.interfaces_created: object expected");
                    message.interfaces_created[i] = $root.CClientMetrics_AppInterfaceCreation.fromObject(object.interfaces_created[i]);
                }
            }
            if (object.methods_called) {
                if (!Array.isArray(object.methods_called))
                    throw TypeError(".CClientMetrics_AppInterfaceStats_Notification.methods_called: array expected");
                message.methods_called = [];
                for (var i = 0; i < object.methods_called.length; ++i) {
                    if (typeof object.methods_called[i] !== "object")
                        throw TypeError(".CClientMetrics_AppInterfaceStats_Notification.methods_called: object expected");
                    message.methods_called[i] = $root.CClientMetrics_AppInterfaceMethodCounts.fromObject(object.methods_called[i]);
                }
            }
            if (object.session_length_seconds != null)
                message.session_length_seconds = object.session_length_seconds >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_AppInterfaceStats_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @static
         * @param {CClientMetrics_AppInterfaceStats_Notification} message CClientMetrics_AppInterfaceStats_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_AppInterfaceStats_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.interfaces_created = [];
                object.methods_called = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.game_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.game_id = options.longs === String ? "0" : 0;
                object.session_length_seconds = 0;
            }
            if (message.game_id != null && message.hasOwnProperty("game_id"))
                if (typeof message.game_id === "number")
                    object.game_id = options.longs === String ? String(message.game_id) : message.game_id;
                else
                    object.game_id = options.longs === String ? $util.Long.prototype.toString.call(message.game_id) : options.longs === Number ? new $util.LongBits(message.game_id.low >>> 0, message.game_id.high >>> 0).toNumber(true) : message.game_id;
            if (message.interfaces_created && message.interfaces_created.length) {
                object.interfaces_created = [];
                for (var j = 0; j < message.interfaces_created.length; ++j)
                    object.interfaces_created[j] = $root.CClientMetrics_AppInterfaceCreation.toObject(message.interfaces_created[j], options);
            }
            if (message.methods_called && message.methods_called.length) {
                object.methods_called = [];
                for (var j = 0; j < message.methods_called.length; ++j)
                    object.methods_called[j] = $root.CClientMetrics_AppInterfaceMethodCounts.toObject(message.methods_called[j], options);
            }
            if (message.session_length_seconds != null && message.hasOwnProperty("session_length_seconds"))
                object.session_length_seconds = message.session_length_seconds;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_AppInterfaceStats_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_AppInterfaceStats_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_AppInterfaceStats_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_AppInterfaceStats_Notification;
    })();
    
    $root.CClientMetrics_IPv6Connectivity_Result = (function() {
    
        /**
         * Properties of a CClientMetrics_IPv6Connectivity_Result.
         * @exports ICClientMetrics_IPv6Connectivity_Result
         * @interface ICClientMetrics_IPv6Connectivity_Result
         * @property {number|null} [protocol_tested] CClientMetrics_IPv6Connectivity_Result protocol_tested
         * @property {number|null} [connectivity_state] CClientMetrics_IPv6Connectivity_Result connectivity_state
         */
    
        /**
         * Constructs a new CClientMetrics_IPv6Connectivity_Result.
         * @exports CClientMetrics_IPv6Connectivity_Result
         * @classdesc Represents a CClientMetrics_IPv6Connectivity_Result.
         * @implements ICClientMetrics_IPv6Connectivity_Result
         * @constructor
         * @param {ICClientMetrics_IPv6Connectivity_Result=} [properties] Properties to set
         */
        function CClientMetrics_IPv6Connectivity_Result(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_IPv6Connectivity_Result protocol_tested.
         * @member {number} protocol_tested
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @instance
         */
        CClientMetrics_IPv6Connectivity_Result.prototype.protocol_tested = 0;
    
        /**
         * CClientMetrics_IPv6Connectivity_Result connectivity_state.
         * @member {number} connectivity_state
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @instance
         */
        CClientMetrics_IPv6Connectivity_Result.prototype.connectivity_state = 0;
    
        /**
         * Creates a new CClientMetrics_IPv6Connectivity_Result instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @static
         * @param {ICClientMetrics_IPv6Connectivity_Result=} [properties] Properties to set
         * @returns {CClientMetrics_IPv6Connectivity_Result} CClientMetrics_IPv6Connectivity_Result instance
         */
        CClientMetrics_IPv6Connectivity_Result.create = function create(properties) {
            return new CClientMetrics_IPv6Connectivity_Result(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_IPv6Connectivity_Result message. Does not implicitly {@link CClientMetrics_IPv6Connectivity_Result.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @static
         * @param {ICClientMetrics_IPv6Connectivity_Result} message CClientMetrics_IPv6Connectivity_Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_IPv6Connectivity_Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.protocol_tested != null && message.hasOwnProperty("protocol_tested"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.protocol_tested);
            if (message.connectivity_state != null && message.hasOwnProperty("connectivity_state"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.connectivity_state);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_IPv6Connectivity_Result message, length delimited. Does not implicitly {@link CClientMetrics_IPv6Connectivity_Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @static
         * @param {ICClientMetrics_IPv6Connectivity_Result} message CClientMetrics_IPv6Connectivity_Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_IPv6Connectivity_Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_IPv6Connectivity_Result message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_IPv6Connectivity_Result} CClientMetrics_IPv6Connectivity_Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_IPv6Connectivity_Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_IPv6Connectivity_Result();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.protocol_tested = reader.uint32();
                    break;
                case 2:
                    message.connectivity_state = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_IPv6Connectivity_Result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_IPv6Connectivity_Result} CClientMetrics_IPv6Connectivity_Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_IPv6Connectivity_Result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_IPv6Connectivity_Result message.
         * @function verify
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_IPv6Connectivity_Result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.protocol_tested != null && message.hasOwnProperty("protocol_tested"))
                if (!$util.isInteger(message.protocol_tested))
                    return "protocol_tested: integer expected";
            if (message.connectivity_state != null && message.hasOwnProperty("connectivity_state"))
                if (!$util.isInteger(message.connectivity_state))
                    return "connectivity_state: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_IPv6Connectivity_Result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_IPv6Connectivity_Result} CClientMetrics_IPv6Connectivity_Result
         */
        CClientMetrics_IPv6Connectivity_Result.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_IPv6Connectivity_Result)
                return object;
            var message = new $root.CClientMetrics_IPv6Connectivity_Result();
            if (object.protocol_tested != null)
                message.protocol_tested = object.protocol_tested >>> 0;
            if (object.connectivity_state != null)
                message.connectivity_state = object.connectivity_state >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_IPv6Connectivity_Result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @static
         * @param {CClientMetrics_IPv6Connectivity_Result} message CClientMetrics_IPv6Connectivity_Result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_IPv6Connectivity_Result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.protocol_tested = 0;
                object.connectivity_state = 0;
            }
            if (message.protocol_tested != null && message.hasOwnProperty("protocol_tested"))
                object.protocol_tested = message.protocol_tested;
            if (message.connectivity_state != null && message.hasOwnProperty("connectivity_state"))
                object.connectivity_state = message.connectivity_state;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_IPv6Connectivity_Result to JSON.
         * @function toJSON
         * @memberof CClientMetrics_IPv6Connectivity_Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_IPv6Connectivity_Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_IPv6Connectivity_Result;
    })();
    
    $root.CClientMetrics_IPv6Connectivity_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_IPv6Connectivity_Notification.
         * @exports ICClientMetrics_IPv6Connectivity_Notification
         * @interface ICClientMetrics_IPv6Connectivity_Notification
         * @property {number|null} [cell_id] CClientMetrics_IPv6Connectivity_Notification cell_id
         * @property {Array.<ICClientMetrics_IPv6Connectivity_Result>|null} [results] CClientMetrics_IPv6Connectivity_Notification results
         * @property {boolean|null} [private_ip_is_rfc6598] CClientMetrics_IPv6Connectivity_Notification private_ip_is_rfc6598
         */
    
        /**
         * Constructs a new CClientMetrics_IPv6Connectivity_Notification.
         * @exports CClientMetrics_IPv6Connectivity_Notification
         * @classdesc Represents a CClientMetrics_IPv6Connectivity_Notification.
         * @implements ICClientMetrics_IPv6Connectivity_Notification
         * @constructor
         * @param {ICClientMetrics_IPv6Connectivity_Notification=} [properties] Properties to set
         */
        function CClientMetrics_IPv6Connectivity_Notification(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_IPv6Connectivity_Notification cell_id.
         * @member {number} cell_id
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @instance
         */
        CClientMetrics_IPv6Connectivity_Notification.prototype.cell_id = 0;
    
        /**
         * CClientMetrics_IPv6Connectivity_Notification results.
         * @member {Array.<ICClientMetrics_IPv6Connectivity_Result>} results
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @instance
         */
        CClientMetrics_IPv6Connectivity_Notification.prototype.results = $util.emptyArray;
    
        /**
         * CClientMetrics_IPv6Connectivity_Notification private_ip_is_rfc6598.
         * @member {boolean} private_ip_is_rfc6598
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @instance
         */
        CClientMetrics_IPv6Connectivity_Notification.prototype.private_ip_is_rfc6598 = false;
    
        /**
         * Creates a new CClientMetrics_IPv6Connectivity_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @static
         * @param {ICClientMetrics_IPv6Connectivity_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_IPv6Connectivity_Notification} CClientMetrics_IPv6Connectivity_Notification instance
         */
        CClientMetrics_IPv6Connectivity_Notification.create = function create(properties) {
            return new CClientMetrics_IPv6Connectivity_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_IPv6Connectivity_Notification message. Does not implicitly {@link CClientMetrics_IPv6Connectivity_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @static
         * @param {ICClientMetrics_IPv6Connectivity_Notification} message CClientMetrics_IPv6Connectivity_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_IPv6Connectivity_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cell_id);
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.CClientMetrics_IPv6Connectivity_Result.encode(message.results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.private_ip_is_rfc6598 != null && message.hasOwnProperty("private_ip_is_rfc6598"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.private_ip_is_rfc6598);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_IPv6Connectivity_Notification message, length delimited. Does not implicitly {@link CClientMetrics_IPv6Connectivity_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @static
         * @param {ICClientMetrics_IPv6Connectivity_Notification} message CClientMetrics_IPv6Connectivity_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_IPv6Connectivity_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_IPv6Connectivity_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_IPv6Connectivity_Notification} CClientMetrics_IPv6Connectivity_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_IPv6Connectivity_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_IPv6Connectivity_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cell_id = reader.uint32();
                    break;
                case 2:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.CClientMetrics_IPv6Connectivity_Result.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.private_ip_is_rfc6598 = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_IPv6Connectivity_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_IPv6Connectivity_Notification} CClientMetrics_IPv6Connectivity_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_IPv6Connectivity_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_IPv6Connectivity_Notification message.
         * @function verify
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_IPv6Connectivity_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                if (!$util.isInteger(message.cell_id))
                    return "cell_id: integer expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.CClientMetrics_IPv6Connectivity_Result.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            if (message.private_ip_is_rfc6598 != null && message.hasOwnProperty("private_ip_is_rfc6598"))
                if (typeof message.private_ip_is_rfc6598 !== "boolean")
                    return "private_ip_is_rfc6598: boolean expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_IPv6Connectivity_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_IPv6Connectivity_Notification} CClientMetrics_IPv6Connectivity_Notification
         */
        CClientMetrics_IPv6Connectivity_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_IPv6Connectivity_Notification)
                return object;
            var message = new $root.CClientMetrics_IPv6Connectivity_Notification();
            if (object.cell_id != null)
                message.cell_id = object.cell_id >>> 0;
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".CClientMetrics_IPv6Connectivity_Notification.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".CClientMetrics_IPv6Connectivity_Notification.results: object expected");
                    message.results[i] = $root.CClientMetrics_IPv6Connectivity_Result.fromObject(object.results[i]);
                }
            }
            if (object.private_ip_is_rfc6598 != null)
                message.private_ip_is_rfc6598 = Boolean(object.private_ip_is_rfc6598);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_IPv6Connectivity_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @static
         * @param {CClientMetrics_IPv6Connectivity_Notification} message CClientMetrics_IPv6Connectivity_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_IPv6Connectivity_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (options.defaults) {
                object.cell_id = 0;
                object.private_ip_is_rfc6598 = false;
            }
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                object.cell_id = message.cell_id;
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.CClientMetrics_IPv6Connectivity_Result.toObject(message.results[j], options);
            }
            if (message.private_ip_is_rfc6598 != null && message.hasOwnProperty("private_ip_is_rfc6598"))
                object.private_ip_is_rfc6598 = message.private_ip_is_rfc6598;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_IPv6Connectivity_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_IPv6Connectivity_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_IPv6Connectivity_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_IPv6Connectivity_Notification;
    })();
    
    $root.CClientMetrics_SteamPipeWorkStats_Operation = (function() {
    
        /**
         * Properties of a CClientMetrics_SteamPipeWorkStats_Operation.
         * @exports ICClientMetrics_SteamPipeWorkStats_Operation
         * @interface ICClientMetrics_SteamPipeWorkStats_Operation
         * @property {ESteamPipeOperationType|null} [type] CClientMetrics_SteamPipeWorkStats_Operation type
         * @property {number|null} [num_ops] CClientMetrics_SteamPipeWorkStats_Operation num_ops
         * @property {number|Long|null} [num_bytes] CClientMetrics_SteamPipeWorkStats_Operation num_bytes
         * @property {number|Long|null} [busy_time_ms] CClientMetrics_SteamPipeWorkStats_Operation busy_time_ms
         * @property {number|Long|null} [idle_time_ms] CClientMetrics_SteamPipeWorkStats_Operation idle_time_ms
         * @property {number|Long|null} [sum_run_time_ms] CClientMetrics_SteamPipeWorkStats_Operation sum_run_time_ms
         * @property {number|Long|null} [sum_wait_time_ms] CClientMetrics_SteamPipeWorkStats_Operation sum_wait_time_ms
         */
    
        /**
         * Constructs a new CClientMetrics_SteamPipeWorkStats_Operation.
         * @exports CClientMetrics_SteamPipeWorkStats_Operation
         * @classdesc Represents a CClientMetrics_SteamPipeWorkStats_Operation.
         * @implements ICClientMetrics_SteamPipeWorkStats_Operation
         * @constructor
         * @param {ICClientMetrics_SteamPipeWorkStats_Operation=} [properties] Properties to set
         */
        function CClientMetrics_SteamPipeWorkStats_Operation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Operation type.
         * @member {ESteamPipeOperationType} type
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Operation.prototype.type = 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Operation num_ops.
         * @member {number} num_ops
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Operation.prototype.num_ops = 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Operation num_bytes.
         * @member {number|Long} num_bytes
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Operation.prototype.num_bytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Operation busy_time_ms.
         * @member {number|Long} busy_time_ms
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Operation.prototype.busy_time_ms = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Operation idle_time_ms.
         * @member {number|Long} idle_time_ms
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Operation.prototype.idle_time_ms = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Operation sum_run_time_ms.
         * @member {number|Long} sum_run_time_ms
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Operation.prototype.sum_run_time_ms = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Operation sum_wait_time_ms.
         * @member {number|Long} sum_wait_time_ms
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Operation.prototype.sum_wait_time_ms = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CClientMetrics_SteamPipeWorkStats_Operation instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @static
         * @param {ICClientMetrics_SteamPipeWorkStats_Operation=} [properties] Properties to set
         * @returns {CClientMetrics_SteamPipeWorkStats_Operation} CClientMetrics_SteamPipeWorkStats_Operation instance
         */
        CClientMetrics_SteamPipeWorkStats_Operation.create = function create(properties) {
            return new CClientMetrics_SteamPipeWorkStats_Operation(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_SteamPipeWorkStats_Operation message. Does not implicitly {@link CClientMetrics_SteamPipeWorkStats_Operation.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @static
         * @param {ICClientMetrics_SteamPipeWorkStats_Operation} message CClientMetrics_SteamPipeWorkStats_Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_SteamPipeWorkStats_Operation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.num_ops != null && message.hasOwnProperty("num_ops"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.num_ops);
            if (message.num_bytes != null && message.hasOwnProperty("num_bytes"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.num_bytes);
            if (message.busy_time_ms != null && message.hasOwnProperty("busy_time_ms"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.busy_time_ms);
            if (message.idle_time_ms != null && message.hasOwnProperty("idle_time_ms"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.idle_time_ms);
            if (message.sum_run_time_ms != null && message.hasOwnProperty("sum_run_time_ms"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.sum_run_time_ms);
            if (message.sum_wait_time_ms != null && message.hasOwnProperty("sum_wait_time_ms"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.sum_wait_time_ms);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_SteamPipeWorkStats_Operation message, length delimited. Does not implicitly {@link CClientMetrics_SteamPipeWorkStats_Operation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @static
         * @param {ICClientMetrics_SteamPipeWorkStats_Operation} message CClientMetrics_SteamPipeWorkStats_Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_SteamPipeWorkStats_Operation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_SteamPipeWorkStats_Operation message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_SteamPipeWorkStats_Operation} CClientMetrics_SteamPipeWorkStats_Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_SteamPipeWorkStats_Operation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_SteamPipeWorkStats_Operation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.num_ops = reader.uint32();
                    break;
                case 3:
                    message.num_bytes = reader.uint64();
                    break;
                case 4:
                    message.busy_time_ms = reader.uint64();
                    break;
                case 5:
                    message.idle_time_ms = reader.uint64();
                    break;
                case 6:
                    message.sum_run_time_ms = reader.uint64();
                    break;
                case 7:
                    message.sum_wait_time_ms = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_SteamPipeWorkStats_Operation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_SteamPipeWorkStats_Operation} CClientMetrics_SteamPipeWorkStats_Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_SteamPipeWorkStats_Operation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_SteamPipeWorkStats_Operation message.
         * @function verify
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_SteamPipeWorkStats_Operation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.num_ops != null && message.hasOwnProperty("num_ops"))
                if (!$util.isInteger(message.num_ops))
                    return "num_ops: integer expected";
            if (message.num_bytes != null && message.hasOwnProperty("num_bytes"))
                if (!$util.isInteger(message.num_bytes) && !(message.num_bytes && $util.isInteger(message.num_bytes.low) && $util.isInteger(message.num_bytes.high)))
                    return "num_bytes: integer|Long expected";
            if (message.busy_time_ms != null && message.hasOwnProperty("busy_time_ms"))
                if (!$util.isInteger(message.busy_time_ms) && !(message.busy_time_ms && $util.isInteger(message.busy_time_ms.low) && $util.isInteger(message.busy_time_ms.high)))
                    return "busy_time_ms: integer|Long expected";
            if (message.idle_time_ms != null && message.hasOwnProperty("idle_time_ms"))
                if (!$util.isInteger(message.idle_time_ms) && !(message.idle_time_ms && $util.isInteger(message.idle_time_ms.low) && $util.isInteger(message.idle_time_ms.high)))
                    return "idle_time_ms: integer|Long expected";
            if (message.sum_run_time_ms != null && message.hasOwnProperty("sum_run_time_ms"))
                if (!$util.isInteger(message.sum_run_time_ms) && !(message.sum_run_time_ms && $util.isInteger(message.sum_run_time_ms.low) && $util.isInteger(message.sum_run_time_ms.high)))
                    return "sum_run_time_ms: integer|Long expected";
            if (message.sum_wait_time_ms != null && message.hasOwnProperty("sum_wait_time_ms"))
                if (!$util.isInteger(message.sum_wait_time_ms) && !(message.sum_wait_time_ms && $util.isInteger(message.sum_wait_time_ms.low) && $util.isInteger(message.sum_wait_time_ms.high)))
                    return "sum_wait_time_ms: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_SteamPipeWorkStats_Operation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_SteamPipeWorkStats_Operation} CClientMetrics_SteamPipeWorkStats_Operation
         */
        CClientMetrics_SteamPipeWorkStats_Operation.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_SteamPipeWorkStats_Operation)
                return object;
            var message = new $root.CClientMetrics_SteamPipeWorkStats_Operation();
            switch (object.type) {
            case "k_ESteamPipeOperationType_Invalid":
            case 0:
                message.type = 0;
                break;
            case "k_ESteamPipeOperationType_DecryptCPU":
            case 1:
                message.type = 1;
                break;
            case "k_ESteamPipeOperationType_DiskRead":
            case 2:
                message.type = 2;
                break;
            case "k_ESteamPipeOperationType_DiskWrite":
            case 3:
                message.type = 3;
                break;
            }
            if (object.num_ops != null)
                message.num_ops = object.num_ops >>> 0;
            if (object.num_bytes != null)
                if ($util.Long)
                    (message.num_bytes = $util.Long.fromValue(object.num_bytes)).unsigned = true;
                else if (typeof object.num_bytes === "string")
                    message.num_bytes = parseInt(object.num_bytes, 10);
                else if (typeof object.num_bytes === "number")
                    message.num_bytes = object.num_bytes;
                else if (typeof object.num_bytes === "object")
                    message.num_bytes = new $util.LongBits(object.num_bytes.low >>> 0, object.num_bytes.high >>> 0).toNumber(true);
            if (object.busy_time_ms != null)
                if ($util.Long)
                    (message.busy_time_ms = $util.Long.fromValue(object.busy_time_ms)).unsigned = true;
                else if (typeof object.busy_time_ms === "string")
                    message.busy_time_ms = parseInt(object.busy_time_ms, 10);
                else if (typeof object.busy_time_ms === "number")
                    message.busy_time_ms = object.busy_time_ms;
                else if (typeof object.busy_time_ms === "object")
                    message.busy_time_ms = new $util.LongBits(object.busy_time_ms.low >>> 0, object.busy_time_ms.high >>> 0).toNumber(true);
            if (object.idle_time_ms != null)
                if ($util.Long)
                    (message.idle_time_ms = $util.Long.fromValue(object.idle_time_ms)).unsigned = true;
                else if (typeof object.idle_time_ms === "string")
                    message.idle_time_ms = parseInt(object.idle_time_ms, 10);
                else if (typeof object.idle_time_ms === "number")
                    message.idle_time_ms = object.idle_time_ms;
                else if (typeof object.idle_time_ms === "object")
                    message.idle_time_ms = new $util.LongBits(object.idle_time_ms.low >>> 0, object.idle_time_ms.high >>> 0).toNumber(true);
            if (object.sum_run_time_ms != null)
                if ($util.Long)
                    (message.sum_run_time_ms = $util.Long.fromValue(object.sum_run_time_ms)).unsigned = true;
                else if (typeof object.sum_run_time_ms === "string")
                    message.sum_run_time_ms = parseInt(object.sum_run_time_ms, 10);
                else if (typeof object.sum_run_time_ms === "number")
                    message.sum_run_time_ms = object.sum_run_time_ms;
                else if (typeof object.sum_run_time_ms === "object")
                    message.sum_run_time_ms = new $util.LongBits(object.sum_run_time_ms.low >>> 0, object.sum_run_time_ms.high >>> 0).toNumber(true);
            if (object.sum_wait_time_ms != null)
                if ($util.Long)
                    (message.sum_wait_time_ms = $util.Long.fromValue(object.sum_wait_time_ms)).unsigned = true;
                else if (typeof object.sum_wait_time_ms === "string")
                    message.sum_wait_time_ms = parseInt(object.sum_wait_time_ms, 10);
                else if (typeof object.sum_wait_time_ms === "number")
                    message.sum_wait_time_ms = object.sum_wait_time_ms;
                else if (typeof object.sum_wait_time_ms === "object")
                    message.sum_wait_time_ms = new $util.LongBits(object.sum_wait_time_ms.low >>> 0, object.sum_wait_time_ms.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_SteamPipeWorkStats_Operation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @static
         * @param {CClientMetrics_SteamPipeWorkStats_Operation} message CClientMetrics_SteamPipeWorkStats_Operation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_SteamPipeWorkStats_Operation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "k_ESteamPipeOperationType_Invalid" : 0;
                object.num_ops = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.num_bytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.num_bytes = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.busy_time_ms = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.busy_time_ms = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.idle_time_ms = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idle_time_ms = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sum_run_time_ms = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sum_run_time_ms = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sum_wait_time_ms = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sum_wait_time_ms = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.ESteamPipeOperationType[message.type] : message.type;
            if (message.num_ops != null && message.hasOwnProperty("num_ops"))
                object.num_ops = message.num_ops;
            if (message.num_bytes != null && message.hasOwnProperty("num_bytes"))
                if (typeof message.num_bytes === "number")
                    object.num_bytes = options.longs === String ? String(message.num_bytes) : message.num_bytes;
                else
                    object.num_bytes = options.longs === String ? $util.Long.prototype.toString.call(message.num_bytes) : options.longs === Number ? new $util.LongBits(message.num_bytes.low >>> 0, message.num_bytes.high >>> 0).toNumber(true) : message.num_bytes;
            if (message.busy_time_ms != null && message.hasOwnProperty("busy_time_ms"))
                if (typeof message.busy_time_ms === "number")
                    object.busy_time_ms = options.longs === String ? String(message.busy_time_ms) : message.busy_time_ms;
                else
                    object.busy_time_ms = options.longs === String ? $util.Long.prototype.toString.call(message.busy_time_ms) : options.longs === Number ? new $util.LongBits(message.busy_time_ms.low >>> 0, message.busy_time_ms.high >>> 0).toNumber(true) : message.busy_time_ms;
            if (message.idle_time_ms != null && message.hasOwnProperty("idle_time_ms"))
                if (typeof message.idle_time_ms === "number")
                    object.idle_time_ms = options.longs === String ? String(message.idle_time_ms) : message.idle_time_ms;
                else
                    object.idle_time_ms = options.longs === String ? $util.Long.prototype.toString.call(message.idle_time_ms) : options.longs === Number ? new $util.LongBits(message.idle_time_ms.low >>> 0, message.idle_time_ms.high >>> 0).toNumber(true) : message.idle_time_ms;
            if (message.sum_run_time_ms != null && message.hasOwnProperty("sum_run_time_ms"))
                if (typeof message.sum_run_time_ms === "number")
                    object.sum_run_time_ms = options.longs === String ? String(message.sum_run_time_ms) : message.sum_run_time_ms;
                else
                    object.sum_run_time_ms = options.longs === String ? $util.Long.prototype.toString.call(message.sum_run_time_ms) : options.longs === Number ? new $util.LongBits(message.sum_run_time_ms.low >>> 0, message.sum_run_time_ms.high >>> 0).toNumber(true) : message.sum_run_time_ms;
            if (message.sum_wait_time_ms != null && message.hasOwnProperty("sum_wait_time_ms"))
                if (typeof message.sum_wait_time_ms === "number")
                    object.sum_wait_time_ms = options.longs === String ? String(message.sum_wait_time_ms) : message.sum_wait_time_ms;
                else
                    object.sum_wait_time_ms = options.longs === String ? $util.Long.prototype.toString.call(message.sum_wait_time_ms) : options.longs === Number ? new $util.LongBits(message.sum_wait_time_ms.low >>> 0, message.sum_wait_time_ms.high >>> 0).toNumber(true) : message.sum_wait_time_ms;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_SteamPipeWorkStats_Operation to JSON.
         * @function toJSON
         * @memberof CClientMetrics_SteamPipeWorkStats_Operation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_SteamPipeWorkStats_Operation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_SteamPipeWorkStats_Operation;
    })();
    
    $root.CClientMetrics_SteamPipeWorkStats_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_SteamPipeWorkStats_Notification.
         * @exports ICClientMetrics_SteamPipeWorkStats_Notification
         * @interface ICClientMetrics_SteamPipeWorkStats_Notification
         * @property {number|null} [appid] CClientMetrics_SteamPipeWorkStats_Notification appid
         * @property {number|null} [depotid] CClientMetrics_SteamPipeWorkStats_Notification depotid
         * @property {ESteamPipeWorkType|null} [work_type] CClientMetrics_SteamPipeWorkStats_Notification work_type
         * @property {Array.<ICClientMetrics_SteamPipeWorkStats_Operation>|null} [operations] CClientMetrics_SteamPipeWorkStats_Notification operations
         */
    
        /**
         * Constructs a new CClientMetrics_SteamPipeWorkStats_Notification.
         * @exports CClientMetrics_SteamPipeWorkStats_Notification
         * @classdesc Represents a CClientMetrics_SteamPipeWorkStats_Notification.
         * @implements ICClientMetrics_SteamPipeWorkStats_Notification
         * @constructor
         * @param {ICClientMetrics_SteamPipeWorkStats_Notification=} [properties] Properties to set
         */
        function CClientMetrics_SteamPipeWorkStats_Notification(properties) {
            this.operations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Notification appid.
         * @member {number} appid
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Notification.prototype.appid = 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Notification depotid.
         * @member {number} depotid
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Notification.prototype.depotid = 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Notification work_type.
         * @member {ESteamPipeWorkType} work_type
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Notification.prototype.work_type = 0;
    
        /**
         * CClientMetrics_SteamPipeWorkStats_Notification operations.
         * @member {Array.<ICClientMetrics_SteamPipeWorkStats_Operation>} operations
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @instance
         */
        CClientMetrics_SteamPipeWorkStats_Notification.prototype.operations = $util.emptyArray;
    
        /**
         * Creates a new CClientMetrics_SteamPipeWorkStats_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @static
         * @param {ICClientMetrics_SteamPipeWorkStats_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_SteamPipeWorkStats_Notification} CClientMetrics_SteamPipeWorkStats_Notification instance
         */
        CClientMetrics_SteamPipeWorkStats_Notification.create = function create(properties) {
            return new CClientMetrics_SteamPipeWorkStats_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_SteamPipeWorkStats_Notification message. Does not implicitly {@link CClientMetrics_SteamPipeWorkStats_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @static
         * @param {ICClientMetrics_SteamPipeWorkStats_Notification} message CClientMetrics_SteamPipeWorkStats_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_SteamPipeWorkStats_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.depotid != null && message.hasOwnProperty("depotid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.depotid);
            if (message.work_type != null && message.hasOwnProperty("work_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.work_type);
            if (message.operations != null && message.operations.length)
                for (var i = 0; i < message.operations.length; ++i)
                    $root.CClientMetrics_SteamPipeWorkStats_Operation.encode(message.operations[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_SteamPipeWorkStats_Notification message, length delimited. Does not implicitly {@link CClientMetrics_SteamPipeWorkStats_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @static
         * @param {ICClientMetrics_SteamPipeWorkStats_Notification} message CClientMetrics_SteamPipeWorkStats_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_SteamPipeWorkStats_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_SteamPipeWorkStats_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_SteamPipeWorkStats_Notification} CClientMetrics_SteamPipeWorkStats_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_SteamPipeWorkStats_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_SteamPipeWorkStats_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.depotid = reader.uint32();
                    break;
                case 3:
                    message.work_type = reader.int32();
                    break;
                case 4:
                    if (!(message.operations && message.operations.length))
                        message.operations = [];
                    message.operations.push($root.CClientMetrics_SteamPipeWorkStats_Operation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_SteamPipeWorkStats_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_SteamPipeWorkStats_Notification} CClientMetrics_SteamPipeWorkStats_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_SteamPipeWorkStats_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_SteamPipeWorkStats_Notification message.
         * @function verify
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_SteamPipeWorkStats_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.depotid != null && message.hasOwnProperty("depotid"))
                if (!$util.isInteger(message.depotid))
                    return "depotid: integer expected";
            if (message.work_type != null && message.hasOwnProperty("work_type"))
                switch (message.work_type) {
                default:
                    return "work_type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.operations != null && message.hasOwnProperty("operations")) {
                if (!Array.isArray(message.operations))
                    return "operations: array expected";
                for (var i = 0; i < message.operations.length; ++i) {
                    var error = $root.CClientMetrics_SteamPipeWorkStats_Operation.verify(message.operations[i]);
                    if (error)
                        return "operations." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CClientMetrics_SteamPipeWorkStats_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_SteamPipeWorkStats_Notification} CClientMetrics_SteamPipeWorkStats_Notification
         */
        CClientMetrics_SteamPipeWorkStats_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_SteamPipeWorkStats_Notification)
                return object;
            var message = new $root.CClientMetrics_SteamPipeWorkStats_Notification();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.depotid != null)
                message.depotid = object.depotid >>> 0;
            switch (object.work_type) {
            case "k_ESteamPipeClientWorkType_Invalid":
            case 0:
                message.work_type = 0;
                break;
            case "k_ESteamPipeClientWorkType_StageFromChunkStores":
            case 1:
                message.work_type = 1;
                break;
            }
            if (object.operations) {
                if (!Array.isArray(object.operations))
                    throw TypeError(".CClientMetrics_SteamPipeWorkStats_Notification.operations: array expected");
                message.operations = [];
                for (var i = 0; i < object.operations.length; ++i) {
                    if (typeof object.operations[i] !== "object")
                        throw TypeError(".CClientMetrics_SteamPipeWorkStats_Notification.operations: object expected");
                    message.operations[i] = $root.CClientMetrics_SteamPipeWorkStats_Operation.fromObject(object.operations[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_SteamPipeWorkStats_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @static
         * @param {CClientMetrics_SteamPipeWorkStats_Notification} message CClientMetrics_SteamPipeWorkStats_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_SteamPipeWorkStats_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.operations = [];
            if (options.defaults) {
                object.appid = 0;
                object.depotid = 0;
                object.work_type = options.enums === String ? "k_ESteamPipeClientWorkType_Invalid" : 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.depotid != null && message.hasOwnProperty("depotid"))
                object.depotid = message.depotid;
            if (message.work_type != null && message.hasOwnProperty("work_type"))
                object.work_type = options.enums === String ? $root.ESteamPipeWorkType[message.work_type] : message.work_type;
            if (message.operations && message.operations.length) {
                object.operations = [];
                for (var j = 0; j < message.operations.length; ++j)
                    object.operations[j] = $root.CClientMetrics_SteamPipeWorkStats_Operation.toObject(message.operations[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CClientMetrics_SteamPipeWorkStats_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_SteamPipeWorkStats_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_SteamPipeWorkStats_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_SteamPipeWorkStats_Notification;
    })();
    
    $root.CClientMetrics_ReportClientError_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_ReportClientError_Notification.
         * @exports ICClientMetrics_ReportClientError_Notification
         * @interface ICClientMetrics_ReportClientError_Notification
         * @property {string|null} [product] CClientMetrics_ReportClientError_Notification product
         * @property {string|null} [version] CClientMetrics_ReportClientError_Notification version
         * @property {Array.<CClientMetrics_ReportClientError_Notification.IError>|null} [errors] CClientMetrics_ReportClientError_Notification errors
         */
    
        /**
         * Constructs a new CClientMetrics_ReportClientError_Notification.
         * @exports CClientMetrics_ReportClientError_Notification
         * @classdesc Represents a CClientMetrics_ReportClientError_Notification.
         * @implements ICClientMetrics_ReportClientError_Notification
         * @constructor
         * @param {ICClientMetrics_ReportClientError_Notification=} [properties] Properties to set
         */
        function CClientMetrics_ReportClientError_Notification(properties) {
            this.errors = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ReportClientError_Notification product.
         * @member {string} product
         * @memberof CClientMetrics_ReportClientError_Notification
         * @instance
         */
        CClientMetrics_ReportClientError_Notification.prototype.product = "";
    
        /**
         * CClientMetrics_ReportClientError_Notification version.
         * @member {string} version
         * @memberof CClientMetrics_ReportClientError_Notification
         * @instance
         */
        CClientMetrics_ReportClientError_Notification.prototype.version = "";
    
        /**
         * CClientMetrics_ReportClientError_Notification errors.
         * @member {Array.<CClientMetrics_ReportClientError_Notification.IError>} errors
         * @memberof CClientMetrics_ReportClientError_Notification
         * @instance
         */
        CClientMetrics_ReportClientError_Notification.prototype.errors = $util.emptyArray;
    
        /**
         * Creates a new CClientMetrics_ReportClientError_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ReportClientError_Notification
         * @static
         * @param {ICClientMetrics_ReportClientError_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_ReportClientError_Notification} CClientMetrics_ReportClientError_Notification instance
         */
        CClientMetrics_ReportClientError_Notification.create = function create(properties) {
            return new CClientMetrics_ReportClientError_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ReportClientError_Notification message. Does not implicitly {@link CClientMetrics_ReportClientError_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ReportClientError_Notification
         * @static
         * @param {ICClientMetrics_ReportClientError_Notification} message CClientMetrics_ReportClientError_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ReportClientError_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.product != null && message.hasOwnProperty("product"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.product);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            if (message.errors != null && message.errors.length)
                for (var i = 0; i < message.errors.length; ++i)
                    $root.CClientMetrics_ReportClientError_Notification.Error.encode(message.errors[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ReportClientError_Notification message, length delimited. Does not implicitly {@link CClientMetrics_ReportClientError_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ReportClientError_Notification
         * @static
         * @param {ICClientMetrics_ReportClientError_Notification} message CClientMetrics_ReportClientError_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ReportClientError_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ReportClientError_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ReportClientError_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ReportClientError_Notification} CClientMetrics_ReportClientError_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ReportClientError_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ReportClientError_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.product = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    if (!(message.errors && message.errors.length))
                        message.errors = [];
                    message.errors.push($root.CClientMetrics_ReportClientError_Notification.Error.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ReportClientError_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ReportClientError_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ReportClientError_Notification} CClientMetrics_ReportClientError_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ReportClientError_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ReportClientError_Notification message.
         * @function verify
         * @memberof CClientMetrics_ReportClientError_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ReportClientError_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.product != null && message.hasOwnProperty("product"))
                if (!$util.isString(message.product))
                    return "product: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.errors != null && message.hasOwnProperty("errors")) {
                if (!Array.isArray(message.errors))
                    return "errors: array expected";
                for (var i = 0; i < message.errors.length; ++i) {
                    var error = $root.CClientMetrics_ReportClientError_Notification.Error.verify(message.errors[i]);
                    if (error)
                        return "errors." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ReportClientError_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ReportClientError_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ReportClientError_Notification} CClientMetrics_ReportClientError_Notification
         */
        CClientMetrics_ReportClientError_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ReportClientError_Notification)
                return object;
            var message = new $root.CClientMetrics_ReportClientError_Notification();
            if (object.product != null)
                message.product = String(object.product);
            if (object.version != null)
                message.version = String(object.version);
            if (object.errors) {
                if (!Array.isArray(object.errors))
                    throw TypeError(".CClientMetrics_ReportClientError_Notification.errors: array expected");
                message.errors = [];
                for (var i = 0; i < object.errors.length; ++i) {
                    if (typeof object.errors[i] !== "object")
                        throw TypeError(".CClientMetrics_ReportClientError_Notification.errors: object expected");
                    message.errors[i] = $root.CClientMetrics_ReportClientError_Notification.Error.fromObject(object.errors[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ReportClientError_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ReportClientError_Notification
         * @static
         * @param {CClientMetrics_ReportClientError_Notification} message CClientMetrics_ReportClientError_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ReportClientError_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.errors = [];
            if (options.defaults) {
                object.product = "";
                object.version = "";
            }
            if (message.product != null && message.hasOwnProperty("product"))
                object.product = message.product;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.errors && message.errors.length) {
                object.errors = [];
                for (var j = 0; j < message.errors.length; ++j)
                    object.errors[j] = $root.CClientMetrics_ReportClientError_Notification.Error.toObject(message.errors[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ReportClientError_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ReportClientError_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ReportClientError_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CClientMetrics_ReportClientError_Notification.Error = (function() {
    
            /**
             * Properties of an Error.
             * @memberof CClientMetrics_ReportClientError_Notification
             * @interface IError
             * @property {string|null} [identifier] Error identifier
             * @property {string|null} [message] Error message
             * @property {number|null} [count] Error count
             */
    
            /**
             * Constructs a new Error.
             * @memberof CClientMetrics_ReportClientError_Notification
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {CClientMetrics_ReportClientError_Notification.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Error identifier.
             * @member {string} identifier
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @instance
             */
            Error.prototype.identifier = "";
    
            /**
             * Error message.
             * @member {string} message
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @instance
             */
            Error.prototype.message = "";
    
            /**
             * Error count.
             * @member {number} count
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @instance
             */
            Error.prototype.count = 0;
    
            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @static
             * @param {CClientMetrics_ReportClientError_Notification.IError=} [properties] Properties to set
             * @returns {CClientMetrics_ReportClientError_Notification.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };
    
            /**
             * Encodes the specified Error message. Does not implicitly {@link CClientMetrics_ReportClientError_Notification.Error.verify|verify} messages.
             * @function encode
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @static
             * @param {CClientMetrics_ReportClientError_Notification.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.identifier != null && message.hasOwnProperty("identifier"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.count != null && message.hasOwnProperty("count"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.count);
                return writer;
            };
    
            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link CClientMetrics_ReportClientError_Notification.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @static
             * @param {CClientMetrics_ReportClientError_Notification.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CClientMetrics_ReportClientError_Notification.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ReportClientError_Notification.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.identifier = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    case 3:
                        message.count = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CClientMetrics_ReportClientError_Notification.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Error message.
             * @function verify
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.identifier != null && message.hasOwnProperty("identifier"))
                    if (!$util.isString(message.identifier))
                        return "identifier: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                return null;
            };
    
            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CClientMetrics_ReportClientError_Notification.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.CClientMetrics_ReportClientError_Notification.Error)
                    return object;
                var message = new $root.CClientMetrics_ReportClientError_Notification.Error();
                if (object.identifier != null)
                    message.identifier = String(object.identifier);
                if (object.message != null)
                    message.message = String(object.message);
                if (object.count != null)
                    message.count = object.count >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @static
             * @param {CClientMetrics_ReportClientError_Notification.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.identifier = "";
                    object.message = "";
                    object.count = 0;
                }
                if (message.identifier != null && message.hasOwnProperty("identifier"))
                    object.identifier = message.identifier;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                return object;
            };
    
            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof CClientMetrics_ReportClientError_Notification.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Error;
        })();
    
        return CClientMetrics_ReportClientError_Notification;
    })();
    
    $root.CClientMetrics_ClientBootstrap_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_ClientBootstrap_Notification.
         * @exports ICClientMetrics_ClientBootstrap_Notification
         * @interface ICClientMetrics_ClientBootstrap_Notification
         * @property {ICClientMetrics_ClientBootstrap_Summary|null} [summary] CClientMetrics_ClientBootstrap_Notification summary
         */
    
        /**
         * Constructs a new CClientMetrics_ClientBootstrap_Notification.
         * @exports CClientMetrics_ClientBootstrap_Notification
         * @classdesc Represents a CClientMetrics_ClientBootstrap_Notification.
         * @implements ICClientMetrics_ClientBootstrap_Notification
         * @constructor
         * @param {ICClientMetrics_ClientBootstrap_Notification=} [properties] Properties to set
         */
        function CClientMetrics_ClientBootstrap_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ClientBootstrap_Notification summary.
         * @member {ICClientMetrics_ClientBootstrap_Summary|null|undefined} summary
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @instance
         */
        CClientMetrics_ClientBootstrap_Notification.prototype.summary = null;
    
        /**
         * Creates a new CClientMetrics_ClientBootstrap_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @static
         * @param {ICClientMetrics_ClientBootstrap_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_ClientBootstrap_Notification} CClientMetrics_ClientBootstrap_Notification instance
         */
        CClientMetrics_ClientBootstrap_Notification.create = function create(properties) {
            return new CClientMetrics_ClientBootstrap_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ClientBootstrap_Notification message. Does not implicitly {@link CClientMetrics_ClientBootstrap_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @static
         * @param {ICClientMetrics_ClientBootstrap_Notification} message CClientMetrics_ClientBootstrap_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ClientBootstrap_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.summary != null && message.hasOwnProperty("summary"))
                $root.CClientMetrics_ClientBootstrap_Summary.encode(message.summary, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ClientBootstrap_Notification message, length delimited. Does not implicitly {@link CClientMetrics_ClientBootstrap_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @static
         * @param {ICClientMetrics_ClientBootstrap_Notification} message CClientMetrics_ClientBootstrap_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ClientBootstrap_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ClientBootstrap_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ClientBootstrap_Notification} CClientMetrics_ClientBootstrap_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ClientBootstrap_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ClientBootstrap_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.summary = $root.CClientMetrics_ClientBootstrap_Summary.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ClientBootstrap_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ClientBootstrap_Notification} CClientMetrics_ClientBootstrap_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ClientBootstrap_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ClientBootstrap_Notification message.
         * @function verify
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ClientBootstrap_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.summary != null && message.hasOwnProperty("summary")) {
                var error = $root.CClientMetrics_ClientBootstrap_Summary.verify(message.summary);
                if (error)
                    return "summary." + error;
            }
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ClientBootstrap_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ClientBootstrap_Notification} CClientMetrics_ClientBootstrap_Notification
         */
        CClientMetrics_ClientBootstrap_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ClientBootstrap_Notification)
                return object;
            var message = new $root.CClientMetrics_ClientBootstrap_Notification();
            if (object.summary != null) {
                if (typeof object.summary !== "object")
                    throw TypeError(".CClientMetrics_ClientBootstrap_Notification.summary: object expected");
                message.summary = $root.CClientMetrics_ClientBootstrap_Summary.fromObject(object.summary);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ClientBootstrap_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @static
         * @param {CClientMetrics_ClientBootstrap_Notification} message CClientMetrics_ClientBootstrap_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ClientBootstrap_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.summary = null;
            if (message.summary != null && message.hasOwnProperty("summary"))
                object.summary = $root.CClientMetrics_ClientBootstrap_Summary.toObject(message.summary, options);
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ClientBootstrap_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ClientBootstrap_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ClientBootstrap_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_ClientBootstrap_Notification;
    })();
    
    $root.CClientMetrics_DownloadRates_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_DownloadRates_Notification.
         * @exports ICClientMetrics_DownloadRates_Notification
         * @interface ICClientMetrics_DownloadRates_Notification
         * @property {number|null} [cell_id] CClientMetrics_DownloadRates_Notification cell_id
         * @property {Array.<CClientMetrics_DownloadRates_Notification.IStatsInfo>|null} [stats] CClientMetrics_DownloadRates_Notification stats
         * @property {number|null} [throttling_kbps] CClientMetrics_DownloadRates_Notification throttling_kbps
         */
    
        /**
         * Constructs a new CClientMetrics_DownloadRates_Notification.
         * @exports CClientMetrics_DownloadRates_Notification
         * @classdesc Represents a CClientMetrics_DownloadRates_Notification.
         * @implements ICClientMetrics_DownloadRates_Notification
         * @constructor
         * @param {ICClientMetrics_DownloadRates_Notification=} [properties] Properties to set
         */
        function CClientMetrics_DownloadRates_Notification(properties) {
            this.stats = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_DownloadRates_Notification cell_id.
         * @member {number} cell_id
         * @memberof CClientMetrics_DownloadRates_Notification
         * @instance
         */
        CClientMetrics_DownloadRates_Notification.prototype.cell_id = 0;
    
        /**
         * CClientMetrics_DownloadRates_Notification stats.
         * @member {Array.<CClientMetrics_DownloadRates_Notification.IStatsInfo>} stats
         * @memberof CClientMetrics_DownloadRates_Notification
         * @instance
         */
        CClientMetrics_DownloadRates_Notification.prototype.stats = $util.emptyArray;
    
        /**
         * CClientMetrics_DownloadRates_Notification throttling_kbps.
         * @member {number} throttling_kbps
         * @memberof CClientMetrics_DownloadRates_Notification
         * @instance
         */
        CClientMetrics_DownloadRates_Notification.prototype.throttling_kbps = 0;
    
        /**
         * Creates a new CClientMetrics_DownloadRates_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_DownloadRates_Notification
         * @static
         * @param {ICClientMetrics_DownloadRates_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_DownloadRates_Notification} CClientMetrics_DownloadRates_Notification instance
         */
        CClientMetrics_DownloadRates_Notification.create = function create(properties) {
            return new CClientMetrics_DownloadRates_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_DownloadRates_Notification message. Does not implicitly {@link CClientMetrics_DownloadRates_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_DownloadRates_Notification
         * @static
         * @param {ICClientMetrics_DownloadRates_Notification} message CClientMetrics_DownloadRates_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_DownloadRates_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cell_id);
            if (message.stats != null && message.stats.length)
                for (var i = 0; i < message.stats.length; ++i)
                    $root.CClientMetrics_DownloadRates_Notification.StatsInfo.encode(message.stats[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.throttling_kbps != null && message.hasOwnProperty("throttling_kbps"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.throttling_kbps);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_DownloadRates_Notification message, length delimited. Does not implicitly {@link CClientMetrics_DownloadRates_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_DownloadRates_Notification
         * @static
         * @param {ICClientMetrics_DownloadRates_Notification} message CClientMetrics_DownloadRates_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_DownloadRates_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_DownloadRates_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_DownloadRates_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_DownloadRates_Notification} CClientMetrics_DownloadRates_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_DownloadRates_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_DownloadRates_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cell_id = reader.uint32();
                    break;
                case 2:
                    if (!(message.stats && message.stats.length))
                        message.stats = [];
                    message.stats.push($root.CClientMetrics_DownloadRates_Notification.StatsInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.throttling_kbps = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_DownloadRates_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_DownloadRates_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_DownloadRates_Notification} CClientMetrics_DownloadRates_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_DownloadRates_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_DownloadRates_Notification message.
         * @function verify
         * @memberof CClientMetrics_DownloadRates_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_DownloadRates_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                if (!$util.isInteger(message.cell_id))
                    return "cell_id: integer expected";
            if (message.stats != null && message.hasOwnProperty("stats")) {
                if (!Array.isArray(message.stats))
                    return "stats: array expected";
                for (var i = 0; i < message.stats.length; ++i) {
                    var error = $root.CClientMetrics_DownloadRates_Notification.StatsInfo.verify(message.stats[i]);
                    if (error)
                        return "stats." + error;
                }
            }
            if (message.throttling_kbps != null && message.hasOwnProperty("throttling_kbps"))
                if (!$util.isInteger(message.throttling_kbps))
                    return "throttling_kbps: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_DownloadRates_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_DownloadRates_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_DownloadRates_Notification} CClientMetrics_DownloadRates_Notification
         */
        CClientMetrics_DownloadRates_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_DownloadRates_Notification)
                return object;
            var message = new $root.CClientMetrics_DownloadRates_Notification();
            if (object.cell_id != null)
                message.cell_id = object.cell_id >>> 0;
            if (object.stats) {
                if (!Array.isArray(object.stats))
                    throw TypeError(".CClientMetrics_DownloadRates_Notification.stats: array expected");
                message.stats = [];
                for (var i = 0; i < object.stats.length; ++i) {
                    if (typeof object.stats[i] !== "object")
                        throw TypeError(".CClientMetrics_DownloadRates_Notification.stats: object expected");
                    message.stats[i] = $root.CClientMetrics_DownloadRates_Notification.StatsInfo.fromObject(object.stats[i]);
                }
            }
            if (object.throttling_kbps != null)
                message.throttling_kbps = object.throttling_kbps >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_DownloadRates_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_DownloadRates_Notification
         * @static
         * @param {CClientMetrics_DownloadRates_Notification} message CClientMetrics_DownloadRates_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_DownloadRates_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.stats = [];
            if (options.defaults) {
                object.cell_id = 0;
                object.throttling_kbps = 0;
            }
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                object.cell_id = message.cell_id;
            if (message.stats && message.stats.length) {
                object.stats = [];
                for (var j = 0; j < message.stats.length; ++j)
                    object.stats[j] = $root.CClientMetrics_DownloadRates_Notification.StatsInfo.toObject(message.stats[j], options);
            }
            if (message.throttling_kbps != null && message.hasOwnProperty("throttling_kbps"))
                object.throttling_kbps = message.throttling_kbps;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_DownloadRates_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_DownloadRates_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_DownloadRates_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CClientMetrics_DownloadRates_Notification.StatsInfo = (function() {
    
            /**
             * Properties of a StatsInfo.
             * @memberof CClientMetrics_DownloadRates_Notification
             * @interface IStatsInfo
             * @property {number|null} [source_type] StatsInfo source_type
             * @property {number|null} [source_id] StatsInfo source_id
             * @property {number|Long|null} [bytes] StatsInfo bytes
             * @property {string|null} [host_name] StatsInfo host_name
             * @property {number|Long|null} [microseconds] StatsInfo microseconds
             * @property {boolean|null} [used_ipv6] StatsInfo used_ipv6
             * @property {boolean|null} [proxied] StatsInfo proxied
             */
    
            /**
             * Constructs a new StatsInfo.
             * @memberof CClientMetrics_DownloadRates_Notification
             * @classdesc Represents a StatsInfo.
             * @implements IStatsInfo
             * @constructor
             * @param {CClientMetrics_DownloadRates_Notification.IStatsInfo=} [properties] Properties to set
             */
            function StatsInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * StatsInfo source_type.
             * @member {number} source_type
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @instance
             */
            StatsInfo.prototype.source_type = 0;
    
            /**
             * StatsInfo source_id.
             * @member {number} source_id
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @instance
             */
            StatsInfo.prototype.source_id = 0;
    
            /**
             * StatsInfo bytes.
             * @member {number|Long} bytes
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @instance
             */
            StatsInfo.prototype.bytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * StatsInfo host_name.
             * @member {string} host_name
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @instance
             */
            StatsInfo.prototype.host_name = "";
    
            /**
             * StatsInfo microseconds.
             * @member {number|Long} microseconds
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @instance
             */
            StatsInfo.prototype.microseconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * StatsInfo used_ipv6.
             * @member {boolean} used_ipv6
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @instance
             */
            StatsInfo.prototype.used_ipv6 = false;
    
            /**
             * StatsInfo proxied.
             * @member {boolean} proxied
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @instance
             */
            StatsInfo.prototype.proxied = false;
    
            /**
             * Creates a new StatsInfo instance using the specified properties.
             * @function create
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @static
             * @param {CClientMetrics_DownloadRates_Notification.IStatsInfo=} [properties] Properties to set
             * @returns {CClientMetrics_DownloadRates_Notification.StatsInfo} StatsInfo instance
             */
            StatsInfo.create = function create(properties) {
                return new StatsInfo(properties);
            };
    
            /**
             * Encodes the specified StatsInfo message. Does not implicitly {@link CClientMetrics_DownloadRates_Notification.StatsInfo.verify|verify} messages.
             * @function encode
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @static
             * @param {CClientMetrics_DownloadRates_Notification.IStatsInfo} message StatsInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StatsInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.source_type != null && message.hasOwnProperty("source_type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.source_type);
                if (message.source_id != null && message.hasOwnProperty("source_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.source_id);
                if (message.bytes != null && message.hasOwnProperty("bytes"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.bytes);
                if (message.host_name != null && message.hasOwnProperty("host_name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.host_name);
                if (message.microseconds != null && message.hasOwnProperty("microseconds"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.microseconds);
                if (message.used_ipv6 != null && message.hasOwnProperty("used_ipv6"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.used_ipv6);
                if (message.proxied != null && message.hasOwnProperty("proxied"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.proxied);
                return writer;
            };
    
            /**
             * Encodes the specified StatsInfo message, length delimited. Does not implicitly {@link CClientMetrics_DownloadRates_Notification.StatsInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @static
             * @param {CClientMetrics_DownloadRates_Notification.IStatsInfo} message StatsInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StatsInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a StatsInfo message from the specified reader or buffer.
             * @function decode
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CClientMetrics_DownloadRates_Notification.StatsInfo} StatsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StatsInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_DownloadRates_Notification.StatsInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.source_type = reader.uint32();
                        break;
                    case 2:
                        message.source_id = reader.uint32();
                        break;
                    case 3:
                        message.bytes = reader.uint64();
                        break;
                    case 4:
                        message.host_name = reader.string();
                        break;
                    case 5:
                        message.microseconds = reader.uint64();
                        break;
                    case 6:
                        message.used_ipv6 = reader.bool();
                        break;
                    case 7:
                        message.proxied = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a StatsInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CClientMetrics_DownloadRates_Notification.StatsInfo} StatsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StatsInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a StatsInfo message.
             * @function verify
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StatsInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.source_type != null && message.hasOwnProperty("source_type"))
                    if (!$util.isInteger(message.source_type))
                        return "source_type: integer expected";
                if (message.source_id != null && message.hasOwnProperty("source_id"))
                    if (!$util.isInteger(message.source_id))
                        return "source_id: integer expected";
                if (message.bytes != null && message.hasOwnProperty("bytes"))
                    if (!$util.isInteger(message.bytes) && !(message.bytes && $util.isInteger(message.bytes.low) && $util.isInteger(message.bytes.high)))
                        return "bytes: integer|Long expected";
                if (message.host_name != null && message.hasOwnProperty("host_name"))
                    if (!$util.isString(message.host_name))
                        return "host_name: string expected";
                if (message.microseconds != null && message.hasOwnProperty("microseconds"))
                    if (!$util.isInteger(message.microseconds) && !(message.microseconds && $util.isInteger(message.microseconds.low) && $util.isInteger(message.microseconds.high)))
                        return "microseconds: integer|Long expected";
                if (message.used_ipv6 != null && message.hasOwnProperty("used_ipv6"))
                    if (typeof message.used_ipv6 !== "boolean")
                        return "used_ipv6: boolean expected";
                if (message.proxied != null && message.hasOwnProperty("proxied"))
                    if (typeof message.proxied !== "boolean")
                        return "proxied: boolean expected";
                return null;
            };
    
            /**
             * Creates a StatsInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CClientMetrics_DownloadRates_Notification.StatsInfo} StatsInfo
             */
            StatsInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.CClientMetrics_DownloadRates_Notification.StatsInfo)
                    return object;
                var message = new $root.CClientMetrics_DownloadRates_Notification.StatsInfo();
                if (object.source_type != null)
                    message.source_type = object.source_type >>> 0;
                if (object.source_id != null)
                    message.source_id = object.source_id >>> 0;
                if (object.bytes != null)
                    if ($util.Long)
                        (message.bytes = $util.Long.fromValue(object.bytes)).unsigned = true;
                    else if (typeof object.bytes === "string")
                        message.bytes = parseInt(object.bytes, 10);
                    else if (typeof object.bytes === "number")
                        message.bytes = object.bytes;
                    else if (typeof object.bytes === "object")
                        message.bytes = new $util.LongBits(object.bytes.low >>> 0, object.bytes.high >>> 0).toNumber(true);
                if (object.host_name != null)
                    message.host_name = String(object.host_name);
                if (object.microseconds != null)
                    if ($util.Long)
                        (message.microseconds = $util.Long.fromValue(object.microseconds)).unsigned = true;
                    else if (typeof object.microseconds === "string")
                        message.microseconds = parseInt(object.microseconds, 10);
                    else if (typeof object.microseconds === "number")
                        message.microseconds = object.microseconds;
                    else if (typeof object.microseconds === "object")
                        message.microseconds = new $util.LongBits(object.microseconds.low >>> 0, object.microseconds.high >>> 0).toNumber(true);
                if (object.used_ipv6 != null)
                    message.used_ipv6 = Boolean(object.used_ipv6);
                if (object.proxied != null)
                    message.proxied = Boolean(object.proxied);
                return message;
            };
    
            /**
             * Creates a plain object from a StatsInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @static
             * @param {CClientMetrics_DownloadRates_Notification.StatsInfo} message StatsInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StatsInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.source_type = 0;
                    object.source_id = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.bytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bytes = options.longs === String ? "0" : 0;
                    object.host_name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.microseconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.microseconds = options.longs === String ? "0" : 0;
                    object.used_ipv6 = false;
                    object.proxied = false;
                }
                if (message.source_type != null && message.hasOwnProperty("source_type"))
                    object.source_type = message.source_type;
                if (message.source_id != null && message.hasOwnProperty("source_id"))
                    object.source_id = message.source_id;
                if (message.bytes != null && message.hasOwnProperty("bytes"))
                    if (typeof message.bytes === "number")
                        object.bytes = options.longs === String ? String(message.bytes) : message.bytes;
                    else
                        object.bytes = options.longs === String ? $util.Long.prototype.toString.call(message.bytes) : options.longs === Number ? new $util.LongBits(message.bytes.low >>> 0, message.bytes.high >>> 0).toNumber(true) : message.bytes;
                if (message.host_name != null && message.hasOwnProperty("host_name"))
                    object.host_name = message.host_name;
                if (message.microseconds != null && message.hasOwnProperty("microseconds"))
                    if (typeof message.microseconds === "number")
                        object.microseconds = options.longs === String ? String(message.microseconds) : message.microseconds;
                    else
                        object.microseconds = options.longs === String ? $util.Long.prototype.toString.call(message.microseconds) : options.longs === Number ? new $util.LongBits(message.microseconds.low >>> 0, message.microseconds.high >>> 0).toNumber(true) : message.microseconds;
                if (message.used_ipv6 != null && message.hasOwnProperty("used_ipv6"))
                    object.used_ipv6 = message.used_ipv6;
                if (message.proxied != null && message.hasOwnProperty("proxied"))
                    object.proxied = message.proxied;
                return object;
            };
    
            /**
             * Converts this StatsInfo to JSON.
             * @function toJSON
             * @memberof CClientMetrics_DownloadRates_Notification.StatsInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StatsInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return StatsInfo;
        })();
    
        return CClientMetrics_DownloadRates_Notification;
    })();
    
    $root.CClientMetrics_ContentValidation_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_ContentValidation_Notification.
         * @exports ICClientMetrics_ContentValidation_Notification
         * @interface ICClientMetrics_ContentValidation_Notification
         * @property {number|null} [validation_result] CClientMetrics_ContentValidation_Notification validation_result
         * @property {number|null} [app_id] CClientMetrics_ContentValidation_Notification app_id
         * @property {boolean|null} [staged_files] CClientMetrics_ContentValidation_Notification staged_files
         * @property {boolean|null} [user_initiated] CClientMetrics_ContentValidation_Notification user_initiated
         * @property {boolean|null} [early_out] CClientMetrics_ContentValidation_Notification early_out
         * @property {number|null} [chunks_scanned] CClientMetrics_ContentValidation_Notification chunks_scanned
         * @property {number|null} [chunks_corrupt] CClientMetrics_ContentValidation_Notification chunks_corrupt
         * @property {number|Long|null} [bytes_scanned] CClientMetrics_ContentValidation_Notification bytes_scanned
         * @property {number|Long|null} [chunk_bytes_corrupt] CClientMetrics_ContentValidation_Notification chunk_bytes_corrupt
         * @property {number|Long|null} [total_file_size_corrupt] CClientMetrics_ContentValidation_Notification total_file_size_corrupt
         */
    
        /**
         * Constructs a new CClientMetrics_ContentValidation_Notification.
         * @exports CClientMetrics_ContentValidation_Notification
         * @classdesc Represents a CClientMetrics_ContentValidation_Notification.
         * @implements ICClientMetrics_ContentValidation_Notification
         * @constructor
         * @param {ICClientMetrics_ContentValidation_Notification=} [properties] Properties to set
         */
        function CClientMetrics_ContentValidation_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ContentValidation_Notification validation_result.
         * @member {number} validation_result
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.validation_result = 0;
    
        /**
         * CClientMetrics_ContentValidation_Notification app_id.
         * @member {number} app_id
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.app_id = 0;
    
        /**
         * CClientMetrics_ContentValidation_Notification staged_files.
         * @member {boolean} staged_files
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.staged_files = false;
    
        /**
         * CClientMetrics_ContentValidation_Notification user_initiated.
         * @member {boolean} user_initiated
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.user_initiated = false;
    
        /**
         * CClientMetrics_ContentValidation_Notification early_out.
         * @member {boolean} early_out
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.early_out = false;
    
        /**
         * CClientMetrics_ContentValidation_Notification chunks_scanned.
         * @member {number} chunks_scanned
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.chunks_scanned = 0;
    
        /**
         * CClientMetrics_ContentValidation_Notification chunks_corrupt.
         * @member {number} chunks_corrupt
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.chunks_corrupt = 0;
    
        /**
         * CClientMetrics_ContentValidation_Notification bytes_scanned.
         * @member {number|Long} bytes_scanned
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.bytes_scanned = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_ContentValidation_Notification chunk_bytes_corrupt.
         * @member {number|Long} chunk_bytes_corrupt
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.chunk_bytes_corrupt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_ContentValidation_Notification total_file_size_corrupt.
         * @member {number|Long} total_file_size_corrupt
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         */
        CClientMetrics_ContentValidation_Notification.prototype.total_file_size_corrupt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CClientMetrics_ContentValidation_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ContentValidation_Notification
         * @static
         * @param {ICClientMetrics_ContentValidation_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_ContentValidation_Notification} CClientMetrics_ContentValidation_Notification instance
         */
        CClientMetrics_ContentValidation_Notification.create = function create(properties) {
            return new CClientMetrics_ContentValidation_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentValidation_Notification message. Does not implicitly {@link CClientMetrics_ContentValidation_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ContentValidation_Notification
         * @static
         * @param {ICClientMetrics_ContentValidation_Notification} message CClientMetrics_ContentValidation_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentValidation_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.validation_result != null && message.hasOwnProperty("validation_result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.validation_result);
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.app_id);
            if (message.staged_files != null && message.hasOwnProperty("staged_files"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.staged_files);
            if (message.user_initiated != null && message.hasOwnProperty("user_initiated"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.user_initiated);
            if (message.early_out != null && message.hasOwnProperty("early_out"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.early_out);
            if (message.chunks_scanned != null && message.hasOwnProperty("chunks_scanned"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.chunks_scanned);
            if (message.chunks_corrupt != null && message.hasOwnProperty("chunks_corrupt"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.chunks_corrupt);
            if (message.bytes_scanned != null && message.hasOwnProperty("bytes_scanned"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.bytes_scanned);
            if (message.chunk_bytes_corrupt != null && message.hasOwnProperty("chunk_bytes_corrupt"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.chunk_bytes_corrupt);
            if (message.total_file_size_corrupt != null && message.hasOwnProperty("total_file_size_corrupt"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.total_file_size_corrupt);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentValidation_Notification message, length delimited. Does not implicitly {@link CClientMetrics_ContentValidation_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ContentValidation_Notification
         * @static
         * @param {ICClientMetrics_ContentValidation_Notification} message CClientMetrics_ContentValidation_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentValidation_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ContentValidation_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ContentValidation_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ContentValidation_Notification} CClientMetrics_ContentValidation_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentValidation_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ContentValidation_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.validation_result = reader.int32();
                    break;
                case 2:
                    message.app_id = reader.uint32();
                    break;
                case 3:
                    message.staged_files = reader.bool();
                    break;
                case 4:
                    message.user_initiated = reader.bool();
                    break;
                case 5:
                    message.early_out = reader.bool();
                    break;
                case 6:
                    message.chunks_scanned = reader.uint32();
                    break;
                case 7:
                    message.chunks_corrupt = reader.uint32();
                    break;
                case 8:
                    message.bytes_scanned = reader.uint64();
                    break;
                case 9:
                    message.chunk_bytes_corrupt = reader.uint64();
                    break;
                case 10:
                    message.total_file_size_corrupt = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ContentValidation_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ContentValidation_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ContentValidation_Notification} CClientMetrics_ContentValidation_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentValidation_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ContentValidation_Notification message.
         * @function verify
         * @memberof CClientMetrics_ContentValidation_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ContentValidation_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.validation_result != null && message.hasOwnProperty("validation_result"))
                if (!$util.isInteger(message.validation_result))
                    return "validation_result: integer expected";
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                if (!$util.isInteger(message.app_id))
                    return "app_id: integer expected";
            if (message.staged_files != null && message.hasOwnProperty("staged_files"))
                if (typeof message.staged_files !== "boolean")
                    return "staged_files: boolean expected";
            if (message.user_initiated != null && message.hasOwnProperty("user_initiated"))
                if (typeof message.user_initiated !== "boolean")
                    return "user_initiated: boolean expected";
            if (message.early_out != null && message.hasOwnProperty("early_out"))
                if (typeof message.early_out !== "boolean")
                    return "early_out: boolean expected";
            if (message.chunks_scanned != null && message.hasOwnProperty("chunks_scanned"))
                if (!$util.isInteger(message.chunks_scanned))
                    return "chunks_scanned: integer expected";
            if (message.chunks_corrupt != null && message.hasOwnProperty("chunks_corrupt"))
                if (!$util.isInteger(message.chunks_corrupt))
                    return "chunks_corrupt: integer expected";
            if (message.bytes_scanned != null && message.hasOwnProperty("bytes_scanned"))
                if (!$util.isInteger(message.bytes_scanned) && !(message.bytes_scanned && $util.isInteger(message.bytes_scanned.low) && $util.isInteger(message.bytes_scanned.high)))
                    return "bytes_scanned: integer|Long expected";
            if (message.chunk_bytes_corrupt != null && message.hasOwnProperty("chunk_bytes_corrupt"))
                if (!$util.isInteger(message.chunk_bytes_corrupt) && !(message.chunk_bytes_corrupt && $util.isInteger(message.chunk_bytes_corrupt.low) && $util.isInteger(message.chunk_bytes_corrupt.high)))
                    return "chunk_bytes_corrupt: integer|Long expected";
            if (message.total_file_size_corrupt != null && message.hasOwnProperty("total_file_size_corrupt"))
                if (!$util.isInteger(message.total_file_size_corrupt) && !(message.total_file_size_corrupt && $util.isInteger(message.total_file_size_corrupt.low) && $util.isInteger(message.total_file_size_corrupt.high)))
                    return "total_file_size_corrupt: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ContentValidation_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ContentValidation_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ContentValidation_Notification} CClientMetrics_ContentValidation_Notification
         */
        CClientMetrics_ContentValidation_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ContentValidation_Notification)
                return object;
            var message = new $root.CClientMetrics_ContentValidation_Notification();
            if (object.validation_result != null)
                message.validation_result = object.validation_result | 0;
            if (object.app_id != null)
                message.app_id = object.app_id >>> 0;
            if (object.staged_files != null)
                message.staged_files = Boolean(object.staged_files);
            if (object.user_initiated != null)
                message.user_initiated = Boolean(object.user_initiated);
            if (object.early_out != null)
                message.early_out = Boolean(object.early_out);
            if (object.chunks_scanned != null)
                message.chunks_scanned = object.chunks_scanned >>> 0;
            if (object.chunks_corrupt != null)
                message.chunks_corrupt = object.chunks_corrupt >>> 0;
            if (object.bytes_scanned != null)
                if ($util.Long)
                    (message.bytes_scanned = $util.Long.fromValue(object.bytes_scanned)).unsigned = true;
                else if (typeof object.bytes_scanned === "string")
                    message.bytes_scanned = parseInt(object.bytes_scanned, 10);
                else if (typeof object.bytes_scanned === "number")
                    message.bytes_scanned = object.bytes_scanned;
                else if (typeof object.bytes_scanned === "object")
                    message.bytes_scanned = new $util.LongBits(object.bytes_scanned.low >>> 0, object.bytes_scanned.high >>> 0).toNumber(true);
            if (object.chunk_bytes_corrupt != null)
                if ($util.Long)
                    (message.chunk_bytes_corrupt = $util.Long.fromValue(object.chunk_bytes_corrupt)).unsigned = true;
                else if (typeof object.chunk_bytes_corrupt === "string")
                    message.chunk_bytes_corrupt = parseInt(object.chunk_bytes_corrupt, 10);
                else if (typeof object.chunk_bytes_corrupt === "number")
                    message.chunk_bytes_corrupt = object.chunk_bytes_corrupt;
                else if (typeof object.chunk_bytes_corrupt === "object")
                    message.chunk_bytes_corrupt = new $util.LongBits(object.chunk_bytes_corrupt.low >>> 0, object.chunk_bytes_corrupt.high >>> 0).toNumber(true);
            if (object.total_file_size_corrupt != null)
                if ($util.Long)
                    (message.total_file_size_corrupt = $util.Long.fromValue(object.total_file_size_corrupt)).unsigned = true;
                else if (typeof object.total_file_size_corrupt === "string")
                    message.total_file_size_corrupt = parseInt(object.total_file_size_corrupt, 10);
                else if (typeof object.total_file_size_corrupt === "number")
                    message.total_file_size_corrupt = object.total_file_size_corrupt;
                else if (typeof object.total_file_size_corrupt === "object")
                    message.total_file_size_corrupt = new $util.LongBits(object.total_file_size_corrupt.low >>> 0, object.total_file_size_corrupt.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ContentValidation_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ContentValidation_Notification
         * @static
         * @param {CClientMetrics_ContentValidation_Notification} message CClientMetrics_ContentValidation_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ContentValidation_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.validation_result = 0;
                object.app_id = 0;
                object.staged_files = false;
                object.user_initiated = false;
                object.early_out = false;
                object.chunks_scanned = 0;
                object.chunks_corrupt = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_scanned = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_scanned = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.chunk_bytes_corrupt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.chunk_bytes_corrupt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.total_file_size_corrupt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total_file_size_corrupt = options.longs === String ? "0" : 0;
            }
            if (message.validation_result != null && message.hasOwnProperty("validation_result"))
                object.validation_result = message.validation_result;
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                object.app_id = message.app_id;
            if (message.staged_files != null && message.hasOwnProperty("staged_files"))
                object.staged_files = message.staged_files;
            if (message.user_initiated != null && message.hasOwnProperty("user_initiated"))
                object.user_initiated = message.user_initiated;
            if (message.early_out != null && message.hasOwnProperty("early_out"))
                object.early_out = message.early_out;
            if (message.chunks_scanned != null && message.hasOwnProperty("chunks_scanned"))
                object.chunks_scanned = message.chunks_scanned;
            if (message.chunks_corrupt != null && message.hasOwnProperty("chunks_corrupt"))
                object.chunks_corrupt = message.chunks_corrupt;
            if (message.bytes_scanned != null && message.hasOwnProperty("bytes_scanned"))
                if (typeof message.bytes_scanned === "number")
                    object.bytes_scanned = options.longs === String ? String(message.bytes_scanned) : message.bytes_scanned;
                else
                    object.bytes_scanned = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_scanned) : options.longs === Number ? new $util.LongBits(message.bytes_scanned.low >>> 0, message.bytes_scanned.high >>> 0).toNumber(true) : message.bytes_scanned;
            if (message.chunk_bytes_corrupt != null && message.hasOwnProperty("chunk_bytes_corrupt"))
                if (typeof message.chunk_bytes_corrupt === "number")
                    object.chunk_bytes_corrupt = options.longs === String ? String(message.chunk_bytes_corrupt) : message.chunk_bytes_corrupt;
                else
                    object.chunk_bytes_corrupt = options.longs === String ? $util.Long.prototype.toString.call(message.chunk_bytes_corrupt) : options.longs === Number ? new $util.LongBits(message.chunk_bytes_corrupt.low >>> 0, message.chunk_bytes_corrupt.high >>> 0).toNumber(true) : message.chunk_bytes_corrupt;
            if (message.total_file_size_corrupt != null && message.hasOwnProperty("total_file_size_corrupt"))
                if (typeof message.total_file_size_corrupt === "number")
                    object.total_file_size_corrupt = options.longs === String ? String(message.total_file_size_corrupt) : message.total_file_size_corrupt;
                else
                    object.total_file_size_corrupt = options.longs === String ? $util.Long.prototype.toString.call(message.total_file_size_corrupt) : options.longs === Number ? new $util.LongBits(message.total_file_size_corrupt.low >>> 0, message.total_file_size_corrupt.high >>> 0).toNumber(true) : message.total_file_size_corrupt;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ContentValidation_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ContentValidation_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ContentValidation_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_ContentValidation_Notification;
    })();
    
    $root.CClientMetrics_CloudAppSyncStats_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_CloudAppSyncStats_Notification.
         * @exports ICClientMetrics_CloudAppSyncStats_Notification
         * @interface ICClientMetrics_CloudAppSyncStats_Notification
         * @property {number|null} [app_id] CClientMetrics_CloudAppSyncStats_Notification app_id
         * @property {number|null} [platform_type] CClientMetrics_CloudAppSyncStats_Notification platform_type
         * @property {boolean|null} [preload] CClientMetrics_CloudAppSyncStats_Notification preload
         * @property {boolean|null} [blocking_app_launch] CClientMetrics_CloudAppSyncStats_Notification blocking_app_launch
         * @property {number|null} [files_uploaded] CClientMetrics_CloudAppSyncStats_Notification files_uploaded
         * @property {number|null} [files_downloaded] CClientMetrics_CloudAppSyncStats_Notification files_downloaded
         * @property {number|null} [files_deleted] CClientMetrics_CloudAppSyncStats_Notification files_deleted
         * @property {number|Long|null} [bytes_uploaded] CClientMetrics_CloudAppSyncStats_Notification bytes_uploaded
         * @property {number|Long|null} [bytes_downloaded] CClientMetrics_CloudAppSyncStats_Notification bytes_downloaded
         * @property {number|Long|null} [microsec_total] CClientMetrics_CloudAppSyncStats_Notification microsec_total
         * @property {number|Long|null} [microsec_init_caches] CClientMetrics_CloudAppSyncStats_Notification microsec_init_caches
         * @property {number|Long|null} [microsec_validate_state] CClientMetrics_CloudAppSyncStats_Notification microsec_validate_state
         * @property {number|Long|null} [microsec_ac_launch] CClientMetrics_CloudAppSyncStats_Notification microsec_ac_launch
         * @property {number|Long|null} [microsec_ac_prep_user_files] CClientMetrics_CloudAppSyncStats_Notification microsec_ac_prep_user_files
         * @property {number|Long|null} [microsec_ac_exit] CClientMetrics_CloudAppSyncStats_Notification microsec_ac_exit
         * @property {number|Long|null} [microsec_build_sync_list] CClientMetrics_CloudAppSyncStats_Notification microsec_build_sync_list
         * @property {number|Long|null} [microsec_delete_files] CClientMetrics_CloudAppSyncStats_Notification microsec_delete_files
         * @property {number|Long|null} [microsec_download_files] CClientMetrics_CloudAppSyncStats_Notification microsec_download_files
         * @property {number|Long|null} [microsec_upload_files] CClientMetrics_CloudAppSyncStats_Notification microsec_upload_files
         * @property {number|null} [hardware_type] CClientMetrics_CloudAppSyncStats_Notification hardware_type
         * @property {number|null} [files_managed] CClientMetrics_CloudAppSyncStats_Notification files_managed
         */
    
        /**
         * Constructs a new CClientMetrics_CloudAppSyncStats_Notification.
         * @exports CClientMetrics_CloudAppSyncStats_Notification
         * @classdesc Represents a CClientMetrics_CloudAppSyncStats_Notification.
         * @implements ICClientMetrics_CloudAppSyncStats_Notification
         * @constructor
         * @param {ICClientMetrics_CloudAppSyncStats_Notification=} [properties] Properties to set
         */
        function CClientMetrics_CloudAppSyncStats_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification app_id.
         * @member {number} app_id
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.app_id = 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification platform_type.
         * @member {number} platform_type
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.platform_type = 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification preload.
         * @member {boolean} preload
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.preload = false;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification blocking_app_launch.
         * @member {boolean} blocking_app_launch
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.blocking_app_launch = false;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification files_uploaded.
         * @member {number} files_uploaded
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.files_uploaded = 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification files_downloaded.
         * @member {number} files_downloaded
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.files_downloaded = 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification files_deleted.
         * @member {number} files_deleted
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.files_deleted = 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification bytes_uploaded.
         * @member {number|Long} bytes_uploaded
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.bytes_uploaded = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification bytes_downloaded.
         * @member {number|Long} bytes_downloaded
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.bytes_downloaded = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_total.
         * @member {number|Long} microsec_total
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_total = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_init_caches.
         * @member {number|Long} microsec_init_caches
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_init_caches = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_validate_state.
         * @member {number|Long} microsec_validate_state
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_validate_state = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_ac_launch.
         * @member {number|Long} microsec_ac_launch
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_ac_launch = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_ac_prep_user_files.
         * @member {number|Long} microsec_ac_prep_user_files
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_ac_prep_user_files = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_ac_exit.
         * @member {number|Long} microsec_ac_exit
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_ac_exit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_build_sync_list.
         * @member {number|Long} microsec_build_sync_list
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_build_sync_list = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_delete_files.
         * @member {number|Long} microsec_delete_files
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_delete_files = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_download_files.
         * @member {number|Long} microsec_download_files
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_download_files = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification microsec_upload_files.
         * @member {number|Long} microsec_upload_files
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.microsec_upload_files = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification hardware_type.
         * @member {number} hardware_type
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.hardware_type = 0;
    
        /**
         * CClientMetrics_CloudAppSyncStats_Notification files_managed.
         * @member {number} files_managed
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.files_managed = 0;
    
        /**
         * Creates a new CClientMetrics_CloudAppSyncStats_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @static
         * @param {ICClientMetrics_CloudAppSyncStats_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_CloudAppSyncStats_Notification} CClientMetrics_CloudAppSyncStats_Notification instance
         */
        CClientMetrics_CloudAppSyncStats_Notification.create = function create(properties) {
            return new CClientMetrics_CloudAppSyncStats_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_CloudAppSyncStats_Notification message. Does not implicitly {@link CClientMetrics_CloudAppSyncStats_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @static
         * @param {ICClientMetrics_CloudAppSyncStats_Notification} message CClientMetrics_CloudAppSyncStats_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_CloudAppSyncStats_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.app_id);
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.platform_type);
            if (message.preload != null && message.hasOwnProperty("preload"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.preload);
            if (message.blocking_app_launch != null && message.hasOwnProperty("blocking_app_launch"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.blocking_app_launch);
            if (message.files_uploaded != null && message.hasOwnProperty("files_uploaded"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.files_uploaded);
            if (message.files_downloaded != null && message.hasOwnProperty("files_downloaded"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.files_downloaded);
            if (message.files_deleted != null && message.hasOwnProperty("files_deleted"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.files_deleted);
            if (message.bytes_uploaded != null && message.hasOwnProperty("bytes_uploaded"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.bytes_uploaded);
            if (message.bytes_downloaded != null && message.hasOwnProperty("bytes_downloaded"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.bytes_downloaded);
            if (message.microsec_total != null && message.hasOwnProperty("microsec_total"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.microsec_total);
            if (message.microsec_init_caches != null && message.hasOwnProperty("microsec_init_caches"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.microsec_init_caches);
            if (message.microsec_validate_state != null && message.hasOwnProperty("microsec_validate_state"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.microsec_validate_state);
            if (message.microsec_ac_launch != null && message.hasOwnProperty("microsec_ac_launch"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.microsec_ac_launch);
            if (message.microsec_ac_prep_user_files != null && message.hasOwnProperty("microsec_ac_prep_user_files"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint64(message.microsec_ac_prep_user_files);
            if (message.microsec_ac_exit != null && message.hasOwnProperty("microsec_ac_exit"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint64(message.microsec_ac_exit);
            if (message.microsec_build_sync_list != null && message.hasOwnProperty("microsec_build_sync_list"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.microsec_build_sync_list);
            if (message.microsec_delete_files != null && message.hasOwnProperty("microsec_delete_files"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint64(message.microsec_delete_files);
            if (message.microsec_download_files != null && message.hasOwnProperty("microsec_download_files"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.microsec_download_files);
            if (message.microsec_upload_files != null && message.hasOwnProperty("microsec_upload_files"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint64(message.microsec_upload_files);
            if (message.hardware_type != null && message.hasOwnProperty("hardware_type"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.hardware_type);
            if (message.files_managed != null && message.hasOwnProperty("files_managed"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.files_managed);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_CloudAppSyncStats_Notification message, length delimited. Does not implicitly {@link CClientMetrics_CloudAppSyncStats_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @static
         * @param {ICClientMetrics_CloudAppSyncStats_Notification} message CClientMetrics_CloudAppSyncStats_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_CloudAppSyncStats_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_CloudAppSyncStats_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_CloudAppSyncStats_Notification} CClientMetrics_CloudAppSyncStats_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_CloudAppSyncStats_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_CloudAppSyncStats_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.app_id = reader.uint32();
                    break;
                case 2:
                    message.platform_type = reader.uint32();
                    break;
                case 3:
                    message.preload = reader.bool();
                    break;
                case 4:
                    message.blocking_app_launch = reader.bool();
                    break;
                case 5:
                    message.files_uploaded = reader.uint32();
                    break;
                case 6:
                    message.files_downloaded = reader.uint32();
                    break;
                case 7:
                    message.files_deleted = reader.uint32();
                    break;
                case 8:
                    message.bytes_uploaded = reader.uint64();
                    break;
                case 9:
                    message.bytes_downloaded = reader.uint64();
                    break;
                case 10:
                    message.microsec_total = reader.uint64();
                    break;
                case 11:
                    message.microsec_init_caches = reader.uint64();
                    break;
                case 12:
                    message.microsec_validate_state = reader.uint64();
                    break;
                case 13:
                    message.microsec_ac_launch = reader.uint64();
                    break;
                case 14:
                    message.microsec_ac_prep_user_files = reader.uint64();
                    break;
                case 15:
                    message.microsec_ac_exit = reader.uint64();
                    break;
                case 16:
                    message.microsec_build_sync_list = reader.uint64();
                    break;
                case 17:
                    message.microsec_delete_files = reader.uint64();
                    break;
                case 18:
                    message.microsec_download_files = reader.uint64();
                    break;
                case 19:
                    message.microsec_upload_files = reader.uint64();
                    break;
                case 20:
                    message.hardware_type = reader.uint32();
                    break;
                case 21:
                    message.files_managed = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_CloudAppSyncStats_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_CloudAppSyncStats_Notification} CClientMetrics_CloudAppSyncStats_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_CloudAppSyncStats_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_CloudAppSyncStats_Notification message.
         * @function verify
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_CloudAppSyncStats_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                if (!$util.isInteger(message.app_id))
                    return "app_id: integer expected";
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                if (!$util.isInteger(message.platform_type))
                    return "platform_type: integer expected";
            if (message.preload != null && message.hasOwnProperty("preload"))
                if (typeof message.preload !== "boolean")
                    return "preload: boolean expected";
            if (message.blocking_app_launch != null && message.hasOwnProperty("blocking_app_launch"))
                if (typeof message.blocking_app_launch !== "boolean")
                    return "blocking_app_launch: boolean expected";
            if (message.files_uploaded != null && message.hasOwnProperty("files_uploaded"))
                if (!$util.isInteger(message.files_uploaded))
                    return "files_uploaded: integer expected";
            if (message.files_downloaded != null && message.hasOwnProperty("files_downloaded"))
                if (!$util.isInteger(message.files_downloaded))
                    return "files_downloaded: integer expected";
            if (message.files_deleted != null && message.hasOwnProperty("files_deleted"))
                if (!$util.isInteger(message.files_deleted))
                    return "files_deleted: integer expected";
            if (message.bytes_uploaded != null && message.hasOwnProperty("bytes_uploaded"))
                if (!$util.isInteger(message.bytes_uploaded) && !(message.bytes_uploaded && $util.isInteger(message.bytes_uploaded.low) && $util.isInteger(message.bytes_uploaded.high)))
                    return "bytes_uploaded: integer|Long expected";
            if (message.bytes_downloaded != null && message.hasOwnProperty("bytes_downloaded"))
                if (!$util.isInteger(message.bytes_downloaded) && !(message.bytes_downloaded && $util.isInteger(message.bytes_downloaded.low) && $util.isInteger(message.bytes_downloaded.high)))
                    return "bytes_downloaded: integer|Long expected";
            if (message.microsec_total != null && message.hasOwnProperty("microsec_total"))
                if (!$util.isInteger(message.microsec_total) && !(message.microsec_total && $util.isInteger(message.microsec_total.low) && $util.isInteger(message.microsec_total.high)))
                    return "microsec_total: integer|Long expected";
            if (message.microsec_init_caches != null && message.hasOwnProperty("microsec_init_caches"))
                if (!$util.isInteger(message.microsec_init_caches) && !(message.microsec_init_caches && $util.isInteger(message.microsec_init_caches.low) && $util.isInteger(message.microsec_init_caches.high)))
                    return "microsec_init_caches: integer|Long expected";
            if (message.microsec_validate_state != null && message.hasOwnProperty("microsec_validate_state"))
                if (!$util.isInteger(message.microsec_validate_state) && !(message.microsec_validate_state && $util.isInteger(message.microsec_validate_state.low) && $util.isInteger(message.microsec_validate_state.high)))
                    return "microsec_validate_state: integer|Long expected";
            if (message.microsec_ac_launch != null && message.hasOwnProperty("microsec_ac_launch"))
                if (!$util.isInteger(message.microsec_ac_launch) && !(message.microsec_ac_launch && $util.isInteger(message.microsec_ac_launch.low) && $util.isInteger(message.microsec_ac_launch.high)))
                    return "microsec_ac_launch: integer|Long expected";
            if (message.microsec_ac_prep_user_files != null && message.hasOwnProperty("microsec_ac_prep_user_files"))
                if (!$util.isInteger(message.microsec_ac_prep_user_files) && !(message.microsec_ac_prep_user_files && $util.isInteger(message.microsec_ac_prep_user_files.low) && $util.isInteger(message.microsec_ac_prep_user_files.high)))
                    return "microsec_ac_prep_user_files: integer|Long expected";
            if (message.microsec_ac_exit != null && message.hasOwnProperty("microsec_ac_exit"))
                if (!$util.isInteger(message.microsec_ac_exit) && !(message.microsec_ac_exit && $util.isInteger(message.microsec_ac_exit.low) && $util.isInteger(message.microsec_ac_exit.high)))
                    return "microsec_ac_exit: integer|Long expected";
            if (message.microsec_build_sync_list != null && message.hasOwnProperty("microsec_build_sync_list"))
                if (!$util.isInteger(message.microsec_build_sync_list) && !(message.microsec_build_sync_list && $util.isInteger(message.microsec_build_sync_list.low) && $util.isInteger(message.microsec_build_sync_list.high)))
                    return "microsec_build_sync_list: integer|Long expected";
            if (message.microsec_delete_files != null && message.hasOwnProperty("microsec_delete_files"))
                if (!$util.isInteger(message.microsec_delete_files) && !(message.microsec_delete_files && $util.isInteger(message.microsec_delete_files.low) && $util.isInteger(message.microsec_delete_files.high)))
                    return "microsec_delete_files: integer|Long expected";
            if (message.microsec_download_files != null && message.hasOwnProperty("microsec_download_files"))
                if (!$util.isInteger(message.microsec_download_files) && !(message.microsec_download_files && $util.isInteger(message.microsec_download_files.low) && $util.isInteger(message.microsec_download_files.high)))
                    return "microsec_download_files: integer|Long expected";
            if (message.microsec_upload_files != null && message.hasOwnProperty("microsec_upload_files"))
                if (!$util.isInteger(message.microsec_upload_files) && !(message.microsec_upload_files && $util.isInteger(message.microsec_upload_files.low) && $util.isInteger(message.microsec_upload_files.high)))
                    return "microsec_upload_files: integer|Long expected";
            if (message.hardware_type != null && message.hasOwnProperty("hardware_type"))
                if (!$util.isInteger(message.hardware_type))
                    return "hardware_type: integer expected";
            if (message.files_managed != null && message.hasOwnProperty("files_managed"))
                if (!$util.isInteger(message.files_managed))
                    return "files_managed: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_CloudAppSyncStats_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_CloudAppSyncStats_Notification} CClientMetrics_CloudAppSyncStats_Notification
         */
        CClientMetrics_CloudAppSyncStats_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_CloudAppSyncStats_Notification)
                return object;
            var message = new $root.CClientMetrics_CloudAppSyncStats_Notification();
            if (object.app_id != null)
                message.app_id = object.app_id >>> 0;
            if (object.platform_type != null)
                message.platform_type = object.platform_type >>> 0;
            if (object.preload != null)
                message.preload = Boolean(object.preload);
            if (object.blocking_app_launch != null)
                message.blocking_app_launch = Boolean(object.blocking_app_launch);
            if (object.files_uploaded != null)
                message.files_uploaded = object.files_uploaded >>> 0;
            if (object.files_downloaded != null)
                message.files_downloaded = object.files_downloaded >>> 0;
            if (object.files_deleted != null)
                message.files_deleted = object.files_deleted >>> 0;
            if (object.bytes_uploaded != null)
                if ($util.Long)
                    (message.bytes_uploaded = $util.Long.fromValue(object.bytes_uploaded)).unsigned = true;
                else if (typeof object.bytes_uploaded === "string")
                    message.bytes_uploaded = parseInt(object.bytes_uploaded, 10);
                else if (typeof object.bytes_uploaded === "number")
                    message.bytes_uploaded = object.bytes_uploaded;
                else if (typeof object.bytes_uploaded === "object")
                    message.bytes_uploaded = new $util.LongBits(object.bytes_uploaded.low >>> 0, object.bytes_uploaded.high >>> 0).toNumber(true);
            if (object.bytes_downloaded != null)
                if ($util.Long)
                    (message.bytes_downloaded = $util.Long.fromValue(object.bytes_downloaded)).unsigned = true;
                else if (typeof object.bytes_downloaded === "string")
                    message.bytes_downloaded = parseInt(object.bytes_downloaded, 10);
                else if (typeof object.bytes_downloaded === "number")
                    message.bytes_downloaded = object.bytes_downloaded;
                else if (typeof object.bytes_downloaded === "object")
                    message.bytes_downloaded = new $util.LongBits(object.bytes_downloaded.low >>> 0, object.bytes_downloaded.high >>> 0).toNumber(true);
            if (object.microsec_total != null)
                if ($util.Long)
                    (message.microsec_total = $util.Long.fromValue(object.microsec_total)).unsigned = true;
                else if (typeof object.microsec_total === "string")
                    message.microsec_total = parseInt(object.microsec_total, 10);
                else if (typeof object.microsec_total === "number")
                    message.microsec_total = object.microsec_total;
                else if (typeof object.microsec_total === "object")
                    message.microsec_total = new $util.LongBits(object.microsec_total.low >>> 0, object.microsec_total.high >>> 0).toNumber(true);
            if (object.microsec_init_caches != null)
                if ($util.Long)
                    (message.microsec_init_caches = $util.Long.fromValue(object.microsec_init_caches)).unsigned = true;
                else if (typeof object.microsec_init_caches === "string")
                    message.microsec_init_caches = parseInt(object.microsec_init_caches, 10);
                else if (typeof object.microsec_init_caches === "number")
                    message.microsec_init_caches = object.microsec_init_caches;
                else if (typeof object.microsec_init_caches === "object")
                    message.microsec_init_caches = new $util.LongBits(object.microsec_init_caches.low >>> 0, object.microsec_init_caches.high >>> 0).toNumber(true);
            if (object.microsec_validate_state != null)
                if ($util.Long)
                    (message.microsec_validate_state = $util.Long.fromValue(object.microsec_validate_state)).unsigned = true;
                else if (typeof object.microsec_validate_state === "string")
                    message.microsec_validate_state = parseInt(object.microsec_validate_state, 10);
                else if (typeof object.microsec_validate_state === "number")
                    message.microsec_validate_state = object.microsec_validate_state;
                else if (typeof object.microsec_validate_state === "object")
                    message.microsec_validate_state = new $util.LongBits(object.microsec_validate_state.low >>> 0, object.microsec_validate_state.high >>> 0).toNumber(true);
            if (object.microsec_ac_launch != null)
                if ($util.Long)
                    (message.microsec_ac_launch = $util.Long.fromValue(object.microsec_ac_launch)).unsigned = true;
                else if (typeof object.microsec_ac_launch === "string")
                    message.microsec_ac_launch = parseInt(object.microsec_ac_launch, 10);
                else if (typeof object.microsec_ac_launch === "number")
                    message.microsec_ac_launch = object.microsec_ac_launch;
                else if (typeof object.microsec_ac_launch === "object")
                    message.microsec_ac_launch = new $util.LongBits(object.microsec_ac_launch.low >>> 0, object.microsec_ac_launch.high >>> 0).toNumber(true);
            if (object.microsec_ac_prep_user_files != null)
                if ($util.Long)
                    (message.microsec_ac_prep_user_files = $util.Long.fromValue(object.microsec_ac_prep_user_files)).unsigned = true;
                else if (typeof object.microsec_ac_prep_user_files === "string")
                    message.microsec_ac_prep_user_files = parseInt(object.microsec_ac_prep_user_files, 10);
                else if (typeof object.microsec_ac_prep_user_files === "number")
                    message.microsec_ac_prep_user_files = object.microsec_ac_prep_user_files;
                else if (typeof object.microsec_ac_prep_user_files === "object")
                    message.microsec_ac_prep_user_files = new $util.LongBits(object.microsec_ac_prep_user_files.low >>> 0, object.microsec_ac_prep_user_files.high >>> 0).toNumber(true);
            if (object.microsec_ac_exit != null)
                if ($util.Long)
                    (message.microsec_ac_exit = $util.Long.fromValue(object.microsec_ac_exit)).unsigned = true;
                else if (typeof object.microsec_ac_exit === "string")
                    message.microsec_ac_exit = parseInt(object.microsec_ac_exit, 10);
                else if (typeof object.microsec_ac_exit === "number")
                    message.microsec_ac_exit = object.microsec_ac_exit;
                else if (typeof object.microsec_ac_exit === "object")
                    message.microsec_ac_exit = new $util.LongBits(object.microsec_ac_exit.low >>> 0, object.microsec_ac_exit.high >>> 0).toNumber(true);
            if (object.microsec_build_sync_list != null)
                if ($util.Long)
                    (message.microsec_build_sync_list = $util.Long.fromValue(object.microsec_build_sync_list)).unsigned = true;
                else if (typeof object.microsec_build_sync_list === "string")
                    message.microsec_build_sync_list = parseInt(object.microsec_build_sync_list, 10);
                else if (typeof object.microsec_build_sync_list === "number")
                    message.microsec_build_sync_list = object.microsec_build_sync_list;
                else if (typeof object.microsec_build_sync_list === "object")
                    message.microsec_build_sync_list = new $util.LongBits(object.microsec_build_sync_list.low >>> 0, object.microsec_build_sync_list.high >>> 0).toNumber(true);
            if (object.microsec_delete_files != null)
                if ($util.Long)
                    (message.microsec_delete_files = $util.Long.fromValue(object.microsec_delete_files)).unsigned = true;
                else if (typeof object.microsec_delete_files === "string")
                    message.microsec_delete_files = parseInt(object.microsec_delete_files, 10);
                else if (typeof object.microsec_delete_files === "number")
                    message.microsec_delete_files = object.microsec_delete_files;
                else if (typeof object.microsec_delete_files === "object")
                    message.microsec_delete_files = new $util.LongBits(object.microsec_delete_files.low >>> 0, object.microsec_delete_files.high >>> 0).toNumber(true);
            if (object.microsec_download_files != null)
                if ($util.Long)
                    (message.microsec_download_files = $util.Long.fromValue(object.microsec_download_files)).unsigned = true;
                else if (typeof object.microsec_download_files === "string")
                    message.microsec_download_files = parseInt(object.microsec_download_files, 10);
                else if (typeof object.microsec_download_files === "number")
                    message.microsec_download_files = object.microsec_download_files;
                else if (typeof object.microsec_download_files === "object")
                    message.microsec_download_files = new $util.LongBits(object.microsec_download_files.low >>> 0, object.microsec_download_files.high >>> 0).toNumber(true);
            if (object.microsec_upload_files != null)
                if ($util.Long)
                    (message.microsec_upload_files = $util.Long.fromValue(object.microsec_upload_files)).unsigned = true;
                else if (typeof object.microsec_upload_files === "string")
                    message.microsec_upload_files = parseInt(object.microsec_upload_files, 10);
                else if (typeof object.microsec_upload_files === "number")
                    message.microsec_upload_files = object.microsec_upload_files;
                else if (typeof object.microsec_upload_files === "object")
                    message.microsec_upload_files = new $util.LongBits(object.microsec_upload_files.low >>> 0, object.microsec_upload_files.high >>> 0).toNumber(true);
            if (object.hardware_type != null)
                message.hardware_type = object.hardware_type >>> 0;
            if (object.files_managed != null)
                message.files_managed = object.files_managed >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_CloudAppSyncStats_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @static
         * @param {CClientMetrics_CloudAppSyncStats_Notification} message CClientMetrics_CloudAppSyncStats_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_CloudAppSyncStats_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.app_id = 0;
                object.platform_type = 0;
                object.preload = false;
                object.blocking_app_launch = false;
                object.files_uploaded = 0;
                object.files_downloaded = 0;
                object.files_deleted = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_uploaded = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_uploaded = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_downloaded = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_downloaded = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_total = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_init_caches = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_init_caches = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_validate_state = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_validate_state = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_ac_launch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_ac_launch = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_ac_prep_user_files = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_ac_prep_user_files = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_ac_exit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_ac_exit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_build_sync_list = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_build_sync_list = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_delete_files = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_delete_files = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_download_files = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_download_files = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.microsec_upload_files = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.microsec_upload_files = options.longs === String ? "0" : 0;
                object.hardware_type = 0;
                object.files_managed = 0;
            }
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                object.app_id = message.app_id;
            if (message.platform_type != null && message.hasOwnProperty("platform_type"))
                object.platform_type = message.platform_type;
            if (message.preload != null && message.hasOwnProperty("preload"))
                object.preload = message.preload;
            if (message.blocking_app_launch != null && message.hasOwnProperty("blocking_app_launch"))
                object.blocking_app_launch = message.blocking_app_launch;
            if (message.files_uploaded != null && message.hasOwnProperty("files_uploaded"))
                object.files_uploaded = message.files_uploaded;
            if (message.files_downloaded != null && message.hasOwnProperty("files_downloaded"))
                object.files_downloaded = message.files_downloaded;
            if (message.files_deleted != null && message.hasOwnProperty("files_deleted"))
                object.files_deleted = message.files_deleted;
            if (message.bytes_uploaded != null && message.hasOwnProperty("bytes_uploaded"))
                if (typeof message.bytes_uploaded === "number")
                    object.bytes_uploaded = options.longs === String ? String(message.bytes_uploaded) : message.bytes_uploaded;
                else
                    object.bytes_uploaded = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_uploaded) : options.longs === Number ? new $util.LongBits(message.bytes_uploaded.low >>> 0, message.bytes_uploaded.high >>> 0).toNumber(true) : message.bytes_uploaded;
            if (message.bytes_downloaded != null && message.hasOwnProperty("bytes_downloaded"))
                if (typeof message.bytes_downloaded === "number")
                    object.bytes_downloaded = options.longs === String ? String(message.bytes_downloaded) : message.bytes_downloaded;
                else
                    object.bytes_downloaded = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_downloaded) : options.longs === Number ? new $util.LongBits(message.bytes_downloaded.low >>> 0, message.bytes_downloaded.high >>> 0).toNumber(true) : message.bytes_downloaded;
            if (message.microsec_total != null && message.hasOwnProperty("microsec_total"))
                if (typeof message.microsec_total === "number")
                    object.microsec_total = options.longs === String ? String(message.microsec_total) : message.microsec_total;
                else
                    object.microsec_total = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_total) : options.longs === Number ? new $util.LongBits(message.microsec_total.low >>> 0, message.microsec_total.high >>> 0).toNumber(true) : message.microsec_total;
            if (message.microsec_init_caches != null && message.hasOwnProperty("microsec_init_caches"))
                if (typeof message.microsec_init_caches === "number")
                    object.microsec_init_caches = options.longs === String ? String(message.microsec_init_caches) : message.microsec_init_caches;
                else
                    object.microsec_init_caches = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_init_caches) : options.longs === Number ? new $util.LongBits(message.microsec_init_caches.low >>> 0, message.microsec_init_caches.high >>> 0).toNumber(true) : message.microsec_init_caches;
            if (message.microsec_validate_state != null && message.hasOwnProperty("microsec_validate_state"))
                if (typeof message.microsec_validate_state === "number")
                    object.microsec_validate_state = options.longs === String ? String(message.microsec_validate_state) : message.microsec_validate_state;
                else
                    object.microsec_validate_state = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_validate_state) : options.longs === Number ? new $util.LongBits(message.microsec_validate_state.low >>> 0, message.microsec_validate_state.high >>> 0).toNumber(true) : message.microsec_validate_state;
            if (message.microsec_ac_launch != null && message.hasOwnProperty("microsec_ac_launch"))
                if (typeof message.microsec_ac_launch === "number")
                    object.microsec_ac_launch = options.longs === String ? String(message.microsec_ac_launch) : message.microsec_ac_launch;
                else
                    object.microsec_ac_launch = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_ac_launch) : options.longs === Number ? new $util.LongBits(message.microsec_ac_launch.low >>> 0, message.microsec_ac_launch.high >>> 0).toNumber(true) : message.microsec_ac_launch;
            if (message.microsec_ac_prep_user_files != null && message.hasOwnProperty("microsec_ac_prep_user_files"))
                if (typeof message.microsec_ac_prep_user_files === "number")
                    object.microsec_ac_prep_user_files = options.longs === String ? String(message.microsec_ac_prep_user_files) : message.microsec_ac_prep_user_files;
                else
                    object.microsec_ac_prep_user_files = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_ac_prep_user_files) : options.longs === Number ? new $util.LongBits(message.microsec_ac_prep_user_files.low >>> 0, message.microsec_ac_prep_user_files.high >>> 0).toNumber(true) : message.microsec_ac_prep_user_files;
            if (message.microsec_ac_exit != null && message.hasOwnProperty("microsec_ac_exit"))
                if (typeof message.microsec_ac_exit === "number")
                    object.microsec_ac_exit = options.longs === String ? String(message.microsec_ac_exit) : message.microsec_ac_exit;
                else
                    object.microsec_ac_exit = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_ac_exit) : options.longs === Number ? new $util.LongBits(message.microsec_ac_exit.low >>> 0, message.microsec_ac_exit.high >>> 0).toNumber(true) : message.microsec_ac_exit;
            if (message.microsec_build_sync_list != null && message.hasOwnProperty("microsec_build_sync_list"))
                if (typeof message.microsec_build_sync_list === "number")
                    object.microsec_build_sync_list = options.longs === String ? String(message.microsec_build_sync_list) : message.microsec_build_sync_list;
                else
                    object.microsec_build_sync_list = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_build_sync_list) : options.longs === Number ? new $util.LongBits(message.microsec_build_sync_list.low >>> 0, message.microsec_build_sync_list.high >>> 0).toNumber(true) : message.microsec_build_sync_list;
            if (message.microsec_delete_files != null && message.hasOwnProperty("microsec_delete_files"))
                if (typeof message.microsec_delete_files === "number")
                    object.microsec_delete_files = options.longs === String ? String(message.microsec_delete_files) : message.microsec_delete_files;
                else
                    object.microsec_delete_files = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_delete_files) : options.longs === Number ? new $util.LongBits(message.microsec_delete_files.low >>> 0, message.microsec_delete_files.high >>> 0).toNumber(true) : message.microsec_delete_files;
            if (message.microsec_download_files != null && message.hasOwnProperty("microsec_download_files"))
                if (typeof message.microsec_download_files === "number")
                    object.microsec_download_files = options.longs === String ? String(message.microsec_download_files) : message.microsec_download_files;
                else
                    object.microsec_download_files = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_download_files) : options.longs === Number ? new $util.LongBits(message.microsec_download_files.low >>> 0, message.microsec_download_files.high >>> 0).toNumber(true) : message.microsec_download_files;
            if (message.microsec_upload_files != null && message.hasOwnProperty("microsec_upload_files"))
                if (typeof message.microsec_upload_files === "number")
                    object.microsec_upload_files = options.longs === String ? String(message.microsec_upload_files) : message.microsec_upload_files;
                else
                    object.microsec_upload_files = options.longs === String ? $util.Long.prototype.toString.call(message.microsec_upload_files) : options.longs === Number ? new $util.LongBits(message.microsec_upload_files.low >>> 0, message.microsec_upload_files.high >>> 0).toNumber(true) : message.microsec_upload_files;
            if (message.hardware_type != null && message.hasOwnProperty("hardware_type"))
                object.hardware_type = message.hardware_type;
            if (message.files_managed != null && message.hasOwnProperty("files_managed"))
                object.files_managed = message.files_managed;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_CloudAppSyncStats_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_CloudAppSyncStats_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_CloudAppSyncStats_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_CloudAppSyncStats_Notification;
    })();
    
    $root.CClientMetrics_ContentDownloadResponse_Counts_Notification = (function() {
    
        /**
         * Properties of a CClientMetrics_ContentDownloadResponse_Counts_Notification.
         * @exports ICClientMetrics_ContentDownloadResponse_Counts_Notification
         * @interface ICClientMetrics_ContentDownloadResponse_Counts_Notification
         * @property {number|null} [cell_id] CClientMetrics_ContentDownloadResponse_Counts_Notification cell_id
         * @property {ICClientMetrics_ContentDownloadResponse_Hosts|null} [data] CClientMetrics_ContentDownloadResponse_Counts_Notification data
         */
    
        /**
         * Constructs a new CClientMetrics_ContentDownloadResponse_Counts_Notification.
         * @exports CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @classdesc Represents a CClientMetrics_ContentDownloadResponse_Counts_Notification.
         * @implements ICClientMetrics_ContentDownloadResponse_Counts_Notification
         * @constructor
         * @param {ICClientMetrics_ContentDownloadResponse_Counts_Notification=} [properties] Properties to set
         */
        function CClientMetrics_ContentDownloadResponse_Counts_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts_Notification cell_id.
         * @member {number} cell_id
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.prototype.cell_id = 0;
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts_Notification data.
         * @member {ICClientMetrics_ContentDownloadResponse_Hosts|null|undefined} data
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.prototype.data = null;
    
        /**
         * Creates a new CClientMetrics_ContentDownloadResponse_Counts_Notification instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Counts_Notification=} [properties] Properties to set
         * @returns {CClientMetrics_ContentDownloadResponse_Counts_Notification} CClientMetrics_ContentDownloadResponse_Counts_Notification instance
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.create = function create(properties) {
            return new CClientMetrics_ContentDownloadResponse_Counts_Notification(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentDownloadResponse_Counts_Notification message. Does not implicitly {@link CClientMetrics_ContentDownloadResponse_Counts_Notification.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Counts_Notification} message CClientMetrics_ContentDownloadResponse_Counts_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cell_id);
            if (message.data != null && message.hasOwnProperty("data"))
                $root.CClientMetrics_ContentDownloadResponse_Hosts.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentDownloadResponse_Counts_Notification message, length delimited. Does not implicitly {@link CClientMetrics_ContentDownloadResponse_Counts_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Counts_Notification} message CClientMetrics_ContentDownloadResponse_Counts_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ContentDownloadResponse_Counts_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ContentDownloadResponse_Counts_Notification} CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ContentDownloadResponse_Counts_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cell_id = reader.uint32();
                    break;
                case 2:
                    message.data = $root.CClientMetrics_ContentDownloadResponse_Hosts.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ContentDownloadResponse_Counts_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ContentDownloadResponse_Counts_Notification} CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ContentDownloadResponse_Counts_Notification message.
         * @function verify
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                if (!$util.isInteger(message.cell_id))
                    return "cell_id: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.CClientMetrics_ContentDownloadResponse_Hosts.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ContentDownloadResponse_Counts_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ContentDownloadResponse_Counts_Notification} CClientMetrics_ContentDownloadResponse_Counts_Notification
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ContentDownloadResponse_Counts_Notification)
                return object;
            var message = new $root.CClientMetrics_ContentDownloadResponse_Counts_Notification();
            if (object.cell_id != null)
                message.cell_id = object.cell_id >>> 0;
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".CClientMetrics_ContentDownloadResponse_Counts_Notification.data: object expected");
                message.data = $root.CClientMetrics_ContentDownloadResponse_Hosts.fromObject(object.data);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ContentDownloadResponse_Counts_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @static
         * @param {CClientMetrics_ContentDownloadResponse_Counts_Notification} message CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cell_id = 0;
                object.data = null;
            }
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                object.cell_id = message.cell_id;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.CClientMetrics_ContentDownloadResponse_Hosts.toObject(message.data, options);
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ContentDownloadResponse_Counts_Notification to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ContentDownloadResponse_Counts_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ContentDownloadResponse_Counts_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_ContentDownloadResponse_Counts_Notification;
    })();
    
    $root.ClientMetrics = (function() {
    
        /**
         * Constructs a new ClientMetrics service.
         * @exports ClientMetrics
         * @classdesc Represents a ClientMetrics
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ClientMetrics(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (ClientMetrics.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ClientMetrics;
    
        /**
         * Creates new ClientMetrics service using the specified rpc implementation.
         * @function create
         * @memberof ClientMetrics
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ClientMetrics} RPC service. Useful where requests and/or responses are streamed.
         */
        ClientMetrics.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link ClientMetrics#clientAppInterfaceStatsReport}.
         * @memberof ClientMetrics
         * @typedef ClientAppInterfaceStatsReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ClientAppInterfaceStatsReport.
         * @function clientAppInterfaceStatsReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_AppInterfaceStats_Notification} request CClientMetrics_AppInterfaceStats_Notification message or plain object
         * @param {ClientMetrics.ClientAppInterfaceStatsReportCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.clientAppInterfaceStatsReport = function clientAppInterfaceStatsReport(request, callback) {
            return this.rpcCall(clientAppInterfaceStatsReport, $root.CClientMetrics_AppInterfaceStats_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ClientAppInterfaceStatsReport" });
    
        /**
         * Calls ClientAppInterfaceStatsReport.
         * @function clientAppInterfaceStatsReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_AppInterfaceStats_Notification} request CClientMetrics_AppInterfaceStats_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ClientMetrics#clientIPv6ConnectivityReport}.
         * @memberof ClientMetrics
         * @typedef ClientIPv6ConnectivityReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ClientIPv6ConnectivityReport.
         * @function clientIPv6ConnectivityReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_IPv6Connectivity_Notification} request CClientMetrics_IPv6Connectivity_Notification message or plain object
         * @param {ClientMetrics.ClientIPv6ConnectivityReportCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.clientIPv6ConnectivityReport = function clientIPv6ConnectivityReport(request, callback) {
            return this.rpcCall(clientIPv6ConnectivityReport, $root.CClientMetrics_IPv6Connectivity_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ClientIPv6ConnectivityReport" });
    
        /**
         * Calls ClientIPv6ConnectivityReport.
         * @function clientIPv6ConnectivityReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_IPv6Connectivity_Notification} request CClientMetrics_IPv6Connectivity_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ClientMetrics#steamPipeWorkStatsReport}.
         * @memberof ClientMetrics
         * @typedef SteamPipeWorkStatsReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls SteamPipeWorkStatsReport.
         * @function steamPipeWorkStatsReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_SteamPipeWorkStats_Notification} request CClientMetrics_SteamPipeWorkStats_Notification message or plain object
         * @param {ClientMetrics.SteamPipeWorkStatsReportCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.steamPipeWorkStatsReport = function steamPipeWorkStatsReport(request, callback) {
            return this.rpcCall(steamPipeWorkStatsReport, $root.CClientMetrics_SteamPipeWorkStats_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "SteamPipeWorkStatsReport" });
    
        /**
         * Calls SteamPipeWorkStatsReport.
         * @function steamPipeWorkStatsReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_SteamPipeWorkStats_Notification} request CClientMetrics_SteamPipeWorkStats_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ClientMetrics#reportClientError}.
         * @memberof ClientMetrics
         * @typedef ReportClientErrorCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ReportClientError.
         * @function reportClientError
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_ReportClientError_Notification} request CClientMetrics_ReportClientError_Notification message or plain object
         * @param {ClientMetrics.ReportClientErrorCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.reportClientError = function reportClientError(request, callback) {
            return this.rpcCall(reportClientError, $root.CClientMetrics_ReportClientError_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ReportClientError" });
    
        /**
         * Calls ReportClientError.
         * @function reportClientError
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_ReportClientError_Notification} request CClientMetrics_ReportClientError_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ClientMetrics#clientBootstrapReport}.
         * @memberof ClientMetrics
         * @typedef ClientBootstrapReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ClientBootstrapReport.
         * @function clientBootstrapReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_ClientBootstrap_Notification} request CClientMetrics_ClientBootstrap_Notification message or plain object
         * @param {ClientMetrics.ClientBootstrapReportCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.clientBootstrapReport = function clientBootstrapReport(request, callback) {
            return this.rpcCall(clientBootstrapReport, $root.CClientMetrics_ClientBootstrap_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ClientBootstrapReport" });
    
        /**
         * Calls ClientBootstrapReport.
         * @function clientBootstrapReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_ClientBootstrap_Notification} request CClientMetrics_ClientBootstrap_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ClientMetrics#clientDownloadRatesReport}.
         * @memberof ClientMetrics
         * @typedef ClientDownloadRatesReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ClientDownloadRatesReport.
         * @function clientDownloadRatesReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_DownloadRates_Notification} request CClientMetrics_DownloadRates_Notification message or plain object
         * @param {ClientMetrics.ClientDownloadRatesReportCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.clientDownloadRatesReport = function clientDownloadRatesReport(request, callback) {
            return this.rpcCall(clientDownloadRatesReport, $root.CClientMetrics_DownloadRates_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ClientDownloadRatesReport" });
    
        /**
         * Calls ClientDownloadRatesReport.
         * @function clientDownloadRatesReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_DownloadRates_Notification} request CClientMetrics_DownloadRates_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ClientMetrics#clientContentValidationReport}.
         * @memberof ClientMetrics
         * @typedef ClientContentValidationReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ClientContentValidationReport.
         * @function clientContentValidationReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_ContentValidation_Notification} request CClientMetrics_ContentValidation_Notification message or plain object
         * @param {ClientMetrics.ClientContentValidationReportCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.clientContentValidationReport = function clientContentValidationReport(request, callback) {
            return this.rpcCall(clientContentValidationReport, $root.CClientMetrics_ContentValidation_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ClientContentValidationReport" });
    
        /**
         * Calls ClientContentValidationReport.
         * @function clientContentValidationReport
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_ContentValidation_Notification} request CClientMetrics_ContentValidation_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ClientMetrics#clientCloudAppSyncStats}.
         * @memberof ClientMetrics
         * @typedef ClientCloudAppSyncStatsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ClientCloudAppSyncStats.
         * @function clientCloudAppSyncStats
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_CloudAppSyncStats_Notification} request CClientMetrics_CloudAppSyncStats_Notification message or plain object
         * @param {ClientMetrics.ClientCloudAppSyncStatsCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.clientCloudAppSyncStats = function clientCloudAppSyncStats(request, callback) {
            return this.rpcCall(clientCloudAppSyncStats, $root.CClientMetrics_CloudAppSyncStats_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ClientCloudAppSyncStats" });
    
        /**
         * Calls ClientCloudAppSyncStats.
         * @function clientCloudAppSyncStats
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_CloudAppSyncStats_Notification} request CClientMetrics_CloudAppSyncStats_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link ClientMetrics#clientDownloadResponseCodeCounts}.
         * @memberof ClientMetrics
         * @typedef ClientDownloadResponseCodeCountsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ClientDownloadResponseCodeCounts.
         * @function clientDownloadResponseCodeCounts
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_ContentDownloadResponse_Counts_Notification} request CClientMetrics_ContentDownloadResponse_Counts_Notification message or plain object
         * @param {ClientMetrics.ClientDownloadResponseCodeCountsCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClientMetrics.prototype.clientDownloadResponseCodeCounts = function clientDownloadResponseCodeCounts(request, callback) {
            return this.rpcCall(clientDownloadResponseCodeCounts, $root.CClientMetrics_ContentDownloadResponse_Counts_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ClientDownloadResponseCodeCounts" });
    
        /**
         * Calls ClientDownloadResponseCodeCounts.
         * @function clientDownloadResponseCodeCounts
         * @memberof ClientMetrics
         * @instance
         * @param {ICClientMetrics_ContentDownloadResponse_Counts_Notification} request CClientMetrics_ContentDownloadResponse_Counts_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        return ClientMetrics;
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
                 * @property {string|null} [syntax] FileDescriptorProto syntax
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
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
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
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
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
                        case 12:
                            message.syntax = reader.string();
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
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
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
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
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
                        object.syntax = "";
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
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
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
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reserved_range] DescriptorProto reserved_range
                 * @property {Array.<string>|null} [reserved_name] DescriptorProto reserved_name
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
                    this.reserved_range = [];
                    this.reserved_name = [];
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
                 * DescriptorProto reserved_range.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reserved_range
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reserved_range = $util.emptyArray;
    
                /**
                 * DescriptorProto reserved_name.
                 * @member {Array.<string>} reserved_name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reserved_name = $util.emptyArray;
    
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
                    if (message.reserved_range != null && message.reserved_range.length)
                        for (var i = 0; i < message.reserved_range.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reserved_name != null && message.reserved_name.length)
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
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
                        case 9:
                            if (!(message.reserved_range && message.reserved_range.length))
                                message.reserved_range = [];
                            message.reserved_range.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reserved_name && message.reserved_name.length))
                                message.reserved_name = [];
                            message.reserved_name.push(reader.string());
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
                    if (message.reserved_range != null && message.hasOwnProperty("reserved_range")) {
                        if (!Array.isArray(message.reserved_range))
                            return "reserved_range: array expected";
                        for (var i = 0; i < message.reserved_range.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reserved_range[i]);
                            if (error)
                                return "reserved_range." + error;
                        }
                    }
                    if (message.reserved_name != null && message.hasOwnProperty("reserved_name")) {
                        if (!Array.isArray(message.reserved_name))
                            return "reserved_name: array expected";
                        for (var i = 0; i < message.reserved_name.length; ++i)
                            if (!$util.isString(message.reserved_name[i]))
                                return "reserved_name: string[] expected";
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
                    if (object.reserved_range) {
                        if (!Array.isArray(object.reserved_range))
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_range: array expected");
                        message.reserved_range = [];
                        for (var i = 0; i < object.reserved_range.length; ++i) {
                            if (typeof object.reserved_range[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reserved_range: object expected");
                            message.reserved_range[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reserved_range[i]);
                        }
                    }
                    if (object.reserved_name) {
                        if (!Array.isArray(object.reserved_name))
                            throw TypeError(".google.protobuf.DescriptorProto.reserved_name: array expected");
                        message.reserved_name = [];
                        for (var i = 0; i < object.reserved_name.length; ++i)
                            message.reserved_name[i] = String(object.reserved_name[i]);
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
                        object.reserved_range = [];
                        object.reserved_name = [];
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
                    if (message.reserved_range && message.reserved_range.length) {
                        object.reserved_range = [];
                        for (var j = 0; j < message.reserved_range.length; ++j)
                            object.reserved_range[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reserved_range[j], options);
                    }
                    if (message.reserved_name && message.reserved_name.length) {
                        object.reserved_name = [];
                        for (var j = 0; j < message.reserved_name.length; ++j)
                            object.reserved_name[j] = message.reserved_name[j];
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
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
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
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
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
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
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
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReservedRange;
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
                 * @property {string|null} [json_name] FieldDescriptorProto json_name
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
                 * FieldDescriptorProto json_name.
                 * @member {string} json_name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.json_name = "";
    
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
                    if (message.json_name != null && message.hasOwnProperty("json_name"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
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
                        case 10:
                            message.json_name = reader.string();
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
                    if (message.json_name != null && message.hasOwnProperty("json_name"))
                        if (!$util.isString(message.json_name))
                            return "json_name: string expected";
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
                    if (object.json_name != null)
                        message.json_name = String(object.json_name);
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
                        object.json_name = "";
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
                    if (message.json_name != null && message.hasOwnProperty("json_name"))
                        object.json_name = message.json_name;
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
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
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
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
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
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        case 2:
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
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
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
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
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
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
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
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
                 * @property {boolean|null} [client_streaming] MethodDescriptorProto client_streaming
                 * @property {boolean|null} [server_streaming] MethodDescriptorProto server_streaming
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
                 * MethodDescriptorProto client_streaming.
                 * @member {boolean} client_streaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.client_streaming = false;
    
                /**
                 * MethodDescriptorProto server_streaming.
                 * @member {boolean} server_streaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.server_streaming = false;
    
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
                    if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                    if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
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
                        case 5:
                            message.client_streaming = reader.bool();
                            break;
                        case 6:
                            message.server_streaming = reader.bool();
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
                    if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                        if (typeof message.client_streaming !== "boolean")
                            return "client_streaming: boolean expected";
                    if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                        if (typeof message.server_streaming !== "boolean")
                            return "server_streaming: boolean expected";
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
                    if (object.client_streaming != null)
                        message.client_streaming = Boolean(object.client_streaming);
                    if (object.server_streaming != null)
                        message.server_streaming = Boolean(object.server_streaming);
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
                        object.client_streaming = false;
                        object.server_streaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.input_type != null && message.hasOwnProperty("input_type"))
                        object.input_type = message.input_type;
                    if (message.output_type != null && message.hasOwnProperty("output_type"))
                        object.output_type = message.output_type;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.client_streaming != null && message.hasOwnProperty("client_streaming"))
                        object.client_streaming = message.client_streaming;
                    if (message.server_streaming != null && message.hasOwnProperty("server_streaming"))
                        object.server_streaming = message.server_streaming;
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
                 * @property {boolean|null} [cc_enable_arenas] FileOptions cc_enable_arenas
                 * @property {string|null} [objc_class_prefix] FileOptions objc_class_prefix
                 * @property {string|null} [csharp_namespace] FileOptions csharp_namespace
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
                 * FileOptions cc_enable_arenas.
                 * @member {boolean} cc_enable_arenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.cc_enable_arenas = false;
    
                /**
                 * FileOptions objc_class_prefix.
                 * @member {string} objc_class_prefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objc_class_prefix = "";
    
                /**
                 * FileOptions csharp_namespace.
                 * @member {string} csharp_namespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharp_namespace = "";
    
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
                    if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                    if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                    if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
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
                        case 31:
                            message.cc_enable_arenas = reader.bool();
                            break;
                        case 36:
                            message.objc_class_prefix = reader.string();
                            break;
                        case 37:
                            message.csharp_namespace = reader.string();
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
                    if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                        if (typeof message.cc_enable_arenas !== "boolean")
                            return "cc_enable_arenas: boolean expected";
                    if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                        if (!$util.isString(message.objc_class_prefix))
                            return "objc_class_prefix: string expected";
                    if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                        if (!$util.isString(message.csharp_namespace))
                            return "csharp_namespace: string expected";
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
                    if (object.cc_enable_arenas != null)
                        message.cc_enable_arenas = Boolean(object.cc_enable_arenas);
                    if (object.objc_class_prefix != null)
                        message.objc_class_prefix = String(object.objc_class_prefix);
                    if (object.csharp_namespace != null)
                        message.csharp_namespace = String(object.csharp_namespace);
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
                        object.cc_enable_arenas = false;
                        object.objc_class_prefix = "";
                        object.csharp_namespace = "";
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
                    if (message.cc_enable_arenas != null && message.hasOwnProperty("cc_enable_arenas"))
                        object.cc_enable_arenas = message.cc_enable_arenas;
                    if (message.objc_class_prefix != null && message.hasOwnProperty("objc_class_prefix"))
                        object.objc_class_prefix = message.objc_class_prefix;
                    if (message.csharp_namespace != null && message.hasOwnProperty("csharp_namespace"))
                        object.csharp_namespace = message.csharp_namespace;
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
                 * @property {boolean|null} [map_entry] MessageOptions map_entry
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
                 * MessageOptions map_entry.
                 * @member {boolean} map_entry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.map_entry = false;
    
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
                    if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
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
                        case 7:
                            message.map_entry = reader.bool();
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
                    if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                        if (typeof message.map_entry !== "boolean")
                            return "map_entry: boolean expected";
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
                    if (object.map_entry != null)
                        message.map_entry = Boolean(object.map_entry);
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
                        object.map_entry = false;
                    }
                    if (message.message_set_wire_format != null && message.hasOwnProperty("message_set_wire_format"))
                        object.message_set_wire_format = message.message_set_wire_format;
                    if (message.no_standard_descriptor_accessor != null && message.hasOwnProperty("no_standard_descriptor_accessor"))
                        object.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.map_entry != null && message.hasOwnProperty("map_entry"))
                        object.map_entry = message.map_entry;
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
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
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
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
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
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
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
                        case 6:
                            message.jstype = reader.int32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
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
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
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
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
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
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
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
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
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
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {string}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpreted_option] OneofOptions uninterpreted_option
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpreted_option = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpreted_option.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpreted_option
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpreted_option = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                        for (var i = 0; i < message.uninterpreted_option.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
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
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
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
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpreted_option) {
                        if (!Array.isArray(object.uninterpreted_option))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: array expected");
                        message.uninterpreted_option = [];
                        for (var i = 0; i < object.uninterpreted_option.length; ++i) {
                            if (typeof object.uninterpreted_option[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpreted_option: object expected");
                            message.uninterpreted_option[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpreted_option[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpreted_option = [];
                    if (message.uninterpreted_option && message.uninterpreted_option.length) {
                        object.uninterpreted_option = [];
                        for (var j = 0; j < message.uninterpreted_option.length; ++j)
                            object.uninterpreted_option[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpreted_option[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofOptions;
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
                     * @property {Array.<string>|null} [leading_detached_comments] Location leading_detached_comments
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
                        this.leading_detached_comments = [];
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
                     * Location leading_detached_comments.
                     * @member {Array.<string>} leading_detached_comments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leading_detached_comments = $util.emptyArray;
    
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
                        if (message.leading_detached_comments != null && message.leading_detached_comments.length)
                            for (var i = 0; i < message.leading_detached_comments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
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
                            case 6:
                                if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                    message.leading_detached_comments = [];
                                message.leading_detached_comments.push(reader.string());
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
                        if (message.leading_detached_comments != null && message.hasOwnProperty("leading_detached_comments")) {
                            if (!Array.isArray(message.leading_detached_comments))
                                return "leading_detached_comments: array expected";
                            for (var i = 0; i < message.leading_detached_comments.length; ++i)
                                if (!$util.isString(message.leading_detached_comments[i]))
                                    return "leading_detached_comments: string[] expected";
                        }
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
                        if (object.leading_detached_comments) {
                            if (!Array.isArray(object.leading_detached_comments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leading_detached_comments: array expected");
                            message.leading_detached_comments = [];
                            for (var i = 0; i < object.leading_detached_comments.length; ++i)
                                message.leading_detached_comments[i] = String(object.leading_detached_comments[i]);
                        }
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
                            object.leading_detached_comments = [];
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
                        if (message.leading_detached_comments && message.leading_detached_comments.length) {
                            object.leading_detached_comments = [];
                            for (var j = 0; j < message.leading_detached_comments.length; ++j)
                                object.leading_detached_comments[j] = message.leading_detached_comments[j];
                        }
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
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [source_file] Annotation source_file
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation source_file.
                     * @member {string} source_file
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.source_file = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.source_file != null && message.hasOwnProperty("source_file"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
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
                                message.source_file = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
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
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.source_file != null && message.hasOwnProperty("source_file"))
                            if (!$util.isString(message.source_file))
                                return "source_file: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.source_file != null)
                            message.source_file = String(object.source_file);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.source_file = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.source_file != null && message.hasOwnProperty("source_file"))
                            object.source_file = message.source_file;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();
    
    $root.CClientMetrics_ClientBootstrap_RequestInfo = (function() {
    
        /**
         * Properties of a CClientMetrics_ClientBootstrap_RequestInfo.
         * @exports ICClientMetrics_ClientBootstrap_RequestInfo
         * @interface ICClientMetrics_ClientBootstrap_RequestInfo
         * @property {string|null} [original_hostname] CClientMetrics_ClientBootstrap_RequestInfo original_hostname
         * @property {string|null} [actual_hostname] CClientMetrics_ClientBootstrap_RequestInfo actual_hostname
         * @property {string|null} [path] CClientMetrics_ClientBootstrap_RequestInfo path
         * @property {string|null} [base_name] CClientMetrics_ClientBootstrap_RequestInfo base_name
         * @property {boolean|null} [success] CClientMetrics_ClientBootstrap_RequestInfo success
         * @property {number|null} [status_code] CClientMetrics_ClientBootstrap_RequestInfo status_code
         * @property {string|null} [address_of_request_url] CClientMetrics_ClientBootstrap_RequestInfo address_of_request_url
         * @property {number|null} [response_time_ms] CClientMetrics_ClientBootstrap_RequestInfo response_time_ms
         * @property {number|Long|null} [bytes_received] CClientMetrics_ClientBootstrap_RequestInfo bytes_received
         * @property {number|null} [num_retries] CClientMetrics_ClientBootstrap_RequestInfo num_retries
         */
    
        /**
         * Constructs a new CClientMetrics_ClientBootstrap_RequestInfo.
         * @exports CClientMetrics_ClientBootstrap_RequestInfo
         * @classdesc Represents a CClientMetrics_ClientBootstrap_RequestInfo.
         * @implements ICClientMetrics_ClientBootstrap_RequestInfo
         * @constructor
         * @param {ICClientMetrics_ClientBootstrap_RequestInfo=} [properties] Properties to set
         */
        function CClientMetrics_ClientBootstrap_RequestInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo original_hostname.
         * @member {string} original_hostname
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.original_hostname = "";
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo actual_hostname.
         * @member {string} actual_hostname
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.actual_hostname = "";
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo path.
         * @member {string} path
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.path = "";
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo base_name.
         * @member {string} base_name
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.base_name = "";
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo success.
         * @member {boolean} success
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.success = false;
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo status_code.
         * @member {number} status_code
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.status_code = 0;
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo address_of_request_url.
         * @member {string} address_of_request_url
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.address_of_request_url = "";
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo response_time_ms.
         * @member {number} response_time_ms
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.response_time_ms = 0;
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo bytes_received.
         * @member {number|Long} bytes_received
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.bytes_received = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CClientMetrics_ClientBootstrap_RequestInfo num_retries.
         * @member {number} num_retries
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.num_retries = 0;
    
        /**
         * Creates a new CClientMetrics_ClientBootstrap_RequestInfo instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @static
         * @param {ICClientMetrics_ClientBootstrap_RequestInfo=} [properties] Properties to set
         * @returns {CClientMetrics_ClientBootstrap_RequestInfo} CClientMetrics_ClientBootstrap_RequestInfo instance
         */
        CClientMetrics_ClientBootstrap_RequestInfo.create = function create(properties) {
            return new CClientMetrics_ClientBootstrap_RequestInfo(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ClientBootstrap_RequestInfo message. Does not implicitly {@link CClientMetrics_ClientBootstrap_RequestInfo.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @static
         * @param {ICClientMetrics_ClientBootstrap_RequestInfo} message CClientMetrics_ClientBootstrap_RequestInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ClientBootstrap_RequestInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.original_hostname != null && message.hasOwnProperty("original_hostname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.original_hostname);
            if (message.actual_hostname != null && message.hasOwnProperty("actual_hostname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.actual_hostname);
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.path);
            if (message.base_name != null && message.hasOwnProperty("base_name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.base_name);
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.success);
            if (message.status_code != null && message.hasOwnProperty("status_code"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.status_code);
            if (message.address_of_request_url != null && message.hasOwnProperty("address_of_request_url"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.address_of_request_url);
            if (message.response_time_ms != null && message.hasOwnProperty("response_time_ms"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.response_time_ms);
            if (message.bytes_received != null && message.hasOwnProperty("bytes_received"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.bytes_received);
            if (message.num_retries != null && message.hasOwnProperty("num_retries"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.num_retries);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ClientBootstrap_RequestInfo message, length delimited. Does not implicitly {@link CClientMetrics_ClientBootstrap_RequestInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @static
         * @param {ICClientMetrics_ClientBootstrap_RequestInfo} message CClientMetrics_ClientBootstrap_RequestInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ClientBootstrap_RequestInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ClientBootstrap_RequestInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ClientBootstrap_RequestInfo} CClientMetrics_ClientBootstrap_RequestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ClientBootstrap_RequestInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ClientBootstrap_RequestInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.original_hostname = reader.string();
                    break;
                case 2:
                    message.actual_hostname = reader.string();
                    break;
                case 3:
                    message.path = reader.string();
                    break;
                case 4:
                    message.base_name = reader.string();
                    break;
                case 5:
                    message.success = reader.bool();
                    break;
                case 6:
                    message.status_code = reader.uint32();
                    break;
                case 7:
                    message.address_of_request_url = reader.string();
                    break;
                case 8:
                    message.response_time_ms = reader.uint32();
                    break;
                case 9:
                    message.bytes_received = reader.uint64();
                    break;
                case 10:
                    message.num_retries = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ClientBootstrap_RequestInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ClientBootstrap_RequestInfo} CClientMetrics_ClientBootstrap_RequestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ClientBootstrap_RequestInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ClientBootstrap_RequestInfo message.
         * @function verify
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ClientBootstrap_RequestInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.original_hostname != null && message.hasOwnProperty("original_hostname"))
                if (!$util.isString(message.original_hostname))
                    return "original_hostname: string expected";
            if (message.actual_hostname != null && message.hasOwnProperty("actual_hostname"))
                if (!$util.isString(message.actual_hostname))
                    return "actual_hostname: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.base_name != null && message.hasOwnProperty("base_name"))
                if (!$util.isString(message.base_name))
                    return "base_name: string expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.status_code != null && message.hasOwnProperty("status_code"))
                if (!$util.isInteger(message.status_code))
                    return "status_code: integer expected";
            if (message.address_of_request_url != null && message.hasOwnProperty("address_of_request_url"))
                if (!$util.isString(message.address_of_request_url))
                    return "address_of_request_url: string expected";
            if (message.response_time_ms != null && message.hasOwnProperty("response_time_ms"))
                if (!$util.isInteger(message.response_time_ms))
                    return "response_time_ms: integer expected";
            if (message.bytes_received != null && message.hasOwnProperty("bytes_received"))
                if (!$util.isInteger(message.bytes_received) && !(message.bytes_received && $util.isInteger(message.bytes_received.low) && $util.isInteger(message.bytes_received.high)))
                    return "bytes_received: integer|Long expected";
            if (message.num_retries != null && message.hasOwnProperty("num_retries"))
                if (!$util.isInteger(message.num_retries))
                    return "num_retries: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ClientBootstrap_RequestInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ClientBootstrap_RequestInfo} CClientMetrics_ClientBootstrap_RequestInfo
         */
        CClientMetrics_ClientBootstrap_RequestInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ClientBootstrap_RequestInfo)
                return object;
            var message = new $root.CClientMetrics_ClientBootstrap_RequestInfo();
            if (object.original_hostname != null)
                message.original_hostname = String(object.original_hostname);
            if (object.actual_hostname != null)
                message.actual_hostname = String(object.actual_hostname);
            if (object.path != null)
                message.path = String(object.path);
            if (object.base_name != null)
                message.base_name = String(object.base_name);
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.status_code != null)
                message.status_code = object.status_code >>> 0;
            if (object.address_of_request_url != null)
                message.address_of_request_url = String(object.address_of_request_url);
            if (object.response_time_ms != null)
                message.response_time_ms = object.response_time_ms >>> 0;
            if (object.bytes_received != null)
                if ($util.Long)
                    (message.bytes_received = $util.Long.fromValue(object.bytes_received)).unsigned = true;
                else if (typeof object.bytes_received === "string")
                    message.bytes_received = parseInt(object.bytes_received, 10);
                else if (typeof object.bytes_received === "number")
                    message.bytes_received = object.bytes_received;
                else if (typeof object.bytes_received === "object")
                    message.bytes_received = new $util.LongBits(object.bytes_received.low >>> 0, object.bytes_received.high >>> 0).toNumber(true);
            if (object.num_retries != null)
                message.num_retries = object.num_retries >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ClientBootstrap_RequestInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @static
         * @param {CClientMetrics_ClientBootstrap_RequestInfo} message CClientMetrics_ClientBootstrap_RequestInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ClientBootstrap_RequestInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.original_hostname = "";
                object.actual_hostname = "";
                object.path = "";
                object.base_name = "";
                object.success = false;
                object.status_code = 0;
                object.address_of_request_url = "";
                object.response_time_ms = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_received = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_received = options.longs === String ? "0" : 0;
                object.num_retries = 0;
            }
            if (message.original_hostname != null && message.hasOwnProperty("original_hostname"))
                object.original_hostname = message.original_hostname;
            if (message.actual_hostname != null && message.hasOwnProperty("actual_hostname"))
                object.actual_hostname = message.actual_hostname;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.base_name != null && message.hasOwnProperty("base_name"))
                object.base_name = message.base_name;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.status_code != null && message.hasOwnProperty("status_code"))
                object.status_code = message.status_code;
            if (message.address_of_request_url != null && message.hasOwnProperty("address_of_request_url"))
                object.address_of_request_url = message.address_of_request_url;
            if (message.response_time_ms != null && message.hasOwnProperty("response_time_ms"))
                object.response_time_ms = message.response_time_ms;
            if (message.bytes_received != null && message.hasOwnProperty("bytes_received"))
                if (typeof message.bytes_received === "number")
                    object.bytes_received = options.longs === String ? String(message.bytes_received) : message.bytes_received;
                else
                    object.bytes_received = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_received) : options.longs === Number ? new $util.LongBits(message.bytes_received.low >>> 0, message.bytes_received.high >>> 0).toNumber(true) : message.bytes_received;
            if (message.num_retries != null && message.hasOwnProperty("num_retries"))
                object.num_retries = message.num_retries;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ClientBootstrap_RequestInfo to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ClientBootstrap_RequestInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ClientBootstrap_RequestInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_ClientBootstrap_RequestInfo;
    })();
    
    $root.CClientMetrics_ClientBootstrap_Summary = (function() {
    
        /**
         * Properties of a CClientMetrics_ClientBootstrap_Summary.
         * @exports ICClientMetrics_ClientBootstrap_Summary
         * @interface ICClientMetrics_ClientBootstrap_Summary
         * @property {number|null} [launcher_type] CClientMetrics_ClientBootstrap_Summary launcher_type
         * @property {number|null} [steam_realm] CClientMetrics_ClientBootstrap_Summary steam_realm
         * @property {string|null} [beta_name] CClientMetrics_ClientBootstrap_Summary beta_name
         * @property {boolean|null} [download_completed] CClientMetrics_ClientBootstrap_Summary download_completed
         * @property {number|null} [total_time_ms] CClientMetrics_ClientBootstrap_Summary total_time_ms
         * @property {Array.<ICClientMetrics_ClientBootstrap_RequestInfo>|null} [manifest_requests] CClientMetrics_ClientBootstrap_Summary manifest_requests
         * @property {Array.<ICClientMetrics_ClientBootstrap_RequestInfo>|null} [package_requests] CClientMetrics_ClientBootstrap_Summary package_requests
         */
    
        /**
         * Constructs a new CClientMetrics_ClientBootstrap_Summary.
         * @exports CClientMetrics_ClientBootstrap_Summary
         * @classdesc Represents a CClientMetrics_ClientBootstrap_Summary.
         * @implements ICClientMetrics_ClientBootstrap_Summary
         * @constructor
         * @param {ICClientMetrics_ClientBootstrap_Summary=} [properties] Properties to set
         */
        function CClientMetrics_ClientBootstrap_Summary(properties) {
            this.manifest_requests = [];
            this.package_requests = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ClientBootstrap_Summary launcher_type.
         * @member {number} launcher_type
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @instance
         */
        CClientMetrics_ClientBootstrap_Summary.prototype.launcher_type = 0;
    
        /**
         * CClientMetrics_ClientBootstrap_Summary steam_realm.
         * @member {number} steam_realm
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @instance
         */
        CClientMetrics_ClientBootstrap_Summary.prototype.steam_realm = 0;
    
        /**
         * CClientMetrics_ClientBootstrap_Summary beta_name.
         * @member {string} beta_name
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @instance
         */
        CClientMetrics_ClientBootstrap_Summary.prototype.beta_name = "";
    
        /**
         * CClientMetrics_ClientBootstrap_Summary download_completed.
         * @member {boolean} download_completed
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @instance
         */
        CClientMetrics_ClientBootstrap_Summary.prototype.download_completed = false;
    
        /**
         * CClientMetrics_ClientBootstrap_Summary total_time_ms.
         * @member {number} total_time_ms
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @instance
         */
        CClientMetrics_ClientBootstrap_Summary.prototype.total_time_ms = 0;
    
        /**
         * CClientMetrics_ClientBootstrap_Summary manifest_requests.
         * @member {Array.<ICClientMetrics_ClientBootstrap_RequestInfo>} manifest_requests
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @instance
         */
        CClientMetrics_ClientBootstrap_Summary.prototype.manifest_requests = $util.emptyArray;
    
        /**
         * CClientMetrics_ClientBootstrap_Summary package_requests.
         * @member {Array.<ICClientMetrics_ClientBootstrap_RequestInfo>} package_requests
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @instance
         */
        CClientMetrics_ClientBootstrap_Summary.prototype.package_requests = $util.emptyArray;
    
        /**
         * Creates a new CClientMetrics_ClientBootstrap_Summary instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @static
         * @param {ICClientMetrics_ClientBootstrap_Summary=} [properties] Properties to set
         * @returns {CClientMetrics_ClientBootstrap_Summary} CClientMetrics_ClientBootstrap_Summary instance
         */
        CClientMetrics_ClientBootstrap_Summary.create = function create(properties) {
            return new CClientMetrics_ClientBootstrap_Summary(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ClientBootstrap_Summary message. Does not implicitly {@link CClientMetrics_ClientBootstrap_Summary.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @static
         * @param {ICClientMetrics_ClientBootstrap_Summary} message CClientMetrics_ClientBootstrap_Summary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ClientBootstrap_Summary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.launcher_type != null && message.hasOwnProperty("launcher_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.launcher_type);
            if (message.steam_realm != null && message.hasOwnProperty("steam_realm"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.steam_realm);
            if (message.beta_name != null && message.hasOwnProperty("beta_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.beta_name);
            if (message.download_completed != null && message.hasOwnProperty("download_completed"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.download_completed);
            if (message.total_time_ms != null && message.hasOwnProperty("total_time_ms"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.total_time_ms);
            if (message.manifest_requests != null && message.manifest_requests.length)
                for (var i = 0; i < message.manifest_requests.length; ++i)
                    $root.CClientMetrics_ClientBootstrap_RequestInfo.encode(message.manifest_requests[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.package_requests != null && message.package_requests.length)
                for (var i = 0; i < message.package_requests.length; ++i)
                    $root.CClientMetrics_ClientBootstrap_RequestInfo.encode(message.package_requests[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ClientBootstrap_Summary message, length delimited. Does not implicitly {@link CClientMetrics_ClientBootstrap_Summary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @static
         * @param {ICClientMetrics_ClientBootstrap_Summary} message CClientMetrics_ClientBootstrap_Summary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ClientBootstrap_Summary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ClientBootstrap_Summary message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ClientBootstrap_Summary} CClientMetrics_ClientBootstrap_Summary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ClientBootstrap_Summary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ClientBootstrap_Summary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.launcher_type = reader.uint32();
                    break;
                case 2:
                    message.steam_realm = reader.uint32();
                    break;
                case 3:
                    message.beta_name = reader.string();
                    break;
                case 4:
                    message.download_completed = reader.bool();
                    break;
                case 6:
                    message.total_time_ms = reader.uint32();
                    break;
                case 7:
                    if (!(message.manifest_requests && message.manifest_requests.length))
                        message.manifest_requests = [];
                    message.manifest_requests.push($root.CClientMetrics_ClientBootstrap_RequestInfo.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.package_requests && message.package_requests.length))
                        message.package_requests = [];
                    message.package_requests.push($root.CClientMetrics_ClientBootstrap_RequestInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ClientBootstrap_Summary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ClientBootstrap_Summary} CClientMetrics_ClientBootstrap_Summary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ClientBootstrap_Summary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ClientBootstrap_Summary message.
         * @function verify
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ClientBootstrap_Summary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.launcher_type != null && message.hasOwnProperty("launcher_type"))
                if (!$util.isInteger(message.launcher_type))
                    return "launcher_type: integer expected";
            if (message.steam_realm != null && message.hasOwnProperty("steam_realm"))
                if (!$util.isInteger(message.steam_realm))
                    return "steam_realm: integer expected";
            if (message.beta_name != null && message.hasOwnProperty("beta_name"))
                if (!$util.isString(message.beta_name))
                    return "beta_name: string expected";
            if (message.download_completed != null && message.hasOwnProperty("download_completed"))
                if (typeof message.download_completed !== "boolean")
                    return "download_completed: boolean expected";
            if (message.total_time_ms != null && message.hasOwnProperty("total_time_ms"))
                if (!$util.isInteger(message.total_time_ms))
                    return "total_time_ms: integer expected";
            if (message.manifest_requests != null && message.hasOwnProperty("manifest_requests")) {
                if (!Array.isArray(message.manifest_requests))
                    return "manifest_requests: array expected";
                for (var i = 0; i < message.manifest_requests.length; ++i) {
                    var error = $root.CClientMetrics_ClientBootstrap_RequestInfo.verify(message.manifest_requests[i]);
                    if (error)
                        return "manifest_requests." + error;
                }
            }
            if (message.package_requests != null && message.hasOwnProperty("package_requests")) {
                if (!Array.isArray(message.package_requests))
                    return "package_requests: array expected";
                for (var i = 0; i < message.package_requests.length; ++i) {
                    var error = $root.CClientMetrics_ClientBootstrap_RequestInfo.verify(message.package_requests[i]);
                    if (error)
                        return "package_requests." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ClientBootstrap_Summary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ClientBootstrap_Summary} CClientMetrics_ClientBootstrap_Summary
         */
        CClientMetrics_ClientBootstrap_Summary.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ClientBootstrap_Summary)
                return object;
            var message = new $root.CClientMetrics_ClientBootstrap_Summary();
            if (object.launcher_type != null)
                message.launcher_type = object.launcher_type >>> 0;
            if (object.steam_realm != null)
                message.steam_realm = object.steam_realm >>> 0;
            if (object.beta_name != null)
                message.beta_name = String(object.beta_name);
            if (object.download_completed != null)
                message.download_completed = Boolean(object.download_completed);
            if (object.total_time_ms != null)
                message.total_time_ms = object.total_time_ms >>> 0;
            if (object.manifest_requests) {
                if (!Array.isArray(object.manifest_requests))
                    throw TypeError(".CClientMetrics_ClientBootstrap_Summary.manifest_requests: array expected");
                message.manifest_requests = [];
                for (var i = 0; i < object.manifest_requests.length; ++i) {
                    if (typeof object.manifest_requests[i] !== "object")
                        throw TypeError(".CClientMetrics_ClientBootstrap_Summary.manifest_requests: object expected");
                    message.manifest_requests[i] = $root.CClientMetrics_ClientBootstrap_RequestInfo.fromObject(object.manifest_requests[i]);
                }
            }
            if (object.package_requests) {
                if (!Array.isArray(object.package_requests))
                    throw TypeError(".CClientMetrics_ClientBootstrap_Summary.package_requests: array expected");
                message.package_requests = [];
                for (var i = 0; i < object.package_requests.length; ++i) {
                    if (typeof object.package_requests[i] !== "object")
                        throw TypeError(".CClientMetrics_ClientBootstrap_Summary.package_requests: object expected");
                    message.package_requests[i] = $root.CClientMetrics_ClientBootstrap_RequestInfo.fromObject(object.package_requests[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ClientBootstrap_Summary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @static
         * @param {CClientMetrics_ClientBootstrap_Summary} message CClientMetrics_ClientBootstrap_Summary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ClientBootstrap_Summary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.manifest_requests = [];
                object.package_requests = [];
            }
            if (options.defaults) {
                object.launcher_type = 0;
                object.steam_realm = 0;
                object.beta_name = "";
                object.download_completed = false;
                object.total_time_ms = 0;
            }
            if (message.launcher_type != null && message.hasOwnProperty("launcher_type"))
                object.launcher_type = message.launcher_type;
            if (message.steam_realm != null && message.hasOwnProperty("steam_realm"))
                object.steam_realm = message.steam_realm;
            if (message.beta_name != null && message.hasOwnProperty("beta_name"))
                object.beta_name = message.beta_name;
            if (message.download_completed != null && message.hasOwnProperty("download_completed"))
                object.download_completed = message.download_completed;
            if (message.total_time_ms != null && message.hasOwnProperty("total_time_ms"))
                object.total_time_ms = message.total_time_ms;
            if (message.manifest_requests && message.manifest_requests.length) {
                object.manifest_requests = [];
                for (var j = 0; j < message.manifest_requests.length; ++j)
                    object.manifest_requests[j] = $root.CClientMetrics_ClientBootstrap_RequestInfo.toObject(message.manifest_requests[j], options);
            }
            if (message.package_requests && message.package_requests.length) {
                object.package_requests = [];
                for (var j = 0; j < message.package_requests.length; ++j)
                    object.package_requests[j] = $root.CClientMetrics_ClientBootstrap_RequestInfo.toObject(message.package_requests[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ClientBootstrap_Summary to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ClientBootstrap_Summary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ClientBootstrap_Summary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_ClientBootstrap_Summary;
    })();
    
    $root.CClientMetrics_ContentDownloadResponse_Counts = (function() {
    
        /**
         * Properties of a CClientMetrics_ContentDownloadResponse_Counts.
         * @exports ICClientMetrics_ContentDownloadResponse_Counts
         * @interface ICClientMetrics_ContentDownloadResponse_Counts
         * @property {number|null} [class_100] CClientMetrics_ContentDownloadResponse_Counts class_100
         * @property {number|null} [class_200] CClientMetrics_ContentDownloadResponse_Counts class_200
         * @property {number|null} [class_300] CClientMetrics_ContentDownloadResponse_Counts class_300
         * @property {number|null} [class_400] CClientMetrics_ContentDownloadResponse_Counts class_400
         * @property {number|null} [class_500] CClientMetrics_ContentDownloadResponse_Counts class_500
         * @property {number|null} [no_response] CClientMetrics_ContentDownloadResponse_Counts no_response
         * @property {number|null} [class_unknown] CClientMetrics_ContentDownloadResponse_Counts class_unknown
         */
    
        /**
         * Constructs a new CClientMetrics_ContentDownloadResponse_Counts.
         * @exports CClientMetrics_ContentDownloadResponse_Counts
         * @classdesc Represents a CClientMetrics_ContentDownloadResponse_Counts.
         * @implements ICClientMetrics_ContentDownloadResponse_Counts
         * @constructor
         * @param {ICClientMetrics_ContentDownloadResponse_Counts=} [properties] Properties to set
         */
        function CClientMetrics_ContentDownloadResponse_Counts(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts class_100.
         * @member {number} class_100
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts.prototype.class_100 = 0;
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts class_200.
         * @member {number} class_200
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts.prototype.class_200 = 0;
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts class_300.
         * @member {number} class_300
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts.prototype.class_300 = 0;
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts class_400.
         * @member {number} class_400
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts.prototype.class_400 = 0;
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts class_500.
         * @member {number} class_500
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts.prototype.class_500 = 0;
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts no_response.
         * @member {number} no_response
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts.prototype.no_response = 0;
    
        /**
         * CClientMetrics_ContentDownloadResponse_Counts class_unknown.
         * @member {number} class_unknown
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Counts.prototype.class_unknown = 0;
    
        /**
         * Creates a new CClientMetrics_ContentDownloadResponse_Counts instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Counts=} [properties] Properties to set
         * @returns {CClientMetrics_ContentDownloadResponse_Counts} CClientMetrics_ContentDownloadResponse_Counts instance
         */
        CClientMetrics_ContentDownloadResponse_Counts.create = function create(properties) {
            return new CClientMetrics_ContentDownloadResponse_Counts(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentDownloadResponse_Counts message. Does not implicitly {@link CClientMetrics_ContentDownloadResponse_Counts.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Counts} message CClientMetrics_ContentDownloadResponse_Counts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentDownloadResponse_Counts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.class_100 != null && message.hasOwnProperty("class_100"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.class_100);
            if (message.class_200 != null && message.hasOwnProperty("class_200"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.class_200);
            if (message.class_300 != null && message.hasOwnProperty("class_300"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.class_300);
            if (message.class_400 != null && message.hasOwnProperty("class_400"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.class_400);
            if (message.class_500 != null && message.hasOwnProperty("class_500"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.class_500);
            if (message.no_response != null && message.hasOwnProperty("no_response"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.no_response);
            if (message.class_unknown != null && message.hasOwnProperty("class_unknown"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.class_unknown);
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentDownloadResponse_Counts message, length delimited. Does not implicitly {@link CClientMetrics_ContentDownloadResponse_Counts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Counts} message CClientMetrics_ContentDownloadResponse_Counts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentDownloadResponse_Counts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ContentDownloadResponse_Counts message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ContentDownloadResponse_Counts} CClientMetrics_ContentDownloadResponse_Counts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentDownloadResponse_Counts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ContentDownloadResponse_Counts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.class_100 = reader.uint32();
                    break;
                case 2:
                    message.class_200 = reader.uint32();
                    break;
                case 3:
                    message.class_300 = reader.uint32();
                    break;
                case 4:
                    message.class_400 = reader.uint32();
                    break;
                case 5:
                    message.class_500 = reader.uint32();
                    break;
                case 6:
                    message.no_response = reader.uint32();
                    break;
                case 7:
                    message.class_unknown = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ContentDownloadResponse_Counts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ContentDownloadResponse_Counts} CClientMetrics_ContentDownloadResponse_Counts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentDownloadResponse_Counts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ContentDownloadResponse_Counts message.
         * @function verify
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ContentDownloadResponse_Counts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.class_100 != null && message.hasOwnProperty("class_100"))
                if (!$util.isInteger(message.class_100))
                    return "class_100: integer expected";
            if (message.class_200 != null && message.hasOwnProperty("class_200"))
                if (!$util.isInteger(message.class_200))
                    return "class_200: integer expected";
            if (message.class_300 != null && message.hasOwnProperty("class_300"))
                if (!$util.isInteger(message.class_300))
                    return "class_300: integer expected";
            if (message.class_400 != null && message.hasOwnProperty("class_400"))
                if (!$util.isInteger(message.class_400))
                    return "class_400: integer expected";
            if (message.class_500 != null && message.hasOwnProperty("class_500"))
                if (!$util.isInteger(message.class_500))
                    return "class_500: integer expected";
            if (message.no_response != null && message.hasOwnProperty("no_response"))
                if (!$util.isInteger(message.no_response))
                    return "no_response: integer expected";
            if (message.class_unknown != null && message.hasOwnProperty("class_unknown"))
                if (!$util.isInteger(message.class_unknown))
                    return "class_unknown: integer expected";
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ContentDownloadResponse_Counts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ContentDownloadResponse_Counts} CClientMetrics_ContentDownloadResponse_Counts
         */
        CClientMetrics_ContentDownloadResponse_Counts.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ContentDownloadResponse_Counts)
                return object;
            var message = new $root.CClientMetrics_ContentDownloadResponse_Counts();
            if (object.class_100 != null)
                message.class_100 = object.class_100 >>> 0;
            if (object.class_200 != null)
                message.class_200 = object.class_200 >>> 0;
            if (object.class_300 != null)
                message.class_300 = object.class_300 >>> 0;
            if (object.class_400 != null)
                message.class_400 = object.class_400 >>> 0;
            if (object.class_500 != null)
                message.class_500 = object.class_500 >>> 0;
            if (object.no_response != null)
                message.no_response = object.no_response >>> 0;
            if (object.class_unknown != null)
                message.class_unknown = object.class_unknown >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ContentDownloadResponse_Counts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @static
         * @param {CClientMetrics_ContentDownloadResponse_Counts} message CClientMetrics_ContentDownloadResponse_Counts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ContentDownloadResponse_Counts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.class_100 = 0;
                object.class_200 = 0;
                object.class_300 = 0;
                object.class_400 = 0;
                object.class_500 = 0;
                object.no_response = 0;
                object.class_unknown = 0;
            }
            if (message.class_100 != null && message.hasOwnProperty("class_100"))
                object.class_100 = message.class_100;
            if (message.class_200 != null && message.hasOwnProperty("class_200"))
                object.class_200 = message.class_200;
            if (message.class_300 != null && message.hasOwnProperty("class_300"))
                object.class_300 = message.class_300;
            if (message.class_400 != null && message.hasOwnProperty("class_400"))
                object.class_400 = message.class_400;
            if (message.class_500 != null && message.hasOwnProperty("class_500"))
                object.class_500 = message.class_500;
            if (message.no_response != null && message.hasOwnProperty("no_response"))
                object.no_response = message.no_response;
            if (message.class_unknown != null && message.hasOwnProperty("class_unknown"))
                object.class_unknown = message.class_unknown;
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ContentDownloadResponse_Counts to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ContentDownloadResponse_Counts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ContentDownloadResponse_Counts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_ContentDownloadResponse_Counts;
    })();
    
    $root.CClientMetrics_ContentDownloadResponse_HostCounts = (function() {
    
        /**
         * Properties of a CClientMetrics_ContentDownloadResponse_HostCounts.
         * @exports ICClientMetrics_ContentDownloadResponse_HostCounts
         * @interface ICClientMetrics_ContentDownloadResponse_HostCounts
         * @property {string|null} [hostname] CClientMetrics_ContentDownloadResponse_HostCounts hostname
         * @property {number|null} [source_type] CClientMetrics_ContentDownloadResponse_HostCounts source_type
         * @property {ICClientMetrics_ContentDownloadResponse_Counts|null} [counts] CClientMetrics_ContentDownloadResponse_HostCounts counts
         */
    
        /**
         * Constructs a new CClientMetrics_ContentDownloadResponse_HostCounts.
         * @exports CClientMetrics_ContentDownloadResponse_HostCounts
         * @classdesc Represents a CClientMetrics_ContentDownloadResponse_HostCounts.
         * @implements ICClientMetrics_ContentDownloadResponse_HostCounts
         * @constructor
         * @param {ICClientMetrics_ContentDownloadResponse_HostCounts=} [properties] Properties to set
         */
        function CClientMetrics_ContentDownloadResponse_HostCounts(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ContentDownloadResponse_HostCounts hostname.
         * @member {string} hostname
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.prototype.hostname = "";
    
        /**
         * CClientMetrics_ContentDownloadResponse_HostCounts source_type.
         * @member {number} source_type
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.prototype.source_type = 0;
    
        /**
         * CClientMetrics_ContentDownloadResponse_HostCounts counts.
         * @member {ICClientMetrics_ContentDownloadResponse_Counts|null|undefined} counts
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.prototype.counts = null;
    
        /**
         * Creates a new CClientMetrics_ContentDownloadResponse_HostCounts instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_HostCounts=} [properties] Properties to set
         * @returns {CClientMetrics_ContentDownloadResponse_HostCounts} CClientMetrics_ContentDownloadResponse_HostCounts instance
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.create = function create(properties) {
            return new CClientMetrics_ContentDownloadResponse_HostCounts(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentDownloadResponse_HostCounts message. Does not implicitly {@link CClientMetrics_ContentDownloadResponse_HostCounts.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_HostCounts} message CClientMetrics_ContentDownloadResponse_HostCounts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostname);
            if (message.source_type != null && message.hasOwnProperty("source_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.source_type);
            if (message.counts != null && message.hasOwnProperty("counts"))
                $root.CClientMetrics_ContentDownloadResponse_Counts.encode(message.counts, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentDownloadResponse_HostCounts message, length delimited. Does not implicitly {@link CClientMetrics_ContentDownloadResponse_HostCounts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_HostCounts} message CClientMetrics_ContentDownloadResponse_HostCounts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ContentDownloadResponse_HostCounts message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ContentDownloadResponse_HostCounts} CClientMetrics_ContentDownloadResponse_HostCounts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ContentDownloadResponse_HostCounts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hostname = reader.string();
                    break;
                case 2:
                    message.source_type = reader.uint32();
                    break;
                case 3:
                    message.counts = $root.CClientMetrics_ContentDownloadResponse_Counts.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ContentDownloadResponse_HostCounts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ContentDownloadResponse_HostCounts} CClientMetrics_ContentDownloadResponse_HostCounts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ContentDownloadResponse_HostCounts message.
         * @function verify
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            if (message.source_type != null && message.hasOwnProperty("source_type"))
                if (!$util.isInteger(message.source_type))
                    return "source_type: integer expected";
            if (message.counts != null && message.hasOwnProperty("counts")) {
                var error = $root.CClientMetrics_ContentDownloadResponse_Counts.verify(message.counts);
                if (error)
                    return "counts." + error;
            }
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ContentDownloadResponse_HostCounts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ContentDownloadResponse_HostCounts} CClientMetrics_ContentDownloadResponse_HostCounts
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ContentDownloadResponse_HostCounts)
                return object;
            var message = new $root.CClientMetrics_ContentDownloadResponse_HostCounts();
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            if (object.source_type != null)
                message.source_type = object.source_type >>> 0;
            if (object.counts != null) {
                if (typeof object.counts !== "object")
                    throw TypeError(".CClientMetrics_ContentDownloadResponse_HostCounts.counts: object expected");
                message.counts = $root.CClientMetrics_ContentDownloadResponse_Counts.fromObject(object.counts);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ContentDownloadResponse_HostCounts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @static
         * @param {CClientMetrics_ContentDownloadResponse_HostCounts} message CClientMetrics_ContentDownloadResponse_HostCounts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.hostname = "";
                object.source_type = 0;
                object.counts = null;
            }
            if (message.hostname != null && message.hasOwnProperty("hostname"))
                object.hostname = message.hostname;
            if (message.source_type != null && message.hasOwnProperty("source_type"))
                object.source_type = message.source_type;
            if (message.counts != null && message.hasOwnProperty("counts"))
                object.counts = $root.CClientMetrics_ContentDownloadResponse_Counts.toObject(message.counts, options);
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ContentDownloadResponse_HostCounts to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ContentDownloadResponse_HostCounts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ContentDownloadResponse_HostCounts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_ContentDownloadResponse_HostCounts;
    })();
    
    $root.CClientMetrics_ContentDownloadResponse_Hosts = (function() {
    
        /**
         * Properties of a CClientMetrics_ContentDownloadResponse_Hosts.
         * @exports ICClientMetrics_ContentDownloadResponse_Hosts
         * @interface ICClientMetrics_ContentDownloadResponse_Hosts
         * @property {Array.<ICClientMetrics_ContentDownloadResponse_HostCounts>|null} [hosts] CClientMetrics_ContentDownloadResponse_Hosts hosts
         */
    
        /**
         * Constructs a new CClientMetrics_ContentDownloadResponse_Hosts.
         * @exports CClientMetrics_ContentDownloadResponse_Hosts
         * @classdesc Represents a CClientMetrics_ContentDownloadResponse_Hosts.
         * @implements ICClientMetrics_ContentDownloadResponse_Hosts
         * @constructor
         * @param {ICClientMetrics_ContentDownloadResponse_Hosts=} [properties] Properties to set
         */
        function CClientMetrics_ContentDownloadResponse_Hosts(properties) {
            this.hosts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CClientMetrics_ContentDownloadResponse_Hosts hosts.
         * @member {Array.<ICClientMetrics_ContentDownloadResponse_HostCounts>} hosts
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @instance
         */
        CClientMetrics_ContentDownloadResponse_Hosts.prototype.hosts = $util.emptyArray;
    
        /**
         * Creates a new CClientMetrics_ContentDownloadResponse_Hosts instance using the specified properties.
         * @function create
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Hosts=} [properties] Properties to set
         * @returns {CClientMetrics_ContentDownloadResponse_Hosts} CClientMetrics_ContentDownloadResponse_Hosts instance
         */
        CClientMetrics_ContentDownloadResponse_Hosts.create = function create(properties) {
            return new CClientMetrics_ContentDownloadResponse_Hosts(properties);
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentDownloadResponse_Hosts message. Does not implicitly {@link CClientMetrics_ContentDownloadResponse_Hosts.verify|verify} messages.
         * @function encode
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Hosts} message CClientMetrics_ContentDownloadResponse_Hosts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentDownloadResponse_Hosts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hosts != null && message.hosts.length)
                for (var i = 0; i < message.hosts.length; ++i)
                    $root.CClientMetrics_ContentDownloadResponse_HostCounts.encode(message.hosts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CClientMetrics_ContentDownloadResponse_Hosts message, length delimited. Does not implicitly {@link CClientMetrics_ContentDownloadResponse_Hosts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @static
         * @param {ICClientMetrics_ContentDownloadResponse_Hosts} message CClientMetrics_ContentDownloadResponse_Hosts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CClientMetrics_ContentDownloadResponse_Hosts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CClientMetrics_ContentDownloadResponse_Hosts message from the specified reader or buffer.
         * @function decode
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CClientMetrics_ContentDownloadResponse_Hosts} CClientMetrics_ContentDownloadResponse_Hosts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentDownloadResponse_Hosts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CClientMetrics_ContentDownloadResponse_Hosts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.hosts && message.hosts.length))
                        message.hosts = [];
                    message.hosts.push($root.CClientMetrics_ContentDownloadResponse_HostCounts.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CClientMetrics_ContentDownloadResponse_Hosts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CClientMetrics_ContentDownloadResponse_Hosts} CClientMetrics_ContentDownloadResponse_Hosts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CClientMetrics_ContentDownloadResponse_Hosts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CClientMetrics_ContentDownloadResponse_Hosts message.
         * @function verify
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CClientMetrics_ContentDownloadResponse_Hosts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hosts != null && message.hasOwnProperty("hosts")) {
                if (!Array.isArray(message.hosts))
                    return "hosts: array expected";
                for (var i = 0; i < message.hosts.length; ++i) {
                    var error = $root.CClientMetrics_ContentDownloadResponse_HostCounts.verify(message.hosts[i]);
                    if (error)
                        return "hosts." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CClientMetrics_ContentDownloadResponse_Hosts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CClientMetrics_ContentDownloadResponse_Hosts} CClientMetrics_ContentDownloadResponse_Hosts
         */
        CClientMetrics_ContentDownloadResponse_Hosts.fromObject = function fromObject(object) {
            if (object instanceof $root.CClientMetrics_ContentDownloadResponse_Hosts)
                return object;
            var message = new $root.CClientMetrics_ContentDownloadResponse_Hosts();
            if (object.hosts) {
                if (!Array.isArray(object.hosts))
                    throw TypeError(".CClientMetrics_ContentDownloadResponse_Hosts.hosts: array expected");
                message.hosts = [];
                for (var i = 0; i < object.hosts.length; ++i) {
                    if (typeof object.hosts[i] !== "object")
                        throw TypeError(".CClientMetrics_ContentDownloadResponse_Hosts.hosts: object expected");
                    message.hosts[i] = $root.CClientMetrics_ContentDownloadResponse_HostCounts.fromObject(object.hosts[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CClientMetrics_ContentDownloadResponse_Hosts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @static
         * @param {CClientMetrics_ContentDownloadResponse_Hosts} message CClientMetrics_ContentDownloadResponse_Hosts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CClientMetrics_ContentDownloadResponse_Hosts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.hosts = [];
            if (message.hosts && message.hosts.length) {
                object.hosts = [];
                for (var j = 0; j < message.hosts.length; ++j)
                    object.hosts[j] = $root.CClientMetrics_ContentDownloadResponse_HostCounts.toObject(message.hosts[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CClientMetrics_ContentDownloadResponse_Hosts to JSON.
         * @function toJSON
         * @memberof CClientMetrics_ContentDownloadResponse_Hosts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CClientMetrics_ContentDownloadResponse_Hosts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CClientMetrics_ContentDownloadResponse_Hosts;
    })();

    return $root;
});
