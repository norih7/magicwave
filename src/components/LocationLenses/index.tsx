"use client";
import styles from "./styles.module.css";

type Recipe = {
  locationId: number;
  remarks: string;
};
type Props = {
  data: Recipe[];
  locationIds: number[];
};

export default function LocationLenses(props: Props) {
  const { data, locationIds } = props;
  const filter = data.filter((item) => locationIds.includes(item.locationId));
  const Hoge = filter.map((recipe, index) => (
    <li key={index}>
      <span>{recipe.remarks}</span>
    </li>
  ));
  return (
    <div className="mb-10">
      <h3>レンズ</h3>
      <ul className={styles.list}>{Hoge}</ul>
    </div>
  );
}
