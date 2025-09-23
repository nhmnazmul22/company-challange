import { ServicesType } from "@/types";
import React from "react";
import Container from "../layout/Container";
import Image from "next/image";
import { cn, firstLatterUpper, formatPrice } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";
import { Button } from "../ui/shadcnui/button";
import companyInfo from "@/data/company";
import InfoCard from "../ui/InfoCard";
import { Badge } from "../ui/shadcnui/badge";
import Link from "next/link";

type Props = {
  data: ServicesType;
};

const ServiceDetails = ({ data }: Props) => {
  return (
    <Container>
      <div className="grid grid-cols-12 sm:gap-10">
        <div className="col-span-12 lg:col-span-6 relative">
          <span className="flex justify-between w-full absolute left-0 top-4 px-3 z-50">
            <Badge
              variant="secondary"
              className={cn(
                data.isFeatured ? "opacity-100" : "opacity-0",
                "bg-accent text-gray-100"
              )}
            >
              Featured
            </Badge>
            <Badge variant="secondary">{firstLatterUpper(data.category)}</Badge>
          </span>
          <figure className="max-h-[500px] rounded-xl overflow-hidden shadow-2xl ">
            <Image
              src={data.imgLink || "/images/consulting-img-01.jpg"}
              width={1024}
              height={1024}
              alt={data.title}
              className="w-full h-full object-cover invert-15"
            />
          </figure>
        </div>
        <div className="col-span-12 lg:col-span-6 max-sm:mt-10">
          <div className="mb-5">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">{data.title}</h2>
              <p className="text-accent font-semibold text-2xl">
                {formatPrice(data.price)}
              </p>
              <p className="text-gray-600 text-base">{data.des}</p>
            </div>
            <hr className="my-5" />
            <div className="">
              <p className="text-xl font-semibold">Key Features</p>
              <div className="grid grid-cols-12 gap-4 mt-3">
                {data.keyFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="col-span-12 sm:col-span-6 flex gap-2"
                  >
                    <CircleCheckBig className="text-accent" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <hr className="my-5" />
            <Link href="/contact">
              <Button variant="glowEffect" className="w-full py-6 text-base">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10 mt-28 mb-20">
        {companyInfo.whyChoose.map((info) => (
          <InfoCard key={info.id} info={info} classes="!bg-white" />
        ))}
      </div>
    </Container>
  );
};

export default ServiceDetails;
