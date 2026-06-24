import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";
import { extraLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "隠しダンジョン";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>エターニアの隠しダンジョンを紹介します</p>
      </PageSummary>

      <ContentLinks list={Object.values(extraLinks)} />
    </article>
  );
}
