import {
  ContactInfo,
  MenuItem,
  Process,
  ServiceDropDownItems,
  SliderData,
} from "@/types";
import {
  Award,
  ChartLine,
  Mail,
  Map,
  Phone,
  UsersRound,
  Zap,
} from "lucide-react";

export const navItems: Array<MenuItem> = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Gallery",
    link: "/gallery",
  },
  {
    label: "Blogs",
    link: "/blogs",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const serviceDropDownItems: ServiceDropDownItems = {
  lubricants: [
    {
      id: "1",
      label: "Automotive",
    },
    {
      id: "2",
      label: "Commercial",
    },
    {
      id: "3",
      label: "Motorcycle",
    },
    {
      id: "4",
      label: "Industrial",
    },
    {
      id: "5",
      label: "Marine",
    },
    {
      id: "6",
      label: "Transmission Fluids",
    },
    {
      id: "7",
      label: "Brake Fluids",
    },
    {
      id: "8",
      label: "Coolants",
    },
    {
      id: "9",
      label: "Gear Oils",
    },
  ],
  carParts: [
    {
      id: "1",
      label: "Lithium Greases",
    },
    {
      id: "2",
      label: "Calcium Greases",
    },
    {
      id: "3",
      label: "Specialty Greases",
    },
  ],
  oils: [
    {
      id: "1",
      label: "Transformer Oils",
    },
    {
      id: "2",
      label: "Spindle & Sewing Oils",
    },
    {
      id: "3",
      label: "Rock Drill Oils",
    },
    {
      id: "4",
      label: "Soluble Cutting Oils",
    },
  ],
};

export const ourProcess: Array<Process> = [
  {
    id: 1,
    icon: UsersRound,
    title: "Discover",
    des: "We assess your vehicle or machinery needs to recommend the right lubricants and oils.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Formulate",
    des: "Our experts select or develop the optimal lubricant formulation for maximum performance and protection.",
  },
  {
    id: 3,
    icon: ChartLine,
    title: "Test & Quality Check",
    des: "Each product undergoes rigorous testing to ensure reliability, efficiency, and safety.",
  },
  {
    id: 4,
    icon: Award,
    title: "Deliver",
    des: "We provide the lubricants along with guidance for proper usage and ongoing technical support.",
  },
];

export const contactInfo: Array<ContactInfo> = [
  {
    id: "1",
    icon: Mail,
    title: "Email Us",
    shortDes: "Send us an email anytime",
    info: "contact@innovatex.com",
  },
  {
    id: "2",
    icon: Phone,
    title: "Call Us",
    shortDes: "Speak with our team",
    info: "+1 (555) 123-4567",
  },
  {
    id: "3",
    icon: Map,
    title: "Visit Us",
    shortDes: "Come say hello",
    info: "123 Innovation Street San Francisco, CA 94105",
  },
];

export const sliderData: Array<SliderData> = [
  {
    id: "1",
    title: "Ultimate Engine Performance Guaranteed",
    subTitle: "Premium Engine Lubricants",
    shortDes:
      "Keep your engine running at its best with high-quality lubricants designed for longevity, efficiency, and smooth driving.",
  },
  {
    id: "2",
    title: "Protect Every Moving Component",
    subTitle: "Advanced Automotive Care",
    shortDes:
      "Our lubricants reduce friction, prevent wear, and enhance the lifespan of your vehicle’s vital components.",
  },
  {
    id: "3",
    title: "Efficiency and Reliability Combined",
    subTitle: "Engineered for Excellence",
    shortDes:
      " Experience superior performance and fuel efficiency with lubricants crafted for modern engines and industrial machinery.",
  },
];
