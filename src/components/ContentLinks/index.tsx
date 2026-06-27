import Link from "next/link";
import Image from "next/image";

type Content = {
  title: string;
  path: string;
  desc: string;
  image?: string;
};
type Props = {
  list: Content[];
};

const ContentLinks = (props: Props) => {
  const { list } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {list.map((item) => {
        const Logo = item.image ? (
          <div className="flex justify-center bg-gray-800 mb-3">
            <Image
              src={item.image}
              alt=""
              width={350}
              height={80}
              className="object-contain"
            />
          </div>
        ) : null;
        return (
          <Link
            key={item.path}
            href={item.path}
            className="block pt-3 pb-4 px-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="mb-3 text-base">{item.title}</h3>
            {Logo}
            <p className="text-slate-800">{item.desc}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ContentLinks;
