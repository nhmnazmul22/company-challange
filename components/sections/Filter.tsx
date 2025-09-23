"use client";
import React from "react";
import { Filter } from "lucide-react";
import { Button } from "../ui/shadcnui/button";
import { cn } from "@/lib/utils";

type Props = {
  data: Array<any>;
  value: string;
  setValue: (value: string) => void;
};

const ServiceFilter = ({ data, value, setValue }: Props) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex gap-2 justify-center items-center max-lg:flex-wrap">
        <Button
          variant="outline"
          className={cn(
            "text-black hover:text-white duration-300",
            value === "all" ? "bg-accent text-white" : ""
          )}
          onClick={() => setValue("all")}
        >
          <Filter />
          All
        </Button>
        {data.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            onClick={() => setValue(category.label.toLowerCase())}
            className={cn(
              "text-black hover:text-white duration-300",
              value === category.label.toLowerCase()
                ? "bg-accent text-white"
                : ""
            )}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ServiceFilter;
