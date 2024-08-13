import EResult from '../enums/EResult';

export interface ErrorWithEResult extends Error {
	eresult?: EResult;
}
