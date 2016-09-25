class Titlebar {
	constructor() {
		this.el = el('titlebar',
			this.title = el('span.window-title'));
	}

	update(filename) {
		this.title.textContent = filename;
	}
}

module.exports = Titlebar;
