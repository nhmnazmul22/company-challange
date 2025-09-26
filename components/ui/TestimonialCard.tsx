import { TestimonialType } from "@/types";
import Image from "next/image";
import React from "react";
import Starts from "@/components/ui/Starts";

type Props = {
  data: TestimonialType;
};

const TestimonialCard = ({ data }: Props) => {
  return (
    <div className="bg-linear-to-b from-white to-gray-100 shadow p-5 rounded-xl border border-gray-100 space-y-3 min-h-[280px] flex flex-col justify-center items-start">
      <div className="flex gap-3 items-center">
        <figure className="w-[60] h-[60] rounded-full overflow-hidden border border-gray-100">
          <Image
            src={data.authorImg || "/images/avatar.png"}
            width={100}
            height={100}
            alt={data.authorName}
            className="w-full h-full object-cover object-top"
          />
        </figure>
        <div className="space-y-1">
          <p className="font-semibold">{data.authorName}</p>
          <p className="text-gray-600 text-sm">{data.authorPosition}</p>
        </div>
      </div>
      <p className="mt-3 text-base italic text-gray-600">{`"${data.comment}"`}</p>
      <Starts rating={5} />
    </div>
  );
};

export default TestimonialCard;
