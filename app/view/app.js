var { el } = require('redom');

var Titlebar = require('./titlebar');
var Toolbar = require('./toolbar');
var Editor = require('./editor');
var Console = require('./console');

var context = require('../context');
var log = require('../log');

class App {
	constructor() {
		this.el = el('app.loading.toolbar-active',
			this.titlebar = new Titlebar,
			this.toolbar = new Toolbar,
			this.editor = new Editor,
			this.console = new Console);

		context.editor = this.editor;
		context.console = this.console;

		document.addEventListener('dragover', (event) => {
			event.preventDefault();
		});

		document.addEventListener('drop', (event) => {
			event.preventDefault();
			var files = event.dataTransfer.files;
			if (files.length !== 1) {
				return alert('Must drag & drop only 1 file, currently');
			}

			var relativePath = require('path').relative(process.cwd(), files[0].path);
			this.update(relativePath);
		});
	}

	update(filename) {
		this.el.classList.add('loading');
		this.editor.update(filename);
		this.titlebar.update(filename);
		this.el.classList.remove('loading');
	}

	blur() {
		this.el.classList.add('inactive');
	}

	focus() {
		this.el.classList.remove('inactive');
	}
}

module.exports = App;