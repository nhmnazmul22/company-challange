"use client";
import React, { useState } from "react";
import Container from "@/components/layout/Container";
import blogs from "@/data/blogs";
import NotFound from "@/components/skeleton/NotFound";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/shadcnui/button";

const BlogList = () => {
  const [showNum, setShowNum] = useState<number>(6);

  const visibleServices = blogs.slice(0, showNum);

  const loadMoreItems = () => {
    setShowNum((prev) => prev + 6);
  };

  return (
    <Container>
      <div className="mt-10 grid grid-cols-12 gap-5 md:gap-10">
        {visibleServices.length > 0 ? (
          visibleServices.map((blog) => <BlogCard key={blog.id} data={blog} />)
        ) : (
          <NotFound
            title="Blogs not found"
            des="Sorry, we couldn't find any blogs."
          />
        )}
      </div>
      {visibleServices.length > 0 && (
        <div className="mt-14 text-center">
          <Button
            onClick={loadMoreItems}
            variant="primary"
            className="py-5 !px-8"
          >
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default BlogList;
