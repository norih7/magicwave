// src/db/index.ts
import * as schema from './schema';
import itemsData from '@/data/items.json';

// Drizzleが schema.ts から自動生成してくれる「正しいアイテムの型」を抽出
type ItemType = typeof schema.items.$inferSelect;

// 💡 Drizzleの複雑なクエリチェーンを、型安全のままJavaScriptの配列操作に翻訳するモックオブジェクト
export const db = {
  select: () => ({
    from: (_table: any) => {
      // 共通のデータ取得・検索関数
      const executeQuery = (condition?: any): ItemType[] => {
        const data = itemsData as any[];
        
        if (!condition) return data;

        // 💡 画面側から `like(items.name, "%ワード%")` が渡された場合の処理
        // Drizzleのlikeは内部に「chunk」というプロパティを持っています
        if (condition.chunks || (condition.toSQL && String(condition.toSQL()).includes('like'))) {
          // 検索ワードを安全に抽出（大体のケースで `%ワード%` という文字列がどこかに含まれます）
          const searchStr = JSON.stringify(condition).match(/%([^%]+)%/)?.[1] || '';
          if (!searchStr) return data;
          return data.filter(item => 
            item.name && item.name.toLowerCase().includes(searchStr.toLowerCase())
          );
        }

        // 💡 画面側から `eq(items.id, id)` が渡された場合の処理
        if (condition.left && condition.right) {
          const targetId = Number(condition.right);
          return data.filter(item => item.id === targetId);
        }

        // 💡 前のステップで仕込んだ簡易 `{ id: number }` 形式が来ても動くように互換性を維持
        if (typeof condition === 'object' && 'id' in condition) {
          return data.filter(item => item.id === Number(condition.id));
        }

        return data;
      };

      return {
        // 1. トップ画面などで使われる「全件、または条件に合うものを配列で返す」メソッド
        // where句がない場合は、そのまま直接チェーンできるようにする
        where: (condition: any) => ({
          // like() などのSQL型オブジェクトをそのまま受け付ける
          all: async (): Promise<ItemType[]> => executeQuery(condition),
          get: async (): Promise<ItemType | undefined> => executeQuery(condition)[0],
          // Next.js 16 の特定のクエリ記述（await db.select().from().where()）への対応
          then: (onfulfilled?: (value: ItemType[]) => any) => 
            Promise.resolve(executeQuery(condition)).then(onfulfilled)
        }),

        // where句をすっ飛ばして直接呼び出された場合（全件取得）
        all: async (): Promise<ItemType[]> => executeQuery(),
        get: async (): Promise<ItemType | undefined> => executeQuery()[0],
        
        // プロキシオブジェクトとして、Promiseライクな挙動（直接awaitされた場合）をサポート
        then: (onfulfilled?: (value: ItemType[]) => any) => 
          Promise.resolve(executeQuery()).then(onfulfilled)
      };
    }
  })
};