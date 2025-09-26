"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcnui/carousel";
import { Card } from "@/components/ui/shadcnui/card";
import { productsCategories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

const VirtualSlider = () => {
  return (
    <Carousel
      className="w-full lg:max-w-lg"
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent>
        {productsCategories.map((category, index) => {
          if (category.label !== "All") {
            return (
              <CarouselItem key={index} className="sm:basis-1/2">
                <Link href="/products">
                  <Card className="p-0 h-[400px]">
                    <figure className="w-full h-full rounded-2xl overflow-hidden relative group">
                      <Image
                        src={category.imgLink || "/images/automotive.png"}
                        width={1024}
                        height={1024}
                        alt={category.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                      <div className="absolute bg-black/40 w-full h-full top-0 left-0 flex flex-col justify-center items-center text-center p-4">
                        <p className="text-3xl text-white font-semibold">
                          {category.label}
                        </p>
                      </div>
                    </figure>
                  </Card>
                </Link>
              </CarouselItem>
            );
          }
        })}
      </CarouselContent>
      <CarouselPrevious className="max-sm:hidden" />
      <CarouselNext className="max-sm:hidden" />
    </Carousel>
  );
};

export default VirtualSlider;
