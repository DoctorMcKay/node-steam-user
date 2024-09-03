const ByteBuffer = require('bytebuffer');
const SteamCrypto = require('@doctormckay/steam-crypto');

const SteamUserMessages = require('./03-messages.js');
const Schema = require('../protobufs/generated/_load.js');

const PROTOBUF_PAYLOAD_MAGIC = 0x71F617D0;
const PROTOBUF_METADATA_MAGIC = 0x1F4812BE;
const PROTOBUF_SIGNATURE_MAGIC = 0x1B81B817;
const PROTOBUF_ENDOFMANIFEST_MAGIC = 0x32C415AB;
const STEAM3_MANIFEST_MAGIC = 0x16349781;

exports.parse = function(buffer) {
	if (!ByteBuffer.isByteBuffer(buffer)) {
		buffer = ByteBuffer.wrap(buffer, ByteBuffer.LITTLE_ENDIAN);
	}

	let manifest = {};
	let magic;
	let meta;
	let length;

	while (buffer.remaining() > 0) {
		magic = buffer.readUint32();
		switch (magic) {
			case PROTOBUF_PAYLOAD_MAGIC:
				length = buffer.readUint32();
				manifest.files = SteamUserMessages._decodeProto(Schema.ContentManifestPayload, buffer.slice(buffer.offset, buffer.offset + length)).mappings;
				buffer.skip(length);
				break;

			case PROTOBUF_METADATA_MAGIC:
				length = buffer.readUint32();
				meta = SteamUserMessages._decodeProto(Schema.ContentManifestMetadata, buffer.slice(buffer.offset, buffer.offset + length));
				buffer.skip(length);
				break;

			case PROTOBUF_SIGNATURE_MAGIC:
				length = buffer.readUint32();
				//manifest.signature = Messages.decodeProto(Schema.ContentManifestSignature, buffer.slice(buffer.offset, buffer.offset + length)).signature;
				buffer.skip(length);
				// maybe at some point we should verify this signature, but for now I can't figure out how
				break;

			case PROTOBUF_ENDOFMANIFEST_MAGIC:
				break;

			case STEAM3_MANIFEST_MAGIC:
				throw new Error('Received unexpected Steam3 manifest; not yet implemented');

			default:
				throw new Error(`Unknown magic value ${magic.toString(16)} at offset ${buffer.offset - 4}`);
		}
	}

	(manifest.files || []).forEach(function process(file) {
		for (let i in file) {
			if (!Object.hasOwnProperty.call(file, i)) {
				continue;
			}

			if (file[i] instanceof ByteBuffer) {
				file[i] = file[i].toString('hex');
			} else if (file[i] instanceof ByteBuffer.Long) {
				file[i] = file[i].toString();
			} else if (Buffer.isBuffer(file[i])) {
				file[i] = file[i].toString('hex');
			} else if (file[i] && !Buffer.isBuffer(file[i]) && typeof file[i] === 'object') {
				process(file[i]);
			}
		}
	});

	if (meta) {
		for (let i in meta) {
			if (Object.hasOwnProperty.call(meta, i)) {
				manifest[i] = meta[i] instanceof ByteBuffer.Long ? meta[i].toString() : meta[i];
			}
		}
	}

	return manifest;
};

exports.decryptFilenames = function(manifest, key) {
	if (!manifest.filenames_encrypted) {
		return;
	}

	(manifest.files || []).forEach(function(file) {
		file.filename = SteamCrypto.symmetricDecrypt(Buffer.from(file.filename, 'base64'), key);
		file.filename = file.filename.slice(0, file.filename.indexOf(0)).toString('utf8');

		// Verify the sha1
		/*if (file.sha_filename) {
			let hash = Crypto.createHash('sha1');
			hash.update(file.filename, 'ascii');
			if (hash.digest('hex') != file.sha_filename) {
				throw new Error("Filename hash did not validate; is the decryption key correct?");
			}
		}*/

		// ^ Disabled because apparently some manifests contain invalid filename hashes. Because Valve.
	});

	manifest.filenames_encrypted = false;
};
