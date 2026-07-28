// 02-fetch-meta.mjs — 用 BGG XML API2 批量攞遊戲 meta
// 用法:node 02-fetch-meta.mjs
// 禮儀:每 request 20 隻,隔 2.5 秒(BGG 會 throttle,唔好狂插)
// 支援斷點續傳:已有 meta 嘅 id 唔會再攞
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const TOKEN = process.env.BGG_API_TOKEN;
if (!TOKEN) { console.error("要設定 BGG_API_TOKEN"); process.exit(1); }

const BATCH = 20, DELAY_MS = 2500, RETRIES = 3;
const raw = JSON.parse(readFileSync("out/games-index-raw.json", "utf8"));
const outPath = "out/games-index.json";
const done = existsSync(outPath) ? JSON.parse(readFileSync(outPath, "utf8")) : [];
const doneIds = new Set(done.map(g => g.bggId));
const todo = raw.filter(g => !doneIds.has(g.id));
console.log(`總數 ${raw.length},已完成 ${doneIds.size},今次要攞 ${todo.length}`);

// 針對 BGG XML 結構嘅輕量抽取(結構穩定,唔使成個 XML parser)
function extractItems(xml) {
  const items = [];
  const itemRe = /<item[^>]*type="boardgame"[^>]*id="(\d+)"[\s\S]*?<\/item>/g;
  let m;
  while ((m = itemRe.exec(xml))) {
    const block = m[0], id = Number(m[1]);
    const attr = (tag) => {
      const r = new RegExp(`<${tag}[^>]*value="([^"]*)"`).exec(block);
      return r ? r[1] : null;
    };
    items.push({
      id,
      minPlayers: Number(attr("minplayers")) || null,
      maxPlayers: Number(attr("maxplayers")) || null,
      playTime: Number(attr("playingtime")) || null,
      weight: (() => {
        const r = /<averageweight[^>]*value="([\d.]+)"/.exec(block);
        return r ? Math.round(Number(r[1]) * 100) / 100 : null;
      })(),
    });
  }
  return items;
}

async function fetchBatch(ids) {
  const url = `https://boardgamegeek.com/xmlapi2/thing?id=${ids.join(",")}&stats=1`;
  for (let t = 1; t <= RETRIES; t++) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
    if (res.status === 200) return extractItems(await res.text());
    if (res.status === 401) throw new Error("HTTP 401:BGG token 無效或過期,檢查 BGG_API_TOKEN");
    if (res.status === 202) { // BGG queue 緊,等多陣
      console.log("  BGG 202 排緊隊,等 5 秒⋯");
      await new Promise(r => setTimeout(r, 5000));
      continue;
    }
    console.log(`  HTTP ${res.status},重試 ${t}/${RETRIES}`);
    await new Promise(r => setTimeout(r, 5000 * t));
  }
  throw new Error("batch 失敗:" + ids.join(","));
}

for (let i = 0; i < todo.length; i += BATCH) {
  const slice = todo.slice(i, i + BATCH);
  const metas = await fetchBatch(slice.map(g => g.id));
  const metaById = Object.fromEntries(metas.map(x => [x.id, x]));
  for (const g of slice) {
    const meta = metaById[g.id] || {};
    done.push({
      bggId: g.id,
      gameId: `bgg-${g.id}`,
      name: g.name,
      rank: g.rank,
      year: g.year,
      thumbnail: g.thumbnail,
      weight: meta.weight ?? null,
      minPlayers: meta.minPlayers ?? null,
      maxPlayers: meta.maxPlayers ?? null,
      playTime: meta.playTime ?? null,
      hasScoring: false, // step 3 生成後會轉 true
    });
  }
  writeFileSync(outPath, JSON.stringify(done, null, 1)); // 每 batch 落盤,斷咗唔使由頭嚟
  console.log(`✓ ${Math.min(i + BATCH, todo.length)}/${todo.length}`);
  if (i + BATCH < todo.length) await new Promise(r => setTimeout(r, DELAY_MS));
}
console.log(`✓ 完成 → ${outPath}(共 ${done.length} 隻)`);
