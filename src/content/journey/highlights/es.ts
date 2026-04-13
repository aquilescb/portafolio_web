import type { HighlightItem } from "../../../entities/journey/types";
import saltalab1 from "../../../assets/images/journey/highlight/saltalab1.webp";
import saltalab2 from "../../../assets/images/journey/highlight/saltalab2.webp";

export const highlightsEs: readonly HighlightItem[] = [
   {
      id: "hackathon-saltalab",
      title: "Ganadores Salta Pue - SaltaLAB",
      org: "Municipalidad de Salta",
      kind: "hackathon",
      date: { start: "Septiembre, 2025" },
      location: "Salta, Argentina",

      description:
         "Proyecto ganador del programa SaltaLAB, enfocado en mejorar la movilidad urbana y la participación ciudadana mediante tecnología. Desarrollamos una propuesta para potenciar la app oficial 'MuniSalta', incorporando un módulo de reportes ciudadanos en tiempo real (cortes, desvíos, incidentes) y un mapa inteligente de estacionamiento medido. La solución aborda problemáticas críticas como la congestión vehicular, la falta de información actualizada y la baja interacción de los ciudadanos con herramientas digitales municipales, promoviendo una ciudad más conectada, eficiente y participativa. Los perfiles del equipo son:",

      tags: [
         "MuniSalta App",
         "Smart City",
         "Trabajo en equipo",
         "Participación ciudadana",
         "Prototipado",
      ],

      links: [
         {
            label: "Leer artículo Municipalidad de Salta",
            href: "https://prensa.municipalidadsalta.gob.ar/proyecto-ganador-de-salta-lab-propone-optimizar-la-movilidad-urbana/",
         },
         {
            label: "Leer artículo El Tribuno",
            href: "https://www.eltribuno.com/salta/2026-1-23-18-57-0-salta-pue-el-proyecto-de-alumnos-de-ucasal-que-gano-el-programa-municipal-salta-lab",
         },
         {
            label: "Leer artículo UCASAL",
            href: "https://www.ucasal.edu.ar/noticias/noticias-home/salta-pue-el-proyecto-de-alumnos-de-ucasal-que-gano-el-programa-municipal-salta-lab",
         },
         {
            label: "Leer artículo Salta al Instante",
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
            alt: "Salta Pue - Ganadores SaltaLAB",
         },
         {
            src: saltalab2,
            alt: "Salta Pue - Ganadores SaltaLAB",
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
