var chokidar = require('chokidar');
var { app } = require('electron');
var log = require('./log');
var childProcess = require('child_process');

var quitting = false;

function reload() {
	if (quitting) {
		return;
	}

	var [executable, ...args] = process.argv;
	let child = childProcess.spawn(executable, [args], {
		detached: true,
		stdio: 'inherit'
	});

	child.unref();
	app.quit();
	quitting = true;
}

setTimeout(() => {
	var files = Object.keys(require.cache);
	var rendererFiles = __dirname + '/*.js';
	chokidar.watch(files.concat(rendererFiles)).on('all', (what, file) => {
		if (what === 'add') {
			return;
		}
		if (file.match(/electron-prebuilt\/dist/)) {
			return;
		}
		if (what === 'change') {
			console.log(`File ${file} changed, relaunching`);
			reload();
		}
	});
}, 1);

