import { TestimonialType } from "@/types";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  data: TestimonialType;
};

const TestimonialCard = ({ data }: Props) => {
  return (
    <div className="col-span-12 last:max-lg:col-span-12 md:col-span-6 lg:col-span-4 bg-linear-to-b from-white to-gray-100 shadow hover:shadow-lg duration-300 px-5 py-8 rounded-xl border border-gray-100 space-y-3">
      <span>
        <Quote />
      </span>
      <p className="mt-3 text-base italic text-gray-600">{`"${data.comment}"`}</p>
      <div className="flex gap-3 items-center mt-8">
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
    </div>
  );
};

export default TestimonialCard;
