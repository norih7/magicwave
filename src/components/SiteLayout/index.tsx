"use client";
import styles from "./styles.module.css";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useTitle } from "@/context/TitleContext";
import { useCategory } from "@/hooks/useCategory";
import { createParentPageName } from "@/utils";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title } = useTitle();
  const category = useCategory();

  const Breadcrumb =
    category === "none" ? null : (
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol>
          <li>
            <a href="/">テイルズオブエターニア攻略</a>
          </li>
          <li>
            <a href="/story">{createParentPageName(category)}</a>
          </li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
    );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight">RE:MAGIC</h1>
            <MenuButton />
          </div>
        </div>
      </header>

      <div className={styles.pageTitleArea}>
        <div className={styles.pageTitleInner}>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
      </div>

      <div className={styles.container}>
        {/* PCのみ表示されるサイドバー */}
        <aside className={`${styles.sidebar} hidden md:block`}>
          <Menu />
        </aside>

        <main className={styles.main}>
          {Breadcrumb}
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
