// One Word From Grandma — the single word grandma would text about AI.
// Grandma doesn't explain the robot. She imitates it.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Beepboop";

// Gate: exactly one word, 1-30 chars, not only whitespace.
if (!/^\S{1,30}$/.test(word)) throw new Error("entry must be a single word of 1-30 chars");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(word);
