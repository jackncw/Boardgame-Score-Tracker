#!/usr/bin/env node
/* =========================================================
   fix-index.mjs — games-index.json 衛生
     1. 去重(同一 bggId 出現多過一次)
     2. 由最新 games-index-raw.json 更新 rank / year / thumbnail
        (BGG 排名日日郁,舊 entry 唔更新就會同新加嘅撞 rank)
     3. 按 rank 排序,冇 rank 嘅(跌出 Top 3000)排最後

   hasScoring / nameZh / accent / weight / 人數 / 時間 一律原封不動。

   用法:node scripts/fix-index.mjs [--dry]
========================================================= */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const INDEX = join(ROOT, "pipeline", "out", "games-index.json");
const RAW = join(ROOT, "pipeline", "out", "games-index-raw.json");
const DRY = process.argv.includes("--dry");

const index = JSON.parse(readFileSync(INDEX, "utf8"));
const raw = JSON.parse(readFileSync(RAW, "utf8"));
const rawById = new Map(raw.map(g => [g.id, g]));

/* ---------- 1. 去重 ---------- */
const seen = new Map();
const dupes = [];
for (const g of index) {
  if (seen.has(g.bggId)) { dupes.push(g.bggId); continue; }
  seen.set(g.bggId, g);
}

/* ---------- 2. 更新 rank ---------- */
const rankChanged = [];
const droppedOut = [];
for (const g of seen.values()) {
  const r = rawById.get(g.bggId);
  // 跌出今日 dump 嘅:保留舊 rank(唔好變 null,app 靠 rank 排序),
  // 只係唔會再更新。單一 dump 有時會漏隻遊戲,唔值得因此破壞已有 entry。
  if (!r) { droppedOut.push(`${g.rank} ${g.name} (#${g.bggId})`); continue; }
  if (g.rank !== r.rank) rankChanged.push(`${g.name}: ${g.rank} → ${r.rank}`);
  g.rank = r.rank;
  g.year = r.year ?? g.year;
  g.thumbnail = r.thumbnail ?? g.thumbnail;
}

/* ---------- 3. 排序 ---------- */
const out = [...seen.values()].sort((a, b) =>
  (a.rank ?? Infinity) - (b.rank ?? Infinity));

if (!DRY) writeFileSync(INDEX, JSON.stringify(out, null, 1) + "\n", "utf8");

const brief = (arr, n = 10) =>
  arr.slice(0, n).join(", ") + (arr.length > n ? `, …(仲有 ${arr.length - n})` : "");

console.log(`\n=== fix-index ${DRY ? "(dry run)" : "(已寫入)"} ===`);
console.log(`原本 ${index.length} 行 → 去重後 ${out.length} 行(移除 ${dupes.length} 個重複)`);
if (dupes.length) console.log(`  重複 bggId:${dupes.join(", ")}`);
console.log(`rank 有變 : ${rankChanged.length}  → ${brief(rankChanged)}`);
console.log(`跌出 Top ${raw.length} : ${droppedOut.length}  → ${brief(droppedOut)}`);
const dupRank = out.filter(g => g.rank).reduce((m, g) => (m[g.rank] = (m[g.rank] || 0) + 1, m), {});
const collide = Object.entries(dupRank).filter(([, v]) => v > 1);
console.log(`rank 撞會 : ${collide.length ? collide.map(([k]) => k).join(", ") : "冇"}`);
console.log("");
