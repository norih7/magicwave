import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import EventCondition from "@/components/EventCondition";
import Tag from "@/components/Tag";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "ファラの特技";
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
      <h2>ファラの特技一覧</h2>
      <div className="advice">
        <h3>三散華 (さざんか)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv2</Tag>
          <Tag>蹴Lv2</Tag>
        </EventCondition>
        <p>
          脚の蹴り上げ下ろしによる3連撃。連撃の最後は的を奥に蹴飛ばす。連撃中はスキが多いので命中率が低い場合や硬い的には注意。
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
              <td>6</td>
              <td>3</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>
        <h3>連牙弾 (れんがだん)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv5</Tag>
          <Tag>蹴Lv2</Tag>
        </EventCondition>
        <p>連続した拳のパンチを繰り出す。パンチなので攻撃範囲はかなり狭い。</p>
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
              <td>8</td>
              <td>6</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>飛燕連脚 (ひえんれんきゃく)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv4</Tag>
          <Tag>蹴Lv5</Tag>
        </EventCondition>
        <p>
          地上からジャンプし、空中で蹴りを繰り出す。非常に使いやすく、途中でキャンセルして空中からの技の連携も可能。
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
              <td>7</td>
              <td>3</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>鷹爪蹴撃 (ようそうしゅうげき)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv3</Tag>
          <Tag>蹴Lv8</Tag>
        </EventCondition>
        <p>
          ジャンプ中の空中から垂直に蹴り下ろして落下する。動作が早いのでこちらも使いやすい。地上では出すことができない。
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
              <td>8</td>
              <td>3</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>臥龍空破 (がりゅうくうは)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv8</Tag>
          <Tag>蹴Lv4</Tag>
        </EventCondition>
        <p>
          地上から拳のため攻撃を行い、敵を空中に突き上げる攻撃。ファラの突進などの動作があり、使いこなすのはコツが必要。空中コンボにつなげるのにはよい。
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
              <td>3</td>
              <td>風、雷</td>
            </tr>
          </tbody>
        </table>

        <h3>散華猛襲脚 (さんかもうしゅうきゃく)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv11</Tag>
          <Tag>蹴Lv12</Tag>
        </EventCondition>
        <p>
          空中でのみ発動できる技。空中から斜めに落下して三散華による蹴り上げ攻撃を行う。
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

        <h3>双撞掌底破 (ようどうしょうていは)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv10</Tag>
          <Tag>蹴Lv8</Tag>
        </EventCondition>
        <p>--</p>
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
              <td>2</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>飛燕連天脚 (ひえんれんてんきゃく)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv9</Tag>
          <Tag>蹴Lv18</Tag>
        </EventCondition>
        <p>
          飛燕連脚の昇華技。最後にムーンサルトによる一蹴りが加わっている。習得には「飛燕連脚」の使用が150回以上必要。
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
              <td>13</td>
              <td>4</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>八葉連牙 (はちようれんが)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv16</Tag>
          <Tag>蹴Lv8</Tag>
        </EventCondition>
        <p>習得には「連牙弾」の使用が150回以上必要。</p>
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
              <td>18</td>
              <td>11</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>鷹爪落爆蹴 (ようそうらくばくしゅう)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv22</Tag>
          <Tag>蹴Lv25</Tag>
        </EventCondition>
        <p>
          習得には「散華猛襲脚」の使用が100回以上、「飛燕連天脚」の使用が100回以上必要。
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
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>獅子戦吼 (ししせんこう)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv22</Tag>
          <Tag>蹴Lv14</Tag>
        </EventCondition>
        <p>
          習得には「八葉連牙」の使用が100回以上、「双撞掌底破」の使用が160回以上必要。
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
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>殺劇舞荒拳 (さつげきぶこうけん)</h3>
        <EventCondition category="skill">
          <Tag>拳Lv30</Tag>
          <Tag>蹴Lv30</Tag>
        </EventCondition>
        <p>
          習得には「獅子戦吼」の使用が120回以上、「鷹爪落爆蹴」の使用が120回以上必要。
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
              <td>21</td>
              <td>武器の属性、火属性</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-5">ファラの特技 | 回復技</h2>

      <div className="advice">
        <h3>治癒功 (ちゆこう)</h3>
        <EventCondition category="skill">
          <Tag>イベントで習得</Tag>
        </EventCondition>
        <p>
          ストーリー進行で習得(レグルス道場でのイベント)。仲間一人のHPを回複する。
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
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>

        <h3>解毒功 (げどくこう)</h3>
        <EventCondition category="skill">
          <Tag>イベントで習得</Tag>
        </EventCondition>
        <p>
          ストーリー上で習得(モルルでのイベント)。仲間一人の毒状態を回復する。
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
              <td>8</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>

        <h3>回生功 (かいせいこう)</h3>
        <EventCondition category="skill">
          <Tag>イベントで習得</Tag>
        </EventCondition>
        <p>
          ストーリー上で習得(ファロース教会でのイベント)。仲間一人の戦闘不能状態を回復する。
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
              <td>50</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
