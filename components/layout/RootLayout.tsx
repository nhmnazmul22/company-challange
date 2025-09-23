import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { Toaster } from "sonner";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </>
  );
};

export default RootLayout;
