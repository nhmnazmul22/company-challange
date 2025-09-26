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
import BestCategories from "@/components/sections/BestCategories";
import AboutUs from "@/components/sections/AboutUs";

const Home: NextPage = ({}) => {
  return (
    <RootLayout>
      <HeroSection />
      <AboutUs />
      <BestCategories />
      <Featured />
      <WhyChoose />
      <OurSuccess />
      <Process />
      <Testimonial />
      <LatestBlogs />
      <CTA
        title="Ready to Maximize Performance?"
        subTitle="Let’s talk about how our high-quality lubricants can keep your engines, machines, and business running at their best."
      />
    </RootLayout>
  );
};

export default Home;
