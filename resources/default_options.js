const EConnectionProtocol = require('./EConnectionProtocol.js');
const EMachineIDType = require('./EMachineIDType.js');

module.exports = {
	protocol: EConnectionProtocol.Auto,
	httpProxy: null,
	localAddress: null,
	localPort: null,
	autoRelogin: true,
	singleSentryfile: false,
	machineIdType: EMachineIDType.AccountNameGenerated,
	machineIdFormat: ['SteamUser Hash BB3 {account_name}', 'SteamUser Hash FF2 {account_name}', 'SteamUser Hash 3B3 {account_name}'],
	enablePicsCache: false,
	picsCacheAll: false,
	changelistUpdateInterval: 60000,
	saveAppTickets: true,
	additionalHeaders: {},
	language: 'english',
	webCompatibilityMode: false
};
