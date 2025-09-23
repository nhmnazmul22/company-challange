import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcnui/select";
import { Label } from "./shadcnui/label";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  data: Array<{ label: string }>;
  errorMessage?: string;
  labelClasses?: string;
  selectClasses?: string;
};

const SelectWithLabel = ({
  id,
  label,
  value,
  setValue,
  data,
  errorMessage = "",
  labelClasses,
  selectClasses,
}: Props) => {
  return (
    <div className="grid max-w-md w-full items-center gap-3">
      <Label
        htmlFor={id}
        className={cn(labelClasses, errorMessage && "text-red-600")}
      >
        {label}
      </Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger
          className={cn(
            "w-full",
            selectClasses,
            errorMessage && "border border-red-600"
          )}
        >
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {data.map((value, index) => (
            <SelectItem key={index} value={value.label}>
              {value.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectWithLabel;
