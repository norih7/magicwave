import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Link from "next/link";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " ストーリーガイド";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

const featuredLinks = [
  {
    title: "ラシュアン〜水晶霊の河",
    path: "/stories/guide1",
    desc: "ストーリー開始から大晶霊ウンディーネのいる水晶霊の河までをガイド",
  },
  {
    title: "いざないの密林〜火晶霊の谷",
    path: "/stories/guide2",
    desc: "序盤の難所いざないの密林の攻略情報をチェック",
  },
  {
    title: "ファロース〜チャットの小屋",
    path: "/stories/guide3",
    desc: "セレスティア突入後のストーリーガイド 難易度の高いチャットの小屋も解説",
  },
  {
    title: "ペイルティ〜バリル城",
    path: "/stories/guide4",
    desc: "雷晶霊の遺跡とバリル城など難易度の高いセレスティアのダンジョンを解説",
  },
  {
    title: "ペイルティ〜シゼル城",
    path: "/stories/guide5",
    desc: "エンディングまでガイド シゼル城のダンジョン情報やラストバトルを解説",
  },
];

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>テイルズオブエターニアのストーリー攻略情報です</p>
      </PageSummary>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </article>
  );
}
