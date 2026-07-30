# rulebook 網查 · 研究紀錄

由 `pipeline/log.mjs` 自動 render,唔好人手改(改 `out/research-status.json`)。

路徑:**b** = 對終局計分 100% 肯定,直接生成(`source:"claude-code-gen"`);
**c** = 上網搵官方 rulebook 先生成(`source:"rulebook-web"` + sourceUrl);
**-** = 唔使生成(合作/戰役/闖關/無累加計分)。

# Phase 1 · rank 1–1000(426 行)

## 分流

| 類 | 定義 | 數目 |
| --- | --- | --- |
| A | 競爭型、有終局計分 → 目標 | 51 |
| B | 合作/戰役/闖關/無累加計分 → 唔做,維持 hasScoring:false | 327 |
| C | 未確定,研究時一併判斷 | 48 |
| **合計** | | **426** |

## 進度

- 已生成計分表(done):40
- 揾唔到可靠來源(no-source):1
- 判定唔使做(skip):327
- 未做(pending):58

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
| 163 | The Elder Scrolls: Betrayal of the Second Era | C | - | pending | — | 待研究判斷 |
| 165 | Too Many Bones: Undertow | B | - | skip | — | coop/campaign |
| 168 | The 7th Continent | B | - | skip | — | coop/campaign |
| 169 | Andromeda's Edge | A | - | done | [link](https://cardboardalchemy.com/downloads/AndromedasEdge_Rulebook_sm.pdf) | 官方 rulebook;受損模組 −2/個、領袖 1 分/個 有明文 |
| 171 | Magic: The Gathering | B | - | skip | — | coop/campaign |
| 172 | Rajas of the Ganges | C | - | pending | — | 待研究判斷 |
| 174 | Pandemic | B | - | skip | — | coop/campaign |
| 178 | Star Realms | B | - | skip | — | coop/campaign |
| 182 | War Chest | B | - | skip | — | coop/campaign |
| 183 | Undaunted: Normandy | B | - | skip | — | coop/campaign |
| 187 | The Lord of the Rings: The Card Game | B | - | skip | — | coop/campaign |
| 189 | Watergate | B | - | skip | — | coop/campaign |
| 190 | Unmatched: Cobble & Fog | B | - | skip | — | coop/campaign |
| 193 | Vantage | C | - | pending | — | 待研究判斷 |
| 200 | Legendary Encounters: An Alien Deck Building Game | C | - | pending | — | 待研究判斷 |
| 206 | Star Wars: X-Wing Miniatures Game | B | - | skip | — | coop/campaign |
| 208 | Sherlock Holmes Consulting Detective: The Thames Murders & Other Cases | C | - | pending | — | 待研究判斷 |
| 211 | Dune | B | - | skip | — | coop/campaign |
| 212 | Radlands | B | - | skip | — | coop/campaign |
| 213 | Welcome to the Moon | C | - | pending | — | 待研究判斷 |
| 215 | John Company: Second Edition | C | - | pending | — | 待研究判斷 |
| 217 | Star Wars: The Deckbuilding Game | B | - | skip | — | coop/campaign |
| 220 | Wondrous Creatures | A | - | done | [link](https://drive.google.com/file/d/1_h2Mm0AcNhPVoM91SSdgqhNsuwVpFpOU/view) | 官方 rulebook v2.2;獎盃 3 分、資源每 4 個 1 分 有明文 |
| 221 | This War of Mine: The Board Game | B | - | skip | — | coop/campaign |
| 223 | War of the Ring | B | - | skip | — | coop/campaign |
| 224 | Thunder Road: Vendetta | B | - | skip | — | coop/campaign |
| 229 | Return to Dark Tower | B | - | skip | — | coop/campaign |
| 230 | Speakeasy | A | - | no-source | — | Lacerda 2025 新作,官方 rulebook 未公開下載;BGG files 需登入 |
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
| 270 | My City | C | - | pending | — | 待研究判斷 |
| 271 | Cyclades | B | - | skip | — | coop/campaign |
| 275 | Codenames: Duet | B | - | skip | — | coop/campaign |
| 279 | Combat Commander: Europe | B | - | skip | — | coop/campaign |
| 281 | Nemesis: Retaliation | B | - | skip | — | coop/campaign |
| 283 | Samurai | C | - | pending | — | 待研究判斷 |
| 284 | Legendary: A Marvel Deck Building Game | A | - | done | [link](https://gamerules.com/rules/marvel-legendary/) | 非出版社原文(gamerules.com);只有旁觀者 1 分係明文 |
| 289 | Flamme Rouge | B | - | skip | — | coop/campaign |
| 291 | Deception: Murder in Hong Kong | B | - | skip | — | coop/campaign |
| 292 | Zombicide: Black Plague | B | - | skip | — | coop/campaign |
| 293 | Unmatched: Battle of Legends, Volume One | B | - | skip | — | coop/campaign |
| 294 | MicroMacro: Crime City | B | - | skip | — | coop/campaign |
| 301 | Aeon's End: The New Age | B | - | skip | — | coop/campaign |
| 304 | Unconscious Mind | A | - | done | [link](https://fantasiaboardgames.com/wp-content/uploads/2024/11/UM-Rulebook-250x250mm_v2_WEB.pdf) | 官方 rulebook;心形盒 2 分、靈感 1 分 有明文 |
| 309 | Hero Realms | B | - | skip | — | coop/campaign |
| 311 | Hot Streak | C | - | pending | — | 待研究判斷 |
| 314 | Toy Battle | C | - | pending | — | 待研究判斷 |
| 315 | Santorini | B | - | skip | — | coop/campaign |
| 317 | Star Realms: Frontiers | B | - | skip | — | coop/campaign |
| 322 | Apiary | A | - | done | [link](https://bghub.org/r/apiary.pdf) | 官方 rulebook r10;各項分值靠板塊/卡片故 number |
| 323 | The Lord of the Rings: The Card Game – Revised Core Set | B | - | skip | — | coop/campaign |
| 325 | Mind MGMT: The Psychic Espionage “Game.” | B | - | skip | — | coop/campaign |
| 326 | Dice Throne: Season Two – Battle Chest | B | - | skip | — | coop/campaign |
| 327 | Turing Machine | B | - | skip | — | coop/campaign |
| 328 | Dorfromantik: The Board Game | C | - | pending | — | 待研究判斷 |
| 329 | The Witcher: Old World | B | - | skip | — | coop/campaign |
| 332 | Cloudspire | B | - | skip | — | coop/campaign |
| 333 | Battle Line | B | - | skip | — | coop/campaign |
| 334 | Lewis & Clark: The Expedition | B | - | skip | — | coop/campaign |
| 335 | Oath | B | - | skip | — | coop/campaign |
| 336 | Marvel United | B | - | skip | — | coop/campaign |
| 337 | Hive | B | - | skip | — | coop/campaign |
| 338 | 1960: The Making of the President | B | - | skip | — | coop/campaign |
| 341 | Cryptid | B | - | skip | — | coop/campaign |
| 346 | Detective: A Modern Crime Board Game | C | - | pending | — | 待研究判斷 |
| 350 | Chronicles of Crime | C | - | pending | — | 待研究判斷 |
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
| 376 | The King Is Dead: Second Edition | C | - | pending | — | 待研究判斷 |
| 379 | Frostpunk: The Board Game | B | - | skip | — | coop/campaign |
| 381 | Innovation | B | - | skip | — | coop/campaign |
| 388 | Space Alert | B | - | skip | — | coop/campaign |
| 389 | Fromage | A | - | done | [link](https://bghub.org/r/fromage.pdf) | 官方 rulebook;四個場地查板上表故用 number |
| 391 | Shackleton Base: A Journey to the Moon | A | - | pending | — | 競爭型終局計分 |
| 400 | The King's Dilemma | C | - | pending | — | 待研究判斷 |
| 401 | Feed the Kraken | B | - | skip | — | coop/campaign |
| 405 | Marvel United: X-Men | B | - | skip | — | coop/campaign |
| 406 | Arydia: The Paths We Dare Tread | B | - | skip | — | coop/campaign |
| 408 | Fury of Dracula (Third/Fourth Edition) | B | - | skip | — | coop/campaign |
| 411 | Awkward Guests: The Walton Case | B | - | skip | — | coop/campaign |
| 412 | Nemo's War (Second Edition) | C | - | pending | — | 待研究判斷 |
| 413 | Summoner Wars: Master Set | B | - | skip | — | coop/campaign |
| 415 | Destinies | B | - | skip | — | coop/campaign |
| 416 | Alien Frontiers | C | - | pending | — | 待研究判斷 |
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
| 477 | Imperial Struggle | C | - | pending | — | 待研究判斷 |
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
| 500 | Moon Colony Bloodbath | C | - | pending | — | 待研究判斷 |
| 502 | Zombicide: 2nd Edition | B | - | skip | — | coop/campaign |
| 505 | Massive Darkness 2: Hellscape | B | - | skip | — | coop/campaign |
| 506 | The LOOP | B | - | skip | — | coop/campaign |
| 507 | Mage Wars Arena | B | - | skip | — | coop/campaign |
| 509 | Codenames: Pictures | B | - | skip | — | coop/campaign |
| 514 | Cubitos | B | - | skip | — | coop/campaign |
| 518 | Men-Nefer | A | - | done | [link](https://bghub.org/r/mennefer.pdf) | 官方 rulebook;各項查板上軌道故用 number |
| 523 | Firefly: The Game | B | - | skip | — | coop/campaign |
| 529 | PitchCar | B | - | skip | — | coop/campaign |
| 530 | Agent Avenue | C | - | pending | — | 待研究判斷 |
| 533 | Unmatched: Little Red Riding Hood vs. Beowulf | B | - | skip | — | coop/campaign |
| 535 | Wavelength | B | - | skip | — | coop/campaign |
| 536 | Luthier | A | - | done | [link](https://bghub.org/r/luthier.pdf) | 官方 rulebook;專長工人 1 分明文,首席對照表未列故 number |
| 537 | Woodcraft | A | - | done | [link](https://bghub.org/r/woodcraft.pdf) | 官方 rulebook;剩餘每 10 個 1 分明文 |
| 538 | MicroMacro: Crime City – Full House | B | - | skip | — | coop/campaign |
| 539 | Civilization | B | - | skip | — | coop/campaign |
| 540 | Black Orchestra | B | - | skip | — | coop/campaign |
| 544 | Zenith | C | - | pending | — | 待研究判斷 |
| 545 | Flash Point: Fire Rescue | B | - | skip | — | coop/campaign |
| 548 | Mythic Battles: Pantheon | B | - | skip | — | coop/campaign |
| 549 | Sprawlopolis | B | - | skip | — | coop/campaign |
| 551 | Sword & Sorcery: Immortal Souls | B | - | skip | — | coop/campaign |
| 552 | Here I Stand | C | - | pending | — | 待研究判斷 |
| 553 | Regicide | B | - | skip | — | coop/campaign |
| 554 | Space Hulk (Third Edition) | B | - | skip | — | coop/campaign |
| 555 | The Lord of the Rings: The Confrontation | B | - | skip | — | coop/campaign |
| 558 | Unmatched Game System | B | - | skip | — | coop/campaign |
| 560 | Barcelona | A | - | done | [link](https://bghub.org/r/barcelona.pdf) | 官方 rulebook;三項終局全部查板上表 |
| 561 | Fire in the Lake | B | - | skip | — | coop/campaign |
| 564 | Reign of Cthulhu | B | - | skip | — | coop/campaign |
| 566 | Sherlock Holmes Consulting Detective: Jack the Ripper & West End Adventures | C | - | pending | — | 待研究判斷 |
| 568 | Mice and Mystics | B | - | skip | — | coop/campaign |
| 573 | Zombie Kidz Evolution | B | - | skip | — | coop/campaign |
| 575 | Compile: Main 1 | B | - | skip | — | coop/campaign |
| 576 | Undaunted: North Africa | B | - | skip | — | coop/campaign |
| 577 | Heroscape Master Set: Rise of the Valkyrie | B | - | skip | — | coop/campaign |
| 581 | Dawn of the Zeds (Third Edition) | B | - | skip | — | coop/campaign |
| 582 | Aeon Trespass: Odyssey | B | - | skip | — | coop/campaign |
| 584 | Claustrophobia | B | - | skip | — | coop/campaign |
| 586 | Dune | B | - | skip | — | coop/campaign |
| 587 | The Old King's Crown | C | - | pending | — | 待研究判斷 |
| 588 | Advanced Squad Leader | B | - | skip | — | coop/campaign |
| 592 | Black Rose Wars | C | - | pending | — | 待研究判斷 |
| 595 | Friday | B | - | skip | — | coop/campaign |
| 596 | Middara: Unintentional Malum – Act 1 | B | - | skip | — | coop/campaign |
| 598 | Shadows over Camelot | B | - | skip | — | coop/campaign |
| 600 | Terrorscape | B | - | skip | — | coop/campaign |
| 603 | Hanabi | B | - | skip | — | coop/campaign |
| 605 | Take Time | C | - | pending | — | 待研究判斷 |
| 606 | Eternal Decks | C | - | pending | — | 待研究判斷 |
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
| 644 | Charterstone | C | - | pending | — | 待研究判斷 |
| 645 | Argent: The Consortium | C | - | pending | — | 待研究判斷 |
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
| 696 | My Father's Work | C | - | pending | — | 待研究判斷 |
| 697 | Euphoria: Build a Better Dystopia | B | - | skip | — | coop/campaign |
| 698 | StarCraft: The Board Game | C | - | pending | — | 待研究判斷 |
| 702 | Unlock!: Escape Adventures | B | - | skip | — | coop/campaign |
| 703 | Undaunted: Stalingrad | B | - | skip | — | coop/campaign |
| 706 | High Frontier 4 All | C | - | pending | — | 待研究判斷 |
| 707 | Archipelago | C | - | pending | — | 待研究判斷 |
| 708 | Federation | A | - | pending | — | 競爭型終局計分 |
| 709 | HeroQuest | B | - | skip | — | coop/campaign |
| 713 | Baseball Highlights: 2045 | B | - | skip | — | coop/campaign |
| 714 | Dice Throne: Season One | B | - | skip | — | coop/campaign |
| 715 | Wandering Towers | B | - | skip | — | coop/campaign |
| 719 | Coup | B | - | skip | — | coop/campaign |
| 720 | Cozy Stickerville | C | - | pending | — | 待研究判斷 |
| 722 | Pathfinder Adventure Card Game: Rise of the Runelords – Base Set | B | - | skip | — | coop/campaign |
| 725 | Windmill Valley | A | - | done | [link](https://bghub.org/r/windmill-valley.pdf) | 官方 rulebook;球莖顏色 1/1/2/2/3 分明文 |
| 727 | Azul: Master Chocolatier | A | - | done | [link](https://bghub.org/r/azul-master-chocolatier.pdf) | 官方 rulebook;橫行 2、直行 7、集色 10 分 明文 |
| 728 | River of Gold | A | - | pending | — | 競爭型終局計分 |
| 729 | Star Trek: Captain's Chair | C | - | pending | — | 待研究判斷 |
| 730 | Unlock!: Heroic Adventures | B | - | skip | — | coop/campaign |
| 731 | Star Wars: Battle of Hoth | B | - | skip | — | coop/campaign |
| 732 | Star Trek: Ascendancy | B | - | skip | — | coop/campaign |
| 733 | Skyrise | A | - | done | [link](https://bghub.org/r/skyrise.pdf) | 官方 rulebook;島嶼 5 分、大細鑰匙 10/4 分 明文 |
| 734 | Triumph & Tragedy: European Balance of Power 1936-1945 | B | - | skip | — | coop/campaign |
| 735 | Brian Boru: High King of Ireland | A | - | done | [link](https://bghub.org/r/brian-boru-high-king-of-ireland.pdf) | 官方 rulebook;地區數對照表 0/1/3/5/7/10 明文,用 tiered |
| 738 | Beer & Bread | A | - | done | [link](https://bghub.org/r/beer-bread.pdf) | 官方 rulebook;最終分 = 啤酒/麵包較低者,唔係加總,所以只設 1 個 field |
| 740 | Pax Porfiriana | B | - | skip | — | coop/campaign |
| 741 | Three Sisters | A | - | pending | — | 競爭型終局計分 |
| 742 | Shards of Infinity | B | - | skip | — | coop/campaign |
| 744 | The 7th Citadel | B | - | skip | — | coop/campaign |
| 745 | Cuba Libre | B | - | skip | — | coop/campaign |
| 749 | Star Wars: The Clone Wars | B | - | skip | — | coop/campaign |
| 751 | Tag Team | C | - | pending | — | 待研究判斷 |
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
| 784 | Duel for Cardia | C | - | pending | — | 待研究判斷 |
| 785 | The Battle of Five Armies | B | - | skip | — | coop/campaign |
| 786 | Sanctuary | C | - | pending | — | 待研究判斷 |
| 787 | Gears of War: The Board Game | B | - | skip | — | coop/campaign |
| 788 | Sub Terra | B | - | skip | — | coop/campaign |
| 790 | Stationfall | C | - | pending | — | 待研究判斷 |
| 794 | Twilight Inscription | A | - | done | [link](https://bghub.org/r/twilightinscription.pdf) | 官方 rulebook;各表小計(工業表每 2 貿易貨物 +1 明文) |
| 796 | The Adventures of Robin Hood | B | - | skip | — | coop/campaign |
| 797 | Taluva | C | - | pending | — | 待研究判斷 |
| 799 | Elder Sign | B | - | skip | — | coop/campaign |
| 800 | Magic Maze | B | - | skip | — | coop/campaign |
| 801 | Cthulhu: Death May Die – Fear of the Unknown | B | - | skip | — | coop/campaign |
| 803 | Civilization: A New Dawn | B | - | skip | — | coop/campaign |
| 804 | Hammer of the Scots | B | - | skip | — | coop/campaign |
| 805 | Mare Nostrum: Empires | B | - | skip | — | coop/campaign |
| 806 | Leviathan Wilds | B | - | skip | — | coop/campaign |
| 807 | Chronicles of Crime: 1400 | C | - | pending | — | 待研究判斷 |
| 808 | A Game of Thrones: The Card Game (Second Edition) | B | - | skip | — | coop/campaign |
| 809 | Lord of the Rings: The Confrontation | B | - | skip | — | coop/campaign |
| 811 | Top Ten | B | - | skip | — | coop/campaign |
| 812 | Disney Villainous: Wicked to the Core | B | - | skip | — | coop/campaign |
| 814 | Mr. Jack | B | - | skip | — | coop/campaign |
| 817 | Star Wars: Destiny | B | - | skip | — | coop/campaign |
| 818 | Unstoppable | C | - | pending | — | 待研究判斷 |
| 821 | One Night Ultimate Werewolf: Daybreak | B | - | skip | — | coop/campaign |
| 822 | Primal: The Awakening | B | - | skip | — | coop/campaign |
| 825 | D-Day at Omaha Beach | B | - | skip | — | coop/campaign |
| 826 | Guards of Atlantis II | B | - | skip | — | coop/campaign |
| 827 | Sleeping Gods: Distant Skies | B | - | skip | — | coop/campaign |
| 829 | Unlock!: Timeless Adventures | B | - | skip | — | coop/campaign |
| 830 | Churchill | C | - | pending | — | 待研究判斷 |
| 833 | Blood Bowl (2016 Edition) | B | - | skip | — | coop/campaign |
| 836 | The Oracle of Delphi | B | - | skip | — | coop/campaign |
| 838 | Roll Player Adventures | B | - | skip | — | coop/campaign |
| 839 | Escape: The Curse of the Temple | B | - | skip | — | coop/campaign |
| 841 | Treasure Island | B | - | skip | — | coop/campaign |
| 842 | The Shipwreck Arcana | B | - | skip | — | coop/campaign |
| 843 | Fliptown | A | - | pending | — | 競爭型終局計分 |
| 845 | The Republic of Rome | B | - | skip | — | coop/campaign |
| 847 | Maquis | B | - | skip | — | coop/campaign |
| 849 | Whistle Mountain | A | - | pending | — | 競爭型終局計分 |
| 852 | Disney Villainous: Evil Comes Prepared | B | - | skip | — | coop/campaign |
| 854 | Tiny Epic Dungeons | B | - | skip | — | coop/campaign |
| 855 | Critter Kitchen | A | - | done | [link](https://bghub.org/r/critterkitchen.pdf) | 官方 rulebook;最多湯 1 星、七道菜 1 星、每道最佳 1 星 明文 |
| 858 | Space Hulk: Death Angel – The Card Game | B | - | skip | — | coop/campaign |
| 860 | Pax Renaissance | B | - | skip | — | coop/campaign |
| 861 | Summoner Wars | B | - | skip | — | coop/campaign |
| 864 | Ashes Reborn: Rise of the Phoenixborn | B | - | skip | — | coop/campaign |
| 865 | Onirim (Second Edition) | B | - | skip | — | coop/campaign |
| 866 | Menara | B | - | skip | — | coop/campaign |
| 868 | Creature Caravan | A | - | pending | — | 競爭型終局計分 |
| 869 | Spicy | B | - | skip | — | coop/campaign |
| 872 | Marvel Zombies: A Zombicide Game | B | - | skip | — | coop/campaign |
| 874 | Perudo | B | - | skip | — | coop/campaign |
| 875 | Messina 1347 | A | - | done | [link](https://bghub.org/r/messina1347.pdf) | 官方 rulebook;老鼠對照表未抽到故 number |
| 877 | Captain Flip | A | - | done | [link](https://bghub.org/r/captain-flip.pdf) | 官方 rulebook;分數即金幣 |
| 878 | River Valley Glassworks | A | - | pending | — | 競爭型終局計分 |
| 880 | Crystal Palace | A | - | done | [link](https://bghub.org/r/crystalpalace.pdf) | 官方 rulebook;話題 6/4/2、黑市 3/2/1、空研究格 −2 明文 |
| 882 | KeyForge: Call of the Archons | B | - | skip | — | coop/campaign |
| 883 | Star Wars: X-Wing Miniatures Game – The Force Awakens Core Set | B | - | skip | — | coop/campaign |
| 887 | Wir sind das Volk! | B | - | skip | — | coop/campaign |
| 888 | Diplomacy | B | - | skip | — | coop/campaign |
| 890 | Gloomhaven: Buttons & Bugs | B | - | skip | — | coop/campaign |
| 892 | BANG! The Dice Game | B | - | skip | — | coop/campaign |
| 893 | Black Rose Wars: Rebirth | C | - | pending | — | 待研究判斷 |
| 894 | EXIT: The Game – The Pharaoh's Tomb | B | - | skip | — | coop/campaign |
| 896 | Spots | B | - | skip | — | coop/campaign |
| 899 | Fury of Dracula (Second Edition) | B | - | skip | — | coop/campaign |
| 900 | Evacuation | A | - | done | [link](https://www.riograndegames.com/wp-content/uploads/2023/09/Evacuation-1.pdf) | 官方 rulebook;罰籌/未撤離/缺體育場 各 −1、笑臉 +2/+1 明文 |
| 912 | Empire of the Sun: The Pacific War 1941-1945 | B | - | skip | — | coop/campaign |
| 915 | Galileo Galilei | A | - | done | [link](https://bghub.org/r/galileo-galilei.pdf) | 官方 rulebook;大學/裁判所值靠板塊故 number |
| 920 | Hoplomachus: Victorum | B | - | skip | — | coop/campaign |
| 921 | My Little Scythe | B | - | skip | — | coop/campaign |
| 922 | Rats of Wistar | A | - | pending | — | 競爭型終局計分 |
| 923 | Rhino Hero: Super Battle | B | - | skip | — | coop/campaign |
| 926 | Blue Moon City | B | - | skip | — | coop/campaign |
| 927 | Steampunk Rally | B | - | skip | — | coop/campaign |
| 929 | Defenders of the Realm | B | - | skip | — | coop/campaign |
| 932 | Stardew Valley: The Board Game | B | - | skip | — | coop/campaign |
| 934 | Saltfjord | A | - | done | [link](https://bghub.org/r/saltfjord.pdf) | 官方 rulebook;每 3 魚 1 分、4 箱一組 3 分 明文 |
| 936 | Specter Ops | B | - | skip | — | coop/campaign |
| 937 | Warhammer Quest: The Adventure Card Game | B | - | skip | — | coop/campaign |
| 938 | Leaving Earth | C | - | pending | — | 待研究判斷 |
| 939 | New York Zoo | B | - | skip | — | coop/campaign |
| 940 | SpaceCorp: 2025-2300AD | C | - | pending | — | 待研究判斷 |
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
| 964 | Abomination: The Heir of Frankenstein | A | - | pending | — | 競爭型終局計分 |
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
| 984 | A Gentle Rain | C | - | pending | — | 待研究判斷 |
| 988 | Mistborn: The Deckbuilding Game | B | - | skip | — | coop/campaign |
| 989 | Kinfire Delve: Vainglory's Grotto | B | - | skip | — | coop/campaign |
| 990 | FUSE | B | - | skip | — | coop/campaign |
| 992 | EXIT: The Game – The Secret Lab | B | - | skip | — | coop/campaign |

# Phase 2 · rank 1001–3000(100 行)

## 進度

- 已生成計分表(done):20
- 揾唔到可靠來源(no-source):0
- 判定唔使做(skip):51
- 未做(pending):29
- 路徑 b(直接生成):5 · 路徑 c(網查 rulebook):44

## 逐隻紀錄

| rank | 遊戲 | 路徑 | 結果 | sourceUrl | 備註 |
| ---: | --- | :-: | --- | --- | --- |
| 1001 | Vast: The Crystal Caverns | - | skip | — | 不對稱陣營遊戲,每個角色勝利條件唔同,無統一累加計分 |
| 1002 | Gentes | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1003 | Space Hulk | - | skip | — | 劇本制對戰遊戲,以完成任務定勝負,無累加計分 |
| 1004 | Art Society | c | done | [link](https://bghub.org/r/art-society.pdf) | 畫作聲望×排名、裝飾、視線、滿牆、牆角/多餘扣分 |
| 1005 | King of New York | b | done | — | 單一 VP 軌,同東京之王同款 |
| 1006 | Tammany Hall | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1007 | Empires: Age of Discovery | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1008 | Werewords | - | skip | — | 社交推理遊戲,以陣營達成條件定勝負,無累加計分 |
| 1009 | Letter Jam | - | skip | — | 合作制猜字遊戲,無玩家累加計分 |
| 1010 | Coffee Roaster | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1011 | Jekyll vs. Hyde | - | skip | — | 雙人不對稱吃磴遊戲,以標記推進定勝負,無累加計分 |
| 1012 | Roam | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1013 | Mahjong | - | skip | — | 傳統麻雀,計番規則按地區變體差異極大,難以單一計分表覆蓋 |
| 1014 | One Deck Dungeon | - | skip | — | 單人/合作制地城遊戲,無玩家累加計分 |
| 1015 | Caylus 1303 | c | done | [link](https://bghub.org/r/caylus1303.pdf) | PP 標記 + 終局剩餘物每個 2 PP(圖示物品規則書文字冇寫) |
| 1016 | Sniper Elite: The Board Game | - | skip | — | 一對多隱藏移動遊戲,以陣營目標定勝負,無累加計分 |
| 1017 | Dice Throne | - | skip | — | 雙人對戰,以擊倒對手生命值定勝負,無累加計分 |
| 1018 | Hannibal & Hamilcar | - | skip | — | 雙人戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1019 | Morels | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1020 | Dinosaur World | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1021 | Cry Havoc | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1022 | The Lost Expedition | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1023 | Cerebria: The Inside World | - | skip | — | 隊制不對稱遊戲,以陣營勝利條件定勝負,無累加計分 |
| 1024 | Black Forest | c | done | [link](https://bghub.org/r/black-forest.pdf) | 玻璃 1/烹飪轉盤/小莊園 2/牧場牲口 1/建築 |
| 1025 | Dale of Merchants | - | skip | — | 以最先儲齊一疊指定動物牌定勝負,無累加計分 |
| 1026 | Jambo | c | pending | — | 競爭型,待網查 rulebook 確認勝負判定 |
| 1027 | Fugitive | - | skip | — | 雙人隱藏移動遊戲,以捉到/逃脫定勝負,無累加計分 |
| 1028 | Dungeons & Dragons: The Legend of Drizzt Board Game | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1029 | Luxor | c | done | [link](https://bghub.org/r/luxor.pdf) | 寶物套組對照表 1–8 套 = 3/7/12/18/25/33/42/52 |
| 1030 | Black Angel | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1031 | Lords of Xidit | - | skip | — | 以三種資源逐項排名淘汰判定,無累加計分 |
| 1032 | Terraforming Mars: The Dice Game | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1033 | Courtisans | c | done | [link](https://bghub.org/r/courtisans.pdf) | 得寵 +1/失寵 -1/秘密任務 +3 |
| 1034 | Squad Leader | - | skip | — | 劇本制戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1035 | Zombicide Season 2: Prison Outbreak | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1036 | Forbidden Island | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1037 | Unlock!: Secret Adventures | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1038 | Unlock!: Mystery Adventures | - | skip | — | 密室逃脫遊戲,按時間同提示數評級,唔適用累加計分表 |
| 1039 | The Duke | - | skip | — | 抽象對弈,以擒獲對手公爵定勝負,無累加計分 |
| 1040 | Pandemic: Rising Tide | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1041 | Kelp: Shark vs Octopus | - | skip | — | 雙人不對稱對戰,以達成陣營目標定勝負,無累加計分 |
| 1042 | Outlive | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1043 | Tang Garden | c | done | [link](https://bghub.org/r/tang-garden.pdf) | 金幣制;樹木套組 1-4-9-16-25 |
| 1044 | Lands of Galzyr | - | skip | — | 戰役制探索遊戲,無統一累加計分 |
| 1045 | The Thing: The Boardgame | - | skip | — | 半合作隱藏身分遊戲,以陣營成敗定勝負,無累加計分 |
| 1046 | Among the Stars | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1047 | XCOM: The Board Game | - | skip | — | App 驅動合作制遊戲,無玩家累加計分 |
| 1048 | Evenfall | c | done | [link](https://bghub.org/r/evenfall.pdf) | 軌上分 + 專家 + 議會終局 + 儀式/權力之地 |
| 1049 | ZÈRTZ | - | skip | — | 抽象對弈,以儲齊指定彈珠組合定勝負,無累加計分 |
| 1050 | Forest Shuffle: Dartmoor | c | pending | — | 擴充,計分沿用本體但有新項,待網查 rulebook |
| 1051 | Rumble Nation | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1052 | Rurik: Dawn of Kiev | c | done | [link](https://bghub.org/r/rurik-dawn-of-kiev.pdf) | 三條宣稱軌 + 戰爭軌 3/1 + 議程 2 + 功績卡 |
| 1053 | Fit to Print | c | done | [link](https://bghub.org/r/fit-to-print.pdf) | 報道/相片/頭條/留白名次/情緒失衡/未擺磚 -1 |
| 1054 | Scarface 1920 | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1055 | Rhino Hero | - | skip | — | 疊疊樂遊戲,以最先出晒牌或塔冧定勝負,無累加計分 |
| 1056 | Friedrich: Anniversary Edition | - | skip | — | 雙人以上戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1057 | Container | c | done | [link](https://bghub.org/r/container.pdf) | 錢為單位;船同暫存 $3、港口 $2、貸款 -$11 |
| 1058 | Star Wars: The Card Game | - | skip | — | 集換式卡牌對戰,以摧毀對手目標定勝負,無累加計分 |
| 1059 | Up Front | - | skip | — | 劇本制卡牌戰棋,以劇本勝利條件定勝負,無累加計分 |
| 1060 | ito | - | skip | — | 合作制排序派對遊戲,無玩家累加計分 |
| 1061 | The Wolves | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1062 | Spyrium | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1063 | Vasco da Gama | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1064 | Nightmare Productions | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1065 | Tribune: Primus Inter Pares | c | pending | — | 競爭型,待網查 rulebook 確認勝負判定 |
| 1066 | Condottiere | - | skip | — | 區域控制卡牌遊戲,以佔領相鄰行省定勝負,無累加計分 |
| 1067 | Scoville | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1068 | 1989: Dawn of Freedom | - | skip | — | 雙人 CDG 戰棋,以單一勝利點軌與突然死亡判定,唔需要分項計分表 |
| 1069 | Arcadia Quest: Inferno | - | skip | — | PvP 戰役制遊戲,以完成任務獎章定勝負,無累加計分 |
| 1070 | Palm Island | - | skip | — | 單人卡牌遊戲,無玩家累加計分 |
| 1071 | Zombicide: Invader | - | skip | — | 合作制戰役遊戲,無玩家累加計分 |
| 1072 | Rebel Princess | c | done | [link](https://bghub.org/r/rebel-princess.pdf) | 求婚越少越好,單一扣分欄 |
| 1073 | DinoGenics | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1074 | Reef Encounter | c | done | [link](https://bghub.org/r/reef-encounter.pdf) | 鸚哥魚食咗嘅息肉每塊 1–5 分 |
| 1075 | Red Rising | c | done | [link](https://bghub.org/r/red-rising.pdf) | 氦 3/君主 10/影響力 4-2-1/艦隊軌 0–43/超 7 張每張 -10 |
| 1076 | Horrified: American Monsters | - | skip | — | 合作制遊戲,無玩家累加計分 |
| 1077 | Istanbul: The Dice Game | - | skip | — | 以最先儲齊指定數量紅寶石定勝負,無累加計分 |
| 1078 | Survive The Island | b | done | — | 獲救生物底面點數總和 |
| 1079 | Merchants of the Dark Road | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1080 | Ca$h 'n Guns: Second Edition | b | done | — | 八回合分贓,生還者中錢最多者勝 |
| 1081 | Sherlock Holmes Consulting Detective: The Baker Street Irregulars | - | skip | — | 合作解謎,按案件問答同線索數計分,唔適用累加計分表 |
| 1082 | Roll Through the Ages: The Bronze Age | b | done | — | 紀念碑 + 發展 + 發展額外分 − 災難 |
| 1083 | Qwirkle | b | done | — | 全程擺牌累計 + 最先出晒牌 6 分 |
| 1084 | Tiny Epic Dinosaurs | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1085 | Thunderstone | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1086 | Eila and Something Shiny | - | skip | — | 單人/合作制故事遊戲,無玩家累加計分 |
| 1087 | Hyperborea | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1088 | Inferno | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1089 | Outfoxed! | - | skip | — | 合作制兒童推理遊戲,無玩家累加計分 |
| 1090 | Tak | - | skip | — | 抽象對弈,以築成通路定勝負,無累加計分 |
| 1091 | Last Night on Earth: The Zombie Game | - | skip | — | 一對多劇本制遊戲,以陣營目標定勝負,無累加計分 |
| 1092 | Carcassonne: The City | c | pending | — | bghub 有鏡像但係 OCR 殘缺(字母同數字有缺失),唔可靠;要另揾清晰版 |
| 1093 | Castles of Mad King Ludwig: Collector's Edition | c | pending | — | 競爭型終局計分,待網查 rulebook |
| 1094 | Grove: 9 card solitaire game | - | skip | — | 單人遊戲,無玩家累加計分 |
| 1095 | Washington's War | - | skip | — | 雙人 CDG 戰棋,以陣營勝利條件定勝負,無累加計分 |
| 1096 | Combat Commander: Pacific | - | skip | — | 劇本制戰棋,以劇本勝利點判定,唔需要分項計分表 |
| 1097 | 13 Days: The Cuban Missile Crisis, 1962 | - | skip | — | 雙人 CDG,以單一勝利點軌與 DEFCON 判定,唔需要分項計分表 |
| 1098 | Botanik | c | done | [link](https://bghub.org/r/botanik.pdf) | 同色三格組合每塊 1 分 + 有效花每朵 1 分 |
| 1099 | Cockroach Poker | - | skip | — | 唬人卡牌遊戲,以儲齊四張同款即敗定勝負,無累加計分 |
| 1100 | Coffee Traders | c | done | [link](https://bghub.org/r/coffee-traders.pdf) | 咖啡吧交貨+欄位 4/2、里程碑、合作社 16/8/4、阿拉比卡軌 |
