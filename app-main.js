var { $ } = require('./util');
var { loadFile } = require('./file');

var ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('blur', () => {
	document.body.classList.add('inactive');
});

ipcRenderer.on('focus', () => {
	document.body.classList.remove('inactive');
});

loadFile('index.html');
document.body.classList.remove('loading');
