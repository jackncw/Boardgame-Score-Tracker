// lib/gen.mjs — 批次生成計分表 helper
// 每個 doc 寫入前即時行 validateScoring,唔合格即刻拋錯(比 check.mjs 更早攔截)
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { validateScoring } from "./validate.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "..", "out");
const SCORING = join(OUT, "scoring");
const INDEX = join(OUT, "games-index.json");
const RAW = join(OUT, "games-index-raw.json");
const SKIPPED = join(OUT, "skipped.json");

// ---- field helpers ----------------------------------------------------
const base = (id, label, icon, color, note) => ({
  id, label, ...(note ? { note } : {}), icon, color,
});

/** number — 直接入分(預設 min 0) */
export const n = (id, label, icon, color, note, extra = {}) =>
  ({ ...base(id, label, icon, color, note), input: "number", min: 0, ...extra });

/** number 可負(min 負值) */
export const nn = (id, label, icon, color, note, min = -999) =>
  ({ ...base(id, label, icon, color, note), input: "number", min });

/** number 扣分項(玩家入正數,app 自動扣) */
export const neg = (id, label, icon, color, note) =>
  ({ ...base(id, label, icon, color, note), input: "number", min: 0, sign: -1 });

/** counter — 逐件 × 單價 */
export const c = (id, label, icon, color, unitValue, note) =>
  ({ ...base(id, label, icon, color, note), input: "counter", unitValue });

/** counter 扣分(每件 -x) */
export const cneg = (id, label, icon, color, unitValue, note) =>
  ({ ...base(id, label, icon, color, note), input: "counter", unitValue, sign: -1 });

/** tiered — 查表 */
export const t = (id, label, icon, color, table, note) =>
  ({ ...base(id, label, icon, color, note), input: "tiered", table });

/** bonus — 固定加減分 */
export const b = (id, label, icon, color, value, note) =>
  ({ ...base(id, label, icon, color, note), input: "bonus", value });

// ---- game def ---------------------------------------------------------
/** 路徑 b —— 對終局計分 100% 肯定,直接生成 */
export const game = (bggId, nameZh, accent, tieBreaker, fields) =>
  ({ bggId, nameZh, accent, tieBreaker, fields });

/** 路徑 c —— 據網上官方 rulebook 生成,必須帶 sourceUrl */
export const gameSrc = (bggId, nameZh, accent, tieBreaker, fields, sourceUrl) => {
  if (!sourceUrl) throw new Error(`bggId=${bggId}:gameSrc 一定要有 sourceUrl`);
  return { bggId, nameZh, accent, tieBreaker, fields, sourceUrl };
};

/** catch-all —— desc-gen 一定要有,類別估漏咗用家有位入 */
const OTHER = {
  id: "other", label: "其他分數",
  note: "呢張表冇列到嘅計分項目,加埋一齊入呢度",
  icon: "➕", color: "#E5E0D5", input: "number", min: 0,
};

/**
 * 最低信度層 —— 冇 rulebook,靠 BGG 描述 + 機制判斷寫類別。
 * 鐵律:一個單價/對照表/bonus 數字都唔准寫,所有欄一定係 number。
 * 自動補 catch-all「其他分數」欄。
 */
export const gameDesc = (bggId, nameZh, accent, tieBreaker, fields) => {
  for (const f of fields) {
    if (f.input !== "number")
      throw new Error(`bggId=${bggId}:desc-gen 只准用 n()(${f.id} 係 ${f.input})`);
  }
  if (fields.length > 19) throw new Error(`bggId=${bggId}:欄位太多,加埋 other 會爆 20`);
  return { bggId, nameZh, accent, tieBreaker, fields: [...fields, OTHER], __desc: true };
};

export const skip = (bggId, reason) => ({ bggId, reason, __skip: true });

// ---- writer -----------------------------------------------------------
export function writeBatch(entries) {
  const idx = JSON.parse(readFileSync(INDEX, "utf8"));
  // 注意:index 有重複行(同一 bggId 出現兩次),所以要 update 晒所有對應行
  const byId = new Map();
  for (const g of idx) {
    if (!byId.has(g.bggId)) byId.set(g.bggId, []);
    byId.get(g.bggId).push(g);
  }
  // index 未擴到 rank 3000 之前,rank>1000 嘅遊戲喺 games-index.json 仲未有 entry。
  // 果陣由 games-index-raw.json 借 gameId/name 出嚟寫 scoring 檔,
  // index 側嘅 hasScoring 等 02-fetch-meta + enrich-index.mjs 補。
  const rawById = new Map(
    (existsSync(RAW) ? JSON.parse(readFileSync(RAW, "utf8")) : [])
      .map(g => [g.id, { bggId: g.id, gameId: `bgg-${g.id}`, rank: g.rank, name: g.name }])
  );

  const skips = existsSync(SKIPPED) ? JSON.parse(readFileSync(SKIPPED, "utf8")) : [];
  const skipIds = new Set(skips.map(s => s.bggId));

  let written = 0, skipped = 0, pendingIndex = 0;
  const kinds = { number: 0, counter: 0, tiered: 0, bonus: 0 };

  for (const e of entries) {
    const rows = byId.get(e.bggId) ?? [];
    const row = rows[0] ?? rawById.get(e.bggId);
    if (!row) throw new Error(`index / raw index 都搵唔到 bggId=${e.bggId}`);
    if (!rows.length) pendingIndex++;

    if (e.__skip) {
      for (const r of rows) r.hasScoring = false;
      if (!skipIds.has(e.bggId)) {
        skips.push({ bggId: e.bggId, gameId: row.gameId, rank: row.rank, name: row.name, reason: e.reason });
        skipIds.add(e.bggId);
      }
      skipped++;
      continue;
    }

    const doc = {
      schemaVersion: 1,
      gameId: row.gameId,
      name: row.name,
      nameZh: e.nameZh,
      theme: { accent: e.accent },
      scoring: {
        source: e.__desc ? "desc-gen" : e.sourceUrl ? "rulebook-web" : "claude-code-gen",
        ...(e.sourceUrl ? { sourceUrl: e.sourceUrl } : {}),
        verified: false,
        tieBreaker: e.tieBreaker,
        fields: e.fields,
        total: { type: "sum" },
      },
    };

    const errs = validateScoring(doc);
    if (errs.length) throw new Error(`${row.gameId} (${row.name}) 驗證失敗:${errs.join("; ")}`);
    for (const f of e.fields) kinds[f.input]++;

    writeFileSync(join(SCORING, `${row.gameId}.json`), JSON.stringify(doc, null, 1) + "\n", "utf8");
    for (const r of rows) {
      r.nameZh = e.nameZh;
      r.accent = e.accent;
      r.hasScoring = true;
    }
    written++;
  }

  writeFileSync(INDEX, JSON.stringify(idx, null, 1) + "\n", "utf8");
  if (skips.length) writeFileSync(SKIPPED, JSON.stringify(skips, null, 1) + "\n", "utf8");

  const total = idx.filter(g => g.hasScoring).length;
  console.log(`寫入 ${written} 份,跳過 ${skipped} 隻 | field 類型 ${JSON.stringify(kinds)} | 總覆蓋 ${total}/${idx.length}`);
  if (pendingIndex)
    console.log(`  ⏳ 其中 ${pendingIndex} 隻 index 仲未有 entry(等 02-fetch-meta + enrich-index.mjs 補 hasScoring)`);
}
