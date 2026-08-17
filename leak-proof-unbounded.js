#!/usr/bin/env node
'use strict';

/**
 * Proof that the rich-presence localization cache leak is UNBOUNDED and RETAINED
 * (i.e. not just GC churn that would be collected).
 *
 * The doubt this answers: "165 MB might be within what GC will reclaim."
 *
 * Method:
 *   1. Every measurement is taken AFTER two forced global.gc() passes, so each number
 *      is the LIVE set -- memory GC looked at and could not free. If it were
 *      collectible garbage, it would already be gone at measurement time.
 *   2. We grow the number of distinct cache keys in steps and record the post-GC live
 *      heap at each step. A leak shows MONOTONIC growth with a ~CONSTANT cost per
 *      entry (no plateau). A bounded cache would flatten (per-entry cost -> 0).
 *   3. Finally we drop the cache reference (this._richPresenceLocalization = {}) and
 *      GC again. Memory returns to baseline -- proving the growth was pinned solely by
 *      the cache holding references (a real leak), not by anything GC could reclaim on
 *      its own while the cache stays alive.
 *
 * Fully isolated: never connects to Steam; the network call is stubbed.
 *
 * Run:  node leak-proof-unbounded.js
 * (Re-execs itself with --expose-gc so measurements are deterministic.)
 */

// Re-exec with --expose-gc so we can force GC and measure the live set.
if (typeof global.gc !== 'function') {
	const {spawnSync} = require('child_process');
	const res = spawnSync(process.execPath, ['--expose-gc', __filename, ...process.argv.slice(2)], {stdio: 'inherit'});
	process.exit(res.status === null ? 1 : res.status);
}

const assert = require('assert');
const path = require('path');
const SteamUser = require(path.join(__dirname, 'index.js'));

const STEPS = [10000, 20000, 40000, 80000]; // cumulative distinct cache keys
const TOKENS_PER_TITLE = 10;                 // localization tokens per app

function liveHeapBytes() {
	// Two passes: the first frees young garbage, the second lets anything promoted by
	// the first pass be collected too. What remains is the reachable/live set.
	global.gc();
	global.gc();
	return process.memoryUsage().heapUsed;
}

const user = new SteamUser({dataDirectory: null, localizeRichPresence: true});
user._sendUnified = (method, body, callback) => {
	let tokens = [{name: '#status', value: `Playing app ${body.appid}`}];
	for (let i = 0; i < TOKENS_PER_TITLE; i++) {
		tokens.push({name: `#token_${i}`, value: `In-game state ${i} on map de_${i} - score ${body.appid % 16}`});
	}
	callback({appid: body.appid, token_lists: [{language: body.language, tokens}]});
};

(async () => {
	const baseline = liveHeapBytes();

	let populated = 0;
	const rows = [];
	for (const target of STEPS) {
		for (; populated < target; populated++) {
			// appid = populated+1 -> every key distinct -> every call inserts a new entry
			try {
				await user._getRPLocalizedString(populated + 1, {steam_display: '#status'}, 'english');
			} catch (ex) {
				//
			}
		}

		const live = liveHeapBytes();
		const entries = Object.keys(user._richPresenceLocalization).length;
		const retainedMB = (live - baseline) / (1024 * 1024);
		const bytesPerEntry = (live - baseline) / entries;
		rows.push({entries, retainedMB, bytesPerEntry});
	}

	console.log('=== live heap AFTER forced GC, as distinct cache keys grow ===');
	console.log('entries\tretained(MB)\tbytes/entry');
	for (const r of rows) {
		console.log(`${r.entries}\t${r.retainedMB.toFixed(1)}\t\t${Math.round(r.bytesPerEntry)}`);
	}

	// (a) Monotonic growth: more keys -> strictly more retained live memory.
	for (let i = 1; i < rows.length; i++) {
		assert.ok(rows[i].retainedMB > rows[i - 1].retainedMB,
			`retained memory did not grow from ${rows[i - 1].entries} to ${rows[i].entries} entries`);
	}

	// (b) No plateau: cost-per-entry stays roughly constant across a 8x range of load.
	// A bounded cache would show bytes/entry collapsing toward zero as entries grow.
	const first = rows[0].bytesPerEntry;
	const last = rows[rows.length - 1].bytesPerEntry;
	const ratio = last / first;
	console.log(`\nbytes/entry first=${Math.round(first)} last=${Math.round(last)} ratio=${ratio.toFixed(2)} (≈1 => linear, unbounded)`);
	assert.ok(ratio > 0.7 && ratio < 1.3,
		`per-entry cost is not constant (ratio ${ratio.toFixed(2)}); expected linear growth`);

	// (c) Reachability proof: the ONLY thing pinning this memory is the cache. Drop the
	// reference, GC, and the live set falls back to baseline. This is the direct
	// rebuttal to "GC would reclaim it" -- GC reclaims it the instant, and only when,
	// the cache stops referencing it.
	const beforeDrop = liveHeapBytes();
	user._richPresenceLocalization = {};
	const afterDrop = liveHeapBytes();
	const reclaimedMB = (beforeDrop - afterDrop) / (1024 * 1024);
	const residualMB = (afterDrop - baseline) / (1024 * 1024);
	console.log(`\nreclaimed after dropping cache: ${reclaimedMB.toFixed(1)} MB`);
	console.log(`residual above baseline       : ${residualMB.toFixed(1)} MB`);

	assert.ok(reclaimedMB > rows[rows.length - 1].retainedMB * 0.8,
		`dropping the cache did not reclaim the retained memory (${reclaimedMB.toFixed(1)} MB)`);
	assert.ok(residualMB < 5,
		`heap did not return to baseline after dropping cache (residual ${residualMB.toFixed(1)} MB)`);

	console.log('\nPASS: retained live memory grows linearly with distinct keys (unbounded),');
	console.log('      survives forced GC, and is freed only by releasing the cache reference.');
	process.exit(0);
})();
