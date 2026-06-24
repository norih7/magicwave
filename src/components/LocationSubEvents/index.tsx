"use client";
import Link from "next/link";
import styles from "./styles.module.css";

type Subevent = {
  locationId: number;
  eventName: string;
  eventPath: string;
  remarks: string;
};
type Props = {
  data: Subevent[];
  locationIds: number[];
};

export default function ChartList(props: Props) {
  const { data, locationIds } = props;
  const result = data.filter((item) => locationIds.includes(item.locationId));
  const List = result.map((item, index) => (
    <li key={index}>
      <Link href={item.eventPath}>
        {item.eventName}
        <span>{item.remarks}</span>
      </Link>
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
      <h3>サブイベント</h3>
      {Display}
    </div>
  );
}
