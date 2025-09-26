"use client";
import React, { useState } from "react";
import Container from "@/components/layout/Container";
import Filter from "@/components/ui/Filter";
import SectionHeading from "@/components/ui/SectionHeading";
import products, { productsCategories } from "@/data/products";
import ServiceCard from "@/components/ui/ProductCard";
import useFilter from "@/store/useFilter";
import { Button } from "@/components/ui/shadcnui/button";
import NotFound from "@/components/skeleton/NotFound";
import { firstLatterUpper, lowerCaseText } from "@/lib/utils";

const Products = () => {
  const [showNum, setShowNum] = useState<number>(8);
  const { setProductFilterValue, productFilterValue } = useFilter();

  const filteredProducts = products.filter((product) => {
    if (productFilterValue === "all") {
      return product;
    }
    const categoryMatch =
      lowerCaseText(product.category) === lowerCaseText(productFilterValue);

    return categoryMatch;
  });

  const visibleProducts = filteredProducts.slice(0, showNum);

  const loadMoreItems = () => {
    setShowNum((prev) => prev + 8);
  };

  return (
    <Container>
      <div className="mt-20">
        <div className="flex max-sm:flex-col justify-between items-center gap-5">
          <SectionHeading
            title="All Products"
            subTitle={`Showing ${visibleProducts.length} of ${products.length} products`}
            titleClasses="!text-3xl !mb-0 sm:text-left"
            subTitleClasses="!text-base sm:text-left"
          />
          <Filter
            data={productsCategories}
            value={productFilterValue}
            setValue={setProductFilterValue}
          />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <ServiceCard key={product.id} productInfo={product} />
            ))
          ) : (
            <NotFound
              title="Products not found"
              des={`${firstLatterUpper(
                productFilterValue
              )} products not added now, we will added as soon as possible`}
            />
          )}
        </div>
        {visibleProducts.length > 0 && (
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
  );
};

export default Products;
