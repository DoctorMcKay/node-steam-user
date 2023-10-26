const HTTP = require('http');
const Socket = require('net').Socket;
const SteamCrypto = require('@doctormckay/steam-crypto');
const {URL} = require('url');

const BaseConnection = require('./base.js');

const MAGIC = 'VT01';

/**
 * @typedef CmServer
 * @property {string} endpoint
 * @property {string} legacy_endpoint
 * @property {string} type
 * @property {string} dc
 * @property {string} realm
 * @property {string} load
 * @property {string} wtd_load
 */

class TCPConnection extends BaseConnection {
	/**
	 * Create a new TCP connection, and connect
	 * @param {SteamUser} user
	 * @param {CmServer} chosenServer
	 * @constructor
	 */
	constructor(user, chosenServer) {
		super(user);

		this.connectionType = 'TCP';
		this.sessionKey = null;

		this._debug('Connecting to TCP CM: ' + chosenServer.endpoint);
		let cmParts = chosenServer.endpoint.split(':');
		let cmHost = cmParts[0];
		let cmPort = parseInt(cmParts[1], 10);

		if (user.options.httpProxy) {
			let url = new URL(user.options.httpProxy);
			let prox = {
				protocol: url.protocol,
				host: url.hostname,
				port: url.port,

				method: 'CONNECT',
				path: chosenServer.endpoint,
				localAddress: user.options.localAddress,
				localPort: user.options.localPort
			};
			if (url.username) {
				prox.headers = {
					'Proxy-Authorization': `Basic ${(Buffer.from(`${url.username}:${url.password || ''}`, 'utf8')).toString('base64')}`
				};
			}

			let connectionEstablished = false;
			let req = HTTP.request(prox);
			req.end();
			req.setTimeout(user.options.proxyTimeout || 5000);
			req.on('connect', (res, socket) => {
				if (connectionEstablished) {
					// somehow we're already connected, or we aborted
					socket.end();
					return;
				}

				connectionEstablished = true;
				req.setTimeout(0); // disable timeout

				if (res.statusCode != 200) {
					this.user.emit('error', new Error('HTTP CONNECT ' + res.statusCode + ' ' + res.statusMessage));
					return;
				}

				this.stream = socket;
				this._setupStream();
			});

			req.on('timeout', () => {
				connectionEstablished = true;
				this.user.emit('error', new Error('Proxy connection timed out'));
			});

			req.on('error', (err) => {
				connectionEstablished = true;
				this.user.emit('error', err);
			});
		} else {
			let socket = new Socket();
			this.stream = socket;
			this._setupStream();

			socket.connect({
				port: cmPort,
				host: cmHost,
				localAddress: user.options.localAddress,
				localPort: user.options.localPort
			});

			this.stream.setTimeout(this.user._connectTimeout);
		}
	}

	/**
	 * Set up the stream with event handlers
	 * @private
	 */
	_setupStream() {
		this.stream.on('readable', this._readMessage.bind(this));
		this.stream.on('error', (err) => this._debug('TCP connection error: ' + err.message)); // "close" will be emitted and we'll reconnect
		this.stream.on('end', () => this._debug('TCP connection ended'));
		this.stream.on('close', () => this.user._handleConnectionClose(this));

		this.stream.on('connect', () => {
			this._debug('TCP connection established');
			this.stream.setTimeout(Math.min(this.user._connectTimeout, 2000)); // give the CM max 2 seconds to send ChannelEncryptRequest
		});

		this.stream.on('timeout', () => {
			this._debug('TCP connection timed out');
			this.user._connectTimeout = Math.min(this.user._connectTimeout * 2, 10000); // 10 seconds max
			this.end(true);
			this.user._doConnection();
		});
	}

	/**
	 * End the connection
	 * @param {boolean} [andIgnore=false] - Pass true to also ignore all further events from this connection
	 */
	end(andIgnore) {
		if (this.stream) {
			this._debug('Ending connection' + (andIgnore ? ' and removing all listeners' : ''));

			if (andIgnore) {
				this.removeAllListeners();
				this.stream.removeAllListeners();
				this.stream.on('error', () => {
				});
			}

			this.stream.end();
			if (andIgnore) {
				this.stream.destroy();
			}
		} else {
			this._debug('We wanted to end connection, but there is no stream');
		}
	}

	/**
	 * Send data over the connection
	 * @param {Buffer} data
	 */
	send(data) {
		if (this.sessionKey) {
			data = SteamCrypto.symmetricEncryptWithHmacIv(data, this.sessionKey);
		}

		let buf = Buffer.alloc(4 + 4 + data.length);
		buf.writeUInt32LE(data.length, 0);
		buf.write(MAGIC, 4);
		data.copy(buf, 8);
		this.stream.write(buf);
	}

	/**
	 * Try to read a message from the socket
	 * @private
	 */
	_readMessage() {
		if (!this._messageLength) {
			// We are not in the middle of a message, so the next thing on the wire should be a header
			let header = this.stream.read(8);
			if (!header) {
				return; // maybe we should tear down the connection here
			}

			this._messageLength = header.readUInt32LE(0);
			if (header.slice(4).toString('ascii') != MAGIC) {
				// We definitely need to tear down the connection here
				this.user.emit('error', new Error('Connection out of sync'));
				// noinspection JSAccessibilityCheck
				this.user._disconnect(true);
				return;
			}
		}

		let message = this.stream.read(this._messageLength);
		if (!message) {
			this._debug('Got incomplete message; expecting ' + this._messageLength + ' more bytes');
			return;
		}

		delete this._messageLength;
		if (this.sessionKey) {
			try {
				message = SteamCrypto.symmetricDecrypt(message, this.sessionKey, true);
			} catch (ex) {
				this.user.emit('error', new Error('Encrypted message authentication failed'));
				// noinspection JSAccessibilityCheck
				this.user._disconnect(true);
				return;
			}
		}

		// noinspection JSAccessibilityCheck
		this.user._handleNetMessage(message, this);
		this._readMessage();
	}
}

module.exports = TCPConnection;
