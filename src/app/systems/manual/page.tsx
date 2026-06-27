import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " マニュアル操作/特殊操作";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          エターニアはシリーズの比較的初期の作品のため、最初から自由に操作キャラクターを動かすことができません（セミオート戦闘）。序盤のレグルス道場でアイテム「マニュアルのしょ」を入手すると戦闘モードでマニュアル操作を選択でき、自由な戦闘を楽しめるようになります。
        </p>
        <p>
          また装備することでバックステップを取れるようになるなど戦闘中に特殊な効果があるアイテムも解説します。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="system">
          マニュアル操作（マニュアルのしょ入手）
        </SectionTitle>
        <Information type="warning">
          リマスター版では初期からマニュアル操作ができ、マニュアルのしょが無くなる可能性があります。発売後に検証してページを更新します。
        </Information>
        <div className="mb-4">
          <h3>発生時期</h3>
          <p>いつでも</p>
        </div>
        <div className="mb-4">
          <h3>入手方法</h3>
          <p>
            レグルス道場の弟子に話かけ「マニュアル操作で激しく戦いたい」を選択すると入手できます。取得はいつでも可能ですが、ストーリー的にレグルス道場に訪れたときにやっておくのがオススメです。
          </p>
        </div>
        <div className="mb-4">
          <h3>マニュアル操作への切り替え</h3>
          <p>
            設定画面で「マニュアル」、あるいは戦闘中にSELECTボタンを押すことで切替可能。
          </p>
        </div>
      </section>
      <section>
        <div className="mb-8">
          <SectionTitle type="system">特殊な装備品</SectionTitle>
          <p>更新中</p>
        </div>
      </section>
    </article>
  );
}
