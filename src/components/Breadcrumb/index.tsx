import { createParentPageName } from "@/utils";
import styles from "./styles.module.css";
import { CategoryKey } from "@/constants";

type Props = {
  category: CategoryKey;
  pageTitle: string;
};
const Breadcrumb = (props: Props) => {
  const { category, pageTitle } = props;
  return category === "none" ? null : (
    <nav aria-label="Breadcrumb" className={`${styles.breadcrumb} mb-6`}>
      <ol>
        <li>
          <a href="/">テイルズオブエターニア攻略</a>
        </li>
        <li>
          <a href="/story">{createParentPageName(category)}</a>
        </li>
        <li aria-current="page">{pageTitle}</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
