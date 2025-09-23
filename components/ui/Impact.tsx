import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  impactNum: string;
  impactTitle: string;
  shortDes?: string;
  numClasses?: string;
  titleClasses?: string;
  shortDesClasses?: string;
};

const Impact = ({
  impactNum,
  impactTitle,
  shortDes,
  numClasses,
  titleClasses,
  shortDesClasses,
}: Props) => {
  return (
    <div className="col-span-6 md:col-span-3">
      <h3
        className={cn(
          "text-white font-semibold text-2xl sm:text-3xl",
          numClasses
        )}
      >
        {impactNum}
      </h3>
      <p className={cn("text-gray-200 text-base", titleClasses)}>
        {impactTitle}
      </p>
      <p className={cn("text-gray-200 text-sm", shortDesClasses)}>{shortDes}</p>
    </div>
  );
};

export default Impact;
