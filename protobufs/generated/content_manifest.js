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
    
    $root.ContentManifestPayload = (function() {
    
        /**
         * Properties of a ContentManifestPayload.
         * @exports IContentManifestPayload
         * @interface IContentManifestPayload
         * @property {Array.<ContentManifestPayload.IFileMapping>|null} [mappings] ContentManifestPayload mappings
         */
    
        /**
         * Constructs a new ContentManifestPayload.
         * @exports ContentManifestPayload
         * @classdesc Represents a ContentManifestPayload.
         * @implements IContentManifestPayload
         * @constructor
         * @param {IContentManifestPayload=} [properties] Properties to set
         */
        function ContentManifestPayload(properties) {
            this.mappings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ContentManifestPayload mappings.
         * @member {Array.<ContentManifestPayload.IFileMapping>} mappings
         * @memberof ContentManifestPayload
         * @instance
         */
        ContentManifestPayload.prototype.mappings = $util.emptyArray;
    
        /**
         * Creates a new ContentManifestPayload instance using the specified properties.
         * @function create
         * @memberof ContentManifestPayload
         * @static
         * @param {IContentManifestPayload=} [properties] Properties to set
         * @returns {ContentManifestPayload} ContentManifestPayload instance
         */
        ContentManifestPayload.create = function create(properties) {
            return new ContentManifestPayload(properties);
        };
    
        /**
         * Encodes the specified ContentManifestPayload message. Does not implicitly {@link ContentManifestPayload.verify|verify} messages.
         * @function encode
         * @memberof ContentManifestPayload
         * @static
         * @param {IContentManifestPayload} message ContentManifestPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentManifestPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mappings != null && message.mappings.length)
                for (var i = 0; i < message.mappings.length; ++i)
                    $root.ContentManifestPayload.FileMapping.encode(message.mappings[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified ContentManifestPayload message, length delimited. Does not implicitly {@link ContentManifestPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ContentManifestPayload
         * @static
         * @param {IContentManifestPayload} message ContentManifestPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentManifestPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ContentManifestPayload message from the specified reader or buffer.
         * @function decode
         * @memberof ContentManifestPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ContentManifestPayload} ContentManifestPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentManifestPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContentManifestPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.mappings && message.mappings.length))
                        message.mappings = [];
                    message.mappings.push($root.ContentManifestPayload.FileMapping.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ContentManifestPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ContentManifestPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ContentManifestPayload} ContentManifestPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentManifestPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ContentManifestPayload message.
         * @function verify
         * @memberof ContentManifestPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContentManifestPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mappings != null && message.hasOwnProperty("mappings")) {
                if (!Array.isArray(message.mappings))
                    return "mappings: array expected";
                for (var i = 0; i < message.mappings.length; ++i) {
                    var error = $root.ContentManifestPayload.FileMapping.verify(message.mappings[i]);
                    if (error)
                        return "mappings." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a ContentManifestPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ContentManifestPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ContentManifestPayload} ContentManifestPayload
         */
        ContentManifestPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.ContentManifestPayload)
                return object;
            var message = new $root.ContentManifestPayload();
            if (object.mappings) {
                if (!Array.isArray(object.mappings))
                    throw TypeError(".ContentManifestPayload.mappings: array expected");
                message.mappings = [];
                for (var i = 0; i < object.mappings.length; ++i) {
                    if (typeof object.mappings[i] !== "object")
                        throw TypeError(".ContentManifestPayload.mappings: object expected");
                    message.mappings[i] = $root.ContentManifestPayload.FileMapping.fromObject(object.mappings[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ContentManifestPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ContentManifestPayload
         * @static
         * @param {ContentManifestPayload} message ContentManifestPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContentManifestPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mappings = [];
            if (message.mappings && message.mappings.length) {
                object.mappings = [];
                for (var j = 0; j < message.mappings.length; ++j)
                    object.mappings[j] = $root.ContentManifestPayload.FileMapping.toObject(message.mappings[j], options);
            }
            return object;
        };
    
        /**
         * Converts this ContentManifestPayload to JSON.
         * @function toJSON
         * @memberof ContentManifestPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentManifestPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ContentManifestPayload.FileMapping = (function() {
    
            /**
             * Properties of a FileMapping.
             * @memberof ContentManifestPayload
             * @interface IFileMapping
             * @property {string|null} [filename] FileMapping filename
             * @property {number|Long|null} [size] FileMapping size
             * @property {number|null} [flags] FileMapping flags
             * @property {Uint8Array|null} [sha_filename] FileMapping sha_filename
             * @property {Uint8Array|null} [sha_content] FileMapping sha_content
             * @property {Array.<ContentManifestPayload.FileMapping.IChunkData>|null} [chunks] FileMapping chunks
             * @property {string|null} [linktarget] FileMapping linktarget
             */
    
            /**
             * Constructs a new FileMapping.
             * @memberof ContentManifestPayload
             * @classdesc Represents a FileMapping.
             * @implements IFileMapping
             * @constructor
             * @param {ContentManifestPayload.IFileMapping=} [properties] Properties to set
             */
            function FileMapping(properties) {
                this.chunks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FileMapping filename.
             * @member {string} filename
             * @memberof ContentManifestPayload.FileMapping
             * @instance
             */
            FileMapping.prototype.filename = "";
    
            /**
             * FileMapping size.
             * @member {number|Long} size
             * @memberof ContentManifestPayload.FileMapping
             * @instance
             */
            FileMapping.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * FileMapping flags.
             * @member {number} flags
             * @memberof ContentManifestPayload.FileMapping
             * @instance
             */
            FileMapping.prototype.flags = 0;
    
            /**
             * FileMapping sha_filename.
             * @member {Uint8Array} sha_filename
             * @memberof ContentManifestPayload.FileMapping
             * @instance
             */
            FileMapping.prototype.sha_filename = $util.newBuffer([]);
    
            /**
             * FileMapping sha_content.
             * @member {Uint8Array} sha_content
             * @memberof ContentManifestPayload.FileMapping
             * @instance
             */
            FileMapping.prototype.sha_content = $util.newBuffer([]);
    
            /**
             * FileMapping chunks.
             * @member {Array.<ContentManifestPayload.FileMapping.IChunkData>} chunks
             * @memberof ContentManifestPayload.FileMapping
             * @instance
             */
            FileMapping.prototype.chunks = $util.emptyArray;
    
            /**
             * FileMapping linktarget.
             * @member {string} linktarget
             * @memberof ContentManifestPayload.FileMapping
             * @instance
             */
            FileMapping.prototype.linktarget = "";
    
            /**
             * Creates a new FileMapping instance using the specified properties.
             * @function create
             * @memberof ContentManifestPayload.FileMapping
             * @static
             * @param {ContentManifestPayload.IFileMapping=} [properties] Properties to set
             * @returns {ContentManifestPayload.FileMapping} FileMapping instance
             */
            FileMapping.create = function create(properties) {
                return new FileMapping(properties);
            };
    
            /**
             * Encodes the specified FileMapping message. Does not implicitly {@link ContentManifestPayload.FileMapping.verify|verify} messages.
             * @function encode
             * @memberof ContentManifestPayload.FileMapping
             * @static
             * @param {ContentManifestPayload.IFileMapping} message FileMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileMapping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filename != null && message.hasOwnProperty("filename"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
                if (message.size != null && message.hasOwnProperty("size"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.size);
                if (message.flags != null && message.hasOwnProperty("flags"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.flags);
                if (message.sha_filename != null && message.hasOwnProperty("sha_filename"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.sha_filename);
                if (message.sha_content != null && message.hasOwnProperty("sha_content"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.sha_content);
                if (message.chunks != null && message.chunks.length)
                    for (var i = 0; i < message.chunks.length; ++i)
                        $root.ContentManifestPayload.FileMapping.ChunkData.encode(message.chunks[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.linktarget != null && message.hasOwnProperty("linktarget"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.linktarget);
                return writer;
            };
    
            /**
             * Encodes the specified FileMapping message, length delimited. Does not implicitly {@link ContentManifestPayload.FileMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ContentManifestPayload.FileMapping
             * @static
             * @param {ContentManifestPayload.IFileMapping} message FileMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileMapping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FileMapping message from the specified reader or buffer.
             * @function decode
             * @memberof ContentManifestPayload.FileMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ContentManifestPayload.FileMapping} FileMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileMapping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContentManifestPayload.FileMapping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.filename = reader.string();
                        break;
                    case 2:
                        message.size = reader.uint64();
                        break;
                    case 3:
                        message.flags = reader.uint32();
                        break;
                    case 4:
                        message.sha_filename = reader.bytes();
                        break;
                    case 5:
                        message.sha_content = reader.bytes();
                        break;
                    case 6:
                        if (!(message.chunks && message.chunks.length))
                            message.chunks = [];
                        message.chunks.push($root.ContentManifestPayload.FileMapping.ChunkData.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.linktarget = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FileMapping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ContentManifestPayload.FileMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ContentManifestPayload.FileMapping} FileMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileMapping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FileMapping message.
             * @function verify
             * @memberof ContentManifestPayload.FileMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileMapping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filename != null && message.hasOwnProperty("filename"))
                    if (!$util.isString(message.filename))
                        return "filename: string expected";
                if (message.size != null && message.hasOwnProperty("size"))
                    if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                        return "size: integer|Long expected";
                if (message.flags != null && message.hasOwnProperty("flags"))
                    if (!$util.isInteger(message.flags))
                        return "flags: integer expected";
                if (message.sha_filename != null && message.hasOwnProperty("sha_filename"))
                    if (!(message.sha_filename && typeof message.sha_filename.length === "number" || $util.isString(message.sha_filename)))
                        return "sha_filename: buffer expected";
                if (message.sha_content != null && message.hasOwnProperty("sha_content"))
                    if (!(message.sha_content && typeof message.sha_content.length === "number" || $util.isString(message.sha_content)))
                        return "sha_content: buffer expected";
                if (message.chunks != null && message.hasOwnProperty("chunks")) {
                    if (!Array.isArray(message.chunks))
                        return "chunks: array expected";
                    for (var i = 0; i < message.chunks.length; ++i) {
                        var error = $root.ContentManifestPayload.FileMapping.ChunkData.verify(message.chunks[i]);
                        if (error)
                            return "chunks." + error;
                    }
                }
                if (message.linktarget != null && message.hasOwnProperty("linktarget"))
                    if (!$util.isString(message.linktarget))
                        return "linktarget: string expected";
                return null;
            };
    
            /**
             * Creates a FileMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ContentManifestPayload.FileMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ContentManifestPayload.FileMapping} FileMapping
             */
            FileMapping.fromObject = function fromObject(object) {
                if (object instanceof $root.ContentManifestPayload.FileMapping)
                    return object;
                var message = new $root.ContentManifestPayload.FileMapping();
                if (object.filename != null)
                    message.filename = String(object.filename);
                if (object.size != null)
                    if ($util.Long)
                        (message.size = $util.Long.fromValue(object.size)).unsigned = true;
                    else if (typeof object.size === "string")
                        message.size = parseInt(object.size, 10);
                    else if (typeof object.size === "number")
                        message.size = object.size;
                    else if (typeof object.size === "object")
                        message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
                if (object.flags != null)
                    message.flags = object.flags >>> 0;
                if (object.sha_filename != null)
                    if (typeof object.sha_filename === "string")
                        $util.base64.decode(object.sha_filename, message.sha_filename = $util.newBuffer($util.base64.length(object.sha_filename)), 0);
                    else if (object.sha_filename.length)
                        message.sha_filename = object.sha_filename;
                if (object.sha_content != null)
                    if (typeof object.sha_content === "string")
                        $util.base64.decode(object.sha_content, message.sha_content = $util.newBuffer($util.base64.length(object.sha_content)), 0);
                    else if (object.sha_content.length)
                        message.sha_content = object.sha_content;
                if (object.chunks) {
                    if (!Array.isArray(object.chunks))
                        throw TypeError(".ContentManifestPayload.FileMapping.chunks: array expected");
                    message.chunks = [];
                    for (var i = 0; i < object.chunks.length; ++i) {
                        if (typeof object.chunks[i] !== "object")
                            throw TypeError(".ContentManifestPayload.FileMapping.chunks: object expected");
                        message.chunks[i] = $root.ContentManifestPayload.FileMapping.ChunkData.fromObject(object.chunks[i]);
                    }
                }
                if (object.linktarget != null)
                    message.linktarget = String(object.linktarget);
                return message;
            };
    
            /**
             * Creates a plain object from a FileMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ContentManifestPayload.FileMapping
             * @static
             * @param {ContentManifestPayload.FileMapping} message FileMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileMapping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.chunks = [];
                if (options.defaults) {
                    object.filename = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.size = options.longs === String ? "0" : 0;
                    object.flags = 0;
                    if (options.bytes === String)
                        object.sha_filename = "";
                    else {
                        object.sha_filename = [];
                        if (options.bytes !== Array)
                            object.sha_filename = $util.newBuffer(object.sha_filename);
                    }
                    if (options.bytes === String)
                        object.sha_content = "";
                    else {
                        object.sha_content = [];
                        if (options.bytes !== Array)
                            object.sha_content = $util.newBuffer(object.sha_content);
                    }
                    object.linktarget = "";
                }
                if (message.filename != null && message.hasOwnProperty("filename"))
                    object.filename = message.filename;
                if (message.size != null && message.hasOwnProperty("size"))
                    if (typeof message.size === "number")
                        object.size = options.longs === String ? String(message.size) : message.size;
                    else
                        object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
                if (message.flags != null && message.hasOwnProperty("flags"))
                    object.flags = message.flags;
                if (message.sha_filename != null && message.hasOwnProperty("sha_filename"))
                    object.sha_filename = options.bytes === String ? $util.base64.encode(message.sha_filename, 0, message.sha_filename.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha_filename) : message.sha_filename;
                if (message.sha_content != null && message.hasOwnProperty("sha_content"))
                    object.sha_content = options.bytes === String ? $util.base64.encode(message.sha_content, 0, message.sha_content.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha_content) : message.sha_content;
                if (message.chunks && message.chunks.length) {
                    object.chunks = [];
                    for (var j = 0; j < message.chunks.length; ++j)
                        object.chunks[j] = $root.ContentManifestPayload.FileMapping.ChunkData.toObject(message.chunks[j], options);
                }
                if (message.linktarget != null && message.hasOwnProperty("linktarget"))
                    object.linktarget = message.linktarget;
                return object;
            };
    
            /**
             * Converts this FileMapping to JSON.
             * @function toJSON
             * @memberof ContentManifestPayload.FileMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileMapping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            FileMapping.ChunkData = (function() {
    
                /**
                 * Properties of a ChunkData.
                 * @memberof ContentManifestPayload.FileMapping
                 * @interface IChunkData
                 * @property {Uint8Array|null} [sha] ChunkData sha
                 * @property {number|null} [crc] ChunkData crc
                 * @property {number|Long|null} [offset] ChunkData offset
                 * @property {number|null} [cb_original] ChunkData cb_original
                 * @property {number|null} [cb_compressed] ChunkData cb_compressed
                 */
    
                /**
                 * Constructs a new ChunkData.
                 * @memberof ContentManifestPayload.FileMapping
                 * @classdesc Represents a ChunkData.
                 * @implements IChunkData
                 * @constructor
                 * @param {ContentManifestPayload.FileMapping.IChunkData=} [properties] Properties to set
                 */
                function ChunkData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ChunkData sha.
                 * @member {Uint8Array} sha
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @instance
                 */
                ChunkData.prototype.sha = $util.newBuffer([]);
    
                /**
                 * ChunkData crc.
                 * @member {number} crc
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @instance
                 */
                ChunkData.prototype.crc = 0;
    
                /**
                 * ChunkData offset.
                 * @member {number|Long} offset
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @instance
                 */
                ChunkData.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * ChunkData cb_original.
                 * @member {number} cb_original
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @instance
                 */
                ChunkData.prototype.cb_original = 0;
    
                /**
                 * ChunkData cb_compressed.
                 * @member {number} cb_compressed
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @instance
                 */
                ChunkData.prototype.cb_compressed = 0;
    
                /**
                 * Creates a new ChunkData instance using the specified properties.
                 * @function create
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @static
                 * @param {ContentManifestPayload.FileMapping.IChunkData=} [properties] Properties to set
                 * @returns {ContentManifestPayload.FileMapping.ChunkData} ChunkData instance
                 */
                ChunkData.create = function create(properties) {
                    return new ChunkData(properties);
                };
    
                /**
                 * Encodes the specified ChunkData message. Does not implicitly {@link ContentManifestPayload.FileMapping.ChunkData.verify|verify} messages.
                 * @function encode
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @static
                 * @param {ContentManifestPayload.FileMapping.IChunkData} message ChunkData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChunkData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sha != null && message.hasOwnProperty("sha"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sha);
                    if (message.crc != null && message.hasOwnProperty("crc"))
                        writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.crc);
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.offset);
                    if (message.cb_original != null && message.hasOwnProperty("cb_original"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.cb_original);
                    if (message.cb_compressed != null && message.hasOwnProperty("cb_compressed"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cb_compressed);
                    return writer;
                };
    
                /**
                 * Encodes the specified ChunkData message, length delimited. Does not implicitly {@link ContentManifestPayload.FileMapping.ChunkData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @static
                 * @param {ContentManifestPayload.FileMapping.IChunkData} message ChunkData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChunkData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ChunkData message from the specified reader or buffer.
                 * @function decode
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ContentManifestPayload.FileMapping.ChunkData} ChunkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChunkData.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContentManifestPayload.FileMapping.ChunkData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.sha = reader.bytes();
                            break;
                        case 2:
                            message.crc = reader.fixed32();
                            break;
                        case 3:
                            message.offset = reader.uint64();
                            break;
                        case 4:
                            message.cb_original = reader.uint32();
                            break;
                        case 5:
                            message.cb_compressed = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ChunkData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ContentManifestPayload.FileMapping.ChunkData} ChunkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChunkData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ChunkData message.
                 * @function verify
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ChunkData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sha != null && message.hasOwnProperty("sha"))
                        if (!(message.sha && typeof message.sha.length === "number" || $util.isString(message.sha)))
                            return "sha: buffer expected";
                    if (message.crc != null && message.hasOwnProperty("crc"))
                        if (!$util.isInteger(message.crc))
                            return "crc: integer expected";
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        if (!$util.isInteger(message.offset) && !(message.offset && $util.isInteger(message.offset.low) && $util.isInteger(message.offset.high)))
                            return "offset: integer|Long expected";
                    if (message.cb_original != null && message.hasOwnProperty("cb_original"))
                        if (!$util.isInteger(message.cb_original))
                            return "cb_original: integer expected";
                    if (message.cb_compressed != null && message.hasOwnProperty("cb_compressed"))
                        if (!$util.isInteger(message.cb_compressed))
                            return "cb_compressed: integer expected";
                    return null;
                };
    
                /**
                 * Creates a ChunkData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ContentManifestPayload.FileMapping.ChunkData} ChunkData
                 */
                ChunkData.fromObject = function fromObject(object) {
                    if (object instanceof $root.ContentManifestPayload.FileMapping.ChunkData)
                        return object;
                    var message = new $root.ContentManifestPayload.FileMapping.ChunkData();
                    if (object.sha != null)
                        if (typeof object.sha === "string")
                            $util.base64.decode(object.sha, message.sha = $util.newBuffer($util.base64.length(object.sha)), 0);
                        else if (object.sha.length)
                            message.sha = object.sha;
                    if (object.crc != null)
                        message.crc = object.crc >>> 0;
                    if (object.offset != null)
                        if ($util.Long)
                            (message.offset = $util.Long.fromValue(object.offset)).unsigned = true;
                        else if (typeof object.offset === "string")
                            message.offset = parseInt(object.offset, 10);
                        else if (typeof object.offset === "number")
                            message.offset = object.offset;
                        else if (typeof object.offset === "object")
                            message.offset = new $util.LongBits(object.offset.low >>> 0, object.offset.high >>> 0).toNumber(true);
                    if (object.cb_original != null)
                        message.cb_original = object.cb_original >>> 0;
                    if (object.cb_compressed != null)
                        message.cb_compressed = object.cb_compressed >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a ChunkData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @static
                 * @param {ContentManifestPayload.FileMapping.ChunkData} message ChunkData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ChunkData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.sha = "";
                        else {
                            object.sha = [];
                            if (options.bytes !== Array)
                                object.sha = $util.newBuffer(object.sha);
                        }
                        object.crc = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.offset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.offset = options.longs === String ? "0" : 0;
                        object.cb_original = 0;
                        object.cb_compressed = 0;
                    }
                    if (message.sha != null && message.hasOwnProperty("sha"))
                        object.sha = options.bytes === String ? $util.base64.encode(message.sha, 0, message.sha.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha) : message.sha;
                    if (message.crc != null && message.hasOwnProperty("crc"))
                        object.crc = message.crc;
                    if (message.offset != null && message.hasOwnProperty("offset"))
                        if (typeof message.offset === "number")
                            object.offset = options.longs === String ? String(message.offset) : message.offset;
                        else
                            object.offset = options.longs === String ? $util.Long.prototype.toString.call(message.offset) : options.longs === Number ? new $util.LongBits(message.offset.low >>> 0, message.offset.high >>> 0).toNumber(true) : message.offset;
                    if (message.cb_original != null && message.hasOwnProperty("cb_original"))
                        object.cb_original = message.cb_original;
                    if (message.cb_compressed != null && message.hasOwnProperty("cb_compressed"))
                        object.cb_compressed = message.cb_compressed;
                    return object;
                };
    
                /**
                 * Converts this ChunkData to JSON.
                 * @function toJSON
                 * @memberof ContentManifestPayload.FileMapping.ChunkData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ChunkData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ChunkData;
            })();
    
            return FileMapping;
        })();
    
        return ContentManifestPayload;
    })();
    
    $root.ContentManifestMetadata = (function() {
    
        /**
         * Properties of a ContentManifestMetadata.
         * @exports IContentManifestMetadata
         * @interface IContentManifestMetadata
         * @property {number|null} [depot_id] ContentManifestMetadata depot_id
         * @property {number|Long|null} [gid_manifest] ContentManifestMetadata gid_manifest
         * @property {number|null} [creation_time] ContentManifestMetadata creation_time
         * @property {boolean|null} [filenames_encrypted] ContentManifestMetadata filenames_encrypted
         * @property {number|Long|null} [cb_disk_original] ContentManifestMetadata cb_disk_original
         * @property {number|Long|null} [cb_disk_compressed] ContentManifestMetadata cb_disk_compressed
         * @property {number|null} [unique_chunks] ContentManifestMetadata unique_chunks
         * @property {number|null} [crc_encrypted] ContentManifestMetadata crc_encrypted
         * @property {number|null} [crc_clear] ContentManifestMetadata crc_clear
         */
    
        /**
         * Constructs a new ContentManifestMetadata.
         * @exports ContentManifestMetadata
         * @classdesc Represents a ContentManifestMetadata.
         * @implements IContentManifestMetadata
         * @constructor
         * @param {IContentManifestMetadata=} [properties] Properties to set
         */
        function ContentManifestMetadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ContentManifestMetadata depot_id.
         * @member {number} depot_id
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.depot_id = 0;
    
        /**
         * ContentManifestMetadata gid_manifest.
         * @member {number|Long} gid_manifest
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.gid_manifest = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * ContentManifestMetadata creation_time.
         * @member {number} creation_time
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.creation_time = 0;
    
        /**
         * ContentManifestMetadata filenames_encrypted.
         * @member {boolean} filenames_encrypted
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.filenames_encrypted = false;
    
        /**
         * ContentManifestMetadata cb_disk_original.
         * @member {number|Long} cb_disk_original
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.cb_disk_original = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * ContentManifestMetadata cb_disk_compressed.
         * @member {number|Long} cb_disk_compressed
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.cb_disk_compressed = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * ContentManifestMetadata unique_chunks.
         * @member {number} unique_chunks
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.unique_chunks = 0;
    
        /**
         * ContentManifestMetadata crc_encrypted.
         * @member {number} crc_encrypted
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.crc_encrypted = 0;
    
        /**
         * ContentManifestMetadata crc_clear.
         * @member {number} crc_clear
         * @memberof ContentManifestMetadata
         * @instance
         */
        ContentManifestMetadata.prototype.crc_clear = 0;
    
        /**
         * Creates a new ContentManifestMetadata instance using the specified properties.
         * @function create
         * @memberof ContentManifestMetadata
         * @static
         * @param {IContentManifestMetadata=} [properties] Properties to set
         * @returns {ContentManifestMetadata} ContentManifestMetadata instance
         */
        ContentManifestMetadata.create = function create(properties) {
            return new ContentManifestMetadata(properties);
        };
    
        /**
         * Encodes the specified ContentManifestMetadata message. Does not implicitly {@link ContentManifestMetadata.verify|verify} messages.
         * @function encode
         * @memberof ContentManifestMetadata
         * @static
         * @param {IContentManifestMetadata} message ContentManifestMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentManifestMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.depot_id != null && message.hasOwnProperty("depot_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.depot_id);
            if (message.gid_manifest != null && message.hasOwnProperty("gid_manifest"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gid_manifest);
            if (message.creation_time != null && message.hasOwnProperty("creation_time"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.creation_time);
            if (message.filenames_encrypted != null && message.hasOwnProperty("filenames_encrypted"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.filenames_encrypted);
            if (message.cb_disk_original != null && message.hasOwnProperty("cb_disk_original"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.cb_disk_original);
            if (message.cb_disk_compressed != null && message.hasOwnProperty("cb_disk_compressed"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.cb_disk_compressed);
            if (message.unique_chunks != null && message.hasOwnProperty("unique_chunks"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.unique_chunks);
            if (message.crc_encrypted != null && message.hasOwnProperty("crc_encrypted"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.crc_encrypted);
            if (message.crc_clear != null && message.hasOwnProperty("crc_clear"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.crc_clear);
            return writer;
        };
    
        /**
         * Encodes the specified ContentManifestMetadata message, length delimited. Does not implicitly {@link ContentManifestMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ContentManifestMetadata
         * @static
         * @param {IContentManifestMetadata} message ContentManifestMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentManifestMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ContentManifestMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof ContentManifestMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ContentManifestMetadata} ContentManifestMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentManifestMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContentManifestMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.depot_id = reader.uint32();
                    break;
                case 2:
                    message.gid_manifest = reader.uint64();
                    break;
                case 3:
                    message.creation_time = reader.uint32();
                    break;
                case 4:
                    message.filenames_encrypted = reader.bool();
                    break;
                case 5:
                    message.cb_disk_original = reader.uint64();
                    break;
                case 6:
                    message.cb_disk_compressed = reader.uint64();
                    break;
                case 7:
                    message.unique_chunks = reader.uint32();
                    break;
                case 8:
                    message.crc_encrypted = reader.uint32();
                    break;
                case 9:
                    message.crc_clear = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ContentManifestMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ContentManifestMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ContentManifestMetadata} ContentManifestMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentManifestMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ContentManifestMetadata message.
         * @function verify
         * @memberof ContentManifestMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContentManifestMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.depot_id != null && message.hasOwnProperty("depot_id"))
                if (!$util.isInteger(message.depot_id))
                    return "depot_id: integer expected";
            if (message.gid_manifest != null && message.hasOwnProperty("gid_manifest"))
                if (!$util.isInteger(message.gid_manifest) && !(message.gid_manifest && $util.isInteger(message.gid_manifest.low) && $util.isInteger(message.gid_manifest.high)))
                    return "gid_manifest: integer|Long expected";
            if (message.creation_time != null && message.hasOwnProperty("creation_time"))
                if (!$util.isInteger(message.creation_time))
                    return "creation_time: integer expected";
            if (message.filenames_encrypted != null && message.hasOwnProperty("filenames_encrypted"))
                if (typeof message.filenames_encrypted !== "boolean")
                    return "filenames_encrypted: boolean expected";
            if (message.cb_disk_original != null && message.hasOwnProperty("cb_disk_original"))
                if (!$util.isInteger(message.cb_disk_original) && !(message.cb_disk_original && $util.isInteger(message.cb_disk_original.low) && $util.isInteger(message.cb_disk_original.high)))
                    return "cb_disk_original: integer|Long expected";
            if (message.cb_disk_compressed != null && message.hasOwnProperty("cb_disk_compressed"))
                if (!$util.isInteger(message.cb_disk_compressed) && !(message.cb_disk_compressed && $util.isInteger(message.cb_disk_compressed.low) && $util.isInteger(message.cb_disk_compressed.high)))
                    return "cb_disk_compressed: integer|Long expected";
            if (message.unique_chunks != null && message.hasOwnProperty("unique_chunks"))
                if (!$util.isInteger(message.unique_chunks))
                    return "unique_chunks: integer expected";
            if (message.crc_encrypted != null && message.hasOwnProperty("crc_encrypted"))
                if (!$util.isInteger(message.crc_encrypted))
                    return "crc_encrypted: integer expected";
            if (message.crc_clear != null && message.hasOwnProperty("crc_clear"))
                if (!$util.isInteger(message.crc_clear))
                    return "crc_clear: integer expected";
            return null;
        };
    
        /**
         * Creates a ContentManifestMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ContentManifestMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ContentManifestMetadata} ContentManifestMetadata
         */
        ContentManifestMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.ContentManifestMetadata)
                return object;
            var message = new $root.ContentManifestMetadata();
            if (object.depot_id != null)
                message.depot_id = object.depot_id >>> 0;
            if (object.gid_manifest != null)
                if ($util.Long)
                    (message.gid_manifest = $util.Long.fromValue(object.gid_manifest)).unsigned = true;
                else if (typeof object.gid_manifest === "string")
                    message.gid_manifest = parseInt(object.gid_manifest, 10);
                else if (typeof object.gid_manifest === "number")
                    message.gid_manifest = object.gid_manifest;
                else if (typeof object.gid_manifest === "object")
                    message.gid_manifest = new $util.LongBits(object.gid_manifest.low >>> 0, object.gid_manifest.high >>> 0).toNumber(true);
            if (object.creation_time != null)
                message.creation_time = object.creation_time >>> 0;
            if (object.filenames_encrypted != null)
                message.filenames_encrypted = Boolean(object.filenames_encrypted);
            if (object.cb_disk_original != null)
                if ($util.Long)
                    (message.cb_disk_original = $util.Long.fromValue(object.cb_disk_original)).unsigned = true;
                else if (typeof object.cb_disk_original === "string")
                    message.cb_disk_original = parseInt(object.cb_disk_original, 10);
                else if (typeof object.cb_disk_original === "number")
                    message.cb_disk_original = object.cb_disk_original;
                else if (typeof object.cb_disk_original === "object")
                    message.cb_disk_original = new $util.LongBits(object.cb_disk_original.low >>> 0, object.cb_disk_original.high >>> 0).toNumber(true);
            if (object.cb_disk_compressed != null)
                if ($util.Long)
                    (message.cb_disk_compressed = $util.Long.fromValue(object.cb_disk_compressed)).unsigned = true;
                else if (typeof object.cb_disk_compressed === "string")
                    message.cb_disk_compressed = parseInt(object.cb_disk_compressed, 10);
                else if (typeof object.cb_disk_compressed === "number")
                    message.cb_disk_compressed = object.cb_disk_compressed;
                else if (typeof object.cb_disk_compressed === "object")
                    message.cb_disk_compressed = new $util.LongBits(object.cb_disk_compressed.low >>> 0, object.cb_disk_compressed.high >>> 0).toNumber(true);
            if (object.unique_chunks != null)
                message.unique_chunks = object.unique_chunks >>> 0;
            if (object.crc_encrypted != null)
                message.crc_encrypted = object.crc_encrypted >>> 0;
            if (object.crc_clear != null)
                message.crc_clear = object.crc_clear >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a ContentManifestMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ContentManifestMetadata
         * @static
         * @param {ContentManifestMetadata} message ContentManifestMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContentManifestMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.depot_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.gid_manifest = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gid_manifest = options.longs === String ? "0" : 0;
                object.creation_time = 0;
                object.filenames_encrypted = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cb_disk_original = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cb_disk_original = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cb_disk_compressed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cb_disk_compressed = options.longs === String ? "0" : 0;
                object.unique_chunks = 0;
                object.crc_encrypted = 0;
                object.crc_clear = 0;
            }
            if (message.depot_id != null && message.hasOwnProperty("depot_id"))
                object.depot_id = message.depot_id;
            if (message.gid_manifest != null && message.hasOwnProperty("gid_manifest"))
                if (typeof message.gid_manifest === "number")
                    object.gid_manifest = options.longs === String ? String(message.gid_manifest) : message.gid_manifest;
                else
                    object.gid_manifest = options.longs === String ? $util.Long.prototype.toString.call(message.gid_manifest) : options.longs === Number ? new $util.LongBits(message.gid_manifest.low >>> 0, message.gid_manifest.high >>> 0).toNumber(true) : message.gid_manifest;
            if (message.creation_time != null && message.hasOwnProperty("creation_time"))
                object.creation_time = message.creation_time;
            if (message.filenames_encrypted != null && message.hasOwnProperty("filenames_encrypted"))
                object.filenames_encrypted = message.filenames_encrypted;
            if (message.cb_disk_original != null && message.hasOwnProperty("cb_disk_original"))
                if (typeof message.cb_disk_original === "number")
                    object.cb_disk_original = options.longs === String ? String(message.cb_disk_original) : message.cb_disk_original;
                else
                    object.cb_disk_original = options.longs === String ? $util.Long.prototype.toString.call(message.cb_disk_original) : options.longs === Number ? new $util.LongBits(message.cb_disk_original.low >>> 0, message.cb_disk_original.high >>> 0).toNumber(true) : message.cb_disk_original;
            if (message.cb_disk_compressed != null && message.hasOwnProperty("cb_disk_compressed"))
                if (typeof message.cb_disk_compressed === "number")
                    object.cb_disk_compressed = options.longs === String ? String(message.cb_disk_compressed) : message.cb_disk_compressed;
                else
                    object.cb_disk_compressed = options.longs === String ? $util.Long.prototype.toString.call(message.cb_disk_compressed) : options.longs === Number ? new $util.LongBits(message.cb_disk_compressed.low >>> 0, message.cb_disk_compressed.high >>> 0).toNumber(true) : message.cb_disk_compressed;
            if (message.unique_chunks != null && message.hasOwnProperty("unique_chunks"))
                object.unique_chunks = message.unique_chunks;
            if (message.crc_encrypted != null && message.hasOwnProperty("crc_encrypted"))
                object.crc_encrypted = message.crc_encrypted;
            if (message.crc_clear != null && message.hasOwnProperty("crc_clear"))
                object.crc_clear = message.crc_clear;
            return object;
        };
    
        /**
         * Converts this ContentManifestMetadata to JSON.
         * @function toJSON
         * @memberof ContentManifestMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentManifestMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ContentManifestMetadata;
    })();
    
    $root.ContentManifestSignature = (function() {
    
        /**
         * Properties of a ContentManifestSignature.
         * @exports IContentManifestSignature
         * @interface IContentManifestSignature
         * @property {Uint8Array|null} [signature] ContentManifestSignature signature
         */
    
        /**
         * Constructs a new ContentManifestSignature.
         * @exports ContentManifestSignature
         * @classdesc Represents a ContentManifestSignature.
         * @implements IContentManifestSignature
         * @constructor
         * @param {IContentManifestSignature=} [properties] Properties to set
         */
        function ContentManifestSignature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ContentManifestSignature signature.
         * @member {Uint8Array} signature
         * @memberof ContentManifestSignature
         * @instance
         */
        ContentManifestSignature.prototype.signature = $util.newBuffer([]);
    
        /**
         * Creates a new ContentManifestSignature instance using the specified properties.
         * @function create
         * @memberof ContentManifestSignature
         * @static
         * @param {IContentManifestSignature=} [properties] Properties to set
         * @returns {ContentManifestSignature} ContentManifestSignature instance
         */
        ContentManifestSignature.create = function create(properties) {
            return new ContentManifestSignature(properties);
        };
    
        /**
         * Encodes the specified ContentManifestSignature message. Does not implicitly {@link ContentManifestSignature.verify|verify} messages.
         * @function encode
         * @memberof ContentManifestSignature
         * @static
         * @param {IContentManifestSignature} message ContentManifestSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentManifestSignature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.signature);
            return writer;
        };
    
        /**
         * Encodes the specified ContentManifestSignature message, length delimited. Does not implicitly {@link ContentManifestSignature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ContentManifestSignature
         * @static
         * @param {IContentManifestSignature} message ContentManifestSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentManifestSignature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ContentManifestSignature message from the specified reader or buffer.
         * @function decode
         * @memberof ContentManifestSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ContentManifestSignature} ContentManifestSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentManifestSignature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContentManifestSignature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
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
         * Decodes a ContentManifestSignature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ContentManifestSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ContentManifestSignature} ContentManifestSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentManifestSignature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ContentManifestSignature message.
         * @function verify
         * @memberof ContentManifestSignature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContentManifestSignature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };
    
        /**
         * Creates a ContentManifestSignature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ContentManifestSignature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ContentManifestSignature} ContentManifestSignature
         */
        ContentManifestSignature.fromObject = function fromObject(object) {
            if (object instanceof $root.ContentManifestSignature)
                return object;
            var message = new $root.ContentManifestSignature();
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };
    
        /**
         * Creates a plain object from a ContentManifestSignature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ContentManifestSignature
         * @static
         * @param {ContentManifestSignature} message ContentManifestSignature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContentManifestSignature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };
    
        /**
         * Converts this ContentManifestSignature to JSON.
         * @function toJSON
         * @memberof ContentManifestSignature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentManifestSignature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ContentManifestSignature;
    })();
    
    $root.ContentDeltaChunks = (function() {
    
        /**
         * Properties of a ContentDeltaChunks.
         * @exports IContentDeltaChunks
         * @interface IContentDeltaChunks
         * @property {number|null} [depot_id] ContentDeltaChunks depot_id
         * @property {number|Long|null} [manifest_id_source] ContentDeltaChunks manifest_id_source
         * @property {number|Long|null} [manifest_id_target] ContentDeltaChunks manifest_id_target
         * @property {Array.<ContentDeltaChunks.IDeltaChunk>|null} [deltaChunks] ContentDeltaChunks deltaChunks
         */
    
        /**
         * Constructs a new ContentDeltaChunks.
         * @exports ContentDeltaChunks
         * @classdesc Represents a ContentDeltaChunks.
         * @implements IContentDeltaChunks
         * @constructor
         * @param {IContentDeltaChunks=} [properties] Properties to set
         */
        function ContentDeltaChunks(properties) {
            this.deltaChunks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ContentDeltaChunks depot_id.
         * @member {number} depot_id
         * @memberof ContentDeltaChunks
         * @instance
         */
        ContentDeltaChunks.prototype.depot_id = 0;
    
        /**
         * ContentDeltaChunks manifest_id_source.
         * @member {number|Long} manifest_id_source
         * @memberof ContentDeltaChunks
         * @instance
         */
        ContentDeltaChunks.prototype.manifest_id_source = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * ContentDeltaChunks manifest_id_target.
         * @member {number|Long} manifest_id_target
         * @memberof ContentDeltaChunks
         * @instance
         */
        ContentDeltaChunks.prototype.manifest_id_target = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * ContentDeltaChunks deltaChunks.
         * @member {Array.<ContentDeltaChunks.IDeltaChunk>} deltaChunks
         * @memberof ContentDeltaChunks
         * @instance
         */
        ContentDeltaChunks.prototype.deltaChunks = $util.emptyArray;
    
        /**
         * Creates a new ContentDeltaChunks instance using the specified properties.
         * @function create
         * @memberof ContentDeltaChunks
         * @static
         * @param {IContentDeltaChunks=} [properties] Properties to set
         * @returns {ContentDeltaChunks} ContentDeltaChunks instance
         */
        ContentDeltaChunks.create = function create(properties) {
            return new ContentDeltaChunks(properties);
        };
    
        /**
         * Encodes the specified ContentDeltaChunks message. Does not implicitly {@link ContentDeltaChunks.verify|verify} messages.
         * @function encode
         * @memberof ContentDeltaChunks
         * @static
         * @param {IContentDeltaChunks} message ContentDeltaChunks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentDeltaChunks.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.depot_id != null && message.hasOwnProperty("depot_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.depot_id);
            if (message.manifest_id_source != null && message.hasOwnProperty("manifest_id_source"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.manifest_id_source);
            if (message.manifest_id_target != null && message.hasOwnProperty("manifest_id_target"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.manifest_id_target);
            if (message.deltaChunks != null && message.deltaChunks.length)
                for (var i = 0; i < message.deltaChunks.length; ++i)
                    $root.ContentDeltaChunks.DeltaChunk.encode(message.deltaChunks[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified ContentDeltaChunks message, length delimited. Does not implicitly {@link ContentDeltaChunks.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ContentDeltaChunks
         * @static
         * @param {IContentDeltaChunks} message ContentDeltaChunks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContentDeltaChunks.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ContentDeltaChunks message from the specified reader or buffer.
         * @function decode
         * @memberof ContentDeltaChunks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ContentDeltaChunks} ContentDeltaChunks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentDeltaChunks.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContentDeltaChunks();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.depot_id = reader.uint32();
                    break;
                case 2:
                    message.manifest_id_source = reader.uint64();
                    break;
                case 3:
                    message.manifest_id_target = reader.uint64();
                    break;
                case 4:
                    if (!(message.deltaChunks && message.deltaChunks.length))
                        message.deltaChunks = [];
                    message.deltaChunks.push($root.ContentDeltaChunks.DeltaChunk.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ContentDeltaChunks message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ContentDeltaChunks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ContentDeltaChunks} ContentDeltaChunks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContentDeltaChunks.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ContentDeltaChunks message.
         * @function verify
         * @memberof ContentDeltaChunks
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContentDeltaChunks.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.depot_id != null && message.hasOwnProperty("depot_id"))
                if (!$util.isInteger(message.depot_id))
                    return "depot_id: integer expected";
            if (message.manifest_id_source != null && message.hasOwnProperty("manifest_id_source"))
                if (!$util.isInteger(message.manifest_id_source) && !(message.manifest_id_source && $util.isInteger(message.manifest_id_source.low) && $util.isInteger(message.manifest_id_source.high)))
                    return "manifest_id_source: integer|Long expected";
            if (message.manifest_id_target != null && message.hasOwnProperty("manifest_id_target"))
                if (!$util.isInteger(message.manifest_id_target) && !(message.manifest_id_target && $util.isInteger(message.manifest_id_target.low) && $util.isInteger(message.manifest_id_target.high)))
                    return "manifest_id_target: integer|Long expected";
            if (message.deltaChunks != null && message.hasOwnProperty("deltaChunks")) {
                if (!Array.isArray(message.deltaChunks))
                    return "deltaChunks: array expected";
                for (var i = 0; i < message.deltaChunks.length; ++i) {
                    var error = $root.ContentDeltaChunks.DeltaChunk.verify(message.deltaChunks[i]);
                    if (error)
                        return "deltaChunks." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a ContentDeltaChunks message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ContentDeltaChunks
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ContentDeltaChunks} ContentDeltaChunks
         */
        ContentDeltaChunks.fromObject = function fromObject(object) {
            if (object instanceof $root.ContentDeltaChunks)
                return object;
            var message = new $root.ContentDeltaChunks();
            if (object.depot_id != null)
                message.depot_id = object.depot_id >>> 0;
            if (object.manifest_id_source != null)
                if ($util.Long)
                    (message.manifest_id_source = $util.Long.fromValue(object.manifest_id_source)).unsigned = true;
                else if (typeof object.manifest_id_source === "string")
                    message.manifest_id_source = parseInt(object.manifest_id_source, 10);
                else if (typeof object.manifest_id_source === "number")
                    message.manifest_id_source = object.manifest_id_source;
                else if (typeof object.manifest_id_source === "object")
                    message.manifest_id_source = new $util.LongBits(object.manifest_id_source.low >>> 0, object.manifest_id_source.high >>> 0).toNumber(true);
            if (object.manifest_id_target != null)
                if ($util.Long)
                    (message.manifest_id_target = $util.Long.fromValue(object.manifest_id_target)).unsigned = true;
                else if (typeof object.manifest_id_target === "string")
                    message.manifest_id_target = parseInt(object.manifest_id_target, 10);
                else if (typeof object.manifest_id_target === "number")
                    message.manifest_id_target = object.manifest_id_target;
                else if (typeof object.manifest_id_target === "object")
                    message.manifest_id_target = new $util.LongBits(object.manifest_id_target.low >>> 0, object.manifest_id_target.high >>> 0).toNumber(true);
            if (object.deltaChunks) {
                if (!Array.isArray(object.deltaChunks))
                    throw TypeError(".ContentDeltaChunks.deltaChunks: array expected");
                message.deltaChunks = [];
                for (var i = 0; i < object.deltaChunks.length; ++i) {
                    if (typeof object.deltaChunks[i] !== "object")
                        throw TypeError(".ContentDeltaChunks.deltaChunks: object expected");
                    message.deltaChunks[i] = $root.ContentDeltaChunks.DeltaChunk.fromObject(object.deltaChunks[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ContentDeltaChunks message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ContentDeltaChunks
         * @static
         * @param {ContentDeltaChunks} message ContentDeltaChunks
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContentDeltaChunks.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.deltaChunks = [];
            if (options.defaults) {
                object.depot_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.manifest_id_source = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.manifest_id_source = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.manifest_id_target = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.manifest_id_target = options.longs === String ? "0" : 0;
            }
            if (message.depot_id != null && message.hasOwnProperty("depot_id"))
                object.depot_id = message.depot_id;
            if (message.manifest_id_source != null && message.hasOwnProperty("manifest_id_source"))
                if (typeof message.manifest_id_source === "number")
                    object.manifest_id_source = options.longs === String ? String(message.manifest_id_source) : message.manifest_id_source;
                else
                    object.manifest_id_source = options.longs === String ? $util.Long.prototype.toString.call(message.manifest_id_source) : options.longs === Number ? new $util.LongBits(message.manifest_id_source.low >>> 0, message.manifest_id_source.high >>> 0).toNumber(true) : message.manifest_id_source;
            if (message.manifest_id_target != null && message.hasOwnProperty("manifest_id_target"))
                if (typeof message.manifest_id_target === "number")
                    object.manifest_id_target = options.longs === String ? String(message.manifest_id_target) : message.manifest_id_target;
                else
                    object.manifest_id_target = options.longs === String ? $util.Long.prototype.toString.call(message.manifest_id_target) : options.longs === Number ? new $util.LongBits(message.manifest_id_target.low >>> 0, message.manifest_id_target.high >>> 0).toNumber(true) : message.manifest_id_target;
            if (message.deltaChunks && message.deltaChunks.length) {
                object.deltaChunks = [];
                for (var j = 0; j < message.deltaChunks.length; ++j)
                    object.deltaChunks[j] = $root.ContentDeltaChunks.DeltaChunk.toObject(message.deltaChunks[j], options);
            }
            return object;
        };
    
        /**
         * Converts this ContentDeltaChunks to JSON.
         * @function toJSON
         * @memberof ContentDeltaChunks
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContentDeltaChunks.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ContentDeltaChunks.DeltaChunk = (function() {
    
            /**
             * Properties of a DeltaChunk.
             * @memberof ContentDeltaChunks
             * @interface IDeltaChunk
             * @property {Uint8Array|null} [sha_source] DeltaChunk sha_source
             * @property {Uint8Array|null} [sha_target] DeltaChunk sha_target
             * @property {number|null} [size_original] DeltaChunk size_original
             * @property {number|null} [patch_method] DeltaChunk patch_method
             * @property {Uint8Array|null} [chunk] DeltaChunk chunk
             */
    
            /**
             * Constructs a new DeltaChunk.
             * @memberof ContentDeltaChunks
             * @classdesc Represents a DeltaChunk.
             * @implements IDeltaChunk
             * @constructor
             * @param {ContentDeltaChunks.IDeltaChunk=} [properties] Properties to set
             */
            function DeltaChunk(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeltaChunk sha_source.
             * @member {Uint8Array} sha_source
             * @memberof ContentDeltaChunks.DeltaChunk
             * @instance
             */
            DeltaChunk.prototype.sha_source = $util.newBuffer([]);
    
            /**
             * DeltaChunk sha_target.
             * @member {Uint8Array} sha_target
             * @memberof ContentDeltaChunks.DeltaChunk
             * @instance
             */
            DeltaChunk.prototype.sha_target = $util.newBuffer([]);
    
            /**
             * DeltaChunk size_original.
             * @member {number} size_original
             * @memberof ContentDeltaChunks.DeltaChunk
             * @instance
             */
            DeltaChunk.prototype.size_original = 0;
    
            /**
             * DeltaChunk patch_method.
             * @member {number} patch_method
             * @memberof ContentDeltaChunks.DeltaChunk
             * @instance
             */
            DeltaChunk.prototype.patch_method = 0;
    
            /**
             * DeltaChunk chunk.
             * @member {Uint8Array} chunk
             * @memberof ContentDeltaChunks.DeltaChunk
             * @instance
             */
            DeltaChunk.prototype.chunk = $util.newBuffer([]);
    
            /**
             * Creates a new DeltaChunk instance using the specified properties.
             * @function create
             * @memberof ContentDeltaChunks.DeltaChunk
             * @static
             * @param {ContentDeltaChunks.IDeltaChunk=} [properties] Properties to set
             * @returns {ContentDeltaChunks.DeltaChunk} DeltaChunk instance
             */
            DeltaChunk.create = function create(properties) {
                return new DeltaChunk(properties);
            };
    
            /**
             * Encodes the specified DeltaChunk message. Does not implicitly {@link ContentDeltaChunks.DeltaChunk.verify|verify} messages.
             * @function encode
             * @memberof ContentDeltaChunks.DeltaChunk
             * @static
             * @param {ContentDeltaChunks.IDeltaChunk} message DeltaChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeltaChunk.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sha_source != null && message.hasOwnProperty("sha_source"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sha_source);
                if (message.sha_target != null && message.hasOwnProperty("sha_target"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.sha_target);
                if (message.size_original != null && message.hasOwnProperty("size_original"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size_original);
                if (message.patch_method != null && message.hasOwnProperty("patch_method"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.patch_method);
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.chunk);
                return writer;
            };
    
            /**
             * Encodes the specified DeltaChunk message, length delimited. Does not implicitly {@link ContentDeltaChunks.DeltaChunk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ContentDeltaChunks.DeltaChunk
             * @static
             * @param {ContentDeltaChunks.IDeltaChunk} message DeltaChunk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeltaChunk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeltaChunk message from the specified reader or buffer.
             * @function decode
             * @memberof ContentDeltaChunks.DeltaChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ContentDeltaChunks.DeltaChunk} DeltaChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeltaChunk.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContentDeltaChunks.DeltaChunk();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sha_source = reader.bytes();
                        break;
                    case 2:
                        message.sha_target = reader.bytes();
                        break;
                    case 3:
                        message.size_original = reader.uint32();
                        break;
                    case 4:
                        message.patch_method = reader.uint32();
                        break;
                    case 5:
                        message.chunk = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeltaChunk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ContentDeltaChunks.DeltaChunk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ContentDeltaChunks.DeltaChunk} DeltaChunk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeltaChunk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeltaChunk message.
             * @function verify
             * @memberof ContentDeltaChunks.DeltaChunk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeltaChunk.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sha_source != null && message.hasOwnProperty("sha_source"))
                    if (!(message.sha_source && typeof message.sha_source.length === "number" || $util.isString(message.sha_source)))
                        return "sha_source: buffer expected";
                if (message.sha_target != null && message.hasOwnProperty("sha_target"))
                    if (!(message.sha_target && typeof message.sha_target.length === "number" || $util.isString(message.sha_target)))
                        return "sha_target: buffer expected";
                if (message.size_original != null && message.hasOwnProperty("size_original"))
                    if (!$util.isInteger(message.size_original))
                        return "size_original: integer expected";
                if (message.patch_method != null && message.hasOwnProperty("patch_method"))
                    if (!$util.isInteger(message.patch_method))
                        return "patch_method: integer expected";
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    if (!(message.chunk && typeof message.chunk.length === "number" || $util.isString(message.chunk)))
                        return "chunk: buffer expected";
                return null;
            };
    
            /**
             * Creates a DeltaChunk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ContentDeltaChunks.DeltaChunk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ContentDeltaChunks.DeltaChunk} DeltaChunk
             */
            DeltaChunk.fromObject = function fromObject(object) {
                if (object instanceof $root.ContentDeltaChunks.DeltaChunk)
                    return object;
                var message = new $root.ContentDeltaChunks.DeltaChunk();
                if (object.sha_source != null)
                    if (typeof object.sha_source === "string")
                        $util.base64.decode(object.sha_source, message.sha_source = $util.newBuffer($util.base64.length(object.sha_source)), 0);
                    else if (object.sha_source.length)
                        message.sha_source = object.sha_source;
                if (object.sha_target != null)
                    if (typeof object.sha_target === "string")
                        $util.base64.decode(object.sha_target, message.sha_target = $util.newBuffer($util.base64.length(object.sha_target)), 0);
                    else if (object.sha_target.length)
                        message.sha_target = object.sha_target;
                if (object.size_original != null)
                    message.size_original = object.size_original >>> 0;
                if (object.patch_method != null)
                    message.patch_method = object.patch_method >>> 0;
                if (object.chunk != null)
                    if (typeof object.chunk === "string")
                        $util.base64.decode(object.chunk, message.chunk = $util.newBuffer($util.base64.length(object.chunk)), 0);
                    else if (object.chunk.length)
                        message.chunk = object.chunk;
                return message;
            };
    
            /**
             * Creates a plain object from a DeltaChunk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ContentDeltaChunks.DeltaChunk
             * @static
             * @param {ContentDeltaChunks.DeltaChunk} message DeltaChunk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeltaChunk.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.sha_source = "";
                    else {
                        object.sha_source = [];
                        if (options.bytes !== Array)
                            object.sha_source = $util.newBuffer(object.sha_source);
                    }
                    if (options.bytes === String)
                        object.sha_target = "";
                    else {
                        object.sha_target = [];
                        if (options.bytes !== Array)
                            object.sha_target = $util.newBuffer(object.sha_target);
                    }
                    object.size_original = 0;
                    object.patch_method = 0;
                    if (options.bytes === String)
                        object.chunk = "";
                    else {
                        object.chunk = [];
                        if (options.bytes !== Array)
                            object.chunk = $util.newBuffer(object.chunk);
                    }
                }
                if (message.sha_source != null && message.hasOwnProperty("sha_source"))
                    object.sha_source = options.bytes === String ? $util.base64.encode(message.sha_source, 0, message.sha_source.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha_source) : message.sha_source;
                if (message.sha_target != null && message.hasOwnProperty("sha_target"))
                    object.sha_target = options.bytes === String ? $util.base64.encode(message.sha_target, 0, message.sha_target.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha_target) : message.sha_target;
                if (message.size_original != null && message.hasOwnProperty("size_original"))
                    object.size_original = message.size_original;
                if (message.patch_method != null && message.hasOwnProperty("patch_method"))
                    object.patch_method = message.patch_method;
                if (message.chunk != null && message.hasOwnProperty("chunk"))
                    object.chunk = options.bytes === String ? $util.base64.encode(message.chunk, 0, message.chunk.length) : options.bytes === Array ? Array.prototype.slice.call(message.chunk) : message.chunk;
                return object;
            };
    
            /**
             * Converts this DeltaChunk to JSON.
             * @function toJSON
             * @memberof ContentDeltaChunks.DeltaChunk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeltaChunk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeltaChunk;
        })();
    
        return ContentDeltaChunks;
    })();

    return $root;
});
