import React from "react";
import { NavigationMenuContent } from "./shadcnui/navigation-menu";
import MenuListItem from "./MenuListItem";
import { serviceDropDownItems } from "@/data/constant";

const NavigationContent = () => {
  return (
    <NavigationMenuContent className="items-center p-5">
      <div className="grid grid-cols-3 gap-5 w-[580px]">
        <ul className="">
          <div>
            <li className="text-xl font-semibold px-2">Lubricants</li>
            <hr className="my-2 border-gray-200" />
          </div>
          {serviceDropDownItems.lubricants.map((item) => (
            <MenuListItem key={item.id}>{item.label}</MenuListItem>
          ))}
        </ul>
        <ul className="">
          <div>
            <li className="text-xl font-semibold px-2">Car Parts</li>
            <hr className="my-2 border-gray-200" />
          </div>
          {serviceDropDownItems.carParts.map((item) => (
            <MenuListItem key={item.id}>{item.label}</MenuListItem>
          ))}
        </ul>
        <ul className="">
          <div>
            <li className="text-xl font-semibold px-2">Oils</li>
            <hr className="my-2 border-gray-200" />
          </div>
          {serviceDropDownItems.oils.map((item) => (
            <MenuListItem key={item.id}>{item.label}</MenuListItem>
          ))}
        </ul>
      </div>
    </NavigationMenuContent>
  );
};

export default NavigationContent;
