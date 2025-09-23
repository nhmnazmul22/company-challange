import React from "react";
import { Badge } from "./shadcnui/badge";
import Image from "next/image";
import { ServicesType } from "@/types";
import { cn, firstLatterUpper, formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./shadcnui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcnui/card";

type Props = {
  serviceInfo: ServicesType;
};

const ServiceCard = ({ serviceInfo }: Props) => {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-4 p-5 gap-0 min-h-[570px] xl:min-h-[640px] h-fit group hover:shadow-glow duration-300">
      <CardHeader className="p-0 relative">
        <span className="flex justify-between w-full absolute left-0 top-2.5 px-3 z-50">
          <Badge
            variant="secondary"
            className={cn(
              serviceInfo.isFeatured ? "opacity-100" : "opacity-0",
              "bg-accent text-gray-100"
            )}
          >
            Featured
          </Badge>
          <Badge variant="secondary">
            {firstLatterUpper(serviceInfo.category)}
          </Badge>
        </span>
        <figure className="w-[full] h-[300px]">
          <Image
            src={serviceInfo.imgLink || "https://placehold.co/600x400/png"}
            width={1480}
            height={1480}
            alt={serviceInfo.title}
            className="rounded-xl invert-15 w-full h-full object-cover"
          />
        </figure>
      </CardHeader>
      <CardContent className="p-0 xl:px-2 flex-1 mt-4">
        <div className="">
          <div className="flex justify-between items-start gap-5 mb-2">
            <CardTitle className="text-lg xl:text-xl group-hover:text-accent duration-200">
              {serviceInfo.title}
            </CardTitle>
            <p className="text-accent font-semibold text-xl">
              {formatPrice(serviceInfo.price)}
            </p>
          </div>
          <CardDescription className="xl:text-base">
            {serviceInfo.des}
          </CardDescription>
        </div>
        <div className="mt-5">
          <p className="font-medium mb-1">Key Features:</p>
          <div className="space-x-2 space-y-1">
            {serviceInfo.keyFeatures.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline">
                {feature}
              </Badge>
            ))}
            <Badge variant="outline">
              {serviceInfo.keyFeatures.length - 3} More +
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0 mt-4">
        <Link href={`/services/${serviceInfo.slug}`} className="w-full">
          <Button variant="glowEffect" className="w-full py-5">
            View Details <ArrowRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
