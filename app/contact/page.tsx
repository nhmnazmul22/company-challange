import RootLayout from "@/components/layout/RootLayout";
import ContactInfo from "@/components/sections/ContactInfo";
import PageHeader from "@/components/ui/PageHeader";
import { NextPage } from "next";



const Contact: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="Get In Touch"
        subTitle="Ready to transform your business? We're here to help you achieve your goals with our innovative solutions."
      />
      <ContactInfo />
    </RootLayout>
  );
};

export default Contact;
