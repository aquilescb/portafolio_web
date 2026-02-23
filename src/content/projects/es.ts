import type {
   ProjectPreview,
   ProjectDetail,
} from "../../entities/project/types";
import sgiCover from "../../assets/images/projects/novconsultoria.webp";

export const projectPreviews: readonly ProjectPreview[] = [
   {
      slug: "sgi-fundacion-espacios",
      title: "SGI — Fundación Espacios",
      summary:
         "Sistema de gestión integral: profesionales, agenda, asistencia y roles.",
      featured: true,
      role: "Fullstack (Frontend + Diseño de módulos)",
      timeframe: { start: "2025-01" },
      cover: { src: sgiCover, alt: "Dashboard SGI" },
      links: [
         { kind: "github", href: "..." },
         { kind: "youtube", href: "..." },
      ],
   },
   // ...
];

export const projectDetails: Record<string, ProjectDetail> = {
   "sgi-fundacion-espacios": {
      ...projectPreviews[0],
      description: "Producto modular con RBAC...",
      problem: "...",
      solution: "...",
      results: ["...", "..."],
      nextSteps: "...",
   },
};
