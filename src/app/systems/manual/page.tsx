import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " マニュアルのしょ";
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
          アイテム「マニュアルのしょ」を入手すると戦闘モードでマニュアル操作を選択でき、自由な戦闘を楽しめるようになる。エターニアはシリーズの比較的初期の作品だけあって、最初から自由に操作キャラクターを動かすことができない。セミオート操作では物足りない場合はぜひマニュアルのしょを入手しておこう。
        </li>
      </ol>

      <div className="advice">
        <div className="topic-block">
          <h3>「マニュアルのしょ」の入手</h3>
          <div className="condition">
            <p>
              <span className="small-info">発生時期</span>いつでも
            </p>
          </div>
          <p>
            レグルス道場の弟子に話かけ「マニュアル操作で激しく戦いたい」を選択すると入手できる。取得はいつでも可能だがストーリー的にレグルス道場に訪れたときにやっておくのがいいだろう。
          </p>
          <h4>マニュアル操作への切替</h4>
          <p>
            設定画面で「マニュアル」、あるいは戦闘中にSELECTボタンを押すことで切替可能。
          </p>
        </div>
      </div>
    </article>
  );
}
