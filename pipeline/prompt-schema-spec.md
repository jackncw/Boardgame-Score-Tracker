輸出格式(schemaVersion 1):

{
  "schemaVersion": 1,
  "gameId": "bgg-<id>",
  "name": "<英文原名>",
  "nameZh": "<繁體中文名,冇通用譯名就照用英文>",
  "theme": { "accent": "#RRGGBB" },
  "scoring": {
    "tieBreaker": "<官方同分決勝規則,冇就 —>",
    "fields": [ <1 至 20 個 field> ],
    "total": { "type": "sum" }
  }
}

Field 四種類型(每個 field 必有 id[小寫英數底線]、label、icon[一個 emoji]、color[#RRGGBB 淺色]):

1. number — 玩家直接入分:
   { "id": "route", "label": "路線分數", "icon": "🚂", "color": "#DCE8F7", "input": "number", "min": 0 }
   可以負數就設 min 做負值。扣分項加 "sign": -1(玩家入正數,app 自動扣)。

2. counter — 逐件計數 × 單價:
   { "id": "eggs", "label": "蛋", "note": "每隻 1 分", "icon": "🥚", "color": "#F7F3DC", "input": "counter", "unitValue": 1 }
   只可以用喺單價完全確定嘅項目。

3. tiered — 查表換算(數量 → 得分,非線性):
   { "id": "track", "label": "影響力軌", "icon": "📈", "color": "#EADCF0", "input": "tiered", "table": [[0,0],[1,2],[2,5],[3,9]] }
   只可以用喺對照表完全確定嘅項目。

4. bonus — 固定加減分,拍一下有/冇:
   { "id": "longest", "label": "最長路線", "icon": "🏆", "color": "#F7EFD2", "input": "bonus", "value": 10 }

原則:計分項跟官方規則書嘅終局計分次序;唔確定嘅計法一律用 number 直入總分。
