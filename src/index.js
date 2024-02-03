import updateNotifier from "update-notifier";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

updateNotifier({ pkg }).notify();

export default function() {
	let intro = `I’m Zach (v${pkg.version})`;
	let sep = '-'.repeat(intro.length);

	console.log( `                ${intro}
                ${sep}
           Web: https://zachleat.com/
          11ty: https://www.11ty.dev/
      Mastodon: https://zachleat.com/@zachleat
        GitHub: https://github.com/zachleat
           npm: https://www.npmjs.com/~zachleat
      LinkedIn: https://www.linkedin.com/in/zachleat/
OpenCollective: https://opencollective.com/zachleat
       Codepen: https://codepen.io/zachleat/
       Bluesky: https://bsky.app/profile/zachleat.com
    Letterboxd: https://letterboxd.com/zachleat/
` );
};