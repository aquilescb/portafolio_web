import type { HighlightItem } from "../../../entities/journey/types";
import saltalab1 from "../../../assets/images/journey/highlight/saltalab1.webp";
import saltalab2 from "../../../assets/images/journey/highlight/saltalab2.webp";
export const highlightsEs: readonly HighlightItem[] = [
   {
      id: "hackathon-saltalab",
      title: "Salta Pue - Ganador SaltaLAB",
      org: "Municipalidad de Salta",
      kind: "hackathon",
      date: { start: "Septiembre, 2025" },
      location: "Salta, Argentina",

      description:
         "Proyecto ganador del programa Salta Lab. Propusimos la integración de un módulo de movilidad urbana para la app oficial 'Munisalta', incluyendo un sistema de reporte ciudadano (cortes, baches, desvíos) y un mapa de estacionamiento inteligente en tiempo real.",

      tags: [
         "Munisalta App",
         "Trabajo en equipo",
         "Reporte Ciudadano",
         "Prototipado",
      ],
      links: [
         {
            label: "Ver noticia Municipalidad",
            href: "https://prensa.municipalidadsalta.gob.ar/proyecto-ganador-de-salta-lab-propone-optimizar-la-movilidad-urbana/",
         },
         {
            label: "Ver noticia Tribuno",
            href: "https://www.eltribuno.com/salta/2026-1-23-18-57-0-salta-pue-el-proyecto-de-alumnos-de-ucasal-que-gano-el-programa-municipal-salta-lab",
         },
         {
            label: "Ver noticia UCASAL",
            href: "https://www.ucasal.edu.ar/noticias/noticias-home/salta-pue-el-proyecto-de-alumnos-de-ucasal-que-gano-el-programa-municipal-salta-lab",
         },
         {
            label: "Ver noticia Salta al Instante",
            href: "https://saltaalinstante.com/salta-lab-proyecto-ganador-propone-optimizar-la-movilidad-urbana/",
         },
         {
            label: "Ver video",
            href: "https://www.youtube.com/watch?v=eWszPJaOOQ4",
         },
      ],
      images: [
         {
            src: saltalab1,
            alt: "Equipo trabajando durante la hackathon",
         },
         {
            src: saltalab2,
            alt: "Interfaz de reporte ciudadano - Prototipo Salta Pue",
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

      tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
   },
];
