#!/usr/bin/env node
'use strict';

/**
 * Memory-leak reproduction: localizeRichPresence ENABLED (current/default behavior).
 *
 * Models the real deployment that hit this: ONE process serving a FLEET of Steam
 * clients. The rich-presence localization cache lives on each SteamUser instance
 * (this._richPresenceLocalization, populated by getAppRichPresenceLocalization in
 * components/friends.js). It is keyed by `${appID}_${language}` and entries are only
 * ever overwritten, never evicted -- a title a friend played once stays cached for
 * the life of the process.
 *
 * Two facts combine into the leak:
 *   1. Per served client, distinct titles accumulate over the process lifetime
 *      (bounded roughly by the games a friend list plays -- on the order of a user's
 *      own library, ~100 titles).
 *   2. The cache is NOT shared between instances. Popular games (CS2, Dota, ...) are
 *      played across many friend lists, yet each of the hundreds/thousands of served
 *      clients keeps its OWN copy of the same localization tokens.
 *
 * So retained memory scales with (served clients x distinct titles), and in a fleet
 * of hundreds of clients that is large even though no single client sees many games.
 *
 * Fully isolated: never connects to Steam. The only network method reached by the
 * localization path (`_sendUnified`) is stubbed to return fabricated tokens. It
 * returns FRESH token objects on every call, because in production every fetch
 * deserializes its own buffer -- instances do not share token memory.
 *
 * Run:  node leak-repro-enabled.js
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

const SERVED_CLIENTS = 300;   // Steam accounts served by ONE process (prod runs hundreds/thousands)
const DISTINCT_TITLES = 100;  // distinct games a client localizes over its lifetime (~ a user's library)
const TOKENS_PER_TITLE = 25;  // localization tokens Steam returns per game (realistic)
const MIN_LEAK_MB = 20;       // retained memory we expect to clearly exceed

// A shared catalog of popular appIDs. Deliberately small and overlapping across all
// clients -- yet, because the cache is per-instance, it still gets duplicated
// SERVED_CLIENTS times. This is the point.
const CATALOG = [];
for (let i = 0; i < DISTINCT_TITLES; i++) {
	CATALOG.push(1000 + i);
}

function measureHeapBytes() {
	global.gc();
	global.gc();
	return process.memoryUsage().heapUsed;
}

function makeClient() {
	// dataDirectory: null keeps everything in memory (no disk storage engine).
	const user = new SteamUser({dataDirectory: null, localizeRichPresence: true});

	// Stub the ONLY network call reached by the localization path. Builds FRESH
	// strings/objects per call so nothing is shared between instances -- mirroring a
	// real fetch that deserializes its own buffer each time.
	user._sendUnified = (method, body, callback) => {
		assert.strictEqual(method, 'Community.GetAppRichPresenceLocalization#1');
		let tokens = [{name: '#status', value: `Playing app ${body.appid}`}];
		for (let i = 0; i < TOKENS_PER_TITLE; i++) {
			tokens.push({name: `#token_${i}`, value: `In-game state ${i} on map de_${i} - score ${body.appid % 16}`});
		}
		callback({appid: body.appid, token_lists: [{language: body.language, tokens}]});
	};

	return user;
}

(async () => {
	// Stand up the fleet with empty caches, then measure the growth that localization
	// alone adds -- isolating the leak from the (expected, bounded) cost of the instances.
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
	const expectedEntries = SERVED_CLIENTS * DISTINCT_TITLES;

	console.log('=== localizeRichPresence: true (leak expected) ===');
	console.log(`served clients            : ${SERVED_CLIENTS}`);
	console.log(`distinct titles / client  : ${DISTINCT_TITLES}`);
	console.log(`cache entries retained    : ${totalEntries} (= clients x titles, duplicated per instance)`);
	console.log(`heapUsed growth           : ${grewMB.toFixed(1)} MB`);

	// One retained entry per (client, title): scales with the fleet, never evicted.
	assert.strictEqual(totalEntries, expectedEntries,
		`expected ${expectedEntries} retained cache entries, got ${totalEntries}`);
	// And that retention shows up as real, unbounded heap growth.
	assert.ok(grewMB > MIN_LEAK_MB,
		`expected heap to grow by more than ${MIN_LEAK_MB} MB, grew ${grewMB.toFixed(1)} MB`);

	console.log('\nPASS: localization cache grows with (served clients x titles) and is never freed.');
	process.exit(0);
})();
