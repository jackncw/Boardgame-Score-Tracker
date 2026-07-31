// Phase 2 · 路徑 c(rulebook)
import { gameSrc, n, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1560 World Order —— 只喺第 3、6 回合結算,分數累積喺 VP 軌
  gameSrc(403150, "世界秩序", "#3A4A6B", "—", [
    n("scoring_rounds", "計分回合得分", "🌐", "#DCE8F7",
      "第 3、6 回合,每個永久影響力格填滿嘅地區:自己每粒影響力方塊 1 VP," +
      "再按方塊多數攞地區右下角列明嘅第一/第二…名獎勵"),
    n("faction", "陣營專屬能力", "🏛️", "#EADCF0",
      "計分階段嘅陣營能力加減分(例如俄羅斯勢力範圍、中國 FDI 網絡、" +
      "美國過度擴張罰分),按規則書該陣營嘅對照表計"),
  ], "https://bghub.org/r/worldorder.pdf"),

  // 1575 Recall —— 六張路徑卡各自一個計分項,有自己標記嗰張另加專精獎勵
  gameSrc(446493, "回想", "#5A4A7A", "—", [
    n("knowledge", "知識之路", "📚", "#DCE8F7",
      "每條知識軌,計你標記到達過嘅最高分數符號"),
    n("ancients", "先民之路", "🗿", "#F5E8D8",
      "每粒白、灰、黑能力石計分;自己顏色嘅石唔計"),
    n("legends", "傳奇之路", "🏛️", "#EADCF0", "每個已建金庫計分"),
    n("efficiency", "效率之路", "🗝️", "#F7EFD2",
      "所有鎖匙卡上印住嘅分,包括仲喺插槽入面嗰啲"),
    n("ambition", "野心之路", "💎", "#F7D8E0",
      "每種遺物方塊顏色,計你玩家板上最右邊嗰粒方塊下面印住嘅分"),
    n("specialization", "專精獎勵", "⭐", "#DDEFDC",
      "放咗自己標記嗰啲路徑卡,額外計卡下半部嘅專精獎勵(分 A / B 面)"),
    n("other_paths", "其餘路徑卡", "➕", "#E5E0D5",
      "上面冇列到嘅路徑卡計分,加埋一齊入呢度"),
  ], "https://bghub.org/r/recall.pdf"),
]);
