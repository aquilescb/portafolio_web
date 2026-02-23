import type {
   ProjectPreview,
   ProjectDetail,
} from "../../entities/project/types";
import sgiCover from "../../assets/images/projects/novconsultoria.webp";

// 1) Definís previews como constantes (reutilizables)
const sgiPreview: ProjectPreview = {
   slug: "sgi-fundacion-espacios",
   title: "SGI — Fundación Espacios",
   summary:
      "Sistema de gestión integral: profesionales, agenda, asistencia y roles.",
   featured: true,
   role: "Fullstack (Frontend + Diseño de módulos)",
   timeframe: { start: "2025-01" }, // sin end => en curso
   cover: { src: sgiCover, alt: "Dashboard SGI" },
   links: [
      { kind: "github", href: "...", label: "Repo" },
      { kind: "youtube", href: "...", label: "Demo" },
   ],
};

export const projectPreviews: readonly ProjectPreview[] = [
   sgiPreview,
   // ...otros previews
] as const;

// 2) Details por slug, extendiendo el preview correspondiente
export const projectDetails: Record<string, ProjectDetail> = {
   [sgiPreview.slug]: {
      ...sgiPreview,
      description:
         "Producto modular con RBAC, pantallas por rol y modelado orientado a procesos reales.",
      problem: "...",
      solution: "...",
      architecture: "...",
      results: ["...", "..."],
      nextSteps: "...",
   },
};
