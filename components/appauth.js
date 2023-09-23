const AppTicket = require('steam-appticket');
const ByteBuffer = require('bytebuffer');
const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');
const Schema = require('../protobufs/generated/_load.js');

const EAuthSessionResponse = require('../enums/EAuthSessionResponse');
const EMsg = require('../enums/EMsg.js');

const SteamUserBase = require('./00-base.js');
const SteamUserAccount = require('./account.js');

class SteamUserAppAuth extends SteamUserAccount {
	/**
	 * Request an encrypted appticket for a particular app. The app must be set up on the Steam backend for encrypted apptickets.
	 * @param {int} appid - The Steam AppID of the app you want a ticket for
	 * @param {Buffer} [userData] - If the app expects some "user data", provide it here
	 * @param {function} [callback] - First argument is "err", second is the ticket as a Buffer (on success)
	 * @return {Promise}
	 */
	createEncryptedAppTicket(appid, userData, callback) {
		if (typeof userData === 'function') {
			callback = userData;
			userData = Buffer.alloc(0);
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, ['encryptedAppTicket'], callback, (resolve, reject) => {
			this._send(EMsg.ClientRequestEncryptedAppTicket, {
				app_id: appid,
				userdata: userData
			}, (body) => {
				let err = Helpers.eresultError(body.eresult);
				if (err) {
					return reject(err);
				}

				if (body.app_id != appid) {
					// Don't know if this can even happen
					return reject(new Error('Steam did not send an appticket for the requested appid'));
				}

				if (!body.encrypted_app_ticket) {
					return reject(new Error('No appticket in response'));
				}

				resolve({
					encryptedAppTicket: SteamUserAppAuth._encodeProto(Schema.EncryptedAppTicket, body.encrypted_app_ticket)
				});
			});
		});
	}

	/**
	 * Request an encrypted appticket for a particular app. The app must be set up on the Steam backend for encrypted apptickets.
	 * @param {int} appid - The Steam AppID of the app you want a ticket for
	 * @param {Buffer} [userData] - If the app expects some "user data", provide it here
	 * @param {function} [callback] - First argument is "err", second is the ticket as a Buffer (on success)
	 * @return {Promise}
	 * @deprecated Use createEncryptedAppTicket instead
	 */
	getEncryptedAppTicket(appid, userData, callback) {
		return this.createEncryptedAppTicket(appid, userData, callback);
	}

	/**
	 *
	 * @param {Buffer} ticket - The raw encrypted appticket
	 * @param {Buffer|string} encryptionKey - The app's encryption key, either raw hex or a Buffer
	 * @returns {object}
	 */
	static parseEncryptedAppTicket(ticket, encryptionKey) {
		return AppTicket.parseEncryptedAppTicket(ticket, encryptionKey);
	}

	/**
	 * Parse a Steam app or session ticket and return an object containing its details. Static.
	 * @param {Buffer|ByteBuffer} ticket - The binary appticket
	 * @param {boolean} [allowInvalidSignature=false] - Pass true to get back data even if the ticket has no valid signature.
	 * @returns {object|null} - object if well-formed ticket (may not be valid), or null if not well-formed
	 */
	static parseAppTicket(ticket, allowInvalidSignature) {
		return AppTicket.parseAppTicket(ticket, allowInvalidSignature);
	}

	createAuthSessionTicket(appid, callback) {
		return StdLib.Promises.callbackPromise(['sessionTicket'], callback, (resolve, reject) => {
			// For an auth session ticket we need the following:
			// 1. Length-prefixed GCTOKEN
			// 2. Length-prefixed SESSIONHEADER
			// 3. Length-prefixed OWNERSHIPTICKET (yes, even though the ticket itself has a length)
			// The GCTOKEN and SESSIONHEADER portion is passed to ClientAuthList for reuse validation
			this.getAppOwnershipTicket(appid, (err, ticket) => {
				if (err) {
					return reject(err);
				}

				let buildToken = async (err) => {
					if (err) {
						return reject(err);
					}

					let gcToken = this._gcTokens.splice(0, 1)[0];
					this.emit('debug', `Using GC token ${gcToken.toString('hex')}. We now have ${this._gcTokens.length} tokens left.`);
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

					try {
						// We need to activate our ticket
						await this.activateAuthSessionTickets(appid, buffer);
						resolve({sessionTicket: buffer});
					} catch (err) {
						reject(err);
					}
				};

				// Do we have any GC tokens?
				if (this._gcTokens.length > 0) {
					buildToken();
				} else {
					Helpers.onceTimeout(10000, this, '_gcTokens', buildToken);
				}
			});
		});
	}

	getAppOwnershipTicket(appid, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['appOwnershipTicket'], callback, async (resolve, reject) => {
			// See if we have one saved
			let filename = `appOwnershipTicket_${this.steamID}_${appid}.bin`;
			let file = await this._readFile(filename);
			if (file) {
				let parsed = AppTicket.parseAppTicket(file);
				// Only return the saved ticket if it has a valid signature, expires more than 6 hours from now, and has the same external IP as we have right now.
				if (parsed && parsed.isValid && parsed.ownershipTicketExpires - Date.now() >= (1000 * 60 * 60 * 6) && parsed.ownershipTicketExternalIP == this.publicIP) {
					return resolve({appOwnershipTicket: file});
				}
			}

			// No saved ticket, we'll have to get a new one
			this._send(EMsg.ClientGetAppOwnershipTicket, {app_id: appid}, async (body) => {
				let err = Helpers.eresultError(body.eresult);
				if (err) {
					return reject(err);
				}

				if (body.app_id != appid) {
					return reject(new Error('Cannot get app ownership ticket'));
				}

				let ticket = body.ticket;
				if (ticket && ticket.length > 10 && this.options.saveAppTickets) {
					await this._saveFile(filename, ticket);
				}

				resolve({appOwnershipTicket: ticket});
			});
		});
	}

	activateAuthSessionTickets(appid, tickets, callback) {
		if (!Array.isArray(tickets)) {
			tickets = [tickets];
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, async (resolve, reject) => {
			tickets.forEach((ticket, idx) => {
				if (ticket instanceof Buffer) {
					ticket = AppTicket.parseAppTicket(ticket);
				}

				if (!ticket || !ticket.isValid || !Buffer.isBuffer(ticket.authTicket)) {
					let invalidReason = 'is invalid';
					if (ticket.isExpired) {
						invalidReason = 'is expired';
					}
					if (!ticket.hasValidSignature) {
						invalidReason = ticket.signature ? 'has an invalid signature' : 'has no signature';
					}

					return reject(new Error(`Ticket ${idx} ${invalidReason}`));
				}

				// Make sure this is for the game we expect
				if (ticket.appID != appid) {
					return reject(new Error(`Ticket ${idx} is for the wrong app: ${ticket.appID}`));
				}

				let sid = ticket.steamID.getSteamID64();

				let isOurTicket = (sid == this.steamID.getSteamID64());
				let thisTicket = {
					estate: isOurTicket ? 0 : 1,
					steamid: isOurTicket ? 0 : sid,
					gameid: ticket.appID,
					h_steam_pipe: this._hSteamPipe,
					ticket_crc: StdLib.Hashing.crc32(ticket.authTicket),
					ticket: ticket.authTicket
				};

				// Check if this ticket is already active
				if (this._activeAuthTickets.find(tkt => tkt.steamid == thisTicket.steamid && tkt.ticket_crc == thisTicket.ticket_crc)) {
					this.emit('debug', `Not attempting to activate already active ticket ${thisTicket.ticket_crc} for ${appid}/${isOurTicket ? 'self' : sid}`);
					return;
				}

				// If we already have an active ticket for this appid/steamid combo, remove it, but not if it's our own
				if (!isOurTicket) {
					let existingTicketIdx = this._activeAuthTickets.findIndex(tkt => tkt.steamid == thisTicket.steamid && tkt.gameid == thisTicket.gameid);
					if (existingTicketIdx != -1) {
						let existingTicket = this._activeAuthTickets[existingTicketIdx];
						this.emit('debug', `Canceling existing ticket ${existingTicket.ticket_crc} for ${existingTicket.gameid}/${existingTicket.steamid}`);
						this._activeAuthTickets.splice(existingTicketIdx, 1);
					}
				}

				this._activeAuthTickets.push(thisTicket);
			});

			await this._sendAuthList();
			resolve();
		});
	}

	/**
	 * Cancel your own auth session tickets. Once canceled, every client that activated your ticket will receive a
	 * notification that your ticket has been canceled. If you are still in-game, they will probably kick you.
	 * @param {number} appid
	 * @param {string[]|string|null} [gcTokens=null] - The gcToken from the specific ticket(s) you want to cancel. Omit or pass null to cancel all active tickets.
	 * @param {function} callback
	 * @returns {Promise}
	 */
	cancelAuthSessionTickets(appid, gcTokens, callback) {
		if (typeof gcTokens == 'function') {
			callback = gcTokens;
			gcTokens = null;
		}

		if (typeof gcTokens == 'string') {
			gcTokens = [gcTokens];
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, async (resolve) => {
			let matchingTickets = this._activeAuthTickets.filter(tkt => tkt.steamid == 0 && tkt.gameid == appid);
			if (gcTokens) {
				matchingTickets = matchingTickets.filter((tkt) => {
					let authTicket = ByteBuffer.wrap(tkt.ticket, ByteBuffer.LITTLE_ENDIAN);
					authTicket.skip(4);
					let gcToken = authTicket.readUint64();
					return gcTokens.includes(gcToken);
				});
			}

			this.emit('debug', `Got ${matchingTickets.length} matching tickets to cancel`);
			let canceledTicketCount = matchingTickets.length;
			while (matchingTickets.length > 0) {
				let ticket = matchingTickets.splice(0, 1)[0];
				let idx = this._activeAuthTickets.indexOf(ticket);
				if (idx != -1) {
					this._activeAuthTickets.splice(idx, 1);
				}
			}

			await this._sendAuthList(appid);
			resolve({canceledTicketCount});
		});
	}

	/**
	 * Ends our auth sessions with other users. Once ended, we will no longer receive notifications when users' auth session
	 * tickets are canceled or otherwise invalidated. If we've already been notified that a ticket was canceled or invalidated,
	 * the session was already automatically ended.
	 * @param {number} appid
	 * @param {null|string|string[]|SteamID|SteamID[]} steamIDs - SteamID objects or strings that can parse into SteamIDs. Null or omit to cancel all auth sessions for the app.
	 * @param {function} callback
	 * @returns {Promise}
	 */
	endAuthSessions(appid, steamIDs, callback) {
		if (typeof steamIDs == 'function') {
			callback = steamIDs;
			steamIDs = null;
		}

		if (steamIDs && !Array.isArray(steamIDs)) {
			steamIDs = [steamIDs];
		}

		return StdLib.Promises.timeoutCallbackPromise(10000, null, callback, true, async (resolve) => {
			let matchingTickets = this._activeAuthTickets.filter(tkt => tkt.gameid == appid && tkt.steamid != 0);
			if (steamIDs) {
				steamIDs = steamIDs.map(Helpers.steamID).map(sid => sid.getSteamID64());
				matchingTickets = matchingTickets.filter(tkt => steamIDs.includes(tkt.steamid));
			}

			this.emit('debug', `Got ${matchingTickets.length} matching tickets to end auth sessions for`);
			let canceledTicketCount = matchingTickets.length;
			while (matchingTickets.length > 0) {
				let ticket = matchingTickets.splice(0, 1)[0];
				let idx = this._activeAuthTickets.indexOf(ticket);
				if (idx != -1) {
					this._activeAuthTickets.splice(idx, 1);
				}
			}

			await this._sendAuthList(appid);
			resolve({canceledTicketCount});
		});
	}

	getActiveAuthSessionTickets() {
		return this._activeAuthTickets.map((ticket) => {
			let authTicket = ByteBuffer.wrap(ticket.ticket, ByteBuffer.LITTLE_ENDIAN);
			authTicket.skip(4);
			let gcToken = authTicket.readUint64();

			return {
				appID: ticket.gameid,
				steamID: ticket.steamid == 0 ? this.steamID : Helpers.steamID(ticket.steamid),
				ticketCrc: ticket.ticket_crc,
				gcToken,
				validated: ticket.estate > 1
			};
		});
	}

	_sendAuthList(forceAppId) {
		return StdLib.Promises.timeoutPromise(10000, (resolve) => {
			let uniqueAppIds = this._activeAuthTickets.map(tkt => tkt.gameid).filter((appid, idx, arr) => arr.indexOf(appid) == idx);
			if (forceAppId && !uniqueAppIds.includes(forceAppId)) {
				uniqueAppIds.push(forceAppId);
			}

			this.emit('debug', `Sending auth list with ${this._activeAuthTickets.length} active tickets`);

			this._send(EMsg.ClientAuthList, {
				tokens_left: this._gcTokens ? this._gcTokens.length : 0,
				last_request_seq: this._authSeqMe,
				last_request_seq_from_server: this._authSeqThem,
				tickets: this._activeAuthTickets,
				app_ids: uniqueAppIds,
				message_sequence: ++this._authSeqMe
			}, (body) => {
				this._authSeqThem = body.message_sequence;
				resolve();
			});
		});
	}
}

SteamUserBase.prototype._handlerManager.add(EMsg.ClientGameConnectTokens, function(body) {
	this.emit('debug', `Received ${body.tokens.length} game connect tokens. Had ${this._gcTokens.length} tokens.`);
	body.tokens.forEach((token) => {
		this._gcTokens.push(token);
	});

	this.emit('_gcTokens'); // internal private event
});

SteamUserBase.prototype._handlerManager.add(EMsg.ClientTicketAuthComplete, function(body) {
	// First find the ticket in our local cache that matches this crc
	let idx = this._activeAuthTickets.findIndex(tkt => tkt.ticket_crc == body.ticket_crc);
	if (idx == -1) {
		this.emit('debug', `Cannot find CRC ${body.ticket_crc} for ticket from user ${body.steam_id} with state ${body.eauth_session_response}`);
		return;
	}

	let cacheTicket = this._activeAuthTickets[idx];

	// If the auth session response is anything besides OK, we need to remove the ticket from our auth list
	if (body.eauth_session_response != EAuthSessionResponse.OK) {
		this._activeAuthTickets.splice(idx, 1);
		this.emit('debug', `Removed canceled ticket ${body.ticket_crc} with state ${body.eauth_session_response}. Now have ${this._activeAuthTickets.length} active tickets.`);
	}

	// Update the cached ticket's state
	cacheTicket.estate = body.estate;

	// Get the GC token
	let authTicket = ByteBuffer.wrap(cacheTicket.ticket, ByteBuffer.LITTLE_ENDIAN);
	authTicket.skip(4);
	let ticketGcToken = authTicket.readUint64();

	let eventBody = {
		steamID: new SteamID(body.steam_id.toString()), // if our own ticket, this is the steamid that just validated it
		appOwnerSteamID: body.owner_steam_id.toString() == '0' ? null : new SteamID(body.owner_steam_id.toString()),
		appID: parseInt(body.game_id.toString(), 10),
		ticketCrc: body.ticket_crc,
		ticketGcToken,
		state: body.estate,
		authSessionResponse: body.eauth_session_response
	};

	this.emit(cacheTicket.steamid == 0 ? 'authTicketStatus' : 'authTicketValidation', eventBody);
});

module.exports = SteamUserAppAuth;
