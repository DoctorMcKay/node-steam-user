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
     * EInternalAccountType enum.
     * @exports EInternalAccountType
     * @enum {string}
     * @property {number} k_EInternalSteamAccountType=1 k_EInternalSteamAccountType value
     * @property {number} k_EInternalClanType=2 k_EInternalClanType value
     * @property {number} k_EInternalAppType=3 k_EInternalAppType value
     * @property {number} k_EInternalBroadcastChannelType=4 k_EInternalBroadcastChannelType value
     */
    $root.EInternalAccountType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "k_EInternalSteamAccountType"] = 1;
        values[valuesById[2] = "k_EInternalClanType"] = 2;
        values[valuesById[3] = "k_EInternalAppType"] = 3;
        values[valuesById[4] = "k_EInternalBroadcastChannelType"] = 4;
        return values;
    })();
    
    /**
     * EExternalAccountType enum.
     * @exports EExternalAccountType
     * @enum {string}
     * @property {number} k_EExternalNone=0 k_EExternalNone value
     * @property {number} k_EExternalSteamAccount=1 k_EExternalSteamAccount value
     * @property {number} k_EExternalGoogleAccount=2 k_EExternalGoogleAccount value
     * @property {number} k_EExternalFacebookAccount=3 k_EExternalFacebookAccount value
     * @property {number} k_EExternalTwitterAccount=4 k_EExternalTwitterAccount value
     * @property {number} k_EExternalTwitchAccount=5 k_EExternalTwitchAccount value
     * @property {number} k_EExternalYouTubeChannelAccount=6 k_EExternalYouTubeChannelAccount value
     * @property {number} k_EExternalFacebookPage=7 k_EExternalFacebookPage value
     */
    $root.EExternalAccountType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EExternalNone"] = 0;
        values[valuesById[1] = "k_EExternalSteamAccount"] = 1;
        values[valuesById[2] = "k_EExternalGoogleAccount"] = 2;
        values[valuesById[3] = "k_EExternalFacebookAccount"] = 3;
        values[valuesById[4] = "k_EExternalTwitterAccount"] = 4;
        values[valuesById[5] = "k_EExternalTwitchAccount"] = 5;
        values[valuesById[6] = "k_EExternalYouTubeChannelAccount"] = 6;
        values[valuesById[7] = "k_EExternalFacebookPage"] = 7;
        return values;
    })();
    
    $root.CUserAccount_GetAccountLinkStatus_Request = (function() {
    
        /**
         * Properties of a CUserAccount_GetAccountLinkStatus_Request.
         * @exports ICUserAccount_GetAccountLinkStatus_Request
         * @interface ICUserAccount_GetAccountLinkStatus_Request
         */
    
        /**
         * Constructs a new CUserAccount_GetAccountLinkStatus_Request.
         * @exports CUserAccount_GetAccountLinkStatus_Request
         * @classdesc Represents a CUserAccount_GetAccountLinkStatus_Request.
         * @implements ICUserAccount_GetAccountLinkStatus_Request
         * @constructor
         * @param {ICUserAccount_GetAccountLinkStatus_Request=} [properties] Properties to set
         */
        function CUserAccount_GetAccountLinkStatus_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CUserAccount_GetAccountLinkStatus_Request instance using the specified properties.
         * @function create
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @static
         * @param {ICUserAccount_GetAccountLinkStatus_Request=} [properties] Properties to set
         * @returns {CUserAccount_GetAccountLinkStatus_Request} CUserAccount_GetAccountLinkStatus_Request instance
         */
        CUserAccount_GetAccountLinkStatus_Request.create = function create(properties) {
            return new CUserAccount_GetAccountLinkStatus_Request(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_GetAccountLinkStatus_Request message. Does not implicitly {@link CUserAccount_GetAccountLinkStatus_Request.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @static
         * @param {ICUserAccount_GetAccountLinkStatus_Request} message CUserAccount_GetAccountLinkStatus_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_GetAccountLinkStatus_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_GetAccountLinkStatus_Request message, length delimited. Does not implicitly {@link CUserAccount_GetAccountLinkStatus_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @static
         * @param {ICUserAccount_GetAccountLinkStatus_Request} message CUserAccount_GetAccountLinkStatus_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_GetAccountLinkStatus_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_GetAccountLinkStatus_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_GetAccountLinkStatus_Request} CUserAccount_GetAccountLinkStatus_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_GetAccountLinkStatus_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_GetAccountLinkStatus_Request();
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
         * Decodes a CUserAccount_GetAccountLinkStatus_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_GetAccountLinkStatus_Request} CUserAccount_GetAccountLinkStatus_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_GetAccountLinkStatus_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_GetAccountLinkStatus_Request message.
         * @function verify
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_GetAccountLinkStatus_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_GetAccountLinkStatus_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_GetAccountLinkStatus_Request} CUserAccount_GetAccountLinkStatus_Request
         */
        CUserAccount_GetAccountLinkStatus_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_GetAccountLinkStatus_Request)
                return object;
            return new $root.CUserAccount_GetAccountLinkStatus_Request();
        };
    
        /**
         * Creates a plain object from a CUserAccount_GetAccountLinkStatus_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @static
         * @param {CUserAccount_GetAccountLinkStatus_Request} message CUserAccount_GetAccountLinkStatus_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_GetAccountLinkStatus_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CUserAccount_GetAccountLinkStatus_Request to JSON.
         * @function toJSON
         * @memberof CUserAccount_GetAccountLinkStatus_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_GetAccountLinkStatus_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_GetAccountLinkStatus_Request;
    })();
    
    $root.CUserAccount_GetAccountLinkStatus_Response = (function() {
    
        /**
         * Properties of a CUserAccount_GetAccountLinkStatus_Response.
         * @exports ICUserAccount_GetAccountLinkStatus_Response
         * @interface ICUserAccount_GetAccountLinkStatus_Response
         * @property {number|null} [pwid] CUserAccount_GetAccountLinkStatus_Response pwid
         * @property {number|null} [identity_verification] CUserAccount_GetAccountLinkStatus_Response identity_verification
         */
    
        /**
         * Constructs a new CUserAccount_GetAccountLinkStatus_Response.
         * @exports CUserAccount_GetAccountLinkStatus_Response
         * @classdesc Represents a CUserAccount_GetAccountLinkStatus_Response.
         * @implements ICUserAccount_GetAccountLinkStatus_Response
         * @constructor
         * @param {ICUserAccount_GetAccountLinkStatus_Response=} [properties] Properties to set
         */
        function CUserAccount_GetAccountLinkStatus_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_GetAccountLinkStatus_Response pwid.
         * @member {number} pwid
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @instance
         */
        CUserAccount_GetAccountLinkStatus_Response.prototype.pwid = 0;
    
        /**
         * CUserAccount_GetAccountLinkStatus_Response identity_verification.
         * @member {number} identity_verification
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @instance
         */
        CUserAccount_GetAccountLinkStatus_Response.prototype.identity_verification = 0;
    
        /**
         * Creates a new CUserAccount_GetAccountLinkStatus_Response instance using the specified properties.
         * @function create
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @static
         * @param {ICUserAccount_GetAccountLinkStatus_Response=} [properties] Properties to set
         * @returns {CUserAccount_GetAccountLinkStatus_Response} CUserAccount_GetAccountLinkStatus_Response instance
         */
        CUserAccount_GetAccountLinkStatus_Response.create = function create(properties) {
            return new CUserAccount_GetAccountLinkStatus_Response(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_GetAccountLinkStatus_Response message. Does not implicitly {@link CUserAccount_GetAccountLinkStatus_Response.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @static
         * @param {ICUserAccount_GetAccountLinkStatus_Response} message CUserAccount_GetAccountLinkStatus_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_GetAccountLinkStatus_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pwid != null && message.hasOwnProperty("pwid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pwid);
            if (message.identity_verification != null && message.hasOwnProperty("identity_verification"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.identity_verification);
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_GetAccountLinkStatus_Response message, length delimited. Does not implicitly {@link CUserAccount_GetAccountLinkStatus_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @static
         * @param {ICUserAccount_GetAccountLinkStatus_Response} message CUserAccount_GetAccountLinkStatus_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_GetAccountLinkStatus_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_GetAccountLinkStatus_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_GetAccountLinkStatus_Response} CUserAccount_GetAccountLinkStatus_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_GetAccountLinkStatus_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_GetAccountLinkStatus_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pwid = reader.uint32();
                    break;
                case 2:
                    message.identity_verification = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_GetAccountLinkStatus_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_GetAccountLinkStatus_Response} CUserAccount_GetAccountLinkStatus_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_GetAccountLinkStatus_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_GetAccountLinkStatus_Response message.
         * @function verify
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_GetAccountLinkStatus_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pwid != null && message.hasOwnProperty("pwid"))
                if (!$util.isInteger(message.pwid))
                    return "pwid: integer expected";
            if (message.identity_verification != null && message.hasOwnProperty("identity_verification"))
                if (!$util.isInteger(message.identity_verification))
                    return "identity_verification: integer expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_GetAccountLinkStatus_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_GetAccountLinkStatus_Response} CUserAccount_GetAccountLinkStatus_Response
         */
        CUserAccount_GetAccountLinkStatus_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_GetAccountLinkStatus_Response)
                return object;
            var message = new $root.CUserAccount_GetAccountLinkStatus_Response();
            if (object.pwid != null)
                message.pwid = object.pwid >>> 0;
            if (object.identity_verification != null)
                message.identity_verification = object.identity_verification >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_GetAccountLinkStatus_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @static
         * @param {CUserAccount_GetAccountLinkStatus_Response} message CUserAccount_GetAccountLinkStatus_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_GetAccountLinkStatus_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pwid = 0;
                object.identity_verification = 0;
            }
            if (message.pwid != null && message.hasOwnProperty("pwid"))
                object.pwid = message.pwid;
            if (message.identity_verification != null && message.hasOwnProperty("identity_verification"))
                object.identity_verification = message.identity_verification;
            return object;
        };
    
        /**
         * Converts this CUserAccount_GetAccountLinkStatus_Response to JSON.
         * @function toJSON
         * @memberof CUserAccount_GetAccountLinkStatus_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_GetAccountLinkStatus_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_GetAccountLinkStatus_Response;
    })();
    
    $root.CUserAccount_CreateFriendInviteToken_Request = (function() {
    
        /**
         * Properties of a CUserAccount_CreateFriendInviteToken_Request.
         * @exports ICUserAccount_CreateFriendInviteToken_Request
         * @interface ICUserAccount_CreateFriendInviteToken_Request
         * @property {number|null} [invite_limit] CUserAccount_CreateFriendInviteToken_Request invite_limit
         * @property {number|null} [invite_duration] CUserAccount_CreateFriendInviteToken_Request invite_duration
         * @property {string|null} [invite_note] CUserAccount_CreateFriendInviteToken_Request invite_note
         */
    
        /**
         * Constructs a new CUserAccount_CreateFriendInviteToken_Request.
         * @exports CUserAccount_CreateFriendInviteToken_Request
         * @classdesc Represents a CUserAccount_CreateFriendInviteToken_Request.
         * @implements ICUserAccount_CreateFriendInviteToken_Request
         * @constructor
         * @param {ICUserAccount_CreateFriendInviteToken_Request=} [properties] Properties to set
         */
        function CUserAccount_CreateFriendInviteToken_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_CreateFriendInviteToken_Request invite_limit.
         * @member {number} invite_limit
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @instance
         */
        CUserAccount_CreateFriendInviteToken_Request.prototype.invite_limit = 0;
    
        /**
         * CUserAccount_CreateFriendInviteToken_Request invite_duration.
         * @member {number} invite_duration
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @instance
         */
        CUserAccount_CreateFriendInviteToken_Request.prototype.invite_duration = 0;
    
        /**
         * CUserAccount_CreateFriendInviteToken_Request invite_note.
         * @member {string} invite_note
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @instance
         */
        CUserAccount_CreateFriendInviteToken_Request.prototype.invite_note = "";
    
        /**
         * Creates a new CUserAccount_CreateFriendInviteToken_Request instance using the specified properties.
         * @function create
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_CreateFriendInviteToken_Request=} [properties] Properties to set
         * @returns {CUserAccount_CreateFriendInviteToken_Request} CUserAccount_CreateFriendInviteToken_Request instance
         */
        CUserAccount_CreateFriendInviteToken_Request.create = function create(properties) {
            return new CUserAccount_CreateFriendInviteToken_Request(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_CreateFriendInviteToken_Request message. Does not implicitly {@link CUserAccount_CreateFriendInviteToken_Request.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_CreateFriendInviteToken_Request} message CUserAccount_CreateFriendInviteToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_CreateFriendInviteToken_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.invite_limit != null && message.hasOwnProperty("invite_limit"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.invite_limit);
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.invite_duration);
            if (message.invite_note != null && message.hasOwnProperty("invite_note"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.invite_note);
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_CreateFriendInviteToken_Request message, length delimited. Does not implicitly {@link CUserAccount_CreateFriendInviteToken_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_CreateFriendInviteToken_Request} message CUserAccount_CreateFriendInviteToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_CreateFriendInviteToken_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_CreateFriendInviteToken_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_CreateFriendInviteToken_Request} CUserAccount_CreateFriendInviteToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_CreateFriendInviteToken_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_CreateFriendInviteToken_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.invite_limit = reader.uint32();
                    break;
                case 2:
                    message.invite_duration = reader.uint32();
                    break;
                case 3:
                    message.invite_note = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_CreateFriendInviteToken_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_CreateFriendInviteToken_Request} CUserAccount_CreateFriendInviteToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_CreateFriendInviteToken_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_CreateFriendInviteToken_Request message.
         * @function verify
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_CreateFriendInviteToken_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.invite_limit != null && message.hasOwnProperty("invite_limit"))
                if (!$util.isInteger(message.invite_limit))
                    return "invite_limit: integer expected";
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                if (!$util.isInteger(message.invite_duration))
                    return "invite_duration: integer expected";
            if (message.invite_note != null && message.hasOwnProperty("invite_note"))
                if (!$util.isString(message.invite_note))
                    return "invite_note: string expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_CreateFriendInviteToken_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_CreateFriendInviteToken_Request} CUserAccount_CreateFriendInviteToken_Request
         */
        CUserAccount_CreateFriendInviteToken_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_CreateFriendInviteToken_Request)
                return object;
            var message = new $root.CUserAccount_CreateFriendInviteToken_Request();
            if (object.invite_limit != null)
                message.invite_limit = object.invite_limit >>> 0;
            if (object.invite_duration != null)
                message.invite_duration = object.invite_duration >>> 0;
            if (object.invite_note != null)
                message.invite_note = String(object.invite_note);
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_CreateFriendInviteToken_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @static
         * @param {CUserAccount_CreateFriendInviteToken_Request} message CUserAccount_CreateFriendInviteToken_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_CreateFriendInviteToken_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.invite_limit = 0;
                object.invite_duration = 0;
                object.invite_note = "";
            }
            if (message.invite_limit != null && message.hasOwnProperty("invite_limit"))
                object.invite_limit = message.invite_limit;
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                object.invite_duration = message.invite_duration;
            if (message.invite_note != null && message.hasOwnProperty("invite_note"))
                object.invite_note = message.invite_note;
            return object;
        };
    
        /**
         * Converts this CUserAccount_CreateFriendInviteToken_Request to JSON.
         * @function toJSON
         * @memberof CUserAccount_CreateFriendInviteToken_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_CreateFriendInviteToken_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_CreateFriendInviteToken_Request;
    })();
    
    $root.CUserAccount_CreateFriendInviteToken_Response = (function() {
    
        /**
         * Properties of a CUserAccount_CreateFriendInviteToken_Response.
         * @exports ICUserAccount_CreateFriendInviteToken_Response
         * @interface ICUserAccount_CreateFriendInviteToken_Response
         * @property {string|null} [invite_token] CUserAccount_CreateFriendInviteToken_Response invite_token
         * @property {number|Long|null} [invite_limit] CUserAccount_CreateFriendInviteToken_Response invite_limit
         * @property {number|Long|null} [invite_duration] CUserAccount_CreateFriendInviteToken_Response invite_duration
         * @property {number|null} [time_created] CUserAccount_CreateFriendInviteToken_Response time_created
         * @property {boolean|null} [valid] CUserAccount_CreateFriendInviteToken_Response valid
         */
    
        /**
         * Constructs a new CUserAccount_CreateFriendInviteToken_Response.
         * @exports CUserAccount_CreateFriendInviteToken_Response
         * @classdesc Represents a CUserAccount_CreateFriendInviteToken_Response.
         * @implements ICUserAccount_CreateFriendInviteToken_Response
         * @constructor
         * @param {ICUserAccount_CreateFriendInviteToken_Response=} [properties] Properties to set
         */
        function CUserAccount_CreateFriendInviteToken_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_CreateFriendInviteToken_Response invite_token.
         * @member {string} invite_token
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @instance
         */
        CUserAccount_CreateFriendInviteToken_Response.prototype.invite_token = "";
    
        /**
         * CUserAccount_CreateFriendInviteToken_Response invite_limit.
         * @member {number|Long} invite_limit
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @instance
         */
        CUserAccount_CreateFriendInviteToken_Response.prototype.invite_limit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CUserAccount_CreateFriendInviteToken_Response invite_duration.
         * @member {number|Long} invite_duration
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @instance
         */
        CUserAccount_CreateFriendInviteToken_Response.prototype.invite_duration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CUserAccount_CreateFriendInviteToken_Response time_created.
         * @member {number} time_created
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @instance
         */
        CUserAccount_CreateFriendInviteToken_Response.prototype.time_created = 0;
    
        /**
         * CUserAccount_CreateFriendInviteToken_Response valid.
         * @member {boolean} valid
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @instance
         */
        CUserAccount_CreateFriendInviteToken_Response.prototype.valid = false;
    
        /**
         * Creates a new CUserAccount_CreateFriendInviteToken_Response instance using the specified properties.
         * @function create
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_CreateFriendInviteToken_Response=} [properties] Properties to set
         * @returns {CUserAccount_CreateFriendInviteToken_Response} CUserAccount_CreateFriendInviteToken_Response instance
         */
        CUserAccount_CreateFriendInviteToken_Response.create = function create(properties) {
            return new CUserAccount_CreateFriendInviteToken_Response(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_CreateFriendInviteToken_Response message. Does not implicitly {@link CUserAccount_CreateFriendInviteToken_Response.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_CreateFriendInviteToken_Response} message CUserAccount_CreateFriendInviteToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_CreateFriendInviteToken_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.invite_token);
            if (message.invite_limit != null && message.hasOwnProperty("invite_limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.invite_limit);
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.invite_duration);
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.time_created);
            if (message.valid != null && message.hasOwnProperty("valid"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.valid);
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_CreateFriendInviteToken_Response message, length delimited. Does not implicitly {@link CUserAccount_CreateFriendInviteToken_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_CreateFriendInviteToken_Response} message CUserAccount_CreateFriendInviteToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_CreateFriendInviteToken_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_CreateFriendInviteToken_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_CreateFriendInviteToken_Response} CUserAccount_CreateFriendInviteToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_CreateFriendInviteToken_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_CreateFriendInviteToken_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.invite_token = reader.string();
                    break;
                case 2:
                    message.invite_limit = reader.uint64();
                    break;
                case 3:
                    message.invite_duration = reader.uint64();
                    break;
                case 4:
                    message.time_created = reader.fixed32();
                    break;
                case 5:
                    message.valid = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_CreateFriendInviteToken_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_CreateFriendInviteToken_Response} CUserAccount_CreateFriendInviteToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_CreateFriendInviteToken_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_CreateFriendInviteToken_Response message.
         * @function verify
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_CreateFriendInviteToken_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                if (!$util.isString(message.invite_token))
                    return "invite_token: string expected";
            if (message.invite_limit != null && message.hasOwnProperty("invite_limit"))
                if (!$util.isInteger(message.invite_limit) && !(message.invite_limit && $util.isInteger(message.invite_limit.low) && $util.isInteger(message.invite_limit.high)))
                    return "invite_limit: integer|Long expected";
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                if (!$util.isInteger(message.invite_duration) && !(message.invite_duration && $util.isInteger(message.invite_duration.low) && $util.isInteger(message.invite_duration.high)))
                    return "invite_duration: integer|Long expected";
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                if (!$util.isInteger(message.time_created))
                    return "time_created: integer expected";
            if (message.valid != null && message.hasOwnProperty("valid"))
                if (typeof message.valid !== "boolean")
                    return "valid: boolean expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_CreateFriendInviteToken_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_CreateFriendInviteToken_Response} CUserAccount_CreateFriendInviteToken_Response
         */
        CUserAccount_CreateFriendInviteToken_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_CreateFriendInviteToken_Response)
                return object;
            var message = new $root.CUserAccount_CreateFriendInviteToken_Response();
            if (object.invite_token != null)
                message.invite_token = String(object.invite_token);
            if (object.invite_limit != null)
                if ($util.Long)
                    (message.invite_limit = $util.Long.fromValue(object.invite_limit)).unsigned = true;
                else if (typeof object.invite_limit === "string")
                    message.invite_limit = parseInt(object.invite_limit, 10);
                else if (typeof object.invite_limit === "number")
                    message.invite_limit = object.invite_limit;
                else if (typeof object.invite_limit === "object")
                    message.invite_limit = new $util.LongBits(object.invite_limit.low >>> 0, object.invite_limit.high >>> 0).toNumber(true);
            if (object.invite_duration != null)
                if ($util.Long)
                    (message.invite_duration = $util.Long.fromValue(object.invite_duration)).unsigned = true;
                else if (typeof object.invite_duration === "string")
                    message.invite_duration = parseInt(object.invite_duration, 10);
                else if (typeof object.invite_duration === "number")
                    message.invite_duration = object.invite_duration;
                else if (typeof object.invite_duration === "object")
                    message.invite_duration = new $util.LongBits(object.invite_duration.low >>> 0, object.invite_duration.high >>> 0).toNumber(true);
            if (object.time_created != null)
                message.time_created = object.time_created >>> 0;
            if (object.valid != null)
                message.valid = Boolean(object.valid);
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_CreateFriendInviteToken_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @static
         * @param {CUserAccount_CreateFriendInviteToken_Response} message CUserAccount_CreateFriendInviteToken_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_CreateFriendInviteToken_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.invite_token = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.invite_limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.invite_limit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.invite_duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.invite_duration = options.longs === String ? "0" : 0;
                object.time_created = 0;
                object.valid = false;
            }
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                object.invite_token = message.invite_token;
            if (message.invite_limit != null && message.hasOwnProperty("invite_limit"))
                if (typeof message.invite_limit === "number")
                    object.invite_limit = options.longs === String ? String(message.invite_limit) : message.invite_limit;
                else
                    object.invite_limit = options.longs === String ? $util.Long.prototype.toString.call(message.invite_limit) : options.longs === Number ? new $util.LongBits(message.invite_limit.low >>> 0, message.invite_limit.high >>> 0).toNumber(true) : message.invite_limit;
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                if (typeof message.invite_duration === "number")
                    object.invite_duration = options.longs === String ? String(message.invite_duration) : message.invite_duration;
                else
                    object.invite_duration = options.longs === String ? $util.Long.prototype.toString.call(message.invite_duration) : options.longs === Number ? new $util.LongBits(message.invite_duration.low >>> 0, message.invite_duration.high >>> 0).toNumber(true) : message.invite_duration;
            if (message.time_created != null && message.hasOwnProperty("time_created"))
                object.time_created = message.time_created;
            if (message.valid != null && message.hasOwnProperty("valid"))
                object.valid = message.valid;
            return object;
        };
    
        /**
         * Converts this CUserAccount_CreateFriendInviteToken_Response to JSON.
         * @function toJSON
         * @memberof CUserAccount_CreateFriendInviteToken_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_CreateFriendInviteToken_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_CreateFriendInviteToken_Response;
    })();
    
    $root.CUserAccount_GetFriendInviteTokens_Request = (function() {
    
        /**
         * Properties of a CUserAccount_GetFriendInviteTokens_Request.
         * @exports ICUserAccount_GetFriendInviteTokens_Request
         * @interface ICUserAccount_GetFriendInviteTokens_Request
         */
    
        /**
         * Constructs a new CUserAccount_GetFriendInviteTokens_Request.
         * @exports CUserAccount_GetFriendInviteTokens_Request
         * @classdesc Represents a CUserAccount_GetFriendInviteTokens_Request.
         * @implements ICUserAccount_GetFriendInviteTokens_Request
         * @constructor
         * @param {ICUserAccount_GetFriendInviteTokens_Request=} [properties] Properties to set
         */
        function CUserAccount_GetFriendInviteTokens_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CUserAccount_GetFriendInviteTokens_Request instance using the specified properties.
         * @function create
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @static
         * @param {ICUserAccount_GetFriendInviteTokens_Request=} [properties] Properties to set
         * @returns {CUserAccount_GetFriendInviteTokens_Request} CUserAccount_GetFriendInviteTokens_Request instance
         */
        CUserAccount_GetFriendInviteTokens_Request.create = function create(properties) {
            return new CUserAccount_GetFriendInviteTokens_Request(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_GetFriendInviteTokens_Request message. Does not implicitly {@link CUserAccount_GetFriendInviteTokens_Request.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @static
         * @param {ICUserAccount_GetFriendInviteTokens_Request} message CUserAccount_GetFriendInviteTokens_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_GetFriendInviteTokens_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_GetFriendInviteTokens_Request message, length delimited. Does not implicitly {@link CUserAccount_GetFriendInviteTokens_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @static
         * @param {ICUserAccount_GetFriendInviteTokens_Request} message CUserAccount_GetFriendInviteTokens_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_GetFriendInviteTokens_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_GetFriendInviteTokens_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_GetFriendInviteTokens_Request} CUserAccount_GetFriendInviteTokens_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_GetFriendInviteTokens_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_GetFriendInviteTokens_Request();
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
         * Decodes a CUserAccount_GetFriendInviteTokens_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_GetFriendInviteTokens_Request} CUserAccount_GetFriendInviteTokens_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_GetFriendInviteTokens_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_GetFriendInviteTokens_Request message.
         * @function verify
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_GetFriendInviteTokens_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_GetFriendInviteTokens_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_GetFriendInviteTokens_Request} CUserAccount_GetFriendInviteTokens_Request
         */
        CUserAccount_GetFriendInviteTokens_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_GetFriendInviteTokens_Request)
                return object;
            return new $root.CUserAccount_GetFriendInviteTokens_Request();
        };
    
        /**
         * Creates a plain object from a CUserAccount_GetFriendInviteTokens_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @static
         * @param {CUserAccount_GetFriendInviteTokens_Request} message CUserAccount_GetFriendInviteTokens_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_GetFriendInviteTokens_Request.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CUserAccount_GetFriendInviteTokens_Request to JSON.
         * @function toJSON
         * @memberof CUserAccount_GetFriendInviteTokens_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_GetFriendInviteTokens_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_GetFriendInviteTokens_Request;
    })();
    
    $root.CUserAccount_GetFriendInviteTokens_Response = (function() {
    
        /**
         * Properties of a CUserAccount_GetFriendInviteTokens_Response.
         * @exports ICUserAccount_GetFriendInviteTokens_Response
         * @interface ICUserAccount_GetFriendInviteTokens_Response
         * @property {Array.<ICUserAccount_CreateFriendInviteToken_Response>|null} [tokens] CUserAccount_GetFriendInviteTokens_Response tokens
         */
    
        /**
         * Constructs a new CUserAccount_GetFriendInviteTokens_Response.
         * @exports CUserAccount_GetFriendInviteTokens_Response
         * @classdesc Represents a CUserAccount_GetFriendInviteTokens_Response.
         * @implements ICUserAccount_GetFriendInviteTokens_Response
         * @constructor
         * @param {ICUserAccount_GetFriendInviteTokens_Response=} [properties] Properties to set
         */
        function CUserAccount_GetFriendInviteTokens_Response(properties) {
            this.tokens = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_GetFriendInviteTokens_Response tokens.
         * @member {Array.<ICUserAccount_CreateFriendInviteToken_Response>} tokens
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @instance
         */
        CUserAccount_GetFriendInviteTokens_Response.prototype.tokens = $util.emptyArray;
    
        /**
         * Creates a new CUserAccount_GetFriendInviteTokens_Response instance using the specified properties.
         * @function create
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @static
         * @param {ICUserAccount_GetFriendInviteTokens_Response=} [properties] Properties to set
         * @returns {CUserAccount_GetFriendInviteTokens_Response} CUserAccount_GetFriendInviteTokens_Response instance
         */
        CUserAccount_GetFriendInviteTokens_Response.create = function create(properties) {
            return new CUserAccount_GetFriendInviteTokens_Response(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_GetFriendInviteTokens_Response message. Does not implicitly {@link CUserAccount_GetFriendInviteTokens_Response.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @static
         * @param {ICUserAccount_GetFriendInviteTokens_Response} message CUserAccount_GetFriendInviteTokens_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_GetFriendInviteTokens_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokens != null && message.tokens.length)
                for (var i = 0; i < message.tokens.length; ++i)
                    $root.CUserAccount_CreateFriendInviteToken_Response.encode(message.tokens[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_GetFriendInviteTokens_Response message, length delimited. Does not implicitly {@link CUserAccount_GetFriendInviteTokens_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @static
         * @param {ICUserAccount_GetFriendInviteTokens_Response} message CUserAccount_GetFriendInviteTokens_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_GetFriendInviteTokens_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_GetFriendInviteTokens_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_GetFriendInviteTokens_Response} CUserAccount_GetFriendInviteTokens_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_GetFriendInviteTokens_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_GetFriendInviteTokens_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    message.tokens.push($root.CUserAccount_CreateFriendInviteToken_Response.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_GetFriendInviteTokens_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_GetFriendInviteTokens_Response} CUserAccount_GetFriendInviteTokens_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_GetFriendInviteTokens_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_GetFriendInviteTokens_Response message.
         * @function verify
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_GetFriendInviteTokens_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokens != null && message.hasOwnProperty("tokens")) {
                if (!Array.isArray(message.tokens))
                    return "tokens: array expected";
                for (var i = 0; i < message.tokens.length; ++i) {
                    var error = $root.CUserAccount_CreateFriendInviteToken_Response.verify(message.tokens[i]);
                    if (error)
                        return "tokens." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CUserAccount_GetFriendInviteTokens_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_GetFriendInviteTokens_Response} CUserAccount_GetFriendInviteTokens_Response
         */
        CUserAccount_GetFriendInviteTokens_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_GetFriendInviteTokens_Response)
                return object;
            var message = new $root.CUserAccount_GetFriendInviteTokens_Response();
            if (object.tokens) {
                if (!Array.isArray(object.tokens))
                    throw TypeError(".CUserAccount_GetFriendInviteTokens_Response.tokens: array expected");
                message.tokens = [];
                for (var i = 0; i < object.tokens.length; ++i) {
                    if (typeof object.tokens[i] !== "object")
                        throw TypeError(".CUserAccount_GetFriendInviteTokens_Response.tokens: object expected");
                    message.tokens[i] = $root.CUserAccount_CreateFriendInviteToken_Response.fromObject(object.tokens[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_GetFriendInviteTokens_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @static
         * @param {CUserAccount_GetFriendInviteTokens_Response} message CUserAccount_GetFriendInviteTokens_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_GetFriendInviteTokens_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tokens = [];
            if (message.tokens && message.tokens.length) {
                object.tokens = [];
                for (var j = 0; j < message.tokens.length; ++j)
                    object.tokens[j] = $root.CUserAccount_CreateFriendInviteToken_Response.toObject(message.tokens[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CUserAccount_GetFriendInviteTokens_Response to JSON.
         * @function toJSON
         * @memberof CUserAccount_GetFriendInviteTokens_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_GetFriendInviteTokens_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_GetFriendInviteTokens_Response;
    })();
    
    $root.CUserAccount_ViewFriendInviteToken_Request = (function() {
    
        /**
         * Properties of a CUserAccount_ViewFriendInviteToken_Request.
         * @exports ICUserAccount_ViewFriendInviteToken_Request
         * @interface ICUserAccount_ViewFriendInviteToken_Request
         * @property {number|Long|null} [steamid] CUserAccount_ViewFriendInviteToken_Request steamid
         * @property {string|null} [invite_token] CUserAccount_ViewFriendInviteToken_Request invite_token
         */
    
        /**
         * Constructs a new CUserAccount_ViewFriendInviteToken_Request.
         * @exports CUserAccount_ViewFriendInviteToken_Request
         * @classdesc Represents a CUserAccount_ViewFriendInviteToken_Request.
         * @implements ICUserAccount_ViewFriendInviteToken_Request
         * @constructor
         * @param {ICUserAccount_ViewFriendInviteToken_Request=} [properties] Properties to set
         */
        function CUserAccount_ViewFriendInviteToken_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_ViewFriendInviteToken_Request steamid.
         * @member {number|Long} steamid
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @instance
         */
        CUserAccount_ViewFriendInviteToken_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CUserAccount_ViewFriendInviteToken_Request invite_token.
         * @member {string} invite_token
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @instance
         */
        CUserAccount_ViewFriendInviteToken_Request.prototype.invite_token = "";
    
        /**
         * Creates a new CUserAccount_ViewFriendInviteToken_Request instance using the specified properties.
         * @function create
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_ViewFriendInviteToken_Request=} [properties] Properties to set
         * @returns {CUserAccount_ViewFriendInviteToken_Request} CUserAccount_ViewFriendInviteToken_Request instance
         */
        CUserAccount_ViewFriendInviteToken_Request.create = function create(properties) {
            return new CUserAccount_ViewFriendInviteToken_Request(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_ViewFriendInviteToken_Request message. Does not implicitly {@link CUserAccount_ViewFriendInviteToken_Request.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_ViewFriendInviteToken_Request} message CUserAccount_ViewFriendInviteToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_ViewFriendInviteToken_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.invite_token);
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_ViewFriendInviteToken_Request message, length delimited. Does not implicitly {@link CUserAccount_ViewFriendInviteToken_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_ViewFriendInviteToken_Request} message CUserAccount_ViewFriendInviteToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_ViewFriendInviteToken_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_ViewFriendInviteToken_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_ViewFriendInviteToken_Request} CUserAccount_ViewFriendInviteToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_ViewFriendInviteToken_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_ViewFriendInviteToken_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.invite_token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_ViewFriendInviteToken_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_ViewFriendInviteToken_Request} CUserAccount_ViewFriendInviteToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_ViewFriendInviteToken_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_ViewFriendInviteToken_Request message.
         * @function verify
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_ViewFriendInviteToken_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                if (!$util.isString(message.invite_token))
                    return "invite_token: string expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_ViewFriendInviteToken_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_ViewFriendInviteToken_Request} CUserAccount_ViewFriendInviteToken_Request
         */
        CUserAccount_ViewFriendInviteToken_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_ViewFriendInviteToken_Request)
                return object;
            var message = new $root.CUserAccount_ViewFriendInviteToken_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.invite_token != null)
                message.invite_token = String(object.invite_token);
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_ViewFriendInviteToken_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @static
         * @param {CUserAccount_ViewFriendInviteToken_Request} message CUserAccount_ViewFriendInviteToken_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_ViewFriendInviteToken_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.invite_token = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                object.invite_token = message.invite_token;
            return object;
        };
    
        /**
         * Converts this CUserAccount_ViewFriendInviteToken_Request to JSON.
         * @function toJSON
         * @memberof CUserAccount_ViewFriendInviteToken_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_ViewFriendInviteToken_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_ViewFriendInviteToken_Request;
    })();
    
    $root.CUserAccount_ViewFriendInviteToken_Response = (function() {
    
        /**
         * Properties of a CUserAccount_ViewFriendInviteToken_Response.
         * @exports ICUserAccount_ViewFriendInviteToken_Response
         * @interface ICUserAccount_ViewFriendInviteToken_Response
         * @property {boolean|null} [valid] CUserAccount_ViewFriendInviteToken_Response valid
         * @property {number|Long|null} [steamid] CUserAccount_ViewFriendInviteToken_Response steamid
         * @property {number|Long|null} [invite_duration] CUserAccount_ViewFriendInviteToken_Response invite_duration
         */
    
        /**
         * Constructs a new CUserAccount_ViewFriendInviteToken_Response.
         * @exports CUserAccount_ViewFriendInviteToken_Response
         * @classdesc Represents a CUserAccount_ViewFriendInviteToken_Response.
         * @implements ICUserAccount_ViewFriendInviteToken_Response
         * @constructor
         * @param {ICUserAccount_ViewFriendInviteToken_Response=} [properties] Properties to set
         */
        function CUserAccount_ViewFriendInviteToken_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_ViewFriendInviteToken_Response valid.
         * @member {boolean} valid
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @instance
         */
        CUserAccount_ViewFriendInviteToken_Response.prototype.valid = false;
    
        /**
         * CUserAccount_ViewFriendInviteToken_Response steamid.
         * @member {number|Long} steamid
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @instance
         */
        CUserAccount_ViewFriendInviteToken_Response.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CUserAccount_ViewFriendInviteToken_Response invite_duration.
         * @member {number|Long} invite_duration
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @instance
         */
        CUserAccount_ViewFriendInviteToken_Response.prototype.invite_duration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CUserAccount_ViewFriendInviteToken_Response instance using the specified properties.
         * @function create
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_ViewFriendInviteToken_Response=} [properties] Properties to set
         * @returns {CUserAccount_ViewFriendInviteToken_Response} CUserAccount_ViewFriendInviteToken_Response instance
         */
        CUserAccount_ViewFriendInviteToken_Response.create = function create(properties) {
            return new CUserAccount_ViewFriendInviteToken_Response(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_ViewFriendInviteToken_Response message. Does not implicitly {@link CUserAccount_ViewFriendInviteToken_Response.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_ViewFriendInviteToken_Response} message CUserAccount_ViewFriendInviteToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_ViewFriendInviteToken_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.valid != null && message.hasOwnProperty("valid"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.valid);
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.steamid);
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.invite_duration);
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_ViewFriendInviteToken_Response message, length delimited. Does not implicitly {@link CUserAccount_ViewFriendInviteToken_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_ViewFriendInviteToken_Response} message CUserAccount_ViewFriendInviteToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_ViewFriendInviteToken_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_ViewFriendInviteToken_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_ViewFriendInviteToken_Response} CUserAccount_ViewFriendInviteToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_ViewFriendInviteToken_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_ViewFriendInviteToken_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.valid = reader.bool();
                    break;
                case 2:
                    message.steamid = reader.uint64();
                    break;
                case 3:
                    message.invite_duration = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_ViewFriendInviteToken_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_ViewFriendInviteToken_Response} CUserAccount_ViewFriendInviteToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_ViewFriendInviteToken_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_ViewFriendInviteToken_Response message.
         * @function verify
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_ViewFriendInviteToken_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.valid != null && message.hasOwnProperty("valid"))
                if (typeof message.valid !== "boolean")
                    return "valid: boolean expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                if (!$util.isInteger(message.invite_duration) && !(message.invite_duration && $util.isInteger(message.invite_duration.low) && $util.isInteger(message.invite_duration.high)))
                    return "invite_duration: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_ViewFriendInviteToken_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_ViewFriendInviteToken_Response} CUserAccount_ViewFriendInviteToken_Response
         */
        CUserAccount_ViewFriendInviteToken_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_ViewFriendInviteToken_Response)
                return object;
            var message = new $root.CUserAccount_ViewFriendInviteToken_Response();
            if (object.valid != null)
                message.valid = Boolean(object.valid);
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = true;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber(true);
            if (object.invite_duration != null)
                if ($util.Long)
                    (message.invite_duration = $util.Long.fromValue(object.invite_duration)).unsigned = true;
                else if (typeof object.invite_duration === "string")
                    message.invite_duration = parseInt(object.invite_duration, 10);
                else if (typeof object.invite_duration === "number")
                    message.invite_duration = object.invite_duration;
                else if (typeof object.invite_duration === "object")
                    message.invite_duration = new $util.LongBits(object.invite_duration.low >>> 0, object.invite_duration.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_ViewFriendInviteToken_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @static
         * @param {CUserAccount_ViewFriendInviteToken_Response} message CUserAccount_ViewFriendInviteToken_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_ViewFriendInviteToken_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.valid = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.invite_duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.invite_duration = options.longs === String ? "0" : 0;
            }
            if (message.valid != null && message.hasOwnProperty("valid"))
                object.valid = message.valid;
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber(true) : message.steamid;
            if (message.invite_duration != null && message.hasOwnProperty("invite_duration"))
                if (typeof message.invite_duration === "number")
                    object.invite_duration = options.longs === String ? String(message.invite_duration) : message.invite_duration;
                else
                    object.invite_duration = options.longs === String ? $util.Long.prototype.toString.call(message.invite_duration) : options.longs === Number ? new $util.LongBits(message.invite_duration.low >>> 0, message.invite_duration.high >>> 0).toNumber(true) : message.invite_duration;
            return object;
        };
    
        /**
         * Converts this CUserAccount_ViewFriendInviteToken_Response to JSON.
         * @function toJSON
         * @memberof CUserAccount_ViewFriendInviteToken_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_ViewFriendInviteToken_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_ViewFriendInviteToken_Response;
    })();
    
    $root.CUserAccount_RedeemFriendInviteToken_Request = (function() {
    
        /**
         * Properties of a CUserAccount_RedeemFriendInviteToken_Request.
         * @exports ICUserAccount_RedeemFriendInviteToken_Request
         * @interface ICUserAccount_RedeemFriendInviteToken_Request
         * @property {number|Long|null} [steamid] CUserAccount_RedeemFriendInviteToken_Request steamid
         * @property {string|null} [invite_token] CUserAccount_RedeemFriendInviteToken_Request invite_token
         */
    
        /**
         * Constructs a new CUserAccount_RedeemFriendInviteToken_Request.
         * @exports CUserAccount_RedeemFriendInviteToken_Request
         * @classdesc Represents a CUserAccount_RedeemFriendInviteToken_Request.
         * @implements ICUserAccount_RedeemFriendInviteToken_Request
         * @constructor
         * @param {ICUserAccount_RedeemFriendInviteToken_Request=} [properties] Properties to set
         */
        function CUserAccount_RedeemFriendInviteToken_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_RedeemFriendInviteToken_Request steamid.
         * @member {number|Long} steamid
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @instance
         */
        CUserAccount_RedeemFriendInviteToken_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CUserAccount_RedeemFriendInviteToken_Request invite_token.
         * @member {string} invite_token
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @instance
         */
        CUserAccount_RedeemFriendInviteToken_Request.prototype.invite_token = "";
    
        /**
         * Creates a new CUserAccount_RedeemFriendInviteToken_Request instance using the specified properties.
         * @function create
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_RedeemFriendInviteToken_Request=} [properties] Properties to set
         * @returns {CUserAccount_RedeemFriendInviteToken_Request} CUserAccount_RedeemFriendInviteToken_Request instance
         */
        CUserAccount_RedeemFriendInviteToken_Request.create = function create(properties) {
            return new CUserAccount_RedeemFriendInviteToken_Request(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_RedeemFriendInviteToken_Request message. Does not implicitly {@link CUserAccount_RedeemFriendInviteToken_Request.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_RedeemFriendInviteToken_Request} message CUserAccount_RedeemFriendInviteToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RedeemFriendInviteToken_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.invite_token);
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_RedeemFriendInviteToken_Request message, length delimited. Does not implicitly {@link CUserAccount_RedeemFriendInviteToken_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_RedeemFriendInviteToken_Request} message CUserAccount_RedeemFriendInviteToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RedeemFriendInviteToken_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_RedeemFriendInviteToken_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_RedeemFriendInviteToken_Request} CUserAccount_RedeemFriendInviteToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RedeemFriendInviteToken_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_RedeemFriendInviteToken_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.invite_token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_RedeemFriendInviteToken_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_RedeemFriendInviteToken_Request} CUserAccount_RedeemFriendInviteToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RedeemFriendInviteToken_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_RedeemFriendInviteToken_Request message.
         * @function verify
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_RedeemFriendInviteToken_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                if (!$util.isString(message.invite_token))
                    return "invite_token: string expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_RedeemFriendInviteToken_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_RedeemFriendInviteToken_Request} CUserAccount_RedeemFriendInviteToken_Request
         */
        CUserAccount_RedeemFriendInviteToken_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_RedeemFriendInviteToken_Request)
                return object;
            var message = new $root.CUserAccount_RedeemFriendInviteToken_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.invite_token != null)
                message.invite_token = String(object.invite_token);
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_RedeemFriendInviteToken_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @static
         * @param {CUserAccount_RedeemFriendInviteToken_Request} message CUserAccount_RedeemFriendInviteToken_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_RedeemFriendInviteToken_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.invite_token = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                object.invite_token = message.invite_token;
            return object;
        };
    
        /**
         * Converts this CUserAccount_RedeemFriendInviteToken_Request to JSON.
         * @function toJSON
         * @memberof CUserAccount_RedeemFriendInviteToken_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_RedeemFriendInviteToken_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_RedeemFriendInviteToken_Request;
    })();
    
    $root.CUserAccount_RedeemFriendInviteToken_Response = (function() {
    
        /**
         * Properties of a CUserAccount_RedeemFriendInviteToken_Response.
         * @exports ICUserAccount_RedeemFriendInviteToken_Response
         * @interface ICUserAccount_RedeemFriendInviteToken_Response
         */
    
        /**
         * Constructs a new CUserAccount_RedeemFriendInviteToken_Response.
         * @exports CUserAccount_RedeemFriendInviteToken_Response
         * @classdesc Represents a CUserAccount_RedeemFriendInviteToken_Response.
         * @implements ICUserAccount_RedeemFriendInviteToken_Response
         * @constructor
         * @param {ICUserAccount_RedeemFriendInviteToken_Response=} [properties] Properties to set
         */
        function CUserAccount_RedeemFriendInviteToken_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CUserAccount_RedeemFriendInviteToken_Response instance using the specified properties.
         * @function create
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_RedeemFriendInviteToken_Response=} [properties] Properties to set
         * @returns {CUserAccount_RedeemFriendInviteToken_Response} CUserAccount_RedeemFriendInviteToken_Response instance
         */
        CUserAccount_RedeemFriendInviteToken_Response.create = function create(properties) {
            return new CUserAccount_RedeemFriendInviteToken_Response(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_RedeemFriendInviteToken_Response message. Does not implicitly {@link CUserAccount_RedeemFriendInviteToken_Response.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_RedeemFriendInviteToken_Response} message CUserAccount_RedeemFriendInviteToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RedeemFriendInviteToken_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_RedeemFriendInviteToken_Response message, length delimited. Does not implicitly {@link CUserAccount_RedeemFriendInviteToken_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_RedeemFriendInviteToken_Response} message CUserAccount_RedeemFriendInviteToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RedeemFriendInviteToken_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_RedeemFriendInviteToken_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_RedeemFriendInviteToken_Response} CUserAccount_RedeemFriendInviteToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RedeemFriendInviteToken_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_RedeemFriendInviteToken_Response();
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
         * Decodes a CUserAccount_RedeemFriendInviteToken_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_RedeemFriendInviteToken_Response} CUserAccount_RedeemFriendInviteToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RedeemFriendInviteToken_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_RedeemFriendInviteToken_Response message.
         * @function verify
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_RedeemFriendInviteToken_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_RedeemFriendInviteToken_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_RedeemFriendInviteToken_Response} CUserAccount_RedeemFriendInviteToken_Response
         */
        CUserAccount_RedeemFriendInviteToken_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_RedeemFriendInviteToken_Response)
                return object;
            return new $root.CUserAccount_RedeemFriendInviteToken_Response();
        };
    
        /**
         * Creates a plain object from a CUserAccount_RedeemFriendInviteToken_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @static
         * @param {CUserAccount_RedeemFriendInviteToken_Response} message CUserAccount_RedeemFriendInviteToken_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_RedeemFriendInviteToken_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CUserAccount_RedeemFriendInviteToken_Response to JSON.
         * @function toJSON
         * @memberof CUserAccount_RedeemFriendInviteToken_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_RedeemFriendInviteToken_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_RedeemFriendInviteToken_Response;
    })();
    
    $root.CUserAccount_RevokeFriendInviteToken_Request = (function() {
    
        /**
         * Properties of a CUserAccount_RevokeFriendInviteToken_Request.
         * @exports ICUserAccount_RevokeFriendInviteToken_Request
         * @interface ICUserAccount_RevokeFriendInviteToken_Request
         * @property {string|null} [invite_token] CUserAccount_RevokeFriendInviteToken_Request invite_token
         */
    
        /**
         * Constructs a new CUserAccount_RevokeFriendInviteToken_Request.
         * @exports CUserAccount_RevokeFriendInviteToken_Request
         * @classdesc Represents a CUserAccount_RevokeFriendInviteToken_Request.
         * @implements ICUserAccount_RevokeFriendInviteToken_Request
         * @constructor
         * @param {ICUserAccount_RevokeFriendInviteToken_Request=} [properties] Properties to set
         */
        function CUserAccount_RevokeFriendInviteToken_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_RevokeFriendInviteToken_Request invite_token.
         * @member {string} invite_token
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @instance
         */
        CUserAccount_RevokeFriendInviteToken_Request.prototype.invite_token = "";
    
        /**
         * Creates a new CUserAccount_RevokeFriendInviteToken_Request instance using the specified properties.
         * @function create
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_RevokeFriendInviteToken_Request=} [properties] Properties to set
         * @returns {CUserAccount_RevokeFriendInviteToken_Request} CUserAccount_RevokeFriendInviteToken_Request instance
         */
        CUserAccount_RevokeFriendInviteToken_Request.create = function create(properties) {
            return new CUserAccount_RevokeFriendInviteToken_Request(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_RevokeFriendInviteToken_Request message. Does not implicitly {@link CUserAccount_RevokeFriendInviteToken_Request.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_RevokeFriendInviteToken_Request} message CUserAccount_RevokeFriendInviteToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RevokeFriendInviteToken_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.invite_token);
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_RevokeFriendInviteToken_Request message, length delimited. Does not implicitly {@link CUserAccount_RevokeFriendInviteToken_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @static
         * @param {ICUserAccount_RevokeFriendInviteToken_Request} message CUserAccount_RevokeFriendInviteToken_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RevokeFriendInviteToken_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_RevokeFriendInviteToken_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_RevokeFriendInviteToken_Request} CUserAccount_RevokeFriendInviteToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RevokeFriendInviteToken_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_RevokeFriendInviteToken_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.invite_token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_RevokeFriendInviteToken_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_RevokeFriendInviteToken_Request} CUserAccount_RevokeFriendInviteToken_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RevokeFriendInviteToken_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_RevokeFriendInviteToken_Request message.
         * @function verify
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_RevokeFriendInviteToken_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                if (!$util.isString(message.invite_token))
                    return "invite_token: string expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_RevokeFriendInviteToken_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_RevokeFriendInviteToken_Request} CUserAccount_RevokeFriendInviteToken_Request
         */
        CUserAccount_RevokeFriendInviteToken_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_RevokeFriendInviteToken_Request)
                return object;
            var message = new $root.CUserAccount_RevokeFriendInviteToken_Request();
            if (object.invite_token != null)
                message.invite_token = String(object.invite_token);
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_RevokeFriendInviteToken_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @static
         * @param {CUserAccount_RevokeFriendInviteToken_Request} message CUserAccount_RevokeFriendInviteToken_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_RevokeFriendInviteToken_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.invite_token = "";
            if (message.invite_token != null && message.hasOwnProperty("invite_token"))
                object.invite_token = message.invite_token;
            return object;
        };
    
        /**
         * Converts this CUserAccount_RevokeFriendInviteToken_Request to JSON.
         * @function toJSON
         * @memberof CUserAccount_RevokeFriendInviteToken_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_RevokeFriendInviteToken_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_RevokeFriendInviteToken_Request;
    })();
    
    $root.CUserAccount_RevokeFriendInviteToken_Response = (function() {
    
        /**
         * Properties of a CUserAccount_RevokeFriendInviteToken_Response.
         * @exports ICUserAccount_RevokeFriendInviteToken_Response
         * @interface ICUserAccount_RevokeFriendInviteToken_Response
         */
    
        /**
         * Constructs a new CUserAccount_RevokeFriendInviteToken_Response.
         * @exports CUserAccount_RevokeFriendInviteToken_Response
         * @classdesc Represents a CUserAccount_RevokeFriendInviteToken_Response.
         * @implements ICUserAccount_RevokeFriendInviteToken_Response
         * @constructor
         * @param {ICUserAccount_RevokeFriendInviteToken_Response=} [properties] Properties to set
         */
        function CUserAccount_RevokeFriendInviteToken_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CUserAccount_RevokeFriendInviteToken_Response instance using the specified properties.
         * @function create
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_RevokeFriendInviteToken_Response=} [properties] Properties to set
         * @returns {CUserAccount_RevokeFriendInviteToken_Response} CUserAccount_RevokeFriendInviteToken_Response instance
         */
        CUserAccount_RevokeFriendInviteToken_Response.create = function create(properties) {
            return new CUserAccount_RevokeFriendInviteToken_Response(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_RevokeFriendInviteToken_Response message. Does not implicitly {@link CUserAccount_RevokeFriendInviteToken_Response.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_RevokeFriendInviteToken_Response} message CUserAccount_RevokeFriendInviteToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RevokeFriendInviteToken_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_RevokeFriendInviteToken_Response message, length delimited. Does not implicitly {@link CUserAccount_RevokeFriendInviteToken_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @static
         * @param {ICUserAccount_RevokeFriendInviteToken_Response} message CUserAccount_RevokeFriendInviteToken_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RevokeFriendInviteToken_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_RevokeFriendInviteToken_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_RevokeFriendInviteToken_Response} CUserAccount_RevokeFriendInviteToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RevokeFriendInviteToken_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_RevokeFriendInviteToken_Response();
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
         * Decodes a CUserAccount_RevokeFriendInviteToken_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_RevokeFriendInviteToken_Response} CUserAccount_RevokeFriendInviteToken_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RevokeFriendInviteToken_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_RevokeFriendInviteToken_Response message.
         * @function verify
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_RevokeFriendInviteToken_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_RevokeFriendInviteToken_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_RevokeFriendInviteToken_Response} CUserAccount_RevokeFriendInviteToken_Response
         */
        CUserAccount_RevokeFriendInviteToken_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_RevokeFriendInviteToken_Response)
                return object;
            return new $root.CUserAccount_RevokeFriendInviteToken_Response();
        };
    
        /**
         * Creates a plain object from a CUserAccount_RevokeFriendInviteToken_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @static
         * @param {CUserAccount_RevokeFriendInviteToken_Response} message CUserAccount_RevokeFriendInviteToken_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_RevokeFriendInviteToken_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CUserAccount_RevokeFriendInviteToken_Response to JSON.
         * @function toJSON
         * @memberof CUserAccount_RevokeFriendInviteToken_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_RevokeFriendInviteToken_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_RevokeFriendInviteToken_Response;
    })();
    
    $root.CUserAccount_RegisterCompatTool_Request = (function() {
    
        /**
         * Properties of a CUserAccount_RegisterCompatTool_Request.
         * @exports ICUserAccount_RegisterCompatTool_Request
         * @interface ICUserAccount_RegisterCompatTool_Request
         * @property {number|null} [compat_tool] CUserAccount_RegisterCompatTool_Request compat_tool
         */
    
        /**
         * Constructs a new CUserAccount_RegisterCompatTool_Request.
         * @exports CUserAccount_RegisterCompatTool_Request
         * @classdesc Represents a CUserAccount_RegisterCompatTool_Request.
         * @implements ICUserAccount_RegisterCompatTool_Request
         * @constructor
         * @param {ICUserAccount_RegisterCompatTool_Request=} [properties] Properties to set
         */
        function CUserAccount_RegisterCompatTool_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CUserAccount_RegisterCompatTool_Request compat_tool.
         * @member {number} compat_tool
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @instance
         */
        CUserAccount_RegisterCompatTool_Request.prototype.compat_tool = 0;
    
        /**
         * Creates a new CUserAccount_RegisterCompatTool_Request instance using the specified properties.
         * @function create
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @static
         * @param {ICUserAccount_RegisterCompatTool_Request=} [properties] Properties to set
         * @returns {CUserAccount_RegisterCompatTool_Request} CUserAccount_RegisterCompatTool_Request instance
         */
        CUserAccount_RegisterCompatTool_Request.create = function create(properties) {
            return new CUserAccount_RegisterCompatTool_Request(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_RegisterCompatTool_Request message. Does not implicitly {@link CUserAccount_RegisterCompatTool_Request.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @static
         * @param {ICUserAccount_RegisterCompatTool_Request} message CUserAccount_RegisterCompatTool_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RegisterCompatTool_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.compat_tool != null && message.hasOwnProperty("compat_tool"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.compat_tool);
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_RegisterCompatTool_Request message, length delimited. Does not implicitly {@link CUserAccount_RegisterCompatTool_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @static
         * @param {ICUserAccount_RegisterCompatTool_Request} message CUserAccount_RegisterCompatTool_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RegisterCompatTool_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_RegisterCompatTool_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_RegisterCompatTool_Request} CUserAccount_RegisterCompatTool_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RegisterCompatTool_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_RegisterCompatTool_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.compat_tool = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CUserAccount_RegisterCompatTool_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_RegisterCompatTool_Request} CUserAccount_RegisterCompatTool_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RegisterCompatTool_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_RegisterCompatTool_Request message.
         * @function verify
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_RegisterCompatTool_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.compat_tool != null && message.hasOwnProperty("compat_tool"))
                if (!$util.isInteger(message.compat_tool))
                    return "compat_tool: integer expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_RegisterCompatTool_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_RegisterCompatTool_Request} CUserAccount_RegisterCompatTool_Request
         */
        CUserAccount_RegisterCompatTool_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_RegisterCompatTool_Request)
                return object;
            var message = new $root.CUserAccount_RegisterCompatTool_Request();
            if (object.compat_tool != null)
                message.compat_tool = object.compat_tool >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CUserAccount_RegisterCompatTool_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @static
         * @param {CUserAccount_RegisterCompatTool_Request} message CUserAccount_RegisterCompatTool_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_RegisterCompatTool_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.compat_tool = 0;
            if (message.compat_tool != null && message.hasOwnProperty("compat_tool"))
                object.compat_tool = message.compat_tool;
            return object;
        };
    
        /**
         * Converts this CUserAccount_RegisterCompatTool_Request to JSON.
         * @function toJSON
         * @memberof CUserAccount_RegisterCompatTool_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_RegisterCompatTool_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_RegisterCompatTool_Request;
    })();
    
    $root.CUserAccount_RegisterCompatTool_Response = (function() {
    
        /**
         * Properties of a CUserAccount_RegisterCompatTool_Response.
         * @exports ICUserAccount_RegisterCompatTool_Response
         * @interface ICUserAccount_RegisterCompatTool_Response
         */
    
        /**
         * Constructs a new CUserAccount_RegisterCompatTool_Response.
         * @exports CUserAccount_RegisterCompatTool_Response
         * @classdesc Represents a CUserAccount_RegisterCompatTool_Response.
         * @implements ICUserAccount_RegisterCompatTool_Response
         * @constructor
         * @param {ICUserAccount_RegisterCompatTool_Response=} [properties] Properties to set
         */
        function CUserAccount_RegisterCompatTool_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new CUserAccount_RegisterCompatTool_Response instance using the specified properties.
         * @function create
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @static
         * @param {ICUserAccount_RegisterCompatTool_Response=} [properties] Properties to set
         * @returns {CUserAccount_RegisterCompatTool_Response} CUserAccount_RegisterCompatTool_Response instance
         */
        CUserAccount_RegisterCompatTool_Response.create = function create(properties) {
            return new CUserAccount_RegisterCompatTool_Response(properties);
        };
    
        /**
         * Encodes the specified CUserAccount_RegisterCompatTool_Response message. Does not implicitly {@link CUserAccount_RegisterCompatTool_Response.verify|verify} messages.
         * @function encode
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @static
         * @param {ICUserAccount_RegisterCompatTool_Response} message CUserAccount_RegisterCompatTool_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RegisterCompatTool_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified CUserAccount_RegisterCompatTool_Response message, length delimited. Does not implicitly {@link CUserAccount_RegisterCompatTool_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @static
         * @param {ICUserAccount_RegisterCompatTool_Response} message CUserAccount_RegisterCompatTool_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CUserAccount_RegisterCompatTool_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CUserAccount_RegisterCompatTool_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CUserAccount_RegisterCompatTool_Response} CUserAccount_RegisterCompatTool_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RegisterCompatTool_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CUserAccount_RegisterCompatTool_Response();
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
         * Decodes a CUserAccount_RegisterCompatTool_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CUserAccount_RegisterCompatTool_Response} CUserAccount_RegisterCompatTool_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CUserAccount_RegisterCompatTool_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CUserAccount_RegisterCompatTool_Response message.
         * @function verify
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CUserAccount_RegisterCompatTool_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a CUserAccount_RegisterCompatTool_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CUserAccount_RegisterCompatTool_Response} CUserAccount_RegisterCompatTool_Response
         */
        CUserAccount_RegisterCompatTool_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CUserAccount_RegisterCompatTool_Response)
                return object;
            return new $root.CUserAccount_RegisterCompatTool_Response();
        };
    
        /**
         * Creates a plain object from a CUserAccount_RegisterCompatTool_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @static
         * @param {CUserAccount_RegisterCompatTool_Response} message CUserAccount_RegisterCompatTool_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CUserAccount_RegisterCompatTool_Response.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this CUserAccount_RegisterCompatTool_Response to JSON.
         * @function toJSON
         * @memberof CUserAccount_RegisterCompatTool_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CUserAccount_RegisterCompatTool_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CUserAccount_RegisterCompatTool_Response;
    })();
    
    $root.CAccountLinking_GetLinkedAccountInfo_Request = (function() {
    
        /**
         * Properties of a CAccountLinking_GetLinkedAccountInfo_Request.
         * @exports ICAccountLinking_GetLinkedAccountInfo_Request
         * @interface ICAccountLinking_GetLinkedAccountInfo_Request
         * @property {EInternalAccountType|null} [account_type] CAccountLinking_GetLinkedAccountInfo_Request account_type
         * @property {number|Long|null} [account_id] CAccountLinking_GetLinkedAccountInfo_Request account_id
         * @property {EExternalAccountType|null} [filter] CAccountLinking_GetLinkedAccountInfo_Request filter
         * @property {boolean|null} [return_access_token] CAccountLinking_GetLinkedAccountInfo_Request return_access_token
         */
    
        /**
         * Constructs a new CAccountLinking_GetLinkedAccountInfo_Request.
         * @exports CAccountLinking_GetLinkedAccountInfo_Request
         * @classdesc Represents a CAccountLinking_GetLinkedAccountInfo_Request.
         * @implements ICAccountLinking_GetLinkedAccountInfo_Request
         * @constructor
         * @param {ICAccountLinking_GetLinkedAccountInfo_Request=} [properties] Properties to set
         */
        function CAccountLinking_GetLinkedAccountInfo_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountLinking_GetLinkedAccountInfo_Request account_type.
         * @member {EInternalAccountType} account_type
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @instance
         */
        CAccountLinking_GetLinkedAccountInfo_Request.prototype.account_type = 1;
    
        /**
         * CAccountLinking_GetLinkedAccountInfo_Request account_id.
         * @member {number|Long} account_id
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @instance
         */
        CAccountLinking_GetLinkedAccountInfo_Request.prototype.account_id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAccountLinking_GetLinkedAccountInfo_Request filter.
         * @member {EExternalAccountType} filter
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @instance
         */
        CAccountLinking_GetLinkedAccountInfo_Request.prototype.filter = 0;
    
        /**
         * CAccountLinking_GetLinkedAccountInfo_Request return_access_token.
         * @member {boolean} return_access_token
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @instance
         */
        CAccountLinking_GetLinkedAccountInfo_Request.prototype.return_access_token = false;
    
        /**
         * Creates a new CAccountLinking_GetLinkedAccountInfo_Request instance using the specified properties.
         * @function create
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @static
         * @param {ICAccountLinking_GetLinkedAccountInfo_Request=} [properties] Properties to set
         * @returns {CAccountLinking_GetLinkedAccountInfo_Request} CAccountLinking_GetLinkedAccountInfo_Request instance
         */
        CAccountLinking_GetLinkedAccountInfo_Request.create = function create(properties) {
            return new CAccountLinking_GetLinkedAccountInfo_Request(properties);
        };
    
        /**
         * Encodes the specified CAccountLinking_GetLinkedAccountInfo_Request message. Does not implicitly {@link CAccountLinking_GetLinkedAccountInfo_Request.verify|verify} messages.
         * @function encode
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @static
         * @param {ICAccountLinking_GetLinkedAccountInfo_Request} message CAccountLinking_GetLinkedAccountInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountLinking_GetLinkedAccountInfo_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account_type != null && message.hasOwnProperty("account_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.account_type);
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.account_id);
            if (message.filter != null && message.hasOwnProperty("filter"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.filter);
            if (message.return_access_token != null && message.hasOwnProperty("return_access_token"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.return_access_token);
            return writer;
        };
    
        /**
         * Encodes the specified CAccountLinking_GetLinkedAccountInfo_Request message, length delimited. Does not implicitly {@link CAccountLinking_GetLinkedAccountInfo_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @static
         * @param {ICAccountLinking_GetLinkedAccountInfo_Request} message CAccountLinking_GetLinkedAccountInfo_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountLinking_GetLinkedAccountInfo_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountLinking_GetLinkedAccountInfo_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountLinking_GetLinkedAccountInfo_Request} CAccountLinking_GetLinkedAccountInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountLinking_GetLinkedAccountInfo_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountLinking_GetLinkedAccountInfo_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account_type = reader.int32();
                    break;
                case 2:
                    message.account_id = reader.uint64();
                    break;
                case 3:
                    message.filter = reader.int32();
                    break;
                case 4:
                    message.return_access_token = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountLinking_GetLinkedAccountInfo_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountLinking_GetLinkedAccountInfo_Request} CAccountLinking_GetLinkedAccountInfo_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountLinking_GetLinkedAccountInfo_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountLinking_GetLinkedAccountInfo_Request message.
         * @function verify
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountLinking_GetLinkedAccountInfo_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account_type != null && message.hasOwnProperty("account_type"))
                switch (message.account_type) {
                default:
                    return "account_type: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                if (!$util.isInteger(message.account_id) && !(message.account_id && $util.isInteger(message.account_id.low) && $util.isInteger(message.account_id.high)))
                    return "account_id: integer|Long expected";
            if (message.filter != null && message.hasOwnProperty("filter"))
                switch (message.filter) {
                default:
                    return "filter: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.return_access_token != null && message.hasOwnProperty("return_access_token"))
                if (typeof message.return_access_token !== "boolean")
                    return "return_access_token: boolean expected";
            return null;
        };
    
        /**
         * Creates a CAccountLinking_GetLinkedAccountInfo_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountLinking_GetLinkedAccountInfo_Request} CAccountLinking_GetLinkedAccountInfo_Request
         */
        CAccountLinking_GetLinkedAccountInfo_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountLinking_GetLinkedAccountInfo_Request)
                return object;
            var message = new $root.CAccountLinking_GetLinkedAccountInfo_Request();
            switch (object.account_type) {
            case "k_EInternalSteamAccountType":
            case 1:
                message.account_type = 1;
                break;
            case "k_EInternalClanType":
            case 2:
                message.account_type = 2;
                break;
            case "k_EInternalAppType":
            case 3:
                message.account_type = 3;
                break;
            case "k_EInternalBroadcastChannelType":
            case 4:
                message.account_type = 4;
                break;
            }
            if (object.account_id != null)
                if ($util.Long)
                    (message.account_id = $util.Long.fromValue(object.account_id)).unsigned = true;
                else if (typeof object.account_id === "string")
                    message.account_id = parseInt(object.account_id, 10);
                else if (typeof object.account_id === "number")
                    message.account_id = object.account_id;
                else if (typeof object.account_id === "object")
                    message.account_id = new $util.LongBits(object.account_id.low >>> 0, object.account_id.high >>> 0).toNumber(true);
            switch (object.filter) {
            case "k_EExternalNone":
            case 0:
                message.filter = 0;
                break;
            case "k_EExternalSteamAccount":
            case 1:
                message.filter = 1;
                break;
            case "k_EExternalGoogleAccount":
            case 2:
                message.filter = 2;
                break;
            case "k_EExternalFacebookAccount":
            case 3:
                message.filter = 3;
                break;
            case "k_EExternalTwitterAccount":
            case 4:
                message.filter = 4;
                break;
            case "k_EExternalTwitchAccount":
            case 5:
                message.filter = 5;
                break;
            case "k_EExternalYouTubeChannelAccount":
            case 6:
                message.filter = 6;
                break;
            case "k_EExternalFacebookPage":
            case 7:
                message.filter = 7;
                break;
            }
            if (object.return_access_token != null)
                message.return_access_token = Boolean(object.return_access_token);
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountLinking_GetLinkedAccountInfo_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @static
         * @param {CAccountLinking_GetLinkedAccountInfo_Request} message CAccountLinking_GetLinkedAccountInfo_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountLinking_GetLinkedAccountInfo_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account_type = options.enums === String ? "k_EInternalSteamAccountType" : 1;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.account_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.account_id = options.longs === String ? "0" : 0;
                object.filter = options.enums === String ? "k_EExternalNone" : 0;
                object.return_access_token = false;
            }
            if (message.account_type != null && message.hasOwnProperty("account_type"))
                object.account_type = options.enums === String ? $root.EInternalAccountType[message.account_type] : message.account_type;
            if (message.account_id != null && message.hasOwnProperty("account_id"))
                if (typeof message.account_id === "number")
                    object.account_id = options.longs === String ? String(message.account_id) : message.account_id;
                else
                    object.account_id = options.longs === String ? $util.Long.prototype.toString.call(message.account_id) : options.longs === Number ? new $util.LongBits(message.account_id.low >>> 0, message.account_id.high >>> 0).toNumber(true) : message.account_id;
            if (message.filter != null && message.hasOwnProperty("filter"))
                object.filter = options.enums === String ? $root.EExternalAccountType[message.filter] : message.filter;
            if (message.return_access_token != null && message.hasOwnProperty("return_access_token"))
                object.return_access_token = message.return_access_token;
            return object;
        };
    
        /**
         * Converts this CAccountLinking_GetLinkedAccountInfo_Request to JSON.
         * @function toJSON
         * @memberof CAccountLinking_GetLinkedAccountInfo_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountLinking_GetLinkedAccountInfo_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAccountLinking_GetLinkedAccountInfo_Request;
    })();
    
    $root.CAccountLinking_GetLinkedAccountInfo_Response = (function() {
    
        /**
         * Properties of a CAccountLinking_GetLinkedAccountInfo_Response.
         * @exports ICAccountLinking_GetLinkedAccountInfo_Response
         * @interface ICAccountLinking_GetLinkedAccountInfo_Response
         * @property {Array.<CAccountLinking_GetLinkedAccountInfo_Response.ICExternalAccountTuple_Response>|null} [external_accounts] CAccountLinking_GetLinkedAccountInfo_Response external_accounts
         */
    
        /**
         * Constructs a new CAccountLinking_GetLinkedAccountInfo_Response.
         * @exports CAccountLinking_GetLinkedAccountInfo_Response
         * @classdesc Represents a CAccountLinking_GetLinkedAccountInfo_Response.
         * @implements ICAccountLinking_GetLinkedAccountInfo_Response
         * @constructor
         * @param {ICAccountLinking_GetLinkedAccountInfo_Response=} [properties] Properties to set
         */
        function CAccountLinking_GetLinkedAccountInfo_Response(properties) {
            this.external_accounts = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAccountLinking_GetLinkedAccountInfo_Response external_accounts.
         * @member {Array.<CAccountLinking_GetLinkedAccountInfo_Response.ICExternalAccountTuple_Response>} external_accounts
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @instance
         */
        CAccountLinking_GetLinkedAccountInfo_Response.prototype.external_accounts = $util.emptyArray;
    
        /**
         * Creates a new CAccountLinking_GetLinkedAccountInfo_Response instance using the specified properties.
         * @function create
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @static
         * @param {ICAccountLinking_GetLinkedAccountInfo_Response=} [properties] Properties to set
         * @returns {CAccountLinking_GetLinkedAccountInfo_Response} CAccountLinking_GetLinkedAccountInfo_Response instance
         */
        CAccountLinking_GetLinkedAccountInfo_Response.create = function create(properties) {
            return new CAccountLinking_GetLinkedAccountInfo_Response(properties);
        };
    
        /**
         * Encodes the specified CAccountLinking_GetLinkedAccountInfo_Response message. Does not implicitly {@link CAccountLinking_GetLinkedAccountInfo_Response.verify|verify} messages.
         * @function encode
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @static
         * @param {ICAccountLinking_GetLinkedAccountInfo_Response} message CAccountLinking_GetLinkedAccountInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountLinking_GetLinkedAccountInfo_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.external_accounts != null && message.external_accounts.length)
                for (var i = 0; i < message.external_accounts.length; ++i)
                    $root.CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response.encode(message.external_accounts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CAccountLinking_GetLinkedAccountInfo_Response message, length delimited. Does not implicitly {@link CAccountLinking_GetLinkedAccountInfo_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @static
         * @param {ICAccountLinking_GetLinkedAccountInfo_Response} message CAccountLinking_GetLinkedAccountInfo_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAccountLinking_GetLinkedAccountInfo_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAccountLinking_GetLinkedAccountInfo_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAccountLinking_GetLinkedAccountInfo_Response} CAccountLinking_GetLinkedAccountInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountLinking_GetLinkedAccountInfo_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountLinking_GetLinkedAccountInfo_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.external_accounts && message.external_accounts.length))
                        message.external_accounts = [];
                    message.external_accounts.push($root.CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAccountLinking_GetLinkedAccountInfo_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAccountLinking_GetLinkedAccountInfo_Response} CAccountLinking_GetLinkedAccountInfo_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAccountLinking_GetLinkedAccountInfo_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAccountLinking_GetLinkedAccountInfo_Response message.
         * @function verify
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAccountLinking_GetLinkedAccountInfo_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.external_accounts != null && message.hasOwnProperty("external_accounts")) {
                if (!Array.isArray(message.external_accounts))
                    return "external_accounts: array expected";
                for (var i = 0; i < message.external_accounts.length; ++i) {
                    var error = $root.CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response.verify(message.external_accounts[i]);
                    if (error)
                        return "external_accounts." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a CAccountLinking_GetLinkedAccountInfo_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAccountLinking_GetLinkedAccountInfo_Response} CAccountLinking_GetLinkedAccountInfo_Response
         */
        CAccountLinking_GetLinkedAccountInfo_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CAccountLinking_GetLinkedAccountInfo_Response)
                return object;
            var message = new $root.CAccountLinking_GetLinkedAccountInfo_Response();
            if (object.external_accounts) {
                if (!Array.isArray(object.external_accounts))
                    throw TypeError(".CAccountLinking_GetLinkedAccountInfo_Response.external_accounts: array expected");
                message.external_accounts = [];
                for (var i = 0; i < object.external_accounts.length; ++i) {
                    if (typeof object.external_accounts[i] !== "object")
                        throw TypeError(".CAccountLinking_GetLinkedAccountInfo_Response.external_accounts: object expected");
                    message.external_accounts[i] = $root.CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response.fromObject(object.external_accounts[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAccountLinking_GetLinkedAccountInfo_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @static
         * @param {CAccountLinking_GetLinkedAccountInfo_Response} message CAccountLinking_GetLinkedAccountInfo_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAccountLinking_GetLinkedAccountInfo_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.external_accounts = [];
            if (message.external_accounts && message.external_accounts.length) {
                object.external_accounts = [];
                for (var j = 0; j < message.external_accounts.length; ++j)
                    object.external_accounts[j] = $root.CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response.toObject(message.external_accounts[j], options);
            }
            return object;
        };
    
        /**
         * Converts this CAccountLinking_GetLinkedAccountInfo_Response to JSON.
         * @function toJSON
         * @memberof CAccountLinking_GetLinkedAccountInfo_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAccountLinking_GetLinkedAccountInfo_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response = (function() {
    
            /**
             * Properties of a CExternalAccountTuple_Response.
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response
             * @interface ICExternalAccountTuple_Response
             * @property {EExternalAccountType|null} [external_type] CExternalAccountTuple_Response external_type
             * @property {string|null} [external_id] CExternalAccountTuple_Response external_id
             * @property {string|null} [external_user_name] CExternalAccountTuple_Response external_user_name
             * @property {string|null} [external_url] CExternalAccountTuple_Response external_url
             * @property {string|null} [access_token] CExternalAccountTuple_Response access_token
             * @property {string|null} [access_token_secret] CExternalAccountTuple_Response access_token_secret
             * @property {boolean|null} [is_valid] CExternalAccountTuple_Response is_valid
             */
    
            /**
             * Constructs a new CExternalAccountTuple_Response.
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response
             * @classdesc Represents a CExternalAccountTuple_Response.
             * @implements ICExternalAccountTuple_Response
             * @constructor
             * @param {CAccountLinking_GetLinkedAccountInfo_Response.ICExternalAccountTuple_Response=} [properties] Properties to set
             */
            function CExternalAccountTuple_Response(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CExternalAccountTuple_Response external_type.
             * @member {EExternalAccountType} external_type
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @instance
             */
            CExternalAccountTuple_Response.prototype.external_type = 0;
    
            /**
             * CExternalAccountTuple_Response external_id.
             * @member {string} external_id
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @instance
             */
            CExternalAccountTuple_Response.prototype.external_id = "";
    
            /**
             * CExternalAccountTuple_Response external_user_name.
             * @member {string} external_user_name
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @instance
             */
            CExternalAccountTuple_Response.prototype.external_user_name = "";
    
            /**
             * CExternalAccountTuple_Response external_url.
             * @member {string} external_url
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @instance
             */
            CExternalAccountTuple_Response.prototype.external_url = "";
    
            /**
             * CExternalAccountTuple_Response access_token.
             * @member {string} access_token
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @instance
             */
            CExternalAccountTuple_Response.prototype.access_token = "";
    
            /**
             * CExternalAccountTuple_Response access_token_secret.
             * @member {string} access_token_secret
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @instance
             */
            CExternalAccountTuple_Response.prototype.access_token_secret = "";
    
            /**
             * CExternalAccountTuple_Response is_valid.
             * @member {boolean} is_valid
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @instance
             */
            CExternalAccountTuple_Response.prototype.is_valid = false;
    
            /**
             * Creates a new CExternalAccountTuple_Response instance using the specified properties.
             * @function create
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @static
             * @param {CAccountLinking_GetLinkedAccountInfo_Response.ICExternalAccountTuple_Response=} [properties] Properties to set
             * @returns {CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response} CExternalAccountTuple_Response instance
             */
            CExternalAccountTuple_Response.create = function create(properties) {
                return new CExternalAccountTuple_Response(properties);
            };
    
            /**
             * Encodes the specified CExternalAccountTuple_Response message. Does not implicitly {@link CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response.verify|verify} messages.
             * @function encode
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @static
             * @param {CAccountLinking_GetLinkedAccountInfo_Response.ICExternalAccountTuple_Response} message CExternalAccountTuple_Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CExternalAccountTuple_Response.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.external_type != null && message.hasOwnProperty("external_type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.external_type);
                if (message.external_id != null && message.hasOwnProperty("external_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.external_id);
                if (message.external_user_name != null && message.hasOwnProperty("external_user_name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.external_user_name);
                if (message.external_url != null && message.hasOwnProperty("external_url"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.external_url);
                if (message.access_token != null && message.hasOwnProperty("access_token"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.access_token);
                if (message.access_token_secret != null && message.hasOwnProperty("access_token_secret"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.access_token_secret);
                if (message.is_valid != null && message.hasOwnProperty("is_valid"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.is_valid);
                return writer;
            };
    
            /**
             * Encodes the specified CExternalAccountTuple_Response message, length delimited. Does not implicitly {@link CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @static
             * @param {CAccountLinking_GetLinkedAccountInfo_Response.ICExternalAccountTuple_Response} message CExternalAccountTuple_Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CExternalAccountTuple_Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CExternalAccountTuple_Response message from the specified reader or buffer.
             * @function decode
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response} CExternalAccountTuple_Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CExternalAccountTuple_Response.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.external_type = reader.int32();
                        break;
                    case 2:
                        message.external_id = reader.string();
                        break;
                    case 3:
                        message.external_user_name = reader.string();
                        break;
                    case 4:
                        message.external_url = reader.string();
                        break;
                    case 5:
                        message.access_token = reader.string();
                        break;
                    case 6:
                        message.access_token_secret = reader.string();
                        break;
                    case 7:
                        message.is_valid = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CExternalAccountTuple_Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response} CExternalAccountTuple_Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CExternalAccountTuple_Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CExternalAccountTuple_Response message.
             * @function verify
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CExternalAccountTuple_Response.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.external_type != null && message.hasOwnProperty("external_type"))
                    switch (message.external_type) {
                    default:
                        return "external_type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
                if (message.external_id != null && message.hasOwnProperty("external_id"))
                    if (!$util.isString(message.external_id))
                        return "external_id: string expected";
                if (message.external_user_name != null && message.hasOwnProperty("external_user_name"))
                    if (!$util.isString(message.external_user_name))
                        return "external_user_name: string expected";
                if (message.external_url != null && message.hasOwnProperty("external_url"))
                    if (!$util.isString(message.external_url))
                        return "external_url: string expected";
                if (message.access_token != null && message.hasOwnProperty("access_token"))
                    if (!$util.isString(message.access_token))
                        return "access_token: string expected";
                if (message.access_token_secret != null && message.hasOwnProperty("access_token_secret"))
                    if (!$util.isString(message.access_token_secret))
                        return "access_token_secret: string expected";
                if (message.is_valid != null && message.hasOwnProperty("is_valid"))
                    if (typeof message.is_valid !== "boolean")
                        return "is_valid: boolean expected";
                return null;
            };
    
            /**
             * Creates a CExternalAccountTuple_Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response} CExternalAccountTuple_Response
             */
            CExternalAccountTuple_Response.fromObject = function fromObject(object) {
                if (object instanceof $root.CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response)
                    return object;
                var message = new $root.CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response();
                switch (object.external_type) {
                case "k_EExternalNone":
                case 0:
                    message.external_type = 0;
                    break;
                case "k_EExternalSteamAccount":
                case 1:
                    message.external_type = 1;
                    break;
                case "k_EExternalGoogleAccount":
                case 2:
                    message.external_type = 2;
                    break;
                case "k_EExternalFacebookAccount":
                case 3:
                    message.external_type = 3;
                    break;
                case "k_EExternalTwitterAccount":
                case 4:
                    message.external_type = 4;
                    break;
                case "k_EExternalTwitchAccount":
                case 5:
                    message.external_type = 5;
                    break;
                case "k_EExternalYouTubeChannelAccount":
                case 6:
                    message.external_type = 6;
                    break;
                case "k_EExternalFacebookPage":
                case 7:
                    message.external_type = 7;
                    break;
                }
                if (object.external_id != null)
                    message.external_id = String(object.external_id);
                if (object.external_user_name != null)
                    message.external_user_name = String(object.external_user_name);
                if (object.external_url != null)
                    message.external_url = String(object.external_url);
                if (object.access_token != null)
                    message.access_token = String(object.access_token);
                if (object.access_token_secret != null)
                    message.access_token_secret = String(object.access_token_secret);
                if (object.is_valid != null)
                    message.is_valid = Boolean(object.is_valid);
                return message;
            };
    
            /**
             * Creates a plain object from a CExternalAccountTuple_Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @static
             * @param {CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response} message CExternalAccountTuple_Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CExternalAccountTuple_Response.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.external_type = options.enums === String ? "k_EExternalNone" : 0;
                    object.external_id = "";
                    object.external_user_name = "";
                    object.external_url = "";
                    object.access_token = "";
                    object.access_token_secret = "";
                    object.is_valid = false;
                }
                if (message.external_type != null && message.hasOwnProperty("external_type"))
                    object.external_type = options.enums === String ? $root.EExternalAccountType[message.external_type] : message.external_type;
                if (message.external_id != null && message.hasOwnProperty("external_id"))
                    object.external_id = message.external_id;
                if (message.external_user_name != null && message.hasOwnProperty("external_user_name"))
                    object.external_user_name = message.external_user_name;
                if (message.external_url != null && message.hasOwnProperty("external_url"))
                    object.external_url = message.external_url;
                if (message.access_token != null && message.hasOwnProperty("access_token"))
                    object.access_token = message.access_token;
                if (message.access_token_secret != null && message.hasOwnProperty("access_token_secret"))
                    object.access_token_secret = message.access_token_secret;
                if (message.is_valid != null && message.hasOwnProperty("is_valid"))
                    object.is_valid = message.is_valid;
                return object;
            };
    
            /**
             * Converts this CExternalAccountTuple_Response to JSON.
             * @function toJSON
             * @memberof CAccountLinking_GetLinkedAccountInfo_Response.CExternalAccountTuple_Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CExternalAccountTuple_Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CExternalAccountTuple_Response;
        })();
    
        return CAccountLinking_GetLinkedAccountInfo_Response;
    })();
    
    $root.CEmbeddedClient_AuthorizeCurrentDevice_Request = (function() {
    
        /**
         * Properties of a CEmbeddedClient_AuthorizeCurrentDevice_Request.
         * @exports ICEmbeddedClient_AuthorizeCurrentDevice_Request
         * @interface ICEmbeddedClient_AuthorizeCurrentDevice_Request
         * @property {number|Long|null} [steamid] CEmbeddedClient_AuthorizeCurrentDevice_Request steamid
         * @property {number|null} [appid] CEmbeddedClient_AuthorizeCurrentDevice_Request appid
         * @property {string|null} [device_info] CEmbeddedClient_AuthorizeCurrentDevice_Request device_info
         */
    
        /**
         * Constructs a new CEmbeddedClient_AuthorizeCurrentDevice_Request.
         * @exports CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @classdesc Represents a CEmbeddedClient_AuthorizeCurrentDevice_Request.
         * @implements ICEmbeddedClient_AuthorizeCurrentDevice_Request
         * @constructor
         * @param {ICEmbeddedClient_AuthorizeCurrentDevice_Request=} [properties] Properties to set
         */
        function CEmbeddedClient_AuthorizeCurrentDevice_Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CEmbeddedClient_AuthorizeCurrentDevice_Request steamid.
         * @member {number|Long} steamid
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @instance
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CEmbeddedClient_AuthorizeCurrentDevice_Request appid.
         * @member {number} appid
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @instance
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.prototype.appid = 0;
    
        /**
         * CEmbeddedClient_AuthorizeCurrentDevice_Request device_info.
         * @member {string} device_info
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @instance
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.prototype.device_info = "";
    
        /**
         * Creates a new CEmbeddedClient_AuthorizeCurrentDevice_Request instance using the specified properties.
         * @function create
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @static
         * @param {ICEmbeddedClient_AuthorizeCurrentDevice_Request=} [properties] Properties to set
         * @returns {CEmbeddedClient_AuthorizeCurrentDevice_Request} CEmbeddedClient_AuthorizeCurrentDevice_Request instance
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.create = function create(properties) {
            return new CEmbeddedClient_AuthorizeCurrentDevice_Request(properties);
        };
    
        /**
         * Encodes the specified CEmbeddedClient_AuthorizeCurrentDevice_Request message. Does not implicitly {@link CEmbeddedClient_AuthorizeCurrentDevice_Request.verify|verify} messages.
         * @function encode
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @static
         * @param {ICEmbeddedClient_AuthorizeCurrentDevice_Request} message CEmbeddedClient_AuthorizeCurrentDevice_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.appid);
            if (message.device_info != null && message.hasOwnProperty("device_info"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.device_info);
            return writer;
        };
    
        /**
         * Encodes the specified CEmbeddedClient_AuthorizeCurrentDevice_Request message, length delimited. Does not implicitly {@link CEmbeddedClient_AuthorizeCurrentDevice_Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @static
         * @param {ICEmbeddedClient_AuthorizeCurrentDevice_Request} message CEmbeddedClient_AuthorizeCurrentDevice_Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CEmbeddedClient_AuthorizeCurrentDevice_Request message from the specified reader or buffer.
         * @function decode
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CEmbeddedClient_AuthorizeCurrentDevice_Request} CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CEmbeddedClient_AuthorizeCurrentDevice_Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.appid = reader.uint32();
                    break;
                case 3:
                    message.device_info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CEmbeddedClient_AuthorizeCurrentDevice_Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CEmbeddedClient_AuthorizeCurrentDevice_Request} CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CEmbeddedClient_AuthorizeCurrentDevice_Request message.
         * @function verify
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.device_info != null && message.hasOwnProperty("device_info"))
                if (!$util.isString(message.device_info))
                    return "device_info: string expected";
            return null;
        };
    
        /**
         * Creates a CEmbeddedClient_AuthorizeCurrentDevice_Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CEmbeddedClient_AuthorizeCurrentDevice_Request} CEmbeddedClient_AuthorizeCurrentDevice_Request
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.fromObject = function fromObject(object) {
            if (object instanceof $root.CEmbeddedClient_AuthorizeCurrentDevice_Request)
                return object;
            var message = new $root.CEmbeddedClient_AuthorizeCurrentDevice_Request();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.device_info != null)
                message.device_info = String(object.device_info);
            return message;
        };
    
        /**
         * Creates a plain object from a CEmbeddedClient_AuthorizeCurrentDevice_Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @static
         * @param {CEmbeddedClient_AuthorizeCurrentDevice_Request} message CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                object.appid = 0;
                object.device_info = "";
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.device_info != null && message.hasOwnProperty("device_info"))
                object.device_info = message.device_info;
            return object;
        };
    
        /**
         * Converts this CEmbeddedClient_AuthorizeCurrentDevice_Request to JSON.
         * @function toJSON
         * @memberof CEmbeddedClient_AuthorizeCurrentDevice_Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CEmbeddedClient_AuthorizeCurrentDevice_Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CEmbeddedClient_AuthorizeCurrentDevice_Request;
    })();
    
    $root.CEmbeddedClient_Token = (function() {
    
        /**
         * Properties of a CEmbeddedClient_Token.
         * @exports ICEmbeddedClient_Token
         * @interface ICEmbeddedClient_Token
         * @property {number|Long|null} [steamid] CEmbeddedClient_Token steamid
         * @property {Uint8Array|null} [client_token] CEmbeddedClient_Token client_token
         * @property {number|null} [expiry] CEmbeddedClient_Token expiry
         * @property {number|null} [deviceid] CEmbeddedClient_Token deviceid
         */
    
        /**
         * Constructs a new CEmbeddedClient_Token.
         * @exports CEmbeddedClient_Token
         * @classdesc Represents a CEmbeddedClient_Token.
         * @implements ICEmbeddedClient_Token
         * @constructor
         * @param {ICEmbeddedClient_Token=} [properties] Properties to set
         */
        function CEmbeddedClient_Token(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CEmbeddedClient_Token steamid.
         * @member {number|Long} steamid
         * @memberof CEmbeddedClient_Token
         * @instance
         */
        CEmbeddedClient_Token.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * CEmbeddedClient_Token client_token.
         * @member {Uint8Array} client_token
         * @memberof CEmbeddedClient_Token
         * @instance
         */
        CEmbeddedClient_Token.prototype.client_token = $util.newBuffer([]);
    
        /**
         * CEmbeddedClient_Token expiry.
         * @member {number} expiry
         * @memberof CEmbeddedClient_Token
         * @instance
         */
        CEmbeddedClient_Token.prototype.expiry = 0;
    
        /**
         * CEmbeddedClient_Token deviceid.
         * @member {number} deviceid
         * @memberof CEmbeddedClient_Token
         * @instance
         */
        CEmbeddedClient_Token.prototype.deviceid = 0;
    
        /**
         * Creates a new CEmbeddedClient_Token instance using the specified properties.
         * @function create
         * @memberof CEmbeddedClient_Token
         * @static
         * @param {ICEmbeddedClient_Token=} [properties] Properties to set
         * @returns {CEmbeddedClient_Token} CEmbeddedClient_Token instance
         */
        CEmbeddedClient_Token.create = function create(properties) {
            return new CEmbeddedClient_Token(properties);
        };
    
        /**
         * Encodes the specified CEmbeddedClient_Token message. Does not implicitly {@link CEmbeddedClient_Token.verify|verify} messages.
         * @function encode
         * @memberof CEmbeddedClient_Token
         * @static
         * @param {ICEmbeddedClient_Token} message CEmbeddedClient_Token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEmbeddedClient_Token.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
            if (message.client_token != null && message.hasOwnProperty("client_token"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.client_token);
            if (message.expiry != null && message.hasOwnProperty("expiry"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.expiry);
            if (message.deviceid != null && message.hasOwnProperty("deviceid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.deviceid);
            return writer;
        };
    
        /**
         * Encodes the specified CEmbeddedClient_Token message, length delimited. Does not implicitly {@link CEmbeddedClient_Token.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CEmbeddedClient_Token
         * @static
         * @param {ICEmbeddedClient_Token} message CEmbeddedClient_Token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEmbeddedClient_Token.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CEmbeddedClient_Token message from the specified reader or buffer.
         * @function decode
         * @memberof CEmbeddedClient_Token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CEmbeddedClient_Token} CEmbeddedClient_Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEmbeddedClient_Token.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CEmbeddedClient_Token();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.steamid = reader.fixed64();
                    break;
                case 2:
                    message.client_token = reader.bytes();
                    break;
                case 3:
                    message.expiry = reader.uint32();
                    break;
                case 4:
                    message.deviceid = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CEmbeddedClient_Token message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CEmbeddedClient_Token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CEmbeddedClient_Token} CEmbeddedClient_Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEmbeddedClient_Token.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CEmbeddedClient_Token message.
         * @function verify
         * @memberof CEmbeddedClient_Token
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CEmbeddedClient_Token.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                    return "steamid: integer|Long expected";
            if (message.client_token != null && message.hasOwnProperty("client_token"))
                if (!(message.client_token && typeof message.client_token.length === "number" || $util.isString(message.client_token)))
                    return "client_token: buffer expected";
            if (message.expiry != null && message.hasOwnProperty("expiry"))
                if (!$util.isInteger(message.expiry))
                    return "expiry: integer expected";
            if (message.deviceid != null && message.hasOwnProperty("deviceid"))
                if (!$util.isInteger(message.deviceid))
                    return "deviceid: integer expected";
            return null;
        };
    
        /**
         * Creates a CEmbeddedClient_Token message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CEmbeddedClient_Token
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CEmbeddedClient_Token} CEmbeddedClient_Token
         */
        CEmbeddedClient_Token.fromObject = function fromObject(object) {
            if (object instanceof $root.CEmbeddedClient_Token)
                return object;
            var message = new $root.CEmbeddedClient_Token();
            if (object.steamid != null)
                if ($util.Long)
                    (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
                else if (typeof object.steamid === "string")
                    message.steamid = parseInt(object.steamid, 10);
                else if (typeof object.steamid === "number")
                    message.steamid = object.steamid;
                else if (typeof object.steamid === "object")
                    message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
            if (object.client_token != null)
                if (typeof object.client_token === "string")
                    $util.base64.decode(object.client_token, message.client_token = $util.newBuffer($util.base64.length(object.client_token)), 0);
                else if (object.client_token.length)
                    message.client_token = object.client_token;
            if (object.expiry != null)
                message.expiry = object.expiry >>> 0;
            if (object.deviceid != null)
                message.deviceid = object.deviceid >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CEmbeddedClient_Token message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CEmbeddedClient_Token
         * @static
         * @param {CEmbeddedClient_Token} message CEmbeddedClient_Token
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CEmbeddedClient_Token.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.steamid = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.client_token = "";
                else {
                    object.client_token = [];
                    if (options.bytes !== Array)
                        object.client_token = $util.newBuffer(object.client_token);
                }
                object.expiry = 0;
                object.deviceid = 0;
            }
            if (message.steamid != null && message.hasOwnProperty("steamid"))
                if (typeof message.steamid === "number")
                    object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
                else
                    object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
            if (message.client_token != null && message.hasOwnProperty("client_token"))
                object.client_token = options.bytes === String ? $util.base64.encode(message.client_token, 0, message.client_token.length) : options.bytes === Array ? Array.prototype.slice.call(message.client_token) : message.client_token;
            if (message.expiry != null && message.hasOwnProperty("expiry"))
                object.expiry = message.expiry;
            if (message.deviceid != null && message.hasOwnProperty("deviceid"))
                object.deviceid = message.deviceid;
            return object;
        };
    
        /**
         * Converts this CEmbeddedClient_Token to JSON.
         * @function toJSON
         * @memberof CEmbeddedClient_Token
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CEmbeddedClient_Token.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CEmbeddedClient_Token;
    })();
    
    $root.CEmbeddedClient_AuthorizeDevice_Response = (function() {
    
        /**
         * Properties of a CEmbeddedClient_AuthorizeDevice_Response.
         * @exports ICEmbeddedClient_AuthorizeDevice_Response
         * @interface ICEmbeddedClient_AuthorizeDevice_Response
         * @property {number|null} [result] CEmbeddedClient_AuthorizeDevice_Response result
         * @property {ICEmbeddedClient_Token|null} [token] CEmbeddedClient_AuthorizeDevice_Response token
         */
    
        /**
         * Constructs a new CEmbeddedClient_AuthorizeDevice_Response.
         * @exports CEmbeddedClient_AuthorizeDevice_Response
         * @classdesc Represents a CEmbeddedClient_AuthorizeDevice_Response.
         * @implements ICEmbeddedClient_AuthorizeDevice_Response
         * @constructor
         * @param {ICEmbeddedClient_AuthorizeDevice_Response=} [properties] Properties to set
         */
        function CEmbeddedClient_AuthorizeDevice_Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CEmbeddedClient_AuthorizeDevice_Response result.
         * @member {number} result
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @instance
         */
        CEmbeddedClient_AuthorizeDevice_Response.prototype.result = 0;
    
        /**
         * CEmbeddedClient_AuthorizeDevice_Response token.
         * @member {ICEmbeddedClient_Token|null|undefined} token
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @instance
         */
        CEmbeddedClient_AuthorizeDevice_Response.prototype.token = null;
    
        /**
         * Creates a new CEmbeddedClient_AuthorizeDevice_Response instance using the specified properties.
         * @function create
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @static
         * @param {ICEmbeddedClient_AuthorizeDevice_Response=} [properties] Properties to set
         * @returns {CEmbeddedClient_AuthorizeDevice_Response} CEmbeddedClient_AuthorizeDevice_Response instance
         */
        CEmbeddedClient_AuthorizeDevice_Response.create = function create(properties) {
            return new CEmbeddedClient_AuthorizeDevice_Response(properties);
        };
    
        /**
         * Encodes the specified CEmbeddedClient_AuthorizeDevice_Response message. Does not implicitly {@link CEmbeddedClient_AuthorizeDevice_Response.verify|verify} messages.
         * @function encode
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @static
         * @param {ICEmbeddedClient_AuthorizeDevice_Response} message CEmbeddedClient_AuthorizeDevice_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEmbeddedClient_AuthorizeDevice_Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.token != null && message.hasOwnProperty("token"))
                $root.CEmbeddedClient_Token.encode(message.token, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified CEmbeddedClient_AuthorizeDevice_Response message, length delimited. Does not implicitly {@link CEmbeddedClient_AuthorizeDevice_Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @static
         * @param {ICEmbeddedClient_AuthorizeDevice_Response} message CEmbeddedClient_AuthorizeDevice_Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CEmbeddedClient_AuthorizeDevice_Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CEmbeddedClient_AuthorizeDevice_Response message from the specified reader or buffer.
         * @function decode
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CEmbeddedClient_AuthorizeDevice_Response} CEmbeddedClient_AuthorizeDevice_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEmbeddedClient_AuthorizeDevice_Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CEmbeddedClient_AuthorizeDevice_Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.uint32();
                    break;
                case 2:
                    message.token = $root.CEmbeddedClient_Token.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CEmbeddedClient_AuthorizeDevice_Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CEmbeddedClient_AuthorizeDevice_Response} CEmbeddedClient_AuthorizeDevice_Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CEmbeddedClient_AuthorizeDevice_Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CEmbeddedClient_AuthorizeDevice_Response message.
         * @function verify
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CEmbeddedClient_AuthorizeDevice_Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.token != null && message.hasOwnProperty("token")) {
                var error = $root.CEmbeddedClient_Token.verify(message.token);
                if (error)
                    return "token." + error;
            }
            return null;
        };
    
        /**
         * Creates a CEmbeddedClient_AuthorizeDevice_Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CEmbeddedClient_AuthorizeDevice_Response} CEmbeddedClient_AuthorizeDevice_Response
         */
        CEmbeddedClient_AuthorizeDevice_Response.fromObject = function fromObject(object) {
            if (object instanceof $root.CEmbeddedClient_AuthorizeDevice_Response)
                return object;
            var message = new $root.CEmbeddedClient_AuthorizeDevice_Response();
            if (object.result != null)
                message.result = object.result >>> 0;
            if (object.token != null) {
                if (typeof object.token !== "object")
                    throw TypeError(".CEmbeddedClient_AuthorizeDevice_Response.token: object expected");
                message.token = $root.CEmbeddedClient_Token.fromObject(object.token);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CEmbeddedClient_AuthorizeDevice_Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @static
         * @param {CEmbeddedClient_AuthorizeDevice_Response} message CEmbeddedClient_AuthorizeDevice_Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CEmbeddedClient_AuthorizeDevice_Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.token = null;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = $root.CEmbeddedClient_Token.toObject(message.token, options);
            return object;
        };
    
        /**
         * Converts this CEmbeddedClient_AuthorizeDevice_Response to JSON.
         * @function toJSON
         * @memberof CEmbeddedClient_AuthorizeDevice_Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CEmbeddedClient_AuthorizeDevice_Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CEmbeddedClient_AuthorizeDevice_Response;
    })();
    
    $root.UserAccount = (function() {
    
        /**
         * Constructs a new UserAccount service.
         * @exports UserAccount
         * @classdesc Represents a UserAccount
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UserAccount(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (UserAccount.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserAccount;
    
        /**
         * Creates new UserAccount service using the specified rpc implementation.
         * @function create
         * @memberof UserAccount
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UserAccount} RPC service. Useful where requests and/or responses are streamed.
         */
        UserAccount.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link UserAccount#getAccountLinkStatus}.
         * @memberof UserAccount
         * @typedef GetAccountLinkStatusCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CUserAccount_GetAccountLinkStatus_Response} [response] CUserAccount_GetAccountLinkStatus_Response
         */
    
        /**
         * Calls GetAccountLinkStatus.
         * @function getAccountLinkStatus
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_GetAccountLinkStatus_Request} request CUserAccount_GetAccountLinkStatus_Request message or plain object
         * @param {UserAccount.GetAccountLinkStatusCallback} callback Node-style callback called with the error, if any, and CUserAccount_GetAccountLinkStatus_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserAccount.prototype.getAccountLinkStatus = function getAccountLinkStatus(request, callback) {
            return this.rpcCall(getAccountLinkStatus, $root.CUserAccount_GetAccountLinkStatus_Request, $root.CUserAccount_GetAccountLinkStatus_Response, request, callback);
        }, "name", { value: "GetAccountLinkStatus" });
    
        /**
         * Calls GetAccountLinkStatus.
         * @function getAccountLinkStatus
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_GetAccountLinkStatus_Request} request CUserAccount_GetAccountLinkStatus_Request message or plain object
         * @returns {Promise<CUserAccount_GetAccountLinkStatus_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link UserAccount#createFriendInviteToken}.
         * @memberof UserAccount
         * @typedef CreateFriendInviteTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CUserAccount_CreateFriendInviteToken_Response} [response] CUserAccount_CreateFriendInviteToken_Response
         */
    
        /**
         * Calls CreateFriendInviteToken.
         * @function createFriendInviteToken
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_CreateFriendInviteToken_Request} request CUserAccount_CreateFriendInviteToken_Request message or plain object
         * @param {UserAccount.CreateFriendInviteTokenCallback} callback Node-style callback called with the error, if any, and CUserAccount_CreateFriendInviteToken_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserAccount.prototype.createFriendInviteToken = function createFriendInviteToken(request, callback) {
            return this.rpcCall(createFriendInviteToken, $root.CUserAccount_CreateFriendInviteToken_Request, $root.CUserAccount_CreateFriendInviteToken_Response, request, callback);
        }, "name", { value: "CreateFriendInviteToken" });
    
        /**
         * Calls CreateFriendInviteToken.
         * @function createFriendInviteToken
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_CreateFriendInviteToken_Request} request CUserAccount_CreateFriendInviteToken_Request message or plain object
         * @returns {Promise<CUserAccount_CreateFriendInviteToken_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link UserAccount#getFriendInviteTokens}.
         * @memberof UserAccount
         * @typedef GetFriendInviteTokensCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CUserAccount_GetFriendInviteTokens_Response} [response] CUserAccount_GetFriendInviteTokens_Response
         */
    
        /**
         * Calls GetFriendInviteTokens.
         * @function getFriendInviteTokens
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_GetFriendInviteTokens_Request} request CUserAccount_GetFriendInviteTokens_Request message or plain object
         * @param {UserAccount.GetFriendInviteTokensCallback} callback Node-style callback called with the error, if any, and CUserAccount_GetFriendInviteTokens_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserAccount.prototype.getFriendInviteTokens = function getFriendInviteTokens(request, callback) {
            return this.rpcCall(getFriendInviteTokens, $root.CUserAccount_GetFriendInviteTokens_Request, $root.CUserAccount_GetFriendInviteTokens_Response, request, callback);
        }, "name", { value: "GetFriendInviteTokens" });
    
        /**
         * Calls GetFriendInviteTokens.
         * @function getFriendInviteTokens
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_GetFriendInviteTokens_Request} request CUserAccount_GetFriendInviteTokens_Request message or plain object
         * @returns {Promise<CUserAccount_GetFriendInviteTokens_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link UserAccount#viewFriendInviteToken}.
         * @memberof UserAccount
         * @typedef ViewFriendInviteTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CUserAccount_ViewFriendInviteToken_Response} [response] CUserAccount_ViewFriendInviteToken_Response
         */
    
        /**
         * Calls ViewFriendInviteToken.
         * @function viewFriendInviteToken
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_ViewFriendInviteToken_Request} request CUserAccount_ViewFriendInviteToken_Request message or plain object
         * @param {UserAccount.ViewFriendInviteTokenCallback} callback Node-style callback called with the error, if any, and CUserAccount_ViewFriendInviteToken_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserAccount.prototype.viewFriendInviteToken = function viewFriendInviteToken(request, callback) {
            return this.rpcCall(viewFriendInviteToken, $root.CUserAccount_ViewFriendInviteToken_Request, $root.CUserAccount_ViewFriendInviteToken_Response, request, callback);
        }, "name", { value: "ViewFriendInviteToken" });
    
        /**
         * Calls ViewFriendInviteToken.
         * @function viewFriendInviteToken
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_ViewFriendInviteToken_Request} request CUserAccount_ViewFriendInviteToken_Request message or plain object
         * @returns {Promise<CUserAccount_ViewFriendInviteToken_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link UserAccount#redeemFriendInviteToken}.
         * @memberof UserAccount
         * @typedef RedeemFriendInviteTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CUserAccount_RedeemFriendInviteToken_Response} [response] CUserAccount_RedeemFriendInviteToken_Response
         */
    
        /**
         * Calls RedeemFriendInviteToken.
         * @function redeemFriendInviteToken
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_RedeemFriendInviteToken_Request} request CUserAccount_RedeemFriendInviteToken_Request message or plain object
         * @param {UserAccount.RedeemFriendInviteTokenCallback} callback Node-style callback called with the error, if any, and CUserAccount_RedeemFriendInviteToken_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserAccount.prototype.redeemFriendInviteToken = function redeemFriendInviteToken(request, callback) {
            return this.rpcCall(redeemFriendInviteToken, $root.CUserAccount_RedeemFriendInviteToken_Request, $root.CUserAccount_RedeemFriendInviteToken_Response, request, callback);
        }, "name", { value: "RedeemFriendInviteToken" });
    
        /**
         * Calls RedeemFriendInviteToken.
         * @function redeemFriendInviteToken
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_RedeemFriendInviteToken_Request} request CUserAccount_RedeemFriendInviteToken_Request message or plain object
         * @returns {Promise<CUserAccount_RedeemFriendInviteToken_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link UserAccount#revokeFriendInviteToken}.
         * @memberof UserAccount
         * @typedef RevokeFriendInviteTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CUserAccount_RevokeFriendInviteToken_Response} [response] CUserAccount_RevokeFriendInviteToken_Response
         */
    
        /**
         * Calls RevokeFriendInviteToken.
         * @function revokeFriendInviteToken
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_RevokeFriendInviteToken_Request} request CUserAccount_RevokeFriendInviteToken_Request message or plain object
         * @param {UserAccount.RevokeFriendInviteTokenCallback} callback Node-style callback called with the error, if any, and CUserAccount_RevokeFriendInviteToken_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserAccount.prototype.revokeFriendInviteToken = function revokeFriendInviteToken(request, callback) {
            return this.rpcCall(revokeFriendInviteToken, $root.CUserAccount_RevokeFriendInviteToken_Request, $root.CUserAccount_RevokeFriendInviteToken_Response, request, callback);
        }, "name", { value: "RevokeFriendInviteToken" });
    
        /**
         * Calls RevokeFriendInviteToken.
         * @function revokeFriendInviteToken
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_RevokeFriendInviteToken_Request} request CUserAccount_RevokeFriendInviteToken_Request message or plain object
         * @returns {Promise<CUserAccount_RevokeFriendInviteToken_Response>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link UserAccount#registerCompatTool}.
         * @memberof UserAccount
         * @typedef RegisterCompatToolCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CUserAccount_RegisterCompatTool_Response} [response] CUserAccount_RegisterCompatTool_Response
         */
    
        /**
         * Calls RegisterCompatTool.
         * @function registerCompatTool
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_RegisterCompatTool_Request} request CUserAccount_RegisterCompatTool_Request message or plain object
         * @param {UserAccount.RegisterCompatToolCallback} callback Node-style callback called with the error, if any, and CUserAccount_RegisterCompatTool_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserAccount.prototype.registerCompatTool = function registerCompatTool(request, callback) {
            return this.rpcCall(registerCompatTool, $root.CUserAccount_RegisterCompatTool_Request, $root.CUserAccount_RegisterCompatTool_Response, request, callback);
        }, "name", { value: "RegisterCompatTool" });
    
        /**
         * Calls RegisterCompatTool.
         * @function registerCompatTool
         * @memberof UserAccount
         * @instance
         * @param {ICUserAccount_RegisterCompatTool_Request} request CUserAccount_RegisterCompatTool_Request message or plain object
         * @returns {Promise<CUserAccount_RegisterCompatTool_Response>} Promise
         * @variation 2
         */
    
        return UserAccount;
    })();
    
    $root.AccountLinking = (function() {
    
        /**
         * Constructs a new AccountLinking service.
         * @exports AccountLinking
         * @classdesc Represents an AccountLinking
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AccountLinking(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (AccountLinking.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccountLinking;
    
        /**
         * Creates new AccountLinking service using the specified rpc implementation.
         * @function create
         * @memberof AccountLinking
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AccountLinking} RPC service. Useful where requests and/or responses are streamed.
         */
        AccountLinking.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link AccountLinking#getLinkedAccountInfo}.
         * @memberof AccountLinking
         * @typedef GetLinkedAccountInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CAccountLinking_GetLinkedAccountInfo_Response} [response] CAccountLinking_GetLinkedAccountInfo_Response
         */
    
        /**
         * Calls GetLinkedAccountInfo.
         * @function getLinkedAccountInfo
         * @memberof AccountLinking
         * @instance
         * @param {ICAccountLinking_GetLinkedAccountInfo_Request} request CAccountLinking_GetLinkedAccountInfo_Request message or plain object
         * @param {AccountLinking.GetLinkedAccountInfoCallback} callback Node-style callback called with the error, if any, and CAccountLinking_GetLinkedAccountInfo_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountLinking.prototype.getLinkedAccountInfo = function getLinkedAccountInfo(request, callback) {
            return this.rpcCall(getLinkedAccountInfo, $root.CAccountLinking_GetLinkedAccountInfo_Request, $root.CAccountLinking_GetLinkedAccountInfo_Response, request, callback);
        }, "name", { value: "GetLinkedAccountInfo" });
    
        /**
         * Calls GetLinkedAccountInfo.
         * @function getLinkedAccountInfo
         * @memberof AccountLinking
         * @instance
         * @param {ICAccountLinking_GetLinkedAccountInfo_Request} request CAccountLinking_GetLinkedAccountInfo_Request message or plain object
         * @returns {Promise<CAccountLinking_GetLinkedAccountInfo_Response>} Promise
         * @variation 2
         */
    
        return AccountLinking;
    })();
    
    $root.EmbeddedClient = (function() {
    
        /**
         * Constructs a new EmbeddedClient service.
         * @exports EmbeddedClient
         * @classdesc Represents an EmbeddedClient
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function EmbeddedClient(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (EmbeddedClient.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EmbeddedClient;
    
        /**
         * Creates new EmbeddedClient service using the specified rpc implementation.
         * @function create
         * @memberof EmbeddedClient
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {EmbeddedClient} RPC service. Useful where requests and/or responses are streamed.
         */
        EmbeddedClient.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link EmbeddedClient#authorizeCurrentDevice}.
         * @memberof EmbeddedClient
         * @typedef AuthorizeCurrentDeviceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CEmbeddedClient_AuthorizeDevice_Response} [response] CEmbeddedClient_AuthorizeDevice_Response
         */
    
        /**
         * Calls AuthorizeCurrentDevice.
         * @function authorizeCurrentDevice
         * @memberof EmbeddedClient
         * @instance
         * @param {ICEmbeddedClient_AuthorizeCurrentDevice_Request} request CEmbeddedClient_AuthorizeCurrentDevice_Request message or plain object
         * @param {EmbeddedClient.AuthorizeCurrentDeviceCallback} callback Node-style callback called with the error, if any, and CEmbeddedClient_AuthorizeDevice_Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EmbeddedClient.prototype.authorizeCurrentDevice = function authorizeCurrentDevice(request, callback) {
            return this.rpcCall(authorizeCurrentDevice, $root.CEmbeddedClient_AuthorizeCurrentDevice_Request, $root.CEmbeddedClient_AuthorizeDevice_Response, request, callback);
        }, "name", { value: "AuthorizeCurrentDevice" });
    
        /**
         * Calls AuthorizeCurrentDevice.
         * @function authorizeCurrentDevice
         * @memberof EmbeddedClient
         * @instance
         * @param {ICEmbeddedClient_AuthorizeCurrentDevice_Request} request CEmbeddedClient_AuthorizeCurrentDevice_Request message or plain object
         * @returns {Promise<CEmbeddedClient_AuthorizeDevice_Response>} Promise
         * @variation 2
         */
    
        return EmbeddedClient;
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
