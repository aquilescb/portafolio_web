import type { Project } from "../../entities/project/types";

export const projectsEn: readonly Project[] = [
   {
      slug: "sgi-fundacion-espacios",
      title: "SGI — Fundación Espacios",
      summary:
         "Integrated management system: professionals, scheduling, attendance, and roles.",
      description:
         "Modular product with RBAC, role-based screens, and process-driven modeling.",
      featured: true,
      role: "Fullstack (Frontend + Module design)",
      timeframe: "2025 - Present",
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
      title: "CIRO — Appointment Manager",
      summary:
         "Multi-branch booking system for barbershops with operational reporting.",
      description:
         "Operations-first system: bookings, statuses, and branch dashboards.",
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
      summary: "Case management, documents, and legal follow-ups.",
      description:
         "Process-oriented modeling focused on consistency and clarity.",
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
         "A collection of UI components and patterns (forms, tables, modals).",
      description:
         "Reusable patterns, skeletons, and visual consistency experiments.",
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
