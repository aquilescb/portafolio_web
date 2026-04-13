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
         "Winning project of the SaltaLAB program focused on improving urban mobility and citizen engagement through technology. We designed a proposal to enhance the official 'MuniSalta' app by integrating a real-time citizen reporting system (roadblocks, incidents, detours) and a smart parking map. The solution addresses key challenges such as traffic congestion, lack of real-time information, and low citizen interaction with municipal digital tools, promoting a more connected, efficient, and participatory city.The team profiles are: ",

      tags: [
         "MuniSalta App",
         "Smart City",
         "Teamwork",
         "Citizen Engagement",
         "Prototyping",
      ],

      links: [
         {
            label: "Read article Municipalidad de Salta",
            href: "https://prensa.municipalidadsalta.gob.ar/proyecto-ganador-de-salta-lab-propone-optimizar-la-movilidad-urbana/",
         },
         {
            label: "Read article El Tribuno",
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
      peopleIds: [
         "tomas-mollinedo",
         "maria-pellicer",
         "ramon-sutara",
         "julieta-juri",
      ],
   },
];
