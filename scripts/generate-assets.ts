import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { eq } from "drizzle-orm";
import * as schema from "@/db/schema";
import fs from "fs";
import path from "path";
import { group } from "console";

// 1. メモリ内にDBインスタンスを作成
const sqlite = new Database(":memory:");
const db = drizzle(sqlite, { schema });

// 2. テーブル作成
sqlite.exec(`
  CREATE TABLE items (id INTEGER PRIMARY KEY, name TEXT);
  CREATE TABLE locations (id INTEGER PRIMARY KEY, name TEXT);
  CREATE TABLE shops (id INTEGER PRIMARY KEY, name TEXT);
  CREATE TABLE recipes (id INTEGER PRIMARY KEY, name TEXT);
  CREATE TABLE lenses (id INTEGER PRIMARY KEY, type TEXT, world TEXT);
  CREATE TABLE item_shops (item_id INTEGER, shop_id INTEGER);
  CREATE TABLE location_items (item_id INTEGER, location_id INTEGER, remarks TEXT);
  CREATE TABLE location_recipes (recipe_id INTEGER, location_id INTEGER, remarks TEXT);
  CREATE TABLE location_lenses (lens_id INTEGER, location_id INTEGER, remarks TEXT);
  `);

// 3. データ流し込み
const dataDir = path.join(process.cwd(), "src/data");
const items = JSON.parse(
  fs.readFileSync(path.join(dataDir, "items.json"), "utf-8"),
);
const locations = JSON.parse(
  fs.readFileSync(path.join(dataDir, "locations.json"), "utf-8"),
);
const shops = JSON.parse(
  fs.readFileSync(path.join(dataDir, "shops.json"), "utf-8"),
);
const recipes = JSON.parse(
  fs.readFileSync(path.join(dataDir, "recipes.json"), "utf-8"),
);
const lenses = JSON.parse(
  fs.readFileSync(path.join(dataDir, "lenses.json"), "utf-8"),
);

// データのインサート処理
for (const item of items) {
  sqlite
    .prepare("INSERT INTO items (id, name) VALUES (?, ?)")
    .run(item.id, item.name);
  for (const sId of item.shop)
    sqlite
      .prepare("INSERT INTO item_shops (item_id, shop_id) VALUES (?, ?)")
      .run(item.id, sId);
}

for (const shop of shops)
  sqlite
    .prepare("INSERT INTO shops (id, name) VALUES (?, ?)")
    .run(shop.id, shop.name);
for (const recipe of recipes)
  sqlite
    .prepare("INSERT INTO recipes (id, name) VALUES (?, ?)")
    .run(recipe.id, recipe.name);
for (const lens of lenses)
  sqlite
    .prepare("INSERT INTO lenses (id, type, world) VALUES (?, ?, ?)")
    .run(lens.id, lens.type, lens.world);

// リレーション
for (const location of locations) {
  sqlite
    .prepare("INSERT INTO locations (id, name) VALUES (?, ?)")
    .run(location.id, location.name);

  // ロケーションの入手アイテム
  for (const item of location.items) {
    sqlite
      .prepare(
        "INSERT INTO location_items (item_id, location_id, remarks) VALUES (?, ?, ?)",
      )
      .run(item.itemId, location.id, item.remarks);
  }

  // ロケーションの入手レシピ
  for (const recipe of location.recipes) {
    sqlite
      .prepare(
        "INSERT INTO location_recipes (recipe_id, location_id, remarks) VALUES (?, ?, ?)",
      )
      .run(recipe.recipeId, location.id, recipe.remarks);
  }

  // ロケーションのレンズ
  for (const lens of location.lenses) {
    sqlite
      .prepare(
        "INSERT INTO location_lenses (lens_id, location_id, remarks) VALUES (?, ?, ?)",
      )
      .run(lens.lensId, location.id, lens.remarks);
  }
}

const itemList = () => {
  const rows = db
    .select({
      itemName: schema.items.name,
      shopName: schema.shops.name,
    })
    .from(schema.items)
    .leftJoin(schema.itemShops, eq(schema.items.id, schema.itemShops.itemId))
    .leftJoin(schema.shops, eq(schema.itemShops.shopId, schema.shops.id))
    .all();

  const grouped = rows.reduce(
    (acc, row) => {
      if (!acc[row.itemName]) {
        acc[row.itemName] = {
          name: row.itemName,
          shop: new Set<string>(),
        };
      }
      if (row.shopName) acc[row.itemName].shop.add(row.shopName);
      return acc;
    },
    {} as Record<
      string,
      {
        name: string;
        shop: Set<string>;
      }
    >,
  );

  const rowsByChart = db
    .select({
      itemId: schema.locationItems.itemId,
      itemName: schema.items.name,
      locationName: schema.locations.name,
      chartId: schema.locationItems.locationId,
      remarks: schema.locationItems.remarks,
    })
    .from(schema.locationItems)
    .innerJoin(schema.items, eq(schema.locationItems.itemId, schema.items.id))
    .innerJoin(
      schema.locations,
      eq(schema.locationItems.locationId, schema.locations.id),
    )
    .all();

  const groupedByChart = rowsByChart.reduce(
    (acc, row) => {
      if (row.itemName) {
        // まだ配列が初期化されていない場合は空配列を作成
        if (!acc[row.itemName]) {
          acc[row.itemName] = [];
        }
        acc[row.itemName].push({
          locationName: row.locationName,
          remarks: row.remarks,
        });
      }

      return acc;
    },
    {} as Record<string, { locationName: string; remarks: string | null }[]>,
  );

  const finalData: {
    name: string;
    shop: string[];
  }[] = Object.values(grouped).map((item) => {
    return {
      name: item.name,
      shop: Array.from(item.shop),
      locations: groupedByChart[item.name],
    };
  });

  // 6. JSON書き出し
  const outDir = path.join(process.cwd(), "src/data");
  fs.writeFileSync(
    path.join(outDir, "compiled_data.json"),
    JSON.stringify(finalData, null, 2),
  );
};

const locationItems = () => {
  const rowsByChart = db
    .select({
      itemId: schema.locationItems.itemId,
      itemName: schema.items.name,
      locationId: schema.locationItems.locationId,
      remarks: schema.locationItems.remarks,
    })
    .from(schema.locationItems)
    .innerJoin(schema.items, eq(schema.locationItems.itemId, schema.items.id))
    .all();

  const groupedByChart = rowsByChart.reduce(
    (acc, row) => {
      if (row.locationId) {
        acc.push({
          locationId: row.locationId,
          itemName: row.itemName,
          remarks: row.remarks,
        });
      }

      return acc;
    },
    [] as { locationId: number; itemName: string; remarks: string | null }[],
  );

  // 6. JSON書き出し
  const outDir = path.join(process.cwd(), "src/data");
  fs.writeFileSync(
    path.join(outDir, "location-items.json"),
    JSON.stringify(groupedByChart, null, 2),
  );
};

const locationRecipes = () => {
  const rows = db
    .select({
      recipeId: schema.locationRecipes.recipeId,
      recipeName: schema.recipes.name,
      locationId: schema.locationRecipes.locationId,
      remarks: schema.locationRecipes.remarks,
    })
    .from(schema.locationRecipes)
    .innerJoin(
      schema.recipes,
      eq(schema.locationRecipes.recipeId, schema.recipes.id),
    )
    .all();

  const groupedByChart = rows.reduce(
    (acc, row) => {
      if (row.locationId) {
        acc.push({
          locationId: row.locationId,
          recipeName: row.recipeName,
          remarks: row.remarks,
        });
      }

      return acc;
    },
    [] as { locationId: number; recipeName: string; remarks: string | null }[],
  );

  // 6. JSON書き出し
  const outDir = path.join(process.cwd(), "src/data");
  fs.writeFileSync(
    path.join(outDir, "location-recipes.json"),
    JSON.stringify(groupedByChart, null, 2),
  );
};

const locationLenses = () => {
  const rows = db
    .select({
      lensId: schema.locationLenses.lensId,
      locationId: schema.locationLenses.locationId,
      remarks: schema.locationLenses.remarks,
    })
    .from(schema.locationLenses)
    .innerJoin(
      schema.lenses,
      eq(schema.locationLenses.lensId, schema.lenses.id),
    )
    .all();
  console.log(rows);
  const groupedByChart = rows.reduce(
    (acc, row) => {
      if (row.locationId) {
        acc.push({
          locationId: row.locationId,
          remarks: row.remarks,
        });
      }

      return acc;
    },
    [] as { locationId: number; remarks: string | null }[],
  );

  // 6. JSON書き出し
  const outDir = path.join(process.cwd(), "src/data");
  fs.writeFileSync(
    path.join(outDir, "location-lenses.json"),
    JSON.stringify(groupedByChart, null, 2),
  );
};

itemList();
locationItems();
locationRecipes();
locationLenses();

console.log("Successfully generated compiled_data.json");
