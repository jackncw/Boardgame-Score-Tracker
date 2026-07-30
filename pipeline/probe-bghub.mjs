#!/usr/bin/env node
/* =========================================================
   probe-bghub.mjs — 由遊戲名自動生 slug,批量探 bghub 鏡像有冇 rulebook

   bghub 嘅 slug 冇統一規則:有時 `windmill-valley`,有時 `letsgotojapan`,
   所以每隻試幾個變體。命中率實測約三成半。

   用法:node probe-bghub.mjs [起始 rank] [結束 rank]
   輸出:out/bghub-hits.json  —— [{bggId, rank, name, url}, …](會累積,唔會覆蓋已有)
========================================================= */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const FROM = Number(process.argv[2]) || 1001;
const TO = Number(process.argv[3]) || 3000;
const OUT = "out/bghub-hits.json";
const CONCURRENCY = 6;

const status = JSON.parse(readFileSync("out/research-status.json", "utf8"));
const pending = status.filter(r =>
  r.result === "pending" && r.rank >= FROM && r.rank <= TO);

const hits = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
const probed = new Set(hits.map(h => h.bggId));
// 之前探過但冇中嘅都要記低,唔好每次重跑
const missPath = "out/bghub-miss.json";
const misses = existsSync(missPath) ? JSON.parse(readFileSync(missPath, "utf8")) : [];
const missSet = new Set(misses);

const todo = pending.filter(r => !probed.has(r.bggId) && !missSet.has(r.bggId));
console.log(`pending ${pending.length},未探過 ${todo.length}`);

/** 由遊戲名生 slug 候選 */
function slugs(name) {
  // 去掉副標題後綴、括號、特殊字
  const clean = name
    .replace(/[''`]/g, "")
    .replace(/[&]/g, "and")
    .replace(/[^a-zA-Z0-9\s:–—-]/g, " ")
    .trim();
  const base = clean.replace(/[:–—]/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  const hyphen = base.replace(/\s+/g, "-");
  const solid = base.replace(/\s+/g, "");
  // 去掉開頭 the
  const noThe = hyphen.replace(/^the-/, "");

  // ⚠️ 唔可以只用冒號前面嗰截去配 ——「Terraforming Mars: The Dice Game」會配到
  // `terraformingmars.pdf`(本體規則書),「Forest Shuffle: Dartmoor」會配到
  // `forestshuffle.pdf`(本體)。用本體規則書寫衍生作嘅計分表係錯嘅。
  // 所以剩副標題嗰啲一律唔用主標題變體。
  const hasSubtitle = /[:–—]/.test(clean);
  if (hasSubtitle) return [...new Set([hyphen, solid, noThe])].filter(Boolean);

  const main = clean.trim().toLowerCase();
  return [...new Set([hyphen, solid, main.replace(/\s+/g, "-"), noThe])].filter(Boolean);
}

async function probe(row) {
  for (const s of slugs(row.name)) {
    const url = `https://bghub.org/r/${s}.pdf`;
    try {
      const res = await fetch(url, {
        method: "HEAD",
        headers: { "User-Agent": "Mozilla/5.0" },
        redirect: "follow",
      });
      if (res.ok) return { bggId: row.bggId, rank: row.rank, name: row.name, url };
    } catch { /* 網絡問題當冇中,下次重跑會再試 */ }
  }
  return null;
}

let done = 0;
const queue = [...todo];
async function worker() {
  while (queue.length) {
    const row = queue.shift();
    const hit = await probe(row);
    if (hit) { hits.push(hit); console.log(`HIT ${hit.rank} ${hit.name} → ${hit.url}`); }
    else misses.push(row.bggId);
    if (++done % 25 === 0) {
      writeFileSync(OUT, JSON.stringify(hits, null, 1));
      writeFileSync(missPath, JSON.stringify(misses, null, 1));
      console.log(`  …${done}/${todo.length}(命中 ${hits.length})`);
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

writeFileSync(OUT, JSON.stringify(hits, null, 1));
writeFileSync(missPath, JSON.stringify(misses, null, 1));
console.log(`\n✓ 完成:探 ${todo.length} 隻,累積命中 ${hits.length} 隻 → ${OUT}`);
