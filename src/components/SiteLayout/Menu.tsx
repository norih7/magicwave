import styles from "./styles.module.css";
import Link from "next/link";
import { storyLinks } from "@/constants";
import { skillLinks } from "@/constants";
import { subeventLinks } from "@/constants";
import { systemLinks } from "@/constants";
import { extraLinks } from "@/constants";

type Link = {
  title: string;
  path: string;
  desc: string;
  image?: string;
};

type Props = {
  links: Link[];
};
const List = (props: Props) => {
  const { links } = props;
  const list = links.map((item, index) => (
    <li key={index}>
      <a href={item.path} className="block p-1 hover:bg-gray-100 rounded">
        {item.title}
      </a>
    </li>
  ));
  return <ul className="space-y-1 mb-5">{list}</ul>;
};

export default function Menu() {
  return (
    <nav className={`${styles.menu} px-4 py-8`}>
      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        ストーリーガイド
      </p>
      <List links={Object.values(storyLinks)} />
      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        特技/晶霊術
      </p>
      <List links={Object.values(skillLinks)} />
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
      <List links={Object.values(systemLinks)} />

      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        サブイベント
      </p>
      <List links={Object.values(subeventLinks)} />

      <p className="mb-2 text-sm font-semibold text-black-400 uppercase tracking-wider">
        隠しダンジョン
      </p>
      <List links={Object.values(extraLinks)} />
    </nav>
  );
}
