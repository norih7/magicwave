import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "カトリーヌの恋愛イベント";
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
          ミンツ大学の女学生、カトリーヌに関するイベント。彼女の恋愛イベントに遭遇した回数によって結末が変化する。これらのイベントは順番が決まっており、
          <span className="daiji">
            霊峰ファロースを登りセレスティアへ渡る前までしか発生しない。
          </span>
          ハッピーエンドに終わればファラの称号を入手できる。
        </li>
      </ol>
      <h4>入手称号</h4>
      <ul className="item-onecol">
        <li>ファラの称号「あいのネゴシエーター」</li>
      </ul>
      <h4>入手アイテム</h4>
      <ul className="item-onecol">
        <li>なし</li>
      </ul>
      <h2>イベントの詳細</h2>
      <div className="advice">
        <h3>1回目 ミンツの運動場前</h3>
        <div className="condition">
          <p>
            <span className="small-info">発生時期</span>ミンツ到着後から
          </p>
        </div>
        <p>
          キールに会うためにミンツに到着以降〜モルル到着前までミンツの運動場前に行くとピンク髪の学生「カトリーヌ」がいる。ここでカトリーヌが王都へ向かうというイベントを見る。
        </p>
        <h3>2回目 モルルの食材屋</h3>
        <div className="condition">
          <p>
            <span className="small-info">発生時期</span>モルル到着後から
          </p>
        </div>
        <p>
          モルルのツタを上った先にある食材屋に行くとカトリーヌと老人が話しているイベントを見る。カトリーヌが老人の娘と間違えられて、足止めされているがファラが仲介するというもの。
        </p>
        <h3>3回目 定期連絡船</h3>
        <div className="condition">
          <p>
            <span className="small-info">発生時期</span>
            王都インフェリア到着後から
          </p>
        </div>
        <p>
          インフェリア港で定期連絡船に乗り込み、カトリーヌが船員に怒られているイベントを見る。
        </p>
        <h3>4回目 バロールの本屋</h3>
        <div className="condition">
          <p>
            <span className="small-info">発生時期</span>バロール到着後から
          </p>
        </div>
        <p>
          バロールの本屋で本を熱心に読むカトリーヌと遭遇するイベントを見る。
        </p>
        <h3>5回目 シャンバールの防具屋</h3>
        <div className="condition">
          <p>
            <span className="small-info">発生時期</span>シャンバール到着後から
          </p>
        </div>
        <p>
          シャンバールの防具屋でカトリーヌが店員に高価な服を勧められているイベントを見る。
        </p>
        <h3>6回目 レグルス道場</h3>
        <div className="condition">
          <p>
            <span className="small-info">発生時期</span>火晶霊の谷に入った後から
          </p>
        </div>
        <p>
          レグルス道場でカトリーヌがモンクに囲まれてしまっているイベントを見る。
        </p>
      </div>
      <h2>イベントの結末</h2>
      <ol>
        <li>
          遠征の橋を渡ってセレスティアからインフェリアへ戻ってきたあとにカトリーヌを尋ねると結末がわかる。カトリーヌは発生したイベントの数によっている場所が違う。
        </li>
        <li>
          <table>
            <thead>
              <tr>
                <th>イベント発生</th>
                <th>結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2回以内</td>
                <td>
                  カトリーヌは国立天文台にいる。恋人のピエールとは別れているバッドエンド。
                </td>
              </tr>
              <tr>
                <td>3回〜5回</td>
                <td>カトリーヌはバロールの酒屋にいる。</td>
              </tr>
              <tr>
                <td>すべて</td>
                <td>
                  カトリーヌは国立天文台にいる。恋人のピエールとともに国立天文台で働いている。またファラが称号を入手する。
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ol>
    </article>
  );
}
