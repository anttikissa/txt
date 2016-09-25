class Toolbar {
	constructor() {
		this.el = el('toolbar',
			this.saveButton = el('button.button-save', 'Save')
		);

		this.saveButton.addEventListener('click', () => {
			saveFile();
		});


	}
}

module.exports = Toolbar;