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
