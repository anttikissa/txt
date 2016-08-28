var { app, BrowserWindow } = require('electron');
var window;

function createWindow() {
	window = new BrowserWindow({ width: 1280, height: 800 });
	window.loadURL(`file://${__dirname}/index.html`);
}

app.on('ready', createWindow);

