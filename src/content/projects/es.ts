import type {
   ProjectDetail,
   ProjectPreview,
} from "../../entities/project/types";

const sgiPreview: ProjectPreview = {
   slug: "sgi-fundacion-espacios",
   title: "SGI — Fundación Espacios",
   summary:
      "Sistema de gestión integral para profesionales, agenda, asistencias y control de acceso según roles.",
   featured: true,
   role: "Fullstack Developer",
   timeframe: {
      start: "2025-01",
   },
   cover: {
      src: "/images/projects/sgi/cover.webp",
      alt: "Vista principal del sistema SGI de Fundación Espacios",
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

const betaSolvePreview: ProjectPreview = {
   slug: "betasolve",
   title: "BetaSolve",
   summary:
      "Plataforma web educativa para métodos numéricos, con resolución de raíces, sistemas lineales, integración numérica y herramientas de cálculo.",
   featured: true,
   role: "Developer",
   timeframe: {
      start: "2024-01",
   },
   cover: {
      src: "/images/projects/betasolve/cover.webp",
      alt: "Vista principal de la plataforma BetaSolve",
   },
   tech: ["python", "flask", "html", "css", "javascript", "vercel"],
   links: [
      {
         kind: "github",
         href: "https://github.com/tuusuario/betasolve",
         label: "GitHub",
      },
   ],
};

export const projectPreviews: readonly ProjectPreview[] = [
   sgiPreview,
   betaSolvePreview,
];

export const projectDetails: Record<string, ProjectDetail> = {
   [sgiPreview.slug]: {
      ...sgiPreview,
      problem:
         "La gestión de profesionales, agendas y asistencias en organizaciones sociales suele resolverse con herramientas desconectadas o procesos manuales, lo que dificulta la coordinación diaria, el seguimiento operativo y el control de accesos según el rol de cada usuario.",

      solution:
         "Se desarrolló una plataforma de gestión integral para centralizar profesionales, pacientes, agenda y asistencias en un único sistema. La solución incorpora permisos por rol, módulos administrativos reutilizables y una interfaz clara pensada para agilizar la operación cotidiana.",

      features: [
         "Gestión de pacientes y profesionales",
         "Vistas operativas de agenda",
         "Registro y seguimiento de asistencias",
         "Control de acceso basado en roles",
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
            alt: "Pantalla de gestión de personal",
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

   [betaSolvePreview.slug]: {
      ...betaSolvePreview,
      problem:
         "Muchos estudiantes encuentran dificultades para comprender y aplicar métodos numéricos porque los conceptos suelen trabajarse de forma aislada, sin herramientas interactivas que permitan experimentar con ecuaciones, raíces, sistemas lineales e integración numérica de manera práctica.",

      solution:
         "BetaSolve fue desarrollado como una plataforma web educativa que reúne distintas herramientas matemáticas en un solo lugar. Permite explorar métodos numéricos mediante una interfaz clara, flujos organizados y vistas específicas para cada tipo de problema, facilitando el aprendizaje y la resolución práctica.",

      features: [
         "Resolución de raíces de ecuaciones con métodos numéricos",
         "Resolución de sistemas de ecuaciones lineales",
         "Herramientas de integración numérica",
         "Calculadora básica integrada",
         "Vistas específicas para cada proceso matemático",
         "Interfaz educativa enfocada en la práctica y el aprendizaje",
      ],

      screenshots: [
         {
            src: "/images/projects/betasolve/cover.webp",
            alt: "Pantalla principal de la plataforma BetaSolve",
         },
         {
            src: "/images/projects/betasolve/raices.webp",
            alt: "Pantalla de resolución de raíces de ecuaciones",
         },
         {
            src: "/images/projects/betasolve/sistemas.webp",
            alt: "Pantalla de resolución de sistemas lineales",
         },
      ],

      technologies: ["python", "html", "css", "javascript"],

      links: betaSolvePreview.links,
   },
} as const;
