import LocationItems from "@/components/LocationItems";
import LocationRecipes from "@/components/LocationRecipes";
import LocationLenses from "@/components/LocationLenses";
import SetPageTitle from "@/components/SetPageTitle";
import { getLocationItemsData } from "@/lib/db";
import { getLocationRecipesData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";
import { createMetaTitle } from "@/utils";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "港町ペイルティ〜バリル城";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const recipesData = await getLocationRecipesData();
  const lensesData = await getLocationLensesData();

  return (
    <article>
      <SetPageTitle title={title} />

      <h2>1.&nbsp;港町ペイルティ</h2>

      <ol>
        <li>氷晶霊の山に入るため防寒服を調達しに行くことになる。</li>
        <li>
          リッドがメンバーの服を選ぶことになり、次の組み合わせを選ぶまで続くこととなる。
          <br />
          メルディ：ケープ、ファラ：ポンチョ、キール：オーバーマント
        </li>
        <li>支度が整ったならフィールドに出て氷晶霊の山に向かおう。</li>
      </ol>

      <h4>レシピ</h4>

      <ul className="item-onecol">
        <li>
          エビチリリリ <span className="daiji">食材店 カウンター前のタル</span>
        </li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>港にいるカニ</li>
      </ul>

      <h2>2.&nbsp;氷晶霊の山</h2>

      <ol>
        <li>
          <h4>氷晶霊の山 全体マップ</h4>
        </li>
        <li>
          このダンジョンでは氷が道を邪魔している箇所があるがそこはソーサラーリングを打つことで溶けて通れるようなる。
        </li>
        <li>奥へと進んでいき、木箱から「トトのアブラ」を入手する。</li>
        <li>
          トトのアブラを持っている状態で赤い氷の柱を調べることで、氷が溶けて通れるようになる。
          <br />
          奥へ進んでいくとボス「セルシウス」と戦闘となる。
          <br />
          勝利後はバンエルティア号でアイメンの町へ向かおう。
        </li>
      </ol>

      <div className="boss-advice margin-bottom-small">
        <h4>BOSS：『セルシウス』HP：33333(NORML)</h4>
        <p>弱点は火。</p>
      </div>

      <h4>アイテム</h4>

      <ul>
        <li>エリクシール×2</li>
        <li>アクアマント</li>
        <li>ルーンボトル</li>
        <li>リキュールボトル</li>
        <li>
          フリーズチェック
          <br />
        </li>
        <li>リキュールボトル</li>
        <li>シルバークローク</li>
        <li>ライフボトル</li>
        <li>セージ</li>
        <li>
          バトルピック
          <br />
        </li>
        <li>ミラクルグミ</li>
        <li>リキュールボトル</li>
        <li>オールディバイド</li>
        <li>ラベンダー</li>
        <li>アワーグラス</li>
      </ul>

      <h2>3.&nbsp;アイメン(崩壊)</h2>

      <ol>
        <li>アイメンに入るとイベント。</li>
        <li>
          図書館に行くとボス「ヒアデス」との戦闘。
          <br />
          勝利後はバンエルティア号でティンシアへ向かおう。
        </li>
      </ol>

      <div className="boss-advice margin-bottom-small">
        <h4>BOSS：『ヒアデス』HP：45000(NORML)</h4>
        <p>弱点は光。</p>
      </div>

      <h4>アイテム</h4>

      <ul>
        <li>なし</li>
      </ul>

      <h4>レンズ</h4>

      <ul>
        <li>武器屋の壊れたショーケース</li>
      </ul>

      <h2>4.&nbsp;ティンシア</h2>

      <ol>
        <li>バンエルティア号に乗って雷晶霊の遺跡へ向かおう。</li>
      </ol>

      <h4>アイテム</h4>

      <ul className="item-onecol">
        <li>ルーンボトル</li>
      </ul>

      <h4>レシピ</h4>

      <ul className="item-twocol">
        <li>
          おこげサンド <span className="daiji">船具屋のミアキス像</span>
        </li>
        <li>
          スイートパフェ <span className="daiji">ホテルロビーのドラゴン像</span>
        </li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>ノーム像</li>
      </ul>

      <h2>5.&nbsp;雷晶霊の遺跡</h2>

      <ol>
        <li>
          <h4>雷晶霊の遺跡 全体マップ</h4>
        </li>
        <li>
          ボスのヴォルトのところまで辿り着くのに中々根気のいるダンジョン。ビリビリと電流が流れている箇所は触れるとHPにダメージを受けるので気をつけましょう。途中の障害物である水晶はフリーズリングを放てば破壊可能です。
        </li>
        <li>
          マップの「！」のところは石盤に書かれていた「3つの星つかまば彩られしひとすじの光とならん」という箇所。これは3つのスイッチを踏んで特定の数に揃えれば扉が開くという仕掛け。
        </li>
        <li>
          ダンジョンを攻略するためにまずは「ヒューズ」が必要となるので、仕掛けの部屋では「青の扉」へと進みヒューズを入手しましょう。途中にあるスイッチ(マップで青色で表示)は踏んでおかないとソケットのある部屋がロックされていて入れない。
        </li>
        <li>
          ヒューズを手に入れたら「白の扉」へと進み、ヒューズを窪みにセットしましょう。これで動く床の部屋の仕掛けが動作を始めます。
        </li>
        <li>
          仕掛けが動作している状態で「赤の扉」に入ると奥へ進めるようになる。この部屋では敵とのエンカウントは無いがHPが1になっていることがあるので注意。
        </li>
        <li>
          キャンプより先は「電気パズル」を進むとヴォルトがいるが、最初では電源装置が起動していないため動作しない。そのため電源装置を調べ、必要な「制御玉」を入手する必要がある。
        </li>
        <li>
          制御玉を入手するには色の付いた石を踏み、床のスイッチを動作させる必要がある。これは扉と反転するものであるのでうまく考えながら切り替えよう。
        </li>
        <li>
          電源装置を起動したあとの電流パズルの部屋は以下の順番通りに1、2、3と踏んでいけば正解に辿り着けます。
        </li>
        <li>
          奥の部屋まで辿り着くとボス「ヴォルト」と戦闘。勝利後にはヴォルトが暴走し、これを止めるにはスロットで「STOP!!」と揃えてやればいい。その後は光の大水霊レムが現れ、リッドの装備品「エクスカリバー」を入手する。ティンシアへ戻ろう。
        </li>
      </ol>

      <div className="boss-advice margin-bottom-small">
        <h4>BOSS：『ヴォルト』HP：54321(NORML)</h4>
        <p>弱点は水。</p>
      </div>

      <h4>アイテム</h4>

      <ul>
        <li>パラライチェック</li>
        <li>パイン</li>
        <li>ビッグバッグ</li>
        <li>パイレーツハット</li>
        <li>オールディバイト</li>
        <li>パイン</li>
        <li>パナシーアボトル</li>
        <li>ボルテックソード</li>
        <li>ピヨハン</li>
        <li>サンダーマント</li>
        <li>ルーンボトル</li>
        <li>レッドセージ</li>
        <li>ホーリィスタッフ</li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>入ってすぐの石碑</li>
      </ul>

      <h2>6.&nbsp;ティンシア〜バリル城への突入</h2>

      <ol>
        <li>
          船具屋のはしごを降り、ドッグへ行くとイベントが発生してキールが仲間に戻る。ホテルの宿泊券をもらったら、ホテルへ行きイベントを見よう。
        </li>
        <li>
          宿泊後にドッグへ行くとバリル城へ出発できる。バリル城へ行く途中はミニゲームのイベントがある。
        </li>
      </ol>

      <h4>新規入手アイテム</h4>

      <ul>
        <li>なし</li>
      </ul>

      <h2>7.&nbsp;バリル城</h2>

      <ol>
        <li>
          <h4>バリル城 全体マップ</h4>
        </li>
        <li>
          マップが複雑なバリル城だが、基本的に3階構成になっていることを覚えておくと位置が分かりやすくなる。
        </li>
        <li>
          クリアのためにはまずは「カード」を入手しよう。カードを入手するためには入口から左へと進み、3階を経由して行く必要がある。マップの水色の箇所はフリーズリングを放つことで動作する仕掛けを表しています。
        </li>
        <li>
          入手したカードは1階の演説台のあるところにてセットすると暗号が表示される。この暗号は左右にある制御室にて入力するものだ。（イベントを発生させれば記憶しなくてもよい）
          <br />
          カードを入手した部屋は一方通行であるため、この部屋にあるワープ装置を使って3階まで戻りましょう。マップで言うと「A」間を移動する。
        </li>
        <li>
          暗号のイベントを発生させたあとは左右の制御室に向かって入力させよう。それぞれの制御室は隠し部屋となっており、マップの赤い箇所をソーサラーリングで打てば扉が開くような仕掛けになっている。
        </li>
        <li>
          左右の制御室で暗号を入力すると「！」の扉が開くようになる。この奥ではボス「シゼル」との戦闘となる。ある程度HPを削っていくとイベントが発生。
        </li>
        <li>
          バリル城をクリア後は極光術についてガレノスに聞くためにルイシカに向かおう。
        </li>
      </ol>

      <div className="boss-advice margin-bottom-small">
        <h4>BOSS：『シゼル』HP：120000(NORML)</h4>
        <p>
          パーティのHPを1にするエターナルファイナリティを使用してくる。アイテムは惜しみなく使っておこう。
        </p>
      </div>

      <h4>アイテム</h4>

      <ul className="item-twocol">
        <li>プリティリボン</li>
        <li>ドラゴンベイン</li>
        <li>ドラグナーランス</li>
        <li>レアシールド</li>
        <li>スケールローブ</li>
        <li>ラピスランス</li>
        <li>ミスリルアームズ</li>
        <li>シルバークローク</li>
        <li>
          エリクシール <span className="daiji">フェイクを倒すと入手</span>
        </li>
        <li>シルバープレート</li>
        <li>ブラックオニキス</li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>バンエルティア号のタル</li>
        <li>ダンジョン内の宝箱</li>
      </ul>
    </article>
  );
}
