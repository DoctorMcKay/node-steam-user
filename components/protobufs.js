var Protobuf = require('protobufjs');
var fs = require('fs');

var builder = new Protobuf.Builder();
fs.readdirSync(__dirname + '/../protobufs').forEach(function(file) {
	Protobuf.loadProtoFile(__dirname + '/../protobufs/' + file, builder);
});

module.exports = builder.build();
