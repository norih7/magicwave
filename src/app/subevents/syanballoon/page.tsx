import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "シャンバルーン";
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
          シャンバールで行なわれているミニゲーム。噴水フロアにいる老人に話しかけることでゲームに挑戦することができ、合計5回のコースをクリアすることでリッドの称号やアイテムを入手することができます。
        </li>
      </ol>

      <div className="advice">
        <div className="topic-block">
          <h3>シャンバルーン</h3>
          <div className="condition">
            <p>
              <span className="small-info">発生時期</span>シャンバール到着後〜
            </p>
          </div>
          <p>
            遠征の橋からインフェリアに戻ってきた後にシャンバールを訪れると「シャンバルーン」の内容が変わっています。初回クリア(5回セットをクリア)ではリッドの称号「キングあんどバルーン」、2回目以降は装備品「ステップリング」を入手できます。また内容が変わったとに近くにいるアイちゃんに話しかけるとアイテム「うちわ」を入手できます。これは使用不可能なアイテムでジイニのカジノで高く売れるもの。
          </p>
          <p>
            内容が変化後のシャンバルーンの攻略戦法については以下を参照ください。
          </p>
          <h4>遠征の橋からインフェリア到着後 | 1回目</h4>
          <table>
            <tbody>
              <tr>
                <td width="90">制限時間</td>
                <td>3秒</td>
              </tr>
              <tr>
                <td>戦法</td>
                <td>
                  ジャンプ攻撃で左側の2つを破壊し、続けて突きで左奥を破壊。その後はダッシュして右側の2つを斬り攻撃で破壊し、続けて突きで右奥を破壊しましょう。
                </td>
              </tr>
              <tr>
                <td>クリア動画</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <h4>遠征の橋からインフェリア到着後 | 2回目</h4>
          <table>
            <tbody>
              <tr>
                <td width="100">制限時間</td>
                <td>4秒</td>
              </tr>
              <tr>
                <td>戦法</td>
                <td>
                  鳳凰天駆でほとんどのボールを破壊し、残りはジャンプ斬りで破壊しましょう。
                </td>
              </tr>
              <tr>
                <td>クリア動画</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <h4>遠征の橋からインフェリア到着後 | 3回目</h4>
          <table>
            <tbody>
              <tr>
                <td width="100">制限時間</td>
                <td>6秒</td>
              </tr>
              <tr>
                <td>戦法</td>
                <td>
                  手間と次のボールを斬り、ジャンプ斬りで破壊した後は裂空斬で空中のボールを破壊。そのあとは残ったボールをジャンプ斬りなどで破壊しましょう。
                </td>
              </tr>
              <tr>
                <td>クリア動画</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <h4>遠征の橋からインフェリア到着後 | 4回目</h4>
          <table>
            <tbody>
              <tr>
                <td width="100">制限時間</td>
                <td>6秒</td>
              </tr>
              <tr>
                <td>戦法</td>
                <td>
                  裂空斬を2回繰り出してボールを破壊し、残りはジャンプ斬りで破壊しましょう。
                </td>
              </tr>
              <tr>
                <td>クリア動画</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <h4>遠征の橋からインフェリア到着後 | 5回目</h4>
          <table>
            <tbody>
              <tr>
                <td width="100">制限時間</td>
                <td>7秒</td>
              </tr>
              <tr>
                <td>戦法</td>
                <td>
                  まずは左奥にあるボールを破壊して、右側にダッシュしてジャンプ斬りで複数のボールを破壊。最後に空中で裂空斬を発動して一番高いボールを破壊しましょう。空中で裂空斬を発動するには使用回数が100回以上必要。
                </td>
              </tr>
              <tr>
                <td>クリア動画</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
