const HTTPS = require('https');
const StdLib = require('@doctormckay/stdlib');
const VDF = require('simple-vdf');
const Zlib = require('zlib');

const SteamUserFileStorage = require('./05-filestorage.js');

const USER_AGENT = 'Valve/Steam HTTP Client 1.0';
const HOSTNAME = 'api.steampowered.com';

class SteamUserWebAPI extends SteamUserFileStorage {
	/**
	 * @param {string} httpMethod
	 * @param {string} iface
	 * @param {string} method
	 * @param {number} version
	 * @param {object} [data]
	 * @returns {Promise}
	 * @protected
	 */
	async _apiRequest(httpMethod, iface, method, version, data) {
		return new Promise((resolve, reject) => {
			data = data || {};
			httpMethod = httpMethod.toUpperCase(); // just in case

			// Pad the version with zeroes to make it 4 digits long, because Valve
			version = version.toString();
			while (version.length < 4) {
				version = '0' + version;
			}

			data.format = 'vdf'; // for parity with the Steam client

			let query = buildQueryString(data);
			let headers = Object.assign(getDefaultHeaders(), this.options.additionalHeaders);
			let path = `/${iface}/${method}/v${version}/`;

			if (httpMethod == 'POST') {
				headers['Content-Type'] = 'application/x-www-form-urlencoded';
				headers['Content-Length'] = Buffer.byteLength(query);
			} else {
				path += '?' + query;
			}

			let options = {
				hostname: HOSTNAME,
				path,
				method: httpMethod,
				headers
			};

			if (this.options.localAddress) {
				options.localAddress = this.options.localAddress;
			}

			options.agent = this._getProxyAgent();

			let req = HTTPS.request(options, (res) => {
				this.emit('debug', `API ${options.method} request to https://${HOSTNAME}${path}: ${res.statusCode}`);

				if (res.statusCode != 200) {
					res.on('data', () => {
					}); // discard the response
					return reject(new Error('HTTP error ' + res.statusCode));
				}

				let responseData = '';

				let stream = res;
				if (res.headers['content-encoding'] && res.headers['content-encoding'].toLowerCase() == 'gzip') {
					stream = Zlib.createGunzip();
					res.pipe(stream);
				}

				stream.on('data', function(data) {
					responseData += data;
				});

				stream.on('end', function() {
					try {
						responseData = VDF.parse(responseData);
					} catch (ex) {
						return reject(ex);
					}

					resolve(responseData);
				});
			});

			req.on('error', function(err) {
				reject(err);
			});

			req.end(httpMethod == 'POST' ? query : null);
		});
	}
}

function buildQueryString(data) {
	// We can't use the querystring module's encode because we want binary data to be completely percent-encoded
	let str = '';

	for (let i in data) {
		if (!data.hasOwnProperty(i)) {
			continue;
		}

		str += (str ? '&' : '') + i + '=';

		if (Buffer.isBuffer(data[i])) {
			str += data[i].toString('hex').replace(/../g, '%$&');
		} else {
			str += encodeURIComponent(data[i]);
		}
	}

	return str;
}

function getDefaultHeaders() {
	return {
		Accept: 'text/html,*/*;q=0.9',
		'Accept-Encoding': 'gzip,identity,*;q=0',
		'Accept-Charset': 'ISO-8859-1,utf-8,*;q=0.7',
		'User-Agent': USER_AGENT
	};
}

module.exports = SteamUserWebAPI;
