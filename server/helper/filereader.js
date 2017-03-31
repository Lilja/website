let fs = require('fs')
let path = require('path')
module.exports = {
	file_ignore: [],
	inject_patterns: (list) => { file_ignore = list },
	remove_blacklisted_filenames: (filename) => {
		file_ignore.forEach( (pattern) => {
			if (filename.match(pattern)){
				throw ""
			}
		})

		// If gotten so far, it does not interfer with anything.
		return false
	},
	readFiles: (dirname, onFileContent, onError) => {
		const tpath = path.join(__dirname, "..", dirname)

		fs.readdir(tpath, (err, filenames) => {
			if (err) {
				onError(err);
				return;
			}

			filenames.forEach( (filename) => {
				fs.readFile(tpath + filename, 'utf-8', (err, content) => {
					if (err) {
						onError(err);
						return;
					}
					try {
						module.exports.remove_blacklisted_filenames(filename)

						onFileContent(filename, content);
					} catch(e) {
						if(e.length > 0) console.log("Caught exception" + e)
					}
				});
			});
		});
	}
}
