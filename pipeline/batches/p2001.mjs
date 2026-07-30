// Phase 2 · rank 2001–2100 · 路徑 b
import { game, n, writeBatch } from "../lib/gen.mjs";

writeBatch([
  game(1544, "超級鬼扯蛋", "#C97A9B", "—", [
    n("score", "累計得分", "📝", "#F7D8E0",
      "各回合估中真答案、或者自己作嘅答案被人揀中攞到嘅分,全部加埋"),
  ]),

  game(54137, "羊咩咩大作戰", "#6B9B5A", "—", [
    n("visible", "露出嘅格數", "🐑", "#DDEFDC", "遊戲完結時,棋盤上見到你顏色嘅格仔數,最多者勝"),
  ]),
]);
