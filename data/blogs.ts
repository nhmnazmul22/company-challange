import { Blog, FilterValue } from "@/types";

const blogs: Array<Blog> = [
  {
    id: 1,
    thumbnail: "/images/products/automotive.png",
    title: "Why Quality Automotive Lubricants Matter",
    slug: "why-quality-automotive-lubricants-matter",
    shortDes:
      "High-performance automotive lubricants protect engines, improve fuel efficiency, and extend vehicle life. Learn why choosing the right lubricant is critical for every car owner.",
    des: `
      <h2>Introduction</h2>
      <p><b>Automotive lubricants</b> reduce friction, cool engines, and prevent wear. They ensure smooth operation and long engine life.</p>
      <h3>Key Benefits</h3>
      <ul>
        <li><b>Engine Protection:</b> Prevents damage and reduces maintenance costs.</li>
        <li><b>Fuel Efficiency:</b> Enhances engine performance and reduces consumption.</li>
        <li><b>Longevity:</b> Keeps engines running longer under extreme conditions.</li>
      </ul>
    `,
    category: "Automotive",
    tags: ["Automotive", "Engine Care", "Lubricants"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-01T00:00:00.000Z",
  },
  {
    id: 2,
    thumbnail: "/images/products/automotive.png",
    title: "Commercial Lubricants for Heavy-Duty Vehicles",
    slug: "commercial-lubricants-for-heavy-duty-vehicles",
    shortDes:
      "Commercial fleets require durable lubricants that reduce breakdowns and maximize uptime. Discover how premium oils enhance fleet reliability and performance.",
    des: `
      <h2>Importance of Commercial Lubricants</h2>
      <p>Heavy-duty vehicles need lubricants that handle long hours, heavy loads, and tough conditions. Proper lubrication ensures minimal downtime and consistent performance.</p>
      <h3>Benefits</h3>
      <ul>
        <li><b>Durability:</b> Performs well under stress and long journeys.</li>
        <li><b>Reduced Downtime:</b> Fewer breakdowns and maintenance issues.</li>
        <li><b>Cost Efficiency:</b> Longer drain intervals save money.</li>
      </ul>
    `,
    category: "Commercial",
    tags: ["Commercial", "Fleet", "Lubricants"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-02T00:00:00.000Z",
  },
  {
    id: 3,
    thumbnail: "/images/products/automotive.png",
    title: "Motorcycle Oils for Peak Performance",
    slug: "motorcycle-oils-for-peak-performance",
    shortDes:
      "Specialized motorcycle oils provide engine protection, smooth gear shifting, and ride comfort. Learn why riders should invest in high-quality lubricants.",
    des: `
      <h2>Why Motorcycle Oils Matter</h2>
      <p>Motorcycle engines operate at high revs and require precise lubrication. Using premium oils reduces engine wear and improves performance.</p>
      <h3>Advantages</h3>
      <ul>
        <li><b>Heat Resistance:</b> Protects engine in hot weather and long rides.</li>
        <li><b>Smoother Gear Shifts:</b> Enhances ride experience and comfort.</li>
        <li><b>Engine Longevity:</b> Minimizes deposits and keeps engines healthy.</li>
      </ul>
    `,
    category: "Motorcycle",
    tags: ["Motorcycle", "Engine Care", "Lubricants"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-03T00:00:00.000Z",
  },
  {
    id: 4,
    thumbnail: "/images/products/automotive.png",
    title: "Industrial Lubricants for Machinery Efficiency",
    slug: "industrial-lubricants-for-machinery-efficiency",
    shortDes:
      "Industrial lubricants reduce friction, prevent overheating, and extend equipment life. Explore how these oils power modern factories and production lines.",
    des: `
      <h2>Importance of Industrial Lubricants</h2>
      <p>Machines and heavy equipment rely on high-quality lubrication for optimal performance. Proper oils reduce wear and operational costs.</p>
      <h3>Benefits</h3>
      <ul>
        <li><b>Friction Reduction:</b> Ensures smooth machinery operation.</li>
        <li><b>Heat Control:</b> Prevents overheating and damage.</li>
        <li><b>Extended Equipment Life:</b> Reduces long-term maintenance expenses.</li>
      </ul>
    `,
    category: "Industrial",
    tags: ["Industrial", "Machinery", "Lubricants"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-04T00:00:00.000Z",
  },
  {
    id: 5,
    thumbnail: "/images/products/automotive.png",
    title: "Marine Lubricants for Reliable Engine Performance",
    slug: "marine-lubricants-for-reliable-engine-performance",
    shortDes:
      "Marine lubricants protect engines and reduce corrosion in challenging sea conditions. Learn how premium oils enhance safety and efficiency on vessels.",
    des: `
      <h2>Why Marine Lubricants Are Critical</h2>
      <p>Saltwater, humidity, and continuous operation demand specialized oils. Marine lubricants protect engines and reduce maintenance costs.</p>
      <h3>Key Advantages</h3>
      <ul>
        <li><b>Corrosion Protection:</b> Shields engine parts from saltwater damage.</li>
        <li><b>High Load Capacity:</b> Performs under extreme stress.</li>
        <li><b>Operational Safety:</b> Ensures reliable performance at sea.</li>
      </ul>
    `,
    category: "Marine",
    tags: ["Marine", "Engines", "Lubricants"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-05T00:00:00.000Z",
  },
  {
    id: 6,
    thumbnail: "/images/products/automotive.png",
    title: "Transmission Fluids for Smooth Shifting",
    slug: "transmission-fluids-for-smooth-shifting",
    shortDes:
      "Transmission fluids ensure smooth gear operation, prevent wear, and extend gearbox life. Discover how selecting the right fluid keeps your vehicle running perfectly.",
    des: `
      <h2>Role of Transmission Fluids</h2>
      <p>Automatic and manual gearboxes rely on high-quality fluids for smooth, efficient operation. Premium fluids reduce wear and improve shift response.</p>
      <h3>Benefits</h3>
      <ul>
        <li><b>Smoother Shifting:</b> Reduces friction and gear noise.</li>
        <li><b>Longevity:</b> Protects transmission components for years.</li>
        <li><b>Heat Resistance:</b> Maintains performance under high temperatures.</li>
      </ul>
    `,
    category: "Transmission Fluids",
    tags: ["Transmission", "Lubricants", "Gearbox"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-06T00:00:00.000Z",
  },
  {
    id: 7,
    thumbnail: "/images/products/automotive.png",
    title: "Brake Fluids: Safety Starts Here",
    slug: "brake-fluids-safety-starts-here",
    shortDes:
      "Brake fluids are essential for vehicle safety, ensuring responsive braking and preventing system failure. Learn why quality fluids matter for all vehicles.",
    des: `
      <h2>Importance of Brake Fluids</h2>
      <p>Brake fluids transmit pressure from the pedal to the brake system. High-quality fluids ensure consistent, reliable braking performance.</p>
      <h3>Key Features</h3>
      <ul>
        <li><b>Reliable Performance:</b> Maintains braking power under all conditions.</li>
        <li><b>High Boiling Point:</b> Reduces vapor lock risk in hot conditions.</li>
        <li><b>Corrosion Protection:</b> Protects brake system components.</li>
      </ul>
    `,
    category: "Brake Fluids",
    tags: ["Brake", "Safety", "Lubricants"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-07T00:00:00.000Z",
  },
  {
    id: 8,
    thumbnail: "/images/products/automotive.png",
    title: "Coolants: Protecting Engines from Overheating",
    slug: "coolants-protecting-engines-from-overheating",
    shortDes:
      "Engine coolants prevent overheating, reduce corrosion, and maintain optimal performance. Discover how modern coolants keep engines running safely under all conditions.",
    des: `
      <h2>Why Coolants Are Vital</h2>
      <p>Coolants absorb heat and maintain the engine temperature. They protect engines from damage due to overheating or freezing.</p>
      <h3>Benefits</h3>
      <ul>
        <li><b>Temperature Control:</b> Keeps engines within safe operating ranges.</li>
        <li><b>Corrosion Prevention:</b> Protects engine and radiator components.</li>
        <li><b>Extended Life:</b> Helps avoid costly repairs due to overheating.</li>
      </ul>
    `,
    category: "Coolants",
    tags: ["Engine", "Cooling", "Lubricants"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-08T00:00:00.000Z",
  },
  {
    id: 9,
    thumbnail: "/images/products/automotive.png",
    title: "Gear Oils: Keeping Transmission Systems Healthy",
    slug: "gear-oils-keeping-transmission-systems-healthy",
    shortDes:
      "Gear oils reduce wear, prevent overheating, and ensure smooth operation of differentials and gearboxes. Learn how they improve vehicle reliability and performance.",
    des: `
      <h2>The Role of Gear Oils</h2>
      <p>Gear oils provide lubrication for transmission gears, differentials, and transfer cases. They minimize wear and protect against heat damage.</p>
      <h3>Advantages</h3>
      <ul>
        <li><b>Friction Reduction:</b> Keeps gears running smoothly.</li>
        <li><b>Heat Dissipation:</b> Prevents damage from high temperatures.</li>
        <li><b>Longevity:</b> Extends life of gearbox components.</li>
      </ul>
    `,
    category: "Gear Oils",
    tags: ["Gearbox", "Lubricants", "Automotive"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-09T00:00:00.000Z",
  },
  {
    id: 10,
    thumbnail: "/images/products/automotive.png",
    title: "Lithium Greases: Versatile Protection for Machinery",
    slug: "lithium-greases-versatile-protection-for-machinery",
    shortDes:
      "Lithium-based greases provide long-lasting lubrication for automotive, industrial, and marine applications. Explore their benefits for reducing friction and protecting moving parts.",
    des: `
      <h2>Why Lithium Greases Are Important</h2>
      <p>Lithium greases offer excellent resistance to water, high temperatures, and heavy loads. They are widely used in bearings, joints, and mechanical assemblies.</p>
      <h3>Benefits</h3>
      <ul>
        <li><b>Water Resistance:</b> Protects moving parts in wet conditions.</li>
        <li><b>High Load Capacity:</b> Maintains lubrication under heavy pressure.</li>
        <li><b>Durability:</b> Extends service intervals and reduces maintenance costs.</li>
      </ul>
    `,
    category: "Lithium Greases",
    tags: ["Greases", "Lubricants", "Machinery"],
    authorInfo: { profilePicture: "/images/avatar.png", name: "John Doe" },
    createdAt: "2025-08-10T00:00:00.000Z",
  },
];

export const blogsCategory: Array<FilterValue> = [
  {
    id: "0",
    label: "All",
  },
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
];

export default blogs;
