import React from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import blogs from "@/data/blogs";
import BlogCard from "@/components/ui/BlogCard";
import Link from "next/link";
import { Button } from "@/components/ui/shadcnui/button";
import { ArrowRight } from "lucide-react";

const LatestBlogs = () => {
  return (
    <Container>
      <SectionHeading
        title="Latest Insights"
        subTitle="Stay updated with expert knowledge, lubricant tips, and the latest industry trends that keep your engines and machines running at their best."
      />
      <div className="grid grid-cols-12 gap-5 md:gap-10 mt-14">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link href="/blogs">
          <Button variant="primary" size="lg">
            View All Blogs <ArrowRight />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default LatestBlogs;
