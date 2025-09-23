import { Blog, FilterValue } from "@/types";

const blogs: Array<Blog> = [
  {
    id: 1,
    thumbnail: "/images/technology.jpg",
    title: "Driving Digital Transformation with Technology",
    slug: "driving-digital-transformation-with-technology",
    shortDes:
      "In today’s competitive market, digital transformation is no longer optional. Companies must embrace modern technologies to stay ahead. This article explores the tools and strategies that help businesses thrive in a digital-first world.",
    des: `
      <h2>Introduction</h2>
      <p><b>Digital transformation</b> is more than just adopting technology—it's about reshaping how businesses operate. 
      From customer experience to internal processes, the right digital tools can create lasting impact.</p>

      <h3>Key Areas of Transformation</h3>
      <ul>
        <li><b>Cloud adoption:</b> Scale faster and reduce costs.</li>
        <li><b>Automation:</b> Improve efficiency by reducing repetitive tasks.</li>
        <li><b>Data-driven decision-making:</b> Leverage analytics for growth.</li>
      </ul>

      <p>Agencies play a vital role in guiding businesses through this journey, ensuring technology investments align with strategic goals.</p>
    `,
    category: "Technology",
    tags: ["Tech", "Digital Transformation", "Innovation"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-01T00:00:00.000Z",
  },
  {
    id: 2,
    thumbnail: "/images/consulting.jpg",
    title: "Consulting Strategies for Modern Businesses",
    slug: "consulting-strategies-for-modern-businesses",
    shortDes:
      "Consulting is about solving real business challenges with actionable strategies. Whether it’s scaling operations or rethinking market approaches, expert consultancy ensures organizations move with clarity and purpose.",
    des: `
      <h2>Why Consulting Matters</h2>
      <p>Every business faces challenges. From <b>inefficient workflows</b> to <b>market expansion</b>, 
      the right consulting approach can unlock opportunities and minimize risks.</p>

      <h3>Consulting Services</h3>
      <ul>
        <li>Business process optimization</li>
        <li>Strategic growth planning</li>
        <li>Change management</li>
      </ul>

      <p>Agencies bring industry knowledge and proven frameworks that help companies implement strategies effectively.</p>
    `,
    category: "Consulting",
    tags: ["Consulting", "Business Strategy", "Advisory"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-05T00:00:00.000Z",
  },
  {
    id: 3,
    thumbnail: "/images/design.jpg",
    title: "Creative Design That Makes Brands Stand Out",
    slug: "creative-design-that-makes-brands-stand-out",
    shortDes:
      "Good design is more than visuals—it communicates values, builds trust, and enhances brand recognition. Agencies must blend creativity with strategy to design experiences that truly connect with audiences.",
    des: `
      <h2>The Role of Design</h2>
      <p><b>Design</b> defines how customers perceive a brand. It’s not just about aesthetics, 
      but also about usability, emotion, and storytelling.</p>

      <h3>Essential Design Services</h3>
      <ul>
        <li>Brand identity and logo creation</li>
        <li>Web and mobile UI/UX design</li>
        <li>Marketing materials & campaign assets</li>
      </ul>

      <p>When done right, design builds strong emotional connections between businesses and their customers.</p>
    `,
    category: "Design",
    tags: ["Design", "UI/UX", "Branding"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-08T00:00:00.000Z",
  },
  {
    id: 4,
    thumbnail: "/images/marketing.jpg",
    title: "Marketing Strategies for the Digital Era",
    slug: "marketing-strategies-for-the-digital-era",
    shortDes:
      "Digital marketing has transformed how companies reach and engage with audiences. Agencies must combine creativity, data, and technology to build strategies that deliver measurable results.",
    des: `
      <h2>Modern Marketing Essentials</h2>
      <p><b>Marketing</b> today is about creating personalized experiences at scale. 
      From content to advertising, every touchpoint matters.</p>

      <h3>Effective Marketing Tactics</h3>
      <ul>
        <li>Search Engine Optimization (SEO)</li>
        <li>Social media and influencer campaigns</li>
        <li>Email and automation-based marketing</li>
      </ul>

      <p>Agencies provide the expertise to align these strategies with business goals, ensuring growth and visibility.</p>
    `,
    category: "Marketing",
    tags: ["Marketing", "Digital", "SEO", "Social Media"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-12T00:00:00.000Z",
  },
  {
    id: 5,
    thumbnail: "/images/technology.jpg",
    title: "Building Scalable Mobile Applications",
    slug: "building-scalable-mobile-applications",
    shortDes:
      "Mobile applications are the backbone of modern customer engagement. Businesses rely on well-built apps to deliver value, convenience, and seamless experiences on the go.",
    des: `
      <h2>The Power of Mobile</h2>
      <p>From shopping to social interactions, mobile apps shape daily life. 
      Agencies help companies transform ideas into <b>scalable mobile solutions</b>.</p>

      <h3>Key Development Areas</h3>
      <ul>
        <li>Cross-platform apps with React Native and Flutter</li>
        <li>Performance optimization and scalability</li>
        <li>App store launch & post-release support</li>
      </ul>

      <p>Scalable mobile applications ensure businesses stay connected with customers anytime, anywhere.</p>
    `,
    category: "Technology",
    tags: ["Mobile", "App Development", "React Native"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: 6,
    thumbnail: "/images/consulting.jpg",
    title: "Business Strategy and Innovation",
    slug: "business-strategy-and-innovation",
    shortDes:
      "A well-crafted business strategy ensures sustainable growth. Agencies combine market research, innovation, and execution plans to help companies navigate challenges and capture opportunities.",
    des: `
      <h2>Why Strategy Matters</h2>
      <p>Without a clear strategy, even strong businesses risk falling behind. 
      <b>Strategic planning</b> aligns operations, people, and goals for long-term success.</p>

      <h3>Core Elements of a Winning Strategy</h3>
      <ul>
        <li>Market research and competitive analysis</li>
        <li>Innovation-focused growth</li>
        <li>Execution roadmaps with measurable outcomes</li>
      </ul>

      <p>Agencies empower businesses by crafting strategies that are not only ambitious but also achievable.</p>
    `,
    category: "Business",
    tags: ["Strategy", "Innovation", "Growth"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-20T00:00:00.000Z",
  },
  {
    id: 7,
    thumbnail: "/images/marketing.jpg",
    title: "Marketing Strategies for the Digital Era",
    slug: "marketing-strategies-for-the-digital-era",
    shortDes:
      "Digital marketing has transformed how companies reach and engage with audiences. Agencies must combine creativity, data, and technology to build strategies that deliver measurable results.",
    des: `
      <h2>Modern Marketing Essentials</h2>
      <p><b>Marketing</b> today is about creating personalized experiences at scale. 
      From content to advertising, every touchpoint matters.</p>

      <h3>Effective Marketing Tactics</h3>
      <ul>
        <li>Search Engine Optimization (SEO)</li>
        <li>Social media and influencer campaigns</li>
        <li>Email and automation-based marketing</li>
      </ul>

      <p>Agencies provide the expertise to align these strategies with business goals, ensuring growth and visibility.</p>
    `,
    category: "Marketing",
    tags: ["Marketing", "Digital", "SEO", "Social Media"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-12T00:00:00.000Z",
  },
  {
    id: 8,
    thumbnail: "/images/technology.jpg",
    title: "Building Scalable Mobile Applications",
    slug: "building-scalable-mobile-applications",
    shortDes:
      "Mobile applications are the backbone of modern customer engagement. Businesses rely on well-built apps to deliver value, convenience, and seamless experiences on the go.",
    des: `
      <h2>The Power of Mobile</h2>
      <p>From shopping to social interactions, mobile apps shape daily life. 
      Agencies help companies transform ideas into <b>scalable mobile solutions</b>.</p>

      <h3>Key Development Areas</h3>
      <ul>
        <li>Cross-platform apps with React Native and Flutter</li>
        <li>Performance optimization and scalability</li>
        <li>App store launch & post-release support</li>
      </ul>

      <p>Scalable mobile applications ensure businesses stay connected with customers anytime, anywhere.</p>
    `,
    category: "Technology",
    tags: ["Mobile", "App Development", "React Native"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-16T00:00:00.000Z",
  },
  {
    id: 9,
    thumbnail: "/images/consulting.jpg",
    title: "Business Strategy and Innovation",
    slug: "business-strategy-and-innovation",
    shortDes:
      "A well-crafted business strategy ensures sustainable growth. Agencies combine market research, innovation, and execution plans to help companies navigate challenges and capture opportunities.",
    des: `
      <h2>Why Strategy Matters</h2>
      <p>Without a clear strategy, even strong businesses risk falling behind. 
      <b>Strategic planning</b> aligns operations, people, and goals for long-term success.</p>

      <h3>Core Elements of a Winning Strategy</h3>
      <ul>
        <li>Market research and competitive analysis</li>
        <li>Innovation-focused growth</li>
        <li>Execution roadmaps with measurable outcomes</li>
      </ul>

      <p>Agencies empower businesses by crafting strategies that are not only ambitious but also achievable.</p>
    `,
    category: "Business",
    tags: ["Strategy", "Innovation", "Growth"],
    authorInfo: {
      profilePicture: "/images/avatar.png",
      name: "John Doe",
    },
    createdAt: "2025-08-20T00:00:00.000Z",
  },
];

export const blogsCategory: Array<FilterValue> = [
  {
    id: "1",
    label: "Technology",
  },
  {
    id: "2",
    label: "Consulting",
  },
  {
    id: "3",
    label: "Design",
  },
  {
    id: "4",
    label: "Marketing",
  },
  {
    id: "5",
    label: "Business",
  },
];

export default blogs;
