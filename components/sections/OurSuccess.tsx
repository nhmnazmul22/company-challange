import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Impact from "../ui/Impact";
import { ourSuccess } from "@/data/constant";

const OurSuccess = () => {
  return (
    <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500">
      <Container>
        <SectionHeading
          title="Our Success in Numbers"
          subTitle="These numbers reflect our commitment to excellence and client satisfaction."
          titleClasses="text-white"
          subTitleClasses="text-gray-200"
        />
        <div className="grid grid-cols-12 max-sm:space-y-10 sm:gap-10 max-w-5xl text-center mx-auto mt-16">
          {ourSuccess.map((success, index) => (
            <Impact
              key={index}
              impactNum={success.impactNum}
              impactTitle={success.impactTitle}
              numClasses="!text-3xl md:!text-4xl lg:!text-5xl mb-1"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurSuccess;
