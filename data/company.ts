import { CompanyInfo } from "@/types";
import {
  Eye,
  Heart,
  LocateFixed,
  Shield,
  Star,
  UsersRound,
  Zap,
} from "lucide-react";

const companyInfo: CompanyInfo = {
  ourStory: {
    title: "Our Story",
    des: "We are a forward-thinking digital agency specializing in innovative solutions that drive business growth. Our team combines creativity, technology, and strategic thinking to deliver exceptional results for our clients.",
    otherInfo: [
      {
        id: 1,
        icon: LocateFixed,
        title: "Our Mission",
        des: "To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and innovation in an ever-evolving digital landscape.",
      },
      {
        id: 2,
        icon: Eye,
        title: "Our Vision",
        des: "To be the leading global partner for digital transformation, setting new standards for innovation and excellence in the industry.",
      },
      {
        id: 3,
        icon: Heart,
        title: "Our Values",
        des: "We drive innovation, deliver client-focused solutions, uphold integrity, embrace learning, and build sustainable, scalable outcomes for lasting success",
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
      icon: Zap,
      title: "Innovation First",
      des: "Cutting-edge solutions that push boundaries and set new industry standards.",
    },
    {
      id: 2,
      icon: UsersRound,
      title: "Expert Team",
      des: "Seasoned professionals with deep expertise across multiple disciplines.",
    },
    {
      id: 3,
      icon: Shield,
      title: "Reliable Results",
      des: "Proven track record of delivering projects on time and exceeding expectations.",
    },
    {
      id: 4,
      icon: Star,
      title: "Quality Focus",
      des: "Meticulous attention to detail ensuring the highest quality in every projects",
    },
  ],
};

export default companyInfo;
