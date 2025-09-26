"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcnui/breadcrumb";
import { firstLatterUpper } from "@/lib/utils";
import { Button } from "@/components/ui/shadcnui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  parentLink: string;
  dynamicLink: string;
};

const DynamicPageHeader = ({ parentLink, dynamicLink }: Props) => {
  return (
    <div className="bg-gray-50 pt-24 pb-14">
      <div className="container mx-auto max-sm:px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${parentLink}`}>
                {firstLatterUpper(parentLink)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{dynamicLink}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Link href={`/${parentLink}`}>
          <Button
            variant="outline"
            className="mt-5 py-5 !px-6 text-black hover:text-white"
          >
            <ArrowLeft /> Back to {firstLatterUpper(parentLink)}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DynamicPageHeader;
