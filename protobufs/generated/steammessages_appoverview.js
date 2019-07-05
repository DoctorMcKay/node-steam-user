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
     * EDisplayStatus enum.
     * @exports EDisplayStatus
     * @enum {string}
     * @property {number} k_EDisplayStatusInvalid=0 k_EDisplayStatusInvalid value
     * @property {number} k_EDisplayStatusLaunching=1 k_EDisplayStatusLaunching value
     * @property {number} k_EDisplayStatusUninstalling=2 k_EDisplayStatusUninstalling value
     * @property {number} k_EDisplayStatusInstalling=3 k_EDisplayStatusInstalling value
     * @property {number} k_EDisplayStatusRunning=4 k_EDisplayStatusRunning value
     * @property {number} k_EDisplayStatusValidating=5 k_EDisplayStatusValidating value
     * @property {number} k_EDisplayStatusUpdating=6 k_EDisplayStatusUpdating value
     * @property {number} k_EDisplayStatusDownloading=7 k_EDisplayStatusDownloading value
     * @property {number} k_EDisplayStatusSynchronizing=8 k_EDisplayStatusSynchronizing value
     * @property {number} k_EDisplayStatusReadyToInstall=9 k_EDisplayStatusReadyToInstall value
     * @property {number} k_EDisplayStatusReadyToPreload=10 k_EDisplayStatusReadyToPreload value
     * @property {number} k_EDisplayStatusReadyToLaunch=11 k_EDisplayStatusReadyToLaunch value
     * @property {number} k_EDisplayStatusRegionRestricted=12 k_EDisplayStatusRegionRestricted value
     * @property {number} k_EDisplayStatusPresaleOnly=13 k_EDisplayStatusPresaleOnly value
     * @property {number} k_EDisplayStatusInvalidPlatform=14 k_EDisplayStatusInvalidPlatform value
     * @property {number} k_EDisplayStatusParentalBlocked=15 k_EDisplayStatusParentalBlocked value
     * @property {number} k_EDisplayStatusPreloadOnly=16 k_EDisplayStatusPreloadOnly value
     * @property {number} k_EDisplayStatusBorrowerLocked=17 k_EDisplayStatusBorrowerLocked value
     * @property {number} k_EDisplayStatusUpdatePaused=18 k_EDisplayStatusUpdatePaused value
     * @property {number} k_EDisplayStatusUpdateQueued=19 k_EDisplayStatusUpdateQueued value
     * @property {number} k_EDisplayStatusUpdateRequired=20 k_EDisplayStatusUpdateRequired value
     * @property {number} k_EDisplayStatusUpdateDisabled=21 k_EDisplayStatusUpdateDisabled value
     * @property {number} k_EDisplayStatusDownloadPaused=22 k_EDisplayStatusDownloadPaused value
     * @property {number} k_EDisplayStatusDownloadQueued=23 k_EDisplayStatusDownloadQueued value
     * @property {number} k_EDisplayStatusDownloadRequired=24 k_EDisplayStatusDownloadRequired value
     * @property {number} k_EDisplayStatusDownloadDisabled=25 k_EDisplayStatusDownloadDisabled value
     * @property {number} k_EDisplayStatusLicensePending=26 k_EDisplayStatusLicensePending value
     * @property {number} k_EDisplayStatusLicenseExpired=27 k_EDisplayStatusLicenseExpired value
     * @property {number} k_EDisplayStatusAvailForFree=28 k_EDisplayStatusAvailForFree value
     * @property {number} k_EDisplayStatusAvailToBorrow=29 k_EDisplayStatusAvailToBorrow value
     * @property {number} k_EDisplayStatusAvailGuestPass=30 k_EDisplayStatusAvailGuestPass value
     * @property {number} k_EDisplayStatusPurchase=31 k_EDisplayStatusPurchase value
     */
    $root.EDisplayStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EDisplayStatusInvalid"] = 0;
        values[valuesById[1] = "k_EDisplayStatusLaunching"] = 1;
        values[valuesById[2] = "k_EDisplayStatusUninstalling"] = 2;
        values[valuesById[3] = "k_EDisplayStatusInstalling"] = 3;
        values[valuesById[4] = "k_EDisplayStatusRunning"] = 4;
        values[valuesById[5] = "k_EDisplayStatusValidating"] = 5;
        values[valuesById[6] = "k_EDisplayStatusUpdating"] = 6;
        values[valuesById[7] = "k_EDisplayStatusDownloading"] = 7;
        values[valuesById[8] = "k_EDisplayStatusSynchronizing"] = 8;
        values[valuesById[9] = "k_EDisplayStatusReadyToInstall"] = 9;
        values[valuesById[10] = "k_EDisplayStatusReadyToPreload"] = 10;
        values[valuesById[11] = "k_EDisplayStatusReadyToLaunch"] = 11;
        values[valuesById[12] = "k_EDisplayStatusRegionRestricted"] = 12;
        values[valuesById[13] = "k_EDisplayStatusPresaleOnly"] = 13;
        values[valuesById[14] = "k_EDisplayStatusInvalidPlatform"] = 14;
        values[valuesById[15] = "k_EDisplayStatusParentalBlocked"] = 15;
        values[valuesById[16] = "k_EDisplayStatusPreloadOnly"] = 16;
        values[valuesById[17] = "k_EDisplayStatusBorrowerLocked"] = 17;
        values[valuesById[18] = "k_EDisplayStatusUpdatePaused"] = 18;
        values[valuesById[19] = "k_EDisplayStatusUpdateQueued"] = 19;
        values[valuesById[20] = "k_EDisplayStatusUpdateRequired"] = 20;
        values[valuesById[21] = "k_EDisplayStatusUpdateDisabled"] = 21;
        values[valuesById[22] = "k_EDisplayStatusDownloadPaused"] = 22;
        values[valuesById[23] = "k_EDisplayStatusDownloadQueued"] = 23;
        values[valuesById[24] = "k_EDisplayStatusDownloadRequired"] = 24;
        values[valuesById[25] = "k_EDisplayStatusDownloadDisabled"] = 25;
        values[valuesById[26] = "k_EDisplayStatusLicensePending"] = 26;
        values[valuesById[27] = "k_EDisplayStatusLicenseExpired"] = 27;
        values[valuesById[28] = "k_EDisplayStatusAvailForFree"] = 28;
        values[valuesById[29] = "k_EDisplayStatusAvailToBorrow"] = 29;
        values[valuesById[30] = "k_EDisplayStatusAvailGuestPass"] = 30;
        values[valuesById[31] = "k_EDisplayStatusPurchase"] = 31;
        return values;
    })();
    
    /**
     * EProtoAppType enum.
     * @exports EProtoAppType
     * @enum {string}
     * @property {number} k_EAppTypeInvalid=0 k_EAppTypeInvalid value
     * @property {number} k_EAppTypeGame=1 k_EAppTypeGame value
     * @property {number} k_EAppTypeApplication=2 k_EAppTypeApplication value
     * @property {number} k_EAppTypeTool=4 k_EAppTypeTool value
     * @property {number} k_EAppTypeDemo=8 k_EAppTypeDemo value
     * @property {number} k_EAppTypeDeprected=16 k_EAppTypeDeprected value
     * @property {number} k_EAppTypeDLC=32 k_EAppTypeDLC value
     * @property {number} k_EAppTypeGuide=64 k_EAppTypeGuide value
     * @property {number} k_EAppTypeDriver=128 k_EAppTypeDriver value
     * @property {number} k_EAppTypeConfig=256 k_EAppTypeConfig value
     * @property {number} k_EAppTypeHardware=512 k_EAppTypeHardware value
     * @property {number} k_EAppTypeFranchise=1024 k_EAppTypeFranchise value
     * @property {number} k_EAppTypeVideo=2048 k_EAppTypeVideo value
     * @property {number} k_EAppTypePlugin=4096 k_EAppTypePlugin value
     * @property {number} k_EAppTypeMusic=8192 k_EAppTypeMusic value
     * @property {number} k_EAppTypeSeries=16384 k_EAppTypeSeries value
     * @property {number} k_EAppTypeComic=32768 k_EAppTypeComic value
     * @property {number} k_EAppTypeBeta=65536 k_EAppTypeBeta value
     * @property {number} k_EAppTypeShortcut=1073741824 k_EAppTypeShortcut value
     * @property {number} k_EAppTypeDepotOnly=-2147483648 k_EAppTypeDepotOnly value
     */
    $root.EProtoAppType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EAppTypeInvalid"] = 0;
        values[valuesById[1] = "k_EAppTypeGame"] = 1;
        values[valuesById[2] = "k_EAppTypeApplication"] = 2;
        values[valuesById[4] = "k_EAppTypeTool"] = 4;
        values[valuesById[8] = "k_EAppTypeDemo"] = 8;
        values[valuesById[16] = "k_EAppTypeDeprected"] = 16;
        values[valuesById[32] = "k_EAppTypeDLC"] = 32;
        values[valuesById[64] = "k_EAppTypeGuide"] = 64;
        values[valuesById[128] = "k_EAppTypeDriver"] = 128;
        values[valuesById[256] = "k_EAppTypeConfig"] = 256;
        values[valuesById[512] = "k_EAppTypeHardware"] = 512;
        values[valuesById[1024] = "k_EAppTypeFranchise"] = 1024;
        values[valuesById[2048] = "k_EAppTypeVideo"] = 2048;
        values[valuesById[4096] = "k_EAppTypePlugin"] = 4096;
        values[valuesById[8192] = "k_EAppTypeMusic"] = 8192;
        values[valuesById[16384] = "k_EAppTypeSeries"] = 16384;
        values[valuesById[32768] = "k_EAppTypeComic"] = 32768;
        values[valuesById[65536] = "k_EAppTypeBeta"] = 65536;
        values[valuesById[1073741824] = "k_EAppTypeShortcut"] = 1073741824;
        values[valuesById[-2147483648] = "k_EAppTypeDepotOnly"] = -2147483648;
        return values;
    })();
    
    /**
     * EAppAssociationType enum.
     * @exports EAppAssociationType
     * @enum {string}
     * @property {number} k_EAppAssociationTypeInvalid=0 k_EAppAssociationTypeInvalid value
     * @property {number} k_EAppAssociationTypePublisher=1 k_EAppAssociationTypePublisher value
     * @property {number} k_EAppAssociationTypeDeveloper=2 k_EAppAssociationTypeDeveloper value
     * @property {number} k_EAppAssociationTypeFranchise=3 k_EAppAssociationTypeFranchise value
     */
    $root.EAppAssociationType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EAppAssociationTypeInvalid"] = 0;
        values[valuesById[1] = "k_EAppAssociationTypePublisher"] = 1;
        values[valuesById[2] = "k_EAppAssociationTypeDeveloper"] = 2;
        values[valuesById[3] = "k_EAppAssociationTypeFranchise"] = 3;
        return values;
    })();
    
    /**
     * EAppControllerSupportLevel enum.
     * @exports EAppControllerSupportLevel
     * @enum {string}
     * @property {number} k_EAppControllerSupportLevelNone=0 k_EAppControllerSupportLevelNone value
     * @property {number} k_EAppControllerSupportLevelPartial=1 k_EAppControllerSupportLevelPartial value
     * @property {number} k_EAppControllerSupportLevelFull=2 k_EAppControllerSupportLevelFull value
     */
    $root.EAppControllerSupportLevel = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "k_EAppControllerSupportLevelNone"] = 0;
        values[valuesById[1] = "k_EAppControllerSupportLevelPartial"] = 1;
        values[valuesById[2] = "k_EAppControllerSupportLevelFull"] = 2;
        return values;
    })();
    
    $root.CAppOverview_AppAssociation = (function() {
    
        /**
         * Properties of a CAppOverview_AppAssociation.
         * @exports ICAppOverview_AppAssociation
         * @interface ICAppOverview_AppAssociation
         * @property {EAppAssociationType|null} [type] CAppOverview_AppAssociation type
         * @property {string|null} [name] CAppOverview_AppAssociation name
         */
    
        /**
         * Constructs a new CAppOverview_AppAssociation.
         * @exports CAppOverview_AppAssociation
         * @classdesc Represents a CAppOverview_AppAssociation.
         * @implements ICAppOverview_AppAssociation
         * @constructor
         * @param {ICAppOverview_AppAssociation=} [properties] Properties to set
         */
        function CAppOverview_AppAssociation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAppOverview_AppAssociation type.
         * @member {EAppAssociationType} type
         * @memberof CAppOverview_AppAssociation
         * @instance
         */
        CAppOverview_AppAssociation.prototype.type = 0;
    
        /**
         * CAppOverview_AppAssociation name.
         * @member {string} name
         * @memberof CAppOverview_AppAssociation
         * @instance
         */
        CAppOverview_AppAssociation.prototype.name = "";
    
        /**
         * Creates a new CAppOverview_AppAssociation instance using the specified properties.
         * @function create
         * @memberof CAppOverview_AppAssociation
         * @static
         * @param {ICAppOverview_AppAssociation=} [properties] Properties to set
         * @returns {CAppOverview_AppAssociation} CAppOverview_AppAssociation instance
         */
        CAppOverview_AppAssociation.create = function create(properties) {
            return new CAppOverview_AppAssociation(properties);
        };
    
        /**
         * Encodes the specified CAppOverview_AppAssociation message. Does not implicitly {@link CAppOverview_AppAssociation.verify|verify} messages.
         * @function encode
         * @memberof CAppOverview_AppAssociation
         * @static
         * @param {ICAppOverview_AppAssociation} message CAppOverview_AppAssociation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_AppAssociation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };
    
        /**
         * Encodes the specified CAppOverview_AppAssociation message, length delimited. Does not implicitly {@link CAppOverview_AppAssociation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAppOverview_AppAssociation
         * @static
         * @param {ICAppOverview_AppAssociation} message CAppOverview_AppAssociation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_AppAssociation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAppOverview_AppAssociation message from the specified reader or buffer.
         * @function decode
         * @memberof CAppOverview_AppAssociation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAppOverview_AppAssociation} CAppOverview_AppAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_AppAssociation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAppOverview_AppAssociation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
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
         * Decodes a CAppOverview_AppAssociation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAppOverview_AppAssociation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAppOverview_AppAssociation} CAppOverview_AppAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_AppAssociation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAppOverview_AppAssociation message.
         * @function verify
         * @memberof CAppOverview_AppAssociation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAppOverview_AppAssociation.verify = function verify(message) {
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
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };
    
        /**
         * Creates a CAppOverview_AppAssociation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAppOverview_AppAssociation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAppOverview_AppAssociation} CAppOverview_AppAssociation
         */
        CAppOverview_AppAssociation.fromObject = function fromObject(object) {
            if (object instanceof $root.CAppOverview_AppAssociation)
                return object;
            var message = new $root.CAppOverview_AppAssociation();
            switch (object.type) {
            case "k_EAppAssociationTypeInvalid":
            case 0:
                message.type = 0;
                break;
            case "k_EAppAssociationTypePublisher":
            case 1:
                message.type = 1;
                break;
            case "k_EAppAssociationTypeDeveloper":
            case 2:
                message.type = 2;
                break;
            case "k_EAppAssociationTypeFranchise":
            case 3:
                message.type = 3;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };
    
        /**
         * Creates a plain object from a CAppOverview_AppAssociation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAppOverview_AppAssociation
         * @static
         * @param {CAppOverview_AppAssociation} message CAppOverview_AppAssociation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAppOverview_AppAssociation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "k_EAppAssociationTypeInvalid" : 0;
                object.name = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.EAppAssociationType[message.type] : message.type;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };
    
        /**
         * Converts this CAppOverview_AppAssociation to JSON.
         * @function toJSON
         * @memberof CAppOverview_AppAssociation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAppOverview_AppAssociation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAppOverview_AppAssociation;
    })();
    
    $root.CAppOverview_AppLanguageFeatures = (function() {
    
        /**
         * Properties of a CAppOverview_AppLanguageFeatures.
         * @exports ICAppOverview_AppLanguageFeatures
         * @interface ICAppOverview_AppLanguageFeatures
         * @property {string|null} [language] CAppOverview_AppLanguageFeatures language
         * @property {boolean|null} [supported] CAppOverview_AppLanguageFeatures supported
         * @property {boolean|null} [full_audio] CAppOverview_AppLanguageFeatures full_audio
         * @property {boolean|null} [subtitles] CAppOverview_AppLanguageFeatures subtitles
         */
    
        /**
         * Constructs a new CAppOverview_AppLanguageFeatures.
         * @exports CAppOverview_AppLanguageFeatures
         * @classdesc Represents a CAppOverview_AppLanguageFeatures.
         * @implements ICAppOverview_AppLanguageFeatures
         * @constructor
         * @param {ICAppOverview_AppLanguageFeatures=} [properties] Properties to set
         */
        function CAppOverview_AppLanguageFeatures(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAppOverview_AppLanguageFeatures language.
         * @member {string} language
         * @memberof CAppOverview_AppLanguageFeatures
         * @instance
         */
        CAppOverview_AppLanguageFeatures.prototype.language = "";
    
        /**
         * CAppOverview_AppLanguageFeatures supported.
         * @member {boolean} supported
         * @memberof CAppOverview_AppLanguageFeatures
         * @instance
         */
        CAppOverview_AppLanguageFeatures.prototype.supported = false;
    
        /**
         * CAppOverview_AppLanguageFeatures full_audio.
         * @member {boolean} full_audio
         * @memberof CAppOverview_AppLanguageFeatures
         * @instance
         */
        CAppOverview_AppLanguageFeatures.prototype.full_audio = false;
    
        /**
         * CAppOverview_AppLanguageFeatures subtitles.
         * @member {boolean} subtitles
         * @memberof CAppOverview_AppLanguageFeatures
         * @instance
         */
        CAppOverview_AppLanguageFeatures.prototype.subtitles = false;
    
        /**
         * Creates a new CAppOverview_AppLanguageFeatures instance using the specified properties.
         * @function create
         * @memberof CAppOverview_AppLanguageFeatures
         * @static
         * @param {ICAppOverview_AppLanguageFeatures=} [properties] Properties to set
         * @returns {CAppOverview_AppLanguageFeatures} CAppOverview_AppLanguageFeatures instance
         */
        CAppOverview_AppLanguageFeatures.create = function create(properties) {
            return new CAppOverview_AppLanguageFeatures(properties);
        };
    
        /**
         * Encodes the specified CAppOverview_AppLanguageFeatures message. Does not implicitly {@link CAppOverview_AppLanguageFeatures.verify|verify} messages.
         * @function encode
         * @memberof CAppOverview_AppLanguageFeatures
         * @static
         * @param {ICAppOverview_AppLanguageFeatures} message CAppOverview_AppLanguageFeatures message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_AppLanguageFeatures.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
            if (message.supported != null && message.hasOwnProperty("supported"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.supported);
            if (message.full_audio != null && message.hasOwnProperty("full_audio"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.full_audio);
            if (message.subtitles != null && message.hasOwnProperty("subtitles"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.subtitles);
            return writer;
        };
    
        /**
         * Encodes the specified CAppOverview_AppLanguageFeatures message, length delimited. Does not implicitly {@link CAppOverview_AppLanguageFeatures.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAppOverview_AppLanguageFeatures
         * @static
         * @param {ICAppOverview_AppLanguageFeatures} message CAppOverview_AppLanguageFeatures message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_AppLanguageFeatures.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAppOverview_AppLanguageFeatures message from the specified reader or buffer.
         * @function decode
         * @memberof CAppOverview_AppLanguageFeatures
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAppOverview_AppLanguageFeatures} CAppOverview_AppLanguageFeatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_AppLanguageFeatures.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAppOverview_AppLanguageFeatures();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.language = reader.string();
                    break;
                case 2:
                    message.supported = reader.bool();
                    break;
                case 3:
                    message.full_audio = reader.bool();
                    break;
                case 4:
                    message.subtitles = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAppOverview_AppLanguageFeatures message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAppOverview_AppLanguageFeatures
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAppOverview_AppLanguageFeatures} CAppOverview_AppLanguageFeatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_AppLanguageFeatures.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAppOverview_AppLanguageFeatures message.
         * @function verify
         * @memberof CAppOverview_AppLanguageFeatures
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAppOverview_AppLanguageFeatures.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.supported != null && message.hasOwnProperty("supported"))
                if (typeof message.supported !== "boolean")
                    return "supported: boolean expected";
            if (message.full_audio != null && message.hasOwnProperty("full_audio"))
                if (typeof message.full_audio !== "boolean")
                    return "full_audio: boolean expected";
            if (message.subtitles != null && message.hasOwnProperty("subtitles"))
                if (typeof message.subtitles !== "boolean")
                    return "subtitles: boolean expected";
            return null;
        };
    
        /**
         * Creates a CAppOverview_AppLanguageFeatures message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAppOverview_AppLanguageFeatures
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAppOverview_AppLanguageFeatures} CAppOverview_AppLanguageFeatures
         */
        CAppOverview_AppLanguageFeatures.fromObject = function fromObject(object) {
            if (object instanceof $root.CAppOverview_AppLanguageFeatures)
                return object;
            var message = new $root.CAppOverview_AppLanguageFeatures();
            if (object.language != null)
                message.language = String(object.language);
            if (object.supported != null)
                message.supported = Boolean(object.supported);
            if (object.full_audio != null)
                message.full_audio = Boolean(object.full_audio);
            if (object.subtitles != null)
                message.subtitles = Boolean(object.subtitles);
            return message;
        };
    
        /**
         * Creates a plain object from a CAppOverview_AppLanguageFeatures message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAppOverview_AppLanguageFeatures
         * @static
         * @param {CAppOverview_AppLanguageFeatures} message CAppOverview_AppLanguageFeatures
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAppOverview_AppLanguageFeatures.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.language = "";
                object.supported = false;
                object.full_audio = false;
                object.subtitles = false;
            }
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.supported != null && message.hasOwnProperty("supported"))
                object.supported = message.supported;
            if (message.full_audio != null && message.hasOwnProperty("full_audio"))
                object.full_audio = message.full_audio;
            if (message.subtitles != null && message.hasOwnProperty("subtitles"))
                object.subtitles = message.subtitles;
            return object;
        };
    
        /**
         * Converts this CAppOverview_AppLanguageFeatures to JSON.
         * @function toJSON
         * @memberof CAppOverview_AppLanguageFeatures
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAppOverview_AppLanguageFeatures.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAppOverview_AppLanguageFeatures;
    })();
    
    $root.CAppOverview_PlayAreaDimensions = (function() {
    
        /**
         * Properties of a CAppOverview_PlayAreaDimensions.
         * @exports ICAppOverview_PlayAreaDimensions
         * @interface ICAppOverview_PlayAreaDimensions
         * @property {number|null} [width] CAppOverview_PlayAreaDimensions width
         * @property {number|null} [height] CAppOverview_PlayAreaDimensions height
         */
    
        /**
         * Constructs a new CAppOverview_PlayAreaDimensions.
         * @exports CAppOverview_PlayAreaDimensions
         * @classdesc Represents a CAppOverview_PlayAreaDimensions.
         * @implements ICAppOverview_PlayAreaDimensions
         * @constructor
         * @param {ICAppOverview_PlayAreaDimensions=} [properties] Properties to set
         */
        function CAppOverview_PlayAreaDimensions(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAppOverview_PlayAreaDimensions width.
         * @member {number} width
         * @memberof CAppOverview_PlayAreaDimensions
         * @instance
         */
        CAppOverview_PlayAreaDimensions.prototype.width = 0;
    
        /**
         * CAppOverview_PlayAreaDimensions height.
         * @member {number} height
         * @memberof CAppOverview_PlayAreaDimensions
         * @instance
         */
        CAppOverview_PlayAreaDimensions.prototype.height = 0;
    
        /**
         * Creates a new CAppOverview_PlayAreaDimensions instance using the specified properties.
         * @function create
         * @memberof CAppOverview_PlayAreaDimensions
         * @static
         * @param {ICAppOverview_PlayAreaDimensions=} [properties] Properties to set
         * @returns {CAppOverview_PlayAreaDimensions} CAppOverview_PlayAreaDimensions instance
         */
        CAppOverview_PlayAreaDimensions.create = function create(properties) {
            return new CAppOverview_PlayAreaDimensions(properties);
        };
    
        /**
         * Encodes the specified CAppOverview_PlayAreaDimensions message. Does not implicitly {@link CAppOverview_PlayAreaDimensions.verify|verify} messages.
         * @function encode
         * @memberof CAppOverview_PlayAreaDimensions
         * @static
         * @param {ICAppOverview_PlayAreaDimensions} message CAppOverview_PlayAreaDimensions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_PlayAreaDimensions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.height);
            return writer;
        };
    
        /**
         * Encodes the specified CAppOverview_PlayAreaDimensions message, length delimited. Does not implicitly {@link CAppOverview_PlayAreaDimensions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAppOverview_PlayAreaDimensions
         * @static
         * @param {ICAppOverview_PlayAreaDimensions} message CAppOverview_PlayAreaDimensions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_PlayAreaDimensions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAppOverview_PlayAreaDimensions message from the specified reader or buffer.
         * @function decode
         * @memberof CAppOverview_PlayAreaDimensions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAppOverview_PlayAreaDimensions} CAppOverview_PlayAreaDimensions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_PlayAreaDimensions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAppOverview_PlayAreaDimensions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.width = reader.float();
                    break;
                case 2:
                    message.height = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAppOverview_PlayAreaDimensions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAppOverview_PlayAreaDimensions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAppOverview_PlayAreaDimensions} CAppOverview_PlayAreaDimensions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_PlayAreaDimensions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAppOverview_PlayAreaDimensions message.
         * @function verify
         * @memberof CAppOverview_PlayAreaDimensions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAppOverview_PlayAreaDimensions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (typeof message.width !== "number")
                    return "width: number expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height !== "number")
                    return "height: number expected";
            return null;
        };
    
        /**
         * Creates a CAppOverview_PlayAreaDimensions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAppOverview_PlayAreaDimensions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAppOverview_PlayAreaDimensions} CAppOverview_PlayAreaDimensions
         */
        CAppOverview_PlayAreaDimensions.fromObject = function fromObject(object) {
            if (object instanceof $root.CAppOverview_PlayAreaDimensions)
                return object;
            var message = new $root.CAppOverview_PlayAreaDimensions();
            if (object.width != null)
                message.width = Number(object.width);
            if (object.height != null)
                message.height = Number(object.height);
            return message;
        };
    
        /**
         * Creates a plain object from a CAppOverview_PlayAreaDimensions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAppOverview_PlayAreaDimensions
         * @static
         * @param {CAppOverview_PlayAreaDimensions} message CAppOverview_PlayAreaDimensions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAppOverview_PlayAreaDimensions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
            return object;
        };
    
        /**
         * Converts this CAppOverview_PlayAreaDimensions to JSON.
         * @function toJSON
         * @memberof CAppOverview_PlayAreaDimensions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAppOverview_PlayAreaDimensions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAppOverview_PlayAreaDimensions;
    })();
    
    $root.CAppOverview_PerClientData = (function() {
    
        /**
         * Properties of a CAppOverview_PerClientData.
         * @exports ICAppOverview_PerClientData
         * @interface ICAppOverview_PerClientData
         * @property {number|Long|null} [clientid] CAppOverview_PerClientData clientid
         * @property {string|null} [client_name] CAppOverview_PerClientData client_name
         * @property {EDisplayStatus|null} [display_status] CAppOverview_PerClientData display_status
         * @property {number|null} [status_percentage] CAppOverview_PerClientData status_percentage
         * @property {string|null} [active_beta] CAppOverview_PerClientData active_beta
         * @property {boolean|null} [installed] CAppOverview_PerClientData installed
         */
    
        /**
         * Constructs a new CAppOverview_PerClientData.
         * @exports CAppOverview_PerClientData
         * @classdesc Represents a CAppOverview_PerClientData.
         * @implements ICAppOverview_PerClientData
         * @constructor
         * @param {ICAppOverview_PerClientData=} [properties] Properties to set
         */
        function CAppOverview_PerClientData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAppOverview_PerClientData clientid.
         * @member {number|Long} clientid
         * @memberof CAppOverview_PerClientData
         * @instance
         */
        CAppOverview_PerClientData.prototype.clientid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAppOverview_PerClientData client_name.
         * @member {string} client_name
         * @memberof CAppOverview_PerClientData
         * @instance
         */
        CAppOverview_PerClientData.prototype.client_name = "";
    
        /**
         * CAppOverview_PerClientData display_status.
         * @member {EDisplayStatus} display_status
         * @memberof CAppOverview_PerClientData
         * @instance
         */
        CAppOverview_PerClientData.prototype.display_status = 0;
    
        /**
         * CAppOverview_PerClientData status_percentage.
         * @member {number} status_percentage
         * @memberof CAppOverview_PerClientData
         * @instance
         */
        CAppOverview_PerClientData.prototype.status_percentage = 0;
    
        /**
         * CAppOverview_PerClientData active_beta.
         * @member {string} active_beta
         * @memberof CAppOverview_PerClientData
         * @instance
         */
        CAppOverview_PerClientData.prototype.active_beta = "";
    
        /**
         * CAppOverview_PerClientData installed.
         * @member {boolean} installed
         * @memberof CAppOverview_PerClientData
         * @instance
         */
        CAppOverview_PerClientData.prototype.installed = false;
    
        /**
         * Creates a new CAppOverview_PerClientData instance using the specified properties.
         * @function create
         * @memberof CAppOverview_PerClientData
         * @static
         * @param {ICAppOverview_PerClientData=} [properties] Properties to set
         * @returns {CAppOverview_PerClientData} CAppOverview_PerClientData instance
         */
        CAppOverview_PerClientData.create = function create(properties) {
            return new CAppOverview_PerClientData(properties);
        };
    
        /**
         * Encodes the specified CAppOverview_PerClientData message. Does not implicitly {@link CAppOverview_PerClientData.verify|verify} messages.
         * @function encode
         * @memberof CAppOverview_PerClientData
         * @static
         * @param {ICAppOverview_PerClientData} message CAppOverview_PerClientData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_PerClientData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientid != null && message.hasOwnProperty("clientid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.clientid);
            if (message.client_name != null && message.hasOwnProperty("client_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.client_name);
            if (message.display_status != null && message.hasOwnProperty("display_status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.display_status);
            if (message.status_percentage != null && message.hasOwnProperty("status_percentage"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.status_percentage);
            if (message.active_beta != null && message.hasOwnProperty("active_beta"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.active_beta);
            if (message.installed != null && message.hasOwnProperty("installed"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.installed);
            return writer;
        };
    
        /**
         * Encodes the specified CAppOverview_PerClientData message, length delimited. Does not implicitly {@link CAppOverview_PerClientData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAppOverview_PerClientData
         * @static
         * @param {ICAppOverview_PerClientData} message CAppOverview_PerClientData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_PerClientData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAppOverview_PerClientData message from the specified reader or buffer.
         * @function decode
         * @memberof CAppOverview_PerClientData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAppOverview_PerClientData} CAppOverview_PerClientData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_PerClientData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAppOverview_PerClientData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientid = reader.uint64();
                    break;
                case 2:
                    message.client_name = reader.string();
                    break;
                case 3:
                    message.display_status = reader.int32();
                    break;
                case 4:
                    message.status_percentage = reader.uint32();
                    break;
                case 5:
                    message.active_beta = reader.string();
                    break;
                case 6:
                    message.installed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAppOverview_PerClientData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAppOverview_PerClientData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAppOverview_PerClientData} CAppOverview_PerClientData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_PerClientData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAppOverview_PerClientData message.
         * @function verify
         * @memberof CAppOverview_PerClientData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAppOverview_PerClientData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientid != null && message.hasOwnProperty("clientid"))
                if (!$util.isInteger(message.clientid) && !(message.clientid && $util.isInteger(message.clientid.low) && $util.isInteger(message.clientid.high)))
                    return "clientid: integer|Long expected";
            if (message.client_name != null && message.hasOwnProperty("client_name"))
                if (!$util.isString(message.client_name))
                    return "client_name: string expected";
            if (message.display_status != null && message.hasOwnProperty("display_status"))
                switch (message.display_status) {
                default:
                    return "display_status: enum value expected";
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
                case 30:
                case 31:
                    break;
                }
            if (message.status_percentage != null && message.hasOwnProperty("status_percentage"))
                if (!$util.isInteger(message.status_percentage))
                    return "status_percentage: integer expected";
            if (message.active_beta != null && message.hasOwnProperty("active_beta"))
                if (!$util.isString(message.active_beta))
                    return "active_beta: string expected";
            if (message.installed != null && message.hasOwnProperty("installed"))
                if (typeof message.installed !== "boolean")
                    return "installed: boolean expected";
            return null;
        };
    
        /**
         * Creates a CAppOverview_PerClientData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAppOverview_PerClientData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAppOverview_PerClientData} CAppOverview_PerClientData
         */
        CAppOverview_PerClientData.fromObject = function fromObject(object) {
            if (object instanceof $root.CAppOverview_PerClientData)
                return object;
            var message = new $root.CAppOverview_PerClientData();
            if (object.clientid != null)
                if ($util.Long)
                    (message.clientid = $util.Long.fromValue(object.clientid)).unsigned = true;
                else if (typeof object.clientid === "string")
                    message.clientid = parseInt(object.clientid, 10);
                else if (typeof object.clientid === "number")
                    message.clientid = object.clientid;
                else if (typeof object.clientid === "object")
                    message.clientid = new $util.LongBits(object.clientid.low >>> 0, object.clientid.high >>> 0).toNumber(true);
            if (object.client_name != null)
                message.client_name = String(object.client_name);
            switch (object.display_status) {
            case "k_EDisplayStatusInvalid":
            case 0:
                message.display_status = 0;
                break;
            case "k_EDisplayStatusLaunching":
            case 1:
                message.display_status = 1;
                break;
            case "k_EDisplayStatusUninstalling":
            case 2:
                message.display_status = 2;
                break;
            case "k_EDisplayStatusInstalling":
            case 3:
                message.display_status = 3;
                break;
            case "k_EDisplayStatusRunning":
            case 4:
                message.display_status = 4;
                break;
            case "k_EDisplayStatusValidating":
            case 5:
                message.display_status = 5;
                break;
            case "k_EDisplayStatusUpdating":
            case 6:
                message.display_status = 6;
                break;
            case "k_EDisplayStatusDownloading":
            case 7:
                message.display_status = 7;
                break;
            case "k_EDisplayStatusSynchronizing":
            case 8:
                message.display_status = 8;
                break;
            case "k_EDisplayStatusReadyToInstall":
            case 9:
                message.display_status = 9;
                break;
            case "k_EDisplayStatusReadyToPreload":
            case 10:
                message.display_status = 10;
                break;
            case "k_EDisplayStatusReadyToLaunch":
            case 11:
                message.display_status = 11;
                break;
            case "k_EDisplayStatusRegionRestricted":
            case 12:
                message.display_status = 12;
                break;
            case "k_EDisplayStatusPresaleOnly":
            case 13:
                message.display_status = 13;
                break;
            case "k_EDisplayStatusInvalidPlatform":
            case 14:
                message.display_status = 14;
                break;
            case "k_EDisplayStatusParentalBlocked":
            case 15:
                message.display_status = 15;
                break;
            case "k_EDisplayStatusPreloadOnly":
            case 16:
                message.display_status = 16;
                break;
            case "k_EDisplayStatusBorrowerLocked":
            case 17:
                message.display_status = 17;
                break;
            case "k_EDisplayStatusUpdatePaused":
            case 18:
                message.display_status = 18;
                break;
            case "k_EDisplayStatusUpdateQueued":
            case 19:
                message.display_status = 19;
                break;
            case "k_EDisplayStatusUpdateRequired":
            case 20:
                message.display_status = 20;
                break;
            case "k_EDisplayStatusUpdateDisabled":
            case 21:
                message.display_status = 21;
                break;
            case "k_EDisplayStatusDownloadPaused":
            case 22:
                message.display_status = 22;
                break;
            case "k_EDisplayStatusDownloadQueued":
            case 23:
                message.display_status = 23;
                break;
            case "k_EDisplayStatusDownloadRequired":
            case 24:
                message.display_status = 24;
                break;
            case "k_EDisplayStatusDownloadDisabled":
            case 25:
                message.display_status = 25;
                break;
            case "k_EDisplayStatusLicensePending":
            case 26:
                message.display_status = 26;
                break;
            case "k_EDisplayStatusLicenseExpired":
            case 27:
                message.display_status = 27;
                break;
            case "k_EDisplayStatusAvailForFree":
            case 28:
                message.display_status = 28;
                break;
            case "k_EDisplayStatusAvailToBorrow":
            case 29:
                message.display_status = 29;
                break;
            case "k_EDisplayStatusAvailGuestPass":
            case 30:
                message.display_status = 30;
                break;
            case "k_EDisplayStatusPurchase":
            case 31:
                message.display_status = 31;
                break;
            }
            if (object.status_percentage != null)
                message.status_percentage = object.status_percentage >>> 0;
            if (object.active_beta != null)
                message.active_beta = String(object.active_beta);
            if (object.installed != null)
                message.installed = Boolean(object.installed);
            return message;
        };
    
        /**
         * Creates a plain object from a CAppOverview_PerClientData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAppOverview_PerClientData
         * @static
         * @param {CAppOverview_PerClientData} message CAppOverview_PerClientData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAppOverview_PerClientData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientid = options.longs === String ? "0" : 0;
                object.client_name = "";
                object.display_status = options.enums === String ? "k_EDisplayStatusInvalid" : 0;
                object.status_percentage = 0;
                object.active_beta = "";
                object.installed = false;
            }
            if (message.clientid != null && message.hasOwnProperty("clientid"))
                if (typeof message.clientid === "number")
                    object.clientid = options.longs === String ? String(message.clientid) : message.clientid;
                else
                    object.clientid = options.longs === String ? $util.Long.prototype.toString.call(message.clientid) : options.longs === Number ? new $util.LongBits(message.clientid.low >>> 0, message.clientid.high >>> 0).toNumber(true) : message.clientid;
            if (message.client_name != null && message.hasOwnProperty("client_name"))
                object.client_name = message.client_name;
            if (message.display_status != null && message.hasOwnProperty("display_status"))
                object.display_status = options.enums === String ? $root.EDisplayStatus[message.display_status] : message.display_status;
            if (message.status_percentage != null && message.hasOwnProperty("status_percentage"))
                object.status_percentage = message.status_percentage;
            if (message.active_beta != null && message.hasOwnProperty("active_beta"))
                object.active_beta = message.active_beta;
            if (message.installed != null && message.hasOwnProperty("installed"))
                object.installed = message.installed;
            return object;
        };
    
        /**
         * Converts this CAppOverview_PerClientData to JSON.
         * @function toJSON
         * @memberof CAppOverview_PerClientData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAppOverview_PerClientData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAppOverview_PerClientData;
    })();
    
    $root.CAppOverview = (function() {
    
        /**
         * Properties of a CAppOverview.
         * @exports ICAppOverview
         * @interface ICAppOverview
         * @property {number|null} [appid] CAppOverview appid
         * @property {string|null} [display_name] CAppOverview display_name
         * @property {boolean|null} [visible_in_game_list] CAppOverview visible_in_game_list
         * @property {string|null} [sort_as] CAppOverview sort_as
         * @property {EProtoAppType|null} [app_type] CAppOverview app_type
         * @property {boolean|null} [subscribed] CAppOverview subscribed
         * @property {boolean|null} [favorite] CAppOverview favorite
         * @property {boolean|null} [hidden] CAppOverview hidden
         * @property {number|null} [mru_index] CAppOverview mru_index
         * @property {number|null} [rt_recent_activity_time] CAppOverview rt_recent_activity_time
         * @property {Array.<string>|null} [user_tag] CAppOverview user_tag
         * @property {number|null} [minutes_playtime_forever] CAppOverview minutes_playtime_forever
         * @property {number|null} [minutes_playtime_last_two_weeks] CAppOverview minutes_playtime_last_two_weeks
         * @property {number|null} [rt_last_time_played] CAppOverview rt_last_time_played
         * @property {Array.<number>|null} [store_tag] CAppOverview store_tag
         * @property {Array.<ICAppOverview_AppAssociation>|null} [association] CAppOverview association
         * @property {number|null} [primary_genre] CAppOverview primary_genre
         * @property {Array.<number>|null} [genre] CAppOverview genre
         * @property {Array.<number>|null} [store_category] CAppOverview store_category
         * @property {Array.<ICAppOverview_AppLanguageFeatures>|null} [language_feature] CAppOverview language_feature
         * @property {number|null} [rt_original_release_date] CAppOverview rt_original_release_date
         * @property {number|null} [rt_steam_release_date] CAppOverview rt_steam_release_date
         * @property {string|null} [icon_hash] CAppOverview icon_hash
         * @property {string|null} [logo_hash] CAppOverview logo_hash
         * @property {EAppControllerSupportLevel|null} [controller_support] CAppOverview controller_support
         * @property {boolean|null} [vr_supported] CAppOverview vr_supported
         * @property {number|null} [vr_controller_support] CAppOverview vr_controller_support
         * @property {number|null} [vr_play_area_support] CAppOverview vr_play_area_support
         * @property {ICAppOverview_PlayAreaDimensions|null} [vr_play_area_dimensions] CAppOverview vr_play_area_dimensions
         * @property {number|null} [metacritic_score] CAppOverview metacritic_score
         * @property {number|Long|null} [size_on_disk] CAppOverview size_on_disk
         * @property {boolean|null} [third_party_mod] CAppOverview third_party_mod
         * @property {string|null} [icon_data] CAppOverview icon_data
         * @property {string|null} [icon_data_format] CAppOverview icon_data_format
         * @property {string|null} [gameid] CAppOverview gameid
         * @property {string|null} [library_capsule_filename] CAppOverview library_capsule_filename
         * @property {Array.<ICAppOverview_PerClientData>|null} [per_client_data] CAppOverview per_client_data
         * @property {number|Long|null} [most_available_clientid] CAppOverview most_available_clientid
         * @property {number|Long|null} [selected_clientid] CAppOverview selected_clientid
         * @property {number|null} [rt_store_asset_mtime] CAppOverview rt_store_asset_mtime
         */
    
        /**
         * Constructs a new CAppOverview.
         * @exports CAppOverview
         * @classdesc Represents a CAppOverview.
         * @implements ICAppOverview
         * @constructor
         * @param {ICAppOverview=} [properties] Properties to set
         */
        function CAppOverview(properties) {
            this.user_tag = [];
            this.store_tag = [];
            this.association = [];
            this.genre = [];
            this.store_category = [];
            this.language_feature = [];
            this.per_client_data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAppOverview appid.
         * @member {number} appid
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.appid = 0;
    
        /**
         * CAppOverview display_name.
         * @member {string} display_name
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.display_name = "";
    
        /**
         * CAppOverview visible_in_game_list.
         * @member {boolean} visible_in_game_list
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.visible_in_game_list = false;
    
        /**
         * CAppOverview sort_as.
         * @member {string} sort_as
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.sort_as = "";
    
        /**
         * CAppOverview app_type.
         * @member {EProtoAppType} app_type
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.app_type = 0;
    
        /**
         * CAppOverview subscribed.
         * @member {boolean} subscribed
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.subscribed = false;
    
        /**
         * CAppOverview favorite.
         * @member {boolean} favorite
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.favorite = false;
    
        /**
         * CAppOverview hidden.
         * @member {boolean} hidden
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.hidden = false;
    
        /**
         * CAppOverview mru_index.
         * @member {number} mru_index
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.mru_index = 0;
    
        /**
         * CAppOverview rt_recent_activity_time.
         * @member {number} rt_recent_activity_time
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.rt_recent_activity_time = 0;
    
        /**
         * CAppOverview user_tag.
         * @member {Array.<string>} user_tag
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.user_tag = $util.emptyArray;
    
        /**
         * CAppOverview minutes_playtime_forever.
         * @member {number} minutes_playtime_forever
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.minutes_playtime_forever = 0;
    
        /**
         * CAppOverview minutes_playtime_last_two_weeks.
         * @member {number} minutes_playtime_last_two_weeks
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.minutes_playtime_last_two_weeks = 0;
    
        /**
         * CAppOverview rt_last_time_played.
         * @member {number} rt_last_time_played
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.rt_last_time_played = 0;
    
        /**
         * CAppOverview store_tag.
         * @member {Array.<number>} store_tag
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.store_tag = $util.emptyArray;
    
        /**
         * CAppOverview association.
         * @member {Array.<ICAppOverview_AppAssociation>} association
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.association = $util.emptyArray;
    
        /**
         * CAppOverview primary_genre.
         * @member {number} primary_genre
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.primary_genre = 0;
    
        /**
         * CAppOverview genre.
         * @member {Array.<number>} genre
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.genre = $util.emptyArray;
    
        /**
         * CAppOverview store_category.
         * @member {Array.<number>} store_category
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.store_category = $util.emptyArray;
    
        /**
         * CAppOverview language_feature.
         * @member {Array.<ICAppOverview_AppLanguageFeatures>} language_feature
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.language_feature = $util.emptyArray;
    
        /**
         * CAppOverview rt_original_release_date.
         * @member {number} rt_original_release_date
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.rt_original_release_date = 0;
    
        /**
         * CAppOverview rt_steam_release_date.
         * @member {number} rt_steam_release_date
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.rt_steam_release_date = 0;
    
        /**
         * CAppOverview icon_hash.
         * @member {string} icon_hash
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.icon_hash = "";
    
        /**
         * CAppOverview logo_hash.
         * @member {string} logo_hash
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.logo_hash = "";
    
        /**
         * CAppOverview controller_support.
         * @member {EAppControllerSupportLevel} controller_support
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.controller_support = 0;
    
        /**
         * CAppOverview vr_supported.
         * @member {boolean} vr_supported
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.vr_supported = false;
    
        /**
         * CAppOverview vr_controller_support.
         * @member {number} vr_controller_support
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.vr_controller_support = 0;
    
        /**
         * CAppOverview vr_play_area_support.
         * @member {number} vr_play_area_support
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.vr_play_area_support = 0;
    
        /**
         * CAppOverview vr_play_area_dimensions.
         * @member {ICAppOverview_PlayAreaDimensions|null|undefined} vr_play_area_dimensions
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.vr_play_area_dimensions = null;
    
        /**
         * CAppOverview metacritic_score.
         * @member {number} metacritic_score
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.metacritic_score = 0;
    
        /**
         * CAppOverview size_on_disk.
         * @member {number|Long} size_on_disk
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.size_on_disk = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAppOverview third_party_mod.
         * @member {boolean} third_party_mod
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.third_party_mod = false;
    
        /**
         * CAppOverview icon_data.
         * @member {string} icon_data
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.icon_data = "";
    
        /**
         * CAppOverview icon_data_format.
         * @member {string} icon_data_format
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.icon_data_format = "";
    
        /**
         * CAppOverview gameid.
         * @member {string} gameid
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.gameid = "";
    
        /**
         * CAppOverview library_capsule_filename.
         * @member {string} library_capsule_filename
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.library_capsule_filename = "";
    
        /**
         * CAppOverview per_client_data.
         * @member {Array.<ICAppOverview_PerClientData>} per_client_data
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.per_client_data = $util.emptyArray;
    
        /**
         * CAppOverview most_available_clientid.
         * @member {number|Long} most_available_clientid
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.most_available_clientid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAppOverview selected_clientid.
         * @member {number|Long} selected_clientid
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.selected_clientid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CAppOverview rt_store_asset_mtime.
         * @member {number} rt_store_asset_mtime
         * @memberof CAppOverview
         * @instance
         */
        CAppOverview.prototype.rt_store_asset_mtime = 0;
    
        /**
         * Creates a new CAppOverview instance using the specified properties.
         * @function create
         * @memberof CAppOverview
         * @static
         * @param {ICAppOverview=} [properties] Properties to set
         * @returns {CAppOverview} CAppOverview instance
         */
        CAppOverview.create = function create(properties) {
            return new CAppOverview(properties);
        };
    
        /**
         * Encodes the specified CAppOverview message. Does not implicitly {@link CAppOverview.verify|verify} messages.
         * @function encode
         * @memberof CAppOverview
         * @static
         * @param {ICAppOverview} message CAppOverview message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appid != null && message.hasOwnProperty("appid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.appid);
            if (message.display_name != null && message.hasOwnProperty("display_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.display_name);
            if (message.visible_in_game_list != null && message.hasOwnProperty("visible_in_game_list"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.visible_in_game_list);
            if (message.sort_as != null && message.hasOwnProperty("sort_as"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sort_as);
            if (message.app_type != null && message.hasOwnProperty("app_type"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.app_type);
            if (message.subscribed != null && message.hasOwnProperty("subscribed"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.subscribed);
            if (message.favorite != null && message.hasOwnProperty("favorite"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.favorite);
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.hidden);
            if (message.mru_index != null && message.hasOwnProperty("mru_index"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.mru_index);
            if (message.rt_recent_activity_time != null && message.hasOwnProperty("rt_recent_activity_time"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.rt_recent_activity_time);
            if (message.user_tag != null && message.user_tag.length)
                for (var i = 0; i < message.user_tag.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.user_tag[i]);
            if (message.minutes_playtime_forever != null && message.hasOwnProperty("minutes_playtime_forever"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.minutes_playtime_forever);
            if (message.minutes_playtime_last_two_weeks != null && message.hasOwnProperty("minutes_playtime_last_two_weeks"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.minutes_playtime_last_two_weeks);
            if (message.rt_last_time_played != null && message.hasOwnProperty("rt_last_time_played"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.rt_last_time_played);
            if (message.store_tag != null && message.store_tag.length)
                for (var i = 0; i < message.store_tag.length; ++i)
                    writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.store_tag[i]);
            if (message.association != null && message.association.length)
                for (var i = 0; i < message.association.length; ++i)
                    $root.CAppOverview_AppAssociation.encode(message.association[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.primary_genre != null && message.hasOwnProperty("primary_genre"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.primary_genre);
            if (message.genre != null && message.genre.length)
                for (var i = 0; i < message.genre.length; ++i)
                    writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.genre[i]);
            if (message.store_category != null && message.store_category.length)
                for (var i = 0; i < message.store_category.length; ++i)
                    writer.uint32(/* id 23, wireType 0 =*/184).uint32(message.store_category[i]);
            if (message.language_feature != null && message.language_feature.length)
                for (var i = 0; i < message.language_feature.length; ++i)
                    $root.CAppOverview_AppLanguageFeatures.encode(message.language_feature[i], writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.rt_original_release_date != null && message.hasOwnProperty("rt_original_release_date"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.rt_original_release_date);
            if (message.rt_steam_release_date != null && message.hasOwnProperty("rt_steam_release_date"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.rt_steam_release_date);
            if (message.icon_hash != null && message.hasOwnProperty("icon_hash"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.icon_hash);
            if (message.logo_hash != null && message.hasOwnProperty("logo_hash"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.logo_hash);
            if (message.controller_support != null && message.hasOwnProperty("controller_support"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.controller_support);
            if (message.vr_supported != null && message.hasOwnProperty("vr_supported"))
                writer.uint32(/* id 32, wireType 0 =*/256).bool(message.vr_supported);
            if (message.vr_controller_support != null && message.hasOwnProperty("vr_controller_support"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.vr_controller_support);
            if (message.vr_play_area_support != null && message.hasOwnProperty("vr_play_area_support"))
                writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.vr_play_area_support);
            if (message.vr_play_area_dimensions != null && message.hasOwnProperty("vr_play_area_dimensions"))
                $root.CAppOverview_PlayAreaDimensions.encode(message.vr_play_area_dimensions, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
            if (message.metacritic_score != null && message.hasOwnProperty("metacritic_score"))
                writer.uint32(/* id 36, wireType 0 =*/288).uint32(message.metacritic_score);
            if (message.size_on_disk != null && message.hasOwnProperty("size_on_disk"))
                writer.uint32(/* id 37, wireType 0 =*/296).uint64(message.size_on_disk);
            if (message.third_party_mod != null && message.hasOwnProperty("third_party_mod"))
                writer.uint32(/* id 38, wireType 0 =*/304).bool(message.third_party_mod);
            if (message.icon_data != null && message.hasOwnProperty("icon_data"))
                writer.uint32(/* id 39, wireType 2 =*/314).string(message.icon_data);
            if (message.icon_data_format != null && message.hasOwnProperty("icon_data_format"))
                writer.uint32(/* id 40, wireType 2 =*/322).string(message.icon_data_format);
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                writer.uint32(/* id 41, wireType 2 =*/330).string(message.gameid);
            if (message.library_capsule_filename != null && message.hasOwnProperty("library_capsule_filename"))
                writer.uint32(/* id 42, wireType 2 =*/338).string(message.library_capsule_filename);
            if (message.per_client_data != null && message.per_client_data.length)
                for (var i = 0; i < message.per_client_data.length; ++i)
                    $root.CAppOverview_PerClientData.encode(message.per_client_data[i], writer.uint32(/* id 43, wireType 2 =*/346).fork()).ldelim();
            if (message.most_available_clientid != null && message.hasOwnProperty("most_available_clientid"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint64(message.most_available_clientid);
            if (message.selected_clientid != null && message.hasOwnProperty("selected_clientid"))
                writer.uint32(/* id 45, wireType 0 =*/360).uint64(message.selected_clientid);
            if (message.rt_store_asset_mtime != null && message.hasOwnProperty("rt_store_asset_mtime"))
                writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.rt_store_asset_mtime);
            return writer;
        };
    
        /**
         * Encodes the specified CAppOverview message, length delimited. Does not implicitly {@link CAppOverview.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAppOverview
         * @static
         * @param {ICAppOverview} message CAppOverview message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAppOverview message from the specified reader or buffer.
         * @function decode
         * @memberof CAppOverview
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAppOverview} CAppOverview
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAppOverview();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.appid = reader.uint32();
                    break;
                case 2:
                    message.display_name = reader.string();
                    break;
                case 4:
                    message.visible_in_game_list = reader.bool();
                    break;
                case 6:
                    message.sort_as = reader.string();
                    break;
                case 7:
                    message.app_type = reader.int32();
                    break;
                case 9:
                    message.subscribed = reader.bool();
                    break;
                case 11:
                    message.favorite = reader.bool();
                    break;
                case 12:
                    message.hidden = reader.bool();
                    break;
                case 13:
                    message.mru_index = reader.uint32();
                    break;
                case 14:
                    message.rt_recent_activity_time = reader.uint32();
                    break;
                case 15:
                    if (!(message.user_tag && message.user_tag.length))
                        message.user_tag = [];
                    message.user_tag.push(reader.string());
                    break;
                case 16:
                    message.minutes_playtime_forever = reader.uint32();
                    break;
                case 17:
                    message.minutes_playtime_last_two_weeks = reader.uint32();
                    break;
                case 18:
                    message.rt_last_time_played = reader.uint32();
                    break;
                case 19:
                    if (!(message.store_tag && message.store_tag.length))
                        message.store_tag = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.store_tag.push(reader.uint32());
                    } else
                        message.store_tag.push(reader.uint32());
                    break;
                case 20:
                    if (!(message.association && message.association.length))
                        message.association = [];
                    message.association.push($root.CAppOverview_AppAssociation.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.primary_genre = reader.uint32();
                    break;
                case 22:
                    if (!(message.genre && message.genre.length))
                        message.genre = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.genre.push(reader.uint32());
                    } else
                        message.genre.push(reader.uint32());
                    break;
                case 23:
                    if (!(message.store_category && message.store_category.length))
                        message.store_category = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.store_category.push(reader.uint32());
                    } else
                        message.store_category.push(reader.uint32());
                    break;
                case 24:
                    if (!(message.language_feature && message.language_feature.length))
                        message.language_feature = [];
                    message.language_feature.push($root.CAppOverview_AppLanguageFeatures.decode(reader, reader.uint32()));
                    break;
                case 25:
                    message.rt_original_release_date = reader.uint32();
                    break;
                case 26:
                    message.rt_steam_release_date = reader.uint32();
                    break;
                case 27:
                    message.icon_hash = reader.string();
                    break;
                case 30:
                    message.logo_hash = reader.string();
                    break;
                case 31:
                    message.controller_support = reader.int32();
                    break;
                case 32:
                    message.vr_supported = reader.bool();
                    break;
                case 33:
                    message.vr_controller_support = reader.uint32();
                    break;
                case 34:
                    message.vr_play_area_support = reader.uint32();
                    break;
                case 35:
                    message.vr_play_area_dimensions = $root.CAppOverview_PlayAreaDimensions.decode(reader, reader.uint32());
                    break;
                case 36:
                    message.metacritic_score = reader.uint32();
                    break;
                case 37:
                    message.size_on_disk = reader.uint64();
                    break;
                case 38:
                    message.third_party_mod = reader.bool();
                    break;
                case 39:
                    message.icon_data = reader.string();
                    break;
                case 40:
                    message.icon_data_format = reader.string();
                    break;
                case 41:
                    message.gameid = reader.string();
                    break;
                case 42:
                    message.library_capsule_filename = reader.string();
                    break;
                case 43:
                    if (!(message.per_client_data && message.per_client_data.length))
                        message.per_client_data = [];
                    message.per_client_data.push($root.CAppOverview_PerClientData.decode(reader, reader.uint32()));
                    break;
                case 44:
                    message.most_available_clientid = reader.uint64();
                    break;
                case 45:
                    message.selected_clientid = reader.uint64();
                    break;
                case 46:
                    message.rt_store_asset_mtime = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAppOverview message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAppOverview
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAppOverview} CAppOverview
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAppOverview message.
         * @function verify
         * @memberof CAppOverview
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAppOverview.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appid != null && message.hasOwnProperty("appid"))
                if (!$util.isInteger(message.appid))
                    return "appid: integer expected";
            if (message.display_name != null && message.hasOwnProperty("display_name"))
                if (!$util.isString(message.display_name))
                    return "display_name: string expected";
            if (message.visible_in_game_list != null && message.hasOwnProperty("visible_in_game_list"))
                if (typeof message.visible_in_game_list !== "boolean")
                    return "visible_in_game_list: boolean expected";
            if (message.sort_as != null && message.hasOwnProperty("sort_as"))
                if (!$util.isString(message.sort_as))
                    return "sort_as: string expected";
            if (message.app_type != null && message.hasOwnProperty("app_type"))
                switch (message.app_type) {
                default:
                    return "app_type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 1073741824:
                case -2147483648:
                    break;
                }
            if (message.subscribed != null && message.hasOwnProperty("subscribed"))
                if (typeof message.subscribed !== "boolean")
                    return "subscribed: boolean expected";
            if (message.favorite != null && message.hasOwnProperty("favorite"))
                if (typeof message.favorite !== "boolean")
                    return "favorite: boolean expected";
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                if (typeof message.hidden !== "boolean")
                    return "hidden: boolean expected";
            if (message.mru_index != null && message.hasOwnProperty("mru_index"))
                if (!$util.isInteger(message.mru_index))
                    return "mru_index: integer expected";
            if (message.rt_recent_activity_time != null && message.hasOwnProperty("rt_recent_activity_time"))
                if (!$util.isInteger(message.rt_recent_activity_time))
                    return "rt_recent_activity_time: integer expected";
            if (message.user_tag != null && message.hasOwnProperty("user_tag")) {
                if (!Array.isArray(message.user_tag))
                    return "user_tag: array expected";
                for (var i = 0; i < message.user_tag.length; ++i)
                    if (!$util.isString(message.user_tag[i]))
                        return "user_tag: string[] expected";
            }
            if (message.minutes_playtime_forever != null && message.hasOwnProperty("minutes_playtime_forever"))
                if (!$util.isInteger(message.minutes_playtime_forever))
                    return "minutes_playtime_forever: integer expected";
            if (message.minutes_playtime_last_two_weeks != null && message.hasOwnProperty("minutes_playtime_last_two_weeks"))
                if (!$util.isInteger(message.minutes_playtime_last_two_weeks))
                    return "minutes_playtime_last_two_weeks: integer expected";
            if (message.rt_last_time_played != null && message.hasOwnProperty("rt_last_time_played"))
                if (!$util.isInteger(message.rt_last_time_played))
                    return "rt_last_time_played: integer expected";
            if (message.store_tag != null && message.hasOwnProperty("store_tag")) {
                if (!Array.isArray(message.store_tag))
                    return "store_tag: array expected";
                for (var i = 0; i < message.store_tag.length; ++i)
                    if (!$util.isInteger(message.store_tag[i]))
                        return "store_tag: integer[] expected";
            }
            if (message.association != null && message.hasOwnProperty("association")) {
                if (!Array.isArray(message.association))
                    return "association: array expected";
                for (var i = 0; i < message.association.length; ++i) {
                    var error = $root.CAppOverview_AppAssociation.verify(message.association[i]);
                    if (error)
                        return "association." + error;
                }
            }
            if (message.primary_genre != null && message.hasOwnProperty("primary_genre"))
                if (!$util.isInteger(message.primary_genre))
                    return "primary_genre: integer expected";
            if (message.genre != null && message.hasOwnProperty("genre")) {
                if (!Array.isArray(message.genre))
                    return "genre: array expected";
                for (var i = 0; i < message.genre.length; ++i)
                    if (!$util.isInteger(message.genre[i]))
                        return "genre: integer[] expected";
            }
            if (message.store_category != null && message.hasOwnProperty("store_category")) {
                if (!Array.isArray(message.store_category))
                    return "store_category: array expected";
                for (var i = 0; i < message.store_category.length; ++i)
                    if (!$util.isInteger(message.store_category[i]))
                        return "store_category: integer[] expected";
            }
            if (message.language_feature != null && message.hasOwnProperty("language_feature")) {
                if (!Array.isArray(message.language_feature))
                    return "language_feature: array expected";
                for (var i = 0; i < message.language_feature.length; ++i) {
                    var error = $root.CAppOverview_AppLanguageFeatures.verify(message.language_feature[i]);
                    if (error)
                        return "language_feature." + error;
                }
            }
            if (message.rt_original_release_date != null && message.hasOwnProperty("rt_original_release_date"))
                if (!$util.isInteger(message.rt_original_release_date))
                    return "rt_original_release_date: integer expected";
            if (message.rt_steam_release_date != null && message.hasOwnProperty("rt_steam_release_date"))
                if (!$util.isInteger(message.rt_steam_release_date))
                    return "rt_steam_release_date: integer expected";
            if (message.icon_hash != null && message.hasOwnProperty("icon_hash"))
                if (!$util.isString(message.icon_hash))
                    return "icon_hash: string expected";
            if (message.logo_hash != null && message.hasOwnProperty("logo_hash"))
                if (!$util.isString(message.logo_hash))
                    return "logo_hash: string expected";
            if (message.controller_support != null && message.hasOwnProperty("controller_support"))
                switch (message.controller_support) {
                default:
                    return "controller_support: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.vr_supported != null && message.hasOwnProperty("vr_supported"))
                if (typeof message.vr_supported !== "boolean")
                    return "vr_supported: boolean expected";
            if (message.vr_controller_support != null && message.hasOwnProperty("vr_controller_support"))
                if (!$util.isInteger(message.vr_controller_support))
                    return "vr_controller_support: integer expected";
            if (message.vr_play_area_support != null && message.hasOwnProperty("vr_play_area_support"))
                if (!$util.isInteger(message.vr_play_area_support))
                    return "vr_play_area_support: integer expected";
            if (message.vr_play_area_dimensions != null && message.hasOwnProperty("vr_play_area_dimensions")) {
                var error = $root.CAppOverview_PlayAreaDimensions.verify(message.vr_play_area_dimensions);
                if (error)
                    return "vr_play_area_dimensions." + error;
            }
            if (message.metacritic_score != null && message.hasOwnProperty("metacritic_score"))
                if (!$util.isInteger(message.metacritic_score))
                    return "metacritic_score: integer expected";
            if (message.size_on_disk != null && message.hasOwnProperty("size_on_disk"))
                if (!$util.isInteger(message.size_on_disk) && !(message.size_on_disk && $util.isInteger(message.size_on_disk.low) && $util.isInteger(message.size_on_disk.high)))
                    return "size_on_disk: integer|Long expected";
            if (message.third_party_mod != null && message.hasOwnProperty("third_party_mod"))
                if (typeof message.third_party_mod !== "boolean")
                    return "third_party_mod: boolean expected";
            if (message.icon_data != null && message.hasOwnProperty("icon_data"))
                if (!$util.isString(message.icon_data))
                    return "icon_data: string expected";
            if (message.icon_data_format != null && message.hasOwnProperty("icon_data_format"))
                if (!$util.isString(message.icon_data_format))
                    return "icon_data_format: string expected";
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                if (!$util.isString(message.gameid))
                    return "gameid: string expected";
            if (message.library_capsule_filename != null && message.hasOwnProperty("library_capsule_filename"))
                if (!$util.isString(message.library_capsule_filename))
                    return "library_capsule_filename: string expected";
            if (message.per_client_data != null && message.hasOwnProperty("per_client_data")) {
                if (!Array.isArray(message.per_client_data))
                    return "per_client_data: array expected";
                for (var i = 0; i < message.per_client_data.length; ++i) {
                    var error = $root.CAppOverview_PerClientData.verify(message.per_client_data[i]);
                    if (error)
                        return "per_client_data." + error;
                }
            }
            if (message.most_available_clientid != null && message.hasOwnProperty("most_available_clientid"))
                if (!$util.isInteger(message.most_available_clientid) && !(message.most_available_clientid && $util.isInteger(message.most_available_clientid.low) && $util.isInteger(message.most_available_clientid.high)))
                    return "most_available_clientid: integer|Long expected";
            if (message.selected_clientid != null && message.hasOwnProperty("selected_clientid"))
                if (!$util.isInteger(message.selected_clientid) && !(message.selected_clientid && $util.isInteger(message.selected_clientid.low) && $util.isInteger(message.selected_clientid.high)))
                    return "selected_clientid: integer|Long expected";
            if (message.rt_store_asset_mtime != null && message.hasOwnProperty("rt_store_asset_mtime"))
                if (!$util.isInteger(message.rt_store_asset_mtime))
                    return "rt_store_asset_mtime: integer expected";
            return null;
        };
    
        /**
         * Creates a CAppOverview message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAppOverview
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAppOverview} CAppOverview
         */
        CAppOverview.fromObject = function fromObject(object) {
            if (object instanceof $root.CAppOverview)
                return object;
            var message = new $root.CAppOverview();
            if (object.appid != null)
                message.appid = object.appid >>> 0;
            if (object.display_name != null)
                message.display_name = String(object.display_name);
            if (object.visible_in_game_list != null)
                message.visible_in_game_list = Boolean(object.visible_in_game_list);
            if (object.sort_as != null)
                message.sort_as = String(object.sort_as);
            switch (object.app_type) {
            case "k_EAppTypeInvalid":
            case 0:
                message.app_type = 0;
                break;
            case "k_EAppTypeGame":
            case 1:
                message.app_type = 1;
                break;
            case "k_EAppTypeApplication":
            case 2:
                message.app_type = 2;
                break;
            case "k_EAppTypeTool":
            case 4:
                message.app_type = 4;
                break;
            case "k_EAppTypeDemo":
            case 8:
                message.app_type = 8;
                break;
            case "k_EAppTypeDeprected":
            case 16:
                message.app_type = 16;
                break;
            case "k_EAppTypeDLC":
            case 32:
                message.app_type = 32;
                break;
            case "k_EAppTypeGuide":
            case 64:
                message.app_type = 64;
                break;
            case "k_EAppTypeDriver":
            case 128:
                message.app_type = 128;
                break;
            case "k_EAppTypeConfig":
            case 256:
                message.app_type = 256;
                break;
            case "k_EAppTypeHardware":
            case 512:
                message.app_type = 512;
                break;
            case "k_EAppTypeFranchise":
            case 1024:
                message.app_type = 1024;
                break;
            case "k_EAppTypeVideo":
            case 2048:
                message.app_type = 2048;
                break;
            case "k_EAppTypePlugin":
            case 4096:
                message.app_type = 4096;
                break;
            case "k_EAppTypeMusic":
            case 8192:
                message.app_type = 8192;
                break;
            case "k_EAppTypeSeries":
            case 16384:
                message.app_type = 16384;
                break;
            case "k_EAppTypeComic":
            case 32768:
                message.app_type = 32768;
                break;
            case "k_EAppTypeBeta":
            case 65536:
                message.app_type = 65536;
                break;
            case "k_EAppTypeShortcut":
            case 1073741824:
                message.app_type = 1073741824;
                break;
            case "k_EAppTypeDepotOnly":
            case -2147483648:
                message.app_type = -2147483648;
                break;
            }
            if (object.subscribed != null)
                message.subscribed = Boolean(object.subscribed);
            if (object.favorite != null)
                message.favorite = Boolean(object.favorite);
            if (object.hidden != null)
                message.hidden = Boolean(object.hidden);
            if (object.mru_index != null)
                message.mru_index = object.mru_index >>> 0;
            if (object.rt_recent_activity_time != null)
                message.rt_recent_activity_time = object.rt_recent_activity_time >>> 0;
            if (object.user_tag) {
                if (!Array.isArray(object.user_tag))
                    throw TypeError(".CAppOverview.user_tag: array expected");
                message.user_tag = [];
                for (var i = 0; i < object.user_tag.length; ++i)
                    message.user_tag[i] = String(object.user_tag[i]);
            }
            if (object.minutes_playtime_forever != null)
                message.minutes_playtime_forever = object.minutes_playtime_forever >>> 0;
            if (object.minutes_playtime_last_two_weeks != null)
                message.minutes_playtime_last_two_weeks = object.minutes_playtime_last_two_weeks >>> 0;
            if (object.rt_last_time_played != null)
                message.rt_last_time_played = object.rt_last_time_played >>> 0;
            if (object.store_tag) {
                if (!Array.isArray(object.store_tag))
                    throw TypeError(".CAppOverview.store_tag: array expected");
                message.store_tag = [];
                for (var i = 0; i < object.store_tag.length; ++i)
                    message.store_tag[i] = object.store_tag[i] >>> 0;
            }
            if (object.association) {
                if (!Array.isArray(object.association))
                    throw TypeError(".CAppOverview.association: array expected");
                message.association = [];
                for (var i = 0; i < object.association.length; ++i) {
                    if (typeof object.association[i] !== "object")
                        throw TypeError(".CAppOverview.association: object expected");
                    message.association[i] = $root.CAppOverview_AppAssociation.fromObject(object.association[i]);
                }
            }
            if (object.primary_genre != null)
                message.primary_genre = object.primary_genre >>> 0;
            if (object.genre) {
                if (!Array.isArray(object.genre))
                    throw TypeError(".CAppOverview.genre: array expected");
                message.genre = [];
                for (var i = 0; i < object.genre.length; ++i)
                    message.genre[i] = object.genre[i] >>> 0;
            }
            if (object.store_category) {
                if (!Array.isArray(object.store_category))
                    throw TypeError(".CAppOverview.store_category: array expected");
                message.store_category = [];
                for (var i = 0; i < object.store_category.length; ++i)
                    message.store_category[i] = object.store_category[i] >>> 0;
            }
            if (object.language_feature) {
                if (!Array.isArray(object.language_feature))
                    throw TypeError(".CAppOverview.language_feature: array expected");
                message.language_feature = [];
                for (var i = 0; i < object.language_feature.length; ++i) {
                    if (typeof object.language_feature[i] !== "object")
                        throw TypeError(".CAppOverview.language_feature: object expected");
                    message.language_feature[i] = $root.CAppOverview_AppLanguageFeatures.fromObject(object.language_feature[i]);
                }
            }
            if (object.rt_original_release_date != null)
                message.rt_original_release_date = object.rt_original_release_date >>> 0;
            if (object.rt_steam_release_date != null)
                message.rt_steam_release_date = object.rt_steam_release_date >>> 0;
            if (object.icon_hash != null)
                message.icon_hash = String(object.icon_hash);
            if (object.logo_hash != null)
                message.logo_hash = String(object.logo_hash);
            switch (object.controller_support) {
            case "k_EAppControllerSupportLevelNone":
            case 0:
                message.controller_support = 0;
                break;
            case "k_EAppControllerSupportLevelPartial":
            case 1:
                message.controller_support = 1;
                break;
            case "k_EAppControllerSupportLevelFull":
            case 2:
                message.controller_support = 2;
                break;
            }
            if (object.vr_supported != null)
                message.vr_supported = Boolean(object.vr_supported);
            if (object.vr_controller_support != null)
                message.vr_controller_support = object.vr_controller_support >>> 0;
            if (object.vr_play_area_support != null)
                message.vr_play_area_support = object.vr_play_area_support >>> 0;
            if (object.vr_play_area_dimensions != null) {
                if (typeof object.vr_play_area_dimensions !== "object")
                    throw TypeError(".CAppOverview.vr_play_area_dimensions: object expected");
                message.vr_play_area_dimensions = $root.CAppOverview_PlayAreaDimensions.fromObject(object.vr_play_area_dimensions);
            }
            if (object.metacritic_score != null)
                message.metacritic_score = object.metacritic_score >>> 0;
            if (object.size_on_disk != null)
                if ($util.Long)
                    (message.size_on_disk = $util.Long.fromValue(object.size_on_disk)).unsigned = true;
                else if (typeof object.size_on_disk === "string")
                    message.size_on_disk = parseInt(object.size_on_disk, 10);
                else if (typeof object.size_on_disk === "number")
                    message.size_on_disk = object.size_on_disk;
                else if (typeof object.size_on_disk === "object")
                    message.size_on_disk = new $util.LongBits(object.size_on_disk.low >>> 0, object.size_on_disk.high >>> 0).toNumber(true);
            if (object.third_party_mod != null)
                message.third_party_mod = Boolean(object.third_party_mod);
            if (object.icon_data != null)
                message.icon_data = String(object.icon_data);
            if (object.icon_data_format != null)
                message.icon_data_format = String(object.icon_data_format);
            if (object.gameid != null)
                message.gameid = String(object.gameid);
            if (object.library_capsule_filename != null)
                message.library_capsule_filename = String(object.library_capsule_filename);
            if (object.per_client_data) {
                if (!Array.isArray(object.per_client_data))
                    throw TypeError(".CAppOverview.per_client_data: array expected");
                message.per_client_data = [];
                for (var i = 0; i < object.per_client_data.length; ++i) {
                    if (typeof object.per_client_data[i] !== "object")
                        throw TypeError(".CAppOverview.per_client_data: object expected");
                    message.per_client_data[i] = $root.CAppOverview_PerClientData.fromObject(object.per_client_data[i]);
                }
            }
            if (object.most_available_clientid != null)
                if ($util.Long)
                    (message.most_available_clientid = $util.Long.fromValue(object.most_available_clientid)).unsigned = true;
                else if (typeof object.most_available_clientid === "string")
                    message.most_available_clientid = parseInt(object.most_available_clientid, 10);
                else if (typeof object.most_available_clientid === "number")
                    message.most_available_clientid = object.most_available_clientid;
                else if (typeof object.most_available_clientid === "object")
                    message.most_available_clientid = new $util.LongBits(object.most_available_clientid.low >>> 0, object.most_available_clientid.high >>> 0).toNumber(true);
            if (object.selected_clientid != null)
                if ($util.Long)
                    (message.selected_clientid = $util.Long.fromValue(object.selected_clientid)).unsigned = true;
                else if (typeof object.selected_clientid === "string")
                    message.selected_clientid = parseInt(object.selected_clientid, 10);
                else if (typeof object.selected_clientid === "number")
                    message.selected_clientid = object.selected_clientid;
                else if (typeof object.selected_clientid === "object")
                    message.selected_clientid = new $util.LongBits(object.selected_clientid.low >>> 0, object.selected_clientid.high >>> 0).toNumber(true);
            if (object.rt_store_asset_mtime != null)
                message.rt_store_asset_mtime = object.rt_store_asset_mtime >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a CAppOverview message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAppOverview
         * @static
         * @param {CAppOverview} message CAppOverview
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAppOverview.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.user_tag = [];
                object.store_tag = [];
                object.association = [];
                object.genre = [];
                object.store_category = [];
                object.language_feature = [];
                object.per_client_data = [];
            }
            if (options.defaults) {
                object.appid = 0;
                object.display_name = "";
                object.visible_in_game_list = false;
                object.sort_as = "";
                object.app_type = options.enums === String ? "k_EAppTypeInvalid" : 0;
                object.subscribed = false;
                object.favorite = false;
                object.hidden = false;
                object.mru_index = 0;
                object.rt_recent_activity_time = 0;
                object.minutes_playtime_forever = 0;
                object.minutes_playtime_last_two_weeks = 0;
                object.rt_last_time_played = 0;
                object.primary_genre = 0;
                object.rt_original_release_date = 0;
                object.rt_steam_release_date = 0;
                object.icon_hash = "";
                object.logo_hash = "";
                object.controller_support = options.enums === String ? "k_EAppControllerSupportLevelNone" : 0;
                object.vr_supported = false;
                object.vr_controller_support = 0;
                object.vr_play_area_support = 0;
                object.vr_play_area_dimensions = null;
                object.metacritic_score = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.size_on_disk = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size_on_disk = options.longs === String ? "0" : 0;
                object.third_party_mod = false;
                object.icon_data = "";
                object.icon_data_format = "";
                object.gameid = "";
                object.library_capsule_filename = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.most_available_clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.most_available_clientid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.selected_clientid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.selected_clientid = options.longs === String ? "0" : 0;
                object.rt_store_asset_mtime = 0;
            }
            if (message.appid != null && message.hasOwnProperty("appid"))
                object.appid = message.appid;
            if (message.display_name != null && message.hasOwnProperty("display_name"))
                object.display_name = message.display_name;
            if (message.visible_in_game_list != null && message.hasOwnProperty("visible_in_game_list"))
                object.visible_in_game_list = message.visible_in_game_list;
            if (message.sort_as != null && message.hasOwnProperty("sort_as"))
                object.sort_as = message.sort_as;
            if (message.app_type != null && message.hasOwnProperty("app_type"))
                object.app_type = options.enums === String ? $root.EProtoAppType[message.app_type] : message.app_type;
            if (message.subscribed != null && message.hasOwnProperty("subscribed"))
                object.subscribed = message.subscribed;
            if (message.favorite != null && message.hasOwnProperty("favorite"))
                object.favorite = message.favorite;
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                object.hidden = message.hidden;
            if (message.mru_index != null && message.hasOwnProperty("mru_index"))
                object.mru_index = message.mru_index;
            if (message.rt_recent_activity_time != null && message.hasOwnProperty("rt_recent_activity_time"))
                object.rt_recent_activity_time = message.rt_recent_activity_time;
            if (message.user_tag && message.user_tag.length) {
                object.user_tag = [];
                for (var j = 0; j < message.user_tag.length; ++j)
                    object.user_tag[j] = message.user_tag[j];
            }
            if (message.minutes_playtime_forever != null && message.hasOwnProperty("minutes_playtime_forever"))
                object.minutes_playtime_forever = message.minutes_playtime_forever;
            if (message.minutes_playtime_last_two_weeks != null && message.hasOwnProperty("minutes_playtime_last_two_weeks"))
                object.minutes_playtime_last_two_weeks = message.minutes_playtime_last_two_weeks;
            if (message.rt_last_time_played != null && message.hasOwnProperty("rt_last_time_played"))
                object.rt_last_time_played = message.rt_last_time_played;
            if (message.store_tag && message.store_tag.length) {
                object.store_tag = [];
                for (var j = 0; j < message.store_tag.length; ++j)
                    object.store_tag[j] = message.store_tag[j];
            }
            if (message.association && message.association.length) {
                object.association = [];
                for (var j = 0; j < message.association.length; ++j)
                    object.association[j] = $root.CAppOverview_AppAssociation.toObject(message.association[j], options);
            }
            if (message.primary_genre != null && message.hasOwnProperty("primary_genre"))
                object.primary_genre = message.primary_genre;
            if (message.genre && message.genre.length) {
                object.genre = [];
                for (var j = 0; j < message.genre.length; ++j)
                    object.genre[j] = message.genre[j];
            }
            if (message.store_category && message.store_category.length) {
                object.store_category = [];
                for (var j = 0; j < message.store_category.length; ++j)
                    object.store_category[j] = message.store_category[j];
            }
            if (message.language_feature && message.language_feature.length) {
                object.language_feature = [];
                for (var j = 0; j < message.language_feature.length; ++j)
                    object.language_feature[j] = $root.CAppOverview_AppLanguageFeatures.toObject(message.language_feature[j], options);
            }
            if (message.rt_original_release_date != null && message.hasOwnProperty("rt_original_release_date"))
                object.rt_original_release_date = message.rt_original_release_date;
            if (message.rt_steam_release_date != null && message.hasOwnProperty("rt_steam_release_date"))
                object.rt_steam_release_date = message.rt_steam_release_date;
            if (message.icon_hash != null && message.hasOwnProperty("icon_hash"))
                object.icon_hash = message.icon_hash;
            if (message.logo_hash != null && message.hasOwnProperty("logo_hash"))
                object.logo_hash = message.logo_hash;
            if (message.controller_support != null && message.hasOwnProperty("controller_support"))
                object.controller_support = options.enums === String ? $root.EAppControllerSupportLevel[message.controller_support] : message.controller_support;
            if (message.vr_supported != null && message.hasOwnProperty("vr_supported"))
                object.vr_supported = message.vr_supported;
            if (message.vr_controller_support != null && message.hasOwnProperty("vr_controller_support"))
                object.vr_controller_support = message.vr_controller_support;
            if (message.vr_play_area_support != null && message.hasOwnProperty("vr_play_area_support"))
                object.vr_play_area_support = message.vr_play_area_support;
            if (message.vr_play_area_dimensions != null && message.hasOwnProperty("vr_play_area_dimensions"))
                object.vr_play_area_dimensions = $root.CAppOverview_PlayAreaDimensions.toObject(message.vr_play_area_dimensions, options);
            if (message.metacritic_score != null && message.hasOwnProperty("metacritic_score"))
                object.metacritic_score = message.metacritic_score;
            if (message.size_on_disk != null && message.hasOwnProperty("size_on_disk"))
                if (typeof message.size_on_disk === "number")
                    object.size_on_disk = options.longs === String ? String(message.size_on_disk) : message.size_on_disk;
                else
                    object.size_on_disk = options.longs === String ? $util.Long.prototype.toString.call(message.size_on_disk) : options.longs === Number ? new $util.LongBits(message.size_on_disk.low >>> 0, message.size_on_disk.high >>> 0).toNumber(true) : message.size_on_disk;
            if (message.third_party_mod != null && message.hasOwnProperty("third_party_mod"))
                object.third_party_mod = message.third_party_mod;
            if (message.icon_data != null && message.hasOwnProperty("icon_data"))
                object.icon_data = message.icon_data;
            if (message.icon_data_format != null && message.hasOwnProperty("icon_data_format"))
                object.icon_data_format = message.icon_data_format;
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                object.gameid = message.gameid;
            if (message.library_capsule_filename != null && message.hasOwnProperty("library_capsule_filename"))
                object.library_capsule_filename = message.library_capsule_filename;
            if (message.per_client_data && message.per_client_data.length) {
                object.per_client_data = [];
                for (var j = 0; j < message.per_client_data.length; ++j)
                    object.per_client_data[j] = $root.CAppOverview_PerClientData.toObject(message.per_client_data[j], options);
            }
            if (message.most_available_clientid != null && message.hasOwnProperty("most_available_clientid"))
                if (typeof message.most_available_clientid === "number")
                    object.most_available_clientid = options.longs === String ? String(message.most_available_clientid) : message.most_available_clientid;
                else
                    object.most_available_clientid = options.longs === String ? $util.Long.prototype.toString.call(message.most_available_clientid) : options.longs === Number ? new $util.LongBits(message.most_available_clientid.low >>> 0, message.most_available_clientid.high >>> 0).toNumber(true) : message.most_available_clientid;
            if (message.selected_clientid != null && message.hasOwnProperty("selected_clientid"))
                if (typeof message.selected_clientid === "number")
                    object.selected_clientid = options.longs === String ? String(message.selected_clientid) : message.selected_clientid;
                else
                    object.selected_clientid = options.longs === String ? $util.Long.prototype.toString.call(message.selected_clientid) : options.longs === Number ? new $util.LongBits(message.selected_clientid.low >>> 0, message.selected_clientid.high >>> 0).toNumber(true) : message.selected_clientid;
            if (message.rt_store_asset_mtime != null && message.hasOwnProperty("rt_store_asset_mtime"))
                object.rt_store_asset_mtime = message.rt_store_asset_mtime;
            return object;
        };
    
        /**
         * Converts this CAppOverview to JSON.
         * @function toJSON
         * @memberof CAppOverview
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAppOverview.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAppOverview;
    })();
    
    $root.CAppOverview_Change = (function() {
    
        /**
         * Properties of a CAppOverview_Change.
         * @exports ICAppOverview_Change
         * @interface ICAppOverview_Change
         * @property {Array.<ICAppOverview>|null} [app_overview] CAppOverview_Change app_overview
         * @property {Array.<number>|null} [removed_appid] CAppOverview_Change removed_appid
         */
    
        /**
         * Constructs a new CAppOverview_Change.
         * @exports CAppOverview_Change
         * @classdesc Represents a CAppOverview_Change.
         * @implements ICAppOverview_Change
         * @constructor
         * @param {ICAppOverview_Change=} [properties] Properties to set
         */
        function CAppOverview_Change(properties) {
            this.app_overview = [];
            this.removed_appid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CAppOverview_Change app_overview.
         * @member {Array.<ICAppOverview>} app_overview
         * @memberof CAppOverview_Change
         * @instance
         */
        CAppOverview_Change.prototype.app_overview = $util.emptyArray;
    
        /**
         * CAppOverview_Change removed_appid.
         * @member {Array.<number>} removed_appid
         * @memberof CAppOverview_Change
         * @instance
         */
        CAppOverview_Change.prototype.removed_appid = $util.emptyArray;
    
        /**
         * Creates a new CAppOverview_Change instance using the specified properties.
         * @function create
         * @memberof CAppOverview_Change
         * @static
         * @param {ICAppOverview_Change=} [properties] Properties to set
         * @returns {CAppOverview_Change} CAppOverview_Change instance
         */
        CAppOverview_Change.create = function create(properties) {
            return new CAppOverview_Change(properties);
        };
    
        /**
         * Encodes the specified CAppOverview_Change message. Does not implicitly {@link CAppOverview_Change.verify|verify} messages.
         * @function encode
         * @memberof CAppOverview_Change
         * @static
         * @param {ICAppOverview_Change} message CAppOverview_Change message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_Change.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.app_overview != null && message.app_overview.length)
                for (var i = 0; i < message.app_overview.length; ++i)
                    $root.CAppOverview.encode(message.app_overview[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.removed_appid != null && message.removed_appid.length)
                for (var i = 0; i < message.removed_appid.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.removed_appid[i]);
            return writer;
        };
    
        /**
         * Encodes the specified CAppOverview_Change message, length delimited. Does not implicitly {@link CAppOverview_Change.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CAppOverview_Change
         * @static
         * @param {ICAppOverview_Change} message CAppOverview_Change message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CAppOverview_Change.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CAppOverview_Change message from the specified reader or buffer.
         * @function decode
         * @memberof CAppOverview_Change
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CAppOverview_Change} CAppOverview_Change
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_Change.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CAppOverview_Change();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.app_overview && message.app_overview.length))
                        message.app_overview = [];
                    message.app_overview.push($root.CAppOverview.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.removed_appid && message.removed_appid.length))
                        message.removed_appid = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.removed_appid.push(reader.uint32());
                    } else
                        message.removed_appid.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CAppOverview_Change message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CAppOverview_Change
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CAppOverview_Change} CAppOverview_Change
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CAppOverview_Change.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CAppOverview_Change message.
         * @function verify
         * @memberof CAppOverview_Change
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CAppOverview_Change.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.app_overview != null && message.hasOwnProperty("app_overview")) {
                if (!Array.isArray(message.app_overview))
                    return "app_overview: array expected";
                for (var i = 0; i < message.app_overview.length; ++i) {
                    var error = $root.CAppOverview.verify(message.app_overview[i]);
                    if (error)
                        return "app_overview." + error;
                }
            }
            if (message.removed_appid != null && message.hasOwnProperty("removed_appid")) {
                if (!Array.isArray(message.removed_appid))
                    return "removed_appid: array expected";
                for (var i = 0; i < message.removed_appid.length; ++i)
                    if (!$util.isInteger(message.removed_appid[i]))
                        return "removed_appid: integer[] expected";
            }
            return null;
        };
    
        /**
         * Creates a CAppOverview_Change message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CAppOverview_Change
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CAppOverview_Change} CAppOverview_Change
         */
        CAppOverview_Change.fromObject = function fromObject(object) {
            if (object instanceof $root.CAppOverview_Change)
                return object;
            var message = new $root.CAppOverview_Change();
            if (object.app_overview) {
                if (!Array.isArray(object.app_overview))
                    throw TypeError(".CAppOverview_Change.app_overview: array expected");
                message.app_overview = [];
                for (var i = 0; i < object.app_overview.length; ++i) {
                    if (typeof object.app_overview[i] !== "object")
                        throw TypeError(".CAppOverview_Change.app_overview: object expected");
                    message.app_overview[i] = $root.CAppOverview.fromObject(object.app_overview[i]);
                }
            }
            if (object.removed_appid) {
                if (!Array.isArray(object.removed_appid))
                    throw TypeError(".CAppOverview_Change.removed_appid: array expected");
                message.removed_appid = [];
                for (var i = 0; i < object.removed_appid.length; ++i)
                    message.removed_appid[i] = object.removed_appid[i] >>> 0;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a CAppOverview_Change message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CAppOverview_Change
         * @static
         * @param {CAppOverview_Change} message CAppOverview_Change
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CAppOverview_Change.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.app_overview = [];
                object.removed_appid = [];
            }
            if (message.app_overview && message.app_overview.length) {
                object.app_overview = [];
                for (var j = 0; j < message.app_overview.length; ++j)
                    object.app_overview[j] = $root.CAppOverview.toObject(message.app_overview[j], options);
            }
            if (message.removed_appid && message.removed_appid.length) {
                object.removed_appid = [];
                for (var j = 0; j < message.removed_appid.length; ++j)
                    object.removed_appid[j] = message.removed_appid[j];
            }
            return object;
        };
    
        /**
         * Converts this CAppOverview_Change to JSON.
         * @function toJSON
         * @memberof CAppOverview_Change
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CAppOverview_Change.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CAppOverview_Change;
    })();

    return $root;
});
