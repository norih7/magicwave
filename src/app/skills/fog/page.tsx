import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "フォッグの特技";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <div className="advice">
        <h3>バーニングフォース</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>初期習得</dd>
          </dl>
        </nav>
        <p>火属性の銃弾攻撃。キャンセルLv1。</p>
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
              <td>2</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>アクアスパイラル</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>水属性の銃弾攻撃。キャンセルLv1。</p>
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
              <td>28</td>
              <td>6</td>
              <td>水</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>エアブレイド</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>風属性の銃弾攻撃。キャンセルLv1。</p>
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
              <td>24</td>
              <td>6</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>レイジレーザー</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>光属性の銃弾攻撃。キャンセルLv2。</p>
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
              <td>34</td>
              <td>8</td>
              <td>光</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>ダークレイザー</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>闇属性の銃弾攻撃。キャンセルLv2。</p>
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
              <td>40</td>
              <td>12</td>
              <td>闇</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>エレメンタルマスター</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>サブイベントにて習得</dd>
          </dl>
        </nav>
        <p>
          全属性の銃弾をそれぞれ放つ攻撃。キャンセルLv3。この技をそのまま出そうとするとかなり詠唱時間がかかりますが、キャンセラーによりLv1→Lv2とつなげていくと発動がかなり短縮できます。
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
              <td>72</td>
              <td>12</td>
              <td>火、風、水、地、物理</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
