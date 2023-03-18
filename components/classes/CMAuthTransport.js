const {ApiRequest, ApiResponse} = require('steam-session');

const EMsg = require('../../enums/EMsg.js');

class CMAuthTransport {
	_user;

	/**
	 * @param {SteamUserLogon} steamUser
	 */
	constructor(steamUser) {
		this._user = steamUser;
	}

	/**
	 *
	 * @param {ApiRequest} request
	 * @returns {Promise<ApiResponse>}
	 */
	sendRequest(request) {
		return new Promise((resolve) => {
			this._user._send({
				msg: EMsg.ServiceMethodCallFromClientNonAuthed,
				proto: {
					target_job_name: `${request.apiInterface}.${request.apiMethod}#${request.apiVersion}`,
					realm: 1
				}
			}, request.requestData, (body, hdr) => {
				resolve({
					result: hdr.proto.eresult,
					errorMessage: hdr.proto.error_message,
					responseData: body.toBuffer()
				});
			});
		});
	}

	close() {
		// do nothing
	}
}

module.exports = CMAuthTransport;
