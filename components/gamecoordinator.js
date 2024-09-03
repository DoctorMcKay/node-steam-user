const ByteBuffer = require('bytebuffer');

const Schema = require('../protobufs/generated/_load.js');

const EMsg = require('../enums/EMsg.js');

const SteamUserBase = require('./00-base.js');
const SteamUserFriends = require('./friends.js');

const JOBID_NONE = '18446744073709551615';
const PROTO_MASK = 0x80000000;

class SteamUserGameCoordinator extends SteamUserFriends {
	/**
	 * Send a message to a GC. You should be currently "in-game" for the specified app for the message to make it.
	 * @param {int} appid - The ID of the app you want to send a GC message to
	 * @param {int} msgType - The GC-specific msg ID for this message
	 * @param {object|null} protoBufHeader - An object (can be empty) containing the protobuf header for this message, or null if this is not a protobuf message.
	 * @param {Buffer|ByteBuffer} payload
	 * @param {function} [callback] - If this is a job-based message, pass a function here to get the response
	 */
	sendToGC(appid, msgType, protoBufHeader, payload, callback) {
		let sourceJobId = JOBID_NONE;
		if (typeof callback === 'function') {
			sourceJobId = ++this._currentGCJobID;
			this._jobsGC.add(sourceJobId.toString(), callback);
		}

		this.emit('debug', `Sending ${appid} GC message ${msgType}`);

		let header;
		if (protoBufHeader) {
			msgType = (msgType | PROTO_MASK) >>> 0;
			protoBufHeader.jobid_source = sourceJobId;
			let protoHeader = SteamUserGameCoordinator._encodeProto(Schema.CMsgProtoBufHeader, protoBufHeader);
			header = Buffer.alloc(8);
			header.writeUInt32LE(msgType, 0);
			header.writeInt32LE(protoHeader.length, 4);
			header = Buffer.concat([header, protoHeader]);
		} else {
			header = ByteBuffer.allocate(18, ByteBuffer.LITTLE_ENDIAN);
			header.writeUint16(1); // header version
			header.writeUint64(JOBID_NONE);
			header.writeUint64(sourceJobId);
			header = header.flip().toBuffer();
		}

		this._send({
			msg: EMsg.ClientToGC,
			proto: {
				routing_appid: appid
			}
		}, {
			appid,
			msgtype: msgType,
			payload: Buffer.concat([header, payload])
		});
	}
}

SteamUserBase.prototype._handlerManager.add(EMsg.ClientFromGC, function(body) {
	let msgType = body.msgtype & ~PROTO_MASK;
	let targetJobID;
	let payload;

	if (body.msgtype & PROTO_MASK) {
		// This is a protobuf message
		let headerLength = body.payload.readInt32LE(4);
		let protoHeader = SteamUserGameCoordinator._decodeProto(Schema.CMsgProtoBufHeader, body.payload.slice(8, 8 + headerLength));
		targetJobID = protoHeader.jobid_target || JOBID_NONE;
		payload = body.payload.slice(8 + headerLength);
	} else {
		let header = ByteBuffer.wrap(body.payload.slice(0, 18));
		targetJobID = header.readUint64(2);
		payload = body.payload.slice(18);
	}

	this.emit('debug', `Received ${body.appid} GC message ${msgType}`);

	let jobCallback = this._jobsGC.get(targetJobID.toString());
	if (targetJobID && jobCallback) {
		jobCallback.call(this, body.appid, msgType, payload);
	} else {
		this.emit('receivedFromGC', body.appid, msgType, payload);
		this.emit('recievedFromGC', body.appid, msgType, payload); // make typos work because why not
	}
});

module.exports = SteamUserGameCoordinator;
