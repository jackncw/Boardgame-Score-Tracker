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

    /* 錨點命中唔代表嗰段真係終局計分 —— 好多時落咗雙人變體、單人對手
       計分、或者卡牌描述。所以每個候選都打分:睇跟住嗰 26 行入面
       「score / point / VP」嘅密度,同埋有冇逐項列舉(每項/each)。
       揀分數最高嗰個,唔係第一個撞到嘅。 */
    const density = (from) => {
      const seg = lines.slice(from, from + 26).join(" ");
      const hits = (seg.match(/\b(score|scores|scoring|point|points|VP)\b/gi) || []).length;
      const each = (seg.match(/\b(each|every|per)\b/gi) || []).length;
      // 單人/變體段落嘅特徵字,見到就大幅扣分
      const bad = /\bsolo\b|\bautoma\b|\bvariant\b|\btwo.player|\b2.player|\bdummy\b|your opponent scores|\bthey score\b/i
        .test(seg) ? 8 : 0;
      return hits + each - bad;
    };

    const cands = [];
    for (const re of ANCHORS) {
      for (let i = lines.length - 1; i >= 0; i--) {
        if (re.test(lines[i])) cands.push({ at: i, used: re.source, sc: density(i) });
      }
    }
    cands.sort((a, b) => b.sc - a.sc);
    const best = cands[0];

    console.log(`\n===== ${h.rank} | ${h.bggId} | ${h.name}`);
    console.log(`URL ${h.url}`);
    if (!best || best.sc < 4) {
      console.log(`(搵唔到夠密度嘅計分段落,最高分 ${best?.sc ?? "—"} —— 要人手睇)`);
      continue;
    }
    console.log(`錨點 /${best.used}/ @ line ${best.at + 1}(密度 ${best.sc})`);
    console.log(lines.slice(best.at, best.at + 26).map(s => s.trim()).filter(Boolean).join("\n"));
  } catch (e) {
    console.log(`\n===== ${h.rank} | ${h.bggId} | ${h.name}\n(處理失敗:${e.message.slice(0, 80)})`);
  }
}
