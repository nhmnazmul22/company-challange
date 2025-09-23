"use client";
import React, { useState } from "react";
import Container from "../layout/Container";
import Filter from "./Filter";
import blogs, { blogsCategory } from "@/data/blogs";
import useFilter from "@/store/useFilter";
import { firstLatterUpper, lowerCaseText } from "@/lib/utils";
import NotFound from "../skeleton/NotFound";
import BlogCard from "../ui/BlogCard";
import { Button } from "../ui/shadcnui/button";

const BlogList = () => {
  const [showNum, setShowNum] = useState<number>(6);
  const { blogFilterValue, setBlogFilterValue } = useFilter();

  const filteredBlogs = blogs.filter((blog) => {
    if (blogFilterValue === "all") {
      return blog;
    }
    const categoryMatch =
      lowerCaseText(blog.category) === lowerCaseText(blogFilterValue);

    return categoryMatch;
  });

  const visibleServices = filteredBlogs.slice(0, showNum);

  const loadMoreItems = () => {
    setShowNum((prev) => prev + 6);
  };

  return (
    <Container>
      <Filter
        data={blogsCategory}
        value={blogFilterValue}
        setValue={setBlogFilterValue}
      />
      <div className="mt-10 grid grid-cols-12 gap-5 md:gap-10">
        {visibleServices.length > 0 ? (
          visibleServices.map((blog) => <BlogCard key={blog.id} data={blog} />)
        ) : (
          <NotFound
            title="Blogs not found"
            des={`${firstLatterUpper(
              blogFilterValue
            )} on this category on blogs found.`}
          />
        )}
      </div>
      {visibleServices.length > 0 && (
        <div className="mt-14 text-center">
          <Button
            onClick={loadMoreItems}
            variant="glowEffect"
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
