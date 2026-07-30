// Phase 2 · 路徑 c · 第八批
import { gameSrc, n, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1426 Ancient Knowledge —— 份 PDF 嘅 VP 圖示變咗亂碼,所以單價一律唔寫
  gameSrc(338093, "遠古知識", "#B08D57",
    "同分者中知識標記較少者勝;仍同分則年紀最大者勝", [
    n("monuments", "過去區嘅紀念碑卡", "🗿", "#F5E8D8",
      "過去區每張紀念碑卡,計佢彩色帶上見到嘅 VP(有冇轉向都計)"),
    n("effects", "紀念碑卡效果", "✨", "#EADCF0", "過去區部分紀念碑卡本身帶嘅額外 VP"),
    n("tech", "第二級科技卡", "⚙️", "#DCE8F7", "每張第二級科技卡帶嚟嘅 VP"),
    n("timeline", "時間軸剩餘紀念碑", "⏳", "#DDEFDC",
      "時間軸上仲未落到過去區嘅紀念碑,按規則書計 VP(卡上印住嘅 VP 唔計)"),
    n("penalty", "知識區扣分", "📉", "#F2D8D8",
      "板上指定區域入面嘅知識標記,按規則書扣 VP(呢欄入正數,自動扣)",
      { sign: -1 }),
  ], "https://bghub.org/r/ancientknowledge.pdf"),

  // 1437 Inventors of the South Tigris —— 計分項目由規則書列出,
  // 但文中列嘅數字係單人假想對手嘅簡化值,唔適用多人局,所以單價唔寫。
  gameSrc(378387, "南底格里斯的發明家", "#7A5A3A", "—", [
    n("guilds", "公會多數", "🏛️", "#F5E8D8", "各公會按你嘅影響力名次計 VP"),
    n("research", "研究磚", "📜", "#DCE8F7", "河道上每個影響力按印住嘅數值計 VP"),
    n("workshops", "工坊磚", "🔨", "#E5E0D5", "已收集嘅工坊磚按磚上印住嘅 VP 計"),
    n("inventions", "發明磚", "💡", "#F7EFD2", "已放置嘅發明磚計 VP"),
    n("influence", "建造者與出版者影響力", "🖋️", "#EADCF0", "兩條影響力軌按規則書計 VP"),
    n("devices", "已建造同出版嘅裝置", "⚗️", "#DDEFDC",
      "裝置板上你嘅影響力,加裝置卡上嘅計分條件"),
    n("silver", "剩餘銀幣", "🪙", "#F7E2CE", "供應區剩低嘅銀幣按規則書換 VP"),
  ], "https://bghub.org/r/inventorsofthesouthtigris.pdf"),

  // 1458 Raising Robots
  gameSrc(366683, "養育機械人", "#5A7A8C",
    "同分者中遊戲區機械人卡 VP 較多者勝;再同分則職業卡 VP 較多者勝", [
    n("robots", "遊戲區機械人卡", "🤖", "#DCE8F7", "遊戲區入面機械人卡帶嚟嘅 VP"),
    n("classes", "職業卡", "🎓", "#EADCF0", "玩家板左邊每張職業卡按佢嘅條件計 VP"),
    n("inventory", "庫存 VP", "📦", "#E5E0D5", "庫存區標示嘅 VP"),
    n("leftovers", "零碎資源同手牌", "🔋", "#F7E2CE",
      "庫存入面每粒電池同資源(含膠紙)、手上每張機械人卡各 1/3 VP,加埋後向下取整"),
  ], "https://bghub.org/r/raising-robots.pdf"),
]);
