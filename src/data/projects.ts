import type { ui } from "@/i18n/ui";
import SaludTools from "@/assets/web-1.webp";
import PichinchaMiles from "@/assets/web-2.webp";
import ClubMiles from "@/assets/web-3.webp";
import VLink from "@/assets/web-5.webp";
import Hermes from "@/assets/web-hermes.webp";
import Loki from "@/assets/web-loki.webp";
import Apolo from "@/assets/web-apolo.webp";
import Perseus from "@/assets/web-perseus.webp";
import Thor from "@/assets/web-thor.webp";
import Atenea from "@/assets/web-atenea.webp";
import Nabu from "@/assets/web-nabu.webp";
import CogniLab from "@/assets/web-cognilab.webp";

type UiKey = keyof (typeof ui)["en"];

export const projects: {
  name: string;
  image: ImageMetadata;
  icons: string[];
  descriptionKey: UiKey;
  link: string;
}[] = [
  {
    name: "Saludtools",
    image: SaludTools,
    icons: [
      "logos:angular-icon",
      "logos:css-3",
      "logos:html-5",
      "logos:javascript",
      "logos:firebase-icon",
      "logos:atlassian",
      "logos:bitbucket",
    ],
    descriptionKey: "projects.desc.saludtools",
    link: "https://www.saludtools.com/",
  },
  {
    name: "Pichincha Miles",
    image: PichinchaMiles,
    icons: [
      "logos:stylus",
      "logos:nextjs-icon",
      "logos:css-3",
      "logos:html-5",
      "logos:javascript",
      "logos:react",
      "logos:atlassian",
      "logos:bitbucket",
    ],
    descriptionKey: "projects.desc.pichincha",
    link: "https://www.pichinchamiles.com/",
  },
  {
    name: "Club Miles Ecuador",
    image: ClubMiles,
    icons: [
      "logos:stylus",
      "logos:nextjs-icon",
      "logos:css-3",
      "logos:html-5",
      "logos:javascript",
      "logos:react",
      "logos:atlassian",
      "logos:bitbucket",
    ],
    descriptionKey: "projects.desc.clubmiles",
    link: "https://clubmiles.com.ec/",
  },
  {
    name: "VLink",
    image: VLink,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:javascript",
      "logos:github-icon",
      "logos:neon-icon",
      "logos:postgresql",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.vlink",
    link: "https://vlink.cognilab.dev/",
  },
  {
    name: "Hermes",
    image: Hermes,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:javascript",
      "logos:typescript-icon",
      "logos:github-icon",
      "logos:postgresql",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.hermes",
    link: "https://hermes.cognilab.dev/",
  },
  {
    name: "Loki",
    image: Loki,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:javascript",
      "logos:typescript-icon",
      "logos:github-icon",
      "logos:postgresql",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.loki",
    link: "https://loki.cognilab.dev/",
  },
  {
    name: "Apolo",
    image: Apolo,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:javascript",
      "logos:typescript-icon",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.apolo",
    link: "https://apolo.cognilab.dev/",
  },
  {
    name: "Perseus",
    image: Perseus,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:javascript",
      "logos:typescript-icon",
      "logos:github-icon",
      "logos:postgresql",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.perseus",
    link: "https://perseus.cognilab.dev/",
  },
  {
    name: "Thor",
    image: Thor,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:javascript",
      "logos:typescript-icon",
      "logos:github-icon",
      "logos:postgresql",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.thor",
    link: "https://thor.cognilab.dev/",
  },
  {
    name: "Atenea",
    image: Atenea,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:typescript-icon",
      "logos:prisma",
      "logos:postgresql",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.atenea",
    link: "https://atenea.cognilab.dev/",
  },
  {
    name: "Nabu",
    image: Nabu,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:typescript-icon",
      "logos:prisma",
      "logos:postgresql",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.nabu",
    link: "https://nabu.cognilab.dev/",
  },
  {
    name: "CogniLab",
    image: CogniLab,
    icons: [
      "logos:astro-icon",
      "logos:react",
      "logos:tailwindcss-icon",
      "logos:html-5",
      "logos:typescript-icon",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.cognilab",
    link: "https://cognilab.dev/",
  },
];
