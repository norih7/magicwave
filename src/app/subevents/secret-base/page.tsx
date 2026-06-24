import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "インフェリアのアイフリードアジト";
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
          ストーリー上でセレスティアの海底にあるアイフリードのアジトを探索しますが、インフェリアにも同じようにアジトが存在します。ここではアジトの場所情報とそこで入手できるアイテムの情報を紹介します。
        </p>
      </PageSummary>
      <h2>インフェリアのアジト一覧</h2>

      <div className="advice">
        <h3>インフェリア アジト1</h3>
        <nav>
          <dl>
            <dt>場所</dt>
            <dd>GPS (76, 122)</dd>
          </dl>
        </nav>
        <h4>入手アイテム</h4>
        <ul>
          <li>12240ガルド</li>
          <li>セボリー</li>
          <li>みずいろのかけら</li>
          <li>ダイヤブレス</li>
          <li>むらさきのかけら</li>
          <li>ホーリィクローク</li>
        </ul>
      </div>

      <div className="advice">
        <h3>インフェリア アジト2</h3>
        <nav>
          <dl>
            <dt>場所</dt>
            <dd>GPS (119, 233)</dd>
          </dl>
        </nav>
        <h4>入手アイテム</h4>
        <ul>
          <li>あかのかけら</li>
          <li>ルーンボトル</li>
          <li>アワーグラス</li>
          <li>ルーンボトル</li>
          <li>8415ガルド</li>
          <li>セージ</li>
        </ul>
      </div>

      <div className="advice">
        <h3>インフェリア アジト3</h3>
        <nav>
          <dl>
            <dt>場所</dt>
            <dd>GPS (142, 1)</dd>
          </dl>
        </nav>
        <h4>入手アイテム</h4>
        <ul>
          <li>にんとうちざくら</li>
          <li>きいろのかけら</li>
          <li>ルーンボトル</li>
          <li>ラベンダー</li>
          <li>ルーンボトル</li>
          <li>10710ガルド</li>
        </ul>
      </div>

      <div className="advice">
        <h3>インフェリア アジト4</h3>
        <nav>
          <dl>
            <dt>場所</dt>
            <dd>GPS (226, 130)</dd>
          </dl>
        </nav>
        <h4>入手アイテム</h4>
        <ul>
          <li>ルーンボトル</li>
          <li>エリクシール</li>
          <li>9945ガルド</li>
          <li>あおのかけら</li>
          <li>ベルベーヌ</li>
          <li>みどりのかけら</li>
        </ul>
      </div>
    </article>
  );
}
