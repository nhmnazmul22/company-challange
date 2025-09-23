import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
  children: React.ReactNode;
  data: {
    icon?: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    title: string;
  };
};

const Card = ({ children, data }: Props) => {
  return (
    <div className="w-full bg-linear-to-b from-white to-gray-100 shadow hover:shadow-lg duration-300 px-5 py-8 rounded-xl border border-gray-100 space-y-3">
      <div className="flex justify-start gap-2 items-center mb-4">
        {data.icon && (
          <div className="w-[60px] h-[60px] bg-accent rounded-full flex justify-center items-center mx-auto text-white ">
            {<data.icon size={24} />}
          </div>
        )}
        <h4 className="text-2xl font-semibold flex-1">{data.title}</h4>
      </div>
      {children}
    </div>
  );
};

export default Card;
