const EventEmitter = require('events').EventEmitter;

let g_ConnectionId = 1;

class BaseConnection extends EventEmitter {
	constructor(user) {
		super();
		this.user = user;
		this.connectionId = g_ConnectionId++;
	}

	_debug(msg, verbose = false) {
		this.user.emit(verbose ? 'debug-verbose' : 'debug', `[${this.connectionType[0]}${this.connectionId}] ${msg}`);
	}
}

module.exports = BaseConnection;
