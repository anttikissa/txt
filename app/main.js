var { $ } = require('./util');
var { loadFile, saveFile } = require('./file');
var { el, mount } = require('redom');

var ipcRenderer = require('electron').ipcRenderer;

var App = require('./view/app');
var app = new App;

ipcRenderer.on('blur', () => app.blur());
ipcRenderer.on('focus', () => app.focus());

mount(document.body, app);
app.update('app/main.js');

// test hiding / showing toolbar
// $('.toolbar').addEventListener('click', function() {
// console.log('!!! toolbar toggle');
// document.body.classList.toggle('toolbar-active');
// });
