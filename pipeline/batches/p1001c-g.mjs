// Phase 2 · 路徑 c · 第七批
import { gameSrc, n, c, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1344 Encyclopedia
  gameSrc(351526, "百科全書", "#8C6239",
    "同分者中已出版動物卡較多者勝;仍同分則共享勝利", [
    n("during", "遊戲中累積嘅分", "📖", "#F5E8D8", "六個回合期間喺計分軌儲落嘅分"),
    n("research", "研究方塊收藏", "🔬", "#DCE8F7", "中央板各分類區上你嘅研究方塊按價值計"),
    n("continents", "大洲收藏", "🌍", "#DDEFDC",
      "同一大洲類型嘅收藏,包括已出版動物卡同同色專家卡"),
    n("experts", "生效專家卡", "🎓", "#EADCF0", "生效專家卡帶嚟嘅額外分"),
    c("seals", "皇家印璽", "👑", "#F7EFD2", 4, "每個 4 VP"),
    c("coins", "剩餘金幣", "🪙", "#F7E2CE", 1, "每 2 個金幣 1 VP(呢欄入對數,兩個當一個)"),
    c("expeditions", "遠征標記", "🧭", "#E5E0D5", 1, "每個 1 VP"),
  ], "https://bghub.org/r/encyclopedia.pdf"),

  // 1358 Terror in Meeple City —— 隊制,但每人分數獨立計
  gameSrc(97903, "米寶市浩劫", "#8C3F3F",
    "隊制:一隊嘅分數取兩人之中較低嗰個,較高者勝", [
    n("character", "角色卡", "🦖", "#F2D8D8", "達成角色卡條件攞到嘅分"),
    n("meeples", "米寶", "🧍", "#F5E8D8", "食咗或撞冧嘅米寶按規則計嘅分"),
    n("floors", "樓層", "🏢", "#E5E0D5", "撞冧嘅樓層按規則計嘅分"),
    n("teeth", "牙齒", "🦷", "#DCE8F7", "剩餘牙齒按規則計嘅分"),
  ], "https://bghub.org/r/terror-in-meeple-city.pdf"),

  // 1357 Dice Miner —— 三回合各有計分階段,規則書冇列終局分項清單
  gameSrc(310632, "骰子礦工", "#7A5A3A",
    "同分者重擲全部骰再計一次分,直到分出勝負", [
    n("score", "三回合累計得分", "⛏️", "#F5E8D8", "三個回合計分階段嘅分數加埋,最高者勝"),
  ], "https://bghub.org/r/dice-miner.pdf"),
]);
