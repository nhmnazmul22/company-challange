import React from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/shadcnui/alert";

type Props = {
  title: string;
  des: string;
};

const NotFound = ({ title, des }: Props) => {
  return (
    <Alert
      variant="default"
      className="col-span-12 py-10 max-w-[500px] mx-auto"
    >
      <AlertTitle className="text-center text-2xl font-semibold">{title}</AlertTitle>
      <AlertDescription className="text-center text-base">{des}</AlertDescription>
    </Alert>
  );
};

export default NotFound;
