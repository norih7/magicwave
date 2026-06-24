import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import EventCondition from "@/components/EventCondition";
import Tag from "@/components/Tag";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "晶霊術（メルディ＆キール）";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <h2>おすすめの特技</h2>
      <div className="advice">
        <p>準備中</p>
      </div>

      <h2>水の晶霊術</h2>

      <div className="advice">
        <h3>アクアエッジ</h3>
        <EventCondition category="skill">キール加入時に習得済み</EventCondition>
        <p>キールが初期習得している晶霊術。楕円形の水の塊を相手にぶつける。</p>
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
              <td>4</td>
              <td>1</td>
              <td>水</td>
            </tr>
          </tbody>
        </table>

        <h3>スプレッド</h3>
        <EventCondition category="skill">
          <Tag>ウンディーネLv1</Tag>
        </EventCondition>
        <p>出現した水の柱に当たった敵を浮かせながらダメージを与える。</p>
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
              <td>9</td>
              <td>3</td>
              <td>水</td>
            </tr>
          </tbody>
        </table>

        <h3>ヒール</h3>
        <EventCondition category="skill">
          <Tag>ウンディーネLv1</Tag>
          <Tag>シルフLv1</Tag>
        </EventCondition>
        <p>味方一人のHPを50%回復させる。</p>
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
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>アシッドレイン</h3>
        <EventCondition category="skill">
          <Tag>ウンディーネLv10</Tag>
          <Tag>ノームLv5</Tag>
        </EventCondition>
        <p>雨が当たった敵に対して与えるダメージが一時的に上昇する。</p>
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
              <td>10</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>ナース</h3>
        <EventCondition category="skill">
          <Tag>ウンディーネLv10</Tag>
          <Tag>セルシウスLv1</Tag>
        </EventCondition>
        <p>味方全員のHPを40%回復させる。</p>
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
              <td>42</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>キュア</h3>
        <EventCondition category="skill">
          <Tag>ウンディーネLv15</Tag>
          <Tag>マクスウェルLv1</Tag>
        </EventCondition>
        <p>味方一人のHPを90%回復させる。</p>
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
              <td>32</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>リザレクション</h3>
        <EventCondition category="skill">
          <Tag>ウンディーネLv20</Tag>
          <Tag>レムLv1</Tag>
        </EventCondition>
        <p>
          戦闘中は魔法陣の中にいる仲間のHPを最大90%ほど回復。メニュー画面では全員に適用される。
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
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>レイズデッド</h3>
        <EventCondition category="skill">
          <Tag>ウンディーネLv20</Tag>
          <Tag>ゼクンドゥスLv1</Tag>
        </EventCondition>
        <p>戦闘不能の味方を回復し、HPも70%回復させる。</p>
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
              <td>90</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>風の晶霊術</h2>

      <div className="advice">
        <h3>ウインドカッター</h3>
        <EventCondition category="skill">キール加入時に習得済み</EventCondition>
        <p>キールが初期習得している晶霊術。風の刃を左右に敵に当てる。</p>
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
              <td>7</td>
              <td>2</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>

        <h3>エアスラスト</h3>
        <EventCondition category="skill">
          <Tag>シルフLv1</Tag>
        </EventCondition>
        <p>
          複数の風の刃を敵にぶつけて攻撃する。攻撃範囲にクセがあるが、うまく使えば中盤の敵の詠唱の妨げにも使える。
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
              <td>8</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>

        <h3>コンセントレート</h3>
        <EventCondition category="skill">
          <Tag>シルフLv6</Tag>
          <Tag>イフリートLv5</Tag>
        </EventCondition>

        <p>
          サポート系晶霊術。戦闘中にのみ発動できて、仲間一人の集中力をアップさせる。
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
              <td>6</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>サイクロン</h3>
        <EventCondition category="skill">
          <Tag>シルフLv20</Tag>
          <Tag>シャドウLv9</Tag>
        </EventCondition>
        <p>大きな竜巻を5、6秒ほど発生させて触れた敵にダメージを与える。</p>
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
              <td>44</td>
              <td>16</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>火の晶霊術</h2>
      <div className="advice">
        <h3>ファイアボール</h3>
        <EventCondition category="skill">キール加入時に習得済み</EventCondition>
        <p>
          キールが初期習得している晶霊術。小さな火玉を3つ順々と敵に当てて攻撃する。
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
              <td>7</td>
              <td>3</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>

        <h3>イラプション</h3>
        <EventCondition category="skill">
          <Tag>イフリートLv1</Tag>
        </EventCondition>
        <p>
          マグマの噴火に当たった敵を3回攻撃し、その後に降ってくる岩石でも攻撃する。範囲はなかなか広いため、敵が固まっている場所に有効。
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
              <td>18</td>
              <td>10</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>

        <h3>シャープネス</h3>
        <EventCondition category="skill">
          <Tag>イフリートLv5</Tag>
          <Tag>ウンディーネLv7</Tag>
        </EventCondition>
        <p>
          サポート系晶霊術。戦闘中にのみ仲間一人の攻撃力を上昇させる。重ね掛けは無効となる。
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
              <td>6</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>フレイムウォール</h3>
        <EventCondition category="skill">
          <Tag>イフリートLv12</Tag>
          <Tag>ノームLv9</Tag>
        </EventCondition>
        <p>
          敵の前に炎の壁を作成して、触れた敵にダメージを与える。1回ダメージを与えたり、他の晶霊術の発動によって壁は消滅する。使い所が難しい。
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
              <td>1</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>

        <h3>エクスプロード</h3>
        <EventCondition category="skill">
          <Tag>イフリートLv15</Tag>
          <Tag>ヴォルトLv9</Tag>
        </EventCondition>
        <p>
          巨大な爆発を発生させて敵にダメージを与える。敵が浮き上がって叩きつけられるとダウン状態となる。後半ではかなりフリンジしやすい強力な術。
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
              <td>36</td>
              <td>4</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>地の晶霊術</h2>
      <div className="advice">
        <h3>ロックブレイク</h3>
        <EventCondition category="skill">
          <Tag>ノームLv1</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>地</td>
            </tr>
          </tbody>
        </table>

        <h3>グランドダッシャー</h3>
        <EventCondition category="skill">
          <Tag>ノームLv21</Tag>
          <Tag>シャドウLv10</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>地</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>氷の晶霊術</h2>
      <div className="advice">
        <h3>アイスニードル</h3>
        <EventCondition category="skill">
          メルディ加入時に習得済み
        </EventCondition>
        <p>メルディが初期習得している晶霊術。</p>
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
              <td></td>
              <td></td>
              <td>氷</td>
            </tr>
          </tbody>
        </table>

        <h3>フリーズランサー</h3>
        <EventCondition category="skill">
          <Tag>セルシウスLv1</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>氷</td>
            </tr>
          </tbody>
        </table>

        <h3>レジスト</h3>
        <EventCondition category="skill">
          <Tag>セルシウスLv10</Tag>

          <Tag>ノームLv7</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>ブリザード</h3>
        <EventCondition category="skill">
          <Tag>セルシウスLv12</Tag>
          <Tag>シルフLv15</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>アブソリュート</h3>
        <EventCondition category="skill">
          <Tag>セルシウスLv14</Tag>
          <Tag>ヴォルトLv12</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>氷</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>雷の晶霊術</h2>
      <div className="advice">
        <h3>ライトニング</h3>
        <EventCondition category="skill">
          メルディ加入時に習得済み
        </EventCondition>
        <p>メルディが初期習得している晶霊術。</p>
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
              <td></td>
              <td></td>
              <td>雷</td>
            </tr>
          </tbody>
        </table>

        <h3>サンダーブレード</h3>
        <EventCondition category="skill">
          <Tag>ヴォルトLv1</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>雷</td>
            </tr>
          </tbody>
        </table>

        <h3>チャージ</h3>
        <EventCondition category="skill">
          <Tag>ヴォルトLv5</Tag>
          <Tag>シルフLv13</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>リカバー</h3>
        <EventCondition category="skill">
          <Tag>ヴォルトLv6</Tag>
          <Tag>ノームLv11</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>インディグネイション</h3>
        <EventCondition category="skill">
          <Tag>ヴォルトLv15</Tag>
          <Tag>レムLv10</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>雷</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>光の晶霊術</h2>

      <div className="advice">
        <h3>レイ</h3>
        <EventCondition category="skill">
          <Tag>レムLv1</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>光</td>
            </tr>
          </tbody>
        </table>

        <h3>ホーリーブレス</h3>
        <EventCondition category="skill">
          <Tag>レムLv15</Tag>
          <Tag>イフリートLv20</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>光</td>
            </tr>
          </tbody>
        </table>

        <h3>ホーリーランス</h3>
        <EventCondition category="skill">
          <Tag>レムLv21</Tag>
          <Tag>マクスウェルLv20</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>光</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>闇の晶霊術</h2>
      <div className="advice">
        <h3>ダークフォース</h3>
        <EventCondition category="skill">
          <Tag>シャドウLv1</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>闇</td>
            </tr>
          </tbody>
        </table>

        <h3>バリアー</h3>
        <EventCondition category="skill">
          <Tag>シャドウLv5</Tag>
          <Tag>ヴォルトLv10</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>ディープミスト</h3>
        <EventCondition category="skill">
          <Tag>シャドウLv5</Tag>
          <Tag>ウンディーネLv15</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>ブラッディハウリング</h3>
        <EventCondition category="skill">
          <Tag>シャドウLv23</Tag>
          <Tag>ゼクンドゥスLv18</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>闇</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>元の晶霊術</h2>
      <div className="advice">
        <h3>メテオスウォーム</h3>
        <EventCondition category="skill">
          <Tag>マクスウェルLv1</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>元</td>
            </tr>
          </tbody>
        </table>

        <h3>シューティングスター</h3>
        <EventCondition category="skill">
          <Tag>マクスウェルLv26</Tag>
          <Tag>ゼクンドゥスLv26</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>元</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>時の晶霊術</h2>

      <div className="advice">
        <h3>ディストーネーション</h3>
        <EventCondition category="skill">
          <Tag>ゼクンドゥスLv1</Tag>
        </EventCondition>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ゼクンドゥスLv1</dd>
          </dl>
        </nav>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>時</td>
            </tr>
          </tbody>
        </table>

        <h3>スクラグネイション</h3>
        <EventCondition category="skill">
          <Tag>ゼクンドゥスLv5</Tag>
          <Tag>セルシウスLv30</Tag>
        </EventCondition>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>時</td>
            </tr>
          </tbody>
        </table>

        <h3>ディレイ</h3>
        <EventCondition category="skill">
          <Tag>ゼクンドゥスLv20</Tag>
          <Tag>ノームLv30</Tag>
        </EventCondition>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ゼクンドゥスLv20 × ノームLv30</dd>
          </dl>
        </nav>
        <p>--</p>
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
              <td></td>
              <td></td>
              <td>時</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>その他の晶霊術</h2>

      <div className="advice">
        <h3>+メディカルプラス</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シルフLv10 × レムLv10</dd>
          </dl>
        </nav>
        <p>習得していると戦闘中の回復系晶霊術の効果がアップする。</p>
      </div>

      <div className="advice">
        <h3>+メンタルチャージ</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ノームLv5 × シルフLv10</dd>
          </dl>
        </nav>
        <p>習得していると戦闘後のTP回復量がアップする。</p>
      </div>

      <div className="advice">
        <h3>+フリーズガード</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>セルシウスLv10 × イフリートLv10</dd>
          </dl>
        </nav>
        <p>習得していると戦闘中にパーティ全体が凍結状態にならなくなる。</p>
      </div>

      <div className="advice">
        <h3>+パラライガード</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ヴォルトLv10 × ウンディーネLv10</dd>
          </dl>
        </nav>
        <p>習得していると戦闘中にパーティ全体が麻痺状態にならなくなる。</p>
      </div>

      <div className="advice">
        <h3>+ライフレスキュー</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ノームLv10 × レムLv10</dd>
          </dl>
        </nav>
        <p>
          習得していると戦闘中にHPが少なくなった場合に徐々に回復する効果が現れる。
        </p>
      </div>

      <div className="advice">
        <h3>+アイテムゲッター</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シルフLv10 × マクスウェルLv10</dd>
          </dl>
        </nav>
        <p>
          習得していると戦闘中にテクニカルスマッシュが発生するとアイテム入手にボーナス2ポイント。
        </p>
      </div>

      <div className="advice">
        <h3>+メンタルサプライ</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ノームLv20 × マクスウェルLv20</dd>
          </dl>
        </nav>
        <p>習得していると戦闘中に受けたダーメージに応じてTPが回復する。</p>
      </div>

      <div className="advice">
        <h3>+ヒールウェポン</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>レムLv10 × シャドウLv10</dd>
          </dl>
        </nav>
        <p>習得していると戦闘中に敵を倒すとHPが回復する。</p>
      </div>

      <div className="advice">
        <h3>+ライフアップ</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>マクスウェルLv10 × セルシウスLv10</dd>
          </dl>
        </nav>
        <p>習得している状態でレベルアップするとHP+2のボーナスが付く。</p>
      </div>

      <div className="advice">
        <h3>+メンタルアップ</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ゼクンドゥスLv10 × イフリートLv10</dd>
          </dl>
        </nav>
        <p>習得している状態でレベルアップするとTP+1のボーナスが付く。</p>
      </div>

      <div className="advice">
        <h3>+ポイズンガード</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>マクスウェルLv10 × シャドウLv10</dd>
          </dl>
        </nav>
        <p>習得していると戦闘中にパーティ全体が毒状態にならない。</p>
      </div>

      <div className="advice">
        <h3>+ドレインガード</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ゼクンドゥスLv10 × マクスウェルLv10</dd>
          </dl>
        </nav>
        <p>習得していると戦闘中にパーティ全体が能力低下の状態にならない。</p>
      </div>
    </article>
  );
}
