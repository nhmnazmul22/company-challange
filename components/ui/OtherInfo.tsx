import { OtherInfo as OtherInfoType } from "@/types";
import React from "react";

type Props = {
  data: OtherInfoType;
};

const OtherInfo = ({ data }: Props) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-start gap-4 shadow hover:bg-blue-500 group duration-300">
      <div className="w-[40px]">
        {
          <data.icon
            size={34}
            className="text-accent group-hover:text-white duration-300"
          />
        }
      </div>
      <div className="flex-1">
        <p className="text-xl font-semibold group-hover:text-white duration-300">
          {data.title}
        </p>
        <p className="text-sm text-gray-600 group-hover:text-white duration-300">
          {data.des}
        </p>
      </div>
    </div>
  );
};

export default OtherInfo;
