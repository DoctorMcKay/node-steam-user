const ByteBuffer = require('bytebuffer');
const CRC32 = require('buffer-crc32');
const Crypto = require('crypto');
const SteamCrypto = require('@doctormckay/steam-crypto');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');
const Schema = require('./protobufs.js');
const SteamUser = require('../index.js');

/**
 * Request an encrypted appticket for a particular app. The app must be set up on the Steam backend for encrypted apptickets.
 * @param {int} appid - The Steam AppID of the app you want a ticket for
 * @param {Buffer} [userData] - If the app expects some "user data", provide it here
 * @param {function} callback - First argument is "err", second is the ticket as a Buffer (on success)
 */
SteamUser.prototype.getEncryptedAppTicket = function(appid, userData, callback) {
	if (typeof userData === 'function') {
		callback = userData;
		userData = new Buffer(0);
	}

	this._send(SteamUser.EMsg.ClientRequestEncryptedAppTicket, {"app_id": appid, "userdata": userData}, (body) => {
		if (body.eresult != SteamUser.EResult.OK) {
			callback(Helpers.eresultError(body.eresult));
			return;
		}

		if (body.app_id != appid) {
			// Don't know if this can even happen
			callback(new Error("Steam did not send an appticket for the requested appid"));
			return;
		}

		if (!body.encrypted_app_ticket) {
			callback(new Error("No appticket in response"));
			return;
		}

		callback(null, (new Schema.EncryptedAppTicket(body.encrypted_app_ticket)).toBuffer());
	});
};

/**
 *
 * @param {Buffer} ticket - The raw encrypted appticket
 * @param {Buffer|string} encryptionKey - The app's encryption key, either raw hex or a Buffer
 * @returns {object}
 */
SteamUser.parseEncryptedAppTicket = function(ticket, encryptionKey) {
	try {
		let outer = Schema.EncryptedAppTicket.decode(ticket);
		let key = typeof encryptionKey === 'string' ? Buffer.from(encryptionKey, 'hex') : encryptionKey;
		let decrypted = SteamCrypto.symmetricDecrypt(outer.encrypted_ticket.toBuffer(), key);

		if (CRC32.unsigned(decrypted) != outer.crc_encryptedticket) {
			return null;
		}

		// the beginning is the user-supplied data
		let userData = decrypted.slice(0, outer.cb_encrypteduserdata);
		let ownershipTicketLength = decrypted.readUInt32LE(outer.cb_encrypteduserdata);
		let ownershipTicket = SteamUser.parseAppTicket(decrypted.slice(outer.cb_encrypteduserdata, outer.cb_encrypteduserdata + ownershipTicketLength));
		if (ownershipTicket) {
			ownershipTicket.userData = userData;
		}

		let remainder = decrypted.slice(outer.cb_encrypteduserdata + ownershipTicketLength);
		if (remainder.length >= 8 + 20) {
			// salted sha1 hash
			let salt = remainder.slice(0, 8);
			let hash = remainder.slice(8, 28);
			remainder = remainder.slice(28);

			let sha1 = Crypto.createHash('sha1');
			sha1.update(decrypted.slice(0, outer.cb_encrypteduserdata + ownershipTicketLength))
				.update(salt);
			if (!hash.equals(sha1.digest())) {
				return null;
			}

			ownershipTicket.unknown1 = remainder.readUInt32LE(0);
		}

		return ownershipTicket;
	} catch (ex) {
		return null;
	}
};

/**
 * Parse a Steam app or session ticket and return an object containing its details. Static.
 * @param {Buffer|ByteBuffer} ticket - The binary appticket
 * @returns {object|null} - object if well-formed ticket (may not be valid), or null if not well-formed
 */
SteamUser.parseAppTicket = function(ticket) {
	// https://github.com/SteamRE/SteamKit/blob/master/Resources/Structs/steam3_appticket.hsl

	if (!ByteBuffer.isByteBuffer(ticket)) {
		ticket = ByteBuffer.wrap(ticket, ByteBuffer.LITTLE_ENDIAN);
	}

	let details = {};

	try {
		let initialLength = ticket.readUint32();
		if (initialLength == 20) {
			// This is a full appticket, with a GC token and session header (in addition to ownership ticket)
			details.authTicket = ticket.slice(ticket.offset - 4, ticket.offset - 4 + 52).toBuffer(); // this is the part that's passed back to Steam for validation

			details.gcToken = ticket.readUint64().toString();
			//details.steamID = new SteamID(ticket.readUint64().toString());
			ticket.skip(8); // the SteamID gets read later on
			details.tokenGenerated = new Date(ticket.readUint32() * 1000);

			if (ticket.readUint32() != 24) {
				// SESSIONHEADER should be 24 bytes.
				return null;
			}

			ticket.skip(8); // unknown 1 and unknown 2
			details.sessionExternalIP = Helpers.ipIntToString(ticket.readUint32());
			ticket.skip(4); // filler
			details.clientConnectionTime = ticket.readUint32(); // time the client has been connected to Steam in ms
			details.clientConnectionCount = ticket.readUint32(); // how many servers the client has connected to

			if (ticket.readUint32() + ticket.offset != ticket.limit) {
				// OWNERSHIPSECTIONWITHSIGNATURE sectlength
				return null;
			}
		} else {
			ticket.skip(-4);
		}

		// Start reading the ownership ticket
		let ownershipTicketOffset = ticket.offset;
		let ownershipTicketLength = ticket.readUint32(); // including itself, for some reason
		if (ownershipTicketOffset + ownershipTicketLength != ticket.limit && ownershipTicketOffset + ownershipTicketLength + 128 != ticket.limit) {
			return null;
		}

		let i, j, dlc;

		details.version = ticket.readUint32();
		details.steamID = new SteamID(ticket.readUint64().toString());
		details.appID = ticket.readUint32();
		details.ownershipTicketExternalIP = Helpers.ipIntToString(ticket.readUint32());
		details.ownershipTicketInternalIP = Helpers.ipIntToString(ticket.readUint32());
		details.ownershipFlags = ticket.readUint32();
		details.ownershipTicketGenerated = new Date(ticket.readUint32() * 1000);
		details.ownershipTicketExpires = new Date(ticket.readUint32() * 1000);
		details.licenses = [];

		let licenseCount = ticket.readUint16();
		for (i = 0; i < licenseCount; i++) {
			details.licenses.push(ticket.readUint32());
		}

		details.dlc = [];

		let dlcCount = ticket.readUint16();
		for (i = 0; i < dlcCount; i++) {
			dlc = {};
			dlc.appID = ticket.readUint32();
			dlc.licenses = [];

			licenseCount = ticket.readUint16();

			for (j = 0; j < licenseCount; j++) {
				dlc.licenses.push(ticket.readUint32());
			}

			details.dlc.push(dlc);
		}

		ticket.readUint16(); // reserved
		if (ticket.offset + 128 == ticket.limit) {
			// Has signature
			details.signature = ticket.slice(ticket.offset, ticket.offset + 128).toBuffer();
		}

		let date = new Date();
		details.isExpired = details.ownershipTicketExpires < date;
		details.hasValidSignature = !!details.signature && SteamCrypto.verifySignature(ticket.slice(ownershipTicketOffset, ownershipTicketOffset + ownershipTicketLength).toBuffer(), details.signature);
		details.isValid = !details.isExpired && (!details.signature || details.hasValidSignature);
	} catch (ex) {
		return null; // not a valid ticket
	}

	return details;
};

SteamUser.prototype.getAuthSessionTicket = function(appid, callback) {
	// For an auth session ticket we need the following:
	// 1. Length-prefixed GCTOKEN
	// 2. Length-prefixed SESSIONHEADER
	// 3. Length-prefixed OWNERSHIPTICKET (yes, even though the ticket itself has a length)
	// The GCTOKEN and SESSIONHEADER portion is passed to ClientAuthList for reuse validation
	this.getAppOwnershipTicket(appid, (err, ticket) => {
		if (err) {
			callback(err);
			return;
		}

		let buildToken = () => {
			let gcToken = this._gcTokens.splice(0, 1)[0];
			let buffer = new ByteBuffer(4 + gcToken.length + 4 + 24 + 4 + ticket.length, ByteBuffer.LITTLE_ENDIAN);
			buffer.writeUint32(gcToken.length);
			buffer.append(gcToken);
			buffer.writeUint32(24); // length of the session header, which is always 24 bytes
			buffer.writeUint32(1); // unknown 1
			buffer.writeUint32(2); // unknown 2
			buffer.writeUint32(Helpers.ipStringToInt(this.publicIP)); // external IP
			buffer.writeUint32(0); // filler
			buffer.writeUint32(Date.now() - this._connectTime); // timestamp
			buffer.writeUint32(++this._connectionCount); // connection count
			buffer.writeUint32(ticket.length);
			buffer.append(ticket);

			buffer = buffer.flip().toBuffer();

			// We need to activate our ticket
			this.validateAuthTickets(appid, buffer, function() {
				callback(null, buffer);
			});
		};

		// Do we have any GC tokens?
		if (this._gcTokens.length > 0) {
			buildToken();
		} else {
			this.once('_gcTokens', buildToken); // continue once we get some tokens
		}
	});
};

SteamUser.prototype.getAppOwnershipTicket = function(appid, callback) {
	let getNewTicket = () => {
		this._send(SteamUser.EMsg.ClientGetAppOwnershipTicket, {"app_id": appid}, (body) => {
			if (body.eresult != SteamUser.EResult.OK) {
				callback(Helpers.eresultError(body.eresult));
				return;
			}

			if (body.app_id != appid) {
				callback(new Error("Cannot get app ownership ticket"));
				return;
			}

			let ticket = body.ticket.toBuffer();
			if (ticket && ticket.length > 10 && this.options.saveAppTickets && this.storage) {
				this.storage.saveFile("appOwnershipTicket_" + this.steamID + "_" + appid + ".bin", ticket);
			}

			callback(null, body.ticket.toBuffer());
		});
	};

	// See if we have one saved
	if (this.storage) {
		this.storage.readFile("appOwnershipTicket_" + this.steamID + "_" + appid + ".bin", (err, file) => {
			if (!err && file) {
				let parsed = SteamUser.parseAppTicket(file);
				// Only return the saved ticket if it has a valid signature, expires more than 6 hours from now, and has the same external IP as we have right now.
				if (parsed && parsed.isValid && parsed.ownershipTicketExpires - Date.now() >= (1000 * 60 * 60 * 6) && parsed.ownershipTicketExternalIP == this.publicIP) {
					callback(null, file);
					return;
				}
			}

			getNewTicket();
		});
	} else {
		getNewTicket();
	}
};

// TODO: Does this list need to include all the tickets we consider active and valid, regardless of who we are?
// TODO make this internal and only expose an interface for adding/removing tickets
SteamUser.prototype.validateAuthTickets = function(appid, tickets, callback) {
	if (!(tickets instanceof Array)) {
		tickets = [tickets];
	}

	let obj = {
		"tokens_left": (this._gcTokens ? this._gcTokens.length : 0),
		"last_request_seq": this._authSeqMe,
		"last_request_seq_from_server": this._authSeqThem,
		"tickets": [],
		"app_ids": [],
		"message_sequence": ++this._authSeqMe
	};

	tickets.forEach((ticket, idx) => {
		let authTicket = null;

		if (ticket instanceof Buffer && ticket.length == 52) {
			authTicket = ticket;
		}

		if (ticket.authTicket) {
			authTicket = ticket.authTicket;
		} else {
			ticket = SteamUser.parseAppTicket(ticket);
			if (!ticket) {
				if (callback) {
					callback(new Error("Ticket " + idx + " is invalid"));
				}

				return;
			}

			authTicket = ticket.authTicket;
		}

		let sid = new SteamID();
		sid.universe = this.steamID.universe;
		sid.type = SteamID.Type.INDIVIDUAL;
		sid.instance = SteamID.Instance.DESKTOP;
		sid.accountid = authTicket.readUInt32LE(12);
		sid = sid.getSteamID64();

		let isOurTicket = (sid == this.steamID.getSteamID64());

		obj.tickets.push({
			"estate": isOurTicket ? 0 : 1,
			"steamid": isOurTicket ? 0 : sid,
			"gameid": appid,
			"h_steam_pipe": this._hSteamPipe,
			"ticket_crc": CRC32.unsigned(authTicket),
			"ticket": authTicket
		});

		obj.app_ids.push(appid);
	});

	if (tickets.length == 0) {
		obj.app_ids.push(appid); // canceling tickets for this app
	}

	this._send(SteamUser.EMsg.ClientAuthList, obj, (body) => {
		this._authSeqThem = body.message_sequence;

		if (callback) {
			callback(null);
		}
	});
};

SteamUser.prototype.cancelAuthTicket = function(appid, callback) {
	this.validateAuthTickets(appid, [], callback);
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ClientGameConnectTokens] = function(body) {
	this.emit('debug', "Received " + body.tokens.length + " game connect tokens");
	body.tokens.forEach((token) => {
		this._gcTokens.push(token.toBuffer());
	});

	this.emit('_gcTokens'); // internal private event
};

SteamUser.prototype._handlers[SteamUser.EMsg.ClientTicketAuthComplete] = function(body) {
	let eventBody = {
		"steamID": new SteamID(body.steam_id.toString()),
		"appOwnerSteamID": body.owner_steam_id.toString() == "0" ? null : new SteamID(body.owner_steam_id.toString()),
		"appID": parseInt(body.game_id.toString(), 10),
		"ticketCrc": body.ticket_crc,
		"state": body.estate,
		"authSessionResponse": body.eauth_session_response
	};

	let eventName = "authTicketValidation";
	if (eventBody.steamID.type == 0) {
		// this appears to happen when it's our own ticket?
		eventName = "authTicketStatus";
		eventBody.steamID = this.steamID;
	}

	this.emit(eventName, eventBody);
};
