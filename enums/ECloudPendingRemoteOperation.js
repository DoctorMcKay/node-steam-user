/**
 * @enum ECloudPendingRemoteOperation
 * @readonly
 */
const ECloudPendingRemoteOperation = {
	None: 0,
	AppSessionActive: 1,
	UploadInProgress: 2,
	UploadPending: 3,
	AppSessionSuspended: 4,

	// Value-to-name mapping for convenience
	0: 'None',
	1: 'AppSessionActive',
	2: 'UploadInProgress',
	3: 'UploadPending',
	4: 'AppSessionSuspended',
};

module.exports = ECloudPendingRemoteOperation;
