import type { AboutContent } from "../../entities/about/types";

export const aboutEn: AboutContent = {
   whoIAm: [
      "I'm Aquiles Cancinos, a Software Engineering student focused on building products that solve real problems.",
      "I'm disciplined, adaptable, and relentlessly curious. I learn something new every day and invest in long-term growth—both technical and personal.",
      "I enjoy teamwork and believe collaboration is the fastest path to better decisions, stronger execution, and better software.",
   ],

   howIThink: [
      {
         title: "Start from the real problem",
         text: "Before writing code, I translate context into requirements and flows: users, constraints, states, and risks. The goal is impact, not just “it works”.",
      },
      {
         title: "Design to scale",
         text: "I structure projects in features/entities with clear boundaries and contracts. This keeps the system easy to extend (roles, modules, backend) without rewriting everything.",
      },
      {
         title: "Consistency and data quality",
         text: "I like strong typing, validation where it matters, and coherent naming. I aim to reduce impossible states and repeated bugs through solid structures.",
      },
      {
         title: "UX is part of the system",
         text: "A system isn’t only backend. UI states, navigation, empty/loading states and accessibility define whether it’s usable and reliable.",
      },
   ],

   disciplineBridge: [
      "Personal discipline (habits, training, long-term goals) shows up in how I build: focus, standards, and continuous improvement.",
      "It helps me sustain long projects, handle pressure, and keep quality high even when things get messy.",
   ],
} as const;
