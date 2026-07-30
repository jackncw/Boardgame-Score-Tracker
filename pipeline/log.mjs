#!/usr/bin/env node
/* =========================================================
   log.mjs — 網上查 rulebook 生成計分表嘅分流 + 進度紀錄

   out/research-status.json  ← 機器可讀狀態(單一真相)
   out/research-log.md       ← 人睇嘅表(由上面 render 出嚟)

   用法:
     node log.mjs                       # 重建 status(保留已有結果)+ render md
     node log.mjs set <bggId> <result> [sourceUrl] [note]
     node log.mjs bulk <file.json>      # 批量 upsert(phase 2 用)
     node log.mjs stats
   result:  done | no-source | skip | pending
   path:    b(直接生成)| c(網查 rulebook)| -(skip / 未定)

   Phase 1 = rank 1–1000(A/B/C 分流表喺下面,已凍結)
   Phase 2 = rank 1001–3000(唔用 A/B/C,用 path b/c;逐隻研究時先入 row)

   bulk 檔格式:[{ "bggId": 123, "path": "b", "result": "done",
                  "sourceUrl": "", "note": "…" }, …]
========================================================= */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const INDEX = "out/games-index.json";
const RAW = "out/games-index-raw.json";
const STATUS = "out/research-status.json";
const MD = "out/research-log.md";
const PHASE1_MAX = 1000;

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
      path: old?.path ?? "-",
      result: old?.result ?? (cat === "B" ? "skip" : "pending"),
      sourceUrl: old?.sourceUrl ?? "",
      note: old?.note ?? CAT_NOTE[cat],
    });
  }
  // Phase 2(rank > 1000)嘅 row 唔自動起 —— 逐隻研究時先由 `bulk`/`set` 加入。
  // 呢度只係將已有嘅原封搬過嚟,唔會因為重建而失去。
  for (const r of prev.values()) {
    if (seen.has(r.bggId)) continue;
    seen.add(r.bggId);
    rows.push({ ...r, cat: r.cat ?? "-", path: r.path ?? "-" });
  }
  rows.sort((a, b) => a.rank - b.rank);
  return rows;
}

/* ---------- phase 2:由 raw index 查 rank / name ---------- */
function rawLookup() {
  const raw = JSON.parse(readFileSync(RAW, "utf8"));
  return new Map(raw.map(g => [g.id, g]));
}

/* 批量 upsert:phase 2 逐批處理完就寫一次 */
function bulk(file) {
  const items = JSON.parse(readFileSync(file, "utf8"));
  const rows = JSON.parse(readFileSync(STATUS, "utf8"));
  const byId = new Map(rows.map(r => [r.bggId, r]));
  const look = rawLookup();
  let added = 0, updated = 0;

  for (const item of items) {
    const id = Number(item.bggId);
    const g = look.get(id);
    if (!g) { console.error(`⚠️  raw index 冇 bggId ${id},跳過`); continue; }
    const existing = byId.get(id);
    const row = existing ?? { rank: g.rank, bggId: id, name: g.name, cat: "-" };
    row.rank = g.rank;
    row.name = g.name;
    row.path = item.path ?? row.path ?? "-";
    row.result = item.result ?? row.result ?? "pending";
    row.sourceUrl = item.sourceUrl ?? row.sourceUrl ?? "";
    row.note = item.note ?? row.note ?? "";
    if (existing) updated++;
    else { rows.push(row); byId.set(id, row); added++; }
  }
  rows.sort((a, b) => a.rank - b.rank);
  save(rows);
  console.log(`✓ bulk:新增 ${added},更新 ${updated}(status 共 ${rows.length} 行)`);
}

function save(rows) {
  writeFileSync(STATUS, JSON.stringify(rows, null, 1), "utf8");
  render(rows);
}

function render(rows) {
  const esc = s => String(s).replace(/\|/g, "\\|");
  const p1 = rows.filter(r => r.rank <= PHASE1_MAX);
  const p2 = rows.filter(r => r.rank > PHASE1_MAX);
  const n = (set, c) => set.filter(r => r.cat === c).length;
  const res = (set, k) => set.filter(r => r.result === k).length;
  const path = (set, p) => set.filter(r => r.path === p).length;

  const progress = set => [
    `- 已生成計分表(done):${res(set, "done")}`,
    `- 揾唔到可靠來源(no-source):${res(set, "no-source")}`,
    `- 判定唔使做(skip):${res(set, "skip")}`,
    `- 未做(pending):${res(set, "pending")}`,
  ];
  const table = (set, withCat) => [
    withCat
      ? "| rank | 遊戲 | 分類 | 路徑 | 結果 | sourceUrl | 備註 |"
      : "| rank | 遊戲 | 路徑 | 結果 | sourceUrl | 備註 |",
    withCat ? "| ---: | --- | :-: | :-: | --- | --- | --- |"
            : "| ---: | --- | :-: | --- | --- | --- |",
    ...set.map(r => {
      const url = r.sourceUrl ? `[link](${r.sourceUrl})` : "—";
      const cols = withCat
        ? [r.rank, esc(r.name), r.cat, r.path ?? "-", r.result, url, esc(r.note)]
        : [r.rank, esc(r.name), r.path ?? "-", r.result, url, esc(r.note)];
      return `| ${cols.join(" | ")} |`;
    }),
  ];

  const lines = [
    "# rulebook 網查 · 研究紀錄",
    "",
    "由 `pipeline/log.mjs` 自動 render,唔好人手改(改 `out/research-status.json`)。",
    "",
    "路徑:**b** = 對終局計分 100% 肯定,直接生成(`source:\"claude-code-gen\"`);",
    "**c** = 上網搵官方 rulebook 先生成(`source:\"rulebook-web\"` + sourceUrl);",
    "**-** = 唔使生成(合作/戰役/闖關/無累加計分)。",
    "",
    `# Phase 1 · rank 1–${PHASE1_MAX}(${p1.length} 行)`,
    "",
    "## 分流",
    "",
    "| 類 | 定義 | 數目 |",
    "| --- | --- | --- |",
    `| A | 競爭型、有終局計分 → 目標 | ${n(p1, "A")} |`,
    `| B | 合作/戰役/闖關/無累加計分 → 唔做,維持 hasScoring:false | ${n(p1, "B")} |`,
    `| C | 未確定,研究時一併判斷 | ${n(p1, "C")} |`,
    `| **合計** | | **${p1.length}** |`,
    "",
    "## 進度",
    "",
    ...progress(p1),
    "",
    "## 逐隻紀錄",
    "",
    ...table(p1, true),
    "",
    `# Phase 2 · rank ${PHASE1_MAX + 1}–3000(${p2.length} 行)`,
    "",
    "## 進度",
    "",
    ...progress(p2),
    `- 路徑 b(直接生成):${path(p2, "b")} · 路徑 c(網查 rulebook):${path(p2, "c")}`,
    "",
    "## 逐隻紀錄",
    "",
    ...table(p2, false),
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
} else if (cmd === "bulk") {
  if (!rest[0]) { console.error("用法:node log.mjs bulk <file.json>"); process.exit(1); }
  bulk(rest[0]);
} else if (cmd === "stats") {
  const rows = JSON.parse(readFileSync(STATUS, "utf8"));
  const by = (set, k) => set.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {});
  const p1 = rows.filter(r => r.rank <= PHASE1_MAX);
  const p2 = rows.filter(r => r.rank > PHASE1_MAX);
  console.log(`phase 1 (${p1.length}) cat:`, by(p1, "cat"), "result:", by(p1, "result"));
  console.log(`phase 2 (${p2.length}) path:`, by(p2, "path"), "result:", by(p2, "result"));
} else {
  const rows = build();
  save(rows);
  const by = k => rows.reduce((m, r) => (m[r[k]] = (m[r[k]] || 0) + 1, m), {});
  console.log("總數", rows.length, "| cat:", by("cat"), "| result:", by("result"));
}
