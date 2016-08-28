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
			$('.window-title').textContent = filename;
			$('.content').textContent = content;
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

