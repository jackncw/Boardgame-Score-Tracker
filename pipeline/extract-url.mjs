#!/usr/bin/env node
/* =========================================================
   extract-url.mjs — 由任意 rulebook URL 抽終局計分段落

   同 extract-scoring.mjs 一樣嘅密度篩選 + 單人章節扣分,
   但唔經 bghub-hits.json,直接食 URL。冇 bghub 鏡像果批用呢個。

   用法:node extract-url.mjs <url> [視窗行數]
         node extract-url.mjs --batch <file.json>   # [{name, url}, …]

   ⚠️ 印出嚟之後一定要對返正文嘅專有名詞係咪真係嗰隻遊戲(everdell-duo 陷阱)。
========================================================= */
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { createHash } from "node:crypto";

const TMP = process.env.TMPDIR || process.env.TEMP || ".";
const DIR = join(TMP, "rulebooks-url");
if (!existsSync(DIR)) mkdirSync(DIR, { recursive: true });

const ANCHORS = [
  /final scoring/i, /end.?game scoring/i, /scoring at the end/i,
  /end of the game/i, /game end/i, /^\s*scoring\s*$/im,
];

function report(name, url, WINDOW) {
  const key = createHash("md5").update(url).digest("hex").slice(0, 12);
  const pdf = join(DIR, `${key}.pdf`);
  const txt = join(DIR, `${key}.txt`);
  console.log(`\n===== ${name}\nURL ${url}`);
  try {
    if (!existsSync(txt)) {
      execFileSync("curl", ["-sL", "-A", "Mozilla/5.0", "-o", pdf, url], { timeout: 180000 });
      execFileSync("pdftotext", ["-raw", pdf, txt], { timeout: 180000 });
    }
    const lines = readFileSync(txt, "utf8").split("\n");
    console.log(`(txt ${lines.length} 行,cache ${txt})`);

    const density = (from) => {
      const seg = lines.slice(from, from + WINDOW).join(" ");
      const h = (seg.match(/\b(score|scores|scoring|point|points|VP)\b/gi) || []).length;
      const each = (seg.match(/\b(each|every|per)\b/gi) || []).length;
      const bad = /\bsolo\b|\bautoma\b|\bvariant\b|\btwo.player|\b2.player|\bdummy\b|your opponent scores|\bthey score\b/i
        .test(seg) ? 8 : 0;
      return h + each - bad;
    };

    const cands = [];
    for (const re of ANCHORS)
      for (let i = lines.length - 1; i >= 0; i--)
        if (re.test(lines[i])) cands.push({ at: i, used: re.source, sc: density(i) });
    cands.sort((a, b) => b.sc - a.sc);
    const best = cands[0];
    if (!best || best.sc < 4) {
      console.log(`(搵唔到夠密度嘅計分段落,最高分 ${best?.sc ?? "—"} —— 要人手睇)`);
      return;
    }
    console.log(`錨點 /${best.used}/ @ line ${best.at + 1}(密度 ${best.sc})`);
    console.log(lines.slice(best.at, best.at + WINDOW).map(s => s.trim()).filter(Boolean).join("\n"));
  } catch (e) {
    console.log(`(處理失敗:${e.message.slice(0, 100)})`);
  }
}

if (process.argv[2] === "--batch") {
  const items = JSON.parse(readFileSync(process.argv[3], "utf8"));
  const W = Number(process.argv[4]) || 45;
  for (const it of items) report(it.name, it.url, W);
} else {
  report(process.argv[2], process.argv[2], Number(process.argv[3]) || 45);
}
