import {CMsgClientLogon} from '../protobuf-generated/types';

export interface InternalLogOnDetails extends CMsgClientLogon {
	_newAuthAccountName?: string;
}
