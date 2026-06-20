import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";

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

      <div className="advice">
        <h3>三散華 (さざんか)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv2/蹴Lv2</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>連牙弾 (れんがだん)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv5/蹴Lv2</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>飛燕連脚 (ひえんれんきゃく)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv4/蹴Lv5</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>鷹爪蹴撃 (ようそうしゅうげき)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv3/蹴Lv8</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>臥龍空破 (がりゅうくうは)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv8/蹴Lv4</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>散華猛襲脚 (さんかもうしゅうきゃく)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv11/蹴Lv12</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>双撞掌底破 (ようどうしょうていは)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv10/蹴Lv8</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>飛燕連天脚 (ひえんれんてんきゃく)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv9/蹴Lv18</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>八葉連牙 (はちようれんが)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv16/蹴Lv8</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>鷹爪落爆蹴 (ようそうらくばくしゅう)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv22/蹴Lv25</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>獅子戦吼 (ししせんこう)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv22/蹴Lv14</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>殺劇舞荒拳 (さつげきぶこうけん)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>拳Lv30/蹴Lv30</dd>
          </dl>
        </nav>
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
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>--</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>解毒功 (げどくこう)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>--</dd>
          </dl>
        </nav>
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
      </div>

      <div className="advice">
        <h3>回生功 (かいせいこう)</h3>
        <nav>
          <dl>
            <dt>必要レベル</dt>
            <dd>--</dd>
          </dl>
        </nav>
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
