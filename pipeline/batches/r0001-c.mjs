// Resweep · rank 1–1000 · 第三批(網查 rulebook 續)
import { gameSrc, skip, n, nn, neg, c, cneg, b, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 645 Argent: The Consortium —— 勝負係「票數」,標記同影響力只係 tie-break
  gameSrc(144797, "秘法議會", "#5A4A7A",
    "選票最多者當選校長;同票先比標記(Marks),再比影響力點數", [
    n("votes", "選票", "🗳️", "#EADCF0", "財團投票時你攞到嘅票數 —— 呢個先係勝負關鍵"),
  ], "https://www.boardgamehelpers.com/ArgentTheConsortium/Images/ArgentRulebookWeb.pdf"),

  // 706 High Frontier 4 All —— 規則書 M2 Scoring 明文
  gameSrc(281655, "高疆界:全民版", "#5A6E8C",
    "同分時 Aqua 較多者勝;仍平手就共享勝利", [
    c("tokens", "地圖上嘅棋子", "🚀", "#DCE8F7", 1,
      "地圖(同 Module 0 嘅議會區)上每個你顏色嘅木/膠棋子 —— 火箭、聲索碟、工廠 —— 各 1 分"),
    n("factories", "工廠股價", "🏭", "#F5E8D8",
      "每間工廠按開發軌 +8 / +5 / +4 分;戰爭結局一律 2 分;連住太空電梯就加倍"),
    n("domes", "殖民穹頂", "🏙️", "#DDEFDC", "天體生物學 +1 分;潛水艇同 Bernal +2 分"),
    n("glory", "榮耀同英雄籌碼", "🏅", "#F7EFD2", "按籌碼正面印住嘅分計"),
    n("modules", "模組額外分", "🧩", "#EADCF0",
      "Module 0 政治分、Module 2 地表水化同 Bernal 分、未來之星等,加埋一齊入呢度"),
  ], "https://boardgame.bg/high%20frontier%204%20all%20rules.pdf"),

  // 708 Federation —— 規則書終局三段計分
  gameSrc(345868, "聯邦", "#5A7A8C", "同分時共享勝利", [
    n("during", "遊戲中威望點", "📈", "#DCE8F7", "五個回合期間喺威望軌累積落嚟嘅分"),
    b("medals", "集齊七枚榮譽勳章", "🎖️", "#F7EFD2", 30, "七種顏色榮譽勳章齊晒,+30 威望點"),
    n("medal_roll", "榮譽勳章卷軸", "📜", "#F5E8D8", "你榮譽勳章卷軸上最低嗰個未被蓋住嘅數值"),
    n("crystals", "剩餘水晶", "💠", "#EADCF0", "儲備入面每 2 粒水晶 1 分"),
    c("diamonds", "金鑽石", "💎", "#DDEFDC", 1, "每粒金鑽石 1 分"),
    c("ships", "機庫飛船", "🚀", "#DCE8F7", 1, "機庫入面每艘飛船 1 分"),
    c("alterations", "變更標記", "🔧", "#F5E8D8", 1, "每個變更標記 1 分"),
    n("projects", "已注資大型項目", "🏗️", "#F7EFD2",
      "每個注資完成嘅大型項目,按你喺該項目嘅排名畀威望點;冇影響力就唔參與該項目計分"),
  ], "https://cdn.1j1ju.com/medias/78/07/b3-federation-rulebook.pdf"),

  // 849 Whistle Mountain —— 規則書計分頁係圖,文字抽唔到單價,所以全部 number
  gameSrc(301255, "汽笛山", "#8C6239", "—", [
    n("tower", "塔樓工人", "🗼", "#F5E8D8", "塔樓每層按板上標示,計你工人嘅分"),
    neg("whirlpool", "漩渦裡嘅工人", "🌀", "#F2D8D8",
      "跌咗落漩渦嘅工人要扣分;呢欄入扣分數,app 會自動扣"),
    n("upgrades", "升級", "⚙️", "#DCE8F7", "每張升級上標示嘅分"),
    n("storage", "倉庫物資", "📦", "#EADCF0", "機器、獎章、鷹架、卡牌同資源按規則換算嘅分"),
  ], "https://cdn.1j1ju.com/medias/d1/aa/9c-whistle-mountain-rulebook.pdf"),

  // 878 River Valley Glassworks —— 官方 Allplay 規則書 FINAL SCORING 明文
  gameSrc(407297, "河谷玻璃工坊", "#5A9BC4", "—", [
    n("rows", "橫行", "➡️", "#DCE8F7",
      "由下至上,每行按由最左格起連續填滿咗幾多格,計格線下方印住嘅分;第一格空咗嗰行 0 分"),
    n("columns", "最高兩條直欄", "⬆️", "#DDEFDC",
      "只計最高嗰兩條有玻璃嘅直欄,各按最高一格印住嘅分;同高就先計左邊嗰條"),
    cneg("overflow", "溢出區", "🫙", "#F2D8D8", 3, "溢出區每件玻璃 -3 分"),
  ], "https://assets.allplay.com/board-games-river-valley-glassworks-rulebook-link.pdf"),

  /* ---------- 唔生成 ---------- */
  skip(319966, "勝負係「控制最多地區嗰個派系入面誰人手上該色方塊最多」,冇累加分數"),
  skip(2511, "合作查案(規則書寫明 The players all cooperate to solve the case)"),
  skip(204305, "合作查案(同系列,規則書寫明全體合作)"),
  skip(424981, "全合作遊戲,一齊完成關卡目標"),
  skip(187617, "單人/合作為主,冇對抗性終局計分"),
  skip(334011, "單人/雙人合作拼圖,冇對抗性終局計分"),
]);
