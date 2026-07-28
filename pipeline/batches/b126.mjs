import { game, skip, n, nn, neg, c, cneg, t, b, writeBatch } from "../lib/gen.mjs";

writeBatch([
  skip(37111, "半合作陣營遊戲,以達成勝利條件定勝負,無累加計分"),

  game(310873, "卡內基", "#8C5A3C", "—", [
    n("track", "遊戲中累積分數", "📈", "#DCE8F7"),
    n("donations", "捐獻", "🎁", "#F7EFD2"),
    n("buildings", "地區建築物", "🏢", "#F0E4D5"),
    n("network", "運輸網絡", "🚚", "#DDEFDC"),
    n("staff", "部門人員", "👔", "#EADCF0"),
  ]),

  skip(310100, "半合作生存遊戲,以個人目標成敗定勝負,無累加計分"),

  game(271055, "永恆谷的居所", "#5A7A4E", "—", [
    n("dwellings", "場上住所", "🏚️", "#DDEFDC"),
    n("vp_tiles", "勝利點磚", "🏅", "#F7EFD2"),
    n("monsters", "已擊敗怪物", "👹", "#F7DCDC"),
    n("buildings", "建築與神器", "🏛️", "#F0E4D5"),
    n("resources", "剩餘資源與元素", "💠", "#D8EFEC"),
  ]),

  game(236457, "西方王國建築師", "#7A6A4E", "—", [
    n("buildings", "已建成建築物", "🏗️", "#F0E4D5"),
    n("cathedral", "大教堂貢獻", "⛪", "#DCE8F7"),
    n("workshop", "工房與黑市", "🛠️", "#E8E8E8"),
    nn("virtue", "德行軌", "😇", "#DDEFDC", "高德行加分,低德行扣分"),
    neg("debt", "債務", "💸", "#F7DCDC"),
    n("captured", "俘虜嘅工人", "🔒", "#EADCF0"),
    n("resources", "剩餘資源與銀幣", "🪙", "#F7EFD2"),
  ]),

  game(42, "底格里斯與幼發拉底", "#B5651D", "—", [
    n("score", "得分(四色勝利點中最少嗰色)", "🏛️", "#F0E4D5", "珍寶可以當任何顏色補足"),
  ]),

  game(396790, "核子", "#4A6E7A", "—", [
    n("track", "遊戲中累積分數", "📈", "#DCE8F7"),
    n("endgame", "終局結算加分", "⚛️", "#D8EFEC"),
  ]),

  game(227935, "仙境之戰", "#9B4A7A", "—", [
    n("track", "遊戲中累積分數", "📈", "#DCE8F7"),
    n("endgame", "終局結算加分", "🫖", "#EADCF0"),
  ]),

  game(40834, "多米諾:陰謀", "#7A6A9B", "回合數少者勝", [
    c("estate", "莊園 Estate", "🏡", "#DDEFDC", 1, "每張 1 分"),
    c("duchy", "公國 Duchy", "🏘️", "#F7EFD2", 3, "每張 3 分"),
    c("province", "行省 Province", "🏰", "#DCE8F7", 6, "每張 6 分"),
    cneg("curse", "詛咒 Curse", "💀", "#F7DCDC", 1, "每張 -1 分"),
    n("other", "其他勝利點卡", "🃏", "#EADCF0", "後宮、公爵、貴族、大廳等"),
  ]),

  game(122515, "基花村", "#6E8B5A", "—", [
    n("tiles", "村莊板塊分數", "🏘️", "#F0E4D5"),
    n("winter", "冬季板塊結算", "❄️", "#DCE8F7"),
    n("skills", "技能磚", "🧰", "#EADCF0"),
    n("leftover", "剩餘工人與資源", "🧑‍🌾", "#DDEFDC"),
  ]),

  game(170042, "北海劫掠者", "#4A6E8C", "—", [
    n("raids", "掠奪板塊", "🛡️", "#DCE8F7"),
    n("plunder", "戰利品(黃金/鐵/牲畜)", "💰", "#F7EFD2"),
    n("valkyrie", "女武神軌", "🕊️", "#EADCF0"),
    n("armour", "盔甲與裝備", "⚔️", "#E8E8E8"),
    n("offerings", "貢品與其他加分", "🎁", "#DDEFDC"),
  ]),

  skip(429293, "合作制吃磴遊戲,無玩家累加計分"),

  game(4098, "蒸汽時代", "#5A5A5A", "—", [
    n("income", "收入結算", "💵", "#DDEFDC"),
    n("track_built", "已建路軌", "🛤️", "#E8E8E8"),
    neg("shares", "已發行股份", "📉", "#F7DCDC"),
    nn("misc", "其他加減分", "➕", "#DCE8F7"),
  ]),

  skip(264220, "合作制戰役遊戲,無玩家累加計分"),
  skip(146021, "合作制遊戲,無玩家累加計分"),

  game(18602, "卡雅堡", "#8C7A5A", "—", [
    n("track", "遊戲中累積分數", "📈", "#DCE8F7"),
    n("castle", "城堡建設結算", "🏰", "#F0E4D5"),
    n("favors", "恩惠軌", "🎗️", "#EADCF0"),
    n("leftover", "剩餘金錢與資源", "🪙", "#F7EFD2"),
  ]),

  game(73439, "特魯瓦", "#9B5A4A", "—", [
    n("track", "遊戲中累積分數", "📈", "#DCE8F7"),
    n("cathedral", "大教堂", "⛪", "#F0E4D5"),
    n("cards", "角色卡結算", "🃏", "#EADCF0"),
    n("money", "剩餘金錢", "🪙", "#F7EFD2"),
  ]),

  game(203993, "偉大的羅倫佐", "#7A4A5A", "—", [
    n("buildings", "建築卡", "🏛️", "#F0E4D5"),
    n("characters", "角色卡", "👤", "#EADCF0"),
    n("ventures", "事業卡", "⚓", "#DCE8F7"),
    n("territories", "領地卡(軍事軌結算)", "🌾", "#ECF3D2"),
    n("faith", "信仰軌", "✝️", "#F7EFD2"),
    n("resources", "剩餘資源與金錢", "🪙", "#F7E2CE"),
  ]),

  skip(269385, "合作制戰役遊戲,無玩家累加計分"),

  game(172386, "蒙巴薩", "#8C6E3C", "—", [
    n("companies", "四間公司股份結算", "🏢", "#DCE8F7"),
    n("books", "書籍軌", "📚", "#EADCF0"),
    n("diamonds", "鑽石軌", "💎", "#D8EFEC"),
    n("bookkeeping", "帳簿軌", "📒", "#F7EFD2"),
    n("money", "剩餘金錢", "🪙", "#F7E2CE"),
  ]),

  game(36218, "多米諾", "#6E8B9B", "回合數少者勝", [
    c("estate", "莊園 Estate", "🏡", "#DDEFDC", 1, "每張 1 分"),
    c("duchy", "公國 Duchy", "🏘️", "#F7EFD2", 3, "每張 3 分"),
    c("province", "行省 Province", "🏰", "#DCE8F7", 6, "每張 6 分"),
    cneg("curse", "詛咒 Curse", "💀", "#F7DCDC", 1, "每張 -1 分"),
    n("other", "其他勝利點卡", "🃏", "#EADCF0", "花園等按牌庫張數計嘅卡"),
  ]),

  game(43015, "漢薩同盟", "#8C5A4A", "—", [
    n("track", "遊戲中累積分數", "📈", "#DCE8F7"),
    n("network", "城市網絡結算", "🕸️", "#EADCF0"),
    n("control", "控制中嘅城市", "🏙️", "#F0E4D5"),
    n("misc", "其他終局加分", "✨", "#F7EFD2"),
  ]),

  game(163412, "拼布對決", "#C4708C", "先到達終點者勝", [
    c("buttons", "鈕扣", "🔘", "#F7EFD2", 1, "每個 1 分"),
    cneg("empty", "被子上空格", "⬜", "#F7DCDC", 2, "每格 -2 分"),
    b("bonus", "7×7 特別磚", "🏅", "#DDEFDC", 7),
  ]),

  game(102680, "圖拉真", "#9B7A4A", "—", [
    n("track", "遊戲中累積分數", "📈", "#DCE8F7"),
    n("military", "軍事區域", "⚔️", "#F7DCDC"),
    n("senate", "元老院", "🏛️", "#F0E4D5"),
    n("construction", "建設區", "🏗️", "#E8E8E8"),
    n("trajan", "圖拉真磚", "🎖️", "#EADCF0"),
    neg("demands", "未滿足嘅民眾需求", "😠", "#F7E2CE"),
  ]),

  skip(218417, "合作制遊戲,無玩家累加計分"),
]);
