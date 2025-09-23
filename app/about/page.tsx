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
        title="About InnovateX Solutions"
        subTitle="Transforming Ideas into Digital Reality"
      />
      <OurStroy />
      <OurImpact />
      <Teams />
    </RootLayout>
  );
};

export default AboutPage;
