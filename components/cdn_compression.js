const AdmZip = require('adm-zip');
const ByteBuffer = require('bytebuffer');
const LZMA = require('lzma');
const StdLib = require('@doctormckay/stdlib');
const {ZSTDDecoder} = require('zstddec');

const HEADER_ZSTD = 'VSZa';
const HEADER_VZIP = 'VZa';
const HEADER_ZIP = 'PK\u0003\u0004';

const FOOTER_ZSTD = 'zsv';
const FOOTER_VZIP = 'zv';

exports.unzip = async function(data) {
	let headerString = data.slice(0, 4).toString('utf8');

	if (headerString.startsWith(HEADER_ZSTD)) {
		return decompressZstd(data);
	}

	if (headerString.startsWith(HEADER_VZIP)) {
		return decompressVzip(data);
	}

	if (headerString.startsWith(HEADER_ZIP)) {
		return decompressZip(data);
	}

	throw new Error(`Unknown compression type: ${headerString} (${data.slice(0, 4).toString('hex')})`);
};

function decompressZstd(data) {
	return new Promise((resolve, reject) => {
		let buffer = ByteBuffer.wrap(data, ByteBuffer.LITTLE_ENDIAN);

		if (buffer.readUTF8String(HEADER_ZSTD.length) != HEADER_ZSTD) {
			return reject(new Error('Zstd: Didn\'t see expected header'));
		}

		buffer.skip(4); // CRC but we don't really care, there's another one anyway
		let compressedData = buffer.slice(buffer.offset, buffer.limit - 15);
		buffer.skip(compressedData.remaining());

		let decompressedCrc = buffer.readUint32();
		let decompressedSize = buffer.readUint32();
		buffer.skip(4); // 0-padding
		if (buffer.readUTF8String(FOOTER_ZSTD.length) != FOOTER_ZSTD) {
			return reject(new Error('Zstd: Didn\'t see expected footer'));
		}

		let decoder = new ZSTDDecoder();
		decoder.init()
			.then(() => {
				let result = Buffer.from(decoder.decode(compressedData.toBuffer(), decompressedSize));

				// Verify the result
				if (decompressedSize != result.length) {
					return reject(new Error('Zstd: Decompressed size was not valid'));
				}

				if (StdLib.Hashing.crc32(result) != decompressedCrc) {
					return reject(new Error('Zstd: CRC check failed on decompressed data'));
				}

				return resolve(result);
			});
	});
}

function decompressVzip(data) {
	return new Promise((resolve, reject) => {
		let buffer = ByteBuffer.wrap(data, ByteBuffer.LITTLE_ENDIAN);

		if (buffer.readUTF8String(HEADER_VZIP.length) != HEADER_VZIP) {
			return reject(new Error('VZip: Didn\'t see expected header'));
		}

		buffer.skip(4); // either a timestamp or a CRC; either way, don't care
		let properties = buffer.slice(buffer.offset, buffer.offset + 5).toBuffer();
		buffer.skip(5);

		let compressedData = buffer.slice(buffer.offset, buffer.limit - 10);
		buffer.skip(compressedData.remaining());

		let decompressedCrc = buffer.readUint32();
		let decompressedSize = buffer.readUint32();
		if (buffer.readUTF8String(FOOTER_VZIP.length) != FOOTER_VZIP) {
			return reject(new Error('VZip: Didn\'t see expected footer'));
		}

		let uncompressedSizeBuffer = Buffer.alloc(8);
		uncompressedSizeBuffer.writeUInt32LE(decompressedSize, 0);
		uncompressedSizeBuffer.writeUInt32LE(0, 4);

		LZMA.decompress(Buffer.concat([properties, uncompressedSizeBuffer, compressedData.toBuffer()]), (result, err) => {
			if (err) {
				return reject(err);
			}

			result = Buffer.from(result); // it's a byte array

			// Verify the result
			if (decompressedSize != result.length) {
				return reject(new Error('VZip: Decompressed size was not valid'));
			}

			if (StdLib.Hashing.crc32(result) != decompressedCrc) {
				return reject(new Error('VZip: CRC check failed on decompressed data'));
			}

			return resolve(result);
		});
	});
}

function decompressZip(data) {
	let unzip = new AdmZip(data);
	return unzip.readFile(unzip.getEntries()[0]);
}
