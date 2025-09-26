"use client";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import RootLayout from "@/components/layout/RootLayout";
import ProductDetails from "@/components/sections/ProductDetails";
import NotFound from "@/components/skeleton/NotFound";
import DynamicPageHeader from "@/components/ui/DynamicPageHeader";
import products from "@/data/products";

const ProductDetailsPage: NextPage = ({}) => {
  const { slug }: { slug: string } = useParams();
  const product = products.find((product) => product.slug.includes(slug));

  return (
    <RootLayout>
      {product ? (
        <>
          <DynamicPageHeader
            parentLink="products"
            dynamicLink={product.title}
          />
          <ProductDetails data={product} />
        </>
      ) : (
        <NotFound
          title="404"
          des="Product details not found, Please try again."
        />
      )}
    </RootLayout>
  );
};

export default ProductDetailsPage;
