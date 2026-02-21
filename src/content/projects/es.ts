import type { Project } from "../../entities/project/types";

export const projectsEs: readonly Project[] = [
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
] as const;
