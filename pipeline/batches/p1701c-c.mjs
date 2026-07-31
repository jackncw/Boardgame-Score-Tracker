// Phase 2 · 路徑 c(rulebook)
import { gameSrc, n, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1791 Spectacular
  gameSrc(415147, "壯觀動物園", "#4A8C5A",
    "同分者中繁殖磚上骰值總和最高者勝;仍同分則共享勝利", [
    n("entrance", "入口計分", "🎟️", "#F7EFD2", "各回合入口計分攞到嘅分"),
    n("habitats", "棲地", "🏞️", "#DDEFDC",
      "每片相連同色磚區域:區內所有骰嘅數值總和 × 區內繁殖磚上嘅骰數量。" +
      "區內冇繁殖磚放骰嘅話一樣照計基本分;瞭望塔磚上嘅骰唔做乘數;" +
      "只數繁殖磚上骰嘅「數量」,唔係佢哋嘅點數。每片區域分開計"),
    n("watchtowers", "瞭望塔", "🗼", "#DCE8F7",
      "每座已建瞭望塔,計佢周圍嘅骰值;周圍骰唔夠數就 0 分"),
    n("animals", "動物種類", "🦁", "#F5E8D8",
      "按園內唔同動物嘅種類數(含明星動物),查玩家板右下角嘅對照表"),
  ], "https://bghub.org/r/spectacular.pdf"),
]);
