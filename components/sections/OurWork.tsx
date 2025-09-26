"use client";

import React, { useState } from "react";
import Filter from "@/components/ui/Filter";
import galleries, { galleryCategory } from "@/data/gallery";
import useFilter from "@/store/useFilter";
import { firstLatterUpper, lowerCaseText } from "@/lib/utils";
import NotFound from "@/components/skeleton/NotFound";
import { Button } from "@/components/ui/shadcnui/button";
import GalleryCard from "@/components/ui/GalleryCard";

const OurWork = () => {
  const [showNum, setShowNum] = useState<number>(18);
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
    <div className="mt-10 container py-10">
      <Filter
        data={galleryCategory}
        value={galleryFilterValue}
        setValue={setGalleryFilterValue}
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
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
  );
};

export default OurWork;
