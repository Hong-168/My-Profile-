export const siteConfig = {
  name: "Kea Leanghong",
  description:
    "Computer Science & Data Science and Engineering | AI, Big Data, Cloud Computing & IoT Enthusiast",
  url: "https://kealeanghong.com",
  email: "kealeanghong098@gmail.com",
  phone: "+855-98-270-741",
  address: "Phnom Penh, Cambodia",
  social: {
    facebook: "https://www.facebook.com/share/17GknyYfXZ/?mibextid=wwXIfr",
    telegram: "https://t.me/Kealeanghong",
    linkedin: "https://www.linkedin.com/in/leanghong-kea-82b0a4382/",
    github: "https://github.com/Hong-168",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/services" }, // Changed from Services to Skills
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
