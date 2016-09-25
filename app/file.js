var fs = require('fs');
var { $ } = require('./util');
var log = require('./log');

var currentFile = {
	filename: undefined
};

module.exports = {
	loadFile: (filename) => {
		fs.readFile(filename, 'utf8', (err, content) => {
			if (err) {
				return alert(`Error reading file ${filename}`);
			}
			currentFile.filename = filename;
			$('.content').value = content;
		});
	},

	saveFile: () => {
		if (!currentFile.filename) {
			return alert(`No file to save`);
		}
		var content = $('.content').value;

		fs.writeFile(currentFile.filename, content, 'utf8', (err, result) => {
			if (err) {
				return alert(`Error saving file ${filename}`);
			}
		});
	}
};

document.addEventListener('dragover', (event) => {
	// Figure out what to do here
	event.preventDefault();
});

document.addEventListener('drop', (event) => {
	event.preventDefault();
	var files = event.dataTransfer.files;
	if (files.length !== 1) {
		return alert('Must drag & drop only 1 file, currently');
	}

	loadFile(files[0].path);
});

