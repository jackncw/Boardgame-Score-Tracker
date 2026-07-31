// Phase 2 · 路徑 c(rulebook)
import { gameSrc, n, c, writeBatch } from "../lib/gen.mjs";

writeBatch([
  // 1721 Mariposas
  gameSrc(297978, "帝王蝶遷徙", "#C9553C", "—", [
    n("during", "遊戲中累積嘅分", "🦋", "#F7E2CE", "計分軌上遊戲期間儲落嘅分"),
    c("lifecycle", "生命週期卡", "🐛", "#DDEFDC", 1, "每張生命週期卡 1 分"),
    n("butterflies", "終局蝴蝶分佈", "🌸", "#F7D8E0",
      "終局按蝴蝶喺地圖上(包括米卻肯州)嘅分佈計分"),
    n("tokens", "能力代幣", "🎫", "#EADCF0",
      "已取得嘅生命週期能力代幣,部分喺終局額外計分"),
  ], "https://bghub.org/r/mariposas.pdf"),

  // 1730 Asara
  gameSrc(72991, "阿薩拉高塔", "#C9A227", "同分者並列勝出", [
    n("during", "四次年度評比累計", "🏗️", "#F7EFD2",
      "第 1 至 4 年每年年終評比攞到嘅聲望分,全部加埋"),
    n("final", "最終評比", "🏆", "#F5E8D8",
      "第四年之後嘅最終評比:按最高塔同最多塔嘅名次計分。" +
      "金裝飾同哈里發庇護喺呢部分唔計分"),
  ], "https://bghub.org/r/asara.pdf"),
]);
