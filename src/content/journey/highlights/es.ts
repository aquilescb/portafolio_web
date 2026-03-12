import type { HighlightItem } from "../../../entities/journey/types";

export const highlightsEs: readonly HighlightItem[] = [
   {
      id: "hackathon-saltalab",
      title: "SaltaLAB",
      org: "Municipalidad de Salta",
      kind: "hackathon",
      date: { start: "Septiembre, 2025" },
      location: "Salta, Argentina",

      description:
         "Participación junto a mi equipo en una hackathon orientada a resolver desafíos reales mediante prototipado rápido y desarrollo colaborativo.",

      tags: ["Hackathon", "Trabajo en equipo", "Prototipado"],
      links: [
         {
            label: "Ver articulo",
            href: "https://prensa.municipalidadsalta.gob.ar/proyecto-ganador-de-salta-lab-propone-optimizar-la-movilidad-urbana/",
         },
      ],
      images: [
         {
            src: "/journey/hackathon/hackathon-1.jpg",
            alt: "Equipo trabajando durante la hackathon",
         },
         {
            src: "/journey/hackathon/hackathon-2.jpg",
            alt: "Presentación del proyecto",
         },
         {
            src: "/journey/hackathon/hackathon-3.jpg",
            alt: "Foto del equipo",
         },
      ],

      featured: true,
   },

   {
      id: "portfolio-launch",
      title: "Lanzamiento de portfolio profesional",
      org: "Proyecto personal",
      kind: "milestone",
      date: { start: "2026" },

      description:
         "Diseño y desarrollo de mi portfolio con arquitectura escalable, soporte bilingüe y enfoque en identidad visual profesional.",

      tags: ["React", "TypeScript", "UI System"],

      images: [
         {
            src: "/journey/portfolio/portfolio-1.png",
            alt: "Vista principal del portfolio",
         },
      ],
   },
];