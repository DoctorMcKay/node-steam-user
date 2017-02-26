var SteamUser = require('../index.js');
var HTTP = require('http');
var HTTPS = require('https');
var TLS = require('tls');
var VDF = require('vdf');
var URL = require('url');
var Zlib = require('zlib');

const USER_AGENT = "Valve/Steam HTTP Client 1.0";
const HOSTNAME = "api.steampowered.com";

SteamUser.prototype._apiRequest = function(httpMethod, iface, method, version, data, callback) {
	if (typeof data === 'function') {
		callback = data;
		data = {};
	}

	httpMethod = httpMethod.toUpperCase(); // just in case

	// Pad the version with zeroes to make it 4 digits long, because Valve
	version = version.toString();
	while (version.length < 4) {
		version = '0' + version;
	}

	data.format = "vdf"; // for parity with the Steam client

	var query = buildQueryString(data);
	var headers = getDefaultHeaders();
	var path = "/" + iface + "/" + method + "/v" + version + "/";

	if (httpMethod == "POST") {
		headers['Content-Type'] = 'application/x-www-form-urlencoded';
		headers['Content-Length'] = Buffer.byteLength(query);
	} else {
		path += "?" + query;
	}

	var options = {
		"hostname": HOSTNAME,
		"path": path,
		"method": httpMethod,
		"headers": headers
	};

	if (this.client.localAddress || this.client._localAddress) {
		options.localAddress = this.client.localAddress || this.client._localAddress;
	}

	if (this.client.httpProxy || this.client._httpProxy) {
		options.agent = getProxyAgent(this.client.httpProxy || this.client._httpProxy);
	}

	var self = this;
	var req = HTTPS.request(options, function(res) {
		self.emit('debug', "API " + options.method + " request to https://" + HOSTNAME + path + ": " + res.statusCode);

		if (res.statusCode != 200) {
			res.on('data', function() {}); // discard the response
			callback(new Error("HTTP error " + res.statusCode));
			return;
		}

		var responseData = "";

		var stream = res;
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
				callback(ex);
				return;
			}

			callback(null, responseData);
		});
	});

	req.on('error', function(err) {
		callback(err);
	});

	req.end(httpMethod == "POST" ? query : null);
};

function buildQueryString(data) {
	// We can't use the querystring module's encode because we want binary data to be completely percent-encoded
	var str = "";

	for (var i in data) {
		if (!data.hasOwnProperty(i)) {
			continue;
		}

		str += (str ? "&" : "") + i + "=";

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
		"Accept": "text/html,*/*;q=0.9",
		"Accept-Encoding": "gzip,identity,*;q=0",
		"Accept-Charset": "ISO-8859-1,utf-8,*;q=0.7",
		"User-Agent": USER_AGENT
	};
}

function getProxyAgent(proxyUrl) {
	var agent = new HTTPS.Agent({"keepAlive": false});

	agent.createConnection = function(options, callback) {
		var url = URL.parse(proxyUrl);
		url.method = 'CONNECT';
		url.path = options.host + ':' + options.port;
		url.localAddress = options.localAddress;
		url.localPort = options.localPort;

		if (url.auth) {
			url.headers = {"Proxy-Authorization": "Basic " + (new Buffer(url.auth, 'utf8')).toString('base64')};
			delete url.auth;
		}

		var finished = false;
		var req = HTTP.request(url);
		req.end();
		req.setTimeout(2000);

		req.on('connect', function(res, socket, head) {
			if (finished) {
				socket.end();
				return;
			}

			finished = true;
			req.setTimeout(0);

			if (res.statusCode != 200) {
				callback(new Error("HTTP CONNECT " + res.statusCode + " " + res.statusMessage));
				return;
			}

			// Upgrade this connection to TLS
			var tlsSocket = TLS.connect({
				"socket": socket,
				"servername": options.host
			}, function() {
				if (!tlsSocket.authorized) {
					callback(new Error(tlsSocket.authorizationError || "Secure connection failed"));
					return;
				}

				callback(null, tlsSocket);
			});
		});

		req.on('timeout', function() {
			if (finished) {
				return;
			}

			finished = true;
			callback(new Error("Proxy connection timed out"));
		});

		req.on('error', function(err) {
			if (finished) {
				return;
			}

			finished = true;
			callback(err);
		});
	};

	return agent;
}
