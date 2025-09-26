import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// Menu Items Type
export interface MenuItem {
  label: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
}

// Service Drop Down Menus Items
export interface ServiceDropDownItems {
  lubricants: Array<{ id: string | number; label: string }>;
  carParts: Array<{ id: string | number; label: string }>;
  oils: Array<{ id: string | number; label: string }>;
}

// Slider Data
export interface SliderData {
  id: string | number;
  title: string;
  subTitle: string;
  shortDes: string;
  imgLink?: string;
}

export type OtherInfo = {
  id: string | number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title?: string;
  label?: string;
  des: string;
};

export interface CompanyInfo {
  ourStory: {
    title: string;
    des: string;
    otherInfo: Array<OtherInfo>;
  };
  ourImpact: Array<{
    id: number;
    impactNum: string;
    title: string;
    des: string;
  }>;
  whyChoose: Array<OtherInfo>;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductsType {
  id: string | number;
  imgLink: string;
  title: string;
  slug: string;
  des: string;
  price: number;
  category: string;
  isFeatured: boolean;
  rating: number;
  inStock: boolean;
  shortDes: string;
  keyFeatures: Array<string>;
  specifications: { [key: string]: string };
  usage: Array<string>;
  applications: Array<string>;
  benefits: Array<string>;
  howToUse: Array<string>;
  safetyInformation: Array<string>;
  createdAt?: string;
  updatedAt?: string;
}

// blog Type
export interface Blog {
  id: string | number;
  thumbnail: string;
  title: string;
  slug: string;
  shortDes: string;
  des: string;
  category: string;
  tags: Array<string>;
  authorInfo: {
    profilePicture: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

// Team type
export interface Team {
  id: string | number;
  profilePic: string;
  name: string;
  position: string;
  bio: string;
  socialMedia: Array<{
    name: string;
    link: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
}

// Testimonial type
export interface TestimonialType {
  id: string | number;
  comment: string;
  authorName: string;
  authorPosition: string;
  authorImg: string;
  createdAt?: string;
  updatedAt?: string;
}

// Impact
export interface Impact {
  impactNum: string;
  impactTitle: string;
  createdAt?: string;
  updatedAt?: string;
}

// Process
export interface Process {
  id: string | number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  des: string;
  createdAt?: string;
  updatedAt?: string;
}

// Filter value type
export interface FilterValue {
  id: string | number;
  label: string;
  imgLink?: string;
}

// Gallery type
export interface GalleryType {
  id: string | number;
  imgLink: string;
  title: string;
  des: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

// Contact Info type
export interface ContactInfo {
  id: string | number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  shortDes: string;
  info: string;
}

// Form data type
export interface FormDataType {
  id?: string;
  fullName: string;
  email: string;
  cName: string;
  service?: string;
  message?: string;
}
