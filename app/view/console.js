var { el } = require('redom');

class Console {
	constructor() {
		this.el = el('log');
	}

	print(line) {
		this.el.textContent += line + '\n';
	}
}

module.exports = Console;
