// 03-generate-scoring.mjs — 用 Claude API 生成計分 schema
// 用法:ANTHROPIC_API_KEY=sk-... node 03-generate-scoring.mjs [--limit 50] [--dry-run]
//   --limit N   今次最多生成 N 隻(控制成本,分段跑)
//   --dry-run   唔 call API,用罐頭 response 測試成條 wiring
// 支援斷點續傳:out/scoring/ 已有嘅檔會跳過
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { validateScoring } from "./lib/validate.mjs";

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const LIMIT = (() => { const i = args.indexOf("--limit"); return i >= 0 ? Number(args[i + 1]) : Infinity; })();
const MODEL = "claude-sonnet-4-6";
const KEY = process.env.ANTHROPIC_API_KEY;
if (!KEY && !DRY) { console.error("要設定 ANTHROPIC_API_KEY(或者用 --dry-run 測試)"); process.exit(1); }

const index = JSON.parse(readFileSync("out/games-index.json", "utf8"));
mkdirSync("out/scoring", { recursive: true });

const SCHEMA_SPEC = readFileSync("prompt-schema-spec.md", "utf8");

function buildPrompt(g) {
  return `你係桌遊規則專家。為以下桌遊生成「終局計分表」JSON,俾計分 app 用。

遊戲:${g.name}(BGG id ${g.bggId},${g.year} 年,BGG weight ${g.weight ?? "未知"})

${SCHEMA_SPEC}

額外要求:
- label 用繁體中文(香港用語),遊戲專有名詞可以保留英文
- icon 用一個貼切嘅 emoji;color 用同主題相關嘅淺色 pastel(#RRGGBB)
- theme.accent 用遊戲盒面/主視覺嘅主色
- tieBreaker 寫官方同分決勝規則,冇就寫 "—"
- 如果對某項計法唔確定,寧願用 input:"number" 叫玩家直接入總分,唔好老作 unitValue 或 table
- 只輸出 JSON,唔要 markdown 圍欄,唔要任何解釋`;
}

const CANNED = (g) => ({ // dry-run 用
  schemaVersion: 1, gameId: g.gameId, name: g.name, nameZh: g.name,
  theme: { accent: "#4A6FA5" },
  scoring: {
    source: "claude-gen", verified: false, generatedAt: new Date().toISOString(),
    tieBreaker: "—",
    fields: [{ id: "total", label: "總分", icon: "⭐", color: "#DCE8F7", input: "number", min: 0 }],
    total: { type: "sum" },
  },
});

async function callClaude(prompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": KEY, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model: MODEL, max_tokens: 2000, messages: [{ role: "user", content: prompt }] }),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.content.filter(b => b.type === "text").map(b => b.text).join("");
}

function parseJSON(text) {
  const clean = text.replace(/^```(json)?/m, "").replace(/```\s*$/m, "").trim();
  return JSON.parse(clean);
}

let doneCount = 0, failCount = 0, generated = 0;
for (const g of index) {
  if (generated >= LIMIT) break;
  const path = `out/scoring/${g.gameId}.json`;
  if (existsSync(path)) { doneCount++; continue; }

  let doc = null, errs = ["未跑"];
  for (let attempt = 1; attempt <= 2 && errs.length; attempt++) {
    try {
      doc = DRY ? CANNED(g) : parseJSON(await callClaude(
        buildPrompt(g) + (attempt > 1 ? `\n\n上次輸出唔通過驗證:${errs.join("; ")}。修正後重新輸出。` : "")
      ));
      // 強制蓋章:呢啲欄位唔信生成
      doc.schemaVersion = 1;
      doc.gameId = g.gameId;
      doc.scoring = doc.scoring || {};
      doc.scoring.source = DRY ? "dry-run" : "claude-gen";
      doc.scoring.verified = false;
      doc.scoring.generatedAt = new Date().toISOString();
      errs = validateScoring(doc);
    } catch (e) { errs = [String(e.message || e)]; }
  }

  if (errs.length) {
    failCount++;
    console.log(`✗ ${g.name}:${errs.join("; ")}`);
    writeFileSync(`out/scoring/_failed-${g.gameId}.txt`, errs.join("\n"));
  } else {
    writeFileSync(path, JSON.stringify(doc, null, 1));
    g.hasScoring = true;
    generated++;
    console.log(`✓ ${g.rank}. ${g.name}`);
  }
  writeFileSync("out/games-index.json", JSON.stringify(index, null, 1));
  if (!DRY) await new Promise(r => setTimeout(r, 500)); // 溫柔啲
}
console.log(`完成:今次生成 ${generated},之前已有 ${doneCount},失敗 ${failCount}`);
if (failCount) console.log("失敗清單見 out/scoring/_failed-*.txt,可以直接重跑補漏");
