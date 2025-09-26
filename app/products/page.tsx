import { NextPage } from "next";
import RootLayout from "@/components/layout/RootLayout";
import PageHeader from "@/components/ui/PageHeader";
import Products from "@/components/sections/Products";
import ProductCTA from "@/components/sections/ProductCTA";

const ProductsPage: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="Our Products & Services"
        subTitle="Explore our wide range of high-quality lubricants, greases, and specialty oils designed to keep your machines running smoothly and efficiently."
      />
      <Products />
      <ProductCTA />
    </RootLayout>
  );
};

export default ProductsPage;
