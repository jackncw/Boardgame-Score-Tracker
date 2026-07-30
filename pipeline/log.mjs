#!/usr/bin/env node
/* =========================================================
   log.mjs — 網上查 rulebook 生成計分表嘅分流 + 進度紀錄

   out/research-status.json  ← 機器可讀狀態(單一真相)
   out/research-log.md       ← 人睇嘅表(由上面 render 出嚟)

   用法:
     node log.mjs                       # 重建 status(保留已有結果)+ render md
     node log.mjs set <bggId> <result> [sourceUrl] [note]
     node log.mjs stats
   result:  done | no-source | skip | pending
========================================================= */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const INDEX = "out/games-index.json";
const STATUS = "out/research-status.json";
const MD = "out/research-log.md";

/* ---------- 分流表 ---------- */
// A = 競爭型、有終局計分 → 今次目標
// C = 未確定屬邊類,研究時一併判斷
// 其餘一律 B(合作/戰役/闖關/無累加計分)
const A = new Set([
  391137, 358661, 375459, 400366, 129437, 329500, 400314, 276182, 417197, 384213,
  408180, 368173, 436126, 386368, 368305, 385610, 365258, 379629, 404431, 355093,
  371330, 383607, 348450, 345868, 403441, 363247, 399941, 298231, 337765, 369880,
  291845, 347305, 368061, 361545, 352418, 301255, 393429, 385331, 238799, 393325,
  280480, 407297, 382843, 393333, 387780, 422674, 338760, 239472, 402676, 198830,
  249277,
]);
const C = new Set([
  356080, 220877, 420033, 146652, 2511, 339789, 332686, 295486, 3, 446497,
  434654, 370591, 223321, 239188, 319966, 245655, 187617, 48726, 206480, 425549,
  422732, 17392, 424219, 204305, 357873, 239942, 440540, 424981, 197376, 144797,
  328866, 22827, 105551, 281655, 456440, 422541, 434906, 316624, 441696, 447243,
  24508, 300300, 420498, 132018, 342444, 173064, 214029, 334011,
]);

const CAT_NOTE = {
  A: "競爭型終局計分",
  B: "coop/campaign",
  C: "待研究判斷",
};

/* ---------- 建 / 更新 status ---------- */
function build() {
  const index = JSON.parse(readFileSync(INDEX, "utf8"));
  const prev = existsSync(STATUS)
    ? new Map(JSON.parse(readFileSync(STATUS, "utf8")).map(r => [r.bggId, r]))
    : new Map();

  const seen = new Set();
  const rows = [];
  for (const g of index) {
    // 已經入咗紀錄嘅照留(hasScoring 變 true 係我哋今次做出嚟嘅結果)
    if (g.hasScoring && !prev.has(g.bggId)) continue;
    if (seen.has(g.bggId)) continue;
    seen.add(g.bggId);
    const cat = A.has(g.bggId) ? "A" : C.has(g.bggId) ? "C" : "B";
    const old = prev.get(g.bggId);
    rows.push({
      rank: g.rank,
      bggId: g.bggId,
      name: g.name,
      cat,
      result: old?.result ?? (cat === "B" ? "skip" : "pending"),
      sourceUrl: old?.sourceUrl ?? "",
      note: old?.note ?? CAT_NOTE[cat],
    });
  }
  rows.sort((a, b) => a.rank - b.rank);
  return rows;
}

function save(rows) {
  writeFileSync(STATUS, JSON.stringify(rows, null, 1), "utf8");
  render(rows);
}

function render(rows) {
  const n = c => rows.filter(r => r.cat === c).length;
  const res = k => rows.filter(r => r.result === k).length;
  const esc = s => String(s).replace(/\|/g, "\\|");
  const lines = [
    "# rulebook 網查 · 研究紀錄",
    "",
    "由 `pipeline/log.mjs` 自動 render,唔好人手改(改 `out/research-status.json`)。",
    "",
    "## 分流",
    "",
    "| 類 | 定義 | 數目 |",
    "| --- | --- | --- |",
    `| A | 競爭型、有終局計分 → 今次目標 | ${n("A")} |`,
    `| B | 合作/戰役/闖關/無累加計分 → 唔做,維持 hasScoring:false | ${n("B")} |`,
    `| C | 未確定,研究時一併判斷 | ${n("C")} |`,
    `| **合計** | | **${rows.length}** |`,
    "",
    "## 進度",
    "",
    `- 已生成計分表(done):${res("done")}`,
    `- 揾唔到可靠來源(no-source):${res("no-source")}`,
    `- 判定唔使做(skip):${res("skip")}`,
    `- 未做(pending):${res("pending")}`,
    "",
    "## 逐隻紀錄",
    "",
    "| rank | 遊戲 | 分類 | 結果 | sourceUrl | 備註 |",
    "| ---: | --- | :-: | --- | --- | --- |",
    ...rows.map(r =>
      `| ${r.rank} | ${esc(r.name)} | ${r.cat} | ${r.result} | ${r.sourceUrl ? `[link](${r.sourceUrl})` : "—"} | ${esc(r.note)} |`
    ),
    "",
  ];
  writeFileSync(MD, lines.join("\n"), "utf8");
}

/* ---------- CLI ---------- */
const [cmd, ...rest] = process.argv.slice(2);

if (cmd === "set") {
  const [id, result, url, ...noteParts] = rest;
  const rows = JSON.parse(readFileSync(STATUS, "utf8"));
  const row = rows.find(r => r.bggId === Number(id));
  if (!row) { console.error(`搵唔到 bggId ${id}`); process.exit(1); }
  row.result = result;
  if (url && url !== "-") row.sourceUrl = url;
  if (noteParts.length) row.note = noteParts.join(" ");
  save(rows);
  console.log(`✓ ${row.rank} ${row.name} → ${result}`);
} else if (cmd === "stats") {
  const rows = JSON.parse(readFileSync(STATUS, "utf8"));
  const by = k => rows.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {});
  console.log("cat:", by("cat"));
  console.log("result:", by("result"));
} else {
  const rows = build();
  save(rows);
  const by = k => rows.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {});
  console.log("總數", rows.length, "| cat:", by("cat"), "| result:", by("result"));
}
