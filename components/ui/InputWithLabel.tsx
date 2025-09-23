import { Input } from "@/components/ui/shadcnui/input";
import { Label } from "@/components/ui/shadcnui/label";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type Props = {
  id: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  inputType?: string;
  placeholderText: string;
  errorMessage?: string;
  labelClasses?: string;
  inputClasses?: string;
};

export function InputWithLabel({
  id,
  label,
  value,
  setValue,
  inputType = "text",
  placeholderText,
  errorMessage = "",
  labelClasses,
  inputClasses,
}: Props) {
  return (
    <div className="grid max-w-md w-full items-center gap-3">
      <div className="flex gap-2">
        <Label
          htmlFor={id}
          className={cn(labelClasses, errorMessage && "text-red-600")}
        >
          {label}
        </Label>
        <span className="text-sm text-red-500">*</span>
      </div>
      <Input
        type={inputType}
        id={id}
        placeholder={placeholderText}
        className={cn(inputClasses, errorMessage && "border border-red-600")}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-red-600 text-sm ">{errorMessage}</p>
    </div>
  );
}
