#!/usr/bin/env node
// audit-apply.mjs — 審視結果落地:指定 gameId,喺 fields 第一位插「計分軌分數」
// 用法:node audit-apply.mjs bgg-1 bgg-2 …
//       node audit-apply.mjs --file ids.txt      (每行一個 gameId,# 開頭當註解)
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const FIELD = {
  id: "track_vp",
  label: "計分軌分數",
  note: "遊戲過程中喺計分軌累積嘅分數",
  icon: "📈",
  color: "#E5E0D5",
  input: "number",
  min: 0
};

let ids = process.argv.slice(2);
if (ids[0] === "--file") {
  ids = readFileSync(ids[1], "utf8").split("\n")
    .map(l => l.trim()).filter(l => l && !l.startsWith("#"));
}

let done = 0, skip = 0;
for (const id of ids) {
  const p = `out/scoring/${id}.json`;
  if (!existsSync(p)) { console.log(`✗ ${id}:搵唔到檔`); skip++; continue; }
  const d = JSON.parse(readFileSync(p, "utf8"));
  if (d.scoring.source === "manual" || d.scoring.verified === true) {
    console.log(`- ${id}:manual/verified,跳過`); skip++; continue;
  }
  if (d.scoring.fields.some(f => f.id === "track_vp")) {
    console.log(`- ${id}:已經有 track_vp`); skip++; continue;
  }
  if (d.scoring.fields.length >= 20) { console.log(`✗ ${id}:已經 20 欄,加唔落`); skip++; continue; }
  d.scoring.fields.unshift({ ...FIELD });
  writeFileSync(p, JSON.stringify(d, null, 1) + "\n");
  done++;
}
console.log(`\n補咗 ${done} 隻,跳過 ${skip} 隻`);
