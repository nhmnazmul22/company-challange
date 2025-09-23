import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const OpenTime = ({ title, subTitle }: Props) => {
  return (
    <p className="flex justify-between items-center">
      <span className="text-gray-600">{title}</span>
      <span className="font-medium">{subTitle}</span>
    </p>
  );
};

export default OpenTime;
