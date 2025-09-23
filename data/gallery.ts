import { FilterValue, GalleryType } from "@/types";

export const galleryCategory: Array<FilterValue> = [
  {
    id: "1",
    label: "Web Design",
  },
  {
    id: "2",
    label: "Mobile App",
  },
  {
    id: "3",
    label: "Branding",
  },
  {
    id: "4",
    label: "Dashboard",
  },
  {
    id: "5",
    label: "SaaS",
  },
];

const galleries: Array<GalleryType> = [
  {
    id: "1",
    imgLink: "/images/design.jpg",
    title: "E-commerce Platform Design",
    des: "Modern e-commerce platform with intuitive user experience and seamless checkout process.",
    category: "Web Design",
    tags: ["E-commerce", "UI/UX", "Responsive"],
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "2",
    imgLink: "/images/development.jpg",
    title: "Mobile Banking App",
    des: "Secure and user-friendly mobile banking application with advanced features and modern design.",
    category: "Mobile App",
    tags: ["Mobile", "Banking", "Security"],
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "3",
    imgLink: "/images/marketing.jpg",
    title: "Corporate Branding Package",
    des: "Complete brand identity design including logo, business cards, and marketing materials.",
    category: "Branding",
    tags: ["Logo", "Branding", "Print Design"],
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "4",
    imgLink: "/images/analytics.jpg",
    title: "Analytics Dashboard",
    des: "Real-time analytics dashboard with interactive charts and comprehensive data visualization.",
    category: "Dashboard",
    tags: ["Analytics", "Data Viz", "Dashboard"],
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "5",
    imgLink: "/images/design.jpg",
    title: "Restaurant Website",
    des: "Elegant restaurant website with online ordering system and reservation management.",
    category: "Web Design",
    tags: ["Restaurant", "Food", "Booking"],
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "6",
    imgLink: "/images/development.jpg",
    title: "SaaS Product Interface",
    des: "Clean and intuitive SaaS platform interface with advanced workflow management features.",
    category: "SaaS",
    tags: ["SaaS", "B2B", "Workflow"],
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "7",
    imgLink: "/images/development.jpg",
    title: "Healthcare App Design",
    des: "Patient-focused healthcare mobile app with appointment scheduling and medical records.",
    category: "Mobile App",
    tags: ["Healthcare", "Medical", "Appointments"],
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "8",
    imgLink: "/images/design.jpg",
    title: "Creative Agency Website",
    des: "Portfolio website for creative agency showcasing projects and team capabilities.",
    category: "Web Design",
    tags: ["Portfolio", "Creative", "Agency"],
    createdAt: "2025-08-16T00:00:00.000Z",
  },
];

export default galleries;
