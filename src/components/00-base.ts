import {TTLCache} from '@doctormckay/stdlib/data_structures';
import {LoginSession} from 'steam-session';
import SteamID from 'steamid';
import {TypedEmitter} from 'tiny-typed-emitter';

import {HandlerManager} from './classes/HandlerManager';
import BaseConnection, {CMServer} from './connection_protocols/base';

import type {IncomingMessageQueueItem} from './02-connection';
import type {OptionsObject} from '../resources/default_options';
import type FileManager from '../types/FileManager';
import type {HttpClient} from '@doctormckay/stdlib/http';
import type {SteamUserEvents} from '../types/events';
import type {InternalLogOnDetails} from '../types/logon';
import type {MessageCallback} from './03-messages';

/**
 * I admit, this is a pretty unorthodox pattern, but this is the only way I've found to define a class across multiple
 * files while also making sure that IDE intellisense can figure out which methods belong to the final class.
 *
 * Inheritance follows filenames sorted alphabetically with numbers first.
 */
abstract class SteamUserBase extends TypedEmitter<SteamUserEvents> {
	_handlerManager: HandlerManager;

	steamID: SteamID|null = null;
	options: OptionsObject;
	storage: FileManager|null = null;

	_sessionID: number|null = null;
	_tempSteamID: SteamID|null = null;

	_ttlCache: TTLCache<any> = null;

	_connection: BaseConnection = null;
	_useMessageQueue: boolean = false; // we only use the message queue while we're processing a multi message
	_incomingMessageQueue: IncomingMessageQueueItem[] = [];
	_multiCount: number = 0;

	_loginSession: LoginSession|null = null;
	_logOnDetails: InternalLogOnDetails|null = null;
	_machineAuthToken: string|null = null;

	_connecting: boolean = false;
	_lastChosenCM: CMServer|null = null;
	_loggingOff: boolean = false;
	_connectionClosed: boolean = false;

	_httpClient: HttpClient|null = null;

	_currentJobID: number = 0;
	_jobs: TTLCache<MessageCallback>;

	// Timers
	_changelistUpdateTimer: NodeJS.Timeout|null = null;
	_heartbeatInterval: NodeJS.Timeout|null = null;
	_logonTimeout: NodeJS.Timeout|null = null;
	_logonMsgTimeout: NodeJS.Timeout|null = null;
	_reconnectForCloseDuringAuthTimeout: NodeJS.Timeout|null = null;

	constructor() {
		super();

		this._ttlCache = new TTLCache<any>(1000 * 60 * 5); // default 5 minutes
		this._jobs = new TTLCache<MessageCallback>(1000 * 60 * 2); // default 2 minutes
	}

	_warn(message: string) {
		process.emitWarning(message, 'Warning', this.constructor);
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
