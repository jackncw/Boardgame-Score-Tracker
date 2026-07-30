// Phase 2 · rank 1001–1100 · 路徑 c(據網上官方 rulebook 生成)· 第二批
import { gameSrc, n, nn, neg, c, cneg, b, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1024 Black Forest
  gameSrc(420805, "黑森林", "#4A6B4A",
    "同分者中若有人觸發遊戲結束,該人勝;否則下一個輪到行動嘅玩家勝", [
    c("glass", "玻璃", "🫙", "#DCE8F7", 1, "每個玻璃 1 分"),
    n("cooking", "烹飪轉盤", "🍲", "#F7E2CE", "轉盤大指針指住嘅分數"),
    c("estates", "小莊園", "🏡", "#F5E8D8", 2, "每個 2 分"),
    c("livestock", "牧場上嘅牲口", "🐄", "#DDEFDC", 1, "每隻 1 分;唔喺牧場上嘅唔計分"),
    n("buildings", "建築物", "🏠", "#E5E0D5", "每座建築星星入面印住嘅分數"),
    n("building_end", "建築終局效果", "✨", "#EADCF0", "建築物寫明喺終局先計嘅分數"),
  ], "https://bghub.org/r/black-forest.pdf"),

  // 1048 Evenfall
  gameSrc(396989, "Evenfall", "#4A3A6B",
    "同分者中剩餘魔力較多者勝;仍同分則共享勝利", [
    n("during", "遊戲中累積嘅 VP", "⭐", "#F7EFD2", "計分軌上已有嘅分數"),
    n("specialists", "專家", "🧙", "#DCE8F7", "氏族入面所有專家嘅 VP"),
    n("council", "議會成員終局效果", "🏛️", "#E5E0D5", "有終局效果嘅議會成員 VP"),
    n("rituals", "儀式同權力之地", "🔮", "#EADCF0",
      "內圈嘅儀式同權力之地 VP;放咗力量石嗰個儀式 VP 加倍"),
  ], "https://bghub.org/r/evenfall.pdf"),

  // 1053 Fit to Print
  gameSrc(352574, "排版付印", "#6B6B6B",
    "同分者中星期日攞到較細號完成標記者勝", [
    n("articles", "報道", "📰", "#DCE8F7", "四個回合累計嘅報道分"),
    n("photos", "相片", "📷", "#E5E0D5", "累計相片分,按相鄰報道嘅類型計"),
    n("centerpiece", "頭條磚", "⭐", "#F7EFD2", "累計頭條磚分,含佢帶嘅額外獎勵"),
    nn("whitespace", "留白名次", "⬜", "#F5E8D8",
      "每回合比最大留白區:最細者 +3 分,最大者 -1 分,其餘 +1 分"),
    neg("mood", "情緒失衡", "😐", "#F2E0D8", "笑臉同哭臉圖示數之差,累計扣分"),
    cneg("unplaced", "未擺放嘅磚", "🗂️", "#F2D8D8", 1, "留喺 3D 枱面嘅每塊 -1 分"),
    neg("ad_penalty", "廣告收入罰分", "💵", "#F2D8D8",
      "兩人局若廣告收入少過對手 $5 以上,扣 10 分。註:多人局廣告收入最低者直接出局,冇資格贏"),
  ], "https://bghub.org/r/fit-to-print.pdf"),

  // 1057 Container(單位係錢,唔係 VP)
  gameSrc(26990, "貨櫃", "#3E6E8E",
    "同分者中工廠區剩低貨櫃較多者勝;仍同分則共享勝利", [
    n("cash", "手上現金", "💵", "#F7EFD2", "終局結算前手頭嘅現金"),
    n("island", "貨櫃島貨櫃價值", "🏝️", "#D8EFEC",
      "先棄走計分區入面最多嗰隻色,剩低嘅按你張終局計分卡計總值"),
    c("ship", "船上同離岸銀行暫存區貨櫃", "🚢", "#DCE8F7", 3, "每個 $3,唔分顏色"),
    c("harbor", "港口區貨櫃", "⚓", "#E5E0D5", 2, "每個 $2(工廠區嘅係 $0)"),
    cneg("loans", "未償還貸款", "🏦", "#F2D8D8", 11, "每筆本金 $10 加 $1 利息,合共扣 $11"),
  ], "https://bghub.org/r/container.pdf"),

  // 1074 Reef Encounter
  gameSrc(12962, "珊瑚礁奇遇", "#E08A6B", "—", [
    n("polyps", "鸚哥魚食咗嘅珊瑚息肉", "🐠", "#D8EFEC",
      "每塊息肉磚 1 分,加該顏色喺珊瑚磚頂部每重複出現一次多 1 分,即每塊值 1 至 5 分"),
  ], "https://bghub.org/r/reef-encounter.pdf"),

  // 1075 Red Rising
  gameSrc(329465, "紅色崛起", "#B03A3A", "—", [
    n("cards", "手牌角色卡", "🃏", "#F7E2CE", "手上角色卡嘅 VP,加卡面能力帶嚟嘅分"),
    c("helium", "氦", "💎", "#F2D8D8", 3, "每粒 3 分"),
    b("sovereign", "君主標記", "👑", "#F7EFD2", 10, "遊戲結束時持有 +10 分"),
    n("influence", "學院影響力", "🏛️", "#EADCF0", "學院上每粒影響力按規則計 4 / 2 / 1 分"),
    n("fleet", "艦隊軌", "🚀", "#DCE8F7", "按艦隊軌上嘅位置計 0 至 43 分"),
    cneg("excess_cards", "超過 7 張嘅手牌", "🗑️", "#F2D8D8", 10, "多過 7 張,每多一張 -10 分"),
  ], "https://bghub.org/r/red-rising.pdf"),

  // 1100 Coffee Traders
  gameSrc(325022, "咖啡商人", "#6B4A2F", "—", [
    n("bar_delivery", "咖啡吧交貨", "☕", "#F7E2CE", "每個計分標記下面印住嘅 VP"),
    n("bar_bonus", "咖啡吧欄位獎勵", "🏆", "#F7EFD2",
      "每一欄咖啡豆最多者 4 VP,第二多者 2 VP;同數時以喺橫額較低者為先"),
    n("milestones", "已達成里程碑", "🎯", "#DCE8F7", "已完成里程碑帶嚟嘅 VP"),
    n("coop", "合作社品質名次", "🌱", "#DDEFDC",
      "每個合作社按品質值(QV)名次:第一 16 VP、第二 8 VP;4–5 人局第三 4 VP。" +
      "QV:第 1/2/3 級種植園各 1/2/3;有種植園先計建築,醫院 2、其他建築各 1"),
    n("arabica", "阿拉比卡軌", "📈", "#E5E0D5",
      "累加計:六行都到第 2 欄或以上 +3;六行都到第 3 欄或以上再 +7;" +
      "每行到第 6 欄或以上 +6;每行啱啱喺第 7 欄 +4"),
  ], "https://bghub.org/r/coffee-traders.pdf"),
]);
