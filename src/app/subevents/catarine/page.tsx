import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "カトリーヌの恋愛イベント";
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
          町やダンジョンなどの特定のポイントを◯ボタンで調べるとレンズと呼ばれるアイテムを入手することができることがある。これは使うことはできないが、一定枚数以上を集めるとイレーヌという女性から特殊なアイテムをもらうことができるもの。
        </li>
        <li>
          レンズを集めるのは大変だが、もらえるアイテムは貴重なものばかり。全部で60枚あるので頑張って収集していこう。なおすべてのレンズを集めるには飛空挺が必要となる。
        </li>
      </ol>

      <h2>イベントの詳細</h2>

      <div className="advice">
        <div className="topic-block">
          <h3>レンズの入手場所</h3>
          <div className="condition">
            <p>
              <span className="small-info">発生時期</span>いつでも
            </p>
          </div>
          <p>
            <a href="/web/20210509173955/http://magic.brush-clover.com/eternia/data-lens.php">
              レンズの入手場所一覧はデータが多いのでこちらのページにて掲載しています。
            </a>
          </p>
        </div>
      </div>

      <div className="advice">
        <div className="topic-block">
          <h3>レンズの交換について</h3>
          <div className="condition">
            <p>
              <span className="small-info">発生時期</span>シャンバールに到着以降
            </p>
          </div>
          <p>
            ストーリーを進めていき灼熱の町シャンバールに到着すると道具屋の前に紫色の髪をしたイレーヌという女性がいる。レンズを一定枚数以上もった状態でイレーヌに話しかけることでアイテムをもらうことができる。また、セレスティアの職人の町ティンシアにもイレーヌは登場する。もらえるアイテムに変化はないので近場に立ち寄るといいだろう。
          </p>
          <p>
            もらえるアイテムは下記のとおり。貴重な装備品目的であれば50枚集めるのを目指してみるのがいい。60枚すべてをコンプリートするのはやり込みの域になる。
          </p>
          <h4>もらえるアイテム一覧</h4>
          <table>
            <thead>
              <tr>
                <th>レンズの枚数</th>
                <th>もらえるアイテム</th>
                <th>アイテムの説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>コンボコマンド</td>
                <td>装備品:戦闘中にコマンド入力ですべての術技を出せる</td>
              </tr>
              <tr>
                <td>20</td>
                <td>インフェリマント</td>
                <td>
                  装備品:火、水、風 属性の攻撃を40%軽減
                  <br />
                  地、雷、氷 属性の攻撃は40%ダメージアップ
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>セレスティマント</td>
                <td>
                  装備品:地、雷、氷 属性の攻撃を40%軽減
                  <br />
                  火、水、風 属性の攻撃は40%ダメージアップ
                </td>
              </tr>
              <tr>
                <td>40</td>
                <td>イクストリーム</td>
                <td>装備品:攻撃力+200、防御力-200</td>
              </tr>
              <tr>
                <td>50</td>
                <td>クローナシンボル</td>
                <td>装備品:すべての異常状態を防止する</td>
              </tr>
              <tr>
                <td>60</td>
                <td>称号「レンズハンター」</td>
                <td>称号:リッドの称号</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
