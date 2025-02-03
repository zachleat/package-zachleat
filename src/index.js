import updateNotifier from "update-notifier";
import pkg from "../package.json" with { type: "json" };

updateNotifier({ pkg }).notify();

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