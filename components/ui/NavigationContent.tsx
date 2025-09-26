"use client";
import React from "react";
import { NavigationMenuContent } from "@/components/ui/shadcnui/navigation-menu";
import MenuListItem from "@/components/ui/MenuListItem";
import { serviceDropDownItems } from "@/data/constant";
import useFilter from "@/store/useFilter";

const NavigationContent = () => {
  const { setProductFilterValue } = useFilter();
  return (
    <NavigationMenuContent className="items-center p-5">
      <div className="grid grid-cols-3 gap-5 w-[580px]">
        <ul className="">
          <div>
            <li className="text-xl font-semibold px-2">Lubricants</li>
            <hr className="my-2 border-gray-200" />
          </div>
          {serviceDropDownItems.lubricants.map((item) => (
            <MenuListItem
              key={item.id}
              onClick={() => setProductFilterValue(item.label.toLowerCase())}
            >
              {item.label}
            </MenuListItem>
          ))}
        </ul>
        <ul className="">
          <div>
            <li className="text-xl font-semibold px-2">Car Parts</li>
            <hr className="my-2 border-gray-200" />
          </div>
          {serviceDropDownItems.carParts.map((item) => (
            <MenuListItem
              key={item.id}
              onClick={() => setProductFilterValue(item.label.toLowerCase())}
            >
              {item.label}
            </MenuListItem>
          ))}
        </ul>
        <ul className="">
          <div>
            <li className="text-xl font-semibold px-2">Oils</li>
            <hr className="my-2 border-gray-200" />
          </div>
          {serviceDropDownItems.oils.map((item) => (
            <MenuListItem
              key={item.id}
              onClick={() => setProductFilterValue(item.label.toLowerCase())}
            >
              {item.label}
            </MenuListItem>
          ))}
        </ul>
      </div>
    </NavigationMenuContent>
  );
};

export default NavigationContent;
