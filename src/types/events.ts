import {ErrorWithEResult} from './errors';

export interface SteamUserEvents {
	debug: (...args: any[]) => void;
	'debug-verbose': (...args: any[]) => void;
	'debug-traffic-outgoing': (...args: any[]) => void;
	'debug-traffic-incoming': (...args: any[]) => void;

	error: (err: ErrorWithEResult) => void;
	webSession: (sessionID: string, cookies: string[]) => void;
	machineAuthToken: (machineToken: string) => void;
}
