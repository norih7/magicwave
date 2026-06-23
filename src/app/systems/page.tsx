import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "システム解説";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

const featuredLinks = [
  {
    title: "マニュアルのしょ",
    path: "/systems/manual",
    desc: "",
  },
  {
    title: "特技の習得",
    path: "systems/skill",
    desc: "",
  },
  {
    title: "ルーンボトル",
    path: "/systems/rune",
    desc: "",
  },
  {
    title: "TPの減少効果",
    path: "/systems/tp-reduce",
    desc: "",
  },
  {
    title: "マスターレシピ",
    path: "/systems/master-recipe",
    desc: "",
  },
];

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>エターニアのシステムを解説</p>
      </PageSummary>

      <ContentLinks list={featuredLinks} />
    </article>
  );
}
