import styles from "./style.module.css";
import { BiSolidInfoSquare } from "react-icons/bi";
import { RiFileInfoFill } from "react-icons/ri";
type Props = {
  title?: string;
  color?: "black" | "green";
  children: React.ReactNode;
};
const PageSummary = (props: Props) => {
  const { children, title = "概要", color = "green" } = props;
  return (
    <div className={`${styles.summary} mb-10 pb-3`}>
      <header
        className={`${styles[color]} font-bold mb-3 inline-flex items-center`}
      >
        <BiSolidInfoSquare
          className={`mr-1 ${styles["icon-green"]}`}
          size={28}
        />
        {title}
      </header>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageSummary;
