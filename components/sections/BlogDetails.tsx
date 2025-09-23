import { Blog } from "@/types";
import React from "react";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { formatISODate } from "@/lib/utils";
import { Badge } from "../ui/shadcnui/badge";

type Props = {
  data: Blog;
};

const BlogDetails = ({ data }: Props) => {
  return (
    <div className="bg-gray-50 pb-10 md:pb-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div>
          <figure className="max-h-[500px] h-full overflow-hidden rounded-2xl">
            <Image
              src={data.thumbnail || "/images/consulting.jpg"}
              width={2048}
              height={2048}
              alt={data.title}
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-8">
            {data.title}
          </h1>
          <p className="text-sm text-gray-600 mt-2">{data.shortDes}</p>
        </div>
        <hr className="my-5" />
        <div className="flex gap-4 items-center">
          <figure className="w-[50] h-[50] rounded-full overflow-hidden border border-gray-100">
            <Image
              src={data.authorInfo.profilePicture || "/images/avatar.png"}
              width={100}
              height={100}
              alt={data.authorInfo.name}
              className="w-full h-full object-cover object-top"
            />
          </figure>
          <div className="flex gap-2 text-gray-600">
            <span>
              <User size={20} />
            </span>
            <p className="text-sm">{data.authorInfo.name}</p>
          </div>
          {data.createdAt && (
            <div className="flex gap-2 text-gray-600">
              <span>
                <Calendar size={20} />
              </span>
              <p className="text-sm">{formatISODate(data.createdAt)}</p>
            </div>
          )}
        </div>
        <div
          id="blog-content"
          className="space-y-3 mt-5"
          dangerouslySetInnerHTML={{ __html: data.des }}
        ></div>
        <hr className="my-5" />
        <div className="space-x-2 space-y-2">
          <p className="text-base font-medium mb-3">Tags</p>
          {data?.tags.map((feature, index) => (
            <Badge key={index} variant="outline">
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
