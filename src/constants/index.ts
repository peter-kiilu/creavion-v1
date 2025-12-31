import { Monitor, Video, PenTool, BarChart, Image } from 'lucide-react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

export const COMPANY_INFO = {
  name: "Creavion Media",
  tagline: "Powered by Creativity",
  email: "creavionmedia@gmail.com",
  phone: "+254 716969846",
  intro: "A creative digital media agency providing strategic social media management, promotional content, digital marketing, video editing, and graphic design services."
};

export const SERVICES = [
  {
    title: "Social Media Management",
    description: "Strategic content planning, posting, and audience engagement to build brand presence.",
    icon: Monitor,
  },
  {
    title: "Promotional Content & Ads",
    description: "Designing promotional content and advertisements that capture attention.",
    icon: Image,
  },
  {
    title: "Video Editing",
    description: "Professional editing tailored for social media, promotions, and digital campaigns.",
    icon: Video,
  },
  {
    title: "Digital Marketing",
    description: "Increasing visibility and reach through strategic content and targeted campaigns.",
    icon: BarChart,
  },
  {
    title: "Graphic Design",
    description: "Visually appealing designs that enhance communication and strengthen brand identity.",
    icon: PenTool,
  },
];

export const PACKAGES = [
  {
    title: "Social Media Management",
    price: "$400 - $600/mo",
    features: ["20+ Posts/month", "6-12 Reels", "Community Management", "Monthly Report", "Full Platform Management"],
  },
  {
    title: "Promo Video & Ads",
    price: "$50 - $150",
    features: ["Standard Promo (20-30s)", "Full Commercial (45-60s)", "Motion Graphics", "Brand-focused storytelling"],
  },
  {
    title: "Video Editing",
    price: "$50 - $150",
    features: ["YouTube Editing", "Podcast Editing", "Color Grading", "Advanced Motion Graphics"],
  },
  {
    title: "Branding Kit",
    price: "$60 - $100",
    features: ["Custom Logo", "Color Palette", "Typography System", "Social Media Templates"],
  },
];

export const TOOLS = [
  "Adobe Photoshop", "Adobe Premiere Pro", "Adobe After Effects", "WonderShare Filmora", "CorelDraw"
];

// --- PORTFOLIO DATA ---
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Brand Awareness Campaign",
    category: "Social Media Management",
    image: project1, // References the imported image
    description: "Delivered creative digital content aligned with brand identity."
  },
  {
    id: 2,
    title: "Product Launch Commercial",
    category: "Video Editing",
    image: project2,
    description: "High-energy promotional edit featuring motion graphics and sound design."
  },
  {
    id: 3,
    title: "Summer Festival Posters",
    category: "Graphic Design",
    image: project3,
    description: "Visually appealing poster series designed to capture audience attention."
  },
  {
    id: 4,
    title: "Instagram Reels Series",
    category: "Content Creation",
    image: project4,
    description: "Engaging short-form video content designed for maximum reach."
  },
];