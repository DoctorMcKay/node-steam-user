const EventEmitter = require('events').EventEmitter;
const HTTP = require('http');
const Socket = require('net').Socket;
const SteamCrypto = require('@doctormckay/steam-crypto');
const URL = require('url');
const Util = require('util');

module.exports = TCPConnection;

const MAGIC = 'VT01';

Util.inherits(TCPConnection, EventEmitter);

/**
 * Create a new TCP connection, and connect
 * @param {SteamUser} user
 * @constructor
 */
function TCPConnection(user) {
	this.user = user;

	// Pick a CM randomly
	if (!user._cmList || !user._cmList.tcp_servers) {
		throw new Error("Nothing to connect to: " + (user._cmList ? "no TCP server list" : "no CM list"));
	}

	let tcpCm = user._cmList.tcp_servers[Math.floor(Math.random() * user._cmList.tcp_servers.length)];
	user.emit('debug', 'Connecting to TCP CM: ' + tcpCm);
	let cmParts = tcpCm.split(':');
	let cmHost = cmParts[0];
	let cmPort = parseInt(cmParts[1], 10);

	if (user.options.httpProxy) {
		let url = URL.parse(user.options.httpProxy);
		url.method = 'CONNECT';
		url.path = tcpCm;
		url.localAddress = user.options.localAddress;
		url.localPort = user.options.localPort;
		if (url.auth) {
			url.headers = {"Proxy-Authorization": "Basic " + (new Buffer(url.auth, 'utf8')).toString('base64')};
			delete url.auth;
		}

		let connectionEstablished = false;
		let req = HTTP.request(url);
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
			"port": cmPort,
			"host": cmHost,
			"localAddress": user.options.localAddress,
			"localPort": user.options.localPort
		});
		
		this.stream.setTimeout(this.user._connectTimeout);
	}
}

/**
 * Set up the stream with event handlers
 * @private
 */
TCPConnection.prototype._setupStream = function() {
	let debug = (msg) => {
		this.user.emit('debug', msg);
	};

	this.stream.on('readable', this._readMessage.bind(this));
	this.stream.on('error', (err) => debug('TCP connection error: ' + err.message)); // "close" will be emitted and we'll reconnect
	this.stream.on('end', () => debug('TCP connection ended'));
	this.stream.on('close', this.user._handleConnectionClose.bind(this.user));

	this.stream.on('connect', () => {
		this.user.emit('debug', 'TCP connection established');
		this.stream.setTimeout(Math.min(this.user._connectTimeout, 2000)); // give the CM max 2 seconds to send ChannelEncryptRequest
	});

	this.stream.on('timeout', () => {
		this.user.emit('debug', 'TCP connection timed out');
		this.user._connectTimeout = Math.min(this.user._connectTimeout * 2, 10000); // 10 seconds max
		this.end(true);
		this.user._doConnection();
	});
};

/**
 * End the connection
 * @param {boolean} [andIgnore=false] - Pass true to also ignore all further events from this connection
 */
TCPConnection.prototype.end = function(andIgnore) {
	if (this.stream) {
		if (andIgnore) {
			this.removeAllListeners();
			this.stream.removeAllListeners();
			this.stream.on('error', () => {});
		}

		this.stream.end();
		if (andIgnore) {
			this.stream.destroy();
		}
	}
};

/**
 * Send data over the connection
 * @param {Buffer} data
 */
TCPConnection.prototype.send = function(data) {
	if (this.sessionKey) {
		data = SteamCrypto.symmetricEncryptWithHmacIv(data, this.sessionKey);
	}

	let buf = Buffer.alloc(4 + 4 + data.length);
	buf.writeUInt32LE(data.length, 0);
	buf.write(MAGIC, 4);
	data.copy(buf, 8);
	this.stream.write(buf);
};

/**
 * Try to read a message from the socket
 * @private
 */
TCPConnection.prototype._readMessage = function() {
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
		}
	}

	let message = this.stream.read(this._messageLength);
	if (!message) {
		this.user.emit('debug', 'Got incomplete message; expecting ' + this._messageLength + ' more bytes');
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
		}
	}

	// noinspection JSAccessibilityCheck
	this.user._handleNetMessage(message);
	this._readMessage();
};
