import { CompanyInfo } from "@/types";
import {
  Cog,
  Droplet,
  Eye,
  Factory,
  Globe,
  Headphones,
  Heart,
  Leaf,
  LocateFixed,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const companyInfo: CompanyInfo = {
  ourStory: {
    title: "Our Story",
    des: "Pro Lubricant is a trusted leader in high-performance lubricants, oils, and greases for automotive, industrial, marine, and specialty applications. With years of expertise, we combine innovation, technology, and sustainability to deliver products that keep engines and machinery running at peak performance.",
    otherInfo: [
      {
        id: 1,
        icon: LocateFixed,
        title: "Our Mission",
        des: "To provide premium lubricants that enhance performance, extend equipment life, and ensure reliability while promoting sustainability and innovation.",
      },
      {
        id: 2,
        icon: Eye,
        title: "Our Vision",
        des: "To be the most trusted global lubricant partner, delivering superior solutions that empower industries, drivers, and communities worldwide.",
      },
      {
        id: 3,
        icon: Heart,
        title: "Our Values",
        des: "Quality, innovation, sustainability, and customer trust are at the heart of everything we do.",
      },
    ],
  },
  ourImpact: [
    {
      id: 1,
      impactNum: "250+",
      title: "Projects Delivered",
      des: "Successful projects across various industries",
    },
    {
      id: 2,
      impactNum: "98%",
      title: "Client Satisfaction",
      des: "Average client satisfaction rating",
    },
    {
      id: 3,
      impactNum: "15+",
      title: "Years Experience",
      des: "Combined team experience in digital solutions",
    },
    {
      id: 4,
      impactNum: "25",
      title: "Countries Served",
      des: "Global reach across multiple continents",
    },
  ],
  whyChoose: [
    {
      id: 1,
      icon: Droplet,
      title: "Engine Protection",
      des: "Advanced formulations that safeguard engines and extend their lifespan.",
    },
    {
      id: 2,
      icon: Cog,
      title: "High Performance",
      des: "Lubricants engineered for maximum efficiency and smooth operation.",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Trusted Reliability",
      des: "Proven products that deliver consistent results across all conditions.",
    },
    {
      id: 4,
      icon: Leaf,
      title: "Eco-Friendly",
      des: "Sustainable solutions designed to reduce environmental impact.",
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Standards",
      des: "Certified quality meeting international benchmarks for safety and performance.",
    },
    {
      id: 6,
      icon: Headphones,
      title: "Customer Support",
      des: "Dedicated assistance ensuring smooth operations and client satisfaction.",
    },
    {
      id: 7,
      icon: Wrench,
      title: "Wide Applications",
      des: "Lubricants suitable for automotive, industrial, marine, and specialty needs.",
    },
    {
      id: 8,
      icon: Factory,
      title: "Advanced Technology",
      des: "Produced with cutting-edge manufacturing processes for superior quality.",
    },
  ],
};

export default companyInfo;
