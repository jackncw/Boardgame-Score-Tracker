#!/usr/bin/env node
// audit-dump.mjs — 排 rank 順序倒出計分表摘要,俾「計分軌漏欄」審視用
// 用法:node audit-dump.mjs [from] [to]     (rank 範圍,含頭含尾)
import { readFileSync, existsSync } from "node:fs";

const [from = 1, to = 99999] = process.argv.slice(2).map(Number);
const idx = JSON.parse(readFileSync("out/games-index.json", "utf8"));

const rows = [];
for (const e of idx.sort((a, b) => (a.rank ?? 1e9) - (b.rank ?? 1e9))) {
  if (!e.hasScoring) continue;
  if (e.rank < from || e.rank > to) continue;
  const p = `out/scoring/${e.gameId}.json`;
  if (!existsSync(p)) continue;
  const d = JSON.parse(readFileSync(p, "utf8"));
  const s = d.scoring;
  rows.push({
    rank: e.rank, id: e.gameId, name: e.name, nameZh: d.nameZh,
    source: s.source, verified: s.verified === true,
    fields: s.fields.map(f => `${f.id}=${f.label}`)
  });
}

for (const r of rows) {
  console.log(`${r.rank}\t${r.id}\t${r.source}${r.verified ? "/V" : ""}\t${r.name}\t${r.fields.join(" | ")}`);
}
console.error(`— ${rows.length} 隻(rank ${from}–${to})`);
