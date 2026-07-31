// Resweep · rank 1–1000 · 第二批(冇 bghub 鏡像,逐隻網查出版社/鏡像 rulebook)
import { gameSrc, skip, n, nn, neg, c, cneg, b, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 416 Alien Frontiers —— 計分表逐項明文「1 victory point for…」
  gameSrc(48726, "異星前線", "#5A7A8C",
    "同分時翻開嘅議程卡較多者勝;再比外星科技卡、礦石、燃料", [
    c("colonies", "殖民地標記", "🏠", "#DCE8F7", 1, "每個放咗喺領土上嘅殖民地標記 1 分"),
    c("territories", "控制嘅領土", "🗺️", "#DDEFDC", 1, "每個你殖民地數量最多嘅領土 1 分"),
    c("alien_tech", "外星城市 / 紀念碑卡", "🛸", "#EADCF0", 1,
      "外星城市卡同外星紀念碑卡各 1 分;外星石棺卡喺你有其中一張時亦值 1 分"),
    b("positron", "正電子力場", "⚡", "#F7EFD2", 1, "控制住有正電子力場嘅領土,額外 +1 分"),
    c("agendas", "議程卡(選用規則)", "📜", "#F5E8D8", 1, "用議程卡變體先計:每張翻開嘅議程卡 1 分"),
  ], "https://cs.uwaterloo.ca/~dtompkin/dtlib/base/Alien%20Frontiers.pdf"),

  // 477 Imperial Struggle —— 規則書 11.0 Final Scoring Phase
  gameSrc(206480, "帝國爭霸", "#8C3F3F", "—", [
    nn("track", "遊戲中勝利點", "📈", "#F2D8D8",
      "和平期同戰爭期累積落嚟嘅勝利點(英法共用一條軌,入你自己嗰邊嘅淨值)"),
    b("prestige", "威望格較多", "👑", "#F7EFD2", 2,
      "總威望格多過對手就 +2 分(美國旗喺場就連美國政治格一齊計)"),
    n("debt", "可用債務較多", "💰", "#F5E8D8", "可用債務多過對手,每差 2 點得 1 分,上限 4 分"),
    c("markets", "商品市場優勢", "📦", "#DCE8F7", 1, "每種商品控制市場多過對手 +1 分"),
    c("flags", "插進敵區嘅旗", "🚩", "#EADCF0", 2,
      "每面位處對手開局控制領土入面嘅友方旗 +2 分"),
  ], "https://gmtwebsiteassets.s3-us-west-2.amazonaws.com/impstruggle/imperial_struggle_rulebook_ENG-FR_bilingual_v1.0.pdf"),

  // 644 Charterstone —— 戰役會解鎖新計分項目,所以留咗 catch-all。
  gameSrc(197376, "憲章之石", "#6B9B5A", "—", [
    n("buildings", "建築", "🏠", "#DDEFDC", "你建咗嘅建築畀嘅勝利點"),
    n("objectives", "目標", "🎯", "#F7EFD2", "達成咗嘅目標卡勝利點"),
    n("reputation", "聲望軌獎勵", "⭐", "#F5E8D8",
      "終局計分:聲望軌上代幣最多 10 分、次多 7 分、再次 4 分(最少要有 1 個代幣先計)"),
    n("other", "其他分數", "➕", "#E5E0D5",
      "戰役過程解鎖咗、呢張表未列到嘅計分項目,加埋一齊入呢度"),
  ], "https://cdn.1j1ju.com/medias/4e/0e/77-charterstone-rulebook.pdf"),

  // 696 My Father's Work
  gameSrc(328866, "父輩之作", "#5A4A7A",
    "同分時完成咗曾祖父傑作實驗嗰位勝;再同分比莊園升級數目", [
    n("during", "遊戲中累積勝利點", "📈", "#EADCF0",
      "完成實驗(C 級實驗第一世代另加 8 分、第二世代 4 分)、事件同 app 指示期間攞到嘅分"),
    n("vanity", "虛榮莊園升級能力", "🏚️", "#F5E8D8", "按你虛榮莊園升級能力寫嘅方式計終局分"),
    c("upgrades", "莊園升級", "🔧", "#DCE8F7", 1, "每個加咗上莊園嘅升級 1 分"),
    cneg("maladjust", "失調", "🧟", "#F2D8D8", 3, "第三世代結束時仲有嘅每個失調 -3 分"),
  ], "https://cdn.1j1ju.com/medias/a7/f7/15-my-fathers-work-rulebook.pdf"),

  // 707 Archipelago
  gameSrc(105551, "群島", "#C9A227",
    "同分時屏風後金錢最多者勝", [
    n("trend", "趨勢卡排名", "📊", "#F7EFD2", "趨勢卡按排名畀嘅勝利點"),
    n("objectives", "目標卡排名", "🎯", "#DDEFDC", "枱面各張目標卡按排名畀嘅勝利點"),
    n("secret", "秘密目標卡", "🗝️", "#EADCF0",
      "你自己嘅目標卡;達唔到條件(例如分離主義者冇成功獨立)就一分都冇"),
    n("wonders", "奇觀", "🏛️", "#F5E8D8", "起好嘅奇觀按卡上勳章畀勝利點"),
    n("characters", "角色卡", "👤", "#DCE8F7", "控制住嘅角色卡勝利點(例如國王 1 分)"),
  ], "https://cdn.1j1ju.com/medias/25/24/a3-archipelago-rulebook.pdf"),

  // 868 Creature Caravan —— 計分項目逐條明文
  gameSrc(385331, "奇獸商隊", "#6B9B5A",
    "同分時市場板同餘燼殭屍板上放咗嘅方塊合計較多者勝", [
    b("eastrey", "抵達終點", "🏁", "#F7EFD2", 5, "至少有一個營地喺 Eastrey,+5 分"),
    c("distance", "前進距離", "🐾", "#DDEFDC", 1,
      "由起點到商隊終點向前行過嘅欄數,每欄 1 分(紮營喺 Eastrey 上限 25 分);帳篷唔計"),
    c("spaces", "有營地嘅格", "⛺", "#DCE8F7", 1, "每個有你一個或以上營地嘅格 1 分 —— 唔係逐個營地計"),
    n("zombie", "餘燼殭屍板", "🧟", "#F2D8D8", "殭屍板上你每粒方塊,按板上印住嘅分值計"),
    n("market", "市場交易", "🏪", "#F5E8D8", "市場板上你每粒方塊,按板上印住嘅分值計"),
    n("cards", "卡牌分數", "🃏", "#EADCF0", "商隊入面所有卡青色旗幟上嘅分;手牌唔計"),
    n("treasures", "寶物", "💎", "#F7EFD2", "寶物標記青色旗幟上嘅分"),
    cneg("tokens", "餘燼殭屍標記", "🔥", "#F2D8D8", 1, "手上仲剩低嘅每個餘燼殭屍標記 -1 分"),
  ], "https://www.redravengames.com/creature-caravan/"),

  // 940 SpaceCorp —— 分數就係利潤
  gameSrc(214029, "太空企業:2025-2300AD", "#5A6E8C",
    "同分時基地數目較多者勝", [
    n("profit", "利潤", "💵", "#DCE8F7", "殖民地結算之後嘅利潤總額;最多者勝"),
  ], "https://cdn.1j1ju.com/medias/30/fe/00-spacecorp-rulebook.pdf"),

  // 964 Abomination
  gameSrc(239472, "憎惡:科學怪人的傳人", "#5A4A7A",
    "同分時比活體怪物部件數、法郎,再按相對首家嘅座位順序", [
    n("during", "遊戲中勝利點", "📈", "#EADCF0", "遊戲期間按怪物部件階段等攞到嘅勝利點"),
    n("alive", "活體部件", "🧟", "#DDEFDC", "每個有「活」標記嘅怪物部件畀嘅分"),
    c("objectives", "獎勵目標", "🎯", "#F7EFD2", 10, "每個達成咗嘅獎勵目標標記 10 分"),
    n("dials", "聲望同專業轉盤", "🔬", "#DCE8F7", "聲望轉盤同專業轉盤各自到過嘅最高勝利點值"),
    nn("humanity", "人性轉盤", "❤️", "#F2D8D8", "人性轉盤到過嘅最高(或者最低)勝利點值,可加可減"),
    b("captain", "船長結局獎勵", "⚓", "#F5E8D8", 5,
      "若果遊戲係船長行到故事軌最後一格而結束,正人性最高嗰位 +5 分(同分各得 5 分)"),
  ], "https://media.plaidhatgames.com/old_images/games/abomination/rules.pdf"),

  // 999 Parade —— 分數越低越好,所以兩欄都自動扣分
  gameSrc(56692, "遊行", "#C9553C",
    "分數最低者勝;同分時面前卡牌(反轉同正面)最少者勝", [
    neg("flipped", "反轉咗嘅卡", "🃏", "#F2D8D8",
      "每種顏色張數最多嗰位將該色卡反轉,每張只計 1 分;分數越低越好,所以呢欄自動扣"),
    neg("values", "正面卡數值", "🔢", "#F2D8D8",
      "其餘正面卡牌印住嘅數值加埋;分數越低越好,所以呢欄自動扣"),
  ], "https://cdn.1j1ju.com/medias/8f/7e/8f-parade-rulebook.pdf"),

  /* ---------- 唔生成 ---------- */
  skip(146652, "合作牌庫構築(Legendary Encounters 系列)"),
  skip(300300, "合作查案,分數由官方 app 結算"),
  skip(24508, "階層式多數決(神廟 > 塔 > 茅屋),冇累加總分"),
]);
