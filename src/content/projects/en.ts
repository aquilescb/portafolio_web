import type { ProjectDetail, ProjectPreview } from "../../entities/project/types";

const sgiPreview: ProjectPreview = {
   slug: "sgi-fundacion-espacios",
   title: "SGI — Fundación Espacios",
   summary:
      "Integrated management system for professionals, scheduling, attendance tracking, and role-based access control.",
   featured: true,
   role: "Fullstack Developer",
   timeframe: {
      start: "2025-01",
   },
   cover: {
      src: "/images/projects/sgi/cover.webp",
      alt: "Main view of the SGI Fundación Espacios system",
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
         "Managing professionals, schedules, and attendance in social organizations is often handled through disconnected tools or manual processes, making daily coordination, operational follow-up, and role-based access control more difficult.",

      solution:
         "An integrated management platform was developed to centralize professionals, scheduling, and attendance in a single system. The solution includes role-based permissions, administrative modules, and a clear interface designed to improve day-to-day operations.",

      features: [
         "Patient and professional management",
         "Operational scheduling views",
         "Attendance tracking and follow-up",
         "Role-based access control",
         "Reusable administrative modules",
      ],

      screenshots: [
         {
            src: "/images/projects/sgi/cover.webp",
            alt: "Main screen of the SGI system",
         },
         {
            src: "/images/projects/sgi/agenda.webp",
            alt: "Professional scheduling view",
         },
         {
            src: "/images/projects/sgi/personal.webp",
            alt: "Professional management screen",
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