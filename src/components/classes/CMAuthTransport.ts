import EMsg from '../../enums/EMsg';

import type {ApiRequest, ApiResponse} from 'steam-session';
import type SteamUserMessages from '../03-messages';
import type {CMsgProtoBufHeader} from '../../protobuf-generated/types';

class CMAuthTransport {
	_user: SteamUserMessages;

	constructor(steamUser: SteamUserMessages) {
		this._user = steamUser;
	}

	sendRequest(request: ApiRequest): Promise<ApiResponse> {
		return new Promise((resolve) => {
			this._user._send(
				{
					msg: this._user.steamID ? EMsg.ServiceMethodCallFromClient : EMsg.ServiceMethodCallFromClientNonAuthed,
					proto: {
						target_job_name: `${request.apiInterface}.${request.apiMethod}#${request.apiVersion}`,
						realm: 1
					}
				},
				request.requestData,
				(body: {toBuffer: () => Buffer}, hdr: {proto: CMsgProtoBufHeader}) => {
					resolve({
						result: hdr.proto.eresult as number,
						errorMessage: hdr.proto.error_message,
						responseData: body.toBuffer()
					});
				}
			);
		});
	}

	close() {
		// do nothing
	}
}

export default CMAuthTransport;
