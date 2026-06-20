import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

// 静的生成（SSG）用：全アイテムのIDをURLとして登録する
export async function generateStaticParams() {
  const itemsPath = path.join(process.cwd(), "src/data/items.json");
  if (!fs.existsSync(itemsPath)) return [];

  const items = JSON.parse(fs.readFileSync(itemsPath, "utf-8"));

  // IDを文字列にしてslugとして登録
  return items.map((item: any) => ({
    slug: String(item.id),
  }));
}

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. items.json を読み込む
  const itemsPath = path.join(process.cwd(), "src/data/items.json");
  const allItems = JSON.parse(fs.readFileSync(itemsPath, "utf-8"));

  // 2. slug (ID) に一致するアイテムを探す
  const item = allItems.find((i: any) => String(i.id) === slug);

  if (!item) {
    notFound(); // なければ404
  }

  // 3. 表示処理
  return (
    <div style={{ padding: "20px" }}>
      <h1>{item.name}</h1>
      <p>ID: {item.id}</p>
      {/* ここで location などの結合データを表示 */}
      <h3>出現する町</h3>
      <ul>
        {/* 後ほどDrizzleで結合したデータをここに入れる */}
        <li>{JSON.stringify(item.location)}</li>
      </ul>
    </div>
  );
}
