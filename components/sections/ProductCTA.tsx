import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/shadcnui/button";
import Link from "next/link";

const ProductsCTA = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <SectionHeading
          title="Need a Custom Solution?"
          subTitle="Can't find exactly what you're looking for? Let's discuss how we can create a tailored solution for your unique needs."
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
