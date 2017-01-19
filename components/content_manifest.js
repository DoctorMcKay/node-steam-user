var ByteBuffer = require('bytebuffer');
var Protos = require('./protobufs.js');

const PROTOBUF_PAYLOAD_MAGIC = 0x71F617D0;
const PROTOBUF_METADATA_MAGIC = 0x1F4812BE;
const PROTOBUF_SIGNATURE_MAGIC = 0x1B81B817;
const PROTOBUF_ENDOFMANIFEST_MAGIC = 0x32C415AB;
const STEAM3_MANIFEST_MAGIC = 0x16349781;

exports.parse = function(buffer) {
	if (!ByteBuffer.isByteBuffer(buffer)) {
		buffer = ByteBuffer.wrap(buffer, ByteBuffer.LITTLE_ENDIAN);
	}

	var manifest = {};
	var meta;
	var length;

	while (buffer.remaining() > 0) {
		switch (buffer.readUint32()) {
			case PROTOBUF_PAYLOAD_MAGIC:
				length = buffer.readUint32();
				manifest.files = Protos.ContentManifestPayload.decode(buffer.slice(buffer.offset, buffer.offset + length)).mappings;
				buffer.skip(length);
				break;

			case PROTOBUF_METADATA_MAGIC:
				length = buffer.readUint32();
				meta = Protos.ContentManifestMetadata.decode(buffer.slice(buffer.offset, buffer.offset + length));
				buffer.skip(length);
				break;

			case PROTOBUF_SIGNATURE_MAGIC:
				length = buffer.readUint32();
				manifest.signature = Protos.ContentManifestSignature.decode(buffer.slice(buffer.offset, buffer.offset + length)).signature.toBuffer();
				buffer.skip(length);
				break;

			case PROTOBUF_ENDOFMANIFEST_MAGIC:
				break;

			case STEAM3_MANIFEST_MAGIC:
				// TODO
				break;

			default:
				throw new Error("Unknown magic value");
		}
	}

	(manifest.files || []).forEach(function process(file) {
		for (var i in file) {
			if (!file.hasOwnProperty(i)) {
				continue;
			}

			if (file[i] instanceof ByteBuffer) {
				file[i] = file[i].toBuffer();
			} else if (file[i] instanceof ByteBuffer.Long) {
				file[i] = file[i].toString();
			} else if (file[i] && !Buffer.isBuffer(file[i]) && typeof file[i] === 'object') {
				process(file[i]);
			}
		}
	});

	if (meta) {
		for (var i in meta) {
			if (meta.hasOwnProperty(i)) {
				manifest[i] = meta[i] instanceof ByteBuffer.Long ? meta[i].toString() : meta[i];
			}
		}
	}

	return manifest;
};

exports.decryptFilenames = function(manifest, key) {

};
