const AppTicket = require('steam-appticket');
const ByteBuffer = require('bytebuffer');
const Crypto = require('crypto');
const StdLib = require('@doctormckay/stdlib');
const SteamCrypto = require('@doctormckay/steam-crypto');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');
const Messages = require('./messages.js');
const Schema = require('../protobufs/generated/_load.js');
const SteamUser = require('../index.js');

/**
 * Request an encrypted appticket for a particular app. The app must be set up on the Steam backend for encrypted apptickets.
 * @param {int} appid - The Steam AppID of the app you want a ticket for
 * @param {Buffer} [userData] - If the app expects some "user data", provide it here
 * @param {function} [callback] - First argument is "err", second is the ticket as a Buffer (on success)
 * @return {Promise}
 */
SteamUser.prototype.getEncryptedAppTicket = function(appid, userData, callback) {
	if (typeof userData === 'function') {
		callback = userData;
		userData = new Buffer(0);
	}

	return StdLib.Promises.callbackPromise(['encryptedAppTicket'], callback, (accept, reject) => {
		this._send(SteamUser.EMsg.ClientRequestEncryptedAppTicket, {"app_id": appid, "userdata": userData}, (body) => {
			let err = Helpers.eresultError(body.eresult);
			if (err) {
				return reject(err);
			}

			if (body.app_id != appid) {
				// Don't know if this can even happen
				return reject(new Error("Steam did not send an appticket for the requested appid"));
			}

			if (!body.encrypted_app_ticket) {
				return reject(new Error("No appticket in response"));
			}

			accept({
				"encryptedAppTicket": Messages.encodeProto(Schema.EncryptedAppTicket, body.encrypted_app_ticket)
			});
		});
	});
};

/**
 *
 * @param {Buffer} ticket - The raw encrypted appticket
 * @param {Buffer|string} encryptionKey - The app's encryption key, either raw hex or a Buffer
 * @returns {object}
 */
SteamUser.parseEncryptedAppTicket = AppTicket.parseEncryptedAppTicket;

/**
 * Parse a Steam app or session ticket and return an object containing its details. Static.
 * @param {Buffer|ByteBuffer} ticket - The binary appticket
 * @param {boolean} [allowInvalidSignature=false] - Pass true to get back data even if the ticket has no valid signature.
 * @returns {object|null} - object if well-formed ticket (may not be valid), or null if not well-formed
 */
SteamUser.parseAppTicket = AppTicket.parseAppTicket;

SteamUser.prototype.getAuthSessionTicket = function(appid, callback) {
	return StdLib.Promises.callbackPromise(['appTicket'], callback, (accept, reject) => {
		// For an auth session ticket we need the following:
		// 1. Length-prefixed GCTOKEN
		// 2. Length-prefixed SESSIONHEADER
		// 3. Length-prefixed OWNERSHIPTICKET (yes, even though the ticket itself has a length)
		// The GCTOKEN and SESSIONHEADER portion is passed to ClientAuthList for reuse validation
		this.getAppOwnershipTicket(appid, (err, ticket) => {
			if (err) {
				return reject(err);
			}

			let buildToken = () => {
				let gcToken = this._gcTokens.splice(0, 1)[0];
				let buffer = ByteBuffer.allocate(4 + gcToken.length + 4 + 24 + 4 + ticket.length, ByteBuffer.LITTLE_ENDIAN);
				buffer.writeUint32(gcToken.length);
				buffer.append(gcToken);
				buffer.writeUint32(24); // length of the session header, which is always 24 bytes
				buffer.writeUint32(1); // unknown 1
				buffer.writeUint32(2); // unknown 2
				buffer.writeUint32(StdLib.IPv4.stringToInt(this.publicIP)); // external IP
				buffer.writeUint32(0); // filler
				buffer.writeUint32(Date.now() - this._connectTime); // timestamp
				buffer.writeUint32(++this._connectionCount); // connection count
				buffer.writeUint32(ticket.length);
				buffer.append(ticket);

				buffer = buffer.flip().toBuffer();

				// We need to activate our ticket
				this.validateAuthTickets(appid, buffer, () => {
					accept({"appTicket": buffer});
				});
			};

			// Do we have any GC tokens?
			if (this._gcTokens.length > 0) {
				buildToken();
			} else {
				this.once('_gcTokens', buildToken); // continue once we get some tokens
			}
		});
	});
};

SteamUser.prototype.getAppOwnershipTicket = function(appid, callback) {
	return StdLib.Promises.callbackPromise(['appOwnershipTicket'], callback, async (accept, reject) => {
		// See if we have one saved
		let filename = `appOwnershipTicket_${this.steamID}_${appid}.bin`;
		let file = await this._readFile(filename);
		if (file) {
			let parsed = SteamUser.parseAppTicket(file);
			// Only return the saved ticket if it has a valid signature, expires more than 6 hours from now, and has the same external IP as we have right now.
			if (parsed && parsed.isValid && parsed.ownershipTicketExpires - Date.now() >= (1000 * 60 * 60 * 6) && parsed.ownershipTicketExternalIP == this.publicIP) {
				return accept({"appOwnershipTicket": file});
			}
		}

		// No saved ticket, we'll have to get a new one
		this._send(SteamUser.EMsg.ClientGetAppOwnershipTicket, {"app_id": appid}, async (body) => {
			let err = Helpers.eresultError(body.eresult);
			if (err) {
				return reject(err);
			}

			if (body.app_id != appid) {
				return reject(new Error("Cannot get app ownership ticket"));
			}

			let ticket = body.ticket;
			if (ticket && ticket.length > 10 && this.options.saveAppTickets) {
				await this._saveFile(filename, ticket);
			}

			accept({"appOwnershipTicket": ticket});
		});
	});
};

// TODO: Does this list need to include all the tickets we consider active and valid, regardless of who we are?
// TODO make this internal and only expose an interface for adding/removing tickets
SteamUser.prototype.validateAuthTickets = function(appid, tickets, callback) {
	if (!(tickets instanceof Array)) {
		tickets = [tickets];
	}

	return StdLib.Promises.callbackPromise(null, callback, true, (accept, reject) => {
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
					return reject(new Error("Ticket " + idx + " is invalid"));
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
				"ticket_crc": StdLib.Hashing.crc32(authTicket),
				"ticket": authTicket
			});

			obj.app_ids.push(appid);
		});

		if (tickets.length == 0) {
			obj.app_ids.push(appid); // canceling tickets for this app
		}

		this._send(SteamUser.EMsg.ClientAuthList, obj, (body) => {
			this._authSeqThem = body.message_sequence;
			accept();
		});
	});
};

SteamUser.prototype.cancelAuthTicket = function(appid, callback) {
	return this.validateAuthTickets(appid, [], callback);
};

// Handlers

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientGameConnectTokens, function(body) {
	this.emit('debug', "Received " + body.tokens.length + " game connect tokens");
	body.tokens.forEach((token) => {
		this._gcTokens.push(token);
	});

	this.emit('_gcTokens'); // internal private event
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientTicketAuthComplete, function(body) {
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
});
