/**
 * @enum EChatPermission
 */
module.exports = {
	"Close": 1,
	"Invite": 2,
	"Talk": 8,
	"Kick": 16,
	"Mute": 32,
	"SetMetadata": 64,
	"ChangePermissions": 128,
	"Ban": 256,
	"ChangeAccess": 512,
	"Mask": 1019,

	// Value-to-name mapping for convenience
	"1": "Close",
	"2": "Invite",
	"8": "Talk",
	"16": "Kick",
	"32": "Mute",
	"64": "SetMetadata",
	"128": "ChangePermissions",
	"256": "Ban",
	"512": "ChangeAccess",
	"1019": "Mask",
};

module.exports.EveryoneNotInClanDefault = module.exports.Talk;
module.exports.EveryoneDefault = module.exports.Talk | module.exports.Invite;
module.exports.MemberDefault = module.exports.Ban | module.exports.Kick | module.exports.Talk | module.exports.Invite;
module.exports.OfficerDefault = module.exports.Ban | module.exports.Kick | module.exports.Talk | module.exports.Invite;
module.exports.OwnerDefault = module.exports.ChangeAccess | module.exports.Ban | module.exports.SetMetadata | module.exports.Mute | module.exports.Kick | module.exports.Talk | module.exports.Invite | module.exports.Close;
