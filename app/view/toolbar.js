var { el } = require('redom');
var context = require('../context');

class Toolbar {
	constructor() {
		this.el = el('toolbar',
			this.saveButton = el('button.button-save', 'Save')
		);

		this.saveButton.addEventListener('click', () => {
			context.editor.saveFile();
		});
	}
}

module.exports = Toolbar;