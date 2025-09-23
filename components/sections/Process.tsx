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
          subTitle="A proven methodology that ensures successful project delivery every time."
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
