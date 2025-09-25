import React from "react";
import Container from "../layout/Container";
import VirtualSlider from "../ui/VirtualSlider";

const BestCategories = () => {
  return (
    <Container>
      <div className="max-w-6xl w-full mx-auto flex gap-10 justify-between items-center mt-10">
        <div className="max-w-lg">
          <h3 className="text-5xl font-semibold">Premium Quality Lubricants</h3>
          <p className="text-base text-gray-600 mt-5">
            Our comprehensive range of automotive and industrial lubricants
            includes SAE 15W-40, 20W-50 engine oils, ISO 68 hydraulic fluids,
            and SAE 90 GL-5 gear oils. Engineered for superior performance
            across passenger cars, heavy trucks, agricultural equipment, and
            industrial machinery, our advanced formulations deliver exceptional
            protection, efficiency, and reliability for all your lubrication
            needs.
          </p>
        </div>
        <div className="">
          <VirtualSlider />
        </div>
      </div>
    </Container>
  );
};

export default BestCategories;
