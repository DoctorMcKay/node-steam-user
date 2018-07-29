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
    
    $root.CCloud_GetUploadServerInfo_Request = (function() {
    
        /**
         * Properties of a CCloud_GetUploadServerInfo_Request.
         * @exports ICCloud_GetUploadServerInfo_Request
         * @interface ICCloud_GetUploadServerInfo_Request
         * @property {number|null} [appid] CCloud_GetUploadServerInfo_Request appid
         */
    
        /**
         * Constructs a new CCloud_GetUploadServerInfo_Request.
         * @exports CCloud_GetUploadServerInfo_Request
         * @classdesc Represents a CCloud_GetUploadServerInfo_Request.
         * @implements ICCloud_GetUploadServerInfo_Request
         * @constructor
         * @param {ICCloud_GetUploadServerInfo_Request=} [properties] Properties to set
         */
        function CCloud_GetUploadServerInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_GetUploadServerInfo_Request appid.
         * @member {number} appid
         * @memberof CCloud_GetUploadServerInfo_Request
         * @instance
         */
        CCloud_GetUploadServerInfo_Request.prototype.appid = 0;
    
        /**
         * Creates a new CCloud_GetUploadServerInfo_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_GetUploadServerInfo_Request
         * @static
         * @param {ICCloud_GetUploadServerInfo_Request=} [properties] Properties to set
         * @returns {CCloud_GetUploadServerInfo_Request} CCloud_GetUploadServerInfo_Request instance
         */
        CCloud_GetUploadServerInfo_Request.create = function create(properties) {
            return new CCloud_GetUploadServerInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_GetUploadServerInfo_Request message. Does not implicitly {@link CCloud_GetUploadServerInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_GetUploadServerInfo_Request
         * @static
         * @param {ICCloud_GetUploadServerInfo_Request} message CCloud_GetUploadServerInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetUploadServerInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_GetUploadServerInfo_Request message, length delimited. Does not implicitly {@link CCloud_GetUploadServerInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_GetUploadServerInfo_Request
         * @static
         * @param {ICCloud_GetUploadServerInfo_Request} message CCloud_GetUploadServerInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetUploadServerInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_GetUploadServerInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_GetUploadServerInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_GetUploadServerInfo_Request} CCloud_GetUploadServerInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetUploadServerInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_GetUploadServerInfo_Request();
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
         * Decodes a CCloud_GetUploadServerInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_GetUploadServerInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_GetUploadServerInfo_Request} CCloud_GetUploadServerInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetUploadServerInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_GetUploadServerInfo_Request message.
         * @function verify
         * @memberof CCloud_GetUploadServerInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_GetUploadServerInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_GetUploadServerInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_GetUploadServerInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_GetUploadServerInfo_Request} CCloud_GetUploadServerInfo_Request
         */
        CCloud_GetUploadServerInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_GetUploadServerInfo_Request)
                return object;
            var message = new $root.CCloud_GetUploadServerInfo_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_GetUploadServerInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_GetUploadServerInfo_Request
         * @static
         * @param {CCloud_GetUploadServerInfo_Request} message CCloud_GetUploadServerInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_GetUploadServerInfo_Request.toObject = function toObject(message, options) {
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
         * Converts this CCloud_GetUploadServerInfo_Request to JSON.
         * @function toJSON
         * @memberof CCloud_GetUploadServerInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_GetUploadServerInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_GetUploadServerInfo_Request;
    })();
    
    $root.CCloud_GetUploadServerInfo_Response = (function() {
    
        /**
         * Properties of a CCloud_GetUploadServerInfo_Response.
         * @exports ICCloud_GetUploadServerInfo_Response
         * @interface ICCloud_GetUploadServerInfo_Response
         * @property {string|null} [server_url] CCloud_GetUploadServerInfo_Response server_url
         */
    
        /**
         * Constructs a new CCloud_GetUploadServerInfo_Response.
         * @exports CCloud_GetUploadServerInfo_Response
         * @classdesc Represents a CCloud_GetUploadServerInfo_Response.
         * @implements ICCloud_GetUploadServerInfo_Response
         * @constructor
         * @param {ICCloud_GetUploadServerInfo_Response=} [properties] Properties to set
         */
        function CCloud_GetUploadServerInfo_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_GetUploadServerInfo_Response server_url.
         * @member {string} server_url
         * @memberof CCloud_GetUploadServerInfo_Response
         * @instance
         */
        CCloud_GetUploadServerInfo_Response.prototype.server_url = "";
    
        /**
         * Creates a new CCloud_GetUploadServerInfo_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_GetUploadServerInfo_Response
         * @static
         * @param {ICCloud_GetUploadServerInfo_Response=} [properties] Properties to set
         * @returns {CCloud_GetUploadServerInfo_Response} CCloud_GetUploadServerInfo_Response instance
         */
        CCloud_GetUploadServerInfo_Response.create = function create(properties) {
            return new CCloud_GetUploadServerInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_GetUploadServerInfo_Response message. Does not implicitly {@link CCloud_GetUploadServerInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_GetUploadServerInfo_Response
         * @static
         * @param {ICCloud_GetUploadServerInfo_Response} message CCloud_GetUploadServerInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetUploadServerInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server_url != null && message.hasOwnProperty("server_url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.server_url);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_GetUploadServerInfo_Response message, length delimited. Does not implicitly {@link CCloud_GetUploadServerInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_GetUploadServerInfo_Response
         * @static
         * @param {ICCloud_GetUploadServerInfo_Response} message CCloud_GetUploadServerInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetUploadServerInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_GetUploadServerInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_GetUploadServerInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_GetUploadServerInfo_Response} CCloud_GetUploadServerInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetUploadServerInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_GetUploadServerInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.server_url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_GetUploadServerInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_GetUploadServerInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_GetUploadServerInfo_Response} CCloud_GetUploadServerInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetUploadServerInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_GetUploadServerInfo_Response message.
         * @function verify
         * @memberof CCloud_GetUploadServerInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_GetUploadServerInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.server_url != null && message.hasOwnProperty("server_url"))
                if (!$util.isString(message.server_url))
                    return "server_url: string expected";
            return null;
        };
    
        /**
         * Creates a CCloud_GetUploadServerInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_GetUploadServerInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_GetUploadServerInfo_Response} CCloud_GetUploadServerInfo_Response
         */
        CCloud_GetUploadServerInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_GetUploadServerInfo_Response)
                return object;
            var message = new $root.CCloud_GetUploadServerInfo_Response();
            if (object.server_url != null)
                message.server_url = String(object.server_url);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_GetUploadServerInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_GetUploadServerInfo_Response
         * @static
         * @param {CCloud_GetUploadServerInfo_Response} message CCloud_GetUploadServerInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_GetUploadServerInfo_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.server_url = "";
            if (message.server_url != null && message.hasOwnProperty("server_url"))
                object.server_url = message.server_url;
            return object;
        };
    
        /**
         * Converts this CCloud_GetUploadServerInfo_Response to JSON.
         * @function toJSON
         * @memberof CCloud_GetUploadServerInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_GetUploadServerInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_GetUploadServerInfo_Response;
    })();
    
    $root.CCloud_BeginHTTPUpload_Request = (function() {
    
        /**
         * Properties of a CCloud_BeginHTTPUpload_Request.
         * @exports ICCloud_BeginHTTPUpload_Request
         * @interface ICCloud_BeginHTTPUpload_Request
         * @property {number|null} [appid] CCloud_BeginHTTPUpload_Request appid
         * @property {number|null} [file_size] CCloud_BeginHTTPUpload_Request file_size
         * @property {string|null} [filename] CCloud_BeginHTTPUpload_Request filename
         * @property {string|null} [file_sha] CCloud_BeginHTTPUpload_Request file_sha
         * @property {boolean|null} [is_public] CCloud_BeginHTTPUpload_Request is_public
         * @property {Array.<string>|null} [platforms_to_sync] CCloud_BeginHTTPUpload_Request platforms_to_sync
         * @property {Array.<string>|null} [request_headers_names] CCloud_BeginHTTPUpload_Request request_headers_names
         * @property {Array.<string>|null} [request_headers_values] CCloud_BeginHTTPUpload_Request request_headers_values
         */
    
        /**
         * Constructs a new CCloud_BeginHTTPUpload_Request.
         * @exports CCloud_BeginHTTPUpload_Request
         * @classdesc Represents a CCloud_BeginHTTPUpload_Request.
         * @implements ICCloud_BeginHTTPUpload_Request
         * @constructor
         * @param {ICCloud_BeginHTTPUpload_Request=} [properties] Properties to set
         */
        function CCloud_BeginHTTPUpload_Request(properties) {
            this.platforms_to_sync = [];
            this.request_headers_names = [];
            this.request_headers_values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_BeginHTTPUpload_Request appid.
         * @member {number} appid
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         */
        CCloud_BeginHTTPUpload_Request.prototype.appid = 0;
    
        /**
         * CCloud_BeginHTTPUpload_Request file_size.
         * @member {number} file_size
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         */
        CCloud_BeginHTTPUpload_Request.prototype.file_size = 0;
    
        /**
         * CCloud_BeginHTTPUpload_Request filename.
         * @member {string} filename
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         */
        CCloud_BeginHTTPUpload_Request.prototype.filename = "";
    
        /**
         * CCloud_BeginHTTPUpload_Request file_sha.
         * @member {string} file_sha
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         */
        CCloud_BeginHTTPUpload_Request.prototype.file_sha = "";
    
        /**
         * CCloud_BeginHTTPUpload_Request is_public.
         * @member {boolean} is_public
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         */
        CCloud_BeginHTTPUpload_Request.prototype.is_public = false;
    
        /**
         * CCloud_BeginHTTPUpload_Request platforms_to_sync.
         * @member {Array.<string>} platforms_to_sync
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         */
        CCloud_BeginHTTPUpload_Request.prototype.platforms_to_sync = $util.emptyArray;
    
        /**
         * CCloud_BeginHTTPUpload_Request request_headers_names.
         * @member {Array.<string>} request_headers_names
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         */
        CCloud_BeginHTTPUpload_Request.prototype.request_headers_names = $util.emptyArray;
    
        /**
         * CCloud_BeginHTTPUpload_Request request_headers_values.
         * @member {Array.<string>} request_headers_values
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         */
        CCloud_BeginHTTPUpload_Request.prototype.request_headers_values = $util.emptyArray;
    
        /**
         * Creates a new CCloud_BeginHTTPUpload_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_BeginHTTPUpload_Request
         * @static
         * @param {ICCloud_BeginHTTPUpload_Request=} [properties] Properties to set
         * @returns {CCloud_BeginHTTPUpload_Request} CCloud_BeginHTTPUpload_Request instance
         */
        CCloud_BeginHTTPUpload_Request.create = function create(properties) {
            return new CCloud_BeginHTTPUpload_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_BeginHTTPUpload_Request message. Does not implicitly {@link CCloud_BeginHTTPUpload_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_BeginHTTPUpload_Request
         * @static
         * @param {ICCloud_BeginHTTPUpload_Request} message CCloud_BeginHTTPUpload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_BeginHTTPUpload_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.file_size);
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.filename);
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.file_sha);
            if (message.is_public != null && message.hasOwnProperty("is_public"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_public);
            if (message.platforms_to_sync != null && message.platforms_to_sync.length)
                for (var i = 0; i < message.platforms_to_sync.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.platforms_to_sync[i]);
            if (message.request_headers_names != null && message.request_headers_names.length)
                for (var i = 0; i < message.request_headers_names.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.request_headers_names[i]);
            if (message.request_headers_values != null && message.request_headers_values.length)
                for (var i = 0; i < message.request_headers_values.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.request_headers_values[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_BeginHTTPUpload_Request message, length delimited. Does not implicitly {@link CCloud_BeginHTTPUpload_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_BeginHTTPUpload_Request
         * @static
         * @param {ICCloud_BeginHTTPUpload_Request} message CCloud_BeginHTTPUpload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_BeginHTTPUpload_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_BeginHTTPUpload_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_BeginHTTPUpload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_BeginHTTPUpload_Request} CCloud_BeginHTTPUpload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_BeginHTTPUpload_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_BeginHTTPUpload_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.file_size = reader.uint32();
                    break;
                case 3:
                    message.filename = reader.string();
                    break;
                case 4:
                    message.file_sha = reader.string();
                    break;
                case 5:
                    message.is_public = reader.bool();
                    break;
                case 6:
                    if (!(message.platforms_to_sync && message.platforms_to_sync.length))
                        message.platforms_to_sync = [];
                    message.platforms_to_sync.push(reader.string());
                    break;
                case 7:
                    if (!(message.request_headers_names && message.request_headers_names.length))
                        message.request_headers_names = [];
                    message.request_headers_names.push(reader.string());
                    break;
                case 8:
                    if (!(message.request_headers_values && message.request_headers_values.length))
                        message.request_headers_values = [];
                    message.request_headers_values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_BeginHTTPUpload_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_BeginHTTPUpload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_BeginHTTPUpload_Request} CCloud_BeginHTTPUpload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_BeginHTTPUpload_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_BeginHTTPUpload_Request message.
         * @function verify
         * @memberof CCloud_BeginHTTPUpload_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_BeginHTTPUpload_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                if (!$util.isInteger(message.file_size))
                    return "file_size: integer expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                if (!$util.isString(message.file_sha))
                    return "file_sha: string expected";
            if (message.is_public != null && message.hasOwnProperty("is_public"))
                if (typeof message.is_public !== "boolean")
                    return "is_public: boolean expected";
            if (message.platforms_to_sync != null && message.hasOwnProperty("platforms_to_sync")) {
                if (!Array.isArray(message.platforms_to_sync))
                    return "platforms_to_sync: array expected";
                for (var i = 0; i < message.platforms_to_sync.length; ++i)
                    if (!$util.isString(message.platforms_to_sync[i]))
                        return "platforms_to_sync: string[] expected";
            }
            if (message.request_headers_names != null && message.hasOwnProperty("request_headers_names")) {
                if (!Array.isArray(message.request_headers_names))
                    return "request_headers_names: array expected";
                for (var i = 0; i < message.request_headers_names.length; ++i)
                    if (!$util.isString(message.request_headers_names[i]))
                        return "request_headers_names: string[] expected";
            }
            if (message.request_headers_values != null && message.hasOwnProperty("request_headers_values")) {
                if (!Array.isArray(message.request_headers_values))
                    return "request_headers_values: array expected";
                for (var i = 0; i < message.request_headers_values.length; ++i)
                    if (!$util.isString(message.request_headers_values[i]))
                        return "request_headers_values: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CCloud_BeginHTTPUpload_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_BeginHTTPUpload_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_BeginHTTPUpload_Request} CCloud_BeginHTTPUpload_Request
         */
        CCloud_BeginHTTPUpload_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_BeginHTTPUpload_Request)
                return object;
            var message = new $root.CCloud_BeginHTTPUpload_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.file_size != null)
                message.file_size = object.file_size >>> 0;
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.file_sha != null)
                message.file_sha = String(object.file_sha);
            if (object.is_public != null)
                message.is_public = Boolean(object.is_public);
            if (object.platforms_to_sync) {
                if (!Array.isArray(object.platforms_to_sync))
                    throw TypeError(".CCloud_BeginHTTPUpload_Request.platforms_to_sync: array expected");
                message.platforms_to_sync = [];
                for (var i = 0; i < object.platforms_to_sync.length; ++i)
                    message.platforms_to_sync[i] = String(object.platforms_to_sync[i]);
            }
            if (object.request_headers_names) {
                if (!Array.isArray(object.request_headers_names))
                    throw TypeError(".CCloud_BeginHTTPUpload_Request.request_headers_names: array expected");
                message.request_headers_names = [];
                for (var i = 0; i < object.request_headers_names.length; ++i)
                    message.request_headers_names[i] = String(object.request_headers_names[i]);
            }
            if (object.request_headers_values) {
                if (!Array.isArray(object.request_headers_values))
                    throw TypeError(".CCloud_BeginHTTPUpload_Request.request_headers_values: array expected");
                message.request_headers_values = [];
                for (var i = 0; i < object.request_headers_values.length; ++i)
                    message.request_headers_values[i] = String(object.request_headers_values[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_BeginHTTPUpload_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_BeginHTTPUpload_Request
         * @static
         * @param {CCloud_BeginHTTPUpload_Request} message CCloud_BeginHTTPUpload_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_BeginHTTPUpload_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.platforms_to_sync = [];
                object.request_headers_names = [];
                object.request_headers_values = [];
            }
            if (options.defaults) {
                object.appid = 0;
                object.file_size = 0;
                object.filename = "";
                object.file_sha = "";
                object.is_public = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                object.file_size = message.file_size;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                object.file_sha = message.file_sha;
            if (message.is_public != null && message.hasOwnProperty("is_public"))
                object.is_public = message.is_public;
            if (message.platforms_to_sync && message.platforms_to_sync.length) {
                object.platforms_to_sync = [];
                for (var j = 0; j < message.platforms_to_sync.length; ++j)
                    object.platforms_to_sync[j] = message.platforms_to_sync[j];
            }
            if (message.request_headers_names && message.request_headers_names.length) {
                object.request_headers_names = [];
                for (var j = 0; j < message.request_headers_names.length; ++j)
                    object.request_headers_names[j] = message.request_headers_names[j];
            }
            if (message.request_headers_values && message.request_headers_values.length) {
                object.request_headers_values = [];
                for (var j = 0; j < message.request_headers_values.length; ++j)
                    object.request_headers_values[j] = message.request_headers_values[j];
            }
            return object;
        };
    
        /**
         * Converts this CCloud_BeginHTTPUpload_Request to JSON.
         * @function toJSON
         * @memberof CCloud_BeginHTTPUpload_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_BeginHTTPUpload_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_BeginHTTPUpload_Request;
    })();
    
    $root.CCloud_BeginHTTPUpload_Response = (function() {
    
        /**
         * Properties of a CCloud_BeginHTTPUpload_Response.
         * @exports ICCloud_BeginHTTPUpload_Response
         * @interface ICCloud_BeginHTTPUpload_Response
         * @property {number|Long|null} [ugcid] CCloud_BeginHTTPUpload_Response ugcid
         * @property {number|null} [timestamp] CCloud_BeginHTTPUpload_Response timestamp
         * @property {string|null} [url_host] CCloud_BeginHTTPUpload_Response url_host
         * @property {string|null} [url_path] CCloud_BeginHTTPUpload_Response url_path
         * @property {boolean|null} [use_https] CCloud_BeginHTTPUpload_Response use_https
         * @property {Array.<CCloud_BeginHTTPUpload_Response.IHTTPHeaders>|null} [request_headers] CCloud_BeginHTTPUpload_Response request_headers
         */
    
        /**
         * Constructs a new CCloud_BeginHTTPUpload_Response.
         * @exports CCloud_BeginHTTPUpload_Response
         * @classdesc Represents a CCloud_BeginHTTPUpload_Response.
         * @implements ICCloud_BeginHTTPUpload_Response
         * @constructor
         * @param {ICCloud_BeginHTTPUpload_Response=} [properties] Properties to set
         */
        function CCloud_BeginHTTPUpload_Response(properties) {
            this.request_headers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_BeginHTTPUpload_Response ugcid.
         * @member {number|Long} ugcid
         * @memberof CCloud_BeginHTTPUpload_Response
         * @instance
         */
        CCloud_BeginHTTPUpload_Response.prototype.ugcid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CCloud_BeginHTTPUpload_Response timestamp.
         * @member {number} timestamp
         * @memberof CCloud_BeginHTTPUpload_Response
         * @instance
         */
        CCloud_BeginHTTPUpload_Response.prototype.timestamp = 0;
    
        /**
         * CCloud_BeginHTTPUpload_Response url_host.
         * @member {string} url_host
         * @memberof CCloud_BeginHTTPUpload_Response
         * @instance
         */
        CCloud_BeginHTTPUpload_Response.prototype.url_host = "";
    
        /**
         * CCloud_BeginHTTPUpload_Response url_path.
         * @member {string} url_path
         * @memberof CCloud_BeginHTTPUpload_Response
         * @instance
         */
        CCloud_BeginHTTPUpload_Response.prototype.url_path = "";
    
        /**
         * CCloud_BeginHTTPUpload_Response use_https.
         * @member {boolean} use_https
         * @memberof CCloud_BeginHTTPUpload_Response
         * @instance
         */
        CCloud_BeginHTTPUpload_Response.prototype.use_https = false;
    
        /**
         * CCloud_BeginHTTPUpload_Response request_headers.
         * @member {Array.<CCloud_BeginHTTPUpload_Response.IHTTPHeaders>} request_headers
         * @memberof CCloud_BeginHTTPUpload_Response
         * @instance
         */
        CCloud_BeginHTTPUpload_Response.prototype.request_headers = $util.emptyArray;
    
        /**
         * Creates a new CCloud_BeginHTTPUpload_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_BeginHTTPUpload_Response
         * @static
         * @param {ICCloud_BeginHTTPUpload_Response=} [properties] Properties to set
         * @returns {CCloud_BeginHTTPUpload_Response} CCloud_BeginHTTPUpload_Response instance
         */
        CCloud_BeginHTTPUpload_Response.create = function create(properties) {
            return new CCloud_BeginHTTPUpload_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_BeginHTTPUpload_Response message. Does not implicitly {@link CCloud_BeginHTTPUpload_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_BeginHTTPUpload_Response
         * @static
         * @param {ICCloud_BeginHTTPUpload_Response} message CCloud_BeginHTTPUpload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_BeginHTTPUpload_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.ugcid);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.timestamp);
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.url_host);
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url_path);
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.use_https);
            if (message.request_headers != null && message.request_headers.length)
                for (var i = 0; i < message.request_headers.length; ++i)
                    $root.CCloud_BeginHTTPUpload_Response.HTTPHeaders.encode(message.request_headers[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_BeginHTTPUpload_Response message, length delimited. Does not implicitly {@link CCloud_BeginHTTPUpload_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_BeginHTTPUpload_Response
         * @static
         * @param {ICCloud_BeginHTTPUpload_Response} message CCloud_BeginHTTPUpload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_BeginHTTPUpload_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_BeginHTTPUpload_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_BeginHTTPUpload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_BeginHTTPUpload_Response} CCloud_BeginHTTPUpload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_BeginHTTPUpload_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_BeginHTTPUpload_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ugcid = reader.fixed64();
                    break;
                case 2:
                    message.timestamp = reader.fixed32();
                    break;
                case 3:
                    message.url_host = reader.string();
                    break;
                case 4:
                    message.url_path = reader.string();
                    break;
                case 5:
                    message.use_https = reader.bool();
                    break;
                case 6:
                    if (!(message.request_headers && message.request_headers.length))
                        message.request_headers = [];
                    message.request_headers.push($root.CCloud_BeginHTTPUpload_Response.HTTPHeaders.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_BeginHTTPUpload_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_BeginHTTPUpload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_BeginHTTPUpload_Response} CCloud_BeginHTTPUpload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_BeginHTTPUpload_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_BeginHTTPUpload_Response message.
         * @function verify
         * @memberof CCloud_BeginHTTPUpload_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_BeginHTTPUpload_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                if (!$util.isInteger(message.ugcid) && !(message.ugcid && $util.isInteger(message.ugcid.low) && $util.isInteger(message.ugcid.high)))
                    return "ugcid: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                if (!$util.isString(message.url_host))
                    return "url_host: string expected";
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                if (!$util.isString(message.url_path))
                    return "url_path: string expected";
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                if (typeof message.use_https !== "boolean")
                    return "use_https: boolean expected";
            if (message.request_headers != null && message.hasOwnProperty("request_headers")) {
                if (!Array.isArray(message.request_headers))
                    return "request_headers: array expected";
                for (var i = 0; i < message.request_headers.length; ++i) {
                    var error = $root.CCloud_BeginHTTPUpload_Response.HTTPHeaders.verify(message.request_headers[i]);
                    if (error)
                        return "request_headers." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CCloud_BeginHTTPUpload_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_BeginHTTPUpload_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_BeginHTTPUpload_Response} CCloud_BeginHTTPUpload_Response
         */
        CCloud_BeginHTTPUpload_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_BeginHTTPUpload_Response)
                return object;
            var message = new $root.CCloud_BeginHTTPUpload_Response();
            if (object.ugcid != null)
                if ($util.Long)
                    (message.ugcid = $util.Long.fromValue(object.ugcid)).unsigned = false;
                else if (typeof object.ugcid === "string")
                    message.ugcid = parseInt(object.ugcid, 10);
                else if (typeof object.ugcid === "number")
                    message.ugcid = object.ugcid;
                else if (typeof object.ugcid === "object")
                    message.ugcid = new $util.LongBits(object.ugcid.low >>> 0, object.ugcid.high >>> 0).toNumber();
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            if (object.url_host != null)
                message.url_host = String(object.url_host);
            if (object.url_path != null)
                message.url_path = String(object.url_path);
            if (object.use_https != null)
                message.use_https = Boolean(object.use_https);
            if (object.request_headers) {
                if (!Array.isArray(object.request_headers))
                    throw TypeError(".CCloud_BeginHTTPUpload_Response.request_headers: array expected");
                message.request_headers = [];
                for (var i = 0; i < object.request_headers.length; ++i) {
                    if (typeof object.request_headers[i] !== "object")
                        throw TypeError(".CCloud_BeginHTTPUpload_Response.request_headers: object expected");
                    message.request_headers[i] = $root.CCloud_BeginHTTPUpload_Response.HTTPHeaders.fromObject(object.request_headers[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_BeginHTTPUpload_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_BeginHTTPUpload_Response
         * @static
         * @param {CCloud_BeginHTTPUpload_Response} message CCloud_BeginHTTPUpload_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_BeginHTTPUpload_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.request_headers = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ugcid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ugcid = options.longs === String ? "0" : 0;
                object.timestamp = 0;
                object.url_host = "";
                object.url_path = "";
                object.use_https = false;
            }
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                if (typeof message.ugcid === "number")
                    object.ugcid = options.longs === String ? String(message.ugcid) : message.ugcid;
                else
                    object.ugcid = options.longs === String ? $util.Long.prototype.toString.call(message.ugcid) : options.longs === Number ? new $util.LongBits(message.ugcid.low >>> 0, message.ugcid.high >>> 0).toNumber() : message.ugcid;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                object.url_host = message.url_host;
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                object.url_path = message.url_path;
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                object.use_https = message.use_https;
            if (message.request_headers && message.request_headers.length) {
                object.request_headers = [];
                for (var j = 0; j < message.request_headers.length; ++j)
                    object.request_headers[j] = $root.CCloud_BeginHTTPUpload_Response.HTTPHeaders.toObject(message.request_headers[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CCloud_BeginHTTPUpload_Response to JSON.
         * @function toJSON
         * @memberof CCloud_BeginHTTPUpload_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_BeginHTTPUpload_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CCloud_BeginHTTPUpload_Response.HTTPHeaders = (function() {
    
            /**
             * Properties of a HTTPHeaders.
             * @memberof CCloud_BeginHTTPUpload_Response
             * @interface IHTTPHeaders
             * @property {string|null} [name] HTTPHeaders name
             * @property {string|null} [value] HTTPHeaders value
             */
    
            /**
             * Constructs a new HTTPHeaders.
             * @memberof CCloud_BeginHTTPUpload_Response
             * @classdesc Represents a HTTPHeaders.
             * @implements IHTTPHeaders
             * @constructor
             * @param {CCloud_BeginHTTPUpload_Response.IHTTPHeaders=} [properties] Properties to set
             */
            function HTTPHeaders(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HTTPHeaders name.
             * @member {string} name
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @instance
             */
            HTTPHeaders.prototype.name = "";
    
            /**
             * HTTPHeaders value.
             * @member {string} value
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @instance
             */
            HTTPHeaders.prototype.value = "";
    
            /**
             * Creates a new HTTPHeaders instance using the specified properties.
             * @function create
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @static
             * @param {CCloud_BeginHTTPUpload_Response.IHTTPHeaders=} [properties] Properties to set
             * @returns {CCloud_BeginHTTPUpload_Response.HTTPHeaders} HTTPHeaders instance
             */
            HTTPHeaders.create = function create(properties) {
                return new HTTPHeaders(properties);
            };
    
            /**
             * Encodes the specified HTTPHeaders message. Does not implicitly {@link CCloud_BeginHTTPUpload_Response.HTTPHeaders.verify|verify} messages.
             * @function encode
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @static
             * @param {CCloud_BeginHTTPUpload_Response.IHTTPHeaders} message HTTPHeaders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HTTPHeaders.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified HTTPHeaders message, length delimited. Does not implicitly {@link CCloud_BeginHTTPUpload_Response.HTTPHeaders.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @static
             * @param {CCloud_BeginHTTPUpload_Response.IHTTPHeaders} message HTTPHeaders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HTTPHeaders.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HTTPHeaders message from the specified reader or buffer.
             * @function decode
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CCloud_BeginHTTPUpload_Response.HTTPHeaders} HTTPHeaders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HTTPHeaders.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_BeginHTTPUpload_Response.HTTPHeaders();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
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
             * Decodes a HTTPHeaders message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CCloud_BeginHTTPUpload_Response.HTTPHeaders} HTTPHeaders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HTTPHeaders.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HTTPHeaders message.
             * @function verify
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HTTPHeaders.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
    
            /**
             * Creates a HTTPHeaders message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CCloud_BeginHTTPUpload_Response.HTTPHeaders} HTTPHeaders
             */
            HTTPHeaders.fromObject = function fromObject(object) {
                if (object instanceof $root.CCloud_BeginHTTPUpload_Response.HTTPHeaders)
                    return object;
                var message = new $root.CCloud_BeginHTTPUpload_Response.HTTPHeaders();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a HTTPHeaders message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @static
             * @param {CCloud_BeginHTTPUpload_Response.HTTPHeaders} message HTTPHeaders
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HTTPHeaders.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.value = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this HTTPHeaders to JSON.
             * @function toJSON
             * @memberof CCloud_BeginHTTPUpload_Response.HTTPHeaders
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HTTPHeaders.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HTTPHeaders;
        })();
    
        return CCloud_BeginHTTPUpload_Response;
    })();
    
    $root.CCloud_CommitHTTPUpload_Request = (function() {
    
        /**
         * Properties of a CCloud_CommitHTTPUpload_Request.
         * @exports ICCloud_CommitHTTPUpload_Request
         * @interface ICCloud_CommitHTTPUpload_Request
         * @property {boolean|null} [transfer_succeeded] CCloud_CommitHTTPUpload_Request transfer_succeeded
         * @property {number|null} [appid] CCloud_CommitHTTPUpload_Request appid
         * @property {string|null} [file_sha] CCloud_CommitHTTPUpload_Request file_sha
         * @property {string|null} [filename] CCloud_CommitHTTPUpload_Request filename
         */
    
        /**
         * Constructs a new CCloud_CommitHTTPUpload_Request.
         * @exports CCloud_CommitHTTPUpload_Request
         * @classdesc Represents a CCloud_CommitHTTPUpload_Request.
         * @implements ICCloud_CommitHTTPUpload_Request
         * @constructor
         * @param {ICCloud_CommitHTTPUpload_Request=} [properties] Properties to set
         */
        function CCloud_CommitHTTPUpload_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_CommitHTTPUpload_Request transfer_succeeded.
         * @member {boolean} transfer_succeeded
         * @memberof CCloud_CommitHTTPUpload_Request
         * @instance
         */
        CCloud_CommitHTTPUpload_Request.prototype.transfer_succeeded = false;
    
        /**
         * CCloud_CommitHTTPUpload_Request appid.
         * @member {number} appid
         * @memberof CCloud_CommitHTTPUpload_Request
         * @instance
         */
        CCloud_CommitHTTPUpload_Request.prototype.appid = 0;
    
        /**
         * CCloud_CommitHTTPUpload_Request file_sha.
         * @member {string} file_sha
         * @memberof CCloud_CommitHTTPUpload_Request
         * @instance
         */
        CCloud_CommitHTTPUpload_Request.prototype.file_sha = "";
    
        /**
         * CCloud_CommitHTTPUpload_Request filename.
         * @member {string} filename
         * @memberof CCloud_CommitHTTPUpload_Request
         * @instance
         */
        CCloud_CommitHTTPUpload_Request.prototype.filename = "";
    
        /**
         * Creates a new CCloud_CommitHTTPUpload_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_CommitHTTPUpload_Request
         * @static
         * @param {ICCloud_CommitHTTPUpload_Request=} [properties] Properties to set
         * @returns {CCloud_CommitHTTPUpload_Request} CCloud_CommitHTTPUpload_Request instance
         */
        CCloud_CommitHTTPUpload_Request.create = function create(properties) {
            return new CCloud_CommitHTTPUpload_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_CommitHTTPUpload_Request message. Does not implicitly {@link CCloud_CommitHTTPUpload_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_CommitHTTPUpload_Request
         * @static
         * @param {ICCloud_CommitHTTPUpload_Request} message CCloud_CommitHTTPUpload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_CommitHTTPUpload_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transfer_succeeded != null && message.hasOwnProperty("transfer_succeeded"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.transfer_succeeded);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.file_sha);
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.filename);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_CommitHTTPUpload_Request message, length delimited. Does not implicitly {@link CCloud_CommitHTTPUpload_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_CommitHTTPUpload_Request
         * @static
         * @param {ICCloud_CommitHTTPUpload_Request} message CCloud_CommitHTTPUpload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_CommitHTTPUpload_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_CommitHTTPUpload_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_CommitHTTPUpload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_CommitHTTPUpload_Request} CCloud_CommitHTTPUpload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_CommitHTTPUpload_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_CommitHTTPUpload_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.transfer_succeeded = reader.bool();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.file_sha = reader.string();
                    break;
                case 4:
                    message.filename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_CommitHTTPUpload_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_CommitHTTPUpload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_CommitHTTPUpload_Request} CCloud_CommitHTTPUpload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_CommitHTTPUpload_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_CommitHTTPUpload_Request message.
         * @function verify
         * @memberof CCloud_CommitHTTPUpload_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_CommitHTTPUpload_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transfer_succeeded != null && message.hasOwnProperty("transfer_succeeded"))
                if (typeof message.transfer_succeeded !== "boolean")
                    return "transfer_succeeded: boolean expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                if (!$util.isString(message.file_sha))
                    return "file_sha: string expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            return null;
        };
    
        /**
         * Creates a CCloud_CommitHTTPUpload_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_CommitHTTPUpload_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_CommitHTTPUpload_Request} CCloud_CommitHTTPUpload_Request
         */
        CCloud_CommitHTTPUpload_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_CommitHTTPUpload_Request)
                return object;
            var message = new $root.CCloud_CommitHTTPUpload_Request();
            if (object.transfer_succeeded != null)
                message.transfer_succeeded = Boolean(object.transfer_succeeded);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.file_sha != null)
                message.file_sha = String(object.file_sha);
            if (object.filename != null)
                message.filename = String(object.filename);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_CommitHTTPUpload_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_CommitHTTPUpload_Request
         * @static
         * @param {CCloud_CommitHTTPUpload_Request} message CCloud_CommitHTTPUpload_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_CommitHTTPUpload_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.transfer_succeeded = false;
                object.appid = 0;
                object.file_sha = "";
                object.filename = "";
            }
            if (message.transfer_succeeded != null && message.hasOwnProperty("transfer_succeeded"))
                object.transfer_succeeded = message.transfer_succeeded;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                object.file_sha = message.file_sha;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            return object;
        };
    
        /**
         * Converts this CCloud_CommitHTTPUpload_Request to JSON.
         * @function toJSON
         * @memberof CCloud_CommitHTTPUpload_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_CommitHTTPUpload_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_CommitHTTPUpload_Request;
    })();
    
    $root.CCloud_CommitHTTPUpload_Response = (function() {
    
        /**
         * Properties of a CCloud_CommitHTTPUpload_Response.
         * @exports ICCloud_CommitHTTPUpload_Response
         * @interface ICCloud_CommitHTTPUpload_Response
         * @property {boolean|null} [file_committed] CCloud_CommitHTTPUpload_Response file_committed
         */
    
        /**
         * Constructs a new CCloud_CommitHTTPUpload_Response.
         * @exports CCloud_CommitHTTPUpload_Response
         * @classdesc Represents a CCloud_CommitHTTPUpload_Response.
         * @implements ICCloud_CommitHTTPUpload_Response
         * @constructor
         * @param {ICCloud_CommitHTTPUpload_Response=} [properties] Properties to set
         */
        function CCloud_CommitHTTPUpload_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_CommitHTTPUpload_Response file_committed.
         * @member {boolean} file_committed
         * @memberof CCloud_CommitHTTPUpload_Response
         * @instance
         */
        CCloud_CommitHTTPUpload_Response.prototype.file_committed = false;
    
        /**
         * Creates a new CCloud_CommitHTTPUpload_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_CommitHTTPUpload_Response
         * @static
         * @param {ICCloud_CommitHTTPUpload_Response=} [properties] Properties to set
         * @returns {CCloud_CommitHTTPUpload_Response} CCloud_CommitHTTPUpload_Response instance
         */
        CCloud_CommitHTTPUpload_Response.create = function create(properties) {
            return new CCloud_CommitHTTPUpload_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_CommitHTTPUpload_Response message. Does not implicitly {@link CCloud_CommitHTTPUpload_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_CommitHTTPUpload_Response
         * @static
         * @param {ICCloud_CommitHTTPUpload_Response} message CCloud_CommitHTTPUpload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_CommitHTTPUpload_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.file_committed != null && message.hasOwnProperty("file_committed"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.file_committed);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_CommitHTTPUpload_Response message, length delimited. Does not implicitly {@link CCloud_CommitHTTPUpload_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_CommitHTTPUpload_Response
         * @static
         * @param {ICCloud_CommitHTTPUpload_Response} message CCloud_CommitHTTPUpload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_CommitHTTPUpload_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_CommitHTTPUpload_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_CommitHTTPUpload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_CommitHTTPUpload_Response} CCloud_CommitHTTPUpload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_CommitHTTPUpload_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_CommitHTTPUpload_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.file_committed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_CommitHTTPUpload_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_CommitHTTPUpload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_CommitHTTPUpload_Response} CCloud_CommitHTTPUpload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_CommitHTTPUpload_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_CommitHTTPUpload_Response message.
         * @function verify
         * @memberof CCloud_CommitHTTPUpload_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_CommitHTTPUpload_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.file_committed != null && message.hasOwnProperty("file_committed"))
                if (typeof message.file_committed !== "boolean")
                    return "file_committed: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCloud_CommitHTTPUpload_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_CommitHTTPUpload_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_CommitHTTPUpload_Response} CCloud_CommitHTTPUpload_Response
         */
        CCloud_CommitHTTPUpload_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_CommitHTTPUpload_Response)
                return object;
            var message = new $root.CCloud_CommitHTTPUpload_Response();
            if (object.file_committed != null)
                message.file_committed = Boolean(object.file_committed);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_CommitHTTPUpload_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_CommitHTTPUpload_Response
         * @static
         * @param {CCloud_CommitHTTPUpload_Response} message CCloud_CommitHTTPUpload_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_CommitHTTPUpload_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.file_committed = false;
            if (message.file_committed != null && message.hasOwnProperty("file_committed"))
                object.file_committed = message.file_committed;
            return object;
        };
    
        /**
         * Converts this CCloud_CommitHTTPUpload_Response to JSON.
         * @function toJSON
         * @memberof CCloud_CommitHTTPUpload_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_CommitHTTPUpload_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_CommitHTTPUpload_Response;
    })();
    
    $root.CCloud_GetFileDetails_Request = (function() {
    
        /**
         * Properties of a CCloud_GetFileDetails_Request.
         * @exports ICCloud_GetFileDetails_Request
         * @interface ICCloud_GetFileDetails_Request
         * @property {number|Long|null} [ugcid] CCloud_GetFileDetails_Request ugcid
         * @property {number|null} [appid] CCloud_GetFileDetails_Request appid
         */
    
        /**
         * Constructs a new CCloud_GetFileDetails_Request.
         * @exports CCloud_GetFileDetails_Request
         * @classdesc Represents a CCloud_GetFileDetails_Request.
         * @implements ICCloud_GetFileDetails_Request
         * @constructor
         * @param {ICCloud_GetFileDetails_Request=} [properties] Properties to set
         */
        function CCloud_GetFileDetails_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_GetFileDetails_Request ugcid.
         * @member {number|Long} ugcid
         * @memberof CCloud_GetFileDetails_Request
         * @instance
         */
        CCloud_GetFileDetails_Request.prototype.ugcid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_GetFileDetails_Request appid.
         * @member {number} appid
         * @memberof CCloud_GetFileDetails_Request
         * @instance
         */
        CCloud_GetFileDetails_Request.prototype.appid = 0;
    
        /**
         * Creates a new CCloud_GetFileDetails_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_GetFileDetails_Request
         * @static
         * @param {ICCloud_GetFileDetails_Request=} [properties] Properties to set
         * @returns {CCloud_GetFileDetails_Request} CCloud_GetFileDetails_Request instance
         */
        CCloud_GetFileDetails_Request.create = function create(properties) {
            return new CCloud_GetFileDetails_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_GetFileDetails_Request message. Does not implicitly {@link CCloud_GetFileDetails_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_GetFileDetails_Request
         * @static
         * @param {ICCloud_GetFileDetails_Request} message CCloud_GetFileDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetFileDetails_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.ugcid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_GetFileDetails_Request message, length delimited. Does not implicitly {@link CCloud_GetFileDetails_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_GetFileDetails_Request
         * @static
         * @param {ICCloud_GetFileDetails_Request} message CCloud_GetFileDetails_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetFileDetails_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_GetFileDetails_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_GetFileDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_GetFileDetails_Request} CCloud_GetFileDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetFileDetails_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_GetFileDetails_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ugcid = reader.uint64();
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
         * Decodes a CCloud_GetFileDetails_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_GetFileDetails_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_GetFileDetails_Request} CCloud_GetFileDetails_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetFileDetails_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_GetFileDetails_Request message.
         * @function verify
         * @memberof CCloud_GetFileDetails_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_GetFileDetails_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                if (!$util.isInteger(message.ugcid) && !(message.ugcid && $util.isInteger(message.ugcid.low) && $util.isInteger(message.ugcid.high)))
                    return "ugcid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_GetFileDetails_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_GetFileDetails_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_GetFileDetails_Request} CCloud_GetFileDetails_Request
         */
        CCloud_GetFileDetails_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_GetFileDetails_Request)
                return object;
            var message = new $root.CCloud_GetFileDetails_Request();
            if (object.ugcid != null)
                if ($util.Long)
                    (message.ugcid = $util.Long.fromValue(object.ugcid)).unsigned = true;
                else if (typeof object.ugcid === "string")
                    message.ugcid = parseInt(object.ugcid, 10);
                else if (typeof object.ugcid === "number")
                    message.ugcid = object.ugcid;
                else if (typeof object.ugcid === "object")
                    message.ugcid = new $util.LongBits(object.ugcid.low >>> 0, object.ugcid.high >>> 0).toNumber(true);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_GetFileDetails_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_GetFileDetails_Request
         * @static
         * @param {CCloud_GetFileDetails_Request} message CCloud_GetFileDetails_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_GetFileDetails_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ugcid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ugcid = options.longs === String ? "0" : 0;
                object.appid = 0;
            }
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                if (typeof message.ugcid === "number")
                    object.ugcid = options.longs === String ? String(message.ugcid) : message.ugcid;
                else
                    object.ugcid = options.longs === String ? $util.Long.prototype.toString.call(message.ugcid) : options.longs === Number ? new $util.LongBits(message.ugcid.low >>> 0, message.ugcid.high >>> 0).toNumber(true) : message.ugcid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CCloud_GetFileDetails_Request to JSON.
         * @function toJSON
         * @memberof CCloud_GetFileDetails_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_GetFileDetails_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_GetFileDetails_Request;
    })();
    
    $root.CCloud_UserFile = (function() {
    
        /**
         * Properties of a CCloud_UserFile.
         * @exports ICCloud_UserFile
         * @interface ICCloud_UserFile
         * @property {number|null} [appid] CCloud_UserFile appid
         * @property {number|Long|null} [ugcid] CCloud_UserFile ugcid
         * @property {string|null} [filename] CCloud_UserFile filename
         * @property {number|Long|null} [timestamp] CCloud_UserFile timestamp
         * @property {number|null} [file_size] CCloud_UserFile file_size
         * @property {string|null} [url] CCloud_UserFile url
         * @property {number|Long|null} [steamid_creator] CCloud_UserFile steamid_creator
         * @property {number|null} [flags] CCloud_UserFile flags
         */
    
        /**
         * Constructs a new CCloud_UserFile.
         * @exports CCloud_UserFile
         * @classdesc Represents a CCloud_UserFile.
         * @implements ICCloud_UserFile
         * @constructor
         * @param {ICCloud_UserFile=} [properties] Properties to set
         */
        function CCloud_UserFile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_UserFile appid.
         * @member {number} appid
         * @memberof CCloud_UserFile
         * @instance
         */
        CCloud_UserFile.prototype.appid = 0;
    
        /**
         * CCloud_UserFile ugcid.
         * @member {number|Long} ugcid
         * @memberof CCloud_UserFile
         * @instance
         */
        CCloud_UserFile.prototype.ugcid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_UserFile filename.
         * @member {string} filename
         * @memberof CCloud_UserFile
         * @instance
         */
        CCloud_UserFile.prototype.filename = "";
    
        /**
         * CCloud_UserFile timestamp.
         * @member {number|Long} timestamp
         * @memberof CCloud_UserFile
         * @instance
         */
        CCloud_UserFile.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_UserFile file_size.
         * @member {number} file_size
         * @memberof CCloud_UserFile
         * @instance
         */
        CCloud_UserFile.prototype.file_size = 0;
    
        /**
         * CCloud_UserFile url.
         * @member {string} url
         * @memberof CCloud_UserFile
         * @instance
         */
        CCloud_UserFile.prototype.url = "";
    
        /**
         * CCloud_UserFile steamid_creator.
         * @member {number|Long} steamid_creator
         * @memberof CCloud_UserFile
         * @instance
         */
        CCloud_UserFile.prototype.steamid_creator = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CCloud_UserFile flags.
         * @member {number} flags
         * @memberof CCloud_UserFile
         * @instance
         */
        CCloud_UserFile.prototype.flags = 0;
    
        /**
         * Creates a new CCloud_UserFile instance using the specified properties.
         * @function create
         * @memberof CCloud_UserFile
         * @static
         * @param {ICCloud_UserFile=} [properties] Properties to set
         * @returns {CCloud_UserFile} CCloud_UserFile instance
         */
        CCloud_UserFile.create = function create(properties) {
            return new CCloud_UserFile(properties);
        };
    
        /**
         * Encodes the specified CCloud_UserFile message. Does not implicitly {@link CCloud_UserFile.verify|verify} messages.
         * @function encode
         * @memberof CCloud_UserFile
         * @static
         * @param {ICCloud_UserFile} message CCloud_UserFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_UserFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ugcid);
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.filename);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timestamp);
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.file_size);
            if (message.url != null && message.hasOwnProperty("url"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.url);
            if (message.steamid_creator != null && message.hasOwnProperty("steamid_creator"))
                writer.uint32(/* id 7, wireType 1 =*/57).fixed64(message.steamid_creator);
            if (message.flags != null && message.hasOwnProperty("flags"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.flags);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_UserFile message, length delimited. Does not implicitly {@link CCloud_UserFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_UserFile
         * @static
         * @param {ICCloud_UserFile} message CCloud_UserFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_UserFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_UserFile message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_UserFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_UserFile} CCloud_UserFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_UserFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_UserFile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.ugcid = reader.uint64();
                    break;
                case 3:
                    message.filename = reader.string();
                    break;
                case 4:
                    message.timestamp = reader.uint64();
                    break;
                case 5:
                    message.file_size = reader.uint32();
                    break;
                case 6:
                    message.url = reader.string();
                    break;
                case 7:
                    message.steamid_creator = reader.fixed64();
                    break;
                case 8:
                    message.flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_UserFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_UserFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_UserFile} CCloud_UserFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_UserFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_UserFile message.
         * @function verify
         * @memberof CCloud_UserFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_UserFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                if (!$util.isInteger(message.ugcid) && !(message.ugcid && $util.isInteger(message.ugcid.low) && $util.isInteger(message.ugcid.high)))
                    return "ugcid: integer|Long expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                if (!$util.isInteger(message.file_size))
                    return "file_size: integer expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.steamid_creator != null && message.hasOwnProperty("steamid_creator"))
                if (!$util.isInteger(message.steamid_creator) && !(message.steamid_creator && $util.isInteger(message.steamid_creator.low) && $util.isInteger(message.steamid_creator.high)))
                    return "steamid_creator: integer|Long expected";
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_UserFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_UserFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_UserFile} CCloud_UserFile
         */
        CCloud_UserFile.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_UserFile)
                return object;
            var message = new $root.CCloud_UserFile();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.ugcid != null)
                if ($util.Long)
                    (message.ugcid = $util.Long.fromValue(object.ugcid)).unsigned = true;
                else if (typeof object.ugcid === "string")
                    message.ugcid = parseInt(object.ugcid, 10);
                else if (typeof object.ugcid === "number")
                    message.ugcid = object.ugcid;
                else if (typeof object.ugcid === "object")
                    message.ugcid = new $util.LongBits(object.ugcid.low >>> 0, object.ugcid.high >>> 0).toNumber(true);
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.file_size != null)
                message.file_size = object.file_size >>> 0;
            if (object.url != null)
                message.url = String(object.url);
            if (object.steamid_creator != null)
                if ($util.Long)
                    (message.steamid_creator = $util.Long.fromValue(object.steamid_creator)).unsigned = false;
                else if (typeof object.steamid_creator === "string")
                    message.steamid_creator = parseInt(object.steamid_creator, 10);
                else if (typeof object.steamid_creator === "number")
                    message.steamid_creator = object.steamid_creator;
                else if (typeof object.steamid_creator === "object")
                    message.steamid_creator = new $util.LongBits(object.steamid_creator.low >>> 0, object.steamid_creator.high >>> 0).toNumber();
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_UserFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_UserFile
         * @static
         * @param {CCloud_UserFile} message CCloud_UserFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_UserFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ugcid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ugcid = options.longs === String ? "0" : 0;
                object.filename = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.file_size = 0;
                object.url = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid_creator = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid_creator = options.longs === String ? "0" : 0;
                object.flags = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.ugcid != null && message.hasOwnProperty("ugcid"))
                if (typeof message.ugcid === "number")
                    object.ugcid = options.longs === String ? String(message.ugcid) : message.ugcid;
                else
                    object.ugcid = options.longs === String ? $util.Long.prototype.toString.call(message.ugcid) : options.longs === Number ? new $util.LongBits(message.ugcid.low >>> 0, message.ugcid.high >>> 0).toNumber(true) : message.ugcid;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                object.file_size = message.file_size;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.steamid_creator != null && message.hasOwnProperty("steamid_creator"))
                if (typeof message.steamid_creator === "number")
                    object.steamid_creator = options.longs === String ? String(message.steamid_creator) : message.steamid_creator;
                else
                    object.steamid_creator = options.longs === String ? $util.Long.prototype.toString.call(message.steamid_creator) : options.longs === Number ? new $util.LongBits(message.steamid_creator.low >>> 0, message.steamid_creator.high >>> 0).toNumber() : message.steamid_creator;
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            return object;
        };
    
        /**
         * Converts this CCloud_UserFile to JSON.
         * @function toJSON
         * @memberof CCloud_UserFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_UserFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_UserFile;
    })();
    
    $root.CCloud_GetFileDetails_Response = (function() {
    
        /**
         * Properties of a CCloud_GetFileDetails_Response.
         * @exports ICCloud_GetFileDetails_Response
         * @interface ICCloud_GetFileDetails_Response
         * @property {ICCloud_UserFile|null} [details] CCloud_GetFileDetails_Response details
         */
    
        /**
         * Constructs a new CCloud_GetFileDetails_Response.
         * @exports CCloud_GetFileDetails_Response
         * @classdesc Represents a CCloud_GetFileDetails_Response.
         * @implements ICCloud_GetFileDetails_Response
         * @constructor
         * @param {ICCloud_GetFileDetails_Response=} [properties] Properties to set
         */
        function CCloud_GetFileDetails_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_GetFileDetails_Response details.
         * @member {ICCloud_UserFile|null|undefined} details
         * @memberof CCloud_GetFileDetails_Response
         * @instance
         */
        CCloud_GetFileDetails_Response.prototype.details = null;
    
        /**
         * Creates a new CCloud_GetFileDetails_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_GetFileDetails_Response
         * @static
         * @param {ICCloud_GetFileDetails_Response=} [properties] Properties to set
         * @returns {CCloud_GetFileDetails_Response} CCloud_GetFileDetails_Response instance
         */
        CCloud_GetFileDetails_Response.create = function create(properties) {
            return new CCloud_GetFileDetails_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_GetFileDetails_Response message. Does not implicitly {@link CCloud_GetFileDetails_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_GetFileDetails_Response
         * @static
         * @param {ICCloud_GetFileDetails_Response} message CCloud_GetFileDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetFileDetails_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.details != null && message.hasOwnProperty("details"))
                $root.CCloud_UserFile.encode(message.details, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_GetFileDetails_Response message, length delimited. Does not implicitly {@link CCloud_GetFileDetails_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_GetFileDetails_Response
         * @static
         * @param {ICCloud_GetFileDetails_Response} message CCloud_GetFileDetails_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetFileDetails_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_GetFileDetails_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_GetFileDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_GetFileDetails_Response} CCloud_GetFileDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetFileDetails_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_GetFileDetails_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.details = $root.CCloud_UserFile.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_GetFileDetails_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_GetFileDetails_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_GetFileDetails_Response} CCloud_GetFileDetails_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetFileDetails_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_GetFileDetails_Response message.
         * @function verify
         * @memberof CCloud_GetFileDetails_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_GetFileDetails_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.details != null && message.hasOwnProperty("details")) {
                var error = $root.CCloud_UserFile.verify(message.details);
                if (error)
                    return "details." + error;
            }
            return null;
        };
    
        /**
         * Creates a CCloud_GetFileDetails_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_GetFileDetails_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_GetFileDetails_Response} CCloud_GetFileDetails_Response
         */
        CCloud_GetFileDetails_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_GetFileDetails_Response)
                return object;
            var message = new $root.CCloud_GetFileDetails_Response();
            if (object.details != null) {
                if (typeof object.details !== "object")
                    throw TypeError(".CCloud_GetFileDetails_Response.details: object expected");
                message.details = $root.CCloud_UserFile.fromObject(object.details);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_GetFileDetails_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_GetFileDetails_Response
         * @static
         * @param {CCloud_GetFileDetails_Response} message CCloud_GetFileDetails_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_GetFileDetails_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.details = null;
            if (message.details != null && message.hasOwnProperty("details"))
                object.details = $root.CCloud_UserFile.toObject(message.details, options);
            return object;
        };
    
        /**
         * Converts this CCloud_GetFileDetails_Response to JSON.
         * @function toJSON
         * @memberof CCloud_GetFileDetails_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_GetFileDetails_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_GetFileDetails_Response;
    })();
    
    $root.CCloud_EnumerateUserFiles_Request = (function() {
    
        /**
         * Properties of a CCloud_EnumerateUserFiles_Request.
         * @exports ICCloud_EnumerateUserFiles_Request
         * @interface ICCloud_EnumerateUserFiles_Request
         * @property {number|null} [appid] CCloud_EnumerateUserFiles_Request appid
         * @property {boolean|null} [extended_details] CCloud_EnumerateUserFiles_Request extended_details
         * @property {number|null} [count] CCloud_EnumerateUserFiles_Request count
         * @property {number|null} [start_index] CCloud_EnumerateUserFiles_Request start_index
         */
    
        /**
         * Constructs a new CCloud_EnumerateUserFiles_Request.
         * @exports CCloud_EnumerateUserFiles_Request
         * @classdesc Represents a CCloud_EnumerateUserFiles_Request.
         * @implements ICCloud_EnumerateUserFiles_Request
         * @constructor
         * @param {ICCloud_EnumerateUserFiles_Request=} [properties] Properties to set
         */
        function CCloud_EnumerateUserFiles_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_EnumerateUserFiles_Request appid.
         * @member {number} appid
         * @memberof CCloud_EnumerateUserFiles_Request
         * @instance
         */
        CCloud_EnumerateUserFiles_Request.prototype.appid = 0;
    
        /**
         * CCloud_EnumerateUserFiles_Request extended_details.
         * @member {boolean} extended_details
         * @memberof CCloud_EnumerateUserFiles_Request
         * @instance
         */
        CCloud_EnumerateUserFiles_Request.prototype.extended_details = false;
    
        /**
         * CCloud_EnumerateUserFiles_Request count.
         * @member {number} count
         * @memberof CCloud_EnumerateUserFiles_Request
         * @instance
         */
        CCloud_EnumerateUserFiles_Request.prototype.count = 0;
    
        /**
         * CCloud_EnumerateUserFiles_Request start_index.
         * @member {number} start_index
         * @memberof CCloud_EnumerateUserFiles_Request
         * @instance
         */
        CCloud_EnumerateUserFiles_Request.prototype.start_index = 0;
    
        /**
         * Creates a new CCloud_EnumerateUserFiles_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_EnumerateUserFiles_Request
         * @static
         * @param {ICCloud_EnumerateUserFiles_Request=} [properties] Properties to set
         * @returns {CCloud_EnumerateUserFiles_Request} CCloud_EnumerateUserFiles_Request instance
         */
        CCloud_EnumerateUserFiles_Request.create = function create(properties) {
            return new CCloud_EnumerateUserFiles_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_EnumerateUserFiles_Request message. Does not implicitly {@link CCloud_EnumerateUserFiles_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_EnumerateUserFiles_Request
         * @static
         * @param {ICCloud_EnumerateUserFiles_Request} message CCloud_EnumerateUserFiles_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_EnumerateUserFiles_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.extended_details != null && message.hasOwnProperty("extended_details"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.extended_details);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.count);
            if (message.start_index != null && message.hasOwnProperty("start_index"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.start_index);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_EnumerateUserFiles_Request message, length delimited. Does not implicitly {@link CCloud_EnumerateUserFiles_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_EnumerateUserFiles_Request
         * @static
         * @param {ICCloud_EnumerateUserFiles_Request} message CCloud_EnumerateUserFiles_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_EnumerateUserFiles_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_EnumerateUserFiles_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_EnumerateUserFiles_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_EnumerateUserFiles_Request} CCloud_EnumerateUserFiles_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_EnumerateUserFiles_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_EnumerateUserFiles_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.extended_details = reader.bool();
                    break;
                case 3:
                    message.count = reader.uint32();
                    break;
                case 4:
                    message.start_index = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_EnumerateUserFiles_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_EnumerateUserFiles_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_EnumerateUserFiles_Request} CCloud_EnumerateUserFiles_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_EnumerateUserFiles_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_EnumerateUserFiles_Request message.
         * @function verify
         * @memberof CCloud_EnumerateUserFiles_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_EnumerateUserFiles_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.extended_details != null && message.hasOwnProperty("extended_details"))
                if (typeof message.extended_details !== "boolean")
                    return "extended_details: boolean expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.start_index != null && message.hasOwnProperty("start_index"))
                if (!$util.isInteger(message.start_index))
                    return "start_index: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_EnumerateUserFiles_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_EnumerateUserFiles_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_EnumerateUserFiles_Request} CCloud_EnumerateUserFiles_Request
         */
        CCloud_EnumerateUserFiles_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_EnumerateUserFiles_Request)
                return object;
            var message = new $root.CCloud_EnumerateUserFiles_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.extended_details != null)
                message.extended_details = Boolean(object.extended_details);
            if (object.count != null)
                message.count = object.count >>> 0;
            if (object.start_index != null)
                message.start_index = object.start_index >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_EnumerateUserFiles_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_EnumerateUserFiles_Request
         * @static
         * @param {CCloud_EnumerateUserFiles_Request} message CCloud_EnumerateUserFiles_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_EnumerateUserFiles_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.extended_details = false;
                object.count = 0;
                object.start_index = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.extended_details != null && message.hasOwnProperty("extended_details"))
                object.extended_details = message.extended_details;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.start_index != null && message.hasOwnProperty("start_index"))
                object.start_index = message.start_index;
            return object;
        };
    
        /**
         * Converts this CCloud_EnumerateUserFiles_Request to JSON.
         * @function toJSON
         * @memberof CCloud_EnumerateUserFiles_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_EnumerateUserFiles_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_EnumerateUserFiles_Request;
    })();
    
    $root.CCloud_EnumerateUserFiles_Response = (function() {
    
        /**
         * Properties of a CCloud_EnumerateUserFiles_Response.
         * @exports ICCloud_EnumerateUserFiles_Response
         * @interface ICCloud_EnumerateUserFiles_Response
         * @property {Array.<ICCloud_UserFile>|null} [files] CCloud_EnumerateUserFiles_Response files
         * @property {number|null} [total_files] CCloud_EnumerateUserFiles_Response total_files
         */
    
        /**
         * Constructs a new CCloud_EnumerateUserFiles_Response.
         * @exports CCloud_EnumerateUserFiles_Response
         * @classdesc Represents a CCloud_EnumerateUserFiles_Response.
         * @implements ICCloud_EnumerateUserFiles_Response
         * @constructor
         * @param {ICCloud_EnumerateUserFiles_Response=} [properties] Properties to set
         */
        function CCloud_EnumerateUserFiles_Response(properties) {
            this.files = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_EnumerateUserFiles_Response files.
         * @member {Array.<ICCloud_UserFile>} files
         * @memberof CCloud_EnumerateUserFiles_Response
         * @instance
         */
        CCloud_EnumerateUserFiles_Response.prototype.files = $util.emptyArray;
    
        /**
         * CCloud_EnumerateUserFiles_Response total_files.
         * @member {number} total_files
         * @memberof CCloud_EnumerateUserFiles_Response
         * @instance
         */
        CCloud_EnumerateUserFiles_Response.prototype.total_files = 0;
    
        /**
         * Creates a new CCloud_EnumerateUserFiles_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_EnumerateUserFiles_Response
         * @static
         * @param {ICCloud_EnumerateUserFiles_Response=} [properties] Properties to set
         * @returns {CCloud_EnumerateUserFiles_Response} CCloud_EnumerateUserFiles_Response instance
         */
        CCloud_EnumerateUserFiles_Response.create = function create(properties) {
            return new CCloud_EnumerateUserFiles_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_EnumerateUserFiles_Response message. Does not implicitly {@link CCloud_EnumerateUserFiles_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_EnumerateUserFiles_Response
         * @static
         * @param {ICCloud_EnumerateUserFiles_Response} message CCloud_EnumerateUserFiles_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_EnumerateUserFiles_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.files != null && message.files.length)
                for (var i = 0; i < message.files.length; ++i)
                    $root.CCloud_UserFile.encode(message.files[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total_files != null && message.hasOwnProperty("total_files"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.total_files);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_EnumerateUserFiles_Response message, length delimited. Does not implicitly {@link CCloud_EnumerateUserFiles_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_EnumerateUserFiles_Response
         * @static
         * @param {ICCloud_EnumerateUserFiles_Response} message CCloud_EnumerateUserFiles_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_EnumerateUserFiles_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_EnumerateUserFiles_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_EnumerateUserFiles_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_EnumerateUserFiles_Response} CCloud_EnumerateUserFiles_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_EnumerateUserFiles_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_EnumerateUserFiles_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.files && message.files.length))
                        message.files = [];
                    message.files.push($root.CCloud_UserFile.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total_files = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_EnumerateUserFiles_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_EnumerateUserFiles_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_EnumerateUserFiles_Response} CCloud_EnumerateUserFiles_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_EnumerateUserFiles_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_EnumerateUserFiles_Response message.
         * @function verify
         * @memberof CCloud_EnumerateUserFiles_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_EnumerateUserFiles_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.files != null && message.hasOwnProperty("files")) {
                if (!Array.isArray(message.files))
                    return "files: array expected";
                for (var i = 0; i < message.files.length; ++i) {
                    var error = $root.CCloud_UserFile.verify(message.files[i]);
                    if (error)
                        return "files." + error;
                }
            }
            if (message.total_files != null && message.hasOwnProperty("total_files"))
                if (!$util.isInteger(message.total_files))
                    return "total_files: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_EnumerateUserFiles_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_EnumerateUserFiles_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_EnumerateUserFiles_Response} CCloud_EnumerateUserFiles_Response
         */
        CCloud_EnumerateUserFiles_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_EnumerateUserFiles_Response)
                return object;
            var message = new $root.CCloud_EnumerateUserFiles_Response();
            if (object.files) {
                if (!Array.isArray(object.files))
                    throw TypeError(".CCloud_EnumerateUserFiles_Response.files: array expected");
                message.files = [];
                for (var i = 0; i < object.files.length; ++i) {
                    if (typeof object.files[i] !== "object")
                        throw TypeError(".CCloud_EnumerateUserFiles_Response.files: object expected");
                    message.files[i] = $root.CCloud_UserFile.fromObject(object.files[i]);
                }
            }
            if (object.total_files != null)
                message.total_files = object.total_files >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_EnumerateUserFiles_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_EnumerateUserFiles_Response
         * @static
         * @param {CCloud_EnumerateUserFiles_Response} message CCloud_EnumerateUserFiles_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_EnumerateUserFiles_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.files = [];
            if (options.defaults)
                object.total_files = 0;
            if (message.files && message.files.length) {
                object.files = [];
                for (var j = 0; j < message.files.length; ++j)
                    object.files[j] = $root.CCloud_UserFile.toObject(message.files[j], options);
            }
            if (message.total_files != null && message.hasOwnProperty("total_files"))
                object.total_files = message.total_files;
            return object;
        };
    
        /**
         * Converts this CCloud_EnumerateUserFiles_Response to JSON.
         * @function toJSON
         * @memberof CCloud_EnumerateUserFiles_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_EnumerateUserFiles_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_EnumerateUserFiles_Response;
    })();
    
    $root.CCloud_Delete_Request = (function() {
    
        /**
         * Properties of a CCloud_Delete_Request.
         * @exports ICCloud_Delete_Request
         * @interface ICCloud_Delete_Request
         * @property {string|null} [filename] CCloud_Delete_Request filename
         * @property {number|null} [appid] CCloud_Delete_Request appid
         */
    
        /**
         * Constructs a new CCloud_Delete_Request.
         * @exports CCloud_Delete_Request
         * @classdesc Represents a CCloud_Delete_Request.
         * @implements ICCloud_Delete_Request
         * @constructor
         * @param {ICCloud_Delete_Request=} [properties] Properties to set
         */
        function CCloud_Delete_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_Delete_Request filename.
         * @member {string} filename
         * @memberof CCloud_Delete_Request
         * @instance
         */
        CCloud_Delete_Request.prototype.filename = "";
    
        /**
         * CCloud_Delete_Request appid.
         * @member {number} appid
         * @memberof CCloud_Delete_Request
         * @instance
         */
        CCloud_Delete_Request.prototype.appid = 0;
    
        /**
         * Creates a new CCloud_Delete_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_Delete_Request
         * @static
         * @param {ICCloud_Delete_Request=} [properties] Properties to set
         * @returns {CCloud_Delete_Request} CCloud_Delete_Request instance
         */
        CCloud_Delete_Request.create = function create(properties) {
            return new CCloud_Delete_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_Delete_Request message. Does not implicitly {@link CCloud_Delete_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_Delete_Request
         * @static
         * @param {ICCloud_Delete_Request} message CCloud_Delete_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_Delete_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_Delete_Request message, length delimited. Does not implicitly {@link CCloud_Delete_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_Delete_Request
         * @static
         * @param {ICCloud_Delete_Request} message CCloud_Delete_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_Delete_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_Delete_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_Delete_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_Delete_Request} CCloud_Delete_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_Delete_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_Delete_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.filename = reader.string();
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
         * Decodes a CCloud_Delete_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_Delete_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_Delete_Request} CCloud_Delete_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_Delete_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_Delete_Request message.
         * @function verify
         * @memberof CCloud_Delete_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_Delete_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_Delete_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_Delete_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_Delete_Request} CCloud_Delete_Request
         */
        CCloud_Delete_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_Delete_Request)
                return object;
            var message = new $root.CCloud_Delete_Request();
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_Delete_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_Delete_Request
         * @static
         * @param {CCloud_Delete_Request} message CCloud_Delete_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_Delete_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.filename = "";
                object.appid = 0;
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            return object;
        };
    
        /**
         * Converts this CCloud_Delete_Request to JSON.
         * @function toJSON
         * @memberof CCloud_Delete_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_Delete_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_Delete_Request;
    })();
    
    $root.CCloud_Delete_Response = (function() {
    
        /**
         * Properties of a CCloud_Delete_Response.
         * @exports ICCloud_Delete_Response
         * @interface ICCloud_Delete_Response
         */
    
        /**
         * Constructs a new CCloud_Delete_Response.
         * @exports CCloud_Delete_Response
         * @classdesc Represents a CCloud_Delete_Response.
         * @implements ICCloud_Delete_Response
         * @constructor
         * @param {ICCloud_Delete_Response=} [properties] Properties to set
         */
        function CCloud_Delete_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CCloud_Delete_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_Delete_Response
         * @static
         * @param {ICCloud_Delete_Response=} [properties] Properties to set
         * @returns {CCloud_Delete_Response} CCloud_Delete_Response instance
         */
        CCloud_Delete_Response.create = function create(properties) {
            return new CCloud_Delete_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_Delete_Response message. Does not implicitly {@link CCloud_Delete_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_Delete_Response
         * @static
         * @param {ICCloud_Delete_Response} message CCloud_Delete_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_Delete_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_Delete_Response message, length delimited. Does not implicitly {@link CCloud_Delete_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_Delete_Response
         * @static
         * @param {ICCloud_Delete_Response} message CCloud_Delete_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_Delete_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_Delete_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_Delete_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_Delete_Response} CCloud_Delete_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_Delete_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_Delete_Response();
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
         * Decodes a CCloud_Delete_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_Delete_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_Delete_Response} CCloud_Delete_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_Delete_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_Delete_Response message.
         * @function verify
         * @memberof CCloud_Delete_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_Delete_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CCloud_Delete_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_Delete_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_Delete_Response} CCloud_Delete_Response
         */
        CCloud_Delete_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_Delete_Response)
                return object;
            return new $root.CCloud_Delete_Response();
        };
    
        /**
         * Creates a plain object from a CCloud_Delete_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_Delete_Response
         * @static
         * @param {CCloud_Delete_Response} message CCloud_Delete_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_Delete_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CCloud_Delete_Response to JSON.
         * @function toJSON
         * @memberof CCloud_Delete_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_Delete_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_Delete_Response;
    })();
    
    $root.CCloud_GetClientEncryptionKey_Request = (function() {
    
        /**
         * Properties of a CCloud_GetClientEncryptionKey_Request.
         * @exports ICCloud_GetClientEncryptionKey_Request
         * @interface ICCloud_GetClientEncryptionKey_Request
         */
    
        /**
         * Constructs a new CCloud_GetClientEncryptionKey_Request.
         * @exports CCloud_GetClientEncryptionKey_Request
         * @classdesc Represents a CCloud_GetClientEncryptionKey_Request.
         * @implements ICCloud_GetClientEncryptionKey_Request
         * @constructor
         * @param {ICCloud_GetClientEncryptionKey_Request=} [properties] Properties to set
         */
        function CCloud_GetClientEncryptionKey_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CCloud_GetClientEncryptionKey_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @static
         * @param {ICCloud_GetClientEncryptionKey_Request=} [properties] Properties to set
         * @returns {CCloud_GetClientEncryptionKey_Request} CCloud_GetClientEncryptionKey_Request instance
         */
        CCloud_GetClientEncryptionKey_Request.create = function create(properties) {
            return new CCloud_GetClientEncryptionKey_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_GetClientEncryptionKey_Request message. Does not implicitly {@link CCloud_GetClientEncryptionKey_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @static
         * @param {ICCloud_GetClientEncryptionKey_Request} message CCloud_GetClientEncryptionKey_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetClientEncryptionKey_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_GetClientEncryptionKey_Request message, length delimited. Does not implicitly {@link CCloud_GetClientEncryptionKey_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @static
         * @param {ICCloud_GetClientEncryptionKey_Request} message CCloud_GetClientEncryptionKey_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetClientEncryptionKey_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_GetClientEncryptionKey_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_GetClientEncryptionKey_Request} CCloud_GetClientEncryptionKey_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetClientEncryptionKey_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_GetClientEncryptionKey_Request();
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
         * Decodes a CCloud_GetClientEncryptionKey_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_GetClientEncryptionKey_Request} CCloud_GetClientEncryptionKey_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetClientEncryptionKey_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_GetClientEncryptionKey_Request message.
         * @function verify
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_GetClientEncryptionKey_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CCloud_GetClientEncryptionKey_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_GetClientEncryptionKey_Request} CCloud_GetClientEncryptionKey_Request
         */
        CCloud_GetClientEncryptionKey_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_GetClientEncryptionKey_Request)
                return object;
            return new $root.CCloud_GetClientEncryptionKey_Request();
        };
    
        /**
         * Creates a plain object from a CCloud_GetClientEncryptionKey_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @static
         * @param {CCloud_GetClientEncryptionKey_Request} message CCloud_GetClientEncryptionKey_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_GetClientEncryptionKey_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CCloud_GetClientEncryptionKey_Request to JSON.
         * @function toJSON
         * @memberof CCloud_GetClientEncryptionKey_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_GetClientEncryptionKey_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_GetClientEncryptionKey_Request;
    })();
    
    $root.CCloud_GetClientEncryptionKey_Response = (function() {
    
        /**
         * Properties of a CCloud_GetClientEncryptionKey_Response.
         * @exports ICCloud_GetClientEncryptionKey_Response
         * @interface ICCloud_GetClientEncryptionKey_Response
         * @property {Uint8Array|null} [key] CCloud_GetClientEncryptionKey_Response key
         * @property {number|null} [crc] CCloud_GetClientEncryptionKey_Response crc
         */
    
        /**
         * Constructs a new CCloud_GetClientEncryptionKey_Response.
         * @exports CCloud_GetClientEncryptionKey_Response
         * @classdesc Represents a CCloud_GetClientEncryptionKey_Response.
         * @implements ICCloud_GetClientEncryptionKey_Response
         * @constructor
         * @param {ICCloud_GetClientEncryptionKey_Response=} [properties] Properties to set
         */
        function CCloud_GetClientEncryptionKey_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_GetClientEncryptionKey_Response key.
         * @member {Uint8Array} key
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @instance
         */
        CCloud_GetClientEncryptionKey_Response.prototype.key = $util.newBuffer([]);
    
        /**
         * CCloud_GetClientEncryptionKey_Response crc.
         * @member {number} crc
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @instance
         */
        CCloud_GetClientEncryptionKey_Response.prototype.crc = 0;
    
        /**
         * Creates a new CCloud_GetClientEncryptionKey_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @static
         * @param {ICCloud_GetClientEncryptionKey_Response=} [properties] Properties to set
         * @returns {CCloud_GetClientEncryptionKey_Response} CCloud_GetClientEncryptionKey_Response instance
         */
        CCloud_GetClientEncryptionKey_Response.create = function create(properties) {
            return new CCloud_GetClientEncryptionKey_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_GetClientEncryptionKey_Response message. Does not implicitly {@link CCloud_GetClientEncryptionKey_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @static
         * @param {ICCloud_GetClientEncryptionKey_Response} message CCloud_GetClientEncryptionKey_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetClientEncryptionKey_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
            if (message.crc != null && message.hasOwnProperty("crc"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.crc);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_GetClientEncryptionKey_Response message, length delimited. Does not implicitly {@link CCloud_GetClientEncryptionKey_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @static
         * @param {ICCloud_GetClientEncryptionKey_Response} message CCloud_GetClientEncryptionKey_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_GetClientEncryptionKey_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_GetClientEncryptionKey_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_GetClientEncryptionKey_Response} CCloud_GetClientEncryptionKey_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetClientEncryptionKey_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_GetClientEncryptionKey_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.crc = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_GetClientEncryptionKey_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_GetClientEncryptionKey_Response} CCloud_GetClientEncryptionKey_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_GetClientEncryptionKey_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_GetClientEncryptionKey_Response message.
         * @function verify
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_GetClientEncryptionKey_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            if (message.crc != null && message.hasOwnProperty("crc"))
                if (!$util.isInteger(message.crc))
                    return "crc: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_GetClientEncryptionKey_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_GetClientEncryptionKey_Response} CCloud_GetClientEncryptionKey_Response
         */
        CCloud_GetClientEncryptionKey_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_GetClientEncryptionKey_Response)
                return object;
            var message = new $root.CCloud_GetClientEncryptionKey_Response();
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length)
                    message.key = object.key;
            if (object.crc != null)
                message.crc = object.crc | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_GetClientEncryptionKey_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @static
         * @param {CCloud_GetClientEncryptionKey_Response} message CCloud_GetClientEncryptionKey_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_GetClientEncryptionKey_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.key = "";
                else {
                    object.key = [];
                    if (options.bytes !== Array)
                        object.key = $util.newBuffer(object.key);
                }
                object.crc = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            if (message.crc != null && message.hasOwnProperty("crc"))
                object.crc = message.crc;
            return object;
        };
    
        /**
         * Converts this CCloud_GetClientEncryptionKey_Response to JSON.
         * @function toJSON
         * @memberof CCloud_GetClientEncryptionKey_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_GetClientEncryptionKey_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_GetClientEncryptionKey_Response;
    })();
    
    $root.CCloud_CDNReport_Notification = (function() {
    
        /**
         * Properties of a CCloud_CDNReport_Notification.
         * @exports ICCloud_CDNReport_Notification
         * @interface ICCloud_CDNReport_Notification
         * @property {number|Long|null} [steamid] CCloud_CDNReport_Notification steamid
         * @property {string|null} [url] CCloud_CDNReport_Notification url
         * @property {boolean|null} [success] CCloud_CDNReport_Notification success
         * @property {number|null} [http_status_code] CCloud_CDNReport_Notification http_status_code
         * @property {number|Long|null} [expected_bytes] CCloud_CDNReport_Notification expected_bytes
         * @property {number|Long|null} [received_bytes] CCloud_CDNReport_Notification received_bytes
         * @property {number|null} [duration] CCloud_CDNReport_Notification duration
         */
    
        /**
         * Constructs a new CCloud_CDNReport_Notification.
         * @exports CCloud_CDNReport_Notification
         * @classdesc Represents a CCloud_CDNReport_Notification.
         * @implements ICCloud_CDNReport_Notification
         * @constructor
         * @param {ICCloud_CDNReport_Notification=} [properties] Properties to set
         */
        function CCloud_CDNReport_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_CDNReport_Notification steamid.
         * @member {number|Long} steamid
         * @memberof CCloud_CDNReport_Notification
         * @instance
         */
        CCloud_CDNReport_Notification.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CCloud_CDNReport_Notification url.
         * @member {string} url
         * @memberof CCloud_CDNReport_Notification
         * @instance
         */
        CCloud_CDNReport_Notification.prototype.url = "";
    
        /**
         * CCloud_CDNReport_Notification success.
         * @member {boolean} success
         * @memberof CCloud_CDNReport_Notification
         * @instance
         */
        CCloud_CDNReport_Notification.prototype.success = false;
    
        /**
         * CCloud_CDNReport_Notification http_status_code.
         * @member {number} http_status_code
         * @memberof CCloud_CDNReport_Notification
         * @instance
         */
        CCloud_CDNReport_Notification.prototype.http_status_code = 0;
    
        /**
         * CCloud_CDNReport_Notification expected_bytes.
         * @member {number|Long} expected_bytes
         * @memberof CCloud_CDNReport_Notification
         * @instance
         */
        CCloud_CDNReport_Notification.prototype.expected_bytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_CDNReport_Notification received_bytes.
         * @member {number|Long} received_bytes
         * @memberof CCloud_CDNReport_Notification
         * @instance
         */
        CCloud_CDNReport_Notification.prototype.received_bytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_CDNReport_Notification duration.
         * @member {number} duration
         * @memberof CCloud_CDNReport_Notification
         * @instance
         */
        CCloud_CDNReport_Notification.prototype.duration = 0;
    
        /**
         * Creates a new CCloud_CDNReport_Notification instance using the specified properties.
         * @function create
         * @memberof CCloud_CDNReport_Notification
         * @static
         * @param {ICCloud_CDNReport_Notification=} [properties] Properties to set
         * @returns {CCloud_CDNReport_Notification} CCloud_CDNReport_Notification instance
         */
        CCloud_CDNReport_Notification.create = function create(properties) {
            return new CCloud_CDNReport_Notification(properties);
        };
    
        /**
         * Encodes the specified CCloud_CDNReport_Notification message. Does not implicitly {@link CCloud_CDNReport_Notification.verify|verify} messages.
         * @function encode
         * @memberof CCloud_CDNReport_Notification
         * @static
         * @param {ICCloud_CDNReport_Notification} message CCloud_CDNReport_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_CDNReport_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.url != null && message.hasOwnProperty("url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.success);
            if (message.http_status_code != null && message.hasOwnProperty("http_status_code"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.http_status_code);
            if (message.expected_bytes != null && message.hasOwnProperty("expected_bytes"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.expected_bytes);
            if (message.received_bytes != null && message.hasOwnProperty("received_bytes"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.received_bytes);
            if (message.duration != null && message.hasOwnProperty("duration"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.duration);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_CDNReport_Notification message, length delimited. Does not implicitly {@link CCloud_CDNReport_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_CDNReport_Notification
         * @static
         * @param {ICCloud_CDNReport_Notification} message CCloud_CDNReport_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_CDNReport_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_CDNReport_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_CDNReport_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_CDNReport_Notification} CCloud_CDNReport_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_CDNReport_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_CDNReport_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.success = reader.bool();
                    break;
                case 4:
                    message.http_status_code = reader.uint32();
                    break;
                case 5:
                    message.expected_bytes = reader.uint64();
                    break;
                case 6:
                    message.received_bytes = reader.uint64();
                    break;
                case 7:
                    message.duration = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_CDNReport_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_CDNReport_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_CDNReport_Notification} CCloud_CDNReport_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_CDNReport_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_CDNReport_Notification message.
         * @function verify
         * @memberof CCloud_CDNReport_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_CDNReport_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.http_status_code != null && message.hasOwnProperty("http_status_code"))
                if (!$util.isInteger(message.http_status_code))
                    return "http_status_code: integer expected";
            if (message.expected_bytes != null && message.hasOwnProperty("expected_bytes"))
                if (!$util.isInteger(message.expected_bytes) && !(message.expected_bytes && $util.isInteger(message.expected_bytes.low) && $util.isInteger(message.expected_bytes.high)))
                    return "expected_bytes: integer|Long expected";
            if (message.received_bytes != null && message.hasOwnProperty("received_bytes"))
                if (!$util.isInteger(message.received_bytes) && !(message.received_bytes && $util.isInteger(message.received_bytes.low) && $util.isInteger(message.received_bytes.high)))
                    return "received_bytes: integer|Long expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_CDNReport_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_CDNReport_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_CDNReport_Notification} CCloud_CDNReport_Notification
         */
        CCloud_CDNReport_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_CDNReport_Notification)
                return object;
            var message = new $root.CCloud_CDNReport_Notification();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.url != null)
                message.url = String(object.url);
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.http_status_code != null)
                message.http_status_code = object.http_status_code >>> 0;
            if (object.expected_bytes != null)
                if ($util.Long)
                    (message.expected_bytes = $util.Long.fromValue(object.expected_bytes)).unsigned = true;
                else if (typeof object.expected_bytes === "string")
                    message.expected_bytes = parseInt(object.expected_bytes, 10);
                else if (typeof object.expected_bytes === "number")
                    message.expected_bytes = object.expected_bytes;
                else if (typeof object.expected_bytes === "object")
                    message.expected_bytes = new $util.LongBits(object.expected_bytes.low >>> 0, object.expected_bytes.high >>> 0).toNumber(true);
            if (object.received_bytes != null)
                if ($util.Long)
                    (message.received_bytes = $util.Long.fromValue(object.received_bytes)).unsigned = true;
                else if (typeof object.received_bytes === "string")
                    message.received_bytes = parseInt(object.received_bytes, 10);
                else if (typeof object.received_bytes === "number")
                    message.received_bytes = object.received_bytes;
                else if (typeof object.received_bytes === "object")
                    message.received_bytes = new $util.LongBits(object.received_bytes.low >>> 0, object.received_bytes.high >>> 0).toNumber(true);
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_CDNReport_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_CDNReport_Notification
         * @static
         * @param {CCloud_CDNReport_Notification} message CCloud_CDNReport_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_CDNReport_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.url = "";
                object.success = false;
                object.http_status_code = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.expected_bytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expected_bytes = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.received_bytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.received_bytes = options.longs === String ? "0" : 0;
                object.duration = 0;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.http_status_code != null && message.hasOwnProperty("http_status_code"))
                object.http_status_code = message.http_status_code;
            if (message.expected_bytes != null && message.hasOwnProperty("expected_bytes"))
                if (typeof message.expected_bytes === "number")
                    object.expected_bytes = options.longs === String ? String(message.expected_bytes) : message.expected_bytes;
                else
                    object.expected_bytes = options.longs === String ? $util.Long.prototype.toString.call(message.expected_bytes) : options.longs === Number ? new $util.LongBits(message.expected_bytes.low >>> 0, message.expected_bytes.high >>> 0).toNumber(true) : message.expected_bytes;
            if (message.received_bytes != null && message.hasOwnProperty("received_bytes"))
                if (typeof message.received_bytes === "number")
                    object.received_bytes = options.longs === String ? String(message.received_bytes) : message.received_bytes;
                else
                    object.received_bytes = options.longs === String ? $util.Long.prototype.toString.call(message.received_bytes) : options.longs === Number ? new $util.LongBits(message.received_bytes.low >>> 0, message.received_bytes.high >>> 0).toNumber(true) : message.received_bytes;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            return object;
        };
    
        /**
         * Converts this CCloud_CDNReport_Notification to JSON.
         * @function toJSON
         * @memberof CCloud_CDNReport_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_CDNReport_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_CDNReport_Notification;
    })();
    
    $root.CCloud_ExternalStorageTransferReport_Notification = (function() {
    
        /**
         * Properties of a CCloud_ExternalStorageTransferReport_Notification.
         * @exports ICCloud_ExternalStorageTransferReport_Notification
         * @interface ICCloud_ExternalStorageTransferReport_Notification
         * @property {string|null} [host] CCloud_ExternalStorageTransferReport_Notification host
         * @property {string|null} [path] CCloud_ExternalStorageTransferReport_Notification path
         * @property {boolean|null} [is_upload] CCloud_ExternalStorageTransferReport_Notification is_upload
         * @property {boolean|null} [success] CCloud_ExternalStorageTransferReport_Notification success
         * @property {number|null} [http_status_code] CCloud_ExternalStorageTransferReport_Notification http_status_code
         * @property {number|Long|null} [bytes_expected] CCloud_ExternalStorageTransferReport_Notification bytes_expected
         * @property {number|Long|null} [bytes_actual] CCloud_ExternalStorageTransferReport_Notification bytes_actual
         * @property {number|null} [duration_ms] CCloud_ExternalStorageTransferReport_Notification duration_ms
         * @property {number|null} [cellid] CCloud_ExternalStorageTransferReport_Notification cellid
         */
    
        /**
         * Constructs a new CCloud_ExternalStorageTransferReport_Notification.
         * @exports CCloud_ExternalStorageTransferReport_Notification
         * @classdesc Represents a CCloud_ExternalStorageTransferReport_Notification.
         * @implements ICCloud_ExternalStorageTransferReport_Notification
         * @constructor
         * @param {ICCloud_ExternalStorageTransferReport_Notification=} [properties] Properties to set
         */
        function CCloud_ExternalStorageTransferReport_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification host.
         * @member {string} host
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.host = "";
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification path.
         * @member {string} path
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.path = "";
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification is_upload.
         * @member {boolean} is_upload
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.is_upload = false;
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification success.
         * @member {boolean} success
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.success = false;
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification http_status_code.
         * @member {number} http_status_code
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.http_status_code = 0;
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification bytes_expected.
         * @member {number|Long} bytes_expected
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.bytes_expected = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification bytes_actual.
         * @member {number|Long} bytes_actual
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.bytes_actual = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification duration_ms.
         * @member {number} duration_ms
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.duration_ms = 0;
    
        /**
         * CCloud_ExternalStorageTransferReport_Notification cellid.
         * @member {number} cellid
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.cellid = 0;
    
        /**
         * Creates a new CCloud_ExternalStorageTransferReport_Notification instance using the specified properties.
         * @function create
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @static
         * @param {ICCloud_ExternalStorageTransferReport_Notification=} [properties] Properties to set
         * @returns {CCloud_ExternalStorageTransferReport_Notification} CCloud_ExternalStorageTransferReport_Notification instance
         */
        CCloud_ExternalStorageTransferReport_Notification.create = function create(properties) {
            return new CCloud_ExternalStorageTransferReport_Notification(properties);
        };
    
        /**
         * Encodes the specified CCloud_ExternalStorageTransferReport_Notification message. Does not implicitly {@link CCloud_ExternalStorageTransferReport_Notification.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @static
         * @param {ICCloud_ExternalStorageTransferReport_Notification} message CCloud_ExternalStorageTransferReport_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ExternalStorageTransferReport_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.host != null && message.hasOwnProperty("host"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.host);
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
            if (message.is_upload != null && message.hasOwnProperty("is_upload"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_upload);
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.success);
            if (message.http_status_code != null && message.hasOwnProperty("http_status_code"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.http_status_code);
            if (message.bytes_expected != null && message.hasOwnProperty("bytes_expected"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.bytes_expected);
            if (message.bytes_actual != null && message.hasOwnProperty("bytes_actual"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.bytes_actual);
            if (message.duration_ms != null && message.hasOwnProperty("duration_ms"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.duration_ms);
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.cellid);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ExternalStorageTransferReport_Notification message, length delimited. Does not implicitly {@link CCloud_ExternalStorageTransferReport_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @static
         * @param {ICCloud_ExternalStorageTransferReport_Notification} message CCloud_ExternalStorageTransferReport_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ExternalStorageTransferReport_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ExternalStorageTransferReport_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ExternalStorageTransferReport_Notification} CCloud_ExternalStorageTransferReport_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ExternalStorageTransferReport_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ExternalStorageTransferReport_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.is_upload = reader.bool();
                    break;
                case 4:
                    message.success = reader.bool();
                    break;
                case 5:
                    message.http_status_code = reader.uint32();
                    break;
                case 6:
                    message.bytes_expected = reader.uint64();
                    break;
                case 7:
                    message.bytes_actual = reader.uint64();
                    break;
                case 8:
                    message.duration_ms = reader.uint32();
                    break;
                case 9:
                    message.cellid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ExternalStorageTransferReport_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ExternalStorageTransferReport_Notification} CCloud_ExternalStorageTransferReport_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ExternalStorageTransferReport_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ExternalStorageTransferReport_Notification message.
         * @function verify
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ExternalStorageTransferReport_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.is_upload != null && message.hasOwnProperty("is_upload"))
                if (typeof message.is_upload !== "boolean")
                    return "is_upload: boolean expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.http_status_code != null && message.hasOwnProperty("http_status_code"))
                if (!$util.isInteger(message.http_status_code))
                    return "http_status_code: integer expected";
            if (message.bytes_expected != null && message.hasOwnProperty("bytes_expected"))
                if (!$util.isInteger(message.bytes_expected) && !(message.bytes_expected && $util.isInteger(message.bytes_expected.low) && $util.isInteger(message.bytes_expected.high)))
                    return "bytes_expected: integer|Long expected";
            if (message.bytes_actual != null && message.hasOwnProperty("bytes_actual"))
                if (!$util.isInteger(message.bytes_actual) && !(message.bytes_actual && $util.isInteger(message.bytes_actual.low) && $util.isInteger(message.bytes_actual.high)))
                    return "bytes_actual: integer|Long expected";
            if (message.duration_ms != null && message.hasOwnProperty("duration_ms"))
                if (!$util.isInteger(message.duration_ms))
                    return "duration_ms: integer expected";
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                if (!$util.isInteger(message.cellid))
                    return "cellid: integer expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ExternalStorageTransferReport_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ExternalStorageTransferReport_Notification} CCloud_ExternalStorageTransferReport_Notification
         */
        CCloud_ExternalStorageTransferReport_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ExternalStorageTransferReport_Notification)
                return object;
            var message = new $root.CCloud_ExternalStorageTransferReport_Notification();
            if (object.host != null)
                message.host = String(object.host);
            if (object.path != null)
                message.path = String(object.path);
            if (object.is_upload != null)
                message.is_upload = Boolean(object.is_upload);
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.http_status_code != null)
                message.http_status_code = object.http_status_code >>> 0;
            if (object.bytes_expected != null)
                if ($util.Long)
                    (message.bytes_expected = $util.Long.fromValue(object.bytes_expected)).unsigned = true;
                else if (typeof object.bytes_expected === "string")
                    message.bytes_expected = parseInt(object.bytes_expected, 10);
                else if (typeof object.bytes_expected === "number")
                    message.bytes_expected = object.bytes_expected;
                else if (typeof object.bytes_expected === "object")
                    message.bytes_expected = new $util.LongBits(object.bytes_expected.low >>> 0, object.bytes_expected.high >>> 0).toNumber(true);
            if (object.bytes_actual != null)
                if ($util.Long)
                    (message.bytes_actual = $util.Long.fromValue(object.bytes_actual)).unsigned = true;
                else if (typeof object.bytes_actual === "string")
                    message.bytes_actual = parseInt(object.bytes_actual, 10);
                else if (typeof object.bytes_actual === "number")
                    message.bytes_actual = object.bytes_actual;
                else if (typeof object.bytes_actual === "object")
                    message.bytes_actual = new $util.LongBits(object.bytes_actual.low >>> 0, object.bytes_actual.high >>> 0).toNumber(true);
            if (object.duration_ms != null)
                message.duration_ms = object.duration_ms >>> 0;
            if (object.cellid != null)
                message.cellid = object.cellid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ExternalStorageTransferReport_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @static
         * @param {CCloud_ExternalStorageTransferReport_Notification} message CCloud_ExternalStorageTransferReport_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ExternalStorageTransferReport_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.host = "";
                object.path = "";
                object.is_upload = false;
                object.success = false;
                object.http_status_code = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_expected = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_expected = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes_actual = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes_actual = options.longs === String ? "0" : 0;
                object.duration_ms = 0;
                object.cellid = 0;
            }
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.is_upload != null && message.hasOwnProperty("is_upload"))
                object.is_upload = message.is_upload;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.http_status_code != null && message.hasOwnProperty("http_status_code"))
                object.http_status_code = message.http_status_code;
            if (message.bytes_expected != null && message.hasOwnProperty("bytes_expected"))
                if (typeof message.bytes_expected === "number")
                    object.bytes_expected = options.longs === String ? String(message.bytes_expected) : message.bytes_expected;
                else
                    object.bytes_expected = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_expected) : options.longs === Number ? new $util.LongBits(message.bytes_expected.low >>> 0, message.bytes_expected.high >>> 0).toNumber(true) : message.bytes_expected;
            if (message.bytes_actual != null && message.hasOwnProperty("bytes_actual"))
                if (typeof message.bytes_actual === "number")
                    object.bytes_actual = options.longs === String ? String(message.bytes_actual) : message.bytes_actual;
                else
                    object.bytes_actual = options.longs === String ? $util.Long.prototype.toString.call(message.bytes_actual) : options.longs === Number ? new $util.LongBits(message.bytes_actual.low >>> 0, message.bytes_actual.high >>> 0).toNumber(true) : message.bytes_actual;
            if (message.duration_ms != null && message.hasOwnProperty("duration_ms"))
                object.duration_ms = message.duration_ms;
            if (message.cellid != null && message.hasOwnProperty("cellid"))
                object.cellid = message.cellid;
            return object;
        };
    
        /**
         * Converts this CCloud_ExternalStorageTransferReport_Notification to JSON.
         * @function toJSON
         * @memberof CCloud_ExternalStorageTransferReport_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ExternalStorageTransferReport_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ExternalStorageTransferReport_Notification;
    })();
    
    $root.CCloud_ClientBeginFileUpload_Request = (function() {
    
        /**
         * Properties of a CCloud_ClientBeginFileUpload_Request.
         * @exports ICCloud_ClientBeginFileUpload_Request
         * @interface ICCloud_ClientBeginFileUpload_Request
         * @property {number|null} [appid] CCloud_ClientBeginFileUpload_Request appid
         * @property {number|null} [file_size] CCloud_ClientBeginFileUpload_Request file_size
         * @property {number|null} [raw_file_size] CCloud_ClientBeginFileUpload_Request raw_file_size
         * @property {Uint8Array|null} [file_sha] CCloud_ClientBeginFileUpload_Request file_sha
         * @property {number|Long|null} [time_stamp] CCloud_ClientBeginFileUpload_Request time_stamp
         * @property {string|null} [filename] CCloud_ClientBeginFileUpload_Request filename
         * @property {number|null} [platforms_to_sync] CCloud_ClientBeginFileUpload_Request platforms_to_sync
         * @property {number|null} [cell_id] CCloud_ClientBeginFileUpload_Request cell_id
         * @property {boolean|null} [can_encrypt] CCloud_ClientBeginFileUpload_Request can_encrypt
         * @property {boolean|null} [is_shared_file] CCloud_ClientBeginFileUpload_Request is_shared_file
         */
    
        /**
         * Constructs a new CCloud_ClientBeginFileUpload_Request.
         * @exports CCloud_ClientBeginFileUpload_Request
         * @classdesc Represents a CCloud_ClientBeginFileUpload_Request.
         * @implements ICCloud_ClientBeginFileUpload_Request
         * @constructor
         * @param {ICCloud_ClientBeginFileUpload_Request=} [properties] Properties to set
         */
        function CCloud_ClientBeginFileUpload_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ClientBeginFileUpload_Request appid.
         * @member {number} appid
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.appid = 0;
    
        /**
         * CCloud_ClientBeginFileUpload_Request file_size.
         * @member {number} file_size
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.file_size = 0;
    
        /**
         * CCloud_ClientBeginFileUpload_Request raw_file_size.
         * @member {number} raw_file_size
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.raw_file_size = 0;
    
        /**
         * CCloud_ClientBeginFileUpload_Request file_sha.
         * @member {Uint8Array} file_sha
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.file_sha = $util.newBuffer([]);
    
        /**
         * CCloud_ClientBeginFileUpload_Request time_stamp.
         * @member {number|Long} time_stamp
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.time_stamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_ClientBeginFileUpload_Request filename.
         * @member {string} filename
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.filename = "";
    
        /**
         * CCloud_ClientBeginFileUpload_Request platforms_to_sync.
         * @member {number} platforms_to_sync
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.platforms_to_sync = 4294967295;
    
        /**
         * CCloud_ClientBeginFileUpload_Request cell_id.
         * @member {number} cell_id
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.cell_id = 0;
    
        /**
         * CCloud_ClientBeginFileUpload_Request can_encrypt.
         * @member {boolean} can_encrypt
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.can_encrypt = false;
    
        /**
         * CCloud_ClientBeginFileUpload_Request is_shared_file.
         * @member {boolean} is_shared_file
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         */
        CCloud_ClientBeginFileUpload_Request.prototype.is_shared_file = false;
    
        /**
         * Creates a new CCloud_ClientBeginFileUpload_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @static
         * @param {ICCloud_ClientBeginFileUpload_Request=} [properties] Properties to set
         * @returns {CCloud_ClientBeginFileUpload_Request} CCloud_ClientBeginFileUpload_Request instance
         */
        CCloud_ClientBeginFileUpload_Request.create = function create(properties) {
            return new CCloud_ClientBeginFileUpload_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientBeginFileUpload_Request message. Does not implicitly {@link CCloud_ClientBeginFileUpload_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @static
         * @param {ICCloud_ClientBeginFileUpload_Request} message CCloud_ClientBeginFileUpload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientBeginFileUpload_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.file_size);
            if (message.raw_file_size != null && message.hasOwnProperty("raw_file_size"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.raw_file_size);
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.file_sha);
            if (message.time_stamp != null && message.hasOwnProperty("time_stamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.time_stamp);
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.filename);
            if (message.platforms_to_sync != null && message.hasOwnProperty("platforms_to_sync"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.platforms_to_sync);
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.cell_id);
            if (message.can_encrypt != null && message.hasOwnProperty("can_encrypt"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.can_encrypt);
            if (message.is_shared_file != null && message.hasOwnProperty("is_shared_file"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.is_shared_file);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientBeginFileUpload_Request message, length delimited. Does not implicitly {@link CCloud_ClientBeginFileUpload_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @static
         * @param {ICCloud_ClientBeginFileUpload_Request} message CCloud_ClientBeginFileUpload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientBeginFileUpload_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientBeginFileUpload_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientBeginFileUpload_Request} CCloud_ClientBeginFileUpload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientBeginFileUpload_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientBeginFileUpload_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.file_size = reader.uint32();
                    break;
                case 3:
                    message.raw_file_size = reader.uint32();
                    break;
                case 4:
                    message.file_sha = reader.bytes();
                    break;
                case 5:
                    message.time_stamp = reader.uint64();
                    break;
                case 6:
                    message.filename = reader.string();
                    break;
                case 7:
                    message.platforms_to_sync = reader.uint32();
                    break;
                case 9:
                    message.cell_id = reader.uint32();
                    break;
                case 10:
                    message.can_encrypt = reader.bool();
                    break;
                case 11:
                    message.is_shared_file = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ClientBeginFileUpload_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientBeginFileUpload_Request} CCloud_ClientBeginFileUpload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientBeginFileUpload_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientBeginFileUpload_Request message.
         * @function verify
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientBeginFileUpload_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                if (!$util.isInteger(message.file_size))
                    return "file_size: integer expected";
            if (message.raw_file_size != null && message.hasOwnProperty("raw_file_size"))
                if (!$util.isInteger(message.raw_file_size))
                    return "raw_file_size: integer expected";
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                if (!(message.file_sha && typeof message.file_sha.length === "number" || $util.isString(message.file_sha)))
                    return "file_sha: buffer expected";
            if (message.time_stamp != null && message.hasOwnProperty("time_stamp"))
                if (!$util.isInteger(message.time_stamp) && !(message.time_stamp && $util.isInteger(message.time_stamp.low) && $util.isInteger(message.time_stamp.high)))
                    return "time_stamp: integer|Long expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.platforms_to_sync != null && message.hasOwnProperty("platforms_to_sync"))
                if (!$util.isInteger(message.platforms_to_sync))
                    return "platforms_to_sync: integer expected";
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                if (!$util.isInteger(message.cell_id))
                    return "cell_id: integer expected";
            if (message.can_encrypt != null && message.hasOwnProperty("can_encrypt"))
                if (typeof message.can_encrypt !== "boolean")
                    return "can_encrypt: boolean expected";
            if (message.is_shared_file != null && message.hasOwnProperty("is_shared_file"))
                if (typeof message.is_shared_file !== "boolean")
                    return "is_shared_file: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ClientBeginFileUpload_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientBeginFileUpload_Request} CCloud_ClientBeginFileUpload_Request
         */
        CCloud_ClientBeginFileUpload_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientBeginFileUpload_Request)
                return object;
            var message = new $root.CCloud_ClientBeginFileUpload_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.file_size != null)
                message.file_size = object.file_size >>> 0;
            if (object.raw_file_size != null)
                message.raw_file_size = object.raw_file_size >>> 0;
            if (object.file_sha != null)
                if (typeof object.file_sha === "string")
                    $util.base64.decode(object.file_sha, message.file_sha = $util.newBuffer($util.base64.length(object.file_sha)), 0);
                else if (object.file_sha.length)
                    message.file_sha = object.file_sha;
            if (object.time_stamp != null)
                if ($util.Long)
                    (message.time_stamp = $util.Long.fromValue(object.time_stamp)).unsigned = true;
                else if (typeof object.time_stamp === "string")
                    message.time_stamp = parseInt(object.time_stamp, 10);
                else if (typeof object.time_stamp === "number")
                    message.time_stamp = object.time_stamp;
                else if (typeof object.time_stamp === "object")
                    message.time_stamp = new $util.LongBits(object.time_stamp.low >>> 0, object.time_stamp.high >>> 0).toNumber(true);
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.platforms_to_sync != null)
                message.platforms_to_sync = object.platforms_to_sync >>> 0;
            if (object.cell_id != null)
                message.cell_id = object.cell_id >>> 0;
            if (object.can_encrypt != null)
                message.can_encrypt = Boolean(object.can_encrypt);
            if (object.is_shared_file != null)
                message.is_shared_file = Boolean(object.is_shared_file);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ClientBeginFileUpload_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @static
         * @param {CCloud_ClientBeginFileUpload_Request} message CCloud_ClientBeginFileUpload_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientBeginFileUpload_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.file_size = 0;
                object.raw_file_size = 0;
                if (options.bytes === String)
                    object.file_sha = "";
                else {
                    object.file_sha = [];
                    if (options.bytes !== Array)
                        object.file_sha = $util.newBuffer(object.file_sha);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time_stamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time_stamp = options.longs === String ? "0" : 0;
                object.filename = "";
                object.platforms_to_sync = 4294967295;
                object.cell_id = 0;
                object.can_encrypt = false;
                object.is_shared_file = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                object.file_size = message.file_size;
            if (message.raw_file_size != null && message.hasOwnProperty("raw_file_size"))
                object.raw_file_size = message.raw_file_size;
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                object.file_sha = options.bytes === String ? $util.base64.encode(message.file_sha, 0, message.file_sha.length) : options.bytes === Array ? Array.prototype.slice.call(message.file_sha) : message.file_sha;
            if (message.time_stamp != null && message.hasOwnProperty("time_stamp"))
                if (typeof message.time_stamp === "number")
                    object.time_stamp = options.longs === String ? String(message.time_stamp) : message.time_stamp;
                else
                    object.time_stamp = options.longs === String ? $util.Long.prototype.toString.call(message.time_stamp) : options.longs === Number ? new $util.LongBits(message.time_stamp.low >>> 0, message.time_stamp.high >>> 0).toNumber(true) : message.time_stamp;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.platforms_to_sync != null && message.hasOwnProperty("platforms_to_sync"))
                object.platforms_to_sync = message.platforms_to_sync;
            if (message.cell_id != null && message.hasOwnProperty("cell_id"))
                object.cell_id = message.cell_id;
            if (message.can_encrypt != null && message.hasOwnProperty("can_encrypt"))
                object.can_encrypt = message.can_encrypt;
            if (message.is_shared_file != null && message.hasOwnProperty("is_shared_file"))
                object.is_shared_file = message.is_shared_file;
            return object;
        };
    
        /**
         * Converts this CCloud_ClientBeginFileUpload_Request to JSON.
         * @function toJSON
         * @memberof CCloud_ClientBeginFileUpload_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientBeginFileUpload_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ClientBeginFileUpload_Request;
    })();
    
    $root.ClientCloudFileUploadBlockDetails = (function() {
    
        /**
         * Properties of a ClientCloudFileUploadBlockDetails.
         * @exports IClientCloudFileUploadBlockDetails
         * @interface IClientCloudFileUploadBlockDetails
         * @property {string|null} [url_host] ClientCloudFileUploadBlockDetails url_host
         * @property {string|null} [url_path] ClientCloudFileUploadBlockDetails url_path
         * @property {boolean|null} [use_https] ClientCloudFileUploadBlockDetails use_https
         * @property {number|null} [http_method] ClientCloudFileUploadBlockDetails http_method
         * @property {Array.<ClientCloudFileUploadBlockDetails.IHTTPHeaders>|null} [request_headers] ClientCloudFileUploadBlockDetails request_headers
         * @property {number|Long|null} [block_offset] ClientCloudFileUploadBlockDetails block_offset
         * @property {number|null} [block_length] ClientCloudFileUploadBlockDetails block_length
         * @property {Uint8Array|null} [explicit_body_data] ClientCloudFileUploadBlockDetails explicit_body_data
         * @property {boolean|null} [may_parallelize] ClientCloudFileUploadBlockDetails may_parallelize
         */
    
        /**
         * Constructs a new ClientCloudFileUploadBlockDetails.
         * @exports ClientCloudFileUploadBlockDetails
         * @classdesc Represents a ClientCloudFileUploadBlockDetails.
         * @implements IClientCloudFileUploadBlockDetails
         * @constructor
         * @param {IClientCloudFileUploadBlockDetails=} [properties] Properties to set
         */
        function ClientCloudFileUploadBlockDetails(properties) {
            this.request_headers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ClientCloudFileUploadBlockDetails url_host.
         * @member {string} url_host
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.url_host = "";
    
        /**
         * ClientCloudFileUploadBlockDetails url_path.
         * @member {string} url_path
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.url_path = "";
    
        /**
         * ClientCloudFileUploadBlockDetails use_https.
         * @member {boolean} use_https
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.use_https = false;
    
        /**
         * ClientCloudFileUploadBlockDetails http_method.
         * @member {number} http_method
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.http_method = 0;
    
        /**
         * ClientCloudFileUploadBlockDetails request_headers.
         * @member {Array.<ClientCloudFileUploadBlockDetails.IHTTPHeaders>} request_headers
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.request_headers = $util.emptyArray;
    
        /**
         * ClientCloudFileUploadBlockDetails block_offset.
         * @member {number|Long} block_offset
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.block_offset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * ClientCloudFileUploadBlockDetails block_length.
         * @member {number} block_length
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.block_length = 0;
    
        /**
         * ClientCloudFileUploadBlockDetails explicit_body_data.
         * @member {Uint8Array} explicit_body_data
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.explicit_body_data = $util.newBuffer([]);
    
        /**
         * ClientCloudFileUploadBlockDetails may_parallelize.
         * @member {boolean} may_parallelize
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         */
        ClientCloudFileUploadBlockDetails.prototype.may_parallelize = false;
    
        /**
         * Creates a new ClientCloudFileUploadBlockDetails instance using the specified properties.
         * @function create
         * @memberof ClientCloudFileUploadBlockDetails
         * @static
         * @param {IClientCloudFileUploadBlockDetails=} [properties] Properties to set
         * @returns {ClientCloudFileUploadBlockDetails} ClientCloudFileUploadBlockDetails instance
         */
        ClientCloudFileUploadBlockDetails.create = function create(properties) {
            return new ClientCloudFileUploadBlockDetails(properties);
        };
    
        /**
         * Encodes the specified ClientCloudFileUploadBlockDetails message. Does not implicitly {@link ClientCloudFileUploadBlockDetails.verify|verify} messages.
         * @function encode
         * @memberof ClientCloudFileUploadBlockDetails
         * @static
         * @param {IClientCloudFileUploadBlockDetails} message ClientCloudFileUploadBlockDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientCloudFileUploadBlockDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url_host);
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url_path);
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.use_https);
            if (message.http_method != null && message.hasOwnProperty("http_method"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.http_method);
            if (message.request_headers != null && message.request_headers.length)
                for (var i = 0; i < message.request_headers.length; ++i)
                    $root.ClientCloudFileUploadBlockDetails.HTTPHeaders.encode(message.request_headers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.block_offset != null && message.hasOwnProperty("block_offset"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.block_offset);
            if (message.block_length != null && message.hasOwnProperty("block_length"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.block_length);
            if (message.explicit_body_data != null && message.hasOwnProperty("explicit_body_data"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.explicit_body_data);
            if (message.may_parallelize != null && message.hasOwnProperty("may_parallelize"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.may_parallelize);
            return writer;
        };
    
        /**
         * Encodes the specified ClientCloudFileUploadBlockDetails message, length delimited. Does not implicitly {@link ClientCloudFileUploadBlockDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientCloudFileUploadBlockDetails
         * @static
         * @param {IClientCloudFileUploadBlockDetails} message ClientCloudFileUploadBlockDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientCloudFileUploadBlockDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ClientCloudFileUploadBlockDetails message from the specified reader or buffer.
         * @function decode
         * @memberof ClientCloudFileUploadBlockDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientCloudFileUploadBlockDetails} ClientCloudFileUploadBlockDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientCloudFileUploadBlockDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientCloudFileUploadBlockDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.url_host = reader.string();
                    break;
                case 2:
                    message.url_path = reader.string();
                    break;
                case 3:
                    message.use_https = reader.bool();
                    break;
                case 4:
                    message.http_method = reader.int32();
                    break;
                case 5:
                    if (!(message.request_headers && message.request_headers.length))
                        message.request_headers = [];
                    message.request_headers.push($root.ClientCloudFileUploadBlockDetails.HTTPHeaders.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.block_offset = reader.uint64();
                    break;
                case 7:
                    message.block_length = reader.uint32();
                    break;
                case 8:
                    message.explicit_body_data = reader.bytes();
                    break;
                case 9:
                    message.may_parallelize = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ClientCloudFileUploadBlockDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientCloudFileUploadBlockDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientCloudFileUploadBlockDetails} ClientCloudFileUploadBlockDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientCloudFileUploadBlockDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ClientCloudFileUploadBlockDetails message.
         * @function verify
         * @memberof ClientCloudFileUploadBlockDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientCloudFileUploadBlockDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                if (!$util.isString(message.url_host))
                    return "url_host: string expected";
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                if (!$util.isString(message.url_path))
                    return "url_path: string expected";
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                if (typeof message.use_https !== "boolean")
                    return "use_https: boolean expected";
            if (message.http_method != null && message.hasOwnProperty("http_method"))
                if (!$util.isInteger(message.http_method))
                    return "http_method: integer expected";
            if (message.request_headers != null && message.hasOwnProperty("request_headers")) {
                if (!Array.isArray(message.request_headers))
                    return "request_headers: array expected";
                for (var i = 0; i < message.request_headers.length; ++i) {
                    var error = $root.ClientCloudFileUploadBlockDetails.HTTPHeaders.verify(message.request_headers[i]);
                    if (error)
                        return "request_headers." + error;
                }
            }
            if (message.block_offset != null && message.hasOwnProperty("block_offset"))
                if (!$util.isInteger(message.block_offset) && !(message.block_offset && $util.isInteger(message.block_offset.low) && $util.isInteger(message.block_offset.high)))
                    return "block_offset: integer|Long expected";
            if (message.block_length != null && message.hasOwnProperty("block_length"))
                if (!$util.isInteger(message.block_length))
                    return "block_length: integer expected";
            if (message.explicit_body_data != null && message.hasOwnProperty("explicit_body_data"))
                if (!(message.explicit_body_data && typeof message.explicit_body_data.length === "number" || $util.isString(message.explicit_body_data)))
                    return "explicit_body_data: buffer expected";
            if (message.may_parallelize != null && message.hasOwnProperty("may_parallelize"))
                if (typeof message.may_parallelize !== "boolean")
                    return "may_parallelize: boolean expected";
            return null;
        };
    
        /**
         * Creates a ClientCloudFileUploadBlockDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientCloudFileUploadBlockDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientCloudFileUploadBlockDetails} ClientCloudFileUploadBlockDetails
         */
        ClientCloudFileUploadBlockDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientCloudFileUploadBlockDetails)
                return object;
            var message = new $root.ClientCloudFileUploadBlockDetails();
            if (object.url_host != null)
                message.url_host = String(object.url_host);
            if (object.url_path != null)
                message.url_path = String(object.url_path);
            if (object.use_https != null)
                message.use_https = Boolean(object.use_https);
            if (object.http_method != null)
                message.http_method = object.http_method | 0;
            if (object.request_headers) {
                if (!Array.isArray(object.request_headers))
                    throw TypeError(".ClientCloudFileUploadBlockDetails.request_headers: array expected");
                message.request_headers = [];
                for (var i = 0; i < object.request_headers.length; ++i) {
                    if (typeof object.request_headers[i] !== "object")
                        throw TypeError(".ClientCloudFileUploadBlockDetails.request_headers: object expected");
                    message.request_headers[i] = $root.ClientCloudFileUploadBlockDetails.HTTPHeaders.fromObject(object.request_headers[i]);
                }
            }
            if (object.block_offset != null)
                if ($util.Long)
                    (message.block_offset = $util.Long.fromValue(object.block_offset)).unsigned = true;
                else if (typeof object.block_offset === "string")
                    message.block_offset = parseInt(object.block_offset, 10);
                else if (typeof object.block_offset === "number")
                    message.block_offset = object.block_offset;
                else if (typeof object.block_offset === "object")
                    message.block_offset = new $util.LongBits(object.block_offset.low >>> 0, object.block_offset.high >>> 0).toNumber(true);
            if (object.block_length != null)
                message.block_length = object.block_length >>> 0;
            if (object.explicit_body_data != null)
                if (typeof object.explicit_body_data === "string")
                    $util.base64.decode(object.explicit_body_data, message.explicit_body_data = $util.newBuffer($util.base64.length(object.explicit_body_data)), 0);
                else if (object.explicit_body_data.length)
                    message.explicit_body_data = object.explicit_body_data;
            if (object.may_parallelize != null)
                message.may_parallelize = Boolean(object.may_parallelize);
            return message;
        };
    
        /**
         * Creates a plain object from a ClientCloudFileUploadBlockDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientCloudFileUploadBlockDetails
         * @static
         * @param {ClientCloudFileUploadBlockDetails} message ClientCloudFileUploadBlockDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientCloudFileUploadBlockDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.request_headers = [];
            if (options.defaults) {
                object.url_host = "";
                object.url_path = "";
                object.use_https = false;
                object.http_method = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.block_offset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.block_offset = options.longs === String ? "0" : 0;
                object.block_length = 0;
                if (options.bytes === String)
                    object.explicit_body_data = "";
                else {
                    object.explicit_body_data = [];
                    if (options.bytes !== Array)
                        object.explicit_body_data = $util.newBuffer(object.explicit_body_data);
                }
                object.may_parallelize = false;
            }
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                object.url_host = message.url_host;
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                object.url_path = message.url_path;
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                object.use_https = message.use_https;
            if (message.http_method != null && message.hasOwnProperty("http_method"))
                object.http_method = message.http_method;
            if (message.request_headers && message.request_headers.length) {
                object.request_headers = [];
                for (var j = 0; j < message.request_headers.length; ++j)
                    object.request_headers[j] = $root.ClientCloudFileUploadBlockDetails.HTTPHeaders.toObject(message.request_headers[j], options);
            }
            if (message.block_offset != null && message.hasOwnProperty("block_offset"))
                if (typeof message.block_offset === "number")
                    object.block_offset = options.longs === String ? String(message.block_offset) : message.block_offset;
                else
                    object.block_offset = options.longs === String ? $util.Long.prototype.toString.call(message.block_offset) : options.longs === Number ? new $util.LongBits(message.block_offset.low >>> 0, message.block_offset.high >>> 0).toNumber(true) : message.block_offset;
            if (message.block_length != null && message.hasOwnProperty("block_length"))
                object.block_length = message.block_length;
            if (message.explicit_body_data != null && message.hasOwnProperty("explicit_body_data"))
                object.explicit_body_data = options.bytes === String ? $util.base64.encode(message.explicit_body_data, 0, message.explicit_body_data.length) : options.bytes === Array ? Array.prototype.slice.call(message.explicit_body_data) : message.explicit_body_data;
            if (message.may_parallelize != null && message.hasOwnProperty("may_parallelize"))
                object.may_parallelize = message.may_parallelize;
            return object;
        };
    
        /**
         * Converts this ClientCloudFileUploadBlockDetails to JSON.
         * @function toJSON
         * @memberof ClientCloudFileUploadBlockDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientCloudFileUploadBlockDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        ClientCloudFileUploadBlockDetails.HTTPHeaders = (function() {
    
            /**
             * Properties of a HTTPHeaders.
             * @memberof ClientCloudFileUploadBlockDetails
             * @interface IHTTPHeaders
             * @property {string|null} [name] HTTPHeaders name
             * @property {string|null} [value] HTTPHeaders value
             */
    
            /**
             * Constructs a new HTTPHeaders.
             * @memberof ClientCloudFileUploadBlockDetails
             * @classdesc Represents a HTTPHeaders.
             * @implements IHTTPHeaders
             * @constructor
             * @param {ClientCloudFileUploadBlockDetails.IHTTPHeaders=} [properties] Properties to set
             */
            function HTTPHeaders(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HTTPHeaders name.
             * @member {string} name
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @instance
             */
            HTTPHeaders.prototype.name = "";
    
            /**
             * HTTPHeaders value.
             * @member {string} value
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @instance
             */
            HTTPHeaders.prototype.value = "";
    
            /**
             * Creates a new HTTPHeaders instance using the specified properties.
             * @function create
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @static
             * @param {ClientCloudFileUploadBlockDetails.IHTTPHeaders=} [properties] Properties to set
             * @returns {ClientCloudFileUploadBlockDetails.HTTPHeaders} HTTPHeaders instance
             */
            HTTPHeaders.create = function create(properties) {
                return new HTTPHeaders(properties);
            };
    
            /**
             * Encodes the specified HTTPHeaders message. Does not implicitly {@link ClientCloudFileUploadBlockDetails.HTTPHeaders.verify|verify} messages.
             * @function encode
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @static
             * @param {ClientCloudFileUploadBlockDetails.IHTTPHeaders} message HTTPHeaders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HTTPHeaders.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified HTTPHeaders message, length delimited. Does not implicitly {@link ClientCloudFileUploadBlockDetails.HTTPHeaders.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @static
             * @param {ClientCloudFileUploadBlockDetails.IHTTPHeaders} message HTTPHeaders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HTTPHeaders.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HTTPHeaders message from the specified reader or buffer.
             * @function decode
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ClientCloudFileUploadBlockDetails.HTTPHeaders} HTTPHeaders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HTTPHeaders.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientCloudFileUploadBlockDetails.HTTPHeaders();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
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
             * Decodes a HTTPHeaders message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ClientCloudFileUploadBlockDetails.HTTPHeaders} HTTPHeaders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HTTPHeaders.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HTTPHeaders message.
             * @function verify
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HTTPHeaders.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
    
            /**
             * Creates a HTTPHeaders message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ClientCloudFileUploadBlockDetails.HTTPHeaders} HTTPHeaders
             */
            HTTPHeaders.fromObject = function fromObject(object) {
                if (object instanceof $root.ClientCloudFileUploadBlockDetails.HTTPHeaders)
                    return object;
                var message = new $root.ClientCloudFileUploadBlockDetails.HTTPHeaders();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a HTTPHeaders message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @static
             * @param {ClientCloudFileUploadBlockDetails.HTTPHeaders} message HTTPHeaders
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HTTPHeaders.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.value = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this HTTPHeaders to JSON.
             * @function toJSON
             * @memberof ClientCloudFileUploadBlockDetails.HTTPHeaders
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HTTPHeaders.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HTTPHeaders;
        })();
    
        return ClientCloudFileUploadBlockDetails;
    })();
    
    $root.CCloud_ClientBeginFileUpload_Response = (function() {
    
        /**
         * Properties of a CCloud_ClientBeginFileUpload_Response.
         * @exports ICCloud_ClientBeginFileUpload_Response
         * @interface ICCloud_ClientBeginFileUpload_Response
         * @property {boolean|null} [encrypt_file] CCloud_ClientBeginFileUpload_Response encrypt_file
         * @property {Array.<IClientCloudFileUploadBlockDetails>|null} [block_requests] CCloud_ClientBeginFileUpload_Response block_requests
         */
    
        /**
         * Constructs a new CCloud_ClientBeginFileUpload_Response.
         * @exports CCloud_ClientBeginFileUpload_Response
         * @classdesc Represents a CCloud_ClientBeginFileUpload_Response.
         * @implements ICCloud_ClientBeginFileUpload_Response
         * @constructor
         * @param {ICCloud_ClientBeginFileUpload_Response=} [properties] Properties to set
         */
        function CCloud_ClientBeginFileUpload_Response(properties) {
            this.block_requests = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ClientBeginFileUpload_Response encrypt_file.
         * @member {boolean} encrypt_file
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @instance
         */
        CCloud_ClientBeginFileUpload_Response.prototype.encrypt_file = false;
    
        /**
         * CCloud_ClientBeginFileUpload_Response block_requests.
         * @member {Array.<IClientCloudFileUploadBlockDetails>} block_requests
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @instance
         */
        CCloud_ClientBeginFileUpload_Response.prototype.block_requests = $util.emptyArray;
    
        /**
         * Creates a new CCloud_ClientBeginFileUpload_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @static
         * @param {ICCloud_ClientBeginFileUpload_Response=} [properties] Properties to set
         * @returns {CCloud_ClientBeginFileUpload_Response} CCloud_ClientBeginFileUpload_Response instance
         */
        CCloud_ClientBeginFileUpload_Response.create = function create(properties) {
            return new CCloud_ClientBeginFileUpload_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientBeginFileUpload_Response message. Does not implicitly {@link CCloud_ClientBeginFileUpload_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @static
         * @param {ICCloud_ClientBeginFileUpload_Response} message CCloud_ClientBeginFileUpload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientBeginFileUpload_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encrypt_file != null && message.hasOwnProperty("encrypt_file"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.encrypt_file);
            if (message.block_requests != null && message.block_requests.length)
                for (var i = 0; i < message.block_requests.length; ++i)
                    $root.ClientCloudFileUploadBlockDetails.encode(message.block_requests[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientBeginFileUpload_Response message, length delimited. Does not implicitly {@link CCloud_ClientBeginFileUpload_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @static
         * @param {ICCloud_ClientBeginFileUpload_Response} message CCloud_ClientBeginFileUpload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientBeginFileUpload_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientBeginFileUpload_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientBeginFileUpload_Response} CCloud_ClientBeginFileUpload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientBeginFileUpload_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientBeginFileUpload_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.encrypt_file = reader.bool();
                    break;
                case 2:
                    if (!(message.block_requests && message.block_requests.length))
                        message.block_requests = [];
                    message.block_requests.push($root.ClientCloudFileUploadBlockDetails.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ClientBeginFileUpload_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientBeginFileUpload_Response} CCloud_ClientBeginFileUpload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientBeginFileUpload_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientBeginFileUpload_Response message.
         * @function verify
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientBeginFileUpload_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encrypt_file != null && message.hasOwnProperty("encrypt_file"))
                if (typeof message.encrypt_file !== "boolean")
                    return "encrypt_file: boolean expected";
            if (message.block_requests != null && message.hasOwnProperty("block_requests")) {
                if (!Array.isArray(message.block_requests))
                    return "block_requests: array expected";
                for (var i = 0; i < message.block_requests.length; ++i) {
                    var error = $root.ClientCloudFileUploadBlockDetails.verify(message.block_requests[i]);
                    if (error)
                        return "block_requests." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CCloud_ClientBeginFileUpload_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientBeginFileUpload_Response} CCloud_ClientBeginFileUpload_Response
         */
        CCloud_ClientBeginFileUpload_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientBeginFileUpload_Response)
                return object;
            var message = new $root.CCloud_ClientBeginFileUpload_Response();
            if (object.encrypt_file != null)
                message.encrypt_file = Boolean(object.encrypt_file);
            if (object.block_requests) {
                if (!Array.isArray(object.block_requests))
                    throw TypeError(".CCloud_ClientBeginFileUpload_Response.block_requests: array expected");
                message.block_requests = [];
                for (var i = 0; i < object.block_requests.length; ++i) {
                    if (typeof object.block_requests[i] !== "object")
                        throw TypeError(".CCloud_ClientBeginFileUpload_Response.block_requests: object expected");
                    message.block_requests[i] = $root.ClientCloudFileUploadBlockDetails.fromObject(object.block_requests[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ClientBeginFileUpload_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @static
         * @param {CCloud_ClientBeginFileUpload_Response} message CCloud_ClientBeginFileUpload_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientBeginFileUpload_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.block_requests = [];
            if (options.defaults)
                object.encrypt_file = false;
            if (message.encrypt_file != null && message.hasOwnProperty("encrypt_file"))
                object.encrypt_file = message.encrypt_file;
            if (message.block_requests && message.block_requests.length) {
                object.block_requests = [];
                for (var j = 0; j < message.block_requests.length; ++j)
                    object.block_requests[j] = $root.ClientCloudFileUploadBlockDetails.toObject(message.block_requests[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CCloud_ClientBeginFileUpload_Response to JSON.
         * @function toJSON
         * @memberof CCloud_ClientBeginFileUpload_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientBeginFileUpload_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ClientBeginFileUpload_Response;
    })();
    
    $root.CCloud_ClientCommitFileUpload_Request = (function() {
    
        /**
         * Properties of a CCloud_ClientCommitFileUpload_Request.
         * @exports ICCloud_ClientCommitFileUpload_Request
         * @interface ICCloud_ClientCommitFileUpload_Request
         * @property {boolean|null} [transfer_succeeded] CCloud_ClientCommitFileUpload_Request transfer_succeeded
         * @property {number|null} [appid] CCloud_ClientCommitFileUpload_Request appid
         * @property {Uint8Array|null} [file_sha] CCloud_ClientCommitFileUpload_Request file_sha
         * @property {string|null} [filename] CCloud_ClientCommitFileUpload_Request filename
         */
    
        /**
         * Constructs a new CCloud_ClientCommitFileUpload_Request.
         * @exports CCloud_ClientCommitFileUpload_Request
         * @classdesc Represents a CCloud_ClientCommitFileUpload_Request.
         * @implements ICCloud_ClientCommitFileUpload_Request
         * @constructor
         * @param {ICCloud_ClientCommitFileUpload_Request=} [properties] Properties to set
         */
        function CCloud_ClientCommitFileUpload_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ClientCommitFileUpload_Request transfer_succeeded.
         * @member {boolean} transfer_succeeded
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @instance
         */
        CCloud_ClientCommitFileUpload_Request.prototype.transfer_succeeded = false;
    
        /**
         * CCloud_ClientCommitFileUpload_Request appid.
         * @member {number} appid
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @instance
         */
        CCloud_ClientCommitFileUpload_Request.prototype.appid = 0;
    
        /**
         * CCloud_ClientCommitFileUpload_Request file_sha.
         * @member {Uint8Array} file_sha
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @instance
         */
        CCloud_ClientCommitFileUpload_Request.prototype.file_sha = $util.newBuffer([]);
    
        /**
         * CCloud_ClientCommitFileUpload_Request filename.
         * @member {string} filename
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @instance
         */
        CCloud_ClientCommitFileUpload_Request.prototype.filename = "";
    
        /**
         * Creates a new CCloud_ClientCommitFileUpload_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @static
         * @param {ICCloud_ClientCommitFileUpload_Request=} [properties] Properties to set
         * @returns {CCloud_ClientCommitFileUpload_Request} CCloud_ClientCommitFileUpload_Request instance
         */
        CCloud_ClientCommitFileUpload_Request.create = function create(properties) {
            return new CCloud_ClientCommitFileUpload_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientCommitFileUpload_Request message. Does not implicitly {@link CCloud_ClientCommitFileUpload_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @static
         * @param {ICCloud_ClientCommitFileUpload_Request} message CCloud_ClientCommitFileUpload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientCommitFileUpload_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transfer_succeeded != null && message.hasOwnProperty("transfer_succeeded"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.transfer_succeeded);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.file_sha);
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.filename);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientCommitFileUpload_Request message, length delimited. Does not implicitly {@link CCloud_ClientCommitFileUpload_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @static
         * @param {ICCloud_ClientCommitFileUpload_Request} message CCloud_ClientCommitFileUpload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientCommitFileUpload_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientCommitFileUpload_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientCommitFileUpload_Request} CCloud_ClientCommitFileUpload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientCommitFileUpload_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientCommitFileUpload_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.transfer_succeeded = reader.bool();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.file_sha = reader.bytes();
                    break;
                case 4:
                    message.filename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ClientCommitFileUpload_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientCommitFileUpload_Request} CCloud_ClientCommitFileUpload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientCommitFileUpload_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientCommitFileUpload_Request message.
         * @function verify
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientCommitFileUpload_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transfer_succeeded != null && message.hasOwnProperty("transfer_succeeded"))
                if (typeof message.transfer_succeeded !== "boolean")
                    return "transfer_succeeded: boolean expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                if (!(message.file_sha && typeof message.file_sha.length === "number" || $util.isString(message.file_sha)))
                    return "file_sha: buffer expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ClientCommitFileUpload_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientCommitFileUpload_Request} CCloud_ClientCommitFileUpload_Request
         */
        CCloud_ClientCommitFileUpload_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientCommitFileUpload_Request)
                return object;
            var message = new $root.CCloud_ClientCommitFileUpload_Request();
            if (object.transfer_succeeded != null)
                message.transfer_succeeded = Boolean(object.transfer_succeeded);
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.file_sha != null)
                if (typeof object.file_sha === "string")
                    $util.base64.decode(object.file_sha, message.file_sha = $util.newBuffer($util.base64.length(object.file_sha)), 0);
                else if (object.file_sha.length)
                    message.file_sha = object.file_sha;
            if (object.filename != null)
                message.filename = String(object.filename);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ClientCommitFileUpload_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @static
         * @param {CCloud_ClientCommitFileUpload_Request} message CCloud_ClientCommitFileUpload_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientCommitFileUpload_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.transfer_succeeded = false;
                object.appid = 0;
                if (options.bytes === String)
                    object.file_sha = "";
                else {
                    object.file_sha = [];
                    if (options.bytes !== Array)
                        object.file_sha = $util.newBuffer(object.file_sha);
                }
                object.filename = "";
            }
            if (message.transfer_succeeded != null && message.hasOwnProperty("transfer_succeeded"))
                object.transfer_succeeded = message.transfer_succeeded;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.file_sha != null && message.hasOwnProperty("file_sha"))
                object.file_sha = options.bytes === String ? $util.base64.encode(message.file_sha, 0, message.file_sha.length) : options.bytes === Array ? Array.prototype.slice.call(message.file_sha) : message.file_sha;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            return object;
        };
    
        /**
         * Converts this CCloud_ClientCommitFileUpload_Request to JSON.
         * @function toJSON
         * @memberof CCloud_ClientCommitFileUpload_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientCommitFileUpload_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ClientCommitFileUpload_Request;
    })();
    
    $root.CCloud_ClientCommitFileUpload_Response = (function() {
    
        /**
         * Properties of a CCloud_ClientCommitFileUpload_Response.
         * @exports ICCloud_ClientCommitFileUpload_Response
         * @interface ICCloud_ClientCommitFileUpload_Response
         * @property {boolean|null} [file_committed] CCloud_ClientCommitFileUpload_Response file_committed
         */
    
        /**
         * Constructs a new CCloud_ClientCommitFileUpload_Response.
         * @exports CCloud_ClientCommitFileUpload_Response
         * @classdesc Represents a CCloud_ClientCommitFileUpload_Response.
         * @implements ICCloud_ClientCommitFileUpload_Response
         * @constructor
         * @param {ICCloud_ClientCommitFileUpload_Response=} [properties] Properties to set
         */
        function CCloud_ClientCommitFileUpload_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ClientCommitFileUpload_Response file_committed.
         * @member {boolean} file_committed
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @instance
         */
        CCloud_ClientCommitFileUpload_Response.prototype.file_committed = false;
    
        /**
         * Creates a new CCloud_ClientCommitFileUpload_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @static
         * @param {ICCloud_ClientCommitFileUpload_Response=} [properties] Properties to set
         * @returns {CCloud_ClientCommitFileUpload_Response} CCloud_ClientCommitFileUpload_Response instance
         */
        CCloud_ClientCommitFileUpload_Response.create = function create(properties) {
            return new CCloud_ClientCommitFileUpload_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientCommitFileUpload_Response message. Does not implicitly {@link CCloud_ClientCommitFileUpload_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @static
         * @param {ICCloud_ClientCommitFileUpload_Response} message CCloud_ClientCommitFileUpload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientCommitFileUpload_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.file_committed != null && message.hasOwnProperty("file_committed"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.file_committed);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientCommitFileUpload_Response message, length delimited. Does not implicitly {@link CCloud_ClientCommitFileUpload_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @static
         * @param {ICCloud_ClientCommitFileUpload_Response} message CCloud_ClientCommitFileUpload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientCommitFileUpload_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientCommitFileUpload_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientCommitFileUpload_Response} CCloud_ClientCommitFileUpload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientCommitFileUpload_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientCommitFileUpload_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.file_committed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ClientCommitFileUpload_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientCommitFileUpload_Response} CCloud_ClientCommitFileUpload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientCommitFileUpload_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientCommitFileUpload_Response message.
         * @function verify
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientCommitFileUpload_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.file_committed != null && message.hasOwnProperty("file_committed"))
                if (typeof message.file_committed !== "boolean")
                    return "file_committed: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ClientCommitFileUpload_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientCommitFileUpload_Response} CCloud_ClientCommitFileUpload_Response
         */
        CCloud_ClientCommitFileUpload_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientCommitFileUpload_Response)
                return object;
            var message = new $root.CCloud_ClientCommitFileUpload_Response();
            if (object.file_committed != null)
                message.file_committed = Boolean(object.file_committed);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ClientCommitFileUpload_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @static
         * @param {CCloud_ClientCommitFileUpload_Response} message CCloud_ClientCommitFileUpload_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientCommitFileUpload_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.file_committed = false;
            if (message.file_committed != null && message.hasOwnProperty("file_committed"))
                object.file_committed = message.file_committed;
            return object;
        };
    
        /**
         * Converts this CCloud_ClientCommitFileUpload_Response to JSON.
         * @function toJSON
         * @memberof CCloud_ClientCommitFileUpload_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientCommitFileUpload_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ClientCommitFileUpload_Response;
    })();
    
    $root.CCloud_ClientFileDownload_Request = (function() {
    
        /**
         * Properties of a CCloud_ClientFileDownload_Request.
         * @exports ICCloud_ClientFileDownload_Request
         * @interface ICCloud_ClientFileDownload_Request
         * @property {number|null} [appid] CCloud_ClientFileDownload_Request appid
         * @property {string|null} [filename] CCloud_ClientFileDownload_Request filename
         */
    
        /**
         * Constructs a new CCloud_ClientFileDownload_Request.
         * @exports CCloud_ClientFileDownload_Request
         * @classdesc Represents a CCloud_ClientFileDownload_Request.
         * @implements ICCloud_ClientFileDownload_Request
         * @constructor
         * @param {ICCloud_ClientFileDownload_Request=} [properties] Properties to set
         */
        function CCloud_ClientFileDownload_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ClientFileDownload_Request appid.
         * @member {number} appid
         * @memberof CCloud_ClientFileDownload_Request
         * @instance
         */
        CCloud_ClientFileDownload_Request.prototype.appid = 0;
    
        /**
         * CCloud_ClientFileDownload_Request filename.
         * @member {string} filename
         * @memberof CCloud_ClientFileDownload_Request
         * @instance
         */
        CCloud_ClientFileDownload_Request.prototype.filename = "";
    
        /**
         * Creates a new CCloud_ClientFileDownload_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientFileDownload_Request
         * @static
         * @param {ICCloud_ClientFileDownload_Request=} [properties] Properties to set
         * @returns {CCloud_ClientFileDownload_Request} CCloud_ClientFileDownload_Request instance
         */
        CCloud_ClientFileDownload_Request.create = function create(properties) {
            return new CCloud_ClientFileDownload_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientFileDownload_Request message. Does not implicitly {@link CCloud_ClientFileDownload_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientFileDownload_Request
         * @static
         * @param {ICCloud_ClientFileDownload_Request} message CCloud_ClientFileDownload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientFileDownload_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.filename);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientFileDownload_Request message, length delimited. Does not implicitly {@link CCloud_ClientFileDownload_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientFileDownload_Request
         * @static
         * @param {ICCloud_ClientFileDownload_Request} message CCloud_ClientFileDownload_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientFileDownload_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientFileDownload_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientFileDownload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientFileDownload_Request} CCloud_ClientFileDownload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientFileDownload_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientFileDownload_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.filename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ClientFileDownload_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientFileDownload_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientFileDownload_Request} CCloud_ClientFileDownload_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientFileDownload_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientFileDownload_Request message.
         * @function verify
         * @memberof CCloud_ClientFileDownload_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientFileDownload_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ClientFileDownload_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientFileDownload_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientFileDownload_Request} CCloud_ClientFileDownload_Request
         */
        CCloud_ClientFileDownload_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientFileDownload_Request)
                return object;
            var message = new $root.CCloud_ClientFileDownload_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.filename != null)
                message.filename = String(object.filename);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ClientFileDownload_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientFileDownload_Request
         * @static
         * @param {CCloud_ClientFileDownload_Request} message CCloud_ClientFileDownload_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientFileDownload_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.filename = "";
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            return object;
        };
    
        /**
         * Converts this CCloud_ClientFileDownload_Request to JSON.
         * @function toJSON
         * @memberof CCloud_ClientFileDownload_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientFileDownload_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ClientFileDownload_Request;
    })();
    
    $root.CCloud_ClientFileDownload_Response = (function() {
    
        /**
         * Properties of a CCloud_ClientFileDownload_Response.
         * @exports ICCloud_ClientFileDownload_Response
         * @interface ICCloud_ClientFileDownload_Response
         * @property {number|null} [appid] CCloud_ClientFileDownload_Response appid
         * @property {number|null} [file_size] CCloud_ClientFileDownload_Response file_size
         * @property {number|null} [raw_file_size] CCloud_ClientFileDownload_Response raw_file_size
         * @property {Uint8Array|null} [sha_file] CCloud_ClientFileDownload_Response sha_file
         * @property {number|Long|null} [time_stamp] CCloud_ClientFileDownload_Response time_stamp
         * @property {boolean|null} [is_explicit_delete] CCloud_ClientFileDownload_Response is_explicit_delete
         * @property {string|null} [url_host] CCloud_ClientFileDownload_Response url_host
         * @property {string|null} [url_path] CCloud_ClientFileDownload_Response url_path
         * @property {boolean|null} [use_https] CCloud_ClientFileDownload_Response use_https
         * @property {Array.<CCloud_ClientFileDownload_Response.IHTTPHeaders>|null} [request_headers] CCloud_ClientFileDownload_Response request_headers
         * @property {boolean|null} [encrypted] CCloud_ClientFileDownload_Response encrypted
         */
    
        /**
         * Constructs a new CCloud_ClientFileDownload_Response.
         * @exports CCloud_ClientFileDownload_Response
         * @classdesc Represents a CCloud_ClientFileDownload_Response.
         * @implements ICCloud_ClientFileDownload_Response
         * @constructor
         * @param {ICCloud_ClientFileDownload_Response=} [properties] Properties to set
         */
        function CCloud_ClientFileDownload_Response(properties) {
            this.request_headers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ClientFileDownload_Response appid.
         * @member {number} appid
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.appid = 0;
    
        /**
         * CCloud_ClientFileDownload_Response file_size.
         * @member {number} file_size
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.file_size = 0;
    
        /**
         * CCloud_ClientFileDownload_Response raw_file_size.
         * @member {number} raw_file_size
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.raw_file_size = 0;
    
        /**
         * CCloud_ClientFileDownload_Response sha_file.
         * @member {Uint8Array} sha_file
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.sha_file = $util.newBuffer([]);
    
        /**
         * CCloud_ClientFileDownload_Response time_stamp.
         * @member {number|Long} time_stamp
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.time_stamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CCloud_ClientFileDownload_Response is_explicit_delete.
         * @member {boolean} is_explicit_delete
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.is_explicit_delete = false;
    
        /**
         * CCloud_ClientFileDownload_Response url_host.
         * @member {string} url_host
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.url_host = "";
    
        /**
         * CCloud_ClientFileDownload_Response url_path.
         * @member {string} url_path
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.url_path = "";
    
        /**
         * CCloud_ClientFileDownload_Response use_https.
         * @member {boolean} use_https
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.use_https = false;
    
        /**
         * CCloud_ClientFileDownload_Response request_headers.
         * @member {Array.<CCloud_ClientFileDownload_Response.IHTTPHeaders>} request_headers
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.request_headers = $util.emptyArray;
    
        /**
         * CCloud_ClientFileDownload_Response encrypted.
         * @member {boolean} encrypted
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         */
        CCloud_ClientFileDownload_Response.prototype.encrypted = false;
    
        /**
         * Creates a new CCloud_ClientFileDownload_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientFileDownload_Response
         * @static
         * @param {ICCloud_ClientFileDownload_Response=} [properties] Properties to set
         * @returns {CCloud_ClientFileDownload_Response} CCloud_ClientFileDownload_Response instance
         */
        CCloud_ClientFileDownload_Response.create = function create(properties) {
            return new CCloud_ClientFileDownload_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientFileDownload_Response message. Does not implicitly {@link CCloud_ClientFileDownload_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientFileDownload_Response
         * @static
         * @param {ICCloud_ClientFileDownload_Response} message CCloud_ClientFileDownload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientFileDownload_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.file_size);
            if (message.raw_file_size != null && message.hasOwnProperty("raw_file_size"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.raw_file_size);
            if (message.sha_file != null && message.hasOwnProperty("sha_file"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.sha_file);
            if (message.time_stamp != null && message.hasOwnProperty("time_stamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.time_stamp);
            if (message.is_explicit_delete != null && message.hasOwnProperty("is_explicit_delete"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_explicit_delete);
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.url_host);
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.url_path);
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.use_https);
            if (message.request_headers != null && message.request_headers.length)
                for (var i = 0; i < message.request_headers.length; ++i)
                    $root.CCloud_ClientFileDownload_Response.HTTPHeaders.encode(message.request_headers[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.encrypted != null && message.hasOwnProperty("encrypted"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.encrypted);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientFileDownload_Response message, length delimited. Does not implicitly {@link CCloud_ClientFileDownload_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientFileDownload_Response
         * @static
         * @param {ICCloud_ClientFileDownload_Response} message CCloud_ClientFileDownload_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientFileDownload_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientFileDownload_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientFileDownload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientFileDownload_Response} CCloud_ClientFileDownload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientFileDownload_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientFileDownload_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.file_size = reader.uint32();
                    break;
                case 3:
                    message.raw_file_size = reader.uint32();
                    break;
                case 4:
                    message.sha_file = reader.bytes();
                    break;
                case 5:
                    message.time_stamp = reader.uint64();
                    break;
                case 6:
                    message.is_explicit_delete = reader.bool();
                    break;
                case 7:
                    message.url_host = reader.string();
                    break;
                case 8:
                    message.url_path = reader.string();
                    break;
                case 9:
                    message.use_https = reader.bool();
                    break;
                case 10:
                    if (!(message.request_headers && message.request_headers.length))
                        message.request_headers = [];
                    message.request_headers.push($root.CCloud_ClientFileDownload_Response.HTTPHeaders.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.encrypted = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ClientFileDownload_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientFileDownload_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientFileDownload_Response} CCloud_ClientFileDownload_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientFileDownload_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientFileDownload_Response message.
         * @function verify
         * @memberof CCloud_ClientFileDownload_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientFileDownload_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                if (!$util.isInteger(message.file_size))
                    return "file_size: integer expected";
            if (message.raw_file_size != null && message.hasOwnProperty("raw_file_size"))
                if (!$util.isInteger(message.raw_file_size))
                    return "raw_file_size: integer expected";
            if (message.sha_file != null && message.hasOwnProperty("sha_file"))
                if (!(message.sha_file && typeof message.sha_file.length === "number" || $util.isString(message.sha_file)))
                    return "sha_file: buffer expected";
            if (message.time_stamp != null && message.hasOwnProperty("time_stamp"))
                if (!$util.isInteger(message.time_stamp) && !(message.time_stamp && $util.isInteger(message.time_stamp.low) && $util.isInteger(message.time_stamp.high)))
                    return "time_stamp: integer|Long expected";
            if (message.is_explicit_delete != null && message.hasOwnProperty("is_explicit_delete"))
                if (typeof message.is_explicit_delete !== "boolean")
                    return "is_explicit_delete: boolean expected";
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                if (!$util.isString(message.url_host))
                    return "url_host: string expected";
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                if (!$util.isString(message.url_path))
                    return "url_path: string expected";
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                if (typeof message.use_https !== "boolean")
                    return "use_https: boolean expected";
            if (message.request_headers != null && message.hasOwnProperty("request_headers")) {
                if (!Array.isArray(message.request_headers))
                    return "request_headers: array expected";
                for (var i = 0; i < message.request_headers.length; ++i) {
                    var error = $root.CCloud_ClientFileDownload_Response.HTTPHeaders.verify(message.request_headers[i]);
                    if (error)
                        return "request_headers." + error;
                }
            }
            if (message.encrypted != null && message.hasOwnProperty("encrypted"))
                if (typeof message.encrypted !== "boolean")
                    return "encrypted: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ClientFileDownload_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientFileDownload_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientFileDownload_Response} CCloud_ClientFileDownload_Response
         */
        CCloud_ClientFileDownload_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientFileDownload_Response)
                return object;
            var message = new $root.CCloud_ClientFileDownload_Response();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.file_size != null)
                message.file_size = object.file_size >>> 0;
            if (object.raw_file_size != null)
                message.raw_file_size = object.raw_file_size >>> 0;
            if (object.sha_file != null)
                if (typeof object.sha_file === "string")
                    $util.base64.decode(object.sha_file, message.sha_file = $util.newBuffer($util.base64.length(object.sha_file)), 0);
                else if (object.sha_file.length)
                    message.sha_file = object.sha_file;
            if (object.time_stamp != null)
                if ($util.Long)
                    (message.time_stamp = $util.Long.fromValue(object.time_stamp)).unsigned = true;
                else if (typeof object.time_stamp === "string")
                    message.time_stamp = parseInt(object.time_stamp, 10);
                else if (typeof object.time_stamp === "number")
                    message.time_stamp = object.time_stamp;
                else if (typeof object.time_stamp === "object")
                    message.time_stamp = new $util.LongBits(object.time_stamp.low >>> 0, object.time_stamp.high >>> 0).toNumber(true);
            if (object.is_explicit_delete != null)
                message.is_explicit_delete = Boolean(object.is_explicit_delete);
            if (object.url_host != null)
                message.url_host = String(object.url_host);
            if (object.url_path != null)
                message.url_path = String(object.url_path);
            if (object.use_https != null)
                message.use_https = Boolean(object.use_https);
            if (object.request_headers) {
                if (!Array.isArray(object.request_headers))
                    throw TypeError(".CCloud_ClientFileDownload_Response.request_headers: array expected");
                message.request_headers = [];
                for (var i = 0; i < object.request_headers.length; ++i) {
                    if (typeof object.request_headers[i] !== "object")
                        throw TypeError(".CCloud_ClientFileDownload_Response.request_headers: object expected");
                    message.request_headers[i] = $root.CCloud_ClientFileDownload_Response.HTTPHeaders.fromObject(object.request_headers[i]);
                }
            }
            if (object.encrypted != null)
                message.encrypted = Boolean(object.encrypted);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ClientFileDownload_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientFileDownload_Response
         * @static
         * @param {CCloud_ClientFileDownload_Response} message CCloud_ClientFileDownload_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientFileDownload_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.request_headers = [];
            if (options.defaults) {
                object.appid = 0;
                object.file_size = 0;
                object.raw_file_size = 0;
                if (options.bytes === String)
                    object.sha_file = "";
                else {
                    object.sha_file = [];
                    if (options.bytes !== Array)
                        object.sha_file = $util.newBuffer(object.sha_file);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.time_stamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time_stamp = options.longs === String ? "0" : 0;
                object.is_explicit_delete = false;
                object.url_host = "";
                object.url_path = "";
                object.use_https = false;
                object.encrypted = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.file_size != null && message.hasOwnProperty("file_size"))
                object.file_size = message.file_size;
            if (message.raw_file_size != null && message.hasOwnProperty("raw_file_size"))
                object.raw_file_size = message.raw_file_size;
            if (message.sha_file != null && message.hasOwnProperty("sha_file"))
                object.sha_file = options.bytes === String ? $util.base64.encode(message.sha_file, 0, message.sha_file.length) : options.bytes === Array ? Array.prototype.slice.call(message.sha_file) : message.sha_file;
            if (message.time_stamp != null && message.hasOwnProperty("time_stamp"))
                if (typeof message.time_stamp === "number")
                    object.time_stamp = options.longs === String ? String(message.time_stamp) : message.time_stamp;
                else
                    object.time_stamp = options.longs === String ? $util.Long.prototype.toString.call(message.time_stamp) : options.longs === Number ? new $util.LongBits(message.time_stamp.low >>> 0, message.time_stamp.high >>> 0).toNumber(true) : message.time_stamp;
            if (message.is_explicit_delete != null && message.hasOwnProperty("is_explicit_delete"))
                object.is_explicit_delete = message.is_explicit_delete;
            if (message.url_host != null && message.hasOwnProperty("url_host"))
                object.url_host = message.url_host;
            if (message.url_path != null && message.hasOwnProperty("url_path"))
                object.url_path = message.url_path;
            if (message.use_https != null && message.hasOwnProperty("use_https"))
                object.use_https = message.use_https;
            if (message.request_headers && message.request_headers.length) {
                object.request_headers = [];
                for (var j = 0; j < message.request_headers.length; ++j)
                    object.request_headers[j] = $root.CCloud_ClientFileDownload_Response.HTTPHeaders.toObject(message.request_headers[j], options);
            }
            if (message.encrypted != null && message.hasOwnProperty("encrypted"))
                object.encrypted = message.encrypted;
            return object;
        };
    
        /**
         * Converts this CCloud_ClientFileDownload_Response to JSON.
         * @function toJSON
         * @memberof CCloud_ClientFileDownload_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientFileDownload_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CCloud_ClientFileDownload_Response.HTTPHeaders = (function() {
    
            /**
             * Properties of a HTTPHeaders.
             * @memberof CCloud_ClientFileDownload_Response
             * @interface IHTTPHeaders
             * @property {string|null} [name] HTTPHeaders name
             * @property {string|null} [value] HTTPHeaders value
             */
    
            /**
             * Constructs a new HTTPHeaders.
             * @memberof CCloud_ClientFileDownload_Response
             * @classdesc Represents a HTTPHeaders.
             * @implements IHTTPHeaders
             * @constructor
             * @param {CCloud_ClientFileDownload_Response.IHTTPHeaders=} [properties] Properties to set
             */
            function HTTPHeaders(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HTTPHeaders name.
             * @member {string} name
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @instance
             */
            HTTPHeaders.prototype.name = "";
    
            /**
             * HTTPHeaders value.
             * @member {string} value
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @instance
             */
            HTTPHeaders.prototype.value = "";
    
            /**
             * Creates a new HTTPHeaders instance using the specified properties.
             * @function create
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @static
             * @param {CCloud_ClientFileDownload_Response.IHTTPHeaders=} [properties] Properties to set
             * @returns {CCloud_ClientFileDownload_Response.HTTPHeaders} HTTPHeaders instance
             */
            HTTPHeaders.create = function create(properties) {
                return new HTTPHeaders(properties);
            };
    
            /**
             * Encodes the specified HTTPHeaders message. Does not implicitly {@link CCloud_ClientFileDownload_Response.HTTPHeaders.verify|verify} messages.
             * @function encode
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @static
             * @param {CCloud_ClientFileDownload_Response.IHTTPHeaders} message HTTPHeaders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HTTPHeaders.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified HTTPHeaders message, length delimited. Does not implicitly {@link CCloud_ClientFileDownload_Response.HTTPHeaders.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @static
             * @param {CCloud_ClientFileDownload_Response.IHTTPHeaders} message HTTPHeaders message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HTTPHeaders.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HTTPHeaders message from the specified reader or buffer.
             * @function decode
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CCloud_ClientFileDownload_Response.HTTPHeaders} HTTPHeaders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HTTPHeaders.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientFileDownload_Response.HTTPHeaders();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
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
             * Decodes a HTTPHeaders message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CCloud_ClientFileDownload_Response.HTTPHeaders} HTTPHeaders
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HTTPHeaders.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HTTPHeaders message.
             * @function verify
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HTTPHeaders.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };
    
            /**
             * Creates a HTTPHeaders message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CCloud_ClientFileDownload_Response.HTTPHeaders} HTTPHeaders
             */
            HTTPHeaders.fromObject = function fromObject(object) {
                if (object instanceof $root.CCloud_ClientFileDownload_Response.HTTPHeaders)
                    return object;
                var message = new $root.CCloud_ClientFileDownload_Response.HTTPHeaders();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a HTTPHeaders message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @static
             * @param {CCloud_ClientFileDownload_Response.HTTPHeaders} message HTTPHeaders
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HTTPHeaders.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.value = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this HTTPHeaders to JSON.
             * @function toJSON
             * @memberof CCloud_ClientFileDownload_Response.HTTPHeaders
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HTTPHeaders.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HTTPHeaders;
        })();
    
        return CCloud_ClientFileDownload_Response;
    })();
    
    $root.CCloud_ClientDeleteFile_Request = (function() {
    
        /**
         * Properties of a CCloud_ClientDeleteFile_Request.
         * @exports ICCloud_ClientDeleteFile_Request
         * @interface ICCloud_ClientDeleteFile_Request
         * @property {number|null} [appid] CCloud_ClientDeleteFile_Request appid
         * @property {string|null} [filename] CCloud_ClientDeleteFile_Request filename
         * @property {boolean|null} [is_explicit_delete] CCloud_ClientDeleteFile_Request is_explicit_delete
         */
    
        /**
         * Constructs a new CCloud_ClientDeleteFile_Request.
         * @exports CCloud_ClientDeleteFile_Request
         * @classdesc Represents a CCloud_ClientDeleteFile_Request.
         * @implements ICCloud_ClientDeleteFile_Request
         * @constructor
         * @param {ICCloud_ClientDeleteFile_Request=} [properties] Properties to set
         */
        function CCloud_ClientDeleteFile_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ClientDeleteFile_Request appid.
         * @member {number} appid
         * @memberof CCloud_ClientDeleteFile_Request
         * @instance
         */
        CCloud_ClientDeleteFile_Request.prototype.appid = 0;
    
        /**
         * CCloud_ClientDeleteFile_Request filename.
         * @member {string} filename
         * @memberof CCloud_ClientDeleteFile_Request
         * @instance
         */
        CCloud_ClientDeleteFile_Request.prototype.filename = "";
    
        /**
         * CCloud_ClientDeleteFile_Request is_explicit_delete.
         * @member {boolean} is_explicit_delete
         * @memberof CCloud_ClientDeleteFile_Request
         * @instance
         */
        CCloud_ClientDeleteFile_Request.prototype.is_explicit_delete = false;
    
        /**
         * Creates a new CCloud_ClientDeleteFile_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientDeleteFile_Request
         * @static
         * @param {ICCloud_ClientDeleteFile_Request=} [properties] Properties to set
         * @returns {CCloud_ClientDeleteFile_Request} CCloud_ClientDeleteFile_Request instance
         */
        CCloud_ClientDeleteFile_Request.create = function create(properties) {
            return new CCloud_ClientDeleteFile_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientDeleteFile_Request message. Does not implicitly {@link CCloud_ClientDeleteFile_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientDeleteFile_Request
         * @static
         * @param {ICCloud_ClientDeleteFile_Request} message CCloud_ClientDeleteFile_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientDeleteFile_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.filename);
            if (message.is_explicit_delete != null && message.hasOwnProperty("is_explicit_delete"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_explicit_delete);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientDeleteFile_Request message, length delimited. Does not implicitly {@link CCloud_ClientDeleteFile_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientDeleteFile_Request
         * @static
         * @param {ICCloud_ClientDeleteFile_Request} message CCloud_ClientDeleteFile_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientDeleteFile_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientDeleteFile_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientDeleteFile_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientDeleteFile_Request} CCloud_ClientDeleteFile_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientDeleteFile_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientDeleteFile_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.filename = reader.string();
                    break;
                case 3:
                    message.is_explicit_delete = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ClientDeleteFile_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientDeleteFile_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientDeleteFile_Request} CCloud_ClientDeleteFile_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientDeleteFile_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientDeleteFile_Request message.
         * @function verify
         * @memberof CCloud_ClientDeleteFile_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientDeleteFile_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.is_explicit_delete != null && message.hasOwnProperty("is_explicit_delete"))
                if (typeof message.is_explicit_delete !== "boolean")
                    return "is_explicit_delete: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ClientDeleteFile_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientDeleteFile_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientDeleteFile_Request} CCloud_ClientDeleteFile_Request
         */
        CCloud_ClientDeleteFile_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientDeleteFile_Request)
                return object;
            var message = new $root.CCloud_ClientDeleteFile_Request();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.is_explicit_delete != null)
                message.is_explicit_delete = Boolean(object.is_explicit_delete);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ClientDeleteFile_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientDeleteFile_Request
         * @static
         * @param {CCloud_ClientDeleteFile_Request} message CCloud_ClientDeleteFile_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientDeleteFile_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.filename = "";
                object.is_explicit_delete = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.is_explicit_delete != null && message.hasOwnProperty("is_explicit_delete"))
                object.is_explicit_delete = message.is_explicit_delete;
            return object;
        };
    
        /**
         * Converts this CCloud_ClientDeleteFile_Request to JSON.
         * @function toJSON
         * @memberof CCloud_ClientDeleteFile_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientDeleteFile_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ClientDeleteFile_Request;
    })();
    
    $root.CCloud_ClientDeleteFile_Response = (function() {
    
        /**
         * Properties of a CCloud_ClientDeleteFile_Response.
         * @exports ICCloud_ClientDeleteFile_Response
         * @interface ICCloud_ClientDeleteFile_Response
         */
    
        /**
         * Constructs a new CCloud_ClientDeleteFile_Response.
         * @exports CCloud_ClientDeleteFile_Response
         * @classdesc Represents a CCloud_ClientDeleteFile_Response.
         * @implements ICCloud_ClientDeleteFile_Response
         * @constructor
         * @param {ICCloud_ClientDeleteFile_Response=} [properties] Properties to set
         */
        function CCloud_ClientDeleteFile_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CCloud_ClientDeleteFile_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientDeleteFile_Response
         * @static
         * @param {ICCloud_ClientDeleteFile_Response=} [properties] Properties to set
         * @returns {CCloud_ClientDeleteFile_Response} CCloud_ClientDeleteFile_Response instance
         */
        CCloud_ClientDeleteFile_Response.create = function create(properties) {
            return new CCloud_ClientDeleteFile_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientDeleteFile_Response message. Does not implicitly {@link CCloud_ClientDeleteFile_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientDeleteFile_Response
         * @static
         * @param {ICCloud_ClientDeleteFile_Response} message CCloud_ClientDeleteFile_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientDeleteFile_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientDeleteFile_Response message, length delimited. Does not implicitly {@link CCloud_ClientDeleteFile_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientDeleteFile_Response
         * @static
         * @param {ICCloud_ClientDeleteFile_Response} message CCloud_ClientDeleteFile_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientDeleteFile_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientDeleteFile_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientDeleteFile_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientDeleteFile_Response} CCloud_ClientDeleteFile_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientDeleteFile_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientDeleteFile_Response();
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
         * Decodes a CCloud_ClientDeleteFile_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientDeleteFile_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientDeleteFile_Response} CCloud_ClientDeleteFile_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientDeleteFile_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientDeleteFile_Response message.
         * @function verify
         * @memberof CCloud_ClientDeleteFile_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientDeleteFile_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ClientDeleteFile_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientDeleteFile_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientDeleteFile_Response} CCloud_ClientDeleteFile_Response
         */
        CCloud_ClientDeleteFile_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientDeleteFile_Response)
                return object;
            return new $root.CCloud_ClientDeleteFile_Response();
        };
    
        /**
         * Creates a plain object from a CCloud_ClientDeleteFile_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientDeleteFile_Response
         * @static
         * @param {CCloud_ClientDeleteFile_Response} message CCloud_ClientDeleteFile_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientDeleteFile_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CCloud_ClientDeleteFile_Response to JSON.
         * @function toJSON
         * @memberof CCloud_ClientDeleteFile_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientDeleteFile_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ClientDeleteFile_Response;
    })();
    
    $root.CCloud_ClientConflictResolution_Notification = (function() {
    
        /**
         * Properties of a CCloud_ClientConflictResolution_Notification.
         * @exports ICCloud_ClientConflictResolution_Notification
         * @interface ICCloud_ClientConflictResolution_Notification
         * @property {number|null} [appid] CCloud_ClientConflictResolution_Notification appid
         * @property {boolean|null} [chose_local_files] CCloud_ClientConflictResolution_Notification chose_local_files
         */
    
        /**
         * Constructs a new CCloud_ClientConflictResolution_Notification.
         * @exports CCloud_ClientConflictResolution_Notification
         * @classdesc Represents a CCloud_ClientConflictResolution_Notification.
         * @implements ICCloud_ClientConflictResolution_Notification
         * @constructor
         * @param {ICCloud_ClientConflictResolution_Notification=} [properties] Properties to set
         */
        function CCloud_ClientConflictResolution_Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_ClientConflictResolution_Notification appid.
         * @member {number} appid
         * @memberof CCloud_ClientConflictResolution_Notification
         * @instance
         */
        CCloud_ClientConflictResolution_Notification.prototype.appid = 0;
    
        /**
         * CCloud_ClientConflictResolution_Notification chose_local_files.
         * @member {boolean} chose_local_files
         * @memberof CCloud_ClientConflictResolution_Notification
         * @instance
         */
        CCloud_ClientConflictResolution_Notification.prototype.chose_local_files = false;
    
        /**
         * Creates a new CCloud_ClientConflictResolution_Notification instance using the specified properties.
         * @function create
         * @memberof CCloud_ClientConflictResolution_Notification
         * @static
         * @param {ICCloud_ClientConflictResolution_Notification=} [properties] Properties to set
         * @returns {CCloud_ClientConflictResolution_Notification} CCloud_ClientConflictResolution_Notification instance
         */
        CCloud_ClientConflictResolution_Notification.create = function create(properties) {
            return new CCloud_ClientConflictResolution_Notification(properties);
        };
    
        /**
         * Encodes the specified CCloud_ClientConflictResolution_Notification message. Does not implicitly {@link CCloud_ClientConflictResolution_Notification.verify|verify} messages.
         * @function encode
         * @memberof CCloud_ClientConflictResolution_Notification
         * @static
         * @param {ICCloud_ClientConflictResolution_Notification} message CCloud_ClientConflictResolution_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientConflictResolution_Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.chose_local_files != null && message.hasOwnProperty("chose_local_files"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.chose_local_files);
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_ClientConflictResolution_Notification message, length delimited. Does not implicitly {@link CCloud_ClientConflictResolution_Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_ClientConflictResolution_Notification
         * @static
         * @param {ICCloud_ClientConflictResolution_Notification} message CCloud_ClientConflictResolution_Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_ClientConflictResolution_Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_ClientConflictResolution_Notification message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_ClientConflictResolution_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_ClientConflictResolution_Notification} CCloud_ClientConflictResolution_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientConflictResolution_Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_ClientConflictResolution_Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.chose_local_files = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_ClientConflictResolution_Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_ClientConflictResolution_Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_ClientConflictResolution_Notification} CCloud_ClientConflictResolution_Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_ClientConflictResolution_Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_ClientConflictResolution_Notification message.
         * @function verify
         * @memberof CCloud_ClientConflictResolution_Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_ClientConflictResolution_Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.chose_local_files != null && message.hasOwnProperty("chose_local_files"))
                if (typeof message.chose_local_files !== "boolean")
                    return "chose_local_files: boolean expected";
            return null;
        };
    
        /**
         * Creates a CCloud_ClientConflictResolution_Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_ClientConflictResolution_Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_ClientConflictResolution_Notification} CCloud_ClientConflictResolution_Notification
         */
        CCloud_ClientConflictResolution_Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_ClientConflictResolution_Notification)
                return object;
            var message = new $root.CCloud_ClientConflictResolution_Notification();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.chose_local_files != null)
                message.chose_local_files = Boolean(object.chose_local_files);
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_ClientConflictResolution_Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_ClientConflictResolution_Notification
         * @static
         * @param {CCloud_ClientConflictResolution_Notification} message CCloud_ClientConflictResolution_Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_ClientConflictResolution_Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.chose_local_files = false;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.chose_local_files != null && message.hasOwnProperty("chose_local_files"))
                object.chose_local_files = message.chose_local_files;
            return object;
        };
    
        /**
         * Converts this CCloud_ClientConflictResolution_Notification to JSON.
         * @function toJSON
         * @memberof CCloud_ClientConflictResolution_Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_ClientConflictResolution_Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_ClientConflictResolution_Notification;
    })();
    
    $root.CCloud_EnumerateUserApps_Request = (function() {
    
        /**
         * Properties of a CCloud_EnumerateUserApps_Request.
         * @exports ICCloud_EnumerateUserApps_Request
         * @interface ICCloud_EnumerateUserApps_Request
         */
    
        /**
         * Constructs a new CCloud_EnumerateUserApps_Request.
         * @exports CCloud_EnumerateUserApps_Request
         * @classdesc Represents a CCloud_EnumerateUserApps_Request.
         * @implements ICCloud_EnumerateUserApps_Request
         * @constructor
         * @param {ICCloud_EnumerateUserApps_Request=} [properties] Properties to set
         */
        function CCloud_EnumerateUserApps_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CCloud_EnumerateUserApps_Request instance using the specified properties.
         * @function create
         * @memberof CCloud_EnumerateUserApps_Request
         * @static
         * @param {ICCloud_EnumerateUserApps_Request=} [properties] Properties to set
         * @returns {CCloud_EnumerateUserApps_Request} CCloud_EnumerateUserApps_Request instance
         */
        CCloud_EnumerateUserApps_Request.create = function create(properties) {
            return new CCloud_EnumerateUserApps_Request(properties);
        };
    
        /**
         * Encodes the specified CCloud_EnumerateUserApps_Request message. Does not implicitly {@link CCloud_EnumerateUserApps_Request.verify|verify} messages.
         * @function encode
         * @memberof CCloud_EnumerateUserApps_Request
         * @static
         * @param {ICCloud_EnumerateUserApps_Request} message CCloud_EnumerateUserApps_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_EnumerateUserApps_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_EnumerateUserApps_Request message, length delimited. Does not implicitly {@link CCloud_EnumerateUserApps_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_EnumerateUserApps_Request
         * @static
         * @param {ICCloud_EnumerateUserApps_Request} message CCloud_EnumerateUserApps_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_EnumerateUserApps_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_EnumerateUserApps_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_EnumerateUserApps_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_EnumerateUserApps_Request} CCloud_EnumerateUserApps_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_EnumerateUserApps_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_EnumerateUserApps_Request();
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
         * Decodes a CCloud_EnumerateUserApps_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_EnumerateUserApps_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_EnumerateUserApps_Request} CCloud_EnumerateUserApps_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_EnumerateUserApps_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_EnumerateUserApps_Request message.
         * @function verify
         * @memberof CCloud_EnumerateUserApps_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_EnumerateUserApps_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CCloud_EnumerateUserApps_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_EnumerateUserApps_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_EnumerateUserApps_Request} CCloud_EnumerateUserApps_Request
         */
        CCloud_EnumerateUserApps_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_EnumerateUserApps_Request)
                return object;
            return new $root.CCloud_EnumerateUserApps_Request();
        };
    
        /**
         * Creates a plain object from a CCloud_EnumerateUserApps_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_EnumerateUserApps_Request
         * @static
         * @param {CCloud_EnumerateUserApps_Request} message CCloud_EnumerateUserApps_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_EnumerateUserApps_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CCloud_EnumerateUserApps_Request to JSON.
         * @function toJSON
         * @memberof CCloud_EnumerateUserApps_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_EnumerateUserApps_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CCloud_EnumerateUserApps_Request;
    })();
    
    $root.CCloud_EnumerateUserApps_Response = (function() {
    
        /**
         * Properties of a CCloud_EnumerateUserApps_Response.
         * @exports ICCloud_EnumerateUserApps_Response
         * @interface ICCloud_EnumerateUserApps_Response
         * @property {Array.<CCloud_EnumerateUserApps_Response.IApps>|null} [apps] CCloud_EnumerateUserApps_Response apps
         */
    
        /**
         * Constructs a new CCloud_EnumerateUserApps_Response.
         * @exports CCloud_EnumerateUserApps_Response
         * @classdesc Represents a CCloud_EnumerateUserApps_Response.
         * @implements ICCloud_EnumerateUserApps_Response
         * @constructor
         * @param {ICCloud_EnumerateUserApps_Response=} [properties] Properties to set
         */
        function CCloud_EnumerateUserApps_Response(properties) {
            this.apps = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CCloud_EnumerateUserApps_Response apps.
         * @member {Array.<CCloud_EnumerateUserApps_Response.IApps>} apps
         * @memberof CCloud_EnumerateUserApps_Response
         * @instance
         */
        CCloud_EnumerateUserApps_Response.prototype.apps = $util.emptyArray;
    
        /**
         * Creates a new CCloud_EnumerateUserApps_Response instance using the specified properties.
         * @function create
         * @memberof CCloud_EnumerateUserApps_Response
         * @static
         * @param {ICCloud_EnumerateUserApps_Response=} [properties] Properties to set
         * @returns {CCloud_EnumerateUserApps_Response} CCloud_EnumerateUserApps_Response instance
         */
        CCloud_EnumerateUserApps_Response.create = function create(properties) {
            return new CCloud_EnumerateUserApps_Response(properties);
        };
    
        /**
         * Encodes the specified CCloud_EnumerateUserApps_Response message. Does not implicitly {@link CCloud_EnumerateUserApps_Response.verify|verify} messages.
         * @function encode
         * @memberof CCloud_EnumerateUserApps_Response
         * @static
         * @param {ICCloud_EnumerateUserApps_Response} message CCloud_EnumerateUserApps_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_EnumerateUserApps_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.apps != null && message.apps.length)
                for (var i = 0; i < message.apps.length; ++i)
                    $root.CCloud_EnumerateUserApps_Response.Apps.encode(message.apps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CCloud_EnumerateUserApps_Response message, length delimited. Does not implicitly {@link CCloud_EnumerateUserApps_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CCloud_EnumerateUserApps_Response
         * @static
         * @param {ICCloud_EnumerateUserApps_Response} message CCloud_EnumerateUserApps_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCloud_EnumerateUserApps_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CCloud_EnumerateUserApps_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CCloud_EnumerateUserApps_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CCloud_EnumerateUserApps_Response} CCloud_EnumerateUserApps_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_EnumerateUserApps_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_EnumerateUserApps_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.apps && message.apps.length))
                        message.apps = [];
                    message.apps.push($root.CCloud_EnumerateUserApps_Response.Apps.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CCloud_EnumerateUserApps_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CCloud_EnumerateUserApps_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CCloud_EnumerateUserApps_Response} CCloud_EnumerateUserApps_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCloud_EnumerateUserApps_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CCloud_EnumerateUserApps_Response message.
         * @function verify
         * @memberof CCloud_EnumerateUserApps_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCloud_EnumerateUserApps_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.apps != null && message.hasOwnProperty("apps")) {
                if (!Array.isArray(message.apps))
                    return "apps: array expected";
                for (var i = 0; i < message.apps.length; ++i) {
                    var error = $root.CCloud_EnumerateUserApps_Response.Apps.verify(message.apps[i]);
                    if (error)
                        return "apps." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CCloud_EnumerateUserApps_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CCloud_EnumerateUserApps_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CCloud_EnumerateUserApps_Response} CCloud_EnumerateUserApps_Response
         */
        CCloud_EnumerateUserApps_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CCloud_EnumerateUserApps_Response)
                return object;
            var message = new $root.CCloud_EnumerateUserApps_Response();
            if (object.apps) {
                if (!Array.isArray(object.apps))
                    throw TypeError(".CCloud_EnumerateUserApps_Response.apps: array expected");
                message.apps = [];
                for (var i = 0; i < object.apps.length; ++i) {
                    if (typeof object.apps[i] !== "object")
                        throw TypeError(".CCloud_EnumerateUserApps_Response.apps: object expected");
                    message.apps[i] = $root.CCloud_EnumerateUserApps_Response.Apps.fromObject(object.apps[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CCloud_EnumerateUserApps_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CCloud_EnumerateUserApps_Response
         * @static
         * @param {CCloud_EnumerateUserApps_Response} message CCloud_EnumerateUserApps_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCloud_EnumerateUserApps_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.apps = [];
            if (message.apps && message.apps.length) {
                object.apps = [];
                for (var j = 0; j < message.apps.length; ++j)
                    object.apps[j] = $root.CCloud_EnumerateUserApps_Response.Apps.toObject(message.apps[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CCloud_EnumerateUserApps_Response to JSON.
         * @function toJSON
         * @memberof CCloud_EnumerateUserApps_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCloud_EnumerateUserApps_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CCloud_EnumerateUserApps_Response.Apps = (function() {
    
            /**
             * Properties of an Apps.
             * @memberof CCloud_EnumerateUserApps_Response
             * @interface IApps
             * @property {number|null} [appid] Apps appid
             * @property {number|null} [totalcount] Apps totalcount
             * @property {number|Long|null} [totalsize] Apps totalsize
             */
    
            /**
             * Constructs a new Apps.
             * @memberof CCloud_EnumerateUserApps_Response
             * @classdesc Represents an Apps.
             * @implements IApps
             * @constructor
             * @param {CCloud_EnumerateUserApps_Response.IApps=} [properties] Properties to set
             */
            function Apps(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Apps appid.
             * @member {number} appid
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @instance
             */
            Apps.prototype.appid = 0;
    
            /**
             * Apps totalcount.
             * @member {number} totalcount
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @instance
             */
            Apps.prototype.totalcount = 0;
    
            /**
             * Apps totalsize.
             * @member {number|Long} totalsize
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @instance
             */
            Apps.prototype.totalsize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new Apps instance using the specified properties.
             * @function create
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @static
             * @param {CCloud_EnumerateUserApps_Response.IApps=} [properties] Properties to set
             * @returns {CCloud_EnumerateUserApps_Response.Apps} Apps instance
             */
            Apps.create = function create(properties) {
                return new Apps(properties);
            };
    
            /**
             * Encodes the specified Apps message. Does not implicitly {@link CCloud_EnumerateUserApps_Response.Apps.verify|verify} messages.
             * @function encode
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @static
             * @param {CCloud_EnumerateUserApps_Response.IApps} message Apps message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Apps.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.appid != null && message.hasOwnProperty("appid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
                if (message.totalcount != null && message.hasOwnProperty("totalcount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalcount);
                if (message.totalsize != null && message.hasOwnProperty("totalsize"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.totalsize);
                return writer;
            };
    
            /**
             * Encodes the specified Apps message, length delimited. Does not implicitly {@link CCloud_EnumerateUserApps_Response.Apps.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @static
             * @param {CCloud_EnumerateUserApps_Response.IApps} message Apps message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Apps.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Apps message from the specified reader or buffer.
             * @function decode
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CCloud_EnumerateUserApps_Response.Apps} Apps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Apps.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCloud_EnumerateUserApps_Response.Apps();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.appid = reader.uint32();
                        break;
                    case 2:
                        message.totalcount = reader.int32();
                        break;
                    case 3:
                        message.totalsize = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Apps message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CCloud_EnumerateUserApps_Response.Apps} Apps
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Apps.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Apps message.
             * @function verify
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Apps.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.appid != null && message.hasOwnProperty("appid"))
                    if (!$util.isInteger(message.appid))
                        return "appid: integer expected";
                if (message.totalcount != null && message.hasOwnProperty("totalcount"))
                    if (!$util.isInteger(message.totalcount))
                        return "totalcount: integer expected";
                if (message.totalsize != null && message.hasOwnProperty("totalsize"))
                    if (!$util.isInteger(message.totalsize) && !(message.totalsize && $util.isInteger(message.totalsize.low) && $util.isInteger(message.totalsize.high)))
                        return "totalsize: integer|Long expected";
                return null;
            };
    
            /**
             * Creates an Apps message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CCloud_EnumerateUserApps_Response.Apps} Apps
             */
            Apps.fromObject = function fromObject(object) {
                if (object instanceof $root.CCloud_EnumerateUserApps_Response.Apps)
                    return object;
                var message = new $root.CCloud_EnumerateUserApps_Response.Apps();
                if (object.appid != null)
                    message.appid = object.appid >>> 0;
                if (object.totalcount != null)
                    message.totalcount = object.totalcount | 0;
                if (object.totalsize != null)
                    if ($util.Long)
                        (message.totalsize = $util.Long.fromValue(object.totalsize)).unsigned = false;
                    else if (typeof object.totalsize === "string")
                        message.totalsize = parseInt(object.totalsize, 10);
                    else if (typeof object.totalsize === "number")
                        message.totalsize = object.totalsize;
                    else if (typeof object.totalsize === "object")
                        message.totalsize = new $util.LongBits(object.totalsize.low >>> 0, object.totalsize.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from an Apps message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @static
             * @param {CCloud_EnumerateUserApps_Response.Apps} message Apps
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Apps.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.appid = 0;
                    object.totalcount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.totalsize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.totalsize = options.longs === String ? "0" : 0;
                }
                if (message.appid != null && message.hasOwnProperty("appid"))
                    object.appid = message.appid;
                if (message.totalcount != null && message.hasOwnProperty("totalcount"))
                    object.totalcount = message.totalcount;
                if (message.totalsize != null && message.hasOwnProperty("totalsize"))
                    if (typeof message.totalsize === "number")
                        object.totalsize = options.longs === String ? String(message.totalsize) : message.totalsize;
                    else
                        object.totalsize = options.longs === String ? $util.Long.prototype.toString.call(message.totalsize) : options.longs === Number ? new $util.LongBits(message.totalsize.low >>> 0, message.totalsize.high >>> 0).toNumber() : message.totalsize;
                return object;
            };
    
            /**
             * Converts this Apps to JSON.
             * @function toJSON
             * @memberof CCloud_EnumerateUserApps_Response.Apps
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Apps.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Apps;
        })();
    
        return CCloud_EnumerateUserApps_Response;
    })();
    
    $root.Cloud = (function() {
    
        /**
         * Constructs a new Cloud service.
         * @exports Cloud
         * @classdesc Represents a Cloud
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Cloud(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Cloud.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Cloud;
    
        /**
         * Creates new Cloud service using the specified rpc implementation.
         * @function create
         * @memberof Cloud
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Cloud} RPC service. Useful where requests and/or responses are streamed.
         */
        Cloud.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Cloud#getUploadServerInfo}.
         * @memberof Cloud
         * @typedef GetUploadServerInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_GetUploadServerInfo_Response} [response] CCloud_GetUploadServerInfo_Response
         */
    
        /**
         * Calls GetUploadServerInfo.
         * @function getUploadServerInfo
         * @memberof Cloud
         * @instance
         * @param {ICCloud_GetUploadServerInfo_Request} request CCloud_GetUploadServerInfo_Request message or plain object
         * @param {Cloud.GetUploadServerInfoCallback} callback Node-style callback called with the error, if any, and CCloud_GetUploadServerInfo_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.getUploadServerInfo = function getUploadServerInfo(request, callback) {
            return this.rpcCall(getUploadServerInfo, $root.CCloud_GetUploadServerInfo_Request, $root.CCloud_GetUploadServerInfo_Response, request, callback);
        }, "name", { value: "GetUploadServerInfo" });
    
        /**
         * Calls GetUploadServerInfo.
         * @function getUploadServerInfo
         * @memberof Cloud
         * @instance
         * @param {ICCloud_GetUploadServerInfo_Request} request CCloud_GetUploadServerInfo_Request message or plain object
         * @returns {Promise<CCloud_GetUploadServerInfo_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#beginHTTPUpload}.
         * @memberof Cloud
         * @typedef BeginHTTPUploadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_BeginHTTPUpload_Response} [response] CCloud_BeginHTTPUpload_Response
         */
    
        /**
         * Calls BeginHTTPUpload.
         * @function beginHTTPUpload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_BeginHTTPUpload_Request} request CCloud_BeginHTTPUpload_Request message or plain object
         * @param {Cloud.BeginHTTPUploadCallback} callback Node-style callback called with the error, if any, and CCloud_BeginHTTPUpload_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.beginHTTPUpload = function beginHTTPUpload(request, callback) {
            return this.rpcCall(beginHTTPUpload, $root.CCloud_BeginHTTPUpload_Request, $root.CCloud_BeginHTTPUpload_Response, request, callback);
        }, "name", { value: "BeginHTTPUpload" });
    
        /**
         * Calls BeginHTTPUpload.
         * @function beginHTTPUpload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_BeginHTTPUpload_Request} request CCloud_BeginHTTPUpload_Request message or plain object
         * @returns {Promise<CCloud_BeginHTTPUpload_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#commitHTTPUpload}.
         * @memberof Cloud
         * @typedef CommitHTTPUploadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_CommitHTTPUpload_Response} [response] CCloud_CommitHTTPUpload_Response
         */
    
        /**
         * Calls CommitHTTPUpload.
         * @function commitHTTPUpload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_CommitHTTPUpload_Request} request CCloud_CommitHTTPUpload_Request message or plain object
         * @param {Cloud.CommitHTTPUploadCallback} callback Node-style callback called with the error, if any, and CCloud_CommitHTTPUpload_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.commitHTTPUpload = function commitHTTPUpload(request, callback) {
            return this.rpcCall(commitHTTPUpload, $root.CCloud_CommitHTTPUpload_Request, $root.CCloud_CommitHTTPUpload_Response, request, callback);
        }, "name", { value: "CommitHTTPUpload" });
    
        /**
         * Calls CommitHTTPUpload.
         * @function commitHTTPUpload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_CommitHTTPUpload_Request} request CCloud_CommitHTTPUpload_Request message or plain object
         * @returns {Promise<CCloud_CommitHTTPUpload_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#getFileDetails}.
         * @memberof Cloud
         * @typedef GetFileDetailsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_GetFileDetails_Response} [response] CCloud_GetFileDetails_Response
         */
    
        /**
         * Calls GetFileDetails.
         * @function getFileDetails
         * @memberof Cloud
         * @instance
         * @param {ICCloud_GetFileDetails_Request} request CCloud_GetFileDetails_Request message or plain object
         * @param {Cloud.GetFileDetailsCallback} callback Node-style callback called with the error, if any, and CCloud_GetFileDetails_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.getFileDetails = function getFileDetails(request, callback) {
            return this.rpcCall(getFileDetails, $root.CCloud_GetFileDetails_Request, $root.CCloud_GetFileDetails_Response, request, callback);
        }, "name", { value: "GetFileDetails" });
    
        /**
         * Calls GetFileDetails.
         * @function getFileDetails
         * @memberof Cloud
         * @instance
         * @param {ICCloud_GetFileDetails_Request} request CCloud_GetFileDetails_Request message or plain object
         * @returns {Promise<CCloud_GetFileDetails_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#enumerateUserFiles}.
         * @memberof Cloud
         * @typedef EnumerateUserFilesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_EnumerateUserFiles_Response} [response] CCloud_EnumerateUserFiles_Response
         */
    
        /**
         * Calls EnumerateUserFiles.
         * @function enumerateUserFiles
         * @memberof Cloud
         * @instance
         * @param {ICCloud_EnumerateUserFiles_Request} request CCloud_EnumerateUserFiles_Request message or plain object
         * @param {Cloud.EnumerateUserFilesCallback} callback Node-style callback called with the error, if any, and CCloud_EnumerateUserFiles_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.enumerateUserFiles = function enumerateUserFiles(request, callback) {
            return this.rpcCall(enumerateUserFiles, $root.CCloud_EnumerateUserFiles_Request, $root.CCloud_EnumerateUserFiles_Response, request, callback);
        }, "name", { value: "EnumerateUserFiles" });
    
        /**
         * Calls EnumerateUserFiles.
         * @function enumerateUserFiles
         * @memberof Cloud
         * @instance
         * @param {ICCloud_EnumerateUserFiles_Request} request CCloud_EnumerateUserFiles_Request message or plain object
         * @returns {Promise<CCloud_EnumerateUserFiles_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#delete_}.
         * @memberof Cloud
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_Delete_Response} [response] CCloud_Delete_Response
         */
    
        /**
         * Calls Delete.
         * @function delete
         * @memberof Cloud
         * @instance
         * @param {ICCloud_Delete_Request} request CCloud_Delete_Request message or plain object
         * @param {Cloud.DeleteCallback} callback Node-style callback called with the error, if any, and CCloud_Delete_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.CCloud_Delete_Request, $root.CCloud_Delete_Response, request, callback);
        }, "name", { value: "Delete" });
    
        /**
         * Calls Delete.
         * @function delete
         * @memberof Cloud
         * @instance
         * @param {ICCloud_Delete_Request} request CCloud_Delete_Request message or plain object
         * @returns {Promise<CCloud_Delete_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#getClientEncryptionKey}.
         * @memberof Cloud
         * @typedef GetClientEncryptionKeyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_GetClientEncryptionKey_Response} [response] CCloud_GetClientEncryptionKey_Response
         */
    
        /**
         * Calls GetClientEncryptionKey.
         * @function getClientEncryptionKey
         * @memberof Cloud
         * @instance
         * @param {ICCloud_GetClientEncryptionKey_Request} request CCloud_GetClientEncryptionKey_Request message or plain object
         * @param {Cloud.GetClientEncryptionKeyCallback} callback Node-style callback called with the error, if any, and CCloud_GetClientEncryptionKey_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.getClientEncryptionKey = function getClientEncryptionKey(request, callback) {
            return this.rpcCall(getClientEncryptionKey, $root.CCloud_GetClientEncryptionKey_Request, $root.CCloud_GetClientEncryptionKey_Response, request, callback);
        }, "name", { value: "GetClientEncryptionKey" });
    
        /**
         * Calls GetClientEncryptionKey.
         * @function getClientEncryptionKey
         * @memberof Cloud
         * @instance
         * @param {ICCloud_GetClientEncryptionKey_Request} request CCloud_GetClientEncryptionKey_Request message or plain object
         * @returns {Promise<CCloud_GetClientEncryptionKey_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#cDNReport}.
         * @memberof Cloud
         * @typedef CDNReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls CDNReport.
         * @function cDNReport
         * @memberof Cloud
         * @instance
         * @param {ICCloud_CDNReport_Notification} request CCloud_CDNReport_Notification message or plain object
         * @param {Cloud.CDNReportCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.cDNReport = function cDNReport(request, callback) {
            return this.rpcCall(cDNReport, $root.CCloud_CDNReport_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "CDNReport" });
    
        /**
         * Calls CDNReport.
         * @function cDNReport
         * @memberof Cloud
         * @instance
         * @param {ICCloud_CDNReport_Notification} request CCloud_CDNReport_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#externalStorageTransferReport}.
         * @memberof Cloud
         * @typedef ExternalStorageTransferReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ExternalStorageTransferReport.
         * @function externalStorageTransferReport
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ExternalStorageTransferReport_Notification} request CCloud_ExternalStorageTransferReport_Notification message or plain object
         * @param {Cloud.ExternalStorageTransferReportCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.externalStorageTransferReport = function externalStorageTransferReport(request, callback) {
            return this.rpcCall(externalStorageTransferReport, $root.CCloud_ExternalStorageTransferReport_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ExternalStorageTransferReport" });
    
        /**
         * Calls ExternalStorageTransferReport.
         * @function externalStorageTransferReport
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ExternalStorageTransferReport_Notification} request CCloud_ExternalStorageTransferReport_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#clientBeginFileUpload}.
         * @memberof Cloud
         * @typedef ClientBeginFileUploadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_ClientBeginFileUpload_Response} [response] CCloud_ClientBeginFileUpload_Response
         */
    
        /**
         * Calls ClientBeginFileUpload.
         * @function clientBeginFileUpload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientBeginFileUpload_Request} request CCloud_ClientBeginFileUpload_Request message or plain object
         * @param {Cloud.ClientBeginFileUploadCallback} callback Node-style callback called with the error, if any, and CCloud_ClientBeginFileUpload_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.clientBeginFileUpload = function clientBeginFileUpload(request, callback) {
            return this.rpcCall(clientBeginFileUpload, $root.CCloud_ClientBeginFileUpload_Request, $root.CCloud_ClientBeginFileUpload_Response, request, callback);
        }, "name", { value: "ClientBeginFileUpload" });
    
        /**
         * Calls ClientBeginFileUpload.
         * @function clientBeginFileUpload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientBeginFileUpload_Request} request CCloud_ClientBeginFileUpload_Request message or plain object
         * @returns {Promise<CCloud_ClientBeginFileUpload_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#clientCommitFileUpload}.
         * @memberof Cloud
         * @typedef ClientCommitFileUploadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_ClientCommitFileUpload_Response} [response] CCloud_ClientCommitFileUpload_Response
         */
    
        /**
         * Calls ClientCommitFileUpload.
         * @function clientCommitFileUpload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientCommitFileUpload_Request} request CCloud_ClientCommitFileUpload_Request message or plain object
         * @param {Cloud.ClientCommitFileUploadCallback} callback Node-style callback called with the error, if any, and CCloud_ClientCommitFileUpload_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.clientCommitFileUpload = function clientCommitFileUpload(request, callback) {
            return this.rpcCall(clientCommitFileUpload, $root.CCloud_ClientCommitFileUpload_Request, $root.CCloud_ClientCommitFileUpload_Response, request, callback);
        }, "name", { value: "ClientCommitFileUpload" });
    
        /**
         * Calls ClientCommitFileUpload.
         * @function clientCommitFileUpload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientCommitFileUpload_Request} request CCloud_ClientCommitFileUpload_Request message or plain object
         * @returns {Promise<CCloud_ClientCommitFileUpload_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#clientFileDownload}.
         * @memberof Cloud
         * @typedef ClientFileDownloadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_ClientFileDownload_Response} [response] CCloud_ClientFileDownload_Response
         */
    
        /**
         * Calls ClientFileDownload.
         * @function clientFileDownload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientFileDownload_Request} request CCloud_ClientFileDownload_Request message or plain object
         * @param {Cloud.ClientFileDownloadCallback} callback Node-style callback called with the error, if any, and CCloud_ClientFileDownload_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.clientFileDownload = function clientFileDownload(request, callback) {
            return this.rpcCall(clientFileDownload, $root.CCloud_ClientFileDownload_Request, $root.CCloud_ClientFileDownload_Response, request, callback);
        }, "name", { value: "ClientFileDownload" });
    
        /**
         * Calls ClientFileDownload.
         * @function clientFileDownload
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientFileDownload_Request} request CCloud_ClientFileDownload_Request message or plain object
         * @returns {Promise<CCloud_ClientFileDownload_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#clientDeleteFile}.
         * @memberof Cloud
         * @typedef ClientDeleteFileCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_ClientDeleteFile_Response} [response] CCloud_ClientDeleteFile_Response
         */
    
        /**
         * Calls ClientDeleteFile.
         * @function clientDeleteFile
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientDeleteFile_Request} request CCloud_ClientDeleteFile_Request message or plain object
         * @param {Cloud.ClientDeleteFileCallback} callback Node-style callback called with the error, if any, and CCloud_ClientDeleteFile_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.clientDeleteFile = function clientDeleteFile(request, callback) {
            return this.rpcCall(clientDeleteFile, $root.CCloud_ClientDeleteFile_Request, $root.CCloud_ClientDeleteFile_Response, request, callback);
        }, "name", { value: "ClientDeleteFile" });
    
        /**
         * Calls ClientDeleteFile.
         * @function clientDeleteFile
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientDeleteFile_Request} request CCloud_ClientDeleteFile_Request message or plain object
         * @returns {Promise<CCloud_ClientDeleteFile_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#clientConflictResolution}.
         * @memberof Cloud
         * @typedef ClientConflictResolutionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {NoResponse} [response] NoResponse
         */
    
        /**
         * Calls ClientConflictResolution.
         * @function clientConflictResolution
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientConflictResolution_Notification} request CCloud_ClientConflictResolution_Notification message or plain object
         * @param {Cloud.ClientConflictResolutionCallback} callback Node-style callback called with the error, if any, and NoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.clientConflictResolution = function clientConflictResolution(request, callback) {
            return this.rpcCall(clientConflictResolution, $root.CCloud_ClientConflictResolution_Notification, $root.NoResponse, request, callback);
        }, "name", { value: "ClientConflictResolution" });
    
        /**
         * Calls ClientConflictResolution.
         * @function clientConflictResolution
         * @memberof Cloud
         * @instance
         * @param {ICCloud_ClientConflictResolution_Notification} request CCloud_ClientConflictResolution_Notification message or plain object
         * @returns {Promise<NoResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link Cloud#enumerateUserApps}.
         * @memberof Cloud
         * @typedef EnumerateUserAppsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CCloud_EnumerateUserApps_Response} [response] CCloud_EnumerateUserApps_Response
         */
    
        /**
         * Calls EnumerateUserApps.
         * @function enumerateUserApps
         * @memberof Cloud
         * @instance
         * @param {ICCloud_EnumerateUserApps_Request} request CCloud_EnumerateUserApps_Request message or plain object
         * @param {Cloud.EnumerateUserAppsCallback} callback Node-style callback called with the error, if any, and CCloud_EnumerateUserApps_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Cloud.prototype.enumerateUserApps = function enumerateUserApps(request, callback) {
            return this.rpcCall(enumerateUserApps, $root.CCloud_EnumerateUserApps_Request, $root.CCloud_EnumerateUserApps_Response, request, callback);
        }, "name", { value: "EnumerateUserApps" });
    
        /**
         * Calls EnumerateUserApps.
         * @function enumerateUserApps
         * @memberof Cloud
         * @instance
         * @param {ICCloud_EnumerateUserApps_Request} request CCloud_EnumerateUserApps_Request message or plain object
         * @returns {Promise<CCloud_EnumerateUserApps_Response>} Promise
         * @variation 2
         */
    
        return Cloud;
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
