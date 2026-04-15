import type {
   ProjectDetail,
   ProjectPreview,
} from "../../entities/project/types";

// SGI - Fundación Espacios
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

// BetaSolve
const betaSolvePreview: ProjectPreview = {
   slug: "betasolve",
   title: "BetaSolve",
   summary:
      "Educational web platform for numerical methods, featuring equation roots, linear systems, numerical integration, and calculator tools in a unified interface.",
   featured: true,
   role: "Developer",
   timeframe: {
      start: "2024-01",
   },
   cover: {
      src: "/images/projects/betasolve/cover.webp",
      alt: "Main view of the BetaSolve platform",
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

//Projectos detalles
export const projectDetails: Record<string, ProjectDetail> = {
   [sgiPreview.slug]: {
      ...sgiPreview,
      problem:
         "Managing professionals, schedules, and attendance in social organizations is often handled through disconnected tools or manual processes, making daily coordination, operational follow-up, and role-based access control more difficult.",

      solution:
         "An integrated management platform was developed to centralize professionals, patients, scheduling, and attendance in a single system. The solution includes role-based permissions, reusable administrative modules, and a clear interface designed to improve day-to-day operations.",

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
         "nestjs",
         "postgresql",
      ],

      links: sgiPreview.links,
   },

   [betaSolvePreview.slug]: {
      ...betaSolvePreview,
      problem:
         "Many students struggle with understanding and applying numerical methods because concepts are often taught in isolation, without interactive tools that allow them to experiment with equations, roots, linear systems, and numerical integration in a practical way.",

      solution:
         "BetaSolve was developed as an educational web platform that brings together different mathematical tools in one place. It allows users to explore numerical methods through a clear interface, structured workflows, and dedicated views for each type of problem, improving both learning and practical problem solving.",

      features: [
         "Equation root solving using numerical methods (Bisection, Newton-Raphson, Secant, Regula Falsi, Fixed Point)",
         "Linear systems solving (Gauss, Gauss-Jordan, Jacobi, Seidel)",
         "Numerical integration tools (Trapezoidal and Simpson methods)",
         "Built-in basic calculator",
         "Dedicated views for each mathematical process",
         "Educational interface focused on learning and practice",
      ],

      screenshots: [
         {
            src: "/images/projects/betasolve/cover.webp",
            alt: "Main screen of the BetaSolve platform",
         },
         {
            src: "/images/projects/betasolve/raices.webp",
            alt: "Equation root solving screen",
         },
         {
            src: "/images/projects/betasolve/sistemas.webp",
            alt: "Linear systems solving screen",
         },
      ],

      technologies: ["python", "html", "css", "javascript"],

      links: betaSolvePreview.links,
   },
} as const;
