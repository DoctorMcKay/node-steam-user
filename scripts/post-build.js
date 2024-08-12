const {
	readFileSync,
	writeFileSync,
	readdirSync,
	mkdirSync,
	statSync
} = require('fs');
const {resolve, join} = require('path');

copyFiles('');

/**
 * Copies non-TS files from src to dist
 * @param {string} pathPrefix
 */
function copyFiles(pathPrefix) {
	let fullPath = resolve(__dirname, '..', 'src', pathPrefix);
	readdirSync(fullPath).forEach((filename) => {
		let fullFilePath = resolve(fullPath, filename);
		let stat = statSync(fullFilePath);
		if (stat.isDirectory()) {
			try {
				mkdirSync(resolve(__dirname, '..', 'dist', pathPrefix, filename));
			} catch (ex) {
				if (ex.code != 'EEXIST') {
					throw ex;
				}
			}

			copyFiles(join(pathPrefix, filename));
			return;
		}

		if (filename.endsWith('.ts')) {
			return;
		}

		let fullDestPath = resolve(__dirname, '..', 'dist', pathPrefix, filename);
		writeFileSync(fullDestPath, readFileSync(fullFilePath));
	});
}
