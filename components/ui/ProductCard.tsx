import React from "react";
import { Badge } from "./shadcnui/badge";
import Image from "next/image";
import { ProductsType } from "@/types";
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
  productInfo: ProductsType;
};

const ProductCard = ({ productInfo }: Props) => {
  return (
    <Card className="p-4 gap-0 hover:shadow-xl duration-300">
      <CardHeader className="p-0 relative">
        <span className="flex justify-between w-full absolute left-0 top-2.5 px-3 z-50">
          <Badge variant="secondary">
            {firstLatterUpper(productInfo.category)}
          </Badge>
        </span>
        <figure className="w-[full] h-[250px]">
          <Image
            src={productInfo.imgLink || "https://placehold.co/600x400/png"}
            width={1480}
            height={1480}
            alt={productInfo.title}
            className="rounded-xl invert-15 w-full h-full object-cover"
          />
        </figure>
      </CardHeader>
      <CardContent className="p-0 xl:px-2 flex-1 mt-4">
        <div className="">
          <div className="flex justify-between items-start gap-5 mb-2">
            <CardTitle className="text-lg xl:text-xl">
              {productInfo.title}
            </CardTitle>
          </div>
          <CardDescription className="xl:text-base">
            {productInfo.des}
          </CardDescription>
        </div>
        {/* <div className="mt-5">
          <p className="font-medium mb-1">Key Features:</p>
          <div className="space-x-2 space-y-1">
            {productInfo.keyFeatures.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline">
                {feature}
              </Badge>
            ))}
            <Badge variant="outline">
              {productInfo.keyFeatures.length - 3} More +
            </Badge>
          </div>
        </div> */}
      </CardContent>
      <CardFooter className="p-0 mt-4">
        <Link href={`/products/${productInfo.slug}`} className="w-full">
          <Button variant="primary" className=" py-5">
            View Details <ArrowRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
