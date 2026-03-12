import type { HighlightItem } from "../../../entities/journey/types";

export const highlightsEn: readonly HighlightItem[] = [
   {
      id: "hackathon-ucasal",
      title: "University Hackathon Participation",
      org: "UCASAL",
      kind: "hackathon",

      date: { start: "2025" },
      location: "Salta, Argentina",

      description:
         "Participated with my team in a university hackathon focused on solving real-world challenges through rapid prototyping and collaborative development.",
      links: [
         {
            label: "Articulo",
            href: "https://prensa.municipalidadsalta.gob.ar/proyecto-ganador-de-salta-lab-propone-optimizar-la-movilidad-urbana/",
         },
      ],
      tags: ["Hackathon", "Teamwork", "Prototyping"],

      images: [
         {
            src: "/journey/hackathon/hackathon-1.jpg",
            alt: "Team working during the hackathon",
         },
         {
            src: "/journey/hackathon/hackathon-2.jpg",
            alt: "Project presentation during the event",
         },
         {
            src: "/journey/hackathon/hackathon-3.jpg",
            alt: "Team photo after the event",
         },
      ],

      featured: true,
   },

   {
      id: "portfolio-launch",
      title: "Professional Portfolio Launch",
      org: "Personal Project",
      kind: "milestone",

      date: { start: "2026" },

      description:
         "Designed and developed my professional portfolio with a scalable architecture, bilingual support, and a modern UI system.",

      tags: ["React", "TypeScript", "UI System"],

      images: [
         {
            src: "/journey/portfolio/portfolio-1.png",
            alt: "Main view of the portfolio website",
         },
      ],
   },
];