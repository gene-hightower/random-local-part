This is a package to generate a random short(ish) string for use as a mailbox address local-part.

$ npm ci
$ npm run build
$ npm run test

You can print out out with:

$ node dist/lib/random-local-part.js 

Use:

import { random_local_part } from "random-local-part";

console.log(random_local_part());
