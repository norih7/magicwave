import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "クレーメルボール";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <h2>概要</h2>

      <ol>
        <li>
          ミンツの町のグラウンドで行われるミニゲーム。ミニゲームをクリアすることでリッドが称号を獲得する。アイテムの入手などはありませんが丁寧に作られたミニゲームです。PS版だと2人対戦もできちゃう作り込み。
        </li>
      </ol>

      <h2>イベントの詳細</h2>

      <div className="advice">
        <div className="topic-block">
          <h3>クレーメルボール</h3>
          <div className="condition">
            <p>
              <span className="small-info">発生時期</span>ミンツ到着後〜
            </p>
          </div>
          <p>
            ミンツの町のグラウンドにいくと体操着の女学生がいて話しかけるとミニゲーム「クレーメルボール」で遊ぶことができます。以下にゲームについていろいろ箇条書き。
          </p>
          <ul>
            <li>
              制限時間60秒の間に対戦相手よりボールにぶつからないようにすれば勝ち。
            </li>
            <li>
              基本的に3回勝負であり、3回目でドローになった場合は延長戦が行われる。
            </li>
            <li>
              自分と相手、ボールは「赤属性、青属性、無属性」のいずれかの属性を持つ。属性はボムを発動する際に関係してくる概念。キャラクターの属性は発生するクリスタルを拾うことで変化させることができる。
            </li>
            <li>ボムを発動するとそのキャラクターは無属性となる。</li>
            <li>
              ボムは「◯」ボタンで発動できる。ボムを発動するとキャラクターとボールの属性によって反応が起きる。自分と同じ色であれば反発し、違う色であれば引き合う。
            </li>
            <li>
              ボムをうまくつかって対戦相手にボールをぶつけるのはもちろんだが、対戦相手のところまでいき自分にボールを引き寄せてぶつける戦法も有効。
            </li>
            <li>
              どのキャラクターを操作して勝利しても称号を入手するのはリッド。
            </li>
            <li>
              ストーリーの進行具合によってクリア後の入手称号は違ってくる。セレスティアにいく前にクリアすると「たまころがし」、遠征の橋からインフェリアに戻ってきた後からは「プロボウラー」と「かこもん」となる。
            </li>
          </ul>
        </div>
      </div>

      <h4>称号</h4>

      <ul className="item-twocol">
        <li>リッドの称号「たまころがし」</li>
        <li>リッドの称号「プロボウラー」</li>
        <li>リッドの称号「かこもん」</li>
      </ul>
    </article>
  );
}
