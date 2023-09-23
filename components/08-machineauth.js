const SteamUserWeb = require('./07-web.js');

class SteamUserMachineAuth extends SteamUserWeb {
	_getMachineAuthFilename() {
		let accountName = (this._logOnDetails.account_name || this._logOnDetails._newAuthAccountName).toLowerCase();
		return `machineAuthToken.${accountName}.txt`;
	}

	_handleNewMachineToken(machineToken) {
		this._machineAuthToken = machineToken;

		this.emit('machineAuthToken', machineToken);

		// We should always have an account name available here since this is only possible when logging on using an
		// account name and password.
		if (!this._logOnDetails.account_name && !this._logOnDetails._newAuthAccountName) {
			this._warn('Received new machine token, but no account name is available. This should never happen. Please alert the developer.');
			return;
		}

		this._saveFile(this._getMachineAuthFilename(), Buffer.from(machineToken, 'utf8'));
	}
}

module.exports = SteamUserMachineAuth;
