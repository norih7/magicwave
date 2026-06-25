import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import LocationItems from "@/components/LocationItems";
import LocationRecipes from "@/components/LocationRecipes";
import LocationLenses from "@/components/LocationLenses";
import LocationSubEvents from "@/components/LocationSubEvents";
import { getLocationItemsData } from "@/lib/db";
import { getLocationRecipesData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";
import { getLocationSubEventsData } from "@/lib/db";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "ラシュアン〜水晶霊の河";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const recipesData = await getLocationRecipesData();
  const lensesData = await getLocationLensesData();
  const subEventData = await getLocationSubEventsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          序盤のストーリーで大晶霊ウンディーネとの契約までを解説します。料理レシピ「オムライス」や「マニュアルのしょ」の入手を忘れずに！
        </p>
      </PageSummary>
      <h2>1. ラシュアン</h2>
      <ol className="mb-5">
        <li>ストーリーが始まります。</li>
        <li>
          森を道なりに進んでいくと墜落した物体と少女に遭遇。
          <br />
          イベント後に村に戻ると村長の家でボス戦(ヒアデス)。勝利後、少女の言葉を理解できるキールに会うために学問の街ミンツへ向かうことになります。
        </li>
        <li>
          途中、少女の名前が"メルディ"であることが分かります。
          <br />
          フィールドにでたら村から南にあるラシュアン河の桟橋へと向かいます。川沿いにそって進んでいけばたどり着きます。
        </li>
      </ol>
      <div className="mb-16">
        <LocationItems data={itemsData} locationIds={[1]} />
        <LocationRecipes data={recipesData} locationIds={[1]} />
        <LocationLenses data={lensesData} locationIds={[1]} />
        <LocationSubEvents data={subEventData} locationIds={[1]} />
      </div>

      <h2>2. ラシュアン河の桟橋〜レグルス道場</h2>
      <ol className="mb-5">
        <li>
          桟橋へ行くとイベントミンツに行くためラシュアン河の桟橋を通り抜けたいが、ガケ崩れのため通れないということを聞きます。この後はミンツに行く方法を聞くためにレグルス道場に向かうことに。
          <br />
          道場はフィールドに戻って西にあります。
        </li>
        <li>
          道場の中に入るとモンクとの戦闘。
          <br />
          戦闘終了後、道場の奥の部屋にいるパウロから水晶霊の力を使って水流の流れを弱めることを聞きます。
        </li>
      </ol>
      <div className="mb-16">
        <LocationItems data={itemsData} locationIds={[2, 3]} />
        <LocationRecipes data={recipesData} locationIds={[2, 3]} />
        <LocationLenses data={lensesData} locationIds={[2, 3]} />
        <LocationSubEvents data={subEventData} locationIds={[2, 3]} />
      </div>

      <h2>3.&nbsp;ラシュアン河の桟橋(2回目)〜学問の町ミンツ</h2>

      <ol>
        <li>
          ラシュアン河の桟橋に戻るとイベント。水の流れが弱くなり、川下りのミニゲームが発生します。
          <br />
          成績が良ければアイテムがもらえます。フィールドに出たら南にあるミンツへ行きましょう。
        </li>
        <li>
          ミンツではキールに会うために、町の西側にある大学へと向かう。
          <br />
          1F入口から2番目の部屋(光晶霊)に入るとイベント。キールが岩山の観測所にいることを聞きます。
        </li>
        <li>次はキールに会うために南西にある岩山の観測所へ向かいます。</li>
      </ol>
      <div className="mb-16">
        <LocationItems data={itemsData} locationIds={[4]} />
        <LocationRecipes data={recipesData} locationIds={[4]} />
        <LocationLenses data={lensesData} locationIds={[4]} />
        <LocationSubEvents data={subEventData} locationIds={[4]} />
      </div>

      <h2>4.&nbsp;ミンツの岩山〜岩山の観測所</h2>
      <ol>
        <li>
          観測所に行くために、ミンツの岩山を通る。頂上を目指して進んでいこう。
        </li>
        <li>
          ダンジョンにある岩は○ボタンを押しながら方向キーを動かすことで、移動させることができる。点滅している岩の場所まで動かすと岩が落ち、無限に沸いてくるモンスターを止めることができる。
          <br />
          <span className="daiji">
            ただし行わなくてもダンジョンをクリアでき、特にアイテムが手に入るわけではない。
          </span>
        </li>
        <li>
          岩山ダンジョンを突破すると一度フィールドに出る。頂上にある観測所に入ろう。
          <br />
          観測所に入るとイベント。メルディが伝えたかったことが分かり、キールが仲間になる。
        </li>
        <li>
          次はメルディの言葉をさらに理解するため、モルルにいるマゼット博士に会いにいく。モルルは隣の大陸にあり、ミンツから東にある忘郷の洞窟を経由していく。
        </li>
      </ol>
      <div className="mb-16">
        <LocationItems data={itemsData} locationIds={[5]} />
        <LocationRecipes data={recipesData} locationIds={[5]} />
        <LocationLenses data={lensesData} locationIds={[5]} />
        <LocationSubEvents data={subEventData} locationIds={[5]} />
      </div>

      <h2>5.&nbsp;望郷の洞窟</h2>
      <ol>
        <li>
          洞窟内では潮の満ち引きがあり、具合によってマップや入手できるアイテムが変化する。潮の満ち引きは時間と共に変化していき、一度ダンジョンから出るとリセットされる。
        </li>
        <li>
          途中ではキャンプイベントがあり、リッドとキール2人でエッグベア×1との戦闘になる。洞窟から出ると隣の大陸のフィールドへと辿り着く。
        </li>
        <li>フィルードマップを進んでモルルへ行く。</li>
      </ol>
      <div className="mb-16">
        <LocationItems data={itemsData} locationIds={[7]} />
        <LocationRecipes data={recipesData} locationIds={[7]} />
        <LocationLenses data={lensesData} locationIds={[7]} />
        <LocationSubEvents data={subEventData} locationIds={[7]} />
      </div>

      <h2>6.&nbsp;木陰の村モルル</h2>
      <ol>
        <li>
          道なりに進んでいった頂上にあるマゼットの家に行くとイベント。メルディが飛び出していくので追いかけることに。以降メルディと合流するまで3人での行動、戦闘になる。
        </li>
        <li>
          道中の分岐点(はしごではない)に入り、奥地まで辿り着くとボス:インセクトプラントと戦闘。
          <br />
          勝利後、メルディと合流し4人パーティに戻る。
        </li>
        <li>
          途中でキャンプ場所でイベントがあり、メルディの目的が分かる。その後マゼットの家に戻るとイベント。
          <br />
          イベント後以降、マゼットに話かけると
          <span className="daiji">モンスター図鑑</span>
          がもらえる。イベント内で必ずもらえるものでないということに注意。
        </li>
        <li>
          次は水の大晶霊ウンディーネに会うため北東にある水晶霊の河へ行く。
        </li>
      </ol>
      <div className="mb-16">
        <LocationItems data={itemsData} locationIds={[8]} />
        <LocationRecipes data={recipesData} locationIds={[8]} />
        <LocationLenses data={lensesData} locationIds={[8]} />
        <LocationSubEvents data={subEventData} locationIds={[8]} />
      </div>

      <h2>7.&nbsp;水晶霊の河</h2>
      <ol>
        <li>
          今までより長期戦のダンジョンになるのでアイテムや料理でHP/TPを回復できるように準備はしておこう。
        </li>
        <li>
          ダンジョンは基本的に道なりに進んでいけば良いが、浅い水面を歩いたり木に隠れた部分を通る必要がある。見た目に惑わされないように！また隠れている部分にアイテムなどがあることも。
        </li>
        <li>
          途中洞窟でウンディーネに会い、覚悟を示してほしいことを伝えられる。
          <br />
          奥地へ行くとボス:ウンディーネとの戦闘になる。勝利後にはウンディーネと契約を結び、フリンジが使えるようになる。
        </li>
        <li>
          次はグランドフォールについて王に進言するために王都インフェリアに向かうことになり、途中にある「いざないの密林」へと向かうことに。一度モルルへ戻って準備を整えておくといいだろう。
        </li>
      </ol>

      <div className="boss-advice margin-bottom-small mb-6">
        <h4>BOSS：『ウンディーネ』</h4>
        <p>HP：8000?(NORML)</p>
        <p>
          HPが半分以下になると貫通の飛び攻撃を行ってくる。先頭に立ちガードして防ぐか、ジャンプして後ろに回り込むなどの対策が有効。
        </p>
      </div>
      <div className="mb-16">
        <LocationItems data={itemsData} locationIds={[9]} />
        <LocationRecipes data={recipesData} locationIds={[9]} />
        <LocationLenses data={lensesData} locationIds={[9]} />
        <LocationSubEvents data={subEventData} locationIds={[9]} />
      </div>
    </article>
  );
}
