import RootLayout from "@/components/layout/RootLayout";
import CTA from "@/components/sections/CTA";
import OurImpact from "@/components/sections/OurImpact";
import OurWork from "@/components/sections/OurWork";
import PageHeader from "@/components/ui/PageHeader";
import { NextPage } from "next";

const Gallery: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="Our Portfolio"
        subTitle="Explore our collection of successful projects and creative solutions that have transformed businesses across various industries."
      />
      <OurImpact />
      <OurWork />
      <CTA
        title="Ready to Create Something Amazing?"
        subTitle="Let's discuss your project and see how we can bring your vision to life with our expertise and creativity."
      />
    </RootLayout>
  );
};

export default Gallery;
