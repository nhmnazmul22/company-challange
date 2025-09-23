import { NextPage } from "next";
import RootLayout from "@/components/layout/RootLayout";
import PageHeader from "@/components/ui/PageHeader";
import Services from "@/components/sections/Services";
import ServiceCTA from "@/components/sections/ServiceCTA";

const ServicesPage: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="Our Products & Services"
        subTitle="Comprehensive solutions designed to drive your business forward with innovation and excellence."
      />
      <Services />
      <ServiceCTA />
    </RootLayout>
  );
};

export default ServicesPage;
