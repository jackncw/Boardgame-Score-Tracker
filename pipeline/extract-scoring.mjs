#!/usr/bin/env node
/* =========================================================
   extract-scoring.mjs — 由 bghub-hits.json 批量抓 rulebook,
   淨係吐出「終局計分」嗰段,方便逐批判讀。

   用法:node extract-scoring.mjs <起始索引> <幾多隻>
   例:  node extract-scoring.mjs 0 12

   跳過 suspect:true(配到本體規則書嗰啲)同已經 done 嘅。
   需要 curl + pdftotext 喺 PATH。
========================================================= */
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const START = Number(process.argv[2]) || 0;
const COUNT = Number(process.argv[3]) || 10;
const TMP = process.env.TMPDIR || process.env.TEMP || ".";
const DIR = join(TMP, "rulebooks");
if (!existsSync(DIR)) mkdirSync(DIR, { recursive: true });

const hits = JSON.parse(readFileSync("out/bghub-hits.json", "utf8"));
const status = JSON.parse(readFileSync("out/research-status.json", "utf8"));
const doneIds = new Set(status.filter(r => r.result === "done").map(r => r.bggId));

const todo = hits
  .filter(h => !h.suspect && !doneIds.has(h.bggId))
  .sort((a, b) => a.rank - b.rank)
  .slice(START, START + COUNT);

console.log(`# 可用命中 ${hits.filter(h => !h.suspect && !doneIds.has(h.bggId)).length} 隻,今次處理索引 ${START}–${START + todo.length - 1}\n`);

// 終局計分段落嘅切入點,由最明確到最闊
const ANCHORS = [
  /final scoring/i, /end.?game scoring/i, /scoring at the end/i,
  /end of the game/i, /game end/i, /^\s*scoring\s*$/im,
];

for (const h of todo) {
  const slug = h.url.split("/r/")[1].replace(".pdf", "");
  const pdf = join(DIR, `${slug}.pdf`);
  const txt = join(DIR, `${slug}.txt`);
  try {
    if (!existsSync(txt)) {
      execFileSync("curl", ["-sL", "-A", "Mozilla/5.0", "-o", pdf, h.url], { timeout: 120000 });
      execFileSync("pdftotext", ["-raw", pdf, txt], { timeout: 120000 });
    }
    const lines = readFileSync(txt, "utf8").split("\n");
    let at = -1, used = "";
    for (const re of ANCHORS) {
      // 由後面搵起 —— 終局計分通常喺規則書尾段
      for (let i = lines.length - 1; i >= 0; i--) {
        if (re.test(lines[i])) { at = i; used = re.source; break; }
      }
      if (at >= 0) break;
    }
    console.log(`\n===== ${h.rank} | ${h.bggId} | ${h.name}`);
    console.log(`URL ${h.url}`);
    if (at < 0) { console.log("(搵唔到計分段落錨點 —— 要人手睇)"); continue; }
    console.log(`錨點 /${used}/ @ line ${at + 1}`);
    console.log(lines.slice(at, at + 26).map(s => s.trim()).filter(Boolean).join("\n"));
  } catch (e) {
    console.log(`\n===== ${h.rank} | ${h.bggId} | ${h.name}\n(處理失敗:${e.message.slice(0, 80)})`);
  }
}
