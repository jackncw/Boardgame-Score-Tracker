// Phase 2 · 路徑 c · 第六批 —— 計分表印喺圖入面,只寫類別、全部 number
import { gameSrc, n, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1144 Santa Monica —— 各計分項目散落喺特色磚同計分目標磚(圖),文字抽唔到單價
  gameSrc(298065, "聖莫尼卡", "#E0A87A", "—", [
    n("features", "特色磚", "🏖️", "#F7E2CE",
      "每張起始特色磚有佢自己嘅計分方式,按磚面所示計"),
    n("rings", "活動圈", "⭕", "#DCE8F7",
      "卡上活動圈填啱指定人物種類同數量先計分,分數印喺卡面"),
    n("footprints", "腳印標記", "👣", "#F5E8D8",
      "遊戲期間放低嘅腳印標記,按起始特色磚嘅方式計分"),
    n("objective", "計分目標磚", "🎯", "#EADCF0", "本局揀咗嘅計分目標磚達成後計嘅分"),
  ], "https://bghub.org/r/santamonica.pdf"),

  // 1197 Comic Hunters —— 收藏規模同多樣性嘅對照表印喺圖,文字抽唔到
  gameSrc(322616, "漫畫獵人", "#C4543C", "—", [
    n("highlights", "亮點軌", "✨", "#F7E2CE",
      "三條亮點軌各自按你標記嘅位置計 VP"),
    n("variety", "收藏多樣性", "🦸", "#DCE8F7",
      "面前唔同英雄嘅收藏數越多,VP 越高;只得兩本嘅收藏唔計入多樣性"),
    n("collections", "收藏規模", "📚", "#EADCF0",
      "每個收藏按入面漫畫本數查對照表計 VP"),
  ], "https://bghub.org/r/comic-hunters.pdf"),
]);
