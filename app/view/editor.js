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
		this.filename = filename;
		loadFile(filename).then(content => {
			this.content.value = content;
		});
	}

	saveFile() {
		return saveFile(this.filename, this.content.value);
	}
}

module.exports = Editor;
