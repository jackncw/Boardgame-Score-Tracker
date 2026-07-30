// Phase 2 · 路徑 c(據網上官方 rulebook 生成)· 第五批
import { gameSrc, n, c, t, b, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1202 Septima —— 單位係「智慧」(Wisdom)
  gameSrc(360692, "賽普提瑪", "#5A4A7A", "—", [
    n("during", "遊戲中賺到嘅智慧", "🔮", "#EADCF0", "遊戲期間攞到嘅智慧標記總和"),
    n("divinations", "占卜之書目標", "📖", "#DCE8F7",
      "可揀嘅目標數量以你女巫團嘅女巫數為上限;達成條件先計該項智慧"),
    n("patients", "病人軌", "🌿", "#DDEFDC",
      "每條病人軌按到達嘅最高等級計智慧;三條軌都到達嘅每個等級另加 6 智慧"),
    c("charms", "剩餘幸運符", "🍀", "#F7EFD2", 2, "每個 2 智慧"),
    c("potions", "剩餘藥水", "🧪", "#F7D8E0", 1, "每支 1 智慧"),
    c("ingredients", "剩餘材料與水晶", "💎", "#F5E8D8", 1,
      "每兩件計 1 智慧(材料同水晶可任意組合)"),
  ], "https://bghub.org/r/septima.pdf"),

  // 1207 Tribes of the Wind
  gameSrc(362986, "風之部族", "#4A8C6A", "—", [
    b("first_five", "最先建成第五條村", "🏁", "#F7EFD2", 5, "持有遊戲結束標記 +5 VP"),
    c("villages", "村莊標記", "🏘️", "#DDEFDC", 3, "地形區入面每個村莊標記 3 VP"),
    t("temples", "神殿", "⛩️", "#EADCF0", [[3, 3], [4, 7]],
      "地形區放咗 4 座神殿 7 VP,只放到 3 座 3 VP"),
    t("pollution", "污染", "☁️", "#F2D8D8", [[0, 12], [1, 7], [2, 3], [3, 0]],
      "按仲有污染標記嘅地形格數計:0 格 12 VP、1 格 7 VP、2 格 3 VP、3 格或以上 0 VP"),
    n("tiles", "地形板塊", "🗺️", "#F5E8D8",
      "按地形區入面嘅板塊數(含起始板塊)查規則書嘅對照表計 VP"),
  ], "https://bghub.org/r/tribesofthewind.pdf"),

  // 1210 Parks (Second Edition)
  gameSrc(437306, "國家公園(第二版)", "#4A7A4A", "—", [
    n("parks", "已到訪公園", "🏞️", "#DDEFDC", "已收集嘅公園卡按卡面 VP 計"),
    n("photos", "相片與相片獎勵", "📷", "#DCE8F7", "已影嘅相加相片獎勵帶嚟嘅 VP"),
    n("passion", "熱情卡", "❤️", "#F7D8E0", "已達成熱情卡條件攞到嘅 VP"),
    n("fall_bonus", "秋季獎勵", "🍂", "#F7E2CE", "秋季結算帶嚟嘅 VP"),
    n("first_player", "首家標記", "🥇", "#F7EFD2", "終局持有首家標記帶嚟嘅 VP"),
  ], "https://bghub.org/r/parks-second-edition.pdf"),

  // 1219 Fishing
  gameSrc(419195, "釣魚", "#3E8E8A", "同分者並列勝出", [
    n("score", "八回合累計得分", "🎣", "#D8EFEC", "八個回合嘅分數加埋,最高者勝"),
  ], "https://bghub.org/r/fishing.pdf"),
]);
