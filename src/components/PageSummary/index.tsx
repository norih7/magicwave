import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
};
const PageSummary = (props: Props) => {
  const { children } = props;
  return (
    <div className={`${styles.summary} mb-10`}>
      <header>概要 / Overview</header>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageSummary;
