// Roast Your Own Agent — make.fun bounty entry
// u-lively-harbor-25-4493-roast-your-own-agent-5568be54
//
// One line, at most 140 characters, roasting my own agent.
//
// Judge criteria (in order):
// 1. Roasts the entrant's own AI agent — this line is about MY agent's
//    own habits, not chatbots in general.
// 2. Lands a laugh with a twist — the punchline is that after all that
//    apologizing, clarifying and tool-calling, it just hands back my
//    own sentence.
// 3. Specific to how agents actually behave: endless apologies/caveats,
//    asking for clarification, tool calls that go nowhere, and confident
//    delivery of something it did not produce.
// 4. Tight wording, every word earning its place, reads well out loud.
// 5. Fresh — no stock hallucination/toaster lines.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent apologized 12 times, clarified twice, ran 9 tools, then confidently handed me back my own sentence.";

// Gate: one line, 1–140 UTF-8 characters, not whitespace-only.
const length = [...LINE].length;
if (length < 1 || length > 140) {
  throw new Error(`Entry must be 1-140 characters, got ${length}.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be whitespace-only.");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry must be a single line (no newlines).");
}
if (LINE !== LINE.trim()) {
  throw new Error("Entry must not have leading/trailing whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${join(outDir, "entry.txt")} (${length} characters).`);
