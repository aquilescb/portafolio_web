import type { HeroContent } from "../../entities/home/types";
export const heroEn: HeroContent = {
   name: "Aquiles Cancinos",
   role: "Computer Engineering Student · Fullstack Developer (in progress)",
   description:
      "Software Engineer in training focused on designing and building scalable systems. I transform complex requirements into robust, efficient, and user-centered software solutions.",
   ctas: {
      cvLabel: "Download CV",
      projectsLabel: "View projects",
   },
} as const;
