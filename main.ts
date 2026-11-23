// Writes the vacuum's alibi — one line, 154 characters — to entry.txt
// and checks its length against the 1-200 character gate.
import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan robot voice, smug about its sensors: the vacuum did not miss the
// spot, it classified the mess as a protected habitat — and the dust bunny
// living there has more tenure in the house than the owner does.
const line = "I did not miss that spot. My sensors classified it as a protected habitat: one sock, two crumbs, and a dust bunny with more tenure in this house than you.";

// Count Unicode code points the way the gate counts them.
function codePointCount(text: string): number {
  return [...text].length;
}

const size = codePointCount(line);
if (size < 1 || size > 200) {
  throw new Error(`entry is ${size} characters, must be 1-200`);
}

// The grader sets MAKEFUN_OUTPUT_DIR=/output; fall back to /output locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log(`wrote ${size} characters to ${outDir}/entry.txt`);
