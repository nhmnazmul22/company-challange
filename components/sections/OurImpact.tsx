import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import companyInfo from "@/data/company";
import Impact from "../ui/Impact";

const OurImpact = () => {
  return (
    <Container>
      <SectionHeading title="Our Impact" subTitle="" />
      <div className="grid grid-cols-1 sm:grid-cols-12 max-sm:space-y-8 sm:gap-10 text-center mt-20">
        {companyInfo.ourImpact.map((impact) => (
          <Impact
            key={impact.id}
            impactNum={impact.impactNum}
            impactTitle={impact.title}
            shortDes={impact.des}
            numClasses="!text-accent !text-5xl mb-2"
            titleClasses="!text-gray-800 font-medium"
            shortDesClasses="!text-gray-600"
          />
        ))}
      </div>
    </Container>
  );
};

export default OurImpact;
