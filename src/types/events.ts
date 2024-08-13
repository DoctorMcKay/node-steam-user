import {ErrorWithEResult} from './errors';

export interface SteamUserEvents {
	debug: (...args: any[]) => void;
	error: (err: ErrorWithEResult) => void;
	webSession: (sessionID: string, cookies: string[]) => void;
	machineAuthToken: (machineToken: string) => void;
}
