var fs = require('fs');
var { $ } = require('./util');

module.exports = {
	loadFile: (filename) => {
		var file = fs.readFileSync(filename, 'utf8');
		$('.content').textContent = file;
		$('.window-title').textContent = filename;
	}
};

