var { app, BrowserWindow } = require('electron');
var window;

function createWindow() {
	window = new BrowserWindow({
		width: 1280, height: 800,
		titleBarStyle: 'hidden'
	});
	window.loadURL(`file://${__dirname}/index.html`);
}

app.on('ready', createWindow);

app.on('browser-window-blur', () => {
	window.webContents.send('blur');
});

app.on('browser-window-focus', () => {
	window.webContents.send('focus');
});
