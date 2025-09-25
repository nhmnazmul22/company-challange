import { cn } from "@/lib/utils";
import { OtherInfo } from "@/types";
import React from "react";

type Props = {
  info: OtherInfo;
  classes?: string;
};

const InfoCard = ({ info, classes }: Props) => {
  return (
    <div
      className={cn(
        "col-span-12 sm:col-span-6 lg:col-span-3 hover:shadow-lg duration-300 px-5 py-8 rounded-xl text-center space-y-3",
        classes
      )}
    >
      <div className="w-[60px] h-[60px] bg-accent group-hover:bg-white rounded-full flex justify-center items-center text-white group-hover:text-accent duration-300 mx-auto ">
        {<info.icon size={32} />}
      </div>
      <h4 className="text-xl font-semibold">
        {info.title}
      </h4>
      <p className="text-sm xl:text-base text-gray-600">
        {info.des}
      </p>
    </div>
  );
};

export default InfoCard;
