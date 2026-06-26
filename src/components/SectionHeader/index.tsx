import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  children: React.ReactNode;
};
const SectionHeader = (props: Props) => {
  const { children } = props;
  return (
    <h3 className="flex items-center mb-2">
      <MdKeyboardArrowDown className="ml-1 mr-1" />
      {children}
    </h3>
  );
};

export default SectionHeader;
