#!/usr/bin/env node
/* =========================================================
   enrich-index.mjs — index backfill
   走勻 pipeline/out/scoring/*.json,將每份嘅 nameZh + theme.accent
   寫返入 pipeline/out/games-index.json 對應 entry(新增 nameZh、accent 兩欄)。

   用法:  node scripts/enrich-index.mjs [--dry]
   注意:  pipeline/out/ 係唯一數據源,呢個 script 直接寫返入去。
          跑完 pipeline/03-generate-scoring.mjs 之後行,補返 index 嘅 nameZh / accent。
========================================================= */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const INDEX_PATH = join(ROOT, "pipeline", "out", "games-index.json");
const SCORING_DIR = join(ROOT, "pipeline", "out", "scoring");
const DRY = process.argv.includes("--dry");

const readJson = p => JSON.parse(readFileSync(p, "utf8"));

/* ---------- 1. 讀晒 scoring/*.json ---------- */
const files = readdirSync(SCORING_DIR).filter(f => f.endsWith(".json")).sort();
const byId = new Map();
const badFiles = [];

for (const f of files) {
  let doc;
  try {
    doc = readJson(join(SCORING_DIR, f));
  } catch (err) {
    badFiles.push(`${f}: ${err.message}`);
    continue;
  }
  const gameId = doc.gameId || basename(f, ".json");
  byId.set(gameId, { nameZh: doc.nameZh ?? null, accent: doc.theme?.accent ?? null });
}

/* ---------- 2. 併入 index ---------- */
const index = readJson(INDEX_PATH);
if (!Array.isArray(index)) throw new Error("games-index.json 唔係 array");

const stats = {
  entries: index.length,
  scoringFiles: files.length,
  gotNameZh: 0,
  gotAccent: 0,
  sameAsEnglish: [],   // nameZh === name(冇通用譯名)
  noScoringFile: [],   // index 有、scoring 冇
  orphanScoring: []    // scoring 有、index 冇
};

const indexIds = new Set(index.map(e => e.gameId));
for (const id of byId.keys()) if (!indexIds.has(id)) stats.orphanScoring.push(id);

const enriched = index.map(entry => {
  const extra = byId.get(entry.gameId);
  if (!extra) {
    stats.noScoringFile.push(entry.gameId);
    return entry;
  }
  const nameZh = extra.nameZh || null;
  const accent = extra.accent || null;
  if (nameZh) {
    stats.gotNameZh++;
    if (nameZh.trim() === String(entry.name).trim()) {
      stats.sameAsEnglish.push(entry.name);
    }
  }
  if (accent) stats.gotAccent++;

  /* 保留原有 key 次序,nameZh 插喺 name 後面,accent 跟其後 */
  const out = {};
  for (const [k, v] of Object.entries(entry)) {
    if (k === "nameZh" || k === "accent") continue;   // 重跑時唔好重覆
    out[k] = v;
    if (k === "name") {
      if (nameZh) out.nameZh = nameZh;
      if (accent) out.accent = accent;
    }
  }
  if (!("nameZh" in out) && nameZh) out.nameZh = nameZh;
  if (!("accent" in out) && accent) out.accent = accent;
  out.hasScoring = true;   // 有 scoring 檔就一定係 true
  return out;
});

/* ---------- 3. 寫檔(1-space indent,冇 trailing newline,同原檔一致) ---------- */
if (!DRY) writeFileSync(INDEX_PATH, JSON.stringify(enriched, null, 1), "utf8");

/* ---------- 4. Report ---------- */
const pct = n => `${n} / ${stats.entries} (${Math.round((n / stats.entries) * 100)}%)`;
console.log(`\n=== enrich-index ${DRY ? "(dry run,冇寫檔)" : "(已寫入 pipeline/out/games-index.json)"} ===`);
console.log(`index entries      : ${stats.entries}`);
console.log(`scoring/*.json     : ${stats.scoringFiles}`);
console.log(`有 nameZh          : ${pct(stats.gotNameZh)}`);
console.log(`有 accent          : ${pct(stats.gotAccent)}`);
console.log(`nameZh 同英文名一樣 : ${stats.sameAsEnglish.length}  (冇通用譯名)`);
if (stats.sameAsEnglish.length)
  console.log(`  → ${stats.sameAsEnglish.join(", ")}`);
const brief = (arr, n = 8) =>
  arr.slice(0, n).join(", ") + (arr.length > n ? `, …(仲有 ${arr.length - n} 隻)` : "");
if (stats.noScoringFile.length)
  console.log(`index 有但冇 scoring 檔 : ${stats.noScoringFile.length}  → ${brief(stats.noScoringFile)}`);
if (stats.orphanScoring.length)
  console.log(`scoring 有但 index 冇   : ${stats.orphanScoring.length}  → ${brief(stats.orphanScoring)}`);
if (badFiles.length) {
  console.log(`\n⚠️ 讀唔到 ${badFiles.length} 份:`);
  for (const b of badFiles) console.log(`  ${b}`);
}
console.log("");
