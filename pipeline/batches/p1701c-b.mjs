// Phase 2 · 路徑 c(rulebook)
import { gameSrc, n, c, cneg, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1759 Wild Tiled West
  gameSrc(342032, "狂野拼磚西部", "#B08D57",
    "同分者中未用嘅金同子彈總數較高者勝;仍同分則共享勝利", [
    cneg("horseshoes", "未蓋住嘅馬蹄鐵", "🐴", "#F2D8D8", 1, "聚落板上每個未蓋住嘅馬蹄鐵 -1 分"),
    n("buildings", "粉紅招牌建築", "🏚️", "#F7D8E0", "有粉紅招牌嘅建築帶嚟嘅分"),
    c("tombstones", "墓碑", "🪦", "#E5E0D5", 2, "聚落板上每個墓碑 2 分"),
    n("aces", "A 牌套組", "🂡", "#F5E8D8", "每套三張 6 分,每套四張 12 分"),
    n("mining", "採礦軌", "⛏️", "#F7E2CE", "採礦板上你標記右邊顯示嘅分數"),
    n("partners", "夥伴卡", "🤠", "#DCE8F7", "揭開所有暗置夥伴卡,按各自條件計分"),
  ], "https://bghub.org/r/wild-tiled-west.pdf"),

  // 1771 Tournay
  gameSrc(105037, "圖爾奈", "#7A5A3A", "—", [
    n("prestige_buildings", "聲望建築", "🏛️", "#F5E8D8",
      "每座場上可見嘅聲望建築逐一結算:建造者按左邊嘅 PP 計,其他玩家按右邊嘅 PP 計," +
      "各自按自己持有嘅對應元素數量計"),
    n("district", "自己領地嘅卡", "🃏", "#EADCF0",
      "領地入面所有卡(被蓋住嗰啲都計)按費用下面標示嘅 PP 計"),
    c("ramparts", "城牆堆嘅卡", "🧱", "#E5E0D5", 1, "已建城牆堆入面每張卡 1 PP"),
  ], "https://bghub.org/r/tournay.pdf"),
]);
