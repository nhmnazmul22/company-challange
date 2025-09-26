import { NextPage } from "next";
import RootLayout from "@/components/layout/RootLayout";
import PageHeader from "@/components/ui/PageHeader";
import OurImpact from "@/components/sections/OurImpact";
import Teams from "@/components/sections/Teams";
import AboutUs from "@/components/sections/AboutUs";
import BestCategories from "@/components/sections/BestCategories";

const AboutPage: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="About Pro Lubricant"
        subTitle="Delivering high-performance lubricants that protect engines, enhance efficiency, and drive industries forward with innovation and reliability."
      />
      <AboutUs />
      <BestCategories />
      <OurImpact />
      <Teams />
    </RootLayout>
  );
};

export default AboutPage;
