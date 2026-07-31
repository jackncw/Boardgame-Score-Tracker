# rulebook 網查 · 研究紀錄

由 `pipeline/log.mjs` 自動 render,唔好人手改(改 `out/research-status.json`)。

路徑:**b** = 對終局計分 100% 肯定,直接生成(`source:"claude-code-gen"`);
**c** = 上網搵官方 rulebook 先生成(`source:"rulebook-web"` + sourceUrl);
**-** = 唔使生成(合作/戰役/闖關/無累加計分)。

# Phase 1 · rank 1–1000(428 行)

## 分流

| 類 | 定義 | 數目 |
| --- | --- | --- |
| A | 競爭型、有終局計分 → 目標 | 51 |
| B | 合作/戰役/闖關/無累加計分 → 唔做,維持 hasScoring:false | 327 |
| C | 未確定,研究時一併判斷 | 48 |
| **合計** | | **428** |

## 進度

- 已生成計分表(done):79
- 揾唔到可靠來源(no-source):1
- 判定唔使做(skip):347
- 未做(pending):1

## 逐隻紀錄

| rank | 遊戲 | 分類 | 路徑 | 結果 | sourceUrl | 備註 |
| ---: | --- | :-: | :-: | --- | --- | --- |
| 107 | Arkham Horror: The Card Game (Revised Core Set) | B | - | skip | — | coop/campaign |
| 108 | Aeon's End | B | - | skip | — | coop/campaign |
| 110 | Galactic Cruise | A | - | done | [link](https://bghub.org/r/galacticcruise.pdf) | 官方 Training Manual;各項分值靠板塊/卡片,全部 number |
| 117 | Decrypto | B | - | skip | — | coop/campaign |
| 120 | Robinson Crusoe: Adventures on the Cursed Island | B | - | skip | — | coop/campaign |
| 122 | The Quest for El Dorado | B | - | skip | — | coop/campaign |
| 125 | Inis | B | - | skip | — | coop/campaign |
| 126 | Battlestar Galactica: The Board Game | B | - | skip | — | coop/campaign |
| 129 | Nemesis: Lockdown | B | - | skip | — | coop/campaign |
| 137 | The Lord of the Rings: The Fellowship of the Ring – Trick-Taking Game | B | - | skip | — | coop/campaign |
| 139 | Tainted Grail: The Fall of Avalon | B | - | skip | — | coop/campaign |
| 140 | Eldritch Horror | B | - | skip | — | coop/campaign |
| 144 | The Lord of the Rings: Journeys in Middle-Earth | B | - | skip | — | coop/campaign |
| 150 | Aeon's End: War Eternal | B | - | skip | — | coop/campaign |
| 157 | Forbidden Stars | B | - | skip | — | coop/campaign |
| 158 | Just One | B | - | skip | — | coop/campaign |
| 159 | ISS Vanguard | B | - | skip | — | coop/campaign |
| 160 | Iberia | B | - | skip | — | coop/campaign |
| 161 | Codenames | B | - | skip | — | coop/campaign |
| 163 | The Elder Scrolls: Betrayal of the Second Era | C | - | skip | — | resweep:合作遊戲 |
| 165 | Too Many Bones: Undertow | B | - | skip | — | coop/campaign |
| 168 | The 7th Continent | B | - | skip | — | coop/campaign |
| 169 | Andromeda's Edge | A | - | done | [link](https://cardboardalchemy.com/downloads/AndromedasEdge_Rulebook_sm.pdf) | 官方 rulebook;受損模組 −2/個、領袖 1 分/個 有明文 |
| 171 | Magic: The Gathering | B | - | skip | — | coop/campaign |
| 172 | Rajas of the Ganges | C | c | done | [link](https://bghub.org/r/rajasoftheganges.pdf) | resweep:兩軌交錯決勝,兩欄都係軌上位置 |
| 174 | Pandemic | B | - | skip | — | coop/campaign |
| 178 | Star Realms | B | - | skip | — | coop/campaign |
| 182 | War Chest | B | - | skip | — | coop/campaign |
| 183 | Undaunted: Normandy | B | - | skip | — | coop/campaign |
| 187 | The Lord of the Rings: The Card Game | B | - | skip | — | coop/campaign |
| 189 | Watergate | B | - | skip | — | coop/campaign |
| 190 | Unmatched: Cobble & Fog | B | - | skip | — | coop/campaign |
| 193 | Vantage | C | - | skip | — | resweep:合作遊戲 |
| 200 | Legendary Encounters: An Alien Deck Building Game | C | - | skip | — | resweep:合作牌庫構築 |
| 206 | Star Wars: X-Wing Miniatures Game | B | - | skip | — | coop/campaign |
| 208 | Sherlock Holmes Consulting Detective: The Thames Murders & Other Cases | C | - | skip | — | resweep:規則書寫明全體合作 |
| 211 | Dune | B | - | skip | — | coop/campaign |
| 212 | Radlands | B | - | skip | — | coop/campaign |
| 213 | Welcome to the Moon | C | c | done | [link](https://bghub.org/r/welcome-to-the-moon.pdf) | resweep:八個冒險計分區唔同,只寫大類 |
| 215 | John Company: Second Edition | C | c | done | [link](https://bghub.org/r/john-company-second-edition.pdf) | resweep:規則書 FINAL SCORING 明文 |
| 217 | Star Wars: The Deckbuilding Game | B | - | skip | — | coop/campaign |
| 220 | Wondrous Creatures | A | - | done | [link](https://drive.google.com/file/d/1_h2Mm0AcNhPVoM91SSdgqhNsuwVpFpOU/view) | 官方 rulebook v2.2;獎盃 3 分、資源每 4 個 1 分 有明文 |
| 221 | This War of Mine: The Board Game | B | - | skip | — | coop/campaign |
| 223 | War of the Ring | B | - | skip | — | coop/campaign |
| 224 | Thunder Road: Vendetta | B | - | skip | — | coop/campaign |
| 229 | Return to Dark Tower | B | - | skip | — | coop/campaign |
| 230 | Speakeasy | A | c | no-source | — | resweep 重試:EGG 官網 rulebook 收喺要登入嘅 Google Drive,2026Q3 先出貨,仍然攞唔到 |
| 232 | Descent: Journeys in the Dark (Second Edition) | B | - | skip | — | coop/campaign |
| 233 | Cosmic Encounter | B | - | skip | — | coop/campaign |
| 235 | Paleo | B | - | skip | — | coop/campaign |
| 238 | Dune: War for Arrakis | B | - | skip | — | coop/campaign |
| 239 | The Resistance: Avalon | B | - | skip | — | coop/campaign |
| 240 | A Game of Thrones: The Board Game (Second Edition) | B | - | skip | — | coop/campaign |
| 246 | Horrified | B | - | skip | — | coop/campaign |
| 248 | Captain Sonar | B | - | skip | — | coop/campaign |
| 255 | Dead of Winter: A Crossroads Game | B | - | skip | — | coop/campaign |
| 258 | Aeon's End: Legacy | B | - | skip | — | coop/campaign |
| 260 | YINSH | B | - | skip | — | coop/campaign |
| 264 | Under Falling Skies | B | - | skip | — | coop/campaign |
| 265 | Paths of Glory | B | - | skip | — | coop/campaign |
| 266 | Star Realms: Colony Wars | B | - | skip | — | coop/campaign |
| 267 | Secret Hitler | B | - | skip | — | coop/campaign |
| 269 | So Clover! | B | - | skip | — | coop/campaign |
| 270 | My City | C | c | done | [link](https://bghub.org/r/my-city.pdf) | resweep:寫永恆遊戲(板背面)版本,單價全部明文 |
| 271 | Cyclades | B | - | skip | — | coop/campaign |
| 275 | Codenames: Duet | B | - | skip | — | coop/campaign |
| 279 | Combat Commander: Europe | B | - | skip | — | coop/campaign |
| 281 | Nemesis: Retaliation | B | - | skip | — | coop/campaign |
| 283 | Samurai | C | c | done | [link](https://bghub.org/r/samurai.pdf) | resweep:多數決,但最後 tie-break 係棋子總數 |
| 284 | Legendary: A Marvel Deck Building Game | A | - | done | [link](https://gamerules.com/rules/marvel-legendary/) | 非出版社原文(gamerules.com);只有旁觀者 1 分係明文 |
| 289 | Flamme Rouge | B | - | skip | — | coop/campaign |
| 291 | Deception: Murder in Hong Kong | B | - | skip | — | coop/campaign |
| 292 | Zombicide: Black Plague | B | - | skip | — | coop/campaign |
| 293 | Unmatched: Battle of Legends, Volume One | B | - | skip | — | coop/campaign |
| 294 | MicroMacro: Crime City | B | - | skip | — | coop/campaign |
| 301 | Aeon's End: The New Age | B | - | skip | — | coop/campaign |
| 304 | Unconscious Mind | A | - | done | [link](https://fantasiaboardgames.com/wp-content/uploads/2024/11/UM-Rulebook-250x250mm_v2_WEB.pdf) | 官方 rulebook;心形盒 2 分、靈感 1 分 有明文 |
| 309 | Hero Realms | B | - | skip | — | coop/campaign |
| 311 | Hot Streak | C | c | done | [link](https://bghub.org/r/hot-streak.pdf) | resweep:三場派彩加埋 |
| 314 | Toy Battle | C | c | done | [link](https://bghub.org/r/toy-battle.pdf) | resweep:勳章決勝 |
| 315 | Santorini | B | - | skip | — | coop/campaign |
| 317 | Star Realms: Frontiers | B | - | skip | — | coop/campaign |
| 322 | Apiary | A | - | done | [link](https://bghub.org/r/apiary.pdf) | 官方 rulebook r10;各項分值靠板塊/卡片故 number |
| 323 | The Lord of the Rings: The Card Game – Revised Core Set | B | - | skip | — | coop/campaign |
| 325 | Mind MGMT: The Psychic Espionage “Game.” | B | - | skip | — | coop/campaign |
| 326 | Dice Throne: Season Two – Battle Chest | B | - | skip | — | coop/campaign |
| 327 | Turing Machine | B | - | skip | — | coop/campaign |
| 328 | Dorfromantik: The Board Game | C | - | skip | — | resweep:合作遊戲 |
| 329 | The Witcher: Old World | B | - | skip | — | coop/campaign |
| 332 | Cloudspire | B | - | skip | — | coop/campaign |
| 333 | Battle Line | B | - | skip | — | coop/campaign |
| 334 | Lewis & Clark: The Expedition | B | - | skip | — | coop/campaign |
| 335 | Oath | B | - | skip | — | coop/campaign |
| 336 | Marvel United | B | - | skip | — | coop/campaign |
| 337 | Hive | B | - | skip | — | coop/campaign |
| 338 | 1960: The Making of the President | B | - | skip | — | coop/campaign |
| 341 | Cryptid | B | - | skip | — | coop/campaign |
| 346 | Detective: A Modern Crime Board Game | C | - | skip | — | resweep:合作查案,分數由 app 結算 |
| 350 | Chronicles of Crime | C | - | skip | — | resweep:合作遊戲 |
| 352 | Telestrations | B | - | skip | — | coop/campaign |
| 353 | Summoner Wars (Second Edition) | B | - | skip | — | coop/campaign |
| 355 | Arkham Horror (Third Edition) | B | - | skip | — | coop/campaign |
| 358 | Keep the Heroes Out! | B | - | skip | — | coop/campaign |
| 359 | T.I.M.E Stories | B | - | skip | — | coop/campaign |
| 360 | Onitama | B | - | skip | — | coop/campaign |
| 361 | Dead Reckoning | A | - | done | [link](https://bghub.org/r/deadreckoning.pdf) | 官方 rulebook;建築 1、基本升級 1、進階升級 2 明文 |
| 364 | Rebirth | A | - | done | [link](https://bghub.org/r/rebirth.pdf) | 官方 rulebook;城堡 5 分 明文 |
| 365 | Magical Athlete | B | - | skip | — | coop/campaign |
| 367 | Forgotten Waters | B | - | skip | — | coop/campaign |
| 368 | Pax Renaissance: 2nd Edition | B | - | skip | — | coop/campaign |
| 369 | The Gang | B | - | skip | — | coop/campaign |
| 371 | Arcadia Quest | B | - | skip | — | coop/campaign |
| 375 | Legacy of Yu | B | - | skip | — | coop/campaign |
| 376 | The King Is Dead: Second Edition | C | - | skip | — | resweep:派系多數決,冇累加分數 |
| 379 | Frostpunk: The Board Game | B | - | skip | — | coop/campaign |
| 381 | Innovation | B | - | skip | — | coop/campaign |
| 388 | Space Alert | B | - | skip | — | coop/campaign |
| 389 | Fromage | A | - | done | [link](https://bghub.org/r/fromage.pdf) | 官方 rulebook;四個場地查板上表故用 number |
| 391 | Shackleton Base: A Journey to the Moon | A | c | done | [link](https://bghub.org/r/shackletonbaseajourneytothemoon.pdf) | resweep:endgame scoring 明文 |
| 400 | The King's Dilemma | C | c | done | [link](https://bghub.org/r/the-kings-dilemma.pdf) | resweep:議程點三大來源 |
| 401 | Feed the Kraken | B | - | skip | — | coop/campaign |
| 405 | Marvel United: X-Men | B | - | skip | — | coop/campaign |
| 406 | Arydia: The Paths We Dare Tread | B | - | skip | — | coop/campaign |
| 408 | Fury of Dracula (Third/Fourth Edition) | B | - | skip | — | coop/campaign |
| 411 | Awkward Guests: The Walton Case | B | - | skip | — | coop/campaign |
| 412 | Nemo's War (Second Edition) | C | - | skip | — | resweep:單人/合作為主,冇對抗性終局計分 |
| 413 | Summoner Wars: Master Set | B | - | skip | — | coop/campaign |
| 415 | Destinies | B | - | skip | — | coop/campaign |
| 416 | Alien Frontiers | C | c | done | [link](https://cs.uwaterloo.ca/~dtompkin/dtlib/base/Alien%20Frontiers.pdf) | resweep:規則書逐項明文 1 VP |
| 417 | Runewars | B | - | skip | — | coop/campaign |
| 420 | Neuroshima Hex | B | - | skip | — | coop/campaign |
| 421 | EXIT: The Game – The Abandoned Cabin | B | - | skip | — | coop/campaign |
| 422 | Let's Go! To Japan | A | - | done | [link](https://bghub.org/r/letsgotojapan.pdf) | 官方 rulebook;研究標記 1 分 明文 |
| 423 | Finspan | A | - | done | [link](https://thetablepriest.com/wp-content/uploads/2025/01/Finspan-Rulebook-EN.pdf) | 官方 rulebook;被吃魚/卵/幼魚 1 分、魚群 6 分 明文 |
| 424 | Burgle Bros. | B | - | skip | — | coop/campaign |
| 425 | Mindbug: First Contact | B | - | skip | — | coop/campaign |
| 428 | Unmatched: Robin Hood vs. Bigfoot | B | - | skip | — | coop/campaign |
| 431 | Dead of Winter: The Long Night | B | - | skip | — | coop/campaign |
| 434 | Sid Meier's Civilization: The Board Game | B | - | skip | — | coop/campaign |
| 436 | Maria | B | - | skip | — | coop/campaign |
| 437 | Schotten Totten | B | - | skip | — | coop/campaign |
| 439 | Daybreak | B | - | skip | — | coop/campaign |
| 441 | Letters from Whitechapel | B | - | skip | — | coop/campaign |
| 446 | Antiquity | B | - | skip | — | coop/campaign |
| 447 | For Northwood! A Solo Trick-Taking Game | B | - | skip | — | coop/campaign |
| 450 | Pagan: Fate of Roanoke | B | - | skip | — | coop/campaign |
| 452 | Mysterium | B | - | skip | — | coop/campaign |
| 458 | Harry Potter: Hogwarts Battle | B | - | skip | — | coop/campaign |
| 463 | Chess | B | - | skip | — | coop/campaign |
| 464 | Ghost Stories | B | - | skip | — | coop/campaign |
| 465 | The Resistance | B | - | skip | — | coop/campaign |
| 466 | Ezra and Nehemiah | A | - | done | [link](https://bghub.org/r/ezraandnehemiah.pdf) | 官方 rulebook;發展板塊 2 分、祭壇領先 3 分 明文 |
| 467 | Earthborne Rangers | B | - | skip | — | coop/campaign |
| 469 | Life of the Amazonia | A | - | done | [link](https://bghub.org/r/lifeoftheamazonia.pdf) | 官方 rulebook;種子 1 分、最後玩家 5 分 明文 |
| 472 | Unsettled | B | - | skip | — | coop/campaign |
| 475 | Unmatched: Battle of Legends, Volume Two | B | - | skip | — | coop/campaign |
| 476 | Kutná Hora: The City of Silver | A | - | done | [link](https://filemanager.czechgames.com/storage/files/kutna-hora-the-city-of-silver/rules/kutna-hora-rules-en.pdf) | CGE 官方 rulebook;收入 ÷10、其他剩餘 1 分明文 |
| 477 | Imperial Struggle | C | c | done | [link](https://gmtwebsiteassets.s3-us-west-2.amazonaws.com/impstruggle/imperial_struggle_rulebook_ENG-FR_bilingual_v1.0.pdf) | resweep:規則書 11.0 Final Scoring |
| 478 | Fall of Rome | B | - | skip | — | coop/campaign |
| 479 | World Wonders | A | - | done | [link](https://bghub.org/r/worldwonders.pdf) | 官方 rulebook;天然資源/城區 1 分、貸款 −2 明文 |
| 482 | Horizons of Spirit Island | B | - | skip | — | coop/campaign |
| 483 | Star Wars: Armada | B | - | skip | — | coop/campaign |
| 485 | Hitster | B | - | skip | — | coop/campaign |
| 486 | Trio | B | - | skip | — | coop/campaign |
| 488 | Arkham Horror | B | - | skip | — | coop/campaign |
| 492 | Descent: Legends of the Dark | B | - | skip | — | coop/campaign |
| 493 | Knarr | A | - | done | [link](https://bghub.org/r/knarr.pdf) | 官方 rulebook;冇終局結算,只有計分軌一個 field |
| 496 | Skull | B | - | skip | — | coop/campaign |
| 497 | Lords of Hellas | B | - | skip | — | coop/campaign |
| 498 | Unmatched Adventures: Tales to Amaze | B | - | skip | — | coop/campaign |
| 499 | Hannibal: Rome vs. Carthage | B | - | skip | — | coop/campaign |
| 500 | Moon Colony Bloodbath | C | c | done | [link](https://bghub.org/r/moon-colony-bloodbath.pdf) | resweep:PDF 係掃描版,只寫類別 |
| 502 | Zombicide: 2nd Edition | B | - | skip | — | coop/campaign |
| 505 | Massive Darkness 2: Hellscape | B | - | skip | — | coop/campaign |
| 506 | The LOOP | B | - | skip | — | coop/campaign |
| 507 | Mage Wars Arena | B | - | skip | — | coop/campaign |
| 509 | Codenames: Pictures | B | - | skip | — | coop/campaign |
| 514 | Cubitos | B | - | skip | — | coop/campaign |
| 518 | Men-Nefer | A | - | done | [link](https://bghub.org/r/mennefer.pdf) | 官方 rulebook;各項查板上軌道故用 number |
| 523 | Firefly: The Game | B | - | skip | — | coop/campaign |
| 529 | PitchCar | B | - | skip | — | coop/campaign |
| 530 | Agent Avenue | C | - | skip | — | resweep:即時勝負,冇累加計分 |
| 533 | Unmatched: Little Red Riding Hood vs. Beowulf | B | - | skip | — | coop/campaign |
| 535 | Wavelength | B | - | skip | — | coop/campaign |
| 536 | Luthier | A | - | done | [link](https://bghub.org/r/luthier.pdf) | 官方 rulebook;專長工人 1 分明文,首席對照表未列故 number |
| 537 | Woodcraft | A | - | done | [link](https://bghub.org/r/woodcraft.pdf) | 官方 rulebook;剩餘每 10 個 1 分明文 |
| 538 | MicroMacro: Crime City – Full House | B | - | skip | — | coop/campaign |
| 539 | Civilization | B | - | skip | — | coop/campaign |
| 540 | Black Orchestra | B | - | skip | — | coop/campaign |
| 544 | Zenith | C | - | skip | — | resweep:即時勝利條件,冇累加計分 |
| 545 | Flash Point: Fire Rescue | B | - | skip | — | coop/campaign |
| 548 | Mythic Battles: Pantheon | B | - | skip | — | coop/campaign |
| 549 | Sprawlopolis | B | - | skip | — | coop/campaign |
| 551 | Sword & Sorcery: Immortal Souls | B | - | skip | — | coop/campaign |
| 552 | Here I Stand | C | c | done | [link](https://bghub.org/r/here-i-stand.pdf) | resweep:規則書 9.4 base/special/bonus 三大類 |
| 553 | Regicide | B | - | skip | — | coop/campaign |
| 554 | Space Hulk (Third Edition) | B | - | skip | — | coop/campaign |
| 555 | The Lord of the Rings: The Confrontation | B | - | skip | — | coop/campaign |
| 558 | Unmatched Game System | B | - | skip | — | coop/campaign |
| 560 | Barcelona | A | - | done | [link](https://bghub.org/r/barcelona.pdf) | 官方 rulebook;三項終局全部查板上表 |
| 561 | Fire in the Lake | B | - | skip | — | coop/campaign |
| 564 | Reign of Cthulhu | B | - | skip | — | coop/campaign |
| 566 | Sherlock Holmes Consulting Detective: Jack the Ripper & West End Adventures | C | - | skip | — | resweep:規則書寫明全體合作 |
| 568 | Mice and Mystics | B | - | skip | — | coop/campaign |
| 573 | Zombie Kidz Evolution | B | - | skip | — | coop/campaign |
| 575 | Compile: Main 1 | B | - | skip | — | coop/campaign |
| 576 | Undaunted: North Africa | B | - | skip | — | coop/campaign |
| 577 | Heroscape Master Set: Rise of the Valkyrie | B | - | skip | — | coop/campaign |
| 581 | Dawn of the Zeds (Third Edition) | B | - | skip | — | coop/campaign |
| 582 | Aeon Trespass: Odyssey | B | - | skip | — | coop/campaign |
| 584 | Claustrophobia | B | - | skip | — | coop/campaign |
| 586 | Dune | B | - | skip | — | coop/campaign |
| 587 | The Old King's Crown | C | c | pending | — | resweep 重試:BGG/Scribd 以外冇公開 rulebook,終局計分結構判斷唔到,唔硬砌 |
| 588 | Advanced Squad Leader | B | - | skip | — | coop/campaign |
| 592 | Black Rose Wars | C | c | done | [link](https://bghub.org/r/blackrosewars.pdf) | resweep:排名獎勵表印喺圖,留 number |
| 595 | Friday | B | - | skip | — | coop/campaign |
| 596 | Middara: Unintentional Malum – Act 1 | B | - | skip | — | coop/campaign |
| 598 | Shadows over Camelot | B | - | skip | — | coop/campaign |
| 600 | Terrorscape | B | - | skip | — | coop/campaign |
| 603 | Hanabi | B | - | skip | — | coop/campaign |
| 605 | Take Time | C | - | skip | — | resweep:合作遊戲 |
| 606 | Eternal Decks | C | - | skip | — | resweep:全合作遊戲 |
| 610 | Kingdom Legacy: Feudal Kingdom | B | - | skip | — | coop/campaign |
| 611 | EXIT: The Game – Dead Man on the Orient Express | B | - | skip | — | coop/campaign |
| 612 | Unfathomable | B | - | skip | — | coop/campaign |
| 613 | Forbidden Desert | B | - | skip | — | coop/campaign |
| 615 | Stuffed Fables | B | - | skip | — | coop/campaign |
| 618 | Lacrimosa | A | - | done | [link](https://bghub.org/r/lacrimosa.pdf) | 官方 rulebook;故事點每 2 分、金錢每 3 分 明文 |
| 622 | Junk Art | B | - | skip | — | coop/campaign |
| 623 | Pandemic: The Cure | B | - | skip | — | coop/campaign |
| 625 | Mansions of Madness | B | - | skip | — | coop/campaign |
| 628 | Cyclades: Legendary Edition | B | - | skip | — | coop/campaign |
| 629 | Betrayal Legacy | B | - | skip | — | coop/campaign |
| 632 | Descent: Journeys in the Dark | B | - | skip | — | coop/campaign |
| 634 | Star Wars: Unlimited | B | - | skip | — | coop/campaign |
| 635 | Risk Legacy | B | - | skip | — | coop/campaign |
| 636 | Nova Luna | B | - | skip | — | coop/campaign |
| 638 | Space Empires 4X | B | - | skip | — | coop/campaign |
| 639 | Blood Bowl (Third Edition) | B | - | skip | — | coop/campaign |
| 644 | Charterstone | C | c | done | [link](https://cdn.1j1ju.com/medias/4e/0e/77-charterstone-rulebook.pdf) | resweep:戰役會解鎖新計分,留咗 catch-all 欄 |
| 645 | Argent: The Consortium | C | c | done | [link](https://www.boardgamehelpers.com/ArgentTheConsortium/Images/ArgentRulebookWeb.pdf) | resweep:勝負係票數,標記/影響力只係 tie-break |
| 646 | Detective: City of Angels | B | - | skip | — | coop/campaign |
| 648 | Raptor | B | - | skip | — | coop/campaign |
| 651 | Discworld: Ankh-Morpork | B | - | skip | — | coop/campaign |
| 654 | Labyrinth: The War on Terror, 2001 – ? | B | - | skip | — | coop/campaign |
| 655 | TZAAR | B | - | skip | — | coop/campaign |
| 657 | RoboRally | B | - | skip | — | coop/campaign |
| 658 | Star Wars: X-Wing (Second Edition) | B | - | skip | — | coop/campaign |
| 660 | Bullet♥︎ | B | - | skip | — | coop/campaign |
| 661 | Warp's Edge | B | - | skip | — | coop/campaign |
| 664 | 1775: Rebellion | B | - | skip | — | coop/campaign |
| 666 | Shadows of Brimstone: City of the Ancients | B | - | skip | — | coop/campaign |
| 667 | Runebound (Third Edition) | B | - | skip | — | coop/campaign |
| 670 | Etherfields | B | - | skip | — | coop/campaign |
| 673 | The Grizzled | B | - | skip | — | coop/campaign |
| 676 | Last Will | B | - | skip | — | coop/campaign |
| 677 | Unmatched: Jurassic Park – InGen vs Raptors | B | - | skip | — | coop/campaign |
| 679 | DVONN | B | - | skip | — | coop/campaign |
| 681 | Freedom: The Underground Railroad | B | - | skip | — | coop/campaign |
| 684 | War of the Ring: The Card Game | B | - | skip | — | coop/campaign |
| 685 | Legends of Andor | B | - | skip | — | coop/campaign |
| 686 | One Night Ultimate Werewolf | B | - | skip | — | coop/campaign |
| 688 | Atlantis Rising (Second Edition) | B | - | skip | — | coop/campaign |
| 692 | Project: ELITE | B | - | skip | — | coop/campaign |
| 693 | Blood Bowl: Living Rulebook | B | - | skip | — | coop/campaign |
| 694 | Sentinels of the Multiverse | B | - | skip | — | coop/campaign |
| 696 | My Father's Work | C | c | done | [link](https://cdn.1j1ju.com/medias/a7/f7/15-my-fathers-work-rulebook.pdf) | resweep:終局計分明文 |
| 697 | Euphoria: Build a Better Dystopia | B | - | skip | — | coop/campaign |
| 698 | StarCraft: The Board Game | C | c | done | [link](https://bghub.org/r/starcrafttheboardgame.pdf) | resweep:征服點數 |
| 701 | London | - | c | done | [link](https://bghub.org/r/london.pdf) | resweep:log 漏網;規則書計分明文 |
| 702 | Unlock!: Escape Adventures | B | - | skip | — | coop/campaign |
| 703 | Undaunted: Stalingrad | B | - | skip | — | coop/campaign |
| 706 | High Frontier 4 All | C | c | done | [link](https://boardgame.bg/high%20frontier%204%20all%20rules.pdf) | resweep:規則書 M2 Scoring 明文 |
| 707 | Archipelago | C | c | done | [link](https://cdn.1j1ju.com/medias/25/24/a3-archipelago-rulebook.pdf) | resweep:目標/趨勢卡排名計分 |
| 708 | Federation | A | c | done | [link](https://cdn.1j1ju.com/medias/78/07/b3-federation-rulebook.pdf) | resweep:終局三段計分明文 |
| 709 | HeroQuest | B | - | skip | — | coop/campaign |
| 713 | Baseball Highlights: 2045 | B | - | skip | — | coop/campaign |
| 714 | Dice Throne: Season One | B | - | skip | — | coop/campaign |
| 715 | Wandering Towers | B | - | skip | — | coop/campaign |
| 719 | Coup | B | - | skip | — | coop/campaign |
| 720 | Cozy Stickerville | C | - | skip | — | resweep:合作,冇輸贏 |
| 722 | Pathfinder Adventure Card Game: Rise of the Runelords – Base Set | B | - | skip | — | coop/campaign |
| 725 | Windmill Valley | A | - | done | [link](https://bghub.org/r/windmill-valley.pdf) | 官方 rulebook;球莖顏色 1/1/2/2/3 分明文 |
| 727 | Azul: Master Chocolatier | A | - | done | [link](https://bghub.org/r/azul-master-chocolatier.pdf) | 官方 rulebook;橫行 2、直行 7、集色 10 分 明文 |
| 728 | River of Gold | A | c | done | [link](https://bghub.org/r/river-of-gold.pdf) | resweep:PDF 係掃描版,只寫類別 |
| 729 | Star Trek: Captain's Chair | C | c | done | [link](https://bghub.org/r/star-trek-captains-chair.pdf) | resweep:final scoring 明文 |
| 730 | Unlock!: Heroic Adventures | B | - | skip | — | coop/campaign |
| 731 | Star Wars: Battle of Hoth | B | - | skip | — | coop/campaign |
| 732 | Star Trek: Ascendancy | B | - | skip | — | coop/campaign |
| 733 | Skyrise | A | - | done | [link](https://bghub.org/r/skyrise.pdf) | 官方 rulebook;島嶼 5 分、大細鑰匙 10/4 分 明文 |
| 734 | Triumph & Tragedy: European Balance of Power 1936-1945 | B | - | skip | — | coop/campaign |
| 735 | Brian Boru: High King of Ireland | A | - | done | [link](https://bghub.org/r/brian-boru-high-king-of-ireland.pdf) | 官方 rulebook;地區數對照表 0/1/3/5/7/10 明文,用 tiered |
| 738 | Beer & Bread | A | - | done | [link](https://bghub.org/r/beer-bread.pdf) | 官方 rulebook;最終分 = 啤酒/麵包較低者,唔係加總,所以只設 1 個 field |
| 740 | Pax Porfiriana | B | - | skip | — | coop/campaign |
| 741 | Three Sisters | A | b | done | — | resweep:desc-gen,25th Century 冇公開 rulebook PDF |
| 742 | Shards of Infinity | B | - | skip | — | coop/campaign |
| 744 | The 7th Citadel | B | - | skip | — | coop/campaign |
| 745 | Cuba Libre | B | - | skip | — | coop/campaign |
| 749 | Star Wars: The Clone Wars | B | - | skip | — | coop/campaign |
| 751 | Tag Team | C | - | skip | — | resweep:KO 決勝,冇累加計分 |
| 752 | Whitehall Mystery | B | - | skip | — | coop/campaign |
| 758 | Telestrations: 12 Player Party Pack | B | - | skip | — | coop/campaign |
| 760 | Zombicide: Green Horde | B | - | skip | — | coop/campaign |
| 762 | Inventions: Evolution of Ideas | A | - | done | [link](https://bghub.org/r/inventions-evolution-of-ideas.pdf) | 官方 rulebook;影響力 1/5/10 明文 |
| 766 | A Fake Artist Goes to New York | B | - | skip | — | coop/campaign |
| 767 | Zoo Vadis | A | - | done | [link](https://gamers-hq.de/media/pdf/95/28/ee/ZV_Rules_-SMALL.pdf) | 官方 rulebook;分數即月桂葉面值總和,只有 1 個 field |
| 768 | Zombicide | B | - | skip | — | coop/campaign |
| 769 | BattleCON: Devastation of Indines | B | - | skip | — | coop/campaign |
| 770 | Living Forest | B | - | skip | — | coop/campaign |
| 771 | Can't Stop | B | - | skip | — | coop/campaign |
| 774 | Bloodborne: The Board Game | B | - | skip | — | coop/campaign |
| 775 | Conan | B | - | skip | — | coop/campaign |
| 778 | A Game of Thrones | B | - | skip | — | coop/campaign |
| 779 | Betrayal at House on the Hill | B | - | skip | — | coop/campaign |
| 780 | Quantum | B | - | skip | — | coop/campaign |
| 781 | Formula D | B | - | skip | — | coop/campaign |
| 784 | Duel for Cardia | C | c | done | [link](https://bghub.org/r/duel-for-cardia.pdf) | resweep:印章決勝 |
| 785 | The Battle of Five Armies | B | - | skip | — | coop/campaign |
| 786 | Sanctuary | C | c | done | [link](https://bghub.org/r/sanctuary.pdf) | resweep:final scoring 明文 |
| 787 | Gears of War: The Board Game | B | - | skip | — | coop/campaign |
| 788 | Sub Terra | B | - | skip | — | coop/campaign |
| 790 | Stationfall | C | c | done | [link](https://bghub.org/r/stationfall.pdf) | resweep:分數來源係各自秘密身份議程,只寫大類 |
| 794 | Twilight Inscription | A | - | done | [link](https://bghub.org/r/twilightinscription.pdf) | 官方 rulebook;各表小計(工業表每 2 貿易貨物 +1 明文) |
| 796 | The Adventures of Robin Hood | B | - | skip | — | coop/campaign |
| 797 | Taluva | C | - | skip | — | resweep:階層式多數決(神廟>塔>茅屋),冇累加總分 |
| 799 | Elder Sign | B | - | skip | — | coop/campaign |
| 800 | Magic Maze | B | - | skip | — | coop/campaign |
| 801 | Cthulhu: Death May Die – Fear of the Unknown | B | - | skip | — | coop/campaign |
| 803 | Civilization: A New Dawn | B | - | skip | — | coop/campaign |
| 804 | Hammer of the Scots | B | - | skip | — | coop/campaign |
| 805 | Mare Nostrum: Empires | B | - | skip | — | coop/campaign |
| 806 | Leviathan Wilds | B | - | skip | — | coop/campaign |
| 807 | Chronicles of Crime: 1400 | C | - | skip | — | resweep:合作查案,分數由 app 結算 |
| 808 | A Game of Thrones: The Card Game (Second Edition) | B | - | skip | — | coop/campaign |
| 809 | Lord of the Rings: The Confrontation | B | - | skip | — | coop/campaign |
| 811 | Top Ten | B | - | skip | — | coop/campaign |
| 812 | Disney Villainous: Wicked to the Core | B | - | skip | — | coop/campaign |
| 814 | Mr. Jack | B | - | skip | — | coop/campaign |
| 817 | Star Wars: Destiny | B | - | skip | — | coop/campaign |
| 818 | Unstoppable | C | - | skip | — | resweep:打 boss 合作/單人 |
| 821 | One Night Ultimate Werewolf: Daybreak | B | - | skip | — | coop/campaign |
| 822 | Primal: The Awakening | B | - | skip | — | coop/campaign |
| 825 | D-Day at Omaha Beach | B | - | skip | — | coop/campaign |
| 826 | Guards of Atlantis II | B | - | skip | — | coop/campaign |
| 827 | Sleeping Gods: Distant Skies | B | - | skip | — | coop/campaign |
| 829 | Unlock!: Timeless Adventures | B | - | skip | — | coop/campaign |
| 830 | Churchill | C | c | done | [link](https://bghub.org/r/churchill.pdf) | resweep:規則書 9.4 勝利點表逐條明文 |
| 833 | Blood Bowl (2016 Edition) | B | - | skip | — | coop/campaign |
| 836 | The Oracle of Delphi | B | - | skip | — | coop/campaign |
| 838 | Roll Player Adventures | B | - | skip | — | coop/campaign |
| 839 | Escape: The Curse of the Temple | B | - | skip | — | coop/campaign |
| 841 | Treasure Island | B | - | skip | — | coop/campaign |
| 842 | The Shipwreck Arcana | B | - | skip | — | coop/campaign |
| 843 | Fliptown | A | b | done | — | resweep:desc-gen,Write Stuff 只有 P&P 包 |
| 845 | The Republic of Rome | B | - | skip | — | coop/campaign |
| 847 | Maquis | B | - | skip | — | coop/campaign |
| 849 | Whistle Mountain | A | c | done | [link](https://cdn.1j1ju.com/medias/d1/aa/9c-whistle-mountain-rulebook.pdf) | resweep:計分頁係圖抽唔到單價,全部欄用 number |
| 852 | Disney Villainous: Evil Comes Prepared | B | - | skip | — | coop/campaign |
| 854 | Tiny Epic Dungeons | B | - | skip | — | coop/campaign |
| 855 | Critter Kitchen | A | - | done | [link](https://bghub.org/r/critterkitchen.pdf) | 官方 rulebook;最多湯 1 星、七道菜 1 星、每道最佳 1 星 明文 |
| 858 | Space Hulk: Death Angel – The Card Game | B | - | skip | — | coop/campaign |
| 860 | Pax Renaissance | B | - | skip | — | coop/campaign |
| 861 | Summoner Wars | B | - | skip | — | coop/campaign |
| 864 | Ashes Reborn: Rise of the Phoenixborn | B | - | skip | — | coop/campaign |
| 865 | Onirim (Second Edition) | B | - | skip | — | coop/campaign |
| 866 | Menara | B | - | skip | — | coop/campaign |
| 868 | Creature Caravan | A | c | done | [link](https://www.redravengames.com/creature-caravan/) | resweep:官方 dropbox 規則書,計分逐條明文 |
| 869 | Spicy | B | - | skip | — | coop/campaign |
| 872 | Marvel Zombies: A Zombicide Game | B | - | skip | — | coop/campaign |
| 874 | Perudo | B | - | skip | — | coop/campaign |
| 875 | Messina 1347 | A | - | done | [link](https://bghub.org/r/messina1347.pdf) | 官方 rulebook;老鼠對照表未抽到故 number |
| 877 | Captain Flip | A | - | done | [link](https://bghub.org/r/captain-flip.pdf) | 官方 rulebook;分數即金幣 |
| 878 | River Valley Glassworks | A | c | done | [link](https://assets.allplay.com/board-games-river-valley-glassworks-rulebook-link.pdf) | resweep:官方 Allplay 規則書 FINAL SCORING |
| 880 | Crystal Palace | A | - | done | [link](https://bghub.org/r/crystalpalace.pdf) | 官方 rulebook;話題 6/4/2、黑市 3/2/1、空研究格 −2 明文 |
| 882 | KeyForge: Call of the Archons | B | - | skip | — | coop/campaign |
| 883 | Star Wars: X-Wing Miniatures Game – The Force Awakens Core Set | B | - | skip | — | coop/campaign |
| 887 | Wir sind das Volk! | B | - | skip | — | coop/campaign |
| 888 | Diplomacy | B | - | skip | — | coop/campaign |
| 890 | Gloomhaven: Buttons & Bugs | B | - | skip | — | coop/campaign |
| 892 | BANG! The Dice Game | B | - | skip | — | coop/campaign |
| 893 | Black Rose Wars: Rebirth | C | b | done | — | resweep:desc-gen,官方 rulebook 喺要登入嘅 app 站 |
| 894 | EXIT: The Game – The Pharaoh's Tomb | B | - | skip | — | coop/campaign |
| 896 | Spots | B | - | skip | — | coop/campaign |
| 899 | Fury of Dracula (Second Edition) | B | - | skip | — | coop/campaign |
| 900 | Evacuation | A | - | done | [link](https://www.riograndegames.com/wp-content/uploads/2023/09/Evacuation-1.pdf) | 官方 rulebook;罰籌/未撤離/缺體育場 各 −1、笑臉 +2/+1 明文 |
| 912 | Empire of the Sun: The Pacific War 1941-1945 | B | - | skip | — | coop/campaign |
| 915 | Galileo Galilei | A | - | done | [link](https://bghub.org/r/galileo-galilei.pdf) | 官方 rulebook;大學/裁判所值靠板塊故 number |
| 920 | Hoplomachus: Victorum | B | - | skip | — | coop/campaign |
| 921 | My Little Scythe | B | - | skip | — | coop/campaign |
| 922 | Rats of Wistar | A | b | done | — | resweep:desc-gen,Cranio 官網只公開勘誤 |
| 923 | Rhino Hero: Super Battle | B | - | skip | — | coop/campaign |
| 926 | Blue Moon City | B | - | skip | — | coop/campaign |
| 927 | Steampunk Rally | B | - | skip | — | coop/campaign |
| 929 | Defenders of the Realm | B | - | skip | — | coop/campaign |
| 932 | Stardew Valley: The Board Game | B | - | skip | — | coop/campaign |
| 934 | Saltfjord | A | - | done | [link](https://bghub.org/r/saltfjord.pdf) | 官方 rulebook;每 3 魚 1 分、4 箱一組 3 分 明文 |
| 936 | Specter Ops | B | - | skip | — | coop/campaign |
| 937 | Warhammer Quest: The Adventure Card Game | B | - | skip | — | coop/campaign |
| 938 | Leaving Earth | C | b | done | — | resweep:desc-gen,lumenaris 官網 PDF 連結已失效 |
| 939 | New York Zoo | B | - | skip | — | coop/campaign |
| 940 | SpaceCorp: 2025-2300AD | C | c | done | [link](https://cdn.1j1ju.com/medias/30/fe/00-spacecorp-rulebook.pdf) | resweep:分數即係利潤 |
| 943 | Shadows of Brimstone: Swamps of Death | B | - | skip | — | coop/campaign |
| 948 | Advanced Squad Leader: Starter Kit #1 | B | - | skip | — | coop/campaign |
| 949 | Black Sonata | B | - | skip | — | coop/campaign |
| 951 | Imperial Steam | A | - | done | [link](https://bghub.org/r/imperialsteam.pdf) | 官方 rulebook;貨物 10、樞紐 10/30/60/100 明文;股東 10% 要玩家自己計 |
| 953 | Earth Reborn | B | - | skip | — | coop/campaign |
| 957 | 878 Vikings: Invasions of England | B | - | skip | — | coop/campaign |
| 958 | Unlock!: Epic Adventures | B | - | skip | — | coop/campaign |
| 959 | Sail | B | - | skip | — | coop/campaign |
| 961 | Disney Villainous: The Worst Takes it All | B | - | skip | — | coop/campaign |
| 962 | Unmatched: Houdini vs. The Genie | B | - | skip | — | coop/campaign |
| 964 | Abomination: The Heir of Frankenstein | A | c | done | [link](https://media.plaidhatgames.com/old_images/games/abomination/rules.pdf) | resweep:官方 Plaid Hat 規則書 |
| 965 | Warhammer: Invasion | B | - | skip | — | coop/campaign |
| 968 | Red7 | B | - | skip | — | coop/campaign |
| 969 | Cities | A | - | done | [link](https://bghub.org/r/cities.pdf) | 官方 rulebook;水域/公園 1/3/6/10、紀念碑 2 分 明文 |
| 971 | Middle-Earth Quest | B | - | skip | — | coop/campaign |
| 973 | Disney Villainous: Perfectly Wretched | B | - | skip | — | coop/campaign |
| 975 | Last Bastion | B | - | skip | — | coop/campaign |
| 977 | Heroes of Land, Air & Sea | A | - | done | [link](https://bghub.org/r/heroes-of-land-air-sea.pdf) | 官方 rulebook;控制區域 1 分明文,其餘查首都板故 number |
| 979 | Beast | B | - | skip | — | coop/campaign |
| 980 | Not Alone | B | - | skip | — | coop/campaign |
| 982 | Brazil: Imperial | A | - | done | [link](https://bghub.org/r/brazilimperial.pdf) | 官方 rulebook;八類計分項,分值靠卡/板塊故 number |
| 984 | A Gentle Rain | C | - | skip | — | resweep:單人/雙人合作拼圖,冇對抗性終局計分 |
| 988 | Mistborn: The Deckbuilding Game | B | - | skip | — | coop/campaign |
| 989 | Kinfire Delve: Vainglory's Grotto | B | - | skip | — | coop/campaign |
| 990 | FUSE | B | - | skip | — | coop/campaign |
| 992 | EXIT: The Game – The Secret Lab | B | - | skip | — | coop/campaign |
| 999 | Parade | - | c | done | [link](https://cdn.1j1ju.com/medias/8f/7e/8f-parade-rulebook.pdf) | resweep:log 漏網;分數越低越好,兩欄都自動扣 |

# Phase 2 · rank 1001–3000(2000 行)

## 進度

- 已生成計分表(done):461
- 揾唔到可靠來源(no-source):5
- 判定唔使做(skip):887
- 未做(pending):647
- 路徑 b(直接生成):190 · 路徑 c(網查 rulebook):930

## 逐隻紀錄

| rank | 遊戲 | 路徑 | 結果 | sourceUrl | 備註 |
| ---: | --- | :-: | --- | --- | --- |
| 1001 | Vast: The Crystal Caverns | - | skip | — | 不對稱陣營遊戲,每個角色勝利條件唔同,無統一累加計分 |
| 1002 | Gentes | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1003 | Space Hulk | - | skip | — | 劇本制對戰遊戲,以完成任務定勝負,無累加計分 |
| 1004 | Art Society | c | done | [link](https://bghub.org/r/art-society.pdf) | 畫作聲望×排名、裝飾、視線、滿牆、牆角/多餘扣分 |
| 1005 | King of New York | b | done | — | 單一 VP 軌,同東京之王同款 |
| 1006 | Tammany Hall | b | done | — | 四次選舉累計得分(放寬尺度) |
| 1007 | Empires: Age of Discovery | b | done | — | 軌上分/建築/發現/首都/商品 |
| 1008 | Werewords | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1009 | Letter Jam | - | skip | — | 合作制猜字遊戲,無玩家累加計分 |
| 1010 | Coffee Roaster | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1011 | Jekyll vs. Hyde | - | skip | — | 雙人不對稱吃磴遊戲,以標記推進定勝負,無累加計分 |
| 1012 | Roam | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1013 | Mahjong | - | skip | — | 傳統麻雀,計番規則按地區變體差異極大,難以單一計分表覆蓋 |
| 1014 | One Deck Dungeon | - | skip | — | 單人/合作制地城遊戲,無玩家累加計分 |
| 1015 | Caylus 1303 | c | done | [link](https://bghub.org/r/caylus1303.pdf) | PP 標記 + 終局剩餘物每個 2 PP(圖示物品規則書文字冇寫) |
| 1016 | Sniper Elite: The Board Game | - | skip | — | 一對多隱藏移動遊戲,以陣營目標定勝負,無累加計分 |
| 1017 | Dice Throne | - | skip | — | 雙人對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1018 | Hannibal & Hamilcar | - | skip | — | 雙人戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1019 | Morels | b | done | — | 已烹調蘑菇分數 |
| 1020 | Dinosaur World | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1021 | Cry Havoc | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1022 | The Lost Expedition | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1023 | Cerebria: The Inside World | - | skip | — | 隊制不對稱遊戲,以陣營勝利條件定勝負,無累加計分 |
| 1024 | Black Forest | c | done | [link](https://bghub.org/r/black-forest.pdf) | 玻璃 1/烹飪轉盤/小莊園 2/牧場牲口 1/建築 |
| 1025 | Dale of Merchants | - | skip | — | 以最先儲齊一疊指定動物牌定勝負,無累加計分 |
| 1026 | Jambo | b | done | — | 金幣總額 |
| 1027 | Fugitive | - | skip | — | 雙人隱藏移動遊戲,以捉到/逃脫定勝負,無累加計分 |
| 1028 | Dungeons & Dragons: The Legend of Drizzt Board Game | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1029 | Luxor | c | done | [link](https://bghub.org/r/luxor.pdf) | 寶物套組對照表 1–8 套 = 3/7/12/18/25/33/42/52 |
| 1030 | Black Angel | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1031 | Lords of Xidit | - | skip | — | 以三種資源逐項排名淘汰判定,無累加計分 |
| 1032 | Terraforming Mars: The Dice Game | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1033 | Courtisans | c | done | [link](https://bghub.org/r/courtisans.pdf) | 得寵 +1/失寵 -1/秘密任務 +3 |
| 1034 | Squad Leader | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1035 | Zombicide Season 2: Prison Outbreak | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1036 | Forbidden Island | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1037 | Unlock!: Secret Adventures | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1038 | Unlock!: Mystery Adventures | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1039 | The Duke | - | skip | — | 抽象對弈,以擒獲對手公爵定勝負,無累加計分 |
| 1040 | Pandemic: Rising Tide | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1041 | Kelp: Shark vs Octopus | - | skip | — | 雙人不對稱對戰,以達成陣營目標定勝負,無累加計分 |
| 1042 | Outlive | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1043 | Tang Garden | c | done | [link](https://bghub.org/r/tang-garden.pdf) | 金幣制;樹木套組 1-4-9-16-25 |
| 1044 | Lands of Galzyr | - | skip | — | 戰役制探索遊戲,無統一累加計分 |
| 1045 | The Thing: The Boardgame | - | skip | — | 半合作隱藏身分遊戲,以陣營成敗定勝負,無累加計分 |
| 1046 | Among the Stars | b | done | — | 設施卡 + 目標卡 |
| 1047 | XCOM: The Board Game | - | skip | — | App 驅動合作制遊戲,無玩家累加計分 |
| 1048 | Evenfall | c | done | [link](https://bghub.org/r/evenfall.pdf) | 軌上分 + 專家 + 議會終局 + 儀式/權力之地 |
| 1049 | ZÈRTZ | - | skip | — | 抽象對弈,以儲齊指定彈珠組合定勝負,無累加計分 |
| 1050 | Forest Shuffle: Dartmoor | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1051 | Rumble Nation | b | done | — | 地區名次分 |
| 1052 | Rurik: Dawn of Kiev | c | done | [link](https://bghub.org/r/rurik-dawn-of-kiev.pdf) | 三條宣稱軌 + 戰爭軌 3/1 + 議程 2 + 功績卡 |
| 1053 | Fit to Print | c | done | [link](https://bghub.org/r/fit-to-print.pdf) | 報道/相片/頭條/留白名次/情緒失衡/未擺磚 -1 |
| 1054 | Scarface 1920 | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1055 | Rhino Hero | - | skip | — | 疊疊樂遊戲,以最先出晒牌或塔冧定勝負,無累加計分 |
| 1056 | Friedrich: Anniversary Edition | - | skip | — | 雙人以上戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1057 | Container | c | done | [link](https://bghub.org/r/container.pdf) | 錢為單位;船同暫存 $3、港口 $2、貸款 -$11 |
| 1058 | Star Wars: The Card Game | - | skip | — | 集換式卡牌對戰,以摧毀對手目標定勝負,無累加計分 |
| 1059 | Up Front | - | skip | — | 劇本制卡牌戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1060 | ito | - | skip | — | 合作制排序派對遊戲,無玩家累加計分 |
| 1061 | The Wolves | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1062 | Spyrium | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1063 | Vasco da Gama | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1064 | Nightmare Productions | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1065 | Tribune: Primus Inter Pares | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1066 | Condottiere | - | skip | — | 區域控制卡牌遊戲,以佔領相鄰行省定勝負,無累加計分 |
| 1067 | Scoville | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1068 | 1989: Dawn of Freedom | - | skip | — | 雙人 CDG 戰棋,以單一勝利點軌與突然死亡判定,唔需要分項計分表 |
| 1069 | Arcadia Quest: Inferno | - | skip | — | PvP 戰役制遊戲,以完成任務獎章定勝負,無累加計分 |
| 1070 | Palm Island | - | skip | — | 單人卡牌遊戲,無玩家累加計分 |
| 1071 | Zombicide: Invader | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1072 | Rebel Princess | c | done | [link](https://bghub.org/r/rebel-princess.pdf) | 求婚越少越好,單一扣分欄 |
| 1073 | DinoGenics | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1074 | Reef Encounter | c | done | [link](https://bghub.org/r/reef-encounter.pdf) | 鸚哥魚食咗嘅息肉每塊 1–5 分 |
| 1075 | Red Rising | c | done | [link](https://bghub.org/r/red-rising.pdf) | 氦 3/君主 10/影響力 4-2-1/艦隊軌 0–43/超 7 張每張 -10 |
| 1076 | Horrified: American Monsters | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1077 | Istanbul: The Dice Game | - | skip | — | 以最先儲齊指定數量紅寶石定勝負,無累加計分 |
| 1078 | Survive The Island | b | done | — | 獲救生物底面點數總和 |
| 1079 | Merchants of the Dark Road | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1080 | Ca$h 'n Guns: Second Edition | b | done | — | 八回合分贓,生還者中錢最多者勝 |
| 1081 | Sherlock Holmes Consulting Detective: The Baker Street Irregulars | - | skip | — | 合作解謎,按案件問答同線索數計分,唔適用累加計分表 |
| 1082 | Roll Through the Ages: The Bronze Age | b | done | — | 紀念碑 + 發展 + 發展額外分 − 災難 |
| 1083 | Qwirkle | b | done | — | 全程擺牌累計 + 最先出晒牌 6 分 |
| 1084 | Tiny Epic Dinosaurs | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1085 | Thunderstone | b | done | — | 牌庫所有卡上嘅 VP |
| 1086 | Eila and Something Shiny | - | skip | — | 單人/合作制故事遊戲,無玩家累加計分 |
| 1087 | Hyperborea | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1088 | Inferno | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1089 | Outfoxed! | - | skip | — | 合作制兒童推理遊戲,無玩家累加計分 |
| 1090 | Tak | - | skip | — | 抽象對弈,以築成通路定勝負,無累加計分 |
| 1091 | Last Night on Earth: The Zombie Game | - | skip | — | 一對多劇本制遊戲,以陣營目標定勝負,無累加計分 |
| 1092 | Carcassonne: The City | c | done | [link](https://bghub.org/r/carcassonne-the-city.pdf) | OCR 掃描版,只寫得出項目類別(管家/守衛),單價冇寫 |
| 1093 | Castles of Mad King Ludwig: Collector's Edition | b | done | — | 計分軌 + 獎勵卡 + 國王恩惠 |
| 1094 | Grove: 9 card solitaire game | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1095 | Washington's War | - | skip | — | 雙人 CDG 戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1096 | Combat Commander: Pacific | - | skip | — | 劇本制戰棋,以劇本勝利點判定,唔需要分項計分表 |
| 1097 | 13 Days: The Cuban Missile Crisis, 1962 | - | skip | — | 雙人 CDG,以單一勝利點軌與 DEFCON 判定,唔需要分項計分表 |
| 1098 | Botanik | c | done | [link](https://bghub.org/r/botanik.pdf) | 同色三格組合每塊 1 分 + 有效花每朵 1 分 |
| 1099 | Cockroach Poker | - | skip | — | 唬人卡牌遊戲,以儲齊四張同款即敗定勝負,無累加計分 |
| 1100 | Coffee Traders | c | done | [link](https://bghub.org/r/coffee-traders.pdf) | 咖啡吧交貨+欄位 4/2、里程碑、合作社 16/8/4、阿拉比卡軌 |
| 1101 | San Marco | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1102 | Pictomania (Second Edition) | c | done | [link](https://bghub.org/r/pictomania-second-edition.pdf) | 五回合累計 |
| 1103 | Star Trek: Fleet Captains | - | skip | — | 劇本制對戰遊戲,以完成任務定勝負,無累加計分 |
| 1104 | Formula Dé | - | skip | — | 競速遊戲,以最快到終點定勝負,無累加計分 |
| 1105 | Jaws | - | skip | — | 一對多不對稱遊戲,以陣營目標定勝負,無累加計分 |
| 1106 | Sabika | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1107 | Akrotiri | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1108 | Rock Hard: 1977 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1109 | Yedo | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1110 | Pictomania | c | done | [link](https://bghub.org/r/pictomania.pdf) | 五回合累計 |
| 1111 | Skulls of Sedlec | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1112 | Cross Clues | - | skip | — | 合作制猜詞遊戲,無玩家累加計分 |
| 1113 | DC Deck-Building Game | b | done | — | 牌庫所有卡上嘅 VP 總和 |
| 1114 | Tragedy Looper | - | skip | — | 一對多推理遊戲,以陣營目標定勝負,無累加計分 |
| 1115 | Union Pacific | b | done | — | 計分回合持股名次累計 |
| 1116 | Kingsburg (Second Edition) | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1117 | Lanterns: The Harvest Festival | b | done | — | 奉獻磚 + 燈籠卡套組 + 恩惠標記 |
| 1118 | Spyfall | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1119 | Yedo: Deluxe Master Set | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1120 | Rajas of the Ganges: The Dice Charmers | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1121 | Atiwa | c | done | [link](https://bghub.org/r/atiwa.pdf) | 黃金 1/卡牌/供應板/受訓家庭 1/果蝠超 10 隻/缺糧扣分 |
| 1122 | Faiyum | c | done | [link](https://bghub.org/r/faiyum.pdf) | 單一聲望軌,冇分項終局計分 |
| 1123 | The Mind | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1124 | Catacombs (Third Edition) | - | skip | — | 彈射對戰遊戲,以擊倒對手定勝負,無累加計分 |
| 1125 | Dungeons & Dragons: Castle Ravenloft Board Game | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1126 | Call to Adventure | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1127 | The Palaces of Carrara | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1128 | Come Sail Away! | c | done | [link](https://bghub.org/r/come-sail-away.pdf) | 房間磚/乘客 1/獎勵標記 3/行李軌/不滿乘客 -1 |
| 1129 | Cosmic Encounter: 42nd Anniversary Edition | - | skip | — | 以最先取得五個外星殖民地定勝負,無累加計分 |
| 1130 | Genoa | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1131 | Pictures | c | done | [link](https://bghub.org/r/pictures.pdf) | 五回合累計 |
| 1132 | Zooloretto | b | done | — | 獸欄 + 販賣亭 − 倉庫 |
| 1133 | 5-Minute Dungeon | - | skip | — | 合作制即時遊戲,無玩家累加計分 |
| 1134 | The Anarchy | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1135 | Kingdomino Origins | c | done | [link](https://bghub.org/r/kingdominoorigins.pdf) | 舒適度基礎分 + 三種模式各自嘅獎勵 + 兩個選用獎勵 |
| 1136 | Adrenaline | b | done | — | 傷害軌 + 擊殺軌 |
| 1137 | Tajemnicze Domostwo | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 1138 | Tidal Blades: Heroes of the Reef | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1139 | Marvel Dice Masters: Avengers vs. X-Men | - | skip | — | 集換式骰子對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1140 | Point City | c | done | [link](https://bghub.org/r/pointcity.pdf) | 建築卡分數 + 公民標記 |
| 1141 | Small World of Warcraft | b | done | — | 每回合收勝利硬幣,比總額 |
| 1142 | Rolling Realms | c | pending | — | roll & write,待網查 rulebook |
| 1143 | Lowlands | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1144 | Santa Monica | c | done | [link](https://bghub.org/r/santamonica.pdf) | 單價印喺磚同卡面(圖),文字抽唔到 → 只寫類別,全部 number |
| 1145 | Meeple Circus | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1146 | Concept | c | done | [link](https://bghub.org/r/concept.pdf) | 雙倍代幣 2 分、單倍代幣 1 分 |
| 1147 | Sentinels of the Multiverse: Definitive Edition | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1148 | Orchard: 9 card solitaire game | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1149 | Bridge | - | skip | — | 橋牌計分分 rubber/duplicate 等多種制度,難以單一計分表覆蓋 |
| 1150 | That's Not a Hat | c | pending | — | 競爭型,待網查 rulebook 確認計分 |
| 1151 | The Lord of the Rings: The Two Towers – Trick-Taking Game | - | skip | — | 合作制吃磴遊戲,無玩家累加計分 |
| 1152 | Era: Medieval Age | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1153 | Tinners' Trail | c | done | [link](https://bghub.org/r/tinners-trail.pdf) | rulebook 明文:唯一得分係投資展示板方塊,錢/礦場唔計分 |
| 1154 | Signorie | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1155 | Kitchen Rush | - | skip | — | 合作制即時遊戲,無玩家累加計分 |
| 1156 | Snow Tails | - | skip | — | 競速遊戲,以最快到終點定勝負,無累加計分 |
| 1157 | Attika | - | skip | — | 以連接兩座神廟或起晒建築定勝負,無累加計分 |
| 1158 | Napoleon's Triumph: The Battle of Austerlitz, 2 December 1805 | - | skip | — | 劇本制戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1159 | Maharaja: The Game of Palace Building in India | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1160 | The Fox Experiment | c | done | [link](https://bghub.org/r/the-fox-experiment.pdf) | rulebook 明文:分數標記 1 分、科學卡 1 分、特徵+親和每 2 個 1 分 |
| 1161 | Conflict of Heroes: Awakening the Bear! – Russia 1941-42 | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1162 | Hey, That's My Fish! | b | done | — | 收集到嘅魚數總和 |
| 1163 | The Druids of Edora | c | done | [link](https://bghub.org/r/the-druids-of-edora.pdf) | rulebook FINAL SCORING 五步全部明文(鐮刀 0/5/10/15/20、石板 10、護身符 10+20、神殿乘 0-4) |
| 1164 | The Castles of Burgundy: The Card Game | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1165 | Thunder Alley | c | pending | — | 競速但有車隊積分,待網查 rulebook |
| 1166 | Fabled Fruit | - | skip | — | 以最先儲齊指定水果卡定勝負,無累加計分 |
| 1167 | Dungeons & Dragons: Wrath of Ashardalon Board Game | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1168 | Ticket to Ride: London | b | done | — | 路線 + 行政區 + 車票 ± |
| 1169 | Sweet Lands | c | done | [link](https://bghub.org/r/sweet-lands.pdf) | PDF 字型偏移一格,文字解得出項目類別但數字全部走樣,故所有欄用 number,一個單價都冇寫 |
| 1170 | Stonespine Architects | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1171 | Witchcraft! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1172 | Canopy | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1173 | Tiny Epic Quest | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1174 | CuBirds | - | skip | — | 以儲齊七種或兩套三隻雀定勝負,無累加計分 |
| 1175 | Innovation Ultimate | - | skip | — | 以達成成就數定勝負,無累加計分 |
| 1176 | Virgin Queen | - | skip | — | 多陣營 CDG 戰棋,以陣營勝利條件定勝負,無統一累加計分 |
| 1177 | Dracula vs Van Helsing | - | skip | — | 雙人不對稱對戰,以達成陣營目標定勝負,無累加計分 |
| 1178 | Quarto | - | skip | — | 抽象對弈,以連成四子定勝負,無累加計分 |
| 1179 | The Others | - | skip | — | 一對多對戰遊戲,以陣營目標定勝負,無累加計分 |
| 1180 | The Grimm Forest | - | skip | — | 以最先起好三間屋定勝負,無累加計分 |
| 1181 | Manila | b | done | — | 金錢 + 股份 |
| 1182 | Web of Power | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1183 | Gold West | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1184 | Resist! | - | skip | — | 單人/合作制遊戲,無玩家累加計分 |
| 1185 | Homesteaders | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1186 | Rivals for Catan | - | skip | — | 雙人遊戲,以最先儲夠指定勝利點定勝負,無終局分項計分 |
| 1187 | Louis XIV | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1188 | Dorfromantik: Sakura | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1189 | Linko | c | done | [link](https://bghub.org/r/linko.pdf) | rulebook 明文:疊放卡每張 +1、手上剩牌每張 -1 |
| 1190 | The Hobbit: There and Back Again | c | pending | — | 未確定係咪合作制,待網查 rulebook |
| 1191 | Wasteland Express Delivery Service | c | pending | — | 競爭型,待網查 rulebook 確認勝負判定 |
| 1192 | Summoner Wars: Alliances Master Set | - | skip | — | 雙人對戰,以擊倒對手召喚師定勝負,無累加計分 |
| 1193 | Deep Regrets | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1194 | Container: 10th Anniversary Jumbo Edition! | c | done | [link](https://bghub.org/r/container.pdf) | 同《貨櫃》本體同一套終局計分 |
| 1195 | Little Town | b | done | — | 建築 + 目標卡 + 金幣 |
| 1196 | Riverboat | c | done | [link](https://bghub.org/r/riverboat.pdf) | 軌上分 + 港口計分 + 新奧爾良探員 20/10/5 |
| 1197 | Comic Hunters | c | done | [link](https://bghub.org/r/comic-hunters.pdf) | 收藏規模對照表印喺圖,文字抽唔到 → 只寫類別,全部 number |
| 1198 | World of Warcraft: Wrath of the Lich King | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1199 | Brew Crafters | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1200 | Cat Lady | b | done | — | 貓/玩具/衣裝/貓草 − 走失貓 |
| 1201 | Orloj: The Prague Astronomical Clock | c | done | [link](https://bghub.org/r/orlojthepragueastronomicalclock.pdf) | rulebook 12. ENDGAME SCORING 明文:黃金 1 分、崩壞齒輪 -1 分、共同目標 8/6/4 |
| 1202 | Septima | c | done | [link](https://bghub.org/r/septima.pdf) | 智慧為單位:軌上分/占卜目標/病人軌/幸運符 2/藥水 1/材料每兩件 1 |
| 1203 | Tempel des Schreckens | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1204 | Ecos: First Continent | b | done | — | 放寬尺度後直接生成 |
| 1205 | Britannia | b | done | — | 放寬尺度後直接生成 |
| 1206 | In the Footsteps of Darwin | c | done | [link](https://bghub.org/r/inthefootstepsofdarwin.pdf) | rulebook 明文五類:著作 5 分、達爾文標記 2 分、理論每隻 1 分、圖表 = 指南針×圖示 |
| 1207 | Tribes of the Wind | c | done | [link](https://bghub.org/r/tribesofthewind.pdf) | 村莊 3、神殿 3-4 座 3/7、污染對照表 12-7-3-0、板塊數表未讀到用 number |
| 1208 | Here I Stand: 500th Anniversary Edition | - | skip | — | 多陣營 CDG 戰棋,每個勢力勝利條件唔同,無統一累加計分 |
| 1209 | Hawaii | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1210 | Parks (Second Edition) | c | done | [link](https://bghub.org/r/parks-second-edition.pdf) | 公園/相片/熱情卡/秋季獎勵/首家標記 |
| 1211 | ICECOOL | - | skip | — | 彈射遊戲,以最先儲齊指定魚數定勝負,無累加計分 |
| 1212 | Herbaceous | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1213 | Habitats | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1214 | Flick 'em Up! | - | skip | — | 彈射劇本制遊戲,以完成任務定勝負,無累加計分 |
| 1215 | Dice Town | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1216 | Chronicles of Avel | - | skip | — | 合作制冒險遊戲,無玩家累加計分 |
| 1217 | Smash Up: Science Fiction Double Feature | b | done | — | 放寬尺度後直接生成 |
| 1218 | Oriflamme | b | done | — | 放寬尺度後直接生成 |
| 1219 | Fishing | c | done | [link](https://bghub.org/r/fishing.pdf) | 八回合累計 |
| 1220 | Legacy: The Testament of Duke de Crecy | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1221 | Core Worlds | b | done | — | 放寬尺度後直接生成 |
| 1222 | Unlock!: Game Adventures | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1223 | Winner's Circle | b | done | — | 放寬尺度後直接生成 |
| 1224 | Uprising: Curse of the Last Emperor | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1225 | Archaeology: The New Expedition | b | done | — | 放寬尺度後直接生成 |
| 1226 | Agemonia | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1227 | Everdell Duo | c | no-source | [link](https://bghub.org/r/everdell-duo.pdf) | bghub 呢個 slug 嘅 PDF 內容其實係 Evergreen,唔係 Everdell Duo —— 鏡像配錯遊戲 |
| 1228 | The Castles of Tuscany | c | done | [link](https://bghub.org/r/thecastlesoftuscany.pdf) | 紅軌分 + 未用物件每個 1 分 + 每 3 張手牌 1 分 |
| 1229 | Ascension: Storm of Souls | b | done | — | 放寬尺度後直接生成 |
| 1230 | Two Rooms and a Boom | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1231 | Set a Watch | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1232 | Calimala | c | done | [link](https://bghub.org/r/calimala.pdf) | rulebook 明文終局計分卡 5/3/1;15 次計分階段嘅磚值印喺磚故合併做 number |
| 1233 | La Famiglia: The Great Mafia War | c | done | [link](https://bghub.org/r/la-famiglia-the-great-mafia-war.pdf) | rulebook 明文:個人 5 個或成隊 6 個曼達門托即勝,四回合完比控制數 |
| 1234 | World's Fair 1893 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1235 | Paper Tales | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1236 | Age of Industry | b | done | — | 放寬尺度後直接生成 |
| 1237 | Fallout Shelter: The Board Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1238 | Haggis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1239 | Heroscape Master Set: Swarm of the Marro | - | skip | — | 劇本制微縮對戰,以完成任務定勝負,無累加計分 |
| 1240 | Wildlands | - | skip | — | 以最先儲夠指定勝利點嘅小隊對戰,無終局分項計分 |
| 1241 | Cottage Garden | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1242 | Flick of Faith | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1243 | Legendary: A Marvel Deck Building Game – Villains | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1244 | Irish Gauge | b | done | — | 放寬尺度後直接生成 |
| 1245 | Explorers of the North Sea | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1246 | Coffee Rush | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1247 | Jump Drive | b | done | — | 放寬尺度後直接生成 |
| 1248 | The Search for Lost Species | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1249 | Chronicles of Crime: 1900 | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 1250 | The Speicherstadt | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1251 | The Lord of the Rings | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1252 | Nokosu Dice | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1253 | Reavers of Midgard | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1254 | Summoner Wars: Phoenix Elves vs Tundra Orcs | - | skip | — | 雙人對戰,以擊倒對手召喚師定勝負,無累加計分 |
| 1255 | Black Fleet | - | skip | — | 以最先買晒升級定勝負,無累加計分 |
| 1256 | Tsuro | - | skip | — | 以最後仍留喺板上定勝負,無累加計分 |
| 1257 | Tawantinsuyu: The Inca Empire | c | done | [link](https://bghub.org/r/tawantinsuyutheincaempire.pdf) | rulebook 明文:掛毯 0/1/3/6/10/15/21、建築 2 分、神祇/軍隊/工人/黃金各 1 分 |
| 1258 | Men at Work | - | skip | — | 疊高遊戲,以淘汰對手定勝負,無累加計分 |
| 1259 | Mr. Jack Pocket | - | skip | — | 雙人推理遊戲,以捉到/逃脫定勝負,無累加計分 |
| 1260 | Fauna | b | done | — | 放寬尺度後直接生成 |
| 1261 | A Study in Emerald | - | skip | — | 隱藏陣營遊戲,以陣營條件同淘汰判定,無統一累加計分 |
| 1262 | Alma Mater | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1263 | Empires of the Void II | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1264 | Zombie Teenz Evolution | - | skip | — | 合作制兒童遊戲,無玩家累加計分 |
| 1265 | Café | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1266 | Conflict of Heroes: Awakening the Bear! – Operation Barbarossa 1941 (Second Edition) | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1267 | Wiz-War (Eighth Edition) | - | skip | — | 以搶奪寶物或擊倒對手定勝負,無累加計分 |
| 1268 | Deep Rock Galactic: The Board Game | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1269 | Majesty: For the Realm | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1270 | Floriferous | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1271 | Marvel: Remix | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1272 | History of the World | b | done | — | 放寬尺度後直接生成 |
| 1273 | Super Fantasy Brawl | - | skip | — | 以最先儲夠指定分數嘅小隊對戰,無終局分項計分 |
| 1274 | 스플렌더: Pokémon (Splendor: Pokémon) | b | done | — | 放寬尺度後直接生成 |
| 1275 | La Città | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1276 | Ticket to Ride: New York | b | done | — | 放寬尺度後直接生成 |
| 1277 | Sheriff of Nottingham: 2nd Edition | b | done | — | 放寬尺度後直接生成 |
| 1278 | Insider | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1279 | Ghost Fightin' Treasure Hunters | - | skip | — | 合作制兒童遊戲,無玩家累加計分 |
| 1280 | The Prodigals Club | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1281 | Time of Crisis: The Roman Empire in Turmoil, 235-284 AD | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1282 | Explorers of Navoria | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1283 | Discoveries: The Journals of Lewis & Clark | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1284 | Werewords Deluxe Edition | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1285 | Warhammer Underworlds: Shadespire | b | done | — | 放寬尺度後直接生成 |
| 1286 | Strike | - | skip | — | 骰子淘汰遊戲,以最後剩骰定勝負,無累加計分 |
| 1287 | Star Trek: Frontiers | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1288 | Betrayal at House on the Hill: 3rd Edition | - | skip | — | 劇本制背叛者遊戲,以陣營目標定勝負,無累加計分 |
| 1289 | Antike | - | skip | — | 以最先儲齊指定數量勝利點定勝負,無終局分項計分 |
| 1290 | Too Many Bones: Unbreakable | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1291 | Northgard: Uncharted Lands | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1292 | Legendary Encounters: A Predator Deck Building Game | - | skip | — | 合作制牌庫構築遊戲,無玩家累加計分 |
| 1293 | Pixies | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1294 | Mottainai | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1295 | Conspiracy: Abyss Universe | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1296 | The Quest for El Dorado: The Golden Temples | - | skip | — | 競速遊戲,以最快到終點定勝負,無累加計分 |
| 1297 | Star Wars: The Deckbuilding Game – Clone Wars Edition | - | skip | — | 雙人對戰牌庫構築,以摧毀對手基地定勝負,無累加計分 |
| 1298 | Aeon's End: Outcasts | - | skip | — | 合作制牌庫構築遊戲,無玩家累加計分 |
| 1299 | Firenze | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1300 | Metropolys | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1301 | Valley of the Kings | b | done | — | 放寬尺度後直接生成 |
| 1302 | Mysterium Park | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 1303 | Clever 4Ever | b | done | — | 放寬尺度後直接生成 |
| 1304 | Bonsai | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1305 | Botswana | b | done | — | 放寬尺度後直接生成 |
| 1306 | Foundations of Metropolis | c | done | [link](https://bghub.org/r/foundations-of-metropolis.pdf) | rulebook 明文:空地標記 1 聲望、第三年商業建築金幣轉聲望 |
| 1307 | Runebound: Second Edition | - | skip | — | 冒險遊戲,以最先擊敗巨龍定勝負,無累加計分 |
| 1308 | NMBR 9 | b | done | — | 放寬尺度後直接生成 |
| 1309 | Warhammer 40,000: Conquest | - | skip | — | 雙人 LCG,以贏得指揮爭奪定勝負,無累加計分 |
| 1310 | Bad Company | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1311 | Ahoy | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1312 | Phantom Ink | - | skip | — | 隊制猜詞遊戲,無累加計分 |
| 1313 | Mint Works | b | done | — | 放寬尺度後直接生成 |
| 1314 | Star Wars: Legion | - | skip | — | 微縮模型對戰遊戲,以劇本目標定勝負,無累加計分 |
| 1315 | Nations: The Dice Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1316 | Fields of Green | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1317 | Merlin | c | done | [link](https://bghub.org/r/merlin.pdf) | rulebook 明文:叛徒 -3、王者之劍 +3、爪牙 1 分、蘋果 1 分、梅林之杖 2 分 |
| 1318 | Cahoots | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1319 | The Reckoners | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1320 | Smash Up | b | done | — | 放寬尺度後直接生成 |
| 1321 | Automobiles | - | skip | — | 競速遊戲,以最快完成圈數定勝負,無累加計分 |
| 1322 | boop. | - | skip | — | 抽象對弈,以排成三隻大貓定勝負,無累加計分 |
| 1323 | FlipToons | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1324 | Star Wars: The Queen's Gambit | - | skip | — | 雙人不對稱對戰,以達成陣營目標定勝負,無累加計分 |
| 1325 | Summoner Wars: Guild Dwarves vs Cave Goblins | - | skip | — | 雙人對戰,以擊倒對手召喚師定勝負,無累加計分 |
| 1326 | Via Nebula | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1327 | Fortune and Glory: The Cliffhanger Game | - | skip | — | 冒險遊戲,以最先儲齊指定條件定勝負,無累加計分 |
| 1328 | The Initiative | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1329 | Obscurio | - | skip | — | 合作制含內鬼遊戲,無玩家累加計分 |
| 1330 | Ascension: Return of the Fallen | b | done | — | 放寬尺度後直接生成 |
| 1331 | Arborea | c | done | [link](https://bghub.org/r/arborea.pdf) | 用多人 ENDGAME SCORING(line 805)唔係 Feronia 單人段;生物 RP、季節上限 8×6 全部明文 |
| 1332 | Unmatched: Jurassic Park – Dr. Sattler vs. T. Rex | - | skip | — | 雙人對戰,以擊倒對手英雄定勝負,無累加計分 |
| 1333 | Dream Home | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1334 | Star Wars: Jabba's Palace – A Love Letter Game | - | skip | — | 以最先儲夠指定標記定勝負,無累加計分 |
| 1335 | Quarriors! | b | done | — | 放寬尺度後直接生成 |
| 1336 | Islebound | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1337 | The Game | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1338 | The Isofarian Guard | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1339 | Ironwood | c | skip | [link](https://bghub.org/r/ironwood.pdf) | rulebook 明文:雙方不對稱勝利條件(例如起夠 3 座即勝),冇累加計分 |
| 1340 | Cockroach Poker Royal | - | skip | — | 唬人卡牌遊戲,以儲齊四張同款即敗定勝負,無累加計分 |
| 1341 | Genotype: A Mendelian Genetics Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1342 | 20 Strong | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1343 | Rallyman: GT | - | skip | — | 競速遊戲,以最快到終點定勝負,無累加計分 |
| 1344 | Encyclopedia | c | done | [link](https://bghub.org/r/encyclopedia.pdf) | 研究方塊/大洲收藏/專家卡/皇家印璽 4/每 2 金幣 1/遠征標記 1 |
| 1345 | Tales & Games: The Hare & the Tortoise | b | done | — | 放寬尺度後直接生成 |
| 1346 | Coconuts | - | skip | — | 彈射遊戲,以最先疊齊杯定勝負,無累加計分 |
| 1347 | Fallout | - | skip | — | 以陣營議程影響力定勝負,無統一累加計分 |
| 1348 | Hardback | b | done | — | 放寬尺度後直接生成 |
| 1349 | Loony Quest | b | done | — | 放寬尺度後直接生成 |
| 1350 | Encore! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1351 | Merchant of Venus (Second Edition) | b | done | — | 放寬尺度後直接生成 |
| 1352 | When I Dream | - | skip | — | 合作/隊制猜詞遊戲,無累加計分 |
| 1353 | Axis & Allies Anniversary Edition | - | skip | — | 戰棋,以佔領勝利城市定勝負,無累加計分 |
| 1354 | ROVE: Results-Oriented Versatile Explorer | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1355 | Zendo | - | skip | — | 歸納推理遊戲,以最先猜中規則定勝負,無累加計分 |
| 1356 | Shadow Hunters | - | skip | — | 隱藏身分遊戲,以陣營條件定勝負,無累加計分 |
| 1357 | Dice Miner | c | done | [link](https://bghub.org/r/dice-miner.pdf) | 規則書冇列終局分項,用三回合累計單欄 |
| 1358 | Terror in Meeple City | c | done | [link](https://bghub.org/r/terror-in-meeple-city.pdf) | 角色/米寶/樓層/牙齒;隊制取較低分 |
| 1359 | Unlock!: Mythic Adventures | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1360 | Ikusa | - | skip | — | 戰棋,以佔領領土定勝負,無累加計分 |
| 1361 | Santorini: Pantheon Edition | - | skip | — | 抽象對弈,以爬上第三層定勝負,無累加計分 |
| 1362 | Railroad Revolution | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1363 | Space Hulk (Fourth Edition) | - | skip | — | 劇本制對戰遊戲,以完成任務定勝負,無累加計分 |
| 1364 | Smash Up: Pretty Pretty Smash Up | b | done | — | 放寬尺度後直接生成 |
| 1365 | The Big Book of Madness | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1366 | Dead Men Tell No Tales | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1367 | 6 nimmt! 25 Jahre | b | done | — | 放寬尺度後直接生成 |
| 1368 | Mr. Jack in New York | - | skip | — | 雙人推理遊戲,以捉到/逃脫定勝負,無累加計分 |
| 1369 | Battle Line: Medieval | - | skip | — | 雙人對戰,以搶奪旗幟定勝負,無累加計分 |
| 1370 | A Wild Venture | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1371 | Mini Rogue | - | skip | — | 單人/合作制遊戲,無玩家累加計分 |
| 1372 | A Distant Plain | - | skip | — | COIN 系列多陣營遊戲,以陣營勝利條件定勝負,無統一累加計分 |
| 1373 | Décorum | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1374 | Vagrantsong | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1375 | Unmatched: Redemption Row | - | skip | — | 雙人對戰,以擊倒對手英雄定勝負,無累加計分 |
| 1376 | Falling Sky: The Gallic Revolt Against Caesar | - | skip | — | COIN 系列多陣營遊戲,以陣營勝利條件定勝負,無統一累加計分 |
| 1377 | Animal Upon Animal | - | skip | — | 疊高遊戲,以最先放晒動物定勝負,無累加計分 |
| 1378 | Catan Card Game | - | skip | — | 雙人遊戲,以最先儲夠指定勝利點定勝負,無終局分項計分 |
| 1379 | 1862: Railway Mania in the Eastern Counties | b | done | — | 放寬尺度後直接生成 |
| 1380 | Zombicide Season 3: Rue Morgue | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1381 | Emberleaf | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1382 | Super Mega Lucky Box | b | done | — | 放寬尺度後直接生成 |
| 1383 | Rex: Final Days of an Empire | - | skip | — | 多陣營遊戲,以佔領據點定勝負,無累加計分 |
| 1384 | Mycelia | - | skip | — | 以最先放晒露珠定勝負,無累加計分 |
| 1385 | Marvel Dice Masters: Uncanny X-Men | - | skip | — | 集換式骰子對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1386 | Food Chain Island | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1387 | Polis: Fight for the Hegemony | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1388 | Seas of Strife | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1389 | System Gateway (fan expansion for Android: Netrunner) | - | skip | — | 愛好者擴充,非獨立遊戲,唔適用計分表 |
| 1390 | Loopin' Louie | - | skip | — | 敏捷遊戲,以最後剩雞定勝負,無累加計分 |
| 1391 | Ambush! | - | skip | — | 單人戰棋,無玩家累加計分 |
| 1392 | Tide of Iron | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1393 | Sankoré: The Pride of Mansa Musa | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1394 | CO₂ | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1395 | Smash Up: Monster Smash | b | done | — | 放寬尺度後直接生成 |
| 1396 | Stick 'Em | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1397 | Machi Koro | - | skip | — | 以最先建成所有地標定勝負,無累加計分 |
| 1398 | China | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1399 | Similo | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1400 | Middle Ages | c | done | [link](https://bghub.org/r/middleages.pdf) | rulebook 明文:錢最多者勝,冇地塊嘅領地每塊 -10 金幣 |
| 1401 | Eight-Minute Empire: Legends | b | done | — | 放寬尺度後直接生成 |
| 1402 | Roll Camera!: The Filmmaking Board Game | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1403 | Three Kingdoms Redux | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1404 | Vinci | b | done | — | 放寬尺度後直接生成 |
| 1405 | Horseless Carriage | c | done | [link](https://bghub.org/r/horseless-carriage.pdf) | rulebook 明文:財富最高者勝,冇獨立 VP 系統 |
| 1406 | Maglev Metro | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1407 | Tiny Epic Zombies | - | skip | — | 合作/對抗模式並存,以完成任務定勝負,無統一累加計分 |
| 1408 | Sushi Roll | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1409 | For the People | - | skip | — | 雙人 CDG 戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1410 | Planted: A Game of Nature & Nurture | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1411 | Unmatched: Hell's Kitchen | - | skip | — | 雙人對戰,以擊倒對手英雄定勝負,無累加計分 |
| 1412 | Julius Caesar: Caesar, Pompey, and the Roman Civil War | - | skip | — | 雙人 CDG 戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1413 | Domaine | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1414 | Automania | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1415 | Poker | - | skip | — | 賭博遊戲,以籌碼多寡定勝負,規則變體眾多,唔適用單一計分表 |
| 1416 | La Isla | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1417 | Lockup: A Roll Player Tale | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1418 | Batman: Gotham City Chronicles | - | skip | — | 一對多劇本制遊戲,以完成任務定勝負,無累加計分 |
| 1419 | Forum Trajanum | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1420 | Ponzi Scheme | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1421 | Andean Abyss | - | skip | — | COIN 系列多陣營遊戲,以陣營勝利條件定勝負,無統一累加計分 |
| 1422 | A Gest of Robin Hood | - | skip | — | 雙人不對稱遊戲,以陣營目標定勝負,無累加計分 |
| 1423 | Karak | b | done | — | 放寬尺度後直接生成 |
| 1424 | Castle Panic | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1425 | The City of Kings | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1426 | Ancient Knowledge | c | done | [link](https://bghub.org/r/ancientknowledge.pdf) | VP 圖示喺 PDF 變亂碼,只寫類別 |
| 1427 | Spirits of the Wild | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1428 | Netrunner | - | skip | — | 雙人不對稱對戰,以搶奪議程定勝負,無累加計分 |
| 1429 | Claim | - | skip | — | 雙人吃磴遊戲,以取得多數陣營定勝負,無累加計分 |
| 1430 | Paris | c | done | [link](https://bghub.org/r/paris.pdf) | 軌上分 + 行政區名次獎勵 + 27 號磚法郎 |
| 1431 | Trails | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1432 | Battle Cry | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1433 | Circle the Wagons | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1434 | Things in Rings | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 1435 | Riftforce | - | skip | — | 雙人對戰,以最先儲夠十二分定勝負,無終局分項計分 |
| 1436 | Kinfire Delve: Scorn's Stockade | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1437 | Inventors of the South Tigris | c | done | [link](https://bghub.org/r/inventorsofthesouthtigris.pdf) | 類別由單人章節列出(明言同多人一樣),但嗰啲數字係假想對手簡化值,故唔寫單價 |
| 1438 | Wendake | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1439 | Rolling Heights | c | no-source | [link](https://bghub.org/r/rollingheights.pdf) | PDF 計分圖示全部係缺字符號,分唔出係邊種建築/meeple |
| 1440 | Europa Universalis: The Price of Power | - | skip | — | 多陣營戰棋,以陣營勝利條件定勝負,無統一累加計分 |
| 1441 | Disney Lorcana | - | skip | — | 集換式卡牌對戰,以最先儲夠傳說值定勝負,無累加計分 |
| 1442 | Wilderness War | - | skip | — | 雙人 CDG 戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1443 | Deep Space D-6 | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1444 | Odin's Ravens (Second Edition) | - | skip | — | 雙人競速遊戲,以最快到終點定勝負,無累加計分 |
| 1445 | Rise of Augustus | b | done | — | 放寬尺度後直接生成 |
| 1446 | Maximum Apocalypse | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1447 | Chimera Station | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1448 | Kinfire Chronicles: Night's Fall | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1449 | Power Grid: Factory Manager | b | done | — | 放寬尺度後直接生成 |
| 1450 | Legacy of Dragonholt | - | skip | — | 敘事制 RPG 式遊戲,無玩家累加計分 |
| 1451 | Street Masters | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1452 | Escape from the Aliens in Outer Space | - | skip | — | 隱藏移動遊戲,以逃脫或捕獲定勝負,無累加計分 |
| 1453 | Agropolis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1454 | Brew | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1455 | Back to the Future: Back in Time | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1456 | Diamonds | b | done | — | 放寬尺度後直接生成 |
| 1457 | Tower Up | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1458 | Raising Robots | c | done | [link](https://bghub.org/r/raising-robots.pdf) | 機械人卡/職業卡/庫存/零碎資源每件 1/3 |
| 1459 | Oltréé | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1460 | Risk: Star Wars Edition | - | skip | — | 不對稱陣營遊戲,以達成陣營目標定勝負,無累加計分 |
| 1461 | Hansa | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1462 | Thunderstone: Dragonspire | b | done | — | 放寬尺度後直接生成 |
| 1463 | MicroMacro: Crime City – All In | - | skip | — | 合作制找圖解謎遊戲,無玩家累加計分 |
| 1464 | Townsfolk Tussle | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1465 | Yggdrasil | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1466 | Euthia: Torment of Resurrection | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1467 | That Time You Killed Me | - | skip | — | 雙人抽象對弈,以消滅對手分身定勝負,無累加計分 |
| 1468 | Massive Darkness | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1469 | Betrayal at Baldur's Gate | - | skip | — | 劇本制背叛者遊戲,以陣營目標定勝負,無累加計分 |
| 1470 | Blueprints | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1471 | Lacuna | - | skip | — | 雙人遊戲,以取得多數花朵定勝負,無累加計分 |
| 1472 | Honshū | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1473 | Stronghold | - | skip | — | 雙人不對稱攻城遊戲,以守住/攻陷定勝負,無累加計分 |
| 1474 | Dead Man's Draw | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1475 | Blood Bowl: Second Season Edition | - | skip | — | 球賽對戰遊戲,以入球數定勝負,無累加計分 |
| 1476 | Gutenberg | c | done | [link](https://bghub.org/r/gutenberg.pdf) | 專長 VI/V/IV 6-3-1、贊助卡 8、每 3 基爾德 1(全部明文) |
| 1477 | Wild Space | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1478 | Tussie Mussie | c | done | [link](https://bghub.org/r/tussie-mussie.pdf) | rulebook 明文:每個心心 1 分,其餘由卡面條件決定故合併做一欄 |
| 1479 | Sons of Anarchy: Men of Mayhem | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1480 | Witness | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 1481 | Colossal Arena | b | done | — | 放寬尺度後直接生成 |
| 1482 | Blokus Duo | - | skip | — | 抽象對弈,以放得最多方塊定勝負,無累加計分 |
| 1483 | Cleopatra and the Society of Architects | c | done | [link](https://bghub.org/r/cleopatra-and-the-society-of-architects.pdf) | rulebook 明文:尼羅河商人每張 +3 塔蘭特;腐敗護符最多者出局(唔係扣分)故唔做欄,寫入 tieBreaker |
| 1484 | Claustrophobia 1643 | - | skip | — | 一對多劇本制遊戲,以陣營目標定勝負,無累加計分 |
| 1485 | Vanuatu | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1486 | SHŌBU | - | skip | — | 抽象對弈,以推走對手四粒棋定勝負,無累加計分 |
| 1487 | Legend of the Five Rings: The Card Game | - | skip | — | 雙人 LCG,以達成勝利條件定勝負,無累加計分 |
| 1488 | Pavlov's House | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1489 | Mists over Carcassonne | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1490 | Kinfire Delve: Callous' Lab | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1491 | Ostia | c | done | [link](https://bghub.org/r/ostia.pdf) | 據 rulebook 明文生成 |
| 1492 | Fairy Tale | b | done | — | 放寬尺度後直接生成 |
| 1493 | Carnival of Monsters | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1494 | Primordial Soup | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1495 | Clank! Legacy 2: Acquisitions Incorporated – Darkest Magic | - | skip | — | 傳承制戰役遊戲,無統一累加計分 |
| 1496 | Witch's Brew | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1497 | EXIT: The Game – The Sinister Mansion | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1498 | It's a Wonderful Kingdom | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1499 | Unlock!: Escape Adventures – Squeek & Sausage | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1500 | Flamecraft Duals | c | done | [link](https://bghub.org/r/flamecraft-duals.pdf) | 據 rulebook 明文生成 |
| 1501 | Perseverance: Castaway Chronicles – Episodes 1 & 2 | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1502 | Plague Inc.: The Board Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1503 | Whistle Stop | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1504 | Llamaland | c | done | [link](https://bghub.org/r/llamaland.pdf) | 據 rulebook 明文生成 |
| 1505 | Ghost Blitz | b | done | — | 放寬尺度後直接生成 |
| 1506 | Shadowrun: Crossfire | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1507 | Crisis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1508 | Warhammer Quest | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1509 | Mountain Goats | - | skip | — | 競速遊戲,以最快到山頂定勝負,無累加計分 |
| 1510 | Caylus Magna Carta | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1511 | The Fox in the Forest Duet | - | skip | — | 合作制吃磴遊戲,無玩家累加計分 |
| 1512 | EXIT: The Game – The Sunken Treasure | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1513 | BattleCON: War of Indines | - | skip | — | 雙人格鬥遊戲,以擊倒對手生命值定勝負,無累加計分 |
| 1514 | Challengers! Beach Cup | b | done | — | 放寬尺度後直接生成 |
| 1515 | Here to Slay | - | skip | — | 以最先斬三隻怪或湊齊隊伍定勝負,無累加計分 |
| 1516 | Boss Fighters QR | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1517 | Quartermaster General | - | skip | — | 隊制戰棋,以陣營勝利點定勝負,無統一累加計分 |
| 1518 | Battles of Westeros | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1519 | Steam Park | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1520 | Veiled Fate | - | skip | — | 隱藏身分遊戲,以陣營目標定勝負,無累加計分 |
| 1521 | 1812: The Invasion of Canada | - | skip | — | 隊制戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1522 | Formaggio | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1523 | GIPF | - | skip | — | 抽象對弈,以取得指定棋型定勝負,無累加計分 |
| 1524 | Kraftwagen | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1525 | 18Chesapeake | b | done | — | 放寬尺度後直接生成 |
| 1526 | The Magic Labyrinth | - | skip | — | 競速遊戲,以最先儲齊指定符號定勝負,無累加計分 |
| 1527 | Mythos Tales | - | skip | — | 合作制解謎遊戲,按問答評分,唔適用累加計分表 |
| 1528 | New York 1901 | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1529 | Royals | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1530 | Zombicide: Undead or Alive | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1531 | A Touch of Evil: The Supernatural Game | - | skip | — | 半合作獵殺遊戲,以擊敗大惡人定勝負,無累加計分 |
| 1532 | Paper Dungeons: A Dungeon Scrawler Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1533 | Unmatched: Slings and Arrows | - | skip | — | 雙人對戰,以擊倒對手英雄定勝負,無累加計分 |
| 1534 | On Tour | b | done | — | 放寬尺度後直接生成 |
| 1535 | Council of 4 | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1536 | Strasbourg | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1537 | Dice Throne: Santa v. Krampus | - | skip | — | 雙人對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1538 | Dragon Eclipse | c | skip | [link](https://bghub.org/r/dragon-eclipse.pdf) | 劇本/戰役制,勝負由劇本條件決定,冇玩家間累加計分 |
| 1539 | Kitchen Rush (Revised Edition) | - | skip | — | 合作制即時遊戲,無玩家累加計分 |
| 1540 | Star Wars: Unlock! | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1541 | Pathfinder Adventure Card Game: Skull & Shackles – Base Set | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1542 | Dungeon Fighter | - | skip | — | 合作制彈射遊戲,無玩家累加計分 |
| 1543 | Liberty or Death: The American Insurrection | - | skip | — | COIN 系列多陣營遊戲,以陣營勝利條件定勝負,無統一累加計分 |
| 1544 | Welcome to Everdell | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1545 | Kronologic: Paris 1920 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1546 | Elfenland | - | skip | — | 競速遊戲,以到訪最多城市定勝負,無終局分項計分 |
| 1547 | Air, Land, & Sea: Spies, Lies, & Supplies | - | skip | — | 雙人對戰,以最先儲夠指定勝利點定勝負,無終局分項計分 |
| 1548 | Arkadia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1549 | The Werewolves of Miller's Hollow | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1550 | Imhotep: The Duel | c | done | [link](https://bghub.org/r/imhotep-the-duel.pdf) | 神廟 1-4-9-16、金字塔 -6-0-4-10-15-30-45、墓室組 4、行動 1、港口米寶 1(全部明文) |
| 1551 | Copenhagen | b | done | — | 放寬尺度後直接生成 |
| 1552 | Rattus | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1553 | Welcome To...: Collector's Edition | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1554 | Dale of Merchants 2 | - | skip | — | 以最先儲齊一疊指定動物牌定勝負,無累加計分 |
| 1555 | Time's Up! Party | - | skip | — | 隊制猜詞遊戲,無累加計分 |
| 1556 | Nanty Narking | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1557 | burncycle | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1558 | Machina Arcana (Second/Third Edition) | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1559 | No Retreat! The Russian Front | - | skip | — | 雙人戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1560 | World Order | c | done | [link](https://bghub.org/r/worldorder.pdf) | 第 3/6 回合區域計分 + 陣營專屬能力 |
| 1561 | Coloma | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1562 | Qwinto | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1563 | Carcassonne: South Seas | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1564 | TransAmerica | - | skip | — | 競速遊戲,以最先接通所有城市定勝負,無終局分項計分 |
| 1565 | Timeline: Inventions | - | skip | — | 以最先放晒手牌定勝負,無累加計分 |
| 1566 | Saboteur | - | skip | — | 隱藏身分遊戲,以陣營達成條件定勝負,無累加計分 |
| 1567 | Medina | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1568 | Fief: France 1429 | - | skip | — | 多陣營戰棋,以陣營勝利條件定勝負,無統一累加計分 |
| 1569 | Escape the Dark Castle | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1570 | Medieval Academy | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1571 | Ubongo | b | done | — | 放寬尺度後直接生成 |
| 1572 | Sentient | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1573 | Carcassonne: Winter Edition | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1574 | Ticket to Ride: Germany | b | done | — | 放寬尺度後直接生成 |
| 1575 | Recall | c | done | [link](https://bghub.org/r/recall.pdf) | 六條路徑各一欄 + 專精獎勵;第六條被窗口截斷,用「其餘路徑卡」兜底 |
| 1576 | Covenant | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1577 | Vikings Gone Wild | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1578 | Watson & Holmes | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1579 | Dead Cells: The Rogue-Lite Board Game | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1580 | Unlock!: Exotic Adventures | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1581 | The Hunger | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1582 | Shallow Sea | c | done | [link](https://bghub.org/r/shallow-sea.pdf) | rulebook 明文:唔同款海洋生物磚 2 分、未完成魚每塊相鄰完成珊瑚 1 分、生態卡 2/3 分 |
| 1583 | BattleTech | - | skip | — | 微縮模型對戰遊戲,以擊毀對手機甲定勝負,無累加計分 |
| 1584 | Railroad Ink Challenge: Shining Yellow Edition | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1585 | Edge of Darkness | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1586 | Fleet | c | done | [link](https://bghub.org/r/fleet.pdf) | 牌照/船隻/魚箱每箱 1/帝王蟹獎勵 |
| 1587 | Sobek: 2 Players | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1588 | Tamashii: Chronicle of Ascend | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1589 | Agra | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1590 | Hamburgum | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1591 | Last Light | - | skip | — | 4X 遊戲,以最先儲夠指定勝利點定勝負,無終局分項計分 |
| 1592 | Santiago de Cuba | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1593 | Yukon Airways | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1594 | Princes of the Renaissance | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1595 | CloudAge | c | done | [link](https://bghub.org/r/cloudage.pdf) | rulebook 明文終局目標卡 2/5/7 同 4/9 分;剩餘資源唔值分 |
| 1596 | Dungeon Twister | - | skip | — | 雙人對戰,以最先儲夠五分定勝負,無終局分項計分 |
| 1597 | Bullet★ | - | skip | — | 單人/對戰生存遊戲,以捱過彈幕定勝負,無累加計分 |
| 1598 | Castell | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1599 | Axis & Allies: Europe 1940 | - | skip | — | 戰棋,以佔領勝利城市定勝負,無累加計分 |
| 1600 | Super-Skill Pinball: 4-Cade | b | done | — | 放寬尺度後直接生成 |
| 1601 | Manoeuvre | - | skip | — | 雙人戰棋,以佔領或殲滅定勝負,無累加計分 |
| 1602 | Folklore: The Affliction | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1603 | Cartagena | - | skip | — | 競速遊戲,以最快全員上船定勝負,無累加計分 |
| 1604 | Zhanguo: The First Empire | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1605 | 3 Ring Circus | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1606 | Starship Captains | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1607 | DroPolter | - | skip | — | 敏捷遊戲,以最快反應定勝負,無累加計分 |
| 1608 | One Deck Dungeon: Forest of Shadows | - | skip | — | 單人/合作制地城遊戲,無玩家累加計分 |
| 1609 | La Cosa Nostra | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1610 | Marvel Dice Throne: Scarlet Witch v. Thor v. Loki v. Spider-Man | - | skip | — | 雙人對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1611 | Paint the Roses | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 1612 | Trekking the World | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1613 | Hacienda | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1614 | TEN | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1615 | Fearsome Floors | - | skip | — | 競速遊戲,以最快逃出定勝負,無累加計分 |
| 1616 | Renature | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1617 | A Game of Thrones: The Card Game | - | skip | — | LCG 對戰,以最先儲夠權力標記定勝負,無終局分項計分 |
| 1618 | Fleet: The Dice Game (Second Edition) | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1619 | Viceroy | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1620 | Peloponnes | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1621 | Photograph | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1622 | Hostage Negotiator | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1623 | The Captain Is Dead | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1624 | Stroganov | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1625 | Vaalbara | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1626 | Mission: Red Planet | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1627 | Java | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1628 | Thunderbolt Apache Leader | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1629 | Trapwords | - | skip | — | 隊制猜詞遊戲,無累加計分 |
| 1630 | Duelosaur Island | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1631 | Pick-omino | b | done | — | 放寬尺度後直接生成 |
| 1632 | Ulm | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1633 | Astro Knights | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1634 | Guillotine | b | done | — | 放寬尺度後直接生成 |
| 1635 | Chronicles of Drunagor: Age of Darkness | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1636 | The Golden Ages | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1637 | Tainted Grail: Kings of Ruin | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1638 | New Angeles | - | skip | — | 半合作遊戲,以隱藏議程同共同存亡判定,無統一累加計分 |
| 1639 | Thunderbirds | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1640 | Level 7 [Omega Protocol] | - | skip | — | 一對多劇本制遊戲,以陣營目標定勝負,無累加計分 |
| 1641 | Rialto | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1642 | Hellboy: The Board Game | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1643 | Kahuna | b | done | — | 放寬尺度後直接生成 |
| 1644 | The Rich and the Good | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1645 | Ninjato | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1646 | After the Virus | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1647 | Pueblo | c | done | [link](https://bghub.org/r/pueblo.pdf) | 單一罰分欄,罰分越少越好 |
| 1648 | Sherlock Holmes Consulting Detective: Carlton House & Queen's Park | - | skip | — | 合作解謎,按案件問答同線索數計分,唔適用累加計分表 |
| 1649 | Medina (Second Edition) | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1650 | Tea Garden | c | done | [link](https://bghub.org/r/teagarden.pdf) | 行動卡/皇帝卡/河道/茶學(中央 10)/皇帝軌登頂 10/茶杯連接 |
| 1651 | Deep Madness | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1652 | Tend | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1653 | The Hunters: German U-Boats at War, 1939-43 | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1654 | Turn the Tide | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1655 | Tranquility | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1656 | Rise of Tribes | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1657 | Dungeon Degenerates: Hand of Doom | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1658 | UBOOT: The Board Game | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1659 | Sylvion | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1660 | Kingdom Rush: Rift in Time | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1661 | Backgammon | - | skip | — | 抽象競速棋,以最先走晒棋子定勝負,無累加計分 |
| 1662 | Escape Room: The Game | - | skip | — | 密室逃脫遊戲,按時間評級,唔適用累加計分表 |
| 1663 | Monumental | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1664 | Manhattan | b | done | — | 放寬尺度後直接生成 |
| 1665 | Guildhall | - | skip | — | 以最先儲夠二十分定勝負,無終局分項計分 |
| 1666 | Walking in Burano | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1667 | Evo | b | done | — | 放寬尺度後直接生成 |
| 1668 | Everdell Silverfrost | c | done | [link](https://bghub.org/r/everdell-silverfrost.pdf) | rulebook line 984 明文六大類;旅程地點 8/6/4/2 分明文 |
| 1669 | The Castles of Burgundy: The Dice Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1670 | Ultimate Werewolf: Ultimate Edition | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1671 | Merchant of Venus | b | done | — | 放寬尺度後直接生成 |
| 1672 | Museum | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1673 | Fateforge: Chronicles of Kaan | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1674 | Salton Sea | c | done | [link](https://bghub.org/r/salton-sea.pdf) | rulebook 明文:手牌每 $3 得 2 分、鹽水/地熱/鋰 1/3/5 分、未執行合約扣一半 |
| 1675 | Disney Villainous: Despicable Plots | - | skip | — | 不對稱陣營遊戲,每個反派勝利條件唔同,無統一累加計分 |
| 1676 | Fun Facts | - | skip | — | 合作制派對遊戲,無玩家累加計分 |
| 1677 | Oranienburger Kanal | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1678 | Smash Up: It's Your Fault! | b | done | — | 放寬尺度後直接生成 |
| 1679 | Welcome to the Dungeon | - | skip | — | 賭膽遊戲,以最先贏兩次探險定勝負,無累加計分 |
| 1680 | Sol: Last Days of a Star | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1681 | Keythedral | c | done | [link](https://bghub.org/r/keythedral.pdf) | rulebook 明文:黃 4 分、紫 3 分、白 2 分、資源方塊各 1 分 |
| 1682 | Harvest | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1683 | Trains: Rising Sun | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1684 | The Night Cage | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1685 | Skara Brae | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1686 | The Starfarers of Catan | - | skip | — | 以最先儲夠十五分定勝負,無終局分項計分 |
| 1687 | Wings of War: Famous Aces | - | skip | — | 空戰對戰遊戲,以擊落對手定勝負,無累加計分 |
| 1688 | Dark Moon | - | skip | — | 半合作含內鬼遊戲,以陣營成敗定勝負,無累加計分 |
| 1689 | Liberté | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1690 | Planet Steam | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1691 | Agricola: Family Edition | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1692 | Miyabi | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1693 | Tokaido Duo | c | done | [link](https://bghub.org/r/tokaido-duo.pdf) | 信仰=神廟×花園、商業、文化三欄 |
| 1694 | Aftermath | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1695 | Burning Banners | - | skip | — | 戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1696 | V-Sabotage | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1697 | The Artemis Project | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1698 | Heroes of Might and Magic III: The Board Game | - | skip | — | 劇本制遊戲,以劇本目標定勝負,無統一累加計分 |
| 1699 | Unearth | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1700 | Next Station: Tokyo | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1701 | Lost Cities: The Board Game | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1702 | Starship Catan | - | skip | — | 雙人遊戲,以最先儲夠指定勝利點定勝負,無終局分項計分 |
| 1703 | Age of Galaxy | c | done | [link](https://bghub.org/r/age-of-galaxy.pdf) | 聲望/星系/遺物/意識形態;計分物用圖示表示,PDF 抽唔到故唔寫單價 |
| 1704 | After the Empire | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1705 | Infinity Gauntlet: A Love Letter Game | - | skip | — | 不對稱陣營遊戲,以達成陣營目標定勝負,無累加計分 |
| 1706 | Terracotta Army | c | done | [link](https://bghub.org/r/terracottaarmy.pdf) | rulebook END GAME SCORING 明文:步兵 8/2、群組主導 5、在場 2、跪射俑 2、剩餘每 2 件 1 分 |
| 1707 | Spot it! | b | done | — | 放寬尺度後直接生成 |
| 1708 | Quoridor | - | skip | — | 抽象對弈,以最先到對面定勝負,無累加計分 |
| 1709 | Naga Raja | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1710 | EXIT: The Game – The Mysterious Museum | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1711 | Century: Golem Edition – An Endless World | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1712 | Warsaw: City of Ruins | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1713 | The Little Prince: Make Me a Planet | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1714 | Star Trek: Catan | - | skip | — | 以最先儲夠十分定勝負,無終局分項計分 |
| 1715 | Dice Throne: Season Two – Gunslinger v. Samurai | - | skip | — | 雙人對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1716 | Room 25 | - | skip | — | 合作/含內鬼遊戲,以逃出定勝負,無累加計分 |
| 1717 | Robot Quest Arena | c | done | [link](https://bghub.org/r/robot-quest-arena.pdf) | rulebook 冇分項清單,只寫 VP 最多者勝,故單一 number 欄 |
| 1718 | Get on Board: New York & London | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1719 | Barony | - | skip | — | 以最先升到公爵定勝負,無終局分項計分 |
| 1720 | Titan | - | skip | — | 淘汰制戰棋,以消滅對手泰坦定勝負,無累加計分 |
| 1721 | Mariposas | c | done | [link](https://bghub.org/r/mariposas.pdf) | 生命週期卡每張 1、蝴蝶分佈、能力代幣 |
| 1722 | Salem 1692 | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1723 | Fire & Axe: A Viking Saga | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1724 | Beasty Bar | - | skip | — | 以最先送兩隻動物入場定勝負,無累加計分 |
| 1725 | Overboss: A Boss Monster Adventure | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1726 | Timeline: Events | - | skip | — | 以最先放晒手牌定勝負,無累加計分 |
| 1727 | CABO (Second Edition) | b | done | — | 放寬尺度後直接生成 |
| 1728 | Gloom of Kilforth: A Fantasy Quest Game | - | skip | — | 單人/合作制遊戲,無玩家累加計分 |
| 1729 | Flatiron | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1730 | Asara | c | done | [link](https://bghub.org/r/asara.pdf) | 四次年度評比 + 最終評比(最高塔/最多塔) |
| 1731 | Mystery Rummy: Jack the Ripper | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1732 | NEOM | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1733 | Wildcatters | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1734 | Dragomino | b | done | — | 放寬尺度後直接生成 |
| 1735 | Doom: The Boardgame | - | skip | — | 一對多劇本制遊戲,以陣營目標定勝負,無累加計分 |
| 1736 | Orapa Mine | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1737 | Scotland Yard | - | skip | — | 一對多隱藏移動遊戲,以捉到/逃脫定勝負,無累加計分 |
| 1738 | Say Anything | b | done | — | 放寬尺度後直接生成 |
| 1739 | Kites | - | skip | — | 合作制即時遊戲,無玩家累加計分 |
| 1740 | Bot Factory | c | done | [link](https://bghub.org/r/bot-factory.pdf) | rulebook FINAL SCORING 明文:演說標記每對 1 分、零件磚 -1、未完成專案 -2、未完成合約扣演說格分 |
| 1741 | Mykerinos | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1742 | EXIT: The Game – The Forgotten Island | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1743 | Land vs Sea | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1744 | Endangered | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1745 | Ierusalem: Anno Domini | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1746 | Heroes of Terrinoth | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1747 | Balloon Cup | - | skip | — | 雙人遊戲,以最先儲齊獎盃定勝負,無累加計分 |
| 1748 | Cosmic Encounter | - | skip | — | 以最先取得五個外星殖民地定勝負,無累加計分 |
| 1749 | Ca$h 'n Gun$ | b | done | — | 放寬尺度後直接生成 |
| 1750 | Stephenson's Rocket | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1751 | Age of Civilization | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1752 | Illusion | - | skip | — | 以最先儲齊三張卡定勝負,無累加計分 |
| 1753 | The Staufer Dynasty | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1754 | Porta Nigra | c | done | [link](https://bghub.org/r/porta-nigra.pdf) | rulebook 明文:套組 2/6/12/20、場上剩餘各 1 分(塞斯特斯每 3 個 1 分)、聖殿 12/6 |
| 1755 | Rallyman | - | skip | — | 競速遊戲,以最快到終點定勝負,無累加計分 |
| 1756 | Fireball Island: The Curse of Vul-Kar | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1757 | Ishtar: Gardens of Babylon | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1758 | Catan: Starfarers | - | skip | — | 以最先儲夠十五分定勝負,無終局分項計分 |
| 1759 | Wild Tiled West | c | done | [link](https://bghub.org/r/wild-tiled-west.pdf) | 馬蹄鐵 -1、墓碑 2、A 牌三張 6/四張 12、採礦軌、夥伴卡 |
| 1760 | Villages of Valeria | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1761 | Rummikub | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1762 | Fruit Fight | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1763 | Löwenherz | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1764 | Marrakech | b | done | — | 放寬尺度後直接生成 |
| 1765 | Robo Rally | - | skip | — | 競速遊戲,以最快踩晒所有旗定勝負,無累加計分 |
| 1766 | Catacombs | - | skip | — | 彈射一對多遊戲,以擊倒對手定勝負,無累加計分 |
| 1767 | Terra Nova | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1768 | My City: Roll & Build | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1769 | Wyatt Earp | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1770 | The Isle of Cats: Explore & Draw | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1771 | Tournay | c | done | [link](https://bghub.org/r/tournay.pdf) | 聲望建築(建造者左/其他右)、領地卡、城牆每張 1 |
| 1772 | Keyper | c | done | [link](https://bghub.org/r/keyper.pdf) | 計分由建築磚各自規則決定,分四大類做欄;note 只引用 rulebook 明文列出嘅例子 |
| 1773 | Murano | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1774 | Pioneer Days | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1775 | Antike II | - | skip | — | 以最先儲夠指定勝利點定勝負,無終局分項計分 |
| 1776 | Unmatched Adventures: Teenage Mutant Ninja Turtles | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1777 | Expedition to Newdale | c | done | [link](https://bghub.org/r/expedition-to-newdale.pdf) | rulebook Final Scoring 明文:軍力 4/2/1、剩餘每 5 幣 1 分、秘密目標每間屋 2 分 |
| 1778 | Cryo | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1779 | XenoShyft: Onslaught | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1780 | KeyForge: Age of Ascension | - | skip | — | 雙人對戰,以最先鑄成三把鑰匙定勝負,無累加計分 |
| 1781 | 1817 | b | done | — | 放寬尺度後直接生成 |
| 1782 | Heroes of Normandie | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1783 | Cosmolancer | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1784 | Vampire: The Eternal Struggle | - | skip | — | 集換式卡牌對戰,以逼走對手定勝負,無累加計分 |
| 1785 | Juicy Fruits | c | done | [link](https://bghub.org/r/juicy-fruits.pdf) | rulebook 明文:剩餘水果唔計分,攤位標記終局結算;分值印喺標記故 number |
| 1786 | Schadenfreude | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1787 | Mascarade | - | skip | — | 以最先儲夠十三金幣定勝負,無累加計分 |
| 1788 | Warrior Knights | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1789 | EXIT: The Game – The Polar Station | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1790 | Dice City | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1791 | Spectacular | c | done | [link](https://bghub.org/r/spectacular.pdf) | 入口/棲地(骰值×繁殖磚骰數)/瞭望塔/動物種類對照表 |
| 1792 | Merkator | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1793 | Imagine | - | skip | — | 合作制猜詞遊戲,無玩家累加計分 |
| 1794 | Dungeons, Dice & Danger | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1795 | Blue Moon | - | skip | — | 雙人對戰卡牌遊戲,以搶奪飛龍定勝負,無累加計分 |
| 1796 | The 7th Continent: Classic Edition | - | skip | — | 合作制探索遊戲,無玩家累加計分 |
| 1797 | Gingerbread House | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1798 | Eat Poop You Cat | - | skip | — | 派對繪畫傳話遊戲,無正式累加計分 |
| 1799 | Advanced Squad Leader: Starter Kit #2 | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1800 | Unlock!: Escape Adventures – The Formula | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1801 | Century: Golem Edition – Eastern Mountains | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1802 | Mega Civilization | - | skip | — | 文明遊戲,以文明進程表推進定勝負,無累加計分 |
| 1803 | Star Wars: Epic Duels | - | skip | — | 雙人對戰,以擊倒對手角色定勝負,無累加計分 |
| 1804 | Conservas | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1805 | Harry Potter: Hogwarts Battle – Defence Against the Dark Arts | - | skip | — | 雙人對戰,以擊倒對手定勝負,無累加計分 |
| 1806 | Unmatched: Sun's Origin | - | skip | — | 雙人對戰,以擊倒對手英雄定勝負,無累加計分 |
| 1807 | Aton | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1808 | The Bridges of Shangri-La | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1809 | Viral | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1810 | Happy Salmon | - | skip | — | 敏捷派對遊戲,以最快出晒牌定勝負,無累加計分 |
| 1811 | The Rose King | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1812 | BANG! | - | skip | — | 隱藏身分遊戲,以陣營達成條件定勝負,無累加計分 |
| 1813 | Fog of Love | - | skip | — | 雙人敘事遊戲,以個人劇情目標判定,無統一累加計分 |
| 1814 | Railroad Tiles | c | done | [link](https://bghub.org/r/railroad-tiles.pdf) | rulebook END GAME SCORING 明文:城市 5 分、矩形每磚 1 分、星棋 1 分、第 6 個開口起 -1、目標 5 分 |
| 1815 | Axis & Allies: Pacific 1940 | - | skip | — | 戰棋,以佔領勝利城市定勝負,無累加計分 |
| 1816 | Voyages | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1817 | Space Station Phoenix | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1818 | Butterfly Garden | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1819 | CoraQuest | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1820 | Shipwrights of the North Sea: Redux | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1821 | King of Tokyo: Duel | b | done | — | 放寬尺度後直接生成 |
| 1822 | Pergola | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1823 | EXIT: The Game – The Catacombs of Horror | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1824 | Draft & Write Records | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1825 | Path of Light and Shadow | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1826 | Path of Civilization | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1827 | Green Team Wins | - | skip | — | 合作制派對遊戲,無玩家累加計分 |
| 1828 | Rune Age | - | skip | — | 劇本制牌庫構築,以完成劇本目標定勝負,無累加計分 |
| 1829 | Cabo | b | done | — | 放寬尺度後直接生成 |
| 1830 | Rear Window | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 1831 | Solenia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1832 | ALIEN: Fate of the Nostromo | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1833 | Space Crusade | - | skip | — | 一對多劇本制遊戲,以陣營目標定勝負,無累加計分 |
| 1834 | Onirim | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1835 | Looot | c | done | [link](https://bghub.org/r/looot.pdf) | 六種資源各自(起始值+獎勵)×數量、工地、戰利品、未滿長船 -5 |
| 1836 | Gravwell: Escape from the 9th Dimension | - | skip | — | 競速遊戲,以最快脫離定勝負,無累加計分 |
| 1837 | Escape Tales: The Awakening | - | skip | — | 合作制故事解謎遊戲,無玩家累加計分 |
| 1838 | Huang | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1839 | Tidal Blades 2: Rise of the Unfolders | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1840 | Dog Park | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1841 | Dice Throne: Season Two – Cursed Pirate v. Artificer | - | skip | — | 雙人對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1842 | Cosmoctopus | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1843 | Burgle Bros 2: The Casino Capers | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1844 | Pharaon | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1845 | Hit Z Road | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1846 | Tides of Time | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1847 | Bandu | - | skip | — | 疊高遊戲,以對手塔冧定勝負,無累加計分 |
| 1848 | Minos: Dawn of the Bronze Age | c | done | [link](https://bghub.org/r/minos-dawn-of-the-bronze-age.pdf) | rulebook 明文:剩餘除 5、未入宮殿卡每張 1 分、花瓶 2/4/8/14、塔 +1/+2 |
| 1849 | Eight-Minute Empire | b | done | — | 放寬尺度後直接生成 |
| 1850 | Carolus Magnus | - | skip | — | 以最先放晒城堡定勝負,無累加計分 |
| 1851 | Shogi | - | skip | — | 抽象對弈,以將死對手定勝負,無累加計分 |
| 1852 | Summer Camp | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1853 | Conflict of Heroes: Storms of Steel! – Kursk 1943 | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1854 | Tortuga 1667 | - | skip | — | 隱藏身分遊戲,以陣營達成條件定勝負,無累加計分 |
| 1855 | Cascadero | c | done | [link](https://bghub.org/r/cascadero.pdf) | rulebook:全程VP軌,冇終局結算;勝出要行到第三面成就旗 |
| 1856 | 1849: The Game of Sicilian Railways | b | done | — | 放寬尺度後直接生成 |
| 1857 | Rum & Bones: Second Tide | - | skip | — | 隊制對戰遊戲,以摧毀對手基地定勝負,無累加計分 |
| 1858 | Sagani | c | done | [link](https://bghub.org/r/sagani.pdf) | rulebook 明文:獎勵 5 分/次、雜音圓片 -2 分/個 |
| 1859 | The Great Dalmuti | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1860 | Mythic Mischief | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1861 | Odin | c | done | [link](https://bghub.org/r/odin.pdf) | rulebook 明文:每手剩牌每張 1 分,最少分者勝 |
| 1862 | Campy Creatures | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1863 | Dixit: Disney Edition | b | done | — | 放寬尺度後直接生成 |
| 1864 | DC Deck-Building Game: Heroes Unite | b | done | — | 放寬尺度後直接生成 |
| 1865 | Rune Stones | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1866 | Aerion | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1867 | Wilmot's Warehouse | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1868 | Tenpenny Parks | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1869 | Minecraft: Builders & Biomes | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1870 | Shogun no Katana | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1871 | Dungeon Mayhem | - | skip | — | 雙人以上對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1872 | Beacon Patrol | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1873 | Stronghold: 2nd edition | - | skip | — | 雙人不對稱攻城遊戲,以守住/攻陷定勝負,無累加計分 |
| 1874 | Timeline: General Interest | - | skip | — | 以最先放晒手牌定勝負,無累加計分 |
| 1875 | Roma | - | skip | — | 雙人對戰,以打殘對手勝利點定勝負,無終局分項計分 |
| 1876 | Machi Koro 2 | - | skip | — | 以最先建成所有地標定勝負,無累加計分 |
| 1877 | Glasgow | c | no-source | [link](https://bghub.org/r/glasgow.pdf) | PDF 字型無法抽字,pdftotext 出亂碼 |
| 1878 | Kodama: The Tree Spirits | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1879 | Amyitis | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1880 | Azul Duel | c | done | [link](https://bghub.org/r/azul-duel.pdf) | rulebook 明文列齊計分板塊分值,但每局只用 3-4 張故合併做一欄 number |
| 1881 | The Mandalorian: Adventures | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1882 | Anomia | b | done | — | 放寬尺度後直接生成 |
| 1883 | Dale of Merchants Collection | - | skip | — | 以最先儲齊一疊指定動物牌定勝負,無累加計分 |
| 1884 | Ride the Rails | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1885 | Le Havre: The Inland Port | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 1886 | Dutch Blitz | b | done | — | 放寬尺度後直接生成 |
| 1887 | My Island | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1888 | Monkey Palace | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1889 | Amsterdam | c | done | [link](https://bghub.org/r/amsterdam.pdf) | rulebook 明文:罰分 -3/-5/-7、徽章 3 分/個、剩餘每兩件 1 分;城區對照表印喺圖故留 number |
| 1890 | Amalfi: Renaissance | c | done | [link](https://bghub.org/r/amalfirenaissance.pdf) | PDF 圖示大量缺字,只讀得出兩大類(遊戲中分含頭銜、終局邀請人物有上限),故全部 number 零單價 |
| 1891 | Glow | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1892 | The Grand Carnival | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1893 | Troyes Dice | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1894 | Kashgar: Merchants of the Silk Road | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1895 | Blokus 3D | - | skip | — | 抽象對弈,以放得最多方塊定勝負,無累加計分 |
| 1896 | SET | b | done | — | 放寬尺度後直接生成 |
| 1897 | Iliad | c | done | [link](https://bghub.org/r/iliad.pdf) | rulebook 明文:每位神只計最高值標記、非神標記正負全計、婚姻標記 0 分 |
| 1898 | Virus! | - | skip | — | 以最先湊齊四個健康器官定勝負,無累加計分 |
| 1899 | Magic Realm | - | skip | — | RPG 式探索遊戲,每個角色勝利條件唔同,無統一累加計分 |
| 1900 | Dungeon Fighter: Second Edition | - | skip | — | 合作制彈射遊戲,無玩家累加計分 |
| 1901 | Unmatched: Brains and Brawn | - | skip | — | 雙人對戰,以擊倒對手英雄定勝負,無累加計分 |
| 1902 | Tabannusi: Builders of Ur | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1903 | Joraku | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1904 | Kremlin | - | skip | — | 政治遊戲,以陣營領袖存活定勝負,無累加計分 |
| 1905 | Junta | - | skip | — | 以瑞士銀行存款定勝負,含淘汰機制,無統一累加計分 |
| 1906 | Bargain Quest | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1907 | Circadians: Chaos Order | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1908 | The Bottle Imp | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1909 | Kariba | b | done | — | 放寬尺度後直接生成 |
| 1910 | Masters of Renaissance: Lorenzo il Magnifico – The Card Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1911 | Skulk Hollow | - | skip | — | 雙人不對稱對戰,以達成陣營目標定勝負,無累加計分 |
| 1912 | First in Flight | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1913 | Blokus Trigon | - | skip | — | 抽象對弈,以放得最多方塊定勝負,無累加計分 |
| 1914 | Coup: Rebellion G54 | - | skip | — | 以最後生還定勝負,無累加計分 |
| 1915 | World of Warcraft: The Boardgame | - | skip | — | 半合作制遊戲,以擊敗大魔王定勝負,無累加計分 |
| 1916 | Origin Story | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1917 | Drop It | b | done | — | 放寬尺度後直接生成 |
| 1918 | DOOM: The Board Game | - | skip | — | 一對多劇本制遊戲,以陣營目標定勝負,無累加計分 |
| 1919 | Valley of the Kings: Afterlife | b | done | — | 放寬尺度後直接生成 |
| 1920 | Meuterer | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1921 | Now or Never | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1922 | Box One | - | skip | — | 合作/單人解謎遊戲,無玩家累加計分 |
| 1923 | Bios: Origins (Second Edition) | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1924 | Iberian Gauge | b | done | — | 放寬尺度後直接生成 |
| 1925 | Dewan | c | done | [link](https://bghub.org/r/dewan.pdf) | rulebook 明文:營地群組 4 分、漿果同符號各 2 分 |
| 1926 | Orichalcum | c | done | [link](https://bghub.org/r/orichalcum.pdf) | rulebook 明文:各標記 1 VP,夠 5 VP 加捉晒生物即勝 |
| 1927 | 3 Chapters | c | done | [link](https://bghub.org/r/3-chapters.pdf) | rulebook 明文:星 2 分、心 1 分、每兩粒寶石 1 分、寶石最多加 4 粒 |
| 1928 | Planet | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1929 | Curious Cargo | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1930 | Dungeon Mayhem: Monster Madness | - | skip | — | 雙人以上對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1931 | Aladdin's Dragons | c | done | [link](https://bghub.org/r/aladdins-dragons.pdf) | rulebook 明文:神器最多者勝,卷軸破同分 |
| 1932 | Iwari | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1933 | Middle-earth | - | skip | — | 集換式卡牌遊戲,以達成任務定勝負,無累加計分 |
| 1934 | Galaxy Defenders | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1935 | Discordia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1936 | I'm the Boss! | b | done | — | 放寬尺度後直接生成 |
| 1937 | Sleuth | - | skip | — | 推理遊戲,以最快推出答案定勝負,無累加計分 |
| 1938 | Haspelknecht: The Story of Early Coal Mining | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1939 | Nova Roma | c | done | [link](https://bghub.org/r/nova-roma.pdf) | 用多人 END GAME 章節(line 715),唔係 solo 章節;戰車 3/衝線 5/動物 2-5-9/馬賽克 2-3-5 全部明文 |
| 1940 | Chocolate Factory | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1941 | Traders of Osaka | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1942 | Horrified: Greek Monsters | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1943 | Next Station: Paris | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1944 | Indian Summer | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1945 | Freelancers: A Crossroads Game | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1946 | Yokai Septet | - | skip | — | 隊制吃磴遊戲,以陣營條件定勝負,無累加計分 |
| 1947 | G.I. JOE Deck-Building Game | - | skip | — | 合作制牌庫構築遊戲,無玩家累加計分 |
| 1948 | Halls of Hegra | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1949 | Fractured Sky | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1950 | D-Day Dice | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1951 | Axis & Allies | - | skip | — | 戰棋,以佔領勝利城市定勝負,無累加計分 |
| 1952 | Skyjo | b | done | — | 放寬尺度後直接生成 |
| 1953 | Feya's Swamp | c | done | [link](https://bghub.org/r/feyasswamp.pdf) | rulebook 明文:島 = 聚落 × 靈魂格;6 張計分卡每局用 2 張故合併做一欄 |
| 1954 | Sun Tzu | - | skip | — | 雙人區域控制,以佔領行省定勝負,無累加計分 |
| 1955 | Phoenix New Horizon | c | done | [link](https://bghub.org/r/phoenix-new-horizon.pdf) | rulebook 明文能量軌 1/2/4/6、發展軌 3/6/10;對講機值隨殖民者位置變故留 number |
| 1956 | Risk 2210 A.D. | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1957 | RAF: The Battle of Britain 1940 | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1958 | Piepmatz: Little Songbirds | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1959 | Ave Caesar | - | skip | — | 競速遊戲,以最快到終點定勝負,無累加計分 |
| 1960 | My Village | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1961 | Mystery of the Abbey | - | skip | — | 推理遊戲,以最快指認兇手定勝負,無累加計分 |
| 1962 | Assassin's Creed: Brotherhood of Venice | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1963 | Cosmic Frog | c | done | [link](https://bghub.org/r/cosmic-frog.pdf) | 擺放分/多樣性分兩類明確,但長度對照表印喺圖故全部 number |
| 1964 | La Habana | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1965 | Masmorra: Dungeons of Arcadia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1966 | Ada's Dream | c | done | [link](https://bghub.org/r/adas-dream.pdf) | rulebook 11 項明文;每疊圓片 2 分、齒輪缺一 -2 分、剩書 1 分明文,其餘分值係圖示故 number |
| 1967 | L.L.A.M.A. | b | done | — | 放寬尺度後直接生成 |
| 1968 | HEXplore It: The Valley of the Dead King | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1969 | Normandy '44 | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1970 | Factory Fun | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1971 | Pirate's Cove | b | done | — | 放寬尺度後直接生成 |
| 1972 | Nothing Personal | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1973 | De Vulgari Eloquentia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1974 | Sanctum | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1975 | Warhammer Quest: Blackstone Fortress | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1976 | Bloodborne: The Card Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1977 | Mü & More | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1978 | Light Speed: Arena | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1979 | Undaunted: Battle of Britain | - | skip | — | 雙人劇本制戰棋,以劇本目標定勝負,無累加計分 |
| 1980 | ICECOOL2 | - | skip | — | 彈射遊戲,以最先儲齊指定魚數定勝負,無累加計分 |
| 1981 | Welcome Back to the Dungeon | - | skip | — | 賭膽遊戲,以最先贏兩次探險定勝負,無累加計分 |
| 1982 | Omen: A Reign of War | - | skip | — | 雙人對戰,以搶奪羽毛定勝負,無累加計分 |
| 1983 | Adventure Land | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1984 | Empire Builder | - | skip | — | 以最先賺夠指定金額定勝負,無累加計分 |
| 1985 | GKR: Heavy Hitters | - | skip | — | 微縮模型對戰遊戲,以擊毀對手機甲定勝負,無累加計分 |
| 1986 | Tramways | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1987 | Paranormal Detectives | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1988 | Bruxelles 1897 | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1989 | Wallenstein (Second Edition) | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 1990 | District Noir | - | skip | — | 雙人對戰,以達成控制條件定勝負,無累加計分 |
| 1991 | S.T.A.L.K.E.R. The Board Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1992 | A Place for All My Books | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1993 | Tides of Madness | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1994 | Vast: The Mysterious Manor | - | skip | — | 不對稱陣營遊戲,每個角色勝利條件唔同,無統一累加計分 |
| 1995 | Advanced Squad Leader: Starter Kit #3 | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1996 | CV | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1997 | Botanicus | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1998 | Factory Funner | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1999 | Fields of Fire | - | skip | — | 單人遊戲,無玩家累加計分 |
| 2000 | Abandon All Artichokes | - | skip | — | 以最先清走手上洋薊定勝負,無累加計分 |
| 2001 | Corps of Discovery: A Game Set in the World of Manifest Destiny | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 2002 | EXIT: The Game – The Forbidden Castle | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 2003 | Bruxelles 1893: Belle Époque | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2004 | dnup | c | done | [link](https://bghub.org/r/dnup.pdf) | PDF 部分 OCR 不良但計分句可讀:出清第一攞 2 標記、第二攞 1,夠 4 個即勝 |
| 2005 | Tiny Epic Kingdoms | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2006 | Dungeons & Dragons: Temple of Elemental Evil Board Game | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 2007 | Mr. President: The American Presidency, 2001-2020 | - | skip | — | 單人遊戲,無玩家累加計分 |
| 2008 | Ascending Empires | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2009 | Sanssouci | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2010 | Kamisado | - | skip | — | 抽象對弈,以走到對面定勝負,無累加計分 |
| 2011 | Kabuto Sumo | - | skip | — | 彈射遊戲,以推跌對手定勝負,無累加計分 |
| 2012 | Marvel Zombies: X-Men Resistance | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 2013 | Warfighter: The WWII Tactical Combat Card Game | - | skip | — | 單人/合作制遊戲,無玩家累加計分 |
| 2014 | Metro X | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2015 | Bites | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2016 | Revolution! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2017 | Whirling Witchcraft | - | skip | — | 以最先令對手溢出定勝負,無累加計分 |
| 2018 | Nekojima | - | skip | — | 疊高遊戲,以對手塔冧定勝負,無累加計分 |
| 2019 | PitchCar Mini | - | skip | — | 彈射競速遊戲,以最快完成圈數定勝負,無累加計分 |
| 2020 | Atlantic Chase: The Kriegsmarine Against the Home Fleet 1939-1942 | - | skip | — | 雙人戰棋,以陣營勝利條件定勝負,無累加計分 |
| 2021 | The Great Split | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2022 | Time Bomb | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 2023 | Necromunda | - | skip | — | 微縮模型對戰遊戲,以擊倒對手定勝負,無累加計分 |
| 2024 | Fireteam Zero | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 2025 | Oceanos | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2026 | Oregon | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2027 | Noctiluca | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2028 | Fire Tower | - | skip | — | 以燒毀對手瞭望塔定勝負,無累加計分 |
| 2029 | Power Grid: The First Sparks | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2030 | Pixel Tactics | - | skip | — | 雙人對戰,以擊倒對手首領定勝負,無累加計分 |
| 2031 | Dice Settlers | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2032 | Daitoshi | c | done | [link](https://bghub.org/r/daitoshi.pdf) | rulebook 明文四條荒野軌乘數結構;軌上分值印喺板故 number;剩餘每 2 件 1 分明文 |
| 2033 | In the Shadow of the Emperor | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2034 | Android | c | done | [link](https://bghub.org/r/android.pdf) | rulebook 明文 +15/+5/+4/+3/+3/-1;拼圖連結會改動個別值,已喺 note 講明 |
| 2035 | Aristeia! | - | skip | — | 微縮模型對戰遊戲,以完成目標定勝負,無累加計分 |
| 2036 | Pergamon | c | done | [link](https://bghub.org/r/pergamon.pdf) | rulebook 明文:每收藏 1-6 分、最舊獎 2 分、終局 3/2/1 |
| 2037 | Marabunta | c | done | [link](https://bghub.org/r/marabunta.pdf) | rulebook 明文:區域贏家攞計分葉圓圈數 2-8 分,葉值逐區唔同故 number |
| 2038 | Dice Throne: Season One Rerolled – Battle 1:  Barbarian v. Moon Elf | - | skip | — | 雙人對戰,以擊倒對手生命值定勝負,無累加計分 |
| 2039 | Spyfall 2 | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 2040 | Polis | c | done | [link](https://bghub.org/r/polis.pdf) | rulebook 明文:人口每粒 1 分 + 威望 + 已完成工程終局獎 |
| 2041 | Sluff Off! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2042 | Chronicles of Crime: 2400 | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 2043 | Meeple Land | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2044 | The Red Dragon Inn 2 | - | skip | — | 以最後生還定勝負,無累加計分 |
| 2045 | Beyond Balderdash | b | done | — | 放寬尺度後直接生成 |
| 2046 | Battle Sheep | b | done | — | 放寬尺度後直接生成 |
| 2047 | Sword of Rome: Conquest of Italy, 362-272 BC | - | skip | — | 多陣營戰棋,以陣營勝利條件定勝負,無統一累加計分 |
| 2048 | EXIT: The Game – Advent Calendar: The Mystery of the Ice Cave | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 2049 | Hitster: Guilty Pleasures | - | skip | — | 音樂猜年份派對遊戲,以最先儲夠卡定勝負,無累加計分 |
| 2050 | Trailblazers | c | done | [link](https://bghub.org/r/trailblazers.pdf) | rulebook 明文:環線每個路標 1 分;目標卡分值印喺卡故 number |
| 2051 | Perspectives | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 2052 | Stupor Mundi | c | done | [link](https://bghub.org/r/stupor-mundi.pdf) | rulebook line 1066 明文:每座建築 +1、建築多數 +4/+2(兩人局無 +2) |
| 2053 | Imaginarium | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2054 | Unlock! Kids: Detective Stories | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 2055 | Rush M.D. | - | skip | — | 合作制即時遊戲,無玩家累加計分 |
| 2056 | Marvel: Crisis Protocol Core Set | - | skip | — | 微縮模型對戰遊戲,以完成目標定勝負,無累加計分 |
| 2057 | Sorcerer City | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2058 | Clans | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2059 | Ants | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2060 | Stellar | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2061 | Adventure Games: The Dungeon | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 2062 | Giants | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2063 | Holland '44: Operation Market-Garden | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 2064 | Fast Sloths | c | done | [link](https://bghub.org/r/fast-sloths.pdf) | rulebook 明文:葉子最多者勝,夠 8 塊即刻贏 |
| 2065 | Axis & Allies | - | skip | — | 戰棋,以佔領勝利城市定勝負,無累加計分 |
| 2066 | Otys | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2067 | Neanderthal | c | done | [link](https://bghub.org/r/neanderthal.pdf) | 三張性別卡分值表唔同,故合併做一欄 number,三表全文寫入 note |
| 2068 | Olympos | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2069 | Adventure Tactics: Domianne's Tower | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 2070 | Ascension Tactics: Miniatures Deckbuilding Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2071 | Tenby | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2072 | Timeline: Science & Discoveries | - | skip | — | 以最先放晒手牌定勝負,無累加計分 |
| 2073 | Love Letter: Adventure Time | - | skip | — | 以最先儲夠指定標記定勝負,無累加計分 |
| 2074 | 5-Minute Mystery | - | skip | — | 合作制推理遊戲,無玩家累加計分 |
| 2075 | The Scepter of Zavandor | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2076 | Pendragon: The Fall of Roman Britain | - | skip | — | COIN 系列多陣營遊戲,以陣營勝利條件定勝負,無統一累加計分 |
| 2077 | Cantaloop: Book 1 – Breaking into Prison | - | skip | — | 單人冒險解謎遊戲,無玩家累加計分 |
| 2078 | EXIT: The Game – The Haunted Roller Coaster | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 2079 | Etherstone | c | done | [link](https://bghub.org/r/etherstone.pdf) | rulebook 明文:標記 1 分、觸發標記 +2、生命每 2 點 1 分、虛空契約 -7、腐化 -3 |
| 2080 | Fjords | c | done | [link](https://bghub.org/r/fjords.pdf) | rulebook 明文:每個放低嘅維京人 1 分 |
| 2081 | Patchistory | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2082 | Yomi | - | skip | — | 雙人格鬥遊戲,以擊倒對手生命值定勝負,無累加計分 |
| 2083 | Ingenious: Travel Edition | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2084 | Navajo Wars | - | skip | — | 單人遊戲,無玩家累加計分 |
| 2085 | Carcassonne: Amazonas | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2086 | Belratti | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 2087 | Hare & Tortoise | - | skip | — | 競速遊戲,以最快到終點定勝負,無累加計分 |
| 2088 | Savannah Park | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2089 | Egizia: Shifting Sands | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2090 | Arkham Horror: The Card Game | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 2091 | Jungle Speed | - | skip | — | 敏捷遊戲,以最快出晒牌定勝負,無累加計分 |
| 2092 | Ogre | - | skip | — | 雙人戰棋,以摧毀對手單位定勝負,無累加計分 |
| 2093 | The Ancient World (Second Edition) | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2094 | Village Rails | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2095 | Doomtown: Reloaded | - | skip | — | 雙人對戰,以搶奪控制點定勝負,無累加計分 |
| 2096 | A Study in Emerald (Second Edition) | - | skip | — | 隱藏陣營遊戲,以陣營條件同淘汰判定,無統一累加計分 |
| 2097 | Renegade | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 2098 | Andor: The Family Fantasy Game | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 2099 | Tiny Epic Pirates | c | done | [link](https://bghub.org/r/tiny-epic-pirates.pdf) | rulebook 明文:最先埋 3 個寶藏者勝,同分比傳奇等級 |
| 2100 | Ad Astra | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2101 | Circus Flohcati | b | done | — | 放寬尺度後直接生成 |
| 2102 | Bios: Megafauna (Second Edition) | c | done | [link](https://bghub.org/r/bios-megafauna-second-edition.pdf) | rulebook A7 明文:五項各 1 VP,語言 +3 |
| 2103 | PUSH | b | done | — | 放寬尺度後直接生成 |
| 2104 | Mindbug: Beyond Evolution | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2105 | Aliens: Another Glorious Day in the Corps | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2106 | Steampunk Rally Fusion | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2107 | Ascension: Immortal Heroes | b | done | — | 放寬尺度後直接生成 |
| 2108 | Hitster: Music Bingo | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2109 | Cóatl | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2110 | Ubongo 3D | b | done | — | 放寬尺度後直接生成 |
| 2111 | Thanos Rising: Avengers Infinity War | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2112 | Nautilion | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2113 | Unlock!: Secret Adventures – The Adventurers of Oz | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2114 | Walnut Grove | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2115 | Tinners' Trail (Second Edition) | c | done | [link](https://bghub.org/r/tinners-trail-second-edition.pdf) | rulebook 明文:冇終局計分,只有分數軌 |
| 2116 | Aquaretto | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2117 | Age of Renaissance | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2118 | Ys | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2119 | Tales from the Red Dragon Inn | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2120 | Labyrinth | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2121 | Codex: Card-Time Strategy – Deluxe Set | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2122 | Pandemic: Hot Zone – North America | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2123 | Ascension: 10 Year Anniversary Edition | b | done | — | 放寬尺度後直接生成 |
| 2124 | Unlock!: Legendary Adventures | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2125 | Mythwind | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2126 | Key Flow | c | done | [link](https://bghub.org/r/key-flow.pdf) | 計分全部由卡面規則決定故合併做一欄;剩餘金幣 1 分明文 |
| 2127 | Warfighter: The Tactical Special Forces Card Game | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2128 | Duplik | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2129 | Inside Job | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2130 | Call of Cthulhu: The Card Game | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2131 | Switch & Signal | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2132 | Euchre | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2133 | New York Slice | b | done | — | 放寬尺度後直接生成 |
| 2134 | Wits & Wagers Party | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2135 | Chakra | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2136 | Time's Up! Edición Azul | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2137 | Bamboo | c | done | [link](https://bghub.org/r/bamboo.pdf) | rulebook 明文:每款森林之靈 2 HP、左右每差 1 點 -2 HP、平衡磚半分進位、進階空格 -1 |
| 2138 | LYNGK | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2139 | Maskmen | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2140 | Carrom | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2141 | The Adventurers: The Temple of Chac | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2142 | Flip Ships | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2143 | Weimar: The Fight for Democracy | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2144 | My First Carcassonne | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2145 | Talisman: Revised 4th Edition | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2146 | Kavango | c | done | [link](https://bghub.org/r/kavango.pdf) | rulebook 明文:保育獎每項 10 分;動物分值印喺卡故 number |
| 2147 | City of the Great Machine | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2148 | Mangrovia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2149 | Hamster Roll | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2150 | Bananagrams | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2151 | Niagara | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2152 | Power Struggle | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2153 | Wroth | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2154 | Funfair | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2155 | Ganymede | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2156 | 1860: Railways on the Isle of Wight | b | done | — | 放寬尺度後直接生成 |
| 2157 | Stars of Akarios | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2158 | Arctic Scavengers | b | done | — | 放寬尺度後直接生成 |
| 2159 | Molly House | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2160 | The Red Dragon Inn | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2161 | Eleven: Football Manager Board Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2162 | Himalaya | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2163 | Hamburg | c | done | [link](https://bghub.org/r/hamburg.pdf) | rulebook 明文:多數標記 4 分、第三段城牆每邊 3 分、神職人員每張同類卡 1 分 |
| 2164 | The Lord of the Ice Garden | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2165 | World in Flames | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2166 | The Expanse Board Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2167 | Last Aurora | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2168 | The King Is Dead | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2169 | The Climbers | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2170 | 1856: Railroading in Upper Canada from 1856 | b | done | — | 放寬尺度後直接生成 |
| 2171 | Dice Throne: Season Two – Seraph v. Vampire Lord | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2172 | The White Castle Duel | c | done | [link](https://bghub.org/r/the-white-castle-duel.pdf) | rulebook FINAL SCORING 全部明文(5 錢 1 分、資源 3-6 得 1 / 7 得 2、旗×層數、刀盔印記乘法、藍鶴×白鶴) |
| 2173 | Ecosystem | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2174 | Artifacts, Inc. | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2175 | Strat-O-Matic Baseball | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2176 | Mordheim: City of the Damned | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2177 | After Us | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2178 | Prey Another Day | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2179 | High Frontier | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2180 | Wooden Ships & Iron Men | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2181 | The Civil War 1861-1865 | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2182 | Wars of the Roses: Lancaster vs. York | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2183 | Corinth | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2184 | Abalone | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2185 | Nyet! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2186 | Exploding Kittens: Party Pack | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2187 | Dice Throne: Season Two – Tactician v. Huntress | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2188 | On the Underground | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2189 | Explorers | c | done | [link](https://bghub.org/r/explorers.pdf) | rulebook 明文村莊 3/5/7/10;補給/寶石/神廟分值印喺計分磚故 number |
| 2190 | Capital Lux | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2191 | Fate: Defenders of Grimheim | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2192 | Treasure Hunter | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2193 | Gulo Gulo | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2194 | Reykholt | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2195 | Telestrations: After Dark | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2196 | Felicity: The Cat in the Sack | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2197 | Favor of the Pharaoh | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2198 | Break the Code | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2199 | Babel | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2200 | Marvel United: Multiverse | - | skip | — | 按遊戲性質唔適用累加計分表(合作/劇本/淘汰/競速/派對) |
| 2201 | Empire's End | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2202 | Samurai Spirit | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2203 | Fuji Flush | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2204 | Grimcoven | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2205 | Mamma Mia! | b | done | — | 放寬尺度後直接生成 |
| 2206 | Bravo! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2207 | Unlock!: Mystery Adventures – The House on the Hill | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2208 | Dragonkeepers | c | done | [link](https://bghub.org/r/dragonkeepers.pdf) | rulebook 明文:金蛋 4 分、最多者翻一隻計 16 分;其餘分值印喺配件故 number |
| 2209 | Picture Perfect | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2210 | Battle Cry: 150th Civil War Anniversary Edition | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2211 | Ethnos: 2nd Edition | c | done | [link](https://bghub.org/r/ethnos-2nd-edition.pdf) | rulebook 明文隊伍張數表 0/1/3/6/10/15;地區威望標記值隨機故 number,拆三個時代做欄 |
| 2212 | Petrichor | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2213 | Colonial Twilight: The French-Algerian War, 1954-62 | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2214 | Fertility | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2215 | Naishi | c | done | [link](https://bghub.org/r/naishi.pdf) | 計分全部由角色卡條件決定,合併做一欄 number;note 只引用 rulebook 明文舉出嘅幾個例 |
| 2216 | 51st State | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2217 | Timeline: Music & Cinema | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2218 | Tsuro of the Seas | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2219 | Tournament at Camelot | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2220 | Rival Restaurants | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2221 | Puzzle Strike: Third Edition | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2222 | Silver | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2223 | Leonardo da Vinci | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2224 | The Light in the Mist | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2225 | Rise of Empires | c | done | [link](https://bghub.org/r/rise-of-empires.pdf) | rulebook 明文:金幣同資源碟各每 3 個 1 分捨去 |
| 2226 | The U.S. Civil War | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2227 | War Room | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2228 | Age of War | b | done | — | 放寬尺度後直接生成 |
| 2229 | Smash Up: The Obligatory Cthulhu Set | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2230 | Legendary Encounters: A Firefly Deck Building Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2231 | Ticket to Ride: First Journey (Europe) | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2232 | Memoarrr! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2233 | Machi Koro Legacy | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2234 | Love Letter: The Hobbit – The Battle of the Five Armies | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2235 | Night of the Ninja | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2236 | The Ancient World | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2237 | Gaslands: Refuelled | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2238 | LUNA Capital | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2239 | Empyreal: Spells & Steam | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2240 | Dominations: Road to Civilization | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2241 | Successors: The Battles for Alexander's Empire | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2242 | Unmatched: For King and Country | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2243 | Helvetia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2244 | Pax Transhumanity | c | done | [link](https://bghub.org/r/pax-transhumanity.pdf) | rulebook 明文三種結局計分法;卡上 VP 值故 number,未來衝擊每特工 1 分明文 |
| 2245 | The Great Heartland Hauling Co. | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2246 | A House Divided: War Between the States 1861-65 | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2247 | Set & Match | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2248 | Ascension: Rise of Vigil | b | done | — | 放寬尺度後直接生成 |
| 2249 | Unconditional Surrender! World War 2 in Europe | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2250 | Trek 12: Himalaya | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2251 | Hearts | b | done | — | 放寬尺度後直接生成 |
| 2252 | Cold War: CIA vs KGB | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2253 | Joan of Arc: Orléans Draw & Write | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2254 | Core Space | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2255 | Panda Spin | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2256 | The Russian Campaign | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2257 | Sardegna | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2258 | Container | c | done | [link](https://bghub.org/r/container.pdf) | rulebook 明文:船/離岸 $3、港口 $2、工廠 $0、貸款 -$11、雙值色 $10 或 $5 |
| 2259 | Trambahn | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2260 | Nimalia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2261 | Pit | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2262 | Origins: First Builders | c | done | [link](https://bghub.org/r/origins-first-builders.pdf) | rulebook 明文:剩金每個 1 分、神廟軌去最高計其餘兩個、寶座骰值×同色塔高 |
| 2263 | Evo (Second Edition) | b | done | — | 放寬尺度後直接生成 |
| 2264 | Space Cadets: Dice Duel | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2265 | Château Roquefort | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2266 | Pampero | c | done | [link](https://bghub.org/r/pampero.pdf) | rulebook 明文:錢最多者勝,冇獨立 VP 系統,只做一欄現金 |
| 2267 | New Bedford | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2268 | Tiny Epic Western | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2269 | Hoity Toity | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2270 | Dealt! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2271 | Risk: Europe | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2272 | Smash Up: Cease and Desist | b | done | — | 放寬尺度後直接生成 |
| 2273 | Odin's Ravens | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2274 | Transatlantic | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2275 | Qin | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2276 | Xiangqi | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2277 | Hidden Leaders | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2278 | Terramara | c | done | [link](https://bghub.org/r/terramara.pdf) | rulebook 明文:軍事 8/5/2、商隊 8/5/3、預留神器 5、原料半分精煉 1 分;計分項目清單見 Game End Scoring |
| 2279 | Caesar's Empire | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2280 | Québec | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2281 | Expedition: Northwest Passage – HMS Terror Edition | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2282 | Nevsky: Teutons and Rus in Collision 1240-1242 | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2283 | Axis & Allies: 1942 | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2284 | Ticket to Ride: First Journey (U.S.) | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2285 | Empires in Arms | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2286 | Autobahn | c | no-source | [link](https://bghub.org/r/autobahn.pdf) | 再試 pdftotext -layout 都抽唔到第 15 頁計分表(純圖);正文只講到「大堂同頭三個部門」,講唔出邊三個部門,唔硬砌 |
| 2287 | Village Green | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2288 | Big City | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2289 | Dragonfire | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2290 | König von Siam | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2291 | A Game of Thrones: Hand of the King | b | done | — | 放寬尺度後直接生成 |
| 2292 | The Thing: Infection at Outpost 31 | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2293 | Antike Duellum | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2294 | The Rise of Queensdale | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2295 | Nefertiti | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2296 | Forestry | c | done | [link](https://bghub.org/r/forestry.pdf) | 用玩家 END OF THE GAME AND SCORING(line 4401),唔係 forester 單人對手嗰段;剩餘每 3 件 1 分同木材 1 分明文 |
| 2297 | Ra: The Dice Game | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2298 | Great Western Trail: El Paso | c | done | [link](https://bghub.org/r/greatwesterntrailelpaso.pdf) | rulebook 明文 7 大類;每 $5 得 1 分、西門塔爾格 +2 明文 |
| 2299 | Quartermaster General: 1914 | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2300 | Jungo | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2301 | Bristol 1350 | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2302 | A Song of Ice & Fire: Tabletop Miniatures Game – Stark vs Lannister Starter Set | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2303 | Dice Throne: Season One ReRolled – Pyromancer v. Shadow Thief | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2304 | Cytosis: A Cell Biology Board Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2305 | Star Trek: Attack Wing | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2306 | You're Bluffing! | b | done | — | 放寬尺度後直接生成 |
| 2307 | Flesh and Blood | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2308 | Holmes: Sherlock & Mycroft | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2309 | 5-Minute Marvel | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2310 | Historia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2311 | Spirits of the Forest | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2312 | Frank's Zoo | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2313 | The New Era | c | done | [link](https://bghub.org/r/thenewera.pdf) | rulebook 明文:基地卡標記 + 地點卡標記 + 國家內每個地點 1 分 |
| 2314 | Seikatsu | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2315 | A Castle for All Seasons | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2316 | La Boca | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2317 | Cyberion | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2318 | Four Against Darkness | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2319 | Spades | b | done | — | 放寬尺度後直接生成 |
| 2320 | Samurai Sword | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2321 | Arkham Horror: Lovecraft Letter | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2322 | Seeland | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2323 | House of Fado | c | done | [link](https://bghub.org/r/house-of-fado.pdf) | rulebook 明文:每 5 蚊 1 分、法朵磚上限 15 分;星星同法朵對照表印喺圖故 number |
| 2324 | Napoléon: The Waterloo Campaign, 1815 | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2325 | Citrus | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2326 | Dice Throne: Season One ReRolled – Monk v. Paladin | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2327 | City of Iron | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2328 | Great Plains | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2329 | B-17: Queen of the Skies | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2330 | Unlock!: Mystery Adventures – The Tonipal's Treasure | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2331 | D-Day Dice (Second Edition) | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2332 | SNCF: France & Germany | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2333 | SPQR (Deluxe Edition) | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2334 | Tinderblox | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2335 | Carcassonne: Gold Rush | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2336 | The Elder Scrolls V: Skyrim – The Adventure Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2337 | Wits & Wagers Family | b | done | — | 放寬尺度後直接生成 |
| 2338 | Trans Europa | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2339 | The Boss | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2340 | Dice Throne: Season One ReRolled – Treant v. Ninja | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2341 | Diamonds Club | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2342 | Keltis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2343 | Marvel Zombies: Heroes' Resistance | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2344 | Tiwanaku | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2345 | Railway Boom | c | done | [link](https://bghub.org/r/railway-boom.pdf) | rulebook 明文:每 2 資源 1 分、指定鐵路每標記 2 分 |
| 2346 | Claim 2 | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2347 | Snake Oil | b | done | — | 放寬尺度後直接生成 |
| 2348 | Mare Nostrum | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2349 | Krosmaster: Arena | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2350 | Maple Valley | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2351 | Steam Time | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2352 | Escape the Dark Sector | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2353 | Namiji | c | done | [link](https://bghub.org/r/namiji.pdf) | rulebook 明文:早鳥 7/5/3、供品最多 -15 |
| 2354 | Sagrada Artisans | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2355 | The Red Dragon Inn 3 | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2356 | Ribbit | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2357 | Match of the Century | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2358 | Medium | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2359 | Exodus: Proxima Centauri | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2360 | Steel Driver | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2361 | Mysthea | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2362 | Harbour | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2363 | Pyramid of Pengqueen | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2364 | Ayar: Children of the Sun | c | done | [link](https://bghub.org/r/ayarchildrenofthesun.pdf) | 終局分數係太陽/月亮兩軌較低嗰個,唔係加總,所以只做一欄避免加錯 |
| 2365 | Project: ELITE | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2366 | Boss Monster 2: The Next Level | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2367 | Tournament at Avalon | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2368 | The Chameleon | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2369 | Kolejka | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2370 | Royal Visit | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2371 | Warhammer: Diskwars | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2372 | Unmatched: The Witcher – Steel and Silver | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2373 | Anomia: Party Edition | b | done | — | 放寬尺度後直接生成 |
| 2374 | Legends of Andor: The Last Hope | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2375 | Balderdash | b | done | — | 放寬尺度後直接生成 |
| 2376 | Founding Fathers | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2377 | Imperial Miners | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2378 | Money! | b | done | — | 放寬尺度後直接生成 |
| 2379 | Mantis Falls | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2380 | Secret Identity | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2381 | Dragonwood | b | done | — | 放寬尺度後直接生成 |
| 2382 | Unmatched: Buffy the Vampire Slayer | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2383 | Hamlet: The Village Building Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2384 | Royal Palace | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2385 | Poetry for Neanderthals | b | done | — | 放寬尺度後直接生成 |
| 2386 | Spring Meadow | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2387 | 5 Towers | c | done | [link](https://bghub.org/r/5-towers.pdf) | rulebook 明文:無頂 1 分/張、有頂 2 分/張、主塔 +1 分/張、拆卸堆 -1/-2/-3… |
| 2388 | Rise & Fall | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2389 | Aeon's End: Legacy of Gravehold | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2390 | Taco Cat Goat Cheese Pizza | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2391 | Diced Veggies | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2392 | Altar Quest | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2393 | Spooktacular | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2394 | Resurgence | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2395 | Legend of the Five Rings | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2396 | Dodos Riding Dinos | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2397 | A Victory Lost: Crisis in Ukraine 1942-1943 | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2398 | On the Underground: London / Berlin | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2399 | Wasabi! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2400 | Catapult Feud | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2401 | Dr. Eureka | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2402 | Disney Villainous: Bigger and Badder | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2403 | Coal Baron: The Great Card Game | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2404 | EXIT: The Game – Theft on the Mississippi | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2405 | Relic | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2406 | Moon | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2407 | Capital Lux 2: Generations | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2408 | Zapotec | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2409 | Aqualin | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2410 | Lignum (Second Edition) | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2411 | Ruins | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2412 | La Granja: No Siesta | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2413 | EXIT: The Game – Kidnapped in Fortune City | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2414 | Kluster | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2415 | Nine Tiles Panic | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2416 | Eurorails | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2417 | Red Outpost | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2418 | Bootleggers | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2419 | Deckers | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2420 | Kepler-3042 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2421 | Wispwood | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2422 | Mindbug: Beyond Eternity | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2423 | Edo | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2424 | Breakout: Normandy | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2425 | HeroQuest Advanced Quest | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2426 | DungeonQuest | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2427 | Panda Royale | b | done | — | 放寬尺度後直接生成 |
| 2428 | Riff Raff | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2429 | Forge War | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2430 | Iron Helm | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2431 | Field Commander: Napoleon | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2432 | Pathfinder Adventure Card Game: Core Set | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2433 | Heroscape Marvel: The Conflict Begins | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2434 | Oros | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2435 | A Game of Thrones: Catan – Brotherhood of the Watch | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2436 | Don't Get Got! | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2437 | Rommel in the Desert | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2438 | Lifeboats | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2439 | Hoplomachus: Remastered | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2440 | Rise to Nobility | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2441 | Successors (Fourth Edition) | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2442 | Hues and Cues | b | done | — | 放寬尺度後直接生成 |
| 2443 | Scrabble | b | done | — | 放寬尺度後直接生成 |
| 2444 | Bios: Genesis | c | done | [link](https://bghub.org/r/bios-genesis.pdf) | rulebook I1 明文:方塊/生命體/戰利品各 1 分、營養層優勢 6 或 12 分 |
| 2445 | Familiar Tales | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2446 | Quacks & Co.: Quedlinburg Dash | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2447 | Cthulhu Realms | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2448 | Mycelia | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2449 | Mafia de Cuba | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2450 | Shamans | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2451 | Archaeology: The Card Game | b | done | — | 放寬尺度後直接生成 |
| 2452 | Quest | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2453 | Shadow Kingdoms of Valeria | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2454 | 300: Earth & Water | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2455 | Um Reifenbreite | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2456 | Hands in the Sea | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2457 | Yunnan | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2458 | Terra | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2459 | John Company | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2460 | Wits & Wagers: It's Vegas, Baby! | b | done | — | 放寬尺度後直接生成 |
| 2461 | Pax Pamir | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2462 | Arena: Roma II | c | done | [link](https://bghub.org/r/arena-roma-ii.pdf) | rulebook 明文:VP 存量耗盡即完場,最多 VP 者勝 |
| 2463 | Mini Express | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2464 | Lure | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2465 | Ground Floor | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2466 | Catan Histories: Settlers of America – Trails to Rails | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2467 | Shadows of Brimstone: Forbidden Fortress | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2468 | DC Comics Dice Masters: Justice League | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2469 | 1754: Conquest – The French and Indian War | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2470 | City of Horror | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2471 | Cutthroat Caverns | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2472 | Inkognito | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2473 | Dungeons & Dragons Dice Masters: Battle for Faerûn | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2474 | Ratzia | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2475 | Herd Mentality | b | done | — | 放寬尺度後直接生成 |
| 2476 | Taboo | b | done | — | 放寬尺度後直接生成 |
| 2477 | Kingdom Crossing | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2478 | Cuzco | c | done | [link](https://bghub.org/r/cuzco.pdf) | rulebook 明文:Inti 獎章 2 分、六個面具板成就 9/6/9/6/10/12 分全有全冇 |
| 2479 | Ascension: Realms Unraveled | b | done | — | 放寬尺度後直接生成 |
| 2480 | Votes for Women | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2481 | The Hanging Gardens | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2482 | Castellion | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2483 | Horus Heresy | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2484 | Legendary: Buffy The Vampire Slayer | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2485 | Beyond Baker Street | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2486 | Sorcerer | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2487 | Lotus | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2488 | Star Wars Villainous: Power of the Dark Side | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2489 | Serenissima | c | no-source | [link](https://bghub.org/r/serenissima.pdf) | PDF 只抽到 79 行,完全冇計分段落 |
| 2490 | Bob Ross: Art of Chill Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2491 | Codenames: Deep Undercover | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2492 | Wild: Serengeti | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2493 | Riichi Mahjong | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2494 | Skat | b | done | — | 放寬尺度後直接生成 |
| 2495 | Twilight Struggle: Red Sea – Conflict in the Horn of Africa | - | skip | — | 戰棋/劇本制遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2496 | Kōhaku | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2497 | EXIT: The Game – Advent Calendar: The Hunt for the Golden Book | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2498 | Res Arcana Duo | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2499 | Santa's Workshop (Second Edition) | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2500 | Cube Quest | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2501 | Gloom | b | done | — | 放寬尺度後直接生成 |
| 2502 | Palastgeflüster | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2503 | Custom Heroes | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2504 | Show Manager | b | done | — | 放寬尺度後直接生成 |
| 2505 | Impulse | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2506 | Conquest of the Empire | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2507 | Cascadia: Rolling Rivers | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2508 | Jórvík | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2509 | Escape from Colditz | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2510 | Europe Engulfed: WWII European Theatre Block Game | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2511 | Excavation Earth | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2512 | Marvel United: Spider-Geddon | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2513 | Mandala Stones | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2514 | Dimension | b | done | — | 放寬尺度後直接生成 |
| 2515 | March of the Ants | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2516 | Godzilla: Tokyo Clash | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2517 | The Dresden Files Cooperative Card Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2518 | Theseus: The Dark Orbit | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2519 | Hidden Games Crime Scene: The New Haven Case | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2520 | Stop Thief! | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2521 | Fiesta de los Muertos | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2522 | KeyForge: Worlds Collide | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2523 | Ragusa | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2524 | Thunderstone Advance: Numenera | b | done | — | 放寬尺度後直接生成 |
| 2525 | City of Spies: Estoril 1942 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2526 | Take it Easy! | b | done | — | 放寬尺度後直接生成 |
| 2527 | Alice's Garden | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2528 | Ardennes '44: The Battle of the Bulge | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2529 | FITS | b | done | — | 放寬尺度後直接生成 |
| 2530 | Bandido | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2531 | Seaside | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2532 | Schotten Totten 2 | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2533 | Sub Terra II: Inferno's Edge | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2534 | The Builders: Middle Ages | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2535 | Elasund: The First City | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2536 | Compile: Main 2 | c | skip | [link](https://bghub.org/r/compile-main-2.pdf) | rulebook 明文:編譯齊 3 個協定即勝,冇累加計分 |
| 2537 | Altered | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2538 | Hornet Leader: Carrier Air Operations | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2539 | Compounded | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2540 | Hunt for the Ring | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2541 | DungeonQuest (Third Edition) | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2542 | GoodCritters | b | done | — | 放寬尺度後直接生成 |
| 2543 | Waste Knights: Second Edition | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2544 | Star Trek Panic | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2545 | Monasterium | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2546 | Marvel Villainous: Infinite Power | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2547 | Wreck Raiders | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2548 | Warhammer Underworlds: Nightvault | b | done | — | 放寬尺度後直接生成 |
| 2549 | Kero | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2550 | Archeos Society | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2551 | Framework | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2552 | XenoShyft: Dreadmire | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2553 | Rallyman: DIRT | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2554 | 1882: Assiniboia | b | done | — | 放寬尺度後直接生成 |
| 2555 | Ohne Furcht und Adel Sonderausgabe | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2556 | Heart of Crown | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2557 | Once Upon a Time: The Storytelling Card Game | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2558 | Bosk | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2559 | Reforest | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2560 | Carcassonne: Star Wars | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2561 | 2 de Mayo | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2562 | Nuns on the Run | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2563 | Got Five! | c | skip | [link](https://bghub.org/r/got-five.pdf) | rulebook 明文:估中即刻贏,冇累加計分 |
| 2564 | Viking See-Saw | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2565 | Unicorn Fever | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2566 | Ghosts of Christmas | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2567 | Alubari: A Nice Cup of Tea | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2568 | Leaf | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2569 | D.E.I.: Divide et Impera | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2570 | Pathfinder Adventure Card Game: Wrath of the Righteous – Base Set | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2571 | Gaslands: Post-Apocalyptic Vehicular Combat | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2572 | Sail to India | c | done | — | desc-gen:冇 rulebook,靠 BGG 描述同機制判斷寫類別,零單價,有 catch-all |
| 2573 | Dungeon Universalis | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2574 | Monolith Arena | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2575 | Tiny Epic Defenders (Second Edition) | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2576 | King of the Dice | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2577 | Enemy Action: Ardennes | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2578 | Flip 7: With A Vengeance | b | done | — | 放寬尺度後直接生成 |
| 2579 | Metro | b | done | — | 放寬尺度後直接生成 |
| 2580 | Race! Formula 90 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2581 | Hellapagos | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2582 | Glüx | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2583 | Sails of Glory | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2584 | Set a Watch: Swords of the Coin | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2585 | DungeonQuest: Revised Edition | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2586 | Human Punishment: Social Deduction 2.0 | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2587 | Codenames: Disney – Family Edition | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2588 | The Grizzled: Armistice Edition | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2589 | March of the Ants: Evolved Edition | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2590 | Trailblazer: The John Muir Trail | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2591 | Emberheart | c | done | [link](https://bghub.org/r/emberheart.pdf) | rulebook 明文五大類;榮耀值印喺卡同軌故 number,火焰軌相對距離刻度亦係圖 |
| 2592 | Dragons of Etchinstone | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2593 | Monster Slaughter | - | skip | — | 戰棋/劇本制/微縮對戰遊戲,以陣營或劇本勝利條件定勝負,無統一累加計分 |
| 2594 | Sunset Over Water | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2595 | Ticket to Ride: San Francisco | b | done | — | 放寬尺度後直接生成 |
| 2596 | Café Baras | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2597 | Quests of Valeria | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2598 | Time of Soccer | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2599 | Riverside | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2600 | Tanto Cuore | b | done | — | 放寬尺度後直接生成 |
| 2601 | Subbuteo | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2602 | Mind the Lines | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2603 | Versailles 1919 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2604 | Wings of War: Watch Your Back! | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2605 | Alea Iacta Est | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2606 | Covert | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2607 | Comanchería: The Rise and Fall of the Comanche Empire | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2608 | Corrosion | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2609 | Teenage Mutant Ninja Turtles: Shadows of the Past | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2610 | The Flow of History | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2611 | Snailed It! | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2612 | City of Iron: Second Edition | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2613 | Catan: Junior | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2614 | Timeline Challenge | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2615 | DC Deck-Building Game: Forever Evil | b | done | — | 放寬尺度後直接生成 |
| 2616 | Marvel Dice Masters: Age of Ultron | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2617 | Kneipenquiz: Das Original | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2618 | Undaunted 2200: Callisto | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2619 | Cathedral | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2620 | Sea Dragons | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2621 | Guilds of London | c | done | [link](https://bghub.org/r/guildsoflondon.pdf) | rulebook 明文終局兩項(市長獎勵卡、相鄰大師);具體分值印喺卡同板故 number |
| 2622 | Dynasties: Heirate & Herrsche | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2623 | Aqua Garden | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2624 | Mistwind | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2625 | Forbidden Jungle | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2626 | Valletta | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2627 | Pente | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2628 | American Rails | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2629 | Space Cadets | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2630 | A Message From the Stars | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2631 | Fighting Formations: Grossdeutschland Motorized Infantry Division | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2632 | Durian | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2633 | Cinque Terre | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2634 | Master of Orion: The Board Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2635 | Court of the Dead: Mourners Call | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2636 | Perikles | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2637 | The Edge: Dawnfall | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2638 | Rise and Decline of the Third Reich | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2639 | Warriors of God: The Wars of England & France, 1135-1453 | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2640 | Flatline | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2641 | Now Boarding | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2642 | Infinity N3: Core Book | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2643 | Tsukuyumi: Full Moon Down | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2644 | Isla Dorada | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2645 | Urban Sprawl | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2646 | Wealth of Nations | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2647 | Oltre Mare | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2648 | Heimlich & Co. | b | done | — | 放寬尺度後直接生成 |
| 2649 | The Princes of Machu Picchu | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2650 | A Fistful of Meeples | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2651 | Zona: The Secret of Chernobyl | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2652 | Amritsar: The Golden Temple | c | done | [link](https://bghub.org/r/amritsarthegoldentemple.pdf) | rulebook 明文:知識磚終局每項 1 PP;捐獻格同神廟磚分值印喺配件故 number |
| 2653 | Oak | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2654 | Bier Pioniere | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2655 | Sleeping Queens | b | done | — | 放寬尺度後直接生成 |
| 2656 | Era of Tribes | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2657 | Aqua: Biodiversity in the Oceans | c | done | [link](https://bghub.org/r/aqua-biodiversity-in-the-oceans.pdf) | rulebook 明文核心生態系乘數 3/3/2/4/3/1;動物同礁分值印喺磚故 number |
| 2658 | Seize the Bean | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2659 | WW2: Barbarossa to Berlin | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2660 | Mall of Horror | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2661 | Ticket to Ride: Amsterdam | b | done | — | 放寬尺度後直接生成 |
| 2662 | Pastiche | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2663 | Dungeon Alliance | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2664 | Night of the Living Dead: A Zombicide Game | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2665 | Gods Love Dinosaurs | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2666 | My First Stone Age | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2667 | Dragonheart | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2668 | Suspects: Claire Harper Takes the Stage | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2669 | Monster Lands | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2670 | Time's Up! Deluxe | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2671 | Time of Legends: Joan of Arc | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2672 | Epic Spell Wars of the Battle Wizards: Duel at Mt. Skullzfyre | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2673 | Poison | b | done | — | 放寬尺度後直接生成 |
| 2674 | East India Companies | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2675 | Around the World in 80 Days | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2676 | Bottom of the 9th | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2677 | Victory in the Pacific | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2678 | Tesseract | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2679 | Campaign Manager 2008 | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2680 | Drako: Dragon & Dwarves | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2681 | Pericles: The Peloponnesian Wars | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2682 | Books of Time | c | done | [link](https://bghub.org/r/books-of-time.pdf) | rulebook 明文:文明板領先每頁 2 分、剩餘每 5 件 1 分 |
| 2683 | Isle of Trains: All Aboard | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2684 | Whale Riders | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2685 | Ace of Spades | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2686 | Castaways | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2687 | Chicken Cha Cha Cha | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2688 | Dungeon Twister 2: Prison | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2689 | Hermagor | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2690 | Mini Rails | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2691 | Sleeping Gods: Primeval Peril | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2692 | Cheating Moth | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2693 | Monopoly Deal Card Game | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2694 | The Adventurers: The Pyramid of Horus | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2695 | League of Six | c | done | [link](https://bghub.org/r/league-of-six.pdf) | rulebook 明文:影響力最多者勝,開局 10 點;冇獨立終局結算 |
| 2696 | 1822: The Railways of Great Britain | b | done | — | 放寬尺度後直接生成 |
| 2697 | Drum Roll | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2698 | Panic on Wall Street! | c | done | [link](https://bghub.org/r/panic-on-wall-street.pdf) | rulebook 明文:錢最多者勝,經理同投資者各一個贏家 |
| 2699 | Agents of SMERSH | - | skip | — | 合作/單人遊戲,無玩家累加計分 |
| 2700 | Monza | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2701 | Fairy Ring | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2702 | Good Cop Bad Cop | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2703 | Remember Our Trip | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2704 | In Front of the Elevators | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2705 | Il Vecchio | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2706 | Kingdomino Duel | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2707 | Chronicle | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2708 | Android: Infiltration | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2709 | Fortress America | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2710 | King of Monster Island | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2711 | Conquest of Paradise | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2712 | Illuminati | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2713 | Lone Wolves | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2714 | EXIT: The Game – The Enchanted Forest | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2715 | Tower of Babel | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2716 | Crusade and Revolution: The Spanish Civil War, 1936-1939 | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2717 | 1870: Railroading Across the Trans Mississippi from 1870 | b | done | — | 放寬尺度後直接生成 |
| 2718 | My Gold Mine | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2719 | Space Explorers | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2720 | Nightfall | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2721 | Duel of Ages II | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2722 | To Court the King | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2723 | River Dragons | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2724 | Doppelkopf | b | done | — | 放寬尺度後直接生成 |
| 2725 | Jekyll & Hyde vs Scotland Yard | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2726 | Zombie 15' | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2727 | Metal Gear Solid: The Board Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2728 | Days of Ire: Budapest 1956 | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2729 | Frostgrave | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2730 | Copycat | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2731 | Legendary Encounters: The X-Files Deck Building Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2732 | Tiny Epic Vikings | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2733 | The Name of the Rose | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2734 | EXIT: The Game – The Gate Between Worlds | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2735 | EXIT: The Game – Advent Calendar: The Silent Storm | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2736 | Pick Picknic | b | done | — | 放寬尺度後直接生成 |
| 2737 | MicroMacro: Crime City – Showdown | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2738 | Dual Powers: Revolution 1917 | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2739 | Long Shot | b | done | — | 放寬尺度後直接生成 |
| 2740 | Thunder & Lightning | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2741 | Ceres | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2742 | Villa Paletti | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2743 | Caesar & Cleopatra | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2744 | Yokai Pagoda | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2745 | Heroscape Master Set:  Battle for the Underdark | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2746 | The King's Guild | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2747 | Founders of Gloomhaven | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2748 | Dig Your Way Out | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2749 | Piece o' Cake | b | done | — | 放寬尺度後直接生成 |
| 2750 | The Ark of the Covenant | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2751 | The Siege of Runedar | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2752 | 20th Century | c | done | [link](https://bghub.org/r/20th-century.pdf) | rulebook 明文第六回合獎勵:垃圾 -5/-10/-15、商業同科學 8/5/3/1;乾淨地 2-4 分視污染標記故 number |
| 2753 | Rum & Bones | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2754 | Dice Realms | c | done | [link](https://bghub.org/r/dice-realms.pdf) | bghub 嗰份係 player guide 唔係規則書,只夠寫兩大類(VP 籌碼 + 升級骰面),一個單價都冇寫 |
| 2755 | Scattergories | b | done | — | 放寬尺度後直接生成 |
| 2756 | Solstis | c | done | [link](https://bghub.org/r/solstis.pdf) | rulebook 明文:全景每磚 1 星、火每個 1 星、精靈每個 1 星(邪惡精靈令兩個唔計) |
| 2757 | Red November | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2758 | Word on the Street | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2759 | Zug um Zug: Deutschland | b | done | — | 放寬尺度後直接生成 |
| 2760 | Confusion: Espionage and Deception in the Cold War | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2761 | Potato Man | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2762 | Bohnanza: The Duel | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2763 | Dreamscape | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2764 | Samarkand: Routes to Riches | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2765 | My Shelfie | c | done | [link](https://bghub.org/r/my-shelfie.pdf) | rulebook 明文:個人目標 1/2/4/6/9/12、群組 3/4/5/6+ 得 2/3/5/8 |
| 2766 | Robotrick | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2767 | Time's Up! Family | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2768 | Savernake Forest | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2769 | Wonder Book | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2770 | Skytear Horde | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2771 | Welcome to New Las Vegas | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2772 | The Game: Face to Face | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2773 | BOOoop. | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2774 | EXIT: The Game – The House of Riddles | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2775 | Machi Koro: Bright Lights, Big City | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2776 | Florenza | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2777 | Loot | b | done | — | 放寬尺度後直接生成 |
| 2778 | Iron Dragon | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2779 | Invincible: The Hero-Building Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2780 | Freshwater Fly | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2781 | We the People | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2782 | Tír na nÓg | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2783 | Sylla | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2784 | Wings of War: Deluxe Set | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2785 | Lost Cities: Roll & Write | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2786 | Deckscape: Test Time | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2787 | Lords of Scotland | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2788 | Boss Monster: The Dungeon Building Card Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2789 | Run, Fight, or Die! | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2790 | Zombie Dice | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2791 | Inca Empire | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2792 | High Frontier (Third Edition) | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2793 | Oasis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2794 | Star Wars Customizable Card Game | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2795 | Mind Space | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2796 | Risk: The Lord of the Rings Trilogy Edition | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2797 | Age of Comics: The Golden Years | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2798 | Triqueta | c | done | [link](https://bghub.org/r/triqueta.pdf) | rulebook 明文:0/1/2 隻得 0/1/2 分、剛好 3 隻攞印住值、超過每多一隻 -1;起始石 1 分、樹磚 1 分 |
| 2799 | Oh Hell! | b | done | — | 放寬尺度後直接生成 |
| 2800 | The Ravens of Thri Sahashri | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2801 | Shadowrift | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2802 | Last Night on Earth: Timber Peak | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2803 | Small Samurai Empires | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2804 | Atlantic Star | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2805 | Iron Curtain | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2806 | Echoes of Time | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2807 | Quirky Circuits | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2808 | Dale of Merchants 3 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2809 | Four Gardens | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2810 | That's Life! | b | done | — | 放寬尺度後直接生成 |
| 2811 | Amun-Re: 20th Anniversary Edition | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2812 | Beyond the Horizon | c | done | [link](https://bghub.org/r/beyond-the-horizon.pdf) | rulebook 明文:目標 5/3 分、科技 1/2/3/4 分、投資軌第九格後每個 +1 |
| 2813 | Pandemic: Rapid Response | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2814 | Crusader Rex | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2815 | Colt Super Express | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2816 | The Binding of Isaac: Four Souls | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2817 | Intarsia | c | done | [link](https://bghub.org/r/intarsia.pdf) | rulebook 明文:飾品 1/3/7/12 分、連接件每個 2 分 |
| 2818 | El Gaucho | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2819 | Sunrise Lane | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2820 | Gandhi: The Decolonization of British India, 1917 – 1947 | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2821 | Lucky Numbers | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2822 | Mythotopia | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2823 | First Contact | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2824 | Pokémon Trading Card Game | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2825 | Werewolf | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2826 | Tulip Bubble | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2827 | Ta Yü | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2828 | Regicide Legacy | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2829 | Super Dungeon Explore | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2830 | Tiny Epic Mechs | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2831 | Tokyo Highway: 2 Players Version | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2832 | Landmarks | c | skip | [link](https://bghub.org/r/landmarks.pdf) | rulebook 明文:團隊搵寶,達成即勝/被詛咒即敗,冇累加計分 |
| 2833 | Mountains of Madness | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2834 | YRO | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2835 | The Quacks of Quedlinburg: The Duel | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2836 | Lost Legacy: The Starship | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2837 | Warhammer Quest: Silver Tower | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2838 | Unmatched: The Witcher – Realms Fall | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2839 | Freedom Five: A Sentinel Comics Board Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2840 | Arena: The Contest | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2841 | Village Attacks | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2842 | Greed | b | done | — | 放寬尺度後直接生成 |
| 2843 | BattleCON: Fate of Indines | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2844 | Kingsport Festival | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2845 | Code 777 | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2846 | Portal of Heroes | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2847 | Ceylon | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2848 | Victorian Masterminds | c | done | [link](https://bghub.org/r/victorian-masterminds.pdf) | rulebook 明文:建築 2 分、任務 2-4 分、混亂標記 2 分、手稿 1-2 分 |
| 2849 | Modern Art Card Game | b | done | — | 放寬尺度後直接生成 |
| 2850 | Transmissions | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2851 | Big Shot | b | done | — | 放寬尺度後直接生成 |
| 2852 | Deliverance | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2853 | Via Magica | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2854 | PÜNCT | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2855 | Steam Power | c | done | [link](https://bghub.org/r/steam-power.pdf) | rulebook 明文:每 $5 得 1 分、工廠 2+1 分、勝利分城市 4+1 分平分 |
| 2856 | Brotherhood & Unity | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2857 | Hera and Zeus | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2858 | Mantis | b | done | — | 放寬尺度後直接生成 |
| 2859 | Valdora | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2860 | General Orders: World War II | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2861 | SOS Titanic | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2862 | King's Forge | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2863 | Nunatak: Temple of Ice | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2864 | Police Precinct | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2865 | Silent Victory: U.S. Submarines in the Pacific, 1941-45 | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2866 | Orbis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2867 | Space Park | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2868 | Take 5! | b | done | — | 放寬尺度後直接生成 |
| 2869 | Fresh Fish | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2870 | Vegetable Stock | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2871 | Moonrollers | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2872 | Richard III: The Wars of the Roses | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2873 | Sea of Clouds | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2874 | OddVille | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2875 | Sonora | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2876 | Hitster: Summer Party | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2877 | Company of Heroes | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2878 | Micropolis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2879 | Planet Apocalypse | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2880 | The Lord of the Rings Trading Card Game | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2881 | The Game: Extreme | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2882 | Unlock!: Secret Adventures – A Noside Story | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2883 | Penguin Party | b | done | — | 放寬尺度後直接生成 |
| 2884 | The World of SMOG: Rise of Moloch | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2885 | Assyria | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2886 | Catch the Moon | b | done | — | 放寬尺度後直接生成 |
| 2887 | Piña Coladice | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2888 | Happy City | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2889 | Point Galaxy | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2890 | Age of Conan: The Strategy Board Game | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2891 | Skate Summer | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2892 | Carnuta | c | done | [link](https://bghub.org/r/carnuta.pdf) | rulebook 明文 8 種材料(日:三葉草/花/蛋/蜂蜜;夜:骷髏/蝴蝶/漿果/蘑菇),逐欄計分;卡面分值故 number |
| 2893 | Propolis | c | done | [link](https://bghub.org/r/propolis.pdf) | 用多人 SCORING(line 300)唔係 solo 段;未用資源 ÷5 捨去明文 |
| 2894 | Asante | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2895 | Sword & Sorcery: Ancient Chronicles | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2896 | Spire's End | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2897 | Legendary: A James Bond Deck Building Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2898 | Krazy Wordz: Nicht 100% jugendfrei | b | done | — | 放寬尺度後直接生成 |
| 2899 | Joyride: Survival of the Fastest | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2900 | BattleTech: A Game of Armored Combat | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2901 | Avalon: Big Box | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2902 | 1944: Race to the Rhine | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2903 | Mythic Battles: Ragnarök | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2904 | BattleTech: Introductory Box Set | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2905 | Mesos | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2906 | Kokoro: Avenue of the Kodama | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2907 | Safranito | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2908 | Flying Colors | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2909 | Stay Cool | b | done | — | 放寬尺度後直接生成 |
| 2910 | Horse Fever | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2911 | Equinox | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2912 | Conquest of Planet Earth: The Space Alien Game | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2913 | Mobile Markets: A Smartphone Inc. Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2914 | Skull Tales: Full Sail! | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2915 | Wings of War: Burning Drachens | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2916 | EXIT: The Game – The Cemetery of the Knight | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2917 | R-Eco | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2918 | Kokopelli | c | done | [link](https://bghub.org/r/kokopelli.pdf) | rulebook 明文:VP 標記最多者勝,冇獨立終局結算 |
| 2919 | Lift Off | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2920 | Mercado de Lisboa | c | done | [link](https://bghub.org/r/mercado-de-lisboa.pdf) | rulebook 明文:錢最多者勝,每塊未擺放餐廳磚 -1 |
| 2921 | Overbooked | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2922 | Magnum Sal | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2923 | Undergrove | c | done | [link](https://bghub.org/r/undergrove.pdf) | rulebook 明文:累計型目標軌 3/5/9 分、剩餘每 2 個 1 分;蘑菇分值印喺磚故 number |
| 2924 | New Amsterdam | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2925 | Ascension: Darkness Unleashed | b | done | — | 放寬尺度後直接生成 |
| 2926 | The Great War | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2927 | Pax Viking | c | skip | [link](https://bghub.org/r/pax-viking.pdf) | rulebook 明文:達成勝利條件卡即勝,冇累加計分 |
| 2928 | Medical Mysteries: NYC Emergency Room | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2929 | Stranger Things: Upside Down | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2930 | Twixt | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2931 | Key to the City: London | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2932 | Mage Wars Academy | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2933 | Funkenschlag | b | done | — | 放寬尺度後直接生成 |
| 2934 | Monikers: Serious Nonsense | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2935 | Xenon Profiteer | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2936 | Powerboats | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2937 | The Napoleonic Wars (Second Edition) | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2938 | Mythical Dice | c | done | [link](https://bghub.org/r/mythical-dice.pdf) | rulebook 明文:每墩 20 分、差一墩 -10、叫零 ±10×局數、牛頭人 30、美人魚 50 |
| 2939 | Ancient Terrible Things | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2940 | Big Boggle | b | done | — | 放寬尺度後直接生成 |
| 2941 | Tipperary | c | done | [link](https://bghub.org/r/tipperary.pdf) | rulebook 明文:區域每格 1 分、羊每隻 1 分、最大羊群標記 +5、圍封家鄉 5 分 |
| 2942 | Alien Artifacts | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2943 | The River | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2944 | Fossilis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2945 | My Farm Shop | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2946 | Caldera Park | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2947 | Power Plants | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2948 | Helios | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2949 | Blockers! | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2950 | Lawyer Up | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2951 | Würfel Bohnanza | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2952 | 12 Chip Trick | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2953 | Edel, Stein & Reich | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2954 | Sobek | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2955 | P.I. | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2956 | A la carte | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2957 | Deal with the Devil | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2958 | The Witcher: Path of Destiny | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2959 | Subastral | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2960 | Enchanters | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2961 | Thunderstone Advance: Worlds Collide | b | done | — | 放寬尺度後直接生成 |
| 2962 | Happy Pigs | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2963 | Fields of Fire: Deluxe Edition | c | skip | [link](https://bghub.org/r/fields-of-fire-deluxe-edition.pdf) | 單人戰役制戰棋,冇玩家間累加計分 |
| 2964 | Crypt | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2965 | Rocketmen | c | done | [link](https://bghub.org/r/rocketmen.pdf) | rulebook 明文:威脅卡 2 分、標記每個 1 分、只計一張個人目標 |
| 2966 | Second Chance | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2967 | Duck & Cover | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2968 | Let's Make a Bus Route | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2969 | Tybor the Builder | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2970 | Cascadia: Rolling Hills | c | pending | — | ⚠️ bghub 配到嘅係本體規則書,唔係呢隻衍生作/擴充,唔可以用嚟寫計分表 |
| 2971 | Galileo Project | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2972 | Big Boss | b | done | — | 放寬尺度後直接生成 |
| 2973 | Blitz Bowl | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2974 | Cave Troll | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2975 | Gang of Four | b | done | — | 放寬尺度後直接生成 |
| 2976 | Big Trouble in Little China: The Game | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2977 | Gorinto | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2978 | Rustling Leaves | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2979 | El Capitán | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2980 | Tacta | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2981 | Truffle Shuffle | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2982 | Dungeons & Dragons: Conquest of Nerath Board Game | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2983 | Winter Kingdom | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2984 | Tales of the Arthurian Knights | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2985 | Verräter | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2986 | Smash Up: Big in Japan | b | done | — | 放寬尺度後直接生成 |
| 2987 | Commands & Colors: Medieval | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 2988 | Voodoo Prince | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2989 | Gunkimono | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2990 | Northern Pacific | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2991 | Abducktion | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2992 | Shifting Stones | - | skip | — | 以達成條件、淘汰、競速或搶先儲齊定勝負,無終局分項計分 |
| 2993 | Ghost Blitz 2 | b | done | — | 放寬尺度後直接生成 |
| 2994 | Boomtown | b | done | — | 放寬尺度後直接生成 |
| 2995 | Constantinopolis | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2996 | Boggle | b | done | — | 放寬尺度後直接生成 |
| 2997 | Pack & Stack | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 2998 | Fate of the Elder Gods | - | skip | — | 合作/單人/密室逃脫遊戲,無玩家累加計分 |
| 2999 | Bloodstones | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
| 3000 | One Night Ultimate Vampire | - | skip | — | 戰棋/劇本制/對戰遊戲,以陣營或擊倒對手定勝負,無累加計分 |
