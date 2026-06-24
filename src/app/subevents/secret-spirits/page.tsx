import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " 隠し大晶霊";
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
          エターニアにはサブイベントにて契約できる大晶霊が存在します。強力な晶霊術のフリンジが可能となるので是非とも契約を目指しましょう。
        </p>
      </PageSummary>

      <h2>イベントの詳細</h2>

      <div className="advice">
        <h3>闇の大晶霊 シャドウ</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>潜水艇が利用可能になった後〜</dd>
          </dl>
        </nav>
        <p>
          セレスティアの海底にある「闇の洞窟」の奥にはシャドウがいて戦闘勝利後に契約することができます。
        </p>
        <p>
          <a href="/web/20210509164134/http://magic.brush-clover.com/eternia/extra-dark-cave.php">
            闇の洞窟の解説ページはこちら
          </a>
        </p>
      </div>

      <div className="advice">
        <h3>元素の大晶霊 マスクウェル</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>遠征の橋でインフェリアに戻って来た後〜</dd>
          </dl>
        </nav>
        <p>
          ストーリーの後半からインフェリアの「セイファート教会」に行くと隠しダンジョンが出現し、奥にはマクスウェルの戦闘に勝利すると契約することができます。
        </p>
        <p>
          <a href="/web/20210509164134/http://magic.brush-clover.com/eternia/extra-farosu-underground.php">
            ファロース教会地下の解説ページはこちら
          </a>
        </p>
      </div>

      <div className="advice">
        <h3>時の大晶霊 ゼクンドゥス</h3>
        <nav>
          <dl>
            <dt>発生時期</dt>
            <dd>シゼル城に到着後〜</dd>
          </dl>
        </nav>
        <p>
          シゼル城のダンジョン内に時の大晶霊ゼクンドゥスがいて、戦闘することなく契約することができます。
        </p>
        <p>
          <a href="/web/20210509164134/http://magic.brush-clover.com/eternia/chart5.php">
            ゼクンドゥスの場所のマップは攻略チャートをご覧ください
          </a>
        </p>
      </div>
    </article>
  );
}
