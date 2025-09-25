import { NextPage } from "next";
import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import { Button } from "@/components/ui/shadcnui/button";
import Link from "next/link";

const NotFoundPage: NextPage = ({}) => {
  return (
    <RootLayout>
      <div className="min-h-[85vh] max-w-5xl mx-auto pt-28 text-center">
        <figure className="max-w-[300px] w-full mx-auto">
          <Image
            src="/404.svg"
            width={1024}
            height={1024}
            alt="404- not found"
            className="w-full h-full object-cover"
          />
        </figure>
        <h1 className="text-5xl font-semibold mt-5 mb-2">404</h1>
        <p className="text-gary-600">
          Your requested resource not found, try again.
        </p>
        <Link href="/">
          <Button variant="primary" className="mt-3">
            Go back Home
          </Button>
        </Link>
      </div>
    </RootLayout>
  );
};

export default NotFoundPage;
