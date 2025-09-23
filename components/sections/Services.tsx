"use client";
import React, { useState } from "react";
import Container from "../layout/Container";
import Filter from "./Filter";
import SectionHeading from "../ui/SectionHeading";
import services, { servicesCategories } from "@/data/services";
import ServiceCard from "../ui/ServiceCard";
import useFilter from "@/store/useFilter";
import { firstLatterUpper, lowerCaseText } from "@/lib/utils";
import { Button } from "../ui/shadcnui/button";
import NotFound from "../skeleton/NotFound";

const Services = () => {
  const [showNum, setShowNum] = useState<number>(6);
  const { setServiceFilterValue, serviceFilterValue } = useFilter();

  const filteredServices = services.filter((service) => {
    if (serviceFilterValue === "all") {
      return service;
    }
    const categoryMatch =
      lowerCaseText(service.category) === lowerCaseText(serviceFilterValue);

    return categoryMatch;
  });

  const visibleServices = filteredServices.slice(0, showNum);

  const loadMoreItems = () => {
    setShowNum((prev) => prev + 6);
  };

  return (
    <Container>
      <Filter
        data={servicesCategories}
        value={serviceFilterValue}
        setValue={setServiceFilterValue}
      />
      <div className="mt-20">
        <SectionHeading
          title="All Services"
          subTitle={`Showing ${visibleServices.length} of ${services.length} services`}
          titleClasses="!text-3xl !mb-0"
          subTitleClasses="!text-base"
        />
        <div className="mt-10 grid grid-cols-12 gap-5 md:gap-10">
          {visibleServices.length > 0 ? (
            visibleServices.map((service) => (
              <ServiceCard key={service.id} serviceInfo={service} />
            ))
          ) : (
            <NotFound
              title="Services not found"
              des={`${firstLatterUpper(
                serviceFilterValue
              )} services not added now, we will added as soon as possible`}
            />
          )}
        </div>
        {visibleServices.length > 0 && (
          <div className="mt-14 text-center">
            <Button
              onClick={loadMoreItems}
              variant="glowEffect"
              className="py-5 !px-8"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Services;
