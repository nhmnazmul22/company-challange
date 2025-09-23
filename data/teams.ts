import { Team } from "@/types";

const teams: Array<Team> = [
  {
    id: 1,
    profilePic: "/images/avatar.png",
    name: "John Doe",
    position: "Chief Executive Officer",
    bio: "John leads the agency with over 15 years of experience in digital transformation and strategy. He loves turning complex problems into simple solutions.",
    socialMedia: [
      { name: "LinkedIn", link: "/" },
      { name: "Twitter", link: "/" },
    ],
  },
  {
    id: 2,
    profilePic: "/images/avatar.png",
    name: "Jane Smith",
    position: "Creative Director",
    bio: "Jane brings creative vision to every project, ensuring design and branding are both innovative and impactful. She has a keen eye for detail.",
    socialMedia: [
      { name: "LinkedIn", link: "/" },
      { name: "Instagram", link: "/" },
    ],
  },
  {
    id: 3,
    profilePic: "/images/avatar.png",
    name: "Alex Jones",
    position: "Lead Developer",
    bio: "Alex specializes in building scalable web and mobile applications. With deep knowledge of modern technologies, he ensures projects are delivered efficiently.",
    socialMedia: [
      { name: "GitHub", link: "/" },
      { name: "LinkedIn", link: "/" },
    ],
  },
  {
    id: 4,
    profilePic: "/images/avatar.png",
    name: "Emily Wilson",
    position: "Marketing Strategist",
    bio: "Emily crafts marketing strategies that drive growth and engagement. She is passionate about connecting brands with their audience through creative campaigns.",
    socialMedia: [
      { name: "LinkedIn", link: "/" },
      { name: "Twitter", link: "/" },
    ],
  },
];

export default teams;
