import React from "react";
import { Button } from "../ui/shadcnui/button";
import { ArrowRight, Play } from "lucide-react";
import Impact from "../ui/Impact";
import companyInfo from "@/data/company";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" bg-linear-to-bl from-violet-500 to-fuchsia-500 relative">
      <div className="container ">
        <div className="py-28 text-center max-w-[800px] mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-white text-sm">
              🚀 Digital Solutions That Drive Growth
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
            Transform Your Business with Innovation
          </h1>
          <p className="text-gray-200 mt-4 max-w-[580px] mx-auto text-sm md:text-lg">
            We create cutting-edge digital experiences that elevate your brand
            and accelerate your business growth through strategic innovation.
          </p>
          <div className="flex justify-center items-center gap-5 mt-10">
            <Link href="/contact">
              <Button variant="secondary" className="sm:text-base sm:!p-6">
                Get Started <ArrowRight />
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" className="sm:text-base sm:!p-6">
                <Play /> View Our Work
              </Button>
            </Link>
          </div>
          <div className=" grid grid-cols-12 items-center max-sm:space-y-4 sm:gap-10 mt-14">
            {companyInfo.ourImpact.map((impact, index) => (
              <Impact
                key={index}
                impactNum={impact.impactNum}
                impactTitle={impact.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
