import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/shadcnui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  subTitle: string;
};

const CTA = ({ title, subTitle }: Props) => {
  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-indigo-600
"
    >
      <Container>
        <SectionHeading
          title={title}
          subTitle={subTitle}
          titleClasses="text-white"
          subTitleClasses="text-gray-100"
        />
        <div className="flex justify-center items-center gap-5 mt-10">
          <Link href="/contact">
            <Button
              variant="outline"
              className="sm:text-base sm:!p-6 hover:bg-white hover:text-black hover:border-white hover:scale-103"
            >
              Get Started <ArrowRight />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="default" className="sm:text-base sm:!p-6">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
