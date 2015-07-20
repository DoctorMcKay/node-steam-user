var Steam = require('steam');
var SteamUser = require('../index.js');
var ByteBuffer = require('bytebuffer');

var Schema = require('./protobufs.js');

var protobufs = {};
protobufs[Steam.EMsg.ClientLogon] = Schema.CMsgClientLogon;
protobufs[Steam.EMsg.ClientLogOnResponse] = Schema.CMsgClientLogonResponse;
protobufs[Steam.EMsg.ClientUpdateMachineAuth] = Schema.CMsgClientUpdateMachineAuth;
protobufs[Steam.EMsg.ClientUpdateMachineAuthResponse] = Schema.CMsgClientUpdateMachineAuthResponse;

ByteBuffer.DEFAULT_ENDIAN = ByteBuffer.LITTLE_ENDIAN;

SteamUser.prototype._send = function(emsg, body, callback) {
	var header = {
		"msg": emsg
	};

	var Proto = protobufs[emsg];
	if(Proto) {
		header.proto = {};
		body = new Proto(body).toBuffer();
	} else {
		body = ByteBuffer.wrap(body);
	}

	var cb = null;
	if(callback) {
		cb = function(header, body) {
			if(protobufs[header.msg]) {
				body = protobufs[header.msg].decode(body);
			}

			callback(body);
		};
	}

	this.emit('debug', 'Sending message: ' + emsg);
	this.client.send(header, body, cb);
};

SteamUser.prototype._handleMessage = function(header, body, callback) {
	var msgName = header.msg;

	if(this.options.debug) {
		for(var i in Steam.EMsg) {
			if(Steam.EMsg.hasOwnProperty(i) && Steam.EMsg[i] == header.msg) {
				msgName = i;
				break;
			}
		}
	}

	if(!this._handlers[header.msg]) {
		this.emit('debug', 'Unhandled message: ' + msgName);
		return;
	}

	if(protobufs[header.msg]) {
		body = protobufs[header.msg].decode(body);
	} else {
		body = ByteBuffer.wrap(body);
	}

	this.emit('debug', 'Handled message: ' + msgName);

	var cb = null;
	if(callback) {
		cb = function(emsg, body) {
			var header = {"msg": emsg};

			if(protobufs[emsg]) {
				header.proto = {};
				body = new protobufs[emsg](body).toBuffer();
			}

			callback(header, body);
		}
	}

	this._handlers[header.msg].call(this, body, cb);
};

SteamUser.prototype._handlers = {};
