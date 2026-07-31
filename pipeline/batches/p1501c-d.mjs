// Phase 2 · 路徑 c(rulebook)
import { gameSrc, n, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1693 Tokaido Duo
  gameSrc(363183, "東海道:雙人版", "#C9553C",
    "同分者中金錢較多者勝;仍同分則共享勝利", [
    n("faith", "信仰分(朝聖者)", "⛩️", "#F7E2CE",
      "神廟軌數值 × 花園軌數值"),
    n("commerce", "商業分(商人)", "🪙", "#F7EFD2",
      "商人板上最右邊金磚上面印住嘅數字"),
    n("culture", "文化分(畫家)", "🎨", "#EADCF0",
      "畫家板上已揭開嘅最高數值(最底最右);剩低嘅畫、金錢同貨物一律唔計分"),
  ], "https://bghub.org/r/tokaido-duo.pdf"),

  // 1703 Age of Galaxy —— 規則書用圖示指代計分物,PDF 抽唔到,故單價唔寫
  gameSrc(330950, "銀河紀元", "#3A4A6B", "—", [
    n("prestige", "聲望", "⭐", "#EADCF0", "聲望帶嚟嘅 VP"),
    n("galaxy", "星系", "🌌", "#DCE8F7",
      "星系入面唔同物件各有分值(規則書用圖示標示,分 1 分同 2 分兩類)"),
    n("relic", "遺物", "🏺", "#F5E8D8", "遺物帶嚟嘅 VP"),
    n("ideology", "主要意識形態", "📜", "#DDEFDC",
      "按你揀嘅主要意識形態計額外 VP(冇主要意識形態就冇呢部分)"),
  ], "https://bghub.org/r/age-of-galaxy.pdf"),
]);
