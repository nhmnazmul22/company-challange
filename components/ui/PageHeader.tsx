import React from "react";
import Container from "../layout/Container";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subTitle: string;
  titleClasses?: string;
  subTitleClasses?: string;
};

const PageHeader = ({
  title,
  subTitle,
  titleClasses,
  subTitleClasses,
}: Props) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 pt-10 md:pt-16">
      <Container>
        <div className="text-center max-w-[700px] mx-auto">
          <h2
            className={cn(
              "text-white text-3xl md:text-5xl font-semibold mb-0 md:mb-3",
              titleClasses
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-gray-50 text-base md:text-lg ",
              subTitleClasses
            )}
          >
            {subTitle}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
