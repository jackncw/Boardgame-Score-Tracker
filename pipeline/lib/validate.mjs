// lib/validate.mjs — 計分 schema 驗證(對應 scoring-schema-design.md v1)
const INPUTS = new Set(["number", "counter", "tiered", "bonus"]);
const HEX = /^#[0-9A-Fa-f]{6}$/;

export function validateScoring(doc) {
  const errs = [];
  const req = (cond, msg) => { if (!cond) errs.push(msg); };

  req(doc && typeof doc === "object", "唔係 object");
  if (errs.length) return errs;
  req(doc.schemaVersion === 1, "schemaVersion 要係 1");
  req(typeof doc.gameId === "string" && /^(bgg-\d+|custom-.+)$/.test(doc.gameId), "gameId 格式錯");
  req(typeof doc.name === "string" && doc.name, "name 缺失");
  req(doc.theme && HEX.test(doc.theme.accent || ""), "theme.accent 要係 #RRGGBB");

  const s = doc.scoring;
  req(s && typeof s === "object", "scoring 缺失");
  if (!s) return errs;
  req(Array.isArray(s.fields) && s.fields.length >= 1 && s.fields.length <= 20, "fields 要 1–20 個");
  req(typeof s.verified === "boolean", "verified 要係 boolean");

  const ids = new Set();
  for (const [i, f] of (s.fields || []).entries()) {
    const at = `fields[${i}]`;
    req(typeof f.id === "string" && /^[a-z0-9_]+$/.test(f.id), `${at}.id 要係小寫英數底線`);
    req(!ids.has(f.id), `${at}.id 重複:${f.id}`); ids.add(f.id);
    req(typeof f.label === "string" && f.label, `${at}.label 缺失`);
    req(INPUTS.has(f.input), `${at}.input 要係 ${[...INPUTS].join("/")}`);
    if (f.color != null) req(HEX.test(f.color), `${at}.color 要係 #RRGGBB`);
    if (f.sign != null) req(f.sign === 1 || f.sign === -1, `${at}.sign 要係 1 或 -1`);
    if (f.input === "counter") req(typeof f.unitValue === "number", `${at} counter 要有 unitValue`);
    if (f.input === "bonus") req(typeof f.value === "number", `${at} bonus 要有 value`);
    if (f.input === "tiered") {
      req(Array.isArray(f.table) && f.table.length >= 2, `${at} tiered 要有 table(>=2 行)`);
      if (Array.isArray(f.table)) {
        req(f.table.every(r => Array.isArray(r) && r.length === 2 && r.every(n => typeof n === "number")),
            `${at}.table 每行要係 [數量, 得分]`);
      }
    }
  }
  if (s.total != null) req(["sum", "expression"].includes(s.total.type), "total.type 要係 sum/expression");
  return errs;
}
