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
export const game = (bggId, nameZh, accent, tieBreaker, fields) =>
  ({ bggId, nameZh, accent, tieBreaker, fields });

export const skip = (bggId, reason) => ({ bggId, reason, __skip: true });

// ---- writer -----------------------------------------------------------
export function writeBatch(entries) {
  const idx = JSON.parse(readFileSync(INDEX, "utf8"));
  const byId = new Map(idx.map(g => [g.bggId, g]));
  const skips = existsSync(SKIPPED) ? JSON.parse(readFileSync(SKIPPED, "utf8")) : [];
  const skipIds = new Set(skips.map(s => s.bggId));

  let written = 0, skipped = 0;
  const kinds = { number: 0, counter: 0, tiered: 0, bonus: 0 };

  for (const e of entries) {
    const row = byId.get(e.bggId);
    if (!row) throw new Error(`index 搵唔到 bggId=${e.bggId}`);

    if (e.__skip) {
      row.hasScoring = false;
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
        source: "claude-code-gen",
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
    row.nameZh = e.nameZh;
    row.accent = e.accent;
    row.hasScoring = true;
    written++;
  }

  writeFileSync(INDEX, JSON.stringify(idx, null, 1) + "\n", "utf8");
  if (skips.length) writeFileSync(SKIPPED, JSON.stringify(skips, null, 1) + "\n", "utf8");

  const total = idx.filter(g => g.hasScoring).length;
  console.log(`寫入 ${written} 份,跳過 ${skipped} 隻 | field 類型 ${JSON.stringify(kinds)} | 總覆蓋 ${total}/${idx.length}`);
}
