type Props = {
  children: React.ReactNode;
};

const Tag = (props: Props) => {
  const { children } = props;
  return (
    <span className="mr-1 px-2 py-1 bg-red-100 text-red-700 text-xs font-bold">
      {children}
    </span>
  );
};

export default Tag;
