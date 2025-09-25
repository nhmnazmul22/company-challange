"use client";

import React, { useState } from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Filter from "@/components/sections/Filter";
import galleries, { galleryCategory } from "@/data/gallery";
import useFilter from "@/store/useFilter";
import { firstLatterUpper, lowerCaseText } from "@/lib/utils";
import NotFound from "../skeleton/NotFound";
import { Button } from "../ui/shadcnui/button";
import GalleryCard from "../ui/GalleryCard";

const OurWork = () => {
  const [showNum, setShowNum] = useState<number>(6);
  const { galleryFilterValue, setGalleryFilterValue } = useFilter();

  const filteredGallery = galleries.filter((gallery) => {
    if (galleryFilterValue === "all") {
      return gallery;
    }
    const categoryMatch =
      lowerCaseText(gallery.category) === lowerCaseText(galleryFilterValue);

    return categoryMatch;
  });

  const visibleGallery = filteredGallery.slice(0, showNum);

  const loadMoreItems = () => {
    setShowNum((prev) => prev + 6);
  };

  return (
    <div className="bg-slate-50">
      <Container>
        <SectionHeading
          title="Our Work"
          subTitle="Browse through our portfolio organized by categories to see examples of our expertise in action."
        />
        <div className="mt-10">
          <Filter
            data={galleryCategory}
            value={galleryFilterValue}
            setValue={setGalleryFilterValue}
          />
          <div className="mt-10 grid grid-cols-12 gap-5 md:gap-10">
            {visibleGallery.length > 0 ? (
              visibleGallery.map((gallery) => (
                <GalleryCard key={gallery.id} data={gallery} />
              ))
            ) : (
              <NotFound
                title="Services not found"
                des={`${firstLatterUpper(
                  galleryFilterValue
                )} project gallery not added now, we will added as soon as possible`}
              />
            )}
          </div>
          {visibleGallery.length > 0 && (
            <div className="mt-14 text-center">
              <Button
                onClick={loadMoreItems}
                variant="primary"
                className="py-5 !px-8"
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default OurWork;
