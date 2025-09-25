import { NextPage } from "next";
import RootLayout from "@/components/layout/RootLayout";
import PageHeader from "@/components/ui/PageHeader";
import OurStroy from "@/components/sections/OurStroy";
import OurImpact from "@/components/sections/OurImpact";
import Teams from "@/components/sections/Teams";

const AboutPage: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="About Pro Lubricant"
        subTitle="Delivering high-performance lubricants that protect engines, enhance efficiency, and drive industries forward with innovation and reliability."
      />
      <OurStroy />
      <OurImpact />
      <Teams />
    </RootLayout>
  );
};

export default AboutPage;
