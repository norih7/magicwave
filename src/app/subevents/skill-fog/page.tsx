import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " フォッグの特技習得";
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
          フォッグの特技は最初から習得している「バーニングフォース」以外はサブイベントにて取得します。サブイベントはセレスティア各地にいるピンクのミアキスと遭遇するというもの。これらのサブイベントは
          <span className="daiji">フォッグを仲間に加入している状態</span>
          でのみ発生します。
        </li>
      </ol>

      <h2>特技習得イベント一覧</h2>

      <div className="advice">
        <h3>エアブレイド</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>リッドがセイファート神殿で極光壁を習得後〜</dd>
          </dl>
        </nav>
        <p>
          ペイルティの港にいくとピンク色のミアキスが樽の上で眠っている。それを調べるとイベントが発生しフォッグが「エアブレイド」を習得する。
        </p>
      </div>

      <div className="advice">
        <h3>アクアスパイラル</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>闇の洞窟のダンジョンに入った後〜</dd>
          </dl>
        </nav>
        <p>
          ティンシアの町にあるノーム銅像の前にいるピンクのミアキスに近づくとイベントが発生してフォッグが「アクアスパイラル」を習得する。
        </p>
      </div>

      <div className="advice">
        <h3>レイジレーザー</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>セイファート観測所にてリッドが「極光剣」を習得後〜</dd>
          </dl>
        </nav>
        <p>
          アイメン近くの岬の砦にいるピンクのミアキスに近づくとイベントが発生してフォッグが「レイジレーザー」を習得する。
        </p>
      </div>

      <div className="advice">
        <h3>ダークレーザー</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>レグルスの丘をクリア後〜</dd>
          </dl>
        </nav>
        <p>
          ルイシカの町のがれきに近づくとイベントが発生してフォッグが「ダークレイザー」を習得する。がれきは奥の廃墟フロアではないことに注意。こには一見ピンク色のミアキスがいないがイベント中に現れることになる。
        </p>
      </div>

      <div className="advice">
        <h3>エレメンタルマスター</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>飛行艇入手後〜</dd>
          </dl>
        </nav>
        <p>
          <a href="/web/20210509171900/http://magic.brush-clover.com/eternia/subevent-lysithea.php">
            リシテアイベントで「キャンセラー」をもらっている状態
          </a>
          で飛行艇を入手していることが前提条件となる。この状態を満たして夜のジイニのオークション会場前にいくとイベントが発生してフォッグが「エレメンタルマスター」を習得する。
        </p>
      </div>
    </article>
  );
}
