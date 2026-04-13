import type { HighlightItem } from "../../../entities/journey/types";
import saltalab1 from "../../../assets/images/journey/highlight/saltalab1.webp";
import saltalab2 from "../../../assets/images/journey/highlight/saltalab2.webp";
export const highlightsEn: readonly HighlightItem[] = [
   {
      id: "hackathon-saltalab",
      title: "Salta Pue - SaltaLAB Winner",
      org: "Municipality of Salta",
      kind: "hackathon",
      date: { start: "September, 2025" },
      location: "Salta, Argentina",

      description:
         "Winning project of the Salta Lab program. We proposed an urban mobility module for the official 'Munisalta' app, featuring a citizen reporting system (roadblocks, potholes, detours) and a real-time smart parking map.",

      tags: ["Munisalta App", "Teamwork", "Citizen Reporting", "Prototyping"],
      links: [
         {
            label: "Read article MunicipalidadSalta",
            href: "https://prensa.municipalidadsalta.gob.ar/proyecto-ganador-de-salta-lab-propone-optimizar-la-movilidad-urbana/",
         },
         {
            label: "Read article Tribuno",
            href: "https://www.eltribuno.com/salta/2026-1-23-18-57-0-salta-pue-el-proyecto-de-alumnos-de-ucasal-que-gano-el-programa-municipal-salta-lab",
         },
         {
            label: "Read article UCASAL",
            href: "https://www.ucasal.edu.ar/noticias/noticias-home/salta-pue-el-proyecto-de-alumnos-de-ucasal-que-gano-el-programa-municipal-salta-lab",
         },
         {
            label: "Read article Salta al Instante",
            href: "https://saltaalinstante.com/salta-lab-proyecto-ganador-propone-optimizar-la-movilidad-urbana/",
         },
         {
            label: "Watch video",
            href: "https://www.youtube.com/watch?v=eWszPJaOOQ4",
         },
      ],
      images: [
         {
            src: saltalab1,
            alt: "Salta Pue - SaltaLAB Winner",
         },
         {
            src: saltalab2,
            alt: "Salta Pue - SaltaLAB Winner",
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
         "Design and development of my portfolio featuring scalable architecture, bilingual support, and a focus on professional visual identity.",

      tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
   },
];
