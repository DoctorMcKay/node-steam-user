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
     * EControllerLayoutType enum.
     * @exports EControllerLayoutType
     * @enum {string}
     * @property {number} k_EControllerLayoutTypePhone=0 k_EControllerLayoutTypePhone value
     * @property {number} k_EControllerLayoutTypeTablet=1 k_EControllerLayoutTypeTablet value
     */
    $root.EControllerLayoutType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EControllerLayoutTypePhone"] = 0;
        values[valuesById[1] = "k_EControllerLayoutTypeTablet"] = 1;
        return values;
    })();
    
    $root.CVirtualControllerElement = (function() {
    
        /**
         * Properties of a CVirtualControllerElement.
         * @exports ICVirtualControllerElement
         * @interface ICVirtualControllerElement
         * @property {number|null} [x_position] CVirtualControllerElement x_position
         * @property {number|null} [y_position] CVirtualControllerElement y_position
         * @property {number|null} [width] CVirtualControllerElement width
         * @property {number|null} [height] CVirtualControllerElement height
         * @property {CVirtualControllerElement.IJoyStickControl|null} [joy_stick] CVirtualControllerElement joy_stick
         * @property {CVirtualControllerElement.IJoyButtonControl|null} [joy_button] CVirtualControllerElement joy_button
         * @property {CVirtualControllerElement.IJoyPadControl|null} [joy_pad] CVirtualControllerElement joy_pad
         * @property {CVirtualControllerElement.IMacroButtonControl|null} [macro_button] CVirtualControllerElement macro_button
         * @property {CVirtualControllerElement.ITrackpadControl|null} [trackpad] CVirtualControllerElement trackpad
         * @property {CVirtualControllerElement.IAxisButtonControl|null} [axis_button] CVirtualControllerElement axis_button
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
         * CVirtualControllerElement width.
         * @member {number} width
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.width = 0;
    
        /**
         * CVirtualControllerElement height.
         * @member {number} height
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.height = 0;
    
        /**
         * CVirtualControllerElement joy_stick.
         * @member {CVirtualControllerElement.IJoyStickControl|null|undefined} joy_stick
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.joy_stick = null;
    
        /**
         * CVirtualControllerElement joy_button.
         * @member {CVirtualControllerElement.IJoyButtonControl|null|undefined} joy_button
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.joy_button = null;
    
        /**
         * CVirtualControllerElement joy_pad.
         * @member {CVirtualControllerElement.IJoyPadControl|null|undefined} joy_pad
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.joy_pad = null;
    
        /**
         * CVirtualControllerElement macro_button.
         * @member {CVirtualControllerElement.IMacroButtonControl|null|undefined} macro_button
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.macro_button = null;
    
        /**
         * CVirtualControllerElement trackpad.
         * @member {CVirtualControllerElement.ITrackpadControl|null|undefined} trackpad
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.trackpad = null;
    
        /**
         * CVirtualControllerElement axis_button.
         * @member {CVirtualControllerElement.IAxisButtonControl|null|undefined} axis_button
         * @memberof CVirtualControllerElement
         * @instance
         */
        CVirtualControllerElement.prototype.axis_button = null;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * CVirtualControllerElement control.
         * @member {"joy_stick"|"joy_button"|"joy_pad"|"macro_button"|"trackpad"|"axis_button"|undefined} control
         * @memberof CVirtualControllerElement
         * @instance
         */
        Object.defineProperty(CVirtualControllerElement.prototype, "control", {
            get: $util.oneOfGetter($oneOfFields = ["joy_stick", "joy_button", "joy_pad", "macro_button", "trackpad", "axis_button"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
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
            if (message.x_position != null && message.hasOwnProperty("x_position"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.x_position);
            if (message.y_position != null && message.hasOwnProperty("y_position"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.y_position);
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.height);
            if (message.joy_stick != null && message.hasOwnProperty("joy_stick"))
                $root.CVirtualControllerElement.JoyStickControl.encode(message.joy_stick, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.joy_button != null && message.hasOwnProperty("joy_button"))
                $root.CVirtualControllerElement.JoyButtonControl.encode(message.joy_button, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.joy_pad != null && message.hasOwnProperty("joy_pad"))
                $root.CVirtualControllerElement.JoyPadControl.encode(message.joy_pad, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.macro_button != null && message.hasOwnProperty("macro_button"))
                $root.CVirtualControllerElement.MacroButtonControl.encode(message.macro_button, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.trackpad != null && message.hasOwnProperty("trackpad"))
                $root.CVirtualControllerElement.TrackpadControl.encode(message.trackpad, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.axis_button != null && message.hasOwnProperty("axis_button"))
                $root.CVirtualControllerElement.AxisButtonControl.encode(message.axis_button, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
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
                    message.x_position = reader.uint32();
                    break;
                case 2:
                    message.y_position = reader.uint32();
                    break;
                case 3:
                    message.width = reader.uint32();
                    break;
                case 4:
                    message.height = reader.uint32();
                    break;
                case 5:
                    message.joy_stick = $root.CVirtualControllerElement.JoyStickControl.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.joy_button = $root.CVirtualControllerElement.JoyButtonControl.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.joy_pad = $root.CVirtualControllerElement.JoyPadControl.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.macro_button = $root.CVirtualControllerElement.MacroButtonControl.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.trackpad = $root.CVirtualControllerElement.TrackpadControl.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.axis_button = $root.CVirtualControllerElement.AxisButtonControl.decode(reader, reader.uint32());
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
            var properties = {};
            if (message.x_position != null && message.hasOwnProperty("x_position"))
                if (!$util.isInteger(message.x_position))
                    return "x_position: integer expected";
            if (message.y_position != null && message.hasOwnProperty("y_position"))
                if (!$util.isInteger(message.y_position))
                    return "y_position: integer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.joy_stick != null && message.hasOwnProperty("joy_stick")) {
                properties.control = 1;
                {
                    var error = $root.CVirtualControllerElement.JoyStickControl.verify(message.joy_stick);
                    if (error)
                        return "joy_stick." + error;
                }
            }
            if (message.joy_button != null && message.hasOwnProperty("joy_button")) {
                if (properties.control === 1)
                    return "control: multiple values";
                properties.control = 1;
                {
                    var error = $root.CVirtualControllerElement.JoyButtonControl.verify(message.joy_button);
                    if (error)
                        return "joy_button." + error;
                }
            }
            if (message.joy_pad != null && message.hasOwnProperty("joy_pad")) {
                if (properties.control === 1)
                    return "control: multiple values";
                properties.control = 1;
                {
                    var error = $root.CVirtualControllerElement.JoyPadControl.verify(message.joy_pad);
                    if (error)
                        return "joy_pad." + error;
                }
            }
            if (message.macro_button != null && message.hasOwnProperty("macro_button")) {
                if (properties.control === 1)
                    return "control: multiple values";
                properties.control = 1;
                {
                    var error = $root.CVirtualControllerElement.MacroButtonControl.verify(message.macro_button);
                    if (error)
                        return "macro_button." + error;
                }
            }
            if (message.trackpad != null && message.hasOwnProperty("trackpad")) {
                if (properties.control === 1)
                    return "control: multiple values";
                properties.control = 1;
                {
                    var error = $root.CVirtualControllerElement.TrackpadControl.verify(message.trackpad);
                    if (error)
                        return "trackpad." + error;
                }
            }
            if (message.axis_button != null && message.hasOwnProperty("axis_button")) {
                if (properties.control === 1)
                    return "control: multiple values";
                properties.control = 1;
                {
                    var error = $root.CVirtualControllerElement.AxisButtonControl.verify(message.axis_button);
                    if (error)
                        return "axis_button." + error;
                }
            }
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
            if (object.x_position != null)
                message.x_position = object.x_position >>> 0;
            if (object.y_position != null)
                message.y_position = object.y_position >>> 0;
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.joy_stick != null) {
                if (typeof object.joy_stick !== "object")
                    throw TypeError(".CVirtualControllerElement.joy_stick: object expected");
                message.joy_stick = $root.CVirtualControllerElement.JoyStickControl.fromObject(object.joy_stick);
            }
            if (object.joy_button != null) {
                if (typeof object.joy_button !== "object")
                    throw TypeError(".CVirtualControllerElement.joy_button: object expected");
                message.joy_button = $root.CVirtualControllerElement.JoyButtonControl.fromObject(object.joy_button);
            }
            if (object.joy_pad != null) {
                if (typeof object.joy_pad !== "object")
                    throw TypeError(".CVirtualControllerElement.joy_pad: object expected");
                message.joy_pad = $root.CVirtualControllerElement.JoyPadControl.fromObject(object.joy_pad);
            }
            if (object.macro_button != null) {
                if (typeof object.macro_button !== "object")
                    throw TypeError(".CVirtualControllerElement.macro_button: object expected");
                message.macro_button = $root.CVirtualControllerElement.MacroButtonControl.fromObject(object.macro_button);
            }
            if (object.trackpad != null) {
                if (typeof object.trackpad !== "object")
                    throw TypeError(".CVirtualControllerElement.trackpad: object expected");
                message.trackpad = $root.CVirtualControllerElement.TrackpadControl.fromObject(object.trackpad);
            }
            if (object.axis_button != null) {
                if (typeof object.axis_button !== "object")
                    throw TypeError(".CVirtualControllerElement.axis_button: object expected");
                message.axis_button = $root.CVirtualControllerElement.AxisButtonControl.fromObject(object.axis_button);
            }
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
                object.x_position = 0;
                object.y_position = 0;
                object.width = 0;
                object.height = 0;
            }
            if (message.x_position != null && message.hasOwnProperty("x_position"))
                object.x_position = message.x_position;
            if (message.y_position != null && message.hasOwnProperty("y_position"))
                object.y_position = message.y_position;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.joy_stick != null && message.hasOwnProperty("joy_stick")) {
                object.joy_stick = $root.CVirtualControllerElement.JoyStickControl.toObject(message.joy_stick, options);
                if (options.oneofs)
                    object.control = "joy_stick";
            }
            if (message.joy_button != null && message.hasOwnProperty("joy_button")) {
                object.joy_button = $root.CVirtualControllerElement.JoyButtonControl.toObject(message.joy_button, options);
                if (options.oneofs)
                    object.control = "joy_button";
            }
            if (message.joy_pad != null && message.hasOwnProperty("joy_pad")) {
                object.joy_pad = $root.CVirtualControllerElement.JoyPadControl.toObject(message.joy_pad, options);
                if (options.oneofs)
                    object.control = "joy_pad";
            }
            if (message.macro_button != null && message.hasOwnProperty("macro_button")) {
                object.macro_button = $root.CVirtualControllerElement.MacroButtonControl.toObject(message.macro_button, options);
                if (options.oneofs)
                    object.control = "macro_button";
            }
            if (message.trackpad != null && message.hasOwnProperty("trackpad")) {
                object.trackpad = $root.CVirtualControllerElement.TrackpadControl.toObject(message.trackpad, options);
                if (options.oneofs)
                    object.control = "trackpad";
            }
            if (message.axis_button != null && message.hasOwnProperty("axis_button")) {
                object.axis_button = $root.CVirtualControllerElement.AxisButtonControl.toObject(message.axis_button, options);
                if (options.oneofs)
                    object.control = "axis_button";
            }
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
    
        CVirtualControllerElement.JoyStickControl = (function() {
    
            /**
             * Properties of a JoyStickControl.
             * @memberof CVirtualControllerElement
             * @interface IJoyStickControl
             * @property {string|null} [label] JoyStickControl label
             * @property {number|null} [x_axis_id] JoyStickControl x_axis_id
             * @property {number|null} [y_axis_id] JoyStickControl y_axis_id
             * @property {number|null} [x_axis_range] JoyStickControl x_axis_range
             * @property {number|null} [y_axis_range] JoyStickControl y_axis_range
             */
    
            /**
             * Constructs a new JoyStickControl.
             * @memberof CVirtualControllerElement
             * @classdesc Represents a JoyStickControl.
             * @implements IJoyStickControl
             * @constructor
             * @param {CVirtualControllerElement.IJoyStickControl=} [properties] Properties to set
             */
            function JoyStickControl(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * JoyStickControl label.
             * @member {string} label
             * @memberof CVirtualControllerElement.JoyStickControl
             * @instance
             */
            JoyStickControl.prototype.label = "";
    
            /**
             * JoyStickControl x_axis_id.
             * @member {number} x_axis_id
             * @memberof CVirtualControllerElement.JoyStickControl
             * @instance
             */
            JoyStickControl.prototype.x_axis_id = 0;
    
            /**
             * JoyStickControl y_axis_id.
             * @member {number} y_axis_id
             * @memberof CVirtualControllerElement.JoyStickControl
             * @instance
             */
            JoyStickControl.prototype.y_axis_id = 0;
    
            /**
             * JoyStickControl x_axis_range.
             * @member {number} x_axis_range
             * @memberof CVirtualControllerElement.JoyStickControl
             * @instance
             */
            JoyStickControl.prototype.x_axis_range = 0;
    
            /**
             * JoyStickControl y_axis_range.
             * @member {number} y_axis_range
             * @memberof CVirtualControllerElement.JoyStickControl
             * @instance
             */
            JoyStickControl.prototype.y_axis_range = 0;
    
            /**
             * Creates a new JoyStickControl instance using the specified properties.
             * @function create
             * @memberof CVirtualControllerElement.JoyStickControl
             * @static
             * @param {CVirtualControllerElement.IJoyStickControl=} [properties] Properties to set
             * @returns {CVirtualControllerElement.JoyStickControl} JoyStickControl instance
             */
            JoyStickControl.create = function create(properties) {
                return new JoyStickControl(properties);
            };
    
            /**
             * Encodes the specified JoyStickControl message. Does not implicitly {@link CVirtualControllerElement.JoyStickControl.verify|verify} messages.
             * @function encode
             * @memberof CVirtualControllerElement.JoyStickControl
             * @static
             * @param {CVirtualControllerElement.IJoyStickControl} message JoyStickControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoyStickControl.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.x_axis_id != null && message.hasOwnProperty("x_axis_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x_axis_id);
                if (message.y_axis_id != null && message.hasOwnProperty("y_axis_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y_axis_id);
                if (message.x_axis_range != null && message.hasOwnProperty("x_axis_range"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.x_axis_range);
                if (message.y_axis_range != null && message.hasOwnProperty("y_axis_range"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.y_axis_range);
                return writer;
            };
    
            /**
             * Encodes the specified JoyStickControl message, length delimited. Does not implicitly {@link CVirtualControllerElement.JoyStickControl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CVirtualControllerElement.JoyStickControl
             * @static
             * @param {CVirtualControllerElement.IJoyStickControl} message JoyStickControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoyStickControl.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a JoyStickControl message from the specified reader or buffer.
             * @function decode
             * @memberof CVirtualControllerElement.JoyStickControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CVirtualControllerElement.JoyStickControl} JoyStickControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoyStickControl.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerElement.JoyStickControl();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.label = reader.string();
                        break;
                    case 2:
                        message.x_axis_id = reader.uint32();
                        break;
                    case 3:
                        message.y_axis_id = reader.uint32();
                        break;
                    case 4:
                        message.x_axis_range = reader.uint32();
                        break;
                    case 5:
                        message.y_axis_range = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a JoyStickControl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CVirtualControllerElement.JoyStickControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CVirtualControllerElement.JoyStickControl} JoyStickControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoyStickControl.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a JoyStickControl message.
             * @function verify
             * @memberof CVirtualControllerElement.JoyStickControl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoyStickControl.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.x_axis_id != null && message.hasOwnProperty("x_axis_id"))
                    if (!$util.isInteger(message.x_axis_id))
                        return "x_axis_id: integer expected";
                if (message.y_axis_id != null && message.hasOwnProperty("y_axis_id"))
                    if (!$util.isInteger(message.y_axis_id))
                        return "y_axis_id: integer expected";
                if (message.x_axis_range != null && message.hasOwnProperty("x_axis_range"))
                    if (!$util.isInteger(message.x_axis_range))
                        return "x_axis_range: integer expected";
                if (message.y_axis_range != null && message.hasOwnProperty("y_axis_range"))
                    if (!$util.isInteger(message.y_axis_range))
                        return "y_axis_range: integer expected";
                return null;
            };
    
            /**
             * Creates a JoyStickControl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CVirtualControllerElement.JoyStickControl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CVirtualControllerElement.JoyStickControl} JoyStickControl
             */
            JoyStickControl.fromObject = function fromObject(object) {
                if (object instanceof $root.CVirtualControllerElement.JoyStickControl)
                    return object;
                var message = new $root.CVirtualControllerElement.JoyStickControl();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.x_axis_id != null)
                    message.x_axis_id = object.x_axis_id >>> 0;
                if (object.y_axis_id != null)
                    message.y_axis_id = object.y_axis_id >>> 0;
                if (object.x_axis_range != null)
                    message.x_axis_range = object.x_axis_range >>> 0;
                if (object.y_axis_range != null)
                    message.y_axis_range = object.y_axis_range >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a JoyStickControl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CVirtualControllerElement.JoyStickControl
             * @static
             * @param {CVirtualControllerElement.JoyStickControl} message JoyStickControl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoyStickControl.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.label = "";
                    object.x_axis_id = 0;
                    object.y_axis_id = 0;
                    object.x_axis_range = 0;
                    object.y_axis_range = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.x_axis_id != null && message.hasOwnProperty("x_axis_id"))
                    object.x_axis_id = message.x_axis_id;
                if (message.y_axis_id != null && message.hasOwnProperty("y_axis_id"))
                    object.y_axis_id = message.y_axis_id;
                if (message.x_axis_range != null && message.hasOwnProperty("x_axis_range"))
                    object.x_axis_range = message.x_axis_range;
                if (message.y_axis_range != null && message.hasOwnProperty("y_axis_range"))
                    object.y_axis_range = message.y_axis_range;
                return object;
            };
    
            /**
             * Converts this JoyStickControl to JSON.
             * @function toJSON
             * @memberof CVirtualControllerElement.JoyStickControl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoyStickControl.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return JoyStickControl;
        })();
    
        CVirtualControllerElement.JoyButtonControl = (function() {
    
            /**
             * Properties of a JoyButtonControl.
             * @memberof CVirtualControllerElement
             * @interface IJoyButtonControl
             * @property {string|null} [label] JoyButtonControl label
             * @property {number|null} [button_id] JoyButtonControl button_id
             */
    
            /**
             * Constructs a new JoyButtonControl.
             * @memberof CVirtualControllerElement
             * @classdesc Represents a JoyButtonControl.
             * @implements IJoyButtonControl
             * @constructor
             * @param {CVirtualControllerElement.IJoyButtonControl=} [properties] Properties to set
             */
            function JoyButtonControl(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * JoyButtonControl label.
             * @member {string} label
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @instance
             */
            JoyButtonControl.prototype.label = "";
    
            /**
             * JoyButtonControl button_id.
             * @member {number} button_id
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @instance
             */
            JoyButtonControl.prototype.button_id = 0;
    
            /**
             * Creates a new JoyButtonControl instance using the specified properties.
             * @function create
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @static
             * @param {CVirtualControllerElement.IJoyButtonControl=} [properties] Properties to set
             * @returns {CVirtualControllerElement.JoyButtonControl} JoyButtonControl instance
             */
            JoyButtonControl.create = function create(properties) {
                return new JoyButtonControl(properties);
            };
    
            /**
             * Encodes the specified JoyButtonControl message. Does not implicitly {@link CVirtualControllerElement.JoyButtonControl.verify|verify} messages.
             * @function encode
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @static
             * @param {CVirtualControllerElement.IJoyButtonControl} message JoyButtonControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoyButtonControl.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.button_id != null && message.hasOwnProperty("button_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.button_id);
                return writer;
            };
    
            /**
             * Encodes the specified JoyButtonControl message, length delimited. Does not implicitly {@link CVirtualControllerElement.JoyButtonControl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @static
             * @param {CVirtualControllerElement.IJoyButtonControl} message JoyButtonControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoyButtonControl.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a JoyButtonControl message from the specified reader or buffer.
             * @function decode
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CVirtualControllerElement.JoyButtonControl} JoyButtonControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoyButtonControl.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerElement.JoyButtonControl();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.label = reader.string();
                        break;
                    case 2:
                        message.button_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a JoyButtonControl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CVirtualControllerElement.JoyButtonControl} JoyButtonControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoyButtonControl.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a JoyButtonControl message.
             * @function verify
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoyButtonControl.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.button_id != null && message.hasOwnProperty("button_id"))
                    if (!$util.isInteger(message.button_id))
                        return "button_id: integer expected";
                return null;
            };
    
            /**
             * Creates a JoyButtonControl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CVirtualControllerElement.JoyButtonControl} JoyButtonControl
             */
            JoyButtonControl.fromObject = function fromObject(object) {
                if (object instanceof $root.CVirtualControllerElement.JoyButtonControl)
                    return object;
                var message = new $root.CVirtualControllerElement.JoyButtonControl();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.button_id != null)
                    message.button_id = object.button_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a JoyButtonControl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @static
             * @param {CVirtualControllerElement.JoyButtonControl} message JoyButtonControl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoyButtonControl.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.label = "";
                    object.button_id = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.button_id != null && message.hasOwnProperty("button_id"))
                    object.button_id = message.button_id;
                return object;
            };
    
            /**
             * Converts this JoyButtonControl to JSON.
             * @function toJSON
             * @memberof CVirtualControllerElement.JoyButtonControl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoyButtonControl.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return JoyButtonControl;
        })();
    
        CVirtualControllerElement.JoyPadControl = (function() {
    
            /**
             * Properties of a JoyPadControl.
             * @memberof CVirtualControllerElement
             * @interface IJoyPadControl
             * @property {string|null} [label] JoyPadControl label
             * @property {number|null} [up_button_id] JoyPadControl up_button_id
             * @property {number|null} [down_button_id] JoyPadControl down_button_id
             * @property {number|null} [left_button_id] JoyPadControl left_button_id
             * @property {number|null} [right_button_id] JoyPadControl right_button_id
             */
    
            /**
             * Constructs a new JoyPadControl.
             * @memberof CVirtualControllerElement
             * @classdesc Represents a JoyPadControl.
             * @implements IJoyPadControl
             * @constructor
             * @param {CVirtualControllerElement.IJoyPadControl=} [properties] Properties to set
             */
            function JoyPadControl(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * JoyPadControl label.
             * @member {string} label
             * @memberof CVirtualControllerElement.JoyPadControl
             * @instance
             */
            JoyPadControl.prototype.label = "";
    
            /**
             * JoyPadControl up_button_id.
             * @member {number} up_button_id
             * @memberof CVirtualControllerElement.JoyPadControl
             * @instance
             */
            JoyPadControl.prototype.up_button_id = 0;
    
            /**
             * JoyPadControl down_button_id.
             * @member {number} down_button_id
             * @memberof CVirtualControllerElement.JoyPadControl
             * @instance
             */
            JoyPadControl.prototype.down_button_id = 0;
    
            /**
             * JoyPadControl left_button_id.
             * @member {number} left_button_id
             * @memberof CVirtualControllerElement.JoyPadControl
             * @instance
             */
            JoyPadControl.prototype.left_button_id = 0;
    
            /**
             * JoyPadControl right_button_id.
             * @member {number} right_button_id
             * @memberof CVirtualControllerElement.JoyPadControl
             * @instance
             */
            JoyPadControl.prototype.right_button_id = 0;
    
            /**
             * Creates a new JoyPadControl instance using the specified properties.
             * @function create
             * @memberof CVirtualControllerElement.JoyPadControl
             * @static
             * @param {CVirtualControllerElement.IJoyPadControl=} [properties] Properties to set
             * @returns {CVirtualControllerElement.JoyPadControl} JoyPadControl instance
             */
            JoyPadControl.create = function create(properties) {
                return new JoyPadControl(properties);
            };
    
            /**
             * Encodes the specified JoyPadControl message. Does not implicitly {@link CVirtualControllerElement.JoyPadControl.verify|verify} messages.
             * @function encode
             * @memberof CVirtualControllerElement.JoyPadControl
             * @static
             * @param {CVirtualControllerElement.IJoyPadControl} message JoyPadControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoyPadControl.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.up_button_id != null && message.hasOwnProperty("up_button_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.up_button_id);
                if (message.down_button_id != null && message.hasOwnProperty("down_button_id"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.down_button_id);
                if (message.left_button_id != null && message.hasOwnProperty("left_button_id"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.left_button_id);
                if (message.right_button_id != null && message.hasOwnProperty("right_button_id"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.right_button_id);
                return writer;
            };
    
            /**
             * Encodes the specified JoyPadControl message, length delimited. Does not implicitly {@link CVirtualControllerElement.JoyPadControl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CVirtualControllerElement.JoyPadControl
             * @static
             * @param {CVirtualControllerElement.IJoyPadControl} message JoyPadControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoyPadControl.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a JoyPadControl message from the specified reader or buffer.
             * @function decode
             * @memberof CVirtualControllerElement.JoyPadControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CVirtualControllerElement.JoyPadControl} JoyPadControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoyPadControl.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerElement.JoyPadControl();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.label = reader.string();
                        break;
                    case 2:
                        message.up_button_id = reader.uint32();
                        break;
                    case 3:
                        message.down_button_id = reader.uint32();
                        break;
                    case 4:
                        message.left_button_id = reader.uint32();
                        break;
                    case 5:
                        message.right_button_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a JoyPadControl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CVirtualControllerElement.JoyPadControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CVirtualControllerElement.JoyPadControl} JoyPadControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoyPadControl.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a JoyPadControl message.
             * @function verify
             * @memberof CVirtualControllerElement.JoyPadControl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoyPadControl.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.up_button_id != null && message.hasOwnProperty("up_button_id"))
                    if (!$util.isInteger(message.up_button_id))
                        return "up_button_id: integer expected";
                if (message.down_button_id != null && message.hasOwnProperty("down_button_id"))
                    if (!$util.isInteger(message.down_button_id))
                        return "down_button_id: integer expected";
                if (message.left_button_id != null && message.hasOwnProperty("left_button_id"))
                    if (!$util.isInteger(message.left_button_id))
                        return "left_button_id: integer expected";
                if (message.right_button_id != null && message.hasOwnProperty("right_button_id"))
                    if (!$util.isInteger(message.right_button_id))
                        return "right_button_id: integer expected";
                return null;
            };
    
            /**
             * Creates a JoyPadControl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CVirtualControllerElement.JoyPadControl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CVirtualControllerElement.JoyPadControl} JoyPadControl
             */
            JoyPadControl.fromObject = function fromObject(object) {
                if (object instanceof $root.CVirtualControllerElement.JoyPadControl)
                    return object;
                var message = new $root.CVirtualControllerElement.JoyPadControl();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.up_button_id != null)
                    message.up_button_id = object.up_button_id >>> 0;
                if (object.down_button_id != null)
                    message.down_button_id = object.down_button_id >>> 0;
                if (object.left_button_id != null)
                    message.left_button_id = object.left_button_id >>> 0;
                if (object.right_button_id != null)
                    message.right_button_id = object.right_button_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a JoyPadControl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CVirtualControllerElement.JoyPadControl
             * @static
             * @param {CVirtualControllerElement.JoyPadControl} message JoyPadControl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoyPadControl.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.label = "";
                    object.up_button_id = 0;
                    object.down_button_id = 0;
                    object.left_button_id = 0;
                    object.right_button_id = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.up_button_id != null && message.hasOwnProperty("up_button_id"))
                    object.up_button_id = message.up_button_id;
                if (message.down_button_id != null && message.hasOwnProperty("down_button_id"))
                    object.down_button_id = message.down_button_id;
                if (message.left_button_id != null && message.hasOwnProperty("left_button_id"))
                    object.left_button_id = message.left_button_id;
                if (message.right_button_id != null && message.hasOwnProperty("right_button_id"))
                    object.right_button_id = message.right_button_id;
                return object;
            };
    
            /**
             * Converts this JoyPadControl to JSON.
             * @function toJSON
             * @memberof CVirtualControllerElement.JoyPadControl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoyPadControl.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return JoyPadControl;
        })();
    
        CVirtualControllerElement.MacroButtonControl = (function() {
    
            /**
             * Properties of a MacroButtonControl.
             * @memberof CVirtualControllerElement
             * @interface IMacroButtonControl
             * @property {string|null} [label] MacroButtonControl label
             * @property {number|null} [button_id] MacroButtonControl button_id
             */
    
            /**
             * Constructs a new MacroButtonControl.
             * @memberof CVirtualControllerElement
             * @classdesc Represents a MacroButtonControl.
             * @implements IMacroButtonControl
             * @constructor
             * @param {CVirtualControllerElement.IMacroButtonControl=} [properties] Properties to set
             */
            function MacroButtonControl(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MacroButtonControl label.
             * @member {string} label
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @instance
             */
            MacroButtonControl.prototype.label = "";
    
            /**
             * MacroButtonControl button_id.
             * @member {number} button_id
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @instance
             */
            MacroButtonControl.prototype.button_id = 0;
    
            /**
             * Creates a new MacroButtonControl instance using the specified properties.
             * @function create
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @static
             * @param {CVirtualControllerElement.IMacroButtonControl=} [properties] Properties to set
             * @returns {CVirtualControllerElement.MacroButtonControl} MacroButtonControl instance
             */
            MacroButtonControl.create = function create(properties) {
                return new MacroButtonControl(properties);
            };
    
            /**
             * Encodes the specified MacroButtonControl message. Does not implicitly {@link CVirtualControllerElement.MacroButtonControl.verify|verify} messages.
             * @function encode
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @static
             * @param {CVirtualControllerElement.IMacroButtonControl} message MacroButtonControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MacroButtonControl.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.button_id != null && message.hasOwnProperty("button_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.button_id);
                return writer;
            };
    
            /**
             * Encodes the specified MacroButtonControl message, length delimited. Does not implicitly {@link CVirtualControllerElement.MacroButtonControl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @static
             * @param {CVirtualControllerElement.IMacroButtonControl} message MacroButtonControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MacroButtonControl.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a MacroButtonControl message from the specified reader or buffer.
             * @function decode
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CVirtualControllerElement.MacroButtonControl} MacroButtonControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MacroButtonControl.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerElement.MacroButtonControl();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.label = reader.string();
                        break;
                    case 2:
                        message.button_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a MacroButtonControl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CVirtualControllerElement.MacroButtonControl} MacroButtonControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MacroButtonControl.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a MacroButtonControl message.
             * @function verify
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MacroButtonControl.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.button_id != null && message.hasOwnProperty("button_id"))
                    if (!$util.isInteger(message.button_id))
                        return "button_id: integer expected";
                return null;
            };
    
            /**
             * Creates a MacroButtonControl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CVirtualControllerElement.MacroButtonControl} MacroButtonControl
             */
            MacroButtonControl.fromObject = function fromObject(object) {
                if (object instanceof $root.CVirtualControllerElement.MacroButtonControl)
                    return object;
                var message = new $root.CVirtualControllerElement.MacroButtonControl();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.button_id != null)
                    message.button_id = object.button_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a MacroButtonControl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @static
             * @param {CVirtualControllerElement.MacroButtonControl} message MacroButtonControl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MacroButtonControl.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.label = "";
                    object.button_id = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.button_id != null && message.hasOwnProperty("button_id"))
                    object.button_id = message.button_id;
                return object;
            };
    
            /**
             * Converts this MacroButtonControl to JSON.
             * @function toJSON
             * @memberof CVirtualControllerElement.MacroButtonControl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MacroButtonControl.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return MacroButtonControl;
        })();
    
        CVirtualControllerElement.TrackpadControl = (function() {
    
            /**
             * Properties of a TrackpadControl.
             * @memberof CVirtualControllerElement
             * @interface ITrackpadControl
             * @property {string|null} [label] TrackpadControl label
             * @property {number|null} [x_axis_range] TrackpadControl x_axis_range
             * @property {number|null} [y_axis_range] TrackpadControl y_axis_range
             */
    
            /**
             * Constructs a new TrackpadControl.
             * @memberof CVirtualControllerElement
             * @classdesc Represents a TrackpadControl.
             * @implements ITrackpadControl
             * @constructor
             * @param {CVirtualControllerElement.ITrackpadControl=} [properties] Properties to set
             */
            function TrackpadControl(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TrackpadControl label.
             * @member {string} label
             * @memberof CVirtualControllerElement.TrackpadControl
             * @instance
             */
            TrackpadControl.prototype.label = "";
    
            /**
             * TrackpadControl x_axis_range.
             * @member {number} x_axis_range
             * @memberof CVirtualControllerElement.TrackpadControl
             * @instance
             */
            TrackpadControl.prototype.x_axis_range = 0;
    
            /**
             * TrackpadControl y_axis_range.
             * @member {number} y_axis_range
             * @memberof CVirtualControllerElement.TrackpadControl
             * @instance
             */
            TrackpadControl.prototype.y_axis_range = 0;
    
            /**
             * Creates a new TrackpadControl instance using the specified properties.
             * @function create
             * @memberof CVirtualControllerElement.TrackpadControl
             * @static
             * @param {CVirtualControllerElement.ITrackpadControl=} [properties] Properties to set
             * @returns {CVirtualControllerElement.TrackpadControl} TrackpadControl instance
             */
            TrackpadControl.create = function create(properties) {
                return new TrackpadControl(properties);
            };
    
            /**
             * Encodes the specified TrackpadControl message. Does not implicitly {@link CVirtualControllerElement.TrackpadControl.verify|verify} messages.
             * @function encode
             * @memberof CVirtualControllerElement.TrackpadControl
             * @static
             * @param {CVirtualControllerElement.ITrackpadControl} message TrackpadControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TrackpadControl.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.x_axis_range != null && message.hasOwnProperty("x_axis_range"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.x_axis_range);
                if (message.y_axis_range != null && message.hasOwnProperty("y_axis_range"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.y_axis_range);
                return writer;
            };
    
            /**
             * Encodes the specified TrackpadControl message, length delimited. Does not implicitly {@link CVirtualControllerElement.TrackpadControl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CVirtualControllerElement.TrackpadControl
             * @static
             * @param {CVirtualControllerElement.ITrackpadControl} message TrackpadControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TrackpadControl.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TrackpadControl message from the specified reader or buffer.
             * @function decode
             * @memberof CVirtualControllerElement.TrackpadControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CVirtualControllerElement.TrackpadControl} TrackpadControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TrackpadControl.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerElement.TrackpadControl();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.label = reader.string();
                        break;
                    case 2:
                        message.x_axis_range = reader.uint32();
                        break;
                    case 3:
                        message.y_axis_range = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TrackpadControl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CVirtualControllerElement.TrackpadControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CVirtualControllerElement.TrackpadControl} TrackpadControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TrackpadControl.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TrackpadControl message.
             * @function verify
             * @memberof CVirtualControllerElement.TrackpadControl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TrackpadControl.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.x_axis_range != null && message.hasOwnProperty("x_axis_range"))
                    if (!$util.isInteger(message.x_axis_range))
                        return "x_axis_range: integer expected";
                if (message.y_axis_range != null && message.hasOwnProperty("y_axis_range"))
                    if (!$util.isInteger(message.y_axis_range))
                        return "y_axis_range: integer expected";
                return null;
            };
    
            /**
             * Creates a TrackpadControl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CVirtualControllerElement.TrackpadControl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CVirtualControllerElement.TrackpadControl} TrackpadControl
             */
            TrackpadControl.fromObject = function fromObject(object) {
                if (object instanceof $root.CVirtualControllerElement.TrackpadControl)
                    return object;
                var message = new $root.CVirtualControllerElement.TrackpadControl();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.x_axis_range != null)
                    message.x_axis_range = object.x_axis_range >>> 0;
                if (object.y_axis_range != null)
                    message.y_axis_range = object.y_axis_range >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a TrackpadControl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CVirtualControllerElement.TrackpadControl
             * @static
             * @param {CVirtualControllerElement.TrackpadControl} message TrackpadControl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TrackpadControl.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.label = "";
                    object.x_axis_range = 0;
                    object.y_axis_range = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.x_axis_range != null && message.hasOwnProperty("x_axis_range"))
                    object.x_axis_range = message.x_axis_range;
                if (message.y_axis_range != null && message.hasOwnProperty("y_axis_range"))
                    object.y_axis_range = message.y_axis_range;
                return object;
            };
    
            /**
             * Converts this TrackpadControl to JSON.
             * @function toJSON
             * @memberof CVirtualControllerElement.TrackpadControl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TrackpadControl.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TrackpadControl;
        })();
    
        CVirtualControllerElement.AxisButtonControl = (function() {
    
            /**
             * Properties of an AxisButtonControl.
             * @memberof CVirtualControllerElement
             * @interface IAxisButtonControl
             * @property {string|null} [label] AxisButtonControl label
             * @property {number|null} [axis_id] AxisButtonControl axis_id
             * @property {number|null} [axis_pressed_value] AxisButtonControl axis_pressed_value
             */
    
            /**
             * Constructs a new AxisButtonControl.
             * @memberof CVirtualControllerElement
             * @classdesc Represents an AxisButtonControl.
             * @implements IAxisButtonControl
             * @constructor
             * @param {CVirtualControllerElement.IAxisButtonControl=} [properties] Properties to set
             */
            function AxisButtonControl(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AxisButtonControl label.
             * @member {string} label
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @instance
             */
            AxisButtonControl.prototype.label = "";
    
            /**
             * AxisButtonControl axis_id.
             * @member {number} axis_id
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @instance
             */
            AxisButtonControl.prototype.axis_id = 0;
    
            /**
             * AxisButtonControl axis_pressed_value.
             * @member {number} axis_pressed_value
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @instance
             */
            AxisButtonControl.prototype.axis_pressed_value = 0;
    
            /**
             * Creates a new AxisButtonControl instance using the specified properties.
             * @function create
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @static
             * @param {CVirtualControllerElement.IAxisButtonControl=} [properties] Properties to set
             * @returns {CVirtualControllerElement.AxisButtonControl} AxisButtonControl instance
             */
            AxisButtonControl.create = function create(properties) {
                return new AxisButtonControl(properties);
            };
    
            /**
             * Encodes the specified AxisButtonControl message. Does not implicitly {@link CVirtualControllerElement.AxisButtonControl.verify|verify} messages.
             * @function encode
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @static
             * @param {CVirtualControllerElement.IAxisButtonControl} message AxisButtonControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxisButtonControl.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                if (message.axis_id != null && message.hasOwnProperty("axis_id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.axis_id);
                if (message.axis_pressed_value != null && message.hasOwnProperty("axis_pressed_value"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.axis_pressed_value);
                return writer;
            };
    
            /**
             * Encodes the specified AxisButtonControl message, length delimited. Does not implicitly {@link CVirtualControllerElement.AxisButtonControl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @static
             * @param {CVirtualControllerElement.IAxisButtonControl} message AxisButtonControl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxisButtonControl.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AxisButtonControl message from the specified reader or buffer.
             * @function decode
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CVirtualControllerElement.AxisButtonControl} AxisButtonControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxisButtonControl.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CVirtualControllerElement.AxisButtonControl();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.label = reader.string();
                        break;
                    case 2:
                        message.axis_id = reader.uint32();
                        break;
                    case 3:
                        message.axis_pressed_value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AxisButtonControl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CVirtualControllerElement.AxisButtonControl} AxisButtonControl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxisButtonControl.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AxisButtonControl message.
             * @function verify
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AxisButtonControl.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.axis_id != null && message.hasOwnProperty("axis_id"))
                    if (!$util.isInteger(message.axis_id))
                        return "axis_id: integer expected";
                if (message.axis_pressed_value != null && message.hasOwnProperty("axis_pressed_value"))
                    if (!$util.isInteger(message.axis_pressed_value))
                        return "axis_pressed_value: integer expected";
                return null;
            };
    
            /**
             * Creates an AxisButtonControl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CVirtualControllerElement.AxisButtonControl} AxisButtonControl
             */
            AxisButtonControl.fromObject = function fromObject(object) {
                if (object instanceof $root.CVirtualControllerElement.AxisButtonControl)
                    return object;
                var message = new $root.CVirtualControllerElement.AxisButtonControl();
                if (object.label != null)
                    message.label = String(object.label);
                if (object.axis_id != null)
                    message.axis_id = object.axis_id >>> 0;
                if (object.axis_pressed_value != null)
                    message.axis_pressed_value = object.axis_pressed_value >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an AxisButtonControl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @static
             * @param {CVirtualControllerElement.AxisButtonControl} message AxisButtonControl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AxisButtonControl.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.label = "";
                    object.axis_id = 0;
                    object.axis_pressed_value = 0;
                }
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.axis_id != null && message.hasOwnProperty("axis_id"))
                    object.axis_id = message.axis_id;
                if (message.axis_pressed_value != null && message.hasOwnProperty("axis_pressed_value"))
                    object.axis_pressed_value = message.axis_pressed_value;
                return object;
            };
    
            /**
             * Converts this AxisButtonControl to JSON.
             * @function toJSON
             * @memberof CVirtualControllerElement.AxisButtonControl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AxisButtonControl.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AxisButtonControl;
        })();
    
        return CVirtualControllerElement;
    })();
    
    $root.CVirtualControllerLayout = (function() {
    
        /**
         * Properties of a CVirtualControllerLayout.
         * @exports ICVirtualControllerLayout
         * @interface ICVirtualControllerLayout
         * @property {EControllerLayoutType|null} [layout_type] CVirtualControllerLayout layout_type
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
         * CVirtualControllerLayout layout_type.
         * @member {EControllerLayoutType} layout_type
         * @memberof CVirtualControllerLayout
         * @instance
         */
        CVirtualControllerLayout.prototype.layout_type = 0;
    
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
            if (message.layout_type != null && message.hasOwnProperty("layout_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.layout_type);
            if (message.elements != null && message.elements.length)
                for (var i = 0; i < message.elements.length; ++i)
                    $root.CVirtualControllerElement.encode(message.elements[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.layout_type = reader.int32();
                    break;
                case 2:
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
            if (message.layout_type != null && message.hasOwnProperty("layout_type"))
                switch (message.layout_type) {
                default:
                    return "layout_type: enum value expected";
                case 0:
                case 1:
                    break;
                }
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
            switch (object.layout_type) {
            case "k_EControllerLayoutTypePhone":
            case 0:
                message.layout_type = 0;
                break;
            case "k_EControllerLayoutTypeTablet":
            case 1:
                message.layout_type = 1;
                break;
            }
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
            if (options.defaults)
                object.layout_type = options.enums === String ? "k_EControllerLayoutTypePhone" : 0;
            if (message.layout_type != null && message.hasOwnProperty("layout_type"))
                object.layout_type = options.enums === String ? $root.EControllerLayoutType[message.layout_type] : message.layout_type;
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
            if (message.layouts && message.layouts.length) {
                object.layouts = [];
                for (var j = 0; j < message.layouts.length; ++j)
                    object.layouts[j] = $root.CVirtualControllerLayout.toObject(message.layouts[j], options);
            }
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
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.actionsets && message.actionsets.length) {
                object.actionsets = [];
                for (var j = 0; j < message.actionsets.length; ++j)
                    object.actionsets[j] = $root.CVirtualControllerConfig.ActionSet.toObject(message.actionsets[j], options);
            }
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

    return $root;
});
