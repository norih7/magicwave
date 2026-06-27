import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";
import { storyLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " ストーリーガイド";
export const metadata = {
  title,
  description:
    "エターニアのストーリー攻略情報。ダンジョン内で入手できるアイテム情報や、詰まりやすいダンジョンはマップ付きで解説！",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <ContentLinks list={Object.values(storyLinks)} />
    </article>
  );
}
