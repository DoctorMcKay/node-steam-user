import {EventEmitter} from 'events';

import type SteamUserLogon from '../09-logon';

interface StreamType {
	setTimeout: (ms: number) => void;
}

export interface CMServer {
	endpoint: string;
	legacy_endpoint: string;
	type: string;
	dc: string;
	realm: string;
	load: string;
	wtd_load: string;
}

let g_ConnectionId = 1;

class BaseConnection extends EventEmitter {
	user: SteamUserLogon;

	connectionId: number;
	connectionType: string;

	stream: StreamType;

	constructor(user: SteamUserLogon) {
		super();
		this.user = user;
		this.connectionId = g_ConnectionId++;
	}

	_debug(msg, verbose = false) {
		this.user.emit(verbose ? 'debug-verbose' : 'debug', `[${this.connectionType[0]}${this.connectionId}] ${msg}`);
	}
}

export default BaseConnection;
