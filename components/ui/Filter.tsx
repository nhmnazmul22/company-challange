"use client";
import React from "react";
import { FilterValue } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcnui/select";

type Props = {
  data: Array<FilterValue>;
  value: string;
  setValue: (value: string) => void;
};

const Filter = ({ data, value, setValue }: Props) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex gap-2 justify-center items-center max-lg:flex-wrap">
        <Select value={value} onValueChange={(value) => setValue(value)}>
          <SelectTrigger className="w-xs">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent className="z-[9999]">
            {data.map((item) => (
              <SelectItem key={item.id} value={item.label.toLowerCase()}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
