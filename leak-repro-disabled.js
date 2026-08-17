#!/usr/bin/env node
'use strict';

/**
 * Memory-leak reproduction: localizeRichPresence DISABLED (new option).
 *
 * Same fleet workload as leak-repro-enabled.js (a single process serving hundreds of
 * Steam clients, each localizing a catalog of titles), but with the new
 * `localizeRichPresence: false` option. _getRPLocalizedString short-circuits before
 * touching the network or the per-instance _richPresenceLocalization cache, so
 * nothing accumulates regardless of how many clients or titles are involved: caches
 * stay empty and heap usage stays flat.
 *
 * Fully isolated: never connects to Steam. The network method used by the
 * localization path (`_sendUnified`) is stubbed AND asserted to never be called.
 *
 * Run:  node leak-repro-disabled.js
 * (It re-execs itself with --expose-gc so heap measurements are deterministic.)
 */

// Re-exec with --expose-gc so we can force GC between measurements.
if (typeof global.gc !== 'function') {
	const {spawnSync} = require('child_process');
	const res = spawnSync(process.execPath, ['--expose-gc', __filename, ...process.argv.slice(2)], {stdio: 'inherit'});
	process.exit(res.status === null ? 1 : res.status);
}

const assert = require('assert');
const path = require('path');
const SteamUser = require(path.join(__dirname, 'index.js'));

const SERVED_CLIENTS = 300;   // same workload as the "enabled" repro
const DISTINCT_TITLES = 100;
const TOKENS_PER_TITLE = 25;
const MAX_GROWTH_MB = 2;      // allow only small allocator noise; no retained growth

const CATALOG = [];
for (let i = 0; i < DISTINCT_TITLES; i++) {
	CATALOG.push(1000 + i);
}

function measureHeapBytes() {
	global.gc();
	global.gc();
	return process.memoryUsage().heapUsed;
}

let totalNetworkCalls = 0;

function makeClient() {
	// dataDirectory: null keeps everything in memory (no disk storage engine).
	const user = new SteamUser({dataDirectory: null, localizeRichPresence: false});

	// Same stub as the "enabled" repro, but here it must NEVER be reached because
	// localization is disabled. Every call is counted and asserted to stay at zero.
	user._sendUnified = (method, body, callback) => {
		totalNetworkCalls++;
		let tokens = [{name: '#status', value: `Playing app ${body.appid}`}];
		for (let i = 0; i < TOKENS_PER_TITLE; i++) {
			tokens.push({name: `#token_${i}`, value: `In-game state ${i} on map de_${i} - score ${body.appid % 16}`});
		}
		callback({appid: body.appid, token_lists: [{language: body.language, tokens}]});
	};

	return user;
}

(async () => {
	const clients = [];
	for (let c = 0; c < SERVED_CLIENTS; c++) {
		clients.push(makeClient());
	}

	const heapBefore = measureHeapBytes();

	for (const user of clients) {
		for (const appid of CATALOG) {
			try {
				await user._getRPLocalizedString(appid, {steam_display: '#status'}, 'english');
			} catch (ex) {
				// Not expected in this repro, but never let a rejection mask the result.
			}
		}
	}

	const heapAfter = measureHeapBytes();
	const grewMB = (heapAfter - heapBefore) / (1024 * 1024);

	let totalEntries = 0;
	for (const user of clients) {
		totalEntries += Object.keys(user._richPresenceLocalization).length;
	}

	console.log('=== localizeRichPresence: false (no leak expected) ===');
	console.log(`served clients            : ${SERVED_CLIENTS}`);
	console.log(`distinct titles / client  : ${DISTINCT_TITLES}`);
	console.log(`network calls made        : ${totalNetworkCalls}`);
	console.log(`cache entries retained    : ${totalEntries}`);
	console.log(`heapUsed growth           : ${grewMB.toFixed(1)} MB`);

	// Localization is disabled: the network is never hit and nothing is cached,
	// no matter how many clients or titles are processed.
	assert.strictEqual(totalNetworkCalls, 0,
		`expected 0 network calls, got ${totalNetworkCalls}`);
	assert.strictEqual(totalEntries, 0,
		`expected 0 retained cache entries, got ${totalEntries}`);
	// Heap stays flat aside from allocator noise.
	assert.ok(grewMB < MAX_GROWTH_MB,
		`expected heap growth under ${MAX_GROWTH_MB} MB, grew ${grewMB.toFixed(1)} MB`);

	console.log('\nPASS: no cache growth and no leak with localizeRichPresence disabled.');
	process.exit(0);
})();
