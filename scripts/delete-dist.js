const FS = require('fs');
const Path = require('path');

deleteDirectory(Path.join(__dirname, '..', 'dist'));

function deleteDirectory(dirName) {
	if (!FS.existsSync(dirName)) {
		return;
	}

	FS.readdirSync(dirName).forEach((filename) => {
		let filePath = Path.join(dirName, filename);

		let stat = FS.statSync(filePath);
		if (stat.isDirectory()) {
			deleteDirectory(filePath);
		} else {
			FS.unlinkSync(filePath);
		}
	});

	FS.rmdirSync(dirName);
}
