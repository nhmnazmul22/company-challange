import { NextPage } from "next";
import RootLayout from "@/components/layout/RootLayout";
import HeroSection from "@/components/sections/Hero";
import WhyChoose from "@/components/sections/WhyChoose";
import Featured from "@/components/sections/Featured";
import OurSuccess from "@/components/sections/OurSuccess";
import Testimonial from "@/components/sections/Testimonial";
import Process from "@/components/sections/Process";
import LatestBlogs from "@/components/sections/LatestBlogs";
import CTA from "@/components/sections/CTA";

const Home: NextPage = ({}) => {
  return (
    <RootLayout>
      <HeroSection />
      <WhyChoose />
      <Featured />
      <OurSuccess />
      <Testimonial />
      <Process />
      <LatestBlogs />
      <CTA
        title="Ready to Transform Your Business?"
        subTitle="Let's discuss how we can help you achieve your goals with our innovative solutions."
      />
    </RootLayout>
  );
};

export default Home;
