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
    <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500">
      <Container>
        <SectionHeading
          title={title}
          subTitle={subTitle}
          titleClasses="text-white"
          subTitleClasses="text-gray-200"
        />
        <div className="flex justify-center items-center gap-5 mt-10">
          <Link href="/contact">
            <Button variant="secondary" className="sm:text-base sm:!p-6">
              Get Started <ArrowRight />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" className="sm:text-base sm:!p-6">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
