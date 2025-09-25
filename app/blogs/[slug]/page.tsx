"use client";
import RootLayout from "@/components/layout/RootLayout";
import BlogDetails from "@/components/sections/BlogDetails";
import ServiceCTA from "@/components/sections/ProductCTA";
import DynamicPageHeader from "@/components/ui/DynamicPageHeader";
import blogs from "@/data/blogs";
import { NextPage } from "next";
import { useParams } from "next/navigation";

const BlogDetailsPage: NextPage = ({}) => {
  const { slug }: { slug: string } = useParams();
  const blog = blogs.find((blog) => blog.slug.includes(slug));

  return (
    <RootLayout>
      {blog && (
        <>
          <DynamicPageHeader parentLink="blogs" dynamicLink={blog.title} />
          <BlogDetails data={blog} />
          <ServiceCTA />
        </>
      )}
    </RootLayout>
  );
};

export default BlogDetailsPage;
