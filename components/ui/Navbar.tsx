"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/shadcnui/navigation-menu";
import { navItems } from "@/data/constant";
import { Button } from "./shadcnui/button";
import { Download, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import useMobilMenu from "@/store/useMobileMenu";
import { cn } from "@/lib/utils";
import NavigationContent from "./NavigationContent";

const Navbar = () => {
  const path = usePathname();
  const { isToggled, showMobileMenu } = useMobilMenu();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-background backdrop-blur-md border-b border-border py-3 ">
      <div className="container">
        <div className="flex gap-2 justify-between items-center">
          <Logo />
          <div className="lg:hidden">
            <Button onClick={() => showMobileMenu(isToggled)} className="">
              {isToggled ? <X /> : <Menu />}
            </Button>
          </div>
          <div className="max-lg:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => {
                  if (item.label === "Products") {
                    return (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                        <NavigationContent />
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink
                        asChild
                        className={path === item.link ? "text-accent" : ""}
                      >
                        <Link href={item.link} className="lg:!text-base">
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="max-lg:hidden">
            <Link href="/">
              <Button variant="primary">
                <Download /> Download App
              </Button>
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={cn(isToggled ? "block" : "hidden", "lg:hidden")}>
          <div className="mt-5">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-start">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      asChild
                      className={`${
                        path === item.link ? "text-blue-500" : ""
                      } ps-0`}
                    >
                      <Link href={item.link}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/">
              <Button variant="primary">
                <Download /> Download App
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
