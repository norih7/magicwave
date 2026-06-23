import styles from "./style.module.css";

type Props = {
  title?: string;
  color?: "black" | "green";
  children: React.ReactNode;
};
const PageSummary = (props: Props) => {
  const { children, title = "Overview", color = "green" } = props;
  return (
    <div className={`${styles.summary} mb-10`}>
      <header className={`${styles[color]} font-bold mb-4`}>{title}</header>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageSummary;
