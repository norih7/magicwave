import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " 特技の習得について";
export const metadata = {
  title: createMetaTitle(title),
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

      <h2 id="1">リッド/ファラの特技習得</h2>
      <div className="advice mb-10">
        <p>
          リッドとファラは以下のキャラクターの特性レベル（斬りレベル、突きレベル/拳レベル、蹴りレベル）を持っており、これらが一定レベルまで上がると特技や奥義を習得する。
        </p>
        <p>
          これらのレベルは戦闘中にそのキャラクターが行った攻撃の種類の回数(リッドの場合は斬る/突く)によって加算されていく。戦闘中に斬り攻撃ばかりをしていると突きレベルが上がらず、特技を習得できないということにもなるので注意しましょう。
        </p>
        <p>
          なお、リッドとファラのこれらのレベルはステータス画面で確認できる。
        </p>
        <h3>取得方法詳細</h3>
        <ul>
          <li>
            <a href="/skills/rid">リッドの特技一覧へ</a>
          </li>
          <li>
            <a href="/skills/farth">ファラの特技一覧へ</a>
          </li>
        </ul>
      </div>

      <h2 id="2">キール/メルディの術習得</h2>
      <div className="advice mb-10">
        <p>
          キールとメルディは契約している大晶霊をC.ケイジのフリンジで組み合わせて晶霊術を習得できる。フリンジをするにはそれぞれの大晶霊の組み合わせとレベルが必要となる。
        </p>
        <p>
          大晶霊のレベルは戦闘勝利後に手に入る経験値がほぼそのまま加算されていく。ただし大晶霊は各々に経験値を蓄えており、契約後は0から蓄えていくことになる。
        </p>
        <p>各大晶霊の経験値はC.ケイジから確認することができる。</p>
        <h3>取得方法詳細</h3>
        <ul>
          <li>
            <a href="/skills/magic">晶霊術一覧へ</a>
          </li>
        </ul>
      </div>

      <h2 id="3">チャット/フォッグの特技習得</h2>
      <div className="advice">
        <p>チャットとフォッグはサブイベントにて特技を習得していく。</p>
        <h3>取得方法詳細</h3>
        <ul>
          <li>
            <a href="/skills/chat">チャットの特技一覧へ</a>
          </li>
          <li>
            <a href="/skills/fog">フォッグの特技一覧へ</a>
          </li>
        </ul>
      </div>
    </article>
  );
}
