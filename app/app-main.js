var { $ } = require('./util');
var { loadFile, saveFile } = require('./file');

var ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('blur', () => {
	document.body.classList.add('inactive');
});

ipcRenderer.on('focus', () => {
	document.body.classList.remove('inactive');
});

loadFile('app/app-main.js');
document.body.classList.remove('loading');

$('.button-save').addEventListener('click', () => {
	saveFile();
});

/* test hiding / showing toolbar
$('.toolbar').addEventListener('click', function() {
	console.log('!!! toolbar toggle');
	document.body.classList.toggle('toolbar-active');
});
*/

