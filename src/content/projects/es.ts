import type { ProjectDetail, ProjectPreview } from "../../entities/project/types";

const sgiPreview: ProjectPreview = {
   slug: "sgi-fundacion-espacios",
   title: "SGI — Fundación Espacios",
   summary:
      "Sistema de gestión integral para profesionales, agenda, asistencia y control de roles.",
   featured: true,
   role: "Fullstack Developer",
   timeframe: {
      start: "2025-01",
   },
   cover: {
      src: "/images/projects/sgi/cover.webp",
      alt: "Vista principal del sistema SGI Fundación Espacios",
   },
   tech: [
      "react",
      "typescript",
      "vite",
      "tailwind",
      "zustand",
      "nestjs",
      "postgresql",
      "prisma",
   ],
   links: [
      {
         kind: "github",
         href: "https://github.com/tuusuario/sgi-fundacion-espacios",
         label: "GitHub",
      },
      {
         kind: "youtube",
         href: "https://youtube.com/watch?v=demo-sgi",
         label: "Video",
      },
   ],
};

export const projectPreviews: readonly ProjectPreview[] = [sgiPreview];

export const projectDetails: Record<string, ProjectDetail> = {
   [sgiPreview.slug]: {
      ...sgiPreview,
      problem:
         "La gestión de profesionales, agendas y asistencia en organizaciones sociales suele realizarse con herramientas separadas o procesos manuales, lo que dificulta la coordinación diaria, el seguimiento operativo y el control de accesos según el rol de cada usuario.",

      solution:
         "Se desarrolló un sistema de gestión integral que centraliza la administración de profesionales, agendas y asistencia en una única plataforma. La solución incorpora control de permisos por roles, módulos administrativos y una interfaz clara para ordenar la operación diaria.",

      features: [
         "Gestión de pacientes y profesionales",
         "Agenda profesional con vistas operativas",
         "Registro y seguimiento de asistencia",
         "Control de accesos por roles",
         "Módulos administrativos reutilizables",
      ],

      screenshots: [
         {
            src: "/images/projects/sgi/cover.webp",
            alt: "Pantalla principal del sistema SGI",
         },
         {
            src: "/images/projects/sgi/agenda.webp",
            alt: "Vista de agenda profesional",
         },
         {
            src: "/images/projects/sgi/personal.webp",
            alt: "Gestión de profesionales en el sistema",
         },
      ],

      technologies: [
         "react",
         "typescript",
         "vite",
         "tailwind",
         "zustand",
         "nestjs",
         "postgresql",
         "prisma",
      ],

      links: sgiPreview.links,
   },
} as const;