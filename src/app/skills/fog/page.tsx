import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import EventCondition from "@/components/EventCondition";
import Tag from "@/components/Tag";
import Link from "next/link";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "フォッグの特技";
export const metadata = {
  title: createMetaTitle(title),
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
      <h2>フォッグの特技一覧</h2>
      <div className="advice">
        <h3>バーニングフォース</h3>
        <EventCondition category="skill">加入時に習得済み</EventCondition>
        <p>火属性の銃弾攻撃。キャンセルLv1。</p>
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
              <td>2</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>アクアスパイラル</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-fog">フォッグの特技習得</Link>
        </EventCondition>
        <p>水属性の銃弾攻撃。キャンセルLv1。</p>
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
              <td>28</td>
              <td>6</td>
              <td>水</td>
            </tr>
          </tbody>
        </table>

        <h3>エアブレイド</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-chat">フォッグの特技習得</Link>
        </EventCondition>
        <p>風属性の銃弾攻撃。キャンセルLv1。</p>
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
              <td>24</td>
              <td>6</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>

        <h3>レイジレーザー</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-chat">フォッグの特技習得</Link>
        </EventCondition>
        <p>光属性の銃弾攻撃。キャンセルLv2。</p>
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
              <td>34</td>
              <td>8</td>
              <td>光</td>
            </tr>
          </tbody>
        </table>

        <h3>ダークレイザー</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-chat">フォッグの特技習得</Link>
        </EventCondition>
        <p>闇属性の銃弾攻撃。キャンセルLv2。</p>
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
              <td>40</td>
              <td>12</td>
              <td>闇</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="advice">
        <h3>エレメンタルマスター</h3>
        <EventCondition category="skill">
          <Tag>サブイベント</Tag>{" "}
          <Link href="/subevents/skill-chat">フォッグの特技習得</Link>
        </EventCondition>
        <p>
          全属性の銃弾をそれぞれ放つ攻撃。キャンセルLv3。この技をそのまま出そうとするとかなり詠唱時間がかかりますが、キャンセラーによりLv1→Lv2とつなげていくと発動がかなり短縮できます。
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
              <td>72</td>
              <td>12</td>
              <td>火、風、水、地、物理</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
