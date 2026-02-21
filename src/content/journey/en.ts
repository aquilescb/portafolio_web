import type { JourneyEvent } from "../../entities/journey/types";

export const journeyEn: readonly JourneyEvent[] = [
   {
      id: "edu-ucasal",
      type: "education",
      title: "Software Engineering",
      org: "UCASAL",
      date: "2023",
      description:
         "Training in software engineering, databases, systems, networks, and project management.",
      tags: ["Systems", "DB", "Networks", "Management"],
   },
   {
      id: "cert-react",
      type: "certification",
      title: "React + TypeScript",
      org: "Certification / Course",
      date: "2025",
      description:
         "Deep dive into components, routing, typing, best practices, and scalable architecture.",
      image: "/certificates/react-ts.png",
      tags: ["React", "TypeScript"],
      links: [{ label: "View certificate", href: "https://example.com" }],
   },
   {
      id: "ach-enduro",
      type: "achievement",
      title: "Enduro — discipline & performance",
      date: "2024",
      description:
         "Consistent training that reinforces focus, resilience, and continuous improvement mindset.",
      image: "/images/enduro.jpg",
      tags: ["Discipline", "Consistency"],
   },
] as const;
