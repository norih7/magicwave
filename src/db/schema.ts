import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { arrayBuffer } from "stream/consumers";

// --- マスタテーブル ---

// アイテムの定義
export const items = sqliteTable("items", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

// ローケーション（タウン、ダンジョン）の定義
export const locations = sqliteTable("locations", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

// ショップの定義
export const shops = sqliteTable("shops", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

// 料理レシピの定義
export const recipes = sqliteTable("recipes", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

// レンズの定義
export const lenses = sqliteTable("lenses", {
  id: integer("id").primaryKey(),
  type: text("type").notNull(),
  world: text("world").notNull(),
});

// --- 中間テーブル（リレーション） ---

// アイテムとショップの多対多関係
export const itemShops = sqliteTable("item_shops", {
  itemId: integer("item_id").references(() => items.id),
  shopId: integer("shop_id").references(() => shops.id),
});

// アイテムとチャートの多対多関係
export const locationItems = sqliteTable("location_items", {
  itemId: integer("item_id").references(() => items.id),
  locationId: integer("location_id").references(() => locations.id),
  remarks: text("remarks"),
});

// レシピとロケーションの多対多関係
export const locationRecipes = sqliteTable("location_recipes", {
  recipeId: integer("recipe_id").references(() => recipes.id),
  locationId: integer("location_id").references(() => locations.id),
  remarks: text("remarks"),
});

// レンズとロケーションの多対多関係
export const locationLenses = sqliteTable("location_lenses", {
  lensId: integer("lens_id").references(() => lenses.id),
  locationId: integer("location_id").references(() => locations.id),
  remarks: text("remarks"),
});
