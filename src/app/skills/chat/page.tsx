import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "チャットの特技";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <div className="advice">
        <h3>ピコハン</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>初期習得特技</dd>
          </dl>
        </nav>
        <p>
          ハンマーを投げて敵を攻撃する特技。命中すると相手が気絶状態になることがあります。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12</td>
              <td>4</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>ローバーアイテム</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>初期習得特技</dd>
          </dl>
        </nav>
        <p>
          飛び道具のワイヤーを敵にぶつけてアイテムを盗むことができる特技。ぶんどる的特技。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15</td>
              <td>2</td>
              <td>物理</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>ポイハン</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>
          毒のついたハンマーを投げる特技。命中すると相手が毒状態になることがあります。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16</td>
              <td>4</td>
              <td>水</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>コチハン</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>
          凍ったハンマーを投げて敵を攻撃する特技。命中すると敵が凍結状態になることがあります。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>4</td>
              <td>氷</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>パラライボール</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>
          雷を宿したボールを敵にぶつける特技。命中すると敵が麻痺状態になることがあります。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>3</td>
              <td>雷</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>エターナルスロー</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>
          すごいスピードでTPが減っていき、チャットのTPが尽きるか1分間経過するまでハンマーを投げ続けます。パイングミがたくさんあるとかなり強い特技。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>60</td>
              <td>--</td>
              <td>物理</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
