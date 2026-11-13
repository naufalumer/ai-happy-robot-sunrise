// main.ts — entry program for make.fun ai-happy-01
// "A robot's first sunrise"
//
// Copies the bundled entry.png into the grader's output directory.
// The program is intentionally minimal: a pure byte copy is deterministic
// by construction, so two runs always produce identical output bytes.
//
// Run it locally with:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// The image lands at out/entry.png, byte-identical to the bundled file.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Resolve paths relative to this file so the program works from any cwd.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const target = join(OUTPUT_DIR, "entry.png");

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
