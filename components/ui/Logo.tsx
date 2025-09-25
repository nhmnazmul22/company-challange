import Image from "next/image";
import Link from "next/link";

const Logo = ({ isDark }: { isDark?: boolean }) => {
  return (
    <Link href="/">
      <figure className="w-[160px]">
        <Image
          src={isDark ? "/images/dark-logo.png" : "/images/logo.png"}
          width={150}
          height={150}
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </figure>
    </Link>
  );
};

export default Logo;
