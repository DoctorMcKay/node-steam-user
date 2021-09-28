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
