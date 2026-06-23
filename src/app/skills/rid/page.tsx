import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import EventCondition from "@/components/EventCondition";
import Tag from "@/components/Tag";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "リッドの特技";
export const metadata = {
  title: createMetaTitle(title),
  description: "",
};

export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <h2>おすすめの特技/奥義</h2>
      <div className="advice">
        <p>準備中</p>
      </div>
      <h2>リッドの特技一覧</h2>
      <div className="advice">
        <h3>魔神剣 (まじんけん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv1</Tag>
          <Tag>突Lv1</Tag>
        </EventCondition>
        <p>
          剣圧を放つ飛び攻撃。敵の詠唱を妨げたいときの飛び道具として結構使えます。
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
              <td>4</td>
              <td>1</td>
              <td>物理</td>
            </tr>
          </tbody>
        </table>

        <h3>雷神剣 (らいじんけん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv1</Tag>
          <Tag>突Lv2</Tag>
        </EventCondition>
        <p>雷属性の突き攻撃。突きがヒットすると追加で雷ダメージを与える。</p>
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
              <td>4</td>
              <td>2</td>
              <td>雷</td>
            </tr>
          </tbody>
        </table>

        <h3>虎牙破斬 (こがはざん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv5</Tag>
          <Tag>突Lv2</Tag>
        </EventCondition>
        <p>上下の2段斬りを行う。動作に無駄がなく終盤でも活躍する特技。</p>
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
              <td>2</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>散沙雨 (ちりさだめ)</h3>
        <EventCondition category="skill">
          <Tag>斬L2</Tag>
          <Tag>突Lv5</Tag>
        </EventCondition>
        <p>
          最大5HITの連続突きを行う。武器の命中率が低いとあまりHITしないので注意。
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
              <td>5</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>裂空斬 (れっくうざん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv16</Tag>
          <Tag>突Lv8</Tag>
        </EventCondition>
        <p>
          円を描きながら回転斬りを行う。敵の背後に回り込むために使用するのも有効。使用回数が100を超えるとジャンプ中に発動可能になり、使い道が広がる。
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
              <td>9</td>
              <td>5</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>風雷神剣 (ふうらいじんけん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv4</Tag>
          <Tag>突Lv10</Tag>
        </EventCondition>
        <p>
          雷神剣を強化した攻撃。使い勝手的には雷神剣と大きな差はないが、のちに鳳凰天駆を習得するために多くの使用回数が必要となる。習得にはレベル以外に「雷神剣」の使用が50回以上必要。
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
              <td>風、雷</td>
            </tr>
          </tbody>
        </table>

        <h3>魔神剣・双牙 (まじんけんそうが)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv10</Tag>
          <Tag>突Lv3</Tag>
        </EventCondition>
        <p>
          魔神剣をテンポよく2回放つ。一定の距離の敵にしか届かないが、タイミングをずらした素早い2連撃は魅力的。習得にはレベル以外に「魔神剣」の使用が48回以上必要。
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
              <td>物理</td>
            </tr>
          </tbody>
        </table>

        <h3>虎牙連斬 (こがれんざん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv13</Tag>
          <Tag>突Lv4</Tag>
        </EventCondition>
        <p>
          虎牙破斬を強化した攻撃。虎牙破斬から乗り換える人が多数の特技でかなり使い勝手がいい。習得にはレベル以外に「虎牙破斬」の使用が150回以上必要。
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
              <td>10</td>
              <td>4</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>秋沙雨 (あきさだめ)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv4</Tag>
          <Tag>突Lv13</Tag>
        </EventCondition>
        <p>
          最大11HITの連続突きを行う。最後には突き上げ斬りをするためコンボに使う場合は使い勝手が難しい。習得にはレベル以外に「散沙雨」の使用が130回以上必要。
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
              <td>11</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>雷神双破斬 (らいじんそうはざん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv7</Tag>
          <Tag>突Lv5</Tag>
        </EventCondition>
        <p>
          雷神剣と虎牙破斬を組み合わせた奥義。習得にはレベル以外に「雷神剣」の使用が16回以上、「虎牙破斬」の使用が16回以上必要。
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
              <td>4</td>
              <td>4</td>
              <td>雷、武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>魔神千裂破 (まじんせんれつは)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv5</Tag>
          <Tag>突Lv7</Tag>
        </EventCondition>
        <p>
          魔神剣と散沙雨を組み合わせた奥義。習得にはレベル以外に「雷神剣」の使用が24回以上、「散沙雨」の使用が24回以上必要。
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
              <td>10</td>
              <td>6</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>魔神連牙斬 (まじんれんがざん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv13</Tag>
          <Tag>突Lv1</Tag>
        </EventCondition>
        <p>
          魔神剣を4回連続で放つ。習得にはレベル以外に「魔神剣」の使用が60回以上、「魔神剣双牙」の使用が50回以上必要。
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
              <td>4</td>
              <td>物理</td>
            </tr>
          </tbody>
        </table>

        <h3>空破絶掌撃 (くうはぜっしょうげき)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv1</Tag>
          <Tag>突Lv14</Tag>
        </EventCondition>
        <p>
          強力な突き攻撃。巨大な敵も巻き込んでくれるので使い勝手がいい。習得にはレベル以外に「雷神剣」の使用が70回以上、「散沙雨」の使用が70回以上必要。
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
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>閃空裂破 (せんくうれっぱ)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv9</Tag>
          <Tag>突Lv16</Tag>
        </EventCondition>
        <p>
          敵を巻き込みながら攻撃。光属性の攻撃であり、命中率が高ければ中々使い勝手がいい。
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
              <td>10</td>
              <td>8</td>
              <td>光</td>
            </tr>
          </tbody>
        </table>

        <h3>閃空双破斬 (せんくうそうはざん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv19</Tag>
          <Tag>突Lv14</Tag>
        </EventCondition>
        <p>
          閃空裂破と虎牙破斬を組み合わせた奥義。習得にはレベル以外に「閃空裂破」の使用が80回以上、「虎牙破斬」の使用が120回以上必要。
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
              <td>8</td>
              <td>光、物理</td>
            </tr>
          </tbody>
        </table>

        <h3>翔雨裂空撃 (しょううれっくうげき)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv14</Tag>
          <Tag>突Lv19</Tag>
        </EventCondition>
        <p>
          裂空斬と秋沙雨を組み合わせた奥義。最大HIT数は19ですが、これを出すのは難しい。習得にはレベル以外に「裂空斬破」の使用が120回以上、「秋沙雨」の使用が80回以上必要。
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
              <td>24</td>
              <td>19</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>閃空翔裂破 (せんくうしょうれつは)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv5</Tag>
          <Tag>突Lv22</Tag>
        </EventCondition>
        <p>閃空裂破を強化した攻撃。</p>
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
              <td>14</td>
              <td>4</td>
              <td>光</td>
            </tr>
          </tbody>
        </table>

        <h3>真空列斬 (しんくうれつざん)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv23</Tag>
          <Tag>突Lv4</Tag>
        </EventCondition>
        <p>
          裂空斬を強化した攻撃。風属性の攻撃となり、モーションが早くなっている。
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
              <td>14</td>
              <td>5</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>

        <h3>鳳凰天駆 (ほうおうてんく)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv22</Tag>
          <Tag>突Lv24</Tag>
        </EventCondition>
        <p>
          飛び上がって敵に突撃する。エターニアの中で一番使い勝手がいい特技。連携でも威力を発揮する。習得にはレベル以外に「風雷神剣」の使用が200回以上、「空破絶掌撃破」の使用が150回以上必要。
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
              <td>40</td>
              <td>9</td>
              <td>火</td>
            </tr>
          </tbody>
        </table>

        <h3>猛虎連撃破 (もうこれんげきは)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv24</Tag>
          <Tag>突Lv20</Tag>
        </EventCondition>
        <p>
          上下連続きりを繰り返す。相手が固くないのであれば攻撃の隙を与えない戦い方ができる。習得にはレベル以外に「虎牙破斬」の使用が200回以上必要。
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
              <td>40</td>
              <td>8</td>
              <td>武器の属性</td>
            </tr>
          </tbody>
        </table>

        <h3>風刃縛封 (ふうじんばくふう)</h3>
        <EventCondition category="skill">
          <Tag>斬Lv30</Tag>
          <Tag>突Lv30</Tag>
        </EventCondition>
        <p>敵を空中に浮かす</p>
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
              <td>2</td>
              <td>風</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
