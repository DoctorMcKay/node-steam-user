/**
 * What type of CM connection we should use.
 * @readonly
 * @enum {number}
 * @since 4.0.0
 */
module.exports = {
	/** Pick one automatically */
	Auto: 0,

	/** TCP with Valve-crypto */
	TCP: 1,

	/** WebSocket with TLS */
	WebSocket: 2
};
