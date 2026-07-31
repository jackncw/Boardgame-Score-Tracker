// Phase 2 · 路徑 c(rulebook)· bghub-hits 索引 2 起(第六批)
import { gameSrc, n, c, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1483 Cleopatra and the Society of Architects
  gameSrc(22141, "埃及豔后與建築師公會", "#B58C3C",
    "同分者中剩餘腐敗護符最少者勝。注意:護符最多嗰個(或幾個)會被鱷魚食咗,冇資格勝出", [
    n("talents", "塔蘭特", "🪙", "#F7EFD2",
      "建造宮殿部件賺到嘅金塔蘭特總數。" +
      "重要:先掀開腐敗金字塔數護符(每個已宣稱嘅聖域格,連阿努比斯像嗰格,各放 1 個護符抵銷)," +
      "護符最多嗰個(或幾個)玩家出局;生還者之中塔蘭特最多者勝"),
    c("merchants", "尼羅河商人", "🛶", "#F5E8D8", 3, "終局手上每張尼羅河商人加 3 塔蘭特"),
  ], "https://bghub.org/r/cleopatra-and-the-society-of-architects.pdf"),

  // 1582 Shallow Sea
  gameSrc(428440, "淺海", "#3C7A9B",
    "同分者中剩餘貝殼較多者勝;再同分共享勝利", [
    n("tiles", "磚塊得分", "🪸", "#DCE8F7",
      "海洋板上逐行由上至下計已完成磚塊上面印住嘅分。未完成嘅珊瑚磚一分都冇"),
    n("ecosystem", "生態卡", "🌊", "#DDEFDC",
      "兩張生態卡各自結算。例:橙色生態卡 —— 每塊放咗同色已完成魚嘅已完成珊瑚磚 2 分;" +
      "藍色生態卡 —— 每塊喺海洋內圈 10 格嘅已完成海洋生物磚 3 分。" +
      "實際條件視乎今局抽到邊兩張"),
    c("differing", "唔同款海洋生物磚", "🐙", "#F5E8D8", 2,
      "每完成一款「唔同」嘅海洋生物磚 2 分(同款只計一次)"),
    n("incomplete", "未完成魚", "🐟", "#F7EFD2",
      "每條未完成魚,每有一塊相鄰嘅已完成珊瑚磚就 1 分。" +
      "同一塊珊瑚磚可以重複計俾唔同嘅未完成魚"),
  ], "https://bghub.org/r/shallow-sea.pdf"),
]);
