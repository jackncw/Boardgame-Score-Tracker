// Resweep · rank 1–1000 · 第四批 —— desc-gen(搵唔到官方 rulebook,只寫計分類別)
// 鐵律:一個單價/對照表數字都唔准寫,check.mjs 會攔。
import { gameDesc, n, neg, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 741 Three Sisters —— 25th Century Games 官方冇公開 rulebook PDF
  gameDesc(291845, "三姊妹", "#6B9B5A", "—", [
    n("garden", "花園", "🌽", "#DDEFDC", "玉米、豆、南瓜三種作物種落同灌溉之後嘅得分"),
    n("perennials", "多年生植物", "🌻", "#F7EFD2", "多年生植物區嘅得分"),
    n("apiary", "蜂房", "🐝", "#F7EFD2", "蜂房發展程度對應嘅得分"),
    n("shed", "工具棚", "🧰", "#F5E8D8", "工具棚入面用過嘅工具同相關軌道得分"),
    n("goods", "貨物同水果", "🍎", "#F2D8D8", "貨物軌同水果軌嘅得分"),
    n("compost", "堆肥", "🪱", "#E8E4F0", "堆肥軌嘅得分(或者扣分)"),
  ]),

  // 843 Fliptown —— Write Stuff Games 只有 P&P 包,冇獨立公開 rulebook
  gameDesc(352418, "翻牌小鎮", "#C9772E", "—", [
    n("trail", "小徑", "🥾", "#DDEFDC", "小徑區域完成嘅目標得分"),
    n("badlands", "荒原", "🏜️", "#F7E2CE", "荒原區域完成嘅目標得分"),
    n("mine", "礦場", "⛏️", "#F5E8D8", "礦場區域完成嘅目標得分"),
    n("town", "城鎮", "🏘️", "#DCE8F7", "城鎮區域完成嘅目標得分"),
    n("poker", "撲克牌型", "🃏", "#EADCF0", "每回合結算嘅五張撲克牌型得分"),
    n("cash", "現金同黃金", "💰", "#F7EFD2", "剩低嘅現金同黃金換到嘅分"),
  ]),

  // 922 Rats of Wistar —— Cranio Creations 官網只公開勘誤,冇 rulebook PDF
  gameDesc(387780, "威斯達鼠族", "#8C6239", "—", [
    n("board", "玩家板揭開嘅格", "🐭", "#F5E8D8", "移走方塊、床鋪、地道之後露出嘅玩家板得分格"),
    n("guests", "客鼠同芝士", "🧀", "#F7EFD2", "玩家板上嘅客鼠板塊同芝士板塊得分"),
    n("inventions", "發明卡", "💡", "#EADCF0", "場上發明卡本身嘅分,同埋帶終局效果嗰啲發明卡"),
    n("leftover", "剩餘資源", "📦", "#DCE8F7", "手上剩低嘅木、金屬、移動標記同發明卡換到嘅分"),
  ]),

  // 893 Black Rose Wars: Rebirth —— 官方 rulebook 喺要登入嘅 app 站,攞唔到
  gameDesc(342444, "黑玫瑰戰爭:重生", "#5A4A7A", "—", [
    n("power", "遊戲中權力點", "✨", "#EADCF0", "遊戲期間累積落嚟嘅權力點"),
    n("quests", "任務", "📜", "#F5E8D8", "完成任務數排名帶嚟嘅權力點"),
    n("trophies", "戰利品代幣", "🏆", "#F7EFD2", "由其他法師身上搶到嘅戰利品代幣帶嚟嘅權力點"),
    n("damage", "造成傷害", "💥", "#F2D8D8", "對其他法師(或黑玫瑰)造成嘅傷害排名帶嚟嘅權力點"),
  ]),

  // 938 Leaving Earth —— lumenaris 官網 PDF 連結已失效
  gameDesc(173064, "離開地球", "#5A6E8C", "—", [
    n("missions", "完成任務", "🚀", "#DCE8F7", "達成咗嘅任務卡(登月、火星探測、採樣等)畀嘅勝利點"),
    neg("casualties", "太空人傷亡", "🪦", "#F2D8D8",
      "任務途中死咗嘅太空人要扣分;呢欄入扣分數,app 會自動扣"),
  ]),
]);
