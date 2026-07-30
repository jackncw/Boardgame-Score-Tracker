// Phase 2 · 路徑 c(據網上官方 rulebook 生成)· 第三批
import { gameSrc, n, c, cneg, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1228 The Castles of Tuscany
  gameSrc(300327, "托斯卡尼城堡", "#8C6239",
    "同分者中地區板空格最多者勝;再同分則綠軌分數最少者勝;再同分則剩餘地區卡最少者勝", [
    n("track", "紅色計分軌分數", "🔴", "#F2D8D8", "三輪計分後,由綠軌轉入紅軌嘅累計分數"),
    c("unused", "未用嘅物件", "📦", "#F5E8D8", 1,
      "終局時每塊未擺嘅六角板、木六角、大理石同工人各 1 分"),
    n("cards", "手牌", "🃏", "#DCE8F7", "手上每 3 張卡 1 分"),
  ], "https://bghub.org/r/thecastlesoftuscany.pdf"),

  // 1430 Paris
  gameSrc(282954, "巴黎", "#7A5A8C",
    "同分者中法郎較多者勝;再同分則全盤建築同地標總值較高者勝", [
    n("during", "遊戲中累積嘅 VP", "🗼", "#EADCF0", "買建築同攞獎勵磚時喺 VP 軌儲落嘅分"),
    n("districts", "行政區獎勵", "🏙️", "#DCE8F7",
      "每個有 VP 磚嘅行政區,計你放咗鎖匙嘅建築同地標總值," +
      "按第一/第二/第三名攞磚上對應嘅 VP;喺該區冇買過嘢就唔計"),
    n("francs", "法郎(27 號獎勵磚)", "💶", "#F7EFD2", "持有 27 號獎勵磚嘅話,每 1 法郎 1 VP"),
  ], "https://bghub.org/r/paris.pdf"),

  // 1194 Container: 10th Anniversary Jumbo Edition —— 同《貨櫃》本體同一套終局計分
  gameSrc(229892, "貨櫃:十週年加大版", "#3E6E8E",
    "同分者中工廠區剩低貨櫃較多者勝;仍同分則共享勝利", [
    n("cash", "手上現金", "💵", "#F7EFD2", "終局結算前手頭嘅現金"),
    n("island", "貨櫃島貨櫃價值", "🏝️", "#D8EFEC",
      "先棄走計分區入面最多嗰隻色,剩低嘅按你張終局計分卡計總值"),
    c("ship", "船上同離岸銀行暫存區貨櫃", "🚢", "#DCE8F7", 3, "每個 $3,唔分顏色"),
    c("harbor", "港口區貨櫃", "⚓", "#E5E0D5", 2, "每個 $2(工廠區嘅係 $0)"),
    cneg("loans", "未償還貸款", "🏦", "#F2D8D8", 11, "每筆本金 $10 加 $1 利息,合共扣 $11"),
  ], "https://bghub.org/r/container.pdf"),
]);
