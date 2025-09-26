import RootLayout from "@/components/layout/RootLayout";
import ContactInfo from "@/components/sections/ContactInfo";
import PageHeader from "@/components/ui/PageHeader";
import { NextPage } from "next";

const Contact: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="Get In Touch"
        subTitle="Ready to Boost Your Machinery’s Performance? We provide high-quality lubricants and solutions to keep your equipment running smoothly and efficiently."
      />
      <ContactInfo />
    </RootLayout>
  );
};

export default Contact;
