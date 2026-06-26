import { MdKeyboardArrowRight } from "react-icons/md";

// 型定義をエクスポートしておくと、他のファイルでも使えて便利です
export interface GuideItem {
  title: string;
  href: string;
  description?: string; // 任意で説明文を追加できるようにしています
}

interface GuideListProps {
  items: GuideItem[];
}

export const GuideList: React.FC<GuideListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <a
            href={item.href}
            className="flex items-center px-2 py-2 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300"
          >
            <MdKeyboardArrowRight />
            <span>{item.title}</span>
            {item.description && (
              <span className="text-sm text-gray-500 mt-1">
                {item.description}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GuideList;
