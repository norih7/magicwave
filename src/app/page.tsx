import SetPageTitle from "@/components/SetPageTitle";
import ContentLinks from "@/components/ContentLinks";
import { storyLinks } from "@/constants";
import { subeventLinks } from "@/constants";
import { systemLinks } from "@/constants";

// 攻略記事やカテゴリのダミーデータ
type Link = {
  title: string;
  path: string;
  desc: string;
  image?: string;
};
const featuredLinks: Link[] = [];
featuredLinks.push(storyLinks["guide4"]);
featuredLinks.push(subeventLinks["skill-chat"]);
featuredLinks.push(systemLinks["tp-reduce"]);

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
          <ContentLinks list={featuredLinks} />
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
