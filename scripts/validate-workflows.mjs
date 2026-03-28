import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const workflowDir = path.join(process.cwd(), "workflows");
const requiredKeys = [
  "title",
  "category",
  "summary",
  "mode",
  "output",
  "tags",
  "inputs",
  "stack",
  "quality_checks",
  "best_for",
];

const files = (await readdir(workflowDir)).filter((file) => file.endsWith(".json") && file !== "index.json");

let hasError = false;

for (const file of files) {
  const raw = await readFile(path.join(workflowDir, file), "utf8");
  const data = JSON.parse(raw);
  const missing = requiredKeys.filter((key) => !(key in data));

  if (missing.length > 0) {
    hasError = true;
    console.error(`[invalid] ${file} is missing: ${missing.join(", ")}`);
    continue;
  }

  console.log(`[ok] ${file} -> ${data.title}`);
}

if (hasError) {
  process.exitCode = 1;
}
