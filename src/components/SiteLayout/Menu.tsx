import styles from "./styles.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        ストーリーガイド
      </p>
      <ul className="space-y-1 mb-5">
        <li>
          <a
            href="/stories/guide1"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            ラシュアン〜水晶霊の河
          </a>
        </li>
        <li>
          <a
            href="/stories/guide2"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            いざないの密林〜火晶霊の谷
          </a>
        </li>
        <li>
          <a
            href="/stories/guide3"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            ファロース〜チャットの小屋
          </a>
        </li>
        <li>
          <a
            href="/stories/guide4"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            ペイルティ〜シゼル城
          </a>
        </li>
        <li>
          <a
            href="/stories/guide5"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            ルイシカ〜シゼル城
          </a>
        </li>
      </ul>
      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        特技/晶霊術
      </p>
      <ul className="space-y-1 mb-5">
        <li>
          <a href="/skills/rid" className="block p-1 hover:bg-gray-100 rounded">
            リッド
          </a>
        </li>
        <li>
          <a
            href="/skills/farth"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            ファラ
          </a>
        </li>
        <li>
          <a
            href="/skills/chat"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            チャット
          </a>
        </li>
        <li>
          <a href="/skills/fog" className="block p-1 hover:bg-gray-100 rounded">
            フォッグ
          </a>
        </li>
        <li>
          <a
            href="/skills/magic"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            晶霊術（メルディ＆キール）
          </a>
        </li>
      </ul>

      {/* <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        Data
      </p>
      <ul className="space-y-1 mb-5">
        <li>
          <a href="/recipes" className="block p-1 hover:bg-gray-100 rounded">
            レシピ一覧
          </a>
        </li>
        <li>
          <a href="/recipes" className="block p-1 hover:bg-gray-100 rounded">
            レンズ一覧
          </a>
        </li>
      </ul> */}

      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        システム
      </p>
      <ul className="space-y-1 mb-5">
        <li>
          <a
            href="/systems/manual"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            マニュアルのしょ
          </a>
        </li>
        <li>
          <a
            href="/systems/skill"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            特技の習得
          </a>
        </li>
        <li>
          <a
            href="/systems/rune"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            ルーンボトル
          </a>
        </li>
        <li>
          <a
            href="/systems/tp-reduce"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            消費TPを軽減
          </a>
        </li>
        <li>
          <a
            href="/systems/master-recipe"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            マスターレシピ
          </a>
        </li>
      </ul>

      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        サブイベント
      </p>
      <ul className="space-y-1 mb-5">
        <li>
          <a
            href="/subevents/lens"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            レンズ収集
          </a>
        </li>
        <li>
          <a
            href="/subevents/catarine"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            カトリーヌの恋愛
          </a>
        </li>
        <li>
          <a
            href="/subevents/kremerball"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            クレーメルボール
          </a>
        </li>
        <li>
          <a
            href="/subevents/syanballoon"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            シャンバルーン
          </a>
        </li>
        <li>
          <a
            href="/subevents/skill-chat"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            チャット特技習得
          </a>
        </li>
        <li>
          <a
            href="/subevents/skill-fog"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            フォッグ特技習得
          </a>
        </li>
        <li>
          <a
            href="/subevents/lysithea"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            画家リシテア
          </a>
        </li>

        <li>
          <a
            href="/subevents/flying-boad"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            飛行艇の入手
          </a>
        </li>

        <li>
          <a
            href="/subevents/secret-base"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            アイフリートアジト
          </a>
        </li>

        <li>
          <a
            href="/subevents/secret-spirits"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            隠し大晶霊
          </a>
        </li>
      </ul>

      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        隠しダンジョン
      </p>
      <ul className="space-y-1 mb-5">
        <li>
          <a
            href="/extras/dark-cave"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            闇の洞窟
          </a>
        </li>
        <li>
          <a
            href="/extras/sunken-ship"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            沈没船
          </a>
        </li>
        <li>
          <a
            href="/extras/aifread"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            アイフリードの墓
          </a>
        </li>

        <li>
          <a
            href="/extras/farosu-underground"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            ファロース教会地下
          </a>
        </li>
        <li>
          <a
            href="/extras/valkyrie"
            className="block p-1 hover:bg-gray-100 rounded"
          >
            きらめきの塔
          </a>
        </li>
      </ul>
    </nav>
  );
}
