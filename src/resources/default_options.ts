import EConnectionProtocol from './EConnectionProtocol';
import EMachineIDType from './EMachineIDType';
import {CMsgClientLicenseList_License} from '../protobuf-generated/types';

// TODO move these to apps.ts when that gets ported
export interface PackageFilter {
	excludeFree?: boolean;
	excludeShared?: boolean;
	excludeExpiring?: boolean;
}

export type PackageFilterFunction = (
	packageDetails: CMsgClientLicenseList_License,
	idx: number,
	allPackages: CMsgClientLicenseList_License[]
) => boolean;

export interface OptionsObject {
	dataDirectory?: string|null;
	autoRelogin?: boolean;
	machineIdType?: EMachineIDType;
	machineIdFormat?: string[];
	enablePicsCache?: boolean;
	picsCacheAll?: boolean;
	changelistUpdateInterval?: number;
	ownershipFilter?: PackageFilter|PackageFilterFunction|null;
	additionalHeaders?: {[name: string]: string|number};
	localAddress?: string|null;
	localPort?: number|null;
	httpProxy?: string|null;
	socksProxy?: string|null;
	protocol?: EConnectionProtocol;
	language?: string;
	webCompatibilityMode?: boolean;
	saveAppTickets?: boolean;
	renewRefreshTokens?: boolean;
}

const defaultOptions:OptionsObject = {
	autoRelogin: true,
	machineIdType: EMachineIDType.AccountNameGenerated,
	machineIdFormat: ['SteamUser Hash BB3 {account_name}', 'SteamUser Hash FF2 {account_name}', 'SteamUser Hash 3B3 {account_name}'],
	enablePicsCache: false,
	picsCacheAll: false,
	changelistUpdateInterval: 60000,
	additionalHeaders: {},
	localAddress: null,
	localPort: null,
	httpProxy: null,
	socksProxy: null,
	protocol: EConnectionProtocol.Auto,
	language: 'english',
	webCompatibilityMode: false,
	saveAppTickets: true,
	renewRefreshTokens: false
};

export {defaultOptions};
