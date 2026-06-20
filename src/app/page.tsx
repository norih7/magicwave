import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "RE:MAGIC テイルズオブエターニア攻略";
export async function generateMetadata() {
  return {
    title,
    description: "テイルズオブエターニア攻略サイト。PS版、PSP版、リマスター版に対応しています。",
  };
}

export default async function HomePage() {
  const subTitle = "テイルズオブエターニア攻略";
  return (
    <div style={{ padding: "0px" }}>
      <SetPageTitle title={subTitle} />
      <h1>テイルズオブエターニア攻略サイト</h1>
      <p>2026/06/20ページ公開 レイアウト崩れなどこれから直していきます</p>
    </div>
  );
}
