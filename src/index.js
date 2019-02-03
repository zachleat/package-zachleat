const updateNotifier = require("update-notifier");
const pkg = require("../package.json");

updateNotifier({ pkg }).notify();

module.exports = function() {
	console.log( `           Hi, I’m Zach.

      Web: https://zachleat.com/
  Twitter: https://twitter.com/zachleat
   GitHub: https://github.com/zachleat
` );
};