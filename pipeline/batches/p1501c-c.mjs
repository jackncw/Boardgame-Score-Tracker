// Phase 2 · 路徑 c(rulebook)
import { gameSrc, n, c, neg, b, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1586 Fleet
  gameSrc(121297, "漁船隊", "#3E6E8E",
    "同分者中已下水船隻較多者勝;再同分則船上魚箱較多者勝;仍同分則共享勝利", [
    n("licenses", "牌照卡", "📜", "#DCE8F7", "已買牌照卡上印住嘅 VP 總和"),
    n("boats", "已下水船隻", "⛵", "#D8EFEC", "已下水船隻卡上印住嘅 VP 總和"),
    c("fish", "船上魚箱", "🐟", "#E5E0D5", 1, "船上每箱魚 1 VP;已加工嘅魚唔計"),
    n("kingcrab", "帝王蟹牌照獎勵", "🦀", "#F2D8D8", "帝王蟹牌照帶嚟嘅獎勵 VP"),
  ], "https://bghub.org/r/fleet.pdf"),

  // 1647 Pueblo —— 罰分越少越好
  gameSrc(3228, "普韋布洛", "#B08D57", "—", [
    neg("penalty", "罰分", "🧱", "#F2D8D8",
      "酋長巡視時,見到你顏色嘅方塊就罰分;罰分最少者勝,所以呢欄自動扣分"),
  ], "https://bghub.org/r/pueblo.pdf"),

  // 1650 Tea Garden
  gameSrc(422042, "茶園", "#4A7A5A", "—", [
    n("during", "遊戲中累積嘅 VP", "🍵", "#DDEFDC", "計分軌上遊戲期間儲落嘅分"),
    n("actions", "行動卡", "🃏", "#DCE8F7", "已買行動卡右邊印住嘅 VP 總和"),
    n("emperor_cards", "皇帝卡", "👑", "#EADCF0", "達成皇帝卡條件攞到嘅 VP"),
    n("river", "河道航行", "🛶", "#D8EFEC", "船而家停喺邊段河道,按該段計 VP"),
    n("tea_studies", "茶學研究", "🎓", "#F5E8D8",
      "茶學院正中每個工人 10 VP;外圈嘅工人按各自位置計 VP"),
    b("emperor_track", "皇帝軌登頂", "🏔️", "#F7EFD2", 10, "行到皇帝軌最頂一行 +10 VP"),
    n("cups", "茶杯生產", "🍶", "#F7E2CE",
      "數齊茶杯收藏各行嘅同色連接(每個連接兩邊顏色要一致),按規則書計 VP"),
  ], "https://bghub.org/r/teagarden.pdf"),
]);
