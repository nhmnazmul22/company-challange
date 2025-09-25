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
        subTitle="Comprehensive solutions designed to drive your business forward with innovation and excellence."
      />
      <Products />
      <ProductCTA />
    </RootLayout>
  );
};

export default ProductsPage;
