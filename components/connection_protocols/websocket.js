const Async = require('async');
const EventEmitter = require('events').EventEmitter;
const HTTPS = require('https');
const StdLib = require('@doctormckay/stdlib');
const Util = require('util');
const WS13 = require('websocket13');

const SteamUser = require('../../index.js');

module.exports = WebSocketConnection;

Util.inherits(WebSocketConnection, EventEmitter);

let g_BootstrapSemaphore = new StdLib.Concurrency.Semaphore();
let g_LastWebsocketPing = 0;
let g_PingedServers = [];

/**
 * @constructor
 */
function WebSocketConnection(user) {
	this.user = user;

	// Pick a CM semi-randomly
	if (!user._cmList || !user._cmList.websocket_servers) {
		throw new Error("Nothing to connect to: " + (user._cmList ? "no WebSocket server list" : "no CM list"));
	}

	// Only allow one CM ping to happen at once
	g_BootstrapSemaphore.wait((callback) => {
		if (Date.now() - g_LastWebsocketPing < (1000 * 60 * 30)) {
			// Last ping was less than 30 minutes ago
			callback();
			this._chooseAndConnect();
			return;
		}

		// Ping 'em
		Async.map(this.user._cmList.websocket_servers, (addr, callback) => this._pingCM(addr, callback), (err, result) => {
			callback(); // pinging is done

			if (err) {
				// shouldn't be possible, but handle it anyway
				this._chooseAndConnect();
				return;
			}

			let filtered = result.filter(r => !!r);
			if (filtered.length < 20) {
				// Less than 20 responded? Assume Steam is down and just pick a random one.
				this.user.emit('debug-verbose', `Only ${filtered.length} CMs responded to ping; choosing a random one`);
				this._chooseAndConnect();
				return;
			}

			filtered.sort((a, b) => ((a.load * 2) + a.latency) < ((b.load * 2) + b.latency) ? -1 : 1);
			g_PingedServers = filtered.map(cm => cm.addr).slice(0, 20); // save the top 20, we'll randomly pick from there
			g_LastWebsocketPing = Date.now();
			this._chooseAndConnect();
		});
	});
}

WebSocketConnection.prototype._chooseAndConnect = function() {
	let servers = g_PingedServers;
	if (servers.length == 0) {
		servers = this.user._cmList.websocket_servers;
	}

	let addr = servers[Math.floor(Math.random() * servers.length)];
	this.stream = new WS13.WebSocket("wss://" + addr + "/cmsocket/", {
		"pingInterval": 30000,
		"httpProxy": this.user.options.httpProxy,
		"proxyTimeout": this.user.options.proxyTimeout,
		"connection": {
			"localAddress": this.user.options.localAddress
		}
	});

	// Set up the connection timeout
	this.stream.setTimeout(this.user._connectTimeout);

	this.stream.on('debug', msg => this.user.emit('debug-verbose', msg));
	this.stream.on('message', this._readMessage.bind(this));

	this.stream.on('disconnected', (code, reason) => {
		this.user.emit('debug', 'WebSocket disconnected with code ' + code + ' and reason: ' + reason);
		this.user._handleConnectionClose();
	});

	this.stream.on('error', (err) => {
		this.user.emit('debug', 'WebSocket disconnected with error: ' + err.message);
		this.user._handleConnectionClose();
	});

	this.stream.on('connected', () => {
		this.user.emit('debug', 'WebSocket connection success; now logging in');
		this.stream.setTimeout(0); // Disable timeout
		this.user._send(this.user._logOnDetails.game_server_token ? SteamUser.EMsg.ClientLogonGameServer : SteamUser.EMsg.ClientLogon, this.user._logOnDetails);
	});

	this.stream.on('timeout', () => {
		this.user.emit('debug', 'WS connection timed out');
		this.user._connectTimeout = Math.min(this.user._connectTimeout * 2, 10000); // 10 seconds max
		this.stream.disconnect();
	});
};

/**
 * End the connection
 * @param {boolean} [andIgnore=false] - Pass true to also ignore all further events from this connection
 */
WebSocketConnection.prototype.end = function(andIgnore) {
	if (this.stream && [WS13.State.Connected, WS13.State.Connecting].indexOf(this.stream.state) != -1) {
		if (andIgnore) {
			this.stream.removeAllListeners();
			this.stream.on('error', () => {});
		}
		
		this.stream.disconnect();
	}
};

/**
 * Send data over the connection.
 * @param {Buffer} data
 */
WebSocketConnection.prototype.send = function(data) {
	this.stream.send(data);
};

WebSocketConnection.prototype._readMessage = function(type, msg) {
	if (type != WS13.FrameType.Data.Binary) {
		this.emit('debug', 'Got frame with wrong data type: ' + type);
		return;
	}

	this.user._handleNetMessage(msg);
};

WebSocketConnection.prototype._pingCM = function(addr, callback) {
	let host = addr.split(':')[0];
	let port = parseInt(addr.split(':')[1] || '443', 10);
	let options = {
		host,
		port,
		"timeout": 700,
		"path": "/cmping/",
		"agent": StdLib.HTTP.getProxyAgent(true, this.user.options.httpProxy)
	};

	// The timeout option seems to not work
	let finished = false;
	let timeout = setTimeout(() => {
		if (finished) {
			return;
		}

		this.user.emit('debug-verbose', 'CM ' + addr + ' timed out');
		callback(null, null);
		finished = true;
	}, 700);

	let start = Date.now();
	HTTPS.get(options, (res) => {
		clearTimeout(timeout);
		if (finished) {
			return;
		}

		let latency = Date.now() - start;

		res.on('data', () => {}); // there is no body, so just throw it away

		if (res.statusCode != 200) {
			// CM is disqualified
			this.user.emit('debug-verbose', 'CM ' + addr + ' disqualified: HTTP error ' + res.statusCode);
			callback(null, null);
			return;
		}

		let load = parseInt(res.headers['x-steam-cmload'], 10) || 999;
		this.user.emit('debug-verbose', 'CM ' + addr + ' latency ' + latency + ' ms + load ' + load);
		callback(null, {"addr": addr, "load": load, "latency": latency});
	}).on('error', (err) => {
		clearTimeout(timeout);
		if (!finished) {
			this.user.emit('debug-verbose', 'CM ' + addr + ' disqualified: ' + err.message);
			callback(null, null); // if error, this CM is disqualified
		}
	});
};
