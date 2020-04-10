const BinaryKVParser = require('binarykvparser');
const StdLib = require('@doctormckay/stdlib');
const ByteBuffer = require('bytebuffer');

const Helpers = require('./helpers.js');
const SteamID = require('steamid');
const SteamUser = require('../index.js');

const Messages = require('./messages.js');
const Schema = require('../protobufs/generated/_load.js');

SteamUser.prototype.getOwnAuthorizedDevices = function(includeCanceled, callback) {
	return StdLib.Promises.callbackPromise(null, callback, true, (resolve, reject) => {
		this._sendUnified('DeviceAuth.GetOwnAuthorizedDevices#1', {
			'steamid': this.steamID.getSteamID64(),
			includeCanceled
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
	this._send(SteamUser.EMsg.ClientAuthorizeLocalDeviceRequest, {device_description: deviceName, owner_account_id: this.steamID.accountid});
}


SteamUser.prototype.useLocalDeviceAuthorizations = function(ownerSteamID, devices, authorization_accounts){

	// if (!Array.isArray(messages)) {
	// 	return reject(new Error('The \'messages\' argument must be an array'));
	// }

	let device_tokens = [];

	devices.forEach((device) => {

		console.log(device);

		device_tokens.push({
			'owner_account_id': Helpers.steamID(ownerSteamID).accountid,
			'token_id': device.authed_device_token
		});

		// device_tokens.push(Schema.CMsgClientUseLocalDeviceAuthorizations.DeviceToken.create({
		// 	'owner_account_id': Helpers.steamID(ownerSteamID).accountid,
		// 	'token_id': parseInt(device.authed_device_token)
		// }))

		// device_tokens.push(
		// 	Messages.encodeProto(Schema.CMsgClientUseLocalDeviceAuthorizations.DeviceToken, {
		// 		'owner_account_id': Helpers.steamID(ownerSteamID).accountid,
		// 		'token_id': 11269942845245054476
		// 	})
		// );

		// console.log(
		// Schema.CMsgClientUseLocalDeviceAuthorizations.DeviceToken.verify({
		// 		'owner_account_id': Helpers.steamID(ownerSteamID).accountid,
		// 		'token_id': parseInt(device.authed_device_token)
		// })
	// )

	})

	let authorization_account_id = [];
	authorization_accounts.forEach((auth_acc_id) => {
		authorization_account_id.push(Helpers.steamID(auth_acc_id).accountid)
	})

	// console.log(authorization_account_id);
	// console.log(device_tokens);

	console.log({
		authorization_account_id,
		device_tokens
	})


	// console.log(Schema.CMsgClientUseLocalDeviceAuthorizations.verify({
	// 	authorization_account_id,
	// 	device_tokens
	// }));

	this._send(SteamUser.EMsg.ClientUseLocalDeviceAuthorizations, {
		authorization_account_id,
		device_tokens
	}, (body) => {
		console.log(body);
	});
}

// SteamUser.prototype.getAuthorizedDevices = function(){
// 	this._send(SteamUser.EMsg.ClientGetAuthorizedDevices, {}, (body) => {
// 		console.log(body);
// 	});
// }

//handlers
SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientAuthorizeLocalDeviceResponse, function(body) {
	this.emit("authorizedLocalDevice", body);
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientGetAuthorizedDevicesResponse, function(body) {
	// console.log(body);
	// this.emit("authorizedLocalDevice", body);
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientUseLocalDeviceAuthorizationsResponse, function(body){
	console.log(body);
});

SteamUser.prototype._handlerManager.add(SteamUser.EMsg.ClientUseLocalDeviceAuthorizations, function(body){
	console.log("ClientUseLocalDeviceAuthorizations");
	console.log(body);
})
