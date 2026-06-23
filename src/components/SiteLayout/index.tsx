"use client";
import styles from "./styles.module.css";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useTitle } from "@/context/TitleContext";
import { useCategory } from "@/hooks/useCategory";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title } = useTitle();
  const category = useCategory();

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles.headerInner} px-4 pb-2 pt-1`}>
          <div className="flex justify-between items-center ">
            <h1 className="text-lg font-bold tracking-tight">
              <a href="/">
                <Image src="/logo.png" alt="" width={145} height={45} />
              </a>
            </h1>
            <MenuButton />
          </div>
          <div className="">
            <p className="relative text-xs text-gray-700">
              テイルズオブエターニアの攻略情報をお届けします
            </p>
          </div>
        </div>
      </header>
      <div className={styles.pageTitleArea}>
        <div className={`${styles.pageTitleInner} px-4 py-3`}>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        </div>
      </div>
      <div className={`${styles.shortcutMenu}`}>
        <div>
          <ul className="flex flex-nowrap">
            <li className="py-2 pl-4 text-xs">
              <a href="/stories">ストーリーガイド</a>
            </li>
            <li className="py-2 pl-4 text-xs">
              <a href="/skills">特技/晶霊術</a>
            </li>
            <li className="py-2 pl-4 text-xs">
              <a href="/systems">システム解説</a>
            </li>
            <li className="py-2 pl-4 text-xs">
              <a href="/subevents">サブイベント</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        {/* PCのみ表示されるサイドバー */}
        <aside className={`${styles.sidebar} hidden md:block`}>
          <Menu />
        </aside>

        <main className={`${styles.main} px-4 py-8`}>
          <Breadcrumb category={category} pageTitle={title} />
          {/* <div
            style={{
              height: "200px",
              background: "#333",
              marginBottom: "30px",
            }}
          >
            Adsense
          </div> */}
          {children}
        </main>
      </div>

      <footer className={styles.footer}>
        <p className="text-sm">© 2026</p>
      </footer>
    </>
  );
}
