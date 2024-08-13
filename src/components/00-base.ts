import {TTLCache} from '@doctormckay/stdlib/data_structures';
import {EventEmitter} from 'events';
import SteamID from 'steamid';

import {HandlerManager} from './classes/HandlerManager';

import type {CMServer} from './connection_protocols/base';
import type {IncomingMessageQueueItem} from './02-connection';
import type {OptionsObject} from '../resources/default_options';

/**
 * I admit, this is a pretty unorthodox pattern, but this is the only way I've found to define a class across multiple
 * files while also making sure that IDE intellisense can figure out which methods belong to the final class.
 *
 * Inheritance follows filenames sorted alphabetically with numbers first.
 */
abstract class SteamUserBase extends EventEmitter {
	_handlerManager: HandlerManager;

	steamID: SteamID|null = null;
	options: OptionsObject;

	_ttlCache: TTLCache<any> = null;

	_incomingMessageQueue: IncomingMessageQueueItem[] = [];
	_connecting: boolean = false;
	_lastChosenCM: CMServer|null = null;
	_loggingOff: boolean = false;
	_connectionClosed: boolean = false;

	// Timers
	_changelistUpdateTimer: NodeJS.Timeout|null = null;
	_heartbeatInterval: NodeJS.Timeout|null = null;
	_logonTimeout: NodeJS.Timeout|null = null;
	_logonMsgTimeout: NodeJS.Timeout|null = null;
	_reconnectForCloseDuringAuthTimeout: NodeJS.Timeout|null = null;

	constructor() {
		super();

		this._ttlCache = new TTLCache<any>(1000 * 60 * 5); // default 5 minutes
	}

	_clearChangelistUpdateTimer() {
		if (this._changelistUpdateTimer) {
			clearTimeout(this._changelistUpdateTimer);
			this._changelistUpdateTimer = null;
		}
	}

	_cancelReconnectTimers() {
		clearTimeout(this._logonTimeout);
		clearTimeout(this._logonMsgTimeout);
		clearTimeout(this._reconnectForCloseDuringAuthTimeout);
	}
}

SteamUserBase.prototype._handlerManager = new HandlerManager();

export default SteamUserBase;
