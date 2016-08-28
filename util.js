let $ = (selector) => document.querySelector(selector);

let el = (name, attrs) => Object.assign(document.createElement(name), attrs);

module.exports = {
	$: $,
	el: el
};
