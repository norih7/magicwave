import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "放浪の画家リシテア";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <h2>概要</h2>

      <ol>
        <li>
          <span className="daiji">フォッグを仲間に加入していない状態</span>
          でセレスティア各地を回ると画家のリシテアが絵を描いているところを遭遇する。(リシテアはフォッグの奥さん)イベントをすべて完了させるとリシテアからフォッグのアクセサリ「キャンセラー」を入手できます。これは強力なアイテムである一方、
          <a href="/web/20210509170322/http://magic.brush-clover.com/eternia/skill-fog.php">
            フォッグの特技「エレメンタルマスター」
          </a>
          を習得するために必要なアイテムです。
        </li>
      </ol>

      <h4>入手アイテム</h4>

      <ul className="item-onecol">
        <li>キャンセラー</li>
      </ul>

      <h2>イベント詳細</h2>

      <div className="advice">
        <h3>イベントの開始 : 解凍後のペイルティでの遭遇</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>氷晶霊の山をクリアしてペイルティが解凍された後〜</dd>
          </dl>
        </nav>
        <p>
          フォッグが仲間にいない状態でペイルティの港にいくと絵を描いている女性がいて近づくとイベントが発生する。
          <span className="daiji">
            このイベントを見ることで以降セレスティア各地でこの女性、リシテアが出現します。
          </span>
        </p>
      </div>

      <div className="advice">
        <h3>ティンシアでの遭遇</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>ペイルティでリシテアと遭遇後〜</dd>
          </dl>
        </nav>
        <p>
          ティンシアの町にあるノーム銅像の前にいるリシテアに話しかけるとイベントが発生する。会話のみのイベント。
        </p>
      </div>

      <div className="advice">
        <h3>岬の砦での遭遇</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>ペイルティでリシテアと遭遇後〜</dd>
          </dl>
        </nav>
        <p>
          アイメン近くの岬の砦にいるリシテアに話しかけるとイベントが発生する。会話のみのイベント。
        </p>
      </div>

      <div className="advice">
        <h3>ルイシカでの遭遇</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>ペイルティでリシテアと遭遇後〜</dd>
          </dl>
        </nav>
        <p>
          ルイシカの町
          奥にある廃墟の前にいるリシテアに話しかけるとイベントが発生する。会話のみのイベント。
        </p>
      </div>

      <div className="advice">
        <h3>イベントの最後 : ジイニでの遭遇</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>ジイニ以外の場所でリシテアと遭遇している</dd>
          </dl>
        </nav>
        <p>
          ジイニ以外の場所でリシテアと遭遇して会話をした状態で夜のジイニのオークション会場前にいるリシテアに話しかけるとイベントが発生。このイベントではフォッグのアクセサリ「キャンセラー」を習得する。
        </p>
      </div>
    </article>
  );
}
