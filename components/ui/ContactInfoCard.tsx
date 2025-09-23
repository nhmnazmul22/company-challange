import { ContactInfo } from "@/types";
import Link from "next/link";
import React from "react";

type Props = {
  data: ContactInfo;
};

const ContactInfoCard = ({ data }: Props) => {
  const renderInfo = (info: string) => {
    if (info.includes("@")) {
      return (
        <Link href={`mailto:${info}`} className="text-accent font-semibold">
          {info}
        </Link>
      );
    } else if (/^\+?\d+$/.test(info.replace(/[\s-()]/g, ""))) {
      return (
        <Link href={`tel:${info}`} className="text-accent font-semibold">
          {info}
        </Link>
      );
    }

    return <span className="text-accent font-semibold">{info}</span>;
  };

  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-linear-to-b from-white to-gray-100 shadow hover:shadow-lg duration-300 px-5 py-8 rounded-xl border border-gray-100 text-center space-y-3">
      <div className="w-[60px] h-[60px] bg-accent rounded-full flex justify-center items-center mx-auto text-white ">
        {<data.icon size={32} />}
      </div>
      <h4 className="text-xl font-semibold">{data.title}</h4>
      <div className="mt-5 space-y-1">
        <p className="text-sm xl:text-base text-gray-600">{data.shortDes}</p>
        <p className="text-sm xl:text-base text-accent font-semibold">
          {renderInfo(data.info)}
        </p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
