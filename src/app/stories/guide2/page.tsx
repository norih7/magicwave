import LocationItems from "@/components/LocationItems";
import LocationRecipes from "@/components/LocationRecipes";
import LocationLenses from "@/components/LocationLenses";
import SetPageTitle from "@/components/SetPageTitle";
import { getLocationItemsData } from "@/lib/db";
import { getLocationRecipesData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";
import { createMetaTitle } from "@/utils";
import Image from "next/image";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "いざないの密林〜火晶霊の谷";
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

      <h2>1.&nbsp;いざないの密林</h2>

      <ol>
        <li>
          序盤の難関ダンジョンの一つ。
          <br />
          仕掛けが多く、長期滞在のダンジョンになるためアイテムや食材は多めに用意しておこう。
        </li>
        <li>
          このダンジョンは前半と後半に別れており、前半は石像が5体置いてあるフロアにある「逆しまのもの向きあわば真の道開かれん」というキーワードに基づいて謎解きを行う。
        </li>
        <li>
          前半ダンジョンでは「破壊」「混沌」「秩序」「創造」といった4つの石像が置かれており、石像を調べることで向きを変更できる。この向きを逆しまにすればよく、「破壊と創造」「秩序と混沌」というように反対の意味になるように石像を向かい合わせる。石像の場所と向きは下記のマップを参照。
          <br />
          <Image src="/maps/izanai_01.jpg" alt="" width={480} height={420} />
          謎解きに成功すると「ドンッ」と音がなり、川を渡ってキャンプイベントの場所まで移動できるようになる。
        </li>
        <li>
          キャンプイベントから先は後半ダンジョンになる。
          <br />
          後半ではダンジョンの呪いの源である、5体のモンスターを倒すことが目的になる。
          <br />
          モンスターはランダム出現ではなく、後半ダンジョンの行き止まりに存在している。全員倒すと出口が開け、ダンジョンを出ることができる。
        </li>
        <li>フィールドに出たら王都インフェリアに向かおう。</li>
      </ol>

      <h4>お得な情報</h4>

      <ul>
        <li>
          <a href="./eternia/system-rune.php#1">セフィラの入手</a>
        </li>
      </ul>

      <h4>入手アイテム</h4>

      <ul>
        <li>アイアンアームズ</li>
        <li>ミックスグミ</li>
        <li>アイアンリスト</li>
        <li>ミスティローブ</li>
        <li>
          シルククローク
          <br />
        </li>
        <li>ライフボトル</li>
        <li>ライフボトル</li>
        <li>ホーリィボトル</li>
        <li>リキュールボトル</li>
        <li>
          パイングミ
          <br />
        </li>
        <li>リバースドール</li>
        <li>レモングミ</li>
        <li>すいしょうせき</li>
        <li>パイングミ</li>
        <li>
          スペクタクルス
          <br />
        </li>
        <li>765ガルド</li>
        <li>りょくしょうせき</li>
        <li>オレンジグミ</li>
        <li>ルーンボトル</li>
        <li>
          バスタードソード
          <br />
        </li>
        <li>チャームボトル</li>
        <li>オレンジグミ</li>
        <li>アップルグミ</li>
        <li>ミラクルグミ</li>
        <li>パナシーアボトル</li>
      </ul>

      <h2>2.&nbsp;王都インフェリア</h2>

      <ol>
        <li>
          この時点で町のホテルに泊まると「キールがナンパされるイベント」「ドジッ娘メイド」のイベントを見ることができる。
        </li>
        <li>
          町の奥にあるインフェリア城へ行くとイベント。その後も天文台、教会とたらい回しになる。
          <br />
          一連のイベントでリッド達が死刑から解放されたらインフェリア城の内部に入り込むことになる。
        </li>
        <li>
          インフェリア城2Fの部屋(一般人がうろうろして...とボヤく老人がいる隣の部屋)に入るとイベント。一泊した後は、1F外の広間を通り大広間に入ろう。道中ではロエンとアレンデ姫のやり取りがある。
        </li>
        <li>
          大広間でセレスティアの戦争宣言をするイベント後、城を追い出され「じょうせんパス」を入手する。これは船で他の大陸へ行くために必要なものだ。
        </li>
        <li>
          風の大晶霊の手がかりを得るためにバロールへ向かうことに。
          <br />
          そのため北東にあるインフェリア港へ向かう。
        </li>
      </ol>

      <h4>サブイベント</h4>

      <ul>
        <li>
          <a href="./eternia/subevent-etc.php#2">インフェリアのホテル</a>
        </li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>(インフェリア城)リッド達が泊まった部屋のタンス</li>
        <li>
          じょうせんパス入手後、天文台「気安く触るなよ...」という男の隣にある木棚
        </li>
      </ul>

      <h2>3.&nbsp;インフェリア港</h2>

      <ol>
        <li>
          船に乗り込もうとするとキールと別れることになる。
          <br />
          キールと別れる前に船具屋にある船の模型を調べるとリッドとキールの思いで話のイベントが見ることができる。
        </li>
        <li>その後は船に乗り込んでバロールへ向かう。</li>
      </ol>

      <h4>サブイベント</h4>

      <ul>
        <li>
          <a href="./eternia/subevent-etc.php#3">リッドとキールの思い出1</a>
        </li>
      </ul>

      <h4>レシピ</h4>

      <ul className="item-twocol">
        <li>
          さかななべ <span className="daiji">船具屋にあるいかり</span>
        </li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>バロール行き乗船場にあるタル</li>
      </ul>

      <h2>4.&nbsp;バロール港〜商業の町バロール</h2>

      <ol>
        <li>
          船から下りるとバロール港に着く。フィールドに出てバロールの町へ向かおう。
        </li>
        <li>
          バロールの町では、町の南側で行くとイベントが発生してファラが「むてっぽう」の称号得る。
          <br />
          酒場でのレイスと食事後、町の奥にある宿屋の前にいるレイスに話かけると仲間になる。
        </li>
        <li>
          町にある「泥棒少年」のサブイベントはルーンボトルが入手できるのでチェックしておこう。
        </li>
        <li>風の大晶霊に会いに行くために南西にある風晶霊の空洞へ向かう。</li>
      </ol>

      <h4>サブイベント</h4>

      <ul>
        <li>
          <a href="./eternia/subevent-balor1.php">バロールの泥棒少年</a>
        </li>
        <li>
          <a href="./eternia/subevent-balor2.php">いしとりめいじん</a>
        </li>
        <li>
          <a href="./eternia/subevent-catarine.php">カトリーヌの恋愛</a>
        </li>
        <li>
          <a href="./eternia/subevent-etc.php#3">ねだるファラ</a>
        </li>
      </ul>

      <h4>レシピ</h4>

      <ul className="item-onecol">
        <li>
          いかリング{" "}
          <span className="daiji">(バロール港)船着き場階段下りた先の木箱</span>
        </li>
        <li>
          ステーキ{" "}
          <span className="daiji">(町)酒屋の2Fテラスにいる酔っぱらい</span>
          <br />
        </li>
        <li>
          グラタン{" "}
          <span className="daiji">(町)宿屋の寝室にあるクローゼット</span>
        </li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>宝飾店 アナガチにある金の壷</li>
        <li>バロール港 船着き場階段下りた先の木箱</li>
      </ul>

      <h4>アイテム(バロール港)</h4>

      <ul className="item-onecol">
        <li>
          みずいろのかけら<span className="daiji">食料屋にある調理台</span>
        </li>
      </ul>

      <h4>アイテム(バロールの町)</h4>

      <ul className="item-onecol">
        <li>
          ホーリィボトル
          <span className="daiji">食料屋にある蓋がしてある壷</span>
        </li>
        <li>
          シャムシール<span className="daiji">武器屋 左奥にある先の宝箱</span>
          <br />
        </li>
        <li>
          エリクシール
          <span className="daiji">
            武器屋 左奥にある先にいる女の人に話しかける
          </span>
        </li>
      </ul>

      <h2>5.&nbsp;風晶霊の空洞</h2>

      <ol>
        <li>
          ダンジョンには謎解きは特にないが、吹き上げてくる風に乗って進むことが必要な場所が多くある。
          <br />
          タイミングに会わせて風に乗る必要があるので慌てないで操作しよう。
        </li>
        <li>
          途中に大きな通路で風が強い場所があり、そのまま進んでしまうと流されて入口付近に戻されてしまう。この場所では付近にある突起している岩を調べるとレイスがロープをかけてくれ、再度それを調べることで渡ることができる。
        </li>
        <li>
          奥地では風の大晶霊「シルフ」たちとの戦闘になる。勝利後シルフがCケイジに入り、風の晶霊術が使えるようになる。入口に戻ろう。
        </li>
        <li>
          入口付近に戻るとレイスと別れ、キールと合流して再びパーティへ加わる。
        </li>
        <li>
          火の大晶霊の手がかりを求めてエアリアルボードを使い、東大陸にあるシャンバールへ向かおう。
        </li>
      </ol>

      <div className="boss-advice margin-bottom-small">
        <h4>BOSS：『シルフ』HP：6400(NORML)、『ラフィール×2』HP:4500</h4>
        <p>
          シルフはHPが少なくなると弓攻撃を連発してくるので、その前にラフィールを優先して倒していくのがいい。ただしシルフは強力な晶霊術を使ってくるので、詠唱を始めるとダッシュ攻撃をして止めさせよう。
        </p>
      </div>

      <h4>アイテム</h4>

      <ul>
        <li>ストームシールド</li>
        <li>ミックスグミ</li>
        <li>ミックスグミ</li>
        <li>1800ガルド</li>
        <li>
          アサルトダガー
          <br />
        </li>
        <li>メンタルリング</li>
        <li>オレンジグミ</li>
        <li>レモングミ</li>
        <li>ニードルグローブ</li>
        <li>
          ライフボトル
          <br />
        </li>
        <li>アークウイング</li>
      </ul>
      <h2>6.&nbsp;熱砂の町 シャンバール</h2>

      <ol>
        <li>
          砂漠の真ん中にある。火の大晶霊のいる「火晶霊の谷」をクリアするためにこの町で休憩をしたり、アイテムの補充をするようにしよう。
        </li>
        <li>
          この町には収集したレンズの数に応じてアイテムをくれるイレーヌがいる。
        </li>
        <li>
          火の大晶霊の手がかりを求めてエアリアルボードを使い、東大陸にあるシャンバールへ向かおう。
        </li>
      </ol>

      <h4>サブイベント</h4>

      <ul>
        <li>
          <a href="./eternia/subevent-lens.php">レンズ収集</a>
        </li>
        <li>
          <a href="./eternia/subevent-syanballoon.php">レンズ収集</a>
        </li>
      </ul>

      <h4>アイテム</h4>

      <ul className="item-twocol">
        <li>
          100G<span className="daiji">宿屋 テーブルの花瓶</span>
        </li>
        <li>
          ルーンボトル<span className="daiji">アイテム屋にある壷</span>
        </li>
        <li>
          エルヴンブーツ<span className="daiji">砂浜にある宝箱</span>
        </li>
      </ul>

      <h4>レシピ</h4>

      <ul className="item-onecol">
        <li>
          カルボナーラ<span className="daiji">宿屋 右奥にあるベッド</span>
        </li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>広場にある噴水</li>
        <li>ビストロシャンバール 2階にある観覧席 右側の椅子</li>
      </ul>

      <h2>7.&nbsp;火晶霊の谷</h2>

      <ol>
        <li>
          ダンジョン内では灼熱のためウンディーネのサポートを受けて進んでいく。ウンディーネのHPが0になるとサポートがなくなり、常時灼熱のダメージう受けることになる。一度ダンジョンから出れば戻るので危なくなったら引き返そう。
        </li>
        <li>
          謎解きは特にないので道なりに進んでいけば良いが、時には炎が吹き出している場所も通る必要がある。
        </li>
        <li>
          キールが疑問に思う開かずの扉は、ダンジョンクリア後に入手できる「ソーサラーリング」を打つことで空けることができる。道中はスルーしよう。
        </li>
        <li>
          奥地では火の大晶霊「イフリート」と戦闘になる。勝利後のイベントでソーサラーリングを入手する。帰りには開かずの扉を空けて、アイテムを回収していこう。ソーサラーリングを打って入る部屋にある水晶を打つと敵と戦闘になり、勝利後にアイテムを入手できる。
        </li>
        <li>
          セレスティアに渡る「光の橋」の手がかりを求めるために聖峰ファロースを目指す。
        </li>
      </ol>

      <div className="boss-advice margin-bottom-small">
        <h4>BOSS：『イフリート』HP：8000?(NORML)</h4>
        <p>
          ジャンプ攻撃や虎牙連斬などが有効。リッドにはハルバードなど、リーチが長い武器を装備させて挑もう。
        </p>
      </div>

      <h4>アイテム</h4>

      <ul className="item-twocol">
        <li>ヴェノム</li>
        <li>セージ</li>
        <li>レモングミ</li>
        <li>フレアマント</li>
        <li>ライフボトル</li>
        <li>
          ラベンダー
          <br />
        </li>
        <li>クロスヘルム</li>
        <li>フィートシンボル</li>
        <li>ブレスレット</li>
        <li>ブルーリボン</li>
        <li>
          アークウイング
          <br />
        </li>
        <li>
          ルーンボトル<span className="daiji">ソーサラーリングで入る部屋</span>
        </li>
        <li>
          あかのかけら<span className="daiji">ソーサラーリングで入る部屋</span>
        </li>
      </ul>

      <h4>レンズ</h4>

      <ul className="item-onecol">
        <li>ソーサラーリングで入る部屋</li>
      </ul>
    </article>
  );
}
