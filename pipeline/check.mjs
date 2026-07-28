// check.mjs — 一次性驗證:走勻 out/scoring/ 所有檔,行 lib/validate.mjs
// 用法:node check.mjs
import { readdirSync, readFileSync } from "node:fs";
import { validateScoring } from "./lib/validate.mjs";

const DIR = "out/scoring";
const files = readdirSync(DIR).filter(f => f.endsWith(".json")).sort();
let bad = 0;

for (const f of files) {
  let doc;
  try {
    doc = JSON.parse(readFileSync(`${DIR}/${f}`, "utf8"));
  } catch (e) {
    console.log(`✗ ${f}:JSON parse 失敗 — ${e.message}`);
    bad++;
    continue;
  }

  const errs = validateScoring(doc);

  // 額外檢查:spec / 今次任務要求,lib/validate.mjs 冇覆蓋嘅部分
  if (`${doc.gameId}.json` !== f) errs.push(`檔名同 gameId 唔夾(gameId=${doc.gameId})`);
  if (typeof doc.nameZh !== "string" || !doc.nameZh) errs.push("nameZh 缺失");
  if (doc.scoring?.source !== "claude-code-gen") errs.push(`source 要係 claude-code-gen(而家:${doc.scoring?.source})`);
  if (doc.scoring?.verified !== false) errs.push("verified 要係 false");
  if (!doc.scoring?.tieBreaker) errs.push("tieBreaker 缺失");
  for (const fl of doc.scoring?.fields ?? []) {
    if (!fl.icon) errs.push(`fields.${fl.id}.icon 缺失`);
    if (!fl.color) errs.push(`fields.${fl.id}.color 缺失`);
  }

  if (errs.length) {
    bad++;
    console.log(`✗ ${f}:${errs.join("; ")}`);
  }
}

console.log(`\n檢查 ${files.length} 份 — 合格 ${files.length - bad},唔合格 ${bad}`);
process.exit(bad ? 1 : 0);
