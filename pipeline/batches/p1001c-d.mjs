// Phase 2 · 路徑 c(據網上官方 rulebook 生成)· 第四批
import { gameSrc, n, c, cneg, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1092 Carcassonne: The City —— 份 PDF 係 OCR 掃描,字有缺失,
  // 所以只寫得出計分項目類別,單價一律唔寫,由玩家自己入。
  gameSrc(12902, "卡卡頌:城市", "#8C6239", "—", [
    n("stewards", "管家(住宅區)", "🏠", "#F5E8D8",
      "你擁有嘅住宅區,按相鄰市集數計分;住宅區完成與否都計"),
    n("guards", "守衛(城牆)", "🛡️", "#E5E0D5",
      "每個守衛望住嘅一行/一列城市磚,按入面嘅公共建築同歷史建築計分"),
  ], "https://bghub.org/r/carcassonne-the-city.pdf"),

  // 1110 Pictomania
  gameSrc(98229, "妙筆神猜", "#C9553C", "同分者並列勝出", [
    n("score", "五回合累計得分", "✏️", "#F7E2CE", "五個回合嘅分數加埋,最高者勝"),
  ], "https://bghub.org/r/pictomania.pdf"),

  // 1102 Pictomania (Second Edition)
  gameSrc(252526, "妙筆神猜(第二版)", "#C9553C", "同分者並列勝出", [
    n("score", "五回合累計得分", "✏️", "#F7E2CE", "五個回合嘅分數加埋,最高者勝"),
  ], "https://bghub.org/r/pictomania-second-edition.pdf"),

  // 1128 Come Sail Away!
  gameSrc(386405, "揚帆出海!", "#3E6E8E",
    "同分者中翻面房間攞嘅 VP 較多者勝;再同分則不滿乘客較少者勝", [
    n("rooms", "已翻面房間磚", "🛏️", "#DCE8F7", "船上每塊已翻面房間磚按磚上印住嘅 VP 計"),
    c("passengers", "正面房間入面嘅乘客", "🧑‍🤝‍🧑", "#D8EFEC", 1,
      "船內每個正面房間上嘅乘客各 1 VP;大樓梯嗰啲唔計"),
    c("bonus_tokens", "獎勵計分標記", "🎖️", "#EADCF0", 3, "每個 3 VP"),
    n("luggage", "行李軌", "🧳", "#F5E8D8", "行李標記到達或越過嘅最右格上印住嘅 VP"),
    cneg("disgruntled", "不滿乘客", "😠", "#F2D8D8", 1, "不滿乘客磚上每個乘客 -1 VP"),
  ], "https://bghub.org/r/come-sail-away.pdf"),

  // 1131 Pictures
  gameSrc(284108, "拍立得", "#C9A227", "同分者並列勝出", [
    n("score", "五回合累計得分", "📷", "#F7EFD2", "五個回合嘅分數加埋,最高者勝"),
  ], "https://bghub.org/r/pictures.pdf"),

  // 1146 Concept
  gameSrc(147151, "概念", "#5A8CA8", "—", [
    c("double", "雙倍代幣", "💠", "#DCE8F7", 2, "最先估中答案攞到,每個 2 VP"),
    c("single", "單倍代幣", "🔹", "#DDEFDC", 1, "出題隊伍嘅字被估中時攞到,每個 1 VP"),
  ], "https://bghub.org/r/concept.pdf"),
]);
