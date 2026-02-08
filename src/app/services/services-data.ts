export const SERVICES = [
  {
    slug: "landscape-design-planning",
    title: "Landscape Design & Planning",
    description: "Tailored landscape designs, site assessments, and comprehensive planning to bring your vision to life.",
  },
  {
    slug: "sod-installation",
    title: "Sod Installation",
    description: "Expert sod installation for instant lush, healthy lawns that elevate your property's curb appeal.",
  },
  {
    slug: "pinestraw-mulch",
    title: "Pinestraw & Mulch",
    description: "High-grade pinestraw and professional mulch installation for a polished look and healthier soil.",
  },
  {
    slug: "grading-drainage",
    title: "Grading & Drainage",
    description: "Drainage solutions and grading so your property stays dry and your investment is protected.",
  },
  {
    slug: "rock-installation",
    title: "Rock Installation",
    description: "Decorative rock, river rock, and stone installation for lasting, low-maintenance landscape features.",
  },
  {
    slug: "junk-hauls",
    title: "Junk Hauls",
    description: "Junk removal and debris hauling to clear your property quickly and keep it clean and clutter-free.",
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
