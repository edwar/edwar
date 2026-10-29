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
import Meti from "@/assets/web-meti.webp";
import Pronty from "@/assets/web-pronty.webp";
import Hercules from "@/assets/web-hercules.webp";
import Afrodita from "@/assets/web-afrodita.webp";
import Zeus from "@/assets/web-zeus.webp";

type UiKey = keyof (typeof ui)["en"];

/**
 * Display order = ranking, most to least interesting. The first FEATURED_COUNT
 * entries render as large cards. Reorder this array to change the ranking.
 */
export const FEATURED_COUNT = 3;

export const categories = ["ai", "business", "services", "commerce", "finance"] as const;
export type Category = (typeof categories)[number];

export const projects: {
  name: string;
  kind: "company" | "own";
  categories: Category[];
  image: ImageMetadata;
  icons: string[];
  descriptionKey: UiKey;
  link: string;
}[] = [
  {
    name: "Pichincha Miles",
    kind: "company",
    categories: ["commerce", "finance"],
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
    name: "Hermes",
    kind: "own",
    categories: ["business", "commerce"],
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
    name: "Afrodita",
    kind: "own",
    categories: ["ai"],
    image: Afrodita,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:typescript-icon",
      "logos:prisma",
      "logos:postgresql",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.afrodita",
    link: "https://afrodita.cognilab.dev/",
  },
  {
    name: "Saludtools",
    kind: "company",
    categories: ["services"],
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
    name: "Nabu",
    kind: "own",
    categories: ["ai"],
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
    name: "Meti",
    kind: "own",
    categories: ["services"],
    image: Meti,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:typescript-icon",
      "logos:prisma",
      "logos:postgresql",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.meti",
    link: "https://meti.cognilab.dev/",
  },
  {
    name: "Pronty",
    kind: "own",
    categories: ["business", "commerce"],
    image: Pronty,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:typescript-icon",
      "logos:prisma",
      "logos:postgresql",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.pronty",
    link: "https://pronty.vercel.app/",
  },
  {
    name: "Zeus",
    kind: "own",
    categories: ["business"],
    image: Zeus,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:typescript-icon",
      "logos:prisma",
      "logos:postgresql",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.zeus",
    link: "https://zeus.cognilab.dev/es",
  },
  {
    name: "Thor",
    kind: "own",
    categories: ["commerce"],
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
    kind: "own",
    categories: ["finance"],
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
    name: "Apolo",
    kind: "own",
    categories: ["ai"],
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
    name: "Hercules",
    kind: "own",
    categories: ["business", "services"],
    image: Hercules,
    icons: [
      "logos:nextjs-icon",
      "logos:tailwindcss-icon",
      "logos:typescript-icon",
      "logos:prisma",
      "logos:github-icon",
      "logos:vercel-icon",
    ],
    descriptionKey: "projects.desc.hercules",
    link: "https://hercules.cognilab.dev/",
  },
  {
    name: "Loki",
    kind: "own",
    categories: ["business", "finance"],
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
    name: "Club Miles Ecuador",
    kind: "company",
    categories: ["commerce"],
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
    name: "Perseus",
    kind: "own",
    categories: ["finance"],
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
    name: "VLink",
    kind: "own",
    categories: ["services"],
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
    name: "CogniLab",
    kind: "own",
    categories: [],
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
