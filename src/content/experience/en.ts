import type { Experience } from "../../entities/experience/types";

export const experienceEn: readonly Experience[] = [
   {
      id: "sgi-fundacion",
      role: "Fullstack Developer (Frontend + Architecture focus)",
      org: "SGI — Fundación Espacios",
      orgType: "Project",
      start: "2025",
      end: "Present",
      summary:
         "Development of a modular system with role-based navigation, strongly typed forms, and a focus on maintainability.",
      responsibilities: [
         "Designed modular architecture (features/entities/shared) to scale without tight coupling.",
         "Implemented role-based screens (Professionals, Coordination, Integrators) with React Router.",
         "Built strongly typed forms with consistent validation (DTOs + schemas).",
         "Created reusable UI components with Tailwind (design tokens + real responsiveness).",
      ],
      impact: [
         "Reduced form inconsistencies by centralizing validation and types.",
         "Improved maintainability through isolated modules and reusable components.",
      ],
      tech: [
         "React",
         "TypeScript",
         "Vite",
         "Tailwind",
         "React Router",
         "Zustand",
      ],
      links: [{ label: "Repository", href: "https://github.com/tu-user/sgi" }],
   },
   {
      id: "ciro",
      role: "Product + Fullstack Developer",
      org: "CIRO — Appointment Manager (NOVA Barber)",
      orgType: "Project",
      start: "2024",
      end: "2025",
      summary:
         "Operations-oriented system: bookings, statuses, service flow, and branch-level visibility.",
      responsibilities: [
         "Mapped real business flow into structured user stories.",
         "Modeled booking states and built reception/admin dashboards.",
         "Developed operational UI focused on speed and clarity.",
      ],
      impact: [
         "Standardized appointment workflow and reduced operational friction.",
      ],
      tech: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
      links: [{ label: "Repository", href: "https://github.com/tu-user/ciro" }],
   },
] as const;
