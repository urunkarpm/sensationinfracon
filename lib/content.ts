import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface SiteConfig {
  name: string;
  alternateNames: string[];
  phone: string;
  email: string;
  whatsapp: string;
  copyright: string;
  referralUrl: string;
  formspreeEndpoint: string;
  youtubeVideoId: string;
  youtubeUrl: string;
  slogans: string[];
  home: {
    title: string;
    description: string;
    heroHeadline: string;
    primaryCta: string;
    secondaryCta: string;
    introText: string;
    projectTypes: {
      id: string;
      title: string;
      code: string;
      description: string;
    }[];
    howWeDoIt: {
      headline: string;
      points: string[];
    };
    valueSection: {
      title: string;
      pillars: {
        name: string;
        metrics: string;
        detail: string;
      }[];
    };
    process: {
      step: string;
      title: string;
      description: string;
    }[];
    returnsCta: string;
  };
}

export interface Office {
  id: string;
  city: string;
  isHeadOffice: boolean;
  designation: string;
  addressLines: string[];
  phone: string;
  email: string;
  mapQuery: string;
  mapUrl: string;
}

export interface Project {
  slug: string;
  name: string;
  city: string;
  type: string;
  typeSlug: string;
  status: string;
  plotSizes: string;
  priceFrom: string;
  reraNumber: string;
  description: string;
  mapCoordinates: string;
  gallery: {
    id: string;
    label: string;
    aspect: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  project: string;
  city: string;
  quote: string;
  photoPlaceholder: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getSiteConfig(): SiteConfig {
  const filePath = path.join(contentDirectory, 'site.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getOffices(): Office[] {
  const filePath = path.join(contentDirectory, 'offices.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getProjects(): Project[] {
  const filePath = path.join(contentDirectory, 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug);
}

export function getPartners() {
  const filePath = path.join(contentDirectory, 'partners.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getTestimonials(): Testimonial[] {
  const filePath = path.join(contentDirectory, 'testimonials.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getBlogPosts(): BlogPostMeta[] {
  const blogDir = path.join(contentDirectory, 'blog');
  if (!fs.existsSync(blogDir)) return [];
  const filenames = fs.readdirSync(blogDir);

  const posts = filenames
    .filter((fn) => fn.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: data.slug || filename.replace(/\.md$/, ''),
        title: data.title,
        date: data.date,
        image: data.image,
        category: data.category,
        excerpt: data.excerpt,
      } as BlogPostMeta;
    });

  return posts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const blogDir = path.join(contentDirectory, 'blog');
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title,
    date: data.date,
    image: data.image,
    category: data.category,
    excerpt: data.excerpt,
    content,
  };
}
