const FS = require('fs');
const Protobuf = require('protobufjs');

var builder = new Protobuf.Builder();
FS.readdirSync(__dirname + '/../protobufs').forEach(function(file) {
	if (file.substr(-6) === '.proto') {
		Protobuf.loadProtoFile(__dirname + '/../protobufs/' + file, builder);
	}
});

module.exports = builder.build();
