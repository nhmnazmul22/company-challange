import { GalleryType } from "@/types";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcnui/card";
import Image from "next/image";
import { Calendar, Tags } from "lucide-react";
import { Button } from "./shadcnui/button";
import { Badge } from "./shadcnui/badge";
import { firstLatterUpper, formatISODate } from "@/lib/utils";
import GalleryDetailsDialog from "./GalleryDetailsDialog";

type Props = {
  data: GalleryType;
};
const GalleryCard = ({ data }: Props) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Card
        onClick={() => setOpenDialog(!openDialog)}
        className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl gap-0 !py-0 !pb-5 group shadow hover:shadow-2xl duration-200 cursor-pointer"
      >
        <CardHeader className="p-0 relative">
          <span className="absolute left-0 top-2.5 px-3 z-50">
            <Badge
              variant="secondary"
              className={
                "bg-linear-to-bl from-violet-500 to-fuchsia-500 text-primary-foreground"
              }
            >
              {firstLatterUpper(data.category)}
            </Badge>
          </span>
          <figure className="max-h-[300px] rounded-t-2xl overflow-hidden relative">
            <Image
              src={data.imgLink || "https://placehold.co/600x400/png"}
              width={1024}
              height={1024}
              alt={data.title}
              className="w-full h-full object-cover invert-15"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-[#20202085] rounded-t-2xl flex justify-center items-center z-5 opacity-0 group-hover:opacity-100 duration-300">
              <Button
                variant="link"
                className="text-white text-base hover:text-white"
              >
                View Details
              </Button>
            </div>
          </figure>
        </CardHeader>
        <CardContent className="mt-5">
          <CardTitle className="text-xl group-hover:text-accent duration-300">
            {data.title}
          </CardTitle>
          <CardDescription className="text-gray-600 mt-1">
            {data.des}
          </CardDescription>
          <div className="flex justify-between items-center mt-5">
            {data.createdAt && (
              <p className="text-sm text-gray-500 flex gap-2 items-center">
                <Calendar size={14} />
                <span>{formatISODate(data.createdAt)}</span>
              </p>
            )}
            <p className="text-sm text-gray-500 flex gap-1 items-center">
              <Tags size={16} /> <span>{data.tags.length} tags</span>
            </p>
          </div>
        </CardContent>
      </Card>
      <GalleryDetailsDialog
        dialogOpen={openDialog}
        toggleDialog={setOpenDialog}
        data={data}
      />
    </>
  );
};

export default GalleryCard;
