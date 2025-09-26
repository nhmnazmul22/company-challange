import React from "react";
import VirtualSlider from "@/components/ui/VirtualSlider";

const BestCategories = () => {
  return (
    <div className="container pt-5 pb-16">
      <div className="max-w-6xl w-full mx-auto flex max-lg:flex-col-reverse gap-5 sm:gap-10 justify-between items-start mt-10">
        <div className="w-full lg:max-w-lg">
          <h3 className="text-3xl sm:text-5xl font-semibold sm:leading-14">
            Premium Quality Lubricants
          </h3>
          <p className="text-base text-gray-600 mt-1 sm:mt-5 leading-7">
            Our comprehensive range of automotive and industrial lubricants
            includes SAE 15W-40, 20W-50 engine oils, ISO 68 hydraulic fluids,
            and SAE 90 GL-5 gear oils. Engineered for superior performance
            across passenger cars, heavy trucks, agricultural equipment, and
            industrial machinery, our advanced formulations deliver exceptional
            protection, efficiency, and reliability for all your lubrication
            needs.
          </p>
        </div>
        <VirtualSlider />
      </div>
    </div>
  );
};

export default BestCategories;
