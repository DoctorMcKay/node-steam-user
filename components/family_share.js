const BinaryKVParser = require('binarykvparser');
const StdLib = require('@doctormckay/stdlib');
const ByteBuffer = require('bytebuffer');

const Helpers = require('./helpers.js');
const SteamID = require('steamid');
const SteamUser = require('../index.js');



SteamUser.prototype.addAuthorizedBorrowers = function(borrowersSteamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		this._sendUnified('DeviceAuth.AddAuthorizedBorrowers#1', {
			'steamid': this.steamID.getSteamID64(),
			'steamid_borrower': borrowersSteamID
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}
			resolve(body);
		});
	});
};

SteamUser.prototype.removeAuthorizedBorrowers = function(borrowersSteamID, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		this._sendUnified('DeviceAuth.RemoveAuthorizedBorrowers#1', {
			'steamid': this.steamID.getSteamID64(),
			'steamid_borrower': borrowersSteamID
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
};

//handlers



// SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientAuthorizeLocalDeviceResponse, function(body) {

// 	const buf = Buffer.from("73148135", 'utf8');
// 	console.log(buf)
// 	// body.readUint64();
// 	// console.log(body.toString("debug"));

// 	// const buf = Buffer.from(this.steamID.accountid, 'utf8');
// 	// console.log(buf)

// 	// console.log(body.readUint8());
// 	// console.log(body.readUint8());
// 	// console.log(body.readUint8());
// 	// console.log(body.readUint8());

// 	// body.flip();
// 	// let eresult = body.readUint64().toString();
// 	// let eresult2 = body.readUint32().toString();
// 	// let chatID = new SteamID(body.readUint64().toString());
// 	// let friendID = new SteamID(body.readUint64().toString());

// 	// body.flip();
// 	// const c = body.readUint32();
// 	// const a = body.readByte();
// 	// const b = body.readUint16();
// 	// body
// 	// console.log(a, b, c)
// 	// body.readUint64();
// 	// console.log(body.readUint64().toString());
// 	// console.log(chatID);
// 	// console.log(friendID);

// 	// this.emit('funciono', );
// 	// this.vanityURL = body.vanity_url;
// 	// console.log(body);
// });
