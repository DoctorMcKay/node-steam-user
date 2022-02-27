const AppTicket = require('steam-appticket');
const HTTP = require('http');
const ReadLine = require('readline');
const SteamUser = require('../index.js');
const WS13 = require('websocket13');

const TEST_APPID = 480; // spacewar
const IPC_TCP_PORT = 55192;

let g_SteamClient = new SteamUser();
let g_SeenPlayers = {};

console.log('This example simulates a P2P game connection.');
console.log('Each player in the game sends a session ticket to each other player.');
console.log('You will need to run this script at least twice, and log into at least');
console.log('two different Steam accounts.\n');
promptCredentials();

function promptCredentials() {
	let rl = ReadLine.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('Steam Account Name: ', (accountName) => {
		rl.question('Steam Password: ', (password) => {
			rl.close();
			g_SteamClient.logOn({accountName, password});
		});
	});
}

process.on('SIGINT', async () => {
	console.log('SIGINT received. Shutting down.');
	await g_SteamClient.endAuthSessions(TEST_APPID);
	console.log('[Steam] Ended auth sessions');
	await g_SteamClient.cancelAuthSessionTickets(TEST_APPID);
	console.log('[Steam] Canceled my session tickets');
	g_SteamClient.logOff();

	g_SteamClient.on('disconnected', () => {
		console.log('[Steam] Logged off');
		process.exit(0);
	});
});

g_SteamClient.on('loggedOn', () => {
	console.log(`[Steam] Logged on as ${g_SteamClient.steamID.steam3()}`);
	createIpcServer();
});

g_SteamClient.on('authTicketValidation', (details) => {
	console.log(`[Steam] Validation result for ticket ${details.ticketGcToken} from ${details.steamID.steam3()}: ${SteamUser.EAuthSessionResponse[details.authSessionResponse]}`);
	console.log(`[Steam] There are now ${g_SteamClient.getActiveAuthSessionTickets().filter(tkt => tkt.steamID.accountid != g_SteamClient.steamID.accountid && tkt.validated).length} other validated players in game`);
});

g_SteamClient.on('authTicketStatus', (details) => {
	console.log(`[Steam] My ticket ${details.ticketGcToken} was validated by ${details.steamID.steam3()}: ${SteamUser.EAuthSessionResponse[details.authSessionResponse]}`);
});

function onIpcReady() {
	sendIpcMessage({type: 'imHere', steamID: g_SteamClient.steamID.steam3()});
	sendIpcMessage({type: 'whosThere'});
}

async function processMessage(data) {
	let msg = JSON.parse(data);
	switch (msg.type) {
		case 'whosThere':
			sendIpcMessage({type: 'imHere', steamID: g_SteamClient.steamID.steam3()});
			break;

		case 'imHere':
			if (g_SeenPlayers[msg.steamID]) {
				// We've already seen this account
				break;
			}

			g_SeenPlayers[msg.steamID] = true;

			console.log(`[IPC] Requesting session ticket from ${msg.steamID}`);
			sendIpcMessage({type: 'requestAuthTicket', from: g_SteamClient.steamID.steam3(), to: msg.steamID});
			break;

		case 'requestAuthTicket':
			if (msg.to != g_SteamClient.steamID.steam3()) {
				// we aren't the recipient of this request
				break;
			}

			try {
				let {sessionTicket} = await g_SteamClient.createAuthSessionTicket(TEST_APPID);
				let parsedTicket = AppTicket.parseAppTicket(sessionTicket);
				console.log(`[Steam] Created and activated my own auth ticket ${parsedTicket.gcToken} for ${msg.from}`);
				sendIpcMessage({type: 'authTicket', ticket: sessionTicket.toString('base64'), from: g_SteamClient.steamID.steam3(), to: msg.from});
			} catch (err) {
				console.log(`[Steam] Failed to create my own auth ticket: ${err.message}`);
			}
			break;

		case 'authTicket':
			if (msg.to != g_SteamClient.steamID.steam3()) {
				// we aren't the recipient of this ticket
				break;
			}

			console.log(`[Steam] Received auth ticket from ${msg.from}`);

			// Pre-validate the ticket
			let ticket = Buffer.from(msg.ticket, 'base64');
			let parsedTicket = AppTicket.parseAppTicket(ticket, true);
			if (!parsedTicket) {
				console.log(`[Steam] Auth ticket from ${msg.from} failed pre-validation: ticket failed to parse`);
				break;
			}

			if (parsedTicket.steamID.steam3() != msg.from) {
				console.log(`[Steam] Auth ticket from ${msg.from} failed pre-validation: SteamID mismatch ${parsedTicket.steamID.steam3()}`);
				break;
			}

			console.log(`[Steam] Auth ticket ${parsedTicket.gcToken} from ${msg.from} passed pre-validation. Licenses: ${parsedTicket.licenses.join(', ')}. DLC: ${parsedTicket.dlc.length == 0 ? 'none' : parsedTicket.dlc.join(', ')}.`);

			try {
				await g_SteamClient.activateAuthSessionTickets(TEST_APPID, [ticket]);
				console.log(`[Steam] Auth ticket from ${msg.from} activated OK`);
			} catch (err) {
				console.log(`[Steam] Auth ticket from ${msg.from} failed activation: ${err.message}`);
			}
			break;
	}
}

let sendIpcMessage;

function createIpcServer() {
	let sockets = [];

	let webSrv = HTTP.createServer((req, res) => {
		res.writeHead(404, {'content-type': 'text/plain'});
		res.end('Not Found');
	});

	let wsSrv = new WS13.WebSocketServer();
	wsSrv.http(webSrv);
	webSrv.listen(IPC_TCP_PORT, '127.0.0.1', () => {
		console.log('[IPC] Server started');
		sendIpcMessage = (msg) => {
			sockets.forEach(s => s.send(JSON.stringify(msg)));
		};
		onIpcReady();
	});

	webSrv.on('error', (err) => {
		if (err.code == 'EADDRINUSE') {
			console.log('[IPC] Connecting as client');
			connectToIpcServer();
		}
	});

	wsSrv.on('handshake', (handshakeData, reject, accept) => {
		let sock = accept();
		sockets.push(sock);

		sock.on('disconnected', () => {
			let idx = sockets.indexOf(sock);
			if (idx != -1) {
				sockets.splice(idx, 1);
			}
		});

		sock.on('error', (err) => {
			let idx = sockets.indexOf(sock);
			if (idx != -1) {
				sockets.splice(idx, 1);
			}
		});

		sock.on('message', (type, data) => {
			processMessage(data);
			// echo this message to all other connected clients
			sockets.filter(s => s != sock).forEach(s => s.send(data));
		});
	});
}

function connectToIpcServer() {
	let ws = new WS13.WebSocket(`ws://127.0.0.1:${IPC_TCP_PORT}`);

	ws.on('connected', () => {
		console.log('[IPC] Connected to server');
		sendIpcMessage = (msg) => {
			ws.send(JSON.stringify(msg));
		};
		onIpcReady();
	});

	ws.on('message', (type, data) => {
		processMessage(data);
	});

	ws.on('disconnected', () => {
		console.log('[IPC] Disconnected! Shutting down');
		ws._socket.unref();
		if (g_SteamClient && g_SteamClient.steamID) {
			g_SteamClient.logOff();
		}
	});

	ws.on('error', (err) => {
		console.log('[IPC] Disconnected! Shutting down');
		ws._socket.unref();
		if (g_SteamClient && g_SteamClient.steamID) {
			g_SteamClient.logOff();
		}
	});
}
