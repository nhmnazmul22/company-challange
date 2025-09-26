import React from "react";
import Container from "@/components/layout/Container";
import companyInfo from "@/data/company";
import OtherInfo from "@/components/ui/OtherInfo";

const AboutUs = () => {
  return (
    <Container>
      <div className="max-w-6xl w-full mx-auto flex max-lg:flex-col gap-10 justify-between items-start mt-20">
        <div className="lg:max-w-xl">
          <h4 className="text-4xl font-semibold">
            {companyInfo.ourStory.title}
          </h4>
          <p className=" text-gray-600 mt-3 leading-7">
            {companyInfo.ourStory.des}
          </p>
        </div>
        <div className="flex-1">
          {companyInfo.ourStory.otherInfo.map((info) => (
            <OtherInfo key={info.id} data={info} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
