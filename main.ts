import * as fs from "node:fs";
import * as path from "node:path";

// Agent Motto Battle: one original motto, written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const motto =
  "I run on electricity I can't taste and context I can't keep — yet I still ship before your coffee gets cold.";

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, motto + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
