import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "TPの減少効果";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          TP消費を減少させる装備品「エメラルドリング」と「フェアリィリング」について解説します。
          <br />
          これらは装備しているキャラクターの消費TPが減少させる効果があり、戦闘とメニュー画面での術使用（HPや状態異常回復）の両方に効果があります。
        </p>
      </PageSummary>

      <h2>エメラルドリング</h2>
      <div className="advice">
        <p>
          装備キャラクターの消費TPが2/3となる指輪。ダンジョン内の宝箱にあり、早くはファロース霊峰にて入手できる。
        </p>
        <h3>入手方法</h3>
        <ul>
          <li>ファロース霊峰の宝箱から入手</li>
          <li>チャットの小屋にある宝箱から入手</li>
        </ul>
      </div>

      <h2>フェアリィリング</h2>
      <div className="advice">
        <p>
          装備キャラクターの消費TPが1/2となる指輪。入手できるのはストーリーの後半となり、通常入手可能な2つはボスを倒すことで入手できる。ボス「スパイラル」はストーリー上で必ず倒すボスなのでフェアリィリングは最低1個は獲得する。
        </p>
        <h3>通常入手方法</h3>
        <ul>
          <li>バリル城にてボス「スパイラル」を倒す</li>
          <li>セイファート神殿地下にてボス「マクスウェル」を倒す</li>
        </ul>
        <h3>特殊な入手方法</h3>
        <ul>
          <li>ミスティシンボルにルーンボトルを使って変化させる</li>
        </ul>
      </div>
    </article>
  );
}
