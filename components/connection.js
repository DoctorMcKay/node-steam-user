const BufferCRC32 = require('buffer-crc32');
const ByteBuffer = require('bytebuffer');
const SteamCrypto = require('@doctormckay/steam-crypto');

const TCPConnection = require('./connection_protocols/tcp.js');
const SteamUser = require('../index.js');

SteamUser.prototype._handleConnectionClose = function() {
	if (!this.steamID) {
		// connection closed while connecting; reconnect
		this._doConnection();
	} else {
		// connection closed while we were connected; fire logoff
		this._handleLogOff(SteamUser.EResult.NoConnection, "NoConnection");
	}
};

// Handlers

SteamUser.prototype._handlers[SteamUser.EMsg.ChannelEncryptRequest] = function(body) {
	this._connection.stream.setTimeout(0);

	let protocol = body.readUint32();
	let universe = body.readUint32();
	let nonce = body.slice(body.offset, body.offset + 16).toBuffer();
	body.skip(16);

	this.emit('debug', `Channel encrypt request: protocol ${protocol}, universe ${universe}, nonce ${nonce.toString('hex')}, ${body.remaining()} remaining bytes`);

	let sessionKey = SteamCrypto.generateSessionKey(nonce);
	this._connection._tempSessionKey = sessionKey.plain;
	let keyCrc = BufferCRC32.signed(sessionKey.encrypted);

	let encResp = ByteBuffer.allocate(4 + 4 + sessionKey.encrypted.length + 4 + 4, ByteBuffer.LITTLE_ENDIAN);
	encResp.writeUint32(protocol);
	encResp.writeUint32(sessionKey.encrypted.length); // key size
	encResp.append(sessionKey.encrypted);
	encResp.writeInt32(keyCrc);
	encResp.writeUint32(0);
	encResp.flip();

	this._send(SteamUser.EMsg.ChannelEncryptResponse, encResp);
	this._connection.stream.setTimeout(1000);
};

SteamUser.prototype._handlers[SteamUser.EMsg.ChannelEncryptResult] = function(body) {
	this._connection.stream.setTimeout(0);

	let eresult = body.readUint32();
	if (eresult != SteamUser.EResult.OK) {
		this.emit('error', 'Encryption failed: ' + eresult);
		this._disconnect(true); // TODO: Make sure this doesn't emit "disconnected"
		return;
	}

	this._connection.sessionKey = this._connection._tempSessionKey;
	delete this._connection._tempSessionKey;

	this.emit('Encryption success; now logging on');
	this._send(this._logOnDetails.game_server_token ? SteamUser.EMsg.ClientLogonGameServer : SteamUser.EMsg.ClientLogon, this._logOnDetails);
};
