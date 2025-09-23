import React from "react";
import Container from "../layout/Container";
import { contactInfo } from "@/data/constant";
import ContactInfoCard from "../ui/ContactInfoCard";
import Card from "../ui/Card";
import OpenTime from "../ui/OpenTime";
import { Clock, Headphones, MessageCircle } from "lucide-react";
import ContactForm from "../ui/ContactForm";

const ContactInfo = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 sm:gap-10 ">
        {contactInfo.map((contact) => (
          <ContactInfoCard key={contact.id} data={contact} />
        ))}
      </div>
      <div className="mt-10 grid gird-cols-1 xl:grid-cols-12 max-sm:gap-y-10 sm:gap-10">
        <ContactForm />
        <div className="col-span-12 xl:col-span-4 max-xl:grid max-xl:grid-cols-1 max-xl:gap-x-5 space-y-10 max-xl:space-y-5 max-xl:order-[-1]">
          <Card data={{ title: "Business Hours", icon: Clock }}>
            <div className="space-y-3 text-start">
              <OpenTime title="Monday - Friday" subTitle="9:00 AM - 6:00 PM" />
              <OpenTime title="Saturday" subTitle="10:00 AM - 4:00 PM" />
              <OpenTime title="Sunday" subTitle="Closed" />
              <div>
                <hr className="my-2" />
                <p className="text-sm">
                  <span className="font-medium">Emergency Support:</span>{" "}
                  Available 24/7 for enterprise clients
                </p>
              </div>
            </div>
          </Card>
          <Card data={{ title: "Other Ways to Reach Us" }}>
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <span className="text-accent">
                  <MessageCircle size={24} />
                </span>
                <div className="">
                  <p className="text-base font-medium">Live Chat</p>
                  <span className="text-sm text-gray-600">
                    Available on our website
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-accent">
                  <Headphones size={24} />
                </span>
                <div className="">
                  <p className="text-base font-medium"> Technical Support</p>
                  <span className="text-sm text-gray-600">
                    support@innovatex.com
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card data={{ title: "Response Times" }}>
            <div className="space-y-3">
              <OpenTime title="Email" subTitle="Within 2 hours" />
              <OpenTime title="Phone" subTitle="Immediate" />
              <OpenTime title="Live Chat" subTitle="Within minutes" />
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
