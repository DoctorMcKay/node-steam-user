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
     * EInputMode enum.
     * @exports EInputMode
     * @enum {string}
     * @property {number} k_EInputModeUnknown=0 k_EInputModeUnknown value
     * @property {number} k_EInputModeMouse=1 k_EInputModeMouse value
     * @property {number} k_EInputModeController=2 k_EInputModeController value
     * @property {number} k_EInputModeMouseAndController=3 k_EInputModeMouseAndController value
     */
    $root.EInputMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EInputModeUnknown"] = 0;
        values[valuesById[1] = "k_EInputModeMouse"] = 1;
        values[valuesById[2] = "k_EInputModeController"] = 2;
        values[valuesById[3] = "k_EInputModeMouseAndController"] = 3;
        return values;
    })();
    
    /**
     * EMouseMode enum.
     * @exports EMouseMode
     * @enum {string}
     * @property {number} k_EMouseModeUnknown=0 k_EMouseModeUnknown value
     * @property {number} k_EMouseModeRelativeCursor=1 k_EMouseModeRelativeCursor value
     * @property {number} k_EMouseModeAbsoluteCursor=2 k_EMouseModeAbsoluteCursor value
     * @property {number} k_EMouseModeTouch=3 k_EMouseModeTouch value
     * @property {number} k_EMouseModeRelative=4 k_EMouseModeRelative value
     */
    $root.EMouseMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EMouseModeUnknown"] = 0;
        values[valuesById[1] = "k_EMouseModeRelativeCursor"] = 1;
        values[valuesById[2] = "k_EMouseModeAbsoluteCursor"] = 2;
        values[valuesById[3] = "k_EMouseModeTouch"] = 3;
        values[valuesById[4] = "k_EMouseModeRelative"] = 4;
        return values;
    })();
    
    /**
     * EControllerElementType enum.
     * @exports EControllerElementType
     * @enum {string}
     * @property {number} k_EControllerElementTypeNone=-1 k_EControllerElementTypeNone value
     * @property {number} k_EControllerElementTypeThumb=0 k_EControllerElementTypeThumb value
     * @property {number} k_EControllerElementTypeButtonSteam=1 k_EControllerElementTypeButtonSteam value
     * @property {number} k_EControllerElementTypeJoystickLeft=2 k_EControllerElementTypeJoystickLeft value
     * @property {number} k_EControllerElementTypeButtonJoystickLeft=3 k_EControllerElementTypeButtonJoystickLeft value
     * @property {number} k_EControllerElementTypeJoystickRight=4 k_EControllerElementTypeJoystickRight value
     * @property {number} k_EControllerElementTypeButtonJoystickRight=5 k_EControllerElementTypeButtonJoystickRight value
     * @property {number} k_EControllerElementTypeDPad=6 k_EControllerElementTypeDPad value
     * @property {number} k_EControllerElementTypeButtonA=7 k_EControllerElementTypeButtonA value
     * @property {number} k_EControllerElementTypeButtonB=8 k_EControllerElementTypeButtonB value
     * @property {number} k_EControllerElementTypeButtonX=9 k_EControllerElementTypeButtonX value
     * @property {number} k_EControllerElementTypeButtonY=10 k_EControllerElementTypeButtonY value
     * @property {number} k_EControllerElementTypeButtonSelect=11 k_EControllerElementTypeButtonSelect value
     * @property {number} k_EControllerElementTypeButtonStart=12 k_EControllerElementTypeButtonStart value
     * @property {number} k_EControllerElementTypeButtonTriggerLeft=13 k_EControllerElementTypeButtonTriggerLeft value
     * @property {number} k_EControllerElementTypeButtonTriggerRight=14 k_EControllerElementTypeButtonTriggerRight value
     * @property {number} k_EControllerElementTypeButtonBumperLeft=15 k_EControllerElementTypeButtonBumperLeft value
     * @property {number} k_EControllerElementTypeButtonBumperRight=16 k_EControllerElementTypeButtonBumperRight value
     * @property {number} k_EControllerElementTypeButtonMacro0=17 k_EControllerElementTypeButtonMacro0 value
     * @property {number} k_EControllerElementTypeButtonMacro1=18 k_EControllerElementTypeButtonMacro1 value
     * @property {number} k_EControllerElementTypeButtonMacro2=19 k_EControllerElementTypeButtonMacro2 value
     * @property {number} k_EControllerElementTypeButtonMacro3=20 k_EControllerElementTypeButtonMacro3 value
     * @property {number} k_EControllerElementTypeButtonMacro4=21 k_EControllerElementTypeButtonMacro4 value
     * @property {number} k_EControllerElementTypeButtonMacro5=22 k_EControllerElementTypeButtonMacro5 value
     * @property {number} k_EControllerElementTypeButtonMacro6=23 k_EControllerElementTypeButtonMacro6 value
     * @property {number} k_EControllerElementTypeButtonMacro7=24 k_EControllerElementTypeButtonMacro7 value
     * @property {number} k_EControllerElementTypeTrackpadCenter=25 k_EControllerElementTypeTrackpadCenter value
     * @property {number} k_EControllerElementTypeTrackpadLeft=26 k_EControllerElementTypeTrackpadLeft value
     * @property {number} k_EControllerElementTypeTrackpadRight=27 k_EControllerElementTypeTrackpadRight value
     * @property {number} k_EControllerElementTypeKeyboard=28 k_EControllerElementTypeKeyboard value
     * @property {number} k_EControllerElementTypeMax=29 k_EControllerElementTypeMax value
     */
    $root.EControllerElementType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-1] = "k_EControllerElementTypeNone"] = -1;
        values[valuesById[0] = "k_EControllerElementTypeThumb"] = 0;
        values[valuesById[1] = "k_EControllerElementTypeButtonSteam"] = 1;
        values[valuesById[2] = "k_EControllerElementTypeJoystickLeft"] = 2;
        values[valuesById[3] = "k_EControllerElementTypeButtonJoystickLeft"] = 3;
        values[valuesById[4] = "k_EControllerElementTypeJoystickRight"] = 4;
        values[valuesById[5] = "k_EControllerElementTypeButtonJoystickRight"] = 5;
        values[valuesById[6] = "k_EControllerElementTypeDPad"] = 6;
        values[valuesById[7] = "k_EControllerElementTypeButtonA"] = 7;
        values[valuesById[8] = "k_EControllerElementTypeButtonB"] = 8;
        values[valuesById[9] = "k_EControllerElementTypeButtonX"] = 9;
        values[valuesById[10] = "k_EControllerElementTypeButtonY"] = 10;
        values[valuesById[11] = "k_EControllerElementTypeButtonSelect"] = 11;
        values[valuesById[12] = "k_EControllerElementTypeButtonStart"] = 12;
        values[valuesById[13] = "k_EControllerElementTypeButtonTriggerLeft"] = 13;
        values[valuesById[14] = "k_EControllerElementTypeButtonTriggerRight"] = 14;
        values[valuesById[15] = "k_EControllerElementTypeButtonBumperLeft"] = 15;
        values[valuesById[16] = "k_EControllerElementTypeButtonBumperRight"] = 16;
        values[valuesById[17] = "k_EControllerElementTypeButtonMacro0"] = 17;
        values[valuesById[18] = "k_EControllerElementTypeButtonMacro1"] = 18;
        values[valuesById[19] = "k_EControllerElementTypeButtonMacro2"] = 19;
        values[valuesById[20] = "k_EControllerElementTypeButtonMacro3"] = 20;
        values[valuesById[21] = "k_EControllerElementTypeButtonMacro4"] = 21;
        values[valuesById[22] = "k_EControllerElementTypeButtonMacro5"] = 22;
        values[valuesById[23] = "k_EControllerElementTypeButtonMacro6"] = 23;
        values[valuesById[24] = "k_EControllerElementTypeButtonMacro7"] = 24;
        values[valuesById[25] = "k_EControllerElementTypeTrackpadCenter"] = 25;
        values[valuesById[26] = "k_EControllerElementTypeTrackpadLeft"] = 26;
        values[valuesById[27] = "k_EControllerElementTypeTrackpadRight"] = 27;
        values[valuesById[28] = "k_EControllerElementTypeKeyboard"] = 28;
        values[valuesById[29] = "k_EControllerElementTypeMax"] = 29;
        return values;
    })();
    
    $root.CVirtualControllerElement = (function() {
    
        /**
         * Properties of a CVirtualControllerElement.
         * @exports ICVirtualControllerElement
         * @interface ICVirtualControllerElement
         * @property {EControllerElementType|null} [type] CVirtualControllerElement type
         * @property {boolean|null} [visible] CVirtualControllerElement visible
         * @property {number|null} [x_position] CVirtualControllerElement x_position
         * @property {number|null} [y_position] CVirtualControllerElement y_position
         * @property {number|null} [x_scale] CVirtualControllerElement x_scale
         * @property {number|null} [y_scale] CVirtualControllerElement y_scale
         */
    
        /**
         * Constructs a new CVirtualControllerElement.
         * @exports CVirtualControllerElement
         * @classdesc Represents a CVirtualControllerElement.
         * @implements ICVirtualControllerElement
         * @constructor
         * @param {ICVirtualControllerElement=} [properties] Properties to set
         */
        function CVirtualControllerElement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualControllerElement type.
         * @member {EControllerElementType} type
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.type = -1;
    
        /**
         * CVirtualControllerElement visible.
         * @member {boolean} visible
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.visible = false;
    
        /**
         * CVirtualControllerElement x_position.
         * @member {number} x_position
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.x_position = 0;
    
        /**
         * CVirtualControllerElement y_position.
         * @member {number} y_position
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.y_position = 0;
    
        /**
         * CVirtualControllerElement x_scale.
         * @member {number} x_scale
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.x_scale = 1;
    
        /**
         * CVirtualControllerElement y_scale.
         * @member {number} y_scale
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.y_scale = 1;
    
        /**
         * Creates a new CVirtualControllerElement instance using the specified properties.
         * @function create
         * @memberof CVirtualControllerElement
         * @static
         * @param {ICVirtualControllerElement=} [properties] Properties to set
         * @returns {CVirtualControllerElement} CVirtualControllerElement instance
         */
        CVirtualControllerElement.create = function create(properties) {
            return new CVirtualControllerElement(properties);
        };
    
        /**
         * Encodes the specified CVirtualControllerElement message. Does not implicitly {@link CVirtualControllerElement.verify|verify} messages.
         * @function encode
         * @memberof CVirtualControllerElement
         * @static
         * @param {ICVirtualControllerElement} message CVirtualControllerElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerElement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.visible != null && message.hasOwnProperty("visible"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.visible);
            if (message.x_position != null && message.hasOwnProperty("x_position"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.x_position);
            if (message.y_position != null && message.hasOwnProperty("y_position"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.y_position);
            if (message.x_scale != null && message.hasOwnProperty("x_scale"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.x_scale);
            if (message.y_scale != null && message.hasOwnProperty("y_scale"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.y_scale);
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualControllerElement message, length delimited. Does not implicitly {@link CVirtualControllerElement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualControllerElement
         * @static
         * @param {ICVirtualControllerElement} message CVirtualControllerElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerElement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualControllerElement message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualControllerElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualControllerElement} CVirtualControllerElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerElement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerElement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.visible = reader.bool();
                    break;
                case 3:
                    message.x_position = reader.float();
                    break;
                case 4:
                    message.y_position = reader.float();
                    break;
                case 5:
                    message.x_scale = reader.float();
                    break;
                case 6:
                    message.y_scale = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualControllerElement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualControllerElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualControllerElement} CVirtualControllerElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerElement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualControllerElement message.
         * @function verify
         * @memberof CVirtualControllerElement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualControllerElement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case -1:
                case 0:
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
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                    break;
                }
            if (message.visible != null && message.hasOwnProperty("visible"))
                if (typeof message.visible !== "boolean")
                    return "visible: boolean expected";
            if (message.x_position != null && message.hasOwnProperty("x_position"))
                if (typeof message.x_position !== "number")
                    return "x_position: number expected";
            if (message.y_position != null && message.hasOwnProperty("y_position"))
                if (typeof message.y_position !== "number")
                    return "y_position: number expected";
            if (message.x_scale != null && message.hasOwnProperty("x_scale"))
                if (typeof message.x_scale !== "number")
                    return "x_scale: number expected";
            if (message.y_scale != null && message.hasOwnProperty("y_scale"))
                if (typeof message.y_scale !== "number")
                    return "y_scale: number expected";
            return null;
        };
    
        /**
         * Creates a CVirtualControllerElement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualControllerElement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualControllerElement} CVirtualControllerElement
         */
        CVirtualControllerElement.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualControllerElement)
                return object;
            var message = new $root.CVirtualControllerElement();
            switch (object.type) {
            case "k_EControllerElementTypeNone":
            case -1:
                message.type = -1;
                break;
            case "k_EControllerElementTypeThumb":
            case 0:
                message.type = 0;
                break;
            case "k_EControllerElementTypeButtonSteam":
            case 1:
                message.type = 1;
                break;
            case "k_EControllerElementTypeJoystickLeft":
            case 2:
                message.type = 2;
                break;
            case "k_EControllerElementTypeButtonJoystickLeft":
            case 3:
                message.type = 3;
                break;
            case "k_EControllerElementTypeJoystickRight":
            case 4:
                message.type = 4;
                break;
            case "k_EControllerElementTypeButtonJoystickRight":
            case 5:
                message.type = 5;
                break;
            case "k_EControllerElementTypeDPad":
            case 6:
                message.type = 6;
                break;
            case "k_EControllerElementTypeButtonA":
            case 7:
                message.type = 7;
                break;
            case "k_EControllerElementTypeButtonB":
            case 8:
                message.type = 8;
                break;
            case "k_EControllerElementTypeButtonX":
            case 9:
                message.type = 9;
                break;
            case "k_EControllerElementTypeButtonY":
            case 10:
                message.type = 10;
                break;
            case "k_EControllerElementTypeButtonSelect":
            case 11:
                message.type = 11;
                break;
            case "k_EControllerElementTypeButtonStart":
            case 12:
                message.type = 12;
                break;
            case "k_EControllerElementTypeButtonTriggerLeft":
            case 13:
                message.type = 13;
                break;
            case "k_EControllerElementTypeButtonTriggerRight":
            case 14:
                message.type = 14;
                break;
            case "k_EControllerElementTypeButtonBumperLeft":
            case 15:
                message.type = 15;
                break;
            case "k_EControllerElementTypeButtonBumperRight":
            case 16:
                message.type = 16;
                break;
            case "k_EControllerElementTypeButtonMacro0":
            case 17:
                message.type = 17;
                break;
            case "k_EControllerElementTypeButtonMacro1":
            case 18:
                message.type = 18;
                break;
            case "k_EControllerElementTypeButtonMacro2":
            case 19:
                message.type = 19;
                break;
            case "k_EControllerElementTypeButtonMacro3":
            case 20:
                message.type = 20;
                break;
            case "k_EControllerElementTypeButtonMacro4":
            case 21:
                message.type = 21;
                break;
            case "k_EControllerElementTypeButtonMacro5":
            case 22:
                message.type = 22;
                break;
            case "k_EControllerElementTypeButtonMacro6":
            case 23:
                message.type = 23;
                break;
            case "k_EControllerElementTypeButtonMacro7":
            case 24:
                message.type = 24;
                break;
            case "k_EControllerElementTypeTrackpadCenter":
            case 25:
                message.type = 25;
                break;
            case "k_EControllerElementTypeTrackpadLeft":
            case 26:
                message.type = 26;
                break;
            case "k_EControllerElementTypeTrackpadRight":
            case 27:
                message.type = 27;
                break;
            case "k_EControllerElementTypeKeyboard":
            case 28:
                message.type = 28;
                break;
            case "k_EControllerElementTypeMax":
            case 29:
                message.type = 29;
                break;
            }
            if (object.visible != null)
                message.visible = Boolean(object.visible);
            if (object.x_position != null)
                message.x_position = Number(object.x_position);
            if (object.y_position != null)
                message.y_position = Number(object.y_position);
            if (object.x_scale != null)
                message.x_scale = Number(object.x_scale);
            if (object.y_scale != null)
                message.y_scale = Number(object.y_scale);
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualControllerElement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualControllerElement
         * @static
         * @param {CVirtualControllerElement} message CVirtualControllerElement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualControllerElement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "k_EControllerElementTypeNone" : -1;
                object.visible = false;
                object.x_position = 0;
                object.y_position = 0;
                object.x_scale = 1;
                object.y_scale = 1;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.EControllerElementType[message.type] : message.type;
            if (message.visible != null && message.hasOwnProperty("visible"))
                object.visible = message.visible;
            if (message.x_position != null && message.hasOwnProperty("x_position"))
                object.x_position = options.json && !isFinite(message.x_position) ? String(message.x_position) : message.x_position;
            if (message.y_position != null && message.hasOwnProperty("y_position"))
                object.y_position = options.json && !isFinite(message.y_position) ? String(message.y_position) : message.y_position;
            if (message.x_scale != null && message.hasOwnProperty("x_scale"))
                object.x_scale = options.json && !isFinite(message.x_scale) ? String(message.x_scale) : message.x_scale;
            if (message.y_scale != null && message.hasOwnProperty("y_scale"))
                object.y_scale = options.json && !isFinite(message.y_scale) ? String(message.y_scale) : message.y_scale;
            return object;
        };
    
        /**
         * Converts this CVirtualControllerElement to JSON.
         * @function toJSON
         * @memberof CVirtualControllerElement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualControllerElement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVirtualControllerElement;
    })();
    
    $root.CVirtualControllerLayout = (function() {
    
        /**
         * Properties of a CVirtualControllerLayout.
         * @exports ICVirtualControllerLayout
         * @interface ICVirtualControllerLayout
         * @property {number|null} [layout_version] CVirtualControllerLayout layout_version
         * @property {number|null} [actionset_id] CVirtualControllerLayout actionset_id
         * @property {Array.<ICVirtualControllerElement>|null} [elements] CVirtualControllerLayout elements
         */
    
        /**
         * Constructs a new CVirtualControllerLayout.
         * @exports CVirtualControllerLayout
         * @classdesc Represents a CVirtualControllerLayout.
         * @implements ICVirtualControllerLayout
         * @constructor
         * @param {ICVirtualControllerLayout=} [properties] Properties to set
         */
        function CVirtualControllerLayout(properties) {
            this.elements = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualControllerLayout layout_version.
         * @member {number} layout_version
         * @memberof CVirtualControllerLayout
         * @instance
         */
        CVirtualControllerLayout.prototype.layout_version = 0;
    
        /**
         * CVirtualControllerLayout actionset_id.
         * @member {number} actionset_id
         * @memberof CVirtualControllerLayout
         * @instance
         */
        CVirtualControllerLayout.prototype.actionset_id = 0;
    
        /**
         * CVirtualControllerLayout elements.
         * @member {Array.<ICVirtualControllerElement>} elements
         * @memberof CVirtualControllerLayout
         * @instance
         */
        CVirtualControllerLayout.prototype.elements = $util.emptyArray;
    
        /**
         * Creates a new CVirtualControllerLayout instance using the specified properties.
         * @function create
         * @memberof CVirtualControllerLayout
         * @static
         * @param {ICVirtualControllerLayout=} [properties] Properties to set
         * @returns {CVirtualControllerLayout} CVirtualControllerLayout instance
         */
        CVirtualControllerLayout.create = function create(properties) {
            return new CVirtualControllerLayout(properties);
        };
    
        /**
         * Encodes the specified CVirtualControllerLayout message. Does not implicitly {@link CVirtualControllerLayout.verify|verify} messages.
         * @function encode
         * @memberof CVirtualControllerLayout
         * @static
         * @param {ICVirtualControllerLayout} message CVirtualControllerLayout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerLayout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.layout_version != null && message.hasOwnProperty("layout_version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.layout_version);
            if (message.actionset_id != null && message.hasOwnProperty("actionset_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.actionset_id);
            if (message.elements != null && message.elements.length)
                for (var i = 0; i < message.elements.length; ++i)
                    $root.CVirtualControllerElement.encode(message.elements[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualControllerLayout message, length delimited. Does not implicitly {@link CVirtualControllerLayout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualControllerLayout
         * @static
         * @param {ICVirtualControllerLayout} message CVirtualControllerLayout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerLayout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualControllerLayout message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualControllerLayout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualControllerLayout} CVirtualControllerLayout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerLayout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerLayout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.layout_version = reader.int32();
                    break;
                case 2:
                    message.actionset_id = reader.int32();
                    break;
                case 4:
                    if (!(message.elements && message.elements.length))
                        message.elements = [];
                    message.elements.push($root.CVirtualControllerElement.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualControllerLayout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualControllerLayout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualControllerLayout} CVirtualControllerLayout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerLayout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualControllerLayout message.
         * @function verify
         * @memberof CVirtualControllerLayout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualControllerLayout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.layout_version != null && message.hasOwnProperty("layout_version"))
                if (!$util.isInteger(message.layout_version))
                    return "layout_version: integer expected";
            if (message.actionset_id != null && message.hasOwnProperty("actionset_id"))
                if (!$util.isInteger(message.actionset_id))
                    return "actionset_id: integer expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (var i = 0; i < message.elements.length; ++i) {
                    var error = $root.CVirtualControllerElement.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CVirtualControllerLayout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualControllerLayout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualControllerLayout} CVirtualControllerLayout
         */
        CVirtualControllerLayout.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualControllerLayout)
                return object;
            var message = new $root.CVirtualControllerLayout();
            if (object.layout_version != null)
                message.layout_version = object.layout_version | 0;
            if (object.actionset_id != null)
                message.actionset_id = object.actionset_id | 0;
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".CVirtualControllerLayout.elements: array expected");
                message.elements = [];
                for (var i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".CVirtualControllerLayout.elements: object expected");
                    message.elements[i] = $root.CVirtualControllerElement.fromObject(object.elements[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualControllerLayout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualControllerLayout
         * @static
         * @param {CVirtualControllerLayout} message CVirtualControllerLayout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualControllerLayout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (options.defaults) {
                object.layout_version = 0;
                object.actionset_id = 0;
            }
            if (message.layout_version != null && message.hasOwnProperty("layout_version"))
                object.layout_version = message.layout_version;
            if (message.actionset_id != null && message.hasOwnProperty("actionset_id"))
                object.actionset_id = message.actionset_id;
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (var j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.CVirtualControllerElement.toObject(message.elements[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CVirtualControllerLayout to JSON.
         * @function toJSON
         * @memberof CVirtualControllerLayout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualControllerLayout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVirtualControllerLayout;
    })();
    
    $root.CVirtualControllerLayouts = (function() {
    
        /**
         * Properties of a CVirtualControllerLayouts.
         * @exports ICVirtualControllerLayouts
         * @interface ICVirtualControllerLayouts
         * @property {Array.<ICVirtualControllerLayout>|null} [layouts] CVirtualControllerLayouts layouts
         * @property {EInputMode|null} [input_mode] CVirtualControllerLayouts input_mode
         * @property {EMouseMode|null} [mouse_mode] CVirtualControllerLayouts mouse_mode
         */
    
        /**
         * Constructs a new CVirtualControllerLayouts.
         * @exports CVirtualControllerLayouts
         * @classdesc Represents a CVirtualControllerLayouts.
         * @implements ICVirtualControllerLayouts
         * @constructor
         * @param {ICVirtualControllerLayouts=} [properties] Properties to set
         */
        function CVirtualControllerLayouts(properties) {
            this.layouts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualControllerLayouts layouts.
         * @member {Array.<ICVirtualControllerLayout>} layouts
         * @memberof CVirtualControllerLayouts
         * @instance
         */
        CVirtualControllerLayouts.prototype.layouts = $util.emptyArray;
    
        /**
         * CVirtualControllerLayouts input_mode.
         * @member {EInputMode} input_mode
         * @memberof CVirtualControllerLayouts
         * @instance
         */
        CVirtualControllerLayouts.prototype.input_mode = 2;
    
        /**
         * CVirtualControllerLayouts mouse_mode.
         * @member {EMouseMode} mouse_mode
         * @memberof CVirtualControllerLayouts
         * @instance
         */
        CVirtualControllerLayouts.prototype.mouse_mode = 0;
    
        /**
         * Creates a new CVirtualControllerLayouts instance using the specified properties.
         * @function create
         * @memberof CVirtualControllerLayouts
         * @static
         * @param {ICVirtualControllerLayouts=} [properties] Properties to set
         * @returns {CVirtualControllerLayouts} CVirtualControllerLayouts instance
         */
        CVirtualControllerLayouts.create = function create(properties) {
            return new CVirtualControllerLayouts(properties);
        };
    
        /**
         * Encodes the specified CVirtualControllerLayouts message. Does not implicitly {@link CVirtualControllerLayouts.verify|verify} messages.
         * @function encode
         * @memberof CVirtualControllerLayouts
         * @static
         * @param {ICVirtualControllerLayouts} message CVirtualControllerLayouts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerLayouts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.layouts != null && message.layouts.length)
                for (var i = 0; i < message.layouts.length; ++i)
                    $root.CVirtualControllerLayout.encode(message.layouts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.input_mode != null && message.hasOwnProperty("input_mode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.input_mode);
            if (message.mouse_mode != null && message.hasOwnProperty("mouse_mode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mouse_mode);
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualControllerLayouts message, length delimited. Does not implicitly {@link CVirtualControllerLayouts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualControllerLayouts
         * @static
         * @param {ICVirtualControllerLayouts} message CVirtualControllerLayouts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerLayouts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualControllerLayouts message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualControllerLayouts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualControllerLayouts} CVirtualControllerLayouts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerLayouts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerLayouts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.layouts && message.layouts.length))
                        message.layouts = [];
                    message.layouts.push($root.CVirtualControllerLayout.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.input_mode = reader.int32();
                    break;
                case 3:
                    message.mouse_mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualControllerLayouts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualControllerLayouts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualControllerLayouts} CVirtualControllerLayouts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerLayouts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualControllerLayouts message.
         * @function verify
         * @memberof CVirtualControllerLayouts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualControllerLayouts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.layouts != null && message.hasOwnProperty("layouts")) {
                if (!Array.isArray(message.layouts))
                    return "layouts: array expected";
                for (var i = 0; i < message.layouts.length; ++i) {
                    var error = $root.CVirtualControllerLayout.verify(message.layouts[i]);
                    if (error)
                        return "layouts." + error;
                }
            }
            if (message.input_mode != null && message.hasOwnProperty("input_mode"))
                switch (message.input_mode) {
                default:
                    return "input_mode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.mouse_mode != null && message.hasOwnProperty("mouse_mode"))
                switch (message.mouse_mode) {
                default:
                    return "mouse_mode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CVirtualControllerLayouts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualControllerLayouts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualControllerLayouts} CVirtualControllerLayouts
         */
        CVirtualControllerLayouts.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualControllerLayouts)
                return object;
            var message = new $root.CVirtualControllerLayouts();
            if (object.layouts) {
                if (!Array.isArray(object.layouts))
                    throw TypeError(".CVirtualControllerLayouts.layouts: array expected");
                message.layouts = [];
                for (var i = 0; i < object.layouts.length; ++i) {
                    if (typeof object.layouts[i] !== "object")
                        throw TypeError(".CVirtualControllerLayouts.layouts: object expected");
                    message.layouts[i] = $root.CVirtualControllerLayout.fromObject(object.layouts[i]);
                }
            }
            switch (object.input_mode) {
            case "k_EInputModeUnknown":
            case 0:
                message.input_mode = 0;
                break;
            case "k_EInputModeMouse":
            case 1:
                message.input_mode = 1;
                break;
            case "k_EInputModeController":
            case 2:
                message.input_mode = 2;
                break;
            case "k_EInputModeMouseAndController":
            case 3:
                message.input_mode = 3;
                break;
            }
            switch (object.mouse_mode) {
            case "k_EMouseModeUnknown":
            case 0:
                message.mouse_mode = 0;
                break;
            case "k_EMouseModeRelativeCursor":
            case 1:
                message.mouse_mode = 1;
                break;
            case "k_EMouseModeAbsoluteCursor":
            case 2:
                message.mouse_mode = 2;
                break;
            case "k_EMouseModeTouch":
            case 3:
                message.mouse_mode = 3;
                break;
            case "k_EMouseModeRelative":
            case 4:
                message.mouse_mode = 4;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualControllerLayouts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualControllerLayouts
         * @static
         * @param {CVirtualControllerLayouts} message CVirtualControllerLayouts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualControllerLayouts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.layouts = [];
            if (options.defaults) {
                object.input_mode = options.enums === String ? "k_EInputModeController" : 2;
                object.mouse_mode = options.enums === String ? "k_EMouseModeUnknown" : 0;
            }
            if (message.layouts && message.layouts.length) {
                object.layouts = [];
                for (var j = 0; j < message.layouts.length; ++j)
                    object.layouts[j] = $root.CVirtualControllerLayout.toObject(message.layouts[j], options);
            }
            if (message.input_mode != null && message.hasOwnProperty("input_mode"))
                object.input_mode = options.enums === String ? $root.EInputMode[message.input_mode] : message.input_mode;
            if (message.mouse_mode != null && message.hasOwnProperty("mouse_mode"))
                object.mouse_mode = options.enums === String ? $root.EMouseMode[message.mouse_mode] : message.mouse_mode;
            return object;
        };
    
        /**
         * Converts this CVirtualControllerLayouts to JSON.
         * @function toJSON
         * @memberof CVirtualControllerLayouts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualControllerLayouts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVirtualControllerLayouts;
    })();
    
    $root.CVirtualControllerConfig = (function() {
    
        /**
         * Properties of a CVirtualControllerConfig.
         * @exports ICVirtualControllerConfig
         * @interface ICVirtualControllerConfig
         * @property {string|null} [name] CVirtualControllerConfig name
         * @property {Array.<CVirtualControllerConfig.IActionSet>|null} [actionsets] CVirtualControllerConfig actionsets
         * @property {EMouseMode|null} [default_mouse_mode] CVirtualControllerConfig default_mouse_mode
         */
    
        /**
         * Constructs a new CVirtualControllerConfig.
         * @exports CVirtualControllerConfig
         * @classdesc Represents a CVirtualControllerConfig.
         * @implements ICVirtualControllerConfig
         * @constructor
         * @param {ICVirtualControllerConfig=} [properties] Properties to set
         */
        function CVirtualControllerConfig(properties) {
            this.actionsets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualControllerConfig name.
         * @member {string} name
         * @memberof CVirtualControllerConfig
         * @instance
         */
        CVirtualControllerConfig.prototype.name = "";
    
        /**
         * CVirtualControllerConfig actionsets.
         * @member {Array.<CVirtualControllerConfig.IActionSet>} actionsets
         * @memberof CVirtualControllerConfig
         * @instance
         */
        CVirtualControllerConfig.prototype.actionsets = $util.emptyArray;
    
        /**
         * CVirtualControllerConfig default_mouse_mode.
         * @member {EMouseMode} default_mouse_mode
         * @memberof CVirtualControllerConfig
         * @instance
         */
        CVirtualControllerConfig.prototype.default_mouse_mode = 4;
    
        /**
         * Creates a new CVirtualControllerConfig instance using the specified properties.
         * @function create
         * @memberof CVirtualControllerConfig
         * @static
         * @param {ICVirtualControllerConfig=} [properties] Properties to set
         * @returns {CVirtualControllerConfig} CVirtualControllerConfig instance
         */
        CVirtualControllerConfig.create = function create(properties) {
            return new CVirtualControllerConfig(properties);
        };
    
        /**
         * Encodes the specified CVirtualControllerConfig message. Does not implicitly {@link CVirtualControllerConfig.verify|verify} messages.
         * @function encode
         * @memberof CVirtualControllerConfig
         * @static
         * @param {ICVirtualControllerConfig} message CVirtualControllerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.actionsets != null && message.actionsets.length)
                for (var i = 0; i < message.actionsets.length; ++i)
                    $root.CVirtualControllerConfig.ActionSet.encode(message.actionsets[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.default_mouse_mode != null && message.hasOwnProperty("default_mouse_mode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.default_mouse_mode);
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualControllerConfig message, length delimited. Does not implicitly {@link CVirtualControllerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualControllerConfig
         * @static
         * @param {ICVirtualControllerConfig} message CVirtualControllerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualControllerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualControllerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualControllerConfig} CVirtualControllerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.actionsets && message.actionsets.length))
                        message.actionsets = [];
                    message.actionsets.push($root.CVirtualControllerConfig.ActionSet.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.default_mouse_mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualControllerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualControllerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualControllerConfig} CVirtualControllerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualControllerConfig message.
         * @function verify
         * @memberof CVirtualControllerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualControllerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.actionsets != null && message.hasOwnProperty("actionsets")) {
                if (!Array.isArray(message.actionsets))
                    return "actionsets: array expected";
                for (var i = 0; i < message.actionsets.length; ++i) {
                    var error = $root.CVirtualControllerConfig.ActionSet.verify(message.actionsets[i]);
                    if (error)
                        return "actionsets." + error;
                }
            }
            if (message.default_mouse_mode != null && message.hasOwnProperty("default_mouse_mode"))
                switch (message.default_mouse_mode) {
                default:
                    return "default_mouse_mode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a CVirtualControllerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualControllerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualControllerConfig} CVirtualControllerConfig
         */
        CVirtualControllerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualControllerConfig)
                return object;
            var message = new $root.CVirtualControllerConfig();
            if (object.name != null)
                message.name = String(object.name);
            if (object.actionsets) {
                if (!Array.isArray(object.actionsets))
                    throw TypeError(".CVirtualControllerConfig.actionsets: array expected");
                message.actionsets = [];
                for (var i = 0; i < object.actionsets.length; ++i) {
                    if (typeof object.actionsets[i] !== "object")
                        throw TypeError(".CVirtualControllerConfig.actionsets: object expected");
                    message.actionsets[i] = $root.CVirtualControllerConfig.ActionSet.fromObject(object.actionsets[i]);
                }
            }
            switch (object.default_mouse_mode) {
            case "k_EMouseModeUnknown":
            case 0:
                message.default_mouse_mode = 0;
                break;
            case "k_EMouseModeRelativeCursor":
            case 1:
                message.default_mouse_mode = 1;
                break;
            case "k_EMouseModeAbsoluteCursor":
            case 2:
                message.default_mouse_mode = 2;
                break;
            case "k_EMouseModeTouch":
            case 3:
                message.default_mouse_mode = 3;
                break;
            case "k_EMouseModeRelative":
            case 4:
                message.default_mouse_mode = 4;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualControllerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualControllerConfig
         * @static
         * @param {CVirtualControllerConfig} message CVirtualControllerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualControllerConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.actionsets = [];
            if (options.defaults) {
                object.name = "";
                object.default_mouse_mode = options.enums === String ? "k_EMouseModeRelative" : 4;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.actionsets && message.actionsets.length) {
                object.actionsets = [];
                for (var j = 0; j < message.actionsets.length; ++j)
                    object.actionsets[j] = $root.CVirtualControllerConfig.ActionSet.toObject(message.actionsets[j], options);
            }
            if (message.default_mouse_mode != null && message.hasOwnProperty("default_mouse_mode"))
                object.default_mouse_mode = options.enums === String ? $root.EMouseMode[message.default_mouse_mode] : message.default_mouse_mode;
            return object;
        };
    
        /**
         * Converts this CVirtualControllerConfig to JSON.
         * @function toJSON
         * @memberof CVirtualControllerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualControllerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CVirtualControllerConfig.Control = (function() {
    
            /**
             * Properties of a Control.
             * @memberof CVirtualControllerConfig
             * @interface IControl
             * @property {string|null} [name] Control name
             * @property {string|null} [icon] Control icon
             * @property {number|null} [input_source] Control input_source
             * @property {number|null} [input_mode] Control input_mode
             * @property {number|null} [input_element] Control input_element
             * @property {number|null} [output_gamepad] Control output_gamepad
             * @property {number|null} [output_keyboard] Control output_keyboard
             * @property {number|null} [output_mouse] Control output_mouse
             * @property {string|null} [icon_foreground] Control icon_foreground
             * @property {string|null} [icon_background] Control icon_background
             */
    
            /**
             * Constructs a new Control.
             * @memberof CVirtualControllerConfig
             * @classdesc Represents a Control.
             * @implements IControl
             * @constructor
             * @param {CVirtualControllerConfig.IControl=} [properties] Properties to set
             */
            function Control(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Control name.
             * @member {string} name
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.name = "";
    
            /**
             * Control icon.
             * @member {string} icon
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.icon = "";
    
            /**
             * Control input_source.
             * @member {number} input_source
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.input_source = 0;
    
            /**
             * Control input_mode.
             * @member {number} input_mode
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.input_mode = 0;
    
            /**
             * Control input_element.
             * @member {number} input_element
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.input_element = 0;
    
            /**
             * Control output_gamepad.
             * @member {number} output_gamepad
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.output_gamepad = 0;
    
            /**
             * Control output_keyboard.
             * @member {number} output_keyboard
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.output_keyboard = 0;
    
            /**
             * Control output_mouse.
             * @member {number} output_mouse
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.output_mouse = 0;
    
            /**
             * Control icon_foreground.
             * @member {string} icon_foreground
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.icon_foreground = "";
    
            /**
             * Control icon_background.
             * @member {string} icon_background
             * @memberof CVirtualControllerConfig.Control
             * @instance
             */
            Control.prototype.icon_background = "";
    
            /**
             * Creates a new Control instance using the specified properties.
             * @function create
             * @memberof CVirtualControllerConfig.Control
             * @static
             * @param {CVirtualControllerConfig.IControl=} [properties] Properties to set
             * @returns {CVirtualControllerConfig.Control} Control instance
             */
            Control.create = function create(properties) {
                return new Control(properties);
            };
    
            /**
             * Encodes the specified Control message. Does not implicitly {@link CVirtualControllerConfig.Control.verify|verify} messages.
             * @function encode
             * @memberof CVirtualControllerConfig.Control
             * @static
             * @param {CVirtualControllerConfig.IControl} message Control message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Control.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.icon != null && message.hasOwnProperty("icon"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.icon);
                if (message.input_source != null && message.hasOwnProperty("input_source"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.input_source);
                if (message.input_mode != null && message.hasOwnProperty("input_mode"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.input_mode);
                if (message.input_element != null && message.hasOwnProperty("input_element"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.input_element);
                if (message.output_gamepad != null && message.hasOwnProperty("output_gamepad"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.output_gamepad);
                if (message.output_keyboard != null && message.hasOwnProperty("output_keyboard"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.output_keyboard);
                if (message.output_mouse != null && message.hasOwnProperty("output_mouse"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.output_mouse);
                if (message.icon_foreground != null && message.hasOwnProperty("icon_foreground"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.icon_foreground);
                if (message.icon_background != null && message.hasOwnProperty("icon_background"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.icon_background);
                return writer;
            };
    
            /**
             * Encodes the specified Control message, length delimited. Does not implicitly {@link CVirtualControllerConfig.Control.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CVirtualControllerConfig.Control
             * @static
             * @param {CVirtualControllerConfig.IControl} message Control message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Control.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Control message from the specified reader or buffer.
             * @function decode
             * @memberof CVirtualControllerConfig.Control
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CVirtualControllerConfig.Control} Control
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Control.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerConfig.Control();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.icon = reader.string();
                        break;
                    case 3:
                        message.input_source = reader.int32();
                        break;
                    case 4:
                        message.input_mode = reader.int32();
                        break;
                    case 5:
                        message.input_element = reader.int32();
                        break;
                    case 6:
                        message.output_gamepad = reader.int32();
                        break;
                    case 7:
                        message.output_keyboard = reader.int32();
                        break;
                    case 8:
                        message.output_mouse = reader.int32();
                        break;
                    case 9:
                        message.icon_foreground = reader.string();
                        break;
                    case 10:
                        message.icon_background = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Control message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CVirtualControllerConfig.Control
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CVirtualControllerConfig.Control} Control
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Control.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Control message.
             * @function verify
             * @memberof CVirtualControllerConfig.Control
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Control.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.icon != null && message.hasOwnProperty("icon"))
                    if (!$util.isString(message.icon))
                        return "icon: string expected";
                if (message.input_source != null && message.hasOwnProperty("input_source"))
                    if (!$util.isInteger(message.input_source))
                        return "input_source: integer expected";
                if (message.input_mode != null && message.hasOwnProperty("input_mode"))
                    if (!$util.isInteger(message.input_mode))
                        return "input_mode: integer expected";
                if (message.input_element != null && message.hasOwnProperty("input_element"))
                    if (!$util.isInteger(message.input_element))
                        return "input_element: integer expected";
                if (message.output_gamepad != null && message.hasOwnProperty("output_gamepad"))
                    if (!$util.isInteger(message.output_gamepad))
                        return "output_gamepad: integer expected";
                if (message.output_keyboard != null && message.hasOwnProperty("output_keyboard"))
                    if (!$util.isInteger(message.output_keyboard))
                        return "output_keyboard: integer expected";
                if (message.output_mouse != null && message.hasOwnProperty("output_mouse"))
                    if (!$util.isInteger(message.output_mouse))
                        return "output_mouse: integer expected";
                if (message.icon_foreground != null && message.hasOwnProperty("icon_foreground"))
                    if (!$util.isString(message.icon_foreground))
                        return "icon_foreground: string expected";
                if (message.icon_background != null && message.hasOwnProperty("icon_background"))
                    if (!$util.isString(message.icon_background))
                        return "icon_background: string expected";
                return null;
            };
    
            /**
             * Creates a Control message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CVirtualControllerConfig.Control
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CVirtualControllerConfig.Control} Control
             */
            Control.fromObject = function fromObject(object) {
                if (object instanceof $root.CVirtualControllerConfig.Control)
                    return object;
                var message = new $root.CVirtualControllerConfig.Control();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.icon != null)
                    message.icon = String(object.icon);
                if (object.input_source != null)
                    message.input_source = object.input_source | 0;
                if (object.input_mode != null)
                    message.input_mode = object.input_mode | 0;
                if (object.input_element != null)
                    message.input_element = object.input_element | 0;
                if (object.output_gamepad != null)
                    message.output_gamepad = object.output_gamepad | 0;
                if (object.output_keyboard != null)
                    message.output_keyboard = object.output_keyboard | 0;
                if (object.output_mouse != null)
                    message.output_mouse = object.output_mouse | 0;
                if (object.icon_foreground != null)
                    message.icon_foreground = String(object.icon_foreground);
                if (object.icon_background != null)
                    message.icon_background = String(object.icon_background);
                return message;
            };
    
            /**
             * Creates a plain object from a Control message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CVirtualControllerConfig.Control
             * @static
             * @param {CVirtualControllerConfig.Control} message Control
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Control.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.icon = "";
                    object.input_source = 0;
                    object.input_mode = 0;
                    object.input_element = 0;
                    object.output_gamepad = 0;
                    object.output_keyboard = 0;
                    object.output_mouse = 0;
                    object.icon_foreground = "";
                    object.icon_background = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.icon != null && message.hasOwnProperty("icon"))
                    object.icon = message.icon;
                if (message.input_source != null && message.hasOwnProperty("input_source"))
                    object.input_source = message.input_source;
                if (message.input_mode != null && message.hasOwnProperty("input_mode"))
                    object.input_mode = message.input_mode;
                if (message.input_element != null && message.hasOwnProperty("input_element"))
                    object.input_element = message.input_element;
                if (message.output_gamepad != null && message.hasOwnProperty("output_gamepad"))
                    object.output_gamepad = message.output_gamepad;
                if (message.output_keyboard != null && message.hasOwnProperty("output_keyboard"))
                    object.output_keyboard = message.output_keyboard;
                if (message.output_mouse != null && message.hasOwnProperty("output_mouse"))
                    object.output_mouse = message.output_mouse;
                if (message.icon_foreground != null && message.hasOwnProperty("icon_foreground"))
                    object.icon_foreground = message.icon_foreground;
                if (message.icon_background != null && message.hasOwnProperty("icon_background"))
                    object.icon_background = message.icon_background;
                return object;
            };
    
            /**
             * Converts this Control to JSON.
             * @function toJSON
             * @memberof CVirtualControllerConfig.Control
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Control.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Control;
        })();
    
        CVirtualControllerConfig.ActionSet = (function() {
    
            /**
             * Properties of an ActionSet.
             * @memberof CVirtualControllerConfig
             * @interface IActionSet
             * @property {number|null} [id] ActionSet id
             * @property {number|null} [parent_id] ActionSet parent_id
             * @property {string|null} [name] ActionSet name
             * @property {Array.<CVirtualControllerConfig.IControl>|null} [controls] ActionSet controls
             */
    
            /**
             * Constructs a new ActionSet.
             * @memberof CVirtualControllerConfig
             * @classdesc Represents an ActionSet.
             * @implements IActionSet
             * @constructor
             * @param {CVirtualControllerConfig.IActionSet=} [properties] Properties to set
             */
            function ActionSet(properties) {
                this.controls = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ActionSet id.
             * @member {number} id
             * @memberof CVirtualControllerConfig.ActionSet
             * @instance
             */
            ActionSet.prototype.id = 0;
    
            /**
             * ActionSet parent_id.
             * @member {number} parent_id
             * @memberof CVirtualControllerConfig.ActionSet
             * @instance
             */
            ActionSet.prototype.parent_id = 0;
    
            /**
             * ActionSet name.
             * @member {string} name
             * @memberof CVirtualControllerConfig.ActionSet
             * @instance
             */
            ActionSet.prototype.name = "";
    
            /**
             * ActionSet controls.
             * @member {Array.<CVirtualControllerConfig.IControl>} controls
             * @memberof CVirtualControllerConfig.ActionSet
             * @instance
             */
            ActionSet.prototype.controls = $util.emptyArray;
    
            /**
             * Creates a new ActionSet instance using the specified properties.
             * @function create
             * @memberof CVirtualControllerConfig.ActionSet
             * @static
             * @param {CVirtualControllerConfig.IActionSet=} [properties] Properties to set
             * @returns {CVirtualControllerConfig.ActionSet} ActionSet instance
             */
            ActionSet.create = function create(properties) {
                return new ActionSet(properties);
            };
    
            /**
             * Encodes the specified ActionSet message. Does not implicitly {@link CVirtualControllerConfig.ActionSet.verify|verify} messages.
             * @function encode
             * @memberof CVirtualControllerConfig.ActionSet
             * @static
             * @param {CVirtualControllerConfig.IActionSet} message ActionSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActionSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.parent_id != null && message.hasOwnProperty("parent_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.parent_id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.controls != null && message.controls.length)
                    for (var i = 0; i < message.controls.length; ++i)
                        $root.CVirtualControllerConfig.Control.encode(message.controls[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ActionSet message, length delimited. Does not implicitly {@link CVirtualControllerConfig.ActionSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CVirtualControllerConfig.ActionSet
             * @static
             * @param {CVirtualControllerConfig.IActionSet} message ActionSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActionSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ActionSet message from the specified reader or buffer.
             * @function decode
             * @memberof CVirtualControllerConfig.ActionSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CVirtualControllerConfig.ActionSet} ActionSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActionSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerConfig.ActionSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.parent_id = reader.int32();
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        if (!(message.controls && message.controls.length))
                            message.controls = [];
                        message.controls.push($root.CVirtualControllerConfig.Control.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an ActionSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CVirtualControllerConfig.ActionSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CVirtualControllerConfig.ActionSet} ActionSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActionSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ActionSet message.
             * @function verify
             * @memberof CVirtualControllerConfig.ActionSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ActionSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.parent_id != null && message.hasOwnProperty("parent_id"))
                    if (!$util.isInteger(message.parent_id))
                        return "parent_id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.controls != null && message.hasOwnProperty("controls")) {
                    if (!Array.isArray(message.controls))
                        return "controls: array expected";
                    for (var i = 0; i < message.controls.length; ++i) {
                        var error = $root.CVirtualControllerConfig.Control.verify(message.controls[i]);
                        if (error)
                            return "controls." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an ActionSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CVirtualControllerConfig.ActionSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CVirtualControllerConfig.ActionSet} ActionSet
             */
            ActionSet.fromObject = function fromObject(object) {
                if (object instanceof $root.CVirtualControllerConfig.ActionSet)
                    return object;
                var message = new $root.CVirtualControllerConfig.ActionSet();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.parent_id != null)
                    message.parent_id = object.parent_id | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.controls) {
                    if (!Array.isArray(object.controls))
                        throw TypeError(".CVirtualControllerConfig.ActionSet.controls: array expected");
                    message.controls = [];
                    for (var i = 0; i < object.controls.length; ++i) {
                        if (typeof object.controls[i] !== "object")
                            throw TypeError(".CVirtualControllerConfig.ActionSet.controls: object expected");
                        message.controls[i] = $root.CVirtualControllerConfig.Control.fromObject(object.controls[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from an ActionSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CVirtualControllerConfig.ActionSet
             * @static
             * @param {CVirtualControllerConfig.ActionSet} message ActionSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ActionSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.controls = [];
                if (options.defaults) {
                    object.id = 0;
                    object.parent_id = 0;
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.parent_id != null && message.hasOwnProperty("parent_id"))
                    object.parent_id = message.parent_id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.controls && message.controls.length) {
                    object.controls = [];
                    for (var j = 0; j < message.controls.length; ++j)
                        object.controls[j] = $root.CVirtualControllerConfig.Control.toObject(message.controls[j], options);
                }
                return object;
            };
    
            /**
             * Converts this ActionSet to JSON.
             * @function toJSON
             * @memberof CVirtualControllerConfig.ActionSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ActionSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ActionSet;
        })();
    
        return CVirtualControllerConfig;
    })();
    
    $root.CVirtualControllerLayoutPackage = (function() {
    
        /**
         * Properties of a CVirtualControllerLayoutPackage.
         * @exports ICVirtualControllerLayoutPackage
         * @interface ICVirtualControllerLayoutPackage
         * @property {number|null} [appid] CVirtualControllerLayoutPackage appid
         * @property {number|null} [revision] CVirtualControllerLayoutPackage revision
         * @property {ICVirtualControllerConfig|null} [config] CVirtualControllerLayoutPackage config
         * @property {ICVirtualControllerLayouts|null} [layouts] CVirtualControllerLayoutPackage layouts
         */
    
        /**
         * Constructs a new CVirtualControllerLayoutPackage.
         * @exports CVirtualControllerLayoutPackage
         * @classdesc Represents a CVirtualControllerLayoutPackage.
         * @implements ICVirtualControllerLayoutPackage
         * @constructor
         * @param {ICVirtualControllerLayoutPackage=} [properties] Properties to set
         */
        function CVirtualControllerLayoutPackage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualControllerLayoutPackage appid.
         * @member {number} appid
         * @memberof CVirtualControllerLayoutPackage
         * @instance
         */
        CVirtualControllerLayoutPackage.prototype.appid = 0;
    
        /**
         * CVirtualControllerLayoutPackage revision.
         * @member {number} revision
         * @memberof CVirtualControllerLayoutPackage
         * @instance
         */
        CVirtualControllerLayoutPackage.prototype.revision = 0;
    
        /**
         * CVirtualControllerLayoutPackage config.
         * @member {ICVirtualControllerConfig|null|undefined} config
         * @memberof CVirtualControllerLayoutPackage
         * @instance
         */
        CVirtualControllerLayoutPackage.prototype.config = null;
    
        /**
         * CVirtualControllerLayoutPackage layouts.
         * @member {ICVirtualControllerLayouts|null|undefined} layouts
         * @memberof CVirtualControllerLayoutPackage
         * @instance
         */
        CVirtualControllerLayoutPackage.prototype.layouts = null;
    
        /**
         * Creates a new CVirtualControllerLayoutPackage instance using the specified properties.
         * @function create
         * @memberof CVirtualControllerLayoutPackage
         * @static
         * @param {ICVirtualControllerLayoutPackage=} [properties] Properties to set
         * @returns {CVirtualControllerLayoutPackage} CVirtualControllerLayoutPackage instance
         */
        CVirtualControllerLayoutPackage.create = function create(properties) {
            return new CVirtualControllerLayoutPackage(properties);
        };
    
        /**
         * Encodes the specified CVirtualControllerLayoutPackage message. Does not implicitly {@link CVirtualControllerLayoutPackage.verify|verify} messages.
         * @function encode
         * @memberof CVirtualControllerLayoutPackage
         * @static
         * @param {ICVirtualControllerLayoutPackage} message CVirtualControllerLayoutPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerLayoutPackage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.revision != null && message.hasOwnProperty("revision"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.revision);
            if (message.config != null && message.hasOwnProperty("config"))
                $root.CVirtualControllerConfig.encode(message.config, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.layouts != null && message.hasOwnProperty("layouts"))
                $root.CVirtualControllerLayouts.encode(message.layouts, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualControllerLayoutPackage message, length delimited. Does not implicitly {@link CVirtualControllerLayoutPackage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualControllerLayoutPackage
         * @static
         * @param {ICVirtualControllerLayoutPackage} message CVirtualControllerLayoutPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerLayoutPackage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualControllerLayoutPackage message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualControllerLayoutPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualControllerLayoutPackage} CVirtualControllerLayoutPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerLayoutPackage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerLayoutPackage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.revision = reader.uint32();
                    break;
                case 3:
                    message.config = $root.CVirtualControllerConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.layouts = $root.CVirtualControllerLayouts.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualControllerLayoutPackage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualControllerLayoutPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualControllerLayoutPackage} CVirtualControllerLayoutPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerLayoutPackage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualControllerLayoutPackage message.
         * @function verify
         * @memberof CVirtualControllerLayoutPackage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualControllerLayoutPackage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.revision != null && message.hasOwnProperty("revision"))
                if (!$util.isInteger(message.revision))
                    return "revision: integer expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                var error = $root.CVirtualControllerConfig.verify(message.config);
                if (error)
                    return "config." + error;
            }
            if (message.layouts != null && message.hasOwnProperty("layouts")) {
                var error = $root.CVirtualControllerLayouts.verify(message.layouts);
                if (error)
                    return "layouts." + error;
            }
            return null;
        };
    
        /**
         * Creates a CVirtualControllerLayoutPackage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualControllerLayoutPackage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualControllerLayoutPackage} CVirtualControllerLayoutPackage
         */
        CVirtualControllerLayoutPackage.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualControllerLayoutPackage)
                return object;
            var message = new $root.CVirtualControllerLayoutPackage();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.revision != null)
                message.revision = object.revision >>> 0;
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".CVirtualControllerLayoutPackage.config: object expected");
                message.config = $root.CVirtualControllerConfig.fromObject(object.config);
            }
            if (object.layouts != null) {
                if (typeof object.layouts !== "object")
                    throw TypeError(".CVirtualControllerLayoutPackage.layouts: object expected");
                message.layouts = $root.CVirtualControllerLayouts.fromObject(object.layouts);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualControllerLayoutPackage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualControllerLayoutPackage
         * @static
         * @param {CVirtualControllerLayoutPackage} message CVirtualControllerLayoutPackage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualControllerLayoutPackage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appid = 0;
                object.revision = 0;
                object.config = null;
                object.layouts = null;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.revision != null && message.hasOwnProperty("revision"))
                object.revision = message.revision;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.CVirtualControllerConfig.toObject(message.config, options);
            if (message.layouts != null && message.hasOwnProperty("layouts"))
                object.layouts = $root.CVirtualControllerLayouts.toObject(message.layouts, options);
            return object;
        };
    
        /**
         * Converts this CVirtualControllerLayoutPackage to JSON.
         * @function toJSON
         * @memberof CVirtualControllerLayoutPackage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualControllerLayoutPackage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVirtualControllerLayoutPackage;
    })();
    
    $root.CVirtualControllerGlobalConfig = (function() {
    
        /**
         * Properties of a CVirtualControllerGlobalConfig.
         * @exports ICVirtualControllerGlobalConfig
         * @interface ICVirtualControllerGlobalConfig
         * @property {boolean|null} [feedback_enabled] CVirtualControllerGlobalConfig feedback_enabled
         */
    
        /**
         * Constructs a new CVirtualControllerGlobalConfig.
         * @exports CVirtualControllerGlobalConfig
         * @classdesc Represents a CVirtualControllerGlobalConfig.
         * @implements ICVirtualControllerGlobalConfig
         * @constructor
         * @param {ICVirtualControllerGlobalConfig=} [properties] Properties to set
         */
        function CVirtualControllerGlobalConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CVirtualControllerGlobalConfig feedback_enabled.
         * @member {boolean} feedback_enabled
         * @memberof CVirtualControllerGlobalConfig
         * @instance
         */
        CVirtualControllerGlobalConfig.prototype.feedback_enabled = false;
    
        /**
         * Creates a new CVirtualControllerGlobalConfig instance using the specified properties.
         * @function create
         * @memberof CVirtualControllerGlobalConfig
         * @static
         * @param {ICVirtualControllerGlobalConfig=} [properties] Properties to set
         * @returns {CVirtualControllerGlobalConfig} CVirtualControllerGlobalConfig instance
         */
        CVirtualControllerGlobalConfig.create = function create(properties) {
            return new CVirtualControllerGlobalConfig(properties);
        };
    
        /**
         * Encodes the specified CVirtualControllerGlobalConfig message. Does not implicitly {@link CVirtualControllerGlobalConfig.verify|verify} messages.
         * @function encode
         * @memberof CVirtualControllerGlobalConfig
         * @static
         * @param {ICVirtualControllerGlobalConfig} message CVirtualControllerGlobalConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerGlobalConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.feedback_enabled != null && message.hasOwnProperty("feedback_enabled"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.feedback_enabled);
            return writer;
        };
    
        /**
         * Encodes the specified CVirtualControllerGlobalConfig message, length delimited. Does not implicitly {@link CVirtualControllerGlobalConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CVirtualControllerGlobalConfig
         * @static
         * @param {ICVirtualControllerGlobalConfig} message CVirtualControllerGlobalConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CVirtualControllerGlobalConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CVirtualControllerGlobalConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CVirtualControllerGlobalConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CVirtualControllerGlobalConfig} CVirtualControllerGlobalConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerGlobalConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerGlobalConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.feedback_enabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CVirtualControllerGlobalConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CVirtualControllerGlobalConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CVirtualControllerGlobalConfig} CVirtualControllerGlobalConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CVirtualControllerGlobalConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CVirtualControllerGlobalConfig message.
         * @function verify
         * @memberof CVirtualControllerGlobalConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CVirtualControllerGlobalConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.feedback_enabled != null && message.hasOwnProperty("feedback_enabled"))
                if (typeof message.feedback_enabled !== "boolean")
                    return "feedback_enabled: boolean expected";
            return null;
        };
    
        /**
         * Creates a CVirtualControllerGlobalConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CVirtualControllerGlobalConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CVirtualControllerGlobalConfig} CVirtualControllerGlobalConfig
         */
        CVirtualControllerGlobalConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CVirtualControllerGlobalConfig)
                return object;
            var message = new $root.CVirtualControllerGlobalConfig();
            if (object.feedback_enabled != null)
                message.feedback_enabled = Boolean(object.feedback_enabled);
            return message;
        };
    
        /**
         * Creates a plain object from a CVirtualControllerGlobalConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CVirtualControllerGlobalConfig
         * @static
         * @param {CVirtualControllerGlobalConfig} message CVirtualControllerGlobalConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CVirtualControllerGlobalConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.feedback_enabled = false;
            if (message.feedback_enabled != null && message.hasOwnProperty("feedback_enabled"))
                object.feedback_enabled = message.feedback_enabled;
            return object;
        };
    
        /**
         * Converts this CVirtualControllerGlobalConfig to JSON.
         * @function toJSON
         * @memberof CVirtualControllerGlobalConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CVirtualControllerGlobalConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CVirtualControllerGlobalConfig;
    })();

    return $root;
});
