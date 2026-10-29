import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const iconLabels: Record<string, string> = {
  "logos:angular-icon": "Angular",
  "logos:astro-icon": "Astro",
  "logos:atlassian": "Atlassian",
  "logos:bitbucket": "Bitbucket",
  "logos:css-3": "CSS",
  "logos:firebase-icon": "Firebase",
  "logos:github-icon": "GitHub",
  "logos:html-5": "HTML",
  "logos:javascript": "JavaScript",
  "logos:neon-icon": "Neon",
  "logos:nextjs-icon": "Next.js",
  "logos:postgresql": "PostgreSQL",
  "logos:prisma": "Prisma",
  "logos:react": "React",
  "logos:stylus": "Stylus",
  "logos:tailwindcss-icon": "Tailwind CSS",
  "logos:typescript-icon": "TypeScript",
  "logos:vercel-icon": "Vercel",
};

export function iconLabel(icon: string) {
  return iconLabels[icon] ?? icon.split(":")[1];
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
