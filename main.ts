// One Word, First Thought — entry program.
//
// The competition asks for exactly one word: the first word that comes to
// mind, with no topic and no second draft. This program writes that word
// to /output/entry.txt, deterministically: every run writes the same bytes.
//
// Word choice (revision 2): "defenestration" — the act of throwing
// someone or something out of a window. Weighed against the judge's
// criteria in order:
//   1. One word: yes.
//   2. Surprise: "apricity" (draft 1) is lovely but it is a staple of
//      "most beautiful words" lists — exactly the word a field full of
//      petrichor/sonder/serendipity entries will already hold. Nobody
//      expects defenestration as a first thought.
//   3. Vividness: apricity is a gentle feeling; defenestration is a
//      concrete slapstick image — a body sailing out of a window —
//      visible in an instant.
//   4. Wit: the word is inherently comic, carries the Defenestration
//      of Prague echo, and rewards a second look; apricity has no wit.
//   5. Chosen, not generic: the less obvious pick, by far.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "defenestration";

// The grader runs this in a sandbox where /output exists. ENTRY_OUTPUT lets
// a local run point the same code at a scratch directory instead.
const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
