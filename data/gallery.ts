import { FilterValue, GalleryType } from "@/types";

export const galleryCategory: Array<FilterValue> = [
  {
    id: "0",
    label: "All",
  },
  {
    id: "1",
    label: "Company",
  },
  {
    id: "2",
    label: "Products",
  },
  {
    id: "3",
    label: "Certificates",
  },
  {
    id: "4",
    label: "Events",
  },
];
const galleries: Array<GalleryType> = [
  // --- Company ---
  {
    id: "1",
    imgLink: "/images/gallery/company-01.png",
    title: "Our Production Facility",
    des: "Inside view of our state-of-the-art lubricant production facility.",
    category: "Company",

    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "2",
    imgLink: "/images/gallery/company-02.png",
    title: "R&D Lab",
    des: "Research and development lab for creating advanced lubricants.",
    category: "Company",

    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "3",
    imgLink: "/images/gallery/company-03.png",
    title: "Office Headquarters",
    des: "Our main office with administration and management teams.",
    category: "Company",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "4",
    imgLink: "/images/gallery/company-04.png",
    title: "Quality Control Room",
    des: "Ensuring all products meet the highest quality standards.",
    category: "Company",

    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "5",
    imgLink: "/images/gallery/company-05.png",
    title: "Team at Work",
    des: "Our dedicated team monitoring the production process.",
    category: "Company",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "6",
    imgLink: "/images/gallery/company-06.png",
    title: "Storage & Logistics",
    des: "Organized storage of finished products ready for shipment.",
    category: "Company",

    createdAt: "2025-08-16T00:00:00.000Z",
  },

  // --- Products ---
  {
    id: "7",
    imgLink: "/images/products/commercial.png",
    title: "Engine Oils Collection",
    des: "A variety of engine oils for cars, trucks, and motorcycles.",
    category: "Products",

    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "8",
    imgLink: "/images/products/industrial.png",
    title: "Hydraulic Oils Range",
    des: "Premium hydraulic oils designed for industrial machinery.",
    category: "Products",

    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "9",
    imgLink: "/images/products/motorcycle.png",
    title: "Brake Fluids",
    des: "High-performance brake fluids for safe braking in all conditions.",
    category: "Products",

    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "10",
    imgLink: "/images/products/commercial.png",
    title: "Coolants",
    des: "Engine coolants for temperature regulation and corrosion protection.",
    category: "Products",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "11",
    imgLink: "/images/products/industrial.png",
    title: "Gear Oils",
    des: "High-quality gear oils for smooth and efficient transmission.",
    category: "Products",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "12",
    imgLink: "/images/products/motorcycle.png",
    title: "Specialty Greases",
    des: "Advanced greases for extreme conditions and specialized machinery.",
    category: "Products",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "13",
    imgLink: "/images/products/commercial.png",
    title: "Marine Lubricants",
    des: "Lubricants formulated for ships and offshore equipment.",
    category: "Products",

    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "14",
    imgLink: "/images/products/industrial.png",
    title: "Transmission Fluids",
    des: "Advanced fluids for smooth gear shifting and transmission protection.",
    category: "Products",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "15",
    imgLink: "/images/products/motorcycle.png",
    title: "Industrial Lubricants",
    des: "Heavy-duty lubricants for industrial machinery and equipment.",
    category: "Products",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "16",
    imgLink: "/images/products/commercial.png",
    title: "Spindle & Sewing Oils",
    des: "Light oils for precision machinery and textile equipment.",
    category: "Products",
    createdAt: "2025-08-16T00:00:00.000Z",
  },

  // --- Certificates ---
  {
    id: "17",
    imgLink: "/images/gallery/certificate-01.png",
    title: "ISO 9001 Certification",
    des: "International quality management certification for our production.",
    category: "Certificates",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "18",
    imgLink: "/images/gallery/certificate-02.png",
    title: "Safety Certificate",
    des: "Certification ensuring our products meet safety standards.",
    category: "Certificates",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "19",
    imgLink: "/images/gallery/certificate-03.png",
    title: "Environmental Certificate",
    des: "Recognized for eco-friendly and sustainable production processes.",
    category: "Certificates",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "20",
    imgLink: "/images/gallery/certificate-01.png",
    title: "Quality Assurance Awards",
    des: "Awards for maintaining high quality in all products.",
    category: "Certificates",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "21",
    imgLink: "/images/gallery/certificate-02.png",
    title: "Technical Approval Certificate",
    des: "Certified for technical excellence in lubricant formulation.",
    category: "Certificates",
    createdAt: "2025-08-16T00:00:00.000Z",
  },

  // --- Events ---
  {
    id: "22",
    imgLink: "/images/gallery/event-01.png",
    title: "Industry Expo 2025",
    des: "Participating in the latest lubricant industry exhibition.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "23",
    imgLink: "/images/gallery/event-02.png",
    title: "Product Launch Event",
    des: "Launch of our new line of synthetic engine oils.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "24",
    imgLink: "/images/gallery/event-03.png",
    title: "Community Outreach",
    des: "Engaging with local communities and lubricant awareness programs.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "25",
    imgLink: "/images/gallery/event-04.png",
    title: "Award Ceremony 2025",
    des: "Receiving recognition for excellence in lubricant manufacturing.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "26",
    imgLink: "/images/gallery/event-01.png",
    title: "Trade Fair Participation",
    des: "Showcasing our products at an international trade fair.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "27",
    imgLink: "/images/gallery/event-02.png",
    title: "Workshop on Lubricants",
    des: "Educational workshop on best practices in lubricant usage.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "28",
    imgLink: "/images/gallery/event-03.png",
    title: "Annual Conference",
    des: "Annual industry conference with speakers and panel discussions.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "29",
    imgLink: "/images/gallery/event-04.png",
    title: "Customer Meet & Greet",
    des: "Engaging directly with customers to gather feedback.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: "30",
    imgLink: "/images/gallery/event-02.png",
    title: "Factory Tour Event",
    des: "Inviting partners and clients to tour our facility.",
    category: "Events",
    createdAt: "2025-08-16T00:00:00.000Z",
  },
];

export default galleries;
