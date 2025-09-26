import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcnui/card";
import { Blog } from "@/types";
import { firstLatterUpper, showShortText } from "@/lib/utils";
import { Badge } from "@/components/ui/shadcnui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/shadcnui/button";

type Props = {
  data: Blog;
};

const BlogCard = ({ data }: Props) => {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-4 p-0 gap-0 group hover:shadow-xl duration-300">
      <CardHeader className="p-0 relative">
        <span className="flex justify-between w-full absolute left-0 top-2.5 px-3 z-50">
          <Badge variant="secondary">{firstLatterUpper(data?.category)}</Badge>
        </span>
        <figure className="w-[full] h-[280px]">
          <Image
            src={data?.thumbnail || "https://placehold.co/600x400/png"}
            width={1480}
            height={1480}
            alt={data?.title}
            className="rounded-t-xl invert-15 w-full h-full object-cover"
          />
        </figure>
      </CardHeader>
      <CardContent className="p-0 px-5 flex-1 mt-4">
        <CardTitle className="text-lg xl:text-xl group-hover:text-accent duration-200 mb-2">
          <Link href={`/blogs/${data.slug}`}> {data?.title}</Link>
        </CardTitle>
        <CardDescription className="xl:text-base">
          {showShortText(data?.shortDes, 120)}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-0 px-5 my-4 flex flex-col xl:flex-row justify-between items-start xl:items-center">
        <div className="space-x-2 space-y-1">
          {data?.tags.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline">
              {feature}
            </Badge>
          ))}
        </div>
        <Link href={`/blogs/${data.slug}`} className="ms-auto">
          <Button variant="link">
            Read More <ArrowRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
