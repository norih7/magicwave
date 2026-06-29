import {
  LuTable,
  LuZap,
  LuTarget,
  LuAward,
  LuHexagon,
  LuBookType,
} from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaComment } from "react-icons/lia";

interface Skill {
  name: string;
  ruby: string;
  description: string;
  requirement: string;
  requirement2?: string;
  tp: number;
  hit: number;
  element: string;
  type?: string;
}

// 修正点: PropertyListProps が Skill[] を受け取るように変更
interface SkillPropertyListProps {
  skills: Skill[];
}

export const SkillPropertyList: React.FC<SkillPropertyListProps> = ({
  skills,
}) => {
  // 配列をループして表示する設計にします
  return (
    <>
      {skills.map((skill, index) => {
        const properties = [
          {
            label: (
              <>
                <LuAward className="text-lime-600 mr-1" />
                習得条件1
              </>
            ),
            value: skill.requirement,
          },
          {
            label: (
              <>
                <LuAward className="text-lime-600 mr-1" />
                習得条件2
              </>
            ),
            value:
              skill.requirement2 === undefined ? "なし" : skill.requirement2,
          },
          {
            label: (
              <>
                <LuBookType className="text-gray-600 mr-1" />
                種別
              </>
            ),
            value: skill.type,
          },
          {
            label: (
              <>
                <LuHexagon className="text-mist-400 mr-1" />
                属性
              </>
            ),
            value: skill.element,
          },
          {
            label: (
              <>
                <LuZap className="text-yellow-500 mr-1" />
                消費TP
              </>
            ),
            value: skill.tp,
          },
          {
            label: (
              <>
                <LuTarget className="text-rose-300 mr-1" />
                最大HIT数
              </>
            ),
            value: skill.hit,
          },
        ];

        const displayItems = properties.filter(
          (item) => item.value !== "" && item.value !== 0,
        );

        return (
          <div key={index}>
            <h3>
              {skill.name}
              <span className="text-xs">（{skill.ruby}）</span>
            </h3>
            <div className=" border-gray-300  rounded-lg mb-8">
              <h4 className="flex items-center text-basic font-bold text-gray-600 border-b border-gray-300 py-1 mb-3">
                <LuTable className="mr-1" />
                データ
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {displayItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-200"
                  >
                    <div className="mb-1 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center">
                      {item.label}
                    </div>
                    <div className="text-sm text-slate-800 font-semibold">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="flex items-center text-basic font-bold text-gray-600 border-b border-gray-300 py-1 mb-3">
                <LiaComment className="mr-1" />
                説明
              </h4>
              <p className="">{skill.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillPropertyList;
