type Props = {
  children: React.ReactNode;
};

const Tag = (props: Props) => {
  const { children } = props;
  return (
    <span className="mr-1 px-2 py-1 bg-orange-100 text-orange-700 border border-orange-200 rounded-xs text-xs font-bold">
      {children}
    </span>
  );
};

export default Tag;
