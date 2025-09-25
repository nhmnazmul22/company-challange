"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { ArrowRight, Award, Download, Phone } from "lucide-react";
import { Button } from "../ui/shadcnui/button";
import Link from "next/link";

// CSS Imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/swiper.css";
import { sliderData } from "@/data/constant";

const HeroSection = () => {
  return (
    <Swiper
      speed={600}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        data-swiper-parallax="-23%"
      ></div>
      {sliderData.map((data) => (
        <SwiperSlide
          key={data.id}
          className="!flex !justify-start !items-center"
        >
          <div className="max-w-5xl relative max-lg:text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-white text-sm flex gap-2 items-center">
                <Award size={16} /> ISO 9001:2015 Certified Excellence
              </span>
            </div>
            <div>
              <h1
                className="text-4xl sm:text-5xl sm:leading-[60px] lg:text-7xl lg:leading-[90px] text-white font-semibold mb-3 "
                data-swiper-parallax="-300"
              >
                {data.title}
              </h1>
              <h4
                className="text-2xl lg:text-3xl font-medium "
                data-swiper-parallax="-200"
              >
                {data.subTitle}
              </h4>
              <p
                className="text-sm sm:text-base text-gray-200 font-normal mt-2"
                data-swiper-parallax="-100"
              >
                {data.shortDes}
              </p>
            </div>
            <div className="mt-5 space-x-6">
              <Link href="/products">
                <Button variant="default" size="lg">
                  Explore Products
                  <ArrowRight />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-white hover:text-black hover:border-white hover:scale-103 duration-300"
                >
                  Get started
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
