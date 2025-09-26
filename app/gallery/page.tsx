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
        title="Our Gallery"
        subTitle="Explore our range of products, company events, and certifications to see our commitment to quality and innovation in the lubricant industry."
      />
      <OurWork />
      <OurImpact />
      <CTA
        title="Ready to Optimize Your Machinery?"
        subTitle="Let’s discuss your lubrication needs and explore how our high-quality products can enhance performance and protect your equipment."
      />
    </RootLayout>
  );
};

export default Gallery;
