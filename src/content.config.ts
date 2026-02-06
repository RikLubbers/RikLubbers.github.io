import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/publications" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['paper', 'book', 'patent', 'software']).default('paper'),
    cover: image().optional(),
    doi: z.string().optional(),
    award: z.string().optional(),
    links: z.object({
      pdf: z.string().optional(),
      code: z.string().optional(),
      website: z.string().optional(),
      demo: z.string().optional(),
      slides: z.string().optional(),
      video: z.string().optional(),
      data: z.string().optional(),
    }).optional(),
    featured: z.boolean().default(false),
    badges: z.array(z.object({
      text: z.string(),
      type: z.enum(['gold', 'blue', 'red', 'green', 'default']).default('default')
    })).optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/books" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    cover: image().optional(),
    doi: z.string().optional(),
    award: z.string().optional(),
    links: z.object({
      pdf: z.string().optional(),
      code: z.string().optional(),
      website: z.string().optional(),
      demo: z.string().optional(),
      slides: z.string().optional(),
      video: z.string().optional(),
    }).optional(),
    // Removed featured as per user request
    badges: z.array(z.object({
      text: z.string(),
      type: z.enum(['gold', 'blue', 'red', 'green', 'default']).default('default')
    })).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/team" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.enum([
      'Principal Investigator', 
      'Professor', 
      'Associate Professor',
      'Assistant Professor',
      'Postdoc', 
      'Research Assistant',
      'PhD Student', 
      'Master Student', 
      'Undergraduate', 
      'Alumni'
    ]),
    title: z.array(z.string()).optional(), // For specific academic titles like "Academician", "Changjiang Scholar"
    avatar: image(),
    bio: z.string().optional(), // Short bio for card
    email: z.string().optional(),
    website: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    googleScholar: z.string().optional(),
    weight: z.number().default(100),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image().optional(),
    order: z.number().default(100),
  }),
});

const patents = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/patents" }),
  schema: z.object({
    title: z.string(),
    inventors: z.array(z.string()),
    number: z.string(), // Patent Number
    date: z.date(),
    status: z.enum(['Granted', 'Pending', 'Filed']),
    link: z.string().optional(),
  }),
});

const softwares = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/softwares" }),
  schema: z.object({
    title: z.string(),
    developers: z.array(z.string()),
    number: z.string(), // Registration Number
    date: z.date(),
    description: z.string().optional(),
    link: z.string().optional(), // Legacy single link
    // New fields
    type: z.string().optional(), // e.g. "Research Package", "Workflow"
    stack: z.array(z.string()).optional(),
    context: z.string().optional(), // One-line research context
    links: z.object({
      github: z.string().optional(),
      docs: z.string().optional(),
      demo: z.string().optional(),
    }).optional(),
    details: z.string().optional(), // Text for expandable section
  }),
});

const honors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/honors" }),
  schema: z.object({
    title: z.string(),
    award: z.string(), // e.g., "Gold Medal", "First Prize"
    date: z.date(),
    year: z.string(), // Display year on badge
    type: z.enum(['Challenge Cup', 'Internet+', 'Other']).default('Other'),
    level: z.enum(['Special', 'First', 'Second', 'Third']).default('Third'),
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/activities" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    cover: image().optional(),
    description: z.string().optional(),
  }),
});

const positions = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/positions" }),
  schema: z.object({
    role: z.string(),
    institution: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(), // If missing, assume "present"
    current: z.boolean().default(false),
    description: z.array(z.string()).optional(), // Bullets
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date(),
  }),
});

const grants = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/grants" }),
  schema: z.object({
    title: z.string(),
    funder: z.string(),
    amount: z.string(),
    year: z.string(), // e.g. "2026", "2025-2026"
    date: z.date(), // For sorting
    role: z.string().optional(),
    purpose: z.string().optional(),
    category: z.enum(['Research', 'Impact', 'Travel']).default('Research'), // New filterable category
    funderUrl: z.string().optional(), // New link field
  }),
});

const visits = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/visits" }),
  schema: z.object({
    institution: z.string(),
    role: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date(),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/teaching" }),
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    role: z.string().optional(), // Guest lecture, etc
    date: z.date(),
    year: z.string(),
    description: z.string().optional(),
  }),
});

const training = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/training" }),
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    type: z.enum(['Methods', 'SummerSchool', 'Professional', 'Other']),
    date: z.date(),
    dateString: z.string().optional(), // "2023-2024" or "2-27 Mar 2025"
  }),
});

const service = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/service" }),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    current: z.boolean().default(false),
    description: z.string().optional(),
    type: z.enum(['board', 'commission', 'committee', 'advisory']).default('committee'),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    location: z.string(),
    category: z.enum(['fieldwork', 'workshops', 'teaching', 'talks', 'collaborations', 'personal', 'other']),
    image: z.string().refine((val) => val.startsWith('/gallery/'), {
      message: "Image path must start with '/gallery/'",
    }),
    alt: z.string().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    tags: z.array(z.string()).optional(),
    credit: z.string().optional(),
  }),
});

export const collections = {
  publications,
  softwares,
  positions,
  education,
  grants,
  visits,
  teaching,
  training,
  service,
  gallery,
};
