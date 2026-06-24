"use client";
import styles from "./styles.module.css";

type Item = {
  locationId: number;
  itemName: string;
  remarks: string;
};
type Props = {
  data: Item[];
  locationIds: number[];
};

export default function ChartList(props: Props) {
  const { data, locationIds } = props;
  const result = data.filter((item) => locationIds.includes(item.locationId));
  const List = result.map((item, index) => (
    <li key={index}>
      {item.itemName}
      <span>{item.remarks}</span>
    </li>
  ));
  const Display =
    result.length === 0 ? (
      <p className="pt-2">なし</p>
    ) : (
      <ul className={styles.list}>{List}</ul>
    );
  return (
    <div className="mb-10">
      <h3>アイテム</h3>
      {Display}
    </div>
  );
}
