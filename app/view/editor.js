var { el } = require('redom');
var { loadFile, saveFile } = require('../file');

var log = require('../log');

class Editor {
	constructor() {
		this.filename = null;
		this.el = el('editor',
			this.content = el('textarea.content'));
	}

	update(filename) {
		var start = Date.now();

		this.filename = filename;
		loadFile(filename).then(content => {
			this.content.value = content;
			log(`editor: load-file ${filename}, ${Date.now() - start} ms`);
		});
	}

	saveFile() {
		var start = Date.now();

		return saveFile(this.filename, this.content.value).then(() => {
			log(`editor: save-file ${this.filename}, ${Date.now() - start} ms`);
		});
	}
}

module.exports = Editor;
