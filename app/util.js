let $ = (selector) => document.querySelector(selector);
let el = (name, attrs) => Object.assign(document.createElement(name), attrs);

function splitIntoLines(file) {
	var lines = file.split('\n');
	if (!lines[lines.length - 1]) {
		lines.pop();
	}
	return lines;
}

function joinLines(lines) {
	return lines.join('\n') + '\n';
}

module.exports = {
	$,
	el,
	splitIntoLines,
	joinLines
};
