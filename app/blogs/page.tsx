import RootLayout from "@/components/layout/RootLayout";
import BlogList from "@/components/sections/BlogList";
import PageHeader from "@/components/ui/PageHeader";
import { NextPage } from "next";

const Blogs: NextPage = ({}) => {
  return (
    <RootLayout>
      <PageHeader
        title="Our Latest Blogs"
        subTitle="Insights, trends, and expertise from our team to help you stay ahead in the digital landscape."
      />
      <BlogList />
    </RootLayout>
  );
};

export default Blogs;
