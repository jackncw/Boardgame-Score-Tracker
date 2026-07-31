#!/usr/bin/env node
/* =========================================================
   coverage-report.mjs — 由現場數據 render out/coverage-report.md

   人手打數字一定會過時,所以呢份報告係腳本生成。
   清完 bghub hits 或者補完任何計分表之後,重跑一次就得:

     node coverage-report.mjs
========================================================= */
import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";

const idx = JSON.parse(readFileSync("out/games-index.json", "utf8"));
const status = JSON.parse(readFileSync("out/research-status.json", "utf8"));
const files = readdirSync("out/scoring").filter(f => f.endsWith(".json"));
const hits = existsSync("out/bghub-hits.json")
  ? JSON.parse(readFileSync("out/bghub-hits.json", "utf8")) : [];

/* ---------- 讀晒 scoring 檔 ---------- */
const docs = files.map(f => JSON.parse(readFileSync(`out/scoring/${f}`, "utf8")));
const byId = new Map(docs.map(d => [d.gameId, d]));
const srcOf = id => byId.get(id)?.scoring?.source ?? null;

/* ---------- rank 分段覆蓋 ---------- */
const BANDS = [[1, 100], [101, 500], [501, 1000], [1001, 3000]];
const bandRows = BANDS.map(([lo, hi]) => {
  const inBand = idx.filter(g => g.rank >= lo && g.rank <= hi);
  const done = inBand.filter(g => byId.has(g.gameId));
  const pct = inBand.length ? Math.round((done.length / inBand.length) * 100) : 0;
  return { label: `${lo}–${hi}`, total: inBand.length, done: done.length, pct };
});

/* ---------- 四層 source ---------- */
const SRC_LABEL = {
  "manual": "人手核對過",
  "rulebook-web": "讀過官方 rulebook,單價明文",
  "claude-code-gen": "肯定計分類別,單價未確認故留空",
  "desc-gen": "最低信度 —— 冇 rulebook,只有類別",
};
const srcCount = {};
for (const d of docs) srcCount[d.scoring.source] = (srcCount[d.scoring.source] || 0) + 1;

/* ---------- pending 分類 ---------- */
const p2 = status.filter(r => r.rank > 1000);
const skipRows = p2.filter(r => r.result === "skip");
const pendRows = p2.filter(r => r.result === "pending");
const noSrcRows = p2.filter(r => r.result === "no-source");
const hitIds = new Set(hits.filter(h => !h.suspect).map(h => h.bggId));
const pendWithSource = pendRows.filter(r => hitIds.has(r.bggId));
const pendNoSource = pendRows.filter(r => !hitIds.has(r.bggId));

/* ---------- desc-gen 全名單 ---------- */
const descDocs = docs.filter(d => d.scoring.source === "desc-gen");
const rankOf = new Map(idx.map(g => [g.gameId, g.rank]));
descDocs.sort((a, b) => (rankOf.get(a.gameId) ?? 9e9) - (rankOf.get(b.gameId) ?? 9e9));

/* ---------- render ---------- */
const L = [];
const p = s => L.push(s);

p("# 計分表覆蓋報告");
p("");
p("> 呢份報告由 `pipeline/coverage-report.mjs` 生成,唔好人手改。");
p("> 補完任何計分表之後重跑 `node coverage-report.mjs` 就會更新。");
p("");
p(`**總覆蓋:${docs.length} / ${idx.length}**(${Math.round(docs.length / idx.length * 100)}%)`);
p("");

p("## 按 rank 段分佈");
p("");
p("| rank 段 | 遊戲數 | 有計分表 | 覆蓋率 |");
p("| --- | ---: | ---: | ---: |");
for (const b of bandRows) p(`| ${b.label} | ${b.total} | ${b.done} | ${b.pct}% |`);
p("");
p("覆蓋率隨 rank 下跌係預期之內 —— 排名越後,遊戲越冷門,搵到官方 rulebook");
p("同判斷得出計分結構嘅機會都越低。");
p("");

p("## 四層信度");
p("");
p("| source | 數目 | 意思 |");
p("| --- | ---: | --- |");
for (const s of ["manual", "rulebook-web", "claude-code-gen", "desc-gen"]) {
  if (srcCount[s]) p(`| \`${s}\` | ${srcCount[s]} | ${SRC_LABEL[s]} |`);
}
p("");
p("**貫穿全部四層嘅鐵律**:單價、對照表、bonus 值一律只寫規則書明文有嘅數。");
p("唔肯定就降級做 `number` 由玩家直入 —— 錯嘅具體數字比冇具體數字傷好多。");
p("");

p("## Phase 2(rank 1001–3000)未做嘅點解未做");
p("");
p("| 分類 | 數目 | 說明 |");
p("| --- | ---: | --- |");
p(`| 判定唔使做 | ${skipRows.length} | 合作/戰役/闖關/對戰/競速/派對,無玩家累加計分 |`);
p(`| 有 rulebook 未讀 | ${pendWithSource.length} | bghub 探到 PDF,未逐份讀計分段落 |`);
p(`| 冇任何來源 | ${pendNoSource.length} | 搵唔到 rulebook,而我又講唔出計分類別 |`);
if (noSrcRows.length) p(`| 明確 no-source | ${noSrcRows.length} | 查過但確認搵唔到可靠來源 |`);
p("");
p("「冇任何來源」嗰批係刻意留白 —— desc-gen 已經係信度底線,");
p("連計分類別都判斷唔到就唔生成。加個 catch-all 補救唔到一張類別全錯嘅表。");
p("");

p("## desc-gen 全名單(將來開放用戶修正嘅第一批)");
p("");
p("呢批冇 rulebook,只靠 BGG 描述同機制判斷寫類別,**零單價**,");
p("每份都有 catch-all「其他分數」欄。信度最低,最值得優先俾玩家修正。");
p("");
p("| rank | 遊戲 | 中文名 | 計分欄(唔計 catch-all) |");
p("| ---: | --- | --- | --- |");
for (const d of descDocs) {
  const cols = d.scoring.fields.filter(f => f.id !== "other").map(f => f.label).join("、");
  p(`| ${rankOf.get(d.gameId) ?? "—"} | ${d.name} | ${d.nameZh} | ${cols} |`);
}
p("");

writeFileSync("out/coverage-report.md", L.join("\n") + "\n", "utf8");
console.log(`✓ out/coverage-report.md(${docs.length}/${idx.length},desc-gen ${descDocs.length} 隻)`);
