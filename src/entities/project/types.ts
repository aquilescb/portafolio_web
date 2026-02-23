export type ProjectTech =
   | "React"
   | "TypeScript"
   | "Vite"
   | "Tailwind"
   | "Node"
   | "NestJS"
   | "PostgreSQL"
   | "Prisma"
   | "Zustand"
   | "React Router"
   | "Framer Motion"
   | "Docker";

export type ProjectLink =
   | { kind: "github"; href: string; label?: string }
   | { kind: "youtube"; href: string; label?: string }
   | { kind: "live"; href: string; label?: string };

export type ProjectTimeframe = {
   start: string; // "2025-01" o "2025-01-15"
   end?: string; // si no existe => en curso
};

export type ProjectPreview = {
   slug: string;
   title: string;
   summary: string;
   featured: boolean;
   role?: string;

   // NUEVO para el listado
   timeframe: ProjectTimeframe;
   cover?: { src: string; alt: string };

   // Para mostrar iconos/CTAs (repo azul / youtube rojo)
   links: readonly ProjectLink[];
};

// Detalle: extiende el preview
export type ProjectDetail = ProjectPreview & {
   description: string;

   // (opcional) si querés ocultar tech en el listado, lo dejás acá
   tech?: readonly ProjectTech[];

   problem?: string;
   solution?: string;
   architecture?: string;
   results?: readonly string[];
   resources?: readonly ProjectLink[];
   tradeoffs?: string;
   learnings?: string;
   nextSteps?: string;
};
