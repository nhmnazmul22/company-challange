import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { ourProcess } from "@/data/constant";
import ProcessCard from "../ui/ProcessCard";

const Process = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Process"
          subTitle="A proven approach to deliver high-quality lubricants and solutions for every vehicle and machinery type."
        />
        <div className="grid gap-5 md:gap-10 grid-cols-12 mt-14">
          {ourProcess.map((process) => (
            <ProcessCard key={process.id} data={process} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Process;
