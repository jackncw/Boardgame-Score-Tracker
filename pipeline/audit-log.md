# 計分軌欄位審視 audit log

問題:rulebook 嘅「終局計分」章節通常淨係列終局 bonus,唔會提遊戲過程中
經計分軌賺咗嘅分,抽取器照住做就會漏成嚿分(用戶實測沙克爾頓基地中伏)。

逐隻問一條問題:**呢隻遊戲係咪遊戲過程中有分數累積(計分軌/即時得分)?
如果係,張表有冇欄位俾玩家入呢嚿分?**

判斷:

- **a** — 有軌有欄(或者張表本身有 catch-all 涵蓋)→ 唔郁
- **b** — 有軌冇欄 → 補 `track_vp`「計分軌分數」(number,擺 fields 第一位)
- **c** — 純終局計分遊戲,冇軌 → 唔郁
- **-** — source=manual 或 verified:true,用戶核對過,跳過

進度:rank 1–700,已審 470 隻 (a=313 b=1 c=154 跳過=2)

| rank | 遊戲 | 判斷 | 依據 |
|---:|---|:-:|---|
| 1 | Brass: Birmingham | a | 運河/鐵路時代得分欄本身就係場上累積嘅 VP |
| 2 | Ark Nova | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 3 | Pandemic Legacy: Season 1 | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 4 | Gloomhaven | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 5 | Dune: Imperium – Uprising | a | 已經有計分軌欄位 |
| 6 | Dune: Imperium | a | 已經有計分軌欄位 |
| 7 | Twilight Imperium: Fourth Edition | a | 公開/秘密目標 + Custodians + Imperial 已列晒 VP 軌所有來源,仲有「其他 VP」兜 |
| 8 | War of the Ring: Second Edition | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 9 | Terraforming Mars | a | TR 就係場上嗰條running track |
| 10 | Star Wars: Rebellion | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 11 | Spirit Island | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 12 | Gloomhaven: Jaws of the Lion | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 13 | Gaia Project | a | 已經有計分軌欄位 |
| 14 | SETI: Search for Extraterrestrial Intelligence | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 15 | Slay the Spire: The Board Game | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 16 | Twilight Struggle | a | 已經有計分軌欄位 |
| 17 | The Castles of Burgundy | a | 已經有計分軌欄位 |
| 18 | Through the Ages: A New Story of Civilization | a | 「文化分 Culture」= 遊戲中文化軌累積 |
| 19 | The Lord of the Rings: Duel for Middle-earth | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 20 | Frosthaven | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 21 | Great Western Trail | c | 純終局結算(牛/建築/目標),冇 VP 軌 |
| 22 | Brass: Lancashire | a | 同 Birmingham,時代得分欄涵蓋 |
| 23 | Eclipse: Second Dawn for the Galaxy | c | VP 全部終局點算(聲望磚/板塊/科技軌) |
| 24 | 7 Wonders Duel | c | 終局計分;軍事係位置分唔係軌上累積 |
| 25 | Nemesis | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 26 | Scythe | c | 終局結算(星星/領地/資源),冇 VP 軌 |
| 27 | A Feast for Odin | c | 純終局結算 |
| 28 | Clank! Legacy: Acquisitions Incorporated | c | Clank! 系列終局點算 |
| 29 | Concordia | c | Concordia 全部終局神祇計分 |
| 30 | Lost Ruins of Arnak | c | Arnak 全部終局結算,神廟軌欄已有 |
| 31 | Great Western Trail: Second Edition | c | 同 GWT 一代 |
| 32 | Sky Team | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 33 | Arkham Horror: The Card Game | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 34 | Root | a | Root 有 VP 軌,「勝利點 VP」單欄就係軌上總分 |
| 35 | Orléans | c | Orléans 終局結算,發展軌欄已有 |
| 36 | Terra Mystica | a | 已經有計分軌欄位 |
| 37 | Too Many Bones | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 38 | Wingspan | c | Wingspan 終局結算 |
| 39 | Barrage | a | 已經有計分軌欄位 |
| 40 | Mage Knight Board Game | a | Fame 軌係遊戲中累積,已有欄 |
| 41 | Hegemony: Lead Your Class to Victory | a | 已經有計分軌欄位 |
| 42 | Kanban EV | - | source=manual / verified:true —— 用戶核對過,唔郁 |
| 43 | Viticulture Essential Edition | a | 已經有計分軌欄位 |
| 44 | The Crew: Mission Deep Sea | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 45 | Everdell | a | Point tokens 係遊戲中攞嘅即時分,已有欄 |
| 46 | Crokinole | a | Crokinole 逐круг點分,分區欄就係計分本身 |
| 47 | Heat: Pedal to the Metal | c | Heat 每場只有名次積分,冇場內 VP 軌 |
| 48 | Marvel Champions: The Card Game | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 49 | Clank!: Catacombs | c | Clank! 系列終局點算 |
| 50 | Ticket to Ride Legacy: Legends of the West | a | TTR 鋪路即刻上分軌,「已鋪路線」欄就係軌上分 |
| 51 | Food Chain Magnate | a | 銀行存款單欄 = 勝負唯一數值,涵蓋全部 |
| 52 | Underwater Cities | a | 已經有計分軌欄位 |
| 53 | Pax Pamir: Second Edition | a | 已經有計分軌欄位 |
| 54 | Harmonies | c | Harmonies 終局結算 |
| 55 | Cthulhu: Death May Die | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 56 | Age of Innovation | a | 已經有計分軌欄位 |
| 57 | Puerto Rico | a | 「船運 VP 籌碼」= 遊戲中攞到嘅 VP 籌碼 |
| 58 | On Mars | - | source=manual / verified:true —— 用戶核對過,唔郁 |
| 59 | Pandemic Legacy: Season 0 | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 60 | Cascadia | c | Cascadia 終局結算 |
| 61 | Anachrony | a | 已經有計分軌欄位 |
| 62 | Caverna: The Cave Farmers | c | Caverna 終局結算 |
| 63 | Oathsworn: Into the Deepwood | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 64 | Agricola | c | Agricola 終局結算 |
| 65 | Blood on the Clocktower | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 66 | Blood Rage | a | Blood Rage 有 VP 軌,單欄「勝利點 VP」就係軌上總分 |
| 67 | Obsession | a | 「聲望軌」欄已涵蓋遊戲中累積 |
| 68 | Grand Austria Hotel | a | 已經有計分軌欄位 |
| 69 | Lisboa | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 70 | The Lord of the Rings: Fate of the Fellowship | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 71 | The White Castle | a | 已經有計分軌欄位 |
| 72 | Endeavor: Deep Sea | a | 已經有計分軌欄位 |
| 73 | Great Western Trail: New Zealand | c | GWT 系列終局結算 |
| 74 | Pandemic Legacy: Season 2 | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 75 | Sleeping Gods | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 76 | Power Grid | c | Power Grid 冇 VP,睇供電城市數 |
| 77 | Tzolk'in: The Mayan Calendar | a | 已經有計分軌欄位 |
| 78 | Clans of Caledonia | a | 合約/出口欄涵蓋遊戲中即時上分 |
| 79 | Mansions of Madness: Second Edition | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 80 | Quacks | a | 已經有計分軌欄位 |
| 81 | Voidfall | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 82 | Paladins of the West Kingdom | c | Paladins 終局結算 |
| 83 | Le Havre | c | Le Havre 終局結算 |
| 84 | The Gallerist | c | Gallerist 終局結算,已有「終局結算」兜底 |
| 85 | Android: Netrunner | a | 議程分係遊戲中即時攞,單欄涵蓋 |
| 86 | Agricola (Revised Edition) | c | Agricola 終局結算 |
| 87 | Star Wars: Imperial Assault | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 88 | Wingspan Asia | c | Wingspan 終局結算 |
| 89 | Bomb Busters | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 90 | Darwin's Journey | a | 已經有計分軌欄位 |
| 91 | Maracaibo | a | 已經有計分軌欄位 |
| 92 | Mechs vs. Minions | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 93 | Revive | a | 已經有計分軌欄位 |
| 94 | Race for the Galaxy | a | 「VP 籌碼」= 遊戲中攞到嘅籌碼 |
| 95 | Kingdom Death: Monster | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 96 | The Crew: The Quest for Planet Nine | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 97 | Five Tribes: The Djinns of Naqala | c | Five Tribes 終局結算 |
| 98 | Final Girl | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 99 | Azul | a | 已經有計分軌欄位 |
| 100 | Arcs | a | 「野心得分」= 每章結算上軌,仲有「其他 VP」兜 |
| 101 | El Grande | a | 三次中途計分欄齊晒,就係軌上累積 |
| 102 | Clank!: A Deck-Building Adventure | c | Clank! 終局點算 |
| 103 | Fields of Arle | c | Fields of Arle 終局結算 |
| 104 | Concordia Venus | c | Concordia 終局結算 |
| 105 | Eclipse: New Dawn for the Galaxy | c | Eclipse 終局結算 |
| 106 | Lords of Waterdeep | a | 已經有計分軌欄位 |
| 109 | SCOUT | a | SCOUT 逐круг累加,兩欄就係計分本身 |
| 110 | Galactic Cruise | a | 已經有計分軌欄位 |
| 111 | Teotihuacan: City of Gods | a | 已有「遊戲中累積分數」 |
| 112 | Splendor Duel | a | Splendor Duel 聲望邊玩邊上,卡/皇室欄涵蓋 |
| 113 | Ra | a | Ra 每紀元結算,分類欄涵蓋 |
| 114 | Beyond the Sun | a | 成就/星系遊戲中上分,已有欄 + 其他加分 |
| 115 | Dominant Species | a | 已有「遊戲中支配卡與計分」 |
| 116 | The Search for Planet X | a | 理論發表即時得分,已有欄 |
| 118 | Through the Ages: A Story of Civilization | a | 已有「文化分累積」 |
| 119 | 7 Wonders | c | 7 Wonders 終局結算 |
| 121 | The Voyages of Marco Polo | a | 已有「遊戲中累積分數」 |
| 123 | Trickerion: Legends of Illusion | a | 已有「名望軌累積分數」 |
| 124 | Wyrmspan | c | Wyrmspan 終局結算 |
| 127 | Carnegie | a | 已有「遊戲中累積分數」 |
| 128 | Dwellings of Eldervale | a | 「勝利點磚」= 遊戲中攞到嘅 VP 磚 |
| 130 | Architects of the West Kingdom | c | 終局結算,德行軌欄已有 |
| 131 | Tigris & Euphrates | a | T&E 分數立方邊玩邊收,單欄就係計分本身 |
| 132 | Wonderland's War | a | 已有「遊戲中累積分數」 |
| 133 | Nucleum | a | 已有「遊戲中累積分數」 |
| 134 | Dominion: Intrigue | c | Dominion 終局數 VP 卡 |
| 135 | Keyflower | c | Keyflower 終局結算 |
| 136 | Raiders of the North Sea | c | Raiders 終局結算 |
| 138 | Age of Steam | c | Age of Steam 終局收入 + 路軌結算 |
| 141 | Caylus | a | 已有「遊戲中累積分數」 |
| 142 | Troyes | a | 已有「遊戲中累積分數」 |
| 143 | Lorenzo il Magnifico | b | Lorenzo 有 VP 軌,收成/生產/即時效果邊玩邊上分;張表淨係列卡牌同終局結算,漏咗軌上嗰嚿 |
| 145 | Mombasa | c | Mombasa 終局結算 |
| 146 | Dominion | c | Dominion 終局數 VP 卡 |
| 147 | Hansa Teutonica | a | 已有「遊戲中累積分數」 |
| 148 | Patchwork | c | Patchwork 終局計鈕扣減空格 |
| 149 | Trajan | a | 已有「遊戲中累積分數」 |
| 151 | Forest Shuffle | c | Forest Shuffle 終局結算 |
| 152 | Twilight Imperium: Third Edition | a | 公開/秘密目標就係 VP 軌來源,仲有「其他加分」 |
| 153 | Russian Railroads | a | 已有「遊戲中累積分數」 |
| 154 | Rising Sun | a | 「各季節戰鬥得分」= 遊戲中即時上分 |
| 155 | Vinhos: Deluxe Edition | a | 已有「遊戲中累積分數」 |
| 156 | Yokohama | c | Yokohama 終局結算 |
| 162 | Clank! In! Space!: A Deck-Building Adventure | c | Clank! 終局點算 |
| 164 | Civolution | a | 已有「遊戲中累積分數」 |
| 166 | Tyrants of the Underdark | c | Tyrants 終局結算 |
| 167 | Planet Unknown | c | Planet Unknown 終局結算 |
| 169 | Andromeda's Edge | a | 已經有計分軌欄位 |
| 170 | Champions of Midgard | c | Champions of Midgard 終局結算 |
| 172 | Rajas of the Ganges | a | 名聲軌同金錢軌就係兩條場上軌,兩欄齊 |
| 173 | Hadrian's Wall | a | Renown/Disdain 邊玩邊上軌,兩欄齊 |
| 175 | Roll for the Galaxy | a | 已有「VP 籌碼」 |
| 176 | Targi | c | Targi 終局結算 |
| 177 | Dominion: Second Edition | c | Dominion 終局數 VP 卡 |
| 179 | Alchemists | a | 聲望軌就係 Alchemists 嘅分數本身 |
| 180 | Ticket to Ride: Europe | a | 鋪路即時上分軌,「已建成路線分數」涵蓋 |
| 181 | Parks | c | Parks 終局結算 |
| 184 | Res Arcana | c | Res Arcana 終局結算 |
| 185 | Cartographers | a | 四季逐季計分 = 遊戲中累積 |
| 186 | It's a Wonderful World | c | It's a Wonderful World 終局結算 |
| 188 | Stone Age | a | 已經有計分軌欄位 |
| 191 | Star Wars: Outer Rim | a | 名望由賞金/任務即時攞,各欄涵蓋 |
| 192 | Istanbul | a | 紅寶石係遊戲中收集嘅勝利條件本身 |
| 194 | Praga Caput Regni | a | 已有「遊戲中累積分數」 |
| 195 | Terraforming Mars: Ares Expedition | a | TR 就係場上 running track |
| 196 | Great Western Trail: Argentina | c | GWT 系列終局結算 |
| 197 | 7 Wonders (Second Edition) | c | 7 Wonders 終局結算 |
| 198 | Xia: Legends of a Drift System | a | 名望由任務/探索/頭銜即時攞,各欄涵蓋 |
| 199 | Viscounts of the West Kingdom | c | Viscounts 終局結算 |
| 201 | Jaipur | a | Jaipur 逐круг收標記,欄位就係計分本身 |
| 202 | The Isle of Cats | c | Isle of Cats 終局結算 |
| 203 | Kemet | a | 「永久勝利點磚 + 戰鬥勝利得分」= 遊戲中上分 |
| 204 | That's Pretty Clever! | a | 逐色區逐круг計分 = 遊戲中累積 |
| 205 | Glen More II: Chronicles | a | 已有「遊戲中三次計分」 |
| 207 | Marco Polo II: In the Service of the Khan | a | 已有「遊戲中累積分數」 |
| 209 | Endeavor: Age of Sail | c | Endeavor 終局結算 |
| 210 | Earth | c | Earth 終局結算 |
| 213 | Welcome to the Moon | a | 逐個任務即時計分,欄位涵蓋 |
| 214 | Welcome To... | c | Welcome To 終局逐區估值 |
| 215 | John Company: Second Edition | a | 已經有計分軌欄位 |
| 216 | Castle Combo | c | Castle Combo 終局結算 |
| 218 | Meadow | c | Meadow 終局結算 |
| 219 | Chaos in the Old World | a | 已有「遊戲中累積勝利點」 |
| 220 | Wondrous Creatures | a | 已經有計分軌欄位 |
| 222 | Modern Art | a | 最終現金單欄 = 勝負數值本身 |
| 225 | Memoir '44 | a | 勳章邊打邊攞,單欄就係計分本身 |
| 226 | The Red Cathedral | c | Red Cathedral 終局結算 |
| 227 | Sagrada | c | Sagrada 終局結算 |
| 228 | Space Base | a | 已有「遊戲中累積勝利點」 |
| 231 | Clash of Cultures: Monumental Edition | c | Clash of Cultures 終局結算 |
| 234 | Sekigahara: The Unification of Japan | c | Sekigahara 終局點算據點同殲敵 |
| 236 | Castles of Mad King Ludwig | c | Ludwig 終局結算 |
| 237 | Go | c | 圍棋終局數目 |
| 241 | Carcassonne | a | 已經有計分軌欄位 |
| 242 | Ticket to Ride: Nordic Countries | a | 鋪路即時上分軌,「已建成路線分數」涵蓋 |
| 243 | Azul: Summer Pavilion | a | 已經有計分軌欄位 |
| 244 | Railways of the World | a | 已有「遊戲中累積分數」 |
| 245 | Splendor | a | 聲望邊玩邊上,卡/貴族欄涵蓋 |
| 247 | Ora et Labora | c | Ora et Labora 終局結算 |
| 249 | Village | c | Village 終局結算 |
| 250 | The Taverns of Tiefenthal | a | 已有「遊戲中累積分數」 |
| 251 | Suburbia | a | 已有「人口軌(遊戲中累積)」 |
| 252 | Tichu | a | Tichu 逐局計分,欄位就係計分本身 |
| 253 | Sea Salt & Paper | a | 逐局計分,欄位涵蓋 |
| 254 | Commands & Colors: Ancients | a | 勝利旗幟邊打邊攞 |
| 256 | Faraway | c | Faraway 終局結算 |
| 257 | Ankh: Gods of Egypt | a | 已有「虔誠軌累積分數」 |
| 259 | Nidavellir | c | Nidavellir 終局結算 |
| 261 | KLASK | a | KLASK 即時得分,單欄涵蓋 |
| 262 | Ticket to Ride | a | 鋪路即時上分軌,已有欄 |
| 263 | Coimbra | a | 已有「遊戲中累積分數」 |
| 268 | Camel Up (Second Edition) | a | 最終金錢單欄 = 勝負數值本身 |
| 270 | My City | a | 逐局分類計分,欄位就係計分本身 |
| 272 | Calico | c | Calico 終局結算 |
| 273 | Nations | a | 已有「遊戲中累積分數」 |
| 274 | Fantasy Realms | c | Fantasy Realms 終局七張卡結算 |
| 276 | Distilled | c | Distilled 終局結算 |
| 277 | Century: Golem Edition | c | Century 終局結算 |
| 278 | La Granja | a | 已有「遊戲中累積分數」 |
| 280 | Near and Far | c | Near and Far 終局結算 |
| 282 | Tiletum | a | 已有「遊戲中累積分數」 |
| 283 | Samurai | a | 標記邊玩邊收,三欄就係計分本身 |
| 284 | Legendary: A Marvel Deck Building Game | c | Legendary 終局點算 |
| 285 | Dinosaur Island | a | 已有「遊戲中累積分數」 |
| 286 | Hanamikoji | a | 逐局藝妓魅力值,單欄涵蓋 |
| 287 | Skull King | a | 逐局出價計分 |
| 288 | Sushi Go Party! | a | 逐круг分類計分,累加落欄位 |
| 290 | Western Legends | a | 已有「遊戲中累積傳奇點數」 |
| 295 | Isle of Skye: From Chieftain to King | a | 計分卡 A–D 係遊戲中逐круг計,欄位齊 |
| 296 | Glory to Rome | c | Glory to Rome 終局結算 |
| 297 | Anno 1800: The Board Game | c | Anno 1800 終局結算 |
| 298 | Foundations of Rome | c | Foundations of Rome 終局結算 |
| 299 | Tapestry | a | 已有「遊戲中累積分數」 |
| 300 | Roll Player | c | Roll Player 終局結算 |
| 302 | Hallertau | a | 已有「遊戲中累積分數」 |
| 303 | Vindication | c | Vindication 終局結算 |
| 304 | Unconscious Mind | a | 已經有計分軌欄位 |
| 305 | Monikers | a | 三輪逐輪計分 |
| 306 | Indonesia | a | 最終現金單欄 = 勝負數值本身 |
| 307 | The Princes of Florence | a | 已有「遊戲中累積分數」 |
| 308 | Bitoku | a | 已有「遊戲中累積分數」 |
| 310 | Kemet: Blood and Sand | a | 永久 VP 磚 + 戰鬥得分 = 遊戲中上分 |
| 311 | Hot Streak | a | 逐場派彩累加 |
| 312 | Love Letter | a | 愛慕標記逐局攞 |
| 313 | Pulsar 2849 | a | 已有「遊戲中累積分數」 |
| 314 | Toy Battle | a | 勳章邊打邊攞 |
| 316 | 1830: Railways & Robber Barons | a | 現金 + 持股價值 = 1830 勝負數值全部 |
| 318 | Kanban: Driver's Edition | c | Kanban 終局結算 |
| 319 | Goa | c | Goa 終局結算 |
| 320 | Shogun | a | 兩次中途計分欄齊晒 |
| 321 | Galaxy Trucker | a | 逐次航程計分,欄位涵蓋 |
| 322 | Apiary | a | 已經有計分軌欄位 |
| 324 | Viticulture | a | 已有「遊戲中累積分數」 |
| 330 | Bora Bora | a | 已有「遊戲中累積分數」 |
| 331 | Kingdomino | c | Kingdomino 終局數領地 |
| 339 | Ethnos | a | 三個時代逐時代計分 |
| 340 | Imperium: Classics | c | Imperium 終局結算 |
| 342 | Rococo | c | Rococo 終局結算 |
| 343 | Endless Winter: Paleoamericans | a | 已有「遊戲中累積分數」 |
| 344 | The Vale of Eternity | c | Vale of Eternity 終局結算 |
| 345 | Marrakesh | a | 已有「遊戲中累積分數」 |
| 347 | Steam | a | 已有「遊戲中累積分數」 |
| 348 | Lost Cities | a | 逐局逐色遠征計分 |
| 349 | Wayfarers of the South Tigris | a | 已有「遊戲中累積分數」 |
| 351 | Cthulhu Wars | a | 末日點數邊玩邊上軌,單欄涵蓋 |
| 354 | Dixit: Odyssey | a | 逐круг計分 |
| 356 | Seasons | a | 水晶係遊戲中攞嘅分,已有欄 |
| 357 | For Sale | a | 兩階段計分,支票 + 現金涵蓋全部 |
| 361 | Dead Reckoning | c | Dead Reckoning 終局結算 |
| 362 | The Great Zimbabwe | a | 紀念碑價值就係即時分數,達標即贏 |
| 363 | The Guild of Merchant Explorers | a | 已有「各時代計分」 |
| 364 | Rebirth | a | 已經有計分軌欄位 |
| 366 | Acquire | a | 現金 + 持股 = 終局勝負數值全部 |
| 370 | Long Shot: The Dice Game | a | 派彩逐場累加 |
| 372 | Love Letter | a | 愛慕標記逐局攞 |
| 373 | Navegador | c | Navegador 終局結算 |
| 374 | The Manhattan Project: Energy Empire | c | Energy Empire 終局結算 |
| 377 | Imperial | a | 債券 + 現金 = 勝負數值全部 |
| 378 | Cat in the Box: Deluxe Edition | a | 逐круг計分 |
| 380 | Expeditions | a | 星星係達標即贏嘅即時分 |
| 382 | Dungeon Petz | a | 逐круг展覽計分,欄位涵蓋 |
| 383 | Survive: Escape from Atlantis! | c | Survive 終局數獲救島民 |
| 384 | Project L | a | 拼圖遊戲中完成即攞分 |
| 385 | Chinatown | a | 最終現金單欄 = 勝負數值本身 |
| 386 | Nusfjord | c | Nusfjord 終局結算 |
| 387 | Tikal | a | Tikal 中途多次計分,神廟/寶藏欄涵蓋 |
| 389 | Fromage | c | Fromage 終局結算 |
| 390 | Bunny Kingdom | a | 領地計分係遊戲中多次結算,欄位涵蓋 |
| 391 | Shackleton Base: A Journey to the Moon | a | 已經有計分軌欄位 |
| 392 | Century: Spice Road | c | Century 終局結算 |
| 393 | Age of Empires III: The Age of Discovery | c | AoE III 終局結算 |
| 394 | Bruges | c | Bruges 終局結算 |
| 395 | Sidereal Confluence | c | Sidereal Confluence 終局結算 |
| 396 | Glass Road | c | Glass Road 終局結算 |
| 397 | Heaven & Ale | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 398 | Power Grid Deluxe: Europe/North America | c | Power Grid 冇 VP |
| 399 | Tiny Epic Galaxies | c | Tiny Epic Galaxies 終局結算 |
| 400 | The King's Dilemma | c | King's Dilemma 終局議程結算 |
| 402 | Raiders of Scythia | c | Raiders of Scythia 終局結算 |
| 403 | Pirates of Maracaibo | a | 已有「遊戲中累積分數」 |
| 404 | Imperial Settlers | a | 已有「遊戲中累積分數」 |
| 407 | Imperial 2030 | a | 債券 + 現金 = 勝負數值全部 |
| 409 | Flamecraft | c | Flamecraft 終局結算 |
| 410 | Small World | a | 已有「各回合征服得分累計」 |
| 414 | Furnace | c | Furnace 終局結算 |
| 416 | Alien Frontiers | c | Alien Frontiers 終局數殖民地 |
| 418 | Gizmos | c | Gizmos 終局結算 |
| 419 | Bonfire | a | 已有「遊戲中累積分數」 |
| 422 | Let's Go! To Japan | a | 壓力/幸福/體驗三條軌都有欄 |
| 423 | Finspan | a | 逐週成就係遊戲中計,欄位涵蓋 |
| 426 | Merchants & Marauders | a | 榮耀由任務/戰鬥即時攞,仲有「其他榮耀來源」 |
| 427 | Air, Land, & Sea | a | 已有「各回合得分累計」 |
| 429 | Bärenpark | c | Bärenpark 終局結算 |
| 430 | Above and Below | c | Above and Below 終局結算 |
| 432 | Dixit | a | 逐круг計分 |
| 433 | Tekhenu: Obelisk of the Sun | a | 已有「遊戲中累積分數」 |
| 435 | Ginkgopolis | c | Ginkgopolis 終局結算 |
| 438 | Mission: Red Planet (Second/Third Edition) | a | 已有「三次區域計分」 |
| 440 | Arboretum | c | Arboretum 終局結算 |
| 442 | Abyss | c | Abyss 終局結算 |
| 443 | Dungeon Lords | a | 逐年地城評分 = 遊戲中結算,欄位涵蓋 |
| 444 | Takenoko | a | 目標卡遊戲中完成即攞分 |
| 445 | Ready Set Bet | a | 最終金錢單欄 = 勝負數值本身 |
| 448 | San Juan | c | San Juan 終局結算 |
| 449 | Akropolis | c | Akropolis 終局結算 |
| 451 | Smartphone Inc. | a | 已有「遊戲中累積分數」 |
| 453 | Blood Bowl: Team Manager – The Card Game | a | 已有「比賽得分累積」 |
| 454 | Carpe Diem | a | 已有「遊戲中四次計分」 |
| 455 | Imperium: Legends | c | Imperium 終局結算 |
| 456 | Bus | a | 已運送乘客 = 遊戲中累積,單欄涵蓋 |
| 457 | Pan Am | a | 現金 + 股份 = 勝負數值全部 |
| 459 | Cartographers Heroes | a | 四季逐季計分 |
| 460 | The Godfather: Corleone's Empire | a | 最終金錢單欄 = 勝負數值本身 |
| 461 | BattleLore: Second Edition | a | 勝利旗幟邊打邊攞 |
| 462 | Agricola: All Creatures Big and Small | c | ACBS 終局結算 |
| 466 | Ezra and Nehemiah | a | 已經有計分軌欄位 |
| 468 | Twice as Clever! | a | 逐色區逐круг計分 |
| 469 | Life of the Amazonia | a | 地形/樹木/水生花三條軌都有欄 |
| 470 | Notre Dame | a | 已有「遊戲中累積分數」 |
| 471 | Honey Buzz | c | Honey Buzz 終局結算 |
| 473 | Nippon: Zaibatsu | c | Nippon 終局結算 |
| 474 | The Pillars of the Earth | a | 已有「遊戲中累積分數」 |
| 476 | Kutná Hora: The City of Silver | a | 已經有計分軌欄位 |
| 477 | Imperial Struggle | a | 已有「遊戲中勝利點」 |
| 479 | World Wonders | a | 人口軌欄已有,其餘終局結算 |
| 480 | Newton | a | 已有「遊戲中累積分數」 |
| 481 | IKI | a | 已有「遊戲中累積分數」 |
| 484 | Scholars of the South Tigris | a | 已有「遊戲中累積分數」 |
| 487 | Altiplano | c | Altiplano 終局結算 |
| 489 | Gùgōng | a | 已有「遊戲中累積分數」 |
| 490 | At the Gates of Loyang | a | 金錢軌位置就係 Loyang 嘅分數本身 |
| 491 | Saint Petersburg | a | 已有「遊戲中累積分數」 |
| 493 | Knarr | a | 已經有計分軌欄位 |
| 494 | 51st State: Master Set | a | 已有「遊戲中累積分數」 |
| 495 | Boonlake | a | 已有「遊戲中累積分數」 |
| 500 | King of Tokyo | a | KoT 勝利點邊玩邊上軌,單欄涵蓋 |
| 500 | Moon Colony Bloodbath | c | Moon Colony Bloodbath 終局點人 |
| 503 | Dice Forge | a | 榮耀遊戲中即時攞,仲有「其他榮耀來源」兜 |
| 504 | London (Second Edition) | c | London 終局結算 |
| 508 | Blitzkrieg!: World War Two in 20 Minutes | a | 戰役磚同獎章邊打邊攞 |
| 510 | Spartacus: A Game of Blood and Treachery | a | 影響力邊玩邊上軌,單欄涵蓋 |
| 511 | Flip 7 | a | 逐круг計分 |
| 512 | In the Year of the Dragon | a | 已有「遊戲中累積分數」 |
| 513 | Azul: Stained Glass of Sintra | a | 已經有計分軌欄位 |
| 515 | Ticket to Ride: Märklin | a | 鋪路即時上分軌,已有欄 |
| 516 | Downforce | a | 賽果 + 下注逐場累加 |
| 517 | Caper: Europe | a | 逐個城市即時計分 |
| 518 | Men-Nefer | a | 已有「之前紀元已得 PP」 |
| 519 | Libertalia: Winds of Galecrest | a | 已有「三次航程收益」 |
| 520 | Biblios | c | Biblios 終局多數計分 |
| 521 | Endeavor | c | Endeavor 終局結算 |
| 522 | The Great Wall | a | 已有「遊戲中累積分數」 |
| 524 | San Juan (Second Edition) | c | San Juan 終局結算 |
| 525 | King of Tokyo: Dark Edition | a | KoT 勝利點邊玩邊上軌 |
| 526 | Die Macher | a | 已有「各邦選舉得分累積」 |
| 527 | Tiny Towns | c | Tiny Towns 終局結算 |
| 528 | Millennium Blades | a | 錦標賽得分逐場累加 |
| 531 | Through the Desert | c | Through the Desert 終局結算 |
| 532 | High Society | c | High Society 終局比奢侈品總值 |
| 534 | Bruxelles 1893 | a | 已有「遊戲中累積分數」 |
| 536 | Luthier | a | 已經有計分軌欄位 |
| 537 | Woodcraft | a | 已經有計分軌欄位 |
| 541 | Santa Maria | a | 已有「遊戲中累積分數」 |
| 542 | Evolution: Climate | a | 已食食物邊玩邊累積,已有欄 |
| 543 | Fresco | a | 已有「遊戲中累積分數」 |
| 546 | Trekking Through History | a | 行程卡遊戲中即時計分,時間軌欄亦有 |
| 547 | Bohnanza | a | 金幣邊玩邊收,單欄涵蓋 |
| 550 | Kingsburg | c | Kingsburg 終局結算 |
| 552 | Here I Stand | a | 已有「基礎 VP」(遊戲中累積) |
| 556 | Nippon | c | Nippon 終局結算 |
| 557 | Macao | a | 已有「遊戲中累積分數」 |
| 559 | No Thanks! | c | No Thanks! 終局結算 |
| 560 | Barcelona | a | 已經有計分軌欄位 |
| 562 | Commands & Colors: Napoleonics | a | 勝利旗幟邊打邊攞 |
| 563 | Colt Express | a | 戰利品逐круг累加 |
| 565 | Skymines | a | 已有「遊戲中累積分數」 |
| 567 | Stockpile | a | 現金 + 持股 = 勝負數值全部 |
| 569 | Citadels | c | Citadels 終局結算 |
| 570 | Mandala | a | 卡牌逐круг收,單欄涵蓋 |
| 571 | Clash of Cultures | c | Clash of Cultures 終局結算 |
| 572 | Fantastic Factories | c | Fantastic Factories 終局結算 |
| 574 | The Manhattan Project | a | 已投放炸彈邊玩邊攞分 |
| 578 | Hadara | c | Hadara 終局結算 |
| 579 | Splendor: Marvel | a | 聲望邊玩邊上,卡/地點欄涵蓋 |
| 580 | Aquatica | c | Aquatica 終局結算 |
| 583 | Lancaster | a | 已有「遊戲中累積分數」 |
| 585 | Next Station: London | a | 逐條線逐круг計分 |
| 589 | Thunderstone Quest | c | Thunderstone 終局結算 |
| 590 | Glen More | a | 已有「遊戲中計分」 |
| 591 | Quadropolis | c | Quadropolis 終局結算 |
| 592 | Black Rose Wars | a | 已有「遊戲中權力點」 |
| 593 | Citadels | c | Citadels 終局結算 |
| 594 | A Few Acres of Snow | c | A Few Acres of Snow 終局結算 |
| 597 | Mystic Vale | c | Mystic Vale 終局結算 |
| 599 | Potion Explosion | a | 藥水遊戲中完成即攞分 |
| 601 | Pipeline | a | 最終現金單欄 = 勝負數值本身 |
| 602 | Canvas | c | Canvas 終局結算 |
| 604 | Lords of Vegas | a | 賭場 VP 邊玩邊結算上軌,已有欄 |
| 607 | Imperial Settlers: Empires of the North | a | 已有「遊戲中累積分數」 |
| 608 | Point Salad | a | 得一欄「最終分數/總分」,本身就係 catch-all,涵蓋軌上分 |
| 609 | Amun-Re | a | 兩個時代逐時代計分 |
| 614 | Thurn and Taxis | c | Thurn and Taxis 終局結算 |
| 616 | Deus | c | Deus 終局結算 |
| 617 | Amerigo | a | 已有「遊戲中累積分數」 |
| 618 | Lacrimosa | a | 已經有計分軌欄位 |
| 619 | Alhambra | a | 已有「三次計分累積」 |
| 620 | BattleLore | a | 勝利旗幟邊打邊攞 |
| 621 | Sheriff of Nottingham | c | Sheriff of Nottingham 終局結算 |
| 624 | Galaxy Trucker (Second Edition) | a | 逐次航程計分,欄位涵蓋 |
| 626 | QE | c | QE 終局結算 |
| 627 | Catan | c | Catan VP 全部由場上部件數,冇獨立軌 |
| 630 | Imhotep | c | Imhotep 終局結算 |
| 631 | Las Vegas | a | 鈔票逐круг贏落袋 |
| 633 | Dinosaur Island: Rawr 'n Write | a | 已有「遊戲中累積分數」 |
| 637 | Escape Plan | a | 最終金錢單欄 = 勝負數值本身 |
| 640 | Port Royal | a | VP 卡遊戲中收,單欄涵蓋 |
| 641 | Railroad Ink: Deep Blue Edition | c | Railroad Ink 終局結算 |
| 642 | Oceans | a | 已食食物邊玩邊累積,已有欄 |
| 643 | Ingenious | a | Ingenious 六色邊放邊上軌,單欄(最低色)涵蓋 |
| 644 | Charterstone | a | 聲望軌欄已有,仲有「其他分數」兜 |
| 645 | Argent: The Consortium | c | Argent 終局點票 |
| 647 | La Granja: Deluxe Master Set | a | 已有「遊戲中累積分數」 |
| 649 | Camel Up | a | 最終金錢單欄 = 勝負數值本身 |
| 650 | Jamaica | a | 金幣逐круг累加 |
| 652 | Small World Underground | a | 已有「各回合征服得分累計」 |
| 653 | Wabash Cannonball | a | 現金 + 持股 = 勝負數值全部 |
| 656 | Crusaders: Thy Will Be Done | c | Crusaders 終局結算 |
| 659 | Love Letter: Premium Edition | a | 愛慕標記逐局攞 |
| 662 | 1846: The Race for the Midwest | a | 現金 + 持股 = 勝負數值全部 |
| 663 | Fleet: The Dice Game | c | Fleet Dice 終局結算 |
| 665 | Sushi Go! | a | 逐круг分類計分 |
| 668 | Broom Service | a | 已有「遊戲中累積分數」 |
| 669 | Blackout: Hong Kong | a | 已有「遊戲中累積分數」 |
| 671 | Valeria: Card Kingdoms | c | Valeria 終局結算 |
| 672 | Libertalia | a | 已有「各次航程收益」 |
| 674 | Karuba | c | Karuba 終局結算 |
| 675 | Take 5 | a | 牛頭逐круг累加(負分) |
| 678 | Azul: Queen's Garden | c | Queen's Garden 終局結算 |
| 680 | Draftosaurus | c | Draftosaurus 終局結算 |
| 682 | Elysium | a | 逐紀元轉去 Elysium 即刻計分,兩欄係累加總和 |
| 683 | Airlines Europe | a | 已有「三次計分累積」 |
| 687 | Mille Fiori | a | 各區域得分係遊戲中即時計 |
| 689 | The Fox in the Forest | a | 已有「各回合得分累計」 |
| 690 | Vikings | c | Vikings 終局結算 |
| 691 | First Class: All Aboard the Orient Express! | a | 已有「遊戲中累積分數」 |
| 695 | Carcassonne: Hunters and Gatherers | a | 已經有計分軌欄位 |
| 696 | My Father's Work | a | 已有「遊戲中累積勝利點」 |
| 698 | StarCraft: The Board Game | a | 征服點數邊打邊攞 |
| 699 | Nexus Ops | a | Nexus Ops VP 邊玩邊上軌,單欄涵蓋 |
| 700 | Taj Mahal | a | 逐круг宮殿/省份計分,欄位涵蓋 |
