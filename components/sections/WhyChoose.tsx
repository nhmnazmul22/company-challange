import React from "react";
import SectionHeading from "../ui/SectionHeading";
import InfoCard from "../ui/InfoCard";
import companyInfo from "@/data/company";
import Container from "@/components/layout/Container";

const WhyChoose = () => {
  return (
    <Container>
      <div>
        <SectionHeading
          title="Why Choose"
          subTitle="We provide high-performance lubricants engineered to protect engines, enhance efficiency, and extend equipment life across every industry."
          spanText="Pro Lubricant?"
        />
        <div className="mt-16 grid grid-cols-12 gap-8">
          {companyInfo.whyChoose.map((info) => (
            <InfoCard key={info.id} info={info} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
