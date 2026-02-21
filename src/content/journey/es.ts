import type { JourneyEvent } from "../../entities/journey/types";

export const journeyEs: readonly JourneyEvent[] = [
   {
      id: "edu-ucasal",
      type: "education",
      title: "Ingeniería Informática",
      org: "UCASAL",
      date: "2023",
      description:
         "Formación en ingeniería de software, bases de datos, sistemas, redes y gestión de proyectos.",
      tags: ["Sistemas", "BD", "Redes", "Gestión"],
   },
   {
      id: "cert-react",
      type: "certification",
      title: "React + TypeScript",
      org: "Certificación / Curso",
      date: "2025",
      description:
         "Profundización en componentes, routing, tipado, buenas prácticas y arquitectura escalable.",
      image: "/certificates/react-ts.png",
      tags: ["React", "TypeScript"],
      links: [{ label: "Ver certificado", href: "https://example.com" }],
   },
   {
      id: "ach-enduro",
      type: "achievement",
      title: "Enduro — disciplina y rendimiento",
      date: "2024",
      description:
         "Entrenamiento constante que refuerza enfoque, resiliencia y mentalidad de mejora continua.",
      image: "/images/enduro.jpg",
      tags: ["Disciplina", "Constancia"],
   },
] as const;
