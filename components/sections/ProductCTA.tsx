import React from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/shadcnui/button";
import Link from "next/link";

const ProductsCTA = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <SectionHeading
          title="Need a Custom Lubricant Solution?"
          subTitle="Can’t find the exact lubricant, grease, or oil you need? Let’s work together to create a tailored solution for your machinery and equipment requirements."
        />
        <div className="flex justify-center items-center mt-10">
          <Link href="/contact">
            <Button variant="primary" className="sm:text-base sm:!p-6">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProductsCTA;
