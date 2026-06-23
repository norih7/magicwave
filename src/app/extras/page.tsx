import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "隠しダンジョン";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

const featuredLinks = [
  {
    title: "闇の洞窟",
    path: "/extras/dark-cave",
    desc: "",
  },
  {
    title: "沈没船",
    path: "/extras/sunken-ship",
    desc: "",
  },
  {
    title: "アイフリードの墓",
    path: "/extras/aifread",
    desc: "",
  },
  {
    title: "ファロース教会地下",
    path: "/extras/farosu-underground",
    desc: "",
  },
  {
    title: "きらめきの塔",
    path: "/extras/valkyrie",
    desc: "",
  },
];

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>エターニアの隠しダンジョンを紹介します</p>
      </PageSummary>

      <ContentLinks list={featuredLinks} />
    </article>
  );
}
