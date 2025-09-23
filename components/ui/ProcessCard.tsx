import { Process } from "@/types";
import React from "react";

type Props = {
  data: Process;
};

const ProcessCard = ({ data }: Props) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-3 px-5 py-8 rounded-xl text-center space-y-3">
      <div className="w-[60px] h-[60px] bg-accent rounded-full flex justify-center items-center mx-auto text-white ">
        {<data.icon size={32} />}
      </div>
      <h4 className="text-xl font-semibold">{data.title}</h4>
      <p className="text-base text-gray-600">{data.des}</p>
    </div>
  );
};

export default ProcessCard;
