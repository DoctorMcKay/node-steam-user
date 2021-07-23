const ByteBuffer = require('bytebuffer');
const StdLib = require('@doctormckay/stdlib');
const SteamCrypto = require('@doctormckay/steam-crypto');

const SteamUser = require('../index.js');

/**
 * Handle the closure of our underlying connection.
 * @param {BaseConnection} conn
 * @private
 */
SteamUser.prototype._handleConnectionClose = function(conn) {
	let connPrefix = conn.connectionType[0] + conn.connectionId;

	// If the message queue is currently enabled, we need to enqueue processing of the connection close.
	// Otherwise we might handle the closed connection too early, e.g. before processing ClientLogOnResponse
	if (this._useMessageQueue) {
		this.emit('debug', `[${connPrefix}] Connection closed, but message queue is active. Enqueueing __CLOSE__`);
		this._incomingMessageQueue.push(['__CLOSE__', conn]);
		return;
	}

	this.emit('debug', `[${connPrefix}] Handling connection close`);

	clearTimeout(this._logonMsgTimeout);
	delete this._logonMsgTimeout;

	if (!this.steamID) {
		// connection closed while connecting; reconnect
		clearInterval(this._heartbeatInterval);
		setTimeout(() => this._doConnection(), 1000);
	} else {
		// connection closed while we were connected; fire logoff
		this._handleLogOff(SteamUser.EResult.NoConnection, 'NoConnection');
	}
};

// Handlers

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ChannelEncryptRequest, function(body) {
	if (!this._connection || !this._connection.stream) { // cannot begin login without a socket, abort
		return;
	}

	this._connection.stream.setTimeout(0);

	let protocol = body.readUint32();
	let universe = body.readUint32();
	let nonce = body.slice(body.offset, body.offset + 16).toBuffer();
	body.skip(16);

	this.emit('debug', `Channel encrypt request: protocol ${protocol}, universe ${universe}, nonce ${nonce.toString('hex')}, ${body.remaining()} remaining bytes`);

	let sessionKey = SteamCrypto.generateSessionKey(nonce);
	this._connection._tempSessionKey = sessionKey.plain;
	let keyCrc = StdLib.Hashing.crc32(sessionKey.encrypted);

	let encResp = ByteBuffer.allocate(4 + 4 + sessionKey.encrypted.length + 4 + 4, ByteBuffer.LITTLE_ENDIAN);
	encResp.writeUint32(protocol);
	encResp.writeUint32(sessionKey.encrypted.length); // key size
	encResp.append(sessionKey.encrypted);
	encResp.writeUint32(keyCrc);
	encResp.writeUint32(0);
	encResp.flip();

	this._send(SteamUser.EMsg.ChannelEncryptResponse, encResp);
	this._connection.stream.setTimeout(1000);
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ChannelEncryptResult, function(body) {
	this._connection.stream.setTimeout(0);

	let eresult = body.readUint32();
	if (eresult != SteamUser.EResult.OK) {
		this.emit('error', new Error('Encryption failed: ' + eresult));
		this._disconnect(true);
		return;
	}

	this._connection.sessionKey = this._connection._tempSessionKey;
	delete this._connection._tempSessionKey;

	this.emit('Encryption success; now logging on');
	this._sendLogOn();
});
