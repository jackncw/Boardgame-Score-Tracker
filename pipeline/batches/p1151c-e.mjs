// Phase 2 · 路徑 c(rulebook)· bghub-hits 索引 1 起(第五批)
import { gameSrc, n, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1405 Horseless Carriage
  gameSrc(350205, "無馬馬車", "#8C6E4A",
    "同分者中銷售專注度較高者勝", [
    n("wealth", "財富", "💰", "#F5E8D8",
      "遊戲結束時嘅總財富。七個年度期間賣車賺錢,冇獨立勝利分系統"),
  ], "https://bghub.org/r/horseless-carriage.pdf"),

  // 1478 Tussie Mussie
  gameSrc(257614, "花語小束", "#C97A9B", "—", [
    n("tiles", "花牌得分", "💐", "#F7DCDC",
      "每回合展示階段,由最左張牌開始逐張向右計:攞牌上印住嘅分。" +
      "另外每張牌左上角每個心心 1 分,部分牌嘅文字效果再額外加分" +
      "(例如「每朵紅花 1 分」、「每張相鄰牌 1 分」)。各回合攞到嘅勝利分標記加埋"),
  ], "https://bghub.org/r/tussie-mussie.pdf"),
]);
