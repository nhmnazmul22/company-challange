import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Github, Linkedin, Mail, Map, Phone, Twitter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcnui/navigation-menu";
import { navItems, serviceLinks } from "@/data/constant";
import FTSecTitle from "./FTSecTitle";

const Footer = () => {
  return (
    <footer className="py-10 bg-foreground">
      <div className="container">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-3">
            <div className="w-full space-y-3">
              <Logo isDark={true} />
              <p className="text-gray-300 text-sm max-w-[340px]">
                Transforming ideas into digital reality with innovative
                solutions that drive business growth.
              </p>
              <div className="flex gap-3 justify-start items-center">
                <Link href="/">
                  <span>
                    <Twitter className="text-gray-300 hover:text-accent duration-300 cursor-pointer" />
                  </span>
                </Link>
                <Link href="/">
                  <span>
                    <Linkedin className="text-gray-300 hover:text-accent duration-300 cursor-pointer" />
                  </span>
                </Link>
                <Link href="/">
                  <span>
                    <Github className="text-gray-300 hover:text-accent duration-300 cursor-pointer" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <FTSecTitle title="Quick Links" />
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-start gap-3">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild className="p-0 text-gray-300">
                      <Link href={item.link}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <FTSecTitle title="Services" />
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-start gap-3">
                {serviceLinks.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild className="p-0 text-gray-300">
                      <Link href={item.link}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <FTSecTitle title="Contact Info" />
            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <span>
                  <Mail size={20} className="text-accent" />
                </span>
                <span className="text-gray-300 text-sm">
                  contact@innovatex.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <Phone size={20} className="text-accent" />
                </span>
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <Map size={20} className="text-accent" />
                </span>
                <span className="text-gray-300 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
