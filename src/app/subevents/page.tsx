import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "サブイベント";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

const featuredLinks = [
  {
    title: "レンズ収集",
    path: "/subevents/lens",
    desc: "",
  },
  {
    title: "カトリーヌの恋愛",
    path: "/subevents/catarine",
    desc: "",
  },
  {
    title: "クレーメルボール",
    path: "/subevents/kremerball",
    desc: "",
  },
  {
    title: "シャンバルーン",
    path: "/subevents/syanballoon",
    desc: "",
  },
  {
    title: "チャット特技習得",
    path: "/subevents/skill-chat",
    desc: "",
  },
  {
    title: "フォッグ特技習得",
    path: "/subevents/skill-fog",
    desc: "",
  },
  {
    title: "画家リシテア",
    path: "/subevents/lysithea",
    desc: "",
  },
  {
    title: "飛行艇の入手",
    path: "/subevents/flying-boad",
    desc: "",
  },
  {
    title: "アイフリートアジト",
    path: "/subevents/secret-base",
    desc: "",
  },
  {
    title: "隠し大晶霊",
    path: "/subevents/secret-spirits",
    desc: "",
  },
];

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>エターニアのサブイベントを紹介します</p>
      </PageSummary>

      <ContentLinks list={featuredLinks} />
    </article>
  );
}
