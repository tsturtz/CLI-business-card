const cowsay = require('cowsay');
const colors = require('colors');

module.exports = cowsay.think({
	text: 'Taylor Sturtz'.bold.white + '\n' + 'Software Engineer'.italic.cyan,
  f: 'tux'
});