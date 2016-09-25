var { $ } = require('./util');
var { loadFile, saveFile } = require('./file');
var { el, mount } = require('redom');

var ipcRenderer = require('electron').ipcRenderer;

class App {
	constructor() {
		this.el = el('app.loading.toolbar-active',
			this.titlebar = el('.titlebar', el('span.window-title')),
			this.toolbar = el('.toolbar', el('button.button-save', 'Save')),
			this.document = el('.document', el('textarea.content')));
	}

	update(file) {
		loadFile(file);
		app.el.classList.remove('loading');
	}

	blur() {
		this.el.classList.add('inactive');
	}

	focus() {
		this.el.classList.remove('inactive');
	}
}

var app = new App;

ipcRenderer.on('blur', () => app.blur());
ipcRenderer.on('focus', () => app.focus());

mount(document.body, app);
app.update('app/app-main.js');

$('.button-save').addEventListener('click', () => {
	saveFile();
});


/* test hiding / showing toolbar
 $('.toolbar').addEventListener('click', function() {
 console.log('!!! toolbar toggle');
 document.body.classList.toggle('toolbar-active');
 });
 */
