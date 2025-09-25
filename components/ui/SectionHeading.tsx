import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  spanText?: string;
  subTitle: string;
  titleClasses?: string;
  subTitleClasses?: string;
};

const SectionHeading = ({
  title,
  spanText,
  subTitle,
  titleClasses,
  subTitleClasses,
}: Props) => {
  return (
    <div className="text-center">
      <h2
        className={cn("text-3xl sm:text-4xl font-semibold mb-3", titleClasses)}
      >
        {title} <span className="text-accent">{spanText}</span>
      </h2>
      <p
        className={cn(
          "text-sm sm:text-base text-gray-600 max-w-[600px] mx-auto",
          subTitleClasses
        )}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeading;
