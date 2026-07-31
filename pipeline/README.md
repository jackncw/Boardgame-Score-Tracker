# BGG 計分 Pipeline

三步產出計分 app 用嘅遊戲庫:Top 1000 排名 → BGG meta → Claude 生成計分 schema。

## 用法

```bash
# Step 1:攞排名清單(幾秒)
node 01-fetch-index.mjs 1000

# Step 2:BGG API 攞 weight/人數/時間(1000 隻約 3 分鐘,斷咗重跑會續傳)
node 02-fetch-meta.mjs

# Step 3:生成計分 schema(建議分段跑,控制成本)
ANTHROPIC_API_KEY=sk-xxx node 03-generate-scoring.mjs --limit 100

# 唔想用 API 先測 wiring:
node 03-generate-scoring.mjs --dry-run --limit 5

# Step 4:將 scoring 檔嘅 nameZh / accent backfill 返入 index(喺 repo root 行)
cd .. && node scripts/enrich-index.mjs
```

Step 1–3 要喺 `pipeline/` 入面行(路徑相對 cwd),step 4 喺 repo root 行。

## 產出

```
out/games-index.json      ← app 用嘅遊戲清單(hasScoring 標示邊隻有計分表)
out/scoring/bgg-XXXX.json ← 每遊戲一份計分 schema
out/scoring/_failed-*.txt ← 生成失敗紀錄(重跑 step 3 會自動補)
```

**`pipeline/out/` 就係 app 嘅正式數據源(單一數據源)** —— index.html 直接
`fetch("pipeline/out/…")`,冇中間 copy 步驟。呢度改咗即係 app 改咗,
所以人手修過嘅檔(`source:"manual"`、核對過嘅 `tieBreaker`)一律直接改呢度。
路徑喺 index.html 頂部 `const DATA_BASE = "pipeline/out"` 一行控制。

## 重要機制

- **斷點續傳**:step 2 同 3 都會跳過已完成嘅,隨時 Ctrl-C 再跑
- **verified flag**:生成嘅一律 `verified: false`;你人手核對後改做 `true`,
  將來自動 update 只會覆寫 false 嘅,`true` 永不被碰
- **唔確定就 number**:prompt 明確指示,計法唔肯定寧願叫玩家直入總分,
  唔好老作單價/對照表 —— 錯嘅具體數字比冇具體數字傷好多
- **驗證 + 重試**:每份 output 過 `lib/validate.mjs`,唔合格會帶住錯誤重試一次

## 成本估算

Sonnet 每隻遊戲 input+output 約 1.5–2K tokens,1000 隻大概 US$10–15 之內。
建議:先跑 `--limit 50`,人手抽查 Top 50(你熟嘅遊戲),滿意先跑晒。

## GitHub Actions

`.github/workflows/pipeline.yml` 已設手動觸發(workflow_dispatch),
去 repo Settings → Secrets 加 `ANTHROPIC_API_KEY` 就用得。
將來要每週自動追新遊戲,解開 yml 入面 schedule 兩行就得(預留咗)。

## 注意

- BGG API 有禮儀要求:step 2 已設每 batch 隔 2.5 秒,唔好改細
- BGG 有時回 202(排隊),script 會自動等,唔係 error
- 排名清單來自 beefsack/bgg-ranking-historicals(每日 dump),
  如果呢個來源停更,step 1 要換來源(BGG 官方冇排名清單 API)

## ⚠️ 未解決:BGG_API_TOKEN

`02-fetch-meta.mjs` 而家一定要 token —— BGG XML API 唔帶 `Authorization`
直接回 **HTTP 401**(2026-07-30 實測)。token 唔喺 env 就跑唔到,
即係 `games-index.json` 停留喺 999 個 entry(rank 1–1000),
而 rank 1001–3000 嘅 raw 資料已經喺 `games-index-raw.json`。

補返 token 之後,順序係:

```bash
export BGG_API_TOKEN=…          # PowerShell: $env:BGG_API_TOKEN = "…"
cd pipeline && node 02-fetch-meta.mjs      # 約 2000 隻,BGG 禮儀 delay 下約 5 分鐘
cd .. && node scripts/fix-index.mjs        # 去重 + 由最新 dump 更新 rank + 排序
node scripts/enrich-index.mjs              # 補 nameZh / accent / hasScoring
```

`lib/gen.mjs` 已經改成 index 未有 entry 都照寫得 scoring 檔(由 raw index
借 gameId/name),所以生成工作唔使等 token;等 token 返嚟先補 index 側。

## 網查 rulebook 生成計分表(2026-07 開始嘅第二階段)

目標:`games-index.json` 入面 `hasScoring:false` 嘅 427 隻,逐隻上網搵官方
rulebook,有根有據先生成 `out/scoring/bgg-*.json`。

### 工具

```bash
node log.mjs                      # 重建分流 + render out/research-log.md
node log.mjs set <bggId> <result> <sourceUrl> <note>   # result: done|no-source|skip
node log.mjs stats
```

`out/research-status.json` 係單一真相,`out/research-log.md` 由佢 render。

### 分流(A/B/C)

- **A** 競爭型、有終局計分 → 今次目標(51 隻)
- **B** 合作/戰役/闖關/無累加計分 → 唔做,維持 `hasScoring:false`(328 隻)
- **C** 未確定,研究時一併判斷(48 隻)

### 揾 rulebook 嘅路數(由快到慢)

1. `https://bghub.org/r/<slug>.pdf` —— rulebook 鏡像,slug 有時係
   `letsgotojapan`,有時係 `windmill-valley`,兩種都試。命中率約一半。
2. 出版社官網:`riograndegames.com/wp-content/uploads/...`、
   `filemanager.czechgames.com/storage/files/<game>/rules/...`、
   `cardboardalchemy.com/downloads/...`、`fantasiaboardgames.com/wp-content/...`
3. WebSearch「<game> rulebook pdf」→ 揀出版社域名果條。
4. BGG **files 頁下載唔到**(`/file/download/...` 回 403,要登入),
   但 `https://api.geekdo.com/api/files?ajax=1&objectid=<bggId>&objecttype=thing`
   可以確認官方 rulebook 存唔存在、叫咩名。

### 讀 PDF

```bash
curl -sL -A "Mozilla/5.0" -o x.pdf "<url>"
pdftotext -raw x.pdf x.txt      # -raw 最準;-layout 對多欄設計會攪亂
grep -n -i "final scoring\|end of the game" x.txt
```

### 生成規則(加辣版)

- `source: "rulebook-web"` + `sourceUrl`(額外欄位,驗證器唔查,人手抽查用)
- 單價/對照表/bonus 值:**只准寫 rulebook 明文有嘅數**。
  「唔肯定」= 「份 rulebook 冇講」,唔係「記唔記得」→ 一律 `number`
- `verified: false`;label 繁中(香港用語);內容用自己文字寫,唔照抄原文
- 每 10 隻跑 `node check.mjs` + `node ../scripts/enrich-index.mjs`,每 20 隻 commit

## Phase 2:rank 1001–3000(2026-07-30 開始)

分流唔再用 A/B/C,改用**路徑 b / c**(同 `log.mjs` 嘅 `path` 欄一致):

- **skip** — 合作/戰役/闖關/無累加計分 → 唔生成
- **路徑 b** — 對終局計分 100% 肯定 → `game()`,`source:"claude-code-gen"`
- **路徑 c** — 唔係 100% 肯定 → 上網搵官方 rulebook →
  `gameSrc(…, sourceUrl)`,`source:"rulebook-web"`;揾唔到可靠來源就
  `result:"no-source"`,**唔好生成**

批次檔命名 `batches/pXXXX*.mjs`(X = 起始 rank),同 phase 1 嘅 `bXXX.mjs` 分開。

```bash
node batches/p1001.mjs                 # 跑批次(每份即時過 validate)
node log.mjs bulk <file.json>          # 批量記錄:[{bggId, path, result, sourceUrl, note}]
node log.mjs stats                     # phase 1 / phase 2 分開睇
node check.mjs                         # 全量驗證
```

### 揾 rulebook 嘅命中率(實測 rank 1001–1100)

bghub.org 鏡像試 41 隻,中 16 隻(約 39%)。冇鏡像果啲要去出版社官網,
WebSearch 通常只回落地頁唔係 PDF,要多一步 fetch 攞下載連結。
另外 bghub 有啲係 OCR 掃描版(例如 `carcassonne-the-city.pdf`),
字母同數字有缺失 —— **呢種唔算可靠來源,唔好用嚟寫單價**。

### 路徑 b 嘅尺度(2026-07-30 放寬)

**問「我講唔講得出佢終局計分有邊幾欄?」,唔係「我記唔記得每欄幾多分?」**

- 講得出**類別** → 路徑 b,直接生成,唔肯定嘅單價一律用 `number`
- 連類別都講唔出 → 先至走路徑 c 網查

理由:呢個本來就係本專案嘅慣例 —— 標杆檔 `bgg-224517.json`
(Brass: Birmingham)全部係 `number` 欄,一個單價都冇寫。

**冇放寬嘅紅線**:`unitValue` / `tiered` 對照表 / `bonus` 值
一律只准寫 rulebook 明文見到嘅數。唔肯定就降級做 `number`。

### probe-bghub.mjs —— 批量探 bghub 有冇 rulebook

```bash
node probe-bghub.mjs [起始 rank] [結束 rank]
```

由 `research-status.json` 攞 `result:"pending"` 嘅遊戲,自動由名生 slug 去探
bghub,結果寫入 `out/bghub-hits.json`(命中)同 `out/bghub-miss.json`(冇中,
下次唔會重探)。實測 rank 1001–3000 探 910 隻,命中 199 隻(約 22%)。

**⚠️ 衍生作陷阱**:「Terraforming Mars: The Dice Game」會配到
`terraformingmars.pdf`(本體規則書),「Cascadia: Rolling Rivers」會配到
`cascadia.pdf`。骰子版/roll & write 版嘅計分同本體完全唔同 —— **用本體規則書
寫衍生作嘅計分表係錯嘅**。script 已經改咗唔用主標題變體,但舊資料入面
命中嘅記錄有 `suspect: true` 標記,`research-status.json` 亦有警告 note,
一律當冇來源處理。

**⚠️ 第二種配錯:slug 啱但內容係另一隻遊戲。**`everdell-duo.pdf` 落到手
其實係 *Evergreen* 嘅規則書(季節/生物群系/樹/光),同 Everdell Duo 完全冇關。
`suspect` 標記捉唔到呢種 —— 所以讀 PDF 嗰陣一定要對返正文嘅專有名詞係咪
真係嗰隻遊戲,唔好淨係信 slug。

### extract-scoring.mjs —— 批量抽計分段落

```bash
node extract-scoring.mjs <起始索引> <幾多隻>   # 例:node extract-scoring.mjs 0 12
```

由 `bghub-hits.json` 順住 rank 抓 PDF,`pdftotext -raw` 之後由**尾向頭**搵
`final scoring` / `end game scoring` / `end of the game` 等錨點,只印出嗰段
26 行。自動跳過 `suspect:true` 同已經 `done` 嘅,PDF 有 cache 唔會重覆下載。

實測命中率:抽到清晰終局計分清單嘅約一半,其餘係錨點落錯位置
(落咗變體規則或卡牌描述)、計分表印喺圖入面、或者 PDF xref 損壞。

### 計分表印喺圖嗰批(2026-07-30 第二次放寬)

好多規則書將終局計分做成一張圖(或者印喺玩家板背面),`pdftotext` 抽唔到。
呢批**照生成**,但:

- 所有欄一律 `number`,只寫**項目類別**,一個單價都唔寫
- `source:"rulebook-web"` + sourceUrl 照填
- note 註明「單價印喺圖入面,文字抽唔到」

**條件**:正文要講得出係邊幾個計分項目。連類別都講唔出(錨點落錯位、
PDF 損壞)就仍然係 `pending`,唔可以硬砌。

**錨點揀選**:唔係揀第一個撞到嘅。每個候選都睇跟住 26 行入面
`score/point/VP` 同 `each/every/per` 嘅密度,再對單人章節嘅特徵字
(`solo` / `automa` / `dummy` / `your opponent scores` / `they score`)
同雙人變體大幅扣分,揀最高分嗰個;最高分低過 4 就當搵唔到。
呢個改動之前會將 Inventors of the South Tigris 嘅**單人假想對手計分**
當成終局計分 —— 嗰啲數字係簡化值,照抄落去就錯。

## desc-gen —— 最低信度層(2026-07-30 第三次放寬)

搵唔到任何 rulebook 嗰批(約 730 隻),准許靠 **BGG 描述 + 機制判斷**寫
「純類別表」。用 `gameDesc()`,`lib/gen.mjs` 會出 `source:"desc-gen"`。

**鐵律(check.mjs 會強制)**:

- 一個單價/對照表/bonus 數字都唔准寫 —— **所有欄一定係 `number`**
- 每份自動補一個 catch-all 欄 `id:"other"`(「其他分數」),類別估漏咗用家有位入
- 連計分類別都判斷唔到 → **維持 pending,唔准老作類別**

`source` 分三層,一眼分到信度:

| source | 意思 |
| --- | --- |
| `rulebook-web` | 讀過官方 rulebook,單價係明文 |
| `claude-code-gen` | 肯定計分類別,單價未確認故留空 |
| `desc-gen` | **最低信度** —— 冇 rulebook,只有類別 |

## coverage-report.mjs —— 收官報告

```bash
node coverage-report.mjs      # → out/coverage-report.md
```

由現場數據 render,唔好人手改。補完任何計分表之後重跑就更新。
內容:總覆蓋、按 rank 段分佈、四層信度數目、pending 分類統計、
同埋 desc-gen 全名單(信度最低,開放用戶修正嘅第一批)。

## 呢條線嘅狀態(2026-07-31)

主動生成**已收官**,而且 `out/bghub-hits.json` 嘅存貨亦**已經清空** ——
非 suspect 嘅 179 隻全部有結論(done 167、skip 7、no-source 5),
`extract-scoring.mjs` 再跑都唔會有新嘢出。

餘下 pending 係刻意留白 —— 冇 rulebook 而且判斷唔到計分類別。
**唔好為咗谷覆蓋率而降信度**,desc-gen 已經係底線。

之後轉入「有人玩到先補」模式:玩家撞到冇計分表嘅遊戲先至補嗰隻。
要開新來源嘅話,落手方向係出版社官網,唔係再探 bghub。
