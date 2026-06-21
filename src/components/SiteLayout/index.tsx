"use client";
import styles from "./styles.module.css";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useTitle } from "@/context/TitleContext";
import { useCategory } from "@/hooks/useCategory";
import Breadcrumb from "@/components/Breadcrumb";
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
        <div className={`${styles.headerInner} px-4 pb-4 pt-2`}>
          <div className="flex justify-between items-center ">
            <div>
              <h1 className="text-lg font-bold tracking-tight mb-1">
                <a href="/">RE:MAGIC</a>
              </h1>
              <p className="relative text-xs text-gray-700">
                テイルズオブエターニア攻略情報をお届けします
              </p>
            </div>
            <MenuButton />
          </div>
        </div>
      </header>

      <div className={styles.pageTitleArea}>
        <div className={`${styles.pageTitleInner} p-4`}>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
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
