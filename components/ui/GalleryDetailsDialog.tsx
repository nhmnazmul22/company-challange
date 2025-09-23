import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/shadcnui/dialog";
import { GalleryType } from "@/types";
import Image from "next/image";
import { firstLatterUpper, formatISODate } from "@/lib/utils";
import { Badge } from "./shadcnui/badge";

type Props = {
  dialogOpen: boolean;
  toggleDialog: Dispatch<SetStateAction<boolean>>;
  data: GalleryType;
};

const GalleryDetailsDialog = ({ dialogOpen, toggleDialog, data }: Props) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={() => toggleDialog(!dialogOpen)}>
      <DialogContent className="!p-0">
        <DialogHeader className="px-2 pt-2">
          <figure className="rounded-lg overflow-hidden w-full max-h-[400px]">
            <Image
              src={data.imgLink || "https://placehold.co/600x400/png"}
              width={1024}
              height={1024}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </figure>
        </DialogHeader>
        <div className="px-3 pb-5">
          <div className="flex justify-start gap-2 items-center mb-5">
            <span>
              <Badge
                variant="secondary"
                className={
                  "bg-linear-to-bl from-violet-500 to-fuchsia-500 text-primary-foreground"
                }
              >
                {firstLatterUpper(data.category)}
              </Badge>
            </span>
            {data.createdAt && (
              <p className="text-sm text-gray-500 flex gap-2 items-center">
                <span>{formatISODate(data.createdAt)}</span>
              </p>
            )}
          </div>
          <DialogTitle>{data.title}</DialogTitle>
          <DialogDescription className="mt-2">{data.des}</DialogDescription>
          <div className="flex gap-2 mt-4">
            {data.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryDetailsDialog;
