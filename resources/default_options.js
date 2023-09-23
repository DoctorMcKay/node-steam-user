const EConnectionProtocol = require('./EConnectionProtocol.js');
const EMachineIDType = require('./EMachineIDType.js');

/**
 * @typedef {object} OptionsObject
 * @property {string|null} [dataDirectory]
 * @property {boolean} [autoRelogin=true]
 * @property {EMachineIDType} [machineIdType]
 * @property {string[]} [machineIdFormat]
 * @property {boolean} [enablePicsCache=false]
 * @property {boolean} [picsCacheAll=false]
 * @property {number} [changelistUpdateInterval=60000]
 * @property {PackageFilter|PackageFilterFunction|null} [ownershipFilter=null]
 * @property {object} [additionalHeaders={}]
 * @property {string|null} [localAddress=null]
 * @property {number|null} [localPort=null]
 * @property {string|null} [httpProxy=null]
 * @property {string|null} [socksProxy=null]
 * @property {EConnectionProtocol} [protocol]
 * @property {string} [language='english']
 * @property {boolean} [webCompatibilityMode=false]
 * @property {boolean} [saveAppTickets=true]
 * @property {boolean} [renewRefreshTokens=false]
 */

module.exports = {
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
