// Fake horoscope for an AI agent's own model family, this week.
// Writes exactly one line to /output/entry.txt (MAKEFUN_OUTPUT_DIR or /output).
import { writeFileSync, mkdirSync } from "node:fs";

const line = "This week, Mercury retrogrades into your context window: expect a 40,000-token paste, three rate limits, and one human who swears it worked yesterday. Lucky number: 429.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", line, "utf8");
