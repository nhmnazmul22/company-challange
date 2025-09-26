"use client";

import React from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import testimonials from "@/data/testimonial";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/shadcnui/button";
import Starts from "@/components/ui/Starts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcnui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonial = () => {
  return (
    <Container>
      <SectionHeading
        title="What Our Clients Say"
        subTitle="Don't just take our word for it. Here's what our clients have to say about working with us."
      />
      <div className="flex max-lg:flex-col justify-between lg:items-center gap-10 mt-16">
        <div className="max-w-xs w-full max-lg:mx-auto max-lg:text-center">
          <figure className="">
            <Image
              src="/images/logo.png"
              width={200}
              height={200}
              alt="Pro Lubricant"
              className="max-lg:mx-auto"
            />
          </figure>
          <div className="mt-3 max-lg:flex max-lg:flex-col max-lg:items-center">
            <Starts rating={4} />
            <h4 className="text-lg font-medium mt-2">Pro Lubricant Ltd.</h4>
            <p className="text-gray-600 text-sm mt-1">50+ Reviews</p>
            <Link href="/">
              <Button variant="outline" size="lg" className="mt-3">
                Write Review
              </Button>
            </Link>
          </div>
        </div>
        <Carousel
          className="lg:w-[700px] xl:w-5xl"
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 xl:basis-1/3"
              >
                <TestimonialCard data={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-sm:hidden" />
          <CarouselNext className="max-sm:hidden" />
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonial;
