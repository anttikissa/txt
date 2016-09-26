var { el } = require('redom');
var { splitIntoLines, joinLines } = require('../util');

class Console {
	constructor() {
		this.el = el('console',
			this.output = el('textarea.output'));
	}

	print(line) {
		this.output.value += line + '\n';

		let limitOutputLines = () => {
			var outputLines = splitIntoLines(this.output.value);

			const MAX_LINES = 500;

			if (outputLines.length > MAX_LINES) {
				var linesTooMuch = outputLines.length - MAX_LINES;
				var fewerLines = outputLines.slice(linesTooMuch);
				this.output.value = joinLines(fewerLines);
			}
		};

		limitOutputLines();

	}
}

module.exports = Console;
