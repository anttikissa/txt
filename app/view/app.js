var Titlebar = require('./titlebar');
var Toolbar = require('./toolbar');
var Editor = require('./editor');

class App {
	constructor() {
		this.el = el('app.loading.toolbar-active',
			this.titlebar = new Titlebar,
			this.toolbar = new Toolbar,
			this.editor = new Editor);
	}

	update(file) {
		loadFile(file);
		this.titlebar.update(file);
		app.el.classList.remove('loading');
	}

	blur() {
		this.el.classList.add('inactive');
	}

	focus() {
		this.el.classList.remove('inactive');
	}
}

module.exports = App;