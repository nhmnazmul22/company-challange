import React from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import services from "@/data/products";
import { Button } from "@/components/ui/shadcnui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

const Featured = () => {
  const featuredProducts = services.filter((service) => service.isFeatured);

  return (
    <Container>
      <SectionHeading
        title="Top Selling"
        spanText="Product"
        subTitle="Discover our most popular lubricants and oils trusted by vehicles and industries worldwide"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {featuredProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link href="/products">
          <Button variant="primary" size="lg">
            View All Products <ArrowRight />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Featured;
