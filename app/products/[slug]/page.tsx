"use client";
import RootLayout from "@/components/layout/RootLayout";
import ServiceDetails from "@/components/sections/ProductDetails";
import NotFound from "@/components/skeleton/NotFound";
import DynamicPageHeader from "@/components/ui/DynamicPageHeader";
import services from "@/data/products";
import { NextPage } from "next";
import { useParams } from "next/navigation";

const ServiceDetailsPage: NextPage = ({}) => {
  const { slug }: { slug: string } = useParams();
  const service = services.find((service) => service.slug.includes(slug));

  return (
    <RootLayout>
      {service ? (
        <>
          <DynamicPageHeader
            parentLink="services"
            dynamicLink={service.title}
          />
          <ServiceDetails data={service} />
        </>
      ) : (
        <NotFound
          title="404"
          des="Service details not found, Please try again."
        />
      )}
    </RootLayout>
  );
};

export default ServiceDetailsPage;
