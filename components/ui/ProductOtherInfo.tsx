import { CircleCheckBig } from "lucide-react";

const ProductOtherInfo = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
    <p className="text-xl font-semibold mb-4">{title}</p>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-gray-700">
          <CircleCheckBig className="text-accent w-5 h-5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductOtherInfo;
