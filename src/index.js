import pkg from "../package.json" with { type: "json" };
import updateNotifier from "simple-update-notifier";

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

updateNotifier({
	pkg,
	updateCheckInterval: ONE_YEAR,
});

export default function() {
	let intro = `Zach Leatherman (v${pkg.version})`;
	let sep = '-'.repeat(intro.length);

	console.log( `${intro}
${sep}
Web      https://zachleat.com/
11ty     https://www.11ty.dev/
Mastodon https://zachleat.com/@zachleat
Bluesky  https://bsky.app/profile/zachleat.com
GitHub   https://github.com/zachleat
npm      https://www.npmjs.com/~zachleat
LinkedIn https://www.linkedin.com/in/zachleat/
` );
};