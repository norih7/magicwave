import SetPageTitle from "@/components/SetPageTitle";
import Link from 'next/link';

// 攻略記事やカテゴリのダミーデータ
const featuredLinks = [
  { title: "タイトル1", path: "/database/weapons", desc: "説明" },
];

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "RE:MAGIC テイルズオブエターニア攻略";
export async function generateMetadata() {
  return {
    title,
    description: "テイルズオブエターニア攻略サイト。PS版、PSP版、リマスター版に対応しています。",
  };
}

export default async function HomePage() {
  const subTitle = "テイルズオブエターニア攻略";
  return (
    <div style={{ padding: "0px" }}>
      <SetPageTitle title={subTitle} />
    <main className="space-y-12">
        <h1 className="text-xl font-bold mb-4">テイルズオブエターニア攻略まとめ</h1>
        <p className="text-lg text-slate-600">説明文</p>

      {/* 2. 注目カテゴリセクション */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">注目コンテンツ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredLinks.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="block p-6 border border-gray-50 rounded-lg hover:shadow-lg transition-shadow bg-white"
            >
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. 更新履歴セクション */}
      <section className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">最新更新履歴</h2>
        <ul className="space-y-2">
          <li className="flex gap-4">
            <span className="text-slate-400">2026/06/20</span>
            サイトを公開しました
          </li>
        </ul>
      </section>
    </main>
    </div>
  );
}
