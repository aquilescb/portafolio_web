import type { Experience } from "../../entities/experience/types";

export const experienceEs: readonly Experience[] = [
   {
      id: "sgi-fundacion",
      role: "Desarrollador Fullstack (enfoque Frontend + arquitectura)",
      org: "SGI — Fundación Espacios",
      orgType: "Proyecto",
      start: "2025",
      end: "Actualidad",
      summary:
         "Construcción de un sistema modular con navegación por rol, formularios tipados y enfoque en mantenibilidad.",
      responsibilities: [
         "Diseño de arquitectura por módulos (features/entities/shared) para escalar sin acoplamiento.",
         "Implementación de pantallas por rol (Profesionales, Coordinación, Integradoras) con React Router.",
         "Formularios con validación consistente y tipado fuerte (DTOs + schemas).",
         "Componentización UI y diseño consistente con Tailwind (tokens + responsive real).",
      ],
      impact: [
         "Reducción de inconsistencias en formularios al centralizar validaciones y tipos.",
         "Mejor mantenibilidad: módulos aislados y componentes reutilizables.",
      ],
      tech: [
         "React",
         "TypeScript",
         "Vite",
         "Tailwind",
         "React Router",
         "Zustand",
      ],
      links: [{ label: "Repositorio", href: "https://github.com/tu-user/sgi" }],
   },
   {
      id: "ciro",
      role: "Product + Desarrollador Fullstack",
      org: "CIRO — Gestor de Turnos (NOVA Barber)",
      orgType: "Proyecto",
      start: "2024",
      end: "2025",
      summary:
         "Sistema orientado a operaciones: turnos, estados, flujo de atención y visión por sucursal.",
      responsibilities: [
         "Relevamiento de flujo real del negocio y traducción a historias de usuario.",
         "Modelado de estados del turno y pantallas para recepción/administración.",
         "Construcción de UI operativa con foco en velocidad y claridad.",
      ],
      impact: [
         "Estandarización del proceso de turnos y reducción de fricción operativa.",
      ],
      tech: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
      links: [
         { label: "Repositorio", href: "https://github.com/tu-user/ciro" },
      ],
   },
] as const;
