import { LuBookText, LuHistory, LuInfo } from "react-icons/lu";
import { RiFlag2Fill } from "react-icons/ri";

const sectionIcons = {
  overview: <LuInfo className="mr-1" />,
  guide: <LuBookText className="mr-1" />,
  data: <LuBookText className="mr-1" />,
  history: <LuHistory className="mr-1" />,
  flag: <RiFlag2Fill className="mr-1" />,
};

type Props = {
  type?: keyof typeof sectionIcons;
  children: React.ReactNode;
};

const SectionTitle = (props: Props) => {
  const { children, type = "guide" } = props;
  return (
    <h2 className="flex items-center">
      {sectionIcons[type]}
      {children}
    </h2>
  );
};

export default SectionTitle;
