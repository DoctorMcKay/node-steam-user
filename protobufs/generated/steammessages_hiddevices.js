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
     * EHIDDeviceLocation enum.
     * @exports EHIDDeviceLocation
     * @enum {string}
     * @property {number} k_EDeviceLocationLocal=0 k_EDeviceLocationLocal value
     * @property {number} k_EDeviceLocationRemote=2 k_EDeviceLocationRemote value
     * @property {number} k_EDeviceLocationAny=3 k_EDeviceLocationAny value
     */
    $root.EHIDDeviceLocation = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EDeviceLocationLocal"] = 0;
        values[valuesById[2] = "k_EDeviceLocationRemote"] = 2;
        values[valuesById[3] = "k_EDeviceLocationAny"] = 3;
        return values;
    })();
    
    /**
     * EHIDDeviceDisconnectMethod enum.
     * @exports EHIDDeviceDisconnectMethod
     * @enum {string}
     * @property {number} k_EDeviceDisconnectMethodUnknown=0 k_EDeviceDisconnectMethodUnknown value
     * @property {number} k_EDeviceDisconnectMethodBluetooth=1 k_EDeviceDisconnectMethodBluetooth value
     * @property {number} k_EDeviceDisconnectMethodFeatureReport=2 k_EDeviceDisconnectMethodFeatureReport value
     * @property {number} k_EDeviceDisconnectMethodOutputReport=3 k_EDeviceDisconnectMethodOutputReport value
     */
    $root.EHIDDeviceDisconnectMethod = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EDeviceDisconnectMethodUnknown"] = 0;
        values[valuesById[1] = "k_EDeviceDisconnectMethodBluetooth"] = 1;
        values[valuesById[2] = "k_EDeviceDisconnectMethodFeatureReport"] = 2;
        values[valuesById[3] = "k_EDeviceDisconnectMethodOutputReport"] = 3;
        return values;
    })();
    
    $root.CHIDDeviceInfo = (function() {
    
        /**
         * Properties of a CHIDDeviceInfo.
         * @exports ICHIDDeviceInfo
         * @interface ICHIDDeviceInfo
         * @property {EHIDDeviceLocation|null} [location] CHIDDeviceInfo location
         * @property {string|null} [path] CHIDDeviceInfo path
         * @property {number|null} [vendor_id] CHIDDeviceInfo vendor_id
         * @property {number|null} [product_id] CHIDDeviceInfo product_id
         * @property {string|null} [serial_number] CHIDDeviceInfo serial_number
         * @property {number|null} [release_number] CHIDDeviceInfo release_number
         * @property {string|null} [manufacturer_string] CHIDDeviceInfo manufacturer_string
         * @property {string|null} [product_string] CHIDDeviceInfo product_string
         * @property {number|null} [usage_page] CHIDDeviceInfo usage_page
         * @property {number|null} [usage] CHIDDeviceInfo usage
         * @property {number|null} [interface_number] CHIDDeviceInfo interface_number
         * @property {number|null} [ostype] CHIDDeviceInfo ostype
         * @property {boolean|null} [is_generic_gamepad] CHIDDeviceInfo is_generic_gamepad
         * @property {boolean|null} [is_generic_joystick] CHIDDeviceInfo is_generic_joystick
         * @property {number|null} [caps_bits] CHIDDeviceInfo caps_bits
         * @property {number|null} [session_id] CHIDDeviceInfo session_id
         * @property {number|null} [eControllerType] CHIDDeviceInfo eControllerType
         */
    
        /**
         * Constructs a new CHIDDeviceInfo.
         * @exports CHIDDeviceInfo
         * @classdesc Represents a CHIDDeviceInfo.
         * @implements ICHIDDeviceInfo
         * @constructor
         * @param {ICHIDDeviceInfo=} [properties] Properties to set
         */
        function CHIDDeviceInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CHIDDeviceInfo location.
         * @member {EHIDDeviceLocation} location
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.location = 0;
    
        /**
         * CHIDDeviceInfo path.
         * @member {string} path
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.path = "";
    
        /**
         * CHIDDeviceInfo vendor_id.
         * @member {number} vendor_id
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.vendor_id = 0;
    
        /**
         * CHIDDeviceInfo product_id.
         * @member {number} product_id
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.product_id = 0;
    
        /**
         * CHIDDeviceInfo serial_number.
         * @member {string} serial_number
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.serial_number = "";
    
        /**
         * CHIDDeviceInfo release_number.
         * @member {number} release_number
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.release_number = 0;
    
        /**
         * CHIDDeviceInfo manufacturer_string.
         * @member {string} manufacturer_string
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.manufacturer_string = "";
    
        /**
         * CHIDDeviceInfo product_string.
         * @member {string} product_string
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.product_string = "";
    
        /**
         * CHIDDeviceInfo usage_page.
         * @member {number} usage_page
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.usage_page = 0;
    
        /**
         * CHIDDeviceInfo usage.
         * @member {number} usage
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.usage = 0;
    
        /**
         * CHIDDeviceInfo interface_number.
         * @member {number} interface_number
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.interface_number = -1;
    
        /**
         * CHIDDeviceInfo ostype.
         * @member {number} ostype
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.ostype = -1;
    
        /**
         * CHIDDeviceInfo is_generic_gamepad.
         * @member {boolean} is_generic_gamepad
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.is_generic_gamepad = false;
    
        /**
         * CHIDDeviceInfo is_generic_joystick.
         * @member {boolean} is_generic_joystick
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.is_generic_joystick = false;
    
        /**
         * CHIDDeviceInfo caps_bits.
         * @member {number} caps_bits
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.caps_bits = 0;
    
        /**
         * CHIDDeviceInfo session_id.
         * @member {number} session_id
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.session_id = 0;
    
        /**
         * CHIDDeviceInfo eControllerType.
         * @member {number} eControllerType
         * @memberof CHIDDeviceInfo
         * @instance
         */
        CHIDDeviceInfo.prototype.eControllerType = 0;
    
        /**
         * Creates a new CHIDDeviceInfo instance using the specified properties.
         * @function create
         * @memberof CHIDDeviceInfo
         * @static
         * @param {ICHIDDeviceInfo=} [properties] Properties to set
         * @returns {CHIDDeviceInfo} CHIDDeviceInfo instance
         */
        CHIDDeviceInfo.create = function create(properties) {
            return new CHIDDeviceInfo(properties);
        };
    
        /**
         * Encodes the specified CHIDDeviceInfo message. Does not implicitly {@link CHIDDeviceInfo.verify|verify} messages.
         * @function encode
         * @memberof CHIDDeviceInfo
         * @static
         * @param {ICHIDDeviceInfo} message CHIDDeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHIDDeviceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.location != null && message.hasOwnProperty("location"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.location);
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
            if (message.vendor_id != null && message.hasOwnProperty("vendor_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.vendor_id);
            if (message.product_id != null && message.hasOwnProperty("product_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.product_id);
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.serial_number);
            if (message.release_number != null && message.hasOwnProperty("release_number"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.release_number);
            if (message.manufacturer_string != null && message.hasOwnProperty("manufacturer_string"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.manufacturer_string);
            if (message.product_string != null && message.hasOwnProperty("product_string"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.product_string);
            if (message.usage_page != null && message.hasOwnProperty("usage_page"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.usage_page);
            if (message.usage != null && message.hasOwnProperty("usage"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.usage);
            if (message.interface_number != null && message.hasOwnProperty("interface_number"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.interface_number);
            if (message.ostype != null && message.hasOwnProperty("ostype"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ostype);
            if (message.is_generic_gamepad != null && message.hasOwnProperty("is_generic_gamepad"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.is_generic_gamepad);
            if (message.is_generic_joystick != null && message.hasOwnProperty("is_generic_joystick"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.is_generic_joystick);
            if (message.caps_bits != null && message.hasOwnProperty("caps_bits"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.caps_bits);
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.session_id);
            if (message.eControllerType != null && message.hasOwnProperty("eControllerType"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.eControllerType);
            return writer;
        };
    
        /**
         * Encodes the specified CHIDDeviceInfo message, length delimited. Does not implicitly {@link CHIDDeviceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CHIDDeviceInfo
         * @static
         * @param {ICHIDDeviceInfo} message CHIDDeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHIDDeviceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CHIDDeviceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CHIDDeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CHIDDeviceInfo} CHIDDeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHIDDeviceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDDeviceInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.location = reader.int32();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.vendor_id = reader.uint32();
                    break;
                case 4:
                    message.product_id = reader.uint32();
                    break;
                case 5:
                    message.serial_number = reader.string();
                    break;
                case 6:
                    message.release_number = reader.uint32();
                    break;
                case 7:
                    message.manufacturer_string = reader.string();
                    break;
                case 8:
                    message.product_string = reader.string();
                    break;
                case 9:
                    message.usage_page = reader.uint32();
                    break;
                case 10:
                    message.usage = reader.uint32();
                    break;
                case 11:
                    message.interface_number = reader.int32();
                    break;
                case 12:
                    message.ostype = reader.int32();
                    break;
                case 13:
                    message.is_generic_gamepad = reader.bool();
                    break;
                case 14:
                    message.is_generic_joystick = reader.bool();
                    break;
                case 15:
                    message.caps_bits = reader.uint32();
                    break;
                case 16:
                    message.session_id = reader.uint32();
                    break;
                case 17:
                    message.eControllerType = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CHIDDeviceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CHIDDeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CHIDDeviceInfo} CHIDDeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHIDDeviceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CHIDDeviceInfo message.
         * @function verify
         * @memberof CHIDDeviceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CHIDDeviceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.location != null && message.hasOwnProperty("location"))
                switch (message.location) {
                default:
                    return "location: enum value expected";
                case 0:
                case 2:
                case 3:
                    break;
                }
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.vendor_id != null && message.hasOwnProperty("vendor_id"))
                if (!$util.isInteger(message.vendor_id))
                    return "vendor_id: integer expected";
            if (message.product_id != null && message.hasOwnProperty("product_id"))
                if (!$util.isInteger(message.product_id))
                    return "product_id: integer expected";
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                if (!$util.isString(message.serial_number))
                    return "serial_number: string expected";
            if (message.release_number != null && message.hasOwnProperty("release_number"))
                if (!$util.isInteger(message.release_number))
                    return "release_number: integer expected";
            if (message.manufacturer_string != null && message.hasOwnProperty("manufacturer_string"))
                if (!$util.isString(message.manufacturer_string))
                    return "manufacturer_string: string expected";
            if (message.product_string != null && message.hasOwnProperty("product_string"))
                if (!$util.isString(message.product_string))
                    return "product_string: string expected";
            if (message.usage_page != null && message.hasOwnProperty("usage_page"))
                if (!$util.isInteger(message.usage_page))
                    return "usage_page: integer expected";
            if (message.usage != null && message.hasOwnProperty("usage"))
                if (!$util.isInteger(message.usage))
                    return "usage: integer expected";
            if (message.interface_number != null && message.hasOwnProperty("interface_number"))
                if (!$util.isInteger(message.interface_number))
                    return "interface_number: integer expected";
            if (message.ostype != null && message.hasOwnProperty("ostype"))
                if (!$util.isInteger(message.ostype))
                    return "ostype: integer expected";
            if (message.is_generic_gamepad != null && message.hasOwnProperty("is_generic_gamepad"))
                if (typeof message.is_generic_gamepad !== "boolean")
                    return "is_generic_gamepad: boolean expected";
            if (message.is_generic_joystick != null && message.hasOwnProperty("is_generic_joystick"))
                if (typeof message.is_generic_joystick !== "boolean")
                    return "is_generic_joystick: boolean expected";
            if (message.caps_bits != null && message.hasOwnProperty("caps_bits"))
                if (!$util.isInteger(message.caps_bits))
                    return "caps_bits: integer expected";
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                if (!$util.isInteger(message.session_id))
                    return "session_id: integer expected";
            if (message.eControllerType != null && message.hasOwnProperty("eControllerType"))
                if (!$util.isInteger(message.eControllerType))
                    return "eControllerType: integer expected";
            return null;
        };
    
        /**
         * Creates a CHIDDeviceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CHIDDeviceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CHIDDeviceInfo} CHIDDeviceInfo
         */
        CHIDDeviceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CHIDDeviceInfo)
                return object;
            var message = new $root.CHIDDeviceInfo();
            switch (object.location) {
            case "k_EDeviceLocationLocal":
            case 0:
                message.location = 0;
                break;
            case "k_EDeviceLocationRemote":
            case 2:
                message.location = 2;
                break;
            case "k_EDeviceLocationAny":
            case 3:
                message.location = 3;
                break;
            }
            if (object.path != null)
                message.path = String(object.path);
            if (object.vendor_id != null)
                message.vendor_id = object.vendor_id >>> 0;
            if (object.product_id != null)
                message.product_id = object.product_id >>> 0;
            if (object.serial_number != null)
                message.serial_number = String(object.serial_number);
            if (object.release_number != null)
                message.release_number = object.release_number >>> 0;
            if (object.manufacturer_string != null)
                message.manufacturer_string = String(object.manufacturer_string);
            if (object.product_string != null)
                message.product_string = String(object.product_string);
            if (object.usage_page != null)
                message.usage_page = object.usage_page >>> 0;
            if (object.usage != null)
                message.usage = object.usage >>> 0;
            if (object.interface_number != null)
                message.interface_number = object.interface_number | 0;
            if (object.ostype != null)
                message.ostype = object.ostype | 0;
            if (object.is_generic_gamepad != null)
                message.is_generic_gamepad = Boolean(object.is_generic_gamepad);
            if (object.is_generic_joystick != null)
                message.is_generic_joystick = Boolean(object.is_generic_joystick);
            if (object.caps_bits != null)
                message.caps_bits = object.caps_bits >>> 0;
            if (object.session_id != null)
                message.session_id = object.session_id >>> 0;
            if (object.eControllerType != null)
                message.eControllerType = object.eControllerType >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CHIDDeviceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CHIDDeviceInfo
         * @static
         * @param {CHIDDeviceInfo} message CHIDDeviceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CHIDDeviceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.location = options.enums === String ? "k_EDeviceLocationLocal" : 0;
                object.path = "";
                object.vendor_id = 0;
                object.product_id = 0;
                object.serial_number = "";
                object.release_number = 0;
                object.manufacturer_string = "";
                object.product_string = "";
                object.usage_page = 0;
                object.usage = 0;
                object.interface_number = -1;
                object.ostype = -1;
                object.is_generic_gamepad = false;
                object.is_generic_joystick = false;
                object.caps_bits = 0;
                object.session_id = 0;
                object.eControllerType = 0;
            }
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = options.enums === String ? $root.EHIDDeviceLocation[message.location] : message.location;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.vendor_id != null && message.hasOwnProperty("vendor_id"))
                object.vendor_id = message.vendor_id;
            if (message.product_id != null && message.hasOwnProperty("product_id"))
                object.product_id = message.product_id;
            if (message.serial_number != null && message.hasOwnProperty("serial_number"))
                object.serial_number = message.serial_number;
            if (message.release_number != null && message.hasOwnProperty("release_number"))
                object.release_number = message.release_number;
            if (message.manufacturer_string != null && message.hasOwnProperty("manufacturer_string"))
                object.manufacturer_string = message.manufacturer_string;
            if (message.product_string != null && message.hasOwnProperty("product_string"))
                object.product_string = message.product_string;
            if (message.usage_page != null && message.hasOwnProperty("usage_page"))
                object.usage_page = message.usage_page;
            if (message.usage != null && message.hasOwnProperty("usage"))
                object.usage = message.usage;
            if (message.interface_number != null && message.hasOwnProperty("interface_number"))
                object.interface_number = message.interface_number;
            if (message.ostype != null && message.hasOwnProperty("ostype"))
                object.ostype = message.ostype;
            if (message.is_generic_gamepad != null && message.hasOwnProperty("is_generic_gamepad"))
                object.is_generic_gamepad = message.is_generic_gamepad;
            if (message.is_generic_joystick != null && message.hasOwnProperty("is_generic_joystick"))
                object.is_generic_joystick = message.is_generic_joystick;
            if (message.caps_bits != null && message.hasOwnProperty("caps_bits"))
                object.caps_bits = message.caps_bits;
            if (message.session_id != null && message.hasOwnProperty("session_id"))
                object.session_id = message.session_id;
            if (message.eControllerType != null && message.hasOwnProperty("eControllerType"))
                object.eControllerType = message.eControllerType;
            return object;
        };
    
        /**
         * Converts this CHIDDeviceInfo to JSON.
         * @function toJSON
         * @memberof CHIDDeviceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CHIDDeviceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CHIDDeviceInfo;
    })();
    
    $root.CHIDDeviceInputReport = (function() {
    
        /**
         * Properties of a CHIDDeviceInputReport.
         * @exports ICHIDDeviceInputReport
         * @interface ICHIDDeviceInputReport
         * @property {Uint8Array|null} [full_report] CHIDDeviceInputReport full_report
         * @property {Uint8Array|null} [delta_report] CHIDDeviceInputReport delta_report
         * @property {number|null} [delta_report_size] CHIDDeviceInputReport delta_report_size
         * @property {number|null} [delta_report_crc] CHIDDeviceInputReport delta_report_crc
         */
    
        /**
         * Constructs a new CHIDDeviceInputReport.
         * @exports CHIDDeviceInputReport
         * @classdesc Represents a CHIDDeviceInputReport.
         * @implements ICHIDDeviceInputReport
         * @constructor
         * @param {ICHIDDeviceInputReport=} [properties] Properties to set
         */
        function CHIDDeviceInputReport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CHIDDeviceInputReport full_report.
         * @member {Uint8Array} full_report
         * @memberof CHIDDeviceInputReport
         * @instance
         */
        CHIDDeviceInputReport.prototype.full_report = $util.newBuffer([]);
    
        /**
         * CHIDDeviceInputReport delta_report.
         * @member {Uint8Array} delta_report
         * @memberof CHIDDeviceInputReport
         * @instance
         */
        CHIDDeviceInputReport.prototype.delta_report = $util.newBuffer([]);
    
        /**
         * CHIDDeviceInputReport delta_report_size.
         * @member {number} delta_report_size
         * @memberof CHIDDeviceInputReport
         * @instance
         */
        CHIDDeviceInputReport.prototype.delta_report_size = 0;
    
        /**
         * CHIDDeviceInputReport delta_report_crc.
         * @member {number} delta_report_crc
         * @memberof CHIDDeviceInputReport
         * @instance
         */
        CHIDDeviceInputReport.prototype.delta_report_crc = 0;
    
        /**
         * Creates a new CHIDDeviceInputReport instance using the specified properties.
         * @function create
         * @memberof CHIDDeviceInputReport
         * @static
         * @param {ICHIDDeviceInputReport=} [properties] Properties to set
         * @returns {CHIDDeviceInputReport} CHIDDeviceInputReport instance
         */
        CHIDDeviceInputReport.create = function create(properties) {
            return new CHIDDeviceInputReport(properties);
        };
    
        /**
         * Encodes the specified CHIDDeviceInputReport message. Does not implicitly {@link CHIDDeviceInputReport.verify|verify} messages.
         * @function encode
         * @memberof CHIDDeviceInputReport
         * @static
         * @param {ICHIDDeviceInputReport} message CHIDDeviceInputReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHIDDeviceInputReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.full_report != null && message.hasOwnProperty("full_report"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.full_report);
            if (message.delta_report != null && message.hasOwnProperty("delta_report"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.delta_report);
            if (message.delta_report_size != null && message.hasOwnProperty("delta_report_size"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.delta_report_size);
            if (message.delta_report_crc != null && message.hasOwnProperty("delta_report_crc"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.delta_report_crc);
            return writer;
        };
    
        /**
         * Encodes the specified CHIDDeviceInputReport message, length delimited. Does not implicitly {@link CHIDDeviceInputReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CHIDDeviceInputReport
         * @static
         * @param {ICHIDDeviceInputReport} message CHIDDeviceInputReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHIDDeviceInputReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CHIDDeviceInputReport message from the specified reader or buffer.
         * @function decode
         * @memberof CHIDDeviceInputReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CHIDDeviceInputReport} CHIDDeviceInputReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHIDDeviceInputReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDDeviceInputReport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.full_report = reader.bytes();
                    break;
                case 2:
                    message.delta_report = reader.bytes();
                    break;
                case 3:
                    message.delta_report_size = reader.uint32();
                    break;
                case 4:
                    message.delta_report_crc = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CHIDDeviceInputReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CHIDDeviceInputReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CHIDDeviceInputReport} CHIDDeviceInputReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHIDDeviceInputReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CHIDDeviceInputReport message.
         * @function verify
         * @memberof CHIDDeviceInputReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CHIDDeviceInputReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.full_report != null && message.hasOwnProperty("full_report"))
                if (!(message.full_report && typeof message.full_report.length === "number" || $util.isString(message.full_report)))
                    return "full_report: buffer expected";
            if (message.delta_report != null && message.hasOwnProperty("delta_report"))
                if (!(message.delta_report && typeof message.delta_report.length === "number" || $util.isString(message.delta_report)))
                    return "delta_report: buffer expected";
            if (message.delta_report_size != null && message.hasOwnProperty("delta_report_size"))
                if (!$util.isInteger(message.delta_report_size))
                    return "delta_report_size: integer expected";
            if (message.delta_report_crc != null && message.hasOwnProperty("delta_report_crc"))
                if (!$util.isInteger(message.delta_report_crc))
                    return "delta_report_crc: integer expected";
            return null;
        };
    
        /**
         * Creates a CHIDDeviceInputReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CHIDDeviceInputReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CHIDDeviceInputReport} CHIDDeviceInputReport
         */
        CHIDDeviceInputReport.fromObject = function fromObject(object) {
            if (object instanceof $root.CHIDDeviceInputReport)
                return object;
            var message = new $root.CHIDDeviceInputReport();
            if (object.full_report != null)
                if (typeof object.full_report === "string")
                    $util.base64.decode(object.full_report, message.full_report = $util.newBuffer($util.base64.length(object.full_report)), 0);
                else if (object.full_report.length)
                    message.full_report = object.full_report;
            if (object.delta_report != null)
                if (typeof object.delta_report === "string")
                    $util.base64.decode(object.delta_report, message.delta_report = $util.newBuffer($util.base64.length(object.delta_report)), 0);
                else if (object.delta_report.length)
                    message.delta_report = object.delta_report;
            if (object.delta_report_size != null)
                message.delta_report_size = object.delta_report_size >>> 0;
            if (object.delta_report_crc != null)
                message.delta_report_crc = object.delta_report_crc >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CHIDDeviceInputReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CHIDDeviceInputReport
         * @static
         * @param {CHIDDeviceInputReport} message CHIDDeviceInputReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CHIDDeviceInputReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.full_report = "";
                else {
                    object.full_report = [];
                    if (options.bytes !== Array)
                        object.full_report = $util.newBuffer(object.full_report);
                }
                if (options.bytes === String)
                    object.delta_report = "";
                else {
                    object.delta_report = [];
                    if (options.bytes !== Array)
                        object.delta_report = $util.newBuffer(object.delta_report);
                }
                object.delta_report_size = 0;
                object.delta_report_crc = 0;
            }
            if (message.full_report != null && message.hasOwnProperty("full_report"))
                object.full_report = options.bytes === String ? $util.base64.encode(message.full_report, 0, message.full_report.length) : options.bytes === Array ? Array.prototype.slice.call(message.full_report) : message.full_report;
            if (message.delta_report != null && message.hasOwnProperty("delta_report"))
                object.delta_report = options.bytes === String ? $util.base64.encode(message.delta_report, 0, message.delta_report.length) : options.bytes === Array ? Array.prototype.slice.call(message.delta_report) : message.delta_report;
            if (message.delta_report_size != null && message.hasOwnProperty("delta_report_size"))
                object.delta_report_size = message.delta_report_size;
            if (message.delta_report_crc != null && message.hasOwnProperty("delta_report_crc"))
                object.delta_report_crc = message.delta_report_crc;
            return object;
        };
    
        /**
         * Converts this CHIDDeviceInputReport to JSON.
         * @function toJSON
         * @memberof CHIDDeviceInputReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CHIDDeviceInputReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CHIDDeviceInputReport;
    })();
    
    $root.CHIDMessageToRemote = (function() {
    
        /**
         * Properties of a CHIDMessageToRemote.
         * @exports ICHIDMessageToRemote
         * @interface ICHIDMessageToRemote
         * @property {number|null} [request_id] CHIDMessageToRemote request_id
         * @property {CHIDMessageToRemote.IDeviceOpen|null} [device_open] CHIDMessageToRemote device_open
         * @property {CHIDMessageToRemote.IDeviceClose|null} [device_close] CHIDMessageToRemote device_close
         * @property {CHIDMessageToRemote.IDeviceWrite|null} [device_write] CHIDMessageToRemote device_write
         * @property {CHIDMessageToRemote.IDeviceRead|null} [device_read] CHIDMessageToRemote device_read
         * @property {CHIDMessageToRemote.IDeviceSendFeatureReport|null} [device_send_feature_report] CHIDMessageToRemote device_send_feature_report
         * @property {CHIDMessageToRemote.IDeviceGetFeatureReport|null} [device_get_feature_report] CHIDMessageToRemote device_get_feature_report
         * @property {CHIDMessageToRemote.IDeviceGetVendorString|null} [device_get_vendor_string] CHIDMessageToRemote device_get_vendor_string
         * @property {CHIDMessageToRemote.IDeviceGetProductString|null} [device_get_product_string] CHIDMessageToRemote device_get_product_string
         * @property {CHIDMessageToRemote.IDeviceGetSerialNumberString|null} [device_get_serial_number_string] CHIDMessageToRemote device_get_serial_number_string
         * @property {CHIDMessageToRemote.IDeviceStartInputReports|null} [device_start_input_reports] CHIDMessageToRemote device_start_input_reports
         * @property {CHIDMessageToRemote.IDeviceRequestFullReport|null} [device_request_full_report] CHIDMessageToRemote device_request_full_report
         * @property {CHIDMessageToRemote.IDeviceDisconnect|null} [device_disconnect] CHIDMessageToRemote device_disconnect
         */
    
        /**
         * Constructs a new CHIDMessageToRemote.
         * @exports CHIDMessageToRemote
         * @classdesc Represents a CHIDMessageToRemote.
         * @implements ICHIDMessageToRemote
         * @constructor
         * @param {ICHIDMessageToRemote=} [properties] Properties to set
         */
        function CHIDMessageToRemote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CHIDMessageToRemote request_id.
         * @member {number} request_id
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.request_id = 0;
    
        /**
         * CHIDMessageToRemote device_open.
         * @member {CHIDMessageToRemote.IDeviceOpen|null|undefined} device_open
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_open = null;
    
        /**
         * CHIDMessageToRemote device_close.
         * @member {CHIDMessageToRemote.IDeviceClose|null|undefined} device_close
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_close = null;
    
        /**
         * CHIDMessageToRemote device_write.
         * @member {CHIDMessageToRemote.IDeviceWrite|null|undefined} device_write
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_write = null;
    
        /**
         * CHIDMessageToRemote device_read.
         * @member {CHIDMessageToRemote.IDeviceRead|null|undefined} device_read
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_read = null;
    
        /**
         * CHIDMessageToRemote device_send_feature_report.
         * @member {CHIDMessageToRemote.IDeviceSendFeatureReport|null|undefined} device_send_feature_report
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_send_feature_report = null;
    
        /**
         * CHIDMessageToRemote device_get_feature_report.
         * @member {CHIDMessageToRemote.IDeviceGetFeatureReport|null|undefined} device_get_feature_report
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_get_feature_report = null;
    
        /**
         * CHIDMessageToRemote device_get_vendor_string.
         * @member {CHIDMessageToRemote.IDeviceGetVendorString|null|undefined} device_get_vendor_string
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_get_vendor_string = null;
    
        /**
         * CHIDMessageToRemote device_get_product_string.
         * @member {CHIDMessageToRemote.IDeviceGetProductString|null|undefined} device_get_product_string
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_get_product_string = null;
    
        /**
         * CHIDMessageToRemote device_get_serial_number_string.
         * @member {CHIDMessageToRemote.IDeviceGetSerialNumberString|null|undefined} device_get_serial_number_string
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_get_serial_number_string = null;
    
        /**
         * CHIDMessageToRemote device_start_input_reports.
         * @member {CHIDMessageToRemote.IDeviceStartInputReports|null|undefined} device_start_input_reports
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_start_input_reports = null;
    
        /**
         * CHIDMessageToRemote device_request_full_report.
         * @member {CHIDMessageToRemote.IDeviceRequestFullReport|null|undefined} device_request_full_report
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_request_full_report = null;
    
        /**
         * CHIDMessageToRemote device_disconnect.
         * @member {CHIDMessageToRemote.IDeviceDisconnect|null|undefined} device_disconnect
         * @memberof CHIDMessageToRemote
         * @instance
         */
        CHIDMessageToRemote.prototype.device_disconnect = null;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * CHIDMessageToRemote command.
         * @member {"device_open"|"device_close"|"device_write"|"device_read"|"device_send_feature_report"|"device_get_feature_report"|"device_get_vendor_string"|"device_get_product_string"|"device_get_serial_number_string"|"device_start_input_reports"|"device_request_full_report"|"device_disconnect"|undefined} command
         * @memberof CHIDMessageToRemote
         * @instance
         */
        Object.defineProperty(CHIDMessageToRemote.prototype, "command", {
            get: $util.oneOfGetter($oneOfFields = ["device_open", "device_close", "device_write", "device_read", "device_send_feature_report", "device_get_feature_report", "device_get_vendor_string", "device_get_product_string", "device_get_serial_number_string", "device_start_input_reports", "device_request_full_report", "device_disconnect"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new CHIDMessageToRemote instance using the specified properties.
         * @function create
         * @memberof CHIDMessageToRemote
         * @static
         * @param {ICHIDMessageToRemote=} [properties] Properties to set
         * @returns {CHIDMessageToRemote} CHIDMessageToRemote instance
         */
        CHIDMessageToRemote.create = function create(properties) {
            return new CHIDMessageToRemote(properties);
        };
    
        /**
         * Encodes the specified CHIDMessageToRemote message. Does not implicitly {@link CHIDMessageToRemote.verify|verify} messages.
         * @function encode
         * @memberof CHIDMessageToRemote
         * @static
         * @param {ICHIDMessageToRemote} message CHIDMessageToRemote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHIDMessageToRemote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.request_id);
            if (message.device_open != null && message.hasOwnProperty("device_open"))
                $root.CHIDMessageToRemote.DeviceOpen.encode(message.device_open, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.device_close != null && message.hasOwnProperty("device_close"))
                $root.CHIDMessageToRemote.DeviceClose.encode(message.device_close, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.device_write != null && message.hasOwnProperty("device_write"))
                $root.CHIDMessageToRemote.DeviceWrite.encode(message.device_write, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.device_read != null && message.hasOwnProperty("device_read"))
                $root.CHIDMessageToRemote.DeviceRead.encode(message.device_read, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.device_send_feature_report != null && message.hasOwnProperty("device_send_feature_report"))
                $root.CHIDMessageToRemote.DeviceSendFeatureReport.encode(message.device_send_feature_report, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.device_get_feature_report != null && message.hasOwnProperty("device_get_feature_report"))
                $root.CHIDMessageToRemote.DeviceGetFeatureReport.encode(message.device_get_feature_report, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.device_get_vendor_string != null && message.hasOwnProperty("device_get_vendor_string"))
                $root.CHIDMessageToRemote.DeviceGetVendorString.encode(message.device_get_vendor_string, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.device_get_product_string != null && message.hasOwnProperty("device_get_product_string"))
                $root.CHIDMessageToRemote.DeviceGetProductString.encode(message.device_get_product_string, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.device_get_serial_number_string != null && message.hasOwnProperty("device_get_serial_number_string"))
                $root.CHIDMessageToRemote.DeviceGetSerialNumberString.encode(message.device_get_serial_number_string, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.device_start_input_reports != null && message.hasOwnProperty("device_start_input_reports"))
                $root.CHIDMessageToRemote.DeviceStartInputReports.encode(message.device_start_input_reports, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.device_request_full_report != null && message.hasOwnProperty("device_request_full_report"))
                $root.CHIDMessageToRemote.DeviceRequestFullReport.encode(message.device_request_full_report, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.device_disconnect != null && message.hasOwnProperty("device_disconnect"))
                $root.CHIDMessageToRemote.DeviceDisconnect.encode(message.device_disconnect, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CHIDMessageToRemote message, length delimited. Does not implicitly {@link CHIDMessageToRemote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CHIDMessageToRemote
         * @static
         * @param {ICHIDMessageToRemote} message CHIDMessageToRemote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHIDMessageToRemote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CHIDMessageToRemote message from the specified reader or buffer.
         * @function decode
         * @memberof CHIDMessageToRemote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CHIDMessageToRemote} CHIDMessageToRemote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHIDMessageToRemote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.request_id = reader.uint32();
                    break;
                case 2:
                    message.device_open = $root.CHIDMessageToRemote.DeviceOpen.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.device_close = $root.CHIDMessageToRemote.DeviceClose.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.device_write = $root.CHIDMessageToRemote.DeviceWrite.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.device_read = $root.CHIDMessageToRemote.DeviceRead.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.device_send_feature_report = $root.CHIDMessageToRemote.DeviceSendFeatureReport.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.device_get_feature_report = $root.CHIDMessageToRemote.DeviceGetFeatureReport.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.device_get_vendor_string = $root.CHIDMessageToRemote.DeviceGetVendorString.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.device_get_product_string = $root.CHIDMessageToRemote.DeviceGetProductString.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.device_get_serial_number_string = $root.CHIDMessageToRemote.DeviceGetSerialNumberString.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.device_start_input_reports = $root.CHIDMessageToRemote.DeviceStartInputReports.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.device_request_full_report = $root.CHIDMessageToRemote.DeviceRequestFullReport.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.device_disconnect = $root.CHIDMessageToRemote.DeviceDisconnect.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CHIDMessageToRemote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CHIDMessageToRemote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CHIDMessageToRemote} CHIDMessageToRemote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHIDMessageToRemote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CHIDMessageToRemote message.
         * @function verify
         * @memberof CHIDMessageToRemote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CHIDMessageToRemote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                if (!$util.isInteger(message.request_id))
                    return "request_id: integer expected";
            if (message.device_open != null && message.hasOwnProperty("device_open")) {
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceOpen.verify(message.device_open);
                    if (error)
                        return "device_open." + error;
                }
            }
            if (message.device_close != null && message.hasOwnProperty("device_close")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceClose.verify(message.device_close);
                    if (error)
                        return "device_close." + error;
                }
            }
            if (message.device_write != null && message.hasOwnProperty("device_write")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceWrite.verify(message.device_write);
                    if (error)
                        return "device_write." + error;
                }
            }
            if (message.device_read != null && message.hasOwnProperty("device_read")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceRead.verify(message.device_read);
                    if (error)
                        return "device_read." + error;
                }
            }
            if (message.device_send_feature_report != null && message.hasOwnProperty("device_send_feature_report")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceSendFeatureReport.verify(message.device_send_feature_report);
                    if (error)
                        return "device_send_feature_report." + error;
                }
            }
            if (message.device_get_feature_report != null && message.hasOwnProperty("device_get_feature_report")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceGetFeatureReport.verify(message.device_get_feature_report);
                    if (error)
                        return "device_get_feature_report." + error;
                }
            }
            if (message.device_get_vendor_string != null && message.hasOwnProperty("device_get_vendor_string")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceGetVendorString.verify(message.device_get_vendor_string);
                    if (error)
                        return "device_get_vendor_string." + error;
                }
            }
            if (message.device_get_product_string != null && message.hasOwnProperty("device_get_product_string")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceGetProductString.verify(message.device_get_product_string);
                    if (error)
                        return "device_get_product_string." + error;
                }
            }
            if (message.device_get_serial_number_string != null && message.hasOwnProperty("device_get_serial_number_string")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceGetSerialNumberString.verify(message.device_get_serial_number_string);
                    if (error)
                        return "device_get_serial_number_string." + error;
                }
            }
            if (message.device_start_input_reports != null && message.hasOwnProperty("device_start_input_reports")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceStartInputReports.verify(message.device_start_input_reports);
                    if (error)
                        return "device_start_input_reports." + error;
                }
            }
            if (message.device_request_full_report != null && message.hasOwnProperty("device_request_full_report")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceRequestFullReport.verify(message.device_request_full_report);
                    if (error)
                        return "device_request_full_report." + error;
                }
            }
            if (message.device_disconnect != null && message.hasOwnProperty("device_disconnect")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageToRemote.DeviceDisconnect.verify(message.device_disconnect);
                    if (error)
                        return "device_disconnect." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CHIDMessageToRemote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CHIDMessageToRemote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CHIDMessageToRemote} CHIDMessageToRemote
         */
        CHIDMessageToRemote.fromObject = function fromObject(object) {
            if (object instanceof $root.CHIDMessageToRemote)
                return object;
            var message = new $root.CHIDMessageToRemote();
            if (object.request_id != null)
                message.request_id = object.request_id >>> 0;
            if (object.device_open != null) {
                if (typeof object.device_open !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_open: object expected");
                message.device_open = $root.CHIDMessageToRemote.DeviceOpen.fromObject(object.device_open);
            }
            if (object.device_close != null) {
                if (typeof object.device_close !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_close: object expected");
                message.device_close = $root.CHIDMessageToRemote.DeviceClose.fromObject(object.device_close);
            }
            if (object.device_write != null) {
                if (typeof object.device_write !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_write: object expected");
                message.device_write = $root.CHIDMessageToRemote.DeviceWrite.fromObject(object.device_write);
            }
            if (object.device_read != null) {
                if (typeof object.device_read !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_read: object expected");
                message.device_read = $root.CHIDMessageToRemote.DeviceRead.fromObject(object.device_read);
            }
            if (object.device_send_feature_report != null) {
                if (typeof object.device_send_feature_report !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_send_feature_report: object expected");
                message.device_send_feature_report = $root.CHIDMessageToRemote.DeviceSendFeatureReport.fromObject(object.device_send_feature_report);
            }
            if (object.device_get_feature_report != null) {
                if (typeof object.device_get_feature_report !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_get_feature_report: object expected");
                message.device_get_feature_report = $root.CHIDMessageToRemote.DeviceGetFeatureReport.fromObject(object.device_get_feature_report);
            }
            if (object.device_get_vendor_string != null) {
                if (typeof object.device_get_vendor_string !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_get_vendor_string: object expected");
                message.device_get_vendor_string = $root.CHIDMessageToRemote.DeviceGetVendorString.fromObject(object.device_get_vendor_string);
            }
            if (object.device_get_product_string != null) {
                if (typeof object.device_get_product_string !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_get_product_string: object expected");
                message.device_get_product_string = $root.CHIDMessageToRemote.DeviceGetProductString.fromObject(object.device_get_product_string);
            }
            if (object.device_get_serial_number_string != null) {
                if (typeof object.device_get_serial_number_string !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_get_serial_number_string: object expected");
                message.device_get_serial_number_string = $root.CHIDMessageToRemote.DeviceGetSerialNumberString.fromObject(object.device_get_serial_number_string);
            }
            if (object.device_start_input_reports != null) {
                if (typeof object.device_start_input_reports !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_start_input_reports: object expected");
                message.device_start_input_reports = $root.CHIDMessageToRemote.DeviceStartInputReports.fromObject(object.device_start_input_reports);
            }
            if (object.device_request_full_report != null) {
                if (typeof object.device_request_full_report !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_request_full_report: object expected");
                message.device_request_full_report = $root.CHIDMessageToRemote.DeviceRequestFullReport.fromObject(object.device_request_full_report);
            }
            if (object.device_disconnect != null) {
                if (typeof object.device_disconnect !== "object")
                    throw TypeError(".CHIDMessageToRemote.device_disconnect: object expected");
                message.device_disconnect = $root.CHIDMessageToRemote.DeviceDisconnect.fromObject(object.device_disconnect);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CHIDMessageToRemote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CHIDMessageToRemote
         * @static
         * @param {CHIDMessageToRemote} message CHIDMessageToRemote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CHIDMessageToRemote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.request_id = 0;
            if (message.request_id != null && message.hasOwnProperty("request_id"))
                object.request_id = message.request_id;
            if (message.device_open != null && message.hasOwnProperty("device_open")) {
                object.device_open = $root.CHIDMessageToRemote.DeviceOpen.toObject(message.device_open, options);
                if (options.oneofs)
                    object.command = "device_open";
            }
            if (message.device_close != null && message.hasOwnProperty("device_close")) {
                object.device_close = $root.CHIDMessageToRemote.DeviceClose.toObject(message.device_close, options);
                if (options.oneofs)
                    object.command = "device_close";
            }
            if (message.device_write != null && message.hasOwnProperty("device_write")) {
                object.device_write = $root.CHIDMessageToRemote.DeviceWrite.toObject(message.device_write, options);
                if (options.oneofs)
                    object.command = "device_write";
            }
            if (message.device_read != null && message.hasOwnProperty("device_read")) {
                object.device_read = $root.CHIDMessageToRemote.DeviceRead.toObject(message.device_read, options);
                if (options.oneofs)
                    object.command = "device_read";
            }
            if (message.device_send_feature_report != null && message.hasOwnProperty("device_send_feature_report")) {
                object.device_send_feature_report = $root.CHIDMessageToRemote.DeviceSendFeatureReport.toObject(message.device_send_feature_report, options);
                if (options.oneofs)
                    object.command = "device_send_feature_report";
            }
            if (message.device_get_feature_report != null && message.hasOwnProperty("device_get_feature_report")) {
                object.device_get_feature_report = $root.CHIDMessageToRemote.DeviceGetFeatureReport.toObject(message.device_get_feature_report, options);
                if (options.oneofs)
                    object.command = "device_get_feature_report";
            }
            if (message.device_get_vendor_string != null && message.hasOwnProperty("device_get_vendor_string")) {
                object.device_get_vendor_string = $root.CHIDMessageToRemote.DeviceGetVendorString.toObject(message.device_get_vendor_string, options);
                if (options.oneofs)
                    object.command = "device_get_vendor_string";
            }
            if (message.device_get_product_string != null && message.hasOwnProperty("device_get_product_string")) {
                object.device_get_product_string = $root.CHIDMessageToRemote.DeviceGetProductString.toObject(message.device_get_product_string, options);
                if (options.oneofs)
                    object.command = "device_get_product_string";
            }
            if (message.device_get_serial_number_string != null && message.hasOwnProperty("device_get_serial_number_string")) {
                object.device_get_serial_number_string = $root.CHIDMessageToRemote.DeviceGetSerialNumberString.toObject(message.device_get_serial_number_string, options);
                if (options.oneofs)
                    object.command = "device_get_serial_number_string";
            }
            if (message.device_start_input_reports != null && message.hasOwnProperty("device_start_input_reports")) {
                object.device_start_input_reports = $root.CHIDMessageToRemote.DeviceStartInputReports.toObject(message.device_start_input_reports, options);
                if (options.oneofs)
                    object.command = "device_start_input_reports";
            }
            if (message.device_request_full_report != null && message.hasOwnProperty("device_request_full_report")) {
                object.device_request_full_report = $root.CHIDMessageToRemote.DeviceRequestFullReport.toObject(message.device_request_full_report, options);
                if (options.oneofs)
                    object.command = "device_request_full_report";
            }
            if (message.device_disconnect != null && message.hasOwnProperty("device_disconnect")) {
                object.device_disconnect = $root.CHIDMessageToRemote.DeviceDisconnect.toObject(message.device_disconnect, options);
                if (options.oneofs)
                    object.command = "device_disconnect";
            }
            return object;
        };
    
        /**
         * Converts this CHIDMessageToRemote to JSON.
         * @function toJSON
         * @memberof CHIDMessageToRemote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CHIDMessageToRemote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CHIDMessageToRemote.DeviceOpen = (function() {
    
            /**
             * Properties of a DeviceOpen.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceOpen
             * @property {ICHIDDeviceInfo|null} [info] DeviceOpen info
             */
    
            /**
             * Constructs a new DeviceOpen.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceOpen.
             * @implements IDeviceOpen
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceOpen=} [properties] Properties to set
             */
            function DeviceOpen(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceOpen info.
             * @member {ICHIDDeviceInfo|null|undefined} info
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @instance
             */
            DeviceOpen.prototype.info = null;
    
            /**
             * Creates a new DeviceOpen instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @static
             * @param {CHIDMessageToRemote.IDeviceOpen=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceOpen} DeviceOpen instance
             */
            DeviceOpen.create = function create(properties) {
                return new DeviceOpen(properties);
            };
    
            /**
             * Encodes the specified DeviceOpen message. Does not implicitly {@link CHIDMessageToRemote.DeviceOpen.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @static
             * @param {CHIDMessageToRemote.IDeviceOpen} message DeviceOpen message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceOpen.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.info != null && message.hasOwnProperty("info"))
                    $root.CHIDDeviceInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified DeviceOpen message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceOpen.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @static
             * @param {CHIDMessageToRemote.IDeviceOpen} message DeviceOpen message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceOpen.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceOpen message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceOpen} DeviceOpen
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceOpen.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceOpen();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.info = $root.CHIDDeviceInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceOpen message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceOpen} DeviceOpen
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceOpen.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceOpen message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceOpen.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.info != null && message.hasOwnProperty("info")) {
                    var error = $root.CHIDDeviceInfo.verify(message.info);
                    if (error)
                        return "info." + error;
                }
                return null;
            };
    
            /**
             * Creates a DeviceOpen message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceOpen} DeviceOpen
             */
            DeviceOpen.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceOpen)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceOpen();
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".CHIDMessageToRemote.DeviceOpen.info: object expected");
                    message.info = $root.CHIDDeviceInfo.fromObject(object.info);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceOpen message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @static
             * @param {CHIDMessageToRemote.DeviceOpen} message DeviceOpen
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceOpen.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.info = null;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = $root.CHIDDeviceInfo.toObject(message.info, options);
                return object;
            };
    
            /**
             * Converts this DeviceOpen to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceOpen
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceOpen.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceOpen;
        })();
    
        CHIDMessageToRemote.DeviceClose = (function() {
    
            /**
             * Properties of a DeviceClose.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceClose
             * @property {number|null} [device] DeviceClose device
             */
    
            /**
             * Constructs a new DeviceClose.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceClose.
             * @implements IDeviceClose
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceClose=} [properties] Properties to set
             */
            function DeviceClose(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceClose device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceClose
             * @instance
             */
            DeviceClose.prototype.device = 0;
    
            /**
             * Creates a new DeviceClose instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceClose
             * @static
             * @param {CHIDMessageToRemote.IDeviceClose=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceClose} DeviceClose instance
             */
            DeviceClose.create = function create(properties) {
                return new DeviceClose(properties);
            };
    
            /**
             * Encodes the specified DeviceClose message. Does not implicitly {@link CHIDMessageToRemote.DeviceClose.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceClose
             * @static
             * @param {CHIDMessageToRemote.IDeviceClose} message DeviceClose message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceClose.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceClose message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceClose.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceClose
             * @static
             * @param {CHIDMessageToRemote.IDeviceClose} message DeviceClose message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceClose.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceClose message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceClose
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceClose} DeviceClose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceClose.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceClose();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceClose message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceClose
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceClose} DeviceClose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceClose.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceClose message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceClose
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceClose.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                return null;
            };
    
            /**
             * Creates a DeviceClose message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceClose
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceClose} DeviceClose
             */
            DeviceClose.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceClose)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceClose();
                if (object.device != null)
                    message.device = object.device >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceClose message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceClose
             * @static
             * @param {CHIDMessageToRemote.DeviceClose} message DeviceClose
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceClose.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.device = 0;
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                return object;
            };
    
            /**
             * Converts this DeviceClose to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceClose
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceClose.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceClose;
        })();
    
        CHIDMessageToRemote.DeviceWrite = (function() {
    
            /**
             * Properties of a DeviceWrite.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceWrite
             * @property {number|null} [device] DeviceWrite device
             * @property {Uint8Array|null} [data] DeviceWrite data
             */
    
            /**
             * Constructs a new DeviceWrite.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceWrite.
             * @implements IDeviceWrite
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceWrite=} [properties] Properties to set
             */
            function DeviceWrite(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceWrite device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @instance
             */
            DeviceWrite.prototype.device = 0;
    
            /**
             * DeviceWrite data.
             * @member {Uint8Array} data
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @instance
             */
            DeviceWrite.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new DeviceWrite instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @static
             * @param {CHIDMessageToRemote.IDeviceWrite=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceWrite} DeviceWrite instance
             */
            DeviceWrite.create = function create(properties) {
                return new DeviceWrite(properties);
            };
    
            /**
             * Encodes the specified DeviceWrite message. Does not implicitly {@link CHIDMessageToRemote.DeviceWrite.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @static
             * @param {CHIDMessageToRemote.IDeviceWrite} message DeviceWrite message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceWrite.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceWrite message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceWrite.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @static
             * @param {CHIDMessageToRemote.IDeviceWrite} message DeviceWrite message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceWrite.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceWrite message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceWrite} DeviceWrite
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceWrite.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceWrite();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceWrite message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceWrite} DeviceWrite
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceWrite.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceWrite message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceWrite.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a DeviceWrite message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceWrite} DeviceWrite
             */
            DeviceWrite.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceWrite)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceWrite();
                if (object.device != null)
                    message.device = object.device >>> 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceWrite message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @static
             * @param {CHIDMessageToRemote.DeviceWrite} message DeviceWrite
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceWrite.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.device = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this DeviceWrite to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceWrite
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceWrite.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceWrite;
        })();
    
        CHIDMessageToRemote.DeviceRead = (function() {
    
            /**
             * Properties of a DeviceRead.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceRead
             * @property {number|null} [device] DeviceRead device
             * @property {number|null} [length] DeviceRead length
             * @property {number|null} [timeout_ms] DeviceRead timeout_ms
             */
    
            /**
             * Constructs a new DeviceRead.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceRead.
             * @implements IDeviceRead
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceRead=} [properties] Properties to set
             */
            function DeviceRead(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceRead device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceRead
             * @instance
             */
            DeviceRead.prototype.device = 0;
    
            /**
             * DeviceRead length.
             * @member {number} length
             * @memberof CHIDMessageToRemote.DeviceRead
             * @instance
             */
            DeviceRead.prototype.length = 0;
    
            /**
             * DeviceRead timeout_ms.
             * @member {number} timeout_ms
             * @memberof CHIDMessageToRemote.DeviceRead
             * @instance
             */
            DeviceRead.prototype.timeout_ms = 0;
    
            /**
             * Creates a new DeviceRead instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceRead
             * @static
             * @param {CHIDMessageToRemote.IDeviceRead=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceRead} DeviceRead instance
             */
            DeviceRead.create = function create(properties) {
                return new DeviceRead(properties);
            };
    
            /**
             * Encodes the specified DeviceRead message. Does not implicitly {@link CHIDMessageToRemote.DeviceRead.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceRead
             * @static
             * @param {CHIDMessageToRemote.IDeviceRead} message DeviceRead message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceRead.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                if (message.length != null && message.hasOwnProperty("length"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.length);
                if (message.timeout_ms != null && message.hasOwnProperty("timeout_ms"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeout_ms);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceRead message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceRead.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceRead
             * @static
             * @param {CHIDMessageToRemote.IDeviceRead} message DeviceRead message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceRead.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceRead message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceRead
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceRead} DeviceRead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceRead.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceRead();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    case 2:
                        message.length = reader.uint32();
                        break;
                    case 3:
                        message.timeout_ms = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceRead message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceRead
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceRead} DeviceRead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceRead.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceRead message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceRead
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceRead.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                if (message.length != null && message.hasOwnProperty("length"))
                    if (!$util.isInteger(message.length))
                        return "length: integer expected";
                if (message.timeout_ms != null && message.hasOwnProperty("timeout_ms"))
                    if (!$util.isInteger(message.timeout_ms))
                        return "timeout_ms: integer expected";
                return null;
            };
    
            /**
             * Creates a DeviceRead message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceRead
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceRead} DeviceRead
             */
            DeviceRead.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceRead)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceRead();
                if (object.device != null)
                    message.device = object.device >>> 0;
                if (object.length != null)
                    message.length = object.length >>> 0;
                if (object.timeout_ms != null)
                    message.timeout_ms = object.timeout_ms | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceRead message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceRead
             * @static
             * @param {CHIDMessageToRemote.DeviceRead} message DeviceRead
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceRead.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.device = 0;
                    object.length = 0;
                    object.timeout_ms = 0;
                }
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                if (message.length != null && message.hasOwnProperty("length"))
                    object.length = message.length;
                if (message.timeout_ms != null && message.hasOwnProperty("timeout_ms"))
                    object.timeout_ms = message.timeout_ms;
                return object;
            };
    
            /**
             * Converts this DeviceRead to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceRead
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceRead.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceRead;
        })();
    
        CHIDMessageToRemote.DeviceSendFeatureReport = (function() {
    
            /**
             * Properties of a DeviceSendFeatureReport.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceSendFeatureReport
             * @property {number|null} [device] DeviceSendFeatureReport device
             * @property {Uint8Array|null} [data] DeviceSendFeatureReport data
             */
    
            /**
             * Constructs a new DeviceSendFeatureReport.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceSendFeatureReport.
             * @implements IDeviceSendFeatureReport
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceSendFeatureReport=} [properties] Properties to set
             */
            function DeviceSendFeatureReport(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceSendFeatureReport device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @instance
             */
            DeviceSendFeatureReport.prototype.device = 0;
    
            /**
             * DeviceSendFeatureReport data.
             * @member {Uint8Array} data
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @instance
             */
            DeviceSendFeatureReport.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new DeviceSendFeatureReport instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceSendFeatureReport=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceSendFeatureReport} DeviceSendFeatureReport instance
             */
            DeviceSendFeatureReport.create = function create(properties) {
                return new DeviceSendFeatureReport(properties);
            };
    
            /**
             * Encodes the specified DeviceSendFeatureReport message. Does not implicitly {@link CHIDMessageToRemote.DeviceSendFeatureReport.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceSendFeatureReport} message DeviceSendFeatureReport message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceSendFeatureReport.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceSendFeatureReport message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceSendFeatureReport.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceSendFeatureReport} message DeviceSendFeatureReport message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceSendFeatureReport.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceSendFeatureReport message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceSendFeatureReport} DeviceSendFeatureReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceSendFeatureReport.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceSendFeatureReport();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceSendFeatureReport message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceSendFeatureReport} DeviceSendFeatureReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceSendFeatureReport.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceSendFeatureReport message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceSendFeatureReport.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a DeviceSendFeatureReport message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceSendFeatureReport} DeviceSendFeatureReport
             */
            DeviceSendFeatureReport.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceSendFeatureReport)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceSendFeatureReport();
                if (object.device != null)
                    message.device = object.device >>> 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceSendFeatureReport message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @static
             * @param {CHIDMessageToRemote.DeviceSendFeatureReport} message DeviceSendFeatureReport
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceSendFeatureReport.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.device = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this DeviceSendFeatureReport to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceSendFeatureReport
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceSendFeatureReport.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceSendFeatureReport;
        })();
    
        CHIDMessageToRemote.DeviceGetFeatureReport = (function() {
    
            /**
             * Properties of a DeviceGetFeatureReport.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceGetFeatureReport
             * @property {number|null} [device] DeviceGetFeatureReport device
             * @property {Uint8Array|null} [report_number] DeviceGetFeatureReport report_number
             * @property {number|null} [length] DeviceGetFeatureReport length
             */
    
            /**
             * Constructs a new DeviceGetFeatureReport.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceGetFeatureReport.
             * @implements IDeviceGetFeatureReport
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceGetFeatureReport=} [properties] Properties to set
             */
            function DeviceGetFeatureReport(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceGetFeatureReport device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @instance
             */
            DeviceGetFeatureReport.prototype.device = 0;
    
            /**
             * DeviceGetFeatureReport report_number.
             * @member {Uint8Array} report_number
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @instance
             */
            DeviceGetFeatureReport.prototype.report_number = $util.newBuffer([]);
    
            /**
             * DeviceGetFeatureReport length.
             * @member {number} length
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @instance
             */
            DeviceGetFeatureReport.prototype.length = 0;
    
            /**
             * Creates a new DeviceGetFeatureReport instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetFeatureReport=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceGetFeatureReport} DeviceGetFeatureReport instance
             */
            DeviceGetFeatureReport.create = function create(properties) {
                return new DeviceGetFeatureReport(properties);
            };
    
            /**
             * Encodes the specified DeviceGetFeatureReport message. Does not implicitly {@link CHIDMessageToRemote.DeviceGetFeatureReport.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetFeatureReport} message DeviceGetFeatureReport message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceGetFeatureReport.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                if (message.report_number != null && message.hasOwnProperty("report_number"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.report_number);
                if (message.length != null && message.hasOwnProperty("length"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.length);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceGetFeatureReport message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceGetFeatureReport.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetFeatureReport} message DeviceGetFeatureReport message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceGetFeatureReport.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceGetFeatureReport message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceGetFeatureReport} DeviceGetFeatureReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceGetFeatureReport.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceGetFeatureReport();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    case 2:
                        message.report_number = reader.bytes();
                        break;
                    case 3:
                        message.length = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceGetFeatureReport message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceGetFeatureReport} DeviceGetFeatureReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceGetFeatureReport.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceGetFeatureReport message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceGetFeatureReport.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                if (message.report_number != null && message.hasOwnProperty("report_number"))
                    if (!(message.report_number && typeof message.report_number.length === "number" || $util.isString(message.report_number)))
                        return "report_number: buffer expected";
                if (message.length != null && message.hasOwnProperty("length"))
                    if (!$util.isInteger(message.length))
                        return "length: integer expected";
                return null;
            };
    
            /**
             * Creates a DeviceGetFeatureReport message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceGetFeatureReport} DeviceGetFeatureReport
             */
            DeviceGetFeatureReport.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceGetFeatureReport)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceGetFeatureReport();
                if (object.device != null)
                    message.device = object.device >>> 0;
                if (object.report_number != null)
                    if (typeof object.report_number === "string")
                        $util.base64.decode(object.report_number, message.report_number = $util.newBuffer($util.base64.length(object.report_number)), 0);
                    else if (object.report_number.length)
                        message.report_number = object.report_number;
                if (object.length != null)
                    message.length = object.length >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceGetFeatureReport message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @static
             * @param {CHIDMessageToRemote.DeviceGetFeatureReport} message DeviceGetFeatureReport
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceGetFeatureReport.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.device = 0;
                    if (options.bytes === String)
                        object.report_number = "";
                    else {
                        object.report_number = [];
                        if (options.bytes !== Array)
                            object.report_number = $util.newBuffer(object.report_number);
                    }
                    object.length = 0;
                }
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                if (message.report_number != null && message.hasOwnProperty("report_number"))
                    object.report_number = options.bytes === String ? $util.base64.encode(message.report_number, 0, message.report_number.length) : options.bytes === Array ? Array.prototype.slice.call(message.report_number) : message.report_number;
                if (message.length != null && message.hasOwnProperty("length"))
                    object.length = message.length;
                return object;
            };
    
            /**
             * Converts this DeviceGetFeatureReport to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceGetFeatureReport
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceGetFeatureReport.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceGetFeatureReport;
        })();
    
        CHIDMessageToRemote.DeviceGetVendorString = (function() {
    
            /**
             * Properties of a DeviceGetVendorString.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceGetVendorString
             * @property {number|null} [device] DeviceGetVendorString device
             */
    
            /**
             * Constructs a new DeviceGetVendorString.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceGetVendorString.
             * @implements IDeviceGetVendorString
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceGetVendorString=} [properties] Properties to set
             */
            function DeviceGetVendorString(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceGetVendorString device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @instance
             */
            DeviceGetVendorString.prototype.device = 0;
    
            /**
             * Creates a new DeviceGetVendorString instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetVendorString=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceGetVendorString} DeviceGetVendorString instance
             */
            DeviceGetVendorString.create = function create(properties) {
                return new DeviceGetVendorString(properties);
            };
    
            /**
             * Encodes the specified DeviceGetVendorString message. Does not implicitly {@link CHIDMessageToRemote.DeviceGetVendorString.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetVendorString} message DeviceGetVendorString message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceGetVendorString.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceGetVendorString message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceGetVendorString.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetVendorString} message DeviceGetVendorString message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceGetVendorString.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceGetVendorString message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceGetVendorString} DeviceGetVendorString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceGetVendorString.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceGetVendorString();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceGetVendorString message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceGetVendorString} DeviceGetVendorString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceGetVendorString.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceGetVendorString message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceGetVendorString.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                return null;
            };
    
            /**
             * Creates a DeviceGetVendorString message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceGetVendorString} DeviceGetVendorString
             */
            DeviceGetVendorString.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceGetVendorString)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceGetVendorString();
                if (object.device != null)
                    message.device = object.device >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceGetVendorString message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @static
             * @param {CHIDMessageToRemote.DeviceGetVendorString} message DeviceGetVendorString
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceGetVendorString.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.device = 0;
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                return object;
            };
    
            /**
             * Converts this DeviceGetVendorString to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceGetVendorString
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceGetVendorString.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceGetVendorString;
        })();
    
        CHIDMessageToRemote.DeviceGetProductString = (function() {
    
            /**
             * Properties of a DeviceGetProductString.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceGetProductString
             * @property {number|null} [device] DeviceGetProductString device
             */
    
            /**
             * Constructs a new DeviceGetProductString.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceGetProductString.
             * @implements IDeviceGetProductString
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceGetProductString=} [properties] Properties to set
             */
            function DeviceGetProductString(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceGetProductString device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @instance
             */
            DeviceGetProductString.prototype.device = 0;
    
            /**
             * Creates a new DeviceGetProductString instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetProductString=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceGetProductString} DeviceGetProductString instance
             */
            DeviceGetProductString.create = function create(properties) {
                return new DeviceGetProductString(properties);
            };
    
            /**
             * Encodes the specified DeviceGetProductString message. Does not implicitly {@link CHIDMessageToRemote.DeviceGetProductString.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetProductString} message DeviceGetProductString message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceGetProductString.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceGetProductString message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceGetProductString.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetProductString} message DeviceGetProductString message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceGetProductString.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceGetProductString message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceGetProductString} DeviceGetProductString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceGetProductString.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceGetProductString();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceGetProductString message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceGetProductString} DeviceGetProductString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceGetProductString.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceGetProductString message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceGetProductString.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                return null;
            };
    
            /**
             * Creates a DeviceGetProductString message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceGetProductString} DeviceGetProductString
             */
            DeviceGetProductString.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceGetProductString)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceGetProductString();
                if (object.device != null)
                    message.device = object.device >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceGetProductString message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @static
             * @param {CHIDMessageToRemote.DeviceGetProductString} message DeviceGetProductString
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceGetProductString.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.device = 0;
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                return object;
            };
    
            /**
             * Converts this DeviceGetProductString to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceGetProductString
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceGetProductString.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceGetProductString;
        })();
    
        CHIDMessageToRemote.DeviceGetSerialNumberString = (function() {
    
            /**
             * Properties of a DeviceGetSerialNumberString.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceGetSerialNumberString
             * @property {number|null} [device] DeviceGetSerialNumberString device
             */
    
            /**
             * Constructs a new DeviceGetSerialNumberString.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceGetSerialNumberString.
             * @implements IDeviceGetSerialNumberString
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceGetSerialNumberString=} [properties] Properties to set
             */
            function DeviceGetSerialNumberString(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceGetSerialNumberString device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @instance
             */
            DeviceGetSerialNumberString.prototype.device = 0;
    
            /**
             * Creates a new DeviceGetSerialNumberString instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetSerialNumberString=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceGetSerialNumberString} DeviceGetSerialNumberString instance
             */
            DeviceGetSerialNumberString.create = function create(properties) {
                return new DeviceGetSerialNumberString(properties);
            };
    
            /**
             * Encodes the specified DeviceGetSerialNumberString message. Does not implicitly {@link CHIDMessageToRemote.DeviceGetSerialNumberString.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetSerialNumberString} message DeviceGetSerialNumberString message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceGetSerialNumberString.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceGetSerialNumberString message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceGetSerialNumberString.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @static
             * @param {CHIDMessageToRemote.IDeviceGetSerialNumberString} message DeviceGetSerialNumberString message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceGetSerialNumberString.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceGetSerialNumberString message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceGetSerialNumberString} DeviceGetSerialNumberString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceGetSerialNumberString.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceGetSerialNumberString();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceGetSerialNumberString message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceGetSerialNumberString} DeviceGetSerialNumberString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceGetSerialNumberString.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceGetSerialNumberString message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceGetSerialNumberString.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                return null;
            };
    
            /**
             * Creates a DeviceGetSerialNumberString message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceGetSerialNumberString} DeviceGetSerialNumberString
             */
            DeviceGetSerialNumberString.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceGetSerialNumberString)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceGetSerialNumberString();
                if (object.device != null)
                    message.device = object.device >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceGetSerialNumberString message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @static
             * @param {CHIDMessageToRemote.DeviceGetSerialNumberString} message DeviceGetSerialNumberString
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceGetSerialNumberString.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.device = 0;
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                return object;
            };
    
            /**
             * Converts this DeviceGetSerialNumberString to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceGetSerialNumberString
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceGetSerialNumberString.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceGetSerialNumberString;
        })();
    
        CHIDMessageToRemote.DeviceStartInputReports = (function() {
    
            /**
             * Properties of a DeviceStartInputReports.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceStartInputReports
             * @property {number|null} [device] DeviceStartInputReports device
             * @property {number|null} [length] DeviceStartInputReports length
             */
    
            /**
             * Constructs a new DeviceStartInputReports.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceStartInputReports.
             * @implements IDeviceStartInputReports
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceStartInputReports=} [properties] Properties to set
             */
            function DeviceStartInputReports(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceStartInputReports device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @instance
             */
            DeviceStartInputReports.prototype.device = 0;
    
            /**
             * DeviceStartInputReports length.
             * @member {number} length
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @instance
             */
            DeviceStartInputReports.prototype.length = 0;
    
            /**
             * Creates a new DeviceStartInputReports instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @static
             * @param {CHIDMessageToRemote.IDeviceStartInputReports=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceStartInputReports} DeviceStartInputReports instance
             */
            DeviceStartInputReports.create = function create(properties) {
                return new DeviceStartInputReports(properties);
            };
    
            /**
             * Encodes the specified DeviceStartInputReports message. Does not implicitly {@link CHIDMessageToRemote.DeviceStartInputReports.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @static
             * @param {CHIDMessageToRemote.IDeviceStartInputReports} message DeviceStartInputReports message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceStartInputReports.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                if (message.length != null && message.hasOwnProperty("length"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.length);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceStartInputReports message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceStartInputReports.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @static
             * @param {CHIDMessageToRemote.IDeviceStartInputReports} message DeviceStartInputReports message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceStartInputReports.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceStartInputReports message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceStartInputReports} DeviceStartInputReports
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceStartInputReports.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceStartInputReports();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    case 2:
                        message.length = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceStartInputReports message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceStartInputReports} DeviceStartInputReports
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceStartInputReports.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceStartInputReports message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceStartInputReports.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                if (message.length != null && message.hasOwnProperty("length"))
                    if (!$util.isInteger(message.length))
                        return "length: integer expected";
                return null;
            };
    
            /**
             * Creates a DeviceStartInputReports message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceStartInputReports} DeviceStartInputReports
             */
            DeviceStartInputReports.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceStartInputReports)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceStartInputReports();
                if (object.device != null)
                    message.device = object.device >>> 0;
                if (object.length != null)
                    message.length = object.length >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceStartInputReports message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @static
             * @param {CHIDMessageToRemote.DeviceStartInputReports} message DeviceStartInputReports
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceStartInputReports.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.device = 0;
                    object.length = 0;
                }
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                if (message.length != null && message.hasOwnProperty("length"))
                    object.length = message.length;
                return object;
            };
    
            /**
             * Converts this DeviceStartInputReports to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceStartInputReports
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceStartInputReports.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceStartInputReports;
        })();
    
        CHIDMessageToRemote.DeviceRequestFullReport = (function() {
    
            /**
             * Properties of a DeviceRequestFullReport.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceRequestFullReport
             * @property {number|null} [device] DeviceRequestFullReport device
             */
    
            /**
             * Constructs a new DeviceRequestFullReport.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceRequestFullReport.
             * @implements IDeviceRequestFullReport
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceRequestFullReport=} [properties] Properties to set
             */
            function DeviceRequestFullReport(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceRequestFullReport device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @instance
             */
            DeviceRequestFullReport.prototype.device = 0;
    
            /**
             * Creates a new DeviceRequestFullReport instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceRequestFullReport=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceRequestFullReport} DeviceRequestFullReport instance
             */
            DeviceRequestFullReport.create = function create(properties) {
                return new DeviceRequestFullReport(properties);
            };
    
            /**
             * Encodes the specified DeviceRequestFullReport message. Does not implicitly {@link CHIDMessageToRemote.DeviceRequestFullReport.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceRequestFullReport} message DeviceRequestFullReport message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceRequestFullReport.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceRequestFullReport message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceRequestFullReport.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @static
             * @param {CHIDMessageToRemote.IDeviceRequestFullReport} message DeviceRequestFullReport message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceRequestFullReport.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceRequestFullReport message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceRequestFullReport} DeviceRequestFullReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceRequestFullReport.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceRequestFullReport();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceRequestFullReport message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceRequestFullReport} DeviceRequestFullReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceRequestFullReport.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceRequestFullReport message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceRequestFullReport.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                return null;
            };
    
            /**
             * Creates a DeviceRequestFullReport message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceRequestFullReport} DeviceRequestFullReport
             */
            DeviceRequestFullReport.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceRequestFullReport)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceRequestFullReport();
                if (object.device != null)
                    message.device = object.device >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceRequestFullReport message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @static
             * @param {CHIDMessageToRemote.DeviceRequestFullReport} message DeviceRequestFullReport
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceRequestFullReport.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.device = 0;
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                return object;
            };
    
            /**
             * Converts this DeviceRequestFullReport to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceRequestFullReport
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceRequestFullReport.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceRequestFullReport;
        })();
    
        CHIDMessageToRemote.DeviceDisconnect = (function() {
    
            /**
             * Properties of a DeviceDisconnect.
             * @memberof CHIDMessageToRemote
             * @interface IDeviceDisconnect
             * @property {number|null} [device] DeviceDisconnect device
             * @property {EHIDDeviceDisconnectMethod|null} [disconnectMethod] DeviceDisconnect disconnectMethod
             * @property {Uint8Array|null} [data] DeviceDisconnect data
             */
    
            /**
             * Constructs a new DeviceDisconnect.
             * @memberof CHIDMessageToRemote
             * @classdesc Represents a DeviceDisconnect.
             * @implements IDeviceDisconnect
             * @constructor
             * @param {CHIDMessageToRemote.IDeviceDisconnect=} [properties] Properties to set
             */
            function DeviceDisconnect(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceDisconnect device.
             * @member {number} device
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @instance
             */
            DeviceDisconnect.prototype.device = 0;
    
            /**
             * DeviceDisconnect disconnectMethod.
             * @member {EHIDDeviceDisconnectMethod} disconnectMethod
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @instance
             */
            DeviceDisconnect.prototype.disconnectMethod = 0;
    
            /**
             * DeviceDisconnect data.
             * @member {Uint8Array} data
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @instance
             */
            DeviceDisconnect.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new DeviceDisconnect instance using the specified properties.
             * @function create
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @static
             * @param {CHIDMessageToRemote.IDeviceDisconnect=} [properties] Properties to set
             * @returns {CHIDMessageToRemote.DeviceDisconnect} DeviceDisconnect instance
             */
            DeviceDisconnect.create = function create(properties) {
                return new DeviceDisconnect(properties);
            };
    
            /**
             * Encodes the specified DeviceDisconnect message. Does not implicitly {@link CHIDMessageToRemote.DeviceDisconnect.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @static
             * @param {CHIDMessageToRemote.IDeviceDisconnect} message DeviceDisconnect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceDisconnect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                if (message.disconnectMethod != null && message.hasOwnProperty("disconnectMethod"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.disconnectMethod);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified DeviceDisconnect message, length delimited. Does not implicitly {@link CHIDMessageToRemote.DeviceDisconnect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @static
             * @param {CHIDMessageToRemote.IDeviceDisconnect} message DeviceDisconnect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceDisconnect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceDisconnect message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageToRemote.DeviceDisconnect} DeviceDisconnect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceDisconnect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageToRemote.DeviceDisconnect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    case 2:
                        message.disconnectMethod = reader.int32();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceDisconnect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageToRemote.DeviceDisconnect} DeviceDisconnect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceDisconnect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceDisconnect message.
             * @function verify
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceDisconnect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                if (message.disconnectMethod != null && message.hasOwnProperty("disconnectMethod"))
                    switch (message.disconnectMethod) {
                    default:
                        return "disconnectMethod: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a DeviceDisconnect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageToRemote.DeviceDisconnect} DeviceDisconnect
             */
            DeviceDisconnect.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageToRemote.DeviceDisconnect)
                    return object;
                var message = new $root.CHIDMessageToRemote.DeviceDisconnect();
                if (object.device != null)
                    message.device = object.device >>> 0;
                switch (object.disconnectMethod) {
                case "k_EDeviceDisconnectMethodUnknown":
                case 0:
                    message.disconnectMethod = 0;
                    break;
                case "k_EDeviceDisconnectMethodBluetooth":
                case 1:
                    message.disconnectMethod = 1;
                    break;
                case "k_EDeviceDisconnectMethodFeatureReport":
                case 2:
                    message.disconnectMethod = 2;
                    break;
                case "k_EDeviceDisconnectMethodOutputReport":
                case 3:
                    message.disconnectMethod = 3;
                    break;
                }
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceDisconnect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @static
             * @param {CHIDMessageToRemote.DeviceDisconnect} message DeviceDisconnect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceDisconnect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.device = 0;
                    object.disconnectMethod = options.enums === String ? "k_EDeviceDisconnectMethodUnknown" : 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                if (message.disconnectMethod != null && message.hasOwnProperty("disconnectMethod"))
                    object.disconnectMethod = options.enums === String ? $root.EHIDDeviceDisconnectMethod[message.disconnectMethod] : message.disconnectMethod;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this DeviceDisconnect to JSON.
             * @function toJSON
             * @memberof CHIDMessageToRemote.DeviceDisconnect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceDisconnect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceDisconnect;
        })();
    
        return CHIDMessageToRemote;
    })();
    
    $root.CHIDMessageFromRemote = (function() {
    
        /**
         * Properties of a CHIDMessageFromRemote.
         * @exports ICHIDMessageFromRemote
         * @interface ICHIDMessageFromRemote
         * @property {CHIDMessageFromRemote.IUpdateDeviceList|null} [update_device_list] CHIDMessageFromRemote update_device_list
         * @property {CHIDMessageFromRemote.IRequestResponse|null} [response] CHIDMessageFromRemote response
         * @property {CHIDMessageFromRemote.IDeviceInputReports|null} [reports] CHIDMessageFromRemote reports
         * @property {CHIDMessageFromRemote.ICloseDevice|null} [close_device] CHIDMessageFromRemote close_device
         * @property {CHIDMessageFromRemote.ICloseAllDevices|null} [close_all_devices] CHIDMessageFromRemote close_all_devices
         */
    
        /**
         * Constructs a new CHIDMessageFromRemote.
         * @exports CHIDMessageFromRemote
         * @classdesc Represents a CHIDMessageFromRemote.
         * @implements ICHIDMessageFromRemote
         * @constructor
         * @param {ICHIDMessageFromRemote=} [properties] Properties to set
         */
        function CHIDMessageFromRemote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CHIDMessageFromRemote update_device_list.
         * @member {CHIDMessageFromRemote.IUpdateDeviceList|null|undefined} update_device_list
         * @memberof CHIDMessageFromRemote
         * @instance
         */
        CHIDMessageFromRemote.prototype.update_device_list = null;
    
        /**
         * CHIDMessageFromRemote response.
         * @member {CHIDMessageFromRemote.IRequestResponse|null|undefined} response
         * @memberof CHIDMessageFromRemote
         * @instance
         */
        CHIDMessageFromRemote.prototype.response = null;
    
        /**
         * CHIDMessageFromRemote reports.
         * @member {CHIDMessageFromRemote.IDeviceInputReports|null|undefined} reports
         * @memberof CHIDMessageFromRemote
         * @instance
         */
        CHIDMessageFromRemote.prototype.reports = null;
    
        /**
         * CHIDMessageFromRemote close_device.
         * @member {CHIDMessageFromRemote.ICloseDevice|null|undefined} close_device
         * @memberof CHIDMessageFromRemote
         * @instance
         */
        CHIDMessageFromRemote.prototype.close_device = null;
    
        /**
         * CHIDMessageFromRemote close_all_devices.
         * @member {CHIDMessageFromRemote.ICloseAllDevices|null|undefined} close_all_devices
         * @memberof CHIDMessageFromRemote
         * @instance
         */
        CHIDMessageFromRemote.prototype.close_all_devices = null;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * CHIDMessageFromRemote command.
         * @member {"update_device_list"|"response"|"reports"|"close_device"|"close_all_devices"|undefined} command
         * @memberof CHIDMessageFromRemote
         * @instance
         */
        Object.defineProperty(CHIDMessageFromRemote.prototype, "command", {
            get: $util.oneOfGetter($oneOfFields = ["update_device_list", "response", "reports", "close_device", "close_all_devices"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new CHIDMessageFromRemote instance using the specified properties.
         * @function create
         * @memberof CHIDMessageFromRemote
         * @static
         * @param {ICHIDMessageFromRemote=} [properties] Properties to set
         * @returns {CHIDMessageFromRemote} CHIDMessageFromRemote instance
         */
        CHIDMessageFromRemote.create = function create(properties) {
            return new CHIDMessageFromRemote(properties);
        };
    
        /**
         * Encodes the specified CHIDMessageFromRemote message. Does not implicitly {@link CHIDMessageFromRemote.verify|verify} messages.
         * @function encode
         * @memberof CHIDMessageFromRemote
         * @static
         * @param {ICHIDMessageFromRemote} message CHIDMessageFromRemote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHIDMessageFromRemote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.update_device_list != null && message.hasOwnProperty("update_device_list"))
                $root.CHIDMessageFromRemote.UpdateDeviceList.encode(message.update_device_list, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.response != null && message.hasOwnProperty("response"))
                $root.CHIDMessageFromRemote.RequestResponse.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.reports != null && message.hasOwnProperty("reports"))
                $root.CHIDMessageFromRemote.DeviceInputReports.encode(message.reports, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.close_device != null && message.hasOwnProperty("close_device"))
                $root.CHIDMessageFromRemote.CloseDevice.encode(message.close_device, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.close_all_devices != null && message.hasOwnProperty("close_all_devices"))
                $root.CHIDMessageFromRemote.CloseAllDevices.encode(message.close_all_devices, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CHIDMessageFromRemote message, length delimited. Does not implicitly {@link CHIDMessageFromRemote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CHIDMessageFromRemote
         * @static
         * @param {ICHIDMessageFromRemote} message CHIDMessageFromRemote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CHIDMessageFromRemote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CHIDMessageFromRemote message from the specified reader or buffer.
         * @function decode
         * @memberof CHIDMessageFromRemote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CHIDMessageFromRemote} CHIDMessageFromRemote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHIDMessageFromRemote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageFromRemote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.update_device_list = $root.CHIDMessageFromRemote.UpdateDeviceList.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.response = $root.CHIDMessageFromRemote.RequestResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reports = $root.CHIDMessageFromRemote.DeviceInputReports.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.close_device = $root.CHIDMessageFromRemote.CloseDevice.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.close_all_devices = $root.CHIDMessageFromRemote.CloseAllDevices.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CHIDMessageFromRemote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CHIDMessageFromRemote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CHIDMessageFromRemote} CHIDMessageFromRemote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CHIDMessageFromRemote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CHIDMessageFromRemote message.
         * @function verify
         * @memberof CHIDMessageFromRemote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CHIDMessageFromRemote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.update_device_list != null && message.hasOwnProperty("update_device_list")) {
                properties.command = 1;
                {
                    var error = $root.CHIDMessageFromRemote.UpdateDeviceList.verify(message.update_device_list);
                    if (error)
                        return "update_device_list." + error;
                }
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageFromRemote.RequestResponse.verify(message.response);
                    if (error)
                        return "response." + error;
                }
            }
            if (message.reports != null && message.hasOwnProperty("reports")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageFromRemote.DeviceInputReports.verify(message.reports);
                    if (error)
                        return "reports." + error;
                }
            }
            if (message.close_device != null && message.hasOwnProperty("close_device")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageFromRemote.CloseDevice.verify(message.close_device);
                    if (error)
                        return "close_device." + error;
                }
            }
            if (message.close_all_devices != null && message.hasOwnProperty("close_all_devices")) {
                if (properties.command === 1)
                    return "command: multiple values";
                properties.command = 1;
                {
                    var error = $root.CHIDMessageFromRemote.CloseAllDevices.verify(message.close_all_devices);
                    if (error)
                        return "close_all_devices." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CHIDMessageFromRemote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CHIDMessageFromRemote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CHIDMessageFromRemote} CHIDMessageFromRemote
         */
        CHIDMessageFromRemote.fromObject = function fromObject(object) {
            if (object instanceof $root.CHIDMessageFromRemote)
                return object;
            var message = new $root.CHIDMessageFromRemote();
            if (object.update_device_list != null) {
                if (typeof object.update_device_list !== "object")
                    throw TypeError(".CHIDMessageFromRemote.update_device_list: object expected");
                message.update_device_list = $root.CHIDMessageFromRemote.UpdateDeviceList.fromObject(object.update_device_list);
            }
            if (object.response != null) {
                if (typeof object.response !== "object")
                    throw TypeError(".CHIDMessageFromRemote.response: object expected");
                message.response = $root.CHIDMessageFromRemote.RequestResponse.fromObject(object.response);
            }
            if (object.reports != null) {
                if (typeof object.reports !== "object")
                    throw TypeError(".CHIDMessageFromRemote.reports: object expected");
                message.reports = $root.CHIDMessageFromRemote.DeviceInputReports.fromObject(object.reports);
            }
            if (object.close_device != null) {
                if (typeof object.close_device !== "object")
                    throw TypeError(".CHIDMessageFromRemote.close_device: object expected");
                message.close_device = $root.CHIDMessageFromRemote.CloseDevice.fromObject(object.close_device);
            }
            if (object.close_all_devices != null) {
                if (typeof object.close_all_devices !== "object")
                    throw TypeError(".CHIDMessageFromRemote.close_all_devices: object expected");
                message.close_all_devices = $root.CHIDMessageFromRemote.CloseAllDevices.fromObject(object.close_all_devices);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CHIDMessageFromRemote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CHIDMessageFromRemote
         * @static
         * @param {CHIDMessageFromRemote} message CHIDMessageFromRemote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CHIDMessageFromRemote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.update_device_list != null && message.hasOwnProperty("update_device_list")) {
                object.update_device_list = $root.CHIDMessageFromRemote.UpdateDeviceList.toObject(message.update_device_list, options);
                if (options.oneofs)
                    object.command = "update_device_list";
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                object.response = $root.CHIDMessageFromRemote.RequestResponse.toObject(message.response, options);
                if (options.oneofs)
                    object.command = "response";
            }
            if (message.reports != null && message.hasOwnProperty("reports")) {
                object.reports = $root.CHIDMessageFromRemote.DeviceInputReports.toObject(message.reports, options);
                if (options.oneofs)
                    object.command = "reports";
            }
            if (message.close_device != null && message.hasOwnProperty("close_device")) {
                object.close_device = $root.CHIDMessageFromRemote.CloseDevice.toObject(message.close_device, options);
                if (options.oneofs)
                    object.command = "close_device";
            }
            if (message.close_all_devices != null && message.hasOwnProperty("close_all_devices")) {
                object.close_all_devices = $root.CHIDMessageFromRemote.CloseAllDevices.toObject(message.close_all_devices, options);
                if (options.oneofs)
                    object.command = "close_all_devices";
            }
            return object;
        };
    
        /**
         * Converts this CHIDMessageFromRemote to JSON.
         * @function toJSON
         * @memberof CHIDMessageFromRemote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CHIDMessageFromRemote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CHIDMessageFromRemote.UpdateDeviceList = (function() {
    
            /**
             * Properties of an UpdateDeviceList.
             * @memberof CHIDMessageFromRemote
             * @interface IUpdateDeviceList
             * @property {Array.<ICHIDDeviceInfo>|null} [devices] UpdateDeviceList devices
             */
    
            /**
             * Constructs a new UpdateDeviceList.
             * @memberof CHIDMessageFromRemote
             * @classdesc Represents an UpdateDeviceList.
             * @implements IUpdateDeviceList
             * @constructor
             * @param {CHIDMessageFromRemote.IUpdateDeviceList=} [properties] Properties to set
             */
            function UpdateDeviceList(properties) {
                this.devices = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UpdateDeviceList devices.
             * @member {Array.<ICHIDDeviceInfo>} devices
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @instance
             */
            UpdateDeviceList.prototype.devices = $util.emptyArray;
    
            /**
             * Creates a new UpdateDeviceList instance using the specified properties.
             * @function create
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @static
             * @param {CHIDMessageFromRemote.IUpdateDeviceList=} [properties] Properties to set
             * @returns {CHIDMessageFromRemote.UpdateDeviceList} UpdateDeviceList instance
             */
            UpdateDeviceList.create = function create(properties) {
                return new UpdateDeviceList(properties);
            };
    
            /**
             * Encodes the specified UpdateDeviceList message. Does not implicitly {@link CHIDMessageFromRemote.UpdateDeviceList.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @static
             * @param {CHIDMessageFromRemote.IUpdateDeviceList} message UpdateDeviceList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateDeviceList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.devices != null && message.devices.length)
                    for (var i = 0; i < message.devices.length; ++i)
                        $root.CHIDDeviceInfo.encode(message.devices[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified UpdateDeviceList message, length delimited. Does not implicitly {@link CHIDMessageFromRemote.UpdateDeviceList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @static
             * @param {CHIDMessageFromRemote.IUpdateDeviceList} message UpdateDeviceList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateDeviceList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpdateDeviceList message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageFromRemote.UpdateDeviceList} UpdateDeviceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateDeviceList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageFromRemote.UpdateDeviceList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.devices && message.devices.length))
                            message.devices = [];
                        message.devices.push($root.CHIDDeviceInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UpdateDeviceList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageFromRemote.UpdateDeviceList} UpdateDeviceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateDeviceList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpdateDeviceList message.
             * @function verify
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateDeviceList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.devices != null && message.hasOwnProperty("devices")) {
                    if (!Array.isArray(message.devices))
                        return "devices: array expected";
                    for (var i = 0; i < message.devices.length; ++i) {
                        var error = $root.CHIDDeviceInfo.verify(message.devices[i]);
                        if (error)
                            return "devices." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an UpdateDeviceList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageFromRemote.UpdateDeviceList} UpdateDeviceList
             */
            UpdateDeviceList.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageFromRemote.UpdateDeviceList)
                    return object;
                var message = new $root.CHIDMessageFromRemote.UpdateDeviceList();
                if (object.devices) {
                    if (!Array.isArray(object.devices))
                        throw TypeError(".CHIDMessageFromRemote.UpdateDeviceList.devices: array expected");
                    message.devices = [];
                    for (var i = 0; i < object.devices.length; ++i) {
                        if (typeof object.devices[i] !== "object")
                            throw TypeError(".CHIDMessageFromRemote.UpdateDeviceList.devices: object expected");
                        message.devices[i] = $root.CHIDDeviceInfo.fromObject(object.devices[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from an UpdateDeviceList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @static
             * @param {CHIDMessageFromRemote.UpdateDeviceList} message UpdateDeviceList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateDeviceList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.devices = [];
                if (message.devices && message.devices.length) {
                    object.devices = [];
                    for (var j = 0; j < message.devices.length; ++j)
                        object.devices[j] = $root.CHIDDeviceInfo.toObject(message.devices[j], options);
                }
                return object;
            };
    
            /**
             * Converts this UpdateDeviceList to JSON.
             * @function toJSON
             * @memberof CHIDMessageFromRemote.UpdateDeviceList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateDeviceList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UpdateDeviceList;
        })();
    
        CHIDMessageFromRemote.RequestResponse = (function() {
    
            /**
             * Properties of a RequestResponse.
             * @memberof CHIDMessageFromRemote
             * @interface IRequestResponse
             * @property {number|null} [request_id] RequestResponse request_id
             * @property {number|null} [result] RequestResponse result
             * @property {Uint8Array|null} [data] RequestResponse data
             */
    
            /**
             * Constructs a new RequestResponse.
             * @memberof CHIDMessageFromRemote
             * @classdesc Represents a RequestResponse.
             * @implements IRequestResponse
             * @constructor
             * @param {CHIDMessageFromRemote.IRequestResponse=} [properties] Properties to set
             */
            function RequestResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RequestResponse request_id.
             * @member {number} request_id
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @instance
             */
            RequestResponse.prototype.request_id = 0;
    
            /**
             * RequestResponse result.
             * @member {number} result
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @instance
             */
            RequestResponse.prototype.result = 0;
    
            /**
             * RequestResponse data.
             * @member {Uint8Array} data
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @instance
             */
            RequestResponse.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new RequestResponse instance using the specified properties.
             * @function create
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @static
             * @param {CHIDMessageFromRemote.IRequestResponse=} [properties] Properties to set
             * @returns {CHIDMessageFromRemote.RequestResponse} RequestResponse instance
             */
            RequestResponse.create = function create(properties) {
                return new RequestResponse(properties);
            };
    
            /**
             * Encodes the specified RequestResponse message. Does not implicitly {@link CHIDMessageFromRemote.RequestResponse.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @static
             * @param {CHIDMessageFromRemote.IRequestResponse} message RequestResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.request_id != null && message.hasOwnProperty("request_id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.request_id);
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified RequestResponse message, length delimited. Does not implicitly {@link CHIDMessageFromRemote.RequestResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @static
             * @param {CHIDMessageFromRemote.IRequestResponse} message RequestResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RequestResponse message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageFromRemote.RequestResponse} RequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageFromRemote.RequestResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.request_id = reader.uint32();
                        break;
                    case 2:
                        message.result = reader.int32();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RequestResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageFromRemote.RequestResponse} RequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RequestResponse message.
             * @function verify
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.request_id != null && message.hasOwnProperty("request_id"))
                    if (!$util.isInteger(message.request_id))
                        return "request_id: integer expected";
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!$util.isInteger(message.result))
                        return "result: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a RequestResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageFromRemote.RequestResponse} RequestResponse
             */
            RequestResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageFromRemote.RequestResponse)
                    return object;
                var message = new $root.CHIDMessageFromRemote.RequestResponse();
                if (object.request_id != null)
                    message.request_id = object.request_id >>> 0;
                if (object.result != null)
                    message.result = object.result | 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a RequestResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @static
             * @param {CHIDMessageFromRemote.RequestResponse} message RequestResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.request_id = 0;
                    object.result = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.request_id != null && message.hasOwnProperty("request_id"))
                    object.request_id = message.request_id;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = message.result;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this RequestResponse to JSON.
             * @function toJSON
             * @memberof CHIDMessageFromRemote.RequestResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RequestResponse;
        })();
    
        CHIDMessageFromRemote.DeviceInputReports = (function() {
    
            /**
             * Properties of a DeviceInputReports.
             * @memberof CHIDMessageFromRemote
             * @interface IDeviceInputReports
             * @property {Array.<CHIDMessageFromRemote.DeviceInputReports.IDeviceInputReport>|null} [device_reports] DeviceInputReports device_reports
             */
    
            /**
             * Constructs a new DeviceInputReports.
             * @memberof CHIDMessageFromRemote
             * @classdesc Represents a DeviceInputReports.
             * @implements IDeviceInputReports
             * @constructor
             * @param {CHIDMessageFromRemote.IDeviceInputReports=} [properties] Properties to set
             */
            function DeviceInputReports(properties) {
                this.device_reports = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeviceInputReports device_reports.
             * @member {Array.<CHIDMessageFromRemote.DeviceInputReports.IDeviceInputReport>} device_reports
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @instance
             */
            DeviceInputReports.prototype.device_reports = $util.emptyArray;
    
            /**
             * Creates a new DeviceInputReports instance using the specified properties.
             * @function create
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @static
             * @param {CHIDMessageFromRemote.IDeviceInputReports=} [properties] Properties to set
             * @returns {CHIDMessageFromRemote.DeviceInputReports} DeviceInputReports instance
             */
            DeviceInputReports.create = function create(properties) {
                return new DeviceInputReports(properties);
            };
    
            /**
             * Encodes the specified DeviceInputReports message. Does not implicitly {@link CHIDMessageFromRemote.DeviceInputReports.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @static
             * @param {CHIDMessageFromRemote.IDeviceInputReports} message DeviceInputReports message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceInputReports.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device_reports != null && message.device_reports.length)
                    for (var i = 0; i < message.device_reports.length; ++i)
                        $root.CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.encode(message.device_reports[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified DeviceInputReports message, length delimited. Does not implicitly {@link CHIDMessageFromRemote.DeviceInputReports.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @static
             * @param {CHIDMessageFromRemote.IDeviceInputReports} message DeviceInputReports message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceInputReports.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeviceInputReports message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageFromRemote.DeviceInputReports} DeviceInputReports
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceInputReports.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageFromRemote.DeviceInputReports();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.device_reports && message.device_reports.length))
                            message.device_reports = [];
                        message.device_reports.push($root.CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeviceInputReports message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageFromRemote.DeviceInputReports} DeviceInputReports
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceInputReports.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeviceInputReports message.
             * @function verify
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceInputReports.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device_reports != null && message.hasOwnProperty("device_reports")) {
                    if (!Array.isArray(message.device_reports))
                        return "device_reports: array expected";
                    for (var i = 0; i < message.device_reports.length; ++i) {
                        var error = $root.CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.verify(message.device_reports[i]);
                        if (error)
                            return "device_reports." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a DeviceInputReports message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageFromRemote.DeviceInputReports} DeviceInputReports
             */
            DeviceInputReports.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageFromRemote.DeviceInputReports)
                    return object;
                var message = new $root.CHIDMessageFromRemote.DeviceInputReports();
                if (object.device_reports) {
                    if (!Array.isArray(object.device_reports))
                        throw TypeError(".CHIDMessageFromRemote.DeviceInputReports.device_reports: array expected");
                    message.device_reports = [];
                    for (var i = 0; i < object.device_reports.length; ++i) {
                        if (typeof object.device_reports[i] !== "object")
                            throw TypeError(".CHIDMessageFromRemote.DeviceInputReports.device_reports: object expected");
                        message.device_reports[i] = $root.CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.fromObject(object.device_reports[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DeviceInputReports message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @static
             * @param {CHIDMessageFromRemote.DeviceInputReports} message DeviceInputReports
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceInputReports.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.device_reports = [];
                if (message.device_reports && message.device_reports.length) {
                    object.device_reports = [];
                    for (var j = 0; j < message.device_reports.length; ++j)
                        object.device_reports[j] = $root.CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.toObject(message.device_reports[j], options);
                }
                return object;
            };
    
            /**
             * Converts this DeviceInputReports to JSON.
             * @function toJSON
             * @memberof CHIDMessageFromRemote.DeviceInputReports
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceInputReports.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            DeviceInputReports.DeviceInputReport = (function() {
    
                /**
                 * Properties of a DeviceInputReport.
                 * @memberof CHIDMessageFromRemote.DeviceInputReports
                 * @interface IDeviceInputReport
                 * @property {number|null} [device] DeviceInputReport device
                 * @property {Array.<ICHIDDeviceInputReport>|null} [reports] DeviceInputReport reports
                 */
    
                /**
                 * Constructs a new DeviceInputReport.
                 * @memberof CHIDMessageFromRemote.DeviceInputReports
                 * @classdesc Represents a DeviceInputReport.
                 * @implements IDeviceInputReport
                 * @constructor
                 * @param {CHIDMessageFromRemote.DeviceInputReports.IDeviceInputReport=} [properties] Properties to set
                 */
                function DeviceInputReport(properties) {
                    this.reports = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DeviceInputReport device.
                 * @member {number} device
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @instance
                 */
                DeviceInputReport.prototype.device = 0;
    
                /**
                 * DeviceInputReport reports.
                 * @member {Array.<ICHIDDeviceInputReport>} reports
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @instance
                 */
                DeviceInputReport.prototype.reports = $util.emptyArray;
    
                /**
                 * Creates a new DeviceInputReport instance using the specified properties.
                 * @function create
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @static
                 * @param {CHIDMessageFromRemote.DeviceInputReports.IDeviceInputReport=} [properties] Properties to set
                 * @returns {CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport} DeviceInputReport instance
                 */
                DeviceInputReport.create = function create(properties) {
                    return new DeviceInputReport(properties);
                };
    
                /**
                 * Encodes the specified DeviceInputReport message. Does not implicitly {@link CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.verify|verify} messages.
                 * @function encode
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @static
                 * @param {CHIDMessageFromRemote.DeviceInputReports.IDeviceInputReport} message DeviceInputReport message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeviceInputReport.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.device != null && message.hasOwnProperty("device"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                    if (message.reports != null && message.reports.length)
                        for (var i = 0; i < message.reports.length; ++i)
                            $root.CHIDDeviceInputReport.encode(message.reports[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified DeviceInputReport message, length delimited. Does not implicitly {@link CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @static
                 * @param {CHIDMessageFromRemote.DeviceInputReports.IDeviceInputReport} message DeviceInputReport message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeviceInputReport.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DeviceInputReport message from the specified reader or buffer.
                 * @function decode
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport} DeviceInputReport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeviceInputReport.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.device = reader.uint32();
                            break;
                        case 2:
                            if (!(message.reports && message.reports.length))
                                message.reports = [];
                            message.reports.push($root.CHIDDeviceInputReport.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DeviceInputReport message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport} DeviceInputReport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeviceInputReport.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DeviceInputReport message.
                 * @function verify
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeviceInputReport.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.device != null && message.hasOwnProperty("device"))
                        if (!$util.isInteger(message.device))
                            return "device: integer expected";
                    if (message.reports != null && message.hasOwnProperty("reports")) {
                        if (!Array.isArray(message.reports))
                            return "reports: array expected";
                        for (var i = 0; i < message.reports.length; ++i) {
                            var error = $root.CHIDDeviceInputReport.verify(message.reports[i]);
                            if (error)
                                return "reports." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a DeviceInputReport message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport} DeviceInputReport
                 */
                DeviceInputReport.fromObject = function fromObject(object) {
                    if (object instanceof $root.CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport)
                        return object;
                    var message = new $root.CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport();
                    if (object.device != null)
                        message.device = object.device >>> 0;
                    if (object.reports) {
                        if (!Array.isArray(object.reports))
                            throw TypeError(".CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.reports: array expected");
                        message.reports = [];
                        for (var i = 0; i < object.reports.length; ++i) {
                            if (typeof object.reports[i] !== "object")
                                throw TypeError(".CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport.reports: object expected");
                            message.reports[i] = $root.CHIDDeviceInputReport.fromObject(object.reports[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DeviceInputReport message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @static
                 * @param {CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport} message DeviceInputReport
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeviceInputReport.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.reports = [];
                    if (options.defaults)
                        object.device = 0;
                    if (message.device != null && message.hasOwnProperty("device"))
                        object.device = message.device;
                    if (message.reports && message.reports.length) {
                        object.reports = [];
                        for (var j = 0; j < message.reports.length; ++j)
                            object.reports[j] = $root.CHIDDeviceInputReport.toObject(message.reports[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this DeviceInputReport to JSON.
                 * @function toJSON
                 * @memberof CHIDMessageFromRemote.DeviceInputReports.DeviceInputReport
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeviceInputReport.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return DeviceInputReport;
            })();
    
            return DeviceInputReports;
        })();
    
        CHIDMessageFromRemote.CloseDevice = (function() {
    
            /**
             * Properties of a CloseDevice.
             * @memberof CHIDMessageFromRemote
             * @interface ICloseDevice
             * @property {number|null} [device] CloseDevice device
             */
    
            /**
             * Constructs a new CloseDevice.
             * @memberof CHIDMessageFromRemote
             * @classdesc Represents a CloseDevice.
             * @implements ICloseDevice
             * @constructor
             * @param {CHIDMessageFromRemote.ICloseDevice=} [properties] Properties to set
             */
            function CloseDevice(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CloseDevice device.
             * @member {number} device
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @instance
             */
            CloseDevice.prototype.device = 0;
    
            /**
             * Creates a new CloseDevice instance using the specified properties.
             * @function create
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @static
             * @param {CHIDMessageFromRemote.ICloseDevice=} [properties] Properties to set
             * @returns {CHIDMessageFromRemote.CloseDevice} CloseDevice instance
             */
            CloseDevice.create = function create(properties) {
                return new CloseDevice(properties);
            };
    
            /**
             * Encodes the specified CloseDevice message. Does not implicitly {@link CHIDMessageFromRemote.CloseDevice.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @static
             * @param {CHIDMessageFromRemote.ICloseDevice} message CloseDevice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseDevice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.device != null && message.hasOwnProperty("device"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.device);
                return writer;
            };
    
            /**
             * Encodes the specified CloseDevice message, length delimited. Does not implicitly {@link CHIDMessageFromRemote.CloseDevice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @static
             * @param {CHIDMessageFromRemote.ICloseDevice} message CloseDevice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseDevice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CloseDevice message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageFromRemote.CloseDevice} CloseDevice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseDevice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageFromRemote.CloseDevice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.device = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CloseDevice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageFromRemote.CloseDevice} CloseDevice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseDevice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CloseDevice message.
             * @function verify
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CloseDevice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.device != null && message.hasOwnProperty("device"))
                    if (!$util.isInteger(message.device))
                        return "device: integer expected";
                return null;
            };
    
            /**
             * Creates a CloseDevice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageFromRemote.CloseDevice} CloseDevice
             */
            CloseDevice.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageFromRemote.CloseDevice)
                    return object;
                var message = new $root.CHIDMessageFromRemote.CloseDevice();
                if (object.device != null)
                    message.device = object.device >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a CloseDevice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @static
             * @param {CHIDMessageFromRemote.CloseDevice} message CloseDevice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloseDevice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.device = 0;
                if (message.device != null && message.hasOwnProperty("device"))
                    object.device = message.device;
                return object;
            };
    
            /**
             * Converts this CloseDevice to JSON.
             * @function toJSON
             * @memberof CHIDMessageFromRemote.CloseDevice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CloseDevice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CloseDevice;
        })();
    
        CHIDMessageFromRemote.CloseAllDevices = (function() {
    
            /**
             * Properties of a CloseAllDevices.
             * @memberof CHIDMessageFromRemote
             * @interface ICloseAllDevices
             */
    
            /**
             * Constructs a new CloseAllDevices.
             * @memberof CHIDMessageFromRemote
             * @classdesc Represents a CloseAllDevices.
             * @implements ICloseAllDevices
             * @constructor
             * @param {CHIDMessageFromRemote.ICloseAllDevices=} [properties] Properties to set
             */
            function CloseAllDevices(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new CloseAllDevices instance using the specified properties.
             * @function create
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @static
             * @param {CHIDMessageFromRemote.ICloseAllDevices=} [properties] Properties to set
             * @returns {CHIDMessageFromRemote.CloseAllDevices} CloseAllDevices instance
             */
            CloseAllDevices.create = function create(properties) {
                return new CloseAllDevices(properties);
            };
    
            /**
             * Encodes the specified CloseAllDevices message. Does not implicitly {@link CHIDMessageFromRemote.CloseAllDevices.verify|verify} messages.
             * @function encode
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @static
             * @param {CHIDMessageFromRemote.ICloseAllDevices} message CloseAllDevices message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseAllDevices.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified CloseAllDevices message, length delimited. Does not implicitly {@link CHIDMessageFromRemote.CloseAllDevices.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @static
             * @param {CHIDMessageFromRemote.ICloseAllDevices} message CloseAllDevices message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CloseAllDevices.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CloseAllDevices message from the specified reader or buffer.
             * @function decode
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CHIDMessageFromRemote.CloseAllDevices} CloseAllDevices
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseAllDevices.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CHIDMessageFromRemote.CloseAllDevices();
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
             * Decodes a CloseAllDevices message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CHIDMessageFromRemote.CloseAllDevices} CloseAllDevices
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CloseAllDevices.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CloseAllDevices message.
             * @function verify
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CloseAllDevices.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a CloseAllDevices message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CHIDMessageFromRemote.CloseAllDevices} CloseAllDevices
             */
            CloseAllDevices.fromObject = function fromObject(object) {
                if (object instanceof $root.CHIDMessageFromRemote.CloseAllDevices)
                    return object;
                return new $root.CHIDMessageFromRemote.CloseAllDevices();
            };
    
            /**
             * Creates a plain object from a CloseAllDevices message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @static
             * @param {CHIDMessageFromRemote.CloseAllDevices} message CloseAllDevices
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CloseAllDevices.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this CloseAllDevices to JSON.
             * @function toJSON
             * @memberof CHIDMessageFromRemote.CloseAllDevices
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CloseAllDevices.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CloseAllDevices;
        })();
    
        return CHIDMessageFromRemote;
    })();

    return $root;
});
