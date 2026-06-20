import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "晶霊術（メルディ＆キール）";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <h2>水の晶霊術</h2>

      <div className="advice">
        <h3>アクアエッジ</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>なし</dd>
          </dl>
        </nav>
        <p>キールが初期習得している晶霊術。楕円形の水の塊を相手にぶつける。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>4</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>1</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>水</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>スプレッド</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ウンディーネLv1</dd>
          </dl>
        </nav>
        <p>出現した水の柱に当たった敵を浮かせながらダメージを与える。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>9</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>3</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>水</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>ヒール</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ウンディーネLv1 × シルフLv1</dd>
          </dl>
        </nav>
        <p>味方一人のHPを50%回復させる。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>16</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>--</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>アシッドレイン</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ウンディーネLv10 × ノームLv5</dd>
          </dl>
        </nav>
        <p>雨が当たった敵に対して与えるダメージが一時的に上昇する。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>10</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>--</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>ナース</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ウンディーネLv10 × セルシウスLv1</dd>
          </dl>
        </nav>
        <p>味方全員のHPを40%回復させる。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>42</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>--</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>キュア</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ウンディーネLv15 × マクスウェルLv1</dd>
          </dl>
        </nav>
        <p>味方一人のHPを90%回復させる。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>32</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>--</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>リザレクション</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ウンディーネLv20 × レムLv1</dd>
          </dl>
        </nav>
        <p>
          戦闘中は魔法陣の中にいる仲間のHPを最大90%ほど回復。メニュー画面では全員に適用される。
        </p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>60</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>--</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>レイズデッド</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ウンディーネLv20 × ゼクンドゥスLv1</dd>
          </dl>
        </nav>
        <p>戦闘不能の味方を回復し、HPも70%回復させる。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>96</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>--</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>風の晶霊術</h2>

      <div className="advice">
        <h3>ウインドカッター</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>なし</dd>
          </dl>
        </nav>
        <p>キールが初期習得している晶霊術。風の刃を左右に敵に当てる。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>7</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>2</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>エアスラスト</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シルフLv1</dd>
          </dl>
        </nav>
        <p>
          複数の風の刃を敵にぶつけて攻撃する。攻撃範囲にクセがあるが、うまく使えば中盤の敵の詠唱の妨げにも使える。
        </p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>12</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>8</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>コンセントレート</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シルフLv6 × イフリートLv5</dd>
          </dl>
        </nav>
        <p>
          サポート系晶霊術。戦闘中にのみ発動できて、仲間一人の集中力をアップさせる。
        </p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>6</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>--</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>サイクロン</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シルフLv20 × シャドウLv9</dd>
          </dl>
        </nav>
        <p>大きな竜巻を5、6秒ほど発生させて触れた敵にダメージを与える。</p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>44</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>16</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>火の晶霊術</h2>

      <div className="advice">
        <h3>ファイアボール</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>なし</dd>
          </dl>
        </nav>
        <p>
          キールが初期習得している晶霊術。小さな火玉を3つ順々と敵に当てて攻撃する。
        </p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>7</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>3</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>イラプション</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>イフリートLv1</dd>
          </dl>
        </nav>
        <p>
          マグマの噴火に当たった敵を3回攻撃し、その後に降ってくる岩石でも攻撃する。範囲はなかなか広いため、敵が固まっている場所に有効。
        </p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>18</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>10程度</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>シャープネス</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>イフリートLv5 × ウンディーネLv7</dd>
          </dl>
        </nav>
        <p>
          サポート系晶霊術。戦闘中にのみ仲間一人の攻撃力を上昇させる。重ね掛けは無効となる。
        </p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>6</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>--</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>フレイムウォール</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>イフリートLv12 × ノームLv9</dd>
          </dl>
        </nav>
        <p>
          敵の前に炎の壁を作成して、触れた敵にダメージを与える。1回ダメージを与えたり、他の晶霊術の発動によって壁は消滅する。使い所が難しい。
        </p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>12</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>1</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>エクスプロード</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>イフリートLv15 × ヴォルトLv9</dd>
          </dl>
        </nav>
        <p>
          巨大な爆発を発生させて敵にダメージを与える。敵が浮き上がって叩きつけられるとダウン状態となる。後半ではかなりフリンジしやすい強力な術。
        </p>
        <table>
          <tbody>
            <tr>
              <td width="80">消費TP</td>
              <td>36</td>
            </tr>
            <tr>
              <td>最大HIT数</td>
              <td>4</td>
            </tr>
            <tr>
              <td>属性</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>地の晶霊術</h2>

      <div className="advice">
        <h3>ロックブレイク</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ノームLv1</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>グランドダッシャー</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ノームLv21 × シャドウLv10</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <h2>氷の晶霊術</h2>

      <div className="advice">
        <h3>アイスニードル</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>なし</dd>
          </dl>
        </nav>
        <p>キールが初期習得している晶霊術。</p>
      </div>

      <div className="advice">
        <h3>フリーズランサー</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>セルシウスLv1</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>レジスト</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>セルシウスLv10 × ノームLv7</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>ブリザード</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>セルシウスLv12 × シルフLv15</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>アブソリュート</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>セルシウスLv14 × ヴォルトLv12</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <h2>ヴォルト</h2>

      <div className="advice">
        <h3>ライトニング</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>なし</dd>
          </dl>
        </nav>
        <p>キールが初期習得している晶霊術。</p>
      </div>

      <div className="advice">
        <h3>サンダーブレード</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ヴォルトLv1</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>チャージ</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ヴォルトLv5 × シルフLv13</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>リカバー</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ヴォルトLv6 × ノームLv11</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>インディグネイション</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ヴォルトLv15 × レムLv10</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <h2>光の晶霊術</h2>

      <div className="advice">
        <h3>レイ</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>レムLv1</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>ホーリーブレス</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>レムLv15 × イフリートLv20</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>ホーリーランス</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>レムLv21 × マクスウェルLv20</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <h2>闇の晶霊術</h2>

      <div className="advice">
        <h3>ダークフォース</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シャドウLv1</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>バリアー</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シャドウLv5 × ヴォルトLv10</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>ディープミスト</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シャドウ5 × ウンディーネLv15</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>ブラッディハウリング</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>シャドウLv23 × ゼクンドゥスLv18</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <h2>元の晶霊術</h2>

      <div className="advice">
        <h3>メテオスウォーム</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>マクスウェルLv1</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>シューティングスター</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>マクスウェルLv26 × ゼクンドゥスLv26</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <h2>時の晶霊術</h2>

      <div className="advice">
        <h3>ディストーネーション</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ゼクンドゥスLv1</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>スクラグネイション</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ゼクンドゥスLv5 × セルシウスLv30</dd>
          </dl>
        </nav>
        <p>--</p>
      </div>

      <div className="advice">
        <h3>ディレイ</h3>
        <nav>
          <dl>
            <dt>フリンジ</dt>
            <dd>ゼクンドゥスLv20 × ノームLv30</dd>
          </dl>
        </nav>
        <p>--</p>
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
