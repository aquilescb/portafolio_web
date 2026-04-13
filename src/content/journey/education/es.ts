import type { EducationItem } from "../../../entities/journey/types";
import ucasal from "../../../assets/images/journey/Education/Ucasal.webp";
import culturabritanica from "../../../assets/images/journey/Education/culturabritanica.webp";
import saralona from "../../../assets/images/journey/Education/saralona.webp";

export const journeyEs: readonly EducationItem[] = [
   {
      id: "edu-ucasal",
      title: "Ingeniería en Informática",
      org: "Universidad Católica de Salta (UCASAL)",
      location: "Salta, Argentina",
      date: { start: "2023", end: "Present" },
      description:
         "Ingeniero Informático enfocado en el ciclo de vida completo del software: desde el diseño de arquitecturas escalables y la gestión de infraestructura crítica (redes y servidores), hasta la implementación de soluciones con IA y bases de datos robustas, garantizando siempre la seguridad y la eficiencia operativa del negocio.",
      logo: { src: ucasal, alt: "UCASAL logo" },
      links: [
         {
            label: "Plan de estudio",
            href: "https://ucasal.edu.ar/postulantes/pdf/84-1-plan.pdf",
         },
      ],
      tags: [
         "Redes",
         "Sistemas",
         "Bases de datos",
         "Proyectos Informaticos",
         "Sistemas Operativos",
         "Ingenería de Software",
         "Lenguajes",
      ] as const,
   },
   {
      id: "edu-english",
      title: "Curso de Ingles",
      org: "Instituto de Inglés (Cultura Británica de Salta)",
      location: "Salta, Argentina",
      date: { start: "2021", end: "2024" },
      description:
         "Formación en inglés con enfoque comunicacional, comprensión y escritura, nivel B2",
      logo: { src: culturabritanica, alt: "Cultura Británica logo" },
   },
   {
      id: "edu-saralona",
      title: "Educacion Secundaria",
      org: "Instituto Sara Lona ( N°8060: Instituto Maria Madre Sara Lona)",
      location: "Salta, Argentina",
      date: { start: "2018", end: "2022" },
      description:
         "Escolta de la Bandera Argentina, reconocimiento al desempeño académico.",
      logo: { src: saralona, alt: "Saralona Institute logo" },
   },
] as const;
