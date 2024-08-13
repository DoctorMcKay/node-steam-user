import {HttpClient} from '@doctormckay/stdlib/http';
import VDF from 'kvparser';

import SteamUserFileStorage from './05-filestorage';

type FreeFormObject = {[name: string]: any};

const USER_AGENT = 'Valve/Steam HTTP Client 1.0';
const HOSTNAME = 'api.steampowered.com';

abstract class SteamUserWebAPI extends SteamUserFileStorage {
	/**
	 * @param {string} httpMethod
	 * @param {string} iface
	 * @param {string} method
	 * @param {number} version
	 * @param {object} [data]
	 * @param {number} [cacheSeconds]
	 * @returns {Promise}
	 * @protected
	 */
	async _apiRequest(httpMethod: string, iface: string, method: string, version: number, data: FreeFormObject, cacheSeconds: number): Promise<FreeFormObject> {
		data = data || {};
		httpMethod = httpMethod.toUpperCase(); // just in case

		// Pad the version with zeroes to make it 4 digits long, because Valve
		let versionString = version.toString();
		while (versionString.length < 4) {
			versionString = '0' + versionString;
		}

		data.format = 'vdf'; // for parity with the Steam client

		let client = this._httpClient || new HttpClient({
			userAgent: USER_AGENT,
			httpsAgent: this._getProxyAgent() as any,
			localAddress: this.options.localAddress,
			defaultHeaders: Object.assign(getDefaultHeaders(), this.options.additionalHeaders),
			defaultTimeout: 5000,
			gzip: true
		});
		this._httpClient = client;

		let url = `https://${HOSTNAME}/${iface}/${method}/v${version}/`;

		let cacheKey = `API_${httpMethod}_${url}`;
		let cacheValue;
		if (cacheSeconds && (cacheValue = this._ttlCache.get(cacheKey))) {
			this.emit('debug', `[WebAPI] Using cached value for ${cacheKey}`);
			return cacheValue;
		}

		let headers = {};
		let body = null;
		if (httpMethod == 'GET') {
			url += `?${buildQueryString(data)}`;
		} else {
			headers['Content-Type'] = 'application/x-www-form-urlencoded';
			body = buildQueryString(data);
		}

		let res = await client.request({
			method: httpMethod,
			url,
			body
		});

		this.emit('debug', `API ${httpMethod} request to ${url}: ${res.statusCode}`);

		if (res.statusCode != 200) {
			throw new Error(`HTTP error ${res.statusCode}`);
		}

		let responseData = VDF.parse(res.textBody);

		if (cacheSeconds) {
			this._ttlCache.add(cacheKey, responseData, 1000 * cacheSeconds);
		}

		return responseData;
	}
}

function buildQueryString(data: FreeFormObject) {
	// We can't use the querystring module's encode because we want binary data to be completely percent-encoded
	let str = '';

	for (let i in data) {
		if (!Object.hasOwnProperty.call(data, i)) {
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
		'Accept-Charset': 'ISO-8859-1,utf-8,*;q=0.7'
	};
}

export default SteamUserWebAPI;
