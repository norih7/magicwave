import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";
import { skillLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "特技/晶霊術";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>各キャラクターの特技/晶霊術です。習得レベルや特殊な効果も説明。</p>
      </PageSummary>

      <ContentLinks list={Object.values(skillLinks)} />
    </article>
  );
}
