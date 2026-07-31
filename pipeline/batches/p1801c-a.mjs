// Phase 2 · 路徑 c(rulebook)
import { gameSrc, n, cneg, writeBatch } from "../lib/gen.mjs";

const note = "起始值加埋你攞到嘅同類獎勵,再乘以你擁有嘅數量";

writeBatch([
  // 1835 Looot
  gameSrc(410991, "維京掠奪", "#5A6E8C",
    "同分者中戰利品價值較高者勝;仍同分則共享勝利", [
    n("castles", "城堡", "🏰", "#F5E8D8", note),
    n("watchtowers", "瞭望塔", "🗼", "#E5E0D5", note),
    n("houses", "房屋", "🏠", "#F7E2CE", note),
    n("gold", "黃金", "💰", "#F7EFD2", note),
    n("sheep", "綿羊", "🐑", "#DDEFDC", note),
    n("wood", "木材", "🪵", "#DCE8F7", note),
    n("sites", "已完成建築工地", "🚧", "#EADCF0", "完成咗嘅建築工地帶嚟嘅 VP"),
    n("trophy", "戰利品", "🏆", "#F7D8E0", "攞到戰利品嘅話,計佢嘅 VP"),
    cneg("longships", "未坐滿嘅長船", "⛵", "#F2D8D8", 5, "每隻未填滿嘅長船 -5 VP"),
  ], "https://bghub.org/r/looot.pdf"),
]);
