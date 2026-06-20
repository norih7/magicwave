import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};
const EventCondition = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.condition}>
      <p>
        <span className={styles.smallInfo}>発生時期</span>
        {children}
      </p>
    </div>
  );
};

export default EventCondition;
