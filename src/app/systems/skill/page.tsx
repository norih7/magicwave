import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import SectionHeader from "@/components/SectionHeader";
import GuideList from "@/components/GuideList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " 特技の習得について";
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
          技/術についての習得方法について説明します。エターニアではキャラクターのレベルアップでは特技や晶霊術を取得せず、キャラクタ毎に取得方法が異なります。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="system">リッド/ファラの特技習得</SectionTitle>
        <div className="mb-8">
          <p>
            リッドとファラは通常のレベルとは別に専用レベル（リッドは斬りレベル、突きレベル/ファラは拳レベル、蹴りレベル）を持っており、これらが一定レベルまで上がると特技や奥義を習得します。
          </p>
          <p>
            斬りレベルなどは戦闘中にキャラクターが行った攻撃の種類の回数(リッドの場合は斬る/突く)によって加算されていきます。戦闘中に斬り攻撃ばかりをしていると突きレベルが上がらず、特技を習得できないため注意しましょう。
          </p>
          <p>斬りレベルなどはリッドとファラのステータス画面で確認できます。</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2">特技一覧と習得情報</h3>
          <GuideList
            items={[
              {
                title: "リッドの特技一覧",
                href: "/skills/rid",
              },
              {
                title: "ファラの特技一覧",
                href: "/skills/farth",
              },
            ]}
          />
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="system">キール/メルディの術習得</SectionTitle>
        <div className="mb-8">
          <p>
            キールとメルディは契約している大晶霊をC.ケイジのフリンジで組み合わせて晶霊術を習得できる。フリンジをするにはそれぞれの大晶霊の組み合わせとレベルが必要となる。
          </p>
          <p>
            大晶霊のレベルは戦闘勝利後に手に入る経験値がほぼそのまま加算されていく。ただし大晶霊は各々に経験値を蓄えており、契約後は0から蓄えていくことになる。
          </p>
          <p>各大晶霊の経験値はC.ケイジから確認することができる。</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2">晶霊術一覧とフリンジ情報</h3>
          <GuideList
            items={[
              {
                title: "晶霊術一覧",
                href: "/skills/magic",
              },
            ]}
          />
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="system">チャット/フォッグの特技習得</SectionTitle>
        <div className="mb-8">
          <p>チャットとフォッグはサブイベントにて特技を習得していく。</p>
        </div>
        <div className="mb-8">
          <h3 className="mb-2">特技一覧と習得情報</h3>
          <GuideList
            items={[
              {
                title: "チャットの特技一覧",
                href: "/skills/chat",
              },
              {
                title: "チャットの特技習得イベント",
                href: "/subevents/skill-chat",
              },
              {
                title: "フォッグの特技一覧",
                href: "/skills/fog",
              },
              {
                title: "フォッグの特技習得イベント",
                href: "/subevents/skill-fog",
              },
            ]}
          />
        </div>
      </section>
    </article>
  );
}
