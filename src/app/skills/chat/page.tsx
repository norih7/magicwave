import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import EventCondition from "@/components/EventCondition";
import Tag from "@/components/Tag";
import Link from "next/link";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "チャットの特技";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <h2>おすすめの特技</h2>
      <div className="advice">
        <p>準備中</p>
      </div>
      <h2>チャットの特技一覧</h2>
      <div className="advice">
        <h3>ピコハン</h3>
        <EventCondition category="skill">加入時に習得済み</EventCondition>
        <p>
          ハンマーを投げて敵を攻撃する特技。命中すると相手が気絶状態になることがあります。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12</td>
              <td>4</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>ローバーアイテム</h3>
        <EventCondition category="skill">加入時に習得済み</EventCondition>
        <p>
          飛び道具のワイヤーを敵にぶつけてアイテムを盗むことができる特技。ぶんどる的特技。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15</td>
              <td>2</td>
              <td>物理</td>
            </tr>
          </tbody>
        </table>

        <h3>ポイハン</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-chat">チャットの特技習得</Link>
        </EventCondition>
        <p>
          毒のついたハンマーを投げる特技。命中すると相手が毒状態になることがあります。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16</td>
              <td>4</td>
              <td>水</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>コチハン</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-chat">チャットの特技習得</Link>
        </EventCondition>
        <p>
          凍ったハンマーを投げて敵を攻撃する特技。命中すると敵が凍結状態になることがあります。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>4</td>
              <td>氷</td>
            </tr>
          </tbody>
        </table>

        <h3>パラライボール</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-chat">チャットの特技習得</Link>
        </EventCondition>
        <p>
          雷を宿したボールを敵にぶつける特技。命中すると敵が麻痺状態になることがあります。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>3</td>
              <td>雷</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>エターナルスロー</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-chat">チャットの特技習得</Link>
        </EventCondition>
        <p>
          すごいスピードでTPが減っていき、チャットのTPが尽きるか1分間経過するまでハンマーを投げ続けます。パイングミがたくさんあるとかなり強い特技。
        </p>
        <table>
          <thead>
            <tr>
              <th>消費TP</th>
              <th>最大HIT数</th>
              <th>属性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>60</td>
              <td>--</td>
              <td>物理</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
