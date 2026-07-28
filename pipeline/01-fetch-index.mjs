// 01-fetch-index.mjs — 攞 BGG 排名清單,切 Top N
// 來源:beefsack/bgg-ranking-historicals(每日 CSV dump)
// 用法:node 01-fetch-index.mjs [topN]   預設 1000
import { writeFileSync, mkdirSync } from "node:fs";

const TOP_N = Number(process.argv[2]) || 1000;
const BASE = "https://raw.githubusercontent.com/beefsack/bgg-ranking-historicals/master";

// 由今日向後搵最近有嘅 CSV(dump 有時遲一兩日)
async function fetchLatestCSV() {
  for (let back = 0; back < 7; back++) {
    const d = new Date(Date.now() - back * 86400e3);
    const name = d.toISOString().slice(0, 10) + ".csv";
    const res = await fetch(`${BASE}/${name}`);
    if (res.ok) {
      console.log(`✓ 用 ${name}`);
      return res.text();
    }
  }
  throw new Error("七日內都搵唔到 CSV,檢查來源 repo");
}

// 簡單 CSV parse(呢個檔冇引號包逗號嘅欄位問題,名有逗號會用引號包)
function parseCSV(text) {
  const rows = [];
  for (const line of text.split("\n").slice(1)) {
    if (!line.trim()) continue;
    const cols = [];
    let cur = "", inQ = false;
    for (const ch of line) {
      if (ch === '"') inQ = !inQ;
      else if (ch === "," && !inQ) { cols.push(cur); cur = ""; }
      else cur += ch;
    }
    cols.push(cur);
    rows.push(cols);
  }
  return rows;
}

const csv = await fetchLatestCSV();
const rows = parseCSV(csv)
  .map(c => ({
    id: Number(c[0]),
    name: c[1],
    year: Number(c[2]) || null,
    rank: Number(c[3]) || null,
    thumbnail: c[8] || null,
  }))
  .filter(g => g.rank && g.rank <= TOP_N)
  .sort((a, b) => a.rank - b.rank);

mkdirSync("out", { recursive: true });
writeFileSync("out/games-index-raw.json", JSON.stringify(rows, null, 1));
console.log(`✓ Top ${TOP_N}:寫咗 ${rows.length} 隻 → out/games-index-raw.json`);
