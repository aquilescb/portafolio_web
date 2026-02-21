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

export type ProjectLink = {
   label: string;
   href: string;
   kind: "github" | "demo" | "docs" | "figma" | "video" | "other";
};

export type Project = {
   slug: string;
   title: string;
   summary: string;
   description: string;
   featured: boolean;
   role?: string;
   timeframe?: string;
   tech: ProjectTech[];
   links: ProjectLink[];
   // Para el detalle (después lo usamos)
   problem?: string;
   solution?: string;
   architecture?: string;
   results?: string[];
   resources?: ProjectLink[];
   tradeoffs?: string;
   learnings?: string;
   nextSteps?: string;
};
