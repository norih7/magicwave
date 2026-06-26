import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " マニュアルのしょ";
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
          アイテム「マニュアルのしょ」を入手すると戦闘モードでマニュアル操作を選択でき、自由な戦闘を楽しめるようになります。エターニアはシリーズの比較的初期の作品だけあって、最初から自由に操作キャラクターを動かすことができません。自分で自由にダッシュしたい！などセミオート操作では物足りない場合はぜひマニュアルのしょを入手しておきましょう。
        </p>
      </PageSummary>

      <section>
        <SectionTitle type="system">「マニュアルのしょ」の入手</SectionTitle>
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
      </section>
      <section>
        <div className="mb-8">
          <SectionTitle type="system">マニュアル操作への切替</SectionTitle>
          <p>
            設定画面で「マニュアル」、あるいは戦闘中にSELECTボタンを押すことで切替可能。
          </p>
        </div>
      </section>
    </article>
  );
}
