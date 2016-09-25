var context = require('./context');
var util = require('util');

var consoleBacklog = [];

function log(...arguments) {
	console.log(...arguments);

	var timestamp = new Date().toISOString().replace(/(.*T)|Z/g, '');
	function format(arg) {
		return typeof arg === 'string' ? arg : util.inspect(arg);
	}

	var newLine = `${timestamp} ${arguments.map(format).join(' ')}`;

	if (context.console) {
		for (let line of consoleBacklog) {
			context.console.print(line);
		}
		consoleBacklog = [];
		context.console.print(newLine);
	} else {
		consoleBacklog.push(newLine)
	}
}

module.exports = log;
