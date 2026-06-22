import SetPageTitle from "@/components/SetPageTitle";
import Link from "next/link";

// 攻略記事やカテゴリのダミーデータ
const featuredLinks = [
  {
    title: "TPの減少効果アクセサリ",
    path: "/systems/tp-reduce",
    desc: "戦闘でバンバン特技や晶霊術を利用できるようになるアクセサリを紹介",
  },
  {
    title: "チャットの特技習得",
    path: "/subevents/skill-chat",
    desc: "偶然辿り着くのが難しいチャットの特技習得場所をチェック",
  },
];

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "RE:MAGIC テイルズオブエターニア攻略";
export async function generateMetadata() {
  return {
    title,
    description:
      "テイルズオブエターニア攻略サイト。PS版、PSP版、リマスター版に対応しています。",
  };
}

export default async function HomePage() {
  const subTitle = "テイルズオブエターニア攻略情報トップ";
  return (
    <div style={{ padding: "0px" }}>
      <SetPageTitle title={subTitle} />
      <main className="space-y-12">
        <h1 className="text-lg font-bold mb-4">このサイトについて</h1>
        <p className="text-slate-1000">
          RE:MAGICではテイルズオブエターニアのストーリー、データ、やり込み要素など攻略情報を公開しています。リマスター版にも対応予定。シンプルでクリーンなサイトを目指しています。
        </p>

        {/* 2. 注目カテゴリセクション */}
        <section>
          <h2 className="">注目コンテンツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="mb-2 text-base">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. 更新履歴セクション */}
        <section className="">
          <h2 className="">最新更新履歴</h2>
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
