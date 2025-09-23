import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import testimonials from "@/data/testimonial";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonial = () => {
  return (
    <Container>
      <SectionHeading
        title="What Our Clients Say"
        subTitle="Don't just take our word for it. Here's what our clients have to say about working with us."
      />
      <div className="grid grid-cols-12 gap-5 lg:gap-10 mt-14">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} data={testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default Testimonial;
