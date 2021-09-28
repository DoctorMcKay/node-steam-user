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
    
    $root.EncryptedAppTicket = (function() {
    
        /**
         * Properties of an EncryptedAppTicket.
         * @exports IEncryptedAppTicket
         * @interface IEncryptedAppTicket
         * @property {number|null} [ticket_version_no] EncryptedAppTicket ticket_version_no
         * @property {number|null} [crc_encryptedticket] EncryptedAppTicket crc_encryptedticket
         * @property {number|null} [cb_encrypteduserdata] EncryptedAppTicket cb_encrypteduserdata
         * @property {number|null} [cb_encrypted_appownershipticket] EncryptedAppTicket cb_encrypted_appownershipticket
         * @property {Uint8Array|null} [encrypted_ticket] EncryptedAppTicket encrypted_ticket
         */
    
        /**
         * Constructs a new EncryptedAppTicket.
         * @exports EncryptedAppTicket
         * @classdesc Represents an EncryptedAppTicket.
         * @implements IEncryptedAppTicket
         * @constructor
         * @param {IEncryptedAppTicket=} [properties] Properties to set
         */
        function EncryptedAppTicket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EncryptedAppTicket ticket_version_no.
         * @member {number} ticket_version_no
         * @memberof EncryptedAppTicket
         * @instance
         */
        EncryptedAppTicket.prototype.ticket_version_no = 0;
    
        /**
         * EncryptedAppTicket crc_encryptedticket.
         * @member {number} crc_encryptedticket
         * @memberof EncryptedAppTicket
         * @instance
         */
        EncryptedAppTicket.prototype.crc_encryptedticket = 0;
    
        /**
         * EncryptedAppTicket cb_encrypteduserdata.
         * @member {number} cb_encrypteduserdata
         * @memberof EncryptedAppTicket
         * @instance
         */
        EncryptedAppTicket.prototype.cb_encrypteduserdata = 0;
    
        /**
         * EncryptedAppTicket cb_encrypted_appownershipticket.
         * @member {number} cb_encrypted_appownershipticket
         * @memberof EncryptedAppTicket
         * @instance
         */
        EncryptedAppTicket.prototype.cb_encrypted_appownershipticket = 0;
    
        /**
         * EncryptedAppTicket encrypted_ticket.
         * @member {Uint8Array} encrypted_ticket
         * @memberof EncryptedAppTicket
         * @instance
         */
        EncryptedAppTicket.prototype.encrypted_ticket = $util.newBuffer([]);
    
        /**
         * Creates a new EncryptedAppTicket instance using the specified properties.
         * @function create
         * @memberof EncryptedAppTicket
         * @static
         * @param {IEncryptedAppTicket=} [properties] Properties to set
         * @returns {EncryptedAppTicket} EncryptedAppTicket instance
         */
        EncryptedAppTicket.create = function create(properties) {
            return new EncryptedAppTicket(properties);
        };
    
        /**
         * Encodes the specified EncryptedAppTicket message. Does not implicitly {@link EncryptedAppTicket.verify|verify} messages.
         * @function encode
         * @memberof EncryptedAppTicket
         * @static
         * @param {IEncryptedAppTicket} message EncryptedAppTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedAppTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticket_version_no != null && message.hasOwnProperty("ticket_version_no"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ticket_version_no);
            if (message.crc_encryptedticket != null && message.hasOwnProperty("crc_encryptedticket"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.crc_encryptedticket);
            if (message.cb_encrypteduserdata != null && message.hasOwnProperty("cb_encrypteduserdata"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.cb_encrypteduserdata);
            if (message.cb_encrypted_appownershipticket != null && message.hasOwnProperty("cb_encrypted_appownershipticket"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.cb_encrypted_appownershipticket);
            if (message.encrypted_ticket != null && message.hasOwnProperty("encrypted_ticket"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.encrypted_ticket);
            return writer;
        };
    
        /**
         * Encodes the specified EncryptedAppTicket message, length delimited. Does not implicitly {@link EncryptedAppTicket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EncryptedAppTicket
         * @static
         * @param {IEncryptedAppTicket} message EncryptedAppTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedAppTicket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EncryptedAppTicket message from the specified reader or buffer.
         * @function decode
         * @memberof EncryptedAppTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EncryptedAppTicket} EncryptedAppTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedAppTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EncryptedAppTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ticket_version_no = reader.uint32();
                    break;
                case 2:
                    message.crc_encryptedticket = reader.uint32();
                    break;
                case 3:
                    message.cb_encrypteduserdata = reader.uint32();
                    break;
                case 4:
                    message.cb_encrypted_appownershipticket = reader.uint32();
                    break;
                case 5:
                    message.encrypted_ticket = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an EncryptedAppTicket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EncryptedAppTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EncryptedAppTicket} EncryptedAppTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedAppTicket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EncryptedAppTicket message.
         * @function verify
         * @memberof EncryptedAppTicket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EncryptedAppTicket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ticket_version_no != null && message.hasOwnProperty("ticket_version_no"))
                if (!$util.isInteger(message.ticket_version_no))
                    return "ticket_version_no: integer expected";
            if (message.crc_encryptedticket != null && message.hasOwnProperty("crc_encryptedticket"))
                if (!$util.isInteger(message.crc_encryptedticket))
                    return "crc_encryptedticket: integer expected";
            if (message.cb_encrypteduserdata != null && message.hasOwnProperty("cb_encrypteduserdata"))
                if (!$util.isInteger(message.cb_encrypteduserdata))
                    return "cb_encrypteduserdata: integer expected";
            if (message.cb_encrypted_appownershipticket != null && message.hasOwnProperty("cb_encrypted_appownershipticket"))
                if (!$util.isInteger(message.cb_encrypted_appownershipticket))
                    return "cb_encrypted_appownershipticket: integer expected";
            if (message.encrypted_ticket != null && message.hasOwnProperty("encrypted_ticket"))
                if (!(message.encrypted_ticket && typeof message.encrypted_ticket.length === "number" || $util.isString(message.encrypted_ticket)))
                    return "encrypted_ticket: buffer expected";
            return null;
        };
    
        /**
         * Creates an EncryptedAppTicket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EncryptedAppTicket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EncryptedAppTicket} EncryptedAppTicket
         */
        EncryptedAppTicket.fromObject = function fromObject(object) {
            if (object instanceof $root.EncryptedAppTicket)
                return object;
            var message = new $root.EncryptedAppTicket();
            if (object.ticket_version_no != null)
                message.ticket_version_no = object.ticket_version_no >>> 0;
            if (object.crc_encryptedticket != null)
                message.crc_encryptedticket = object.crc_encryptedticket >>> 0;
            if (object.cb_encrypteduserdata != null)
                message.cb_encrypteduserdata = object.cb_encrypteduserdata >>> 0;
            if (object.cb_encrypted_appownershipticket != null)
                message.cb_encrypted_appownershipticket = object.cb_encrypted_appownershipticket >>> 0;
            if (object.encrypted_ticket != null)
                if (typeof object.encrypted_ticket === "string")
                    $util.base64.decode(object.encrypted_ticket, message.encrypted_ticket = $util.newBuffer($util.base64.length(object.encrypted_ticket)), 0);
                else if (object.encrypted_ticket.length)
                    message.encrypted_ticket = object.encrypted_ticket;
            return message;
        };
    
        /**
         * Creates a plain object from an EncryptedAppTicket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EncryptedAppTicket
         * @static
         * @param {EncryptedAppTicket} message EncryptedAppTicket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EncryptedAppTicket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ticket_version_no = 0;
                object.crc_encryptedticket = 0;
                object.cb_encrypteduserdata = 0;
                object.cb_encrypted_appownershipticket = 0;
                if (options.bytes === String)
                    object.encrypted_ticket = "";
                else {
                    object.encrypted_ticket = [];
                    if (options.bytes !== Array)
                        object.encrypted_ticket = $util.newBuffer(object.encrypted_ticket);
                }
            }
            if (message.ticket_version_no != null && message.hasOwnProperty("ticket_version_no"))
                object.ticket_version_no = message.ticket_version_no;
            if (message.crc_encryptedticket != null && message.hasOwnProperty("crc_encryptedticket"))
                object.crc_encryptedticket = message.crc_encryptedticket;
            if (message.cb_encrypteduserdata != null && message.hasOwnProperty("cb_encrypteduserdata"))
                object.cb_encrypteduserdata = message.cb_encrypteduserdata;
            if (message.cb_encrypted_appownershipticket != null && message.hasOwnProperty("cb_encrypted_appownershipticket"))
                object.cb_encrypted_appownershipticket = message.cb_encrypted_appownershipticket;
            if (message.encrypted_ticket != null && message.hasOwnProperty("encrypted_ticket"))
                object.encrypted_ticket = options.bytes === String ? $util.base64.encode(message.encrypted_ticket, 0, message.encrypted_ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.encrypted_ticket) : message.encrypted_ticket;
            return object;
        };
    
        /**
         * Converts this EncryptedAppTicket to JSON.
         * @function toJSON
         * @memberof EncryptedAppTicket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EncryptedAppTicket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EncryptedAppTicket;
    })();

    return $root;
});
