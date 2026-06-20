import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts', // スキーマファイルの場所
  out: './drizzle',             // マイグレーションファイルの出力先
  dialect: 'sqlite',            // D1はSQLiteベースなのでsqliteを指定
});