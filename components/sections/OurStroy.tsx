import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import companyInfo from "@/data/company";
import InfoCard from "../ui/InfoCard";

const OurStroy = () => {
  return (
    <Container>
      <SectionHeading
        title={companyInfo.ourStory.title}
        subTitle={companyInfo.ourStory.des}
        subTitleClasses="!text-base !max-w-[800px]"
      />
      <div className="mt-16 grid grid-cols-12  gap-5 md:gap-10">
        {companyInfo.ourStory.otherInfo.map((info) => (
          <InfoCard
            key={info.id}
            info={info}
            classes="max-lg:last:!col-span-12 lg:!col-span-4"
          />
        ))}
      </div>
    </Container>
  );
};

export default OurStroy;
