import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import services from "@/data/services";
import { Button } from "../ui/shadcnui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Featured = () => {
  const featuredServices = services.filter((service) => service.isFeatured);

  return (
    <Container>
      <SectionHeading
        title="Featured Solution"
        subTitle="Discover our most popular services designed to transform your business."
      />
      <div className="grid grid-cols-12 gap-5 xl:gap-10 mt-10">
        {featuredServices.slice(0, 3).map((service) => (
          <ServiceCard key={service.id} serviceInfo={service} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link href="/services">
          <Button variant="glowEffect" className="py-5 !px-8">
            View All Services <ArrowRight />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Featured;
