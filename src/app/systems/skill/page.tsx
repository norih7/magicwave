import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

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

      <h2>習得についての詳細</h2>

      <div className="advice">
        <h3 id="1">リッド/ファラの特技習得</h3>
        <div className="condition">
          <p>
            <span className="small-info">取得条件</span>斬りレベルと突きレベル /
            拳レベルと蹴レベル
          </p>
        </div>
        <p>
          リッドとファラは以下のキャラクターの特性レベル（斬りレベル、突きレベル/拳レベル、蹴りレベル）を持っており、これらが一定レベルまで上がると特技や奥義を習得する。
        </p>
        <p>
          これらのレベルは戦闘中にそのキャラクターが行った攻撃の種類の回数(リッドの場合は斬る/突く)によって加算されていく。戦闘中に斬り攻撃ばかりをしていると突きレベルが上がらず、特技を習得できないということにもなるので注意しましょう。
        </p>
        <p>
          なお、リッドとファラのこれらのレベルはステータス画面で確認できる。
        </p>
        <ul>
          <li>
            <a href="/web/20210509173743/http://magic.brush-clover.com/eternia/skill-rid.php">
              リッドの特技一覧へ
            </a>
          </li>
          <li>
            <a href="/web/20210509173743/http://magic.brush-clover.com/eternia/skill-farth.php">
              ファラの特技一覧へ
            </a>
          </li>
        </ul>
      </div>

      <div className="advice">
        <h3 id="2">キール/メルディの術習得</h3>
        <div className="condition">
          <p>
            <span className="small-info">取得条件</span>
            クレーメルケイジ(C.ケイジ)によるフリンジ
          </p>
        </div>
        <p>
          キールとメルディは契約している大晶霊をC.ケイジのフリンジで組み合わせて晶霊術を習得できる。フリンジをするにはそれぞれの大晶霊の組み合わせとレベルが必要となる。
        </p>
        <p>
          大晶霊のレベルは戦闘勝利後に手に入る経験値がほぼそのまま加算されていく。ただし大晶霊は各々に経験値を蓄えており、契約後は0から蓄えていくことになる。
        </p>
        <p>各大晶霊の経験値はC.ケイジから確認することができる。</p>
        <ul>
          <li>
            <a href="/web/20210509173743/http://magic.brush-clover.com/eternia/skill-magic.php">
              晶霊術一覧へ
            </a>
          </li>
        </ul>
      </div>

      <div className="advice">
        <h3 id="3">チャット/フォッグの特技習得</h3>
        <div className="condition">
          <p>
            <span className="small-info">取得条件</span>サブイベント
          </p>
        </div>
        <p>チャットとフォッグはサブイベントにて特技を習得していく。</p>
        <ul>
          <li>
            <a href="/web/20210509173743/http://magic.brush-clover.com/eternia/skill-chat.php">
              チャットの特技一覧へ
            </a>
          </li>
          <li>
            <a href="/web/20210509173743/http://magic.brush-clover.com/eternia/skill-fog.php">
              フォッグの特技一覧へ
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
