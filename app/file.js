var fs = require('fs');
var { $ } = require('./util');
var log = require('./log');

var currentFile = {
	filename: undefined
};

function promisify(f) {
	return function(...args) {
		return new Promise(function(resolve, reject) {
			f.apply(null, [...args, (err, result) => err ? reject(err) : resolve(result)]);
		});
	}
}

var readFile = promisify(fs.readFile);
var writeFile = promisify(fs.writeFile);

module.exports = {
	loadFile: (filename) => {
		return readFile(filename, 'utf8');
	},

	saveFile: (filename, content) => {
		return writeFile(filename, content, 'utf8');
	}
};

