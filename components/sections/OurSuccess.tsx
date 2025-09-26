import React from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Impact from "@/components/ui/Impact";
import companyInfo from "@/data/company";

const OurSuccess = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600">
      <Container>
        <SectionHeading
          title="Our Success in Numbers"
          subTitle="These numbers showcase our expertise, reliability, and dedication to keeping engines and machinery running smoothly."
          titleClasses="text-white"
          subTitleClasses="text-gray-200"
        />
        <div className="grid grid-cols-12 max-sm:space-y-10 sm:gap-10 max-w-5xl text-center mx-auto mt-16">
          {companyInfo.ourImpact.map((success, index) => (
            <Impact
              key={index}
              impactNum={success.impactNum}
              impactTitle={success.title}
              numClasses="!text-3xl md:!text-4xl lg:!text-5xl mb-1"
              titleClasses="text-gray-200"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurSuccess;
