import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";

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
    image: "/link-header-stories-guide3.jpg",
    desc: "セレスティア突入後のストーリーガイド 難易度の高いチャットの小屋も解説",
  },
  {
    title: "ペイルティ〜バリル城",
    path: "/stories/guide4",
    image: "/link-header-stories-guide4.jpg",
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

      <ContentLinks list={featuredLinks} />
    </article>
  );
}
