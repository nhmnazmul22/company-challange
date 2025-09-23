import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return formatter.format(price);
};

export const firstLatterUpper = (text: string) => {
  return `${text[0].toUpperCase()}${text.slice(1)}`;
};

export const showShortText = (text: string, length: number) => {
  return `${text.slice(0, length)}...`;
};

export const lowerCaseText = (text: string) => {
  return text.toLowerCase();
};

export const formatISODate = (ISOdate: string) => {
  return ISOdate.split("T")[0];
};
