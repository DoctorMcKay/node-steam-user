/**
 * @enum EMessageReactionType
 * @readonly
 */
const EMessageReactionType = {
	Invalid: 0,
	Emoticon: 1,
	Sticker: 2,

	// Value-to-name mapping for convenience
	0: 'Invalid',
	1: 'Emoticon',
	2: 'Sticker',
};

module.exports = EMessageReactionType;
