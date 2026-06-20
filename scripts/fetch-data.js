const fs = require("fs");
const path = require("path");
const url =
  "https://script.google.com/macros/s/AKfycbxJfq4R9-FH86ls5itJkRCHoZ-CRC5JYMpdETdTW28-y38Ysudkv_TlymQN8DSQMvxPdA/exec";

async function fetchAndSave() {
  const res = await fetch(url);
  const allData = await res.json();
  const dir = "./src/data";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const sheetName in allData) {
    fs.writeFileSync(
      path.join(dir, `${sheetName}.json`),
      JSON.stringify(allData[sheetName], null, 2),
    );
  }
  console.log("JSONデータの更新完了！");
}
fetchAndSave();
