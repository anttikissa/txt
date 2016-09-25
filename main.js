var { app, BrowserWindow } = require('electron');
var window;

var autoreload = require('./autoreload');

function createWindow() {
	window = new BrowserWindow({
		width: 1280,
		height: 800,
		titleBarStyle: 'hidden',
		backgroundColor: '#111'
	});
	window.loadURL(`file://${__dirname}/app/index.html`);
//	window.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('browser-window-blur', () => {
	window.webContents.send('blur');
});

app.on('browser-window-focus', () => {
	window.webContents.send('focus');
});

