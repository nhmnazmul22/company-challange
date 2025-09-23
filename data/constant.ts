import { ContactInfo, Impact, MenuItem, Process } from "@/types";
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
    label: "Services",
    link: "/services",
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

export const serviceLinks: Array<MenuItem> = [
  {
    label: "Consulting",
    link: "/services",
  },
  {
    label: "Digital Transform",
    link: "/services",
  },
  {
    label: "Development",
    link: "/services",
  },
  {
    label: "Design",
    link: "/services",
  },
];

export const ourSuccess: Array<Impact> = [
  {
    impactNum: "500+",
    impactTitle: "Projects Completed",
  },
  {
    impactNum: "98%",
    impactTitle: "Client Satisfaction",
  },
  {
    impactNum: "50+",
    impactTitle: "Team Members",
  },
  {
    impactNum: "24/7",
    impactTitle: "Support Available",
  },
];

export const ourProcess: Array<Process> = [
  {
    id: 1,
    icon: UsersRound,
    title: "Discover",
    des: "We start by understanding your business goals and requirements in detail.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Design",
    des: "Our team creates innovative solutions tailored to your specific needs.",
  },
  {
    id: 3,
    icon: ChartLine,
    title: "Develop",
    des: "We build and iterate, keeping you involved throughout the development process",
  },
  {
    id: 4,
    icon: Award,
    title: "Deliver",
    des: "We launch your solution and provide ongoing support for continued success.",
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
