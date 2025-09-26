import { GalleryType } from "@/types";
import React from "react";
import Image from "next/image";

type Props = {
  data: GalleryType;
};

const GalleryCard = ({ data }: Props) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer group">
      {/* Image */}
      <Image
        src={data.imgLink || "/images/automotive.png"}
        alt={data.title}
        width={1024}
        height={1024}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center px-2">
        <h3 className="text-white text-lg font-semibold text-center px-3">
          {data.title}
        </h3>
        <p className="text-gray-100 text-sm text-center">{data.des}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
