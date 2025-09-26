import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const fontPoppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro Lubricant",
  description: "A company portfolio web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPoppins.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
