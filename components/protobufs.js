var Protobuf = require('protobufjs');
var fs = require('fs');

var builder = new Protobuf.Builder();
fs.readdirSync(__dirname + '/../protobufs').forEach(function(file) {
	if (file.substr(-6) === '.proto') {
		Protobuf.loadProtoFile(__dirname + '/../protobufs/' + file, builder);
	}
});

module.exports = builder.build();
