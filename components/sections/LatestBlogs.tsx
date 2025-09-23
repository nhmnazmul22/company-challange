import React from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import blogs from "@/data/blogs";
import BlogCard from "../ui/BlogCard";
import Link from "next/link";
import { Button } from "../ui/shadcnui/button";
import { ArrowRight } from "lucide-react";

const LatestBlogs = () => {
  return (
    <Container>
      <SectionHeading
        title="Latest Insights"
        subTitle="Stay updated with our latest thoughts on technology, innovation, and industry trends."
      />
      <div className="grid grid-cols-12 gap-5 md:gap-10 mt-14">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link href="/blogs">
          <Button variant="glowEffect" className="py-5 !px-8">
            View All Blogs <ArrowRight />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default LatestBlogs;
