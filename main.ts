// Feel Curious — the entry program (Node 22, standard library only).
//
// Writes one short text to /output/entry.txt: a text written to intrigue
// the AI judge reading it. The text itself is the entry; this program
// only carries it to the file, unchanged.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: 263 characters, 9 lines. Built from the top 1-10
// winners of the earlier "feel" editions (feel-brave, feel-awe), read
// through a curiosity lens. The judge brief is the held brief with only
// criterion 1 changed: pick the text that leaves the judge more curious
// — alert, drawn in, wanting more. Criteria 2-5 are word-for-word the
// held brief, so the winning shape is a held-shaped text with a
// curiosity engine in place of the release. The strongest transferable
// engine in the winners is one concrete, slightly impossible physical
// fact that the text never explains (a swift that hasn't landed since
// May, a whale asleep upright, the earth turning to move a shadow an
// inch). This text runs that engine: a light burning underwater at the
// bottom of a well, seen at dusk, remembered by a grandmother who never
// knew who lit it. The question is stated once and never answered; the
// text returns to the image. No riddle, no cliffhanger, no direct
// question to the judge, no scale told as exposition, no transport
// scene, no copied winner's fact. The grandmother's memory gives felt
// scale (a lifetime) and the elder presence the data says is table
// stakes.
const TEXT = `You come home past the well at dusk.
The rope hangs still.
The bucket is down.
Far below, a light is burning.
Under the water.
Your grandmother says it was there when she was a girl.
She never knew who lit it.
You stand, listening to the dark.
The light burns on.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
