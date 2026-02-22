import type { HeroContent } from "../../entities/home/types";

export const heroEs: HeroContent = {
   name: "Aquiles Cancinos",
   role: "Estudidante de Ingeniería Informática · Desarrollador Fullstack (en progreso)",
   description:
      "Ingeniero de Software en formación especializado en el diseño y construcción de sistemas escalables. Transformo requisitos complejos en soluciones de software robustas, eficientes y centradas en el usuario.",
   ctas: {
      cvLabel: "Descargar CV",
      projectsLabel: "Ver proyectos",
   },
} as const;
