const BinaryKVParser = require('binarykvparser');
const StdLib = require('@doctormckay/stdlib');
const ByteBuffer = require('bytebuffer');

const Helpers = require('./helpers.js');
const SteamID = require('steamid');
const SteamUser = require('../index.js');

SteamUser.prototype.getOwnAuthorizedDevices = function(includeCanceled, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		this._sendUnified('DeviceAuth.GetOwnAuthorizedDevices#1', {
			'steamid': this.steamID.getSteamID64(),
			'include_canceled': includeCanceled
		}, (body, hdr) => {
			let err = Helpers.eresultError(hdr.proto);
			if (err) {
				return reject(err);
			}
			resolve(body.devices);
		});
	});
};

SteamUser.prototype.getAuthorizedLocalDevice = function(deviceName, callback){
	if(!deviceName){
		throw new Error('No deviceName specified.');
	}

	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		this.getOwnAuthorizedDevices(false, (err, devices) =>{
			if (err) {
				return reject(err);
			}
			device = devices.find(dv => dv.device_name == deviceName);
			resolve(device);
		});
	});
}

SteamUser.prototype.authorizeLocalDevice = function(deviceName){
	if(!deviceName){
		throw new Error('No deviceName specified.');
	}

	this.getAuthorizedLocalDevice(deviceName, (err, device) =>{
		if(device){
			device.is_new = false;
			this.emit('authorizedLocalDevice', device);
		}else{
			this._send(SteamUser.EMsg.ClientAuthorizeLocalDeviceRequest, {device_description: deviceName, owner_account_id: this.steamID.accountid});
			this.getAuthorizedLocalDevice(deviceName, (err, device) =>{
				device.is_new = true;
				this.emit('authorizedLocalDevice', device);
			});
		}
	});
}

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
