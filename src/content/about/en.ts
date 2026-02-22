import type { AboutContent } from "../../entities/about/types";
export const aboutEn: readonly AboutContent[] = [
   {
      headline:
         "I build products with an engineering mindset: clarity, scalability, and real-world usability.",
      whoIAm: [
         "I'm Aquiles Cancinos, a Software Engineering student and an aspiring fullstack developer.",
         "I'm interested in building systems that are maintainable, scalable, and easy to understand: clean architecture, strong typing, consistent UI, and a focus on real processes.",
      ],
      howIThink: [
         {
            title: "I start from the real problem",
            text: "Before coding, I translate context into requirements and flows. I identify constraints, users, states, and risks. What matters is solving a real need, not just making it 'work'.",
         },
         {
            title: "Modular design to scale",
            text: "I prefer feature- and entity-based separation (like a real product), with clear dependencies. This enables future changes (new role, new module, backend, CMS) without rewriting everything.",
         },
         {
            title: "Consistency and data quality",
            text: "I validate what matters, keep strong typing, and define clear contracts. I aim to reduce impossible states and repeated errors through coherent structures.",
         },
         {
            title: "UX is part of the system",
            text: "A system isn't only backend: the interface decides whether it's usable. I design states, loading, empty states, accessibility, and navigation to keep things smooth.",
         },
      ],
      workMindset: [
         "I iterate fast with a solid base (skeleton → features → detail).",
         "I look for quality signals: coherence, naming, clear boundaries, tests when they add value.",
         "I work with trade-offs: I choose what maximizes impact within the available time.",
      ],
      differentiators: [
         {
            title: "Product mindset",
            text: "I think in flows, roles, and technical decisions as a real product, not as isolated tasks.",
         },
         {
            title: "Discipline + consistency",
            text: "I care about keeping momentum: small cumulative improvements and intentional refactors.",
         },
         {
            title: "Technical communication",
            text: "I like documenting decisions and explaining trade-offs in a simple way.",
         },
      ],
      disciplineBridge: [
         "Personal discipline (training, consistency, goals) shows up in how I build: incremental progress, focus, and continuous improvement.",
         "It helps me sustain long projects, handle frustration, and keep standards high.",
      ],
   },
] as const;
