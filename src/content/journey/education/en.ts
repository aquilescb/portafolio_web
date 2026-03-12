import type { EducationItem } from "../../../entities/journey/types";
import ucasal from "../../../assets/images/journey/Ucasal.webp";
import culturabritanica from "../../../assets/images/journey/culturabritanica.webp";
import saralona from "../../../assets/images/journey/saralona.webp";
export const journeyEn: readonly EducationItem[] = [
   {
      id: "edu-ucasal",
      title: "Computer Engineering",
      org: "Universidad Católica de Salta (UCASAL)",
      location: "Salta, Argentina",
      date: { start: "2023", end: "Present" },
      description:
         "Computer Engineer focused on the complete software lifecycle: from the design of scalable architectures and the management of critical infrastructure (networks and servers), to the implementation of solutions with AI and robust databases, always guaranteeing the security and operational efficiency of the business.",
      logo: { src: ucasal, alt: "UCASAL logo" },
      links: [
         {
            label: "Curriculum / Study Plan",
            href: "https://ucasal.edu.ar/postulantes/pdf/84-1-plan.pdf",
         },
      ],
      tags: [
         "Networks",
         "Systems",
         "Databases",
         "Computer Projects",
         "Operating Systems",
         "Software Engineering",
         "Langueges",
      ] as const,
   },
   {
      id: "edu-english",
      title: "Course English",
      org: "English Institute (British cultural center of Salta)",
      location: "Salta, Argentina",
      date: { start: "2021", end: "2024" },
      description:
         "Comprehensive English training with emphasis on communication skills, reading comprehension, and written expression.",
      logo: { src: culturabritanica, alt: "Cultura Británica logo" },
   },
   {
      id: "edu-saralona",
      title: "Education Secondary School",
      org: "Institute Sara Lona ( N°8060: Institute Maria Mother Sara Lona)",
      location: "Salta, Argentina",
      date: { start: "2018", end: "2022" },
      description:
         "Escort of the Argentine Flag, recognition of academic performance.",
      logo: { src: saralona, alt: "Saralona Institute logo" },
   },
] as const;
