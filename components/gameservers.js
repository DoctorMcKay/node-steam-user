const StdLib = require('@doctormckay/stdlib');
const SteamID = require('steamid');

const Helpers = require('./helpers.js');

const EMsg = require('../enums/EMsg.js');

const SteamUserGameCoordinator = require('./gamecoordinator.js');

class SteamUserGameServers extends SteamUserGameCoordinator {
	/**
	 * Query the GMS for a list of game server IPs, and their current player counts.
	 * @param {(string|{[filter_text], [geo_location_ip]})} conditions - A filter string (https://mckay.media/hEW8A) or object
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	serverQuery(conditions, callback) {
		if (typeof conditions === 'string') {
			conditions = {filter_text: conditions};
		}

		if (conditions.geo_location_ip) {
			conditions.geo_location_ip = StdLib.IPv4.stringToInt(conditions.geo_location_ip);
		}

		return StdLib.Promises.timeoutCallbackPromise(30000, ['servers'], callback, (resolve, reject) => {
			this._send(EMsg.ClientGMSServerQuery, conditions, function(body) {
				if (body.error) {
					reject(new Error(body.error));
					return;
				}

				// TODO add ipv6 support someday
				resolve({
					servers: (body.servers || []).filter(server => server.server_ip && server.server_ip.v4).map((server) => {
						return {
							ip: StdLib.IPv4.intToString(server.server_ip),
							port: server.server_port,
							players: server.auth_players
						};
					})
				});
			});
		});
	}

	/**
	 * Get a list of servers including game data.
	 * @param {string} filter - A filter string (https://mckay.media/hEW8A)
	 * @param {int} [limit] - Limit how many servers may be returned. Current maximum appears to be 20,000.
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	getServerList(filter, limit, callback) {
		return StdLib.Promises.timeoutCallbackPromise(30000, ['servers'], callback, (resolve, reject) => {
			this._sendUnified('GameServers.GetServerList#1', {filter, limit}, (body) => {
				resolve({
					servers: (body.servers || []).map((server) => {
						try {
							server.steamid = new SteamID(server.steamid.toString());
						} catch (e) {
							// don't care
						}
						return server;
					})
				});
			});
		});
	}

	/**
	 * Get the associated SteamIDs for given server IPs.
	 * @param {string[]} ips
	 * @param {function} [callback]
	 */
	getServerSteamIDsByIP(ips, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['servers'], callback, (resolve, reject) => {
			this._sendUnified('GameServers.GetServerSteamIDsByIP#1', {
				server_ips: ips
			}, (body) => {
				let servers = {};

				(body.servers || []).forEach((server) => {
					servers[server.addr] = new SteamID(server.steamid.toString());
				});

				resolve({servers});
			});
		});
	}

	/**
	 * Get the associated IPs for given server SteamIDs.
	 * @param {string[]|SteamID[]} steamids
	 * @param {function} [callback]
	 * @return {Promise}
	 */
	getServerIPsBySteamID(steamids, callback) {
		return StdLib.Promises.timeoutCallbackPromise(10000, ['servers'], callback, (resolve, reject) => {
			steamids = steamids.map(Helpers.steamID);

			this._sendUnified('GameServers.GetServerIPsBySteamID#1', {
				server_steamids: steamids
			}, (body) => {
				let servers = {};

				(body.servers || []).forEach((server) => {
					servers[server.steamid.toString()] = server.addr;
				});

				resolve({servers});
			});
		});
	}
}

module.exports = SteamUserGameServers;
