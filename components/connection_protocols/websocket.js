const HTTPS = require('https');
const WS13 = require('websocket13');

const BaseConnection = require('./base.js');

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

class WebSocketConnection extends BaseConnection {
	/**
	 * @param {SteamUser} user
	 * @param {CmServer} chosenServer
	 */
	constructor(user, chosenServer) {
		super(user);

		this.connectionType = 'WS';

		let addr = chosenServer.endpoint;
		this._debug(`Connecting to WebSocket CM ${addr}`);
		this.stream = new WS13.WebSocket(`wss://${addr}/cmsocket/`, {
			pingInterval: 30000,
			proxyTimeout: this.user.options.proxyTimeout,
			connection: {
				localAddress: this.user.options.localAddress,
				agent: this.user._getProxyAgent()
			}
		});

		// Set up the connection timeout
		this.stream.setTimeout(this.user._connectTimeout);

		this.stream.on('debug', msg => this._debug(msg, true));
		this.stream.on('message', this._readMessage.bind(this));

		this.stream.on('disconnected', (code, reason) => {
			if (this._disconnected) {
				return;
			}

			this._disconnected = true;
			this._debug('WebSocket disconnected with code ' + code + ' and reason: ' + reason);
			this.user._handleConnectionClose(this);
		});

		this.stream.on('error', (err) => {
			if (this._disconnected) {
				return;
			}

			this._disconnected = true;
			this._debug('WebSocket disconnected with error: ' + err.message);

			if (err.proxyConnecting || err.constructor.name == 'SocksClientError') {
				// This error happened while connecting to the proxy
				this.user.emit('error', err);
			} else {
				this.user._handleConnectionClose(this);
			}
		});

		this.stream.on('connected', () => {
			this._debug('WebSocket connection success; now logging in');
			this.stream.setTimeout(0); // Disable timeout
			this.user._sendLogOn();
		});

		this.stream.on('timeout', () => {
			if (this._disconnected) {
				return;
			}

			this._disconnected = true;
			this._debug('WS connection timed out');
			this.user._connectTimeout = Math.min(this.user._connectTimeout * 2, 10000); // 10 seconds max
			this.stream.disconnect();
			this.user._doConnection();
		});
	}

	/**
	 * End the connection
	 * @param {boolean} [andIgnore=false] - Pass true to also ignore all further events from this connection
	 */
	end(andIgnore) {
		if (this.stream && [WS13.State.Connected, WS13.State.Connecting].indexOf(this.stream.state) != -1) {
			this._debug('Ending connection' + (andIgnore ? ' and removing all listeners' : ''));

			if (andIgnore) {
				this.stream.removeAllListeners();
				this.stream.on('error', () => {
				});
			}

			this.stream.disconnect();
		} else {
			this._debug('We wanted to end connection, but it\'s not connected or connecting');
		}
	}

	/**
	 * Send data over the connection.
	 * @param {Buffer} data
	 */
	send(data) {
		if (this._disconnected) {
			return;
		}

		try {
			this.stream.send(data);
		} catch (ex) {
			this._debug('WebSocket send error: ' + ex.message);
			try {
				this._disconnected = true;
				this.stream.disconnect(WS13.StatusCode.AbnormalTermination);
				this.user._handleConnectionClose(this);
			} catch (ex) {
				this._debug('WebSocket teardown error: ' + ex.message);
			}
		}
	}

	/**
	 * Read a message from the WebSocket
	 * @param {int} type
	 * @param {string|Buffer} msg
	 * @private
	 */
	_readMessage(type, msg) {
		if (type != WS13.FrameType.Data.Binary) {
			this._debug('Got frame with wrong data type: ' + type);
			return;
		}

		this.user._handleNetMessage(msg, this);
	}

	/**
	 * Ping a CM and return its load and latency
	 * @param addr
	 * @param callback
	 * @private
	 */
	_pingCM(addr, callback) {
		let host = addr.split(':')[0];
		let port = parseInt(addr.split(':')[1] || '443', 10);
		let options = {
			host,
			port,
			timeout: 700,
			path: '/cmping/',
			agent: this.user._getProxyAgent()
		};

		// The timeout option seems to not work
		let finished = false;
		let timeout = setTimeout(() => {
			if (finished) {
				return;
			}

			this._debug(`CM ${addr} timed out`, true);
			callback(new Error(`CM ${addr} timed out`));
			finished = true;
		}, 700);

		let start = Date.now();
		HTTPS.get(options, (res) => {
			clearTimeout(timeout);
			if (finished) {
				return;
			}

			let latency = Date.now() - start;

			res.on('data', () => {
			}); // there is no body, so just throw it away

			if (res.statusCode != 200) {
				// CM is disqualified
				this._debug(`CM ${addr} disqualified: HTTP error ${res.statusCode}`, true);
				callback(new Error(`CM ${addr} disqualified: HTTP error ${res.statusCode}`));
				return;
			}

			let load = parseInt(res.headers['x-steam-cmload'], 10) || 999;
			this._debug(`CM ${addr} latency ${latency} ms + load ${load}`, true);
			callback(null, {addr, load, latency});
		}).on('error', (err) => {
			clearTimeout(timeout);
			if (!finished) {
				this._debug(`CM ${addr} disqualified: ${err.message}`, true);
				callback(new Error(`CM ${addr} disqualified: ${err.message}`)); // if error, this CM is disqualified
			}
		});
	}
}

module.exports = WebSocketConnection;
