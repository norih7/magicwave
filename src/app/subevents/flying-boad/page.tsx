import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "飛行艇の入手";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <h2>概要</h2>
      <ol>
        <li>
          ストーリーの後半になるとバンエルティア号の第三形態の改造結果として「飛行艇」を入手できます。飛行艇はストーリー上必ず必要となるものではないのでサブイベント扱いとなり、改造を行うためには2つのキーアイテムが必要となります。また、このアイテムの1つはラストダンジョン「シゼル城」にあるため飛行艇を入手するにはストーリーをここまで進める必要があります。
        </li>
      </ol>
      <h2>イベントの詳細</h2>
      <div className="advice">
        <div className="topic-block">
          <h3>飛行艇の入手</h3>
          <div className="condition">
            <p>
              <span className="small-info">発生時期</span>
              遠征の橋からインフェリアに戻った後〜
            </p>
          </div>
          <p>
            ストーリー後半になり界面に出れるようになって以降、遠征の橋から中継基地の「改造ドッグ」へいくとバンエルティア号のさらなる改造について話しを聞くことができます。ここで「はるかなる地でわがあしあとを...」という話しを聞いた後にはインフェリアのフィールドマップにエクストラダンジョン「アイフリードの墓」
            GPS(88,64)が出現するようになります。
          </p>
          <p>
            これ以降はアイフリードの墓で入手できる「ひかりのたま」とシゼル城で入手できる「やまのたま」を入手することが可能となります。これらは飛行艇を入手するために必要なアイテムで、入手したら改造ドッグへ行きセットすることで飛空艇を入手することができます。それぞれの入手方法は以下を参照ください。
          </p>
          <h4>「やみのたま」の入手</h4>
          <p>
            シゼル城
            ダンジョン内にある宝箱から入手。シゼル城内の入手場所については
            <a href="/web/20210509165409/http://magic.brush-clover.com/eternia/chart5.php">
              攻略チャート5
            </a>
            にてマップ付きで紹介しています。
          </p>
          <h4>「ひかりのたま」の入手</h4>
          <p>
            インフェリアにあるエクストラダンジョン「アイフリードの墓」にある宝箱から入手。アイフリードの墓場については
            <a href="/web/20210509165409/http://magic.brush-clover.com/eternia/extra-aifread.php">
              エクストラダンジョン アイフリードの墓
            </a>
            にて攻略情報を掲載しています。(現在内容は準備中)
          </p>
        </div>
      </div>
      <div className="advice">
        <h3>補足 : 改造ドッグへの行き方</h3>
        <p>改造ドッグは少々わかりにくい場所にあるため行き方を補足します。</p>
        <h4>改造ドッグへ辿り着くためのフロー</h4>
        <ul>
          <li>
            1.
            フィールドマップの遠征の橋から「中継基地」へと入る(インフェリア、セレスティア問わず)
          </li>
          <li>2. 中継基地のメニューで「反転ドーム」を選択</li>
          <li>3. 反転ドームのメニューで「改造ドッグ」を選択</li>
        </ul>
      </div>
    </article>
  );
}
