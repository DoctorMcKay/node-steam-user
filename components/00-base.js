const {EventEmitter} = require('events');

const HandlerManager = require('./classes/HandlerManager.js');

/**
 * I admit, this is a pretty unorthodox pattern, but this is the only way I've found to define a class across multiple
 * files while also making sure that IDE intellisense can figure out which methods belong to the final class.
 *
 * Inheritance follows filenames sorted alphabetically with numbers first.
 */
class SteamUserBase extends EventEmitter {}

SteamUserBase.prototype._handlerManager = new HandlerManager();

module.exports = SteamUserBase;
