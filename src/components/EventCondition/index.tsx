import styles from "./styles.module.css";

const list = {
  skill: "習得条件",
  period: "発生期間",
};
type Props = {
  category: keyof typeof list;
  children: React.ReactNode;
};
const EventCondition = (props: Props) => {
  const { category = "period", children } = props;
  const title = list[category];
  return (
    <div className={`${styles.condition} mb-3 font-bold`}>
      <span
        className={`${styles.smallInfo} mr-1 text-xs font-bold text-white bg-olive-900 border border-olive-900 rounded-xs px-4 py-1`}
      >
        {title}
      </span>
      {children}
    </div>
  );
};

export default EventCondition;
