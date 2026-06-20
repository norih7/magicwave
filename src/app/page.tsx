// src/app/page.tsx
import Link from "next/link";
import { db } from "@/db";
import { items } from "@/db/schema";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

export default async function HomePage() {
  // 💡 ビルド時に、JSON (Drizzle) から登録されている全アイテムを安全に一括取得！
  const allItems = await db.select().from(items).all();
  const title = "テイルズオブエターニア攻略";
  return (
    <div style={{ padding: "0px" }}>
      <SetPageTitle title={title} />
      <h1>テイルズオブエターニア攻略サイト</h1>
      <p>2026/06/20ページ公開 レイアウト崩れなどこれから直していきます</p>
    </div>
  );
}
