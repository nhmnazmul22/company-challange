import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ textClass }: { textClass?: string }) => {
  return (
    <Link
      href="/"
      className="flex gap-2 justify-start items-center min-w-[180px]"
    >
      <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 p-2 rounded-lg">
        <Image src="/logo-white.svg" width={24} height={24} alt="Logo" />
      </div>
      <span className={cn("text-xl font-semibold", textClass)}>InnovateX</span>
    </Link>
  );
};

export default Logo;
