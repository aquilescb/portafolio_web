import type { Project } from "../../entities/project/model/types";

export const projects: Project[] = [
   {
      slug: "sgi-fundacion-espacios",
      title: "SGI — Fundación Espacios",
      summary:
         "Sistema de gestión integral: profesionales, agenda, asistencia y roles.",
      description:
         "Producto modular con RBAC, pantallas por rol y modelado orientado a procesos reales.",
      featured: true,
      role: "Fullstack (Frontend + Diseño de módulos)",
      timeframe: "2025 - Actualidad",
      tech: [
         "React",
         "TypeScript",
         "Vite",
         "Tailwind",
         "Zustand",
         "React Router",
      ],
      links: [
         {
            label: "Repo",
            href: "https://github.com/tu-user/sgi",
            kind: "github",
         },
      ],
   },
   {
      slug: "ciro-gestor-de-turnos",
      title: "CIRO — Gestor de Turnos",
      summary:
         "Gestión de turnos multi-sucursal para barberías con reporting operativo.",
      description:
         "Sistema centrado en operaciones: turnos, estados y paneles por sucursal.",
      featured: true,
      role: "Product + Fullstack",
      timeframe: "2024 - 2025",
      tech: ["React", "TypeScript", "Vite", "Tailwind", "PostgreSQL"],
      links: [
         {
            label: "Repo",
            href: "https://github.com/tu-user/ciro",
            kind: "github",
         },
      ],
   },
   {
      slug: "nexo-legal",
      title: "Nexo Legal",
      summary: "Gestión de casos, documentos y seguimiento jurídico.",
      description:
         "Modelado orientado a procesos legales con foco en orden y consistencia.",
      featured: true,
      role: "Frontend",
      timeframe: "2024",
      tech: ["React", "TypeScript", "Tailwind"],
      links: [
         {
            label: "Repo",
            href: "https://github.com/tu-user/nexo-legal",
            kind: "github",
         },
      ],
   },
   {
      slug: "ui-playground",
      title: "UI Playground",
      summary:
         "Colección de componentes y patrones UI (forms, tables, modals).",
      description:
         "Repositorio para patrones reutilizables, skeletons y consistencia visual.",
      featured: false,
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      links: [
         {
            label: "Repo",
            href: "https://github.com/tu-user/ui",
            kind: "github",
         },
      ],
   },
];

export function getAllProjects() {
   return projects;
}

export function getFeaturedProjects(limit = 3) {
   return projects.filter((p) => p.featured).slice(0, limit);
}

export function getProjectBySlug(slug: string) {
   return projects.find((p) => p.slug === slug);
}

export function getAllTech() {
   const set = new Set<string>();
   projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
   return Array.from(set).sort();
}
