// 修正:MLEM: Space Agency 嘅 bggId 係 387378,之前錯打成 387780(Rats of Wistar)
import { unlinkSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { game, skip, n, writeBatch } from "../lib/gen.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const bad = join(HERE, "..", "out", "scoring", "bgg-387780.json");
if (existsSync(bad)) { unlinkSync(bad); console.log("已刪除錯檔 bgg-387780.json"); }

writeBatch([
  // Rats of Wistar 還原做跳過
  skip(387780, "規則細節不足以確定計分項,避免老作"),
  // MLEM: Space Agency(正確 bggId)
  game(387378, "喵喵太空總署", "#5A6E9B", "—", [
    n("planets", "已抵達星球分數", "🪐", "#DCE8F7"),
  ]),
]);
