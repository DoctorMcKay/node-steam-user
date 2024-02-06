const ByteBuffer = require('bytebuffer');
const {SocksProxyAgent} = require('socks-proxy-agent');
const StdLib = require('@doctormckay/stdlib');
const SteamCrypto = require('@doctormckay/steam-crypto');

const EMsg = require('../enums/EMsg.js');
const EResult = require('../enums/EResult.js');

const SteamUserBase = require('./00-base.js');
const SteamUserEnums = require('./01-enums.js');

class SteamUserConnection extends SteamUserEnums {
	/**
	 * Handle the closure of our underlying connection.
	 * @param {BaseConnection} conn
	 * @protected
	 */
	_handleConnectionClose(conn) {
		let connPrefix = conn.connectionType[0] + conn.connectionId;

		// If the message queue is currently enabled, we need to enqueue processing of the connection close.
		// Otherwise we might handle the closed connection too early, e.g. before processing ClientLogOnResponse
		if (this._useMessageQueue) {
			this.emit('debug', `[${connPrefix}] Connection closed, but message queue is active. Enqueueing __CLOSE__`);
			this._incomingMessageQueue.push(['__CLOSE__', conn]);
			return;
		}

		this.emit('debug', `[${connPrefix}] Handling connection close`);
		if (this._loggingOff) {
			// We want to bail, so call _handleLogOff now (normally it's called at the end)
			this._handleLogOff(EResult.NoConnection, 'Logged off');
			return;
		}

		this._cleanupClosedConnection();

		if (!this.steamID) {
			// connection closed while connecting; reconnect

			if (this._lastChosenCM) {
				// Blacklist this CM from subsequent connection attempts
				this._ttlCache.add(`CM_DQ_${this._lastChosenCM.type}_${this._lastChosenCM.endpoint}`, 1, 1000 * 60 * 2);
			}

			// We save this timeout reference because it's possible that we handle connection close before we fully handle
			// a logon response. In that case, we'll cancel this timeout when we handle the logon response.
			// This isn't an issue in the reverse case, since a handled logon response will tear down the connection and
			// remove all listeners.
			this._reconnectForCloseDuringAuthTimeout = setTimeout(() => this._doConnection(), 1000);
		} else {
			// connection closed while we were connected; fire logoff
			this._handleLogOff(EResult.NoConnection, 'NoConnection');
		}
	}

	_cleanupClosedConnection() {
		this._connecting = false;
		this._loggingOff = false;

		this._cancelReconnectTimers();
		clearInterval(this._heartbeatInterval);

		this._incomingMessageQueue = []; // clear the incoming message queue. If we're disconnecting, we don't care about anything else in the queue.

		this._clearChangelistUpdateTimer();
	}

	_cancelReconnectTimers() {
		clearTimeout(this._logonTimeout);
		clearTimeout(this._logonMsgTimeout);
		clearTimeout(this._reconnectForCloseDuringAuthTimeout);
	}

	_getProxyAgent() {
		if (this.options.socksProxy && this.options.httpProxy) {
			throw new Error('Cannot specify both socksProxy and httpProxy options');
		}

		if (this.options.socksProxy) {
			return new SocksProxyAgent(this.options.socksProxy);
		}

		if (this.options.httpProxy) {
			return StdLib.HTTP.getProxyAgent(true, this.options.httpProxy);
		}

		return undefined;
	}
}

// Handlers

SteamUserBase.prototype._handlerManager.add(EMsg.ChannelEncryptRequest, function(body) {
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

	this._send(EMsg.ChannelEncryptResponse, encResp);
	this._connection.stream.setTimeout(1000);
});

SteamUserBase.prototype._handlerManager.add(EMsg.ChannelEncryptResult, function(body) {
	this._connection.stream.setTimeout(0);

	let eresult = body.readUint32();
	if (eresult != EResult.OK) {
		this.emit('error', new Error('Encryption failed: ' + eresult));
		this._disconnect(true);
		return;
	}

	this._connection.sessionKey = this._connection._tempSessionKey;
	delete this._connection._tempSessionKey;

	this.emit('Encryption success; now logging on');
	this._sendLogOn();
});

module.exports = SteamUserConnection;
