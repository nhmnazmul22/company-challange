import { ProductsType } from "@/types";
import React from "react";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { cn, firstLatterUpper, formatPrice } from "@/lib/utils";
import { CircleCheckBig, Star } from "lucide-react";
import { Button } from "@/components/ui/shadcnui/button";
import companyInfo from "@/data/company";
import InfoCard from "@/components/ui/InfoCard";
import { Badge } from "@/components/ui/shadcnui/badge";
import Link from "next/link";
import ProductOtherInfo from "@/components/ui/ProductOtherInfo";

type Props = {
  data: ProductsType;
};

const ProductDetails = ({ data }: Props) => {
  return (
    <Container>
      {/* Top Section */}
      <div className="grid grid-cols-12 sm:gap-10 lg:gap-16">
        {/* Image */}
        <div className="col-span-12 lg:col-span-6 relative">
          <span className="flex justify-between w-full absolute left-0 top-4 px-3 z-50">
            <Badge
              variant="secondary"
              className={cn(
                data.isFeatured ? "opacity-100" : "opacity-0",
                "bg-accent text-gray-100 font-medium shadow-md"
              )}
            >
              Featured
            </Badge>
            <Badge variant="secondary" className="font-medium shadow-md">
              {firstLatterUpper(data.category)}
            </Badge>
          </span>
          <figure className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={data.imgLink || "/images/consulting-img-01.jpg"}
              width={1024}
              height={1024}
              alt={data.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>
        </div>

        {/* Info */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-between max-sm:mt-10">
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {data.title}
            </h2>
            <p className="text-xl sm:text-3xl text-accent font-semibold">
              {formatPrice(data.price)}
            </p>

            {data.rating && (
              <div className="flex items-center gap-2">
                <Star fill="currentColor" className="text-amber-400" />
                <span className="text-gray-700 font-medium">
                  {data.rating} / 5
                </span>
              </div>
            )}

            <p className="text-gray-600 text-base leading-relaxed">
              {data.shortDes || data.des}
            </p>
            <p
              className={cn(
                "font-medium",
                data.inStock ? "text-green-600" : "text-red-600"
              )}
            >
              {data.inStock ? "In Stock" : "Out of Stock"}
            </p>

            {/* Key Features */}
            <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-xl font-semibold mb-3">Key Features</p>
              <div className="grid grid-cols-12 gap-3">
                {data.keyFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="col-span-12 sm:col-span-6 flex items-center gap-2 text-gray-700"
                  >
                    <CircleCheckBig className="text-accent" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Link href="/contact">
              <Button
                variant="primary"
                className="w-full py-5 mt-6 text-lg font-semibold"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.applications && (
          <ProductOtherInfo title="Applications" items={data.applications} />
        )}
        {data.specifications && (
          <ProductOtherInfo
            title="Specifications"
            items={Object.entries(data.specifications).map(
              ([key, value]) => `${firstLatterUpper(key)}: ${value}`
            )}
          />
        )}
        {data.usage && <ProductOtherInfo title="Usage" items={data.usage} />}
        {data.benefits && (
          <ProductOtherInfo title="Benefits" items={data.benefits} />
        )}
        {data.howToUse && (
          <ProductOtherInfo title="How to Use" items={data.howToUse} />
        )}
        {data.safetyInformation && (
          <ProductOtherInfo
            title="Safety Information"
            items={data.safetyInformation}
          />
        )}
      </div>

      {/* Why Choose */}
      <div className="grid grid-cols-12 max-sm:space-y-4 sm:gap-10 mt-28 mb-20">
        {companyInfo.whyChoose.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </Container>
  );
};

export default ProductDetails;
