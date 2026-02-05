import heroImage from "./assets/hero-real.jpg";

export const SITE = {
  website: "https://rik-lubbers.github.io/", // Replace with your actual deployed URL
  author: "Rik U. Lubbers",
  description:
    "PhD Candidate in Global Health and Spatial Sciences, studying maternal and child health impacts of extreme weather events in Uganda.",
  title: "Rik U. Lubbers - Global Health & Spatial Sciences",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  // Lab Info
  labName: "Rik U. Lubbers",
  university: "University of Groningen / UMCG",
  logo: "/assets/logo-real.svg", // Logo path
  avatar: "/assets/logo-real.svg", // Avatar for SEO/Schema
  email: "r.u.lubbers@rug.nl", // Contact email for Join Us page

  // Hero Section (Home Page) - Main content does not need to be translated for 8 languages by default
  hero: {
    title: "Rik U. Lubbers",
    subtitle:
      "PhD Candidate studying maternal and child health impacts of extreme weather events (floods, droughts, and compound events) in Uganda.",
    action: "View Publications", // Optional call to action text
    image: heroImage, // Hero image path
  },

  // Navigation
  nav: [
    { text: "Home", link: "/", key: "home" },
    { text: "CV", link: "/cv", key: "cv" },
    { text: "Publications", link: "/publications", key: "publications" },
    { text: "Grants", link: "/grants", key: "grants" },
    { text: "Software", link: "/software", key: "software" },
    { text: "Academic Leadership", link: "/leadership", key: "leadership" },
    { text: "Contact", link: "/contact", key: "contact" },
  ],

  // Custom Pages (Appended after 'Join Us')
  customPages: [
    // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
  ],

  // i18n Config
  i18n: {
    enabled: true,
    defaultLocale: "en",
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    link: "https://github.com/fjd2004711/scholar-lite",
    active: true,
  },
];

// Default language configuration
export const DEFAULT_LANG:
  | "zh"
  | "en"
  | "ja"
  | "ko"
  | "fr"
  | "de"
  | "es"
  | "ru" = "en";
