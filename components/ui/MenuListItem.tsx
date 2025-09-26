import React from "react";
import { NavigationMenuLink } from "@/components/ui/shadcnui/navigation-menu";
import Link from "next/link";

const MenuListItem = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"li">) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href="/products">
          <p className="text-black text-sm lg:text-base hover:text-accent duration-200 cursor-pointer">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default MenuListItem;
