import RootLayout from "@/components/layout/RootLayout";
import BlogList from "@/components/sections/BlogList";
import PageHeader from "@/components/ui/PageHeader";
import { NextPage } from "next";

const Blogs: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="Our Latest Blogs"
        subTitle="Stay updated with expert knowledge, lubricant tips, and the latest industry trends that keep your engines and machines running at their best."
      />
      <BlogList />
    </RootLayout>
  );
};

export default Blogs;
